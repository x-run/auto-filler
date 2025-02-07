document.getElementById('next').addEventListener(() =>{
    chrome.tabs.create({url: 'https://www.google.com'});
    
})