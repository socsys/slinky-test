var total = 0;
var top1m = [];
var sendTofetch = [];
var tranco_list_version = "";
var update_tranco_list = 2;
var open_dropdown = 0;

var ary = [];


var RandArray = [-1];
var testoarray =["hello", "there"];

function set(id, start, end, noacc) {
  var length = Math.round(end - start);
  var x = Math.round(start / total * 300);
  // document.getElementById(id + 'When').innerHTML = Math.round(start);
  document.getElementById(id).innerHTML = length;
  // document.getElementById(id + 'Total').innerHTML = noacc ? '-' : Math.round(end);
  // document.getElementById('r-' + id).style.cssText =
  //   'background-size:' + Math.round(length / total * 300) + 'px 100%;' +
  //   'background-position-x:' + (x >= 300 ? 299 : x) + 'px;';
}

function fetchpages(arra){
  // document.addEventListener('DOMContentLoaded', function() {
    // var buttonelement = document.getElementById('alexab');
    var buttonelement = document.getElementById('aa01');
    buttonelement.addEventListener('click', function() {
      var content2 = this.nextElementSibling;
      if(content2.style.display == "block"){
        for (i = 0; i < 5; i++){
          // alert("Hello!");
          var getou = arra[i];
          fetch(getou)
          .then(response => response.text())

          // .then(data => document.getElementById("demo3").innerHTML = data);
          // var x = document.createElement("div");
          // if(document.readyState === 'complete'){
            // startCollect2();
            // alert("Hello!2");
            // }
          }
          setTimeout(getTiming_forAlexa, 5000);
      }
      }, false);

      var buttonelement = document.getElementById('aa02');
      buttonelement.addEventListener('click', function() {
        var content3 = this.nextElementSibling;
        if(content3.style.display == "block"){
          for (i = 5; i < 8; i++){
            // alert("Hello!");
            var getou = arra[i];
            fetch(getou)
            .then(response => response.text())

            // .then(data => document.getElementById("demo3").innerHTML = data);
            // var x = document.createElement("div");
            // if(document.readyState === 'complete'){
              // startCollect2();
              // alert("Hello!2");
              // }
            }
            setTimeout(getTiming_forAlexa_2, 2000);
        }
        }, false);

        var buttonelement = document.getElementById('aa03');
        buttonelement.addEventListener('click', function() {
          var content4 = this.nextElementSibling;
          if(content4.style.display == "block"){
            for (i = 8; i < 10; i++){
              // alert("Hello!");
              var getou = arra[i];
              fetch(getou)
              .then(response => response.text())

              // .then(data => document.getElementById("demo3").innerHTML = data);
              // var x = document.createElement("div");
              // if(document.readyState === 'complete'){
                // startCollect2();
                // alert("Hello!2");
                // }
              }
              setTimeout(getTiming_forAlexa_3, 2000);
          }
          }, false);

    // }, false);
}

