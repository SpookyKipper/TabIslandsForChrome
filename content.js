document.addEventListener('click', (event) => {
    console.log("clicked")
    const clickedLink = event.target;
    if (clickedLink.tagName === 'A' && (clickedLink.target === '_blank' || clickedLink.target === 'new')) {
      // Send message to background script
      console.log(clickedLink.href)
      chrome.runtime.sendMessage({ type: 'link-opened', url: clickedLink.href });
    }
  });
  