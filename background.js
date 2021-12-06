// Setting a toolbar badge text
browser.runtime.onMessage.addListener((request, sender) => {
  // This cache stores page load time for each tab, so they don't interfere
  //startStop();
  browser.storage.local.get('cache').then(data => {
    if (!data.cache) data.cache = {};
    data.cache['tab' + sender.tab.id] = request.timing;

    browser.storage.local.set(data).then(() => {
      browser.browserAction.setBadgeText({text: request.time+"s", tabId: sender.tab.id});
      browser.browserAction.setPopup({tabId: sender.tab.id, popup: "popup.html"})
      browser.browserAction.setTitle({title: 'Current page loaded in '+ Math.round(request.timing.duration)+' ms'});
    });
    data_sharing(data, sender.tab.id, sender.tab.url)
  });

});

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function data_sharing(data, tab_id, url){

  var t = data.cache['tab' + tab_id];

  redirect_ms       = Math.round(t.redirectEnd - t.redirectStart)
  dns_ms            = Math.round(t.domainLookupEnd - t.domainLookupStart)
  connect_ms        = Math.round(t.connectEnd - t.connectStart)
  request_ms        = Math.round(t.responseStart - t.requestStart)
  response_ms       = Math.round(t.responseEnd - t.responseStart)
  dom_ms            = Math.round(t.domComplete - t.responseEnd)
  domParse_ms       = Math.round(t.domInteractive - t.responseEnd)
  domScripts_ms     = Math.round(t.domContentLoadedEventStart - t.domInteractive)
  contentLoaded_ms  = Math.round(t.domContentLoadedEventEnd - t.domContentLoadedEventStart)
  domSubRes_ms      = Math.round(t.domComplete - t.domContentLoadedEventEnd)
  load_ms           = Math.round(t.loadEventEnd - t.loadEventStart)
  total_ms          = t.duration
  tabUrl            = url

  browser.storage.local.get('sharingOption').then(data => {
    console.log('sharing option : ' + data.sharingOption.share);
    sharing = data.sharingOption.share;

    if (sharing == 0){
      // alert(sharing)
    }
    if (sharing == 1){
      // alert(sharing)
      fetch("https://ipinfo.io/json?token=0a0c3bdf30704b").then(
      (response) => response.json()).then((jsonResponse) => {user_city = jsonResponse.city
      user_isp = jsonResponse.org})
      browser.storage.local.get('uniqueID').then(data => {userID = data.uniqueID.id});
      const record = {
        uid         : userID,
        city        : user_city,
        isp         : user_isp,
        timestamp   : new Date(t.start).toString(),
        url         : tabUrl,
        redirect    : redirect_ms,
        dns         : dns_ms,
        connect     : connect_ms,
        request     : request_ms,
        response    : response_ms,
        dom         : dom_ms,
        domParse    : domParse_ms,
        domScripts  : domScripts_ms,
        contentLoaded: contentLoaded_ms,
        domSubRes   : domSubRes_ms,
        load        : load_ms,
        total       : total_ms
      };
      const myJSON = JSON.stringify(record);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://measurements.duckdns.org/dbwork/phpstore_all_cityLoc.php");
      xhr.setRequestHeader("Content-type", "application/json")
      xhr.send(myJSON);
    }

    if (sharing == 2){
      // alert(sharing)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          fetch("https://ipinfo.io/json?token=0a0c3bdf30704b").then(
          (response) => response.json()).then((jsonResponse) => {user_city = jsonResponse.city
          user_isp = jsonResponse.org})
          browser.storage.local.get('uniqueID').then(data => {userID = data.uniqueID.id});
          const record = {
            uid         : userID,
            city        : user_city,
            isp         : user_isp,
            timestamp   : new Date(t.start).toString(),
            url         : tabUrl,
            redirect    : redirect_ms,
            dns         : dns_ms,
            connect     : connect_ms,
            request     : request_ms,
            response    : response_ms,
            dom         : dom_ms,
            domParse    : domParse_ms,
            domScripts  : domScripts_ms,
            contentLoaded: contentLoaded_ms,
            domSubRes   : domSubRes_ms,
            load        : load_ms,
            total       : total_ms,
            latitude    : lat.toFixed(6),
            longitude   : long.toFixed(6)
          };
          const myJSON = JSON.stringify(record);

          var xhr = new XMLHttpRequest();
          xhr.open("POST", "https://measurements.duckdns.org/dbwork/phpstore_all_LatLong.php");
          xhr.setRequestHeader("Content-type", "application/json")
          xhr.send(myJSON);
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
  });
}

browser.runtime.onInstalled.addListener(function(info){
    if (info.reason == "install"){
      const value = { id: uuidv4() };
      browser.storage.local.set({'uniqueID': value}).then(() => {
          console.log('Stored id: ' + value.id);
          localStorage.setItem('uniqueID',value.id);
      });

      const sharing_option = { share: 1 };
      browser.storage.local.set({'sharingOption': sharing_option}).then(() => {
          console.log('sharing option : ' + sharing_option.share);
          localStorage.setItem('sharingOption', sharing_option.share);
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