function generate_randnum(){
  var x = Math.floor((Math.random() * 10) + 1);
  for(var i = 0 ; i < RandArray.length; i++){
    if(RandArray[i] != x){
      RandArray.push(x);
      return x;
    }else{
      generate_randnum();
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
function startCollect_topSites() {

  var xmlhttp = new XMLHttpRequest();
  var url = "https://measurements.duckdns.org/tranco_list/phpTranco_rand.php";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ary = this.responseText.split('<br>');
      document.getElementById("sr-s1-500").innerHTML = ary[0];
      document.getElementById("sr-s2-500").innerHTML = ary[1];
      document.getElementById("sr-s3-500").innerHTML = ary[2];
      document.getElementById("sr-s4-500").innerHTML = ary[3];
      document.getElementById("sr-s5-500").innerHTML = ary[4];

      document.getElementById("sr-s1-10k").innerHTML = ary[5];
      document.getElementById("sr-s2-10k").innerHTML = ary[6];
      document.getElementById("sr-s3-10k").innerHTML = ary[7];

      document.getElementById("sr-s1-1m").innerHTML = ary[8];
      document.getElementById("sr-s2-1m").innerHTML = ary[9];
      fetchpages(ary);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function fetchpages(arra){
  for (i = 0; i < 10; i++){
    var getou = arra[i];
    fetch(getou)
    .then(response => response.text())
  }
  setTimeout(getTiming_forAlexa_New, 10000);
}
function showdetails(){
  alert("yes")
  // document.getElementById("sr-s1-500").style.display = "block"
}
function getTiming_forAlexa_New(){
  var resources = performance.getEntriesByType("resource");
  average_for_top500 = 0;
  average_for_top10k = 0;
  average_for_top1m = 0;
  alert(resources.length)
  for(var i=0; i < resources.length; i++){
    if(resources[i].initiatorType == "fetch"){

      if((document.getElementById("sr-s1-500").innerHTML+"/").includes(resources[i].name)){
        average_for_top500+=Math.round(resources[i].duration)
        document.getElementById("d-s1-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s2-500").innerHTML+"/").includes(resources[i].name)){
        average_for_top500+=Math.round(resources[i].duration)
        document.getElementById("d-s2-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s3-500").innerHTML+"/").includes(resources[i].name)){
        average_for_top500+=Math.round(resources[i].duration)
        document.getElementById("d-s3-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s4-500").innerHTML+"/").includes(resources[i].name)){
        average_for_top500+=Math.round(resources[i].duration)
        document.getElementById("d-s4-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s5-500").innerHTML+"/").includes(resources[i].name)){
        average_for_top500+=Math.round(resources[i].duration)
        document.getElementById("d-s5-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s1-10k").innerHTML+"/").includes(resources[i].name)){
        average_for_top10k+=Math.round(resources[i].duration)
        document.getElementById("d-s1-10k").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s2-10k").innerHTML+"/").includes(resources[i].name)){
        average_for_top10k+=Math.round(resources[i].duration)
        document.getElementById("d-s2-10k").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s3-10k").innerHTML+"/").includes(resources[i].name)){
        average_for_top10k+=Math.round(resources[i].duration)
        document.getElementById("d-s3-10k").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s1-1m").innerHTML+"/").includes(resources[i].name)){
        average_for_top1m+=Math.round(resources[i].duration)
        document.getElementById("d-s1-1m").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s2-1m").innerHTML+"/").includes(resources[i].name)){
        average_for_top1m+=Math.round(resources[i].duration)
        document.getElementById("d-s2-1m").innerHTML = Math.round(resources[i].duration)+" ms";
      }
    }
  }
  document.getElementById("rr-500").innerHTML = Math.round(average_for_top500/5)
  document.getElementById("rr-10k").innerHTML = Math.round(average_for_top10k/3)
  document.getElementById("rr-1m").innerHTML = Math.round(average_for_top1m/2)

  document.getElementById("details").disabled=false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("details").disabled=true;
  let userID = ""
  browser.storage.local.get('uniqueID').then(data => {
    userID = data.uniqueID.id
  });
  startCollect_topSites();
  document.getElementById("option2").checked = true;
  document.getElementById("message").innerHTML = "Your current settings is: "+document.getElementById("foption2").innerHTML+". You can change your mind at anytime";
  document.querySelector('#option1').addEventListener('change', function() {
    document.getElementById("message").innerHTML = "Your current settings is: "+document.getElementById("foption1").innerHTML+". You can change your mind at anytime";
    document.getElementById("btn_s").disabled = true;
    document.getElementById("message2").innerHTML = "Please consider sharing your data to be able to see other participants' performance in your area"

  });
  document.querySelector('#option2').addEventListener('change', function() {
    document.getElementById("btn_s").disabled = false;
    document.getElementById("message").innerHTML = "Your current settings is: "+document.getElementById("foption2").innerHTML+". You can change your mind at anytime";
    document.getElementById("message2").innerHTML = ""
  });
  document.querySelector('#option3').addEventListener('change', function() {
    document.getElementById("btn_s").disabled = false;
    document.getElementById("message").innerHTML = "Your current settings is: "+document.getElementById("foption3").innerHTML+". You can change your mind at anytime";
    document.getElementById("message2").innerHTML = ""
  });

  document.getElementById("btn_s").addEventListener("click", function() {

    let iframe = document.getElementById("myFrame");
    let elmnt = iframe.contentWindow.document.getElementsByTagName("ulMeter")[0];
    alert(iframe)
    if(document.getElementById("option2").checked){
      storeindB_withLocation(userID);
      document.getElementById("message").innerHTML = "Thank you for sharing the data. Your current settings is: "+document.getElementById("foption2").innerHTML+". You can change your mind at anytime";
    }
    if(document.getElementById("option3").checked){
      getLocation(userID);
      document.getElementById("message").innerHTML = "Thank you for sharing the data. Your current settings is: "+document.getElementById("foption3").innerHTML+". You can change your mind at anytime";
    }
  });

  // to get the isp and city
  fetch("https://ipinfo.io/json?token=0a0c3bdf30704b").then(
  (response) => response.json()).then((jsonResponse) => {document.getElementById("divCheckboxg").innerHTML = jsonResponse.city
  document.getElementById("divCheckboxh").innerHTML = jsonResponse.org})

  document.getElementById("details").addEventListener("click", function() {
    if (document.getElementById("details").innerHTML == " More details "){
      document.getElementById("r-s1-500").style.display = "block";
      document.getElementById("r-s2-500").style.display = "block";
      document.getElementById("r-s3-500").style.display = "block";
      document.getElementById("r-s4-500").style.display = "block";
      document.getElementById("r-s5-500").style.display = "block";
      document.getElementById("r-s1-10k").style.display = "block";
      document.getElementById("r-s2-10k").style.display = "block";
      document.getElementById("r-s3-10k").style.display = "block";
      document.getElementById("r-s1-1m").style.display = "block";
      document.getElementById("r-s2-1m").style.display = "block";
      // document.getElementById("details").innerHTML=" Hide details ";
    }
  });
}, false);

