// ==UserScript==
// @name         Flappy Birb
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  EzPz Flappy Bird Cheat
// @author       You
// @match        http://flappybird.io/
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
	var noclip_button, ajump_button, jumpInterval
	await fetch("https://cipx.tk/files/TopGUI/main.js").then((res) => res.text().then((t) => eval(t)));

	var noclip = function(){
		noclip_button = document.getElementById("slide-noclip")
		//console.log(noclip_button.checked)
		if(noclip_button.checked){
			ndgmr.checkRectCollision = function(bitmap1, bitmap2) {
        		return false;
    		}
		} else {
			ndgmr.checkRectCollision = function(bitmap1, bitmap2) {
        		var b1, b2;
      		 	b1 = getBounds(bitmap1);
      		 	b2 = getBounds(bitmap2);
        		return calculateIntersection(b1, b2);
    		}
		}
	}

	var autoSpace = function() {
		ajump_button = document.getElementById("slide-autojump")
		if(ajump_button.checked){
			jumpInterval = setInterval(function(){
							if(Math.round(bird.y/10)>=50 && Math.round(bird.y/10)<=65)
								handleJumpStart()
							}, 100);
		} else {
			clearInterval(jumpInterval)
		}
	}

	TopGUI.newGUI("Flappy Birb")
	TopGUI.addSlider("slide-noclip", "Noclip", noclip)
	TopGUI.addSlider("slide-autojump", "Auto Jump", autoSpace)
	TopGUI.init()
	// top: 358px; left: 41px;
	var men = document.getElementById("mydiv");
	men.style.top="350px"
	men.style.left="40 px"
})();
