// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at 		 document-start
// @match        http://spinz.io/*
// @icon         https://www.google.com/s2/favicons?domain=spinz.io
// @require      https://unpkg.com/xhook@latest/dist/xhook.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var bannedURLs = ["https://cdn.privacy-mgmt.com/", "https://collect.lngtd.com/pv"];
console.log("Hooker loaded! Awaiting hook injection...");

	window.Sentry = {};
	window.Sentry.init = console.log

xhook.before(function(request){
    //console.log("New Request", request);
});
xhook.after(function(request, response){
    //console.log("[AntiRequest]", "Request: ", request, "Response: ", response);
	//if(request.url.startsWith("https://cdn.privacy-mgmt.com/")){
	//	response={};
	//	console.log("Bypassed mgmt.")
	//}
	for(var i=0; i<bannedURLs.length; i++){
    	if(request.url.startsWith(bannedURLs[i])){
		   response={};
     	   console.log("Bypassed "+bannedURLs[i])
		   break;
    	}
	}
	console.groupCollapsed("[AntiRequest] "+new Date().toLocaleString());
	console.groupCollapsed("Request");
	console.log(request);
	console.groupEnd();
	console.groupCollapsed("Response");
	console.log(response)
	console.groupEnd();
	console.groupEnd();
	return;
});
console.log("Hook injected!");

})();