function getLocation(userid) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      document.getElementById("latt").innerHTML = lat.toFixed(6);
      document.getElementById("longg").innerHTML = long.toFixed(6);
      storeindB_withLocation_fine_gr(lat.toFixed(6), long.toFixed(6), userid);
    });
  } else {
    document.getElementById("demoo").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showCustomer_LocIndependant_plt() {
  str = document.getElementById("tabUrl").innerHTML;
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    // document.getElementById("demo").innerHTML = this.responseText;
    var result = this.responseText;
    var res = result.split(",");

    document.getElementById("redirect_others").innerHTML = res[0];
    document.getElementById("dns_others").innerHTML = res[1];
    document.getElementById("connect_others").innerHTML = res[2];
    document.getElementById("request_others").innerHTML = res[3];
    document.getElementById("response_others").innerHTML = res[4];
    document.getElementById("dom_others").innerHTML = res[5];
    document.getElementById("domParse_others").innerHTML = res[6];
    document.getElementById("domScripts_others").innerHTML = res[7];
    document.getElementById("contentLoaded_others").innerHTML = res[8];
    document.getElementById("domSubRes_others").innerHTML = res[9];
    document.getElementById("load_others").innerHTML = res[10];
    document.getElementById("total_others").innerHTML = res[11];
  }
  xhttp.open("GET", "https://measurements.duckdns.org/dbwork/phpretrieve_plt.php?q="+str);
  xhttp.send();
}

