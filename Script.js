

// ==UserScript==
// @name         Erg page monitor
// @namespace    www.roguefitness.com
// @version      1.0
// @description  to monitor the roguefitness site for concept 2 model d restocks, will throw an alert when back in stock
// @author       holysoles
// @match        www.roguefitness.com/black-concept-2-model-d-rower-pm5
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
    var waitToCheck = 8000;
    await sleep(waitToCheck);
    var changed = false;

    if(document.getElementsByClassName("bin-out-of-stock bin-out-of-stock-cart")[0] == undefined){
        changed = true;
        console.log("found element change");
    }
    if(changed){
        //throw alert if changed
        const alertString = "No longer out of stock!";
        window.alert(alertString);
    }
    else{
        //no change
        //give current time to console
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log("Last Refresh: " + time);
        //sleep than reload
        var waitToReload = 52000;
        console.log("no change, sleep "+ String(waitToReload/1000) +" seconds -> reload -> waiting "+ String(waitToCheck/1000) +" seconds");
        await sleep(waitToReload);
        location.reload();
    }
}

main();
})();
