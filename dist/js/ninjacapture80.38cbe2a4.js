(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture80","ninjacapture96"],{"0cb2":function(e,t,r){var _=r("7b0b"),n=Math.floor,a="".replace,i=/\$([$&'`]|\d\d?|<[^>]*>)/g,s=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,r,o,c,u){var l=r+e.length,f=o.length,p=s;return void 0!==c&&(c=_(c),p=i),a.call(u,p,(function(_,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":i=c[a.slice(1,-1)];break;default:var s=+a;if(0===s)return _;if(s>f){var u=n(s/10);return 0===u?_:u<=f?void 0===o[u-1]?a.charAt(1):o[u-1]+a.charAt(1):_}i=o[s-1]}return void 0===i?"":i}))}},"159b":function(e,t,r){var _=r("da84"),n=r("fdbc"),a=r("17c2"),i=r("9112");for(var s in n){var o=_[s],c=o&&o.prototype;if(c&&c.forEach!==a)try{i(c,"forEach",a)}catch(u){c.forEach=a}}},"17c2":function(e,t,r){"use strict";var _=r("b727").forEach,n=r("a640"),a=r("ae40"),i=n("forEach"),s=a("forEach");e.exports=i&&s?[].forEach:function(e){return _(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,r){var _=r("d039"),n=r("b622"),a=r("2d00"),i=n("species");e.exports=function(e){return a>=51||!_((function(){var t=[],r=t.constructor={};return r[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4160:function(e,t,r){"use strict";var _=r("23e7"),n=r("17c2");_({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},5319:function(e,t,r){"use strict";var _=r("d784"),n=r("825a"),a=r("50c4"),i=r("a691"),s=r("1d80"),o=r("8aa5"),c=r("0cb2"),u=r("14c3"),l=Math.max,f=Math.min,p=function(e){return void 0===e?e:String(e)};_("replace",2,(function(e,t,r,_){var d=_.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=_.REPLACE_KEEPS_$0,m=d?"$":"$0";return[function(r,_){var n=s(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,n,_):t.call(String(n),r,_)},function(e,_){if(!d&&h||"string"===typeof _&&-1===_.indexOf(m)){var s=r(t,e,this,_);if(s.done)return s.value}var b=n(e),g=String(this),v="function"===typeof _;v||(_=String(_));var E=b.global;if(E){var O=b.unicode;b.lastIndex=0}var k=[];while(1){var w=u(b,g);if(null===w)break;if(k.push(w),!E)break;var P=String(w[0]);""===P&&(b.lastIndex=o(g,a(b.lastIndex),O))}for(var D="",C=0,y=0;y<k.length;y++){w=k[y];for(var M=String(w[0]),x=l(f(i(w.index),g.length),0),j=[],R=1;R<w.length;R++)j.push(p(w[R]));var A=w.groups;if(v){var T=[M].concat(j,x,g);void 0!==A&&T.push(A);var I=String(_.apply(void 0,T))}else I=c(M,g,x,j,A,_);x>=C&&(D+=g.slice(C,x)+I,C=x+M.length)}return D+g.slice(C)}]}))},"65f0":function(e,t,r){var _=r("861d"),n=r("e8b5"),a=r("b622"),i=a("species");e.exports=function(e,t){var r;return n(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?_(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"99af":function(e,t,r){"use strict";var _=r("23e7"),n=r("d039"),a=r("e8b5"),i=r("861d"),s=r("7b0b"),o=r("50c4"),c=r("8418"),u=r("65f0"),l=r("1dde"),f=r("b622"),p=r("2d00"),d=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",b=p>=51||!n((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),g=l("concat"),v=function(e){if(!i(e))return!1;var t=e[d];return void 0!==t?!!t:a(e)},E=!b||!g;_({target:"Array",proto:!0,forced:E},{concat:function(e){var t,r,_,n,a,i=s(this),l=u(i,0),f=0;for(t=-1,_=arguments.length;t<_;t++)if(a=-1===t?i:arguments[t],v(a)){if(n=o(a.length),f+n>h)throw TypeError(m);for(r=0;r<n;r++,f++)r in a&&c(l,f,a[r])}else{if(f>=h)throw TypeError(m);c(l,f++,a)}return l.length=f,l}})},a11a:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Data}));var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4160"),core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c975"),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("1da1"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("d4ec"),_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("bee2"),axios=__webpack_require__("bc3a"),PCors="https://my.${region}.500apps.com/pcors",Region=window.region,Data=function(){function Data(url,params){Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__["a"])(this,Data);var region=Region;this.url=eval("`"+url+"`"),params&&(this.params=params),this.pcors=!0,this.offset=0,this.limit=50,this.enableOffset=!1}return Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__["a"])(Data,[{key:"useOffset",value:function(){this.enableOffset=!0,this.limit=25}},{key:"disablePCors",value:function(){this.pcors=!1}},{key:"getConfig",value:function(){return{headers:{withCredentials:!0}}}},{key:"getPCors",value:function getPCors(url){if(url||(url=this.url),!this.pcors)return url;var PCors_URL="".concat(PCors,"?url=").concat(encodeURIComponent(url));return PCors_URL=eval("`"+PCors_URL+"`"),PCors_URL}},{key:"getOffset",value:function(e){return this.enableOffset?(e=this.append(e,"offset=".concat(this.offset)),e):e}},{key:"setOffset",value:function(e){this.offset=e}},{key:"incrementOffset",value:function(){this.offset+=this.limit}},{key:"getLimit",value:function(e){return e=this.append(e,"limit=".concat(this.limit)),e}},{key:"getParams",value:function(e){return this.params?this.append(e,this.params):e}},{key:"setParams",value:function(e){e&&(this.params=e)}},{key:"append",value:function(e,t){e||(e="");var r="?";return-1!=e.indexOf("?")&&(r="&"),e="".concat(e).concat(r).concat(t),e}},{key:"get",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Getting",this.url),t=this.url,t=this.getLimit(t),t=this.getOffset(t),t=this.getParams(t),e.next=7,axios.get(this.getPCors(t),this.getConfig());case 7:return r=e.sent,r=r.data,this.incrementOffset(),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"get_details",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t){var r,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Getting",this.url,t),r="".concat(this.url,"/").concat(t),e.next=4,axios.get(this.getPCors(r),this.getConfig());case 4:return _=e.sent,_=_.data,e.abrupt("return",_);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Adding new",this.url,t),e.next=3,axios.post(this.getPCors(),{data:[t]},this.getConfig());case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t,r){var _;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Editing",this.url,t,r),r.id||(r.id=t),e.next=4,axios.put(this.getPCors(),r,this.getConfig());case 4:return _=e.sent,e.abrupt("return",_.data);case 6:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t){var r,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Deleting",this.url,t),r="".concat(this.url,"?where=id=").concat(t),e.next=4,axios.delete(r,this.getConfig());case 4:return _=e.sent,e.abrupt("return",_);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"count",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(this.url.replace("/v2","/v2/aggregate"),"/count"),e.next=3,axios.get(this.getPCors(t),this.getConfig());case 3:return r=e.sent,r=r.data,e.abrupt("return",r[0].count);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"editForm",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t,r){var _,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return _=new FormData,Object.keys(r).forEach((function(e){_.append(e,r[e])})),e.next=4,this.edit(t,_);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"multi_call",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Adding new",this.url,t),this.url=this.getParams(this.url),e.next=4,axios.post(this.getPCors(),t,this.getConfig());case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"pageCacheClear",value:function(){var e=Object(_home_agile_Desktop_Office_public_infi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={headers:{"secret-header":!0}},e.next=3,axios.head(this.getPCors(),t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getURL",value:function(){return this.url}},{key:"getRegion",value:function(){return Region}}]),Data}()},a640:function(e,t,r){"use strict";var _=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&_((function(){r.call(null,t||function(){throw 1},1)}))}},b64b:function(e,t,r){var _=r("23e7"),n=r("7b0b"),a=r("df75"),i=r("d039"),s=i((function(){a(1)}));_({target:"Object",stat:!0,forced:s},{keys:function(e){return a(n(e))}})},b727:function(e,t,r){var _=r("0366"),n=r("44ad"),a=r("7b0b"),i=r("50c4"),s=r("65f0"),o=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,u=4==e,l=6==e,f=7==e,p=5==e||l;return function(d,h,m,b){for(var g,v,E=a(d),O=n(E),k=_(h,m,3),w=i(O.length),P=0,D=b||s,C=t?D(d,w):r||f?D(d,0):void 0;w>P;P++)if((p||P in O)&&(g=O[P],v=k(g,P,E),e))if(t)C[P]=v;else if(v)switch(e){case 3:return!0;case 5:return g;case 6:return P;case 2:o.call(C,g)}else switch(e){case 4:return!1;case 7:o.call(C,g)}return l?-1:c||u?u:C}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},be42:function(e,t,r){"use strict";r.r(t);var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("div",[e.mocks&&e.mocks.length?r("b-row",{staticClass:"ml-2"},[r("b-col",{staticClass:"col-3"},e._l(e.mocks,(function(t,_){return r("b-row",{key:_,staticClass:"px-2 "},[r("b-link",{staticClass:"btn btn-outline-light height-75 btn-block text-center text-dark show-event-radio pt-1 pb-2",on:{click:function(r){return e.getMockData(t)}}},[t.name?r("b-row",{staticClass:"justify-content-between px-3"},[r("span",{staticClass:"event-title mr-4 pr-6 pt-2 mt-1 text-truncate "},[e._v(" "+e._s(t.name)+" ")])]):e._e()],1)],1)})),1),r("b-col",{staticClass:"col-9"},[e.mocks&&e.mocks.length?r("b-row",[e.src?r("iframe",{attrs:{src:e.src,width:"100%",height:"750px"}}):e._e()]):e._e()],1)],1):r("b-row",{staticClass:"align-items-center px-1 row"},[r("div",{staticClass:"mx-auto py-5 text-center"},[r("img",{staticClass:"my-4",attrs:{src:"/img/mockly/mocks.svg",width:"300"}}),r("h1",{staticClass:"mb-2 text-black-50"},[e._v("No mocks Found")])])])],1)])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white border-bottom d-md-block d-none"},[r("div",{staticClass:"d-flex align-items-center container justify-content-between py-3"},[r("div",{staticClass:"d-flex align-items-center"},[r("h2",{staticClass:"first-letter-caps mb-1"},[e._v("Mocks")])])])])}],a=(r("96cf"),r("1da1")),i=r("c08c"),s={props:["project"],data:function(){return{domainId:window.domain,projectId:window.user,mockId:window.id,mocks:[],src:""}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMocks();case 2:case"end":return t.stop()}}),t)})))()},methods:{getMocks:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].getMocks(e.domainId,e.projectId,e.$route.query.p,e.mockId,e.$route.query.m);case 2:e.mocks=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getMockData:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.src=e.url?e.url:"";case 1:case"end":return r.stop()}}),r)})))()}}},o=s,c=r("2877"),u=Object(c["a"])(o,_,n,!1,null,null,null);t["default"]=u.exports},bee2:function(e,t,r){"use strict";function _(e,t){for(var r=0;r<t.length;r++){var _=t[r];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}function n(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),e}r.d(t,"a",(function(){return n}))},c08c:function(e,t,r){"use strict";r("99af");var _=r("d4ec"),n=r("bee2"),a=r("a11a"),i="https://api.${region}.500apps.com/mockly",s=function(){function e(){Object(_["a"])(this,e)}return Object(n["a"])(e,[{key:"getProject",value:function(e,t,r){var _=new a["a"]("".concat(i,"/project/").concat(e,"/").concat(t));return _.params="p=".concat(r),_.disablePCors(),_.get()}},{key:"getMocks",value:function(e,t,r,_,n){var s=new a["a"]("".concat(i,"/").concat(e,"/").concat(t));return s.params=_?"p=".concat(r,"&mid=").concat(_,"&m=").concat(n):"p=".concat(r),s.disablePCors(),s.get()}}]),e}();t["a"]=new s},c975:function(e,t,r){"use strict";var _=r("23e7"),n=r("4d64").indexOf,a=r("a640"),i=r("ae40"),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});_({target:"Array",proto:!0,forced:o||!c||!u},{indexOf:function(e){return o?s.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},d4ec:function(e,t,r){"use strict";function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return _}))},e8b5:function(e,t,r){var _=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==_(e)}}}]);
//# sourceMappingURL=ninjacapture80.38cbe2a4.js.map