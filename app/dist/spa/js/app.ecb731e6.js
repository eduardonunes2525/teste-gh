(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,r){e.exports=r("2f39")},"0047":function(e,n,r){},"2f39":function(e,n,r){"use strict";r.r(n);var t=r("967e"),c=r.n(t),a=(r("a481"),r("96cf"),r("fa84")),o=r.n(a),u=(r("7d6e"),r("e54f"),r("985d"),r("0047"),r("2b0e")),i=r("b05d");u["a"].use(i["a"],{config:{}});var l=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},p=[],f={name:"App"},s=f,b=r("2877"),d=Object(b["a"])(s,l,p,!1,null,null,null),h=d.exports,m=[{path:"/",component:function(){return Promise.all([r.e("91bc5cfc"),r.e("2d0bdbc8")]).then(r.bind(null,"2cef"))},children:[{path:"",component:function(){return r.e("2d0e8be2").then(r.bind(null,"8b24"))}}]},{path:"/map",component:function(){return Promise.all([r.e("91bc5cfc"),r.e("2d0bdbc8")]).then(r.bind(null,"2cef"))},children:[{path:"",component:function(){return Promise.all([r.e("91bc5cfc"),r.e("5c6c1355"),r.e("b975c018")]).then(r.bind(null,"e6e1"))}}]},{path:"/real-time-map",component:function(){return Promise.all([r.e("91bc5cfc"),r.e("2d0bdbc8")]).then(r.bind(null,"2cef"))},children:[{path:"",component:function(){return Promise.all([r.e("91bc5cfc"),r.e("5c6c1355"),r.e("5920a4ca")]).then(r.bind(null,"0fc2"))}}]}];m.push({path:"*",component:function(){return Promise.all([r.e("91bc5cfc"),r.e("4b47640d")]).then(r.bind(null,"e51e"))}});var w=m,v=r("e11e"),x=r("8c4f");delete v["Icon"].Default.prototype._getIconUrl,v["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")}),u["a"].use(x["a"]);var k=function(){var e=new x["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:w,mode:"hash",base:""});return e},y=function(){var e="function"===typeof k?k({Vue:u["a"]}):k,n={el:"#q-app",router:e,render:function(e){return e(h)}};return{app:n,router:e}},P=r("bc3a"),g=r.n(P);u["a"].prototype.$axios=g.a;var U=y(),I=U.app,_=U.router;function q(){return D.apply(this,arguments)}function D(){return D=o()(c.a.mark((function e(){var n,r,t,a,o;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=!0,r=function(e){n=!1,window.location.href=e},t=window.location.href.replace(window.location.origin,""),a=[void 0],o=0;case 5:if(!(!0===n&&o<a.length)){e.next=23;break}if("function"===typeof a[o]){e.next=8;break}return e.abrupt("continue",20);case 8:return e.prev=8,e.next=11,a[o]({app:I,router:_,Vue:u["a"],ssrContext:null,redirect:r,urlPath:t});case 11:e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](8),!e.t0||!e.t0.url){e.next=18;break}return window.location.href=e.t0.url,e.abrupt("return");case 18:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 20:o++,e.next=5;break;case 23:if(!1!==n){e.next=25;break}return e.abrupt("return");case 25:new u["a"](I);case 26:case"end":return e.stop()}}),e,null,[[8,13]])}))),D.apply(this,arguments)}q()}},[[0,"runtime","vendor"]]]);