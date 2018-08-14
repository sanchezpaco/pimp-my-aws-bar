chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({'flywire-production': {color: 'red'}});
  chrome.storage.sync.set({'flywire-playground':  {color: 'green'}});
  chrome.storage.sync.set({'flywire-staging':  {color: 'yellow'}});
  
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: 'console.aws.amazon.com'},
      })
      ],
          actions: [
            new chrome.declarativeContent.ShowPageAction(), 
            new chrome.declarativeContent.RequestContentScript({js: ['content.js']})
          ]
    }]);
  });
});