chrome.action.onClicked.addListener(async () => {
  console.log("clicked");
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tabs[0]?.id) {
    return;
  }
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    files: ["content.js"],
  });
});