function showCustomer_LocIndependant_alexa(p1,p2){
  var strr = "";
  strr = document.getElementById("sr-"+p1+"-"+p2).innerHTML.trimStart("\n");
  if(strr == ""){
    return;
  }
  const xhttp2 = new XMLHttpRequest();
  xhttp2.onload = function() {
    var result = this.responseText;
    document.getElementById("d-"+p1+"_others-"+p2).innerHTML = result;

  }
  xhttp2.open("GET", "https://measurements.duckdns.org/dbwork/phpretrieve_alexa.php?q="+strr);
  xhttp2.send();
}

function showCustomer_Locdependant_alexa(p1,p2){
  var strr = "";
  strr = document.getElementById("sr-"+p1+"-"+p2).innerHTML.trimStart("\n");
  if(strr == ""){
    return;
  }
  strr2 = document.getElementById("divCheckboxg").innerHTML;
  if (strr2 == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }

  strr3 = document.getElementById("divCheckboxh").innerHTML;
  if (strr3 == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp2 = new XMLHttpRequest();
  xhttp2.onload = function() {
    var result = this.responseText;
    document.getElementById("d-"+p1+"_others-"+p2).innerHTML = result;

  }
  xhttp2.open("GET", "https://measurements.duckdns.org/dbwork/phpretrieve_alexa_cityLoc.php?q="+strr+"&r="+strr2+"&p="+strr3);
  xhttp2.send();
}

function storeindB_withoutLocation() {

  var websites = document.getElementById("sr-s1-500").innerHTML.trimStart("\n")+","+document.getElementById("sr-s2-500").innerHTML+","+document.getElementById("sr-s3-500").innerHTML+","+document.getElementById("sr-s4-500").innerHTML+","+document.getElementById("sr-s5-500").innerHTML+","+document.getElementById("sr-s1-10k").innerHTML+","+document.getElementById("sr-s2-10k").innerHTML+","+document.getElementById("sr-s3-10k").innerHTML+","+document.getElementById("sr-s1-1m").innerHTML+","+document.getElementById("sr-s2-1m").innerHTML;
  var timings = document.getElementById("d-s1-500").innerHTML+","+document.getElementById("d-s2-500").innerHTML+","+document.getElementById("d-s3-500").innerHTML+","+document.getElementById("d-s4-500").innerHTML+","+document.getElementById("d-s5-500").innerHTML+","+document.getElementById("d-s1-10k").innerHTML+","+document.getElementById("d-s2-10k").innerHTML+","+document.getElementById("d-s3-10k").innerHTML+","+document.getElementById("d-s1-1m").innerHTML+","+document.getElementById("d-s2-1m").innerHTML;
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
    total       : document.getElementById("total").innerHTML,
    website     : websites,
    reqtime     : timings
  };
  const myJSON = JSON.stringify(record);
  //document.getElementById("demo").innerHTML = myJSON;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://measurements.duckdns.org/dbwork/phpstore_all.php");
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.send(myJSON);
}

function showCustomer_Locdependant() {
  str1 = document.getElementById("tabUrl").innerHTML;
  if (str1 == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }

  str2 = document.getElementById("divCheckboxg").innerHTML;
  if (str2 == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }

  str3 = document.getElementById("divCheckboxh").innerHTML;
  if (str3 == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    // document.getElementById("demo").innerHTML = this.responseText;
    var result = this.responseText;
    var res = result.split(",");

    document.getElementById("redirect_others").innerHTML = res[0];
    document.getElementById("dns_others").innerHTML = res[1];
    document.getElementById("connect_others").innerHTML = res[2];
    document.getElementById("request_others").innerHTML = res[3];
    document.getElementById("response_others").innerHTML = res[4];
    document.getElementById("dom_others").innerHTML = res[5];
    document.getElementById("domParse_others").innerHTML = res[6];
    document.getElementById("domScripts_others").innerHTML = res[7];
    document.getElementById("contentLoaded_others").innerHTML = res[8];
    document.getElementById("domSubRes_others").innerHTML = res[9];
    document.getElementById("load_others").innerHTML = res[10];
    document.getElementById("total_others").innerHTML = res[11];
  }
  xhttp.open("GET", "https://measurements.duckdns.org/dbwork/phpretrieve_plt_cityLoc.php?q="+str1+"&r="+str2+"&p="+str3);
  xhttp.send();
}

