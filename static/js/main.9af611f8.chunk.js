(this["webpackJsonpfriday-memo"]=this["webpackJsonpfriday-memo"]||[]).push([[0],{10:function(e,t,n){e.exports={nav:"Header_nav__1Rgbw",item:"Header_item__2CXIa",active:"Header_active__GxMcV"}},20:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2deUG",errorInput:"SuperInputText_errorInput__vxdox",error:"SuperInputText_error__2vK08"}},24:function(e,t,n){e.exports={default:"SuperButton_default__1uX3z",red:"SuperButton_red__3-Vo7"}},26:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3ORNz",spanClassName:"SuperCheckbox_spanClassName__PrEeS"}},39:function(e,t,n){e.exports={editableSpan:"SuperEditableSpan_editableSpan__XxzFA"}},40:function(e,t,n){e.exports={radio:"SuperRadio_radio__1TPQL"}},41:function(e,t,n){e.exports={range:"SuperRange_range__2ch0B"}},42:function(e,t,n){e.exports={select:"SuperSelect_select__d77wM"}},48:function(e,t,n){},49:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),o=n(19),s=n.n(o),i=(n(48),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))}),j=(n(49),n(8)),l=n(6),u=n(10),d=n.n(u),b=n(4),O=n(0),h=function(){return Object(O.jsx)("div",{children:"Error 404"})},p=function(){return Object(O.jsx)("div",{children:"Registration"})},x=function(){return Object(O.jsx)("div",{children:"Profile"})},f=n(15),g=n(2),v=n(5),m=n(20),C=n.n(m),S=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,o=e.className,s=e.spanClassName,i=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(C.a.error," ").concat(s||""),l="".concat(a?C.a.errorInput:C.a.superInput," ").concat(o);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(g.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:l},i)),a&&Object(O.jsx)("span",{className:j,children:a})]})},E=n(24),y=n.n(E),N=function(e){var t=e.red,n=e.className,r=Object(v.a)(e,["red","className"]),c="".concat(t?y.a.red:y.a.default," ").concat(n);return Object(O.jsx)("button",Object(g.a)({className:c},r))},w=n(37),R=n.n(w).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),P=function(e,t){return R.post("auth/forgot",{email:e,message:t})},T=function(e,t){return R.post("auth/set-new-password",{password:e,resetPasswordToken:t})},_={info:"",error:"",loading:!1},k=function(e){return{type:"RESET-PASSWORD/SET-INFO",info:e}},I=function(e){return{type:"RESET-PASSWORD/SET-ERROR",error:e}},W=function(e){return{type:"RESET-PASSWORD/SET-LOADING",loading:e}},A=function(){var e=Object(j.c)((function(e){return e.resetPassword.info})),t=Object(j.c)((function(e){return e.resetPassword.error})),n=Object(j.c)((function(e){return e.resetPassword.loading})),a=Object(j.b)(),o=Object(c.useState)(""),s=Object(f.a)(o,2),i=s[0],u=s[1];return e?Object(O.jsx)(b.a,{to:"/check-email"}):Object(O.jsxs)("div",{children:["Reset password",Object(O.jsx)("h3",{children:"It-incubator"}),Object(O.jsx)("h2",{children:"Forgot your password?"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(function(e,t){return function(n){n(W(!0)),P(e,t).then((function(e){n(k(e.data.info))})).catch((function(e){var t,r=null===(t=e.response)||void 0===t?void 0:t.data.error;n(I(r))})).finally((function(){n(W(!1))}))}}(i,'<div style="background-color: #cdfbcd; padding: 15px">\n                    password recovery link: <a style="color: #090062; text-decoration: underline" href=\'https://dzimentey.github.io/memo-cards/#/set-new-password/$token$\'>\n                    click this link </a></div>'))},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)(S,{value:i,placeholder:"Email",onChange:function(e){u(e.currentTarget.value),a(I(""))}}),""!==t?Object(O.jsx)("div",{style:{color:"red",fontWeight:500},children:t}):Object(O.jsx)("div",{children:"Enter your email address and we will send you further instruction"})]}),Object(O.jsx)(N,{type:"submit",style:{width:"200px",borderRadius:"30px"},disabled:n,children:"Send instruction"})]}),Object(O.jsx)("p",{children:"Did you remember your password?"}),Object(O.jsx)("div",{children:Object(O.jsx)(l.b,{to:r.LogIn,activeClassName:"",children:"Try logging in"})})]})},D={info:"",error:"",loading:!1},F=function(e){return{type:"CREATE-NEW-PASSWORD/SET-INFO",info:e}},L=function(e){return{type:"CREATE-NEW-PASSWORD/SET-ERROR",error:e}},B=function(e){return{type:"CREATE-NEW-PASSWORD/SET-LOADING",loading:e}},z=function(){var e=Object(j.c)((function(e){return e.createNewPassword.info})),t=Object(j.c)((function(e){return e.createNewPassword.error})),n=Object(j.c)((function(e){return e.createNewPassword.loading})),r=Object(j.b)(),a=Object(b.h)().token,o=Object(c.useState)(""),s=Object(f.a)(o,2),i=s[0],l=s[1];return""!==e?(alert(e),setTimeout((function(){return r(F(""))}),3e3),Object(O.jsx)(b.a,{to:"/login"})):Object(O.jsxs)("div",{children:["Create New Password Page",Object(O.jsx)("h3",{children:"It-incubator"}),Object(O.jsx)("h2",{children:"Create new password"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(function(e,t){return function(n){n(B(!0)),T(e,t).then((function(e){n(F(e.data.info))})).catch((function(e){var t,r=null===(t=e.response)||void 0===t?void 0:t.data.error;n(L(r))})).finally((function(){n(B(!1))}))}}(i,a))},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)(S,{value:i,placeholder:"New password",onChange:function(e){l(e.currentTarget.value),r(L(""))}}),""!==t?Object(O.jsx)("div",{style:{color:"red",fontWeight:500},children:t}):Object(O.jsx)("div",{children:"Enter your New Password and we will save it for you"})]}),Object(O.jsx)(N,{type:"submit",style:{width:"200px",borderRadius:"30px"},disabled:n,children:"Create new password"})]})]})},G=n(26),K=n.n(G),H=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(K.a.checkbox," ").concat(r||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(g.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:o},a)),c&&Object(O.jsx)("span",{className:K.a.spanClassName,children:c})]})},M=n(39),X=n.n(M),J=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(v.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(c.useState)(!1),s=Object(f.a)(o,2),i=s[0],j=s[1],l=r||{},u=l.children,d=l.onDoubleClick,b=l.className,h=Object(v.a)(l,["children","onDoubleClick","className"]),p="".concat(X.a.editableSpan," ").concat(b);return Object(O.jsx)(O.Fragment,{children:i?Object(O.jsx)(S,Object(g.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(O.jsx)("span",Object(g.a)(Object(g.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:p},h),{},{children:u||a.value}))})},U=n(40),V=n.n(U),$=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,o=Object(v.a)(e,["type","name","options","value","onChange","onChangeOption"]),s=function(e){c&&c(e),a&&a(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(g.a)({type:"radio",name:t,checked:e===r,value:e,onChange:s,className:V.a.radio},o)),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:i})},Q=n(41),q=n.n(Q),Y=function(e){e.type;var t=e.onChange,n=e.onChangeRange,r=e.className,c=Object(v.a)(e,["type","onChange","onChangeRange","className"]),a="".concat(q.a.range," ").concat(r||"");return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("input",Object(g.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:a},c))})},Z=n(42),ee=n.n(Z),te=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(v.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(O.jsx)("select",Object(g.a)(Object(g.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)},className:ee.a.select},c),{},{children:a}))},ne=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"SuperComponents"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(S,{}),Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"InputText"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(N,{children:" x "}),Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"Button"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(H,{}),Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"Checkbox"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(J,{value:"Enter your text here..."}),Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"EditableSpan"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(te,{options:["x","y","z"],value:"y"}),Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"Select"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)($,{name:"radio",options:["x","y","z"],value:"y"}),Object(O.jsx)("span",{style:{fontWeight:"bold",marginLeft:"10px"},children:"Radio"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(Y,{value:50}),Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"Range"})]})]})},re=function(){return Object(O.jsx)("div",{children:"Log in"})},ce=function(){var e=Object(j.b)(),t=Object(b.g)();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"It-incubator"}),Object(O.jsx)("h2",{children:"Check Email"}),Object(O.jsx)("div",{children:"We've sent an Email width instruction to yor Email."}),Object(O.jsx)(N,{type:"submit",style:{width:"200px",borderRadius:"30px"},onClick:function(){t.push("/"),e(k(""))},children:"Ok"})]})};!function(e){e.LogIn="/login",e.Registration="/registration",e.Profile="/profile",e.ResetPassword="/resetPassword",e.CreateNewPassword="/set-new-password/:token",e.SuperComponents="/superComponents",e.Error404="/404",e.CheckEmail="/check-email"}(r||(r={}));var ae=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)("div",{children:"Empty page"})}}),Object(O.jsx)(b.b,{path:r.LogIn,render:function(){return Object(O.jsx)(re,{})}}),Object(O.jsx)(b.b,{path:r.Registration,render:function(){return Object(O.jsx)(p,{})}}),Object(O.jsx)(b.b,{path:r.Profile,render:function(){return Object(O.jsx)(x,{})}}),Object(O.jsx)(b.b,{path:r.ResetPassword,render:function(){return Object(O.jsx)(A,{})}}),Object(O.jsx)(b.b,{path:r.CreateNewPassword,render:function(){return Object(O.jsx)(z,{})}}),Object(O.jsx)(b.b,{path:r.SuperComponents,render:function(){return Object(O.jsx)(ne,{})}}),Object(O.jsx)(b.b,{path:r.CheckEmail,render:function(){return Object(O.jsx)(ce,{})}}),Object(O.jsx)(b.b,{path:r.Error404,render:function(){return Object(O.jsx)(h,{})}}),Object(O.jsx)(b.a,{from:"*",to:r.Error404})]})})},oe=function(){return Object(O.jsxs)("nav",{className:d.a.nav,children:[Object(O.jsx)("div",{className:d.a.item,children:Object(O.jsx)(l.b,{to:r.LogIn,activeClassName:d.a.active,children:"Log in"})}),Object(O.jsx)("div",{className:d.a.item,children:Object(O.jsx)(l.b,{to:r.Registration,activeClassName:d.a.active,children:"Registration"})}),Object(O.jsx)("div",{className:d.a.item,children:Object(O.jsx)(l.b,{to:r.Profile,activeClassName:d.a.active,children:"Profile"})}),Object(O.jsx)("div",{className:d.a.item,children:Object(O.jsx)(l.b,{to:r.ResetPassword,activeClassName:d.a.active,children:"Reset password"})}),Object(O.jsx)("div",{className:d.a.item,children:Object(O.jsx)(l.b,{to:r.CreateNewPassword,activeClassName:d.a.active,children:"Create new password"})}),Object(O.jsx)("div",{className:d.a.item,children:Object(O.jsx)(l.b,{to:r.SuperComponents,activeClassName:d.a.active,children:"SuperComponents"})})]})},se=n(21),ie=n(43),je={},le={},ue={},de={},be=Object(se.b)({logIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;return t.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type,e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return t.type,e},resetPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET-PASSWORD/SET-INFO":return Object(g.a)(Object(g.a)({},e),{},{info:t.info});case"RESET-PASSWORD/SET-ERROR":return Object(g.a)(Object(g.a)({},e),{},{error:t.error});case"RESET-PASSWORD/SET-LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading});default:return e}},createNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE-NEW-PASSWORD/SET-INFO":return Object(g.a)(Object(g.a)({},e),{},{info:t.info});case"CREATE-NEW-PASSWORD/SET-ERROR":return Object(g.a)(Object(g.a)({},e),{},{error:t.error});case"CREATE-NEW-PASSWORD/SET-LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:t.loading});default:return e}},error404:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),Oe=Object(se.c)(be,Object(se.a)(ie.a)),he=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(l.a,{children:Object(O.jsxs)(j.a,{store:Oe,children:[Object(O.jsx)(oe,{}),Object(O.jsx)(ae,{})]})})})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(he,{})}),document.getElementById("root")),i()}},[[75,1,2]]]);
//# sourceMappingURL=main.9af611f8.chunk.js.map