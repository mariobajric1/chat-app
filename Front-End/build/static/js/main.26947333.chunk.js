(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{52:function(e,a,t){e.exports=t(85)},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},78:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),s=t.n(r),l=(t(57),t(9)),o=t(3),i=(t(58),t(11)),m=t(16),u=t.n(m),d=t(25),p=(t(60),t(44)),f=t.n(p),b=t(45),h=t.n(b),E=t(46),v=t.n(E),_=t(99),O=t(103),j=t(102),N=t(42),g=t.n(N).a.create({baseURL:"https://chat-appserver.herokuapp.com"}),w=Object(n.createContext)(),y=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(w.Provider,{value:Object(n.useReducer)(a,t)},r)},C=function(){return Object(n.useContext)(w)};t(78);var I=function(e){var a=e.roomName,t=C(),r=Object(o.a)(t,2),s=r[0],l=r[1],i=Object(n.useState)(s.room),m=Object(o.a)(i,2),u=m[0],d=m[1];return c.a.createElement("div",{onClick:function(e){d(a),l({type:"CHANGE_ROOM",room:u})},className:"sidebarChat"},c.a.createElement("form",null,c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,a))))};var J=function(e){var a=e.rooms,t=Object(n.useState)(""),r=Object(o.a)(t,2),s=r[0],l=r[1],m=C(),p=Object(o.a)(m,2),b=(p[0],p[1]),E=Object(n.useState)([]),N=Object(o.a)(E,2),w=N[0],y=N[1],J=function(){var e=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),g.get("/rooms/sync").then((function(e){y(e.data.map((function(e){return e.name}))),console.log(w)})),g.post("/rooms/new",{name:s}),l(""),b({type:"CHANGE_ROOM",room:s});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(O.a,{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dcl44cw-02dee5f4-c22d-43ce-99d3-5184ab514e81.png/v1/fill/w_600,h_679,strp/super_mario__yoshi_icon_2d_by_joshuat1306_dcl44cw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NzkiLCJwYXRoIjoiXC9mXC9lZDk5MWNmNC03YzhjLTQ1MzAtYjZiYS1hM2FiZjNhYjJlYWVcL2RjbDQ0Y3ctMDJkZWU1ZjQtYzIyZC00M2NlLTk5ZDMtNTE4NGFiNTE0ZTgxLnBuZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZN4NY6XTNnDkPwE_514KlVEVoUyskzOhG_FaKxGvAwo"}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(j.a,null,c.a.createElement(f.a,null)),c.a.createElement(j.a,null,c.a.createElement(h.a,null)),c.a.createElement(j.a,null,c.a.createElement(v.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(_.a,null),c.a.createElement("form",null,c.a.createElement("input",Object(i.a)({value:s,type:"text",onChange:function(e){return l(e.target.value)},placeholder:"start a chat"},"type","text")),c.a.createElement("button",{onClick:J,type:"submit"},"Send Message")))),c.a.createElement("div",{className:"sidebar__chats"},a.map((function(e){return c.a.createElement(I,{roomName:e.name})}))))},k=(t(84),t(100)),Z=t(101),D=t(47),M=t.n(D),x=t(48),S=t.n(x);var Y=function(e){var a=e.messages,t=C(),r=Object(o.a)(t,2),s=r[0],l=(r[1],Object(n.useState)("")),i=Object(o.a)(l,2),m=i[0],p=i[1],f=function(){var e=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),"main"===s.room?g.post("/messages/new",{message:m,name:"demo app",timestamp:"Just now",received:!1,roomID:s.room}):g.post("/messages/new",{message:m,name:"demo app",timestamp:"Just now",received:!1,roomID:s.room[0]}),p("");case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header "},c.a.createElement(O.a,null),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,s.room),c.a.createElement("p",null,"Last seen...")),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(j.a,null,c.a.createElement(_.a,null)),c.a.createElement(j.a,null,c.a.createElement(k.a,null)),c.a.createElement(j.a,null,c.a.createElement(Z.a,null)))),c.a.createElement("div",{className:"chat__body"},a.filter((function(e){return e.roomID==s.room})).map((function(e){return c.a.createElement("p",{className:"chat__message ".concat(e.received&&"chat__receiver")},c.a.createElement("span",{className:"chat__name"},e.name),e.message," ",e.received,c.a.createElement("span",{className:"chat__timestamp"},e.timestamp))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(M.a,null),c.a.createElement("form",null,c.a.createElement("input",{value:m,onChange:function(e){return p(e.target.value)},placeholder:"type a messagae",type:"text"}),c.a.createElement("button",{onClick:f,type:"submit"},"Send Message")),c.a.createElement(S.a,null)))},R=t(28),W=t.n(R);var L=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){g.get("/messages/sync").then((function(e){r(e.data)}))}),[]),Object(n.useEffect)((function(){g.get("/rooms/sync").then((function(e){u(e.data)}))}),[]),Object(n.useEffect)((function(){var e=new W.a("82a5892951d68fc51aab",{cluster:"us2"}).subscribe("messages");return e.bind("inserted",(function(e){r([].concat(Object(l.a)(t),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[t]),Object(n.useEffect)((function(){var e=new W.a("82a5892951d68fc51aab",{cluster:"us2"}).subscribe("rooms");return e.bind("inserted",(function(e){u([].concat(Object(l.a)(m),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[m]),c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__body"},c.a.createElement(J,{rooms:m}),c.a.createElement(Y,{messages:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=function(e,a){switch(console.log(a),a.type){case"CHANGE_ROOM":return{room:[a.room]};default:return e}};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,{initialState:{room:"Initial Chat"},reducer:z},c.a.createElement(L,null))," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.26947333.chunk.js.map