/*! For license information please see component---src-pages-index-tsx-fff43789d997ced7ec08.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{9806:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var a,l,f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,i,u=function(e){return e&&e.Math==Math&&e},a=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof n&&n)||function(){return this}()||Function("return this")(),l=function(e){try{return!!e()}catch(t){return!0}},f=!l((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,d={f:E&&!s.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:s},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,y="".split,v=l((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,h=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},g=function(e){return v(h(e))},T=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e){return"function"==typeof e?e:void 0},O=function(e,t){return arguments.length<2?b(a[e]):a[e]&&a[e][t]},L=O("navigator","userAgent")||"",_=a.process,A=a.Deno,S=_&&_.versions||A&&A.version,I=S&&S.v8;I?i=(o=I.split("."))[0]<4?1:o[0]+o[1]:L&&(!(o=L.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=L.match(/Chrome\/(\d+)/))&&(i=o[1]);var D=i&&+i,N=!!Object.getOwnPropertySymbols&&!l((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&D&&D<41})),R=N&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,w=R?function(e){return"symbol"==typeof e}:function(e){var t=O("Symbol");return"function"==typeof t&&Object(e)instanceof t},P=function(e,t){try{Object.defineProperty(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t},C="__core-js_shared__",H=a[C]||P(C,{}),j=r((function(e){(e.exports=function(e,t){return H[e]||(H[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.17.2",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),M={}.hasOwnProperty,k=Object.hasOwn||function(e,t){return M.call(Object(h(e)),t)},B=0,x=Math.random(),G=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+x).toString(36)},Y=j("wks"),K=a.Symbol,U=R?K:K&&K.withoutSetter||G,F=function(e){return k(Y,e)&&(N||"string"==typeof Y[e])||(N&&k(K,e)?Y[e]=K[e]:Y[e]=U("Symbol."+e)),Y[e]},W=F("toPrimitive"),z=function(e,t){if(!T(e)||w(e))return e;var n,r=e[W];if(void 0!==r){if(void 0===t&&(t="default"),n=r.call(e,t),!T(n)||w(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),function(e,t){var n,r;if("string"===t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!T(r=n.call(e)))return r;if("string"!==t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(e,t)},V=function(e){var t=z(e,"string");return w(t)?t:String(t)},Q=a.document,q=T(Q)&&T(Q.createElement),J=function(e){return q?Q.createElement(e):{}},Z=!f&&!l((function(){return 7!=Object.defineProperty(J("div"),"a",{get:function(){return 7}}).a})),X=Object.getOwnPropertyDescriptor,$={f:f?X:function(e,t){if(e=g(e),t=V(t),Z)try{return X(e,t)}catch(n){}if(k(e,t))return p(!d.f.call(e,t),e[t])}},ee=function(e){if(!T(e))throw TypeError(String(e)+" is not an object");return e},te=Object.defineProperty,ne={f:f?te:function(e,t,n){if(ee(e),t=V(t),ee(n),Z)try{return te(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},re=f?function(e,t,n){return ne.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},oe=Function.toString;"function"!=typeof H.inspectSource&&(H.inspectSource=function(e){return oe.call(e)});var ie,ue,ce,ae=H.inspectSource,le=a.WeakMap,fe="function"==typeof le&&/native code/.test(ae(le)),se=j("keys"),Ee=function(e){return se[e]||(se[e]=G(e))},de={},pe="Object already initialized",me=a.WeakMap;if(fe||H.state){var ye=H.state||(H.state=new me),ve=ye.get,he=ye.has,ge=ye.set;ie=function(e,t){if(he.call(ye,e))throw new TypeError(pe);return t.facade=e,ge.call(ye,e,t),t},ue=function(e){return ve.call(ye,e)||{}},ce=function(e){return he.call(ye,e)}}else{var Te=Ee("state");de[Te]=!0,ie=function(e,t){if(k(e,Te))throw new TypeError(pe);return t.facade=e,re(e,Te,t),t},ue=function(e){return k(e,Te)?e[Te]:{}},ce=function(e){return k(e,Te)}}var be={set:ie,get:ue,has:ce,enforce:function(e){return ce(e)?ue(e):ie(e,{})},getterFor:function(e){return function(t){var n;if(!T(t)||(n=ue(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Oe=r((function(e){var t=be.get,n=be.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var u,c=!!i&&!!i.unsafe,l=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||k(o,"name")||re(o,"name",t),(u=n(o)).source||(u.source=r.join("string"==typeof t?t:""))),e!==a?(c?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=o:re(e,t,o)):l?e[t]=o:P(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||ae(this)}))})),Le=Math.ceil,_e=Math.floor,Ae=function(e){return isNaN(e=+e)?0:(e>0?_e:Le)(e)},Se=Math.min,Ie=Math.max,De=Math.min,Ne=function(e){return function(t,n,r){var o,i,u=g(t),c=(o=u.length)>0?Se(Ae(o),9007199254740991):0,a=function(e,t){var n=Ae(e);return n<0?Ie(n+t,0):De(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===n)return e||a||0;return!e&&-1}},Re={includes:Ne(!0),indexOf:Ne(!1)},we=Re.indexOf,Pe=function(e,t){var n,r=g(e),o=0,i=[];for(n in r)!k(de,n)&&k(r,n)&&i.push(n);for(;t.length>o;)k(r,n=t[o++])&&(~we(i,n)||i.push(n));return i},Ce=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],He=Ce.concat("length","prototype"),je={f:Object.getOwnPropertyNames||function(e){return Pe(e,He)}},Me={f:Object.getOwnPropertySymbols},ke=O("Reflect","ownKeys")||function(e){var t=je.f(ee(e)),n=Me.f;return n?t.concat(n(e)):t},Be=function(e,t){for(var n=ke(t),r=ne.f,o=$.f,i=0;i<n.length;i++){var u=n[i];k(e,u)||r(e,u,o(t,u))}},xe=/#|\.prototype\./,Ge=function(e,t){var n=Ke[Ye(e)];return n==Fe||n!=Ue&&("function"==typeof t?l(t):!!t)},Ye=Ge.normalize=function(e){return String(e).replace(xe,".").toLowerCase()},Ke=Ge.data={},Ue=Ge.NATIVE="N",Fe=Ge.POLYFILL="P",We=Ge,ze=$.f,Ve=function(e,t){var n,r,o,i,u,c=e.target,l=e.global,f=e.stat;if(n=l?a:f?a[c]||P(c,{}):(a[c]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(u=ze(n,r))&&u.value:n[r],!We(l?r:c+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Be(i,o)}(e.sham||o&&o.sham)&&re(i,"sham",!0),Oe(n,r,i,e)}},Qe=Object.keys||function(e){return Pe(e,Ce)},qe=d.f,Je=function(e){return function(t){for(var n,r=g(t),o=Qe(r),i=o.length,u=0,c=[];i>u;)n=o[u++],f&&!qe.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Ze=(Je(!0),Je(!1));Ve({target:"Object",stat:!0},{values:function(e){return Ze(e)}}),a.Object.values;var Xe,$e=f?Object.defineProperties:function(e,t){ee(e);for(var n,r=Qe(t),o=r.length,i=0;o>i;)ne.f(e,n=r[i++],t[n]);return e},et=O("document","documentElement"),tt=Ee("IE_PROTO"),nt=function(){},rt=function(e){return"<script>"+e+"<\/script>"},ot=function(e){e.write(rt("")),e.close();var t=e.parentWindow.Object;return e=null,t},it=function(){try{Xe=new ActiveXObject("htmlfile")}catch(r){}var e,t;it="undefined"!=typeof document?document.domain&&Xe?ot(Xe):((t=J("iframe")).style.display="none",et.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(rt("document.F=Object")),e.close(),e.F):ot(Xe);for(var n=Ce.length;n--;)delete it.prototype[Ce[n]];return it()};de[tt]=!0;var ut=Object.create||function(e,t){var n;return null!==e?(nt.prototype=ee(e),n=new nt,nt.prototype=null,n[tt]=e):n=it(),void 0===t?n:$e(n,t)},ct=F("unscopables"),at=Array.prototype;null==at[ct]&&ne.f(at,ct,{configurable:!0,value:ut(null)});var lt,ft=Re.includes;Ve({target:"Array",proto:!0},{includes:function(e){return ft(this,e,arguments.length>1?arguments[1]:void 0)}}),lt="includes",at[ct][lt]=!0;var st,Et,dt,pt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},mt=Function.call;st="includes",pt(mt,a.Array.prototype[st],Et),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(dt||(dt={}));var yt,vt=dt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(yt||(yt={}));var ht,gt=yt;!function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(ht||(ht={}));var Tt,bt=ht,Ot=[vt.PARAGRAPH,vt.HEADING_1,vt.HEADING_2,vt.HEADING_3,vt.HEADING_4,vt.HEADING_5,vt.HEADING_6,vt.OL_LIST,vt.UL_LIST,vt.HR,vt.QUOTE,vt.EMBEDDED_ENTRY,vt.EMBEDDED_ASSET,vt.TABLE],Lt=[vt.HR,vt.EMBEDDED_ENTRY,vt.EMBEDDED_ASSET],_t=((Tt={})[vt.OL_LIST]=[vt.LIST_ITEM],Tt[vt.UL_LIST]=[vt.LIST_ITEM],Tt[vt.LIST_ITEM]=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}([],Ot),Tt[vt.QUOTE]=[vt.PARAGRAPH],Tt[vt.TABLE]=[vt.TABLE_ROW],Tt[vt.TABLE_ROW]=[vt.TABLE_CELL],Tt[vt.TABLE_CELL]=[vt.PARAGRAPH],Tt[vt.TABLE_HEADER_CELL]=[vt.PARAGRAPH],Tt),At={nodeType:vt.DOCUMENT,data:{},content:[{nodeType:vt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},St=Object.freeze({__proto__:null,isInline:function(e){return Object.values(gt).includes(e.nodeType)},isBlock:function(e){return Object.values(vt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=vt,t.CONTAINERS=_t,t.EMPTY_DOCUMENT=At,t.INLINES=gt,t.MARKS=bt,t.TOP_LEVEL_BLOCKS=Ot,t.VOID_BLOCKS=Lt,t.helpers=St}(a={exports:{}},a.exports),a.exports);(l=f)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var s,E,d=f.BLOCKS,p=(f.CONTAINERS,f.EMPTY_DOCUMENT,f.INLINES),m=f.MARKS,y=(f.TOP_LEVEL_BLOCKS,f.VOID_BLOCKS,f.helpers);function v(e,t){return e.map((function(e,n){return r=h(e,t),i=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:i}):r;var r,i}))}function h(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var u=v(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):i.createElement(i.Fragment,null,u)}var g=((s={})[d.DOCUMENT]=function(e,t){return t},s[d.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},s[d.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},s[d.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},s[d.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},s[d.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},s[d.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},s[d.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},s[d.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},s[d.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},s[d.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},s[d.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},s[d.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},s[d.HR]=function(){return i.createElement("hr",null)},s[d.TABLE]=function(e,t){return i.createElement("table",null,i.createElement("tbody",null,t))},s[d.TABLE_ROW]=function(e,t){return i.createElement("tr",null,t)},s[d.TABLE_CELL]=function(e,t){return i.createElement("td",null,t)},s[p.ASSET_HYPERLINK]=function(e){return b(p.ASSET_HYPERLINK,e)},s[p.ENTRY_HYPERLINK]=function(e){return b(p.ENTRY_HYPERLINK,e)},s[p.EMBEDDED_ENTRY]=function(e){return b(p.EMBEDDED_ENTRY,e)},s[p.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},s),T=((E={})[m.BOLD]=function(e){return i.createElement("b",null,e)},E[m.ITALIC]=function(e){return i.createElement("i",null,e)},E[m.UNDERLINE]=function(e){return i.createElement("u",null,e)},E[m.CODE]=function(e){return i.createElement("code",null,e)},E);function b(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?h(e,{renderNode:u(u({},g),t.renderNode),renderMark:u(u({},T),t.renderMark),renderText:t.renderText}):null}},3178:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(7294),o=n(8262),i=n(8306),u=n(9900),c=n(9922);var a=n(2267),l=n(9179),f=0;function s(){var e=f;return f++,e}var E=function(e){var t=e.children,n=e.initial,o=e.isPresent,i=e.onExitComplete,u=e.custom,c=e.presenceAffectsLayout,f=(0,l.h)(d),E=(0,l.h)(s),p=(0,r.useMemo)((function(){return{id:E,initial:n,isPresent:o,custom:u,onExitComplete:function(e){f.set(e,!0);var t=!0;f.forEach((function(e){e||(t=!1)})),t&&(null==i||i())},register:function(e){return f.set(e,!1),function(){return f.delete(e)}}}}),c?void 0:[o]);return(0,r.useMemo)((function(){f.forEach((function(e,t){return f.set(t,!1)}))}),[o]),r.useEffect((function(){!o&&!f.size&&(null==i||i())}),[o]),r.createElement(a.O.Provider,{value:p},t)};function d(){return new Map}var p=n(9180);function m(e){return e.key||""}var y=function(e){var t=e.children,n=e.custom,o=e.initial,i=void 0===o||o,a=e.onExitComplete,l=e.exitBeforeEnter,f=e.presenceAffectsLayout,s=void 0===f||f,d=function(){var e=(0,r.useRef)(!1),t=(0,u.CR)((0,r.useState)(0),2),n=t[0],o=t[1];return(0,c.z)((function(){return e.current=!0})),(0,r.useCallback)((function(){!e.current&&o(n+1)}),[n])}(),y=(0,r.useContext)(p.WH);(0,p.Md)(y)&&(d=y.forceUpdate);var v=(0,r.useRef)(!0),h=function(e){var t=[];return r.Children.forEach(e,(function(e){(0,r.isValidElement)(e)&&t.push(e)})),t}(t),g=(0,r.useRef)(h),T=(0,r.useRef)(new Map).current,b=(0,r.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=m(e);t.set(n,e)}))}(h,T),v.current)return v.current=!1,r.createElement(r.Fragment,null,h.map((function(e){return r.createElement(E,{key:m(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:s},e)})));for(var O=(0,u.ev)([],(0,u.CR)(h)),L=g.current.map(m),_=h.map(m),A=L.length,S=0;S<A;S++){var I=L[S];-1===_.indexOf(I)?b.add(I):b.delete(I)}return l&&b.size&&(O=[]),b.forEach((function(e){if(-1===_.indexOf(e)){var t=T.get(e);if(t){var o=L.indexOf(e);O.splice(o,0,r.createElement(E,{key:m(t),isPresent:!1,onExitComplete:function(){T.delete(e),b.delete(e);var t=g.current.findIndex((function(t){return t.key===e}));g.current.splice(t,1),b.size||(g.current=h,d(),a&&a())},custom:n,presenceAffectsLayout:s},t))}}})),O=O.map((function(e){var t=e.key;return b.has(t)?e:r.createElement(E,{key:m(e),isPresent:!0,presenceAffectsLayout:s},e)})),g.current=O,r.createElement(r.Fragment,null,b.size?O:O.map((function(e){return(0,r.cloneElement)(e)})))},v=n(4126),h=function(e){var t=e.name;e.tooltip,e.category,e.iconID;return r.createElement(v.E.div,{className:"TagBubble",initial:{scale:0},animate:{scale:1},whileHover:{scale:1.4,rotate:15*(Math.random()-.5),translateY:-5},exit:{scale:0}},r.createElement(v.E.p,{initial:{fontWeight:100},animate:{fontWeight:600},whileHover:{fontWeight:800},exit:{fontWeight:100}},t))},g=n(2407),T=n(9806),b=n(5444),O=function(e){var t=e.name,n=e.contentRichText,o=e.tags,i=e.children,u=e.link,c=e.previewImages;return console.log(c),r.createElement(v.E.div,{className:"Card",initial:{scale:0},animate:{scale:1},exit:{scale:0}},r.createElement("div",{className:"LeftRight"},r.createElement("div",null,r.createElement(b.Link,{to:u},r.createElement("h2",null,t)),(0,T.h)(JSON.parse(n)),i),r.createElement("div",{className:"Horizontal"},null==c?void 0:c.map((function(e){var n=e.gatsbyImageData;return r.createElement("div",{style:{height:"100%",width:"250px"}},r.createElement(g.G,{style:{width:"100%",height:"100%"},image:n,alt:t}))})))),r.createElement("div",{className:"Horizontal"},o.map((function(e){return r.createElement(h,Object.assign({},e,{key:e.name}))}))))},L=function(e){var t=e.data,n=(0,r.useState)(0),u=n[0],c=n[1],a=t.allContentfulBlogEntry.edges[u].node,l=a.title,f=a.id,s=a.shortSummary,E=a.slug,d=a.previewImages;return console.log(d),r.createElement(o.Z,null,r.createElement(i.Z,{title:"Home"}),r.createElement("div",null,r.createElement(y,null,r.createElement(v.E.div,{key:t.allContentfulBlogEntry.edges[u],initial:{opacity:0,y:200},animate:{opacity:1},exit:{opacity:0}},r.createElement(O,{key:f,name:l,tags:[{name:"React.JS",category:"Web Frontend",iconID:"ReactJS",tooltip:"TOOLTIP FOR REACT HERE!"},{name:"Gatsby",category:"Web Frontend",iconID:"Gatsby",tooltip:"TOOLTIP FOR Gatsby HERE!"}],contentRichText:s.raw,link:"/posts/"+E,previewImages:d}))),r.createElement("button",{onClick:function(){u<t.allContentfulBlogEntry.edges.length-1?c(u+1):c(0)}},"ADVANCE")))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fff43789d997ced7ec08.js.map