var total = 0;
var top1m = [];
var sendTofetch = [];
var tranco_list_version = "";
var update_tranco_list = 2;
var open_dropdown = 0;

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

function collapsible_handle(){
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
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

document.addEventListener('DOMContentLoaded', function() {

  // Get user location information

  fetch("https://ipinfo.io/json?token=0a0c3bdf30704b").then(
  (response) => response.json()).then((jsonResponse) => {document.getElementById("divCheckboxg").innerHTML = jsonResponse.city
  document.getElementById("divCheckboxh").innerHTML = jsonResponse.org})

  ///////////////////////////////////

  var checkboxelement = document.getElementById('chk1');
  checkboxelement.addEventListener('change', function() {
    if(document.getElementById("chk1").checked == true){
      storeindB_withoutLocation();
      showCustomer_LocIndependant();
    }else{
      document.getElementById("redirect_others").innerHTML = "";
      document.getElementById("dns_others").innerHTML = "";
      document.getElementById("connect_others").innerHTML = "";
      document.getElementById("request_others").innerHTML = "";
      document.getElementById("response_others").innerHTML = "";
      document.getElementById("dom_others").innerHTML = "";
      document.getElementById("domParse_others").innerHTML = "";
      document.getElementById("domScripts_others").innerHTML = "";
      document.getElementById("contentLoaded_others").innerHTML = "";
      document.getElementById("domSubRes_others").innerHTML = "";
      document.getElementById("load_others").innerHTML = "";
      document.getElementById("total_others").innerHTML = "";
    }
  }, false);

  var checkboxelement = document.getElementById('chk2');
  checkboxelement.addEventListener('change', function() {
    if(document.getElementById("chk2").checked == true && document.getElementById("chk1").checked == true){
      storeindB_withLocation();
      showCustomer_Locdependant();
      createItem();
      // document.getElementById("shareLocationdiv").innerHTML = document.getElementById("divCheckboxg").innerHTML;
    }else{
      document.getElementById("redirect_others").innerHTML = "";
      document.getElementById("dns_others").innerHTML = "";
      document.getElementById("connect_others").innerHTML = "";
      document.getElementById("request_others").innerHTML = "";
      document.getElementById("response_others").innerHTML = "";
      document.getElementById("dom_others").innerHTML = "";
      document.getElementById("domParse_others").innerHTML = "";
      document.getElementById("domScripts_others").innerHTML = "";
      document.getElementById("contentLoaded_others").innerHTML = "";
      document.getElementById("domSubRes_others").innerHTML = "";
      document.getElementById("load_others").innerHTML = "";
      document.getElementById("total_others").innerHTML = "";
      // document.getElementById("shareLocationdiv").innerHTML = "Woud you like to share your current location with us";
    }
  }, false);

  var checkboxelement = document.getElementById('chk3');
  checkboxelement.addEventListener('change', function() {
    if(document.getElementById("chk3").checked == true && document.getElementById("chk1").checked == true){

      getLocation();
      readValue();
      // share_speedtest();
      // getspeedtest_data();
    }
  }, false);

  if(document.getElementById("chk2").checked == true && document.getElementById("chk1").checked == true){
    alert("hello");
  }
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  // xmlhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     var myArr = JSON.parse(this.responseText);
  //     var i;
  //     var out = "";
  //     for(i = 1; i < 6; i++) {
  //       var x = generate_randnum();
  //       sendTofetch.push("https://www."+ myArr[x]);
  //       out += '>> https://www.'+ myArr[x] + '<br>';
  //     }
  //     document.getElementById("id01").innerHTML = out;
  //   }
  // };
  // xmlhttp.open("GET", url, true);
  // xmlhttp.send();
  // fetchpages(sendTofetch);
  // alert("elo");
  // var xmlhttp = new XMLHttpRequest();
  // // var url = "http://34.89.29.21/top500.json";
  // var url = "http://34.89.29.21/tranco_list/phpTranco.php";
  //
  // xmlhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     alert(this.responseText);
  //
  //     if(tranco_list_version == this.responseText){
  //       update_tranco_list = 0;
  //     }else{
  //       alert("yb");
  //       update_tranco_list = 1;
  //       tranco_list_version = this.responseText;
  //       // getnew();
  //     }
  //   }
  // };
  // xmlhttp.open("GET", url, true);
  // xmlhttp.send();

  document.getElementById("a01").addEventListener("click", function() {
      var xmlhttp_2 = new XMLHttpRequest();
      var ary = [];
      var url_2 = "http://34.89.29.21/tranco_list/phpTranco_rand.php";
      xmlhttp_2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // alert(this.responseText);
          ary = this.responseText.split('<br>');
          document.getElementById("id001").innerHTML = ">>"+ary[0]+"<br>"+">> "+ary[1]+"<br>"+">> "+ary[2]+"<br>"+">> "+ary[3]+"<br>"+">> "+ary[4];
          document.getElementById("id002").innerHTML = ">> "+ary[5]+"<br>"+">> "+ary[6]+"<br>"+">> "+ary[7];
          document.getElementById("id003").innerHTML = ">> "+ary[8]+"<br>"+">> "+ary[9];
          alert(ary[0]);
          // var myArr = JSON.parse(this.responseText);
          // for(var i = 0; i < myArr.length; i++) {
            //   top1m.push("https://www."+ myArr[i]);
            // }
            // top1m = myArr;
            // saveTrancoList();
            // alert(ary[11]);
            sendTofetch = ary;
            alert(sendTofetch);
            fetchpages(sendTofetch);
          }
        };
        xmlhttp_2.open("GET", url_2, true);
        xmlhttp_2.send();


    //   //fetchpages(sendTofetch);
  });
}, false);
//
// function getspeedtest_data(){
//   var resources = performance.getEntriesByType("resource");
//   for(var i=0; i < resources.length; i++){
//     alert(i);
//     if(resources[i].initiatorType == "img" && resources[i].name.include("https://librespeed.org/results/")){
//       alert("ha");
//     }
//   }
// }




