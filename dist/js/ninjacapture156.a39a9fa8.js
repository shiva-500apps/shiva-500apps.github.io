(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ninjacapture156"],{"498a":function(e,t,r){"use strict";var a=r("23e7"),n=r("58a8").trim,i=r("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),n=r("5899"),i="["+n+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),s=function(e){return function(t){var r=String(a(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(e,t,r){var a=r("861d"),n=r("d2bb");e.exports=function(e,t,r){var i,o;return n&&"function"==typeof(i=t.constructor)&&i!==r&&a(o=i.prototype)&&o!==r.prototype&&n(e,o),e}},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),o=r("6eeb"),c=r("5135"),s=r("c6b6"),u=r("7156"),m=r("c04e"),p=r("d039"),l=r("7c73"),f=r("241c").f,_=r("06cf").f,g=r("9bf2").f,d=r("58a8").trim,b="Number",h=n[b],y=h.prototype,v=s(l(y))==b,N=function(e){var t,r,a,n,i,o,c,s,u=m(e,!1);if("string"==typeof u&&u.length>2)if(u=d(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(i=u.slice(2),o=i.length,c=0;c<o;c++)if(s=i.charCodeAt(c),s<48||s>n)return NaN;return parseInt(i,a)}return+u};if(i(b,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var I,A=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof A&&(v?p((function(){y.valueOf.call(r)})):s(r)!=b)?u(new h(N(t)),r,A):N(t)},C=a?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;C.length>$;$++)c(h,I=C[$])&&!c(A,I)&&g(A,I,_(h,I));A.prototype=y,y.constructor=A,o(n,b,A)}},c8d2:function(e,t,r){var a=r("d039"),n=r("5899"),i="​᠎";e.exports=function(e){return a((function(){return!!n[e]()||i[e]()!=i||n[e].name!==e}))}},fa02:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-breadcrumb",{staticClass:"align-items-end d-flex pt-0 custom-breadcrumb"},[r("b-breadcrumb-item",{staticClass:"pl-0",on:{click:e.goToHome}},[e._v(" Home")]),r("b-breadcrumb-item",{attrs:{active:"Categories"==e.$route.name},on:{click:e.goToCategory}},[r("span",{staticClass:"text-capitalize"},[e._v(e._s(e.$route.params.category_name?e.$route.params.category_name.replaceAll("-"," "):e.category_name)+" ")])]),"Categories"!=e.$route.name?r("b-breadcrumb-item",{attrs:{active:"Sections"==e.$route.name},on:{click:e.goToSection}},[r("span",{staticClass:"text-capitalize"},[e._v(" "+e._s(e.$route.params.section_name?e.$route.params.section_name.replaceAll("-"," "):e.section_name))])]):e._e(),"Articles"==e.$route.name?r("b-breadcrumb-item",{attrs:{active:"Articles"==e.$route.name}},[r("span",{staticClass:"text-capitalize"},[e._v(" "+e._s(e.$route.params.article_name?e.$route.params.article_name.replaceAll("-"," "):e.article_name))])]):e._e()],1)],1)},n=[],i=(r("a9e3"),r("498a"),r("96cf"),r("1da1")),o={props:{category_name:{type:String},section_name:{type:String},article_name:{type:String},category_id:{type:Number},section_id:{type:Number},id:{type:Number}},data:function(){return{}},methods:{goToHome:function(){this.$router.push({name:"Category"})},goToCategory:function(){this.$router.push({name:"Categories",params:{category_name:this.category_name.trim().toLowerCase().replaceAll(" ","-"),c_id:this.category_id}})},goToSection:function(){this.$router.push({name:"Sections",params:{section_name:this.section_name.trim().toLowerCase().replaceAll(" ","-"),s_id:this.section_id,c_id:this.category_id}})}},mounted:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},c=o,s=r("2877"),u=Object(s["a"])(c,a,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=ninjacapture156.a39a9fa8.js.map