function storeindB_withLocation(userid) {

  var websites = document.getElementById("sr-s1-500").innerHTML.trimStart("\n")+","+document.getElementById("sr-s2-500").innerHTML+","+document.getElementById("sr-s3-500").innerHTML+","+document.getElementById("sr-s4-500").innerHTML+","+document.getElementById("sr-s5-500").innerHTML+","+document.getElementById("sr-s1-10k").innerHTML+","+document.getElementById("sr-s2-10k").innerHTML+","+document.getElementById("sr-s3-10k").innerHTML+","+document.getElementById("sr-s1-1m").innerHTML+","+document.getElementById("sr-s2-1m").innerHTML;
  var timings = document.getElementById("d-s1-500").innerHTML+","+document.getElementById("d-s2-500").innerHTML+","+document.getElementById("d-s3-500").innerHTML+","+document.getElementById("d-s4-500").innerHTML+","+document.getElementById("d-s5-500").innerHTML+","+document.getElementById("d-s1-10k").innerHTML+","+document.getElementById("d-s2-10k").innerHTML+","+document.getElementById("d-s3-10k").innerHTML+","+document.getElementById("d-s1-1m").innerHTML+","+document.getElementById("d-s2-1m").innerHTML;

  const record = {
    uid          : userid,
    city        : document.getElementById("divCheckboxg").innerHTML,
    isp         : document.getElementById("divCheckboxh").innerHTML,
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
    total       : document.getElementById("total").innerHTML,
    website     : websites,
    reqtime     : timings
  };
  const myJSON = JSON.stringify(record);
  //document.getElementById("demo").innerHTML = myJSON;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://measurements.duckdns.org/dbwork/phpstore_all_cityLoc.php");
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.send(myJSON);
}

function storeindB_withLocation_fine_gr(parr1, parr2, userid) {
  var websites = document.getElementById("sr-s1-500").innerHTML.trimStart("\n")+","+document.getElementById("sr-s2-500").innerHTML+","+document.getElementById("sr-s3-500").innerHTML+","+document.getElementById("sr-s4-500").innerHTML+","+document.getElementById("sr-s5-500").innerHTML+","+document.getElementById("sr-s1-10k").innerHTML+","+document.getElementById("sr-s2-10k").innerHTML+","+document.getElementById("sr-s3-10k").innerHTML+","+document.getElementById("sr-s1-1m").innerHTML+","+document.getElementById("sr-s2-1m").innerHTML;
  var timings = document.getElementById("d-s1-500").innerHTML+","+document.getElementById("d-s2-500").innerHTML+","+document.getElementById("d-s3-500").innerHTML+","+document.getElementById("d-s4-500").innerHTML+","+document.getElementById("d-s5-500").innerHTML+","+document.getElementById("d-s1-10k").innerHTML+","+document.getElementById("d-s2-10k").innerHTML+","+document.getElementById("d-s3-10k").innerHTML+","+document.getElementById("d-s1-1m").innerHTML+","+document.getElementById("d-s2-1m").innerHTML;

  const record = {
    uid          : userid,
    city        : document.getElementById("divCheckboxg").innerHTML,
    isp         : document.getElementById("divCheckboxh").innerHTML,
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
    total       : document.getElementById("total").innerHTML,
    website     : websites,
    reqtime     : timings,
    latitude    : parr1,
    longitude   : parr2
  };
  const myJSON = JSON.stringify(record);
  //document.getElementById("demo").innerHTML = myJSON;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://measurements.duckdns.org/dbwork/phpstore_all_LatLong.php");
  xhr.setRequestHeader("Content-type", "application/json")
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
  });
});
