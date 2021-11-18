// Setting a toolbar badge text
browser.runtime.onMessage.addListener((request, sender) => {
  // This cache stores page load time for each tab, so they don't interfere
  //startStop();
  browser.storage.local.get('cache').then(data => {
    if (!data.cache) data.cache = {};
    data.cache['tab' + sender.tab.id] = request.timing;
    browser.storage.local.set(data).then(() => {
      browser.browserAction.setBadgeText({text: request.time, tabId: sender.tab.id});
      browser.browserAction.setPopup({tabId: sender.tab.id, popup: "popup.html"})
    });
  });

});

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

browser.runtime.onInstalled.addListener(function(info){
    if (info.reason == "install"){
      const value = { id: uuidv4() };
      browser.storage.local.set({'uniqueID': value}).then(() => {
          console.log('Stored id: ' + value.id);
      });
    }
});

// cache eviction
browser.tabs.onRemoved.addListener(tabId => {
  browser.storage.local.get('cache').then(data => {
    if (data.cache) delete data.cache['tab' + tabId];
    browser.storage.local.set(data);
  });
});
