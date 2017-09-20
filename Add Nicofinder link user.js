// ==UserScript==
// @name         Add Nicofinder link Userscript
// @namespace    https://github.com/nico-noname
// @version      0.1
// @description  Add Nicofinder link
// @author       nico-noname
// @match        *://www.nicovideo.jp/*
// @exclude      *://www.nicovideo.jp/mylist/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

      $("li[data-id]").each(function(i) {
        var dataid = $(this).attr("data-id");
        $(this).find("li.count.comment").children().wrapInner("<a href='http://www.nicofinder.net/comment/"+dataid+"' target='_new'></a>");
      });
})();
