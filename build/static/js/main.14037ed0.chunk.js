(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),s=n.n(a),i=(n(41),n(34)),o=n(2),u=n(4),j=n(10),l=n(9),b=n(32),d=n.n(b).a.create({withCredentials:!0}),h=n(33),O=n.n(h),p=n(1),x=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],s=r.a.useState(!1),i=Object(l.a)(s,2),o=i[0],b=i[1],h=Object(c.useState)(""),x=Object(l.a)(h,2),f=x[0],v=x[1],g=function(){var e=Object(j.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(f),e.prev=1,e.next=4,d.put("http://127.0.0.1:5000/user/".concat(n),{email:f});case 4:e.sent,window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),401===e.t0.response.status&&alert("Invalid credentials");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("//localhost:5000/logout");case 2:window.location.href="/";case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){Object(j.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("//localhost:5000/@me");case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Not authenticated");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(c.useEffect)((function(){Object(j.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("//localhost:5000/@me");case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Not authenticated");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Welcome to this React Application"}),null!=n?Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Logged in"}),Object(p.jsxs)("h3",{children:["ID: ",n.id]}),Object(p.jsxs)("h3",{children:["Email: ",n.email]}),Object(p.jsx)("button",{onClick:m,children:"Logout"}),Object(p.jsx)("button",{onClick:function(){return b(!0)},children:"modification"}),Object(p.jsx)(O.a,{isOpen:o,onRequestClose:function(){return b(!1)},children:Object(p.jsxs)("form",{children:[Object(p.jsxs)("h3",{children:["ID: ",n.id]}),Object(p.jsx)("input",{type:"text",value:f,onChange:function(e){return v(e.target.value)}}),Object(p.jsx)("button",{children:"modification"}),Object(p.jsx)("button",{type:"button",onClick:function(){return g()}})]})})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"You are not logged in"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:"/login",children:Object(p.jsx)("button",{children:"Login"})}),Object(p.jsx)("a",{href:"/register",children:Object(p.jsx)("button",{children:"Register"})})]})]})]})},f=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],o=s[1],b=function(){var e=Object(j.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n,i),e.prev=1,e.next=4,d.post("//localhost:5000/login",{email:n,password:i});case 4:e.sent,window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),401===e.t0.response.status&&alert("Invalid credentials");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Log Into Your Account"}),Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Email: "}),Object(p.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},id:""})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Password: "}),Object(p.jsx)("input",{type:"password",value:i,onChange:function(e){return o(e.target.value)},id:""})]}),Object(p.jsx)("button",{type:"button",onClick:function(){return b()},children:"Submit"})]})]})},v=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"404 not found"})})},g=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],o=s[1],b=function(){var e=Object(j.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.post("//localhost:5000/register",{email:n,password:i});case 3:e.sent,window.location.href="/",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),401===e.t0.response.status&&alert("Invalid credentials");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Create an account"}),Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Email: "}),Object(p.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},id:""})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Password: "}),Object(p.jsx)("input",{type:"password",value:i,onChange:function(e){return o(e.target.value)},id:""})]}),Object(p.jsx)("button",{type:"button",onClick:function(){return b()},children:"Submit"})]})]})},m=function(){return Object(p.jsx)(i.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,component:x}),Object(p.jsx)(o.a,{path:"/login",exact:!0,component:f}),Object(p.jsx)(o.a,{path:"/register",exact:!0,component:g}),Object(p.jsx)(o.a,{component:v})]})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.14037ed0.chunk.js.map