// Tab Group Naming Function //
const nameTabGroup = (groupId) => {
    chrome.storage.sync.get(
        {auto_created_group_name: "Island"},
        (items) => {
            if (items.auto_created_group_name != "") {
                chrome.tabGroups.update(groupId, {title: items.auto_created_group_name})
            }
        }
      );
}
// Group Tabs //
    // Check if pending url is here //
const groupTabs = (tab) => {
    console.log(tab);
    if ((tab.pendingUrl !== "" && typeof(tab.pendingUrl) != "undefined")) {
      //  console.log("success" + tab)
        groupTabsAction(tab);
    } else {
      //  console.log("failed" + tab)
        setTimeout(() => {
            checkTab(tab);
        }, 10)
    }
}
    // re-get tab info //
const checkTab = (tab) => {
    chrome.tabs.get(tab.id, (tab) => {
        groupTabs(tab);
    });
}
    // actually group the tabs //
const groupTabsAction = (tab) => {
    if (tab.openerTabId && !(tab.pendingUrl.includes("chrome://")) && !(tab.pendingUrl.includes("extension://")) && tab.groupId === -1) {
        chrome.tabs.get(tab.openerTabId, (openerTab) => {
            if (!openerTab.pinned) {
                chrome.tabs.group({
                    tabIds: [tab.openerTabId, tab.id]
                }, (groupId) => {
                    nameTabGroup(groupId);
                });
            }
        })  
    }
}

// Detect New Tabs opened via Middle Click //
setTimeout(() => {
    chrome.tabs.onCreated.addListener((tab) => {
        console.log("new tab created");
        groupTabs(tab);
    });
}, 2500);

// Detect New Tabs opened via Anchor Tag with _blank target //
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'link-opened') {
        const openedUrl = message.url;
        chrome.tabs.query({}, (tabs) => {
            for (const tab of tabs) {
                console.log(tabs);
                if ((tab.pendingUrl === openedUrl)) {
                    groupTabs(tab);
                    break;
                }
            }
        });
    }
});


// Disband Tab Islands with only 1 tab //
chrome.storage.sync.get(
    { auto_disband_group: true },
    (items) => {
        if (items.auto_disband_group) {
            chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
                chrome.tabGroups.query({}, (info) => {
                    info.forEach(element => {
                        chrome.tabs.query({ groupId: element.id }, (tabs) => {
                            if (tabs.length <= 1) {
                                chrome.tabs.ungroup(tabs[0].id)
                            }
                        });
                    });
                })
            });

        }
    }
);


// New tab in group keyboard shortcut //
chrome.commands.onCommand.addListener((command) => {
    if (command === "newTabInGroup") {
        chrome.tabs.query({active: true}, (tabs) => {
            const tab = tabs[0];
            if (!tab.pinned) {
                chrome.tabs.create({active: true, index: tab.index+1}, (newtab) => {
                    if (tab.groupId >= 0) {
                        chrome.tabs.group({tabIds: [newtab.id], groupId: tab.groupId})
                    } else {
                        chrome.tabs.group({tabIds: [newtab.id, tab.id]}, (groupId) => {
                            nameTabGroup(groupId);
                        })
                    }
                })
            }

        })
    }
});