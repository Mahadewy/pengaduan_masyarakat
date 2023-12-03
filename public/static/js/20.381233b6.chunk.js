(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[20],{128:function(e,a,t){},132:function(e,a,t){"use strict";var s=t(19),c=t(9),r=t(7),n=t(53),i=t(1),l=t(3),o=t.n(l),d=t(219),b=t(218),j=t(43),m=t(10),u=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],h=Object(i.forwardRef)((function(e,a){var t,l=e.label,h=e.hideIcon,O=e.showIcon,x=e.visible,f=e.className,p=e.htmlFor,v=e.placeholder,g=e.iconSize,N=e.inputClassName,w=e.invalid,y=Object(n.a)(e,u),S=Object(i.useState)(x),k=Object(r.a)(S,2),C=k[0],I=k[1];return Object(m.jsxs)(i.Fragment,{children:[l?Object(m.jsx)(j.y,{className:"form-label",for:p,children:l}):null,Object(m.jsxs)(j.w,{className:o()((t={},Object(c.a)(t,f,f),Object(c.a)(t,"is-invalid",w),t)),children:[Object(m.jsx)(j.v,Object(s.a)(Object(s.a)({ref:a,invalid:w,type:!1===C?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:o()(Object(c.a)({},N,N))},l&&p?{id:p}:{}),y)),Object(m.jsx)(j.x,{className:"cursor-pointer",onClick:function(){return I(!C)},children:function(){var e=g||14;return!1===C?h||Object(m.jsx)(d.a,{size:e}):O||Object(m.jsx)(b.a,{size:e})}()})]})]})}));a.a=h,h.defaultProps={visible:!1}},415:function(e,a,t){"use strict";t.r(a);var s=t(19),c=t(7),r=t(1),n=t(5),i=t(48),l=t(51),o=t(124),d=t(125),b=t(126),j=t(50),m=t.n(j),u=t(43),h=t(132),O=t(123),x=(t(128),t(121)),f=t(10);a.default=function(){var e=Object(n.l)(),a=Object(r.useState)({}),t=Object(c.a)(a,2),j=t[0],p=t[1],v=Object(r.useState)(!1),g=Object(c.a)(v,2),N=g[0],w=g[1],y=Object(r.useState)(!1),S=Object(c.a)(y,2),k=S[0],C=S[1],I=d.e().shape({email:d.g().email().required(),password:d.g().min(8).max(16).required()}),z=Object(o.f)({mode:"onChange",resolver:Object(b.a)(I),defaultValues:{email:"",password:""}}),F=z.control,P=z.handleSubmit,E=z.formState.errors;return Object(r.useEffect)((function(){x.a.get(O.b.auth,{withCredentials:!0}).catch((function(a){var t;400===(null===a||void 0===a||null===(t=a.response)||void 0===t?void 0:t.status)&&e("/user/dashboard")}))}),[]),Object(f.jsx)("div",{className:"auth-wrapper auth-basic px-2",children:Object(f.jsx)("div",{className:"auth-inner my-2",children:Object(f.jsx)(u.h,{className:"mb-0",children:Object(f.jsxs)(u.i,{children:[Object(f.jsx)(i.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:Object(f.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Login"})}),Object(f.jsx)(u.n,{tag:"h4",className:"mb-1",children:"Welcome to Wibusoft! \ud83d\udc4b"}),Object(f.jsx)(u.m,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(f.jsxs)(u.t,{className:"auth-login-form mt-2",onSubmit:P((function(a){Object.values(a).every((function(e){return e.length>0}))&&(C(!0),x.a.post(O.b.login,{email:a.email,password:a.password}).then((function(a){C(!1),p((function(e){return Object(s.a)(Object(s.a)({},e),{color:"primary",text:"Success Login"})})),w(!0),setTimeout((function(){var t=Object(l.a)(a.data.accessToken);localStorage.setItem("username",t.name),localStorage.setItem("role",t.role),e("/"),m.a.success("Welcome back ".concat(t.name))}),1e3)})).catch((function(e){C(!1),x.a.isAxiosError(e)&&(p((function(a){var t,c;return Object(s.a)(Object(s.a)({},a),{color:"danger",text:null===e||void 0===e||null===(t=e.response)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.message})})),w(!0))})))})),children:[j&&j.text&&j.color&&Object(f.jsx)("div",{className:"mb-1",children:Object(f.jsx)(u.d,{color:j.color,isOpen:N,toggle:function(){return w(!1)},children:Object(f.jsx)("div",{className:"alert-body",children:j.text})})}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(u.y,{className:"form-label",for:"login-email",children:"Email"}),Object(f.jsx)(o.a,{id:"login-email",name:"email",control:F,render:function(e){var a=e.field;return Object(f.jsx)(u.v,Object(s.a)({autoFocus:!0,type:"email",placeholder:"user@wibusoft.com",invalid:E.email&&!0},a))}}),E.email&&Object(f.jsx)(u.u,{children:E.email.message})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsx)(u.y,{className:"form-label",for:"login-password",children:"Password"}),Object(f.jsx)(i.b,{to:"/auth/forgot-password",children:Object(f.jsx)("small",{children:"Forgot Password?"})})]}),Object(f.jsx)(o.a,{id:"login-password",name:"password",control:F,render:function(e){var a=e.field;return Object(f.jsx)(h.a,Object(s.a)({className:"input-group-merge",invalid:E.password&&!0},a))}}),E.password&&Object(f.jsx)(u.u,{children:E.password.message})]}),Object(f.jsxs)("div",{className:"form-check mb-1",children:[Object(f.jsx)(u.v,{type:"checkbox",id:"remember-me"}),Object(f.jsx)(u.y,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),k?Object(f.jsxs)(u.f,{variant:"primary",disabled:!0,block:!0,children:[Object(f.jsx)(u.K,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})," ","Loading..."]}):Object(f.jsx)(u.f,{type:"submit",color:"primary",block:!0,children:"Sign in"})]}),Object(f.jsxs)("p",{className:"text-center mt-2",children:[Object(f.jsx)("span",{className:"me-25",children:"New on our platform?"}),Object(f.jsx)(i.b,{to:"/auth/register",children:Object(f.jsx)("span",{children:"Create an account"})})]})]})})})})}}}]);
//# sourceMappingURL=20.381233b6.chunk.js.map