(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{R8uD:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var a,l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||Function("return this")(),i=function(e){try{return!!e()}catch(t){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!l.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:l},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},E={}.toString,d="".split,y=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return E.call(e).slice(8,-1)}(e)?d.call(e,""):Object(e)}:Object,m=function(e){return y(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},h=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!h(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!h(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!h(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!h(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,O=function(e,t){return T.call(e,t)},b=u.document,S=h(b)&&h(b.createElement),g=function(e){return S?b.createElement(e):{}},_=!a&&!i((function(){return 7!=Object.defineProperty(g("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,N={f:a?I:function(e,t){if(e=m(e),t=v(t,!0),_)try{return I(e,t)}catch(n){}if(O(e,t))return p(!s.f.call(e,t),e[t])}},D=function(e){if(!h(e))throw TypeError(String(e)+" is not an object");return e},A=Object.defineProperty,L={f:a?A:function(e,t,n){if(D(e),t=v(t,!0),D(n),_)try{return A(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},w=a?function(e,t,n){return L.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},R=function(e,t){try{w(u,e,t)}catch(n){u[e]=t}return t},j=u["__core-js_shared__"]||R("__core-js_shared__",{}),P=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return P.call(e)});var M,H,C,G=j.inspectSource,k=u.WeakMap,Y="function"==typeof k&&/native code/.test(G(k)),x=r((function(e){(e.exports=function(e,t){return j[e]||(j[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),B=0,K=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+K).toString(36)},F=x("keys"),V=function(e){return F[e]||(F[e]=U(e))},q={},J=u.WeakMap;if(Y){var z=new J,Q=z.get,W=z.has,X=z.set;M=function(e,t){return X.call(z,e,t),t},H=function(e){return Q.call(z,e)||{}},C=function(e){return W.call(z,e)}}else{var Z=V("state");q[Z]=!0,M=function(e,t){return w(e,Z,t),t},H=function(e){return O(e,Z)?e[Z]:{}},C=function(e){return O(e,Z)}}var $={set:M,get:H,has:C,enforce:function(e){return C(e)?H(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!h(t)||(n=H(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ee=r((function(e){var t=$.get,n=$.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||O(o,"name")||w(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==u?(c?!l&&e[t]&&(a=!0):delete e[t],a?e[t]=o:w(e,t,o)):a?e[t]=o:R(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G(this)}))})),te=u,ne=function(e){return"function"==typeof e?e:void 0},re=function(e,t){return arguments.length<2?ne(te[e])||ne(u[e]):te[e]&&te[e][t]||u[e]&&u[e][t]},oe=Math.ceil,ue=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?ue:oe)(e)},ce=Math.min,ae=Math.max,le=Math.min,fe=function(e){return function(t,n,r){var o,u,i=m(t),c=(o=i.length)>0?ce(ie(o),9007199254740991):0,a=function(e,t){var n=ie(e);return n<0?ae(n+t,0):le(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},se={includes:fe(!0),indexOf:fe(!1)},pe=se.indexOf,Ee=function(e,t){var n,r=m(e),o=0,u=[];for(n in r)!O(q,n)&&O(r,n)&&u.push(n);for(;t.length>o;)O(r,n=t[o++])&&(~pe(u,n)||u.push(n));return u},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=de.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return Ee(e,ye)}},he={f:Object.getOwnPropertySymbols},ve=re("Reflect","ownKeys")||function(e){var t=me.f(D(e)),n=he.f;return n?t.concat(n(e)):t},Te=function(e,t){for(var n=ve(t),r=L.f,o=N.f,u=0;u<n.length;u++){var i=n[u];O(e,i)||r(e,i,o(t,i))}},Oe=/#|\.prototype\./,be=function(e,t){var n=ge[Se(e)];return n==Ie||n!=_e&&("function"==typeof t?i(t):!!t)},Se=be.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},ge=be.data={},_e=be.NATIVE="N",Ie=be.POLYFILL="P",Ne=be,De=N.f,Ae=function(e,t){var n,r,o,i,c,a=e.target,l=e.global,f=e.stat;if(n=l?u:f?u[a]||R(a,{}):(u[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=De(n,r))&&c.value:n[r],!Ne(l?r:a+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Te(i,o)}(e.sham||o&&o.sham)&&w(i,"sham",!0),ee(n,r,i,e)}},Le=Object.keys||function(e){return Ee(e,de)},we=s.f,Re=function(e){return function(t){for(var n,r=m(t),o=Le(r),u=o.length,i=0,c=[];u>i;)n=o[i++],a&&!we.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},je={entries:Re(!0),values:Re(!1)}.values;Ae({target:"Object",stat:!0},{values:function(e){return je(e)}});te.Object.values;var Pe,Me=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),He=Me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=x("wks"),Ge=u.Symbol,ke=He?Ge:Ge&&Ge.withoutSetter||U,Ye=a?Object.defineProperties:function(e,t){D(e);for(var n,r=Le(t),o=r.length,u=0;o>u;)L.f(e,n=r[u++],t[n]);return e},xe=re("document","documentElement"),Be=V("IE_PROTO"),Ke=function(){},Ue=function(e){return"<script>"+e+"<\/script>"},Fe=function(){try{Pe=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;Fe=Pe?function(e){e.write(Ue("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Pe):((t=g("iframe")).style.display="none",xe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ue("document.F=Object")),e.close(),e.F);for(var n=de.length;n--;)delete Fe.prototype[de[n]];return Fe()};q[Be]=!0;var Ve,qe=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=D(e),n=new Ke,Ke.prototype=null,n[Be]=e):n=Fe(),void 0===t?n:Ye(n,t)},Je=(O(Ce,Ve="unscopables")||(Me&&O(Ge,Ve)?Ce[Ve]=Ge[Ve]:Ce[Ve]=ke("Symbol."+Ve)),Ce[Ve]),ze=Array.prototype;null==ze[Je]&&L.f(ze,Je,{configurable:!0,value:qe(null)});var Qe,We=Object.defineProperty,Xe={},Ze=function(e){throw e},$e=se.includes;Ae({target:"Array",proto:!0,forced:!function(e,t){if(O(Xe,e))return Xe[e];t||(t={});var n=[][e],r=!!O(t,"ACCESSORS")&&t.ACCESSORS,o=O(t,0)?t[0]:Ze,u=O(t,1)?t[1]:void 0;return Xe[e]=!!n&&!i((function(){if(r&&!a)return!0;var e={length:-1};r?We(e,1,{enumerable:!0,get:Ze}):e[1]=1,n.call(e,o,u)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return $e(this,e,arguments.length>1?arguments[1]:void 0)}}),Qe="includes",ze[Je][Qe]=!0;var et,tt,nt,rt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},ot=Function.call;et="includes",rt(ot,u["Array"].prototype[et],tt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(nt||(nt={}));var ut,it=nt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ut||(ut={}));var ct,at=ut,lt=[it.PARAGRAPH,it.HEADING_1,it.HEADING_2,it.HEADING_3,it.HEADING_4,it.HEADING_5,it.HEADING_6,it.OL_LIST,it.UL_LIST,it.HR,it.QUOTE,it.EMBEDDED_ENTRY,it.EMBEDDED_ASSET],ft=[it.HR,it.EMBEDDED_ENTRY,it.EMBEDDED_ASSET],st=((ct={})[it.OL_LIST]=[it.LIST_ITEM],ct[it.UL_LIST]=[it.LIST_ITEM],ct[it.LIST_ITEM]=lt.slice(),ct[it.QUOTE]=[it.PARAGRAPH],ct),pt={nodeType:it.DOCUMENT,data:{},content:[{nodeType:it.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var Et=Object.freeze({isInline:function(e){return Object.values(at).includes(e.nodeType)},isBlock:function(e){return Object.values(it).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=it,t.CONTAINERS=st,t.EMPTY_DOCUMENT=pt,t.INLINES=at,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=lt,t.VOID_BLOCKS=ft,t.helpers=Et}));(a=l)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")&&a.default;var f,s,p=l.BLOCKS,E=(l.CONTAINERS,l.EMPTY_DOCUMENT,l.INLINES),d=l.MARKS,y=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function m(e,t){return e.map((function(e,n){return r=h(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function h(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=m(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var v=((f={})[p.DOCUMENT]=function(e,t){return t},f[p.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},f[p.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},f[p.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},f[p.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},f[p.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},f[p.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},f[p.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},f[p.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},f[p.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},f[p.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},f[p.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},f[p.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},f[p.HR]=function(){return u.createElement("hr",null)},f[E.ASSET_HYPERLINK]=function(e){return O(E.ASSET_HYPERLINK,e)},f[E.ENTRY_HYPERLINK]=function(e){return O(E.ENTRY_HYPERLINK,e)},f[E.EMBEDDED_ENTRY]=function(e){return O(E.EMBEDDED_ENTRY,e)},f[E.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},f),T=((s={})[d.BOLD]=function(e){return u.createElement("b",null,e)},s[d.ITALIC]=function(e){return u.createElement("i",null,e)},s[d.UNDERLINE]=function(e){return u.createElement("u",null,e)},s[d.CODE]=function(e){return u.createElement("code",null,e)},s);function O(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?h(e,{renderNode:i({},v,t.renderNode),renderMark:i({},T,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},soUV:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),u=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Gatsby Blog"))},i=function(){return o.a.createElement("div",null,"This is footer")};t.a=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement("h1",null,"site layout"),o.a.createElement(u,null),t,o.a.createElement(i,null))}},tJ4V:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),u=n("R8uD");t.a=function(e){var t=e.title,n=e.content,r=e.pic,i=e.timestamp;return console.log(Object(u.documentToReactComponents)(JSON.parse(n)),"con"),o.a.createElement("div",null,o.a.createElement("div",{className:"title"},t),o.a.createElement("div",{className:"pic"},o.a.createElement("img",{src:r,alt:"postpic"}),o.a.createElement("h1",null,"pic goes here")),o.a.createElement("div",{className:"content"},Object(u.documentToReactComponents)(JSON.parse(n))),o.a.createElement("div",{className:"datestamp"},i))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=688c41349b5c221b8721e23f574b17844cf66c73-fe30a71f5597444cf0b9.js.map