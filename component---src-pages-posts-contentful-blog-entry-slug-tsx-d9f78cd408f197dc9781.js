(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[247],{1394:function(e,t,n){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var u,i,c,a="object",f=function(e){return e&&e.Math==Math&&e},l=f(typeof globalThis==a&&globalThis)||f(typeof window==a&&window)||f(typeof self==a&&self)||f(typeof r==a&&r)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,E={f:y&&!d.call({1:2},1)?function(e){var t=y(this,e);return!!t&&t.enumerable}:d},v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},h={}.toString,g="".split,m=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return h.call(e).slice(8,-1)}(e)?g.call(e,""):Object(e)}:Object,b=function(e){return m(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},O=function(e){return"object"==typeof e?null!==e:"function"==typeof e},T=function(e,t){if(!O(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!O(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!O(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!O(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},_={}.hasOwnProperty,S=function(e,t){return _.call(e,t)},D=l.document,I=O(D)&&O(D.createElement),A=function(e){return I?D.createElement(e):{}},N=!p&&!s((function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,L={f:p?w:function(e,t){if(e=b(e),t=T(t,!0),N)try{return w(e,t)}catch(n){}if(S(e,t))return v(!E.f.call(e,t),e[t])}},P=function(e){if(!O(e))throw TypeError(String(e)+" is not an object");return e},j=Object.defineProperty,R={f:p?j:function(e,t,n){if(P(e),t=T(t,!0),P(n),N)try{return j(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},M=p?function(e,t,n){return R.f(e,t,v(1,n))}:function(e,t,n){return e[t]=n,e},k=function(e,t){try{M(l,e,t)}catch(n){l[e]=t}return t},H=o((function(e){var t="__core-js_shared__",n=l[t]||k(t,{});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),G=H("native-function-to-string",Function.toString),B=l.WeakMap,C="function"==typeof B&&/native code/.test(G.call(B)),Y=0,x=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Y+x).toString(36)},K=H("keys"),F=function(e){return K[e]||(K[e]=U(e))},W={},z=l.WeakMap;if(C){var V=new z,Q=V.get,q=V.has,Z=V.set;u=function(e,t){return Z.call(V,e,t),t},i=function(e){return Q.call(V,e)||{}},c=function(e){return q.call(V,e)}}else{var J=F("state");W[J]=!0,u=function(e,t){return M(e,J,t),t},i=function(e){return S(e,J)?e[J]:{}},c=function(e){return S(e,J)}}var X={set:u,get:i,has:c,enforce:function(e){return c(e)?i(e):u(e,{})},getterFor:function(e){return function(t){var n;if(!O(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=o((function(e){var t=X.get,n=X.enforce,r=String(G).split("toString");H("inspectSource",(function(e){return G.call(e)})),(e.exports=function(e,t,o,u){var i=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||S(o,"name")||M(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==l?(i?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=o:M(e,t,o)):c?e[t]=o:k(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G.call(this)}))})),ee=l,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(l[e]):ee[e]&&ee[e][t]||l[e]&&l[e][t]},re=Math.ceil,oe=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ce=Math.max,ae=Math.min,fe=function(e){return function(t,n,r){var o,u,i=b(t),c=(o=i.length)>0?ie(ue(o),9007199254740991):0,a=function(e,t){var n=ue(e);return n<0?ce(n+t,0):ae(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},le={includes:fe(!0),indexOf:fe(!1)},se=le.indexOf,pe=function(e,t){var n,r=b(e),o=0,u=[];for(n in r)!S(W,n)&&S(r,n)&&u.push(n);for(;t.length>o;)S(r,n=t[o++])&&(~se(u,n)||u.push(n));return u},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=de.concat("length","prototype"),Ee={f:Object.getOwnPropertyNames||function(e){return pe(e,ye)}},ve={f:Object.getOwnPropertySymbols},he=ne("Reflect","ownKeys")||function(e){var t=Ee.f(P(e)),n=ve.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=he(t),r=R.f,o=L.f,u=0;u<n.length;u++){var i=n[u];S(e,i)||r(e,i,o(t,i))}},me=/#|\.prototype\./,be=function(e,t){var n=Te[Oe(e)];return n==Se||n!=_e&&("function"==typeof t?s(t):!!t)},Oe=be.normalize=function(e){return String(e).replace(me,".").toLowerCase()},Te=be.data={},_e=be.NATIVE="N",Se=be.POLYFILL="P",De=be,Ie=L.f,Ae=function(e,t){var n,r,o,u,i,c=e.target,a=e.global,f=e.stat;if(n=a?l:f?l[c]||k(c,{}):(l[c]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(i=Ie(n,r))&&i.value:n[r],!De(a?r:c+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;ge(u,o)}(e.sham||o&&o.sham)&&M(u,"sham",!0),$(n,r,u,e)}},Ne=Object.keys||function(e){return pe(e,de)},we=E.f,Le=function(e){return function(t){for(var n,r=b(t),o=Ne(r),u=o.length,i=0,c=[];u>i;)n=o[i++],p&&!we.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Pe={entries:Le(!0),values:Le(!1)}.values;Ae({target:"Object",stat:!0},{values:function(e){return Pe(e)}});ee.Object.values;var je=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),Re=l.Symbol,Me=H("wks"),ke=p?Object.defineProperties:function(e,t){P(e);for(var n,r=Ne(t),o=r.length,u=0;o>u;)R.f(e,n=r[u++],t[n]);return e},He=ne("document","documentElement"),Ge=F("IE_PROTO"),Be=function(){},Ce=function(){var e,t=A("iframe"),n=de.length;for(t.style.display="none",He.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ce=e.F;n--;)delete Ce.prototype[de[n]];return Ce()},Ye=Object.create||function(e,t){var n;return null!==e?(Be.prototype=P(e),n=new Be,Be.prototype=null,n[Ge]=e):n=Ce(),void 0===t?n:ke(n,t)};W[Ge]=!0;var xe,Ue=Me[xe="unscopables"]||(Me[xe]=je&&Re[xe]||(je?Re:U)("Symbol."+xe)),Ke=Array.prototype;null==Ke[Ue]&&M(Ke,Ue,Ye(null));var Fe,We=le.includes;Ae({target:"Array",proto:!0},{includes:function(e){return We(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ke[Ue][Fe]=!0;var ze,Ve,Qe,qe=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Ze=Function.call;ze="includes",qe(Ze,l["Array"].prototype[ze],Ve);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Qe||(Qe={}));var Je,Xe=Qe;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Je||(Je={}));var $e,et=Je,tt=[Xe.PARAGRAPH,Xe.HEADING_1,Xe.HEADING_2,Xe.HEADING_3,Xe.HEADING_4,Xe.HEADING_5,Xe.HEADING_6,Xe.OL_LIST,Xe.UL_LIST,Xe.HR,Xe.QUOTE,Xe.EMBEDDED_ENTRY,Xe.EMBEDDED_ASSET],nt=[Xe.HR,Xe.EMBEDDED_ENTRY,Xe.EMBEDDED_ASSET],rt=(($e={})[Xe.OL_LIST]=[Xe.LIST_ITEM],$e[Xe.UL_LIST]=[Xe.LIST_ITEM],$e[Xe.LIST_ITEM]=tt.slice(),$e[Xe.QUOTE]=[Xe.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Xe).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.RG=Xe,t.Ev=et,t.oN={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"}},5830:function(e,t,n){"use strict";n.r(t);var r=n(2459),o=n.n(r),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={},a=function(e){return e&&e.sys&&"Link"===e.sys.type},f=function(e){return e.type+"!"+e.id},l=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":u(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==c}));for(var t in e)e[t]===c&&delete e[t];return e}(t))}return t},s=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,u=f({type:r,id:o});return e.get(u)||c}(e,t);return r===c?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(i(t),i(e.includes[n]))}),[]),u=[].concat(i(n.items),i(r)),c=new Map(u.map((function(e){return[f(e.sys),e]})));return u.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,l(n,a,(function(e){return s(c,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},2459:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,a=Object.prototype,f=a.hasOwnProperty,l=a.propertyIsEnumerable,s={SYMBOL_PROPERTIES:"function"==typeof i,WEAKMAP:"function"==typeof WeakMap},p=function(){if(s.WEAKMAP)return new WeakMap;var e=t({has:function(t){return!!~e._keys.indexOf(t)},set:function(t,n){e._keys.push(t),e._values.push(n)},get:function(t){return e._values[e._keys.indexOf(t)]}});return e._keys=[],e._values=[],e},d=function(n,r){if(!n.constructor)return t(null);var o=n.constructor,u=n.__proto__||c(n);if(o===r.Object)return u===r.Object.prototype?{}:t(u);if(~e.call(o).indexOf("[native code]"))try{return new o}catch(a){}return t(u)},y=function(e,t,n,r){var o=d(e,t);for(var u in r.set(e,o),e)f.call(e,u)&&(o[u]=n(e[u],r));if(s.SYMBOL_PROPERTIES){var c=i(e),a=c.length;if(a)for(var p=0,y=void 0;p<a;p++)y=c[p],l.call(e,y)&&(o[y]=n(e[y],r))}return o},E=function(e,t,n,c){var a=d(e,t);c.set(e,a);var f=s.SYMBOL_PROPERTIES?u(e).concat(i(e)):u(e),l=f.length;if(l)for(var p=0,y=void 0,E=void 0;p<l;p++)if("callee"!==(y=f[p])&&"caller"!==y)if(E=o(e,y)){E.get||E.set||(E.value=n(e[y],c));try{r(a,y,E)}catch(v){a[y]=E.value}}else a[y]=n(e[y],c);return a},v=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},h=Array.isArray,g="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:void(console&&console.error&&console.error('Unable to locate global object, returning "this".'));function m(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||g,o=n?E:y;return function e(t,u){if(!t||"object"!=typeof t)return t;if(u.has(t))return u.get(t);var i,c=t.constructor;if(c===r.Object)return o(t,r,e,u);if(h(t)){if(n)return E(t,r,e,u);var a=t.length;i=new c,u.set(t,i);for(var f=0;f<a;f++)i[f]=e(t[f],u);return i}if(t instanceof r.Date)return new c(t.getTime());if(t instanceof r.RegExp)return(i=new c(t.source,t.flags||v(t))).lastIndex=t.lastIndex,i;if(r.Map&&t instanceof r.Map)return i=new c,u.set(t,i),t.forEach((function(t,n){i.set(n,e(t,u))})),i;if(r.Set&&t instanceof r.Set)return i=new c,u.set(t,i),t.forEach((function(t){i.add(e(t,u))})),i;if(r.Blob&&t instanceof r.Blob)return t.slice(0,t.size,t.type);if(r.Buffer&&r.Buffer.isBuffer(t))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(t.length):new c(t.length),u.set(t,i),t.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(t))return i=new c(t.buffer.slice(0)),u.set(t,i),i;if(t instanceof r.ArrayBuffer)return i=t.slice(0),u.set(t,i),i}return"function"==typeof t.then||t instanceof Error||r.WeakMap&&t instanceof r.WeakMap||r.WeakSet&&t instanceof r.WeakSet?t:o(t,r,e,u)}(e,p())}return m.default=m,m.strict=function(e,t){return m(e,{isStrict:!0,realm:t?t.realm:void 0})},m}()},1509:function(e,t,n){"use strict";n.r(t);var r=n(3552),o=n(7294),u=n(5444),i=n(2407),c=n(8262),a=n(1394),f=n(5761),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n=this.props.data.contentfulBlogEntry;console.log(this.props.data);var r=n.title,l=n.content;return o.createElement(c.Z,null,o.createElement("h1",null,r),l&&(0,f.Z)(l,{renderMark:(e={},e[a.oN.BOLD]=function(e){return o.createElement("strong",null,e)},e),renderNode:(t={},t[a.RG.PARAGRAPH]=function(e,t){return o.createElement("p",null,t)},t[a.Ev.HYPERLINK]=function(e,t){var n,r,u=e.data;return o.createElement("a",{href:u.uri,target:null!==(n=u.uri)&&void 0!==n&&n.startsWith("")?"_self":"_blank",rel:null!==(r=u.uri)&&void 0!==r&&r.startsWith("")?"":"noopener noreferrer"},t)},t[a.Ev.ASSET_HYPERLINK]=function(e,t){var n,r,u=e.data;return o.createElement("a",{href:u.uri,target:null!==(n=u.uri)&&void 0!==n&&n.startsWith("")?"_self":"_blank",rel:null!==(r=u.uri)&&void 0!==r&&r.startsWith("")?"":"noopener noreferrer"},t)},t[a.Ev.ENTRY_HYPERLINK]=function(e,t){return o.createElement(u.Link,{to:e.data.uri},t)},t[a.Ev.EMBEDDED_ENTRY]=function(e,t){var n=e.data;return o.createElement(o.Fragment,null,o.createElement("h1",null,"EMBEDDED ENTRY"),o.createElement("code",null,JSON.stringify(n)),t)},t[a.RG.EMBEDDED_ASSET]=function(e){var t=(0,i.d)(e.data.target);return void 0!==t?o.createElement(i.G,{image:t,alt:e.data.target.description}):o.createElement("p",{className:"error"},"Couldn't render image")},t)}))},t}(o.Component);t.default=l},9301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var a,f,l=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i=function(e){try{return!!e()}catch(t){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!f.call({1:2},1)?function(e){var t=l(this,e);return!!t&&t.enumerable}:f},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,y=function(e){return d.call(e).slice(8,-1)},E="".split,v=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==y(e)?E.call(e,""):Object(e)}:Object,h=function(e){return v(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},g=function(e){return"object"==typeof e?null!==e:"function"==typeof e},m=function(e,t){if(!g(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!g(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!g(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!g(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,O=function(e,t){return b.call(e,t)},T=u.document,_=g(T)&&g(T.createElement),S=function(e){return _?T.createElement(e):{}},D=!a&&!i((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,A={f:a?I:function(e,t){if(e=h(e),t=m(t,!0),D)try{return I(e,t)}catch(n){}if(O(e,t))return p(!s.f.call(e,t),e[t])}},N=function(e){if(!g(e))throw TypeError(String(e)+" is not an object");return e},w=Object.defineProperty,L={f:a?w:function(e,t,n){if(N(e),t=m(t,!0),N(n),D)try{return w(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},P=a?function(e,t,n){return L.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{P(u,e,t)}catch(n){u[e]=t}return t},R="__core-js_shared__",M=u[R]||j(R,{}),k=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(e){return k.call(e)});var H,G,B,C=M.inspectSource,Y=u.WeakMap,x="function"==typeof Y&&/native code/.test(C(Y)),U=r((function(e){(e.exports=function(e,t){return M[e]||(M[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),K=0,F=Math.random(),W=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++K+F).toString(36)},z=U("keys"),V=function(e){return z[e]||(z[e]=W(e))},Q={},q=u.WeakMap;if(x){var Z=M.state||(M.state=new q),J=Z.get,X=Z.has,$=Z.set;H=function(e,t){return t.facade=e,$.call(Z,e,t),t},G=function(e){return J.call(Z,e)||{}},B=function(e){return X.call(Z,e)}}else{var ee=V("state");Q[ee]=!0,H=function(e,t){return t.facade=e,P(e,ee,t),t},G=function(e){return O(e,ee)?e[ee]:{}},B=function(e){return O(e,ee)}}var te={set:H,get:G,has:B,enforce:function(e){return B(e)?G(e):H(e,{})},getterFor:function(e){return function(t){var n;if(!g(t)||(n=G(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=r((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c,a=!!i&&!!i.unsafe,f=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||O(o,"name")||P(o,"name",t),(c=n(o)).source||(c.source=r.join("string"==typeof t?t:""))),e!==u?(a?!l&&e[t]&&(f=!0):delete e[t],f?e[t]=o:P(e,t,o)):f?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C(this)}))})),re=u,oe=function(e){return"function"==typeof e?e:void 0},ue=function(e,t){return arguments.length<2?oe(re[e])||oe(u[e]):re[e]&&re[e][t]||u[e]&&u[e][t]},ie=Math.ceil,ce=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?ce:ie)(e)},fe=Math.min,le=Math.max,se=Math.min,pe=function(e){return function(t,n,r){var o,u,i=h(t),c=(o=i.length)>0?fe(ae(o),9007199254740991):0,a=function(e,t){var n=ae(e);return n<0?le(n+t,0):se(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},de={includes:pe(!0),indexOf:pe(!1)},ye=de.indexOf,Ee=function(e,t){var n,r=h(e),o=0,u=[];for(n in r)!O(Q,n)&&O(r,n)&&u.push(n);for(;t.length>o;)O(r,n=t[o++])&&(~ye(u,n)||u.push(n));return u},ve=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=ve.concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(e){return Ee(e,he)}},me={f:Object.getOwnPropertySymbols},be=ue("Reflect","ownKeys")||function(e){var t=ge.f(N(e)),n=me.f;return n?t.concat(n(e)):t},Oe=function(e,t){for(var n=be(t),r=L.f,o=A.f,u=0;u<n.length;u++){var i=n[u];O(e,i)||r(e,i,o(t,i))}},Te=/#|\.prototype\./,_e=function(e,t){var n=De[Se(e)];return n==Ae||n!=Ie&&("function"==typeof t?i(t):!!t)},Se=_e.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},De=_e.data={},Ie=_e.NATIVE="N",Ae=_e.POLYFILL="P",Ne=_e,we=A.f,Le=function(e,t){var n,r,o,i,c,a=e.target,f=e.global,l=e.stat;if(n=f?u:l?u[a]||j(a,{}):(u[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=we(n,r))&&c.value:n[r],!Ne(f?r:a+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Oe(i,o)}(e.sham||o&&o.sham)&&P(i,"sham",!0),ne(n,r,i,e)}},Pe=Object.keys||function(e){return Ee(e,ve)},je=s.f,Re=function(e){return function(t){for(var n,r=h(t),o=Pe(r),u=o.length,i=0,c=[];u>i;)n=o[i++],a&&!je.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Me=(Re(!0),Re(!1));Le({target:"Object",stat:!0},{values:function(e){return Me(e)}}),re.Object.values;var ke,He,Ge="process"==y(u.process),Be=ue("navigator","userAgent")||"",Ce=u.process,Ye=Ce&&Ce.versions,xe=Ye&&Ye.v8;xe?He=(ke=xe.split("."))[0]+ke[1]:Be&&(!(ke=Be.match(/Edge\/(\d+)/))||ke[1]>=74)&&(ke=Be.match(/Chrome\/(\d+)/))&&(He=ke[1]);var Ue,Ke=He&&+He,Fe=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(Ge?38===Ke:Ke>37&&Ke<41)})),We=Fe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ze=U("wks"),Ve=u.Symbol,Qe=We?Ve:Ve&&Ve.withoutSetter||W,qe=a?Object.defineProperties:function(e,t){N(e);for(var n,r=Pe(t),o=r.length,u=0;o>u;)L.f(e,n=r[u++],t[n]);return e},Ze=ue("document","documentElement"),Je=V("IE_PROTO"),Xe=function(){},$e=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ue=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ue?function(e){e.write($e("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ue):((t=S("iframe")).style.display="none",Ze.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write($e("document.F=Object")),e.close(),e.F);for(var n=ve.length;n--;)delete et.prototype[ve[n]];return et()};Q[Je]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?(Xe.prototype=N(e),n=new Xe,Xe.prototype=null,n[Je]=e):n=et(),void 0===t?n:qe(n,t)},rt=(O(ze,tt="unscopables")&&(Fe||"string"==typeof ze[tt])||(Fe&&O(Ve,tt)?ze[tt]=Ve[tt]:ze[tt]=Qe("Symbol."+tt)),ze[tt]),ot=Array.prototype;null==ot[rt]&&L.f(ot,rt,{configurable:!0,value:nt(null)});var ut,it=de.includes;Le({target:"Array",proto:!0},{includes:function(e){return it(this,e,arguments.length>1?arguments[1]:void 0)}}),ut="includes",ot[rt][ut]=!0;var ct,at,ft,lt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},st=Function.call;ct="includes",lt(st,u.Array.prototype[ct],at),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ft||(ft={}));var pt,dt=ft;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(pt||(pt={}));var yt,Et=pt,vt=[dt.PARAGRAPH,dt.HEADING_1,dt.HEADING_2,dt.HEADING_3,dt.HEADING_4,dt.HEADING_5,dt.HEADING_6,dt.OL_LIST,dt.UL_LIST,dt.HR,dt.QUOTE,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],ht=[dt.HR,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],gt=((yt={})[dt.OL_LIST]=[dt.LIST_ITEM],yt[dt.UL_LIST]=[dt.LIST_ITEM],yt[dt.LIST_ITEM]=vt.slice(),yt[dt.QUOTE]=[dt.PARAGRAPH],yt),mt={nodeType:dt.DOCUMENT,data:{},content:[{nodeType:dt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},bt=Object.freeze({isInline:function(e){return Object.values(Et).includes(e.nodeType)},isBlock:function(e){return Object.values(dt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=dt,t.CONTAINERS=gt,t.EMPTY_DOCUMENT=mt,t.INLINES=Et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=vt,t.VOID_BLOCKS=ht,t.helpers=bt}(a={exports:{}},a.exports),a.exports);(f=l)&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")&&f.default;var s,p,d=l.BLOCKS,y=(l.CONTAINERS,l.EMPTY_DOCUMENT,l.INLINES),E=l.MARKS,v=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function h(e,t){return e.map((function(e,n){return r=g(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function g(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(v.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var m=((s={})[d.DOCUMENT]=function(e,t){return t},s[d.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},s[d.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},s[d.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},s[d.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},s[d.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},s[d.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},s[d.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},s[d.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},s[d.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},s[d.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},s[d.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},s[d.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},s[d.HR]=function(){return u.createElement("hr",null)},s[y.ASSET_HYPERLINK]=function(e){return O(y.ASSET_HYPERLINK,e)},s[y.ENTRY_HYPERLINK]=function(e){return O(y.ENTRY_HYPERLINK,e)},s[y.EMBEDDED_ENTRY]=function(e){return O(y.EMBEDDED_ENTRY,e)},s[y.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},s),b=((p={})[E.BOLD]=function(e){return u.createElement("b",null,e)},p[E.ITALIC]=function(e){return u.createElement("i",null,e)},p[E.UNDERLINE]=function(e){return u.createElement("u",null,e)},p[E.CODE]=function(e){return u.createElement("code",null,e)},p);function O(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?g(e,{renderNode:i({},m,t.renderNode),renderMark:i({},b,t.renderMark),renderText:t.renderText}):null}},5761:function(e,t,n){"use strict";var r=n(5318),o=n(9301),u=r(n(5830));t.Z=function(e,t){var n=e.raw,r=e.references;void 0===t&&(t={});var i=JSON.parse(n);if(!r||!r.length)return(0,o.documentToReactComponents)(i,t);var c={items:[{sys:{type:"Entry"},richText:i}],includes:{Entry:r.filter((function(e){return"ContentfulAsset"!==e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Entry",id:e.contentful_id}})})),Asset:r.filter((function(e){return"ContentfulAsset"===e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Asset",id:e.contentful_id}})}))}},a=(0,u.default)(c,{removeUnresolved:!0});return(0,o.documentToReactComponents)(a[0].richText,t)}}}]);
//# sourceMappingURL=component---src-pages-posts-contentful-blog-entry-slug-tsx-d9f78cd408f197dc9781.js.map