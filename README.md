# Tab Islands for Chrome
### A recreation of the Automatic Tab Islands creation feature from the Opera One browser

Features:<br>
- ✅ Automatic Tab Groups Creation (Custom Tab Group Names)<br>
  - Default & Search Engine tabs can be set differently!<br>
- ✅ Auto Disband Groups with only 1 tabs (togglable)<br>
- ✅ Alt+T Shortcut (shortcut changable/deletable)

---
👍 Tested **working** on:<br>
- Chrome Stable: 126.0.6478.126 [Linux]
- Brave	Stable: 1.67.123 (Chromium: 126.0.6478.126) [Linux]
- Microsoft Edge: 126.0.2592.87 [Win11]
  
You may need to download the source, extract it, than load unpacked if you get `This extension is not from any known source, and may have been added without your knowledge.` with the crx file. This will not be required when it is listed on the Chrome Web Store.

---
⚠️ Using any third-party newtab extensions or a custom newtab page may break extension functionality

---
## 1. Automatic Tab Groups Creation
| No Tab Group Name     | ![](https://github.com/SpookyKipper/TabIslandsForChrome/blob/main/repo_assets/AutoCreateNoName.gif)      | 
| ------------- | ------------- | 
| Custom Tab Group Name          | ![](https://github.com/SpookyKipper/TabIslandsForChrome/blob/main/repo_assets/AutoCreateWithName.gif)         | 



## 2. Auto Disband Groups with only 1 tabs 
Can be toggled via extension options
| ![](https://github.com/SpookyKipper/TabIslandsForChrome/blob/main/repo_assets/AutoDisband.gif) |
| ------------- |

## 3. Alt+T Shortcut 
No Mouse Click is involved <br>
Changable/deletable via `chrome://extensions/shortcuts`
| Active Tab not in group: <br> Create new group | ![](https://github.com/SpookyKipper/TabIslandsForChrome/blob/main/repo_assets/AltPlusT.gif) |
| ------------- | ------------- |
| Active Tab already in group: <br> Add to existing gruop | ![AltPlusT_InGroup](https://github.com/user-attachments/assets/514657e2-44a1-456c-9875-4f14bd333b8d)




## Extension Options
Settings are available via Extension Popup -> "Go to options" button
### Name for automatically created groups (Default)
This is the name for the Tab Groups being automatically created by the extension. <br>
Available Variables: *Experimental*<br>
- `%domain%`
  - `google.com` will return `Google`
  - `web.whatsapp.com` will return `Whatsapp`
  - `www.google.com.hk` will return `Google`
### Name for automatically created groups (Search Engines)
This is the name for the Tab Groups being automatically created by the extension, but the tab you created the new tab on is a search engine.<br>
Available Variables:<br>
- `%search_query%` Your search engine search query
  - You searched `cat pics` on Google, the tab group name will be `cat pics`.

Supported Search Engines: Google, Bing, BraveSearch, Ecosia, DuckDuckGo
### Disband Groups with only 1 tab in it
- A toggle to whether automatically ungroup tab groups with only 1 tab in it



## Credits
Extension Icon: Reshot
