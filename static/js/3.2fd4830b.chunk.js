/*! For license information please see 3.2fd4830b.chunk.js.LICENSE.txt */
(this.webpackJsonpNickOuellet=this.webpackJsonpNickOuellet||[]).push([[3],{335:function(t,e,n){"use strict";n.r(e),n.d(e,"GiscusWidget",(function(){return Kt}));var i=n(7),r=n(32);function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e,n){return(a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}var l=n(9),u=n(59);var c=n(71);function h(t){return function(t){if(Array.isArray(t))return Object(u.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(11),f=n.n(d),v=n(16);function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _(t){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){return!e||"object"!==_(e)&&"function"!==typeof e?o(t):e}function $(t){return function(){var e,n=s(t);if(g()){var i=s(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return m(this,e)}}function A(t,e,n){return(A=g()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&p(r,n.prototype),r}).apply(null,arguments)}function b(t){var e="function"===typeof Map?new Map:void 0;return(b=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return A(t,arguments,s(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),p(i,t)})(t)}function S(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(c.a)(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,o=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw r}}}}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function w(t,e,n){return e&&E(t.prototype,e),n&&E(t,n),t}function C(){var t=Object(i.a)(["\n    :host,\n    iframe {\n      width: 100%;\n      border: none;\n      color-scheme: normal;\n      min-height: 150px;\n    }\n  "]);return C=function(){return t},t}function O(){var t=Object(i.a)(['\n      <iframe\n        title="Comments"\n        scrolling="no"\n        ',"\n        src=","\n        loading=",'\n        part="iframe"\n      ></iframe>\n    ']);return O=function(){return t},t}var U,P,I=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),N=new Map,M=function(){function t(e,n){if(k(this,t),this._$cssResult$=!0,n!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}return w(t,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){var t=N.get(this.cssText);return I&&void 0===t&&(N.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}}]),t}(),T=I?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,n="",i=S(t.cssRules);try{for(i.s();!(e=i.n()).done;){n+=e.value.cssText}}catch(r){i.e(r)}finally{i.f()}return function(t){return new M("string"==typeof t?t:t+"",R)}(n)}(t):t},x=window.trustedTypes,H=x?x.emptyScript:"",j=window.reactiveElementPolyfillSupport,G={toAttribute:function(t,e){switch(e){case Boolean:t=t?H:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(i){n=null}}return n}},L=function(t,e){return e!==t&&(e==e||t==t)},z={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:L},D=function(t){y(n,t);var e=$(n);function n(){var t;return k(this,n),(t=e.call(this))._$Et=new Map,t.isUpdatePending=!1,t.hasUpdated=!1,t._$Ei=null,t.o(),t}return w(n,[{key:"o",value:function(){var t,e=this;this._$Ep=new Promise((function(t){return e.enableUpdating=t})),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((function(t){return t(e)}))}},{key:"addController",value:function(t){var e,n;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}},{key:"removeController",value:function(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}},{key:"_$Em",value:function(){var t=this;this.constructor.elementProperties.forEach((function(e,n){t.hasOwnProperty(n)&&(t._$Et.set(n,t[n]),delete t[n])}))}},{key:"createRenderRoot",value:function(){var t,e,n,i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return e=i,n=this.constructor.elementStyles,I?e.adoptedStyleSheets=n.map((function(t){return t instanceof CSSStyleSheet?t:t.styleSheet})):n.forEach((function(t){var n=document.createElement("style"),i=window.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,e.appendChild(n)})),i}},{key:"connectedCallback",value:function(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}},{key:"attributeChangedCallback",value:function(t,e,n){this._$AK(t,n)}},{key:"_$ES",value:function(t,e){var n,i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z,o=this.constructor._$Eh(t,r);if(void 0!==o&&!0===r.reflect){var s=(null!==(i=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:G.toAttribute)(e,r.type);this._$Ei=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}},{key:"_$AK",value:function(t,e){var n,i,r,o=this.constructor,s=o._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){var a=o.getPropertyOptions(s),l=a.converter,u=null!==(r=null!==(i=null===(n=l)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==r?r:G.fromAttribute;this._$Ei=s,this[s]=u(e,a.type),this._$Ei=null}}},{key:"requestUpdate",value:function(t,e,n){var i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||L)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}},{key:"_$E_",value:function(){var t=Object(v.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isUpdatePending=!0,t.prev=1,t.next=4,this._$Ep;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),Promise.reject(t.t0);case 9:if(e=this.scheduleUpdate(),t.t1=null!=e,!t.t1){t.next=14;break}return t.next=14,e;case 14:return t.abrupt("return",!this.isUpdatePending);case 15:case"end":return t.stop()}}),t,this,[[1,6]])})));return function(){return t.apply(this,arguments)}}()},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){var t,e=this;if(this.isUpdatePending){this.hasUpdated,this._$Et&&(this._$Et.forEach((function(t,n){return e[n]=t})),this._$Et=void 0);var n=!1,i=this._$AL;try{(n=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(r){throw n=!1,this._$EU(),r}n&&this._$AE(i)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((function(t){var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$EU",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"getUpdateComplete",value:function(){return this._$Ep}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;void 0!==this._$EC&&(this._$EC.forEach((function(t,n){return e._$ES(n,e[n],t)})),this._$EC=void 0),this._$EU()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}}],[{key:"addInitializer",value:function(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z;if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}},{key:"getPropertyDescriptor",value:function(t,e,n){return{get:function(){return this[e]},set:function(i){var r=this[t];this[e]=i,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){return this.elementProperties.get(t)||z}},{key:"finalize",value:function(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;var t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){var e,n=this.properties,i=S([].concat(h(Object.getOwnPropertyNames(n)),h(Object.getOwnPropertySymbols(n))));try{for(i.s();!(e=i.n()).done;){var r=e.value;this.createProperty(r,n[r])}}catch(o){i.e(o)}finally{i.f()}}return this.elementStyles=this.finalizeStyles(this.styles),!0}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var n,i=S(new Set(t.flat(1/0).reverse()));try{for(i.s();!(n=i.n()).done;){var r=n.value;e.unshift(T(r))}}catch(o){i.e(o)}finally{i.f()}}else void 0!==t&&e.push(T(t));return e}},{key:"_$Eh",value:function(t,e){var n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}},{key:"observedAttributes",get:function(){var t=this;this.finalize();var e=[];return this.elementProperties.forEach((function(n,i){var r=t._$Eh(i,n);void 0!==r&&(t._$Eu.set(r,i),e.push(r))})),e}}]),n}(b(HTMLElement));D.finalized=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},null==j||j({ReactiveElement:D}),(null!==(U=globalThis.reactiveElementVersions)&&void 0!==U?U:globalThis.reactiveElementVersions=[]).push("1.3.2");var B,K=globalThis.trustedTypes,W=K?K.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,V="lit$".concat((Math.random()+"").slice(9),"$"),q="?"+V,J="<".concat(q,">"),Y=document,F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Y.createComment(t)},Q=function(t){return null===t||"object"!=typeof t&&"function"!=typeof t},Z=Array.isArray,X=function(t){var e;return Z(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,nt=/>/g,it=/>|[ \x09\n\x0c\r](?:([^\s"'>=/]+)([ \x09\n\x0c\r]*=[ \x09\n\x0c\r]*(?:[^ \x09\n\x0c\r"'`<>=]|("|')|))|$)/g,rt=/'/g,ot=/"/g,st=/^(?:script|style|textarea|title)$/i,at=(B=1,function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return{_$litType$:B,strings:t,values:n}}),lt=Symbol.for("lit-noChange"),ut=Symbol.for("lit-nothing"),ct=new WeakMap,ht=Y.createTreeWalker(Y,129,null,!1),dt=function(){function t(e,n){var i,r=e.strings,o=e._$litType$;k(this,t),this.parts=[];var s=0,a=0,u=r.length-1,c=this.parts,d=function(t,e){for(var n,i=t.length-1,r=[],o=2===e?"<svg>":"",s=tt,a=0;a<i;a++){for(var l=t[a],u=void 0,c=void 0,h=-1,d=0;d<l.length&&(s.lastIndex=d,null!==(c=s.exec(l)));)d=s.lastIndex,s===tt?"!--"===c[1]?s=et:void 0!==c[1]?s=nt:void 0!==c[2]?(st.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=it):void 0!==c[3]&&(s=it):s===it?">"===c[0]?(s=null!=n?n:tt,h=-1):void 0===c[1]?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=void 0===c[3]?it:'"'===c[3]?ot:rt):s===ot||s===rt?s=it:s===et||s===nt?s=tt:(s=it,n=void 0);var f=s===it&&t[a+1].startsWith("/>")?" ":"";o+=s===tt?l+J:h>=0?(r.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+V+f):l+V+(-2===h?(r.push(void 0),a):f)}var v=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==W?W.createHTML(v):v,r]}(r,o),f=Object(l.a)(d,2),v=f[0],p=f[1];if(this.el=t.createElement(v,n),ht.currentNode=this.el.content,2===o){var y=this.el.content,g=y.firstChild;g.remove(),y.append.apply(y,h(g.childNodes))}for(;null!==(i=ht.nextNode())&&c.length<u;){if(1===i.nodeType){if(i.hasAttributes()){var _,m=[],$=S(i.getAttributeNames());try{for($.s();!(_=$.n()).done;){var A=_.value;if(A.endsWith("$lit$")||A.startsWith(V)){var b=p[a++];if(m.push(A),void 0!==b){var E=i.getAttribute(b.toLowerCase()+"$lit$").split(V),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:s,name:w[2],strings:E,ctor:"."===w[1]?mt:"?"===w[1]?At:"@"===w[1]?bt:_t})}else c.push({type:6,index:s})}}}catch(M){$.e(M)}finally{$.f()}for(var C=0,O=m;C<O.length;C++){var U=O[C];i.removeAttribute(U)}}if(st.test(i.tagName)){var P=i.textContent.split(V),I=P.length-1;if(I>0){i.textContent=K?K.emptyScript:"";for(var R=0;R<I;R++)i.append(P[R],F()),ht.nextNode(),c.push({type:2,index:++s});i.append(P[I],F())}}}else if(8===i.nodeType)if(i.data===q)c.push({type:2,index:s});else for(var N=-1;-1!==(N=i.data.indexOf(V,N+1));)c.push({type:7,index:s}),N+=V.length-1;s++}}return w(t,null,[{key:"createElement",value:function(t,e){var n=Y.createElement("template");return n.innerHTML=t,n}}]),t}();function ft(t,e){var n,i,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0;if(e===lt)return e;var l=void 0!==a?null===(n=s._$Cl)||void 0===n?void 0:n[a]:s._$Cu,u=Q(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==u&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===u?l=void 0:(l=new u(t))._$AT(t,s,a),void 0!==a?(null!==(r=(o=s)._$Cl)&&void 0!==r?r:o._$Cl=[])[a]=l:s._$Cu=l),void 0!==l&&(e=ft(t,l._$AS(t,e.values),l,a)),e}var vt,pt,yt=function(){function t(e,n){k(this,t),this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=n}return w(t,[{key:"p",value:function(t){var e,n=this._$AD,i=n.el.content,r=n.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Y).importNode(i,!0);ht.currentNode=o;for(var s=ht.nextNode(),a=0,l=0,u=r[0];void 0!==u;){if(a===u.index){var c=void 0;2===u.type?c=new gt(s,s.nextSibling,this,t):1===u.type?c=new u.ctor(s,u.name,u.strings,this,t):6===u.type&&(c=new St(s,this,t)),this.v.push(c),u=r[++l]}a!==(null==u?void 0:u.index)&&(s=ht.nextNode(),a++)}return o}},{key:"m",value:function(t){var e,n=0,i=S(this.v);try{for(i.s();!(e=i.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}catch(o){i.e(o)}finally{i.f()}}},{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}}]),t}(),gt=function(){function t(e,n,i,r){var o;k(this,t),this.type=2,this._$AH=ut,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cg=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}return w(t,[{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;t=ft(this,t,e),Q(t)?t===ut||null==t||""===t?(this._$AH!==ut&&this._$AR(),this._$AH=ut):t!==this._$AH&&t!==lt&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):X(t)?this.S(t):this.$(t)}},{key:"M",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(t,e)}},{key:"k",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}},{key:"$",value:function(t){this._$AH!==ut&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.k(Y.createTextNode(t)),this._$AH=t}},{key:"T",value:function(t){var e,n=t.values,i=t._$litType$,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=dt.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(n);else{var o=new yt(r,this),s=o.p(this.options);o.m(n),this.k(s),this._$AH=o}}},{key:"_$AC",value:function(t){var e=ct.get(t.strings);return void 0===e&&ct.set(t.strings,e=new dt(t)),e}},{key:"S",value:function(e){Z(this._$AH)||(this._$AH=[],this._$AR());var n,i,r=this._$AH,o=0,s=S(e);try{for(s.s();!(i=s.n()).done;){var a=i.value;o===r.length?r.push(n=new t(this.M(F()),this.M(F()),this,this.options)):n=r[o],n._$AI(a),o++}}catch(l){s.e(l)}finally{s.f()}o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}},{key:"_$AR",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,n=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,n);e&&e!==this._$AB;){var i=e.nextSibling;e.remove(),e=i}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},{key:"_$AU",get:function(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}},{key:"parentNode",get:function(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}}]),t}(),_t=function(){function t(e,n,i,r,o){k(this,t),this.type=1,this._$AH=ut,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ut}return w(t,[{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=this.strings,o=!1;if(void 0===r)t=ft(this,t,e,0),(o=!Q(t)||t!==this._$AH&&t!==lt)&&(this._$AH=t);else{var s,a,l=t;for(t=r[0],s=0;s<r.length-1;s++)(a=ft(this,l[n+s],e,s))===lt&&(a=this._$AH[s]),o||(o=!Q(a)||a!==this._$AH[s]),a===ut?t=ut:t!==ut&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!i&&this.C(t)}},{key:"C",value:function(t){t===ut?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}}]),t}(),mt=function(t){y(n,t);var e=$(n);function n(){var t;return k(this,n),(t=e.apply(this,arguments)).type=3,t}return w(n,[{key:"C",value:function(t){this.element[this.name]=t===ut?void 0:t}}]),n}(_t),$t=K?K.emptyScript:"",At=function(t){y(n,t);var e=$(n);function n(){var t;return k(this,n),(t=e.apply(this,arguments)).type=4,t}return w(n,[{key:"C",value:function(t){t&&t!==ut?this.element.setAttribute(this.name,$t):this.element.removeAttribute(this.name)}}]),n}(_t),bt=function(t){y(n,t);var e=$(n);function n(t,i,r,o,s){var a;return k(this,n),(a=e.call(this,t,i,r,o,s)).type=5,a}return w(n,[{key:"_$AI",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;if((t=null!==(e=ft(this,t,n,0))&&void 0!==e?e:ut)!==lt){var i=this._$AH,r=t===ut&&i!==ut||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==ut&&(i===ut||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}]),n}(_t),St=function(){function t(e,n,i){k(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}return w(t,[{key:"_$AI",value:function(t){ft(this,t)}},{key:"_$AU",get:function(){return this._$AM._$AU}}]),t}(),kt=window.litHtmlPolyfillSupport;null==kt||kt(dt,gt),(null!==(P=globalThis.litHtmlVersions)&&void 0!==P?P:globalThis.litHtmlVersions=[]).push("2.2.6");var Et=function(t){y(n,t);var e=$(n);function n(){var t;return k(this,n),(t=e.apply(this,arguments)).renderOptions={host:o(t)},t._$Dt=void 0,t}return w(n,[{key:"createRenderRoot",value:function(){var t,e,i=a(s(n.prototype),"createRenderRoot",this).call(this);return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}},{key:"update",value:function(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),a(s(n.prototype),"update",this).call(this,t),this._$Dt=function(t,e,n){var i,r,o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e,s=o._$litPart$;if(void 0===s){var a=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new gt(e.insertBefore(F(),a),a,void 0,null!=n?n:{})}return s._$AI(t),s}(e,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;a(s(n.prototype),"connectedCallback",this).call(this),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;a(s(n.prototype),"disconnectedCallback",this).call(this),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return lt}}]),n}(D);Et.finalized=!0,Et._$litElement$=!0,null===(vt=globalThis.litElementHydrateSupport)||void 0===vt||vt.call(globalThis,{LitElement:Et});var wt=globalThis.litElementPolyfillSupport;null==wt||wt({LitElement:Et}),(null!==(pt=globalThis.litElementVersions)&&void 0!==pt?pt:globalThis.litElementVersions=[]).push("3.2.0");var Ct;function Ot(t){return function(e,n){return void 0!==n?(i=t,o=n,void e.constructor.createProperty(o,i)):function(t,e){return"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object(r.a)(Object(r.a)({},e),{},{finisher:function(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer:function(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher:function(n){n.createProperty(e.key,t)}}}(t,e);var i,o}}null===(Ct=window.HTMLSlotElement)||void 0===Ct||Ct.prototype.assignedElements;var Ut=2,Pt=function t(e,n){var i,r,o=e._$AN;if(void 0===o)return!1;var s,a=S(o);try{for(a.s();!(s=a.n()).done;){var l=s.value;null===(r=(i=l)._$AO)||void 0===r||r.call(i,n,!1),t(l,n)}}catch(u){a.e(u)}finally{a.f()}return!0},It=function(t){var e,n;do{if(void 0===(e=t._$AM))break;(n=e._$AN).delete(t),t=e}while(0===(null==n?void 0:n.size))},Rt=function(t){for(var e;e=t._$AM;t=e){var n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),xt(e)}};function Nt(t){void 0!==this._$AN?(It(this),this._$AM=t,Rt(this)):this._$AM=t}function Mt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(var o=n;o<i.length;o++)Pt(i[o],!1),It(i[o]);else null!=i&&(Pt(i,!1),It(i));else Pt(this,t)}var Tt,xt=function(t){var e,n,i,r;t.type==Ut&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=Mt),null!==(n=(r=t)._$AQ)&&void 0!==n||(r._$AQ=Nt))},Ht=function(t){y(n,t);var e=$(n);function n(){var t;return k(this,n),(t=e.apply(this,arguments))._$AN=void 0,t}return w(n,[{key:"_$AT",value:function(t,e,i){a(s(n.prototype),"_$AT",this).call(this,t,e,i),Rt(this),this.isConnected=t._$AU}},{key:"_$AO",value:function(t){var e,n,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),i&&(Pt(this,t),It(this))}},{key:"setValue",value:function(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{var e=h(this._$Ct._$AH);e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}},{key:"disconnected",value:function(){}},{key:"reconnected",value:function(){}}]),n}(function(){function t(e){k(this,t)}return w(t,[{key:"_$AT",value:function(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}},{key:"_$AS",value:function(t,e){return this.update(t,e)}},{key:"update",value:function(t,e){return this.render.apply(this,h(e))}},{key:"_$AU",get:function(){return this._$AM._$AU}}]),t}()),jt=function t(){k(this,t)},Gt=new WeakMap,Lt=function(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return{_$litDirective$:t,values:n}}}(function(t){y(n,t);var e=$(n);function n(){return k(this,n),e.apply(this,arguments)}return w(n,[{key:"render",value:function(t){return ut}},{key:"update",value:function(t,e){var n,i=Object(l.a)(e,1)[0],r=i!==this.U;return r&&void 0!==this.U&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.U=i,this.ht=null===(n=t.options)||void 0===n?void 0:n.host,this.ot(this.lt=t.element)),ut}},{key:"ot",value:function(t){var e;if("function"==typeof this.U){var n=null!==(e=this.ht)&&void 0!==e?e:globalThis,i=Gt.get(n);void 0===i&&(i=new WeakMap,Gt.set(n,i)),void 0!==i.get(this.U)&&this.U.call(this.ht,void 0),i.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)}else this.U.value=t}},{key:"disconnected",value:function(){this.rt===this.lt&&this.ot(void 0)}},{key:"reconnected",value:function(){this.ot(this.lt)}},{key:"rt",get:function(){var t,e,n;return"function"==typeof this.U?null===(e=Gt.get(null!==(t=this.ht)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.U):null===(n=this.U)||void 0===n?void 0:n.value}}]),n}(Ht)),zt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Bt=function(t,e,n,i){for(var r,o=i>1?void 0:i?Dt(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&zt(e,n,o),o},Kt=function(t){y(n,t);var e=$(n);function n(){var t;return k(this,n),(t=e.call(this)).GISCUS_SESSION_KEY="giscus-session",t.GISCUS_ORIGIN="https://giscus.app",t.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",t.__session="",t._iframeRef=new jt,t.messageEventHandler=t.handleMessageEvent.bind(o(t)),t.reactionsEnabled="1",t.emitMetadata="0",t.inputPosition="bottom",t.theme="light",t.lang="en",t.loading="eager",t.setupSession(),window.addEventListener("message",t.messageEventHandler),t}return w(n,[{key:"connectedCallback",value:function(){a(s(n.prototype),"connectedCallback",this).call(this)}},{key:"disconnectedCallback",value:function(){a(s(n.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("message",this.messageEventHandler)}},{key:"_formatError",value:function(t){return'[giscus] An error occurred. Error message: "'.concat(t,'".')}},{key:"setupSession",value:function(){var t=location.href,e=new URL(t),n=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")||"";if(i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,e.toString());if(n)try{this.__session=JSON.parse(n||"")||""}catch(r){this.__session="",localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn("".concat(this._formatError(null==r?void 0:r.message)," Session has been cleared."))}}},{key:"handleMessageEvent",value:function(t){if(t.origin===this.GISCUS_ORIGIN){var e=t.data;if("object"===typeof e&&e.giscus&&(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height="".concat(e.giscus.resizeHeight,"px")),e.giscus.error)){var n=e.giscus.error;if(n.includes("Bad credentials")||n.includes("Invalid state value")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn("".concat(this._formatError(n)," Session has been cleared.")),void this.update(new Map);console.error("".concat(this._formatError(n)," No session is stored initially. ").concat(this.ERROR_SUGGESTION))}n.includes("Discussion not found")?console.warn("[giscus] ".concat(n,". A new discussion will be created if a comment/reaction is submitted.")):console.error("".concat(this._formatError(n)," ").concat(this.ERROR_SUGGESTION))}}}},{key:"sendMessage",value:function(t){var e,n;null==(n=null==(e=this.iframeRef)?void 0:e.contentWindow)||n.postMessage({giscus:t},this.GISCUS_ORIGIN)}},{key:"updateConfig",value:function(){var t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}},{key:"requestUpdate",value:function(t,e,i){this.hasUpdated?this.updateConfig():a(s(n.prototype),"requestUpdate",this).call(this,t,e,i)}},{key:"_getOgMetaContent",value:function(t){var e=document.querySelector("meta[property='og:".concat(t,"'],meta[name='").concat(t,"']"));return e?e.content:""}},{key:"_getCleanedUrl",value:function(){var t=new URL(location.href);return t.searchParams.delete("giscus"),t}},{key:"getTerm",value:function(){switch(this.mapping){case"url":return"".concat(this._getCleanedUrl());case"title":return document.title;case"og:title":return this._getOgMetaContent("title");case"specific":return this.term||"";case"number":return"";case"pathname":default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}},{key:"getNumber",value:function(){return"number"===this.mapping&&this.term||""}},{key:"getIframeSrc",value:function(){var t=this._getCleanedUrl(),e="".concat(t).concat(this.id?"#"+this.id:""),n=this._getOgMetaContent("description"),i={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:n},r=this.lang?"/".concat(this.lang):"",o=new URLSearchParams(i);return"".concat(this.GISCUS_ORIGIN).concat(r,"/widget?").concat(o)}},{key:"render",value:function(){return at(O(),Lt(this._iframeRef),this.getIframeSrc(),this.loading)}},{key:"iframeRef",get:function(){return this._iframeRef.value}}]),n}(Et);Kt.styles=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=1===t.length?t[0]:n.reduce((function(e,n,i){return e+function(t){if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(n)+t[i+1]}),t[0]);return new M(r,R)}(C()),Bt([Ot({reflect:!0})],Kt.prototype,"repo",2),Bt([Ot({reflect:!0})],Kt.prototype,"repoId",2),Bt([Ot({reflect:!0})],Kt.prototype,"category",2),Bt([Ot({reflect:!0})],Kt.prototype,"categoryId",2),Bt([Ot({reflect:!0})],Kt.prototype,"mapping",2),Bt([Ot({reflect:!0})],Kt.prototype,"term",2),Bt([Ot({reflect:!0})],Kt.prototype,"reactionsEnabled",2),Bt([Ot({reflect:!0})],Kt.prototype,"emitMetadata",2),Bt([Ot({reflect:!0})],Kt.prototype,"inputPosition",2),Bt([Ot({reflect:!0})],Kt.prototype,"theme",2),Bt([Ot({reflect:!0})],Kt.prototype,"lang",2),Bt([Ot({reflect:!0})],Kt.prototype,"loading",2),Kt=Bt([(Tt="giscus-widget",function(t){return"function"==typeof t?(e=Tt,n=t,window.customElements.define(e,n),n):function(t,e){return{kind:e.kind,elements:e.elements,finisher:function(e){window.customElements.define(t,e)}}}(Tt,t);var e,n})],Kt)}}]);
//# sourceMappingURL=3.2fd4830b.chunk.js.map