(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture18"],{"0538":function(e,t,r){"use strict";var n=r("1c0b"),a=r("861d"),o=[].slice,_={},i=function(e,t,r){if(!(t in _)){for(var n=[],a=0;a<t;a++)n[a]="a["+a+"]";_[t]=Function("C,a","return new C("+n.join(",")+")")}return _[t](e,r)};e.exports=Function.bind||function(e){var t=n(this),r=o.call(arguments,1),_=function(){var n=r.concat(o.call(arguments));return this instanceof _?i(t,n.length,n):t.apply(e,n)};return a(t.prototype)&&(_.prototype=t.prototype),_}},"257e":function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},"262e":function(e,t,r){"use strict";function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return a}))},"2ae6":function(module,__webpack_exports__,__webpack_require__){"use strict";var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1da1"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d4ec"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("bee2"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("262e"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("2caf"),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),_jwt__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("9b7b"),_core_data__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("a11a"),CallBack_Server="https://api.${region}.500apps.com/pbxplus/v1/save-contact-info",CallBack=function(_Data){Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["a"])(CallBack,_Data);var _super=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["a"])(CallBack);function CallBack(){return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["a"])(this,CallBack),_super.apply(this,arguments)}return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["a"])(CallBack,[{key:"add",value:function(){var _add=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark((function _callee(form){var headers,region,url,response;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:return _context.next=2,_jwt__WEBPACK_IMPORTED_MODULE_7__["a"].setHeader();case 2:return headers=_context.sent,region=this.getRegion(),url=CallBack_Server,url=eval("`"+url+"`"),_context.next=8,axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url,form,{headers:headers});case 8:return response=_context.sent,_context.abrupt("return",response.data);case 10:case"end":return _context.stop()}}),_callee,this)})));function add(e){return _add.apply(this,arguments)}return add}()}]),CallBack}(_core_data__WEBPACK_IMPORTED_MODULE_8__["a"]);__webpack_exports__["a"]=new CallBack},"2caf":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("4ae1");var n=r("7e84");r("d3b7"),r("25f0");function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var o=r("53ca"),_=r("257e");function i(e,t){return!t||"object"!==Object(o["a"])(t)&&"function"!==typeof t?Object(_["a"])(e):t}function c(e){var t=a();return function(){var r,a=Object(n["a"])(e);if(t){var o=Object(n["a"])(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i(this,r)}}},3410:function(e,t,r){var n=r("23e7"),a=r("d039"),o=r("7b0b"),_=r("e163"),i=r("e177"),c=a((function(){_(1)}));n({target:"Object",stat:!0,forced:c,sham:!i},{getPrototypeOf:function(e){return _(o(e))}})},"4ae1":function(e,t,r){var n=r("23e7"),a=r("d066"),o=r("1c0b"),_=r("825a"),i=r("861d"),c=r("7c73"),s=r("0538"),u=r("d039"),l=a("Reflect","construct"),f=u((function(){function e(){}return!(l((function(){}),[],e)instanceof e)})),p=!u((function(){l((function(){}))})),m=f||p;n({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(e,t){o(e),_(t);var r=arguments.length<3?e:o(arguments[2]);if(p&&!f)return l(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(s.apply(e,n))}var a=r.prototype,u=c(i(a)?a:Object.prototype),m=Function.apply.call(e,u,t);return i(m)?m:u}})},"7e84":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("3410");function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}},"8c65":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){try{return encodeURIComponent(e)}catch(t){console.error("error encode %o")}return null},a=function(e){try{return decodeURIComponent(e)}catch(t){console.error("error decode %o")}return null},o=function(e){return n(e).replace(/[\-\.\+\*]/g,"\\$&")},_={getItem:function(e){return e&&a(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+o(e)+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,r,a,o,_){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(r)switch(r.constructor){case Number:i=r===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+r;break;case String:i="; expires="+r;break;case Date:i="; expires="+r.toUTCString();break;default:break}return document.cookie=[n(e),"=",n(t),i,o?"; domain="+o:"",a?"; path="+a:"",_?"; secure":""].join(""),!0},removeItem:function(e,t,r){return!!this.hasItem(e)&&(document.cookie=[n(e),"=; expires=Thu, 01 Jan 1970 00:00:00 GMT",r?"; domain="+r:"",t?"; path="+t:""].join(""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+n(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);return e=e.map((function(e){return a(e)})),e}};t.default=_},"9b7b":function(e,t,r){"use strict";r("96cf");var n=r("1da1"),a=r("d4ec"),o=r("bee2"),_=r("8c65"),i=r.n(_);function c(e){this.message=e}c.prototype=new Error,c.prototype.name="InvalidCharacterError";var s="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n,a=0,o=0,_="";n=t.charAt(o++);~n&&(r=a%4?64*r+n:n,a++%4)?_+=String.fromCharCode(255&r>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return _};function u(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(s(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return s(t)}}function l(e){this.message=e}function f(e,t){if("string"!=typeof e)throw new l("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(u(e.split(".")[r]))}catch(e){throw new l("Invalid token specified: "+e.message)}}l.prototype=new Error,l.prototype.name="InvalidTokenError";var p=f,m=function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,[{key:"getJWT",value:function(){var e=i.a.getItem("token")||localStorage.getItem("token");if(e)try{var t=JSON.parse(e);this.jwt_token=p(t.jwt);var r="Bearer ".concat(t.jwt);return r}catch(n){return e}}},{key:"setHeader",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getJWT();case 2:return t=e.sent,r={},r["Authorization"]=t,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getJWTDecoded",value:function(){var e=this.getJWT();if(e)return p(e)}}]),e}();t["a"]=new m},f086:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"width-400"},[r("b-card",{attrs:{"body-class":"p-4"}},[r("b-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Enter Name","label-for":"input-1"}},[r("b-form-input",{attrs:{type:"text",id:"input-1",placeholder:"Enter Name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Enter Phone Number","label-for":"input-2"}},[r("VueTelInput",{on:{"country-changed":e.countryChanged},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),r("b-form-group",{staticClass:"mb-3 pb-1 mt-3",attrs:{label:"Call Now or Later"}},[r("b-form-select",{staticClass:"mb-0",attrs:{options:e.sendType,required:""},model:{value:e.form.send_type,callback:function(t){e.$set(e.form,"send_type",t)},expression:"form.send_type"}})],1),"Scheduled"==e.form.send_type?r("b-row",[r("b-col",{attrs:{md:"12"}},[r("b-form-group",{attrs:{label:"Call back time"}},[r("b-form-input",{staticClass:"form-control pr-2",attrs:{type:"datetime-local",id:"callbacktime",required:""},model:{value:e.form.call_back_time,callback:function(t){e.$set(e.form,"call_back_time",t)},expression:"form.call_back_time"}})],1)],1),r("b-col",{staticClass:"mt-2",attrs:{lg:"12"}},[r("label",[e._v("Timezone")]),r("b-form-select",{attrs:{id:"input-3",options:e.getTimezones(),required:""},model:{value:e.form.timezone,callback:function(t){e.$set(e.form,"timezone",t)},expression:"form.timezone"}})],1)],1):e._e(),r("div",{staticClass:"d-flex justify-content-end border-top mt-4 pt-4"},[r("b-button",{attrs:{type:"submit",variant:"primary px-5",disabled:e.isDisabled}},[e._v("Submit")])],1),r("p",{staticClass:"mb-0 text-right mt-2 text-primary",class:e.errorClass},[e._v(e._s(e.message))])],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),_=r("f62e"),i=r("2ae6"),c=r("7f45"),s=r.n(c),u={components:{VueTelInput:_["a"]},props:["domain_id","api_key","call_flow_id"],data:function(){return{form:{name:"",number:"",timezone:"",api_key:"",call_flow_id:"",domain_id:"",message:"",call_back_time:"",send_type:"",country_code:""},isDisabled:!1,errorClass:"",message:"",sendType:[{value:"Call now",text:"call now"},{value:"Scheduled",text:"call later"}]}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.form.timezone=s.a.tz.guess();case 1:case"end":return t.stop()}}),t)})))()},methods:{countryChanged:function(e){this.form.country_code=e.dialCode},getTimezones:function(){var e=s.a.tz.names();return e.unshift({text:"Select timezone",value:""}),e},onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.form.domain_id=e.domain_id,e.form.call_flow_id=e.call_flow_id,e.form.api_key=e.api_key,e.message="saving..",e.isDisabled=!1,"Call now"!=e.form.send_type){t.next=12;break}return t.next=8,i["a"].add(e.form);case 8:r=t.sent,e.message="saved",t.next=16;break;case 12:return t.next=14,i["a"].add(e.form);case 14:r=t.sent,e.message="saved";case 16:r.Status?("Call now"==e.form.send_type?e.message="Call_now_success_helptext":e.message="Call_later_success_helptext",e.errorClass="text-primary"):void 0==r.err.response&&(e.message=r.err.message,e.errorClass="text-danger",e.isDisabled=!1),setTimeout((function(){e.message=""}),2e3);case 18:case"end":return t.stop()}}),t)})))()}}},l=u,f=r("2877"),p=Object(f["a"])(l,n,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=ninjacapture18.3dbced94.js.map