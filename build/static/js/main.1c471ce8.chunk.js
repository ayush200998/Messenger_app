(this["webpackJsonpfacebook-messenger"]=this["webpackJsonpfacebook-messenger"]||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},65:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(17),r=a.n(c),o=(a(55),a(35)),i=a(90),m=a(92),u=a(91),b=a(93),j=a(88),l=a(89),p=(a(56),a(11)),d=Object(s.forwardRef)((function(e,t){var a=e.message,s=e.username===a.username;return Object(p.jsx)("div",{ref:t,className:"message ".concat(s&&"message_user"),children:Object(p.jsx)(b.a,{className:s?"message_userCard":"message_guestCard",children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(l.a,{color:"white",variant:"h5",component:"h2",children:[!s&&"".concat(a.username||"Unknown user",": ")," ",a.message]})})})})})),f=a(34),g=f.a.initializeApp({apiKey:"AIzaSyBCrlBEN1NPfRCnXvIy4CEOerLLutE8GoQ",authDomain:"facebook-messenger-b37ea.firebaseapp.com",projectId:"facebook-messenger-b37ea",storageBucket:"facebook-messenger-b37ea.appspot.com",messagingSenderId:"492623689693",appId:"1:492623689693:web:9bf18b7feed6272612a834",measurementId:"G-EET70M2M17"}).firestore(),h=a(47),O=a(46),x=a.n(O);a(65);var v=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)([{}]),r=Object(o.a)(c,2),b=r[0],j=r[1],l=Object(s.useState)(""),O=Object(o.a)(l,2),v=O[0],C=O[1];return Object(s.useEffect)((function(){C(prompt("Enter your name"))}),[]),Object(s.useEffect)((function(){g.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){j(e.docs.map((function(e){return e.data()})))}))}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Messenger Clone"}),Object(p.jsxs)("h2",{children:["Welcome ",v]}),Object(p.jsx)("form",{className:"app_form",children:Object(p.jsxs)(i.a,{className:"app_formControl",children:[Object(p.jsx)(m.a,{placeholder:"Enter text....",className:"app_input",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)(u.a,{className:"app_iconButton",disabled:!a,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),g.collection("messages").add({message:a,username:v,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),n("")},children:Object(p.jsx)(x.a,{})})]})}),Object(p.jsx)(h.a,{children:b.map((function(e){return Object(p.jsx)(d,{username:v,message:e},e.timestamp)}))})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),C()}},[[71,1,2]]]);
//# sourceMappingURL=main.1c471ce8.chunk.js.map