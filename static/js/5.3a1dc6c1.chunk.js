(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{354:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3SZvI",dialogItems:"Dialogs_dialogItems__1NPjY",active:"Dialogs_active__FIPNT",messages:"Dialogs_messages__1QWa9",message:"Dialogs_message__23Dch",avatar:"Dialogs_avatar__3OSLs"}},658:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(96),i=t(354),m=t.n(i),r=t(12),c=function(e){var a="/dialog/"+e.id;return n.a.createElement("div",{className:m.a.dialog+" "+m.a.active},n.a.createElement(r.b,{to:a},n.a.createElement("div",null,n.a.createElement("img",{className:m.a.avatar,src:e.avatar})),n.a.createElement("div",null,e.name)))},o=function(e){return n.a.createElement("div",{className:m.a.dialog},n.a.createElement("div",{className:m.a.message},e.message))},g=t(89),d=t(130),u=t(11),v=(t(99),t(32)),E=t(86),_=Object(E.a)(50),b=Object(d.a)({form:"DialogForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(g.a,{name:"newPostTextInDialogs",validate:[E.b,_],placeholder:"Enter your message",component:v.b})),n.a.createElement("div",null,n.a.createElement("button",null,"Press")))})),f=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return n.a.createElement(c,{name:e.name,avatar:e.avatar,id:e.id})})),s=a.messages.map((function(e){return n.a.createElement(o,{message:e.message})}));return n.a.createElement("div",{className:m.a.dialogs},n.a.createElement("div",{className:m.a.dialogsItems},t),n.a.createElement("div",{className:m.a.messages},s,n.a.createElement("div",null,n.a.createElement(b,{onSubmit:function(a){e.sendMessage(a.newPostTextInDialogs)}}))))},p=t(7);a.default=Object(p.d)(Object(u.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(l.b)(a))}}})))(f)}}]);
//# sourceMappingURL=5.3a1dc6c1.chunk.js.map