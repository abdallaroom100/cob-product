/*!
 * Copyright by Space Squirrel Ltd.
 */
function e(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var t=(()=>typeof Symbol==="function"&&Symbol.observable||"@@observable")();var r=t;var n=()=>Math.random().toString(36).substring(7).split("").join(".");var o={INIT:`@@redux/INIT${n()}`,REPLACE:`@@redux/REPLACE${n()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${n()}`};var i=o;function u(e){if(typeof e!=="object"||e===null)return false;let t=e;while(Object.getPrototypeOf(t)!==null){t=Object.getPrototypeOf(t)}return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function c(t,n,o){if(typeof t!=="function"){throw new Error(e(2))}if(typeof n==="function"&&typeof o==="function"||typeof o==="function"&&typeof arguments[3]==="function"){throw new Error(e(0))}if(typeof n==="function"&&typeof o==="undefined"){o=n;n=void 0}if(typeof o!=="undefined"){if(typeof o!=="function"){throw new Error(e(1))}return o(c)(t,n)}let f=t;let s=n;let a=new Map;let l=a;let d=0;let p=false;function y(){if(l===a){l=new Map;a.forEach(((e,t)=>{l.set(t,e)}))}}function v(){if(p){throw new Error(e(3))}return s}function h(t){if(typeof t!=="function"){throw new Error(e(4))}if(p){throw new Error(e(5))}let r=true;y();const n=d++;l.set(n,t);return function t(){if(!r){return}if(p){throw new Error(e(6))}r=false;y();l.delete(n);a=null}}function w(t){if(!u(t)){throw new Error(e(7))}if(typeof t.type==="undefined"){throw new Error(e(8))}if(typeof t.type!=="string"){throw new Error(e(17))}if(p){throw new Error(e(9))}try{p=true;s=f(s,t)}finally{p=false}const r=a=l;r.forEach((e=>{e()}));return t}function b(t){if(typeof t!=="function"){throw new Error(e(10))}f=t;w({type:i.REPLACE})}function m(){const t=h;return{subscribe(r){if(typeof r!=="object"||r===null){throw new Error(e(11))}function n(){const e=r;if(e.next){e.next(v())}}n();const o=t(n);return{unsubscribe:o}},[r](){return this}}}w({type:i.INIT});const j={dispatch:w,subscribe:h,getState:v,replaceReducer:b,[r]:m};return j}function f(t){Object.keys(t).forEach((r=>{const n=t[r];const o=n(void 0,{type:i.INIT});if(typeof o==="undefined"){throw new Error(e(12))}if(typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()})==="undefined"){throw new Error(e(13))}}))}function s(t){const r=Object.keys(t);const n={};for(let e=0;e<r.length;e++){const o=r[e];if(typeof t[o]==="function"){n[o]=t[o]}}const o=Object.keys(n);let i;try{f(n)}catch(e){i=e}return function t(r={},u){if(i){throw i}let c=false;const f={};for(let t=0;t<o.length;t++){const i=o[t];const s=n[i];const a=r[i];const l=s(a,u);if(typeof l==="undefined"){throw new Error(e(14))}f[i]=l;c=c||l!==a}c=c||o.length!==Object.keys(r).length;return c?f:r}}function a(...e){if(e.length===0){return e=>e}if(e.length===1){return e[0]}return e.reduce(((e,t)=>(...r)=>e(t(...r))))}function l(...t){return r=>(n,o)=>{const i=r(n,o);let u=()=>{throw new Error(e(15))};const c={getState:i.getState,dispatch:(e,...t)=>u(e,...t)};const f=t.map((e=>e(c)));u=a(...f)(i.dispatch);return{...i,dispatch:u}}}function d(e){return u(e)&&"type"in e&&typeof e.type==="string"}var p=Symbol.for("immer-nothing");var y=Symbol.for("immer-draftable");var v=Symbol.for("immer-state");function h(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var w=Object.getPrototypeOf;function b(e){return!!e&&!!e[v]}function m(e){if(!e)return false;return O(e)||Array.isArray(e)||!!e[y]||!!e.constructor?.[y]||I(e)||M(e)}var j=Object.prototype.constructor.toString();function O(e){if(!e||typeof e!=="object")return false;const t=w(e);if(t===null){return true}const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(r===Object)return true;return typeof r=="function"&&Function.toString.call(r)===j}function E(e,t){if(g(e)===0){Object.entries(e).forEach((([r,n])=>{t(r,n,e)}))}else{e.forEach(((r,n)=>t(n,r,e)))}}function g(e){const t=e[v];return t?t.type_:Array.isArray(e)?1:I(e)?2:M(e)?3:0}function P(e,t){return g(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function S(e,t,r){const n=g(e);if(n===2)e.set(t,r);else if(n===3){e.add(r)}else e[t]=r}function k(e,t){if(e===t){return e!==0||1/e===1/t}else{return e!==e&&t!==t}}function I(e){return e instanceof Map}function M(e){return e instanceof Set}function _(e){return e.copy_||e.base_}function T(e,t){if(I(e)){return new Map(e)}if(M(e)){return new Set(e)}if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&O(e)){if(!w(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const r=Object.getOwnPropertyDescriptors(e);delete r[v];let n=Reflect.ownKeys(r);for(let t=0;t<n.length;t++){const o=n[t];const i=r[o];if(i.writable===false){i.writable=true;i.configurable=true}if(i.get||i.set)r[o]={configurable:true,writable:true,enumerable:i.enumerable,value:e[o]}}return Object.create(w(e),r)}function R(e,t=false){if(x(e)||b(e)||!m(e))return e;if(g(e)>1){e.set=e.add=e.clear=e.delete=C}Object.freeze(e);if(t)E(e,((e,t)=>R(t,true)));return e}function C(){h(2)}function x(e){return Object.isFrozen(e)}var $={};function N(e){const t=$[e];if(!t){h(0,e)}return t}var A;function z(){return A}function D(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:true,unfinalizedDrafts_:0}}function W(e,t){if(t){N("Patches");e.patches_=[];e.inversePatches_=[];e.patchListener_=t}}function B(e){F(e);e.drafts_.forEach(L);e.drafts_=null}function F(e){if(e===A){A=e.parent_}}function K(e){return A=D(A,e)}function L(e){const t=e[v];if(t.type_===0||t.type_===1)t.revoke_();else t.revoked_=true}function U(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];const n=e!==void 0&&e!==r;if(n){if(r[v].modified_){B(t);h(4)}if(m(e)){e=q(t,e);if(!t.parent_)X(t,e)}if(t.patches_){N("Patches").generateReplacementPatches_(r[v].base_,e,t.patches_,t.inversePatches_)}}else{e=q(t,r,[])}B(t);if(t.patches_){t.patchListener_(t.patches_,t.inversePatches_)}return e!==p?e:void 0}function q(e,t,r){if(x(t))return t;const n=t[v];if(!n){E(t,((o,i)=>Y(e,n,t,o,i,r)));return t}if(n.scope_!==e)return t;if(!n.modified_){X(e,n.base_,true);return n.base_}if(!n.finalized_){n.finalized_=true;n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t;let i=false;if(n.type_===3){o=new Set(t);t.clear();i=true}E(o,((o,u)=>Y(e,n,t,o,u,r,i)));X(e,t,false);if(r&&e.patches_){N("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}}return n.copy_}function Y(e,t,r,n,o,i,u){if(b(o)){const u=i&&t&&t.type_!==3&&!P(t.assigned_,n)?i.concat(n):void 0;const c=q(e,o,u);S(r,n,c);if(b(c)){e.canAutoFreeze_=false}else return}else if(u){r.add(o)}if(m(o)&&!x(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1){return}q(e,o);if(!t||!t.scope_.parent_)X(e,o)}}function X(e,t,r=false){if(!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_){R(t,r)}}function G(e,t){const r=Array.isArray(e);const n={type_:r?1:0,scope_:t?t.scope_:z(),modified_:false,finalized_:false,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:false};let o=n;let i=H;if(r){o=[n];i=J}const{revoke:u,proxy:c}=Proxy.revocable(o,i);n.draft_=c;n.revoke_=u;return c}var H={get(e,t){if(t===v)return e;const r=_(e);if(!P(r,t)){return V(e,r,t)}const n=r[t];if(e.finalized_||!m(n)){return n}if(n===Q(e.base_,t)){te(e);return e.copy_[t]=ne(n,e)}return n},has(e,t){return t in _(e)},ownKeys(e){return Reflect.ownKeys(_(e))},set(e,t,r){const n=Z(_(e),t);if(n?.set){n.set.call(e.draft_,r);return true}if(!e.modified_){const n=Q(_(e),t);const o=n?.[v];if(o&&o.base_===r){e.copy_[t]=r;e.assigned_[t]=false;return true}if(k(r,n)&&(r!==void 0||P(e.base_,t)))return true;te(e);ee(e)}if(e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))return true;e.copy_[t]=r;e.assigned_[t]=true;return true},deleteProperty(e,t){if(Q(e.base_,t)!==void 0||t in e.base_){e.assigned_[t]=false;te(e);ee(e)}else{delete e.assigned_[t]}if(e.copy_){delete e.copy_[t]}return true},getOwnPropertyDescriptor(e,t){const r=_(e);const n=Reflect.getOwnPropertyDescriptor(r,t);if(!n)return n;return{writable:true,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){h(11)},getPrototypeOf(e){return w(e.base_)},setPrototypeOf(){h(12)}};var J={};E(H,((e,t)=>{J[e]=function(){arguments[0]=arguments[0][0];return t.apply(this,arguments)}}));J.deleteProperty=function(e,t){return J.set.call(this,e,t,void 0)};J.set=function(e,t,r){return H.set.call(this,e[0],t,r,e[0])};function Q(e,t){const r=e[v];const n=r?_(r):e;return n[t]}function V(e,t,r){const n=Z(t,r);return n?`value`in n?n.value:n.get?.call(e.draft_):void 0}function Z(e,t){if(!(t in e))return void 0;let r=w(e);while(r){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=w(r)}return void 0}function ee(e){if(!e.modified_){e.modified_=true;if(e.parent_){ee(e.parent_)}}}function te(e){if(!e.copy_){e.copy_=T(e.base_,e.scope_.immer_.useStrictShallowCopy_)}}var re=class{constructor(e){this.autoFreeze_=true;this.useStrictShallowCopy_=false;this.produce=(e,t,r)=>{if(typeof e==="function"&&typeof t!=="function"){const r=t;t=e;const n=this;return function e(o=r,...i){return n.produce(o,(e=>t.call(this,e,...i)))}}if(typeof t!=="function")h(6);if(r!==void 0&&typeof r!=="function")h(7);let n;if(m(e)){const o=K(this);const i=ne(e,void 0);let u=true;try{n=t(i);u=false}finally{if(u)B(o);else F(o)}W(o,r);return U(n,o)}else if(!e||typeof e!=="object"){n=t(e);if(n===void 0)n=e;if(n===p)n=void 0;if(this.autoFreeze_)R(n,true);if(r){const t=[];const o=[];N("Patches").generateReplacementPatches_(e,n,t,o);r(t,o)}return n}else h(1,e)};this.produceWithPatches=(e,t)=>{if(typeof e==="function"){return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)))}let r,n;const o=this.produce(e,t,((e,t)=>{r=e;n=t}));return[o,r,n]};if(typeof e?.autoFreeze==="boolean")this.setAutoFreeze(e.autoFreeze);if(typeof e?.useStrictShallowCopy==="boolean")this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){if(!m(e))h(8);if(b(e))e=oe(e);const t=K(this);const r=ne(e,void 0);r[v].isManual_=true;F(t);return r}finishDraft(e,t){const r=e&&e[v];if(!r||!r.isManual_)h(9);const{scope_:n}=r;W(n,t);return U(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(n.path.length===0&&n.op==="replace"){e=n.value;break}}if(r>-1){t=t.slice(r+1)}const n=N("Patches").applyPatches_;if(b(e)){return n(e,t)}return this.produce(e,(e=>n(e,t)))}};function ne(e,t){const r=I(e)?N("MapSet").proxyMap_(e,t):M(e)?N("MapSet").proxySet_(e,t):G(e,t);const n=t?t.scope_:z();n.drafts_.push(r);return r}function oe(e){if(!b(e))h(10,e);return ie(e)}function ie(e){if(!m(e)||x(e))return e;const t=e[v];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=true;r=T(e,t.scope_.immer_.useStrictShallowCopy_)}else{r=T(e,true)}E(r,((e,t)=>{S(r,e,ie(t))}));if(t){t.finalized_=false}return r}var ue=new re;var ce=ue.produce;ue.produceWithPatches.bind(ue);ue.setAutoFreeze.bind(ue);ue.setUseStrictShallowCopy.bind(ue);ue.applyPatches.bind(ue);ue.createDraft.bind(ue);ue.finishDraft.bind(ue);var fe=Object.defineProperty;var se=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty;var le=Object.prototype.propertyIsEnumerable;var de=(e,t,r)=>t in e?fe(e,t,{enumerable:true,configurable:true,writable:true,value:r}):e[t]=r;var pe=(e,t)=>{for(var r in t||(t={}))if(ae.call(t,r))de(e,r,t[r]);if(se)for(var r of se(t)){if(le.call(t,r))de(e,r,t[r])}return e};function ye(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!=="function"){throw new TypeError(t)}}function ve(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!=="object"){throw new TypeError(t)}}function he(e,t=`expected all items to be functions, instead received the following types: `){if(!e.every((e=>typeof e==="function"))){const r=e.map((e=>typeof e==="function"?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${r}]`)}}var we=e=>Array.isArray(e)?e:[e];function be(e){const t=Array.isArray(e[0])?e[0]:e;he(t,`createSelector expects all input-selectors to be functions, but received the following types: `);return t}function me(e,t){const r=[];const{length:n}=e;for(let o=0;o<n;o++){r.push(e[o].apply(null,t))}return r}var je=class{constructor(e){this.value=e}deref(){return this.value}};var Oe=typeof WeakRef!=="undefined"?WeakRef:je;var Ee=0;var ge=1;function Pe(){return{s:Ee,v:void 0,o:null,p:null}}function Se(e,t={}){let r=Pe();const{resultEqualityCheck:n}=t;let o;let i=0;function u(){var t,u;let c=r;const{length:f}=arguments;for(let e=0,t=f;e<t;e++){const t=arguments[e];if(typeof t==="function"||typeof t==="object"&&t!==null){let e=c.o;if(e===null){c.o=e=new WeakMap}const r=e.get(t);if(r===void 0){c=Pe();e.set(t,c)}else{c=r}}else{let e=c.p;if(e===null){c.p=e=new Map}const r=e.get(t);if(r===void 0){c=Pe();e.set(t,c)}else{c=r}}}const s=c;let a;if(c.s===ge){a=c.v}else{a=e.apply(null,arguments);i++}s.s=ge;if(n){const e=(u=(t=o==null?void 0:o.deref)==null?void 0:t.call(o))!=null?u:o;if(e!=null&&n(e,a)){a=e;i!==0&&i--}const r=typeof a==="object"&&a!==null||typeof a==="function";o=r?new Oe(a):a}s.v=a;return a}u.clearCache=()=>{r=Pe();u.resetResultsCount()};u.resultsCount=()=>i;u.resetResultsCount=()=>{i=0};return u}function ke(e,...t){const r=typeof e==="function"?{memoize:e,memoizeOptions:t}:e;const n=(...e)=>{let t=0;let n=0;let o;let i={};let u=e.pop();if(typeof u==="object"){i=u;u=e.pop()}ye(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c=pe(pe({},r),i);const{memoize:f,memoizeOptions:s=[],argsMemoize:a=Se,argsMemoizeOptions:l=[],devModeChecks:d={}}=c;const p=we(s);const y=we(l);const v=be(e);const h=f((function e(){t++;return u.apply(null,arguments)}),...p);const w=a((function e(){n++;const t=me(v,arguments);o=h.apply(null,t);return o}),...y);return Object.assign(w,{resultFunc:u,memoizedResultFunc:h,dependencies:v,dependencyRecomputations:()=>n,resetDependencyRecomputations:()=>{n=0},lastResult:()=>o,recomputations:()=>t,resetRecomputations:()=>{t=0},memoize:f,argsMemoize:a})};Object.assign(n,{withTypes:()=>n});return n}var Ie=ke(Se);var Me=Object.assign(((e,t=Ie)=>{ve(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e);const n=r.map((t=>e[t]));const o=t(n,((...e)=>e.reduce(((e,t,n)=>{e[r[n]]=t;return e}),{})));return o}),{withTypes:()=>Me});function _e(e){const t=({dispatch:t,getState:r})=>n=>o=>{if(typeof o==="function"){return o(t,r,e)}return n(o)};return t}var Te=_e();var Re=_e;var Ce=Object.defineProperty;var xe=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty;var ze=Object.prototype.propertyIsEnumerable;var De=(e,t,r)=>t in e?Ce(e,t,{enumerable:true,configurable:true,writable:true,value:r}):e[t]=r;var We=(e,t)=>{for(var r in t||(t={}))if(Ae.call(t,r))De(e,r,t[r]);if(Ne)for(var r of Ne(t)){if(ze.call(t,r))De(e,r,t[r])}return e};var Be=(e,t)=>xe(e,$e(t));var Fe=(e,t)=>{var r={};for(var n in e)if(Ae.call(e,n)&&t.indexOf(n)<0)r[n]=e[n];if(e!=null&&Ne)for(var n of Ne(e)){if(t.indexOf(n)<0&&ze.call(e,n))r[n]=e[n]}return r};var Ke=(...e)=>{const t=ke(...e);const r=Object.assign(((...e)=>{const r=t(...e);const n=(e,...t)=>r(b(e)?oe(e):e,...t);Object.assign(n,r);return n}),{withTypes:()=>r});return r};Ke(Se);var Le=typeof window!=="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length===0)return void 0;if(typeof arguments[0]==="object")return a;return a.apply(null,arguments)};function Ue(e,t){function r(...r){if(t){let n=t(...r);if(!n){throw new Error(St(0))}return We(We({type:e,payload:n.payload},"meta"in n&&{meta:n.meta}),"error"in n&&{error:n.error})}return{type:e,payload:r[0]}}r.toString=()=>`${e}`;r.type=e;r.match=t=>d(t)&&t.type===e;return r}var qe=class e extends Array{constructor(...t){super(...t);Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){if(t.length===1&&Array.isArray(t[0])){return new e(...t[0].concat(this))}return new e(...t.concat(this))}};function Ye(e){return m(e)?ce(e,(()=>{})):e}function Xe(e,t,r){if(e.has(t)){let n=e.get(t);if(r.update){n=r.update(n,t,e);e.set(t,n)}return n}if(!r.insert)throw new Error(St(10));const n=r.insert(t,e);e.set(t,n);return n}function Ge(e){return typeof e==="boolean"}var He=()=>function e(t){const{thunk:r=true,immutableCheck:n=true,serializableCheck:o=true,actionCreatorCheck:i=true}=t!=null?t:{};let u=new qe;if(r){if(Ge(r)){u.push(Te)}else{u.push(Re(r.extraArgument))}}return u};var Je="RTK_autoBatch";var Qe=e=>t=>{setTimeout(t,e)};var Ve=typeof window!=="undefined"&&window.requestAnimationFrame?window.requestAnimationFrame:Qe(10);var Ze=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=true;let i=false;let u=false;const c=new Set;const f=e.type==="tick"?queueMicrotask:e.type==="raf"?Ve:e.type==="callback"?e.queueNotification:Qe(e.timeout);const s=()=>{u=false;if(i){i=false;c.forEach((e=>e()))}};return Object.assign({},n,{subscribe(e){const t=()=>o&&e();const r=n.subscribe(t);c.add(e);return()=>{r();c.delete(e)}},dispatch(e){var t;try{o=!((t=e==null?void 0:e.meta)==null?void 0:t[Je]);i=!o;if(i){if(!u){u=true;f(s)}}return n.dispatch(e)}finally{o=true}}})};var et=e=>function t(r){const{autoBatch:n=true}=r!=null?r:{};let o=new qe(e);if(n){o.push(Ze(typeof n==="object"?n:void 0))}return o};var tt="production"==="production";function rt(e){const t=He();const{reducer:r=void 0,middleware:n,devTools:o=true,preloadedState:i=void 0,enhancers:f=void 0}=e||{};let d;if(typeof r==="function"){d=r}else if(u(r)){d=s(r)}else{throw new Error(St(1))}let p;if(typeof n==="function"){p=n(t)}else{p=t()}let y=a;if(o){y=Le(We({trace:!tt},typeof o==="object"&&o))}const v=l(...p);const h=et(v);let w=typeof f==="function"?f(h):h();const b=y(...w);return c(d,i,b)}function nt(e){const t={};const r=[];let n;const o={addCase(e,r){const n=typeof e==="string"?e:e.type;if(!n){throw new Error(St(28))}if(n in t){throw new Error(St(29))}t[n]=r;return o},addMatcher(e,t){r.push({matcher:e,reducer:t});return o},addDefaultCase(e){n=e;return o}};e(o);return[t,r,n]}function ot(e){return typeof e==="function"}function it(e,t){let[r,n,o]=nt(t);let i;if(ot(e)){i=()=>Ye(e())}else{const t=Ye(e);i=()=>t}function u(e=i(),t){let u=[r[t.type],...n.filter((({matcher:e})=>e(t))).map((({reducer:e})=>e))];if(u.filter((e=>!!e)).length===0){u=[o]}return u.reduce(((e,r)=>{if(r){if(b(e)){const n=e;const o=r(n,t);if(o===void 0){return e}return o}else if(!m(e)){const n=r(e,t);if(n===void 0){if(e===null){return e}throw new Error(St(9))}return n}else{return ce(e,(e=>r(e,t)))}}return e}),e)}u.getInitialState=i;return u}var ut="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";var ct=(e=21)=>{let t="";let r=e;while(r--){t+=ut[Math.random()*64|0]}return t};var ft=Symbol.for("rtk-slice-createasyncthunk");function st(e,t){return`${e}/${t}`}function at({creators:e}={}){var t;const r=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[ft];return function e(t){const{name:n,reducerPath:o=n}=t;if(!n){throw new Error(St(11))}if(typeof process!=="undefined"&&"production"==="development"){if(t.initialState===void 0){console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`")}}const i=(typeof t.reducers==="function"?t.reducers(pt()):t.reducers)||{};const u=Object.keys(i);const c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]};const f={addCase(e,t){const r=typeof e==="string"?e:e.type;if(!r){throw new Error(St(12))}if(r in c.sliceCaseReducersByType){throw new Error(St(13))}c.sliceCaseReducersByType[r]=t;return f},addMatcher(e,t){c.sliceMatchers.push({matcher:e,reducer:t});return f},exposeAction(e,t){c.actionCreators[e]=t;return f},exposeCaseReducer(e,t){c.sliceCaseReducersByName[e]=t;return f}};u.forEach((e=>{const o=i[e];const u={reducerName:e,type:st(n,e),createNotation:typeof t.reducers==="function"};if(vt(o)){wt(u,o,f,r)}else{yt(u,o,f)}}));function s(){const[e={},r=[],n=void 0]=typeof t.extraReducers==="function"?nt(t.extraReducers):[t.extraReducers];const o=We(We({},e),c.sliceCaseReducersByType);return it(t.initialState,(e=>{for(let t in o){e.addCase(t,o[t])}for(let t of c.sliceMatchers){e.addMatcher(t.matcher,t.reducer)}for(let t of r){e.addMatcher(t.matcher,t.reducer)}if(n){e.addDefaultCase(n)}}))}const a=e=>e;const l=new Map;let d;function p(e,t){if(!d)d=s();return d(e,t)}function y(){if(!d)d=s();return d.getInitialState()}function v(e,r=false){function n(t){let n=t[e];if(typeof n==="undefined"){if(r){n=y()}}return n}function o(e=a){const n=Xe(l,r,{insert:()=>new WeakMap});return Xe(n,e,{insert:()=>{var n;const o={};for(const[i,u]of Object.entries((n=t.selectors)!=null?n:{})){o[i]=lt(u,e,y,r)}return o}})}return{reducerPath:e,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}const h=Be(We({name:n,reducer:p,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:y},v(o)),{injectInto(e,t={}){var r=t,{reducerPath:n}=r,i=Fe(r,["reducerPath"]);const u=n!=null?n:o;e.inject({reducerPath:u,reducer:p},i);return We(We({},h),v(u,true))}});return h}}function lt(e,t,r,n){function o(o,...i){let u=t(o);if(typeof u==="undefined"){if(n){u=r()}}return e(u,...i)}o.unwrapped=e;return o}var dt=at();function pt(){function e(e,t){return We({_reducerDefinitionType:"asyncThunk",payloadCreator:e},t)}e.withTypes=()=>e;return{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}},asyncThunk:e}}function yt({type:e,reducerName:t,createNotation:r},n,o){let i;let u;if("reducer"in n){if(r&&!ht(n)){throw new Error(St(17))}i=n.reducer;u=n.prepare}else{i=n}o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,u?Ue(e,u):Ue(e))}function vt(e){return e._reducerDefinitionType==="asyncThunk"}function ht(e){return e._reducerDefinitionType==="reducerWithPrepare"}function wt({type:e,reducerName:t},r,n,o){if(!o){throw new Error(St(18))}const{payloadCreator:i,fulfilled:u,pending:c,rejected:f,settled:s,options:a}=r;const l=o(e,i,a);n.exposeAction(t,l);if(u){n.addCase(l.fulfilled,u)}if(c){n.addCase(l.pending,c)}if(f){n.addCase(l.rejected,f)}if(s){n.addMatcher(l.settled,s)}n.exposeCaseReducer(t,{fulfilled:u||bt,pending:c||bt,rejected:f||bt,settled:s||bt})}function bt(){}var mt=(e,t)=>{if(typeof e!=="function"){throw new Error(St(32))}};var jt="listenerMiddleware";var Ot=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t){o=Ue(t).match}else if(r){t=r.type;o=r.match}else if(n){o=n}else if(o);else{throw new Error(St(21))}mt(i);return{predicate:o,type:t,effect:i}};var Et=Object.assign((e=>{const{type:t,predicate:r,effect:n}=Ot(e);const o=ct();const i={id:o,effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(St(22))}};return i}),{withTypes:()=>Et});var gt=Object.assign(Ue(`${jt}/add`),{withTypes:()=>gt});Ue(`${jt}/removeAll`);var Pt=Object.assign(Ue(`${jt}/remove`),{withTypes:()=>Pt});function St(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const kt={itemId:-1,items:[],productId:-1,products:[],isModalOpenEventSent:false};const It=dt({name:"popup",initialState:kt,reducers:{setPopupItemId:(e,t)=>{e.itemId=t.payload},setPopupItems:(e,t)=>{e.items=t.payload},setIsModalOpenEventSent:(e,t)=>{e.isModalOpenEventSent=t.payload},updatePopItemLink:(e,t)=>{const{itemId:r,linkId:n,properties:o}=t.payload;const i=e.items.find((e=>e.id===r));const u=i.links.findIndex((e=>e.id===n));const c=i.links[u];i.links[u]=Object.assign({},c,o)},changePopupItem:(e,t)=>{const{payload:r}=t;const n=e.items.findIndex((t=>t.id===e.itemId));if(r==="next"&&n<e.items.length){e.itemId=e.items[n+1].id}if(r==="previous"&&n>0){e.itemId=e.items[n-1].id}},setPopupProductId:(e,t)=>{e.productId=t.payload},setProducts:(e,t)=>{e.products=t.payload}}});const{setPopupItemId:Mt,setPopupItems:_t,updatePopItemLink:Tt,changePopupItem:Rt,setProducts:Ct,setPopupProductId:xt,setIsModalOpenEventSent:$t}=It.actions;const Nt=It.reducer;const At=e=>{const t=e.popup.items.find((t=>t.id===e.popup.itemId));return t!==undefined?t:null};const zt=e=>{const t=e.popup.products.find((t=>t.id===e.popup.productId));return t!==undefined?t:null};const Dt=e=>e.popup.productId!==-1;const Wt=e=>{const t=e.popup.items.findIndex((t=>t.id===e.popup.itemId));const r=e.popup.items[t-1];return r&&r.source!=="upload_widget"};export{s as a,rt as b,dt as c,_t as d,Rt as e,$t as f,At as g,zt as h,Dt as i,Wt as j,xt as k,Ct as l,Nt as p,Mt as s,Tt as u};
//# sourceMappingURL=p-cc3f09f6.js.map