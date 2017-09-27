// ==UserScript==
// @name         tesuto2 Userscript
// @namespace    https://github.com/nico-noname
// @version      0.11
// @description  Add Nicofinder link
// @author       nico-noname
// @match        *://www.nicovideo.jp/*
// @exclude      *://www.nicovideo.jp/mylist/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const Nicof ="http://www.nicofinder.net/comment/";

    $("li[data-id]").each(function(i) {
        let dataid = $(this).attr("data-id");
        $(this).find("li.count.comment").children().wrapInner("<a></a>").children().attr({"href":Nicof+dataid,"target":"_new"});
    });
})();
