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

function getTiming_forAlexa_New(){
  var resources = performance.getEntriesByType("resource");
  for(var i=0; i < resources.length; i++){
    if(resources[i].initiatorType == "fetch"){

      if((document.getElementById("sr-s1-500").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s1-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s2-500").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s2-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s3-500").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s3-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s4-500").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s4-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s5-500").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s5-500").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s1-10k").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s1-10k").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s2-10k").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s2-10k").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s3-10k").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s3-10k").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s1-1m").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s1-1m").innerHTML = Math.round(resources[i].duration)+" ms";
      }

      if((document.getElementById("sr-s2-1m").innerHTML+"/").includes(resources[i].name)){
        document.getElementById("d-s2-1m").innerHTML = Math.round(resources[i].duration)+" ms";
      }
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {

  // browser.storage.local.get('uniqueID').then(data => {
  //   alert(data.uniqueID.id)
  // });
  startCollect_topSites();
  document.getElementById("btn_s").addEventListener("click", function() {

    if(document.getElementById("chk1").checked == true && document.getElementById("chk2").checked == false && document.getElementById("chk3").checked == false){
      storeindB_withoutLocation();
      showCustomer_LocIndependant_plt();
      showCustomer_LocIndependant_alexa("s1","500");showCustomer_LocIndependant_alexa("s2","500");showCustomer_LocIndependant_alexa("s3","500");
      showCustomer_LocIndependant_alexa("s4","500");showCustomer_LocIndependant_alexa("s5","500");showCustomer_LocIndependant_alexa("s1","10k");
      showCustomer_LocIndependant_alexa("s2","10k");showCustomer_LocIndependant_alexa("s3","10k");showCustomer_LocIndependant_alexa("s1","1m");
      showCustomer_LocIndependant_alexa("s2","1m");
    }
    if(document.getElementById("chk1").checked == true && document.getElementById("chk2").checked == true && document.getElementById("chk3").checked == false){
      storeindB_withLocation();
      showCustomer_Locdependant();
      showCustomer_Locdependant_alexa("s1","500");showCustomer_Locdependant_alexa("s2","500");showCustomer_Locdependant_alexa("s3","500");
      showCustomer_Locdependant_alexa("s4","500");showCustomer_Locdependant_alexa("s5","500");showCustomer_Locdependant_alexa("s1","10k");
      showCustomer_Locdependant_alexa("s2","10k");showCustomer_Locdependant_alexa("s3","10k");showCustomer_Locdependant_alexa("s1","1m");
      showCustomer_Locdependant_alexa("s2","1m");
    }
    if(document.getElementById("chk1").checked == true && document.getElementById("chk2").checked == true && document.getElementById("chk3").checked == true){
      getLocation();
      showCustomer_Locdependant();
      showCustomer_Locdependant_alexa("s1","500");showCustomer_Locdependant_alexa("s2","500");showCustomer_Locdependant_alexa("s3","500");
      showCustomer_Locdependant_alexa("s4","500");showCustomer_Locdependant_alexa("s5","500");showCustomer_Locdependant_alexa("s1","10k");
      showCustomer_Locdependant_alexa("s2","10k");showCustomer_Locdependant_alexa("s3","10k");showCustomer_Locdependant_alexa("s1","1m");
      showCustomer_Locdependant_alexa("s2","1m");
    }
    if(document.getElementById("chk1").checked == false){
      document.getElementById("error").innerHTML = "Please make sure that the first checkbox is checked";
    }
  });

  fetch("https://ipinfo.io/json?token=0a0c3bdf30704b").then(
  (response) => response.json()).then((jsonResponse) => {document.getElementById("divCheckboxg").innerHTML = jsonResponse.city
  document.getElementById("divCheckboxh").innerHTML = jsonResponse.org})

  // Get user location information



  ///////////////////////////////////

  var checkboxelement = document.getElementById('chk1');
  checkboxelement.addEventListener('change', function() {
    if(document.getElementById("chk1").checked == true){
      // storeindB_withoutLocation();
      // showCustomer_LocIndependant();
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
      // storeindB_withLocation();
      // showCustomer_Locdependant();
      // createItem();
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

      // getLocation();
      // readValue();
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
  // // var url = "http://measurements.duckdns.org/top500.json";
  // var url = "http://measurements.duckdns.org/tranco_list/phpTranco.php";
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
      var url_2 = "https://measurements.duckdns.org/tranco_list/phpTranco_rand.php";
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

function storeindB_withLocation() {

  var websites = document.getElementById("sr-s1-500").innerHTML.trimStart("\n")+","+document.getElementById("sr-s2-500").innerHTML+","+document.getElementById("sr-s3-500").innerHTML+","+document.getElementById("sr-s4-500").innerHTML+","+document.getElementById("sr-s5-500").innerHTML+","+document.getElementById("sr-s1-10k").innerHTML+","+document.getElementById("sr-s2-10k").innerHTML+","+document.getElementById("sr-s3-10k").innerHTML+","+document.getElementById("sr-s1-1m").innerHTML+","+document.getElementById("sr-s2-1m").innerHTML;
  var timings = document.getElementById("d-s1-500").innerHTML+","+document.getElementById("d-s2-500").innerHTML+","+document.getElementById("d-s3-500").innerHTML+","+document.getElementById("d-s4-500").innerHTML+","+document.getElementById("d-s5-500").innerHTML+","+document.getElementById("d-s1-10k").innerHTML+","+document.getElementById("d-s2-10k").innerHTML+","+document.getElementById("d-s3-10k").innerHTML+","+document.getElementById("d-s1-1m").innerHTML+","+document.getElementById("d-s2-1m").innerHTML;

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

function storeindB_withLocation_fine_gr(parr1, parr2) {
  var websites = document.getElementById("sr-s1-500").innerHTML.trimStart("\n")+","+document.getElementById("sr-s2-500").innerHTML+","+document.getElementById("sr-s3-500").innerHTML+","+document.getElementById("sr-s4-500").innerHTML+","+document.getElementById("sr-s5-500").innerHTML+","+document.getElementById("sr-s1-10k").innerHTML+","+document.getElementById("sr-s2-10k").innerHTML+","+document.getElementById("sr-s3-10k").innerHTML+","+document.getElementById("sr-s1-1m").innerHTML+","+document.getElementById("sr-s2-1m").innerHTML;
  var timings = document.getElementById("d-s1-500").innerHTML+","+document.getElementById("d-s2-500").innerHTML+","+document.getElementById("d-s3-500").innerHTML+","+document.getElementById("d-s4-500").innerHTML+","+document.getElementById("d-s5-500").innerHTML+","+document.getElementById("d-s1-10k").innerHTML+","+document.getElementById("d-s2-10k").innerHTML+","+document.getElementById("d-s3-10k").innerHTML+","+document.getElementById("d-s1-1m").innerHTML+","+document.getElementById("d-s2-1m").innerHTML;

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
