// ==UserScript==
// @name         WebTools
// @namespace    DS
// @version      2.1
// @description  try to take over the world!
// @author       CipX
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var t0 = performance.now();
        if(!unsafeWindow.changeColor)
    {

        unsafeWindow.changeColor = changeColor;
        unsafeWindow.credits = credits;
        unsafeWindow.chrash = chrash;
        unsafeWindow.discord = discord;
        unsafeWindow.omg = omg;
        unsafeWindow.siteInfo = siteInfo;

           if(!window.localStorage) {
      Object.defineProperty(window, "localStorage", new(function () {
         var aKeys = [],
            oStorage = {};
         Object.defineProperty(oStorage, "getItem", {
            value: function (sKey) {
               return this[sKey] ? this[sKey] : null;
            },
            writable: false,
            configurable: false,
            enumerable: false
         });
         Object.defineProperty(oStorage, "key", {
            value: function (nKeyId) {
               return aKeys[nKeyId];
            },
            writable: false,
            configurable: false,
            enumerable: false
         });
         Object.defineProperty(oStorage, "setItem", {
            value: function (sKey, sValue) {
               if(!sKey) {
                  return;
               }
               document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
            },
            writable: false,
            configurable: false,
            enumerable: false
         });
         Object.defineProperty(oStorage, "length", {
            get: function () {
               return aKeys.length;
            },
            configurable: false,
            enumerable: false
         });
         Object.defineProperty(oStorage, "removeItem", {
            value: function (sKey) {
               if(!sKey) {
                  return;
               }
               document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            },
            writable: false,
            configurable: false,
            enumerable: false
         });
         Object.defineProperty(oStorage, "clear", {
            value: function () {
               if(!aKeys.length) {
                  return;
               }
               for(var sKey in aKeys) {
                  document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
               }
            },
            writable: false,
            configurable: false,
            enumerable: false
         });
         this.get = function () {
            var iThisIndx;
            for(var sKey in oStorage) {
               iThisIndx = aKeys.indexOf(sKey);
               if(iThisIndx === -1) {
                  oStorage.setItem(sKey, oStorage[sKey]);
               } else {
                  aKeys.splice(iThisIndx, 1);
               }
               delete oStorage[sKey];
            }
            for(aKeys; aKeys.length > 0; aKeys.splice(0, 1)) {
               oStorage.removeItem(aKeys[0]);
            }
            for(var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
               aCouple = aCouples[nIdx].split(/\s*=\s*/);
               if(aCouple.length > 1) {
                  oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
                  aKeys.push(iKey);
               }
            }
            return oStorage;
         };
         this.configurable = false;
         this.enumerable = true;
      })());
         this.console.clear();
   }
   //---------------------------------------------------

   var userToken = localStorage.getItem('token');

    }
    var t1 = performance.now();
    //console.log("%c [Discord Stuff] , 'background: #222; color: #32cd32');
    console.log("%c[Discord Stuff] " + "%cLoaded in " + (t1 - t0) + " milliseconds.", "color: green; font-size:24px;", "color: white; font-size:12px");

    function changeColor() {
        var person = prompt("Type the color you like", "boom")
        document.body.style.backgroundColor = person;
        return "[Discord Stuff] Done!"
    }

    function credits() {
        var creds = document.createElement("button");
        creds.innerHTML = "Credits"
        creds.onclick = function () {
            window.location.href = "https://cipx.glitch.me";
        }
        document.body.appendChild(creds)
    }

    function chrash() {
        var warning = prompt("ARE YOU SURE YOU WANT TO START CHRASH? Type Yes or No", "")
        if(warning == "No" || warning == "no") {}

        if(warning == "Yes") {while(true) {credits()}};
    }

    let say = false;

    function discord() {
       alert(userToken);
    }

    function omg() {
    var css = [
	"/*---------------------------------------- BACKGROUND ----------------------------------------*/",
	"body {",
	"	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #00f715);",
	"	background-size: 400% 400%;",
	"	animation: gradient 15s ease infinite;",
	"}",
	"",
	"@keyframes gradient {",
	"	0% {",
	"		background-position: 0% 50%;",
	"	}",
	"	50% {",
	"		background-position: 100% 50%;",
	"	}",
	"	100% {",
	"		background-position: 0% 50%;",
	"	}",
	"}",
	".appMount-3lHmkl {",
	"    background: rgba(0, 0, 0, .6);",
	"}",
	"/*---------------------------------------- REMOVE DARK & WHITE THEME BACKGROUNDS ----------------------------------------*/",
	".theme-dark,",
	".theme-light {",
	"    --background-message-hover: rgba(0, 0, 0, 0);",
	"    --header-primary: #fff;",
	"    --header-secondary: #b9bbbe;",
	"    --text-normal: #dcddde;",
	"    --text-muted: #9d9d9d;",
	"    --channels-default: #8e9297;",
	"    --interactive-normal: #b9bbbe;",
	"    --interactive-hover: #dcddde;",
	"    --interactive-active: #fff;",
	"    --interactive-muted: #4f545c;",
	"    --background-primary: transparent;",
	"    --background-secondary: transparent;",
	"    --background-tertiary: transparent;",
	"    --background-accent: transparent;",
	"    --background-floating: rgba(0, 0, 0, .8);",
	"    --activity-card-background: transparent;",
	"    --deprecated-panel-background: transparent",
	"}",
	"/*---------------------------------------- SLIDE IN AND OUT ANIMATION ----------------------------------------*/",
	"/* CHANNELS/DMS */",
	"div.sidebar-2K8pFh {",
	"    opacity: 0;",
	"    width: 40px;",
	"    -webkit-transition: opacity 0.3s ease-in-out, width 0.5s;",
	"    -moz-transition: opacity 0.3s ease-in-out;",
	"    -ms-transition: opacity 0.3s ease-in-out;",
	"    -o-transition: opacity 0.3s ease-in-out;",
	"}",
	"div.sidebar-2K8pFh:hover {",
	"    opacity: 1;",
	"    width: 250px;",
	"}",
	"/* MEMBER LIST */",
	"[class|=membersWrap] {",
	"    opacity: 0;",
	"    width: 10px;",
	"    min-width: 40px;",
	"    -webkit-transition: opacity 0.3s ease-in-out, width 0.5s;",
	"    -moz-transition: opacity 0.3s ease-in-out;",
	"    -ms-transition: opacity 0.3s ease-in-out;",
	"    -o-transition: opacity 0.3s ease-in-out;",
	"}",
	"[class|=membersWrap]:hover {",
	"    opacity: 1;",
	"    width: 240px;",
	"}",
	".members-1998pB {",
	"    opacity: 0;",
	"    width: 40px;",
	"    -webkit-transition: opacity 0.3s ease-in-out, width 0.5s;",
	"    -moz-transition: opacity 0.3s ease-in-out;",
	"    -ms-transition: opacity 0.3s ease-in-out;",
	"    -o-transition: opacity 0.3s ease-in-out;",
	"}",
	".members-1998pB:hover {",
	"    opacity: 1;",
	"    width: 240px;",
	"}",
	"/*---------------------------------------- VOICE/VIDEO CALL WINDOW TRANSPARENVY ----------------------------------------*/",
	".video-1FfuMD {",
	"    background: rgba(0, 0, 0, .35);",
	"}",
	".theme-light .video-1FfuMD.minimum-1pRSEN {",
	"    background: #000000;",
	"    background: rgba(0, 0, 0, .35);",
	"}",
	".theme-light .wrapper-29NfPK,",
	".theme-dark .wrapper-29NfPK {",
	"    background: rgba(0, 0, 0, 0);",
	"}",
	".video-1kutKI {",
	"    background-color: rgba(0, 0, 0, 0);",
	"}",
	"/*---------------------------------------- CHANGES \"JUMP TO PRESENT\" BAR TO LIGHT BLUE (JUST LIKE THE \"NEW MESSAGE\" BAR) ----------------------------------------*/",
	".jumpToPresentBar-9P20AM {",
	"    background-color: rgba(114, 137, 218, 1);",
	"}",
	"/*---------------------------------------- REMOVALS ----------------------------------------*/",
	"/* PROFILE TAB BORDER ABOVE MESSAGE BOX */",
	".footer-1fjuF6 {",
	"    border-top: 0 solid;",
	"}",
	"/* WHITE THEME TAG/PING BACKGROUND */",
	".theme-light .wrapper-3WhCwL {",
	"    background-color: rgba(114, 137, 218, .1);",
	"    border-radius: 4px",
	"}",
	"/* BORDERS BETWEEN CHAT MESSAGES */",
	".divider-32i8lo {",
	"    opacity: 0;",
	"}",
	"/* VIDEO CALL BLACK BORDER */",
	".videoBackgroundWrapper-2dCt49 {",
	"    background-color: rgba(0, 0, 0, 0);",
	"}",
	"/* PROFILE POPUP MESSAGE BOX BORDER */",
	".quickMessage-2XpSaN {",
	"    border: 0px solid #dcddde;",
	"}",
	"/* PROFILE POPUP BORDER */",
	".theme-light .userPopout-3XzG_A,",
	".theme-dark .userPopout-3XzG_A {",
	"    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0);",
	"    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0);",
	"}",
	"/*---------------------------------------- CODE BLOCK RECOLOR ----------------------------------------*/",
	".markup-2BOw-j code {",
	"    background-color: #35383e;",
	"    border-radius: 5px;",
	"    -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.50);",
	"    -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.50);",
	"    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.50);",
	"    border: 1px solid rgba(0, 0, 0, .22);",
	"}",
	"/*---------------------------------------- BORDER ADDITIONS ----------------------------------------*/",
	"/* PROFILE TAB TOP */",
	".container-3baos1 {",
	"    border-top: 1px solid rgba(255, 255, 255, .06);",
	"}",
	"/* SERVER BAR BORDER */",
	".guilds-1SWlCJ {",
	"    border-right: 2px solid rgba(255, 255, 255, .06);",
	"}",
	"/* VOICE CALL TAB TOP AND RIGHT AND BOTTOM */",
	".container-1giJp5 {",
	"    border-bottom: 1px solid var(--background-modifier-accent);",
	"    border-top: 1px solid rgba(255, 255, 255, .06);",
	"    border-right: 1px solid rgba(255, 255, 255, .06);",
	"}",
	"/* PROFILE TAB RIGHT */",
	".container-3baos1 {",
	"    border-right: 1px solid rgba(255, 255, 255, .06);",
	"}",
	"/* CHAT LEFT */",
	".chatContent-a9vAAp {",
	"    border-left: 2px solid rgba(255, 255, 255, 0);",
	"}",
	"/*---------------------------------------- SERVER BAR BACKGROUND ----------------------------------------*/",
	".scroller-2TZvBN {",
	"    background-color: rgba(255, 255, 255, 0);",
	"}",
	"/*---------------------------------------- SCROLL BAR CHANGES ----------------------------------------*/",
	".theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-thumb {",
	"    border-color: rgba(32, 34, 37, 1);",
	"    background-color: rgba(64, 68, 75, 1);",
	"    box-shadow: 0px 0px 0px 10px rgba(32, 34, 37, 1) inset;",
	"    border-radius: 10px;",
	"}",
	".theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece {",
	"    border-color: rgba(255, 255, 255, 0);",
	"    background-color: rgba(64, 68, 75, 1);",
	"    border-radius: 10px;",
	"}",
	".theme-light .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-thumb {",
	"    border-color: rgba(32, 34, 37, 1);",
	"    background-color: rgba(64, 68, 75, 1);",
	"    box-shadow: 0px 0px 0px 10px rgba(32, 34, 37, 1) inset;",
	"}",
	".theme-light .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece {",
	"    border-color: rgba(255, 255, 255, 0);",
	"    background-color: rgba(64, 68, 75, 1);",
	"}",
	"/*---------------------------------------- PROFILE TAB ----------------------------------------*/",
	"/* SPOTIFY FIX */",
	".headerSpotify-zpWxgT {",
	"    border-radius: 15px;",
	"    background-color: rgba(79, 170, 101, .36);",
	"    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    border: 1px solid rgba(0, 0, 0, .4);",
	"    margin-bottom: 10px;",
	"}",
	"/* \"PLAYING A GAME\" FIX */",
	".headerPlaying-j0WQBV,",
	".headerStreaming-2FjmGz {",
	"    background: rgba(79, 100, 170, .36);",
	"    border-radius: 15px;",
	"    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    border: 1px solid rgba(0, 0, 0, .4);",
	"    margin-bottom: 10px;",
	"}",
	".userPopout-3XzG_A:background {",
	"    filter: blur(8px);",
	"    -webkit-filter: blur(8px);",
	"}",
	"",
	"/* HEADER */",
	".theme-light .headerNormal-T_seeN,",
	".theme-dark .headerNormal-T_seeN {",
	"    border-radius: 15px;",
	"    background-color: rgba(40, 40, 40, .4);",
	"    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    border: 1px solid rgba(0, 0, 0, .4);",
	"}",
	"/* BACKGROUND BORDER RADIUS */",
	".userPopout-3XzG_A {",
	"    border-radius: 15px;",
	"}",
	"/* BODY */",
	".theme-dark .bodyInner-245q0L,",
	".theme-dark .footer-1fjuF6 {",
	"    border-radius: 15px;",
	"    background-color: rgba(0, 0, 0, 0);",
	"}",
	"/* MESSAGE BOX */",
	".theme-light .quickMessage-1yeL4E,",
	".theme-dark .quickMessage-1yeL4E {",
	"    background-color: rgba(40, 40, 40, .4);",
	"    border-radius: 15px;",
	"    margin-top: 5px;",
	"    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    border: 1px solid rgba(0, 0, 0, .4);",
	"}",
	"/* BODY 2 */",
	".body-3iLsc4 {",
	"    background-color: rgba(40, 40, 40, .4);",
	"    border-radius: 15px;",
	"    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);",
	"    border: 1px solid rgba(0, 0, 0, .4);",
	"}",
	"/* BORDER RADIUS FIX */",
	".popout-2iWAc- {",
	"    border-radius: 15px;",
	"}",
	"/*---------------------------------------- CHAT MESSAGE BAR ----------------------------------------*/",
	"/* BORDER RADIUS FIX */",
	".scrollableContainer-2NUZem {",
	"    border-radius: 20px;",
	"}",
	"/* COLOR */",
	".inner-zqa7da {",
	"    background-color: rgba(64, 68, 75, 1);",
	"}",
	"/*---------------------------------------- OTHER BACKGROUND FIXES / MINOR INDIVIDUAL FIXES ----------------------------------------*/",
	"/* NITRO STORE PAGE */",
	"/* MAIN */",
	".applicationStore-1pNvnv {",
	"    background-color: rgba(0, 0, 0, 0);",
	"}",
	"/* SECONDARY */",
	".scroller-9moviB {",
	"    background-color: rgba(0, 0, 0, 0);",
	"}",
	"/* NITRO AD BORDER RADIUS */",
	".theme-dark .tier1Banner-1B_WXY {",
	"    border-radius: 15px;",
	"}",
	"/* GRADIANT REMOVAL ON GAME SCROLL */",
	".gradientOverlayRight-3vMuS8,",
	".gradientOverlayLeft-3w159C {",
	"    left: -1000px",
	"}",
	"/* GAME SCROLL ARROW BACKGROUND FIXES */",
	".scrollerButton-1Vm5_P {",
	"    background-color: rgba(64, 68, 75, 1);",
	"}",
	"/* FRIENDS TAB */",
	".theme-light .container-1D34oG,",
	".theme-dark .container-1D34oG {",
	"    background-color: rgba(0, 0, 0, 0);",
	"}",
	"/*---------------------------------------- LIGHT (aka RETARDED) MODE COLOR FIXES ----------------------------------------*/",
	"/* ACTIVITY TAB FIXES (BOTH LIGHT AND DARK) */",
	".theme-light .header-3uLGFv {",
	"    color: #fff;",
	"}",
	".theme-light .emptyCard-1AOHER {",
	"    border-color: #00000000;",
	"}",
	".theme-light .wrapper-3UweLa {",
	"    background: #202225;",
	"    color: #b9bbbe;",
	"}",
	".theme-light .recentlyPlayedContainer-2F3MqS {",
	"    background-color: #202225;",
	"    border: 0px solid #e3e5e8;",
	"}",
	".theme-dark .wrapper-Lii66c,",
	".theme-light .wrapper-Lii66c {",
	"    background-color: #202225;",
	"    border: 0px solid #e3e5e8;",
	"}",
	".theme-light .card-3EIh8J {",
	"    box-shadow: inset 0 0 0 0px #e3e5e8, 0 0 0 transparent",
	"}",
	".theme-light .separator-2c4hi3,",
	".theme-dark .separator-2c4hi3 {",
	"    background-color: #f7f7f78f;",
	"}",
	".theme-dark .wrapper-9ppXpy,",
	".theme-light .wrapper-9ppXpy {",
	"    box-shadow: inset 0 1px 0 #f7f7f78f;",
	"}",
	".theme-light .card-3EIh8J:hover {",
	"    background-color: #18191D;",
	"}",
	"/* LINKS */",
	".markup-2BOw-j a {",
	"    color: rgba(0, 176, 244, 1);",
	"}",
	"/*------------ PROFILE TAB ------------*/",
	"/* BOTTOM WHITE BACKGROUND REMOVAL */",
	".theme-light .bodyInner-245q0L,",
	".theme-light .footer-1fjuF6 {",
	"    background-color: rgba(0, 0, 0, 0);",
	"}",
	"/* BODY TEXT COLOR FIX */",
	".theme-light .bodyInner-245q0L,",
	".theme-light .footer-1fjuF6 {",
	"    color: rgba(255, 255, 255, 0.8);",
	"}",
	"/* NAME COLOR */",
	".theme-light .headerNormal-T_seeN .headerName-fajvi9,",
	".theme-light .headerNormal-T_seeN .headerTagUsernameNoNickname-2_H881 {",
	"    color: rgba(255, 255, 255, 1);",
	"}",
	"/*---------------------------------------- ROLES SELECTION POPUP BORDER RADIUS FIX ----------------------------------------*/",
	".theme-dark .container-VSDcQc .sectionTag-pXyto9 {",
	"    border-radius: 15px;",
	"}",
	".theme-dark .autocompleteArrow-Zxoy9H,",
	".theme-dark .autocompleteHeaderBackground-30T70q {",
	"    border-radius: 15px;",
	"}",
	".theme-light .container-VSDcQc .sectionTag-pXyto9 {",
	"    border-radius: 15px;",
	"}",
	".theme-light .autocompleteArrow-Zxoy9H,",
	".theme-light .autocompleteHeaderBackground-30T70q {",
	"    border-radius: 15px;",
	"}",
	"/*---------------------------------------- ROLES SELECTION POPUP SHADOW FIX ----------------------------------------*/",
	".theme-dark .autocompleteArrow-Zxoy9H,",
	".theme-dark .autocompleteShadow-iiGWFU {",
	"    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(32, 34, 37, 0);",
	"    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(32, 34, 37, 0)",
	"}",
	".theme-light .autocompleteArrow-Zxoy9H,",
	".theme-light .autocompleteShadow-iiGWFU {",
	"    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(185, 187, 190, 0);",
	"    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(185, 187, 190, 0)",
	"}",
	"/*---------------------------------------- DARK THEME PING BORDER RADIUS FIX ----------------------------------------*/",
	".theme-dark .wrapper-3WhCwL {",
	"    border-radius: 4px;",
	"}",
	"/*---------------------------------------- BOLD FONT/MARKUP FIX ----------------------------------------*/",
	".markup-2BOw-j {",
	"    color: #d5d5d5;",
	"}",
	"/*---------------------------------------- PPOFILE TAB POPUP TEXT COLOR CHANGES ----------------------------------------*/",
	"/* SUB HEADER RECOLOR */",
	".bodyTitle-Y0qMQz {",
	"    font-weight: 700;",
	"    color: #fff;",
	"    text-transform: uppercase;",
	"}",
	"/* TEXTBOX TEXT COLOR CHANGE (MESSAGE) */",
	".theme-light .quickMessage-1yeL4E::-webkit-input-placeholder,",
	".theme-dark .quickMessage-1yeL4E::-webkit-input-placeholder {",
	"    color: rgb(221, 221, 221);",
	"}",
	"/* TEXTBOX TEXT COLOR CHANGE (NOTE) */",
	".note-3kmerW textarea::-webkit-input-placeholder {",
	"    color: rgb(221, 221, 221);",
	"}",
	"/* MAKE (NOTE) TRANSPARENT WHEN CLICKED */",
	".note-3kmerW textarea:focus::placeholder {",
	"    color: transparent;",
	"}",
	"/* MAKE (MESSAGE) TRANSPARENT WHEN CLICKED */",
	".theme-light .quickMessage-1yeL4E:focus::placeholder,",
	".theme-dark .quickMessage-1yeL4E:focus::placeholder {",
	"    color: rgba(255, 0, 0, 0);",
	"}",
	"/*---------------------------------------- PPOFILE TAB PADDING/MARGIN REMOVALS AND STUFF ----------------------------------------*/",
	"/* REMOVE HELPFUL TIP */",
	".theme-dark .protip-YaFfgO {",
	"    opacity: 0;",
	"    height: 0px;",
	"    width: 0px;",
	"}",
	"/* RANDOM PADDING? FORGOT ?-? */",
	".theme-dark .bodyInner-245q0L,",
	".theme-dark .footer-1fjuF6 {",
	"    padding-top: 5px;",
	"}",
	"/* HEADER MARGIN */",
	".theme-light .headerNormal-T_seeN,",
	".theme-dark .headerNormal-T_seeN {",
	"    margin-bottom: 10px;",
	"}",
	"/*---------------------------------------- MENU TAB BACKGROUND AND PADDING ----------------------------------------*/",
	"",
	"",
	"/* BAN/KICK BUTTONS MARGIN IN BETWEEN */",
	".itemBase-tz5SeC.danger-2dXSTE:nth-child(1) {",
	"    margin-bottom: 3px;",
	"}",
	"/* BAN/KICK BUTTONS NO HOVER */",
	".itemBase-tz5SeC.danger-2dXSTE:nth-child(1),",
	".itemBase-tz5SeC.danger-2dXSTE:nth-child(2) {",
	"    background-color: rgba(64, 68, 75, 1);",
	"    border: 2px solid rgba(13, 13, 15, .29);",
	"    border-radius: 15px;",
	"}",
	"/* BAN/KICK BUTTONS HOVER */",
	".itemBase-tz5SeC.danger-2dXSTE:nth-child(1):hover,",
	".itemBase-tz5SeC.danger-2dXSTE:nth-child(2):hover {",
	"    background-color: rgba(64, 68, 75, .5);",
	"    border: 2px solid rgba(13, 13, 15, .20);",
	"    border-radius: 15px;",
	"}",
	"/*---------------------------------------- ROLE GIVER TAB THINGY BORDER RADUS FIX ----------------------------------------*/",
	".theme-dark .row-rrHHJU.selected-1pIgLL {",
	"    border-radius: 15px;",
	"}",
	"/*---------------------------------------- EMOJI BAR ----------------------------------------*/",
	"",
	"/* \"prefc, Today at 9:46 AM: Remove the cancerous new emoji bar:\" */",
	".infoBar-U6oBFk {",
	"    display:none;",
	"}",
	"/* TOP */",
	".emojiPicker-3m1S-j .header-1nkwgG {",
	"    background-color: rgba(64, 68, 75, 1);",
	"}",
	"/* BOTTOM */",
	".emojiPicker-3m1S-j .categories-1feg4n, .emojiPicker-3m1S-j .categories-1feg4n {",
	"    background-color: rgba(64, 68, 75, 1);",
	"}",
	"/*---------- SCROLL BAR CHANGES ----------*/",
	".scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track, .theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track {",
	"    border-color: rgba(255, 255, 255, 0);",
	"    background-color: rgba(64, 68, 75, 1);",
	"    border-radius: 0;",
	"}",
	".scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-light .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track {",
	"    border-color: rgba(255, 255, 255, 0);",
	"    background-color: rgba(64, 68, 75, 1);",
	"    border-radius: 0;",
	"}",
	".scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-light .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb {",
	"    border-color: rgba(32, 34, 37, 1);",
	"    background-color: rgba(64, 68, 75, 1);",
	"    box-shadow: 0px 0px 0px 10px rgba(32, 34, 37, 1) inset;",
	"    border-radius: 0;",
	"}",
	".scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-dark .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb {",
	"    border-color: rgba(32, 34, 37, 1);",
	"    background-color: rgba(64, 68, 75, 1);",
	"    box-shadow: 0px 0px 0px 10px rgba(32, 34, 37, 1) inset;",
	"    border-radius: 0;",
	"}",
	"/* SCROLLBAR BAR THING WIDER */",
	".scroller-2FKFPG::-webkit-scrollbar-thumb, .scroller-2FKFPG::-webkit-scrollbar-track {",
	"    border-style: none;",
	"}",
	"/* not the emoji tab, but emoji bar */",
	".emojiButton-jE9tXC {",
	"    display:none;",
	"    border-left: 0px;",
	"}",
	".separator-42rNt0 {",
	"    width: 0px;",
	"}",
	"/*---------------------------------------- BOTTOM LEFT VOICE AND PROFILE PANELS TRANCPERENCY FIX ----------------------------------------*/",
	".panels-j1Uci_ {",
	"    background-color: rgba(0, 0, 0, 0);",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
    }

    function siteInfo() {
       console.log(`\nBase URI: ${document.baseURI}\nDoctype: ${document.doctype}\nMode: ${document.documentMode}\nDocument URI: ${document.documentURI}\nDomain: ${document.domain}\nDOM Implementation: ${document.implementation}\nEncoding: ${document.inputEncoding}\nLast Modified: ${document.lastModified}\nLinks: ${document.links}\nReady State: ${document.readyState}\nDocument Referrer: ${document.referrer}\nURL: ${document.URL}`)
    }
})();
