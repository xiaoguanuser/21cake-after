"use strict";define(["jquery"],function(){function e(){}return e.prototype.list=function(){$("#weixin").mouseenter(function(){$("#erweima").stop().slideDown("slow")}),$("#header-app").mouseleave(function(){$("#erweima").stop().slideUp("slow")}),$("#app-top").mouseenter(function(){$("#footer-erweima").stop().slideDown("slow")}),$("#app-top").mouseleave(function(){$("#footer-erweima").stop().slideUp("slow")})},new e});