function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      document.getElementById("latt").innerHTML = lat.toFixed(6);
      document.getElementById("longg").innerHTML = long.toFixed(6);
      storeindB_withLocation_fine_gr(lat.toFixed(6), long.toFixed(6));
    });
  } else {
    document.getElementById("demoo").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function saveTrancoList() {
  // localStorage.setItem("top1m", top1m);
  alert(top1m);
  localStorage.setItem("top1m", JSON.stringify(top1m));
  alert("testoarray");
  readtop1m();
}

function readtop1m() {
  // var x = localStorage.getItem("top1m");
  var storedNames = JSON.parse(localStorage.getItem("top1m"));
  alert(storedNames[1]);
}

function getTiming_forAlexa(){
  var resources = performance.getEntriesByType("resource");
  var outt = "";
  var k = 0;
  alert(sendTofetch);
  alert(resources.length);
  while(k < 5){
    var checked = false;
    sendTofetch[k] = sendTofetch[k].trimStart("\n");
    for(var i=0; i < resources.length; i++){
      if(resources[i].initiatorType == "fetch"){
        // if(sendTofetch[k]+"/" == resources[i].name){
        if((sendTofetch[k]+"/").includes(resources[i].name)){
          // alert(Math.round(resources[i].duration));
          outt += Math.round(resources[i].duration) + ' ms' + '<br>';
          k++;
          checked = true;
        }
      }
    }
    if(checked == false){
      alert(k);
      k++;
      alert(checked);
    }
  }
  document.getElementById("id0011").innerHTML = outt;
}

function getTiming_forAlexa_2(){
  var resources = performance.getEntriesByType("resource");
  var outt = "";
  var k = 5;
  alert(sendTofetch);
  alert(resources.length);
  while(k < 8){
    var checked = false;
    sendTofetch[k] = sendTofetch[k].trimStart("\n");
    for(var i=0; i < resources.length; i++){
      if(resources[i].initiatorType == "fetch"){
        // if(sendTofetch[k]+"/" == resources[i].name){
        if((sendTofetch[k]+"/").includes(resources[i].name)){
          // alert(Math.round(resources[i].duration));
          outt += Math.round(resources[i].duration) + ' ms' + '<br>';
          k++;
          checked = true;
        }
      }
    }
    if(checked == false){
      alert(k);
      k++;
      alert(checked);
    }
  }
  document.getElementById("id0022").innerHTML = outt;
}

function getTiming_forAlexa_3(){
  var resources = performance.getEntriesByType("resource");
  var outt = "";
  var k = 8;
  alert(sendTofetch);
  alert(resources.length);
  while(k < 10){
    var checked = false;
    sendTofetch[k] = sendTofetch[k].trimStart("\n");
    for(var i=0; i < resources.length; i++){
      if(resources[i].initiatorType == "fetch"){
        // if(sendTofetch[k]+"/" == resources[i].name){
        if((sendTofetch[k]+"/").includes(resources[i].name)){
          // alert(Math.round(resources[i].duration));
          outt += Math.round(resources[i].duration) + ' ms' + '<br>';
          k++;
          checked = true;
        }
      }
    }
    if(checked == false){
      alert(k);
      k++;
      alert(checked);
    }
  }
  document.getElementById("id0033").innerHTML = outt;
}

function showCustomer_LocIndependant() {
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
  xhttp.open("GET", "http://34.89.29.21/phpretrieve.php?q="+str);
  xhttp.send();
}

function storeindB_withoutLocation() {
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
  xhttp.open("GET", "http://34.89.29.21/phpretrieve_loc.php?q="+str1+"&r="+str2+"&p="+str3);
  xhttp.send();
}

function storeindB_withLocation() {
  const record = {
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
    total       : document.getElementById("total").innerHTML
  };
  const myJSON = JSON.stringify(record);
  //document.getElementById("demo").innerHTML = myJSON;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://34.89.29.21/phpstore_loc.php");
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.send(myJSON);
}

function storeindB_withLocation_fine_gr(parr1, parr2) {
  const record = {
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
    latitude    : parr1,
    longitude   : parr2
  };
  const myJSON = JSON.stringify(record);
  //document.getElementById("demo").innerHTML = myJSON;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://34.89.29.21/phpstore_loc_acc.php");
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.send(myJSON);
}

function share_speedtest(){
  var iframe = document.getElementById("speedtestframe");
  var elmnt = iframe.contentWindow.document.getElementById("pingText").innerHTML;
  alert(elmnt);
  // elmnt.style.display = "none";
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
