// ==UserScript==
// @name         Linkvertise bye
// @namespace    none
// @version      0.0.1
// @description  Developing...
// @author       CipX#7771
// @match        *://linkvertise.com/*
// @grant        none
// ==/UserScript==
(async function() {
    'use strict';

    function webypass(url){return fetch("https://vacant-curtly-composure.herokuapp.com/bypass2?url="+url).then(res => res.json())};

    if(document.location.href.match(/\b\d+\b/g)!==null){
    fetch("https://unpkg.com/xhook@latest/dist/xhook.min.js").then(r => r.text()).then(c => eval(c));
    await waitFor("xhook");
    xhook.disable();

    var con = document.createElement("div");
    con.style.width = "auto";
	con.style.position = "absolute";
	con.style.zIndex="99999999999999999";
    //con.style.backgroundColor="red"
    document.body.prepend(con);

    fetch("https://cdn.jsdelivr.net/npm/tweakpane@3.0.2/dist/tweakpane.min.js").then(r => r.text()).then(r => eval(r))
    await waitFor("Tweakpane")

    var settings = {
        delay: 10,
    };
    xhook.before(function(request) {
        console.log("Before Hook Ran");
        return JSON.parse(payload);
    });

    var pane = new Tweakpane.Pane({
        container: con,
        title: "Neverlose"
    });

    const btn = pane.addButton({
        title: 'Update'
    }).on('click', () => {
        webypass(document.location.href).then(r => {document.location = r.destination})
    });
    document.body.addEventListener("keyup", function(e) {
        if (e.code == "Insert") {
            if (con.style.display == "none") {
                con.style.display = "block"
            } else {
                con.style.display = "none"
            }
        }
    });

        setTimeout(function(){
           webypass(document.location.href).then(r => {document.location = r.destination})
        }, settings.delay * 1000);

    console.log("Neverlose Loaded!");

   	async function waitFor(val, inte = 50) {
		while(!window.hasOwnProperty(val)){
			await new Promise(resolve => setTimeout(resolve, inte));
        }
	};
    }
})();
