chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL('welcome/hello.html')
    let tab = await chrome.tabs.create({url})
    console.log(`Created tab ${tab.id}`)
})

// document.getElementById('next').addEventListener(() =>{
//     chrome.tabs.create({url: 'https://www.google.com'});
    
// })

