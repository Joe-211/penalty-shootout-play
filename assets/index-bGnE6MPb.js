(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Gm={exports:{}},kc={},Hm={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),sx=Symbol.for("react.portal"),ax=Symbol.for("react.fragment"),ox=Symbol.for("react.strict_mode"),lx=Symbol.for("react.profiler"),cx=Symbol.for("react.provider"),ux=Symbol.for("react.context"),hx=Symbol.for("react.forward_ref"),fx=Symbol.for("react.suspense"),dx=Symbol.for("react.memo"),px=Symbol.for("react.lazy"),yp=Symbol.iterator;function mx(n){return n===null||typeof n!="object"?null:(n=yp&&n[yp]||n["@@iterator"],typeof n=="function"?n:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wm=Object.assign,Xm={};function fa(n,e,t){this.props=n,this.context=e,this.refs=Xm,this.updater=t||Vm}fa.prototype.isReactComponent={};fa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function qm(){}qm.prototype=fa.prototype;function Kf(n,e,t){this.props=n,this.context=e,this.refs=Xm,this.updater=t||Vm}var jf=Kf.prototype=new qm;jf.constructor=Kf;Wm(jf,fa.prototype);jf.isPureReactComponent=!0;var Sp=Array.isArray,Ym=Object.prototype.hasOwnProperty,Zf={current:null},$m={key:!0,ref:!0,__self:!0,__source:!0};function Km(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ym.call(e,i)&&!$m.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ao,type:n,key:s,ref:a,props:r,_owner:Zf.current}}function gx(n,e){return{$$typeof:Ao,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Jf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ao}function vx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Mp=/\/+/g;function su(n,e){return typeof n=="object"&&n!==null&&n.key!=null?vx(""+n.key):e.toString(36)}function Ll(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Ao:case sx:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+su(a,0):i,Sp(r)?(t="",n!=null&&(t=n.replace(Mp,"$&/")+"/"),Ll(r,e,t,"",function(c){return c})):r!=null&&(Jf(r)&&(r=gx(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Mp,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Sp(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+su(s,o);a+=Ll(s,e,t,l,r)}else if(l=mx(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+su(s,o++),a+=Ll(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Uo(n,e,t){if(n==null)return n;var i=[],r=0;return Ll(n,i,"","",function(s){return e.call(t,s,r++)}),i}function _x(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var En={current:null},Dl={transition:null},xx={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:Zf};function jm(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Uo,forEach:function(n,e,t){Uo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Uo(n,function(){e++}),e},toArray:function(n){return Uo(n,function(e){return e})||[]},only:function(n){if(!Jf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=fa;Ke.Fragment=ax;Ke.Profiler=lx;Ke.PureComponent=Kf;Ke.StrictMode=ox;Ke.Suspense=fx;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx;Ke.act=jm;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Wm({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Zf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)Ym.call(e,l)&&!$m.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ao,type:n.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(n){return n={$$typeof:ux,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:cx,_context:n},n.Consumer=n};Ke.createElement=Km;Ke.createFactory=function(n){var e=Km.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:hx,render:n}};Ke.isValidElement=Jf;Ke.lazy=function(n){return{$$typeof:px,_payload:{_status:-1,_result:n},_init:_x}};Ke.memo=function(n,e){return{$$typeof:dx,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=Dl.transition;Dl.transition={};try{n()}finally{Dl.transition=e}};Ke.unstable_act=jm;Ke.useCallback=function(n,e){return En.current.useCallback(n,e)};Ke.useContext=function(n){return En.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return En.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return En.current.useEffect(n,e)};Ke.useId=function(){return En.current.useId()};Ke.useImperativeHandle=function(n,e,t){return En.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return En.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return En.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return En.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return En.current.useReducer(n,e,t)};Ke.useRef=function(n){return En.current.useRef(n)};Ke.useState=function(n){return En.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return En.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return En.current.useTransition()};Ke.version="18.3.1";Hm.exports=Ke;var Et=Hm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=Et,Sx=Symbol.for("react.element"),Mx=Symbol.for("react.fragment"),wx=Object.prototype.hasOwnProperty,Tx=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ex={key:!0,ref:!0,__self:!0,__source:!0};function Zm(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)wx.call(e,i)&&!Ex.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Sx,type:n,key:s,ref:a,props:r,_owner:Tx.current}}kc.Fragment=Mx;kc.jsx=Zm;kc.jsxs=Zm;Gm.exports=kc;var O=Gm.exports,Jm={exports:{}},$n={},Qm={exports:{}},eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,k){var W=F.length;F.push(k);e:for(;0<W;){var Z=W-1>>>1,ae=F[Z];if(0<r(ae,k))F[Z]=k,F[W]=ae,W=Z;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var k=F[0],W=F.pop();if(W!==k){F[0]=W;e:for(var Z=0,ae=F.length,we=ae>>>1;Z<we;){var J=2*(Z+1)-1,V=F[J],se=J+1,le=F[se];if(0>r(V,W))se<ae&&0>r(le,V)?(F[Z]=le,F[se]=W,Z=se):(F[Z]=V,F[J]=W,Z=J);else if(se<ae&&0>r(le,W))F[Z]=le,F[se]=W,Z=se;else break e}}return k}function r(F,k){var W=F.sortIndex-k.sortIndex;return W!==0?W:F.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,d=3,m=!1,v=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var k=t(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=F)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=t(c)}}function S(F){if(_=!1,y(F),!v)if(t(l)!==null)v=!0,X(E);else{var k=t(c);k!==null&&G(S,k.startTime-F)}}function E(F,k){v=!1,_&&(_=!1,u(M),M=-1),m=!0;var W=d;try{for(y(k),f=t(l);f!==null&&(!(f.expirationTime>k)||F&&!L());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,d=f.priorityLevel;var ae=Z(f.expirationTime<=k);k=n.unstable_now(),typeof ae=="function"?f.callback=ae:f===t(l)&&i(l),y(k)}else i(l);f=t(l)}if(f!==null)var we=!0;else{var J=t(c);J!==null&&G(S,J.startTime-k),we=!1}return we}finally{f=null,d=W,m=!1}}var w=!1,x=null,M=-1,C=5,A=-1;function L(){return!(n.unstable_now()-A<C)}function D(){if(x!==null){var F=n.unstable_now();A=F;var k=!0;try{k=x(!0,F)}finally{k?U():(w=!1,x=null)}}else w=!1}var U;if(typeof g=="function")U=function(){g(D)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,N=P.port2;P.port1.onmessage=D,U=function(){N.postMessage(null)}}else U=function(){p(D,0)};function X(F){x=F,w||(w=!0,U())}function G(F,k){M=p(function(){F(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){v||m||(v=!0,X(E))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var W=d;d=k;try{return F()}finally{d=W}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=d;d=F;try{return k()}finally{d=W}},n.unstable_scheduleCallback=function(F,k,W){var Z=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Z+W:Z):W=Z,F){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=W+ae,F={id:h++,callback:k,priorityLevel:F,startTime:W,expirationTime:ae,sortIndex:-1},W>Z?(F.sortIndex=W,e(c,F),t(l)===null&&F===t(c)&&(_?(u(M),M=-1):_=!0,G(S,W-Z))):(F.sortIndex=ae,e(l,F),v||m||(v=!0,X(E))),F},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(F){var k=d;return function(){var W=d;d=k;try{return F.apply(this,arguments)}finally{d=W}}}})(eg);Qm.exports=eg;var bx=Qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax=Et,Yn=bx;function ue(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tg=new Set,io={};function cs(n,e){ta(n,e),ta(n+"Capture",e)}function ta(n,e){for(io[n]=e,n=0;n<e.length;n++)tg.add(e[n])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=Object.prototype.hasOwnProperty,Rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wp={},Tp={};function Px(n){return fh.call(Tp,n)?!0:fh.call(wp,n)?!1:Rx.test(n)?Tp[n]=!0:(wp[n]=!0,!1)}function Cx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Lx(n,e,t,i){if(e===null||typeof e>"u"||Cx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){an[n]=new bn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];an[e]=new bn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){an[n]=new bn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){an[n]=new bn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){an[n]=new bn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){an[n]=new bn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){an[n]=new bn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){an[n]=new bn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){an[n]=new bn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function ed(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Qf,ed);an[e]=new bn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Qf,ed);an[e]=new bn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Qf,ed);an[e]=new bn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){an[n]=new bn(n,1,!1,n.toLowerCase(),null,!1,!1)});an.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){an[n]=new bn(n,1,!1,n.toLowerCase(),null,!0,!0)});function td(n,e,t,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lx(e,t,r,i)&&(t=null),i||r===null?Px(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var nr=Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Us=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),ig=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),mh=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function xa(n){return n===null||typeof n!="object"?null:(n=Ep&&n[Ep]||n["@@iterator"],typeof n=="function"?n:null)}var Nt=Object.assign,au;function Oa(n){if(au===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+n}var ou=!1;function lu(n,e){if(!n||ou)return"";ou=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{ou=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Oa(n):""}function Dx(n){switch(n.tag){case 5:return Oa(n.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return n=lu(n.type,!1),n;case 11:return n=lu(n.type.render,!1),n;case 1:return n=lu(n.type,!0),n;default:return""}}function gh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ks:return"Fragment";case Us:return"Portal";case dh:return"Profiler";case nd:return"StrictMode";case ph:return"Suspense";case mh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ig:return(n.displayName||"Context")+".Consumer";case ng:return(n._context.displayName||"Context")+".Provider";case id:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rd:return e=n.displayName||null,e!==null?e:gh(n.type)||"Memo";case fr:e=n._payload,n=n._init;try{return gh(n(e))}catch{}}return null}function Nx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gh(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ix(n){var e=sg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Fo(n){n._valueTracker||(n._valueTracker=Ix(n))}function ag(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=sg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Zl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vh(n,e){var t=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function bp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Dr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(n,e){e=e.checked,e!=null&&td(n,"checked",e,!1)}function _h(n,e){og(n,e);var t=Dr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?xh(n,e.type,t):e.hasOwnProperty("defaultValue")&&xh(n,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ap(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function xh(n,e,t){(e!=="number"||Zl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var za=Array.isArray;function Ys(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Dr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function yh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ue(92));if(za(t)){if(1<t.length)throw Error(ue(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Dr(t)}}function lg(n,e){var t=Dr(e.value),i=Dr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Pp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function cg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?cg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Oo,ug=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ro(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ux=["Webkit","ms","Moz","O"];Object.keys(Wa).forEach(function(n){Ux.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Wa[e]=Wa[n]})});function hg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Wa.hasOwnProperty(n)&&Wa[n]?(""+e).trim():e+"px"}function fg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var kx=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mh(n,e){if(e){if(kx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function wh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=null;function sd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Eh=null,$s=null,Ks=null;function Cp(n){if(n=Co(n)){if(typeof Eh!="function")throw Error(ue(280));var e=n.stateNode;e&&(e=Gc(e),Eh(n.stateNode,n.type,e))}}function dg(n){$s?Ks?Ks.push(n):Ks=[n]:$s=n}function pg(){if($s){var n=$s,e=Ks;if(Ks=$s=null,Cp(n),e)for(n=0;n<e.length;n++)Cp(e[n])}}function mg(n,e){return n(e)}function gg(){}var cu=!1;function vg(n,e,t){if(cu)return n(e,t);cu=!0;try{return mg(n,e,t)}finally{cu=!1,($s!==null||Ks!==null)&&(gg(),pg())}}function so(n,e){var t=n.stateNode;if(t===null)return null;var i=Gc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ue(231,e,typeof t));return t}var bh=!1;if(Zi)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){bh=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{bh=!1}function Fx(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var Xa=!1,Jl=null,Ql=!1,Ah=null,Ox={onError:function(n){Xa=!0,Jl=n}};function zx(n,e,t,i,r,s,a,o,l){Xa=!1,Jl=null,Fx.apply(Ox,arguments)}function Bx(n,e,t,i,r,s,a,o,l){if(zx.apply(this,arguments),Xa){if(Xa){var c=Jl;Xa=!1,Jl=null}else throw Error(ue(198));Ql||(Ql=!0,Ah=c)}}function us(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function _g(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Lp(n){if(us(n)!==n)throw Error(ue(188))}function Gx(n){var e=n.alternate;if(!e){if(e=us(n),e===null)throw Error(ue(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Lp(r),n;if(s===i)return Lp(r),e;s=s.sibling}throw Error(ue(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ue(189))}}if(t.alternate!==i)throw Error(ue(190))}if(t.tag!==3)throw Error(ue(188));return t.stateNode.current===t?n:e}function xg(n){return n=Gx(n),n!==null?yg(n):null}function yg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=yg(n);if(e!==null)return e;n=n.sibling}return null}var Sg=Yn.unstable_scheduleCallback,Dp=Yn.unstable_cancelCallback,Hx=Yn.unstable_shouldYield,Vx=Yn.unstable_requestPaint,kt=Yn.unstable_now,Wx=Yn.unstable_getCurrentPriorityLevel,ad=Yn.unstable_ImmediatePriority,Mg=Yn.unstable_UserBlockingPriority,ec=Yn.unstable_NormalPriority,Xx=Yn.unstable_LowPriority,wg=Yn.unstable_IdlePriority,Fc=null,Ci=null;function qx(n){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(Fc,n,void 0,(n.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:Kx,Yx=Math.log,$x=Math.LN2;function Kx(n){return n>>>=0,n===0?32:31-(Yx(n)/$x|0)|0}var zo=64,Bo=4194304;function Ba(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Ba(o):(s&=a,s!==0&&(i=Ba(s)))}else a=t&~r,a!==0?i=Ba(a):s!==0&&(i=Ba(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-_i(e),r=1<<t,i|=n[t],e&=~r;return i}function jx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-_i(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=jx(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Rh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tg(){var n=zo;return zo<<=1,!(zo&4194240)&&(zo=64),n}function uu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ro(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-_i(e),n[e]=t}function Jx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-_i(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function od(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-_i(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var pt=0;function Eg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var bg,ld,Ag,Rg,Pg,Ph=!1,Go=[],Tr=null,Er=null,br=null,ao=new Map,oo=new Map,gr=[],Qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Np(n,e){switch(n){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Sa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Co(e),e!==null&&ld(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function e1(n,e,t,i,r){switch(e){case"focusin":return Tr=Sa(Tr,n,e,t,i,r),!0;case"dragenter":return Er=Sa(Er,n,e,t,i,r),!0;case"mouseover":return br=Sa(br,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,Sa(ao.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oo.set(s,Sa(oo.get(s)||null,n,e,t,i,r)),!0}return!1}function Cg(n){var e=jr(n.target);if(e!==null){var t=us(e);if(t!==null){if(e=t.tag,e===13){if(e=_g(t),e!==null){n.blockedOn=e,Pg(n.priority,function(){Ag(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Nl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ch(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Th=i,t.target.dispatchEvent(i),Th=null}else return e=Co(t),e!==null&&ld(e),n.blockedOn=t,!1;e.shift()}return!0}function Ip(n,e,t){Nl(n)&&t.delete(e)}function t1(){Ph=!1,Tr!==null&&Nl(Tr)&&(Tr=null),Er!==null&&Nl(Er)&&(Er=null),br!==null&&Nl(br)&&(br=null),ao.forEach(Ip),oo.forEach(Ip)}function Ma(n,e){n.blockedOn===e&&(n.blockedOn=null,Ph||(Ph=!0,Yn.unstable_scheduleCallback(Yn.unstable_NormalPriority,t1)))}function lo(n){function e(r){return Ma(r,n)}if(0<Go.length){Ma(Go[0],n);for(var t=1;t<Go.length;t++){var i=Go[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Tr!==null&&Ma(Tr,n),Er!==null&&Ma(Er,n),br!==null&&Ma(br,n),ao.forEach(e),oo.forEach(e),t=0;t<gr.length;t++)i=gr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<gr.length&&(t=gr[0],t.blockedOn===null);)Cg(t),t.blockedOn===null&&gr.shift()}var js=nr.ReactCurrentBatchConfig,nc=!0;function n1(n,e,t,i){var r=pt,s=js.transition;js.transition=null;try{pt=1,cd(n,e,t,i)}finally{pt=r,js.transition=s}}function i1(n,e,t,i){var r=pt,s=js.transition;js.transition=null;try{pt=4,cd(n,e,t,i)}finally{pt=r,js.transition=s}}function cd(n,e,t,i){if(nc){var r=Ch(n,e,t,i);if(r===null)yu(n,e,i,ic,t),Np(n,i);else if(e1(r,n,e,t,i))i.stopPropagation();else if(Np(n,i),e&4&&-1<Qx.indexOf(n)){for(;r!==null;){var s=Co(r);if(s!==null&&bg(s),s=Ch(n,e,t,i),s===null&&yu(n,e,i,ic,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else yu(n,e,i,null,t)}}var ic=null;function Ch(n,e,t,i){if(ic=null,n=sd(i),n=jr(n),n!==null)if(e=us(n),e===null)n=null;else if(t=e.tag,t===13){if(n=_g(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ic=n,null}function Lg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wx()){case ad:return 1;case Mg:return 4;case ec:case Xx:return 16;case wg:return 536870912;default:return 16}default:return 16}}var xr=null,ud=null,Il=null;function Dg(){if(Il)return Il;var n,e=ud,t=e.length,i,r="value"in xr?xr.value:xr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Il=r.slice(n,1<i?1-i:void 0)}function Ul(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function Up(){return!1}function Kn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:Up,this.isPropagationStopped=Up,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=Kn(da),Po=Nt({},da,{view:0,detail:0}),r1=Kn(Po),hu,fu,wa,Oc=Nt({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(hu=n.screenX-wa.screenX,fu=n.screenY-wa.screenY):fu=hu=0,wa=n),hu)},movementY:function(n){return"movementY"in n?n.movementY:fu}}),kp=Kn(Oc),s1=Nt({},Oc,{dataTransfer:0}),a1=Kn(s1),o1=Nt({},Po,{relatedTarget:0}),du=Kn(o1),l1=Nt({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),c1=Kn(l1),u1=Nt({},da,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),h1=Kn(u1),f1=Nt({},da,{data:0}),Fp=Kn(f1),d1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=m1[n])?!!e[n]:!1}function fd(){return g1}var v1=Nt({},Po,{key:function(n){if(n.key){var e=d1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?p1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(n){return n.type==="keypress"?Ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_1=Kn(v1),x1=Nt({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Kn(x1),y1=Nt({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),S1=Kn(y1),M1=Nt({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),w1=Kn(M1),T1=Nt({},Oc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),E1=Kn(T1),b1=[9,13,27,32],dd=Zi&&"CompositionEvent"in window,qa=null;Zi&&"documentMode"in document&&(qa=document.documentMode);var A1=Zi&&"TextEvent"in window&&!qa,Ng=Zi&&(!dd||qa&&8<qa&&11>=qa),zp=" ",Bp=!1;function Ig(n,e){switch(n){case"keyup":return b1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function R1(n,e){switch(n){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:(Bp=!0,zp);case"textInput":return n=e.data,n===zp&&Bp?null:n;default:return null}}function P1(n,e){if(Fs)return n==="compositionend"||!dd&&Ig(n,e)?(n=Dg(),Il=ud=xr=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ng&&e.locale!=="ko"?null:e.data;default:return null}}var C1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!C1[n.type]:e==="textarea"}function kg(n,e,t,i){dg(i),e=rc(e,"onChange"),0<e.length&&(t=new hd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ya=null,co=null;function L1(n){Yg(n,0)}function zc(n){var e=Bs(n);if(ag(e))return n}function D1(n,e){if(n==="change")return e}var Fg=!1;if(Zi){var pu;if(Zi){var mu="oninput"in document;if(!mu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),mu=typeof Hp.oninput=="function"}pu=mu}else pu=!1;Fg=pu&&(!document.documentMode||9<document.documentMode)}function Vp(){Ya&&(Ya.detachEvent("onpropertychange",Og),co=Ya=null)}function Og(n){if(n.propertyName==="value"&&zc(co)){var e=[];kg(e,co,n,sd(n)),vg(L1,e)}}function N1(n,e,t){n==="focusin"?(Vp(),Ya=e,co=t,Ya.attachEvent("onpropertychange",Og)):n==="focusout"&&Vp()}function I1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zc(co)}function U1(n,e){if(n==="click")return zc(e)}function k1(n,e){if(n==="input"||n==="change")return zc(e)}function F1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var yi=typeof Object.is=="function"?Object.is:F1;function uo(n,e){if(yi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!fh.call(e,r)||!yi(n[r],e[r]))return!1}return!0}function Wp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xp(n,e){var t=Wp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Wp(t)}}function zg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?zg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var n=window,e=Zl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Zl(n.document)}return e}function pd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function O1(n){var e=Bg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&zg(t.ownerDocument.documentElement,t)){if(i!==null&&pd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Xp(t,s);var a=Xp(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var z1=Zi&&"documentMode"in document&&11>=document.documentMode,Os=null,Lh=null,$a=null,Dh=!1;function qp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Dh||Os==null||Os!==Zl(i)||(i=Os,"selectionStart"in i&&pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$a&&uo($a,i)||($a=i,i=rc(Lh,"onSelect"),0<i.length&&(e=new hd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Os)))}function Vo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var zs={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},gu={},Gg={};Zi&&(Gg=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Bc(n){if(gu[n])return gu[n];if(!zs[n])return n;var e=zs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gg)return gu[n]=e[t];return n}var Hg=Bc("animationend"),Vg=Bc("animationiteration"),Wg=Bc("animationstart"),Xg=Bc("transitionend"),qg=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,e){qg.set(n,e),cs(e,[n])}for(var vu=0;vu<Yp.length;vu++){var _u=Yp[vu],B1=_u.toLowerCase(),G1=_u[0].toUpperCase()+_u.slice(1);Ur(B1,"on"+G1)}Ur(Hg,"onAnimationEnd");Ur(Vg,"onAnimationIteration");Ur(Wg,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Xg,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function $p(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Bx(i,e,void 0,n),n.currentTarget=null}function Yg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;$p(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;$p(r,o,c),s=l}}}if(Ql)throw n=Ah,Ql=!1,Ah=null,n}function wt(n,e){var t=e[Fh];t===void 0&&(t=e[Fh]=new Set);var i=n+"__bubble";t.has(i)||($g(e,n,2,!1),t.add(i))}function xu(n,e,t){var i=0;e&&(i|=4),$g(t,n,i,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function ho(n){if(!n[Wo]){n[Wo]=!0,tg.forEach(function(t){t!=="selectionchange"&&(H1.has(t)||xu(t,!1,n),xu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,xu("selectionchange",!1,e))}}function $g(n,e,t,i){switch(Lg(e)){case 1:var r=n1;break;case 4:r=i1;break;default:r=cd}t=r.bind(null,e,t,n),r=void 0,!bh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function yu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}vg(function(){var c=s,h=sd(t),f=[];e:{var d=qg.get(n);if(d!==void 0){var m=hd,v=n;switch(n){case"keypress":if(Ul(t)===0)break e;case"keydown":case"keyup":m=_1;break;case"focusin":v="focus",m=du;break;case"focusout":v="blur",m=du;break;case"beforeblur":case"afterblur":m=du;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=S1;break;case Hg:case Vg:case Wg:m=c1;break;case Xg:m=w1;break;case"scroll":m=r1;break;case"wheel":m=E1;break;case"copy":case"cut":case"paste":m=h1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Op}var _=(e&4)!==0,p=!_&&n==="scroll",u=_?d!==null?d+"Capture":null:d;_=[];for(var g=c,y;g!==null;){y=g;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,u!==null&&(S=so(g,u),S!=null&&_.push(fo(g,S,y)))),p)break;g=g.return}0<_.length&&(d=new m(d,v,null,t,h),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",d&&t!==Th&&(v=t.relatedTarget||t.fromElement)&&(jr(v)||v[Ji]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=t.relatedTarget||t.toElement,m=c,v=v?jr(v):null,v!==null&&(p=us(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(_=kp,S="onMouseLeave",u="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=Op,S="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?d:Bs(m),y=v==null?d:Bs(v),d=new _(S,g+"leave",m,t,h),d.target=p,d.relatedTarget=y,S=null,jr(h)===c&&(_=new _(u,g+"enter",v,t,h),_.target=y,_.relatedTarget=p,S=_),p=S,m&&v)t:{for(_=m,u=v,g=0,y=_;y;y=ms(y))g++;for(y=0,S=u;S;S=ms(S))y++;for(;0<g-y;)_=ms(_),g--;for(;0<y-g;)u=ms(u),y--;for(;g--;){if(_===u||u!==null&&_===u.alternate)break t;_=ms(_),u=ms(u)}_=null}else _=null;m!==null&&Kp(f,d,m,_,!1),v!==null&&p!==null&&Kp(f,p,v,_,!0)}}e:{if(d=c?Bs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var E=D1;else if(Gp(d))if(Fg)E=k1;else{E=I1;var w=N1}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=U1);if(E&&(E=E(n,c))){kg(f,E,t,h);break e}w&&w(n,d,c),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&xh(d,"number",d.value)}switch(w=c?Bs(c):window,n){case"focusin":(Gp(w)||w.contentEditable==="true")&&(Os=w,Lh=c,$a=null);break;case"focusout":$a=Lh=Os=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,qp(f,t,h);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":qp(f,t,h)}var x;if(dd)e:{switch(n){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Fs?Ig(n,t)&&(M="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(Ng&&t.locale!=="ko"&&(Fs||M!=="onCompositionStart"?M==="onCompositionEnd"&&Fs&&(x=Dg()):(xr=h,ud="value"in xr?xr.value:xr.textContent,Fs=!0)),w=rc(c,M),0<w.length&&(M=new Fp(M,n,null,t,h),f.push({event:M,listeners:w}),x?M.data=x:(x=Ug(t),x!==null&&(M.data=x)))),(x=A1?R1(n,t):P1(n,t))&&(c=rc(c,"onBeforeInput"),0<c.length&&(h=new Fp("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:c}),h.data=x))}Yg(f,e)})}function fo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function rc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(n,t),s!=null&&i.unshift(fo(n,s,r)),s=so(n,e),s!=null&&i.push(fo(n,s,r))),n=n.return}return i}function ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kp(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=so(t,s),l!=null&&a.unshift(fo(t,l,o))):r||(l=so(t,s),l!=null&&a.push(fo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var V1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function jp(n){return(typeof n=="string"?n:""+n).replace(V1,`
`).replace(W1,"")}function Xo(n,e,t){if(e=jp(e),jp(n)!==e&&t)throw Error(ue(425))}function sc(){}var Nh=null,Ih=null;function Uh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,X1=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,q1=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(n){return Zp.resolve(null).then(n).catch(Y1)}:kh;function Y1(n){setTimeout(function(){throw n})}function Su(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),lo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);lo(e)}function Ar(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Jp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var pa=Math.random().toString(36).slice(2),Ai="__reactFiber$"+pa,po="__reactProps$"+pa,Ji="__reactContainer$"+pa,Fh="__reactEvents$"+pa,$1="__reactListeners$"+pa,K1="__reactHandles$"+pa;function jr(n){var e=n[Ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ji]||t[Ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Jp(n);n!==null;){if(t=n[Ai])return t;n=Jp(n)}return e}n=t,t=n.parentNode}return null}function Co(n){return n=n[Ai]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ue(33))}function Gc(n){return n[po]||null}var Oh=[],Gs=-1;function kr(n){return{current:n}}function bt(n){0>Gs||(n.current=Oh[Gs],Oh[Gs]=null,Gs--)}function St(n,e){Gs++,Oh[Gs]=n.current,n.current=e}var Nr={},_n=kr(Nr),Un=kr(!1),ts=Nr;function na(n,e){var t=n.type.contextTypes;if(!t)return Nr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function kn(n){return n=n.childContextTypes,n!=null}function ac(){bt(Un),bt(_n)}function Qp(n,e,t){if(_n.current!==Nr)throw Error(ue(168));St(_n,e),St(Un,t)}function Kg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,Nx(n)||"Unknown",r));return Nt({},t,i)}function oc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Nr,ts=_n.current,St(_n,n),St(Un,Un.current),!0}function e0(n,e,t){var i=n.stateNode;if(!i)throw Error(ue(169));t?(n=Kg(n,e,ts),i.__reactInternalMemoizedMergedChildContext=n,bt(Un),bt(_n),St(_n,n)):bt(Un),St(Un,t)}var Wi=null,Hc=!1,Mu=!1;function jg(n){Wi===null?Wi=[n]:Wi.push(n)}function j1(n){Hc=!0,jg(n)}function Fr(){if(!Mu&&Wi!==null){Mu=!0;var n=0,e=pt;try{var t=Wi;for(pt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Wi=null,Hc=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(n+1)),Sg(ad,Fr),r}finally{pt=e,Mu=!1}}return null}var Hs=[],Vs=0,lc=null,cc=0,ei=[],ti=0,ns=null,Xi=1,qi="";function Xr(n,e){Hs[Vs++]=cc,Hs[Vs++]=lc,lc=n,cc=e}function Zg(n,e,t){ei[ti++]=Xi,ei[ti++]=qi,ei[ti++]=ns,ns=n;var i=Xi;n=qi;var r=32-_i(i)-1;i&=~(1<<r),t+=1;var s=32-_i(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Xi=1<<32-_i(e)+r|t<<r|i,qi=s+n}else Xi=1<<s|t<<r|i,qi=n}function md(n){n.return!==null&&(Xr(n,1),Zg(n,1,0))}function gd(n){for(;n===lc;)lc=Hs[--Vs],Hs[Vs]=null,cc=Hs[--Vs],Hs[Vs]=null;for(;n===ns;)ns=ei[--ti],ei[ti]=null,qi=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null}var qn=null,Xn=null,At=!1,mi=null;function Jg(n,e){var t=ri(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function t0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,qn=n,Xn=Ar(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,qn=n,Xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ns!==null?{id:Xi,overflow:qi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ri(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,qn=n,Xn=null,!0):!1;default:return!1}}function zh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bh(n){if(At){var e=Xn;if(e){var t=e;if(!t0(n,e)){if(zh(n))throw Error(ue(418));e=Ar(t.nextSibling);var i=qn;e&&t0(n,e)?Jg(i,t):(n.flags=n.flags&-4097|2,At=!1,qn=n)}}else{if(zh(n))throw Error(ue(418));n.flags=n.flags&-4097|2,At=!1,qn=n}}}function n0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qn=n}function qo(n){if(n!==qn)return!1;if(!At)return n0(n),At=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Uh(n.type,n.memoizedProps)),e&&(e=Xn)){if(zh(n))throw Qg(),Error(ue(418));for(;e;)Jg(n,e),e=Ar(e.nextSibling)}if(n0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ue(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Xn=Ar(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Xn=null}}else Xn=qn?Ar(n.stateNode.nextSibling):null;return!0}function Qg(){for(var n=Xn;n;)n=Ar(n.nextSibling)}function ia(){Xn=qn=null,At=!1}function vd(n){mi===null?mi=[n]:mi.push(n)}var Z1=nr.ReactCurrentBatchConfig;function Ta(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ue(309));var i=t.stateNode}if(!i)throw Error(ue(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ue(284));if(!t._owner)throw Error(ue(290,n))}return n}function Yo(n,e){throw n=Object.prototype.toString.call(e),Error(ue(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function i0(n){var e=n._init;return e(n._payload)}function ev(n){function e(u,g){if(n){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function t(u,g){if(!n)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Lr(u,g),u.index=0,u.sibling=null,u}function s(u,g,y){return u.index=y,n?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=2,g):y):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return n&&u.alternate===null&&(u.flags|=2),u}function o(u,g,y,S){return g===null||g.tag!==6?(g=Pu(y,u.mode,S),g.return=u,g):(g=r(g,y),g.return=u,g)}function l(u,g,y,S){var E=y.type;return E===ks?h(u,g,y.props.children,S,y.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===fr&&i0(E)===g.type)?(S=r(g,y.props),S.ref=Ta(u,g,y),S.return=u,S):(S=Hl(y.type,y.key,y.props,null,u.mode,S),S.ref=Ta(u,g,y),S.return=u,S)}function c(u,g,y,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Cu(y,u.mode,S),g.return=u,g):(g=r(g,y.children||[]),g.return=u,g)}function h(u,g,y,S,E){return g===null||g.tag!==7?(g=es(y,u.mode,S,E),g.return=u,g):(g=r(g,y),g.return=u,g)}function f(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Pu(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:return y=Hl(g.type,g.key,g.props,null,u.mode,y),y.ref=Ta(u,null,g),y.return=u,y;case Us:return g=Cu(g,u.mode,y),g.return=u,g;case fr:var S=g._init;return f(u,S(g._payload),y)}if(za(g)||xa(g))return g=es(g,u.mode,y,null),g.return=u,g;Yo(u,g)}return null}function d(u,g,y,S){var E=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:o(u,g,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:return y.key===E?l(u,g,y,S):null;case Us:return y.key===E?c(u,g,y,S):null;case fr:return E=y._init,d(u,g,E(y._payload),S)}if(za(y)||xa(y))return E!==null?null:h(u,g,y,S,null);Yo(u,y)}return null}function m(u,g,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(y)||null,o(g,u,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ko:return u=u.get(S.key===null?y:S.key)||null,l(g,u,S,E);case Us:return u=u.get(S.key===null?y:S.key)||null,c(g,u,S,E);case fr:var w=S._init;return m(u,g,y,w(S._payload),E)}if(za(S)||xa(S))return u=u.get(y)||null,h(g,u,S,E,null);Yo(g,S)}return null}function v(u,g,y,S){for(var E=null,w=null,x=g,M=g=0,C=null;x!==null&&M<y.length;M++){x.index>M?(C=x,x=null):C=x.sibling;var A=d(u,x,y[M],S);if(A===null){x===null&&(x=C);break}n&&x&&A.alternate===null&&e(u,x),g=s(A,g,M),w===null?E=A:w.sibling=A,w=A,x=C}if(M===y.length)return t(u,x),At&&Xr(u,M),E;if(x===null){for(;M<y.length;M++)x=f(u,y[M],S),x!==null&&(g=s(x,g,M),w===null?E=x:w.sibling=x,w=x);return At&&Xr(u,M),E}for(x=i(u,x);M<y.length;M++)C=m(x,u,M,y[M],S),C!==null&&(n&&C.alternate!==null&&x.delete(C.key===null?M:C.key),g=s(C,g,M),w===null?E=C:w.sibling=C,w=C);return n&&x.forEach(function(L){return e(u,L)}),At&&Xr(u,M),E}function _(u,g,y,S){var E=xa(y);if(typeof E!="function")throw Error(ue(150));if(y=E.call(y),y==null)throw Error(ue(151));for(var w=E=null,x=g,M=g=0,C=null,A=y.next();x!==null&&!A.done;M++,A=y.next()){x.index>M?(C=x,x=null):C=x.sibling;var L=d(u,x,A.value,S);if(L===null){x===null&&(x=C);break}n&&x&&L.alternate===null&&e(u,x),g=s(L,g,M),w===null?E=L:w.sibling=L,w=L,x=C}if(A.done)return t(u,x),At&&Xr(u,M),E;if(x===null){for(;!A.done;M++,A=y.next())A=f(u,A.value,S),A!==null&&(g=s(A,g,M),w===null?E=A:w.sibling=A,w=A);return At&&Xr(u,M),E}for(x=i(u,x);!A.done;M++,A=y.next())A=m(x,u,M,A.value,S),A!==null&&(n&&A.alternate!==null&&x.delete(A.key===null?M:A.key),g=s(A,g,M),w===null?E=A:w.sibling=A,w=A);return n&&x.forEach(function(D){return e(u,D)}),At&&Xr(u,M),E}function p(u,g,y,S){if(typeof y=="object"&&y!==null&&y.type===ks&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:e:{for(var E=y.key,w=g;w!==null;){if(w.key===E){if(E=y.type,E===ks){if(w.tag===7){t(u,w.sibling),g=r(w,y.props.children),g.return=u,u=g;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===fr&&i0(E)===w.type){t(u,w.sibling),g=r(w,y.props),g.ref=Ta(u,w,y),g.return=u,u=g;break e}t(u,w);break}else e(u,w);w=w.sibling}y.type===ks?(g=es(y.props.children,u.mode,S,y.key),g.return=u,u=g):(S=Hl(y.type,y.key,y.props,null,u.mode,S),S.ref=Ta(u,g,y),S.return=u,u=S)}return a(u);case Us:e:{for(w=y.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(u,g.sibling),g=r(g,y.children||[]),g.return=u,u=g;break e}else{t(u,g);break}else e(u,g);g=g.sibling}g=Cu(y,u.mode,S),g.return=u,u=g}return a(u);case fr:return w=y._init,p(u,g,w(y._payload),S)}if(za(y))return v(u,g,y,S);if(xa(y))return _(u,g,y,S);Yo(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(u,g.sibling),g=r(g,y),g.return=u,u=g):(t(u,g),g=Pu(y,u.mode,S),g.return=u,u=g),a(u)):t(u,g)}return p}var ra=ev(!0),tv=ev(!1),uc=kr(null),hc=null,Ws=null,_d=null;function xd(){_d=Ws=hc=null}function yd(n){var e=uc.current;bt(uc),n._currentValue=e}function Gh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Zs(n,e){hc=n,_d=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Nn=!0),n.firstContext=null)}function ai(n){var e=n._currentValue;if(_d!==n)if(n={context:n,memoizedValue:e,next:null},Ws===null){if(hc===null)throw Error(ue(308));Ws=n,hc.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return e}var Zr=null;function Sd(n){Zr===null?Zr=[n]:Zr.push(n)}function nv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Sd(e)):(t.next=r.next,r.next=t),e.interleaved=t,Qi(n,i)}function Qi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var dr=!1;function Md(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function $i(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(n,t)}return r=i.interleaved,r===null?(e.next=e,Sd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(n,t)}function kl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,od(n,t)}}function r0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function fc(n,e,t,i){var r=n.updateQueue;dr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=n.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=n,_=o;switch(d=e,m=t,_.tag){case 1:if(v=_.payload,typeof v=="function"){f=v.call(m,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(m,f,d):v,d==null)break e;f=Nt({},f,d);break e;case 2:dr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=f):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rs|=a,n.lanes=a,n.memoizedState=f}}function s0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Lo={},Li=kr(Lo),mo=kr(Lo),go=kr(Lo);function Jr(n){if(n===Lo)throw Error(ue(174));return n}function wd(n,e){switch(St(go,e),St(mo,n),St(Li,Lo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Sh(e,n)}bt(Li),St(Li,e)}function sa(){bt(Li),bt(mo),bt(go)}function rv(n){Jr(go.current);var e=Jr(Li.current),t=Sh(e,n.type);e!==t&&(St(mo,n),St(Li,t))}function Td(n){mo.current===n&&(bt(Li),bt(mo))}var Pt=kr(0);function dc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wu=[];function Ed(){for(var n=0;n<wu.length;n++)wu[n]._workInProgressVersionPrimary=null;wu.length=0}var Fl=nr.ReactCurrentDispatcher,Tu=nr.ReactCurrentBatchConfig,is=0,Lt=null,Vt=null,Jt=null,pc=!1,Ka=!1,vo=0,J1=0;function un(){throw Error(ue(321))}function bd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!yi(n[t],e[t]))return!1;return!0}function Ad(n,e,t,i,r,s){if(is=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fl.current=n===null||n.memoizedState===null?ny:iy,n=t(i,r),Ka){s=0;do{if(Ka=!1,vo=0,25<=s)throw Error(ue(301));s+=1,Jt=Vt=null,e.updateQueue=null,Fl.current=ry,n=t(i,r)}while(Ka)}if(Fl.current=mc,e=Vt!==null&&Vt.next!==null,is=0,Jt=Vt=Lt=null,pc=!1,e)throw Error(ue(300));return n}function Rd(){var n=vo!==0;return vo=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Lt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function oi(){if(Vt===null){var n=Lt.alternate;n=n!==null?n.memoizedState:null}else n=Vt.next;var e=Jt===null?Lt.memoizedState:Jt.next;if(e!==null)Jt=e,Vt=n;else{if(n===null)throw Error(ue(310));Vt=n,n={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Jt===null?Lt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function _o(n,e){return typeof e=="function"?e(n):e}function Eu(n){var e=oi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=Vt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((is&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Lt.lanes|=h,rs|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,yi(i,e.memoizedState)||(Nn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Lt.lanes|=s,rs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function bu(n){var e=oi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);yi(s,e.memoizedState)||(Nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function sv(){}function av(n,e){var t=Lt,i=oi(),r=e(),s=!yi(i.memoizedState,r);if(s&&(i.memoizedState=r,Nn=!0),i=i.queue,Pd(cv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Jt!==null&&Jt.memoizedState.tag&1){if(t.flags|=2048,xo(9,lv.bind(null,t,i,r,e),void 0,null),en===null)throw Error(ue(349));is&30||ov(t,e,r)}return r}function ov(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function lv(n,e,t,i){e.value=t,e.getSnapshot=i,uv(e)&&hv(n)}function cv(n,e,t){return t(function(){uv(e)&&hv(n)})}function uv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!yi(n,t)}catch{return!0}}function hv(n){var e=Qi(n,1);e!==null&&xi(e,n,1,-1)}function a0(n){var e=Ti();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:n},e.queue=n,n=n.dispatch=ty.bind(null,Lt,n),[e.memoizedState,n]}function xo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function fv(){return oi().memoizedState}function Ol(n,e,t,i){var r=Ti();Lt.flags|=n,r.memoizedState=xo(1|e,t,void 0,i===void 0?null:i)}function Vc(n,e,t,i){var r=oi();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var a=Vt.memoizedState;if(s=a.destroy,i!==null&&bd(i,a.deps)){r.memoizedState=xo(e,t,s,i);return}}Lt.flags|=n,r.memoizedState=xo(1|e,t,s,i)}function o0(n,e){return Ol(8390656,8,n,e)}function Pd(n,e){return Vc(2048,8,n,e)}function dv(n,e){return Vc(4,2,n,e)}function pv(n,e){return Vc(4,4,n,e)}function mv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function gv(n,e,t){return t=t!=null?t.concat([n]):null,Vc(4,4,mv.bind(null,e,n),t)}function Cd(){}function vv(n,e){var t=oi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&bd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function _v(n,e){var t=oi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&bd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function xv(n,e,t){return is&21?(yi(t,e)||(t=Tg(),Lt.lanes|=t,rs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=t)}function Q1(n,e){var t=pt;pt=t!==0&&4>t?t:4,n(!0);var i=Tu.transition;Tu.transition={};try{n(!1),e()}finally{pt=t,Tu.transition=i}}function yv(){return oi().memoizedState}function ey(n,e,t){var i=Cr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Sv(n))Mv(e,t);else if(t=nv(n,e,t,i),t!==null){var r=Tn();xi(t,n,i,r),wv(t,e,i)}}function ty(n,e,t){var i=Cr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sv(n))Mv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,yi(o,a)){var l=e.interleaved;l===null?(r.next=r,Sd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=nv(n,e,r,i),t!==null&&(r=Tn(),xi(t,n,i,r),wv(t,e,i))}}function Sv(n){var e=n.alternate;return n===Lt||e!==null&&e===Lt}function Mv(n,e){Ka=pc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function wv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,od(n,t)}}var mc={readContext:ai,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},ny={readContext:ai,useCallback:function(n,e){return Ti().memoizedState=[n,e===void 0?null:e],n},useContext:ai,useEffect:o0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ol(4194308,4,mv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ol(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ol(4,2,n,e)},useMemo:function(n,e){var t=Ti();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ti();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ey.bind(null,Lt,n),[i.memoizedState,n]},useRef:function(n){var e=Ti();return n={current:n},e.memoizedState=n},useState:a0,useDebugValue:Cd,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=a0(!1),e=n[0];return n=Q1.bind(null,n[1]),Ti().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Lt,r=Ti();if(At){if(t===void 0)throw Error(ue(407));t=t()}else{if(t=e(),en===null)throw Error(ue(349));is&30||ov(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,o0(cv.bind(null,i,s,n),[n]),i.flags|=2048,xo(9,lv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ti(),e=en.identifierPrefix;if(At){var t=qi,i=Xi;t=(i&~(1<<32-_i(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=vo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=J1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},iy={readContext:ai,useCallback:vv,useContext:ai,useEffect:Pd,useImperativeHandle:gv,useInsertionEffect:dv,useLayoutEffect:pv,useMemo:_v,useReducer:Eu,useRef:fv,useState:function(){return Eu(_o)},useDebugValue:Cd,useDeferredValue:function(n){var e=oi();return xv(e,Vt.memoizedState,n)},useTransition:function(){var n=Eu(_o)[0],e=oi().memoizedState;return[n,e]},useMutableSource:sv,useSyncExternalStore:av,useId:yv,unstable_isNewReconciler:!1},ry={readContext:ai,useCallback:vv,useContext:ai,useEffect:Pd,useImperativeHandle:gv,useInsertionEffect:dv,useLayoutEffect:pv,useMemo:_v,useReducer:bu,useRef:fv,useState:function(){return bu(_o)},useDebugValue:Cd,useDeferredValue:function(n){var e=oi();return Vt===null?e.memoizedState=n:xv(e,Vt.memoizedState,n)},useTransition:function(){var n=bu(_o)[0],e=oi().memoizedState;return[n,e]},useMutableSource:sv,useSyncExternalStore:av,useId:yv,unstable_isNewReconciler:!1};function di(n,e){if(n&&n.defaultProps){e=Nt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Hh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Nt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Wc={isMounted:function(n){return(n=n._reactInternals)?us(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Tn(),r=Cr(n),s=$i(i,r);s.payload=e,t!=null&&(s.callback=t),e=Rr(n,s,r),e!==null&&(xi(e,n,r,i),kl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Tn(),r=Cr(n),s=$i(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Rr(n,s,r),e!==null&&(xi(e,n,r,i),kl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Tn(),i=Cr(n),r=$i(t,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(n,r,i),e!==null&&(xi(e,n,i,t),kl(e,n,i))}};function l0(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!uo(t,i)||!uo(r,s):!0}function Tv(n,e,t){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=kn(e)?ts:_n.current,i=e.contextTypes,s=(i=i!=null)?na(n,r):Nr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function c0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Wc.enqueueReplaceState(e,e.state,null)}function Vh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Md(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=kn(e)?ts:_n.current,r.context=na(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wc.enqueueReplaceState(r,r.state,null),fc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function aa(n,e){try{var t="",i=e;do t+=Dx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Au(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Wh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function Ev(n,e,t){t=$i(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){vc||(vc=!0,ef=i),Wh(n,e)},t}function bv(n,e,t){t=$i(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Wh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Wh(n,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function u0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new sy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=xy.bind(null,n,e,t),e.then(n,n))}function h0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function f0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=$i(-1,1),e.tag=2,Rr(t,e,1))),t.lanes|=1),n)}var ay=nr.ReactCurrentOwner,Nn=!1;function Mn(n,e,t,i){e.child=n===null?tv(e,null,t,i):ra(e,n.child,t,i)}function d0(n,e,t,i,r){t=t.render;var s=e.ref;return Zs(e,r),i=Ad(n,e,t,i,s,r),t=Rd(),n!==null&&!Nn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,er(n,e,r)):(At&&t&&md(e),e.flags|=1,Mn(n,e,i,r),e.child)}function p0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Od(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Av(n,e,s,i,r)):(n=Hl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:uo,t(a,i)&&n.ref===e.ref)return er(n,e,r)}return e.flags|=1,n=Lr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Av(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(uo(s,i)&&n.ref===e.ref)if(Nn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Nn=!0);else return e.lanes=n.lanes,er(n,e,r)}return Xh(n,e,t,i,r)}function Rv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(qs,Hn),Hn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,St(qs,Hn),Hn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,St(qs,Hn),Hn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,St(qs,Hn),Hn|=i;return Mn(n,e,r,t),e.child}function Pv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Xh(n,e,t,i,r){var s=kn(t)?ts:_n.current;return s=na(e,s),Zs(e,r),t=Ad(n,e,t,i,s,r),i=Rd(),n!==null&&!Nn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,er(n,e,r)):(At&&i&&md(e),e.flags|=1,Mn(n,e,t,r),e.child)}function m0(n,e,t,i,r){if(kn(t)){var s=!0;oc(e)}else s=!1;if(Zs(e,r),e.stateNode===null)zl(n,e),Tv(e,t,i),Vh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=ai(c):(c=kn(t)?ts:_n.current,c=na(e,c));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&c0(e,a,i,c),dr=!1;var d=e.memoizedState;a.state=d,fc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Un.current||dr?(typeof h=="function"&&(Hh(e,t,h,i),l=e.memoizedState),(o=dr||l0(e,t,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,iv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:di(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=kn(t)?ts:_n.current,l=na(e,l));var m=t.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&c0(e,a,i,l),dr=!1,d=e.memoizedState,a.state=d,fc(e,i,a,r);var v=e.memoizedState;o!==f||d!==v||Un.current||dr?(typeof m=="function"&&(Hh(e,t,m,i),v=e.memoizedState),(c=dr||l0(e,t,c,i,d,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return qh(n,e,t,i,s,r)}function qh(n,e,t,i,r,s){Pv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&e0(e,t,!1),er(n,e,s);i=e.stateNode,ay.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=ra(e,n.child,null,s),e.child=ra(e,null,o,s)):Mn(n,e,o,s),e.memoizedState=i.state,r&&e0(e,t,!0),e.child}function Cv(n){var e=n.stateNode;e.pendingContext?Qp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Qp(n,e.context,!1),wd(n,e.containerInfo)}function g0(n,e,t,i,r){return ia(),vd(r),e.flags|=256,Mn(n,e,t,i),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function $h(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lv(n,e,t){var i=e.pendingProps,r=Pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),St(Pt,r&1),n===null)return Bh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Yc(a,i,0,null),n=es(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=$h(t),e.memoizedState=Yh,n):Ld(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return oy(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Lr(o,s):(s=es(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?$h(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Yh,i}return s=n.child,n=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ld(n,e){return e=Yc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function $o(n,e,t,i){return i!==null&&vd(i),ra(e,n.child,null,t),n=Ld(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function oy(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Au(Error(ue(422))),$o(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yc({mode:"visible",children:i.children},r,0,null),s=es(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ra(e,n.child,null,a),e.child.memoizedState=$h(a),e.memoizedState=Yh,s);if(!(e.mode&1))return $o(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ue(419)),i=Au(s,i,void 0),$o(n,e,a,i)}if(o=(a&n.childLanes)!==0,Nn||o){if(i=en,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(n,r),xi(i,n,r,-1))}return Fd(),i=Au(Error(ue(421))),$o(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=yy.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Xn=Ar(r.nextSibling),qn=e,At=!0,mi=null,n!==null&&(ei[ti++]=Xi,ei[ti++]=qi,ei[ti++]=ns,Xi=n.id,qi=n.overflow,ns=e),e=Ld(e,i.children),e.flags|=4096,e)}function v0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Gh(n.return,e,t)}function Ru(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Dv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Mn(n,e,i.children,t),i=Pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&v0(n,t,e);else if(n.tag===19)v0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(St(Pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&dc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Ru(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&dc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Ru(e,!0,t,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function er(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),rs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ue(153));if(e.child!==null){for(n=e.child,t=Lr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Lr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ly(n,e,t){switch(e.tag){case 3:Cv(e),ia();break;case 5:rv(e);break;case 1:kn(e.type)&&oc(e);break;case 4:wd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(uc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(Pt,Pt.current&1),e.flags|=128,null):t&e.child.childLanes?Lv(n,e,t):(St(Pt,Pt.current&1),n=er(n,e,t),n!==null?n.sibling:null);St(Pt,Pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Dv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Rv(n,e,t)}return er(n,e,t)}var Nv,Kh,Iv,Uv;Nv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Kh=function(){};Iv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Jr(Li.current);var s=null;switch(t){case"input":r=vh(n,r),i=vh(n,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=yh(n,r),i=yh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=sc)}Mh(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Uv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ea(n,e){if(!At)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function hn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function cy(n,e,t){var i=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(e),null;case 1:return kn(e.type)&&ac(),hn(e),null;case 3:return i=e.stateNode,sa(),bt(Un),bt(_n),Ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(qo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mi!==null&&(rf(mi),mi=null))),Kh(n,e),hn(e),null;case 5:Td(e);var r=Jr(go.current);if(t=e.type,n!==null&&e.stateNode!=null)Iv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return hn(e),null}if(n=Jr(Li.current),qo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[po]=s,n=(e.mode&1)!==0,t){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Ga.length;r++)wt(Ga[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":bp(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":Rp(i,s),wt("invalid",i)}Mh(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,o,n),r=["children",""+o]):io.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&wt("scroll",i)}switch(t){case"input":Fo(i),Ap(i,s,!0);break;case"textarea":Fo(i),Pp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=cg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ai]=e,n[po]=i,Nv(n,e,!1,!1),e.stateNode=n;e:{switch(a=wh(t,i),t){case"dialog":wt("cancel",n),wt("close",n),r=i;break;case"iframe":case"object":case"embed":wt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ga.length;r++)wt(Ga[r],n);r=i;break;case"source":wt("error",n),r=i;break;case"img":case"image":case"link":wt("error",n),wt("load",n),r=i;break;case"details":wt("toggle",n),r=i;break;case"input":bp(n,i),r=vh(n,i),wt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),wt("invalid",n);break;case"textarea":Rp(n,i),r=yh(n,i),wt("invalid",n);break;default:r=i}Mh(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?fg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ug(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ro(n,l):typeof l=="number"&&ro(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",n):l!=null&&td(n,s,l,a))}switch(t){case"input":Fo(n),Ap(n,i,!1);break;case"textarea":Fo(n),Pp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Dr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ys(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=sc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return hn(e),null;case 6:if(n&&e.stateNode!=null)Uv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(t=Jr(go.current),Jr(Li.current),qo(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==t)&&(n=qn,n!==null))switch(n.tag){case 3:Xo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return hn(e),null;case 13:if(bt(Pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(At&&Xn!==null&&e.mode&1&&!(e.flags&128))Qg(),ia(),e.flags|=98560,s=!1;else if(s=qo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[Ai]=e}else ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;hn(e),s=!1}else mi!==null&&(rf(mi),mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Pt.current&1?Wt===0&&(Wt=3):Fd())),e.updateQueue!==null&&(e.flags|=4),hn(e),null);case 4:return sa(),Kh(n,e),n===null&&ho(e.stateNode.containerInfo),hn(e),null;case 10:return yd(e.type._context),hn(e),null;case 17:return kn(e.type)&&ac(),hn(e),null;case 19:if(bt(Pt),s=e.memoizedState,s===null)return hn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ea(s,!1);else{if(Wt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=dc(n),a!==null){for(e.flags|=128,Ea(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return St(Pt,Pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&kt()>oa&&(e.flags|=128,i=!0,Ea(s,!1),e.lanes=4194304)}else{if(!i)if(n=dc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!At)return hn(e),null}else 2*kt()-s.renderingStartTime>oa&&t!==1073741824&&(e.flags|=128,i=!0,Ea(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,t=Pt.current,St(Pt,i?t&1|2:t&1),e):(hn(e),null);case 22:case 23:return kd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Hn&1073741824&&(hn(e),e.subtreeFlags&6&&(e.flags|=8192)):hn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function uy(n,e){switch(gd(e),e.tag){case 1:return kn(e.type)&&ac(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return sa(),bt(Un),bt(_n),Ed(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Td(e),null;case 13:if(bt(Pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));ia()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(Pt),null;case 4:return sa(),null;case 10:return yd(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var Ko=!1,gn=!1,hy=typeof WeakSet=="function"?WeakSet:Set,be=null;function Xs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){It(n,e,i)}else t.current=null}function jh(n,e,t){try{t()}catch(i){It(n,e,i)}}var _0=!1;function fy(n,e){if(Nh=nc,n=Bg(),pd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=n,d=null;t:for(;;){for(var m;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ih={focusedElem:n,selectionRange:t},nc=!1,be=e;be!==null;)if(e=be,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,be=n;else for(;be!==null;){e=be;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,p=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:di(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){It(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}return v=_0,_0=!1,v}function ja(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&jh(e,t,s)}r=r.next}while(r!==i)}}function Xc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Zh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function kv(n){var e=n.alternate;e!==null&&(n.alternate=null,kv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ai],delete e[po],delete e[Fh],delete e[$1],delete e[K1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fv(n){return n.tag===5||n.tag===3||n.tag===4}function x0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=sc));else if(i!==4&&(n=n.child,n!==null))for(Jh(n,e,t),n=n.sibling;n!==null;)Jh(n,e,t),n=n.sibling}function Qh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Qh(n,e,t),n=n.sibling;n!==null;)Qh(n,e,t),n=n.sibling}var nn=null,pi=!1;function ar(n,e,t){for(t=t.child;t!==null;)Ov(n,e,t),t=t.sibling}function Ov(n,e,t){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(Fc,t)}catch{}switch(t.tag){case 5:gn||Xs(t,e);case 6:var i=nn,r=pi;nn=null,ar(n,e,t),nn=i,pi=r,nn!==null&&(pi?(n=nn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):nn.removeChild(t.stateNode));break;case 18:nn!==null&&(pi?(n=nn,t=t.stateNode,n.nodeType===8?Su(n.parentNode,t):n.nodeType===1&&Su(n,t),lo(n)):Su(nn,t.stateNode));break;case 4:i=nn,r=pi,nn=t.stateNode.containerInfo,pi=!0,ar(n,e,t),nn=i,pi=r;break;case 0:case 11:case 14:case 15:if(!gn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&jh(t,e,a),r=r.next}while(r!==i)}ar(n,e,t);break;case 1:if(!gn&&(Xs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){It(t,e,o)}ar(n,e,t);break;case 21:ar(n,e,t);break;case 22:t.mode&1?(gn=(i=gn)||t.memoizedState!==null,ar(n,e,t),gn=i):ar(n,e,t);break;default:ar(n,e,t)}}function y0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new hy),e.forEach(function(i){var r=Sy.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ci(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:nn=o.stateNode,pi=!1;break e;case 3:nn=o.stateNode.containerInfo,pi=!0;break e;case 4:nn=o.stateNode.containerInfo,pi=!0;break e}o=o.return}if(nn===null)throw Error(ue(160));Ov(s,a,r),nn=null,pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zv(e,n),e=e.sibling}function zv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(e,n),Si(n),i&4){try{ja(3,n,n.return),Xc(3,n)}catch(_){It(n,n.return,_)}try{ja(5,n,n.return)}catch(_){It(n,n.return,_)}}break;case 1:ci(e,n),Si(n),i&512&&t!==null&&Xs(t,t.return);break;case 5:if(ci(e,n),Si(n),i&512&&t!==null&&Xs(t,t.return),n.flags&32){var r=n.stateNode;try{ro(r,"")}catch(_){It(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&og(r,s),wh(o,a);var c=wh(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?fg(r,f):h==="dangerouslySetInnerHTML"?ug(r,f):h==="children"?ro(r,f):td(r,h,f,c)}switch(o){case"input":_h(r,s);break;case"textarea":lg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ys(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[po]=s}catch(_){It(n,n.return,_)}}break;case 6:if(ci(e,n),Si(n),i&4){if(n.stateNode===null)throw Error(ue(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){It(n,n.return,_)}}break;case 3:if(ci(e,n),Si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(_){It(n,n.return,_)}break;case 4:ci(e,n),Si(n);break;case 13:ci(e,n),Si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Id=kt())),i&4&&y0(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(gn=(c=gn)||h,ci(e,n),gn=c):ci(e,n),Si(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(be=n,h=n.child;h!==null;){for(f=be=h;be!==null;){switch(d=be,m=d.child,d.tag){case 0:case 11:case 14:case 15:ja(4,d,d.return);break;case 1:Xs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){It(i,t,_)}}break;case 5:Xs(d,d.return);break;case 22:if(d.memoizedState!==null){M0(f);continue}}m!==null?(m.return=d,be=m):M0(f)}h=h.sibling}e:for(h=null,f=n;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=hg("display",a))}catch(_){It(n,n.return,_)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){It(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ci(e,n),Si(n),i&4&&y0(n);break;case 21:break;default:ci(e,n),Si(n)}}function Si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Fv(t)){var i=t;break e}t=t.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ro(r,""),i.flags&=-33);var s=x0(n);Qh(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=x0(n);Jh(n,o,a);break;default:throw Error(ue(161))}}catch(l){It(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function dy(n,e,t){be=n,Bv(n)}function Bv(n,e,t){for(var i=(n.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ko;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||gn;o=Ko;var c=gn;if(Ko=a,(gn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?w0(r):l!==null?(l.return=a,be=l):w0(r);for(;s!==null;)be=s,Bv(s),s=s.sibling;be=r,Ko=o,gn=c}S0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):S0(n)}}function S0(n){for(;be!==null;){var e=be;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gn||Xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!gn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:di(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&s0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}s0(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&lo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}gn||e.flags&512&&Zh(e)}catch(d){It(e,e.return,d)}}if(e===n){be=null;break}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}}function M0(n){for(;be!==null;){var e=be;if(e===n){be=null;break}var t=e.sibling;if(t!==null){t.return=e.return,be=t;break}be=e.return}}function w0(n){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Xc(4,e)}catch(l){It(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{Zh(e)}catch(l){It(e,s,l)}break;case 5:var a=e.return;try{Zh(e)}catch(l){It(e,a,l)}}}catch(l){It(e,e.return,l)}if(e===n){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var py=Math.ceil,gc=nr.ReactCurrentDispatcher,Dd=nr.ReactCurrentOwner,si=nr.ReactCurrentBatchConfig,st=0,en=null,Gt=null,sn=0,Hn=0,qs=kr(0),Wt=0,yo=null,rs=0,qc=0,Nd=0,Za=null,Ln=null,Id=0,oa=1/0,Vi=null,vc=!1,ef=null,Pr=null,jo=!1,yr=null,_c=0,Ja=0,tf=null,Bl=-1,Gl=0;function Tn(){return st&6?kt():Bl!==-1?Bl:Bl=kt()}function Cr(n){return n.mode&1?st&2&&sn!==0?sn&-sn:Z1.transition!==null?(Gl===0&&(Gl=Tg()),Gl):(n=pt,n!==0||(n=window.event,n=n===void 0?16:Lg(n.type)),n):1}function xi(n,e,t,i){if(50<Ja)throw Ja=0,tf=null,Error(ue(185));Ro(n,t,i),(!(st&2)||n!==en)&&(n===en&&(!(st&2)&&(qc|=t),Wt===4&&vr(n,sn)),Fn(n,i),t===1&&st===0&&!(e.mode&1)&&(oa=kt()+500,Hc&&Fr()))}function Fn(n,e){var t=n.callbackNode;Zx(n,e);var i=tc(n,n===en?sn:0);if(i===0)t!==null&&Dp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Dp(t),e===1)n.tag===0?j1(T0.bind(null,n)):jg(T0.bind(null,n)),q1(function(){!(st&6)&&Fr()}),t=null;else{switch(Eg(i)){case 1:t=ad;break;case 4:t=Mg;break;case 16:t=ec;break;case 536870912:t=wg;break;default:t=ec}t=$v(t,Gv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Gv(n,e){if(Bl=-1,Gl=0,st&6)throw Error(ue(327));var t=n.callbackNode;if(Js()&&n.callbackNode!==t)return null;var i=tc(n,n===en?sn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=xc(n,i);else{e=i;var r=st;st|=2;var s=Vv();(en!==n||sn!==e)&&(Vi=null,oa=kt()+500,Qr(n,e));do try{vy();break}catch(o){Hv(n,o)}while(!0);xd(),gc.current=s,st=r,Gt!==null?e=0:(en=null,sn=0,e=Wt)}if(e!==0){if(e===2&&(r=Rh(n),r!==0&&(i=r,e=nf(n,r))),e===1)throw t=yo,Qr(n,0),vr(n,i),Fn(n,kt()),t;if(e===6)vr(n,i);else{if(r=n.current.alternate,!(i&30)&&!my(r)&&(e=xc(n,i),e===2&&(s=Rh(n),s!==0&&(i=s,e=nf(n,s))),e===1))throw t=yo,Qr(n,0),vr(n,i),Fn(n,kt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:qr(n,Ln,Vi);break;case 3:if(vr(n,i),(i&130023424)===i&&(e=Id+500-kt(),10<e)){if(tc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Tn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=kh(qr.bind(null,n,Ln,Vi),e);break}qr(n,Ln,Vi);break;case 4:if(vr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-_i(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*py(i/1960))-i,10<i){n.timeoutHandle=kh(qr.bind(null,n,Ln,Vi),i);break}qr(n,Ln,Vi);break;case 5:qr(n,Ln,Vi);break;default:throw Error(ue(329))}}}return Fn(n,kt()),n.callbackNode===t?Gv.bind(null,n):null}function nf(n,e){var t=Za;return n.current.memoizedState.isDehydrated&&(Qr(n,e).flags|=256),n=xc(n,e),n!==2&&(e=Ln,Ln=t,e!==null&&rf(e)),n}function rf(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function my(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!yi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(n,e){for(e&=~Nd,e&=~qc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-_i(e),i=1<<t;n[t]=-1,e&=~i}}function T0(n){if(st&6)throw Error(ue(327));Js();var e=tc(n,0);if(!(e&1))return Fn(n,kt()),null;var t=xc(n,e);if(n.tag!==0&&t===2){var i=Rh(n);i!==0&&(e=i,t=nf(n,i))}if(t===1)throw t=yo,Qr(n,0),vr(n,e),Fn(n,kt()),t;if(t===6)throw Error(ue(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,qr(n,Ln,Vi),Fn(n,kt()),null}function Ud(n,e){var t=st;st|=1;try{return n(e)}finally{st=t,st===0&&(oa=kt()+500,Hc&&Fr())}}function ss(n){yr!==null&&yr.tag===0&&!(st&6)&&Js();var e=st;st|=1;var t=si.transition,i=pt;try{if(si.transition=null,pt=1,n)return n()}finally{pt=i,si.transition=t,st=e,!(st&6)&&Fr()}}function kd(){Hn=qs.current,bt(qs)}function Qr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,X1(t)),Gt!==null)for(t=Gt.return;t!==null;){var i=t;switch(gd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ac();break;case 3:sa(),bt(Un),bt(_n),Ed();break;case 5:Td(i);break;case 4:sa();break;case 13:bt(Pt);break;case 19:bt(Pt);break;case 10:yd(i.type._context);break;case 22:case 23:kd()}t=t.return}if(en=n,Gt=n=Lr(n.current,null),sn=Hn=e,Wt=0,yo=null,Nd=qc=rs=0,Ln=Za=null,Zr!==null){for(e=0;e<Zr.length;e++)if(t=Zr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Zr=null}return n}function Hv(n,e){do{var t=Gt;try{if(xd(),Fl.current=mc,pc){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pc=!1}if(is=0,Jt=Vt=Lt=null,Ka=!1,vo=0,Dd.current=null,t===null||t.return===null){Wt=1,yo=e,Gt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=sn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=h0(a);if(m!==null){m.flags&=-257,f0(m,a,o,s,e),m.mode&1&&u0(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){u0(s,c,e),Fd();break e}l=Error(ue(426))}}else if(At&&o.mode&1){var p=h0(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),f0(p,a,o,s,e),vd(aa(l,o));break e}}s=l=aa(l,o),Wt!==4&&(Wt=2),Za===null?Za=[s]:Za.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Ev(s,l,e);r0(s,u);break e;case 1:o=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pr===null||!Pr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=bv(s,o,e);r0(s,S);break e}}s=s.return}while(s!==null)}Xv(t)}catch(E){e=E,Gt===t&&t!==null&&(Gt=t=t.return);continue}break}while(!0)}function Vv(){var n=gc.current;return gc.current=mc,n===null?mc:n}function Fd(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),en===null||!(rs&268435455)&&!(qc&268435455)||vr(en,sn)}function xc(n,e){var t=st;st|=2;var i=Vv();(en!==n||sn!==e)&&(Vi=null,Qr(n,e));do try{gy();break}catch(r){Hv(n,r)}while(!0);if(xd(),st=t,gc.current=i,Gt!==null)throw Error(ue(261));return en=null,sn=0,Wt}function gy(){for(;Gt!==null;)Wv(Gt)}function vy(){for(;Gt!==null&&!Hx();)Wv(Gt)}function Wv(n){var e=Yv(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,e===null?Xv(n):Gt=e,Dd.current=null}function Xv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=uy(t,e),t!==null){t.flags&=32767,Gt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Wt=6,Gt=null;return}}else if(t=cy(t,e,Hn),t!==null){Gt=t;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=n}while(e!==null);Wt===0&&(Wt=5)}function qr(n,e,t){var i=pt,r=si.transition;try{si.transition=null,pt=1,_y(n,e,t,i)}finally{si.transition=r,pt=i}return null}function _y(n,e,t,i){do Js();while(yr!==null);if(st&6)throw Error(ue(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ue(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Jx(n,s),n===en&&(Gt=en=null,sn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jo||(jo=!0,$v(ec,function(){return Js(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=si.transition,si.transition=null;var a=pt;pt=1;var o=st;st|=4,Dd.current=null,fy(n,t),zv(t,n),O1(Ih),nc=!!Nh,Ih=Nh=null,n.current=t,dy(t),Vx(),st=o,pt=a,si.transition=s}else n.current=t;if(jo&&(jo=!1,yr=n,_c=r),s=n.pendingLanes,s===0&&(Pr=null),qx(t.stateNode),Fn(n,kt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(vc)throw vc=!1,n=ef,ef=null,n;return _c&1&&n.tag!==0&&Js(),s=n.pendingLanes,s&1?n===tf?Ja++:(Ja=0,tf=n):Ja=0,Fr(),null}function Js(){if(yr!==null){var n=Eg(_c),e=si.transition,t=pt;try{if(si.transition=null,pt=16>n?16:n,yr===null)var i=!1;else{if(n=yr,yr=null,_c=0,st&6)throw Error(ue(331));var r=st;for(st|=4,be=n.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:ja(8,h,s)}var f=h.child;if(f!==null)f.return=h,be=f;else for(;be!==null;){h=be;var d=h.sibling,m=h.return;if(kv(h),h===c){be=null;break}if(d!==null){d.return=m,be=d;break}be=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ja(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var g=n.current;for(be=g;be!==null;){a=be;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,be=y;else e:for(a=g;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xc(9,o)}}catch(E){It(o,o.return,E)}if(o===a){be=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,be=S;break e}be=o.return}}if(st=r,Fr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(Fc,n)}catch{}i=!0}return i}finally{pt=t,si.transition=e}}return!1}function E0(n,e,t){e=aa(t,e),e=Ev(n,e,1),n=Rr(n,e,1),e=Tn(),n!==null&&(Ro(n,1,e),Fn(n,e))}function It(n,e,t){if(n.tag===3)E0(n,n,t);else for(;e!==null;){if(e.tag===3){E0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){n=aa(t,n),n=bv(e,n,1),e=Rr(e,n,1),n=Tn(),e!==null&&(Ro(e,1,n),Fn(e,n));break}}e=e.return}}function xy(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Tn(),n.pingedLanes|=n.suspendedLanes&t,en===n&&(sn&t)===t&&(Wt===4||Wt===3&&(sn&130023424)===sn&&500>kt()-Id?Qr(n,0):Nd|=t),Fn(n,e)}function qv(n,e){e===0&&(n.mode&1?(e=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):e=1);var t=Tn();n=Qi(n,e),n!==null&&(Ro(n,e,t),Fn(n,t))}function yy(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),qv(n,t)}function Sy(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),qv(n,t)}var Yv;Yv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Un.current)Nn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Nn=!1,ly(n,e,t);Nn=!!(n.flags&131072)}else Nn=!1,At&&e.flags&1048576&&Zg(e,cc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zl(n,e),n=e.pendingProps;var r=na(e,_n.current);Zs(e,t),r=Ad(null,e,i,n,r,t);var s=Rd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kn(i)?(s=!0,oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Md(e),r.updater=Wc,e.stateNode=r,r._reactInternals=e,Vh(e,i,n,t),e=qh(null,e,i,!0,s,t)):(e.tag=0,At&&s&&md(e),Mn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(zl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wy(i),n=di(i,n),r){case 0:e=Xh(null,e,i,n,t);break e;case 1:e=m0(null,e,i,n,t);break e;case 11:e=d0(null,e,i,n,t);break e;case 14:e=p0(null,e,i,di(i.type,n),t);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),Xh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),m0(n,e,i,r,t);case 3:e:{if(Cv(e),n===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iv(n,e),fc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=aa(Error(ue(423)),e),e=g0(n,e,i,t,r);break e}else if(i!==r){r=aa(Error(ue(424)),e),e=g0(n,e,i,t,r);break e}else for(Xn=Ar(e.stateNode.containerInfo.firstChild),qn=e,At=!0,mi=null,t=tv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ia(),i===r){e=er(n,e,t);break e}Mn(n,e,i,t)}e=e.child}return e;case 5:return rv(e),n===null&&Bh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Uh(i,r)?a=null:s!==null&&Uh(i,s)&&(e.flags|=32),Pv(n,e),Mn(n,e,a,t),e.child;case 6:return n===null&&Bh(e),null;case 13:return Lv(n,e,t);case 4:return wd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ra(e,null,i,t):Mn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),d0(n,e,i,r,t);case 7:return Mn(n,e,e.pendingProps,t),e.child;case 8:return Mn(n,e,e.pendingProps.children,t),e.child;case 12:return Mn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,St(uc,i._currentValue),i._currentValue=a,s!==null)if(yi(s.value,a)){if(s.children===r.children&&!Un.current){e=er(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$i(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Gh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Gh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Mn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,t),r=ai(r),i=i(r),e.flags|=1,Mn(n,e,i,t),e.child;case 14:return i=e.type,r=di(i,e.pendingProps),r=di(i.type,r),p0(n,e,i,r,t);case 15:return Av(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:di(i,r),zl(n,e),e.tag=1,kn(i)?(n=!0,oc(e)):n=!1,Zs(e,t),Tv(e,i,r),Vh(e,i,r,t),qh(null,e,i,!0,n,t);case 19:return Dv(n,e,t);case 22:return Rv(n,e,t)}throw Error(ue(156,e.tag))};function $v(n,e){return Sg(n,e)}function My(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,e,t,i){return new My(n,e,t,i)}function Od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wy(n){if(typeof n=="function")return Od(n)?1:0;if(n!=null){if(n=n.$$typeof,n===id)return 11;if(n===rd)return 14}return 2}function Lr(n,e){var t=n.alternate;return t===null?(t=ri(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Hl(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Od(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ks:return es(t.children,r,s,e);case nd:a=8,r|=8;break;case dh:return n=ri(12,t,e,r|2),n.elementType=dh,n.lanes=s,n;case ph:return n=ri(13,t,e,r),n.elementType=ph,n.lanes=s,n;case mh:return n=ri(19,t,e,r),n.elementType=mh,n.lanes=s,n;case rg:return Yc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ng:a=10;break e;case ig:a=9;break e;case id:a=11;break e;case rd:a=14;break e;case fr:a=16,i=null;break e}throw Error(ue(130,n==null?n:typeof n,""))}return e=ri(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function es(n,e,t,i){return n=ri(7,n,i,e),n.lanes=t,n}function Yc(n,e,t,i){return n=ri(22,n,i,e),n.elementType=rg,n.lanes=t,n.stateNode={isHidden:!1},n}function Pu(n,e,t){return n=ri(6,n,null,e),n.lanes=t,n}function Cu(n,e,t){return e=ri(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ty(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uu(0),this.expirationTimes=uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zd(n,e,t,i,r,s,a,o,l){return n=new Ty(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ri(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(s),n}function Ey(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Kv(n){if(!n)return Nr;n=n._reactInternals;e:{if(us(n)!==n||n.tag!==1)throw Error(ue(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(n.tag===1){var t=n.type;if(kn(t))return Kg(n,t,e)}return e}function jv(n,e,t,i,r,s,a,o,l){return n=zd(t,i,!0,n,r,s,a,o,l),n.context=Kv(null),t=n.current,i=Tn(),r=Cr(t),s=$i(i,r),s.callback=e??null,Rr(t,s,r),n.current.lanes=r,Ro(n,r,i),Fn(n,i),n}function $c(n,e,t,i){var r=e.current,s=Tn(),a=Cr(r);return t=Kv(t),e.context===null?e.context=t:e.pendingContext=t,e=$i(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Rr(r,e,a),n!==null&&(xi(n,r,a,s),kl(n,r,a)),a}function yc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function b0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Bd(n,e){b0(n,e),(n=n.alternate)&&b0(n,e)}function by(){return null}var Zv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gd(n){this._internalRoot=n}Kc.prototype.render=Gd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ue(409));$c(n,e,null,null)};Kc.prototype.unmount=Gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ss(function(){$c(null,n,null,null)}),e[Ji]=null}};function Kc(n){this._internalRoot=n}Kc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Rg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<gr.length&&e!==0&&e<gr[t].priority;t++);gr.splice(t,0,n),t===0&&Cg(n)}};function Hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function jc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function A0(){}function Ay(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=yc(a);s.call(c)}}var a=jv(e,i,n,0,null,!1,!1,"",A0);return n._reactRootContainer=a,n[Ji]=a.current,ho(n.nodeType===8?n.parentNode:n),ss(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=yc(l);o.call(c)}}var l=zd(n,0,!1,null,null,!1,!1,"",A0);return n._reactRootContainer=l,n[Ji]=l.current,ho(n.nodeType===8?n.parentNode:n),ss(function(){$c(e,l,t,i)}),l}function Zc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=yc(a);o.call(l)}}$c(e,a,n,r)}else a=Ay(t,e,n,r,i);return yc(a)}bg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ba(e.pendingLanes);t!==0&&(od(e,t|1),Fn(e,kt()),!(st&6)&&(oa=kt()+500,Fr()))}break;case 13:ss(function(){var i=Qi(n,1);if(i!==null){var r=Tn();xi(i,n,1,r)}}),Bd(n,1)}};ld=function(n){if(n.tag===13){var e=Qi(n,134217728);if(e!==null){var t=Tn();xi(e,n,134217728,t)}Bd(n,134217728)}};Ag=function(n){if(n.tag===13){var e=Cr(n),t=Qi(n,e);if(t!==null){var i=Tn();xi(t,n,e,i)}Bd(n,e)}};Rg=function(){return pt};Pg=function(n,e){var t=pt;try{return pt=n,e()}finally{pt=t}};Eh=function(n,e,t){switch(e){case"input":if(_h(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Gc(i);if(!r)throw Error(ue(90));ag(i),_h(i,r)}}}break;case"textarea":lg(n,t);break;case"select":e=t.value,e!=null&&Ys(n,!!t.multiple,e,!1)}};mg=Ud;gg=ss;var Ry={usingClientEntryPoint:!1,Events:[Co,Bs,Gc,dg,pg,Ud]},ba={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Py={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xg(n),n===null?null:n.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Fc=Zo.inject(Py),Ci=Zo}catch{}}$n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;$n.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(ue(200));return Ey(n,e,null,t)};$n.createRoot=function(n,e){if(!Hd(n))throw Error(ue(299));var t=!1,i="",r=Zv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zd(n,1,!1,null,null,t,!1,i,r),n[Ji]=e.current,ho(n.nodeType===8?n.parentNode:n),new Gd(e)};$n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ue(188)):(n=Object.keys(n).join(","),Error(ue(268,n)));return n=xg(e),n=n===null?null:n.stateNode,n};$n.flushSync=function(n){return ss(n)};$n.hydrate=function(n,e,t){if(!jc(e))throw Error(ue(200));return Zc(null,n,e,!0,t)};$n.hydrateRoot=function(n,e,t){if(!Hd(n))throw Error(ue(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Zv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=jv(e,null,n,1,t??null,r,!1,s,a),n[Ji]=e.current,ho(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Kc(e)};$n.render=function(n,e,t){if(!jc(e))throw Error(ue(200));return Zc(null,n,e,!1,t)};$n.unmountComponentAtNode=function(n){if(!jc(n))throw Error(ue(40));return n._reactRootContainer?(ss(function(){Zc(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1};$n.unstable_batchedUpdates=Ud;$n.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!jc(t))throw Error(ue(200));if(n==null||n._reactInternals===void 0)throw Error(ue(38));return Zc(n,e,t,!1,i)};$n.version="18.3.1-next-f1338f8080-20240426";function Jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jv)}catch(n){console.error(n)}}Jv(),Jm.exports=$n;var Cy=Jm.exports,Qv,R0=Cy;Qv=R0.createRoot,R0.hydrateRoot;class Ly{constructor(){this.ctx=null,this.noiseBuf=null,this.crowdGain=null,this.crowdFilter=null,this.muted=!1}unlock(){if(!this.muted){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.buildNoiseBuffer(),this.startAmbience()}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}}toggleMute(){return this.muted=!this.muted,this.crowdGain&&this.ctx&&this.crowdGain.gain.setTargetAtTime(this.muted?0:.038,this.ctx.currentTime,.08),this.muted||this.unlock(),this.muted}buildNoiseBuffer(){if(!this.ctx)return;const e=this.ctx.sampleRate,t=e*3,i=this.ctx.createBuffer(1,t,e),r=i.getChannelData(0);let s=0,a=0,o=0;for(let l=0;l<t;l++){const c=Math.random()*2-1;s=.99765*s+c*.099046,a=.963*a+c*.2965164,o=.57*o+c*1.0526913,r[l]=(s+a+o+c*.1848)*.16}this.noiseBuf=i}startAmbience(){if(!this.ctx||!this.noiseBuf)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=480,t.Q.value=.65;const i=this.ctx.createGain();i.gain.value=this.muted?0:.038,e.connect(t),t.connect(i),i.connect(this.ctx.destination),e.start(),this.crowdFilter=t,this.crowdGain=i}setTension(e){if(!this.ctx||!this.crowdGain||!this.crowdFilter||this.muted)return;const t=this.ctx.currentTime,i=Math.max(0,Math.min(1,e));this.crowdGain.gain.setTargetAtTime(.034+i*.042,t,.18),this.crowdFilter.frequency.setTargetAtTime(460+i*340,t,.18)}whistle(){if(this.unlock(),!this.ctx||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createGain();t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(.11,e+.03),t.gain.setValueAtTime(.1,e+.34),t.gain.exponentialRampToValueAtTime(1e-4,e+.55),t.connect(this.ctx.destination);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=38,r.gain.value=45,i.connect(r);for(const s of[2790,3015]){const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(s,e),r.connect(a.frequency),a.connect(t),a.start(e),a.stop(e+.56)}i.start(e),i.stop(e+.56)}footstep(e=.7){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=.045*e,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(115,t),r.frequency.exponentialRampToValueAtTime(42,t+.065),s.gain.setValueAtTime(i,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.075),r.connect(s),s.connect(this.ctx.destination),r.start(t),r.stop(t+.08);const a=this.ctx.createBufferSource();a.buffer=this.noiseBuf;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1400;const l=this.ctx.createGain();l.gain.setValueAtTime(i*.45,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.05),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t,Math.random()*1.5,.06)}uiTick(e=520){if(this.unlock(),!this.ctx||this.muted)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,t),i.frequency.exponentialRampToValueAtTime(e*1.25,t+.04),r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.045),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.05)}shuttleLock(e){if(this.unlock(),!this.ctx||this.muted)return;const t=this.ctx.currentTime;if(e==="perfect")for(const[i,r]of[740,1110].entries()){const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(r,t+i*.035),a.gain.setValueAtTime(.11,t+i*.035),a.gain.exponentialRampToValueAtTime(1e-4,t+i*.035+.18),s.connect(a),a.connect(this.ctx.destination),s.start(t+i*.035),s.stop(t+i*.035+.19)}else if(e==="good"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(580,t),r.gain.setValueAtTime(.08,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.11),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.12)}else{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(190,t),i.frequency.exponentialRampToValueAtTime(110,t+.14),r.gain.setValueAtTime(.075,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.15),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.16)}}kick(e,t){if(this.unlock(),!this.ctx||!this.noiseBuf||this.muted)return;const i=this.ctx.currentTime,r=t==="panenka"?.38:t==="power"?Math.max(.85,Math.min(1.22,.78+e*.45)):Math.max(.55,Math.min(1.02,.58+e*.42)),s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t==="panenka"?135:155*r,i),s.frequency.exponentialRampToValueAtTime(36,i+.14),a.gain.setValueAtTime(.32*r,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.17),s.connect(a),a.connect(this.ctx.destination),s.start(i),s.stop(i+.18);const o=this.ctx.createBufferSource();o.buffer=this.noiseBuf;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=t==="placed"?820:t==="power"?1180:980,l.Q.value=1.3;const c=this.ctx.createGain();c.gain.setValueAtTime(.18*r,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.085),o.connect(l),l.connect(c),c.connect(this.ctx.destination),o.start(i,Math.random(),.1)}gloveSave(e=!0){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=e?1:.7,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(210,t),r.frequency.exponentialRampToValueAtTime(68,t+.09),s.gain.setValueAtTime(.2*i,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.1),r.connect(s),s.connect(this.ctx.destination),r.start(t),r.stop(t+.11);const a=this.ctx.createBufferSource();a.buffer=this.noiseBuf;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1650,o.Q.value=1.1;const l=this.ctx.createGain();l.gain.setValueAtTime(.16*i,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.08),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t,Math.random(),.09)}postClang(){if(!this.ctx||this.muted)return;const e=this.ctx.currentTime;[392,818,1285,1940].forEach((i,r)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type=r===0?"triangle":"sine",s.frequency.setValueAtTime(i,e),s.frequency.exponentialRampToValueAtTime(i*.985,e+.48),a.gain.setValueAtTime(.13/(r+1),e),a.gain.exponentialRampToValueAtTime(1e-4,e+.45-r*.06),s.connect(a),a.connect(this.ctx.destination),s.start(e),s.stop(e+.5)})}netSwish(){if(!this.ctx||!this.noiseBuf||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuf;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(1750,e),i.frequency.exponentialRampToValueAtTime(520,e+.28),i.Q.value=.9;const r=this.ctx.createGain();r.gain.setValueAtTime(.001,e),r.gain.linearRampToValueAtTime(.14,e+.035),r.gain.exponentialRampToValueAtTime(1e-4,e+.32),t.connect(i),i.connect(r),r.connect(this.ctx.destination),t.start(e,Math.random(),.34)}crowdReaction(e){if(!this.ctx||!this.noiseBuf||this.muted)return;const t=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",e==="cheer"?(r.frequency.setValueAtTime(580,t),r.frequency.linearRampToValueAtTime(1180,t+.25),r.frequency.exponentialRampToValueAtTime(640,t+2.1),r.Q.value=.55):(r.frequency.setValueAtTime(720,t),r.frequency.exponentialRampToValueAtTime(340,t+1.2),r.Q.value=.95);const s=this.ctx.createGain();s.gain.setValueAtTime(.001,t),s.gain.linearRampToValueAtTime(e==="cheer"?.24:.15,t+.14),s.gain.exponentialRampToValueAtTime(1e-4,t+(e==="cheer"?2.25:1.45)),i.connect(r),r.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+2.35)}}const vt=new Ly;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="187",Dy=0,P0=1,Ny=2,Vl=1,e_=2,Ha=3,as=0,On=1,Dn=2,Qs=0,Qa=1,Sc=2,C0=3,L0=4,Iy=5,Ns=100,Uy=101,ky=102,Fy=103,Oy=104,zy=200,By=201,Gy=202,Hy=203,t_=204,n_=205,Vy=206,Wy=207,Xy=208,qy=209,Yy=210,$y=211,Ky=212,jy=213,Zy=214,sf=0,af=1,of=2,So=3,lf=4,cf=5,uf=6,hf=7,Wd=0,Jy=1,Qy=2,Ki=0,i_=1,r_=2,s_=3,Jc=4,a_=5,o_=6,l_=7,c_=300,la=301,Mo=302,Lu=303,Du=304,Mc=1e3,Yi=1001,ff=1002,rn=1003,eS=1004,Jo=1005,In=1006,Nu=1007,Sr=1008,Wn=1009,u_=1010,h_=1011,wo=1012,Xd=1013,Ni=1014,gi=1015,Ii=1016,qd=1017,Yd=1018,ca=1020,f_=35902,d_=35899,p_=1021,m_=1022,Pi=1023,Ir=1026,Mr=1027,$d=1028,Kd=1029,os=1030,jd=1031,Zd=1033,Wl=33776,Xl=33777,ql=33778,Yl=33779,df=35840,pf=35841,mf=35842,gf=35843,vf=36196,_f=37492,xf=37496,yf=37488,Sf=37489,wc=37490,Mf=37491,wf=37808,Tf=37809,Ef=37810,bf=37811,Af=37812,Rf=37813,Pf=37814,Cf=37815,Lf=37816,Df=37817,Nf=37818,If=37819,Uf=37820,kf=37821,Ff=36492,Of=36494,zf=36495,Bf=36283,Gf=36284,Tc=36285,Hf=36286,tS=3200,Ec=0,nS=1,_r="",Qt="srgb",bc="srgb-linear",Ac="linear",dt="srgb",Iu=7680,iS=519,rS=512,sS=513,aS=514,g_=515,oS=516,lS=517,v_=518,__=519,x_=35044,D0=35048,N0="300 es",vi=2e3,To=2001;function cS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uS(){const n=Rc("canvas");return n.style.display="block",n}const I0={};function Pc(...n){const e="THREE."+n.shift();console.log(e,...n)}function y_(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=y_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=y_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $l(...n){const e=n.join(" ");e in I0||(I0[e]=!0,Oe(...n))}function hS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const fS={[sf]:sf,[of]:uf,[lf]:lf,[So]:cf,[af]:af,[uf]:of,[hf]:hf,[cf]:So};class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Vf=180/Math.PI;function fs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function dS(n,e){return(n%e+e)%e}function ku(n,e,t){return(1-t)*n+t*e}function pS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function S_(n,e){if(e.constructor===Float32Array)return n;const t=Qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function M_(n,e){if(e.constructor===Float32Array)return n;const t=Qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const sp=class sp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sp.prototype.isVector2=!0;let Be=sp;class ma{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(f!==_||l!==d||c!==m||h!==v){let p=l*d+c*m+h*v+f*_;p<0&&(d=-d,m=-m,v=-v,_=-_,p=-p);let u=1-o;if(p<.9995){const g=Math.acos(p),y=Math.sin(g);u=Math.sin(u*g)/y,o=Math.sin(o*g)/y,l=l*u+d*o,c=c*u+m*o,h=h*u+v*o,f=f*u+_*o}else{l=l*u+d*o,c=c*u+m*o,h=h*u+v*o,f=f*u+_*o;const g=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=g,c*=g,h*=g,f*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+h*f+l*m-c*d,e[t+1]=l*v+h*d+c*f-o*m,e[t+2]=c*v+h*m+o*d-l*f,e[t+3]=h*v-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"YXZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"ZXY":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"ZYX":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"YZX":this._x=d*h*f+c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f-d*m*v;break;case"XZY":this._x=d*h*f-c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f+d*m*v;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ap=class ap{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(U0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(U0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ap.prototype.isVector3=!0;let z=ap;const Fu=new z,U0=new ma,op=class op{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],v=i[8],_=r[0],p=r[3],u=r[6],g=r[1],y=r[4],S=r[7],E=r[2],w=r[5],x=r[8];return s[0]=a*_+o*g+l*E,s[3]=a*p+o*y+l*w,s[6]=a*u+o*S+l*x,s[1]=c*_+h*g+f*E,s[4]=c*p+h*y+f*w,s[7]=c*u+h*S+f*x,s[2]=d*_+m*g+v*E,s[5]=d*p+m*y+v*w,s[8]=d*u+m*S+v*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,m=c*s-a*l,v=t*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return $l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ou.makeScale(e,t)),this}rotate(e){return $l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ou.makeRotation(-e)),this}translate(e,t){return $l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};op.prototype.isMatrix3=!0;let Ge=op;const Ou=new Ge,k0=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mS(){const n={enabled:!0,workingColorSpace:bc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=ea(r.r),r.g=ea(r.g),r.b=ea(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_r?Ac:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bc]:{primaries:e,whitePoint:i,transfer:Ac,toXYZ:k0,fromXYZ:F0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:k0,fromXYZ:F0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Qe=mS();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class gS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=Rc("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vS=0;class Jd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zu(r[a].image)):s.push(zu(r[a]))}else s=zu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function zu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let _S=0;const Bu=new z;class vn extends hs{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=Yi,r=Yi,s=In,a=Sr,o=Pi,l=Wn,c=vn.DEFAULT_ANISOTROPY,h=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=fs(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mc:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mc:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=c_;vn.DEFAULT_ANISOTROPY=1;const lp=class lp{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,E=(u+1)/2,w=(h+d)/4,x=(f+_)/4,M=(v+p)/4;return y>S&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=x/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=M/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=x/s,r=M/s),this.set(i,r,s,t),this}let g=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(f-_)/g,this.z=(d-h)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lp.prototype.isVector4=!0;let Ct=lp;class xS extends hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new vn({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends xS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class w_ extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yS extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Uc=class Uc{constructor(e,t,i,r,s,a,o,l,c,h,f,d,m,v,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,d,m,v,_,p)}set(e,t,i,r,s,a,o,l,c,h,f,d,m,v,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=v,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*f,v=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,v=c*h,_=c*f;t[0]=d+_*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,v=c*h,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*f,v=o*h,_=o*f;t[0]=l*h,t[4]=v*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,_=o*c;t[0]=l*h,t[4]=_-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+v,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=a*h,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SS,e,MS)}lookAt(e,t,i){const r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),or.crossVectors(i,Bn),or.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),or.crossVectors(i,Bn)),or.normalize(),Qo.crossVectors(Bn,or),r[0]=or.x,r[4]=Qo.x,r[8]=Bn.x,r[1]=or.y,r[5]=Qo.y,r[9]=Bn.y,r[2]=or.z,r[6]=Qo.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],v=i[2],_=i[6],p=i[10],u=i[14],g=i[3],y=i[7],S=i[11],E=i[15],w=r[0],x=r[4],M=r[8],C=r[12],A=r[1],L=r[5],D=r[9],U=r[13],P=r[2],N=r[6],X=r[10],G=r[14],F=r[3],k=r[7],W=r[11],Z=r[15];return s[0]=a*w+o*A+l*P+c*F,s[4]=a*x+o*L+l*N+c*k,s[8]=a*M+o*D+l*X+c*W,s[12]=a*C+o*U+l*G+c*Z,s[1]=h*w+f*A+d*P+m*F,s[5]=h*x+f*L+d*N+m*k,s[9]=h*M+f*D+d*X+m*W,s[13]=h*C+f*U+d*G+m*Z,s[2]=v*w+_*A+p*P+u*F,s[6]=v*x+_*L+p*N+u*k,s[10]=v*M+_*D+p*X+u*W,s[14]=v*C+_*U+p*G+u*Z,s[3]=g*w+y*A+S*P+E*F,s[7]=g*x+y*L+S*N+E*k,s[11]=g*M+y*D+S*X+E*W,s[15]=g*C+y*U+S*G+E*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],v=e[3],_=e[7],p=e[11],u=e[15],g=l*m-c*d,y=o*m-c*f,S=o*d-l*f,E=a*m-c*h,w=a*d-l*h,x=a*f-o*h;return t*(_*g-p*y+u*S)-i*(v*g-p*E+u*w)+r*(v*y-_*E+u*x)-s*(v*S-_*w+p*x)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],v=e[12],_=e[13],p=e[14],u=e[15],g=t*o-i*a,y=t*l-r*a,S=t*c-s*a,E=i*l-r*o,w=i*c-s*o,x=r*c-s*l,M=h*_-f*v,C=h*p-d*v,A=h*u-m*v,L=f*p-d*_,D=f*u-m*_,U=d*u-m*p,P=g*U-y*D+S*L+E*A-w*C+x*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=(o*U-l*D+c*L)*N,e[1]=(r*D-i*U-s*L)*N,e[2]=(_*x-p*w+u*E)*N,e[3]=(d*w-f*x-m*E)*N,e[4]=(l*A-a*U-c*C)*N,e[5]=(t*U-r*A+s*C)*N,e[6]=(p*S-v*x-u*y)*N,e[7]=(h*x-d*S+m*y)*N,e[8]=(a*D-o*A+c*M)*N,e[9]=(i*A-t*D-s*M)*N,e[10]=(v*w-_*S+u*g)*N,e[11]=(f*S-h*w-m*g)*N,e[12]=(o*C-a*L-l*M)*N,e[13]=(t*L-i*C+r*M)*N,e[14]=(_*y-v*E-p*g)*N,e[15]=(h*E-f*y+d*g)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,d=s*c,m=s*h,v=s*f,_=a*h,p=a*f,u=o*f,g=l*c,y=l*h,S=l*f,E=i.x,w=i.y,x=i.z;return r[0]=(1-(_+u))*E,r[1]=(m+S)*E,r[2]=(v-y)*E,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(d+u))*w,r[6]=(p+g)*w,r[7]=0,r[8]=(v+y)*x,r[9]=(p-g)*x,r[10]=(1-(d+_))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),l=vs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ui.copy(this);const c=1/a,h=1/o,f=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,t.setFromRotationMatrix(ui),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=vi,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===vi)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===To)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=vi,l=!1){const c=this.elements,h=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===vi)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===To)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Uc.prototype.isMatrix4=!0;let ut=Uc;const vs=new z,ui=new ut,SS=new z(0,0,0),MS=new z(1,1,1),or=new z,Qo=new z,Bn=new z,O0=new ut,z0=new ma;class tr{constructor(e=0,t=0,i=0,r=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return O0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return z0.setFromEuler(this),this.setFromQuaternion(z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class T_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const B0=new z,_s=new ma,ki=new ut,el=new z,Aa=new z,TS=new z,ES=new ma,G0=new z(1,0,0),H0=new z(0,1,0),V0=new z(0,0,1),W0={type:"added"},bS={type:"removed"},xs={type:"childadded",child:null},Gu={type:"childremoved",child:null};class Dt extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new z,t=new tr,i=new ma,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new T_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(H0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,t){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(H0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?el.copy(e):el.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Aa,el,this.up):ki.lookAt(el,Aa,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(ki),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(W0),xs.child=e,this.dispatchEvent(xs),xs.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bS),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(W0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,TS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,ES,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new z(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AS={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=dS(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Vu(a,s,e+1/3),this.g=Vu(a,s,e),this.b=Vu(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=E_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Qe.workingToColorSpace(dn.copy(this),e),Math.round($e(dn.r*255,0,255))*65536+Math.round($e(dn.g*255,0,255))*256+Math.round($e(dn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Qt){Qe.workingToColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(tl);const i=ku(lr.h,tl.h,t),r=ku(lr.s,tl.s,t),s=ku(lr.l,tl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Fe;Fe.NAMES=E_;class Qd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new Qd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class b_ extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new z,Fi=new z,Wu=new z,Oi=new z,ys=new z,Ss=new z,X0=new z,Xu=new z,qu=new z,Yu=new z,$u=new Ct,Ku=new Ct,ju=new Ct;class ii{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hi.subVectors(e,t),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hi.subVectors(r,t),Fi.subVectors(i,t),Wu.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Fi),l=hi.dot(Wu),c=Fi.dot(Fi),h=Fi.dot(Wu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return $u.setScalar(0),Ku.setScalar(0),ju.setScalar(0),$u.fromBufferAttribute(e,t),Ku.fromBufferAttribute(e,i),ju.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($u,s.x),a.addScaledVector(Ku,s.y),a.addScaledVector(ju,s.z),a}static isFrontFacing(e,t,i,r){return hi.subVectors(i,t),Fi.subVectors(e,t),hi.cross(Fi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),hi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ys.subVectors(r,i),Ss.subVectors(s,i),Xu.subVectors(e,i);const l=ys.dot(Xu),c=Ss.dot(Xu);if(l<=0&&c<=0)return t.copy(i);qu.subVectors(e,r);const h=ys.dot(qu),f=Ss.dot(qu);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(ys,a);Yu.subVectors(e,s);const m=ys.dot(Yu),v=Ss.dot(Yu);if(v>=0&&m<=v)return t.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Ss,o);const p=h*v-m*f;if(p<=0&&f-h>=0&&m-v>=0)return X0.subVectors(s,r),o=(f-h)/(f-h+(m-v)),t.copy(r).addScaledVector(X0,o);const u=1/(p+_+d);return a=_*u,o=d*u,t.copy(i).addScaledVector(ys,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ds{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(s,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),il.subVectors(this.max,Ra),Ms.subVectors(e.a,Ra),ws.subVectors(e.b,Ra),Ts.subVectors(e.c,Ra),cr.subVectors(ws,Ms),ur.subVectors(Ts,ws),Gr.subVectors(Ms,Ts);let t=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Gr.z,Gr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Gr.z,0,-Gr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Gr.y,Gr.x,0];return!Zu(t,Ms,ws,Ts,il)||(t=[1,0,0,0,1,0,0,0,1],!Zu(t,Ms,ws,Ts,il))?!1:(rl.crossVectors(cr,ur),t=[rl.x,rl.y,rl.z],Zu(t,Ms,ws,Ts,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new z,new z,new z,new z,new z,new z,new z,new z],fi=new z,nl=new ds,Ms=new z,ws=new z,Ts=new z,cr=new z,ur=new z,Gr=new z,Ra=new z,il=new z,rl=new z,Hr=new z;function Zu(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Hr.fromArray(n,s);const o=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),c=t.dot(Hr),h=i.dot(Hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bt=new z,sl=new Be;let RS=0;class zn extends hs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=x_,this.updateRanges=[],this.gpuType=gi,this.version=0,this._normalizationScale=e!==void 0?Qc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sl.fromBufferAttribute(this,t),sl.applyMatrix3(e),this.setXY(t,sl.x,sl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):S_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):M_(e,this.array)}}class A_ extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class R_ extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const PS=new ds,Pa=new z,Ju=new z;class ps{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):PS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Ju)),this.expandByPoint(Pa.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let CS=0;const Zn=new ut,Qu=new Dt,Es=new z,Gn=new ds,Ca=new ds,Kt=new z;class Ft extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cS(e)?R_:A_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Gn.min,Ca.min),Gn.expandByPoint(Kt),Kt.addVectors(Gn.max,Ca.max),Gn.expandByPoint(Kt)):(Gn.expandByPoint(Ca.min),Gn.expandByPoint(Ca.max))}Gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),Kt.add(Es)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new zn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new z,l[C]=new z;const h=new z,f=new z,d=new z,m=new Be,v=new Be,_=new Be,p=new z,u=new z;function g(C,A,L){c[C]=c[A]=c[L]=1,h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,L),m.fromBufferAttribute(s,C),v.fromBufferAttribute(s,A),_.fromBufferAttribute(s,L),f.sub(h),d.sub(h),v.sub(m),_.sub(m);const D=1/(v.x*_.y-_.x*v.y);isFinite(D)&&(p.copy(f).multiplyScalar(_.y).addScaledVector(d,-v.y).multiplyScalar(D),u.copy(d).multiplyScalar(v.x).addScaledVector(f,-_.x).multiplyScalar(D),o[C].add(p),o[A].add(p),o[L].add(p),l[C].add(u),l[A].add(u),l[L].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,A=y.length;C<A;++C){const L=y[C],D=L.start,U=L.count;for(let P=D,N=D+U;P<N;P+=3)g(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const S=new z,E=new z,w=new z,x=new z;function M(C){w.fromBufferAttribute(r,C),x.copy(w);const A=o[C];S.copy(A),S.sub(w.multiplyScalar(w.dot(A))).normalize(),E.crossVectors(x,A);const D=E.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,D)}for(let C=0,A=i.count;C<A;++C)c[C]&&M(C);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,h=new z,f=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)d[v++]=c[m++]}return new zn(d,h,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class LS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=x_,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=q0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=q0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function q0(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=fs()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const yn=new z;class Cc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Qc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Pc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new zn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):S_(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):M_(e,this.data.array)}}const eh=new z,DS=new z,NS=new Ge;class pr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=eh.subVectors(i,t).cross(DS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(eh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||NS.getNormalMatrix(e),r=this.coplanarPoint(eh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let IS=0;class ir extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Qa,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=t_,this.blendDst=n_,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Iu,this.stencilZFail=Iu,this.stencilZPass=Iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new pr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P_ extends ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bs;const La=new z,As=new z,Rs=new z,Ps=new Be,Da=new Be,C_=new ut,al=new z,Na=new z,ol=new z,Y0=new Be,th=new Be,$0=new Be;class US extends Dt{constructor(e=new P_){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new LS(t,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Cc(i,3,0,!1)),bs.setAttribute("uv",new Cc(i,2,3,!1))}this.geometry=bs,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),C_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ll(al.set(-.5,-.5,0),Rs,a,As,r,s),ll(Na.set(.5,-.5,0),Rs,a,As,r,s),ll(ol.set(.5,.5,0),Rs,a,As,r,s),Y0.set(0,0),th.set(1,0),$0.set(1,1);let o=e.ray.intersectTriangle(al,Na,ol,!1,La);if(o===null&&(ll(Na.set(-.5,.5,0),Rs,a,As,r,s),th.set(0,1),o=e.ray.intersectTriangle(al,ol,Na,!1,La),o===null))return;const l=e.ray.origin.distanceTo(La);l<e.near||l>e.far||t.push({distance:l,point:La.clone(),uv:ii.getInterpolation(La,al,Na,ol,Y0,th,$0,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function ll(n,e,t,i,r,s){Ps.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Da.x=s*Ps.x-r*Ps.y,Da.y=r*Ps.x+s*Ps.y):Da.copy(Ps),n.copy(e),n.x+=Da.x,n.y+=Da.y,n.applyMatrix4(C_)}const Bi=new z,nh=new z,cl=new z,ul=new z;class ep{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nh.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),ul.copy(this.origin).sub(nh);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cl),o=ul.dot(this.direction),l=-ul.dot(cl),c=ul.lengthSq(),h=Math.abs(1-a*a);let f,d,m,v;if(h>0)if(f=a*l-o,d=a*o-l,v=s*h,f>=0)if(d>=-v)if(d<=v){const _=1/h;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nh).addScaledVector(cl,d),m}intersectSphere(e,t){if(e.radius<0)return null;Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,m=e.z-a.z,v=t.x-a.x,_=t.y-a.y,p=t.z-a.z,u=i.x-a.x,g=i.y-a.y,y=i.z-a.z,S=Math.abs(l),E=Math.abs(c),w=Math.abs(h);let x,M,C,A,L,D,U,P,N,X,G,F;if(S>=E&&S>=w?(C=l,D=f,N=v,F=u,l>=0?(x=c,M=h,A=d,L=m,U=_,P=p,X=g,G=y):(x=h,M=c,A=m,L=d,U=p,P=_,X=y,G=g)):E>=w?(C=c,D=d,N=_,F=g,c>=0?(x=h,M=l,A=m,L=f,U=p,P=v,X=y,G=u):(x=l,M=h,A=f,L=m,U=v,P=p,X=u,G=y)):(C=h,D=m,N=p,F=y,h>=0?(x=l,M=c,A=f,L=d,U=v,P=_,X=u,G=g):(x=c,M=l,A=d,L=f,U=_,P=v,X=g,G=u)),C===0)return null;const k=x/C,W=M/C,Z=1/C,ae=A-k*D,we=L-W*D,J=U-k*N,V=P-W*N,se=X-k*F,le=G-W*F,ce=se*V-le*J,Ie=ae*le-we*se,et=J*we-V*ae;if(r){if(ce<0||Ie<0||et<0)return null}else if((ce<0||Ie<0||et<0)&&(ce>0||Ie>0||et>0))return null;const Re=ce+Ie+et;if(Re===0)return null;const Ye=Z*(ce*D+Ie*N+et*F);return(Re>0?Ye<0:Ye>0)?null:this.at(Ye/Re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ri extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const K0=new ut,Vr=new ep,hl=new ps,j0=new z,fl=new z,dl=new z,pl=new z,ih=new z,ml=new z,Z0=new z,gl=new z;class q extends Dt{constructor(e=new Ft,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(ih.fromBufferAttribute(f,e),a?ml.addScaledVector(ih,h):ml.addScaledVector(ih.sub(t),h))}t.add(ml)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(hl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(hl,j0)===null||Vr.origin.distanceToSquared(j0)>(e.far-e.near)**2))&&(K0.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(K0),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],u=a[p.materialIndex],g=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,E=y;S<E;S+=3){const w=o.getX(S),x=o.getX(S+1),M=o.getX(S+2);r=vl(this,u,e,i,c,h,f,w,x,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const g=o.getX(p),y=o.getX(p+1),S=o.getX(p+2);r=vl(this,a,e,i,c,h,f,g,y,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],u=a[p.materialIndex],g=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,E=y;S<E;S+=3){const w=S,x=S+1,M=S+2;r=vl(this,u,e,i,c,h,f,w,x,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const g=p,y=p+1,S=p+2;r=vl(this,a,e,i,c,h,f,g,y,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function kS(n,e,t,i,r,s,a,o){let l;if(e.side===On?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===as,o),l===null)return null;gl.copy(o),gl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(gl);return c<t.near||c>t.far?null:{distance:c,point:gl.clone(),object:n}}function vl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,fl),n.getVertexPosition(l,dl),n.getVertexPosition(c,pl);const h=kS(n,e,t,i,fl,dl,pl,Z0);if(h){const f=new z;ii.getBarycoord(Z0,fl,dl,pl,f),r&&(h.uv=ii.getInterpolatedAttribute(r,o,l,c,f,new Be)),s&&(h.uv1=ii.getInterpolatedAttribute(s,o,l,c,f,new Be)),a&&(h.normal=ii.getInterpolatedAttribute(a,o,l,c,f,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};ii.getNormal(fl,dl,pl,d.normal),h.face=d,h.barycoord=f}return h}class L_ extends vn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=rn,h=rn,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J0 extends zn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new ut,Q0=new ut,_l=[],em=new ds,FS=new ut,Ia=new q,Ua=new ps;class tm extends q{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new J0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,FS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ds),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),em.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(em)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),Ua.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Cs),Q0.multiplyMatrices(i,Cs),Ia.matrixWorld=Q0,Ia.raycast(e,_l);for(let a=0,o=_l.length;a<o;a++){const l=_l[a];l.instanceId=s,l.object=this,t.push(l)}_l.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new J0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new L_(new Float32Array(r*this.count),r,this.count,$d,gi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wr=new ps,OS=new Be(.5,.5),xl=new z;class Eo{constructor(e=new pr,t=new pr,i=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],m=s[7],v=s[8],_=s[9],p=s[10],u=s[11],g=s[12],y=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,m-h,u-v,E-g).normalize(),r[1].setComponents(c+a,m+h,u+v,E+g).normalize(),r[2].setComponents(c+o,m+f,u+_,E+y).normalize(),r[3].setComponents(c-o,m-f,u-_,E-y).normalize(),i)r[4].setComponents(l,d,p,S).normalize(),r[5].setComponents(c-l,m-d,u-p,E-S).normalize();else if(r[4].setComponents(c-l,m-d,u-p,E-S).normalize(),t===vi)r[5].setComponents(c+l,m+d,u+p,E+S).normalize();else if(t===To)r[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=OS.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const nm=new ut;class tp{constructor(){this.coordinateSystem=vi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];nm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Eo),i[r].setFromProjectionMatrix(nm,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Eo),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new tp().copy(this)}}class D_ extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new z,Dc=new z,im=new ut,ka=new ep,yl=new ps,rh=new z,rm=new z;class zS extends Dt{constructor(e=new Ft,t=new D_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Lc.fromBufferAttribute(t,r-1),Dc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Lc.distanceTo(Dc);e.setAttribute("lineDistance",new ht(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),yl.radius+=s,e.ray.intersectsSphere(yl)===!1)return;im.copy(r).invert(),ka.copy(e.ray).applyMatrix4(im);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let _=m,p=v-1;_<p;_+=c){const u=h.getX(_),g=h.getX(_+1),y=Sl(this,e,ka,l,u,g,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(v-1),p=h.getX(m),u=Sl(this,e,ka,l,_,p,v-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let _=m,p=v-1;_<p;_+=c){const u=Sl(this,e,ka,l,_,_+1,_);u&&t.push(u)}if(this.isLineLoop){const _=Sl(this,e,ka,l,v-1,m,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sl(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Lc.fromBufferAttribute(o,r),Dc.fromBufferAttribute(o,s),t.distanceSqToSegment(Lc,Dc,rh,rm)>i)return;rh.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(rh);if(!(c<e.near||c>e.far))return{distance:c,point:rm.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const sm=new z,am=new z;class BS extends zS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)sm.fromBufferAttribute(t,r),am.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sm.distanceTo(am);e.setAttribute("lineDistance",new ht(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class N_ extends ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new ut,Wf=new ep,Ml=new ps,wl=new z;class GS extends Dt{constructor(e=new Ft,t=new N_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(r),Ml.radius+=s,e.ray.intersectsSphere(Ml)===!1)return;om.copy(r).invert(),Wf.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,_=m;v<_;v++){const p=c.getX(v);wl.fromBufferAttribute(f,p),lm(wl,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,_=m;v<_;v++)wl.fromBufferAttribute(f,v),lm(wl,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lm(n,e,t,i,r,s,a){const o=Wf.distanceSqToPoint(n);if(o<t){const l=new z;Wf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class I_ extends vn{constructor(e=[],t=la,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ga extends vn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ua extends vn{constructor(e,t,i=Ni,r,s,a,o=rn,l=rn,c,h=Ir,f=1){if(h!==Ir&&h!==Mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class U_ extends ua{constructor(e,t=Ni,i=la,r,s,a=rn,o=rn,l,c=Ir){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class k_ extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rt extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function v(_,p,u,g,y,S,E,w,x,M,C){const A=S/x,L=E/M,D=S/2,U=E/2,P=w/2,N=x+1,X=M+1;let G=0,F=0;const k=new z;for(let W=0;W<X;W++){const Z=W*L-U;for(let ae=0;ae<N;ae++){const we=ae*A-D;k[_]=we*g,k[p]=Z*y,k[u]=P,c.push(k.x,k.y,k.z),k[_]=0,k[p]=0,k[u]=w>0?1:-1,h.push(k.x,k.y,k.z),f.push(ae/x),f.push(1-W/M),G+=1}}for(let W=0;W<M;W++)for(let Z=0;Z<x;Z++){const ae=d+Z+N*W,we=d+Z+N*(W+1),J=d+(Z+1)+N*(W+1),V=d+(Z+1)+N*W;l.push(ae,we,V),l.push(we,J,V),F+=6}o.addGroup(m,F,C),m+=F,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ht extends Ft{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,m=2*f+d,v=i*2+s,_=r+1,p=new z,u=new z;for(let g=0;g<=v;g++){let y=0,S=0,E=0,w=0;if(g<=i){const C=g/i,A=C*Math.PI/2;S=-h-e*Math.cos(A),E=e*Math.sin(A),w=-e*Math.cos(A),y=C*f}else if(g<=i+s){const C=(g-i)/s;S=-h+C*t,E=e,w=0,y=f+C*d}else{const C=(g-i-s)/i,A=C*Math.PI/2;S=h+e*Math.sin(A),E=e*Math.cos(A),w=e*Math.sin(A),y=f+d+C*f}const x=Math.max(0,Math.min(1,y/m));let M=0;g===0?M=.5/r:g===v&&(M=-.5/r);for(let C=0;C<=r;C++){const A=C/r,L=A*Math.PI*2,D=Math.sin(L),U=Math.cos(L);u.x=-E*U,u.y=S,u.z=E*D,o.push(u.x,u.y,u.z),p.set(-E*U,w,E*D),p.normalize(),l.push(p.x,p.y,p.z),c.push(A+M,x)}if(g>0){const C=(g-1)*_;for(let A=0;A<r;A++){const L=C+A,D=C+A+1,U=g*_+A,P=g*_+A+1;a.push(L,D,U),a.push(D,P,U)}}}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class np extends Ft{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new z,h=new Be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const m=i+f/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ct extends Ft{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let v=0;const _=[],p=i/2;let u=0;g(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(m,2));function g(){const S=new z,E=new z;let w=0;const x=(t-e)/i;for(let M=0;M<=s;M++){const C=[],A=M/s,L=A*(t-e)+e;for(let D=0;D<=r;D++){const U=D/r,P=U*l+o,N=Math.sin(P),X=Math.cos(P);E.x=L*N,E.y=-A*i+p,E.z=L*X,f.push(E.x,E.y,E.z),S.set(N,x,X).normalize(),d.push(S.x,S.y,S.z),m.push(U,1-A),C.push(v++)}_.push(C)}for(let M=0;M<r;M++)for(let C=0;C<s;C++){const A=_[C][M],L=_[C+1][M],D=_[C+1][M+1],U=_[C][M+1];(e>0||C!==0)&&(h.push(A,L,U),w+=3),(t>0||C!==s-1)&&(h.push(L,D,U),w+=3)}c.addGroup(u,w,0),u+=w}function y(S){const E=v,w=new Be,x=new z;let M=0;const C=S===!0?e:t,A=S===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,p*A,0),d.push(0,A,0),m.push(.5,.5),v++;const L=v;for(let D=0;D<=r;D++){const P=D/r*l+o,N=Math.cos(P),X=Math.sin(P);x.x=C*X,x.y=p*A,x.z=C*N,f.push(x.x,x.y,x.z),d.push(0,A,0),w.x=N*.5+.5,w.y=X*.5*A+.5,m.push(w.x,w.y),v++}for(let D=0;D<r;D++){const U=E+D,P=L+D;S===!0?h.push(P,P+1,U):h.push(P+1,P,U),M+=3}c.addGroup(u,M,S===!0?1:2),u+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wn extends ct{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class HS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],d=i[r+1]-h,m=(a-h)/d;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Be:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,r=[],s=[],a=[],o=new z,l=new ut;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new z)}s[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos($e(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos($e(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function ip(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,m*=h,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const cm=new z,um=new z,sh=new ip,ah=new ip,oh=new ip;class VS extends HS{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new z){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(um.subVectors(r[0],r[1]).add(r[0]),c=um);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(cm.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=cm),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),v<1e-4&&(v=_),p<1e-4&&(p=_),sh.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,v,_,p),ah.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,v,_,p),oh.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,v,_,p)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),ah.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),oh.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(sh.calc(l),ah.calc(l),oh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class wr extends Ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=t/l,m=[],v=[],_=[],p=[];for(let u=0;u<h;u++){const g=u*d-a;for(let y=0;y<c;y++){const S=y*f-s;v.push(S,-g,0),_.push(0,0,1),p.push(y/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const y=g+c*u,S=g+c*(u+1),E=g+1+c*(u+1),w=g+1+c*u;m.push(y,S,w),m.push(S,E,w)}this.setIndex(m),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class eu extends Ft{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let f=e;const d=(t-e)/r,m=new z,v=new Be;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const u=s+p/i*a;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,h.push(v.x,v.y)}f+=d}for(let _=0;_<r;_++){const p=_*(i+1);for(let u=0;u<i;u++){const g=u+p,y=g,S=g+i+1,E=g+i+2,w=g+1;o.push(y,S,w),o.push(S,E,w)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Le extends Ft{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new z,d=new z,m=[],v=[],_=[],p=[];for(let u=0;u<=i;u++){const g=[],y=u/i,S=a+y*o,E=e*Math.cos(S),w=Math.sqrt(e*e-E*E);let x=0;u===0&&a===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){const C=M/t,A=r+C*s;f.x=-w*Math.cos(A),f.y=E,f.z=w*Math.sin(A),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(C+x,1-y),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<t;g++){const y=h[u][g+1],S=h[u][g],E=h[u+1][g],w=h[u+1][g+1];(u!==0||a>0)&&m.push(y,S,w),(u!==i-1||l<Math.PI)&&m.push(S,E,w)}this.setIndex(m),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nc extends Ft{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],f=[],d=new z,m=new z,v=new z;for(let _=0;_<=i;_++){const p=a+_/i*o;for(let u=0;u<=r;u++){const g=u/r*s;m.x=(e+t*Math.cos(p))*Math.cos(g),m.y=(e+t*Math.cos(p))*Math.sin(g),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),v.subVectors(m,d).normalize(),h.push(v.x,v.y,v.z),f.push(u/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=r;p++){const u=(r+1)*_+p-1,g=(r+1)*(_-1)+p-1,y=(r+1)*(_-1)+p,S=(r+1)*_+p;l.push(u,g,S),l.push(g,y,S)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ha(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(hm(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(hm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Sn(n){const e={};for(let t=0;t<n.length;t++){const i=ha(n[t]);for(const r in i)e[r]=i[r]}return e}function hm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function WS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function F_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const XS={clone:ha,merge:Sn};var qS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qS,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $S extends ls{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ee extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class KS extends ir{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Wd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jS extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZS extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class O_ extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class z_ extends O_{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const lh=new ut,fm=new z,dm=new z;class JS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;fm.setFromMatrixPosition(e.matrixWorld),t.position.copy(fm),dm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(lh,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===To||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tl=new z,El=new ma,Mi=new z;class B_ extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tl,El,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,El,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Tl,El,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,El,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new z,pm=new Be,mm=new Be;class ni extends B_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vf*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,pm,mm),t.subVectors(mm,pm)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class G_ extends B_{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class QS extends JS{constructor(){super(new G_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eo extends O_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new QS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ls=-90,Ds=1;class Xf extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(Ls,Ds,e,t);r.layers=this.layers,this.add(r);const s=new ni(Ls,Ds,e,t);s.layers=this.layers,this.add(s);const a=new ni(Ls,Ds,e,t);a.layers=this.layers,this.add(a);const o=new ni(Ls,Ds,e,t);o.layers=this.layers,this.add(o);const l=new ni(Ls,Ds,e,t);l.layers=this.layers,this.add(l);const c=new ni(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class eM extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function gm(n,e,t,i){const r=tM(i);switch(t){case p_:return n*e;case $d:return n*e/r.components*r.byteLength;case Kd:return n*e/r.components*r.byteLength;case os:return n*e*2/r.components*r.byteLength;case jd:return n*e*2/r.components*r.byteLength;case m_:return n*e*3/r.components*r.byteLength;case Pi:return n*e*4/r.components*r.byteLength;case Zd:return n*e*4/r.components*r.byteLength;case Wl:case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ql:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(n,16)*Math.max(e,8)/4;case df:case mf:return Math.max(n,8)*Math.max(e,8)/2;case vf:case _f:case yf:case Sf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xf:case wc:case Mf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Af:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Df:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ff:case Of:case zf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bf:case Gf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tc:case Hf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tM(n){switch(n){case Wn:case u_:return{byteLength:1,components:1};case wo:case h_:case Ii:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case Ni:case Xd:case gi:return{byteLength:4,components:1};case f_:case d_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H_(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nM(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],_=f[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const _=f[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rM=`#ifdef USE_ALPHAHASH
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
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
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
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hM=`#ifdef USE_BATCHING
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
#endif`,fM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gM=`#ifdef USE_IRIDESCENCE
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
#endif`,vM=`#ifdef USE_BUMPMAP
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bM=`#define PI 3.141592653589793
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
} // validated`,AM=`vec3 transformedNormal = objectNormal;
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
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",NM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$M=`#ifdef USE_ENVMAP
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
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QM=`PhysicalMaterial material;
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
#endif`,ew=`uniform sampler2D dfgLUT;
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
}`,tw=`
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
#endif`,nw=`#if defined( RE_IndirectDiffuse )
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
#endif`,iw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rw=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,sw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fw=`#if defined( USE_POINTS_UV )
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
#endif`,dw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gw=`#if defined( USE_MORPHCOLORS )
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
#endif`,vw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_w=`#ifdef USE_MORPHTARGETS
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
#endif`,xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ew=`#ifdef USE_NORMALMAP
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
#endif`,bw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gw=`float getShadowMask() {
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
}`,Hw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vw=`#ifdef USE_SKINNING
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
#endif`,Ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xw=`#ifdef USE_SKINNING
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
#endif`,qw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jw=`#ifdef USE_TRANSMISSION
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
#endif`,Zw=`#ifdef USE_TRANSMISSION
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
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i2=`uniform sampler2D t2D;
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`uniform float backgroundBlurriness;
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
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`#include <common>
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
}`,c2=`#if DEPTH_PACKING == 3200
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
}`,u2=`#define DISTANCE
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
}`,h2=`#define DISTANCE
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
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`uniform float scale;
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
}`,m2=`uniform vec3 diffuse;
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
}`,g2=`#include <common>
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
}`,v2=`uniform vec3 diffuse;
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
}`,_2=`#define LAMBERT
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
}`,x2=`#define LAMBERT
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
}`,y2=`#define MATCAP
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
}`,S2=`#define MATCAP
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
}`,M2=`#define NORMAL
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
}`,w2=`#define NORMAL
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
}`,T2=`#define PHONG
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
}`,E2=`#define PHONG
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
}`,b2=`#define STANDARD
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
}`,A2=`#define STANDARD
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
}`,R2=`#define TOON
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
}`,P2=`#define TOON
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
}`,C2=`uniform float size;
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
}`,L2=`uniform vec3 diffuse;
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
}`,D2=`#include <common>
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
}`,N2=`uniform vec3 color;
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
}`,I2=`uniform float rotation;
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
}`,U2=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:iM,alphahash_pars_fragment:rM,alphamap_fragment:sM,alphamap_pars_fragment:aM,alphatest_fragment:oM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:hM,batching_vertex:fM,begin_vertex:dM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:vM,clipping_planes_fragment:_M,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:SM,color_fragment:MM,color_pars_fragment:wM,color_pars_vertex:TM,color_vertex:EM,common:bM,defaultnormal_vertex:AM,displacementmap_pars_vertex:RM,displacementmap_vertex:PM,emissivemap_fragment:CM,emissivemap_pars_fragment:LM,colorspace_fragment:DM,colorspace_pars_fragment:NM,envmap_fragment:IM,envmap_common_pars_fragment:UM,envmap_pars_fragment:kM,envmap_pars_vertex:FM,envmap_physical_pars_fragment:$M,envmap_vertex:OM,fog_vertex:zM,fog_pars_vertex:BM,fog_fragment:GM,fog_pars_fragment:HM,gradientmap_pars_fragment:VM,lightmap_pars_fragment:WM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:qM,lights_pars_begin:YM,lights_toon_fragment:KM,lights_toon_pars_fragment:jM,lights_phong_fragment:ZM,lights_phong_pars_fragment:JM,lights_physical_fragment:QM,lights_physical_pars_fragment:ew,lights_fragment_begin:tw,lights_fragment_maps:nw,lights_fragment_end:iw,lightprobes_pars_fragment:rw,logdepthbuf_fragment:sw,logdepthbuf_pars_fragment:aw,logdepthbuf_pars_vertex:ow,logdepthbuf_vertex:lw,map_fragment:cw,map_pars_fragment:uw,map_particle_fragment:hw,map_particle_pars_fragment:fw,metalnessmap_fragment:dw,metalnessmap_pars_fragment:pw,morphinstance_vertex:mw,morphcolor_vertex:gw,morphnormal_vertex:vw,morphtarget_pars_vertex:_w,morphtarget_vertex:xw,normal_fragment_begin:yw,normal_fragment_maps:Sw,normal_pars_fragment:Mw,normal_pars_vertex:ww,normal_vertex:Tw,normalmap_pars_fragment:Ew,clearcoat_normal_fragment_begin:bw,clearcoat_normal_fragment_maps:Aw,clearcoat_pars_fragment:Rw,iridescence_pars_fragment:Pw,opaque_fragment:Cw,packing:Lw,premultiplied_alpha_fragment:Dw,project_vertex:Nw,dithering_fragment:Iw,dithering_pars_fragment:Uw,roughnessmap_fragment:kw,roughnessmap_pars_fragment:Fw,shadowmap_pars_fragment:Ow,shadowmap_pars_vertex:zw,shadowmap_vertex:Bw,shadowmask_pars_fragment:Gw,skinbase_vertex:Hw,skinning_pars_vertex:Vw,skinning_vertex:Ww,skinnormal_vertex:Xw,specularmap_fragment:qw,specularmap_pars_fragment:Yw,tonemapping_fragment:$w,tonemapping_pars_fragment:Kw,transmission_fragment:jw,transmission_pars_fragment:Zw,uv_pars_fragment:Jw,uv_pars_vertex:Qw,uv_vertex:e2,worldpos_vertex:t2,background_vert:n2,background_frag:i2,backgroundCube_vert:r2,backgroundCube_frag:s2,cube_vert:a2,cube_frag:o2,depth_vert:l2,depth_frag:c2,distance_vert:u2,distance_frag:h2,equirect_vert:f2,equirect_frag:d2,linedashed_vert:p2,linedashed_frag:m2,meshbasic_vert:g2,meshbasic_frag:v2,meshlambert_vert:_2,meshlambert_frag:x2,meshmatcap_vert:y2,meshmatcap_frag:S2,meshnormal_vert:M2,meshnormal_frag:w2,meshphong_vert:T2,meshphong_frag:E2,meshphysical_vert:b2,meshphysical_frag:A2,meshtoon_vert:R2,meshtoon_frag:P2,points_vert:C2,points_frag:L2,shadow_vert:D2,shadow_frag:N2,sprite_vert:I2,sprite_frag:U2},Me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},bi={basic:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Sn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Sn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Sn([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Sn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Sn([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Sn([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Sn([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Sn([Me.lights,Me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};bi.physical={uniforms:Sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const bl={r:0,b:0,g:0},k2=new ut,V_=new Ge;V_.set(-1,0,0,0,1,0,0,0,1);function F2(n,e,t,i,r,s){const a=new Fe(0);let o=r===!0?0:1,l,c,h=null,f=0,d=null;function m(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const S=g.backgroundBlurriness>0;y=e.get(y,S)}return y}function v(g){let y=!1;const S=m(g);S===null?p(a,o):S&&S.isColor&&(p(S,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(g,y){const S=m(y);S&&S.isCubeTexture?(c===void 0&&(c=new q(new rt(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:ha(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(k2.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(V_),c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==dt,(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new q(new wr(2,2),new ls({name:"BackgroundMaterial",uniforms:ha(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,y){g.getRGB(bl,F_(n)),t.buffers.color.setClear(bl.r,bl.g,bl.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(a,o)},render:v,addToRenderList:_,dispose:u}}function O2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(L,D,U,P,N){let X=!1;const G=f(L,P,U,D);s!==G&&(s=G,c(s.object)),X=m(L,P,U,N),X&&v(L,P,U,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(L,D,U,P),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,D,U,P){const N=P.wireframe===!0;let X=i[D.id];X===void 0&&(X={},i[D.id]=X);const G=L.isInstancedMesh===!0?L.id:0;let F=X[G];F===void 0&&(F={},X[G]=F);let k=F[U.id];k===void 0&&(k={},F[U.id]=k);let W=k[N];return W===void 0&&(W=d(l()),k[N]=W),W}function d(L){const D=[],U=[],P=[];for(let N=0;N<t;N++)D[N]=0,U[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:P,object:L,attributes:{},index:null}}function m(L,D,U,P){const N=s.attributes,X=D.attributes;let G=0;const F=U.getAttributes();for(const k in F)if(F[k].location>=0){const Z=N[k];let ae=X[k];if(ae===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function v(L,D,U,P){const N={},X=D.attributes;let G=0;const F=U.getAttributes();for(const k in F)if(F[k].location>=0){let Z=X[k];Z===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),N[k]=ae,G++}s.attributes=N,s.attributesNum=G,s.index=P}function _(){const L=s.newAttributes;for(let D=0,U=L.length;D<U;D++)L[D]=0}function p(L){u(L,0)}function u(L,D){const U=s.newAttributes,P=s.enabledAttributes,N=s.attributeDivisors;U[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),N[L]!==D&&(n.vertexAttribDivisor(L,D),N[L]=D)}function g(){const L=s.newAttributes,D=s.enabledAttributes;for(let U=0,P=D.length;U<P;U++)D[U]!==L[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function y(L,D,U,P,N,X,G){G===!0?n.vertexAttribIPointer(L,D,U,N,X):n.vertexAttribPointer(L,D,U,P,N,X)}function S(L,D,U,P){_();const N=P.attributes,X=U.getAttributes(),G=D.defaultAttributeValues;for(const F in X){const k=X[F];if(k.location>=0){let W=N[F];if(W===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const Z=W.normalized,ae=W.itemSize,we=e.get(W);if(we===void 0)continue;const J=we.buffer,V=we.type,se=we.bytesPerElement,le=V===n.INT||V===n.UNSIGNED_INT||W.gpuType===Xd;if(W.isInterleavedBufferAttribute){const ce=W.data,Ie=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,et=W.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Re=0;Re<k.locationSize;Re++)u(k.location+Re,ce.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<k.locationSize;Re++)p(k.location+Re);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Re=0;Re<k.locationSize;Re++)y(k.location+Re,ae/k.locationSize,V,Z,Ie*se,(et+ae/k.locationSize*Re)*se,le)}else{if(W.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)u(k.location+ce,W.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ce=0;ce<k.locationSize;ce++)p(k.location+ce);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ce=0;ce<k.locationSize;ce++)y(k.location+ce,ae/k.locationSize,V,Z,ae*se,ae/k.locationSize*ce*se,le)}}else if(G!==void 0){const Z=G[F];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(k.location,Z);break;case 3:n.vertexAttrib3fv(k.location,Z);break;case 4:n.vertexAttrib4fv(k.location,Z);break;default:n.vertexAttrib1fv(k.location,Z)}}}}g()}function E(){C();for(const L in i){const D=i[L];for(const U in D){const P=D[U];for(const N in P){const X=P[N];for(const G in X)h(X[G].object),delete X[G];delete P[N]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const U in D){const P=D[U];for(const N in P){const X=P[N];for(const G in X)h(X[G].object),delete X[G];delete P[N]}}delete i[L.id]}function x(L){for(const D in i){const U=i[D];for(const P in U){const N=U[P];if(N[L.id]===void 0)continue;const X=N[L.id];for(const G in X)h(X[G].object),delete X[G];delete N[L.id]}}}function M(L){for(const D in i){const U=i[D],P=L.isInstancedMesh===!0?L.id:0,N=U[P];if(N!==void 0){for(const X in N){const G=N[X];for(const F in G)h(G[F].object),delete G[F];delete N[X]}delete U[P],Object.keys(U).length===0&&delete i[D]}}}function C(){A(),a=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:g}}function z2(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function B2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==Pi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const M=x===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Wn&&x!==gi&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:S,maxSamples:E,samples:w}}function G2(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new pr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const g=s?0:i,y=g*4;let S=u.clippingState||null;l.value=S,S=h(v,d,y,m);for(let E=0;E!==y;++E)S[E]=t[E];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const u=m+_*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,S=m;y!==_;++y,S+=4)a.copy(f[y]).applyMatrix4(g,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}class rp extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new I_(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rt(5,5,5),s=new ls({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:Qs});s.uniforms.tEquirect.value=t;const a=new q(r,s),o=t.minFilter;return t.minFilter===Sr&&(t.minFilter=In),new Xf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const vm=256,H2=3,V2=20,W_=256,X_=16,W2=3,X2=new z,q2=new Fe;class Ic{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xf(1,10,null),this._boxMesh=new q(new rt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=X2}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,m=l.autoClearDepth,v=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(q2));const p=new Xf(i,r,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=m,l.autoClearStencil=v,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vm,pS(e))}_fromTexture(e,t){e.mapping===la||e.mapping===Mo?this._setSize(e.image.length===0?vm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=_m(e,!1,!1),i=Math.log2(e)-H2;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_m(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===la||e.mapping===Mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Y2(),this._integrationMaterial=$2());const t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/X_);for(let a=0;a<=i;a++){const o=Ic.lodToRoughness(a,i);if(a>i-W2)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(W_*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=K2());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function _m(n,e,t){return new rp(n,{minFilter:Sr,generateMipmaps:e,type:Ii,colorSpace:bc,depthBuffer:t})}function Do(n,e,t){return new ls({name:n,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:t,side:On,blending:Qs,depthTest:!1,depthWrite:!1})}function Y2(){return Do("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${W_}u

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
	`)}function $2(){return Do("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:X_}},`

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
	`)}function K2(){return Do("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${V2}
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
	`)}function xm(){return Do("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ym(){return Do("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function j2(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Lu||m===Du)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const _=new rp(v.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const m=d.mapping,v=m===Lu||m===Du,_=m===la||m===Mo;if(v||_){let p=t.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Ic(n)),p=v?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const g=d.image;return v&&g&&g.height>0||_&&g&&l(g)?(i===null&&(i=new Ic(n)),p=v?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,m){return m===Lu?d.mapping=la:m===Du&&(d.mapping=Mo),d}function l(d){let m=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&m++;return m===v}function c(d){const m=d.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Z2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$l("WebGLRenderer: "+i+" extension not supported."),r}}}function J2(n,e,t,i){const r={},s=new WeakMap,a=new FinalizationRegistry(v=>delete r[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const p in v.attributes)e.remove(v.attributes[p]);v.removeEventListener("dispose",o),delete r[v.id],a.unregister(v);const _=s.get(v);_&&(e.remove(_),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,_){return r[_.id]!==void 0||(_.addEventListener("dispose",o),r[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(v){const _=v.attributes;for(const p in _)e.update(_[p],n.ARRAY_BUFFER)}function f(v){const _=v.index,p=v.attributes.position;let u=0;if(p===void 0)return;const g=_!==null?_.array.length:p.array.length/3-1,y=p.count>=65535?R_:A_,S=new y(Math.ceil(g/3)*6,1),E=S.array;if(_!==null){const x=_.array;u=_.version;for(let M=0,C=0;M<g;M+=3){const A=x[M+0],L=x[M+1],D=x[M+2];E[C++]=A,E[C++]=L,E[C++]=L,E[C++]=D,E[C++]=D,E[C++]=A}}else{u=p.version;for(let x=0,M=0;x<g;x+=3){const C=x+0,A=x+1,L=x+2;E[M++]=C,E[M++]=A,E[M++]=A,E[M++]=L,E[M++]=L,E[M++]=C}}S.version=u;const w=s.get(v);w&&e.remove(w),s.set(v,S)}function d(v){const _=s.get(v);if(_){const p=v.index;p!==null&&_.version<p.version&&f(v)}else f(v);return s.get(v)}function m(){for(const v in r){const _=r[v].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:m}}function Q2(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,f*a,m),t.update(d,i,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let _=0;for(let p=0;p<m;p++)_+=d[p];t.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function eT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tT(n,e,t){const i=new WeakMap,r=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let A=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var m=A;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let E=o.attributes.position.count*S,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const x=new Float32Array(E*w*4*f),M=new w_(x,E,w,f);M.type=gi,M.needsUpdate=!0;const C=S*4;for(let L=0;L<f;L++){const D=u[L],U=g[L],P=y[L],N=E*w*4*L;for(let X=0;X<D.count;X++){const G=X*C;v===!0&&(r.fromBufferAttribute(D,X),x[N+G+0]=r.x,x[N+G+1]=r.y,x[N+G+2]=r.z,x[N+G+3]=0),_===!0&&(r.fromBufferAttribute(U,X),x[N+G+4]=r.x,x[N+G+5]=r.y,x[N+G+6]=r.z,x[N+G+7]=0),p===!0&&(r.fromBufferAttribute(P,X),x[N+G+8]=r.x,x[N+G+9]=r.y,x[N+G+10]=r.z,x[N+G+11]=P.itemSize===4?r.w:1)}}d={count:f,texture:M,size:new Be(E,w)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function nT(n,e,t,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const iT={[i_]:"LINEAR_TONE_MAPPING",[r_]:"REINHARD_TONE_MAPPING",[s_]:"CINEON_TONE_MAPPING",[Jc]:"ACES_FILMIC_TONE_MAPPING",[o_]:"AGX_TONE_MAPPING",[l_]:"NEUTRAL_TONE_MAPPING",[a_]:"CUSTOM_TONE_MAPPING"};function rT(n,e,t,i,r,s){const a=new Di(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Ft;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));const f=new $S({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new q(h,f),m=new G_(-1,1,1,-1,0,1);let v=null,_=null,p=!1,u,g=null,y=[],S=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let x=0;x<y.length;x++){const M=y[x];M.setSize&&M.setSize(E,w)}},this.setEffects=function(E){y=E,S=y.length>0&&y[0].isRenderPass===!0;const w=a.width,x=a.height;y.length>0&&o===null&&(o=new Di(w,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new Di(w,x,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&y.some(C=>C.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new ua(w,x),s===!0&&(c.format=Mr,c.type=ca)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let C=0;C<y.length;C++){const A=y[C];A.setSize&&A.setSize(w,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(E,w){if(p||E.toneMapping===Ki&&y.length===0)return!1;if(g=w,w!==null){const x=w.width,M=w.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return S===!1&&E.setRenderTarget(a),u=E.toneMapping,E.toneMapping=Ki,!0},this.hasRenderPass=function(){return S},this.end=function(E,w){E.toneMapping=u,p=!0;let x=a,M=o;for(let C=0;C<y.length;C++){const A=y[C];A.enabled!==!1&&(A.render(E,M,x,w),A.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(v!==E.outputColorSpace||_!==E.toneMapping){v=E.outputColorSpace,_=E.toneMapping,f.defines={},Qe.getTransfer(v)===dt&&(f.defines.SRGB_TRANSFER="");const C=iT[_];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(g),E.render(d,m),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const q_=new vn,Y_=new ua(1,1),$_=new U_(1),K_=new w_,j_=new yS,Z_=new I_,Sm=[],Mm=[],wm=new Float32Array(16),Tm=new Float32Array(9),Em=new Float32Array(4);function va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tu(n,e){let t=Mm[e];t===void 0&&(t=new Int32Array(e),Mm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function oT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function lT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function cT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Em.set(i),n.uniformMatrix2fv(this.addr,!1,Em),qt(t,i)}}function uT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Tm.set(i),n.uniformMatrix3fv(this.addr,!1,Tm),qt(t,i)}}function hT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;wm.set(i),n.uniformMatrix4fv(this.addr,!1,wm),qt(t,i)}}function fT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function pT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function gT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function xT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function nu(n){return n.version===0&&(n.compareFunction=__,n.needsUpdate=!0),n}function yT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=nu(Y_):s=q_,t.setTexture2D(e||s,r)}function ST(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||j_,r)}function MT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=nu($_):s=Z_,t.setTextureCube(e||s,r)}function wT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||K_,r)}function TT(n){switch(n){case 5126:return sT;case 35664:return aT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return hT;case 5124:case 35670:return fT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return vT;case 36295:return _T;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return wT}}function ET(n,e){n.uniform1fv(this.addr,e)}function bT(n,e){const t=va(e,this.size,2);n.uniform2fv(this.addr,t)}function AT(n,e){const t=va(e,this.size,3);n.uniform3fv(this.addr,t)}function RT(n,e){const t=va(e,this.size,4);n.uniform4fv(this.addr,t)}function PT(n,e){const t=va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CT(n,e){const t=va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function LT(n,e){const t=va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DT(n,e){n.uniform1iv(this.addr,e)}function NT(n,e){n.uniform2iv(this.addr,e)}function IT(n,e){n.uniform3iv(this.addr,e)}function UT(n,e){n.uniform4iv(this.addr,e)}function kT(n,e){n.uniform1uiv(this.addr,e)}function FT(n,e){n.uniform2uiv(this.addr,e)}function OT(n,e){n.uniform3uiv(this.addr,e)}function zT(n,e){n.uniform4uiv(this.addr,e)}function BT(n,e,t){const i=this.cache,r=e.length,s=tu(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=nu(Y_):a=q_;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function GT(n,e,t){const i=this.cache,r=e.length,s=tu(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||j_,s[a])}function HT(n,e,t){const i=this.cache,r=e.length,s=tu(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=nu($_):a=Z_;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function VT(n,e,t){const i=this.cache,r=e.length,s=tu(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||K_,s[a])}function WT(n){switch(n){case 5126:return ET;case 35664:return bT;case 35665:return AT;case 35666:return RT;case 35674:return PT;case 35675:return CT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return NT;case 35668:case 35672:return IT;case 35669:case 35673:return UT;case 5125:return kT;case 36294:return FT;case 36295:return OT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return VT}}class XT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TT(t.type)}}class qT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WT(t.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function bm(n,e){n.seq.push(e),n.map[e.id]=e}function $T(n,e,t){const i=n.name,r=i.length;for(ch.lastIndex=0;;){const s=ch.exec(i),a=ch.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bm(t,c===void 0?new XT(o,n,e):new qT(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new YT(o),bm(t,f)),t=f}}}class Kl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$T(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Am(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const KT=37297;let jT=0;function ZT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Rm=new Ge;function JT(n){Qe._getMatrix(Rm,Qe.workingColorSpace,n);const e=`mat3( ${Rm.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Ac:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ZT(n.getShaderSource(e),o)}else return s}function QT(n,e){const t=JT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const eE={[i_]:"Linear",[r_]:"Reinhard",[s_]:"Cineon",[Jc]:"ACESFilmic",[o_]:"AgX",[l_]:"Neutral",[a_]:"Custom"};function tE(n,e){const t=eE[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Al=new z;function nE(){Qe.getLuminanceCoefficients(Al);const n=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function rE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Va(n){return n!==""}function Cm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(n){return n.replace(aE,oE)}function oE(n,e){const t=qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return qf(t)}const lE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(n){return n.replace(lE,cE)}function cE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const uE={[Vl]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function hE(n){return uE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fE={[Mo]:"ENVMAP_MODE_REFRACTION"};function dE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pE={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[Jy]:"ENVMAP_BLENDING_MIX",[Qy]:"ENVMAP_BLENDING_ADD"};function mE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pE[n.combine]||"ENVMAP_BLENDING_NONE"}function gE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=dE(t),f=mE(t),d=iE(t),m=rE(s),v=r.createProgram();let _,p,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Va).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(_=[Nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[Nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ki?tE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,QT("linearToOutputTexel",t.outputColorSpace),nE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),a=qf(a),a=Cm(a,t),a=Lm(a,t),o=qf(o),o=Cm(o,t),o=Lm(o,t),a=Dm(a),o=Dm(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const g=u+_+a,y=u+p+o,S=Am(r,r.VERTEX_SHADER,g),E=Am(r,r.FRAGMENT_SHADER,y);r.attachShader(v,S),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(A){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",D=r.getShaderInfoLog(S)||"",U=r.getShaderInfoLog(E)||"",P=L.trim(),N=D.trim(),X=U.trim();let G=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,S,E);else{const k=Pm(r,S,"vertex"),W=Pm(r,E,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+k+`
`+W)}else P!==""?Oe("WebGLProgram: Program Info Log:",P):(N===""||X==="")&&(F=!1);F&&(A.diagnostics={runnable:G,programLog:P,vertexShader:{log:N,prefix:_},fragmentShader:{log:X,prefix:p}})}r.deleteShader(S),r.deleteShader(E),x=new Kl(r,v),M=sE(r,v)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(v,KT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let vE=0;class _E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xE(e),t.set(e,i)),i}}class xE{constructor(e){this.id=vE++,this.code=e,this.usedTimes=0}}function yE(n){return n===os||n===wc||n===Tc}function SE(n,e,t,i,r,s){const a=new T_,o=new _E,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,M,C,A,L,D){const U=A.fog,P=L.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||N,X),F=d[x.type];let k=i.precision;x.precision!==null&&(k=i.getMaxPrecision(x.precision),k!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));const W=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=W!==void 0?W.length:0;let ae=0;P.morphAttributes.position!==void 0&&(ae=1),P.morphAttributes.normal!==void 0&&(ae=2),P.morphAttributes.color!==void 0&&(ae=3);let we,J,V,se;if(F){const Se=bi[F];we=Se.vertexShader,J=Se.fragmentShader}else{we=x.vertexShader,J=x.fragmentShader;const Se=o.getVertexShaderStage(x),ft=o.getFragmentShaderStage(x);o.update(x,Se,ft),V=Se.id,se=ft.id}const le=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),Ie=L.isInstancedMesh===!0,et=L.isBatchedMesh===!0,Re=!!x.map,Ye=!!x.matcap,tt=!!G,Ve=tt&&G.isPMREMTexture===!0,Je=!!x.aoMap,ot=!!x.lightMap,on=!!x.bumpMap&&x.wireframe===!1,Mt=!!x.normalMap,jn=!!x.displacementMap,Ot=!!x.emissiveMap,An=!!x.metalnessMap,Rn=!!x.roughnessMap,Pn=x.anisotropy>0,H=x.clearcoat>0,Cn=x.diffuseRoughness>0,mt=x.dispersion>0,_t=x.retroreflectivity>0,ye=x.iridescence>0,Ut=x.sheen>0,ke=x.transmission>0,ze=Pn&&!!x.anisotropyMap,R=H&&!!x.clearcoatMap,T=H&&!!x.clearcoatNormalMap,Y=H&&!!x.clearcoatRoughnessMap,oe=Cn&&!!x.diffuseRoughnessMap,re=ye&&!!x.iridescenceMap,de=ye&&!!x.iridescenceThicknessMap,_e=Ut&&!!x.sheenColorMap,te=Ut&&!!x.sheenRoughnessMap,ne=!!x.specularMap,me=!!x.specularColorMap,I=!!x.specularIntensityMap,ie=ke&&!!x.transmissionMap,ee=ke&&!!x.thicknessMap,ge=!!x.gradientMap,fe=!!x.alphaMap,pe=x.alphaTest>0,Ne=!!x.alphaHash,Xe=!!x.extensions;let he=Ki;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(he=n.toneMapping);const Ue=Ve?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,We={shaderID:F,shaderType:x.type,shaderName:x.name,vertexShader:we,fragmentShader:J,defines:x.defines,customVertexShaderID:V,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:et,batchingColor:et&&L._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&L.instanceColor!==null,instancingMorph:Ie&&L.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:Ye,envMap:tt,envMapMode:tt&&G.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ue.length-1:null,envMapSize:Ve?Ue[0].width:null,aoMap:Je,lightMap:ot,bumpMap:on,normalMap:Mt,displacementMap:jn,emissiveMap:Ot,normalMapObjectSpace:Mt&&x.normalMapType===nS,normalMapTangentSpace:Mt&&x.normalMapType===Ec,packedNormalMap:Mt&&x.normalMapType===Ec&&yE(x.normalMap.format),metalnessMap:An,roughnessMap:Rn,anisotropy:Pn,anisotropyMap:ze,clearcoat:H,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:Y,diffuseRoughness:Cn,diffuseRoughnessMap:oe,dispersion:mt,retroreflection:_t,iridescence:ye,iridescenceMap:re,iridescenceThicknessMap:de,sheen:Ut,sheenColorMap:_e,sheenRoughnessMap:te,specularMap:ne,specularColorMap:me,specularIntensityMap:I,transmission:ke,transmissionMap:ie,thicknessMap:ee,gradientMap:ge,opaque:x.transparent===!1&&x.blending===Qa&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Ne,combine:x.combine,mapUv:Re&&m(x.map.channel),aoMapUv:Je&&m(x.aoMap.channel),lightMapUv:ot&&m(x.lightMap.channel),bumpMapUv:on&&m(x.bumpMap.channel),normalMapUv:Mt&&m(x.normalMap.channel),displacementMapUv:jn&&m(x.displacementMap.channel),emissiveMapUv:Ot&&m(x.emissiveMap.channel),metalnessMapUv:An&&m(x.metalnessMap.channel),roughnessMapUv:Rn&&m(x.roughnessMap.channel),anisotropyMapUv:ze&&m(x.anisotropyMap.channel),clearcoatMapUv:R&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&m(x.sheenRoughnessMap.channel),specularMapUv:ne&&m(x.specularMap.channel),specularColorMapUv:me&&m(x.specularColorMap.channel),specularIntensityMapUv:I&&m(x.specularIntensityMap.channel),transmissionMapUv:ie&&m(x.transmissionMap.channel),thicknessMapUv:ee&&m(x.thicknessMap.channel),alphaMapUv:fe&&m(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Mt||Pn),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Re||fe),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ae,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&x.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(M,x),u(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function u(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function g(x){const M=d[x.type];let C;if(M){const A=bi[M];C=XS.clone(A.uniforms)}else C=x.uniforms;return C}function y(x,M){let C=h.get(M);return C!==void 0?++C.usedTimes:(C=new gE(n,M,x,r),c.push(C),h.set(M,C)),C}function S(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:g,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:w}}function ME(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function wE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Im(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Um(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,v,_,p,u){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:u},n[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=v,g.materialVariant=a(d),g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=p,g.group=u),e++,g}function l(d,m,v,_,p,u,g){g.reversedDepth===!0&&(p=-p);const y=o(d,m,v,_,p,u);v.transmission>0?i.push(y):v.transparent===!0?r.push(y):t.push(y)}function c(d,m,v,_,p,u){const g=o(d,m,v,_,p,u);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function h(d,m){t.length>1&&t.sort(d||wE),i.length>1&&i.sort(m||Im),r.length>1&&r.sort(m||Im)}function f(){for(let d=e,m=n.length;d<m;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function TE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Um,n.set(i,[a])):r>=s.length?(a=new Um,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function EE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Fe};break;case"SpotLight":t={position:new z,direction:new z,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function bE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AE=0;function RE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PE(n){const e=new EE,t=bE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new ut,a=new ut;function o(c){let h=0,f=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,v=0,_=0,p=0,u=0,g=0,y=0,S=0,E=0,w=0,x=0,M=0,C=0,A=0;c.sort(RE);for(let D=0,U=c.length;D<U;D++){const P=c[D],N=P.color,X=P.intensity,G=P.distance;let F=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===os?F=P.shadow.map.texture:F=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*X,f+=N.g*X,d+=N.b*X;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],X);A++}else if(P.isSunLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,Z=t.get(P);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[v]=Z,i.sunShadowMap[v]=F;const ae=W.getViewportCount();for(let we=0;we<ae;we++)i.sunShadowMatrix[_+we]=W.getMatrix(we),i.sunShadowCascade[_+we]=W._cascadeData[we];_+=ae,v++}i.sun[m]=k,m++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,Z=t.get(P);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=k,p++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(X),k.distance=G,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[g]=k;const W=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,W.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[g]=W.matrix,P.castShadow){const Z=t.get(P);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=F,x++}g++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(N).multiplyScalar(X),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=k,y++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const W=P.shadow,Z=t.get(P);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,i.pointShadow[u]=Z,i.pointShadowMap[u]=F,i.pointShadowMatrix[u]=P.shadow.matrix,w++}i.point[u]=k,u++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(X),k.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[S]=k,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==u||L.spotLength!==g||L.rectAreaLength!==y||L.hemiLength!==S||L.numSunShadows!==v||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==A)&&(i.sun.length=m,i.directional.length=p,i.spot.length=g,i.rectArea.length=y,i.point.length=u,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,L.sunLength=m,L.directionalLength=p,L.pointLength=u,L.spotLength=g,L.rectAreaLength=y,L.hemiLength=S,L.numSunShadows=v,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=A,i.version=AE++)}function l(c,h){let f=0,d=0,m=0,v=0,_=0,p=0;const u=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const S=c[g];if(S.isSunLight){const E=i.sun[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(u),f++}else if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),d++}else if(S.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),v++}else if(S.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),a.identity(),s.copy(S.matrixWorld),s.premultiply(u),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:o,setupView:l,state:i}}function km(n){const e=new PE(n),t=[],i=[],r=[];function s(f){h.camera=f,t.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function CE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new km(n),e.set(r,[o])):s>=a.length?(o=new km(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const LE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DE=`uniform sampler2D shadow_pass;
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
}`,NE=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],IE=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Fm=new ut,Fa=new z,uh=new z;function UE(n,e,t){let i=new Eo;const r=new Be,s=new Be,a=new Ct,o=new jS,l=new ZS,c={},h=t.maxTextureSize,f={[as]:On,[On]:as,[Dn]:Dn},d=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:LE,fragmentShader:DE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ft;v.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new q(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let u=this.type;this.render=function(w,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===e_&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vl);const C=n.getRenderTarget(),A=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Qs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=u!==this.type;U&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=w.length;P<N;P++){const X=w[P],G=X.shadow;if(G===void 0){Oe("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const F=G.getFrameExtents();r.multiply(F),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/F.x),r.x=s.x*F.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/F.y),r.y=s.y*F.y,G.mapSize.y=s.y));const k=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=k,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ha){if(X.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Di(r.x,r.y,{format:os,type:Ii,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new ua(r.x,r.y,gi),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Ir,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn}else X.isPointLight?(G.map=new rp(r.x),G.map.depthTexture=new U_(r.x,Ni)):(G.map=new Di(r.x,r.y),G.map.depthTexture=new ua(r.x,r.y,Ni)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Ir,this.type===Vl?(G.map.depthTexture.compareFunction=k?v_:g_,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const W=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,M);const Z=G.camera.layers.mask&4294967294?G.camera.layers:M.layers;for(let ae=0;ae<W;ae++){const we=G.getCamera(ae);if(X.isPointLight){const J=G.camera,V=G.matrix,se=X.distance||J.far;se!==J.far&&(J.far=se,J.updateProjectionMatrix()),Fa.setFromMatrixPosition(X.matrixWorld),J.position.copy(Fa),uh.copy(J.position),uh.add(NE[ae]),J.up.copy(IE[ae]),J.lookAt(uh),J.updateMatrixWorld(),V.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Fm.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Fm,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(G.map),n.clear());const J=G.getViewport(ae);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),D.viewport(a)}i=G.getFrustum(ae),S(x,M,we,X,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Ha&&g(G,M),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(C,A,L)};function g(w,x){const M=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Di(r.x,r.y,{format:os,type:Ii}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,M,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,M,m,_,null)}function y(w,x,M,C){let A=null;const L=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)A=L;else if(A=M.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const D=A.uuid,U=x.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let N=P[U];N===void 0&&(N=A.clone(),P[U]=N,x.addEventListener("dispose",E)),A=N}if(A.visible=x.visible,A.wireframe=x.wireframe,C===Ha?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=n.properties.get(A);D.light=M}return A}function S(w,x,M,C,A,L){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Ha)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);const P=e.update(w),N=w.material;if(Array.isArray(N)){const X=P.groups;for(let G=0,F=X.length;G<F;G++){const k=X[G],W=N[k.materialIndex];if(W&&W.visible){const Z=y(w,W,C,L);w.onBeforeShadow(n,w,x,M,P,Z,k),n.renderBufferDirect(M,null,P,Z,w,k),w.onAfterShadow(n,w,x,M,P,Z,k)}}}else if(N.visible){const X=y(w,N,C,L);w.onBeforeShadow(n,w,x,M,P,X,null),n.renderBufferDirect(M,null,P,X,w,null),w.onAfterShadow(n,w,x,M,P,X,null)}}const U=w.children;for(let P=0,N=U.length;P<N;P++)S(U[P],x,M,C,A,L)}function E(w){w.target.removeEventListener("dispose",E);for(const M in c){const C=c[M],A=w.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function kE(n,e){function t(){let I=!1;const ie=new Ct;let ee=null;const ge=new Ct(0,0,0,0);return{setMask:function(fe){ee!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),ee=fe)},setLocked:function(fe){I=fe},setClear:function(fe,pe,Ne,Xe,he){he===!0&&(fe*=Xe,pe*=Xe,Ne*=Xe),ie.set(fe,pe,Ne,Xe),ge.equals(ie)===!1&&(n.clearColor(fe,pe,Ne,Xe),ge.copy(ie))},reset:function(){I=!1,ee=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,ee=null,ge=null,fe=null;return{setReversed:function(pe){if(ie!==pe){const Ne=e.get("EXT_clip_control");pe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ie=pe;const Xe=fe;fe=null,this.setClear(Xe)}},getReversed:function(){return ie},setTest:function(pe){pe?ce(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(pe){ee!==pe&&!I&&(n.depthMask(pe),ee=pe)},setFunc:function(pe){if(ie&&(pe=fS[pe]),ge!==pe){switch(pe){case sf:n.depthFunc(n.NEVER);break;case af:n.depthFunc(n.ALWAYS);break;case of:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case lf:n.depthFunc(n.EQUAL);break;case cf:n.depthFunc(n.GEQUAL);break;case uf:n.depthFunc(n.GREATER);break;case hf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=pe}},setLocked:function(pe){I=pe},setClear:function(pe){fe!==pe&&(fe=pe,ie&&(pe=1-pe),n.clearDepth(pe))},reset:function(){I=!1,ee=null,ge=null,fe=null,ie=!1}}}function r(){let I=!1,ie=null,ee=null,ge=null,fe=null,pe=null,Ne=null,Xe=null,he=null;return{setTest:function(Ue){I||(Ue?ce(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Ue){ie!==Ue&&!I&&(n.stencilMask(Ue),ie=Ue)},setFunc:function(Ue,We,Se){(ee!==Ue||ge!==We||fe!==Se)&&(n.stencilFunc(Ue,We,Se),ee=Ue,ge=We,fe=Se)},setOp:function(Ue,We,Se){(pe!==Ue||Ne!==We||Xe!==Se)&&(n.stencilOp(Ue,We,Se),pe=Ue,Ne=We,Xe=Se)},setLocked:function(Ue){I=Ue},setClear:function(Ue){he!==Ue&&(n.clearStencil(Ue),he=Ue)},reset:function(){I=!1,ie=null,ee=null,ge=null,fe=null,pe=null,Ne=null,Xe=null,he=null}}}const s=new t,a=new i,o=new r;let l={};const c=new WeakMap;let h={},f={},d={},m=new WeakMap,v=[],_=null,p=!1,u=null,g=null,y=null,S=null,E=null,w=null,x=null,M=new Fe(0,0,0),C=0,A=!1,L=null,D=null,U=null,P=null,N=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=F>=2);let W=null,Z={};const ae=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),J=new Ct().fromArray(ae),V=new Ct().fromArray(we);function se(I,ie,ee,ge){const fe=new Uint8Array(4),pe=n.createTexture();n.bindTexture(I,pe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ee;Ne++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ie+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return pe}const le={};le[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(So),on(!1),Mt(P0),ce(n.CULL_FACE),Je(Qs);function ce(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Ie(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function et(I,ie){return d[I]!==ie?(n.bindFramebuffer(I,ie),d[I]=ie,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(I,ie){let ee=v,ge=!1;if(I){ee=m.get(ie),ee===void 0&&(ee=[],m.set(ie,ee));const fe=I.textures;if(ee.length!==fe.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Ne=fe.length;pe<Ne;pe++)ee[pe]=n.COLOR_ATTACHMENT0+pe;ee.length=fe.length,ge=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ee)}function Ye(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const tt={[Ns]:n.FUNC_ADD,[Uy]:n.FUNC_SUBTRACT,[ky]:n.FUNC_REVERSE_SUBTRACT};tt[Fy]=n.MIN,tt[Oy]=n.MAX;const Ve={[zy]:n.ZERO,[By]:n.ONE,[Gy]:n.SRC_COLOR,[t_]:n.SRC_ALPHA,[Yy]:n.SRC_ALPHA_SATURATE,[Xy]:n.DST_COLOR,[Vy]:n.DST_ALPHA,[Hy]:n.ONE_MINUS_SRC_COLOR,[n_]:n.ONE_MINUS_SRC_ALPHA,[qy]:n.ONE_MINUS_DST_COLOR,[Wy]:n.ONE_MINUS_DST_ALPHA,[$y]:n.CONSTANT_COLOR,[Ky]:n.ONE_MINUS_CONSTANT_COLOR,[jy]:n.CONSTANT_ALPHA,[Zy]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(I,ie,ee,ge,fe,pe,Ne,Xe,he,Ue){if(I===Qs){p===!0&&(Ie(n.BLEND),p=!1);return}if(p===!1&&(ce(n.BLEND),p=!0),I!==Iy){if(I!==u||Ue!==A){if((g!==Ns||E!==Ns)&&(n.blendEquation(n.FUNC_ADD),g=Ns,E=Ns),Ue)switch(I){case Qa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.ONE,n.ONE);break;case C0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case L0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",I);break}else switch(I){case Qa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case C0:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L0:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",I);break}y=null,S=null,w=null,x=null,M.set(0,0,0),C=0,u=I,A=Ue}return}fe=fe||ie,pe=pe||ee,Ne=Ne||ge,(ie!==g||fe!==E)&&(n.blendEquationSeparate(tt[ie],tt[fe]),g=ie,E=fe),(ee!==y||ge!==S||pe!==w||Ne!==x)&&(n.blendFuncSeparate(Ve[ee],Ve[ge],Ve[pe],Ve[Ne]),y=ee,S=ge,w=pe,x=Ne),(Xe.equals(M)===!1||he!==C)&&(n.blendColor(Xe.r,Xe.g,Xe.b,he),M.copy(Xe),C=he),u=I,A=!1}function ot(I,ie){I.side===Dn?Ie(n.CULL_FACE):ce(n.CULL_FACE);let ee=I.side===On;ie&&(ee=!ee),on(ee),I.blending===Qa&&I.transparent===!1?Je(Qs):Je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function on(I){L!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),L=I)}function Mt(I){I!==Dy?(ce(n.CULL_FACE),I!==D&&(I===P0?n.cullFace(n.BACK):I===Ny?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),D=I}function jn(I){I!==U&&(G&&n.lineWidth(I),U=I)}function Ot(I,ie,ee){I?(ce(n.POLYGON_OFFSET_FILL),(P!==ie||N!==ee)&&(P=ie,N=ee,a.getReversed()&&(ie=-ie,ee=-ee),n.polygonOffset(ie,ee))):Ie(n.POLYGON_OFFSET_FILL)}function An(I){I?ce(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Rn(I){I===void 0&&(I=n.TEXTURE0+X-1),W!==I&&(n.activeTexture(I),W=I)}function Pn(I,ie,ee){ee===void 0&&(W===null?ee=n.TEXTURE0+X-1:ee=W);let ge=Z[ee];ge===void 0&&(ge={type:void 0,texture:void 0},Z[ee]=ge),(ge.type!==I||ge.texture!==ie)&&(W!==ee&&(n.activeTexture(ee),W=ee),n.bindTexture(I,ie||le[I]),ge.type=I,ge.texture=ie)}function H(){const I=Z[W];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Cn(){try{n.compressedTexImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function mt(){try{n.compressedTexImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function _t(){try{n.texSubImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function ye(){try{n.texSubImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function Ut(){try{n.compressedTexSubImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function ze(){try{n.texStorage2D(...arguments)}catch(I){at("WebGLState:",I)}}function R(){try{n.texStorage3D(...arguments)}catch(I){at("WebGLState:",I)}}function T(){try{n.texImage2D(...arguments)}catch(I){at("WebGLState:",I)}}function Y(){try{n.texImage3D(...arguments)}catch(I){at("WebGLState:",I)}}function oe(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function re(I,ie){f[I]!==ie&&(n.pixelStorei(I,ie),f[I]=ie)}function de(I){J.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function _e(I){V.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),V.copy(I))}function te(I,ie){let ee=c.get(ie);ee===void 0&&(ee=new WeakMap,c.set(ie,ee));let ge=ee.get(I);ge===void 0&&(ge=n.getUniformBlockIndex(ie,I.name),n.uniformBlockBinding(ie,ge,ge),ee.set(I,ge))}function ne(I,ie,ee){const fe=c.get(ie).get(I);l[fe]!==ee&&(n.bindBufferBase(n.UNIFORM_BUFFER,fe,ee),l[fe]=ee)}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,Z={},d={},l={},m=new WeakMap,v=[],_=null,p=!1,u=null,g=null,y=null,S=null,E=null,w=null,x=null,M=new Fe(0,0,0),C=0,A=!1,L=null,D=null,U=null,P=null,N=null,J.set(0,0,n.canvas.width,n.canvas.height),V.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:Ie,bindFramebuffer:et,drawBuffers:Re,useProgram:Ye,setBlending:Je,setMaterial:ot,setFlipSided:on,setCullFace:Mt,setLineWidth:jn,setPolygonOffset:Ot,setScissorTest:An,activeTexture:Rn,bindTexture:Pn,unbindTexture:H,compressedTexImage2D:Cn,compressedTexImage3D:mt,texImage2D:T,texImage3D:Y,pixelStorei:re,getParameter:oe,updateUBOMapping:te,uniformBlockBinding:ne,texStorage2D:ze,texStorage3D:R,texSubImage2D:_t,texSubImage3D:ye,compressedTexSubImage2D:Ut,compressedTexSubImage3D:ke,scissor:de,viewport:_e,reset:me}}function FE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,f=new Set;let d;const m=new WeakMap,v=new Set,_=new FinalizationRegistry(R=>v.delete(R));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(R,T){return p?new OffscreenCanvas(R,T):Rc("canvas")}function g(R,T,Y){let oe=1;const re=ze(R);if((re.width>Y||re.height>Y)&&(oe=Y/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const de=Math.floor(oe*re.width),_e=Math.floor(oe*re.height);d===void 0&&(d=u(de,_e));const te=T?u(de,_e):d;return te.width=de,te.height=_e,te.getContext("2d").drawImage(R,0,0,de,_e),Oe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+de+"x"+_e+")."),te}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function y(R){return R.generateMipmaps}function S(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,T,Y,oe,re,de=!1){if(R!==null){if(n[R]!==void 0)return n[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=T;if(T===n.RED&&(Y===n.FLOAT&&(te=n.R32F),Y===n.HALF_FLOAT&&(te=n.R16F),Y===n.UNSIGNED_BYTE&&(te=n.R8),Y===n.UNSIGNED_SHORT&&_e&&(te=_e.R16_EXT),Y===n.SHORT&&_e&&(te=_e.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.R8UI),Y===n.UNSIGNED_SHORT&&(te=n.R16UI),Y===n.UNSIGNED_INT&&(te=n.R32UI),Y===n.BYTE&&(te=n.R8I),Y===n.SHORT&&(te=n.R16I),Y===n.INT&&(te=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(te=n.RG32F),Y===n.HALF_FLOAT&&(te=n.RG16F),Y===n.UNSIGNED_BYTE&&(te=n.RG8),Y===n.UNSIGNED_SHORT&&_e&&(te=_e.RG16_EXT),Y===n.SHORT&&_e&&(te=_e.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RG8UI),Y===n.UNSIGNED_SHORT&&(te=n.RG16UI),Y===n.UNSIGNED_INT&&(te=n.RG32UI),Y===n.BYTE&&(te=n.RG8I),Y===n.SHORT&&(te=n.RG16I),Y===n.INT&&(te=n.RG32I)),T===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGB16UI),Y===n.UNSIGNED_INT&&(te=n.RGB32UI),Y===n.BYTE&&(te=n.RGB8I),Y===n.SHORT&&(te=n.RGB16I),Y===n.INT&&(te=n.RGB32I)),T===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),Y===n.UNSIGNED_INT&&(te=n.RGBA32UI),Y===n.BYTE&&(te=n.RGBA8I),Y===n.SHORT&&(te=n.RGBA16I),Y===n.INT&&(te=n.RGBA32I)),T===n.RGB&&(Y===n.UNSIGNED_SHORT&&_e&&(te=_e.RGB16_EXT),Y===n.SHORT&&_e&&(te=_e.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),T===n.RGBA){const ne=de?Ac:Qe.getTransfer(re);Y===n.FLOAT&&(te=n.RGBA32F),Y===n.HALF_FLOAT&&(te=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(te=ne===dt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&_e&&(te=_e.RGBA16_EXT),Y===n.SHORT&&_e&&(te=_e.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(R,T){let Y;return R?T===null||T===Ni||T===ca?Y=n.DEPTH24_STENCIL8:T===gi?Y=n.DEPTH32F_STENCIL8:T===wo&&(Y=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ni||T===ca?Y=n.DEPTH_COMPONENT24:T===gi?Y=n.DEPTH_COMPONENT32F:T===wo&&(Y=n.DEPTH_COMPONENT16),Y}function M(R,T){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==In?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){const T=new WeakRef(R);i.get(R).__ref=T,v.add(T),_.register(R,T,T)}function A(R){const T=i.get(R).__ref;T!==void 0&&(v.delete(T),_.unregister(T))}function L(R){U(R.target)}function D(R){P(R.target)}function U(R){R.removeEventListener("dispose",L),A(R),X(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&f.delete(R)}function P(R){R.removeEventListener("dispose",D),A(R),F(R)}function N(){for(const R of v){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):U(T))}v.clear(),f.clear()}function X(R){const T=i.get(R);if(T.__webglInit===void 0)return;const Y=R.source,oe=m.get(Y);if(oe){const re=oe[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&G(R),Object.keys(oe).length===0&&m.delete(Y)}i.remove(R)}function G(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const Y=R.source,oe=m.get(Y);delete oe[T.__cacheKey],a.memory.textures--}function F(R){const T=i.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const Y=R.depthTexture;if(Y&&Y.renderTarget===R&&U(Y),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let de=0;de<T.__webglFramebuffer[re].length;de++)n.deleteFramebuffer(T.__webglFramebuffer[re][de]);else n.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)n.deleteFramebuffer(T.__webglFramebuffer[re]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const oe=R.textures;for(let re=0,de=oe.length;re<de;re++){const _e=i.get(oe[re]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(oe[re])}i.remove(R)}let k=0;function W(){k=0}function Z(){return k}function ae(R){k=R}function we(){const R=k;return R>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function J(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function V(R,T){const Y=i.get(R);if(R.isVideoTexture&&Ut(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){const oe=R.image;if(oe===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(Y,R,T);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function se(R,T){const Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){ot(Y,R,T);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function le(R,T){const Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){ot(Y,R,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function ce(R,T){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){on(Y,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}const Ie={[Mc]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[ff]:n.MIRRORED_REPEAT},et={[rn]:n.NEAREST,[eS]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Nu]:n.LINEAR_MIPMAP_NEAREST,[Sr]:n.LINEAR_MIPMAP_LINEAR},Re={[rS]:n.NEVER,[__]:n.ALWAYS,[sS]:n.LESS,[g_]:n.LEQUAL,[aS]:n.EQUAL,[v_]:n.GEQUAL,[oS]:n.GREATER,[lS]:n.NOTEQUAL};function Ye(R,T){if(T.type===gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===In||T.magFilter===Nu||T.magFilter===Jo||T.magFilter===Sr||T.minFilter===In||T.minFilter===Nu||T.minFilter===Jo||T.minFilter===Sr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ie[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ie[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ie[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,et[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,et[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===rn||T.minFilter!==Jo&&T.minFilter!==Sr||T.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function tt(R,T){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",L),C(T));const oe=T.source;let re=m.get(oe);re===void 0&&(re={},m.set(oe,re));const de=J(T);if(de!==R.__cacheKey){re[de]===void 0&&(re[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),re[de].usedTimes++;const _e=re[R.__cacheKey];_e!==void 0&&(re[R.__cacheKey].usedTimes--,_e.usedTimes===0&&G(T)),R.__cacheKey=de,R.__webglTexture=re[de].texture}return Y}function Ve(R,T,Y){return Math.floor(Math.floor(R/Y)/T)}function Je(R,T,Y,oe){const de=R.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Y,oe,T.data);else{de.sort((I,ie)=>I.start-ie.start);let _e=0;for(let I=1;I<de.length;I++){const ie=de[_e],ee=de[I],ge=ie.start+ie.count,fe=Ve(ee.start,T.width,4),pe=Ve(ie.start,T.width,4);ee.start<=ge+1&&fe===pe&&Ve(ee.start+ee.count-1,T.width,4)===fe?ie.count=Math.max(ie.count,ee.start+ee.count-ie.start):(++_e,de[_e]=ee)}de.length=_e+1;const te=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let I=0,ie=de.length;I<ie;I++){const ee=de[I],ge=Math.floor(ee.start/4),fe=Math.ceil(ee.count/4),pe=ge%T.width,Ne=Math.floor(ge/T.width),Xe=fe,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(n.TEXTURE_2D,0,pe,Ne,Xe,he,Y,oe,T.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function ot(R,T,Y){let oe=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(oe=n.TEXTURE_3D);const re=tt(R,T),de=T.source;t.bindTexture(oe,R.__webglTexture,n.TEXTURE0+Y);const _e=i.get(de);if(de.version!==_e.__version||re===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const he=Qe.getPrimaries(Qe.workingColorSpace),Ue=T.colorSpace===_r?null:Qe.getPrimaries(T.colorSpace),We=T.colorSpace===_r||he===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ne=g(T.image,!1,r.maxTextureSize);ne=ke(T,ne);const me=s.convert(T.format,T.colorSpace),I=s.convert(T.type);let ie=w(T.internalFormat,me,I,T.normalized,T.colorSpace,T.isVideoTexture);Ye(oe,T);let ee;const ge=T.mipmaps,fe=T.isVideoTexture!==!0,pe=_e.__version===void 0||re===!0,Ne=de.dataReady,Xe=M(T,ne);if(T.isDepthTexture)ie=x(T.format===Mr,T.type),pe&&(fe?t.texStorage2D(n.TEXTURE_2D,1,ie,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,ie,ne.width,ne.height,0,me,I,null));else if(T.isDataTexture)if(ge.length>0){fe&&pe&&t.texStorage2D(n.TEXTURE_2D,Xe,ie,ge[0].width,ge[0].height);for(let he=0,Ue=ge.length;he<Ue;he++)ee=ge[he],fe?Ne&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ee.width,ee.height,me,I,ee.data):t.texImage2D(n.TEXTURE_2D,he,ie,ee.width,ee.height,0,me,I,ee.data);T.generateMipmaps=!1}else fe?(pe&&t.texStorage2D(n.TEXTURE_2D,Xe,ie,ne.width,ne.height),Ne&&Je(T,ne,me,I)):t.texImage2D(n.TEXTURE_2D,0,ie,ne.width,ne.height,0,me,I,ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){fe&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,ie,ge[0].width,ge[0].height,ne.depth);for(let he=0,Ue=ge.length;he<Ue;he++)if(ee=ge[he],T.format!==Pi)if(me!==null)if(fe){if(Ne)if(T.layerUpdates.size>0){const We=gm(ee.width,ee.height,T.format,T.type);for(const Se of T.layerUpdates){const ft=ee.data.subarray(Se*We/ee.data.BYTES_PER_ELEMENT,(Se+1)*We/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Se,ee.width,ee.height,1,me,ft)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,ne.depth,me,ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,ie,ee.width,ee.height,ne.depth,0,ee.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,ne.depth,me,I,ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,ie,ee.width,ee.height,ne.depth,0,me,I,ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{fe&&pe&&t.texStorage2D(n.TEXTURE_2D,Xe,ie,ge[0].width,ge[0].height);for(let he=0,Ue=ge.length;he<Ue;he++)ee=ge[he],T.format!==Pi?me!==null?fe?Ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ee.width,ee.height,me,ee.data):t.compressedTexImage2D(n.TEXTURE_2D,he,ie,ee.width,ee.height,0,ee.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Ne&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ee.width,ee.height,me,I,ee.data):t.texImage2D(n.TEXTURE_2D,he,ie,ee.width,ee.height,0,me,I,ee.data)}else if(T.isDataArrayTexture)if(fe){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,ie,ne.width,ne.height,ne.depth),Ne)if(T.layerUpdates.size>0){const he=gm(ne.width,ne.height,T.format,T.type);for(const Ue of T.layerUpdates){const We=ne.data.subarray(Ue*he/ne.data.BYTES_PER_ELEMENT,(Ue+1)*he/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ue,ne.width,ne.height,1,me,I,We)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,I,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ie,ne.width,ne.height,ne.depth,0,me,I,ne.data);else if(T.isData3DTexture)fe?(pe&&t.texStorage3D(n.TEXTURE_3D,Xe,ie,ne.width,ne.height,ne.depth),Ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,I,ne.data)):t.texImage3D(n.TEXTURE_3D,0,ie,ne.width,ne.height,ne.depth,0,me,I,ne.data);else if(T.isFramebufferTexture){if(pe)if(fe)t.texStorage2D(n.TEXTURE_2D,Xe,ie,ne.width,ne.height);else{let he=ne.width,Ue=ne.height;for(let We=0;We<Xe;We++)t.texImage2D(n.TEXTURE_2D,We,ie,he,Ue,0,me,I,null),he>>=1,Ue>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ne.parentNode!==he){he.appendChild(ne),f.add(T),he.onpaint=Ue=>{const We=Ue.changedElements;for(const Se of f)We.includes(Se.image)&&(Se.needsUpdate=!0)},he.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{const We=n.RGBA,Se=n.RGBA,ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,We,Se,ft,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ge.length>0){if(fe&&pe){const he=ze(ge[0]);t.texStorage2D(n.TEXTURE_2D,Xe,ie,he.width,he.height)}for(let he=0,Ue=ge.length;he<Ue;he++)ee=ge[he],fe?Ne&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,me,I,ee):t.texImage2D(n.TEXTURE_2D,he,ie,me,I,ee);T.generateMipmaps=!1}else if(fe){if(pe){const he=ze(ne);t.texStorage2D(n.TEXTURE_2D,Xe,ie,he.width,he.height)}Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,I,ne)}else t.texImage2D(n.TEXTURE_2D,0,ie,me,I,ne);y(T)&&T.mipmapsAutoUpdate===!0&&S(oe),_e.__version=de.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function on(R,T,Y){if(T.image.length!==6)return;const oe=tt(R,T),re=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+Y);const de=i.get(re);if(re.version!==de.__version||oe===!0){t.activeTexture(n.TEXTURE0+Y);const _e=Qe.getPrimaries(Qe.workingColorSpace),te=T.colorSpace===_r?null:Qe.getPrimaries(T.colorSpace),ne=T.colorSpace===_r||_e===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,I=T.image[0]&&T.image[0].isDataTexture,ie=[];for(let Se=0;Se<6;Se++)!me&&!I?ie[Se]=g(T.image[Se],!0,r.maxCubemapSize):ie[Se]=I?T.image[Se].image:T.image[Se],ie[Se]=ke(T,ie[Se]);const ee=ie[0],ge=s.convert(T.format,T.colorSpace),fe=s.convert(T.type);let pe=w(T.internalFormat,ge,fe,T.normalized,T.colorSpace);const Ne=T.isVideoTexture!==!0,Xe=de.__version===void 0||oe===!0,he=re.dataReady;let Ue=M(T,ee);Ye(n.TEXTURE_CUBE_MAP,T);let We;if(T.isDepthTexture){if(pe=x(T.format===Mr,T.type),Xe)if(Ne)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,pe,ee.width,ee.height);else for(let Se=0;Se<6;Se++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,ee.width,ee.height,0,ge,fe,null)}else if(me){Ne&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,pe,ee.width,ee.height);for(let Se=0;Se<6;Se++){We=ie[Se].mipmaps;for(let ft=0;ft<We.length;ft++){const Yt=We[ft];T.format!==Pi?ge!==null?Ne?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft,0,0,Yt.width,Yt.height,ge,Yt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft,pe,Yt.width,Yt.height,0,Yt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft,0,0,Yt.width,Yt.height,ge,fe,Yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft,pe,Yt.width,Yt.height,0,ge,fe,Yt.data)}}}else{if(We=T.mipmaps,Ne&&Xe){We.length>0&&Ue++;const Se=ze(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,pe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(I){Ne?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ie[Se].width,ie[Se].height,ge,fe,ie[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,ie[Se].width,ie[Se].height,0,ge,fe,ie[Se].data);for(let ft=0;ft<We.length;ft++){const rr=We[ft].image[Se].image;Ne?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft+1,0,0,rr.width,rr.height,ge,fe,rr.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft+1,pe,rr.width,rr.height,0,ge,fe,rr.data)}}else{Ne?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ge,fe,ie[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,ge,fe,ie[Se]);for(let ft=0;ft<We.length;ft++){const Yt=We[ft];Ne?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft+1,0,0,ge,fe,Yt.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ft+1,pe,ge,fe,Yt.image[Se])}}}y(T)&&T.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),de.__version=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Mt(R,T,Y,oe,re,de){const _e=s.convert(Y.format,Y.colorSpace),te=s.convert(Y.type),ne=w(Y.internalFormat,_e,te,Y.normalized,Y.colorSpace),me=i.get(T),I=i.get(Y);if(I.__renderTarget=T,!me.__hasExternalTextures){const ie=Math.max(1,T.width>>de),ee=Math.max(1,T.height>>de);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,de,ne,ie,ee,T.depth,0,_e,te,null):t.texImage2D(re,de,ne,ie,ee,0,_e,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ye(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,re,I.__webglTexture,0,_t(T)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,re,I.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function jn(R,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){const oe=T.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,de=x(T.stencilBuffer,re),_e=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(T),de,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(T),de,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,R)}else{const oe=T.textures;for(let re=0;re<oe.length;re++){const de=oe[re],_e=s.convert(de.format,de.colorSpace),te=s.convert(de.type),ne=w(de.internalFormat,_e,te,de.normalized,de.colorSpace);ye(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(T),ne,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(T),ne,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ne,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(R,T,Y){const oe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=i.get(T.depthTexture);re.__renderTarget=T;const de=oe?T.depthTexture.image[0]:T.depthTexture.image;(!re.__webglTexture||de.width!==T.width||de.height!==T.height)&&(de.width=T.width,de.height=T.height,T.depthTexture.needsUpdate=!0),oe?ce(T.depthTexture,0):V(T.depthTexture,0);const _e=re.__webglTexture,te=_t(T),ne=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,me=T.depthTexture.format===Mr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ir)ye(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ne,_e,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,me,ne,_e,0);else if(T.depthTexture.format===Mr)ye(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ne,_e,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,me,ne,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function An(R){const T=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const oe=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),oe){const re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,oe.removeEventListener("dispose",re)};oe.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=oe}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let oe=0;oe<6;oe++)Ot(T.__webglFramebuffer[oe],R,oe);else R.texture.mipmaps.length>0?Ot(T.__webglFramebuffer[0],R,0):Ot(T.__webglFramebuffer,R,0);else if(Y){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]===void 0)T.__webglDepthbuffer[oe]=n.createRenderbuffer(),jn(T.__webglDepthbuffer[oe],R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,de)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),jn(T.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,de)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rn(R,T,Y){const oe=i.get(R);T!==void 0&&Mt(oe.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&An(R)}function Pn(R){const T=R.texture,Y=i.get(R),oe=i.get(T);R.addEventListener("dispose",D),C(R);const re=R.textures,de=R.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=T.version,a.memory.textures++),de){Y.__webglFramebuffer=[];for(let te=0;te<6;te++)if(T.mipmaps.length>0){Y.__webglFramebuffer[te]=[];for(let ne=0;ne<T.mipmaps.length;ne++)Y.__webglFramebuffer[te][ne]=n.createFramebuffer()}else Y.__webglFramebuffer[te]=n.createFramebuffer()}else{if(T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let te=0;te<T.mipmaps.length;te++)Y.__webglFramebuffer[te]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(_e)for(let te=0,ne=re.length;te<ne;te++){const me=i.get(re[te]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ye(R)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let te=0;te<re.length;te++){const ne=re[te];Y.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[te]);const me=s.convert(ne.format,ne.colorSpace),I=s.convert(ne.type),ie=w(ne.internalFormat,me,I,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),ee=_t(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,ie,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,Y.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),jn(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,T);for(let te=0;te<6;te++)if(T.mipmaps.length>0)for(let ne=0;ne<T.mipmaps.length;ne++)Mt(Y.__webglFramebuffer[te][ne],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne);else Mt(Y.__webglFramebuffer[te],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);y(T)?S(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let te=0,ne=re.length;te<ne;te++){const me=re[te],I=i.get(me);let ie=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,I.__webglTexture),Ye(ie,me),Mt(Y.__webglFramebuffer,R,me,n.COLOR_ATTACHMENT0+te,ie,0),y(me)&&S(ie)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,oe.__webglTexture),Ye(te,T),T.mipmaps.length>0)for(let ne=0;ne<T.mipmaps.length;ne++)Mt(Y.__webglFramebuffer[ne],R,T,n.COLOR_ATTACHMENT0,te,ne);else Mt(Y.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,te,0);y(T)?S(te):T.mipmaps.length>0&&n.texParameteri(te,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&An(R)}function H(R){const T=R.textures;for(let Y=0,oe=T.length;Y<oe;Y++){const re=T[Y];if(y(re)&&re.mipmapsAutoUpdate===!0){const de=E(R),_e=i.get(re).__webglTexture;t.bindTexture(de,_e),S(de),t.unbindTexture()}}}const Cn=[];function mt(R){if(R.samples>0){if(ye(R)===!1){const T=R.textures,Y=R.width,oe=R.height;let re=n.COLOR_BUFFER_BIT;const de=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(R),te=T.length>1;if(te)for(let me=0;me<T.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<T.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);const I=i.get(T[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,re,n.NEAREST),l===!0&&(Cn.length=0,Cn.push(n.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Cn.push(de),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Cn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let me=0;me<T.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);const I=i.get(T[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,I,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function _t(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ut(R){const T=a.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function ke(R,T){const Y=R.colorSpace,oe=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==bc&&Y!==_r&&(Qe.getTransfer(Y)===dt?(oe!==Pi||re!==Wn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",Y)),T}function ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=we,this.resetTextureUnits=W,this.getTextureUnits=Z,this.setTextureUnits=ae,this.setTexture2D=V,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=ce,this.rebindTextures=Rn,this.setupRenderTarget=Pn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=An,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ye,this.dispose=N}function OE(n,e){function t(i,r=_r){let s;const a=Qe.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===qd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===f_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===d_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===u_)return n.BYTE;if(i===h_)return n.SHORT;if(i===wo)return n.UNSIGNED_SHORT;if(i===Xd)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===p_)return n.ALPHA;if(i===m_)return n.RGB;if(i===Pi)return n.RGBA;if(i===Ir)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===$d)return n.RED;if(i===Kd)return n.RED_INTEGER;if(i===os)return n.RG;if(i===jd)return n.RG_INTEGER;if(i===Zd)return n.RGBA_INTEGER;if(i===Wl||i===Xl||i===ql||i===Yl)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===df||i===pf||i===mf||i===gf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===df)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vf||i===_f||i===xf||i===yf||i===Sf||i===wc||i===Mf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vf||i===_f)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===yf)return s.COMPRESSED_R11_EAC;if(i===Sf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===wc)return s.COMPRESSED_RG11_EAC;if(i===Mf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wf||i===Tf||i===Ef||i===bf||i===Af||i===Rf||i===Pf||i===Cf||i===Lf||i===Df||i===Nf||i===If||i===Uf||i===kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ef)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Af)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Df)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===If)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ff||i===Of||i===zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ff)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bf||i===Gf||i===Tc||i===Hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BE=`
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

}`;class GE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new k_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ls({vertexShader:zE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HE extends hs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,v=null;const _=typeof XRWebGLBinding<"u",p=new GE,u={},g=t.getContextAttributes();let y=null,S=null;const E=[],w=[],x=new Be;let M=null,C=null;const A=new ni;A.viewport=new Ct;const L=new ni;L.viewport=new Ct;const D=[A,L],U=new eM;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let V=E[J];return V===void 0&&(V=new Hu,E[J]=V),V.getTargetRaySpace()},this.getControllerGrip=function(J){let V=E[J];return V===void 0&&(V=new Hu,E[J]=V),V.getGripSpace()},this.getHand=function(J){let V=E[J];return V===void 0&&(V=new Hu,E[J]=V),V.getHandSpace()};function X(J){const V=w.indexOf(J.inputSource);if(V===-1)return;const se=E[V];se!==void 0&&(se.update(J.inputSource,J.frame,c||a),se.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",F);for(let J=0;J<E.length;J++){const V=w[J];V!==null&&(w[J]=null,E[J].disconnect(V))}P=null,N=null,p.reset();for(const J in u)delete u[J];if(e.setRenderTarget(y),m=null,d=null,f=null,r=null,S=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),C!==null){const J=C.camera;J.fov=C.fov,J.zoom=C.zoom,J.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",G),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,le=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?Mr:Ir,le=g.stencil?ca:Ni);const Ie={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Di(d.textureWidth,d.textureHeight,{format:Pi,type:Wn,depthTexture:new ua(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Di(m.framebufferWidth,m.framebufferHeight,{format:Pi,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(J){for(let V=0;V<J.removed.length;V++){const se=J.removed[V],le=w.indexOf(se);le>=0&&(w[le]=null,E[le].disconnect(se))}for(let V=0;V<J.added.length;V++){const se=J.added[V];let le=w.indexOf(se);if(le===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=w.length){w.push(se),le=Ie;break}else if(w[Ie]===null){w[Ie]=se,le=Ie;break}if(le===-1)break}const ce=E[le];ce&&ce.connect(se)}}function k(J,V){V===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(V.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let V=J.near,se=J.far;p.texture!==null&&(p.depthNear>0&&(V=p.depthNear),p.depthFar>0&&(se=p.depthFar)),U.near=L.near=A.near=V,U.far=L.far=A.far=se,(P!==U.near||N!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,N=U.far),U.layers.mask=J.layers.mask|6,A.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const le=J.parent,ce=U.cameras;k(U,le);for(let Ie=0;Ie<ce.length;Ie++)k(ce[Ie],le);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&J.isPerspectiveCamera&&(C={camera:J,fov:J.fov,zoom:J.zoom}),W(J,U,le)};function W(J,V,se){se===null?J.matrix.copy(V.matrixWorld):(J.matrix.copy(se.matrixWorld),J.matrix.invert(),J.matrix.multiply(V.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(V.projectionMatrix),J.projectionMatrixInverse.copy(V.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(J){return u[J]};let Z=null;function ae(J,V){if(h=V.getViewerPose(c||a),v=V,h!==null){const se=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let le=!1;se.length!==U.cameras.length&&(U.cameras.length=0,le=!0);for(let Re=0;Re<se.length;Re++){const Ye=se[Re];let tt=null;if(m!==null)tt=m.getViewport(Ye);else{const Je=f.getViewSubImage(d,Ye);tt=Je.viewport,Re===0&&(e.setRenderTargetTextures(S,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(S))}let Ve=D[Re];Ve===void 0&&(Ve=new ni,Ve.layers.enable(Re),Ve.viewport=new Ct,D[Re]=Ve),Ve.matrix.fromArray(Ye.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ye.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),Re===0&&(U.matrix.copy(Ve.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),le===!0&&U.cameras.push(Ve)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Re=f.getDepthInformation(se[0]);Re&&Re.isValid&&Re.texture&&p.init(Re,r.renderState)}if(ce&&ce.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Re=0;Re<se.length;Re++){const Ye=se[Re].camera;if(Ye){let tt=u[Ye];tt||(tt=new k_,u[Ye]=tt);const Ve=f.getCameraImage(Ye);tt.sourceTexture=Ve}}}}for(let se=0;se<E.length;se++){const le=w[se],ce=E[se];le!==null&&ce!==void 0&&ce.update(le,V,c||a)}Z&&Z(J,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),v=null}const we=new H_;we.setAnimationLoop(ae),this.setAnimationLoop=function(J){Z=J},this.dispose=function(){}}}const VE=new ut,J_=new Ge;J_.set(-1,0,0,0,1,0,0,0,1);function WE(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,F_(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,y,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(p,u):u.isMeshLambertMaterial?(s(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,y):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===On&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===On&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),y=g.envMap,S=g.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(VE.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(J_),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=y*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.diffuseRoughness>0&&(p.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===On&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.retroreflectivity>0&&(p.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XE(n,e,t,i){let r={},s={};function a(g,y){const S=y.program;i.uniformBlockBinding(g,S,r[g.id])}function o(g,y){let S=r[g.id];S===void 0&&(v(g),S=l(g),r[g.id]=S,g.addEventListener("dispose",p));const E=y.program;i.updateUBOMapping(g,E);const w=e.render.frame;s[g.id]!==w&&(c(g),s[g.id]=w)}function l(g){const y=n.createBuffer(),S=g.__size,E=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),y}function c(g){const y=r[g.id],S=g.uniforms,E=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,x=S.length;w<x;w++){const M=S[w];if(Array.isArray(M))for(let C=0,A=M.length;C<A;C++)h(M[C],w,C,E);else h(M,w,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(g,y,S,E){if(d(g,y,S,E)===!0){const w=g.__offset,x=g.value;if(Array.isArray(x)){let M=0;for(let C=0;C<x.length;C++){const A=x[C],L=_(A,!0);f(A,g.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,g.__data)}}function f(g,y,S){typeof g=="number"||typeof g=="boolean"?y[S]=g:g.isMatrix3?(y[S]=g.elements[0],y[S+1]=g.elements[1],y[S+2]=g.elements[2],y[S+3]=0,y[S+4]=g.elements[3],y[S+5]=g.elements[4],y[S+6]=g.elements[5],y[S+7]=0,y[S+8]=g.elements[6],y[S+9]=g.elements[7],y[S+10]=g.elements[8],y[S+11]=0):ArrayBuffer.isView(g)?y.set(g.subarray(0,y.length-S),S):g.toArray(y,S)}function d(g,y,S,E){const w=g.value,x=y+"_"+S;if(Array.isArray(w)){E[x]===void 0&&(E[x]=[]);const M=E[x];let C=!1;for(let A=0;A<w.length;A++)m(w[A],M,A)===!0&&(C=!0);return C}return m(w,E,x)}function m(g,y,S){if(y[S]===void 0)return typeof g=="number"||typeof g=="boolean"?y[S]=g:ArrayBuffer.isView(g)?y[S]=g.slice():y[S]=g.clone(),!0;{const E=y[S];if(typeof g=="number"||typeof g=="boolean"){if(E!==g)return y[S]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(E.equals(g)===!1)return E.copy(g),!0}}return!1}function v(g){const y=g.uniforms;let S=0;const E=16;for(let x=0,M=y.length;x<M;x++){const C=Array.isArray(y[x])?y[x]:[y[x]];for(let A=0,L=C.length;A<L;A++){const D=C[A],U=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(y[x])||Array.isArray(D.value);let N=S;for(let G=0,F=U.length;G<F;G++){const k=U[G],W=_(k,P),Z=S%E,ae=Z%W.boundary,we=Z+ae;S+=ae,we!==0&&E-we<W.storage&&(S+=E-we),G===0&&(N=S),S+=W.storage}const X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((S-N)/Float32Array.BYTES_PER_ELEMENT),D.__offset=N}}const w=S%E;return w>0&&(S+=E-w),g.__size=S,g.__cache={},this}function _(g,y){const S={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(S.boundary=4,S.storage=4):g.isVector2?(S.boundary=8,S.storage=8):g.isVector3||g.isColor?(S.boundary=16,S.storage=12):g.isVector4?(S.boundary=16,S.storage=16):g.isMatrix3?(S.boundary=16,S.storage=48):g.isMatrix4?(S.boundary=16,S.storage=64):g.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(S.boundary=16,S.storage=g.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",g),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(g){const y=g.target;y.removeEventListener("dispose",p),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const g in r)n.deleteBuffer(r[g]);r={},s={}}return{bind:a,update:o,dispose:u}}const qE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function YE(){return wi===null&&(wi=new L_(qE,16,16,os,Ii),wi.name="DFG_LUT",wi.minFilter=In,wi.magFilter=In,wi.wrapS=Yi,wi.wrapT=Yi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class Q_{constructor(e={}){const{canvas:t=uS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Wn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=m,p=new Set([Zd,jd,Kd]),u=new Set([Wn,Ni,wo,ca,qd,Yd]),g=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let E=null,w=null;const x=[],M=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,D=null,U=null,P=null,N=null;this._outputColorSpace=Qt;let X=0,G=0,F=null,k=-1,W=null;const Z=new Ct,ae=new Ct;let we=null;const J=new Fe(0);let V=0,se=t.width,le=t.height,ce=1,Ie=null,et=null;const Re=new Ct(0,0,se,le),Ye=new Ct(0,0,se,le);let tt=!1;const Ve=new Eo,Je=new tp;let ot=!1,on=!1;const Mt=new ut,jn=new z,Ot=new Ct,An={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rn=!1;function Pn(){return F===null?ce:1}let H=i;function Cn(b,B){return t.getContext(b,B)}let mt,_t,ye,Ut,ke,ze,R,T,Y,oe,re,de,_e,te,ne,me,I,ie,ee,ge,fe,pe,Ne;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vd}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Se,!1),H===null){const B="webgl2";if(H=Cn(B,b),H===null)throw Cn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(b){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),at("WebGLRenderer: "+b.message),b}function Xe(){mt=new Z2(H),mt.init(),fe=new OE(H,mt),_t=new B2(H,mt,e,fe),ye=new kE(H,mt),_t.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),U=H.createFramebuffer(),P=H.createFramebuffer(),N=H.createFramebuffer(),Ut=new eT(H),ke=new ME,ze=new FE(H,mt,ye,ke,_t,fe,Ut),R=new j2(A),T=new nM(H),pe=new O2(H,T),Y=new J2(H,T,Ut,pe),oe=new nT(H,Y,T,pe,Ut),ie=new tT(H,_t,ze),ne=new G2(ke),re=new SE(A,R,mt,_t,pe,ne),de=new WE(A,ke),_e=new TE,te=new CE(mt),I=new F2(A,R,ye,oe,v,l),me=new UE(A,oe,_t),Ne=new XE(H,Ut,_t,ye),ee=new z2(H,mt,Ut),ge=new Q2(H,mt,Ut),Ut.programs=re.programs,A.capabilities=_t,A.extensions=mt,A.properties=ke,A.renderLists=_e,A.shadowMap=me,A.state=ye,A.info=Ut}_!==Wn&&(C=new rT(_,t.width,t.height,o,r,s));const he=new HE(A,H);this.xr=he,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(b){b!==void 0&&(ce=b,this.setSize(se,le,!1))},this.getSize=function(b){return b.set(se,le)},this.setSize=function(b,B,j=!0){if(he.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}se=b,le=B,t.width=Math.floor(b*ce),t.height=Math.floor(B*ce),j===!0&&(t.style.width=b+"px",t.style.height=B+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(se*ce,le*ce).floor()},this.setDrawingBufferSize=function(b,B,j){se=b,le=B,ce=j,t.width=Math.floor(b*j),t.height=Math.floor(B*j),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(_===Wn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Z)},this.getViewport=function(b){return b.copy(Re)},this.setViewport=function(b,B,j,$){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,B,j,$),ye.viewport(Z.copy(Re).multiplyScalar(Pn()).round())},this.getScissor=function(b){return b.copy(Ye)},this.setScissor=function(b,B,j,$){b.isVector4?Ye.set(b.x,b.y,b.z,b.w):Ye.set(b,B,j,$),ye.scissor(ae.copy(Ye).multiplyScalar(Pn()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(b){ye.setScissorTest(tt=b)},this.setOpaqueSort=function(b){Ie=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,j=!0){let $=0;if(b){let K=!1;if(F!==null){const xe=F.texture.format;K=p.has(xe)}if(K){const xe=F.texture.type,Ae=u.has(xe),ve=I.getClearColor(),Te=I.getClearAlpha(),De=ve.r,He=ve.g,je=ve.b;Ae?(g[0]=De,g[1]=He,g[2]=je,g[3]=Te,H.clearBufferuiv(H.COLOR,0,g)):(y[0]=De,y[1]=He,y[2]=je,y[3]=Te,H.clearBufferiv(H.COLOR,0,y))}else $|=H.COLOR_BUFFER_BIT}B&&($|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),I.dispose(),_e.dispose(),te.dispose(),ze.dispose(),ke.dispose(),R.dispose(),oe.dispose(),Y.dispose(),pe.dispose(),Ne.dispose(),re.dispose(),he.dispose(),he.removeEventListener("sessionstart",up),he.removeEventListener("sessionend",hp),Or.stop()};function Ue(b){b.preventDefault(),Pc("WebGLRenderer: Context Lost."),L=!0}function We(){Pc("WebGLRenderer: Context Restored."),L=!1;const b=Ut.autoReset,B=me.enabled,j=me.autoUpdate,$=me.needsUpdate,K=me.type;Xe(),Ut.autoReset=b,me.enabled=B,me.autoUpdate=j,me.needsUpdate=$,me.type=K}function Se(b){at("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ft(b){const B=b.target;B.removeEventListener("dispose",ft),Yt(B)}function Yt(b){rr(b),ke.remove(b)}function rr(b){const B=ke.get(b).programs;B!==void 0&&(B.forEach(function(j){re.releaseProgram(j)}),b.isShaderMaterial&&re.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,j,$,K,xe){B===null&&(B=An);const Ae=K.isMesh&&K.matrixWorld.determinantAffine()<0,ve=nx(b,B,j,$,K);ye.setMaterial($,Ae);let Te=j.index,De=1;if($.wireframe===!0){if(Te=Y.getWireframeAttribute(j),Te===void 0)return;De=2}const He=j.drawRange,je=j.attributes.position;let Pe=He.start*De,Ze=(He.start+He.count)*De;xe!==null&&(Pe=Math.max(Pe,xe.start*De),Ze=Math.min(Ze,(xe.start+xe.count)*De)),Te!==null?(Pe=Math.max(Pe,0),Ze=Math.min(Ze,Te.count)):je!=null&&(Pe=Math.max(Pe,0),Ze=Math.min(Ze,je.count));const zt=Ze-Pe;if(zt<0||zt===1/0)return;pe.setup(K,$,ve,j,Te);let xt,gt=ee;if(Te!==null&&(xt=T.get(Te),gt=ge,gt.setIndex(xt)),K.isMesh)$.wireframe===!0?(ye.setLineWidth($.wireframeLinewidth*Pn()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(K.isLine){let ln=$.linewidth;ln===void 0&&(ln=1),ye.setLineWidth(ln*Pn()),K.isLineSegments?gt.setMode(H.LINES):K.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else K.isPoints?gt.setMode(H.POINTS):K.isSprite&&gt.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))gt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ln=K._multiDrawStarts,Ce=K._multiDrawCounts,xn=K._multiDrawCount,lt=Te?T.get(Te).bytesPerElement:1,zr=ke.get($).currentProgram.getUniforms();for(let cn=0;cn<xn;cn++)zr.setValue(H,"_gl_DrawID",cn),gt.render(ln[cn]/lt,Ce[cn])}else if(K.isInstancedMesh)gt.renderInstances(Pe,zt,K.count);else if(j.isInstancedBufferGeometry){const ln=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ce=Math.min(j.instanceCount,ln);gt.renderInstances(Pe,zt,Ce)}else gt.render(Pe,zt)};function cp(b,B,j,$){D!==null&&b.isNodeMaterial&&D.setObject($,b),ot===!0&&ne.setState(b,j,!1),b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=On,b.needsUpdate=!0,_a(b,B,$),b.side=as,b.needsUpdate=!0,_a(b,B,$),b.side=Dn):_a(b,B,$)}this.compile=function(b,B,j=null){j===null&&(j=b),D!==null&&D.renderStart(b,B,j),w=te.get(j),w.init(B),M.push(w),j.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),b!==j&&b.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),on=this.localClippingEnabled,ot=ne.init(this.clippingPlanes,on),ot===!0&&ne.setGlobalState(this.clippingPlanes,B),D!==null&&me.render(w.state.shadowsArray,j,B);const $=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const xe=K.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const ve=xe[Ae];cp(ve,j,B,K),$.add(ve)}else cp(xe,j,B,K),$.add(xe)}),w=M.pop(),D!==null&&D.renderEnd(),$},this.compileAsync=function(b,B,j=null){const $=this.compile(b,B,j);return new Promise(K=>{function xe(){if($.forEach(function(Ae){const Te=ke.get(Ae).currentProgram;(Te===void 0||Te.isReady())&&$.delete(Ae)}),$.size===0){K(b);return}setTimeout(xe,10)}mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let iu=null;function ex(b){iu&&iu(b)}function up(){Or.stop()}function hp(){Or.start()}const Or=new H_;Or.setAnimationLoop(ex),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(b){iu=b,he.setAnimationLoop(b),b===null?Or.stop():Or.start()},he.addEventListener("sessionstart",up),he.addEventListener("sessionend",hp),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(b,B);const j=he.enabled===!0&&he.isPresenting===!0,$=C!==null&&(F===null||j)&&C.begin(A,F);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(B),B=he.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,B,F),w=te.get(b,M.length),w.init(B),w.state.textureUnits=ze.getTextureUnits(),M.push(w),Mt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Je.setFromArrayCamera(B):Ve.setFromProjectionMatrix(Mt,vi,B.reversedDepth),on=this.localClippingEnabled,ot=ne.init(this.clippingPlanes,on),E=_e.get(b,x.length),E.init(),x.push(E),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){const Ae=A.xr.getDepthSensingMesh();Ae!==null&&ru(Ae,B,-1/0,A.sortObjects)}ru(b,B,0,A.sortObjects),E.finish(),D!==null&&D.updateLights(w.state.lightsArray),A.sortObjects===!0&&E.sort(Ie,et),Rn=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Rn&&I.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),ot===!0&&ne.beginShadows();const K=w.state.shadowsArray;if(me.render(K,b,B),ot===!0&&ne.endShadows(),($&&C.hasRenderPass())===!1){const Ae=E.opaque,ve=E.transmissive;if(w.setupLights(),B.isArrayCamera){const Te=B.cameras;if(ve.length>0)for(let De=0,He=Te.length;De<He;De++){const je=Te[De];dp(Ae,ve,b,je)}Rn&&I.render(b);for(let De=0,He=Te.length;De<He;De++){const je=Te[De];fp(E,b,je,je.viewport)}}else ve.length>0&&dp(Ae,ve,b,B),Rn&&I.render(b),fp(E,b,B)}F!==null&&G===0&&(ze.updateMultisampleRenderTarget(F),ze.updateRenderTargetMipmap(F)),$&&C.end(A),b.isScene===!0&&b.onAfterRender(A,b,B),pe.resetDefaultState(),k=-1,W=null,M.pop(),M.length>0?(w=M[M.length-1],ze.setTextureUnits(w.state.textureUnits),ot===!0&&ne.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,D!==null&&D.renderEnd()};function ru(b,B,j,$){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){const Ae=B.isArrayCamera?Je:Ve;if(!b.frustumCulled||b.intersectsFrustum(Ae)){$&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Mt);const ve=oe.update(b),Te=b.material;Te.visible&&E.push(b,ve,Te,j,Ot.z,null,B)}}else if(b.isMesh||b.isLine||b.isPoints){const Ae=B.isArrayCamera?Je:Ve;if(!b.frustumCulled||b.intersectsFrustum(Ae)){const ve=oe.update(b),Te=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ot.copy(ve.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(Mt)),Array.isArray(Te)){const De=ve.groups;for(let He=0,je=De.length;He<je;He++){const Pe=De[He],Ze=Te[Pe.materialIndex];Ze&&Ze.visible&&E.push(b,ve,Ze,j,Ot.z,Pe,B)}}else Te.visible&&E.push(b,ve,Te,j,Ot.z,null,B)}}}const xe=b.children;for(let Ae=0,ve=xe.length;Ae<ve;Ae++)ru(xe[Ae],B,j,$)}function fp(b,B,j,$){const{opaque:K,transmissive:xe,transparent:Ae}=b;w.setupLightsView(j),ot===!0&&ne.setGlobalState(A.clippingPlanes,j),$&&ye.viewport(Z.copy($)),K.length>0&&No(K,B,j),xe.length>0&&No(xe,B,j),Ae.length>0&&No(Ae,B,j),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function dp(b,B,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const Pe=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new Di(1,1,{generateMipmaps:!0,type:Pe?Ii:Wn,minFilter:Sr,samples:Math.max(4,_t.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const xe=w.state.transmissionRenderTarget[$.id],Ae=$.viewport||Z;xe.setSize(Ae.z*A.transmissionResolutionScale,Ae.w*A.transmissionResolutionScale);const ve=A.getRenderTarget(),Te=A.getActiveCubeFace(),De=A.getActiveMipmapLevel();A.setRenderTarget(xe),A.getClearColor(J),V=A.getClearAlpha(),V<1&&A.setClearColor(16777215,.5),A.clear(),Rn&&I.render(j);const He=A.toneMapping;A.toneMapping=Ki;const je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),ot===!0&&ne.setGlobalState(A.clippingPlanes,$),No(b,j,$),ze.updateMultisampleRenderTarget(xe),ze.updateRenderTargetMipmap(xe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Ze=0,zt=B.length;Ze<zt;Ze++){const xt=B[Ze],{object:gt,geometry:ln,material:Ce,group:xn}=xt;if(Ce.side===Dn&&gt.layers.test($.layers)){const lt=Ce.side;Ce.side=On,Ce.needsUpdate=!0,pp(gt,j,$,ln,Ce,xn),Ce.side=lt,Ce.needsUpdate=!0,Pe=!0}}Pe===!0&&(ze.updateMultisampleRenderTarget(xe),ze.updateRenderTargetMipmap(xe))}A.setRenderTarget(ve,Te,De),A.setClearColor(J,V),je!==void 0&&($.viewport=je),A.toneMapping=He}function No(b,B,j){const $=B.isScene===!0?B.overrideMaterial:null;for(let K=0,xe=b.length;K<xe;K++){const Ae=b[K],{object:ve,geometry:Te,group:De}=Ae;let He=Ae.material;He.allowOverride===!0&&$!==null&&(He=$),ve.layers.test(j.layers)&&pp(ve,B,j,Te,He,De)}}function pp(b,B,j,$,K,xe){D!==null&&K.isNodeMaterial&&D.setObject(b,K),b.onBeforeRender(A,B,j,$,K,xe),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(A,B,j,$,b,xe),K.transparent===!0&&K.side===Dn&&K.forceSinglePass===!1?(K.side=On,K.needsUpdate=!0,A.renderBufferDirect(j,B,$,K,b,xe),K.side=as,K.needsUpdate=!0,A.renderBufferDirect(j,B,$,K,b,xe),K.side=Dn):A.renderBufferDirect(j,B,$,K,b,xe),b.onAfterRender(A,B,j,$,K,xe)}function mp(b){let B=0;for(const j of b)j.texture!==null&&B++;return B}function _a(b,B,j){B.isScene!==!0&&(B=An);const $=ke.get(b),K=w.state.lights,xe=w.state.shadowsArray,Ae=K.state.version,ve=re.getParameters(b,K.state,xe,B,j,w.state.lightProbeGridArray),Te=re.getProgramCacheKey(ve);let De=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,$.fog=B.fog;const He=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=R.get(b.envMap||$.environment,He),$.envMapRotation=$.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",ft),De=new Map,$.programs=De,$.programVariants=new Map);let je=De.get(Te);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Ae)return vp(b,ve),je}else ve.uniforms=re.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,j,ve),b.onBeforeCompile(ve,A),je=re.acquireProgram(ve,Te),De.set(Te,je),$.uniforms=ve.uniforms;const Pe=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=ne.uniform),vp(b,ve),$.needsLights=rx(b),$.lightsStateVersion=Ae,$.needsLights&&(Pe.ambientLightColor.value=K.state.ambient,Pe.lightProbe.value=K.state.probe,Pe.sunLights.value=K.state.sun,Pe.sunLightShadows.value=K.state.sunShadow,Pe.directionalLights.value=K.state.directional,Pe.directionalLightShadows.value=K.state.directionalShadow,Pe.spotLights.value=K.state.spot,Pe.spotLightShadows.value=K.state.spotShadow,Pe.rectAreaLights.value=K.state.rectArea,Pe.ltc_1.value=K.state.rectAreaLTC1,Pe.ltc_2.value=K.state.rectAreaLTC2,Pe.pointLights.value=K.state.point,Pe.pointLightShadows.value=K.state.pointShadow,Pe.hemisphereLights.value=K.state.hemi,Pe.sunShadowMatrix.value=K.state.sunShadowMatrix,Pe.sunShadowCascade.value=K.state.sunShadowCascade,Pe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Pe.spotLightMatrix.value=K.state.spotLightMatrix,Pe.spotLightMap.value=K.state.spotLightMap,Pe.pointShadowMatrix.value=K.state.pointShadowMatrix),$.numLightProbeGrids=mp(w.state.lightProbeGridArray),$.currentProgram=je,$.uniformsList=null,je}function tx(b,B,j,$,K){const xe=ke.get(b),Ae=xe.currentProgram.id+","+$+","+K;let ve=xe.programVariants.get(Ae);return ve===void 0?(ve=_a(b,B,j),xe.programVariants.set(Ae,ve)):(xe.currentProgram=ve,xe.uniformsList=null,xe.outputColorSpace=$,xe.toneMapping=K),ve}function gp(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Kl.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function vp(b,B){const j=ke.get(b);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function nx(b,B,j,$,K){B.isScene!==!0&&(B=An),ze.resetTextureUnits();const xe=B.fog,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?B.environment:null,ve=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Qe.workingColorSpace,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,De=R.get($.envMap||Ae,Te),He=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!j.morphAttributes.position,Ze=!!j.morphAttributes.normal,zt=!!j.morphAttributes.color;let xt=Ki;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xt=A.toneMapping);const gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ln=gt!==void 0?gt.length:0,Ce=ke.get($),xn=w.state.lights;if(ot===!0&&(on===!0||b!==W)){const Rt=b===W&&$.id===k;ne.setState($,b,Rt)}let lt=!1,zr=!1;$.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==xn.state.version||K.isBatchedMesh&&Ce.batching===!1||!K.isBatchedMesh&&Ce.batching===!0||K.isBatchedMesh&&Ce.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ce.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ce.instancing===!1||!K.isInstancedMesh&&Ce.instancing===!0||K.isSkinnedMesh&&Ce.skinning===!1||!K.isSkinnedMesh&&Ce.skinning===!0||K.isInstancedMesh&&Ce.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ce.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ce.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ce.instancingMorph===!1&&K.morphTexture!==null||Ce.envMap!==De||$.fog===!0&&Ce.fog!==xe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ne.numPlanes||Ce.numIntersection!==ne.numIntersection)||Ce.vertexAlphas!==He||Ce.vertexTangents!==je||Ce.morphTargets!==Pe||Ce.morphNormals!==Ze||Ce.morphColors!==zt||Ce.morphTargetsCount!==ln||Ce.numLightProbeGrids!==mp(w.state.lightProbeGridArray)?lt=!0:(Ce.outputColorSpace!==ve||Ce.toneMapping!==xt)&&(zr=!0):(lt=!0,Ce.__version=$.version);let cn=Ce.currentProgram;(lt===!0||zr===!0)&&(cn=zr===!0?tx($,B,K,ve,xt):_a($,B,K),D&&$.isNodeMaterial&&D.onUpdateProgram($,cn,Ce));let Io=!1,sr=!1,Br=!1;const it=cn.getUniforms(),tn=Ce.uniforms;if(ye.useProgram(cn.program)&&(Io=!0,sr=!0,Br=!0),$.id!==k&&(k=$.id,sr=!0),Io||W!==b){ye.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),it.setValue(H,"projectionMatrix",b.projectionMatrix),it.setValue(H,"viewMatrix",b.matrixWorldInverse);const $t=it.map.cameraPosition;$t!==void 0&&$t.setValue(H,jn.setFromMatrixPosition(b.matrixWorld)),_t.logarithmicDepthBuffer&&it.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&it.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,sr=!0,Br=!0)}if(Ce.needsLights&&(xn.state.sunShadowMap.length>0&&it.setValue(H,"sunShadowMap",xn.state.sunShadowMap,ze),xn.state.directionalShadowMap.length>0&&it.setValue(H,"directionalShadowMap",xn.state.directionalShadowMap,ze),xn.state.spotShadowMap.length>0&&it.setValue(H,"spotShadowMap",xn.state.spotShadowMap,ze),xn.state.pointShadowMap.length>0&&it.setValue(H,"pointShadowMap",xn.state.pointShadowMap,ze)),K.isSkinnedMesh){it.setOptional(H,K,"bindMatrix"),it.setOptional(H,K,"bindMatrixInverse");const Rt=K.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),it.setValue(H,"boneTexture",Rt.boneTexture,ze))}K.isBatchedMesh&&(it.setOptional(H,K,"batchingTexture"),it.setValue(H,"batchingTexture",K._matricesTexture,ze),it.setOptional(H,K,"batchingIdTexture"),it.setValue(H,"batchingIdTexture",K._indirectTexture,ze),it.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&it.setValue(H,"batchingColorTexture",K._colorsTexture,ze));const li=j.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&ie.update(K,j,cn),(sr||Ce.receiveShadow!==K.receiveShadow)&&(Ce.receiveShadow=K.receiveShadow,it.setValue(H,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&B.environment!==null&&(tn.envMapIntensity.value=B.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=YE()),sr){if(it.setValue(H,"toneMappingExposure",A.toneMappingExposure),Ce.needsLights&&ix(tn,Br),xe&&$.fog===!0&&de.refreshFogUniforms(tn,xe),de.refreshMaterialUniforms(tn,$,ce,le,w.state.transmissionRenderTarget[b.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){const Rt=S;let $t=0;for(const Ui of w.state.lightProbeGridArray)Ui.texture!==null&&(Rt.textures[$t]=Ui.texture,Rt.min[$t]=Ui.boundingBox.min,Rt.max[$t]=Ui.boundingBox.max,Rt.resolution[$t]=Ui.resolution,$t++);for(const Ui in Rt)Rt[Ui].length=$t;tn.probesSH.value=Rt.textures,tn.probesMin.value=Rt.min,tn.probesMax.value=Rt.max,tn.probesResolution.value=Rt.resolution}Kl.upload(H,gp(Ce),tn,ze)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Kl.upload(H,gp(Ce),tn,ze),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&it.setValue(H,"center",K.center),it.setValue(H,"modelViewMatrix",K.modelViewMatrix),it.setValue(H,"normalMatrix",K.normalMatrix),it.setValue(H,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){const Rt=$.uniformsGroups;for(let $t=0,Ui=Rt.length;$t<Ui;$t++){const xp=Rt[$t];Ne.update(xp,cn),Ne.bind(xp,cn)}}return cn}function ix(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function rx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,B,j){const $=ke.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ke.get(b.texture).__webglTexture=B,ke.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const j=ke.get(b);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,j=0){F=b,X=B,G=j;let $=null,K=!1,xe=!1;if(b){const ve=ke.get(b);if(ve.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(H.FRAMEBUFFER,ve.__webglFramebuffer),Z.copy(b.viewport),ae.copy(b.scissor),we=b.scissorTest,ye.viewport(Z),ye.scissor(ae),ye.setScissorTest(we),k=-1;return}else if(ve.__webglFramebuffer===void 0)ze.setupRenderTarget(b);else if(ve.__hasExternalTextures)ze.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const He=b.depthTexture;if(ve.__boundDepthTexture!==He){if(He!==null&&ke.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const De=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[B])?$=De[B][j]:$=De[B],K=!0):b.samples>0&&ze.useMultisampledRTT(b)===!1?$=ke.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?$=De[j]:$=De,Z.copy(b.viewport),ae.copy(b.scissor),we=b.scissorTest}else Z.copy(Re).multiplyScalar(ce).floor(),ae.copy(Ye).multiplyScalar(ce).floor(),we=tt;if(j!==0&&($=U),ye.bindFramebuffer(H.FRAMEBUFFER,$)&&ye.drawBuffers(b,$),ye.viewport(Z),ye.scissor(ae),ye.setScissorTest(we),K){const ve=ke.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,j)}else if(xe){const ve=B;for(let Te=0;Te<b.textures.length;Te++){const De=ke.get(b.textures[Te]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Te,De.__webglTexture,j,ve)}}else if(b!==null&&j!==0){const ve=ke.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ve.__webglTexture,j)}k=-1};function _p(b){const B=ke.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=_t.textureFormatReadable(b.format),B.__typeReadable=_t.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,j,$,K,xe,Ae,ve=0){if(!(b&&b.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Te=Te[Ae],Array.isArray(Te)&&(Te=Te[0])),Te){ye.bindFramebuffer(H.FRAMEBUFFER,Te);try{const De=b.textures[ve],He=De.format,je=De.type;b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ve);const Pe=_p(De);if(Pe.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-$&&j>=0&&j<=b.height-K&&H.readPixels(B,j,$,K,fe.convert(He),fe.convert(je),xe)}finally{const De=F!==null?ke.get(F).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,B,j,$,K,xe,Ae,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Te=Te[Ae],Array.isArray(Te)&&(Te=Te[0])),Te)if(B>=0&&B<=b.width-$&&j>=0&&j<=b.height-K){ye.bindFramebuffer(H.FRAMEBUFFER,Te);const De=b.textures[ve],He=De.format,je=De.type;b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ve);const Pe=_p(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.bufferData(H.PIXEL_PACK_BUFFER,xe.byteLength,H.STREAM_READ),H.readPixels(B,j,$,K,fe.convert(He),fe.convert(je),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const zt=F!==null?ke.get(F).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,zt);const xt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await hS(H,xt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xe),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ze),H.deleteSync(xt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,j=0){const $=Math.pow(2,-j),K=Math.floor(b.image.width*$),xe=Math.floor(b.image.height*$),Ae=B!==null?B.x:0,ve=B!==null?B.y:0;ze.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,Ae,ve,K,xe),ye.unbindTexture()},this.copyTextureToTexture=function(b,B,j=null,$=null,K=0,xe=0){let Ae,ve,Te,De,He,je,Pe,Ze,zt;const xt=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(j!==null)Ae=j.max.x-j.min.x,ve=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,He=j.min.y,je=j.isBox3?j.min.z:0;else{const it=Math.pow(2,-K);Ae=Math.floor(xt.width*it),ve=Math.floor(xt.height*it),b.isDataArrayTexture?Te=xt.depth:b.isData3DTexture?Te=Math.floor(xt.depth*it):Te=1,De=0,He=0,je=0}$!==null?(Pe=$.x,Ze=$.y,zt=$.z):(Pe=0,Ze=0,zt=0);const gt=fe.convert(B.format),ln=fe.convert(B.type);let Ce;B.isData3DTexture?(ze.setTexture3D(B,0),Ce=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ze.setTexture2DArray(B,0),Ce=H.TEXTURE_2D_ARRAY):(ze.setTexture2D(B,0),Ce=H.TEXTURE_2D),ye.activeTexture(H.TEXTURE0),ye.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),ye.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ye.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const xn=ye.getParameter(H.UNPACK_ROW_LENGTH),lt=ye.getParameter(H.UNPACK_IMAGE_HEIGHT),zr=ye.getParameter(H.UNPACK_SKIP_PIXELS),cn=ye.getParameter(H.UNPACK_SKIP_ROWS),Io=ye.getParameter(H.UNPACK_SKIP_IMAGES);ye.pixelStorei(H.UNPACK_ROW_LENGTH,xt.width),ye.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt.height),ye.pixelStorei(H.UNPACK_SKIP_PIXELS,De),ye.pixelStorei(H.UNPACK_SKIP_ROWS,He),ye.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const sr=b.isDataArrayTexture||b.isData3DTexture,Br=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const it=ke.get(b),tn=ke.get(B),li=ke.get(it.__renderTarget),Rt=ke.get(tn.__renderTarget);ye.bindFramebuffer(H.READ_FRAMEBUFFER,li.__webglFramebuffer),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let $t=0;$t<Te;$t++)sr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.get(b).__webglTexture,K,je+$t),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.get(B).__webglTexture,xe,zt+$t)),H.blitFramebuffer(De,He,De+Ae,He+ve,Pe,Ze,Pe+Ae,Ze+ve,H.DEPTH_BUFFER_BIT,H.NEAREST);ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||ke.has(b)){const it=ke.get(b),tn=ke.get(B);ye.bindFramebuffer(H.READ_FRAMEBUFFER,P),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,N);for(let li=0;li<Te;li++)sr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.__webglTexture,K,je+li):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,it.__webglTexture,K),Br?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tn.__webglTexture,xe,zt+li):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,tn.__webglTexture,xe),K!==0?H.blitFramebuffer(De,He,De+Ae,He+ve,Pe,Ze,Pe+Ae,Ze+ve,H.COLOR_BUFFER_BIT,H.NEAREST):Br?H.copyTexSubImage3D(Ce,xe,Pe,Ze,zt+li,De,He,Ae,ve):H.copyTexSubImage2D(Ce,xe,Pe,Ze,De,He,Ae,ve);ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Br?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(Ce,xe,Pe,Ze,zt,Ae,ve,Te,gt,ln,xt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Ce,xe,Pe,Ze,zt,Ae,ve,Te,gt,xt.data):H.texSubImage3D(Ce,xe,Pe,Ze,zt,Ae,ve,Te,gt,ln,xt):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xe,Pe,Ze,Ae,ve,gt,ln,xt.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xe,Pe,Ze,xt.width,xt.height,gt,xt.data):H.texSubImage2D(H.TEXTURE_2D,xe,Pe,Ze,Ae,ve,gt,ln,xt);ye.pixelStorei(H.UNPACK_ROW_LENGTH,xn),ye.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt),ye.pixelStorei(H.UNPACK_SKIP_PIXELS,zr),ye.pixelStorei(H.UNPACK_SKIP_ROWS,cn),ye.pixelStorei(H.UNPACK_SKIP_IMAGES,Io),xe===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&H.generateMipmap(Ce),ye.unbindTexture()},this.initRenderTarget=function(b){ke.get(b).__webglFramebuffer===void 0&&ze.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ze.setTextureCube(b,0):b.isData3DTexture?ze.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ze.setTexture2DArray(b,0):ze.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){X=0,G=0,F=null,ye.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function $E(n,e,t){return Math.max(e,Math.min(t,n))}function Jn(n,e){const t=n.replace("#",""),i=parseInt(t,16),r=s=>Math.round($E(e>=0?s+(255-s)*e:s*(1+e),0,255));return`rgb(${r(i>>16&255)}, ${r(i>>8&255)}, ${r(i&255)})`}function pn(n,e=24,t=3,i=1){const r=[];for(let v=0;v<n.length-1;v++){const _=n[v],p=n[v+1],u=(v===n.length-2,t);for(let g=0;g<u;g++){const y=g/u,S=y*y*(3-2*y);r.push({y:_.y+(p.y-_.y)*y,rx:_.rx+(p.rx-_.rx)*S,rz:_.rz+(p.rz-_.rz)*S,ox:(_.ox??0)+((p.ox??0)-(_.ox??0))*S,oz:(_.oz??0)+((_.oz??0)-(_.oz??0))*S})}}r.push(n[n.length-1]);const s=r.length,a=e+1,o=new Float32Array(s*a*3),l=new Float32Array(s*a*2),c=[],h=r[0].y,f=Math.max(.001,r[s-1].y-h);for(let v=0;v<s;v++){const _=r[v],p=(_.y-h)/f;for(let u=0;u<=e;u++){const g=u/e,y=Math.PI*.5+g*Math.PI*2,S=Math.sin(y),E=Math.cos(y),w=i===1?S:Math.sign(S)*Math.pow(Math.abs(S),i),x=i===1?E:Math.sign(E)*Math.pow(Math.abs(E),i),M=(_.ox??0)+_.rx*w,C=(_.oz??0)+_.rz*x,A=v*a+u;o[A*3]=M,o[A*3+1]=_.y,o[A*3+2]=C,l[A*2]=g,l[A*2+1]=p}}for(let v=0;v<s-1;v++)for(let _=0;_<e;_++){const p=v*a+_,u=p+1,g=(v+1)*a+_,y=g+1;c.push(p,u,y,p,y,g)}const d=new Ft;d.setAttribute("position",new zn(o,3)),d.setAttribute("uv",new zn(l,2)),d.setIndex(c),d.computeVertexNormals();const m=d.getAttribute("normal");for(let v=0;v<s;v++){const _=v*a,p=v*a+e,u=m.getX(_)+m.getX(p),g=m.getY(_)+m.getY(p),y=m.getZ(_)+m.getZ(p),S=Math.hypot(u,g,y)||1;m.setXYZ(_,u/S,g/S,y/S),m.setXYZ(p,u/S,g/S,y/S)}return m.needsUpdate=!0,d}function KE(n,e,t){const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d"),s=r.createLinearGradient(0,0,0,512);s.addColorStop(0,Jn(n.primary,.08)),s.addColorStop(.65,n.primary),s.addColorStop(1,n.secondary),r.fillStyle=s,r.fillRect(0,0,512,512),r.fillStyle="rgba(255,255,255,0.04)";for(let l=0;l<512;l+=8)r.fillRect(0,l,512,2);const a=n.chestMotif;if(a==="red_white_stripes"){r.fillStyle="#f8fafc";const l=12,c=512/l;for(let h=0;h<l;h++)r.fillRect(Math.round(h*c),0,Math.round(c*.48),512)}else if(t){if(!a){r.strokeStyle="rgba(255,255,255,0.09)",r.lineWidth=8;for(let l=90;l<350;l+=44)r.beginPath(),r.moveTo(310,l+35),r.lineTo(384,l),r.lineTo(458,l+35),r.stroke()}}else{r.fillStyle="rgba(0,0,0,0.05)";for(let l=20;l<512;l+=32)r.fillRect(l,40,10,440)}if(r.fillStyle=n.trim,r.fillRect(0,40,10,472),r.fillRect(502,40,10,472),r.fillRect(251,40,10,472),r.fillStyle=a==="team_crown"?"#facc15":n.trim,r.fillRect(0,0,512,24),r.fillStyle=n.secondary,r.fillRect(0,24,512,5),e>0&&(r.save(),r.translate(128,215),a==="red_white_stripes"&&(r.fillStyle="rgba(255,255,255,0.92)",r.beginPath(),r.roundRect(-78,-82,156,164,18),r.fill()),r.textAlign="center",r.textBaseline="middle",r.font='900 148px system-ui, -apple-system, "Segoe UI", sans-serif',r.lineWidth=10,r.strokeStyle=a==="red_white_stripes"?"#ffffff":"rgba(0,0,0,0.28)",r.strokeText(String(e),0,0),r.fillStyle=n.numberColor,r.fillText(String(e),0,0),r.restore()),a==="adidas_stripes"){r.fillStyle="#111827";for(const l of[10,244,486])for(let c=0;c<3;c++)r.fillRect(l+c*9-9,0,5,118);r.beginPath(),r.moveTo(352,0),r.lineTo(384,54),r.lineTo(416,0),r.closePath(),r.fill(),r.save(),r.translate(350,134);for(let l=0;l<3;l++)r.save(),r.translate((l-1)*9,(2-l)*4),r.rotate(-.35),r.fillRect(-3,-12-l*4,5.5,16+l*4),r.restore();r.restore()}else if(a==="team_crown"){r.fillStyle="#111827",r.beginPath(),r.moveTo(350,0),r.lineTo(384,56),r.lineTo(418,0),r.closePath(),r.fill(),r.fillStyle="#111827";for(let l=0;l<3;l++)r.fillRect(338+l*8,128-l*5,5,14+l*5);r.save(),r.translate(420,132),r.fillStyle="#111827",r.beginPath(),r.moveTo(-18,12),r.lineTo(-21,-8),r.lineTo(-9,2),r.lineTo(0,-13),r.lineTo(9,2),r.lineTo(21,-8),r.lineTo(18,12),r.closePath(),r.fill(),r.fillStyle="#facc15";for(const l of[-11,0,11])r.beginPath(),r.arc(l,5,2.4,0,Math.PI*2),r.fill();r.restore(),r.save(),r.translate(384,212),r.textAlign="center",r.textBaseline="middle",r.font='900 52px system-ui, -apple-system, "Segoe UI", sans-serif',r.lineWidth=10,r.lineJoin="round",r.strokeStyle="#111827",r.strokeText("TEAM",0,0),r.fillStyle="#ffffff",r.fillText("TEAM",0,0),r.restore()}else if(a==="lightning"){const l=r.createRadialGradient(384,210,10,384,210,120);l.addColorStop(0,"rgba(45, 212, 191, 0.34)"),l.addColorStop(1,"rgba(45, 212, 191, 0)"),r.fillStyle=l,r.fillRect(264,90,240,250),r.fillStyle="#10b981",r.beginPath(),r.moveTo(344,0),r.lineTo(384,70),r.lineTo(424,0),r.closePath(),r.fill();const c=r.createLinearGradient(360,120,410,320);c.addColorStop(0,"#a7f3d0"),c.addColorStop(.5,"#2dd4bf"),c.addColorStop(1,"#0ea5e9"),r.fillStyle=c,r.beginPath(),r.moveTo(398,122),r.lineTo(354,218),r.lineTo(386,218),r.lineTo(368,318),r.lineTo(422,202),r.lineTo(388,202),r.closePath(),r.fill()}else if(a==="brick_wall"){r.fillStyle="#dc2626",r.beginPath(),r.moveTo(346,0),r.lineTo(384,58),r.lineTo(422,0),r.closePath(),r.fill();const l=[{y:162,bricks:[[344,38],[386,38]]},{y:190,bricks:[[326,36],[366,36],[406,36]]},{y:218,bricks:[[344,38],[386,38]]}];for(const c of l)for(const[h,f]of c.bricks)r.fillStyle="#d96b38",r.strokeStyle="#3b1608",r.lineWidth=3.5,r.beginPath(),r.roundRect(h,c.y,f,24,3),r.fill(),r.stroke(),r.fillStyle="#fdba74",r.fillRect(h+3,c.y+3,f-6,4)}else a==="chili_crest"?(r.fillStyle="#ffffff",r.beginPath(),r.moveTo(350,0),r.lineTo(384,52),r.lineTo(418,0),r.closePath(),r.fill(),r.save(),r.translate(384,196),r.rotate(-.22),r.lineWidth=6,r.strokeStyle="#ffffff",r.fillStyle="#ef4444",r.beginPath(),r.moveTo(22,-32),r.bezierCurveTo(34,4,10,38,-32,30),r.bezierCurveTo(-6,18,6,-4,6,-28),r.closePath(),r.stroke(),r.fill(),r.fillStyle="#22c55e",r.beginPath(),r.ellipse(14,-30,9,6,.3,0,Math.PI*2),r.fill(),r.strokeStyle="#16a34a",r.lineWidth=4.5,r.beginPath(),r.moveTo(16,-34),r.quadraticCurveTo(22,-48,12,-52),r.stroke(),r.restore()):a==="arsenal_clean"?(r.fillStyle="#ffffff",r.beginPath(),r.moveTo(350,0),r.lineTo(384,52),r.lineTo(418,0),r.closePath(),r.fill()):a==="white_blue_trim"?(r.fillStyle="#1d4ed8",r.beginPath(),r.moveTo(346,0),r.lineTo(384,62),r.lineTo(422,0),r.closePath(),r.fill(),r.fillStyle="#ffffff",r.beginPath(),r.moveTo(358,0),r.lineTo(384,42),r.lineTo(410,0),r.closePath(),r.fill()):a==="red_white_stripes"?(r.fillStyle="#ffffff",r.strokeStyle="#991b1b",r.lineWidth=3,r.beginPath(),r.moveTo(348,0),r.lineTo(384,58),r.lineTo(420,0),r.closePath(),r.fill(),r.stroke()):a==="plain"?(r.fillStyle=t?"#b45309":n.trim,r.beginPath(),r.moveTo(352,0),r.lineTo(384,56),r.lineTo(416,0),r.closePath(),r.fill()):a==="v_collar"?(r.fillStyle=n.trim,r.beginPath(),r.moveTo(348,0),r.lineTo(384,62),r.lineTo(420,0),r.closePath(),r.fill()):(r.save(),r.translate(414,130),r.fillStyle=n.trim,r.beginPath(),r.arc(0,0,18,0,Math.PI*2),r.fill(),r.fillStyle=n.secondary,r.beginPath(),r.arc(0,0,13,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff",r.beginPath(),r.arc(0,0,5,0,Math.PI*2),r.fill(),r.restore(),e>0&&(r.save(),r.translate(384,210),r.textAlign="center",r.textBaseline="middle",r.font='800 54px system-ui, -apple-system, "Segoe UI", sans-serif',r.fillStyle=n.numberColor,r.fillText(String(e),0,0),r.restore()));const o=new ga(i);return o.colorSpace=Qt,o.anisotropy=4,o}function jE(n){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),i=()=>{const f=new ga(e);return f.colorSpace=Qt,f};t.fillStyle=n.skin,t.fillRect(0,0,256,256);const r=t.createRadialGradient(192,128,8,192,128,76);r.addColorStop(0,Jn(n.skin,.07)),r.addColorStop(1,Jn(n.skin,-.07)),t.fillStyle=r,t.fillRect(0,0,256,256);const s=192,a=n.keeperPersona,o=n.playerPersona;if(o==="mulaohan"){const f=t.createRadialGradient(s,54,4,s,54,46);f.addColorStop(0,"rgba(255,245,235,0.34)"),f.addColorStop(1,"rgba(255,245,235,0)"),t.fillStyle=f,t.fillRect(s-50,8,100,92)}else if(a!=="tuoheya"){const f=o==="jiadaogou"?"#201611":o==="ligugu"?"#cbd5e1":n.hair,d=o==="mahangmu"||o==="jatiewei"||o==="siqiaotun"?32:44;t.fillStyle=n.hair,t.fillRect(0,0,256,d),t.fillStyle=f,t.fillRect(0,0,142,168),t.fillRect(238,0,18,130),t.fillRect(138,0,14,130)}const l=(f=1)=>{t.fillStyle=Jn(n.skin,-.24),t.beginPath(),t.ellipse(s,147,5.8*f,3.3*f,0,0,Math.PI*2),t.fill()},c=(f="#1f1612",d=4.6)=>{for(const m of[-1,1]){const v=s+m*15.5,_=114;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(v,_,7.6,d,0,0,Math.PI*2),t.fill(),t.fillStyle=f,t.beginPath(),t.arc(v,_,3.9,0,Math.PI*2),t.fill(),t.fillStyle="#0e0a08",t.beginPath(),t.arc(v,_,2,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(v-1.3,_-1.3,1.3,0,Math.PI*2),t.fill()}},h=(f=169,d=18,m=18)=>{t.fillStyle="#42110f",t.beginPath(),t.ellipse(s,f,d,m,0,.05*Math.PI,.95*Math.PI),t.closePath(),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(s,f,d-2,m-3,0,.08*Math.PI,.92*Math.PI),t.closePath(),t.fill()};if(a==="laya")return t.fillStyle="#1a1310",t.beginPath(),t.ellipse(s,194,42,46,0,0,Math.PI),t.fill(),t.beginPath(),t.ellipse(s,164,26,9,0,Math.PI,Math.PI*2),t.fill(),t.fillRect(s-24,160,48,11),h(169,19,19),t.strokeStyle="#120d0a",t.lineWidth=7.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,99),t.quadraticCurveTo(s-16,91,s-6,97),t.moveTo(s+6,97),t.quadraticCurveTo(s+16,91,s+26,99),t.stroke(),c("#3b2114",5.8),i();if(a==="aozhezhe"){t.strokeStyle="rgba(25,10,5,0.45)",t.lineWidth=2.2;for(const f of[72,79])t.beginPath(),t.moveTo(s-20,f),t.quadraticCurveTo(s,f-4,s+20,f),t.stroke();t.strokeStyle="#100b08",t.lineWidth=5.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,95),t.quadraticCurveTo(s-16,82,s-6,89),t.moveTo(s+6,89),t.quadraticCurveTo(s+16,82,s+26,95),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,m=112;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,m,9.6,10.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#29150c",t.beginPath(),t.arc(d,m+.5,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#090605",t.beginPath(),t.arc(d,m+.5,2,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.3,m-1.3,1.3,0,Math.PI*2),t.fill()}return t.fillStyle="#120d0a",t.beginPath(),t.ellipse(s,224,24,18,0,0,Math.PI*2),t.fill(),t.fillStyle="#2b0908",t.beginPath(),t.roundRect(s-17,160,34,44,11),t.fill(),t.fillStyle="#f8fafc",t.fillRect(s-13,162,26,6),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,192,12,8,0,0,Math.PI*2),t.fill(),t.fillStyle="#f8fafc",t.fillRect(s-12,197,24,5),t.strokeStyle="#3a1b10",t.lineWidth=3.2,t.beginPath(),t.roundRect(s-17,160,34,44,11),t.stroke(),i()}if(a==="leikesen"){for(const f of[-1,1]){const d=s+f*16,m=114,v=t.createRadialGradient(d,m,2,d,m,22);v.addColorStop(0,"rgba(186, 230, 253, 0.95)"),v.addColorStop(.45,"rgba(56, 189, 248, 0.65)"),v.addColorStop(1,"rgba(56, 189, 248, 0)"),t.fillStyle=v,t.fillRect(d-22,m-22,44,44),t.fillStyle="#ecfeff",t.beginPath(),t.ellipse(d,m,8.5,5.2,f*-.08,0,Math.PI*2),t.fill()}return t.strokeStyle="#7c4a15",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.lineTo(s-6,104),t.moveTo(s+6,104),t.lineTo(s+26,98),t.stroke(),t.fillStyle="#a86b24",t.beginPath(),t.ellipse(s,196,44,48,0,0,Math.PI),t.fill(),i()}if(a==="dingneisi"){t.strokeStyle="#3b2313",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-27,96),t.quadraticCurveTo(s-16,84,s-5,95),t.moveTo(s+5,101),t.quadraticCurveTo(s+16,99,s+26,103),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,m=114+(f>0?1.5:0);t.fillStyle="#f8fafc",t.beginPath(),t.ellipse(d,m,7.6,4.4,0,0,Math.PI*2),t.fill(),t.fillStyle="#231710",t.beginPath(),t.arc(d+1.2,m,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d,m-1.1,1.2,0,Math.PI*2),t.fill(),t.strokeStyle="#3a2214",t.lineWidth=2.4,t.beginPath(),t.moveTo(d-8,m-2),t.quadraticCurveTo(d,m-5,d+8,m-1.5),t.stroke()}return t.strokeStyle=Jn(n.skin,-.44),t.lineWidth=3.4,t.lineCap="round",t.beginPath(),t.moveTo(s-19,166),t.quadraticCurveTo(s-4,176,s+14,175),t.stroke(),t.lineWidth=2.2,t.beginPath(),t.arc(s-20,165,5,Math.PI*.75,Math.PI*1.45),t.stroke(),i()}if(o==="morenha"){t.fillStyle="#ca8a04",t.beginPath(),t.ellipse(s,198,42,46,0,0,Math.PI),t.fill(),t.strokeStyle="#a16207",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-15,103,s-6,100),t.moveTo(s+6,100),t.quadraticCurveTo(s+15,103,s+26,98),t.stroke(),t.strokeStyle="#5c3618",t.lineWidth=3.2;for(const f of[-1,1]){const d=s+f*15.5;t.beginPath(),t.moveTo(d-8,114),t.quadraticCurveTo(d,120,d+8,114),t.stroke()}return l(1.1),t.strokeStyle="#7c3f28",t.lineWidth=3,t.beginPath(),t.moveTo(s-11,172),t.quadraticCurveTo(s,170,s+11,172),t.stroke(),i()}if(o==="pabupaleng"){t.strokeStyle="#b48628",t.lineWidth=4.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,99),t.quadraticCurveTo(s-14,92,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+14,92,s+25,99),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,m=115;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,m,8,5.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#38bdf8",t.beginPath(),t.arc(d,m+1,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#0f172a",t.beginPath(),t.arc(d,m+1,1.8,0,Math.PI*2),t.fill(),t.fillStyle=Jn(n.skin,-.08),t.beginPath(),t.ellipse(d,m-2.4,8.4,3.8,0,0,Math.PI*2),t.fill(),t.strokeStyle="#7c523c",t.lineWidth=2,t.beginPath(),t.moveTo(d-8,m-.5),t.lineTo(d+8,m-.5),t.stroke()}return t.fillStyle="rgba(239, 68, 68, 0.28)",t.beginPath(),t.ellipse(s,144,9,6.5,0,0,Math.PI*2),t.fill(),t.fillStyle="#4a1518",t.beginPath(),t.ellipse(s,174,8.5,5.2,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-6,170,12,2.8),i()}if(o==="saxiaojiao"||o==="edashuai"){const f=o==="saxiaojiao";f?(t.fillStyle="#16100c",t.fillRect(s-18,159,36,5),t.beginPath(),t.ellipse(s,214,18,12,0,0,Math.PI*2),t.fill()):(t.fillStyle="#b78332",t.globalAlpha=.72,t.beginPath(),t.ellipse(s,198,28,30,0,0,Math.PI),t.fill(),t.fillRect(s-18,162,36,8),t.globalAlpha=1),t.strokeStyle=f?"#140e0b":"#9a6c22",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,96),t.quadraticCurveTo(s-16,88,s-6,94),t.moveTo(s+6,99),t.quadraticCurveTo(s+16,94,s+26,100),t.stroke();const d=s-15.5;return t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,113,8,5.8,0,0,Math.PI*2),t.fill(),t.fillStyle=f?"#3b2114":"#38bdf8",t.beginPath(),t.arc(d,113,4.2,0,Math.PI*2),t.fill(),t.fillStyle="#120c08",t.beginPath(),t.arc(d,113,2.1,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.3,111.6,1.4,0,Math.PI*2),t.fill(),t.strokeStyle=f?"#1a0f0a":"#6b4718",t.lineWidth=3.6,t.beginPath(),t.moveTo(s+7,115),t.quadraticCurveTo(s+15.5,108,s+24,115),t.stroke(),l(),f?h(168,20,18):(t.strokeStyle="#7c3f28",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-15,171),t.quadraticCurveTo(s,180,s+16,169),t.stroke()),i()}if(o==="mulaohan"){t.strokeStyle="rgba(35,15,8,0.42)",t.lineWidth=2.4;for(const f of[74,82])t.beginPath(),t.moveTo(s-22,f),t.quadraticCurveTo(s,f-4,s+22,f),t.stroke();return t.fillStyle="#120d0b",t.beginPath(),t.ellipse(s,198,46,52,0,0,Math.PI),t.fill(),t.fillRect(s-28,162,56,14),t.strokeStyle="#0e0a08",t.lineWidth=7.4,t.lineCap="round",t.beginPath(),t.moveTo(s-27,100),t.quadraticCurveTo(s-16,91,s-5,98),t.moveTo(s+5,98),t.quadraticCurveTo(s+16,91,s+27,100),t.stroke(),c("#2b170e",5.2),l(1.3),i()}if(o==="weixiaoshu"){t.strokeStyle="#704222",t.lineWidth=5,t.lineCap="round",t.beginPath(),t.moveTo(s-25,97),t.quadraticCurveTo(s-15,90,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+15,90,s+25,97),t.stroke(),c("#5c3218",6.2),t.fillStyle="rgba(244, 114, 114, 0.25)";for(const f of[-1,1])t.beginPath(),t.ellipse(s+f*22,136,11,7,0,0,Math.PI*2),t.fill();t.fillStyle="rgba(140, 72, 42, 0.48)";for(const[f,d]of[[-24,134],[-18,138],[-12,133],[12,133],[18,138],[24,134]])t.beginPath(),t.arc(s+f,d,1.5,0,Math.PI*2),t.fill();return l(.95),t.strokeStyle="#8a3c2c",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-16,169),t.quadraticCurveTo(s,179,s+16,169),t.stroke(),i()}if(o==="xiehuashao")return t.fillStyle="#362012",t.beginPath(),t.ellipse(s,196,42,46,0,0,Math.PI),t.fill(),t.fillRect(s-24,160,48,11),h(168,19,18),t.strokeStyle="#26160c",t.lineWidth=6.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-15,91,s-5,98),t.moveTo(s+5,98),t.quadraticCurveTo(s+15,91,s+26,98),t.stroke(),c("#3b2114",5.4),l(1.1),i();if(o==="jiadaogou")return t.strokeStyle="#120d0a",t.lineWidth=7.2,t.lineCap="round",t.beginPath(),t.moveTo(s-27,94),t.lineTo(s-5,105),t.moveTo(s+5,105),t.lineTo(s+27,94),t.stroke(),c("#24150e",5.2),l(),t.fillStyle="#360c0c",t.beginPath(),t.roundRect(s-15,161,30,34,10),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-11,163,22,5.5),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,186,10,6.5,0,0,Math.PI*2),t.fill(),i();if(o==="mushandian")return t.strokeStyle="#8a6220",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-26,97),t.lineTo(s-6,103),t.moveTo(s+6,103),t.lineTo(s+26,97),t.stroke(),c("#2563eb",4.8),l(),h(169,15,12),i();if(o==="mahangmu")return t.strokeStyle="#241912",t.lineWidth=6.8,t.lineCap="round",t.beginPath(),t.moveTo(s-27,100),t.lineTo(s-7,100),t.moveTo(s+7,100),t.lineTo(s+27,100),t.stroke(),c("#2b1d14",4.4),l(1.15),t.strokeStyle=Jn(n.skin,-.42),t.lineWidth=3.4,t.beginPath(),t.moveTo(s-14,174),t.lineTo(s+14,174),t.stroke(),i();if(o==="matufu"){t.fillStyle="rgba(42,28,20,0.28)",t.beginPath(),t.ellipse(s,198,40,38,0,0,Math.PI),t.fill(),t.strokeStyle="#18100c",t.lineWidth=7,t.lineCap="round",t.beginPath(),t.moveTo(s-28,94),t.lineTo(s-4,107),t.moveTo(s+4,107),t.lineTo(s+28,94),t.stroke(),t.strokeStyle="rgba(90,35,25,0.55)",t.lineWidth=2.2,t.beginPath(),t.moveTo(s-3,96),t.lineTo(s-3,108),t.moveTo(s+3,96),t.lineTo(s+3,108),t.stroke(),c("#24150e",4.8),l(1.15),t.fillStyle="#ffffff",t.strokeStyle="#3b1512",t.lineWidth=3,t.beginPath(),t.roundRect(s-19,165,38,17,6),t.fill(),t.stroke(),t.strokeStyle="rgba(40,20,15,0.45)",t.lineWidth=1.6,t.beginPath(),t.moveTo(s-18,173.5),t.lineTo(s+18,173.5);for(const f of[-10,-3,4,11])t.moveTo(s+f,166),t.lineTo(s+f,181);return t.stroke(),i()}if(o==="ligugu")return t.strokeStyle="#2b1d14",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,99),t.quadraticCurveTo(s-15,93,s-6,98),t.moveTo(s+6,97),t.quadraticCurveTo(s+15,91,s+25,97),t.stroke(),c("#2b1a12",4.8),l(1.15),t.strokeStyle=Jn(n.skin,-.4),t.lineWidth=3.2,t.beginPath(),t.moveTo(s-13,174),t.quadraticCurveTo(s+2,176,s+14,170),t.stroke(),i();if(o==="jatiewei")return t.fillStyle="#120d0a",t.beginPath(),t.ellipse(s,198,42,48,0,0,Math.PI),t.fill(),t.strokeStyle="#0d0907",t.lineWidth=6.2,t.lineCap="round",t.beginPath(),t.moveTo(s-26,92),t.quadraticCurveTo(s-15,84,s-5,92),t.moveTo(s+5,92),t.quadraticCurveTo(s+15,84,s+26,92),t.stroke(),c("#24140c",4),l(1.2),t.fillStyle="#380b0b",t.beginPath(),t.roundRect(s-24,154,48,46,14),t.fill(),t.fillStyle="#ffffff",t.fillRect(s-21,156,42,12),t.fillRect(s-18,190,36,7),t.fillStyle="#e15b64",t.beginPath(),t.ellipse(s,182,14,8,0,0,Math.PI*2),t.fill(),i();if(o==="antuoluo")return t.fillStyle="#2d1d13",t.globalAlpha=.68,t.beginPath(),t.ellipse(s,198,39,40,0,0,Math.PI),t.fill(),t.fillRect(s-19,163,38,8),t.globalAlpha=1,t.strokeStyle="#1c120c",t.lineWidth=7,t.lineCap="round",t.beginPath(),t.moveTo(s-28,93),t.lineTo(s-4,107),t.moveTo(s+4,107),t.lineTo(s+28,93),t.stroke(),c("#21140d",4.8),l(),t.strokeStyle="#4a2418",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-13,176),t.quadraticCurveTo(s,170,s+13,176),t.stroke(),i();if(o==="nujiaoshou"){t.strokeStyle="rgba(85,42,22,0.32)",t.lineWidth=2.4;for(const f of[-1,1])t.beginPath(),t.moveTo(s+f*32,134),t.quadraticCurveTo(s+f*27,162,s+f*20,186),t.stroke();t.strokeStyle="#1a110b",t.lineWidth=6.6,t.lineCap="round",t.beginPath(),t.moveTo(s-28,96),t.lineTo(s-5,105),t.moveTo(s+5,105),t.lineTo(s+28,96),t.stroke(),t.strokeStyle=n.skin,t.lineWidth=2.6,t.beginPath(),t.moveTo(s+19,94),t.lineTo(s+22,103),t.stroke();for(const f of[-1,1]){const d=s+f*15.5,m=114;t.fillStyle="#ffffff",t.beginPath(),t.ellipse(d,m,8.6,5.8,0,0,Math.PI*2),t.fill(),t.fillStyle="#2b1910",t.beginPath(),t.arc(d,m,3.6,0,Math.PI*2),t.fill(),t.fillStyle="#090605",t.beginPath(),t.arc(d,m,1.9,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d-1.2,m-1.2,1.2,0,Math.PI*2),t.fill()}return l(1.12),t.strokeStyle="#1c120c",t.lineWidth=4.2,t.lineCap="round",t.beginPath(),t.moveTo(s-19,166),t.quadraticCurveTo(s-9,159,s-2,162),t.moveTo(s+2,162),t.quadraticCurveTo(s+9,159,s+19,166),t.stroke(),t.strokeStyle=Jn(n.skin,-.4),t.lineWidth=3,t.beginPath(),t.moveTo(s-13,173),t.quadraticCurveTo(s,175,s+13,173),t.stroke(),t.fillStyle="#1c120c",t.beginPath(),t.ellipse(s,184,4.8,2.8,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(s-5,236,10,9,-.15,0,Math.PI*2),t.ellipse(s+5,236,10,9,.15,0,Math.PI*2),t.fill(),i()}if(o==="jiekexikao"){t.strokeStyle="rgba(20,10,5,0.42)",t.lineWidth=2;for(const f of[76,83])t.beginPath(),t.moveTo(s-18,f),t.quadraticCurveTo(s,f-3,s+18,f),t.stroke();return t.strokeStyle="#120d0a",t.lineWidth=5.8,t.lineCap="round",t.beginPath(),t.moveTo(s-26,98),t.quadraticCurveTo(s-14,88,s-5,92),t.moveTo(s+5,94),t.quadraticCurveTo(s+15,90,s+26,99),t.stroke(),c("#29160d",5.8),l(1.15),t.fillStyle="#140f0c",t.beginPath(),t.ellipse(s,218,18,12,0,0,Math.PI*2),t.fill(),t.strokeStyle="#2b140d",t.lineWidth=3.4,t.beginPath(),t.moveTo(s-11,174),t.quadraticCurveTo(s,171,s+11,175),t.stroke(),i()}if(o==="siqiaotun")return t.fillStyle="#140f0c",t.beginPath(),t.ellipse(s,214,20,14,0,0,Math.PI*2),t.fill(),t.fillRect(s-17,159,34,4.5),t.strokeStyle="#120d0a",t.lineWidth=5.6,t.lineCap="round",t.beginPath(),t.moveTo(s-25,96),t.quadraticCurveTo(s-15,89,s-6,95),t.moveTo(s+6,95),t.quadraticCurveTo(s+15,89,s+25,96),t.stroke(),c("#2b170e",5.2),l(1.1),h(168,19,17),i();if(o==="weizhencha")return t.strokeStyle="#a37628",t.lineWidth=5.2,t.lineCap="round",t.beginPath(),t.moveTo(s-24,100),t.quadraticCurveTo(s-14,95,s-6,99),t.moveTo(s+6,99),t.quadraticCurveTo(s+14,95,s+24,100),t.stroke(),c("#2563eb",4.8),l(),t.strokeStyle=Jn(n.skin,-.38),t.lineWidth=3.2,t.beginPath(),t.moveTo(s-13,172),t.quadraticCurveTo(s,178,s+14,171),t.stroke(),i();if(n.facialHair!=="none"){const f=n.facialHair==="stubble"?.26:n.facialHair==="goatee"?.56:.74;t.fillStyle=n.hair,t.globalAlpha=f,n.facialHair==="goatee"?(t.beginPath(),t.ellipse(s,198,15,25,0,0,Math.PI*2),t.fill()):(t.beginPath(),t.ellipse(s,196,38,36,0,0,Math.PI),t.fill(),t.fillRect(s-17,165,34,10)),t.globalAlpha=1}return t.strokeStyle=Jn(n.hair,-.18),t.lineWidth=5,t.lineCap="round",t.beginPath(),t.moveTo(s-24,102),t.quadraticCurveTo(s-15,96,s-7,101),t.moveTo(s+7,101),t.quadraticCurveTo(s+15,96,s+24,102),t.stroke(),c("#1a1614",4.4),l(),t.strokeStyle=Jn(n.skin,-.38),t.lineWidth=2.8,t.beginPath(),t.moveTo(s-11,174),t.quadraticCurveTo(s,176.5,s+11,174),t.stroke(),t.fillStyle="rgba(150,70,65,0.32)",t.beginPath(),t.ellipse(s,175.5,10,3.4,0,0,Math.PI*2),t.fill(),i()}function ZE(n,e){const t=new nt,i=n.keeperPersona,r=n.playerPersona;if(i==="leikesen"){const l=new Ee({color:"#d89b3c",roughness:.68}),c=new q(new Le(.098,18,14),e);c.position.set(0,.148,-.014),c.scale.set(1.04,.96,1.05),t.add(c);for(const _ of[-1,1]){const p=new q(new Le(.056,14,10),l);p.position.set(_*.036,.214,.016),p.scale.set(1.05,.62,1.18),p.rotation.z=_*-.22,t.add(p)}for(let _=0;_<11;_++){const p=_/10,u=Math.PI*(.48+p*1.04),g=.094,y=.096,S=Math.sin(u)*g,E=Math.cos(u)*y-.01;for(let w=0;w<4;w++){const x=new q(new Le(.033-w*.002,10,8),w%2===0?e:l),M=1+w*.09+w%2*.05;x.position.set(S*M,.125-w*.052,E*M),x.scale.set(.95,1.28,.95),x.castShadow=!0,t.add(x)}}const h=new Ee({color:"#153042",roughness:.45,metalness:.25}),f=new q(new ct(.095,.095,.036,24,1,!0),h);f.position.set(0,.156,-.003),f.scale.set(.97,1,1.07),t.add(f);const d=new Ee({color:"#a5f3fc",emissive:"#22d3ee",emissiveIntensity:1.5,roughness:.2}),m=new q(new rt(.014,.03,.008),d);m.position.set(0,.156,.101),m.rotation.z=-.28,t.add(m);for(const _ of[-1,1]){const p=new q(new Le(.013,10,8),d);p.position.set(_*.031,.104,.094),p.scale.set(1.25,.72,.65),t.add(p);for(let u=0;u<3;u++){const g=new q(new rt(.034,.0055,.0055),d);g.position.set(_*(.062+u*.026),.108+(u%2===0?.006:-.004),.088-u*.016),g.rotation.z=_*(u%2===0?.36:-.28),g.rotation.y=_*-.35,t.add(g)}}const v=new q(new Le(.068,16,12),e);v.position.set(0,-.006,.056),v.scale.set(1.12,1.08,.92),v.castShadow=!0,t.add(v);for(const _ of[-1,1]){const p=new q(new Le(.044,12,10),e);p.position.set(_*.052,.024,.042),p.scale.set(.88,1.18,.95),t.add(p);const u=new q(new Ht(.013,.032,6,8),l);u.position.set(_*.024,.048,.098),u.rotation.z=Math.PI*.5+_*.34,t.add(u)}return t}if(r==="mulaohan"){const l=new Ee({color:"#14100e",roughness:.85}),c=new q(new Le(.082,18,14),l);c.position.set(0,-.02,.058),c.scale.set(1.18,1.14,.96),c.castShadow=!0,t.add(c);for(const h of[-1,1]){const f=new q(new Le(.052,12,10),l);f.position.set(h*.058,.022,.044),f.scale.set(.92,1.2,.95),t.add(f);const d=new q(new Le(.046,10,8),l);d.position.set(h*.032,-.068,.064),t.add(d);const m=new q(new Ht(.015,.038,6,8),l);m.position.set(h*.026,.048,.101),m.rotation.z=Math.PI*.5+h*.28,t.add(m)}return t}if(r==="morenha"){const l=new Ee({color:"#facc15",roughness:.65}),c=new Ee({color:"#38bdf8",roughness:.4}),h=new q(new Le(.096,18,14),e);h.position.set(0,.152,-.012),h.scale.set(1.02,.95,1.04),t.add(h);for(const v of[-1,1]){const _=new q(new Le(.056,14,10),l);_.position.set(v*.036,.212,.012),_.scale.set(1.04,.58,1.22),_.rotation.z=v*-.22,t.add(_);for(let g=0;g<6;g++){const y=new q(new Le(.02-g*.0012,10,8),g%2===0?l:e);y.position.set(v*.088,.085-g*.031,.038+g*.005),y.scale.set(.95,1.18,.95),t.add(y)}const p=new q(new ct(.014,.014,.012,10),c);p.position.set(v*.088,-.095,.068),t.add(p);const u=new q(new wn(.015,.032,8),l);u.position.set(v*.088,-.115,.068),u.rotation.x=Math.PI,t.add(u)}for(let v=0;v<9;v++){const _=Math.PI*(.52+v/8*.96),p=Math.sin(_)*.092,u=Math.cos(_)*.094-.01;for(let g=0;g<3;g++){const y=new q(new Le(.03,8,8),e);y.position.set(p*(1+g*.07),.12-g*.048,u*(1+g*.07)),y.scale.set(.95,1.25,.95),t.add(y)}}const f=new q(new Le(.064,16,12),e);f.position.set(0,-.005,.056),f.scale.set(1.08,1.02,.9),t.add(f);for(const v of[-1,1]){const _=new q(new Ht(.012,.03,6,8),l);_.position.set(v*.022,.048,.098),_.rotation.z=Math.PI*.5+v*.34,t.add(_)}const d=new q(new ct(.016,.016,.012,10),c);d.position.set(0,-.062,.076),t.add(d);const m=new q(new wn(.018,.038,10),l);return m.position.set(0,-.084,.078),m.rotation.x=Math.PI,t.add(m),t}if(r==="weizhencha"){const l=new Ee({color:"#6b4428",roughness:.62,metalness:.05}),c=new Ee({color:"#4a2c18",roughness:.7}),h=new Ee({color:"#cbd5e1",roughness:.3,metalness:.65}),f=new Ee({color:"#38bdf8",emissive:"#0284c7",emissiveIntensity:.35,roughness:.15,metalness:.4}),d=new q(new Le(.104,20,16,0,Math.PI*2,0,Math.PI*.58),l);d.position.set(0,.132,-.008),d.rotation.x=-.18,d.castShadow=!0,t.add(d);const m=new q(new rt(.018,.022,.19),c);m.position.set(0,.228,-.012),t.add(m);for(let p=-2;p<=2;p++){const u=new q(new Le(.022,8,8),e);u.position.set(p*.02,.156,.088-Math.abs(p)*.004),u.scale.set(1.1,.55,.8),t.add(u)}for(const p of[-1,1]){const u=new q(new Ht(.022,.095,6,8),l);u.position.set(p*.096,.082,-.004),u.scale.set(.52,1,1.18),u.rotation.z=p*.08,t.add(u);const g=new q(new ct(.032,.032,.022,16),h);g.rotation.x=Math.PI*.44,g.position.set(p*.037,.188,.092),t.add(g);const y=new q(new ct(.026,.026,.025,16),f);y.rotation.x=Math.PI*.44,y.position.set(p*.037,.188,.094),t.add(y)}const v=new q(new rt(.024,.01,.014),c);v.position.set(0,.188,.101),t.add(v);const _=new q(new ct(.105,.105,.018,22,1,!0),c);return _.position.set(0,.182,-.006),_.rotation.x=-.12,t.add(_),t}if(r==="mahangmu"){const l=new q(new rt(.208,.048,.206),e);l.position.set(0,.206,-.002),l.castShadow=!0,t.add(l);const c=new q(new rt(.204,.135,.08),e);return c.position.set(0,.145,-.066),t.add(c),t}const s=r==="jiadaogou"?new Ee({color:"#201611",roughness:.85}):e,a=pn([{y:.115,rx:.088,rz:.088,oz:-.022},{y:.158,rx:.092,rz:.098,oz:-.015},{y:.196,rx:.089,rz:.098,oz:-.008},{y:.224,rx:.068,rz:.078,oz:-.002},{y:.238,rx:.022,rz:.026,oz:0}],20,2),o=new q(a,s);if(o.rotation.x=-.26,o.position.set(0,.014,-.006),o.castShadow=!0,t.add(o),i==="aozhezhe"){for(let c=0;c<16;c++){const h=c<10?.052:.022,f=(c<10?c/10:(c-10)/6)*Math.PI*2,d=new q(new Ht(.016,.038,6,8),e);d.position.set(Math.sin(f)*h,.232+c%2*.01,Math.cos(f)*h-.004),d.rotation.z=-Math.sin(f)*.22,d.rotation.x=Math.cos(f)*.18,d.castShadow=!0,t.add(d)}const l=new q(new Le(.026,10,8),e);return l.position.set(0,-.022,.072),l.scale.set(1.1,.85,.9),t.add(l),t}if(i==="laya"){for(let c=0;c<9;c++){const h=new q(new Le(.035,10,8),e),f=c/8*Math.PI*1.5-.75;h.position.set(Math.sin(f)*.044,.226+c%2*.007,.014+Math.cos(f)*.04),h.scale.set(1.05,.78,1.18),t.add(h)}const l=new q(new Le(.048,14,10),e);l.position.set(0,-.014,.048),l.scale.set(1.22,.72,.95),t.add(l);for(const c of[-1,1]){const h=new q(new Ht(.018,.055,6,8),e);h.position.set(c*.064,.025,.034),h.rotation.z=c*.28,h.rotation.x=-.25,t.add(h)}return t}if(i==="dingneisi"){const l=new q(new Le(.078,16,12),e);return l.scale.set(1.02,.48,1.18),l.position.set(.012,.224,.012),l.rotation.set(-.22,0,-.16),l.castShadow=!0,t.add(l),t}if(r==="matufu"){const l=new Ee({color:"#f8fafc",roughness:.65}),c=new q(new ct(.096,.094,.042,24),l);c.position.set(0,.158,.002),c.scale.set(.98,1,1.08),c.castShadow=!0,t.add(c);const h=new q(new rt(.06,.016,.012),l);h.position.set(.015,.158,.102),h.rotation.z=-.14,t.add(h);for(let f=0;f<12;f++){const d=f/12*Math.PI*2,m=new q(new wn(.028,.068,8),e);m.position.set(Math.sin(d)*.052,.232+f%2*.012,Math.cos(d)*.052),m.rotation.z=-Math.sin(d)*.45,m.rotation.x=Math.cos(d)*.4,t.add(m)}return t}if(r==="nujiaoshou"){const l=new Ee({color:"#111827",roughness:.5}),c=new Ee({color:"#8c7350",roughness:.6}),h=new Ee({color:"#e8dac0",roughness:.42,metalness:.06});for(let v=-3;v<=3;v++){const _=v*.017,p=new q(new Ht(.014,.064,5,7),e);p.position.set(_,.214+(3-Math.abs(v))*.004,.046-Math.abs(v)*.004),p.rotation.x=-.82,p.rotation.z=_*2.4,t.add(p)}const f=new q(new ct(.026,.028,.016,14),l);f.position.set(0,.242,-.008),f.rotation.x=-.14,t.add(f);const d=new q(new Le(.044,14,12),e);d.position.set(0,.27,-.012),d.scale.set(1.08,.88,1.06),d.castShadow=!0,t.add(d);for(const v of[-1,1]){const _=new VS([new z(v*.062,.188,.042),new z(v*.114,.194,.054),new z(v*.136,.244,.044),new z(v*.102,.308,.026)]),p=14,u=10,g=_.computeFrenetFrames(p,!1),y=_.getSpacedPoints(p),S=[],E=[];for(let C=0;C<=p;C++){const A=C/p,L=.025*Math.pow(1-A,.82)+.0018,D=y[C],U=g.normals[C],P=g.binormals[C];for(let N=0;N<=u;N++){const X=N/u*Math.PI*2,G=Math.cos(X),F=Math.sin(X);S.push(D.x+L*(G*U.x+F*P.x),D.y+L*(G*U.y+F*P.y),D.z+L*(G*U.z+F*P.z))}}for(let C=0;C<p;C++)for(let A=0;A<u;A++){const L=C*(u+1)+A,D=L+1,U=(C+1)*(u+1)+A,P=U+1;E.push(L,D,P,L,P,U)}const w=new Ft;w.setAttribute("position",new ht(S,3)),w.setIndex(E),w.computeVertexNormals();const x=new q(w,h);x.castShadow=!0,t.add(x);const M=new q(new Le(.026,10,8),c);M.position.set(v*.064,.188,.042),M.scale.set(.85,1.05,1.05),t.add(M)}for(let v=0;v<3;v++){const _=new q(new Ht(.008,.062,5,7),e);_.position.set(-.072-v*.011,.045-v*.012,-.024-v*.006),_.rotation.z=-.32-v*.1,_.rotation.x=.15,t.add(_)}const m=new q(new Le(.021,10,8),e);return m.position.set(0,-.011,.048),m.scale.set(1.22,.65,.85),t.add(m),t}if(r==="jiekexikao"){const l=new Ee({color:"#eab308",roughness:.65}),c=20;for(let f=0;f<c;f++){const d=f>=12,v=(d?(f-12)/8:f/12)*Math.PI*2+(d?.24:0),_=d?.026:.052,p=d?.78:Math.cos(v)>.35?1.05:1.18,u=new nt;u.position.set(Math.sin(v)*_,d?.228:.214,Math.cos(v)*_+.008),u.rotation.order="YXZ",u.rotation.y=v,u.rotation.x=p;const g=new q(new Ht(.0135,.036,5,7),e);g.position.set(0,.02,0),u.add(g);const y=new q(new Ht(.013,.046,5,7),l);y.position.set(0,.058,.008),y.rotation.x=.28,y.castShadow=!0,u.add(y),t.add(u)}const h=new q(new Le(.021,10,8),e);return h.position.set(0,-.011,.048),h.scale.set(1.2,.65,.85),t.add(h),t}if(r==="jiadaogou"){for(let l=0;l<11;l++){const c=(l%4-1.5)*.028,h=Math.floor(l/4)*.034-.02,f=new q(new wn(.028,.068,8),e);f.position.set(c,.236,h+.018),f.rotation.x=.38,f.rotation.z=-c*3.5,f.castShadow=!0,t.add(f)}return t}if(r==="mushandian"){for(const l of[-1,1]){const c=new q(new Le(.058,14,10),e);c.position.set(l*.042,.214,.018),c.scale.set(.95,.68,1.25),c.rotation.z=l*-.35,t.add(c);const h=new q(new Ht(.022,.068,6,8),e);h.position.set(l*.078,.162,.044),h.rotation.z=l*.18,h.rotation.x=.22,t.add(h)}return t}if(r==="xiehuashao"||r==="antuoluo"||r==="jatiewei"){if(r!=="jatiewei"){const h=new q(new Le(.078,16,12),e);h.scale.set(1,.5,1.18),h.position.set(.01,.226,.012),h.rotation.set(-.2,0,-.15),t.add(h)}const l=r==="xiehuashao"?.052:.044,c=new q(new Le(l,14,10),e);c.position.set(0,-.016,.05),c.scale.set(1.2,.72,.92),t.add(c);for(const h of[-1,1]){const f=new q(new Ht(.016,.052,6,8),e);f.position.set(h*.062,.022,.032),f.rotation.z=h*.28,f.rotation.x=-.24,t.add(f)}return t}if(r==="saxiaojiao"){for(let l=0;l<18;l++){const c=l/18*Math.PI*2,h=l<11?.056:.024,f=new q(new Le(.028,10,8),e);f.position.set(Math.sin(c)*h,.224+(l>=11?.018:.006),Math.cos(c)*h),t.add(f)}return t}if(r==="edashuai"){const l=new q(new Le(.082,16,12),e);l.scale.set(1.04,.54,1.2),l.position.set(.014,.23,.016),l.rotation.set(-.18,0,-.2),t.add(l);const c=new q(new Le(.032,10,8),e);return c.position.set(0,-.016,.066),c.scale.set(1.15,.72,.85),t.add(c),t}if(r==="weixiaoshu"||r==="pabupaleng"){const l=r==="weixiaoshu"?11:8;for(let c=0;c<l;c++){const h=c/(l-1)-.5,f=new q(new wn(.028,r==="weixiaoshu"?.058:.044,8),e);f.position.set(h*.11,.226+c%2*.008,.032-Math.abs(h)*.03),f.rotation.x=.42,f.rotation.z=-h*.75,t.add(f)}return t}if(n.hairStyle==="swept"){const l=new q(new Le(.078,16,12),e);l.scale.set(.98,.48,1.18),l.position.set(.008,.224,.012),l.rotation.x=-.22,l.castShadow=!0,t.add(l)}else if(n.hairStyle==="textured")for(let l=0;l<7;l++){const c=new q(new Le(.033,10,8),e),h=l/7*Math.PI*1.4-.7;c.position.set(Math.sin(h)*.038,.226+l%2*.006,.008+Math.cos(h)*.038),c.scale.set(1,.72,1.15),t.add(c)}else if(n.hairStyle==="curly")for(let l=0;l<14;l++){const c=new q(new Le(.032,10,8),e),h=l/14*Math.PI*2,f=l<9?.062:.028;c.position.set(Math.sin(h)*f,.214+(l>=9?.022:.006),Math.cos(h)*f-.008),t.add(c)}else if(n.hairStyle==="fade"){const l=new q(new rt(.115,.036,.132),e);l.position.set(0,.226,.004),t.add(l)}else n.hairStyle==="buzz"&&o.scale.set(.97,.96,.97);return t}function JE(){const n=new nt,e=new Ee({color:"#ebd3ab",roughness:.88}),t=new Ee({color:"#f4e1be",roughness:.86}),i=new Ee({color:"#fbf0db",roughness:.78}),r=new Ee({color:"#f2a7a0",roughness:.75}),s=new Ee({color:"#caa878",roughness:.78}),a=new Ee({color:"#2b1d14",roughness:.5}),o=new Ee({color:"#ffffff",roughness:.3}),l=pn([{y:-.015,rx:.058,rz:.065,oz:.012},{y:.035,rx:.088,rz:.092,oz:.008},{y:.095,rx:.086,rz:.094,oz:.002},{y:.155,rx:.084,rz:.09,oz:-.004},{y:.205,rx:.058,rz:.064,oz:-.006}],22,2),c=new q(l,e);c.castShadow=!0,n.add(c);for(const p of[-1,1]){const u=new q(new Le(.038,10,8),e);u.position.set(p*.068,.048,.025),n.add(u)}const h=new q(new Le(.048,16,12),i);h.position.set(0,.052,.092),h.scale.set(.95,.88,1.18),h.castShadow=!0,n.add(h);for(const p of[-1,1]){const u=new q(new Le(.024,12,10),i);u.position.set(p*.018,.058,.122),u.scale.set(.95,.92,1.05),n.add(u)}const f=new q(new Le(.013,10,8),a);f.position.set(0,.078,.138),f.scale.set(1.35,.72,.7),n.add(f);const d=new q(new Le(.021,10,8),a);d.position.set(0,.036,.118),d.scale.set(1.15,.78,.7),n.add(d);for(const p of[-1,1]){const u=new q(new rt(.011,.016,.008),o);u.position.set(p*.0065,.038,.131),n.add(u)}const m=new q(new Le(.026,12,10),i);m.position.set(0,.018,.106),m.scale.set(1.05,.65,1),n.add(m);for(const p of[-.012,0,.012]){const u=new q(new Ht(.013,.028,6,8),t);u.position.set(p,-.022,.088),u.rotation.x=.2,n.add(u)}const v=new Ee({color:"#ffffff",roughness:.25});for(const p of[-1,1]){const u=p*.043,g=.108,y=.078,S=new q(new Le(.019,14,12),v);S.position.set(u,g,y),S.scale.set(1.1,.95,.8),n.add(S);const E=new q(new Le(.0095,10,8),a);E.position.set(u,g-.002,y+.012),E.scale.set(1.15,.78,.6),n.add(E);const w=new q(new Le(.0205,14,10,0,Math.PI*2,0,Math.PI*.54),s);w.position.set(u,g+.001,y),w.scale.set(1.12,.96,.85),w.rotation.x=.18,n.add(w)}const _=[[0,.168,.068,.036],[-.032,.164,.062,.033],[.032,.164,.062,.033],[-.056,.156,.044,.03],[.056,.156,.044,.03],[0,.198,.036,.042],[-.036,.194,.026,.038],[.036,.194,.026,.038],[0,.205,-.012,.044],[-.042,.182,-.022,.038],[.042,.182,-.022,.038]];for(const[p,u,g,y]of _){const S=new q(new Le(y,10,8),t);S.position.set(p,u,g),S.castShadow=!0,n.add(S)}for(const p of[-1,1]){const u=new nt;u.position.set(p*.062,.192,-.006),u.rotation.z=-p*.22,u.rotation.x=.08;const g=new q(new wn(.028,.135,12),e);g.position.set(0,.062,0),g.scale.set(.88,1,.62),g.castShadow=!0,u.add(g);const y=new q(new wn(.017,.098,10),r);y.position.set(0,.058,.008),y.scale.set(.82,1,.45),u.add(y),n.add(u)}return n}function QE(n,e){const t=new nt,i=new Ee({color:n,roughness:.35,metalness:.12}),r=new Ee({color:"#111827",roughness:.5,metalness:.2}),s=new Ee({color:e&&n!=="#f8fafc"?"#ffffff":"#0f172a",roughness:.3}),a=new Le(.056,16,12);a.scale(.86,.76,2.15);const o=new q(a,i);o.position.set(0,-.052,.052),o.castShadow=!0,t.add(o);const l=new q(new ct(.044,.048,.045,14),i);l.position.set(0,-.022,-.01),t.add(l);const c=new q(new rt(.098,.018,.09),s);c.position.set(0,-.048,.045),c.rotation.x=.18,t.add(c);const h=new q(new rt(.084,.014,.225),r);h.position.set(0,-.084,.05),h.castShadow=!0,t.add(h);const f=new ct(.006,.004,.014,6);for(const d of[-.026,.026])for(const m of[-.035,.045,.12]){const v=new q(f,r);v.position.set(d,-.092,m),t.add(v)}return t}function eb(n,e,t,i,r=!1){const s=new nt;if(e){const a=i.chestMotif==="lightning",o=new Ee({color:i.gloveBackColor??i.primary,roughness:.4}),l=new Ee({color:i.gloveLatex??"#f8fafc",emissive:a?"#0284c7":"#000000",emissiveIntensity:a?.35:0,roughness:.58}),c=new Ee({color:i.gloveStrapColor??"#0f172a",roughness:.5}),h=new q(new ct(.043,.045,.044,12),c);h.position.set(0,-.018,0),s.add(h);const f=new q(new rt(.092,.105,.042),l);f.position.set(0,-.082,.004),f.castShadow=!0,s.add(f);const d=new q(new rt(.094,.098,.024),o);if(d.position.set(0,-.08,-.014),s.add(d),i.gloveBackColor==="#dc2626"||a){const _=new Ee({color:a?"#67e8f9":"#ffffff",emissive:a?"#22d3ee":"#000000",emissiveIntensity:a?.9:0,roughness:.35});for(const p of[-.024,0,.024]){const u=new q(new rt(.012,.072,.008),_);u.position.set(p,-.085,-.026),s.add(u)}}const m=i.gloveBackColor==="#dc2626"?o:l;for(let _=0;_<4;_++){const p=(_-1.5)/1.5,u=.072-Math.abs(p)*.01,g=new q(new Ht(.012,u,6,8),m);g.position.set(p*.032,-.155,.008),g.rotation.z=p*.14,g.rotation.x=-.12,g.castShadow=!0,s.add(g)}const v=new q(new Ht(.013,.052,6,8),l);v.position.set(-n*.056,-.095,.018),v.rotation.z=-n*.62,v.rotation.x=-.22,s.add(v)}else{const a=r?new Ee({color:"#1e293b",roughness:.52}):t;if(r){const c=new q(new ct(.033,.034,.024,10),a);c.position.set(0,-.012,0),s.add(c)}const o=new q(new Le(.038,12,10),a);o.scale.set(.88,1.25,.56),o.position.set(0,-.052,0),o.castShadow=!0,s.add(o);for(let c=0;c<4;c++){const h=(c-1.5)/1.5,f=new q(new Ht(.0075,.044,4,6),a);f.position.set(h*.02,-.105,.006),f.rotation.x=-.25,s.add(f)}const l=new q(new Ht(.0085,.034,4,6),a);l.position.set(-n*.034,-.062,.014),l.rotation.z=-n*.45,s.add(l)}return s}class to{constructor(e,t,i,r){this.root=new nt,this.scaleGroup=new nt,this.pelvis=new nt,this.spine=new nt,this.neck=new nt,this.head=new nt,this.shoulderL=new nt,this.elbowL=new nt,this.wristL=new nt,this.handTipL=new Dt,this.shoulderR=new nt,this.elbowR=new nt,this.wristR=new nt,this.handTipR=new Dt,this.hipL=new nt,this.kneeL=new nt,this.ankleL=new nt,this.hipR=new nt,this.kneeR=new nt,this.ankleR=new nt,this.baseHipY=.955,this.tmpA=new z,this.tmpB=new z,this.isKeeper=r,this.heightScale=e.height/1.84;const s=e.build,a=e.keeperPersona,o=e.playerPersona;this.root.add(this.scaleGroup),this.scaleGroup.scale.set(this.heightScale,this.heightScale,this.heightScale);const l=new Ee({color:e.skin,roughness:a==="tuoheya"?.86:.62,metalness:.02}),c=KE(t,i,r),h=new Ee({map:c,roughness:.72,metalness:.03}),f=new Ee({color:t.sleeveColor??(r&&!a?t.secondary:t.primary),roughness:.72}),d=new Ee({color:t.secondary,roughness:.74}),m=new Ee({color:t.shorts,roughness:.76}),v=new Ee({color:t.socks,roughness:.74}),_=new Ee({color:"#f8fafc",roughness:.6}),p=new Ee({color:e.hair,roughness:.82});this.pelvis.position.set(0,this.baseHipY,0),this.pelvis.rotation.order="YXZ",this.scaleGroup.add(this.pelvis);const u=pn([{y:-.095,rx:.166*s,rz:.112*s,oz:-.008},{y:-.03,rx:.166*s,rz:.114*s,oz:-.006},{y:.02,rx:.146*s,rz:.098*s,oz:-.002},{y:.06,rx:.126*s,rz:.082*s,oz:0}]),g=new q(u,m);if(g.castShadow=!0,g.receiveShadow=!0,this.pelvis.add(g),o==="siqiaotun")for(const L of[-1,1]){const D=new q(new Le(.066*s,14,12),m);D.position.set(L*.056*s,-.036,-.088*s),D.scale.set(1.06,1.02,1.18),D.castShadow=!0,this.pelvis.add(D)}const y=pn([{y:.005,rx:.162*s,rz:.118*s,oz:-.005},{y:.072,rx:.152*s,rz:.11*s,oz:-.002}],24,2),S=new q(y,d);S.castShadow=!0,this.pelvis.add(S),this.spine.position.set(0,.065,0),this.spine.rotation.order="YXZ",this.pelvis.add(this.spine);const E=pn([{y:-.062,rx:.162*s,rz:.118*s,oz:-.004},{y:.045,rx:.15*s,rz:.108*s,oz:.002},{y:.18,rx:.17*s,rz:.118*s,oz:.01},{y:.31,rx:.194*s,rz:.126*s,oz:.012},{y:.41,rx:.214*s,rz:.114*s,oz:.004},{y:.468,rx:.125*s,rz:.085*s,oz:-.002},{y:.482,rx:.068,rz:.065,oz:0}]),w=new q(E,h);if(w.castShadow=!0,w.receiveShadow=!0,this.spine.add(w),o==="morenha"){const L=new Ri({color:"#f472b6",transparent:!0,opacity:.46,side:Dn});for(let D=0;D<5;D++){const U=D/4-.5,P=new q(new wn(.055,.24-Math.abs(U)*.08,8),L);P.position.set(U*.36*s,.42-Math.abs(U)*.06,-.125),P.rotation.z=-U*.48,P.rotation.x=-.18,this.spine.add(P)}}else if(o==="pabupaleng"){const L=new Ee({color:"#f0f9ff",roughness:.35}),D=new Ee({color:"#bae6fd",emissive:"#38bdf8",emissiveIntensity:.28,roughness:.18});for(const U of[-1,1]){const P=new q(new Le(.048,12,10),L);P.position.set(U*.185*s,.448,.01),P.scale.set(1.25,.42,1.05),this.spine.add(P);for(let N=-1;N<=1;N++){const X=new q(new wn(.008,.036-Math.abs(N)*.008,6),D);X.position.set(U*(.185+N*.016)*s,.422,.032),X.rotation.x=Math.PI,this.spine.add(X)}}}else if(o==="edashuai"){const L=new Ee({color:"#1e293b",roughness:.7}),D=new Ee({color:"#eab308",roughness:.32,metalness:.45}),U=new Ee({color:"#111827",roughness:.45}),P=new Ee({color:"#38bdf8",emissive:"#0284c7",emissiveIntensity:.35,roughness:.12,metalness:.6});for(const Z of[-1,1]){const ae=new q(new rt(.008,.18,.006),L);ae.position.set(Z*.036,.365,.118*s),ae.rotation.z=Z*-.14,ae.rotation.x=-.18,this.spine.add(ae)}const N=new nt;N.position.set(0,.272,.136*s);const X=new q(new rt(.088,.056,.034),D);X.castShadow=!0,N.add(X);const G=new q(new rt(.04,.016,.028),U);G.position.set(0,.034,-.002),N.add(G);const F=new q(new ct(.007,.007,.01,10),D);F.position.set(-.028,.032,.004),N.add(F);const k=new q(new ct(.021,.023,.028,16),U);k.rotation.x=Math.PI*.5,k.position.set(.004,-.002,.024),N.add(k);const W=new q(new ct(.016,.016,.03,16),P);W.rotation.x=Math.PI*.5,W.position.set(.004,-.002,.026),N.add(W),this.spine.add(N)}else if(o==="weixiaoshu"){const L=new Ee({color:"#facc15",roughness:.48}),D=new q(new ct(.024,.024,.006,14),L);D.rotation.x=Math.PI*.46,D.rotation.z=.25,D.scale.set(1.18,1,.88),D.position.set(.056*s,.338,.128*s),this.spine.add(D)}else if(o==="xiehuashao"){const L=new Ri({color:"#38bdf8",transparent:!0,opacity:.5}),D=new q(new Nc(.19*s,.005,8,28),L);D.rotation.x=Math.PI*.44,D.rotation.y=.18,D.position.set(0,.08,0),this.spine.add(D)}else if(o==="mushandian"){const L=new Ee({color:"#fde047",emissive:"#facc15",emissiveIntensity:.85,roughness:.2});for(const D of[-1,1])for(let U=0;U<2;U++){const P=new q(new wn(.012,.075,4),L);P.position.set(D*(.225+U*.018)*s,.36-U*.14,-.02+U*.03),P.rotation.z=D*-.55,this.spine.add(P);const N=new q(new wn(.01,.065,4),L);N.position.set(D*(.235+U*.018)*s,.32-U*.14,-.015+U*.03),N.rotation.z=Math.PI+D*-.42,this.spine.add(N)}}else if(o==="ligugu"){const L=new Ee({color:"#f8fafc",roughness:.55}),D=new Ee({color:"#cbd5e1",roughness:.6}),U=new Ee({color:"#f97316",roughness:.4}),P=new Ee({color:"#0f172a",roughness:.2}),N=new nt;N.position.set(.162*s,.468,.022),N.rotation.y=-.18;const X=new q(new Le(.032,12,10),L);X.scale.set(.88,.92,1.32),X.castShadow=!0,N.add(X);const G=new q(new Le(.021,12,10),L);G.position.set(0,.032,.024),G.castShadow=!0,N.add(G);for(const W of[-1,1]){const Z=new q(new Le(.022,10,8),D);Z.position.set(W*.024,.002,-.004),Z.scale.set(.42,.78,1.25),N.add(Z);const ae=new q(new Le(.0042,6,6),P);ae.position.set(W*.015,.036,.036),N.add(ae)}const F=new q(new wn(.0065,.018,8),U);F.rotation.x=Math.PI*.48,F.position.set(0,.03,.048),N.add(F);const k=new q(new rt(.028,.006,.034),D);k.position.set(0,-.006,-.044),k.rotation.x=-.24,N.add(k),this.spine.add(N)}else if(o==="antuoluo"){const L=new Ri({color:"#f8fafc",transparent:!0,opacity:.48}),D=[.09,.21,.33],U=[.205,.245,.225];for(let P=0;P<3;P++){const N=new q(new Nc(U[P]*s,.0065,8,32,Math.PI*1.65),L);N.rotation.x=Math.PI*.5+(P-1)*.08,N.rotation.z=P*2.1,N.position.set(0,D[P],0),this.spine.add(N)}}if(this.neck.position.set(0,.468,0),this.spine.add(this.neck),a==="tuoheya"){const L=pn([{y:-.018,rx:.072,rz:.072},{y:.055,rx:.066,rz:.068,oz:.004},{y:.125,rx:.064,rz:.065,oz:.008},{y:.195,rx:.062,rz:.063,oz:.011},{y:.268,rx:.058,rz:.06,oz:.014}],18,2),D=new q(L,l);D.castShadow=!0,this.neck.add(D),this.head.position.set(0,.25,.014),this.head.rotation.order="YXZ",this.neck.add(this.head),this.head.add(JE())}else{const L=new Ee({map:jE(e),roughness:o==="mulaohan"?.42:.6}),D=pn([{y:-.015,rx:.062,rz:.062},{y:.045,rx:.054,rz:.055,oz:.004},{y:.095,rx:.052,rz:.052,oz:.006}],16,2),U=new q(D,l);U.castShadow=!0,this.neck.add(U),this.head.position.set(0,.075,.006),this.head.rotation.order="YXZ",this.neck.add(this.head);const P=o==="mahangmu",N=P?pn([{y:-.018,rx:.076,rz:.076,oz:.004},{y:.006,rx:.101,rz:.098,oz:.002},{y:.095,rx:.102,rz:.099,oz:0},{y:.192,rx:.101,rz:.098,oz:-.002},{y:.214,rx:.072,rz:.072,oz:-.002}],28,2,.38):pn([{y:-.022,rx:.044,rz:.052,oz:.016},{y:.018,rx:.068,rz:.082,oz:.01},{y:.075,rx:.084,rz:.096,oz:.002},{y:.132,rx:.089,rz:.102,oz:-.004},{y:.19,rx:.084,rz:.096,oz:-.008},{y:.228,rx:.042,rz:.048,oz:-.008}],24,2),X=new q(N,L);if(X.castShadow=!0,this.head.add(X),a==="laya"){const k=new q(new Le(.022,12,10),l);k.position.set(0,.08,.105),k.scale.set(1.32,.96,1.12),this.head.add(k);for(const W of[-1,1]){const Z=new q(new Le(.012,8,8),l);Z.position.set(W*.017,.074,.098),this.head.add(Z)}}else{const k=new q(new wn(.015,.042,8),l);k.position.set(0,.086,P?.104:.098),k.rotation.x=Math.PI*.42,this.head.add(k)}const G=a==="dingneisi"?1.25:1,F=P?.105:.088;if(o!=="weizhencha")for(const k of[-1,1]){const W=new q(new Le(.02*G,8,8),l);W.scale.set(.45,1.15,.72),W.position.set(k*F,.095,-.006),this.head.add(W)}this.head.add(ZE(e,p))}const x=r&&(!a||a==="aozhezhe"),M=!r&&o==="saxiaojiao",C=(L,D,U,P,N)=>{D.position.set(L*.205*s,.415,0),D.rotation.order="ZXY",this.spine.add(D);const X=new q(new Le(.062*s,14,12),f);X.scale.set(.95,1.1,.95),X.position.set(0,-.01,0),X.castShadow=!0,D.add(X);const G=x?.285:.145,F=pn([{y:-G,rx:(x?.046:.056)*s,rz:(x?.046:.056)*s},{y:-G*.45,rx:.059*s,rz:.059*s},{y:.01,rx:.062*s,rz:.062*s}],16,2),k=new q(F,f);if(k.castShadow=!0,D.add(k),!x){const we=pn([{y:-.295,rx:.041*s,rz:.042*s},{y:-.21,rx:.049*s,rz:.051*s,oz:.003},{y:-.13,rx:.051*s,rz:.052*s}],14,2),J=new q(we,l);J.castShadow=!0,D.add(J)}U.position.set(0,-.295,0),U.rotation.order="XYZ",D.add(U);const W=new q(new Le(.041*s,12,10),x?f:l);U.add(W);const Z=pn([{y:-.26,rx:.031*s,rz:.033*s},{y:-.15,rx:.041*s,rz:.042*s},{y:-.04,rx:.044*s,rz:.045*s},{y:0,rx:.041*s,rz:.041*s}],14,2),ae=new q(Z,x?f:l);ae.castShadow=!0,U.add(ae),P.position.set(0,-.26,0),U.add(P),P.add(eb(L,r,l,t,M)),N.position.set(0,r?-.16:-.1,.01),P.add(N)};C(1,this.shoulderL,this.elbowL,this.wristL,this.handTipL),C(-1,this.shoulderR,this.elbowR,this.wristR,this.handTipR);const A=(L,D,U,P)=>{D.position.set(L*.102*s,0,0),D.rotation.order="ZXY",this.pelvis.add(D);const N=pn([{y:-.235,rx:.088*s,rz:.092*s,oz:.004},{y:-.11,rx:.092*s,rz:.096*s},{y:.02,rx:.088*s,rz:.092*s}],16,2),X=new q(N,m);X.castShadow=!0,D.add(X);const G=pn([{y:-.44,rx:.058*s,rz:.062*s},{y:-.34,rx:.068*s,rz:.074*s,oz:.005},{y:-.21,rx:.078*s,rz:.082*s,oz:.006}],16,2),F=new q(G,l);F.castShadow=!0,D.add(F),U.position.set(0,-.44,0),U.rotation.order="XYZ",D.add(U);const k=new q(new Le(.056*s,14,12),l);k.scale.set(.96,1.05,1.04),k.castShadow=!0,U.add(k);const W=pn([{y:-.11,rx:.058*s,rz:.064*s,oz:-.006},{y:-.04,rx:.055*s,rz:.058*s},{y:0,rx:.055*s,rz:.058*s}],14,2),Z=new q(W,l);Z.castShadow=!0,U.add(Z);const ae=pn([{y:-.42,rx:.039*s,rz:.043*s},{y:-.31,rx:.046*s,rz:.051*s,oz:-.004},{y:-.19,rx:.061*s,rz:.068*s,oz:-.009},{y:-.1,rx:.06*s,rz:.064*s,oz:-.005}],16,2),we=new q(ae,v);we.castShadow=!0,U.add(we);const J=new q(new ct(.062*s,.061*s,.028,16),_);J.position.set(0,-.105,-.005),U.add(J);const V=new q(new ct(.042*s,.043*s,.05,14),_);V.position.set(0,-.39,0),U.add(V),P.position.set(0,-.42,0),P.rotation.order="XYZ",U.add(P),P.add(QE(e.bootColor,r))};A(1,this.hipL,this.kneeL,this.ankleL),A(-1,this.hipR,this.kneeR,this.ankleR)}applyPose(e){this.pelvis.position.set(e.pelvisOffset.x,this.baseHipY+e.pelvisOffset.y,e.pelvisOffset.z),this.pelvis.rotation.set(e.pelvisRot.pitch,e.pelvisRot.yaw,-e.pelvisRot.roll),this.spine.rotation.set(e.spine.lean,e.spine.twist,-e.spine.side),this.head.rotation.set(e.head.pitch,e.head.yaw,-e.head.roll);const t=(r,s,a,o,l)=>{a.rotation.set(-s.flex,-r*s.twist,r*s.abduct),o.rotation.set(-Math.max(0,s.elbow),0,0),l.rotation.set(s.wristPitch??0,0,0)};t(1,e.armL,this.shoulderL,this.elbowL,this.wristL),t(-1,e.armR,this.shoulderR,this.elbowR,this.wristR);const i=(r,s,a,o,l)=>{a.rotation.set(-s.flex,r*s.twist,r*s.abduct),o.rotation.set(Math.max(0,s.knee),0,0),l.rotation.set(-s.ankle,0,0)};i(1,e.legL,this.hipL,this.kneeL,this.ankleL),i(-1,e.legR,this.hipR,this.kneeR,this.ankleR)}getKeeperCollisionCapsules(){this.root.updateMatrixWorld(!0);const e=this.heightScale,t=(i,r,s,a)=>(i.getWorldPosition(this.tmpA),r.getWorldPosition(this.tmpB),{a:this.tmpA.clone(),b:this.tmpB.clone(),radius:s*e,part:a});return[t(this.wristL,this.handTipL,.135,"gloveL"),t(this.wristR,this.handTipR,.135,"gloveR"),t(this.elbowL,this.wristL,.088,"armL"),t(this.elbowR,this.wristR,.088,"armR"),t(this.shoulderL,this.elbowL,.088,"armL"),t(this.shoulderR,this.elbowR,.088,"armR"),t(this.pelvis,this.neck,.185,"torso"),t(this.neck,this.head,.115,"torso"),t(this.hipL,this.kneeL,.1,"leg"),t(this.hipR,this.kneeR,.1,"leg"),t(this.kneeL,this.ankleL,.085,"leg"),t(this.kneeR,this.ankleR,.085,"leg")]}}function bo(){return{pelvisOffset:{x:0,y:0,z:0},pelvisRot:{pitch:0,yaw:0,roll:0},spine:{lean:.05,side:0,twist:0},head:{pitch:0,yaw:0,roll:0},armL:{flex:.06,abduct:.14,twist:.1,elbow:.22},armR:{flex:.06,abduct:.14,twist:.1,elbow:.22},legL:{flex:.04,abduct:.05,twist:.04,knee:.08,ankle:.02},legR:{flex:.04,abduct:.05,twist:.04,knee:.08,ankle:.02}}}function tb({keeper:n,player:e}){const t=Et.useRef(null),i=Et.useRef(null);return Et.useEffect(()=>{const r=t.current;if(!r)return;const s=new Q_({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.toneMapping=Jc,s.toneMappingExposure=1.1,r.innerHTML="",r.appendChild(s.domElement);const a=new b_,o=new ni(35,1,.2,30);o.position.set(0,1.2,4.45),o.lookAt(0,1.07,0);const l=new z_("#dbeafe","#0f291e",.9);a.add(l);const c=new eo("#fffaf0",2.1);c.position.set(2.8,4.8,3.6),c.castShadow=!0,a.add(c);const h=new eo("#38bdf8",.95);h.position.set(-3.2,3.2,-2.8),a.add(h);const f=new q(new ct(1.38,1.48,.08,48),new Ee({color:"#14532d",roughness:.8}));f.position.set(0,-.04,0),f.receiveShadow=!0,a.add(f);const d=new q(new eu(1.32,1.37,48),new Ri({color:"#10b981",side:Dn,transparent:!0,opacity:.65}));d.rotation.x=-Math.PI/2,d.position.y=.002,a.add(d);const m=new nt,v=new nt;a.add(m),a.add(v),i.current={scene:a,keeperSlot:m,playerSlot:v,keeperRig:null,playerRig:null};const _=()=>{const y=r.getBoundingClientRect(),S=Math.max(220,y.width||320),E=Math.max(240,y.height||300);o.aspect=S/E,o.updateProjectionMatrix(),s.setSize(S,E,!1)};_(),window.addEventListener("resize",_);let p=0;const u=performance.now(),g=y=>{const S=(y-u)/1e3,E=i.current;if(E){const w=!!(E.keeperRig&&E.playerRig);if(E.keeperRig){E.keeperSlot.position.set(w?-.46:0,0,w?-.08:0),E.keeperSlot.rotation.y=(w?.24:0)+Math.sin(S*.75)*.22;const x=bo(),M=Math.sin(S*2.2)*.01;x.pelvisOffset.y=-.05+M,x.spine.lean=.14,x.legL={flex:.14,abduct:.16,twist:.06,knee:.28,ankle:.12},x.legR={flex:.14,abduct:.16,twist:.06,knee:.28,ankle:.12},x.armL={flex:.42+M,abduct:.34,twist:-.15,elbow:.88},x.armR={flex:.42+M,abduct:.34,twist:-.15,elbow:.88},E.keeperRig.applyPose(x)}if(E.playerRig){E.playerSlot.position.set(w?.46:0,0,w?.08:0),E.playerSlot.rotation.y=(w?-.26:0)+Math.sin(S*.75+1.1)*.22;const x=bo(),M=Math.sin(S*2+.8)*.008;x.pelvisOffset.y=-.02+M,x.spine.lean=.06,x.legL={flex:.06,abduct:.09,twist:.05,knee:.12,ankle:.04},x.legR={flex:-.04,abduct:.11,twist:.05,knee:.14,ankle:.04},x.armL={flex:.1,abduct:.11,twist:.08,elbow:.28},x.armR={flex:.14,abduct:.12,twist:.08,elbow:.34},E.playerRig.applyPose(x)}}s.render(a,o),p=requestAnimationFrame(g)};return p=requestAnimationFrame(g),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",_),i.current=null,s.dispose()}},[]),Et.useEffect(()=>{const r=i.current;if(r)if(r.keeperSlot.clear(),n){const s=new to(n.appearance,n.kit,n.number,!0);r.keeperSlot.add(s.root),r.keeperRig=s}else r.keeperRig=null},[n]),Et.useEffect(()=>{const r=i.current;if(r)if(r.playerSlot.clear(),e){const s=new to(e.appearance,e.kit,e.number,!1);r.playerSlot.add(s.root),r.playerRig=s}else r.playerRig=null},[e]),O.jsx("div",{ref:t,className:"stage-3d-canvas",id:"locker-stage-3d"})}const Yr=["placed","power","panenka","stutter"],no={placed:{id:"placed",keyNum:"1",name:"推射死角",tag:"高难精准",difficultyStars:"★★★☆",perfectGoalPct:90,perfectHalfWidth:.064,goodHalfWidth:.19,arrowsEnabled:!0,shuttleDesc:"穿梭较快 · 窄完美区",ruleDesc:"方向键瞄准死角有效 · 完美点进球率 90%",accentColor:"#38bdf8"},power:{id:"power",keyNum:"2",name:"大力爆射",tag:"相对简单",difficultyStars:"★☆☆☆",perfectGoalPct:80,perfectHalfWidth:.115,goodHalfWidth:.29,arrowsEnabled:!0,shuttleDesc:"穿梭平稳 · 宽完美区",ruleDesc:"方向键有效 · 完美点进球率 80%（门将仍有几率扑出）",accentColor:"#10b981"},panenka:{id:"panenka",keyNum:"3",name:"勺子点球",tag:"最高难度",difficultyStars:"★★★★",perfectGoalPct:95,perfectHalfWidth:.042,goodHalfWidth:.135,arrowsEnabled:!1,shuttleDesc:"极速穿梭 · 极窄完美点",ruleDesc:"方向键无效（固定踢向中路）· 完美点进球率 95%",accentColor:"#f59e0b"},stutter:{id:"stutter",keyNum:"4",name:"节奏变化（小跳步）",tag:"诡谲变奏",difficultyStars:"★★☆☆",perfectGoalPct:90,perfectHalfWidth:.08,goodHalfWidth:.22,arrowsEnabled:!0,shuttleDesc:"小球在条内无规则急停乱晃",ruleDesc:"方向键有效 · 小跳步骗重心 · 完美点进球率 90%",accentColor:"#a855f7"}},jl={easy:{read:.16,accSpread:1.42,reflexScale:.84,label:"业余联赛",desc:"电脑门将反应较慢，射手偶尔失准"},normal:{read:.32,accSpread:1,reflexScale:.96,label:"职业赛场",desc:"均衡真实的点球博弈与门将扑救"},hard:{read:.5,accSpread:.68,reflexScale:1.08,label:"世界巅峰",desc:"顶级门将精准预判，射手刁钻致命"}},Gi=[{id:"k1",name:"腊鸭",nick:"出球门神",country:"西班牙",reflex:89,reach:82,mind:86,number:22,avatar:"/keepers/laya.png",kit:{primary:"#facc15",secondary:"#eab308",sleeveColor:"#facc15",trim:"#111827",shorts:"#facc15",socks:"#facc15",numberColor:"#111827",gloveBackColor:"#dc2626",gloveLatex:"#ffffff",gloveStrapColor:"#ffffff",chestMotif:"adidas_stripes"},appearance:{height:1.83,build:1.02,skin:"#dfa982",hair:"#1a1310",hairStyle:"textured",facialHair:"beard",bootColor:"#f8fafc",keeperPersona:"laya"}},{id:"k2",name:"奥这这",nick:"整活表情帝",country:"喀麦隆",reflex:88,reach:86,mind:76,number:24,avatar:"/keepers/aozhezhe.png",kit:{primary:"#74c918",secondary:"#4d910c",sleeveColor:"#facc15",trim:"#111827",shorts:"#65a30d",socks:"#a3e635",numberColor:"#111827",gloveBackColor:"#0ea5e9",gloveLatex:"#f8fafc",gloveStrapColor:"#0284c7",chestMotif:"team_crown"},appearance:{height:1.9,build:1.05,skin:"#5c3522",hair:"#120e0c",hairStyle:"curly",facialHair:"goatee",bootColor:"#f97316",keeperPersona:"aozhezhe"}},{id:"k3",name:"雷克森",nick:"雷神之壁",country:"巴西",reflex:91,reach:94,mind:90,number:1,avatar:"/keepers/leikesen.png",kit:{primary:"#1e293b",secondary:"#0f172a",sleeveColor:"#1e293b",trim:"#2dd4bf",shorts:"#0f172a",socks:"#111827",numberColor:"#5eead4",gloveBackColor:"#0f172a",gloveLatex:"#38bdf8",gloveStrapColor:"#0f172a",chestMotif:"lightning"},appearance:{height:1.93,build:1.1,skin:"#eab996",hair:"#c28230",hairStyle:"swept",facialHair:"beard",bootColor:"#18181b",keeperPersona:"leikesen"}},{id:"k4",name:"驼赫亚",nick:"神兽羊驼",country:"西班牙",reflex:96,reach:90,mind:81,number:1,avatar:"/keepers/tuoheya.png",kit:{primary:"#facc15",secondary:"#ca8a04",sleeveColor:"#facc15",trim:"#78350f",shorts:"#eab308",socks:"#facc15",numberColor:"#451a03",gloveBackColor:"#4a3222",gloveLatex:"#5c3f2c",gloveStrapColor:"#362216",chestMotif:"plain"},appearance:{height:1.92,build:.96,skin:"#e8cfa6",hair:"#dec08e",hairStyle:"curly",facialHair:"goatee",bootColor:"#4a3222",keeperPersona:"tuoheya"}},{id:"k5",name:"丁内斯",nick:"点球心魔",country:"阿根廷",reflex:89,reach:92,mind:97,number:23,avatar:"/keepers/dingneisi.png",kit:{primary:"#f97316",secondary:"#c2410c",sleeveColor:"#f97316",trim:"#111827",shorts:"#ea580c",socks:"#1f2937",numberColor:"#ffffff",gloveBackColor:"#fef3c7",gloveLatex:"#fffbeb",gloveStrapColor:"#111827",chestMotif:"v_collar"},appearance:{height:1.95,build:1.05,skin:"#ebbda0",hair:"#54341e",hairStyle:"swept",facialHair:"none",bootColor:"#f59e0b",keeperPersona:"dingneisi"}}],Hi=[{id:"p1",name:"魔人哈",nick:"冥想魔人",pos:"前锋",country:"挪威",power:97,accuracy:89,composure:92,foot:"L",number:9,runupStyle:"classic",avatar:"/players/morenha.png",kit:{primary:"#60a5fa",secondary:"#3b82f6",sleeveColor:"#60a5fa",trim:"#e0f2fe",shorts:"#60a5fa",socks:"#60a5fa",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.95,build:1.12,skin:"#f3bfa4",hair:"#eab308",hairStyle:"swept",facialHair:"beard",bootColor:"#60a5fa",playerPersona:"morenha"}},{id:"p2",name:"帕不怕冷",nick:"冷面冰人",pos:"中场",country:"英格兰",power:84,accuracy:95,composure:98,foot:"L",number:20,runupStyle:"curved",avatar:"/players/pabupaleng.png",kit:{primary:"#2563eb",secondary:"#1d4ed8",sleeveColor:"#2563eb",trim:"#bae6fd",shorts:"#1d4ed8",socks:"#2563eb",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.89,build:.92,skin:"#f2c6af",hair:"#e5b842",hairStyle:"textured",facialHair:"none",bootColor:"#f8fafc",playerPersona:"pabupaleng"}},{id:"p3",name:"萨小椒",nick:"爆辣边锋",pos:"边锋",country:"英格兰",power:85,accuracy:92,composure:91,foot:"L",number:7,runupStyle:"curved",avatar:"/players/saxiaojiao.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#f8fafc",trim:"#ffffff",shorts:"#f8fafc",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"chili_crest"},appearance:{height:1.78,build:.98,skin:"#613a24",hair:"#16110e",hairStyle:"curly",facialHair:"goatee",bootColor:"#dc2626",playerPersona:"saxiaojiao"}},{id:"p4",name:"厄大帅",nick:"球场摄影师",pos:"中场",country:"挪威",power:82,accuracy:94,composure:90,foot:"L",number:8,runupStyle:"stutter",avatar:"/players/edashuai.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#f8fafc",trim:"#ffffff",shorts:"#f8fafc",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"arsenal_clean"},appearance:{height:1.78,build:.95,skin:"#f1c2a5",hair:"#d4a24c",hairStyle:"swept",facialHair:"goatee",bootColor:"#1f2937",playerPersona:"edashuai"}},{id:"p5",name:"姆老汉",nick:"浓髯重炮",pos:"边锋",country:"喀麦隆",power:89,accuracy:89,composure:91,foot:"L",number:19,runupStyle:"stutter",avatar:"/players/mulaohan.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#ffffff",shorts:"#dc2626",socks:"#f8fafc",numberColor:"#111827",chestMotif:"red_white_stripes"},appearance:{height:1.73,build:1.07,skin:"#7a4b30",hair:"#14100e",hairStyle:"buzz",facialHair:"beard",bootColor:"#18181b",playerPersona:"mulaohan"}},{id:"p6",name:"维小薯",nick:"天才薯片",pos:"中场",country:"德国",power:81,accuracy:93,composure:90,foot:"R",number:10,runupStyle:"curved",avatar:"/players/weixiaoshu.png",kit:{primary:"#dc2626",secondary:"#991b1b",sleeveColor:"#18181b",trim:"#18181b",shorts:"#18181b",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.77,build:.93,skin:"#f3c5ab",hair:"#8c552f",hairStyle:"textured",facialHair:"none",bootColor:"#18181b",playerPersona:"weixiaoshu"}},{id:"p7",name:"谢花哨",nick:"花式魔术师",pos:"中场",country:"法国",power:84,accuracy:91,composure:86,foot:"R",number:18,runupStyle:"stutter",avatar:"/players/xiehuashao.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#38bdf8",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.77,build:1.03,skin:"#e3af8c",hair:"#3d2516",hairStyle:"swept",facialHair:"beard",bootColor:"#18181b",playerPersona:"xiehuashao"}},{id:"p8",name:"加倒钩",nick:"凌空金童",pos:"边锋",country:"阿根廷",power:89,accuracy:86,composure:85,foot:"R",number:17,runupStyle:"classic",avatar:"/players/jiadaogou.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.8,build:.95,skin:"#e4b18f",hair:"#f2e6c2",hairStyle:"textured",facialHair:"none",bootColor:"#18181b",playerPersona:"jiadaogou"}},{id:"p9",name:"穆闪电",nick:"超音速闪电",pos:"边锋",country:"乌克兰",power:92,accuracy:77,composure:78,foot:"R",number:10,runupStyle:"classic",avatar:"/players/mushandian.png",kit:{primary:"#2563eb",secondary:"#1d4ed8",sleeveColor:"#2563eb",trim:"#facc15",shorts:"#1d4ed8",socks:"#2563eb",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.75,build:.95,skin:"#f2c4aa",hair:"#dfad4e",hairStyle:"swept",facialHair:"none",bootColor:"#18181b",playerPersona:"mushandian"}},{id:"p10",name:"马航母",nick:"重装航母",pos:"后卫",country:"英格兰",power:95,accuracy:84,composure:88,foot:"R",number:5,runupStyle:"classic",avatar:"/players/mahangmu.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.94,build:1.11,skin:"#eec1a4",hair:"#2b1f18",hairStyle:"buzz",facialHair:"none",bootColor:"#18181b",playerPersona:"mahangmu"}},{id:"p11",name:"马屠夫",nick:"铁血硬汉",pos:"后卫",country:"阿根廷",power:90,accuracy:82,composure:92,foot:"L",number:6,runupStyle:"classic",avatar:"/players/matufu.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#f8fafc",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.75,build:1.05,skin:"#dfa884",hair:"#2a1c14",hairStyle:"textured",facialHair:"stubble",bootColor:"#18181b",playerPersona:"matufu"}},{id:"p12",name:"里咕咕",nick:"白鸽舞王",pos:"前锋",country:"巴西",power:87,accuracy:84,composure:83,foot:"R",number:9,runupStyle:"stutter",avatar:"/players/ligugu.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#cbd5e1",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.84,build:.99,skin:"#e5b493",hair:"#f1f5f9",hairStyle:"swept",facialHair:"none",bootColor:"#4a3222",playerPersona:"ligugu"}},{id:"p13",name:"加铁卫",nick:"铜墙大白牙",pos:"后卫",country:"巴西",power:93,accuracy:79,composure:86,foot:"L",number:6,runupStyle:"classic",avatar:"/players/jatiewei.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#dc2626",trim:"#dc2626",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#dc2626",chestMotif:"brick_wall"},appearance:{height:1.9,build:1.09,skin:"#5a3420",hair:"#120d0a",hairStyle:"buzz",facialHair:"beard",bootColor:"#18181b",playerPersona:"jatiewei"}},{id:"p14",name:"安陀螺",nick:"圆规旋风",pos:"边锋",country:"巴西",power:83,accuracy:85,composure:84,foot:"L",number:21,runupStyle:"curved",avatar:"/players/antuoluo.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#ffffff",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.74,build:.95,skin:"#e6b492",hair:"#2d1d13",hairStyle:"swept",facialHair:"beard",bootColor:"#f8fafc",playerPersona:"antuoluo"}},{id:"p15",name:"努角兽",nick:"牛角猛兽",pos:"前锋",country:"乌拉圭",power:96,accuracy:75,composure:80,foot:"R",number:9,runupStyle:"classic",avatar:"/players/nujiaoshou.png",kit:{primary:"#dc2626",secondary:"#b91c1c",sleeveColor:"#dc2626",trim:"#991b1b",shorts:"#dc2626",socks:"#dc2626",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.87,build:1.05,skin:"#dfa278",hair:"#24160e",hairStyle:"swept",facialHair:"goatee",bootColor:"#f8fafc",playerPersona:"nujiaoshou"}},{id:"p16",name:"杰克思考",nick:"思考人生",pos:"前锋",country:"塞内加尔",power:85,accuracy:78,composure:79,foot:"R",number:15,runupStyle:"stutter",avatar:"/players/jiekexikao.png",kit:{primary:"#1d4ed8",secondary:"#1e40af",sleeveColor:"#1d4ed8",trim:"#60a5fa",shorts:"#1d4ed8",socks:"#1d4ed8",numberColor:"#ffffff",chestMotif:"v_collar"},appearance:{height:1.87,build:.98,skin:"#5e3722",hair:"#17120f",hairStyle:"curly",facialHair:"goatee",bootColor:"#18181b",playerPersona:"jiekexikao"}},{id:"p17",name:"斯翘臀",nick:"快乐小快灵",pos:"边锋",country:"英格兰",power:80,accuracy:83,composure:81,foot:"R",number:7,runupStyle:"curved",avatar:"/players/siqiaotun.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#1d4ed8",shorts:"#1d4ed8",socks:"#f8fafc",numberColor:"#1d4ed8",chestMotif:"white_blue_trim"},appearance:{height:1.72,build:.98,skin:"#663c25",hair:"#16110e",hairStyle:"buzz",facialHair:"goatee",bootColor:"#18181b",playerPersona:"siqiaotun"}},{id:"p18",name:"维侦察",nick:"越位侦察机",pos:"前锋",country:"德国",power:86,accuracy:76,composure:78,foot:"R",number:16,runupStyle:"classic",avatar:"/players/weizhencha.png",kit:{primary:"#f8fafc",secondary:"#e2e8f0",sleeveColor:"#f8fafc",trim:"#cbd5e1",shorts:"#f8fafc",socks:"#f8fafc",numberColor:"#0f172a",chestMotif:"plain"},appearance:{height:1.8,build:.95,skin:"#f3bfa4",hair:"#dfad4e",hairStyle:"swept",facialHair:"none",bootColor:"#18181b",playerPersona:"weizhencha"}}];function Rl(n){return Math.round((n.power+n.accuracy+n.composure)/3)}function Pl(n){return Math.round((n.reflex+n.reach+n.mind)/3)}function Cl(n){const e=n.slice();for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[i],e[i]=r}return e}function Vn(n,e,t){return Math.max(e,Math.min(t,n))}function Q(n,e,t){return n+(e-n)*t}function Zt(n,e,t){const i=Vn((t-n)/Math.max(1e-4,e-n),0,1);return i*i*(3-2*i)}function nb(n){const e=bo(),t=n.shooter.foot==="R"?1:-1,i=n.shooter.runupStyle==="curved"?1.24:1,r=-1.42*t*i,s=14.65,a=-.82*t*i,o=12.75,l=-.23*t,c=11.05,h=N=>{const X=1-N,G=X*X*r+2*X*N*a+N*N*l,F=X*X*s+2*X*N*o+N*N*c,k=2*X*(a-r)+2*N*(l-a),W=2*X*(o-s)+2*N*(c-o),Z=Math.atan2(k,W);return{x:G,z:F,yaw:Z}},f=(N,X,G,F)=>{t>0?(e.legR=N,e.legL=X,e.armR=G,e.armL=F):(e.legL=N,e.legR=X,e.armL=G,e.armR=F)};if(n.mode==="idle"||n.mode==="charging"){const N=h(0),X=Math.sin(n.time*2.1),G=Math.sin(n.time*1.15),F=n.mode==="charging"?Zt(0,.35,n.chargeRatio):0;e.pelvisOffset.y=-.045-F*.045+X*.006,e.pelvisOffset.x=G*.018*(1-F),e.pelvisRot.yaw=-t*.08,e.spine.lean=.14+F*.12+X*.012,e.spine.side=G*.03*(1-F);const k=Math.sin(n.time*.85);return e.head.pitch=Q(k>.2?-.02:.22,.16,F),e.head.yaw=t*.08*(1-F),f({flex:-.1+F*.06,abduct:.09,twist:.05,knee:.2+F*.12,ankle:.06},{flex:.16+F*.08,abduct:.09,twist:.04,knee:.24+F*.14,ankle:.1},{flex:.12+X*.03,abduct:.16+F*.08,twist:.12,elbow:.38+F*.22},{flex:.18-X*.03,abduct:.18+F*.1,twist:.12,elbow:.44+F*.24}),{pos:new z(N.x,0,N.z+F*.08),yaw:N.yaw,pose:e,stepIndex:0}}if(n.mode==="runup"){const N=Vn(n.runupProgress,0,1),X=n.shotStyle==="stutter"||n.shooter.runupStyle==="stutter",G=n.shotStyle==="stutter";let F;if(G){const oe=Zt(0,.94,N),re=Math.exp(-Math.pow((N-.67)/.12,2))*.14;F=Vn(oe-re*(1-Zt(.78,.94,N)),0,1)}else if(X){const oe=Zt(0,.92,N),re=Math.exp(-Math.pow((N-.54)/.11,2))*.11;F=Vn(oe-re*(1-Zt(.72,.92,N)),0,1)}else F=Math.pow(Vn(N/.91,0,1),n.shotStyle==="power"?1.08:1.18);const k=h(F),W=G&&N>.54&&N<.84?Math.sin((N-.54)/.3*Math.PI):0,Z=W*.165,ae=Zt(G?.78:.74,.91,N),we=Zt(.91,1,N),J=F*4*Math.PI,V=Math.floor(J/Math.PI),se=Math.sin(J),le=Math.cos(J),ce=Q(-le*.62+.08,-.22,W),Ie=Q(.22+Math.max(0,se)*1.05+Math.max(0,-le)*.25,1.15,W),et=Q(le*.62+.08,.42,W),Re=Q(.22+Math.max(0,-se)*1.05+Math.max(0,le)*.25,.72,W),Ye=n.shotStyle==="power"?-1.04:G?-.74:-.88,tt=n.shotStyle==="power"?2.08:G?1.78:1.96,Ve=.52,Je=n.shotStyle==="power"?.58:.52,ot=n.shotStyle==="panenka"?.36:n.shotStyle==="power"?.72:.62,on=n.shotStyle==="panenka"?.38:.12,Mt=n.shotStyle==="placed"||G?.58:.05,jn=n.shotStyle==="panenka"?.22:n.shotStyle==="placed"||G?.06:-.58,Ot=Q(Q(ce,Ye,ae),ot,we),An=Q(Q(Ie,tt,ae),on,we),Rn=Q(Q(et,Ve,ae),.16,we),Pn=Q(Q(Re,Je,ae),.32,we),H=-.055+Math.abs(se)*.042*(1-W);e.pelvisOffset.y=Q(Q(H,-.125,ae),-.035,we);const Cn=n.shotStyle==="power"?.32:.26,mt=Q(0,t*Cn,ae)*(1-we*.18);e.pelvisRot.roll=mt,e.pelvisRot.yaw=Q(le*.12*t*(1-W),Q(-t*.24,t*.38,we),ae);const _t=n.overcharged?-.08:n.shotStyle==="panenka"?.15:n.shotStyle==="power"?.3:.22;e.spine.lean=Q(Q(.24-W*.12,.18,ae),_t,we),e.spine.side=mt*.55,e.spine.twist=Q(-le*.18*t*(1-W),Q(t*.28,-t*.34,we),ae);const ye=W>.15?.08:.18;e.head.pitch=Q(ye,.52,ae),e.head.yaw=-e.spine.twist*.45;const Ut=Q(Q(-et*.75,.52,ae),.18,we),ke=Q(Q(.22+W*.55,1.32,ae),.92,we),ze=Q(Q(1.28-W*.3,.46,ae),.68,we),R=Q(Q(-ce*.75,-.36,ae),-.48,we),T=Q(Q(.22+W*.48,.38,ae),.52,we),Y=Q(Q(1.28-W*.25,1.05,ae),.85,we);return f({flex:Ot,abduct:Q(.06,n.shotStyle==="placed"||G?.17:.08,ae),twist:Q(.04,Mt,we),knee:An,ankle:Q(.05,jn,we)},{flex:Rn,abduct:Q(.07,.18,ae),twist:.06,knee:Pn,ankle:Q(.08,.22,ae)},{flex:R,abduct:T,twist:.15,elbow:Y},{flex:Ut,abduct:ke,twist:-.2,elbow:ze}),{pos:new z(k.x,Z,k.z),yaw:Q(k.yaw,Math.PI-t*.14,ae),pose:e,stepIndex:V}}const d=n.postImpactTime,m=l,v=c,_=n.shotStyle==="panenka"?.34:n.shotStyle==="power"?.94:.72,p=(1-Math.exp(-d*3.4))*_,u=(1-Math.exp(-d*3))*t*.18,g=Zt(0,.18,d)*(1-Zt(.22,.58,d)),y=Zt(.26,.75,d),S=n.outcome?Zt(.55,1.05,d):0,E=n.shotStyle==="panenka"?.025:n.shotStyle==="power"?.12:.085,w=d<.28?Math.sin(d/.28*Math.PI)*E:0;e.pelvisOffset.y=w-.05*(1-S),e.pelvisRot.roll=t*.22*(1-y),e.pelvisRot.yaw=t*.34*(1-y*.75),e.spine.lean=Q(n.overcharged?-.06:.22,.12,y),e.spine.side=t*.12*(1-y),e.spine.twist=-t*.3*(1-y*.7),e.head.pitch=Q(.48,-.05,Zt(.05,.36,d)),e.head.yaw=0;const x=n.shotStyle==="panenka"?.58:n.shotStyle==="power"?1.28:1.08,M=Q(.62+g*(x-.62),.18,y),C=Q(.18+g*.38,.24,y),A=Q(.06-g*(n.shotStyle==="placed"?.36:.22),.08,y),L=Q(.14-g*.34,-.08,y),D=Q(.28,.22,y);let U={flex:Q(-.42,.24,y),abduct:Q(.48,.22,y),twist:.1,elbow:Q(.85,.55,y)},P={flex:Q(.24,.22,y),abduct:Q(.88,.22,y),twist:-.1,elbow:Q(.68,.55,y)};if(S>0&&n.outcome)if(n.outcome==="goal"){const N=Math.sin(d*9.5)*.12;e.pelvisOffset.y+=Math.max(0,Math.sin(d*7.5))*.045*S,e.spine.lean=Q(e.spine.lean,-.14,S),e.head.pitch=Q(e.head.pitch,-.22,S),U={flex:Q(U.flex,.35+N,S),abduct:Q(U.abduct,2.55,S),twist:0,elbow:Q(U.elbow,.45-N,S)},P={flex:Q(P.flex,.35-N,S),abduct:Q(P.abduct,2.55,S),twist:0,elbow:Q(P.elbow,.45+N,S)}}else e.pelvisOffset.y-=.06*S,e.spine.lean=Q(e.spine.lean,.42,S),e.head.pitch=Q(e.head.pitch,.38,S),U={flex:Q(U.flex,1.95,S),abduct:Q(U.abduct,.72,S),twist:.4,elbow:Q(U.elbow,2.18,S)},P={flex:Q(P.flex,1.95,S),abduct:Q(P.abduct,.72,S),twist:.4,elbow:Q(P.elbow,2.18,S)};return f({flex:M,abduct:A,twist:.06,knee:C,ankle:Q(-.35,.05,y)},{flex:L,abduct:.1,twist:.04,knee:D+S*(n.outcome&&n.outcome!=="goal"?.18:0),ankle:.08},U,P),{pos:new z(m+u,0,v-p),yaw:Math.PI-t*.1*(1-y),pose:e,stepIndex:5}}function ib(n){const e=bo(),t=n.keeper.appearance.height/1.84;if(n.mode==="ready"){const h=Math.abs(Math.sin(n.time*4.6))*.026,f=Vn(Math.abs(n.shuffleSpeed)/2.2,0,1),d=n.shufflePhase,m=Math.max(0,Math.sin(d))*f,v=Math.max(0,-Math.sin(d))*f,_=Math.abs(n.preDiveX)>0||Math.abs(n.preDiveY)>0?1:0;e.pelvisOffset.y=-.155+h*(1-_*.5)-_*.055-f*.02,e.pelvisOffset.z=_*.08,e.pelvisRot.roll=n.preDiveX*.08-Vn(n.shuffleSpeed*.035,-.09,.09),e.spine.lean=.38+_*.08,e.spine.side=n.preDiveX*.1,e.spine.twist=-n.preDiveX*.08,e.head.pitch=-.22,e.head.yaw=Vn(-n.xPos*.08,-.25,.25),e.legL={flex:.34+m*.24+_*.08,abduct:.26+m*.14+(n.preDiveX>0?.08:0),twist:.08,knee:.68+m*.28+_*.16,ankle:.28},e.legR={flex:.34+v*.24+_*.08,abduct:.26+v*.14+(n.preDiveX<0?.08:0),twist:.08,knee:.68+v*.28+_*.16,ankle:.28};const p=n.preDiveY>0?.22:n.preDiveY<0?-.16:0;return e.armL={flex:.62+p+Math.sin(n.time*4.6)*.03,abduct:.44+(n.preDiveX>0?.14:0),twist:-.18,elbow:1.08-_*.12},e.armR={flex:.62+p+Math.sin(n.time*4.6)*.03,abduct:.44+(n.preDiveX<0?.14:0),twist:-.18,elbow:1.08-_*.12},{pos:new z(n.xPos,0,.14+_*.06),yaw:0,pose:e,justLanded:!1}}const i=Math.max(0,n.diveTime),r=n.diveDirX,s=n.diveDirY,a=(.9+(n.keeper.reach-75)*.006)*(n.explosiveBoost?1.07:1),o=9.81;if(r!==0){const h=r,f=r*(s>0?4.45:s===0?4.72:4.35)*a,d=(s>0?3.25:s===0?1.85:.35)*a,m=.79*t,v=.23*t,_=d*d-2*o*(v-m),p=(d+Math.sqrt(Math.max(.01,_)))/o;let u,g,y=!1;if(i<=p)u=m+d*i-.5*o*i*i,g=n.diveStartX+f*i;else{const G=i-p;y=G<.035,u=v;const F=n.diveStartX+f*p,k=4.2;g=F+f*.52*(1-Math.exp(-k*G))/k}g=Vn(g,-3.55,3.55);const S=.14+(1-Math.exp(-i*5.5))*.38,E=Zt(.03,Math.min(.28,p*.65),i),w=Zt(p-.04,p+.24,i),x=n.outcome?Zt(p+.28,p+.72,i):0,M=s>0?1.34:s===0?1.47:1.54,C=h*Q(Q(.12,M,E),1.44,w);e.pelvisOffset.y=u/t-.955,e.pelvisRot.roll=C,e.pelvisRot.yaw=-h*Q(.18*E,.28,w),e.pelvisRot.pitch=Q(.06,.18,w),e.spine.lean=Q(.28,Q(-.12,.24,w),E),e.spine.side=h*Q(.18*E,-.14,w),e.spine.twist=-h*.14*E,e.head.yaw=h*.22*(1-w),e.head.roll=-h*.18*(1-w*.5),e.head.pitch=-.18*(1-w);const A=Vn((n.ballPos.y-u)*.25,-.25,.32),L=Vn((s>0?2.86:s===0?2.74:2.58)+A,2.35,3.02),D=Vn((s>0?2.72:s===0?2.52:2.22)+A,2.05,2.95),U={flex:Q(Q(.6,.34,E),.75,w),abduct:Q(Q(.5,L,E),1.45,w),twist:.1,elbow:Q(Q(.95,.06,E),1.18,w)},P={flex:Q(Q(.6,.42,E),.95,w),abduct:Q(Q(.5,D,E),.75,w),twist:-.15,elbow:Q(Q(.95,.14,E),1.35,w)},N={flex:Q(.25,Q(-.08,.32,w),E),abduct:Q(.24,.12,E),twist:.05,knee:Q(.55,Q(.16,.72,w),E),ankle:Q(.2,-.35*(1-w),E)},X={flex:Q(.32,Q(.52,.68,w),E),abduct:Q(.24,.28,E),twist:.08,knee:Q(.65,Q(.92,1.18,w),E),ankle:.12};if(r>0?(e.armL=U,e.armR=P,e.legL=N,e.legR=X):(e.armR=U,e.armL=P,e.legR=N,e.legL=X),x>0&&(n.keeperSaved||n.outcome&&n.outcome!=="goal")){const G=Math.sin(i*11)*.16,F=r>0?e.armR:e.armL;F.flex=Q(F.flex,1.35+G,x),F.abduct=Q(F.abduct,1.25,x),F.elbow=Q(F.elbow,1.35-G,x)}return{pos:new z(g,0,S),yaw:0,pose:e,justLanded:y}}if(s>0){const h=3.45*a,f=2*h/o,d=i<f?h*i-.5*o*i*i:0,m=i<f?Math.sin(i/f*Math.PI):0,v=i>=f?Math.exp(-(i-f)*6)*.22:0;return e.pelvisOffset.y=-.12+d/t-v,e.spine.lean=Q(.28,-.1,m)+v*.8,e.head.pitch=-.32*m,e.armL={flex:Q(.55,.26,m),abduct:Q(.42,2.88,m),twist:0,elbow:Q(1,.08,m)},e.armR={flex:Q(.55,.26,m),abduct:Q(.42,2.88,m),twist:0,elbow:Q(1,.08,m)},e.legL={flex:.24+m*.22+v*.8,abduct:.18,twist:.05,knee:.45+m*.35+v*1.4,ankle:Q(.2,-.3,m)},e.legR={flex:.24+m*.12+v*.8,abduct:.18,twist:.05,knee:.45+m*.55+v*1.4,ankle:Q(.2,-.3,m)},{pos:new z(n.diveStartX,0,.18+Math.min(.24,i*.4)),yaw:0,pose:e,justLanded:Math.abs(i-f)<.025}}if(s<0){const h=Zt(0,.24,i);return e.pelvisOffset.y=Q(-.155,-.51,h),e.spine.lean=Q(.38,.2,h),e.head.pitch=-.12,e.legL={flex:Q(.34,.22,h),abduct:Q(.26,.32,h),twist:.15,knee:Q(.68,1.68,h),ankle:.1},e.legR={flex:Q(.34,.42,h),abduct:Q(.26,.86,h),twist:.22,knee:Q(.68,.38,h),ankle:.25},e.armL={flex:Q(.62,.48,h),abduct:Q(.44,.92,h),twist:-.2,elbow:Q(1.08,.32,h)},e.armR={flex:Q(.62,.48,h),abduct:Q(.44,.92,h),twist:-.2,elbow:Q(1.08,.32,h)},{pos:new z(n.diveStartX,0,.14+h*.38),yaw:0,pose:e,justLanded:Math.abs(i-.22)<.025}}const l=Zt(0,.18,i),c=Vn(.75+(n.ballPos.y-1.15)*.85,.35,2.25);if(e.pelvisOffset.y=-.14+l*.03,e.spine.lean=.32-l*.08,e.armL={flex:Q(.62,c,l),abduct:Q(.44,.32,l),twist:-.25,elbow:Q(1.08,.58,l)},e.armR={flex:Q(.62,c,l),abduct:Q(.44,.32,l),twist:-.25,elbow:Q(1.08,.58,l)},e.legL={flex:.3,abduct:.24,twist:.06,knee:.58,ankle:.24},e.legR={flex:.3,abduct:.24,twist:.06,knee:.58,ankle:.24},n.outcome&&n.outcome!=="goal"&&i>.55){const h=Zt(.55,.85,i),f=Math.sin(i*10)*.14;e.spine.lean=Q(e.spine.lean,-.12,h),e.armL={flex:1.55+f,abduct:.72,twist:0,elbow:1.35},e.armR={flex:1.55-f,abduct:.72,twist:0,elbow:1.35}}return{pos:new z(n.diveStartX,0,.14+l*.2),yaw:0,pose:e,justLanded:!1}}const Is=7.32,mn=Is/2,yt=2.44,Ei=.06,$r=.95,Kr=2.15,Tt=.11,Qn=11;function Yf(n){const e=Math.max(0,Math.min(1,n/yt));return-(Kr+($r-Kr)*e)}function Om(n,e,t,i){const r=t.x-e.x,s=t.y-e.y,a=t.z-e.z,o=r*r+s*s+a*a;if(o<1e-8)return i.copy(e);const l=Math.max(0,Math.min(1,((n.x-e.x)*r+(n.y-e.y)*s+(n.z-e.z)*a)/o));return i.set(e.x+r*l,e.y+s*l,e.z+a*l)}function hh(n,e,t){const i=(n+1)*(e+1),r=new Float32Array(i*3),s=new Float32Array(i*3),a=new Float32Array(i*3),o=new Uint8Array(i);for(let m=0;m<=e;m++){const v=m/e;for(let _=0;_<=n;_++){const p=_/n,u=m*(n+1)+_,[g,y,S,E]=t(p,v);r[u*3]=g,r[u*3+1]=y,r[u*3+2]=S,s[u*3]=g,s[u*3+1]=y,s[u*3+2]=S,o[u]=E?1:0}}const l=[];for(let m=0;m<=e;m++)for(let v=0;v<=n;v++){const _=m*(n+1)+v;v<n&&l.push(_,_+1),m<e&&l.push(_,_+n+1)}const c=new Uint16Array(l),h=new Float32Array(c.length*3),f=new Ft;f.setAttribute("position",new zn(h,3));const d={cols:n,rows:e,rest:r,pos:s,vel:a,pinned:o,lineGeo:f,linePositions:h,edgePairs:c};return $f(d),d}function $f(n){const{edgePairs:e,pos:t,linePositions:i,lineGeo:r}=n;for(let s=0;s<e.length;s++){const a=e[s];i[s*3]=t[a*3],i[s*3+1]=t[a*3+1],i[s*3+2]=t[a*3+2]}r.getAttribute("position").needsUpdate=!0}class rb{constructor(){this.group=new nt,this.panels=[],this.postSegments=[{a:new z(-mn,0,0),b:new z(-mn,yt,0),radius:Ei},{a:new z(mn,0,0),b:new z(mn,yt,0),radius:Ei},{a:new z(-mn,yt,0),b:new z(mn,yt,0),radius:Ei}];const e=new Ee({color:"#f8fafc",roughness:.24,metalness:.25}),t=new Ee({color:"#1e293b",roughness:.5,metalness:.55}),i=new ct(Ei,Ei,yt,20);for(const c of[-mn,mn]){const h=new q(i,e);h.position.set(c,yt/2,0),h.castShadow=!0,h.receiveShadow=!0,this.group.add(h);const f=new q(new Le(Ei,16,12),e);f.position.set(c,yt,0),f.castShadow=!0,this.group.add(f);const d=new q(new ct(.024,.024,$r,10),t);d.rotation.x=Math.PI/2,d.position.set(c,yt-.02,-$r/2),this.group.add(d);const m=Math.hypot(yt,Kr-$r),v=new q(new ct(.024,.024,m,10),t),_=Math.atan2(Kr-$r,yt);v.position.set(c,yt/2,-3.0999999999999996/2),v.rotation.x=_,this.group.add(v);const p=new q(new ct(.026,.026,Kr,10),t);p.rotation.x=Math.PI/2,p.position.set(c,.02,-Kr/2),this.group.add(p)}const r=new ct(Ei,Ei,Is,20);r.rotateZ(Math.PI/2);const s=new q(r,e);s.position.set(0,yt,0),s.castShadow=!0,s.receiveShadow=!0,this.group.add(s);const a=new q(new ct(.028,.028,Is,12),t);a.rotation.z=Math.PI/2,a.position.set(0,.02,-Kr),this.group.add(a);const o=new q(new ct(.016,.016,Is,10),t);o.rotation.z=Math.PI/2,o.position.set(0,yt-.02,-$r),this.group.add(o);const l=new D_({color:"#e2e8f0",transparent:!0,opacity:.44});this.panels.push(hh(44,16,(c,h)=>{const f=(c-.5)*Is,d=h*yt,m=Math.sin(c*Math.PI)*Math.sin(h*Math.PI)*-.08,v=Yf(d)+m;return[f,d,v,c===0||c===1||h===0||h===1]})),this.panels.push(hh(44,7,(c,h)=>{const f=(c-.5)*Is,d=-h*$r,m=Math.sin(c*Math.PI)*Math.sin(h*Math.PI)*-.05,v=yt+m;return[f,v,d,c===0||c===1||h===0||h===1]}));for(const c of[-1,1])this.panels.push(hh(14,16,(h,f)=>{const d=f*yt,m=Yf(d),v=h*m,_=Math.sin(h*Math.PI)*Math.sin(f*Math.PI)*-c*.04;return[c*mn+_,d,v,h===0||h===1||f===0||f===1]}));for(const c of this.panels)this.group.add(new BS(c.lineGeo,l))}resetNet(){for(const e of this.panels)e.pos.set(e.rest),e.vel.fill(0),$f(e)}applyBallImpulse(e,t,i=.72){const r=i*i;for(const s of this.panels){const a=s.pinned.length;for(let o=0;o<a;o++){if(s.pinned[o])continue;const l=s.pos[o*3]-e.x,c=s.pos[o*3+1]-e.y,h=s.pos[o*3+2]-e.z,f=l*l+c*c+h*h;if(f<r){const d=Math.pow(1-Math.sqrt(f)/i,1.5);s.vel[o*3]=s.vel[o*3]+t.x*d*.55,s.vel[o*3+1]=s.vel[o*3+1]+t.y*d*.55,s.vel[o*3+2]=s.vel[o*3+2]+t.z*d*.55}}}}step(e){const t=Math.min(.033,e),i=68,r=26,s=Math.exp(-5.4*t);for(const a of this.panels){const{cols:o,rows:l,pos:c,rest:h,vel:f,pinned:d}=a,m=o+1;let v=!1;for(let _=1;_<l;_++)for(let p=1;p<o;p++){const u=_*m+p;if(d[u])continue;const g=u*3,y=c[g],S=c[g+1],E=c[g+2];let w=(h[g]-y)*i,x=(h[g+1]-S)*i,M=(h[g+2]-E)*i;const C=u-1,A=u+1,L=u-m,D=u+m,U=(c[C*3]-h[C*3]+c[A*3]-h[A*3]+c[L*3]-h[L*3]+c[D*3]-h[D*3])*.25-(y-h[g]),P=(c[C*3+1]-h[C*3+1]+c[A*3+1]-h[A*3+1]+c[L*3+1]-h[L*3+1]+c[D*3+1]-h[D*3+1])*.25-(S-h[g+1]),N=(c[C*3+2]-h[C*3+2]+c[A*3+2]-h[A*3+2]+c[L*3+2]-h[L*3+2]+c[D*3+2]-h[D*3+2])*.25-(E-h[g+2]);w+=U*r*4,x+=P*r*4,M+=N*r*4;const X=(f[g]+w*t)*s,G=(f[g+1]+x*t)*s,F=(f[g+2]+M*t)*s;f[g]=X,f[g+1]=G,f[g+2]=F,c[g]=y+X*t,c[g+1]=Math.max(.01,S+G*t),c[g+2]=E+F*t,Math.abs(X)+Math.abs(G)+Math.abs(F)>.002&&(v=!0)}v&&$f(a)}}}function sb(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const i=t.getContext("2d"),r=c=>(c+38)/76*1024,s=c=>(c+12)/64*1024;i.fillStyle="#1c6b36",i.fillRect(0,0,1024,1024);const a=5.5;for(let c=-12,h=0;c<52;c+=a,h++){const f=s(c),d=s(c+a);i.fillStyle=h%2===0?"rgba(150, 235, 130, 0.085)":"rgba(8, 35, 16, 0.085)",i.fillRect(0,f,1024,d-f)}for(let c=-38,h=0;c<38;c+=6.1,h++)h%2===0&&(i.fillStyle="rgba(255, 255, 255, 0.025)",i.fillRect(r(c),0,6.1/76*1024,1024));for(let c=0;c<24e3;c++){const h=Math.random()*1024,f=Math.random()*1024;i.fillStyle=Math.random()<.5?"rgba(10,32,14,0.13)":"rgba(180,250,150,0.08)",i.fillRect(h,f,1.5,2.2)}for(let c=0;c<85;c++){const h=(Math.random()-.5)*4.5,f=Math.random()*1.6-.2;i.fillStyle="rgba(68, 52, 32, 0.11)",i.beginPath(),i.ellipse(r(h),s(f),4+Math.random()*8,2+Math.random()*4,0,0,Math.PI*2),i.fill()}for(let c=0;c<45;c++){const h=(Math.random()-.5)*1.4,f=Qn+(Math.random()-.5)*1.4;i.fillStyle="rgba(68, 52, 32, 0.1)",i.beginPath(),i.ellipse(r(h),s(f),3+Math.random()*5,2+Math.random()*4,0,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(248, 250, 252, 0.9)",i.lineWidth=.13/76*1024,i.lineJoin="round",i.lineCap="round";const o=34;i.beginPath(),i.moveTo(r(-o),s(0)),i.lineTo(r(o),s(0)),i.moveTo(r(-o),s(0)),i.lineTo(r(-o),s(52)),i.moveTo(r(o),s(0)),i.lineTo(r(o),s(52)),i.stroke(),i.beginPath(),i.moveTo(r(-9.16),s(0)),i.lineTo(r(-9.16),s(5.5)),i.lineTo(r(9.16),s(5.5)),i.lineTo(r(9.16),s(0)),i.stroke(),i.beginPath(),i.moveTo(r(-20.16),s(0)),i.lineTo(r(-20.16),s(16.5)),i.lineTo(r(20.16),s(16.5)),i.lineTo(r(20.16),s(0)),i.stroke(),i.save(),i.beginPath(),i.rect(0,s(16.5),1024,1024-s(16.5)),i.clip(),i.beginPath(),i.ellipse(r(0),s(Qn),9.15/76*1024,9.15/64*1024,0,0,Math.PI*2),i.stroke(),i.restore(),i.fillStyle="rgba(255, 255, 255, 0.96)",i.beginPath(),i.ellipse(r(0),s(Qn),.14/76*1024,.14/64*1024,0,0,Math.PI*2),i.fill();const l=new ga(t);return l.colorSpace=Qt,l.anisotropy=8,l}function ab(){const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d");e.fillStyle="#f8fafc",e.fillRect(0,0,512,256),e.fillStyle="rgba(15, 23, 42, 0.04)";for(let s=0;s<256;s+=4)for(let a=s%8===0?0:2;a<512;a+=4)e.fillRect(a,s,1.5,1.5);const t=(s,a,o,l)=>{e.save(),e.translate(s,a),e.rotate(l),e.fillStyle="#0f172a",e.beginPath();for(let c=0;c<5;c++){const h=c*Math.PI*2/5-Math.PI/2,f=Math.cos(h)*o,d=Math.sin(h)*o;c===0?e.moveTo(f,d):e.lineTo(f,d)}e.closePath(),e.fill(),e.strokeStyle="#2563eb",e.lineWidth=3,e.stroke(),e.restore()},i=[[64,72,28],[192,68,28],[320,72,28],[448,68,28],[128,184,28],[256,188,28],[384,184,28],[0,188,26],[512,188,26],[256,18,24],[256,240,24]];for(const[s,a,o]of i)t(s,a,o,s*.02);e.strokeStyle="rgba(30, 41, 59, 0.35)",e.lineWidth=2;for(let s=0;s<i.length;s++)for(let a=s+1;a<i.length;a++)Math.hypot(i[s][0]-i[a][0],i[s][1]-i[a][1])<155&&(e.beginPath(),e.moveTo(i[s][0],i[s][1]),e.lineTo(i[a][0],i[a][1]),e.stroke());const r=new ga(n);return r.colorSpace=Qt,r.anisotropy=4,r}function ob(){const n=document.createElement("canvas");n.width=1024,n.height=64;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,1024,0);t.addColorStop(0,"#08142c"),t.addColorStop(.5,"#0f2854"),t.addColorStop(1,"#08142c"),e.fillStyle=t,e.fillRect(0,0,1024,64),e.fillStyle="#38bdf8",e.fillRect(0,0,1024,4),e.fillStyle="#10b981",e.fillRect(0,60,1024,4),e.font='800 28px system-ui, -apple-system, "PingFang SC", sans-serif',e.fillStyle="#f8fafc",e.textBaseline="middle";const i="PENALTY CHAMPIONS CUP  ·  巅峰点球大战  ·  PRO STADIUM 3D  ·  ";e.fillText(i+i,24,33);const r=new ga(n);return r.colorSpace=Qt,r.wrapS=Mc,r.repeat.set(3,1),r}function lb(){const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(255, 252, 240, 0.95)"),t.addColorStop(.25,"rgba(220, 238, 255, 0.42)"),t.addColorStop(.6,"rgba(140, 190, 255, 0.1)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=new ga(n);return i.colorSpace=Qt,i}function cb(){const n=[[-.36,.17,.11],[-.1,.21,.13],[.1,.23,.13],[.16,.08,.08],[.21,.075,.075],[.27,.105,.105],[.36,.102,.105],[.42,.03,.03]],e=10,t=n.length,i=e+1,r=new Float32Array(t*i*3),s=[];for(let o=0;o<t;o++){const[l,c,h]=n[o];for(let f=0;f<=e;f++){const d=f/e*Math.PI*2,m=(o*i+f)*3;r[m]=Math.cos(d)*c,r[m+1]=l,r[m+2]=Math.sin(d)*h}}for(let o=0;o<t-1;o++)for(let l=0;l<e;l++){const c=o*i+l,h=c+1,f=(o+1)*i+l,d=f+1;s.push(c,h,d,c,d,f)}const a=new Ft;return a.setAttribute("position",new zn(r,3)),a.setIndex(s),a.computeVertexNormals(),a}class ub{constructor(){this.scene=new b_,this.goal=new rb,this.crowdMembers=[],this.dummy=new Dt,this.crowdExcitement=0,this.flashTimer=0,this.particles=[],this.scene.background=new Fe("#060b16"),this.scene.fog=new Qd("#081122",.0155);const e=new z_("#dbeafe","#143d22",.85);this.scene.add(e);const t=new eo("#fffaf0",2.05);t.position.set(14,26,22),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=4,t.shadow.camera.far=56,t.shadow.camera.left=-12,t.shadow.camera.right=12,t.shadow.camera.top=12,t.shadow.camera.bottom=-12,t.shadow.bias=-35e-5,t.target.position.set(0,.5,5.5),this.scene.add(t),this.scene.add(t.target);const i=new eo("#93c5fd",.78);i.position.set(-16,22,-18),this.scene.add(i);const r=new eo("#fde68a",.36);r.position.set(-18,16,18),this.scene.add(r);const s=new wr(76,64);s.rotateX(-Math.PI/2);const a=new Ee({map:sb(),roughness:.86,metalness:.02}),o=new q(s,a);o.position.set(0,0,20),o.receiveShadow=!0,this.scene.add(o);const l=new wr(160,150);l.rotateX(-Math.PI/2);const c=new q(l,new Ee({color:"#0c1420",roughness:.95}));c.position.set(0,-.02,16),this.scene.add(c),this.scene.add(this.goal.group),this.ledTexture=ob();const h=new Ee({map:this.ledTexture,emissive:new Fe("#1e40af"),emissiveMap:this.ledTexture,emissiveIntensity:.85,roughness:.35}),f=new q(new rt(56,.95,.22),h);f.position.set(0,.48,-5.6),f.castShadow=!0,this.scene.add(f);for(const C of[-1,1]){const A=new q(new rt(.22,.95,42),h);A.position.set(C*28,.48,15.5),this.scene.add(A)}this.buildStadiumArchitecture();const d=cb(),m=new KS({color:"#ffffff"}),v=2400;this.crowdMesh=new tm(d,m,v),this.crowdMesh.instanceMatrix.setUsage(D0);const _=[new Fe("#162c56"),new Fe("#1d3b72"),new Fe("#1e293b"),new Fe("#273449"),new Fe("#4c2430"),new Fe("#5c441c"),new Fe("#334155"),new Fe("#475569")];let p=0;for(let C=0;C<18&&p<v;C++){const A=-13.2-C*1.02,L=1.15+C*.56+(C>=9?1.25:0),D=96;for(let U=0;U<D&&p<v;U++){if(Math.random()<.07)continue;const P=(U/(D-1)-.5)*64+(Math.random()-.5)*.24;this.crowdMembers.push({x:P,y:L,z:A,yaw:Math.atan2(-P,-A)*.35,phase:Math.random()*Math.PI*2,scale:.92+Math.random()*.22});const N=Math.random()<.45?P<0?_[1]:_[5]:_[Math.floor(Math.random()*_.length)];this.crowdMesh.setColorAt(p,N),p++}}for(const C of[-1,1])for(let A=0;A<12&&p<v;A++){const L=C*(31.5+A*.95),D=1.2+A*.56;for(let U=0;U<34&&p<v;U++){if(Math.random()<.12)continue;const P=-6+U*1.15;this.crowdMembers.push({x:L,y:D,z:P,yaw:-C*Math.PI*.5,phase:Math.random()*Math.PI*2,scale:.9+Math.random()*.22}),this.crowdMesh.setColorAt(p,_[Math.floor(Math.random()*_.length)]),p++}}this.crowdMesh.count=this.crowdMembers.length,this.crowdMesh.instanceColor&&(this.crowdMesh.instanceColor.needsUpdate=!0),this.scene.add(this.crowdMesh);const u=80;this.flashPositions=new Float32Array(u*3),this.randomizeFlashes();const g=new Ft;g.setAttribute("position",new zn(this.flashPositions,3));const y=new N_({color:"#ffffff",size:.65,transparent:!0,opacity:0,blending:Sc,depthWrite:!1});this.flashPoints=new GS(g,y),this.scene.add(this.flashPoints),this.updateCrowd(0,0);const S=new Le(Tt,28,22),E=new Ee({map:ab(),roughness:.34,metalness:.06});this.ballMesh=new q(S,E),this.ballMesh.castShadow=!0,this.ballMesh.receiveShadow=!0,this.ballMesh.position.set(0,Tt,Qn),this.scene.add(this.ballMesh),this.aimReticle=this.buildAimReticle(),this.aimReticle.visible=!1,this.scene.add(this.aimReticle);const w=new rt(.028,.028,.028),x=new Ri({color:"#ffffff"}),M=110;this.turfInstanced=new tm(w,x,M),this.turfInstanced.instanceMatrix.setUsage(D0);for(let C=0;C<M;C++)this.particles.push({active:!1,pos:new z(0,-10,0),vel:new z,life:0,maxLife:1,isChalk:!1}),this.turfInstanced.setColorAt(C,new Fe("#2e7d32")),this.dummy.position.set(0,-10,0),this.dummy.scale.setScalar(.001),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(C,this.dummy.matrix);this.scene.add(this.turfInstanced)}buildStadiumArchitecture(){const e=new Ee({color:"#0f172a",roughness:.88}),t=new Ee({color:"#162033",roughness:.84}),i=new Ee({map:this.ledTexture,emissive:new Fe("#1e40af"),emissiveMap:this.ledTexture,emissiveIntensity:.68,roughness:.4}),r=new Ee({color:"#0b1120",roughness:.65,metalness:.35});for(let _=0;_<18;_++){const p=-13.35-_*1.02,u=.55+_*.56+(_>=9?1.25:0),g=new q(new rt(68,.72,1.12),_%2===0?e:t);g.position.set(0,u,p),this.scene.add(g)}const s=new q(new rt(72,16,1.5),e);s.position.set(0,8.2,-32.4),this.scene.add(s);const a=new q(new rt(68,.72,.45),i);a.position.set(0,6.45,-21.9),this.scene.add(a);for(const _ of[-1,1]){const p=new q(new rt(12,10,52),e);p.position.set(_*38.5,3.6,12),p.rotation.z=-_*.42,this.scene.add(p)}const o=new q(new rt(76,.65,14),r);o.position.set(0,14.9,-26.5),o.rotation.x=.08,this.scene.add(o);const l=new q(new rt(76,.16,.25),new Ri({color:"#60a5fa"}));l.position.set(0,14.5,-19.6),this.scene.add(l);const c=lb(),h=new Ee({color:"#334155",metalness:.6,roughness:.4}),f=new Ri({color:"#fffef5"});for(const[_,p,u]of[[-18.5,14.6,-24.5],[18.5,14.6,-24.5],[-31,22,28],[31,22,28]]){const g=new q(new ct(.28,.46,p,10),h);g.position.set(_,p*.5,u),this.scene.add(g);const y=new q(new rt(3.8,1.65,.55),f);y.position.set(_,p+.55,u),y.lookAt(0,1,4),this.scene.add(y);const S=new US(new P_({map:c,color:"#fff8e7",transparent:!0,opacity:.9,blending:Sc,depthWrite:!1}));S.position.set(_,p+.55,u),S.scale.set(14.5,14.5,1),this.scene.add(S)}const d=new ct(.018,.018,1.5,8),m=new Ee({color:"#f8fafc"}),v=new Ee({color:"#f59e0b",side:Dn});for(const _ of[-34,34]){const p=new q(d,m);p.position.set(_,.75,0),this.scene.add(p);const u=new q(new wr(.4,.28),v);u.position.set(_+(_<0?.2:-.2),1.35,0),this.scene.add(u)}}buildAimReticle(){const e=new nt,t=new Ri({color:"#38bdf8",transparent:!0,opacity:.9,side:Dn,depthTest:!1}),i=new q(new eu(.19,.235,32),t);e.add(i);const r=new q(new np(.045,16),new Ri({color:"#f8fafc",transparent:!0,opacity:.95,side:Dn,depthTest:!1}));e.add(r);for(let s=0;s<4;s++){const a=new q(new wr(.09,.025),t),o=s*Math.PI/2;a.position.set(Math.cos(o)*.28,Math.sin(o)*.28,0),a.rotation.z=o,e.add(a)}return e}setAimReticle(e,t,i,r="#38bdf8",s=1){if(this.aimReticle.visible=e,!e)return;this.aimReticle.position.set(t,i,.04),this.aimReticle.scale.setScalar(s),this.aimReticle.children[0].material.color.set(r)}triggerCrowdExcitement(e=1){this.crowdExcitement=Math.max(this.crowdExcitement,e)}spawnTurfBurst(e,t,i=.25,r=1){let s=0;for(let a=0;a<this.particles.length&&s<t;a++){const o=this.particles[a];if(o.active)continue;o.active=!0,o.pos.copy(e),o.pos.y=Math.max(.02,e.y);const l=Math.random()*Math.PI*2,c=(.7+Math.random()*2.1)*r;o.vel.set(Math.cos(l)*c,(1.2+Math.random()*2.4)*r,Math.sin(l)*c),o.maxLife=.42+Math.random()*.35,o.life=o.maxLife,o.isChalk=Math.random()<i,this.turfInstanced.setColorAt(a,new Fe(o.isChalk?"#f1f5f9":"#22632b")),s++}this.turfInstanced.instanceColor&&(this.turfInstanced.instanceColor.needsUpdate=!0)}randomizeFlashes(){for(let e=0;e<this.flashPositions.length/3;e++){const t=this.crowdMembers[Math.floor(Math.random()*Math.max(1,this.crowdMembers.length))];t&&(this.flashPositions[e*3]=t.x,this.flashPositions[e*3+1]=t.y+.4,this.flashPositions[e*3+2]=t.z+.2)}}updateCrowd(e,t){this.crowdExcitement=Math.max(0,this.crowdExcitement-t*.42);const i=3.2+this.crowdExcitement*7.5,r=.035+this.crowdExcitement*.22;for(let s=0;s<this.crowdMembers.length;s++){const a=this.crowdMembers[s],o=Math.max(0,Math.sin(e*i+a.phase))*r;this.dummy.position.set(a.x,a.y+o,a.z),this.dummy.rotation.set(0,a.yaw,Math.sin(e*2.5+a.phase)*(.04+this.crowdExcitement*.12)),this.dummy.scale.set(a.scale,a.scale*(1+o*.25),a.scale),this.dummy.updateMatrix(),this.crowdMesh.setMatrixAt(s,this.dummy.matrix)}this.crowdMesh.instanceMatrix.needsUpdate=!0,this.flashTimer+=t,this.flashTimer>(this.crowdExcitement>.2?.07:.22)?(this.flashTimer=0,this.randomizeFlashes(),this.flashPoints.geometry.getAttribute("position").needsUpdate=!0,this.flashPoints.material.opacity=this.crowdExcitement>.2?.92:.28):this.flashPoints.material.opacity*=Math.exp(-8*t)}updateParticles(e){let t=!1;for(let i=0;i<this.particles.length;i++){const r=this.particles[i];if(!r.active)continue;if(t=!0,r.life-=e,r.life<=0){r.active=!1,this.dummy.position.set(0,-10,0),this.dummy.scale.setScalar(.001),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(i,this.dummy.matrix);continue}r.vel.y-=9.81*e,r.pos.addScaledVector(r.vel,e),r.pos.y<.015&&(r.pos.y=.015,r.vel.y*=-.3,r.vel.x*=.6,r.vel.z*=.6);const s=Math.max(.15,r.life/r.maxLife);this.dummy.position.copy(r.pos),this.dummy.rotation.set(r.life*8,r.life*6,0),this.dummy.scale.setScalar(s),this.dummy.updateMatrix(),this.turfInstanced.setMatrixAt(i,this.dummy.matrix)}t&&(this.turfInstanced.instanceMatrix.needsUpdate=!0)}step(e,t){this.ledTexture.offset.x=e*.045%1,this.goal.step(t),this.updateCrowd(e,t),this.updateParticles(t)}getGoalBounds(){return{halfW:mn,height:yt}}}function jt(n,e,t){return Math.max(e,Math.min(n,t))}function zm(n){return{pelvisOffset:{...n.pelvisOffset},pelvisRot:{...n.pelvisRot},spine:{...n.spine},head:{...n.head},armL:{...n.armL},armR:{...n.armR},legL:{...n.legL},legR:{...n.legR}}}function mr(n){let e=0,t=0,i=0,r=0;for(const s of n)s.side==="user"?(e++,s.result==="goal"&&i++):(t++,s.result==="goal"&&r++);return{uT:e,cT:t,uG:i,cG:r}}function hb(n){const{uT:e,cT:t,uG:i,cG:r}=mr(n);return e<5||t<5?i+(5-e)<r||r+(5-t)<i:e===t&&i!==r}class fb{constructor(e,t){this.shooterRig=null,this.keeperRig=null,this.phase="user_select",this.phaseBeforeReplay="result",this.turnSide="user",this.kicks=[],this.clockTime=0,this.phaseTime=0,this.rafId=0,this.lastFrameMs=0,this.hudThrottle=0,this.keys={up:!1,down:!1,left:!1,right:!1,space:!1},this.aimX=0,this.aimY=1.24,this.aimVelX=0,this.aimVelY=0,this.selectedStyle="placed",this.activeShotStyle="placed",this.shuttlePos=-.82,this.shuttleDir=1,this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.arrowBlockedTimer=0,this.chaosTimer=0,this.chaosSpeed=1.8,this.chaosCrossGuard=0,this.userIntendedOutcome=null,this.skiedPosture=!1,this.runupProgress=0,this.runupDuration=1.18,this.postImpactTime=0,this.lastFootstepIdx=-1,this.keeperX=0,this.keeperShufflePhase=0,this.keeperLateralSpeed=0,this.committedDive=null,this.keeperDiving=!1,this.keeperDiveStartX=0,this.keeperDiveDirX=0,this.keeperDiveDirY=0,this.keeperDiveTime=0,this.keeperExplosive=!1,this.keeperIntuition=null,this.cpuShotPlan=null,this.cpuKeeperPlan=null,this.ballPos=new z(0,Tt,Qn),this.ballVel=new z,this.ballSpin=new z,this.flightTime=0,this.goalScored=!1,this.goalScoredTime=0,this.keeperTouched=!1,this.keeperTouchTime=0,this.hitWoodwork=!1,this.woodworkTime=0,this.netSwished=!1,this.currentOutcome=null,this.lastSpeedKmh=0,this.cameraMode="broadcast",this.camPos=new z(0,2.35,17.6),this.camTarget=new z(0,1.25,0),this.camShake=0,this.replayFrames=[],this.replayCursor=0,this.replaySideSign=1,this.bannerTitle="",this.bannerTone="neutral",this.statusHint="",this.tmpClosest=new z,this.tmpNormal=new z,this.tmpMagnus=new z,this.handleResize=()=>{const i=this.container.getBoundingClientRect(),r=Math.max(320,i.width||960),s=Math.max(240,i.height||540);this.camera.aspect=r/s,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,s,!1)},this.handleKeyDown=i=>{vt.unlock();const r=i.code;if((r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight"||r==="Space"||r==="Tab")&&i.preventDefault(),(r==="ArrowUp"||r==="KeyW")&&(this.keys.up=!0),(r==="ArrowDown"||r==="KeyS")&&(this.keys.down=!0),(r==="ArrowLeft"||r==="KeyA")&&(this.keys.left=!0),(r==="ArrowRight"||r==="KeyD")&&(this.keys.right=!0),r==="KeyV"&&!i.repeat&&this.cycleCameraMode(),r==="KeyR"&&!i.repeat&&this.toggleReplay(),!i.repeat&&this.turnSide==="user"&&(this.phase==="user_select"||this.phase==="user_shuttle")){if(r==="Digit1"){this.selectShotStyle("placed",!0);return}if(r==="Digit2"){this.selectShotStyle("power",!0);return}if(r==="Digit3"){this.selectShotStyle("panenka",!0);return}if(r==="Digit4"){this.selectShotStyle("stutter",!0);return}}if(this.phase==="user_select"&&!i.repeat){const s=Yr.indexOf(this.selectedStyle);if(r==="ArrowLeft"||r==="KeyA"||r==="ArrowUp"||r==="KeyW"){const a=Yr[(s+Yr.length-1)%Yr.length];this.selectShotStyle(a,!1);return}if(r==="ArrowRight"||r==="KeyD"||r==="ArrowDown"||r==="KeyS"){const a=Yr[(s+1)%Yr.length];this.selectShotStyle(a,!1);return}if(r==="Space"||r==="Enter"){this.keys.space=!0,this.enterUserShuttlePhase(this.selectedStyle);return}}if(this.phase==="user_shuttle"&&!i.repeat){if(r==="Escape"||r==="Backspace"||r==="Tab"){this.backToStyleSelect();return}if(this.activeShotStyle==="panenka"&&(r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight"||r==="KeyW"||r==="KeyA"||r==="KeyS"||r==="KeyD")&&(this.arrowBlockedTimer=.95,vt.uiTick(260)),(r==="Space"||r==="Enter")&&!this.shuttleLocked){this.keys.space=!0,this.lockShuttleAndCommitUserShot();return}}this.turnSide==="cpu"&&this.captureUserKeeperInput(r==="Space"),(r==="Space"||r==="Enter")&&!i.repeat&&(this.keys.space=!0,this.phase==="result"&&this.phaseTime>.55?this.advanceNextTurn():this.phase==="replay"&&this.toggleReplay()),this.emitHud(!0)},this.handleKeyUp=i=>{const r=i.code;(r==="ArrowUp"||r==="KeyW")&&(this.keys.up=!1),(r==="ArrowDown"||r==="KeyS")&&(this.keys.down=!1),(r==="ArrowLeft"||r==="KeyA")&&(this.keys.left=!1),(r==="ArrowRight"||r==="KeyD")&&(this.keys.right=!1),(r==="Space"||r==="Enter")&&(this.keys.space=!1),this.emitHud(!0)},this.tick=i=>{var f,d;const r=(i-this.lastFrameMs)/1e3;this.lastFrameMs=i;const s=Math.min(.05,Math.max(.001,r));if(this.clockTime+=s,this.phaseTime+=s,this.arrowBlockedTimer>0&&(this.arrowBlockedTimer=Math.max(0,this.arrowBlockedTimer-s)),this.phase==="replay"&&this.replayFrames.length>0){if(this.replayCursor+=s*Math.max(12,this.replayFrames.length*.42),this.replayCursor>=this.replayFrames.length-1)this.phase=this.phaseBeforeReplay,this.emitHud(!0);else{const m=Math.floor(this.replayCursor),v=this.replayFrames[m];this.shooterRig&&(this.shooterRig.root.position.copy(v.shooterPos),this.shooterRig.root.rotation.y=v.shooterYaw,this.shooterRig.applyPose(v.shooterPose)),this.keeperRig&&(this.keeperRig.root.position.copy(v.keeperPos),this.keeperRig.root.rotation.y=db(v.keeperYaw),this.keeperRig.applyPose(v.keeperPose)),this.world.ballMesh.position.copy(v.ballPos),this.world.ballMesh.quaternion.copy(v.ballQuat)}this.world.step(this.clockTime,s*.38),this.updateCamera(s),this.renderer.render(this.world.scene,this.camera),this.rafId=requestAnimationFrame(this.tick);return}const a=this.activeShooter,o=this.activeKeeper;if(this.phase==="user_select"){const m=Math.sin(this.clockTime*1.55)*.24;this.keeperLateralSpeed=(m-this.keeperX)*3,this.keeperX+=this.keeperLateralSpeed*s,this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*s*6.5}else if(this.phase==="user_shuttle"){const m=no[this.activeShotStyle];if(m.arrowsEnabled){const p=(this.keys.right?1:0)-(this.keys.left?1:0),u=(this.keys.up?1:0)-(this.keys.down?1:0),g=17.5,y=Math.exp(-8.5*s);this.aimVelX=(this.aimVelX+p*g*s)*y,this.aimVelY=(this.aimVelY+u*g*s)*y;const{uT:S,cT:E}=mr(this.kicks),w=S>=4||E>=5?(100-a.composure)/100*.22:.025,x=Math.sin(this.clockTime*2.7)*w*s,M=Math.cos(this.clockTime*3.4)*w*.7*s;this.aimX=jt(this.aimX+this.aimVelX*s+x,-3.48,3.48),this.aimY=jt(this.aimY+this.aimVelY*s+M,.22,2.26)}else this.aimX=0,this.aimY=1.46;this.stepShuttleBall(s);const v=1+Math.sin(this.clockTime*6)*.06;this.world.setAimReticle(!0,this.aimX,this.aimY,m.accentColor,v);const _=Math.sin(this.clockTime*1.65)*.28;this.keeperLateralSpeed=(_-this.keeperX)*3,this.keeperX+=this.keeperLateralSpeed*s,this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*s*6.5}else if(this.phase==="cpu_ready")this.updateUserKeeperFootwork(s,1.35),this.phaseTime>=.82&&(this.replayFrames=[],this.phase="runup",this.phaseTime=0,this.runupProgress=0,this.statusHint=`${a.name} 开始助跑 · 按住 ↑↓←→ 选择扑救方向！`,this.emitHud(!0));else if(this.phase==="runup"){if(this.runupProgress+=s/this.runupDuration,this.turnSide==="cpu"){const m=(this.keys.right?1:0)-(this.keys.left?1:0),v=(this.keys.up?1:0)-(this.keys.down?1:0);this.runupProgress<.56&&v===0&&!this.keys.space?this.updateUserKeeperFootwork(s,1.15):this.keeperLateralSpeed=0,this.runupProgress>=.34&&(m!==0||v!==0)&&(this.committedDive={x:m,y:v,boost:this.keys.space||(((f=this.committedDive)==null?void 0:f.boost)??!1)});const _=.87+(92-this.userGK.reflex)*.0014;!this.keeperDiving&&this.runupProgress>=_&&this.committedDive&&this.triggerKeeperDive(this.committedDive.x,this.committedDive.y,this.committedDive.boost)}else this.keeperLateralSpeed=0,!this.keeperDiving&&this.cpuKeeperPlan&&this.runupProgress>=this.cpuKeeperPlan.triggerAt&&this.triggerKeeperDive(this.cpuKeeperPlan.dirX,this.cpuKeeperPlan.dirY,this.cpuKeeperPlan.explosive);this.keeperDiving&&(this.keeperDiveTime+=s),this.runupProgress>=1&&(this.runupProgress=1,this.launchBallFromSpot(),this.phase="flight",this.phaseTime=0,this.postImpactTime=0,this.emitHud(!0))}else if(this.phase==="flight"){if(this.flightTime+=s,this.postImpactTime+=s,this.keeperDiving)this.keeperDiveTime+=s;else if(this.turnSide==="cpu"){const g=(this.keys.right?1:0)-(this.keys.left?1:0),y=(this.keys.up?1:0)-(this.keys.down?1:0);this.flightTime<=.24&&(g!==0||y!==0||this.keys.space)?this.triggerKeeperDive(g,y,this.keys.space):this.flightTime>.24&&this.triggerKeeperDive(0,0,!1)}this.stepBallPhysics(s);const m=this.goalScored&&this.flightTime-this.goalScoredTime>.48,v=this.keeperTouched&&!this.goalScored&&this.flightTime-this.keeperTouchTime>.56&&this.ballPos.z>.25,_=this.hitWoodwork&&!this.goalScored&&this.flightTime-this.woodworkTime>.62&&this.ballPos.z>.15,p=!this.goalScored&&this.ballPos.z<-.85,u=this.flightTime>1.75;if(m||v||_||p||u){if(!this.currentOutcome){const g=this.goalScored?"goal":this.keeperTouched?"save":this.hitWoodwork?"post":"miss";this.onOutcomeConfirmed(g)}this.phase="result",this.phaseTime=0,this.emitHud(!0)}}else this.phase==="result"?(this.flightTime+=s,this.postImpactTime+=s,this.keeperDiving&&(this.keeperDiveTime+=s),this.stepBallPhysics(s),this.phaseTime>=2.55&&this.advanceNextTurn()):this.phase==="over"&&(this.postImpactTime+=s,this.keeperDiving&&(this.keeperDiveTime+=s),this.stepBallPhysics(s));const l=this.phase==="user_shuttle"?"charging":this.phase==="runup"?"runup":this.phase==="flight"||this.phase==="result"||this.phase==="over"?"follow":"idle",c=nb({shooter:a,mode:l,time:this.clockTime,chargeRatio:this.phase==="user_shuttle"?.5:0,runupProgress:this.runupProgress,postImpactTime:this.postImpactTime,shotStyle:((d=this.cpuShotPlan)==null?void 0:d.style)??this.activeShotStyle,overcharged:this.skiedPosture,outcome:this.currentOutcome});l==="runup"&&c.stepIndex!==this.lastFootstepIdx&&(this.lastFootstepIdx=c.stepIndex,vt.footstep(.65+this.runupProgress*.35),c.pos.y<.04&&this.world.spawnTurfBurst(c.pos,4,.05,.45)),this.shooterRig&&(this.shooterRig.root.position.copy(c.pos),this.shooterRig.root.rotation.y=c.yaw,this.shooterRig.applyPose(c.pose));const h=ib({keeper:o,mode:this.keeperDiving?"diving":"ready",time:this.clockTime,xPos:this.keeperX,shufflePhase:this.keeperShufflePhase,shuffleSpeed:this.keeperLateralSpeed,preDiveX:this.turnSide==="cpu"&&this.committedDive?this.committedDive.x:0,preDiveY:this.turnSide==="cpu"&&this.committedDive?this.committedDive.y:0,diveStartX:this.keeperDiveStartX,diveDirX:this.keeperDiveDirX,diveDirY:this.keeperDiveDirY,diveTime:this.keeperDiveTime,explosiveBoost:this.keeperExplosive,ballPos:this.ballPos,keeperSaved:this.keeperTouched&&!this.goalScored,outcome:this.currentOutcome});h.justLanded&&(vt.footstep(.95),this.world.spawnTurfBurst(h.pos,12,.1,.7)),this.keeperRig&&(this.keeperRig.root.position.copy(h.pos),this.keeperRig.root.rotation.y=h.yaw,this.keeperRig.applyPose(h.pose)),this.updateRefereePose(),(this.phase==="runup"||this.phase==="flight"||this.phase==="result"&&this.phaseTime<.9)&&this.recordReplaySnapshot(c.pos,c.yaw,c.pose,h.pos,h.yaw,h.pose),this.world.step(this.clockTime,s),this.updateCamera(s),this.renderer.render(this.world.scene,this.camera),this.hudThrottle+=s,this.hudThrottle>=.045&&(this.hudThrottle=0,this.emitHud(!1)),this.rafId=requestAnimationFrame(this.tick)},this.container=e,this.diff=t.diff,this.userGK=t.userGK,this.cpuGK=t.cpuGK,this.userTeam=t.userTeam,this.cpuTeam=t.cpuTeam,this.onHudUpdate=t.onHudUpdate,this.onShuttleFrame=t.onShuttleFrame,this.renderer=new Q_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=e_,this.renderer.toneMapping=Jc,this.renderer.toneMappingExposure=1.08,e.innerHTML="",e.appendChild(this.renderer.domElement),this.camera=new ni(40,16/9,.15,180),this.world=new ub,this.refereeRig=new to({height:1.82,build:.98,skin:"#dfb48f",hair:"#241d18",hairStyle:"swept",facialHair:"none",bootColor:"#0f172a"},{primary:"#111827",secondary:"#030712",trim:"#fde047",shorts:"#090d16",socks:"#111827",numberColor:"#fde047"},0,!1),this.refereeRig.root.position.set(6.8,0,11.8),this.refereeRig.root.rotation.y=-Math.PI*.42,this.world.scene.add(this.refereeRig.root),this.handleResize(),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),this.setupTurn("user"),this.lastFrameMs=performance.now(),this.rafId=requestAnimationFrame(this.tick)}destroy(){cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),this.renderer.dispose()}setCameraMode(e){this.cameraMode=e,this.emitHud(!0)}cycleCameraMode(){const e=["broadcast","tight","wide"],t=e[(e.indexOf(this.cameraMode)+1)%e.length];this.setCameraMode(t)}toggleReplay(){if(this.phase==="replay"){this.phase=this.phaseBeforeReplay,this.emitHud(!0);return}(this.phase==="result"||this.phase==="over")&&this.replayFrames.length>8&&(this.phaseBeforeReplay=this.phase,this.phase="replay",this.replayCursor=0,this.replaySideSign=this.ballPos.x>=0?1:-1,this.emitHud(!0))}selectShotStyle(e,t=!0){this.turnSide==="user"&&(this.phase!=="user_select"&&this.phase!=="user_shuttle"||(this.selectedStyle=e,vt.uiTick(560),t?this.enterUserShuttlePhase(e):this.emitHud(!0)))}backToStyleSelect(){this.turnSide==="user"&&this.phase==="user_shuttle"&&!this.shuttleLocked&&(this.phase="user_select",this.phaseTime=0,this.world.setAimReticle(!1,0,0),this.statusHint=`${this.activeShooter.name} 主罚 · 第一步：选择射门方式（1-4 或 ←→ 选择后按 空格键 确认）`,vt.uiTick(420),this.emitHud(!0))}enterUserShuttlePhase(e){var i;this.selectedStyle=e,this.activeShotStyle=e,this.phase="user_shuttle",this.phaseTime=0,this.aimVelX=0,this.aimVelY=0,this.arrowBlockedTimer=0,this.shuttleDir=Math.random()<.5?1:-1,this.shuttlePos=-this.shuttleDir*(.68+Math.random()*.24),this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.chaosTimer=.16,this.chaosSpeed=2.15,this.chaosCrossGuard=0;const t=this.activeShooter;if(e==="panenka")this.aimX=0,this.aimY=1.46,this.statusHint="勺子点球（固定踢向中路，方向键无效）· 紧盯极速小球，在中心完美点按下 空格键！";else if(e==="placed"){const r=t.foot==="R"?-1:1;this.aimX=r*2.55,this.aimY=1.58,this.statusHint="推射死角 · 方向键 ↑↓←→ 瞄准死角，小球经过中心完美点时按下 空格键！"}else e==="stutter"?(this.aimX=(t.foot==="R"?-1:1)*1.65,this.aimY=1.08,this.statusHint="节奏变化（小跳步）· 方向键瞄准，预判乱晃小球在中心完美点按下 空格键！"):(this.aimX=(t.foot==="R"?-1:1)*1.45,this.aimY=1.38,this.statusHint="大力爆射 · 方向键 ↑↓←→ 瞄准，小球经过中心完美点时按下 空格键！");this.runupDuration=e==="stutter"?1.42:t.runupStyle==="stutter"?1.32:1.15,vt.whistle(),vt.setTension(.78),(i=this.onShuttleFrame)==null||i.call(this,this.shuttlePos,!1),this.emitHud(!0)}getCurrentShooter(e){const{uT:t,cT:i}=mr(this.kicks),r=(e==="user"?t:i)%5;return e==="user"?this.userTeam[r]:this.cpuTeam[r]}rebuildAthletesForTurn(e){this.shooterRig&&this.world.scene.remove(this.shooterRig.root),this.keeperRig&&this.world.scene.remove(this.keeperRig.root);const t=this.getCurrentShooter(e),r=(e==="user"?"cpu":"user")==="user"?this.userGK:this.cpuGK;this.activeShooter=t,this.activeKeeper=r,this.shooterRig=new to(t.appearance,t.kit,t.number,!1),this.keeperRig=new to(r.appearance,r.kit,r.number,!0),this.world.scene.add(this.shooterRig.root),this.world.scene.add(this.keeperRig.root)}setupTurn(e){var r;this.turnSide=e,this.phaseTime=0,this.runupProgress=0,this.postImpactTime=0,this.lastFootstepIdx=-1,this.keeperX=0,this.keeperShufflePhase=0,this.keeperLateralSpeed=0,this.committedDive=null,this.keeperDiving=!1,this.keeperDiveStartX=0,this.keeperDiveDirX=0,this.keeperDiveDirY=0,this.keeperDiveTime=0,this.keeperExplosive=!1,this.keeperIntuition=null,this.goalScored=!1,this.keeperTouched=!1,this.hitWoodwork=!1,this.netSwished=!1,this.currentOutcome=null,this.userIntendedOutcome=null,this.skiedPosture=!1,this.flightTime=0,this.bannerTitle="",this.bannerTone="neutral",this.shuttleLocked=!1,this.shuttleGrade=null,this.shuttleGoalPct=null,this.arrowBlockedTimer=0,this.world.goal.resetNet(),this.ballPos.set(0,Tt,Qn),this.ballVel.set(0,0,0),this.ballSpin.set(0,0,0),this.world.ballMesh.position.copy(this.ballPos),this.world.ballMesh.rotation.set(0,0,0),this.rebuildAthletesForTurn(e);const t=this.activeShooter;e==="user"?(this.phase="user_select",this.aimX=0,this.aimY=1.24,this.aimVelX=0,this.aimVelY=0,this.world.setAimReticle(!1,0,0),this.statusHint=`${t.name} 主罚 · 第一步：选择射门方式（按 1-4 直接选，或 ←→ 切换后按 空格键 确认）`,vt.setTension(.25)):(this.phase="cpu_ready",this.world.setAimReticle(!1,0,0),this.planCpuShot(t),this.runupDuration=((r=this.cpuShotPlan)==null?void 0:r.style)==="stutter"?1.42:t.runupStyle==="stutter"?1.32:1.15,this.statusHint=`${t.name} 准备助跑 · 用 ← → 移动门将站位，组合 ↑↓←→ 飞身扑救！`,vt.whistle(),vt.setTension(.75));const i=this.computeDesiredCamera(.016);this.camPos.copy(i.pos),this.camTarget.copy(i.target),this.emitHud(!0)}planCpuShot(e){const t=jl[this.diff],{cT:i}=mr(this.kicks),r=Math.random(),s=e.foot==="R"?.46:.32,a=r<s?-1:r<s+.18?0:1,o=Math.random()<.46;let l="power";a===0&&e.composure>=85&&Math.random()<.32?l="panenka":e.runupStyle==="stutter"||e.composure>=83&&Math.random()<.25?l="stutter":a!==0&&e.accuracy>=82&&Math.random()<.48&&(l="placed");const c=l==="panenka"?(Math.random()-.5)*.45:a===0?(Math.random()-.5)*.9:a*(2.15+Math.random()*1.15),h=l==="panenka"?1.45+Math.random()*.38:o?1.5+Math.random()*.65:.26+Math.random()*.7,f=i>=4?(100-e.composure)/100*.24:0,d=((100-e.accuracy)/100*.44+f)*t.accSpread,m=Math.random()*Math.PI*2,v=d*Math.sqrt(Math.random());if(this.cpuShotPlan={targetX:c+Math.cos(m)*v*1.2,targetY:Math.max(.16,h+Math.sin(m)*v*.85),powerFactor:l==="panenka"?.5:l==="power"?.88:.68,style:l},Math.random()<this.userGK.mind/128){const _=c<-.8?"左侧":c>.8?"右侧":"中路",p=Math.random()<.62+(this.userGK.mind-70)*.01,u=["左侧","中路","右侧"].filter(y=>y!==_),g=p?_:u[Math.floor(Math.random()*u.length)];this.keeperIntuition=`${this.userGK.name}直觉预判：射手支撑脚倾向 ${g}`}else this.keeperIntuition=null}stepShuttleBall(e){var i;if(this.shuttleLocked)return;const t=this.activeShotStyle;if(t==="panenka"){const s=3.15+(1-this.shuttlePos*this.shuttlePos)*1.15;this.shuttlePos+=this.shuttleDir*s*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1)}else if(t==="placed"){const s=2.15+(1-this.shuttlePos*this.shuttlePos)*.72;this.shuttlePos+=this.shuttleDir*s*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1)}else if(t==="stutter"){if(this.chaosTimer-=e,this.chaosCrossGuard+=e,this.chaosTimer<=0){const o=Math.random();o<.28?(this.chaosSpeed=.28+Math.random()*.42,this.chaosTimer=.1+Math.random()*.12):o<.68?(this.chaosSpeed=2.45+Math.random()*1.25,this.chaosTimer=.14+Math.random()*.18):(this.chaosSpeed=1.45+Math.random()*.9,this.chaosTimer=.12+Math.random()*.16,Math.abs(this.shuttlePos)>.18&&this.chaosCrossGuard<.55&&Math.random()<.55&&(this.shuttleDir=-this.shuttleDir)),this.chaosCrossGuard>.65&&Math.abs(this.shuttlePos)>.12&&(this.shuttleDir=this.shuttlePos>0?-1:1,this.chaosSpeed=Math.max(this.chaosSpeed,2.25))}const r=Math.sign(this.shuttlePos),s=Math.sin(this.clockTime*19.3)*.35+Math.cos(this.clockTime*31.7)*.22,a=this.shuttleDir*Math.max(.2,this.chaosSpeed+s);this.shuttlePos+=a*e,Math.sign(this.shuttlePos)!==r&&(this.chaosCrossGuard=0),this.shuttlePos>=.98?(this.shuttlePos=.98,this.shuttleDir=-1):this.shuttlePos<=-.98&&(this.shuttlePos=-.98,this.shuttleDir=1)}else this.shuttlePos+=this.shuttleDir*1.52*e,this.shuttlePos>=1?(this.shuttlePos=2-this.shuttlePos,this.shuttleDir=-1):this.shuttlePos<=-1&&(this.shuttlePos=-2-this.shuttlePos,this.shuttleDir=1);(i=this.onShuttleFrame)==null||i.call(this,this.shuttlePos,!1)}lockShuttleAndCommitUserShot(){var E;const e=this.activeShooter,t=this.activeShotStyle,i=no[t];this.shuttleLocked=!0,(E=this.onShuttleFrame)==null||E.call(this,this.shuttlePos,!0);const r=Math.abs(this.shuttlePos);let s,a,o=0;if(r<=i.perfectHalfWidth)a="perfect",s=i.perfectGoalPct/100;else{o=jt((r-i.perfectHalfWidth)/(1-i.perfectHalfWidth),0,1),a=r<=i.goodHalfWidth?"good":o<.5?"off":"wild";const w=t==="panenka"?2.55:t==="placed"?1.95:t==="stutter"?1.72:1.36,x=this.diff==="hard"?.92:this.diff==="easy"?1.06:1,M=1+(e.accuracy+e.composure-164)/100*.08;s=jt(i.perfectGoalPct/100*Math.pow(1-o,w)*x*M,.03,i.perfectGoalPct/100-.03)}this.shuttleGrade=a,this.shuttleGoalPct=Math.round(s*100),vt.shuttleLock(a==="perfect"?"perfect":a==="good"?"good":"poor");const l=Math.random();let c;if(l<s)c="goal";else{const w=Math.random();a==="perfect"?c=w<.8?"save":"post":o<.45?c=w<.66?"save":w<.86?"post":"miss":c=w<.54?"save":w<.74?"post":"miss"}this.userIntendedOutcome=c,this.skiedPosture=!1;const h=t==="panenka"?0:this.aimX,f=t==="panenka"?1.46:this.aimY,d=h===0?Math.random()<.5?-1:1:Math.sign(h);let m=h,v=f,_,p=0,u=0,g=.87,y=!1;if(c==="goal")if(t==="panenka")m=(Math.random()-.5)*.36,v=1.38+Math.random()*.36,p=Math.random()<.5?-1:1,u=Math.random()<.4?0:-1,g=.82;else if(t==="placed"){m=Math.abs(h)<1.9?d*(2.78+Math.random()*.44):jt(h,-3.28,3.28),v=jt(f,.26,2.16);const x=Math.random()<.52;p=x?-Math.sign(m):Math.sign(m),u=v>1.35?1:-1,g=x?.86:.95}else t==="stutter"?(m=Math.abs(h)<.9?d*(1.85+Math.random()*1.15):jt(h,-3.2,3.2),v=jt(f,.26,2.12),p=-Math.sign(m||1),u=Math.random()<.5?0:-1,g=.77):(m=jt(h+(Math.random()-.5)*.35,-3.18,3.18),v=jt(f+(Math.random()-.5)*.25,.32,2.14),p=Math.random()<.58?-d:d,u=v>1.35?0:1,g=.93);else if(c==="save")y=!0,t==="panenka"?(m=(Math.random()-.5)*.28,v=1.28+Math.random()*.22,p=0,u=0,g=.88):(p=Math.abs(h)<.65?0:Math.sign(h),u=f>1.46?1:f<.72?-1:0,m=p===0?(Math.random()-.5)*.35:p*(1.68+Math.random()*.55),v=u>0?1.52+Math.random()*.24:u<0?.38+Math.random()*.22:1.05+Math.random()*.22,g=.85);else if(c==="post"){const w=t==="panenka"||t==="power"&&Math.random()<.58||f>1.85;w?(_="bar",m=t==="panenka"?(Math.random()-.5)*.5:jt(h,-3.35,3.35),v=yt+.045):(_=d<0?"postL":"postR",m=d*(mn+.045),v=jt(f,.45,2.25)),p=Math.random()<.5?d:-d,u=w?1:0,g=.88}else{const w=t==="panenka"||t==="power"||f>1.65||Math.random()<.52;w?(this.skiedPosture=!0,m=t==="panenka"?(Math.random()-.5)*.7:jt(h*1.05,-3.9,3.9),v=2.95+Math.random()*.95):(m=d*(4.15+Math.random()*.85),v=jt(f,.35,2.35)),p=d,u=w?1:0,g=.89}this.cpuShotPlan={targetX:m,targetY:v,powerFactor:t==="panenka"?.5:t==="power"?.94:.72,style:t,woodworkKind:_},this.cpuKeeperPlan={dirX:p,dirY:u,triggerAt:g,explosive:y},this.world.setAimReticle(!1,0,0),this.replayFrames=[],this.phase="runup",this.phaseTime=0,this.runupProgress=0;const S=a==="perfect"?`完美中心！（进球率 ${this.shuttleGoalPct}%）`:a==="good"?`校准良好（进球率 ${this.shuttleGoalPct}%）`:`偏离中心（进球率 ${this.shuttleGoalPct}% · 门将扑救率上升）`;this.statusHint=`${e.name} · ${i.name} · ${S}`,this.emitHud(!0)}captureUserKeeperInput(e){const t=(this.keys.right?1:0)-(this.keys.left?1:0),i=(this.keys.up?1:0)-(this.keys.down?1:0);if(this.phase==="flight"&&!this.keeperDiving&&this.flightTime<=.24){(t!==0||i!==0||e)&&this.triggerKeeperDive(t,i,e);return}if(this.phase==="runup"||this.phase==="cpu_ready"&&(i!==0||e))if(t!==0||i!==0){const r=this.committedDive,s=t!==0?t:r?r.x:0,a=i!==0?i:r&&t===r.x?r.y:0,o=this.phase==="runup"&&this.runupProgress>=.72&&this.runupProgress<=.96;this.committedDive={x:s,y:a,boost:e||o}}else e&&(this.committedDive={x:0,y:0,boost:!0})}triggerKeeperDive(e,t,i){this.keeperDiving||(this.keeperDiving=!0,this.keeperDiveStartX=this.keeperX,this.keeperDiveDirX=e,this.keeperDiveDirY=t,this.keeperDiveTime=0,this.keeperExplosive=i,vt.footstep(1),e!==0&&this.world.spawnTurfBurst(new z(this.keeperX,.03,.16),10,.15,.85))}launchBallFromSpot(){const e=this.activeShooter,t=this.cpuShotPlan,i=e.foot==="R"?1:-1,r=t.style;let s;r==="panenka"?s=12+t.powerFactor*2.4:r==="placed"?s=(21.5+t.powerFactor*6.5)*(.88+e.power*.0014):r==="stutter"?s=(20.8+t.powerFactor*7.2)*(.88+e.power*.0014):s=(25.5+t.powerFactor*9.8)*(.88+e.power*.0016),this.lastSpeedKmh=Math.round(s*3.6);const a=.0095;r==="placed"?this.ballSpin.set(-12,i*32,-i*8):r==="panenka"?this.ballSpin.set(19,i*3,0):r==="stutter"?this.ballSpin.set(-9,i*18,-i*4):this.ballSpin.set(-10,i*8,0);const o=.011,l=r==="panenka"?s*.86:s*.96,c=(Math.exp(o*Qn)-1)/(o*l),h=Qn/c,f=-a*this.ballSpin.y*h,d=a*this.ballSpin.x*h,m=.5*f*c*c,_=.5*(-9.81+d)*c*c,p=o*Qn/(1-Math.exp(-o*Qn)),u=(t.targetX-m)/c*p*.945,g=(t.targetY-Tt-_)/c*p*.955,y=-l;this.ballPos.set(0,Tt,Qn),this.ballVel.set(u,g,y),this.flightTime=0,vt.kick(t.powerFactor,r),this.camShake=r==="panenka"?.03:r==="power"?.17:.09,this.world.spawnTurfBurst(new z(0,.03,Qn),r==="power"?24:16,.4,1.15)}applyGoalkeeperParryDeflection(e){const t=Math.abs(this.ballPos.x)>.3?Math.sign(this.ballPos.x)*(5.6+e*.22):(this.keeperDiveDirX||(Math.random()<.5?-1:1))*4.4,i=this.ballPos.y>1.65?5+e*.14:2.1,r=Math.max(4.2,Math.abs(this.ballVel.z)*.38);this.ballVel.set(t,i,r),this.ballSpin.set(7,t*2.2,0),this.keeperTouched=!0,this.keeperTouchTime=this.flightTime,this.camShake=Math.max(this.camShake,.14),vt.gloveSave(!0)}stepBallPhysics(e){var l;const i=e/4,r=.0095,s=this.turnSide==="user",a=s?this.userIntendedOutcome:null,o=this.keeperRig?this.keeperRig.getKeeperCollisionCapsules():[];for(let c=0;c<4;c++){const h=this.ballPos.z,f=this.ballPos.x,d=this.ballPos.y,m=this.ballVel.length();if(m>.01){const p=-.011*m;this.ballVel.x+=this.ballVel.x*p*i,this.ballVel.y+=this.ballVel.y*p*i,this.ballVel.z+=this.ballVel.z*p*i,this.tmpMagnus.crossVectors(this.ballSpin,this.ballVel).multiplyScalar(r),this.ballVel.addScaledVector(this.tmpMagnus,i)}this.ballVel.y-=9.81*i,this.ballPos.addScaledVector(this.ballVel,i);const v=this.ballSpin.length();if(v>.1){const p=this.tmpNormal.copy(this.ballSpin).divideScalar(v);this.world.ballMesh.rotateOnWorldAxis(p,v*i)}else m>.2&&this.ballPos.y<=Tt+.02&&(this.tmpNormal.set(this.ballVel.z,0,-this.ballVel.x).normalize(),this.tmpNormal.lengthSq()>.1&&this.world.ballMesh.rotateOnWorldAxis(this.tmpNormal,m/Tt*i));if(this.ballPos.y<Tt&&(this.ballPos.y=Tt,this.ballVel.y<-1.2?(this.ballVel.y=-this.ballVel.y*.52,this.world.spawnTurfBurst(this.ballPos,5,.1,.5)):this.ballVel.y=0,this.ballVel.x*=Math.exp(-2.2*i),this.ballVel.z*=Math.exp(-2.2*i),this.ballSpin.multiplyScalar(Math.exp(-3*i))),(!s||a==="save")&&!this.goalScored&&!this.keeperTouched&&this.ballPos.z>-.25&&this.ballPos.z<1.35){const p=this.activeKeeper;for(const u of o){Om(this.ballPos,u.a,u.b,this.tmpClosest);const g=this.ballPos.distanceTo(this.tmpClosest),y=Tt+u.radius;if(g<y){this.tmpNormal.subVectors(this.ballPos,this.tmpClosest),this.tmpNormal.lengthSq()<1e-6&&this.tmpNormal.set(0,.2,1),this.tmpNormal.normalize();const S=y-g;this.ballPos.addScaledVector(this.tmpNormal,S+.004),!s&&(u.part==="gloveL"||u.part==="gloveR")&&S<.014&&m>30.5&&p.reflex<88?(this.ballVel.x+=Math.sign(this.ballPos.x||1)*3.2,this.ballVel.y+=1.8,this.ballVel.multiplyScalar(.84),this.keeperTouched=!0,this.keeperTouchTime=this.flightTime,vt.gloveSave(!1)):this.applyGoalkeeperParryDeflection(m);break}}a==="save"&&!this.keeperTouched&&this.ballPos.z<=.34&&this.ballVel.z<0&&(this.ballPos.z=.35,this.applyGoalkeeperParryDeflection(m))}if(Math.abs(this.ballPos.z)<.45&&a!=="goal")if(a==="post"&&!this.hitWoodwork&&this.ballPos.z<=Ei+Tt+.03&&this.ballVel.z<0){const p=((l=this.cpuShotPlan)==null?void 0:l.woodworkKind)??"bar";if(p==="bar")this.ballPos.y=yt+Tt*.45,this.ballVel.set(this.ballVel.x*.65,5.8+Math.random()*2.5,Math.abs(this.ballVel.z)*.35+2.6);else{const u=p==="postL"?-1:1;this.ballPos.x=u*(mn+Tt*.4),this.ballVel.set(u*(6.2+Math.random()*2.5),1.8,Math.abs(this.ballVel.z)*.42+2.8)}this.ballPos.z=Ei+Tt+.04,this.hitWoodwork=!0,this.woodworkTime=this.flightTime,this.camShake=Math.max(this.camShake,.2),vt.postClang()}else for(const p of this.world.goal.postSegments){Om(this.ballPos,p.a,p.b,this.tmpClosest);const u=this.ballPos.distanceTo(this.tmpClosest),g=Tt+p.radius;if(u<g){this.tmpNormal.subVectors(this.ballPos,this.tmpClosest),this.tmpNormal.lengthSq()<1e-6&&this.tmpNormal.set(0,0,1),this.tmpNormal.normalize(),this.ballPos.copy(this.tmpClosest).addScaledVector(this.tmpNormal,g+.003);const y=this.ballVel.dot(this.tmpNormal);y<0&&(this.ballVel.addScaledVector(this.tmpNormal,-1.68*y),this.ballVel.multiplyScalar(.78),this.hitWoodwork||(this.hitWoodwork=!0,this.woodworkTime=this.flightTime,this.camShake=Math.max(this.camShake,.18),vt.postClang()))}}if(!this.goalScored&&h>=0&&this.ballPos.z<0){const p=h/Math.max(1e-5,h-this.ballPos.z);let u=f+(this.ballPos.x-f)*p,g=d+(this.ballPos.y-d)*p;a==="goal"&&(u=jt(u,-3.539,mn-Tt*1.1),g=jt(g,Tt,yt-Tt*1.1),this.ballPos.x=u,this.ballPos.y=g),a!=="miss"&&a!=="post"&&a!=="save"&&Math.abs(u)<mn-Tt*.35&&g<yt-Tt*.35&&(this.goalScored=!0,this.goalScoredTime=this.flightTime,this.onOutcomeConfirmed("goal"))}if(this.goalScored){const p=Yf(this.ballPos.y)+Tt,u=mn-Tt,g=yt-Tt;let y=!1;this.ballPos.z<p&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.85),this.ballPos.z=p,this.ballVel.z=-this.ballVel.z*.18,this.ballVel.x*=.48,this.ballVel.y*=.42,y=!0),Math.abs(this.ballPos.x)>u&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.75),this.ballPos.x=Math.sign(this.ballPos.x)*u,this.ballVel.x=-this.ballVel.x*.22,this.ballVel.z*=.55,y=!0),this.ballPos.y>g&&(this.world.goal.applyBallImpulse(this.ballPos,this.ballVel,.75),this.ballPos.y=g,this.ballVel.y=-Math.abs(this.ballVel.y)*.25,y=!0),y&&!this.netSwished&&(this.netSwished=!0,vt.netSwish())}else!this.goalScored&&this.ballPos.z<0&&Math.abs(this.ballPos.x)<mn&&this.ballPos.y<yt&&(this.ballPos.y=yt+Tt)}this.world.ballMesh.position.copy(this.ballPos)}onOutcomeConfirmed(e){var l;if(this.currentOutcome)return;this.currentOutcome=e;const t=this.activeShooter,i=this.activeKeeper,r=((l=this.cpuShotPlan)==null?void 0:l.style)??this.selectedStyle,s=no[r].name,a=this.turnSide==="user"&&e==="goal"||this.turnSide==="cpu"&&e!=="goal";let o;e==="goal"?r==="panenka"?o=`${t.name} 写意勺子点球骗过门将直挂中路！`:r==="stutter"?o=`${t.name} 小跳步晃倒重心推射破门！(${this.lastSpeedKmh} km/h)`:r==="placed"?o=`${t.name} 精准推射死角入网！(${this.lastSpeedKmh} km/h)`:this.hitWoodwork?o=`${t.name} 爆射击中门框内侧弹入球网！`:o=`${t.name} 大力爆射破门得分！(${this.lastSpeedKmh} km/h)`:e==="save"?o=r==="panenka"?`${i.name} 识破勺子点球，镇守中路将球没收！`:`${i.name} 判断准确飞身将${s}神勇扑出！`:e==="post"?o=`${t.name} 的${s}重重砸在门框弹出！`:o=this.ballPos.y>yt?`${t.name} 发力过猛将球直接踢飞看台！`:`${t.name} 角度过刁擦柱射偏出界！`,this.kicks=[...this.kicks,{side:this.turnSide,shooterName:t.name,keeperName:i.name,result:e,detail:o,speedKmh:this.lastSpeedKmh,style:r}],this.bannerTitle=e==="goal"?"GOAL · 进球！":e==="save"?"SAVED · 门将扑出！":e==="post"?"POST · 击中门框！":"MISS · 踢飞偏出！",this.bannerTone=a?"good":"bad",this.statusHint=`${o} · 按 R 慢镜回放，空格键 继续`,this.world.triggerCrowdExcitement(e==="goal"||e==="save"?1:.55),vt.crowdReaction(a?"cheer":"groan"),vt.setTension(.2),this.emitHud(!0)}advanceNextTurn(){if(hb(this.kicks)){this.phase="over";const{uG:i,cG:r}=mr(this.kicks),s=i>r;this.bannerTitle=s?`胜利！ ${i} : ${r}`:`惜败 ${i} : ${r}`,this.bannerTone=s?"good":"bad",this.statusHint=s?"你率队赢得了点球大战冠军！":"电脑在点球大战中胜出，可立即再战一局",this.emitHud(!0);return}const{uT:e,cT:t}=mr(this.kicks);this.setupTurn(e===t?"user":"cpu")}recordReplaySnapshot(e,t,i,r,s,a){this.replayFrames.length>=220&&this.replayFrames.shift(),this.replayFrames.push({shooterPos:e.clone(),shooterYaw:t,shooterPose:zm(i),keeperPos:r.clone(),keeperYaw:s,keeperPose:zm(a),ballPos:this.ballPos.clone(),ballQuat:this.world.ballMesh.quaternion.clone()})}computeDesiredCamera(e){const t=new z,i=new z;let r=40;if(this.phase==="replay"&&this.replayFrames.length>0){const o=this.replaySideSign;return t.set(o*6.9,1.68,3.6),i.set(this.world.ballMesh.position.x*.45,Math.max(.85,this.world.ballMesh.position.y*.72),Math.min(4.5,this.world.ballMesh.position.z*.35)),{pos:t,target:i,fov:36}}const s=this.shooterRig?this.shooterRig.root.position.x:0,a=Math.sin(this.clockTime*1.4)*.035;if(this.cameraMode==="tight")t.set(s*.22,1.95+a,15.8),i.set(this.keeperX*.18,1.18,0),r=38;else if(this.cameraMode==="wide")t.set(s*.18,3.65+a,19.6),i.set(0,1.12,1.2),r=42;else if(this.turnSide==="cpu")t.set(s*.18,2.28+a,16.6),i.set(this.keeperX*.22,1.18,.8),r=39;else{const o=this.phase==="runup"||this.phase==="flight"?.85:0;t.set(s*.28,2.22+a,17.5-o),i.set(this.aimX*.14,1.22,0),r=40}return(this.phase==="result"||this.phase==="over")&&(t.z-=.9,i.x=jt(this.world.ballMesh.position.x*.25,-1.6,1.6)),{pos:t,target:i,fov:r}}updateRefereePose(){const e=bo();e.spine.lean=.12,e.legL.abduct=.12,e.legR.abduct=.12,e.legL.knee=.14,e.legR.knee=.14,(this.phase==="user_shuttle"||this.phase==="cpu_ready")&&this.phaseTime<.55?e.armR={flex:1.45,abduct:.35,twist:.4,elbow:2.05}:this.currentOutcome==="goal"&&(e.armL={flex:1.15,abduct:.45,twist:0,elbow:.15}),this.refereeRig.applyPose(e)}updateUserKeeperFootwork(e,t){const i=(this.keys.right?1:0)-(this.keys.left?1:0),r=2.45;if(this.keeperLateralSpeed=i*r,i!==0){const s=Math.floor(this.keeperShufflePhase/Math.PI);this.keeperX=jt(this.keeperX+this.keeperLateralSpeed*e,-t,t),this.keeperShufflePhase+=Math.abs(this.keeperLateralSpeed)*e*6.8,Math.floor(this.keeperShufflePhase/Math.PI)!==s&&vt.footstep(.45)}}updateCamera(e){const t=this.computeDesiredCamera(e),i=1-Math.exp(-6.5*e);this.camPos.lerp(t.pos,i),this.camTarget.lerp(t.target,i),Math.abs(this.camera.fov-t.fov)>.05&&(this.camera.fov+=(t.fov-this.camera.fov)*i,this.camera.updateProjectionMatrix()),this.camShake=Math.max(0,this.camShake-e*.65);const r=(Math.random()-.5)*this.camShake,s=(Math.random()-.5)*this.camShake;this.camera.position.set(this.camPos.x+r,this.camPos.y+s,this.camPos.z),this.camera.lookAt(this.camTarget)}emitHud(e){var c;const{uT:t,cT:i,uG:r,cG:s}=mr(this.kicks),a=this.activeShooter,o=this.activeKeeper,l=this.phase==="user_select"?this.selectedStyle:this.phase==="user_shuttle"?this.activeShotStyle:((c=this.cpuShotPlan)==null?void 0:c.style)??this.activeShotStyle;this.onHudUpdate({phase:this.phase,turnSide:this.turnSide,shooter:a,keeper:o,shotStyle:l,shuttlePos:this.shuttlePos,shuttleLocked:this.shuttleLocked,shuttleGrade:this.shuttleGrade,shuttleGoalPct:this.shuttleGoalPct,arrowBlockedFlash:this.arrowBlockedTimer>0,kicks:this.kicks,userGoals:r,cpuGoals:s,userTaken:t,cpuTaken:i,roundNumber:Math.floor(Math.max(t,i))+(this.phase==="result"||this.phase==="over"?0:1),suddenDeath:t>=5&&i>=5,bannerTitle:this.bannerTitle,bannerTone:this.bannerTone,statusHint:this.statusHint,keeperIntuition:this.turnSide==="cpu"?this.keeperIntuition:null,activeArrows:{up:this.keys.up,down:this.keys.down,left:this.keys.left,right:this.keys.right,space:this.keys.space},committedDive:this.committedDive?{x:this.committedDive.x,y:this.committedDive.y}:null,cameraMode:this.cameraMode,canReplay:(this.phase==="result"||this.phase==="over")&&this.replayFrames.length>8,isReplaying:this.phase==="replay",lastSpeedKmh:this.lastSpeedKmh})}}function db(n){return Number.isFinite(n)?n:0}const Bm={classic:"直线爆射",curved:"弧线助跑",stutter:"节奏变奏"};function pb(n){return n?n.x<0&&n.y>0?"↖ 左上死角飞扑":n.x>0&&n.y>0?"↗ 右上死角飞扑":n.x<0&&n.y<0?"↙ 左下贴地扑救":n.x>0&&n.y<0?"↘ 右下贴地扑救":n.x<0?"← 左侧飞身扑救":n.x>0?"→ 右侧飞身扑救":n.y>0?"↑ 中路跃起托救":n.y<0?"↓ 中路下蹲封堵":"● 稳守中路":"中路待命"}function mb(){const[n,e]=Et.useState("select"),[t,i]=Et.useState(Gi[0].id),[r,s]=Et.useState(()=>Hi.slice(0,5).map(V=>V.id)),[a,o]=Et.useState(null),[l,c]=Et.useState(null),[h,f]=Et.useState("normal"),[d,m]=Et.useState(!1),[v,_]=Et.useState(null),[p,u]=Et.useState(null),g=Et.useRef(null),y=Et.useRef(null),S=Et.useRef(null),E=!!(t&&r.length===5),w=Et.useCallback((V,se,le)=>{vt.unlock();const ce=Gi.find(Je=>Je.id===V)??Gi[0],Ie=se.map(Je=>Hi.find(ot=>ot.id===Je)),et=Gi.filter(Je=>Je.id!==ce.id).sort((Je,ot)=>Pl(ot)-Pl(Je)),Re=le==="hard"?et[0]:Cl(et)[0],Ye=Hi.filter(Je=>!se.includes(Je.id)).sort((Je,ot)=>Rl(ot)-Rl(Je)),tt=le==="hard"?Ye.slice(0,7):le==="normal"?Ye.slice(0,11):Ye,Ve=Cl(tt).slice(0,5);_({userGK:ce,cpuGK:Re,userTeam:Ie,cpuTeam:Ve,diff:le,matchSeed:Date.now()}),e("match")},[]),x=Et.useCallback(()=>{vt.unlock(),i(Cl(Gi)[0].id),s(Cl(Hi).slice(0,5).map(V=>V.id))},[]);Et.useEffect(()=>{const V=se=>{se.code==="KeyM"&&!se.repeat&&m(vt.toggleMute()),n==="select"&&!se.repeat&&(se.code==="KeyR"?x():se.code==="Enter"&&t&&r.length===5&&w(t,r,h))};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[n,t,r,h,x,w]),Et.useEffect(()=>{if(n!=="match"||!v||!g.current)return;const V=new fb(g.current,{diff:v.diff,userGK:v.userGK,cpuGK:v.cpuGK,userTeam:v.userTeam,cpuTeam:v.cpuTeam,onHudUpdate:se=>u(se),onShuttleFrame:se=>{S.current&&(S.current.style.left=`${((se+1)*50).toFixed(2)}%`)}});return y.current=V,()=>{V.destroy(),y.current=null}},[n,v]);const M=Et.useMemo(()=>Gi.find(V=>V.id===(a??t))??Gi[0],[a,t]),C=Et.useMemo(()=>{const V=l??r[r.length-1]??Hi[0].id;return Hi.find(se=>se.id===V)??Hi[0]},[l,r]),A=V=>{s(se=>se.includes(V)?se.filter(le=>le!==V):se.length>=5?se:[...se,V])};if(n==="select")return O.jsxs("main",{className:"select-shell",children:[O.jsxs("header",{className:"select-header",children:[O.jsxs("div",{children:[O.jsx("h1",{children:"巅峰点球大战 · 3D 拟真赛场"}),O.jsxs("p",{children:["全三维人体骨骼动力学与真实球路物理重制。射门采用",O.jsx("strong",{children:"「四大脚法选择 + 中心完美点穿梭球定格」"}),"机制， 守门全程使用键盘 ",O.jsx("strong",{children:"↑ ↓ ← →"})," 横移封堵与八向飞身扑救。"]})]}),O.jsx("button",{id:"btn-toggle-audio-select",className:"btn",onClick:()=>m(vt.toggleMute()),children:d?"音效：已静音 (M)":"音效：球场原声 (M)"})]}),O.jsxs("section",{className:"controls-legend-bar","aria-label":"键盘操作指南",children:[O.jsxs("span",{className:"legend-item",children:[O.jsx("strong",{children:"四大射门方式："}),O.jsx("span",{className:"kbd",children:"1"})," 推射死角(90%) · ",O.jsx("span",{className:"kbd",children:"2"})," 大力爆射(80%) ·"," ",O.jsx("span",{className:"kbd",children:"3"})," 勺子点球(95%·固定中路) · ",O.jsx("span",{className:"kbd",children:"4"})," 节奏变化小跳步(90%·乱晃)"]}),O.jsxs("span",{className:"legend-item",children:[O.jsx("strong",{children:"中心完美点校准："}),"先选方式，再盯紧左右穿梭小球，对准",O.jsx("strong",{children:"中心完美点"}),"按下 ",O.jsx("span",{className:"kbd",children:"Space"})," 定格射门"]}),O.jsxs("span",{className:"legend-item",children:[O.jsx("strong",{children:"门将扑救："}),"助跑初段 ",O.jsx("span",{className:"kbd",children:"←"})," ",O.jsx("span",{className:"kbd",children:"→"})," 横移 · 起脚瞬间"," ",O.jsx("span",{className:"kbd",children:"↑"}),O.jsx("span",{className:"kbd",children:"↓"}),O.jsx("span",{className:"kbd",children:"←"}),O.jsx("span",{className:"kbd",children:"→"})," 八向真实飞扑"]})]}),O.jsxs("div",{className:"select-layout",children:[O.jsxs("aside",{className:"locker-sidebar",children:[O.jsxs("div",{className:"stage-3d-wrap",children:[O.jsx(tb,{keeper:M,player:C}),O.jsxs("div",{className:"stage-caption",children:[O.jsxs("span",{children:["门将：",M.name," (",Math.round(M.appearance.height*100),"cm)"]}),O.jsxs("span",{children:["主罚：",C.name," (",C.foot==="L"?"左脚":"右脚"," ·"," ",Math.round(C.appearance.height*100),"cm)"]})]})]}),O.jsxs("div",{className:"lineup-slots",children:[(()=>{const V=Gi.find(se=>se.id===t);return O.jsxs("div",{className:`slot-row ${V?"filled":""}`,children:[O.jsx("span",{className:"slot-tag",children:"GK"}),O.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[V&&O.jsx("img",{src:V.avatar,alt:V.name,className:"gk-mini-avatar"}),V?`${V.name} · ${V.nick}`:"未选择门将"]}),O.jsx("span",{style:{color:"var(--text-muted)",fontSize:12},children:V?`总评 ${Pl(V)}`:""})]})})(),[0,1,2,3,4].map(V=>{const se=r[V],le=se?Hi.find(ce=>ce.id===se):void 0;return O.jsxs("div",{className:`slot-row ${le?"filled":""}`,children:[O.jsxs("span",{className:"slot-tag",children:["#",V+1," 罚"]}),O.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[le&&O.jsx("img",{src:le.avatar,alt:le.name,className:"gk-mini-avatar"}),le?`${le.name} · ${le.nick}`:"待选主罚球员"]}),O.jsx("span",{style:{color:"var(--text-muted)",fontSize:12},children:le?`${le.foot==="L"?"左脚":"右脚"} · ${Rl(le)}`:"—"})]},V)})]}),O.jsxs("div",{children:[O.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:6},children:["赛场难度 · ",jl[h].desc]}),O.jsx("div",{className:"diff-group",children:["easy","normal","hard"].map(V=>O.jsx("button",{id:`btn-diff-${V}`,className:`diff-btn ${h===V?"active":""}`,onClick:()=>f(V),children:jl[V].label},V))})]}),O.jsxs("div",{className:"action-stack",children:[O.jsx("button",{id:"btn-random-squad",className:"btn",onClick:x,children:"随机阵容 (R)"}),O.jsx("button",{id:"btn-start-match",className:"btn btn-primary",disabled:!E,onClick:()=>w(t,r,h),children:"登场开赛 (Enter)"})]})]}),O.jsxs("div",{className:"roster-column",children:[O.jsxs("section",{className:"roster-section",children:[O.jsxs("h2",{children:["首发门将选择 · THE GOALKEEPERS' SHOW",O.jsx("span",{children:"全员 3D 专属形象与球衣完美还原 · 点击或悬停实时预览"})]}),O.jsx("div",{className:"athlete-grid",children:Gi.map(V=>{const se=t===V.id;return O.jsxs("div",{id:`card-gk-${V.id}`,className:`athlete-card ${se?"selected":""}`,onMouseEnter:()=>o(V.id),onMouseLeave:()=>o(null),onClick:()=>i(V.id),children:[O.jsxs("div",{className:"card-top",children:[O.jsxs("div",{className:"gk-card-identity",children:[O.jsx("img",{src:V.avatar,alt:V.name,className:"gk-avatar"}),O.jsxs("div",{children:[O.jsxs("div",{className:"athlete-name",children:[V.name," ·「",V.nick,"」"]}),O.jsxs("div",{className:"athlete-meta",children:[V.country," · ",Math.round(V.appearance.height*100),"cm · #",V.number]})]})]}),O.jsx("div",{className:"ovr-badge",children:Pl(V)})]}),O.jsx("div",{className:"stat-bars",children:[["反应",V.reflex],["臂展",V.reach],["预判",V.mind]].map(([le,ce])=>O.jsxs("div",{className:"stat-line",children:[O.jsx("span",{className:"lbl",children:le}),O.jsx("div",{className:"stat-track",children:O.jsx("div",{className:"stat-fill gk",style:{width:`${ce}%`}})}),O.jsx("span",{className:"stat-val",children:ce})]},le))})]},V.id)})})]}),O.jsxs("section",{className:"roster-section",children:[O.jsxs("h2",{children:["5 名点球主罚手（已选 ",r.length,"/5 · 全员 18 人专属 3D 形象还原）",O.jsx("span",{children:"点选顺序即出场主罚顺序 · 悬停或点选可在左侧 3D 展台实时预览专属外观与球衣"})]}),O.jsx("div",{className:"athlete-grid",children:Hi.map(V=>{const se=r.indexOf(V.id),le=se>=0,ce=!le&&r.length>=5;return O.jsxs("div",{id:`card-player-${V.id}`,className:`athlete-card ${le?"selected":""} ${ce?"dimmed":""}`,onMouseEnter:()=>c(V.id),onMouseLeave:()=>c(null),onClick:()=>A(V.id),children:[O.jsxs("div",{className:"card-top",children:[O.jsxs("div",{className:"gk-card-identity",children:[O.jsx("img",{src:V.avatar,alt:V.name,className:"gk-avatar"}),O.jsxs("div",{children:[O.jsxs("div",{className:"athlete-name",children:[V.name," ·「",V.nick,"」"]}),O.jsxs("div",{className:"athlete-meta",children:[V.pos," · ",V.country," · ",V.foot==="L"?"左脚":"右脚"," ·"," ",Bm[V.runupStyle]]})]})]}),O.jsx("div",{className:"ovr-badge",children:le?`#${se+1}`:Rl(V)})]}),O.jsx("div",{className:"stat-bars",children:[["力量",V.power],["精准",V.accuracy],["心理",V.composure]].map(([Ie,et])=>O.jsxs("div",{className:"stat-line",children:[O.jsx("span",{className:"lbl",children:Ie}),O.jsx("div",{className:"stat-track",children:O.jsx("div",{className:"stat-fill",style:{width:`${et}%`}})}),O.jsx("span",{className:"stat-val",children:et})]},Ie))})]},V.id)})})]})]})]})]});const L=(p==null?void 0:p.kicks)??[],{uT:D,cT:U,uG:P,cG:N}=mr(L),X=Math.min(8,Math.max(5,D,U)),G=V=>{const se=L.filter(ce=>ce.side===V),le=se.length>X?se.slice(-X):se;return O.jsx("div",{className:"pip-row",children:Array.from({length:X}).map((ce,Ie)=>{const et=le[Ie],Re=et?et.result==="goal"?"pip goal":"pip miss":"pip";return O.jsx("span",{className:Re},Ie)})})},F=V=>{if(!v)return null;const se=V==="user"?v.userTeam:v.cpuTeam,le=V==="user"?v.userGK:v.cpuGK,ce=L.filter(Re=>Re.side===V),Ie=(V==="user"?D:U)%5,et=p&&p.phase!=="over"&&p.turnSide===V;return O.jsxs("div",{className:"sheet-card",children:[O.jsxs("div",{className:"sheet-head",children:[O.jsx("strong",{children:V==="user"?"我方阵容":`电脑阵容（${jl[v.diff].label}）`}),O.jsxs("span",{style:{color:"var(--text-muted)",display:"inline-flex",alignItems:"center",gap:6},children:[O.jsx("img",{src:le.avatar,alt:le.name,className:"gk-mini-avatar"}),"门将：",le.name,"「",le.nick,"」(",Math.round(le.appearance.height*100),"cm)"]})]}),O.jsx("div",{className:"sheet-taker-list",children:se.map((Re,Ye)=>{const tt=ce.filter((Je,ot)=>ot%5===Ye),Ve=et&&Ye===Ie;return O.jsxs("div",{className:`taker-chip ${Ve?"current":""}`,children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:4,fontWeight:700},children:[O.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,whiteSpace:"nowrap"},children:[O.jsx("img",{src:Re.avatar,alt:Re.name,className:"gk-mini-avatar"}),Ye+1,". ",Re.name]}),O.jsx("span",{style:{color:"var(--text-muted)"},children:Re.foot})]}),O.jsx("div",{style:{color:"var(--text-muted)",letterSpacing:2},children:tt.length===0?"○":tt.map((Je,ot)=>O.jsx("span",{style:{color:Je.result==="goal"?"var(--turf-emerald)":"var(--danger-red)"},children:Je.result==="goal"?"●":"✕"},ot))})]},Re.id)})})]})},k=no[(p==null?void 0:p.shotStyle)??"placed"],W=(.5-k.perfectHalfWidth*.5)*100,Z=k.perfectHalfWidth*100,ae=(.5-k.goodHalfWidth*.5)*100,we=k.goodHalfWidth*100,J=p&&p.turnSide==="user"&&(p.phase==="user_shuttle"||p.phase==="runup"&&p.shuttleLocked);return O.jsxs("main",{className:"match-shell",children:[O.jsxs("div",{className:"viewport-frame",children:[O.jsx("div",{ref:g,className:"webgl-mount",id:"stadium-3d-canvas"}),O.jsxs("div",{className:"scorebug",children:[O.jsxs("div",{className:"scorebug-top",children:[O.jsx("span",{children:"PENALTY SHOOTOUT"}),O.jsx("span",{children:p!=null&&p.suddenDeath?"SUDDEN DEATH · 突然死亡":`ROUND ${Math.min(5,(p==null?void 0:p.roundNumber)??1)} / 5`})]}),O.jsxs("div",{className:"scorebug-teams",children:[O.jsxs("div",{className:"team-side",children:[O.jsxs("span",{className:"team-label",children:[O.jsx("span",{className:"kit-swatch",style:{background:"#2563eb"}}),"我方"]}),G("user")]}),O.jsxs("div",{className:"score-digits",children:[P," : ",N]}),O.jsxs("div",{className:"team-side right",children:[O.jsxs("span",{className:"team-label",children:["电脑",O.jsx("span",{className:"kit-swatch",style:{background:"#be123c"}})]}),G("cpu")]})]})]}),O.jsxs("div",{className:"top-toolbar",children:[(p==null?void 0:p.canReplay)&&O.jsx("button",{id:"btn-instant-replay",className:"hud-btn highlight",onClick:()=>{var V;return(V=y.current)==null?void 0:V.toggleReplay()},children:p.isReplaying?"退出回放 (R)":"慢镜回放 (R)"}),O.jsxs("button",{id:"btn-cycle-camera",className:"hud-btn",onClick:()=>{var V;return(V=y.current)==null?void 0:V.cycleCameraMode()},children:["机位：",(p==null?void 0:p.cameraMode)==="tight"?"近景特写":(p==null?void 0:p.cameraMode)==="wide"?"全景看台":"广播主视角"," (V)"]}),O.jsx("button",{id:"btn-toggle-audio-match",className:"hud-btn",onClick:()=>m(vt.toggleMute()),children:d?"静音 (M)":"音效 (M)"}),O.jsx("button",{id:"btn-exit-select",className:"hud-btn",onClick:()=>e("select"),children:"重新选人"})]}),(p==null?void 0:p.isReplaying)&&O.jsx("div",{className:"replay-badge",children:"REPLAY · 0.4x 慢镜回放"}),p&&p.bannerTitle&&p.phase==="result"&&O.jsx("div",{className:`result-banner ${p.bannerTone}`,children:O.jsx("div",{className:"title",children:p.bannerTitle})}),p&&p.phase==="user_select"&&O.jsxs("section",{className:"tactical-panel",id:"shot-mode-selector","aria-label":"选择射门方式",children:[O.jsxs("div",{className:"tactical-head",children:[O.jsxs("div",{className:"tactical-title",children:[O.jsx("span",{className:"step-badge",children:"STEP 1"}),"选择主罚方式"]}),O.jsx("span",{className:"tactical-sub",children:"按 1-4 直选 · 或 ←→ 选择后按 空格键"})]}),O.jsx("div",{className:"mode-grid",children:Yr.map(V=>{const se=no[V],le=p.shotStyle===V;return O.jsxs("button",{id:`btn-mode-${V}`,className:`mode-card ${le?"selected":""}`,onClick:()=>{var ce;return(ce=y.current)==null?void 0:ce.selectShotStyle(V,!0)},children:[O.jsxs("div",{className:"mode-card-top",children:[O.jsxs("span",{className:"mode-name",children:[O.jsx("span",{className:"mode-key",children:se.keyNum}),se.name]}),O.jsxs("span",{className:"mode-rate",children:["完美 ",se.perfectGoalPct,"%"]})]}),O.jsxs("div",{className:"mode-meta",children:[O.jsx("span",{children:se.tag}),O.jsx("span",{className:"mode-stars",children:se.difficultyStars})]}),O.jsxs("div",{className:"mode-rule",children:[se.arrowsEnabled?"方向键有效 · ":"固定踢中路 · ",se.shuttleDesc]})]},V)})})]}),J&&p&&O.jsxs("section",{className:"tactical-panel",id:"shuttle-calibration-panel","aria-label":"中心完美点穿梭校准",children:[O.jsxs("div",{className:"shuttle-mode-strip",children:[O.jsxs("div",{className:"tactical-title",children:[O.jsx("span",{className:"step-badge",children:"STEP 2"}),k.name,O.jsxs("span",{style:{fontSize:11,fontWeight:600,color:"var(--text-muted)"},children:["(",k.shuttleDesc,")"]})]}),!p.shuttleLocked&&O.jsx("button",{id:"btn-back-style",className:"reselect-btn",onClick:()=>{var V;return(V=y.current)==null?void 0:V.backToStyleSelect()},children:"重选方式 (Tab)"})]}),O.jsxs("div",{className:"shuttle-badges",children:[k.arrowsEnabled?O.jsx("span",{className:"rule-tag",children:"↑↓←→ 方向键瞄准有效"}):O.jsx("span",{className:`rule-tag locked-center ${p.arrowBlockedFlash?"flash-warn":""}`,children:p.arrowBlockedFlash?"方向键无效！勺子点球固定踢向中路":"固定踢向中路 · 方向键无效"}),O.jsxs("span",{className:"rule-tag",style:{borderColor:"rgba(56,189,248,0.4)",color:"#bae6fd",background:"rgba(14,116,144,0.2)"},children:["完美中心进球率 ",k.perfectGoalPct,"%"]})]}),O.jsxs("div",{className:"shuttle-bar-wrap",children:[O.jsxs("div",{className:"shuttle-track",id:"shuttle-track",children:[O.jsx("div",{className:"shuttle-good-zone",style:{left:`${ae}%`,width:`${we}%`}}),O.jsx("div",{className:"shuttle-perfect-zone",style:{left:`${W}%`,width:`${Z}%`}}),O.jsx("div",{className:"shuttle-center-pin"}),O.jsx("div",{ref:S,id:"shuttle-orb",className:`shuttle-orb ${p.shuttleLocked?`locked ${p.shuttleGrade??""}`:""}`,style:{left:`${((p.shuttlePos+1)*50).toFixed(2)}%`}})]}),O.jsxs("div",{className:"shuttle-scale-row",children:[O.jsx("span",{children:"偏左易被扑 / 偏出"}),O.jsx("span",{className:"center-lbl",children:"▲ 完美中心点 (按下 Space 定格)"}),O.jsx("span",{children:"偏右易被扑 / 偏出"})]})]}),p.shuttleLocked&&p.shuttleGrade&&O.jsx("div",{className:`shuttle-result-callout ${p.shuttleGrade}`,children:p.shuttleGrade==="perfect"?`★ 完美定格中心点！当前射门进球率 ${p.shuttleGoalPct}%`:p.shuttleGrade==="good"?`● 接近中心点 · 当前射门进球率 ${p.shuttleGoalPct}%`:`▲ 偏离中心过大 · 进球率降至 ${p.shuttleGoalPct}%（高概率被扑/中框/踢飞）`})]}),p&&O.jsxs("div",{className:"bottom-hud",children:[O.jsxs("div",{className:"duel-box",children:[O.jsxs("div",{className:"duel-row",children:[O.jsx("span",{children:"主罚射手"}),O.jsxs("strong",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[O.jsx("img",{src:p.shooter.avatar,alt:p.shooter.name,className:"gk-mini-avatar"}),"#",p.shooter.number," ",p.shooter.name,"「",p.shooter.nick,"」"]}),O.jsxs("span",{children:["(",p.shooter.foot==="L"?"左脚":"右脚"," · ",Bm[p.shooter.runupStyle],")"]})]}),O.jsxs("div",{className:"duel-row",children:[O.jsx("span",{children:"把守球门"}),O.jsxs("strong",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[O.jsx("img",{src:p.keeper.avatar,alt:p.keeper.name,className:"gk-mini-avatar"}),"#",p.keeper.number," ",p.keeper.name,"「",p.keeper.nick,"」"]}),O.jsxs("span",{children:["(",Math.round(p.keeper.appearance.height*100),"cm)"]})]}),p.keeperIntuition&&O.jsx("div",{className:"intuition-tip",children:p.keeperIntuition})]}),O.jsx("div",{className:"status-pill",children:p.statusHint}),O.jsxs("div",{className:"keycluster-box",children:[O.jsx("div",{className:"keycluster-label",children:p.turnSide==="cpu"?O.jsxs(O.Fragment,{children:[O.jsx("strong",{children:"门将键盘操控"}),O.jsx("span",{children:pb(p.committedDive)})]}):p.phase==="user_select"?O.jsxs(O.Fragment,{children:[O.jsx("strong",{children:"选择射门方式"}),O.jsx("span",{children:"1-4 或 ←→ + 空格"})]}):k.arrowsEnabled?O.jsxs(O.Fragment,{children:[O.jsx("strong",{children:"射手键盘操控"}),O.jsx("span",{children:"方向键瞄准 · 空格定格"})]}):O.jsxs(O.Fragment,{children:[O.jsx("strong",{children:"勺子中路锁定"}),O.jsx("span",{children:"方向键无效 · 空格定格"})]})}),O.jsxs("div",{className:"dpad-grid","aria-hidden":"true",children:[O.jsx("span",{}),O.jsx("span",{className:`keycap ${p.activeArrows.up?"lit":""}`,children:"↑"}),O.jsx("span",{}),O.jsx("span",{className:`keycap ${p.activeArrows.left?"lit":""}`,children:"←"}),O.jsx("span",{className:`keycap ${p.activeArrows.down?"lit":""}`,children:"↓"}),O.jsx("span",{className:`keycap ${p.activeArrows.right?"lit":""}`,children:"→"})]})]})]}),(p==null?void 0:p.phase)==="over"&&v&&O.jsx("div",{className:"over-modal",children:O.jsxs("div",{className:"over-card",children:[O.jsx("h2",{children:p.bannerTitle}),O.jsx("div",{style:{color:"var(--text-secondary)",fontSize:14},children:p.statusHint}),O.jsxs("div",{className:"action-stack",style:{justifyContent:"center",marginTop:6},children:[O.jsx("button",{id:"btn-rematch",className:"btn btn-primary",onClick:()=>w(v.userGK.id,v.userTeam.map(V=>V.id),v.diff),children:"同阵容再战"}),p.canReplay&&O.jsx("button",{id:"btn-over-replay",className:"btn",onClick:()=>{var V;return(V=y.current)==null?void 0:V.toggleReplay()},children:"制胜球慢镜 (R)"}),O.jsx("button",{id:"btn-over-reselect",className:"btn",onClick:()=>e("select"),children:"重新组建阵容"})]})]})})]}),O.jsxs("section",{className:"match-sheets",children:[F("user"),F("cpu")]})]})}Qv(document.getElementById("root")).render(O.jsx(mb,{}));
