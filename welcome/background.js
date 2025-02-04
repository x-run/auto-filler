chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL('welcome/hello.html')
    let tab = await chrome.tabs.create({url})
    console.log(`Created tab ${tab.id}`)
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received message:", request); 
    // 処理をここに記述
  });