/*! For license information please see 7.c0aedb25.chunk.js.LICENSE */
(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[7],{102:function(e,a,t){"use strict";var r=t(8),n=t(11),l=t(0),s=t.n(l);var o=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(this,r),a.apply(this,r)}}),null)};function i(e){return!e||"#"===e.trim()}var c=s.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"a":t,c=e.disabled,u=e.onKeyDown,f=Object(n.a)(e,["as","disabled","onKeyDown"]),m=function(e){var a=f.href,t=f.onClick;(c||i(a))&&e.preventDefault(),c?e.stopPropagation():t&&t(e)};return i(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),c&&(f.tabIndex=-1,f["aria-disabled"]=!0),s.a.createElement(l,Object(r.a)({ref:a},f,{onClick:m,onKeyDown:o((function(e){" "===e.key&&(e.preventDefault(),m(e))}),u)}))}));c.displayName="SafeAnchor";a.a=c},103:function(e,a,t){"use strict";a.__esModule=!0,a.default=function(e,a){var t=void 0===a?{}:a,r=t.propTypes,l=t.defaultProps,s=t.allowFallback,o=void 0!==s&&s,i=t.displayName,c=void 0===i?e.name||e.displayName:i,u=function(a,t){return e(a,t)};return Object.assign(n.default.forwardRef||!o?n.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:r,defaultProps:l})};var r,n=(r=t(0))&&r.__esModule?r:{default:r}},114:function(e,a,t){"use strict";var r=t(8),n=t(11),l=t(95),s=t.n(l),o=t(0),i=t.n(o),c=t(96),u=t(102),f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,o=e.size,f=e.active,m=e.className,p=e.block,d=e.type,v=e.as,b=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(c.b)(t,"btn"),y=s()(m,h,f&&"active",h+"-"+l,p&&h+"-block",o&&h+"-"+o);if(b.href)return i.a.createElement(u.a,Object(r.a)({},b,{as:v,ref:a,className:s()(y,b.disabled&&"disabled")}));a&&(b.ref=a),v||(b.type=d);var g=v||"button";return i.a.createElement(g,Object(r.a)({},b,{className:y}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=f},142:function(e,a,t){"use strict";t.r(a);var r=t(23),n=t(41),l=t(28),s=t(29),o=t(31),i=t(30),c=t(32),u=t(0),f=t.n(u),m=t(16),p=t(97),d=t(98),v=t(42),b=t.n(v),h=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).onChange=function(e){t.setState(Object(n.a)({},e.target.name,e.target.value))},t.registerUser=function(){var e=t.props.getUserRegisterd,a=t.state;e({email:a.email,password:a.password,first_name:a.first_name,last_name:a.last_name})},t.state={email:"",password:"",first_name:"",last_name:""},t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,r=e.first_name,n=e.last_name;this.props.RegisterStore.phase;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"sufee-login d-flex align-content-center flex-wrap"},f.a.createElement("div",{className:"container"},f.a.createElement("div",{className:"login-content"},f.a.createElement("div",{className:"login-logo"},f.a.createElement(m.b,{to:"/"},f.a.createElement("img",{className:"align-content",src:b.a,alt:"Roooter UI"}))),f.a.createElement("div",{className:"login-form"},f.a.createElement("div",{className:"form-group"},f.a.createElement(p.a,{field:"first_name",label:"First Name*",value:r||"",className:"form-control",placeholder:"First Name",onChange:this.onChange})),f.a.createElement("div",{className:"form-group"},f.a.createElement(p.a,{field:"last_name",label:"Last Name*",value:n||"",className:"form-control",placeholder:"Last Name",onChange:this.onChange})),f.a.createElement("div",{className:"form-group"},f.a.createElement(p.a,{field:"email",label:"Email*",value:a||"",className:"form-control",placeholder:"Email",onChange:this.onChange})),f.a.createElement("div",{className:"form-group"},f.a.createElement(p.a,{field:"password",label:"Password*",value:t||"",type:"password",onChange:this.onChange,className:"form-control",placeholder:"Password"})),f.a.createElement(d.a,{className:"btn btn-success btn-flat m-b-30 m-t-30",variant:"primary",type:"submit",label:"Register",onClick:this.registerUser}),f.a.createElement("div",{className:"register-link m-t-15 text-center"},f.a.createElement("p",null,"Already account ? ",f.a.createElement(m.b,{to:"/"},"Sign In Here "))))))))}}],[{key:"getDerivedStateFromProps",value:function(e){var a=e.RegisterStore.user;e.history;return console.log("userInfo: ",a),null}}]),a}(u.Component),y=t(24),g={getUserRegisterd:function(e){return a=e,{type:y.a,postData:a};var a}};a.default=Object(r.b)((function(e){return e}),g)(h)},95:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===l)for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},96:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return u}));var r=t(8),n=t(103),l=t.n(n),s=t(0),o=t.n(s),i=o.a.createContext({});i.Consumer,i.Provider;function c(e,a){var t=Object(s.useContext)(i);return e||t[a]||a}function u(e,a){"string"===typeof a&&(a={prefix:a});var t=e.prototype&&e.prototype.isReactComponent,n=a,s=n.prefix,i=n.forwardRefAs,u=void 0===i?t?"ref":"innerRef":i;return l()((function(a,t){var n=Object(r.a)({},a);n[u]=t;var l=c(n.bsPrefix,s);return o.a.createElement(e,Object(r.a)({},n,{bsPrefix:l}))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},97:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=function(e){var a=e.field,t=e.value,r=e.label,l=e.error,s=e.type,o=e.onChange,i=e.placeholder,c=e.disabled;return n.a.createElement("span",null,n.a.createElement("label",{className:"active",htmlFor:r},r),n.a.createElement("input",{onChange:o,value:t,type:s,name:a,placeholder:i,className:"form-control validate",disabled:c}),l&&n.a.createElement("span",{className:"help-block invalid"},l))};l.defaultProps={type:"text",disabled:!1},a.a=l},98:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(114),s=function(e){var a=e.className,t=e.type,r=e.label,s=e.onClick,o=e.disabled;return n.a.createElement(l.a,{className:a,type:t,name:"action",onClick:s,disabled:o,variant:"primary"},r)};s.defaultProps={disabled:!1,className:"",type:"submit",onClick:function(){}},a.a=s}}]);
//# sourceMappingURL=7.c0aedb25.chunk.js.map