(function(){
  'use strict';

  if (document.readyState === 'complete') {
    startCollect();
    // startCollect_Alexa();
  } else {
    window.addEventListener('load', startCollect);
    // window.addEventListener('load', startCollect_Alexa);
  }

  function startCollect() {
    const timing = performance.getEntriesByType('navigation')[0].toJSON();
    timing.start = performance.timing.requestStart;
    delete timing.serverTiming;
    if (timing.duration > 0) {
      // fetchStart sometimes negative in FF, make an adjustment based on fetchStart
      var adjustment = timing.fetchStart < 0 ? -timing.fetchStart : 0;
      ['domainLookupStart',
        'domainLookupEnd',
        'connectStart',
        'connectEnd',
        'requestStart',
        'responseStart',
        'responseEnd',
        'domComplete',
        'domInteractive',
        'domContentLoadedEventStart',
        'domContentLoadedEventEnd',
        'loadEventStart',
        'loadEventEnd',
        'duration'
      ].forEach(i => {
        timing[i] +=adjustment;
      });

      // we have only 4 chars in our disposal including decimal point
      var duration = timing.duration / 1000;
      var precision = (duration >= 100) ? 0 : (duration >= 10 ? 1 : 2);
      var time = duration.toFixed(precision).substring(0, 4);
      var promise = browser.runtime.sendMessage({time: time, timing: timing});
      promise.catch((reason) => console.log(reason));
    } else {
      setTimeout(startCollect, 100);
    }
  }
  //
  // function fetchpages(arra){
  //   for (let i = 0; i < 10; i++){
  //     var getou = arra[i];
  //     fetch(getou)
  //     .then(response => response.text())
  //   }
  //   setTimeout(function(){timingAlexa(arra);}, 10000);
  // }
  //
  // function startCollect_Alexa(){
  //   alert("hello")
  //   var xmlhttp = new XMLHttpRequest();
  //   var url = "https://measurements.duckdns.org/tranco_list/phpTranco_rand.php";
  //   xmlhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       alert("hell3");
  //       let ary = "";
  //       ary = this.responseText.split('<br>');
  //       alert(ary)
  //       fetchpages(ary);
  //     }
  //   };
  //   xmlhttp.open("GET", url, true);
  //   xmlhttp.send();
  // }
  //
  // function timingAlexa(sites){
  //   var resources = performance.getEntriesByType("resource");
  //   average_for_top500 = 0;
  //   average_for_top10k = 0;
  //   average_for_top1m = 0;
  //   for(var i=0; i < resources.length; i++){
  //     if(resources[i].initiatorType == "fetch"){
  //
  //       if((sites[0]+"/").includes(resources[i].name)){
  //         average_for_top500+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[1]+"/").includes(resources[i].name)){
  //         average_for_top500+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[2]+"/").includes(resources[i].name)){
  //         average_for_top500+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[3]+"/").includes(resources[i].name)){
  //         average_for_top500+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[4]+"/").includes(resources[i].name)){
  //         average_for_top500+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[5]+"/").includes(resources[i].name)){
  //         average_for_top10k+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[6]+"/").includes(resources[i].name)){
  //         average_for_top10k+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[7]+"/").includes(resources[i].name)){
  //         average_for_top10k+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[8]+"/").includes(resources[i].name)){
  //         average_for_top1m+=Math.round(resources[i].duration)
  //       }
  //
  //       if((sites[9]+"/").includes(resources[i].name)){
  //         average_for_top1m+=Math.round(resources[i].duration)
  //       }
  //     }
  //   }
  //   alert(sites)
  //   // document.getElementById("rr-500").innerHTML = Math.round(average_for_top500/5)
  //   // document.getElementById("rr-10k").innerHTML = Math.round(average_for_top10k/3)
  //   // document.getElementById("rr-1m").innerHTML = Math.round(average_for_top1m/2)
  //   //
  //   // document.getElementById("details").disabled=false;
  // }

})();
