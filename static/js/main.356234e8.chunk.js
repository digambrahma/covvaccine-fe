(this.webpackJsonpcovvaccine_fe=this.webpackJsonpcovvaccine_fe||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(13),i=n.n(s),r=(n(36),n(37),n(25)),o=n.n(r),l=n(29),d=n(16),j=n(26),u=n(50),b=n(51),h=n(31),m=n.n(h),O=n(1);function v(e){return Object(O.jsx)("div",{children:Object(O.jsxs)(u.a,Object(j.a)(Object(j.a)({},e),{},{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[""===e.status&&Object(O.jsx)(m.a,{count:4}),"Already registered!"===e.status&&Object(O.jsxs)(b.a,{variant:"warning",children:[Object(O.jsx)(b.a.Heading,{children:"Oops!"}),Object(O.jsx)("p",{children:"Looks like you've already submitted your details. Please change your pincode or email and submit again. Thanks!"})]}),"No slots available!"===e.status&&Object(O.jsxs)(b.a,{variant:"success",children:[Object(O.jsx)(b.a.Heading,{children:"Hey, Thanks for submitting!"}),Object(O.jsx)("p",{children:"Looks like there is no slots available currently. We'll send you email notification as soon as slots get available. Thanks!"})]}),"Ok"===e.status&&Object(O.jsxs)(b.a,{variant:"success",children:[Object(O.jsx)(b.a.Heading,{children:"Hey, Thanks for submitting!"}),Object(O.jsx)("p",{children:"Slots are available now! We've send you the details in email. Please go check and take your dose. Thanks!"})]})]}))})}function x(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(new Date),i=Object(d.a)(s,2),r=i[0],j=i[1],u=Object(a.useState)(""),b=Object(d.a)(u,2),h=b[0],m=b[1],x=Object(a.useState)(""),f=Object(d.a)(x,2),p=f[0],g=f[1],y=Object(a.useState)(),k=Object(d.a)(y,2),N=k[0],w=k[1];Object(a.useEffect)((function(){""==n&&""==h||function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/findslots?pincode=".concat(encodeURIComponent(n),"&date=").concat(encodeURIComponent(C(r)),"&sendTo=").concat(encodeURIComponent(h)));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,g(a.status);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[N]);var C=function(e){var t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),e=t+"-"+n+"-"+a};return Object(O.jsx)("div",{className:"container-md",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(p),w(!0)},children:[Object(O.jsxs)("div",{className:"row mb-2",children:[Object(O.jsx)("label",{htmlFor:"pincode",className:"col-form-label",children:"Pincode"}),Object(O.jsx)("div",{className:"col-sm",children:Object(O.jsx)("input",{id:"pincode",type:"text",className:"form-control-sm",placeholder:"Please enter your pincode",required:!0,minLength:"6",value:n,onChange:function(e){return c(e.target.value)}})})]}),Object(O.jsxs)("div",{className:"row mb-2",children:[Object(O.jsx)("label",{htmlFor:"email",className:"col-form-label",children:"Email address"}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{id:"email",type:"email",className:"form-control-sm",placeholder:"Please enter your email",required:!0,value:h,onChange:function(e){return m(e.target.value)}})})]}),Object(O.jsx)("div",{className:"submit",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter",children:"Submit"})}),Object(O.jsx)(v,{show:N,status:p,onHide:function(){return m(""),c(""),j(new Date),w(!1),void g("")}})]})})}n(46);var f=function(){return Object(O.jsx)("div",{className:"App vertical-center",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("h1",{children:["Welcome to ",Object(O.jsx)("a",{href:"https://covvaccine.com",children:"Covvaccine!"})]})}),Object(O.jsx)("div",{children:Object(O.jsx)(x,{})}),Object(O.jsx)("div",{className:"footer",children:Object(O.jsx)("p",{children:"Developed by Digambar @2021"})})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.356234e8.chunk.js.map