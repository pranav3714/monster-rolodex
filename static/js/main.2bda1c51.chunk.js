(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],{16:function(e,t,n){e.exports=n(44)},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),s=(n(21),n(3)),l=n(2),i=n.n(l),u=n(14),m=n(15),h=n.n(m),d=(n(40),n(41),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:e.monsterImage}),r.a.createElement("h2",null,e.monsterName),r.a.createElement("p",null,e.monsterEmail))}),p=(n(42),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters?e.monsters.map((function(e){return r.a.createElement(d,{key:e.id,monsterEmail:e.email,monsterImage:"https://robohash.org/".concat(e.id,"?set=set2&size=180x180"),monsterName:e.name})})):null)}),f=(n(43),function(e){var t=e.setSearch,n=e.search,a=e.placeholder;return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:a,onChange:function(e){return t(e.target.value)},value:n}))}),v=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://jsonplaceholder.typicode.com/users");case 3:n=e.sent,t(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var E=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),i=l[0],u=l[1];Object(a.useEffect)((function(){v(o)}),[]);var m=n.filter((function(e){return e.name.toLowerCase().includes(i)}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(f,{placeholder:"search monsters",search:i,setSearch:u}),r.a.createElement(p,{monsters:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.2bda1c51.chunk.js.map