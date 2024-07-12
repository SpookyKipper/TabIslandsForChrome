document.addEventListener('click', (event) => {
    console.log("clicked")
    const clickedLink = event.target;
    if (clickedLink.tagName === 'A' && (clickedLink.target === '_blank' || clickedLink.target === 'new')) {
      // Send message to background script
      console.log(clickedLink.href)
      chrome.runtime.sendMessage({ type: 'link-opened', url: clickedLink.href });
    }
    chrome.storage.sync.get(
        {auto_disband_group: true, auto_created_group_name: "Island"},
        (items) => {
            document.getElementById('auto_disband_group').checked = items.auto_disband_group;
            document.getElementById('auto_created_group_name').value = items.auto_created_group_name;
        }
      );
  });
  