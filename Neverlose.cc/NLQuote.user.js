// ==UserScript==
// @name         Neverlose.cc
// @namespace    none
// @version      0.0.1
// @description  Developing...
// @author       CipX#7771
// @match        *://*/*
// @grant        none
// ==/UserScript==
(async function() {
    'use strict';
    fetch("https://unpkg.com/xhook@latest/dist/xhook.min.js").then(r => r.text()).then(c => eval(c));
    await waitFor("xhook");
    xhook.disable();

    var con = document.createElement("div");
    con.style.display = "none";
    con.style.width = "300px";
    //con.style.backgroundColor="red"
    document.body.prepend(con);

    fetch("https://cdn.jsdelivr.net/npm/tweakpane@3.0.2/dist/tweakpane.min.js").then(r => r.text()).then(r => eval(r))
    await waitFor("Tweakpane")

    var params = {
        networkHook: false,
        quote: "Testing",
        author: "Network Hook",
    };
    var payload = "{\"headers\":{\"content-length\":\"209\",\"content-type\":\"application/json; charset=utf-8\"},\"status\":200,\"statusText\":\"OK\",\"text\":\"{\\\"_id\\\":\\\"hLCOLhZE_92V\\\",\\\"tags\\\":[\\\"famous-quotes\\\",\\\"science\\\",\\\"wisdom\\\"],\\\"content\\\":\\\"" + params.quote + "\\\",\\\"author\\\":\\\"" + params.author + "\\\",\\\"authorSlug\\\":\\\"albert-einstein\\\",\\\"length\\\":60}\",\"data\":\"{\\\"_id\\\":\\\"hLCOLhZE_92V\\\",\\\"tags\\\":[\\\"famous-quotes\\\",\\\"science\\\",\\\"wisdom\\\"],\\\"content\\\":\\\"Reality is merely an illusion, albeit a very persistent one.\\\",\\\"author\\\":\\\"Albert Einstein\\\",\\\"authorSlug\\\":\\\"albert-einstein\\\",\\\"length\\\":60}\",\"xml\":null,\"finalUrl\":\"https://api.quotable.io/random\"}"
    xhook.before(function(request) {
        console.log("Before Hook Ran");
        return JSON.parse(payload);
    });

    var pane = new Tweakpane.Pane({
        container: con,
        title: "Neverlose"
    });

    var tab = pane.addTab({
        pages: [{
                title: 'Exploits'
            },
            {
                title: 'Options'
            },
        ],
    });

    tab.pages[1].addInput(params, "quote");
    tab.pages[1].addInput(params, "author");
    tab.pages[0].addInput(params, "networkHook").on("change", (ev) => {
        if (ev.value == true) {
            xhook.enable()
        } else {
            xhook.disable()
        }
    });
    const btn = tab.pages[1].addButton({
        title: 'Update'
    }).on('click', () => {
        xhook.changeText(params.quote, params.author);
    });
    document.body.addEventListener("keyup", function(e) {
        if (e.code == "Backquote") {
            if (con.style.display == "none") {
                con.style.display = "block"
            } else {
                con.style.display = "none"
            }
        }
    });

    console.log("Neverlose Loaded!");

    // Other Funcs
    xhook.changeText = function(quotee, authorr) {
        payload = "{\"headers\":{\"content-length\":\"209\",\"content-type\":\"application/json; charset=utf-8\"},\"status\":200,\"statusText\":\"OK\",\"text\":\"{\\\"_id\\\":\\\"hLCOLhZE_92V\\\",\\\"tags\\\":[\\\"famous-quotes\\\",\\\"science\\\",\\\"wisdom\\\"],\\\"content\\\":\\\"" + quotee + "\\\",\\\"author\\\":\\\"" + authorr + "\\\",\\\"authorSlug\\\":\\\"albert-einstein\\\",\\\"length\\\":60}\",\"data\":\"{\\\"_id\\\":\\\"hLCOLhZE_92V\\\",\\\"tags\\\":[\\\"famous-quotes\\\",\\\"science\\\",\\\"wisdom\\\"],\\\"content\\\":\\\"Reality is merely an illusion, albeit a very persistent one.\\\",\\\"author\\\":\\\"Albert Einstein\\\",\\\"authorSlug\\\":\\\"albert-einstein\\\",\\\"length\\\":60}\",\"xml\":null,\"finalUrl\":\"https://api.quotable.io/random\"}";
    }

    async function waitFor(item, inte = 300) {
        return new Promise(function check(resolve) {
            if (window[item]) {
                console.log("Passed :", item);
                return resolve(window[item]);
            }
            setTimeout(() => check(resolve), inte);
        });
    }
})();
