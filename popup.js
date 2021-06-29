var total = 0;

function set(id, start, end, noacc) {
  var length = Math.round(end - start);
  var x = Math.round(start / total * 300);
  document.getElementById(id + 'When').innerHTML = Math.round(start);
  document.getElementById(id).innerHTML = length;
  document.getElementById(id + 'Total').innerHTML = noacc ? '-' : Math.round(end);
  document.getElementById('r-' + id).style.cssText =
    'background-size:' + Math.round(length / total * 300) + 'px 100%;' +
    'background-position-x:' + (x >= 300 ? 299 : x) + 'px;';
}

document.addEventListener('DOMContentLoaded', function() {
  var checkboxelement = document.getElementById('chk1');
  checkboxelement.addEventListener('change', function() {
    if(document.getElementById("chk1").checked == true){
      showCustomer();
    }else{
      document.getElementById("demo").innerHTML = "";
    }
  }, false);
}, false);

function showCustomer() {
  str = document.getElementById("tabUrl").innerHTML;
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "http://34.89.29.21/phpretrieve.php?q="+str);
  xhttp.send();
}

function storeindB() {
  const record = {
    timestamp   : document.getElementById("requestStart").innerHTML,
    url         : document.getElementById("tabUrl").innerHTML,
    redirect    : document.getElementById("redirect").innerHTML,
    dns         : document.getElementById("dns").innerHTML,
    connect     : document.getElementById("connect").innerHTML,
    request     : document.getElementById("request").innerHTML,
    response    : document.getElementById("response").innerHTML,
    dom         : document.getElementById("dom").innerHTML,
    domParse    : document.getElementById("domParse").innerHTML,
    domScripts  : document.getElementById("domScripts").innerHTML,
    contentLoaded: document.getElementById("contentLoaded").innerHTML,
    domSubRes   : document.getElementById("domSubRes").innerHTML,
    load        : document.getElementById("load").innerHTML,
    total       : document.getElementById("total").innerHTML
  };
  const myJSON = JSON.stringify(record);
  document.getElementById("demo").innerHTML = myJSON;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/phpstore.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhr.send(myJSON);
}
browser.tabs.query({active: true, currentWindow: true}).then(tabs => {
  var tab = tabs[0];
  browser.storage.local.get('cache').then(data => {
    var t = data.cache['tab' + tab.id];
    total = t.duration;

    // https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html#processing-model
    set('redirect', t.redirectStart, t.redirectEnd);
    set('dns', t.domainLookupStart, t.domainLookupEnd);
    set('connect', t.connectStart, t.connectEnd);
    set('request', t.requestStart, t.responseStart);
    set('response', t.responseStart, t.responseEnd);
    set('dom', t.responseEnd, t.domComplete);
    set('domParse', t.responseEnd, t.domInteractive);
    set('domScripts', t.domInteractive, t.domContentLoadedEventStart);
    set('contentLoaded', t.domContentLoadedEventStart, t.domContentLoadedEventEnd);
    set('domSubRes', t.domContentLoadedEventEnd, t.domComplete);
    set('load', t.loadEventStart, t.loadEventEnd);
    document.getElementById("total").innerHTML = Math.round(t.duration);
    document.getElementById("requestStart").innerHTML = new Date(t.start).toString();
    document.getElementById("tabUrl").innerHTML = tab.url;
    // storeindB();

    const record = {
      timestamp   : document.getElementById("requestStart").innerHTML,
      url         : document.getElementById("tabUrl").innerHTML,
      redirect    : document.getElementById("redirect").innerHTML,
      dns         : document.getElementById("dns").innerHTML,
      connect     : document.getElementById("connect").innerHTML,
      request     : document.getElementById("request").innerHTML,
      response    : document.getElementById("response").innerHTML,
      dom         : document.getElementById("dom").innerHTML,
      domParse    : document.getElementById("domParse").innerHTML,
      domScripts  : document.getElementById("domScripts").innerHTML,
      contentLoaded: document.getElementById("contentLoaded").innerHTML,
      domSubRes   : document.getElementById("domSubRes").innerHTML,
      load        : document.getElementById("load").innerHTML,
      total       : document.getElementById("total").innerHTML
    };
    const myJSON = JSON.stringify(record);
    //document.getElementById("demo").innerHTML = myJSON;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://34.89.29.21/phpstore.php");
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(myJSON);
    //document.getElementById("demo2").innerHTML = myJSON;

  });

});
