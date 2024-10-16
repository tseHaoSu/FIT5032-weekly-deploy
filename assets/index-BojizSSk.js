(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ff(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Qe={},Ci=[],Yn=()=>{},lA=()=>!1,zc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),pf=t=>t.startsWith("onUpdate:"),kt=Object.assign,mf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cA=Object.prototype.hasOwnProperty,je=(t,e)=>cA.call(t,e),ge=Array.isArray,Pi=t=>Ma(t)==="[object Map]",Kc=t=>Ma(t)==="[object Set]",Ym=t=>Ma(t)==="[object Date]",Ee=t=>typeof t=="function",ct=t=>typeof t=="string",Ln=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",Pv=t=>(Je(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),kv=Object.prototype.toString,Ma=t=>kv.call(t),uA=t=>Ma(t).slice(8,-1),xv=t=>Ma(t)==="[object Object]",gf=t=>ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zo=ff(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hA=/-(\w)/g,hn=Gc(t=>t.replace(hA,(e,n)=>n?n.toUpperCase():"")),dA=/\B([A-Z])/g,ti=Gc(t=>t.replace(dA,"-$1").toLowerCase()),Qc=Gc(t=>t.charAt(0).toUpperCase()+t.slice(1)),jl=Gc(t=>t?`on${Qc(t)}`:""),ns=(t,e)=>!Object.is(t,e),Wl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Nv=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jm;const Yc=()=>Jm||(Jm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function La(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ct(r)?gA(r):La(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ct(t)||Je(t))return t}const fA=/;(?![^(]*\))/g,pA=/:([^]+)/,mA=/\/\*[^]*?\*\//g;function gA(t){const e={};return t.replace(mA,"").split(fA).forEach(n=>{if(n){const r=n.split(pA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function dn(t){let e="";if(ct(t))e=t;else if(ge(t))for(let n=0;n<t.length;n++){const r=dn(t[n]);r&&(e+=r+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function _f(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ct(e)&&(t.class=dn(e)),n&&(t.style=La(n)),t}const _A="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yA=ff(_A);function Ov(t){return!!t||t===""}function vA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Jc(t[r],e[r]);return n}function Jc(t,e){if(t===e)return!0;let n=Ym(t),r=Ym(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ln(t),r=Ln(e),n||r)return t===e;if(n=ge(t),r=ge(e),n||r)return n&&r?vA(t,e):!1;if(n=Je(t),r=Je(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Jc(t[o],e[o]))return!1}}return String(t)===String(e)}function EA(t,e){return t.findIndex(n=>Jc(n,e))}const Dv=t=>!!(t&&t.__v_isRef===!0),ft=t=>ct(t)?t:t==null?"":ge(t)||Je(t)&&(t.toString===kv||!Ee(t.toString))?Dv(t)?ft(t.value):JSON.stringify(t,Mv,2):String(t),Mv=(t,e)=>Dv(e)?Mv(t,e.value):Pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ah(r,i)+" =>"]=s,n),{})}:Kc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ah(n))}:Ln(e)?ah(e):Je(e)&&!ge(e)&&!xv(e)?String(e):e,ah=(t,e="")=>{var n;return Ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let en;class Lv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=en;try{return en=this,e()}finally{en=n}}}on(){en=this}off(){en=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Va(t){return new Lv(t)}function Xc(){return en}function yf(t,e=!1){en&&en.cleanups.push(t)}let Xe;const lh=new WeakSet;class Vv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,en&&en.active&&en.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,lh.has(this)&&(lh.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xm(this),Bv(this);const e=Xe,n=On;Xe=this,On=!0;try{return this.fn()}finally{$v(this),Xe=e,On=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wf(e);this.deps=this.depsTail=void 0,Xm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?lh.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yh(this)&&this.run()}get dirty(){return Yh(this)}}let Fv=0,Ko,Go;function Uv(t,e=!1){if(t.flags|=8,e){t.next=Go,Go=t;return}t.next=Ko,Ko=t}function vf(){Fv++}function Ef(){if(--Fv>0)return;if(Go){let e=Go;for(Go=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ko;){let e=Ko;for(Ko=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $v(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),wf(r),wA(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Yh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ha))return;t.globalVersion=ha;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Yh(t)){t.flags&=-3;return}const n=Xe,r=On;Xe=t,On=!0;try{Bv(t);const s=t.fn(t._value);(e.version===0||ns(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Xe=n,On=r,$v(t),t.flags&=-3}}function wf(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)wf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function wA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let On=!0;const Wv=[];function ps(){Wv.push(On),On=!1}function ms(){const t=Wv.pop();On=t===void 0?!0:t}function Xm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Xe;Xe=void 0;try{e()}finally{Xe=n}}}let ha=0;class bA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Xe||!On||Xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Xe)n=this.activeLink=new bA(Xe,this),Xe.deps?(n.prevDep=Xe.depsTail,Xe.depsTail.nextDep=n,Xe.depsTail=n):Xe.deps=Xe.depsTail=n,qv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Xe.depsTail,n.nextDep=void 0,Xe.depsTail.nextDep=n,Xe.depsTail=n,Xe.deps===n&&(Xe.deps=r)}return n}trigger(e){this.version++,ha++,this.notify(e)}notify(e){vf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ef()}}}function qv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)qv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ic=new WeakMap,Ds=Symbol(""),Jh=Symbol(""),da=Symbol("");function qt(t,e,n){if(On&&Xe){let r=ic.get(t);r||ic.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Zc),s.map=r,s.key=n),s.track()}}function _r(t,e,n,r,s,i){const o=ic.get(t);if(!o){ha++;return}const a=l=>{l&&l.trigger()};if(vf(),e==="clear")o.forEach(a);else{const l=ge(t),u=l&&gf(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===da||!Ln(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(da)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Ds)),Pi(t)&&a(o.get(Jh)));break;case"delete":l||(a(o.get(Ds)),Pi(t)&&a(o.get(Jh)));break;case"set":Pi(t)&&a(o.get(Ds));break}}Ef()}function TA(t,e){const n=ic.get(t);return n&&n.get(e)}function gi(t){const e=Ve(t);return e===t?e:(qt(e,"iterate",da),In(t)?e:e.map(Ht))}function eu(t){return qt(t=Ve(t),"iterate",da),t}const IA={__proto__:null,[Symbol.iterator](){return ch(this,Symbol.iterator,Ht)},concat(...t){return gi(this).concat(...t.map(e=>ge(e)?gi(e):e))},entries(){return ch(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return hr(this,"every",t,e,void 0,arguments)},filter(t,e){return hr(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return hr(this,"find",t,e,Ht,arguments)},findIndex(t,e){return hr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hr(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return hr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hr(this,"forEach",t,e,void 0,arguments)},includes(...t){return uh(this,"includes",t)},indexOf(...t){return uh(this,"indexOf",t)},join(t){return gi(this).join(t)},lastIndexOf(...t){return uh(this,"lastIndexOf",t)},map(t,e){return hr(this,"map",t,e,void 0,arguments)},pop(){return Co(this,"pop")},push(...t){return Co(this,"push",t)},reduce(t,...e){return Zm(this,"reduce",t,e)},reduceRight(t,...e){return Zm(this,"reduceRight",t,e)},shift(){return Co(this,"shift")},some(t,e){return hr(this,"some",t,e,void 0,arguments)},splice(...t){return Co(this,"splice",t)},toReversed(){return gi(this).toReversed()},toSorted(t){return gi(this).toSorted(t)},toSpliced(...t){return gi(this).toSpliced(...t)},unshift(...t){return Co(this,"unshift",t)},values(){return ch(this,"values",Ht)}};function ch(t,e,n){const r=eu(t),s=r[e]();return r!==t&&!In(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const AA=Array.prototype;function hr(t,e,n,r,s,i){const o=eu(t),a=o!==t&&!In(t),l=o[e];if(l!==AA[e]){const d=l.apply(t,i);return a?Ht(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,Ht(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function Zm(t,e,n,r){const s=eu(t);let i=n;return s!==t&&(In(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Ht(a),l,t)}),s[e](i,...r)}function uh(t,e,n){const r=Ve(t);qt(r,"iterate",da);const s=r[e](...n);return(s===-1||s===!1)&&If(n[0])?(n[0]=Ve(n[0]),r[e](...n)):s}function Co(t,e,n=[]){ps(),vf();const r=Ve(t)[e].apply(t,n);return Ef(),ms(),r}const RA=ff("__proto__,__v_isRef,__isVue"),Hv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ln));function SA(t){Ln(t)||(t=String(t));const e=Ve(this);return qt(e,"has",t),e.hasOwnProperty(t)}class zv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?VA:Yv:i?Qv:Gv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ge(e);if(!s){let l;if(o&&(l=IA[n]))return l;if(n==="hasOwnProperty")return SA}const a=Reflect.get(e,n,lt(e)?e:r);return(Ln(n)?Hv.has(n):RA(n))||(s||qt(e,"get",n),i)?a:lt(a)?o&&gf(n)?a:a.value:Je(a)?s?tu(a):ni(a):a}}class Kv extends zv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Fs(i);if(!In(r)&&!Fs(r)&&(i=Ve(i),r=Ve(r)),!ge(e)&&lt(i)&&!lt(r))return l?!1:(i.value=r,!0)}const o=ge(e)&&gf(n)?Number(n)<e.length:je(e,n),a=Reflect.set(e,n,r,lt(e)?e:s);return e===Ve(s)&&(o?ns(r,i)&&_r(e,"set",n,r):_r(e,"add",n,r)),a}deleteProperty(e,n){const r=je(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&_r(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ln(n)||!Hv.has(n))&&qt(e,"has",n),r}ownKeys(e){return qt(e,"iterate",ge(e)?"length":Ds),Reflect.ownKeys(e)}}class CA extends zv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const PA=new Kv,kA=new CA,xA=new Kv(!0);const Xh=t=>t,El=t=>Reflect.getPrototypeOf(t);function NA(t,e,n){return function(...r){const s=this.__v_raw,i=Ve(s),o=Pi(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Xh:e?Zh:Ht;return!e&&qt(i,"iterate",l?Jh:Ds),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function wl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function OA(t,e){const n={get(s){const i=this.__v_raw,o=Ve(i),a=Ve(s);t||(ns(s,a)&&qt(o,"get",s),qt(o,"get",a));const{has:l}=El(o),u=e?Xh:t?Zh:Ht;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&qt(Ve(s),"iterate",Ds),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ve(i),a=Ve(s);return t||(ns(s,a)&&qt(o,"has",s),qt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Ve(a),u=e?Xh:t?Zh:Ht;return!t&&qt(l,"iterate",Ds),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return kt(n,t?{add:wl("add"),set:wl("set"),delete:wl("delete"),clear:wl("clear")}:{add(s){!e&&!In(s)&&!Fs(s)&&(s=Ve(s));const i=Ve(this);return El(i).has.call(i,s)||(i.add(s),_r(i,"add",s,s)),this},set(s,i){!e&&!In(i)&&!Fs(i)&&(i=Ve(i));const o=Ve(this),{has:a,get:l}=El(o);let u=a.call(o,s);u||(s=Ve(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?ns(i,h)&&_r(o,"set",s,i):_r(o,"add",s,i),this},delete(s){const i=Ve(this),{has:o,get:a}=El(i);let l=o.call(i,s);l||(s=Ve(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&_r(i,"delete",s,void 0),u},clear(){const s=Ve(this),i=s.size!==0,o=s.clear();return i&&_r(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=NA(s,t,e)}),n}function bf(t,e){const n=OA(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(je(n,s)&&s in r?n:r,s,i)}const DA={get:bf(!1,!1)},MA={get:bf(!1,!0)},LA={get:bf(!0,!1)};const Gv=new WeakMap,Qv=new WeakMap,Yv=new WeakMap,VA=new WeakMap;function FA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function UA(t){return t.__v_skip||!Object.isExtensible(t)?0:FA(uA(t))}function ni(t){return Fs(t)?t:Tf(t,!1,PA,DA,Gv)}function Jv(t){return Tf(t,!1,xA,MA,Qv)}function tu(t){return Tf(t,!0,kA,LA,Yv)}function Tf(t,e,n,r,s){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=UA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rs(t){return Fs(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Fs(t){return!!(t&&t.__v_isReadonly)}function In(t){return!!(t&&t.__v_isShallow)}function If(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function Af(t){return!je(t,"__v_skip")&&Object.isExtensible(t)&&Nv(t,"__v_skip",!0),t}const Ht=t=>Je(t)?ni(t):t,Zh=t=>Je(t)?tu(t):t;function lt(t){return t?t.__v_isRef===!0:!1}function fe(t){return Zv(t,!1)}function Xv(t){return Zv(t,!0)}function Zv(t,e){return lt(t)?t:new BA(t,e)}class BA{constructor(e,n){this.dep=new Zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||In(e)||Fs(e);e=r?e:Ve(e),ns(e,n)&&(this._rawValue=e,this._value=r?e:Ht(e),this.dep.trigger())}}function N(t){return lt(t)?t.value:t}const $A={get:(t,e,n)=>e==="__v_raw"?t:N(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return lt(s)&&!lt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function eE(t){return rs(t)?t:new Proxy(t,$A)}class jA{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Zc,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function WA(t){return new jA(t)}function Rf(t){const e=ge(t)?new Array(t.length):{};for(const n in t)e[n]=nE(t,n);return e}class qA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return TA(Ve(this._object),this._key)}}class HA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function tE(t,e,n){return lt(t)?t:Ee(t)?new HA(t):Je(t)&&arguments.length>1?nE(t,e,n):fe(t)}function nE(t,e,n){const r=t[e];return lt(r)?r:new qA(t,e,n)}class zA{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ha-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Xe!==this)return Uv(this,!0),!0}get value(){const e=this.dep.track();return jv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function KA(t,e,n=!1){let r,s;return Ee(t)?r=t:(r=t.get,s=t.set),new zA(r,s,n)}const bl={},oc=new WeakMap;let Ss;function GA(t,e=!1,n=Ss){if(n){let r=oc.get(n);r||oc.set(n,r=[]),r.push(t)}}function QA(t,e,n=Qe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=L=>s?L:In(L)||s===!1||s===0?yr(L,1):yr(L);let h,d,p,g,_=!1,w=!1;if(lt(t)?(d=()=>t.value,_=In(t)):rs(t)?(d=()=>u(t),_=!0):ge(t)?(w=!0,_=t.some(L=>rs(L)||In(L)),d=()=>t.map(L=>{if(lt(L))return L.value;if(rs(L))return u(L);if(Ee(L))return l?l(L,2):L()})):Ee(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){ps();try{p()}finally{ms()}}const L=Ss;Ss=h;try{return l?l(t,3,[g]):t(g)}finally{Ss=L}}:d=Yn,e&&s){const L=d,q=s===!0?1/0:s;d=()=>yr(L(),q)}const I=Xc(),x=()=>{h.stop(),I&&mf(I.effects,h)};if(i&&e){const L=e;e=(...q)=>{L(...q),x()}}let M=w?new Array(t.length).fill(bl):bl;const O=L=>{if(!(!(h.flags&1)||!h.dirty&&!L))if(e){const q=h.run();if(s||_||(w?q.some((Z,S)=>ns(Z,M[S])):ns(q,M))){p&&p();const Z=Ss;Ss=h;try{const S=[q,M===bl?void 0:w&&M[0]===bl?[]:M,g];l?l(e,3,S):e(...S),M=q}finally{Ss=Z}}}else h.run()};return a&&a(O),h=new Vv(d),h.scheduler=o?()=>o(O,!1):O,g=L=>GA(L,!1,h),p=h.onStop=()=>{const L=oc.get(h);if(L){if(l)l(L,4);else for(const q of L)q();oc.delete(h)}},e?r?O(!0):M=h.run():o?o(O.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function yr(t,e=1/0,n){if(e<=0||!Je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,lt(t))yr(t.value,e,n);else if(ge(t))for(let r=0;r<t.length;r++)yr(t[r],e,n);else if(Kc(t)||Pi(t))t.forEach(r=>{yr(r,e,n)});else if(xv(t)){for(const r in t)yr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&yr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fa(t,e,n,r){try{return r?t(...r):t()}catch(s){nu(s,e,n)}}function nr(t,e,n,r){if(Ee(t)){const s=Fa(t,e,n,r);return s&&Pv(s)&&s.catch(i=>{nu(i,e,n)}),s}if(ge(t)){const s=[];for(let i=0;i<t.length;i++)s.push(nr(t[i],e,n,r));return s}}function nu(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Qe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){ps(),Fa(i,null,10,[t,l,u]),ms();return}}YA(t,n,s,r,o)}function YA(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const tn=[];let zn=-1;const ki=[];let zr=null,Ei=0;const rE=Promise.resolve();let ac=null;function En(t){const e=ac||rE;return t?e.then(this?t.bind(this):t):e}function JA(t){let e=zn+1,n=tn.length;for(;e<n;){const r=e+n>>>1,s=tn[r],i=fa(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Sf(t){if(!(t.flags&1)){const e=fa(t),n=tn[tn.length-1];!n||!(t.flags&2)&&e>=fa(n)?tn.push(t):tn.splice(JA(e),0,t),t.flags|=1,sE()}}function sE(){ac||(ac=rE.then(oE))}function XA(t){ge(t)?ki.push(...t):zr&&t.id===-1?zr.splice(Ei+1,0,t):t.flags&1||(ki.push(t),t.flags|=1),sE()}function eg(t,e,n=zn+1){for(;n<tn.length;n++){const r=tn[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;tn.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function iE(t){if(ki.length){const e=[...new Set(ki)].sort((n,r)=>fa(n)-fa(r));if(ki.length=0,zr){zr.push(...e);return}for(zr=e,Ei=0;Ei<zr.length;Ei++){const n=zr[Ei];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zr=null,Ei=0}}const fa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function oE(t){try{for(zn=0;zn<tn.length;zn++){const e=tn[zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zn<tn.length;zn++){const e=tn[zn];e&&(e.flags&=-2)}zn=-1,tn.length=0,iE(),ac=null,(tn.length||ki.length)&&oE()}}let wt=null,aE=null;function lc(t){const e=wt;return wt=t,aE=t&&t.type.__scopeId||null,e}function J(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fg(-1);const i=lc(e);let o;try{o=t(...s)}finally{lc(i),r._d&&fg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cc(t,e){if(wt===null)return t;const n=lu(wt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Qe]=e[s];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&yr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function As(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ps(),nr(l,n,8,[t.el,a,t,e]),ms())}}const lE=Symbol("_vte"),ZA=t=>t.__isTeleport,Qo=t=>t&&(t.disabled||t.disabled===""),eR=t=>t&&(t.defer||t.defer===""),tg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ng=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,ed=(t,e)=>{const n=t&&t.to;return ct(n)?e?e(n):null:n},tR={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:h,pc:d,pbc:p,o:{insert:g,querySelector:_,createText:w,createComment:I}}=u,x=Qo(e.props);let{shapeFlag:M,children:O,dynamicChildren:L}=e;if(t==null){const q=e.el=w(""),Z=e.anchor=w("");g(q,n,r),g(Z,n,r);const S=(E,T)=>{M&16&&(s&&s.isCE&&(s.ce._teleportTarget=E),h(O,E,T,s,i,o,a,l))},v=()=>{const E=e.target=ed(e.props,_),T=cE(E,e,w,g);E&&(o!=="svg"&&tg(E)?o="svg":o!=="mathml"&&ng(E)&&(o="mathml"),x||(S(E,T),ql(e,!1)))};x&&(S(n,Z),ql(e,!0)),eR(e.props)?on(v,i):v()}else{e.el=t.el,e.targetStart=t.targetStart;const q=e.anchor=t.anchor,Z=e.target=t.target,S=e.targetAnchor=t.targetAnchor,v=Qo(t.props),E=v?n:Z,T=v?q:S;if(o==="svg"||tg(Z)?o="svg":(o==="mathml"||ng(Z))&&(o="mathml"),L?(p(t.dynamicChildren,L,E,s,i,o,a),xf(t,e,!0)):l||d(t,e,E,T,s,i,o,a,!1),x)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Tl(e,n,q,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const C=e.target=ed(e.props,_);C&&Tl(e,C,null,u,0)}else v&&Tl(e,Z,S,u,1);ql(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:h,target:d,props:p}=t;if(d&&(s(u),s(h)),i&&s(l),o&16){const g=i||!Qo(p);for(let _=0;_<a.length;_++){const w=a[_];r(w,e,n,g,!!w.dynamicChildren)}}},move:Tl,hydrate:nR};function Tl(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),(!d||Qo(h))&&l&16)for(let p=0;p<u.length;p++)s(u[p],e,n,2);d&&r(a,e,n)}function nR(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:h}},d){const p=e.target=ed(e.props,l);if(p){const g=Qo(e.props),_=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)e.anchor=d(o(t),e,a(t),n,r,s,i),e.targetStart=_,e.targetAnchor=_&&o(_);else{e.anchor=o(t);let w=_;for(;w;){if(w&&w.nodeType===8){if(w.data==="teleport start anchor")e.targetStart=w;else if(w.data==="teleport anchor"){e.targetAnchor=w,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}w=o(w)}e.targetAnchor||cE(p,e,h,u),d(_&&o(_),e,p,n,r,s,i)}ql(e,g)}return e.anchor&&o(e.anchor)}const rR=tR;function ql(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function cE(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[lE]=i,t&&(r(s,t),r(i,t)),i}function Cf(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Cf(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ue(t,e){return Ee(t)?kt({name:t.name},e,{setup:t}):t}function rg(){const t=Sn();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function uE(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function td(t,e,n,r,s=!1){if(ge(t)){t.forEach((_,w)=>td(_,e&&(ge(e)?e[w]:e),n,r,s));return}if(xi(r)&&!s)return;const i=r.shapeFlag&4?lu(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Qe?a.refs={}:a.refs,d=a.setupState,p=Ve(d),g=d===Qe?()=>!1:_=>je(p,_);if(u!=null&&u!==l&&(ct(u)?(h[u]=null,g(u)&&(d[u]=null)):lt(u)&&(u.value=null)),Ee(l))Fa(l,a,12,[o,h]);else{const _=ct(l),w=lt(l);if(_||w){const I=()=>{if(t.f){const x=_?g(l)?d[l]:h[l]:l.value;s?ge(x)&&mf(x,i):ge(x)?x.includes(i)||x.push(i):_?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else _?(h[l]=o,g(l)&&(d[l]=o)):w&&(l.value=o,t.k&&(h[t.k]=o))};o?(I.id=-1,on(I,n)):I()}}}Yc().requestIdleCallback;Yc().cancelIdleCallback;const xi=t=>!!t.type.__asyncLoader,hE=t=>t.type.__isKeepAlive;function sR(t,e){dE(t,"a",e)}function iR(t,e){dE(t,"da",e)}function dE(t,e,n=St){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ru(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hE(s.parent.vnode)&&oR(r,e,n,s),s=s.parent}}function oR(t,e,n,r){const s=ru(e,t,r,!0);su(()=>{mf(r[e],s)},n)}function ru(t,e,n=St,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ps();const a=Ua(n),l=nr(e,n,t,o);return a(),ms(),l});return r?s.unshift(i):s.push(i),i}}const Nr=t=>(e,n=St)=>{(!ga||t==="sp")&&ru(t,(...r)=>e(...r),n)},aR=Nr("bm"),gs=Nr("m"),lR=Nr("bu"),cR=Nr("u"),fE=Nr("bum"),su=Nr("um"),uR=Nr("sp"),hR=Nr("rtg"),dR=Nr("rtc");function fR(t,e=St){ru("ec",t,e)}const pE="components";function mE(t,e){return _E(pE,t,!0,e)||t}const gE=Symbol.for("v-ndc");function sg(t){return ct(t)?_E(pE,t,!1)||t:t||gE}function _E(t,e,n=!0,r=!1){const s=wt||St;if(s){const i=s.type;{const a=XR(i,!1);if(a&&(a===e||a===hn(e)||a===Qc(hn(e))))return i}const o=ig(s[t]||i[t],e)||ig(s.appContext[t],e);return!o&&r?i:o}}function ig(t,e){return t&&(t[e]||t[hn(e)]||t[Qc(hn(e))])}function Bi(t,e,n,r){let s;const i=n,o=ge(t);if(o||ct(t)){const a=o&&rs(t);let l=!1;a&&(l=!In(t),t=eu(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?Ht(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Je(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function Ze(t,e,n={},r,s){if(wt.ce||wt.parent&&xi(wt.parent)&&wt.parent.ce)return ie(),Ye(Et,null,[z("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),ie();const o=i&&yE(i(n)),a=n.key||o&&o.key,l=Ye(Et,{key:(a&&!Ln(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function yE(t){return t.some(e=>ma(e)?!(e.type===Sr||e.type===Et&&!yE(e.children)):!0)?t:null}const nd=t=>t?LE(t)?lu(t):nd(t.parent):null,Yo=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nd(t.parent),$root:t=>nd(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pf(t),$forceUpdate:t=>t.f||(t.f=()=>{Sf(t.update)}),$nextTick:t=>t.n||(t.n=En.bind(t.proxy)),$watch:t=>MR.bind(t)}),hh=(t,e)=>t!==Qe&&!t.__isScriptSetup&&je(t,e),pR={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hh(r,e))return o[e]=1,r[e];if(s!==Qe&&je(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&je(u,e))return o[e]=3,i[e];if(n!==Qe&&je(n,e))return o[e]=4,n[e];rd&&(o[e]=0)}}const h=Yo[e];let d,p;if(h)return e==="$attrs"&&qt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Qe&&je(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,je(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hh(s,e)?(s[e]=n,!0):r!==Qe&&je(r,e)?(r[e]=n,!0):je(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Qe&&je(t,o)||hh(e,o)||(a=i[0])&&je(a,o)||je(r,o)||je(Yo,o)||je(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:je(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function og(t){return ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rd=!0;function mR(t){const e=Pf(t),n=t.proxy,r=t.ctx;rd=!1,e.beforeCreate&&ag(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:_,activated:w,deactivated:I,beforeDestroy:x,beforeUnmount:M,destroyed:O,unmounted:L,render:q,renderTracked:Z,renderTriggered:S,errorCaptured:v,serverPrefetch:E,expose:T,inheritAttrs:C,components:P,directives:A,filters:ut}=e;if(u&&gR(u,r,null),o)for(const pe in o){const Ie=o[pe];Ee(Ie)&&(r[pe]=Ie.bind(n))}if(s){const pe=s.call(n,n);Je(pe)&&(t.data=ni(pe))}if(rd=!0,i)for(const pe in i){const Ie=i[pe],vt=Ee(Ie)?Ie.bind(n,n):Ee(Ie.get)?Ie.get.bind(n,n):Yn,rn=!Ee(Ie)&&Ee(Ie.set)?Ie.set.bind(n):Yn,ht=ke({get:vt,set:rn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>ht.value,set:ot=>ht.value=ot})}if(a)for(const pe in a)vE(a[pe],r,n,pe);if(l){const pe=Ee(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(Ie=>{Jo(Ie,pe[Ie])})}h&&ag(h,t,"c");function Be(pe,Ie){ge(Ie)?Ie.forEach(vt=>pe(vt.bind(n))):Ie&&pe(Ie.bind(n))}if(Be(aR,d),Be(gs,p),Be(lR,g),Be(cR,_),Be(sR,w),Be(iR,I),Be(fR,v),Be(dR,Z),Be(hR,S),Be(fE,M),Be(su,L),Be(uR,E),ge(T))if(T.length){const pe=t.exposed||(t.exposed={});T.forEach(Ie=>{Object.defineProperty(pe,Ie,{get:()=>n[Ie],set:vt=>n[Ie]=vt})})}else t.exposed||(t.exposed={});q&&t.render===Yn&&(t.render=q),C!=null&&(t.inheritAttrs=C),P&&(t.components=P),A&&(t.directives=A),E&&uE(t)}function gR(t,e,n=Yn){ge(t)&&(t=sd(t));for(const r in t){const s=t[r];let i;Je(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),lt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ag(t,e,n){nr(ge(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function vE(t,e,n,r){let s=r.includes(".")?xE(n,r):()=>n[r];if(ct(t)){const i=e[t];Ee(i)&&Pt(s,i)}else if(Ee(t))Pt(s,t.bind(n));else if(Je(t))if(ge(t))t.forEach(i=>vE(i,e,n,r));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&Pt(s,i,t)}}function Pf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>uc(l,u,o,!0)),uc(l,e,o)),Je(e)&&i.set(e,l),l}function uc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&uc(t,i,n,!0),s&&s.forEach(o=>uc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=_R[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _R={data:lg,props:cg,emits:cg,methods:Uo,computed:Uo,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Uo,directives:Uo,watch:vR,provide:lg,inject:yR};function lg(t,e){return e?t?function(){return kt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function yR(t,e){return Uo(sd(t),sd(e))}function sd(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function Uo(t,e){return t?kt(Object.create(null),t,e):e}function cg(t,e){return t?ge(t)&&ge(e)?[...new Set([...t,...e])]:kt(Object.create(null),og(t),og(e??{})):e}function vR(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const r in e)n[r]=Zt(t[r],e[r]);return n}function EE(){return{app:null,config:{isNativeTag:lA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ER=0;function wR(t,e){return function(r,s=null){Ee(r)||(r=kt({},r)),s!=null&&!Je(s)&&(s=null);const i=EE(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:ER++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:eS,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&Ee(h.install)?(o.add(h),h.install(u,...d)):Ee(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const g=u._ceVNode||z(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),l=!0,u._container=h,h.__vue_app__=u,lu(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(nr(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Ms;Ms=u;try{return h()}finally{Ms=d}}};return u}}let Ms=null;function Jo(t,e){if(St){let n=St.provides;const r=St.parent&&St.parent.provides;r===n&&(n=St.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=St||wt;if(r||Ms){const s=Ms?Ms._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ee(e)?e.call(r&&r.proxy):e}}function bR(){return!!(St||wt||Ms)}const wE={},bE=()=>Object.create(wE),TE=t=>Object.getPrototypeOf(t)===wE;function TR(t,e,n,r=!1){const s={},i=bE();t.propsDefaults=Object.create(null),IE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Jv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function IR(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ve(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(iu(t.emitsOptions,p))continue;const g=e[p];if(l)if(je(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const _=hn(p);s[_]=id(l,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{IE(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!je(e,d)&&((h=ti(d))===d||!je(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=id(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!je(e,d))&&(delete i[d],u=!0)}u&&_r(t.attrs,"set","")}function IE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(zo(l))continue;const u=e[l];let h;s&&je(s,h=hn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:iu(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ve(n),u=a||Qe;for(let h=0;h<i.length;h++){const d=i[h];n[d]=id(s,l,d,u[d],t,!je(u,d))}}return o}function id(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=je(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Ua(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ti(n))&&(r=!0))}return r}const AR=new WeakMap;function AE(t,e,n=!1){const r=n?AR:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Ee(t)){const h=d=>{l=!0;const[p,g]=AE(d,e,!0);kt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Je(t)&&r.set(t,Ci),Ci;if(ge(i))for(let h=0;h<i.length;h++){const d=hn(i[h]);ug(d)&&(o[d]=Qe)}else if(i)for(const h in i){const d=hn(h);if(ug(d)){const p=i[h],g=o[d]=ge(p)||Ee(p)?{type:p}:kt({},p),_=g.type;let w=!1,I=!0;if(ge(_))for(let x=0;x<_.length;++x){const M=_[x],O=Ee(M)&&M.name;if(O==="Boolean"){w=!0;break}else O==="String"&&(I=!1)}else w=Ee(_)&&_.name==="Boolean";g[0]=w,g[1]=I,(w||je(g,"default"))&&a.push(d)}}const u=[o,a];return Je(t)&&r.set(t,u),u}function ug(t){return t[0]!=="$"&&!zo(t)}const RE=t=>t[0]==="_"||t==="$stable",kf=t=>ge(t)?t.map(Kn):[Kn(t)],RR=(t,e,n)=>{if(e._n)return e;const r=J((...s)=>kf(e(...s)),n);return r._c=!1,r},SE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(RE(s))continue;const i=t[s];if(Ee(i))e[s]=RR(s,i,r);else if(i!=null){const o=kf(i);e[s]=()=>o}}},CE=(t,e)=>{const n=kf(e);t.slots.default=()=>n},PE=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},SR=(t,e,n)=>{const r=t.slots=bE();if(t.vnode.shapeFlag&32){const s=e._;s?(PE(r,e,n),n&&Nv(r,"_",s,!0)):SE(e,r)}else e&&CE(t,e)},CR=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Qe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:PE(s,e,n):(i=!e.$stable,SE(e,s)),o=e}else e&&(CE(t,e),o={default:1});if(i)for(const a in s)!RE(a)&&o[a]==null&&delete s[a]},on=jR;function PR(t){return kR(t)}function kR(t,e){const n=Yc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=Yn,insertStaticContent:_}=t,w=(b,R,D,W=null,U=null,K=null,ee=void 0,Y=null,Q=!!R.dynamicChildren)=>{if(b===R)return;b&&!Po(b,R)&&(W=B(b),ot(b,U,K,!0),b=null),R.patchFlag===-2&&(Q=!1,R.dynamicChildren=null);const{type:G,ref:de,shapeFlag:re}=R;switch(G){case ou:I(b,R,D,W);break;case Sr:x(b,R,D,W);break;case ph:b==null&&M(R,D,W,ee);break;case Et:P(b,R,D,W,U,K,ee,Y,Q);break;default:re&1?q(b,R,D,W,U,K,ee,Y,Q):re&6?A(b,R,D,W,U,K,ee,Y,Q):(re&64||re&128)&&G.process(b,R,D,W,U,K,ee,Y,Q,ae)}de!=null&&U&&td(de,b&&b.ref,K,R||b,!R)},I=(b,R,D,W)=>{if(b==null)r(R.el=a(R.children),D,W);else{const U=R.el=b.el;R.children!==b.children&&u(U,R.children)}},x=(b,R,D,W)=>{b==null?r(R.el=l(R.children||""),D,W):R.el=b.el},M=(b,R,D,W)=>{[b.el,b.anchor]=_(b.children,R,D,W,b.el,b.anchor)},O=({el:b,anchor:R},D,W)=>{let U;for(;b&&b!==R;)U=p(b),r(b,D,W),b=U;r(R,D,W)},L=({el:b,anchor:R})=>{let D;for(;b&&b!==R;)D=p(b),s(b),b=D;s(R)},q=(b,R,D,W,U,K,ee,Y,Q)=>{R.type==="svg"?ee="svg":R.type==="math"&&(ee="mathml"),b==null?Z(R,D,W,U,K,ee,Y,Q):E(b,R,U,K,ee,Y,Q)},Z=(b,R,D,W,U,K,ee,Y)=>{let Q,G;const{props:de,shapeFlag:re,transition:ue,dirs:le}=b;if(Q=b.el=o(b.type,K,de&&de.is,de),re&8?h(Q,b.children):re&16&&v(b.children,Q,null,W,U,dh(b,K),ee,Y),le&&As(b,null,W,"created"),S(Q,b,b.scopeId,ee,W),de){for(const $e in de)$e!=="value"&&!zo($e)&&i(Q,$e,null,de[$e],K,W);"value"in de&&i(Q,"value",null,de.value,K),(G=de.onVnodeBeforeMount)&&Hn(G,W,b)}le&&As(b,null,W,"beforeMount");const me=xR(U,ue);me&&ue.beforeEnter(Q),r(Q,R,D),((G=de&&de.onVnodeMounted)||me||le)&&on(()=>{G&&Hn(G,W,b),me&&ue.enter(Q),le&&As(b,null,W,"mounted")},U)},S=(b,R,D,W,U)=>{if(D&&g(b,D),W)for(let K=0;K<W.length;K++)g(b,W[K]);if(U){let K=U.subTree;if(R===K||OE(K.type)&&(K.ssContent===R||K.ssFallback===R)){const ee=U.vnode;S(b,ee,ee.scopeId,ee.slotScopeIds,U.parent)}}},v=(b,R,D,W,U,K,ee,Y,Q=0)=>{for(let G=Q;G<b.length;G++){const de=b[G]=Y?Kr(b[G]):Kn(b[G]);w(null,de,R,D,W,U,K,ee,Y)}},E=(b,R,D,W,U,K,ee)=>{const Y=R.el=b.el;let{patchFlag:Q,dynamicChildren:G,dirs:de}=R;Q|=b.patchFlag&16;const re=b.props||Qe,ue=R.props||Qe;let le;if(D&&Rs(D,!1),(le=ue.onVnodeBeforeUpdate)&&Hn(le,D,R,b),de&&As(R,b,D,"beforeUpdate"),D&&Rs(D,!0),(re.innerHTML&&ue.innerHTML==null||re.textContent&&ue.textContent==null)&&h(Y,""),G?T(b.dynamicChildren,G,Y,D,W,dh(R,U),K):ee||Ie(b,R,Y,null,D,W,dh(R,U),K,!1),Q>0){if(Q&16)C(Y,re,ue,D,U);else if(Q&2&&re.class!==ue.class&&i(Y,"class",null,ue.class,U),Q&4&&i(Y,"style",re.style,ue.style,U),Q&8){const me=R.dynamicProps;for(let $e=0;$e<me.length;$e++){const Me=me[$e],Ft=re[Me],Tt=ue[Me];(Tt!==Ft||Me==="value")&&i(Y,Me,Ft,Tt,U,D)}}Q&1&&b.children!==R.children&&h(Y,R.children)}else!ee&&G==null&&C(Y,re,ue,D,U);((le=ue.onVnodeUpdated)||de)&&on(()=>{le&&Hn(le,D,R,b),de&&As(R,b,D,"updated")},W)},T=(b,R,D,W,U,K,ee)=>{for(let Y=0;Y<R.length;Y++){const Q=b[Y],G=R[Y],de=Q.el&&(Q.type===Et||!Po(Q,G)||Q.shapeFlag&70)?d(Q.el):D;w(Q,G,de,null,W,U,K,ee,!0)}},C=(b,R,D,W,U)=>{if(R!==D){if(R!==Qe)for(const K in R)!zo(K)&&!(K in D)&&i(b,K,R[K],null,U,W);for(const K in D){if(zo(K))continue;const ee=D[K],Y=R[K];ee!==Y&&K!=="value"&&i(b,K,Y,ee,U,W)}"value"in D&&i(b,"value",R.value,D.value,U)}},P=(b,R,D,W,U,K,ee,Y,Q)=>{const G=R.el=b?b.el:a(""),de=R.anchor=b?b.anchor:a("");let{patchFlag:re,dynamicChildren:ue,slotScopeIds:le}=R;le&&(Y=Y?Y.concat(le):le),b==null?(r(G,D,W),r(de,D,W),v(R.children||[],D,de,U,K,ee,Y,Q)):re>0&&re&64&&ue&&b.dynamicChildren?(T(b.dynamicChildren,ue,D,U,K,ee,Y),(R.key!=null||U&&R===U.subTree)&&xf(b,R,!0)):Ie(b,R,D,de,U,K,ee,Y,Q)},A=(b,R,D,W,U,K,ee,Y,Q)=>{R.slotScopeIds=Y,b==null?R.shapeFlag&512?U.ctx.activate(R,D,W,ee,Q):ut(R,D,W,U,K,ee,Q):xt(b,R,Q)},ut=(b,R,D,W,U,K,ee)=>{const Y=b.component=KR(b,W,U);if(hE(b)&&(Y.ctx.renderer=ae),GR(Y,!1,ee),Y.asyncDep){if(U&&U.registerDep(Y,Be,ee),!b.el){const Q=Y.subTree=z(Sr);x(null,Q,R,D)}}else Be(Y,b,R,D,U,K,ee)},xt=(b,R,D)=>{const W=R.component=b.component;if(BR(b,R,D))if(W.asyncDep&&!W.asyncResolved){pe(W,R,D);return}else W.next=R,W.update();else R.el=b.el,W.vnode=R},Be=(b,R,D,W,U,K,ee)=>{const Y=()=>{if(b.isMounted){let{next:re,bu:ue,u:le,parent:me,vnode:$e}=b;{const Ut=kE(b);if(Ut){re&&(re.el=$e.el,pe(b,re,ee)),Ut.asyncDep.then(()=>{b.isUnmounted||Y()});return}}let Me=re,Ft;Rs(b,!1),re?(re.el=$e.el,pe(b,re,ee)):re=$e,ue&&Wl(ue),(Ft=re.props&&re.props.onVnodeBeforeUpdate)&&Hn(Ft,me,re,$e),Rs(b,!0);const Tt=fh(b),Nt=b.subTree;b.subTree=Tt,w(Nt,Tt,d(Nt.el),B(Nt),b,U,K),re.el=Tt.el,Me===null&&$R(b,Tt.el),le&&on(le,U),(Ft=re.props&&re.props.onVnodeUpdated)&&on(()=>Hn(Ft,me,re,$e),U)}else{let re;const{el:ue,props:le}=R,{bm:me,m:$e,parent:Me,root:Ft,type:Tt}=b,Nt=xi(R);if(Rs(b,!1),me&&Wl(me),!Nt&&(re=le&&le.onVnodeBeforeMount)&&Hn(re,Me,R),Rs(b,!0),ue&&Ke){const Ut=()=>{b.subTree=fh(b),Ke(ue,b.subTree,b,U,null)};Nt&&Tt.__asyncHydrate?Tt.__asyncHydrate(ue,b,Ut):Ut()}else{Ft.ce&&Ft.ce._injectChildStyle(Tt);const Ut=b.subTree=fh(b);w(null,Ut,D,W,b,U,K),R.el=Ut.el}if($e&&on($e,U),!Nt&&(re=le&&le.onVnodeMounted)){const Ut=R;on(()=>Hn(re,Me,Ut),U)}(R.shapeFlag&256||Me&&xi(Me.vnode)&&Me.vnode.shapeFlag&256)&&b.a&&on(b.a,U),b.isMounted=!0,R=D=W=null}};b.scope.on();const Q=b.effect=new Vv(Y);b.scope.off();const G=b.update=Q.run.bind(Q),de=b.job=Q.runIfDirty.bind(Q);de.i=b,de.id=b.uid,Q.scheduler=()=>Sf(de),Rs(b,!0),G()},pe=(b,R,D)=>{R.component=b;const W=b.vnode.props;b.vnode=R,b.next=null,IR(b,R.props,W,D),CR(b,R.children,D),ps(),eg(b),ms()},Ie=(b,R,D,W,U,K,ee,Y,Q=!1)=>{const G=b&&b.children,de=b?b.shapeFlag:0,re=R.children,{patchFlag:ue,shapeFlag:le}=R;if(ue>0){if(ue&128){rn(G,re,D,W,U,K,ee,Y,Q);return}else if(ue&256){vt(G,re,D,W,U,K,ee,Y,Q);return}}le&8?(de&16&&sn(G,U,K),re!==G&&h(D,re)):de&16?le&16?rn(G,re,D,W,U,K,ee,Y,Q):sn(G,U,K,!0):(de&8&&h(D,""),le&16&&v(re,D,W,U,K,ee,Y,Q))},vt=(b,R,D,W,U,K,ee,Y,Q)=>{b=b||Ci,R=R||Ci;const G=b.length,de=R.length,re=Math.min(G,de);let ue;for(ue=0;ue<re;ue++){const le=R[ue]=Q?Kr(R[ue]):Kn(R[ue]);w(b[ue],le,D,null,U,K,ee,Y,Q)}G>de?sn(b,U,K,!0,!1,re):v(R,D,W,U,K,ee,Y,Q,re)},rn=(b,R,D,W,U,K,ee,Y,Q)=>{let G=0;const de=R.length;let re=b.length-1,ue=de-1;for(;G<=re&&G<=ue;){const le=b[G],me=R[G]=Q?Kr(R[G]):Kn(R[G]);if(Po(le,me))w(le,me,D,null,U,K,ee,Y,Q);else break;G++}for(;G<=re&&G<=ue;){const le=b[re],me=R[ue]=Q?Kr(R[ue]):Kn(R[ue]);if(Po(le,me))w(le,me,D,null,U,K,ee,Y,Q);else break;re--,ue--}if(G>re){if(G<=ue){const le=ue+1,me=le<de?R[le].el:W;for(;G<=ue;)w(null,R[G]=Q?Kr(R[G]):Kn(R[G]),D,me,U,K,ee,Y,Q),G++}}else if(G>ue)for(;G<=re;)ot(b[G],U,K,!0),G++;else{const le=G,me=G,$e=new Map;for(G=me;G<=ue;G++){const Jt=R[G]=Q?Kr(R[G]):Kn(R[G]);Jt.key!=null&&$e.set(Jt.key,G)}let Me,Ft=0;const Tt=ue-me+1;let Nt=!1,Ut=0;const Mr=new Array(Tt);for(G=0;G<Tt;G++)Mr[G]=0;for(G=le;G<=re;G++){const Jt=b[G];if(Ft>=Tt){ot(Jt,U,K,!0);continue}let wn;if(Jt.key!=null)wn=$e.get(Jt.key);else for(Me=me;Me<=ue;Me++)if(Mr[Me-me]===0&&Po(Jt,R[Me])){wn=Me;break}wn===void 0?ot(Jt,U,K,!0):(Mr[wn-me]=G+1,wn>=Ut?Ut=wn:Nt=!0,w(Jt,R[wn],D,null,U,K,ee,Y,Q),Ft++)}const ui=Nt?NR(Mr):Ci;for(Me=ui.length-1,G=Tt-1;G>=0;G--){const Jt=me+G,wn=R[Jt],hi=Jt+1<de?R[Jt+1].el:W;Mr[G]===0?w(null,wn,D,hi,U,K,ee,Y,Q):Nt&&(Me<0||G!==ui[Me]?ht(wn,D,hi,2):Me--)}}},ht=(b,R,D,W,U=null)=>{const{el:K,type:ee,transition:Y,children:Q,shapeFlag:G}=b;if(G&6){ht(b.component.subTree,R,D,W);return}if(G&128){b.suspense.move(R,D,W);return}if(G&64){ee.move(b,R,D,ae);return}if(ee===Et){r(K,R,D);for(let re=0;re<Q.length;re++)ht(Q[re],R,D,W);r(b.anchor,R,D);return}if(ee===ph){O(b,R,D);return}if(W!==2&&G&1&&Y)if(W===0)Y.beforeEnter(K),r(K,R,D),on(()=>Y.enter(K),U);else{const{leave:re,delayLeave:ue,afterLeave:le}=Y,me=()=>r(K,R,D),$e=()=>{re(K,()=>{me(),le&&le()})};ue?ue(K,me,$e):$e()}else r(K,R,D)},ot=(b,R,D,W=!1,U=!1)=>{const{type:K,props:ee,ref:Y,children:Q,dynamicChildren:G,shapeFlag:de,patchFlag:re,dirs:ue,cacheIndex:le}=b;if(re===-2&&(U=!1),Y!=null&&td(Y,null,D,b,!0),le!=null&&(R.renderCache[le]=void 0),de&256){R.ctx.deactivate(b);return}const me=de&1&&ue,$e=!xi(b);let Me;if($e&&(Me=ee&&ee.onVnodeBeforeUnmount)&&Hn(Me,R,b),de&6)qn(b.component,D,W);else{if(de&128){b.suspense.unmount(D,W);return}me&&As(b,null,R,"beforeUnmount"),de&64?b.type.remove(b,R,D,ae,W):G&&!G.hasOnce&&(K!==Et||re>0&&re&64)?sn(G,R,D,!1,!0):(K===Et&&re&384||!U&&de&16)&&sn(Q,R,D),W&&at(b)}($e&&(Me=ee&&ee.onVnodeUnmounted)||me)&&on(()=>{Me&&Hn(Me,R,b),me&&As(b,null,R,"unmounted")},D)},at=b=>{const{type:R,el:D,anchor:W,transition:U}=b;if(R===Et){Dr(D,W);return}if(R===ph){L(b);return}const K=()=>{s(D),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:ee,delayLeave:Y}=U,Q=()=>ee(D,K);Y?Y(b.el,K,Q):Q()}else K()},Dr=(b,R)=>{let D;for(;b!==R;)D=p(b),s(b),b=D;s(R)},qn=(b,R,D)=>{const{bum:W,scope:U,job:K,subTree:ee,um:Y,m:Q,a:G}=b;hg(Q),hg(G),W&&Wl(W),U.stop(),K&&(K.flags|=8,ot(ee,b,R,D)),Y&&on(Y,R),on(()=>{b.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},sn=(b,R,D,W=!1,U=!1,K=0)=>{for(let ee=K;ee<b.length;ee++)ot(b[ee],R,D,W,U)},B=b=>{if(b.shapeFlag&6)return B(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const R=p(b.anchor||b.el),D=R&&R[lE];return D?p(D):R};let se=!1;const ne=(b,R,D)=>{b==null?R._vnode&&ot(R._vnode,null,null,!0):w(R._vnode||null,b,R,null,null,null,D),R._vnode=b,se||(se=!0,eg(),iE(),se=!1)},ae={p:w,um:ot,m:ht,r:at,mt:ut,mc:v,pc:Ie,pbc:T,n:B,o:t};let xe,Ke;return{render:ne,hydrate:xe,createApp:wR(ne,xe)}}function dh({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Rs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xR(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xf(t,e,n=!1){const r=t.children,s=e.children;if(ge(r)&&ge(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Kr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&xf(o,a)),a.type===ou&&(a.el=o.el)}}function NR(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function kE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kE(e)}function hg(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const OR=Symbol.for("v-scx"),DR=()=>ln(OR);function Us(t,e){return Nf(t,null,e)}function Pt(t,e,n){return Nf(t,e,n)}function Nf(t,e,n=Qe){const{immediate:r,deep:s,flush:i,once:o}=n,a=kt({},n),l=e&&r||!e&&i!=="post";let u;if(ga){if(i==="sync"){const g=DR();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Yn,g.resume=Yn,g.pause=Yn,g}}const h=St;a.call=(g,_,w)=>nr(g,h,_,w);let d=!1;i==="post"?a.scheduler=g=>{on(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,_)=>{_?g():Sf(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=QA(t,e,a);return ga&&(u?u.push(p):l&&p()),p}function MR(t,e,n){const r=this.proxy,s=ct(t)?t.includes(".")?xE(r,t):()=>r[t]:t.bind(r,r);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=Ua(this),a=Nf(s,i.bind(r),n);return o(),a}function xE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const LR=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${ti(e)}Modifiers`];function VR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Qe;let s=n;const i=e.startsWith("update:"),o=i&&LR(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ct(h)?h.trim():h)),o.number&&(s=n.map(sc)));let a,l=r[a=jl(e)]||r[a=jl(hn(e))];!l&&i&&(l=r[a=jl(ti(e))]),l&&nr(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nr(u,t,6,s)}}function NE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Ee(t)){const l=u=>{const h=NE(u,e,!0);h&&(a=!0,kt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Je(t)&&r.set(t,null),null):(ge(i)?i.forEach(l=>o[l]=null):kt(o,i),Je(t)&&r.set(t,o),o)}function iu(t,e){return!t||!zc(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(t,e[0].toLowerCase()+e.slice(1))||je(t,ti(e))||je(t,e))}function fh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:_,inheritAttrs:w}=t,I=lc(t);let x,M;try{if(n.shapeFlag&4){const L=s||r,q=L;x=Kn(u.call(q,L,h,d,g,p,_)),M=a}else{const L=e;x=Kn(L.length>1?L(d,{attrs:a,slots:o,emit:l}):L(d,null)),M=e.props?a:FR(a)}}catch(L){Xo.length=0,nu(L,t,1),x=z(Sr)}let O=x;if(M&&w!==!1){const L=Object.keys(M),{shapeFlag:q}=O;L.length&&q&7&&(i&&L.some(pf)&&(M=UR(M,i)),O=Bs(O,M,!1,!0))}return n.dirs&&(O=Bs(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Cf(O,n.transition),x=O,lc(I),x}const FR=t=>{let e;for(const n in t)(n==="class"||n==="style"||zc(n))&&((e||(e={}))[n]=t[n]);return e},UR=(t,e)=>{const n={};for(const r in t)(!pf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function BR(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?dg(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!iu(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?dg(r,o,u):!0:!!o;return!1}function dg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!iu(n,i))return!0}return!1}function $R({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const OE=t=>t.__isSuspense;function jR(t,e){e&&e.pendingBranch?ge(t)?e.effects.push(...t):e.effects.push(t):XA(t)}const Et=Symbol.for("v-fgt"),ou=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),ph=Symbol.for("v-stc"),Xo=[];let mn=null;function ie(t=!1){Xo.push(mn=t?null:[])}function WR(){Xo.pop(),mn=Xo[Xo.length-1]||null}let pa=1;function fg(t){pa+=t,t<0&&mn&&(mn.hasOnce=!0)}function DE(t){return t.dynamicChildren=pa>0?mn||Ci:null,WR(),pa>0&&mn&&mn.push(t),t}function Re(t,e,n,r,s,i){return DE($(t,e,n,r,s,i,!0))}function Ye(t,e,n,r,s){return DE(z(t,e,n,r,s,!0))}function ma(t){return t?t.__v_isVNode===!0:!1}function Po(t,e){return t.type===e.type&&t.key===e.key}const ME=({key:t})=>t??null,Hl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ct(t)||lt(t)||Ee(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===Et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ME(e),ref:e&&Hl(e),scopeId:aE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wt};return a?(Of(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ct(n)?8:16),pa>0&&!o&&mn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&mn.push(l),l}const z=qR;function qR(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===gE)&&(t=Sr),ma(t)){const a=Bs(t,e,!0);return n&&Of(a,n),pa>0&&!i&&mn&&(a.shapeFlag&6?mn[mn.indexOf(t)]=a:mn.push(a)),a.patchFlag=-2,a}if(ZR(t)&&(t=t.__vccOpts),e){e=au(e);let{class:a,style:l}=e;a&&!ct(a)&&(e.class=dn(a)),Je(l)&&(If(l)&&!ge(l)&&(l=kt({},l)),e.style=La(l))}const o=ct(t)?1:OE(t)?128:ZA(t)?64:Je(t)?4:Ee(t)?2:0;return $(t,e,n,r,s,o,i,!0)}function au(t){return t?If(t)||TE(t)?kt({},t):t:null}function Bs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?vn(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ME(u),ref:e&&e.ref?n&&i?ge(i)?i.concat(Hl(e)):[i,Hl(e)]:Hl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bs(t.ssContent),ssFallback:t.ssFallback&&Bs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Cf(h,l.clone(h)),h}function Ae(t=" ",e=0){return z(ou,null,t,e)}function Dn(t="",e=!1){return e?(ie(),Ye(Sr,null,t)):z(Sr,null,t)}function Kn(t){return t==null||typeof t=="boolean"?z(Sr):ge(t)?z(Et,null,t.slice()):ma(t)?Kr(t):z(ou,null,String(t))}function Kr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bs(t)}function Of(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ge(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Of(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!TE(e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[Ae(e)]):n=8);t.children=e,t.shapeFlag|=n}function vn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=dn([e.class,r.class]));else if(s==="style")e.style=La([e.style,r.style]);else if(zc(s)){const i=e[s],o=r[s];o&&i!==o&&!(ge(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Hn(t,e,n,r=null){nr(t,e,7,[n,r])}const HR=EE();let zR=0;function KR(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||HR,i={uid:zR++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:AE(r,s),emitsOptions:NE(r,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:r.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=VR.bind(null,i),t.ce&&t.ce(i),i}let St=null;const Sn=()=>St||wt;let hc,od;{const t=Yc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};hc=e("__VUE_INSTANCE_SETTERS__",n=>St=n),od=e("__VUE_SSR_SETTERS__",n=>ga=n)}const Ua=t=>{const e=St;return hc(t),t.scope.on(),()=>{t.scope.off(),hc(e)}},pg=()=>{St&&St.scope.off(),hc(null)};function LE(t){return t.vnode.shapeFlag&4}let ga=!1;function GR(t,e=!1,n=!1){e&&od(e);const{props:r,children:s}=t.vnode,i=LE(t);TR(t,r,i,e),SR(t,s,n);const o=i?QR(t,e):void 0;return e&&od(!1),o}function QR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pR);const{setup:r}=n;if(r){ps();const s=t.setupContext=r.length>1?JR(t):null,i=Ua(t),o=Fa(r,t,0,[t.props,s]),a=Pv(o);if(ms(),i(),(a||t.sp)&&!xi(t)&&uE(t),a){if(o.then(pg,pg),e)return o.then(l=>{mg(t,l,e)}).catch(l=>{nu(l,t,0)});t.asyncDep=o}else mg(t,o,e)}else VE(t,e)}function mg(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=eE(e)),VE(t,n)}let gg;function VE(t,e,n){const r=t.type;if(!t.render){if(!e&&gg&&!r.render){const s=r.template||Pf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=kt(kt({isCustomElement:i,delimiters:a},o),l);r.render=gg(s,u)}}t.render=r.render||Yn}{const s=Ua(t);ps();try{mR(t)}finally{ms(),s()}}}const YR={get(t,e){return qt(t,"get",""),t[e]}};function JR(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,YR),slots:t.slots,emit:t.emit,expose:e}}function lu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(eE(Af(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yo)return Yo[n](t)},has(e,n){return n in e||n in Yo}})):t.proxy}function XR(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function ZR(t){return Ee(t)&&"__vccOpts"in t}const ke=(t,e)=>KA(t,e,ga);function Ir(t,e,n){const r=arguments.length;return r===2?Je(e)&&!ge(e)?ma(e)?z(t,null,[e]):z(t,e):z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ma(n)&&(n=[n]),z(t,e,n))}const eS="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ad;const _g=typeof window<"u"&&window.trustedTypes;if(_g)try{ad=_g.createPolicy("vue",{createHTML:t=>t})}catch{}const FE=ad?t=>ad.createHTML(t):t=>t,tS="http://www.w3.org/2000/svg",nS="http://www.w3.org/1998/Math/MathML",gr=typeof document<"u"?document:null,yg=gr&&gr.createElement("template"),rS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?gr.createElementNS(tS,t):e==="mathml"?gr.createElementNS(nS,t):n?gr.createElement(t,{is:n}):gr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gr.createTextNode(t),createComment:t=>gr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yg.innerHTML=FE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=yg.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sS=Symbol("_vtc");function iS(t,e,n){const r=t[sS];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vg=Symbol("_vod"),oS=Symbol("_vsh"),aS=Symbol(""),lS=/(^|;)\s*display\s*:/;function cS(t,e,n){const r=t.style,s=ct(n);let i=!1;if(n&&!s){if(e)if(ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&zl(r,a,"")}else for(const o in e)n[o]==null&&zl(r,o,"");for(const o in n)o==="display"&&(i=!0),zl(r,o,n[o])}else if(s){if(e!==n){const o=r[aS];o&&(n+=";"+o),r.cssText=n,i=lS.test(n)}}else e&&t.removeAttribute("style");vg in t&&(t[vg]=i?r.display:"",t[oS]&&(r.display="none"))}const Eg=/\s*!important$/;function zl(t,e,n){if(ge(n))n.forEach(r=>zl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uS(t,e);Eg.test(n)?t.setProperty(ti(r),n.replace(Eg,""),"important"):t[r]=n}}const wg=["Webkit","Moz","ms"],mh={};function uS(t,e){const n=mh[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return mh[e]=r;r=Qc(r);for(let s=0;s<wg.length;s++){const i=wg[s]+r;if(i in t)return mh[e]=i}return e}const bg="http://www.w3.org/1999/xlink";function Tg(t,e,n,r,s,i=yA(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bg,e.slice(6,e.length)):t.setAttributeNS(bg,e,n):n==null||i&&!Ov(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ln(n)?String(n):n)}function Ig(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?FE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ov(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ks(t,e,n,r){t.addEventListener(e,n,r)}function hS(t,e,n,r){t.removeEventListener(e,n,r)}const Ag=Symbol("_vei");function dS(t,e,n,r,s=null){const i=t[Ag]||(t[Ag]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=fS(e);if(r){const u=i[e]=gS(r,s);ks(t,a,u,l)}else o&&(hS(t,a,o,l),i[e]=void 0)}}const Rg=/(?:Once|Passive|Capture)$/;function fS(t){let e;if(Rg.test(t)){e={};let r;for(;r=t.match(Rg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ti(t.slice(2)),e]}let gh=0;const pS=Promise.resolve(),mS=()=>gh||(pS.then(()=>gh=0),gh=Date.now());function gS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nr(_S(r,n.value),e,5,[r])};return n.value=t,n.attached=mS(),n}function _S(t,e){if(ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yS=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?iS(t,r,o):e==="style"?cS(t,n,r):zc(e)?pf(e)||dS(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vS(t,e,r,o))?(Ig(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tg(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ct(r))?Ig(t,hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tg(t,e,r,o))};function vS(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sg(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sg(e)&&ct(n)?!1:e in t}const dc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ge(e)?n=>Wl(e,n):e};function ES(t){t.target.composing=!0}function Cg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ni=Symbol("_assign"),Df={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ni]=dc(s);const i=r||s.props&&s.props.type==="number";ks(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=sc(a)),t[Ni](a)}),n&&ks(t,"change",()=>{t.value=t.value.trim()}),e||(ks(t,"compositionstart",ES),ks(t,"compositionend",Cg),ks(t,"change",Cg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ni]=dc(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?sc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},wS={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Kc(e);ks(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sc(fc(o)):fc(o));t[Ni](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,En(()=>{t._assigning=!1})}),t[Ni]=dc(r)},mounted(t,{value:e}){Pg(t,e)},beforeUpdate(t,e,n){t[Ni]=dc(n)},updated(t,{value:e}){t._assigning||Pg(t,e)}};function Pg(t,e){const n=t.multiple,r=ge(e);if(!(n&&!r&&!Kc(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=fc(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=EA(e,a)>-1}else o.selected=e.has(a);else if(Jc(fc(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fc(t){return"_value"in t?t._value:t.value}const bS=["ctrl","shift","alt","meta"],TS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bS.some(n=>t[`${n}Key`]&&!e.includes(n))},cu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=TS[e[o]];if(a&&a(s,e))return}return t(s,...i)})},IS=kt({patchProp:yS},rS);let kg;function AS(){return kg||(kg=PR(IS))}const RS=(...t)=>{const e=AS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=CS(r);if(!s)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,SS(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function SS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function CS(t){return ct(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wi=typeof document<"u";function UE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function PS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&UE(t.default)}const qe=Object.assign;function _h(t,e){const n={};for(const r in e){const s=e[r];n[r]=Vn(s)?s.map(t):t(s)}return n}const Zo=()=>{},Vn=Array.isArray,BE=/#/g,kS=/&/g,xS=/\//g,NS=/=/g,OS=/\?/g,$E=/\+/g,DS=/%5B/g,MS=/%5D/g,jE=/%5E/g,LS=/%60/g,WE=/%7B/g,VS=/%7C/g,qE=/%7D/g,FS=/%20/g;function Mf(t){return encodeURI(""+t).replace(VS,"|").replace(DS,"[").replace(MS,"]")}function US(t){return Mf(t).replace(WE,"{").replace(qE,"}").replace(jE,"^")}function ld(t){return Mf(t).replace($E,"%2B").replace(FS,"+").replace(BE,"%23").replace(kS,"%26").replace(LS,"`").replace(WE,"{").replace(qE,"}").replace(jE,"^")}function BS(t){return ld(t).replace(NS,"%3D")}function $S(t){return Mf(t).replace(BE,"%23").replace(OS,"%3F")}function jS(t){return t==null?"":$S(t).replace(xS,"%2F")}function _a(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const WS=/\/$/,qS=t=>t.replace(WS,"");function yh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=GS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:_a(o)}}function HS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$i(e.matched[r],n.matched[s])&&HE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $i(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function HE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KS(t[n],e[n]))return!1;return!0}function KS(t,e){return Vn(t)?Ng(t,e):Vn(e)?Ng(e,t):t===e}function Ng(t,e){return Vn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function GS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ur={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ya;(function(t){t.pop="pop",t.push="push"})(ya||(ya={}));var ea;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ea||(ea={}));function QS(t){if(!t)if(wi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qS(t)}const YS=/^[^#]+#/;function JS(t,e){return t.replace(YS,"#")+e}function XS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const uu=()=>({left:window.scrollX,top:window.scrollY});function ZS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Og(t,e){return(history.state?history.state.position-e:-1)+t}const cd=new Map;function eC(t,e){cd.set(t,e)}function tC(t){const e=cd.get(t);return cd.delete(t),e}let nC=()=>location.protocol+"//"+location.host;function zE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),xg(l,"")}return xg(n,t)+r+s}function rC(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=zE(t,location),_=n.value,w=e.value;let I=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}I=w?p.position-w.position:0}else r(g);s.forEach(x=>{x(n.value,_,{delta:I,type:ya.pop,direction:I?I>0?ea.forward:ea.back:ea.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(qe({},p.state,{scroll:uu()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function Dg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?uu():null}}function sC(t){const{history:e,location:n}=window,r={value:zE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:nC()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=qe({},e.state,Dg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=qe({},s.value,e.state,{forward:l,scroll:uu()});i(h.current,h,!0);const d=qe({},Dg(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function iC(t){t=QS(t);const e=sC(t),n=rC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=qe({location:"",base:t,go:r,createHref:JS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function oC(t){return typeof t=="string"||t&&typeof t=="object"}function KE(t){return typeof t=="string"||typeof t=="symbol"}const GE=Symbol("");var Mg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mg||(Mg={}));function ji(t,e){return qe(new Error,{type:t,[GE]:!0},e)}function dr(t,e){return t instanceof Error&&GE in t&&(e==null||!!(t.type&e))}const Lg="[^/]+?",aC={sensitive:!1,strict:!1,start:!0,end:!0},lC=/[.+*?^${}()[\]/\\]/g;function cC(t,e){const n=qe({},aC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(lC,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:w,optional:I,regexp:x}=p;i.push({name:_,repeatable:w,optional:I});const M=x||Lg;if(M!==Lg){g+=10;try{new RegExp(`(${M})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+L.message)}}let O=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(O=I&&u.length<2?`(?:/${O})`:"/"+O),I&&(O+="?"),s+=O,g+=20,I&&(g+=-8),w&&(g+=-20),M===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",_=i[p-1];d[_.name]=g&&_.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:_,repeatable:w,optional:I}=g,x=_ in u?u[_]:"";if(Vn(x)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Vn(x)?x.join("/"):x;if(!M)if(I)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);h+=M}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function uC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function QE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=uC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vg(r))return 1;if(Vg(s))return-1}return s.length-r.length}function Vg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hC={type:0,value:""},dC=/[a-zA-Z0-9_]/;function fC(t){if(!t)return[[]];if(t==="/")return[[hC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:dC.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function pC(t,e,n){const r=cC(fC(t.path),n),s=qe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mC(t,e){const n=[],r=new Map;e=$g({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const _=!g,w=Ug(d);w.aliasOf=g&&g.record;const I=$g(e,d),x=[w];if("alias"in d){const L=typeof d.alias=="string"?[d.alias]:d.alias;for(const q of L)x.push(Ug(qe({},w,{components:g?g.record.components:w.components,path:q,aliasOf:g?g.record:w})))}let M,O;for(const L of x){const{path:q}=L;if(p&&q[0]!=="/"){const Z=p.record.path,S=Z[Z.length-1]==="/"?"":"/";L.path=p.record.path+(q&&S+q)}if(M=pC(L,p,I),g?g.alias.push(M):(O=O||M,O!==M&&O.alias.push(M),_&&d.name&&!Bg(M)&&o(d.name)),YE(M)&&l(M),w.children){const Z=w.children;for(let S=0;S<Z.length;S++)i(Z[S],M,g&&g.children[S])}g=g||M}return O?()=>{o(O)}:Zo}function o(d){if(KE(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=yC(d,n);n.splice(p,0,d),d.record.name&&!Bg(d)&&r.set(d.record.name,d)}function u(d,p){let g,_={},w,I;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw ji(1,{location:d});I=g.record.name,_=qe(Fg(p.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&Fg(d.params,g.keys.map(O=>O.name))),w=g.stringify(_)}else if(d.path!=null)w=d.path,g=n.find(O=>O.re.test(w)),g&&(_=g.parse(w),I=g.record.name);else{if(g=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!g)throw ji(1,{location:d,currentLocation:p});I=g.record.name,_=qe({},p.params,d.params),w=g.stringify(_)}const x=[];let M=g;for(;M;)x.unshift(M.record),M=M.parent;return{name:I,path:w,params:_,matched:x,meta:_C(x)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Fg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ug(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:gC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _C(t){return t.reduce((e,n)=>qe(e,n.meta),{})}function $g(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yC(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;QE(t,e[i])<0?r=i:n=i+1}const s=vC(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vC(t){let e=t;for(;e=e.parent;)if(YE(e)&&QE(t,e)===0)return e}function YE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function EC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($E," "),o=i.indexOf("="),a=_a(o<0?i:i.slice(0,o)),l=o<0?null:_a(i.slice(o+1));if(a in e){let u=e[a];Vn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function jg(t){let e="";for(let n in t){const r=t[n];if(n=BS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vn(r)?r.map(i=>i&&ld(i)):[r&&ld(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const bC=Symbol(""),Wg=Symbol(""),hu=Symbol(""),JE=Symbol(""),ud=Symbol("");function ko(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(ji(4,{from:n,to:e})):p instanceof Error?l(p):oC(p)?l(ji(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function vh(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(UE(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Gr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=PS(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Gr(g,n,r,o,a,s)()}))}}return i}function qg(t){const e=ln(hu),n=ln(JE),r=ke(()=>{const l=N(t.to);return e.resolve(l)}),s=ke(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex($i.bind(null,h));if(p>-1)return p;const g=Hg(l[u-2]);return u>1&&Hg(h)===g&&d[d.length-1].path!==g?d.findIndex($i.bind(null,l[u-2])):p}),i=ke(()=>s.value>-1&&RC(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&HE(n.params,r.value.params));function a(l={}){return AC(l)?e[N(t.replace)?"replace":"push"](N(t.to)).catch(Zo):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const TC=Ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qg,setup(t,{slots:e}){const n=ni(qg(t)),{options:r}=ln(hu),s=ke(()=>({[zg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ir("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),IC=TC;function AC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function RC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Vn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Hg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zg=(t,e,n)=>t??e??n,SC=Ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ln(ud),s=ke(()=>t.route||r.value),i=ln(Wg,0),o=ke(()=>{let u=N(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=ke(()=>s.value.matched[o.value]);Jo(Wg,ke(()=>o.value+1)),Jo(bC,a),Jo(ud,s);const l=fe();return Pt(()=>[l.value,a.value,t.name],([u,h,d],[p,g,_])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!$i(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Kg(n.default,{Component:p,route:u});const g=d.props[h],_=g?g===!0?u.params:typeof g=="function"?g(u):g:null,I=Ir(p,qe({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Kg(n.default,{Component:I,route:u})||I}}});function Kg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const XE=SC;function CC(t){const e=mC(t.routes,t),n=t.parseQuery||EC,r=t.stringifyQuery||jg,s=t.history,i=ko(),o=ko(),a=ko(),l=Xv(Ur);let u=Ur;wi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=_h.bind(null,B=>""+B),d=_h.bind(null,jS),p=_h.bind(null,_a);function g(B,se){let ne,ae;return KE(B)?(ne=e.getRecordMatcher(B),ae=se):ae=B,e.addRoute(ae,ne)}function _(B){const se=e.getRecordMatcher(B);se&&e.removeRoute(se)}function w(){return e.getRoutes().map(B=>B.record)}function I(B){return!!e.getRecordMatcher(B)}function x(B,se){if(se=qe({},se||l.value),typeof B=="string"){const R=yh(n,B,se.path),D=e.resolve({path:R.path},se),W=s.createHref(R.fullPath);return qe(R,D,{params:p(D.params),hash:_a(R.hash),redirectedFrom:void 0,href:W})}let ne;if(B.path!=null)ne=qe({},B,{path:yh(n,B.path,se.path).path});else{const R=qe({},B.params);for(const D in R)R[D]==null&&delete R[D];ne=qe({},B,{params:d(R)}),se.params=d(se.params)}const ae=e.resolve(ne,se),xe=B.hash||"";ae.params=h(p(ae.params));const Ke=HS(r,qe({},B,{hash:US(xe),path:ae.path})),b=s.createHref(Ke);return qe({fullPath:Ke,hash:xe,query:r===jg?wC(B.query):B.query||{}},ae,{redirectedFrom:void 0,href:b})}function M(B){return typeof B=="string"?yh(n,B,l.value.path):qe({},B)}function O(B,se){if(u!==B)return ji(8,{from:se,to:B})}function L(B){return S(B)}function q(B){return L(qe(M(B),{replace:!0}))}function Z(B){const se=B.matched[B.matched.length-1];if(se&&se.redirect){const{redirect:ne}=se;let ae=typeof ne=="function"?ne(B):ne;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=M(ae):{path:ae},ae.params={}),qe({query:B.query,hash:B.hash,params:ae.path!=null?{}:B.params},ae)}}function S(B,se){const ne=u=x(B),ae=l.value,xe=B.state,Ke=B.force,b=B.replace===!0,R=Z(ne);if(R)return S(qe(M(R),{state:typeof R=="object"?qe({},xe,R.state):xe,force:Ke,replace:b}),se||ne);const D=ne;D.redirectedFrom=se;let W;return!Ke&&zS(r,ae,ne)&&(W=ji(16,{to:D,from:ae}),ht(ae,ae,!0,!1)),(W?Promise.resolve(W):T(D,ae)).catch(U=>dr(U)?dr(U,2)?U:rn(U):Ie(U,D,ae)).then(U=>{if(U){if(dr(U,2))return S(qe({replace:b},M(U.to),{state:typeof U.to=="object"?qe({},xe,U.to.state):xe,force:Ke}),se||D)}else U=P(D,ae,!0,b,xe);return C(D,ae,U),U})}function v(B,se){const ne=O(B,se);return ne?Promise.reject(ne):Promise.resolve()}function E(B){const se=Dr.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(B):B()}function T(B,se){let ne;const[ae,xe,Ke]=PC(B,se);ne=vh(ae.reverse(),"beforeRouteLeave",B,se);for(const R of ae)R.leaveGuards.forEach(D=>{ne.push(Gr(D,B,se))});const b=v.bind(null,B,se);return ne.push(b),sn(ne).then(()=>{ne=[];for(const R of i.list())ne.push(Gr(R,B,se));return ne.push(b),sn(ne)}).then(()=>{ne=vh(xe,"beforeRouteUpdate",B,se);for(const R of xe)R.updateGuards.forEach(D=>{ne.push(Gr(D,B,se))});return ne.push(b),sn(ne)}).then(()=>{ne=[];for(const R of Ke)if(R.beforeEnter)if(Vn(R.beforeEnter))for(const D of R.beforeEnter)ne.push(Gr(D,B,se));else ne.push(Gr(R.beforeEnter,B,se));return ne.push(b),sn(ne)}).then(()=>(B.matched.forEach(R=>R.enterCallbacks={}),ne=vh(Ke,"beforeRouteEnter",B,se,E),ne.push(b),sn(ne))).then(()=>{ne=[];for(const R of o.list())ne.push(Gr(R,B,se));return ne.push(b),sn(ne)}).catch(R=>dr(R,8)?R:Promise.reject(R))}function C(B,se,ne){a.list().forEach(ae=>E(()=>ae(B,se,ne)))}function P(B,se,ne,ae,xe){const Ke=O(B,se);if(Ke)return Ke;const b=se===Ur,R=wi?history.state:{};ne&&(ae||b?s.replace(B.fullPath,qe({scroll:b&&R&&R.scroll},xe)):s.push(B.fullPath,xe)),l.value=B,ht(B,se,ne,b),rn()}let A;function ut(){A||(A=s.listen((B,se,ne)=>{if(!qn.listening)return;const ae=x(B),xe=Z(ae);if(xe){S(qe(xe,{replace:!0}),ae).catch(Zo);return}u=ae;const Ke=l.value;wi&&eC(Og(Ke.fullPath,ne.delta),uu()),T(ae,Ke).catch(b=>dr(b,12)?b:dr(b,2)?(S(b.to,ae).then(R=>{dr(R,20)&&!ne.delta&&ne.type===ya.pop&&s.go(-1,!1)}).catch(Zo),Promise.reject()):(ne.delta&&s.go(-ne.delta,!1),Ie(b,ae,Ke))).then(b=>{b=b||P(ae,Ke,!1),b&&(ne.delta&&!dr(b,8)?s.go(-ne.delta,!1):ne.type===ya.pop&&dr(b,20)&&s.go(-1,!1)),C(ae,Ke,b)}).catch(Zo)}))}let xt=ko(),Be=ko(),pe;function Ie(B,se,ne){rn(B);const ae=Be.list();return ae.length?ae.forEach(xe=>xe(B,se,ne)):console.error(B),Promise.reject(B)}function vt(){return pe&&l.value!==Ur?Promise.resolve():new Promise((B,se)=>{xt.add([B,se])})}function rn(B){return pe||(pe=!B,ut(),xt.list().forEach(([se,ne])=>B?ne(B):se()),xt.reset()),B}function ht(B,se,ne,ae){const{scrollBehavior:xe}=t;if(!wi||!xe)return Promise.resolve();const Ke=!ne&&tC(Og(B.fullPath,0))||(ae||!ne)&&history.state&&history.state.scroll||null;return En().then(()=>xe(B,se,Ke)).then(b=>b&&ZS(b)).catch(b=>Ie(b,B,se))}const ot=B=>s.go(B);let at;const Dr=new Set,qn={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:w,resolve:x,options:t,push:L,replace:q,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Be.add,isReady:vt,install(B){const se=this;B.component("RouterLink",IC),B.component("RouterView",XE),B.config.globalProperties.$router=se,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>N(l)}),wi&&!at&&l.value===Ur&&(at=!0,L(s.location).catch(xe=>{}));const ne={};for(const xe in Ur)Object.defineProperty(ne,xe,{get:()=>l.value[xe],enumerable:!0});B.provide(hu,se),B.provide(JE,Jv(ne)),B.provide(ud,l);const ae=B.unmount;Dr.add(B),B.unmount=function(){Dr.delete(B),Dr.size<1&&(u=Ur,A&&A(),A=null,l.value=Ur,at=!1,pe=!1),ae()}}};function sn(B){return B.reduce((se,ne)=>se.then(()=>E(ne)),Promise.resolve())}return qn}function PC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>$i(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>$i(u,l))||s.push(l))}return[n,r,s]}function du(){return ln(hu)}const kC={id:"app"},xC=Ue({__name:"App",setup(t){return(e,n)=>(ie(),Re("div",kC,[z(N(XE))]))}});function ZE(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=ZE(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function NC(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=ZE(t))&&(r&&(r+=" "),r+=e);return r}const Gg=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,Qg=NC,Lf=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return Qg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:i}=e,o=Object.keys(s).map(u=>{const h=n==null?void 0:n[u],d=i==null?void 0:i[u];if(h===null)return null;const p=Gg(h)||Gg(d);return s[u][p]}),a=n&&Object.entries(n).reduce((u,h)=>{let[d,p]=h;return p===void 0||(u[d]=p),u},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((u,h)=>{let{class:d,className:p,...g}=h;return Object.entries(g).every(_=>{let[w,I]=_;return Array.isArray(I)?I.includes({...i,...a}[w]):{...i,...a}[w]===I})?[...u,d,p]:u},[]);return Qg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};var OC=!1;function ew(t,e){const n=typeof t=="string"&&!e?`${t}Context`:e,r=Symbol(n);return[s=>{const i=ln(r,s);if(i||i===null)return i;throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(t)?`one of the following components: ${t.join(", ")}`:`\`${t}\``}`)},s=>(Jo(r,s),s)]}function tw(t,e,n){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),r.dispatchEvent(s)}function nw(t){return Xc()?(yf(t),!0):!1}function DC(t){let e=!1,n;const r=Va(!0);return(...s)=>(e||(n=r.run(()=>t(...s)),e=!0),n)}function MC(t){let e=0,n,r;const s=()=>{e-=1,r&&e<=0&&(r.stop(),n=void 0,r=void 0)};return(...i)=>(e+=1,n||(r=Va(!0),n=r.run(()=>t(...i))),nw(s),n)}function Vf(t){return typeof t=="function"?t():N(t)}const ri=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const LC=t=>typeof t<"u",VC=Object.prototype.toString,FC=t=>VC.call(t)==="[object Object]",UC=()=>{},Yg=BC();function BC(){var t,e;return ri&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function $C(t){return Sn()}function jC(t,e){$C()&&fE(t,e)}function fu(t){var e;const n=Vf(t);return(e=n==null?void 0:n.$el)!=null?e:n}const rw=ri?window:void 0;function sw(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=rw):[e,n,r,s]=t,!e)return UC;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(h=>h()),i.length=0},a=(h,d,p,g)=>(h.addEventListener(d,p,g),()=>h.removeEventListener(d,p,g)),l=Pt(()=>[fu(e),Vf(s)],([h,d])=>{if(o(),!h)return;const p=FC(d)?{...d}:d;i.push(...n.flatMap(g=>r.map(_=>a(h,g,_,p))))},{immediate:!0,flush:"post"}),u=()=>{l(),o()};return nw(u),u}function WC(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function qC(...t){let e,n,r={};t.length===3?(e=t[0],n=t[1],r=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],r=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:s=rw,eventName:i="keydown",passive:o=!1,dedupe:a=!1}=r,l=WC(e);return sw(s,i,u=>{u.repeat&&Vf(a)||l(u)&&n(u)},o)}function HC(){const t=fe(!1),e=Sn();return e&&gs(()=>{t.value=!0},e),t}function zC(t){return JSON.parse(JSON.stringify(t))}function KC(t,e,n,r={}){var s,i,o;const{clone:a=!1,passive:l=!1,eventName:u,deep:h=!1,defaultValue:d,shouldEmit:p}=r,g=Sn(),_=n||(g==null?void 0:g.emit)||((s=g==null?void 0:g.$emit)==null?void 0:s.bind(g))||((o=(i=g==null?void 0:g.proxy)==null?void 0:i.$emit)==null?void 0:o.bind(g==null?void 0:g.proxy));let w=u;w=w||`update:${e.toString()}`;const I=O=>a?typeof a=="function"?a(O):zC(O):O,x=()=>LC(t[e])?I(t[e]):d,M=O=>{p?p(O)&&_(w,O):_(w,O)};if(l){const O=x(),L=fe(O);let q=!1;return Pt(()=>t[e],Z=>{q||(q=!0,L.value=I(Z),En(()=>q=!1))}),Pt(L,Z=>{!q&&(Z!==t[e]||h)&&M(Z)},{deep:h}),L}else return ke({get(){return x()},set(O){M(O)}})}function Ff(t){return t?t.flatMap(e=>e.type===Et?Ff(e.children):[e]):[]}function Eh(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function hd(t,e,n=".",r){if(!Eh(e))return hd(t,{},n);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Eh(o)&&Eh(s[i])?s[i]=hd(o,s[i],(n?`${n}.`:"")+i.toString()):s[i]=o)}return s}function GC(t){return(...e)=>e.reduce((n,r)=>hd(n,r,""),{})}const QC=GC(),[iw,yj]=ew("ConfigProvider");let YC="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",JC=(t=21)=>{let e="",n=t;for(;n--;)e+=YC[Math.random()*64|0];return e};const XC=MC(()=>{const t=fe(new Map),e=fe(),n=ke(()=>{for(const o of t.value.values())if(o)return!0;return!1}),r=iw({scrollBody:fe(!0)});let s=null;const i=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.body.style.removeProperty("--scrollbar-width"),document.body.style.overflow=e.value??"",Yg&&(s==null||s()),e.value=void 0};return Pt(n,(o,a)=>{var l;if(!ri)return;if(!o){a&&i();return}e.value===void 0&&(e.value=document.body.style.overflow);const u=window.innerWidth-document.documentElement.clientWidth,h={padding:u,margin:0},d=(l=r.scrollBody)!=null&&l.value?typeof r.scrollBody.value=="object"?QC({padding:r.scrollBody.value.padding===!0?u:r.scrollBody.value.padding,margin:r.scrollBody.value.margin===!0?u:r.scrollBody.value.margin},h):h:{padding:0,margin:0};u>0&&(document.body.style.paddingRight=typeof d.padding=="number"?`${d.padding}px`:String(d.padding),document.body.style.marginRight=typeof d.margin=="number"?`${d.margin}px`:String(d.margin),document.body.style.setProperty("--scrollbar-width",`${u}px`),document.body.style.overflow="hidden"),Yg&&(s=sw(document,"touchmove",p=>{var g;p.target===document.documentElement&&(p.touches.length>1||(g=p.preventDefault)==null||g.call(p))},{passive:!1})),En(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),t});function ZC(t){const e=JC(6),n=XC();n.value.set(e,t);const r=ke({get:()=>n.value.get(e)??!1,set:s=>n.value.set(e,s)});return jC(()=>{n.value.delete(e)}),r}function pu(t){const e=Sn(),n=e==null?void 0:e.type.emits,r={};return n!=null&&n.length||console.warn(`No emitted event found. Please check component: ${e==null?void 0:e.type.__name}`),n==null||n.forEach(s=>{r[jl(hn(s))]=(...i)=>t(s,...i)}),r}function eP(t){const e=Sn(),n=Object.keys((e==null?void 0:e.type.props)??{}).reduce((s,i)=>{const o=(e==null?void 0:e.type.props[i]).default;return o!==void 0&&(s[i]=o),s},{}),r=tE(t);return ke(()=>{const s={},i=(e==null?void 0:e.vnode.props)??{};return Object.keys(i).forEach(o=>{s[hn(o)]=i[o]}),Object.keys({...n,...s}).reduce((o,a)=>(r.value[a]!==void 0&&(o[a]=r.value[a]),o),{})})}function ow(t,e){const n=eP(t),r=e?pu(e):{};return ke(()=>({...n.value,...r}))}function jn(){const t=Sn(),e=fe(),n=ke(()=>{var o,a;return["#text","#comment"].includes((o=e.value)==null?void 0:o.$el.nodeName)?(a=e.value)==null?void 0:a.$el.nextElementSibling:fu(e)}),r=Object.assign({},t.exposed),s={};for(const o in t.props)Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>t.props[o]});if(Object.keys(r).length>0)for(const o in r)Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>r[o]});Object.defineProperty(s,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=s;function i(o){e.value=o,!(o instanceof Element||!o)&&(Object.defineProperty(s,"$el",{enumerable:!0,configurable:!0,get:()=>o.$el}),t.exposed=s)}return{forwardRef:i,currentRef:e,currentElement:n}}var tP=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},_i=new WeakMap,Il=new WeakMap,Al={},wh=0,aw=function(t){return t&&(t.host||aw(t.parentNode))},nP=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=aw(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},rP=function(t,e,n,r){var s=nP(e,Array.isArray(t)?t:[t]);Al[n]||(Al[n]=new WeakMap);var i=Al[n],o=[],a=new Set,l=new Set(s),u=function(d){!d||a.has(d)||(a.add(d),u(d.parentNode))};s.forEach(u);var h=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(p){if(a.has(p))h(p);else try{var g=p.getAttribute(r),_=g!==null&&g!=="false",w=(_i.get(p)||0)+1,I=(i.get(p)||0)+1;_i.set(p,w),i.set(p,I),o.push(p),w===1&&_&&Il.set(p,!0),I===1&&p.setAttribute(n,"true"),_||p.setAttribute(r,"true")}catch(x){console.error("aria-hidden: cannot operate on ",p,x)}})};return h(e),a.clear(),wh++,function(){o.forEach(function(d){var p=_i.get(d)-1,g=i.get(d)-1;_i.set(d,p),i.set(d,g),p||(Il.has(d)||d.removeAttribute(r),Il.delete(d)),g||d.removeAttribute(n)}),wh--,wh||(_i=new WeakMap,_i=new WeakMap,Il=new WeakMap,Al={})}},sP=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),s=tP(t);return s?(r.push.apply(r,Array.from(s.querySelectorAll("[aria-live]"))),rP(r,s,n,"aria-hidden")):function(){return null}};function iP(t){let e;Pt(()=>fu(t),n=>{n?e=sP(n):e&&e()}),su(()=>{e&&e()})}let oP=0;function dd(t,e="radix"){const n=iw({useId:void 0});return rg?`${e}-${rg()}`:n.useId?`${e}-${n.useId()}`:`${e}-${++oP}`}function aP(t,e){const n=fe(t);function r(s){return e[n.value][s]??n.value}return{state:n,dispatch:s=>{n.value=r(s)}}}const lP=Ue({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{var r,s;if(!n.default)return null;const i=Ff(n.default()),o=i.findIndex(h=>h.type!==Sr);if(o===-1)return i;const a=i[o];(r=a.props)==null||delete r.ref;const l=a.props?vn(e,a.props):e;e.class&&(s=a.props)!=null&&s.class&&delete a.props.class;const u=Bs(a,l);for(const h in l)h.startsWith("on")&&(u.props||(u.props={}),u.props[h]=l[h]);return i.length===1?u:(i[o]=u,i)}}}),si=Ue({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const r=t.asChild?"template":t.as;return typeof r=="string"&&["area","img","input"].includes(r)?()=>Ir(r,e):r!=="template"?()=>Ir(t.as,e,{default:n.default}):()=>Ir(lP,e,{default:n.default})}});function cP(t,e){const n=fe({}),r=fe("none"),s=t.value?"mounted":"unmounted",{state:i,dispatch:o}=aP(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),a=p=>{var g;if(ri){const _=new CustomEvent(p,{bubbles:!1,cancelable:!1});(g=e.value)==null||g.dispatchEvent(_)}};Pt(t,async(p,g)=>{var _;const w=g!==p;if(await En(),w){const I=r.value,x=Rl(e.value);p?(o("MOUNT"),a("enter"),x==="none"&&a("after-enter")):x==="none"||((_=n.value)==null?void 0:_.display)==="none"?(o("UNMOUNT"),a("leave"),a("after-leave")):g&&I!==x?(o("ANIMATION_OUT"),a("leave")):(o("UNMOUNT"),a("after-leave"))}},{immediate:!0});const l=p=>{const g=Rl(e.value),_=g.includes(p.animationName),w=i.value==="mounted"?"enter":"leave";p.target===e.value&&_&&(a(`after-${w}`),o("ANIMATION_END")),p.target===e.value&&g==="none"&&o("ANIMATION_END")},u=p=>{p.target===e.value&&(r.value=Rl(e.value))},h=Pt(e,(p,g)=>{p?(n.value=getComputedStyle(p),p.addEventListener("animationstart",u),p.addEventListener("animationcancel",l),p.addEventListener("animationend",l)):(o("ANIMATION_END"),g==null||g.removeEventListener("animationstart",u),g==null||g.removeEventListener("animationcancel",l),g==null||g.removeEventListener("animationend",l))},{immediate:!0}),d=Pt(i,()=>{const p=Rl(e.value);r.value=i.value==="mounted"?p:"none"});return su(()=>{h(),d()}),{isPresent:ke(()=>["mounted","unmountSuspended"].includes(i.value))}}function Rl(t){return t&&getComputedStyle(t).animationName||"none"}const lw=Ue({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(t,{slots:e,expose:n}){var r;const{present:s,forceMount:i}=Rf(t),o=fe(),{isPresent:a}=cP(s,o);n({present:a});let l=e.default({present:a});l=Ff(l||[]);const u=Sn();if(l&&(l==null?void 0:l.length)>1){const h=(r=u==null?void 0:u.parent)!=null&&r.type.name?`<${u.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${h}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}return()=>i.value||s.value||a.value?Ir(e.default({present:a})[0],{ref:h=>{const d=fu(h);return typeof(d==null?void 0:d.hasAttribute)>"u"||(d!=null&&d.hasAttribute("data-radix-popper-content-wrapper")?o.value=d.firstElementChild:o.value=d),d}}):null}}),[_s,uP]=ew("DialogRoot"),hP=Ue({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(t,{emit:e}){const n=t,r=KC(n,"open",e,{defaultValue:n.defaultOpen,passive:n.open===void 0}),s=fe(),i=fe(),{modal:o}=Rf(n);return uP({open:r,modal:o,openModal:()=>{r.value=!0},onOpenChange:a=>{r.value=a},onOpenToggle:()=>{r.value=!r.value},contentId:"",titleId:"",descriptionId:"",triggerElement:s,contentElement:i}),(a,l)=>Ze(a.$slots,"default",{open:N(r)})}}),dP=Ue({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t,n=_s(),{forwardRef:r,currentElement:s}=jn();return n.contentId||(n.contentId=dd(void 0,"radix-vue-dialog-content")),gs(()=>{n.triggerElement.value=s.value}),(i,o)=>(ie(),Ye(N(si),vn(e,{ref:N(r),type:i.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":N(n).open.value||!1,"aria-controls":N(n).open.value?N(n).contentId:void 0,"data-state":N(n).open.value?"open":"closed",onClick:N(n).onOpenToggle}),{default:J(()=>[Ze(i.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),fP=Ue({__name:"Teleport",props:{to:{default:"body"},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=HC();return(n,r)=>N(e)||n.forceMount?(ie(),Ye(rR,{key:0,to:n.to,disabled:n.disabled},[Ze(n.$slots,"default")],8,["to","disabled"])):Dn("",!0)}}),pP=Ue({__name:"DialogPortal",props:{to:{},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=t;return(n,r)=>(ie(),Ye(N(fP),_f(au(e)),{default:J(()=>[Ze(n.$slots,"default")]),_:3},16))}}),mP="dismissableLayer.pointerDownOutside",gP="dismissableLayer.focusOutside";function cw(t,e){const n=e.closest("[data-dismissable-layer]"),r=t.dataset.dismissableLayer===""?t:t.querySelector("[data-dismissable-layer]"),s=Array.from(t.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(n&&r===n||s.indexOf(r)<s.indexOf(n))}function _P(t,e){var n;const r=((n=e==null?void 0:e.value)==null?void 0:n.ownerDocument)??(globalThis==null?void 0:globalThis.document),s=fe(!1),i=fe(()=>{});return Us(o=>{if(!ri)return;const a=async u=>{const h=u.target;if(e!=null&&e.value){if(cw(e.value,h)){s.value=!1;return}if(u.target&&!s.value){let d=function(){tw(mP,t,p)};const p={originalEvent:u};u.pointerType==="touch"?(r.removeEventListener("click",i.value),i.value=d,r.addEventListener("click",i.value,{once:!0})):d()}else r.removeEventListener("click",i.value);s.value=!1}},l=window.setTimeout(()=>{r.addEventListener("pointerdown",a)},0);o(()=>{window.clearTimeout(l),r.removeEventListener("pointerdown",a),r.removeEventListener("click",i.value)})}),{onPointerDownCapture:()=>s.value=!0}}function yP(t,e){var n;const r=((n=e==null?void 0:e.value)==null?void 0:n.ownerDocument)??(globalThis==null?void 0:globalThis.document),s=fe(!1);return Us(i=>{if(!ri)return;const o=async a=>{e!=null&&e.value&&(await En(),!(!e.value||cw(e.value,a.target))&&a.target&&!s.value&&tw(gP,t,{originalEvent:a}))};r.addEventListener("focusin",o),i(()=>r.removeEventListener("focusin",o))}),{onFocusCapture:()=>s.value=!0,onBlurCapture:()=>s.value=!1}}const fr=ni({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),vP=Ue({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(t,{emit:e}){const n=t,r=e,{forwardRef:s,currentElement:i}=jn(),o=ke(()=>{var _;return((_=i.value)==null?void 0:_.ownerDocument)??globalThis.document}),a=ke(()=>fr.layersRoot),l=ke(()=>i.value?Array.from(a.value).indexOf(i.value):-1),u=ke(()=>fr.layersWithOutsidePointerEventsDisabled.size>0),h=ke(()=>{const _=Array.from(a.value),[w]=[...fr.layersWithOutsidePointerEventsDisabled].slice(-1),I=_.indexOf(w);return l.value>=I}),d=_P(async _=>{const w=[...fr.branches].some(I=>I==null?void 0:I.contains(_.target));!h.value||w||(r("pointerDownOutside",_),r("interactOutside",_),await En(),_.defaultPrevented||r("dismiss"))},i),p=yP(_=>{[...fr.branches].some(w=>w==null?void 0:w.contains(_.target))||(r("focusOutside",_),r("interactOutside",_),_.defaultPrevented||r("dismiss"))},i);qC("Escape",_=>{l.value===a.value.size-1&&(r("escapeKeyDown",_),_.defaultPrevented||r("dismiss"))});let g;return Us(_=>{i.value&&(n.disableOutsidePointerEvents&&(fr.layersWithOutsidePointerEventsDisabled.size===0&&(g=o.value.body.style.pointerEvents,o.value.body.style.pointerEvents="none"),fr.layersWithOutsidePointerEventsDisabled.add(i.value)),a.value.add(i.value),_(()=>{n.disableOutsidePointerEvents&&fr.layersWithOutsidePointerEventsDisabled.size===1&&(o.value.body.style.pointerEvents=g)}))}),Us(_=>{_(()=>{i.value&&(a.value.delete(i.value),fr.layersWithOutsidePointerEventsDisabled.delete(i.value))})}),(_,w)=>(ie(),Ye(N(si),{ref:N(s),"as-child":_.asChild,as:_.as,"data-dismissable-layer":"",style:La({pointerEvents:u.value?h.value?"auto":"none":void 0}),onFocusCapture:N(p).onFocusCapture,onBlurCapture:N(p).onBlurCapture,onPointerdownCapture:N(d).onPointerDownCapture},{default:J(()=>[Ze(_.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),bh="focusScope.autoFocusOnMount",Th="focusScope.autoFocusOnUnmount",Jg={bubbles:!1,cancelable:!0};function EP(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(qr(r,{select:e}),document.activeElement!==n)return!0}function wP(t){const e=uw(t),n=Xg(e,t),r=Xg(e.reverse(),t);return[n,r]}function uw(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Xg(t,e){for(const n of t)if(!bP(n,{upTo:e}))return n}function bP(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function TP(t){return t instanceof HTMLInputElement&&"select"in t}function qr(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&TP(t)&&e&&t.select()}}const IP=DC(()=>fe([]));function AP(){const t=IP();return{add(e){const n=t.value[0];e!==n&&(n==null||n.pause()),t.value=Zg(t.value,e),t.value.unshift(e)},remove(e){var n;t.value=Zg(t.value,e),(n=t.value[0])==null||n.resume()}}}function Zg(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function RP(t){return t.filter(e=>e.tagName!=="A")}const SP=Ue({__name:"FocusScope",props:{loop:{type:Boolean,default:!1},trapped:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["mountAutoFocus","unmountAutoFocus"],setup(t,{emit:e}){const n=t,r=e,{currentRef:s,currentElement:i}=jn(),o=fe(null),a=AP(),l=ni({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});Us(h=>{if(!ri)return;const d=i.value;if(!n.trapped)return;function p(I){if(l.paused||!d)return;const x=I.target;d.contains(x)?o.value=x:qr(o.value,{select:!0})}function g(I){if(l.paused||!d)return;const x=I.relatedTarget;x!==null&&(d.contains(x)||qr(o.value,{select:!0}))}function _(I){d.contains(o.value)||qr(d)}document.addEventListener("focusin",p),document.addEventListener("focusout",g);const w=new MutationObserver(_);d&&w.observe(d,{childList:!0,subtree:!0}),h(()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",g),w.disconnect()})}),Us(async h=>{const d=i.value;if(await En(),!d)return;a.add(l);const p=document.activeElement;if(!d.contains(p)){const g=new CustomEvent(bh,Jg);d.addEventListener(bh,_=>r("mountAutoFocus",_)),d.dispatchEvent(g),g.defaultPrevented||(EP(RP(uw(d)),{select:!0}),document.activeElement===p&&qr(d))}h(()=>{d.removeEventListener(bh,w=>r("mountAutoFocus",w));const g=new CustomEvent(Th,Jg),_=w=>{r("unmountAutoFocus",w)};d.addEventListener(Th,_),d.dispatchEvent(g),setTimeout(()=>{g.defaultPrevented||qr(p??document.body,{select:!0}),d.removeEventListener(Th,_),a.remove(l)},0)})});function u(h){if(!n.loop&&!n.trapped||l.paused)return;const d=h.key==="Tab"&&!h.altKey&&!h.ctrlKey&&!h.metaKey,p=document.activeElement;if(d&&p){const g=h.currentTarget,[_,w]=wP(g);_&&w?!h.shiftKey&&p===w?(h.preventDefault(),n.loop&&qr(_,{select:!0})):h.shiftKey&&p===_&&(h.preventDefault(),n.loop&&qr(w,{select:!0})):p===g&&h.preventDefault()}}return(h,d)=>(ie(),Ye(N(si),{ref_key:"currentRef",ref:s,tabindex:"-1","as-child":h.asChild,as:h.as,onKeydown:u},{default:J(()=>[Ze(h.$slots,"default")]),_:3},8,["as-child","as"]))}});function CP(t){return t?"open":"closed"}const hw=Ue({__name:"DialogContentImpl",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=_s(),{forwardRef:i,currentElement:o}=jn();return s.titleId||(s.titleId=dd(void 0,"radix-vue-dialog-title")),s.descriptionId||(s.descriptionId=dd(void 0,"radix-vue-dialog-description")),gs(()=>{s.contentElement=o,document.activeElement!==document.body&&(s.triggerElement.value=document.activeElement)}),(a,l)=>(ie(),Ye(N(SP),{"as-child":"",loop:"",trapped:n.trapFocus,onMountAutoFocus:l[5]||(l[5]=u=>r("openAutoFocus",u)),onUnmountAutoFocus:l[6]||(l[6]=u=>r("closeAutoFocus",u))},{default:J(()=>[z(N(vP),vn({id:N(s).contentId,ref:N(i),as:a.as,"as-child":a.asChild,"disable-outside-pointer-events":a.disableOutsidePointerEvents,role:"dialog","aria-describedby":N(s).descriptionId,"aria-labelledby":N(s).titleId,"data-state":N(CP)(N(s).open.value)},a.$attrs,{onDismiss:l[0]||(l[0]=u=>N(s).onOpenChange(!1)),onEscapeKeyDown:l[1]||(l[1]=u=>r("escapeKeyDown",u)),onFocusOutside:l[2]||(l[2]=u=>r("focusOutside",u)),onInteractOutside:l[3]||(l[3]=u=>r("interactOutside",u)),onPointerDownOutside:l[4]||(l[4]=u=>r("pointerDownOutside",u))}),{default:J(()=>[Ze(a.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),PP=Ue({__name:"DialogContentModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=_s(),i=pu(r),{forwardRef:o,currentElement:a}=jn();return iP(a),(l,u)=>(ie(),Ye(hw,vn({...n,...N(i)},{ref:N(o),"trap-focus":N(s).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:u[0]||(u[0]=h=>{var d;h.defaultPrevented||(h.preventDefault(),(d=N(s).triggerElement.value)==null||d.focus())}),onPointerDownOutside:u[1]||(u[1]=h=>{const d=h.detail.originalEvent,p=d.button===0&&d.ctrlKey===!0;(d.button===2||p)&&h.preventDefault()}),onFocusOutside:u[2]||(u[2]=h=>{h.preventDefault()})}),{default:J(()=>[Ze(l.$slots,"default")]),_:3},16,["trap-focus"]))}}),kP=Ue({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=pu(e);jn();const s=_s(),i=fe(!1),o=fe(!1);return(a,l)=>(ie(),Ye(hw,vn({...n,...N(r)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:l[0]||(l[0]=u=>{var h;u.defaultPrevented||(i.value||(h=N(s).triggerElement.value)==null||h.focus(),u.preventDefault()),i.value=!1,o.value=!1}),onInteractOutside:l[1]||(l[1]=u=>{var h;u.defaultPrevented||(i.value=!0,u.detail.originalEvent.type==="pointerdown"&&(o.value=!0));const d=u.target;(h=N(s).triggerElement.value)!=null&&h.contains(d)&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&o.value&&u.preventDefault()})}),{default:J(()=>[Ze(a.$slots,"default")]),_:3},16))}}),xP=Ue({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=_s(),i=pu(r),{forwardRef:o}=jn();return(a,l)=>(ie(),Ye(N(lw),{present:a.forceMount||N(s).open.value},{default:J(()=>[N(s).modal.value?(ie(),Ye(PP,vn({key:0,ref:N(o)},{...n,...N(i),...a.$attrs}),{default:J(()=>[Ze(a.$slots,"default")]),_:3},16)):(ie(),Ye(kP,vn({key:1,ref:N(o)},{...n,...N(i),...a.$attrs}),{default:J(()=>[Ze(a.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),NP=Ue({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean},as:{}},setup(t){const e=_s();return ZC(!0),jn(),(n,r)=>(ie(),Ye(N(si),{as:n.as,"as-child":n.asChild,"data-state":N(e).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:J(()=>[Ze(n.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),OP=Ue({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=_s(),{forwardRef:n}=jn();return(r,s)=>{var i;return(i=N(e))!=null&&i.modal.value?(ie(),Ye(N(lw),{key:0,present:r.forceMount||N(e).open.value},{default:J(()=>[z(NP,vn(r.$attrs,{ref:N(n),as:r.as,"as-child":r.asChild}),{default:J(()=>[Ze(r.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):Dn("",!0)}}}),DP=Ue({__name:"DialogClose",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;jn();const n=_s();return(r,s)=>(ie(),Ye(N(si),vn(e,{type:r.as==="button"?"button":void 0,onClick:s[0]||(s[0]=i=>N(n).onOpenChange(!1))}),{default:J(()=>[Ze(r.$slots,"default")]),_:3},16,["type"]))}}),MP=Ue({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{default:"label"}},setup(t){const e=t;return jn(),(n,r)=>(ie(),Ye(N(si),vn(e,{onMousedown:r[0]||(r[0]=s=>{!s.defaultPrevented&&s.detail>1&&s.preventDefault()})}),{default:J(()=>[Ze(n.$slots,"default")]),_:3},16))}});function LP(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}LP();function dw(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=dw(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function VP(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=dw(t))&&(r&&(r+=" "),r+=e);return r}const Uf="-",FP=t=>{const e=BP(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const a=o.split(Uf);return a[0]===""&&a.length!==1&&a.shift(),fw(a,e)||UP(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}}},fw=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?fw(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Uf);return(o=e.validators.find(({validator:a})=>a(i)))==null?void 0:o.classGroupId},e_=/^\[(.+)\]$/,UP=t=>{if(e_.test(t)){const e=e_.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},BP=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return jP(Object.entries(t.classGroups),n).forEach(([i,o])=>{fd(o,r,i,e)}),r},fd=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:t_(e,s);i.classGroupId=n;return}if(typeof s=="function"){if($P(s)){fd(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{fd(o,t_(e,i),n,r)})})},t_=(t,e)=>{let n=t;return e.split(Uf).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},$P=t=>t.isThemeGetter,jP=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,a])=>[e+o,a])):i);return[n,s]}):t,WP=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},pw="!",qP=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=a=>{const l=[];let u=0,h=0,d;for(let I=0;I<a.length;I++){let x=a[I];if(u===0){if(x===s&&(r||a.slice(I,I+i)===e)){l.push(a.slice(h,I)),h=I+i;continue}if(x==="/"){d=I;continue}}x==="["?u++:x==="]"&&u--}const p=l.length===0?a:a.substring(h),g=p.startsWith(pw),_=g?p.substring(1):p,w=d&&d>h?d-h:void 0;return{modifiers:l,hasImportantModifier:g,baseClassName:_,maybePostfixModifierPosition:w}};return n?a=>n({className:a,parseClassName:o}):o},HP=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},zP=t=>({cache:WP(t.cacheSize),parseClassName:qP(t),...FP(t)}),KP=/\s+/,GP=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split(KP);let a="";for(let l=o.length-1;l>=0;l-=1){const u=o[l],{modifiers:h,hasImportantModifier:d,baseClassName:p,maybePostfixModifierPosition:g}=n(u);let _=!!g,w=r(_?p.substring(0,g):p);if(!w){if(!_){a=u+(a.length>0?" "+a:a);continue}if(w=r(p),!w){a=u+(a.length>0?" "+a:a);continue}_=!1}const I=HP(h).join(":"),x=d?I+pw:I,M=x+w;if(i.includes(M))continue;i.push(M);const O=s(w,_);for(let L=0;L<O.length;++L){const q=O[L];i.push(x+q)}a=u+(a.length>0?" "+a:a)}return a};function QP(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=mw(e))&&(r&&(r+=" "),r+=n);return r}const mw=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=mw(t[r]))&&(n&&(n+=" "),n+=e);return n};function YP(t,...e){let n,r,s,i=o;function o(l){const u=e.reduce((h,d)=>d(h),t());return n=zP(u),r=n.cache.get,s=n.cache.set,i=a,a(l)}function a(l){const u=r(l);if(u)return u;const h=GP(l,n);return s(l,h),h}return function(){return i(QP.apply(null,arguments))}}const tt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},gw=/^\[(?:([a-z-]+):)?(.+)\]$/i,JP=/^\d+\/\d+$/,XP=new Set(["px","full","screen"]),ZP=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ek=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,tk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,nk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,rk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,pr=t=>Oi(t)||XP.has(t)||JP.test(t),Br=t=>eo(t,"length",hk),Oi=t=>!!t&&!Number.isNaN(Number(t)),Ih=t=>eo(t,"number",Oi),xo=t=>!!t&&Number.isInteger(Number(t)),sk=t=>t.endsWith("%")&&Oi(t.slice(0,-1)),Te=t=>gw.test(t),$r=t=>ZP.test(t),ik=new Set(["length","size","percentage"]),ok=t=>eo(t,ik,_w),ak=t=>eo(t,"position",_w),lk=new Set(["image","url"]),ck=t=>eo(t,lk,fk),uk=t=>eo(t,"",dk),No=()=>!0,eo=(t,e,n)=>{const r=gw.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},hk=t=>ek.test(t)&&!tk.test(t),_w=()=>!1,dk=t=>nk.test(t),fk=t=>rk.test(t),pk=()=>{const t=tt("colors"),e=tt("spacing"),n=tt("blur"),r=tt("brightness"),s=tt("borderColor"),i=tt("borderRadius"),o=tt("borderSpacing"),a=tt("borderWidth"),l=tt("contrast"),u=tt("grayscale"),h=tt("hueRotate"),d=tt("invert"),p=tt("gap"),g=tt("gradientColorStops"),_=tt("gradientColorStopPositions"),w=tt("inset"),I=tt("margin"),x=tt("opacity"),M=tt("padding"),O=tt("saturate"),L=tt("scale"),q=tt("sepia"),Z=tt("skew"),S=tt("space"),v=tt("translate"),E=()=>["auto","contain","none"],T=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",Te,e],P=()=>[Te,e],A=()=>["",pr,Br],ut=()=>["auto",Oi,Te],xt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Be=()=>["solid","dashed","dotted","double","none"],pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ie=()=>["start","end","center","between","around","evenly","stretch"],vt=()=>["","0",Te],rn=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ht=()=>[Oi,Te];return{cacheSize:500,separator:":",theme:{colors:[No],spacing:[pr,Br],blur:["none","",$r,Te],brightness:ht(),borderColor:[t],borderRadius:["none","","full",$r,Te],borderSpacing:P(),borderWidth:A(),contrast:ht(),grayscale:vt(),hueRotate:ht(),invert:vt(),gap:P(),gradientColorStops:[t],gradientColorStopPositions:[sk,Br],inset:C(),margin:C(),opacity:ht(),padding:P(),saturate:ht(),scale:ht(),sepia:vt(),skew:ht(),space:P(),translate:P()},classGroups:{aspect:[{aspect:["auto","square","video",Te]}],container:["container"],columns:[{columns:[$r]}],"break-after":[{"break-after":rn()}],"break-before":[{"break-before":rn()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...xt(),Te]}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",xo,Te]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Te]}],grow:[{grow:vt()}],shrink:[{shrink:vt()}],order:[{order:["first","last","none",xo,Te]}],"grid-cols":[{"grid-cols":[No]}],"col-start-end":[{col:["auto",{span:["full",xo,Te]},Te]}],"col-start":[{"col-start":ut()}],"col-end":[{"col-end":ut()}],"grid-rows":[{"grid-rows":[No]}],"row-start-end":[{row:["auto",{span:[xo,Te]},Te]}],"row-start":[{"row-start":ut()}],"row-end":[{"row-end":ut()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Te]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Ie()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Ie(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Ie(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[I]}],mx:[{mx:[I]}],my:[{my:[I]}],ms:[{ms:[I]}],me:[{me:[I]}],mt:[{mt:[I]}],mr:[{mr:[I]}],mb:[{mb:[I]}],ml:[{ml:[I]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Te,e]}],"min-w":[{"min-w":[Te,e,"min","max","fit"]}],"max-w":[{"max-w":[Te,e,"none","full","min","max","fit","prose",{screen:[$r]},$r]}],h:[{h:[Te,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Te,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Te,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Te,e,"auto","min","max","fit"]}],"font-size":[{text:["base",$r,Br]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ih]}],"font-family":[{font:[No]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Te]}],"line-clamp":[{"line-clamp":["none",Oi,Ih]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",pr,Te]}],"list-image":[{"list-image":["none",Te]}],"list-style-type":[{list:["none","disc","decimal",Te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Be(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",pr,Br]}],"underline-offset":[{"underline-offset":["auto",pr,Te]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...xt(),ak]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ok]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ck]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...Be(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:Be()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Be()]}],"outline-offset":[{"outline-offset":[pr,Te]}],"outline-w":[{outline:[pr,Br]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:A()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[pr,Br]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",$r,uk]}],"shadow-color":[{shadow:[No]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...pe(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":pe()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",$r,Te]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[d]}],saturate:[{saturate:[O]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Te]}],duration:[{duration:ht()}],ease:[{ease:["linear","in","out","in-out",Te]}],delay:[{delay:ht()}],animate:[{animate:["none","spin","ping","pulse","bounce",Te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[xo,Te]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[Z]}],"skew-y":[{"skew-y":[Z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Te]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Te]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Te]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[pr,Br,Ih]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},mk=YP(pk);function or(...t){return mk(VP(t))}const vr=Ue({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;return(n,r)=>(ie(),Ye(N(si),{as:n.as,"as-child":n.asChild,class:dn(N(or)(N(gk)({variant:n.variant,size:n.size}),e.class))},{default:J(()=>[Ze(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),gk=Lf("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});function yw(t){return Xc()?(yf(t),!0):!1}function mu(t){return typeof t=="function"?t():N(t)}const _k=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const yk=t=>typeof t<"u",vk=Object.prototype.toString,Ek=t=>vk.call(t)==="[object Object]",vw=()=>{};function wk(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const Ew=t=>t();function bk(t=Ew){const e=fe(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:tu(e),pause:n,resume:r,eventFilter:s}}function Tk(t){return Sn()}function Ik(...t){if(t.length!==1)return tE(...t);const e=t[0];return typeof e=="function"?tu(WA(()=>({get:e,set:vw}))):fe(e)}function Ak(t,e,n={}){const{eventFilter:r=Ew,...s}=n;return Pt(t,wk(r,e),s)}function Rk(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:l}=bk(r);return{stop:Ak(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:l}}function ww(t,e=!0,n){Tk()?gs(t,n):e?t():En(t)}const va=_k?window:void 0;function bw(t){var e;const n=mu(t);return(e=n==null?void 0:n.$el)!=null?e:n}function n_(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=va):[e,n,r,s]=t,!e)return vw;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(h=>h()),i.length=0},a=(h,d,p,g)=>(h.addEventListener(d,p,g),()=>h.removeEventListener(d,p,g)),l=Pt(()=>[bw(e),mu(s)],([h,d])=>{if(o(),!h)return;const p=Ek(d)?{...d}:d;i.push(...n.flatMap(g=>r.map(_=>a(h,g,_,p))))},{immediate:!0,flush:"post"}),u=()=>{l(),o()};return yw(u),u}function Sk(){const t=fe(!1),e=Sn();return e&&gs(()=>{t.value=!0},e),t}function Ck(t){const e=Sk();return ke(()=>(e.value,!!t()))}function Pk(t,e={}){const{window:n=va}=e,r=Ck(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=fe(!1),o=u=>{i.value=u.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},l=Us(()=>{r.value&&(a(),s=n.matchMedia(mu(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return yw(()=>{l(),a(),s=void 0}),i}function kk(t){return JSON.parse(JSON.stringify(t))}const Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cl="__vueuse_ssr_handlers__",xk=Nk();function Nk(){return Cl in Sl||(Sl[Cl]=Sl[Cl]||{}),Sl[Cl]}function Tw(t,e){return xk[t]||e}function Ok(t){return Pk("(prefers-color-scheme: dark)",t)}function Dk(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Mk={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},r_="vueuse-storage";function Lk(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:h,window:d=va,eventFilter:p,onError:g=T=>{console.error(T)},initOnMounted:_}=r,w=(h?Xv:fe)(typeof e=="function"?e():e);if(!n)try{n=Tw("getDefaultStorage",()=>{var T;return(T=va)==null?void 0:T.localStorage})()}catch(T){g(T)}if(!n)return w;const I=mu(e),x=Dk(I),M=(s=r.serializer)!=null?s:Mk[x],{pause:O,resume:L}=Rk(w,()=>Z(w.value),{flush:i,deep:o,eventFilter:p});d&&a&&ww(()=>{n instanceof Storage?n_(d,"storage",v):n_(d,r_,E),_&&v()}),_||v();function q(T,C){if(d){const P={key:t,oldValue:T,newValue:C,storageArea:n};d.dispatchEvent(n instanceof Storage?new StorageEvent("storage",P):new CustomEvent(r_,{detail:P}))}}function Z(T){try{const C=n.getItem(t);if(T==null)q(C,null),n.removeItem(t);else{const P=M.write(T);C!==P&&(n.setItem(t,P),q(C,P))}}catch(C){g(C)}}function S(T){const C=T?T.newValue:n.getItem(t);if(C==null)return l&&I!=null&&n.setItem(t,M.write(I)),I;if(!T&&u){const P=M.read(C);return typeof u=="function"?u(P,I):x==="object"&&!Array.isArray(P)?{...I,...P}:P}else return typeof C!="string"?C:M.read(C)}function v(T){if(!(T&&T.storageArea!==n)){if(T&&T.key==null){w.value=I;return}if(!(T&&T.key!==t)){O();try{(T==null?void 0:T.newValue)!==M.write(w.value)&&(w.value=S(T))}catch(C){g(C)}finally{T?En(L):L()}}}}function E(T){v(T.detail)}return w}const Vk="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Fk(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=va,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:u,disableTransition:h=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},p=Ok({window:s}),g=ke(()=>p.value?"dark":"light"),_=l||(o==null?Ik(r):Lk(o,r,i,{window:s,listenToStorageChanges:a})),w=ke(()=>_.value==="auto"?g.value:_.value),I=Tw("updateHTMLAttrs",(L,q,Z)=>{const S=typeof L=="string"?s==null?void 0:s.document.querySelector(L):bw(L);if(!S)return;const v=new Set,E=new Set;let T=null;if(q==="class"){const P=Z.split(/\s/g);Object.values(d).flatMap(A=>(A||"").split(/\s/g)).filter(Boolean).forEach(A=>{P.includes(A)?v.add(A):E.add(A)})}else T={key:q,value:Z};if(v.size===0&&E.size===0&&T===null)return;let C;h&&(C=s.document.createElement("style"),C.appendChild(document.createTextNode(Vk)),s.document.head.appendChild(C));for(const P of v)S.classList.add(P);for(const P of E)S.classList.remove(P);T&&S.setAttribute(T.key,T.value),h&&(s.getComputedStyle(C).opacity,document.head.removeChild(C))});function x(L){var q;I(e,n,(q=d[L])!=null?q:L)}function M(L){t.onChanged?t.onChanged(L,x):x(L)}Pt(w,M,{flush:"post",immediate:!0}),ww(()=>M(w.value));const O=ke({get(){return u?_.value:w.value},set(L){_.value=L}});try{return Object.assign(O,{store:_,system:g,state:w})}catch{return O}}function Uk(t,e,n,r={}){var s,i,o;const{clone:a=!1,passive:l=!1,eventName:u,deep:h=!1,defaultValue:d,shouldEmit:p}=r,g=Sn(),_=n||(g==null?void 0:g.emit)||((s=g==null?void 0:g.$emit)==null?void 0:s.bind(g))||((o=(i=g==null?void 0:g.proxy)==null?void 0:i.$emit)==null?void 0:o.bind(g==null?void 0:g.proxy));let w=u;w=w||`update:${e.toString()}`;const I=O=>a?typeof a=="function"?a(O):kk(O):O,x=()=>yk(t[e])?I(t[e]):d,M=O=>{p?p(O)&&_(w,O):_(w,O)};if(l){const O=x(),L=fe(O);let q=!1;return Pt(()=>t[e],Z=>{q||(q=!0,L.value=I(Z),En(()=>q=!1))}),Pt(L,Z=>{!q&&(Z!==t[e]||h)&&M(Z)},{deep:h}),L}else return ke({get(){return x()},set(O){M(O)}})}const Zr=Ue({__name:"Input",props:{defaultValue:{},modelValue:{},class:{}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,s=Uk(n,"modelValue",e,{passive:!0,defaultValue:n.defaultValue});return(i,o)=>cc((ie(),Re("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>lt(s)?s.value=a:null),class:dn(N(or)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n.class))},null,2)),[[Df,N(s)]])}}),es=Ue({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,n=ke(()=>{const{class:r,...s}=e;return s});return(r,s)=>(ie(),Ye(N(MP),vn(n.value,{class:N(or)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e.class)}),{default:J(()=>[Ze(r.$slots,"default")]),_:3},16,["class"]))}});var s_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=function(t,e){if(!t)throw to(e)},to=function(t){return new Error("Firebase Database ("+Iw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Aw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new $k;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $k extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rw=function(t){const e=Aw(t);return gu.encodeByteArray(e,!0)},pc=function(t){return Rw(t).replace(/\./g,"")},mc=function(t){try{return gu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t){return Sw(void 0,t)}function Sw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Wk(n)||(t[n]=Sw(t[n],e[n]));return t}function Wk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=()=>qk().__FIREBASE_DEFAULTS__,zk=()=>{if(typeof process>"u"||typeof s_>"u")return;const t=s_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mc(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return Hk()||zk()||Kk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cw=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gk=t=>{const e=Cw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pw=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},kw=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pc(JSON.stringify(n)),pc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function Yk(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zk(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nw(){return Iw.NODE_ADMIN===!0}function e1(){return!Yk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ow(){try{return typeof indexedDB=="object"}catch{return!1}}function t1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="FirebaseError";class ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=n1,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?r1(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ar(s,a,r)}}function r1(t,e){return t.replace(s1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const s1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){return JSON.parse(t)}function Dt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=wa(mc(i[0])||""),n=wa(mc(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},i1=function(t){const e=Dw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},o1=function(t){const e=Dw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function _c(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(i_(i)&&i_(o)){if(!_c(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function i_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $o(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(s<<5|s>>>27)+u+l+h+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function l1(t,e){const n=new c1(t,e);return n.subscribe.bind(n)}class c1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");u1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ah),s.error===void 0&&(s.error=Ah),s.complete===void 0&&(s.complete=Ah);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ah(){}function h1(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,te(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ea;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m1(e))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cs){return this.instances.has(e)}getOptions(e=Cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cs){return this.component?this.component.multipleInstances?e:Cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p1(t){return t===Cs?void 0:t}function m1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const _1={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},y1=Se.INFO,v1={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},E1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=v1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ba{constructor(e){this.name=e,this._logLevel=y1,this._logHandler=E1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const w1=(t,e)=>e.some(n=>t instanceof n);let o_,a_;function b1(){return o_||(o_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T1(){return a_||(a_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mw=new WeakMap,md=new WeakMap,Lw=new WeakMap,Rh=new WeakMap,$f=new WeakMap;function I1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ss(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mw.set(n,t)}).catch(()=>{}),$f.set(e,t),e}function A1(t){if(md.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});md.set(t,e)}let gd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return md.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ss(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function R1(t){gd=t(gd)}function S1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sh(this),e,...n);return Lw.set(r,e.sort?e.sort():[e]),ss(r)}:T1().includes(t)?function(...e){return t.apply(Sh(this),e),ss(Mw.get(this))}:function(...e){return ss(t.apply(Sh(this),e))}}function C1(t){return typeof t=="function"?S1(t):(t instanceof IDBTransaction&&A1(t),w1(t,b1())?new Proxy(t,gd):t)}function ss(t){if(t instanceof IDBRequest)return I1(t);if(Rh.has(t))return Rh.get(t);const e=C1(t);return e!==t&&(Rh.set(t,e),$f.set(e,t)),e}const Sh=t=>$f.get(t);function P1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ss(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ss(o.result),l.oldVersion,l.newVersion,ss(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const k1=["get","getKey","getAll","getAllKeys","count"],x1=["put","add","delete","clear"],Ch=new Map;function l_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ch.get(e))return Ch.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=x1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||k1.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Ch.set(e,i),i}R1(t=>({...t,get:(e,n,r)=>l_(e,n)||t.get(e,n,r),has:(e,n)=>!!l_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function O1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",c_="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Ba("@firebase/app"),D1="@firebase/app-compat",M1="@firebase/analytics-compat",L1="@firebase/analytics",V1="@firebase/app-check-compat",F1="@firebase/app-check",U1="@firebase/auth",B1="@firebase/auth-compat",$1="@firebase/database",j1="@firebase/data-connect",W1="@firebase/database-compat",q1="@firebase/functions",H1="@firebase/functions-compat",z1="@firebase/installations",K1="@firebase/installations-compat",G1="@firebase/messaging",Q1="@firebase/messaging-compat",Y1="@firebase/performance",J1="@firebase/performance-compat",X1="@firebase/remote-config",Z1="@firebase/remote-config-compat",ex="@firebase/storage",tx="@firebase/storage-compat",nx="@firebase/firestore",rx="@firebase/vertexai-preview",sx="@firebase/firestore-compat",ix="firebase",ox="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="[DEFAULT]",ax={[_d]:"fire-core",[D1]:"fire-core-compat",[L1]:"fire-analytics",[M1]:"fire-analytics-compat",[F1]:"fire-app-check",[V1]:"fire-app-check-compat",[U1]:"fire-auth",[B1]:"fire-auth-compat",[$1]:"fire-rtdb",[j1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[q1]:"fire-fn",[H1]:"fire-fn-compat",[z1]:"fire-iid",[K1]:"fire-iid-compat",[G1]:"fire-fcm",[Q1]:"fire-fcm-compat",[Y1]:"fire-perf",[J1]:"fire-perf-compat",[X1]:"fire-rc",[Z1]:"fire-rc-compat",[ex]:"fire-gcs",[tx]:"fire-gcs-compat",[nx]:"fire-fst",[sx]:"fire-fst-compat",[rx]:"fire-vertex","fire-js":"fire-js",[ix]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map,lx=new Map,vd=new Map;function u_(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rr(t){const e=t.name;if(vd.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;vd.set(e,t);for(const n of yc.values())u_(n,t);for(const n of lx.values())u_(n,t);return!0}function jf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},is=new no("app","Firebase",cx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=ox;function Vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw is.create("bad-app-name",{appName:String(s)});if(n||(n=Pw()),!n)throw is.create("no-options");const i=yc.get(s);if(i){if(_c(n,i.options)&&_c(r,i.config))return i;throw is.create("duplicate-app",{appName:s})}const o=new g1(s);for(const l of vd.values())o.addComponent(l);const a=new ux(n,r,o);return yc.set(s,a),a}function Wf(t=yd){const e=yc.get(t);if(!e&&t===yd&&Pw())return Vw();if(!e)throw is.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=ax[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}rr(new Fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="firebase-heartbeat-database",dx=1,ba="firebase-heartbeat-store";let Ph=null;function Fw(){return Ph||(Ph=P1(hx,dx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ba)}catch(n){console.warn(n)}}}}).catch(t=>{throw is.create("idb-open",{originalErrorMessage:t.message})})),Ph}async function fx(t){try{const n=(await Fw()).transaction(ba),r=await n.objectStore(ba).get(Uw(t));return await n.done,r}catch(e){if(e instanceof ar)Cr.warn(e.message);else{const n=is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(n.message)}}}async function h_(t,e){try{const r=(await Fw()).transaction(ba,"readwrite");await r.objectStore(ba).put(e,Uw(t)),await r.done}catch(n){if(n instanceof ar)Cr.warn(n.message);else{const r=is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function Uw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=1024,mx=30*24*60*60*1e3;class gx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=d_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=d_(),{heartbeatsToSend:r,unsentEntries:s}=_x(this._heartbeatsCache.heartbeats),i=pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cr.warn(n),""}}}function d_(){return new Date().toISOString().substring(0,10)}function _x(t,e=px){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),f_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),f_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ow()?t1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return h_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return h_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function f_(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){rr(new Fn("platform-logger",e=>new N1(e),"PRIVATE")),rr(new Fn("heartbeat",e=>new gx(e),"PRIVATE")),gn(_d,c_,t),gn(_d,c_,"esm2017"),gn("fire-js","")}vx("");var Ex="firebase",wx="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(Ex,wx,"app");function qf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Bw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bx=Bw,$w=new no("auth","Firebase",Bw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Ba("@firebase/auth");function Tx(t,...e){vc.logLevel<=Se.WARN&&vc.warn(`Auth (${ys}): ${t}`,...e)}function Kl(t,...e){vc.logLevel<=Se.ERROR&&vc.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,...e){throw Hf(t,...e)}function Jn(t,...e){return Hf(t,...e)}function jw(t,e,n){const r=Object.assign(Object.assign({},bx()),{[e]:n});return new no("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return jw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $w.create(t,...e)}function _e(t,e,...n){if(!t)throw Hf(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kl(e),new Error(e)}function Pr(t,e){t||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ix(){return p_()==="http:"||p_()==="https:"}function p_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ix()||Xk()||"connection"in navigator)?navigator.onLine:!0}function Rx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=Bf()||xw()}get(){return Ax()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e){Pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=new $a(3e4,6e4);function vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,r,s={}){return qw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return Jk()||(u.referrerPolicy="no-referrer"),Ww.fetch()(Hw(t,t.config.apiHost,n,a),u)})}async function qw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Sx),e);try{const s=new kx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jw(t,h,u);Un(t,h)}}catch(s){if(s instanceof ar)throw s;Un(t,"network-request-failed",{message:String(s)})}}async function ja(t,e,n,r,s={}){const i=await Es(t,e,n,r,s);return"mfaPendingCredential"in i&&Un(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zf(t.config,s):`${t.config.apiScheme}://${s}`}function Px(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),Cx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jn(t,e,r);return s.customData._tokenResponse=n,s}function m_(t){return t!==void 0&&t.enterprise!==void 0}class xx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Px(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Nx(t,e){return Es(t,"GET","/v2/recaptchaConfig",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function zw(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dx(t,e=!1){const n=nn(t),r=await n.getIdToken(e),s=Kf(r);_e(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ta(kh(s.auth_time)),issuedAtTime:ta(kh(s.iat)),expirationTime:ta(kh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kh(t){return Number(t)*1e3}function Kf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const s=mc(n);return s?JSON.parse(s):(Kl("Failed to decode base64 JWT payload"),null)}catch(s){return Kl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function g_(t){const e=Kf(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ar&&Mx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ta(this.lastLoginAt),this.creationTime=ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ta(t,zw(n,{idToken:r}));_e(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kw(i.providerUserInfo):[],a=Fx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function Vx(t){const e=nn(t);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kw(t){return t.map(e=>{var{providerId:n}=e,r=qf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(t,e){const n=await qw(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Hw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ww.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bx(t,e){return Es(t,"POST","/v2/accounts:revokeToken",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):g_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=g_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ux(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Di;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ta(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dx(this,e)}reload(){return Vx(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await Ta(this,Ox(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:L,isAnonymous:q,providerData:Z,stsTokenManager:S}=n;_e(O&&S,e,"internal-error");const v=Di.fromJSON(this.name,S);_e(typeof O=="string",e,"internal-error"),jr(d,e.name),jr(p,e.name),_e(typeof L=="boolean",e,"internal-error"),_e(typeof q=="boolean",e,"internal-error"),jr(g,e.name),jr(_,e.name),jr(w,e.name),jr(I,e.name),jr(x,e.name),jr(M,e.name);const E=new wr({uid:O,auth:e,email:p,emailVerified:L,displayName:d,isAnonymous:q,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:v,createdAt:x,lastLoginAt:M});return Z&&Array.isArray(Z)&&(E.providerData=Z.map(T=>Object.assign({},T))),I&&(E._redirectEventId=I),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Di;s.updateFromServerResponse(n);const i=new wr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ec(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];_e(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Di;a.updateFromIdToken(r);const l=new wr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new Map;function br(t){Pr(t instanceof Function,"Expected a class definition");let e=__.get(t);return e?(Pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,__.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gw.type="NONE";const y_=Gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(br(y_),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||br(y_);const o=Gl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=wr._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Mi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Mi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eb(e))return"Blackberry";if(tb(e))return"Webos";if(Yw(e))return"Safari";if((e.includes("chrome/")||Jw(e))&&!e.includes("edge/"))return"Chrome";if(Zw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qw(t=Yt()){return/firefox\//i.test(t)}function Yw(t=Yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jw(t=Yt()){return/crios\//i.test(t)}function Xw(t=Yt()){return/iemobile/i.test(t)}function Zw(t=Yt()){return/android/i.test(t)}function eb(t=Yt()){return/blackberry/i.test(t)}function tb(t=Yt()){return/webos/i.test(t)}function Gf(t=Yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $x(t=Yt()){var e;return Gf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jx(){return Zk()&&document.documentMode===10}function nb(t=Yt()){return Gf(t)||Zw(t)||tb(t)||eb(t)||/windows phone/i.test(t)||Xw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t,e=[]){let n;switch(t){case"Browser":n=v_(Yt());break;case"Worker":n=`${v_(Yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t,e={}){return Es(t,"GET","/v2/passwordPolicy",vs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=6;class zx{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Hx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new E_(this),this.idTokenSubscription=new E_(this),this.beforeStateQueue=new Wx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$w,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=br(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zw(this,{idToken:e}),r=await wr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(Ar(this));const n=e?nn(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qx(this),n=new zx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&br(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[br(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Tx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ii(t){return nn(t)}class E_{constructor(e){this.auth=e,this.observer=null,this.addObserver=l1(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gx(t){vu=t}function sb(t){return vu.loadJS(t)}function Qx(){return vu.recaptchaEnterpriseScript}function Yx(){return vu.gapiScript}function Jx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Xx="recaptcha-enterprise",Zx="NO_RECAPTCHA";class eN{constructor(e){this.type=Xx,this.auth=ii(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Nx(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new xx(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;m_(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Zx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&m_(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Qx();l.length!==0&&(l+=a),sb(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function w_(t,e,n,r=!1){const s=new eN(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await w_(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await w_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e){const n=jf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_c(i,e??{}))return s;Un(s,"already-initialized")}return n.initialize({options:e})}function tN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(br);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nN(t,e,n){const r=ii(t);_e(r._canInitEmulator,r,"emulator-config-failed"),_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ob(e),{host:o,port:a}=rN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),sN()}function ob(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rN(t){const e=ob(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:b_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:b_(o)}}}function b_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}async function iN(t,e){return Es(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(t,e){return ja(t,"POST","/v1/accounts:signInWithPassword",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}async function lN(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends Qf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,n,"signInWithPassword",oN);case"emailLink":return aN(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,r,"signUpPassword",iN);case"emailLink":return lN(e,{idToken:n,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e){return ja(t,"POST","/v1/accounts:signInWithIdp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="http://localhost";class $s extends Qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:cN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hN(t){const e=Bo($o(t)).link,n=e?Bo($o(e)).deep_link_id:null,r=Bo($o(t)).deep_link_id;return(r?Bo($o(r)).link:null)||r||n||e||t}class Yf{constructor(e){var n,r,s,i,o,a;const l=Bo($o(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=uN((s=l.mode)!==null&&s!==void 0?s:null);_e(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hN(e);try{return new Yf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,n){return Ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yf.parseLink(n);return _e(r,"argument-error"),Ia._fromEmailAndCode(e,r.code,r.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends ab{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Wa{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $s._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Wa{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Wa{constructor(){super("twitter.com")}static credential(e,n){return $s._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(t,e){return ja(t,"POST","/v1/accounts:signUp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wr._fromIdTokenResponse(e,r,s),o=T_(r);return new js({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=T_(r);return new js({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function T_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends ar{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wc(e,n,r,s)}}function lb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(t,i,e,r):i})}async function fN(t,e,n=!1){const r=await Ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return js._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e,n=!1){const{auth:r}=t;if(Gn(r.app))return Promise.reject(Ar(r));const s="reauthenticate";try{const i=await Ta(t,lb(r,s,e,t),n);_e(i.idToken,r,"internal-error");const o=Kf(i.idToken);_e(o,r,"internal-error");const{sub:a}=o;return _e(t.uid===a,r,"user-mismatch"),js._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Un(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e,n=!1){if(Gn(t.app))return Promise.reject(Ar(t));const r="signIn",s=await lb(t,r,e),i=await js._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mN(t,e){return cb(ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t){const e=ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gN(t,e,n){if(Gn(t.app))return Promise.reject(Ar(t));const r=ii(t),o=await bd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ub(t),l}),a=await js._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function _N(t,e,n){return Gn(t.app)?Promise.reject(Ar(t)):mN(nn(t),so.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ub(t),r})}function hb(t,e,n,r){return nn(t).onIdTokenChanged(e,n,r)}function yN(t,e,n){return nn(t).beforeAuthStateChanged(e,n)}function vN(t){return nn(t).signOut()}const bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=1e3,wN=10;class fb extends db{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fb.type="LOCAL";const pb=fb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb extends db{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mb.type="SESSION";const Jf=mb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Eu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await bN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Xf("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function IN(t){Xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function AN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SN(){return gb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="firebaseLocalStorageDb",CN=1,Tc="firebaseLocalStorage",yb="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(t,e){return t.transaction([Tc],e?"readwrite":"readonly").objectStore(Tc)}function PN(){const t=indexedDB.deleteDatabase(_b);return new qa(t).toPromise()}function Td(){const t=indexedDB.open(_b,CN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tc,{keyPath:yb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tc)?e(r):(r.close(),await PN(),e(await Td()))})})}async function I_(t,e,n){const r=wu(t,!0).put({[yb]:e,value:n});return new qa(r).toPromise()}async function kN(t,e){const n=wu(t,!1).get(e),r=await new qa(n).toPromise();return r===void 0?null:r.value}function A_(t,e){const n=wu(t,!0).delete(e);return new qa(n).toPromise()}const xN=800,NN=3;class vb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eu._getInstance(SN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AN(),!this.activeServiceWorker)return;this.sender=new TN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await I_(e,bc,"1"),await A_(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>I_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wu(s,!1).getAll();return new qa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vb.type="LOCAL";const Eb=vb;new $a(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t,e){return e?br(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DN(t){return cb(t.auth,new Zf(t),t.bypassAuthState)}function MN(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),pN(n,new Zf(t),t.bypassAuthState)}async function LN(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),fN(n,new Zf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DN;case"linkViaPopup":case"linkViaRedirect":return LN;case"reauthViaPopup":case"reauthViaRedirect":return MN;default:Un(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new $a(2e3,1e4);class Ai extends wb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VN.get())};e()}}Ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN="pendingRedirect",Ql=new Map;class UN extends wb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ql.get(this.auth._key());if(!e){try{const r=await BN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ql.set(this.auth._key(),e)}return this.bypassAuthState||Ql.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BN(t,e){const n=WN(e),r=jN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $N(t,e){Ql.set(t._key(),e)}function jN(t){return br(t._redirectPersistence)}function WN(t){return Gl(FN,t.config.apiKey,t.name)}async function qN(t,e,n=!1){if(Gn(t.app))return Promise.reject(Ar(t));const r=ii(t),s=ON(r,e),o=await new UN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=10*60*1e3;class zN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HN&&this.cachedEventUids.clear(),this.cachedEventUids.has(R_(e))}saveEventToCache(e){this.cachedEventUids.add(R_(e)),this.lastProcessedEventTime=Date.now()}}function R_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YN=/^https?/;async function JN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GN(t);for(const n of e)try{if(XN(n))return}catch{}Un(t,"unauthorized-domain")}function XN(t){const e=Ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YN.test(n))return!1;if(QN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new $a(3e4,6e4);function S_(){const t=Xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eO(t){return new Promise((e,n)=>{var r,s,i;function o(){S_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S_(),n(Jn(t,"network-request-failed"))},timeout:ZN.get()})}if(!((s=(r=Xn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xn().gapi)===null||i===void 0)&&i.load)o();else{const a=Jx("iframefcb");return Xn()[a]=()=>{gapi.load?o():n(Jn(t,"network-request-failed"))},sb(`${Yx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yl=null,e})}let Yl=null;function tO(t){return Yl=Yl||eO(t),Yl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new $a(5e3,15e3),rO="__/auth/iframe",sO="emulator/auth/iframe",iO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aO(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zf(e,sO):`https://${t.config.authDomain}/${rO}`,r={apiKey:e.apiKey,appName:t.name,v:ys},s=oO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ro(r).slice(1)}`}async function lO(t){const e=await tO(t),n=Xn().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:aO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jn(t,"network-request-failed"),a=Xn().setTimeout(()=>{i(o)},nO.get());function l(){Xn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uO=500,hO=600,dO="_blank",fO="http://localhost";class C_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pO(t,e,n,r=uO,s=hO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Yt().toLowerCase();n&&(a=Jw(u)?dO:n),Qw(u)&&(e=e||fO,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if($x(u)&&a!=="_self")return mO(e||"",a),new C_(null);const d=window.open(e||"",a,h);_e(d,t,"popup-blocked");try{d.focus()}catch{}return new C_(d)}function mO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO="__/auth/handler",_O="emulator/auth/handler",yO=encodeURIComponent("fac");async function P_(t,e,n,r,s,i){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:s};if(e instanceof ab){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Wa){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${yO}=${encodeURIComponent(l)}`:"";return`${vO(t)}?${ro(a).slice(1)}${u}`}function vO({config:t}){return t.emulator?zf(t,_O):`https://${t.authDomain}/${gO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="webStorageSupport";class EO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jf,this._completeRedirectFn=qN,this._overrideRedirectResult=$N}async _openPopup(e,n,r,s){var i;Pr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await P_(e,n,r,Ed(),s);return pO(e,o,Xf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await P_(e,n,r,Ed(),s);return IN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lO(e),r=new zN(e);return n.register("authEvent",s=>(_e(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xh,{type:xh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xh];o!==void 0&&n(!!o),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nb()||Yw()||Gf()}}const Tb=EO;var k_="@firebase/auth",x_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TO(t){rr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rb(t)},u=new Kx(r,s,i,l);return tN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rr(new Fn("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(r=>new wO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(k_,x_,bO(t)),gn(k_,x_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=5*60,AO=kw("authIdTokenMaxAge")||IO;let N_=null;const RO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AO)return;const s=n==null?void 0:n.token;N_!==s&&(N_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function SO(t=Wf()){const e=jf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ib(t,{popupRedirectResolver:Tb,persistence:[Eb,pb,Jf]}),r=kw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=RO(i.toString());yN(n,o,()=>o(n.currentUser)),hb(n,a=>o(a))}}const s=Cw("auth");return s&&nN(n,`http://${s}`),n}function CO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Gx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",CO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TO("Browser");var O_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ls,Ib;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function E(){}E.prototype=v.prototype,S.D=v.prototype,S.prototype=new E,S.prototype.constructor=S,S.C=function(T,C,P){for(var A=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)A[ut-2]=arguments[ut];return v.prototype[C].apply(T,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,v,E){E||(E=0);var T=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)T[C]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(C=0;16>C;++C)T[C]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=S.g[0],E=S.g[1],C=S.g[2];var P=S.g[3],A=v+(P^E&(C^P))+T[0]+3614090360&4294967295;v=E+(A<<7&4294967295|A>>>25),A=P+(C^v&(E^C))+T[1]+3905402710&4294967295,P=v+(A<<12&4294967295|A>>>20),A=C+(E^P&(v^E))+T[2]+606105819&4294967295,C=P+(A<<17&4294967295|A>>>15),A=E+(v^C&(P^v))+T[3]+3250441966&4294967295,E=C+(A<<22&4294967295|A>>>10),A=v+(P^E&(C^P))+T[4]+4118548399&4294967295,v=E+(A<<7&4294967295|A>>>25),A=P+(C^v&(E^C))+T[5]+1200080426&4294967295,P=v+(A<<12&4294967295|A>>>20),A=C+(E^P&(v^E))+T[6]+2821735955&4294967295,C=P+(A<<17&4294967295|A>>>15),A=E+(v^C&(P^v))+T[7]+4249261313&4294967295,E=C+(A<<22&4294967295|A>>>10),A=v+(P^E&(C^P))+T[8]+1770035416&4294967295,v=E+(A<<7&4294967295|A>>>25),A=P+(C^v&(E^C))+T[9]+2336552879&4294967295,P=v+(A<<12&4294967295|A>>>20),A=C+(E^P&(v^E))+T[10]+4294925233&4294967295,C=P+(A<<17&4294967295|A>>>15),A=E+(v^C&(P^v))+T[11]+2304563134&4294967295,E=C+(A<<22&4294967295|A>>>10),A=v+(P^E&(C^P))+T[12]+1804603682&4294967295,v=E+(A<<7&4294967295|A>>>25),A=P+(C^v&(E^C))+T[13]+4254626195&4294967295,P=v+(A<<12&4294967295|A>>>20),A=C+(E^P&(v^E))+T[14]+2792965006&4294967295,C=P+(A<<17&4294967295|A>>>15),A=E+(v^C&(P^v))+T[15]+1236535329&4294967295,E=C+(A<<22&4294967295|A>>>10),A=v+(C^P&(E^C))+T[1]+4129170786&4294967295,v=E+(A<<5&4294967295|A>>>27),A=P+(E^C&(v^E))+T[6]+3225465664&4294967295,P=v+(A<<9&4294967295|A>>>23),A=C+(v^E&(P^v))+T[11]+643717713&4294967295,C=P+(A<<14&4294967295|A>>>18),A=E+(P^v&(C^P))+T[0]+3921069994&4294967295,E=C+(A<<20&4294967295|A>>>12),A=v+(C^P&(E^C))+T[5]+3593408605&4294967295,v=E+(A<<5&4294967295|A>>>27),A=P+(E^C&(v^E))+T[10]+38016083&4294967295,P=v+(A<<9&4294967295|A>>>23),A=C+(v^E&(P^v))+T[15]+3634488961&4294967295,C=P+(A<<14&4294967295|A>>>18),A=E+(P^v&(C^P))+T[4]+3889429448&4294967295,E=C+(A<<20&4294967295|A>>>12),A=v+(C^P&(E^C))+T[9]+568446438&4294967295,v=E+(A<<5&4294967295|A>>>27),A=P+(E^C&(v^E))+T[14]+3275163606&4294967295,P=v+(A<<9&4294967295|A>>>23),A=C+(v^E&(P^v))+T[3]+4107603335&4294967295,C=P+(A<<14&4294967295|A>>>18),A=E+(P^v&(C^P))+T[8]+1163531501&4294967295,E=C+(A<<20&4294967295|A>>>12),A=v+(C^P&(E^C))+T[13]+2850285829&4294967295,v=E+(A<<5&4294967295|A>>>27),A=P+(E^C&(v^E))+T[2]+4243563512&4294967295,P=v+(A<<9&4294967295|A>>>23),A=C+(v^E&(P^v))+T[7]+1735328473&4294967295,C=P+(A<<14&4294967295|A>>>18),A=E+(P^v&(C^P))+T[12]+2368359562&4294967295,E=C+(A<<20&4294967295|A>>>12),A=v+(E^C^P)+T[5]+4294588738&4294967295,v=E+(A<<4&4294967295|A>>>28),A=P+(v^E^C)+T[8]+2272392833&4294967295,P=v+(A<<11&4294967295|A>>>21),A=C+(P^v^E)+T[11]+1839030562&4294967295,C=P+(A<<16&4294967295|A>>>16),A=E+(C^P^v)+T[14]+4259657740&4294967295,E=C+(A<<23&4294967295|A>>>9),A=v+(E^C^P)+T[1]+2763975236&4294967295,v=E+(A<<4&4294967295|A>>>28),A=P+(v^E^C)+T[4]+1272893353&4294967295,P=v+(A<<11&4294967295|A>>>21),A=C+(P^v^E)+T[7]+4139469664&4294967295,C=P+(A<<16&4294967295|A>>>16),A=E+(C^P^v)+T[10]+3200236656&4294967295,E=C+(A<<23&4294967295|A>>>9),A=v+(E^C^P)+T[13]+681279174&4294967295,v=E+(A<<4&4294967295|A>>>28),A=P+(v^E^C)+T[0]+3936430074&4294967295,P=v+(A<<11&4294967295|A>>>21),A=C+(P^v^E)+T[3]+3572445317&4294967295,C=P+(A<<16&4294967295|A>>>16),A=E+(C^P^v)+T[6]+76029189&4294967295,E=C+(A<<23&4294967295|A>>>9),A=v+(E^C^P)+T[9]+3654602809&4294967295,v=E+(A<<4&4294967295|A>>>28),A=P+(v^E^C)+T[12]+3873151461&4294967295,P=v+(A<<11&4294967295|A>>>21),A=C+(P^v^E)+T[15]+530742520&4294967295,C=P+(A<<16&4294967295|A>>>16),A=E+(C^P^v)+T[2]+3299628645&4294967295,E=C+(A<<23&4294967295|A>>>9),A=v+(C^(E|~P))+T[0]+4096336452&4294967295,v=E+(A<<6&4294967295|A>>>26),A=P+(E^(v|~C))+T[7]+1126891415&4294967295,P=v+(A<<10&4294967295|A>>>22),A=C+(v^(P|~E))+T[14]+2878612391&4294967295,C=P+(A<<15&4294967295|A>>>17),A=E+(P^(C|~v))+T[5]+4237533241&4294967295,E=C+(A<<21&4294967295|A>>>11),A=v+(C^(E|~P))+T[12]+1700485571&4294967295,v=E+(A<<6&4294967295|A>>>26),A=P+(E^(v|~C))+T[3]+2399980690&4294967295,P=v+(A<<10&4294967295|A>>>22),A=C+(v^(P|~E))+T[10]+4293915773&4294967295,C=P+(A<<15&4294967295|A>>>17),A=E+(P^(C|~v))+T[1]+2240044497&4294967295,E=C+(A<<21&4294967295|A>>>11),A=v+(C^(E|~P))+T[8]+1873313359&4294967295,v=E+(A<<6&4294967295|A>>>26),A=P+(E^(v|~C))+T[15]+4264355552&4294967295,P=v+(A<<10&4294967295|A>>>22),A=C+(v^(P|~E))+T[6]+2734768916&4294967295,C=P+(A<<15&4294967295|A>>>17),A=E+(P^(C|~v))+T[13]+1309151649&4294967295,E=C+(A<<21&4294967295|A>>>11),A=v+(C^(E|~P))+T[4]+4149444226&4294967295,v=E+(A<<6&4294967295|A>>>26),A=P+(E^(v|~C))+T[11]+3174756917&4294967295,P=v+(A<<10&4294967295|A>>>22),A=C+(v^(P|~E))+T[2]+718787259&4294967295,C=P+(A<<15&4294967295|A>>>17),A=E+(P^(C|~v))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+C&4294967295,S.g[3]=S.g[3]+P&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var E=v-this.blockSize,T=this.B,C=this.h,P=0;P<v;){if(C==0)for(;P<=E;)s(this,S,P),P+=this.blockSize;if(typeof S=="string"){for(;P<v;)if(T[C++]=S.charCodeAt(P++),C==this.blockSize){s(this,T),C=0;break}}else for(;P<v;)if(T[C++]=S[P++],C==this.blockSize){s(this,T),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var E=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=E&255,E/=256;for(this.u(S),S=Array(16),v=E=0;4>v;++v)for(var T=0;32>T;T+=8)S[E++]=this.g[v]>>>T&255;return S};function i(S,v){var E=a;return Object.prototype.hasOwnProperty.call(E,S)?E[S]:E[S]=v(S)}function o(S,v){this.h=v;for(var E=[],T=!0,C=S.length-1;0<=C;C--){var P=S[C]|0;T&&P==v||(E[C]=P,T=!1)}this.g=E}var a={};function l(S){return-128<=S&&128>S?i(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return I(u(-S));for(var v=[],E=1,T=0;S>=E;T++)v[T]=S/E|0,E*=4294967296;return new o(v,0)}function h(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return I(h(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(v,8)),T=d,C=0;C<S.length;C+=8){var P=Math.min(8,S.length-C),A=parseInt(S.substring(C,C+P),v);8>P?(P=u(Math.pow(v,P)),T=T.j(P).add(u(A))):(T=T.j(E),T=T.add(u(A)))}return T}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(w(this))return-I(this).m();for(var S=0,v=1,E=0;E<this.g.length;E++){var T=this.i(E);S+=(0<=T?T:4294967296+T)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(_(this))return"0";if(w(this))return"-"+I(this).toString(S);for(var v=u(Math.pow(S,6)),E=this,T="";;){var C=L(E,v).g;E=x(E,C.j(v));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(S);if(E=C,_(E))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function _(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function w(S){return S.h==-1}t.l=function(S){return S=x(this,S),w(S)?-1:_(S)?0:1};function I(S){for(var v=S.g.length,E=[],T=0;T<v;T++)E[T]=~S.g[T];return new o(E,~S.h).add(p)}t.abs=function(){return w(this)?I(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),E=[],T=0,C=0;C<=v;C++){var P=T+(this.i(C)&65535)+(S.i(C)&65535),A=(P>>>16)+(this.i(C)>>>16)+(S.i(C)>>>16);T=A>>>16,P&=65535,A&=65535,E[C]=A<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(S,v){return S.add(I(v))}t.j=function(S){if(_(this)||_(S))return d;if(w(this))return w(S)?I(this).j(I(S)):I(I(this).j(S));if(w(S))return I(this.j(I(S)));if(0>this.l(g)&&0>S.l(g))return u(this.m()*S.m());for(var v=this.g.length+S.g.length,E=[],T=0;T<2*v;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<S.g.length;C++){var P=this.i(T)>>>16,A=this.i(T)&65535,ut=S.i(C)>>>16,xt=S.i(C)&65535;E[2*T+2*C]+=A*xt,M(E,2*T+2*C),E[2*T+2*C+1]+=P*xt,M(E,2*T+2*C+1),E[2*T+2*C+1]+=A*ut,M(E,2*T+2*C+1),E[2*T+2*C+2]+=P*ut,M(E,2*T+2*C+2)}for(T=0;T<v;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=v;T<2*v;T++)E[T]=0;return new o(E,0)};function M(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function O(S,v){this.g=S,this.h=v}function L(S,v){if(_(v))throw Error("division by zero");if(_(S))return new O(d,d);if(w(S))return v=L(I(S),v),new O(I(v.g),I(v.h));if(w(v))return v=L(S,I(v)),new O(I(v.g),v.h);if(30<S.g.length){if(w(S)||w(v))throw Error("slowDivide_ only works with positive integers.");for(var E=p,T=v;0>=T.l(S);)E=q(E),T=q(T);var C=Z(E,1),P=Z(T,1);for(T=Z(T,2),E=Z(E,2);!_(T);){var A=P.add(T);0>=A.l(S)&&(C=C.add(E),P=A),T=Z(T,1),E=Z(E,1)}return v=x(S,C.j(v)),new O(C,v)}for(C=d;0<=S.l(v);){for(E=Math.max(1,Math.floor(S.m()/v.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=u(E),A=P.j(v);w(A)||0<A.l(S);)E-=T,P=u(E),A=P.j(v);_(P)&&(P=p),C=C.add(P),S=x(S,A)}return new O(C,S)}t.A=function(S){return L(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)&S.i(T);return new o(E,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)|S.i(T);return new o(E,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)^S.i(T);return new o(E,this.h^S.h)};function q(S){for(var v=S.g.length+1,E=[],T=0;T<v;T++)E[T]=S.i(T)<<1|S.i(T-1)>>>31;return new o(E,S.h)}function Z(S,v){var E=v>>5;v%=32;for(var T=S.g.length-E,C=[],P=0;P<T;P++)C[P]=0<v?S.i(P+E)>>>v|S.i(P+E+1)<<32-v:S.i(P+E);return new o(C,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ib=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ls=o}).apply(typeof O_<"u"?O_:typeof self<"u"?self:typeof window<"u"?window:{});var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ab,jo,Rb,Jl,Id,Sb,Cb,Pb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof kl=="object"&&kl];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var k=c[y];if(!(k in m))break e;m=m[k]}c=c[c.length-1],y=m[c],f=f(y),f!=y&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,y=!1,k={next:function(){if(!y&&m<c.length){var V=m++;return{value:f(V,c[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,y),c.apply(f,k)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function _(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(y,k,V){for(var X=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)X[Ge-2]=arguments[Ge];return f.prototype[k].apply(y,X)}}function w(c){const f=c.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=c[y];return m}return[]}function I(c,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const k=c.length||0,V=y.length||0;c.length=k+V;for(let X=0;X<V;X++)c[k+X]=y[X]}else c.push(y)}}class x{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function M(c){return/^[\s\xa0]*$/.test(c)}function O(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function L(c){return L[" "](c),c}L[" "]=function(){};var q=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function Z(c,f,m){for(const y in c)f.call(m,c[y],y,c)}function S(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function v(c){const f={};for(const m in c)f[m]=c[m];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(c,f){let m,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(m in y)c[m]=y[m];for(let V=0;V<E.length;V++)m=E[V],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function C(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function P(c){a.setTimeout(()=>{throw c},0)}function A(){var c=vt;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class ut{constructor(){this.h=this.g=null}add(f,m){const y=xt.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var xt=new x(()=>new Be,c=>c.reset());class Be{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,Ie=!1,vt=new ut,rn=()=>{const c=a.Promise.resolve(void 0);pe=()=>{c.then(ht)}};var ht=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(m){P(m)}var f=xt;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}Ie=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Dr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function qn(c,f){if(at.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(q){e:{try{L(f.nodeName);var k=!0;break e}catch{}k=!1}k||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:sn[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&qn.aa.h.call(this)}}_(qn,at);var sn={2:"touch",3:"pen",4:"mouse"};qn.prototype.h=function(){qn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),se=0;function ne(c,f,m,y,k){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=k,this.key=++se,this.da=this.fa=!1}function ae(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function xe(c){this.src=c,this.g={},this.h=0}xe.prototype.add=function(c,f,m,y,k){var V=c.toString();c=this.g[V],c||(c=this.g[V]=[],this.h++);var X=b(c,f,y,k);return-1<X?(f=c[X],m||(f.fa=!1)):(f=new ne(f,this.src,V,!!y,k),f.fa=m,c.push(f)),f};function Ke(c,f){var m=f.type;if(m in c.g){var y=c.g[m],k=Array.prototype.indexOf.call(y,f,void 0),V;(V=0<=k)&&Array.prototype.splice.call(y,k,1),V&&(ae(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function b(c,f,m,y){for(var k=0;k<c.length;++k){var V=c[k];if(!V.da&&V.listener==f&&V.capture==!!m&&V.ha==y)return k}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function W(c,f,m,y,k){if(Array.isArray(f)){for(var V=0;V<f.length;V++)W(c,f[V],m,y,k);return null}return m=ue(m),c&&c[B]?c.K(f,m,u(y)?!!y.capture:!!y,k):U(c,f,m,!1,y,k)}function U(c,f,m,y,k,V){if(!f)throw Error("Invalid event type");var X=u(k)?!!k.capture:!!k,Ge=de(c);if(Ge||(c[R]=Ge=new xe(c)),m=Ge.add(f,m,y,X,V),m.proxy)return m;if(y=K(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)Dr||(k=X),k===void 0&&(k=!1),c.addEventListener(f.toString(),y,k);else if(c.attachEvent)c.attachEvent(Q(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function K(){function c(m){return f.call(c.src,c.listener,m)}const f=G;return c}function ee(c,f,m,y,k){if(Array.isArray(f))for(var V=0;V<f.length;V++)ee(c,f[V],m,y,k);else y=u(y)?!!y.capture:!!y,m=ue(m),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(V=c.g[f],m=b(V,m,y,k),-1<m&&(ae(V[m]),Array.prototype.splice.call(V,m,1),V.length==0&&(delete c.g[f],c.h--)))):c&&(c=de(c))&&(f=c.g[f.toString()],c=-1,f&&(c=b(f,m,y,k)),(m=-1<c?f[c]:null)&&Y(m))}function Y(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])Ke(f.i,c);else{var m=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(m,y,c.capture):f.detachEvent?f.detachEvent(Q(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=de(f))?(Ke(m,c),m.h==0&&(m.src=null,f[R]=null)):ae(c)}}}function Q(c){return c in D?D[c]:D[c]="on"+c}function G(c,f){if(c.da)c=!0;else{f=new qn(f,this);var m=c.listener,y=c.ha||c.src;c.fa&&Y(c),c=m.call(y,f)}return c}function de(c){return c=c[R],c instanceof xe?c:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(c){return typeof c=="function"?c:(c[re]||(c[re]=function(f){return c.handleEvent(f)}),c[re])}function le(){ot.call(this),this.i=new xe(this),this.M=this,this.F=null}_(le,ot),le.prototype[B]=!0,le.prototype.removeEventListener=function(c,f,m,y){ee(this,c,f,m,y)};function me(c,f){var m,y=c.F;if(y)for(m=[];y;y=y.F)m.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new at(f,c);else if(f instanceof at)f.target=f.target||c;else{var k=f;f=new at(y,c),T(f,k)}if(k=!0,m)for(var V=m.length-1;0<=V;V--){var X=f.g=m[V];k=$e(X,y,!0,f)&&k}if(X=f.g=c,k=$e(X,y,!0,f)&&k,k=$e(X,y,!1,f)&&k,m)for(V=0;V<m.length;V++)X=f.g=m[V],k=$e(X,y,!1,f)&&k}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],y=0;y<m.length;y++)ae(m[y]);delete c.g[f],c.h--}}this.F=null},le.prototype.K=function(c,f,m,y){return this.i.add(String(c),f,!1,m,y)},le.prototype.L=function(c,f,m,y){return this.i.add(String(c),f,!0,m,y)};function $e(c,f,m,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,V=0;V<f.length;++V){var X=f[V];if(X&&!X.da&&X.capture==m){var Ge=X.listener,Ot=X.ha||X.src;X.fa&&Ke(c.i,X),k=Ge.call(Ot,y)!==!1&&k}}return k&&!y.defaultPrevented}function Me(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function Ft(c){c.g=Me(()=>{c.g=null,c.i&&(c.i=!1,Ft(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Tt extends ot{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ft(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(c){ot.call(this),this.h=c,this.g={}}_(Nt,ot);var Ut=[];function Mr(c){Z(c.g,function(f,m){this.g.hasOwnProperty(m)&&Y(f)},c),c.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),Mr(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ui=a.JSON.stringify,Jt=a.JSON.parse,wn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function hi(){}hi.prototype.h=null;function im(c){return c.h||(c.h=c.i())}function om(){}var go={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ku(){at.call(this,"d")}_(Ku,at);function Gu(){at.call(this,"c")}_(Gu,at);var ws={},am=null;function il(){return am=am||new le}ws.La="serverreachability";function lm(c){at.call(this,ws.La,c)}_(lm,at);function _o(c){const f=il();me(f,new lm(f))}ws.STAT_EVENT="statevent";function cm(c,f){at.call(this,ws.STAT_EVENT,c),this.stat=f}_(cm,at);function Xt(c){const f=il();me(f,new cm(f,c))}ws.Ma="timingevent";function um(c,f){at.call(this,ws.Ma,c),this.size=f}_(um,at);function yo(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function vo(){this.g=!0}vo.prototype.xa=function(){this.g=!1};function U0(c,f,m,y,k,V){c.info(function(){if(c.g)if(V)for(var X="",Ge=V.split("&"),Ot=0;Ot<Ge.length;Ot++){var Le=Ge[Ot].split("=");if(1<Le.length){var Bt=Le[0];Le=Le[1];var $t=Bt.split("_");X=2<=$t.length&&$t[1]=="type"?X+(Bt+"="+Le+"&"):X+(Bt+"=redacted&")}}else X=null;else X=V;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+f+`
`+m+`
`+X})}function B0(c,f,m,y,k,V,X){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+f+`
`+m+`
`+V+" "+X})}function di(c,f,m,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+j0(c,m)+(y?" "+y:"")})}function $0(c,f){c.info(function(){return"TIMEOUT: "+f})}vo.prototype.info=function(){};function j0(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var y=m[c];if(!(2>y.length)){var k=y[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var X=1;X<k.length;X++)k[X]=""}}}}return ui(m)}catch{return f}}var ol={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qu;function al(){}_(al,hi),al.prototype.g=function(){return new XMLHttpRequest},al.prototype.i=function(){return{}},Qu=new al;function Lr(c,f,m,y){this.j=c,this.i=f,this.l=m,this.R=y||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dm}function dm(){this.i=null,this.g="",this.h=!1}var fm={},Yu={};function Ju(c,f,m){c.L=1,c.v=hl(cr(f)),c.m=m,c.P=!0,pm(c,null)}function pm(c,f){c.F=Date.now(),ll(c),c.A=cr(c.v);var m=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),Cm(m.i,"t",y),c.C=0,m=c.j.J,c.h=new dm,c.g=zm(c.j,m?f:null,!c.m),0<c.O&&(c.M=new Tt(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,y=c.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ut[0]=k.toString()),k=Ut);for(var V=0;V<k.length;V++){var X=W(m,k[V],y||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),_o(),U0(c.i,c.u,c.A,c.l,c.R,c.m)}Lr.prototype.ca=function(c){c=c.target;const f=this.M;f&&ur(c)==3?f.j():this.Y(c)},Lr.prototype.Y=function(c){try{if(c==this.g)e:{const $t=ur(this.g);var f=this.g.Ba();const mi=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||Mm(this.g)))){this.J||$t!=4||f==7||(f==8||0>=mi?_o(3):_o(2)),Xu(this);var m=this.g.Z();this.X=m;t:if(mm(this)){var y=Mm(this.g);c="";var k=y.length,V=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bs(this),Eo(this);var X="";break t}this.h.i=new a.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,c+=this.h.i.decode(y[f],{stream:!(V&&f==k-1)});y.length=0,this.h.g+=c,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,B0(this.i,this.u,this.A,this.l,this.R,$t,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,Ot=this.g;if((Ge=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ge)){var Le=Ge;break t}}Le=null}if(m=Le)di(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zu(this,m);else{this.o=!1,this.s=3,Xt(12),bs(this),Eo(this);break e}}if(this.P){m=!0;let Cn;for(;!this.J&&this.C<X.length;)if(Cn=W0(this,X),Cn==Yu){$t==4&&(this.s=4,Xt(14),m=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(Cn==fm){this.s=4,Xt(15),di(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else di(this.i,this.l,Cn,null),Zu(this,Cn);if(mm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||X.length!=0||this.h.h||(this.s=1,Xt(16),m=!1),this.o=this.o&&m,!m)di(this.i,this.l,X,"[Invalid Chunked Response]"),bs(this),Eo(this);else if(0<X.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),ih(Bt),Bt.M=!0,Xt(11))}}else di(this.i,this.l,X,null),Zu(this,X);$t==4&&bs(this),this.o&&!this.J&&($t==4?jm(this.j,this):(this.o=!1,ll(this)))}else oA(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,Xt(12)):(this.s=0,Xt(13)),bs(this),Eo(this)}}}catch{}finally{}};function mm(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function W0(c,f){var m=c.C,y=f.indexOf(`
`,m);return y==-1?Yu:(m=Number(f.substring(m,y)),isNaN(m)?fm:(y+=1,y+m>f.length?Yu:(f=f.slice(y,y+m),c.C=y+m,f)))}Lr.prototype.cancel=function(){this.J=!0,bs(this)};function ll(c){c.S=Date.now()+c.I,gm(c,c.I)}function gm(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=yo(p(c.ba,c),f)}function Xu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Lr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?($0(this.i,this.A),this.L!=2&&(_o(),Xt(17)),bs(this),this.s=2,Eo(this)):gm(this,this.S-c)};function Eo(c){c.j.G==0||c.J||jm(c.j,c)}function bs(c){Xu(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,Mr(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function Zu(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||eh(m.h,c))){if(!c.K&&eh(m.h,c)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)_l(m),ml(m);else break e;sh(m),Xt(18)}}else m.za=k[1],0<m.za-m.T&&37500>k[2]&&m.F&&m.v==0&&!m.C&&(m.C=yo(p(m.Za,m),6e3));if(1>=vm(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Is(m,11)}else if((c.K||m.g==c)&&_l(m),!M(f))for(k=m.Da.g.parse(f),f=0;f<k.length;f++){let Le=k[f];if(m.T=Le[0],Le=Le[1],m.G==2)if(Le[0]=="c"){m.K=Le[1],m.ia=Le[2];const Bt=Le[3];Bt!=null&&(m.la=Bt,m.j.info("VER="+m.la));const $t=Le[4];$t!=null&&(m.Aa=$t,m.j.info("SVER="+m.Aa));const mi=Le[5];mi!=null&&typeof mi=="number"&&0<mi&&(y=1.5*mi,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const Cn=c.g;if(Cn){const vl=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vl){var V=y.h;V.g||vl.indexOf("spdy")==-1&&vl.indexOf("quic")==-1&&vl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(th(V,V.h),V.h=null))}if(y.D){const oh=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;oh&&(y.ya=oh,et(y.I,y.D,oh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var X=c;if(y.qa=Hm(y,y.J?y.ia:null,y.W),X.K){Em(y.h,X);var Ge=X,Ot=y.L;Ot&&(Ge.I=Ot),Ge.B&&(Xu(Ge),ll(Ge)),y.g=X}else Bm(y);0<m.i.length&&gl(m)}else Le[0]!="stop"&&Le[0]!="close"||Is(m,7);else m.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Is(m,7):rh(m):Le[0]!="noop"&&m.l&&m.l.ta(Le),m.v=0)}}_o(4)}catch{}}var q0=class{constructor(c,f){this.g=c,this.map=f}};function _m(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ym(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function vm(c){return c.h?1:c.g?c.g.size:0}function eh(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function th(c,f){c.g?c.g.add(f):c.h=f}function Em(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}_m.prototype.cancel=function(){if(this.i=wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function wm(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return w(c.i)}function H0(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,y=0;y<m;y++)f.push(c[y]);return f}f=[],m=0;for(y in c)f[m++]=c[y];return f}function z0(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const y in c)f[m++]=y;return f}}}function bm(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=z0(c),y=H0(c),k=y.length,V=0;V<k;V++)f.call(void 0,y[V],m&&m[V],c)}var Tm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function K0(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var y=c[m].indexOf("="),k=null;if(0<=y){var V=c[m].substring(0,y);k=c[m].substring(y+1)}else V=c[m];f(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Ts(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ts){this.h=c.h,cl(this,c.j),this.o=c.o,this.g=c.g,ul(this,c.s),this.l=c.l;var f=c.i,m=new To;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Im(this,m),this.m=c.m}else c&&(f=String(c).match(Tm))?(this.h=!1,cl(this,f[1]||"",!0),this.o=wo(f[2]||""),this.g=wo(f[3]||"",!0),ul(this,f[4]),this.l=wo(f[5]||"",!0),Im(this,f[6]||"",!0),this.m=wo(f[7]||"")):(this.h=!1,this.i=new To(null,this.h))}Ts.prototype.toString=function(){var c=[],f=this.j;f&&c.push(bo(f,Am,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(bo(f,Am,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(bo(m,m.charAt(0)=="/"?Y0:Q0,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",bo(m,X0)),c.join("")};function cr(c){return new Ts(c)}function cl(c,f,m){c.j=m?wo(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function ul(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Im(c,f,m){f instanceof To?(c.i=f,Z0(c.i,c.h)):(m||(f=bo(f,J0)),c.i=new To(f,c.h))}function et(c,f,m){c.i.set(f,m)}function hl(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function wo(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function bo(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,G0),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function G0(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Am=/[#\/\?@]/g,Q0=/[#\?:]/g,Y0=/[#\?]/g,J0=/[#\?@]/g,X0=/#/g;function To(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Vr(c){c.g||(c.g=new Map,c.h=0,c.i&&K0(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=To.prototype,t.add=function(c,f){Vr(this),this.i=null,c=fi(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Rm(c,f){Vr(c),f=fi(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Sm(c,f){return Vr(c),f=fi(c,f),c.g.has(f)}t.forEach=function(c,f){Vr(this),this.g.forEach(function(m,y){m.forEach(function(k){c.call(f,k,y,this)},this)},this)},t.na=function(){Vr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const k=c[y];for(let V=0;V<k.length;V++)m.push(f[y])}return m},t.V=function(c){Vr(this);let f=[];if(typeof c=="string")Sm(this,c)&&(f=f.concat(this.g.get(fi(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return Vr(this),this.i=null,c=fi(this,c),Sm(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Cm(c,f,m){Rm(c,f),0<m.length&&(c.i=null,c.g.set(fi(c,f),w(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const V=encodeURIComponent(String(y)),X=this.V(y);for(y=0;y<X.length;y++){var k=V;X[y]!==""&&(k+="="+encodeURIComponent(String(X[y]))),c.push(k)}}return this.i=c.join("&")};function fi(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function Z0(c,f){f&&!c.j&&(Vr(c),c.i=null,c.g.forEach(function(m,y){var k=y.toLowerCase();y!=k&&(Rm(this,y),Cm(this,k,m))},c)),c.j=f}function eA(c,f){const m=new vo;if(a.Image){const y=new Image;y.onload=g(Fr,m,"TestLoadImage: loaded",!0,f,y),y.onerror=g(Fr,m,"TestLoadImage: error",!1,f,y),y.onabort=g(Fr,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=g(Fr,m,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function tA(c,f){const m=new vo,y=new AbortController,k=setTimeout(()=>{y.abort(),Fr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(V=>{clearTimeout(k),V.ok?Fr(m,"TestPingServer: ok",!0,f):Fr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),Fr(m,"TestPingServer: error",!1,f)})}function Fr(c,f,m,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(m)}catch{}}function nA(){this.g=new wn}function rA(c,f,m){const y=m||"";try{bm(c,function(k,V){let X=k;u(k)&&(X=ui(k)),f.push(y+V+"="+encodeURIComponent(X))})}catch(k){throw f.push(y+"type="+encodeURIComponent("_badmap")),k}}function dl(c){this.l=c.Ub||null,this.j=c.eb||!1}_(dl,hi),dl.prototype.g=function(){return new fl(this.l,this.j)},dl.prototype.i=function(c){return function(){return c}}({});function fl(c,f){le.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(fl,le),t=fl.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Ao(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pm(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pm(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Io(this):Ao(this),this.readyState==3&&Pm(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Io(this))},t.Qa=function(c){this.g&&(this.response=c,Io(this))},t.ga=function(){this.g&&Io(this)};function Io(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Ao(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Ao(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function km(c){let f="";return Z(c,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function nh(c,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=km(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):et(c,f,m))}function dt(c){le.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(dt,le);var sA=/^https?$/i,iA=["POST","PUT"];t=dt.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qu.g(),this.v=this.o?im(this.o):im(Qu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(V){xm(this,V);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)m.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())m.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(V=>V.toLowerCase()=="content-type"),k=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(iA,f,void 0))||y||k||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,X]of m)this.g.setRequestHeader(V,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dm(this),this.u=!0,this.g.send(c),this.u=!1}catch(V){xm(this,V)}};function xm(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Nm(c),pl(c)}function Nm(c){c.A||(c.A=!0,me(c,"complete"),me(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,me(this,"complete"),me(this,"abort"),pl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pl(this,!0)),dt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Om(this):this.bb())},t.bb=function(){Om(this)};function Om(c){if(c.h&&typeof o<"u"&&(!c.v[1]||ur(c)!=4||c.Z()!=2)){if(c.u&&ur(c)==4)Me(c.Ea,0,c);else if(me(c,"readystatechange"),ur(c)==4){c.h=!1;try{const X=c.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=X===0){var k=String(c.D).match(Tm)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),y=!sA.test(k?k.toLowerCase():"")}m=y}if(m)me(c,"complete"),me(c,"success");else{c.m=6;try{var V=2<ur(c)?c.g.statusText:""}catch{V=""}c.l=V+" ["+c.Z()+"]",Nm(c)}}finally{pl(c)}}}}function pl(c,f){if(c.g){Dm(c);const m=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||me(c,"ready");try{m.onreadystatechange=y}catch{}}}function Dm(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function ur(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Jt(f)}};function Mm(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function oA(c){const f={};c=(c.g&&2<=ur(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(M(c[y]))continue;var m=C(c[y]);const k=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const V=f[k]||[];f[k]=V,V.push(m)}S(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ro(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Lm(c){this.Aa=0,this.i=[],this.j=new vo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ro("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ro("baseRetryDelayMs",5e3,c),this.cb=Ro("retryDelaySeedMs",1e4,c),this.Wa=Ro("forwardChannelMaxRetries",2,c),this.wa=Ro("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new _m(c&&c.concurrentRequestLimit),this.Da=new nA,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Lm.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,y){Xt(0),this.W=c,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Hm(this,null,this.W),gl(this)};function rh(c){if(Vm(c),c.G==3){var f=c.U++,m=cr(c.I);if(et(m,"SID",c.K),et(m,"RID",f),et(m,"TYPE","terminate"),So(c,m),f=new Lr(c,c.j,f),f.L=2,f.v=hl(cr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=zm(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ll(f)}qm(c)}function ml(c){c.g&&(ih(c),c.g.cancel(),c.g=null)}function Vm(c){ml(c),c.u&&(a.clearTimeout(c.u),c.u=null),_l(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function gl(c){if(!ym(c.h)&&!c.s){c.s=!0;var f=c.Ga;pe||rn(),Ie||(pe(),Ie=!0),vt.add(f,c),c.B=0}}function aA(c,f){return vm(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=yo(p(c.Ga,c,f),Wm(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new Lr(this,this.j,c);let V=this.o;if(this.S&&(V?(V=v(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Um(this,k,f),m=cr(this.I),et(m,"RID",c),et(m,"CVER",22),this.D&&et(m,"X-HTTP-Session-Id",this.D),So(this,m),V&&(this.O?f="headers="+encodeURIComponent(String(km(V)))+"&"+f:this.m&&nh(m,this.m,V)),th(this.h,k),this.Ua&&et(m,"TYPE","init"),this.P?(et(m,"$req",f),et(m,"SID","null"),k.T=!0,Ju(k,m,null)):Ju(k,m,f),this.G=2}}else this.G==3&&(c?Fm(this,c):this.i.length==0||ym(this.h)||Fm(this))};function Fm(c,f){var m;f?m=f.l:m=c.U++;const y=cr(c.I);et(y,"SID",c.K),et(y,"RID",m),et(y,"AID",c.T),So(c,y),c.m&&c.o&&nh(y,c.m,c.o),m=new Lr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=Um(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),th(c.h,m),Ju(m,y,f)}function So(c,f){c.H&&Z(c.H,function(m,y){et(f,y,m)}),c.l&&bm({},function(m,y){et(f,y,m)})}function Um(c,f,m){m=Math.min(c.i.length,m);var y=c.l?p(c.l.Na,c.l,c):null;e:{var k=c.i;let V=-1;for(;;){const X=["count="+m];V==-1?0<m?(V=k[0].g,X.push("ofs="+V)):V=0:X.push("ofs="+V);let Ge=!0;for(let Ot=0;Ot<m;Ot++){let Le=k[Ot].g;const Bt=k[Ot].map;if(Le-=V,0>Le)V=Math.max(0,k[Ot].g-100),Ge=!1;else try{rA(Bt,X,"req"+Le+"_")}catch{y&&y(Bt)}}if(Ge){y=X.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,y}function Bm(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;pe||rn(),Ie||(pe(),Ie=!0),vt.add(f,c),c.v=0}}function sh(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=yo(p(c.Fa,c),Wm(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,$m(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=yo(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xt(10),ml(this),$m(this))};function ih(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function $m(c){c.g=new Lr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=cr(c.qa);et(f,"RID","rpc"),et(f,"SID",c.K),et(f,"AID",c.T),et(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(f,"TO",c.ja),et(f,"TYPE","xmlhttp"),So(c,f),c.m&&c.o&&nh(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=hl(cr(f)),m.m=null,m.P=!0,pm(m,c)}t.Za=function(){this.C!=null&&(this.C=null,ml(this),sh(this),Xt(19))};function _l(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function jm(c,f){var m=null;if(c.g==f){_l(c),ih(c),c.g=null;var y=2}else if(eh(c.h,f))m=f.D,Em(c.h,f),y=1;else return;if(c.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var k=c.B;y=il(),me(y,new um(y,m)),gl(c)}else Bm(c);else if(k=f.s,k==3||k==0&&0<f.X||!(y==1&&aA(c,f)||y==2&&sh(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),k){case 1:Is(c,5);break;case 4:Is(c,10);break;case 3:Is(c,6);break;default:Is(c,2)}}}function Wm(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function Is(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),y=c.Xa;const k=!y;y=new Ts(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||cl(y,"https"),hl(y),k?eA(y.toString(),m):tA(y.toString(),m)}else Xt(2);c.G=0,c.l&&c.l.sa(f),qm(c),Vm(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Xt(2)):(this.j.info("Failed to ping google.com"),Xt(1))};function qm(c){if(c.G=0,c.ka=[],c.l){const f=wm(c.h);(f.length!=0||c.i.length!=0)&&(I(c.ka,f),I(c.ka,c.i),c.h.i.length=0,w(c.i),c.i.length=0),c.l.ra()}}function Hm(c,f,m){var y=m instanceof Ts?cr(m):new Ts(m);if(y.g!="")f&&(y.g=f+"."+y.g),ul(y,y.s);else{var k=a.location;y=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var V=new Ts(null);y&&cl(V,y),f&&(V.g=f),k&&ul(V,k),m&&(V.l=m),y=V}return m=c.D,f=c.ya,m&&f&&et(y,m,f),et(y,"VER",c.la),So(c,y),y}function zm(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new dt(new dl({eb:m})):new dt(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Km(){}t=Km.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yl(){}yl.prototype.g=function(c,f){return new pn(c,f)};function pn(c,f){le.call(this),this.g=new Lm(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!M(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!M(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new pi(this)}_(pn,le),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){rh(this.g)},pn.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=ui(c),c=m);f.i.push(new q0(f.Ya++,c)),f.G==3&&gl(f)},pn.prototype.N=function(){this.g.l=null,delete this.j,rh(this.g),delete this.g,pn.aa.N.call(this)};function Gm(c){Ku.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}_(Gm,Ku);function Qm(){Gu.call(this),this.status=1}_(Qm,Gu);function pi(c){this.g=c}_(pi,Km),pi.prototype.ua=function(){me(this.g,"a")},pi.prototype.ta=function(c){me(this.g,new Gm(c))},pi.prototype.sa=function(c){me(this.g,new Qm)},pi.prototype.ra=function(){me(this.g,"b")},yl.prototype.createWebChannel=yl.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,Pb=function(){return new yl},Cb=function(){return il()},Sb=ws,Id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ol.NO_ERROR=0,ol.TIMEOUT=8,ol.HTTP_ERROR=6,Jl=ol,hm.COMPLETE="complete",Rb=hm,om.EventType=go,go.OPEN="a",go.CLOSE="b",go.ERROR="c",go.MESSAGE="d",le.prototype.listen=le.prototype.K,jo=om,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,Ab=dt}).apply(typeof kl<"u"?kl:typeof self<"u"?self:typeof window<"u"?window:{});const D_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Ba("@firebase/firestore");function Oo(){return Ws.logLevel}function ce(t,...e){if(Ws.logLevel<=Se.DEBUG){const n=e.map(ep);Ws.debug(`Firestore (${io}): ${t}`,...n)}}function kr(t,...e){if(Ws.logLevel<=Se.ERROR){const n=e.map(ep);Ws.error(`Firestore (${io}): ${t}`,...n)}}function qi(t,...e){if(Ws.logLevel<=Se.WARN){const n=e.map(ep);Ws.warn(`Firestore (${io}): ${t}`,...n)}}function ep(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw kr(e),new Error(e)}function He(t,e){t||ye()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends ar{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class kO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xO{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new os;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new os,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new os)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string"),new kb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string"),new Wt(e)}}class NO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new NO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){He(this.o===void 0);const r=i=>{i.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string"),this.R=n.token,new DO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=LO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Fe(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new bt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new bt(0,0))}static max(){return new ve(new bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Aa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Aa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends Aa{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new st(n)}static emptyPath(){return new st([])}}const VO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Aa{construct(e,n,r){return new Mt(e,n,r)}static isValidIdentifier(e){return VO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new oe(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new oe(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(st.fromString(e))}static fromName(e){return new he(st.fromString(e).popFirst(5))}static empty(){return new he(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new st(e.slice()))}}function FO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(r===1e9?new bt(n+1,0):new bt(n,r));return new us(s,he.empty(),e)}function UO(t){return new us(t.readTime,t.key,-1)}class us{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new us(ve.min(),he.empty(),-1)}static max(){return new us(ve.max(),he.empty(),-1)}}function BO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==$O)throw t;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function WO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function za(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tp.oe=-1;function bu(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function qO(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yt=class Ad{constructor(e,n){this.comparator=e,this.root=n||as.EMPTY}insert(e,n){return new Ad(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,as.BLACK,null,null))}remove(e){return new Ad(this.comparator,this.root.remove(e,this.comparator).copy(null,null,as.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xl(this.root,e,this.comparator,!1)}getReverseIterator(){return new xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xl(this.root,e,this.comparator,!0)}},xl=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},as=class mr{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??mr.RED,this.left=s??mr.EMPTY,this.right=i??mr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new mr(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return mr.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}};as.EMPTY=null,as.RED=!0,as.BLACK=!1;as.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,n,r,s,i){return this}insert(e,n,r){return new as(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new L_(this.data.getIterator())}getIteratorFrom(e){return new L_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Lt(this.comparator);return n.data=e,n}}class L_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new kn([])}unionWith(e){let n=new Lt(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ob("Invalid base64 string: "+i):i}}(e);return new Vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const HO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(t){if(He(!!t),typeof t=="string"){let e=0;const n=HO.exec(t);if(He(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pt(t.seconds),nanos:pt(t.nanos)}}function pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qs(t){return typeof t=="string"?Vt.fromBase64String(t):Vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rp(t){const e=t.mapValue.fields.__previous_value__;return np(e)?rp(e):e}function Ra(t){const e=hs(t.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Sa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?np(t)?4:GO(t)?9007199254740991:KO(t)?10:11:ye()}function sr(t,e){if(t===e)return!0;const n=Hs(t);if(n!==Hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hs(s.timestampValue),a=hs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return qs(s.bytesValue).isEqual(qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return pt(s.geoPointValue.latitude)===pt(i.geoPointValue.latitude)&&pt(s.geoPointValue.longitude)===pt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return pt(s.integerValue)===pt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=pt(s.doubleValue),a=pt(i.doubleValue);return o===a?Ic(o)===Ic(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(M_(o)!==M_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!sr(o[l],a[l])))return!1;return!0}(t,e);default:return ye()}}function Ca(t,e){return(t.values||[]).find(n=>sr(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=Hs(t),r=Hs(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=pt(i.integerValue||i.doubleValue),l=pt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return V_(t.timestampValue,e.timestampValue);case 4:return V_(Ra(t),Ra(e));case 5:return Fe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=qs(i),l=qs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Fe(a[u],l[u]);if(h!==0)return h}return Fe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Fe(pt(i.latitude),pt(o.latitude));return a!==0?a:Fe(pt(i.longitude),pt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return F_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,w=Fe(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return w!==0?w:F_(g,_)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Nl.mapValue&&o===Nl.mapValue)return 0;if(i===Nl.mapValue)return 1;if(o===Nl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Fe(l[d],h[d]);if(p!==0)return p;const g=zi(a[l[d]],u[h[d]]);if(g!==0)return g}return Fe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ye()}}function V_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=hs(t),r=hs(e),s=Fe(n.seconds,r.seconds);return s!==0?s:Fe(n.nanos,r.nanos)}function F_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=zi(n[s],r[s]);if(i)return i}return Fe(n.length,r.length)}function Ki(t){return Rd(t)}function Rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Rd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Rd(n.fields[o])}`;return s+"}"}(t.mapValue):ye()}function U_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sd(t){return!!t&&"integerValue"in t}function sp(t){return!!t&&"arrayValue"in t}function B_(t){return!!t&&"nullValue"in t}function $_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xl(t){return!!t&&"mapValue"in t}function KO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=na(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=na(n)}setAll(e){let n=Mt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=na(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){oo(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bn(na(this.value))}}function Db(t){const e=[];return oo(t.fields,(n,r)=>{const s=new Mt([n]);if(Xl(r)){const i=Db(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new zt(e,0,ve.min(),ve.min(),ve.min(),bn.empty(),0)}static newFoundDocument(e,n,r,s){return new zt(e,1,n,ve.min(),r,s,0)}static newNoDocument(e,n){return new zt(e,2,n,ve.min(),ve.min(),bn.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,ve.min(),ve.min(),bn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n){this.position=e,this.inclusive=n}}function j_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=zi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function W_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function QO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{}class _t extends Mb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JO(e,n,r):n==="array-contains"?new eD(e,r):n==="in"?new tD(e,r):n==="not-in"?new nD(e,r):n==="array-contains-any"?new rD(e,r):new _t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XO(e,r):new ZO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zi(n,this.value)):n!==null&&Hs(this.value)===Hs(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends Mb{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Bn(e,n)}matches(e){return Lb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Lb(t){return t.op==="and"}function Vb(t){return YO(t)&&Lb(t)}function YO(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function Cd(t){if(t instanceof _t)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(Vb(t))return t.filters.map(e=>Cd(e)).join(",");{const e=t.filters.map(n=>Cd(n)).join(",");return`${t.op}(${e})`}}function Fb(t,e){return t instanceof _t?function(r,s){return s instanceof _t&&r.op===s.op&&r.field.isEqual(s.field)&&sr(r.value,s.value)}(t,e):t instanceof Bn?function(r,s){return s instanceof Bn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Fb(o,s.filters[a]),!0):!1}(t,e):void ye()}function Ub(t){return t instanceof _t?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(Ub).join(" ,")+"}"}(t):"Filter"}class JO extends _t{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class XO extends _t{constructor(e,n){super(e,"in",n),this.keys=Bb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZO extends _t{constructor(e,n){super(e,"not-in",n),this.keys=Bb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class eD extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sp(n)&&Ca(n.arrayValue,this.value)}}class tD extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ca(this.value.arrayValue,n)}}class nD extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ca(this.value.arrayValue,n)}}class rD extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ca(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function q_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sD(t,e,n,r,s,i,o)}function ip(t){const e=we(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.ue=n}return e.ue}function op(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!W_(t.startAt,e.startAt)&&W_(t.endAt,e.endAt)}function Pd(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iD(t,e,n,r,s,i,o,a){return new Ka(t,e,n,r,s,i,o,a)}function $b(t){return new Ka(t)}function H_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jb(t){return t.collectionGroup!==null}function ra(t){const e=we(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Lt(Mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Rc(i,r))}),n.has(Mt.keyField().canonicalString())||e.ce.push(new Rc(Mt.keyField(),r))}return e.ce}function Zn(t){const e=we(t);return e.le||(e.le=oD(e,ra(t))),e.le}function oD(t,e){if(t.limitType==="F")return q_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Rc(s.field,i)});const n=t.endAt?new Ac(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ac(t.startAt.position,t.startAt.inclusive):null;return q_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kd(t,e){const n=t.filters.concat([e]);return new Ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xd(t,e,n){return new Ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tu(t,e){return op(Zn(t),Zn(e))&&t.limitType===e.limitType}function Wb(t){return`${ip(Zn(t))}|lt:${t.limitType}`}function bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ub(s)).join(", ")}]`),bu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ki(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ki(s)).join(",")),`Target(${r})`}(Zn(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ra(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=j_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ra(r),s)||r.endAt&&!function(o,a,l){const u=j_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ra(r),s))}(t,e)}function aD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qb(t){return(e,n)=>{let r=!1;for(const s of ra(t)){const i=lD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lD(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?zi(l,u):ye()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){oo(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Nb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=new yt(he.comparator);function xr(){return cD}const Hb=new yt(he.comparator);function Wo(...t){let e=Hb;for(const n of t)e=e.insert(n.key,n);return e}function zb(t){let e=Hb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xs(){return sa()}function Kb(){return sa()}function sa(){return new ao(t=>t.toString(),(t,e)=>t.isEqual(e))}const uD=new yt(he.comparator),hD=new Lt(he.comparator);function Ce(...t){let e=hD;for(const n of t)e=e.add(n);return e}const dD=new Lt(Fe);function fD(){return dD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function Gb(t){return{integerValue:""+t}}function pD(t,e){return qO(e)?Gb(e):ap(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this._=void 0}}function mD(t,e,n){return t instanceof Sc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&np(i)&&(i=rp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Pa?Yb(t,e):t instanceof ka?Jb(t,e):function(s,i){const o=Qb(s,i),a=z_(o)+z_(s.Pe);return Sd(o)&&Sd(s.Pe)?Gb(a):ap(s.serializer,a)}(t,e)}function gD(t,e,n){return t instanceof Pa?Yb(t,e):t instanceof ka?Jb(t,e):n}function Qb(t,e){return t instanceof Cc?function(r){return Sd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Sc extends Au{}class Pa extends Au{constructor(e){super(),this.elements=e}}function Yb(t,e){const n=Xb(e);for(const r of t.elements)n.some(s=>sr(s,r))||n.push(r);return{arrayValue:{values:n}}}class ka extends Au{constructor(e){super(),this.elements=e}}function Jb(t,e){let n=Xb(e);for(const r of t.elements)n=n.filter(s=>!sr(s,r));return{arrayValue:{values:n}}}class Cc extends Au{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function z_(t){return pt(t.integerValue||t.doubleValue)}function Xb(t){return sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _D(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Pa&&s instanceof Pa||r instanceof ka&&s instanceof ka?Hi(r.elements,s.elements,sr):r instanceof Cc&&s instanceof Cc?sr(r.Pe,s.Pe):r instanceof Sc&&s instanceof Sc}(t.transform,e.transform)}class yD{constructor(e,n){this.version=e,this.transformResults=n}}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function Zb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lp(t.key,er.none()):new Ga(t.key,t.data,er.none());{const n=t.data,r=bn.empty();let s=new Lt(Mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new oi(t.key,r,new kn(s.toArray()),er.none())}}function vD(t,e,n){t instanceof Ga?function(s,i,o){const a=s.value.clone(),l=G_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof oi?function(s,i,o){if(!Zl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=G_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(eT(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ia(t,e,n,r){return t instanceof Ga?function(i,o,a,l){if(!Zl(i.precondition,o))return a;const u=i.value.clone(),h=Q_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof oi?function(i,o,a,l){if(!Zl(i.precondition,o))return a;const u=Q_(i.fieldTransforms,l,o),h=o.data;return h.setAll(eT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return Zl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ED(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Qb(r.transform,s||null);i!=null&&(n===null&&(n=bn.empty()),n.set(r.field,i))}return n||null}function K_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hi(r,s,(i,o)=>_D(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends Ru{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class oi extends Ru{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function eT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function G_(t,e,n){const r=new Map;He(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,gD(o,a,n[s]))}return r}function Q_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,mD(i,o,e))}return r}class lp extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wD extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&vD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Kb();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Zb(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>K_(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>K_(n,r))}}class cp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){He(e.mutations.length===r.length);let s=function(){return uD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new cp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Ne;function AD(t){switch(t){default:return ye();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function tT(t){if(t===void 0)return kr("GRPC error has no .code"),j.UNKNOWN;switch(t){case gt.OK:return j.OK;case gt.CANCELLED:return j.CANCELLED;case gt.UNKNOWN:return j.UNKNOWN;case gt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case gt.INTERNAL:return j.INTERNAL;case gt.UNAVAILABLE:return j.UNAVAILABLE;case gt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case gt.NOT_FOUND:return j.NOT_FOUND;case gt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case gt.ABORTED:return j.ABORTED;case gt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case gt.DATA_LOSS:return j.DATA_LOSS;default:return ye()}}(Ne=gt||(gt={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=new Ls([4294967295,4294967295],0);function Y_(t){const e=RD().encode(t),n=new Ib;return n.update(e),new Uint8Array(n.digest())}function J_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ls([n,r],0),new Ls([s,i],0)]}class up{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qo(`Invalid padding: ${n}`);if(r<0)throw new qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ls.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ls.fromNumber(r)));return s.compare(SD)===1&&(s=new Ls([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Y_(e),[r,s]=J_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new up(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Y_(e),[r,s]=J_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Su(ve.min(),s,new yt(Fe),xr(),Ce())}}class Qa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qa(r,n,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class nT{constructor(e,n){this.targetId=e,this.me=n}}class rT{constructor(e,n,r=Vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class X_{constructor(){this.fe=0,this.ge=ey(),this.pe=Vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),n=Ce(),r=Ce();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye()}}),new Qa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ey()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,He(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CD{constructor(e){this.Le=e,this.Be=new Map,this.ke=xr(),this.qe=Z_(),this.Qe=new yt(Fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ye()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Pd(i))if(r===0){const o=new he(i.path);this.Ue(n,o,zt.newNoDocument(o,ve.min()))}else He(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=qs(r).toUint8Array()}catch(l){if(l instanceof Ob)return qi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new up(o,s,i)}catch(l){return qi(l instanceof qo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Pd(a.target)){const l=new he(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,zt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ce();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Su(e,n,this.Qe,this.ke,r);return this.ke=xr(),this.qe=Z_(),this.Qe=new yt(Fe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new X_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Lt(Fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new X_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Z_(){return new yt(he.comparator)}function ey(){return new yt(he.comparator)}const PD={asc:"ASCENDING",desc:"DESCENDING"},kD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xD={and:"AND",or:"OR"};class ND{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nd(t,e){return t.useProto3Json||bu(e)?e:{value:e}}function Pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OD(t,e){return Pc(t,e.toTimestamp())}function tr(t){return He(!!t),ve.fromTimestamp(function(n){const r=hs(n);return new bt(r.seconds,r.nanos)}(t))}function hp(t,e){return Od(t,e).canonicalString()}function Od(t,e){const n=function(s){return new st(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iT(t){const e=st.fromString(t);return He(uT(e)),e}function Dd(t,e){return hp(t.databaseId,e.path)}function Nh(t,e){const n=iT(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(aT(n))}function oT(t,e){return hp(t.databaseId,e)}function DD(t){const e=iT(t);return e.length===4?st.emptyPath():aT(e)}function Md(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aT(t){return He(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ty(t,e,n){return{name:Dd(t,e),fields:n.value.mapValue.fields}}function MD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(He(h===void 0||typeof h=="string"),Vt.fromBase64String(h||"")):(He(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Vt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:tT(u.code);return new oe(h,u.message||"")}(o);n=new rT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nh(t,r.document.name),i=tr(r.document.updateTime),o=r.document.createTime?tr(r.document.createTime):ve.min(),a=new bn({mapValue:{fields:r.document.fields}}),l=zt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ec(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nh(t,r.document),i=r.readTime?tr(r.readTime):ve.min(),o=zt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ec([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nh(t,r.document),i=r.removedTargetIds||[];n=new ec([],i,s,null)}else{if(!("filter"in e))return ye();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ID(s,i),a=r.targetId;n=new nT(a,o)}}return n}function LD(t,e){let n;if(e instanceof Ga)n={update:ty(t,e.key,e.value)};else if(e instanceof lp)n={delete:Dd(t,e.key)};else if(e instanceof oi)n={update:ty(t,e.key,e.data),updateMask:HD(e.fieldMask)};else{if(!(e instanceof wD))return ye();n={verify:Dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ye()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:OD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye()}(t,e.precondition)),n}function VD(t,e){return t&&t.length>0?(He(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?tr(s.updateTime):tr(i);return o.isEqual(ve.min())&&(o=tr(i)),new yD(o,s.transformResults||[])}(n,e))):[]}function FD(t,e){return{documents:[oT(t,e.path)]}}function UD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oT(t,s);const i=function(u){if(u.length!==0)return cT(Bn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ti(p.field),direction:jD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Nd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function BD(t){let e=DD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=lT(d);return p instanceof Bn&&Vb(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(_){return new Rc(Ii(_.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,bu(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new Ac(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new Ac(g,p)}(n.endAt)),iD(e,s,o,i,a,"F",l,u)}function $D(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ii(n.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ii(n.unaryFilter.field);return _t.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ii(n.unaryFilter.field);return _t.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ii(n.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}(t):t.fieldFilter!==void 0?function(n){return _t.create(Ii(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>lT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye()}}(n.compositeFilter.op))}(t):ye()}function jD(t){return PD[t]}function WD(t){return kD[t]}function qD(t){return xD[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ii(t){return Mt.fromServerFormat(t.fieldPath)}function cT(t){return t instanceof _t?function(n){if(n.op==="=="){if($_(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(B_(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($_(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(B_(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:WD(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(s=>cT(s));return r.length===1?r[0]:{compositeFilter:{op:qD(n.op),filters:r}}}(t):ye()}function HD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,r,s,i=ve.min(),o=ve.min(),a=Vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.ct=e}}function KD(t){const e=BD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(){this.un=new QD}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(us.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(us.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class QD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Lt(st.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Lt(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gi(0)}static kn(){return new Gi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.changes=new ao(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ia(r.mutation,s,kn.empty(),bt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ce()){const s=xs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Wo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=xr();const o=sa(),a=function(){return sa()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof oi)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ia(h.mutation,u,h.mutation.getFieldMask(),bt.now())):o.set(u.key,kn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new JD(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=sa();let s=new yt((o,a)=>o-a),i=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||kn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||Ce()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=Kb();h.forEach(p=>{if(!i.has(p)){const g=Zb(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(xs());let a=-1,l=i;return o.next(u=>H.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ce())).next(h=>({batchId:a,changes:zb(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=Wo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Wo();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(d,p){return new Ka(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,zt.newInvalidDocument(h)))});let a=Wo();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&ia(h.mutation,u,kn.empty(),bt.now()),Iu(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:tr(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:KD(s.bundledQuery),readTime:tr(s.readTime)}}(n)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(){this.overlays=new yt(he.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xs();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=xs(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new yt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=xs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=xs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return H.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TD(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ce(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.Tr=new Lt(At.Er),this.dr=new Lt(At.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new At(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new At(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new he(new st([])),r=new At(n,e),s=new At(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new he(new st([])),r=new At(n,e),s=new At(n,e+1);let i=Ce();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new At(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class At{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return he.comparator(e.key,n.key)||Fe(e.wr,n.wr)}static Ar(e,n){return Fe(e.wr,n.wr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Lt(At.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new At(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new At(n,0),s=new At(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Lt(Fe);return n.forEach(s=>{const i=new At(s,0),o=new At(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new At(new he(i),0);let a=new Lt(Fe);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)},o),H.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new At(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new At(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.Mr=e,this.docs=function(){return new yt(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=xr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():zt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xr();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BO(UO(h),r)<=0||(s.has(h.key)||Iu(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sM(this)}getSize(e){return H.resolve(this.size)}}class sM extends YD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.persistence=e,this.Nr=new ao(n=>ip(n),op),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Lr=0,this.Br=new dp,this.targetCount=0,this.kr=Gi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new tp(0),this.Kr=!1,this.Kr=!0,this.$r=new tM,this.referenceDelegate=e(this),this.Ur=new iM(this),this.indexManager=new GD,this.remoteDocumentCache=function(s){return new rM(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new zD(n),this.Gr=new ZD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new nM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ce("MemoryPersistence","Starting transaction:",e);const s=new aM(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class aM extends jO{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Jr=new dp,this.Yr=null}static Zr(e){return new fp(e)}get Xr(){if(this.Yr)return this.Yr;throw ye()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=he.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ve.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ce(),s=Ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return e1()?8:WO(Yt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lM;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Oo()<=Se.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(Oo()<=Se.DEBUG&&ce("QueryEngine","Query:",bi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Oo()<=Se.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(n))):H.resolve())}Yi(e,n){if(H_(n))return H.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=xd(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ce(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,xd(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return H_(n)||s.isEqual(ve.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(Oo()<=Se.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bi(n)),this.rs(e,o,n,FO(s,-1)).next(a=>a))})}ts(e,n){let r=new Lt(qb(e));return n.forEach((s,i)=>{Iu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Oo()<=Se.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",bi(n)),this.Ji.getDocumentsMatchingQuery(e,n,us.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new yt(Fe),this._s=new ao(i=>ip(i),op),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function hM(t,e,n,r){return new uM(t,e,n,r)}async function hT(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Ce();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function dM(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=H.resolve();return p.forEach(_=>{g=g.next(()=>h.getEntry(l,_)).next(w=>{const I=u.docVersions.get(_);He(I!==null),w.version.compareTo(I)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),h.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ce();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function dT(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function fM(t,e){const n=we(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Vt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(w,I,x){return w.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(i,g))});let l=xr(),u=Ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(pM(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ve.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function pM(t,e,n){let r=Ce(),s=Ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=xr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ve.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ce("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function mM(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gM(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new ts(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ld(t,e,n){const r=we(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!za(o))throw o;ce("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ny(t,e,n){const r=we(t);let s=ve.min(),i=Ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=we(l),p=d._s.get(h);return p!==void 0?H.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(r,o,Zn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ve.min(),n?i:Ce())).next(a=>(_M(r,aD(e),a),{documents:a,Ts:i})))}function _M(t,e,n){let r=t.us.get(e)||ve.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class ry{constructor(){this.activeTargetIds=fD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yM{constructor(){this.so=new ry,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ry,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol=null;function Oh(){return Ol===null?Ol=function(){return 268435456+Math.round(2147483648*Math.random())}():Ol++,"0x"+Ol.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class bM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=Oh(),l=this.xo(n,r.toUriEncodedString());ce("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(ce("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw qi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=EM[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Oh();return new Promise((o,a)=>{const l=new Ab;l.setWithCredentials(!0),l.listenOnce(Rb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Jl.NO_ERROR:const h=l.getResponseJson();ce(jt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Jl.TIMEOUT:ce(jt,`RPC '${e}' ${i} timed out`),a(new oe(j.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const d=l.getStatus();if(ce(jt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const _=function(I){const x=I.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(x)>=0?x:j.UNKNOWN}(g.status);a(new oe(_,g.message))}else a(new oe(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new oe(j.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{ce(jt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ce(jt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Oh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Pb(),a=Cb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ce(jt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const _=new wM({Io:I=>{g?ce(jt,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(p||(ce(jt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),ce(jt,`RPC '${e}' stream ${s} sending:`,I),d.send(I))},To:()=>d.close()}),w=(I,x,M)=>{I.listen(x,O=>{try{M(O)}catch(L){setTimeout(()=>{throw L},0)}})};return w(d,jo.EventType.OPEN,()=>{g||(ce(jt,`RPC '${e}' stream ${s} transport opened.`),_.yo())}),w(d,jo.EventType.CLOSE,()=>{g||(g=!0,ce(jt,`RPC '${e}' stream ${s} transport closed`),_.So())}),w(d,jo.EventType.ERROR,I=>{g||(g=!0,qi(jt,`RPC '${e}' stream ${s} transport errored:`,I),_.So(new oe(j.UNAVAILABLE,"The operation could not be completed")))}),w(d,jo.EventType.MESSAGE,I=>{var x;if(!g){const M=I.data[0];He(!!M);const O=M,L=O.error||((x=O[0])===null||x===void 0?void 0:x.error);if(L){ce(jt,`RPC '${e}' stream ${s} received error:`,L);const q=L.status;let Z=function(E){const T=gt[E];if(T!==void 0)return tT(T)}(q),S=L.message;Z===void 0&&(Z=j.INTERNAL,S="Unknown error status: "+q+" with message "+L.message),g=!0,_.So(new oe(Z,S)),d.close()}else ce(jt,`RPC '${e}' stream ${s} received:`,M),_.bo(M)}}),w(a,Sb.STAT_EVENT,I=>{I.stat===Id.PROXY?ce(jt,`RPC '${e}' stream ${s} detected buffering proxy`):I.stat===Id.NOPROXY&&ce(jt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function Dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){return new ND(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(kr(n.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new oe(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ce("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TM extends pT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=MD(this.serializer,e),r=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?tr(o.readTime):ve.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Md(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Pd(l)?{documents:FD(i,l)}:{query:UD(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sT(i,o.resumeToken);const u=Nd(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=Pc(i,o.snapshotVersion.toTimestamp());const u=Nd(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=$D(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Md(this.serializer),n.removeTarget=e,this.a_(n)}}class IM extends pT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return He(!!e.streamToken),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){He(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=VD(e.writeResults,e.commitTime),r=tr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Md(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>LD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new oe(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Od(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Od(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kr(n),this.D_=!1):ce("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ai(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=we(l);u.L_.add(4),await Ya(u),u.q_.set("Unknown"),u.L_.delete(4),await Pu(u)}(this))})}),this.q_=new RM(r,s)}}async function Pu(t){if(ai(t))for(const e of t.B_)await e(!0)}async function Ya(t){for(const e of t.B_)await e(!1)}function mT(t,e){const n=we(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),yp(n)?_p(n):lo(n).r_()&&gp(n,e))}function mp(t,e){const n=we(t),r=lo(n);n.N_.delete(e),r.r_()&&gT(n,e),n.N_.size===0&&(r.r_()?r.o_():ai(n)&&n.q_.set("Unknown"))}function gp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).A_(e)}function gT(t,e){t.Q_.xe(e),lo(t).R_(e)}function _p(t){t.Q_=new CD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.q_.v_()}function yp(t){return ai(t)&&!lo(t).n_()&&t.N_.size>0}function ai(t){return we(t).L_.size===0}function _T(t){t.Q_=void 0}async function CM(t){t.q_.set("Online")}async function PM(t){t.N_.forEach((e,n)=>{gp(t,e)})}async function kM(t,e){_T(t),yp(t)?(t.q_.M_(e),_p(t)):t.q_.set("Unknown")}async function xM(t,e,n){if(t.q_.set("Online"),e instanceof rT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){ce("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kc(t,r)}else if(e instanceof ec?t.Q_.Ke(e):e instanceof nT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ve.min()))try{const r=await dT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(Vt.EMPTY_BYTE_STRING,h.snapshotVersion)),gT(i,l);const d=new ts(h.target,l,u,h.sequenceNumber);gp(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ce("RemoteStore","Failed to raise snapshot:",r),await kc(t,r)}}async function kc(t,e,n){if(!za(e))throw e;t.L_.add(1),await Ya(t),t.q_.set("Offline"),n||(n=()=>dT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ce("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Pu(t)})}function yT(t,e){return e().catch(n=>kc(t,n,e))}async function ku(t){const e=we(t),n=ds(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;NM(e);)try{const s=await mM(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,OM(e,s)}catch(s){await kc(e,s)}vT(e)&&ET(e)}function NM(t){return ai(t)&&t.O_.length<10}function OM(t,e){t.O_.push(e);const n=ds(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vT(t){return ai(t)&&!ds(t).n_()&&t.O_.length>0}function ET(t){ds(t).start()}async function DM(t){ds(t).p_()}async function MM(t){const e=ds(t);for(const n of t.O_)e.m_(n.mutations)}async function LM(t,e,n){const r=t.O_.shift(),s=cp.from(r,e,n);await yT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ku(t)}async function VM(t,e){e&&ds(t).V_&&await async function(r,s){if(function(o){return AD(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();ds(r).s_(),await yT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ku(r)}}(t,e),vT(t)&&ET(t)}async function iy(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const r=ai(n);n.L_.add(3),await Ya(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Pu(n)}async function FM(t,e){const n=we(t);e?(n.L_.delete(2),await Pu(n)):e||(n.L_.add(2),await Ya(n),n.q_.set("Unknown"))}function lo(t){return t.K_||(t.K_=function(n,r,s){const i=we(n);return i.w_(),new TM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:CM.bind(null,t),Ro:PM.bind(null,t),mo:kM.bind(null,t),d_:xM.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),yp(t)?_p(t):t.q_.set("Unknown")):(await t.K_.stop(),_T(t))})),t.K_}function ds(t){return t.U_||(t.U_=function(n,r,s){const i=we(n);return i.w_(),new IM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DM.bind(null,t),mo:VM.bind(null,t),f_:MM.bind(null,t),g_:LM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ku(t)):(await t.U_.stop(),t.O_.length>0&&(ce("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new vp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ep(t,e){if(kr("AsyncQueue",`${e}: ${t}`),za(t))return new oe(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Wo(),this.sortedSet=new yt(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.W_=new yt(he.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ye():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qi(e,n,Vi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BM{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=ay(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new oe(j.ABORTED,"Firestore shutting down"))}}function ay(){return new ao(t=>Wb(t),Tu)}async function $M(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new UM,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ep(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&wp(n)}async function jM(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function WM(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&wp(n)}function qM(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function wp(t){t.Y_.forEach(e=>{e.next()})}var Vd,ly;(ly=Vd||(Vd={})).ea="default",ly.Cache="cache";class HM{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Vd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.key=e}}class bT{constructor(e){this.key=e}}class zM{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ce(),this.mutatedKeys=Ce(),this.Aa=qb(e),this.Ra=new Vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new oy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Iu(this.query,d)?d:null,_=!!p&&this.mutatedKeys.has(p.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;p&&g?p.data.isEqual(g.data)?_!==w&&(r.track({type:3,doc:g}),I=!0):this.ga(p,g)||(r.track({type:2,doc:g}),I=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),I=!0):p&&!g&&(r.track({type:1,doc:p}),I=!0,(l||u)&&(a=!0)),I&&(g?(o=o.add(g),i=w?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(g,_){const w=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return w(g)-w(_)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Qi(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new oy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new bT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new wT(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Qi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class KM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GM{constructor(e){this.key=e,this.va=!1}}class QM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ao(a=>Wb(a),Tu),this.Ma=new Map,this.xa=new Set,this.Oa=new yt(he.comparator),this.Na=new Map,this.La=new dp,this.Ba={},this.ka=new Map,this.qa=Gi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function YM(t,e,n=!0){const r=CT(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await TT(r,e,n,!0),s}async function JM(t,e){const n=CT(t);await TT(n,e,!0,!1)}async function TT(t,e,n,r){const s=await gM(t.localStore,Zn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await XM(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&mT(t.remoteStore,s),a}async function XM(t,e,n,r,s){t.Ka=(d,p,g)=>async function(w,I,x,M){let O=I.view.ma(x);O.ns&&(O=await ny(w.localStore,I.query,!1).then(({documents:S})=>I.view.ma(S,O)));const L=M&&M.targetChanges.get(I.targetId),q=M&&M.targetMismatches.get(I.targetId)!=null,Z=I.view.applyChanges(O,w.isPrimaryClient,L,q);return uy(w,I.targetId,Z.wa),Z.snapshot}(t,d,p,g);const i=await ny(t.localStore,e,!0),o=new zM(e,i.Ts),a=o.ma(i.documents),l=Qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);uy(t,n,u.wa);const h=new KM(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function ZM(t,e,n){const r=we(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Tu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ld(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&mp(r.remoteStore,s.targetId),Fd(r,s.targetId)}).catch(Ha)):(Fd(r,s.targetId),await Ld(r.localStore,s.targetId,!0))}async function eL(t,e){const n=we(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mp(n.remoteStore,r.targetId))}async function tL(t,e,n){const r=lL(t);try{const s=await function(o,a){const l=we(o),u=bt.now(),h=a.reduce((g,_)=>g.add(_.key),Ce());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=xr(),w=Ce();return l.cs.getEntries(g,h).next(I=>{_=I,_.forEach((x,M)=>{M.isValidDocument()||(w=w.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(I=>{d=I;const x=[];for(const M of a){const O=ED(M,d.get(M.key).overlayedDocument);O!=null&&x.push(new oi(M.key,O,Db(O.value.mapValue),er.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,x,a)}).next(I=>{p=I;const x=I.applyToLocalDocumentSet(d,w);return l.documentOverlayCache.saveOverlays(g,I.batchId,x)})}).then(()=>({batchId:p.batchId,changes:zb(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new yt(Fe)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ja(r,s.changes),await ku(r.remoteStore)}catch(s){const i=Ep(s,"Failed to persist write");n.reject(i)}}async function IT(t,e){const n=we(t);try{const r=await fM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?He(o.va):s.removedDocuments.size>0&&(He(o.va),o.va=!1))}),await Ja(n,r,e)}catch(r){await Ha(r)}}function cy(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=we(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&wp(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nL(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new yt(he.comparator);o=o.insert(i,zt.newNoDocument(i,ve.min()));const a=Ce().add(i),l=new Su(ve.min(),new Map,new yt(Fe),o,a);await IT(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),bp(r)}else await Ld(r.localStore,e,!1).then(()=>Fd(r,e,n)).catch(Ha)}async function rL(t,e){const n=we(t),r=e.batch.batchId;try{const s=await dM(n.localStore,e);RT(n,r,null),AT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ja(n,s)}catch(s){await Ha(s)}}async function sL(t,e,n){const r=we(t);try{const s=await function(o,a){const l=we(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(He(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);RT(r,e,n),AT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ja(r,s)}catch(s){await Ha(s)}}function AT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function RT(t,e,n){const r=we(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Fd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ST(t,r)})}function ST(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(mp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),bp(t))}function uy(t,e,n){for(const r of n)r instanceof wT?(t.La.addReference(r.key,e),iL(t,r)):r instanceof bT?(ce("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ST(t,r.key)):ye()}function iL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ce("SyncEngine","New document in limbo: "+n),t.xa.add(r),bp(t))}function bp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new he(st.fromString(e)),r=t.qa.next();t.Na.set(r,new GM(n)),t.Oa=t.Oa.insert(n,r),mT(t.remoteStore,new ts(Zn($b(n.path)),r,"TargetPurposeLimboResolution",tp.oe))}}async function Ja(t,e,n){const r=we(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=pp.Wi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=we(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>H.forEach(u,p=>H.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>H.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!za(d))throw d;ce("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.os.get(p),_=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(_);h.os=h.os.insert(p,w)}}}(r.localStore,i))}async function oL(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ce("SyncEngine","User change. New user:",e.toKey());const r=await hT(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new oe(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ja(n,r.hs)}}function aL(t,e){const n=we(t),r=n.Na.get(e);if(r&&r.va)return Ce().add(r.key);{let s=Ce();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function CT(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nL.bind(null,e),e.Ca.d_=WM.bind(null,e.eventManager),e.Ca.$a=qM.bind(null,e.eventManager),e}function lL(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sL.bind(null,e),e}class xc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return hM(this.persistence,new cM,e.initialUser,this.serializer)}Ga(e){return new oM(fp.Zr,this.serializer)}Wa(e){return new yM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xc.provider={build:()=>new xc};class Ud{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oL.bind(null,this.syncEngine),await FM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BM}()}createDatastore(e){const n=Cu(e.databaseInfo.databaseId),r=function(i){return new bM(i)}(e.databaseInfo);return function(i,o,a,l){return new AM(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new SM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>cy(this.syncEngine,n,0),function(){return sy.D()?new sy:new vM}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new QM(s,i,o,a,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=we(s);ce("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ya(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ud.provider={build:()=>new Ud};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):kr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Wt.UNAUTHENTICATED,this.clientId=xb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ce("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ce("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mh(t,e){t.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await hT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hL(t);ce("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>iy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>iy(e.remoteStore,s)),t._onlineComponents=e}async function hL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;qi("Error using user provided cache. Falling back to memory cache: "+n),await Mh(t,new xc)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await Mh(t,new xc);return t._offlineComponents}async function PT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await hy(t,t._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await hy(t,new Ud))),t._onlineComponents}function dL(t){return PT(t).then(e=>e.syncEngine)}async function fL(t){const e=await PT(t),n=e.eventManager;return n.onListen=YM.bind(null,e.syncEngine),n.onUnlisten=ZM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eL.bind(null,e.syncEngine),n}function pL(t,e,n={}){const r=new os;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new cL({next:p=>{h.Za(),o.enqueueAndForget(()=>jM(i,d)),p.fromCache&&l.source==="server"?u.reject(new oe(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new HM(a,h,{includeMetadataChanges:!0,_a:!0});return $M(i,d)}(await fL(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t,e,n){if(!n)throw new oe(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mL(t,e,n,r){if(e===!0&&r===!0)throw new oe(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fy(t){if(!he.isDocumentKey(t))throw new oe(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function py(t){if(he.isDocumentKey(t))throw new oe(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function xa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(t);throw new oe(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new my({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new my(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PO;switch(r.type){case"firstParty":return new OO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dy.get(n);r&&(ce("ComponentProvider","Removing Datastore"),dy.delete(n),r.terminate())}(this),Promise.resolve()}}function gL(t,e,n,r={}){var s;const i=(t=xa(t,Nu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Wt.MOCK_USER;else{a=Qk(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new oe(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Wt(u)}t._authCredentials=new kO(new kb(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new co(this.firestore,e,this._query)}}class An{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class ls extends co{constructor(e,n,r){super(e,n,$b(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new he(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function Bd(t,e,...n){if(t=nn(t),xT("collection","path",e),t instanceof Nu){const r=st.fromString(e,...n);return py(r),new ls(t,null,r)}{if(!(t instanceof An||t instanceof ls))throw new oe(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return py(r),new ls(t.firestore,null,r)}}function _L(t,e,...n){if(t=nn(t),arguments.length===1&&(e=xb.newId()),xT("doc","path",e),t instanceof Nu){const r=st.fromString(e,...n);return fy(r),new An(t,null,new he(r))}{if(!(t instanceof An||t instanceof ls))throw new oe(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return fy(r),new An(t.firestore,t instanceof ls?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fT(this,"async_queue_retry"),this.Vu=()=>{const r=Dh();r&&ce("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Dh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new os;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!za(e))throw e;ce("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw kr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=vp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ye()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ou extends Nu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new gy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gy(e),this._firestoreClient=void 0,await e}}}function yL(t,e){const n=typeof t=="object"?t:Wf(),r=typeof t=="string"?t:"(default)",s=jf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Gk("firestore");i&&gL(s,...i)}return s}function NT(t){if(t._terminated)throw new oe(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vL(t),t._firestoreClient}function vL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new zO(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,kT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new uL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yi(Vt.fromBase64String(e))}catch(n){throw new oe(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yi(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=/^__.*__$/;class wL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ga(e,this.data,n,this.fieldTransforms)}}function DT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class Rp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Nc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(DT(this.Cu)&&EL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class bL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cu(e)}Qu(e,n,r,s=!1){return new Rp({Cu:e,methodName:n,qu:r,path:Mt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function MT(t){const e=t._freezeSettings(),n=Cu(t._databaseId);return new bL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TL(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);FT("Data must be an object, but it was:",o,r);const a=LT(r,o);let l,u;if(i.merge)l=new kn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=AL(e,d,n);if(!o.contains(p))throw new oe(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);SL(h,p)||h.push(p)}l=new kn(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new wL(new bn(a),l,u)}function IL(t,e,n,r=!1){return Sp(n,t.Qu(r?4:3,e))}function Sp(t,e){if(VT(t=nn(t)))return FT("Unsupported field value:",e,t),LT(t,e);if(t instanceof OT)return function(r,s){if(!DT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Sp(a,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=bt.fromDate(r);return{timestampValue:Pc(s.serializer,i)}}if(r instanceof bt){const i=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pc(s.serializer,i)}}if(r instanceof Ip)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yi)return{bytesValue:sT(s.serializer,r._byteString)};if(r instanceof An){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ap)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return ap(a.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${xu(r)}`)}(t,e)}function LT(t,e){const n={};return Nb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oo(t,(r,s)=>{const i=Sp(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function VT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof bt||t instanceof Ip||t instanceof Yi||t instanceof An||t instanceof OT||t instanceof Ap)}function FT(t,e,n){if(!VT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=xu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function AL(t,e,n){if((e=nn(e))instanceof Tp)return e._internalPath;if(typeof e=="string")return UT(t,e);throw Nc("Field path arguments must be of type string or ",t,!1,void 0,n)}const RL=new RegExp("[~\\*/\\[\\]]");function UT(t,e,n){if(e.search(RL)>=0)throw Nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tp(...e.split("."))._internalPath}catch{throw Nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new oe(j.INVALID_ARGUMENT,a+t+l)}function SL(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CL extends BT{data(){return super.data()}}function Cp(t,e){return typeof e=="string"?UT(t,e):e instanceof Tp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pp{}class kL extends Pp{}function xL(t,e,...n){let r=[];e instanceof Pp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof kp).length,a=i.filter(l=>l instanceof Du).length;if(o>1||o>0&&a>0)throw new oe(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Du extends kL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Du(e,n,r)}_apply(e){const n=this._parse(e);return $T(e._query,n),new co(e.firestore,e.converter,kd(e._query,n))}_parse(e){const n=MT(e.firestore);return function(i,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new oe(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){yy(d,h);const g=[];for(const _ of d)g.push(_y(l,i,_));p={arrayValue:{values:g}}}else p=_y(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||yy(d,h),p=IL(a,o,d,h==="in"||h==="not-in");return _t.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function NL(t,e,n){const r=e,s=Cp("where",t);return Du._create(s,r,n)}class kp extends Pp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)$T(o,l),o=kd(o,l)}(e._query,n),new co(e.firestore,e.converter,kd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function _y(t,e,n){if(typeof(n=nn(n))=="string"){if(n==="")throw new oe(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jb(e)&&n.indexOf("/")!==-1)throw new oe(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!he.isDocumentKey(r))throw new oe(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return U_(t,new he(r))}if(n instanceof An)return U_(t,n._key);throw new oe(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xu(n)}.`)}function yy(t,e){if(!Array.isArray(t)||t.length===0)throw new oe(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $T(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new oe(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class OL{convertValue(e,n="none"){switch(Hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oo(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>pt(o.doubleValue));return new Ap(i)}convertGeoPoint(e){return new Ip(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=hs(e);return new bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);He(uT(r));const s=new Sa(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||kr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ML extends BT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Cp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class tc extends ML{data(e={}){return super.data(e)}}class LL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Dl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tc(this._firestore,this._userDataWriter,r.key,r,new Dl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new tc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Dl(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new tc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Dl(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:VL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}class FL extends OL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,n)}}function jT(t){t=xa(t,co);const e=xa(t.firestore,Ou),n=NT(e),r=new FL(e);return PL(t._query),pL(n,t._query).then(s=>new LL(e,r,t,s))}function UL(t){return WT(xa(t.firestore,Ou),[new lp(t._key,er.none())])}function BL(t,e){const n=xa(t.firestore,Ou),r=_L(t),s=DL(t.converter,e);return WT(n,[TL(MT(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,er.exists(!1))]).then(()=>r)}function WT(t,e){return function(r,s){const i=new os;return r.asyncQueue.enqueueAndForget(async()=>tL(await dL(r),s,i)),i.promise}(NT(t),e)}(function(e,n=!0){(function(s){io=s})(ys),rr(new Fn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ou(new xO(r.getProvider("auth-internal")),new MO(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sa(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),gn(D_,"4.7.3",e),gn(D_,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=new Map,jL={activated:!1,tokenObservers:[]};function $n(t){return $L.get(t)||Object.assign({},jL)}const vy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ea,this.pending.promise.catch(n=>{}),await qL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ea,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function qL(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Oc=new no("appCheck","AppCheck",HL);function qT(t){if(!$n(t).activated)throw Oc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL="firebase-app-check-database",KL=1,$d="firebase-app-check-store";let Ml=null;function GL(){return Ml||(Ml=new Promise((t,e)=>{try{const n=indexedDB.open(zL,KL);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Oc.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore($d,{keyPath:"compositeKey"})}}}catch(n){e(Oc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ml)}function QL(t,e){return YL(JL(t),e)}async function YL(t,e){const r=(await GL()).transaction($d,"readwrite"),i=r.objectStore($d).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var u;a(Oc.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function JL(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Ba("@firebase/app-check");function Ey(t,e){return Ow()?QL(t,e).catch(n=>{jd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL={error:"UNKNOWN_ERROR"};function ZL(t){return gu.encodeString(JSON.stringify(t),!1)}async function Wd(t,e=!1){const n=t.app;qT(n);const r=$n(n);let s=r.token,i;if(s&&!Ho(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Ho(l)?s=l:await Ey(n,void 0))}if(!e&&s&&Ho(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await $n(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?jd.warn(l.message):jd.error(l),i=l}let a;return s?i?Ho(s)?a={token:s.token,internalError:i}:a=by(i):(a={token:s.token},r.token=s,await Ey(n,s)):a=by(i),o&&rV(n,a),a}async function eV(t){const e=t.app;qT(e);const{provider:n}=$n(e);{const{token:r}=await n.getToken();return{token:r}}}function tV(t,e,n,r){const{app:s}=t,i=$n(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ho(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),wy(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>wy(t))}function HT(t,e){const n=$n(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function wy(t){const{app:e}=t,n=$n(e);let r=n.tokenRefresher;r||(r=nV(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function nV(t){const{app:e}=t;return new WL(async()=>{const n=$n(e);let r;if(n.token?r=await Wd(t,!0):r=await Wd(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=$n(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},vy.RETRIAL_MIN_WAIT,vy.RETRIAL_MAX_WAIT)}function rV(t,e){const n=$n(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ho(t){return t.expireTimeMillis-Date.now()>0}function by(t){return{token:ZL(XL),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=$n(this.app);for(const n of e)HT(this.app,n.next);return Promise.resolve()}}function iV(t,e){return new sV(t,e)}function oV(t){return{getToken:e=>Wd(t,e),getLimitedUseToken:()=>eV(t),addTokenListener:e=>tV(t,"INTERNAL",e),removeTokenListener:e=>HT(t.app,e)}}const aV="@firebase/app-check",lV="0.8.8",cV="app-check",Ty="app-check-internal";function uV(){rr(new Fn(cV,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return iV(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Ty).initialize()})),rr(new Fn(Ty,t=>{const e=t.getProvider("app-check").getImmediate();return oV(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),gn(aV,lV)}uV();const zT=Symbol("firebaseApp");function KT(t){return Sn()&&ln(zT,null)||Wf(t)}const hV=typeof window<"u",Ll=new WeakMap;function dV(t,e){if(!Ll.has(t)){const n=Va(!0);Ll.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Ll.delete(t)}}return Ll.get(t)}const fV=new WeakMap,Vl=new WeakMap;function pV(t){const e=KT(t);if(!Vl.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Vl.set(e,i),n(i.value)}];Vl.set(e,s)}return Vl.get(e)}function mV(t,e){hb(e,n=>{const r=pV();t.value=n,Array.isArray(r)&&r[1](t)})}var Iy={};const Ay="@firebase/database",Ry="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GT="";function gV(t){GT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Or(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _V(e)}}catch{}return new yV},Ns=QT("localStorage"),vV=QT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Ba("@firebase/database"),EV=function(){let t=1;return function(){return t++}}(),YT=function(t){const e=d1(t),n=new a1;n.update(e);const r=n.digest();return gu.encodeByteArray(r)},Xa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xa.apply(null,r):typeof r=="object"?e+=Dt(r):e+=r,e+=" "}return e};let oa=null,Sy=!0;const wV=function(t,e){te(!e,"Can't turn on custom loggers persistently."),Fi.logLevel=Se.VERBOSE,oa=Fi.log.bind(Fi)},Kt=function(...t){if(Sy===!0&&(Sy=!1,oa===null&&vV.get("logging_enabled")===!0&&wV()),oa){const e=Xa.apply(null,t);oa(e)}},Za=function(t){return function(...e){Kt(t,...e)}},qd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xa(...t);Fi.error(e)},zs=function(...t){const e=`FIREBASE FATAL ERROR: ${Xa(...t)}`;throw Fi.error(e),new Error(e)},_n=function(...t){const e="FIREBASE WARNING: "+Xa(...t);Fi.warn(e)},bV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_n("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},JT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ji="[MIN_NAME]",Ks="[MAX_NAME]",uo=function(t,e){if(t===e)return 0;if(t===Ji||e===Ks)return-1;if(e===Ji||t===Ks)return 1;{const n=Cy(t),r=Cy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},IV=function(t,e){return t===e?0:t<e?-1:1},Do=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Dt(e))},xp=function(t){if(typeof t!="object"||t===null)return Dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Dt(e[r]),n+=":",n+=xp(t[e[r]]);return n+="}",n},XT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Rn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ZT=function(t){te(!JT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},AV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},SV=new RegExp("^-?(0*)\\d{1,10}$"),CV=-2147483648,PV=2147483647,Cy=function(t){if(SV.test(t)){const e=Number(t);if(e>=CV&&e<=PV)return e}return null},el=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _n("Exception was thrown by user callback.",n),e},Math.floor(0))}},kV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},aa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){_n(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_n(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="5",eI="v",tI="s",nI="r",rI="f",sI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iI="ls",oI="p",Hd="ac",aI="websocket",lI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ns.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ns.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cI(t,e,n){te(typeof e=="string","typeof type must == string"),te(typeof n=="object","typeof params must == object");let r;if(e===aI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DV(t)&&(n.ns=t.namespace);const s=[];return Rn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this.counters_={}}incrementCounter(e,n=1){Or(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh={},Vh={};function Op(t){const e=t.toString();return Lh[e]||(Lh[e]=new MV),Lh[e]}function LV(t,e){const n=t.toString();return Vh[n]||(Vh[n]=e()),Vh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&el(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="start",FV="close",UV="pLPCommand",BV="pRTLPCB",uI="id",hI="pw",dI="ser",$V="cb",jV="seg",WV="ts",qV="d",HV="dframe",fI=1870,pI=30,zV=fI-pI,KV=25e3,GV=3e4;class Ri{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Za(e),this.stats_=Op(n),this.urlFn=l=>(this.appCheckToken&&(l[Hd]=this.appCheckToken),cI(n,lI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GV)),TV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dp((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Py)this.id=a,this.password=l;else if(o===FV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Py]="t",r[dI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$V]=this.scriptTagHolder.uniqueCallbackIdentifier),r[eI]=Np,this.transportSessionId&&(r[tI]=this.transportSessionId),this.lastSessionId&&(r[iI]=this.lastSessionId),this.applicationId&&(r[oI]=this.applicationId),this.appCheckToken&&(r[Hd]=this.appCheckToken),typeof location<"u"&&location.hostname&&sI.test(location.hostname)&&(r[nI]=rI);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ri.forceAllow_=!0}static forceDisallow(){Ri.forceDisallow_=!0}static isAvailable(){return Ri.forceAllow_?!0:!Ri.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AV()&&!RV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Rw(n),s=XT(r,zV);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[HV]="t",r[uI]=e,r[hI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Dp{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=EV(),window[UV+this.uniqueCallbackIdentifier]=e,window[BV+this.uniqueCallbackIdentifier]=n,this.myIFrame=Dp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Kt("frame writing exception"),a.stack&&Kt(a.stack),Kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uI]=this.myID,e[hI]=this.myPW,e[dI]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pI+r.length<=fI;){const o=this.pendingSegs.shift();r=r+"&"+jV+s+"="+o.seg+"&"+WV+s+"="+o.ts+"&"+qV+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(KV)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV=16384,YV=45e3;let Dc=null;typeof MozWebSocket<"u"?Dc=MozWebSocket:typeof WebSocket<"u"&&(Dc=WebSocket);class Pn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Za(this.connId),this.stats_=Op(n),this.connURL=Pn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[eI]=Np,typeof location<"u"&&location.hostname&&sI.test(location.hostname)&&(o[nI]=rI),n&&(o[tI]=n),r&&(o[iI]=r),s&&(o[Hd]=s),i&&(o[oI]=i),cI(e,aI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ns.set("previous_websocket_failure",!0);try{let r;Nw(),this.mySock=new Dc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Dc!==null&&!Pn.forceDisallow_}static previouslyFailed(){return Ns.isInMemoryStorage||Ns.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ns.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=wa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(te(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=XT(n,QV);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pn.responsesRequiredToBeHealthy=2;Pn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ri,Pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Pn&&Pn.isAvailable();let r=n&&!Pn.previouslyFailed();if(e.webSocketOnly&&(n||_n("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Pn];else{const s=this.transports_=[];for(const i of Na.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Na.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Na.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV=6e4,XV=5e3,ZV=10*1024,eF=100*1024,Fh="t",ky="d",tF="s",xy="r",nF="e",Ny="o",Oy="a",Dy="n",My="p",rF="h";class sF{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Za("c:"+this.id+":"),this.transportManager_=new Na(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=aa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fh in e){const n=e[Fh];n===Oy?this.upgradeIfSecondaryHealthy_():n===xy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ny&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Do("t",e),r=Do("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:My,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Oy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Do("t",e),r=Do("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Do(Fh,e);if(ky in e){const r=e[ky];if(n===rF){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Dy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tF?this.onConnectionShutdown_(r):n===xy?this.onReset_(r):n===nF?qd("Server Error: "+r):n===Ny?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Np!==r&&_n("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),aa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):aa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:My,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ns.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.allowedEvents_=e,this.listeners_={},te(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){te(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends gI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mc}getInitialEvent(e){return te(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=32,Vy=768;class it{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ze(){return new it("")}function Oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fs(t){return t.pieces_.length-t.pieceNum_}function rt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new it(t.pieces_,e)}function _I(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new it(e,0)}function Ct(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof it)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new it(n,0)}function Pe(t){return t.pieceNum_>=t.pieces_.length}function Tn(t,e){const n=Oe(t),r=Oe(e);if(n===null)return e;if(n===r)return Tn(rt(t),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function EI(t,e){if(fs(t)!==fs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function xn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fs(t)>fs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class oF{constructor(e,n){this.errorPrefix_=n,this.parts_=yI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=yu(this.parts_[r]);wI(this)}}function aF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yu(e),wI(t)}function lF(t){const e=t.parts_.pop();t.byteLength_-=yu(e),t.parts_.length>0&&(t.byteLength_-=1)}function wI(t){if(t.byteLength_>Vy)throw new Error(t.errorPrefix_+"has a key path longer than "+Vy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ly)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ly+") or object contains a cycle "+Ps(t))}function Ps(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends gI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Mp}getInitialEvent(e){return te(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=1e3,cF=60*5*1e3,Fy=30*1e3,uF=1.3,hF=3e4,dF="server_kill",Uy=3;class Rr extends mI{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rr.nextPersistentConnectionId_++,this.log_=Za("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mo,this.maxReconnectDelay_=cF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Nw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Dt(i)),te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Ea,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),te(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Rr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Or(e,"w")){const r=Wi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();_n(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||o1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=i1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):qd("Unrecognized action received from server: "+Dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hF&&(this.reconnectDelay_=Mo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Rr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){te(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new sF(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{_n(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(dF)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&_n(d),l())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pd(this.interruptReasons_)&&(this.reconnectDelay_=Mo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>xp(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new it(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uy&&(this.reconnectDelay_=Fy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+GT.replace(/\./g,"-")]=1,Bf()?e["framework.cordova"]=1:xw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mc.getInstance().currentlyOnline();return pd(this.interruptReasons_)&&e}}Rr.nextPersistentConnectionId_=0;Rr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new De(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new De(Ji,e),s=new De(Ji,n);return this.compare(r,s)!==0}minPost(){return De.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;class bI extends Mu{static get __EMPTY_NODE(){return Fl}static set __EMPTY_NODE(e){Fl=e}compare(e,n){return uo(e.name,n.name)}isDefinedOn(e){throw to("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return De.MIN}maxPost(){return new De(Ks,Fl)}makePost(e,n){return te(typeof e=="string","KeyIndex indexValue must always be a string."),new De(e,Fl)}toString(){return".key"}}const Ui=new bI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Rt.RED,this.left=s??an.EMPTY_NODE,this.right=i??an.EMPTY_NODE}copy(e,n,r,s,i){return new Rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return an.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return an.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Rt.RED=!0;Rt.BLACK=!1;class fF{copy(e,n,r,s,i){return this}insert(e,n,r){return new Rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class an{constructor(e,n=an.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new an(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Rt.BLACK,null,null))}remove(e){return new an(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ul(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ul(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ul(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ul(this.root_,null,this.comparator_,!0,e)}}an.EMPTY_NODE=new fF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pF(t,e){return uo(t.name,e.name)}function Lp(t,e){return uo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zd;function mF(t){zd=t}const TI=function(t){return typeof t=="number"?"number:"+ZT(t):"string:"+t},II=function(t){if(t.isLeafNode()){const e=t.val();te(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Or(e,".sv"),"Priority must be a string or number.")}else te(t===zd||t.isEmpty(),"priority of unexpected type.");te(t===zd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let By;class It{constructor(e,n=It.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),II(this.priorityNode_)}static set __childrenNodeConstructor(e){By=e}static get __childrenNodeConstructor(){return By}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new It(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:Oe(e)===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:It.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(te(r!==".priority"||fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,It.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+TI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ZT(this.value_):e+=this.value_,this.lazyHash_=YT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===It.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof It.__childrenNodeConstructor?-1:(te(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=It.VALUE_TYPE_ORDER.indexOf(n),i=It.VALUE_TYPE_ORDER.indexOf(r);return te(s>=0,"Unknown leaf type: "+n),te(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}It.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AI,RI;function gF(t){AI=t}function _F(t){RI=t}class yF extends Mu{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?uo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return De.MIN}maxPost(){return new De(Ks,new It("[PRIORITY-POST]",RI))}makePost(e,n){const r=AI(e);return new De(n,new It("[PRIORITY-POST]",r))}toString(){return".priority"}}const Qt=new yF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vF=Math.log(2);class EF{constructor(e){const n=i=>parseInt(Math.log(i)/vF,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lc=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let d,p;if(h===0)return null;if(h===1)return d=t[l],p=n?n(d):d,new Rt(p,d.node,Rt.BLACK,null,null);{const g=parseInt(h/2,10)+l,_=s(l,g),w=s(g+1,u);return d=t[g],p=n?n(d):d,new Rt(p,d.node,Rt.BLACK,_,w)}},i=function(l){let u=null,h=null,d=t.length;const p=function(_,w){const I=d-_,x=d;d-=_;const M=s(I+1,x),O=t[I],L=n?n(O):O;g(new Rt(L,O.node,w,null,M))},g=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),I=Math.pow(2,l.count-(_+1));w?p(I,Rt.BLACK):(p(I,Rt.BLACK),p(I,Rt.RED))}return h},o=new EF(t.length),a=i(o);return new an(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh;const yi={};class Tr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return te(yi&&Qt,"ChildrenNode.ts has not been loaded"),Uh=Uh||new Tr({".priority":yi},{".priority":Qt}),Uh}get(e){const n=Wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof an?n:null}hasIndex(e){return Or(this.indexSet_,e.toString())}addIndex(e,n){te(e!==Ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(De.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Lc(r,e.getCompare()):a=yi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Tr(h,u)}addToIndexes(e,n){const r=gc(this.indexes_,(s,i)=>{const o=Wi(this.indexSet_,i);if(te(o,"Missing index implementation for "+i),s===yi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(De.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Lc(a,o.getCompare())}else return yi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new De(e.name,a))),l.insert(e,e.node)}});return new Tr(r,this.indexSet_)}removeFromIndexes(e,n){const r=gc(this.indexes_,s=>{if(s===yi)return s;{const i=n.get(e.name);return i?s.remove(new De(e.name,i)):s}});return new Tr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;class We{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&II(this.priorityNode_),this.children_.isEmpty()&&te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Lo||(Lo=new We(new an(Lp),null,Tr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Lo}updatePriority(e){return this.children_.isEmpty()?this:new We(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Lo:n}}getChild(e){const n=Oe(e);return n===null?this:this.getImmediateChild(n).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(te(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new De(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Lo:this.priorityNode_;return new We(s,o,i)}}updateChild(e,n){const r=Oe(e);if(r===null)return n;{te(Oe(e)!==".priority"||fs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(rt(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Qt,(o,a)=>{n[o]=a.val(e),r++,i&&We.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+TI(this.getPriority().val())+":"),this.forEachChild(Qt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":YT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new De(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new De(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new De(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,De.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tl?-1:0}withIndex(e){if(e===Ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new We(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Qt),s=n.getIterator(Qt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ui?null:this.indexMap_.get(e.toString())}}We.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wF extends We{constructor(){super(new an(Lp),We.EMPTY_NODE,Tr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return We.EMPTY_NODE}isEmpty(){return!1}}const tl=new wF;Object.defineProperties(De,{MIN:{value:new De(Ji,We.EMPTY_NODE)},MAX:{value:new De(Ks,tl)}});bI.__EMPTY_NODE=We.EMPTY_NODE;It.__childrenNodeConstructor=We;mF(tl);_F(tl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bF=!0;function Gt(t,e=null){if(t===null)return We.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),te(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new It(n,Gt(e))}if(!(t instanceof Array)&&bF){const n=[];let r=!1;if(Rn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Gt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new De(o,l)))}}),n.length===0)return We.EMPTY_NODE;const i=Lc(n,pF,o=>o.name,Lp);if(r){const o=Lc(n,Qt.getCompare());return new We(i,Gt(e),new Tr({".priority":o},{".priority":Qt}))}else return new We(i,Gt(e),Tr.Default)}else{let n=We.EMPTY_NODE;return Rn(t,(r,s)=>{if(Or(t,r)&&r.substring(0,1)!=="."){const i=Gt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Gt(e))}}gF(Gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF extends Mu{constructor(e){super(),this.indexPath_=e,te(!Pe(e)&&Oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?uo(e.name,n.name):i}makePost(e,n){const r=Gt(e),s=We.EMPTY_NODE.updateChild(this.indexPath_,r);return new De(n,s)}maxPost(){const e=We.EMPTY_NODE.updateChild(this.indexPath_,tl);return new De(Ks,e)}toString(){return yI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF extends Mu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?uo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,n){const r=Gt(e);return new De(n,r)}toString(){return".value"}}const AF=new IF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RF(t){return{type:"value",snapshotNode:t}}function SF(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function CF(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $y(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ji}hasEnd(){return this.endSet_}getIndexEndValue(){return te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qt}copy(){const e=new Vp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Qt?n="$priority":t.index_===AF?n="$value":t.index_===Ui?n="$key":(te(t.index_ instanceof TF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Dt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Dt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Dt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Dt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Qt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends mI{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Za("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(te(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Vc.getListenId_(e,r),a={};this.listens_[o]=a;const l=jy(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),Wi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const r=Vc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=jy(e._queryParams),r=e._path.toString(),s=new Ea;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=wa(a.responseText)}catch{_n("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&_n("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(){this.rootNode_=We.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){return{value:null,children:new Map}}function SI(t,e,n){if(Pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Oe(e);t.children.has(r)||t.children.set(r,Fc());const s=t.children.get(r);e=rt(e),SI(s,e,n)}}function Kd(t,e,n){t.value!==null?n(e,t.value):xF(t,(r,s)=>{const i=new it(e.toString()+"/"+r);Kd(s,i,n)})}function xF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Rn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=10*1e3,OF=30*1e3,DF=5*60*1e3;class MF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NF(e);const r=qy+(OF-qy)*Math.random();aa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Rn(e,(s,i)=>{i>0&&Or(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),aa(this.reportStats_.bind(this),Math.floor(Math.random()*2*DF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qn||(Qn={}));function CI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function PI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qn.ACK_USER_WRITE,this.source=CI()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new it(e));return new Uc(ze(),n,this.revert)}}else return te(Oe(this.path)===e,"operationForChild called for unrelated child."),new Uc(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qn.OVERWRITE}operationForChild(e){return Pe(this.path)?new Gs(this.source,ze(),this.snap.getImmediateChild(e)):new Gs(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qn.MERGE}operationForChild(e){if(Pe(this.path)){const n=this.children.subtree(new it(e));return n.isEmpty()?null:n.value?new Gs(this.source,ze(),n.value):new Oa(this.source,ze(),n)}else return te(Oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oa(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=Oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function LF(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(PF(o.childName,o.snapshotNode))}),Vo(t,s,"child_removed",e,r,n),Vo(t,s,"child_added",e,r,n),Vo(t,s,"child_moved",i,r,n),Vo(t,s,"child_changed",e,r,n),Vo(t,s,"value",e,r,n),s}function Vo(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>FF(t,a,l)),o.forEach(a=>{const l=VF(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function VF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FF(t,e,n){if(e.childName==null||n.childName==null)throw to("Should only compare child_ events.");const r=new De(e.childName,e.snapshotNode),s=new De(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e){return{eventCache:t,serverCache:e}}function la(t,e,n,r){return xI(new Fp(e,n,r),t.serverCache)}function NI(t,e,n,r){return xI(t.eventCache,new Fp(e,n,r))}function Gd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh;const UF=()=>(Bh||(Bh=new an(IV)),Bh);class nt{constructor(e,n=UF()){this.value=e,this.children=n}static fromObject(e){let n=new nt(null);return Rn(e,(r,s)=>{n=n.set(new it(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ze(),value:this.value};if(Pe(e))return null;{const r=Oe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(rt(e),n);return i!=null?{path:Ct(new it(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const n=Oe(e),r=this.children.get(n);return r!==null?r.subtree(rt(e)):new nt(null)}}set(e,n){if(Pe(e))return new nt(n,this.children);{const r=Oe(e),i=(this.children.get(r)||new nt(null)).set(rt(e),n),o=this.children.insert(r,i);return new nt(this.value,o)}}remove(e){if(Pe(e))return this.children.isEmpty()?new nt(null):new nt(null,this.children);{const n=Oe(e),r=this.children.get(n);if(r){const s=r.remove(rt(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new nt(null):new nt(this.value,i)}else return this}}get(e){if(Pe(e))return this.value;{const n=Oe(e),r=this.children.get(n);return r?r.get(rt(e)):null}}setTree(e,n){if(Pe(e))return n;{const r=Oe(e),i=(this.children.get(r)||new nt(null)).setTree(rt(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new nt(this.value,o)}}fold(e){return this.fold_(ze(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ct(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ze(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(Pe(e))return null;{const i=Oe(e),o=this.children.get(i);return o?o.findOnPath_(rt(e),Ct(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ze(),n)}foreachOnPath_(e,n,r){if(Pe(e))return this;{this.value&&r(n,this.value);const s=Oe(e),i=this.children.get(s);return i?i.foreachOnPath_(rt(e),Ct(n,s),r):new nt(null)}}foreach(e){this.foreach_(ze(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ct(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.writeTree_=e}static empty(){return new Mn(new nt(null))}}function ca(t,e,n){if(Pe(e))return new Mn(new nt(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Tn(s,e);return i=i.updateChild(o,n),new Mn(t.writeTree_.set(s,i))}else{const s=new nt(n),i=t.writeTree_.setTree(e,s);return new Mn(i)}}}function Hy(t,e,n){let r=t;return Rn(n,(s,i)=>{r=ca(r,Ct(e,s),i)}),r}function zy(t,e){if(Pe(e))return Mn.empty();{const n=t.writeTree_.setTree(e,new nt(null));return new Mn(n)}}function Qd(t,e){return li(t,e)!=null}function li(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Tn(n.path,e)):null}function Ky(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Qt,(r,s)=>{e.push(new De(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new De(r,s.value))}),e}function cs(t,e){if(Pe(e))return t;{const n=li(t,e);return n!=null?new Mn(new nt(n)):new Mn(t.writeTree_.subtree(e))}}function Yd(t){return t.writeTree_.isEmpty()}function Xi(t,e){return OI(ze(),t.writeTree_,e)}function OI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(te(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=OI(Ct(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ct(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t,e){return UI(e,t)}function BF(t,e,n,r,s){te(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ca(t.visibleWrites,e,n)),t.lastWriteId=r}function $F(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function jF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);te(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&WF(a,r.path)?s=!1:xn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return qF(t),!0;if(r.snap)t.visibleWrites=zy(t.visibleWrites,r.path);else{const a=r.children;Rn(a,l=>{t.visibleWrites=zy(t.visibleWrites,Ct(r.path,l))})}return!0}else return!1}function WF(t,e){if(t.snap)return xn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&xn(Ct(t.path,n),e))return!0;return!1}function qF(t){t.visibleWrites=MI(t.allWrites,HF,ze()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function HF(t){return t.visible}function MI(t,e,n){let r=Mn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)xn(n,o)?(a=Tn(n,o),r=ca(r,a,i.snap)):xn(o,n)&&(a=Tn(o,n),r=ca(r,ze(),i.snap.getChild(a)));else if(i.children){if(xn(n,o))a=Tn(n,o),r=Hy(r,a,i.children);else if(xn(o,n))if(a=Tn(o,n),Pe(a))r=Hy(r,ze(),i.children);else{const l=Wi(i.children,Oe(a));if(l){const u=l.getChild(rt(a));r=ca(r,ze(),u)}}}else throw to("WriteRecord should have .snap or .children")}}return r}function LI(t,e,n,r,s){if(!r&&!s){const i=li(t.visibleWrites,e);if(i!=null)return i;{const o=cs(t.visibleWrites,e);if(Yd(o))return n;if(n==null&&!Qd(o,ze()))return null;{const a=n||We.EMPTY_NODE;return Xi(o,a)}}}else{const i=cs(t.visibleWrites,e);if(!s&&Yd(i))return n;if(!s&&n==null&&!Qd(i,ze()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(xn(u.path,e)||xn(e,u.path))},a=MI(t.allWrites,o,e),l=n||We.EMPTY_NODE;return Xi(a,l)}}}function zF(t,e,n){let r=We.EMPTY_NODE;const s=li(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Qt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=cs(t.visibleWrites,e);return n.forEachChild(Qt,(o,a)=>{const l=Xi(cs(i,new it(o)),a);r=r.updateImmediateChild(o,l)}),Ky(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=cs(t.visibleWrites,e);return Ky(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function KF(t,e,n,r,s){te(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ct(e,n);if(Qd(t.visibleWrites,i))return null;{const o=cs(t.visibleWrites,i);return Yd(o)?s.getChild(n):Xi(o,s.getChild(n))}}function GF(t,e,n,r){const s=Ct(e,n),i=li(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=cs(t.visibleWrites,s);return Xi(o,r.getNode().getImmediateChild(n))}else return null}function QF(t,e){return li(t.visibleWrites,e)}function YF(t,e,n,r,s,i,o){let a;const l=cs(t.visibleWrites,e),u=li(l,ze());if(u!=null)a=u;else if(n!=null)a=Xi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=p.getNext();for(;g&&h.length<s;)d(g,r)!==0&&h.push(g),g=p.getNext();return h}else return[]}function JF(){return{visibleWrites:Mn.empty(),allWrites:[],lastWriteId:-1}}function Jd(t,e,n,r){return LI(t.writeTree,t.treePath,e,n,r)}function VI(t,e){return zF(t.writeTree,t.treePath,e)}function Gy(t,e,n,r){return KF(t.writeTree,t.treePath,e,n,r)}function Bc(t,e){return QF(t.writeTree,Ct(t.treePath,e))}function XF(t,e,n,r,s,i){return YF(t.writeTree,t.treePath,e,n,r,s,i)}function Up(t,e,n){return GF(t.writeTree,t.treePath,e,n)}function FI(t,e){return UI(Ct(t.treePath,e),t.writeTree)}function UI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;te(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),te(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,$y(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,CF(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,SF(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,$y(r,e.snapshotNode,s.oldSnap));else throw to("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const BI=new e2;class Bp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Up(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qs(this.viewCache_),i=XF(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function t2(t,e){te(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),te(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function n2(t,e,n,r,s){const i=new ZF;let o,a;if(n.type===Qn.OVERWRITE){const u=n;u.source.fromUser?o=Xd(t,e,u.path,u.snap,r,s,i):(te(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Pe(u.path),o=$c(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Qn.MERGE){const u=n;u.source.fromUser?o=s2(t,e,u.path,u.children,r,s,i):(te(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Zd(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Qn.ACK_USER_WRITE){const u=n;u.revert?o=a2(t,e,u.path,r,s,i):o=i2(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Qn.LISTEN_COMPLETE)o=o2(t,e,n.path,r,i);else throw to("Unknown operation type: "+n.type);const l=i.getChanges();return r2(e,o,l),{viewCache:o,changes:l}}function r2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Gd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(RF(Gd(e)))}}function $I(t,e,n,r,s,i){const o=e.eventCache;if(Bc(r,n)!=null)return e;{let a,l;if(Pe(n))if(te(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Qs(e),h=u instanceof We?u:We.EMPTY_NODE,d=VI(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Jd(r,Qs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Oe(n);if(u===".priority"){te(fs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=Gy(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=rt(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=Gy(r,n,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Up(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,s,i):a=o.getNode()}}return la(e,a,o.isFullyInitialized()||Pe(n),t.filter.filtersNodes())}}function $c(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Pe(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),g,null)}else{const g=Oe(n);if(!l.isCompleteForPath(n)&&fs(n)>1)return e;const _=rt(n),I=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=h.updatePriority(l.getNode(),I):u=h.updateChild(l.getNode(),g,I,_,BI,null)}const d=NI(e,u,l.isFullyInitialized()||Pe(n),h.filtersNodes()),p=new Bp(s,d,i);return $I(t,d,n,s,p,a)}function Xd(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new Bp(s,e,i);if(Pe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=la(e,u,!0,t.filter.filtersNodes());else{const d=Oe(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=la(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=rt(n),g=a.getNode().getImmediateChild(d);let _;if(Pe(p))_=r;else{const w=h.getCompleteChild(d);w!=null?_I(p)===".priority"&&w.getChild(vI(p)).isEmpty()?_=w:_=w.updateChild(p,r):_=We.EMPTY_NODE}if(g.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,p,h,o);l=la(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Qy(t,e){return t.eventCache.isCompleteForChild(e)}function s2(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=Ct(n,l);Qy(e,Oe(h))&&(a=Xd(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=Ct(n,l);Qy(e,Oe(h))||(a=Xd(t,a,h,u,s,i,o))}),a}function Yy(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Zd(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Pe(n)?u=r:u=new nt(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=Yy(t,g,p);l=$c(t,l,new it(d),_,s,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const g=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),w=Yy(t,_,p);l=$c(t,l,new it(d),w,s,i,o,a)}}),l}function i2(t,e,n,r,s,i,o){if(Bc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return $c(t,e,n,l.getNode().getChild(n),s,i,a,o);if(Pe(n)){let u=new nt(null);return l.getNode().forEachChild(Ui,(h,d)=>{u=u.set(new it(h),d)}),Zd(t,e,n,u,s,i,a,o)}else return e}else{let u=new nt(null);return r.foreach((h,d)=>{const p=Ct(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),Zd(t,e,n,u,s,i,a,o)}}function o2(t,e,n,r,s){const i=e.serverCache,o=NI(e,i.getNode(),i.isFullyInitialized()||Pe(n),i.isFiltered());return $I(t,o,n,r,BI,s)}function a2(t,e,n,r,s,i){let o;if(Bc(r,n)!=null)return e;{const a=new Bp(r,e,s),l=e.eventCache.getNode();let u;if(Pe(n)||Oe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Jd(r,Qs(e));else{const d=e.serverCache.getNode();te(d instanceof We,"serverChildren would be complete if leaf node"),h=VI(r,d)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=Oe(n);let d=Up(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=t.filter.updateChild(l,h,d,rt(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,We.EMPTY_NODE,rt(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jd(r,Qs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Bc(r,ze())!=null,la(e,u,o,t.filter.filtersNodes())}}function l2(t,e){const n=Qs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Pe(e)&&!n.getImmediateChild(Oe(e)).isEmpty())?n.getChild(e):null}function Jy(t,e,n,r){e.type===Qn.MERGE&&e.source.queryId!==null&&(te(Qs(t.viewCache_),"We should always have a full cache before handling merges"),te(Gd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=n2(t.processor_,s,e,n,r);return t2(t.processor_,i.viewCache),te(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,c2(t,i.changes,i.viewCache.eventCache.getNode())}function c2(t,e,n,r){const s=t.eventRegistrations_;return LF(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xy;function u2(t){te(!Xy,"__referenceConstructor has already been defined"),Xy=t}function $p(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return te(i!=null,"SyncTree gave us an op for an invalid query."),Jy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Jy(o,e,n,r));return i}}function jp(t,e){let n=null;for(const r of t.views.values())n=n||l2(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zy;function h2(t){te(!Zy,"__referenceConstructor has already been defined"),Zy=t}class ev{constructor(e){this.listenProvider_=e,this.syncPointTree_=new nt(null),this.pendingWriteTree_=JF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function d2(t,e,n,r,s){return BF(t.pendingWriteTree_,e,n,r,s),s?Vu(t,new Gs(CI(),e,n)):[]}function Si(t,e,n=!1){const r=$F(t.pendingWriteTree_,e);if(jF(t.pendingWriteTree_,e)){let i=new nt(null);return r.snap!=null?i=i.set(ze(),!0):Rn(r.children,o=>{i=i.set(new it(o),!0)}),Vu(t,new Uc(r.path,i,n))}else return[]}function Lu(t,e,n){return Vu(t,new Gs(PI(),e,n))}function f2(t,e,n){const r=nt.fromObject(n);return Vu(t,new Oa(PI(),e,r))}function p2(t,e,n,r){const s=HI(t,r);if(s!=null){const i=zI(s),o=i.path,a=i.queryId,l=Tn(o,e),u=new Gs(kI(a),l,n);return KI(t,o,u)}else return[]}function m2(t,e,n,r){const s=HI(t,r);if(s){const i=zI(s),o=i.path,a=i.queryId,l=Tn(o,e),u=nt.fromObject(n),h=new Oa(kI(a),l,u);return KI(t,o,h)}else return[]}function jI(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Tn(o,e),u=jp(a,l);if(u)return u});return LI(s,e,i,n,!0)}function Vu(t,e){return WI(e,t.syncPointTree_,null,DI(t.pendingWriteTree_,ze()))}function WI(t,e,n,r){if(Pe(t.path))return qI(t,e,n,r);{const s=e.get(ze());n==null&&s!=null&&(n=jp(s,ze()));let i=[];const o=Oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=FI(r,o);i=i.concat(WI(a,l,u,h))}return s&&(i=i.concat($p(s,t,r,n))),i}}function qI(t,e,n,r){const s=e.get(ze());n==null&&s!=null&&(n=jp(s,ze()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=FI(r,o),h=t.operationForChild(o);h&&(i=i.concat(qI(h,a,l,u)))}),s&&(i=i.concat($p(s,t,r,n))),i}function HI(t,e){return t.tagToQueryMap.get(e)}function zI(t){const e=t.indexOf("$");return te(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new it(t.substr(0,e))}}function KI(t,e,n){const r=t.syncPointTree_.get(e);te(r,"Missing sync point for query tag that we're tracking");const s=DI(t.pendingWriteTree_,e);return $p(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wp(n)}node(){return this.node_}}class qp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ct(this.path_,e);return new qp(this.syncTree_,n)}node(){return jI(this.syncTree_,this.path_)}}const g2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},tv=function(t,e,n){if(!t||typeof t!="object")return t;if(te(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return y2(t[".sv"],e);te(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:te(!1,"Unexpected server value: "+t)}},y2=function(t,e,n){t.hasOwnProperty("increment")||te(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&te(!1,"Unexpected increment value: "+r);const s=e.node();if(te(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},v2=function(t,e,n,r){return Hp(e,new qp(n,t),r)},E2=function(t,e,n){return Hp(t,new Wp(e),n)};function Hp(t,e,n){const r=t.getPriority().val(),s=tv(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=tv(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new It(a,Gt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new It(s))),o.forEachChild(Qt,(a,l)=>{const u=Hp(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Kp(t,e){let n=e instanceof it?e:new it(e),r=t,s=Oe(n);for(;s!==null;){const i=Wi(r.node.children,s)||{children:{},childCount:0};r=new zp(s,r,i),n=rt(n),s=Oe(n)}return r}function ho(t){return t.node.value}function GI(t,e){t.node.value=e,ef(t)}function QI(t){return t.node.childCount>0}function w2(t){return ho(t)===void 0&&!QI(t)}function Fu(t,e){Rn(t.node.children,(n,r)=>{e(new zp(n,t,r))})}function YI(t,e,n,r){n&&!r&&e(t),Fu(t,s=>{YI(s,e,!0,r)}),n&&r&&e(t)}function b2(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function nl(t){return new it(t.parent===null?t.name:nl(t.parent)+"/"+t.name)}function ef(t){t.parent!==null&&T2(t.parent,t.name,t)}function T2(t,e,n){const r=w2(n),s=Or(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,ef(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ef(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=/[\[\].#$\/\u0000-\u001F\u007F]/,A2=/[\[\].#$\u0000-\u001F\u007F]/,$h=10*1024*1024,JI=function(t){return typeof t=="string"&&t.length!==0&&!I2.test(t)},R2=function(t){return typeof t=="string"&&t.length!==0&&!A2.test(t)},S2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),R2(t)},XI=function(t,e,n){const r=n instanceof it?new oF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ps(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ps(r)+" with contents = "+e.toString());if(JT(e))throw new Error(t+"contains "+e.toString()+" "+Ps(r));if(typeof e=="string"&&e.length>$h/3&&yu(e)>$h)throw new Error(t+"contains a string greater than "+$h+" utf8 bytes "+Ps(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Rn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!JI(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ps(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aF(r,o),XI(t,a,r),lF(r)}),s&&i)throw new Error(t+' contains ".value" child '+Ps(r)+" in addition to actual children.")}},C2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!JI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!S2(n))throw new Error(h1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function k2(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!EI(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function ci(t,e,n){k2(t,n),x2(t,r=>xn(r,e)||xn(e,r))}function x2(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(N2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function N2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();oa&&Kt("event: "+n.toString()),el(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="repo_interrupt",D2=25;class M2{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new P2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fc(),this.transactionQueueTree_=new zp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function L2(t,e,n){if(t.stats_=Op(t.repoInfo_),t.forceRestClient_||kV())t.server_=new Vc(t.repoInfo_,(r,s,i,o)=>{nv(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Rr(t.repoInfo_,e,(r,s,i,o)=>{nv(t,r,s,i,o)},r=>{rv(t,r)},r=>{F2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=LV(t.repoInfo_,()=>new MF(t.stats_,t.server_)),t.infoData_=new kF,t.infoSyncTree_=new ev({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Lu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Gp(t,"connected",!1),t.serverSyncTree_=new ev({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);ci(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function V2(t){const n=t.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ZI(t){return g2({timestamp:V2(t)})}function nv(t,e,n,r,s){t.dataUpdateCount++;const i=new it(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=gc(n,u=>Gt(u));o=m2(t.serverSyncTree_,i,l,s)}else{const l=Gt(n);o=p2(t.serverSyncTree_,i,l,s)}else if(r){const l=gc(n,u=>Gt(u));o=f2(t.serverSyncTree_,i,l)}else{const l=Gt(n);o=Lu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Yp(t,i)),ci(t.eventQueue_,a,o)}function rv(t,e){Gp(t,"connected",e),e===!1&&B2(t)}function F2(t,e){Rn(e,(n,r)=>{Gp(t,n,r)})}function Gp(t,e,n){const r=new it("/.info/"+e),s=Gt(n);t.infoData_.updateSnapshot(r,s);const i=Lu(t.infoSyncTree_,r,s);ci(t.eventQueue_,r,i)}function U2(t){return t.nextWriteId_++}function B2(t){e0(t,"onDisconnectEvents");const e=ZI(t),n=Fc();Kd(t.onDisconnect_,ze(),(s,i)=>{const o=v2(s,i,t.serverSyncTree_,e);SI(n,s,o)});let r=[];Kd(n,ze(),(s,i)=>{r=r.concat(Lu(t.serverSyncTree_,s,i));const o=q2(t,s);Yp(t,o)}),t.onDisconnect_=Fc(),ci(t.eventQueue_,ze(),r)}function $2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(O2)}function e0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Kt(n,...e)}function t0(t,e,n){return jI(t.serverSyncTree_,e,n)||We.EMPTY_NODE}function Qp(t,e=t.transactionQueueTree_){if(e||Uu(t,e),ho(e)){const n=r0(t,e);te(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&j2(t,nl(e),n)}else QI(e)&&Fu(e,n=>{Qp(t,n)})}function j2(t,e,n){const r=n.map(u=>u.currentWriteId),s=t0(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];te(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Tn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{e0(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Si(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Uu(t,Kp(t.transactionQueueTree_,e)),Qp(t,t.transactionQueueTree_),ci(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)el(d[p])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{_n("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Yp(t,e)}},o)}function Yp(t,e){const n=n0(t,e),r=nl(n),s=r0(t,n);return W2(t,s,r),r}function W2(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Tn(n,l.path);let h=!1,d;if(te(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(Si(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=D2)h=!0,d="maxretry",s=s.concat(Si(t.serverSyncTree_,l.currentWriteId,!0));else{const p=t0(t,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){XI("transaction failed: Data returned ",g,l.path);let _=Gt(g);typeof g=="object"&&g!=null&&Or(g,".priority")||(_=_.updatePriority(p.getPriority()));const I=l.currentWriteId,x=ZI(t),M=E2(_,p,x);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=M,l.currentWriteId=U2(t),o.splice(o.indexOf(I),1),s=s.concat(d2(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),s=s.concat(Si(t.serverSyncTree_,I,!0))}else h=!0,d="nodata",s=s.concat(Si(t.serverSyncTree_,l.currentWriteId,!0))}ci(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Uu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)el(r[a]);Qp(t,t.transactionQueueTree_)}function n0(t,e){let n,r=t.transactionQueueTree_;for(n=Oe(e);n!==null&&ho(r)===void 0;)r=Kp(r,n),e=rt(e),n=Oe(e);return r}function r0(t,e){const n=[];return s0(t,e,n),n.sort((r,s)=>r.order-s.order),n}function s0(t,e,n){const r=ho(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Fu(e,s=>{s0(t,s,n)})}function Uu(t,e){const n=ho(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,GI(e,n.length>0?n:void 0)}Fu(e,r=>{Uu(t,r)})}function q2(t,e){const n=nl(n0(t,e)),r=Kp(t.transactionQueueTree_,e);return b2(r,s=>{jh(t,s)}),jh(t,r),YI(r,s=>{jh(t,s)}),n}function jh(t,e){const n=ho(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(te(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(te(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Si(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?GI(e,void 0):n.length=i+1,ci(t.eventQueue_,nl(e),s);for(let o=0;o<r.length;o++)el(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function z2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):_n(`Invalid query segment '${n}' in query '${t}'`)}return e}const sv=function(t,e){const n=K2(t),r=n.namespace;n.domain==="firebase.com"&&zs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bV();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OV(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new it(n.pathString)}},K2=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=H2(t.substring(h,d)));const p=z2(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return Pe(this._path)?null:_I(this._path)}get ref(){return new fo(this._repo,this._path)}get _queryIdentifier(){const e=Wy(this._queryParams),n=xp(e);return n==="{}"?"default":n}get _queryObject(){return Wy(this._queryParams)}isEqual(e){if(e=nn(e),!(e instanceof Jp))return!1;const n=this._repo===e._repo,r=EI(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+iF(this._path)}}class fo extends Jp{constructor(e,n){super(e,n,new Vp,!1)}get parent(){const e=vI(this._path);return e===null?null:new fo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}u2(fo);h2(fo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2="FIREBASE_DATABASE_EMULATOR_HOST",tf={};let Q2=!1;function Y2(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||zs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sv(i,s),a=o.repoInfo,l;typeof process<"u"&&Iy&&(l=Iy[G2]),l?(i=`http://${l}?ns=${a.namespace}`,o=sv(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new NV(t.name,t.options,e);C2("Invalid Firebase Database URL",o),Pe(o.path)||zs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=X2(a,t,u,new xV(t.name,n));return new Z2(h,t)}function J2(t,e){const n=tf[e];(!n||n[t.key]!==t)&&zs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$2(t),delete n[t.key]}function X2(t,e,n,r){let s=tf[e.name];s||(s={},tf[e.name]=s);let i=s[t.toURLString()];return i&&zs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new M2(t,Q2,n,r),s[t.toURLString()]=i,i}class Z2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(L2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fo(this._repo,ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(J2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zs("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(t){gV(ys),rr(new Fn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Y2(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),gn(Ay,Ry,t),gn(Ay,Ry,"esm2017")}Rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eU();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebasestorage.googleapis.com",tU="storageBucket",nU=2*60*1e3,rU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ar{constructor(e,n,r=0){super(Wh(e),`Firebase Storage: ${n} (${Wh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ir;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ir||(ir={}));function Wh(t){return"storage/"+t}function sU(){const t="An unknown error occurred, please check the error payload for server response.";return new lr(ir.UNKNOWN,t)}function iU(){return new lr(ir.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oU(){return new lr(ir.CANCELED,"User canceled the upload/download.")}function aU(t){return new lr(ir.INVALID_URL,"Invalid URL '"+t+"'.")}function lU(t){return new lr(ir.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iv(t){return new lr(ir.INVALID_ARGUMENT,t)}function o0(){return new lr(ir.APP_DELETED,"The Firebase app was deleted.")}function cU(t){return new lr(ir.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nn.makeFromUrl(e,n)}catch{return new Nn(e,"")}if(r.path==="")return r;throw lU(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),_={bucket:1,path:3},w=n===i0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",x=new RegExp(`^https?://${w}/${s}/${I}`,"i"),O=[{regex:a,indices:l,postModify:i},{regex:g,indices:_,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<O.length;L++){const q=O[L],Z=q.regex.exec(e);if(Z){const S=Z[q.indices.bucket];let v=Z[q.indices.path];v||(v=""),r=new Nn(S,v),q.postModify(r);break}}if(r==null)throw aU(e);return r}}class uU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hU(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...I){u||(u=!0,e.apply(null,I))}function d(I){s=setTimeout(()=>{s=null,t(g,l())},I)}function p(){i&&clearTimeout(i)}function g(I,...x){if(u){p();return}if(I){p(),h.call(null,I,...x);return}if(l()||o){p(),h.call(null,I,...x);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,d(O)}let _=!1;function w(I){_||(_=!0,p(),!u&&(s!==null?(I||(a=2),clearTimeout(s),d(0)):I||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function dU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fU(t){return t!==void 0}function ov(t,e,n,r){if(r<e)throw iv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw iv(`Invalid value for '${t}'. Expected ${n} or less.`)}function pU(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var jc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jc||(jc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mU(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gU{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Bl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===jc.NO_ERROR,l=i.getStatus();if(!a||mU(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===jc.ABORT;r(!1,new Bl(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Bl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());fU(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=sU();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?o0():oU();o(l)}else{const l=iU();o(l)}};this.canceled_?n(!1,new Bl(!1,null,!0)):this.backoffId_=hU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _U(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function EU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wU(t,e,n,r,s,i,o=!0){const a=pU(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return vU(u,e),_U(u,n),yU(u,i),EU(u,r),new gU(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TU(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this._service=e,n instanceof Nn?this._location=n:this._location=Nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wc(e,n)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TU(this._location.path)}get storage(){return this._service}get parent(){const e=bU(this._location.path);if(e===null)return null;const n=new Nn(this._location.bucket,e);return new Wc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw cU(e)}}function av(t,e){const n=e==null?void 0:e[tU];return n==null?null:Nn.makeFromBucketSpec(n,t)}class IU{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=i0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nU,this._maxUploadRetryTime=rU,this._requests=new Set,s!=null?this._bucket=Nn.makeFromBucketSpec(s,this._host):this._bucket=av(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=av(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ov("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ov("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new uU(o0());{const o=wU(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const lv="@firebase/storage",cv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU="storage";function RU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new IU(n,r,s,e,ys)}function SU(){rr(new Fn(AU,RU,"PUBLIC").setMultipleInstances(!0)),gn(lv,cv,""),gn(lv,cv,"esm2017")}SU();function CU(t){return PU({initialUser:t,dependencies:{popupRedirectResolver:Tb,persistence:[Eb,pb,Jf]}})}const a0=Symbol("VueFireAuth");function PU({dependencies:t,initialUser:e}){return(n,r)=>{const[s,i]=kU(n,r,e,t);mV(s,i)}}function kU(t,e,n,r,s=ib(t,r)){const i=dV(t,e).run(()=>fe(n));return fV.set(t,i),e.provide(a0,s),[i,s]}function l0(t){return hV?ln(a0):null}function xU(t,{firebaseApp:e,modules:n=[]}){t.provide(zT,e);for(const r of n)r(e,t)}const NU={apiKey:"AIzaSyB30tgrnYRbTH0CkuPtVWAAXqvK9d1qdCM",authDomain:"fit5032-week7-b7bec.firebaseapp.com",projectId:"fit5032-week7-b7bec",storageBucket:"fit5032-week7-b7bec.appspot.com",messagingSenderId:"145042006257",appId:"1:145042006257:web:8057355ea0aa03c445c950",measurementId:"G-SC7JY7JS5J"},Xp=Vw(NU),OU=SO(Xp),nf=yL(Xp),Ys=Ue({__name:"Card",props:{class:{}},setup(t){const e=t;return(n,r)=>(ie(),Re("div",{class:dn(N(or)("rounded-lg border bg-card text-card-foreground shadow-sm",e.class))},[Ze(n.$slots,"default")],2))}}),Js=Ue({__name:"CardHeader",props:{class:{}},setup(t){const e=t;return(n,r)=>(ie(),Re("div",{class:dn(N(or)("flex flex-col gap-y-1.5 p-6",e.class))},[Ze(n.$slots,"default")],2))}}),Zi=Ue({__name:"CardTitle",props:{class:{}},setup(t){const e=t;return(n,r)=>(ie(),Re("h3",{class:dn(N(or)("text-2xl font-semibold leading-none tracking-tight",e.class))},[Ze(n.$slots,"default")],2))}}),Xs=Ue({__name:"CardDescription",props:{class:{}},setup(t){const e=t;return(n,r)=>(ie(),Re("p",{class:dn(N(or)("text-sm text-muted-foreground",e.class))},[Ze(n.$slots,"default")],2))}}),Zs=Ue({__name:"CardContent",props:{class:{}},setup(t){const e=t;return(n,r)=>(ie(),Re("div",{class:dn(N(or)("p-6 pt-0",e.class))},[Ze(n.$slots,"default")],2))}}),DU={class:"flex items-center justify-center min-h-screen"},MU={class:"grid gap-4"},LU={class:"grid grid-cols-2 gap-4"},VU={class:"grid gap-2"},FU={class:"grid gap-2"},UU={class:"grid gap-2"},BU={class:"grid gap-2"},$U={class:"mt-4 text-center text-sm"},jU={__name:"Register",setup(t){const e=fe(""),n=fe("");fe(""),fe(""),KT();const r=l0(),s=du(),i=async()=>{if(console.log("Register function called"),!n.value){alert("Password is required");return}try{const a=(await gN(r,e.value,n.value)).user;console.log("User registered:",a),alert("Registration successful"),s.push("/login")}catch(o){console.error("Registration failed:",o),alert("Registration failed: "+o.message||o)}};return(o,a)=>{const l=mE("router-link");return ie(),Re("div",DU,[z(N(Ys),{class:"mx-auto max-w-sm"},{default:J(()=>[z(N(Js),null,{default:J(()=>[z(N(Zi),{class:"text-xl"},{default:J(()=>a[2]||(a[2]=[Ae(" Sign Up ")])),_:1}),z(N(Xs),null,{default:J(()=>a[3]||(a[3]=[Ae(" Enter your information to create an account ")])),_:1})]),_:1}),z(N(Zs),null,{default:J(()=>[$("form",{onSubmit:cu(i,["prevent"])},[$("div",MU,[$("div",LU,[$("div",VU,[z(N(es),{for:"first-name"},{default:J(()=>a[4]||(a[4]=[Ae("First name")])),_:1}),z(N(Zr),{id:"first-name",placeholder:"Max",required:""})]),$("div",FU,[z(N(es),{for:"last-name"},{default:J(()=>a[5]||(a[5]=[Ae("Last name")])),_:1}),z(N(Zr),{id:"last-name",placeholder:"Robinson",required:""})])]),$("div",UU,[z(N(es),{for:"email"},{default:J(()=>a[6]||(a[6]=[Ae("Email")])),_:1}),z(N(Zr),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u),id:"email",type:"email",placeholder:"m@example.com",required:""},null,8,["modelValue"])]),$("div",BU,[z(N(es),{for:"password"},{default:J(()=>a[7]||(a[7]=[Ae("Password")])),_:1}),z(N(Zr),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=u=>n.value=u),id:"password",type:"password"},null,8,["modelValue"])]),z(N(vr),{type:"submit",class:"w-full"},{default:J(()=>a[8]||(a[8]=[Ae(" Create an account ")])),_:1})])],32),$("div",$U,[a[10]||(a[10]=Ae(" Already have an account? ")),z(l,{to:"/login",class:"text-blue-500"},{default:J(()=>a[9]||(a[9]=[Ae(" Sign in ")])),_:1})])]),_:1})]),_:1})])}}};/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let c0;const Bu=t=>c0=t,u0=Symbol();function rf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ua;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ua||(ua={}));function WU(){const t=Va(!0),e=t.run(()=>fe({}));let n=[],r=[];const s=Af({install(i){Bu(s),s._a=i,i.provide(u0,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!OC?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const h0=()=>{};function uv(t,e,n,r=h0){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Xc()&&yf(s),s}function vi(t,...e){t.slice().forEach(n=>{n(...e)})}const qU=t=>t(),hv=Symbol(),qh=Symbol();function sf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];rf(s)&&rf(r)&&t.hasOwnProperty(n)&&!lt(r)&&!rs(r)?t[n]=sf(s,r):t[n]=r}return t}const HU=Symbol();function zU(t){return!rf(t)||!t.hasOwnProperty(HU)}const{assign:Hr}=Object;function KU(t){return!!(lt(t)&&t.effect)}function GU(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=Rf(n.state.value[t]);return Hr(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Af(ke(()=>{Bu(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=d0(t,u,e,n,r,!0),l}function d0(t,e,n={},r,s,i){let o;const a=Hr({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),fe({});let w;function I(v){let E;u=h=!1,typeof v=="function"?(v(r.state.value[t]),E={type:ua.patchFunction,storeId:t,events:g}):(sf(r.state.value[t],v),E={type:ua.patchObject,payload:v,storeId:t,events:g});const T=w=Symbol();En().then(()=>{w===T&&(u=!0)}),h=!0,vi(d,E,r.state.value[t])}const x=i?function(){const{state:E}=n,T=E?E():{};this.$patch(C=>{Hr(C,T)})}:h0;function M(){o.stop(),d=[],p=[],r._s.delete(t)}const O=(v,E="")=>{if(hv in v)return v[qh]=E,v;const T=function(){Bu(r);const C=Array.from(arguments),P=[],A=[];function ut(pe){P.push(pe)}function xt(pe){A.push(pe)}vi(p,{args:C,name:T[qh],store:q,after:ut,onError:xt});let Be;try{Be=v.apply(this&&this.$id===t?this:q,C)}catch(pe){throw vi(A,pe),pe}return Be instanceof Promise?Be.then(pe=>(vi(P,pe),pe)).catch(pe=>(vi(A,pe),Promise.reject(pe))):(vi(P,Be),Be)};return T[hv]=!0,T[qh]=E,T},L={_p:r,$id:t,$onAction:uv.bind(null,p),$patch:I,$reset:x,$subscribe(v,E={}){const T=uv(d,v,E.detached,()=>C()),C=o.run(()=>Pt(()=>r.state.value[t],P=>{(E.flush==="sync"?h:u)&&v({storeId:t,type:ua.direct,events:g},P)},Hr({},l,E)));return T},$dispose:M},q=ni(L);r._s.set(t,q);const S=(r._a&&r._a.runWithContext||qU)(()=>r._e.run(()=>(o=Va()).run(()=>e({action:O}))));for(const v in S){const E=S[v];if(lt(E)&&!KU(E)||rs(E))i||(_&&zU(E)&&(lt(E)?E.value=_[v]:sf(E,_[v])),r.state.value[t][v]=E);else if(typeof E=="function"){const T=O(E,v);S[v]=T,a.actions[v]=E}}return Hr(q,S),Hr(Ve(q),S),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:v=>{I(E=>{Hr(E,v)})}}),r._p.forEach(v=>{Hr(q,o.run(()=>v({store:q,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(q.$state,_),u=!0,h=!0,q}function QU(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,l){const u=bR();return a=a||(u?ln(u0,null):null),a&&Bu(a),a=c0,a._s.has(r)||(i?d0(r,e,s,a):GU(r,s,a)),a._s.get(r)}return o.$id=r,o}const f0=QU("user",()=>{const t=fe(null),e=ke(()=>{var s;return((s=t.value)==null?void 0:s.role)==="admin"});return{user:t,isAdmin:e,login:(s,i)=>{t.value={email:s,role:i}},logout:()=>{t.value=null}}}),YU={class:"flex items-center justify-center min-h-screen"},JU={class:"grid gap-4"},XU={class:"grid gap-2"},ZU={class:"grid gap-2"},e4={class:"flex items-center"},t4={key:0,class:"text-red-500"},n4={class:"mt-4 text-center text-sm"},r4={__name:"Login",setup(t){const e=fe(""),n=fe(""),r=l0(),s=du(),i=f0(),o=()=>e.value?n.value?!0:(formError.value="Please enter your password",!1):(formError.value="Please enter your email",!1),a=async()=>{console.log("Login function called");try{const u=(await _N(r,e.value,n.value)).user;console.log("User logged in:",u);const h=u.email==="admin@example.com"?"admin":"user";i.login(u.email,h),alert("Login successful"),h==="admin"?(console.log("Admin logged in"),s.push("/admin")):(console.log("User logged in"),s.push("/home"))}catch(l){console.error("Login failed:",l),alert("Login failed: "+(l instanceof Error?l.message:l))}};return(l,u)=>{const h=mE("router-link");return ie(),Re("div",YU,[z(N(Ys),{class:"mx-auto max-w-sm"},{default:J(()=>[$("form",{onSubmit:cu(a,["prevent"])},[z(N(Js),null,{default:J(()=>[z(N(Zi),{class:"text-2xl"},{default:J(()=>u[2]||(u[2]=[Ae(" Login ")])),_:1}),z(N(Xs),null,{default:J(()=>u[3]||(u[3]=[Ae(" Enter your email below to login to your account ")])),_:1})]),_:1}),z(N(Zs),null,{default:J(()=>[$("div",JU,[$("div",XU,[z(N(es),{for:"email"},{default:J(()=>u[4]||(u[4]=[Ae("Email")])),_:1}),z(N(Zr),{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=d=>e.value=d),id:"email",type:"email",placeholder:"m@example.com"},null,8,["modelValue"])]),$("div",ZU,[$("div",e4,[z(N(es),{for:"password"},{default:J(()=>u[5]||(u[5]=[Ae("Password")])),_:1}),u[6]||(u[6]=$("a",{href:"#",class:"ml-auto inline-block text-sm underline"}," Forgot your password? ",-1))]),z(N(Zr),{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=d=>n.value=d),id:"password",type:"password"},null,8,["modelValue"])]),l.formError?(ie(),Re("span",t4,ft(l.formError),1)):Dn("",!0),z(N(vr),{onClick:o,type:"submit",class:"w-full"},{default:J(()=>u[7]||(u[7]=[Ae(" Login ")])),_:1}),z(N(vr),{variant:"outline",class:"w-full"},{default:J(()=>u[8]||(u[8]=[Ae(" Login with Google ")])),_:1})]),$("div",n4,[u[10]||(u[10]=Ae(" Don't have an account? ")),z(h,{to:"/register",class:"text-blue-500"},{default:J(()=>u[9]||(u[9]=[Ae(" Sign up ")])),_:1})])]),_:1})],32)]),_:1})])}}},p0=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},s4={class:"min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4"},i4={class:"w-full max-w-4xl flex-grow"},o4={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},a4={class:"p-6"},l4={class:"text-xl font-semibold mb-2"},c4={class:"text-gray-600"},u4={__name:"LandingPage",setup(t){const e=fe([{title:"Feature 1",description:"Boost your productivity with our cutting-edge tools."},{title:"Feature 2",description:"Seamless integration with your favorite apps."},{title:"Feature 3",description:"Advanced analytics to help you make informed decisions."}]),n=du(),r=()=>{n.push("/login")};return(s,i)=>(ie(),Re("div",s4,[i[0]||(i[0]=$("header",{class:"text-center mb-12"},[$("h1",{class:"text-4xl font-bold mb-4"},"testing"),$("p",{class:"text-xl text-gray-600"},"description")],-1)),$("main",i4,[$("div",o4,[(ie(!0),Re(Et,null,Bi(e.value,o=>(ie(),Re("div",{key:o.title,class:"bg-white rounded-lg shadow-md overflow-hidden"},[$("div",a4,[$("h2",l4,ft(o.title),1),$("p",c4,ft(o.description),1)])]))),128))])]),$("div",{class:"mt-12"},[$("button",{onClick:r,class:"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Get Started ")]),i[1]||(i[1]=$("div",{class:"mt-12 w-1/2 h-96"},[$("iframe",{src:"https://my.spline.design/molang3dcopy-814207687a6ccaf52c8702949295a5a0/",frameborder:"0",width:"100%",height:"100%"})],-1)),i[2]||(i[2]=$("footer",{class:"mt-16 text-center text-gray-500"},[$("p",null,"© 2024 Your Company Name. All rights reserved.")],-1))]))}},h4=p0(u4,[["__scopeId","data-v-93775950"]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:i,class:o,...a},{slots:l})=>Ir("svg",{...$l,width:t||$l.width,height:t||$l.height,stroke:r||$l.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${d4(i??"icon")}`],...a},[...s.map(u=>Ir(...u)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=(t,e)=>(n,{slots:r})=>Ir(f4,{...n,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=fn("BellIcon",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=fn("ChartLineIcon",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=fn("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=fn("EllipsisVerticalIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=fn("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=fn("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=fn("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=fn("Package2Icon",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=fn("PackageIcon",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=fn("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=fn("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=fn("ShoppingCartIcon",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=fn("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=fn("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fv=Ue({__name:"Badge",props:{variant:{},class:{}},setup(t){const e=t;return(n,r)=>(ie(),Re("div",{class:dn(N(or)(N(R4)({variant:n.variant}),e.class))},[Ze(n.$slots,"default")],2))}}),R4=Lf("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}}),S4=Ue({__name:"Sheet",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(t,{emit:e}){const s=ow(t,e);return(i,o)=>(ie(),Ye(N(hP),_f(au(N(s))),{default:J(()=>[Ze(i.$slots,"default")]),_:3},16))}}),C4=Ue({__name:"SheetTrigger",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t;return(n,r)=>(ie(),Ye(N(dP),_f(au(e)),{default:J(()=>[Ze(n.$slots,"default")]),_:3},16))}}),P4=Ue({inheritAttrs:!1,__name:"SheetContent",props:{class:{},side:{},forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=ke(()=>{const{class:o,side:a,...l}=n;return l}),i=ow(s,r);return(o,a)=>(ie(),Ye(N(pP),null,{default:J(()=>[z(N(OP),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),z(N(xP),vn({class:N(or)(N(k4)({side:o.side}),n.class)},{...N(i),...o.$attrs}),{default:J(()=>[Ze(o.$slots,"default"),z(N(DP),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"},{default:J(()=>[z(N(A4),{class:"w-4 h-4 text-muted-foreground"})]),_:1})]),_:3},16,["class"])]),_:3}))}}),k4=Lf("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),x4={class:"flex h-screen"},N4={class:"w-64 bg-gray-100 hidden md:block"},O4={class:"flex h-full max-h-screen flex-col gap-2"},D4={class:"flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6"},M4={href:"/",class:"flex items-center gap-2 font-semibold"},L4={class:"flex-1"},V4={class:"grid items-start px-2 text-sm font-medium lg:px-4"},F4=["href","onClick"],U4={class:"mt-auto p-4"},B4={class:"grid gap-2 text-lg font-medium"},$4={href:"#",class:"flex items-center gap-2 text-lg font-semibold"},j4=["href"],W4={class:"mt-auto"},Zp={__name:"SideNavigation",setup(t){const e=du(),n=f0(),r=[{name:"Dashboard",icon:_4,href:"/"},{name:"Orders",icon:T4,href:"#",badge:"6"},{name:"Products",icon:E4,href:"#",active:!0},{name:"Customers",icon:I4,href:"#"},{name:"Analytics",icon:m4,href:"#"},{name:"Logout",icon:y4,href:"#",action:"logout"}],s=async()=>{try{await vN(OU),console.log("User signed out"),n.logout(),e.push("/login")}catch(i){console.error("Error signing out: ",i)}};return Fk(),(i,o)=>(ie(),Re("div",x4,[$("div",N4,[$("div",O4,[$("div",D4,[$("a",M4,[z(N(dv),{class:"h-6 w-6"}),o[0]||(o[0]=$("span",{class:""},"CapsuleLogs",-1))]),z(N(vr),{variant:"outline",size:"icon",class:"ml-auto h-8 w-8"},{default:J(()=>[z(N(p4),{class:"h-4 w-4"}),o[1]||(o[1]=$("span",{class:"sr-only"},"Toggle notifications",-1))]),_:1})]),$("div",L4,[$("nav",V4,[(ie(),Re(Et,null,Bi(r,a=>$("a",{key:a.name,href:a.href,class:dn(["flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",a.active?"bg-muted text-primary":"text-muted-foreground"]),onClick:cu(l=>a.action==="logout"?s():null,["prevent"])},[(ie(),Ye(sg(a.icon),{class:"h-4 w-4"})),Ae(" "+ft(a.name)+" ",1),a.badge?(ie(),Ye(N(fv),{key:0,class:"ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"},{default:J(()=>[Ae(ft(a.badge),1)]),_:2},1024)):Dn("",!0)],10,F4)),64))])]),$("div",U4,[z(N(Ys),null,{default:J(()=>[z(N(Js),{class:"p-2 pt-0 md:p-4"},{default:J(()=>[z(N(Zi),null,{default:J(()=>o[2]||(o[2]=[Ae("Upgrade to Pro")])),_:1}),z(N(Xs),null,{default:J(()=>o[3]||(o[3]=[Ae(" Unlock all features and get unlimited access to our support team. ")])),_:1})]),_:1}),z(N(Zs),{class:"p-2 pt-0 md:p-4 md:pt-0"},{default:J(()=>[z(N(vr),{size:"sm",class:"w-full"},{default:J(()=>o[4]||(o[4]=[Ae(" Upgrade ")])),_:1})]),_:1})]),_:1})])])]),z(N(S4),null,{default:J(()=>[z(N(C4),{"as-child":""},{default:J(()=>[z(N(vr),{variant:"outline",size:"icon",class:"shrink-0 md:hidden"},{default:J(()=>[z(N(v4),{class:"h-5 w-5"}),o[5]||(o[5]=$("span",{class:"sr-only"},"Toggle navigation menu",-1))]),_:1})]),_:1}),z(N(P4),{side:"left",class:"flex flex-col"},{default:J(()=>[$("nav",B4,[$("a",$4,[z(N(dv),{class:"h-6 w-6"}),o[6]||(o[6]=$("span",{class:"sr-only"},"Acme Inc",-1))]),(ie(),Re(Et,null,Bi(r,a=>$("a",{key:a.name,href:a.href,class:dn(["mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground",a.active?"bg-muted text-foreground":"text-muted-foreground"])},[(ie(),Ye(sg(a.icon),{class:"h-5 w-5"})),Ae(" "+ft(a.name)+" ",1),a.badge?(ie(),Ye(N(fv),{key:0,class:"ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"},{default:J(()=>[Ae(ft(a.badge),1)]),_:2},1024)):Dn("",!0)],10,j4)),64))]),$("div",W4,[z(N(Ys),null,{default:J(()=>[z(N(Js),null,{default:J(()=>[z(N(Zi),null,{default:J(()=>o[7]||(o[7]=[Ae("Upgrade to Pro")])),_:1}),z(N(Xs),null,{default:J(()=>o[8]||(o[8]=[Ae(" Unlock all features and get unlimited access to our support team. ")])),_:1})]),_:1}),z(N(Zs),null,{default:J(()=>[z(N(vr),{size:"sm",class:"w-full"},{default:J(()=>o[9]||(o[9]=[Ae(" Upgrade ")])),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]))}},q4={class:"flex h-screen"},H4={__name:"HomePage",setup(t){return(e,n)=>(ie(),Re("div",q4,[z(Zp),n[0]||(n[0]=$("div",{class:"flex-1 bg-white p-4"},[$("h1",null,"main content")],-1))]))}},z4=p0(H4,[["__scopeId","data-v-20a9adb3"]]),K4="/FIT5032-weekly-deploy/assets/Logo-google-icon-PNG-BunlQUFk.png",G4={class:"flex h-screen"},Q4={class:"flex-1 bg-white p-4"},Y4={class:"flex items-center mb-4"},J4={class:"relative flex-grow"},X4={class:"ml-2 p-2 text-gray-400 hover:text-gray-200 focus:outline-none"},Z4={class:"ml-2 p-2 text-gray-400 hover:text-gray-200 focus:outline-none"},eB={class:"overflow-x-auto"},tB={class:"w-full"},nB={class:"text-left text-gray-400 border-b border-gray-700"},rB={class:"pb-2 font-semibold"},sB={class:"py-3"},iB={class:"py-3"},oB={key:0,src:K4,alt:"Google",class:"w-5 h-5 inline"},aB={class:"py-3"},lB={class:"py-3"},cB={class:"py-3"},uB={class:"mt-4 flex justify-between items-center text-gray-400"},hB={class:"flex items-center"},dB={class:"ml-2 p-1 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"},fB={class:"ml-2 p-1 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"},pB={__name:"AdminPage",setup(t){const e=fe([{identifier:"tsehaosu@gmail.com",providers:["google.com"],created:"Sep 11, 2024",signedIn:"Sep 11, 2024",uid:"qfYuP1rCPUa56R6emvg53dM..."},{identifier:"eastinsu55@gmail.com",providers:["google.com"],created:"Sep 11, 2024",signedIn:"Sep 11, 2024",uid:"IG7CfbNaXeSt2uDE1SCoWp4..."}]),n=fe(""),r=fe(50),s=ke(()=>e.value.filter(o=>o.identifier.toLowerCase().includes(n.value.toLowerCase())||o.uid.toLowerCase().includes(n.value.toLowerCase()))),i=()=>{console.log("Add user clicked")};return(o,a)=>(ie(),Re("div",G4,[z(Zp),$("div",Q4,[z(N(Ys),{class:"w-full max-w-4xl"},{default:J(()=>[z(N(Js),null,{default:J(()=>[z(N(Zi),{class:"text-2xl"},{default:J(()=>a[2]||(a[2]=[Ae("User Management")])),_:1}),z(N(Xs),null,{default:J(()=>a[3]||(a[3]=[Ae(" Search, view, and manage user accounts ")])),_:1})]),_:1}),z(N(Zs),null,{default:J(()=>[$("div",Y4,[$("div",J4,[z(N(b4),{class:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),cc($("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),type:"text",placeholder:"Search by email address, phone number, or user UID",class:"w-full pl-10 pr-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[Df,n.value]])]),$("button",{onClick:i,class:"ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"}," Add user "),$("button",X4,[z(N(w4),{class:"h-4 w-4"})]),$("button",Z4,[z(N(g4),{class:"h-4 w-4"})])]),$("div",eB,[$("table",tB,[$("thead",null,[$("tr",nB,[a[5]||(a[5]=$("th",{class:"pb-2 font-semibold"},"Identifier",-1)),a[6]||(a[6]=$("th",{class:"pb-2 font-semibold"},"Providers",-1)),$("th",rB,[a[4]||(a[4]=Ae(" Created ")),z(N(Hh),{class:"inline ml-1"})]),a[7]||(a[7]=$("th",{class:"pb-2 font-semibold"},"Signed In",-1)),a[8]||(a[8]=$("th",{class:"pb-2 font-semibold"},"User UID",-1))])]),$("tbody",null,[(ie(!0),Re(Et,null,Bi(s.value,l=>(ie(),Re("tr",{key:l.uid,class:"border-b border-gray-800"},[$("td",sB,ft(l.identifier),1),$("td",iB,[(ie(!0),Re(Et,null,Bi(l.providers,u=>(ie(),Re("span",{key:u,class:"mr-2"},[u==="google.com"?(ie(),Re("img",oB)):Dn("",!0)]))),128))]),$("td",aB,ft(l.created),1),$("td",lB,ft(l.signedIn),1),$("td",cB,ft(l.uid),1)]))),128))])])]),$("div",uB,[$("div",hB,[a[10]||(a[10]=$("span",{class:"mr-2"},"Rows per page:",-1)),cc($("select",{"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),id:"rowsPerPage",class:"bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},a[9]||(a[9]=[$("option",null,"50",-1),$("option",null,"100",-1),$("option",null,"200",-1)]),512),[[wS,r.value]])]),$("div",null,[a[11]||(a[11]=Ae(" 1 - 2 of 2 ")),$("button",dB,[z(N(Hh),{class:"h-4 w-4 transform rotate-90"})]),$("button",fB,[z(N(Hh),{class:"h-4 w-4 transform -rotate-90"})])])])]),_:1})]),_:1})])]))}},mB={class:"font-semibold"},gB={__name:"BookList",setup(t){const e=fe([]),n=async()=>{try{const r=xL(Bd(nf,"books"),NL("isbn",">",1e3)),s=await jT(r),i=[];s.forEach(o=>{i.push({id:o.id,...o.data()})}),e.value=i}catch(r){console.error("Error fetching books: ",r)}};return gs(()=>{n()}),(r,s)=>(ie(),Re("div",null,[s[0]||(s[0]=$("h2",{class:"text-xl font-bold mb-4"},"Book List",-1)),$("ul",null,[(ie(!0),Re(Et,null,Bi(e.value,i=>(ie(),Re("li",{key:i.id,class:"mb-2"},[$("span",mB,ft(i.name),1),Ae(" (ISBN: "+ft(i.isbn)+") ",1)]))),128))])]))}},_B={class:"flex items-center justify-center min-h-screen"},yB={class:"grid gap-4"},vB={class:"grid gap-2"},EB={class:"grid gap-2"},wB={key:0,class:"text-red-500"},bB={__name:"AddBook",setup(t){const e=fe(""),n=fe(""),r=fe(""),s=async()=>{try{const o=Number(e.value);if(isNaN(o)){alert("ISBN must be a valid number");return}await BL(Bd(nf,"books"),{isbn:o,name:n.value}),e.value="",n.value="",alert("Book added successfully!")}catch(o){console.error("Error adding book: ",o)}},i=async()=>{try{(await jT(Bd(nf,"books"))).docs.forEach(async a=>{await UL(a.ref)}),books.value=[],alert("Books cleared successfully!")}catch(o){console.error("Error clearing books: ",o)}};return(o,a)=>(ie(),Re("div",_B,[z(N(Ys),{class:"mx-auto max-w-lg"},{default:J(()=>[$("form",{onSubmit:cu(s,["prevent"])},[z(N(Js),null,{default:J(()=>[z(N(Zi),{class:"text-2xl"},{default:J(()=>a[2]||(a[2]=[Ae(" Add Book ")])),_:1}),z(N(Xs),null,{default:J(()=>a[3]||(a[3]=[Ae(" Enter the book details below to add a new book ")])),_:1})]),_:1}),z(N(Zs),null,{default:J(()=>[$("div",yB,[$("div",vB,[z(N(es),{for:"isbn"},{default:J(()=>a[4]||(a[4]=[Ae("ISBN")])),_:1}),z(N(Zr),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),id:"isbn",type:"text",placeholder:"Enter ISBN",required:""},null,8,["modelValue"])]),$("div",EB,[z(N(es),{for:"name"},{default:J(()=>a[5]||(a[5]=[Ae("Book Name")])),_:1}),z(N(Zr),{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),id:"name",type:"text",placeholder:"Enter book name",required:""},null,8,["modelValue"])]),r.value?(ie(),Re("span",wB,ft(r.value),1)):Dn("",!0),z(N(vr),{type:"submit",class:"w-full"},{default:J(()=>a[6]||(a[6]=[Ae(" Add Book ")])),_:1}),z(N(vr),{type:"button",onClick:i,class:"w-full"},{default:J(()=>a[7]||(a[7]=[Ae(" Clear All Books ")])),_:1})])]),_:1})],32),z(N(Ys),{class:"mx-auto max-w-sm mt-2"},{default:J(()=>[z(N(Js),null,{default:J(()=>[z(N(Xs),null,{default:J(()=>a[8]||(a[8]=[Ae(" Books with ISBN > 1000 ")])),_:1})]),_:1}),z(N(Zs),null,{default:J(()=>[z(gB)]),_:1})]),_:1})]),_:1})]))}};function m0(t,e){return function(){return t.apply(e,arguments)}}const{toString:TB}=Object.prototype,{getPrototypeOf:em}=Object,$u=(t=>e=>{const n=TB.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Wn=t=>(t=t.toLowerCase(),e=>$u(e)===t),ju=t=>e=>typeof e===t,{isArray:po}=Array,Da=ju("undefined");function IB(t){return t!==null&&!Da(t)&&t.constructor!==null&&!Da(t.constructor)&&yn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const g0=Wn("ArrayBuffer");function AB(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&g0(t.buffer),e}const RB=ju("string"),yn=ju("function"),_0=ju("number"),Wu=t=>t!==null&&typeof t=="object",SB=t=>t===!0||t===!1,nc=t=>{if($u(t)!=="object")return!1;const e=em(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},CB=Wn("Date"),PB=Wn("File"),kB=Wn("Blob"),xB=Wn("FileList"),NB=t=>Wu(t)&&yn(t.pipe),OB=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||yn(t.append)&&((e=$u(t))==="formdata"||e==="object"&&yn(t.toString)&&t.toString()==="[object FormData]"))},DB=Wn("URLSearchParams"),[MB,LB,VB,FB]=["ReadableStream","Request","Response","Headers"].map(Wn),UB=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function rl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),po(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function y0(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Os=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,v0=t=>!Da(t)&&t!==Os;function of(){const{caseless:t}=v0(this)&&this||{},e={},n=(r,s)=>{const i=t&&y0(e,s)||s;nc(e[i])&&nc(r)?e[i]=of(e[i],r):nc(r)?e[i]=of({},r):po(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&rl(arguments[r],n);return e}const BB=(t,e,n,{allOwnKeys:r}={})=>(rl(e,(s,i)=>{n&&yn(s)?t[i]=m0(s,n):t[i]=s},{allOwnKeys:r}),t),$B=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),jB=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},WB=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&em(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},qB=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},HB=t=>{if(!t)return null;if(po(t))return t;let e=t.length;if(!_0(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},zB=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&em(Uint8Array)),KB=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},GB=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},QB=Wn("HTMLFormElement"),YB=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),pv=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),JB=Wn("RegExp"),E0=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};rl(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},XB=t=>{E0(t,(e,n)=>{if(yn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(yn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ZB=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return po(t)?r(t):r(String(t).split(e)),n},e$=()=>{},t$=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,zh="abcdefghijklmnopqrstuvwxyz",mv="0123456789",w0={DIGIT:mv,ALPHA:zh,ALPHA_DIGIT:zh+zh.toUpperCase()+mv},n$=(t=16,e=w0.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function r$(t){return!!(t&&yn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const s$=t=>{const e=new Array(10),n=(r,s)=>{if(Wu(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=po(r)?[]:{};return rl(r,(o,a)=>{const l=n(o,s+1);!Da(l)&&(i[a]=l)}),e[s]=void 0,i}}return r};return n(t,0)},i$=Wn("AsyncFunction"),o$=t=>t&&(Wu(t)||yn(t))&&yn(t.then)&&yn(t.catch),b0=((t,e)=>t?setImmediate:e?((n,r)=>(Os.addEventListener("message",({source:s,data:i})=>{s===Os&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Os.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",yn(Os.postMessage)),a$=typeof queueMicrotask<"u"?queueMicrotask.bind(Os):typeof process<"u"&&process.nextTick||b0,F={isArray:po,isArrayBuffer:g0,isBuffer:IB,isFormData:OB,isArrayBufferView:AB,isString:RB,isNumber:_0,isBoolean:SB,isObject:Wu,isPlainObject:nc,isReadableStream:MB,isRequest:LB,isResponse:VB,isHeaders:FB,isUndefined:Da,isDate:CB,isFile:PB,isBlob:kB,isRegExp:JB,isFunction:yn,isStream:NB,isURLSearchParams:DB,isTypedArray:zB,isFileList:xB,forEach:rl,merge:of,extend:BB,trim:UB,stripBOM:$B,inherits:jB,toFlatObject:WB,kindOf:$u,kindOfTest:Wn,endsWith:qB,toArray:HB,forEachEntry:KB,matchAll:GB,isHTMLForm:QB,hasOwnProperty:pv,hasOwnProp:pv,reduceDescriptors:E0,freezeMethods:XB,toObjectSet:ZB,toCamelCase:YB,noop:e$,toFiniteNumber:t$,findKey:y0,global:Os,isContextDefined:v0,ALPHABET:w0,generateString:n$,isSpecCompliantForm:r$,toJSONObject:s$,isAsyncFn:i$,isThenable:o$,setImmediate:b0,asap:a$};function be(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}F.inherits(be,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.status}}});const T0=be.prototype,I0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{I0[t]={value:t}});Object.defineProperties(be,I0);Object.defineProperty(T0,"isAxiosError",{value:!0});be.from=(t,e,n,r,s,i)=>{const o=Object.create(T0);return F.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),be.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const l$=null;function af(t){return F.isPlainObject(t)||F.isArray(t)}function A0(t){return F.endsWith(t,"[]")?t.slice(0,-2):t}function gv(t,e,n){return t?t.concat(e).map(function(s,i){return s=A0(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function c$(t){return F.isArray(t)&&!t.some(af)}const u$=F.toFlatObject(F,{},null,function(e){return/^is[A-Z]/.test(e)});function qu(t,e,n){if(!F.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,I){return!F.isUndefined(I[w])});const r=n.metaTokens,s=n.visitor||h,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(e);if(!F.isFunction(s))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if(F.isDate(_))return _.toISOString();if(!l&&F.isBlob(_))throw new be("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(_)||F.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function h(_,w,I){let x=_;if(_&&!I&&typeof _=="object"){if(F.endsWith(w,"{}"))w=r?w:w.slice(0,-2),_=JSON.stringify(_);else if(F.isArray(_)&&c$(_)||(F.isFileList(_)||F.endsWith(w,"[]"))&&(x=F.toArray(_)))return w=A0(w),x.forEach(function(O,L){!(F.isUndefined(O)||O===null)&&e.append(o===!0?gv([w],L,i):o===null?w:w+"[]",u(O))}),!1}return af(_)?!0:(e.append(gv(I,w,i),u(_)),!1)}const d=[],p=Object.assign(u$,{defaultVisitor:h,convertValue:u,isVisitable:af});function g(_,w){if(!F.isUndefined(_)){if(d.indexOf(_)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(_),F.forEach(_,function(x,M){(!(F.isUndefined(x)||x===null)&&s.call(e,x,F.isString(M)?M.trim():M,w,p))===!0&&g(x,w?w.concat(M):[M])}),d.pop()}}if(!F.isObject(t))throw new TypeError("data must be an object");return g(t),e}function _v(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function tm(t,e){this._pairs=[],t&&qu(t,this,e)}const R0=tm.prototype;R0.append=function(e,n){this._pairs.push([e,n])};R0.toString=function(e){const n=e?function(r){return e.call(this,r,_v)}:_v;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function h$(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function S0(t,e,n){if(!e)return t;const r=n&&n.encode||h$,s=n&&n.serialize;let i;if(s?i=s(e,n):i=F.isURLSearchParams(e)?e.toString():new tm(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class yv{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){F.forEach(this.handlers,function(r){r!==null&&e(r)})}}const C0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},d$=typeof URLSearchParams<"u"?URLSearchParams:tm,f$=typeof FormData<"u"?FormData:null,p$=typeof Blob<"u"?Blob:null,m$={isBrowser:!0,classes:{URLSearchParams:d$,FormData:f$,Blob:p$},protocols:["http","https","file","blob","url","data"]},nm=typeof window<"u"&&typeof document<"u",lf=typeof navigator=="object"&&navigator||void 0,g$=nm&&(!lf||["ReactNative","NativeScript","NS"].indexOf(lf.product)<0),_$=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",y$=nm&&window.location.href||"http://localhost",v$=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:nm,hasStandardBrowserEnv:g$,hasStandardBrowserWebWorkerEnv:_$,navigator:lf,origin:y$},Symbol.toStringTag,{value:"Module"})),cn={...v$,...m$};function E$(t,e){return qu(t,new cn.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return cn.isNode&&F.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function w$(t){return F.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function b$(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function P0(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&F.isArray(s)?s.length:o,l?(F.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!F.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&F.isArray(s[o])&&(s[o]=b$(s[o])),!a)}if(F.isFormData(t)&&F.isFunction(t.entries)){const n={};return F.forEachEntry(t,(r,s)=>{e(w$(r),s,n,0)}),n}return null}function T$(t,e,n){if(F.isString(t))try{return(e||JSON.parse)(t),F.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const sl={transitional:C0,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=F.isObject(e);if(i&&F.isHTMLForm(e)&&(e=new FormData(e)),F.isFormData(e))return s?JSON.stringify(P0(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e)||F.isReadableStream(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return E$(e,this.formSerializer).toString();if((a=F.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return qu(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),T$(e)):e}],transformResponse:[function(e){const n=this.transitional||sl.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(F.isResponse(e)||F.isReadableStream(e))return e;if(e&&F.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?be.from(a,be.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:cn.classes.FormData,Blob:cn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],t=>{sl.headers[t]={}});const I$=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A$=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&I$[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},vv=Symbol("internals");function Fo(t){return t&&String(t).trim().toLowerCase()}function rc(t){return t===!1||t==null?t:F.isArray(t)?t.map(rc):String(t)}function R$(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const S$=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Kh(t,e,n,r,s){if(F.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!F.isString(e)){if(F.isString(r))return e.indexOf(r)!==-1;if(F.isRegExp(r))return r.test(e)}}function C$(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function P$(t,e){const n=F.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class un{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,l,u){const h=Fo(l);if(!h)throw new Error("header name must be a non-empty string");const d=F.findKey(s,h);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||l]=rc(a))}const o=(a,l)=>F.forEach(a,(u,h)=>i(u,h,l));if(F.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(F.isString(e)&&(e=e.trim())&&!S$(e))o(A$(e),n);else if(F.isHeaders(e))for(const[a,l]of e.entries())i(l,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Fo(e),e){const r=F.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return R$(s);if(F.isFunction(n))return n.call(this,s,r);if(F.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Fo(e),e){const r=F.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Kh(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Fo(o),o){const a=F.findKey(r,o);a&&(!n||Kh(r,r[a],a,n))&&(delete r[a],s=!0)}}return F.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Kh(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return F.forEach(this,(s,i)=>{const o=F.findKey(r,i);if(o){n[o]=rc(s),delete n[i];return}const a=e?C$(i):String(i).trim();a!==i&&delete n[i],n[a]=rc(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return F.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&F.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[vv]=this[vv]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Fo(o);r[a]||(P$(s,o),r[a]=!0)}return F.isArray(e)?e.forEach(i):i(e),this}}un.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(un.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});F.freezeMethods(un);function Gh(t,e){const n=this||sl,r=e||n,s=un.from(r.headers);let i=r.data;return F.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function k0(t){return!!(t&&t.__CANCEL__)}function mo(t,e,n){be.call(this,t??"canceled",be.ERR_CANCELED,e,n),this.name="CanceledError"}F.inherits(mo,be,{__CANCEL__:!0});function x0(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new be("Request failed with status code "+n.status,[be.ERR_BAD_REQUEST,be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function k$(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function x$(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),h=r[i];o||(o=u),n[s]=l,r[s]=u;let d=i,p=0;for(;d!==s;)p+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const g=h&&u-h;return g?Math.round(p*1e3/g):void 0}}function N$(t,e){let n=0,r=1e3/e,s,i;const o=(u,h=Date.now())=>{n=h,s=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const h=Date.now(),d=h-n;d>=r?o(u,h):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-d)))},()=>s&&o(s)]}const qc=(t,e,n=3)=>{let r=0;const s=x$(50,250);return N$(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-r,u=s(l),h=o<=a;r=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&h?(a-o)/u:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},Ev=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},wv=t=>(...e)=>F.asap(()=>t(...e)),O$=cn.hasStandardBrowserEnv?function(){const e=cn.navigator&&/(msie|trident)/i.test(cn.navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=F.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),D$=cn.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];F.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),F.isString(r)&&o.push("path="+r),F.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function M$(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function L$(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function N0(t,e){return t&&!M$(e)?L$(t,e):e}const bv=t=>t instanceof un?{...t}:t;function ei(t,e){e=e||{};const n={};function r(u,h,d){return F.isPlainObject(u)&&F.isPlainObject(h)?F.merge.call({caseless:d},u,h):F.isPlainObject(h)?F.merge({},h):F.isArray(h)?h.slice():h}function s(u,h,d){if(F.isUndefined(h)){if(!F.isUndefined(u))return r(void 0,u,d)}else return r(u,h,d)}function i(u,h){if(!F.isUndefined(h))return r(void 0,h)}function o(u,h){if(F.isUndefined(h)){if(!F.isUndefined(u))return r(void 0,u)}else return r(void 0,h)}function a(u,h,d){if(d in e)return r(u,h);if(d in t)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,h)=>s(bv(u),bv(h),!0)};return F.forEach(Object.keys(Object.assign({},t,e)),function(h){const d=l[h]||s,p=d(t[h],e[h],h);F.isUndefined(p)&&d!==a||(n[h]=p)}),n}const O0=t=>{const e=ei({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=un.from(o),e.url=S0(N0(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(F.isFormData(n)){if(cn.hasStandardBrowserEnv||cn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...h]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}if(cn.hasStandardBrowserEnv&&(r&&F.isFunction(r)&&(r=r(e)),r||r!==!1&&O$(e.url))){const u=s&&i&&D$.read(i);u&&o.set(s,u)}return e},V$=typeof XMLHttpRequest<"u",F$=V$&&function(t){return new Promise(function(n,r){const s=O0(t);let i=s.data;const o=un.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=s,h,d,p,g,_;function w(){g&&g(),_&&_(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let I=new XMLHttpRequest;I.open(s.method.toUpperCase(),s.url,!0),I.timeout=s.timeout;function x(){if(!I)return;const O=un.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),q={data:!a||a==="text"||a==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:O,config:t,request:I};x0(function(S){n(S),w()},function(S){r(S),w()},q),I=null}"onloadend"in I?I.onloadend=x:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.indexOf("file:")===0)||setTimeout(x)},I.onabort=function(){I&&(r(new be("Request aborted",be.ECONNABORTED,t,I)),I=null)},I.onerror=function(){r(new be("Network Error",be.ERR_NETWORK,t,I)),I=null},I.ontimeout=function(){let L=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const q=s.transitional||C0;s.timeoutErrorMessage&&(L=s.timeoutErrorMessage),r(new be(L,q.clarifyTimeoutError?be.ETIMEDOUT:be.ECONNABORTED,t,I)),I=null},i===void 0&&o.setContentType(null),"setRequestHeader"in I&&F.forEach(o.toJSON(),function(L,q){I.setRequestHeader(q,L)}),F.isUndefined(s.withCredentials)||(I.withCredentials=!!s.withCredentials),a&&a!=="json"&&(I.responseType=s.responseType),u&&([p,_]=qc(u,!0),I.addEventListener("progress",p)),l&&I.upload&&([d,g]=qc(l),I.upload.addEventListener("progress",d),I.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(h=O=>{I&&(r(!O||O.type?new mo(null,t,I):O),I.abort(),I=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const M=k$(s.url);if(M&&cn.protocols.indexOf(M)===-1){r(new be("Unsupported protocol "+M+":",be.ERR_BAD_REQUEST,t));return}I.send(i||null)})},U$=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,a();const h=u instanceof Error?u:this.reason;r.abort(h instanceof be?h:new mo(h instanceof Error?h.message:h))}};let o=e&&setTimeout(()=>{o=null,i(new be(`timeout ${e} of ms exceeded`,be.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>F.asap(a),l}},B$=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},$$=async function*(t,e){for await(const n of j$(t))yield*B$(n,e)},j$=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Tv=(t,e,n,r)=>{const s=$$(t,e);let i=0,o,a=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:h}=await s.next();if(u){a(),l.close();return}let d=h.byteLength;if(n){let p=i+=d;n(p)}l.enqueue(new Uint8Array(h))}catch(u){throw a(u),u}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Hu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",D0=Hu&&typeof ReadableStream=="function",W$=Hu&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),M0=(t,...e)=>{try{return!!t(...e)}catch{return!1}},q$=D0&&M0(()=>{let t=!1;const e=new Request(cn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Iv=64*1024,cf=D0&&M0(()=>F.isReadableStream(new Response("").body)),Hc={stream:cf&&(t=>t.body)};Hu&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Hc[e]&&(Hc[e]=F.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new be(`Response type '${e}' is not supported`,be.ERR_NOT_SUPPORT,r)})})})(new Response);const H$=async t=>{if(t==null)return 0;if(F.isBlob(t))return t.size;if(F.isSpecCompliantForm(t))return(await new Request(cn.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(F.isArrayBufferView(t)||F.isArrayBuffer(t))return t.byteLength;if(F.isURLSearchParams(t)&&(t=t+""),F.isString(t))return(await W$(t)).byteLength},z$=async(t,e)=>{const n=F.toFiniteNumber(t.getContentLength());return n??H$(e)},K$=Hu&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:h,withCredentials:d="same-origin",fetchOptions:p}=O0(t);u=u?(u+"").toLowerCase():"text";let g=U$([s,i&&i.toAbortSignal()],o),_;const w=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let I;try{if(l&&q$&&n!=="get"&&n!=="head"&&(I=await z$(h,r))!==0){let q=new Request(e,{method:"POST",body:r,duplex:"half"}),Z;if(F.isFormData(r)&&(Z=q.headers.get("content-type"))&&h.setContentType(Z),q.body){const[S,v]=Ev(I,qc(wv(l)));r=Tv(q.body,Iv,S,v)}}F.isString(d)||(d=d?"include":"omit");const x="credentials"in Request.prototype;_=new Request(e,{...p,signal:g,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:r,duplex:"half",credentials:x?d:void 0});let M=await fetch(_);const O=cf&&(u==="stream"||u==="response");if(cf&&(a||O&&w)){const q={};["status","statusText","headers"].forEach(E=>{q[E]=M[E]});const Z=F.toFiniteNumber(M.headers.get("content-length")),[S,v]=a&&Ev(Z,qc(wv(a),!0))||[];M=new Response(Tv(M.body,Iv,S,()=>{v&&v(),w&&w()}),q)}u=u||"text";let L=await Hc[F.findKey(Hc,u)||"text"](M,t);return!O&&w&&w(),await new Promise((q,Z)=>{x0(q,Z,{data:L,headers:un.from(M.headers),status:M.status,statusText:M.statusText,config:t,request:_})})}catch(x){throw w&&w(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new be("Network Error",be.ERR_NETWORK,t,_),{cause:x.cause||x}):be.from(x,x&&x.code,t,_)}}),uf={http:l$,xhr:F$,fetch:K$};F.forEach(uf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Av=t=>`- ${t}`,G$=t=>F.isFunction(t)||t===null||t===!1,L0={getAdapter:t=>{t=F.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!G$(n)&&(r=uf[(o=String(n)).toLowerCase()],r===void 0))throw new be(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Av).join(`
`):" "+Av(i[0]):"as no adapter specified";throw new be("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:uf};function Qh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new mo(null,t)}function Rv(t){return Qh(t),t.headers=un.from(t.headers),t.data=Gh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),L0.getAdapter(t.adapter||sl.adapter)(t).then(function(r){return Qh(t),r.data=Gh.call(t,t.transformResponse,r),r.headers=un.from(r.headers),r},function(r){return k0(r)||(Qh(t),r&&r.response&&(r.response.data=Gh.call(t,t.transformResponse,r.response),r.response.headers=un.from(r.response.headers))),Promise.reject(r)})}const V0="1.7.7",rm={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{rm[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Sv={};rm.transitional=function(e,n,r){function s(i,o){return"[Axios v"+V0+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new be(s(o," has been removed"+(n?" in "+n:"")),be.ERR_DEPRECATED);return n&&!Sv[o]&&(Sv[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Q$(t,e,n){if(typeof t!="object")throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new be("option "+i+" must be "+l,be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new be("Unknown option "+i,be.ERR_BAD_OPTION)}}const hf={assertOptions:Q$,validators:rm},Wr=hf.validators;class Vs{constructor(e){this.defaults=e,this.interceptors={request:new yv,response:new yv}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ei(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&hf.assertOptions(r,{silentJSONParsing:Wr.transitional(Wr.boolean),forcedJSONParsing:Wr.transitional(Wr.boolean),clarifyTimeoutError:Wr.transitional(Wr.boolean)},!1),s!=null&&(F.isFunction(s)?n.paramsSerializer={serialize:s}:hf.assertOptions(s,{encode:Wr.function,serialize:Wr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&F.merge(i.common,i[n.method]);i&&F.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=un.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let h,d=0,p;if(!l){const _=[Rv.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,u),p=_.length,h=Promise.resolve(n);d<p;)h=h.then(_[d++],_[d++]);return h}p=a.length;let g=n;for(d=0;d<p;){const _=a[d++],w=a[d++];try{g=_(g)}catch(I){w.call(this,I);break}}try{h=Rv.call(this,g)}catch(_){return Promise.reject(_)}for(d=0,p=u.length;d<p;)h=h.then(u[d++],u[d++]);return h}getUri(e){e=ei(this.defaults,e);const n=N0(e.baseURL,e.url);return S0(n,e.params,e.paramsSerializer)}}F.forEach(["delete","get","head","options"],function(e){Vs.prototype[e]=function(n,r){return this.request(ei(r||{},{method:e,url:n,data:(r||{}).data}))}});F.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(ei(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Vs.prototype[e]=n(),Vs.prototype[e+"Form"]=n(!0)});class sm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new mo(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new sm(function(s){e=s}),cancel:e}}}function Y$(t){return function(n){return t.apply(null,n)}}function J$(t){return F.isObject(t)&&t.isAxiosError===!0}const df={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(df).forEach(([t,e])=>{df[e]=t});function F0(t){const e=new Vs(t),n=m0(Vs.prototype.request,e);return F.extend(n,Vs.prototype,e,{allOwnKeys:!0}),F.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return F0(ei(t,s))},n}const mt=F0(sl);mt.Axios=Vs;mt.CanceledError=mo;mt.CancelToken=sm;mt.isCancel=k0;mt.VERSION=V0;mt.toFormData=qu;mt.AxiosError=be;mt.Cancel=mt.CanceledError;mt.all=function(e){return Promise.all(e)};mt.spread=Y$;mt.isAxiosError=J$;mt.mergeConfig=ei;mt.AxiosHeaders=un;mt.formToJSON=t=>P0(F.isHTMLForm(t)?new FormData(t):t);mt.getAdapter=L0.getAdapter;mt.HttpStatusCode=df;mt.default=mt;const X$={class:"min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4"},Z$={class:"w-full max-w-4xl flex-grow flex flex-col items-center"},ej={key:0,class:"text-2xl font-semibold"},tj={key:1,class:"text-2xl font-semibold text-red-600"},nj={__name:"GetBookCountView",setup(t){const e=fe(null),n=fe(null),r=async()=>{try{const s=await mt.get("https://countbooks-p3qn6us7xq-uc.a.run.app");e.value=s.data.count,n.value=null}catch(s){console.error("Error fetching book count:",n),e.value=null,n.value=`Failed to fetch book count: ${s.message}`}};return(s,i)=>(ie(),Re("div",X$,[i[0]||(i[0]=$("header",{class:"text-center mb-12"},[$("h1",{class:"text-4xl font-bold mb-4"},"Book Counter"),$("p",{class:"text-xl text-gray-600"},"Count your books with ease")],-1)),$("main",Z$,[$("button",{onClick:r,class:"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"}," Get Book Count "),e.value!==null?(ie(),Re("div",ej," Total number of books: "+ft(e.value),1)):n.value?(ie(),Re("div",tj," Error: "+ft(n.value),1)):Dn("",!0)]),i[1]||(i[1]=$("footer",{class:"mt-16 text-center text-gray-500"},[$("p",null,"© 2024 Book Counter App. All rights reserved.")],-1))]))}},rj={class:"min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4"},sj={class:"w-full max-w-4xl flex-grow flex flex-col items-center"},ij={key:0,class:"text-xl"},oj={key:1,class:"text-xl text-red-600"},aj={key:2,class:"mt-8 text-center"},lj={class:"text-2xl font-semibold mb-4"},cj={class:"flex items-center justify-center mb-4"},uj=["src"],hj={key:1,class:"text-4xl font-bold"},dj={class:"text-xl text-gray-700"},Cv="290dc8f3e0a351cdd1155bce8fedf21e",fj={__name:"WeatherView",setup(t){const e=fe(""),n=fe(null),r=fe(!1),s=fe(null),i=ke(()=>n.value&&n.value.main?Math.floor(n.value.main.temp-273.15):null),o=ke(()=>n.value&&n.value.weather&&n.value.weather[0]?`http://openweathermap.org/img/w/${n.value.weather[0].icon}.png`:null),a=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(h=>{const{latitude:d,longitude:p}=h.coords;u(`https://api.openweathermap.org/data/2.5/weather?lat=${d}&lon=${p}&appid=${Cv}`)},h=>{console.error("Geolocation error:",h),s.value="Failed to get your location. Please enter a city name manually."}):s.value="Geolocation is not supported by this browser."},l=()=>{e.value.trim()?u(`https://api.openweathermap.org/data/2.5/weather?q=${e.value}&appid=${Cv}`):s.value="Please enter a city name."},u=async h=>{r.value=!0,s.value=null,n.value=null;try{const d=await mt.get(h);n.value=d.data,console.log("Weather Data:",JSON.stringify(n.value,null,2))}catch(d){console.error("Error fetching weather data:",d),s.value="Failed to fetch weather data. Please try again."}finally{r.value=!1}};return gs(()=>{a()}),(h,d)=>(ie(),Re("div",rj,[d[1]||(d[1]=$("header",{class:"text-center mb-12"},[$("h1",{class:"text-4xl font-bold mb-4"},"Weather Display"),$("p",{class:"text-xl text-gray-600"},"Check the weather with ease")],-1)),$("main",sj,[cc($("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>e.value=p),class:"border border-gray-300 rounded p-2 mb-6",type:"text",placeholder:"Enter city name"},null,512),[[Df,e.value]]),$("button",{onClick:l,class:"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"}," Search for Weather "),r.value?(ie(),Re("div",ij,"Loading...")):s.value?(ie(),Re("div",oj,ft(s.value),1)):n.value?(ie(),Re("div",aj,[$("h2",lj,ft(n.value.name)+ft(n.value.sys.country),1),$("div",cj,[o.value?(ie(),Re("img",{key:0,src:o.value,alt:"Weather Icon",class:"w-16 h-16 mr-4"},null,8,uj)):Dn("",!0),i.value!==null?(ie(),Re("p",hj,ft(i.value)+" °C",1)):Dn("",!0)]),$("span",dj,ft(n.value.weather[0].description),1)])):Dn("",!0)]),d[2]||(d[2]=$("footer",{class:"mt-16 text-center text-gray-500"},[$("p",null,"© 2024 Weather App. All rights reserved.")],-1))]))}};var pj={};const mj=[{path:"/",name:"LandingPage",component:h4},{path:"/login",name:"Login",component:r4},{path:"/register",name:"Register",component:jU},{path:"/home",name:"HomePage",component:z4},{path:"/admin",name:"AdminPage",component:pB},{path:"/sidenav",name:"SideNavigation",component:Zp},{path:"/addbook",name:"AddBook",component:bB},{path:"/getBookCount",name:"GetBookCountView",component:nj},{path:"/weather",name:"WeatherView",component:fj}],gj=CC({history:iC(pj.BASE_URL),routes:mj}),zu=RS(xC),_j=WU();zu.use(gj);zu.use(_j);zu.use(xU,{firebaseApp:Xp,modules:[CU()]});zu.mount("#app");
