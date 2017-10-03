// ==UserScript==
// @name         Add Nicofinder Link
// @namespace    https://github.com/nico-noname
// @version      0.01
// @description  Add Nicofinder Link
// @author       nico-noname
// @match        *://www.nicovideo.jp/ranking/*
// @match        *://www.nicovideo.jp/search/*
// @match        *://www.nicovideo.jp/tag/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js
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
