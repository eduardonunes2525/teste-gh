(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["27ed111a"],{"0fc2":function(o,n,t){"use strict";t.r(n);var e=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("q-page",[t("section",{staticClass:"Kr-map"},[t("kr-map")],1)])},a=[],i=t("8aa5"),c={name:"PageIndex",components:{"kr-map":i["a"]}},r=c,s=(t("38f2"),t("2877")),u=t("eebe"),l=t.n(u),p=t("9989"),m=Object(s["a"])(r,e,a,!1,null,"debb2c5e",null);n["default"]=m.exports;l()(m,"components",{QPage:p["a"]})},1:function(o,n){},"38f2":function(o,n,t){"use strict";var e=t("49b4"),a=t.n(e);a.a},"49b4":function(o,n,t){},6994:function(o,n,t){o.exports=t.p+"img/user-loc.91751916.png"},"8aa5":function(o,n,t){"use strict";var e=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("l-map",{attrs:{zoom:o.map.zoom,bounds:o.bounds,center:o.midpoint,options:o.map.options},on:{"update:center":o.centerUpdate}},[t("l-marker",{attrs:{icon:o.user.icon,"lat-lng":o.user.position}}),t("l-layer-group",o._l(o.cars,(function(o,n){return t("l-marker",{key:o.icon+"_"+n,attrs:{icon:o.icon,"lat-lng":o.position}})})),1),t("l-tile-layer",{attrs:{url:o.map.url}})],1)},a=[],i=t("2699"),c=t("4e2b"),r=t("a40a"),s=t("1ebb"),u=(t("6cc5"),t("e11e")),l=t.n(u),p=t("8055"),m={name:"KrMap",components:{LMap:i["a"],LMarker:c["a"],LTileLayer:r["a"],LLayerGroup:s["a"]},data:function(){return{map:{zoom:11,options:{zoomControl:!1},url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"},user:{position:[-16.116016,-47.951183],icon:l.a.icon({iconUrl:t("6994"),iconSize:[60,60]})},cars:[{position:[-15.864826,-48.080887],icon:l.a.icon({iconUrl:t("eadc"),iconSize:[60,60]})}],bounds:Object(u["latLngBounds"])({lat:0,lng:0},{lat:0,lng:0}),messages:[0,0],location:[],socket:p.connect("http://localhost:8080")}},computed:{midpoint:function(){var o=this.user.position,n=this.cars[0].position,t=[(o[0]+n[0])/2,(o[1]+n[1])/2];return t||[]}},methods:{centerUpdate:function(o){this.currentCenter=o}},mounted:function(){var o=this;navigator.geolocation.watchPosition((function(n){o.user.position=[n.coords.latitude,n.coords.longitude]}));var n={email:"eduardo@gmail.com",password:"senhalegal",topic:"krfind/1"};this.socket.on("connect",(function(){o.socket.emit("room",n)})),this.socket.on("message",(function(n){o.cars[0].position=[parseFloat(n["latitude"]),parseFloat(n["longitude"])];var t=o.cars.map((function(o){return o.position}));t.push(o.user.position),o.bounds=Object(u["latLngBounds"])(t)}))}},d=m,f=t("2877"),g=Object(f["a"])(d,e,a,!1,null,null,null);n["a"]=g.exports},eadc:function(o,n,t){o.exports=t.p+"img/car-loc.c37c7a43.jpg"}}]);