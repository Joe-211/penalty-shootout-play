(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var K0={exports:{}},kc={},j0={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),ux=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),dx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),mx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),_x=Symbol.for("react.memo"),xx=Symbol.for("react.lazy"),Ep=Symbol.iterator;function yx(n){return n===null||typeof n!="object"?null:(n=Ep&&n[Ep]||n["@@iterator"],typeof n=="function"?n:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,Q0={};function ma(n,e,t){this.props=n,this.context=e,this.refs=Q0,this.updater=t||Z0}ma.prototype.isReactComponent={};ma.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ma.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function eg(){}eg.prototype=ma.prototype;function Jf(n,e,t){this.props=n,this.context=e,this.refs=Q0,this.updater=t||Z0}var Qf=Jf.prototype=new eg;Qf.constructor=Jf;J0(Qf,ma.prototype);Qf.isPureReactComponent=!0;var bp=Array.isArray,tg=Object.prototype.hasOwnProperty,ed={current:null},ng={key:!0,ref:!0,__self:!0,__source:!0};function ig(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)tg.call(e,i)&&!ng.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ao,type:n,key:s,ref:a,props:r,_owner:ed.current}}function Sx(n,e){return{$$typeof:Ao,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function td(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ao}function Mx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ap=/\/+/g;function ru(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Mx(""+n.key):e.toString(36)}function Pl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Ao:case ux:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+ru(a,0):i,bp(r)?(t="",n!=null&&(t=n.replace(Ap,"$&/")+"/"),Pl(r,e,t,"",function(c){return c})):r!=null&&(td(r)&&(r=Sx(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ap,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",bp(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+ru(s,o);a+=Pl(s,e,t,l,r)}else if(l=yx(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+ru(s,o++),a+=Pl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Uo(n,e,t){if(n==null)return n;var i=[],r=0;return Pl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function wx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var En={current:null},Cl={transition:null},Tx={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:ed};function rg(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Uo,forEach:function(n,e,t){Uo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Uo(n,function(){e++}),e},toArray:function(n){return Uo(n,function(e){return e})||[]},only:function(n){if(!td(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=ma;Ke.Fragment=hx;Ke.Profiler=dx;Ke.PureComponent=Jf;Ke.StrictMode=fx;Ke.Suspense=vx;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;Ke.act=rg;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=J0({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ed.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)tg.call(e,l)&&!ng.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ao,type:n.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(n){return n={$$typeof:mx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:px,_context:n},n.Consumer=n};Ke.createElement=ig;Ke.createFactory=function(n){var e=ig.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:gx,render:n}};Ke.isValidElement=td;Ke.lazy=function(n){return{$$typeof:xx,_payload:{_status:-1,_result:n},_init:wx}};Ke.memo=function(n,e){return{$$typeof:_x,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=Cl.transition;Cl.transition={};try{n()}finally{Cl.transition=e}};Ke.unstable_act=rg;Ke.useCallback=function(n,e){return En.current.useCallback(n,e)};Ke.useContext=function(n){return En.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return En.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return En.current.useEffect(n,e)};Ke.useId=function(){return En.current.useId()};Ke.useImperativeHandle=function(n,e,t){return En.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return En.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return En.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return En.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return En.current.useReducer(n,e,t)};Ke.useRef=function(n){return En.current.useRef(n)};Ke.useState=function(n){return En.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return En.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return En.current.useTransition()};Ke.version="18.3.1";j0.exports=Ke;var yn=j0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex=yn,bx=Symbol.for("react.element"),Ax=Symbol.for("react.fragment"),Rx=Object.prototype.hasOwnProperty,Px=Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cx={key:!0,ref:!0,__self:!0,__source:!0};function sg(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Rx.call(e,i)&&!Cx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bx,type:n,key:s,ref:a,props:r,_owner:Px.current}}kc.Fragment=Ax;kc.jsx=sg;kc.jsxs=sg;K0.exports=kc;var V=K0.exports,ag={exports:{}},Vn={},og={exports:{}},lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(k,U){var G=k.length;k.push(U);e:for(;0<G;){var K=G-1>>>1,re=k[K];if(0<r(re,U))k[K]=U,k[G]=re,G=K;else break e}}function t(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var U=k[0],G=k.pop();if(G!==U){k[0]=G;e:for(var K=0,re=k.length,Te=re>>>1;K<Te;){var j=2*(K+1)-1,le=k[j],ce=j+1,we=k[ce];if(0>r(le,G))ce<re&&0>r(we,le)?(k[K]=we,k[ce]=G,K=ce):(k[K]=le,k[j]=G,K=j);else if(ce<re&&0>r(we,G))k[K]=we,k[ce]=G,K=ce;else break e}}return U}function r(k,U){var G=k.sortIndex-U.sortIndex;return G!==0?G:k.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,d=3,p=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var U=t(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=k)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=t(c)}}function S(k){if(_=!1,y(k),!v)if(t(l)!==null)v=!0,X(b);else{var U=t(c);U!==null&&D(S,U.startTime-k)}}function b(k,U){v=!1,_&&(_=!1,h(M),M=-1),p=!0;var G=d;try{for(y(U),f=t(l);f!==null&&(!(f.expirationTime>U)||k&&!L());){var K=f.callback;if(typeof K=="function"){f.callback=null,d=f.priorityLevel;var re=K(f.expirationTime<=U);U=n.unstable_now(),typeof re=="function"?f.callback=re:f===t(l)&&i(l),y(U)}else i(l);f=t(l)}if(f!==null)var Te=!0;else{var j=t(c);j!==null&&D(S,j.startTime-U),Te=!1}return Te}finally{f=null,d=G,p=!1}}var T=!1,x=null,M=-1,N=5,A=-1;function L(){return!(n.unstable_now()-A<N)}function P(){if(x!==null){var k=n.unstable_now();A=k;var U=!0;try{U=x(!0,k)}finally{U?I():(T=!1,x=null)}}else T=!1}var I;if(typeof g=="function")I=function(){g(P)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,O=R.port2;R.port1.onmessage=P,I=function(){O.postMessage(null)}}else I=function(){m(P,0)};function X(k){x=k,T||(T=!0,I())}function D(k,U){M=m(function(){k(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,X(b))},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(k){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var G=d;d=U;try{return k()}finally{d=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(k,U){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var G=d;d=k;try{return U()}finally{d=G}},n.unstable_scheduleCallback=function(k,U,G){var K=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?K+G:K):G=K,k){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=G+re,k={id:u++,callback:U,priorityLevel:k,startTime:G,expirationTime:re,sortIndex:-1},G>K?(k.sortIndex=G,e(c,k),t(l)===null&&k===t(c)&&(_?(h(M),M=-1):_=!0,D(S,G-K))):(k.sortIndex=re,e(l,k),v||p||(v=!0,X(b))),k},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(k){var U=d;return function(){var G=d;d=U;try{return k.apply(this,arguments)}finally{d=G}}}})(lg);og.exports=lg;var Lx=og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx=yn,Hn=Lx;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cg=new Set,ro={};function us(n,e){ra(n,e),ra(n+"Capture",e)}function ra(n,e){for(ro[n]=e,n=0;n<e.length;n++)cg.add(e[n])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mh=Object.prototype.hasOwnProperty,Nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rp={},Pp={};function Ix(n){return mh.call(Pp,n)?!0:mh.call(Rp,n)?!1:Nx.test(n)?Pp[n]=!0:(Rp[n]=!0,!1)}function Ux(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function kx(n,e,t,i){if(e===null||typeof e>"u"||Ux(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var on={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){on[n]=new bn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];on[e]=new bn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){on[n]=new bn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){on[n]=new bn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){on[n]=new bn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){on[n]=new bn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){on[n]=new bn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){on[n]=new bn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){on[n]=new bn(n,5,!1,n.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function id(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(nd,id);on[e]=new bn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(nd,id);on[e]=new bn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(nd,id);on[e]=new bn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){on[n]=new bn(n,1,!1,n.toLowerCase(),null,!1,!1)});on.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){on[n]=new bn(n,1,!1,n.toLowerCase(),null,!0,!0)});function rd(n,e,t,i){var r=on.hasOwnProperty(e)?on[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kx(e,t,r,i)&&(t=null),i||r===null?Ix(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var tr=Dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Os=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),ug=Symbol.for("react.provider"),hg=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),_h=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),fg=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function Ma(n){return n===null||typeof n!="object"?null:(n=Cp&&n[Cp]||n["@@iterator"],typeof n=="function"?n:null)}var Nt=Object.assign,su;function Ga(n){if(su===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+n}var au=!1;function ou(n,e){if(!n||au)return"";au=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{au=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ga(n):""}function Fx(n){switch(n.tag){case 5:return Ga(n.type);case 16:return Ga("Lazy");case 13:return Ga("Suspense");case 19:return Ga("SuspenseList");case 0:case 2:case 15:return n=ou(n.type,!1),n;case 11:return n=ou(n.type.render,!1),n;case 1:return n=ou(n.type,!0),n;default:return""}}function xh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case zs:return"Fragment";case Os:return"Portal";case gh:return"Profiler";case sd:return"StrictMode";case vh:return"Suspense";case _h:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case hg:return(n.displayName||"Context")+".Consumer";case ug:return(n._context.displayName||"Context")+".Provider";case ad:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case od:return e=n.displayName||null,e!==null?e:xh(n.type)||"Memo";case hr:e=n._payload,n=n._init;try{return xh(n(e))}catch{}}return null}function Ox(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xh(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function dg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zx(n){var e=dg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Fo(n){n._valueTracker||(n._valueTracker=zx(n))}function pg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=dg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function $l(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yh(n,e){var t=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Lp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Lr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mg(n,e){e=e.checked,e!=null&&rd(n,"checked",e,!1)}function Sh(n,e){mg(n,e);var t=Lr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Mh(n,e.type,t):e.hasOwnProperty("defaultValue")&&Mh(n,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Dp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Mh(n,e,t){(e!=="number"||$l(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ha=Array.isArray;function js(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Lr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function wh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Np(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(Ha(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Lr(t)}}function gg(n,e){var t=Lr(e.value),i=Lr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Ip(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function vg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Th(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?vg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Oo,_g=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function so(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bx=["Webkit","ms","Moz","O"];Object.keys(Ya).forEach(function(n){Bx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ya[e]=Ya[n]})});function xg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ya.hasOwnProperty(n)&&Ya[n]?(""+e).trim():e+"px"}function yg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=xg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Gx=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eh(n,e){if(e){if(Gx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function bh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=null;function ld(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rh=null,Zs=null,Js=null;function Up(n){if(n=Co(n)){if(typeof Rh!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=Gc(e),Rh(n.stateNode,n.type,e))}}function Sg(n){Zs?Js?Js.push(n):Js=[n]:Zs=n}function Mg(){if(Zs){var n=Zs,e=Js;if(Js=Zs=null,Up(n),e)for(n=0;n<e.length;n++)Up(e[n])}}function wg(n,e){return n(e)}function Tg(){}var lu=!1;function Eg(n,e,t){if(lu)return n(e,t);lu=!0;try{return wg(n,e,t)}finally{lu=!1,(Zs!==null||Js!==null)&&(Tg(),Mg())}}function ao(n,e){var t=n.stateNode;if(t===null)return null;var i=Gc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var Ph=!1;if(Zi)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{Ph=!1}function Hx(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var $a=!1,Kl=null,jl=!1,Ch=null,Vx={onError:function(n){$a=!0,Kl=n}};function Wx(n,e,t,i,r,s,a,o,l){$a=!1,Kl=null,Hx.apply(Vx,arguments)}function Xx(n,e,t,i,r,s,a,o,l){if(Wx.apply(this,arguments),$a){if($a){var c=Kl;$a=!1,Kl=null}else throw Error(ae(198));jl||(jl=!0,Ch=c)}}function hs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function bg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function kp(n){if(hs(n)!==n)throw Error(ae(188))}function qx(n){var e=n.alternate;if(!e){if(e=hs(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return kp(r),n;if(s===i)return kp(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function Ag(n){return n=qx(n),n!==null?Rg(n):null}function Rg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Rg(n);if(e!==null)return e;n=n.sibling}return null}var Pg=Hn.unstable_scheduleCallback,Fp=Hn.unstable_cancelCallback,Yx=Hn.unstable_shouldYield,$x=Hn.unstable_requestPaint,Ft=Hn.unstable_now,Kx=Hn.unstable_getCurrentPriorityLevel,cd=Hn.unstable_ImmediatePriority,Cg=Hn.unstable_UserBlockingPriority,Zl=Hn.unstable_NormalPriority,jx=Hn.unstable_LowPriority,Lg=Hn.unstable_IdlePriority,Fc=null,Ci=null;function Zx(n){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(Fc,n,void 0,(n.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:e1,Jx=Math.log,Qx=Math.LN2;function e1(n){return n>>>=0,n===0?32:31-(Jx(n)/Qx|0)|0}var zo=64,Bo=4194304;function Va(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Jl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Va(o):(s&=a,s!==0&&(i=Va(s)))}else a=t&~r,a!==0?i=Va(a):s!==0&&(i=Va(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-vi(e),r=1<<t,i|=n[t],e&=~r;return i}function t1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-vi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=t1(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Lh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dg(){var n=zo;return zo<<=1,!(zo&4194240)&&(zo=64),n}function cu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ro(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-vi(e),n[e]=t}function i1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-vi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ud(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-vi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var dt=0;function Ng(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ig,hd,Ug,kg,Fg,Dh=!1,Go=[],wr=null,Tr=null,Er=null,oo=new Map,lo=new Map,mr=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(n,e){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Ta(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Co(e),e!==null&&hd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function s1(n,e,t,i,r){switch(e){case"focusin":return wr=Ta(wr,n,e,t,i,r),!0;case"dragenter":return Tr=Ta(Tr,n,e,t,i,r),!0;case"mouseover":return Er=Ta(Er,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,Ta(oo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Ta(lo.get(s)||null,n,e,t,i,r)),!0}return!1}function Og(n){var e=Zr(n.target);if(e!==null){var t=hs(e);if(t!==null){if(e=t.tag,e===13){if(e=bg(t),e!==null){n.blockedOn=e,Fg(n.priority,function(){Ug(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ll(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Nh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ah=i,t.target.dispatchEvent(i),Ah=null}else return e=Co(t),e!==null&&hd(e),n.blockedOn=t,!1;e.shift()}return!0}function zp(n,e,t){Ll(n)&&t.delete(e)}function a1(){Dh=!1,wr!==null&&Ll(wr)&&(wr=null),Tr!==null&&Ll(Tr)&&(Tr=null),Er!==null&&Ll(Er)&&(Er=null),oo.forEach(zp),lo.forEach(zp)}function Ea(n,e){n.blockedOn===e&&(n.blockedOn=null,Dh||(Dh=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,a1)))}function co(n){function e(r){return Ea(r,n)}if(0<Go.length){Ea(Go[0],n);for(var t=1;t<Go.length;t++){var i=Go[t];i.blockedOn===n&&(i.blockedOn=null)}}for(wr!==null&&Ea(wr,n),Tr!==null&&Ea(Tr,n),Er!==null&&Ea(Er,n),oo.forEach(e),lo.forEach(e),t=0;t<mr.length;t++)i=mr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<mr.length&&(t=mr[0],t.blockedOn===null);)Og(t),t.blockedOn===null&&mr.shift()}var Qs=tr.ReactCurrentBatchConfig,Ql=!0;function o1(n,e,t,i){var r=dt,s=Qs.transition;Qs.transition=null;try{dt=1,fd(n,e,t,i)}finally{dt=r,Qs.transition=s}}function l1(n,e,t,i){var r=dt,s=Qs.transition;Qs.transition=null;try{dt=4,fd(n,e,t,i)}finally{dt=r,Qs.transition=s}}function fd(n,e,t,i){if(Ql){var r=Nh(n,e,t,i);if(r===null)xu(n,e,i,ec,t),Op(n,i);else if(s1(r,n,e,t,i))i.stopPropagation();else if(Op(n,i),e&4&&-1<r1.indexOf(n)){for(;r!==null;){var s=Co(r);if(s!==null&&Ig(s),s=Nh(n,e,t,i),s===null&&xu(n,e,i,ec,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(n,e,i,null,t)}}var ec=null;function Nh(n,e,t,i){if(ec=null,n=ld(i),n=Zr(n),n!==null)if(e=hs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=bg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ec=n,null}function zg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kx()){case cd:return 1;case Cg:return 4;case Zl:case jx:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var _r=null,dd=null,Dl=null;function Bg(){if(Dl)return Dl;var n,e=dd,t=e.length,i,r="value"in _r?_r.value:_r.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Dl=r.slice(n,1<i?1-i:void 0)}function Nl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function Bp(){return!1}function Wn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:Bp,this.isPropagationStopped=Bp,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=Wn(ga),Po=Nt({},ga,{view:0,detail:0}),c1=Wn(Po),uu,hu,ba,Oc=Nt({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ba&&(ba&&n.type==="mousemove"?(uu=n.screenX-ba.screenX,hu=n.screenY-ba.screenY):hu=uu=0,ba=n),uu)},movementY:function(n){return"movementY"in n?n.movementY:hu}}),Gp=Wn(Oc),u1=Nt({},Oc,{dataTransfer:0}),h1=Wn(u1),f1=Nt({},Po,{relatedTarget:0}),fu=Wn(f1),d1=Nt({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=Wn(d1),m1=Nt({},ga,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),g1=Wn(m1),v1=Nt({},ga,{data:0}),Hp=Wn(v1),_1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=y1[n])?!!e[n]:!1}function md(){return S1}var M1=Nt({},Po,{key:function(n){if(n.key){var e=_1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?x1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(n){return n.type==="keypress"?Nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),w1=Wn(M1),T1=Nt({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Wn(T1),E1=Nt({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),b1=Wn(E1),A1=Nt({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=Wn(A1),P1=Nt({},Oc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),C1=Wn(P1),L1=[9,13,27,32],gd=Zi&&"CompositionEvent"in window,Ka=null;Zi&&"documentMode"in document&&(Ka=document.documentMode);var D1=Zi&&"TextEvent"in window&&!Ka,Gg=Zi&&(!gd||Ka&&8<Ka&&11>=Ka),Wp=" ",Xp=!1;function Hg(n,e){switch(n){case"keyup":return L1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function N1(n,e){switch(n){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:(Xp=!0,Wp);case"textInput":return n=e.data,n===Wp&&Xp?null:n;default:return null}}function I1(n,e){if(Bs)return n==="compositionend"||!gd&&Hg(n,e)?(n=Bg(),Dl=dd=_r=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gg&&e.locale!=="ko"?null:e.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!U1[n.type]:e==="textarea"}function Wg(n,e,t,i){Sg(i),e=tc(e,"onChange"),0<e.length&&(t=new pd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ja=null,uo=null;function k1(n){tv(n,0)}function zc(n){var e=Vs(n);if(pg(e))return n}function F1(n,e){if(n==="change")return e}var Xg=!1;if(Zi){var du;if(Zi){var pu="oninput"in document;if(!pu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),pu=typeof Yp.oninput=="function"}du=pu}else du=!1;Xg=du&&(!document.documentMode||9<document.documentMode)}function $p(){ja&&(ja.detachEvent("onpropertychange",qg),uo=ja=null)}function qg(n){if(n.propertyName==="value"&&zc(uo)){var e=[];Wg(e,uo,n,ld(n)),Eg(k1,e)}}function O1(n,e,t){n==="focusin"?($p(),ja=e,uo=t,ja.attachEvent("onpropertychange",qg)):n==="focusout"&&$p()}function z1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zc(uo)}function B1(n,e){if(n==="click")return zc(e)}function G1(n,e){if(n==="input"||n==="change")return zc(e)}function H1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var xi=typeof Object.is=="function"?Object.is:H1;function ho(n,e){if(xi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!mh.call(e,r)||!xi(n[r],e[r]))return!1}return!0}function Kp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jp(n,e){var t=Kp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Kp(t)}}function Yg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Yg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $g(){for(var n=window,e=$l();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=$l(n.document)}return e}function vd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function V1(n){var e=$g(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Yg(t.ownerDocument.documentElement,t)){if(i!==null&&vd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=jp(t,s);var a=jp(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var W1=Zi&&"documentMode"in document&&11>=document.documentMode,Gs=null,Ih=null,Za=null,Uh=!1;function Zp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Uh||Gs==null||Gs!==$l(i)||(i=Gs,"selectionStart"in i&&vd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Za&&ho(Za,i)||(Za=i,i=tc(Ih,"onSelect"),0<i.length&&(e=new pd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Gs)))}function Vo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Hs={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},mu={},Kg={};Zi&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Bc(n){if(mu[n])return mu[n];if(!Hs[n])return n;var e=Hs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Kg)return mu[n]=e[t];return n}var jg=Bc("animationend"),Zg=Bc("animationiteration"),Jg=Bc("animationstart"),Qg=Bc("transitionend"),ev=new Map,Jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,e){ev.set(n,e),us(e,[n])}for(var gu=0;gu<Jp.length;gu++){var vu=Jp[gu],X1=vu.toLowerCase(),q1=vu[0].toUpperCase()+vu.slice(1);Ir(X1,"on"+q1)}Ir(jg,"onAnimationEnd");Ir(Zg,"onAnimationIteration");Ir(Jg,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Qg,"onTransitionEnd");ra("onMouseEnter",["mouseout","mouseover"]);ra("onMouseLeave",["mouseout","mouseover"]);ra("onPointerEnter",["pointerout","pointerover"]);ra("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function Qp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Xx(i,e,void 0,n),n.currentTarget=null}function tv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Qp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Qp(r,o,c),s=l}}}if(jl)throw n=Ch,jl=!1,Ch=null,n}function yt(n,e){var t=e[Bh];t===void 0&&(t=e[Bh]=new Set);var i=n+"__bubble";t.has(i)||(nv(e,n,2,!1),t.add(i))}function _u(n,e,t){var i=0;e&&(i|=4),nv(t,n,i,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function fo(n){if(!n[Wo]){n[Wo]=!0,cg.forEach(function(t){t!=="selectionchange"&&(Y1.has(t)||_u(t,!1,n),_u(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,_u("selectionchange",!1,e))}}function nv(n,e,t,i){switch(zg(e)){case 1:var r=o1;break;case 4:r=l1;break;default:r=fd}t=r.bind(null,e,t,n),r=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function xu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Zr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Eg(function(){var c=s,u=ld(t),f=[];e:{var d=ev.get(n);if(d!==void 0){var p=pd,v=n;switch(n){case"keypress":if(Nl(t)===0)break e;case"keydown":case"keyup":p=w1;break;case"focusin":v="focus",p=fu;break;case"focusout":v="blur",p=fu;break;case"beforeblur":case"afterblur":p=fu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=h1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=b1;break;case jg:case Zg:case Jg:p=p1;break;case Qg:p=R1;break;case"scroll":p=c1;break;case"wheel":p=C1;break;case"copy":case"cut":case"paste":p=g1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vp}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var g=c,y;g!==null;){y=g;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=ao(g,h),S!=null&&_.push(po(g,S,y)))),m)break;g=g.return}0<_.length&&(d=new p(d,v,null,t,u),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Ah&&(v=t.relatedTarget||t.fromElement)&&(Zr(v)||v[Ji]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Zr(v):null,v!==null&&(m=hs(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=Gp,S="onMouseLeave",h="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=Vp,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?d:Vs(p),y=v==null?d:Vs(v),d=new _(S,g+"leave",p,t,u),d.target=m,d.relatedTarget=y,S=null,Zr(u)===c&&(_=new _(h,g+"enter",v,t,u),_.target=y,_.relatedTarget=m,S=_),m=S,p&&v)t:{for(_=p,h=v,g=0,y=_;y;y=gs(y))g++;for(y=0,S=h;S;S=gs(S))y++;for(;0<g-y;)_=gs(_),g--;for(;0<y-g;)h=gs(h),y--;for(;g--;){if(_===h||h!==null&&_===h.alternate)break t;_=gs(_),h=gs(h)}_=null}else _=null;p!==null&&em(f,d,p,_,!1),v!==null&&m!==null&&em(f,m,v,_,!0)}}e:{if(d=c?Vs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=F1;else if(qp(d))if(Xg)b=G1;else{b=z1;var T=O1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=B1);if(b&&(b=b(n,c))){Wg(f,b,t,u);break e}T&&T(n,d,c),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Mh(d,"number",d.value)}switch(T=c?Vs(c):window,n){case"focusin":(qp(T)||T.contentEditable==="true")&&(Gs=T,Ih=c,Za=null);break;case"focusout":Za=Ih=Gs=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,Zp(f,t,u);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":Zp(f,t,u)}var x;if(gd)e:{switch(n){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Bs?Hg(n,t)&&(M="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(Gg&&t.locale!=="ko"&&(Bs||M!=="onCompositionStart"?M==="onCompositionEnd"&&Bs&&(x=Bg()):(_r=u,dd="value"in _r?_r.value:_r.textContent,Bs=!0)),T=tc(c,M),0<T.length&&(M=new Hp(M,n,null,t,u),f.push({event:M,listeners:T}),x?M.data=x:(x=Vg(t),x!==null&&(M.data=x)))),(x=D1?N1(n,t):I1(n,t))&&(c=tc(c,"onBeforeInput"),0<c.length&&(u=new Hp("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=x))}tv(f,e)})}function po(n,e,t){return{instance:n,listener:e,currentTarget:t}}function tc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ao(n,t),s!=null&&i.unshift(po(n,s,r)),s=ao(n,e),s!=null&&i.push(po(n,s,r))),n=n.return}return i}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function em(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ao(t,s),l!=null&&a.unshift(po(t,l,o))):r||(l=ao(t,s),l!=null&&a.push(po(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var $1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function tm(n){return(typeof n=="string"?n:""+n).replace($1,`
`).replace(K1,"")}function Xo(n,e,t){if(e=tm(e),tm(n)!==e&&t)throw Error(ae(425))}function nc(){}var kh=null,Fh=null;function Oh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=typeof setTimeout=="function"?setTimeout:void 0,j1=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,Z1=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(n){return nm.resolve(null).then(n).catch(J1)}:zh;function J1(n){setTimeout(function(){throw n})}function yu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),co(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);co(e)}function br(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function im(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var va=Math.random().toString(36).slice(2),Ai="__reactFiber$"+va,mo="__reactProps$"+va,Ji="__reactContainer$"+va,Bh="__reactEvents$"+va,Q1="__reactListeners$"+va,ey="__reactHandles$"+va;function Zr(n){var e=n[Ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ji]||t[Ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=im(n);n!==null;){if(t=n[Ai])return t;n=im(n)}return e}n=t,t=n.parentNode}return null}function Co(n){return n=n[Ai]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function Gc(n){return n[mo]||null}var Gh=[],Ws=-1;function Ur(n){return{current:n}}function wt(n){0>Ws||(n.current=Gh[Ws],Gh[Ws]=null,Ws--)}function xt(n,e){Ws++,Gh[Ws]=n.current,n.current=e}var Dr={},vn=Ur(Dr),Cn=Ur(!1),ns=Dr;function sa(n,e){var t=n.type.contextTypes;if(!t)return Dr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Ln(n){return n=n.childContextTypes,n!=null}function ic(){wt(Cn),wt(vn)}function rm(n,e,t){if(vn.current!==Dr)throw Error(ae(168));xt(vn,e),xt(Cn,t)}function iv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Ox(n)||"Unknown",r));return Nt({},t,i)}function rc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,ns=vn.current,xt(vn,n),xt(Cn,Cn.current),!0}function sm(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=iv(n,e,ns),i.__reactInternalMemoizedMergedChildContext=n,wt(Cn),wt(vn),xt(vn,n)):wt(Cn),xt(Cn,t)}var Vi=null,Hc=!1,Su=!1;function rv(n){Vi===null?Vi=[n]:Vi.push(n)}function ty(n){Hc=!0,rv(n)}function kr(){if(!Su&&Vi!==null){Su=!0;var n=0,e=dt;try{var t=Vi;for(dt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Vi=null,Hc=!1}catch(r){throw Vi!==null&&(Vi=Vi.slice(n+1)),Pg(cd,kr),r}finally{dt=e,Su=!1}}return null}var Xs=[],qs=0,sc=null,ac=0,Jn=[],Qn=0,is=null,Xi=1,qi="";function qr(n,e){Xs[qs++]=ac,Xs[qs++]=sc,sc=n,ac=e}function sv(n,e,t){Jn[Qn++]=Xi,Jn[Qn++]=qi,Jn[Qn++]=is,is=n;var i=Xi;n=qi;var r=32-vi(i)-1;i&=~(1<<r),t+=1;var s=32-vi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Xi=1<<32-vi(e)+r|t<<r|i,qi=s+n}else Xi=1<<s|t<<r|i,qi=n}function _d(n){n.return!==null&&(qr(n,1),sv(n,1,0))}function xd(n){for(;n===sc;)sc=Xs[--qs],Xs[qs]=null,ac=Xs[--qs],Xs[qs]=null;for(;n===is;)is=Jn[--Qn],Jn[Qn]=null,qi=Jn[--Qn],Jn[Qn]=null,Xi=Jn[--Qn],Jn[Qn]=null}var Gn=null,Bn=null,bt=!1,fi=null;function av(n,e){var t=ti(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function am(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Gn=n,Bn=br(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Gn=n,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=is!==null?{id:Xi,overflow:qi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ti(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Gn=n,Bn=null,!0):!1;default:return!1}}function Hh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vh(n){if(bt){var e=Bn;if(e){var t=e;if(!am(n,e)){if(Hh(n))throw Error(ae(418));e=br(t.nextSibling);var i=Gn;e&&am(n,e)?av(i,t):(n.flags=n.flags&-4097|2,bt=!1,Gn=n)}}else{if(Hh(n))throw Error(ae(418));n.flags=n.flags&-4097|2,bt=!1,Gn=n}}}function om(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function qo(n){if(n!==Gn)return!1;if(!bt)return om(n),bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Oh(n.type,n.memoizedProps)),e&&(e=Bn)){if(Hh(n))throw ov(),Error(ae(418));for(;e;)av(n,e),e=br(e.nextSibling)}if(om(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Bn=br(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Bn=null}}else Bn=Gn?br(n.stateNode.nextSibling):null;return!0}function ov(){for(var n=Bn;n;)n=br(n.nextSibling)}function aa(){Bn=Gn=null,bt=!1}function yd(n){fi===null?fi=[n]:fi.push(n)}var ny=tr.ReactCurrentBatchConfig;function Aa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function Yo(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function lm(n){var e=n._init;return e(n._payload)}function lv(n){function e(h,g){if(n){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function t(h,g){if(!n)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Cr(h,g),h.index=0,h.sibling=null,h}function s(h,g,y){return h.index=y,n?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,g,y,S){return g===null||g.tag!==6?(g=Ru(y,h.mode,S),g.return=h,g):(g=r(g,y),g.return=h,g)}function l(h,g,y,S){var b=y.type;return b===zs?u(h,g,y.props.children,S,y.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===hr&&lm(b)===g.type)?(S=r(g,y.props),S.ref=Aa(h,g,y),S.return=h,S):(S=Bl(y.type,y.key,y.props,null,h.mode,S),S.ref=Aa(h,g,y),S.return=h,S)}function c(h,g,y,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Pu(y,h.mode,S),g.return=h,g):(g=r(g,y.children||[]),g.return=h,g)}function u(h,g,y,S,b){return g===null||g.tag!==7?(g=ts(y,h.mode,S,b),g.return=h,g):(g=r(g,y),g.return=h,g)}function f(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ru(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:return y=Bl(g.type,g.key,g.props,null,h.mode,y),y.ref=Aa(h,null,g),y.return=h,y;case Os:return g=Pu(g,h.mode,y),g.return=h,g;case hr:var S=g._init;return f(h,S(g._payload),y)}if(Ha(g)||Ma(g))return g=ts(g,h.mode,y,null),g.return=h,g;Yo(h,g)}return null}function d(h,g,y,S){var b=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:o(h,g,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:return y.key===b?l(h,g,y,S):null;case Os:return y.key===b?c(h,g,y,S):null;case hr:return b=y._init,d(h,g,b(y._payload),S)}if(Ha(y)||Ma(y))return b!==null?null:u(h,g,y,S,null);Yo(h,y)}return null}function p(h,g,y,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,o(g,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ko:return h=h.get(S.key===null?y:S.key)||null,l(g,h,S,b);case Os:return h=h.get(S.key===null?y:S.key)||null,c(g,h,S,b);case hr:var T=S._init;return p(h,g,y,T(S._payload),b)}if(Ha(S)||Ma(S))return h=h.get(y)||null,u(g,h,S,b,null);Yo(g,S)}return null}function v(h,g,y,S){for(var b=null,T=null,x=g,M=g=0,N=null;x!==null&&M<y.length;M++){x.index>M?(N=x,x=null):N=x.sibling;var A=d(h,x,y[M],S);if(A===null){x===null&&(x=N);break}n&&x&&A.alternate===null&&e(h,x),g=s(A,g,M),T===null?b=A:T.sibling=A,T=A,x=N}if(M===y.length)return t(h,x),bt&&qr(h,M),b;if(x===null){for(;M<y.length;M++)x=f(h,y[M],S),x!==null&&(g=s(x,g,M),T===null?b=x:T.sibling=x,T=x);return bt&&qr(h,M),b}for(x=i(h,x);M<y.length;M++)N=p(x,h,M,y[M],S),N!==null&&(n&&N.alternate!==null&&x.delete(N.key===null?M:N.key),g=s(N,g,M),T===null?b=N:T.sibling=N,T=N);return n&&x.forEach(function(L){return e(h,L)}),bt&&qr(h,M),b}function _(h,g,y,S){var b=Ma(y);if(typeof b!="function")throw Error(ae(150));if(y=b.call(y),y==null)throw Error(ae(151));for(var T=b=null,x=g,M=g=0,N=null,A=y.next();x!==null&&!A.done;M++,A=y.next()){x.index>M?(N=x,x=null):N=x.sibling;var L=d(h,x,A.value,S);if(L===null){x===null&&(x=N);break}n&&x&&L.alternate===null&&e(h,x),g=s(L,g,M),T===null?b=L:T.sibling=L,T=L,x=N}if(A.done)return t(h,x),bt&&qr(h,M),b;if(x===null){for(;!A.done;M++,A=y.next())A=f(h,A.value,S),A!==null&&(g=s(A,g,M),T===null?b=A:T.sibling=A,T=A);return bt&&qr(h,M),b}for(x=i(h,x);!A.done;M++,A=y.next())A=p(x,h,M,A.value,S),A!==null&&(n&&A.alternate!==null&&x.delete(A.key===null?M:A.key),g=s(A,g,M),T===null?b=A:T.sibling=A,T=A);return n&&x.forEach(function(P){return e(h,P)}),bt&&qr(h,M),b}function m(h,g,y,S){if(typeof y=="object"&&y!==null&&y.type===zs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:e:{for(var b=y.key,T=g;T!==null;){if(T.key===b){if(b=y.type,b===zs){if(T.tag===7){t(h,T.sibling),g=r(T,y.props.children),g.return=h,h=g;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===hr&&lm(b)===T.type){t(h,T.sibling),g=r(T,y.props),g.ref=Aa(h,T,y),g.return=h,h=g;break e}t(h,T);break}else e(h,T);T=T.sibling}y.type===zs?(g=ts(y.props.children,h.mode,S,y.key),g.return=h,h=g):(S=Bl(y.type,y.key,y.props,null,h.mode,S),S.ref=Aa(h,g,y),S.return=h,h=S)}return a(h);case Os:e:{for(T=y.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(h,g.sibling),g=r(g,y.children||[]),g.return=h,h=g;break e}else{t(h,g);break}else e(h,g);g=g.sibling}g=Pu(y,h.mode,S),g.return=h,h=g}return a(h);case hr:return T=y._init,m(h,g,T(y._payload),S)}if(Ha(y))return v(h,g,y,S);if(Ma(y))return _(h,g,y,S);Yo(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(h,g.sibling),g=r(g,y),g.return=h,h=g):(t(h,g),g=Ru(y,h.mode,S),g.return=h,h=g),a(h)):t(h,g)}return m}var oa=lv(!0),cv=lv(!1),oc=Ur(null),lc=null,Ys=null,Sd=null;function Md(){Sd=Ys=lc=null}function wd(n){var e=oc.current;wt(oc),n._currentValue=e}function Wh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ea(n,e){lc=n,Sd=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Rn=!0),n.firstContext=null)}function ii(n){var e=n._currentValue;if(Sd!==n)if(n={context:n,memoizedValue:e,next:null},Ys===null){if(lc===null)throw Error(ae(308));Ys=n,lc.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return e}var Jr=null;function Td(n){Jr===null?Jr=[n]:Jr.push(n)}function uv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Td(e)):(t.next=r.next,r.next=t),e.interleaved=t,Qi(n,i)}function Qi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var fr=!1;function Ed(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function $i(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(n,t)}return r=i.interleaved,r===null?(e.next=e,Td(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(n,t)}function Il(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ud(n,t)}}function cm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function cc(n,e,t,i){var r=n.updateQueue;fr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=n,_=o;switch(d=e,p=t,_.tag){case 1:if(v=_.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=Nt({},f,d);break e;case 2:fr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=a,n.lanes=a,n.memoizedState=f}}function um(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Lo={},Li=Ur(Lo),go=Ur(Lo),vo=Ur(Lo);function Qr(n){if(n===Lo)throw Error(ae(174));return n}function bd(n,e){switch(xt(vo,e),xt(go,n),xt(Li,Lo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Th(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Th(e,n)}wt(Li),xt(Li,e)}function la(){wt(Li),wt(go),wt(vo)}function fv(n){Qr(vo.current);var e=Qr(Li.current),t=Th(e,n.type);e!==t&&(xt(go,n),xt(Li,t))}function Ad(n){go.current===n&&(wt(Li),wt(go))}var Pt=Ur(0);function uc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function Rd(){for(var n=0;n<Mu.length;n++)Mu[n]._workInProgressVersionPrimary=null;Mu.length=0}var Ul=tr.ReactCurrentDispatcher,wu=tr.ReactCurrentBatchConfig,rs=0,Lt=null,Wt=null,Jt=null,hc=!1,Ja=!1,_o=0,iy=0;function un(){throw Error(ae(321))}function Pd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!xi(n[t],e[t]))return!1;return!0}function Cd(n,e,t,i,r,s){if(rs=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=n===null||n.memoizedState===null?oy:ly,n=t(i,r),Ja){s=0;do{if(Ja=!1,_o=0,25<=s)throw Error(ae(301));s+=1,Jt=Wt=null,e.updateQueue=null,Ul.current=cy,n=t(i,r)}while(Ja)}if(Ul.current=fc,e=Wt!==null&&Wt.next!==null,rs=0,Jt=Wt=Lt=null,hc=!1,e)throw Error(ae(300));return n}function Ld(){var n=_o!==0;return _o=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Lt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function ri(){if(Wt===null){var n=Lt.alternate;n=n!==null?n.memoizedState:null}else n=Wt.next;var e=Jt===null?Lt.memoizedState:Jt.next;if(e!==null)Jt=e,Wt=n;else{if(n===null)throw Error(ae(310));Wt=n,n={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Jt===null?Lt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function xo(n,e){return typeof e=="function"?e(n):e}function Tu(n){var e=ri(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=Wt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((rs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Lt.lanes|=u,ss|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,xi(i,e.memoizedState)||(Rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Lt.lanes|=s,ss|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Eu(n){var e=ri(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);xi(s,e.memoizedState)||(Rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function dv(){}function pv(n,e){var t=Lt,i=ri(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,Rn=!0),i=i.queue,Dd(vv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Jt!==null&&Jt.memoizedState.tag&1){if(t.flags|=2048,yo(9,gv.bind(null,t,i,r,e),void 0,null),en===null)throw Error(ae(349));rs&30||mv(t,e,r)}return r}function mv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function gv(n,e,t,i){e.value=t,e.getSnapshot=i,_v(e)&&xv(n)}function vv(n,e,t){return t(function(){_v(e)&&xv(n)})}function _v(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!xi(n,t)}catch{return!0}}function xv(n){var e=Qi(n,1);e!==null&&_i(e,n,1,-1)}function hm(n){var e=Ti();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:n},e.queue=n,n=n.dispatch=ay.bind(null,Lt,n),[e.memoizedState,n]}function yo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function yv(){return ri().memoizedState}function kl(n,e,t,i){var r=Ti();Lt.flags|=n,r.memoizedState=yo(1|e,t,void 0,i===void 0?null:i)}function Vc(n,e,t,i){var r=ri();i=i===void 0?null:i;var s=void 0;if(Wt!==null){var a=Wt.memoizedState;if(s=a.destroy,i!==null&&Pd(i,a.deps)){r.memoizedState=yo(e,t,s,i);return}}Lt.flags|=n,r.memoizedState=yo(1|e,t,s,i)}function fm(n,e){return kl(8390656,8,n,e)}function Dd(n,e){return Vc(2048,8,n,e)}function Sv(n,e){return Vc(4,2,n,e)}function Mv(n,e){return Vc(4,4,n,e)}function wv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Tv(n,e,t){return t=t!=null?t.concat([n]):null,Vc(4,4,wv.bind(null,e,n),t)}function Nd(){}function Ev(n,e){var t=ri();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Pd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function bv(n,e){var t=ri();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Pd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Av(n,e,t){return rs&21?(xi(t,e)||(t=Dg(),Lt.lanes|=t,ss|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=t)}function ry(n,e){var t=dt;dt=t!==0&&4>t?t:4,n(!0);var i=wu.transition;wu.transition={};try{n(!1),e()}finally{dt=t,wu.transition=i}}function Rv(){return ri().memoizedState}function sy(n,e,t){var i=Pr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Pv(n))Cv(e,t);else if(t=uv(n,e,t,i),t!==null){var r=Tn();_i(t,n,i,r),Lv(t,e,i)}}function ay(n,e,t){var i=Pr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pv(n))Cv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,xi(o,a)){var l=e.interleaved;l===null?(r.next=r,Td(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=uv(n,e,r,i),t!==null&&(r=Tn(),_i(t,n,i,r),Lv(t,e,i))}}function Pv(n){var e=n.alternate;return n===Lt||e!==null&&e===Lt}function Cv(n,e){Ja=hc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Lv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ud(n,t)}}var fc={readContext:ii,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},oy={readContext:ii,useCallback:function(n,e){return Ti().memoizedState=[n,e===void 0?null:e],n},useContext:ii,useEffect:fm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,kl(4194308,4,wv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return kl(4194308,4,n,e)},useInsertionEffect:function(n,e){return kl(4,2,n,e)},useMemo:function(n,e){var t=Ti();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ti();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=sy.bind(null,Lt,n),[i.memoizedState,n]},useRef:function(n){var e=Ti();return n={current:n},e.memoizedState=n},useState:hm,useDebugValue:Nd,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=hm(!1),e=n[0];return n=ry.bind(null,n[1]),Ti().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Lt,r=Ti();if(bt){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),en===null)throw Error(ae(349));rs&30||mv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,fm(vv.bind(null,i,s,n),[n]),i.flags|=2048,yo(9,gv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ti(),e=en.identifierPrefix;if(bt){var t=qi,i=Xi;t=(i&~(1<<32-vi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=_o++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=iy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ly={readContext:ii,useCallback:Ev,useContext:ii,useEffect:Dd,useImperativeHandle:Tv,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:bv,useReducer:Tu,useRef:yv,useState:function(){return Tu(xo)},useDebugValue:Nd,useDeferredValue:function(n){var e=ri();return Av(e,Wt.memoizedState,n)},useTransition:function(){var n=Tu(xo)[0],e=ri().memoizedState;return[n,e]},useMutableSource:dv,useSyncExternalStore:pv,useId:Rv,unstable_isNewReconciler:!1},cy={readContext:ii,useCallback:Ev,useContext:ii,useEffect:Dd,useImperativeHandle:Tv,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:bv,useReducer:Eu,useRef:yv,useState:function(){return Eu(xo)},useDebugValue:Nd,useDeferredValue:function(n){var e=ri();return Wt===null?e.memoizedState=n:Av(e,Wt.memoizedState,n)},useTransition:function(){var n=Eu(xo)[0],e=ri().memoizedState;return[n,e]},useMutableSource:dv,useSyncExternalStore:pv,useId:Rv,unstable_isNewReconciler:!1};function ui(n,e){if(n&&n.defaultProps){e=Nt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Xh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Nt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Wc={isMounted:function(n){return(n=n._reactInternals)?hs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Tn(),r=Pr(n),s=$i(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(_i(e,n,r,i),Il(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Tn(),r=Pr(n),s=$i(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(_i(e,n,r,i),Il(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Tn(),i=Pr(n),r=$i(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(n,r,i),e!==null&&(_i(e,n,i,t),Il(e,n,i))}};function dm(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ho(t,i)||!ho(r,s):!0}function Dv(n,e,t){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=ii(s):(r=Ln(e)?ns:vn.current,i=e.contextTypes,s=(i=i!=null)?sa(n,r):Dr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function pm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Wc.enqueueReplaceState(e,e.state,null)}function qh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ed(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ii(s):(s=Ln(e)?ns:vn.current,r.context=sa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wc.enqueueReplaceState(r,r.state,null),cc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ca(n,e){try{var t="",i=e;do t+=Fx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function bu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Yh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var uy=typeof WeakMap=="function"?WeakMap:Map;function Nv(n,e,t){t=$i(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){pc||(pc=!0,rf=i),Yh(n,e)},t}function Iv(n,e,t){t=$i(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Yh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Yh(n,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function mm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new uy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Ty.bind(null,n,e,t),e.then(n,n))}function gm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function vm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=$i(-1,1),e.tag=2,Ar(t,e,1))),t.lanes|=1),n)}var hy=tr.ReactCurrentOwner,Rn=!1;function Mn(n,e,t,i){e.child=n===null?cv(e,null,t,i):oa(e,n.child,t,i)}function _m(n,e,t,i,r){t=t.render;var s=e.ref;return ea(e,r),i=Cd(n,e,t,i,s,r),t=Ld(),n!==null&&!Rn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,er(n,e,r)):(bt&&t&&_d(e),e.flags|=1,Mn(n,e,i,r),e.child)}function xm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Gd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Uv(n,e,s,i,r)):(n=Bl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:ho,t(a,i)&&n.ref===e.ref)return er(n,e,r)}return e.flags|=1,n=Cr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Uv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ho(s,i)&&n.ref===e.ref)if(Rn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Rn=!0);else return e.lanes=n.lanes,er(n,e,r)}return $h(n,e,t,i,r)}function kv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Ks,Fn),Fn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,xt(Ks,Fn),Fn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,xt(Ks,Fn),Fn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,xt(Ks,Fn),Fn|=i;return Mn(n,e,r,t),e.child}function Fv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function $h(n,e,t,i,r){var s=Ln(t)?ns:vn.current;return s=sa(e,s),ea(e,r),t=Cd(n,e,t,i,s,r),i=Ld(),n!==null&&!Rn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,er(n,e,r)):(bt&&i&&_d(e),e.flags|=1,Mn(n,e,t,r),e.child)}function ym(n,e,t,i,r){if(Ln(t)){var s=!0;rc(e)}else s=!1;if(ea(e,r),e.stateNode===null)Fl(n,e),Dv(e,t,i),qh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=ii(c):(c=Ln(t)?ns:vn.current,c=sa(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&pm(e,a,i,c),fr=!1;var d=e.memoizedState;a.state=d,cc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Cn.current||fr?(typeof u=="function"&&(Xh(e,t,u,i),l=e.memoizedState),(o=fr||dm(e,t,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,hv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:ui(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ii(l):(l=Ln(t)?ns:vn.current,l=sa(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&pm(e,a,i,l),fr=!1,d=e.memoizedState,a.state=d,cc(e,i,a,r);var v=e.memoizedState;o!==f||d!==v||Cn.current||fr?(typeof p=="function"&&(Xh(e,t,p,i),v=e.memoizedState),(c=fr||dm(e,t,c,i,d,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Kh(n,e,t,i,s,r)}function Kh(n,e,t,i,r,s){Fv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&sm(e,t,!1),er(n,e,s);i=e.stateNode,hy.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=oa(e,n.child,null,s),e.child=oa(e,null,o,s)):Mn(n,e,o,s),e.memoizedState=i.state,r&&sm(e,t,!0),e.child}function Ov(n){var e=n.stateNode;e.pendingContext?rm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&rm(n,e.context,!1),bd(n,e.containerInfo)}function Sm(n,e,t,i,r){return aa(),yd(r),e.flags|=256,Mn(n,e,t,i),e.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function zv(n,e,t){var i=e.pendingProps,r=Pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),xt(Pt,r&1),n===null)return Vh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Yc(a,i,0,null),n=ts(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Zh(t),e.memoizedState=jh,n):Id(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return fy(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Cr(o,s):(s=ts(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Zh(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=jh,i}return s=n.child,n=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Id(n,e){return e=Yc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function $o(n,e,t,i){return i!==null&&yd(i),oa(e,n.child,null,t),n=Id(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function fy(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=bu(Error(ae(422))),$o(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yc({mode:"visible",children:i.children},r,0,null),s=ts(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oa(e,n.child,null,a),e.child.memoizedState=Zh(a),e.memoizedState=jh,s);if(!(e.mode&1))return $o(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=bu(s,i,void 0),$o(n,e,a,i)}if(o=(a&n.childLanes)!==0,Rn||o){if(i=en,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(n,r),_i(i,n,r,-1))}return Bd(),i=bu(Error(ae(421))),$o(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Ey.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Bn=br(r.nextSibling),Gn=e,bt=!0,fi=null,n!==null&&(Jn[Qn++]=Xi,Jn[Qn++]=qi,Jn[Qn++]=is,Xi=n.id,qi=n.overflow,is=e),e=Id(e,i.children),e.flags|=4096,e)}function Mm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Wh(n.return,e,t)}function Au(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Bv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Mn(n,e,i.children,t),i=Pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mm(n,t,e);else if(n.tag===19)Mm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(xt(Pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&uc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Au(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&uc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Au(e,!0,t,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function er(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ss|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=Cr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Cr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function dy(n,e,t){switch(e.tag){case 3:Ov(e),aa();break;case 5:fv(e);break;case 1:Ln(e.type)&&rc(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Pt,Pt.current&1),e.flags|=128,null):t&e.child.childLanes?zv(n,e,t):(xt(Pt,Pt.current&1),n=er(n,e,t),n!==null?n.sibling:null);xt(Pt,Pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Bv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,kv(n,e,t)}return er(n,e,t)}var Gv,Jh,Hv,Vv;Gv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Jh=function(){};Hv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Qr(Li.current);var s=null;switch(t){case"input":r=yh(n,r),i=yh(n,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=wh(n,r),i=wh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=nc)}Eh(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Vv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ra(n,e){if(!bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function hn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function py(n,e,t){var i=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(e),null;case 1:return Ln(e.type)&&ic(),hn(e),null;case 3:return i=e.stateNode,la(),wt(Cn),wt(vn),Rd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(qo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fi!==null&&(of(fi),fi=null))),Jh(n,e),hn(e),null;case 5:Ad(e);var r=Qr(vo.current);if(t=e.type,n!==null&&e.stateNode!=null)Hv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return hn(e),null}if(n=Qr(Li.current),qo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[mo]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Wa.length;r++)yt(Wa[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Lp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Np(i,s),yt("invalid",i)}Eh(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,o,n),r=["children",""+o]):ro.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(t){case"input":Fo(i),Dp(i,s,!0);break;case"textarea":Fo(i),Ip(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=vg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ai]=e,n[mo]=i,Gv(n,e,!1,!1),e.stateNode=n;e:{switch(a=bh(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Wa.length;r++)yt(Wa[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":Lp(n,i),r=yh(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),yt("invalid",n);break;case"textarea":Np(n,i),r=wh(n,i),yt("invalid",n);break;default:r=i}Eh(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?yg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_g(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&so(n,l):typeof l=="number"&&so(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&rd(n,s,l,a))}switch(t){case"input":Fo(n),Dp(n,i,!1);break;case"textarea":Fo(n),Ip(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Lr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?js(n,!!i.multiple,s,!1):i.defaultValue!=null&&js(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=nc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return hn(e),null;case 6:if(n&&e.stateNode!=null)Vv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=Qr(vo.current),Qr(Li.current),qo(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==t)&&(n=Gn,n!==null))switch(n.tag){case 3:Xo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return hn(e),null;case 13:if(wt(Pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&Bn!==null&&e.mode&1&&!(e.flags&128))ov(),aa(),e.flags|=98560,s=!1;else if(s=qo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Ai]=e}else aa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;hn(e),s=!1}else fi!==null&&(of(fi),fi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Pt.current&1?Xt===0&&(Xt=3):Bd())),e.updateQueue!==null&&(e.flags|=4),hn(e),null);case 4:return la(),Jh(n,e),n===null&&fo(e.stateNode.containerInfo),hn(e),null;case 10:return wd(e.type._context),hn(e),null;case 17:return Ln(e.type)&&ic(),hn(e),null;case 19:if(wt(Pt),s=e.memoizedState,s===null)return hn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ra(s,!1);else{if(Xt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=uc(n),a!==null){for(e.flags|=128,Ra(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return xt(Pt,Pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ft()>ua&&(e.flags|=128,i=!0,Ra(s,!1),e.lanes=4194304)}else{if(!i)if(n=uc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!bt)return hn(e),null}else 2*Ft()-s.renderingStartTime>ua&&t!==1073741824&&(e.flags|=128,i=!0,Ra(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,t=Pt.current,xt(Pt,i?t&1|2:t&1),e):(hn(e),null);case 22:case 23:return zd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(hn(e),e.subtreeFlags&6&&(e.flags|=8192)):hn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function my(n,e){switch(xd(e),e.tag){case 1:return Ln(e.type)&&ic(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return la(),wt(Cn),wt(vn),Rd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(wt(Pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));aa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return wt(Pt),null;case 4:return la(),null;case 10:return wd(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var Ko=!1,gn=!1,gy=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function $s(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ut(n,e,i)}else t.current=null}function Qh(n,e,t){try{t()}catch(i){Ut(n,e,i)}}var wm=!1;function vy(n,e){if(kh=Ql,n=$g(),vd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fh={focusedElem:n,selectionRange:t},Ql=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:ui(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Ut(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return v=wm,wm=!1,v}function Qa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qh(e,t,s)}r=r.next}while(r!==i)}}function Xc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ef(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Wv(n){var e=n.alternate;e!==null&&(n.alternate=null,Wv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ai],delete e[mo],delete e[Bh],delete e[Q1],delete e[ey])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xv(n){return n.tag===5||n.tag===3||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function tf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(n=n.child,n!==null))for(tf(n,e,t),n=n.sibling;n!==null;)tf(n,e,t),n=n.sibling}function nf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(nf(n,e,t),n=n.sibling;n!==null;)nf(n,e,t),n=n.sibling}var nn=null,hi=!1;function sr(n,e,t){for(t=t.child;t!==null;)qv(n,e,t),t=t.sibling}function qv(n,e,t){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(Fc,t)}catch{}switch(t.tag){case 5:gn||$s(t,e);case 6:var i=nn,r=hi;nn=null,sr(n,e,t),nn=i,hi=r,nn!==null&&(hi?(n=nn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):nn.removeChild(t.stateNode));break;case 18:nn!==null&&(hi?(n=nn,t=t.stateNode,n.nodeType===8?yu(n.parentNode,t):n.nodeType===1&&yu(n,t),co(n)):yu(nn,t.stateNode));break;case 4:i=nn,r=hi,nn=t.stateNode.containerInfo,hi=!0,sr(n,e,t),nn=i,hi=r;break;case 0:case 11:case 14:case 15:if(!gn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qh(t,e,a),r=r.next}while(r!==i)}sr(n,e,t);break;case 1:if(!gn&&($s(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Ut(t,e,o)}sr(n,e,t);break;case 21:sr(n,e,t);break;case 22:t.mode&1?(gn=(i=gn)||t.memoizedState!==null,sr(n,e,t),gn=i):sr(n,e,t);break;default:sr(n,e,t)}}function Em(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new gy),e.forEach(function(i){var r=by.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ai(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:nn=o.stateNode,hi=!1;break e;case 3:nn=o.stateNode.containerInfo,hi=!0;break e;case 4:nn=o.stateNode.containerInfo,hi=!0;break e}o=o.return}if(nn===null)throw Error(ae(160));qv(s,a,r),nn=null,hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yv(e,n),e=e.sibling}function Yv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(e,n),Si(n),i&4){try{Qa(3,n,n.return),Xc(3,n)}catch(_){Ut(n,n.return,_)}try{Qa(5,n,n.return)}catch(_){Ut(n,n.return,_)}}break;case 1:ai(e,n),Si(n),i&512&&t!==null&&$s(t,t.return);break;case 5:if(ai(e,n),Si(n),i&512&&t!==null&&$s(t,t.return),n.flags&32){var r=n.stateNode;try{so(r,"")}catch(_){Ut(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&mg(r,s),bh(o,a);var c=bh(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?yg(r,f):u==="dangerouslySetInnerHTML"?_g(r,f):u==="children"?so(r,f):rd(r,u,f,c)}switch(o){case"input":Sh(r,s);break;case"textarea":gg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(_){Ut(n,n.return,_)}}break;case 6:if(ai(e,n),Si(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Ut(n,n.return,_)}}break;case 3:if(ai(e,n),Si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(_){Ut(n,n.return,_)}break;case 4:ai(e,n),Si(n);break;case 13:ai(e,n),Si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fd=Ft())),i&4&&Em(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(gn=(c=gn)||u,ai(e,n),gn=c):ai(e,n),Si(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ee=n,u=n.child;u!==null;){for(f=Ee=u;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:Qa(4,d,d.return);break;case 1:$s(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ut(i,t,_)}}break;case 5:$s(d,d.return);break;case 22:if(d.memoizedState!==null){Am(f);continue}}p!==null?(p.return=d,Ee=p):Am(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=xg("display",a))}catch(_){Ut(n,n.return,_)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){Ut(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ai(e,n),Si(n),i&4&&Em(n);break;case 21:break;default:ai(e,n),Si(n)}}function Si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Xv(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=Tm(n);nf(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Tm(n);tf(n,o,a);break;default:throw Error(ae(161))}}catch(l){Ut(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function _y(n,e,t){Ee=n,$v(n)}function $v(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ko;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||gn;o=Ko;var c=gn;if(Ko=a,(gn=l)&&!c)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?Rm(r):l!==null?(l.return=a,Ee=l):Rm(r);for(;s!==null;)Ee=s,$v(s),s=s.sibling;Ee=r,Ko=o,gn=c}bm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):bm(n)}}function bm(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gn||Xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!gn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ui(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&um(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}um(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&co(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}gn||e.flags&512&&ef(e)}catch(d){Ut(e,e.return,d)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function Am(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function Rm(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Xc(4,e)}catch(l){Ut(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ut(e,r,l)}}var s=e.return;try{ef(e)}catch(l){Ut(e,s,l)}break;case 5:var a=e.return;try{ef(e)}catch(l){Ut(e,a,l)}}}catch(l){Ut(e,e.return,l)}if(e===n){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var xy=Math.ceil,dc=tr.ReactCurrentDispatcher,Ud=tr.ReactCurrentOwner,ni=tr.ReactCurrentBatchConfig,tt=0,en=null,Gt=null,sn=0,Fn=0,Ks=Ur(0),Xt=0,So=null,ss=0,qc=0,kd=0,eo=null,An=null,Fd=0,ua=1/0,Hi=null,pc=!1,rf=null,Rr=null,jo=!1,xr=null,mc=0,to=0,sf=null,Ol=-1,zl=0;function Tn(){return tt&6?Ft():Ol!==-1?Ol:Ol=Ft()}function Pr(n){return n.mode&1?tt&2&&sn!==0?sn&-sn:ny.transition!==null?(zl===0&&(zl=Dg()),zl):(n=dt,n!==0||(n=window.event,n=n===void 0?16:zg(n.type)),n):1}function _i(n,e,t,i){if(50<to)throw to=0,sf=null,Error(ae(185));Ro(n,t,i),(!(tt&2)||n!==en)&&(n===en&&(!(tt&2)&&(qc|=t),Xt===4&&gr(n,sn)),Dn(n,i),t===1&&tt===0&&!(e.mode&1)&&(ua=Ft()+500,Hc&&kr()))}function Dn(n,e){var t=n.callbackNode;n1(n,e);var i=Jl(n,n===en?sn:0);if(i===0)t!==null&&Fp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Fp(t),e===1)n.tag===0?ty(Pm.bind(null,n)):rv(Pm.bind(null,n)),Z1(function(){!(tt&6)&&kr()}),t=null;else{switch(Ng(i)){case 1:t=cd;break;case 4:t=Cg;break;case 16:t=Zl;break;case 536870912:t=Lg;break;default:t=Zl}t=n_(t,Kv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Kv(n,e){if(Ol=-1,zl=0,tt&6)throw Error(ae(327));var t=n.callbackNode;if(ta()&&n.callbackNode!==t)return null;var i=Jl(n,n===en?sn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=gc(n,i);else{e=i;var r=tt;tt|=2;var s=Zv();(en!==n||sn!==e)&&(Hi=null,ua=Ft()+500,es(n,e));do try{My();break}catch(o){jv(n,o)}while(!0);Md(),dc.current=s,tt=r,Gt!==null?e=0:(en=null,sn=0,e=Xt)}if(e!==0){if(e===2&&(r=Lh(n),r!==0&&(i=r,e=af(n,r))),e===1)throw t=So,es(n,0),gr(n,i),Dn(n,Ft()),t;if(e===6)gr(n,i);else{if(r=n.current.alternate,!(i&30)&&!yy(r)&&(e=gc(n,i),e===2&&(s=Lh(n),s!==0&&(i=s,e=af(n,s))),e===1))throw t=So,es(n,0),gr(n,i),Dn(n,Ft()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Yr(n,An,Hi);break;case 3:if(gr(n,i),(i&130023424)===i&&(e=Fd+500-Ft(),10<e)){if(Jl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Tn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=zh(Yr.bind(null,n,An,Hi),e);break}Yr(n,An,Hi);break;case 4:if(gr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-vi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xy(i/1960))-i,10<i){n.timeoutHandle=zh(Yr.bind(null,n,An,Hi),i);break}Yr(n,An,Hi);break;case 5:Yr(n,An,Hi);break;default:throw Error(ae(329))}}}return Dn(n,Ft()),n.callbackNode===t?Kv.bind(null,n):null}function af(n,e){var t=eo;return n.current.memoizedState.isDehydrated&&(es(n,e).flags|=256),n=gc(n,e),n!==2&&(e=An,An=t,e!==null&&of(e)),n}function of(n){An===null?An=n:An.push.apply(An,n)}function yy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(n,e){for(e&=~kd,e&=~qc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-vi(e),i=1<<t;n[t]=-1,e&=~i}}function Pm(n){if(tt&6)throw Error(ae(327));ta();var e=Jl(n,0);if(!(e&1))return Dn(n,Ft()),null;var t=gc(n,e);if(n.tag!==0&&t===2){var i=Lh(n);i!==0&&(e=i,t=af(n,i))}if(t===1)throw t=So,es(n,0),gr(n,e),Dn(n,Ft()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Yr(n,An,Hi),Dn(n,Ft()),null}function Od(n,e){var t=tt;tt|=1;try{return n(e)}finally{tt=t,tt===0&&(ua=Ft()+500,Hc&&kr())}}function as(n){xr!==null&&xr.tag===0&&!(tt&6)&&ta();var e=tt;tt|=1;var t=ni.transition,i=dt;try{if(ni.transition=null,dt=1,n)return n()}finally{dt=i,ni.transition=t,tt=e,!(tt&6)&&kr()}}function zd(){Fn=Ks.current,wt(Ks)}function es(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,j1(t)),Gt!==null)for(t=Gt.return;t!==null;){var i=t;switch(xd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:la(),wt(Cn),wt(vn),Rd();break;case 5:Ad(i);break;case 4:la();break;case 13:wt(Pt);break;case 19:wt(Pt);break;case 10:wd(i.type._context);break;case 22:case 23:zd()}t=t.return}if(en=n,Gt=n=Cr(n.current,null),sn=Fn=e,Xt=0,So=null,kd=qc=ss=0,An=eo=null,Jr!==null){for(e=0;e<Jr.length;e++)if(t=Jr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Jr=null}return n}function jv(n,e){do{var t=Gt;try{if(Md(),Ul.current=fc,hc){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hc=!1}if(rs=0,Jt=Wt=Lt=null,Ja=!1,_o=0,Ud.current=null,t===null||t.return===null){Xt=1,So=e,Gt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=sn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=gm(a);if(p!==null){p.flags&=-257,vm(p,a,o,s,e),p.mode&1&&mm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){mm(s,c,e),Bd();break e}l=Error(ae(426))}}else if(bt&&o.mode&1){var m=gm(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),vm(m,a,o,s,e),yd(ca(l,o));break e}}s=l=ca(l,o),Xt!==4&&(Xt=2),eo===null?eo=[s]:eo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Nv(s,l,e);cm(s,h);break e;case 1:o=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Rr===null||!Rr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Iv(s,o,e);cm(s,S);break e}}s=s.return}while(s!==null)}Qv(t)}catch(b){e=b,Gt===t&&t!==null&&(Gt=t=t.return);continue}break}while(!0)}function Zv(){var n=dc.current;return dc.current=fc,n===null?fc:n}function Bd(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),en===null||!(ss&268435455)&&!(qc&268435455)||gr(en,sn)}function gc(n,e){var t=tt;tt|=2;var i=Zv();(en!==n||sn!==e)&&(Hi=null,es(n,e));do try{Sy();break}catch(r){jv(n,r)}while(!0);if(Md(),tt=t,dc.current=i,Gt!==null)throw Error(ae(261));return en=null,sn=0,Xt}function Sy(){for(;Gt!==null;)Jv(Gt)}function My(){for(;Gt!==null&&!Yx();)Jv(Gt)}function Jv(n){var e=t_(n.alternate,n,Fn);n.memoizedProps=n.pendingProps,e===null?Qv(n):Gt=e,Ud.current=null}function Qv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=my(t,e),t!==null){t.flags&=32767,Gt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Xt=6,Gt=null;return}}else if(t=py(t,e,Fn),t!==null){Gt=t;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=n}while(e!==null);Xt===0&&(Xt=5)}function Yr(n,e,t){var i=dt,r=ni.transition;try{ni.transition=null,dt=1,wy(n,e,t,i)}finally{ni.transition=r,dt=i}return null}function wy(n,e,t,i){do ta();while(xr!==null);if(tt&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(i1(n,s),n===en&&(Gt=en=null,sn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jo||(jo=!0,n_(Zl,function(){return ta(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ni.transition,ni.transition=null;var a=dt;dt=1;var o=tt;tt|=4,Ud.current=null,vy(n,t),Yv(t,n),V1(Fh),Ql=!!kh,Fh=kh=null,n.current=t,_y(t),$x(),tt=o,dt=a,ni.transition=s}else n.current=t;if(jo&&(jo=!1,xr=n,mc=r),s=n.pendingLanes,s===0&&(Rr=null),Zx(t.stateNode),Dn(n,Ft()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,n=rf,rf=null,n;return mc&1&&n.tag!==0&&ta(),s=n.pendingLanes,s&1?n===sf?to++:(to=0,sf=n):to=0,kr(),null}function ta(){if(xr!==null){var n=Ng(mc),e=ni.transition,t=dt;try{if(ni.transition=null,dt=16>n?16:n,xr===null)var i=!1;else{if(n=xr,xr=null,mc=0,tt&6)throw Error(ae(331));var r=tt;for(tt|=4,Ee=n.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:Qa(8,u,s)}var f=u.child;if(f!==null)f.return=u,Ee=f;else for(;Ee!==null;){u=Ee;var d=u.sibling,p=u.return;if(Wv(u),u===c){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var g=n.current;for(Ee=g;Ee!==null;){a=Ee;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ee=y;else e:for(a=g;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xc(9,o)}}catch(b){Ut(o,o.return,b)}if(o===a){Ee=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ee=S;break e}Ee=o.return}}if(tt=r,kr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(Fc,n)}catch{}i=!0}return i}finally{dt=t,ni.transition=e}}return!1}function Cm(n,e,t){e=ca(t,e),e=Nv(n,e,1),n=Ar(n,e,1),e=Tn(),n!==null&&(Ro(n,1,e),Dn(n,e))}function Ut(n,e,t){if(n.tag===3)Cm(n,n,t);else for(;e!==null;){if(e.tag===3){Cm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){n=ca(t,n),n=Iv(e,n,1),e=Ar(e,n,1),n=Tn(),e!==null&&(Ro(e,1,n),Dn(e,n));break}}e=e.return}}function Ty(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Tn(),n.pingedLanes|=n.suspendedLanes&t,en===n&&(sn&t)===t&&(Xt===4||Xt===3&&(sn&130023424)===sn&&500>Ft()-Fd?es(n,0):kd|=t),Dn(n,e)}function e_(n,e){e===0&&(n.mode&1?(e=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):e=1);var t=Tn();n=Qi(n,e),n!==null&&(Ro(n,e,t),Dn(n,t))}function Ey(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),e_(n,t)}function by(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),e_(n,t)}var t_;t_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Cn.current)Rn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Rn=!1,dy(n,e,t);Rn=!!(n.flags&131072)}else Rn=!1,bt&&e.flags&1048576&&sv(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(n,e),n=e.pendingProps;var r=sa(e,vn.current);ea(e,t),r=Cd(null,e,i,n,r,t);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ed(e),r.updater=Wc,e.stateNode=r,r._reactInternals=e,qh(e,i,n,t),e=Kh(null,e,i,!0,s,t)):(e.tag=0,bt&&s&&_d(e),Mn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ry(i),n=ui(i,n),r){case 0:e=$h(null,e,i,n,t);break e;case 1:e=ym(null,e,i,n,t);break e;case 11:e=_m(null,e,i,n,t);break e;case 14:e=xm(null,e,i,ui(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),$h(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),ym(n,e,i,r,t);case 3:e:{if(Ov(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,hv(n,e),cc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ca(Error(ae(423)),e),e=Sm(n,e,i,t,r);break e}else if(i!==r){r=ca(Error(ae(424)),e),e=Sm(n,e,i,t,r);break e}else for(Bn=br(e.stateNode.containerInfo.firstChild),Gn=e,bt=!0,fi=null,t=cv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(aa(),i===r){e=er(n,e,t);break e}Mn(n,e,i,t)}e=e.child}return e;case 5:return fv(e),n===null&&Vh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Oh(i,r)?a=null:s!==null&&Oh(i,s)&&(e.flags|=32),Fv(n,e),Mn(n,e,a,t),e.child;case 6:return n===null&&Vh(e),null;case 13:return zv(n,e,t);case 4:return bd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=oa(e,null,i,t):Mn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),_m(n,e,i,r,t);case 7:return Mn(n,e,e.pendingProps,t),e.child;case 8:return Mn(n,e,e.pendingProps.children,t),e.child;case 12:return Mn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(oc,i._currentValue),i._currentValue=a,s!==null)if(xi(s.value,a)){if(s.children===r.children&&!Cn.current){e=er(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$i(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Wh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Wh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Mn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ea(e,t),r=ii(r),i=i(r),e.flags|=1,Mn(n,e,i,t),e.child;case 14:return i=e.type,r=ui(i,e.pendingProps),r=ui(i.type,r),xm(n,e,i,r,t);case 15:return Uv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Fl(n,e),e.tag=1,Ln(i)?(n=!0,rc(e)):n=!1,ea(e,t),Dv(e,i,r),qh(e,i,r,t),Kh(null,e,i,!0,n,t);case 19:return Bv(n,e,t);case 22:return kv(n,e,t)}throw Error(ae(156,e.tag))};function n_(n,e){return Pg(n,e)}function Ay(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,e,t,i){return new Ay(n,e,t,i)}function Gd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ry(n){if(typeof n=="function")return Gd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ad)return 11;if(n===od)return 14}return 2}function Cr(n,e){var t=n.alternate;return t===null?(t=ti(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Bl(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Gd(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case zs:return ts(t.children,r,s,e);case sd:a=8,r|=8;break;case gh:return n=ti(12,t,e,r|2),n.elementType=gh,n.lanes=s,n;case vh:return n=ti(13,t,e,r),n.elementType=vh,n.lanes=s,n;case _h:return n=ti(19,t,e,r),n.elementType=_h,n.lanes=s,n;case fg:return Yc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ug:a=10;break e;case hg:a=9;break e;case ad:a=11;break e;case od:a=14;break e;case hr:a=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=ti(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ts(n,e,t,i){return n=ti(7,n,i,e),n.lanes=t,n}function Yc(n,e,t,i){return n=ti(22,n,i,e),n.elementType=fg,n.lanes=t,n.stateNode={isHidden:!1},n}function Ru(n,e,t){return n=ti(6,n,null,e),n.lanes=t,n}function Pu(n,e,t){return e=ti(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Py(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hd(n,e,t,i,r,s,a,o,l){return n=new Py(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ti(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(s),n}function Cy(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function i_(n){if(!n)return Dr;n=n._reactInternals;e:{if(hs(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(Ln(t))return iv(n,t,e)}return e}function r_(n,e,t,i,r,s,a,o,l){return n=Hd(t,i,!0,n,r,s,a,o,l),n.context=i_(null),t=n.current,i=Tn(),r=Pr(t),s=$i(i,r),s.callback=e??null,Ar(t,s,r),n.current.lanes=r,Ro(n,r,i),Dn(n,i),n}function $c(n,e,t,i){var r=e.current,s=Tn(),a=Pr(r);return t=i_(t),e.context===null?e.context=t:e.pendingContext=t,e=$i(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ar(r,e,a),n!==null&&(_i(n,r,a,s),Il(n,r,a)),a}function vc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Vd(n,e){Lm(n,e),(n=n.alternate)&&Lm(n,e)}function Ly(){return null}var s_=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wd(n){this._internalRoot=n}Kc.prototype.render=Wd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));$c(n,e,null,null)};Kc.prototype.unmount=Wd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;as(function(){$c(null,n,null,null)}),e[Ji]=null}};function Kc(n){this._internalRoot=n}Kc.prototype.unstable_scheduleHydration=function(n){if(n){var e=kg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<mr.length&&e!==0&&e<mr[t].priority;t++);mr.splice(t,0,n),t===0&&Og(n)}};function Xd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function jc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function Dy(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=vc(a);s.call(c)}}var a=r_(e,i,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=a,n[Ji]=a.current,fo(n.nodeType===8?n.parentNode:n),as(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=vc(l);o.call(c)}}var l=Hd(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=l,n[Ji]=l.current,fo(n.nodeType===8?n.parentNode:n),as(function(){$c(e,l,t,i)}),l}function Zc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=vc(a);o.call(l)}}$c(e,a,n,r)}else a=Dy(t,e,n,r,i);return vc(a)}Ig=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Va(e.pendingLanes);t!==0&&(ud(e,t|1),Dn(e,Ft()),!(tt&6)&&(ua=Ft()+500,kr()))}break;case 13:as(function(){var i=Qi(n,1);if(i!==null){var r=Tn();_i(i,n,1,r)}}),Vd(n,1)}};hd=function(n){if(n.tag===13){var e=Qi(n,134217728);if(e!==null){var t=Tn();_i(e,n,134217728,t)}Vd(n,134217728)}};Ug=function(n){if(n.tag===13){var e=Pr(n),t=Qi(n,e);if(t!==null){var i=Tn();_i(t,n,e,i)}Vd(n,e)}};kg=function(){return dt};Fg=function(n,e){var t=dt;try{return dt=n,e()}finally{dt=t}};Rh=function(n,e,t){switch(e){case"input":if(Sh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Gc(i);if(!r)throw Error(ae(90));pg(i),Sh(i,r)}}}break;case"textarea":gg(n,t);break;case"select":e=t.value,e!=null&&js(n,!!t.multiple,e,!1)}};wg=Od;Tg=as;var Ny={usingClientEntryPoint:!1,Events:[Co,Vs,Gc,Sg,Mg,Od]},Pa={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iy={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ag(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||Ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Fc=Zo.inject(Iy),Ci=Zo}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;Vn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(ae(200));return Cy(n,e,null,t)};Vn.createRoot=function(n,e){if(!Xd(n))throw Error(ae(299));var t=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hd(n,1,!1,null,null,t,!1,i,r),n[Ji]=e.current,fo(n.nodeType===8?n.parentNode:n),new Wd(e)};Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=Ag(e),n=n===null?null:n.stateNode,n};Vn.flushSync=function(n){return as(n)};Vn.hydrate=function(n,e,t){if(!jc(e))throw Error(ae(200));return Zc(null,n,e,!0,t)};Vn.hydrateRoot=function(n,e,t){if(!Xd(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=s_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=r_(e,null,n,1,t??null,r,!1,s,a),n[Ji]=e.current,fo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Kc(e)};Vn.render=function(n,e,t){if(!jc(e))throw Error(ae(200));return Zc(null,n,e,!1,t)};Vn.unmountComponentAtNode=function(n){if(!jc(n))throw Error(ae(40));return n._reactRootContainer?(as(function(){Zc(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1};Vn.unstable_batchedUpdates=Od;Vn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!jc(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return Zc(n,e,t,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function a_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a_)}catch(n){console.error(n)}}a_(),ag.exports=Vn;var Uy=ag.exports,o_,Nm=Uy;o_=Nm.createRoot,Nm.hydrateRoot;class ky{constructor(){this.ctx=null,this.noiseBuf=null,this.crowdGain=null,this.crowdFilter=null,this.muted=!1}unlock(){if(!this.muted){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.buildNoiseBuffer(),this.startAmbience()}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}}toggleMute(){return this.muted=!this.muted,this.crowdGain&&this.ctx&&this.crowdGain.gain.setTargetAtTime(this.muted?0:.038,this.ctx.currentTime,.08),this.muted||this.unlock(),this.muted}buildNoiseBuffer(){if(!this.ctx)return;const e=this.ctx.sampleRate,t=e*3,i=this.ctx.createBuffer(1,t,e),r=i.getChannelData(0);let s=0,a=0,o=0;for(let l=0;l<t;l++){const c=Math.random()*2-1;s=.99765*s+c*.099046,a=.963*a+c*.2965164,o=.57*o+c*1.0526913,r[l]=(s+a+o+c*.1848)*.16}this.noiseBuf=i}startAmbience(){if(!this.ctx||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=480,t.Q.value=.65;const i=this.ctx.createGain();i.gain.value=this.muted?0:.038,e.connect(t),t.connect(i),i.connect(this.ctx.destination),e.start(),this.crowdFilter=t,this.crowdGain=i}setTension(e){if(!this.ctx||!this.crowdGain||!this.crowdFilter||this.muted)return;const t=this.ctx.currentTime,i=Math.max(0,Math.min(1,e));this.crowdGain.gain.setTargetAtTime(.034+i*.042,t,.18),this.crowdFilter.frequency.setTargetAtTime(460+i*340,t,.18)}whistle(){if(this.unlock(),!this.ctx||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createGain();t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(.11,e+.03),t.gain.setValueAtTime(.1,e+.34),t.gain.exponentialRampToValueAtTime(1e-4,e+.55),t.connect(this.ctx.destination);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=38,r.gain.value=45,i.connect(r);for(const s of[2790,3015]){const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,e),r.connect(a.frequency),a.connect(t),a.start(e),a.stop(e+.56)}i.start(e),i.stop(e+.56)}footstep(e=.7){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=.045*e,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(115,t),r.frequency.exponentialRampToValueAtTime(42,t+.065),s.gain.setValueAtTime(i,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.075),r.connect(s),s.connect(this.ctx.destination),r.start(t),r.stop(t+.08);const a=this.ctx.createBufferSource();a.buffer=this.noiseBuf;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1400;const l=this.ctx.createGain();l.gain.setValueAtTime(i*.45,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.05),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t,Math.random()*1.5,.06)}uiTick(e=520){if(this.unlock(),!this.ctx||this.muted)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,t),i.frequency.exponentialRampToValueAtTime(e*1.25,t+.04),r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.045),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.05)}shuttleLock(e){if(this.unlock(),!this.ctx||this.muted)return;const t=this.ctx.currentTime;if(e==="perfect")for(const[i,r]of[740,1110].entries()){const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(r,t+i*.035),a.gain.setValueAtTime(.11,t+i*.035),a.gain.exponentialRampToValueAtTime(1e-4,t+i*.035+.18),s.connect(a),a.connect(this.ctx.destination),s.start(t+i*.035),s.stop(t+i*.035+.19)}else if(e==="good"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(580,t),r.gain.setValueAtTime(.08,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.11),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.12)}else{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(190,t),i.frequency.exponentialRampToValueAtTime(110,t+.14),r.gain.setValueAtTime(.075,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.15),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.16)}}kick(e,t){if(this.unlock(),!this.ctx||!this.noiseBuf||this.muted)return;const i=this.ctx.currentTime,r=t==="panenka"?.38:t==="power"?Math.max(.85,Math.min(1.22,.78+e*.45)):Math.max(.55,Math.min(1.02,.58+e*.42)),s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t==="panenka"?135:155*r,i),s.frequency.exponentialRampToValueAtTime(36,i+.14),a.gain.setValueAtTime(.32*r,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.17),s.connect(a),a.connect(this.ctx.destination),s.start(i),s.stop(i+.18);const o=this.ctx.createBufferSource();o.buffer=this.noiseBuf;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=t==="placed"?820:t==="power"?1180:980,l.Q.value=1.3;const c=this.ctx.createGain();c.gain.setValueAtTime(.18*r,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.085),o.connect(l),l.connect(c),c.connect(this.ctx.destination),o.start(i,Math.random(),.1)}gloveSave(e=!0){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=e?1:.7,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(210,t),r.frequency.exponentialRampToValueAtTime(68,t+.09),s.gain.setValueAtTime(.2*i,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.1),r.connect(s),s.connect(this.ctx.destination),r.start(t),r.stop(t+.11);const a=this.ctx.createBufferSource();a.buffer=this.noiseBuf;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1650,o.Q.value=1.1;const l=this.ctx.createGain();l.gain.setValueAtTime(.16*i,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.08),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t,Math.random(),.09)}postClang(){if(!this.ctx||this.muted)return;const e=this.ctx.currentTime;[392,818,1285,1940].forEach((i,r)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type=r===0?"triangle":"sine",s.frequency.setValueAtTime(i,e),s.frequency.exponentialRampToValueAtTime(i*.985,e+.48),a.gain.setValueAtTime(.13/(r+1),e),a.gain.exponentialRampToValueAtTime(1e-4,e+.45-r*.06),s.connect(a),a.connect(this.ctx.destination),s.start(e),s.stop(e+.5)})}netSwish(){if(!this.ctx||!this.noiseBuf||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuf;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(1750,e),i.frequency.exponentialRampToValueAtTime(520,e+.28),i.Q.value=.9;const r=this.ctx.createGain();r.gain.setValueAtTime(.001,e),r.gain.linearRampToValueAtTime(.14,e+.035),r.gain.exponentialRampToValueAtTime(1e-4,e+.32),t.connect(i),i.connect(r),r.connect(this.ctx.destination),t.start(e,Math.random(),.34)}crowdReaction(e){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",e==="cheer"?(r.frequency.setValueAtTime(580,t),r.frequency.linearRampToValueAtTime(1180,t+.25),r.frequency.exponentialRampToValueAtTime(640,t+2.1),r.Q.value=.55):(r.frequency.setValueAtTime(720,t),r.frequency.exponentialRampToValueAtTime(340,t+1.2),r.Q.value=.95);const s=this.ctx.createGain();s.gain.setValueAtTime(.001,t),s.gain.linearRampToValueAtTime(e==="cheer"?.24:.15,t+.14),s.gain.exponentialRampToValueAtTime(1e-4,t+(e==="cheer"?2.25:1.45)),i.connect(r),r.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+2.35)}}const mt=new ky,$r=["placed","power","panenka","stutter"],no={placed:{id:"placed",keyNum:"1",name:"推射死角",tag:"精准推射",perfectGoalPct:90,perfectHalfWidth:.064,goodHalfWidth:.19,arrowsEnabled:!0,shuttleDesc:"穿梭较快 · 窄完美区",ruleDesc:"方向键瞄准死角 · 在中心停球完成精准推射",accentColor:"#38bdf8"},power:{id:"power",keyNum:"2",name:"大力爆射",tag:"强劲爆射",perfectGoalPct:80,perfectHalfWidth:.115,goodHalfWidth:.29,arrowsEnabled:!0,shuttleDesc:"穿梭平稳 · 宽完美区",ruleDesc:"方向键瞄准 · 在中心停球完成强劲爆射",accentColor:"#10b981"},panenka:{id:"panenka",keyNum:"3",name:"勺子点球",tag:"轻巧挑射",perfectGoalPct:95,perfectHalfWidth:.042,goodHalfWidth:.135,arrowsEnabled:!1,shuttleDesc:"极速穿梭 · 极窄完美点",ruleDesc:"方向键无效（固定踢向中路）· 在中心停球完成挑射",accentColor:"#f59e0b"},stutter:{id:"stutter",keyNum:"4",name:"节奏变化（小跳步）",tag:"诡谲变奏",perfectGoalPct:90,perfectHalfWidth:.08,goodHalfWidth:.22,arrowsEnabled:!0,shuttleDesc:"小球在条内无规则急停乱晃",ruleDesc:"方向键瞄准 · 小跳步扰乱门将重心",accentColor:"#a855f7"}},Fy={accSpread:1},Br=[{id:"k1",name:"腊鸭",nick:"出球门神",country:"西班牙",reflex:89,reach:82,mind:86,number:22,avatar:"./keepers/laya.png",kit:{primary:"#facc15",secondary:"#eab308",sleeveColor:"#facc15",trim:"#111827",shorts:"#facc15",socks:"#facc15",numberColor:"#111827",gloveBackColor:"#dc2626",gloveLatex:"#ffffff",gloveStrapColor:"#ffffff",chestMotif:"adidas_stripes"},appearance:{height:1.83,build:1.02,skin:"#dfa982",hair:"#1a1310",hairStyle:"textured",facialHair:"beard",bootColor:"#f8fafc",keeperPersona:"laya"}},{id:"k2",name:"奥这这",nick:"整活表情帝",country:"喀麦隆",reflex:88,reach:86,mind:76,number:24,avatar:"./keepers/aozhezhe.png",kit:{primary:"#74c918",secondary:"#4d910c",sleeveColor:"#facc15",trim:"#111827",shorts:"#65a30d",socks:"#a3e635",numberColor:"#111827",gloveBackColor:"#0ea5e9",gloveLatex:"#f8fafc",gloveStrapColor:"#0284c7",chestMotif:"team_crown"},appearance:{height:1.9,build:1.05,skin:"#5c3522",hair:"#120e0c",hairStyle:"curly",facialHair:"goatee",bootColor:"#f97316",keeperPersona:"aozhezhe"}},{id:"k3",name:"雷克森",nick:"雷神之壁",country:"巴西",reflex:91,reach:94,mind:90,number:1,avatar:"./keepers/leikesen.png",kit:{primary:"#1e293b",secondary:"#0f172a",sleeveColor:"#1e293b",trim:"#2dd4bf",shorts:"#0f172a",socks:"#111827",numberColor:"#5eead4",gloveBackColor:"#0f172a",gloveLatex:"#38bdf8",gloveStrapColor:"#0f172a",chestMotif:"lightning"},appearance:{height:1.93,build:1.1,skin:"#eab996",hair:"#c28230",hairStyle:"swept",facialHair:"beard",bootColor:"#18181b",keeperPersona:"leikesen"}},{id:"k4",name:"驼赫亚",nick:"神兽羊驼",country:"西班牙",reflex:96,reach:90,mind:81,number:1,avatar:"./keepers/tuoheya.png",kit:{primary:"#facc15",secondary:"#ca8a04",sleeveColor:"#facc15",trim:"#78350f",shorts:"#eab308",socks:"#facc15",numberColor:"#451a03",gloveBackColor:"#4a3222",gloveLatex:"#5c3f2c",gloveStrapColor:"#362216",chestMotif:"plain"},appearance:{height:1.92,build:.96,skin:"#e8cfa6",hair:"#dec08e",hairStyle:"curly",facialHair:"goatee",bootColor:"#4a3222",keeperPersona:"tuoheya"}},{id:"k5",name:"丁内斯",nick:"点球心魔",country:"阿根廷",reflex:89,reach:92,mind:97,number:23,avatar:"./keepers/dingneisi.png",kit:{primary:"#f97316",secondary:"#c2410c",sleeveColor:"#f97316",trim:"#111827",shorts:"#ea580c",socks:"#1f2937",numberColor:"#ffffff",gloveBackColor:"#fef3c7",gloveLatex:"#fffbeb",gloveStrapColor:"#111827",chestMotif:"v_collar"},appearance:{height:1.95,build:1.05,skin:"#ebbda0",hair:"#54341e",hairStyle:"swept",facialHair:"none",bootColor:"#f59e0b",keeperPersona:"dingneisi"}}],vs=[{id:"p1",name:"魔人哈",nick:"冥想魔人",pos:"前锋",country:"挪威",power:97,accuracy:89,composure:92,foot:"L",number:9,runupStyle:"classic",avatar:"./players/morenha.png",kit:{primary:"#60a5fa",secondary:"#3b82f6",sleeveColor:"#60a5fa",trim:"#e0f2fe",shorts:"#60a5fa",socks:"#60a5fa",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.95,build:1.12,skin:"#f3bfa4",hair:"#eab308",hairStyle:"swept",facialHair:"beard",bootColor:"#60a5fa",playerPersona:"morenha"}},{id:"p2",name:"帕不怕冷",nick:"冷面冰人",pos:"中场",country:"英格兰",power:84,accuracy:95,composure:98,foot:"L",number:20,runupStyle:"curved",avatar:"./players/pabupaleng.png",kit:{primary:"#2563eb",secondary:"#1d4ed8",sleeveColor:"#2563eb",trim:"#bae6fd",shorts:"#1d4ed8",socks:"#2563eb",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.89,build:.92,skin:"#f2c6af",hair:"#e5b842",hairStyle:"textured",facialHair:"none",bootColor:"#f8fafc",playerPersona:"pabupaleng"}},{id:"p3",name:"萨小椒",nick:"爆辣边锋",pos:"边锋",country:"英格兰",power:85,accuracy:92,composure:91,foot:"L",number:7,runupStyle:"curved",avatar:"./players/saxiaojiao.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#f8fafc",trim:"#ffffff",shorts:"#f8fafc",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"chili_crest"},appearance:{height:1.78,build:.98,skin:"#613a24",hair:"#16110e",hairStyle:"curly",facialHair:"goatee",bootColor:"#dc2626",playerPersona:"saxiaojiao"}},{id:"p4",name:"厄大帅",nick:"球场摄影师",pos:"中场",country:"挪威",power:82,accuracy:94,composure:90,foot:"L",number:8,runupStyle:"stutter",avatar:"./players/edashuai.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#f8fafc",trim:"#ffffff",shorts:"#f8fafc",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"arsenal_clean"},appearance:{height:1.78,build:.95,skin:"#f1c2a5",hair:"#d4a24c",hairStyle:"swept",facialHair:"goatee",bootColor:"#1f2937",playerPersona:"edashuai"}},{id:"p5",name:"姆老汉",nick:"浓髯重炮",pos:"边锋",country:"喀麦隆",power:89,accuracy:89,composure:91,foot:"L",number:19,runupStyle:"stutter",avatar:"./players/mulaohan.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#ffffff",shorts:"#dc2626",socks:"#f8fafc",numberColor:"#111827",chestMotif:"red_white_stripes"},appearance:{height:1.73,build:1.07,skin:"#7a4b30",hair:"#14100e",hairStyle:"buzz",facialHair:"beard",bootColor:"#18181b",playerPersona:"mulaohan"}},{id:"p6",name:"维小薯",nick:"天才薯片",pos:"中场",country:"德国",power:81,accuracy:93,composure:90,foot:"R",number:10,runupStyle:"curved",avatar:"./players/weixiaoshu.png",kit:{primary:"#dc2626",secondary:"#991b1b",sleeveColor:"#18181b",trim:"#18181b",shorts:"#18181b",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.77,build:.93,skin:"#f3c5ab",hair:"#8c552f",hairStyle:"textured",facialHair:"none",bootColor:"#18181b",playerPersona:"weixiaoshu"}},{id:"p7",name:"谢花哨",nick:"花式魔术师",pos:"中场",country:"法国",power:84,accuracy:91,composure:86,foot:"R",number:18,runupStyle:"stutter",avatar:"./players/xiehuashao.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#38bdf8",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.77,build:1.03,skin:"#e3af8c",hair:"#3d2516",hairStyle:"swept",facialHair:"beard",bootColor:"#18181b",playerPersona:"xiehuashao"}},{id:"p8",name:"加倒钩",nick:"凌空金童",pos:"边锋",country:"阿根廷",power:89,accuracy:86,composure:85,foot:"R",number:17,runupStyle:"classic",avatar:"./players/jiadaogou.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.8,build:.95,skin:"#e4b18f",hair:"#f2e6c2",hairStyle:"textured",facialHair:"none",bootColor:"#18181b",playerPersona:"jiadaogou"}},{id:"p9",name:"穆闪电",nick:"超音速闪电",pos:"边锋",country:"乌克兰",power:92,accuracy:77,composure:78,foot:"R",number:10,runupStyle:"classic",avatar:"./players/mushandian.png",kit:{primary:"#2563eb",secondary:"#1d4ed8",sleeveColor:"#2563eb",trim:"#facc15",shorts:"#1d4ed8",socks:"#2563eb",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.75,build:.95,skin:"#f2c4aa",hair:"#dfad4e",hairStyle:"swept",facialHair:"none",bootColor:"#18181b",playerPersona:"mushandian"}},{id:"p10",name:"马航母",nick:"重装航母",pos:"后卫",country:"英格兰",power:95,accuracy:84,composure:88,foot:"R",number:5,runupStyle:"classic",avatar:"./players/mahangmu.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.94,build:1.11,skin:"#eec1a4",hair:"#2b1f18",hairStyle:"buzz",facialHair:"none",bootColor:"#18181b",playerPersona:"mahangmu"}},{id:"p11",name:"马屠夫",nick:"铁血硬汉",pos:"后卫",country:"阿根廷",power:90,accuracy:82,composure:92,foot:"L",number:6,runupStyle:"classic",avatar:"./players/matufu.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#f8fafc",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.75,build:1.05,skin:"#dfa884",hair:"#2a1c14",hairStyle:"textured",facialHair:"stubble",bootColor:"#18181b",playerPersona:"matufu"}},{id:"p12",name:"里咕咕",nick:"白鸽舞王",pos:"前锋",country:"巴西",power:87,accuracy:84,composure:83,foot:"R",number:9,runupStyle:"stutter",avatar:"./players/ligugu.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#cbd5e1",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.84,build:.99,skin:"#e5b493",hair:"#f1f5f9",hairStyle:"swept",facialHair:"none",bootColor:"#4a3222",playerPersona:"ligugu"}},{id:"p13",name:"加铁卫",nick:"铜墙大白牙",pos:"后卫",country:"巴西",power:93,accuracy:79,composure:86,foot:"L",number:6,runupStyle:"classic",avatar:"./players/jatiewei.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#dc2626",trim:"#dc2626",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#dc2626",chestMotif:"brick_wall"},appearance:{height:1.9,build:1.09,skin:"#5a3420",hair:"#120d0a",hairStyle:"buzz",facialHair:"beard",bootColor:"#18181b",playerPersona:"jatiewei"}},{id:"p14",name:"安陀螺",nick:"圆规旋风",pos:"边锋",country:"巴西",power:83,accuracy:85,composure:84,foot:"L",number:21,runupStyle:"curved",avatar:"./players/antuoluo.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#ffffff",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.74,build:.95,skin:"#e6b492",hair:"#2d1d13",hairStyle:"swept",facialHair:"beard",bootColor:"#f8fafc",playerPersona:"antuoluo"}},{id:"p15",name:"努角兽",nick:"牛角猛兽",pos:"前锋",country:"乌拉圭",power:96,accuracy:75,composure:80,foot:"R",number:9,runupStyle:"classic",avatar:"./players/nujiaoshou.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.87,build:1.05,skin:"#dfa278",hair:"#24160e",hairStyle:"swept",facialHair:"goatee",bootColor:"#f8fafc",playerPersona:"nujiaoshou"}},{id:"p16",name:"杰克思考",nick:"思考人生",pos:"前锋",country:"塞内加尔",power:85,accuracy:78,composure:79,foot:"R",number:15,runupStyle:"stutter",avatar:"./players/jiekexikao.png",kit:{primary:"#1d4ed8",secondary:"#1e40af",sleeveColor:"#1d4ed8",trim:"#60a5fa",shorts:"#1d4ed8",socks:"#1d4ed8",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.87,build:.98,skin:"#5e3722",hair:"#17120f",hairStyle:"curly",facialHair:"goatee",bootColor:"#18181b",playerPersona:"jiekexikao"}},{id:"p17",name:"斯翘臀",nick:"快乐小快灵",pos:"边锋",country:"英格兰",power:80,accuracy:83,composure:81,foot:"R",number:7,runupStyle:"curved",avatar:"./players/siqiaotun.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#1d4ed8",shorts:"#1d4ed8",socks:"#f8fafc",numberColor:"#1d4ed8",chestMotif:"white_blue_trim"},appearance:{height:1.72,build:.98,skin:"#663c25",hair:"#16110e",hairStyle:"buzz",facialHair:"goatee",bootColor:"#18181b",playerPersona:"siqiaotun"}},{id:"p18",name:"维侦察",nick:"越位侦察机",pos:"前锋",country:"德国",power:86,accuracy:76,composure:78,foot:"R",number:16,runupStyle:"classic",avatar:"./players/weizhencha.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#cbd5e1",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.8,build:.95,skin:"#f3bfa4",hair:"#dfad4e",hairStyle:"swept",facialHair:"none",bootColor:"#18181b",playerPersona:"weizhencha"}}];function Cu(n){return Math.round((n.power+n.accuracy+n.composure)/3)}function Lu(n){return Math.round((n.reflex+n.reach+n.mind)/3)}function Jo(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[i],e[i]=r}return e}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="187",Oy=0,Im=1,zy=2,Gl=1,l_=2,Xa=3,os=0,Nn=1,On=2,na=0,io=1,_c=2,Um=3,km=4,By=5,ks=100,Gy=101,Hy=102,Vy=103,Wy=104,Xy=200,qy=201,Yy=202,$y=203,c_=204,u_=205,Ky=206,jy=207,Zy=208,Jy=209,Qy=210,eS=211,tS=212,nS=213,iS=214,lf=0,cf=1,uf=2,Mo=3,hf=4,ff=5,df=6,pf=7,Yd=0,rS=1,sS=2,Ki=0,h_=1,f_=2,d_=3,$d=4,p_=5,m_=6,g_=7,v_=300,ha=301,wo=302,Du=303,Nu=304,xc=1e3,Yi=1001,mf=1002,rn=1003,aS=1004,Qo=1005,Pn=1006,Iu=1007,yr=1008,zn=1009,__=1010,x_=1011,To=1012,Kd=1013,Ni=1014,mi=1015,Ii=1016,jd=1017,Zd=1018,fa=1020,y_=35902,S_=35899,M_=1021,w_=1022,Ri=1023,Nr=1026,Sr=1027,Jd=1028,Qd=1029,ls=1030,ep=1031,tp=1033,Hl=33776,Vl=33777,Wl=33778,Xl=33779,gf=35840,vf=35841,_f=35842,xf=35843,yf=36196,Sf=37492,Mf=37496,wf=37488,Tf=37489,yc=37490,Ef=37491,bf=37808,Af=37809,Rf=37810,Pf=37811,Cf=37812,Lf=37813,Df=37814,Nf=37815,If=37816,Uf=37817,kf=37818,Ff=37819,Of=37820,zf=37821,Bf=36492,Gf=36494,Hf=36495,Vf=36283,Wf=36284,Sc=36285,Xf=36286,oS=3200,Mc=0,lS=1,vr="",Qt="srgb",wc="srgb-linear",Tc="linear",ft="srgb",Uu=7680,cS=519,uS=512,hS=513,fS=514,T_=515,dS=516,pS=517,E_=518,b_=519,A_=35044,Fm=35048,Om="300 es",gi=2e3,Eo=2001;function mS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gS(){const n=Ec("canvas");return n.style.display="block",n}const zm={};function bc(...n){const e="THREE."+n.shift();console.log(e,...n)}function R_(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=R_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function it(...n){n=R_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ql(...n){const e=n.join(" ");e in zm||(zm[e]=!0,Oe(...n))}function vS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const _S={[lf]:lf,[uf]:df,[hf]:hf,[Mo]:ff,[cf]:cf,[df]:uf,[pf]:pf,[ff]:Mo};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,qf=180/Math.PI;function ds(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function xS(n,e){return(n%e+e)%e}function Fu(n,e,t){return(1-t)*n+t*e}function yS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function P_(n,e){if(e.constructor===Float32Array)return n;const t=Jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function C_(n,e){if(e.constructor===Float32Array)return n;const t=Jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const up=class up{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;let ze=up;class _a{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(f!==_||l!==d||c!==p||u!==v){let m=l*d+c*p+u*v+f*_;m<0&&(d=-d,p=-p,v=-v,_=-_,m=-m);let h=1-o;if(m<.9995){const g=Math.acos(m),y=Math.sin(g);h=Math.sin(h*g)/y,o=Math.sin(o*g)/y,l=l*h+d*o,c=c*h+p*o,u=u*h+v*o,f=f*h+_*o}else{l=l*h+d*o,c=c*h+p*o,u=u*h+v*o,f=f*h+_*o;const g=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=g,c*=g,u*=g,f*=g}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*d,e[t+1]=l*v+u*d+c*f-o*p,e[t+2]=c*v+u*p+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hp=class hp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hp.prototype.isVector3=!0;let z=hp;const Ou=new z,Bm=new _a,fp=class fp{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],_=r[0],m=r[3],h=r[6],g=r[1],y=r[4],S=r[7],b=r[2],T=r[5],x=r[8];return s[0]=a*_+o*g+l*b,s[3]=a*m+o*y+l*T,s[6]=a*h+o*S+l*x,s[1]=c*_+u*g+f*b,s[4]=c*m+u*y+f*T,s[7]=c*h+u*S+f*x,s[2]=d*_+p*g+v*b,s[5]=d*m+p*y+v*T,s[8]=d*h+p*S+v*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,v=t*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ql("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zu.makeScale(e,t)),this}rotate(e){return ql("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zu.makeRotation(-e)),this}translate(e,t){return ql("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fp.prototype.isMatrix3=!0;let He=fp;const zu=new He,Gm=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SS(){const n={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=ia(r.r),r.g=ia(r.g),r.b=ia(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?Tc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wc]:{primaries:e,whitePoint:i,transfer:Tc,toXYZ:Gm,fromXYZ:Hm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Gm,fromXYZ:Hm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Je=SS();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class MS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Ec("canvas")),_s.width=e.width,_s.height=e.height;const r=_s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ec("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wS=0;class np{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bu(r[a].image)):s.push(Bu(r[a]))}else s=Bu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?MS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let TS=0;const Gu=new z;class an extends fs{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,i=Yi,r=Yi,s=Pn,a=yr,o=Ri,l=zn,c=an.DEFAULT_ANISOTROPY,u=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=ds(),this.name="",this.source=new np(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xc:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xc:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=v_;an.DEFAULT_ANISOTROPY=1;const dp=class dp{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(p+1)/2,b=(h+1)/2,T=(u+d)/4,x=(f+_)/4,M=(v+m)/4;return y>S&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=x/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=M/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=x/s,r=M/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-_)/g,this.z=(d-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dp.prototype.isVector4=!0;let Ct=dp;class ES extends fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new an({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new np(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends ES{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class L_ extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bS extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Uc=class Uc{constructor(e,t,i,r,s,a,o,l,c,u,f,d,p,v,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,p,v,_,m)}set(e,t,i,r,s,a,o,l,c,u,f,d,p,v,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,v=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,_=c*f;t[0]=d+_*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,v=o*u,_=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,RS)}lookAt(e,t,i){const r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ar.crossVectors(i,Un),ar.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ar.crossVectors(i,Un)),ar.normalize(),el.crossVectors(Un,ar),r[0]=ar.x,r[4]=el.x,r[8]=Un.x,r[1]=ar.y,r[5]=el.y,r[9]=Un.y,r[2]=ar.z,r[6]=el.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],_=i[6],m=i[10],h=i[14],g=i[3],y=i[7],S=i[11],b=i[15],T=r[0],x=r[4],M=r[8],N=r[12],A=r[1],L=r[5],P=r[9],I=r[13],R=r[2],O=r[6],X=r[10],D=r[14],k=r[3],U=r[7],G=r[11],K=r[15];return s[0]=a*T+o*A+l*R+c*k,s[4]=a*x+o*L+l*O+c*U,s[8]=a*M+o*P+l*X+c*G,s[12]=a*N+o*I+l*D+c*K,s[1]=u*T+f*A+d*R+p*k,s[5]=u*x+f*L+d*O+p*U,s[9]=u*M+f*P+d*X+p*G,s[13]=u*N+f*I+d*D+p*K,s[2]=v*T+_*A+m*R+h*k,s[6]=v*x+_*L+m*O+h*U,s[10]=v*M+_*P+m*X+h*G,s[14]=v*N+_*I+m*D+h*K,s[3]=g*T+y*A+S*R+b*k,s[7]=g*x+y*L+S*O+b*U,s[11]=g*M+y*P+S*X+b*G,s[15]=g*N+y*I+S*D+b*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],_=e[7],m=e[11],h=e[15],g=l*p-c*d,y=o*p-c*f,S=o*d-l*f,b=a*p-c*u,T=a*d-l*u,x=a*f-o*u;return t*(_*g-m*y+h*S)-i*(v*g-m*b+h*T)+r*(v*y-_*b+h*x)-s*(v*S-_*T+m*x)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],_=e[13],m=e[14],h=e[15],g=t*o-i*a,y=t*l-r*a,S=t*c-s*a,b=i*l-r*o,T=i*c-s*o,x=r*c-s*l,M=u*_-f*v,N=u*m-d*v,A=u*h-p*v,L=f*m-d*_,P=f*h-p*_,I=d*h-p*m,R=g*I-y*P+S*L+b*A-T*N+x*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=(o*I-l*P+c*L)*O,e[1]=(r*P-i*I-s*L)*O,e[2]=(_*x-m*T+h*b)*O,e[3]=(d*T-f*x-p*b)*O,e[4]=(l*A-a*I-c*N)*O,e[5]=(t*I-r*A+s*N)*O,e[6]=(m*S-v*x-h*y)*O,e[7]=(u*x-d*S+p*y)*O,e[8]=(a*P-o*A+c*M)*O,e[9]=(i*A-t*P-s*M)*O,e[10]=(v*T-_*S+h*g)*O,e[11]=(f*S-u*T-p*g)*O,e[12]=(o*N-a*L-l*M)*O,e[13]=(t*L-i*N+r*M)*O,e[14]=(_*y-v*b-m*g)*O,e[15]=(u*b-f*y+d*g)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,v=s*f,_=a*u,m=a*f,h=o*f,g=l*c,y=l*u,S=l*f,b=i.x,T=i.y,x=i.z;return r[0]=(1-(_+h))*b,r[1]=(p+S)*b,r[2]=(v-y)*b,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+h))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(v+y)*x,r[9]=(m-g)*x,r[10]=(1-(d+_))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),l=xs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),oi.copy(this);const c=1/a,u=1/o,f=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=gi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===gi)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Eo)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===gi)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===Eo)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Uc.prototype.isMatrix4=!0;let rt=Uc;const xs=new z,oi=new rt,AS=new z(0,0,0),RS=new z(1,1,1),ar=new z,el=new z,Un=new z,Vm=new rt,Wm=new _a;class Ui{constructor(e=0,t=0,i=0,r=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class D_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PS=0;const Xm=new z,ys=new _a,Fi=new rt,tl=new z,Ca=new z,CS=new z,LS=new _a,qm=new z(1,0,0),Ym=new z(0,1,0),$m=new z(0,0,1),Km={type:"added"},DS={type:"removed"},Ss={type:"childadded",child:null},Hu={type:"childremoved",child:null};class Dt extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new z,t=new Ui,i=new _a,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new He}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,t){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tl.copy(e):tl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ca,tl,this.up):Fi.lookAt(tl,Ca,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Fi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DS),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,LS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new z(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NS={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(NS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Wu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=xS(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Wu(a,s,e+1/3),this.g=Wu(a,s,e),this.b=Wu(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=N_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Je.workingToColorSpace(dn.copy(this),e),Math.round($e(dn.r*255,0,255))*65536+Math.round($e(dn.g*255,0,255))*256+Math.round($e(dn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Qt){Je.workingToColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(nl);const i=Fu(or.h,nl.h,t),r=Fu(or.s,nl.s,t),s=Fu(or.l,nl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Ue;Ue.NAMES=N_;class ip{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new ip(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class IS extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const li=new z,Oi=new z,Xu=new z,zi=new z,Ms=new z,ws=new z,jm=new z,qu=new z,Yu=new z,$u=new z,Ku=new Ct,ju=new Ct,Zu=new Ct;class ei{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),li.subVectors(e,t),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){li.subVectors(r,t),Oi.subVectors(i,t),Xu.subVectors(e,t);const a=li.dot(li),o=li.dot(Oi),l=li.dot(Xu),c=Oi.dot(Oi),u=Oi.dot(Xu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ku.setScalar(0),ju.setScalar(0),Zu.setScalar(0),Ku.fromBufferAttribute(e,t),ju.fromBufferAttribute(e,i),Zu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ku,s.x),a.addScaledVector(ju,s.y),a.addScaledVector(Zu,s.z),a}static isFrontFacing(e,t,i,r){return li.subVectors(i,t),Oi.subVectors(e,t),li.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),li.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ms.subVectors(r,i),ws.subVectors(s,i),qu.subVectors(e,i);const l=Ms.dot(qu),c=ws.dot(qu);if(l<=0&&c<=0)return t.copy(i);Yu.subVectors(e,r);const u=Ms.dot(Yu),f=ws.dot(Yu);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(Ms,a);$u.subVectors(e,s);const p=Ms.dot($u),v=ws.dot($u);if(v>=0&&p<=v)return t.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ws,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return jm.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(jm,o);const h=1/(m+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(Ms,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ps{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),rl.subVectors(this.max,La),Ts.subVectors(e.a,La),Es.subVectors(e.b,La),bs.subVectors(e.c,La),lr.subVectors(Es,Ts),cr.subVectors(bs,Es),Gr.subVectors(Ts,bs);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Gr.z,Gr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Gr.z,0,-Gr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Gr.y,Gr.x,0];return!Ju(t,Ts,Es,bs,rl)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,Ts,Es,bs,rl))?!1:(sl.crossVectors(lr,cr),t=[sl.x,sl.y,sl.z],Ju(t,Ts,Es,bs,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new z,new z,new z,new z,new z,new z,new z,new z],ci=new z,il=new ps,Ts=new z,Es=new z,bs=new z,lr=new z,cr=new z,Gr=new z,La=new z,rl=new z,sl=new z,Hr=new z;function Ju(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Hr.fromArray(n,s);const o=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),c=t.dot(Hr),u=i.dot(Hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bt=new z,al=new ze;let US=0;class In extends fs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:US++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=A_,this.updateRanges=[],this.gpuType=mi,this.version=0,this._normalizationScale=e!==void 0?Jc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)al.fromBufferAttribute(this,t),al.applyMatrix3(e),this.setXY(t,al.x,al.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):P_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):C_(e,this.array)}}class I_ extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class U_ extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}const kS=new ps,Da=new z,Qu=new z;class ms{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const t=Da.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Qu)),this.expandByPoint(Da.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let FS=0;const Kn=new rt,eh=new Dt,As=new z,kn=new ps,Na=new ps,Zt=new z;class Ot extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mS(e)?U_:I_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,i){return Kn.makeTranslation(e,t,i),this.applyMatrix4(Kn),this}scale(e,t,i){return Kn.makeScale(e,t,i),this.applyMatrix4(Kn),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(kn.min,Na.min),kn.expandByPoint(Zt),Zt.addVectors(kn.max,Na.max),kn.expandByPoint(Zt)):(kn.expandByPoint(Na.min),kn.expandByPoint(Na.max))}kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Zt.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),Zt.add(As)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new In(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new z,l[N]=new z;const u=new z,f=new z,d=new z,p=new ze,v=new ze,_=new ze,m=new z,h=new z;function g(N,A,L){c[N]=c[A]=c[L]=1,u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,L),p.fromBufferAttribute(s,N),v.fromBufferAttribute(s,A),_.fromBufferAttribute(s,L),f.sub(u),d.sub(u),v.sub(p),_.sub(p);const P=1/(v.x*_.y-_.x*v.y);isFinite(P)&&(m.copy(f).multiplyScalar(_.y).addScaledVector(d,-v.y).multiplyScalar(P),h.copy(d).multiplyScalar(v.x).addScaledVector(f,-_.x).multiplyScalar(P),o[N].add(m),o[A].add(m),o[L].add(m),l[N].add(h),l[A].add(h),l[L].add(h))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,A=y.length;N<A;++N){const L=y[N],P=L.start,I=L.count;for(let R=P,O=P+I;R<O;R+=3)g(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const S=new z,b=new z,T=new z,x=new z;function M(N){T.fromBufferAttribute(r,N),x.copy(T);const A=o[N];S.copy(A),S.sub(T.multiplyScalar(T.dot(A))).normalize(),b.crossVectors(x,A);const P=b.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,P)}for(let N=0,A=i.count;N<A;++N)c[N]&&M(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new In(d,u,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class OS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=A_,this.updateRanges=[],this.version=0,this.uuid=ds()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Zm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Zm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Zm(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ds()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const xn=new z;class Ac{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Jc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){bc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):P_(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):C_(e,this.data.array)}}const th=new z,zS=new z,BS=new He;class dr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=th.subVectors(i,t).cross(zS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(th),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||BS.getNormalMatrix(e),r=this.coplanarPoint(th).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let GS=0;class nr extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=io,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=c_,this.blendDst=u_,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uu,this.stencilZFail=Uu,this.stencilZPass=Uu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new dr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class k_ extends nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rs;const Ia=new z,Ps=new z,Cs=new z,Ls=new ze,Ua=new ze,F_=new rt,ol=new z,ka=new z,ll=new z,Jm=new ze,nh=new ze,Qm=new ze;class HS extends Dt{constructor(e=new k_){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new OS(t,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Ac(i,3,0,!1)),Rs.setAttribute("uv",new Ac(i,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&it('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),F_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Cs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;cl(ol.set(-.5,-.5,0),Cs,a,Ps,r,s),cl(ka.set(.5,-.5,0),Cs,a,Ps,r,s),cl(ll.set(.5,.5,0),Cs,a,Ps,r,s),Jm.set(0,0),nh.set(1,0),Qm.set(1,1);let o=e.ray.intersectTriangle(ol,ka,ll,!1,Ia);if(o===null&&(cl(ka.set(-.5,.5,0),Cs,a,Ps,r,s),nh.set(0,1),o=e.ray.intersectTriangle(ol,ll,ka,!1,Ia),o===null))return;const l=e.ray.origin.distanceTo(Ia);l<e.near||l>e.far||t.push({distance:l,point:Ia.clone(),uv:ei.getInterpolation(Ia,ol,ka,ll,Jm,nh,Qm,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function cl(n,e,t,i,r,s){Ls.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ua.x=s*Ls.x-r*Ls.y,Ua.y=r*Ls.x+s*Ls.y):Ua.copy(Ls),n.copy(e),n.x+=Ua.x,n.y+=Ua.y,n.applyMatrix4(F_)}const Gi=new z,ih=new z,ul=new z,hl=new z;class rp{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ih.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),hl.copy(this.origin).sub(ih);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ul),o=hl.dot(this.direction),l=-hl.dot(ul),c=hl.lengthSq(),u=Math.abs(1-a*a);let f,d,p,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ih).addScaledVector(ul,d),p}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);const i=Gi.dot(this.direction),r=Gi.dot(Gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,v=t.x-a.x,_=t.y-a.y,m=t.z-a.z,h=i.x-a.x,g=i.y-a.y,y=i.z-a.z,S=Math.abs(l),b=Math.abs(c),T=Math.abs(u);let x,M,N,A,L,P,I,R,O,X,D,k;if(S>=b&&S>=T?(N=l,P=f,O=v,k=h,l>=0?(x=c,M=u,A=d,L=p,I=_,R=m,X=g,D=y):(x=u,M=c,A=p,L=d,I=m,R=_,X=y,D=g)):b>=T?(N=c,P=d,O=_,k=g,c>=0?(x=u,M=l,A=p,L=f,I=m,R=v,X=y,D=h):(x=l,M=u,A=f,L=p,I=v,R=m,X=h,D=y)):(N=u,P=p,O=m,k=y,u>=0?(x=l,M=c,A=f,L=d,I=v,R=_,X=h,D=g):(x=c,M=l,A=d,L=f,I=_,R=v,X=g,D=h)),N===0)return null;const U=x/N,G=M/N,K=1/N,re=A-U*P,Te=L-G*P,j=I-U*O,le=R-G*O,ce=X-U*k,we=D-G*k,_e=ce*le-we*j,Be=re*we-Te*ce,ct=j*Te-le*re;if(r){if(_e<0||Be<0||ct<0)return null}else if((_e<0||Be<0||ct<0)&&(_e>0||Be>0||ct>0))return null;const Ne=_e+Be+ct;if(Ne===0)return null;const st=K*(_e*P+Be*O+ct*k);return(Ne>0?st<0:st>0)?null:this.at(st/Ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wi extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const e0=new rt,Vr=new rp,fl=new ms,t0=new z,dl=new z,pl=new z,ml=new z,rh=new z,gl=new z,n0=new z,vl=new z;class W extends Dt{constructor(e=new Ot,t=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(rh.fromBufferAttribute(f,e),a?gl.addScaledVector(rh,u):gl.addScaledVector(rh.sub(t),u))}t.add(gl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(fl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(fl,t0)===null||Vr.origin.distanceToSquared(t0)>(e.far-e.near)**2))&&(e0.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(e0),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const m=d[v],h=a[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=y;S<b;S+=3){const T=o.getX(S),x=o.getX(S+1),M=o.getX(S+2);r=_l(this,h,e,i,c,u,f,T,x,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){const g=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=_l(this,a,e,i,c,u,f,g,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const m=d[v],h=a[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=y;S<b;S+=3){const T=S,x=S+1,M=S+2;r=_l(this,h,e,i,c,u,f,T,x,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){const g=m,y=m+1,S=m+2;r=_l(this,a,e,i,c,u,f,g,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function VS(n,e,t,i,r,s,a,o){let l;if(e.side===Nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===os,o),l===null)return null;vl.copy(o),vl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:n}}function _l(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,dl),n.getVertexPosition(l,pl),n.getVertexPosition(c,ml);const u=VS(n,e,t,i,dl,pl,ml,n0);if(u){const f=new z;ei.getBarycoord(n0,dl,pl,ml,f),r&&(u.uv=ei.getInterpolatedAttribute(r,o,l,c,f,new ze)),s&&(u.uv1=ei.getInterpolatedAttribute(s,o,l,c,f,new ze)),a&&(u.normal=ei.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};ei.getNormal(dl,pl,ml,d.normal),u.face=d,u.barycoord=f}return u}class O_ extends an{constructor(e=null,t=1,i=1,r,s,a,o,l,c=rn,u=rn,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends In{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new rt,r0=new rt,xl=[],s0=new ps,WS=new rt,Fa=new W,Oa=new ms;class a0 extends W{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new i0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,WS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ps),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),s0.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(s0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),Oa.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ds),r0.multiplyMatrices(i,Ds),Fa.matrixWorld=r0,Fa.raycast(e,xl);for(let a=0,o=xl.length;a<o;a++){const l=xl[a];l.instanceId=s,l.object=this,t.push(l)}xl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new i0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new O_(new Float32Array(r*this.count),r,this.count,Jd,mi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wr=new ms,XS=new ze(.5,.5),yl=new z;class bo{constructor(e=new dr,t=new dr,i=new dr,r=new dr,s=new dr,a=new dr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],v=s[8],_=s[9],m=s[10],h=s[11],g=s[12],y=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-a,p-u,h-v,b-g).normalize(),r[1].setComponents(c+a,p+u,h+v,b+g).normalize(),r[2].setComponents(c+o,p+f,h+_,b+y).normalize(),r[3].setComponents(c-o,p-f,h-_,b-y).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,p-d,h-m,b-S).normalize();else if(r[4].setComponents(c-l,p-d,h-m,b-S).normalize(),t===gi)r[5].setComponents(c+l,p+d,h+m,b+S).normalize();else if(t===Eo)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=XS.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const o0=new rt;class sp{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];o0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new bo),i[r].setFromProjectionMatrix(o0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new bo),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new sp().copy(this)}}class z_ extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rc=new z,Pc=new z,l0=new rt,za=new rp,Sl=new ms,sh=new z,c0=new z;class qS extends Dt{constructor(e=new Ot,t=new z_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Rc.fromBufferAttribute(t,r-1),Pc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rc.distanceTo(Pc);e.setAttribute("lineDistance",new lt(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;l0.copy(r).invert(),za.copy(e.ray).applyMatrix4(l0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let _=p,m=v-1;_<m;_+=c){const h=u.getX(_),g=u.getX(_+1),y=Ml(this,e,za,l,h,g,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(p),h=Ml(this,e,za,l,_,m,v-1);h&&t.push(h)}}else{const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let _=p,m=v-1;_<m;_+=c){const h=Ml(this,e,za,l,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){const _=Ml(this,e,za,l,v-1,p,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ml(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Rc.fromBufferAttribute(o,r),Pc.fromBufferAttribute(o,s),t.distanceSqToSegment(Rc,Pc,sh,c0)>i)return;sh.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(sh);if(!(c<e.near||c>e.far))return{distance:c,point:c0.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const u0=new z,h0=new z;class YS extends qS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)u0.fromBufferAttribute(t,r),h0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+u0.distanceTo(h0);e.setAttribute("lineDistance",new lt(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B_ extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f0=new rt,Yf=new rp,wl=new ms,Tl=new z;class $S extends Dt{constructor(e=new Ot,t=new B_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;f0.copy(r).invert(),Yf.copy(e.ray).applyMatrix4(f0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=d,_=p;v<_;v++){const m=c.getX(v);Tl.fromBufferAttribute(f,m),d0(Tl,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,_=p;v<_;v++)Tl.fromBufferAttribute(f,v),d0(Tl,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function d0(n,e,t,i,r,s,a){const o=Yf.distanceSqToPoint(n);if(o<t){const l=new z;Yf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class G_ extends an{constructor(e=[],t=ha,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xa extends an{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class da extends an{constructor(e,t,i=Ni,r,s,a,o=rn,l=rn,c,u=Nr,f=1){if(u!==Nr&&u!==Sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class H_ extends da{constructor(e,t=Ni,i=ha,r,s,a=rn,o=rn,l,c=Nr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class V_ extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class et extends Ot{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function v(_,m,h,g,y,S,b,T,x,M,N){const A=S/x,L=b/M,P=S/2,I=b/2,R=T/2,O=x+1,X=M+1;let D=0,k=0;const U=new z;for(let G=0;G<X;G++){const K=G*L-I;for(let re=0;re<O;re++){const Te=re*A-P;U[_]=Te*g,U[m]=K*y,U[h]=R,c.push(U.x,U.y,U.z),U[_]=0,U[m]=0,U[h]=T>0?1:-1,u.push(U.x,U.y,U.z),f.push(re/x),f.push(1-G/M),D+=1}}for(let G=0;G<M;G++)for(let K=0;K<x;K++){const re=d+K+O*G,Te=d+K+O*(G+1),j=d+(K+1)+O*(G+1),le=d+(K+1)+O*G;l.push(re,Te,le),l.push(Te,j,le),k+=6}o.addGroup(p,k,N),p+=k,d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vt extends Ot{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,d=t,p=2*f+d,v=i*2+s,_=r+1,m=new z,h=new z;for(let g=0;g<=v;g++){let y=0,S=0,b=0,T=0;if(g<=i){const N=g/i,A=N*Math.PI/2;S=-u-e*Math.cos(A),b=e*Math.sin(A),T=-e*Math.cos(A),y=N*f}else if(g<=i+s){const N=(g-i)/s;S=-u+N*t,b=e,T=0,y=f+N*d}else{const N=(g-i-s)/i,A=N*Math.PI/2;S=u+e*Math.sin(A),b=e*Math.cos(A),T=e*Math.sin(A),y=f+d+N*f}const x=Math.max(0,Math.min(1,y/p));let M=0;g===0?M=.5/r:g===v&&(M=-.5/r);for(let N=0;N<=r;N++){const A=N/r,L=A*Math.PI*2,P=Math.sin(L),I=Math.cos(L);h.x=-b*I,h.y=S,h.z=b*P,o.push(h.x,h.y,h.z),m.set(-b*I,T,b*P),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+M,x)}if(g>0){const N=(g-1)*_;for(let A=0;A<r;A++){const L=N+A,P=N+A+1,I=g*_+A,R=g*_+A+1;a.push(L,P,I),a.push(P,R,I)}}}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ap extends Ot{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new z,u=new ze;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=i+f/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ot extends Ot{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let v=0;const _=[],m=i/2;let h=0;g(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(p,2));function g(){const S=new z,b=new z;let T=0;const x=(t-e)/i;for(let M=0;M<=s;M++){const N=[],A=M/s,L=A*(t-e)+e;for(let P=0;P<=r;P++){const I=P/r,R=I*l+o,O=Math.sin(R),X=Math.cos(R);b.x=L*O,b.y=-A*i+m,b.z=L*X,f.push(b.x,b.y,b.z),S.set(O,x,X).normalize(),d.push(S.x,S.y,S.z),p.push(I,1-A),N.push(v++)}_.push(N)}for(let M=0;M<r;M++)for(let N=0;N<s;N++){const A=_[N][M],L=_[N+1][M],P=_[N+1][M+1],I=_[N][M+1];(e>0||N!==0)&&(u.push(A,L,I),T+=3),(t>0||N!==s-1)&&(u.push(L,P,I),T+=3)}c.addGroup(h,T,0),h+=T}function y(S){const b=v,T=new ze,x=new z;let M=0;const N=S===!0?e:t,A=S===!0?1:-1;for(let P=1;P<=r;P++)f.push(0,m*A,0),d.push(0,A,0),p.push(.5,.5),v++;const L=v;for(let P=0;P<=r;P++){const R=P/r*l+o,O=Math.cos(R),X=Math.sin(R);x.x=N*X,x.y=m*A,x.z=N*O,f.push(x.x,x.y,x.z),d.push(0,A,0),T.x=O*.5+.5,T.y=X*.5*A+.5,p.push(T.x,T.y),v++}for(let P=0;P<r;P++){const I=b+P,R=L+P;S===!0?u.push(R,R+1,I):u.push(R+1,R,I),M+=3}c.addGroup(h,M,S===!0?1:2),h+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wn extends ot{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class KS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ze:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,r=[],s=[],a=[],o=new z,l=new rt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new z)}s[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos($e(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos($e(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function op(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const p0=new z,m0=new z,ah=new op,oh=new op,lh=new op;class jS extends KS{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new z){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(m0.subVectors(r[0],r[1]).add(r[0]),c=m0);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(p0.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=p0),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),ah.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,v,_,m),oh.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,v,_,m),lh.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,v,_,m)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),oh.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),lh.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(ah.calc(l),oh.calc(l),lh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Mr extends Ot{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,p=[],v=[],_=[],m=[];for(let h=0;h<u;h++){const g=h*d-a;for(let y=0;y<c;y++){const S=y*f-s;v.push(S,-g,0),_.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const y=g+c*h,S=g+c*(h+1),b=g+1+c*(h+1),T=g+1+c*h;p.push(y,S,T),p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new lt(v,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class lp extends Ot{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,p=new z,v=new ze;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const h=s+m/i*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}f+=d}for(let _=0;_<r;_++){const m=_*(i+1);for(let h=0;h<i;h++){const g=h+m,y=g,S=g+i+1,b=g+i+2,T=g+1;o.push(y,S,T),o.push(S,b,T)}}this.setIndex(o),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ce extends Ot{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new z,d=new z,p=[],v=[],_=[],m=[];for(let h=0;h<=i;h++){const g=[],y=h/i,S=a+y*o,b=e*Math.cos(S),T=Math.sqrt(e*e-b*b);let x=0;h===0&&a===0?x=.5/t:h===i&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){const N=M/t,A=r+N*s;f.x=-T*Math.cos(A),f.y=b,f.z=T*Math.sin(A),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(N+x,1-y),g.push(c++)}u.push(g)}for(let h=0;h<i;h++)for(let g=0;g<t;g++){const y=u[h][g+1],S=u[h][g],b=u[h+1][g],T=u[h+1][g+1];(h!==0||a>0)&&p.push(y,S,T),(h!==i-1||l<Math.PI)&&p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new lt(v,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ce(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cc extends Ot{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],f=[],d=new z,p=new z,v=new z;for(let _=0;_<=i;_++){const m=a+_/i*o;for(let h=0;h<=r;h++){const g=h/r*s;p.x=(e+t*Math.cos(m))*Math.cos(g),p.y=(e+t*Math.cos(m))*Math.sin(g),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),v.subVectors(p,d).normalize(),u.push(v.x,v.y,v.z),f.push(h/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=r;m++){const h=(r+1)*_+m-1,g=(r+1)*(_-1)+m-1,y=(r+1)*(_-1)+m,S=(r+1)*_+m;l.push(h,g,S),l.push(g,y,S)}this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function pa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(g0(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(g0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Sn(n){const e={};for(let t=0;t<n.length;t++){const i=pa(n[t]);for(const r in i)e[r]=i[r]}return e}function g0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ZS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function W_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const JS={clone:pa,merge:Sn};var QS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QS,this.fragmentShader=eM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=ZS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ue().setHex(r.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tM extends cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class be extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nM extends nr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Yd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iM extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rM extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class X_ extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class sM extends X_{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ch=new rt,v0=new z,_0=new z;class aM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;v0.setFromMatrixPosition(e.matrixWorld),t.position.copy(v0),_0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ch,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const El=new z,bl=new _a,Mi=new z;class q_ extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(El,bl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,bl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(El,bl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,bl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new z,x0=new ze,y0=new ze;class di extends q_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,x0,y0),t.subVectors(y0,x0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ku*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Y_ extends q_{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class oM extends aM{constructor(){super(new Y_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uh extends X_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new oM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ns=-90,Is=1;class $f extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new di(Ns,Is,e,t);r.layers=this.layers,this.add(r);const s=new di(Ns,Is,e,t);s.layers=this.layers,this.add(s);const a=new di(Ns,Is,e,t);a.layers=this.layers,this.add(a);const o=new di(Ns,Is,e,t);o.layers=this.layers,this.add(o);const l=new di(Ns,Is,e,t);l.layers=this.layers,this.add(l);const c=new di(Ns,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class lM extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function S0(n,e,t,i){const r=cM(i);switch(t){case M_:return n*e;case Jd:return n*e/r.components*r.byteLength;case Qd:return n*e/r.components*r.byteLength;case ls:return n*e*2/r.components*r.byteLength;case ep:return n*e*2/r.components*r.byteLength;case w_:return n*e*3/r.components*r.byteLength;case Ri:return n*e*4/r.components*r.byteLength;case tp:return n*e*4/r.components*r.byteLength;case Hl:case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vf:case xf:return Math.max(n,16)*Math.max(e,8)/4;case gf:case _f:return Math.max(n,8)*Math.max(e,8)/2;case yf:case Sf:case wf:case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mf:case yc:case Ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bf:case Gf:case Hf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vf:case Wf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sc:case Xf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cM(n){switch(n){case zn:case __:return{byteLength:1,components:1};case To:case x_:case Ii:return{byteLength:2,components:1};case jd:case Zd:return{byteLength:2,components:4};case Ni:case Kd:case mi:return{byteLength:4,components:1};case y_:case S_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $_(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uM(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],_=f[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var hM=`#ifdef USE_ALPHAHASH
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
}`,Ye={alphahash_fragment:hM,alphahash_pars_fragment:fM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:xM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:wM,iridescence_fragment:TM,bumpmap_pars_fragment:EM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:PM,color_fragment:CM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:NM,common:IM,defaultnormal_vertex:UM,displacementmap_pars_vertex:kM,displacementmap_vertex:FM,emissivemap_fragment:OM,emissivemap_pars_fragment:zM,colorspace_fragment:BM,colorspace_pars_fragment:GM,envmap_fragment:HM,envmap_common_pars_fragment:VM,envmap_pars_fragment:WM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:nw,envmap_vertex:qM,fog_vertex:YM,fog_pars_vertex:$M,fog_fragment:KM,fog_pars_fragment:jM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:JM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:ew,lights_pars_begin:tw,lights_toon_fragment:iw,lights_toon_pars_fragment:rw,lights_phong_fragment:sw,lights_phong_pars_fragment:aw,lights_physical_fragment:ow,lights_physical_pars_fragment:lw,lights_fragment_begin:cw,lights_fragment_maps:uw,lights_fragment_end:hw,lightprobes_pars_fragment:fw,logdepthbuf_fragment:dw,logdepthbuf_pars_fragment:pw,logdepthbuf_pars_vertex:mw,logdepthbuf_vertex:gw,map_fragment:vw,map_pars_fragment:_w,map_particle_fragment:xw,map_particle_pars_fragment:yw,metalnessmap_fragment:Sw,metalnessmap_pars_fragment:Mw,morphinstance_vertex:ww,morphcolor_vertex:Tw,morphnormal_vertex:Ew,morphtarget_pars_vertex:bw,morphtarget_vertex:Aw,normal_fragment_begin:Rw,normal_fragment_maps:Pw,normal_pars_fragment:Cw,normal_pars_vertex:Lw,normal_vertex:Dw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Iw,clearcoat_normal_fragment_maps:Uw,clearcoat_pars_fragment:kw,iridescence_pars_fragment:Fw,opaque_fragment:Ow,packing:zw,premultiplied_alpha_fragment:Bw,project_vertex:Gw,dithering_fragment:Hw,dithering_pars_fragment:Vw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:qw,shadowmap_pars_vertex:Yw,shadowmap_vertex:$w,shadowmask_pars_fragment:Kw,skinbase_vertex:jw,skinning_pars_vertex:Zw,skinning_vertex:Jw,skinnormal_vertex:Qw,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:r2,transmission_pars_fragment:s2,uv_pars_fragment:a2,uv_pars_vertex:o2,uv_vertex:l2,worldpos_vertex:c2,background_vert:u2,background_frag:h2,backgroundCube_vert:f2,backgroundCube_frag:d2,cube_vert:p2,cube_frag:m2,depth_vert:g2,depth_frag:v2,distance_vert:_2,distance_frag:x2,equirect_vert:y2,equirect_frag:S2,linedashed_vert:M2,linedashed_frag:w2,meshbasic_vert:T2,meshbasic_frag:E2,meshlambert_vert:b2,meshlambert_frag:A2,meshmatcap_vert:R2,meshmatcap_frag:P2,meshnormal_vert:C2,meshnormal_frag:L2,meshphong_vert:D2,meshphong_frag:N2,meshphysical_vert:I2,meshphysical_frag:U2,meshtoon_vert:k2,meshtoon_frag:F2,points_vert:O2,points_frag:z2,shadow_vert:B2,shadow_frag:G2,sprite_vert:H2,sprite_frag:V2},Se={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},bi={basic:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Sn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Sn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Sn([Se.points,Se.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Sn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Sn([Se.common,Se.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Sn([Se.sprite,Se.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Sn([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Sn([Se.lights,Se.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bi.physical={uniforms:Sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Al={r:0,b:0,g:0},W2=new rt,K_=new He;K_.set(-1,0,0,0,1,0,0,0,1);function X2(n,e,t,i,r,s){const a=new Ue(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function p(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const S=g.backgroundBlurriness>0;y=e.get(y,S)}return y}function v(g){let y=!1;const S=p(g);S===null?m(a,o):S&&S.isColor&&(m(S,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(g,y){const S=p(y);S&&S.isCubeTexture?(c===void 0&&(c=new W(new et(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:pa(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(K_),c.material.toneMapped=Je.getTransfer(S.colorSpace)!==ft,(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new W(new Mr(2,2),new cs({name:"BackgroundMaterial",uniforms:pa(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,y){g.getRGB(Al,W_(n)),t.buffers.color.setClear(Al.r,Al.g,Al.b,y,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:v,addToRenderList:_,dispose:h}}function q2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(L,P,I,R,O){let X=!1;const D=f(L,R,I,P);s!==D&&(s=D,c(s.object)),X=p(L,R,I,O),X&&v(L,R,I,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(L,P,I,R),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function f(L,P,I,R){const O=R.wireframe===!0;let X=i[P.id];X===void 0&&(X={},i[P.id]=X);const D=L.isInstancedMesh===!0?L.id:0;let k=X[D];k===void 0&&(k={},X[D]=k);let U=k[I.id];U===void 0&&(U={},k[I.id]=U);let G=U[O];return G===void 0&&(G=d(l()),U[O]=G),G}function d(L){const P=[],I=[],R=[];for(let O=0;O<t;O++)P[O]=0,I[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:R,object:L,attributes:{},index:null}}function p(L,P,I,R){const O=s.attributes,X=P.attributes;let D=0;const k=I.getAttributes();for(const U in k)if(k[U].location>=0){const K=O[U];let re=X[U];if(re===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;D++}return s.attributesNum!==D||s.index!==R}function v(L,P,I,R){const O={},X=P.attributes;let D=0;const k=I.getAttributes();for(const U in k)if(k[U].location>=0){let K=X[U];K===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),O[U]=re,D++}s.attributes=O,s.attributesNum=D,s.index=R}function _(){const L=s.newAttributes;for(let P=0,I=L.length;P<I;P++)L[P]=0}function m(L){h(L,0)}function h(L,P){const I=s.newAttributes,R=s.enabledAttributes,O=s.attributeDivisors;I[L]=1,R[L]===0&&(n.enableVertexAttribArray(L),R[L]=1),O[L]!==P&&(n.vertexAttribDivisor(L,P),O[L]=P)}function g(){const L=s.newAttributes,P=s.enabledAttributes;for(let I=0,R=P.length;I<R;I++)P[I]!==L[I]&&(n.disableVertexAttribArray(I),P[I]=0)}function y(L,P,I,R,O,X,D){D===!0?n.vertexAttribIPointer(L,P,I,O,X):n.vertexAttribPointer(L,P,I,R,O,X)}function S(L,P,I,R){_();const O=R.attributes,X=I.getAttributes(),D=P.defaultAttributeValues;for(const k in X){const U=X[k];if(U.location>=0){let G=O[k];if(G===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const K=G.normalized,re=G.itemSize,Te=e.get(G);if(Te===void 0)continue;const j=Te.buffer,le=Te.type,ce=Te.bytesPerElement,we=le===n.INT||le===n.UNSIGNED_INT||G.gpuType===Kd;if(G.isInterleavedBufferAttribute){const _e=G.data,Be=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,ct=G.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Ne=0;Ne<U.locationSize;Ne++)h(U.location+Ne,_e.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ne=0;Ne<U.locationSize;Ne++)m(U.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Ne=0;Ne<U.locationSize;Ne++)y(U.location+Ne,re/U.locationSize,le,K,Be*ce,(ct+re/U.locationSize*Ne)*ce,we)}else{if(G.isInstancedBufferAttribute){for(let _e=0;_e<U.locationSize;_e++)h(U.location+_e,G.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let _e=0;_e<U.locationSize;_e++)m(U.location+_e);n.bindBuffer(n.ARRAY_BUFFER,j);for(let _e=0;_e<U.locationSize;_e++)y(U.location+_e,re/U.locationSize,le,K,re*ce,re/U.locationSize*_e*ce,we)}}else if(D!==void 0){const K=D[k];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(U.location,K);break;case 3:n.vertexAttrib3fv(U.location,K);break;case 4:n.vertexAttrib4fv(U.location,K);break;default:n.vertexAttrib1fv(U.location,K)}}}}g()}function b(){N();for(const L in i){const P=i[L];for(const I in P){const R=P[I];for(const O in R){const X=R[O];for(const D in X)u(X[D].object),delete X[D];delete R[O]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const P=i[L.id];for(const I in P){const R=P[I];for(const O in R){const X=R[O];for(const D in X)u(X[D].object),delete X[D];delete R[O]}}delete i[L.id]}function x(L){for(const P in i){const I=i[P];for(const R in I){const O=I[R];if(O[L.id]===void 0)continue;const X=O[L.id];for(const D in X)u(X[D].object),delete X[D];delete O[L.id]}}}function M(L){for(const P in i){const I=i[P],R=L.isInstancedMesh===!0?L.id:0,O=I[R];if(O!==void 0){for(const X in O){const D=O[X];for(const k in D)u(D[k].object),delete D[k];delete O[X]}delete I[R],Object.keys(I).length===0&&delete i[P]}}}function N(){A(),a=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function Y2(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function $2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==Ri&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const M=x===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==zn&&x!==mi&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:S,maxSamples:b,samples:T}}function K2(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new dr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,y=g*4;let S=h.clippingState||null;l.value=S,S=u(v,d,y,p);for(let b=0;b!==y;++b)S[b]=t[b];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const h=p+_*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,S=p;y!==_;++y,S+=4)a.copy(f[y]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}class cp extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new G_(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new et(5,5,5),s=new cs({name:"CubemapFromEquirect",uniforms:pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:na});s.uniforms.tEquirect.value=t;const a=new W(r,s),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=Pn),new $f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const M0=256,j2=3,Z2=20,j_=256,Z_=16,J2=3,Q2=new z,eT=new Ue;class Lc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $f(1,10,null),this._boxMesh=new W(new et(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Q2}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(eT));const m=new $f(i,r,u);return m.position.copy(o),m.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=v,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(M0,yS(e))}_fromTexture(e,t){e.mapping===ha||e.mapping===wo?this._setSize(e.image.length===0?M0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=w0(e,!1,!1),i=Math.log2(e)-j2;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=w0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ha||e.mapping===wo?(this._cubemapMaterial===null&&(this._cubemapMaterial=E0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=T0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=tT(),this._integrationMaterial=nT());const t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Z_);for(let a=0;a<=i;a++){const o=Lc.lodToRoughness(a,i);if(a>i-J2)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(j_*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=iT());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function w0(n,e,t){return new cp(n,{minFilter:yr,generateMipmaps:e,type:Ii,colorSpace:wc,depthBuffer:t})}function Do(n,e,t){return new cs({name:n,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:t,side:Nn,blending:na,depthTest:!1,depthWrite:!1})}function tT(){return Do("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${j_}u

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
	`)}function nT(){return Do("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Z_}},`

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
	`)}function iT(){return Do("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function T0(){return Do("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function E0(){return Do("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rT(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Du||p===Nu)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const _=new cp(v.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,v=p===Du||p===Nu,_=p===ha||p===wo;if(v||_){let m=t.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new Lc(n)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return v&&g&&g.height>0||_&&g&&l(g)?(i===null&&(i=new Lc(n)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===Du?d.mapping=ha:p===Nu&&(d.mapping=wo),d}function l(d){let p=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&p++;return p===v}function c(d){const p=d.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function sT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ql("WebGLRenderer: "+i+" extension not supported."),r}}}function aT(n,e,t,i){const r={},s=new WeakMap,a=new FinalizationRegistry(v=>delete r[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const m in v.attributes)e.remove(v.attributes[m]);v.removeEventListener("dispose",o),delete r[v.id],a.unregister(v);const _=s.get(v);_&&(e.remove(_),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,_){return r[_.id]!==void 0||(_.addEventListener("dispose",o),r[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function u(v){const _=v.attributes;for(const m in _)e.update(_[m],n.ARRAY_BUFFER)}function f(v){const _=v.index,m=v.attributes.position;let h=0;if(m===void 0)return;const g=_!==null?_.array.length:m.array.length/3-1,y=m.count>=65535?U_:I_,S=new y(Math.ceil(g/3)*6,1),b=S.array;if(_!==null){const x=_.array;h=_.version;for(let M=0,N=0;M<g;M+=3){const A=x[M+0],L=x[M+1],P=x[M+2];b[N++]=A,b[N++]=L,b[N++]=L,b[N++]=P,b[N++]=P,b[N++]=A}}else{h=m.version;for(let x=0,M=0;x<g;x+=3){const N=x+0,A=x+1,L=x+2;b[M++]=N,b[M++]=A,b[M++]=A,b[M++]=L,b[M++]=L,b[M++]=N}}S.version=h;const T=s.get(v);T&&e.remove(T),s.set(v,S)}function d(v){const _=s.get(v);if(_){const m=v.index;m!==null&&_.version<m.version&&f(v)}else f(v);return s.get(v)}function p(){for(const v in r){const _=r[v].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function oT(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,f*a,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let _=0;for(let m=0;m<p;m++)_+=d[m];t.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function lT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cT(n,e,t){const i=new WeakMap,r=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let A=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var p=A;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const x=new Float32Array(b*T*4*f),M=new L_(x,b,T,f);M.type=mi,M.needsUpdate=!0;const N=S*4;for(let L=0;L<f;L++){const P=h[L],I=g[L],R=y[L],O=b*T*4*L;for(let X=0;X<P.count;X++){const D=X*N;v===!0&&(r.fromBufferAttribute(P,X),x[O+D+0]=r.x,x[O+D+1]=r.y,x[O+D+2]=r.z,x[O+D+3]=0),_===!0&&(r.fromBufferAttribute(I,X),x[O+D+4]=r.x,x[O+D+5]=r.y,x[O+D+6]=r.z,x[O+D+7]=0),m===!0&&(r.fromBufferAttribute(R,X),x[O+D+8]=r.x,x[O+D+9]=r.y,x[O+D+10]=r.z,x[O+D+11]=R.itemSize===4?r.w:1)}}d={count:f,texture:M,size:new ze(b,T)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function uT(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const hT={[h_]:"LINEAR_TONE_MAPPING",[f_]:"REINHARD_TONE_MAPPING",[d_]:"CINEON_TONE_MAPPING",[$d]:"ACES_FILMIC_TONE_MAPPING",[m_]:"AGX_TONE_MAPPING",[g_]:"NEUTRAL_TONE_MAPPING",[p_]:"CUSTOM_TONE_MAPPING"};function fT(n,e,t,i,r,s){const a=new Di(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Ot;u.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new lt([0,2,0,0,2,0],2));const f=new tM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new W(u,f),p=new Y_(-1,1,1,-1,0,1);let v=null,_=null,m=!1,h,g=null,y=[],S=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),l!==null&&l.setSize(b,T);for(let x=0;x<y.length;x++){const M=y[x];M.setSize&&M.setSize(b,T)}},this.setEffects=function(b){y=b,S=y.length>0&&y[0].isRenderPass===!0;const T=a.width,x=a.height;y.length>0&&o===null&&(o=new Di(T,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new Di(T,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&y.some(N=>N.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new da(T,x),s===!0&&(c.format=Sr,c.type=fa)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let N=0;N<y.length;N++){const A=y[N];A.setSize&&A.setSize(T,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,T){if(m||b.toneMapping===Ki&&y.length===0)return!1;if(g=T,T!==null){const x=T.width,M=T.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return S===!1&&b.setRenderTarget(a),h=b.toneMapping,b.toneMapping=Ki,!0},this.hasRenderPass=function(){return S},this.end=function(b,T){b.toneMapping=h,m=!0;let x=a,M=o;for(let N=0;N<y.length;N++){const A=y[N];A.enabled!==!1&&(A.render(b,M,x,T),A.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(v!==b.outputColorSpace||_!==b.toneMapping){v=b.outputColorSpace,_=b.toneMapping,f.defines={},Je.getTransfer(v)===ft&&(f.defines.SRGB_TRANSFER="");const N=hT[_];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(g),b.render(d,p),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const J_=new an,Q_=new da(1,1),ex=new H_(1),tx=new L_,nx=new bS,ix=new G_,b0=[],A0=[],R0=new Float32Array(16),P0=new Float32Array(9),C0=new Float32Array(4);function ya(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=b0[r];if(s===void 0&&(s=new Float32Array(r),b0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qc(n,e){let t=A0[e];t===void 0&&(t=new Int32Array(e),A0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function vT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;C0.set(i),n.uniformMatrix2fv(this.addr,!1,C0),Yt(t,i)}}function _T(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;P0.set(i),n.uniformMatrix3fv(this.addr,!1,P0),Yt(t,i)}}function xT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;R0.set(i),n.uniformMatrix4fv(this.addr,!1,R0),Yt(t,i)}}function yT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ST(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function TT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function eu(n){return n.version===0&&(n.compareFunction=b_,n.needsUpdate=!0),n}function RT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=eu(Q_):s=J_,t.setTexture2D(e||s,r)}function PT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||nx,r)}function CT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=eu(ex):s=ix,t.setTextureCube(e||s,r)}function LT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tx,r)}function DT(n){switch(n){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return vT;case 35675:return _T;case 35676:return xT;case 5124:case 35670:return yT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return wT;case 5125:return TT;case 36294:return ET;case 36295:return bT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return LT}}function NT(n,e){n.uniform1fv(this.addr,e)}function IT(n,e){const t=ya(e,this.size,2);n.uniform2fv(this.addr,t)}function UT(n,e){const t=ya(e,this.size,3);n.uniform3fv(this.addr,t)}function kT(n,e){const t=ya(e,this.size,4);n.uniform4fv(this.addr,t)}function FT(n,e){const t=ya(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OT(n,e){const t=ya(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zT(n,e){const t=ya(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BT(n,e){n.uniform1iv(this.addr,e)}function GT(n,e){n.uniform2iv(this.addr,e)}function HT(n,e){n.uniform3iv(this.addr,e)}function VT(n,e){n.uniform4iv(this.addr,e)}function WT(n,e){n.uniform1uiv(this.addr,e)}function XT(n,e){n.uniform2uiv(this.addr,e)}function qT(n,e){n.uniform3uiv(this.addr,e)}function YT(n,e){n.uniform4uiv(this.addr,e)}function $T(n,e,t){const i=this.cache,r=e.length,s=Qc(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=eu(Q_):a=J_;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function KT(n,e,t){const i=this.cache,r=e.length,s=Qc(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nx,s[a])}function jT(n,e,t){const i=this.cache,r=e.length,s=Qc(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=eu(ex):a=ix;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function ZT(n,e,t){const i=this.cache,r=e.length,s=Qc(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||tx,s[a])}function JT(n){switch(n){case 5126:return NT;case 35664:return IT;case 35665:return UT;case 35666:return kT;case 35674:return FT;case 35675:return OT;case 35676:return zT;case 5124:case 35670:return BT;case 35667:case 35671:return GT;case 35668:case 35672:return HT;case 35669:case 35673:return VT;case 5125:return WT;case 36294:return XT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return ZT}}class QT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=DT(t.type)}}class eE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JT(t.type)}}class tE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function L0(n,e){n.seq.push(e),n.map[e.id]=e}function nE(n,e,t){const i=n.name,r=i.length;for(hh.lastIndex=0;;){const s=hh.exec(i),a=hh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){L0(t,c===void 0?new QT(o,n,e):new eE(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new tE(o),L0(t,f)),t=f}}}class Yl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function D0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iE=37297;let rE=0;function sE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const N0=new He;function aE(n){Je._getMatrix(N0,Je.workingColorSpace,n);const e=`mat3( ${N0.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Tc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function I0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+sE(n.getShaderSource(e),o)}else return s}function oE(n,e){const t=aE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const lE={[h_]:"Linear",[f_]:"Reinhard",[d_]:"Cineon",[$d]:"ACESFilmic",[m_]:"AgX",[g_]:"Neutral",[p_]:"Custom"};function cE(n,e){const t=lE[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rl=new z;function uE(){Je.getLuminanceCoefficients(Rl);const n=Rl.x.toFixed(4),e=Rl.y.toFixed(4),t=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function fE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qa(n){return n!==""}function U0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function k0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(n){return n.replace(pE,mE)}function mE(n,e){const t=Ye[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Kf(t)}const gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(n){return n.replace(gE,vE)}function vE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function O0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const _E={[Gl]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function xE(n){return _E[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yE={[wo]:"ENVMAP_MODE_REFRACTION"};function SE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[Yd]:"ENVMAP_BLENDING_MULTIPLY",[rS]:"ENVMAP_BLENDING_MIX",[sS]:"ENVMAP_BLENDING_ADD"};function wE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ME[n.combine]||"ENVMAP_BLENDING_NONE"}function TE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=SE(t),f=wE(t),d=hE(t),p=fE(s),v=r.createProgram();let _,m,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(qa).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(qa).join(`
`),m.length>0&&(m+=`
`)):(_=[O0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),m=[O0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ki?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,oE("linearToOutputTexel",t.outputColorSpace),uE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=Kf(a),a=U0(a,t),a=k0(a,t),o=Kf(o),o=U0(o,t),o=k0(o,t),a=F0(a),o=F0(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const g=h+_+a,y=h+m+o,S=D0(r,r.VERTEX_SHADER,g),b=D0(r,r.FRAGMENT_SHADER,y);r.attachShader(v,S),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(A){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",P=r.getShaderInfoLog(S)||"",I=r.getShaderInfoLog(b)||"",R=L.trim(),O=P.trim(),X=I.trim();let D=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,S,b);else{const U=I0(r,S,"vertex"),G=I0(r,b,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+R+`
`+U+`
`+G)}else R!==""?Oe("WebGLProgram: Program Info Log:",R):(O===""||X==="")&&(k=!1);k&&(A.diagnostics={runnable:D,programLog:R,vertexShader:{log:O,prefix:_},fragmentShader:{log:X,prefix:m}})}r.deleteShader(S),r.deleteShader(b),x=new Yl(r,v),M=dE(r,v)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(v,iE)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}let EE=0;class bE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AE(e),t.set(e,i)),i}}class AE{constructor(e){this.id=EE++,this.code=e,this.usedTimes=0}}function RE(n){return n===ls||n===yc||n===Sc}function PE(n,e,t,i,r,s){const a=new D_,o=new bE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,M,N,A,L,P){const I=A.fog,R=L.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=e.get(x.envMap||O,X),k=d[x.type];let U=i.precision;x.precision!==null&&(U=i.getMaxPrecision(x.precision),U!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",U,"instead."));const G=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=G!==void 0?G.length:0;let re=0;R.morphAttributes.position!==void 0&&(re=1),R.morphAttributes.normal!==void 0&&(re=2),R.morphAttributes.color!==void 0&&(re=3);let Te,j,le,ce;if(k){const ye=bi[k];Te=ye.vertexShader,j=ye.fragmentShader}else{Te=x.vertexShader,j=x.fragmentShader;const ye=o.getVertexShaderStage(x),ht=o.getFragmentShaderStage(x);o.update(x,ye,ht),le=ye.id,ce=ht.id}const we=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,ct=L.isBatchedMesh===!0,Ne=!!x.map,st=!!x.matcap,Fe=!!D,Xe=Fe&&D.isPMREMTexture===!0,kt=!!x.aoMap,ut=!!x.lightMap,At=!!x.bumpMap&&x.wireframe===!1,gt=!!x.normalMap,yi=!!x.displacementMap,$t=!!x.emissiveMap,Xn=!!x.metalnessMap,qn=!!x.roughnessMap,Yn=x.anisotropy>0,H=x.clearcoat>0,$n=x.diffuseRoughness>0,Tt=x.dispersion>0,Et=x.retroreflectivity>0,xe=x.iridescence>0,Ht=x.sheen>0,ke=x.transmission>0,Ge=Yn&&!!x.anisotropyMap,C=H&&!!x.clearcoatMap,w=H&&!!x.clearcoatNormalMap,Y=H&&!!x.clearcoatRoughnessMap,se=$n&&!!x.diffuseRoughnessMap,ne=xe&&!!x.iridescenceMap,he=xe&&!!x.iridescenceThicknessMap,ge=Ht&&!!x.sheenColorMap,Q=Ht&&!!x.sheenRoughnessMap,ee=!!x.specularMap,de=!!x.specularColorMap,F=!!x.specularIntensityMap,te=ke&&!!x.transmissionMap,J=ke&&!!x.thicknessMap,pe=!!x.gradientMap,ue=!!x.alphaMap,fe=x.alphaTest>0,De=!!x.alphaHash,qe=!!x.extensions;let oe=Ki;x.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(oe=n.toneMapping);const Ie=Xe?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,We={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:Te,fragmentShader:j,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:U,batching:ct,batchingColor:ct&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:st,envMap:Fe,envMapMode:Fe&&D.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Ie.length-1:null,envMapSize:Xe?Ie[0].width:null,aoMap:kt,lightMap:ut,bumpMap:At,normalMap:gt,displacementMap:yi,emissiveMap:$t,normalMapObjectSpace:gt&&x.normalMapType===lS,normalMapTangentSpace:gt&&x.normalMapType===Mc,packedNormalMap:gt&&x.normalMapType===Mc&&RE(x.normalMap.format),metalnessMap:Xn,roughnessMap:qn,anisotropy:Yn,anisotropyMap:Ge,clearcoat:H,clearcoatMap:C,clearcoatNormalMap:w,clearcoatRoughnessMap:Y,diffuseRoughness:$n,diffuseRoughnessMap:se,dispersion:Tt,retroreflection:Et,iridescence:xe,iridescenceMap:ne,iridescenceThicknessMap:he,sheen:Ht,sheenColorMap:ge,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:de,specularIntensityMap:F,transmission:ke,transmissionMap:te,thicknessMap:J,gradientMap:pe,opaque:x.transparent===!1&&x.blending===io&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:De,combine:x.combine,mapUv:Ne&&p(x.map.channel),aoMapUv:kt&&p(x.aoMap.channel),lightMapUv:ut&&p(x.lightMap.channel),bumpMapUv:At&&p(x.bumpMap.channel),normalMapUv:gt&&p(x.normalMap.channel),displacementMapUv:yi&&p(x.displacementMap.channel),emissiveMapUv:$t&&p(x.emissiveMap.channel),metalnessMapUv:Xn&&p(x.metalnessMap.channel),roughnessMapUv:qn&&p(x.roughnessMap.channel),anisotropyMapUv:Ge&&p(x.anisotropyMap.channel),clearcoatMapUv:C&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(x.sheenRoughnessMap.channel),specularMapUv:ee&&p(x.specularMap.channel),specularColorMapUv:de&&p(x.specularColorMap.channel),specularIntensityMapUv:F&&p(x.specularIntensityMap.channel),transmissionMapUv:te&&p(x.transmissionMap.channel),thicknessMapUv:J&&p(x.thicknessMap.channel),alphaMapUv:ue&&p(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(gt||Yn),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(Ne||ue),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&gt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:re,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:P.filter(ye=>ye.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:$t&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===Nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)M.push(N),M.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(M,x),h(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function h(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function g(x){const M=d[x.type];let N;if(M){const A=bi[M];N=JS.clone(A.uniforms)}else N=x.uniforms;return N}function y(x,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new TE(n,M,x,r),c.push(N),u.set(M,N)),N}function S(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:g,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:T}}function CE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function LE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function B0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,v,_,m,h){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:p,material:v,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:h},n[e]=g):(g.id=d.id,g.object=d,g.geometry=p,g.material=v,g.materialVariant=a(d),g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=m,g.group=h),e++,g}function l(d,p,v,_,m,h,g){g.reversedDepth===!0&&(m=-m);const y=o(d,p,v,_,m,h);v.transmission>0?i.push(y):v.transparent===!0?r.push(y):t.push(y)}function c(d,p,v,_,m,h){const g=o(d,p,v,_,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,p){t.length>1&&t.sort(d||LE),i.length>1&&i.sort(p||z0),r.length>1&&r.sort(p||z0)}function f(){for(let d=e,p=n.length;d<p;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function DE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new B0,n.set(i,[a])):r>=s.length?(a=new B0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function NE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ue};break;case"SpotLight":t={position:new z,direction:new z,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function IE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UE=0;function kE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FE(n){const e=new NE,t=IE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new rt,a=new rt;function o(c){let u=0,f=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let p=0,v=0,_=0,m=0,h=0,g=0,y=0,S=0,b=0,T=0,x=0,M=0,N=0,A=0;c.sort(kE);for(let P=0,I=c.length;P<I;P++){const R=c[P],O=R.color,X=R.intensity,D=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ls?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*X,f+=O.g*X,d+=O.b*X;else if(R.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(R.sh.coefficients[U],X);A++}else if(R.isSunLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,K=t.get(R);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[v]=K,i.sunShadowMap[v]=k;const re=G.getViewportCount();for(let Te=0;Te<re;Te++)i.sunShadowMatrix[_+Te]=G.getMatrix(Te),i.sunShadowCascade[_+Te]=G._cascadeData[Te];_+=re,v++}i.sun[p]=U,p++}else if(R.isDirectionalLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,K=t.get(R);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=U,m++}else if(R.isSpotLight){const U=e.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(O).multiplyScalar(X),U.distance=D,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,i.spot[g]=U;const G=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,G.updateMatrices(R),R.castShadow&&N++),i.spotLightMatrix[g]=G.matrix,R.castShadow){const K=t.get(R);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=k,x++}g++}else if(R.isRectAreaLight){const U=e.get(R);U.color.copy(O).multiplyScalar(X),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=U,y++}else if(R.isPointLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const G=R.shadow,K=t.get(R);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,i.pointShadow[h]=K,i.pointShadowMap[h]=k,i.pointShadowMatrix[h]=R.shadow.matrix,T++}i.point[h]=U,h++}else if(R.isHemisphereLight){const U=e.get(R);U.skyColor.copy(R.color).multiplyScalar(X),U.groundColor.copy(R.groundColor).multiplyScalar(X),i.hemi[S]=U,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==h||L.spotLength!==g||L.rectAreaLength!==y||L.hemiLength!==S||L.numSunShadows!==v||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=m,i.spot.length=g,i.rectArea.length=y,i.point.length=h,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-N,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=A,L.sunLength=p,L.directionalLength=m,L.pointLength=h,L.spotLength=g,L.rectAreaLength=y,L.hemiLength=S,L.numSunShadows=v,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=A,i.version=UE++)}function l(c,u){let f=0,d=0,p=0,v=0,_=0,m=0;const h=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const S=c[g];if(S.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(h),f++}else if(S.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),d++}else if(S.isSpotLight){const b=i.spot[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),v++}else if(S.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),a.identity(),s.copy(S.matrixWorld),s.premultiply(h),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function G0(n){const e=new FE(n),t=[],i=[],r=[];function s(f){u.camera=f,t.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function OE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new G0(n),e.set(r,[o])):s>=a.length?(o=new G0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const zE=`void main() {
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
}`,GE=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],HE=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],H0=new rt,Ba=new z,fh=new z;function VE(n,e,t){let i=new bo;const r=new ze,s=new ze,a=new Ct,o=new iM,l=new rM,c={},u=t.maxTextureSize,f={[os]:Nn,[Nn]:os,[On]:On},d=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:zE,fragmentShader:BE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ot;v.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new W(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let h=this.type;this.render=function(T,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===l_&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gl);const N=n.getRenderTarget(),A=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),P=n.state;P.setBlending(na),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=h!==this.type;I&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=T.length;R<O;R++){const X=T[R],D=X.shadow;if(D===void 0){Oe("WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();r.multiply(k),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,D.mapSize.y=s.y));const U=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=U,D.map===null||I===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Xa){if(X.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Di(r.x,r.y,{format:ls,type:Ii,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),D.map.texture.name=X.name+".shadowMap",D.map.depthTexture=new da(r.x,r.y,mi),D.map.depthTexture.name=X.name+".shadowMapDepth",D.map.depthTexture.format=Nr,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=rn,D.map.depthTexture.magFilter=rn}else X.isPointLight?(D.map=new cp(r.x),D.map.depthTexture=new H_(r.x,Ni)):(D.map=new Di(r.x,r.y),D.map.depthTexture=new da(r.x,r.y,Ni)),D.map.depthTexture.name=X.name+".shadowMap",D.map.depthTexture.format=Nr,this.type===Gl?(D.map.depthTexture.compareFunction=U?E_:T_,D.map.depthTexture.minFilter=Pn,D.map.depthTexture.magFilter=Pn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=rn,D.map.depthTexture.magFilter=rn);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==r.x||D.map.height!==r.y)&&D.map.setSize(r.x,r.y);const G=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();X.isPointLight!==!0&&D.updateMatrices(X,M);const K=D.camera.layers.mask&4294967294?D.camera.layers:M.layers;for(let re=0;re<G;re++){const Te=D.getCamera(re);if(X.isPointLight){const j=D.camera,le=D.matrix,ce=X.distance||j.far;ce!==j.far&&(j.far=ce,j.updateProjectionMatrix()),Ba.setFromMatrixPosition(X.matrixWorld),j.position.copy(Ba),fh.copy(j.position),fh.add(GE[re]),j.up.copy(HE[re]),j.lookAt(fh),j.updateMatrixWorld(),le.makeTranslation(-Ba.x,-Ba.y,-Ba.z),H0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),D._frustum.setFromProjectionMatrix(H0,j.coordinateSystem,j.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,re),n.clear();else{re===0&&(n.setRenderTarget(D.map),n.clear());const j=D.getViewport(re);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),P.viewport(a)}i=D.getFrustum(re),S(x,M,Te,X,K,this.type)}D.isPointLightShadow!==!0&&this.type===Xa&&g(D,M),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(N,A,L)};function g(T,x){const M=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Di(r.x,r.y,{format:ls,type:Ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,M,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,M,p,_,null)}function y(T,x,M,N){let A=null;const L=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)A=L;else if(A=M.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const P=A.uuid,I=x.uuid;let R=c[P];R===void 0&&(R={},c[P]=R);let O=R[I];O===void 0&&(O=A.clone(),R[I]=O,x.addEventListener("dispose",b)),A=O}if(A.visible=x.visible,A.wireframe=x.wireframe,N===Xa?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=n.properties.get(A);P.light=M}return A}function S(T,x,M,N,A,L){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Xa)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const R=e.update(T),O=T.material;if(Array.isArray(O)){const X=R.groups;for(let D=0,k=X.length;D<k;D++){const U=X[D],G=O[U.materialIndex];if(G&&G.visible){const K=y(T,G,N,L);T.onBeforeShadow(n,T,x,M,R,K,U),n.renderBufferDirect(M,null,R,K,T,U),T.onAfterShadow(n,T,x,M,R,K,U)}}}else if(O.visible){const X=y(T,O,N,L);T.onBeforeShadow(n,T,x,M,R,X,null),n.renderBufferDirect(M,null,R,X,T,null),T.onAfterShadow(n,T,x,M,R,X,null)}}const I=T.children;for(let R=0,O=I.length;R<O;R++)S(I[R],x,M,N,A,L)}function b(T){T.target.removeEventListener("dispose",b);for(const M in c){const N=c[M],A=T.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}function WE(n,e){function t(){let F=!1;const te=new Ct;let J=null;const pe=new Ct(0,0,0,0);return{setMask:function(ue){J!==ue&&!F&&(n.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){F=ue},setClear:function(ue,fe,De,qe,oe){oe===!0&&(ue*=qe,fe*=qe,De*=qe),te.set(ue,fe,De,qe),pe.equals(te)===!1&&(n.clearColor(ue,fe,De,qe),pe.copy(te))},reset:function(){F=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let F=!1,te=!1,J=null,pe=null,ue=null;return{setReversed:function(fe){if(te!==fe){const De=e.get("EXT_clip_control");fe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),te=fe;const qe=ue;ue=null,this.setClear(qe)}},getReversed:function(){return te},setTest:function(fe){fe?_e(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(fe){J!==fe&&!F&&(n.depthMask(fe),J=fe)},setFunc:function(fe){if(te&&(fe=_S[fe]),pe!==fe){switch(fe){case lf:n.depthFunc(n.NEVER);break;case cf:n.depthFunc(n.ALWAYS);break;case uf:n.depthFunc(n.LESS);break;case Mo:n.depthFunc(n.LEQUAL);break;case hf:n.depthFunc(n.EQUAL);break;case ff:n.depthFunc(n.GEQUAL);break;case df:n.depthFunc(n.GREATER);break;case pf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=fe}},setLocked:function(fe){F=fe},setClear:function(fe){ue!==fe&&(ue=fe,te&&(fe=1-fe),n.clearDepth(fe))},reset:function(){F=!1,J=null,pe=null,ue=null,te=!1}}}function r(){let F=!1,te=null,J=null,pe=null,ue=null,fe=null,De=null,qe=null,oe=null;return{setTest:function(Ie){F||(Ie?_e(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(Ie){te!==Ie&&!F&&(n.stencilMask(Ie),te=Ie)},setFunc:function(Ie,We,ye){(J!==Ie||pe!==We||ue!==ye)&&(n.stencilFunc(Ie,We,ye),J=Ie,pe=We,ue=ye)},setOp:function(Ie,We,ye){(fe!==Ie||De!==We||qe!==ye)&&(n.stencilOp(Ie,We,ye),fe=Ie,De=We,qe=ye)},setLocked:function(Ie){F=Ie},setClear:function(Ie){oe!==Ie&&(n.clearStencil(Ie),oe=Ie)},reset:function(){F=!1,te=null,J=null,pe=null,ue=null,fe=null,De=null,qe=null,oe=null}}}const s=new t,a=new i,o=new r;let l={};const c=new WeakMap;let u={},f={},d={},p=new WeakMap,v=[],_=null,m=!1,h=null,g=null,y=null,S=null,b=null,T=null,x=null,M=new Ue(0,0,0),N=0,A=!1,L=null,P=null,I=null,R=null,O=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=k>=1):U.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=k>=2);let G=null,K={};const re=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),j=new Ct().fromArray(re),le=new Ct().fromArray(Te);function ce(F,te,J,pe){const ue=new Uint8Array(4),fe=n.createTexture();n.bindTexture(F,fe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<J;De++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(te+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return fe}const we={};we[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),a.setFunc(Mo),At(!1),gt(Im),_e(n.CULL_FACE),kt(na);function _e(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Be(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function ct(F,te){return d[F]!==te?(n.bindFramebuffer(F,te),d[F]=te,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=te),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ne(F,te){let J=v,pe=!1;if(F){J=p.get(te),J===void 0&&(J=[],p.set(te,J));const ue=F.textures;if(J.length!==ue.length||J[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,De=ue.length;fe<De;fe++)J[fe]=n.COLOR_ATTACHMENT0+fe;J.length=ue.length,pe=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,pe=!0);pe&&n.drawBuffers(J)}function st(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const Fe={[ks]:n.FUNC_ADD,[Gy]:n.FUNC_SUBTRACT,[Hy]:n.FUNC_REVERSE_SUBTRACT};Fe[Vy]=n.MIN,Fe[Wy]=n.MAX;const Xe={[Xy]:n.ZERO,[qy]:n.ONE,[Yy]:n.SRC_COLOR,[c_]:n.SRC_ALPHA,[Qy]:n.SRC_ALPHA_SATURATE,[Zy]:n.DST_COLOR,[Ky]:n.DST_ALPHA,[$y]:n.ONE_MINUS_SRC_COLOR,[u_]:n.ONE_MINUS_SRC_ALPHA,[Jy]:n.ONE_MINUS_DST_COLOR,[jy]:n.ONE_MINUS_DST_ALPHA,[eS]:n.CONSTANT_COLOR,[tS]:n.ONE_MINUS_CONSTANT_COLOR,[nS]:n.CONSTANT_ALPHA,[iS]:n.ONE_MINUS_CONSTANT_ALPHA};function kt(F,te,J,pe,ue,fe,De,qe,oe,Ie){if(F===na){m===!0&&(Be(n.BLEND),m=!1);return}if(m===!1&&(_e(n.BLEND),m=!0),F!==By){if(F!==h||Ie!==A){if((g!==ks||b!==ks)&&(n.blendEquation(n.FUNC_ADD),g=ks,b=ks),Ie)switch(F){case io:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case Um:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case km:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Um:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case km:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}y=null,S=null,T=null,x=null,M.set(0,0,0),N=0,h=F,A=Ie}return}ue=ue||te,fe=fe||J,De=De||pe,(te!==g||ue!==b)&&(n.blendEquationSeparate(Fe[te],Fe[ue]),g=te,b=ue),(J!==y||pe!==S||fe!==T||De!==x)&&(n.blendFuncSeparate(Xe[J],Xe[pe],Xe[fe],Xe[De]),y=J,S=pe,T=fe,x=De),(qe.equals(M)===!1||oe!==N)&&(n.blendColor(qe.r,qe.g,qe.b,oe),M.copy(qe),N=oe),h=F,A=!1}function ut(F,te){F.side===On?Be(n.CULL_FACE):_e(n.CULL_FACE);let J=F.side===Nn;te&&(J=!J),At(J),F.blending===io&&F.transparent===!1?kt(na):kt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const pe=F.stencilWrite;o.setTest(pe),pe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),$t(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function gt(F){F!==Oy?(_e(n.CULL_FACE),F!==P&&(F===Im?n.cullFace(n.BACK):F===zy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),P=F}function yi(F){F!==I&&(D&&n.lineWidth(F),I=F)}function $t(F,te,J){F?(_e(n.POLYGON_OFFSET_FILL),(R!==te||O!==J)&&(R=te,O=J,a.getReversed()&&(te=-te,J=-J),n.polygonOffset(te,J))):Be(n.POLYGON_OFFSET_FILL)}function Xn(F){F?_e(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function qn(F){F===void 0&&(F=n.TEXTURE0+X-1),G!==F&&(n.activeTexture(F),G=F)}function Yn(F,te,J){J===void 0&&(G===null?J=n.TEXTURE0+X-1:J=G);let pe=K[J];pe===void 0&&(pe={type:void 0,texture:void 0},K[J]=pe),(pe.type!==F||pe.texture!==te)&&(G!==J&&(n.activeTexture(J),G=J),n.bindTexture(F,te||we[F]),pe.type=F,pe.texture=te)}function H(){const F=K[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $n(){try{n.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function Tt(){try{n.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Et(){try{n.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function xe(){try{n.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Ht(){try{n.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Ge(){try{n.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function C(){try{n.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function w(){try{n.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function Y(){try{n.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function se(F){return f[F]!==void 0?f[F]:n.getParameter(F)}function ne(F,te){f[F]!==te&&(n.pixelStorei(F,te),f[F]=te)}function he(F){j.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),j.copy(F))}function ge(F){le.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),le.copy(F))}function Q(F,te){let J=c.get(te);J===void 0&&(J=new WeakMap,c.set(te,J));let pe=J.get(F);pe===void 0&&(pe=n.getUniformBlockIndex(te,F.name),n.uniformBlockBinding(te,pe,pe),J.set(F,pe))}function ee(F,te,J){const ue=c.get(te).get(F);l[ue]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,ue,J),l[ue]=J)}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},G=null,K={},d={},l={},p=new WeakMap,v=[],_=null,m=!1,h=null,g=null,y=null,S=null,b=null,T=null,x=null,M=new Ue(0,0,0),N=0,A=!1,L=null,P=null,I=null,R=null,O=null,j.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:Be,bindFramebuffer:ct,drawBuffers:Ne,useProgram:st,setBlending:kt,setMaterial:ut,setFlipSided:At,setCullFace:gt,setLineWidth:yi,setPolygonOffset:$t,setScissorTest:Xn,activeTexture:qn,bindTexture:Yn,unbindTexture:H,compressedTexImage2D:$n,compressedTexImage3D:Tt,texImage2D:w,texImage3D:Y,pixelStorei:ne,getParameter:se,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Ge,texStorage3D:C,texSubImage2D:Et,texSubImage3D:xe,compressedTexSubImage2D:Ht,compressedTexSubImage3D:ke,scissor:he,viewport:ge,reset:de}}function XE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,f=new Set;let d;const p=new WeakMap,v=new Set,_=new FinalizationRegistry(C=>v.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(C,w){return m?new OffscreenCanvas(C,w):Ec("canvas")}function g(C,w,Y){let se=1;const ne=Ge(C);if((ne.width>Y||ne.height>Y)&&(se=Y/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const he=Math.floor(se*ne.width),ge=Math.floor(se*ne.height);d===void 0&&(d=h(he,ge));const Q=w?h(he,ge):d;return Q.width=he,Q.height=ge,Q.getContext("2d").drawImage(C,0,0,he,ge),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+ge+")."),Q}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function y(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(C,w,Y,se,ne,he=!1){if(C!==null){if(n[C]!==void 0)return n[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ge;se&&(ge=e.get("EXT_texture_norm16"),ge||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=w;if(w===n.RED&&(Y===n.FLOAT&&(Q=n.R32F),Y===n.HALF_FLOAT&&(Q=n.R16F),Y===n.UNSIGNED_BYTE&&(Q=n.R8),Y===n.UNSIGNED_SHORT&&ge&&(Q=ge.R16_EXT),Y===n.SHORT&&ge&&(Q=ge.R16_SNORM_EXT)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.R8UI),Y===n.UNSIGNED_SHORT&&(Q=n.R16UI),Y===n.UNSIGNED_INT&&(Q=n.R32UI),Y===n.BYTE&&(Q=n.R8I),Y===n.SHORT&&(Q=n.R16I),Y===n.INT&&(Q=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(Q=n.RG32F),Y===n.HALF_FLOAT&&(Q=n.RG16F),Y===n.UNSIGNED_BYTE&&(Q=n.RG8),Y===n.UNSIGNED_SHORT&&ge&&(Q=ge.RG16_EXT),Y===n.SHORT&&ge&&(Q=ge.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RG8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RG16UI),Y===n.UNSIGNED_INT&&(Q=n.RG32UI),Y===n.BYTE&&(Q=n.RG8I),Y===n.SHORT&&(Q=n.RG16I),Y===n.INT&&(Q=n.RG32I)),w===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),Y===n.UNSIGNED_INT&&(Q=n.RGB32UI),Y===n.BYTE&&(Q=n.RGB8I),Y===n.SHORT&&(Q=n.RGB16I),Y===n.INT&&(Q=n.RGB32I)),w===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),Y===n.UNSIGNED_INT&&(Q=n.RGBA32UI),Y===n.BYTE&&(Q=n.RGBA8I),Y===n.SHORT&&(Q=n.RGBA16I),Y===n.INT&&(Q=n.RGBA32I)),w===n.RGB&&(Y===n.UNSIGNED_SHORT&&ge&&(Q=ge.RGB16_EXT),Y===n.SHORT&&ge&&(Q=ge.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),w===n.RGBA){const ee=he?Tc:Je.getTransfer(ne);Y===n.FLOAT&&(Q=n.RGBA32F),Y===n.HALF_FLOAT&&(Q=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Q=ee===ft?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&ge&&(Q=ge.RGBA16_EXT),Y===n.SHORT&&ge&&(Q=ge.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(C,w){let Y;return C?w===null||w===Ni||w===fa?Y=n.DEPTH24_STENCIL8:w===mi?Y=n.DEPTH32F_STENCIL8:w===To&&(Y=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ni||w===fa?Y=n.DEPTH_COMPONENT24:w===mi?Y=n.DEPTH_COMPONENT32F:w===To&&(Y=n.DEPTH_COMPONENT16),Y}function M(C,w){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function N(C){const w=new WeakRef(C);i.get(C).__ref=w,v.add(w),_.register(C,w,w)}function A(C){const w=i.get(C).__ref;w!==void 0&&(v.delete(w),_.unregister(w))}function L(C){I(C.target)}function P(C){R(C.target)}function I(C){C.removeEventListener("dispose",L),A(C),X(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&f.delete(C)}function R(C){C.removeEventListener("dispose",P),A(C),k(C)}function O(){for(const C of v){const w=C.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):I(w))}v.clear(),f.clear()}function X(C){const w=i.get(C);if(w.__webglInit===void 0)return;const Y=C.source,se=p.get(Y);if(se){const ne=se[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(C),Object.keys(se).length===0&&p.delete(Y)}i.remove(C)}function D(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const Y=C.source,se=p.get(Y);delete se[w.__cacheKey],a.memory.textures--}function k(C){const w=i.get(C);w.__depthDisposeCallback&&w.__depthDisposeCallback();const Y=C.depthTexture;if(Y&&Y.renderTarget===C&&I(Y),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let he=0;he<w.__webglFramebuffer[ne].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[ne][he]);else n.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[ne]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const se=C.textures;for(let ne=0,he=se.length;ne<he;ne++){const ge=i.get(se[ne]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(se[ne])}i.remove(C)}let U=0;function G(){U=0}function K(){return U}function re(C){U=C}function Te(){const C=U;return C>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function j(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.mipmapsAutoUpdate),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function le(C,w){const Y=i.get(C);if(C.isVideoTexture&&Ht(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){const se=C.image;if(se===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Y,C,w);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function ce(C,w){const Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){ut(Y,C,w);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function we(C,w){const Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){ut(Y,C,w);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function _e(C,w){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){At(Y,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}const Be={[xc]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[mf]:n.MIRRORED_REPEAT},ct={[rn]:n.NEAREST,[aS]:n.NEAREST_MIPMAP_NEAREST,[Qo]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Iu]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},Ne={[uS]:n.NEVER,[b_]:n.ALWAYS,[hS]:n.LESS,[T_]:n.LEQUAL,[fS]:n.EQUAL,[E_]:n.GEQUAL,[dS]:n.GREATER,[pS]:n.NOTEQUAL};function st(C,w){if(w.type===mi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===Iu||w.magFilter===Qo||w.magFilter===yr||w.minFilter===Pn||w.minFilter===Iu||w.minFilter===Qo||w.minFilter===yr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Be[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Be[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Be[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ct[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ct[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===rn||w.minFilter!==Qo&&w.minFilter!==yr||w.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Fe(C,w){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",L),N(w));const se=w.source;let ne=p.get(se);ne===void 0&&(ne={},p.set(se,ne));const he=j(w);if(he!==C.__cacheKey){ne[he]===void 0&&(ne[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ne[he].usedTimes++;const ge=ne[C.__cacheKey];ge!==void 0&&(ne[C.__cacheKey].usedTimes--,ge.usedTimes===0&&D(w)),C.__cacheKey=he,C.__webglTexture=ne[he].texture}return Y}function Xe(C,w,Y){return Math.floor(Math.floor(C/Y)/w)}function kt(C,w,Y,se){const he=C.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Y,se,w.data);else{he.sort((F,te)=>F.start-te.start);let ge=0;for(let F=1;F<he.length;F++){const te=he[ge],J=he[F],pe=te.start+te.count,ue=Xe(J.start,w.width,4),fe=Xe(te.start,w.width,4);J.start<=pe+1&&ue===fe&&Xe(J.start+J.count-1,w.width,4)===ue?te.count=Math.max(te.count,J.start+J.count-te.start):(++ge,he[ge]=J)}he.length=ge+1;const Q=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let F=0,te=he.length;F<te;F++){const J=he[F],pe=Math.floor(J.start/4),ue=Math.ceil(J.count/4),fe=pe%w.width,De=Math.floor(pe/w.width),qe=ue,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,De),t.texSubImage2D(n.TEXTURE_2D,0,fe,De,qe,oe,Y,se,w.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function ut(C,w,Y){let se=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=n.TEXTURE_3D);const ne=Fe(C,w),he=w.source;t.bindTexture(se,C.__webglTexture,n.TEXTURE0+Y);const ge=i.get(he);if(he.version!==ge.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const oe=Je.getPrimaries(Je.workingColorSpace),Ie=w.colorSpace===vr?null:Je.getPrimaries(w.colorSpace),We=w.colorSpace===vr||oe===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ee=g(w.image,!1,r.maxTextureSize);ee=ke(w,ee);const de=s.convert(w.format,w.colorSpace),F=s.convert(w.type);let te=T(w.internalFormat,de,F,w.normalized,w.colorSpace,w.isVideoTexture);st(se,w);let J;const pe=w.mipmaps,ue=w.isVideoTexture!==!0,fe=ge.__version===void 0||ne===!0,De=he.dataReady,qe=M(w,ee);if(w.isDepthTexture)te=x(w.format===Sr,w.type),fe&&(ue?t.texStorage2D(n.TEXTURE_2D,1,te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,de,F,null));else if(w.isDataTexture)if(pe.length>0){ue&&fe&&t.texStorage2D(n.TEXTURE_2D,qe,te,pe[0].width,pe[0].height);for(let oe=0,Ie=pe.length;oe<Ie;oe++)J=pe[oe],ue?De&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,J.width,J.height,de,F,J.data):t.texImage2D(n.TEXTURE_2D,oe,te,J.width,J.height,0,de,F,J.data);w.generateMipmaps=!1}else ue?(fe&&t.texStorage2D(n.TEXTURE_2D,qe,te,ee.width,ee.height),De&&kt(w,ee,de,F)):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,de,F,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ue&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,te,pe[0].width,pe[0].height,ee.depth);for(let oe=0,Ie=pe.length;oe<Ie;oe++)if(J=pe[oe],w.format!==Ri)if(de!==null)if(ue){if(De)if(w.layerUpdates.size>0){const We=S0(J.width,J.height,w.format,w.type);for(const ye of w.layerUpdates){const ht=J.data.subarray(ye*We/J.data.BYTES_PER_ELEMENT,(ye+1)*We/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,ye,J.width,J.height,1,de,ht)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,J.width,J.height,ee.depth,de,J.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,te,J.width,J.height,ee.depth,0,J.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?De&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,J.width,J.height,ee.depth,de,F,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,te,J.width,J.height,ee.depth,0,de,F,J.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ue&&fe&&t.texStorage2D(n.TEXTURE_2D,qe,te,pe[0].width,pe[0].height);for(let oe=0,Ie=pe.length;oe<Ie;oe++)J=pe[oe],w.format!==Ri?de!==null?ue?De&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,J.width,J.height,de,J.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,te,J.width,J.height,0,J.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?De&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,J.width,J.height,de,F,J.data):t.texImage2D(n.TEXTURE_2D,oe,te,J.width,J.height,0,de,F,J.data)}else if(w.isDataArrayTexture)if(ue){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,te,ee.width,ee.height,ee.depth),De)if(w.layerUpdates.size>0){const oe=S0(ee.width,ee.height,w.format,w.type);for(const Ie of w.layerUpdates){const We=ee.data.subarray(Ie*oe/ee.data.BYTES_PER_ELEMENT,(Ie+1)*oe/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,ee.width,ee.height,1,de,F,We)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,F,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,de,F,ee.data);else if(w.isData3DTexture)ue?(fe&&t.texStorage3D(n.TEXTURE_3D,qe,te,ee.width,ee.height,ee.depth),De&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,F,ee.data)):t.texImage3D(n.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,de,F,ee.data);else if(w.isFramebufferTexture){if(fe)if(ue)t.texStorage2D(n.TEXTURE_2D,qe,te,ee.width,ee.height);else{let oe=ee.width,Ie=ee.height;for(let We=0;We<qe;We++)t.texImage2D(n.TEXTURE_2D,We,te,oe,Ie,0,de,F,null),oe>>=1,Ie>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ee.parentNode!==oe){oe.appendChild(ee),f.add(w),oe.onpaint=Ie=>{const We=Ie.changedElements;for(const ye of f)We.includes(ye.image)&&(ye.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{const We=n.RGBA,ye=n.RGBA,ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,We,ye,ht,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pe.length>0){if(ue&&fe){const oe=Ge(pe[0]);t.texStorage2D(n.TEXTURE_2D,qe,te,oe.width,oe.height)}for(let oe=0,Ie=pe.length;oe<Ie;oe++)J=pe[oe],ue?De&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,de,F,J):t.texImage2D(n.TEXTURE_2D,oe,te,de,F,J);w.generateMipmaps=!1}else if(ue){if(fe){const oe=Ge(ee);t.texStorage2D(n.TEXTURE_2D,qe,te,oe.width,oe.height)}De&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,F,ee)}else t.texImage2D(n.TEXTURE_2D,0,te,de,F,ee);y(w)&&w.mipmapsAutoUpdate===!0&&S(se),ge.__version=he.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function At(C,w,Y){if(w.image.length!==6)return;const se=Fe(C,w),ne=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);const he=i.get(ne);if(ne.version!==he.__version||se===!0){t.activeTexture(n.TEXTURE0+Y);const ge=Je.getPrimaries(Je.workingColorSpace),Q=w.colorSpace===vr?null:Je.getPrimaries(w.colorSpace),ee=w.colorSpace===vr||ge===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const de=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,te=[];for(let ye=0;ye<6;ye++)!de&&!F?te[ye]=g(w.image[ye],!0,r.maxCubemapSize):te[ye]=F?w.image[ye].image:w.image[ye],te[ye]=ke(w,te[ye]);const J=te[0],pe=s.convert(w.format,w.colorSpace),ue=s.convert(w.type);let fe=T(w.internalFormat,pe,ue,w.normalized,w.colorSpace);const De=w.isVideoTexture!==!0,qe=he.__version===void 0||se===!0,oe=ne.dataReady;let Ie=M(w,J);st(n.TEXTURE_CUBE_MAP,w);let We;if(w.isDepthTexture){if(fe=x(w.format===Sr,w.type),qe)if(De)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,fe,J.width,J.height);else for(let ye=0;ye<6;ye++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,fe,J.width,J.height,0,pe,ue,null)}else if(de){De&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,fe,J.width,J.height);for(let ye=0;ye<6;ye++){We=te[ye].mipmaps;for(let ht=0;ht<We.length;ht++){const Kt=We[ht];w.format!==Ri?pe!==null?De?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ht,0,0,Kt.width,Kt.height,pe,Kt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ht,fe,Kt.width,Kt.height,0,Kt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ht,0,0,Kt.width,Kt.height,pe,ue,Kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ht,fe,Kt.width,Kt.height,0,pe,ue,Kt.data)}}}else{if(We=w.mipmaps,De&&qe){We.length>0&&Ie++;const ye=Ge(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,fe,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(F){De?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,te[ye].width,te[ye].height,pe,ue,te[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,fe,te[ye].width,te[ye].height,0,pe,ue,te[ye].data);for(let ht=0;ht<We.length;ht++){const ir=We[ht].image[ye].image;De?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ht+1,0,0,ir.width,ir.height,pe,ue,ir.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ht+1,fe,ir.width,ir.height,0,pe,ue,ir.data)}}else{De?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,pe,ue,te[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,fe,pe,ue,te[ye]);for(let ht=0;ht<We.length;ht++){const Kt=We[ht];De?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ht+1,0,0,pe,ue,Kt.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ht+1,fe,pe,ue,Kt.image[ye])}}}y(w)&&w.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),he.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function gt(C,w,Y,se,ne,he){const ge=s.convert(Y.format,Y.colorSpace),Q=s.convert(Y.type),ee=T(Y.internalFormat,ge,Q,Y.normalized,Y.colorSpace),de=i.get(w),F=i.get(Y);if(F.__renderTarget=w,!de.__hasExternalTextures){const te=Math.max(1,w.width>>he),J=Math.max(1,w.height>>he);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,ee,te,J,w.depth,0,ge,Q,null):t.texImage2D(ne,he,ee,te,J,0,ge,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ne,F.__webglTexture,0,Et(w)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ne,F.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function yi(C,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){const se=w.depthTexture,ne=se&&se.isDepthTexture?se.type:null,he=x(w.stencilBuffer,ne),ge=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(w),he,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(w),he,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,he,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,C)}else{const se=w.textures;for(let ne=0;ne<se.length;ne++){const he=se[ne],ge=s.convert(he.format,he.colorSpace),Q=s.convert(he.type),ee=T(he.internalFormat,ge,Q,he.normalized,he.colorSpace);xe(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(w),ee,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(w),ee,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ee,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $t(C,w,Y){const se=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(w.depthTexture);ne.__renderTarget=w;const he=se?w.depthTexture.image[0]:w.depthTexture.image;(!ne.__webglTexture||he.width!==w.width||he.height!==w.height)&&(he.width=w.width,he.height=w.height,w.depthTexture.needsUpdate=!0),se?_e(w.depthTexture,0):le(w.depthTexture,0);const ge=ne.__webglTexture,Q=Et(w),ee=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,de=w.depthTexture.format===Sr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Nr)xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ee,ge,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,de,ee,ge,0);else if(w.depthTexture.format===Sr)xe(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ee,ge,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,de,ee,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xn(C){const w=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const se=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=se}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let se=0;se<6;se++)$t(w.__webglFramebuffer[se],C,se);else C.texture.mipmaps.length>0?$t(w.__webglFramebuffer[0],C,0):$t(w.__webglFramebuffer,C,0);else if(Y){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=n.createRenderbuffer(),yi(w.__webglDepthbuffer[se],C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,he)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),yi(w.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qn(C,w,Y){const se=i.get(C);w!==void 0&&gt(se.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Xn(C)}function Yn(C){const w=C.texture,Y=i.get(C),se=i.get(w);C.addEventListener("dispose",P),N(C);const ne=C.textures,he=C.isWebGLCubeRenderTarget===!0,ge=ne.length>1;if(ge||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=w.version,a.memory.textures++),he){Y.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0){Y.__webglFramebuffer[Q]=[];for(let ee=0;ee<w.mipmaps.length;ee++)Y.__webglFramebuffer[Q][ee]=n.createFramebuffer()}else Y.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Q=0;Q<w.mipmaps.length;Q++)Y.__webglFramebuffer[Q]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ge)for(let Q=0,ee=ne.length;Q<ee;Q++){const de=i.get(ne[Q]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&xe(C)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){const ee=ne[Q];Y.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Q]);const de=s.convert(ee.format,ee.colorSpace),F=s.convert(ee.type),te=T(ee.internalFormat,de,F,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),J=Et(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,te,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),yi(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),st(n.TEXTURE_CUBE_MAP,w);for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)gt(Y.__webglFramebuffer[Q][ee],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else gt(Y.__webglFramebuffer[Q],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(w)?S(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let Q=0,ee=ne.length;Q<ee;Q++){const de=ne[Q],F=i.get(de);let te=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,F.__webglTexture),st(te,de),gt(Y.__webglFramebuffer,C,de,n.COLOR_ATTACHMENT0+Q,te,0),y(de)&&S(te)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,se.__webglTexture),st(Q,w),w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)gt(Y.__webglFramebuffer[ee],C,w,n.COLOR_ATTACHMENT0,Q,ee);else gt(Y.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,Q,0);y(w)?S(Q):w.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Xn(C)}function H(C){const w=C.textures;for(let Y=0,se=w.length;Y<se;Y++){const ne=w[Y];if(y(ne)&&ne.mipmapsAutoUpdate===!0){const he=b(C),ge=i.get(ne).__webglTexture;t.bindTexture(he,ge),S(he),t.unbindTexture()}}}const $n=[];function Tt(C){if(C.samples>0){if(xe(C)===!1){const w=C.textures,Y=C.width,se=C.height;let ne=n.COLOR_BUFFER_BIT;const he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(C),Q=w.length>1;if(Q)for(let de=0;de<w.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<w.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const F=i.get(w[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,Y,se,0,0,Y,se,ne,n.NEAREST),l===!0&&($n.length=0,$n.push(n.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&$n.push(he),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$n))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let de=0;de<w.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const F=i.get(w[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,F,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Et(C){return Math.min(r.maxSamples,C.samples)}function xe(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ht(C){const w=a.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function ke(C,w){const Y=C.colorSpace,se=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==wc&&Y!==vr&&(Je.getTransfer(Y)===ft?(se!==Ri||ne!==zn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",Y)),w}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Te,this.resetTextureUnits=G,this.getTextureUnits=K,this.setTextureUnits=re,this.setTexture2D=le,this.setTexture2DArray=ce,this.setTexture3D=we,this.setTextureCube=_e,this.rebindTextures=qn,this.setupRenderTarget=Yn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Xn,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=xe,this.dispose=O}function qE(n,e){function t(i,r=vr){let s;const a=Je.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===jd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===y_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===S_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===__)return n.BYTE;if(i===x_)return n.SHORT;if(i===To)return n.UNSIGNED_SHORT;if(i===Kd)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===M_)return n.ALPHA;if(i===w_)return n.RGB;if(i===Ri)return n.RGBA;if(i===Nr)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===Jd)return n.RED;if(i===Qd)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===ep)return n.RG_INTEGER;if(i===tp)return n.RGBA_INTEGER;if(i===Hl||i===Vl||i===Wl||i===Xl)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gf||i===vf||i===_f||i===xf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===Sf||i===Mf||i===wf||i===Tf||i===yc||i===Ef)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yf||i===Sf)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===wf)return s.COMPRESSED_R11_EAC;if(i===Tf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===yc)return s.COMPRESSED_RG11_EAC;if(i===Ef)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bf||i===Af||i===Rf||i===Pf||i===Cf||i===Lf||i===Df||i===Nf||i===If||i===Uf||i===kf||i===Ff||i===Of||i===zf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Df)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===If)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ff)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bf||i===Gf||i===Hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bf)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vf||i===Wf||i===Sc||i===Xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const YE=`
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

}`;class KE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new V_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cs({vertexShader:YE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends fs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",m=new KE,h={},g=t.getContextAttributes();let y=null,S=null;const b=[],T=[],x=new ze;let M=null,N=null;const A=new di;A.viewport=new Ct;const L=new di;L.viewport=new Ct;const P=[A,L],I=new lM;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=b[j];return le===void 0&&(le=new Vu,b[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=b[j];return le===void 0&&(le=new Vu,b[j]=le),le.getGripSpace()},this.getHand=function(j){let le=b[j];return le===void 0&&(le=new Vu,b[j]=le),le.getHandSpace()};function X(j){const le=T.indexOf(j.inputSource);if(le===-1)return;const ce=b[le];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||a),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function D(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",k);for(let j=0;j<b.length;j++){const le=T[j];le!==null&&(T[j]=null,b[j].disconnect(le))}R=null,O=null,m.reset();for(const j in h)delete h[j];if(e.setRenderTarget(y),p=null,d=null,f=null,r=null,S=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),N!==null){const j=N.camera;j.fov=N.fov,j.zoom=N.zoom,j.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",D),r.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,we=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?Sr:Nr,we=g.stencil?fa:Ni);const Be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Di(d.textureWidth,d.textureHeight,{format:Ri,type:zn,depthTexture:new da(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Di(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(j){for(let le=0;le<j.removed.length;le++){const ce=j.removed[le],we=T.indexOf(ce);we>=0&&(T[we]=null,b[we].disconnect(ce))}for(let le=0;le<j.added.length;le++){const ce=j.added[le];let we=T.indexOf(ce);if(we===-1){for(let Be=0;Be<b.length;Be++)if(Be>=T.length){T.push(ce),we=Be;break}else if(T[Be]===null){T[Be]=ce,we=Be;break}if(we===-1)break}const _e=b[we];_e&&_e.connect(ce)}}function U(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let le=j.near,ce=j.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),I.near=L.near=A.near=le,I.far=L.far=A.far=ce,(R!==I.near||O!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,O=I.far),I.layers.mask=j.layers.mask|6,A.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;const we=j.parent,_e=I.cameras;U(I,we);for(let Be=0;Be<_e.length;Be++)U(_e[Be],we);I.projectionMatrix.copy(A.projectionMatrix),I.projectionMatrixInverse.copy(A.projectionMatrixInverse),N===null&&j.isPerspectiveCamera&&(N={camera:j,fov:j.fov,zoom:j.zoom}),G(j,I,we)};function G(j,le,ce){ce===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(j){return h[j]};let K=null;function re(j,le){if(u=le.getViewerPose(c||a),v=le,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let we=!1;ce.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let Ne=0;Ne<ce.length;Ne++){const st=ce[Ne];let Fe=null;if(p!==null)Fe=p.getViewport(st);else{const kt=f.getViewSubImage(d,st);Fe=kt.viewport,Ne===0&&(e.setRenderTargetTextures(S,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(S))}let Xe=P[Ne];Xe===void 0&&(Xe=new di,Xe.layers.enable(Ne),Xe.viewport=new Ct,P[Ne]=Xe),Xe.matrix.fromArray(st.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(st.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ne===0&&(I.matrix.copy(Xe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(Xe)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Ne=f.getDepthInformation(ce[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,r.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Ne=0;Ne<ce.length;Ne++){const st=ce[Ne].camera;if(st){let Fe=h[st];Fe||(Fe=new V_,h[st]=Fe);const Xe=f.getCameraImage(st);Fe.sourceTexture=Xe}}}}for(let ce=0;ce<b.length;ce++){const we=T[ce],_e=b[ce];we!==null&&_e!==void 0&&_e.update(we,le,c||a)}K&&K(j,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),v=null}const Te=new $_;Te.setAnimationLoop(re),this.setAnimationLoop=function(j){K=j},this.dispose=function(){}}}const ZE=new rt,rx=new He;rx.set(-1,0,0,0,1,0,0,0,1);function JE(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,W_(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,y,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Nn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Nn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),y=g.envMap,S=g.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rx),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.diffuseRoughness>0&&(m.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QE(n,e,t,i){let r={},s={};function a(g,y){const S=y.program;i.uniformBlockBinding(g,S,r[g.id])}function o(g,y){let S=r[g.id];S===void 0&&(v(g),S=l(g),r[g.id]=S,g.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(g,b);const T=e.render.frame;s[g.id]!==T&&(c(g),s[g.id]=T)}function l(g){const y=n.createBuffer(),S=g.__size,b=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,b),n.bindBuffer(n.UNIFORM_BUFFER,null),y}function c(g){const y=r[g.id],S=g.uniforms,b=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,x=S.length;T<x;T++){const M=S[T];if(Array.isArray(M))for(let N=0,A=M.length;N<A;N++)u(M[N],T,N,b);else u(M,T,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(g,y,S,b){if(d(g,y,S,b)===!0){const T=g.__offset,x=g.value;if(Array.isArray(x)){let M=0;for(let N=0;N<x.length;N++){const A=x[N],L=_(A,!0);f(A,g.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,g.__data)}}function f(g,y,S){typeof g=="number"||typeof g=="boolean"?y[S]=g:g.isMatrix3?(y[S]=g.elements[0],y[S+1]=g.elements[1],y[S+2]=g.elements[2],y[S+3]=0,y[S+4]=g.elements[3],y[S+5]=g.elements[4],y[S+6]=g.elements[5],y[S+7]=0,y[S+8]=g.elements[6],y[S+9]=g.elements[7],y[S+10]=g.elements[8],y[S+11]=0):ArrayBuffer.isView(g)?y.set(g.subarray(0,y.length-S),S):g.toArray(y,S)}function d(g,y,S,b){const T=g.value,x=y+"_"+S;if(Array.isArray(T)){b[x]===void 0&&(b[x]=[]);const M=b[x];let N=!1;for(let A=0;A<T.length;A++)p(T[A],M,A)===!0&&(N=!0);return N}return p(T,b,x)}function p(g,y,S){if(y[S]===void 0)return typeof g=="number"||typeof g=="boolean"?y[S]=g:ArrayBuffer.isView(g)?y[S]=g.slice():y[S]=g.clone(),!0;{const b=y[S];if(typeof g=="number"||typeof g=="boolean"){if(b!==g)return y[S]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(b.equals(g)===!1)return b.copy(g),!0}}return!1}function v(g){const y=g.uniforms;let S=0;const b=16;for(let x=0,M=y.length;x<M;x++){const N=Array.isArray(y[x])?y[x]:[y[x]];for(let A=0,L=N.length;A<L;A++){const P=N[A],I=Array.isArray(P.value)?P.value:[P.value],R=Array.isArray(y[x])||Array.isArray(P.value);let O=S;for(let D=0,k=I.length;D<k;D++){const U=I[D],G=_(U,R),K=S%b,re=K%G.boundary,Te=K+re;S+=re,Te!==0&&b-Te<G.storage&&(S+=b-Te),D===0&&(O=S),S+=G.storage}const X=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new X((S-O)/Float32Array.BYTES_PER_ELEMENT),P.__offset=O}}const T=S%b;return T>0&&(S+=b-T),g.__size=S,g.__cache={},this}function _(g,y){const S={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(S.boundary=4,S.storage=4):g.isVector2?(S.boundary=8,S.storage=8):g.isVector3||g.isColor?(S.boundary=16,S.storage=12):g.isVector4?(S.boundary=16,S.storage=16):g.isMatrix3?(S.boundary=16,S.storage=48):g.isMatrix4?(S.boundary=16,S.storage=64):g.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(S.boundary=16,S.storage=g.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",g),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(g){const y=g.target;y.removeEventListener("dispose",m),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const g in r)n.deleteBuffer(r[g]);r={},s={}}return{bind:a,update:o,dispose:h}}const eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function tb(){return wi===null&&(wi=new O_(eb,16,16,ls,Ii),wi.name="DFG_LUT",wi.minFilter=Pn,wi.magFilter=Pn,wi.wrapS=Yi,wi.wrapT=Yi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class nb{constructor(e={}){const{canvas:t=gS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=p,m=new Set([tp,ep,Qd]),h=new Set([zn,Ni,To,fa,jd,Zd]),g=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let b=null,T=null;const x=[],M=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,P=null,I=null,R=null,O=null;this._outputColorSpace=Qt;let X=0,D=0,k=null,U=-1,G=null;const K=new Ct,re=new Ct;let Te=null;const j=new Ue(0);let le=0,ce=t.width,we=t.height,_e=1,Be=null,ct=null;const Ne=new Ct(0,0,ce,we),st=new Ct(0,0,ce,we);let Fe=!1;const Xe=new bo,kt=new sp;let ut=!1,At=!1;const gt=new rt,yi=new z,$t=new Ct,Xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qn=!1;function Yn(){return k===null?_e:1}let H=i;function $n(E,B){return t.getContext(E,B)}let Tt,Et,xe,Ht,ke,Ge,C,w,Y,se,ne,he,ge,Q,ee,de,F,te,J,pe,ue,fe,De;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qd}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ye,!1),H===null){const B="webgl2";if(H=$n(B,E),H===null)throw $n(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(E){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),it("WebGLRenderer: "+E.message),E}function qe(){Tt=new sT(H),Tt.init(),ue=new qE(H,Tt),Et=new $2(H,Tt,e,ue),xe=new WE(H,Tt),Et.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),I=H.createFramebuffer(),R=H.createFramebuffer(),O=H.createFramebuffer(),Ht=new lT(H),ke=new CE,Ge=new XE(H,Tt,xe,ke,Et,ue,Ht),C=new rT(A),w=new uM(H),fe=new q2(H,w),Y=new aT(H,w,Ht,fe),se=new uT(H,Y,w,fe,Ht),te=new cT(H,Et,Ge),ee=new K2(ke),ne=new PE(A,C,Tt,Et,fe,ee),he=new JE(A,ke),ge=new DE,Q=new OE(Tt),F=new X2(A,C,xe,se,v,l),de=new VE(A,se,Et),De=new QE(H,Ht,Et,xe),J=new Y2(H,Tt,Ht),pe=new oT(H,Tt,Ht),Ht.programs=ne.programs,A.capabilities=Et,A.extensions=Tt,A.properties=ke,A.renderLists=ge,A.shadowMap=de,A.state=xe,A.info=Ht}_!==zn&&(N=new fT(_,t.width,t.height,o,r,s));const oe=new jE(A,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=Tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(E){E!==void 0&&(_e=E,this.setSize(ce,we,!1))},this.getSize=function(E){return E.set(ce,we)},this.setSize=function(E,B,Z=!0){if(oe.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=E,we=B,t.width=Math.floor(E*_e),t.height=Math.floor(B*_e),Z===!0&&(t.style.width=E+"px",t.style.height=B+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(ce*_e,we*_e).floor()},this.setDrawingBufferSize=function(E,B,Z){ce=E,we=B,_e=Z,t.width=Math.floor(E*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(_===zn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(Ne)},this.setViewport=function(E,B,Z,q){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,B,Z,q),xe.viewport(K.copy(Ne).multiplyScalar(Yn()).round())},this.getScissor=function(E){return E.copy(st)},this.setScissor=function(E,B,Z,q){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,B,Z,q),xe.scissor(re.copy(st).multiplyScalar(Yn()).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(E){xe.setScissorTest(Fe=E)},this.setOpaqueSort=function(E){Be=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Z=!0){let q=0;if(E){let $=!1;if(k!==null){const ve=k.texture.format;$=m.has(ve)}if($){const ve=k.texture.type,Ae=h.has(ve),me=F.getClearColor(),Me=F.getClearAlpha(),Le=me.r,Ve=me.g,je=me.b;Ae?(g[0]=Le,g[1]=Ve,g[2]=je,g[3]=Me,H.clearBufferuiv(H.COLOR,0,g)):(y[0]=Le,y[1]=Ve,y[2]=je,y[3]=Me,H.clearBufferiv(H.COLOR,0,y))}else q|=H.COLOR_BUFFER_BIT}B&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),F.dispose(),ge.dispose(),Q.dispose(),Ge.dispose(),ke.dispose(),C.dispose(),se.dispose(),Y.dispose(),fe.dispose(),De.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",mp),oe.removeEventListener("sessionend",gp),Fr.stop()};function Ie(E){E.preventDefault(),bc("WebGLRenderer: Context Lost."),L=!0}function We(){bc("WebGLRenderer: Context Restored."),L=!1;const E=Ht.autoReset,B=de.enabled,Z=de.autoUpdate,q=de.needsUpdate,$=de.type;qe(),Ht.autoReset=E,de.enabled=B,de.autoUpdate=Z,de.needsUpdate=q,de.type=$}function ye(E){it("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ht(E){const B=E.target;B.removeEventListener("dispose",ht),Kt(B)}function Kt(E){ir(E),ke.remove(E)}function ir(E){const B=ke.get(E).programs;B!==void 0&&(B.forEach(function(Z){ne.releaseProgram(Z)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Z,q,$,ve){B===null&&(B=Xn);const Ae=$.isMesh&&$.matrixWorld.determinantAffine()<0,me=ox(E,B,Z,q,$);xe.setMaterial(q,Ae);let Me=Z.index,Le=1;if(q.wireframe===!0){if(Me=Y.getWireframeAttribute(Z),Me===void 0)return;Le=2}const Ve=Z.drawRange,je=Z.attributes.position;let Re=Ve.start*Le,Ze=(Ve.start+Ve.count)*Le;ve!==null&&(Re=Math.max(Re,ve.start*Le),Ze=Math.min(Ze,(ve.start+ve.count)*Le)),Me!==null?(Re=Math.max(Re,0),Ze=Math.min(Ze,Me.count)):je!=null&&(Re=Math.max(Re,0),Ze=Math.min(Ze,je.count));const zt=Ze-Re;if(zt<0||zt===1/0)return;fe.setup($,q,me,Z,Me);let vt,pt=J;if(Me!==null&&(vt=w.get(Me),pt=pe,pt.setIndex(vt)),$.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*Yn()),pt.setMode(H.LINES)):pt.setMode(H.TRIANGLES);else if($.isLine){let ln=q.linewidth;ln===void 0&&(ln=1),xe.setLineWidth(ln*Yn()),$.isLineSegments?pt.setMode(H.LINES):$.isLineLoop?pt.setMode(H.LINE_LOOP):pt.setMode(H.LINE_STRIP)}else $.isPoints?pt.setMode(H.POINTS):$.isSprite&&pt.setMode(H.TRIANGLES);if($.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))pt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ln=$._multiDrawStarts,Pe=$._multiDrawCounts,_n=$._multiDrawCount,at=Me?w.get(Me).bytesPerElement:1,Or=ke.get(q).currentProgram.getUniforms();for(let cn=0;cn<_n;cn++)Or.setValue(H,"_gl_DrawID",cn),pt.render(ln[cn]/at,Pe[cn])}else if($.isInstancedMesh)pt.renderInstances(Re,zt,$.count);else if(Z.isInstancedBufferGeometry){const ln=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pe=Math.min(Z.instanceCount,ln);pt.renderInstances(Re,zt,Pe)}else pt.render(Re,zt)};function pp(E,B,Z,q){P!==null&&E.isNodeMaterial&&P.setObject(q,E),ut===!0&&ee.setState(E,Z,!1),E.transparent===!0&&E.side===On&&E.forceSinglePass===!1?(E.side=Nn,E.needsUpdate=!0,Sa(E,B,q),E.side=os,E.needsUpdate=!0,Sa(E,B,q),E.side=On):Sa(E,B,q)}this.compile=function(E,B,Z=null){Z===null&&(Z=E),P!==null&&P.renderStart(E,B,Z),T=Q.get(Z),T.init(B),M.push(T),Z.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),E!==Z&&E.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),At=this.localClippingEnabled,ut=ee.init(this.clippingPlanes,At),ut===!0&&ee.setGlobalState(this.clippingPlanes,B),P!==null&&de.render(T.state.shadowsArray,Z,B);const q=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ve=$.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const me=ve[Ae];pp(me,Z,B,$),q.add(me)}else pp(ve,Z,B,$),q.add(ve)}),T=M.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(E,B,Z=null){const q=this.compile(E,B,Z);return new Promise($=>{function ve(){if(q.forEach(function(Ae){const Me=ke.get(Ae).currentProgram;(Me===void 0||Me.isReady())&&q.delete(Ae)}),q.size===0){$(E);return}setTimeout(ve,10)}Tt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let nu=null;function sx(E){nu&&nu(E)}function mp(){Fr.stop()}function gp(){Fr.start()}const Fr=new $_;Fr.setAnimationLoop(sx),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(E){nu=E,oe.setAnimationLoop(E),E===null?Fr.stop():Fr.start()},oe.addEventListener("sessionstart",mp),oe.addEventListener("sessionend",gp),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(E,B);const Z=oe.enabled===!0&&oe.isPresenting===!0,q=N!==null&&(k===null||Z)&&N.begin(A,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,B,k),T=Q.get(E,M.length),T.init(B),T.state.textureUnits=Ge.getTextureUnits(),M.push(T),gt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?kt.setFromArrayCamera(B):Xe.setFromProjectionMatrix(gt,gi,B.reversedDepth),At=this.localClippingEnabled,ut=ee.init(this.clippingPlanes,At),b=ge.get(E,x.length),b.init(),x.push(b),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){const Ae=A.xr.getDepthSensingMesh();Ae!==null&&iu(Ae,B,-1/0,A.sortObjects)}iu(E,B,0,A.sortObjects),b.finish(),P!==null&&P.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(Be,ct),qn=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,qn&&F.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),ut===!0&&ee.beginShadows();const $=T.state.shadowsArray;if(de.render($,E,B),ut===!0&&ee.endShadows(),(q&&N.hasRenderPass())===!1){const Ae=b.opaque,me=b.transmissive;if(T.setupLights(),B.isArrayCamera){const Me=B.cameras;if(me.length>0)for(let Le=0,Ve=Me.length;Le<Ve;Le++){const je=Me[Le];_p(Ae,me,E,je)}qn&&F.render(E);for(let Le=0,Ve=Me.length;Le<Ve;Le++){const je=Me[Le];vp(b,E,je,je.viewport)}}else me.length>0&&_p(Ae,me,E,B),qn&&F.render(E),vp(b,E,B)}k!==null&&D===0&&(Ge.updateMultisampleRenderTarget(k),Ge.updateRenderTargetMipmap(k)),q&&N.end(A),E.isScene===!0&&E.onAfterRender(A,E,B),fe.resetDefaultState(),U=-1,G=null,M.pop(),M.length>0?(T=M[M.length-1],Ge.setTextureUnits(T.state.textureUnits),ut===!0&&ee.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,P!==null&&P.renderEnd()};function iu(E,B,Z,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){const Ae=B.isArrayCamera?kt:Xe;if(!E.frustumCulled||E.intersectsFrustum(Ae)){q&&$t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const me=se.update(E),Me=E.material;Me.visible&&b.push(E,me,Me,Z,$t.z,null,B)}}else if(E.isMesh||E.isLine||E.isPoints){const Ae=B.isArrayCamera?kt:Xe;if(!E.frustumCulled||E.intersectsFrustum(Ae)){const me=se.update(E),Me=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$t.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),$t.copy(me.boundingSphere.center)),$t.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(Me)){const Le=me.groups;for(let Ve=0,je=Le.length;Ve<je;Ve++){const Re=Le[Ve],Ze=Me[Re.materialIndex];Ze&&Ze.visible&&b.push(E,me,Ze,Z,$t.z,Re,B)}}else Me.visible&&b.push(E,me,Me,Z,$t.z,null,B)}}}const ve=E.children;for(let Ae=0,me=ve.length;Ae<me;Ae++)iu(ve[Ae],B,Z,q)}function vp(E,B,Z,q){const{opaque:$,transmissive:ve,transparent:Ae}=E;T.setupLightsView(Z),ut===!0&&ee.setGlobalState(A.clippingPlanes,Z),q&&xe.viewport(K.copy(q)),$.length>0&&No($,B,Z),ve.length>0&&No(ve,B,Z),Ae.length>0&&No(Ae,B,Z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function _p(E,B,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const Re=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Di(1,1,{generateMipmaps:!0,type:Re?Ii:zn,minFilter:yr,samples:Math.max(4,Et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const ve=T.state.transmissionRenderTarget[q.id],Ae=q.viewport||K;ve.setSize(Ae.z*A.transmissionResolutionScale,Ae.w*A.transmissionResolutionScale);const me=A.getRenderTarget(),Me=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(ve),A.getClearColor(j),le=A.getClearAlpha(),le<1&&A.setClearColor(16777215,.5),A.clear(),qn&&F.render(Z);const Ve=A.toneMapping;A.toneMapping=Ki;const je=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),ut===!0&&ee.setGlobalState(A.clippingPlanes,q),No(E,Z,q),Ge.updateMultisampleRenderTarget(ve),Ge.updateRenderTargetMipmap(ve),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ze=0,zt=B.length;Ze<zt;Ze++){const vt=B[Ze],{object:pt,geometry:ln,material:Pe,group:_n}=vt;if(Pe.side===On&&pt.layers.test(q.layers)){const at=Pe.side;Pe.side=Nn,Pe.needsUpdate=!0,xp(pt,Z,q,ln,Pe,_n),Pe.side=at,Pe.needsUpdate=!0,Re=!0}}Re===!0&&(Ge.updateMultisampleRenderTarget(ve),Ge.updateRenderTargetMipmap(ve))}A.setRenderTarget(me,Me,Le),A.setClearColor(j,le),je!==void 0&&(q.viewport=je),A.toneMapping=Ve}function No(E,B,Z){const q=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ve=E.length;$<ve;$++){const Ae=E[$],{object:me,geometry:Me,group:Le}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&q!==null&&(Ve=q),me.layers.test(Z.layers)&&xp(me,B,Z,Me,Ve,Le)}}function xp(E,B,Z,q,$,ve){P!==null&&$.isNodeMaterial&&P.setObject(E,$),E.onBeforeRender(A,B,Z,q,$,ve),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(A,B,Z,q,E,ve),$.transparent===!0&&$.side===On&&$.forceSinglePass===!1?($.side=Nn,$.needsUpdate=!0,A.renderBufferDirect(Z,B,q,$,E,ve),$.side=os,$.needsUpdate=!0,A.renderBufferDirect(Z,B,q,$,E,ve),$.side=On):A.renderBufferDirect(Z,B,q,$,E,ve),E.onAfterRender(A,B,Z,q,$,ve)}function yp(E){let B=0;for(const Z of E)Z.texture!==null&&B++;return B}function Sa(E,B,Z){B.isScene!==!0&&(B=Xn);const q=ke.get(E),$=T.state.lights,ve=T.state.shadowsArray,Ae=$.state.version,me=ne.getParameters(E,$.state,ve,B,Z,T.state.lightProbeGridArray),Me=ne.getProgramCacheKey(me);let Le=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;const Ve=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=C.get(E.envMap||q.environment,Ve),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",ht),Le=new Map,q.programs=Le,q.programVariants=new Map);let je=Le.get(Me);if(je!==void 0){if(q.currentProgram===je&&q.lightsStateVersion===Ae)return Mp(E,me),je}else me.uniforms=ne.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,Z,me),E.onBeforeCompile(me,A),je=ne.acquireProgram(me,Me),Le.set(Me,je),q.uniforms=me.uniforms;const Re=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=ee.uniform),Mp(E,me),q.needsLights=cx(E),q.lightsStateVersion=Ae,q.needsLights&&(Re.ambientLightColor.value=$.state.ambient,Re.lightProbe.value=$.state.probe,Re.sunLights.value=$.state.sun,Re.sunLightShadows.value=$.state.sunShadow,Re.directionalLights.value=$.state.directional,Re.directionalLightShadows.value=$.state.directionalShadow,Re.spotLights.value=$.state.spot,Re.spotLightShadows.value=$.state.spotShadow,Re.rectAreaLights.value=$.state.rectArea,Re.ltc_1.value=$.state.rectAreaLTC1,Re.ltc_2.value=$.state.rectAreaLTC2,Re.pointLights.value=$.state.point,Re.pointLightShadows.value=$.state.pointShadow,Re.hemisphereLights.value=$.state.hemi,Re.sunShadowMatrix.value=$.state.sunShadowMatrix,Re.sunShadowCascade.value=$.state.sunShadowCascade,Re.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Re.spotLightMatrix.value=$.state.spotLightMatrix,Re.spotLightMap.value=$.state.spotLightMap,Re.pointShadowMatrix.value=$.state.pointShadowMatrix),q.numLightProbeGrids=yp(T.state.lightProbeGridArray),q.currentProgram=je,q.uniformsList=null,je}function ax(E,B,Z,q,$){const ve=ke.get(E),Ae=ve.currentProgram.id+","+q+","+$;let me=ve.programVariants.get(Ae);return me===void 0?(me=Sa(E,B,Z),ve.programVariants.set(Ae,me)):(ve.currentProgram=me,ve.uniformsList=null,ve.outputColorSpace=q,ve.toneMapping=$),me}function Sp(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Yl.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Mp(E,B){const Z=ke.get(E);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function ox(E,B,Z,q,$){B.isScene!==!0&&(B=Xn),Ge.resetTextureUnits();const ve=B.fog,Ae=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,me=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Je.workingColorSpace,Me=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Le=C.get(q.envMap||Ae,Me),Ve=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,je=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!Z.morphAttributes.position,Ze=!!Z.morphAttributes.normal,zt=!!Z.morphAttributes.color;let vt=Ki;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(vt=A.toneMapping);const pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ln=pt!==void 0?pt.length:0,Pe=ke.get(q),_n=T.state.lights;if(ut===!0&&(At===!0||E!==G)){const Rt=E===G&&q.id===U;ee.setState(q,E,Rt)}let at=!1,Or=!1;q.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==_n.state.version||$.isBatchedMesh&&Pe.batching===!1||!$.isBatchedMesh&&Pe.batching===!0||$.isBatchedMesh&&Pe.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Pe.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Pe.instancing===!1||!$.isInstancedMesh&&Pe.instancing===!0||$.isSkinnedMesh&&Pe.skinning===!1||!$.isSkinnedMesh&&Pe.skinning===!0||$.isInstancedMesh&&Pe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Pe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Pe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Pe.instancingMorph===!1&&$.morphTexture!==null||Pe.envMap!==Le||q.fog===!0&&Pe.fog!==ve||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ee.numPlanes||Pe.numIntersection!==ee.numIntersection)||Pe.vertexAlphas!==Ve||Pe.vertexTangents!==je||Pe.morphTargets!==Re||Pe.morphNormals!==Ze||Pe.morphColors!==zt||Pe.morphTargetsCount!==ln||Pe.numLightProbeGrids!==yp(T.state.lightProbeGridArray)?at=!0:(Pe.outputColorSpace!==me||Pe.toneMapping!==vt)&&(Or=!0):(at=!0,Pe.__version=q.version);let cn=Pe.currentProgram;(at===!0||Or===!0)&&(cn=Or===!0?ax(q,B,$,me,vt):Sa(q,B,$),P&&q.isNodeMaterial&&P.onUpdateProgram(q,cn,Pe));let Io=!1,rr=!1,zr=!1;const Qe=cn.getUniforms(),tn=Pe.uniforms;if(xe.useProgram(cn.program)&&(Io=!0,rr=!0,zr=!0),q.id!==U&&(U=q.id,rr=!0),Io||G!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Qe.setValue(H,"projectionMatrix",E.projectionMatrix),Qe.setValue(H,"viewMatrix",E.matrixWorldInverse);const jt=Qe.map.cameraPosition;jt!==void 0&&jt.setValue(H,yi.setFromMatrixPosition(E.matrixWorld)),Et.logarithmicDepthBuffer&&Qe.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Qe.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,rr=!0,zr=!0)}if(Pe.needsLights&&(_n.state.sunShadowMap.length>0&&Qe.setValue(H,"sunShadowMap",_n.state.sunShadowMap,Ge),_n.state.directionalShadowMap.length>0&&Qe.setValue(H,"directionalShadowMap",_n.state.directionalShadowMap,Ge),_n.state.spotShadowMap.length>0&&Qe.setValue(H,"spotShadowMap",_n.state.spotShadowMap,Ge),_n.state.pointShadowMap.length>0&&Qe.setValue(H,"pointShadowMap",_n.state.pointShadowMap,Ge)),$.isSkinnedMesh){Qe.setOptional(H,$,"bindMatrix"),Qe.setOptional(H,$,"bindMatrixInverse");const Rt=$.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Qe.setValue(H,"boneTexture",Rt.boneTexture,Ge))}$.isBatchedMesh&&(Qe.setOptional(H,$,"batchingTexture"),Qe.setValue(H,"batchingTexture",$._matricesTexture,Ge),Qe.setOptional(H,$,"batchingIdTexture"),Qe.setValue(H,"batchingIdTexture",$._indirectTexture,Ge),Qe.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&Qe.setValue(H,"batchingColorTexture",$._colorsTexture,Ge));const si=Z.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&te.update($,Z,cn),(rr||Pe.receiveShadow!==$.receiveShadow)&&(Pe.receiveShadow=$.receiveShadow,Qe.setValue(H,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(tn.envMapIntensity.value=B.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=tb()),rr){if(Qe.setValue(H,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&lx(tn,zr),ve&&q.fog===!0&&he.refreshFogUniforms(tn,ve),he.refreshMaterialUniforms(tn,q,_e,we,T.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const Rt=S;let jt=0;for(const ki of T.state.lightProbeGridArray)ki.texture!==null&&(Rt.textures[jt]=ki.texture,Rt.min[jt]=ki.boundingBox.min,Rt.max[jt]=ki.boundingBox.max,Rt.resolution[jt]=ki.resolution,jt++);for(const ki in Rt)Rt[ki].length=jt;tn.probesSH.value=Rt.textures,tn.probesMin.value=Rt.min,tn.probesMax.value=Rt.max,tn.probesResolution.value=Rt.resolution}Yl.upload(H,Sp(Pe),tn,Ge)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Yl.upload(H,Sp(Pe),tn,Ge),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Qe.setValue(H,"center",$.center),Qe.setValue(H,"modelViewMatrix",$.modelViewMatrix),Qe.setValue(H,"normalMatrix",$.normalMatrix),Qe.setValue(H,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){const Rt=q.uniformsGroups;for(let jt=0,ki=Rt.length;jt<ki;jt++){const Tp=Rt[jt];De.update(Tp,cn),De.bind(Tp,cn)}}return cn}function lx(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function cx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,B,Z){const q=ke.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ke.get(E.texture).__webglTexture=B,ke.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const Z=ke.get(E);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Z=0){k=E,X=B,D=Z;let q=null,$=!1,ve=!1;if(E){const me=ke.get(E);if(me.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(H.FRAMEBUFFER,me.__webglFramebuffer),K.copy(E.viewport),re.copy(E.scissor),Te=E.scissorTest,xe.viewport(K),xe.scissor(re),xe.setScissorTest(Te),U=-1;return}else if(me.__webglFramebuffer===void 0)Ge.setupRenderTarget(E);else if(me.__hasExternalTextures)Ge.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(me.__boundDepthTexture!==Ve){if(Ve!==null&&ke.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ve=!0);const Le=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[B])?q=Le[B][Z]:q=Le[B],$=!0):E.samples>0&&Ge.useMultisampledRTT(E)===!1?q=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?q=Le[Z]:q=Le,K.copy(E.viewport),re.copy(E.scissor),Te=E.scissorTest}else K.copy(Ne).multiplyScalar(_e).floor(),re.copy(st).multiplyScalar(_e).floor(),Te=Fe;if(Z!==0&&(q=I),xe.bindFramebuffer(H.FRAMEBUFFER,q)&&xe.drawBuffers(E,q),xe.viewport(K),xe.scissor(re),xe.setScissorTest(Te),$){const me=ke.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,Z)}else if(ve){const me=B;for(let Me=0;Me<E.textures.length;Me++){const Le=ke.get(E.textures[Me]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Me,Le.__webglTexture,Z,me)}}else if(E!==null&&Z!==0){const me=ke.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,me.__webglTexture,Z)}U=-1};function wp(E){const B=ke.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=Et.textureFormatReadable(E.format),B.__typeReadable=Et.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,Z,q,$,ve,Ae,me=0){if(!(E&&E.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae],Array.isArray(Me)&&(Me=Me[0])),Me){xe.bindFramebuffer(H.FRAMEBUFFER,Me);try{const Le=E.textures[me],Ve=Le.format,je=Le.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+me);const Re=wp(Le);if(Re.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&Z>=0&&Z<=E.height-$&&H.readPixels(B,Z,q,$,ue.convert(Ve),ue.convert(je),ve)}finally{const Le=k!==null?ke.get(k).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,B,Z,q,$,ve,Ae,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae],Array.isArray(Me)&&(Me=Me[0])),Me)if(B>=0&&B<=E.width-q&&Z>=0&&Z<=E.height-$){xe.bindFramebuffer(H.FRAMEBUFFER,Me);const Le=E.textures[me],Ve=Le.format,je=Le.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+me);const Re=wp(Le);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.bufferData(H.PIXEL_PACK_BUFFER,ve.byteLength,H.STREAM_READ),H.readPixels(B,Z,q,$,ue.convert(Ve),ue.convert(je),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const zt=k!==null?ke.get(k).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,zt);const vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await vS(H,vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ve),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ze),H.deleteSync(vt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Z=0){const q=Math.pow(2,-Z),$=Math.floor(E.image.width*q),ve=Math.floor(E.image.height*q),Ae=B!==null?B.x:0,me=B!==null?B.y:0;Ge.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,Ae,me,$,ve),xe.unbindTexture()},this.copyTextureToTexture=function(E,B,Z=null,q=null,$=0,ve=0){let Ae,me,Me,Le,Ve,je,Re,Ze,zt;const vt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(Z!==null)Ae=Z.max.x-Z.min.x,me=Z.max.y-Z.min.y,Me=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Ve=Z.min.y,je=Z.isBox3?Z.min.z:0;else{const Qe=Math.pow(2,-$);Ae=Math.floor(vt.width*Qe),me=Math.floor(vt.height*Qe),E.isDataArrayTexture?Me=vt.depth:E.isData3DTexture?Me=Math.floor(vt.depth*Qe):Me=1,Le=0,Ve=0,je=0}q!==null?(Re=q.x,Ze=q.y,zt=q.z):(Re=0,Ze=0,zt=0);const pt=ue.convert(B.format),ln=ue.convert(B.type);let Pe;B.isData3DTexture?(Ge.setTexture3D(B,0),Pe=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ge.setTexture2DArray(B,0),Pe=H.TEXTURE_2D_ARRAY):(Ge.setTexture2D(B,0),Pe=H.TEXTURE_2D),xe.activeTexture(H.TEXTURE0),xe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),xe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),xe.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const _n=xe.getParameter(H.UNPACK_ROW_LENGTH),at=xe.getParameter(H.UNPACK_IMAGE_HEIGHT),Or=xe.getParameter(H.UNPACK_SKIP_PIXELS),cn=xe.getParameter(H.UNPACK_SKIP_ROWS),Io=xe.getParameter(H.UNPACK_SKIP_IMAGES);xe.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Le),xe.pixelStorei(H.UNPACK_SKIP_ROWS,Ve),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const rr=E.isDataArrayTexture||E.isData3DTexture,zr=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Qe=ke.get(E),tn=ke.get(B),si=ke.get(Qe.__renderTarget),Rt=ke.get(tn.__renderTarget);xe.bindFramebuffer(H.READ_FRAMEBUFFER,si.__webglFramebuffer),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let jt=0;jt<Me;jt++)rr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.get(E).__webglTexture,$,je+jt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.get(B).__webglTexture,ve,zt+jt)),H.blitFramebuffer(Le,Ve,Le+Ae,Ve+me,Re,Ze,Re+Ae,Ze+me,H.DEPTH_BUFFER_BIT,H.NEAREST);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||ke.has(E)){const Qe=ke.get(E),tn=ke.get(B);xe.bindFramebuffer(H.READ_FRAMEBUFFER,R),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,O);for(let si=0;si<Me;si++)rr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.__webglTexture,$,je+si):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.__webglTexture,$),zr?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tn.__webglTexture,ve,zt+si):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,tn.__webglTexture,ve),$!==0?H.blitFramebuffer(Le,Ve,Le+Ae,Ve+me,Re,Ze,Re+Ae,Ze+me,H.COLOR_BUFFER_BIT,H.NEAREST):zr?H.copyTexSubImage3D(Pe,ve,Re,Ze,zt+si,Le,Ve,Ae,me):H.copyTexSubImage2D(Pe,ve,Re,Ze,Le,Ve,Ae,me);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else zr?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Pe,ve,Re,Ze,zt,Ae,me,Me,pt,ln,vt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Pe,ve,Re,Ze,zt,Ae,me,Me,pt,vt.data):H.texSubImage3D(Pe,ve,Re,Ze,zt,Ae,me,Me,pt,ln,vt):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ve,Re,Ze,Ae,me,pt,ln,vt.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ve,Re,Ze,vt.width,vt.height,pt,vt.data):H.texSubImage2D(H.TEXTURE_2D,ve,Re,Ze,Ae,me,pt,ln,vt);xe.pixelStorei(H.UNPACK_ROW_LENGTH,_n),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Or),xe.pixelStorei(H.UNPACK_SKIP_ROWS,cn),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,Io),ve===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&H.generateMipmap(Pe),xe.unbindTexture()},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&Ge.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ge.setTextureCube(E,0):E.isData3DTexture?Ge.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ge.setTexture2DArray(E,0):Ge.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){X=0,D=0,k=null,xe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function pi(n,e,t){return Math.max(e,Math.min(t,n))}function jn(n,e){const t=n.replace("#",""),i=parseInt(t,16),r=s=>Math.round(pi(e>=0?s+(255-s)*e:s*(1+e),0,255));return`rgb(${r(i>>16&255)}, ${r(i>>8&255)}, ${r(i&255)})`}function pn(n,e=24,t=3,i=1,r=0){const s=[];for(let _=0;_<n.length-1;_++){const m=n[_],h=n[_+1];for(let g=0;g<t;g++){const y=g/t,S=y*y*(3-2*y);s.push({y:m.y+(h.y-m.y)*y,rx:m.rx+(h.rx-m.rx)*S,rz:m.rz+(h.rz-m.rz)*S,ox:(m.ox??0)+((h.ox??0)-(m.ox??0))*S,oz:(m.oz??0)+((h.oz??0)-(m.oz??0))*S})}}s.push(n[n.length-1]);const a=s.length,o=e+1,l=new Float32Array(a*o*3),c=new Float32Array(a*o*2),u=[],f=s[0].y,d=Math.max(.001,s[a-1].y-f);for(let _=0;_<a;_++){const m=s[_],h=(m.y-f)/d;for(let g=0;g<=e;g++){const y=g/e,S=Math.PI*.5+y*Math.PI*2,b=Math.sin(S),T=Math.cos(S),x=i===1?b:Math.sign(b)*Math.pow(Math.abs(b),i),M=i===1?T:Math.sign(T)*Math.pow(Math.abs(T),i),N=r*(.2+.8*(1-h)*(1-h))*Math.sin(S*7+h*11)*Math.sin(Math.PI*h),A=(m.ox??0)+(m.rx+N)*x,L=(m.oz??0)+(m.rz+N)*M,P=_*o+g;l[P*3]=A,l[P*3+1]=m.y,l[P*3+2]=L,c[P*2]=y,c[P*2+1]=h}}for(let _=0;_<a-1;_++)for(let m=0;m<e;m++){const h=_*o+m,g=h+1,y=(_+1)*o+m,S=y+1;u.push(h,g,S,h,S,y)}const p=new Ot;p.setAttribute("position",new In(l,3)),p.setAttribute("uv",new In(c,2)),p.setIndex(u),p.computeVertexNormals();const v=p.getAttribute("normal");for(let _=0;_<a;_++){const m=_*o,h=_*o+e,g=v.getX(m)+v.getX(h),y=v.getY(m)+v.getY(h),S=v.getZ(m)+v.getZ(h),b=Math.hypot(g,y,S)||1;v.setXYZ(m,g/b,y/b,S/b),v.setXYZ(h,g/b,y/b,S/b)}return v.needsUpdate=!0,p}function ib(n,e,t){const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d"),s=r.createLinearGradient(0,0,0,512);s.addColorStop(0,jn(n.primary,.08)),s.addColorStop(.65,n.primary),s.addColorStop(1,n.secondary),r.fillStyle=s,r.fillRect(0,0,512,512),r.fillStyle="rgba(255,255,255,0.04)";for(let l=0;l<512;l+=8)r.fillRect(0,l,512,2);const a=n.chestMotif;if(a==="red_white_stripes"){r.fillStyle="#f8fafc";const l=12,c=512/l;for(let u=0;u<l;u++)r.fillRect(Math.round(u*c),0,Math.round(c*.48),512)}else if(t){if(!a){r.strokeStyle="rgba(255,255,255,0.09)",r.lineWidth=8;for(let l=90;l<350;l+=44)r.beginPath(),r.moveTo(310,l+35),r.lineTo(384,l),r.lineTo(458,l+35),r.stroke()}}else{r.fillStyle="rgba(0,0,0,0.05)";for(let l=20;l<512;l+=32)r.fillRect(l,40,10,440)}if(r.fillStyle=n.trim,r.fillRect(0,40,10,472),r.fillRect(502,40,10,472),r.fillRect(251,40,10,472),r.fillStyle=a==="team_crown"?"#facc15":n.trim,r.fillRect(0,0,512,24),r.fillStyle=n.secondary,r.fillRect(0,24,512,5),e>0&&(r.save(),r.translate(128,215),a==="red_white_stripes"&&(r.fillStyle="rgba(255,255,255,0.92)",r.beginPath(),r.roundRect(-78,-82,156,164,18),r.fill()),r.textAlign="center",r.textBaseline="middle",r.font='900 148px system-ui, -apple-system, "Segoe UI", sans-serif',r.lineWidth=10,r.strokeStyle=a==="red_white_stripes"?"#ffffff":"rgba(0,0,0,0.28)",r.strokeText(String(e),0,0),r.fillStyle=n.numberColor,r.fillText(String(e),0,0),r.restore()),a==="adidas_stripes"){r.fillStyle="#111827";for(const l of[10,244,486])for(let c=0;c<3;c++)r.fillRect(l+c*9-9,0,5,118);r.beginPath(),r.moveTo(352,0),r.lineTo(384,54),r.lineTo(416,0),r.closePath(),r.fill(),r.save(),r.translate(350,134);for(let l=0;l<3;l++)r.save(),r.translate((l-1)*9,(2-l)*4),r.rotate(-.35),r.fillRect(-3,-12-l*4,5.5,16+l*4),r.restore();r.restore()}else if(a==="team_crown"){r.fillStyle="#111827",r.beginPath(),r.moveTo(350,0),r.lineTo(384,56),r.lineTo(418,0),r.closePath(),r.fill(),r.fillStyle="#111827";for(let l=0;l<3;l++)r.fillRect(338+l*8,128-l*5,5,14+l*5);r.save(),r.translate(420,132),r.fillStyle="#111827",r.beginPath(),r.moveTo(-18,12),r.lineTo(-21,-8),r.lineTo(-9,2),r.lineTo(0,-13),r.lineTo(9,2),r.lineTo(21,-8),r.lineTo(18,12),r.closePath(),r.fill(),r.fillStyle="#facc15";for(const l of[-11,0,11])r.beginPath(),r.arc(l,5,2.4,0,Math.PI*2),r.fill();r.restore(),r.save(),r.translate(384,212),r.textAlign="center",r.textBaseline="middle",r.font='900 52px system-ui, -apple-system, "Segoe UI", sans-serif',r.lineWidth=10,r.lineJoin="round",r.strokeStyle="#111827",r.strokeText("TEAM",0,0),r.fillStyle="#ffffff",r.fillText("TEAM",0,0),r.restore()}else if(a==="lightning"){const l=r.createRadialGradient(384,210,10,384,210,120);l.addColorStop(0,"rgba(45, 212, 191, 0.34)"),l.addColorStop(1,"rgba(45, 212, 191, 0)"),r.fillStyle=l,r.fillRect(264,90,240,250),r.fillStyle="#10b981",r.beginPath(),r.moveTo(344,0),r.lineTo(384,70),r.lineTo(424,0),r.closePath(),r.fill();const c=r.createLinearGradient(360,120,410,320);c.addColorStop(0,"#a7f3d0"),c.addColorStop(.5,"#2dd4bf"),c.addColorStop(1,"#0ea5e9"),r.fillStyle=c,r.beginPath(),r.moveTo(398,122),r.lineTo(354,218),r.lineTo(386,218),r.lineTo(368,318),r.lineTo(422,202),r.lineTo(388,202),r.closePath(),r.fill()}else if(a==="brick_wall"){r.fillStyle="#dc2626",r.beginPath(),r.moveTo(346,0),r.lineTo(384,58),r.lineTo(422,0),r.closePath(),r.fill();const l=[{y:162,bricks:[[344,38],[386,38]]},{y:190,bricks:[[326,36],[366,36],[406,36]]},{y:218,bricks:[[344,38],[386,38]]}];for(const c of l)for(const[u,f]of c.bricks)r.fillStyle="#d96b38",r.strokeStyle="#3b1608",r.lineWidth=3.5,r.beginPath(),r.roundRect(u,c.y,f,24,3),r.fill(),r.stroke(),r.fillStyle="#fdba74",r.fillRect(u+3,c.y+3,f-6,4)}else a==="chili_crest"?(r.fillStyle="#ffffff",r.beginPath(),r.moveTo(350,0),r.lineTo(384,52),r.lineTo(418,0),r.closePath(),r.fill(),r.save(),r.translate(384,196),r.rotate(-.22),r.lineWidth=6,r.strokeStyle="#ffffff",r.fillStyle="#ef4444",r.beginPath(),r.moveTo(22,-32),r.bezierCurveTo(34,4,10,38,-32,30),r.bezierCurveTo(-6,18,6,-4,6,-28),r.closePath(),r.stroke(),r.fill(),r.fillStyle="#22c55e",r.beginPath(),r.ellipse(14,-30,9,6,.3,0,Math.PI*2),r.fill(),r.strokeStyle="#16a34a",r.lineWidth=4.5,r.beginPath(),r.moveTo(16,-34),r.quadraticCurveTo(22,-48,12,-52),r.stroke(),r.restore()):a==="arsenal_clean"?(r.fillStyle="#ffffff",r.beginPath(),r.moveTo(350,0),r.lineTo(384,52),r.lineTo(418,0),r.closePath(),r.fill()):a==="white_blue_trim"?(r.fillStyle="#1d4ed8",r.beginPath(),r.moveTo(346,0),r.lineTo(384,62),r.lineTo(422,0),r.closePath(),r.fill(),r.fillStyle="#ffffff",r.beginPath(),r.moveTo(358,0),r.lineTo(384,42),r.lineTo(410,0),r.closePath(),r.fill()):a==="red_white_stripes"?(r.fillStyle="#ffffff",r.strokeStyle="#991b1b",r.lineWidth=3,r.beginPath(),r.moveTo(348,0),r.lineTo(384,58),r.lineTo(420,0),r.closePath(),r.fill(),r.stroke()):a==="plain"?(r.fillStyle=t?"#b45309":n.trim,r.beginPath(),r.moveTo(352,0),r.lineTo(384,56),r.lineTo(416,0),r.closePath(),r.fill()):a==="v_collar"?(r.fillStyle=n.trim,r.beginPath(),r.moveTo(348,0),r.lineTo(384,62),r.lineTo(420,0),r.closePath(),r.fill()):(r.save(),r.translate(414,130),r.fillStyle=n.trim,r.beginPath(),r.arc(0,0,18,0,Math.PI*2),r.fill(),r.fillStyle=n.secondary,r.beginPath(),r.arc(0,0,13,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff",r.beginPath(),r.arc(0,0,5,0,Math.PI*2),r.fill(),r.restore(),e>0&&(r.save(),r.translate(384,210),r.textAlign="center",r.textBaseline="middle",r.font='800 54px system-ui, -apple-system, "Segoe UI", sans-serif',r.fillStyle=n.numberColor,r.fillText(String(e),0,0),r.restore()));r.save(),r.lineCap="round";for(const l of[128,384])for(let c=0;c<5;c++){const u=l-76+c*36,f=414+c%2*22;r.strokeStyle="rgba(0,0,0,0.07)",r.lineWidth=3,r.beginPath(),r.moveTo(u,504),r.quadraticCurveTo(u+14,f+30,u+6,f),r.stroke(),r.strokeStyle="rgba(255,255,255,0.05)",r.lineWidth=2,r.beginPath(),r.moveTo(u+3,504),r.quadraticCurveTo(u+17,f+30,u+9,f),r.stroke()}r.restore();const o=new xa(i);return o.colorSpace=Qt,o.anisotropy=4,o}function rb(n){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),i=()=>{const f=new xa(e);return f.colorSpace=Qt,f};t.fillStyle=n.skin,t.fillRect(0,0,256,256);const r=t.createRadialGradient(192,128,8,192,128,76);r.addColorStop(0,jn(n.skin,.07)),r.addColorStop(1,jn(n.skin,-.07)),t.fillStyle=r,t.fillRect(0,0,256,256);const s=192,a=n.keeperPersona,o=n.playerPersona;if(o==="mulaohan"){const f=t.createRadialGradient(s,54,4,s,54,46);f.addColorStop(0,"rgba(255,245,235,0.34)"),f.addColorStop(1,"rgba(255,245,235,0)"),t.fillStyle=f,t.fillRect(s-50,8,100,92)}else if(a!=="tuoheya"){const f=o==="jiadaogou"?"#201611":o==="ligugu"?"#cbd5e1":n.hair,d=o==="mahangmu"||o==="jatiewei"||o==="siqiaotun"?32:44;t.fillStyle=n.hair,t.fillRect(0,0,256,d),t.fillStyle=f,t.fillRect(0,0,142,168),t.fillRect(238,0,18,130),t.fillRect(138,0,14,130)}const l=(f=1)=>{t.fillStyle=jn(n.skin,-.24),t.beginPath(),t.ellipse(s,147,5.8*f,3.3*f,0,0,Math.PI*2),t.fill()},c=(f="#1f1612",d=4.6)=>{for(const p of[-1,1]){const v=s+p*15.5,_=114;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(v,_,7.6,d,0,0,Math.PI*2),t.fill(),t.fillStyle=f,t.beginPath(),t.arc(v,_,3.9,0,Math.PI*2),t.fill(),t.fillStyle="#0e0a08",t.beginPath(),t.arc(v,_,2,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(v-1.3,_-1.3,1.3,0,Math.PI*2),t.fill()}},u=(f=169,d=18,p=18)=>{t.fillStyle="#42110f",t.beginPath(),t.ellipse(s,f,d,p,0,.05*Math.PI,.95*Math.PI),t.closePath(),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(s,f,d-2,p-3,0,.08*Math.PI,.92*Math.PI),t.closePath(),t.fill()};if(a==="laya")return t.fillStyle="#1a1310",t.beginPath(),t.ellipse(s,194,42,46,0,0,Math.PI),t.fill(),t.beginPath(),t.ellipse(s,164,26,9,0,Math.PI,Math.PI*2),t.fill(),t.fillRect(s-24,160,48,11),u(169,19,19),t.strokeStyle="#120d0a",t.lineWidth=7.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,99),t.quadraticCurveTo(s-16,91,s-6,97),t.moveTo(s+6,97),t.quadraticCurveTo(s+16,91,s+26,99),t.stroke(),c("#3b2114",5.8),i();if(a==="aozhezhe"){t.strokeStyle="rgba(25,10,5,0.45)",t.lineWidth=2.2;for(const f of[72,79])t.beginPath(),t.moveTo(s-20,f),t.quadraticCurveTo(s,f-4,s+20,f),t.stroke();t.strokeStyle="#100b08",t.lineWidth=5.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,95),t.quadraticCurveTo(s-16,82,s-6,89),t.moveTo(s+6,89),t.quadraticCurveTo(s+16,82,s+26,95),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,p=112;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,p,9.6,10.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#29150c",t.beginPath(),t.arc(d,p+.5,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#090605",t.beginPath(),t.arc(d,p+.5,2,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.3,p-1.3,1.3,0,Math.PI*2),t.fill()}return t.fillStyle="#120d0a",t.beginPath(),t.ellipse(s,224,24,18,0,0,Math.PI*2),t.fill(),t.fillStyle="#2b0908",t.beginPath(),t.roundRect(s-17,160,34,44,11),t.fill(),t.fillStyle="#f8fafc",t.fillRect(s-13,162,26,6),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,192,12,8,0,0,Math.PI*2),t.fill(),t.fillStyle="#f8fafc",t.fillRect(s-12,197,24,5),t.strokeStyle="#3a1b10",t.lineWidth=3.2,t.beginPath(),t.roundRect(s-17,160,34,44,11),t.stroke(),i()}if(a==="leikesen"){for(const f of[-1,1]){const d=s+f*16,p=114,v=t.createRadialGradient(d,p,2,d,p,22);v.addColorStop(0,"rgba(186, 230, 253, 0.95)"),v.addColorStop(.45,"rgba(56, 189, 248, 0.65)"),v.addColorStop(1,"rgba(56, 189, 248, 0)"),t.fillStyle=v,t.fillRect(d-22,p-22,44,44),t.fillStyle="#ecfeff",t.beginPath(),t.ellipse(d,p,8.5,5.2,f*-.08,0,Math.PI*2),t.fill()}return t.strokeStyle="#7c4a15",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.lineTo(s-6,104),t.moveTo(s+6,104),t.lineTo(s+26,98),t.stroke(),t.fillStyle="#a86b24",t.beginPath(),t.ellipse(s,196,44,48,0,0,Math.PI),t.fill(),i()}if(a==="dingneisi"){t.strokeStyle="#3b2313",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-27,96),t.quadraticCurveTo(s-16,84,s-5,95),t.moveTo(s+5,101),t.quadraticCurveTo(s+16,99,s+26,103),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,p=114+(f>0?1.5:0);t.fillStyle="#f8fafc",t.beginPath(),t.ellipse(d,p,7.6,4.4,0,0,Math.PI*2),t.fill(),t.fillStyle="#231710",t.beginPath(),t.arc(d+1.2,p,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d,p-1.1,1.2,0,Math.PI*2),t.fill(),t.strokeStyle="#3a2214",t.lineWidth=2.4,t.beginPath(),t.moveTo(d-8,p-2),t.quadraticCurveTo(d,p-5,d+8,p-1.5),t.stroke()}return t.strokeStyle=jn(n.skin,-.44),t.lineWidth=3.4,t.lineCap="round",t.beginPath(),t.moveTo(s-19,166),t.quadraticCurveTo(s-4,176,s+14,175),t.stroke(),t.lineWidth=2.2,t.beginPath(),t.arc(s-20,165,5,Math.PI*.75,Math.PI*1.45),t.stroke(),i()}if(o==="morenha"){t.fillStyle="#ca8a04",t.beginPath(),t.ellipse(s,198,42,46,0,0,Math.PI),t.fill(),t.strokeStyle="#a16207",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-15,103,s-6,100),t.moveTo(s+6,100),t.quadraticCurveTo(s+15,103,s+26,98),t.stroke(),t.strokeStyle="#5c3618",t.lineWidth=3.2;for(const f of[-1,1]){const d=s+f*15.5;t.beginPath(),t.moveTo(d-8,114),t.quadraticCurveTo(d,120,d+8,114),t.stroke()}return l(1.1),t.strokeStyle="#7c3f28",t.lineWidth=3,t.beginPath(),t.moveTo(s-11,172),t.quadraticCurveTo(s,170,s+11,172),t.stroke(),i()}if(o==="pabupaleng"){t.strokeStyle="#b48628",t.lineWidth=4.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,99),t.quadraticCurveTo(s-14,92,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+14,92,s+25,99),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,p=115;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,p,8,5.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#38bdf8",t.beginPath(),t.arc(d,p+1,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#0f172a",t.beginPath(),t.arc(d,p+1,1.8,0,Math.PI*2),t.fill(),t.fillStyle=jn(n.skin,-.08),t.beginPath(),t.ellipse(d,p-2.4,8.4,3.8,0,0,Math.PI*2),t.fill(),t.strokeStyle="#7c523c",t.lineWidth=2,t.beginPath(),t.moveTo(d-8,p-.5),t.lineTo(d+8,p-.5),t.stroke()}return t.fillStyle="rgba(239, 68, 68, 0.28)",t.beginPath(),t.ellipse(s,144,9,6.5,0,0,Math.PI*2),t.fill(),t.fillStyle="#4a1518",t.beginPath(),t.ellipse(s,174,8.5,5.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-6,170,12,2.8),i()}if(o==="saxiaojiao"||o==="edashuai"){const f=o==="saxiaojiao";f?(t.fillStyle="#16100c",t.fillRect(s-18,159,36,5),t.beginPath(),t.ellipse(s,214,18,12,0,0,Math.PI*2),t.fill()):(t.fillStyle="#b78332",t.globalAlpha=.72,t.beginPath(),t.ellipse(s,198,28,30,0,0,Math.PI),t.fill(),t.fillRect(s-18,162,36,8),t.globalAlpha=1),t.strokeStyle=f?"#140e0b":"#9a6c22",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,96),t.quadraticCurveTo(s-16,88,s-6,94),t.moveTo(s+6,99),t.quadraticCurveTo(s+16,94,s+26,100),t.stroke();const d=s-15.5;return t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,113,8,5.8,0,0,Math.PI*2),t.fill(),t.fillStyle=f?"#3b2114":"#38bdf8",t.beginPath(),t.arc(d,113,4.2,0,Math.PI*2),t.fill(),t.fillStyle="#120c08",t.beginPath(),t.arc(d,113,2.1,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.3,111.6,1.4,0,Math.PI*2),t.fill(),t.strokeStyle=f?"#1a0f0a":"#6b4718",t.lineWidth=3.6,t.beginPath(),t.moveTo(s+7,115),t.quadraticCurveTo(s+15.5,108,s+24,115),t.stroke(),l(),f?u(168,20,18):(t.strokeStyle="#7c3f28",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-15,171),t.quadraticCurveTo(s,180,s+16,169),t.stroke()),i()}if(o==="mulaohan"){t.strokeStyle="rgba(35,15,8,0.42)",t.lineWidth=2.4;for(const f of[74,82])t.beginPath(),t.moveTo(s-22,f),t.quadraticCurveTo(s,f-4,s+22,f),t.stroke();return t.fillStyle="#120d0b",t.beginPath(),t.ellipse(s,198,46,52,0,0,Math.PI),t.fill(),t.fillRect(s-28,162,56,14),t.strokeStyle="#0e0a08",t.lineWidth=7.4,t.lineCap="round",t.beginPath(),t.moveTo(s-27,100),t.quadraticCurveTo(s-16,91,s-5,98),t.moveTo(s+5,98),t.quadraticCurveTo(s+16,91,s+27,100),t.stroke(),c("#2b170e",5.2),l(1.3),i()}if(o==="weixiaoshu"){t.strokeStyle="#704222",t.lineWidth=5,t.lineCap="round",t.beginPath(),t.moveTo(s-25,97),t.quadraticCurveTo(s-15,90,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+15,90,s+25,97),t.stroke(),c("#5c3218",6.2),t.fillStyle="rgba(244, 114, 114, 0.25)";for(const f of[-1,1])t.beginPath(),t.ellipse(s+f*22,136,11,7,0,0,Math.PI*2),t.fill();t.fillStyle="rgba(140, 72, 42, 0.48)";for(const[f,d]of[[-24,134],[-18,138],[-12,133],[12,133],[18,138],[24,134]])t.beginPath(),t.arc(s+f,d,1.5,0,Math.PI*2),t.fill();return l(.95),t.strokeStyle="#8a3c2c",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-16,169),t.quadraticCurveTo(s,179,s+16,169),t.stroke(),i()}if(o==="xiehuashao")return t.fillStyle="#362012",t.beginPath(),t.ellipse(s,196,42,46,0,0,Math.PI),t.fill(),t.fillRect(s-24,160,48,11),u(168,19,18),t.strokeStyle="#26160c",t.lineWidth=6.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-15,91,s-5,98),t.moveTo(s+5,98),t.quadraticCurveTo(s+15,91,s+26,98),t.stroke(),c("#3b2114",5.4),l(1.1),i();if(o==="jiadaogou")return t.strokeStyle="#120d0a",t.lineWidth=7.2,t.lineCap="round",t.beginPath(),t.moveTo(s-27,94),t.lineTo(s-5,105),t.moveTo(s+5,105),t.lineTo(s+27,94),t.stroke(),c("#24150e",5.2),l(),t.fillStyle="#360c0c",t.beginPath(),t.roundRect(s-15,161,30,34,10),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-11,163,22,5.5),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,186,10,6.5,0,0,Math.PI*2),t.fill(),i();if(o==="mushandian")return t.strokeStyle="#8a6220",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,97),t.lineTo(s-6,103),t.moveTo(s+6,103),t.lineTo(s+26,97),t.stroke(),c("#2563eb",4.8),l(),u(169,15,12),i();if(o==="mahangmu")return t.strokeStyle="#241912",t.lineWidth=6.8,t.lineCap="round",t.beginPath(),t.moveTo(s-27,100),t.lineTo(s-7,100),t.moveTo(s+7,100),t.lineTo(s+27,100),t.stroke(),c("#2b1d14",4.4),l(1.15),t.strokeStyle=jn(n.skin,-.42),t.lineWidth=3.4,t.beginPath(),t.moveTo(s-14,174),t.lineTo(s+14,174),t.stroke(),i();if(o==="matufu"){t.fillStyle="rgba(42,28,20,0.28)",t.beginPath(),t.ellipse(s,198,40,38,0,0,Math.PI),t.fill(),t.strokeStyle="#18100c",t.lineWidth=7,t.lineCap="round",t.beginPath(),t.moveTo(s-28,94),t.lineTo(s-4,107),t.moveTo(s+4,107),t.lineTo(s+28,94),t.stroke(),t.strokeStyle="rgba(90,35,25,0.55)",t.lineWidth=2.2,t.beginPath(),t.moveTo(s-3,96),t.lineTo(s-3,108),t.moveTo(s+3,96),t.lineTo(s+3,108),t.stroke(),c("#24150e",4.8),l(1.15),t.fillStyle="#ffffff",t.strokeStyle="#3b1512",t.lineWidth=3,t.beginPath(),t.roundRect(s-19,165,38,17,6),t.fill(),t.stroke(),t.strokeStyle="rgba(40,20,15,0.45)",t.lineWidth=1.6,t.beginPath(),t.moveTo(s-18,173.5),t.lineTo(s+18,173.5);for(const f of[-10,-3,4,11])t.moveTo(s+f,166),t.lineTo(s+f,181);return t.stroke(),i()}if(o==="ligugu")return t.strokeStyle="#2b1d14",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,99),t.quadraticCurveTo(s-15,93,s-6,98),t.moveTo(s+6,97),t.quadraticCurveTo(s+15,91,s+25,97),t.stroke(),c("#2b1a12",4.8),l(1.15),t.strokeStyle=jn(n.skin,-.4),t.lineWidth=3.2,t.beginPath(),t.moveTo(s-13,174),t.quadraticCurveTo(s+2,176,s+14,170),t.stroke(),i();if(o==="jatiewei")return t.fillStyle="#120d0a",t.beginPath(),t.ellipse(s,198,42,48,0,0,Math.PI),t.fill(),t.strokeStyle="#0d0907",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,92),t.quadraticCurveTo(s-15,84,s-5,92),t.moveTo(s+5,92),t.quadraticCurveTo(s+15,84,s+26,92),t.stroke(),c("#24140c",4),l(1.2),t.fillStyle="#380b0b",t.beginPath(),t.roundRect(s-24,154,48,46,14),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-21,156,42,12),t.fillRect(s-18,190,36,7),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,182,14,8,0,0,Math.PI*2),t.fill(),i();if(o==="antuoluo")return t.fillStyle="#2d1d13",t.globalAlpha=.68,t.beginPath(),t.ellipse(s,198,39,40,0,0,Math.PI),t.fill(),t.fillRect(s-19,163,38,8),t.globalAlpha=1,t.strokeStyle="#1c120c",t.lineWidth=7,t.lineCap="round",t.beginPath(),t.moveTo(s-28,93),t.lineTo(s-4,107),t.moveTo(s+4,107),t.lineTo(s+28,93),t.stroke(),c("#21140d",4.8),l(),t.strokeStyle="#4a2418",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-13,176),t.quadraticCurveTo(s,170,s+13,176),t.stroke(),i();if(o==="nujiaoshou"){t.strokeStyle="rgba(85,42,22,0.32)",t.lineWidth=2.4;for(const f of[-1,1])t.beginPath(),t.moveTo(s+f*32,134),t.quadraticCurveTo(s+f*27,162,s+f*20,186),t.stroke();t.strokeStyle="#1a110b",t.lineWidth=6.6,t.lineCap="round",t.beginPath(),t.moveTo(s-28,96),t.lineTo(s-5,105),t.moveTo(s+5,105),t.lineTo(s+28,96),t.stroke(),t.strokeStyle=n.skin,t.lineWidth=2.6,t.beginPath(),t.moveTo(s+19,94),t.lineTo(s+22,103),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,p=114;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,p,8.6,5.8,0,0,Math.PI*2),t.fill(),t.fillStyle="#2b1910",t.beginPath(),t.arc(d,p,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#090605",t.beginPath(),t.arc(d,p,1.9,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.2,p-1.2,1.2,0,Math.PI*2),t.fill()}return l(1.12),t.strokeStyle="#1c120c",t.lineWidth=4.2,t.lineCap="round",t.beginPath(),t.moveTo(s-19,166),t.quadraticCurveTo(s-9,159,s-2,162),t.moveTo(s+2,162),t.quadraticCurveTo(s+9,159,s+19,166),t.stroke(),t.strokeStyle=jn(n.skin,-.4),t.lineWidth=3,t.beginPath(),t.moveTo(s-13,173),t.quadraticCurveTo(s,175,s+13,173),t.stroke(),t.fillStyle="#1c120c",t.beginPath(),t.ellipse(s,184,4.8,2.8,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(s-5,236,10,9,-.15,0,Math.PI*2),t.ellipse(s+5,236,10,9,.15,0,Math.PI*2),t.fill(),i()}if(o==="jiekexikao"){t.strokeStyle="rgba(20,10,5,0.42)",t.lineWidth=2;for(const f of[76,83])t.beginPath(),t.moveTo(s-18,f),t.quadraticCurveTo(s,f-3,s+18,f),t.stroke();return t.strokeStyle="#120d0a",t.lineWidth=5.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-14,88,s-5,92),t.moveTo(s+5,94),t.quadraticCurveTo(s+15,90,s+26,99),t.stroke(),c("#29160d",5.8),l(1.15),t.fillStyle="#140f0c",t.beginPath(),t.ellipse(s,218,18,12,0,0,Math.PI*2),t.fill(),t.strokeStyle="#2b140d",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-11,174),t.quadraticCurveTo(s,171,s+11,175),t.stroke(),i()}if(o==="siqiaotun")return t.fillStyle="#140f0c",t.beginPath(),t.ellipse(s,214,20,14,0,0,Math.PI*2),t.fill(),t.fillRect(s-17,159,34,4.5),t.strokeStyle="#120d0a",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,96),t.quadraticCurveTo(s-15,89,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+15,89,s+25,96),t.stroke(),c("#2b170e",5.2),l(1.1),u(168,19,17),i();if(o==="weizhencha")return t.strokeStyle="#a37628",t.lineWidth=5.2,t.lineCap="round",t.beginPath(),t.moveTo(s-24,100),t.quadraticCurveTo(s-14,95,s-6,99),t.moveTo(s+6,99),t.quadraticCurveTo(s+14,95,s+24,100),t.stroke(),c("#2563eb",4.8),l(),t.strokeStyle=jn(n.skin,-.38),t.lineWidth=3.2,t.beginPath(),t.moveTo(s-13,172),t.quadraticCurveTo(s,178,s+14,171),t.stroke(),i();if(n.facialHair!=="none"){const f=n.facialHair==="stubble"?.26:n.facialHair==="goatee"?.56:.74;t.fillStyle=n.hair,t.globalAlpha=f,n.facialHair==="goatee"?(t.beginPath(),t.ellipse(s,198,15,25,0,0,Math.PI*2),t.fill()):(t.beginPath(),t.ellipse(s,196,38,36,0,0,Math.PI),t.fill(),t.fillRect(s-17,165,34,10)),t.globalAlpha=1}return t.strokeStyle=jn(n.hair,-.18),t.lineWidth=5,t.lineCap="round",t.beginPath(),t.moveTo(s-24,102),t.quadraticCurveTo(s-15,96,s-7,101),t.moveTo(s+7,101),t.quadraticCurveTo(s+15,96,s+24,102),t.stroke(),c("#1a1614",4.4),l(),t.strokeStyle=jn(n.skin,-.38),t.lineWidth=2.8,t.beginPath(),t.moveTo(s-11,174),t.quadraticCurveTo(s,176.5,s+11,174),t.stroke(),t.fillStyle="rgba(150,70,65,0.32)",t.beginPath(),t.ellipse(s,175.5,10,3.4,0,0,Math.PI*2),t.fill(),i()}function sb(n,e){const t=new nt,i=n.keeperPersona,r=n.playerPersona;if(i==="leikesen"){const l=new be({color:"#d89b3c",roughness:.68}),c=new W(new Ce(.098,18,14),e);c.position.set(0,.148,-.014),c.scale.set(1.04,.96,1.05),t.add(c);for(const _ of[-1,1]){const m=new W(new Ce(.056,14,10),l);m.position.set(_*.036,.214,.016),m.scale.set(1.05,.62,1.18),m.rotation.z=_*-.22,t.add(m)}for(let _=0;_<11;_++){const m=_/10,h=Math.PI*(.48+m*1.04),g=.094,y=.096,S=Math.sin(h)*g,b=Math.cos(h)*y-.01;for(let T=0;T<4;T++){const x=new W(new Ce(.033-T*.002,10,8),T%2===0?e:l),M=1+T*.09+T%2*.05;x.position.set(S*M,.125-T*.052,b*M),x.scale.set(.95,1.28,.95),x.castShadow=!0,t.add(x)}}const u=new be({color:"#153042",roughness:.45,metalness:.25}),f=new W(new ot(.095,.095,.036,24,1,!0),u);f.position.set(0,.156,-.003),f.scale.set(.97,1,1.07),t.add(f);const d=new be({color:"#a5f3fc",emissive:"#22d3ee",emissiveIntensity:1.5,roughness:.2}),p=new W(new et(.014,.03,.008),d);p.position.set(0,.156,.101),p.rotation.z=-.28,t.add(p);for(const _ of[-1,1]){const m=new W(new Ce(.013,10,8),d);m.position.set(_*.031,.104,.094),m.scale.set(1.25,.72,.65),t.add(m);for(let h=0;h<3;h++){const g=new W(new et(.034,.0055,.0055),d);g.position.set(_*(.062+h*.026),.108+(h%2===0?.006:-.004),.088-h*.016),g.rotation.z=_*(h%2===0?.36:-.28),g.rotation.y=_*-.35,t.add(g)}}const v=new W(new Ce(.068,16,12),e);v.position.set(0,-.006,.056),v.scale.set(1.12,1.08,.92),v.castShadow=!0,t.add(v);for(const _ of[-1,1]){const m=new W(new Ce(.044,12,10),e);m.position.set(_*.052,.024,.042),m.scale.set(.88,1.18,.95),t.add(m);const h=new W(new Vt(.013,.032,6,8),l);h.position.set(_*.024,.048,.098),h.rotation.z=Math.PI*.5+_*.34,t.add(h)}return t}if(r==="mulaohan"){const l=new be({color:"#14100e",roughness:.85}),c=new W(new Ce(.082,18,14),l);c.position.set(0,-.02,.058),c.scale.set(1.18,1.14,.96),c.castShadow=!0,t.add(c);for(const u of[-1,1]){const f=new W(new Ce(.052,12,10),l);f.position.set(u*.058,.022,.044),f.scale.set(.92,1.2,.95),t.add(f);const d=new W(new Ce(.046,10,8),l);d.position.set(u*.032,-.068,.064),t.add(d);const p=new W(new Vt(.015,.038,6,8),l);p.position.set(u*.026,.048,.101),p.rotation.z=Math.PI*.5+u*.28,t.add(p)}return t}if(r==="morenha"){const l=new be({color:"#facc15",roughness:.65}),c=new be({color:"#38bdf8",roughness:.4}),u=new W(new Ce(.096,18,14),e);u.position.set(0,.152,-.012),u.scale.set(1.02,.95,1.04),t.add(u);for(const v of[-1,1]){const _=new W(new Ce(.056,14,10),l);_.position.set(v*.036,.212,.012),_.scale.set(1.04,.58,1.22),_.rotation.z=v*-.22,t.add(_);for(let g=0;g<6;g++){const y=new W(new Ce(.02-g*.0012,10,8),g%2===0?l:e);y.position.set(v*.088,.085-g*.031,.038+g*.005),y.scale.set(.95,1.18,.95),t.add(y)}const m=new W(new ot(.014,.014,.012,10),c);m.position.set(v*.088,-.095,.068),t.add(m);const h=new W(new wn(.015,.032,8),l);h.position.set(v*.088,-.115,.068),h.rotation.x=Math.PI,t.add(h)}for(let v=0;v<9;v++){const _=Math.PI*(.52+v/8*.96),m=Math.sin(_)*.092,h=Math.cos(_)*.094-.01;for(let g=0;g<3;g++){const y=new W(new Ce(.03,8,8),e);y.position.set(m*(1+g*.07),.12-g*.048,h*(1+g*.07)),y.scale.set(.95,1.25,.95),t.add(y)}}const f=new W(new Ce(.064,16,12),e);f.position.set(0,-.005,.056),f.scale.set(1.08,1.02,.9),t.add(f);for(const v of[-1,1]){const _=new W(new Vt(.012,.03,6,8),l);_.position.set(v*.022,.048,.098),_.rotation.z=Math.PI*.5+v*.34,t.add(_)}const d=new W(new ot(.016,.016,.012,10),c);d.position.set(0,-.062,.076),t.add(d);const p=new W(new wn(.018,.038,10),l);return p.position.set(0,-.084,.078),p.rotation.x=Math.PI,t.add(p),t}if(r==="weizhencha"){const l=new be({color:"#6b4428",roughness:.62,metalness:.05}),c=new be({color:"#4a2c18",roughness:.7}),u=new be({color:"#cbd5e1",roughness:.3,metalness:.65}),f=new be({color:"#38bdf8",emissive:"#0284c7",emissiveIntensity:.35,roughness:.15,metalness:.4}),d=new W(new Ce(.104,20,16,0,Math.PI*2,0,Math.PI*.58),l);d.position.set(0,.132,-.008),d.rotation.x=-.18,d.castShadow=!0,t.add(d);const p=new W(new et(.018,.022,.19),c);p.position.set(0,.228,-.012),t.add(p);for(let m=-2;m<=2;m++){const h=new W(new Ce(.022,8,8),e);h.position.set(m*.02,.156,.088-Math.abs(m)*.004),h.scale.set(1.1,.55,.8),t.add(h)}for(const m of[-1,1]){const h=new W(new Vt(.022,.095,6,8),l);h.position.set(m*.096,.082,-.004),h.scale.set(.52,1,1.18),h.rotation.z=m*.08,t.add(h);const g=new W(new ot(.032,.032,.022,16),u);g.rotation.x=Math.PI*.44,g.position.set(m*.037,.188,.092),t.add(g);const y=new W(new ot(.026,.026,.025,16),f);y.rotation.x=Math.PI*.44,y.position.set(m*.037,.188,.094),t.add(y)}const v=new W(new et(.024,.01,.014),c);v.position.set(0,.188,.101),t.add(v);const _=new W(new ot(.105,.105,.018,22,1,!0),c);return _.position.set(0,.182,-.006),_.rotation.x=-.12,t.add(_),t}if(r==="mahangmu"){const l=new W(new et(.208,.048,.206),e);l.position.set(0,.206,-.002),l.castShadow=!0,t.add(l);const c=new W(new et(.204,.135,.08),e);return c.position.set(0,.145,-.066),t.add(c),t}const s=r==="jiadaogou"?new be({color:"#201611",roughness:.85}):e,a=pn([{y:.115,rx:.088,rz:.088,oz:-.022},{y:.158,rx:.092,rz:.098,oz:-.015},{y:.196,rx:.089,rz:.098,oz:-.008},{y:.224,rx:.068,rz:.078,oz:-.002},{y:.238,rx:.022,rz:.026,oz:0},{y:.242,rx:0,rz:0,oz:0}],20,2),o=new W(a,s);if(o.rotation.x=-.26,o.position.set(0,.014,-.006),o.castShadow=!0,t.add(o),i==="aozhezhe"){for(let c=0;c<16;c++){const u=c<10?.052:.022,f=(c<10?c/10:(c-10)/6)*Math.PI*2,d=new W(new Vt(.016,.038,6,8),e);d.position.set(Math.sin(f)*u,.232+c%2*.01,Math.cos(f)*u-.004),d.rotation.z=-Math.sin(f)*.22,d.rotation.x=Math.cos(f)*.18,d.castShadow=!0,t.add(d)}const l=new W(new Ce(.026,10,8),e);return l.position.set(0,-.022,.072),l.scale.set(1.1,.85,.9),t.add(l),t}if(i==="laya"){for(let c=0;c<9;c++){const u=new W(new Ce(.035,10,8),e),f=c/8*Math.PI*1.5-.75;u.position.set(Math.sin(f)*.044,.226+c%2*.007,.014+Math.cos(f)*.04),u.scale.set(1.05,.78,1.18),t.add(u)}const l=new W(new Ce(.048,14,10),e);l.position.set(0,-.014,.048),l.scale.set(1.22,.72,.95),t.add(l);for(const c of[-1,1]){const u=new W(new Vt(.018,.055,6,8),e);u.position.set(c*.064,.025,.034),u.rotation.z=c*.28,u.rotation.x=-.25,t.add(u)}return t}if(i==="dingneisi"){const l=new W(new Ce(.078,16,12),e);return l.scale.set(1.02,.48,1.18),l.position.set(.012,.224,.012),l.rotation.set(-.22,0,-.16),l.castShadow=!0,t.add(l),t}if(r==="matufu"){const l=new be({color:"#f8fafc",roughness:.65}),c=new W(new ot(.096,.094,.042,24),l);c.position.set(0,.158,.002),c.scale.set(.98,1,1.08),c.castShadow=!0,t.add(c);const u=new W(new et(.06,.016,.012),l);u.position.set(.015,.158,.102),u.rotation.z=-.14,t.add(u);for(let f=0;f<12;f++){const d=f/12*Math.PI*2,p=new W(new wn(.028,.068,8),e);p.position.set(Math.sin(d)*.052,.232+f%2*.012,Math.cos(d)*.052),p.rotation.z=-Math.sin(d)*.45,p.rotation.x=Math.cos(d)*.4,t.add(p)}return t}if(r==="nujiaoshou"){const l=new be({color:"#111827",roughness:.5}),c=new be({color:"#8c7350",roughness:.6}),u=new be({color:"#e8dac0",roughness:.42,metalness:.06});for(let v=-3;v<=3;v++){const _=v*.017,m=new W(new Vt(.014,.064,5,7),e);m.position.set(_,.214+(3-Math.abs(v))*.004,.046-Math.abs(v)*.004),m.rotation.x=-.82,m.rotation.z=_*2.4,t.add(m)}const f=new W(new ot(.026,.028,.016,14),l);f.position.set(0,.242,-.008),f.rotation.x=-.14,t.add(f);const d=new W(new Ce(.044,14,12),e);d.position.set(0,.27,-.012),d.scale.set(1.08,.88,1.06),d.castShadow=!0,t.add(d);for(const v of[-1,1]){const _=new jS([new z(v*.062,.188,.042),new z(v*.114,.194,.054),new z(v*.136,.244,.044),new z(v*.102,.308,.026)]),m=14,h=10,g=_.computeFrenetFrames(m,!1),y=_.getSpacedPoints(m),S=[],b=[];for(let N=0;N<=m;N++){const A=N/m,L=.025*Math.pow(1-A,.82)+.0018,P=y[N],I=g.normals[N],R=g.binormals[N];for(let O=0;O<=h;O++){const X=O/h*Math.PI*2,D=Math.cos(X),k=Math.sin(X);S.push(P.x+L*(D*I.x+k*R.x),P.y+L*(D*I.y+k*R.y),P.z+L*(D*I.z+k*R.z))}}for(let N=0;N<m;N++)for(let A=0;A<h;A++){const L=N*(h+1)+A,P=L+1,I=(N+1)*(h+1)+A,R=I+1;b.push(L,P,R,L,R,I)}const T=new Ot;T.setAttribute("position",new lt(S,3)),T.setIndex(b),T.computeVertexNormals();const x=new W(T,u);x.castShadow=!0,t.add(x);const M=new W(new Ce(.026,10,8),c);M.position.set(v*.064,.188,.042),M.scale.set(.85,1.05,1.05),t.add(M)}for(let v=0;v<3;v++){const _=new W(new Vt(.008,.062,5,7),e);_.position.set(-.072-v*.011,.045-v*.012,-.024-v*.006),_.rotation.z=-.32-v*.1,_.rotation.x=.15,t.add(_)}const p=new W(new Ce(.021,10,8),e);return p.position.set(0,-.011,.048),p.scale.set(1.22,.65,.85),t.add(p),t}if(r==="jiekexikao"){const l=new be({color:"#eab308",roughness:.65}),c=20;for(let f=0;f<c;f++){const d=f>=12,v=(d?(f-12)/8:f/12)*Math.PI*2+(d?.24:0),_=d?.026:.052,m=d?.78:Math.cos(v)>.35?1.05:1.18,h=new nt;h.position.set(Math.sin(v)*_,d?.228:.214,Math.cos(v)*_+.008),h.rotation.order="YXZ",h.rotation.y=v,h.rotation.x=m;const g=new W(new Vt(.0135,.036,5,7),e);g.position.set(0,.02,0),h.add(g);const y=new W(new Vt(.013,.046,5,7),l);y.position.set(0,.058,.008),y.rotation.x=.28,y.castShadow=!0,h.add(y),t.add(h)}const u=new W(new Ce(.021,10,8),e);return u.position.set(0,-.011,.048),u.scale.set(1.2,.65,.85),t.add(u),t}if(r==="jiadaogou"){for(let l=0;l<11;l++){const c=(l%4-1.5)*.028,u=Math.floor(l/4)*.034-.02,f=new W(new wn(.028,.068,8),e);f.position.set(c,.236,u+.018),f.rotation.x=.38,f.rotation.z=-c*3.5,f.castShadow=!0,t.add(f)}return t}if(r==="mushandian"){for(const l of[-1,1]){const c=new W(new Ce(.058,14,10),e);c.position.set(l*.042,.214,.018),c.scale.set(.95,.68,1.25),c.rotation.z=l*-.35,t.add(c);const u=new W(new Vt(.022,.068,6,8),e);u.position.set(l*.078,.162,.044),u.rotation.z=l*.18,u.rotation.x=.22,t.add(u)}return t}if(r==="xiehuashao"||r==="antuoluo"||r==="jatiewei"){if(r!=="jatiewei"){const u=new W(new Ce(.078,16,12),e);u.scale.set(1,.5,1.18),u.position.set(.01,.226,.012),u.rotation.set(-.2,0,-.15),t.add(u)}const l=r==="xiehuashao"?.052:.044,c=new W(new Ce(l,14,10),e);c.position.set(0,-.016,.05),c.scale.set(1.2,.72,.92),t.add(c);for(const u of[-1,1]){const f=new W(new Vt(.016,.052,6,8),e);f.position.set(u*.062,.022,.032),f.rotation.z=u*.28,f.rotation.x=-.24,t.add(f)}return t}if(r==="saxiaojiao"){for(let l=0;l<18;l++){const c=l/18*Math.PI*2,u=l<11?.056:.024,f=new W(new Ce(.028,10,8),e);f.position.set(Math.sin(c)*u,.224+(l>=11?.018:.006),Math.cos(c)*u),t.add(f)}return t}if(r==="edashuai"){const l=new W(new Ce(.082,16,12),e);l.scale.set(1.04,.54,1.2),l.position.set(.014,.23,.016),l.rotation.set(-.18,0,-.2),t.add(l);const c=new W(new Ce(.032,10,8),e);return c.position.set(0,-.016,.066),c.scale.set(1.15,.72,.85),t.add(c),t}if(r==="weixiaoshu"||r==="pabupaleng"){const l=r==="weixiaoshu"?11:8;for(let c=0;c<l;c++){const u=c/(l-1)-.5,f=new W(new wn(.028,r==="weixiaoshu"?.058:.044,8),e);f.position.set(u*.11,.226+c%2*.008,.032-Math.abs(u)*.03),f.rotation.x=.42,f.rotation.z=-u*.75,t.add(f)}return t}if(n.hairStyle==="swept"){const l=new W(new Ce(.078,16,12),e);l.scale.set(.98,.48,1.18),l.position.set(.008,.224,.012),l.rotation.x=-.22,l.castShadow=!0,t.add(l)}else if(n.hairStyle==="textured")for(let l=0;l<7;l++){const c=new W(new Ce(.033,10,8),e),u=l/7*Math.PI*1.4-.7;c.position.set(Math.sin(u)*.038,.226+l%2*.006,.008+Math.cos(u)*.038),c.scale.set(1,.72,1.15),t.add(c)}else if(n.hairStyle==="curly")for(let l=0;l<14;l++){const c=new W(new Ce(.032,10,8),e),u=l/14*Math.PI*2,f=l<9?.062:.028;c.position.set(Math.sin(u)*f,.214+(l>=9?.022:.006),Math.cos(u)*f-.008),t.add(c)}else if(n.hairStyle==="fade"){const l=new W(new et(.115,.036,.132),e);l.position.set(0,.226,.004),t.add(l)}else n.hairStyle==="buzz"&&o.scale.set(.97,.96,.97);return t}function ab(){const n=new nt,e=new be({color:"#ebd3ab",roughness:.88}),t=new be({color:"#f4e1be",roughness:.86}),i=new be({color:"#fbf0db",roughness:.78}),r=new be({color:"#f2a7a0",roughness:.75}),s=new be({color:"#caa878",roughness:.78}),a=new be({color:"#2b1d14",roughness:.5}),o=new be({color:"#ffffff",roughness:.3}),l=pn([{y:-.015,rx:.058,rz:.065,oz:.012},{y:.035,rx:.088,rz:.092,oz:.008},{y:.095,rx:.086,rz:.094,oz:.002},{y:.155,rx:.084,rz:.09,oz:-.004},{y:.205,rx:.058,rz:.064,oz:-.006}],22,2),c=new W(l,e);c.castShadow=!0,n.add(c);for(const m of[-1,1]){const h=new W(new Ce(.038,10,8),e);h.position.set(m*.068,.048,.025),n.add(h)}const u=new W(new Ce(.048,16,12),i);u.position.set(0,.052,.092),u.scale.set(.95,.88,1.18),u.castShadow=!0,n.add(u);for(const m of[-1,1]){const h=new W(new Ce(.024,12,10),i);h.position.set(m*.018,.058,.122),h.scale.set(.95,.92,1.05),n.add(h)}const f=new W(new Ce(.013,10,8),a);f.position.set(0,.078,.138),f.scale.set(1.35,.72,.7),n.add(f);const d=new W(new Ce(.021,10,8),a);d.position.set(0,.036,.118),d.scale.set(1.15,.78,.7),n.add(d);for(const m of[-1,1]){const h=new W(new et(.011,.016,.008),o);h.position.set(m*.0065,.038,.131),n.add(h)}const p=new W(new Ce(.026,12,10),i);p.position.set(0,.018,.106),p.scale.set(1.05,.65,1),n.add(p);for(const m of[-.012,0,.012]){const h=new W(new Vt(.013,.028,6,8),t);h.position.set(m,-.022,.088),h.rotation.x=.2,n.add(h)}const v=new be({color:"#ffffff",roughness:.25});for(const m of[-1,1]){const h=m*.043,g=.108,y=.078,S=new W(new Ce(.019,14,12),v);S.position.set(h,g,y),S.scale.set(1.1,.95,.8),n.add(S);const b=new W(new Ce(.0095,10,8),a);b.position.set(h,g-.002,y+.012),b.scale.set(1.15,.78,.6),n.add(b);const T=new W(new Ce(.0205,14,10,0,Math.PI*2,0,Math.PI*.54),s);T.position.set(h,g+.001,y),T.scale.set(1.12,.96,.85),T.rotation.x=.18,n.add(T)}const _=[[0,.168,.068,.036],[-.032,.164,.062,.033],[.032,.164,.062,.033],[-.056,.156,.044,.03],[.056,.156,.044,.03],[0,.198,.036,.042],[-.036,.194,.026,.038],[.036,.194,.026,.038],[0,.205,-.012,.044],[-.042,.182,-.022,.038],[.042,.182,-.022,.038]];for(const[m,h,g,y]of _){const S=new W(new Ce(y,10,8),t);S.position.set(m,h,g),S.castShadow=!0,n.add(S)}for(const m of[-1,1]){const h=new nt;h.position.set(m*.062,.192,-.006),h.rotation.z=-m*.22,h.rotation.x=.08;const g=new W(new wn(.028,.135,12),e);g.position.set(0,.062,0),g.scale.set(.88,1,.62),g.castShadow=!0,h.add(g);const y=new W(new wn(.017,.098,10),r);y.position.set(0,.058,.008),y.scale.set(.82,1,.45),h.add(y),n.add(h)}return n}function ob(n,e){const t=new nt,i=new be({color:n,roughness:.35,metalness:.12}),r=new be({color:"#111827",roughness:.5,metalness:.2}),s=new be({color:e&&n!=="#f8fafc"?"#ffffff":"#0f172a",roughness:.3}),a=new Ce(.056,16,12);a.scale(.86,.76,2.15);const o=new W(a,i);o.position.set(0,-.052,.052),o.castShadow=!0,t.add(o);const l=new W(new ot(.044,.048,.045,14),i);l.position.set(0,-.022,-.01),t.add(l);const c=new W(new et(.098,.018,.09),s);c.position.set(0,-.048,.045),c.rotation.x=.18,t.add(c);const u=new W(new et(.084,.014,.225),r);u.position.set(0,-.084,.05),u.castShadow=!0,t.add(u);const f=new ot(.006,.004,.014,6);for(const d of[-.026,.026])for(const p of[-.035,.045,.12]){const v=new W(f,r);v.position.set(d,-.092,p),t.add(v)}return t}function lb(n,e,t,i,r=!1){const s=new nt;if(e){const a=i.chestMotif==="lightning",o=new be({color:i.gloveBackColor??i.primary,roughness:.4}),l=new be({color:i.gloveLatex??"#f8fafc",emissive:a?"#0284c7":"#000000",emissiveIntensity:a?.35:0,roughness:.58}),c=new be({color:i.gloveStrapColor??"#0f172a",roughness:.5}),u=new W(new ot(.043,.045,.044,12),c);u.position.set(0,-.018,0),s.add(u);const f=new W(new et(.092,.105,.042),l);f.position.set(0,-.082,.004),f.castShadow=!0,s.add(f);const d=new W(new et(.094,.098,.024),o);if(d.position.set(0,-.08,-.014),s.add(d),i.gloveBackColor==="#dc2626"||a){const _=new be({color:a?"#67e8f9":"#ffffff",emissive:a?"#22d3ee":"#000000",emissiveIntensity:a?.9:0,roughness:.35});for(const m of[-.024,0,.024]){const h=new W(new et(.012,.072,.008),_);h.position.set(m,-.085,-.026),s.add(h)}}const p=i.gloveBackColor==="#dc2626"?o:l;for(let _=0;_<4;_++){const m=(_-1.5)/1.5,h=.072-Math.abs(m)*.01,g=new W(new Vt(.012,h,6,8),p);g.position.set(m*.032,-.155,.008),g.rotation.z=m*.14,g.rotation.x=-.12,g.castShadow=!0,s.add(g)}const v=new W(new Vt(.013,.052,6,8),l);v.position.set(-n*.056,-.095,.018),v.rotation.z=-n*.62,v.rotation.x=-.22,s.add(v)}else{const a=r?new be({color:"#1e293b",roughness:.52}):t;if(r){const c=new W(new ot(.033,.034,.024,10),a);c.position.set(0,-.012,0),s.add(c)}const o=new W(new Ce(.038,12,10),a);o.scale.set(.88,1.25,.56),o.position.set(0,-.052,0),o.castShadow=!0,s.add(o);for(let c=0;c<4;c++){const u=(c-1.5)/1.5,f=new W(new Vt(.0075,.044,4,6),a);f.position.set(u*.02,-.105,.006),f.rotation.x=-.25,s.add(f)}const l=new W(new Vt(.0085,.034,4,6),a);l.position.set(-n*.034,-.062,.014),l.rotation.z=-n*.45,s.add(l),s.scale.y=1.25}return s}function V0(n,e,t,i,r){t.rotation.set(-pi(e.flex,-1.05,3.05),-n*pi(e.twist,-1.4,1.4),n*pi(e.abduct,-.35,3.05)),i.rotation.set(-pi(e.elbow,.02,2.45),0,0),r.rotation.set(pi(e.wristPitch??0,-1.05,1.05),0,0)}function W0(n,e,t,i,r){t.rotation.set(-pi(e.flex,-.65,2.2),n*pi(e.twist,-.8,.8),n*pi(e.abduct,-.35,1.15)),i.rotation.set(pi(e.knee,.02,2.45),0,0),r.rotation.set(-pi(e.ankle,-.75,.5),0,0)}class dh{constructor(e,t,i,r){this.root=new nt,this.scaleGroup=new nt,this.pelvis=new nt,this.spine=new nt,this.neck=new nt,this.head=new nt,this.shoulderL=new nt,this.elbowL=new nt,this.wristL=new nt,this.handTipL=new Dt,this.shoulderR=new nt,this.elbowR=new nt,this.wristR=new nt,this.handTipR=new Dt,this.hipL=new nt,this.kneeL=new nt,this.ankleL=new nt,this.hipR=new nt,this.kneeR=new nt,this.ankleR=new nt,this.baseHipY=.959,this.tmpA=new z,this.tmpB=new z,this.disposed=!1,this.smoothPose=null,this.poseLerp=.22,this.isKeeper=r,this.heightScale=e.height/1.84;const s=e.build,a=e.keeperPersona,o=e.playerPersona;this.root.add(this.scaleGroup),this.scaleGroup.scale.set(this.heightScale,this.heightScale,this.heightScale);const l=new be({color:e.skin,roughness:a==="tuoheya"?.88:.62,metalness:.02}),c=ib(t,i,r),u=new be({map:c,roughness:.78,metalness:.04}),f=new be({color:t.sleeveColor??(r&&!a?t.secondary:t.primary),roughness:.88}),d=new be({color:t.secondary,roughness:.9}),p=new be({color:t.shorts,roughness:.9}),v=new be({color:t.socks,roughness:.92}),_=new be({color:"#f8fafc",roughness:.6}),m=new be({color:e.hair,roughness:.88,metalness:0});this.pelvis.position.set(0,this.baseHipY,0),this.pelvis.rotation.order="YXZ",this.scaleGroup.add(this.pelvis);const h=pn([{y:-.095,rx:.166*s,rz:.112*s,oz:-.008},{y:-.03,rx:.166*s,rz:.114*s,oz:-.006},{y:.02,rx:.146*s,rz:.098*s,oz:-.002},{y:.06,rx:.126*s,rz:.082*s,oz:0}]),g=new W(h,p);if(g.castShadow=!0,g.receiveShadow=!0,this.pelvis.add(g),o==="siqiaotun")for(const L of[-1,1]){const P=new W(new Ce(.066*s,14,12),p);P.position.set(L*.056*s,-.036,-.088*s),P.scale.set(1.06,1.02,1.18),P.castShadow=!0,this.pelvis.add(P)}const y=pn([{y:.005,rx:.162*s,rz:.118*s,oz:-.005},{y:.072,rx:.152*s,rz:.11*s,oz:-.002}],24,2,1,.002),S=new W(y,d);S.castShadow=!0,this.pelvis.add(S),this.spine.position.set(0,.085,0),this.spine.rotation.order="YXZ",this.pelvis.add(this.spine);const b=pn([{y:-.062,rx:.162*s,rz:.118*s,oz:-.004},{y:.045,rx:.15*s,rz:.108*s,oz:.002},{y:.18,rx:.17*s,rz:.118*s,oz:.01},{y:.31,rx:.194*s,rz:.126*s,oz:.012},{y:.41,rx:.214*s,rz:.114*s,oz:.004},{y:.468,rx:.125*s,rz:.085*s,oz:-.002},{y:.482,rx:.068,rz:.065,oz:0}],24,3,1,.003),T=new W(b,u);if(T.castShadow=!0,T.receiveShadow=!0,this.spine.add(T),o==="morenha"){const L=new Wi({color:"#f472b6",transparent:!0,opacity:.46,side:On});for(let P=0;P<5;P++){const I=P/4-.5,R=new W(new wn(.055,.24-Math.abs(I)*.08,8),L);R.position.set(I*.36*s,.42-Math.abs(I)*.06,-.125),R.rotation.z=-I*.48,R.rotation.x=-.18,this.spine.add(R)}}else if(o==="pabupaleng"){const L=new be({color:"#f0f9ff",roughness:.35}),P=new be({color:"#bae6fd",emissive:"#38bdf8",emissiveIntensity:.28,roughness:.18});for(const I of[-1,1]){const R=new W(new Ce(.048,12,10),L);R.position.set(I*.185*s,.448,.01),R.scale.set(1.25,.42,1.05),this.spine.add(R);for(let O=-1;O<=1;O++){const X=new W(new wn(.008,.036-Math.abs(O)*.008,6),P);X.position.set(I*(.185+O*.016)*s,.422,.032),X.rotation.x=Math.PI,this.spine.add(X)}}}else if(o==="edashuai"){const L=new be({color:"#1e293b",roughness:.7}),P=new be({color:"#eab308",roughness:.32,metalness:.45}),I=new be({color:"#111827",roughness:.45}),R=new be({color:"#38bdf8",emissive:"#0284c7",emissiveIntensity:.35,roughness:.12,metalness:.6});for(const K of[-1,1]){const re=new W(new et(.008,.18,.006),L);re.position.set(K*.036,.365,.118*s),re.rotation.z=K*-.14,re.rotation.x=-.18,this.spine.add(re)}const O=new nt;O.position.set(0,.272,.136*s);const X=new W(new et(.088,.056,.034),P);X.castShadow=!0,O.add(X);const D=new W(new et(.04,.016,.028),I);D.position.set(0,.034,-.002),O.add(D);const k=new W(new ot(.007,.007,.01,10),P);k.position.set(-.028,.032,.004),O.add(k);const U=new W(new ot(.021,.023,.028,16),I);U.rotation.x=Math.PI*.5,U.position.set(.004,-.002,.024),O.add(U);const G=new W(new ot(.016,.016,.03,16),R);G.rotation.x=Math.PI*.5,G.position.set(.004,-.002,.026),O.add(G),this.spine.add(O)}else if(o==="weixiaoshu"){const L=new be({color:"#facc15",roughness:.48}),P=new W(new ot(.024,.024,.006,14),L);P.rotation.x=Math.PI*.46,P.rotation.z=.25,P.scale.set(1.18,1,.88),P.position.set(.056*s,.338,.128*s),this.spine.add(P)}else if(o==="xiehuashao"){const L=new Wi({color:"#38bdf8",transparent:!0,opacity:.5}),P=new W(new Cc(.19*s,.005,8,28),L);P.rotation.x=Math.PI*.44,P.rotation.y=.18,P.position.set(0,.08,0),this.spine.add(P)}else if(o==="mushandian"){const L=new be({color:"#fde047",emissive:"#facc15",emissiveIntensity:.85,roughness:.2});for(const P of[-1,1])for(let I=0;I<2;I++){const R=new W(new wn(.012,.075,4),L);R.position.set(P*(.225+I*.018)*s,.36-I*.14,-.02+I*.03),R.rotation.z=P*-.55,this.spine.add(R);const O=new W(new wn(.01,.065,4),L);O.position.set(P*(.235+I*.018)*s,.32-I*.14,-.015+I*.03),O.rotation.z=Math.PI+P*-.42,this.spine.add(O)}}else if(o==="ligugu"){const L=new be({color:"#f8fafc",roughness:.55}),P=new be({color:"#cbd5e1",roughness:.6}),I=new be({color:"#f97316",roughness:.4}),R=new be({color:"#0f172a",roughness:.2}),O=new nt;O.position.set(.162*s,.468,.022),O.rotation.y=-.18;const X=new W(new Ce(.032,12,10),L);X.scale.set(.88,.92,1.32),X.castShadow=!0,O.add(X);const D=new W(new Ce(.021,12,10),L);D.position.set(0,.032,.024),D.castShadow=!0,O.add(D);for(const G of[-1,1]){const K=new W(new Ce(.022,10,8),P);K.position.set(G*.024,.002,-.004),K.scale.set(.42,.78,1.25),O.add(K);const re=new W(new Ce(.0042,6,6),R);re.position.set(G*.015,.036,.036),O.add(re)}const k=new W(new wn(.0065,.018,8),I);k.rotation.x=Math.PI*.48,k.position.set(0,.03,.048),O.add(k);const U=new W(new et(.028,.006,.034),P);U.position.set(0,-.006,-.044),U.rotation.x=-.24,O.add(U),this.spine.add(O)}else if(o==="antuoluo"){const L=new Wi({color:"#f8fafc",transparent:!0,opacity:.48}),P=[.09,.21,.33],I=[.205,.245,.225];for(let R=0;R<3;R++){const O=new W(new Cc(I[R]*s,.0065,8,32,Math.PI*1.65),L);O.rotation.x=Math.PI*.5+(R-1)*.08,O.rotation.z=R*2.1,O.position.set(0,P[R],0),this.spine.add(O)}}if(this.neck.position.set(0,.488,0),this.spine.add(this.neck),a==="tuoheya"){const L=pn([{y:-.018,rx:.072,rz:.072},{y:.025,rx:.066,rz:.068,oz:.004},{y:.05,rx:.064,rz:.065,oz:.008},{y:.075,rx:.062,rz:.063,oz:.011},{y:.1,rx:.058,rz:.06,oz:.014}],18,2),P=new W(L,l);P.castShadow=!0,this.neck.add(P),this.head.position.set(0,.085,.014),this.head.rotation.order="YXZ",this.neck.add(this.head),this.head.add(ab())}else{const L=new be({map:rb(e),roughness:o==="mulaohan"?.58:.7}),P=pn([{y:-.015,rx:.062,rz:.062},{y:.045,rx:.054,rz:.055,oz:.004},{y:.095,rx:.052,rz:.052,oz:.006}],16,2),I=new W(P,l);I.castShadow=!0,this.neck.add(I),this.head.position.set(0,.082,.004),this.head.scale.set(.88,.9,.88),this.head.rotation.order="YXZ",this.neck.add(this.head);const R=o==="mahangmu",O=R?pn([{y:-.018,rx:.076,rz:.076,oz:.004},{y:.006,rx:.101,rz:.098,oz:.002},{y:.095,rx:.102,rz:.099,oz:0},{y:.192,rx:.101,rz:.098,oz:-.002},{y:.214,rx:.072,rz:.072,oz:-.002}],28,2,.38):pn([{y:-.022,rx:.044,rz:.052,oz:.016},{y:.018,rx:.068,rz:.082,oz:.01},{y:.075,rx:.084,rz:.096,oz:.002},{y:.132,rx:.089,rz:.102,oz:-.004},{y:.19,rx:.084,rz:.096,oz:-.008},{y:.218,rx:.042,rz:.048,oz:-.008},{y:.228,rx:0,rz:0,oz:-.008}],24,2),X=new W(O,L);if(X.castShadow=!0,this.head.add(X),a==="laya"){const U=new W(new Ce(.022,12,10),l);U.position.set(0,.08,.105),U.scale.set(1.32,.96,1.12),this.head.add(U);for(const G of[-1,1]){const K=new W(new Ce(.012,8,8),l);K.position.set(G*.017,.074,.098),this.head.add(K)}}else{const U=new W(new wn(.015,.042,8),l);U.position.set(0,.086,R?.104:.098),U.rotation.x=Math.PI*.42,this.head.add(U)}const D=a==="dingneisi"?1.25:1,k=R?.105:.088;if(o!=="weizhencha")for(const U of[-1,1]){const G=new W(new Ce(.02*D,8,8),l);G.scale.set(.45,1.15,.72),G.position.set(U*k,.095,-.006),this.head.add(G)}this.head.add(sb(e,m))}const x=r&&(!a||a==="aozhezhe"),M=!r&&o==="saxiaojiao",N=(L,P,I,R,O)=>{P.position.set(L*.205*s,.415,0),P.rotation.order="ZXY",this.spine.add(P);const X=new W(new Ce(.062*s,14,12),f);X.scale.set(.95,1.1,.95),X.position.set(0,-.01,0),X.castShadow=!0,P.add(X);const D=x?.285:.145,k=pn([{y:-D,rx:(x?.046:.056)*s,rz:(x?.046:.056)*s},{y:-D*.45,rx:.059*s,rz:.059*s},{y:.01,rx:.062*s,rz:.062*s}],16,2,1,.0015),U=new W(k,f);if(U.castShadow=!0,P.add(U),!x){const Te=pn([{y:-.295,rx:.041*s,rz:.042*s},{y:-.21,rx:.049*s,rz:.051*s,oz:.003},{y:-.13,rx:.051*s,rz:.052*s}],14,2),j=new W(Te,l);j.castShadow=!0,P.add(j)}I.position.set(0,-.295,0),I.rotation.order="XYZ",P.add(I);const G=new W(new Ce(.041*s,12,10),x?f:l);I.add(G);const K=pn([{y:-.26,rx:.031*s,rz:.033*s},{y:-.15,rx:.041*s,rz:.042*s},{y:-.04,rx:.044*s,rz:.045*s},{y:0,rx:.041*s,rz:.041*s}],14,2),re=new W(K,x?f:l);re.castShadow=!0,I.add(re),R.position.set(0,-.26,0),I.add(R),R.add(lb(L,r,l,t,M)),O.position.set(0,r?-.16:-.165,.01),R.add(O)};N(1,this.shoulderL,this.elbowL,this.wristL,this.handTipL),N(-1,this.shoulderR,this.elbowR,this.wristR,this.handTipR);const A=(L,P,I,R)=>{P.position.set(L*.102*s,0,0),P.rotation.order="ZXY",this.pelvis.add(P);const O=pn([{y:-.235,rx:.088*s,rz:.092*s,oz:.004},{y:-.11,rx:.092*s,rz:.096*s},{y:.02,rx:.088*s,rz:.092*s}],16,2,1,.0025),X=new W(O,p);X.castShadow=!0,P.add(X);const D=pn([{y:-.44,rx:.058*s,rz:.062*s},{y:-.34,rx:.068*s,rz:.074*s,oz:.005},{y:-.21,rx:.078*s,rz:.082*s,oz:.006}],16,2),k=new W(D,l);k.castShadow=!0,P.add(k),I.position.set(0,-.44,0),I.rotation.order="XYZ",P.add(I);const U=new W(new Ce(.056*s,14,12),l);U.scale.set(.96,1.05,1.04),U.castShadow=!0,I.add(U);const G=pn([{y:-.11,rx:.058*s,rz:.064*s,oz:-.006},{y:-.04,rx:.055*s,rz:.058*s},{y:0,rx:.055*s,rz:.058*s}],14,2),K=new W(G,l);K.castShadow=!0,I.add(K);const re=pn([{y:-.42,rx:.039*s,rz:.043*s},{y:-.31,rx:.046*s,rz:.051*s,oz:-.004},{y:-.19,rx:.061*s,rz:.068*s,oz:-.009},{y:-.1,rx:.06*s,rz:.064*s,oz:-.005}],16,2),Te=new W(re,v);Te.castShadow=!0,I.add(Te);const j=new W(new ot(.062*s,.061*s,.028,16),_);j.position.set(0,-.105,-.005),I.add(j);const le=new W(new ot(.042*s,.043*s,.05,14),_);le.position.set(0,-.39,0),I.add(le),R.position.set(0,-.42,0),R.rotation.order="XYZ",I.add(R),R.add(ob(e.bootColor,r))};A(1,this.hipL,this.kneeL,this.ankleL),A(-1,this.hipR,this.kneeR,this.ankleR),this.head.traverse(L=>{var O;const P=L;if(!P.isMesh)return;const I=P.geometry;I!=null&&I.boundingSphere||I.computeBoundingSphere();const R=((O=I.boundingSphere)==null?void 0:O.radius)??0;R>=.055&&R<=.14&&P.material===m?P.scale.multiplyScalar(.86):R>.14&&P.material===m&&P.scale.multiplyScalar(.9)})}applyPose(e,t=!1){const i=t||!this.smoothPose?1:this.poseLerp;this.smoothPose||(this.smoothPose=tu());const r=this.smoothPose,s=(a,o)=>a+(o-a)*i;r.pelvisOffset.x=s(r.pelvisOffset.x,e.pelvisOffset.x),r.pelvisOffset.y=s(r.pelvisOffset.y,e.pelvisOffset.y),r.pelvisOffset.z=s(r.pelvisOffset.z,e.pelvisOffset.z),r.pelvisRot.pitch=s(r.pelvisRot.pitch,e.pelvisRot.pitch),r.pelvisRot.yaw=s(r.pelvisRot.yaw,e.pelvisRot.yaw),r.pelvisRot.roll=s(r.pelvisRot.roll,e.pelvisRot.roll),r.spine.lean=s(r.spine.lean,e.spine.lean),r.spine.twist=s(r.spine.twist,e.spine.twist),r.spine.side=s(r.spine.side,e.spine.side),r.head.pitch=s(r.head.pitch,e.head.pitch),r.head.yaw=s(r.head.yaw,e.head.yaw),r.head.roll=s(r.head.roll,e.head.roll);for(const a of["armL","armR"]){const o=e[a],l=r[a];l.flex=s(l.flex,o.flex),l.abduct=s(l.abduct,o.abduct),l.twist=s(l.twist,o.twist),l.elbow=s(l.elbow,o.elbow),l.wristPitch=s(l.wristPitch??0,o.wristPitch??0)}for(const a of["legL","legR"]){const o=e[a],l=r[a];l.flex=s(l.flex,o.flex),l.abduct=s(l.abduct,o.abduct),l.twist=s(l.twist,o.twist),l.knee=s(l.knee,o.knee),l.ankle=s(l.ankle,o.ankle)}this.pelvis.position.set(r.pelvisOffset.x,this.baseHipY+r.pelvisOffset.y,r.pelvisOffset.z),this.pelvis.rotation.set(r.pelvisRot.pitch,r.pelvisRot.yaw,-r.pelvisRot.roll),this.spine.rotation.set(r.spine.lean,r.spine.twist,-r.spine.side),this.head.rotation.set(r.head.pitch,r.head.yaw,-r.head.roll),V0(1,r.armL,this.shoulderL,this.elbowL,this.wristL),V0(-1,r.armR,this.shoulderR,this.elbowR,this.wristR),W0(1,r.legL,this.hipL,this.kneeL,this.ankleL),W0(-1,r.legR,this.hipR,this.kneeR,this.ankleR)}getKeeperCollisionCapsules(){this.root.updateMatrixWorld(!0);const e=this.heightScale,t=(i,r,s,a)=>(i.getWorldPosition(this.tmpA),r.getWorldPosition(this.tmpB),{a:this.tmpA.clone(),b:this.tmpB.clone(),radius:s*e,part:a});return[t(this.wristL,this.handTipL,.135,"gloveL"),t(this.wristR,this.handTipR,.135,"gloveR"),t(this.elbowL,this.wristL,.088,"armL"),t(this.elbowR,this.wristR,.088,"armR"),t(this.shoulderL,this.elbowL,.088,"armL"),t(this.shoulderR,this.elbowR,.088,"armR"),t(this.pelvis,this.neck,.185,"torso"),t(this.neck,this.head,.115,"torso"),t(this.hipL,this.kneeL,.1,"leg"),t(this.hipR,this.kneeR,.1,"leg"),t(this.kneeL,this.ankleL,.085,"leg"),t(this.kneeR,this.ankleR,.085,"leg")]}dispose(){if(this.disposed)return;this.disposed=!0;const e=new Set,t=new Set,i=new Set;this.root.traverse(r=>{if(r instanceof W)if(e.add(r.geometry),Array.isArray(r.material))for(const s of r.material)t.add(s);else t.add(r.material)});for(const r of t)for(const s of Object.values(r))s instanceof an&&i.add(s);for(const r of i)r.dispose();for(const r of t)r.dispose();for(const r of e)r.dispose()}}function tu(){return{pelvisOffset:{x:0,y:0,z:0},pelvisRot:{pitch:0,yaw:0,roll:0},spine:{lean:.05,side:0,twist:0},head:{pitch:0,yaw:0,roll:0},armL:{flex:.06,abduct:.14,twist:.1,elbow:.22},armR:{flex:.06,abduct:.14,twist:.1,elbow:.22},legL:{flex:.04,abduct:.05,twist:.04,knee:.08,ankle:.02},legR:{flex:.04,abduct:.05,twist:.04,knee:.08,ankle:.02}}}function Pi(n,e,t){return Math.max(e,Math.min(t,n))}function ie(n,e,t){return n+(e-n)*t}function Mt(n,e,t){const i=Pi((t-n)/Math.max(1e-4,e-n),0,1);return i*i*(3-2*i)}function Dc(n,e,t,i,r,s){n.flex=e,n.abduct=t,n.twist=i,n.knee=r,n.ankle=s}function Nc(n,e,t,i,r){n.flex=e,n.abduct=t,n.twist=i,n.elbow=r}const Us=new rt,Xr=new rt,X0=new Ui,cb=new z,ub=[-1,1],hb=[-.026,.026],fb=[-.035,.045,.12];function Ic(n,e){let t=1/0;for(const i of ub){const r=i>0?n.legL:n.legR;Us.makeRotationFromEuler(X0.set(n.pelvisRot.pitch,n.pelvisRot.yaw,-n.pelvisRot.roll,"XYZ")),Us.setPosition(0,.959,0),Xr.makeRotationFromEuler(X0.set(-r.flex,i*r.twist,i*r.abduct,"ZXY")),Xr.setPosition(i*.102*e,0,0),Us.multiply(Xr),Xr.makeRotationX(r.knee).setPosition(0,-.44,0),Us.multiply(Xr),Xr.makeRotationX(-r.ankle).setPosition(0,-.42,0),Us.multiply(Xr);for(const s of hb)for(const a of fb)t=Math.min(t,cb.set(s,-.099,a).applyMatrix4(Us).y)}return-t}function db(n){const e=tu(),t=n.shooter.foot==="R"?1:-1,i=t>0?e.legR:e.legL,r=t>0?e.legL:e.legR,s=t>0?e.armR:e.armL,a=t>0?e.armL:e.armR,o=n.shooter.runupStyle==="curved"?1.2:1,l=n.shotStyle==="power",c=n.shotStyle==="panenka",u=n.shotStyle==="stutter",f=u||n.shooter.runupStyle==="stutter",d=n.mode==="runup"||n.mode==="follow",p=n.mode==="follow"?1:d?Pi(n.runupProgress,0,1):0,v=Mt(0,.12,p),_=Pi(p/.84,0,1),m=f?_-.065*Math.sin(_*Math.PI*2):_,h=Mt(0,1,m),g=1-h,y=-.23*t,S=11.07+(c?.346:l?.536:.492)*n.shooter.appearance.height/1.84,b=-1.25*t*o,T=-.66*t*o,x=14.45,M=12.85;let N=g*g*b+2*g*h*T+h*h*y,A=g*g*x+2*g*h*M+h*h*S;const L=2*g*(T-b)+2*h*(y-T),P=2*g*(M-x)+2*h*(S-M),I=Mt(.66,.84,p),R=Mt(.86,1,p);let O=Math.atan2(L,P);O<0&&(O+=Math.PI*2),O=ie(O,Math.PI,I);const X=Math.sin(n.time*1.35),D=Math.sin(n.time*.72),k=Math.sin(n.time*.55+.4),U=h*Math.PI*4.2,G=Math.sin(U),K=v*(1-I),re=u?Math.sin(Math.PI*Mt(.57,.73,p))*(1-I):0,Te=c?.3:l?.48:.42,j=c?.28:.2,le=c||l?.05:.22,ce=l?-.22:c?.14:.04,we=n.overcharged?.05:l?.2:.14,_e=l?-.55:-.48,Be=l?1.4:1.22,ct=1-v;if(e.pelvisOffset.x=(D*.014+k*.006)*ct,e.pelvisOffset.y=X*.01*ct+re*.05,e.pelvisOffset.z=Math.sin(n.time*.6)*.004*ct,e.pelvisRot.yaw=ie(-t*.03+G*t*.05*K,ie(-t*.12,t*.1,R),I),e.pelvisRot.roll=t*.055*I+D*.012*ct,e.pelvisRot.pitch=X*.012*ct,e.spine.lean=ie(.1+X*.012,.18,v),e.spine.lean=ie(e.spine.lean,we,R),e.spine.side=ie(k*.02,t*.035,I),e.spine.twist=ie(-G*t*.11*K+D*.03*ct,ie(t*.14,-t*.12,R),I),e.head.pitch=ie(.06+Math.sin(n.time*.55)*.04*ct,.22,I),e.head.yaw=-e.spine.twist*.55,e.head.roll=D*.02*ct,Dc(i,ie(ie(-.05+G*.34,_e,I),Te,R),ie(.06,.05,I),ie(.03,le,R),ie(ie(.2+Math.max(0,-G)*.55*v,Be,I),j,R),ie(.05,ce,R)),Dc(r,ie(.1-G*.34*v,.15,I),ie(.06,.09,I),.025,ie(.22+Math.max(0,G)*.55*v,.3,I),ie(.08,.14,I)),Nc(s,ie(.1-G*.28*K,-.22,I),ie(.12,.28,I),.06,ie(.4+v*.28,.62,I)),Nc(a,ie(.14+G*.28*K,.22,I),ie(.14,.7,I),-.08,ie(.42+v*.25,.5,I)),n.mode==="follow"){const Ne=Math.max(0,n.postImpactTime),st=Mt(0,.18,Ne),Fe=Mt(.2,.82,Ne),Xe=st*(1-Fe),kt=Mt(.16,.8,Ne);N+=t*.08*kt,A-=(c?.28:l?.65:.48)*kt,e.pelvisOffset.y+=Math.sin(kt*Math.PI)*.025,e.pelvisRot.roll*=1-Fe,e.pelvisRot.yaw=ie(e.pelvisRot.yaw,0,Fe),e.spine.lean=ie(we,.1,Fe),e.spine.side*=1-Fe,e.spine.twist*=1-Fe,e.head.pitch=ie(e.head.pitch,-.04,Mt(.08,.4,Ne)),e.head.yaw*=1-Fe,i.flex=ie(Te+Xe*(c?.26:.62),.1,Fe),i.knee=ie(j+Xe*.24,.24,Fe),i.twist=ie(le,.03,Fe),i.ankle=ie(ce,.1,Fe),r.flex=ie(.17-Xe*.18,-.04,Fe),r.knee=ie(.34,.23,Fe),r.ankle=ie(.17,.09,Fe),s.flex=ie(s.flex,.12,Fe),s.abduct=ie(s.abduct,.16,Fe),s.elbow=ie(s.elbow,.42,Fe),a.flex=ie(a.flex,.14,Fe),a.abduct=ie(a.abduct,.18,Fe),a.elbow=ie(a.elbow,.44,Fe);const ut=n.outcome?Mt(0,.45,n.outcomeTime??0)*Fe:0;if(ut>0){const At=n.outcome==="goal",gt=Math.sin((n.outcomeTime??0)*7)*.07;e.spine.lean=ie(e.spine.lean,At?-.07:.3,ut),e.head.pitch=ie(e.head.pitch,At?-.15:.35,ut),s.flex=ie(s.flex,At?.3+gt:.18,ut),a.flex=ie(a.flex,At?.3-gt:.18,ut),s.abduct=ie(s.abduct,At?2.35:.08,ut),a.abduct=ie(a.abduct,At?2.35:.08,ut),s.elbow=ie(s.elbow,At?.55:.22,ut),a.elbow=ie(a.elbow,At?.55:.22,ut)}}return e.pelvisOffset.y+=Ic(e,n.shooter.appearance.build),{pos:new z(N,0,A),yaw:O,pose:e,stepIndex:Math.min(6,Math.floor(h*6))}}function pb(n,e,t){const i=Pi(Math.abs(e.shuffleSpeed)/2.2,0,1)*t,r=Math.sin(e.shufflePhase),s=Pi(Math.abs(e.preDiveX)+Math.abs(e.preDiveY),0,1)*t;n.pelvisOffset.y=Math.sin(e.time*3.8)*.003*t,n.pelvisRot.roll=(e.preDiveX*.035-Pi(e.shuffleSpeed*.025,-.06,.06))*t,n.spine.lean=.34+s*.04,n.spine.side=e.preDiveX*.04*t,n.head.pitch=-.16,n.head.yaw=Pi(-e.xPos*.07,-.2,.2)*t,Dc(n.legL,.34+Math.max(0,r)*i*.13,.22+r*i*.07,.04,.67+Math.max(0,r)*i*.22+s*.06,.28),Dc(n.legR,.34+Math.max(0,-r)*i*.13,.22-r*i*.07,.04,.67+Math.max(0,-r)*i*.22+s*.06,.28),n.pelvisOffset.y+=Ic(n,e.keeper.appearance.build);const a=e.preDiveY*.08*t;Nc(n.armL,.58+a,.4,-.12,1.02),Nc(n.armR,.58+a,.4,-.12,1.02)}function mb(n){const e=tu(),t=n.mode==="ready"?0:Math.max(0,n.diveTime),i=Mt(0,.18,t);pb(e,n,1-i);let r=n.mode==="ready"?n.xPos:n.diveStartX,s=.14,a=!1,o=1;if(n.mode==="diving"){const c=Math.sign(n.diveDirX),u=Math.sign(n.diveDirY),f=n.keeper.appearance.height/1.84,d=Pi(.9+(n.keeper.reach-75)*.006,.8,1.1)*(n.explosiveBoost?1.07:1),p=Math.max(0,t-.1),v=Math.sin(Math.PI*Mt(0,.18,t))*.035;if(e.pelvisOffset.y-=v,c!==0){const _=(u>0?4.1:u<0?3.85:4.35)*d,m=(u>0?3:u<0?.35:1.7)*d,h=.89*f,g=.24*f,y=(m+Math.sqrt(m*m+19.62*(h-g)))/9.81,S=Math.min(p,y),b=Math.max(0,p-y),T=_*S+_*.35*(1-Math.exp(-b*5))/5,x=Math.max(.15,3.5-c*n.diveStartX),M=x*.8,N=T<=M?T:M+x*.2*(1-Math.exp(-(T-M)/(x*.2)));r+=c*N*Mt(0,.12,p),s+=.24*Mt(0,.4,p);const A=Mt(.08,.3,t),L=Mt(y-.025,y+.18,p),P=Mt(y+.38,y+1.2,p);o=P;const I=Math.max(g,h+m*S-4.905*S*S);e.pelvisOffset.y=ie(e.pelvisOffset.y,I/f-.959,i),e.pelvisOffset.y=ie(e.pelvisOffset.y,-.067,P),e.pelvisRot.roll=ie(e.pelvisRot.roll,c*ie(u>0?1.26:1.42,1.38,L),A)*(1-P),e.pelvisRot.yaw=-c*.14*L*(1-P),e.spine.lean=ie(e.spine.lean,ie(-.06,.24,L),A),e.spine.lean=ie(e.spine.lean,.3,P),e.head.roll=-c*.08*A*(1-P);const R=c>0?e.armL:e.armR,O=c>0?e.armR:e.armL,X=c>0?e.legL:e.legR,D=c>0?e.legR:e.legL,k=Pi((n.ballPos.y-I)*.12,-.12,.15);R.flex=ie(R.flex,ie(.22,.65,L),A),R.abduct=ie(R.abduct,ie(2.64+k,.9,L),A),R.elbow=ie(R.elbow,ie(.12,1.12,L),A),O.flex=ie(O.flex,ie(.32,.8,L),A),O.abduct=ie(O.abduct,ie(2.4+k,.55,L),A),O.elbow=ie(O.elbow,ie(.2,1.2,L),A),X.flex=ie(X.flex,ie(-.08,.42,L),A),X.knee=ie(X.knee,ie(.16,.9,L),A),X.ankle=ie(X.ankle,-.16,A*(1-L)),D.flex=ie(D.flex,.48,A),D.knee=ie(D.knee,.95,A);const U=Math.sin(P*Math.PI);X.flex=ie(X.flex,.34,P)+U*.18,X.knee=ie(X.knee,.67,P)+U*.2,D.flex=ie(D.flex,.34,P),D.knee=ie(D.knee,.67,P),X.ankle=ie(X.ankle,.28,P),R.flex=ie(R.flex,.58,P),R.abduct=ie(R.abduct,.4,P),R.elbow=ie(R.elbow,1.02,P),O.flex=ie(O.flex,.58,P),O.abduct=ie(O.abduct,.4,P),O.elbow=ie(O.elbow,1.02,P),e.pelvisOffset.y=ie(e.pelvisOffset.y,Ic(e,n.keeper.appearance.build),P),a=p>=y&&p<y+.035}else if(u>0){const _=3.15*d,m=2*_/9.81,h=Math.min(p,m),g=Math.max(0,_*h-4.905*h*h),y=Mt(.05,.24,p)*(1-Mt(m-.14,m+.25,p)),S=Math.sin(Math.PI*Mt(m,m+.32,p));o=Mt(m,m+.32,p),e.pelvisOffset.y+=g/f-S*.08,e.spine.lean=ie(e.spine.lean,.02,y),e.armL.abduct=e.armR.abduct=ie(.4,2.7,y),e.armL.elbow=e.armR.elbow=ie(1.02,.14,y),e.legL.knee+=S*.22-y*.35,e.legR.knee+=S*.22-y*.35,a=p>=m&&p<m+.035}else{const _=Mt(0,.24,t)*(1-Mt(.65,1.3,t));if(o=Mt(.65,1.3,t),u<0)e.pelvisOffset.y-=_*.28,e.legL.knee=ie(e.legL.knee,1.4,_),e.legR.abduct=ie(e.legR.abduct,.65,_),e.legR.knee=ie(e.legR.knee,.4,_),e.armL.abduct=e.armR.abduct=ie(.4,.85,_);else{const m=Pi(.7+(n.ballPos.y-1.15)*.55,.35,1.65);e.armL.flex=e.armR.flex=ie(.58,m,_)}e.armL.elbow=e.armR.elbow=ie(1.02,.35,_),s+=_*.2,e.pelvisOffset.y=Ic(e,n.keeper.appearance.build),a=u<0&&t>=.24&&t<.275}}const l=n.outcome?Mt(0,.45,n.outcomeTime??0)*o:0;if(l>0){const c=n.outcome==="goal",u=!c&&n.keeperSaved,f=Math.sin((n.outcomeTime??0)*8)*.08;e.spine.lean=ie(e.spine.lean,c?.32:-.04,l),e.head.pitch=ie(e.head.pitch,c?.28:-.12,l),e.armL.flex=ie(e.armL.flex,u?.9+f:.14,l),e.armR.flex=ie(e.armR.flex,u?.9-f:.14,l),e.armL.abduct=ie(e.armL.abduct,u?1.45:.12,l),e.armR.abduct=ie(e.armR.abduct,u?1.45:.12,l),e.armL.elbow=ie(e.armL.elbow,u?1.2:.28,l),e.armR.elbow=ie(e.armR.elbow,u?1.2:.28,l)}return{pos:new z(r,0,s),yaw:0,pose:e,justLanded:a}}const Fs=7.32,mn=Fs/2,_t=2.44,Ei=.06,Kr=.95,jr=2.15,St=.11,Zn=11;function jf(n){const e=Math.max(0,Math.min(1,n/_t));return-(jr+(Kr-jr)*e)}function q0(n,e,t,i){const r=t.x-e.x,s=t.y-e.y,a=t.z-e.z,o=r*r+s*s+a*a;if(o<1e-8)return i.copy(e);const l=Math.max(0,Math.min(1,((n.x-e.x)*r+(n.y-e.y)*s+(n.z-e.z)*a)/o));return i.set(e.x+r*l,e.y+s*l,e.z+a*l)}function ph(n,e,t){const i=(n+1)*(e+1),r=new Float32Array(i*3),s=new Float32Array(i*3),a=new Float32Array(i*3),o=new Uint8Array(i);for(let p=0;p<=e;p++){const v=p/e;for(let _=0;_<=n;_++){const m=_/n,h=p*(n+1)+_,[g,y,S,b]=t(m,v);r[h*3]=g,r[h*3+1]=y,r[h*3+2]=S,s[h*3]=g,s[h*3+1]=y,s[h*3+2]=S,o[h]=b?1:0}}const l=[];for(let p=0;p<=e;p++)for(let v=0;v<=n;v++){const _=p*(n+1)+v;v<n&&l.push(_,_+1),p<e&&l.push(_,_+n+1)}const c=new Uint16Array(l),u=new Float32Array(c.length*3),f=new Ot;f.setAttribute("position",new In(u,3));const d={cols:n,rows:e,rest:r,pos:s,vel:a,pinned:o,lineGeo:f,linePositions:u,edgePairs:c};return Zf(d),d}function Zf(n){const{edgePairs:e,pos:t,linePositions:i,lineGeo:r}=n;for(let s=0;s<e.length;s++){const a=e[s];i[s*3]=t[a*3],i[s*3+1]=t[a*3+1],i[s*3+2]=t[a*3+2]}r.getAttribute("position").needsUpdate=!0}class gb{constructor(){this.group=new nt,this.panels=[],this.postSegments=[{a:new z(-mn,0,0),b:new z(-mn,_t,0),radius:Ei},{a:new z(mn,0,0),b:new z(mn,_t,0),radius:Ei},{a:new z(-mn,_t,0),b:new z(mn,_t,0),radius:Ei}];const e=new be({color:"#f8fafc",roughness:.24,metalness:.25}),t=new be({color:"#1e293b",roughness:.5,metalness:.55}),i=new ot(Ei,Ei,_t,20);for(const c of[-mn,mn]){const u=new W(i,e);u.position.set(c,_t/2,0),u.castShadow=!0,u.receiveShadow=!0,this.group.add(u);const f=new W(new Ce(Ei,16,12),e);f.position.set(c,_t,0),f.castShadow=!0,this.group.add(f);const d=new W(new ot(.024,.024,Kr,10),t);d.rotation.x=Math.PI/2,d.position.set(c,_t-.02,-Kr/2),this.group.add(d);const p=Math.hypot(_t,jr-Kr),v=new W(new ot(.024,.024,p,10),t),_=Math.atan2(jr-Kr,_t);v.position.set(c,_t/2,-3.0999999999999996/2),v.rotation.x=_,this.group.add(v);const m=new W(new ot(.026,.026,jr,10),t);m.rotation.x=Math.PI/2,m.position.set(c,.02,-jr/2),this.group.add(m)}const r=new ot(Ei,Ei,Fs,20);r.rotateZ(Math.PI/2);const s=new W(r,e);s.position.set(0,_t,0),s.castShadow=!0,s.receiveShadow=!0,this.group.add(s);const a=new W(new ot(.028,.028,Fs,12),t);a.rotation.z=Math.PI/2,a.position.set(0,.02,-jr),this.group.add(a);const o=new W(new ot(.016,.016,Fs,10),t);o.rotation.z=Math.PI/2,o.position.set(0,_t-.02,-Kr),this.group.add(o);const l=new z_({color:"#e2e8f0",transparent:!0,opacity:.44});this.panels.push(ph(44,16,(c,u)=>{const f=(c-.5)*Fs,d=u*_t,p=Math.sin(c*Math.PI)*Math.sin(u*Math.PI)*-.08,v=jf(d)+p;return[f,d,v,c===0||c===1||u===0||u===1]})),this.panels.push(ph(44,7,(c,u)=>{const f=(c-.5)*Fs,d=-u*Kr,p=Math.sin(c*Math.PI)*Math.sin(u*Math.PI)*-.05,v=_t+p;return[f,v,d,c===0||c===1||u===0||u===1]}));for(const c of[-1,1])this.panels.push(ph(14,16,(u,f)=>{const d=f*_t,p=jf(d),v=u*p,_=Math.sin(u*Math.PI)*Math.sin(f*Math.PI)*-c*.04;return[c*mn+_,d,v,u===0||u===1||f===0||f===1]}));for(const c of this.panels)this.group.add(new YS(c.lineGeo,l))}resetNet(){for(const e of this.panels)e.pos.set(e.rest),e.vel.fill(0),Zf(e)}applyBallImpulse(e,t,i=.72){const r=i*i;for(const s of this.panels){const a=s.pinned.length;for(let o=0;o<a;o++){if(s.pinned[o])continue;const l=s.pos[o*3]-e.x,c=s.pos[o*3+1]-e.y,u=s.pos[o*3+2]-e.z,f=l*l+c*c+u*u;if(f<r){const d=Math.pow(1-Math.sqrt(f)/i,1.5);s.vel[o*3]=s.vel[o*3]+t.x*d*.55,s.vel[o*3+1]=s.vel[o*3+1]+t.y*d*.55,s.vel[o*3+2]=s.vel[o*3+2]+t.z*d*.55}}}}step(e){const t=Math.min(.033,e),i=68,r=26,s=Math.exp(-5.4*t);for(const a of this.panels){const{cols:o,rows:l,pos:c,rest:u,vel:f,pinned:d}=a,p=o+1;let v=!1;for(let _=1;_<l;_++)for(let m=1;m<o;m++){const h=_*p+m;if(d[h])continue;const g=h*3,y=c[g],S=c[g+1],b=c[g+2];let T=(u[g]-y)*i,x=(u[g+1]-S)*i,M=(u[g+2]-b)*i;const N=h-1,A=h+1,L=h-p,P=h+p,I=(c[N*3]-u[N*3]+c[A*3]-u[A*3]+c[L*3]-u[L*3]+c[P*3]-u[P*3])*.25-(y-u[g]),R=(c[N*3+1]-u[N*3+1]+c[A*3+1]-u[A*3+1]+c[L*3+1]-u[L*3+1]+c[P*3+1]-u[P*3+1])*.25-(S-u[g+1]),O=(c[N*3+2]-u[N*3+2]+c[A*3+2]-u[A*3+2]+c[L*3+2]-u[L*3+2]+c[P*3+2]-u[P*3+2])*.25-(b-u[g+2]);T+=I*r*4,x+=R*r*4,M+=O*r*4;const X=(f[g]+T*t)*s,D=(f[g+1]+x*t)*s,k=(f[g+2]+M*t)*s;f[g]=X,f[g+1]=D,f[g+2]=k,c[g]=y+X*t,c[g+1]=Math.max(.01,S+D*t),c[g+2]=b+k*t,Math.abs(X)+Math.abs(D)+Math.abs(k)>.002&&(v=!0)}v&&Zf(a)}}}function vb(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const i=t.getContext("2d"),r=c=>(c+38)/76*1024,s=c=>(c+12)/64*1024;i.fillStyle="#1c6b36",i.fillRect(0,0,1024,1024);const a=5.5;for(let c=-12,u=0;c<52;c+=a,u++){const f=s(c),d=s(c+a);i.fillStyle=u%2===0?"rgba(150, 235, 130, 0.085)":"rgba(8, 35, 16, 0.085)",i.fillRect(0,f,1024,d-f)}for(let c=-38,u=0;c<38;c+=6.1,u++)u%2===0&&(i.fillStyle="rgba(255, 255, 255, 0.025)",i.fillRect(r(c),0,6.1/76*1024,1024));for(let c=0;c<24e3;c++){const u=Math.random()*1024,f=Math.random()*1024;i.fillStyle=Math.random()<.5?"rgba(10,32,14,0.13)":"rgba(180,250,150,0.08)",i.fillRect(u,f,1.5,2.2)}for(let c=0;c<85;c++){const u=(Math.random()-.5)*4.5,f=Math.random()*1.6-.2;i.fillStyle="rgba(68, 52, 32, 0.11)",i.beginPath(),i.ellipse(r(u),s(f),4+Math.random()*8,2+Math.random()*4,0,0,Math.PI*2),i.fill()}for(let c=0;c<45;c++){const u=(Math.random()-.5)*1.4,f=Zn+(Math.random()-.5)*1.4;i.fillStyle="rgba(68, 52, 32, 0.1)",i.beginPath(),i.ellipse(r(u),s(f),3+Math.random()*5,2+Math.random()*4,0,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(248, 250, 252, 0.9)",i.lineWidth=.13/76*1024,i.lineJoin="round",i.lineCap="round";const o=34;i.beginPath(),i.moveTo(r(-o),s(0)),i.lineTo(r(o),s(0)),i.moveTo(r(-o),s(0)),i.lineTo(r(-o),s(52)),i.moveTo(r(o),s(0)),i.lineTo(r(o),s(52)),i.stroke(),i.beginPath(),i.moveTo(r(-9.16),s(0)),i.lineTo(r(-9.16),s(5.5)),i.lineTo(r(9.16),s(5.5)),i.lineTo(r(9.16),s(0)),i.stroke(),i.beginPath(),i.moveTo(r(-20.16),s(0)),i.lineTo(r(-20.16),s(16.5)),i.lineTo(r(20.16),s(16.5)),i.lineTo(r(20.16),s(0)),i.stroke(),i.save(),i.beginPath(),i.rect(0,s(16.5),1024,1024-s(16.5)),i.clip(),i.beginPath(),i.ellipse(r(0),s(Zn),9.15/76*1024,9.15/64*1024,0,0,Math.PI*2),i.stroke(),i.restore(),i.fillStyle="rgba(255, 255, 255, 0.96)",i.beginPath(),i.ellipse(r(0),s(Zn),.14/76*1024,.14/64*1024,0,0,Math.PI*2),i.fill();const l=new xa(t);return l.colorSpace=Qt,l.anisotropy=8,l}function _b(){const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#f8fafc",e.fillRect(0,0,512,256),e.fillStyle="rgba(15, 23, 42, 0.04)";for(let s=0;s<256;s+=4)for(let a=s%8===0?0:2;a<512;a+=4)e.fillRect(a,s,1.5,1.5);const t=(s,a,o,l)=>{e.save(),e.translate(s,a),e.rotate(l),e.fillStyle="#0f172a",e.beginPath();for(let c=0;c<5;c++){const u=c*Math.PI*2/5-Math.PI/2,f=Math.cos(u)*o,d=Math.sin(u)*o;c===0?e.moveTo(f,d):e.lineTo(f,d)}e.closePath(),e.fill(),e.strokeStyle="#2563eb",e.lineWidth=3,e.stroke(),e.restore()},i=[[64,72,28],[192,68,28],[320,72,28],[448,68,28],[128,184,28],[256,188,28],[384,184,28],[0,188,26],[512,188,26],[256,18,24],[256,240,24]];for(const[s,a,o]of i)t(s,a,o,s*.02);e.strokeStyle="rgba(30, 41, 59, 0.35)",e.lineWidth=2;for(let s=0;s<i.length;s++)for(let a=s+1;a<i.length;a++)Math.hypot(i[s][0]-i[a][0],i[s][1]-i[a][1])<155&&(e.beginPath(),e.moveTo(i[s][0],i[s][1]),e.lineTo(i[a][0],i[a][1]),e.stroke());const r=new xa(n);return r.colorSpace=Qt,r.anisotropy=4,r}function xb(){const n=document.createElement("canvas");n.width=1024,n.height=64;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,1024,0);t.addColorStop(0,"#08142c"),t.addColorStop(.5,"#0f2854"),t.addColorStop(1,"#08142c"),e.fillStyle=t,e.fillRect(0,0,1024,64),e.fillStyle="#38bdf8",e.fillRect(0,0,1024,4),e.fillStyle="#10b981",e.fillRect(0,60,1024,4),e.font='800 28px system-ui, -apple-system, "PingFang SC", sans-serif',e.fillStyle="#f8fafc",e.textBaseline="middle";const i="巅峰点球大战  ·  绿茵冠军之夜  ·  为每一次扑救喝彩  ·  ";e.fillText(i+i,24,33);const r=new xa(n);return r.colorSpace=Qt,r.wrapS=xc,r.repeat.set(3,1),r}function yb(){const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(255, 252, 240, 0.95)"),t.addColorStop(.25,"rgba(220, 238, 255, 0.42)"),t.addColorStop(.6,"rgba(140, 190, 255, 0.1)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new xa(n);return i.colorSpace=Qt,i}function Sb(){const n=[[-.36,.17,.11],[-.1,.21,.13],[.1,.23,.13],[.16,.08,.08],[.21,.075,.075],[.27,.105,.105],[.36,.102,.105],[.42,.03,.03]],e=10,t=n.length,i=e+1,r=new Float32Array(t*i*3),s=[];for(let o=0;o<t;o++){const[l,c,u]=n[o];for(let f=0;f<=e;f++){const d=f/e*Math.PI*2,p=(o*i+f)*3;r[p]=Math.cos(d)*c,r[p+1]=l,r[p+2]=Math.sin(d)*u}}for(let o=0;o<t-1;o++)for(let l=0;l<e;l++){const c=o*i+l,u=c+1,f=(o+1)*i+l,d=f+1;s.push(c,u,d,c,d,f)}const a=new Ot;return a.setAttribute("position",new In(r,3)),a.setIndex(s),a.computeVertexNormals(),a}class Mb{constructor(){this.scene=new IS,this.goal=new gb,this.crowdMembers=[],this.dummy=new Dt,this.crowdExcitement=0,this.flashTimer=0,this.particles=[],this.scene.background=new Ue("#060b16"),this.scene.fog=new ip("#081122",.0155);const e=new sM("#dbeafe","#143d22",.85);this.scene.add(e);const t=new uh("#fffaf0",2.05);t.position.set(14,26,22),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=4,t.shadow.camera.far=56,t.shadow.camera.left=-12,t.shadow.camera.right=12,t.shadow.camera.top=12,t.shadow.camera.bottom=-12,t.shadow.bias=-35e-5,t.target.position.set(0,.5,5.5),this.scene.add(t),this.scene.add(t.target);const i=new uh("#93c5fd",.78);i.position.set(-16,22,-18),this.scene.add(i);const r=new uh("#fde68a",.36);r.position.set(-18,16,18),this.scene.add(r);const s=new Mr(76,64);s.rotateX(-Math.PI/2);const a=new be({map:vb(),roughness:.86,metalness:.02}),o=new W(s,a);o.position.set(0,0,20),o.receiveShadow=!0,this.scene.add(o);const l=new Mr(160,150);l.rotateX(-Math.PI/2);const c=new W(l,new be({color:"#0c1420",roughness:.95}));c.position.set(0,-.02,16),this.scene.add(c),this.scene.add(this.goal.group),this.ledTexture=xb();const u=new be({map:this.ledTexture,emissive:new Ue("#1e40af"),emissiveMap:this.ledTexture,emissiveIntensity:.85,roughness:.35}),f=new W(new et(56,.95,.22),u);f.position.set(0,.48,-5.6),f.castShadow=!0,this.scene.add(f);for(const N of[-1,1]){const A=new W(new et(.22,.95,42),u);A.position.set(N*28,.48,15.5),this.scene.add(A)}this.buildStadiumArchitecture();const d=Sb(),p=new nM({color:"#ffffff"}),v=2400;this.crowdMesh=new a0(d,p,v),this.crowdMesh.instanceMatrix.setUsage(Fm);const _=[new Ue("#162c56"),new Ue("#1d3b72"),new Ue("#1e293b"),new Ue("#273449"),new Ue("#4c2430"),new Ue("#5c441c"),new Ue("#334155"),new Ue("#475569")];let m=0;for(let N=0;N<18&&m<v;N++){const A=-13.2-N*1.02,L=1.15+N*.56+(N>=9?1.25:0),P=96;for(let I=0;I<P&&m<v;I++){if(Math.random()<.07)continue;const R=(I/(P-1)-.5)*64+(Math.random()-.5)*.24;this.crowdMembers.push({x:R,y:L,z:A,yaw:Math.atan2(-R,-A)*.35,phase:Math.random()*Math.PI*2,scale:.92+Math.random()*.22});const O=Math.random()<.45?R<0?_[1]:_[5]:_[Math.floor(Math.random()*_.length)];this.crowdMesh.setColorAt(m,O),m++}}for(const N of[-1,1])for(let A=0;A<12&&m<v;A++){const L=N*(31.5+A*.95),P=1.2+A*.56;for(let I=0;I<34&&m<v;I++){if(Math.random()<.12)continue;const R=-6+I*1.15;this.crowdMembers.push({x:L,y:P,z:R,yaw:-N*Math.PI*.5,phase:Math.random()*Math.PI*2,scale:.9+Math.random()*.22}),this.crowdMesh.setColorAt(m,_[Math.floor(Math.random()*_.length)]),m++}}this.crowdMesh.count=this.crowdMembers.length,this.crowdMesh.instanceColor&&(this.crowdMesh.instanceColor.needsUpdate=!0),this.scene.add(this.crowdMesh);const h=80;this.flashPositions=new Float32Array(h*3),this.randomizeFlashes();const g=new Ot;g.setAttribute("position",new In(this.flashPositions,3));const y=new B_({color:"#ffffff",size:.65,transparent:!0,opacity:0,blending:_c,depthWrite:!1});this.flashPoints=new $S(g,y),this.scene.add(this.flashPoints),this.updateCrowd(0,0);const S=new Ce(St,28,22),b=new be({map:_b(),roughness:.34,metalness:.06});this.ballMesh=new W(S,b),this.ballMesh.castShadow=!0,this.ballMesh.receiveShadow=!0,this.ballMesh.position.set(0,St,Zn),this.scene.add(this.ballMesh),this.aimReticle=this.buildAimReticle(),this.aimReticle.visible=!1,this.scene.add(this.aimReticle);const T=new et(.028,.028,.028),x=new Wi({color:"#ffffff"}),M=110;this.turfInstanced=new a0(T,x,M),this.turfInstanced.instanceMatrix.setUsage(Fm);for(let N=0;N<M;N++)this.particles.push({active:!1,pos:new z(0,-10,0),vel:new z,life:0,maxLife:1,isChalk:!1}),this.turfInstanced.setColorAt(N,new Ue("#2e7d32")),this.dummy.position.set(0,-10,0),this.dummy.scale.setScalar(.001),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(N,this.dummy.matrix);this.scene.add(this.turfInstanced)}buildStadiumArchitecture(){const e=new be({color:"#0f172a",roughness:.88}),t=new be({color:"#162033",roughness:.84}),i=new be({map:this.ledTexture,emissive:new Ue("#1e40af"),emissiveMap:this.ledTexture,emissiveIntensity:.68,roughness:.4}),r=new be({color:"#0b1120",roughness:.65,metalness:.35});for(let _=0;_<18;_++){const m=-13.35-_*1.02,h=.55+_*.56+(_>=9?1.25:0),g=new W(new et(68,.72,1.12),_%2===0?e:t);g.position.set(0,h,m),this.scene.add(g)}const s=new W(new et(72,16,1.5),e);s.position.set(0,8.2,-32.4),this.scene.add(s);const a=new W(new et(68,.72,.45),i);a.position.set(0,6.45,-21.9),this.scene.add(a);for(const _ of[-1,1]){const m=new W(new et(12,10,52),e);m.position.set(_*38.5,3.6,12),m.rotation.z=-_*.42,this.scene.add(m)}const o=new W(new et(76,.65,14),r);o.position.set(0,14.9,-26.5),o.rotation.x=.08,this.scene.add(o);const l=new W(new et(76,.16,.25),new Wi({color:"#60a5fa"}));l.position.set(0,14.5,-19.6),this.scene.add(l);const c=yb(),u=new be({color:"#334155",metalness:.6,roughness:.4}),f=new Wi({color:"#fffef5"});for(const[_,m,h]of[[-18.5,14.6,-24.5],[18.5,14.6,-24.5],[-31,22,28],[31,22,28]]){const g=new W(new ot(.28,.46,m,10),u);g.position.set(_,m*.5,h),this.scene.add(g);const y=new W(new et(3.8,1.65,.55),f);y.position.set(_,m+.55,h),y.lookAt(0,1,4),this.scene.add(y);const S=new HS(new k_({map:c,color:"#fff8e7",transparent:!0,opacity:.9,blending:_c,depthWrite:!1}));S.position.set(_,m+.55,h),S.scale.set(14.5,14.5,1),this.scene.add(S)}const d=new ot(.018,.018,1.5,8),p=new be({color:"#f8fafc"}),v=new be({color:"#f59e0b",side:On});for(const _ of[-34,34]){const m=new W(d,p);m.position.set(_,.75,0),this.scene.add(m);const h=new W(new Mr(.4,.28),v);h.position.set(_+(_<0?.2:-.2),1.35,0),this.scene.add(h)}}buildAimReticle(){const e=new nt,t=new Wi({color:"#38bdf8",transparent:!0,opacity:.9,side:On,depthTest:!1}),i=new W(new lp(.19,.235,32),t);e.add(i);const r=new W(new ap(.045,16),new Wi({color:"#f8fafc",transparent:!0,opacity:.95,side:On,depthTest:!1}));e.add(r);for(let s=0;s<4;s++){const a=new W(new Mr(.09,.025),t),o=s*Math.PI/2;a.position.set(Math.cos(o)*.28,Math.sin(o)*.28,0),a.rotation.z=o,e.add(a)}return e}setAimReticle(e,t,i,r="#38bdf8",s=1){if(this.aimReticle.visible=e,!e)return;this.aimReticle.position.set(t,i,.04),this.aimReticle.scale.setScalar(s),this.aimReticle.children[0].material.color.set(r)}triggerCrowdExcitement(e=1){this.crowdExcitement=Math.max(this.crowdExcitement,e)}spawnTurfBurst(e,t,i=.25,r=1){let s=0;for(let a=0;a<this.particles.length&&s<t;a++){const o=this.particles[a];if(o.active)continue;o.active=!0,o.pos.copy(e),o.pos.y=Math.max(.02,e.y);const l=Math.random()*Math.PI*2,c=(.7+Math.random()*2.1)*r;o.vel.set(Math.cos(l)*c,(1.2+Math.random()*2.4)*r,Math.sin(l)*c),o.maxLife=.42+Math.random()*.35,o.life=o.maxLife,o.isChalk=Math.random()<i,this.turfInstanced.setColorAt(a,new Ue(o.isChalk?"#f1f5f9":"#22632b")),s++}this.turfInstanced.instanceColor&&(this.turfInstanced.instanceColor.needsUpdate=!0)}randomizeFlashes(){for(let e=0;e<this.flashPositions.length/3;e++){const t=this.crowdMembers[Math.floor(Math.random()*Math.max(1,this.crowdMembers.length))];t&&(this.flashPositions[e*3]=t.x,this.flashPositions[e*3+1]=t.y+.4,this.flashPositions[e*3+2]=t.z+.2)}}updateCrowd(e,t){this.crowdExcitement=Math.max(0,this.crowdExcitement-t*.42);const i=3.2+this.crowdExcitement*7.5,r=.035+this.crowdExcitement*.22;for(let s=0;s<this.crowdMembers.length;s++){const a=this.crowdMembers[s],o=Math.max(0,Math.sin(e*i+a.phase))*r;this.dummy.position.set(a.x,a.y+o,a.z),this.dummy.rotation.set(0,a.yaw,Math.sin(e*2.5+a.phase)*(.04+this.crowdExcitement*.12)),this.dummy.scale.set(a.scale,a.scale*(1+o*.25),a.scale),this.dummy.updateMatrix(),this.crowdMesh.setMatrixAt(s,this.dummy.matrix)}this.crowdMesh.instanceMatrix.needsUpdate=!0,this.flashTimer+=t,this.flashTimer>(this.crowdExcitement>.2?.07:.22)?(this.flashTimer=0,this.randomizeFlashes(),this.flashPoints.geometry.getAttribute("position").needsUpdate=!0,this.flashPoints.material.opacity=this.crowdExcitement>.2?.92:.28):this.flashPoints.material.opacity*=Math.exp(-8*t)}updateParticles(e){let t=!1;for(let i=0;i<this.particles.length;i++){const r=this.particles[i];if(!r.active)continue;if(t=!0,r.life-=e,r.life<=0){r.active=!1,this.dummy.position.set(0,-10,0),this.dummy.scale.setScalar(.001),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(i,this.dummy.matrix);continue}r.vel.y-=9.81*e,r.pos.addScaledVector(r.vel,e),r.pos.y<.015&&(r.pos.y=.015,r.vel.y*=-.3,r.vel.x*=.6,r.vel.z*=.6);const s=Math.max(.15,r.life/r.maxLife);this.dummy.position.copy(r.pos),this.dummy.rotation.set(r.life*8,r.life*6,0),this.dummy.scale.setScalar(s),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(i,this.dummy.matrix)}t&&(this.turfInstanced.instanceMatrix.needsUpdate=!0)}step(e,t){this.ledTexture.offset.x=e*.045%1,this.goal.step(t),this.updateCrowd(e,t),this.updateParticles(t)}getGoalBounds(){return{halfW:mn,height:_t}}}const Y0=1.45,wb=.35;function It(n,e,t){return Math.max(e,Math.min(n,t))}function $0(n){return{pelvisOffset:{...n.pelvisOffset},pelvisRot:{...n.pelvisRot},spine:{...n.spine},head:{...n.head},armL:{...n.armL},armR:{...n.armR},legL:{...n.legL},legR:{...n.legR}}}function pr(n){let e=0,t=0,i=0,r=0;for(const s of n)s.side==="user"?(e++,s.result==="goal"&&i++):(t++,s.result==="goal"&&r++);return{uT:e,cT:t,uG:i,cG:r}}function Tb(n){const{uT:e,cT:t,uG:i,cG:r}=pr(n);return e<5||t<5?i+(5-e)<r||r+(5-t)<i:e===t&&i!==r}class Eb{constructor(e,t){this.shooterRig=null,this.keeperRig=null,this.phase="user_select",this.phaseBeforeReplay="result",this.turnSide="user",this.kicks=[],this.clockTime=0,this.phaseTime=0,this.rafId=0,this.lastFrameMs=0,this.simulationRemainder=0,this.hudThrottle=0,this.keys={up:!1,down:!1,left:!1,right:!1,space:!1},this.aimX=0,this.aimY=1.24,this.aimVelX=0,this.aimVelY=0,this.selectedStyle="placed",this.activeShotStyle="placed",this.shuttlePos=-.82,this.shuttleDir=1,this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.arrowBlockedTimer=0,this.chaosTimer=0,this.chaosSpeed=1.8,this.chaosCrossGuard=0,this.userIntendedOutcome=null,this.skiedPosture=!1,this.runupProgress=0,this.runupDuration=1.18,this.cpuReadyDuration=Y0,this.postImpactTime=0,this.lastFootstepIdx=-1,this.keeperX=0,this.keeperShufflePhase=0,this.keeperLateralSpeed=0,this.committedDive=null,this.keeperDiving=!1,this.keeperDiveStartX=0,this.keeperDiveDirX=0,this.keeperDiveDirY=0,this.keeperDiveTime=0,this.keeperLanded=!1,this.keeperExplosive=!1,this.keeperIntuition=null,this.cpuShotPlan=null,this.cpuKeeperPlan=null,this.ballPos=new z(0,St,Zn),this.ballVel=new z,this.ballSpin=new z,this.flightTime=0,this.goalScored=!1,this.goalScoredTime=0,this.keeperTouched=!1,this.keeperTouchTime=0,this.hitWoodwork=!1,this.woodworkTime=0,this.netSwished=!1,this.currentOutcome=null,this.outcomeTime=0,this.lastSpeedKmh=0,this.cameraMode="broadcast",this.camPos=new z(0,2.35,17.6),this.camTarget=new z(0,1.25,0),this.camShake=0,this.replayFrames=[],this.replayCursor=0,this.replaySideSign=1,this.bannerTitle="",this.bannerTone="neutral",this.statusHint="",this.tmpClosest=new z,this.tmpNormal=new z,this.tmpMagnus=new z,this.handleResize=()=>{const i=this.container.getBoundingClientRect(),r=Math.max(320,i.width||960),s=Math.max(240,i.height||540);this.camera.aspect=r/s,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,s,!1)},this.handleKeyDown=i=>{mt.unlock();const r=i.code;if((r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight"||r==="Space"||r==="Tab")&&i.preventDefault(),(r==="ArrowUp"||r==="KeyW")&&(this.keys.up=!0),(r==="ArrowDown"||r==="KeyS")&&(this.keys.down=!0),(r==="ArrowLeft"||r==="KeyA")&&(this.keys.left=!0),(r==="ArrowRight"||r==="KeyD")&&(this.keys.right=!0),r==="KeyV"&&!i.repeat&&this.cycleCameraMode(),r==="KeyR"&&!i.repeat&&this.toggleReplay(),!i.repeat&&this.turnSide==="user"&&(this.phase==="user_select"||this.phase==="user_shuttle")){if(r==="Digit1"){this.selectShotStyle("placed",!0);return}if(r==="Digit2"){this.selectShotStyle("power",!0);return}if(r==="Digit3"){this.selectShotStyle("panenka",!0);return}if(r==="Digit4"){this.selectShotStyle("stutter",!0);return}}if(this.phase==="user_select"&&!i.repeat){const s=$r.indexOf(this.selectedStyle);if(r==="ArrowLeft"||r==="KeyA"||r==="ArrowUp"||r==="KeyW"){const a=$r[(s+$r.length-1)%$r.length];this.selectShotStyle(a,!1);return}if(r==="ArrowRight"||r==="KeyD"||r==="ArrowDown"||r==="KeyS"){const a=$r[(s+1)%$r.length];this.selectShotStyle(a,!1);return}if(r==="Space"||r==="Enter"){this.keys.space=!0,this.enterUserShuttlePhase(this.selectedStyle);return}}if(this.phase==="user_shuttle"&&!i.repeat){if(r==="Escape"||r==="Backspace"||r==="Tab"){this.backToStyleSelect();return}if(this.activeShotStyle==="panenka"&&(r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight"||r==="KeyW"||r==="KeyA"||r==="KeyS"||r==="KeyD")&&(this.arrowBlockedTimer=.95,mt.uiTick(260)),(r==="Space"||r==="Enter")&&!this.shuttleLocked){this.keys.space=!0,this.lockShuttleAndCommitUserShot();return}}this.turnSide==="cpu"&&this.captureUserKeeperInput(r==="Space"),(r==="Space"||r==="Enter")&&!i.repeat&&(this.keys.space=!0,this.phase==="result"&&this.phaseTime>.55?this.advanceNextTurn():this.phase==="replay"&&this.toggleReplay()),this.emitHud(!0)},this.handleKeyUp=i=>{const r=i.code;(r==="ArrowUp"||r==="KeyW")&&(this.keys.up=!1),(r==="ArrowDown"||r==="KeyS")&&(this.keys.down=!1),(r==="ArrowLeft"||r==="KeyA")&&(this.keys.left=!1),(r==="ArrowRight"||r==="KeyD")&&(this.keys.right=!1),(r==="Space"||r==="Enter")&&(this.keys.space=!1),this.emitHud(!0)},this.tick=i=>{const r=Math.max(0,(i-this.lastFrameMs)/1e3);if(this.lastFrameMs=i,document.hidden)this.simulationRemainder=0;else{this.simulationRemainder+=Math.min(.5,r);const s=1/60;for(;this.simulationRemainder>=s;)this.updateFrame(s),this.simulationRemainder-=s;this.renderer.render(this.world.scene,this.camera)}this.rafId=requestAnimationFrame(this.tick)},this.container=e,this.userGK=t.userGK,this.cpuGK=t.cpuGK,this.userTeam=t.userTeam,this.cpuTeam=t.cpuTeam,this.onHudUpdate=t.onHudUpdate,this.onShuttleFrame=t.onShuttleFrame,this.renderer=new nb({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=l_,this.renderer.toneMapping=$d,this.renderer.toneMappingExposure=1.08,e.innerHTML="",e.appendChild(this.renderer.domElement),this.camera=new di(40,16/9,.15,180),this.world=new Mb,this.refereeRig=new dh({height:1.82,build:.98,skin:"#dfb48f",hair:"#241d18",hairStyle:"swept",facialHair:"none",bootColor:"#0f172a"},{primary:"#111827",secondary:"#030712",trim:"#fde047",shorts:"#090d16",socks:"#111827",numberColor:"#fde047"},0,!1),this.refereeRig.root.position.set(6.8,0,11.8),this.refereeRig.root.rotation.y=-Math.PI*.42,this.world.scene.add(this.refereeRig.root),this.handleResize(),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),this.setupTurn("user"),this.lastFrameMs=performance.now(),this.rafId=requestAnimationFrame(this.tick)}destroy(){var e,t;cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),(e=this.shooterRig)==null||e.dispose(),(t=this.keeperRig)==null||t.dispose(),this.refereeRig.dispose(),this.renderer.dispose()}setCameraMode(e){this.cameraMode=e,this.emitHud(!0)}cycleCameraMode(){const e=["broadcast","tight","wide"],t=e[(e.indexOf(this.cameraMode)+1)%e.length];this.setCameraMode(t)}toggleReplay(){if(this.phase==="replay"){this.phase=this.phaseBeforeReplay,this.emitHud(!0);return}(this.phase==="result"||this.phase==="over")&&this.replayFrames.length>8&&(this.phaseBeforeReplay=this.phase,this.phase="replay",this.replayCursor=0,this.replaySideSign=this.ballPos.x>=0?1:-1,this.emitHud(!0))}selectShotStyle(e,t=!0){this.turnSide==="user"&&(this.phase!=="user_select"&&this.phase!=="user_shuttle"||(this.selectedStyle=e,mt.uiTick(560),t?this.enterUserShuttlePhase(e):this.emitHud(!0)))}backToStyleSelect(){this.turnSide==="user"&&this.phase==="user_shuttle"&&!this.shuttleLocked&&(this.phase="user_select",this.phaseTime=0,this.world.setAimReticle(!1,0,0),this.statusHint=`${this.activeShooter.name} 主罚 · 选择方式后按空格`,mt.uiTick(420),this.emitHud(!0))}enterUserShuttlePhase(e){var i;this.selectedStyle=e,this.activeShotStyle=e,this.phase="user_shuttle",this.phaseTime=0,this.aimVelX=0,this.aimVelY=0,this.arrowBlockedTimer=0,this.shuttleDir=Math.random()<.5?1:-1,this.shuttlePos=-this.shuttleDir*(.68+Math.random()*.24),this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.chaosTimer=.16,this.chaosSpeed=2.15,this.chaosCrossGuard=0;const t=this.activeShooter;if(e==="panenka")this.aimX=0,this.aimY=1.46,this.statusHint="勺子点球（固定踢向中路，方向键无效）· 紧盯极速小球，在中心完美点按下 空格键！";else if(e==="placed"){const r=t.foot==="R"?-1:1;this.aimX=r*2.55,this.aimY=1.58,this.statusHint="推射死角 · 方向键 ↑↓←→ 瞄准死角，小球经过中心完美点时按下 空格键！"}else e==="stutter"?(this.aimX=(t.foot==="R"?-1:1)*1.65,this.aimY=1.08,this.statusHint="节奏变化（小跳步）· 方向键瞄准，预判乱晃小球在中心完美点按下 空格键！"):(this.aimX=(t.foot==="R"?-1:1)*1.45,this.aimY=1.38,this.statusHint="大力爆射 · 方向键 ↑↓←→ 瞄准，小球经过中心完美点时按下 空格键！");this.runupDuration=e==="stutter"?1.42:t.runupStyle==="stutter"?1.32:1.15,mt.whistle(),mt.setTension(.78),(i=this.onShuttleFrame)==null||i.call(this,this.shuttlePos,!1),this.emitHud(!0)}getCurrentShooter(e){const{uT:t,cT:i}=pr(this.kicks),r=(e==="user"?t:i)%5;return e==="user"?this.userTeam[r]:this.cpuTeam[r]}rebuildAthletesForTurn(e){this.shooterRig&&(this.world.scene.remove(this.shooterRig.root),this.shooterRig.dispose()),this.keeperRig&&(this.world.scene.remove(this.keeperRig.root),this.keeperRig.dispose());const t=this.getCurrentShooter(e),r=(e==="user"?"cpu":"user")==="user"?this.userGK:this.cpuGK;this.activeShooter=t,this.activeKeeper=r,this.shooterRig=new dh(t.appearance,t.kit,t.number,!1),this.keeperRig=new dh(r.appearance,r.kit,r.number,!0),this.world.scene.add(this.shooterRig.root),this.world.scene.add(this.keeperRig.root)}setupTurn(e){var r;this.turnSide=e,this.phaseTime=0,this.runupProgress=0,this.postImpactTime=0,this.lastFootstepIdx=-1,this.keeperX=0,this.keeperShufflePhase=0,this.keeperLateralSpeed=0,this.committedDive=null,this.keeperDiving=!1,this.keeperDiveStartX=0,this.keeperDiveDirX=0,this.keeperDiveDirY=0,this.keeperDiveTime=0,this.keeperLanded=!1,this.keeperExplosive=!1,this.keeperIntuition=null,this.goalScored=!1,this.keeperTouched=!1,this.hitWoodwork=!1,this.netSwished=!1,this.currentOutcome=null,this.outcomeTime=0,this.userIntendedOutcome=null,this.skiedPosture=!1,this.flightTime=0,this.bannerTitle="",this.bannerTone="neutral",this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.arrowBlockedTimer=0,this.world.goal.resetNet(),this.ballPos.set(0,St,Zn),this.ballVel.set(0,0,0),this.ballSpin.set(0,0,0),this.world.ballMesh.position.copy(this.ballPos),this.world.ballMesh.rotation.set(0,0,0),this.rebuildAthletesForTurn(e);const t=this.activeShooter;if(e==="user")this.phase="user_select",this.aimX=0,this.aimY=1.24,this.aimVelX=0,this.aimVelY=0,this.world.setAimReticle(!1,0,0),this.statusHint=`${t.name} 主罚 · 选择方式后按空格`,mt.setTension(.25);else{this.phase="cpu_ready",this.world.setAimReticle(!1,0,0),this.planCpuShot(t),this.cpuReadyDuration=Y0+Math.random()*wb;const s=((r=this.cpuShotPlan)==null?void 0:r.style)==="stutter"||t.runupStyle==="stutter";this.runupDuration=(s?2.85:2.55)+Math.random()*.3,this.statusHint=`${t.name} 观察球门 · ←→ 调整站位，方向键预选扑救`,mt.whistle(),mt.setTension(.75)}const i=this.computeDesiredCamera(.016);this.camPos.copy(i.pos),this.camTarget.copy(i.target),this.emitHud(!0)}planCpuShot(e){const t=Fy,{cT:i}=pr(this.kicks),r=Math.random(),s=e.foot==="R"?.46:.32,a=r<s?-1:r<s+.18?0:1,o=Math.random()<.46;let l="power";a===0&&e.composure>=85&&Math.random()<.32?l="panenka":e.runupStyle==="stutter"||e.composure>=83&&Math.random()<.25?l="stutter":a!==0&&e.accuracy>=82&&Math.random()<.48&&(l="placed");const c=l==="panenka"?(Math.random()-.5)*.45:a===0?(Math.random()-.5)*.9:a*(2.15+Math.random()*1.15),u=l==="panenka"?1.45+Math.random()*.38:o?1.5+Math.random()*.65:.26+Math.random()*.7,f=i>=4?(100-e.composure)/100*.24:0,d=((100-e.accuracy)/100*.44+f)*t.accSpread,p=Math.random()*Math.PI*2,v=d*Math.sqrt(Math.random());if(this.cpuShotPlan={targetX:c+Math.cos(p)*v*1.2,targetY:Math.max(.16,u+Math.sin(p)*v*.85),powerFactor:l==="panenka"?.5:l==="power"?.88:.68,style:l},Math.random()<this.userGK.mind/128){const _=c<-.8?"左侧":c>.8?"右侧":"中路",m=Math.random()<.62+(this.userGK.mind-70)*.01,h=["左侧","中路","右侧"].filter(y=>y!==_),g=m?_:h[Math.floor(Math.random()*h.length)];this.keeperIntuition=`${this.userGK.name}直觉预判：射手支撑脚倾向 ${g}`}else this.keeperIntuition=null}stepShuttleBall(e){var i;if(this.shuttleLocked)return;const t=this.activeShotStyle;if(t==="panenka"){const s=3.15+(1-this.shuttlePos*this.shuttlePos)*1.15;this.shuttlePos+=this.shuttleDir*s*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1)}else if(t==="placed"){const s=2.15+(1-this.shuttlePos*this.shuttlePos)*.72;this.shuttlePos+=this.shuttleDir*s*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1)}else if(t==="stutter"){if(this.chaosTimer-=e,this.chaosCrossGuard+=e,this.chaosTimer<=0){const o=Math.random();o<.28?(this.chaosSpeed=.28+Math.random()*.42,this.chaosTimer=.1+Math.random()*.12):o<.68?(this.chaosSpeed=2.45+Math.random()*1.25,this.chaosTimer=.14+Math.random()*.18):(this.chaosSpeed=1.45+Math.random()*.9,this.chaosTimer=.12+Math.random()*.16,Math.abs(this.shuttlePos)>.18&&this.chaosCrossGuard<.55&&Math.random()<.55&&(this.shuttleDir=-this.shuttleDir)),this.chaosCrossGuard>.65&&Math.abs(this.shuttlePos)>.12&&(this.shuttleDir=this.shuttlePos>0?-1:1,this.chaosSpeed=Math.max(this.chaosSpeed,2.25))}const r=Math.sign(this.shuttlePos),s=Math.sin(this.clockTime*19.3)*.35+Math.cos(this.clockTime*31.7)*.22,a=this.shuttleDir*Math.max(.2,this.chaosSpeed+s);this.shuttlePos+=a*e,Math.sign(this.shuttlePos)!==r&&(this.chaosCrossGuard=0),this.shuttlePos>=.98?(this.shuttlePos=.98,this.shuttleDir=-1):this.shuttlePos<=-.98&&(this.shuttlePos=-.98,this.shuttleDir=1)}else this.shuttlePos+=this.shuttleDir*1.52*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1);(i=this.onShuttleFrame)==null||i.call(this,this.shuttlePos,!1)}lockShuttleAndCommitUserShot(){var b;const e=this.activeShooter,t=this.activeShotStyle,i=no[t];this.shuttleLocked=!0,(b=this.onShuttleFrame)==null||b.call(this,this.shuttlePos,!0);const r=Math.abs(this.shuttlePos);let s,a,o=0;if(r<=i.perfectHalfWidth)a="perfect",s=i.perfectGoalPct/100;else{o=It((r-i.perfectHalfWidth)/(1-i.perfectHalfWidth),0,1),a=r<=i.goodHalfWidth?"good":o<.5?"off":"wild";const T=t==="panenka"?2.55:t==="placed"?1.95:t==="stutter"?1.72:1.36,x=1+(e.accuracy+e.composure-164)/100*.08;s=It(i.perfectGoalPct/100*Math.pow(1-o,T)*x,.03,i.perfectGoalPct/100-.03)}this.shuttleGrade=a,this.shuttleGoalPct=Math.round(s*100),mt.shuttleLock(a==="perfect"?"perfect":a==="good"?"good":"poor");const l=Math.random();let c;if(l<s)c="goal";else{const T=Math.random();a==="perfect"?c=T<.8?"save":"post":o<.45?c=T<.66?"save":T<.86?"post":"miss":c=T<.54?"save":T<.74?"post":"miss"}this.userIntendedOutcome=c,this.skiedPosture=!1;const u=t==="panenka"?0:this.aimX,f=t==="panenka"?1.46:this.aimY,d=u===0?Math.random()<.5?-1:1:Math.sign(u);let p=u,v=f,_,m=0,h=0,g=.87,y=!1;if(c==="goal")if(t==="panenka")p=(Math.random()-.5)*.36,v=1.38+Math.random()*.36,m=Math.random()<.5?-1:1,h=Math.random()<.4?0:-1,g=.82;else if(t==="placed"){p=Math.abs(u)<1.9?d*(2.78+Math.random()*.44):It(u,-3.28,3.28),v=It(f,.26,2.16);const x=Math.random()<.52;m=x?-Math.sign(p):Math.sign(p),h=v>1.35?1:-1,g=x?.86:.95}else t==="stutter"?(p=Math.abs(u)<.9?d*(1.85+Math.random()*1.15):It(u,-3.2,3.2),v=It(f,.26,2.12),m=-Math.sign(p||1),h=Math.random()<.5?0:-1,g=.77):(p=It(u+(Math.random()-.5)*.35,-3.18,3.18),v=It(f+(Math.random()-.5)*.25,.32,2.14),m=Math.random()<.58?-d:d,h=v>1.35?0:1,g=.93);else if(c==="save")y=!0,t==="panenka"?(p=(Math.random()-.5)*.28,v=1.28+Math.random()*.22,m=0,h=0,g=.88):(m=Math.abs(u)<.65?0:Math.sign(u),h=f>1.46?1:f<.72?-1:0,p=m===0?(Math.random()-.5)*.35:m*(1.68+Math.random()*.55),v=h>0?1.52+Math.random()*.24:h<0?.38+Math.random()*.22:1.05+Math.random()*.22,g=.85);else if(c==="post"){const T=t==="panenka"||t==="power"&&Math.random()<.58||f>1.85;T?(_="bar",p=t==="panenka"?(Math.random()-.5)*.5:It(u,-3.35,3.35),v=_t+.045):(_=d<0?"postL":"postR",p=d*(mn+.045),v=It(f,.45,2.25)),m=Math.random()<.5?d:-d,h=T?1:0,g=.88}else{const T=t==="panenka"||t==="power"||f>1.65||Math.random()<.52;T?(this.skiedPosture=!0,p=t==="panenka"?(Math.random()-.5)*.7:It(u*1.05,-3.9,3.9),v=2.95+Math.random()*.95):(p=d*(4.15+Math.random()*.85),v=It(f,.35,2.35)),m=d,h=T?1:0,g=.89}this.cpuShotPlan={targetX:p,targetY:v,powerFactor:t==="panenka"?.5:t==="power"?.94:.72,style:t,woodworkKind:_},this.cpuKeeperPlan={dirX:m,dirY:h,triggerAt:g,explosive:y},this.world.setAimReticle(!1,0,0),this.replayFrames=[],this.phase="runup",this.phaseTime=0,this.runupProgress=0;const S=a==="perfect"?"完美中心！":a==="good"?"校准良好":"偏离中心";this.statusHint=`${e.name} · ${i.name} · ${S}`,this.emitHud(!0)}captureUserKeeperInput(e){const t=(this.keys.right?1:0)-(this.keys.left?1:0),i=(this.keys.up?1:0)-(this.keys.down?1:0);if(this.phase==="flight"&&!this.keeperDiving&&this.flightTime<=.24){(t!==0||i!==0||e)&&this.triggerKeeperDive(t,i,e);return}if(this.phase==="runup"||this.phase==="cpu_ready"&&(i!==0||e))if(t!==0||i!==0){const r=this.committedDive,s=t!==0?t:r?r.x:0,a=i!==0?i:r&&t===r.x?r.y:0,o=this.runupDuration-this.phaseTime,l=this.phase==="runup"&&o>=.12&&o<=.45;this.committedDive={x:s,y:a,boost:e||l}}else e&&(this.committedDive={x:0,y:0,boost:!0})}triggerKeeperDive(e,t,i){this.keeperDiving||(this.keeperDiving=!0,this.keeperDiveStartX=this.keeperX,this.keeperDiveDirX=e,this.keeperDiveDirY=t,this.keeperDiveTime=0,this.keeperExplosive=i,mt.footstep(1),e!==0&&this.world.spawnTurfBurst(new z(this.keeperX,.03,.16),10,.15,.85))}launchBallFromSpot(){const e=this.activeShooter,t=this.cpuShotPlan,i=e.foot==="R"?1:-1,r=t.style;let s;r==="panenka"?s=12+t.powerFactor*2.4:r==="placed"?s=(21.5+t.powerFactor*6.5)*(.88+e.power*.0014):r==="stutter"?s=(20.8+t.powerFactor*7.2)*(.88+e.power*.0014):s=(25.5+t.powerFactor*9.8)*(.88+e.power*.0016),this.lastSpeedKmh=Math.round(s*3.6);const a=.0095;r==="placed"?this.ballSpin.set(-12,i*32,-i*8):r==="panenka"?this.ballSpin.set(19,i*3,0):r==="stutter"?this.ballSpin.set(-9,i*18,-i*4):this.ballSpin.set(-10,i*8,0);const o=.011,l=r==="panenka"?s*.86:s*.96,c=(Math.exp(o*Zn)-1)/(o*l),u=Zn/c,f=-a*this.ballSpin.y*u,d=a*this.ballSpin.x*u,p=.5*f*c*c,_=.5*(-9.81+d)*c*c,m=o*Zn/(1-Math.exp(-o*Zn)),h=(t.targetX-p)/c*m*.945,g=(t.targetY-St-_)/c*m*.955,y=-l;this.ballPos.set(0,St,Zn),this.ballVel.set(h,g,y),this.flightTime=0,mt.kick(t.powerFactor,r),this.camShake=r==="panenka"?.03:r==="power"?.17:.09,this.world.spawnTurfBurst(new z(0,.03,Zn),r==="power"?24:16,.4,1.15)}applyGoalkeeperParryDeflection(e){const t=Math.abs(this.ballPos.x)>.3?Math.sign(this.ballPos.x)*(5.6+e*.22):(this.keeperDiveDirX||(Math.random()<.5?-1:1))*4.4,i=this.ballPos.y>1.65?5+e*.14:2.1,r=Math.max(4.2,Math.abs(this.ballVel.z)*.38);this.ballVel.set(t,i,r),this.ballSpin.set(7,t*2.2,0),this.keeperTouched=!0,this.keeperTouchTime=this.flightTime,this.camShake=Math.max(this.camShake,.14),mt.gloveSave(!0)}stepBallPhysics(e){var l;const i=e/4,r=.0095,s=this.turnSide==="user",a=s?this.userIntendedOutcome:null,o=this.keeperRig?this.keeperRig.getKeeperCollisionCapsules():[];for(let c=0;c<4;c++){const u=this.ballPos.z,f=this.ballPos.x,d=this.ballPos.y,p=this.ballVel.length();if(p>.01){const m=-.011*p;this.ballVel.x+=this.ballVel.x*m*i,this.ballVel.y+=this.ballVel.y*m*i,this.ballVel.z+=this.ballVel.z*m*i,this.tmpMagnus.crossVectors(this.ballSpin,this.ballVel).multiplyScalar(r),this.ballVel.addScaledVector(this.tmpMagnus,i)}this.ballVel.y-=9.81*i,this.ballPos.addScaledVector(this.ballVel,i);const v=this.ballSpin.length();if(v>.1){const m=this.tmpNormal.copy(this.ballSpin).divideScalar(v);this.world.ballMesh.rotateOnWorldAxis(m,v*i)}else p>.2&&this.ballPos.y<=St+.02&&(this.tmpNormal.set(this.ballVel.z,0,-this.ballVel.x).normalize(),this.tmpNormal.lengthSq()>.1&&this.world.ballMesh.rotateOnWorldAxis(this.tmpNormal,p/St*i));if(this.ballPos.y<St&&(this.ballPos.y=St,this.ballVel.y<-1.2?(this.ballVel.y=-this.ballVel.y*.52,this.world.spawnTurfBurst(this.ballPos,5,.1,.5)):this.ballVel.y=0,this.ballVel.x*=Math.exp(-2.2*i),this.ballVel.z*=Math.exp(-2.2*i),this.ballSpin.multiplyScalar(Math.exp(-3*i))),(!s||a==="save")&&!this.goalScored&&!this.keeperTouched&&this.ballPos.z>-.25&&this.ballPos.z<1.35){const m=this.activeKeeper;for(const h of o){q0(this.ballPos,h.a,h.b,this.tmpClosest);const g=this.ballPos.distanceTo(this.tmpClosest),y=St+h.radius;if(g<y){this.tmpNormal.subVectors(this.ballPos,this.tmpClosest),this.tmpNormal.lengthSq()<1e-6&&this.tmpNormal.set(0,.2,1),this.tmpNormal.normalize();const S=y-g;this.ballPos.addScaledVector(this.tmpNormal,S+.004),!s&&(h.part==="gloveL"||h.part==="gloveR")&&S<.014&&p>30.5&&m.reflex<88?(this.ballVel.x+=Math.sign(this.ballPos.x||1)*3.2,this.ballVel.y+=1.8,this.ballVel.multiplyScalar(.84),this.keeperTouched=!0,this.keeperTouchTime=this.flightTime,mt.gloveSave(!1)):this.applyGoalkeeperParryDeflection(p);break}}a==="save"&&!this.keeperTouched&&this.ballPos.z<=.34&&this.ballVel.z<0&&(this.ballPos.z=.35,this.applyGoalkeeperParryDeflection(p))}if(Math.abs(this.ballPos.z)<.45&&a!=="goal")if(a==="post"&&!this.hitWoodwork&&this.ballPos.z<=Ei+St+.03&&this.ballVel.z<0){const m=((l=this.cpuShotPlan)==null?void 0:l.woodworkKind)??"bar";if(m==="bar")this.ballPos.y=_t+St*.45,this.ballVel.set(this.ballVel.x*.65,5.8+Math.random()*2.5,Math.abs(this.ballVel.z)*.35+2.6);else{const h=m==="postL"?-1:1;this.ballPos.x=h*(mn+St*.4),this.ballVel.set(h*(6.2+Math.random()*2.5),1.8,Math.abs(this.ballVel.z)*.42+2.8)}this.ballPos.z=Ei+St+.04,this.hitWoodwork=!0,this.woodworkTime=this.flightTime,this.camShake=Math.max(this.camShake,.2),mt.postClang()}else for(const m of this.world.goal.postSegments){q0(this.ballPos,m.a,m.b,this.tmpClosest);const h=this.ballPos.distanceTo(this.tmpClosest),g=St+m.radius;if(h<g){this.tmpNormal.subVectors(this.ballPos,this.tmpClosest),this.tmpNormal.lengthSq()<1e-6&&this.tmpNormal.set(0,0,1),this.tmpNormal.normalize(),this.ballPos.copy(this.tmpClosest).addScaledVector(this.tmpNormal,g+.003);const y=this.ballVel.dot(this.tmpNormal);y<0&&(this.ballVel.addScaledVector(this.tmpNormal,-1.68*y),this.ballVel.multiplyScalar(.78),this.hitWoodwork||(this.hitWoodwork=!0,this.woodworkTime=this.flightTime,this.camShake=Math.max(this.camShake,.18),mt.postClang()))}}if(!this.goalScored&&u>=0&&this.ballPos.z<0){const m=u/Math.max(1e-5,u-this.ballPos.z);let h=f+(this.ballPos.x-f)*m,g=d+(this.ballPos.y-d)*m;a==="goal"&&(h=It(h,-3.539,mn-St*1.1),g=It(g,St,_t-St*1.1),this.ballPos.x=h,this.ballPos.y=g),a!=="miss"&&a!=="post"&&a!=="save"&&Math.abs(h)<mn-St*.35&&g<_t-St*.35&&(this.goalScored=!0,this.goalScoredTime=this.flightTime,this.onOutcomeConfirmed("goal"))}if(this.goalScored){const m=jf(this.ballPos.y)+St,h=mn-St,g=_t-St;let y=!1;this.ballPos.z<m&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.85),this.ballPos.z=m,this.ballVel.z=-this.ballVel.z*.18,this.ballVel.x*=.48,this.ballVel.y*=.42,y=!0),Math.abs(this.ballPos.x)>h&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.75),this.ballPos.x=Math.sign(this.ballPos.x)*h,this.ballVel.x=-this.ballVel.x*.22,this.ballVel.z*=.55,y=!0),this.ballPos.y>g&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.75),this.ballPos.y=g,this.ballVel.y=-Math.abs(this.ballVel.y)*.25,y=!0),y&&!this.netSwished&&(this.netSwished=!0,mt.netSwish())}else!this.goalScored&&this.ballPos.z<0&&Math.abs(this.ballPos.x)<mn&&this.ballPos.y<_t&&(this.ballPos.y=_t+St)}this.world.ballMesh.position.copy(this.ballPos)}onOutcomeConfirmed(e){var l;if(this.currentOutcome)return;this.currentOutcome=e,this.outcomeTime=0;const t=this.activeShooter,i=this.activeKeeper,r=((l=this.cpuShotPlan)==null?void 0:l.style)??this.selectedStyle,s=no[r].name,a=this.turnSide==="user"&&e==="goal"||this.turnSide==="cpu"&&e!=="goal";let o;e==="goal"?r==="panenka"?o=`${t.name} 写意勺子点球骗过门将直挂中路！`:r==="stutter"?o=`${t.name} 小跳步晃倒重心推射破门！(${this.lastSpeedKmh} km/h)`:r==="placed"?o=`${t.name} 精准推射死角入网！(${this.lastSpeedKmh} km/h)`:this.hitWoodwork?o=`${t.name} 爆射击中门框内侧弹入球网！`:o=`${t.name} 大力爆射破门得分！(${this.lastSpeedKmh} km/h)`:e==="save"?o=r==="panenka"?`${i.name} 识破勺子点球，镇守中路将球没收！`:`${i.name} 判断准确飞身将${s}神勇扑出！`:e==="post"?o=`${t.name} 的${s}重重砸在门框弹出！`:o=this.ballPos.y>_t?`${t.name} 发力过猛将球直接踢飞看台！`:`${t.name} 角度过刁擦柱射偏出界！`,this.kicks=[...this.kicks,{side:this.turnSide,shooterName:t.name,keeperName:i.name,result:e,detail:o,speedKmh:this.lastSpeedKmh,style:r}],this.bannerTitle=e==="goal"?"进球！":e==="save"?"门将扑出！":e==="post"?"击中门框！":"射门偏出！",this.bannerTone=a?"good":"bad",this.statusHint=`${o} · 按 R 慢镜回放，空格键 继续`,this.world.triggerCrowdExcitement(e==="goal"||e==="save"?1:.55),mt.crowdReaction(a?"cheer":"groan"),mt.setTension(.2),this.emitHud(!0)}advanceNextTurn(){if(Tb(this.kicks)){this.phase="over";const{uG:i,cG:r}=pr(this.kicks),s=i>r;this.bannerTitle=s?`胜利！ ${i} : ${r}`:`惜败 ${i} : ${r}`,this.bannerTone=s?"good":"bad",this.statusHint=s?"你率队赢得了点球大战冠军！":"电脑在点球大战中胜出，可立即再战一局",this.emitHud(!0);return}const{uT:e,cT:t}=pr(this.kicks);this.setupTurn(e===t?"user":"cpu")}recordReplaySnapshot(e,t,i,r,s,a){this.replayFrames.length>=220&&this.replayFrames.shift(),this.replayFrames.push({shooterPos:e.clone(),shooterYaw:t,shooterPose:$0(i),keeperPos:r.clone(),keeperYaw:s,keeperPose:$0(a),ballPos:this.ballPos.clone(),ballQuat:this.world.ballMesh.quaternion.clone()})}computeDesiredCamera(e){const t=new z,i=new z;let r=40;if(this.phase==="replay"&&this.replayFrames.length>0){const o=this.replaySideSign;return t.set(o*6.9,1.68,3.6),i.set(this.world.ballMesh.position.x*.45,Math.max(.85,this.world.ballMesh.position.y*.72),Math.min(4.5,this.world.ballMesh.position.z*.35)),{pos:t,target:i,fov:36}}const s=this.shooterRig?this.shooterRig.root.position.x:0,a=Math.sin(this.clockTime*1.4)*.035;if(this.phase==="user_select"||this.phase==="user_shuttle"||this.phase==="cpu_ready"||this.phase==="runup"){const o=this.cameraMode==="wide";t.set(s*.12,(o?5.2:4.4)+a,o?23.5:22),i.set(0,.9,7),r=44}else this.cameraMode==="tight"?(t.set(s*.22,1.95+a,15.8),i.set(this.keeperX*.18,1.18,0),r=38):this.cameraMode==="wide"?(t.set(s*.18,3.65+a,19.6),i.set(0,1.12,1.2),r=42):(t.set(s*.15,3.9+a,21),i.set(this.keeperX*.1,.9,6),r=42);return(this.phase==="result"||this.phase==="over")&&(t.z-=.9,i.x=It(this.world.ballMesh.position.x*.25,-1.6,1.6)),{pos:t,target:i,fov:r}}updateRefereePose(){const e=tu();e.spine.lean=.12,e.legL.abduct=.12,e.legR.abduct=.12,e.legL.knee=.14,e.legR.knee=.14,(this.phase==="user_shuttle"||this.phase==="cpu_ready")&&this.phaseTime<.55?e.armR={flex:1.45,abduct:.35,twist:.4,elbow:2.05}:this.currentOutcome==="goal"&&(e.armL={flex:1.15,abduct:.45,twist:0,elbow:.15}),this.refereeRig.applyPose(e)}updateFrame(e){var o,l;if(this.phase!=="replay"&&(this.clockTime+=e,this.phaseTime+=e,this.currentOutcome&&(this.outcomeTime+=e)),this.arrowBlockedTimer>0&&(this.arrowBlockedTimer=Math.max(0,this.arrowBlockedTimer-e)),this.phase==="replay"&&this.replayFrames.length>0){if(this.replayCursor+=e*Math.max(12,this.replayFrames.length*.42),this.replayCursor>=this.replayFrames.length-1)this.phase=this.phaseBeforeReplay,this.emitHud(!0);else{const c=Math.floor(this.replayCursor),u=this.replayFrames[c];this.shooterRig&&(this.shooterRig.root.position.copy(u.shooterPos),this.shooterRig.root.rotation.y=u.shooterYaw,this.shooterRig.applyPose(u.shooterPose)),this.keeperRig&&(this.keeperRig.root.position.copy(u.keeperPos),this.keeperRig.root.rotation.y=bb(u.keeperYaw),this.keeperRig.applyPose(u.keeperPose)),this.world.ballMesh.position.copy(u.ballPos),this.world.ballMesh.quaternion.copy(u.ballQuat)}this.world.step(this.clockTime,e*.38),this.updateCamera(e);return}if(this.phase==="user_select"){const c=Math.sin(this.clockTime*1.55)*.24;this.keeperLateralSpeed=(c-this.keeperX)*3,this.keeperX+=this.keeperLateralSpeed*e,this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*e*6.5}else if(this.phase==="user_shuttle"){const c=no[this.activeShotStyle];if(c.arrowsEnabled){const d=(this.keys.right?1:0)-(this.keys.left?1:0),p=(this.keys.up?1:0)-(this.keys.down?1:0),v=17.5,_=Math.exp(-8.5*e);this.aimVelX=(this.aimVelX+d*v*e)*_,this.aimVelY=(this.aimVelY+p*v*e)*_;const{uT:m,cT:h}=pr(this.kicks),g=m>=4||h>=5?(100-this.activeShooter.composure)/100*.22:.025,y=Math.sin(this.clockTime*2.7)*g*e,S=Math.cos(this.clockTime*3.4)*g*.7*e;this.aimX=It(this.aimX+this.aimVelX*e+y,-3.48,3.48),this.aimY=It(this.aimY+this.aimVelY*e+S,.22,2.26)}else this.aimX=0,this.aimY=1.46;this.stepShuttleBall(e);const u=1+Math.sin(this.clockTime*6)*.06;this.world.setAimReticle(!0,this.aimX,this.aimY,c.accentColor,u);const f=Math.sin(this.clockTime*1.65)*.28;this.keeperLateralSpeed=(f-this.keeperX)*3,this.keeperX+=this.keeperLateralSpeed*e,this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*e*6.5}else if(this.phase==="cpu_ready")this.updateUserKeeperFootwork(e,1.35),this.phaseTime>=this.cpuReadyDuration&&(this.replayFrames=[],this.phase="runup",this.phaseTime-=this.cpuReadyDuration,this.runupProgress=It(this.phaseTime/this.runupDuration,0,1),this.statusHint=`${this.activeShooter.name} 开始助跑 · 方向键扑救，空格加强蹬地`,this.emitHud(!0));else if(this.phase==="runup"){if(this.runupProgress=It(this.phaseTime/this.runupDuration,0,1),this.turnSide==="cpu"){const c=(this.keys.right?1:0)-(this.keys.left?1:0),u=(this.keys.up?1:0)-(this.keys.down?1:0);!this.keeperDiving&&u===0&&!this.keys.space?this.updateUserKeeperFootwork(e,1.35):this.keeperLateralSpeed=0,this.runupProgress>=.34&&(c!==0||u!==0)&&(this.committedDive={x:c,y:u,boost:this.keys.space||(((o=this.committedDive)==null?void 0:o.boost)??!1)});const f=It(.14+(this.userGK.reflex-85)*.002,.12,.17);!this.keeperDiving&&this.runupDuration-this.phaseTime<=f&&this.committedDive&&this.triggerKeeperDive(this.committedDive.x,this.committedDive.y,this.committedDive.boost)}else this.keeperLateralSpeed=0,!this.keeperDiving&&this.cpuKeeperPlan&&this.runupProgress>=this.cpuKeeperPlan.triggerAt&&this.triggerKeeperDive(this.cpuKeeperPlan.dirX,this.cpuKeeperPlan.dirY,this.cpuKeeperPlan.explosive);this.keeperDiving&&(this.keeperDiveTime+=e),this.runupProgress>=1&&(this.runupProgress=1,this.launchBallFromSpot(),this.phase="flight",this.phaseTime=0,this.postImpactTime=0,this.emitHud(!0))}else if(this.phase==="flight"){if(this.flightTime+=e,this.postImpactTime+=e,this.keeperDiving)this.keeperDiveTime+=e;else if(this.turnSide==="cpu"){const v=(this.keys.right?1:0)-(this.keys.left?1:0),_=(this.keys.up?1:0)-(this.keys.down?1:0);this.flightTime<=.24&&(v!==0||_!==0||this.keys.space)?this.triggerKeeperDive(v,_,this.keys.space):this.flightTime>.24&&this.triggerKeeperDive(0,0,!1)}this.stepBallPhysics(e);const c=this.goalScored&&this.flightTime-this.goalScoredTime>.48,u=this.keeperTouched&&!this.goalScored&&this.flightTime-this.keeperTouchTime>.56&&this.ballPos.z>.25,f=this.hitWoodwork&&!this.goalScored&&this.flightTime-this.woodworkTime>.62&&this.ballPos.z>.15,d=!this.goalScored&&this.ballPos.z<-.85,p=this.flightTime>1.75;if(c||u||f||d||p){if(!this.currentOutcome){const v=this.goalScored?"goal":this.keeperTouched?"save":this.hitWoodwork?"post":"miss";this.onOutcomeConfirmed(v)}this.phase="result",this.phaseTime=0,this.emitHud(!0)}}else this.phase==="result"?(this.flightTime+=e,this.postImpactTime+=e,this.keeperDiving&&(this.keeperDiveTime+=e),this.stepBallPhysics(e),this.phaseTime>=2.55&&this.advanceNextTurn()):this.phase==="over"&&(this.postImpactTime+=e,this.keeperDiving&&(this.keeperDiveTime+=e),this.stepBallPhysics(e));const t=this.activeShooter,i=this.activeKeeper,r=this.phase==="user_shuttle"||this.phase==="cpu_ready"?"charging":this.phase==="runup"?"runup":this.phase==="flight"||this.phase==="result"||this.phase==="over"?"follow":"idle",s=db({shooter:t,mode:r,time:this.clockTime,chargeRatio:this.phase==="cpu_ready"?It(this.phaseTime/this.cpuReadyDuration,0,1)*.5:this.phase==="user_shuttle"?.5:0,runupProgress:this.runupProgress,postImpactTime:this.postImpactTime,shotStyle:((l=this.cpuShotPlan)==null?void 0:l.style)??this.activeShotStyle,overcharged:this.skiedPosture,outcome:this.currentOutcome,outcomeTime:this.outcomeTime});if(r==="runup"&&s.stepIndex!==this.lastFootstepIdx&&(this.lastFootstepIdx=s.stepIndex,mt.footstep(.65+this.runupProgress*.35),s.pos.y<.04&&this.world.spawnTurfBurst(s.pos,4,.05,.45)),this.shooterRig){const c=this.shooterRig.root,u=r==="idle"&&this.phaseTime<.05;c.position.lerp(s.pos,u?1:.28);let f=s.yaw-c.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;c.rotation.y+=f*(u?1:.28),this.shooterRig.applyPose(s.pose,u)}const a=mb({keeper:i,mode:this.keeperDiving?"diving":"ready",time:this.clockTime,xPos:this.keeperX,shufflePhase:this.keeperShufflePhase,shuffleSpeed:this.keeperLateralSpeed,preDiveX:this.turnSide==="cpu"&&this.committedDive?this.committedDive.x:0,preDiveY:this.turnSide==="cpu"&&this.committedDive?this.committedDive.y:0,diveStartX:this.keeperDiveStartX,diveDirX:this.keeperDiveDirX,diveDirY:this.keeperDiveDirY,diveTime:this.keeperDiveTime,explosiveBoost:this.keeperExplosive,ballPos:this.ballPos,keeperSaved:this.keeperTouched&&!this.goalScored,outcome:this.currentOutcome,outcomeTime:this.outcomeTime});if(a.justLanded&&!this.keeperLanded&&(this.keeperLanded=!0,mt.footstep(.95),this.world.spawnTurfBurst(a.pos,12,.1,.7)),this.keeperRig){const c=this.keeperRig.root,u=!this.keeperDiving&&this.phaseTime<.05;c.position.lerp(a.pos,u?1:.32);let f=a.yaw-c.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;c.rotation.y+=f*(u?1:.32),this.keeperRig.applyPose(a.pose,u||this.keeperDiving)}this.updateRefereePose(),(this.phase==="runup"||this.phase==="flight"||this.phase==="result"&&this.phaseTime<.9)&&this.recordReplaySnapshot(s.pos,s.yaw,s.pose,a.pos,a.yaw,a.pose),this.world.step(this.clockTime,e),this.updateCamera(e),this.hudThrottle+=e,this.hudThrottle>=.045&&(this.hudThrottle=0,this.emitHud(!1))}updateUserKeeperFootwork(e,t){const i=(this.keys.right?1:0)-(this.keys.left?1:0),r=2.45;if(this.keeperLateralSpeed=i*r,i!==0){const s=Math.floor(this.keeperShufflePhase/Math.PI);this.keeperX=It(this.keeperX+this.keeperLateralSpeed*e,-t,t),this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*e*6.8,Math.floor(this.keeperShufflePhase/Math.PI)!==s&&mt.footstep(.45)}}updateCamera(e){const t=this.computeDesiredCamera(e),i=1-Math.exp(-6.5*e);this.camPos.lerp(t.pos,i),this.camTarget.lerp(t.target,i),Math.abs(this.camera.fov-t.fov)>.05&&(this.camera.fov+=(t.fov-this.camera.fov)*i,this.camera.updateProjectionMatrix()),this.camShake=Math.max(0,this.camShake-e*.65);const r=(Math.random()-.5)*this.camShake,s=(Math.random()-.5)*this.camShake;this.camera.position.set(this.camPos.x+r,this.camPos.y+s,this.camPos.z),this.camera.lookAt(this.camTarget)}emitHud(e){var c;const{uT:t,cT:i,uG:r,cG:s}=pr(this.kicks),a=this.activeShooter,o=this.activeKeeper,l=this.phase==="user_select"?this.selectedStyle:this.phase==="user_shuttle"?this.activeShotStyle:((c=this.cpuShotPlan)==null?void 0:c.style)??this.activeShotStyle;this.onHudUpdate({phase:this.phase,turnSide:this.turnSide,shooter:a,keeper:o,shotStyle:l,shuttlePos:this.shuttlePos,shuttleLocked:this.shuttleLocked,shuttleGrade:this.shuttleGrade,shuttleGoalPct:this.shuttleGoalPct,arrowBlockedFlash:this.arrowBlockedTimer>0,kicks:this.kicks,userGoals:r,cpuGoals:s,userTaken:t,cpuTaken:i,roundNumber:Math.max(1,(this.turnSide==="user"?t:i)+(this.currentOutcome?0:1)),suddenDeath:t>=5&&i>=5,bannerTitle:this.bannerTitle,bannerTone:this.bannerTone,statusHint:this.statusHint,keeperIntuition:this.turnSide==="cpu"?this.keeperIntuition:null,activeArrows:{up:this.keys.up,down:this.keys.down,left:this.keys.left,right:this.keys.right,space:this.keys.space},committedDive:this.committedDive?{x:this.committedDive.x,y:this.committedDive.y}:null,cameraMode:this.cameraMode,canReplay:(this.phase==="result"||this.phase==="over")&&this.replayFrames.length>8,isReplaying:this.phase==="replay",lastSpeedKmh:this.lastSpeedKmh})}}function bb(n){return Number.isFinite(n)?n:0}const Ab={classic:"直线爆射",curved:"弧线助跑",stutter:"节奏变奏"};function Rb(n){return n?n.x<0&&n.y>0?"↖ 左上死角飞扑":n.x>0&&n.y>0?"↗ 右上死角飞扑":n.x<0&&n.y<0?"↙ 左下贴地扑救":n.x>0&&n.y<0?"↘ 右下贴地扑救":n.x<0?"← 左侧飞身扑救":n.x>0?"→ 右侧飞身扑救":n.y>0?"↑ 中路跃起托救":n.y<0?"↓ 中路下蹲封堵":"● 稳守中路":"中路待命"}function Pb(){const[n,e]=yn.useState("select"),[t,i]=yn.useState(Br[0].id),[r,s]=yn.useState(()=>vs.slice(0,5).map(D=>D.id)),[a,o]=yn.useState(!1),[l,c]=yn.useState(null),[u,f]=yn.useState(null),d=yn.useRef(null),p=yn.useRef(null),v=yn.useRef(null),_=!!(t&&r.length===5),m=yn.useCallback((D,k)=>{mt.unlock();const U=Br.find(ce=>ce.id===D)??Br[0],G=k.map(ce=>vs.find(we=>we.id===ce)),K=Br.filter(ce=>ce.id!==U.id).sort((ce,we)=>Lu(we)-Lu(ce)),re=Jo(K)[0],j=vs.filter(ce=>!k.includes(ce.id)).sort((ce,we)=>Cu(we)-Cu(ce)).slice(0,11),le=Jo(j).slice(0,5);c({userGK:U,cpuGK:re,userTeam:G,cpuTeam:le,matchSeed:Date.now()}),e("match")},[]),h=yn.useCallback(()=>{mt.unlock(),i(Jo(Br)[0].id),s(Jo(vs).slice(0,5).map(D=>D.id))},[]);yn.useEffect(()=>{const D=k=>{k.code==="KeyM"&&!k.repeat&&o(mt.toggleMute()),n==="select"&&!k.repeat&&(k.code==="KeyR"?h():k.code==="Enter"&&t&&r.length===5&&m(t,r))};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[n,t,r,h,m]),yn.useEffect(()=>{if(n!=="match"||!l||!d.current)return;const D=new Eb(d.current,{userGK:l.userGK,cpuGK:l.cpuGK,userTeam:l.userTeam,cpuTeam:l.cpuTeam,onHudUpdate:k=>f(k),onShuttleFrame:k=>{v.current&&(v.current.style.left=`${((k+1)*50).toFixed(2)}%`)}});return p.current=D,()=>{D.destroy(),p.current=null}},[n,l]);const g=D=>{s(k=>k.includes(D)?k.filter(U=>U!==D):k.length>=5?k:[...k,D])};if(n==="select")return V.jsxs("main",{className:"select-shell",children:[V.jsxs("header",{className:"select-header",children:[V.jsxs("div",{children:[V.jsx("h1",{children:"巅峰点球大战 · 三维拟真赛场"}),V.jsxs("p",{children:["全三维人体骨骼动力学与真实球路物理重制。射门采用",V.jsx("strong",{children:"「四大脚法选择 + 中心完美点穿梭球定格」"}),"机制， 守门全程使用键盘 ",V.jsx("strong",{children:"↑ ↓ ← →"})," 横移封堵与八向飞身扑救。"]})]}),V.jsx("button",{id:"btn-toggle-audio-select",className:"btn",onClick:()=>o(mt.toggleMute()),children:a?"音效：已静音 (M)":"音效：球场原声 (M)"})]}),V.jsxs("section",{className:"controls-legend-bar","aria-label":"键盘操作指南",children:[V.jsxs("span",{className:"legend-item",children:[V.jsx("strong",{children:"四大射门方式："}),V.jsx("span",{className:"kbd",children:"1"})," 推射死角 · ",V.jsx("span",{className:"kbd",children:"2"})," 大力爆射 ·"," ",V.jsx("span",{className:"kbd",children:"3"})," 勺子点球（固定中路） · ",V.jsx("span",{className:"kbd",children:"4"})," 节奏变化小跳步"]}),V.jsxs("span",{className:"legend-item",children:[V.jsx("strong",{children:"中心完美点校准："}),"先选方式，再盯紧左右穿梭小球，对准",V.jsx("strong",{children:"中心完美点"}),"按下 ",V.jsx("span",{className:"kbd",children:"空格"})," 定格射门"]}),V.jsxs("span",{className:"legend-item",children:[V.jsx("strong",{children:"门将扑救："}),"助跑初段 ",V.jsx("span",{className:"kbd",children:"←"})," ",V.jsx("span",{className:"kbd",children:"→"})," 横移 · 起脚瞬间"," ",V.jsx("span",{className:"kbd",children:"↑"}),V.jsx("span",{className:"kbd",children:"↓"}),V.jsx("span",{className:"kbd",children:"←"}),V.jsx("span",{className:"kbd",children:"→"})," 八向真实飞扑"]})]}),V.jsx("div",{className:"select-layout",children:V.jsxs("div",{className:"roster-column",children:[V.jsxs("div",{className:"select-action-bar",children:[V.jsx("div",{className:"select-lineup-summary",children:(()=>{const D=Br.find(U=>U.id===t),k=r.map(U=>vs.find(G=>G.id===U)).filter(Boolean);return V.jsxs(V.Fragment,{children:[V.jsxs("strong",{children:["阵容：",D?D.name:"未选门将"," · 主罚 ",r.length,"/5"]}),V.jsx("span",{className:"select-lineup-minis",children:k.map(U=>U.name).join(" · ")||"点选下方卡片组建五人主罚顺序"})]})})()}),V.jsxs("div",{className:"action-stack",children:[V.jsx("button",{id:"btn-random-squad",className:"btn",onClick:h,children:"随机阵容 (R)"}),V.jsx("button",{id:"btn-start-match",className:"btn btn-primary",disabled:!_,onClick:()=>m(t,r),children:"登场开赛 (Enter)"})]})]}),V.jsxs("section",{className:"roster-section",children:[V.jsxs("h2",{children:["首发门将选择",V.jsx("span",{children:"点击卡片选择首发门将"})]}),V.jsx("div",{className:"athlete-grid",children:Br.map(D=>{const k=t===D.id;return V.jsxs("div",{id:`card-gk-${D.id}`,className:`athlete-card ${k?"selected":""}`,onClick:()=>i(D.id),children:[V.jsxs("div",{className:"card-top",children:[V.jsxs("div",{className:"gk-card-identity",children:[V.jsx("img",{src:D.avatar,alt:D.name,className:"gk-avatar"}),V.jsxs("div",{children:[V.jsxs("div",{className:"athlete-name",children:[D.name," ·「",D.nick,"」"]}),V.jsxs("div",{className:"athlete-meta",children:[Math.round(D.appearance.height*100),"厘米 · #",D.number]})]})]}),V.jsx("div",{className:"ovr-badge",children:Lu(D)})]}),V.jsx("div",{className:"stat-bars",children:[["反应",D.reflex],["臂展",D.reach],["预判",D.mind]].map(([U,G])=>V.jsxs("div",{className:"stat-line",children:[V.jsx("span",{className:"lbl",children:U}),V.jsx("div",{className:"stat-track",children:V.jsx("div",{className:"stat-fill gk",style:{width:`${G}%`}})}),V.jsx("span",{className:"stat-val",children:G})]},U))})]},D.id)})})]}),V.jsxs("section",{className:"roster-section",children:[V.jsxs("h2",{children:["5 名点球主罚手（已选 ",r.length,"/5）",V.jsx("span",{children:"点选顺序即出场主罚顺序 · 再点取消"})]}),V.jsx("div",{className:"athlete-grid",children:vs.map(D=>{const k=r.indexOf(D.id),U=k>=0,G=!U&&r.length>=5;return V.jsxs("div",{id:`card-player-${D.id}`,className:`athlete-card ${U?"selected":""} ${G?"dimmed":""}`,onClick:()=>g(D.id),children:[V.jsxs("div",{className:"card-top",children:[V.jsxs("div",{className:"gk-card-identity",children:[V.jsx("img",{src:D.avatar,alt:D.name,className:"gk-avatar"}),V.jsxs("div",{children:[V.jsxs("div",{className:"athlete-name",children:[D.name," ·「",D.nick,"」"]}),V.jsxs("div",{className:"athlete-meta",children:[D.pos," · ",D.foot==="L"?"左脚":"右脚"," ·"," ",Ab[D.runupStyle]]})]})]}),V.jsx("div",{className:"ovr-badge",children:U?`#${k+1}`:Cu(D)})]}),V.jsx("div",{className:"stat-bars",children:[["力量",D.power],["精准",D.accuracy],["心理",D.composure]].map(([K,re])=>V.jsxs("div",{className:"stat-line",children:[V.jsx("span",{className:"lbl",children:K}),V.jsx("div",{className:"stat-track",children:V.jsx("div",{className:"stat-fill",style:{width:`${re}%`}})}),V.jsx("span",{className:"stat-val",children:re})]},K))})]},D.id)})})]})]})})]});const y=(u==null?void 0:u.kicks)??[],{uT:S,cT:b,uG:T,cG:x}=pr(y),M=Math.min(8,Math.max(5,S,b)),N=D=>{const k=y.filter(G=>G.side===D),U=k.length>M?k.slice(-M):k;return V.jsx("div",{className:"pip-row",children:Array.from({length:M}).map((G,K)=>{const re=U[K],Te=re?re.result==="goal"?"pip goal":"pip miss":"pip";return V.jsx("span",{className:Te},K)})})},A=D=>{if(!l)return null;const k=D==="user"?l.userTeam:l.cpuTeam,U=D==="user"?l.userGK:l.cpuGK,G=y.filter(Te=>Te.side===D),K=(D==="user"?S:b)%5,re=u&&u.phase!=="over"&&u.turnSide===D;return V.jsxs("div",{className:"sheet-card",children:[V.jsxs("div",{className:"sheet-head",children:[V.jsx("strong",{children:D==="user"?"我方阵容":"电脑阵容"}),V.jsxs("span",{style:{color:"var(--text-muted)",display:"inline-flex",alignItems:"center",gap:6},children:[V.jsx("img",{src:U.avatar,alt:U.name,className:"gk-mini-avatar"}),"门将：",U.name,"「",U.nick,"」(",Math.round(U.appearance.height*100),"厘米)"]})]}),V.jsx("div",{className:"sheet-taker-list",children:k.map((Te,j)=>{const le=G.filter((we,_e)=>_e%5===j),ce=re&&j===K;return V.jsxs("div",{className:`taker-chip ${ce?"current":""}`,children:[V.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:4,fontWeight:700},children:[V.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,whiteSpace:"nowrap"},children:[V.jsx("img",{src:Te.avatar,alt:Te.name,className:"gk-mini-avatar"}),j+1,". ",Te.name]}),V.jsx("span",{style:{color:"var(--text-muted)"},children:Te.foot==="L"?"左脚":"右脚"})]}),V.jsx("div",{style:{color:"var(--text-muted)",letterSpacing:2},children:le.length===0?"○":le.map((we,_e)=>V.jsx("span",{style:{color:we.result==="goal"?"var(--turf-emerald)":"var(--danger-red)"},children:we.result==="goal"?"●":"✕"},_e))})]},Te.id)})})]})},L=no[(u==null?void 0:u.shotStyle)??"placed"],P=(.5-L.perfectHalfWidth*.5)*100,I=L.perfectHalfWidth*100,R=(.5-L.goodHalfWidth*.5)*100,O=L.goodHalfWidth*100,X=u&&u.turnSide==="user"&&(u.phase==="user_shuttle"||u.phase==="runup"&&u.shuttleLocked);return V.jsxs("main",{className:"match-shell",children:[V.jsxs("div",{className:"viewport-frame",children:[V.jsx("div",{ref:d,className:"webgl-mount",id:"stadium-3d-canvas"}),V.jsxs("div",{className:"scorebug",children:[V.jsxs("div",{className:"scorebug-top",children:[V.jsx("span",{children:"点球大战"}),V.jsx("span",{children:u!=null&&u.suddenDeath?"突然死亡":`第 ${Math.min(5,(u==null?void 0:u.roundNumber)??1)} / 5 轮`})]}),V.jsxs("div",{className:"scorebug-teams",children:[V.jsxs("div",{className:"team-side",children:[V.jsxs("span",{className:"team-label",children:[V.jsx("span",{className:"kit-swatch",style:{background:"#2563eb"}}),"我方"]}),N("user")]}),V.jsxs("div",{className:"score-digits",children:[T," : ",x]}),V.jsxs("div",{className:"team-side right",children:[V.jsxs("span",{className:"team-label",children:["电脑",V.jsx("span",{className:"kit-swatch",style:{background:"#be123c"}})]}),N("cpu")]})]})]}),V.jsxs("div",{className:"top-toolbar",children:[(u==null?void 0:u.canReplay)&&V.jsx("button",{id:"btn-instant-replay",className:"hud-btn highlight",onClick:()=>{var D;return(D=p.current)==null?void 0:D.toggleReplay()},children:u.isReplaying?"退出回放 (R)":"慢镜回放 (R)"}),V.jsxs("button",{id:"btn-cycle-camera",className:"hud-btn",onClick:()=>{var D;return(D=p.current)==null?void 0:D.cycleCameraMode()},children:["机位：",(u==null?void 0:u.cameraMode)==="tight"?"近景特写":(u==null?void 0:u.cameraMode)==="wide"?"全景看台":"广播主视角"," (V)"]}),V.jsx("button",{id:"btn-toggle-audio-match",className:"hud-btn",onClick:()=>o(mt.toggleMute()),children:a?"静音 (M)":"音效 (M)"}),V.jsx("button",{id:"btn-exit-select",className:"hud-btn",onClick:()=>e("select"),children:"重新选人"})]}),(u==null?void 0:u.isReplaying)&&V.jsx("div",{className:"replay-badge",children:"慢镜回放 · 四成速度"}),u&&u.bannerTitle&&u.phase==="result"&&V.jsx("div",{className:`result-banner ${u.bannerTone}`,children:V.jsx("div",{className:"title",children:u.bannerTitle})}),u&&u.phase==="user_select"&&V.jsxs("section",{className:"tactical-panel",id:"shot-mode-selector","aria-label":"选择射门方式",children:[V.jsxs("div",{className:"tactical-head",children:[V.jsxs("div",{className:"tactical-title",children:[V.jsx("span",{className:"step-badge",children:"一"}),"方式"]}),V.jsx("span",{className:"tactical-sub",children:"1–4 · 空格"})]}),V.jsx("div",{className:"mode-list",children:$r.map(D=>{const k=no[D],U=u.shotStyle===D;return V.jsxs("button",{id:`btn-mode-${D}`,className:`mode-row ${U?"selected":""}`,"aria-pressed":U,title:`${k.name}：${k.arrowsEnabled?k.shuttleDesc:"固定中路 · 极速穿梭"}`,"aria-label":`${k.keyNum} ${k.name}：${k.arrowsEnabled?k.shuttleDesc:"固定中路 · 极速穿梭"}，点击确认`,onClick:()=>{var G;return(G=p.current)==null?void 0:G.selectShotStyle(D,!0)},children:[V.jsx("span",{className:"mode-key",children:k.keyNum}),V.jsx("span",{className:"mode-name",children:D==="stutter"?"节奏小跳步":k.name})]},D)})})]}),X&&u&&V.jsxs("section",{className:"tactical-panel",id:"shuttle-calibration-panel","aria-label":"中心完美点穿梭校准",children:[V.jsxs("div",{className:"shuttle-mode-strip",children:[V.jsxs("div",{className:"tactical-title",children:[V.jsx("span",{className:"step-badge",children:"二"}),"中心校准"]}),!u.shuttleLocked&&V.jsx("button",{id:"btn-back-style",className:"reselect-btn",title:"重选主罚方式（制表键）","aria-label":"重选主罚方式（制表键）",onClick:()=>{var D;return(D=p.current)==null?void 0:D.backToStyleSelect()},children:"重选"})]}),V.jsx("div",{className:"shuttle-badges",children:L.arrowsEnabled?V.jsx("span",{className:"rule-tag",children:"方向键瞄准 · 空格定格"}):V.jsx("span",{className:`rule-tag locked-center ${u.arrowBlockedFlash?"flash-warn":""}`,children:u.arrowBlockedFlash?"方向无效 · 固定中路":"固定中路 · 空格定格"})}),V.jsxs("div",{className:"shuttle-bar-wrap",children:[V.jsxs("div",{className:"shuttle-track",id:"shuttle-track",children:[V.jsx("div",{className:"shuttle-good-zone",style:{left:`${R}%`,width:`${O}%`}}),V.jsx("div",{className:"shuttle-perfect-zone",style:{left:`${P}%`,width:`${I}%`}}),V.jsx("div",{className:"shuttle-center-pin"}),V.jsx("div",{ref:v,id:"shuttle-orb",className:`shuttle-orb ${u.shuttleLocked?`locked ${u.shuttleGrade??""}`:""}`,style:{left:`${((u.shuttlePos+1)*50).toFixed(2)}%`}})]}),V.jsx("div",{className:"shuttle-scale-row",children:V.jsx("span",{className:"center-lbl",children:"▲ 对准中心按空格"})})]}),u.shuttleLocked&&u.shuttleGrade&&V.jsx("div",{className:`shuttle-result-callout ${u.shuttleGrade}`,children:u.shuttleGrade==="perfect"?"完美定格中心点！":u.shuttleGrade==="good"?"接近中心点 · 射门已锁定":"偏离中心 · 留意球路"})]}),u&&V.jsxs("div",{className:"bottom-hud",children:[V.jsxs("div",{className:"duel-box",children:[V.jsxs("div",{className:"duel-row",children:[V.jsx("span",{children:"主罚射手"}),V.jsxs("strong",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[V.jsx("img",{src:u.shooter.avatar,alt:u.shooter.name,className:"gk-mini-avatar"}),u.shooter.name]}),V.jsx("span",{children:u.shooter.foot==="L"?"左脚":"右脚"})]}),V.jsxs("div",{className:"duel-row",children:[V.jsx("span",{children:"把守球门"}),V.jsxs("strong",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[V.jsx("img",{src:u.keeper.avatar,alt:u.keeper.name,className:"gk-mini-avatar"}),u.keeper.name]})]}),u.keeperIntuition&&V.jsx("div",{className:"intuition-tip",children:u.keeperIntuition})]}),V.jsx("div",{className:"status-pill",children:u.statusHint}),V.jsxs("div",{className:"keycluster-box",children:[V.jsx("div",{className:"keycluster-label",children:u.turnSide==="cpu"?V.jsxs(V.Fragment,{children:[V.jsx("strong",{children:"门将键盘操控"}),V.jsx("span",{children:Rb(u.committedDive)})]}):u.phase==="user_select"?V.jsxs(V.Fragment,{children:[V.jsx("strong",{children:"选方式"}),V.jsx("span",{children:"1–4 · 空格"})]}):L.arrowsEnabled?V.jsxs(V.Fragment,{children:[V.jsx("strong",{children:"射手键盘操控"}),V.jsx("span",{children:"方向键瞄准 · 空格定格"})]}):V.jsxs(V.Fragment,{children:[V.jsx("strong",{children:"勺子中路锁定"}),V.jsx("span",{children:"方向键无效 · 空格定格"})]})}),V.jsxs("div",{className:"dpad-grid","aria-hidden":"true",children:[V.jsx("span",{}),V.jsx("span",{className:`keycap ${u.activeArrows.up?"lit":""}`,children:"↑"}),V.jsx("span",{}),V.jsx("span",{className:`keycap ${u.activeArrows.left?"lit":""}`,children:"←"}),V.jsx("span",{className:`keycap ${u.activeArrows.down?"lit":""}`,children:"↓"}),V.jsx("span",{className:`keycap ${u.activeArrows.right?"lit":""}`,children:"→"})]})]})]}),(u==null?void 0:u.phase)==="over"&&l&&V.jsx("div",{className:"over-modal",children:V.jsxs("div",{className:"over-card",children:[V.jsx("h2",{children:u.bannerTitle}),V.jsx("div",{style:{color:"var(--text-secondary)",fontSize:14},children:u.statusHint}),V.jsxs("div",{className:"action-stack",style:{justifyContent:"center",marginTop:6},children:[V.jsx("button",{id:"btn-rematch",className:"btn btn-primary",onClick:()=>m(l.userGK.id,l.userTeam.map(D=>D.id)),children:"同阵容再战"}),u.canReplay&&V.jsx("button",{id:"btn-over-replay",className:"btn",onClick:()=>{var D;return(D=p.current)==null?void 0:D.toggleReplay()},children:"制胜球慢镜 (R)"}),V.jsx("button",{id:"btn-over-reselect",className:"btn",onClick:()=>e("select"),children:"重新组建阵容"})]})]})})]}),V.jsxs("section",{className:"match-sheets",children:[A("user"),A("cpu")]})]})}o_(document.getElementById("root")).render(V.jsx(Pb,{}));
