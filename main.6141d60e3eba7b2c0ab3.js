(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,i){},QfWi:function(t,n,i){"use strict";i.r(n);i("IlJM"),i("uQK7"),i("L1EO");var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],o=document.querySelector('[data-action="start"]'),c=document.querySelector('[data-action="stop"]'),a=document.body.style;o.addEventListener("click",(function(){r.start()})),c.addEventListener("click",(function(){r.stop()}));var r={intervalId:null,isActive:!1,start:function(){if(!this.isActive){Date.now();this.isActive=!0,this.intervalId=setInterval((function(){s(e)}),1e3)}},stop:function(){clearInterval(this.intervalId),this.isActive=!1}},s=function(t){var n,i,e=(n=0,i=t.length-1,Math.floor(Math.random()*(i-n+1)+n)),o=t.find((function(n){return t.indexOf(n)===e}));a.backgroundColor=o}}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.6141d60e3eba7b2c0ab3.js.map