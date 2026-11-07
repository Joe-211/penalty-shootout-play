(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var jm={exports:{}},Gc={},Zm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=Symbol.for("react.element"),dx=Symbol.for("react.portal"),px=Symbol.for("react.fragment"),mx=Symbol.for("react.strict_mode"),gx=Symbol.for("react.profiler"),vx=Symbol.for("react.provider"),_x=Symbol.for("react.context"),xx=Symbol.for("react.forward_ref"),yx=Symbol.for("react.suspense"),Sx=Symbol.for("react.memo"),Mx=Symbol.for("react.lazy"),bp=Symbol.iterator;function wx(n){return n===null||typeof n!="object"?null:(n=bp&&n[bp]||n["@@iterator"],typeof n=="function"?n:null)}var Jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,eg={};function ga(n,e,t){this.props=n,this.context=e,this.refs=eg,this.updater=t||Jm}ga.prototype.isReactComponent={};ga.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ga.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function tg(){}tg.prototype=ga.prototype;function ed(n,e,t){this.props=n,this.context=e,this.refs=eg,this.updater=t||Jm}var td=ed.prototype=new tg;td.constructor=ed;Qm(td,ga.prototype);td.isPureReactComponent=!0;var Ap=Array.isArray,ng=Object.prototype.hasOwnProperty,nd={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function rg(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ng.call(e,i)&&!ig.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Co,type:n,key:s,ref:a,props:r,_owner:nd.current}}function Tx(n,e){return{$$typeof:Co,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function id(n){return typeof n=="object"&&n!==null&&n.$$typeof===Co}function Ex(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Rp=/\/+/g;function uu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ex(""+n.key):e.toString(36)}function Il(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Co:case dx:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+uu(a,0):i,Ap(r)?(t="",n!=null&&(t=n.replace(Rp,"$&/")+"/"),Il(r,e,t,"",function(c){return c})):r!=null&&(id(r)&&(r=Tx(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Rp,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ap(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+uu(s,o);a+=Il(s,e,t,l,r)}else if(l=wx(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+uu(s,o++),a+=Il(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Oo(n,e,t){if(n==null)return n;var i=[],r=0;return Il(n,i,"","",function(s){return e.call(t,s,r++)}),i}function bx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var En={current:null},Ul={transition:null},Ax={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:nd};function sg(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Oo,forEach:function(n,e,t){Oo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Oo(n,function(){e++}),e},toArray:function(n){return Oo(n,function(e){return e})||[]},only:function(n){if(!id(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};je.Component=ga;je.Fragment=px;je.Profiler=gx;je.PureComponent=ed;je.StrictMode=mx;je.Suspense=yx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;je.act=sg;je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Qm({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=nd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)ng.call(e,l)&&!ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Co,type:n.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(n){return n={$$typeof:_x,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:vx,_context:n},n.Consumer=n};je.createElement=rg;je.createFactory=function(n){var e=rg.bind(null,n);return e.type=n,e};je.createRef=function(){return{current:null}};je.forwardRef=function(n){return{$$typeof:xx,render:n}};je.isValidElement=id;je.lazy=function(n){return{$$typeof:Mx,_payload:{_status:-1,_result:n},_init:bx}};je.memo=function(n,e){return{$$typeof:Sx,type:n,compare:e===void 0?null:e}};je.startTransition=function(n){var e=Ul.transition;Ul.transition={};try{n()}finally{Ul.transition=e}};je.unstable_act=sg;je.useCallback=function(n,e){return En.current.useCallback(n,e)};je.useContext=function(n){return En.current.useContext(n)};je.useDebugValue=function(){};je.useDeferredValue=function(n){return En.current.useDeferredValue(n)};je.useEffect=function(n,e){return En.current.useEffect(n,e)};je.useId=function(){return En.current.useId()};je.useImperativeHandle=function(n,e,t){return En.current.useImperativeHandle(n,e,t)};je.useInsertionEffect=function(n,e){return En.current.useInsertionEffect(n,e)};je.useLayoutEffect=function(n,e){return En.current.useLayoutEffect(n,e)};je.useMemo=function(n,e){return En.current.useMemo(n,e)};je.useReducer=function(n,e,t){return En.current.useReducer(n,e,t)};je.useRef=function(n){return En.current.useRef(n)};je.useState=function(n){return En.current.useState(n)};je.useSyncExternalStore=function(n,e,t){return En.current.useSyncExternalStore(n,e,t)};je.useTransition=function(){return En.current.useTransition()};je.version="18.3.1";Zm.exports=je;var bt=Zm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx=bt,Px=Symbol.for("react.element"),Cx=Symbol.for("react.fragment"),Lx=Object.prototype.hasOwnProperty,Dx=Rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nx={key:!0,ref:!0,__self:!0,__source:!0};function ag(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Lx.call(e,i)&&!Nx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Px,type:n,key:s,ref:a,props:r,_owner:Dx.current}}Gc.Fragment=Cx;Gc.jsx=ag;Gc.jsxs=ag;jm.exports=Gc;var B=jm.exports,og={exports:{}},Vn={},lg={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,O){var X=G.length;G.push(O);e:for(;0<X;){var J=X-1>>>1,ae=G[J];if(0<r(ae,O))G[J]=O,G[X]=ae,X=J;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var O=G[0],X=G.pop();if(X!==O){G[0]=X;e:for(var J=0,ae=G.length,j=ae>>>1;J<j;){var V=2*(J+1)-1,ie=G[V],ue=V+1,Te=G[ue];if(0>r(ie,X))ue<ae&&0>r(Te,ie)?(G[J]=Te,G[ue]=X,J=ue):(G[J]=ie,G[V]=X,J=V);else if(ue<ae&&0>r(Te,X))G[J]=Te,G[ue]=X,J=ue;else break e}}return O}function r(G,O){var X=G.sortIndex-O.sortIndex;return X!==0?X:G.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,d=3,p=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(G){for(var O=t(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=G)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(c)}}function S(G){if(_=!1,y(G),!m)if(t(l)!==null)m=!0,q(b);else{var O=t(c);O!==null&&z(S,O.startTime-G)}}function b(G,O){m=!1,_&&(_=!1,u(M),M=-1),p=!0;var X=d;try{for(y(O),f=t(l);f!==null&&(!(f.expirationTime>O)||G&&!C());){var J=f.callback;if(typeof J=="function"){f.callback=null,d=f.priorityLevel;var ae=J(f.expirationTime<=O);O=n.unstable_now(),typeof ae=="function"?f.callback=ae:f===t(l)&&i(l),y(O)}else i(l);f=t(l)}if(f!==null)var j=!0;else{var V=t(c);V!==null&&z(S,V.startTime-O),j=!1}return j}finally{f=null,d=X,p=!1}}var T=!1,x=null,M=-1,D=5,A=-1;function C(){return!(n.unstable_now()-A<D)}function P(){if(x!==null){var G=n.unstable_now();A=G;var O=!0;try{O=x(!0,G)}finally{O?N():(T=!1,x=null)}}else T=!1}var N;if(typeof v=="function")N=function(){v(P)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,U=R.port2;R.port1.onmessage=P,N=function(){U.postMessage(null)}}else N=function(){g(P,0)};function q(G){x=G,T||(T=!0,N())}function z(G,O){M=g(function(){G(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){m||p||(m=!0,q(b))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(G){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var X=d;d=O;try{return G()}finally{d=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,O){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var X=d;d=G;try{return O()}finally{d=X}},n.unstable_scheduleCallback=function(G,O,X){var J=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?J+X:J):X=J,G){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,G={id:h++,callback:O,priorityLevel:G,startTime:X,expirationTime:ae,sortIndex:-1},X>J?(G.sortIndex=X,e(c,G),t(l)===null&&G===t(c)&&(_?(u(M),M=-1):_=!0,z(S,X-J))):(G.sortIndex=ae,e(l,G),m||p||(m=!0,q(b))),G},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(G){var O=d;return function(){var X=d;d=O;try{return G.apply(this,arguments)}finally{d=X}}}})(cg);lg.exports=cg;var Ix=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=bt,Hn=Ix;function le(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,oo={};function hs(n,e){ra(n,e),ra(n+"Capture",e)}function ra(n,e){for(oo[n]=e,n=0;n<e.length;n++)ug.add(e[n])}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,kx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Cp={};function Fx(n){return vh.call(Cp,n)?!0:vh.call(Pp,n)?!1:kx.test(n)?Cp[n]=!0:(Pp[n]=!0,!1)}function Ox(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function zx(n,e,t,i){if(e===null||typeof e>"u"||Ox(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ln[n]=new bn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ln[e]=new bn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ln[n]=new bn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ln[n]=new bn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ln[n]=new bn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ln[n]=new bn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ln[n]=new bn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ln[n]=new bn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ln[n]=new bn(n,5,!1,n.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function sd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(rd,sd);ln[e]=new bn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(rd,sd);ln[e]=new bn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(rd,sd);ln[e]=new bn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ln[n]=new bn(n,1,!1,n.toLowerCase(),null,!1,!1)});ln.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ln[n]=new bn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ad(n,e,t,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zx(e,t,r,i)&&(t=null),i||r===null?Fx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ir=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),Os=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),cd=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function wa(n){return n===null||typeof n!="object"?null:(n=Lp&&n[Lp]||n["@@iterator"],typeof n=="function"?n:null)}var It=Object.assign,hu;function Ha(n){if(hu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);hu=e&&e[1]||""}return`
`+hu+n}var fu=!1;function du(n,e){if(!n||fu)return"";fu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{fu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ha(n):""}function Bx(n){switch(n.tag){case 5:return Ha(n.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return n=du(n.type,!1),n;case 11:return n=du(n.type.render,!1),n;case 1:return n=du(n.type,!0),n;default:return""}}function Sh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case zs:return"Fragment";case Os:return"Portal";case _h:return"Profiler";case od:return"StrictMode";case xh:return"Suspense";case yh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case fg:return(n.displayName||"Context")+".Consumer";case hg:return(n._context.displayName||"Context")+".Provider";case ld:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case cd:return e=n.displayName||null,e!==null?e:Sh(n.type)||"Memo";case dr:e=n._payload,n=n._init;try{return Sh(n(e))}catch{}}return null}function Gx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(e);case 8:return e===od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hx(n){var e=pg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Bo(n){n._valueTracker||(n._valueTracker=Hx(n))}function mg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=pg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ql(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mh(n,e){var t=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Dp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Nr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gg(n,e){e=e.checked,e!=null&&ad(n,"checked",e,!1)}function wh(n,e){gg(n,e);var t=Nr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Th(n,e.type,t):e.hasOwnProperty("defaultValue")&&Th(n,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Np(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Th(n,e,t){(e!=="number"||Ql(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Va=Array.isArray;function js(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Nr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Eh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ip(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(le(92));if(Va(t)){if(1<t.length)throw Error(le(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Nr(t)}}function vg(n,e){var t=Nr(e.value),i=Nr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Up(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function _g(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?_g(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Go,xg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function lo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vx=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(n){Vx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),$a[e]=$a[n]})});function yg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||$a.hasOwnProperty(n)&&$a[n]?(""+e).trim():e+"px"}function Sg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=yg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Wx=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ah(n,e){if(e){if(Wx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Rh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ph=null;function ud(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ch=null,Zs=null,Js=null;function kp(n){if(n=No(n)){if(typeof Ch!="function")throw Error(le(280));var e=n.stateNode;e&&(e=qc(e),Ch(n.stateNode,n.type,e))}}function Mg(n){Zs?Js?Js.push(n):Js=[n]:Zs=n}function wg(){if(Zs){var n=Zs,e=Js;if(Js=Zs=null,kp(n),e)for(n=0;n<e.length;n++)kp(e[n])}}function Tg(n,e){return n(e)}function Eg(){}var pu=!1;function bg(n,e,t){if(pu)return n(e,t);pu=!0;try{return Tg(n,e,t)}finally{pu=!1,(Zs!==null||Js!==null)&&(Eg(),wg())}}function co(n,e){var t=n.stateNode;if(t===null)return null;var i=qc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(le(231,e,typeof t));return t}var Lh=!1;if(Qi)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Lh=!1}function Xx(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var Ka=!1,ec=null,tc=!1,Dh=null,qx={onError:function(n){Ka=!0,ec=n}};function Yx(n,e,t,i,r,s,a,o,l){Ka=!1,ec=null,Xx.apply(qx,arguments)}function $x(n,e,t,i,r,s,a,o,l){if(Yx.apply(this,arguments),Ka){if(Ka){var c=ec;Ka=!1,ec=null}else throw Error(le(198));tc||(tc=!0,Dh=c)}}function fs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ag(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(n){if(fs(n)!==n)throw Error(le(188))}function Kx(n){var e=n.alternate;if(!e){if(e=fs(n),e===null)throw Error(le(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Fp(r),n;if(s===i)return Fp(r),e;s=s.sibling}throw Error(le(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(t.alternate!==i)throw Error(le(190))}if(t.tag!==3)throw Error(le(188));return t.stateNode.current===t?n:e}function Rg(n){return n=Kx(n),n!==null?Pg(n):null}function Pg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Pg(n);if(e!==null)return e;n=n.sibling}return null}var Cg=Hn.unstable_scheduleCallback,Op=Hn.unstable_cancelCallback,jx=Hn.unstable_shouldYield,Zx=Hn.unstable_requestPaint,Ot=Hn.unstable_now,Jx=Hn.unstable_getCurrentPriorityLevel,hd=Hn.unstable_ImmediatePriority,Lg=Hn.unstable_UserBlockingPriority,nc=Hn.unstable_NormalPriority,Qx=Hn.unstable_LowPriority,Dg=Hn.unstable_IdlePriority,Hc=null,Li=null;function e1(n){if(Li&&typeof Li.onCommitFiberRoot=="function")try{Li.onCommitFiberRoot(Hc,n,void 0,(n.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:i1,t1=Math.log,n1=Math.LN2;function i1(n){return n>>>=0,n===0?32:31-(t1(n)/n1|0)|0}var Ho=64,Vo=4194304;function Wa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ic(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Wa(o):(s&=a,s!==0&&(i=Wa(s)))}else a=t&~r,a!==0?i=Wa(a):s!==0&&(i=Wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-vi(e),r=1<<t,i|=n[t],e&=~r;return i}function r1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-vi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=r1(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Nh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ng(){var n=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),n}function mu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Lo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-vi(e),n[e]=t}function a1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-vi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function fd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-vi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var dt=0;function Ig(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ug,dd,kg,Fg,Og,Ih=!1,Wo=[],Er=null,br=null,Ar=null,uo=new Map,ho=new Map,vr=[],o1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(n,e){switch(n){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function Ea(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=No(e),e!==null&&dd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function l1(n,e,t,i,r){switch(e){case"focusin":return Er=Ea(Er,n,e,t,i,r),!0;case"dragenter":return br=Ea(br,n,e,t,i,r),!0;case"mouseover":return Ar=Ea(Ar,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return uo.set(s,Ea(uo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ho.set(s,Ea(ho.get(s)||null,n,e,t,i,r)),!0}return!1}function zg(n){var e=Jr(n.target);if(e!==null){var t=fs(e);if(t!==null){if(e=t.tag,e===13){if(e=Ag(t),e!==null){n.blockedOn=e,Og(n.priority,function(){kg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function kl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Uh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ph=i,t.target.dispatchEvent(i),Ph=null}else return e=No(t),e!==null&&dd(e),n.blockedOn=t,!1;e.shift()}return!0}function Bp(n,e,t){kl(n)&&t.delete(e)}function c1(){Ih=!1,Er!==null&&kl(Er)&&(Er=null),br!==null&&kl(br)&&(br=null),Ar!==null&&kl(Ar)&&(Ar=null),uo.forEach(Bp),ho.forEach(Bp)}function ba(n,e){n.blockedOn===e&&(n.blockedOn=null,Ih||(Ih=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,c1)))}function fo(n){function e(r){return ba(r,n)}if(0<Wo.length){ba(Wo[0],n);for(var t=1;t<Wo.length;t++){var i=Wo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Er!==null&&ba(Er,n),br!==null&&ba(br,n),Ar!==null&&ba(Ar,n),uo.forEach(e),ho.forEach(e),t=0;t<vr.length;t++)i=vr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<vr.length&&(t=vr[0],t.blockedOn===null);)zg(t),t.blockedOn===null&&vr.shift()}var Qs=ir.ReactCurrentBatchConfig,rc=!0;function u1(n,e,t,i){var r=dt,s=Qs.transition;Qs.transition=null;try{dt=1,pd(n,e,t,i)}finally{dt=r,Qs.transition=s}}function h1(n,e,t,i){var r=dt,s=Qs.transition;Qs.transition=null;try{dt=4,pd(n,e,t,i)}finally{dt=r,Qs.transition=s}}function pd(n,e,t,i){if(rc){var r=Uh(n,e,t,i);if(r===null)Eu(n,e,i,sc,t),zp(n,i);else if(l1(r,n,e,t,i))i.stopPropagation();else if(zp(n,i),e&4&&-1<o1.indexOf(n)){for(;r!==null;){var s=No(r);if(s!==null&&Ug(s),s=Uh(n,e,t,i),s===null&&Eu(n,e,i,sc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Eu(n,e,i,null,t)}}var sc=null;function Uh(n,e,t,i){if(sc=null,n=ud(i),n=Jr(n),n!==null)if(e=fs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ag(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return sc=n,null}function Bg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case hd:return 1;case Lg:return 4;case nc:case Qx:return 16;case Dg:return 536870912;default:return 16}default:return 16}}var yr=null,md=null,Fl=null;function Gg(){if(Fl)return Fl;var n,e=md,t=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Fl=r.slice(n,1<i?1-i:void 0)}function Ol(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Xo(){return!0}function Gp(){return!1}function Wn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:Gp,this.isPropagationStopped=Gp,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gd=Wn(va),Do=It({},va,{view:0,detail:0}),f1=Wn(Do),gu,vu,Aa,Vc=It({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(gu=n.screenX-Aa.screenX,vu=n.screenY-Aa.screenY):vu=gu=0,Aa=n),gu)},movementY:function(n){return"movementY"in n?n.movementY:vu}}),Hp=Wn(Vc),d1=It({},Vc,{dataTransfer:0}),p1=Wn(d1),m1=It({},Do,{relatedTarget:0}),_u=Wn(m1),g1=It({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),v1=Wn(g1),_1=It({},va,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),x1=Wn(_1),y1=It({},va,{data:0}),Vp=Wn(y1),S1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=w1[n])?!!e[n]:!1}function vd(){return T1}var E1=It({},Do,{key:function(n){if(n.key){var e=S1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ol(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(n){return n.type==="keypress"?Ol(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ol(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),b1=Wn(E1),A1=It({},Vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Wn(A1),R1=It({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),P1=Wn(R1),C1=It({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=Wn(C1),D1=It({},Vc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),N1=Wn(D1),I1=[9,13,27,32],_d=Qi&&"CompositionEvent"in window,ja=null;Qi&&"documentMode"in document&&(ja=document.documentMode);var U1=Qi&&"TextEvent"in window&&!ja,Hg=Qi&&(!_d||ja&&8<ja&&11>=ja),Xp=" ",qp=!1;function Vg(n,e){switch(n){case"keyup":return I1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function k1(n,e){switch(n){case"compositionend":return Wg(e);case"keypress":return e.which!==32?null:(qp=!0,Xp);case"textInput":return n=e.data,n===Xp&&qp?null:n;default:return null}}function F1(n,e){if(Bs)return n==="compositionend"||!_d&&Vg(n,e)?(n=Gg(),Fl=md=yr=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hg&&e.locale!=="ko"?null:e.data;default:return null}}var O1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!O1[n.type]:e==="textarea"}function Xg(n,e,t,i){Mg(i),e=ac(e,"onChange"),0<e.length&&(t=new gd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Za=null,po=null;function z1(n){nv(n,0)}function Wc(n){var e=Vs(n);if(mg(e))return n}function B1(n,e){if(n==="change")return e}var qg=!1;if(Qi){var xu;if(Qi){var yu="oninput"in document;if(!yu){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),yu=typeof $p.oninput=="function"}xu=yu}else xu=!1;qg=xu&&(!document.documentMode||9<document.documentMode)}function Kp(){Za&&(Za.detachEvent("onpropertychange",Yg),po=Za=null)}function Yg(n){if(n.propertyName==="value"&&Wc(po)){var e=[];Xg(e,po,n,ud(n)),bg(z1,e)}}function G1(n,e,t){n==="focusin"?(Kp(),Za=e,po=t,Za.attachEvent("onpropertychange",Yg)):n==="focusout"&&Kp()}function H1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wc(po)}function V1(n,e){if(n==="click")return Wc(e)}function W1(n,e){if(n==="input"||n==="change")return Wc(e)}function X1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var xi=typeof Object.is=="function"?Object.is:X1;function mo(n,e){if(xi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!vh.call(e,r)||!xi(n[r],e[r]))return!1}return!0}function jp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zp(n,e){var t=jp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=jp(t)}}function $g(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?$g(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Kg(){for(var n=window,e=Ql();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ql(n.document)}return e}function xd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function q1(n){var e=Kg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&$g(t.ownerDocument.documentElement,t)){if(i!==null&&xd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Zp(t,s);var a=Zp(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Y1=Qi&&"documentMode"in document&&11>=document.documentMode,Gs=null,kh=null,Ja=null,Fh=!1;function Jp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fh||Gs==null||Gs!==Ql(i)||(i=Gs,"selectionStart"in i&&xd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ja&&mo(Ja,i)||(Ja=i,i=ac(kh,"onSelect"),0<i.length&&(e=new gd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Gs)))}function qo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Hs={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Su={},jg={};Qi&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Xc(n){if(Su[n])return Su[n];if(!Hs[n])return n;var e=Hs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in jg)return Su[n]=e[t];return n}var Zg=Xc("animationend"),Jg=Xc("animationiteration"),Qg=Xc("animationstart"),ev=Xc("transitionend"),tv=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(n,e){tv.set(n,e),hs(e,[n])}for(var Mu=0;Mu<Qp.length;Mu++){var wu=Qp[Mu],$1=wu.toLowerCase(),K1=wu[0].toUpperCase()+wu.slice(1);kr($1,"on"+K1)}kr(Zg,"onAnimationEnd");kr(Jg,"onAnimationIteration");kr(Qg,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(ev,"onTransitionEnd");ra("onMouseEnter",["mouseout","mouseover"]);ra("onMouseLeave",["mouseout","mouseover"]);ra("onPointerEnter",["pointerout","pointerover"]);ra("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function e0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,$x(i,e,void 0,n),n.currentTarget=null}function nv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;e0(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;e0(r,o,c),s=l}}}if(tc)throw n=Dh,tc=!1,Dh=null,n}function yt(n,e){var t=e[Hh];t===void 0&&(t=e[Hh]=new Set);var i=n+"__bubble";t.has(i)||(iv(e,n,2,!1),t.add(i))}function Tu(n,e,t){var i=0;e&&(i|=4),iv(t,n,i,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function go(n){if(!n[Yo]){n[Yo]=!0,ug.forEach(function(t){t!=="selectionchange"&&(j1.has(t)||Tu(t,!1,n),Tu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,Tu("selectionchange",!1,e))}}function iv(n,e,t,i){switch(Bg(e)){case 1:var r=u1;break;case 4:r=h1;break;default:r=pd}t=r.bind(null,e,t,n),r=void 0,!Lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Eu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}bg(function(){var c=s,h=ud(t),f=[];e:{var d=tv.get(n);if(d!==void 0){var p=gd,m=n;switch(n){case"keypress":if(Ol(t)===0)break e;case"keydown":case"keyup":p=b1;break;case"focusin":m="focus",p=_u;break;case"focusout":m="blur",p=_u;break;case"beforeblur":case"afterblur":p=_u;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=P1;break;case Zg:case Jg:case Qg:p=v1;break;case ev:p=L1;break;case"scroll":p=f1;break;case"wheel":p=N1;break;case"copy":case"cut":case"paste":p=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wp}var _=(e&4)!==0,g=!_&&n==="scroll",u=_?d!==null?d+"Capture":null:d;_=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,u!==null&&(S=co(v,u),S!=null&&_.push(vo(v,S,y)))),g)break;v=v.return}0<_.length&&(d=new p(d,m,null,t,h),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Ph&&(m=t.relatedTarget||t.fromElement)&&(Jr(m)||m[er]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?Jr(m):null,m!==null&&(g=fs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(_=Hp,S="onMouseLeave",u="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Wp,S="onPointerLeave",u="onPointerEnter",v="pointer"),g=p==null?d:Vs(p),y=m==null?d:Vs(m),d=new _(S,v+"leave",p,t,h),d.target=g,d.relatedTarget=y,S=null,Jr(h)===c&&(_=new _(u,v+"enter",m,t,h),_.target=y,_.relatedTarget=g,S=_),g=S,p&&m)t:{for(_=p,u=m,v=0,y=_;y;y=vs(y))v++;for(y=0,S=u;S;S=vs(S))y++;for(;0<v-y;)_=vs(_),v--;for(;0<y-v;)u=vs(u),y--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=vs(_),u=vs(u)}_=null}else _=null;p!==null&&t0(f,d,p,_,!1),m!==null&&g!==null&&t0(f,g,m,_,!0)}}e:{if(d=c?Vs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=B1;else if(Yp(d))if(qg)b=W1;else{b=H1;var T=G1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=V1);if(b&&(b=b(n,c))){Xg(f,b,t,h);break e}T&&T(n,d,c),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Th(d,"number",d.value)}switch(T=c?Vs(c):window,n){case"focusin":(Yp(T)||T.contentEditable==="true")&&(Gs=T,kh=c,Ja=null);break;case"focusout":Ja=kh=Gs=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Jp(f,t,h);break;case"selectionchange":if(Y1)break;case"keydown":case"keyup":Jp(f,t,h)}var x;if(_d)e:{switch(n){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Bs?Vg(n,t)&&(M="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(Hg&&t.locale!=="ko"&&(Bs||M!=="onCompositionStart"?M==="onCompositionEnd"&&Bs&&(x=Gg()):(yr=h,md="value"in yr?yr.value:yr.textContent,Bs=!0)),T=ac(c,M),0<T.length&&(M=new Vp(M,n,null,t,h),f.push({event:M,listeners:T}),x?M.data=x:(x=Wg(t),x!==null&&(M.data=x)))),(x=U1?k1(n,t):F1(n,t))&&(c=ac(c,"onBeforeInput"),0<c.length&&(h=new Vp("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:c}),h.data=x))}nv(f,e)})}function vo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ac(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=co(n,t),s!=null&&i.unshift(vo(n,s,r)),s=co(n,e),s!=null&&i.push(vo(n,s,r))),n=n.return}return i}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function t0(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=co(t,s),l!=null&&a.unshift(vo(t,l,o))):r||(l=co(t,s),l!=null&&a.push(vo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var Z1=/\r\n?/g,J1=/\u0000|\uFFFD/g;function n0(n){return(typeof n=="string"?n:""+n).replace(Z1,`
`).replace(J1,"")}function $o(n,e,t){if(e=n0(e),n0(n)!==e&&t)throw Error(le(425))}function oc(){}var Oh=null,zh=null;function Bh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(n){return i0.resolve(null).then(n).catch(ty)}:Gh;function ty(n){setTimeout(function(){throw n})}function bu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),fo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);fo(e)}function Rr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function r0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var _a=Math.random().toString(36).slice(2),Ai="__reactFiber$"+_a,_o="__reactProps$"+_a,er="__reactContainer$"+_a,Hh="__reactEvents$"+_a,ny="__reactListeners$"+_a,iy="__reactHandles$"+_a;function Jr(n){var e=n[Ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[er]||t[Ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=r0(n);n!==null;){if(t=n[Ai])return t;n=r0(n)}return e}n=t,t=n.parentNode}return null}function No(n){return n=n[Ai]||n[er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(le(33))}function qc(n){return n[_o]||null}var Vh=[],Ws=-1;function Fr(n){return{current:n}}function wt(n){0>Ws||(n.current=Vh[Ws],Vh[Ws]=null,Ws--)}function xt(n,e){Ws++,Vh[Ws]=n.current,n.current=e}var Ir={},_n=Fr(Ir),Ln=Fr(!1),is=Ir;function sa(n,e){var t=n.type.contextTypes;if(!t)return Ir;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(n){return n=n.childContextTypes,n!=null}function lc(){wt(Ln),wt(_n)}function s0(n,e,t){if(_n.current!==Ir)throw Error(le(168));xt(_n,e),xt(Ln,t)}function rv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,Gx(n)||"Unknown",r));return It({},t,i)}function cc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,is=_n.current,xt(_n,n),xt(Ln,Ln.current),!0}function a0(n,e,t){var i=n.stateNode;if(!i)throw Error(le(169));t?(n=rv(n,e,is),i.__reactInternalMemoizedMergedChildContext=n,wt(Ln),wt(_n),xt(_n,n)):wt(Ln),xt(Ln,t)}var qi=null,Yc=!1,Au=!1;function sv(n){qi===null?qi=[n]:qi.push(n)}function ry(n){Yc=!0,sv(n)}function Or(){if(!Au&&qi!==null){Au=!0;var n=0,e=dt;try{var t=qi;for(dt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}qi=null,Yc=!1}catch(r){throw qi!==null&&(qi=qi.slice(n+1)),Cg(hd,Or),r}finally{dt=e,Au=!1}}return null}var Xs=[],qs=0,uc=null,hc=0,Jn=[],Qn=0,rs=null,Yi=1,$i="";function Yr(n,e){Xs[qs++]=hc,Xs[qs++]=uc,uc=n,hc=e}function av(n,e,t){Jn[Qn++]=Yi,Jn[Qn++]=$i,Jn[Qn++]=rs,rs=n;var i=Yi;n=$i;var r=32-vi(i)-1;i&=~(1<<r),t+=1;var s=32-vi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Yi=1<<32-vi(e)+r|t<<r|i,$i=s+n}else Yi=1<<s|t<<r|i,$i=n}function yd(n){n.return!==null&&(Yr(n,1),av(n,1,0))}function Sd(n){for(;n===uc;)uc=Xs[--qs],Xs[qs]=null,hc=Xs[--qs],Xs[qs]=null;for(;n===rs;)rs=Jn[--Qn],Jn[Qn]=null,$i=Jn[--Qn],Jn[Qn]=null,Yi=Jn[--Qn],Jn[Qn]=null}var Gn=null,Bn=null,At=!1,di=null;function ov(n,e){var t=ni(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function o0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Gn=n,Bn=Rr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Gn=n,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=rs!==null?{id:Yi,overflow:$i}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ni(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Gn=n,Bn=null,!0):!1;default:return!1}}function Wh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xh(n){if(At){var e=Bn;if(e){var t=e;if(!o0(n,e)){if(Wh(n))throw Error(le(418));e=Rr(t.nextSibling);var i=Gn;e&&o0(n,e)?ov(i,t):(n.flags=n.flags&-4097|2,At=!1,Gn=n)}}else{if(Wh(n))throw Error(le(418));n.flags=n.flags&-4097|2,At=!1,Gn=n}}}function l0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function Ko(n){if(n!==Gn)return!1;if(!At)return l0(n),At=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Bh(n.type,n.memoizedProps)),e&&(e=Bn)){if(Wh(n))throw lv(),Error(le(418));for(;e;)ov(n,e),e=Rr(e.nextSibling)}if(l0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(le(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Bn=Rr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Bn=null}}else Bn=Gn?Rr(n.stateNode.nextSibling):null;return!0}function lv(){for(var n=Bn;n;)n=Rr(n.nextSibling)}function aa(){Bn=Gn=null,At=!1}function Md(n){di===null?di=[n]:di.push(n)}var sy=ir.ReactCurrentBatchConfig;function Ra(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(le(309));var i=t.stateNode}if(!i)throw Error(le(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(le(284));if(!t._owner)throw Error(le(290,n))}return n}function jo(n,e){throw n=Object.prototype.toString.call(e),Error(le(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function c0(n){var e=n._init;return e(n._payload)}function cv(n){function e(u,v){if(n){var y=u.deletions;y===null?(u.deletions=[v],u.flags|=16):y.push(v)}}function t(u,v){if(!n)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Dr(u,v),u.index=0,u.sibling=null,u}function s(u,v,y){return u.index=y,n?(y=u.alternate,y!==null?(y=y.index,y<v?(u.flags|=2,v):y):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return n&&u.alternate===null&&(u.flags|=2),u}function o(u,v,y,S){return v===null||v.tag!==6?(v=Iu(y,u.mode,S),v.return=u,v):(v=r(v,y),v.return=u,v)}function l(u,v,y,S){var b=y.type;return b===zs?h(u,v,y.props.children,S,y.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dr&&c0(b)===v.type)?(S=r(v,y.props),S.ref=Ra(u,v,y),S.return=u,S):(S=Xl(y.type,y.key,y.props,null,u.mode,S),S.ref=Ra(u,v,y),S.return=u,S)}function c(u,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Uu(y,u.mode,S),v.return=u,v):(v=r(v,y.children||[]),v.return=u,v)}function h(u,v,y,S,b){return v===null||v.tag!==7?(v=ns(y,u.mode,S,b),v.return=u,v):(v=r(v,y),v.return=u,v)}function f(u,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Iu(""+v,u.mode,y),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zo:return y=Xl(v.type,v.key,v.props,null,u.mode,y),y.ref=Ra(u,null,v),y.return=u,y;case Os:return v=Uu(v,u.mode,y),v.return=u,v;case dr:var S=v._init;return f(u,S(v._payload),y)}if(Va(v)||wa(v))return v=ns(v,u.mode,y,null),v.return=u,v;jo(u,v)}return null}function d(u,v,y,S){var b=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:o(u,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zo:return y.key===b?l(u,v,y,S):null;case Os:return y.key===b?c(u,v,y,S):null;case dr:return b=y._init,d(u,v,b(y._payload),S)}if(Va(y)||wa(y))return b!==null?null:h(u,v,y,S,null);jo(u,y)}return null}function p(u,v,y,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(y)||null,o(v,u,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zo:return u=u.get(S.key===null?y:S.key)||null,l(v,u,S,b);case Os:return u=u.get(S.key===null?y:S.key)||null,c(v,u,S,b);case dr:var T=S._init;return p(u,v,y,T(S._payload),b)}if(Va(S)||wa(S))return u=u.get(y)||null,h(v,u,S,b,null);jo(v,S)}return null}function m(u,v,y,S){for(var b=null,T=null,x=v,M=v=0,D=null;x!==null&&M<y.length;M++){x.index>M?(D=x,x=null):D=x.sibling;var A=d(u,x,y[M],S);if(A===null){x===null&&(x=D);break}n&&x&&A.alternate===null&&e(u,x),v=s(A,v,M),T===null?b=A:T.sibling=A,T=A,x=D}if(M===y.length)return t(u,x),At&&Yr(u,M),b;if(x===null){for(;M<y.length;M++)x=f(u,y[M],S),x!==null&&(v=s(x,v,M),T===null?b=x:T.sibling=x,T=x);return At&&Yr(u,M),b}for(x=i(u,x);M<y.length;M++)D=p(x,u,M,y[M],S),D!==null&&(n&&D.alternate!==null&&x.delete(D.key===null?M:D.key),v=s(D,v,M),T===null?b=D:T.sibling=D,T=D);return n&&x.forEach(function(C){return e(u,C)}),At&&Yr(u,M),b}function _(u,v,y,S){var b=wa(y);if(typeof b!="function")throw Error(le(150));if(y=b.call(y),y==null)throw Error(le(151));for(var T=b=null,x=v,M=v=0,D=null,A=y.next();x!==null&&!A.done;M++,A=y.next()){x.index>M?(D=x,x=null):D=x.sibling;var C=d(u,x,A.value,S);if(C===null){x===null&&(x=D);break}n&&x&&C.alternate===null&&e(u,x),v=s(C,v,M),T===null?b=C:T.sibling=C,T=C,x=D}if(A.done)return t(u,x),At&&Yr(u,M),b;if(x===null){for(;!A.done;M++,A=y.next())A=f(u,A.value,S),A!==null&&(v=s(A,v,M),T===null?b=A:T.sibling=A,T=A);return At&&Yr(u,M),b}for(x=i(u,x);!A.done;M++,A=y.next())A=p(x,u,M,A.value,S),A!==null&&(n&&A.alternate!==null&&x.delete(A.key===null?M:A.key),v=s(A,v,M),T===null?b=A:T.sibling=A,T=A);return n&&x.forEach(function(P){return e(u,P)}),At&&Yr(u,M),b}function g(u,v,y,S){if(typeof y=="object"&&y!==null&&y.type===zs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case zo:e:{for(var b=y.key,T=v;T!==null;){if(T.key===b){if(b=y.type,b===zs){if(T.tag===7){t(u,T.sibling),v=r(T,y.props.children),v.return=u,u=v;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dr&&c0(b)===T.type){t(u,T.sibling),v=r(T,y.props),v.ref=Ra(u,T,y),v.return=u,u=v;break e}t(u,T);break}else e(u,T);T=T.sibling}y.type===zs?(v=ns(y.props.children,u.mode,S,y.key),v.return=u,u=v):(S=Xl(y.type,y.key,y.props,null,u.mode,S),S.ref=Ra(u,v,y),S.return=u,u=S)}return a(u);case Os:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(u,v.sibling),v=r(v,y.children||[]),v.return=u,u=v;break e}else{t(u,v);break}else e(u,v);v=v.sibling}v=Uu(y,u.mode,S),v.return=u,u=v}return a(u);case dr:return T=y._init,g(u,v,T(y._payload),S)}if(Va(y))return m(u,v,y,S);if(wa(y))return _(u,v,y,S);jo(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(u,v.sibling),v=r(v,y),v.return=u,u=v):(t(u,v),v=Iu(y,u.mode,S),v.return=u,u=v),a(u)):t(u,v)}return g}var oa=cv(!0),uv=cv(!1),fc=Fr(null),dc=null,Ys=null,wd=null;function Td(){wd=Ys=dc=null}function Ed(n){var e=fc.current;wt(fc),n._currentValue=e}function qh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ea(n,e){dc=n,wd=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Pn=!0),n.firstContext=null)}function ri(n){var e=n._currentValue;if(wd!==n)if(n={context:n,memoizedValue:e,next:null},Ys===null){if(dc===null)throw Error(le(308));Ys=n,dc.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return e}var Qr=null;function bd(n){Qr===null?Qr=[n]:Qr.push(n)}function hv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,bd(e)):(t.next=r.next,r.next=t),e.interleaved=t,tr(n,i)}function tr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var pr=!1;function Ad(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,tr(n,t)}return r=i.interleaved,r===null?(e.next=e,bd(i)):(e.next=r.next,r.next=e),i.interleaved=e,tr(n,t)}function zl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fd(n,t)}}function u0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function pc(n,e,t,i){var r=n.updateQueue;pr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=n.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=n,_=o;switch(d=e,p=t,_.tag){case 1:if(m=_.payload,typeof m=="function"){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,d=typeof m=="function"?m.call(p,f,d):m,d==null)break e;f=It({},f,d);break e;case 2:pr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);as|=a,n.lanes=a,n.memoizedState=f}}function h0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Io={},Di=Fr(Io),xo=Fr(Io),yo=Fr(Io);function es(n){if(n===Io)throw Error(le(174));return n}function Rd(n,e){switch(xt(yo,e),xt(xo,n),xt(Di,Io),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=bh(e,n)}wt(Di),xt(Di,e)}function la(){wt(Di),wt(xo),wt(yo)}function dv(n){es(yo.current);var e=es(Di.current),t=bh(e,n.type);e!==t&&(xt(xo,n),xt(Di,t))}function Pd(n){xo.current===n&&(wt(Di),wt(xo))}var Ct=Fr(0);function mc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function Cd(){for(var n=0;n<Ru.length;n++)Ru[n]._workInProgressVersionPrimary=null;Ru.length=0}var Bl=ir.ReactCurrentDispatcher,Pu=ir.ReactCurrentBatchConfig,ss=0,Dt=null,Xt=null,Qt=null,gc=!1,Qa=!1,So=0,ay=0;function hn(){throw Error(le(321))}function Ld(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!xi(n[t],e[t]))return!1;return!0}function Dd(n,e,t,i,r,s){if(ss=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=n===null||n.memoizedState===null?uy:hy,n=t(i,r),Qa){s=0;do{if(Qa=!1,So=0,25<=s)throw Error(le(301));s+=1,Qt=Xt=null,e.updateQueue=null,Bl.current=fy,n=t(i,r)}while(Qa)}if(Bl.current=vc,e=Xt!==null&&Xt.next!==null,ss=0,Qt=Xt=Dt=null,gc=!1,e)throw Error(le(300));return n}function Nd(){var n=So!==0;return So=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Dt.memoizedState=Qt=n:Qt=Qt.next=n,Qt}function si(){if(Xt===null){var n=Dt.alternate;n=n!==null?n.memoizedState:null}else n=Xt.next;var e=Qt===null?Dt.memoizedState:Qt.next;if(e!==null)Qt=e,Xt=n;else{if(n===null)throw Error(le(310));Xt=n,n={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Qt===null?Dt.memoizedState=Qt=n:Qt=Qt.next=n}return Qt}function Mo(n,e){return typeof e=="function"?e(n):e}function Cu(n){var e=si(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=Xt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((ss&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Dt.lanes|=h,as|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,xi(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Dt.lanes|=s,as|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Lu(n){var e=si(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);xi(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function pv(){}function mv(n,e){var t=Dt,i=si(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,Id(_v.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(t.flags|=2048,wo(9,vv.bind(null,t,i,r,e),void 0,null),tn===null)throw Error(le(349));ss&30||gv(t,e,r)}return r}function gv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function vv(n,e,t,i){e.value=t,e.getSnapshot=i,xv(e)&&yv(n)}function _v(n,e,t){return t(function(){xv(e)&&yv(n)})}function xv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!xi(n,t)}catch{return!0}}function yv(n){var e=tr(n,1);e!==null&&_i(e,n,1,-1)}function f0(n){var e=Ti();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},e.queue=n,n=n.dispatch=cy.bind(null,Dt,n),[e.memoizedState,n]}function wo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Sv(){return si().memoizedState}function Gl(n,e,t,i){var r=Ti();Dt.flags|=n,r.memoizedState=wo(1|e,t,void 0,i===void 0?null:i)}function $c(n,e,t,i){var r=si();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var a=Xt.memoizedState;if(s=a.destroy,i!==null&&Ld(i,a.deps)){r.memoizedState=wo(e,t,s,i);return}}Dt.flags|=n,r.memoizedState=wo(1|e,t,s,i)}function d0(n,e){return Gl(8390656,8,n,e)}function Id(n,e){return $c(2048,8,n,e)}function Mv(n,e){return $c(4,2,n,e)}function wv(n,e){return $c(4,4,n,e)}function Tv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ev(n,e,t){return t=t!=null?t.concat([n]):null,$c(4,4,Tv.bind(null,e,n),t)}function Ud(){}function bv(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ld(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Av(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ld(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Rv(n,e,t){return ss&21?(xi(t,e)||(t=Ng(),Dt.lanes|=t,as|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=t)}function oy(n,e){var t=dt;dt=t!==0&&4>t?t:4,n(!0);var i=Pu.transition;Pu.transition={};try{n(!1),e()}finally{dt=t,Pu.transition=i}}function Pv(){return si().memoizedState}function ly(n,e,t){var i=Lr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Cv(n))Lv(e,t);else if(t=hv(n,e,t,i),t!==null){var r=Tn();_i(t,n,i,r),Dv(t,e,i)}}function cy(n,e,t){var i=Lr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cv(n))Lv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,xi(o,a)){var l=e.interleaved;l===null?(r.next=r,bd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=hv(n,e,r,i),t!==null&&(r=Tn(),_i(t,n,i,r),Dv(t,e,i))}}function Cv(n){var e=n.alternate;return n===Dt||e!==null&&e===Dt}function Lv(n,e){Qa=gc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Dv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fd(n,t)}}var vc={readContext:ri,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},uy={readContext:ri,useCallback:function(n,e){return Ti().memoizedState=[n,e===void 0?null:e],n},useContext:ri,useEffect:d0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Gl(4194308,4,Tv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Gl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Gl(4,2,n,e)},useMemo:function(n,e){var t=Ti();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ti();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ly.bind(null,Dt,n),[i.memoizedState,n]},useRef:function(n){var e=Ti();return n={current:n},e.memoizedState=n},useState:f0,useDebugValue:Ud,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=f0(!1),e=n[0];return n=oy.bind(null,n[1]),Ti().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Dt,r=Ti();if(At){if(t===void 0)throw Error(le(407));t=t()}else{if(t=e(),tn===null)throw Error(le(349));ss&30||gv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,d0(_v.bind(null,i,s,n),[n]),i.flags|=2048,wo(9,vv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ti(),e=tn.identifierPrefix;if(At){var t=$i,i=Yi;t=(i&~(1<<32-vi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=So++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ay++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},hy={readContext:ri,useCallback:bv,useContext:ri,useEffect:Id,useImperativeHandle:Ev,useInsertionEffect:Mv,useLayoutEffect:wv,useMemo:Av,useReducer:Cu,useRef:Sv,useState:function(){return Cu(Mo)},useDebugValue:Ud,useDeferredValue:function(n){var e=si();return Rv(e,Xt.memoizedState,n)},useTransition:function(){var n=Cu(Mo)[0],e=si().memoizedState;return[n,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Pv,unstable_isNewReconciler:!1},fy={readContext:ri,useCallback:bv,useContext:ri,useEffect:Id,useImperativeHandle:Ev,useInsertionEffect:Mv,useLayoutEffect:wv,useMemo:Av,useReducer:Lu,useRef:Sv,useState:function(){return Lu(Mo)},useDebugValue:Ud,useDeferredValue:function(n){var e=si();return Xt===null?e.memoizedState=n:Rv(e,Xt.memoizedState,n)},useTransition:function(){var n=Lu(Mo)[0],e=si().memoizedState;return[n,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Pv,unstable_isNewReconciler:!1};function hi(n,e){if(n&&n.defaultProps){e=It({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Yh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:It({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Kc={isMounted:function(n){return(n=n._reactInternals)?fs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Tn(),r=Lr(n),s=ji(i,r);s.payload=e,t!=null&&(s.callback=t),e=Pr(n,s,r),e!==null&&(_i(e,n,r,i),zl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Tn(),r=Lr(n),s=ji(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Pr(n,s,r),e!==null&&(_i(e,n,r,i),zl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Tn(),i=Lr(n),r=ji(t,i);r.tag=2,e!=null&&(r.callback=e),e=Pr(n,r,i),e!==null&&(_i(e,n,i,t),zl(e,n,i))}};function p0(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!mo(t,i)||!mo(r,s):!0}function Nv(n,e,t){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=Dn(e)?is:_n.current,i=e.contextTypes,s=(i=i!=null)?sa(n,r):Ir),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function m0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Kc.enqueueReplaceState(e,e.state,null)}function $h(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ad(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=Dn(e)?is:_n.current,r.context=sa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kc.enqueueReplaceState(r,r.state,null),pc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ca(n,e){try{var t="",i=e;do t+=Bx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Du(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Kh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var dy=typeof WeakMap=="function"?WeakMap:Map;function Iv(n,e,t){t=ji(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){xc||(xc=!0,af=i),Kh(n,e)},t}function Uv(n,e,t){t=ji(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Kh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Kh(n,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function g0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new dy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Ay.bind(null,n,e,t),e.then(n,n))}function v0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function _0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ji(-1,1),e.tag=2,Pr(t,e,1))),t.lanes|=1),n)}var py=ir.ReactCurrentOwner,Pn=!1;function Mn(n,e,t,i){e.child=n===null?uv(e,null,t,i):oa(e,n.child,t,i)}function x0(n,e,t,i,r){t=t.render;var s=e.ref;return ea(e,r),i=Dd(n,e,t,i,s,r),t=Nd(),n!==null&&!Pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,nr(n,e,r)):(At&&t&&yd(e),e.flags|=1,Mn(n,e,i,r),e.child)}function y0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Vd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,kv(n,e,s,i,r)):(n=Xl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:mo,t(a,i)&&n.ref===e.ref)return nr(n,e,r)}return e.flags|=1,n=Dr(s,i),n.ref=e.ref,n.return=e,e.child=n}function kv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(mo(s,i)&&n.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Pn=!0);else return e.lanes=n.lanes,nr(n,e,r)}return jh(n,e,t,i,r)}function Fv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Ks,On),On|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,xt(Ks,On),On|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,xt(Ks,On),On|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,xt(Ks,On),On|=i;return Mn(n,e,r,t),e.child}function Ov(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function jh(n,e,t,i,r){var s=Dn(t)?is:_n.current;return s=sa(e,s),ea(e,r),t=Dd(n,e,t,i,s,r),i=Nd(),n!==null&&!Pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,nr(n,e,r)):(At&&i&&yd(e),e.flags|=1,Mn(n,e,t,r),e.child)}function S0(n,e,t,i,r){if(Dn(t)){var s=!0;cc(e)}else s=!1;if(ea(e,r),e.stateNode===null)Hl(n,e),Nv(e,t,i),$h(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=ri(c):(c=Dn(t)?is:_n.current,c=sa(e,c));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&m0(e,a,i,c),pr=!1;var d=e.memoizedState;a.state=d,pc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Ln.current||pr?(typeof h=="function"&&(Yh(e,t,h,i),l=e.memoizedState),(o=pr||p0(e,t,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,fv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:hi(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=Dn(t)?is:_n.current,l=sa(e,l));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&m0(e,a,i,l),pr=!1,d=e.memoizedState,a.state=d,pc(e,i,a,r);var m=e.memoizedState;o!==f||d!==m||Ln.current||pr?(typeof p=="function"&&(Yh(e,t,p,i),m=e.memoizedState),(c=pr||p0(e,t,c,i,d,m,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Zh(n,e,t,i,s,r)}function Zh(n,e,t,i,r,s){Ov(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&a0(e,t,!1),nr(n,e,s);i=e.stateNode,py.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=oa(e,n.child,null,s),e.child=oa(e,null,o,s)):Mn(n,e,o,s),e.memoizedState=i.state,r&&a0(e,t,!0),e.child}function zv(n){var e=n.stateNode;e.pendingContext?s0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&s0(n,e.context,!1),Rd(n,e.containerInfo)}function M0(n,e,t,i,r){return aa(),Md(r),e.flags|=256,Mn(n,e,t,i),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Qh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bv(n,e,t){var i=e.pendingProps,r=Ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),xt(Ct,r&1),n===null)return Xh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Jc(a,i,0,null),n=ns(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Qh(t),e.memoizedState=Jh,n):kd(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return my(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Dr(o,s):(s=ns(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Qh(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Jh,i}return s=n.child,n=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function kd(n,e){return e=Jc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Zo(n,e,t,i){return i!==null&&Md(i),oa(e,n.child,null,t),n=kd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function my(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Du(Error(le(422))),Zo(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jc({mode:"visible",children:i.children},r,0,null),s=ns(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oa(e,n.child,null,a),e.child.memoizedState=Qh(a),e.memoizedState=Jh,s);if(!(e.mode&1))return Zo(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=Du(s,i,void 0),Zo(n,e,a,i)}if(o=(a&n.childLanes)!==0,Pn||o){if(i=tn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,tr(n,r),_i(i,n,r,-1))}return Hd(),i=Du(Error(le(421))),Zo(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Ry.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Bn=Rr(r.nextSibling),Gn=e,At=!0,di=null,n!==null&&(Jn[Qn++]=Yi,Jn[Qn++]=$i,Jn[Qn++]=rs,Yi=n.id,$i=n.overflow,rs=e),e=kd(e,i.children),e.flags|=4096,e)}function w0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),qh(n.return,e,t)}function Nu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Gv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Mn(n,e,i.children,t),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&w0(n,t,e);else if(n.tag===19)w0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(xt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&mc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Nu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&mc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Nu(e,!0,t,null,s);break;case"together":Nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function nr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),as|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(le(153));if(e.child!==null){for(n=e.child,t=Dr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Dr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function gy(n,e,t){switch(e.tag){case 3:zv(e),aa();break;case 5:dv(e);break;case 1:Dn(e.type)&&cc(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(fc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Ct,Ct.current&1),e.flags|=128,null):t&e.child.childLanes?Bv(n,e,t):(xt(Ct,Ct.current&1),n=nr(n,e,t),n!==null?n.sibling:null);xt(Ct,Ct.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Gv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Fv(n,e,t)}return nr(n,e,t)}var Hv,ef,Vv,Wv;Hv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ef=function(){};Vv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,es(Di.current);var s=null;switch(t){case"input":r=Mh(n,r),i=Mh(n,i),s=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),s=[];break;case"textarea":r=Eh(n,r),i=Eh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=oc)}Ah(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Wv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Pa(n,e){if(!At)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function fn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function vy(n,e,t){var i=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return Dn(e.type)&&lc(),fn(e),null;case 3:return i=e.stateNode,la(),wt(Ln),wt(_n),Cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ko(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(cf(di),di=null))),ef(n,e),fn(e),null;case 5:Pd(e);var r=es(yo.current);if(t=e.type,n!==null&&e.stateNode!=null)Vv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return fn(e),null}if(n=es(Di.current),Ko(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[_o]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Xa.length;r++)yt(Xa[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Dp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Ip(i,s),yt("invalid",i)}Ah(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&$o(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&$o(i.textContent,o,n),r=["children",""+o]):oo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(t){case"input":Bo(i),Np(i,s,!0);break;case"textarea":Bo(i),Up(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_g(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ai]=e,n[_o]=i,Hv(n,e,!1,!1),e.stateNode=n;e:{switch(a=Rh(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Xa.length;r++)yt(Xa[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":Dp(n,i),r=Mh(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),yt("invalid",n);break;case"textarea":Ip(n,i),r=Eh(n,i),yt("invalid",n);break;default:r=i}Ah(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Sg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&lo(n,l):typeof l=="number"&&lo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&ad(n,s,l,a))}switch(t){case"input":Bo(n),Np(n,i,!1);break;case"textarea":Bo(n),Up(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Nr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?js(n,!!i.multiple,s,!1):i.defaultValue!=null&&js(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=oc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(n&&e.stateNode!=null)Wv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(t=es(yo.current),es(Di.current),Ko(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==t)&&(n=Gn,n!==null))switch(n.tag){case 3:$o(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$o(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return fn(e),null;case 13:if(wt(Ct),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(At&&Bn!==null&&e.mode&1&&!(e.flags&128))lv(),aa(),e.flags|=98560,s=!1;else if(s=Ko(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[Ai]=e}else aa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fn(e),s=!1}else di!==null&&(cf(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ct.current&1?qt===0&&(qt=3):Hd())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return la(),ef(n,e),n===null&&go(e.stateNode.containerInfo),fn(e),null;case 10:return Ed(e.type._context),fn(e),null;case 17:return Dn(e.type)&&lc(),fn(e),null;case 19:if(wt(Ct),s=e.memoizedState,s===null)return fn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Pa(s,!1);else{if(qt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=mc(n),a!==null){for(e.flags|=128,Pa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return xt(Ct,Ct.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ot()>ua&&(e.flags|=128,i=!0,Pa(s,!1),e.lanes=4194304)}else{if(!i)if(n=mc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!At)return fn(e),null}else 2*Ot()-s.renderingStartTime>ua&&t!==1073741824&&(e.flags|=128,i=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,t=Ct.current,xt(Ct,i?t&1|2:t&1),e):(fn(e),null);case 22:case 23:return Gd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?On&1073741824&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function _y(n,e){switch(Sd(e),e.tag){case 1:return Dn(e.type)&&lc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return la(),wt(Ln),wt(_n),Cd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Pd(e),null;case 13:if(wt(Ct),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(le(340));aa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return wt(Ct),null;case 4:return la(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Jo=!1,vn=!1,xy=typeof WeakSet=="function"?WeakSet:Set,be=null;function $s(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){kt(n,e,i)}else t.current=null}function tf(n,e,t){try{t()}catch(i){kt(n,e,i)}}var T0=!1;function yy(n,e){if(Oh=rc,n=Kg(),xd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(zh={focusedElem:n,selectionRange:t},rc=!1,be=e;be!==null;)if(e=be,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,be=n;else for(;be!==null;){e=be;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:hi(e.type,_),g);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(S){kt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}return m=T0,T0=!1,m}function eo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&tf(e,t,s)}r=r.next}while(r!==i)}}function jc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function nf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Xv(n){var e=n.alternate;e!==null&&(n.alternate=null,Xv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ai],delete e[_o],delete e[Hh],delete e[ny],delete e[iy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qv(n){return n.tag===5||n.tag===3||n.tag===4}function E0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(n=n.child,n!==null))for(rf(n,e,t),n=n.sibling;n!==null;)rf(n,e,t),n=n.sibling}function sf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(sf(n,e,t),n=n.sibling;n!==null;)sf(n,e,t),n=n.sibling}var rn=null,fi=!1;function or(n,e,t){for(t=t.child;t!==null;)Yv(n,e,t),t=t.sibling}function Yv(n,e,t){if(Li&&typeof Li.onCommitFiberUnmount=="function")try{Li.onCommitFiberUnmount(Hc,t)}catch{}switch(t.tag){case 5:vn||$s(t,e);case 6:var i=rn,r=fi;rn=null,or(n,e,t),rn=i,fi=r,rn!==null&&(fi?(n=rn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):rn.removeChild(t.stateNode));break;case 18:rn!==null&&(fi?(n=rn,t=t.stateNode,n.nodeType===8?bu(n.parentNode,t):n.nodeType===1&&bu(n,t),fo(n)):bu(rn,t.stateNode));break;case 4:i=rn,r=fi,rn=t.stateNode.containerInfo,fi=!0,or(n,e,t),rn=i,fi=r;break;case 0:case 11:case 14:case 15:if(!vn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&tf(t,e,a),r=r.next}while(r!==i)}or(n,e,t);break;case 1:if(!vn&&($s(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){kt(t,e,o)}or(n,e,t);break;case 21:or(n,e,t);break;case 22:t.mode&1?(vn=(i=vn)||t.memoizedState!==null,or(n,e,t),vn=i):or(n,e,t);break;default:or(n,e,t)}}function b0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new xy),e.forEach(function(i){var r=Py.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function oi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:rn=o.stateNode,fi=!1;break e;case 3:rn=o.stateNode.containerInfo,fi=!0;break e;case 4:rn=o.stateNode.containerInfo,fi=!0;break e}o=o.return}if(rn===null)throw Error(le(160));Yv(s,a,r),rn=null,fi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){kt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,n),e=e.sibling}function $v(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(e,n),Si(n),i&4){try{eo(3,n,n.return),jc(3,n)}catch(_){kt(n,n.return,_)}try{eo(5,n,n.return)}catch(_){kt(n,n.return,_)}}break;case 1:oi(e,n),Si(n),i&512&&t!==null&&$s(t,t.return);break;case 5:if(oi(e,n),Si(n),i&512&&t!==null&&$s(t,t.return),n.flags&32){var r=n.stateNode;try{lo(r,"")}catch(_){kt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&gg(r,s),Rh(o,a);var c=Rh(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?Sg(r,f):h==="dangerouslySetInnerHTML"?xg(r,f):h==="children"?lo(r,f):ad(r,h,f,c)}switch(o){case"input":wh(r,s);break;case"textarea":vg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[_o]=s}catch(_){kt(n,n.return,_)}}break;case 6:if(oi(e,n),Si(n),i&4){if(n.stateNode===null)throw Error(le(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){kt(n,n.return,_)}}break;case 3:if(oi(e,n),Si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(_){kt(n,n.return,_)}break;case 4:oi(e,n),Si(n);break;case 13:oi(e,n),Si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zd=Ot())),i&4&&b0(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(vn=(c=vn)||h,oi(e,n),vn=c):oi(e,n),Si(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(be=n,h=n.child;h!==null;){for(f=be=h;be!==null;){switch(d=be,p=d.child,d.tag){case 0:case 11:case 14:case 15:eo(4,d,d.return);break;case 1:$s(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){kt(i,t,_)}}break;case 5:$s(d,d.return);break;case 22:if(d.memoizedState!==null){R0(f);continue}}p!==null?(p.return=d,be=p):R0(f)}h=h.sibling}e:for(h=null,f=n;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=yg("display",a))}catch(_){kt(n,n.return,_)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){kt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:oi(e,n),Si(n),i&4&&b0(n);break;case 21:break;default:oi(e,n),Si(n)}}function Si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(qv(t)){var i=t;break e}t=t.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=E0(n);sf(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=E0(n);rf(n,o,a);break;default:throw Error(le(161))}}catch(l){kt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Sy(n,e,t){be=n,Kv(n)}function Kv(n,e,t){for(var i=(n.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Jo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||vn;o=Jo;var c=vn;if(Jo=a,(vn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?P0(r):l!==null?(l.return=a,be=l):P0(r);for(;s!==null;)be=s,Kv(s),s=s.sibling;be=r,Jo=o,vn=c}A0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):A0(n)}}function A0(n){for(;be!==null;){var e=be;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vn||jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!vn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:hi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&h0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}h0(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&fo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}vn||e.flags&512&&nf(e)}catch(d){kt(e,e.return,d)}}if(e===n){be=null;break}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}}function R0(n){for(;be!==null;){var e=be;if(e===n){be=null;break}var t=e.sibling;if(t!==null){t.return=e.return,be=t;break}be=e.return}}function P0(n){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{jc(4,e)}catch(l){kt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){kt(e,r,l)}}var s=e.return;try{nf(e)}catch(l){kt(e,s,l)}break;case 5:var a=e.return;try{nf(e)}catch(l){kt(e,a,l)}}}catch(l){kt(e,e.return,l)}if(e===n){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var My=Math.ceil,_c=ir.ReactCurrentDispatcher,Fd=ir.ReactCurrentOwner,ii=ir.ReactCurrentBatchConfig,rt=0,tn=null,Ht=null,an=0,On=0,Ks=Fr(0),qt=0,To=null,as=0,Zc=0,Od=0,to=null,An=null,zd=0,ua=1/0,Xi=null,xc=!1,af=null,Cr=null,Qo=!1,Sr=null,yc=0,no=0,of=null,Vl=-1,Wl=0;function Tn(){return rt&6?Ot():Vl!==-1?Vl:Vl=Ot()}function Lr(n){return n.mode&1?rt&2&&an!==0?an&-an:sy.transition!==null?(Wl===0&&(Wl=Ng()),Wl):(n=dt,n!==0||(n=window.event,n=n===void 0?16:Bg(n.type)),n):1}function _i(n,e,t,i){if(50<no)throw no=0,of=null,Error(le(185));Lo(n,t,i),(!(rt&2)||n!==tn)&&(n===tn&&(!(rt&2)&&(Zc|=t),qt===4&&_r(n,an)),Nn(n,i),t===1&&rt===0&&!(e.mode&1)&&(ua=Ot()+500,Yc&&Or()))}function Nn(n,e){var t=n.callbackNode;s1(n,e);var i=ic(n,n===tn?an:0);if(i===0)t!==null&&Op(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Op(t),e===1)n.tag===0?ry(C0.bind(null,n)):sv(C0.bind(null,n)),ey(function(){!(rt&6)&&Or()}),t=null;else{switch(Ig(i)){case 1:t=hd;break;case 4:t=Lg;break;case 16:t=nc;break;case 536870912:t=Dg;break;default:t=nc}t=i_(t,jv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function jv(n,e){if(Vl=-1,Wl=0,rt&6)throw Error(le(327));var t=n.callbackNode;if(ta()&&n.callbackNode!==t)return null;var i=ic(n,n===tn?an:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Sc(n,i);else{e=i;var r=rt;rt|=2;var s=Jv();(tn!==n||an!==e)&&(Xi=null,ua=Ot()+500,ts(n,e));do try{Ey();break}catch(o){Zv(n,o)}while(!0);Td(),_c.current=s,rt=r,Ht!==null?e=0:(tn=null,an=0,e=qt)}if(e!==0){if(e===2&&(r=Nh(n),r!==0&&(i=r,e=lf(n,r))),e===1)throw t=To,ts(n,0),_r(n,i),Nn(n,Ot()),t;if(e===6)_r(n,i);else{if(r=n.current.alternate,!(i&30)&&!wy(r)&&(e=Sc(n,i),e===2&&(s=Nh(n),s!==0&&(i=s,e=lf(n,s))),e===1))throw t=To,ts(n,0),_r(n,i),Nn(n,Ot()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:$r(n,An,Xi);break;case 3:if(_r(n,i),(i&130023424)===i&&(e=zd+500-Ot(),10<e)){if(ic(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Tn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Gh($r.bind(null,n,An,Xi),e);break}$r(n,An,Xi);break;case 4:if(_r(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-vi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*My(i/1960))-i,10<i){n.timeoutHandle=Gh($r.bind(null,n,An,Xi),i);break}$r(n,An,Xi);break;case 5:$r(n,An,Xi);break;default:throw Error(le(329))}}}return Nn(n,Ot()),n.callbackNode===t?jv.bind(null,n):null}function lf(n,e){var t=to;return n.current.memoizedState.isDehydrated&&(ts(n,e).flags|=256),n=Sc(n,e),n!==2&&(e=An,An=t,e!==null&&cf(e)),n}function cf(n){An===null?An=n:An.push.apply(An,n)}function wy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(n,e){for(e&=~Od,e&=~Zc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-vi(e),i=1<<t;n[t]=-1,e&=~i}}function C0(n){if(rt&6)throw Error(le(327));ta();var e=ic(n,0);if(!(e&1))return Nn(n,Ot()),null;var t=Sc(n,e);if(n.tag!==0&&t===2){var i=Nh(n);i!==0&&(e=i,t=lf(n,i))}if(t===1)throw t=To,ts(n,0),_r(n,e),Nn(n,Ot()),t;if(t===6)throw Error(le(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,$r(n,An,Xi),Nn(n,Ot()),null}function Bd(n,e){var t=rt;rt|=1;try{return n(e)}finally{rt=t,rt===0&&(ua=Ot()+500,Yc&&Or())}}function os(n){Sr!==null&&Sr.tag===0&&!(rt&6)&&ta();var e=rt;rt|=1;var t=ii.transition,i=dt;try{if(ii.transition=null,dt=1,n)return n()}finally{dt=i,ii.transition=t,rt=e,!(rt&6)&&Or()}}function Gd(){On=Ks.current,wt(Ks)}function ts(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Q1(t)),Ht!==null)for(t=Ht.return;t!==null;){var i=t;switch(Sd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lc();break;case 3:la(),wt(Ln),wt(_n),Cd();break;case 5:Pd(i);break;case 4:la();break;case 13:wt(Ct);break;case 19:wt(Ct);break;case 10:Ed(i.type._context);break;case 22:case 23:Gd()}t=t.return}if(tn=n,Ht=n=Dr(n.current,null),an=On=e,qt=0,To=null,Od=Zc=as=0,An=to=null,Qr!==null){for(e=0;e<Qr.length;e++)if(t=Qr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Qr=null}return n}function Zv(n,e){do{var t=Ht;try{if(Td(),Bl.current=vc,gc){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gc=!1}if(ss=0,Qt=Xt=Dt=null,Qa=!1,So=0,Fd.current=null,t===null||t.return===null){qt=1,To=e,Ht=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=an,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=v0(a);if(p!==null){p.flags&=-257,_0(p,a,o,s,e),p.mode&1&&g0(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){g0(s,c,e),Hd();break e}l=Error(le(426))}}else if(At&&o.mode&1){var g=v0(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),_0(g,a,o,s,e),Md(ca(l,o));break e}}s=l=ca(l,o),qt!==4&&(qt=2),to===null?to=[s]:to.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Iv(s,l,e);u0(s,u);break e;case 1:o=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cr===null||!Cr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Uv(s,o,e);u0(s,S);break e}}s=s.return}while(s!==null)}e_(t)}catch(b){e=b,Ht===t&&t!==null&&(Ht=t=t.return);continue}break}while(!0)}function Jv(){var n=_c.current;return _c.current=vc,n===null?vc:n}function Hd(){(qt===0||qt===3||qt===2)&&(qt=4),tn===null||!(as&268435455)&&!(Zc&268435455)||_r(tn,an)}function Sc(n,e){var t=rt;rt|=2;var i=Jv();(tn!==n||an!==e)&&(Xi=null,ts(n,e));do try{Ty();break}catch(r){Zv(n,r)}while(!0);if(Td(),rt=t,_c.current=i,Ht!==null)throw Error(le(261));return tn=null,an=0,qt}function Ty(){for(;Ht!==null;)Qv(Ht)}function Ey(){for(;Ht!==null&&!jx();)Qv(Ht)}function Qv(n){var e=n_(n.alternate,n,On);n.memoizedProps=n.pendingProps,e===null?e_(n):Ht=e,Fd.current=null}function e_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=_y(t,e),t!==null){t.flags&=32767,Ht=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qt=6,Ht=null;return}}else if(t=vy(t,e,On),t!==null){Ht=t;return}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=n}while(e!==null);qt===0&&(qt=5)}function $r(n,e,t){var i=dt,r=ii.transition;try{ii.transition=null,dt=1,by(n,e,t,i)}finally{ii.transition=r,dt=i}return null}function by(n,e,t,i){do ta();while(Sr!==null);if(rt&6)throw Error(le(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(le(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(a1(n,s),n===tn&&(Ht=tn=null,an=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Qo||(Qo=!0,i_(nc,function(){return ta(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var a=dt;dt=1;var o=rt;rt|=4,Fd.current=null,yy(n,t),$v(t,n),q1(zh),rc=!!Oh,zh=Oh=null,n.current=t,Sy(t),Zx(),rt=o,dt=a,ii.transition=s}else n.current=t;if(Qo&&(Qo=!1,Sr=n,yc=r),s=n.pendingLanes,s===0&&(Cr=null),e1(t.stateNode),Nn(n,Ot()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(xc)throw xc=!1,n=af,af=null,n;return yc&1&&n.tag!==0&&ta(),s=n.pendingLanes,s&1?n===of?no++:(no=0,of=n):no=0,Or(),null}function ta(){if(Sr!==null){var n=Ig(yc),e=ii.transition,t=dt;try{if(ii.transition=null,dt=16>n?16:n,Sr===null)var i=!1;else{if(n=Sr,Sr=null,yc=0,rt&6)throw Error(le(331));var r=rt;for(rt|=4,be=n.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:eo(8,h,s)}var f=h.child;if(f!==null)f.return=h,be=f;else for(;be!==null;){h=be;var d=h.sibling,p=h.return;if(Xv(h),h===c){be=null;break}if(d!==null){d.return=p,be=d;break}be=p}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:eo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var v=n.current;for(be=v;be!==null;){a=be;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,be=y;else e:for(a=v;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:jc(9,o)}}catch(b){kt(o,o.return,b)}if(o===a){be=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,be=S;break e}be=o.return}}if(rt=r,Or(),Li&&typeof Li.onPostCommitFiberRoot=="function")try{Li.onPostCommitFiberRoot(Hc,n)}catch{}i=!0}return i}finally{dt=t,ii.transition=e}}return!1}function L0(n,e,t){e=ca(t,e),e=Iv(n,e,1),n=Pr(n,e,1),e=Tn(),n!==null&&(Lo(n,1,e),Nn(n,e))}function kt(n,e,t){if(n.tag===3)L0(n,n,t);else for(;e!==null;){if(e.tag===3){L0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){n=ca(t,n),n=Uv(e,n,1),e=Pr(e,n,1),n=Tn(),e!==null&&(Lo(e,1,n),Nn(e,n));break}}e=e.return}}function Ay(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Tn(),n.pingedLanes|=n.suspendedLanes&t,tn===n&&(an&t)===t&&(qt===4||qt===3&&(an&130023424)===an&&500>Ot()-zd?ts(n,0):Od|=t),Nn(n,e)}function t_(n,e){e===0&&(n.mode&1?(e=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):e=1);var t=Tn();n=tr(n,e),n!==null&&(Lo(n,e,t),Nn(n,t))}function Ry(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),t_(n,t)}function Py(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),t_(n,t)}var n_;n_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ln.current)Pn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Pn=!1,gy(n,e,t);Pn=!!(n.flags&131072)}else Pn=!1,At&&e.flags&1048576&&av(e,hc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Hl(n,e),n=e.pendingProps;var r=sa(e,_n.current);ea(e,t),r=Dd(null,e,i,n,r,t);var s=Nd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dn(i)?(s=!0,cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ad(e),r.updater=Kc,e.stateNode=r,r._reactInternals=e,$h(e,i,n,t),e=Zh(null,e,i,!0,s,t)):(e.tag=0,At&&s&&yd(e),Mn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Hl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ly(i),n=hi(i,n),r){case 0:e=jh(null,e,i,n,t);break e;case 1:e=S0(null,e,i,n,t);break e;case 11:e=x0(null,e,i,n,t);break e;case 14:e=y0(null,e,i,hi(i.type,n),t);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),jh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),S0(n,e,i,r,t);case 3:e:{if(zv(e),n===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fv(n,e),pc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ca(Error(le(423)),e),e=M0(n,e,i,t,r);break e}else if(i!==r){r=ca(Error(le(424)),e),e=M0(n,e,i,t,r);break e}else for(Bn=Rr(e.stateNode.containerInfo.firstChild),Gn=e,At=!0,di=null,t=uv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(aa(),i===r){e=nr(n,e,t);break e}Mn(n,e,i,t)}e=e.child}return e;case 5:return dv(e),n===null&&Xh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Bh(i,r)?a=null:s!==null&&Bh(i,s)&&(e.flags|=32),Ov(n,e),Mn(n,e,a,t),e.child;case 6:return n===null&&Xh(e),null;case 13:return Bv(n,e,t);case 4:return Rd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=oa(e,null,i,t):Mn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),x0(n,e,i,r,t);case 7:return Mn(n,e,e.pendingProps,t),e.child;case 8:return Mn(n,e,e.pendingProps.children,t),e.child;case 12:return Mn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(fc,i._currentValue),i._currentValue=a,s!==null)if(xi(s.value,a)){if(s.children===r.children&&!Ln.current){e=nr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),qh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),qh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Mn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ea(e,t),r=ri(r),i=i(r),e.flags|=1,Mn(n,e,i,t),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),y0(n,e,i,r,t);case 15:return kv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Hl(n,e),e.tag=1,Dn(i)?(n=!0,cc(e)):n=!1,ea(e,t),Nv(e,i,r),$h(e,i,r,t),Zh(null,e,i,!0,n,t);case 19:return Gv(n,e,t);case 22:return Fv(n,e,t)}throw Error(le(156,e.tag))};function i_(n,e){return Cg(n,e)}function Cy(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,e,t,i){return new Cy(n,e,t,i)}function Vd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ly(n){if(typeof n=="function")return Vd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ld)return 11;if(n===cd)return 14}return 2}function Dr(n,e){var t=n.alternate;return t===null?(t=ni(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Xl(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Vd(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case zs:return ns(t.children,r,s,e);case od:a=8,r|=8;break;case _h:return n=ni(12,t,e,r|2),n.elementType=_h,n.lanes=s,n;case xh:return n=ni(13,t,e,r),n.elementType=xh,n.lanes=s,n;case yh:return n=ni(19,t,e,r),n.elementType=yh,n.lanes=s,n;case dg:return Jc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case hg:a=10;break e;case fg:a=9;break e;case ld:a=11;break e;case cd:a=14;break e;case dr:a=16,i=null;break e}throw Error(le(130,n==null?n:typeof n,""))}return e=ni(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ns(n,e,t,i){return n=ni(7,n,i,e),n.lanes=t,n}function Jc(n,e,t,i){return n=ni(22,n,i,e),n.elementType=dg,n.lanes=t,n.stateNode={isHidden:!1},n}function Iu(n,e,t){return n=ni(6,n,null,e),n.lanes=t,n}function Uu(n,e,t){return e=ni(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Dy(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mu(0),this.expirationTimes=mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wd(n,e,t,i,r,s,a,o,l){return n=new Dy(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(s),n}function Ny(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function r_(n){if(!n)return Ir;n=n._reactInternals;e:{if(fs(n)!==n||n.tag!==1)throw Error(le(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(n.tag===1){var t=n.type;if(Dn(t))return rv(n,t,e)}return e}function s_(n,e,t,i,r,s,a,o,l){return n=Wd(t,i,!0,n,r,s,a,o,l),n.context=r_(null),t=n.current,i=Tn(),r=Lr(t),s=ji(i,r),s.callback=e??null,Pr(t,s,r),n.current.lanes=r,Lo(n,r,i),Nn(n,i),n}function Qc(n,e,t,i){var r=e.current,s=Tn(),a=Lr(r);return t=r_(t),e.context===null?e.context=t:e.pendingContext=t,e=ji(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Pr(r,e,a),n!==null&&(_i(n,r,a,s),zl(n,r,a)),a}function Mc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function D0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Xd(n,e){D0(n,e),(n=n.alternate)&&D0(n,e)}function Iy(){return null}var a_=typeof reportError=="function"?reportError:function(n){console.error(n)};function qd(n){this._internalRoot=n}eu.prototype.render=qd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(le(409));Qc(n,e,null,null)};eu.prototype.unmount=qd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;os(function(){Qc(null,n,null,null)}),e[er]=null}};function eu(n){this._internalRoot=n}eu.prototype.unstable_scheduleHydration=function(n){if(n){var e=Fg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<vr.length&&e!==0&&e<vr[t].priority;t++);vr.splice(t,0,n),t===0&&zg(n)}};function Yd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function N0(){}function Uy(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Mc(a);s.call(c)}}var a=s_(e,i,n,0,null,!1,!1,"",N0);return n._reactRootContainer=a,n[er]=a.current,go(n.nodeType===8?n.parentNode:n),os(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Mc(l);o.call(c)}}var l=Wd(n,0,!1,null,null,!1,!1,"",N0);return n._reactRootContainer=l,n[er]=l.current,go(n.nodeType===8?n.parentNode:n),os(function(){Qc(e,l,t,i)}),l}function nu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Mc(a);o.call(l)}}Qc(e,a,n,r)}else a=Uy(t,e,n,r,i);return Mc(a)}Ug=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Wa(e.pendingLanes);t!==0&&(fd(e,t|1),Nn(e,Ot()),!(rt&6)&&(ua=Ot()+500,Or()))}break;case 13:os(function(){var i=tr(n,1);if(i!==null){var r=Tn();_i(i,n,1,r)}}),Xd(n,1)}};dd=function(n){if(n.tag===13){var e=tr(n,134217728);if(e!==null){var t=Tn();_i(e,n,134217728,t)}Xd(n,134217728)}};kg=function(n){if(n.tag===13){var e=Lr(n),t=tr(n,e);if(t!==null){var i=Tn();_i(t,n,e,i)}Xd(n,e)}};Fg=function(){return dt};Og=function(n,e){var t=dt;try{return dt=n,e()}finally{dt=t}};Ch=function(n,e,t){switch(e){case"input":if(wh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=qc(i);if(!r)throw Error(le(90));mg(i),wh(i,r)}}}break;case"textarea":vg(n,t);break;case"select":e=t.value,e!=null&&js(n,!!t.multiple,e,!1)}};Tg=Bd;Eg=os;var ky={usingClientEntryPoint:!1,Events:[No,Vs,qc,Mg,wg,Bd]},Ca={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Rg(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Hc=el.inject(Fy),Li=el}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;Vn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(le(200));return Ny(n,e,null,t)};Vn.createRoot=function(n,e){if(!Yd(n))throw Error(le(299));var t=!1,i="",r=a_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wd(n,1,!1,null,null,t,!1,i,r),n[er]=e.current,go(n.nodeType===8?n.parentNode:n),new qd(e)};Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(le(188)):(n=Object.keys(n).join(","),Error(le(268,n)));return n=Rg(e),n=n===null?null:n.stateNode,n};Vn.flushSync=function(n){return os(n)};Vn.hydrate=function(n,e,t){if(!tu(e))throw Error(le(200));return nu(null,n,e,!0,t)};Vn.hydrateRoot=function(n,e,t){if(!Yd(n))throw Error(le(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=a_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=s_(e,null,n,1,t??null,r,!1,s,a),n[er]=e.current,go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new eu(e)};Vn.render=function(n,e,t){if(!tu(e))throw Error(le(200));return nu(null,n,e,!1,t)};Vn.unmountComponentAtNode=function(n){if(!tu(n))throw Error(le(40));return n._reactRootContainer?(os(function(){nu(null,null,n,!1,function(){n._reactRootContainer=null,n[er]=null})}),!0):!1};Vn.unstable_batchedUpdates=Bd;Vn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!tu(t))throw Error(le(200));if(n==null||n._reactInternals===void 0)throw Error(le(38));return nu(n,e,t,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function o_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o_)}catch(n){console.error(n)}}o_(),og.exports=Vn;var Oy=og.exports,l_,I0=Oy;l_=I0.createRoot,I0.hydrateRoot;class zy{constructor(){this.ctx=null,this.noiseBuf=null,this.crowdGain=null,this.crowdFilter=null,this.muted=!1}unlock(){if(!this.muted){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.buildNoiseBuffer(),this.startAmbience()}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}}toggleMute(){return this.muted=!this.muted,this.crowdGain&&this.ctx&&this.crowdGain.gain.setTargetAtTime(this.muted?0:.038,this.ctx.currentTime,.08),this.muted||this.unlock(),this.muted}buildNoiseBuffer(){if(!this.ctx)return;const e=this.ctx.sampleRate,t=e*3,i=this.ctx.createBuffer(1,t,e),r=i.getChannelData(0);let s=0,a=0,o=0;for(let l=0;l<t;l++){const c=Math.random()*2-1;s=.99765*s+c*.099046,a=.963*a+c*.2965164,o=.57*o+c*1.0526913,r[l]=(s+a+o+c*.1848)*.16}this.noiseBuf=i}startAmbience(){if(!this.ctx||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=480,t.Q.value=.65;const i=this.ctx.createGain();i.gain.value=this.muted?0:.038,e.connect(t),t.connect(i),i.connect(this.ctx.destination),e.start(),this.crowdFilter=t,this.crowdGain=i}setTension(e){if(!this.ctx||!this.crowdGain||!this.crowdFilter||this.muted)return;const t=this.ctx.currentTime,i=Math.max(0,Math.min(1,e));this.crowdGain.gain.setTargetAtTime(.034+i*.042,t,.18),this.crowdFilter.frequency.setTargetAtTime(460+i*340,t,.18)}whistle(){if(this.unlock(),!this.ctx||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createGain();t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(.11,e+.03),t.gain.setValueAtTime(.1,e+.34),t.gain.exponentialRampToValueAtTime(1e-4,e+.55),t.connect(this.ctx.destination);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=38,r.gain.value=45,i.connect(r);for(const s of[2790,3015]){const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,e),r.connect(a.frequency),a.connect(t),a.start(e),a.stop(e+.56)}i.start(e),i.stop(e+.56)}footstep(e=.7){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=.045*e,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(115,t),r.frequency.exponentialRampToValueAtTime(42,t+.065),s.gain.setValueAtTime(i,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.075),r.connect(s),s.connect(this.ctx.destination),r.start(t),r.stop(t+.08);const a=this.ctx.createBufferSource();a.buffer=this.noiseBuf;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1400;const l=this.ctx.createGain();l.gain.setValueAtTime(i*.45,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.05),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t,Math.random()*1.5,.06)}uiTick(e=520){if(this.unlock(),!this.ctx||this.muted)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,t),i.frequency.exponentialRampToValueAtTime(e*1.25,t+.04),r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.045),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.05)}shuttleLock(e){if(this.unlock(),!this.ctx||this.muted)return;const t=this.ctx.currentTime;if(e==="perfect")for(const[i,r]of[740,1110].entries()){const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(r,t+i*.035),a.gain.setValueAtTime(.11,t+i*.035),a.gain.exponentialRampToValueAtTime(1e-4,t+i*.035+.18),s.connect(a),a.connect(this.ctx.destination),s.start(t+i*.035),s.stop(t+i*.035+.19)}else if(e==="good"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(580,t),r.gain.setValueAtTime(.08,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.11),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.12)}else{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(190,t),i.frequency.exponentialRampToValueAtTime(110,t+.14),r.gain.setValueAtTime(.075,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.15),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.16)}}kick(e,t){if(this.unlock(),!this.ctx||!this.noiseBuf||this.muted)return;const i=this.ctx.currentTime,r=t==="panenka"?.38:t==="power"?Math.max(.85,Math.min(1.22,.78+e*.45)):Math.max(.55,Math.min(1.02,.58+e*.42)),s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t==="panenka"?135:155*r,i),s.frequency.exponentialRampToValueAtTime(36,i+.14),a.gain.setValueAtTime(.32*r,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.17),s.connect(a),a.connect(this.ctx.destination),s.start(i),s.stop(i+.18);const o=this.ctx.createBufferSource();o.buffer=this.noiseBuf;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=t==="placed"?820:t==="power"?1180:980,l.Q.value=1.3;const c=this.ctx.createGain();c.gain.setValueAtTime(.18*r,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.085),o.connect(l),l.connect(c),c.connect(this.ctx.destination),o.start(i,Math.random(),.1)}gloveSave(e=!0){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=e?1:.7,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(210,t),r.frequency.exponentialRampToValueAtTime(68,t+.09),s.gain.setValueAtTime(.2*i,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.1),r.connect(s),s.connect(this.ctx.destination),r.start(t),r.stop(t+.11);const a=this.ctx.createBufferSource();a.buffer=this.noiseBuf;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1650,o.Q.value=1.1;const l=this.ctx.createGain();l.gain.setValueAtTime(.16*i,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.08),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t,Math.random(),.09)}postClang(){if(!this.ctx||this.muted)return;const e=this.ctx.currentTime;[392,818,1285,1940].forEach((i,r)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type=r===0?"triangle":"sine",s.frequency.setValueAtTime(i,e),s.frequency.exponentialRampToValueAtTime(i*.985,e+.48),a.gain.setValueAtTime(.13/(r+1),e),a.gain.exponentialRampToValueAtTime(1e-4,e+.45-r*.06),s.connect(a),a.connect(this.ctx.destination),s.start(e),s.stop(e+.5)})}netSwish(){if(!this.ctx||!this.noiseBuf||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuf;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(1750,e),i.frequency.exponentialRampToValueAtTime(520,e+.28),i.Q.value=.9;const r=this.ctx.createGain();r.gain.setValueAtTime(.001,e),r.gain.linearRampToValueAtTime(.14,e+.035),r.gain.exponentialRampToValueAtTime(1e-4,e+.32),t.connect(i),i.connect(r),r.connect(this.ctx.destination),t.start(e,Math.random(),.34)}crowdReaction(e){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",e==="cheer"?(r.frequency.setValueAtTime(580,t),r.frequency.linearRampToValueAtTime(1180,t+.25),r.frequency.exponentialRampToValueAtTime(640,t+2.1),r.Q.value=.55):(r.frequency.setValueAtTime(720,t),r.frequency.exponentialRampToValueAtTime(340,t+1.2),r.Q.value=.95);const s=this.ctx.createGain();s.gain.setValueAtTime(.001,t),s.gain.linearRampToValueAtTime(e==="cheer"?.24:.15,t+.14),s.gain.exponentialRampToValueAtTime(1e-4,t+(e==="cheer"?2.25:1.45)),i.connect(r),r.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+2.35)}}const mt=new zy;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="187",By=0,U0=1,Gy=2,ql=1,Kd=2,qa=3,ls=0,In=1,Rn=2,na=0,io=1,wc=2,k0=3,F0=4,Hy=5,ks=100,Vy=101,Wy=102,Xy=103,qy=104,Yy=200,$y=201,Ky=202,jy=203,c_=204,u_=205,Zy=206,Jy=207,Qy=208,eS=209,tS=210,nS=211,iS=212,rS=213,sS=214,uf=0,hf=1,ff=2,Eo=3,df=4,pf=5,mf=6,gf=7,jd=0,aS=1,oS=2,Zi=0,h_=1,f_=2,d_=3,iu=4,p_=5,m_=6,g_=7,v_=300,ha=301,bo=302,ku=303,Fu=304,Tc=1e3,Ki=1001,vf=1002,sn=1003,lS=1004,tl=1005,Cn=1006,Ou=1007,Mr=1008,zn=1009,__=1010,x_=1011,Ao=1012,Zd=1013,Ii=1014,mi=1015,Ui=1016,Jd=1017,Qd=1018,fa=1020,y_=35902,S_=35899,M_=1021,w_=1022,Pi=1023,Ur=1026,wr=1027,ep=1028,tp=1029,cs=1030,np=1031,ip=1033,Yl=33776,$l=33777,Kl=33778,jl=33779,_f=35840,xf=35841,yf=35842,Sf=35843,Mf=36196,wf=37492,Tf=37496,Ef=37488,bf=37489,Ec=37490,Af=37491,Rf=37808,Pf=37809,Cf=37810,Lf=37811,Df=37812,Nf=37813,If=37814,Uf=37815,kf=37816,Ff=37817,Of=37818,zf=37819,Bf=37820,Gf=37821,Hf=36492,Vf=36494,Wf=36495,Xf=36283,qf=36284,bc=36285,Yf=36286,cS=3200,Ac=0,uS=1,xr="",en="srgb",Rc="srgb-linear",Pc="linear",ft="srgb",zu=7680,hS=519,fS=512,dS=513,pS=514,T_=515,mS=516,gS=517,E_=518,b_=519,A_=35044,O0=35048,z0="300 es",gi=2e3,Ro=2001;function vS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _S(){const n=Cc("canvas");return n.style.display="block",n}const B0={};function Lc(...n){const e="THREE."+n.shift();console.log(e,...n)}function R_(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ze(...n){n=R_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function st(...n){n=R_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zl(...n){const e=n.join(" ");e in B0||(B0[e]=!0,ze(...n))}function xS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const yS={[uf]:uf,[ff]:mf,[df]:df,[Eo]:pf,[hf]:hf,[mf]:ff,[gf]:gf,[pf]:Eo};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=Math.PI/180,$f=180/Math.PI;function ps(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function SS(n,e){return(n%e+e)%e}function Gu(n,e,t){return(1-t)*n+t*e}function MS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ru(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function P_(n,e){if(e.constructor===Float32Array)return n;const t=ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function C_(n,e){if(e.constructor===Float32Array)return n;const t=ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const hp=class hp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hp.prototype.isVector2=!0;let Be=hp;class xa{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],m=s[a+2],_=s[a+3];if(f!==_||l!==d||c!==p||h!==m){let g=l*d+c*p+h*m+f*_;g<0&&(d=-d,p=-p,m=-m,_=-_,g=-g);let u=1-o;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);u=Math.sin(u*v)/y,o=Math.sin(o*v)/y,l=l*u+d*o,c=c*u+p*o,h=h*u+m*o,f=f*u+_*o}else{l=l*u+d*o,c=c*u+p*o,h=h*u+m*o,f=f*u+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*f+l*p-c*d,e[t+1]=l*m+h*d+c*f-o*p,e[t+2]=c*m+h*p+o*d-l*f,e[t+3]=h*m-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f-d*p*m;break;case"YXZ":this._x=d*h*f+c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f+d*p*m;break;case"ZXY":this._x=d*h*f-c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f-d*p*m;break;case"ZYX":this._x=d*h*f-c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f+d*p*m;break;case"YZX":this._x=d*h*f+c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f-d*p*m;break;case"XZY":this._x=d*h*f-c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f+d*p*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fp=class fp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(G0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(G0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;let k=fp;const Hu=new k,G0=new xa,dp=class dp{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],m=i[8],_=r[0],g=r[3],u=r[6],v=r[1],y=r[4],S=r[7],b=r[2],T=r[5],x=r[8];return s[0]=a*_+o*v+l*b,s[3]=a*g+o*y+l*T,s[6]=a*u+o*S+l*x,s[1]=c*_+h*v+f*b,s[4]=c*g+h*y+f*T,s[7]=c*u+h*S+f*x,s[2]=d*_+p*v+m*b,s[5]=d*g+p*y+m*T,s[8]=d*u+p*S+m*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*f+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Zl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vu.makeScale(e,t)),this}rotate(e){return Zl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vu.makeRotation(-e)),this}translate(e,t){return Zl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let Ve=dp;const Vu=new Ve,H0=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wS(){const n={enabled:!0,workingColorSpace:Rc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Ji(r.r),r.g=Ji(r.g),r.b=Ji(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=ia(r.r),r.g=ia(r.g),r.b=ia(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?Pc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rc]:{primaries:e,whitePoint:i,transfer:Pc,toXYZ:H0,fromXYZ:V0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:H0,fromXYZ:V0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const et=wS();function Ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class TS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Cc("canvas")),_s.width=e.width,_s.height=e.height;const r=_s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ji(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ji(t[i]/255)*255):t[i]=Ji(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class rp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wu(r[a].image)):s.push(Wu(r[a]))}else s=Wu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?TS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let bS=0;const Xu=new k;class on extends ds{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=Ki,r=Ki,s=Cn,a=Mr,o=Pi,l=zn,c=on.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ps(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xu).x}get height(){return this.source.getSize(Xu).y}get depth(){return this.source.getSize(Xu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tc:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tc:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=v_;on.DEFAULT_ANISOTROPY=1;const pp=class pp{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],m=l[9],_=l[2],g=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(p+1)/2,b=(u+1)/2,T=(h+d)/4,x=(f+_)/4,M=(m+g)/4;return y>S&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=x/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=M/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=x/s,r=M/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pp.prototype.isVector4=!0;let Lt=pp;class AS extends ds{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new on({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new rp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends AS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class L_ extends on{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RS extends on{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Bc=class Bc{constructor(e,t,i,r,s,a,o,l,c,h,f,d,p,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,d,p,m,_,g)}set(e,t,i,r,s,a,o,l,c,h,f,d,p,m,_,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=m,u[11]=_,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*f,m=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,m=c*h,_=c*f;t[0]=d+_*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,m=c*h,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,m=o*h,_=o*f;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*f,t[8]=m*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+m,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=a*h,t[9]=p*f-m,t[2]=m*f-p,t[6]=o*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PS,e,CS)}lookAt(e,t,i){const r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),lr.crossVectors(i,kn),lr.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),lr.crossVectors(i,kn)),lr.normalize(),nl.crossVectors(kn,lr),r[0]=lr.x,r[4]=nl.x,r[8]=kn.x,r[1]=lr.y,r[5]=nl.y,r[9]=kn.y,r[2]=lr.z,r[6]=nl.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],m=i[2],_=i[6],g=i[10],u=i[14],v=i[3],y=i[7],S=i[11],b=i[15],T=r[0],x=r[4],M=r[8],D=r[12],A=r[1],C=r[5],P=r[9],N=r[13],R=r[2],U=r[6],q=r[10],z=r[14],G=r[3],O=r[7],X=r[11],J=r[15];return s[0]=a*T+o*A+l*R+c*G,s[4]=a*x+o*C+l*U+c*O,s[8]=a*M+o*P+l*q+c*X,s[12]=a*D+o*N+l*z+c*J,s[1]=h*T+f*A+d*R+p*G,s[5]=h*x+f*C+d*U+p*O,s[9]=h*M+f*P+d*q+p*X,s[13]=h*D+f*N+d*z+p*J,s[2]=m*T+_*A+g*R+u*G,s[6]=m*x+_*C+g*U+u*O,s[10]=m*M+_*P+g*q+u*X,s[14]=m*D+_*N+g*z+u*J,s[3]=v*T+y*A+S*R+b*G,s[7]=v*x+y*C+S*U+b*O,s[11]=v*M+y*P+S*q+b*X,s[15]=v*D+y*N+S*z+b*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],m=e[3],_=e[7],g=e[11],u=e[15],v=l*p-c*d,y=o*p-c*f,S=o*d-l*f,b=a*p-c*h,T=a*d-l*h,x=a*f-o*h;return t*(_*v-g*y+u*S)-i*(m*v-g*b+u*T)+r*(m*y-_*b+u*x)-s*(m*S-_*T+g*x)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],m=e[12],_=e[13],g=e[14],u=e[15],v=t*o-i*a,y=t*l-r*a,S=t*c-s*a,b=i*l-r*o,T=i*c-s*o,x=r*c-s*l,M=h*_-f*m,D=h*g-d*m,A=h*u-p*m,C=f*g-d*_,P=f*u-p*_,N=d*u-p*g,R=v*N-y*P+S*C+b*A-T*D+x*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=(o*N-l*P+c*C)*U,e[1]=(r*P-i*N-s*C)*U,e[2]=(_*x-g*T+u*b)*U,e[3]=(d*T-f*x-p*b)*U,e[4]=(l*A-a*N-c*D)*U,e[5]=(t*N-r*A+s*D)*U,e[6]=(g*S-m*x-u*y)*U,e[7]=(h*x-d*S+p*y)*U,e[8]=(a*P-o*A+c*M)*U,e[9]=(i*A-t*P-s*M)*U,e[10]=(m*T-_*S+u*v)*U,e[11]=(f*S-h*T-p*v)*U,e[12]=(o*D-a*C-l*M)*U,e[13]=(t*C-i*D+r*M)*U,e[14]=(_*y-m*b-g*v)*U,e[15]=(h*b-f*y+d*v)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,d=s*c,p=s*h,m=s*f,_=a*h,g=a*f,u=o*f,v=l*c,y=l*h,S=l*f,b=i.x,T=i.y,x=i.z;return r[0]=(1-(_+u))*b,r[1]=(p+S)*b,r[2]=(m-y)*b,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+u))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(m+y)*x,r[9]=(g-v)*x,r[10]=(1-(d+_))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),l=xs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),li.copy(this);const c=1/a,h=1/o,f=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,t.setFromRotationMatrix(li),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=gi,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===gi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ro)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gi,l=!1){const c=this.elements,h=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===gi)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ro)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Bc.prototype.isMatrix4=!0;let at=Bc;const xs=new k,li=new at,PS=new k(0,0,0),CS=new k(1,1,1),lr=new k,nl=new k,kn=new k,W0=new at,X0=new xa;class ki{constructor(e=0,t=0,i=0,r=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return W0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return X0.setFromEuler(this),this.setFromQuaternion(X0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class D_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LS=0;const q0=new k,ys=new xa,Oi=new at,il=new k,La=new k,DS=new k,NS=new xa,Y0=new k(1,0,0),$0=new k(0,1,0),K0=new k(0,0,1),j0={type:"added"},IS={type:"removed"},Ss={type:"childadded",child:null},qu={type:"childremoved",child:null};class Nt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new k,t=new ki,i=new xa,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ve}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Y0,e)}rotateY(e){return this.rotateOnAxis($0,e)}rotateZ(e){return this.rotateOnAxis(K0,e)}translateOnAxis(e,t){return q0.copy(e).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Y0,e)}translateY(e){return this.translateOnAxis($0,e)}translateZ(e){return this.translateOnAxis(K0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?il.copy(e):il.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(La,il,this.up):Oi.lookAt(il,La,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Oi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j0),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IS),qu.child=e,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j0),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,DS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,NS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nt.DEFAULT_UP=new k(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tt extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const US={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),u=this._getHandJoint(c,_);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(US)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},rl={h:0,s:0,l:0};function $u(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=SS(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=$u(a,s,e+1/3),this.g=$u(a,s,e),this.b=$u(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=N_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return et.workingToColorSpace(pn.copy(this),e),Math.round(Ke(pn.r*255,0,255))*65536+Math.round(Ke(pn.g*255,0,255))*256+Math.round(Ke(pn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(pn.copy(this),t);const i=pn.r,r=pn.g,s=pn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=en){et.workingToColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,r=pn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(rl);const i=Gu(cr.h,rl.h,t),r=Gu(cr.s,rl.s,t),s=Gu(cr.l,rl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Fe;Fe.NAMES=N_;class sp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new sp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class I_ extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ci=new k,zi=new k,Ku=new k,Bi=new k,Ms=new k,ws=new k,Z0=new k,ju=new k,Zu=new k,Ju=new k,Qu=new Lt,eh=new Lt,th=new Lt;class ti{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ci.subVectors(e,t),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ci.subVectors(r,t),zi.subVectors(i,t),Ku.subVectors(e,t);const a=ci.dot(ci),o=ci.dot(zi),l=ci.dot(Ku),c=zi.dot(zi),h=zi.dot(Ku),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Qu.setScalar(0),eh.setScalar(0),th.setScalar(0),Qu.fromBufferAttribute(e,t),eh.fromBufferAttribute(e,i),th.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qu,s.x),a.addScaledVector(eh,s.y),a.addScaledVector(th,s.z),a}static isFrontFacing(e,t,i,r){return ci.subVectors(i,t),zi.subVectors(e,t),ci.cross(zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ci.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ms.subVectors(r,i),ws.subVectors(s,i),ju.subVectors(e,i);const l=Ms.dot(ju),c=ws.dot(ju);if(l<=0&&c<=0)return t.copy(i);Zu.subVectors(e,r);const h=Ms.dot(Zu),f=ws.dot(Zu);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Ms,a);Ju.subVectors(e,s);const p=Ms.dot(Ju),m=ws.dot(Ju);if(m>=0&&p<=m)return t.copy(s);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(ws,o);const g=h*m-p*f;if(g<=0&&f-h>=0&&p-m>=0)return Z0.subVectors(s,r),o=(f-h)/(f-h+(p-m)),t.copy(r).addScaledVector(Z0,o);const u=1/(g+_+d);return a=_*u,o=d*u,t.copy(i).addScaledVector(Ms,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ms{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(s,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),al.subVectors(this.max,Da),Ts.subVectors(e.a,Da),Es.subVectors(e.b,Da),bs.subVectors(e.c,Da),ur.subVectors(Es,Ts),hr.subVectors(bs,Es),Hr.subVectors(Ts,bs);let t=[0,-ur.z,ur.y,0,-hr.z,hr.y,0,-Hr.z,Hr.y,ur.z,0,-ur.x,hr.z,0,-hr.x,Hr.z,0,-Hr.x,-ur.y,ur.x,0,-hr.y,hr.x,0,-Hr.y,Hr.x,0];return!nh(t,Ts,Es,bs,al)||(t=[1,0,0,0,1,0,0,0,1],!nh(t,Ts,Es,bs,al))?!1:(ol.crossVectors(ur,hr),t=[ol.x,ol.y,ol.z],nh(t,Ts,Es,bs,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new k,new k,new k,new k,new k,new k,new k,new k],ui=new k,sl=new ms,Ts=new k,Es=new k,bs=new k,ur=new k,hr=new k,Hr=new k,Da=new k,al=new k,ol=new k,Vr=new k;function nh(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vr.fromArray(n,s);const o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=t.dot(Vr),h=i.dot(Vr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gt=new k,ll=new Be;let kS=0;class Un extends ds{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=A_,this.updateRanges=[],this.gpuType=mi,this.version=0,this._normalizationScale=e!==void 0?ru(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):P_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):C_(e,this.array)}}class U_ extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class k_ extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}const FS=new ms,Na=new k,ih=new k;class gs{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):FS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(ih)),this.expandByPoint(Na.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let OS=0;const Kn=new at,rh=new Nt,As=new k,Fn=new ms,Ia=new ms,Jt=new k;class zt extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vS(e)?k_:U_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,i){return Kn.makeTranslation(e,t,i),this.applyMatrix4(Kn),this}scale(e,t,i){return Kn.makeScale(e,t,i),this.applyMatrix4(Kn),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Fn.min,Ia.min),Fn.expandByPoint(Jt),Jt.addVectors(Fn.max,Ia.max),Fn.expandByPoint(Jt)):(Fn.expandByPoint(Ia.min),Fn.expandByPoint(Ia.max))}Fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Jt.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),Jt.add(As)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new k,l[D]=new k;const h=new k,f=new k,d=new k,p=new Be,m=new Be,_=new Be,g=new k,u=new k;function v(D,A,C){c[D]=c[A]=c[C]=1,h.fromBufferAttribute(i,D),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,C),p.fromBufferAttribute(s,D),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,C),f.sub(h),d.sub(h),m.sub(p),_.sub(p);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(P),u.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(P),o[D].add(g),o[A].add(g),o[C].add(g),l[D].add(u),l[A].add(u),l[C].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,A=y.length;D<A;++D){const C=y[D],P=C.start,N=C.count;for(let R=P,U=P+N;R<U;R+=3)v(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const S=new k,b=new k,T=new k,x=new k;function M(D){T.fromBufferAttribute(r,D),x.copy(T);const A=o[D];S.copy(A),S.sub(T.multiplyScalar(T.dot(A))).normalize(),b.crossVectors(x,A);const P=b.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,P)}for(let D=0,A=i.count;D<A;++D)c[D]&&M(D);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,f=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)d[m++]=c[p++]}return new Un(d,h,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=A_,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=J0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=J0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function J0(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ps()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const yn=new k;class Dc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?ru(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Lc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):P_(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):C_(e,this.data.array)}}const sh=new k,BS=new k,GS=new Ve;class mr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sh.subVectors(i,t).cross(BS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(sh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||GS.getNormalMatrix(e),r=this.coplanarPoint(sh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let HS=0;class rr extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=io,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=c_,this.blendDst=u_,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zu,this.stencilZFail=zu,this.stencilZPass=zu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class F_ extends rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rs;const Ua=new k,Ps=new k,Cs=new k,Ls=new Be,ka=new Be,O_=new at,cl=new k,Fa=new k,ul=new k,Q0=new Be,ah=new Be,em=new Be;class VS extends Nt{constructor(e=new F_){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zS(t,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Dc(i,3,0,!1)),Rs.setAttribute("uv",new Dc(i,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),O_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Cs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;hl(cl.set(-.5,-.5,0),Cs,a,Ps,r,s),hl(Fa.set(.5,-.5,0),Cs,a,Ps,r,s),hl(ul.set(.5,.5,0),Cs,a,Ps,r,s),Q0.set(0,0),ah.set(1,0),em.set(1,1);let o=e.ray.intersectTriangle(cl,Fa,ul,!1,Ua);if(o===null&&(hl(Fa.set(-.5,.5,0),Cs,a,Ps,r,s),ah.set(0,1),o=e.ray.intersectTriangle(cl,ul,Fa,!1,Ua),o===null))return;const l=e.ray.origin.distanceTo(Ua);l<e.near||l>e.far||t.push({distance:l,point:Ua.clone(),uv:ti.getInterpolation(Ua,cl,Fa,ul,Q0,ah,em,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function hl(n,e,t,i,r,s){Ls.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ka.x=s*Ls.x-r*Ls.y,ka.y=r*Ls.x+s*Ls.y):ka.copy(Ls),n.copy(e),n.x+=ka.x,n.y+=ka.y,n.applyMatrix4(O_)}const Hi=new k,oh=new k,fl=new k,dl=new k;class ap{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oh.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),dl.copy(this.origin).sub(oh);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fl),o=dl.dot(this.direction),l=-dl.dot(fl),c=dl.lengthSq(),h=Math.abs(1-a*a);let f,d,p,m;if(h>0)if(f=a*l-o,d=a*o-l,m=s*h,f>=0)if(d>=-m)if(d<=m){const _=1/h;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(oh).addScaledVector(fl,d),p}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,m=t.x-a.x,_=t.y-a.y,g=t.z-a.z,u=i.x-a.x,v=i.y-a.y,y=i.z-a.z,S=Math.abs(l),b=Math.abs(c),T=Math.abs(h);let x,M,D,A,C,P,N,R,U,q,z,G;if(S>=b&&S>=T?(D=l,P=f,U=m,G=u,l>=0?(x=c,M=h,A=d,C=p,N=_,R=g,q=v,z=y):(x=h,M=c,A=p,C=d,N=g,R=_,q=y,z=v)):b>=T?(D=c,P=d,U=_,G=v,c>=0?(x=h,M=l,A=p,C=f,N=g,R=m,q=y,z=u):(x=l,M=h,A=f,C=p,N=m,R=g,q=u,z=y)):(D=h,P=p,U=g,G=y,h>=0?(x=l,M=c,A=f,C=d,N=m,R=_,q=u,z=v):(x=c,M=l,A=d,C=f,N=_,R=m,q=v,z=u)),D===0)return null;const O=x/D,X=M/D,J=1/D,ae=A-O*P,j=C-X*P,V=N-O*U,ie=R-X*U,ue=q-O*G,Te=z-X*G,fe=ue*ie-Te*V,Ue=ae*Te-j*ue,Qe=V*j-ie*ae;if(r){if(fe<0||Ue<0||Qe<0)return null}else if((fe<0||Ue<0||Qe<0)&&(fe>0||Ue>0||Qe>0))return null;const De=fe+Ue+Qe;if(De===0)return null;const Ge=J*(fe*P+Ue*U+Qe*G);return(De>0?Ge<0:Ge>0)?null:this.at(Ge/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ri extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tm=new at,Wr=new ap,pl=new gs,nm=new k,ml=new k,gl=new k,vl=new k,lh=new k,_l=new k,im=new k,xl=new k;class W extends Nt{constructor(e=new zt,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(lh.fromBufferAttribute(f,e),a?_l.addScaledVector(lh,h):_l.addScaledVector(lh.sub(t),h))}t.add(_l)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(pl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(pl,nm)===null||Wr.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(tm.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(tm),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],u=a[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,b=y;S<b;S+=3){const T=o.getX(S),x=o.getX(S+1),M=o.getX(S+2);r=yl(this,u,e,i,c,h,f,T,x,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=m,u=_;g<u;g+=3){const v=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);r=yl(this,a,e,i,c,h,f,v,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],u=a[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,b=y;S<b;S+=3){const T=S,x=S+1,M=S+2;r=yl(this,u,e,i,c,h,f,T,x,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,u=_;g<u;g+=3){const v=g,y=g+1,S=g+2;r=yl(this,a,e,i,c,h,f,v,y,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function WS(n,e,t,i,r,s,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ls,o),l===null)return null;xl.copy(o),xl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xl);return c<t.near||c>t.far?null:{distance:c,point:xl.clone(),object:n}}function yl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ml),n.getVertexPosition(l,gl),n.getVertexPosition(c,vl);const h=WS(n,e,t,i,ml,gl,vl,im);if(h){const f=new k;ti.getBarycoord(im,ml,gl,vl,f),r&&(h.uv=ti.getInterpolatedAttribute(r,o,l,c,f,new Be)),s&&(h.uv1=ti.getInterpolatedAttribute(s,o,l,c,f,new Be)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,l,c,f,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};ti.getNormal(ml,gl,vl,d.normal),h.face=d,h.barycoord=f}return h}class z_ extends on{constructor(e=null,t=1,i=1,r,s,a,o,l,c=sn,h=sn,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rm extends Un{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new at,sm=new at,Sl=[],am=new ms,XS=new at,Oa=new W,za=new gs;class om extends W{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,XS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ms),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),am.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(am)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),za.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(za)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Oa.geometry=this.geometry,Oa.material=this.material,Oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(i),e.ray.intersectsSphere(za)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ds),sm.multiplyMatrices(i,Ds),Oa.matrixWorld=sm,Oa.raycast(e,Sl);for(let a=0,o=Sl.length;a<o;a++){const l=Sl[a];l.instanceId=s,l.object=this,t.push(l)}Sl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new z_(new Float32Array(r*this.count),r,this.count,ep,mi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xr=new gs,qS=new Be(.5,.5),Ml=new k;class Po{constructor(e=new mr,t=new mr,i=new mr,r=new mr,s=new mr,a=new mr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],p=s[7],m=s[8],_=s[9],g=s[10],u=s[11],v=s[12],y=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-a,p-h,u-m,b-v).normalize(),r[1].setComponents(c+a,p+h,u+m,b+v).normalize(),r[2].setComponents(c+o,p+f,u+_,b+y).normalize(),r[3].setComponents(c-o,p-f,u-_,b-y).normalize(),i)r[4].setComponents(l,d,g,S).normalize(),r[5].setComponents(c-l,p-d,u-g,b-S).normalize();else if(r[4].setComponents(c-l,p-d,u-g,b-S).normalize(),t===gi)r[5].setComponents(c+l,p+d,u+g,b+S).normalize();else if(t===Ro)r[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const t=qS.distanceTo(e.center);return Xr.radius=.7071067811865476+t,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const lm=new at;class op{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];lm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Po),i[r].setFromProjectionMatrix(lm,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Po),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new op().copy(this)}}class B_ extends rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nc=new k,Ic=new k,cm=new at,Ba=new ap,wl=new gs,ch=new k,um=new k;class YS extends Nt{constructor(e=new zt,t=new B_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Nc.fromBufferAttribute(t,r-1),Ic.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Nc.distanceTo(Ic);e.setAttribute("lineDistance",new ct(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;cm.copy(r).invert(),Ba.copy(e.ray).applyMatrix4(cm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=p,g=m-1;_<g;_+=c){const u=h.getX(_),v=h.getX(_+1),y=Tl(this,e,Ba,l,u,v,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(p),u=Tl(this,e,Ba,l,_,g,m-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=p,g=m-1;_<g;_+=c){const u=Tl(this,e,Ba,l,_,_+1,_);u&&t.push(u)}if(this.isLineLoop){const _=Tl(this,e,Ba,l,m-1,p,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Tl(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Nc.fromBufferAttribute(o,r),Ic.fromBufferAttribute(o,s),t.distanceSqToSegment(Nc,Ic,ch,um)>i)return;ch.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ch);if(!(c<e.near||c>e.far))return{distance:c,point:um.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const hm=new k,fm=new k;class $S extends YS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)hm.fromBufferAttribute(t,r),fm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hm.distanceTo(fm);e.setAttribute("lineDistance",new ct(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class G_ extends rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new at,Kf=new ap,El=new gs,bl=new k;class KS extends Nt{constructor(e=new zt,t=new G_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;dm.copy(r).invert(),Kf.copy(e.ray).applyMatrix4(dm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,_=p;m<_;m++){const g=c.getX(m);bl.fromBufferAttribute(f,g),pm(bl,g,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let m=d,_=p;m<_;m++)bl.fromBufferAttribute(f,m),pm(bl,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pm(n,e,t,i,r,s,a){const o=Kf.distanceSqToPoint(n);if(o<t){const l=new k;Kf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class H_ extends on{constructor(e=[],t=ha,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ya extends on{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class da extends on{constructor(e,t,i=Ii,r,s,a,o=sn,l=sn,c,h=Ur,f=1){if(h!==Ur&&h!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class V_ extends da{constructor(e,t=Ii,i=ha,r,s,a=sn,o=sn,l,c=Ur){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class W_ extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class it extends zt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function m(_,g,u,v,y,S,b,T,x,M,D){const A=S/x,C=b/M,P=S/2,N=b/2,R=T/2,U=x+1,q=M+1;let z=0,G=0;const O=new k;for(let X=0;X<q;X++){const J=X*C-N;for(let ae=0;ae<U;ae++){const j=ae*A-P;O[_]=j*v,O[g]=J*y,O[u]=R,c.push(O.x,O.y,O.z),O[_]=0,O[g]=0,O[u]=T>0?1:-1,h.push(O.x,O.y,O.z),f.push(ae/x),f.push(1-X/M),z+=1}}for(let X=0;X<M;X++)for(let J=0;J<x;J++){const ae=d+J+U*X,j=d+J+U*(X+1),V=d+(J+1)+U*(X+1),ie=d+(J+1)+U*X;l.push(ae,j,ie),l.push(j,V,ie),G+=6}o.addGroup(p,G,D),p+=G,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wt extends zt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,p=2*f+d,m=i*2+s,_=r+1,g=new k,u=new k;for(let v=0;v<=m;v++){let y=0,S=0,b=0,T=0;if(v<=i){const D=v/i,A=D*Math.PI/2;S=-h-e*Math.cos(A),b=e*Math.sin(A),T=-e*Math.cos(A),y=D*f}else if(v<=i+s){const D=(v-i)/s;S=-h+D*t,b=e,T=0,y=f+D*d}else{const D=(v-i-s)/i,A=D*Math.PI/2;S=h+e*Math.sin(A),b=e*Math.cos(A),T=e*Math.sin(A),y=f+d+D*f}const x=Math.max(0,Math.min(1,y/p));let M=0;v===0?M=.5/r:v===m&&(M=-.5/r);for(let D=0;D<=r;D++){const A=D/r,C=A*Math.PI*2,P=Math.sin(C),N=Math.cos(C);u.x=-b*N,u.y=S,u.z=b*P,o.push(u.x,u.y,u.z),g.set(-b*N,T,b*P),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+M,x)}if(v>0){const D=(v-1)*_;for(let A=0;A<r;A++){const C=D+A,P=D+A+1,N=v*_+A,R=v*_+A+1;a.push(C,P,N),a.push(P,R,N)}}}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class lp extends zt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new k,h=new Be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=i+f/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lt extends zt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let m=0;const _=[],g=i/2;let u=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function v(){const S=new k,b=new k;let T=0;const x=(t-e)/i;for(let M=0;M<=s;M++){const D=[],A=M/s,C=A*(t-e)+e;for(let P=0;P<=r;P++){const N=P/r,R=N*l+o,U=Math.sin(R),q=Math.cos(R);b.x=C*U,b.y=-A*i+g,b.z=C*q,f.push(b.x,b.y,b.z),S.set(U,x,q).normalize(),d.push(S.x,S.y,S.z),p.push(N,1-A),D.push(m++)}_.push(D)}for(let M=0;M<r;M++)for(let D=0;D<s;D++){const A=_[D][M],C=_[D+1][M],P=_[D+1][M+1],N=_[D][M+1];(e>0||D!==0)&&(h.push(A,C,N),T+=3),(t>0||D!==s-1)&&(h.push(C,P,N),T+=3)}c.addGroup(u,T,0),u+=T}function y(S){const b=m,T=new Be,x=new k;let M=0;const D=S===!0?e:t,A=S===!0?1:-1;for(let P=1;P<=r;P++)f.push(0,g*A,0),d.push(0,A,0),p.push(.5,.5),m++;const C=m;for(let P=0;P<=r;P++){const R=P/r*l+o,U=Math.cos(R),q=Math.sin(R);x.x=D*q,x.y=g*A,x.z=D*U,f.push(x.x,x.y,x.z),d.push(0,A,0),T.x=U*.5+.5,T.y=q*.5*A+.5,p.push(T.x,T.y),m++}for(let P=0;P<r;P++){const N=b+P,R=C+P;S===!0?h.push(R,R+1,N):h.push(R+1,R,N),M+=3}c.addGroup(u,M,S===!0?1:2),u+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wn extends lt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(a-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Be:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new k,r=[],s=[],a=[],o=new k,l=new at;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new k)}s[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ke(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ke(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function cp(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,p*=h,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const mm=new k,gm=new k,uh=new cp,hh=new cp,fh=new cp;class ZS extends jS{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new k){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(gm.subVectors(r[0],r[1]).add(r[0]),c=gm);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(mm.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=mm),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),uh.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,m,_,g),hh.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,m,_,g),fh.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(uh.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),hh.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),fh.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(uh.calc(l),hh.calc(l),fh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Tr extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=t/l,p=[],m=[],_=[],g=[];for(let u=0;u<h;u++){const v=u*d-a;for(let y=0;y<c;y++){const S=y*f-s;m.push(S,-v,0),_.push(0,0,1),g.push(y/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const y=v+c*u,S=v+c*(u+1),b=v+1+c*(u+1),T=v+1+c*u;p.push(y,S,T),p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class su extends zt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let f=e;const d=(t-e)/r,p=new k,m=new Be;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const u=s+g/i*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}f+=d}for(let _=0;_<r;_++){const g=_*(i+1);for(let u=0;u<i;u++){const v=u+g,y=v,S=v+i+1,b=v+i+2,T=v+1;o.push(y,S,T),o.push(S,b,T)}}this.setIndex(o),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ce extends zt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new k,d=new k,p=[],m=[],_=[],g=[];for(let u=0;u<=i;u++){const v=[],y=u/i,S=a+y*o,b=e*Math.cos(S),T=Math.sqrt(e*e-b*b);let x=0;u===0&&a===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){const D=M/t,A=r+D*s;f.x=-T*Math.cos(A),f.y=b,f.z=T*Math.sin(A),m.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(D+x,1-y),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<t;v++){const y=h[u][v+1],S=h[u][v],b=h[u+1][v],T=h[u+1][v+1];(u!==0||a>0)&&p.push(y,S,T),(u!==i-1||l<Math.PI)&&p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ce(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uc extends zt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],f=[],d=new k,p=new k,m=new k;for(let _=0;_<=i;_++){const g=a+_/i*o;for(let u=0;u<=r;u++){const v=u/r*s;p.x=(e+t*Math.cos(g))*Math.cos(v),p.y=(e+t*Math.cos(g))*Math.sin(v),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(p,d).normalize(),h.push(m.x,m.y,m.z),f.push(u/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=r;g++){const u=(r+1)*_+g-1,v=(r+1)*(_-1)+g-1,y=(r+1)*(_-1)+g,S=(r+1)*_+g;l.push(u,v,S),l.push(v,y,S)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function pa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(vm(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(vm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Sn(n){const e={};for(let t=0;t<n.length;t++){const i=pa(n[t]);for(const r in i)e[r]=i[r]}return e}function vm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function JS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function X_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const QS={clone:pa,merge:Sn};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=JS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new at().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nM extends us{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ee extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iM extends rr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=jd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rM extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sM extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class q_ extends Nt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Y_ extends q_{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const dh=new at,_m=new k,xm=new k;class aM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_m.setFromMatrixPosition(e.matrixWorld),t.position.copy(_m),xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){dh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(dh,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ro||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Al=new k,Rl=new xa,Mi=new k;class $_ extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,Rl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Rl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Al,Rl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Rl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new k,ym=new Be,Sm=new Be;class ei extends $_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$f*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $f*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,t){return this.getViewBounds(e,ym,Sm),t.subVectors(Sm,ym)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class K_ extends $_{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class oM extends aM{constructor(){super(new K_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ro extends q_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new oM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ns=-90,Is=1;class jf extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ei(Ns,Is,e,t);r.layers=this.layers,this.add(r);const s=new ei(Ns,Is,e,t);s.layers=this.layers,this.add(s);const a=new ei(Ns,Is,e,t);a.layers=this.layers,this.add(a);const o=new ei(Ns,Is,e,t);o.layers=this.layers,this.add(o);const l=new ei(Ns,Is,e,t);l.layers=this.layers,this.add(l);const c=new ei(Ns,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class lM extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Mm(n,e,t,i){const r=cM(i);switch(t){case M_:return n*e;case ep:return n*e/r.components*r.byteLength;case tp:return n*e/r.components*r.byteLength;case cs:return n*e*2/r.components*r.byteLength;case np:return n*e*2/r.components*r.byteLength;case w_:return n*e*3/r.components*r.byteLength;case Pi:return n*e*4/r.components*r.byteLength;case ip:return n*e*4/r.components*r.byteLength;case Yl:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kl:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xf:case Sf:return Math.max(n,16)*Math.max(e,8)/4;case _f:case yf:return Math.max(n,8)*Math.max(e,8)/2;case Mf:case wf:case Ef:case bf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tf:case Ec:case Af:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Vf:case Wf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xf:case qf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bc:case Yf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cM(n){switch(n){case zn:case __:return{byteLength:1,components:1};case Ao:case x_:case Ui:return{byteLength:2,components:1};case Jd:case Qd:return{byteLength:2,components:4};case Ii:case Zd:case mi:return{byteLength:4,components:1};case y_:case S_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j_(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uM(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){const m=f[d],_=f[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){const _=f[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,iw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ow=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fw=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tw=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ew=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ow=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$w=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d2=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:hM,alphahash_pars_fragment:fM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:xM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:wM,iridescence_fragment:TM,bumpmap_pars_fragment:EM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:PM,color_fragment:CM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:NM,common:IM,defaultnormal_vertex:UM,displacementmap_pars_vertex:kM,displacementmap_vertex:FM,emissivemap_fragment:OM,emissivemap_pars_fragment:zM,colorspace_fragment:BM,colorspace_pars_fragment:GM,envmap_fragment:HM,envmap_common_pars_fragment:VM,envmap_pars_fragment:WM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:nw,envmap_vertex:qM,fog_vertex:YM,fog_pars_vertex:$M,fog_fragment:KM,fog_pars_fragment:jM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:JM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:ew,lights_pars_begin:tw,lights_toon_fragment:iw,lights_toon_pars_fragment:rw,lights_phong_fragment:sw,lights_phong_pars_fragment:aw,lights_physical_fragment:ow,lights_physical_pars_fragment:lw,lights_fragment_begin:cw,lights_fragment_maps:uw,lights_fragment_end:hw,lightprobes_pars_fragment:fw,logdepthbuf_fragment:dw,logdepthbuf_pars_fragment:pw,logdepthbuf_pars_vertex:mw,logdepthbuf_vertex:gw,map_fragment:vw,map_pars_fragment:_w,map_particle_fragment:xw,map_particle_pars_fragment:yw,metalnessmap_fragment:Sw,metalnessmap_pars_fragment:Mw,morphinstance_vertex:ww,morphcolor_vertex:Tw,morphnormal_vertex:Ew,morphtarget_pars_vertex:bw,morphtarget_vertex:Aw,normal_fragment_begin:Rw,normal_fragment_maps:Pw,normal_pars_fragment:Cw,normal_pars_vertex:Lw,normal_vertex:Dw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Iw,clearcoat_normal_fragment_maps:Uw,clearcoat_pars_fragment:kw,iridescence_pars_fragment:Fw,opaque_fragment:Ow,packing:zw,premultiplied_alpha_fragment:Bw,project_vertex:Gw,dithering_fragment:Hw,dithering_pars_fragment:Vw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:qw,shadowmap_pars_vertex:Yw,shadowmap_vertex:$w,shadowmask_pars_fragment:Kw,skinbase_vertex:jw,skinning_pars_vertex:Zw,skinning_vertex:Jw,skinnormal_vertex:Qw,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:r2,transmission_pars_fragment:s2,uv_pars_fragment:a2,uv_pars_vertex:o2,uv_vertex:l2,worldpos_vertex:c2,background_vert:u2,background_frag:h2,backgroundCube_vert:f2,backgroundCube_frag:d2,cube_vert:p2,cube_frag:m2,depth_vert:g2,depth_frag:v2,distance_vert:_2,distance_frag:x2,equirect_vert:y2,equirect_frag:S2,linedashed_vert:M2,linedashed_frag:w2,meshbasic_vert:T2,meshbasic_frag:E2,meshlambert_vert:b2,meshlambert_frag:A2,meshmatcap_vert:R2,meshmatcap_frag:P2,meshnormal_vert:C2,meshnormal_frag:L2,meshphong_vert:D2,meshphong_frag:N2,meshphysical_vert:I2,meshphysical_frag:U2,meshtoon_vert:k2,meshtoon_frag:F2,points_vert:O2,points_frag:z2,shadow_vert:B2,shadow_frag:G2,sprite_vert:H2,sprite_frag:V2},Me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},bi={basic:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Sn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Sn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Sn([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Sn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Sn([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Sn([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Sn([Me.common,Me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Sn([Me.lights,Me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};bi.physical={uniforms:Sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Pl={r:0,b:0,g:0},W2=new at,Z_=new Ve;Z_.set(-1,0,0,0,1,0,0,0,1);function X2(n,e,t,i,r,s){const a=new Fe(0);let o=r===!0?0:1,l,c,h=null,f=0,d=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const S=v.backgroundBlurriness>0;y=e.get(y,S)}return y}function m(v){let y=!1;const S=p(v);S===null?g(a,o):S&&S.isColor&&(g(S,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,y){const S=p(y);S&&S.isCubeTexture?(c===void 0&&(c=new W(new it(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:pa(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Z_),c.material.toneMapped=et.getTransfer(S.colorSpace)!==ft,(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new W(new Tr(2,2),new us({name:"BackgroundMaterial",uniforms:pa(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(Pl,X_(n)),t.buffers.color.setClear(Pl.r,Pl.g,Pl.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:_,dispose:u}}function q2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(C,P,N,R,U){let q=!1;const z=f(C,R,N,P);s!==z&&(s=z,c(s.object)),q=p(C,R,N,U),q&&m(C,R,N,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(C,P,N,R),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function f(C,P,N,R){const U=R.wireframe===!0;let q=i[P.id];q===void 0&&(q={},i[P.id]=q);const z=C.isInstancedMesh===!0?C.id:0;let G=q[z];G===void 0&&(G={},q[z]=G);let O=G[N.id];O===void 0&&(O={},G[N.id]=O);let X=O[U];return X===void 0&&(X=d(l()),O[U]=X),X}function d(C){const P=[],N=[],R=[];for(let U=0;U<t;U++)P[U]=0,N[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:R,object:C,attributes:{},index:null}}function p(C,P,N,R){const U=s.attributes,q=P.attributes;let z=0;const G=N.getAttributes();for(const O in G)if(G[O].location>=0){const J=U[O];let ae=q[O];if(ae===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;z++}return s.attributesNum!==z||s.index!==R}function m(C,P,N,R){const U={},q=P.attributes;let z=0;const G=N.getAttributes();for(const O in G)if(G[O].location>=0){let J=q[O];J===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),U[O]=ae,z++}s.attributes=U,s.attributesNum=z,s.index=R}function _(){const C=s.newAttributes;for(let P=0,N=C.length;P<N;P++)C[P]=0}function g(C){u(C,0)}function u(C,P){const N=s.newAttributes,R=s.enabledAttributes,U=s.attributeDivisors;N[C]=1,R[C]===0&&(n.enableVertexAttribArray(C),R[C]=1),U[C]!==P&&(n.vertexAttribDivisor(C,P),U[C]=P)}function v(){const C=s.newAttributes,P=s.enabledAttributes;for(let N=0,R=P.length;N<R;N++)P[N]!==C[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function y(C,P,N,R,U,q,z){z===!0?n.vertexAttribIPointer(C,P,N,U,q):n.vertexAttribPointer(C,P,N,R,U,q)}function S(C,P,N,R){_();const U=R.attributes,q=N.getAttributes(),z=P.defaultAttributeValues;for(const G in q){const O=q[G];if(O.location>=0){let X=U[G];if(X===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),X!==void 0){const J=X.normalized,ae=X.itemSize,j=e.get(X);if(j===void 0)continue;const V=j.buffer,ie=j.type,ue=j.bytesPerElement,Te=ie===n.INT||ie===n.UNSIGNED_INT||X.gpuType===Zd;if(X.isInterleavedBufferAttribute){const fe=X.data,Ue=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,Qe=X.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let De=0;De<O.locationSize;De++)u(O.location+De,fe.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let De=0;De<O.locationSize;De++)g(O.location+De);n.bindBuffer(n.ARRAY_BUFFER,V);for(let De=0;De<O.locationSize;De++)y(O.location+De,ae/O.locationSize,ie,J,Ue*ue,(Qe+ae/O.locationSize*De)*ue,Te)}else{if(X.isInstancedBufferAttribute){for(let fe=0;fe<O.locationSize;fe++)u(O.location+fe,X.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let fe=0;fe<O.locationSize;fe++)g(O.location+fe);n.bindBuffer(n.ARRAY_BUFFER,V);for(let fe=0;fe<O.locationSize;fe++)y(O.location+fe,ae/O.locationSize,ie,J,ae*ue,ae/O.locationSize*fe*ue,Te)}}else if(z!==void 0){const J=z[G];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(O.location,J);break;case 3:n.vertexAttrib3fv(O.location,J);break;case 4:n.vertexAttrib4fv(O.location,J);break;default:n.vertexAttrib1fv(O.location,J)}}}}v()}function b(){D();for(const C in i){const P=i[C];for(const N in P){const R=P[N];for(const U in R){const q=R[U];for(const z in q)h(q[z].object),delete q[z];delete R[U]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const P=i[C.id];for(const N in P){const R=P[N];for(const U in R){const q=R[U];for(const z in q)h(q[z].object),delete q[z];delete R[U]}}delete i[C.id]}function x(C){for(const P in i){const N=i[P];for(const R in N){const U=N[R];if(U[C.id]===void 0)continue;const q=U[C.id];for(const z in q)h(q[z].object),delete q[z];delete U[C.id]}}}function M(C){for(const P in i){const N=i[P],R=C.isInstancedMesh===!0?C.id:0,U=N[R];if(U!==void 0){for(const q in U){const z=U[q];for(const G in z)h(z[G].object),delete z[G];delete U[q]}delete N[R],Object.keys(N).length===0&&delete i[P]}}}function D(){A(),a=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Y2(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function $2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==Pi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const M=x===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==zn&&x!==mi&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:b,samples:T}}function K2(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new mr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,u=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,y=v*4;let S=u.clippingState||null;l.value=S,S=h(m,d,y,p);for(let b=0;b!==y;++b)S[b]=t[b];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const u=p+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<u)&&(g=new Float32Array(u));for(let y=0,S=p;y!==_;++y,S+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}class up extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new H_(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new it(5,5,5),s=new us({name:"CubemapFromEquirect",uniforms:pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:na});s.uniforms.tEquirect.value=t;const a=new W(r,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=Cn),new jf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const wm=256,j2=3,Z2=20,J_=256,Q_=16,J2=3,Q2=new k,eT=new Fe;class kc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jf(1,10,null),this._boxMesh=new W(new it(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Q2}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(eT));const g=new jf(i,r,h);return g.position.copy(o),g.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(wm,MS(e))}_fromTexture(e,t){e.mapping===ha||e.mapping===bo?this._setSize(e.image.length===0?wm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Tm(e,!1,!1),i=Math.log2(e)-j2;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Tm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ha||e.mapping===bo?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Em()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=tT(),this._integrationMaterial=nT());const t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Q_);for(let a=0;a<=i;a++){const o=kc.lodToRoughness(a,i);if(a>i-J2)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(J_*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=iT());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Tm(n,e,t){return new up(n,{minFilter:Mr,generateMipmaps:e,type:Ui,colorSpace:Rc,depthBuffer:t})}function Uo(n,e,t){return new us({name:n,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:In,blending:na,depthTest:!1,depthWrite:!1})}function tT(){return Uo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${J_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nT(){return Uo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Q_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function iT(){return Uo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Z2}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Em(){return Uo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function bm(){return Uo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rT(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===ku||p===Fu)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new up(m.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,m=p===ku||p===Fu,_=p===ha||p===bo;if(m||_){let g=t.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new kc(n)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const v=d.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new kc(n)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,p){return p===ku?d.mapping=ha:p===Fu&&(d.mapping=bo),d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function sT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zl("WebGLRenderer: "+i+" extension not supported."),r}}}function aT(n,e,t,i){const r={},s=new WeakMap,a=new FinalizationRegistry(m=>delete r[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete r[m.id],a.unregister(m);const _=s.get(m);_&&(e.remove(_),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return r[_.id]!==void 0||(_.addEventListener("dispose",o),r[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(m){const _=m.attributes;for(const g in _)e.update(_[g],n.ARRAY_BUFFER)}function f(m){const _=m.index,g=m.attributes.position;let u=0;if(g===void 0)return;const v=_!==null?_.array.length:g.array.length/3-1,y=g.count>=65535?k_:U_,S=new y(Math.ceil(v/3)*6,1),b=S.array;if(_!==null){const x=_.array;u=_.version;for(let M=0,D=0;M<v;M+=3){const A=x[M+0],C=x[M+1],P=x[M+2];b[D++]=A,b[D++]=C,b[D++]=C,b[D++]=P,b[D++]=P,b[D++]=A}}else{u=g.version;for(let x=0,M=0;x<v;x+=3){const D=x+0,A=x+1,C=x+2;b[M++]=D,b[M++]=A,b[M++]=A,b[M++]=C,b[M++]=C,b[M++]=D}}S.version=u;const T=s.get(m);T&&e.remove(T),s.set(m,S)}function d(m){const _=s.get(m);if(_){const g=m.index;g!==null&&_.version<g.version&&f(m)}else f(m);return s.get(m)}function p(){for(const m in r){const _=r[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function oT(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,f*a,p),t.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let _=0;for(let g=0;g<p;g++)_+=d[g];t.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function lT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cT(n,e,t){const i=new WeakMap,r=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let A=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var p=A;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let b=o.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const x=new Float32Array(b*T*4*f),M=new L_(x,b,T,f);M.type=mi,M.needsUpdate=!0;const D=S*4;for(let C=0;C<f;C++){const P=u[C],N=v[C],R=y[C],U=b*T*4*C;for(let q=0;q<P.count;q++){const z=q*D;m===!0&&(r.fromBufferAttribute(P,q),x[U+z+0]=r.x,x[U+z+1]=r.y,x[U+z+2]=r.z,x[U+z+3]=0),_===!0&&(r.fromBufferAttribute(N,q),x[U+z+4]=r.x,x[U+z+5]=r.y,x[U+z+6]=r.z,x[U+z+7]=0),g===!0&&(r.fromBufferAttribute(R,q),x[U+z+8]=r.x,x[U+z+9]=r.y,x[U+z+10]=r.z,x[U+z+11]=R.itemSize===4?r.w:1)}}d={count:f,texture:M,size:new Be(b,T)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function uT(n,e,t,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const hT={[h_]:"LINEAR_TONE_MAPPING",[f_]:"REINHARD_TONE_MAPPING",[d_]:"CINEON_TONE_MAPPING",[iu]:"ACES_FILMIC_TONE_MAPPING",[m_]:"AGX_TONE_MAPPING",[g_]:"NEUTRAL_TONE_MAPPING",[p_]:"CUSTOM_TONE_MAPPING"};function fT(n,e,t,i,r,s){const a=new Ni(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new zt;h.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ct([0,2,0,0,2,0],2));const f=new nM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(h,f),p=new K_(-1,1,1,-1,0,1);let m=null,_=null,g=!1,u,v=null,y=[],S=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),l!==null&&l.setSize(b,T);for(let x=0;x<y.length;x++){const M=y[x];M.setSize&&M.setSize(b,T)}},this.setEffects=function(b){y=b,S=y.length>0&&y[0].isRenderPass===!0;const T=a.width,x=a.height;y.length>0&&o===null&&(o=new Ni(T,x,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new Ni(T,x,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&y.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new da(T,x),s===!0&&(c.format=wr,c.type=fa)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<y.length;D++){const A=y[D];A.setSize&&A.setSize(T,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,T){if(g||b.toneMapping===Zi&&y.length===0)return!1;if(v=T,T!==null){const x=T.width,M=T.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return S===!1&&b.setRenderTarget(a),u=b.toneMapping,b.toneMapping=Zi,!0},this.hasRenderPass=function(){return S},this.end=function(b,T){b.toneMapping=u,g=!0;let x=a,M=o;for(let D=0;D<y.length;D++){const A=y[D];A.enabled!==!1&&(A.render(b,M,x,T),A.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,f.defines={},et.getTransfer(m)===ft&&(f.defines.SRGB_TRANSFER="");const D=hT[_];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(d,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const ex=new on,tx=new da(1,1),nx=new V_(1),ix=new L_,rx=new RS,sx=new H_,Am=[],Rm=[],Pm=new Float32Array(16),Cm=new Float32Array(9),Lm=new Float32Array(4);function Sa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Am[r];if(s===void 0&&(s=new Float32Array(r),Am[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function au(n,e){let t=Rm[e];t===void 0&&(t=new Int32Array(e),Rm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function vT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Lm.set(i),n.uniformMatrix2fv(this.addr,!1,Lm),$t(t,i)}}function _T(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Cm.set(i),n.uniformMatrix3fv(this.addr,!1,Cm),$t(t,i)}}function xT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Pm.set(i),n.uniformMatrix4fv(this.addr,!1,Pm),$t(t,i)}}function yT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function TT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function ou(n){return n.version===0&&(n.compareFunction=b_,n.needsUpdate=!0),n}function RT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=ou(tx):s=ex,t.setTexture2D(e||s,r)}function PT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rx,r)}function CT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=ou(nx):s=sx,t.setTextureCube(e||s,r)}function LT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ix,r)}function DT(n){switch(n){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return vT;case 35675:return _T;case 35676:return xT;case 5124:case 35670:return yT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return wT;case 5125:return TT;case 36294:return ET;case 36295:return bT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return LT}}function NT(n,e){n.uniform1fv(this.addr,e)}function IT(n,e){const t=Sa(e,this.size,2);n.uniform2fv(this.addr,t)}function UT(n,e){const t=Sa(e,this.size,3);n.uniform3fv(this.addr,t)}function kT(n,e){const t=Sa(e,this.size,4);n.uniform4fv(this.addr,t)}function FT(n,e){const t=Sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OT(n,e){const t=Sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zT(n,e){const t=Sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BT(n,e){n.uniform1iv(this.addr,e)}function GT(n,e){n.uniform2iv(this.addr,e)}function HT(n,e){n.uniform3iv(this.addr,e)}function VT(n,e){n.uniform4iv(this.addr,e)}function WT(n,e){n.uniform1uiv(this.addr,e)}function XT(n,e){n.uniform2uiv(this.addr,e)}function qT(n,e){n.uniform3uiv(this.addr,e)}function YT(n,e){n.uniform4uiv(this.addr,e)}function $T(n,e,t){const i=this.cache,r=e.length,s=au(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=ou(tx):a=ex;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function KT(n,e,t){const i=this.cache,r=e.length,s=au(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||rx,s[a])}function jT(n,e,t){const i=this.cache,r=e.length,s=au(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ou(nx):a=sx;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function ZT(n,e,t){const i=this.cache,r=e.length,s=au(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ix,s[a])}function JT(n){switch(n){case 5126:return NT;case 35664:return IT;case 35665:return UT;case 35666:return kT;case 35674:return FT;case 35675:return OT;case 35676:return zT;case 5124:case 35670:return BT;case 35667:case 35671:return GT;case 35668:case 35672:return HT;case 35669:case 35673:return VT;case 5125:return WT;case 36294:return XT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return ZT}}class QT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=DT(t.type)}}class eE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JT(t.type)}}class tE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function Dm(n,e){n.seq.push(e),n.map[e.id]=e}function nE(n,e,t){const i=n.name,r=i.length;for(ph.lastIndex=0;;){const s=ph.exec(i),a=ph.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Dm(t,c===void 0?new QT(o,n,e):new eE(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new tE(o),Dm(t,f)),t=f}}}class Jl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Nm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iE=37297;let rE=0;function sE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Im=new Ve;function aE(n){et._getMatrix(Im,et.workingColorSpace,n);const e=`mat3( ${Im.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Pc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Um(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+sE(n.getShaderSource(e),o)}else return s}function oE(n,e){const t=aE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const lE={[h_]:"Linear",[f_]:"Reinhard",[d_]:"Cineon",[iu]:"ACESFilmic",[m_]:"AgX",[g_]:"Neutral",[p_]:"Custom"};function cE(n,e){const t=lE[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new k;function uE(){et.getLuminanceCoefficients(Cl);const n=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function fE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ya(n){return n!==""}function km(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Fm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(n){return n.replace(pE,mE)}function mE(n,e){const t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Zf(t)}const gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(n){return n.replace(gE,vE)}function vE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _E={[ql]:"SHADOWMAP_TYPE_PCF",[qa]:"SHADOWMAP_TYPE_VSM"};function xE(n){return _E[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yE={[bo]:"ENVMAP_MODE_REFRACTION"};function SE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[jd]:"ENVMAP_BLENDING_MULTIPLY",[aS]:"ENVMAP_BLENDING_MIX",[oS]:"ENVMAP_BLENDING_ADD"};function wE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ME[n.combine]||"ENVMAP_BLENDING_NONE"}function TE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=SE(t),f=wE(t),d=hE(t),p=fE(s),m=r.createProgram();let _,g,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ya).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ya).join(`
`),g.length>0&&(g+=`
`)):(_=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),g=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Zi?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,oE("linearToOutputTexel",t.outputColorSpace),uE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),a=Zf(a),a=km(a,t),a=Fm(a,t),o=Zf(o),o=km(o,t),o=Fm(o,t),a=Om(a),o=Om(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=u+_+a,y=u+g+o,S=Nm(r,r.VERTEX_SHADER,v),b=Nm(r,r.FRAGMENT_SHADER,y);r.attachShader(m,S),r.attachShader(m,b),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function T(A){if(n.debug.checkShaderErrors){const C=r.getProgramInfoLog(m)||"",P=r.getShaderInfoLog(S)||"",N=r.getShaderInfoLog(b)||"",R=C.trim(),U=P.trim(),q=N.trim();let z=!0,G=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,S,b);else{const O=Um(r,S,"vertex"),X=Um(r,b,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+R+`
`+O+`
`+X)}else R!==""?ze("WebGLProgram: Program Info Log:",R):(U===""||q==="")&&(G=!1);G&&(A.diagnostics={runnable:z,programLog:R,vertexShader:{log:U,prefix:_},fragmentShader:{log:q,prefix:g}})}r.deleteShader(S),r.deleteShader(b),x=new Jl(r,m),M=dE(r,m)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,iE)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=b,this}let EE=0;class bE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AE(e),t.set(e,i)),i}}class AE{constructor(e){this.id=EE++,this.code=e,this.usedTimes=0}}function RE(n){return n===cs||n===Ec||n===bc}function PE(n,e,t,i,r,s){const a=new D_,o=new bE,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,D,A,C,P){const N=A.fog,R=C.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||U,q),G=d[x.type];let O=i.precision;x.precision!==null&&(O=i.getMaxPrecision(x.precision),O!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",O,"instead."));const X=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,J=X!==void 0?X.length:0;let ae=0;R.morphAttributes.position!==void 0&&(ae=1),R.morphAttributes.normal!==void 0&&(ae=2),R.morphAttributes.color!==void 0&&(ae=3);let j,V,ie,ue;if(G){const Se=bi[G];j=Se.vertexShader,V=Se.fragmentShader}else{j=x.vertexShader,V=x.fragmentShader;const Se=o.getVertexShaderStage(x),ht=o.getFragmentShaderStage(x);o.update(x,Se,ht),ie=Se.id,ue=ht.id}const Te=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Ue=C.isInstancedMesh===!0,Qe=C.isBatchedMesh===!0,De=!!x.map,Ge=!!x.matcap,Ne=!!z,We=Ne&&z.isPMREMTexture===!0,Ft=!!x.aoMap,ut=!!x.lightMap,Rt=!!x.bumpMap&&x.wireframe===!1,gt=!!x.normalMap,yi=!!x.displacementMap,Kt=!!x.emissiveMap,Xn=!!x.metalnessMap,qn=!!x.roughnessMap,Yn=x.anisotropy>0,H=x.clearcoat>0,$n=x.diffuseRoughness>0,Tt=x.dispersion>0,Et=x.retroreflectivity>0,ye=x.iridescence>0,Vt=x.sheen>0,Oe=x.transmission>0,He=Yn&&!!x.anisotropyMap,L=H&&!!x.clearcoatMap,w=H&&!!x.clearcoatNormalMap,$=H&&!!x.clearcoatRoughnessMap,oe=$n&&!!x.diffuseRoughnessMap,re=ye&&!!x.iridescenceMap,de=ye&&!!x.iridescenceThicknessMap,_e=Vt&&!!x.sheenColorMap,ee=Vt&&!!x.sheenRoughnessMap,te=!!x.specularMap,me=!!x.specularColorMap,I=!!x.specularIntensityMap,ne=Oe&&!!x.transmissionMap,Q=Oe&&!!x.thicknessMap,ge=!!x.gradientMap,he=!!x.alphaMap,pe=x.alphaTest>0,Ie=!!x.alphaHash,Ye=!!x.extensions;let ce=Zi;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ce=n.toneMapping);const ke=We?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,qe={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:V,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:O,batching:Qe,batchingColor:Qe&&C._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&C.instanceColor!==null,instancingMorph:Ue&&C.morphTexture!==null,outputColorSpace:Te===null?n.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:Ge,envMap:Ne,envMapMode:Ne&&z.mapping,envMapPMREM:We,envMapMaxLod:We?ke.length-1:null,envMapSize:We?ke[0].width:null,aoMap:Ft,lightMap:ut,bumpMap:Rt,normalMap:gt,displacementMap:yi,emissiveMap:Kt,normalMapObjectSpace:gt&&x.normalMapType===uS,normalMapTangentSpace:gt&&x.normalMapType===Ac,packedNormalMap:gt&&x.normalMapType===Ac&&RE(x.normalMap.format),metalnessMap:Xn,roughnessMap:qn,anisotropy:Yn,anisotropyMap:He,clearcoat:H,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:$,diffuseRoughness:$n,diffuseRoughnessMap:oe,dispersion:Tt,retroreflection:Et,iridescence:ye,iridescenceMap:re,iridescenceThicknessMap:de,sheen:Vt,sheenColorMap:_e,sheenRoughnessMap:ee,specularMap:te,specularColorMap:me,specularIntensityMap:I,transmission:Oe,transmissionMap:ne,thicknessMap:Q,gradientMap:ge,opaque:x.transparent===!1&&x.blending===io&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:pe,alphaHash:Ie,combine:x.combine,mapUv:De&&p(x.map.channel),aoMapUv:Ft&&p(x.aoMap.channel),lightMapUv:ut&&p(x.lightMap.channel),bumpMapUv:Rt&&p(x.bumpMap.channel),normalMapUv:gt&&p(x.normalMap.channel),displacementMapUv:yi&&p(x.displacementMap.channel),emissiveMapUv:Kt&&p(x.emissiveMap.channel),metalnessMapUv:Xn&&p(x.metalnessMap.channel),roughnessMapUv:qn&&p(x.roughnessMap.channel),anisotropyMapUv:He&&p(x.anisotropyMap.channel),clearcoatMapUv:L&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(x.sheenRoughnessMap.channel),specularMapUv:te&&p(x.specularMap.channel),specularColorMapUv:me&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:ne&&p(x.transmissionMap.channel),thicknessMapUv:Q&&p(x.thicknessMap.channel),alphaMapUv:he&&p(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(gt||Yn),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(De||he),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ae,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:P.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:Kt&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Rn,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&x.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function _(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(M,x),u(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function u(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const M=d[x.type];let D;if(M){const A=bi[M];D=QS.clone(A.uniforms)}else D=x.uniforms;return D}function y(x,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new TE(n,M,x,r),c.push(D),h.set(M,D)),D}function S(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:T}}function CE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function LE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,_,g,u){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:u},n[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=m,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=g,v.group=u),e++,v}function l(d,p,m,_,g,u,v){v.reversedDepth===!0&&(g=-g);const y=o(d,p,m,_,g,u);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):t.push(y)}function c(d,p,m,_,g,u){const v=o(d,p,m,_,g,u);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function h(d,p){t.length>1&&t.sort(d||LE),i.length>1&&i.sort(p||Bm),r.length>1&&r.sort(p||Bm)}function f(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function DE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gm,n.set(i,[a])):r>=s.length?(a=new Gm,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function NE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new Fe};break;case"SpotLight":t={position:new k,direction:new k,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function IE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UE=0;function kE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FE(n){const e=new NE,t=IE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new at,a=new at;function o(c){let h=0,f=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let p=0,m=0,_=0,g=0,u=0,v=0,y=0,S=0,b=0,T=0,x=0,M=0,D=0,A=0;c.sort(kE);for(let P=0,N=c.length;P<N;P++){const R=c[P],U=R.color,q=R.intensity,z=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cs?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*q,f+=U.g*q,d+=U.b*q;else if(R.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(R.sh.coefficients[O],q);A++}else if(R.isSunLight){const O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,J=t.get(R);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[m]=J,i.sunShadowMap[m]=G;const ae=X.getViewportCount();for(let j=0;j<ae;j++)i.sunShadowMatrix[_+j]=X.getMatrix(j),i.sunShadowCascade[_+j]=X._cascadeData[j];_+=ae,m++}i.sun[p]=O,p++}else if(R.isDirectionalLight){const O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,J=t.get(R);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=G,i.directionalShadowMatrix[g]=R.shadow.matrix,b++}i.directional[g]=O,g++}else if(R.isSpotLight){const O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(U).multiplyScalar(q),O.distance=z,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,i.spot[v]=O;const X=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,X.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[v]=X.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=G,x++}v++}else if(R.isRectAreaLight){const O=e.get(R);O.color.copy(U).multiplyScalar(q),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=O,y++}else if(R.isPointLight){const O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){const X=R.shadow,J=t.get(R);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,i.pointShadow[u]=J,i.pointShadowMap[u]=G,i.pointShadowMatrix[u]=R.shadow.matrix,T++}i.point[u]=O,u++}else if(R.isHemisphereLight){const O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(q),O.groundColor.copy(R.groundColor).multiplyScalar(q),i.hemi[S]=O,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.sunLength!==p||C.directionalLength!==g||C.pointLength!==u||C.spotLength!==v||C.rectAreaLength!==y||C.hemiLength!==S||C.numSunShadows!==m||C.numDirectionalShadows!==b||C.numPointShadows!==T||C.numSpotShadows!==x||C.numSpotMaps!==M||C.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=g,i.spot.length=v,i.rectArea.length=y,i.point.length=u,i.hemi.length=S,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-D,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,C.sunLength=p,C.directionalLength=g,C.pointLength=u,C.spotLength=v,C.rectAreaLength=y,C.hemiLength=S,C.numSunShadows=m,C.numDirectionalShadows=b,C.numPointShadows=T,C.numSpotShadows=x,C.numSpotMaps=M,C.numLightProbes=A,i.version=UE++)}function l(c,h){let f=0,d=0,p=0,m=0,_=0,g=0;const u=h.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const S=c[v];if(S.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(u),f++}else if(S.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),d++}else if(S.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),m++}else if(S.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),a.identity(),s.copy(S.matrixWorld),s.premultiply(u),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),p++}else if(S.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(u),g++}}}return{setup:o,setupView:l,state:i}}function Hm(n){const e=new FE(n),t=[],i=[],r=[];function s(f){h.camera=f,t.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function OE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hm(n),e.set(r,[o])):s>=a.length?(o=new Hm(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const zE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GE=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],HE=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Vm=new at,Ga=new k,mh=new k;function VE(n,e,t){let i=new Po;const r=new Be,s=new Be,a=new Lt,o=new rM,l=new sM,c={},h=t.maxTextureSize,f={[ls]:In,[In]:ls,[Rn]:Rn},d=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:zE,fragmentShader:BE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new zt;m.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new W(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let u=this.type;this.render=function(T,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Kd&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ql);const D=n.getRenderTarget(),A=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(na),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=u!==this.type;N&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=T.length;R<U;R++){const q=T[R],z=q.shadow;if(z===void 0){ze("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const G=z.getFrameExtents();r.multiply(G),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,z.mapSize.y=s.y));const O=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=O,z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===qa){if(q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ni(r.x,r.y,{format:cs,type:Ui,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new da(r.x,r.y,mi),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Ur,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn}else q.isPointLight?(z.map=new up(r.x),z.map.depthTexture=new V_(r.x,Ii)):(z.map=new Ni(r.x,r.y),z.map.depthTexture=new da(r.x,r.y,Ii)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Ur,this.type===ql?(z.map.depthTexture.compareFunction=O?E_:T_,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const X=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,M);const J=z.camera.layers.mask&4294967294?z.camera.layers:M.layers;for(let ae=0;ae<X;ae++){const j=z.getCamera(ae);if(q.isPointLight){const V=z.camera,ie=z.matrix,ue=q.distance||V.far;ue!==V.far&&(V.far=ue,V.updateProjectionMatrix()),Ga.setFromMatrixPosition(q.matrixWorld),V.position.copy(Ga),mh.copy(V.position),mh.add(GE[ae]),V.up.copy(HE[ae]),V.lookAt(mh),V.updateMatrixWorld(),ie.makeTranslation(-Ga.x,-Ga.y,-Ga.z),Vm.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Vm,V.coordinateSystem,V.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(z.map),n.clear());const V=z.getViewport(ae);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),P.viewport(a)}i=z.getFrustum(ae),S(x,M,j,q,J,this.type)}z.isPointLightShadow!==!0&&this.type===qa&&v(z,M),z.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(D,A,C)};function v(T,x){const M=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ni(r.x,r.y,{format:cs,type:Ui}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,M,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,M,p,_,null)}function y(T,x,M,D){let A=null;const C=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)A=C;else if(A=M.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const P=A.uuid,N=x.uuid;let R=c[P];R===void 0&&(R={},c[P]=R);let U=R[N];U===void 0&&(U=A.clone(),R[N]=U,x.addEventListener("dispose",b)),A=U}if(A.visible=x.visible,A.wireframe=x.wireframe,D===qa?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=n.properties.get(A);P.light=M}return A}function S(T,x,M,D,A,C){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===qa)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const R=e.update(T),U=T.material;if(Array.isArray(U)){const q=R.groups;for(let z=0,G=q.length;z<G;z++){const O=q[z],X=U[O.materialIndex];if(X&&X.visible){const J=y(T,X,D,C);T.onBeforeShadow(n,T,x,M,R,J,O),n.renderBufferDirect(M,null,R,J,T,O),T.onAfterShadow(n,T,x,M,R,J,O)}}}else if(U.visible){const q=y(T,U,D,C);T.onBeforeShadow(n,T,x,M,R,q,null),n.renderBufferDirect(M,null,R,q,T,null),T.onAfterShadow(n,T,x,M,R,q,null)}}const N=T.children;for(let R=0,U=N.length;R<U;R++)S(N[R],x,M,D,A,C)}function b(T){T.target.removeEventListener("dispose",b);for(const M in c){const D=c[M],A=T.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}function WE(n,e){function t(){let I=!1;const ne=new Lt;let Q=null;const ge=new Lt(0,0,0,0);return{setMask:function(he){Q!==he&&!I&&(n.colorMask(he,he,he,he),Q=he)},setLocked:function(he){I=he},setClear:function(he,pe,Ie,Ye,ce){ce===!0&&(he*=Ye,pe*=Ye,Ie*=Ye),ne.set(he,pe,Ie,Ye),ge.equals(ne)===!1&&(n.clearColor(he,pe,Ie,Ye),ge.copy(ne))},reset:function(){I=!1,Q=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,ne=!1,Q=null,ge=null,he=null;return{setReversed:function(pe){if(ne!==pe){const Ie=e.get("EXT_clip_control");pe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ne=pe;const Ye=he;he=null,this.setClear(Ye)}},getReversed:function(){return ne},setTest:function(pe){pe?fe(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(pe){Q!==pe&&!I&&(n.depthMask(pe),Q=pe)},setFunc:function(pe){if(ne&&(pe=yS[pe]),ge!==pe){switch(pe){case uf:n.depthFunc(n.NEVER);break;case hf:n.depthFunc(n.ALWAYS);break;case ff:n.depthFunc(n.LESS);break;case Eo:n.depthFunc(n.LEQUAL);break;case df:n.depthFunc(n.EQUAL);break;case pf:n.depthFunc(n.GEQUAL);break;case mf:n.depthFunc(n.GREATER);break;case gf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=pe}},setLocked:function(pe){I=pe},setClear:function(pe){he!==pe&&(he=pe,ne&&(pe=1-pe),n.clearDepth(pe))},reset:function(){I=!1,Q=null,ge=null,he=null,ne=!1}}}function r(){let I=!1,ne=null,Q=null,ge=null,he=null,pe=null,Ie=null,Ye=null,ce=null;return{setTest:function(ke){I||(ke?fe(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(ke){ne!==ke&&!I&&(n.stencilMask(ke),ne=ke)},setFunc:function(ke,qe,Se){(Q!==ke||ge!==qe||he!==Se)&&(n.stencilFunc(ke,qe,Se),Q=ke,ge=qe,he=Se)},setOp:function(ke,qe,Se){(pe!==ke||Ie!==qe||Ye!==Se)&&(n.stencilOp(ke,qe,Se),pe=ke,Ie=qe,Ye=Se)},setLocked:function(ke){I=ke},setClear:function(ke){ce!==ke&&(n.clearStencil(ke),ce=ke)},reset:function(){I=!1,ne=null,Q=null,ge=null,he=null,pe=null,Ie=null,Ye=null,ce=null}}}const s=new t,a=new i,o=new r;let l={};const c=new WeakMap;let h={},f={},d={},p=new WeakMap,m=[],_=null,g=!1,u=null,v=null,y=null,S=null,b=null,T=null,x=null,M=new Fe(0,0,0),D=0,A=!1,C=null,P=null,N=null,R=null,U=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=G>=2);let X=null,J={};const ae=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),V=new Lt().fromArray(ae),ie=new Lt().fromArray(j);function ue(I,ne,Q,ge){const he=new Uint8Array(4),pe=n.createTexture();n.bindTexture(I,pe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<Q;Ie++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ne+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return pe}const Te={};Te[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(Eo),Rt(!1),gt(U0),fe(n.CULL_FACE),Ft(na);function fe(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Ue(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Qe(I,ne){return d[I]!==ne?(n.bindFramebuffer(I,ne),d[I]=ne,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function De(I,ne){let Q=m,ge=!1;if(I){Q=p.get(ne),Q===void 0&&(Q=[],p.set(ne,Q));const he=I.textures;if(Q.length!==he.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Ie=he.length;pe<Ie;pe++)Q[pe]=n.COLOR_ATTACHMENT0+pe;Q.length=he.length,ge=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ge=!0);ge&&n.drawBuffers(Q)}function Ge(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Ne={[ks]:n.FUNC_ADD,[Vy]:n.FUNC_SUBTRACT,[Wy]:n.FUNC_REVERSE_SUBTRACT};Ne[Xy]=n.MIN,Ne[qy]=n.MAX;const We={[Yy]:n.ZERO,[$y]:n.ONE,[Ky]:n.SRC_COLOR,[c_]:n.SRC_ALPHA,[tS]:n.SRC_ALPHA_SATURATE,[Qy]:n.DST_COLOR,[Zy]:n.DST_ALPHA,[jy]:n.ONE_MINUS_SRC_COLOR,[u_]:n.ONE_MINUS_SRC_ALPHA,[eS]:n.ONE_MINUS_DST_COLOR,[Jy]:n.ONE_MINUS_DST_ALPHA,[nS]:n.CONSTANT_COLOR,[iS]:n.ONE_MINUS_CONSTANT_COLOR,[rS]:n.CONSTANT_ALPHA,[sS]:n.ONE_MINUS_CONSTANT_ALPHA};function Ft(I,ne,Q,ge,he,pe,Ie,Ye,ce,ke){if(I===na){g===!0&&(Ue(n.BLEND),g=!1);return}if(g===!1&&(fe(n.BLEND),g=!0),I!==Hy){if(I!==u||ke!==A){if((v!==ks||b!==ks)&&(n.blendEquation(n.FUNC_ADD),v=ks,b=ks),ke)switch(I){case io:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFunc(n.ONE,n.ONE);break;case k0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case F0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:st("WebGLState: Invalid blending: ",I);break}else switch(I){case io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case k0:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F0:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",I);break}y=null,S=null,T=null,x=null,M.set(0,0,0),D=0,u=I,A=ke}return}he=he||ne,pe=pe||Q,Ie=Ie||ge,(ne!==v||he!==b)&&(n.blendEquationSeparate(Ne[ne],Ne[he]),v=ne,b=he),(Q!==y||ge!==S||pe!==T||Ie!==x)&&(n.blendFuncSeparate(We[Q],We[ge],We[pe],We[Ie]),y=Q,S=ge,T=pe,x=Ie),(Ye.equals(M)===!1||ce!==D)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ce),M.copy(Ye),D=ce),u=I,A=!1}function ut(I,ne){I.side===Rn?Ue(n.CULL_FACE):fe(n.CULL_FACE);let Q=I.side===In;ne&&(Q=!Q),Rt(Q),I.blending===io&&I.transparent===!1?Ft(na):Ft(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Kt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(I){C!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),C=I)}function gt(I){I!==By?(fe(n.CULL_FACE),I!==P&&(I===U0?n.cullFace(n.BACK):I===Gy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),P=I}function yi(I){I!==N&&(z&&n.lineWidth(I),N=I)}function Kt(I,ne,Q){I?(fe(n.POLYGON_OFFSET_FILL),(R!==ne||U!==Q)&&(R=ne,U=Q,a.getReversed()&&(ne=-ne,Q=-Q),n.polygonOffset(ne,Q))):Ue(n.POLYGON_OFFSET_FILL)}function Xn(I){I?fe(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function qn(I){I===void 0&&(I=n.TEXTURE0+q-1),X!==I&&(n.activeTexture(I),X=I)}function Yn(I,ne,Q){Q===void 0&&(X===null?Q=n.TEXTURE0+q-1:Q=X);let ge=J[Q];ge===void 0&&(ge={type:void 0,texture:void 0},J[Q]=ge),(ge.type!==I||ge.texture!==ne)&&(X!==Q&&(n.activeTexture(Q),X=Q),n.bindTexture(I,ne||Te[I]),ge.type=I,ge.texture=ne)}function H(){const I=J[X];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $n(){try{n.compressedTexImage2D(...arguments)}catch(I){st("WebGLState:",I)}}function Tt(){try{n.compressedTexImage3D(...arguments)}catch(I){st("WebGLState:",I)}}function Et(){try{n.texSubImage2D(...arguments)}catch(I){st("WebGLState:",I)}}function ye(){try{n.texSubImage3D(...arguments)}catch(I){st("WebGLState:",I)}}function Vt(){try{n.compressedTexSubImage2D(...arguments)}catch(I){st("WebGLState:",I)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){st("WebGLState:",I)}}function He(){try{n.texStorage2D(...arguments)}catch(I){st("WebGLState:",I)}}function L(){try{n.texStorage3D(...arguments)}catch(I){st("WebGLState:",I)}}function w(){try{n.texImage2D(...arguments)}catch(I){st("WebGLState:",I)}}function $(){try{n.texImage3D(...arguments)}catch(I){st("WebGLState:",I)}}function oe(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function re(I,ne){f[I]!==ne&&(n.pixelStorei(I,ne),f[I]=ne)}function de(I){V.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),V.copy(I))}function _e(I){ie.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function ee(I,ne){let Q=c.get(ne);Q===void 0&&(Q=new WeakMap,c.set(ne,Q));let ge=Q.get(I);ge===void 0&&(ge=n.getUniformBlockIndex(ne,I.name),n.uniformBlockBinding(ne,ge,ge),Q.set(I,ge))}function te(I,ne,Q){const he=c.get(ne).get(I);l[he]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,he,Q),l[he]=Q)}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},X=null,J={},d={},l={},p=new WeakMap,m=[],_=null,g=!1,u=null,v=null,y=null,S=null,b=null,T=null,x=null,M=new Fe(0,0,0),D=0,A=!1,C=null,P=null,N=null,R=null,U=null,V.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:Ue,bindFramebuffer:Qe,drawBuffers:De,useProgram:Ge,setBlending:Ft,setMaterial:ut,setFlipSided:Rt,setCullFace:gt,setLineWidth:yi,setPolygonOffset:Kt,setScissorTest:Xn,activeTexture:qn,bindTexture:Yn,unbindTexture:H,compressedTexImage2D:$n,compressedTexImage3D:Tt,texImage2D:w,texImage3D:$,pixelStorei:re,getParameter:oe,updateUBOMapping:ee,uniformBlockBinding:te,texStorage2D:He,texStorage3D:L,texSubImage2D:Et,texSubImage3D:ye,compressedTexSubImage2D:Vt,compressedTexSubImage3D:Oe,scissor:de,viewport:_e,reset:me}}function XE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,f=new Set;let d;const p=new WeakMap,m=new Set,_=new FinalizationRegistry(L=>m.delete(L));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(L,w){return g?new OffscreenCanvas(L,w):Cc("canvas")}function v(L,w,$){let oe=1;const re=He(L);if((re.width>$||re.height>$)&&(oe=$/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(oe*re.width),_e=Math.floor(oe*re.height);d===void 0&&(d=u(de,_e));const ee=w?u(de,_e):d;return ee.width=de,ee.height=_e,ee.getContext("2d").drawImage(L,0,0,de,_e),ze("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+de+"x"+_e+")."),ee}else return"data"in L&&ze("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function y(L){return L.generateMipmaps}function S(L){n.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(L,w,$,oe,re,de=!1){if(L!==null){if(n[L]!==void 0)return n[L];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===n.RED&&($===n.FLOAT&&(ee=n.R32F),$===n.HALF_FLOAT&&(ee=n.R16F),$===n.UNSIGNED_BYTE&&(ee=n.R8),$===n.UNSIGNED_SHORT&&_e&&(ee=_e.R16_EXT),$===n.SHORT&&_e&&(ee=_e.R16_SNORM_EXT)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ee=n.R8UI),$===n.UNSIGNED_SHORT&&(ee=n.R16UI),$===n.UNSIGNED_INT&&(ee=n.R32UI),$===n.BYTE&&(ee=n.R8I),$===n.SHORT&&(ee=n.R16I),$===n.INT&&(ee=n.R32I)),w===n.RG&&($===n.FLOAT&&(ee=n.RG32F),$===n.HALF_FLOAT&&(ee=n.RG16F),$===n.UNSIGNED_BYTE&&(ee=n.RG8),$===n.UNSIGNED_SHORT&&_e&&(ee=_e.RG16_EXT),$===n.SHORT&&_e&&(ee=_e.RG16_SNORM_EXT)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ee=n.RG8UI),$===n.UNSIGNED_SHORT&&(ee=n.RG16UI),$===n.UNSIGNED_INT&&(ee=n.RG32UI),$===n.BYTE&&(ee=n.RG8I),$===n.SHORT&&(ee=n.RG16I),$===n.INT&&(ee=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),$===n.UNSIGNED_INT&&(ee=n.RGB32UI),$===n.BYTE&&(ee=n.RGB8I),$===n.SHORT&&(ee=n.RGB16I),$===n.INT&&(ee=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),$===n.UNSIGNED_INT&&(ee=n.RGBA32UI),$===n.BYTE&&(ee=n.RGBA8I),$===n.SHORT&&(ee=n.RGBA16I),$===n.INT&&(ee=n.RGBA32I)),w===n.RGB&&($===n.UNSIGNED_SHORT&&_e&&(ee=_e.RGB16_EXT),$===n.SHORT&&_e&&(ee=_e.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),w===n.RGBA){const te=de?Pc:et.getTransfer(re);$===n.FLOAT&&(ee=n.RGBA32F),$===n.HALF_FLOAT&&(ee=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ee=te===ft?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&_e&&(ee=_e.RGBA16_EXT),$===n.SHORT&&_e&&(ee=_e.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(L,w){let $;return L?w===null||w===Ii||w===fa?$=n.DEPTH24_STENCIL8:w===mi?$=n.DEPTH32F_STENCIL8:w===Ao&&($=n.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ii||w===fa?$=n.DEPTH_COMPONENT24:w===mi?$=n.DEPTH_COMPONENT32F:w===Ao&&($=n.DEPTH_COMPONENT16),$}function M(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==sn&&L.minFilter!==Cn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function D(L){const w=new WeakRef(L);i.get(L).__ref=w,m.add(w),_.register(L,w,w)}function A(L){const w=i.get(L).__ref;w!==void 0&&(m.delete(w),_.unregister(w))}function C(L){N(L.target)}function P(L){R(L.target)}function N(L){L.removeEventListener("dispose",C),A(L),q(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&f.delete(L)}function R(L){L.removeEventListener("dispose",P),A(L),G(L)}function U(){for(const L of m){const w=L.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):N(w))}m.clear(),f.clear()}function q(L){const w=i.get(L);if(w.__webglInit===void 0)return;const $=L.source,oe=p.get($);if(oe){const re=oe[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&z(L),Object.keys(oe).length===0&&p.delete($)}i.remove(L)}function z(L){const w=i.get(L);n.deleteTexture(w.__webglTexture);const $=L.source,oe=p.get($);delete oe[w.__cacheKey],a.memory.textures--}function G(L){const w=i.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();const $=L.depthTexture;if($&&$.renderTarget===L&&N($),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let de=0;de<w.__webglFramebuffer[re].length;de++)n.deleteFramebuffer(w.__webglFramebuffer[re][de]);else n.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)n.deleteFramebuffer(w.__webglFramebuffer[re]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const oe=L.textures;for(let re=0,de=oe.length;re<de;re++){const _e=i.get(oe[re]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(oe[re])}i.remove(L)}let O=0;function X(){O=0}function J(){return O}function ae(L){O=L}function j(){const L=O;return L>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,L}function V(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function ie(L,w){const $=i.get(L);if(L.isVideoTexture&&Vt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const oe=L.image;if(oe===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ut($,L,w);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function ue(L,w){const $=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){ut($,L,w);return}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function Te(L,w){const $=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){ut($,L,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function fe(L,w){const $=i.get(L);if(L.version>0&&$.__version!==L.version){Rt($,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const Ue={[Tc]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[vf]:n.MIRRORED_REPEAT},Qe={[sn]:n.NEAREST,[lS]:n.NEAREST_MIPMAP_NEAREST,[tl]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Ou]:n.LINEAR_MIPMAP_NEAREST,[Mr]:n.LINEAR_MIPMAP_LINEAR},De={[fS]:n.NEVER,[b_]:n.ALWAYS,[dS]:n.LESS,[T_]:n.LEQUAL,[pS]:n.EQUAL,[E_]:n.GEQUAL,[mS]:n.GREATER,[gS]:n.NOTEQUAL};function Ge(L,w){if(w.type===mi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Cn||w.magFilter===Ou||w.magFilter===tl||w.magFilter===Mr||w.minFilter===Cn||w.minFilter===Ou||w.minFilter===tl||w.minFilter===Mr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Ue[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Ue[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Ue[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Qe[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Qe[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,De[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==tl&&w.minFilter!==Mr||w.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(L,w){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",C),D(w));const oe=w.source;let re=p.get(oe);re===void 0&&(re={},p.set(oe,re));const de=V(w);if(de!==L.__cacheKey){re[de]===void 0&&(re[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),re[de].usedTimes++;const _e=re[L.__cacheKey];_e!==void 0&&(re[L.__cacheKey].usedTimes--,_e.usedTimes===0&&z(w)),L.__cacheKey=de,L.__webglTexture=re[de].texture}return $}function We(L,w,$){return Math.floor(Math.floor(L/$)/w)}function Ft(L,w,$,oe){const de=L.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,$,oe,w.data);else{de.sort((I,ne)=>I.start-ne.start);let _e=0;for(let I=1;I<de.length;I++){const ne=de[_e],Q=de[I],ge=ne.start+ne.count,he=We(Q.start,w.width,4),pe=We(ne.start,w.width,4);Q.start<=ge+1&&he===pe&&We(Q.start+Q.count-1,w.width,4)===he?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++_e,de[_e]=Q)}de.length=_e+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let I=0,ne=de.length;I<ne;I++){const Q=de[I],ge=Math.floor(Q.start/4),he=Math.ceil(Q.count/4),pe=ge%w.width,Ie=Math.floor(ge/w.width),Ye=he,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(n.TEXTURE_2D,0,pe,Ie,Ye,ce,$,oe,w.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function ut(L,w,$){let oe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=n.TEXTURE_3D);const re=Ne(L,w),de=w.source;t.bindTexture(oe,L.__webglTexture,n.TEXTURE0+$);const _e=i.get(de);if(de.version!==_e.__version||re===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ce=et.getPrimaries(et.workingColorSpace),ke=w.colorSpace===xr?null:et.getPrimaries(w.colorSpace),qe=w.colorSpace===xr||ce===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let te=v(w.image,!1,r.maxTextureSize);te=Oe(w,te);const me=s.convert(w.format,w.colorSpace),I=s.convert(w.type);let ne=T(w.internalFormat,me,I,w.normalized,w.colorSpace,w.isVideoTexture);Ge(oe,w);let Q;const ge=w.mipmaps,he=w.isVideoTexture!==!0,pe=_e.__version===void 0||re===!0,Ie=de.dataReady,Ye=M(w,te);if(w.isDepthTexture)ne=x(w.format===wr,w.type),pe&&(he?t.texStorage2D(n.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ne,te.width,te.height,0,me,I,null));else if(w.isDataTexture)if(ge.length>0){he&&pe&&t.texStorage2D(n.TEXTURE_2D,Ye,ne,ge[0].width,ge[0].height);for(let ce=0,ke=ge.length;ce<ke;ce++)Q=ge[ce],he?Ie&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Q.width,Q.height,me,I,Q.data):t.texImage2D(n.TEXTURE_2D,ce,ne,Q.width,Q.height,0,me,I,Q.data);w.generateMipmaps=!1}else he?(pe&&t.texStorage2D(n.TEXTURE_2D,Ye,ne,te.width,te.height),Ie&&Ft(w,te,me,I)):t.texImage2D(n.TEXTURE_2D,0,ne,te.width,te.height,0,me,I,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){he&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,ne,ge[0].width,ge[0].height,te.depth);for(let ce=0,ke=ge.length;ce<ke;ce++)if(Q=ge[ce],w.format!==Pi)if(me!==null)if(he){if(Ie)if(w.layerUpdates.size>0){const qe=Mm(Q.width,Q.height,w.format,w.type);for(const Se of w.layerUpdates){const ht=Q.data.subarray(Se*qe/Q.data.BYTES_PER_ELEMENT,(Se+1)*qe/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Se,Q.width,Q.height,1,me,ht)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Q.width,Q.height,te.depth,me,Q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ne,Q.width,Q.height,te.depth,0,Q.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Q.width,Q.height,te.depth,me,I,Q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ne,Q.width,Q.height,te.depth,0,me,I,Q.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{he&&pe&&t.texStorage2D(n.TEXTURE_2D,Ye,ne,ge[0].width,ge[0].height);for(let ce=0,ke=ge.length;ce<ke;ce++)Q=ge[ce],w.format!==Pi?me!==null?he?Ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Q.width,Q.height,me,Q.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ne,Q.width,Q.height,0,Q.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Ie&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Q.width,Q.height,me,I,Q.data):t.texImage2D(n.TEXTURE_2D,ce,ne,Q.width,Q.height,0,me,I,Q.data)}else if(w.isDataArrayTexture)if(he){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,ne,te.width,te.height,te.depth),Ie)if(w.layerUpdates.size>0){const ce=Mm(te.width,te.height,w.format,w.type);for(const ke of w.layerUpdates){const qe=te.data.subarray(ke*ce/te.data.BYTES_PER_ELEMENT,(ke+1)*ce/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,te.width,te.height,1,me,I,qe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,I,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,me,I,te.data);else if(w.isData3DTexture)he?(pe&&t.texStorage3D(n.TEXTURE_3D,Ye,ne,te.width,te.height,te.depth),Ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,I,te.data)):t.texImage3D(n.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,me,I,te.data);else if(w.isFramebufferTexture){if(pe)if(he)t.texStorage2D(n.TEXTURE_2D,Ye,ne,te.width,te.height);else{let ce=te.width,ke=te.height;for(let qe=0;qe<Ye;qe++)t.texImage2D(n.TEXTURE_2D,qe,ne,ce,ke,0,me,I,null),ce>>=1,ke>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),te.parentNode!==ce){ce.appendChild(te),f.add(w),ce.onpaint=ke=>{const qe=ke.changedElements;for(const Se of f)qe.includes(Se.image)&&(Se.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const qe=n.RGBA,Se=n.RGBA,ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,qe,Se,ht,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ge.length>0){if(he&&pe){const ce=He(ge[0]);t.texStorage2D(n.TEXTURE_2D,Ye,ne,ce.width,ce.height)}for(let ce=0,ke=ge.length;ce<ke;ce++)Q=ge[ce],he?Ie&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,me,I,Q):t.texImage2D(n.TEXTURE_2D,ce,ne,me,I,Q);w.generateMipmaps=!1}else if(he){if(pe){const ce=He(te);t.texStorage2D(n.TEXTURE_2D,Ye,ne,ce.width,ce.height)}Ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,I,te)}else t.texImage2D(n.TEXTURE_2D,0,ne,me,I,te);y(w)&&w.mipmapsAutoUpdate===!0&&S(oe),_e.__version=de.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Rt(L,w,$){if(w.image.length!==6)return;const oe=Ne(L,w),re=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);const de=i.get(re);if(re.version!==de.__version||oe===!0){t.activeTexture(n.TEXTURE0+$);const _e=et.getPrimaries(et.workingColorSpace),ee=w.colorSpace===xr?null:et.getPrimaries(w.colorSpace),te=w.colorSpace===xr||_e===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const me=w.isCompressedTexture||w.image[0].isCompressedTexture,I=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let Se=0;Se<6;Se++)!me&&!I?ne[Se]=v(w.image[Se],!0,r.maxCubemapSize):ne[Se]=I?w.image[Se].image:w.image[Se],ne[Se]=Oe(w,ne[Se]);const Q=ne[0],ge=s.convert(w.format,w.colorSpace),he=s.convert(w.type);let pe=T(w.internalFormat,ge,he,w.normalized,w.colorSpace);const Ie=w.isVideoTexture!==!0,Ye=de.__version===void 0||oe===!0,ce=re.dataReady;let ke=M(w,Q);Ge(n.TEXTURE_CUBE_MAP,w);let qe;if(w.isDepthTexture){if(pe=x(w.format===wr,w.type),Ye)if(Ie)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,pe,Q.width,Q.height);else for(let Se=0;Se<6;Se++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,Q.width,Q.height,0,ge,he,null)}else if(me){Ie&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,pe,Q.width,Q.height);for(let Se=0;Se<6;Se++){qe=ne[Se].mipmaps;for(let ht=0;ht<qe.length;ht++){const jt=qe[ht];w.format!==Pi?ge!==null?Ie?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ht,0,0,jt.width,jt.height,ge,jt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ht,pe,jt.width,jt.height,0,jt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ht,0,0,jt.width,jt.height,ge,he,jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ht,pe,jt.width,jt.height,0,ge,he,jt.data)}}}else{if(qe=w.mipmaps,Ie&&Ye){qe.length>0&&ke++;const Se=He(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,pe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(I){Ie?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ne[Se].width,ne[Se].height,ge,he,ne[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,ne[Se].width,ne[Se].height,0,ge,he,ne[Se].data);for(let ht=0;ht<qe.length;ht++){const sr=qe[ht].image[Se].image;Ie?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ht+1,0,0,sr.width,sr.height,ge,he,sr.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ht+1,pe,sr.width,sr.height,0,ge,he,sr.data)}}else{Ie?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ge,he,ne[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,ge,he,ne[Se]);for(let ht=0;ht<qe.length;ht++){const jt=qe[ht];Ie?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ht+1,0,0,ge,he,jt.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ht+1,pe,ge,he,jt.image[Se])}}}y(w)&&w.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),de.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function gt(L,w,$,oe,re,de){const _e=s.convert($.format,$.colorSpace),ee=s.convert($.type),te=T($.internalFormat,_e,ee,$.normalized,$.colorSpace),me=i.get(w),I=i.get($);if(I.__renderTarget=w,!me.__hasExternalTextures){const ne=Math.max(1,w.width>>de),Q=Math.max(1,w.height>>de);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,de,te,ne,Q,w.depth,0,_e,ee,null):t.texImage2D(re,de,te,ne,Q,0,_e,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ye(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,I.__webglTexture,0,Et(w)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,I.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function yi(L,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const oe=w.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,de=x(w.stencilBuffer,re),_e=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(w),de,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(w),de,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,L)}else{const oe=w.textures;for(let re=0;re<oe.length;re++){const de=oe[re],_e=s.convert(de.format,de.colorSpace),ee=s.convert(de.type),te=T(de.internalFormat,_e,ee,de.normalized,de.colorSpace);ye(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(w),te,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(w),te,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,te,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Kt(L,w,$){const oe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=i.get(w.depthTexture);re.__renderTarget=w;const de=oe?w.depthTexture.image[0]:w.depthTexture.image;(!re.__webglTexture||de.width!==w.width||de.height!==w.height)&&(de.width=w.width,de.height=w.height,w.depthTexture.needsUpdate=!0),oe?fe(w.depthTexture,0):ie(w.depthTexture,0);const _e=re.__webglTexture,ee=Et(w),te=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,me=w.depthTexture.format===wr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ur)ye(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,te,_e,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,me,te,_e,0);else if(w.depthTexture.format===wr)ye(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,te,_e,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,me,te,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xn(L){const w=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const oe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",re)};oe.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=oe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if($)for(let oe=0;oe<6;oe++)Kt(w.__webglFramebuffer[oe],L,oe);else L.texture.mipmaps.length>0?Kt(w.__webglFramebuffer[0],L,0):Kt(w.__webglFramebuffer,L,0);else if($){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=n.createRenderbuffer(),yi(w.__webglDepthbuffer[oe],L,!1);else{const re=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,de)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),yi(w.__webglDepthbuffer,L,!1);else{const re=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,de)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qn(L,w,$){const oe=i.get(L);w!==void 0&&gt(oe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Xn(L)}function Yn(L){const w=L.texture,$=i.get(L),oe=i.get(w);L.addEventListener("dispose",P),D(L);const re=L.textures,de=L.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=w.version,a.memory.textures++),de){$.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps.length>0){$.__webglFramebuffer[ee]=[];for(let te=0;te<w.mipmaps.length;te++)$.__webglFramebuffer[ee][te]=n.createFramebuffer()}else $.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(w.mipmaps.length>0){$.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)$.__webglFramebuffer[ee]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ee=0,te=re.length;ee<te;ee++){const me=i.get(re[ee]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&ye(L)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ee=0;ee<re.length;ee++){const te=re[ee];$.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ee]);const me=s.convert(te.format,te.colorSpace),I=s.convert(te.type),ne=T(te.internalFormat,me,I,te.normalized,te.colorSpace,L.isXRRenderTarget===!0),Q=Et(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,ne,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,$.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),yi($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)gt($.__webglFramebuffer[ee][te],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else gt($.__webglFramebuffer[ee],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);y(w)?S(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let ee=0,te=re.length;ee<te;ee++){const me=re[ee],I=i.get(me);let ne=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,I.__webglTexture),Ge(ne,me),gt($.__webglFramebuffer,L,me,n.COLOR_ATTACHMENT0+ee,ne,0),y(me)&&S(ne)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,oe.__webglTexture),Ge(ee,w),w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)gt($.__webglFramebuffer[te],L,w,n.COLOR_ATTACHMENT0,ee,te);else gt($.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,ee,0);y(w)?S(ee):w.mipmaps.length>0&&n.texParameteri(ee,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Xn(L)}function H(L){const w=L.textures;for(let $=0,oe=w.length;$<oe;$++){const re=w[$];if(y(re)&&re.mipmapsAutoUpdate===!0){const de=b(L),_e=i.get(re).__webglTexture;t.bindTexture(de,_e),S(de),t.unbindTexture()}}}const $n=[];function Tt(L){if(L.samples>0){if(ye(L)===!1){const w=L.textures,$=L.width,oe=L.height;let re=n.COLOR_BUFFER_BIT;const de=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(L),ee=w.length>1;if(ee)for(let me=0;me<w.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<w.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);const I=i.get(w[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,$,oe,0,0,$,oe,re,n.NEAREST),l===!0&&($n.length=0,$n.push(n.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&$n.push(de),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$n))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<w.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);const I=i.get(w[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,I,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Et(L){return Math.min(r.maxSamples,L.samples)}function ye(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Vt(L){const w=a.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function Oe(L,w){const $=L.colorSpace,oe=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Rc&&$!==xr&&(et.getTransfer($)===ft?(oe!==Pi||re!==zn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",$)),w}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.getTextureUnits=J,this.setTextureUnits=ae,this.setTexture2D=ie,this.setTexture2DArray=ue,this.setTexture3D=Te,this.setTextureCube=fe,this.rebindTextures=qn,this.setupRenderTarget=Yn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Xn,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ye,this.dispose=U}function qE(n,e){function t(i,r=xr){let s;const a=et.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===Jd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===y_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===S_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===__)return n.BYTE;if(i===x_)return n.SHORT;if(i===Ao)return n.UNSIGNED_SHORT;if(i===Zd)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===M_)return n.ALPHA;if(i===w_)return n.RGB;if(i===Pi)return n.RGBA;if(i===Ur)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===ep)return n.RED;if(i===tp)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===np)return n.RG_INTEGER;if(i===ip)return n.RGBA_INTEGER;if(i===Yl||i===$l||i===Kl||i===jl)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===xf||i===yf||i===Sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mf||i===wf||i===Tf||i===Ef||i===bf||i===Ec||i===Af)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mf||i===wf)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Tf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ef)return s.COMPRESSED_R11_EAC;if(i===bf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ec)return s.COMPRESSED_RG11_EAC;if(i===Af)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rf||i===Pf||i===Cf||i===Lf||i===Df||i===Nf||i===If||i===Uf||i===kf||i===Ff||i===Of||i===zf||i===Bf||i===Gf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Df)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Of)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hf||i===Vf||i===Wf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hf)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xf||i===qf||i===bc||i===Yf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$E=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new W_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new us({vertexShader:YE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends ds{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,m=null;const _=typeof XRWebGLBinding<"u",g=new KE,u={},v=t.getContextAttributes();let y=null,S=null;const b=[],T=[],x=new Be;let M=null,D=null;const A=new ei;A.viewport=new Lt;const C=new ei;C.viewport=new Lt;const P=[A,C],N=new lM;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ie=b[V];return ie===void 0&&(ie=new Yu,b[V]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(V){let ie=b[V];return ie===void 0&&(ie=new Yu,b[V]=ie),ie.getGripSpace()},this.getHand=function(V){let ie=b[V];return ie===void 0&&(ie=new Yu,b[V]=ie),ie.getHandSpace()};function q(V){const ie=T.indexOf(V.inputSource);if(ie===-1)return;const ue=b[ie];ue!==void 0&&(ue.update(V.inputSource,V.frame,c||a),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",G);for(let V=0;V<b.length;V++){const ie=T[V];ie!==null&&(T[V]=null,b[V].disconnect(ie))}R=null,U=null,g.reset();for(const V in u)delete u[V];if(e.setRenderTarget(y),p=null,d=null,f=null,r=null,S=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),D!==null){const V=D.camera;V.fov=D.fov,V.zoom=D.zoom,V.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",z),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Te=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?wr:Ur,Te=v.stencil?fa:Ii);const Ue={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ni(d.textureWidth,d.textureHeight,{format:Pi,type:zn,depthTexture:new da(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ni(p.framebufferWidth,p.framebufferHeight,{format:Pi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(V){for(let ie=0;ie<V.removed.length;ie++){const ue=V.removed[ie],Te=T.indexOf(ue);Te>=0&&(T[Te]=null,b[Te].disconnect(ue))}for(let ie=0;ie<V.added.length;ie++){const ue=V.added[ie];let Te=T.indexOf(ue);if(Te===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=T.length){T.push(ue),Te=Ue;break}else if(T[Ue]===null){T[Ue]=ue,Te=Ue;break}if(Te===-1)break}const fe=b[Te];fe&&fe.connect(ue)}}function O(V,ie){ie===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ie.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let ie=V.near,ue=V.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),N.near=C.near=A.near=ie,N.far=C.far=A.far=ue,(R!==N.near||U!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,U=N.far),N.layers.mask=V.layers.mask|6,A.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;const Te=V.parent,fe=N.cameras;O(N,Te);for(let Ue=0;Ue<fe.length;Ue++)O(fe[Ue],Te);N.projectionMatrix.copy(A.projectionMatrix),N.projectionMatrixInverse.copy(A.projectionMatrixInverse),D===null&&V.isPerspectiveCamera&&(D={camera:V,fov:V.fov,zoom:V.zoom}),X(V,N,Te)};function X(V,ie,ue){ue===null?V.matrix.copy(ie.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(ie.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ie.projectionMatrix),V.projectionMatrixInverse.copy(ie.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=$f*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(V){return u[V]};let J=null;function ae(V,ie){if(h=ie.getViewerPose(c||a),m=ie,h!==null){const ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Te=!1;ue.length!==N.cameras.length&&(N.cameras.length=0,Te=!0);for(let De=0;De<ue.length;De++){const Ge=ue[De];let Ne=null;if(p!==null)Ne=p.getViewport(Ge);else{const Ft=f.getViewSubImage(d,Ge);Ne=Ft.viewport,De===0&&(e.setRenderTargetTextures(S,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(S))}let We=P[De];We===void 0&&(We=new ei,We.layers.enable(De),We.viewport=new Lt,P[De]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),De===0&&(N.matrix.copy(We.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Te===!0&&N.cameras.push(We)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const De=f.getDepthInformation(ue[0]);De&&De.isValid&&De.texture&&g.init(De,r.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let De=0;De<ue.length;De++){const Ge=ue[De].camera;if(Ge){let Ne=u[Ge];Ne||(Ne=new W_,u[Ge]=Ne);const We=f.getCameraImage(Ge);Ne.sourceTexture=We}}}}for(let ue=0;ue<b.length;ue++){const Te=T[ue],fe=b[ue];Te!==null&&fe!==void 0&&fe.update(Te,ie,c||a)}J&&J(V,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const j=new j_;j.setAnimationLoop(ae),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}}const ZE=new at,ax=new Ve;ax.set(-1,0,0,0,1,0,0,0,1);function JE(n,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,X_(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,v,y,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&p(g,u,S)):u.isMeshMatcapMaterial?(s(g,u),m(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),_(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,v,y):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===In&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===In&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const v=e.get(u),y=v.envMap,S=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ax),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,v,y){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*v,g.scale.value=y*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,v){g.ior.value=u.ior,u.diffuseRoughness>0&&(g.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===In&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.retroreflectivity>0&&(g.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function _(g,u){const v=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QE(n,e,t,i){let r={},s={};function a(v,y){const S=y.program;i.uniformBlockBinding(v,S,r[v.id])}function o(v,y){let S=r[v.id];S===void 0&&(m(v),S=l(v),r[v.id]=S,v.addEventListener("dispose",g));const b=y.program;i.updateUBOMapping(v,b);const T=e.render.frame;s[v.id]!==T&&(c(v),s[v.id]=T)}function l(v){const y=n.createBuffer(),S=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,b),n.bindBuffer(n.UNIFORM_BUFFER,null),y}function c(v){const y=r[v.id],S=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,x=S.length;T<x;T++){const M=S[T];if(Array.isArray(M))for(let D=0,A=M.length;D<A;D++)h(M[D],T,D,b);else h(M,T,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,y,S,b){if(d(v,y,S,b)===!0){const T=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let D=0;D<x.length;D++){const A=x[D],C=_(A,!0);f(A,v.__data,M),M+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function f(v,y,S){typeof v=="number"||typeof v=="boolean"?y[S]=v:v.isMatrix3?(y[S]=v.elements[0],y[S+1]=v.elements[1],y[S+2]=v.elements[2],y[S+3]=0,y[S+4]=v.elements[3],y[S+5]=v.elements[4],y[S+6]=v.elements[5],y[S+7]=0,y[S+8]=v.elements[6],y[S+9]=v.elements[7],y[S+10]=v.elements[8],y[S+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-S),S):v.toArray(y,S)}function d(v,y,S,b){const T=v.value,x=y+"_"+S;if(Array.isArray(T)){b[x]===void 0&&(b[x]=[]);const M=b[x];let D=!1;for(let A=0;A<T.length;A++)p(T[A],M,A)===!0&&(D=!0);return D}return p(T,b,x)}function p(v,y,S){if(y[S]===void 0)return typeof v=="number"||typeof v=="boolean"?y[S]=v:ArrayBuffer.isView(v)?y[S]=v.slice():y[S]=v.clone(),!0;{const b=y[S];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return y[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(v){const y=v.uniforms;let S=0;const b=16;for(let x=0,M=y.length;x<M;x++){const D=Array.isArray(y[x])?y[x]:[y[x]];for(let A=0,C=D.length;A<C;A++){const P=D[A],N=Array.isArray(P.value)?P.value:[P.value],R=Array.isArray(y[x])||Array.isArray(P.value);let U=S;for(let z=0,G=N.length;z<G;z++){const O=N[z],X=_(O,R),J=S%b,ae=J%X.boundary,j=J+ae;S+=ae,j!==0&&b-j<X.storage&&(S+=b-j),z===0&&(U=S),S+=X.storage}const q=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new q((S-U)/Float32Array.BYTES_PER_ELEMENT),P.__offset=U}}const T=S%b;return T>0&&(S+=b-T),v.__size=S,v.__cache={},this}function _(v,y){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(v){const y=v.target;y.removeEventListener("dispose",g),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const v in r)n.deleteBuffer(r[v]);r={},s={}}return{bind:a,update:o,dispose:u}}const eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function tb(){return wi===null&&(wi=new z_(eb,16,16,cs,Ui),wi.name="DFG_LUT",wi.minFilter=Cn,wi.magFilter=Cn,wi.wrapS=Ki,wi.wrapT=Ki,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class ox{constructor(e={}){const{canvas:t=_S(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=p,g=new Set([ip,np,tp]),u=new Set([zn,Ii,Ao,fa,Jd,Qd]),v=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let b=null,T=null;const x=[],M=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,P=null,N=null,R=null,U=null;this._outputColorSpace=en;let q=0,z=0,G=null,O=-1,X=null;const J=new Lt,ae=new Lt;let j=null;const V=new Fe(0);let ie=0,ue=t.width,Te=t.height,fe=1,Ue=null,Qe=null;const De=new Lt(0,0,ue,Te),Ge=new Lt(0,0,ue,Te);let Ne=!1;const We=new Po,Ft=new op;let ut=!1,Rt=!1;const gt=new at,yi=new k,Kt=new Lt,Xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qn=!1;function Yn(){return G===null?fe:1}let H=i;function $n(E,F){return t.getContext(E,F)}let Tt,Et,ye,Vt,Oe,He,L,w,$,oe,re,de,_e,ee,te,me,I,ne,Q,ge,he,pe,Ie;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$d}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),H===null){const F="webgl2";if(H=$n(F,E),H===null)throw $n(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(E){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),st("WebGLRenderer: "+E.message),E}function Ye(){Tt=new sT(H),Tt.init(),he=new qE(H,Tt),Et=new $2(H,Tt,e,he),ye=new WE(H,Tt),Et.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),N=H.createFramebuffer(),R=H.createFramebuffer(),U=H.createFramebuffer(),Vt=new lT(H),Oe=new CE,He=new XE(H,Tt,ye,Oe,Et,he,Vt),L=new rT(A),w=new uM(H),pe=new q2(H,w),$=new aT(H,w,Vt,pe),oe=new uT(H,$,w,pe,Vt),ne=new cT(H,Et,He),te=new K2(Oe),re=new PE(A,L,Tt,Et,pe,te),de=new JE(A,Oe),_e=new DE,ee=new OE(Tt),I=new X2(A,L,ye,oe,m,l),me=new VE(A,oe,Et),Ie=new QE(H,Vt,Et,ye),Q=new Y2(H,Tt,Vt),ge=new oT(H,Tt,Vt),Vt.programs=re.programs,A.capabilities=Et,A.extensions=Tt,A.properties=Oe,A.renderLists=_e,A.shadowMap=me,A.state=ye,A.info=Vt}_!==zn&&(D=new fT(_,t.width,t.height,o,r,s));const ce=new jE(A,H);this.xr=ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=Tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(E){E!==void 0&&(fe=E,this.setSize(ue,Te,!1))},this.getSize=function(E){return E.set(ue,Te)},this.setSize=function(E,F,Z=!0){if(ce.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=E,Te=F,t.width=Math.floor(E*fe),t.height=Math.floor(F*fe),Z===!0&&(t.style.width=E+"px",t.style.height=F+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ue*fe,Te*fe).floor()},this.setDrawingBufferSize=function(E,F,Z){ue=E,Te=F,fe=Z,t.width=Math.floor(E*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===zn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,F,Z,Y){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,F,Z,Y),ye.viewport(J.copy(De).multiplyScalar(Yn()).round())},this.getScissor=function(E){return E.copy(Ge)},this.setScissor=function(E,F,Z,Y){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,F,Z,Y),ye.scissor(ae.copy(Ge).multiplyScalar(Yn()).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){ye.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){Ue=E},this.setTransparentSort=function(E){Qe=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Z=!0){let Y=0;if(E){let K=!1;if(G!==null){const xe=G.texture.format;K=g.has(xe)}if(K){const xe=G.texture.type,Ae=u.has(xe),ve=I.getClearColor(),we=I.getClearAlpha(),Le=ve.r,Xe=ve.g,Ze=ve.b;Ae?(v[0]=Le,v[1]=Xe,v[2]=Ze,v[3]=we,H.clearBufferuiv(H.COLOR,0,v)):(y[0]=Le,y[1]=Xe,y[2]=Ze,y[3]=we,H.clearBufferiv(H.COLOR,0,y))}else Y|=H.COLOR_BUFFER_BIT}F&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),I.dispose(),_e.dispose(),ee.dispose(),He.dispose(),Oe.dispose(),L.dispose(),oe.dispose(),$.dispose(),pe.dispose(),Ie.dispose(),re.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",gp),ce.removeEventListener("sessionend",vp),zr.stop()};function ke(E){E.preventDefault(),Lc("WebGLRenderer: Context Lost."),C=!0}function qe(){Lc("WebGLRenderer: Context Restored."),C=!1;const E=Vt.autoReset,F=me.enabled,Z=me.autoUpdate,Y=me.needsUpdate,K=me.type;Ye(),Vt.autoReset=E,me.enabled=F,me.autoUpdate=Z,me.needsUpdate=Y,me.type=K}function Se(E){st("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ht(E){const F=E.target;F.removeEventListener("dispose",ht),jt(F)}function jt(E){sr(E),Oe.remove(E)}function sr(E){const F=Oe.get(E).programs;F!==void 0&&(F.forEach(function(Z){re.releaseProgram(Z)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Z,Y,K,xe){F===null&&(F=Xn);const Ae=K.isMesh&&K.matrixWorld.determinantAffine()<0,ve=ux(E,F,Z,Y,K);ye.setMaterial(Y,Ae);let we=Z.index,Le=1;if(Y.wireframe===!0){if(we=$.getWireframeAttribute(Z),we===void 0)return;Le=2}const Xe=Z.drawRange,Ze=Z.attributes.position;let Re=Xe.start*Le,Je=(Xe.start+Xe.count)*Le;xe!==null&&(Re=Math.max(Re,xe.start*Le),Je=Math.min(Je,(xe.start+xe.count)*Le)),we!==null?(Re=Math.max(Re,0),Je=Math.min(Je,we.count)):Ze!=null&&(Re=Math.max(Re,0),Je=Math.min(Je,Ze.count));const Bt=Je-Re;if(Bt<0||Bt===1/0)return;pe.setup(K,Y,ve,Z,we);let vt,pt=Q;if(we!==null&&(vt=w.get(we),pt=ge,pt.setIndex(vt)),K.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*Yn()),pt.setMode(H.LINES)):pt.setMode(H.TRIANGLES);else if(K.isLine){let cn=Y.linewidth;cn===void 0&&(cn=1),ye.setLineWidth(cn*Yn()),K.isLineSegments?pt.setMode(H.LINES):K.isLineLoop?pt.setMode(H.LINE_LOOP):pt.setMode(H.LINE_STRIP)}else K.isPoints?pt.setMode(H.POINTS):K.isSprite&&pt.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))pt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const cn=K._multiDrawStarts,Pe=K._multiDrawCounts,xn=K._multiDrawCount,ot=we?w.get(we).bytesPerElement:1,Br=Oe.get(Y).currentProgram.getUniforms();for(let un=0;un<xn;un++)Br.setValue(H,"_gl_DrawID",un),pt.render(cn[un]/ot,Pe[un])}else if(K.isInstancedMesh)pt.renderInstances(Re,Bt,K.count);else if(Z.isInstancedBufferGeometry){const cn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pe=Math.min(Z.instanceCount,cn);pt.renderInstances(Re,Bt,Pe)}else pt.render(Re,Bt)};function mp(E,F,Z,Y){P!==null&&E.isNodeMaterial&&P.setObject(Y,E),ut===!0&&te.setState(E,Z,!1),E.transparent===!0&&E.side===Rn&&E.forceSinglePass===!1?(E.side=In,E.needsUpdate=!0,Ma(E,F,Y),E.side=ls,E.needsUpdate=!0,Ma(E,F,Y),E.side=Rn):Ma(E,F,Y)}this.compile=function(E,F,Z=null){Z===null&&(Z=E),P!==null&&P.renderStart(E,F,Z),T=ee.get(Z),T.init(F),M.push(T),Z.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),E!==Z&&E.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),Rt=this.localClippingEnabled,ut=te.init(this.clippingPlanes,Rt),ut===!0&&te.setGlobalState(this.clippingPlanes,F),P!==null&&me.render(T.state.shadowsArray,Z,F);const Y=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const xe=K.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const ve=xe[Ae];mp(ve,Z,F,K),Y.add(ve)}else mp(xe,Z,F,K),Y.add(xe)}),T=M.pop(),P!==null&&P.renderEnd(),Y},this.compileAsync=function(E,F,Z=null){const Y=this.compile(E,F,Z);return new Promise(K=>{function xe(){if(Y.forEach(function(Ae){const we=Oe.get(Ae).currentProgram;(we===void 0||we.isReady())&&Y.delete(Ae)}),Y.size===0){K(E);return}setTimeout(xe,10)}Tt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let lu=null;function lx(E){lu&&lu(E)}function gp(){zr.stop()}function vp(){zr.start()}const zr=new j_;zr.setAnimationLoop(lx),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(E){lu=E,ce.setAnimationLoop(E),E===null?zr.stop():zr.start()},ce.addEventListener("sessionstart",gp),ce.addEventListener("sessionend",vp),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(E,F);const Z=ce.enabled===!0&&ce.isPresenting===!0,Y=D!==null&&(G===null||Z)&&D.begin(A,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,F,G),T=ee.get(E,M.length),T.init(F),T.state.textureUnits=He.getTextureUnits(),M.push(T),gt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Ft.setFromArrayCamera(F):We.setFromProjectionMatrix(gt,gi,F.reversedDepth),Rt=this.localClippingEnabled,ut=te.init(this.clippingPlanes,Rt),b=_e.get(E,x.length),b.init(),x.push(b),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){const Ae=A.xr.getDepthSensingMesh();Ae!==null&&cu(Ae,F,-1/0,A.sortObjects)}cu(E,F,0,A.sortObjects),b.finish(),P!==null&&P.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(Ue,Qe),qn=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,qn&&I.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),ut===!0&&te.beginShadows();const K=T.state.shadowsArray;if(me.render(K,E,F),ut===!0&&te.endShadows(),(Y&&D.hasRenderPass())===!1){const Ae=b.opaque,ve=b.transmissive;if(T.setupLights(),F.isArrayCamera){const we=F.cameras;if(ve.length>0)for(let Le=0,Xe=we.length;Le<Xe;Le++){const Ze=we[Le];xp(Ae,ve,E,Ze)}qn&&I.render(E);for(let Le=0,Xe=we.length;Le<Xe;Le++){const Ze=we[Le];_p(b,E,Ze,Ze.viewport)}}else ve.length>0&&xp(Ae,ve,E,F),qn&&I.render(E),_p(b,E,F)}G!==null&&z===0&&(He.updateMultisampleRenderTarget(G),He.updateRenderTargetMipmap(G)),Y&&D.end(A),E.isScene===!0&&E.onAfterRender(A,E,F),pe.resetDefaultState(),O=-1,X=null,M.pop(),M.length>0?(T=M[M.length-1],He.setTextureUnits(T.state.textureUnits),ut===!0&&te.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,P!==null&&P.renderEnd()};function cu(E,F,Z,Y){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){const Ae=F.isArrayCamera?Ft:We;if(!E.frustumCulled||E.intersectsFrustum(Ae)){Y&&Kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const ve=oe.update(E),we=E.material;we.visible&&b.push(E,ve,we,Z,Kt.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){const Ae=F.isArrayCamera?Ft:We;if(!E.frustumCulled||E.intersectsFrustum(Ae)){const ve=oe.update(E),we=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Kt.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Kt.copy(ve.boundingSphere.center)),Kt.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(we)){const Le=ve.groups;for(let Xe=0,Ze=Le.length;Xe<Ze;Xe++){const Re=Le[Xe],Je=we[Re.materialIndex];Je&&Je.visible&&b.push(E,ve,Je,Z,Kt.z,Re,F)}}else we.visible&&b.push(E,ve,we,Z,Kt.z,null,F)}}}const xe=E.children;for(let Ae=0,ve=xe.length;Ae<ve;Ae++)cu(xe[Ae],F,Z,Y)}function _p(E,F,Z,Y){const{opaque:K,transmissive:xe,transparent:Ae}=E;T.setupLightsView(Z),ut===!0&&te.setGlobalState(A.clippingPlanes,Z),Y&&ye.viewport(J.copy(Y)),K.length>0&&ko(K,F,Z),xe.length>0&&ko(xe,F,Z),Ae.length>0&&ko(Ae,F,Z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function xp(E,F,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){const Re=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new Ni(1,1,{generateMipmaps:!0,type:Re?Ui:zn,minFilter:Mr,samples:Math.max(4,Et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const xe=T.state.transmissionRenderTarget[Y.id],Ae=Y.viewport||J;xe.setSize(Ae.z*A.transmissionResolutionScale,Ae.w*A.transmissionResolutionScale);const ve=A.getRenderTarget(),we=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(xe),A.getClearColor(V),ie=A.getClearAlpha(),ie<1&&A.setClearColor(16777215,.5),A.clear(),qn&&I.render(Z);const Xe=A.toneMapping;A.toneMapping=Zi;const Ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),ut===!0&&te.setGlobalState(A.clippingPlanes,Y),ko(E,Z,Y),He.updateMultisampleRenderTarget(xe),He.updateRenderTargetMipmap(xe),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Je=0,Bt=F.length;Je<Bt;Je++){const vt=F[Je],{object:pt,geometry:cn,material:Pe,group:xn}=vt;if(Pe.side===Rn&&pt.layers.test(Y.layers)){const ot=Pe.side;Pe.side=In,Pe.needsUpdate=!0,yp(pt,Z,Y,cn,Pe,xn),Pe.side=ot,Pe.needsUpdate=!0,Re=!0}}Re===!0&&(He.updateMultisampleRenderTarget(xe),He.updateRenderTargetMipmap(xe))}A.setRenderTarget(ve,we,Le),A.setClearColor(V,ie),Ze!==void 0&&(Y.viewport=Ze),A.toneMapping=Xe}function ko(E,F,Z){const Y=F.isScene===!0?F.overrideMaterial:null;for(let K=0,xe=E.length;K<xe;K++){const Ae=E[K],{object:ve,geometry:we,group:Le}=Ae;let Xe=Ae.material;Xe.allowOverride===!0&&Y!==null&&(Xe=Y),ve.layers.test(Z.layers)&&yp(ve,F,Z,we,Xe,Le)}}function yp(E,F,Z,Y,K,xe){P!==null&&K.isNodeMaterial&&P.setObject(E,K),E.onBeforeRender(A,F,Z,Y,K,xe),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(A,F,Z,Y,E,xe),K.transparent===!0&&K.side===Rn&&K.forceSinglePass===!1?(K.side=In,K.needsUpdate=!0,A.renderBufferDirect(Z,F,Y,K,E,xe),K.side=ls,K.needsUpdate=!0,A.renderBufferDirect(Z,F,Y,K,E,xe),K.side=Rn):A.renderBufferDirect(Z,F,Y,K,E,xe),E.onAfterRender(A,F,Z,Y,K,xe)}function Sp(E){let F=0;for(const Z of E)Z.texture!==null&&F++;return F}function Ma(E,F,Z){F.isScene!==!0&&(F=Xn);const Y=Oe.get(E),K=T.state.lights,xe=T.state.shadowsArray,Ae=K.state.version,ve=re.getParameters(E,K.state,xe,F,Z,T.state.lightProbeGridArray),we=re.getProgramCacheKey(ve);let Le=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,Y.fog=F.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=L.get(E.envMap||Y.environment,Xe),Y.envMapRotation=Y.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",ht),Le=new Map,Y.programs=Le,Y.programVariants=new Map);let Ze=Le.get(we);if(Ze!==void 0){if(Y.currentProgram===Ze&&Y.lightsStateVersion===Ae)return wp(E,ve),Ze}else ve.uniforms=re.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,Z,ve),E.onBeforeCompile(ve,A),Ze=re.acquireProgram(ve,we),Le.set(we,Ze),Y.uniforms=ve.uniforms;const Re=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=te.uniform),wp(E,ve),Y.needsLights=fx(E),Y.lightsStateVersion=Ae,Y.needsLights&&(Re.ambientLightColor.value=K.state.ambient,Re.lightProbe.value=K.state.probe,Re.sunLights.value=K.state.sun,Re.sunLightShadows.value=K.state.sunShadow,Re.directionalLights.value=K.state.directional,Re.directionalLightShadows.value=K.state.directionalShadow,Re.spotLights.value=K.state.spot,Re.spotLightShadows.value=K.state.spotShadow,Re.rectAreaLights.value=K.state.rectArea,Re.ltc_1.value=K.state.rectAreaLTC1,Re.ltc_2.value=K.state.rectAreaLTC2,Re.pointLights.value=K.state.point,Re.pointLightShadows.value=K.state.pointShadow,Re.hemisphereLights.value=K.state.hemi,Re.sunShadowMatrix.value=K.state.sunShadowMatrix,Re.sunShadowCascade.value=K.state.sunShadowCascade,Re.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Re.spotLightMatrix.value=K.state.spotLightMatrix,Re.spotLightMap.value=K.state.spotLightMap,Re.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.numLightProbeGrids=Sp(T.state.lightProbeGridArray),Y.currentProgram=Ze,Y.uniformsList=null,Ze}function cx(E,F,Z,Y,K){const xe=Oe.get(E),Ae=xe.currentProgram.id+","+Y+","+K;let ve=xe.programVariants.get(Ae);return ve===void 0?(ve=Ma(E,F,Z),xe.programVariants.set(Ae,ve)):(xe.currentProgram=ve,xe.uniformsList=null,xe.outputColorSpace=Y,xe.toneMapping=K),ve}function Mp(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Jl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function wp(E,F){const Z=Oe.get(E);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function ux(E,F,Z,Y,K){F.isScene!==!0&&(F=Xn),He.resetTextureUnits();const xe=F.fog,Ae=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?F.environment:null,ve=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:et.workingColorSpace,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Le=L.get(Y.envMap||Ae,we),Xe=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Re=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color;let vt=Zi;Y.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(vt=A.toneMapping);const pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,cn=pt!==void 0?pt.length:0,Pe=Oe.get(Y),xn=T.state.lights;if(ut===!0&&(Rt===!0||E!==X)){const Pt=E===X&&Y.id===O;te.setState(Y,E,Pt)}let ot=!1,Br=!1;Y.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==xn.state.version||K.isBatchedMesh&&Pe.batching===!1||!K.isBatchedMesh&&Pe.batching===!0||K.isBatchedMesh&&Pe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Pe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Pe.instancing===!1||!K.isInstancedMesh&&Pe.instancing===!0||K.isSkinnedMesh&&Pe.skinning===!1||!K.isSkinnedMesh&&Pe.skinning===!0||K.isInstancedMesh&&Pe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Pe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Pe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Pe.instancingMorph===!1&&K.morphTexture!==null||Pe.envMap!==Le||Y.fog===!0&&Pe.fog!==xe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==te.numPlanes||Pe.numIntersection!==te.numIntersection)||Pe.vertexAlphas!==Xe||Pe.vertexTangents!==Ze||Pe.morphTargets!==Re||Pe.morphNormals!==Je||Pe.morphColors!==Bt||Pe.morphTargetsCount!==cn||Pe.numLightProbeGrids!==Sp(T.state.lightProbeGridArray)?ot=!0:(Pe.outputColorSpace!==ve||Pe.toneMapping!==vt)&&(Br=!0):(ot=!0,Pe.__version=Y.version);let un=Pe.currentProgram;(ot===!0||Br===!0)&&(un=Br===!0?cx(Y,F,K,ve,vt):Ma(Y,F,K),P&&Y.isNodeMaterial&&P.onUpdateProgram(Y,un,Pe));let Fo=!1,ar=!1,Gr=!1;const nt=un.getUniforms(),nn=Pe.uniforms;if(ye.useProgram(un.program)&&(Fo=!0,ar=!0,Gr=!0),Y.id!==O&&(O=Y.id,ar=!0),Fo||X!==E){ye.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),nt.setValue(H,"projectionMatrix",E.projectionMatrix),nt.setValue(H,"viewMatrix",E.matrixWorldInverse);const Zt=nt.map.cameraPosition;Zt!==void 0&&Zt.setValue(H,yi.setFromMatrixPosition(E.matrixWorld)),Et.logarithmicDepthBuffer&&nt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&nt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,ar=!0,Gr=!0)}if(Pe.needsLights&&(xn.state.sunShadowMap.length>0&&nt.setValue(H,"sunShadowMap",xn.state.sunShadowMap,He),xn.state.directionalShadowMap.length>0&&nt.setValue(H,"directionalShadowMap",xn.state.directionalShadowMap,He),xn.state.spotShadowMap.length>0&&nt.setValue(H,"spotShadowMap",xn.state.spotShadowMap,He),xn.state.pointShadowMap.length>0&&nt.setValue(H,"pointShadowMap",xn.state.pointShadowMap,He)),K.isSkinnedMesh){nt.setOptional(H,K,"bindMatrix"),nt.setOptional(H,K,"bindMatrixInverse");const Pt=K.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),nt.setValue(H,"boneTexture",Pt.boneTexture,He))}K.isBatchedMesh&&(nt.setOptional(H,K,"batchingTexture"),nt.setValue(H,"batchingTexture",K._matricesTexture,He),nt.setOptional(H,K,"batchingIdTexture"),nt.setValue(H,"batchingIdTexture",K._indirectTexture,He),nt.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&nt.setValue(H,"batchingColorTexture",K._colorsTexture,He));const ai=Z.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&ne.update(K,Z,un),(ar||Pe.receiveShadow!==K.receiveShadow)&&(Pe.receiveShadow=K.receiveShadow,nt.setValue(H,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&F.environment!==null&&(nn.envMapIntensity.value=F.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=tb()),ar){if(nt.setValue(H,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&hx(nn,Gr),xe&&Y.fog===!0&&de.refreshFogUniforms(nn,xe),de.refreshMaterialUniforms(nn,Y,fe,Te,T.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const Pt=S;let Zt=0;for(const Fi of T.state.lightProbeGridArray)Fi.texture!==null&&(Pt.textures[Zt]=Fi.texture,Pt.min[Zt]=Fi.boundingBox.min,Pt.max[Zt]=Fi.boundingBox.max,Pt.resolution[Zt]=Fi.resolution,Zt++);for(const Fi in Pt)Pt[Fi].length=Zt;nn.probesSH.value=Pt.textures,nn.probesMin.value=Pt.min,nn.probesMax.value=Pt.max,nn.probesResolution.value=Pt.resolution}Jl.upload(H,Mp(Pe),nn,He)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Jl.upload(H,Mp(Pe),nn,He),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&nt.setValue(H,"center",K.center),nt.setValue(H,"modelViewMatrix",K.modelViewMatrix),nt.setValue(H,"normalMatrix",K.normalMatrix),nt.setValue(H,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const Pt=Y.uniformsGroups;for(let Zt=0,Fi=Pt.length;Zt<Fi;Zt++){const Ep=Pt[Zt];Ie.update(Ep,un),Ie.bind(Ep,un)}}return un}function hx(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function fx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,F,Z){const Y=Oe.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Oe.get(E.texture).__webglTexture=F,Oe.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const Z=Oe.get(E);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Z=0){G=E,q=F,z=Z;let Y=null,K=!1,xe=!1;if(E){const ve=Oe.get(E);if(ve.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(H.FRAMEBUFFER,ve.__webglFramebuffer),J.copy(E.viewport),ae.copy(E.scissor),j=E.scissorTest,ye.viewport(J),ye.scissor(ae),ye.setScissorTest(j),O=-1;return}else if(ve.__webglFramebuffer===void 0)He.setupRenderTarget(E);else if(ve.__hasExternalTextures)He.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(ve.__boundDepthTexture!==Xe){if(Xe!==null&&Oe.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(E)}}const we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const Le=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?Y=Le[F][Z]:Y=Le[F],K=!0):E.samples>0&&He.useMultisampledRTT(E)===!1?Y=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?Y=Le[Z]:Y=Le,J.copy(E.viewport),ae.copy(E.scissor),j=E.scissorTest}else J.copy(De).multiplyScalar(fe).floor(),ae.copy(Ge).multiplyScalar(fe).floor(),j=Ne;if(Z!==0&&(Y=N),ye.bindFramebuffer(H.FRAMEBUFFER,Y)&&ye.drawBuffers(E,Y),ye.viewport(J),ye.scissor(ae),ye.setScissorTest(j),K){const ve=Oe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,Z)}else if(xe){const ve=F;for(let we=0;we<E.textures.length;we++){const Le=Oe.get(E.textures[we]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+we,Le.__webglTexture,Z,ve)}}else if(E!==null&&Z!==0){const ve=Oe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ve.__webglTexture,Z)}O=-1};function Tp(E){const F=Oe.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Et.textureFormatReadable(E.format),F.__typeReadable=Et.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Z,Y,K,xe,Ae,ve=0){if(!(E&&E.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we){ye.bindFramebuffer(H.FRAMEBUFFER,we);try{const Le=E.textures[ve],Xe=Le.format,Ze=Le.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ve);const Re=Tp(Le);if(Re.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-Y&&Z>=0&&Z<=E.height-K&&H.readPixels(F,Z,Y,K,he.convert(Xe),he.convert(Ze),xe)}finally{const Le=G!==null?Oe.get(G).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,F,Z,Y,K,xe,Ae,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we)if(F>=0&&F<=E.width-Y&&Z>=0&&Z<=E.height-K){ye.bindFramebuffer(H.FRAMEBUFFER,we);const Le=E.textures[ve],Xe=Le.format,Ze=Le.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ve);const Re=Tp(Le);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Je),H.bufferData(H.PIXEL_PACK_BUFFER,xe.byteLength,H.STREAM_READ),H.readPixels(F,Z,Y,K,he.convert(Xe),he.convert(Ze),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Bt=G!==null?Oe.get(G).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,Bt);const vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await xS(H,vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xe),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Je),H.deleteSync(vt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Z=0){const Y=Math.pow(2,-Z),K=Math.floor(E.image.width*Y),xe=Math.floor(E.image.height*Y),Ae=F!==null?F.x:0,ve=F!==null?F.y:0;He.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,Ae,ve,K,xe),ye.unbindTexture()},this.copyTextureToTexture=function(E,F,Z=null,Y=null,K=0,xe=0){let Ae,ve,we,Le,Xe,Ze,Re,Je,Bt;const vt=E.isCompressedTexture?E.mipmaps[xe]:E.image;if(Z!==null)Ae=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,we=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Xe=Z.min.y,Ze=Z.isBox3?Z.min.z:0;else{const nt=Math.pow(2,-K);Ae=Math.floor(vt.width*nt),ve=Math.floor(vt.height*nt),E.isDataArrayTexture?we=vt.depth:E.isData3DTexture?we=Math.floor(vt.depth*nt):we=1,Le=0,Xe=0,Ze=0}Y!==null?(Re=Y.x,Je=Y.y,Bt=Y.z):(Re=0,Je=0,Bt=0);const pt=he.convert(F.format),cn=he.convert(F.type);let Pe;F.isData3DTexture?(He.setTexture3D(F,0),Pe=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Pe=H.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Pe=H.TEXTURE_2D),ye.activeTexture(H.TEXTURE0),ye.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),ye.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ye.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);const xn=ye.getParameter(H.UNPACK_ROW_LENGTH),ot=ye.getParameter(H.UNPACK_IMAGE_HEIGHT),Br=ye.getParameter(H.UNPACK_SKIP_PIXELS),un=ye.getParameter(H.UNPACK_SKIP_ROWS),Fo=ye.getParameter(H.UNPACK_SKIP_IMAGES);ye.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),ye.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),ye.pixelStorei(H.UNPACK_SKIP_PIXELS,Le),ye.pixelStorei(H.UNPACK_SKIP_ROWS,Xe),ye.pixelStorei(H.UNPACK_SKIP_IMAGES,Ze);const ar=E.isDataArrayTexture||E.isData3DTexture,Gr=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const nt=Oe.get(E),nn=Oe.get(F),ai=Oe.get(nt.__renderTarget),Pt=Oe.get(nn.__renderTarget);ye.bindFramebuffer(H.READ_FRAMEBUFFER,ai.__webglFramebuffer),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Zt=0;Zt<we;Zt++)ar&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.get(E).__webglTexture,K,Ze+Zt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.get(F).__webglTexture,xe,Bt+Zt)),H.blitFramebuffer(Le,Xe,Le+Ae,Xe+ve,Re,Je,Re+Ae,Je+ve,H.DEPTH_BUFFER_BIT,H.NEAREST);ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||Oe.has(E)){const nt=Oe.get(E),nn=Oe.get(F);ye.bindFramebuffer(H.READ_FRAMEBUFFER,R),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,U);for(let ai=0;ai<we;ai++)ar?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.__webglTexture,K,Ze+ai):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,nt.__webglTexture,K),Gr?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nn.__webglTexture,xe,Bt+ai):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,nn.__webglTexture,xe),K!==0?H.blitFramebuffer(Le,Xe,Le+Ae,Xe+ve,Re,Je,Re+Ae,Je+ve,H.COLOR_BUFFER_BIT,H.NEAREST):Gr?H.copyTexSubImage3D(Pe,xe,Re,Je,Bt+ai,Le,Xe,Ae,ve):H.copyTexSubImage2D(Pe,xe,Re,Je,Le,Xe,Ae,ve);ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Gr?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Pe,xe,Re,Je,Bt,Ae,ve,we,pt,cn,vt.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(Pe,xe,Re,Je,Bt,Ae,ve,we,pt,vt.data):H.texSubImage3D(Pe,xe,Re,Je,Bt,Ae,ve,we,pt,cn,vt):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xe,Re,Je,Ae,ve,pt,cn,vt.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xe,Re,Je,vt.width,vt.height,pt,vt.data):H.texSubImage2D(H.TEXTURE_2D,xe,Re,Je,Ae,ve,pt,cn,vt);ye.pixelStorei(H.UNPACK_ROW_LENGTH,xn),ye.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ot),ye.pixelStorei(H.UNPACK_SKIP_PIXELS,Br),ye.pixelStorei(H.UNPACK_SKIP_ROWS,un),ye.pixelStorei(H.UNPACK_SKIP_IMAGES,Fo),xe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&H.generateMipmap(Pe),ye.unbindTexture()},this.initRenderTarget=function(E){Oe.get(E).__webglFramebuffer===void 0&&He.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?He.setTextureCube(E,0):E.isData3DTexture?He.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?He.setTexture2DArray(E,0):He.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){q=0,z=0,G=null,ye.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function pi(n,e,t){return Math.max(e,Math.min(t,n))}function jn(n,e){const t=n.replace("#",""),i=parseInt(t,16),r=s=>Math.round(pi(e>=0?s+(255-s)*e:s*(1+e),0,255));return`rgb(${r(i>>16&255)}, ${r(i>>8&255)}, ${r(i&255)})`}function mn(n,e=24,t=3,i=1,r=0){const s=[];for(let _=0;_<n.length-1;_++){const g=n[_],u=n[_+1];for(let v=0;v<t;v++){const y=v/t,S=y*y*(3-2*y);s.push({y:g.y+(u.y-g.y)*y,rx:g.rx+(u.rx-g.rx)*S,rz:g.rz+(u.rz-g.rz)*S,ox:(g.ox??0)+((u.ox??0)-(g.ox??0))*S,oz:(g.oz??0)+((u.oz??0)-(g.oz??0))*S})}}s.push(n[n.length-1]);const a=s.length,o=e+1,l=new Float32Array(a*o*3),c=new Float32Array(a*o*2),h=[],f=s[0].y,d=Math.max(.001,s[a-1].y-f);for(let _=0;_<a;_++){const g=s[_],u=(g.y-f)/d;for(let v=0;v<=e;v++){const y=v/e,S=Math.PI*.5+y*Math.PI*2,b=Math.sin(S),T=Math.cos(S),x=i===1?b:Math.sign(b)*Math.pow(Math.abs(b),i),M=i===1?T:Math.sign(T)*Math.pow(Math.abs(T),i),D=r*(.2+.8*(1-u)*(1-u))*Math.sin(S*7+u*11)*Math.sin(Math.PI*u),A=(g.ox??0)+(g.rx+D)*x,C=(g.oz??0)+(g.rz+D)*M,P=_*o+v;l[P*3]=A,l[P*3+1]=g.y,l[P*3+2]=C,c[P*2]=y,c[P*2+1]=u}}for(let _=0;_<a-1;_++)for(let g=0;g<e;g++){const u=_*o+g,v=u+1,y=(_+1)*o+g,S=y+1;h.push(u,v,S,u,S,y)}const p=new zt;p.setAttribute("position",new Un(l,3)),p.setAttribute("uv",new Un(c,2)),p.setIndex(h),p.computeVertexNormals();const m=p.getAttribute("normal");for(let _=0;_<a;_++){const g=_*o,u=_*o+e,v=m.getX(g)+m.getX(u),y=m.getY(g)+m.getY(u),S=m.getZ(g)+m.getZ(u),b=Math.hypot(v,y,S)||1;m.setXYZ(g,v/b,y/b,S/b),m.setXYZ(u,v/b,y/b,S/b)}return m.needsUpdate=!0,p}function nb(n,e,t){const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d"),s=r.createLinearGradient(0,0,0,512);s.addColorStop(0,jn(n.primary,.08)),s.addColorStop(.65,n.primary),s.addColorStop(1,n.secondary),r.fillStyle=s,r.fillRect(0,0,512,512),r.fillStyle="rgba(255,255,255,0.04)";for(let l=0;l<512;l+=8)r.fillRect(0,l,512,2);const a=n.chestMotif;if(a==="red_white_stripes"){r.fillStyle="#f8fafc";const l=12,c=512/l;for(let h=0;h<l;h++)r.fillRect(Math.round(h*c),0,Math.round(c*.48),512)}else if(t){if(!a){r.strokeStyle="rgba(255,255,255,0.09)",r.lineWidth=8;for(let l=90;l<350;l+=44)r.beginPath(),r.moveTo(310,l+35),r.lineTo(384,l),r.lineTo(458,l+35),r.stroke()}}else{r.fillStyle="rgba(0,0,0,0.05)";for(let l=20;l<512;l+=32)r.fillRect(l,40,10,440)}if(r.fillStyle=n.trim,r.fillRect(0,40,10,472),r.fillRect(502,40,10,472),r.fillRect(251,40,10,472),r.fillStyle=a==="team_crown"?"#facc15":n.trim,r.fillRect(0,0,512,24),r.fillStyle=n.secondary,r.fillRect(0,24,512,5),e>0&&(r.save(),r.translate(128,215),a==="red_white_stripes"&&(r.fillStyle="rgba(255,255,255,0.92)",r.beginPath(),r.roundRect(-78,-82,156,164,18),r.fill()),r.textAlign="center",r.textBaseline="middle",r.font='900 148px system-ui, -apple-system, "Segoe UI", sans-serif',r.lineWidth=10,r.strokeStyle=a==="red_white_stripes"?"#ffffff":"rgba(0,0,0,0.28)",r.strokeText(String(e),0,0),r.fillStyle=n.numberColor,r.fillText(String(e),0,0),r.restore()),a==="adidas_stripes"){r.fillStyle="#111827";for(const l of[10,244,486])for(let c=0;c<3;c++)r.fillRect(l+c*9-9,0,5,118);r.beginPath(),r.moveTo(352,0),r.lineTo(384,54),r.lineTo(416,0),r.closePath(),r.fill(),r.save(),r.translate(350,134);for(let l=0;l<3;l++)r.save(),r.translate((l-1)*9,(2-l)*4),r.rotate(-.35),r.fillRect(-3,-12-l*4,5.5,16+l*4),r.restore();r.restore()}else if(a==="team_crown"){r.fillStyle="#111827",r.beginPath(),r.moveTo(350,0),r.lineTo(384,56),r.lineTo(418,0),r.closePath(),r.fill(),r.fillStyle="#111827";for(let l=0;l<3;l++)r.fillRect(338+l*8,128-l*5,5,14+l*5);r.save(),r.translate(420,132),r.fillStyle="#111827",r.beginPath(),r.moveTo(-18,12),r.lineTo(-21,-8),r.lineTo(-9,2),r.lineTo(0,-13),r.lineTo(9,2),r.lineTo(21,-8),r.lineTo(18,12),r.closePath(),r.fill(),r.fillStyle="#facc15";for(const l of[-11,0,11])r.beginPath(),r.arc(l,5,2.4,0,Math.PI*2),r.fill();r.restore(),r.save(),r.translate(384,212),r.textAlign="center",r.textBaseline="middle",r.font='900 52px system-ui, -apple-system, "Segoe UI", sans-serif',r.lineWidth=10,r.lineJoin="round",r.strokeStyle="#111827",r.strokeText("TEAM",0,0),r.fillStyle="#ffffff",r.fillText("TEAM",0,0),r.restore()}else if(a==="lightning"){const l=r.createRadialGradient(384,210,10,384,210,120);l.addColorStop(0,"rgba(45, 212, 191, 0.34)"),l.addColorStop(1,"rgba(45, 212, 191, 0)"),r.fillStyle=l,r.fillRect(264,90,240,250),r.fillStyle="#10b981",r.beginPath(),r.moveTo(344,0),r.lineTo(384,70),r.lineTo(424,0),r.closePath(),r.fill();const c=r.createLinearGradient(360,120,410,320);c.addColorStop(0,"#a7f3d0"),c.addColorStop(.5,"#2dd4bf"),c.addColorStop(1,"#0ea5e9"),r.fillStyle=c,r.beginPath(),r.moveTo(398,122),r.lineTo(354,218),r.lineTo(386,218),r.lineTo(368,318),r.lineTo(422,202),r.lineTo(388,202),r.closePath(),r.fill()}else if(a==="brick_wall"){r.fillStyle="#dc2626",r.beginPath(),r.moveTo(346,0),r.lineTo(384,58),r.lineTo(422,0),r.closePath(),r.fill();const l=[{y:162,bricks:[[344,38],[386,38]]},{y:190,bricks:[[326,36],[366,36],[406,36]]},{y:218,bricks:[[344,38],[386,38]]}];for(const c of l)for(const[h,f]of c.bricks)r.fillStyle="#d96b38",r.strokeStyle="#3b1608",r.lineWidth=3.5,r.beginPath(),r.roundRect(h,c.y,f,24,3),r.fill(),r.stroke(),r.fillStyle="#fdba74",r.fillRect(h+3,c.y+3,f-6,4)}else a==="chili_crest"?(r.fillStyle="#ffffff",r.beginPath(),r.moveTo(350,0),r.lineTo(384,52),r.lineTo(418,0),r.closePath(),r.fill(),r.save(),r.translate(384,196),r.rotate(-.22),r.lineWidth=6,r.strokeStyle="#ffffff",r.fillStyle="#ef4444",r.beginPath(),r.moveTo(22,-32),r.bezierCurveTo(34,4,10,38,-32,30),r.bezierCurveTo(-6,18,6,-4,6,-28),r.closePath(),r.stroke(),r.fill(),r.fillStyle="#22c55e",r.beginPath(),r.ellipse(14,-30,9,6,.3,0,Math.PI*2),r.fill(),r.strokeStyle="#16a34a",r.lineWidth=4.5,r.beginPath(),r.moveTo(16,-34),r.quadraticCurveTo(22,-48,12,-52),r.stroke(),r.restore()):a==="arsenal_clean"?(r.fillStyle="#ffffff",r.beginPath(),r.moveTo(350,0),r.lineTo(384,52),r.lineTo(418,0),r.closePath(),r.fill()):a==="white_blue_trim"?(r.fillStyle="#1d4ed8",r.beginPath(),r.moveTo(346,0),r.lineTo(384,62),r.lineTo(422,0),r.closePath(),r.fill(),r.fillStyle="#ffffff",r.beginPath(),r.moveTo(358,0),r.lineTo(384,42),r.lineTo(410,0),r.closePath(),r.fill()):a==="red_white_stripes"?(r.fillStyle="#ffffff",r.strokeStyle="#991b1b",r.lineWidth=3,r.beginPath(),r.moveTo(348,0),r.lineTo(384,58),r.lineTo(420,0),r.closePath(),r.fill(),r.stroke()):a==="plain"?(r.fillStyle=t?"#b45309":n.trim,r.beginPath(),r.moveTo(352,0),r.lineTo(384,56),r.lineTo(416,0),r.closePath(),r.fill()):a==="v_collar"?(r.fillStyle=n.trim,r.beginPath(),r.moveTo(348,0),r.lineTo(384,62),r.lineTo(420,0),r.closePath(),r.fill()):(r.save(),r.translate(414,130),r.fillStyle=n.trim,r.beginPath(),r.arc(0,0,18,0,Math.PI*2),r.fill(),r.fillStyle=n.secondary,r.beginPath(),r.arc(0,0,13,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff",r.beginPath(),r.arc(0,0,5,0,Math.PI*2),r.fill(),r.restore(),e>0&&(r.save(),r.translate(384,210),r.textAlign="center",r.textBaseline="middle",r.font='800 54px system-ui, -apple-system, "Segoe UI", sans-serif',r.fillStyle=n.numberColor,r.fillText(String(e),0,0),r.restore()));r.save(),r.lineCap="round";for(const l of[128,384])for(let c=0;c<5;c++){const h=l-76+c*36,f=414+c%2*22;r.strokeStyle="rgba(0,0,0,0.07)",r.lineWidth=3,r.beginPath(),r.moveTo(h,504),r.quadraticCurveTo(h+14,f+30,h+6,f),r.stroke(),r.strokeStyle="rgba(255,255,255,0.05)",r.lineWidth=2,r.beginPath(),r.moveTo(h+3,504),r.quadraticCurveTo(h+17,f+30,h+9,f),r.stroke()}r.restore();const o=new ya(i);return o.colorSpace=en,o.anisotropy=4,o}function ib(n){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),i=()=>{const f=new ya(e);return f.colorSpace=en,f};t.fillStyle=n.skin,t.fillRect(0,0,256,256);const r=t.createRadialGradient(192,128,8,192,128,76);r.addColorStop(0,jn(n.skin,.07)),r.addColorStop(1,jn(n.skin,-.07)),t.fillStyle=r,t.fillRect(0,0,256,256);const s=192,a=n.keeperPersona,o=n.playerPersona;if(o==="mulaohan"){const f=t.createRadialGradient(s,54,4,s,54,46);f.addColorStop(0,"rgba(255,245,235,0.34)"),f.addColorStop(1,"rgba(255,245,235,0)"),t.fillStyle=f,t.fillRect(s-50,8,100,92)}else if(a!=="tuoheya"){const f=o==="jiadaogou"?"#201611":o==="ligugu"?"#cbd5e1":n.hair,d=o==="mahangmu"||o==="jatiewei"||o==="siqiaotun"?32:44;t.fillStyle=n.hair,t.fillRect(0,0,256,d),t.fillStyle=f,t.fillRect(0,0,142,168),t.fillRect(238,0,18,130),t.fillRect(138,0,14,130)}const l=(f=1)=>{t.fillStyle=jn(n.skin,-.24),t.beginPath(),t.ellipse(s,147,5.8*f,3.3*f,0,0,Math.PI*2),t.fill()},c=(f="#1f1612",d=4.6)=>{for(const p of[-1,1]){const m=s+p*15.5,_=114;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(m,_,7.6,d,0,0,Math.PI*2),t.fill(),t.fillStyle=f,t.beginPath(),t.arc(m,_,3.9,0,Math.PI*2),t.fill(),t.fillStyle="#0e0a08",t.beginPath(),t.arc(m,_,2,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(m-1.3,_-1.3,1.3,0,Math.PI*2),t.fill()}},h=(f=169,d=18,p=18)=>{t.fillStyle="#42110f",t.beginPath(),t.ellipse(s,f,d,p,0,.05*Math.PI,.95*Math.PI),t.closePath(),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(s,f,d-2,p-3,0,.08*Math.PI,.92*Math.PI),t.closePath(),t.fill()};if(a==="laya")return t.fillStyle="#1a1310",t.beginPath(),t.ellipse(s,194,42,46,0,0,Math.PI),t.fill(),t.beginPath(),t.ellipse(s,164,26,9,0,Math.PI,Math.PI*2),t.fill(),t.fillRect(s-24,160,48,11),h(169,19,19),t.strokeStyle="#120d0a",t.lineWidth=7.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,99),t.quadraticCurveTo(s-16,91,s-6,97),t.moveTo(s+6,97),t.quadraticCurveTo(s+16,91,s+26,99),t.stroke(),c("#3b2114",5.8),i();if(a==="aozhezhe"){t.strokeStyle="rgba(25,10,5,0.45)",t.lineWidth=2.2;for(const f of[72,79])t.beginPath(),t.moveTo(s-20,f),t.quadraticCurveTo(s,f-4,s+20,f),t.stroke();t.strokeStyle="#100b08",t.lineWidth=5.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,95),t.quadraticCurveTo(s-16,82,s-6,89),t.moveTo(s+6,89),t.quadraticCurveTo(s+16,82,s+26,95),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,p=112;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,p,9.6,10.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#29150c",t.beginPath(),t.arc(d,p+.5,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#090605",t.beginPath(),t.arc(d,p+.5,2,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.3,p-1.3,1.3,0,Math.PI*2),t.fill()}return t.fillStyle="#120d0a",t.beginPath(),t.ellipse(s,224,24,18,0,0,Math.PI*2),t.fill(),t.fillStyle="#2b0908",t.beginPath(),t.roundRect(s-17,160,34,44,11),t.fill(),t.fillStyle="#f8fafc",t.fillRect(s-13,162,26,6),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,192,12,8,0,0,Math.PI*2),t.fill(),t.fillStyle="#f8fafc",t.fillRect(s-12,197,24,5),t.strokeStyle="#3a1b10",t.lineWidth=3.2,t.beginPath(),t.roundRect(s-17,160,34,44,11),t.stroke(),i()}if(a==="leikesen"){for(const f of[-1,1]){const d=s+f*16,p=114,m=t.createRadialGradient(d,p,2,d,p,22);m.addColorStop(0,"rgba(186, 230, 253, 0.95)"),m.addColorStop(.45,"rgba(56, 189, 248, 0.65)"),m.addColorStop(1,"rgba(56, 189, 248, 0)"),t.fillStyle=m,t.fillRect(d-22,p-22,44,44),t.fillStyle="#ecfeff",t.beginPath(),t.ellipse(d,p,8.5,5.2,f*-.08,0,Math.PI*2),t.fill()}return t.strokeStyle="#7c4a15",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.lineTo(s-6,104),t.moveTo(s+6,104),t.lineTo(s+26,98),t.stroke(),t.fillStyle="#a86b24",t.beginPath(),t.ellipse(s,196,44,48,0,0,Math.PI),t.fill(),i()}if(a==="dingneisi"){t.strokeStyle="#3b2313",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-27,96),t.quadraticCurveTo(s-16,84,s-5,95),t.moveTo(s+5,101),t.quadraticCurveTo(s+16,99,s+26,103),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,p=114+(f>0?1.5:0);t.fillStyle="#f8fafc",t.beginPath(),t.ellipse(d,p,7.6,4.4,0,0,Math.PI*2),t.fill(),t.fillStyle="#231710",t.beginPath(),t.arc(d+1.2,p,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d,p-1.1,1.2,0,Math.PI*2),t.fill(),t.strokeStyle="#3a2214",t.lineWidth=2.4,t.beginPath(),t.moveTo(d-8,p-2),t.quadraticCurveTo(d,p-5,d+8,p-1.5),t.stroke()}return t.strokeStyle=jn(n.skin,-.44),t.lineWidth=3.4,t.lineCap="round",t.beginPath(),t.moveTo(s-19,166),t.quadraticCurveTo(s-4,176,s+14,175),t.stroke(),t.lineWidth=2.2,t.beginPath(),t.arc(s-20,165,5,Math.PI*.75,Math.PI*1.45),t.stroke(),i()}if(o==="morenha"){t.fillStyle="#ca8a04",t.beginPath(),t.ellipse(s,198,42,46,0,0,Math.PI),t.fill(),t.strokeStyle="#a16207",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-15,103,s-6,100),t.moveTo(s+6,100),t.quadraticCurveTo(s+15,103,s+26,98),t.stroke(),t.strokeStyle="#5c3618",t.lineWidth=3.2;for(const f of[-1,1]){const d=s+f*15.5;t.beginPath(),t.moveTo(d-8,114),t.quadraticCurveTo(d,120,d+8,114),t.stroke()}return l(1.1),t.strokeStyle="#7c3f28",t.lineWidth=3,t.beginPath(),t.moveTo(s-11,172),t.quadraticCurveTo(s,170,s+11,172),t.stroke(),i()}if(o==="pabupaleng"){t.strokeStyle="#b48628",t.lineWidth=4.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,99),t.quadraticCurveTo(s-14,92,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+14,92,s+25,99),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,p=115;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,p,8,5.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#38bdf8",t.beginPath(),t.arc(d,p+1,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#0f172a",t.beginPath(),t.arc(d,p+1,1.8,0,Math.PI*2),t.fill(),t.fillStyle=jn(n.skin,-.08),t.beginPath(),t.ellipse(d,p-2.4,8.4,3.8,0,0,Math.PI*2),t.fill(),t.strokeStyle="#7c523c",t.lineWidth=2,t.beginPath(),t.moveTo(d-8,p-.5),t.lineTo(d+8,p-.5),t.stroke()}return t.fillStyle="rgba(239, 68, 68, 0.28)",t.beginPath(),t.ellipse(s,144,9,6.5,0,0,Math.PI*2),t.fill(),t.fillStyle="#4a1518",t.beginPath(),t.ellipse(s,174,8.5,5.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-6,170,12,2.8),i()}if(o==="saxiaojiao"||o==="edashuai"){const f=o==="saxiaojiao";f?(t.fillStyle="#16100c",t.fillRect(s-18,159,36,5),t.beginPath(),t.ellipse(s,214,18,12,0,0,Math.PI*2),t.fill()):(t.fillStyle="#b78332",t.globalAlpha=.72,t.beginPath(),t.ellipse(s,198,28,30,0,0,Math.PI),t.fill(),t.fillRect(s-18,162,36,8),t.globalAlpha=1),t.strokeStyle=f?"#140e0b":"#9a6c22",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,96),t.quadraticCurveTo(s-16,88,s-6,94),t.moveTo(s+6,99),t.quadraticCurveTo(s+16,94,s+26,100),t.stroke();const d=s-15.5;return t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,113,8,5.8,0,0,Math.PI*2),t.fill(),t.fillStyle=f?"#3b2114":"#38bdf8",t.beginPath(),t.arc(d,113,4.2,0,Math.PI*2),t.fill(),t.fillStyle="#120c08",t.beginPath(),t.arc(d,113,2.1,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.3,111.6,1.4,0,Math.PI*2),t.fill(),t.strokeStyle=f?"#1a0f0a":"#6b4718",t.lineWidth=3.6,t.beginPath(),t.moveTo(s+7,115),t.quadraticCurveTo(s+15.5,108,s+24,115),t.stroke(),l(),f?h(168,20,18):(t.strokeStyle="#7c3f28",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-15,171),t.quadraticCurveTo(s,180,s+16,169),t.stroke()),i()}if(o==="mulaohan"){t.strokeStyle="rgba(35,15,8,0.42)",t.lineWidth=2.4;for(const f of[74,82])t.beginPath(),t.moveTo(s-22,f),t.quadraticCurveTo(s,f-4,s+22,f),t.stroke();return t.fillStyle="#120d0b",t.beginPath(),t.ellipse(s,198,46,52,0,0,Math.PI),t.fill(),t.fillRect(s-28,162,56,14),t.strokeStyle="#0e0a08",t.lineWidth=7.4,t.lineCap="round",t.beginPath(),t.moveTo(s-27,100),t.quadraticCurveTo(s-16,91,s-5,98),t.moveTo(s+5,98),t.quadraticCurveTo(s+16,91,s+27,100),t.stroke(),c("#2b170e",5.2),l(1.3),i()}if(o==="weixiaoshu"){t.strokeStyle="#704222",t.lineWidth=5,t.lineCap="round",t.beginPath(),t.moveTo(s-25,97),t.quadraticCurveTo(s-15,90,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+15,90,s+25,97),t.stroke(),c("#5c3218",6.2),t.fillStyle="rgba(244, 114, 114, 0.25)";for(const f of[-1,1])t.beginPath(),t.ellipse(s+f*22,136,11,7,0,0,Math.PI*2),t.fill();t.fillStyle="rgba(140, 72, 42, 0.48)";for(const[f,d]of[[-24,134],[-18,138],[-12,133],[12,133],[18,138],[24,134]])t.beginPath(),t.arc(s+f,d,1.5,0,Math.PI*2),t.fill();return l(.95),t.strokeStyle="#8a3c2c",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-16,169),t.quadraticCurveTo(s,179,s+16,169),t.stroke(),i()}if(o==="xiehuashao")return t.fillStyle="#362012",t.beginPath(),t.ellipse(s,196,42,46,0,0,Math.PI),t.fill(),t.fillRect(s-24,160,48,11),h(168,19,18),t.strokeStyle="#26160c",t.lineWidth=6.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-15,91,s-5,98),t.moveTo(s+5,98),t.quadraticCurveTo(s+15,91,s+26,98),t.stroke(),c("#3b2114",5.4),l(1.1),i();if(o==="jiadaogou")return t.strokeStyle="#120d0a",t.lineWidth=7.2,t.lineCap="round",t.beginPath(),t.moveTo(s-27,94),t.lineTo(s-5,105),t.moveTo(s+5,105),t.lineTo(s+27,94),t.stroke(),c("#24150e",5.2),l(),t.fillStyle="#360c0c",t.beginPath(),t.roundRect(s-15,161,30,34,10),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-11,163,22,5.5),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,186,10,6.5,0,0,Math.PI*2),t.fill(),i();if(o==="mushandian")return t.strokeStyle="#8a6220",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,97),t.lineTo(s-6,103),t.moveTo(s+6,103),t.lineTo(s+26,97),t.stroke(),c("#2563eb",4.8),l(),h(169,15,12),i();if(o==="mahangmu")return t.strokeStyle="#241912",t.lineWidth=6.8,t.lineCap="round",t.beginPath(),t.moveTo(s-27,100),t.lineTo(s-7,100),t.moveTo(s+7,100),t.lineTo(s+27,100),t.stroke(),c("#2b1d14",4.4),l(1.15),t.strokeStyle=jn(n.skin,-.42),t.lineWidth=3.4,t.beginPath(),t.moveTo(s-14,174),t.lineTo(s+14,174),t.stroke(),i();if(o==="matufu"){t.fillStyle="rgba(42,28,20,0.28)",t.beginPath(),t.ellipse(s,198,40,38,0,0,Math.PI),t.fill(),t.strokeStyle="#18100c",t.lineWidth=7,t.lineCap="round",t.beginPath(),t.moveTo(s-28,94),t.lineTo(s-4,107),t.moveTo(s+4,107),t.lineTo(s+28,94),t.stroke(),t.strokeStyle="rgba(90,35,25,0.55)",t.lineWidth=2.2,t.beginPath(),t.moveTo(s-3,96),t.lineTo(s-3,108),t.moveTo(s+3,96),t.lineTo(s+3,108),t.stroke(),c("#24150e",4.8),l(1.15),t.fillStyle="#ffffff",t.strokeStyle="#3b1512",t.lineWidth=3,t.beginPath(),t.roundRect(s-19,165,38,17,6),t.fill(),t.stroke(),t.strokeStyle="rgba(40,20,15,0.45)",t.lineWidth=1.6,t.beginPath(),t.moveTo(s-18,173.5),t.lineTo(s+18,173.5);for(const f of[-10,-3,4,11])t.moveTo(s+f,166),t.lineTo(s+f,181);return t.stroke(),i()}if(o==="ligugu")return t.strokeStyle="#2b1d14",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,99),t.quadraticCurveTo(s-15,93,s-6,98),t.moveTo(s+6,97),t.quadraticCurveTo(s+15,91,s+25,97),t.stroke(),c("#2b1a12",4.8),l(1.15),t.strokeStyle=jn(n.skin,-.4),t.lineWidth=3.2,t.beginPath(),t.moveTo(s-13,174),t.quadraticCurveTo(s+2,176,s+14,170),t.stroke(),i();if(o==="jatiewei")return t.fillStyle="#120d0a",t.beginPath(),t.ellipse(s,198,42,48,0,0,Math.PI),t.fill(),t.strokeStyle="#0d0907",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,92),t.quadraticCurveTo(s-15,84,s-5,92),t.moveTo(s+5,92),t.quadraticCurveTo(s+15,84,s+26,92),t.stroke(),c("#24140c",4),l(1.2),t.fillStyle="#380b0b",t.beginPath(),t.roundRect(s-24,154,48,46,14),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-21,156,42,12),t.fillRect(s-18,190,36,7),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,182,14,8,0,0,Math.PI*2),t.fill(),i();if(o==="antuoluo")return t.fillStyle="#2d1d13",t.globalAlpha=.68,t.beginPath(),t.ellipse(s,198,39,40,0,0,Math.PI),t.fill(),t.fillRect(s-19,163,38,8),t.globalAlpha=1,t.strokeStyle="#1c120c",t.lineWidth=7,t.lineCap="round",t.beginPath(),t.moveTo(s-28,93),t.lineTo(s-4,107),t.moveTo(s+4,107),t.lineTo(s+28,93),t.stroke(),c("#21140d",4.8),l(),t.strokeStyle="#4a2418",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-13,176),t.quadraticCurveTo(s,170,s+13,176),t.stroke(),i();if(o==="nujiaoshou"){t.strokeStyle="rgba(85,42,22,0.32)",t.lineWidth=2.4;for(const f of[-1,1])t.beginPath(),t.moveTo(s+f*32,134),t.quadraticCurveTo(s+f*27,162,s+f*20,186),t.stroke();t.strokeStyle="#1a110b",t.lineWidth=6.6,t.lineCap="round",t.beginPath(),t.moveTo(s-28,96),t.lineTo(s-5,105),t.moveTo(s+5,105),t.lineTo(s+28,96),t.stroke(),t.strokeStyle=n.skin,t.lineWidth=2.6,t.beginPath(),t.moveTo(s+19,94),t.lineTo(s+22,103),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,p=114;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,p,8.6,5.8,0,0,Math.PI*2),t.fill(),t.fillStyle="#2b1910",t.beginPath(),t.arc(d,p,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#090605",t.beginPath(),t.arc(d,p,1.9,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.2,p-1.2,1.2,0,Math.PI*2),t.fill()}return l(1.12),t.strokeStyle="#1c120c",t.lineWidth=4.2,t.lineCap="round",t.beginPath(),t.moveTo(s-19,166),t.quadraticCurveTo(s-9,159,s-2,162),t.moveTo(s+2,162),t.quadraticCurveTo(s+9,159,s+19,166),t.stroke(),t.strokeStyle=jn(n.skin,-.4),t.lineWidth=3,t.beginPath(),t.moveTo(s-13,173),t.quadraticCurveTo(s,175,s+13,173),t.stroke(),t.fillStyle="#1c120c",t.beginPath(),t.ellipse(s,184,4.8,2.8,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(s-5,236,10,9,-.15,0,Math.PI*2),t.ellipse(s+5,236,10,9,.15,0,Math.PI*2),t.fill(),i()}if(o==="jiekexikao"){t.strokeStyle="rgba(20,10,5,0.42)",t.lineWidth=2;for(const f of[76,83])t.beginPath(),t.moveTo(s-18,f),t.quadraticCurveTo(s,f-3,s+18,f),t.stroke();return t.strokeStyle="#120d0a",t.lineWidth=5.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-14,88,s-5,92),t.moveTo(s+5,94),t.quadraticCurveTo(s+15,90,s+26,99),t.stroke(),c("#29160d",5.8),l(1.15),t.fillStyle="#140f0c",t.beginPath(),t.ellipse(s,218,18,12,0,0,Math.PI*2),t.fill(),t.strokeStyle="#2b140d",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-11,174),t.quadraticCurveTo(s,171,s+11,175),t.stroke(),i()}if(o==="siqiaotun")return t.fillStyle="#140f0c",t.beginPath(),t.ellipse(s,214,20,14,0,0,Math.PI*2),t.fill(),t.fillRect(s-17,159,34,4.5),t.strokeStyle="#120d0a",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,96),t.quadraticCurveTo(s-15,89,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+15,89,s+25,96),t.stroke(),c("#2b170e",5.2),l(1.1),h(168,19,17),i();if(o==="weizhencha")return t.strokeStyle="#a37628",t.lineWidth=5.2,t.lineCap="round",t.beginPath(),t.moveTo(s-24,100),t.quadraticCurveTo(s-14,95,s-6,99),t.moveTo(s+6,99),t.quadraticCurveTo(s+14,95,s+24,100),t.stroke(),c("#2563eb",4.8),l(),t.strokeStyle=jn(n.skin,-.38),t.lineWidth=3.2,t.beginPath(),t.moveTo(s-13,172),t.quadraticCurveTo(s,178,s+14,171),t.stroke(),i();if(n.facialHair!=="none"){const f=n.facialHair==="stubble"?.26:n.facialHair==="goatee"?.56:.74;t.fillStyle=n.hair,t.globalAlpha=f,n.facialHair==="goatee"?(t.beginPath(),t.ellipse(s,198,15,25,0,0,Math.PI*2),t.fill()):(t.beginPath(),t.ellipse(s,196,38,36,0,0,Math.PI),t.fill(),t.fillRect(s-17,165,34,10)),t.globalAlpha=1}return t.strokeStyle=jn(n.hair,-.18),t.lineWidth=5,t.lineCap="round",t.beginPath(),t.moveTo(s-24,102),t.quadraticCurveTo(s-15,96,s-7,101),t.moveTo(s+7,101),t.quadraticCurveTo(s+15,96,s+24,102),t.stroke(),c("#1a1614",4.4),l(),t.strokeStyle=jn(n.skin,-.38),t.lineWidth=2.8,t.beginPath(),t.moveTo(s-11,174),t.quadraticCurveTo(s,176.5,s+11,174),t.stroke(),t.fillStyle="rgba(150,70,65,0.32)",t.beginPath(),t.ellipse(s,175.5,10,3.4,0,0,Math.PI*2),t.fill(),i()}function rb(n,e){const t=new tt,i=n.keeperPersona,r=n.playerPersona;if(i==="leikesen"){const l=new Ee({color:"#d89b3c",roughness:.68}),c=new W(new Ce(.098,18,14),e);c.position.set(0,.148,-.014),c.scale.set(1.04,.96,1.05),t.add(c);for(const _ of[-1,1]){const g=new W(new Ce(.056,14,10),l);g.position.set(_*.036,.214,.016),g.scale.set(1.05,.62,1.18),g.rotation.z=_*-.22,t.add(g)}for(let _=0;_<11;_++){const g=_/10,u=Math.PI*(.48+g*1.04),v=.094,y=.096,S=Math.sin(u)*v,b=Math.cos(u)*y-.01;for(let T=0;T<4;T++){const x=new W(new Ce(.033-T*.002,10,8),T%2===0?e:l),M=1+T*.09+T%2*.05;x.position.set(S*M,.125-T*.052,b*M),x.scale.set(.95,1.28,.95),x.castShadow=!0,t.add(x)}}const h=new Ee({color:"#153042",roughness:.45,metalness:.25}),f=new W(new lt(.095,.095,.036,24,1,!0),h);f.position.set(0,.156,-.003),f.scale.set(.97,1,1.07),t.add(f);const d=new Ee({color:"#a5f3fc",emissive:"#22d3ee",emissiveIntensity:1.5,roughness:.2}),p=new W(new it(.014,.03,.008),d);p.position.set(0,.156,.101),p.rotation.z=-.28,t.add(p);for(const _ of[-1,1]){const g=new W(new Ce(.013,10,8),d);g.position.set(_*.031,.104,.094),g.scale.set(1.25,.72,.65),t.add(g);for(let u=0;u<3;u++){const v=new W(new it(.034,.0055,.0055),d);v.position.set(_*(.062+u*.026),.108+(u%2===0?.006:-.004),.088-u*.016),v.rotation.z=_*(u%2===0?.36:-.28),v.rotation.y=_*-.35,t.add(v)}}const m=new W(new Ce(.068,16,12),e);m.position.set(0,-.006,.056),m.scale.set(1.12,1.08,.92),m.castShadow=!0,t.add(m);for(const _ of[-1,1]){const g=new W(new Ce(.044,12,10),e);g.position.set(_*.052,.024,.042),g.scale.set(.88,1.18,.95),t.add(g);const u=new W(new Wt(.013,.032,6,8),l);u.position.set(_*.024,.048,.098),u.rotation.z=Math.PI*.5+_*.34,t.add(u)}return t}if(r==="mulaohan"){const l=new Ee({color:"#14100e",roughness:.85}),c=new W(new Ce(.082,18,14),l);c.position.set(0,-.02,.058),c.scale.set(1.18,1.14,.96),c.castShadow=!0,t.add(c);for(const h of[-1,1]){const f=new W(new Ce(.052,12,10),l);f.position.set(h*.058,.022,.044),f.scale.set(.92,1.2,.95),t.add(f);const d=new W(new Ce(.046,10,8),l);d.position.set(h*.032,-.068,.064),t.add(d);const p=new W(new Wt(.015,.038,6,8),l);p.position.set(h*.026,.048,.101),p.rotation.z=Math.PI*.5+h*.28,t.add(p)}return t}if(r==="morenha"){const l=new Ee({color:"#facc15",roughness:.65}),c=new Ee({color:"#38bdf8",roughness:.4}),h=new W(new Ce(.096,18,14),e);h.position.set(0,.152,-.012),h.scale.set(1.02,.95,1.04),t.add(h);for(const m of[-1,1]){const _=new W(new Ce(.056,14,10),l);_.position.set(m*.036,.212,.012),_.scale.set(1.04,.58,1.22),_.rotation.z=m*-.22,t.add(_);for(let v=0;v<6;v++){const y=new W(new Ce(.02-v*.0012,10,8),v%2===0?l:e);y.position.set(m*.088,.085-v*.031,.038+v*.005),y.scale.set(.95,1.18,.95),t.add(y)}const g=new W(new lt(.014,.014,.012,10),c);g.position.set(m*.088,-.095,.068),t.add(g);const u=new W(new wn(.015,.032,8),l);u.position.set(m*.088,-.115,.068),u.rotation.x=Math.PI,t.add(u)}for(let m=0;m<9;m++){const _=Math.PI*(.52+m/8*.96),g=Math.sin(_)*.092,u=Math.cos(_)*.094-.01;for(let v=0;v<3;v++){const y=new W(new Ce(.03,8,8),e);y.position.set(g*(1+v*.07),.12-v*.048,u*(1+v*.07)),y.scale.set(.95,1.25,.95),t.add(y)}}const f=new W(new Ce(.064,16,12),e);f.position.set(0,-.005,.056),f.scale.set(1.08,1.02,.9),t.add(f);for(const m of[-1,1]){const _=new W(new Wt(.012,.03,6,8),l);_.position.set(m*.022,.048,.098),_.rotation.z=Math.PI*.5+m*.34,t.add(_)}const d=new W(new lt(.016,.016,.012,10),c);d.position.set(0,-.062,.076),t.add(d);const p=new W(new wn(.018,.038,10),l);return p.position.set(0,-.084,.078),p.rotation.x=Math.PI,t.add(p),t}if(r==="weizhencha"){const l=new Ee({color:"#6b4428",roughness:.62,metalness:.05}),c=new Ee({color:"#4a2c18",roughness:.7}),h=new Ee({color:"#cbd5e1",roughness:.3,metalness:.65}),f=new Ee({color:"#38bdf8",emissive:"#0284c7",emissiveIntensity:.35,roughness:.15,metalness:.4}),d=new W(new Ce(.104,20,16,0,Math.PI*2,0,Math.PI*.58),l);d.position.set(0,.132,-.008),d.rotation.x=-.18,d.castShadow=!0,t.add(d);const p=new W(new it(.018,.022,.19),c);p.position.set(0,.228,-.012),t.add(p);for(let g=-2;g<=2;g++){const u=new W(new Ce(.022,8,8),e);u.position.set(g*.02,.156,.088-Math.abs(g)*.004),u.scale.set(1.1,.55,.8),t.add(u)}for(const g of[-1,1]){const u=new W(new Wt(.022,.095,6,8),l);u.position.set(g*.096,.082,-.004),u.scale.set(.52,1,1.18),u.rotation.z=g*.08,t.add(u);const v=new W(new lt(.032,.032,.022,16),h);v.rotation.x=Math.PI*.44,v.position.set(g*.037,.188,.092),t.add(v);const y=new W(new lt(.026,.026,.025,16),f);y.rotation.x=Math.PI*.44,y.position.set(g*.037,.188,.094),t.add(y)}const m=new W(new it(.024,.01,.014),c);m.position.set(0,.188,.101),t.add(m);const _=new W(new lt(.105,.105,.018,22,1,!0),c);return _.position.set(0,.182,-.006),_.rotation.x=-.12,t.add(_),t}if(r==="mahangmu"){const l=new W(new it(.208,.048,.206),e);l.position.set(0,.206,-.002),l.castShadow=!0,t.add(l);const c=new W(new it(.204,.135,.08),e);return c.position.set(0,.145,-.066),t.add(c),t}const s=r==="jiadaogou"?new Ee({color:"#201611",roughness:.85}):e,a=mn([{y:.115,rx:.088,rz:.088,oz:-.022},{y:.158,rx:.092,rz:.098,oz:-.015},{y:.196,rx:.089,rz:.098,oz:-.008},{y:.224,rx:.068,rz:.078,oz:-.002},{y:.238,rx:.022,rz:.026,oz:0},{y:.242,rx:0,rz:0,oz:0}],20,2),o=new W(a,s);if(o.rotation.x=-.26,o.position.set(0,.014,-.006),o.castShadow=!0,t.add(o),i==="aozhezhe"){for(let c=0;c<16;c++){const h=c<10?.052:.022,f=(c<10?c/10:(c-10)/6)*Math.PI*2,d=new W(new Wt(.016,.038,6,8),e);d.position.set(Math.sin(f)*h,.232+c%2*.01,Math.cos(f)*h-.004),d.rotation.z=-Math.sin(f)*.22,d.rotation.x=Math.cos(f)*.18,d.castShadow=!0,t.add(d)}const l=new W(new Ce(.026,10,8),e);return l.position.set(0,-.022,.072),l.scale.set(1.1,.85,.9),t.add(l),t}if(i==="laya"){for(let c=0;c<9;c++){const h=new W(new Ce(.035,10,8),e),f=c/8*Math.PI*1.5-.75;h.position.set(Math.sin(f)*.044,.226+c%2*.007,.014+Math.cos(f)*.04),h.scale.set(1.05,.78,1.18),t.add(h)}const l=new W(new Ce(.048,14,10),e);l.position.set(0,-.014,.048),l.scale.set(1.22,.72,.95),t.add(l);for(const c of[-1,1]){const h=new W(new Wt(.018,.055,6,8),e);h.position.set(c*.064,.025,.034),h.rotation.z=c*.28,h.rotation.x=-.25,t.add(h)}return t}if(i==="dingneisi"){const l=new W(new Ce(.078,16,12),e);return l.scale.set(1.02,.48,1.18),l.position.set(.012,.224,.012),l.rotation.set(-.22,0,-.16),l.castShadow=!0,t.add(l),t}if(r==="matufu"){const l=new Ee({color:"#f8fafc",roughness:.65}),c=new W(new lt(.096,.094,.042,24),l);c.position.set(0,.158,.002),c.scale.set(.98,1,1.08),c.castShadow=!0,t.add(c);const h=new W(new it(.06,.016,.012),l);h.position.set(.015,.158,.102),h.rotation.z=-.14,t.add(h);for(let f=0;f<12;f++){const d=f/12*Math.PI*2,p=new W(new wn(.028,.068,8),e);p.position.set(Math.sin(d)*.052,.232+f%2*.012,Math.cos(d)*.052),p.rotation.z=-Math.sin(d)*.45,p.rotation.x=Math.cos(d)*.4,t.add(p)}return t}if(r==="nujiaoshou"){const l=new Ee({color:"#111827",roughness:.5}),c=new Ee({color:"#8c7350",roughness:.6}),h=new Ee({color:"#e8dac0",roughness:.42,metalness:.06});for(let m=-3;m<=3;m++){const _=m*.017,g=new W(new Wt(.014,.064,5,7),e);g.position.set(_,.214+(3-Math.abs(m))*.004,.046-Math.abs(m)*.004),g.rotation.x=-.82,g.rotation.z=_*2.4,t.add(g)}const f=new W(new lt(.026,.028,.016,14),l);f.position.set(0,.242,-.008),f.rotation.x=-.14,t.add(f);const d=new W(new Ce(.044,14,12),e);d.position.set(0,.27,-.012),d.scale.set(1.08,.88,1.06),d.castShadow=!0,t.add(d);for(const m of[-1,1]){const _=new ZS([new k(m*.062,.188,.042),new k(m*.114,.194,.054),new k(m*.136,.244,.044),new k(m*.102,.308,.026)]),g=14,u=10,v=_.computeFrenetFrames(g,!1),y=_.getSpacedPoints(g),S=[],b=[];for(let D=0;D<=g;D++){const A=D/g,C=.025*Math.pow(1-A,.82)+.0018,P=y[D],N=v.normals[D],R=v.binormals[D];for(let U=0;U<=u;U++){const q=U/u*Math.PI*2,z=Math.cos(q),G=Math.sin(q);S.push(P.x+C*(z*N.x+G*R.x),P.y+C*(z*N.y+G*R.y),P.z+C*(z*N.z+G*R.z))}}for(let D=0;D<g;D++)for(let A=0;A<u;A++){const C=D*(u+1)+A,P=C+1,N=(D+1)*(u+1)+A,R=N+1;b.push(C,P,R,C,R,N)}const T=new zt;T.setAttribute("position",new ct(S,3)),T.setIndex(b),T.computeVertexNormals();const x=new W(T,h);x.castShadow=!0,t.add(x);const M=new W(new Ce(.026,10,8),c);M.position.set(m*.064,.188,.042),M.scale.set(.85,1.05,1.05),t.add(M)}for(let m=0;m<3;m++){const _=new W(new Wt(.008,.062,5,7),e);_.position.set(-.072-m*.011,.045-m*.012,-.024-m*.006),_.rotation.z=-.32-m*.1,_.rotation.x=.15,t.add(_)}const p=new W(new Ce(.021,10,8),e);return p.position.set(0,-.011,.048),p.scale.set(1.22,.65,.85),t.add(p),t}if(r==="jiekexikao"){const l=new Ee({color:"#eab308",roughness:.65}),c=20;for(let f=0;f<c;f++){const d=f>=12,m=(d?(f-12)/8:f/12)*Math.PI*2+(d?.24:0),_=d?.026:.052,g=d?.78:Math.cos(m)>.35?1.05:1.18,u=new tt;u.position.set(Math.sin(m)*_,d?.228:.214,Math.cos(m)*_+.008),u.rotation.order="YXZ",u.rotation.y=m,u.rotation.x=g;const v=new W(new Wt(.0135,.036,5,7),e);v.position.set(0,.02,0),u.add(v);const y=new W(new Wt(.013,.046,5,7),l);y.position.set(0,.058,.008),y.rotation.x=.28,y.castShadow=!0,u.add(y),t.add(u)}const h=new W(new Ce(.021,10,8),e);return h.position.set(0,-.011,.048),h.scale.set(1.2,.65,.85),t.add(h),t}if(r==="jiadaogou"){for(let l=0;l<11;l++){const c=(l%4-1.5)*.028,h=Math.floor(l/4)*.034-.02,f=new W(new wn(.028,.068,8),e);f.position.set(c,.236,h+.018),f.rotation.x=.38,f.rotation.z=-c*3.5,f.castShadow=!0,t.add(f)}return t}if(r==="mushandian"){for(const l of[-1,1]){const c=new W(new Ce(.058,14,10),e);c.position.set(l*.042,.214,.018),c.scale.set(.95,.68,1.25),c.rotation.z=l*-.35,t.add(c);const h=new W(new Wt(.022,.068,6,8),e);h.position.set(l*.078,.162,.044),h.rotation.z=l*.18,h.rotation.x=.22,t.add(h)}return t}if(r==="xiehuashao"||r==="antuoluo"||r==="jatiewei"){if(r!=="jatiewei"){const h=new W(new Ce(.078,16,12),e);h.scale.set(1,.5,1.18),h.position.set(.01,.226,.012),h.rotation.set(-.2,0,-.15),t.add(h)}const l=r==="xiehuashao"?.052:.044,c=new W(new Ce(l,14,10),e);c.position.set(0,-.016,.05),c.scale.set(1.2,.72,.92),t.add(c);for(const h of[-1,1]){const f=new W(new Wt(.016,.052,6,8),e);f.position.set(h*.062,.022,.032),f.rotation.z=h*.28,f.rotation.x=-.24,t.add(f)}return t}if(r==="saxiaojiao"){for(let l=0;l<18;l++){const c=l/18*Math.PI*2,h=l<11?.056:.024,f=new W(new Ce(.028,10,8),e);f.position.set(Math.sin(c)*h,.224+(l>=11?.018:.006),Math.cos(c)*h),t.add(f)}return t}if(r==="edashuai"){const l=new W(new Ce(.082,16,12),e);l.scale.set(1.04,.54,1.2),l.position.set(.014,.23,.016),l.rotation.set(-.18,0,-.2),t.add(l);const c=new W(new Ce(.032,10,8),e);return c.position.set(0,-.016,.066),c.scale.set(1.15,.72,.85),t.add(c),t}if(r==="weixiaoshu"||r==="pabupaleng"){const l=r==="weixiaoshu"?11:8;for(let c=0;c<l;c++){const h=c/(l-1)-.5,f=new W(new wn(.028,r==="weixiaoshu"?.058:.044,8),e);f.position.set(h*.11,.226+c%2*.008,.032-Math.abs(h)*.03),f.rotation.x=.42,f.rotation.z=-h*.75,t.add(f)}return t}if(n.hairStyle==="swept"){const l=new W(new Ce(.078,16,12),e);l.scale.set(.98,.48,1.18),l.position.set(.008,.224,.012),l.rotation.x=-.22,l.castShadow=!0,t.add(l)}else if(n.hairStyle==="textured")for(let l=0;l<7;l++){const c=new W(new Ce(.033,10,8),e),h=l/7*Math.PI*1.4-.7;c.position.set(Math.sin(h)*.038,.226+l%2*.006,.008+Math.cos(h)*.038),c.scale.set(1,.72,1.15),t.add(c)}else if(n.hairStyle==="curly")for(let l=0;l<14;l++){const c=new W(new Ce(.032,10,8),e),h=l/14*Math.PI*2,f=l<9?.062:.028;c.position.set(Math.sin(h)*f,.214+(l>=9?.022:.006),Math.cos(h)*f-.008),t.add(c)}else if(n.hairStyle==="fade"){const l=new W(new it(.115,.036,.132),e);l.position.set(0,.226,.004),t.add(l)}else n.hairStyle==="buzz"&&o.scale.set(.97,.96,.97);return t}function sb(){const n=new tt,e=new Ee({color:"#ebd3ab",roughness:.88}),t=new Ee({color:"#f4e1be",roughness:.86}),i=new Ee({color:"#fbf0db",roughness:.78}),r=new Ee({color:"#f2a7a0",roughness:.75}),s=new Ee({color:"#caa878",roughness:.78}),a=new Ee({color:"#2b1d14",roughness:.5}),o=new Ee({color:"#ffffff",roughness:.3}),l=mn([{y:-.015,rx:.058,rz:.065,oz:.012},{y:.035,rx:.088,rz:.092,oz:.008},{y:.095,rx:.086,rz:.094,oz:.002},{y:.155,rx:.084,rz:.09,oz:-.004},{y:.205,rx:.058,rz:.064,oz:-.006}],22,2),c=new W(l,e);c.castShadow=!0,n.add(c);for(const g of[-1,1]){const u=new W(new Ce(.038,10,8),e);u.position.set(g*.068,.048,.025),n.add(u)}const h=new W(new Ce(.048,16,12),i);h.position.set(0,.052,.092),h.scale.set(.95,.88,1.18),h.castShadow=!0,n.add(h);for(const g of[-1,1]){const u=new W(new Ce(.024,12,10),i);u.position.set(g*.018,.058,.122),u.scale.set(.95,.92,1.05),n.add(u)}const f=new W(new Ce(.013,10,8),a);f.position.set(0,.078,.138),f.scale.set(1.35,.72,.7),n.add(f);const d=new W(new Ce(.021,10,8),a);d.position.set(0,.036,.118),d.scale.set(1.15,.78,.7),n.add(d);for(const g of[-1,1]){const u=new W(new it(.011,.016,.008),o);u.position.set(g*.0065,.038,.131),n.add(u)}const p=new W(new Ce(.026,12,10),i);p.position.set(0,.018,.106),p.scale.set(1.05,.65,1),n.add(p);for(const g of[-.012,0,.012]){const u=new W(new Wt(.013,.028,6,8),t);u.position.set(g,-.022,.088),u.rotation.x=.2,n.add(u)}const m=new Ee({color:"#ffffff",roughness:.25});for(const g of[-1,1]){const u=g*.043,v=.108,y=.078,S=new W(new Ce(.019,14,12),m);S.position.set(u,v,y),S.scale.set(1.1,.95,.8),n.add(S);const b=new W(new Ce(.0095,10,8),a);b.position.set(u,v-.002,y+.012),b.scale.set(1.15,.78,.6),n.add(b);const T=new W(new Ce(.0205,14,10,0,Math.PI*2,0,Math.PI*.54),s);T.position.set(u,v+.001,y),T.scale.set(1.12,.96,.85),T.rotation.x=.18,n.add(T)}const _=[[0,.168,.068,.036],[-.032,.164,.062,.033],[.032,.164,.062,.033],[-.056,.156,.044,.03],[.056,.156,.044,.03],[0,.198,.036,.042],[-.036,.194,.026,.038],[.036,.194,.026,.038],[0,.205,-.012,.044],[-.042,.182,-.022,.038],[.042,.182,-.022,.038]];for(const[g,u,v,y]of _){const S=new W(new Ce(y,10,8),t);S.position.set(g,u,v),S.castShadow=!0,n.add(S)}for(const g of[-1,1]){const u=new tt;u.position.set(g*.062,.192,-.006),u.rotation.z=-g*.22,u.rotation.x=.08;const v=new W(new wn(.028,.135,12),e);v.position.set(0,.062,0),v.scale.set(.88,1,.62),v.castShadow=!0,u.add(v);const y=new W(new wn(.017,.098,10),r);y.position.set(0,.058,.008),y.scale.set(.82,1,.45),u.add(y),n.add(u)}return n}function ab(n,e){const t=new tt,i=new Ee({color:n,roughness:.35,metalness:.12}),r=new Ee({color:"#111827",roughness:.5,metalness:.2}),s=new Ee({color:e&&n!=="#f8fafc"?"#ffffff":"#0f172a",roughness:.3}),a=new Ce(.056,16,12);a.scale(.86,.76,2.15);const o=new W(a,i);o.position.set(0,-.052,.052),o.castShadow=!0,t.add(o);const l=new W(new lt(.044,.048,.045,14),i);l.position.set(0,-.022,-.01),t.add(l);const c=new W(new it(.098,.018,.09),s);c.position.set(0,-.048,.045),c.rotation.x=.18,t.add(c);const h=new W(new it(.084,.014,.225),r);h.position.set(0,-.084,.05),h.castShadow=!0,t.add(h);const f=new lt(.006,.004,.014,6);for(const d of[-.026,.026])for(const p of[-.035,.045,.12]){const m=new W(f,r);m.position.set(d,-.092,p),t.add(m)}return t}function ob(n,e,t,i,r=!1){const s=new tt;if(e){const a=i.chestMotif==="lightning",o=new Ee({color:i.gloveBackColor??i.primary,roughness:.4}),l=new Ee({color:i.gloveLatex??"#f8fafc",emissive:a?"#0284c7":"#000000",emissiveIntensity:a?.35:0,roughness:.58}),c=new Ee({color:i.gloveStrapColor??"#0f172a",roughness:.5}),h=new W(new lt(.043,.045,.044,12),c);h.position.set(0,-.018,0),s.add(h);const f=new W(new it(.092,.105,.042),l);f.position.set(0,-.082,.004),f.castShadow=!0,s.add(f);const d=new W(new it(.094,.098,.024),o);if(d.position.set(0,-.08,-.014),s.add(d),i.gloveBackColor==="#dc2626"||a){const _=new Ee({color:a?"#67e8f9":"#ffffff",emissive:a?"#22d3ee":"#000000",emissiveIntensity:a?.9:0,roughness:.35});for(const g of[-.024,0,.024]){const u=new W(new it(.012,.072,.008),_);u.position.set(g,-.085,-.026),s.add(u)}}const p=i.gloveBackColor==="#dc2626"?o:l;for(let _=0;_<4;_++){const g=(_-1.5)/1.5,u=.072-Math.abs(g)*.01,v=new W(new Wt(.012,u,6,8),p);v.position.set(g*.032,-.155,.008),v.rotation.z=g*.14,v.rotation.x=-.12,v.castShadow=!0,s.add(v)}const m=new W(new Wt(.013,.052,6,8),l);m.position.set(-n*.056,-.095,.018),m.rotation.z=-n*.62,m.rotation.x=-.22,s.add(m)}else{const a=r?new Ee({color:"#1e293b",roughness:.52}):t;if(r){const c=new W(new lt(.033,.034,.024,10),a);c.position.set(0,-.012,0),s.add(c)}const o=new W(new Ce(.038,12,10),a);o.scale.set(.88,1.25,.56),o.position.set(0,-.052,0),o.castShadow=!0,s.add(o);for(let c=0;c<4;c++){const h=(c-1.5)/1.5,f=new W(new Wt(.0075,.044,4,6),a);f.position.set(h*.02,-.105,.006),f.rotation.x=-.25,s.add(f)}const l=new W(new Wt(.0085,.034,4,6),a);l.position.set(-n*.034,-.062,.014),l.rotation.z=-n*.45,s.add(l),s.scale.y=1.25}return s}function Wm(n,e,t,i,r){t.rotation.set(-pi(e.flex,-1.05,3.05),-n*pi(e.twist,-1.4,1.4),n*pi(e.abduct,-.35,3.05)),i.rotation.set(-pi(e.elbow,.02,2.45),0,0),r.rotation.set(pi(e.wristPitch??0,-1.05,1.05),0,0)}function Xm(n,e,t,i,r){t.rotation.set(-pi(e.flex,-.65,2.2),n*pi(e.twist,-.8,.8),n*pi(e.abduct,-.35,1.15)),i.rotation.set(pi(e.knee,.02,2.45),0,0),r.rotation.set(-pi(e.ankle,-.75,.5),0,0)}class so{constructor(e,t,i,r){this.root=new tt,this.scaleGroup=new tt,this.pelvis=new tt,this.spine=new tt,this.neck=new tt,this.head=new tt,this.shoulderL=new tt,this.elbowL=new tt,this.wristL=new tt,this.handTipL=new Nt,this.shoulderR=new tt,this.elbowR=new tt,this.wristR=new tt,this.handTipR=new Nt,this.hipL=new tt,this.kneeL=new tt,this.ankleL=new tt,this.hipR=new tt,this.kneeR=new tt,this.ankleR=new tt,this.baseHipY=.959,this.tmpA=new k,this.tmpB=new k,this.disposed=!1,this.smoothPose=null,this.poseLerp=.22,this.isKeeper=r,this.heightScale=e.height/1.84;const s=e.build,a=e.keeperPersona,o=e.playerPersona;this.root.add(this.scaleGroup),this.scaleGroup.scale.set(this.heightScale,this.heightScale,this.heightScale);const l=new Ee({color:e.skin,roughness:a==="tuoheya"?.88:.62,metalness:.02}),c=nb(t,i,r),h=new Ee({map:c,roughness:.78,metalness:.04}),f=new Ee({color:t.sleeveColor??(r&&!a?t.secondary:t.primary),roughness:.88}),d=new Ee({color:t.secondary,roughness:.9}),p=new Ee({color:t.shorts,roughness:.9}),m=new Ee({color:t.socks,roughness:.92}),_=new Ee({color:"#f8fafc",roughness:.6}),g=new Ee({color:e.hair,roughness:.88,metalness:0});this.pelvis.position.set(0,this.baseHipY,0),this.pelvis.rotation.order="YXZ",this.scaleGroup.add(this.pelvis);const u=mn([{y:-.095,rx:.166*s,rz:.112*s,oz:-.008},{y:-.03,rx:.166*s,rz:.114*s,oz:-.006},{y:.02,rx:.146*s,rz:.098*s,oz:-.002},{y:.06,rx:.126*s,rz:.082*s,oz:0}]),v=new W(u,p);if(v.castShadow=!0,v.receiveShadow=!0,this.pelvis.add(v),o==="siqiaotun")for(const C of[-1,1]){const P=new W(new Ce(.066*s,14,12),p);P.position.set(C*.056*s,-.036,-.088*s),P.scale.set(1.06,1.02,1.18),P.castShadow=!0,this.pelvis.add(P)}const y=mn([{y:.005,rx:.162*s,rz:.118*s,oz:-.005},{y:.072,rx:.152*s,rz:.11*s,oz:-.002}],24,2,1,.002),S=new W(y,d);S.castShadow=!0,this.pelvis.add(S),this.spine.position.set(0,.085,0),this.spine.rotation.order="YXZ",this.pelvis.add(this.spine);const b=mn([{y:-.062,rx:.162*s,rz:.118*s,oz:-.004},{y:.045,rx:.15*s,rz:.108*s,oz:.002},{y:.18,rx:.17*s,rz:.118*s,oz:.01},{y:.31,rx:.194*s,rz:.126*s,oz:.012},{y:.41,rx:.214*s,rz:.114*s,oz:.004},{y:.468,rx:.125*s,rz:.085*s,oz:-.002},{y:.482,rx:.068,rz:.065,oz:0}],24,3,1,.003),T=new W(b,h);if(T.castShadow=!0,T.receiveShadow=!0,this.spine.add(T),o==="morenha"){const C=new Ri({color:"#f472b6",transparent:!0,opacity:.46,side:Rn});for(let P=0;P<5;P++){const N=P/4-.5,R=new W(new wn(.055,.24-Math.abs(N)*.08,8),C);R.position.set(N*.36*s,.42-Math.abs(N)*.06,-.125),R.rotation.z=-N*.48,R.rotation.x=-.18,this.spine.add(R)}}else if(o==="pabupaleng"){const C=new Ee({color:"#f0f9ff",roughness:.35}),P=new Ee({color:"#bae6fd",emissive:"#38bdf8",emissiveIntensity:.28,roughness:.18});for(const N of[-1,1]){const R=new W(new Ce(.048,12,10),C);R.position.set(N*.185*s,.448,.01),R.scale.set(1.25,.42,1.05),this.spine.add(R);for(let U=-1;U<=1;U++){const q=new W(new wn(.008,.036-Math.abs(U)*.008,6),P);q.position.set(N*(.185+U*.016)*s,.422,.032),q.rotation.x=Math.PI,this.spine.add(q)}}}else if(o==="edashuai"){const C=new Ee({color:"#1e293b",roughness:.7}),P=new Ee({color:"#eab308",roughness:.32,metalness:.45}),N=new Ee({color:"#111827",roughness:.45}),R=new Ee({color:"#38bdf8",emissive:"#0284c7",emissiveIntensity:.35,roughness:.12,metalness:.6});for(const J of[-1,1]){const ae=new W(new it(.008,.18,.006),C);ae.position.set(J*.036,.365,.118*s),ae.rotation.z=J*-.14,ae.rotation.x=-.18,this.spine.add(ae)}const U=new tt;U.position.set(0,.272,.136*s);const q=new W(new it(.088,.056,.034),P);q.castShadow=!0,U.add(q);const z=new W(new it(.04,.016,.028),N);z.position.set(0,.034,-.002),U.add(z);const G=new W(new lt(.007,.007,.01,10),P);G.position.set(-.028,.032,.004),U.add(G);const O=new W(new lt(.021,.023,.028,16),N);O.rotation.x=Math.PI*.5,O.position.set(.004,-.002,.024),U.add(O);const X=new W(new lt(.016,.016,.03,16),R);X.rotation.x=Math.PI*.5,X.position.set(.004,-.002,.026),U.add(X),this.spine.add(U)}else if(o==="weixiaoshu"){const C=new Ee({color:"#facc15",roughness:.48}),P=new W(new lt(.024,.024,.006,14),C);P.rotation.x=Math.PI*.46,P.rotation.z=.25,P.scale.set(1.18,1,.88),P.position.set(.056*s,.338,.128*s),this.spine.add(P)}else if(o==="xiehuashao"){const C=new Ri({color:"#38bdf8",transparent:!0,opacity:.5}),P=new W(new Uc(.19*s,.005,8,28),C);P.rotation.x=Math.PI*.44,P.rotation.y=.18,P.position.set(0,.08,0),this.spine.add(P)}else if(o==="mushandian"){const C=new Ee({color:"#fde047",emissive:"#facc15",emissiveIntensity:.85,roughness:.2});for(const P of[-1,1])for(let N=0;N<2;N++){const R=new W(new wn(.012,.075,4),C);R.position.set(P*(.225+N*.018)*s,.36-N*.14,-.02+N*.03),R.rotation.z=P*-.55,this.spine.add(R);const U=new W(new wn(.01,.065,4),C);U.position.set(P*(.235+N*.018)*s,.32-N*.14,-.015+N*.03),U.rotation.z=Math.PI+P*-.42,this.spine.add(U)}}else if(o==="ligugu"){const C=new Ee({color:"#f8fafc",roughness:.55}),P=new Ee({color:"#cbd5e1",roughness:.6}),N=new Ee({color:"#f97316",roughness:.4}),R=new Ee({color:"#0f172a",roughness:.2}),U=new tt;U.position.set(.162*s,.468,.022),U.rotation.y=-.18;const q=new W(new Ce(.032,12,10),C);q.scale.set(.88,.92,1.32),q.castShadow=!0,U.add(q);const z=new W(new Ce(.021,12,10),C);z.position.set(0,.032,.024),z.castShadow=!0,U.add(z);for(const X of[-1,1]){const J=new W(new Ce(.022,10,8),P);J.position.set(X*.024,.002,-.004),J.scale.set(.42,.78,1.25),U.add(J);const ae=new W(new Ce(.0042,6,6),R);ae.position.set(X*.015,.036,.036),U.add(ae)}const G=new W(new wn(.0065,.018,8),N);G.rotation.x=Math.PI*.48,G.position.set(0,.03,.048),U.add(G);const O=new W(new it(.028,.006,.034),P);O.position.set(0,-.006,-.044),O.rotation.x=-.24,U.add(O),this.spine.add(U)}else if(o==="antuoluo"){const C=new Ri({color:"#f8fafc",transparent:!0,opacity:.48}),P=[.09,.21,.33],N=[.205,.245,.225];for(let R=0;R<3;R++){const U=new W(new Uc(N[R]*s,.0065,8,32,Math.PI*1.65),C);U.rotation.x=Math.PI*.5+(R-1)*.08,U.rotation.z=R*2.1,U.position.set(0,P[R],0),this.spine.add(U)}}if(this.neck.position.set(0,.488,0),this.spine.add(this.neck),a==="tuoheya"){const C=mn([{y:-.018,rx:.072,rz:.072},{y:.025,rx:.066,rz:.068,oz:.004},{y:.05,rx:.064,rz:.065,oz:.008},{y:.075,rx:.062,rz:.063,oz:.011},{y:.1,rx:.058,rz:.06,oz:.014}],18,2),P=new W(C,l);P.castShadow=!0,this.neck.add(P),this.head.position.set(0,.085,.014),this.head.rotation.order="YXZ",this.neck.add(this.head),this.head.add(sb())}else{const C=new Ee({map:ib(e),roughness:o==="mulaohan"?.58:.7}),P=mn([{y:-.015,rx:.062,rz:.062},{y:.045,rx:.054,rz:.055,oz:.004},{y:.095,rx:.052,rz:.052,oz:.006}],16,2),N=new W(P,l);N.castShadow=!0,this.neck.add(N),this.head.position.set(0,.082,.004),this.head.scale.set(.88,.9,.88),this.head.rotation.order="YXZ",this.neck.add(this.head);const R=o==="mahangmu",U=R?mn([{y:-.018,rx:.076,rz:.076,oz:.004},{y:.006,rx:.101,rz:.098,oz:.002},{y:.095,rx:.102,rz:.099,oz:0},{y:.192,rx:.101,rz:.098,oz:-.002},{y:.214,rx:.072,rz:.072,oz:-.002}],28,2,.38):mn([{y:-.022,rx:.044,rz:.052,oz:.016},{y:.018,rx:.068,rz:.082,oz:.01},{y:.075,rx:.084,rz:.096,oz:.002},{y:.132,rx:.089,rz:.102,oz:-.004},{y:.19,rx:.084,rz:.096,oz:-.008},{y:.218,rx:.042,rz:.048,oz:-.008},{y:.228,rx:0,rz:0,oz:-.008}],24,2),q=new W(U,C);if(q.castShadow=!0,this.head.add(q),a==="laya"){const O=new W(new Ce(.022,12,10),l);O.position.set(0,.08,.105),O.scale.set(1.32,.96,1.12),this.head.add(O);for(const X of[-1,1]){const J=new W(new Ce(.012,8,8),l);J.position.set(X*.017,.074,.098),this.head.add(J)}}else{const O=new W(new wn(.015,.042,8),l);O.position.set(0,.086,R?.104:.098),O.rotation.x=Math.PI*.42,this.head.add(O)}const z=a==="dingneisi"?1.25:1,G=R?.105:.088;if(o!=="weizhencha")for(const O of[-1,1]){const X=new W(new Ce(.02*z,8,8),l);X.scale.set(.45,1.15,.72),X.position.set(O*G,.095,-.006),this.head.add(X)}this.head.add(rb(e,g))}const x=r&&(!a||a==="aozhezhe"),M=!r&&o==="saxiaojiao",D=(C,P,N,R,U)=>{P.position.set(C*.205*s,.415,0),P.rotation.order="ZXY",this.spine.add(P);const q=new W(new Ce(.062*s,14,12),f);q.scale.set(.95,1.1,.95),q.position.set(0,-.01,0),q.castShadow=!0,P.add(q);const z=x?.285:.145,G=mn([{y:-z,rx:(x?.046:.056)*s,rz:(x?.046:.056)*s},{y:-z*.45,rx:.059*s,rz:.059*s},{y:.01,rx:.062*s,rz:.062*s}],16,2,1,.0015),O=new W(G,f);if(O.castShadow=!0,P.add(O),!x){const j=mn([{y:-.295,rx:.041*s,rz:.042*s},{y:-.21,rx:.049*s,rz:.051*s,oz:.003},{y:-.13,rx:.051*s,rz:.052*s}],14,2),V=new W(j,l);V.castShadow=!0,P.add(V)}N.position.set(0,-.295,0),N.rotation.order="XYZ",P.add(N);const X=new W(new Ce(.041*s,12,10),x?f:l);N.add(X);const J=mn([{y:-.26,rx:.031*s,rz:.033*s},{y:-.15,rx:.041*s,rz:.042*s},{y:-.04,rx:.044*s,rz:.045*s},{y:0,rx:.041*s,rz:.041*s}],14,2),ae=new W(J,x?f:l);ae.castShadow=!0,N.add(ae),R.position.set(0,-.26,0),N.add(R),R.add(ob(C,r,l,t,M)),U.position.set(0,r?-.16:-.165,.01),R.add(U)};D(1,this.shoulderL,this.elbowL,this.wristL,this.handTipL),D(-1,this.shoulderR,this.elbowR,this.wristR,this.handTipR);const A=(C,P,N,R)=>{P.position.set(C*.102*s,0,0),P.rotation.order="ZXY",this.pelvis.add(P);const U=mn([{y:-.235,rx:.088*s,rz:.092*s,oz:.004},{y:-.11,rx:.092*s,rz:.096*s},{y:.02,rx:.088*s,rz:.092*s}],16,2,1,.0025),q=new W(U,p);q.castShadow=!0,P.add(q);const z=mn([{y:-.44,rx:.058*s,rz:.062*s},{y:-.34,rx:.068*s,rz:.074*s,oz:.005},{y:-.21,rx:.078*s,rz:.082*s,oz:.006}],16,2),G=new W(z,l);G.castShadow=!0,P.add(G),N.position.set(0,-.44,0),N.rotation.order="XYZ",P.add(N);const O=new W(new Ce(.056*s,14,12),l);O.scale.set(.96,1.05,1.04),O.castShadow=!0,N.add(O);const X=mn([{y:-.11,rx:.058*s,rz:.064*s,oz:-.006},{y:-.04,rx:.055*s,rz:.058*s},{y:0,rx:.055*s,rz:.058*s}],14,2),J=new W(X,l);J.castShadow=!0,N.add(J);const ae=mn([{y:-.42,rx:.039*s,rz:.043*s},{y:-.31,rx:.046*s,rz:.051*s,oz:-.004},{y:-.19,rx:.061*s,rz:.068*s,oz:-.009},{y:-.1,rx:.06*s,rz:.064*s,oz:-.005}],16,2),j=new W(ae,m);j.castShadow=!0,N.add(j);const V=new W(new lt(.062*s,.061*s,.028,16),_);V.position.set(0,-.105,-.005),N.add(V);const ie=new W(new lt(.042*s,.043*s,.05,14),_);ie.position.set(0,-.39,0),N.add(ie),R.position.set(0,-.42,0),R.rotation.order="XYZ",N.add(R),R.add(ab(e.bootColor,r))};A(1,this.hipL,this.kneeL,this.ankleL),A(-1,this.hipR,this.kneeR,this.ankleR),this.head.traverse(C=>{var U;const P=C;if(!P.isMesh)return;const N=P.geometry;N!=null&&N.boundingSphere||N.computeBoundingSphere();const R=((U=N.boundingSphere)==null?void 0:U.radius)??0;R>=.055&&R<=.14&&P.material===g?P.scale.multiplyScalar(.86):R>.14&&P.material===g&&P.scale.multiplyScalar(.9)})}applyPose(e,t=!1){const i=t||!this.smoothPose?1:this.poseLerp;this.smoothPose||(this.smoothPose=ma());const r=this.smoothPose,s=(a,o)=>a+(o-a)*i;r.pelvisOffset.x=s(r.pelvisOffset.x,e.pelvisOffset.x),r.pelvisOffset.y=s(r.pelvisOffset.y,e.pelvisOffset.y),r.pelvisOffset.z=s(r.pelvisOffset.z,e.pelvisOffset.z),r.pelvisRot.pitch=s(r.pelvisRot.pitch,e.pelvisRot.pitch),r.pelvisRot.yaw=s(r.pelvisRot.yaw,e.pelvisRot.yaw),r.pelvisRot.roll=s(r.pelvisRot.roll,e.pelvisRot.roll),r.spine.lean=s(r.spine.lean,e.spine.lean),r.spine.twist=s(r.spine.twist,e.spine.twist),r.spine.side=s(r.spine.side,e.spine.side),r.head.pitch=s(r.head.pitch,e.head.pitch),r.head.yaw=s(r.head.yaw,e.head.yaw),r.head.roll=s(r.head.roll,e.head.roll);for(const a of["armL","armR"]){const o=e[a],l=r[a];l.flex=s(l.flex,o.flex),l.abduct=s(l.abduct,o.abduct),l.twist=s(l.twist,o.twist),l.elbow=s(l.elbow,o.elbow),l.wristPitch=s(l.wristPitch??0,o.wristPitch??0)}for(const a of["legL","legR"]){const o=e[a],l=r[a];l.flex=s(l.flex,o.flex),l.abduct=s(l.abduct,o.abduct),l.twist=s(l.twist,o.twist),l.knee=s(l.knee,o.knee),l.ankle=s(l.ankle,o.ankle)}this.pelvis.position.set(r.pelvisOffset.x,this.baseHipY+r.pelvisOffset.y,r.pelvisOffset.z),this.pelvis.rotation.set(r.pelvisRot.pitch,r.pelvisRot.yaw,-r.pelvisRot.roll),this.spine.rotation.set(r.spine.lean,r.spine.twist,-r.spine.side),this.head.rotation.set(r.head.pitch,r.head.yaw,-r.head.roll),Wm(1,r.armL,this.shoulderL,this.elbowL,this.wristL),Wm(-1,r.armR,this.shoulderR,this.elbowR,this.wristR),Xm(1,r.legL,this.hipL,this.kneeL,this.ankleL),Xm(-1,r.legR,this.hipR,this.kneeR,this.ankleR)}getKeeperCollisionCapsules(){this.root.updateMatrixWorld(!0);const e=this.heightScale,t=(i,r,s,a)=>(i.getWorldPosition(this.tmpA),r.getWorldPosition(this.tmpB),{a:this.tmpA.clone(),b:this.tmpB.clone(),radius:s*e,part:a});return[t(this.wristL,this.handTipL,.135,"gloveL"),t(this.wristR,this.handTipR,.135,"gloveR"),t(this.elbowL,this.wristL,.088,"armL"),t(this.elbowR,this.wristR,.088,"armR"),t(this.shoulderL,this.elbowL,.088,"armL"),t(this.shoulderR,this.elbowR,.088,"armR"),t(this.pelvis,this.neck,.185,"torso"),t(this.neck,this.head,.115,"torso"),t(this.hipL,this.kneeL,.1,"leg"),t(this.hipR,this.kneeR,.1,"leg"),t(this.kneeL,this.ankleL,.085,"leg"),t(this.kneeR,this.ankleR,.085,"leg")]}dispose(){if(this.disposed)return;this.disposed=!0;const e=new Set,t=new Set,i=new Set;this.root.traverse(r=>{if(r instanceof W)if(e.add(r.geometry),Array.isArray(r.material))for(const s of r.material)t.add(s);else t.add(r.material)});for(const r of t)for(const s of Object.values(r))s instanceof on&&i.add(s);for(const r of i)r.dispose();for(const r of t)r.dispose();for(const r of e)r.dispose()}}function ma(){return{pelvisOffset:{x:0,y:0,z:0},pelvisRot:{pitch:0,yaw:0,roll:0},spine:{lean:.05,side:0,twist:0},head:{pitch:0,yaw:0,roll:0},armL:{flex:.06,abduct:.14,twist:.1,elbow:.22},armR:{flex:.06,abduct:.14,twist:.1,elbow:.22},legL:{flex:.04,abduct:.05,twist:.04,knee:.08,ankle:.02},legR:{flex:.04,abduct:.05,twist:.04,knee:.08,ankle:.02}}}function lb({keeper:n,player:e}){const t=bt.useRef(null),i=bt.useRef(null);return bt.useEffect(()=>{const r=t.current;if(!r)return;const s=new ox({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),s.shadowMap.enabled=!0,s.shadowMap.type=Kd,s.toneMapping=iu,s.toneMappingExposure=1.05,r.innerHTML="",r.appendChild(s.domElement);const a=new I_,o=new ei(35,1,.2,30);o.position.set(0,1.18,3.7),o.lookAt(0,.98,0);const l=new Y_("#dbeafe","#0f291e",.9);a.add(l);const c=new ro("#fff7ed",1.85);c.position.set(2.8,4.8,3.6),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.camera.left=-1.7,c.shadow.camera.right=1.7,c.shadow.camera.top=2.4,c.shadow.camera.bottom=-1,c.shadow.camera.near=.5,c.shadow.camera.far=10,c.shadow.normalBias=.012,c.shadow.bias=-1e-4,a.add(c);const h=new ro("#38bdf8",.95);h.position.set(-3.2,3.2,-2.8),a.add(h);const f=new W(new lt(1.38,1.48,.08,48),new Ee({color:"#14532d",roughness:.8}));f.position.set(0,-.04,0),f.receiveShadow=!0,a.add(f);const d=new W(new su(1.32,1.37,48),new Ri({color:"#10b981",side:Rn,transparent:!0,opacity:.65}));d.rotation.x=-Math.PI/2,d.position.y=.002,a.add(d);const p=new tt,m=new tt;a.add(p),a.add(m),i.current={scene:a,keeperSlot:p,playerSlot:m,keeperRig:null,playerRig:null};const _=()=>{const T=r.getBoundingClientRect(),x=Math.max(220,T.width||320),M=Math.max(240,T.height||300);o.aspect=x/M,o.updateProjectionMatrix(),s.setSize(x,M,!1)};_();const g=new ResizeObserver(_);g.observe(r);let u=0;const v=performance.now(),y=ma(),S=ma();y.legL={flex:.14,abduct:.12,twist:.04,knee:.28,ankle:.12},y.legR={flex:.14,abduct:.12,twist:.04,knee:.28,ankle:.12},y.armL={flex:.28,abduct:.22,twist:-.1,elbow:.64},y.armR={flex:.28,abduct:.22,twist:-.1,elbow:.64},S.legL={flex:.06,abduct:.07,twist:.03,knee:.12,ankle:.04},S.legR={flex:.02,abduct:.08,twist:.03,knee:.12,ankle:.04},S.armL={flex:.1,abduct:.1,twist:.06,elbow:.24},S.armR={flex:.12,abduct:.1,twist:.06,elbow:.28};const b=T=>{const x=(T-v)/1e3,M=i.current;if(M){const D=!!(M.keeperRig&&M.playerRig);if(M.keeperRig){M.keeperSlot.position.set(D?-.5:0,0,D?-.08:0),M.keeperSlot.rotation.y=(D?.16:0)+Math.sin(x*.6)*.025;const A=y,C=Math.sin(x*1.8)*.004;A.pelvisOffset.y=-.025+C,A.pelvisOffset.x=Math.sin(x*.7)*.009,A.spine.lean=.1+C,A.head.yaw=Math.sin(x*.45)*.06,A.armL.flex=.28+C,A.armR.flex=.28-C,M.keeperRig.applyPose(A)}if(M.playerRig){M.playerSlot.position.set(D?.5:0,0,D?.08:0),M.playerSlot.rotation.y=(D?-.16:0)+Math.sin(x*.6+1.1)*.025;const A=S,C=Math.sin(x*1.7+.8)*.004;A.pelvisOffset.y=-.012+C,A.pelvisOffset.x=Math.sin(x*.65+.8)*.008,A.spine.lean=.035+C,A.spine.side=Math.sin(x*.65+.8)*.009,A.armL.flex=.1+C,A.armR.flex=.12-C,M.playerRig.applyPose(A)}}s.render(a,o),u=requestAnimationFrame(b)};return u=requestAnimationFrame(b),()=>{cancelAnimationFrame(u),g.disconnect(),i.current=null,s.dispose(),f.geometry.dispose(),f.material.dispose(),d.geometry.dispose(),d.material.dispose(),c.shadow.dispose(),s.domElement.remove()}},[]),bt.useEffect(()=>{const r=i.current;if(r)if(r.keeperSlot.clear(),n){const s=new so(n.appearance,n.kit,n.number,!0);return r.keeperSlot.add(s.root),r.keeperRig=s,()=>{r.keeperSlot.remove(s.root),s.dispose(),r.keeperRig=null}}else r.keeperRig=null},[n]),bt.useEffect(()=>{const r=i.current;if(r)if(r.playerSlot.clear(),e){const s=new so(e.appearance,e.kit,e.number,!1);return r.playerSlot.add(s.root),r.playerRig=s,()=>{r.playerSlot.remove(s.root),s.dispose(),r.playerRig=null}}else r.playerRig=null},[e]),B.jsx("div",{ref:t,className:"stage-3d-canvas",id:"locker-stage-3d"})}const Kr=["placed","power","panenka","stutter"],ao={placed:{id:"placed",keyNum:"1",name:"推射死角",tag:"精准推射",perfectGoalPct:90,perfectHalfWidth:.064,goodHalfWidth:.19,arrowsEnabled:!0,shuttleDesc:"穿梭较快 · 窄完美区",ruleDesc:"方向键瞄准死角 · 在中心停球完成精准推射",accentColor:"#38bdf8"},power:{id:"power",keyNum:"2",name:"大力爆射",tag:"强劲爆射",perfectGoalPct:80,perfectHalfWidth:.115,goodHalfWidth:.29,arrowsEnabled:!0,shuttleDesc:"穿梭平稳 · 宽完美区",ruleDesc:"方向键瞄准 · 在中心停球完成强劲爆射",accentColor:"#10b981"},panenka:{id:"panenka",keyNum:"3",name:"勺子点球",tag:"轻巧挑射",perfectGoalPct:95,perfectHalfWidth:.042,goodHalfWidth:.135,arrowsEnabled:!1,shuttleDesc:"极速穿梭 · 极窄完美点",ruleDesc:"方向键无效（固定踢向中路）· 在中心停球完成挑射",accentColor:"#f59e0b"},stutter:{id:"stutter",keyNum:"4",name:"节奏变化（小跳步）",tag:"诡谲变奏",perfectGoalPct:90,perfectHalfWidth:.08,goodHalfWidth:.22,arrowsEnabled:!0,shuttleDesc:"小球在条内无规则急停乱晃",ruleDesc:"方向键瞄准 · 小跳步扰乱门将重心",accentColor:"#a855f7"}},cb={accSpread:1},Vi=[{id:"k1",name:"腊鸭",nick:"出球门神",country:"西班牙",reflex:89,reach:82,mind:86,number:22,avatar:"keepers/laya.png",kit:{primary:"#facc15",secondary:"#eab308",sleeveColor:"#facc15",trim:"#111827",shorts:"#facc15",socks:"#facc15",numberColor:"#111827",gloveBackColor:"#dc2626",gloveLatex:"#ffffff",gloveStrapColor:"#ffffff",chestMotif:"adidas_stripes"},appearance:{height:1.83,build:1.02,skin:"#dfa982",hair:"#1a1310",hairStyle:"textured",facialHair:"beard",bootColor:"#f8fafc",keeperPersona:"laya"}},{id:"k2",name:"奥这这",nick:"整活表情帝",country:"喀麦隆",reflex:88,reach:86,mind:76,number:24,avatar:"keepers/aozhezhe.png",kit:{primary:"#74c918",secondary:"#4d910c",sleeveColor:"#facc15",trim:"#111827",shorts:"#65a30d",socks:"#a3e635",numberColor:"#111827",gloveBackColor:"#0ea5e9",gloveLatex:"#f8fafc",gloveStrapColor:"#0284c7",chestMotif:"team_crown"},appearance:{height:1.9,build:1.05,skin:"#5c3522",hair:"#120e0c",hairStyle:"curly",facialHair:"goatee",bootColor:"#f97316",keeperPersona:"aozhezhe"}},{id:"k3",name:"雷克森",nick:"雷神之壁",country:"巴西",reflex:91,reach:94,mind:90,number:1,avatar:"keepers/leikesen.png",kit:{primary:"#1e293b",secondary:"#0f172a",sleeveColor:"#1e293b",trim:"#2dd4bf",shorts:"#0f172a",socks:"#111827",numberColor:"#5eead4",gloveBackColor:"#0f172a",gloveLatex:"#38bdf8",gloveStrapColor:"#0f172a",chestMotif:"lightning"},appearance:{height:1.93,build:1.1,skin:"#eab996",hair:"#c28230",hairStyle:"swept",facialHair:"beard",bootColor:"#18181b",keeperPersona:"leikesen"}},{id:"k4",name:"驼赫亚",nick:"神兽羊驼",country:"西班牙",reflex:96,reach:90,mind:81,number:1,avatar:"keepers/tuoheya.png",kit:{primary:"#facc15",secondary:"#ca8a04",sleeveColor:"#facc15",trim:"#78350f",shorts:"#eab308",socks:"#facc15",numberColor:"#451a03",gloveBackColor:"#4a3222",gloveLatex:"#5c3f2c",gloveStrapColor:"#362216",chestMotif:"plain"},appearance:{height:1.92,build:.96,skin:"#e8cfa6",hair:"#dec08e",hairStyle:"curly",facialHair:"goatee",bootColor:"#4a3222",keeperPersona:"tuoheya"}},{id:"k5",name:"丁内斯",nick:"点球心魔",country:"阿根廷",reflex:89,reach:92,mind:97,number:23,avatar:"keepers/dingneisi.png",kit:{primary:"#f97316",secondary:"#c2410c",sleeveColor:"#f97316",trim:"#111827",shorts:"#ea580c",socks:"#1f2937",numberColor:"#ffffff",gloveBackColor:"#fef3c7",gloveLatex:"#fffbeb",gloveStrapColor:"#111827",chestMotif:"v_collar"},appearance:{height:1.95,build:1.05,skin:"#ebbda0",hair:"#54341e",hairStyle:"swept",facialHair:"none",bootColor:"#f59e0b",keeperPersona:"dingneisi"}}],Wi=[{id:"p1",name:"魔人哈",nick:"冥想魔人",pos:"前锋",country:"挪威",power:97,accuracy:89,composure:92,foot:"L",number:9,runupStyle:"classic",avatar:"players/morenha.png",kit:{primary:"#60a5fa",secondary:"#3b82f6",sleeveColor:"#60a5fa",trim:"#e0f2fe",shorts:"#60a5fa",socks:"#60a5fa",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.95,build:1.12,skin:"#f3bfa4",hair:"#eab308",hairStyle:"swept",facialHair:"beard",bootColor:"#60a5fa",playerPersona:"morenha"}},{id:"p2",name:"帕不怕冷",nick:"冷面冰人",pos:"中场",country:"英格兰",power:84,accuracy:95,composure:98,foot:"L",number:20,runupStyle:"curved",avatar:"players/pabupaleng.png",kit:{primary:"#2563eb",secondary:"#1d4ed8",sleeveColor:"#2563eb",trim:"#bae6fd",shorts:"#1d4ed8",socks:"#2563eb",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.89,build:.92,skin:"#f2c6af",hair:"#e5b842",hairStyle:"textured",facialHair:"none",bootColor:"#f8fafc",playerPersona:"pabupaleng"}},{id:"p3",name:"萨小椒",nick:"爆辣边锋",pos:"边锋",country:"英格兰",power:85,accuracy:92,composure:91,foot:"L",number:7,runupStyle:"curved",avatar:"players/saxiaojiao.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#f8fafc",trim:"#ffffff",shorts:"#f8fafc",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"chili_crest"},appearance:{height:1.78,build:.98,skin:"#613a24",hair:"#16110e",hairStyle:"curly",facialHair:"goatee",bootColor:"#dc2626",playerPersona:"saxiaojiao"}},{id:"p4",name:"厄大帅",nick:"球场摄影师",pos:"中场",country:"挪威",power:82,accuracy:94,composure:90,foot:"L",number:8,runupStyle:"stutter",avatar:"players/edashuai.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#f8fafc",trim:"#ffffff",shorts:"#f8fafc",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"arsenal_clean"},appearance:{height:1.78,build:.95,skin:"#f1c2a5",hair:"#d4a24c",hairStyle:"swept",facialHair:"goatee",bootColor:"#1f2937",playerPersona:"edashuai"}},{id:"p5",name:"姆老汉",nick:"浓髯重炮",pos:"边锋",country:"喀麦隆",power:89,accuracy:89,composure:91,foot:"L",number:19,runupStyle:"stutter",avatar:"players/mulaohan.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#ffffff",shorts:"#dc2626",socks:"#f8fafc",numberColor:"#111827",chestMotif:"red_white_stripes"},appearance:{height:1.73,build:1.07,skin:"#7a4b30",hair:"#14100e",hairStyle:"buzz",facialHair:"beard",bootColor:"#18181b",playerPersona:"mulaohan"}},{id:"p6",name:"维小薯",nick:"天才薯片",pos:"中场",country:"德国",power:81,accuracy:93,composure:90,foot:"R",number:10,runupStyle:"curved",avatar:"players/weixiaoshu.png",kit:{primary:"#dc2626",secondary:"#991b1b",sleeveColor:"#18181b",trim:"#18181b",shorts:"#18181b",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.77,build:.93,skin:"#f3c5ab",hair:"#8c552f",hairStyle:"textured",facialHair:"none",bootColor:"#18181b",playerPersona:"weixiaoshu"}},{id:"p7",name:"谢花哨",nick:"花式魔术师",pos:"中场",country:"法国",power:84,accuracy:91,composure:86,foot:"R",number:18,runupStyle:"stutter",avatar:"players/xiehuashao.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#38bdf8",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.77,build:1.03,skin:"#e3af8c",hair:"#3d2516",hairStyle:"swept",facialHair:"beard",bootColor:"#18181b",playerPersona:"xiehuashao"}},{id:"p8",name:"加倒钩",nick:"凌空金童",pos:"边锋",country:"阿根廷",power:89,accuracy:86,composure:85,foot:"R",number:17,runupStyle:"classic",avatar:"players/jiadaogou.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.8,build:.95,skin:"#e4b18f",hair:"#f2e6c2",hairStyle:"textured",facialHair:"none",bootColor:"#18181b",playerPersona:"jiadaogou"}},{id:"p9",name:"穆闪电",nick:"超音速闪电",pos:"边锋",country:"乌克兰",power:92,accuracy:77,composure:78,foot:"R",number:10,runupStyle:"classic",avatar:"players/mushandian.png",kit:{primary:"#2563eb",secondary:"#1d4ed8",sleeveColor:"#2563eb",trim:"#facc15",shorts:"#1d4ed8",socks:"#2563eb",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.75,build:.95,skin:"#f2c4aa",hair:"#dfad4e",hairStyle:"swept",facialHair:"none",bootColor:"#18181b",playerPersona:"mushandian"}},{id:"p10",name:"马航母",nick:"重装航母",pos:"后卫",country:"英格兰",power:95,accuracy:84,composure:88,foot:"R",number:5,runupStyle:"classic",avatar:"players/mahangmu.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.94,build:1.11,skin:"#eec1a4",hair:"#2b1f18",hairStyle:"buzz",facialHair:"none",bootColor:"#18181b",playerPersona:"mahangmu"}},{id:"p11",name:"马屠夫",nick:"铁血硬汉",pos:"后卫",country:"阿根廷",power:90,accuracy:82,composure:92,foot:"L",number:6,runupStyle:"classic",avatar:"players/matufu.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#f8fafc",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.75,build:1.05,skin:"#dfa884",hair:"#2a1c14",hairStyle:"textured",facialHair:"stubble",bootColor:"#18181b",playerPersona:"matufu"}},{id:"p12",name:"里咕咕",nick:"白鸽舞王",pos:"前锋",country:"巴西",power:87,accuracy:84,composure:83,foot:"R",number:9,runupStyle:"stutter",avatar:"players/ligugu.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#cbd5e1",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.84,build:.99,skin:"#e5b493",hair:"#f1f5f9",hairStyle:"swept",facialHair:"none",bootColor:"#4a3222",playerPersona:"ligugu"}},{id:"p13",name:"加铁卫",nick:"铜墙大白牙",pos:"后卫",country:"巴西",power:93,accuracy:79,composure:86,foot:"L",number:6,runupStyle:"classic",avatar:"players/jatiewei.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#dc2626",trim:"#dc2626",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#dc2626",chestMotif:"brick_wall"},appearance:{height:1.9,build:1.09,skin:"#5a3420",hair:"#120d0a",hairStyle:"buzz",facialHair:"beard",bootColor:"#18181b",playerPersona:"jatiewei"}},{id:"p14",name:"安陀螺",nick:"圆规旋风",pos:"边锋",country:"巴西",power:83,accuracy:85,composure:84,foot:"L",number:21,runupStyle:"curved",avatar:"players/antuoluo.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#ffffff",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.74,build:.95,skin:"#e6b492",hair:"#2d1d13",hairStyle:"swept",facialHair:"beard",bootColor:"#f8fafc",playerPersona:"antuoluo"}},{id:"p15",name:"努角兽",nick:"牛角猛兽",pos:"前锋",country:"乌拉圭",power:96,accuracy:75,composure:80,foot:"R",number:9,runupStyle:"classic",avatar:"players/nujiaoshou.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.87,build:1.05,skin:"#dfa278",hair:"#24160e",hairStyle:"swept",facialHair:"goatee",bootColor:"#f8fafc",playerPersona:"nujiaoshou"}},{id:"p16",name:"杰克思考",nick:"思考人生",pos:"前锋",country:"塞内加尔",power:85,accuracy:78,composure:79,foot:"R",number:15,runupStyle:"stutter",avatar:"players/jiekexikao.png",kit:{primary:"#1d4ed8",secondary:"#1e40af",sleeveColor:"#1d4ed8",trim:"#60a5fa",shorts:"#1d4ed8",socks:"#1d4ed8",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.87,build:.98,skin:"#5e3722",hair:"#17120f",hairStyle:"curly",facialHair:"goatee",bootColor:"#18181b",playerPersona:"jiekexikao"}},{id:"p17",name:"斯翘臀",nick:"快乐小快灵",pos:"边锋",country:"英格兰",power:80,accuracy:83,composure:81,foot:"R",number:7,runupStyle:"curved",avatar:"players/siqiaotun.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#1d4ed8",shorts:"#1d4ed8",socks:"#f8fafc",numberColor:"#1d4ed8",chestMotif:"white_blue_trim"},appearance:{height:1.72,build:.98,skin:"#663c25",hair:"#16110e",hairStyle:"buzz",facialHair:"goatee",bootColor:"#18181b",playerPersona:"siqiaotun"}},{id:"p18",name:"维侦察",nick:"越位侦察机",pos:"前锋",country:"德国",power:86,accuracy:76,composure:78,foot:"R",number:16,runupStyle:"classic",avatar:"players/weizhencha.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#cbd5e1",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.8,build:.95,skin:"#f3bfa4",hair:"#dfad4e",hairStyle:"swept",facialHair:"none",bootColor:"#18181b",playerPersona:"weizhencha"}}];function Ll(n){return Math.round((n.power+n.accuracy+n.composure)/3)}function Dl(n){return Math.round((n.reflex+n.reach+n.mind)/3)}function Nl(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[i],e[i]=r}return e}function Ci(n,e,t){return Math.max(e,Math.min(t,n))}function se(n,e,t){return n+(e-n)*t}function Mt(n,e,t){const i=Ci((t-n)/Math.max(1e-4,e-n),0,1);return i*i*(3-2*i)}function Fc(n,e,t,i,r,s){n.flex=e,n.abduct=t,n.twist=i,n.knee=r,n.ankle=s}function Oc(n,e,t,i,r){n.flex=e,n.abduct=t,n.twist=i,n.elbow=r}const Us=new at,qr=new at,qm=new ki,ub=new k,hb=[-1,1],fb=[-.026,.026],db=[-.035,.045,.12];function zc(n,e){let t=1/0;for(const i of hb){const r=i>0?n.legL:n.legR;Us.makeRotationFromEuler(qm.set(n.pelvisRot.pitch,n.pelvisRot.yaw,-n.pelvisRot.roll,"XYZ")),Us.setPosition(0,.959,0),qr.makeRotationFromEuler(qm.set(-r.flex,i*r.twist,i*r.abduct,"ZXY")),qr.setPosition(i*.102*e,0,0),Us.multiply(qr),qr.makeRotationX(r.knee).setPosition(0,-.44,0),Us.multiply(qr),qr.makeRotationX(-r.ankle).setPosition(0,-.42,0),Us.multiply(qr);for(const s of fb)for(const a of db)t=Math.min(t,ub.set(s,-.099,a).applyMatrix4(Us).y)}return-t}function pb(n){const e=ma(),t=n.shooter.foot==="R"?1:-1,i=t>0?e.legR:e.legL,r=t>0?e.legL:e.legR,s=t>0?e.armR:e.armL,a=t>0?e.armL:e.armR,o=n.shooter.runupStyle==="curved"?1.2:1,l=n.shotStyle==="power",c=n.shotStyle==="panenka",h=n.shotStyle==="stutter",f=h||n.shooter.runupStyle==="stutter",d=n.mode==="runup"||n.mode==="follow",p=n.mode==="follow"?1:d?Ci(n.runupProgress,0,1):0,m=Mt(0,.12,p),_=Ci(p/.84,0,1),g=f?_-.065*Math.sin(_*Math.PI*2):_,u=Mt(0,1,g),v=1-u,y=-.23*t,S=11.07+(c?.346:l?.536:.492)*n.shooter.appearance.height/1.84,b=-1.25*t*o,T=-.66*t*o,x=14.45,M=12.85;let D=v*v*b+2*v*u*T+u*u*y,A=v*v*x+2*v*u*M+u*u*S;const C=2*v*(T-b)+2*u*(y-T),P=2*v*(M-x)+2*u*(S-M),N=Mt(.66,.84,p),R=Mt(.86,1,p);let U=Math.atan2(C,P);U<0&&(U+=Math.PI*2),U=se(U,Math.PI,N);const q=Math.sin(n.time*1.35),z=Math.sin(n.time*.72),G=Math.sin(n.time*.55+.4),O=u*Math.PI*4.2,X=Math.sin(O),J=m*(1-N),ae=h?Math.sin(Math.PI*Mt(.57,.73,p))*(1-N):0,j=c?.3:l?.48:.42,V=c?.28:.2,ie=c||l?.05:.22,ue=l?-.22:c?.14:.04,Te=n.overcharged?.05:l?.2:.14,fe=l?-.55:-.48,Ue=l?1.4:1.22,Qe=1-m;if(e.pelvisOffset.x=(z*.014+G*.006)*Qe,e.pelvisOffset.y=q*.01*Qe+ae*.05,e.pelvisOffset.z=Math.sin(n.time*.6)*.004*Qe,e.pelvisRot.yaw=se(-t*.03+X*t*.05*J,se(-t*.12,t*.1,R),N),e.pelvisRot.roll=t*.055*N+z*.012*Qe,e.pelvisRot.pitch=q*.012*Qe,e.spine.lean=se(.1+q*.012,.18,m),e.spine.lean=se(e.spine.lean,Te,R),e.spine.side=se(G*.02,t*.035,N),e.spine.twist=se(-X*t*.11*J+z*.03*Qe,se(t*.14,-t*.12,R),N),e.head.pitch=se(.06+Math.sin(n.time*.55)*.04*Qe,.22,N),e.head.yaw=-e.spine.twist*.55,e.head.roll=z*.02*Qe,Fc(i,se(se(-.05+X*.34,fe,N),j,R),se(.06,.05,N),se(.03,ie,R),se(se(.2+Math.max(0,-X)*.55*m,Ue,N),V,R),se(.05,ue,R)),Fc(r,se(.1-X*.34*m,.15,N),se(.06,.09,N),.025,se(.22+Math.max(0,X)*.55*m,.3,N),se(.08,.14,N)),Oc(s,se(.1-X*.28*J,-.22,N),se(.12,.28,N),.06,se(.4+m*.28,.62,N)),Oc(a,se(.14+X*.28*J,.22,N),se(.14,.7,N),-.08,se(.42+m*.25,.5,N)),n.mode==="follow"){const De=Math.max(0,n.postImpactTime),Ge=Mt(0,.18,De),Ne=Mt(.2,.82,De),We=Ge*(1-Ne),Ft=Mt(.16,.8,De);D+=t*.08*Ft,A-=(c?.28:l?.65:.48)*Ft,e.pelvisOffset.y+=Math.sin(Ft*Math.PI)*.025,e.pelvisRot.roll*=1-Ne,e.pelvisRot.yaw=se(e.pelvisRot.yaw,0,Ne),e.spine.lean=se(Te,.1,Ne),e.spine.side*=1-Ne,e.spine.twist*=1-Ne,e.head.pitch=se(e.head.pitch,-.04,Mt(.08,.4,De)),e.head.yaw*=1-Ne,i.flex=se(j+We*(c?.26:.62),.1,Ne),i.knee=se(V+We*.24,.24,Ne),i.twist=se(ie,.03,Ne),i.ankle=se(ue,.1,Ne),r.flex=se(.17-We*.18,-.04,Ne),r.knee=se(.34,.23,Ne),r.ankle=se(.17,.09,Ne),s.flex=se(s.flex,.12,Ne),s.abduct=se(s.abduct,.16,Ne),s.elbow=se(s.elbow,.42,Ne),a.flex=se(a.flex,.14,Ne),a.abduct=se(a.abduct,.18,Ne),a.elbow=se(a.elbow,.44,Ne);const ut=n.outcome?Mt(0,.45,n.outcomeTime??0)*Ne:0;if(ut>0){const Rt=n.outcome==="goal",gt=Math.sin((n.outcomeTime??0)*7)*.07;e.spine.lean=se(e.spine.lean,Rt?-.07:.3,ut),e.head.pitch=se(e.head.pitch,Rt?-.15:.35,ut),s.flex=se(s.flex,Rt?.3+gt:.18,ut),a.flex=se(a.flex,Rt?.3-gt:.18,ut),s.abduct=se(s.abduct,Rt?2.35:.08,ut),a.abduct=se(a.abduct,Rt?2.35:.08,ut),s.elbow=se(s.elbow,Rt?.55:.22,ut),a.elbow=se(a.elbow,Rt?.55:.22,ut)}}return e.pelvisOffset.y+=zc(e,n.shooter.appearance.build),{pos:new k(D,0,A),yaw:U,pose:e,stepIndex:Math.min(6,Math.floor(u*6))}}function mb(n,e,t){const i=Ci(Math.abs(e.shuffleSpeed)/2.2,0,1)*t,r=Math.sin(e.shufflePhase),s=Ci(Math.abs(e.preDiveX)+Math.abs(e.preDiveY),0,1)*t;n.pelvisOffset.y=Math.sin(e.time*3.8)*.003*t,n.pelvisRot.roll=(e.preDiveX*.035-Ci(e.shuffleSpeed*.025,-.06,.06))*t,n.spine.lean=.34+s*.04,n.spine.side=e.preDiveX*.04*t,n.head.pitch=-.16,n.head.yaw=Ci(-e.xPos*.07,-.2,.2)*t,Fc(n.legL,.34+Math.max(0,r)*i*.13,.22+r*i*.07,.04,.67+Math.max(0,r)*i*.22+s*.06,.28),Fc(n.legR,.34+Math.max(0,-r)*i*.13,.22-r*i*.07,.04,.67+Math.max(0,-r)*i*.22+s*.06,.28),n.pelvisOffset.y+=zc(n,e.keeper.appearance.build);const a=e.preDiveY*.08*t;Oc(n.armL,.58+a,.4,-.12,1.02),Oc(n.armR,.58+a,.4,-.12,1.02)}function gb(n){const e=ma(),t=n.mode==="ready"?0:Math.max(0,n.diveTime),i=Mt(0,.18,t);mb(e,n,1-i);let r=n.mode==="ready"?n.xPos:n.diveStartX,s=.14,a=!1,o=1;if(n.mode==="diving"){const c=Math.sign(n.diveDirX),h=Math.sign(n.diveDirY),f=n.keeper.appearance.height/1.84,d=Ci(.9+(n.keeper.reach-75)*.006,.8,1.1)*(n.explosiveBoost?1.07:1),p=Math.max(0,t-.1),m=Math.sin(Math.PI*Mt(0,.18,t))*.035;if(e.pelvisOffset.y-=m,c!==0){const _=(h>0?4.1:h<0?3.85:4.35)*d,g=(h>0?3:h<0?.35:1.7)*d,u=.89*f,v=.24*f,y=(g+Math.sqrt(g*g+19.62*(u-v)))/9.81,S=Math.min(p,y),b=Math.max(0,p-y),T=_*S+_*.35*(1-Math.exp(-b*5))/5,x=Math.max(.15,3.5-c*n.diveStartX),M=x*.8,D=T<=M?T:M+x*.2*(1-Math.exp(-(T-M)/(x*.2)));r+=c*D*Mt(0,.12,p),s+=.24*Mt(0,.4,p);const A=Mt(.08,.3,t),C=Mt(y-.025,y+.18,p),P=Mt(y+.38,y+1.2,p);o=P;const N=Math.max(v,u+g*S-4.905*S*S);e.pelvisOffset.y=se(e.pelvisOffset.y,N/f-.959,i),e.pelvisOffset.y=se(e.pelvisOffset.y,-.067,P),e.pelvisRot.roll=se(e.pelvisRot.roll,c*se(h>0?1.26:1.42,1.38,C),A)*(1-P),e.pelvisRot.yaw=-c*.14*C*(1-P),e.spine.lean=se(e.spine.lean,se(-.06,.24,C),A),e.spine.lean=se(e.spine.lean,.3,P),e.head.roll=-c*.08*A*(1-P);const R=c>0?e.armL:e.armR,U=c>0?e.armR:e.armL,q=c>0?e.legL:e.legR,z=c>0?e.legR:e.legL,G=Ci((n.ballPos.y-N)*.12,-.12,.15);R.flex=se(R.flex,se(.22,.65,C),A),R.abduct=se(R.abduct,se(2.64+G,.9,C),A),R.elbow=se(R.elbow,se(.12,1.12,C),A),U.flex=se(U.flex,se(.32,.8,C),A),U.abduct=se(U.abduct,se(2.4+G,.55,C),A),U.elbow=se(U.elbow,se(.2,1.2,C),A),q.flex=se(q.flex,se(-.08,.42,C),A),q.knee=se(q.knee,se(.16,.9,C),A),q.ankle=se(q.ankle,-.16,A*(1-C)),z.flex=se(z.flex,.48,A),z.knee=se(z.knee,.95,A);const O=Math.sin(P*Math.PI);q.flex=se(q.flex,.34,P)+O*.18,q.knee=se(q.knee,.67,P)+O*.2,z.flex=se(z.flex,.34,P),z.knee=se(z.knee,.67,P),q.ankle=se(q.ankle,.28,P),R.flex=se(R.flex,.58,P),R.abduct=se(R.abduct,.4,P),R.elbow=se(R.elbow,1.02,P),U.flex=se(U.flex,.58,P),U.abduct=se(U.abduct,.4,P),U.elbow=se(U.elbow,1.02,P),e.pelvisOffset.y=se(e.pelvisOffset.y,zc(e,n.keeper.appearance.build),P),a=p>=y&&p<y+.035}else if(h>0){const _=3.15*d,g=2*_/9.81,u=Math.min(p,g),v=Math.max(0,_*u-4.905*u*u),y=Mt(.05,.24,p)*(1-Mt(g-.14,g+.25,p)),S=Math.sin(Math.PI*Mt(g,g+.32,p));o=Mt(g,g+.32,p),e.pelvisOffset.y+=v/f-S*.08,e.spine.lean=se(e.spine.lean,.02,y),e.armL.abduct=e.armR.abduct=se(.4,2.7,y),e.armL.elbow=e.armR.elbow=se(1.02,.14,y),e.legL.knee+=S*.22-y*.35,e.legR.knee+=S*.22-y*.35,a=p>=g&&p<g+.035}else{const _=Mt(0,.24,t)*(1-Mt(.65,1.3,t));if(o=Mt(.65,1.3,t),h<0)e.pelvisOffset.y-=_*.28,e.legL.knee=se(e.legL.knee,1.4,_),e.legR.abduct=se(e.legR.abduct,.65,_),e.legR.knee=se(e.legR.knee,.4,_),e.armL.abduct=e.armR.abduct=se(.4,.85,_);else{const g=Ci(.7+(n.ballPos.y-1.15)*.55,.35,1.65);e.armL.flex=e.armR.flex=se(.58,g,_)}e.armL.elbow=e.armR.elbow=se(1.02,.35,_),s+=_*.2,e.pelvisOffset.y=zc(e,n.keeper.appearance.build),a=h<0&&t>=.24&&t<.275}}const l=n.outcome?Mt(0,.45,n.outcomeTime??0)*o:0;if(l>0){const c=n.outcome==="goal",h=!c&&n.keeperSaved,f=Math.sin((n.outcomeTime??0)*8)*.08;e.spine.lean=se(e.spine.lean,c?.32:-.04,l),e.head.pitch=se(e.head.pitch,c?.28:-.12,l),e.armL.flex=se(e.armL.flex,h?.9+f:.14,l),e.armR.flex=se(e.armR.flex,h?.9-f:.14,l),e.armL.abduct=se(e.armL.abduct,h?1.45:.12,l),e.armR.abduct=se(e.armR.abduct,h?1.45:.12,l),e.armL.elbow=se(e.armL.elbow,h?1.2:.28,l),e.armR.elbow=se(e.armR.elbow,h?1.2:.28,l)}return{pos:new k(r,0,s),yaw:0,pose:e,justLanded:a}}const Fs=7.32,gn=Fs/2,_t=2.44,Ei=.06,jr=.95,Zr=2.15,St=.11,Zn=11;function Jf(n){const e=Math.max(0,Math.min(1,n/_t));return-(Zr+(jr-Zr)*e)}function Ym(n,e,t,i){const r=t.x-e.x,s=t.y-e.y,a=t.z-e.z,o=r*r+s*s+a*a;if(o<1e-8)return i.copy(e);const l=Math.max(0,Math.min(1,((n.x-e.x)*r+(n.y-e.y)*s+(n.z-e.z)*a)/o));return i.set(e.x+r*l,e.y+s*l,e.z+a*l)}function gh(n,e,t){const i=(n+1)*(e+1),r=new Float32Array(i*3),s=new Float32Array(i*3),a=new Float32Array(i*3),o=new Uint8Array(i);for(let p=0;p<=e;p++){const m=p/e;for(let _=0;_<=n;_++){const g=_/n,u=p*(n+1)+_,[v,y,S,b]=t(g,m);r[u*3]=v,r[u*3+1]=y,r[u*3+2]=S,s[u*3]=v,s[u*3+1]=y,s[u*3+2]=S,o[u]=b?1:0}}const l=[];for(let p=0;p<=e;p++)for(let m=0;m<=n;m++){const _=p*(n+1)+m;m<n&&l.push(_,_+1),p<e&&l.push(_,_+n+1)}const c=new Uint16Array(l),h=new Float32Array(c.length*3),f=new zt;f.setAttribute("position",new Un(h,3));const d={cols:n,rows:e,rest:r,pos:s,vel:a,pinned:o,lineGeo:f,linePositions:h,edgePairs:c};return Qf(d),d}function Qf(n){const{edgePairs:e,pos:t,linePositions:i,lineGeo:r}=n;for(let s=0;s<e.length;s++){const a=e[s];i[s*3]=t[a*3],i[s*3+1]=t[a*3+1],i[s*3+2]=t[a*3+2]}r.getAttribute("position").needsUpdate=!0}class vb{constructor(){this.group=new tt,this.panels=[],this.postSegments=[{a:new k(-gn,0,0),b:new k(-gn,_t,0),radius:Ei},{a:new k(gn,0,0),b:new k(gn,_t,0),radius:Ei},{a:new k(-gn,_t,0),b:new k(gn,_t,0),radius:Ei}];const e=new Ee({color:"#f8fafc",roughness:.24,metalness:.25}),t=new Ee({color:"#1e293b",roughness:.5,metalness:.55}),i=new lt(Ei,Ei,_t,20);for(const c of[-gn,gn]){const h=new W(i,e);h.position.set(c,_t/2,0),h.castShadow=!0,h.receiveShadow=!0,this.group.add(h);const f=new W(new Ce(Ei,16,12),e);f.position.set(c,_t,0),f.castShadow=!0,this.group.add(f);const d=new W(new lt(.024,.024,jr,10),t);d.rotation.x=Math.PI/2,d.position.set(c,_t-.02,-jr/2),this.group.add(d);const p=Math.hypot(_t,Zr-jr),m=new W(new lt(.024,.024,p,10),t),_=Math.atan2(Zr-jr,_t);m.position.set(c,_t/2,-3.0999999999999996/2),m.rotation.x=_,this.group.add(m);const g=new W(new lt(.026,.026,Zr,10),t);g.rotation.x=Math.PI/2,g.position.set(c,.02,-Zr/2),this.group.add(g)}const r=new lt(Ei,Ei,Fs,20);r.rotateZ(Math.PI/2);const s=new W(r,e);s.position.set(0,_t,0),s.castShadow=!0,s.receiveShadow=!0,this.group.add(s);const a=new W(new lt(.028,.028,Fs,12),t);a.rotation.z=Math.PI/2,a.position.set(0,.02,-Zr),this.group.add(a);const o=new W(new lt(.016,.016,Fs,10),t);o.rotation.z=Math.PI/2,o.position.set(0,_t-.02,-jr),this.group.add(o);const l=new B_({color:"#e2e8f0",transparent:!0,opacity:.44});this.panels.push(gh(44,16,(c,h)=>{const f=(c-.5)*Fs,d=h*_t,p=Math.sin(c*Math.PI)*Math.sin(h*Math.PI)*-.08,m=Jf(d)+p;return[f,d,m,c===0||c===1||h===0||h===1]})),this.panels.push(gh(44,7,(c,h)=>{const f=(c-.5)*Fs,d=-h*jr,p=Math.sin(c*Math.PI)*Math.sin(h*Math.PI)*-.05,m=_t+p;return[f,m,d,c===0||c===1||h===0||h===1]}));for(const c of[-1,1])this.panels.push(gh(14,16,(h,f)=>{const d=f*_t,p=Jf(d),m=h*p,_=Math.sin(h*Math.PI)*Math.sin(f*Math.PI)*-c*.04;return[c*gn+_,d,m,h===0||h===1||f===0||f===1]}));for(const c of this.panels)this.group.add(new $S(c.lineGeo,l))}resetNet(){for(const e of this.panels)e.pos.set(e.rest),e.vel.fill(0),Qf(e)}applyBallImpulse(e,t,i=.72){const r=i*i;for(const s of this.panels){const a=s.pinned.length;for(let o=0;o<a;o++){if(s.pinned[o])continue;const l=s.pos[o*3]-e.x,c=s.pos[o*3+1]-e.y,h=s.pos[o*3+2]-e.z,f=l*l+c*c+h*h;if(f<r){const d=Math.pow(1-Math.sqrt(f)/i,1.5);s.vel[o*3]=s.vel[o*3]+t.x*d*.55,s.vel[o*3+1]=s.vel[o*3+1]+t.y*d*.55,s.vel[o*3+2]=s.vel[o*3+2]+t.z*d*.55}}}}step(e){const t=Math.min(.033,e),i=68,r=26,s=Math.exp(-5.4*t);for(const a of this.panels){const{cols:o,rows:l,pos:c,rest:h,vel:f,pinned:d}=a,p=o+1;let m=!1;for(let _=1;_<l;_++)for(let g=1;g<o;g++){const u=_*p+g;if(d[u])continue;const v=u*3,y=c[v],S=c[v+1],b=c[v+2];let T=(h[v]-y)*i,x=(h[v+1]-S)*i,M=(h[v+2]-b)*i;const D=u-1,A=u+1,C=u-p,P=u+p,N=(c[D*3]-h[D*3]+c[A*3]-h[A*3]+c[C*3]-h[C*3]+c[P*3]-h[P*3])*.25-(y-h[v]),R=(c[D*3+1]-h[D*3+1]+c[A*3+1]-h[A*3+1]+c[C*3+1]-h[C*3+1]+c[P*3+1]-h[P*3+1])*.25-(S-h[v+1]),U=(c[D*3+2]-h[D*3+2]+c[A*3+2]-h[A*3+2]+c[C*3+2]-h[C*3+2]+c[P*3+2]-h[P*3+2])*.25-(b-h[v+2]);T+=N*r*4,x+=R*r*4,M+=U*r*4;const q=(f[v]+T*t)*s,z=(f[v+1]+x*t)*s,G=(f[v+2]+M*t)*s;f[v]=q,f[v+1]=z,f[v+2]=G,c[v]=y+q*t,c[v+1]=Math.max(.01,S+z*t),c[v+2]=b+G*t,Math.abs(q)+Math.abs(z)+Math.abs(G)>.002&&(m=!0)}m&&Qf(a)}}}function _b(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const i=t.getContext("2d"),r=c=>(c+38)/76*1024,s=c=>(c+12)/64*1024;i.fillStyle="#1c6b36",i.fillRect(0,0,1024,1024);const a=5.5;for(let c=-12,h=0;c<52;c+=a,h++){const f=s(c),d=s(c+a);i.fillStyle=h%2===0?"rgba(150, 235, 130, 0.085)":"rgba(8, 35, 16, 0.085)",i.fillRect(0,f,1024,d-f)}for(let c=-38,h=0;c<38;c+=6.1,h++)h%2===0&&(i.fillStyle="rgba(255, 255, 255, 0.025)",i.fillRect(r(c),0,6.1/76*1024,1024));for(let c=0;c<24e3;c++){const h=Math.random()*1024,f=Math.random()*1024;i.fillStyle=Math.random()<.5?"rgba(10,32,14,0.13)":"rgba(180,250,150,0.08)",i.fillRect(h,f,1.5,2.2)}for(let c=0;c<85;c++){const h=(Math.random()-.5)*4.5,f=Math.random()*1.6-.2;i.fillStyle="rgba(68, 52, 32, 0.11)",i.beginPath(),i.ellipse(r(h),s(f),4+Math.random()*8,2+Math.random()*4,0,0,Math.PI*2),i.fill()}for(let c=0;c<45;c++){const h=(Math.random()-.5)*1.4,f=Zn+(Math.random()-.5)*1.4;i.fillStyle="rgba(68, 52, 32, 0.1)",i.beginPath(),i.ellipse(r(h),s(f),3+Math.random()*5,2+Math.random()*4,0,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(248, 250, 252, 0.9)",i.lineWidth=.13/76*1024,i.lineJoin="round",i.lineCap="round";const o=34;i.beginPath(),i.moveTo(r(-o),s(0)),i.lineTo(r(o),s(0)),i.moveTo(r(-o),s(0)),i.lineTo(r(-o),s(52)),i.moveTo(r(o),s(0)),i.lineTo(r(o),s(52)),i.stroke(),i.beginPath(),i.moveTo(r(-9.16),s(0)),i.lineTo(r(-9.16),s(5.5)),i.lineTo(r(9.16),s(5.5)),i.lineTo(r(9.16),s(0)),i.stroke(),i.beginPath(),i.moveTo(r(-20.16),s(0)),i.lineTo(r(-20.16),s(16.5)),i.lineTo(r(20.16),s(16.5)),i.lineTo(r(20.16),s(0)),i.stroke(),i.save(),i.beginPath(),i.rect(0,s(16.5),1024,1024-s(16.5)),i.clip(),i.beginPath(),i.ellipse(r(0),s(Zn),9.15/76*1024,9.15/64*1024,0,0,Math.PI*2),i.stroke(),i.restore(),i.fillStyle="rgba(255, 255, 255, 0.96)",i.beginPath(),i.ellipse(r(0),s(Zn),.14/76*1024,.14/64*1024,0,0,Math.PI*2),i.fill();const l=new ya(t);return l.colorSpace=en,l.anisotropy=8,l}function xb(){const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#f8fafc",e.fillRect(0,0,512,256),e.fillStyle="rgba(15, 23, 42, 0.04)";for(let s=0;s<256;s+=4)for(let a=s%8===0?0:2;a<512;a+=4)e.fillRect(a,s,1.5,1.5);const t=(s,a,o,l)=>{e.save(),e.translate(s,a),e.rotate(l),e.fillStyle="#0f172a",e.beginPath();for(let c=0;c<5;c++){const h=c*Math.PI*2/5-Math.PI/2,f=Math.cos(h)*o,d=Math.sin(h)*o;c===0?e.moveTo(f,d):e.lineTo(f,d)}e.closePath(),e.fill(),e.strokeStyle="#2563eb",e.lineWidth=3,e.stroke(),e.restore()},i=[[64,72,28],[192,68,28],[320,72,28],[448,68,28],[128,184,28],[256,188,28],[384,184,28],[0,188,26],[512,188,26],[256,18,24],[256,240,24]];for(const[s,a,o]of i)t(s,a,o,s*.02);e.strokeStyle="rgba(30, 41, 59, 0.35)",e.lineWidth=2;for(let s=0;s<i.length;s++)for(let a=s+1;a<i.length;a++)Math.hypot(i[s][0]-i[a][0],i[s][1]-i[a][1])<155&&(e.beginPath(),e.moveTo(i[s][0],i[s][1]),e.lineTo(i[a][0],i[a][1]),e.stroke());const r=new ya(n);return r.colorSpace=en,r.anisotropy=4,r}function yb(){const n=document.createElement("canvas");n.width=1024,n.height=64;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,1024,0);t.addColorStop(0,"#08142c"),t.addColorStop(.5,"#0f2854"),t.addColorStop(1,"#08142c"),e.fillStyle=t,e.fillRect(0,0,1024,64),e.fillStyle="#38bdf8",e.fillRect(0,0,1024,4),e.fillStyle="#10b981",e.fillRect(0,60,1024,4),e.font='800 28px system-ui, -apple-system, "PingFang SC", sans-serif',e.fillStyle="#f8fafc",e.textBaseline="middle";const i="巅峰点球大战  ·  绿茵冠军之夜  ·  为每一次扑救喝彩  ·  ";e.fillText(i+i,24,33);const r=new ya(n);return r.colorSpace=en,r.wrapS=Tc,r.repeat.set(3,1),r}function Sb(){const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(255, 252, 240, 0.95)"),t.addColorStop(.25,"rgba(220, 238, 255, 0.42)"),t.addColorStop(.6,"rgba(140, 190, 255, 0.1)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new ya(n);return i.colorSpace=en,i}function Mb(){const n=[[-.36,.17,.11],[-.1,.21,.13],[.1,.23,.13],[.16,.08,.08],[.21,.075,.075],[.27,.105,.105],[.36,.102,.105],[.42,.03,.03]],e=10,t=n.length,i=e+1,r=new Float32Array(t*i*3),s=[];for(let o=0;o<t;o++){const[l,c,h]=n[o];for(let f=0;f<=e;f++){const d=f/e*Math.PI*2,p=(o*i+f)*3;r[p]=Math.cos(d)*c,r[p+1]=l,r[p+2]=Math.sin(d)*h}}for(let o=0;o<t-1;o++)for(let l=0;l<e;l++){const c=o*i+l,h=c+1,f=(o+1)*i+l,d=f+1;s.push(c,h,d,c,d,f)}const a=new zt;return a.setAttribute("position",new Un(r,3)),a.setIndex(s),a.computeVertexNormals(),a}class wb{constructor(){this.scene=new I_,this.goal=new vb,this.crowdMembers=[],this.dummy=new Nt,this.crowdExcitement=0,this.flashTimer=0,this.particles=[],this.scene.background=new Fe("#060b16"),this.scene.fog=new sp("#081122",.0155);const e=new Y_("#dbeafe","#143d22",.85);this.scene.add(e);const t=new ro("#fffaf0",2.05);t.position.set(14,26,22),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=4,t.shadow.camera.far=56,t.shadow.camera.left=-12,t.shadow.camera.right=12,t.shadow.camera.top=12,t.shadow.camera.bottom=-12,t.shadow.bias=-35e-5,t.target.position.set(0,.5,5.5),this.scene.add(t),this.scene.add(t.target);const i=new ro("#93c5fd",.78);i.position.set(-16,22,-18),this.scene.add(i);const r=new ro("#fde68a",.36);r.position.set(-18,16,18),this.scene.add(r);const s=new Tr(76,64);s.rotateX(-Math.PI/2);const a=new Ee({map:_b(),roughness:.86,metalness:.02}),o=new W(s,a);o.position.set(0,0,20),o.receiveShadow=!0,this.scene.add(o);const l=new Tr(160,150);l.rotateX(-Math.PI/2);const c=new W(l,new Ee({color:"#0c1420",roughness:.95}));c.position.set(0,-.02,16),this.scene.add(c),this.scene.add(this.goal.group),this.ledTexture=yb();const h=new Ee({map:this.ledTexture,emissive:new Fe("#1e40af"),emissiveMap:this.ledTexture,emissiveIntensity:.85,roughness:.35}),f=new W(new it(56,.95,.22),h);f.position.set(0,.48,-5.6),f.castShadow=!0,this.scene.add(f);for(const D of[-1,1]){const A=new W(new it(.22,.95,42),h);A.position.set(D*28,.48,15.5),this.scene.add(A)}this.buildStadiumArchitecture();const d=Mb(),p=new iM({color:"#ffffff"}),m=2400;this.crowdMesh=new om(d,p,m),this.crowdMesh.instanceMatrix.setUsage(O0);const _=[new Fe("#162c56"),new Fe("#1d3b72"),new Fe("#1e293b"),new Fe("#273449"),new Fe("#4c2430"),new Fe("#5c441c"),new Fe("#334155"),new Fe("#475569")];let g=0;for(let D=0;D<18&&g<m;D++){const A=-13.2-D*1.02,C=1.15+D*.56+(D>=9?1.25:0),P=96;for(let N=0;N<P&&g<m;N++){if(Math.random()<.07)continue;const R=(N/(P-1)-.5)*64+(Math.random()-.5)*.24;this.crowdMembers.push({x:R,y:C,z:A,yaw:Math.atan2(-R,-A)*.35,phase:Math.random()*Math.PI*2,scale:.92+Math.random()*.22});const U=Math.random()<.45?R<0?_[1]:_[5]:_[Math.floor(Math.random()*_.length)];this.crowdMesh.setColorAt(g,U),g++}}for(const D of[-1,1])for(let A=0;A<12&&g<m;A++){const C=D*(31.5+A*.95),P=1.2+A*.56;for(let N=0;N<34&&g<m;N++){if(Math.random()<.12)continue;const R=-6+N*1.15;this.crowdMembers.push({x:C,y:P,z:R,yaw:-D*Math.PI*.5,phase:Math.random()*Math.PI*2,scale:.9+Math.random()*.22}),this.crowdMesh.setColorAt(g,_[Math.floor(Math.random()*_.length)]),g++}}this.crowdMesh.count=this.crowdMembers.length,this.crowdMesh.instanceColor&&(this.crowdMesh.instanceColor.needsUpdate=!0),this.scene.add(this.crowdMesh);const u=80;this.flashPositions=new Float32Array(u*3),this.randomizeFlashes();const v=new zt;v.setAttribute("position",new Un(this.flashPositions,3));const y=new G_({color:"#ffffff",size:.65,transparent:!0,opacity:0,blending:wc,depthWrite:!1});this.flashPoints=new KS(v,y),this.scene.add(this.flashPoints),this.updateCrowd(0,0);const S=new Ce(St,28,22),b=new Ee({map:xb(),roughness:.34,metalness:.06});this.ballMesh=new W(S,b),this.ballMesh.castShadow=!0,this.ballMesh.receiveShadow=!0,this.ballMesh.position.set(0,St,Zn),this.scene.add(this.ballMesh),this.aimReticle=this.buildAimReticle(),this.aimReticle.visible=!1,this.scene.add(this.aimReticle);const T=new it(.028,.028,.028),x=new Ri({color:"#ffffff"}),M=110;this.turfInstanced=new om(T,x,M),this.turfInstanced.instanceMatrix.setUsage(O0);for(let D=0;D<M;D++)this.particles.push({active:!1,pos:new k(0,-10,0),vel:new k,life:0,maxLife:1,isChalk:!1}),this.turfInstanced.setColorAt(D,new Fe("#2e7d32")),this.dummy.position.set(0,-10,0),this.dummy.scale.setScalar(.001),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(D,this.dummy.matrix);this.scene.add(this.turfInstanced)}buildStadiumArchitecture(){const e=new Ee({color:"#0f172a",roughness:.88}),t=new Ee({color:"#162033",roughness:.84}),i=new Ee({map:this.ledTexture,emissive:new Fe("#1e40af"),emissiveMap:this.ledTexture,emissiveIntensity:.68,roughness:.4}),r=new Ee({color:"#0b1120",roughness:.65,metalness:.35});for(let _=0;_<18;_++){const g=-13.35-_*1.02,u=.55+_*.56+(_>=9?1.25:0),v=new W(new it(68,.72,1.12),_%2===0?e:t);v.position.set(0,u,g),this.scene.add(v)}const s=new W(new it(72,16,1.5),e);s.position.set(0,8.2,-32.4),this.scene.add(s);const a=new W(new it(68,.72,.45),i);a.position.set(0,6.45,-21.9),this.scene.add(a);for(const _ of[-1,1]){const g=new W(new it(12,10,52),e);g.position.set(_*38.5,3.6,12),g.rotation.z=-_*.42,this.scene.add(g)}const o=new W(new it(76,.65,14),r);o.position.set(0,14.9,-26.5),o.rotation.x=.08,this.scene.add(o);const l=new W(new it(76,.16,.25),new Ri({color:"#60a5fa"}));l.position.set(0,14.5,-19.6),this.scene.add(l);const c=Sb(),h=new Ee({color:"#334155",metalness:.6,roughness:.4}),f=new Ri({color:"#fffef5"});for(const[_,g,u]of[[-18.5,14.6,-24.5],[18.5,14.6,-24.5],[-31,22,28],[31,22,28]]){const v=new W(new lt(.28,.46,g,10),h);v.position.set(_,g*.5,u),this.scene.add(v);const y=new W(new it(3.8,1.65,.55),f);y.position.set(_,g+.55,u),y.lookAt(0,1,4),this.scene.add(y);const S=new VS(new F_({map:c,color:"#fff8e7",transparent:!0,opacity:.9,blending:wc,depthWrite:!1}));S.position.set(_,g+.55,u),S.scale.set(14.5,14.5,1),this.scene.add(S)}const d=new lt(.018,.018,1.5,8),p=new Ee({color:"#f8fafc"}),m=new Ee({color:"#f59e0b",side:Rn});for(const _ of[-34,34]){const g=new W(d,p);g.position.set(_,.75,0),this.scene.add(g);const u=new W(new Tr(.4,.28),m);u.position.set(_+(_<0?.2:-.2),1.35,0),this.scene.add(u)}}buildAimReticle(){const e=new tt,t=new Ri({color:"#38bdf8",transparent:!0,opacity:.9,side:Rn,depthTest:!1}),i=new W(new su(.19,.235,32),t);e.add(i);const r=new W(new lp(.045,16),new Ri({color:"#f8fafc",transparent:!0,opacity:.95,side:Rn,depthTest:!1}));e.add(r);for(let s=0;s<4;s++){const a=new W(new Tr(.09,.025),t),o=s*Math.PI/2;a.position.set(Math.cos(o)*.28,Math.sin(o)*.28,0),a.rotation.z=o,e.add(a)}return e}setAimReticle(e,t,i,r="#38bdf8",s=1){if(this.aimReticle.visible=e,!e)return;this.aimReticle.position.set(t,i,.04),this.aimReticle.scale.setScalar(s),this.aimReticle.children[0].material.color.set(r)}triggerCrowdExcitement(e=1){this.crowdExcitement=Math.max(this.crowdExcitement,e)}spawnTurfBurst(e,t,i=.25,r=1){let s=0;for(let a=0;a<this.particles.length&&s<t;a++){const o=this.particles[a];if(o.active)continue;o.active=!0,o.pos.copy(e),o.pos.y=Math.max(.02,e.y);const l=Math.random()*Math.PI*2,c=(.7+Math.random()*2.1)*r;o.vel.set(Math.cos(l)*c,(1.2+Math.random()*2.4)*r,Math.sin(l)*c),o.maxLife=.42+Math.random()*.35,o.life=o.maxLife,o.isChalk=Math.random()<i,this.turfInstanced.setColorAt(a,new Fe(o.isChalk?"#f1f5f9":"#22632b")),s++}this.turfInstanced.instanceColor&&(this.turfInstanced.instanceColor.needsUpdate=!0)}randomizeFlashes(){for(let e=0;e<this.flashPositions.length/3;e++){const t=this.crowdMembers[Math.floor(Math.random()*Math.max(1,this.crowdMembers.length))];t&&(this.flashPositions[e*3]=t.x,this.flashPositions[e*3+1]=t.y+.4,this.flashPositions[e*3+2]=t.z+.2)}}updateCrowd(e,t){this.crowdExcitement=Math.max(0,this.crowdExcitement-t*.42);const i=3.2+this.crowdExcitement*7.5,r=.035+this.crowdExcitement*.22;for(let s=0;s<this.crowdMembers.length;s++){const a=this.crowdMembers[s],o=Math.max(0,Math.sin(e*i+a.phase))*r;this.dummy.position.set(a.x,a.y+o,a.z),this.dummy.rotation.set(0,a.yaw,Math.sin(e*2.5+a.phase)*(.04+this.crowdExcitement*.12)),this.dummy.scale.set(a.scale,a.scale*(1+o*.25),a.scale),this.dummy.updateMatrix(),this.crowdMesh.setMatrixAt(s,this.dummy.matrix)}this.crowdMesh.instanceMatrix.needsUpdate=!0,this.flashTimer+=t,this.flashTimer>(this.crowdExcitement>.2?.07:.22)?(this.flashTimer=0,this.randomizeFlashes(),this.flashPoints.geometry.getAttribute("position").needsUpdate=!0,this.flashPoints.material.opacity=this.crowdExcitement>.2?.92:.28):this.flashPoints.material.opacity*=Math.exp(-8*t)}updateParticles(e){let t=!1;for(let i=0;i<this.particles.length;i++){const r=this.particles[i];if(!r.active)continue;if(t=!0,r.life-=e,r.life<=0){r.active=!1,this.dummy.position.set(0,-10,0),this.dummy.scale.setScalar(.001),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(i,this.dummy.matrix);continue}r.vel.y-=9.81*e,r.pos.addScaledVector(r.vel,e),r.pos.y<.015&&(r.pos.y=.015,r.vel.y*=-.3,r.vel.x*=.6,r.vel.z*=.6);const s=Math.max(.15,r.life/r.maxLife);this.dummy.position.copy(r.pos),this.dummy.rotation.set(r.life*8,r.life*6,0),this.dummy.scale.setScalar(s),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(i,this.dummy.matrix)}t&&(this.turfInstanced.instanceMatrix.needsUpdate=!0)}step(e,t){this.ledTexture.offset.x=e*.045%1,this.goal.step(t),this.updateCrowd(e,t),this.updateParticles(t)}getGoalBounds(){return{halfW:gn,height:_t}}}const $m=1.45,Tb=.35;function Ut(n,e,t){return Math.max(e,Math.min(n,t))}function Km(n){return{pelvisOffset:{...n.pelvisOffset},pelvisRot:{...n.pelvisRot},spine:{...n.spine},head:{...n.head},armL:{...n.armL},armR:{...n.armR},legL:{...n.legL},legR:{...n.legR}}}function gr(n){let e=0,t=0,i=0,r=0;for(const s of n)s.side==="user"?(e++,s.result==="goal"&&i++):(t++,s.result==="goal"&&r++);return{uT:e,cT:t,uG:i,cG:r}}function Eb(n){const{uT:e,cT:t,uG:i,cG:r}=gr(n);return e<5||t<5?i+(5-e)<r||r+(5-t)<i:e===t&&i!==r}class bb{constructor(e,t){this.shooterRig=null,this.keeperRig=null,this.phase="user_select",this.phaseBeforeReplay="result",this.turnSide="user",this.kicks=[],this.clockTime=0,this.phaseTime=0,this.rafId=0,this.lastFrameMs=0,this.simulationRemainder=0,this.hudThrottle=0,this.keys={up:!1,down:!1,left:!1,right:!1,space:!1},this.aimX=0,this.aimY=1.24,this.aimVelX=0,this.aimVelY=0,this.selectedStyle="placed",this.activeShotStyle="placed",this.shuttlePos=-.82,this.shuttleDir=1,this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.arrowBlockedTimer=0,this.chaosTimer=0,this.chaosSpeed=1.8,this.chaosCrossGuard=0,this.userIntendedOutcome=null,this.skiedPosture=!1,this.runupProgress=0,this.runupDuration=1.18,this.cpuReadyDuration=$m,this.postImpactTime=0,this.lastFootstepIdx=-1,this.keeperX=0,this.keeperShufflePhase=0,this.keeperLateralSpeed=0,this.committedDive=null,this.keeperDiving=!1,this.keeperDiveStartX=0,this.keeperDiveDirX=0,this.keeperDiveDirY=0,this.keeperDiveTime=0,this.keeperLanded=!1,this.keeperExplosive=!1,this.keeperIntuition=null,this.cpuShotPlan=null,this.cpuKeeperPlan=null,this.ballPos=new k(0,St,Zn),this.ballVel=new k,this.ballSpin=new k,this.flightTime=0,this.goalScored=!1,this.goalScoredTime=0,this.keeperTouched=!1,this.keeperTouchTime=0,this.hitWoodwork=!1,this.woodworkTime=0,this.netSwished=!1,this.currentOutcome=null,this.outcomeTime=0,this.lastSpeedKmh=0,this.cameraMode="broadcast",this.camPos=new k(0,2.35,17.6),this.camTarget=new k(0,1.25,0),this.camShake=0,this.replayFrames=[],this.replayCursor=0,this.replaySideSign=1,this.bannerTitle="",this.bannerTone="neutral",this.statusHint="",this.tmpClosest=new k,this.tmpNormal=new k,this.tmpMagnus=new k,this.handleResize=()=>{const i=this.container.getBoundingClientRect(),r=Math.max(320,i.width||960),s=Math.max(240,i.height||540);this.camera.aspect=r/s,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,s,!1)},this.handleKeyDown=i=>{mt.unlock();const r=i.code;if((r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight"||r==="Space"||r==="Tab")&&i.preventDefault(),(r==="ArrowUp"||r==="KeyW")&&(this.keys.up=!0),(r==="ArrowDown"||r==="KeyS")&&(this.keys.down=!0),(r==="ArrowLeft"||r==="KeyA")&&(this.keys.left=!0),(r==="ArrowRight"||r==="KeyD")&&(this.keys.right=!0),r==="KeyV"&&!i.repeat&&this.cycleCameraMode(),r==="KeyR"&&!i.repeat&&this.toggleReplay(),!i.repeat&&this.turnSide==="user"&&(this.phase==="user_select"||this.phase==="user_shuttle")){if(r==="Digit1"){this.selectShotStyle("placed",!0);return}if(r==="Digit2"){this.selectShotStyle("power",!0);return}if(r==="Digit3"){this.selectShotStyle("panenka",!0);return}if(r==="Digit4"){this.selectShotStyle("stutter",!0);return}}if(this.phase==="user_select"&&!i.repeat){const s=Kr.indexOf(this.selectedStyle);if(r==="ArrowLeft"||r==="KeyA"||r==="ArrowUp"||r==="KeyW"){const a=Kr[(s+Kr.length-1)%Kr.length];this.selectShotStyle(a,!1);return}if(r==="ArrowRight"||r==="KeyD"||r==="ArrowDown"||r==="KeyS"){const a=Kr[(s+1)%Kr.length];this.selectShotStyle(a,!1);return}if(r==="Space"||r==="Enter"){this.keys.space=!0,this.enterUserShuttlePhase(this.selectedStyle);return}}if(this.phase==="user_shuttle"&&!i.repeat){if(r==="Escape"||r==="Backspace"||r==="Tab"){this.backToStyleSelect();return}if(this.activeShotStyle==="panenka"&&(r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight"||r==="KeyW"||r==="KeyA"||r==="KeyS"||r==="KeyD")&&(this.arrowBlockedTimer=.95,mt.uiTick(260)),(r==="Space"||r==="Enter")&&!this.shuttleLocked){this.keys.space=!0,this.lockShuttleAndCommitUserShot();return}}this.turnSide==="cpu"&&this.captureUserKeeperInput(r==="Space"),(r==="Space"||r==="Enter")&&!i.repeat&&(this.keys.space=!0,this.phase==="result"&&this.phaseTime>.55?this.advanceNextTurn():this.phase==="replay"&&this.toggleReplay()),this.emitHud(!0)},this.handleKeyUp=i=>{const r=i.code;(r==="ArrowUp"||r==="KeyW")&&(this.keys.up=!1),(r==="ArrowDown"||r==="KeyS")&&(this.keys.down=!1),(r==="ArrowLeft"||r==="KeyA")&&(this.keys.left=!1),(r==="ArrowRight"||r==="KeyD")&&(this.keys.right=!1),(r==="Space"||r==="Enter")&&(this.keys.space=!1),this.emitHud(!0)},this.tick=i=>{const r=Math.max(0,(i-this.lastFrameMs)/1e3);if(this.lastFrameMs=i,document.hidden)this.simulationRemainder=0;else{this.simulationRemainder+=Math.min(.5,r);const s=1/60;for(;this.simulationRemainder>=s;)this.updateFrame(s),this.simulationRemainder-=s;this.renderer.render(this.world.scene,this.camera)}this.rafId=requestAnimationFrame(this.tick)},this.container=e,this.userGK=t.userGK,this.cpuGK=t.cpuGK,this.userTeam=t.userTeam,this.cpuTeam=t.cpuTeam,this.onHudUpdate=t.onHudUpdate,this.onShuttleFrame=t.onShuttleFrame,this.renderer=new ox({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Kd,this.renderer.toneMapping=iu,this.renderer.toneMappingExposure=1.08,e.innerHTML="",e.appendChild(this.renderer.domElement),this.camera=new ei(40,16/9,.15,180),this.world=new wb,this.refereeRig=new so({height:1.82,build:.98,skin:"#dfb48f",hair:"#241d18",hairStyle:"swept",facialHair:"none",bootColor:"#0f172a"},{primary:"#111827",secondary:"#030712",trim:"#fde047",shorts:"#090d16",socks:"#111827",numberColor:"#fde047"},0,!1),this.refereeRig.root.position.set(6.8,0,11.8),this.refereeRig.root.rotation.y=-Math.PI*.42,this.world.scene.add(this.refereeRig.root),this.handleResize(),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),this.setupTurn("user"),this.lastFrameMs=performance.now(),this.rafId=requestAnimationFrame(this.tick)}destroy(){var e,t;cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),(e=this.shooterRig)==null||e.dispose(),(t=this.keeperRig)==null||t.dispose(),this.refereeRig.dispose(),this.renderer.dispose()}setCameraMode(e){this.cameraMode=e,this.emitHud(!0)}cycleCameraMode(){const e=["broadcast","tight","wide"],t=e[(e.indexOf(this.cameraMode)+1)%e.length];this.setCameraMode(t)}toggleReplay(){if(this.phase==="replay"){this.phase=this.phaseBeforeReplay,this.emitHud(!0);return}(this.phase==="result"||this.phase==="over")&&this.replayFrames.length>8&&(this.phaseBeforeReplay=this.phase,this.phase="replay",this.replayCursor=0,this.replaySideSign=this.ballPos.x>=0?1:-1,this.emitHud(!0))}selectShotStyle(e,t=!0){this.turnSide==="user"&&(this.phase!=="user_select"&&this.phase!=="user_shuttle"||(this.selectedStyle=e,mt.uiTick(560),t?this.enterUserShuttlePhase(e):this.emitHud(!0)))}backToStyleSelect(){this.turnSide==="user"&&this.phase==="user_shuttle"&&!this.shuttleLocked&&(this.phase="user_select",this.phaseTime=0,this.world.setAimReticle(!1,0,0),this.statusHint=`${this.activeShooter.name} 主罚 · 选择方式后按空格`,mt.uiTick(420),this.emitHud(!0))}enterUserShuttlePhase(e){var i;this.selectedStyle=e,this.activeShotStyle=e,this.phase="user_shuttle",this.phaseTime=0,this.aimVelX=0,this.aimVelY=0,this.arrowBlockedTimer=0,this.shuttleDir=Math.random()<.5?1:-1,this.shuttlePos=-this.shuttleDir*(.68+Math.random()*.24),this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.chaosTimer=.16,this.chaosSpeed=2.15,this.chaosCrossGuard=0;const t=this.activeShooter;if(e==="panenka")this.aimX=0,this.aimY=1.46,this.statusHint="勺子点球（固定踢向中路，方向键无效）· 紧盯极速小球，在中心完美点按下 空格键！";else if(e==="placed"){const r=t.foot==="R"?-1:1;this.aimX=r*2.55,this.aimY=1.58,this.statusHint="推射死角 · 方向键 ↑↓←→ 瞄准死角，小球经过中心完美点时按下 空格键！"}else e==="stutter"?(this.aimX=(t.foot==="R"?-1:1)*1.65,this.aimY=1.08,this.statusHint="节奏变化（小跳步）· 方向键瞄准，预判乱晃小球在中心完美点按下 空格键！"):(this.aimX=(t.foot==="R"?-1:1)*1.45,this.aimY=1.38,this.statusHint="大力爆射 · 方向键 ↑↓←→ 瞄准，小球经过中心完美点时按下 空格键！");this.runupDuration=e==="stutter"?1.42:t.runupStyle==="stutter"?1.32:1.15,mt.whistle(),mt.setTension(.78),(i=this.onShuttleFrame)==null||i.call(this,this.shuttlePos,!1),this.emitHud(!0)}getCurrentShooter(e){const{uT:t,cT:i}=gr(this.kicks),r=(e==="user"?t:i)%5;return e==="user"?this.userTeam[r]:this.cpuTeam[r]}rebuildAthletesForTurn(e){this.shooterRig&&(this.world.scene.remove(this.shooterRig.root),this.shooterRig.dispose()),this.keeperRig&&(this.world.scene.remove(this.keeperRig.root),this.keeperRig.dispose());const t=this.getCurrentShooter(e),r=(e==="user"?"cpu":"user")==="user"?this.userGK:this.cpuGK;this.activeShooter=t,this.activeKeeper=r,this.shooterRig=new so(t.appearance,t.kit,t.number,!1),this.keeperRig=new so(r.appearance,r.kit,r.number,!0),this.world.scene.add(this.shooterRig.root),this.world.scene.add(this.keeperRig.root)}setupTurn(e){var r;this.turnSide=e,this.phaseTime=0,this.runupProgress=0,this.postImpactTime=0,this.lastFootstepIdx=-1,this.keeperX=0,this.keeperShufflePhase=0,this.keeperLateralSpeed=0,this.committedDive=null,this.keeperDiving=!1,this.keeperDiveStartX=0,this.keeperDiveDirX=0,this.keeperDiveDirY=0,this.keeperDiveTime=0,this.keeperLanded=!1,this.keeperExplosive=!1,this.keeperIntuition=null,this.goalScored=!1,this.keeperTouched=!1,this.hitWoodwork=!1,this.netSwished=!1,this.currentOutcome=null,this.outcomeTime=0,this.userIntendedOutcome=null,this.skiedPosture=!1,this.flightTime=0,this.bannerTitle="",this.bannerTone="neutral",this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.arrowBlockedTimer=0,this.world.goal.resetNet(),this.ballPos.set(0,St,Zn),this.ballVel.set(0,0,0),this.ballSpin.set(0,0,0),this.world.ballMesh.position.copy(this.ballPos),this.world.ballMesh.rotation.set(0,0,0),this.rebuildAthletesForTurn(e);const t=this.activeShooter;if(e==="user")this.phase="user_select",this.aimX=0,this.aimY=1.24,this.aimVelX=0,this.aimVelY=0,this.world.setAimReticle(!1,0,0),this.statusHint=`${t.name} 主罚 · 选择方式后按空格`,mt.setTension(.25);else{this.phase="cpu_ready",this.world.setAimReticle(!1,0,0),this.planCpuShot(t),this.cpuReadyDuration=$m+Math.random()*Tb;const s=((r=this.cpuShotPlan)==null?void 0:r.style)==="stutter"||t.runupStyle==="stutter";this.runupDuration=(s?2.85:2.55)+Math.random()*.3,this.statusHint=`${t.name} 观察球门 · ←→ 调整站位，方向键预选扑救`,mt.whistle(),mt.setTension(.75)}const i=this.computeDesiredCamera(.016);this.camPos.copy(i.pos),this.camTarget.copy(i.target),this.emitHud(!0)}planCpuShot(e){const t=cb,{cT:i}=gr(this.kicks),r=Math.random(),s=e.foot==="R"?.46:.32,a=r<s?-1:r<s+.18?0:1,o=Math.random()<.46;let l="power";a===0&&e.composure>=85&&Math.random()<.32?l="panenka":e.runupStyle==="stutter"||e.composure>=83&&Math.random()<.25?l="stutter":a!==0&&e.accuracy>=82&&Math.random()<.48&&(l="placed");const c=l==="panenka"?(Math.random()-.5)*.45:a===0?(Math.random()-.5)*.9:a*(2.15+Math.random()*1.15),h=l==="panenka"?1.45+Math.random()*.38:o?1.5+Math.random()*.65:.26+Math.random()*.7,f=i>=4?(100-e.composure)/100*.24:0,d=((100-e.accuracy)/100*.44+f)*t.accSpread,p=Math.random()*Math.PI*2,m=d*Math.sqrt(Math.random());if(this.cpuShotPlan={targetX:c+Math.cos(p)*m*1.2,targetY:Math.max(.16,h+Math.sin(p)*m*.85),powerFactor:l==="panenka"?.5:l==="power"?.88:.68,style:l},Math.random()<this.userGK.mind/128){const _=c<-.8?"左侧":c>.8?"右侧":"中路",g=Math.random()<.62+(this.userGK.mind-70)*.01,u=["左侧","中路","右侧"].filter(y=>y!==_),v=g?_:u[Math.floor(Math.random()*u.length)];this.keeperIntuition=`${this.userGK.name}直觉预判：射手支撑脚倾向 ${v}`}else this.keeperIntuition=null}stepShuttleBall(e){var i;if(this.shuttleLocked)return;const t=this.activeShotStyle;if(t==="panenka"){const s=3.15+(1-this.shuttlePos*this.shuttlePos)*1.15;this.shuttlePos+=this.shuttleDir*s*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1)}else if(t==="placed"){const s=2.15+(1-this.shuttlePos*this.shuttlePos)*.72;this.shuttlePos+=this.shuttleDir*s*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1)}else if(t==="stutter"){if(this.chaosTimer-=e,this.chaosCrossGuard+=e,this.chaosTimer<=0){const o=Math.random();o<.28?(this.chaosSpeed=.28+Math.random()*.42,this.chaosTimer=.1+Math.random()*.12):o<.68?(this.chaosSpeed=2.45+Math.random()*1.25,this.chaosTimer=.14+Math.random()*.18):(this.chaosSpeed=1.45+Math.random()*.9,this.chaosTimer=.12+Math.random()*.16,Math.abs(this.shuttlePos)>.18&&this.chaosCrossGuard<.55&&Math.random()<.55&&(this.shuttleDir=-this.shuttleDir)),this.chaosCrossGuard>.65&&Math.abs(this.shuttlePos)>.12&&(this.shuttleDir=this.shuttlePos>0?-1:1,this.chaosSpeed=Math.max(this.chaosSpeed,2.25))}const r=Math.sign(this.shuttlePos),s=Math.sin(this.clockTime*19.3)*.35+Math.cos(this.clockTime*31.7)*.22,a=this.shuttleDir*Math.max(.2,this.chaosSpeed+s);this.shuttlePos+=a*e,Math.sign(this.shuttlePos)!==r&&(this.chaosCrossGuard=0),this.shuttlePos>=.98?(this.shuttlePos=.98,this.shuttleDir=-1):this.shuttlePos<=-.98&&(this.shuttlePos=-.98,this.shuttleDir=1)}else this.shuttlePos+=this.shuttleDir*1.52*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1);(i=this.onShuttleFrame)==null||i.call(this,this.shuttlePos,!1)}lockShuttleAndCommitUserShot(){var b;const e=this.activeShooter,t=this.activeShotStyle,i=ao[t];this.shuttleLocked=!0,(b=this.onShuttleFrame)==null||b.call(this,this.shuttlePos,!0);const r=Math.abs(this.shuttlePos);let s,a,o=0;if(r<=i.perfectHalfWidth)a="perfect",s=i.perfectGoalPct/100;else{o=Ut((r-i.perfectHalfWidth)/(1-i.perfectHalfWidth),0,1),a=r<=i.goodHalfWidth?"good":o<.5?"off":"wild";const T=t==="panenka"?2.55:t==="placed"?1.95:t==="stutter"?1.72:1.36,x=1+(e.accuracy+e.composure-164)/100*.08;s=Ut(i.perfectGoalPct/100*Math.pow(1-o,T)*x,.03,i.perfectGoalPct/100-.03)}this.shuttleGrade=a,this.shuttleGoalPct=Math.round(s*100),mt.shuttleLock(a==="perfect"?"perfect":a==="good"?"good":"poor");const l=Math.random();let c;if(l<s)c="goal";else{const T=Math.random();a==="perfect"?c=T<.8?"save":"post":o<.45?c=T<.66?"save":T<.86?"post":"miss":c=T<.54?"save":T<.74?"post":"miss"}this.userIntendedOutcome=c,this.skiedPosture=!1;const h=t==="panenka"?0:this.aimX,f=t==="panenka"?1.46:this.aimY,d=h===0?Math.random()<.5?-1:1:Math.sign(h);let p=h,m=f,_,g=0,u=0,v=.87,y=!1;if(c==="goal")if(t==="panenka")p=(Math.random()-.5)*.36,m=1.38+Math.random()*.36,g=Math.random()<.5?-1:1,u=Math.random()<.4?0:-1,v=.82;else if(t==="placed"){p=Math.abs(h)<1.9?d*(2.78+Math.random()*.44):Ut(h,-3.28,3.28),m=Ut(f,.26,2.16);const x=Math.random()<.52;g=x?-Math.sign(p):Math.sign(p),u=m>1.35?1:-1,v=x?.86:.95}else t==="stutter"?(p=Math.abs(h)<.9?d*(1.85+Math.random()*1.15):Ut(h,-3.2,3.2),m=Ut(f,.26,2.12),g=-Math.sign(p||1),u=Math.random()<.5?0:-1,v=.77):(p=Ut(h+(Math.random()-.5)*.35,-3.18,3.18),m=Ut(f+(Math.random()-.5)*.25,.32,2.14),g=Math.random()<.58?-d:d,u=m>1.35?0:1,v=.93);else if(c==="save")y=!0,t==="panenka"?(p=(Math.random()-.5)*.28,m=1.28+Math.random()*.22,g=0,u=0,v=.88):(g=Math.abs(h)<.65?0:Math.sign(h),u=f>1.46?1:f<.72?-1:0,p=g===0?(Math.random()-.5)*.35:g*(1.68+Math.random()*.55),m=u>0?1.52+Math.random()*.24:u<0?.38+Math.random()*.22:1.05+Math.random()*.22,v=.85);else if(c==="post"){const T=t==="panenka"||t==="power"&&Math.random()<.58||f>1.85;T?(_="bar",p=t==="panenka"?(Math.random()-.5)*.5:Ut(h,-3.35,3.35),m=_t+.045):(_=d<0?"postL":"postR",p=d*(gn+.045),m=Ut(f,.45,2.25)),g=Math.random()<.5?d:-d,u=T?1:0,v=.88}else{const T=t==="panenka"||t==="power"||f>1.65||Math.random()<.52;T?(this.skiedPosture=!0,p=t==="panenka"?(Math.random()-.5)*.7:Ut(h*1.05,-3.9,3.9),m=2.95+Math.random()*.95):(p=d*(4.15+Math.random()*.85),m=Ut(f,.35,2.35)),g=d,u=T?1:0,v=.89}this.cpuShotPlan={targetX:p,targetY:m,powerFactor:t==="panenka"?.5:t==="power"?.94:.72,style:t,woodworkKind:_},this.cpuKeeperPlan={dirX:g,dirY:u,triggerAt:v,explosive:y},this.world.setAimReticle(!1,0,0),this.replayFrames=[],this.phase="runup",this.phaseTime=0,this.runupProgress=0;const S=a==="perfect"?"完美中心！":a==="good"?"校准良好":"偏离中心";this.statusHint=`${e.name} · ${i.name} · ${S}`,this.emitHud(!0)}captureUserKeeperInput(e){const t=(this.keys.right?1:0)-(this.keys.left?1:0),i=(this.keys.up?1:0)-(this.keys.down?1:0);if(this.phase==="flight"&&!this.keeperDiving&&this.flightTime<=.24){(t!==0||i!==0||e)&&this.triggerKeeperDive(t,i,e);return}if(this.phase==="runup"||this.phase==="cpu_ready"&&(i!==0||e))if(t!==0||i!==0){const r=this.committedDive,s=t!==0?t:r?r.x:0,a=i!==0?i:r&&t===r.x?r.y:0,o=this.runupDuration-this.phaseTime,l=this.phase==="runup"&&o>=.12&&o<=.45;this.committedDive={x:s,y:a,boost:e||l}}else e&&(this.committedDive={x:0,y:0,boost:!0})}triggerKeeperDive(e,t,i){this.keeperDiving||(this.keeperDiving=!0,this.keeperDiveStartX=this.keeperX,this.keeperDiveDirX=e,this.keeperDiveDirY=t,this.keeperDiveTime=0,this.keeperExplosive=i,mt.footstep(1),e!==0&&this.world.spawnTurfBurst(new k(this.keeperX,.03,.16),10,.15,.85))}launchBallFromSpot(){const e=this.activeShooter,t=this.cpuShotPlan,i=e.foot==="R"?1:-1,r=t.style;let s;r==="panenka"?s=12+t.powerFactor*2.4:r==="placed"?s=(21.5+t.powerFactor*6.5)*(.88+e.power*.0014):r==="stutter"?s=(20.8+t.powerFactor*7.2)*(.88+e.power*.0014):s=(25.5+t.powerFactor*9.8)*(.88+e.power*.0016),this.lastSpeedKmh=Math.round(s*3.6);const a=.0095;r==="placed"?this.ballSpin.set(-12,i*32,-i*8):r==="panenka"?this.ballSpin.set(19,i*3,0):r==="stutter"?this.ballSpin.set(-9,i*18,-i*4):this.ballSpin.set(-10,i*8,0);const o=.011,l=r==="panenka"?s*.86:s*.96,c=(Math.exp(o*Zn)-1)/(o*l),h=Zn/c,f=-a*this.ballSpin.y*h,d=a*this.ballSpin.x*h,p=.5*f*c*c,_=.5*(-9.81+d)*c*c,g=o*Zn/(1-Math.exp(-o*Zn)),u=(t.targetX-p)/c*g*.945,v=(t.targetY-St-_)/c*g*.955,y=-l;this.ballPos.set(0,St,Zn),this.ballVel.set(u,v,y),this.flightTime=0,mt.kick(t.powerFactor,r),this.camShake=r==="panenka"?.03:r==="power"?.17:.09,this.world.spawnTurfBurst(new k(0,.03,Zn),r==="power"?24:16,.4,1.15)}applyGoalkeeperParryDeflection(e){const t=Math.abs(this.ballPos.x)>.3?Math.sign(this.ballPos.x)*(5.6+e*.22):(this.keeperDiveDirX||(Math.random()<.5?-1:1))*4.4,i=this.ballPos.y>1.65?5+e*.14:2.1,r=Math.max(4.2,Math.abs(this.ballVel.z)*.38);this.ballVel.set(t,i,r),this.ballSpin.set(7,t*2.2,0),this.keeperTouched=!0,this.keeperTouchTime=this.flightTime,this.camShake=Math.max(this.camShake,.14),mt.gloveSave(!0)}stepBallPhysics(e){var l;const i=e/4,r=.0095,s=this.turnSide==="user",a=s?this.userIntendedOutcome:null,o=this.keeperRig?this.keeperRig.getKeeperCollisionCapsules():[];for(let c=0;c<4;c++){const h=this.ballPos.z,f=this.ballPos.x,d=this.ballPos.y,p=this.ballVel.length();if(p>.01){const g=-.011*p;this.ballVel.x+=this.ballVel.x*g*i,this.ballVel.y+=this.ballVel.y*g*i,this.ballVel.z+=this.ballVel.z*g*i,this.tmpMagnus.crossVectors(this.ballSpin,this.ballVel).multiplyScalar(r),this.ballVel.addScaledVector(this.tmpMagnus,i)}this.ballVel.y-=9.81*i,this.ballPos.addScaledVector(this.ballVel,i);const m=this.ballSpin.length();if(m>.1){const g=this.tmpNormal.copy(this.ballSpin).divideScalar(m);this.world.ballMesh.rotateOnWorldAxis(g,m*i)}else p>.2&&this.ballPos.y<=St+.02&&(this.tmpNormal.set(this.ballVel.z,0,-this.ballVel.x).normalize(),this.tmpNormal.lengthSq()>.1&&this.world.ballMesh.rotateOnWorldAxis(this.tmpNormal,p/St*i));if(this.ballPos.y<St&&(this.ballPos.y=St,this.ballVel.y<-1.2?(this.ballVel.y=-this.ballVel.y*.52,this.world.spawnTurfBurst(this.ballPos,5,.1,.5)):this.ballVel.y=0,this.ballVel.x*=Math.exp(-2.2*i),this.ballVel.z*=Math.exp(-2.2*i),this.ballSpin.multiplyScalar(Math.exp(-3*i))),(!s||a==="save")&&!this.goalScored&&!this.keeperTouched&&this.ballPos.z>-.25&&this.ballPos.z<1.35){const g=this.activeKeeper;for(const u of o){Ym(this.ballPos,u.a,u.b,this.tmpClosest);const v=this.ballPos.distanceTo(this.tmpClosest),y=St+u.radius;if(v<y){this.tmpNormal.subVectors(this.ballPos,this.tmpClosest),this.tmpNormal.lengthSq()<1e-6&&this.tmpNormal.set(0,.2,1),this.tmpNormal.normalize();const S=y-v;this.ballPos.addScaledVector(this.tmpNormal,S+.004),!s&&(u.part==="gloveL"||u.part==="gloveR")&&S<.014&&p>30.5&&g.reflex<88?(this.ballVel.x+=Math.sign(this.ballPos.x||1)*3.2,this.ballVel.y+=1.8,this.ballVel.multiplyScalar(.84),this.keeperTouched=!0,this.keeperTouchTime=this.flightTime,mt.gloveSave(!1)):this.applyGoalkeeperParryDeflection(p);break}}a==="save"&&!this.keeperTouched&&this.ballPos.z<=.34&&this.ballVel.z<0&&(this.ballPos.z=.35,this.applyGoalkeeperParryDeflection(p))}if(Math.abs(this.ballPos.z)<.45&&a!=="goal")if(a==="post"&&!this.hitWoodwork&&this.ballPos.z<=Ei+St+.03&&this.ballVel.z<0){const g=((l=this.cpuShotPlan)==null?void 0:l.woodworkKind)??"bar";if(g==="bar")this.ballPos.y=_t+St*.45,this.ballVel.set(this.ballVel.x*.65,5.8+Math.random()*2.5,Math.abs(this.ballVel.z)*.35+2.6);else{const u=g==="postL"?-1:1;this.ballPos.x=u*(gn+St*.4),this.ballVel.set(u*(6.2+Math.random()*2.5),1.8,Math.abs(this.ballVel.z)*.42+2.8)}this.ballPos.z=Ei+St+.04,this.hitWoodwork=!0,this.woodworkTime=this.flightTime,this.camShake=Math.max(this.camShake,.2),mt.postClang()}else for(const g of this.world.goal.postSegments){Ym(this.ballPos,g.a,g.b,this.tmpClosest);const u=this.ballPos.distanceTo(this.tmpClosest),v=St+g.radius;if(u<v){this.tmpNormal.subVectors(this.ballPos,this.tmpClosest),this.tmpNormal.lengthSq()<1e-6&&this.tmpNormal.set(0,0,1),this.tmpNormal.normalize(),this.ballPos.copy(this.tmpClosest).addScaledVector(this.tmpNormal,v+.003);const y=this.ballVel.dot(this.tmpNormal);y<0&&(this.ballVel.addScaledVector(this.tmpNormal,-1.68*y),this.ballVel.multiplyScalar(.78),this.hitWoodwork||(this.hitWoodwork=!0,this.woodworkTime=this.flightTime,this.camShake=Math.max(this.camShake,.18),mt.postClang()))}}if(!this.goalScored&&h>=0&&this.ballPos.z<0){const g=h/Math.max(1e-5,h-this.ballPos.z);let u=f+(this.ballPos.x-f)*g,v=d+(this.ballPos.y-d)*g;a==="goal"&&(u=Ut(u,-3.539,gn-St*1.1),v=Ut(v,St,_t-St*1.1),this.ballPos.x=u,this.ballPos.y=v),a!=="miss"&&a!=="post"&&a!=="save"&&Math.abs(u)<gn-St*.35&&v<_t-St*.35&&(this.goalScored=!0,this.goalScoredTime=this.flightTime,this.onOutcomeConfirmed("goal"))}if(this.goalScored){const g=Jf(this.ballPos.y)+St,u=gn-St,v=_t-St;let y=!1;this.ballPos.z<g&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.85),this.ballPos.z=g,this.ballVel.z=-this.ballVel.z*.18,this.ballVel.x*=.48,this.ballVel.y*=.42,y=!0),Math.abs(this.ballPos.x)>u&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.75),this.ballPos.x=Math.sign(this.ballPos.x)*u,this.ballVel.x=-this.ballVel.x*.22,this.ballVel.z*=.55,y=!0),this.ballPos.y>v&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.75),this.ballPos.y=v,this.ballVel.y=-Math.abs(this.ballVel.y)*.25,y=!0),y&&!this.netSwished&&(this.netSwished=!0,mt.netSwish())}else!this.goalScored&&this.ballPos.z<0&&Math.abs(this.ballPos.x)<gn&&this.ballPos.y<_t&&(this.ballPos.y=_t+St)}this.world.ballMesh.position.copy(this.ballPos)}onOutcomeConfirmed(e){var l;if(this.currentOutcome)return;this.currentOutcome=e,this.outcomeTime=0;const t=this.activeShooter,i=this.activeKeeper,r=((l=this.cpuShotPlan)==null?void 0:l.style)??this.selectedStyle,s=ao[r].name,a=this.turnSide==="user"&&e==="goal"||this.turnSide==="cpu"&&e!=="goal";let o;e==="goal"?r==="panenka"?o=`${t.name} 写意勺子点球骗过门将直挂中路！`:r==="stutter"?o=`${t.name} 小跳步晃倒重心推射破门！(${this.lastSpeedKmh} km/h)`:r==="placed"?o=`${t.name} 精准推射死角入网！(${this.lastSpeedKmh} km/h)`:this.hitWoodwork?o=`${t.name} 爆射击中门框内侧弹入球网！`:o=`${t.name} 大力爆射破门得分！(${this.lastSpeedKmh} km/h)`:e==="save"?o=r==="panenka"?`${i.name} 识破勺子点球，镇守中路将球没收！`:`${i.name} 判断准确飞身将${s}神勇扑出！`:e==="post"?o=`${t.name} 的${s}重重砸在门框弹出！`:o=this.ballPos.y>_t?`${t.name} 发力过猛将球直接踢飞看台！`:`${t.name} 角度过刁擦柱射偏出界！`,this.kicks=[...this.kicks,{side:this.turnSide,shooterName:t.name,keeperName:i.name,result:e,detail:o,speedKmh:this.lastSpeedKmh,style:r}],this.bannerTitle=e==="goal"?"进球！":e==="save"?"门将扑出！":e==="post"?"击中门框！":"射门偏出！",this.bannerTone=a?"good":"bad",this.statusHint=`${o} · 按 R 慢镜回放，空格键 继续`,this.world.triggerCrowdExcitement(e==="goal"||e==="save"?1:.55),mt.crowdReaction(a?"cheer":"groan"),mt.setTension(.2),this.emitHud(!0)}advanceNextTurn(){if(Eb(this.kicks)){this.phase="over";const{uG:i,cG:r}=gr(this.kicks),s=i>r;this.bannerTitle=s?`胜利！ ${i} : ${r}`:`惜败 ${i} : ${r}`,this.bannerTone=s?"good":"bad",this.statusHint=s?"你率队赢得了点球大战冠军！":"电脑在点球大战中胜出，可立即再战一局",this.emitHud(!0);return}const{uT:e,cT:t}=gr(this.kicks);this.setupTurn(e===t?"user":"cpu")}recordReplaySnapshot(e,t,i,r,s,a){this.replayFrames.length>=220&&this.replayFrames.shift(),this.replayFrames.push({shooterPos:e.clone(),shooterYaw:t,shooterPose:Km(i),keeperPos:r.clone(),keeperYaw:s,keeperPose:Km(a),ballPos:this.ballPos.clone(),ballQuat:this.world.ballMesh.quaternion.clone()})}computeDesiredCamera(e){const t=new k,i=new k;let r=40;if(this.phase==="replay"&&this.replayFrames.length>0){const o=this.replaySideSign;return t.set(o*6.9,1.68,3.6),i.set(this.world.ballMesh.position.x*.45,Math.max(.85,this.world.ballMesh.position.y*.72),Math.min(4.5,this.world.ballMesh.position.z*.35)),{pos:t,target:i,fov:36}}const s=this.shooterRig?this.shooterRig.root.position.x:0,a=Math.sin(this.clockTime*1.4)*.035;if(this.phase==="user_select"||this.phase==="user_shuttle"||this.phase==="cpu_ready"||this.phase==="runup"){const o=this.cameraMode==="wide";t.set(s*.12,(o?5.2:4.4)+a,o?23.5:22),i.set(0,.9,7),r=44}else this.cameraMode==="tight"?(t.set(s*.22,1.95+a,15.8),i.set(this.keeperX*.18,1.18,0),r=38):this.cameraMode==="wide"?(t.set(s*.18,3.65+a,19.6),i.set(0,1.12,1.2),r=42):(t.set(s*.15,3.9+a,21),i.set(this.keeperX*.1,.9,6),r=42);return(this.phase==="result"||this.phase==="over")&&(t.z-=.9,i.x=Ut(this.world.ballMesh.position.x*.25,-1.6,1.6)),{pos:t,target:i,fov:r}}updateRefereePose(){const e=ma();e.spine.lean=.12,e.legL.abduct=.12,e.legR.abduct=.12,e.legL.knee=.14,e.legR.knee=.14,(this.phase==="user_shuttle"||this.phase==="cpu_ready")&&this.phaseTime<.55?e.armR={flex:1.45,abduct:.35,twist:.4,elbow:2.05}:this.currentOutcome==="goal"&&(e.armL={flex:1.15,abduct:.45,twist:0,elbow:.15}),this.refereeRig.applyPose(e)}updateFrame(e){var o,l;if(this.phase!=="replay"&&(this.clockTime+=e,this.phaseTime+=e,this.currentOutcome&&(this.outcomeTime+=e)),this.arrowBlockedTimer>0&&(this.arrowBlockedTimer=Math.max(0,this.arrowBlockedTimer-e)),this.phase==="replay"&&this.replayFrames.length>0){if(this.replayCursor+=e*Math.max(12,this.replayFrames.length*.42),this.replayCursor>=this.replayFrames.length-1)this.phase=this.phaseBeforeReplay,this.emitHud(!0);else{const c=Math.floor(this.replayCursor),h=this.replayFrames[c];this.shooterRig&&(this.shooterRig.root.position.copy(h.shooterPos),this.shooterRig.root.rotation.y=h.shooterYaw,this.shooterRig.applyPose(h.shooterPose)),this.keeperRig&&(this.keeperRig.root.position.copy(h.keeperPos),this.keeperRig.root.rotation.y=Ab(h.keeperYaw),this.keeperRig.applyPose(h.keeperPose)),this.world.ballMesh.position.copy(h.ballPos),this.world.ballMesh.quaternion.copy(h.ballQuat)}this.world.step(this.clockTime,e*.38),this.updateCamera(e);return}if(this.phase==="user_select"){const c=Math.sin(this.clockTime*1.55)*.24;this.keeperLateralSpeed=(c-this.keeperX)*3,this.keeperX+=this.keeperLateralSpeed*e,this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*e*6.5}else if(this.phase==="user_shuttle"){const c=ao[this.activeShotStyle];if(c.arrowsEnabled){const d=(this.keys.right?1:0)-(this.keys.left?1:0),p=(this.keys.up?1:0)-(this.keys.down?1:0),m=17.5,_=Math.exp(-8.5*e);this.aimVelX=(this.aimVelX+d*m*e)*_,this.aimVelY=(this.aimVelY+p*m*e)*_;const{uT:g,cT:u}=gr(this.kicks),v=g>=4||u>=5?(100-this.activeShooter.composure)/100*.22:.025,y=Math.sin(this.clockTime*2.7)*v*e,S=Math.cos(this.clockTime*3.4)*v*.7*e;this.aimX=Ut(this.aimX+this.aimVelX*e+y,-3.48,3.48),this.aimY=Ut(this.aimY+this.aimVelY*e+S,.22,2.26)}else this.aimX=0,this.aimY=1.46;this.stepShuttleBall(e);const h=1+Math.sin(this.clockTime*6)*.06;this.world.setAimReticle(!0,this.aimX,this.aimY,c.accentColor,h);const f=Math.sin(this.clockTime*1.65)*.28;this.keeperLateralSpeed=(f-this.keeperX)*3,this.keeperX+=this.keeperLateralSpeed*e,this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*e*6.5}else if(this.phase==="cpu_ready")this.updateUserKeeperFootwork(e,1.35),this.phaseTime>=this.cpuReadyDuration&&(this.replayFrames=[],this.phase="runup",this.phaseTime-=this.cpuReadyDuration,this.runupProgress=Ut(this.phaseTime/this.runupDuration,0,1),this.statusHint=`${this.activeShooter.name} 开始助跑 · 方向键扑救，空格加强蹬地`,this.emitHud(!0));else if(this.phase==="runup"){if(this.runupProgress=Ut(this.phaseTime/this.runupDuration,0,1),this.turnSide==="cpu"){const c=(this.keys.right?1:0)-(this.keys.left?1:0),h=(this.keys.up?1:0)-(this.keys.down?1:0);!this.keeperDiving&&h===0&&!this.keys.space?this.updateUserKeeperFootwork(e,1.35):this.keeperLateralSpeed=0,this.runupProgress>=.34&&(c!==0||h!==0)&&(this.committedDive={x:c,y:h,boost:this.keys.space||(((o=this.committedDive)==null?void 0:o.boost)??!1)});const f=Ut(.14+(this.userGK.reflex-85)*.002,.12,.17);!this.keeperDiving&&this.runupDuration-this.phaseTime<=f&&this.committedDive&&this.triggerKeeperDive(this.committedDive.x,this.committedDive.y,this.committedDive.boost)}else this.keeperLateralSpeed=0,!this.keeperDiving&&this.cpuKeeperPlan&&this.runupProgress>=this.cpuKeeperPlan.triggerAt&&this.triggerKeeperDive(this.cpuKeeperPlan.dirX,this.cpuKeeperPlan.dirY,this.cpuKeeperPlan.explosive);this.keeperDiving&&(this.keeperDiveTime+=e),this.runupProgress>=1&&(this.runupProgress=1,this.launchBallFromSpot(),this.phase="flight",this.phaseTime=0,this.postImpactTime=0,this.emitHud(!0))}else if(this.phase==="flight"){if(this.flightTime+=e,this.postImpactTime+=e,this.keeperDiving)this.keeperDiveTime+=e;else if(this.turnSide==="cpu"){const m=(this.keys.right?1:0)-(this.keys.left?1:0),_=(this.keys.up?1:0)-(this.keys.down?1:0);this.flightTime<=.24&&(m!==0||_!==0||this.keys.space)?this.triggerKeeperDive(m,_,this.keys.space):this.flightTime>.24&&this.triggerKeeperDive(0,0,!1)}this.stepBallPhysics(e);const c=this.goalScored&&this.flightTime-this.goalScoredTime>.48,h=this.keeperTouched&&!this.goalScored&&this.flightTime-this.keeperTouchTime>.56&&this.ballPos.z>.25,f=this.hitWoodwork&&!this.goalScored&&this.flightTime-this.woodworkTime>.62&&this.ballPos.z>.15,d=!this.goalScored&&this.ballPos.z<-.85,p=this.flightTime>1.75;if(c||h||f||d||p){if(!this.currentOutcome){const m=this.goalScored?"goal":this.keeperTouched?"save":this.hitWoodwork?"post":"miss";this.onOutcomeConfirmed(m)}this.phase="result",this.phaseTime=0,this.emitHud(!0)}}else this.phase==="result"?(this.flightTime+=e,this.postImpactTime+=e,this.keeperDiving&&(this.keeperDiveTime+=e),this.stepBallPhysics(e),this.phaseTime>=2.55&&this.advanceNextTurn()):this.phase==="over"&&(this.postImpactTime+=e,this.keeperDiving&&(this.keeperDiveTime+=e),this.stepBallPhysics(e));const t=this.activeShooter,i=this.activeKeeper,r=this.phase==="user_shuttle"||this.phase==="cpu_ready"?"charging":this.phase==="runup"?"runup":this.phase==="flight"||this.phase==="result"||this.phase==="over"?"follow":"idle",s=pb({shooter:t,mode:r,time:this.clockTime,chargeRatio:this.phase==="cpu_ready"?Ut(this.phaseTime/this.cpuReadyDuration,0,1)*.5:this.phase==="user_shuttle"?.5:0,runupProgress:this.runupProgress,postImpactTime:this.postImpactTime,shotStyle:((l=this.cpuShotPlan)==null?void 0:l.style)??this.activeShotStyle,overcharged:this.skiedPosture,outcome:this.currentOutcome,outcomeTime:this.outcomeTime});if(r==="runup"&&s.stepIndex!==this.lastFootstepIdx&&(this.lastFootstepIdx=s.stepIndex,mt.footstep(.65+this.runupProgress*.35),s.pos.y<.04&&this.world.spawnTurfBurst(s.pos,4,.05,.45)),this.shooterRig){const c=this.shooterRig.root,h=r==="idle"&&this.phaseTime<.05;c.position.lerp(s.pos,h?1:.28);let f=s.yaw-c.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;c.rotation.y+=f*(h?1:.28),this.shooterRig.applyPose(s.pose,h)}const a=gb({keeper:i,mode:this.keeperDiving?"diving":"ready",time:this.clockTime,xPos:this.keeperX,shufflePhase:this.keeperShufflePhase,shuffleSpeed:this.keeperLateralSpeed,preDiveX:this.turnSide==="cpu"&&this.committedDive?this.committedDive.x:0,preDiveY:this.turnSide==="cpu"&&this.committedDive?this.committedDive.y:0,diveStartX:this.keeperDiveStartX,diveDirX:this.keeperDiveDirX,diveDirY:this.keeperDiveDirY,diveTime:this.keeperDiveTime,explosiveBoost:this.keeperExplosive,ballPos:this.ballPos,keeperSaved:this.keeperTouched&&!this.goalScored,outcome:this.currentOutcome,outcomeTime:this.outcomeTime});if(a.justLanded&&!this.keeperLanded&&(this.keeperLanded=!0,mt.footstep(.95),this.world.spawnTurfBurst(a.pos,12,.1,.7)),this.keeperRig){const c=this.keeperRig.root,h=!this.keeperDiving&&this.phaseTime<.05;c.position.lerp(a.pos,h?1:.32);let f=a.yaw-c.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;c.rotation.y+=f*(h?1:.32),this.keeperRig.applyPose(a.pose,h||this.keeperDiving)}this.updateRefereePose(),(this.phase==="runup"||this.phase==="flight"||this.phase==="result"&&this.phaseTime<.9)&&this.recordReplaySnapshot(s.pos,s.yaw,s.pose,a.pos,a.yaw,a.pose),this.world.step(this.clockTime,e),this.updateCamera(e),this.hudThrottle+=e,this.hudThrottle>=.045&&(this.hudThrottle=0,this.emitHud(!1))}updateUserKeeperFootwork(e,t){const i=(this.keys.right?1:0)-(this.keys.left?1:0),r=2.45;if(this.keeperLateralSpeed=i*r,i!==0){const s=Math.floor(this.keeperShufflePhase/Math.PI);this.keeperX=Ut(this.keeperX+this.keeperLateralSpeed*e,-t,t),this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*e*6.8,Math.floor(this.keeperShufflePhase/Math.PI)!==s&&mt.footstep(.45)}}updateCamera(e){const t=this.computeDesiredCamera(e),i=1-Math.exp(-6.5*e);this.camPos.lerp(t.pos,i),this.camTarget.lerp(t.target,i),Math.abs(this.camera.fov-t.fov)>.05&&(this.camera.fov+=(t.fov-this.camera.fov)*i,this.camera.updateProjectionMatrix()),this.camShake=Math.max(0,this.camShake-e*.65);const r=(Math.random()-.5)*this.camShake,s=(Math.random()-.5)*this.camShake;this.camera.position.set(this.camPos.x+r,this.camPos.y+s,this.camPos.z),this.camera.lookAt(this.camTarget)}emitHud(e){var c;const{uT:t,cT:i,uG:r,cG:s}=gr(this.kicks),a=this.activeShooter,o=this.activeKeeper,l=this.phase==="user_select"?this.selectedStyle:this.phase==="user_shuttle"?this.activeShotStyle:((c=this.cpuShotPlan)==null?void 0:c.style)??this.activeShotStyle;this.onHudUpdate({phase:this.phase,turnSide:this.turnSide,shooter:a,keeper:o,shotStyle:l,shuttlePos:this.shuttlePos,shuttleLocked:this.shuttleLocked,shuttleGrade:this.shuttleGrade,shuttleGoalPct:this.shuttleGoalPct,arrowBlockedFlash:this.arrowBlockedTimer>0,kicks:this.kicks,userGoals:r,cpuGoals:s,userTaken:t,cpuTaken:i,roundNumber:Math.max(1,(this.turnSide==="user"?t:i)+(this.currentOutcome?0:1)),suddenDeath:t>=5&&i>=5,bannerTitle:this.bannerTitle,bannerTone:this.bannerTone,statusHint:this.statusHint,keeperIntuition:this.turnSide==="cpu"?this.keeperIntuition:null,activeArrows:{up:this.keys.up,down:this.keys.down,left:this.keys.left,right:this.keys.right,space:this.keys.space},committedDive:this.committedDive?{x:this.committedDive.x,y:this.committedDive.y}:null,cameraMode:this.cameraMode,canReplay:(this.phase==="result"||this.phase==="over")&&this.replayFrames.length>8,isReplaying:this.phase==="replay",lastSpeedKmh:this.lastSpeedKmh})}}function Ab(n){return Number.isFinite(n)?n:0}const Rb={classic:"直线爆射",curved:"弧线助跑",stutter:"节奏变奏"};function Pb(n){return n?n.x<0&&n.y>0?"↖ 左上死角飞扑":n.x>0&&n.y>0?"↗ 右上死角飞扑":n.x<0&&n.y<0?"↙ 左下贴地扑救":n.x>0&&n.y<0?"↘ 右下贴地扑救":n.x<0?"← 左侧飞身扑救":n.x>0?"→ 右侧飞身扑救":n.y>0?"↑ 中路跃起托救":n.y<0?"↓ 中路下蹲封堵":"● 稳守中路":"中路待命"}function Cb(){const[n,e]=bt.useState("select"),[t,i]=bt.useState(Vi[0].id),[r,s]=bt.useState(()=>Wi.slice(0,5).map(j=>j.id)),[a,o]=bt.useState(null),[l,c]=bt.useState(null),[h,f]=bt.useState(!1),[d,p]=bt.useState(null),[m,_]=bt.useState(null),g=bt.useRef(null),u=bt.useRef(null),v=bt.useRef(null),y=!!(t&&r.length===5),S=bt.useCallback((j,V)=>{mt.unlock();const ie=Vi.find(Ge=>Ge.id===j)??Vi[0],ue=V.map(Ge=>Wi.find(Ne=>Ne.id===Ge)),Te=Vi.filter(Ge=>Ge.id!==ie.id).sort((Ge,Ne)=>Dl(Ne)-Dl(Ge)),fe=Nl(Te)[0],Qe=Wi.filter(Ge=>!V.includes(Ge.id)).sort((Ge,Ne)=>Ll(Ne)-Ll(Ge)).slice(0,11),De=Nl(Qe).slice(0,5);p({userGK:ie,cpuGK:fe,userTeam:ue,cpuTeam:De,matchSeed:Date.now()}),e("match")},[]),b=bt.useCallback(()=>{mt.unlock(),i(Nl(Vi)[0].id),s(Nl(Wi).slice(0,5).map(j=>j.id))},[]);bt.useEffect(()=>{const j=V=>{V.code==="KeyM"&&!V.repeat&&f(mt.toggleMute()),n==="select"&&!V.repeat&&(V.code==="KeyR"?b():V.code==="Enter"&&t&&r.length===5&&S(t,r))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[n,t,r,b,S]),bt.useEffect(()=>{if(n!=="match"||!d||!g.current)return;const j=new bb(g.current,{userGK:d.userGK,cpuGK:d.cpuGK,userTeam:d.userTeam,cpuTeam:d.cpuTeam,onHudUpdate:V=>_(V),onShuttleFrame:V=>{v.current&&(v.current.style.left=`${((V+1)*50).toFixed(2)}%`)}});return u.current=j,()=>{j.destroy(),u.current=null}},[n,d]);const T=bt.useMemo(()=>Vi.find(j=>j.id===(a??t))??Vi[0],[a,t]),x=bt.useMemo(()=>{const j=l??r[r.length-1]??Wi[0].id;return Wi.find(V=>V.id===j)??Wi[0]},[l,r]),M=j=>{s(V=>V.includes(j)?V.filter(ie=>ie!==j):V.length>=5?V:[...V,j])};if(n==="select")return B.jsxs("main",{className:"select-shell",children:[B.jsxs("header",{className:"select-header",children:[B.jsxs("div",{children:[B.jsx("h1",{children:"巅峰点球大战 · 三维拟真赛场"}),B.jsxs("p",{children:["全三维人体骨骼动力学与真实球路物理重制。射门采用",B.jsx("strong",{children:"「四大脚法选择 + 中心完美点穿梭球定格」"}),"机制， 守门全程使用键盘 ",B.jsx("strong",{children:"↑ ↓ ← →"})," 横移封堵与八向飞身扑救。"]})]}),B.jsx("button",{id:"btn-toggle-audio-select",className:"btn",onClick:()=>f(mt.toggleMute()),children:h?"音效：已静音 (M)":"音效：球场原声 (M)"})]}),B.jsxs("section",{className:"controls-legend-bar","aria-label":"键盘操作指南",children:[B.jsxs("span",{className:"legend-item",children:[B.jsx("strong",{children:"四大射门方式："}),B.jsx("span",{className:"kbd",children:"1"})," 推射死角 · ",B.jsx("span",{className:"kbd",children:"2"})," 大力爆射 ·"," ",B.jsx("span",{className:"kbd",children:"3"})," 勺子点球（固定中路） · ",B.jsx("span",{className:"kbd",children:"4"})," 节奏变化小跳步"]}),B.jsxs("span",{className:"legend-item",children:[B.jsx("strong",{children:"中心完美点校准："}),"先选方式，再盯紧左右穿梭小球，对准",B.jsx("strong",{children:"中心完美点"}),"按下 ",B.jsx("span",{className:"kbd",children:"空格"})," 定格射门"]}),B.jsxs("span",{className:"legend-item",children:[B.jsx("strong",{children:"门将扑救："}),"助跑初段 ",B.jsx("span",{className:"kbd",children:"←"})," ",B.jsx("span",{className:"kbd",children:"→"})," 横移 · 起脚瞬间"," ",B.jsx("span",{className:"kbd",children:"↑"}),B.jsx("span",{className:"kbd",children:"↓"}),B.jsx("span",{className:"kbd",children:"←"}),B.jsx("span",{className:"kbd",children:"→"})," 八向真实飞扑"]})]}),B.jsxs("div",{className:"select-layout",children:[B.jsxs("aside",{className:"locker-sidebar",children:[B.jsxs("div",{className:"stage-3d-wrap",children:[B.jsx(lb,{keeper:T,player:x}),B.jsxs("div",{className:"stage-caption",children:[B.jsxs("span",{children:["门将：",T.name," (",Math.round(T.appearance.height*100),"厘米)"]}),B.jsxs("span",{children:["主罚：",x.name," (",x.foot==="L"?"左脚":"右脚"," ·"," ",Math.round(x.appearance.height*100),"厘米)"]})]})]}),B.jsxs("div",{className:"lineup-slots",children:[(()=>{const j=Vi.find(V=>V.id===t);return B.jsxs("div",{className:`slot-row ${j?"filled":""}`,children:[B.jsx("span",{className:"slot-tag",children:"门将"}),B.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[j&&B.jsx("img",{src:j.avatar,alt:j.name,className:"gk-mini-avatar"}),j?`${j.name} · ${j.nick}`:"未选择门将"]}),B.jsx("span",{style:{color:"var(--text-muted)",fontSize:12},children:j?`总评 ${Dl(j)}`:""})]})})(),[0,1,2,3,4].map(j=>{const V=r[j],ie=V?Wi.find(ue=>ue.id===V):void 0;return B.jsxs("div",{className:`slot-row ${ie?"filled":""}`,children:[B.jsxs("span",{className:"slot-tag",children:["#",j+1," 罚"]}),B.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[ie&&B.jsx("img",{src:ie.avatar,alt:ie.name,className:"gk-mini-avatar"}),ie?`${ie.name} · ${ie.nick}`:"待选主罚球员"]}),B.jsx("span",{style:{color:"var(--text-muted)",fontSize:12},children:ie?`${ie.foot==="L"?"左脚":"右脚"} · ${Ll(ie)}`:"—"})]},j)})]}),B.jsxs("div",{className:"action-stack",children:[B.jsx("button",{id:"btn-random-squad",className:"btn",onClick:b,children:"随机阵容 (R)"}),B.jsx("button",{id:"btn-start-match",className:"btn btn-primary",disabled:!y,onClick:()=>S(t,r),children:"登场开赛 (Enter)"})]})]}),B.jsxs("div",{className:"roster-column",children:[B.jsxs("section",{className:"roster-section",children:[B.jsxs("h2",{children:["首发门将选择",B.jsx("span",{children:"专属三维造型与球衣 · 点击或悬停实时预览"})]}),B.jsx("div",{className:"athlete-grid",children:Vi.map(j=>{const V=t===j.id;return B.jsxs("div",{id:`card-gk-${j.id}`,className:`athlete-card ${V?"selected":""}`,onMouseEnter:()=>o(j.id),onMouseLeave:()=>o(null),onClick:()=>i(j.id),children:[B.jsxs("div",{className:"card-top",children:[B.jsxs("div",{className:"gk-card-identity",children:[B.jsx("img",{src:j.avatar,alt:j.name,className:"gk-avatar"}),B.jsxs("div",{children:[B.jsxs("div",{className:"athlete-name",children:[j.name," ·「",j.nick,"」"]}),B.jsxs("div",{className:"athlete-meta",children:[j.country," · ",Math.round(j.appearance.height*100),"厘米 · #",j.number]})]})]}),B.jsx("div",{className:"ovr-badge",children:Dl(j)})]}),B.jsx("div",{className:"stat-bars",children:[["反应",j.reflex],["臂展",j.reach],["预判",j.mind]].map(([ie,ue])=>B.jsxs("div",{className:"stat-line",children:[B.jsx("span",{className:"lbl",children:ie}),B.jsx("div",{className:"stat-track",children:B.jsx("div",{className:"stat-fill gk",style:{width:`${ue}%`}})}),B.jsx("span",{className:"stat-val",children:ue})]},ie))})]},j.id)})})]}),B.jsxs("section",{className:"roster-section",children:[B.jsxs("h2",{children:["5 名点球主罚手（已选 ",r.length,"/5 · 全员 18 人专属三维形象还原）",B.jsx("span",{children:"点选顺序即出场主罚顺序 · 悬停或点选可在左侧三维展台实时预览专属外观与球衣"})]}),B.jsx("div",{className:"athlete-grid",children:Wi.map(j=>{const V=r.indexOf(j.id),ie=V>=0,ue=!ie&&r.length>=5;return B.jsxs("div",{id:`card-player-${j.id}`,className:`athlete-card ${ie?"selected":""} ${ue?"dimmed":""}`,onMouseEnter:()=>c(j.id),onMouseLeave:()=>c(null),onClick:()=>M(j.id),children:[B.jsxs("div",{className:"card-top",children:[B.jsxs("div",{className:"gk-card-identity",children:[B.jsx("img",{src:j.avatar,alt:j.name,className:"gk-avatar"}),B.jsxs("div",{children:[B.jsxs("div",{className:"athlete-name",children:[j.name," ·「",j.nick,"」"]}),B.jsxs("div",{className:"athlete-meta",children:[j.pos," · ",j.country," · ",j.foot==="L"?"左脚":"右脚"," ·"," ",Rb[j.runupStyle]]})]})]}),B.jsx("div",{className:"ovr-badge",children:ie?`#${V+1}`:Ll(j)})]}),B.jsx("div",{className:"stat-bars",children:[["力量",j.power],["精准",j.accuracy],["心理",j.composure]].map(([Te,fe])=>B.jsxs("div",{className:"stat-line",children:[B.jsx("span",{className:"lbl",children:Te}),B.jsx("div",{className:"stat-track",children:B.jsx("div",{className:"stat-fill",style:{width:`${fe}%`}})}),B.jsx("span",{className:"stat-val",children:fe})]},Te))})]},j.id)})})]})]})]})]});const D=(m==null?void 0:m.kicks)??[],{uT:A,cT:C,uG:P,cG:N}=gr(D),R=Math.min(8,Math.max(5,A,C)),U=j=>{const V=D.filter(ue=>ue.side===j),ie=V.length>R?V.slice(-R):V;return B.jsx("div",{className:"pip-row",children:Array.from({length:R}).map((ue,Te)=>{const fe=ie[Te],Ue=fe?fe.result==="goal"?"pip goal":"pip miss":"pip";return B.jsx("span",{className:Ue},Te)})})},q=j=>{if(!d)return null;const V=j==="user"?d.userTeam:d.cpuTeam,ie=j==="user"?d.userGK:d.cpuGK,ue=D.filter(Ue=>Ue.side===j),Te=(j==="user"?A:C)%5,fe=m&&m.phase!=="over"&&m.turnSide===j;return B.jsxs("div",{className:"sheet-card",children:[B.jsxs("div",{className:"sheet-head",children:[B.jsx("strong",{children:j==="user"?"我方阵容":"电脑阵容"}),B.jsxs("span",{style:{color:"var(--text-muted)",display:"inline-flex",alignItems:"center",gap:6},children:[B.jsx("img",{src:ie.avatar,alt:ie.name,className:"gk-mini-avatar"}),"门将：",ie.name,"「",ie.nick,"」(",Math.round(ie.appearance.height*100),"厘米)"]})]}),B.jsx("div",{className:"sheet-taker-list",children:V.map((Ue,Qe)=>{const De=ue.filter((Ne,We)=>We%5===Qe),Ge=fe&&Qe===Te;return B.jsxs("div",{className:`taker-chip ${Ge?"current":""}`,children:[B.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:4,fontWeight:700},children:[B.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,whiteSpace:"nowrap"},children:[B.jsx("img",{src:Ue.avatar,alt:Ue.name,className:"gk-mini-avatar"}),Qe+1,". ",Ue.name]}),B.jsx("span",{style:{color:"var(--text-muted)"},children:Ue.foot==="L"?"左脚":"右脚"})]}),B.jsx("div",{style:{color:"var(--text-muted)",letterSpacing:2},children:De.length===0?"○":De.map((Ne,We)=>B.jsx("span",{style:{color:Ne.result==="goal"?"var(--turf-emerald)":"var(--danger-red)"},children:Ne.result==="goal"?"●":"✕"},We))})]},Ue.id)})})]})},z=ao[(m==null?void 0:m.shotStyle)??"placed"],G=(.5-z.perfectHalfWidth*.5)*100,O=z.perfectHalfWidth*100,X=(.5-z.goodHalfWidth*.5)*100,J=z.goodHalfWidth*100,ae=m&&m.turnSide==="user"&&(m.phase==="user_shuttle"||m.phase==="runup"&&m.shuttleLocked);return B.jsxs("main",{className:"match-shell",children:[B.jsxs("div",{className:"viewport-frame",children:[B.jsx("div",{ref:g,className:"webgl-mount",id:"stadium-3d-canvas"}),B.jsxs("div",{className:"scorebug",children:[B.jsxs("div",{className:"scorebug-top",children:[B.jsx("span",{children:"点球大战"}),B.jsx("span",{children:m!=null&&m.suddenDeath?"突然死亡":`第 ${Math.min(5,(m==null?void 0:m.roundNumber)??1)} / 5 轮`})]}),B.jsxs("div",{className:"scorebug-teams",children:[B.jsxs("div",{className:"team-side",children:[B.jsxs("span",{className:"team-label",children:[B.jsx("span",{className:"kit-swatch",style:{background:"#2563eb"}}),"我方"]}),U("user")]}),B.jsxs("div",{className:"score-digits",children:[P," : ",N]}),B.jsxs("div",{className:"team-side right",children:[B.jsxs("span",{className:"team-label",children:["电脑",B.jsx("span",{className:"kit-swatch",style:{background:"#be123c"}})]}),U("cpu")]})]})]}),B.jsxs("div",{className:"top-toolbar",children:[(m==null?void 0:m.canReplay)&&B.jsx("button",{id:"btn-instant-replay",className:"hud-btn highlight",onClick:()=>{var j;return(j=u.current)==null?void 0:j.toggleReplay()},children:m.isReplaying?"退出回放 (R)":"慢镜回放 (R)"}),B.jsxs("button",{id:"btn-cycle-camera",className:"hud-btn",onClick:()=>{var j;return(j=u.current)==null?void 0:j.cycleCameraMode()},children:["机位：",(m==null?void 0:m.cameraMode)==="tight"?"近景特写":(m==null?void 0:m.cameraMode)==="wide"?"全景看台":"广播主视角"," (V)"]}),B.jsx("button",{id:"btn-toggle-audio-match",className:"hud-btn",onClick:()=>f(mt.toggleMute()),children:h?"静音 (M)":"音效 (M)"}),B.jsx("button",{id:"btn-exit-select",className:"hud-btn",onClick:()=>e("select"),children:"重新选人"})]}),(m==null?void 0:m.isReplaying)&&B.jsx("div",{className:"replay-badge",children:"慢镜回放 · 四成速度"}),m&&m.bannerTitle&&m.phase==="result"&&B.jsx("div",{className:`result-banner ${m.bannerTone}`,children:B.jsx("div",{className:"title",children:m.bannerTitle})}),m&&m.phase==="user_select"&&B.jsxs("section",{className:"tactical-panel",id:"shot-mode-selector","aria-label":"选择射门方式",children:[B.jsxs("div",{className:"tactical-head",children:[B.jsxs("div",{className:"tactical-title",children:[B.jsx("span",{className:"step-badge",children:"一"}),"方式"]}),B.jsx("span",{className:"tactical-sub",children:"1–4 · 空格"})]}),B.jsx("div",{className:"mode-list",children:Kr.map(j=>{const V=ao[j],ie=m.shotStyle===j;return B.jsxs("button",{id:`btn-mode-${j}`,className:`mode-row ${ie?"selected":""}`,"aria-pressed":ie,title:`${V.name}：${V.arrowsEnabled?V.shuttleDesc:"固定中路 · 极速穿梭"}`,"aria-label":`${V.keyNum} ${V.name}：${V.arrowsEnabled?V.shuttleDesc:"固定中路 · 极速穿梭"}，点击确认`,onClick:()=>{var ue;return(ue=u.current)==null?void 0:ue.selectShotStyle(j,!0)},children:[B.jsx("span",{className:"mode-key",children:V.keyNum}),B.jsx("span",{className:"mode-name",children:j==="stutter"?"节奏小跳步":V.name})]},j)})})]}),ae&&m&&B.jsxs("section",{className:"tactical-panel",id:"shuttle-calibration-panel","aria-label":"中心完美点穿梭校准",children:[B.jsxs("div",{className:"shuttle-mode-strip",children:[B.jsxs("div",{className:"tactical-title",children:[B.jsx("span",{className:"step-badge",children:"二"}),"中心校准"]}),!m.shuttleLocked&&B.jsx("button",{id:"btn-back-style",className:"reselect-btn",title:"重选主罚方式（制表键）","aria-label":"重选主罚方式（制表键）",onClick:()=>{var j;return(j=u.current)==null?void 0:j.backToStyleSelect()},children:"重选"})]}),B.jsx("div",{className:"shuttle-badges",children:z.arrowsEnabled?B.jsx("span",{className:"rule-tag",children:"方向键瞄准 · 空格定格"}):B.jsx("span",{className:`rule-tag locked-center ${m.arrowBlockedFlash?"flash-warn":""}`,children:m.arrowBlockedFlash?"方向无效 · 固定中路":"固定中路 · 空格定格"})}),B.jsxs("div",{className:"shuttle-bar-wrap",children:[B.jsxs("div",{className:"shuttle-track",id:"shuttle-track",children:[B.jsx("div",{className:"shuttle-good-zone",style:{left:`${X}%`,width:`${J}%`}}),B.jsx("div",{className:"shuttle-perfect-zone",style:{left:`${G}%`,width:`${O}%`}}),B.jsx("div",{className:"shuttle-center-pin"}),B.jsx("div",{ref:v,id:"shuttle-orb",className:`shuttle-orb ${m.shuttleLocked?`locked ${m.shuttleGrade??""}`:""}`,style:{left:`${((m.shuttlePos+1)*50).toFixed(2)}%`}})]}),B.jsx("div",{className:"shuttle-scale-row",children:B.jsx("span",{className:"center-lbl",children:"▲ 对准中心按空格"})})]}),m.shuttleLocked&&m.shuttleGrade&&B.jsx("div",{className:`shuttle-result-callout ${m.shuttleGrade}`,children:m.shuttleGrade==="perfect"?"完美定格中心点！":m.shuttleGrade==="good"?"接近中心点 · 射门已锁定":"偏离中心 · 留意球路"})]}),m&&B.jsxs("div",{className:"bottom-hud",children:[B.jsxs("div",{className:"duel-box",children:[B.jsxs("div",{className:"duel-row",children:[B.jsx("span",{children:"主罚射手"}),B.jsxs("strong",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[B.jsx("img",{src:m.shooter.avatar,alt:m.shooter.name,className:"gk-mini-avatar"}),m.shooter.name]}),B.jsx("span",{children:m.shooter.foot==="L"?"左脚":"右脚"})]}),B.jsxs("div",{className:"duel-row",children:[B.jsx("span",{children:"把守球门"}),B.jsxs("strong",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[B.jsx("img",{src:m.keeper.avatar,alt:m.keeper.name,className:"gk-mini-avatar"}),m.keeper.name]})]}),m.keeperIntuition&&B.jsx("div",{className:"intuition-tip",children:m.keeperIntuition})]}),B.jsx("div",{className:"status-pill",children:m.statusHint}),B.jsxs("div",{className:"keycluster-box",children:[B.jsx("div",{className:"keycluster-label",children:m.turnSide==="cpu"?B.jsxs(B.Fragment,{children:[B.jsx("strong",{children:"门将键盘操控"}),B.jsx("span",{children:Pb(m.committedDive)})]}):m.phase==="user_select"?B.jsxs(B.Fragment,{children:[B.jsx("strong",{children:"选方式"}),B.jsx("span",{children:"1–4 · 空格"})]}):z.arrowsEnabled?B.jsxs(B.Fragment,{children:[B.jsx("strong",{children:"射手键盘操控"}),B.jsx("span",{children:"方向键瞄准 · 空格定格"})]}):B.jsxs(B.Fragment,{children:[B.jsx("strong",{children:"勺子中路锁定"}),B.jsx("span",{children:"方向键无效 · 空格定格"})]})}),B.jsxs("div",{className:"dpad-grid","aria-hidden":"true",children:[B.jsx("span",{}),B.jsx("span",{className:`keycap ${m.activeArrows.up?"lit":""}`,children:"↑"}),B.jsx("span",{}),B.jsx("span",{className:`keycap ${m.activeArrows.left?"lit":""}`,children:"←"}),B.jsx("span",{className:`keycap ${m.activeArrows.down?"lit":""}`,children:"↓"}),B.jsx("span",{className:`keycap ${m.activeArrows.right?"lit":""}`,children:"→"})]})]})]}),(m==null?void 0:m.phase)==="over"&&d&&B.jsx("div",{className:"over-modal",children:B.jsxs("div",{className:"over-card",children:[B.jsx("h2",{children:m.bannerTitle}),B.jsx("div",{style:{color:"var(--text-secondary)",fontSize:14},children:m.statusHint}),B.jsxs("div",{className:"action-stack",style:{justifyContent:"center",marginTop:6},children:[B.jsx("button",{id:"btn-rematch",className:"btn btn-primary",onClick:()=>S(d.userGK.id,d.userTeam.map(j=>j.id)),children:"同阵容再战"}),m.canReplay&&B.jsx("button",{id:"btn-over-replay",className:"btn",onClick:()=>{var j;return(j=u.current)==null?void 0:j.toggleReplay()},children:"制胜球慢镜 (R)"}),B.jsx("button",{id:"btn-over-reselect",className:"btn",onClick:()=>e("select"),children:"重新组建阵容"})]})]})})]}),B.jsxs("section",{className:"match-sheets",children:[q("user"),q("cpu")]})]})}l_(document.getElementById("root")).render(B.jsx(Cb,{}));
