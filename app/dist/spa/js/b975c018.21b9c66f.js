(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b975c018"],{"0c9f":function(t,a,n){},3380:function(t,a,n){"use strict";var o=n("0c9f"),e=n.n(o);e.a},e6e1:function(t,a,n){"use strict";n.r(a);var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("q-page",[n("section",{staticClass:"Kr-map"},[n("kr-map",{attrs:{locations_data:t.locations_data}})],1)])},e=[],c=n("bc3a"),s=n.n(c),i=n("8aa5"),r={name:"PageIndex",components:{"kr-map":i["a"]},data:function(){return{locations_data:{latlngs:[],color:"orange"},speed:{average:0,max:0},icon:!1,bar:!1,bar2:!1,toolbar:!1}},mounted:function(){var t=this;s.a.get("http://localhost:3000/logs").then((function(a){var n={},o=JSON.parse(JSON.stringify(a.data));n["locations"]=o.map((function(t){return[parseFloat(t["latitude"]),parseFloat(t["longitude"])]})),t.locations_data.latlngs=n["locations"]})).catch((function(){})).then((function(){}))}},l=r,p=(n("3380"),n("2877")),u=n("fe09"),d=Object(p["a"])(l,o,e,!1,null,"d5c927f0",null);a["default"]=d.exports;d.options.components=Object.assign({QPage:u["h"],QBtn:u["b"],QDialog:u["f"],QCard:u["c"],QCardSection:u["d"],QSpace:u["j"],QColor:u["e"]},d.options.components||{}),d.options.directives=Object.assign({ClosePopup:u["a"]},d.options.directives||{})}}]);