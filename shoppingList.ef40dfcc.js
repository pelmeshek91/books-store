function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequireead5;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequireead5=o),o.register("7sfsU",(function(t,n){e(t.exports,"backdrop",(function(){return i})),e(t.exports,"modal",(function(){return s})),e(t.exports,"openBtn",(function(){return c})),e(t.exports,"form",(function(){return l})),e(t.exports,"singUpBtn",(function(){return h})),e(t.exports,"inputNameValue",(function(){return d})),e(t.exports,"emailInput",(function(){return m})),e(t.exports,"passwordInput",(function(){return g})),e(t.exports,"closeModal",(function(){return y})),o("ftYLF"),o("3PjDZ"),o("3PjDZ"),o("ftYLF"),o("cEmXr"),o("cxzCy"),o("cV6qV"),o("7Y9D8"),o("ffjl9");var r=o("fI1rF");const i=document.querySelector(".backdrop-autoriz"),s=document.querySelector(".autoriz-modal"),a=document.querySelector("[autoriz-close-menu]"),c=document.querySelector("[autoriz-open-menu]"),u=document.querySelector(".autoriz-open-menu"),l=document.querySelector(".autoriz-modal-form"),h=document.querySelector(".autoriz-sing-up-btn"),d=(document.querySelector(".autoriz-sub-btn"),document.querySelector(".autoriz-text"),document.querySelector(".autoriz-modal-input")),f=document.querySelector("#up"),p=document.querySelector("#in"),m=document.getElementById("user_email"),g=document.getElementById("user_password");function y(){i.setAttribute("autoriz-is-hidden",!0),s.classList.remove("autoriz-is-active")}function v(){const e=localStorage.getItem("userName");e&&(c.textContent=e)}v(),f.addEventListener("click",(()=>{h.textContent="sign up"})),p.addEventListener("click",(()=>{h.textContent="sign in"})),c.addEventListener("click",r.openModal),u.addEventListener("click",r.openModal),a.addEventListener("click",y),v(),l.addEventListener("submit",r.onAuth)})),o.register("ftYLF",(function(t,n){e(t.exports,"doc",(function(){return o("3PjDZ").doc})),e(t.exports,"getDoc",(function(){return o("3PjDZ").getDoc})),e(t.exports,"setDoc",(function(){return o("3PjDZ").setDoc})),o("3PjDZ")})),o.register("3PjDZ",(function(t,n){e(t.exports,"setLogLevel",(function(){return m})),e(t.exports,"_logWarn",(function(){return v})),e(t.exports,"_debugAssert",(function(){return I})),e(t.exports,"FirestoreError",(function(){return _})),e(t.exports,"Timestamp",(function(){return B})),e(t.exports,"_FieldPath",(function(){return G})),e(t.exports,"_DocumentKey",(function(){return $})),e(t.exports,"_isBase64Available",(function(){return at})),e(t.exports,"_DatabaseId",(function(){return yt})),e(t.exports,"_validateIsNotUsedTogether",(function(){return du})),e(t.exports,"_cast",(function(){return gu})),e(t.exports,"connectFirestoreEmulator",(function(){return bu})),e(t.exports,"DocumentReference",(function(){return xu})),e(t.exports,"collection",(function(){return ku})),e(t.exports,"collectionGroup",(function(){return _u})),e(t.exports,"doc",(function(){return Tu})),e(t.exports,"refEqual",(function(){return Su})),e(t.exports,"queryEqual",(function(){return Au})),e(t.exports,"CACHE_SIZE_UNLIMITED",(function(){return Du})),e(t.exports,"ensureFirestoreConfigured",(function(){return Pu})),e(t.exports,"enableIndexedDbPersistence",(function(){return Mu})),e(t.exports,"enableMultiTabIndexedDbPersistence",(function(){return Fu})),e(t.exports,"clearIndexedDbPersistence",(function(){return Uu})),e(t.exports,"waitForPendingWrites",(function(){return Bu})),e(t.exports,"enableNetwork",(function(){return Vu})),e(t.exports,"disableNetwork",(function(){return zu})),e(t.exports,"loadBundle",(function(){return qu})),e(t.exports,"namedQuery",(function(){return Wu})),e(t.exports,"Bytes",(function(){return $u})),e(t.exports,"FieldPath",(function(){return Hu})),e(t.exports,"GeoPoint",(function(){return Qu})),e(t.exports,"query",(function(){return Al})),e(t.exports,"where",(function(){return Cl})),e(t.exports,"orderBy",(function(){return Ol})),e(t.exports,"limit",(function(){return Ll})),e(t.exports,"limitToLast",(function(){return Ml})),e(t.exports,"startAt",(function(){return jl})),e(t.exports,"startAfter",(function(){return Ul})),e(t.exports,"endBefore",(function(){return Vl})),e(t.exports,"endAt",(function(){return zl})),e(t.exports,"AbstractUserDataWriter",(function(){return Kl})),e(t.exports,"DocumentSnapshot",(function(){return Jl})),e(t.exports,"QueryDocumentSnapshot",(function(){return Zl})),e(t.exports,"QuerySnapshot",(function(){return eh})),e(t.exports,"snapshotEqual",(function(){return nh})),e(t.exports,"getDoc",(function(){return rh})),e(t.exports,"getDocFromCache",(function(){return oh})),e(t.exports,"getDocFromServer",(function(){return sh})),e(t.exports,"getDocs",(function(){return ah})),e(t.exports,"getDocsFromCache",(function(){return ch})),e(t.exports,"getDocsFromServer",(function(){return uh})),e(t.exports,"setDoc",(function(){return lh})),e(t.exports,"executeWrite",(function(){return gh})),e(t.exports,"updateDoc",(function(){return hh})),e(t.exports,"deleteDoc",(function(){return dh})),e(t.exports,"addDoc",(function(){return fh})),e(t.exports,"onSnapshot",(function(){return ph})),e(t.exports,"onSnapshotsInSync",(function(){return mh})),e(t.exports,"WriteBatch",(function(){return wh})),e(t.exports,"runTransaction",(function(){return Ih})),e(t.exports,"deleteField",(function(){return Eh})),e(t.exports,"serverTimestamp",(function(){return kh})),e(t.exports,"arrayUnion",(function(){return _h})),e(t.exports,"arrayRemove",(function(){return Th})),e(t.exports,"increment",(function(){return Sh}));var r=o("ix4Jr"),i=o("4a6xH"),s=o("7vF8m"),a=o("ffjl9"),c=o("4bwHs"),u=o("4TNnu");const l="@firebase/firestore";
/**
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
 */class h{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
/**
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
 */
let d="9.22.0";
/**
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
 */const f=new(0,s.Logger)("@firebase/firestore");function p(){return f.logLevel}function m(e){f.setLogLevel(e)}function g(e,...t){if(f.logLevel<=s.LogLevel.DEBUG){const n=t.map(w);f.debug(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=s.LogLevel.ERROR){const n=t.map(w);f.error(`Firestore (${d}): ${e}`,...n)}}function v(e,...t){if(f.logLevel<=s.LogLevel.WARN){const n=t.map(w);f.warn(`Firestore (${d}): ${e}`,...n)}}function w(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function b(e="Unexpected state"){const t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw y(t),new Error(t)}function x(e,t){e||b()}function I(e,t){e||b()}function E(e,t){return e}
/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends a.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class T{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(h.UNAUTHENTICATED)))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class C{constructor(e){this.t=e,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(x("string"==typeof t.accessToken),new S(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return x(null===e||"string"==typeof e),new h(e)}}class R{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=h.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class D{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new R(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,g("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(x("string"==typeof e.token),this.T=e.token,new O(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function L(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
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
 */class M{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=L(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function F(e,t){return e<t?-1:e>t?1:0}function j(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function U(e){return e+"\0"}
/**
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
 */class B{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return B.fromMillis(Date.now())}static fromDate(e){return B.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new B(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new B(0,0))}static max(){return new V(new B(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(),void 0===n?n=e.length-t:n>e.length-t&&b(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends z{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new _(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new q(t)}static emptyPath(){return new q([])}}const W=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends z{construct(e,t,n){return new G(e,t,n)}static isValidIdentifier(e){return W.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new _(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new _(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new _(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new _(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new G(t)}static emptyPath(){return new G([])}}
/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(q.fromString(e))}static fromName(e){return new $(q.fromString(e).popFirst(5))}static empty(){return new $(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new q(e.slice()))}}
/**
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
 */class H{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function K(e){return e.fields.find((e=>2===e.kind))}function Q(e){return e.fields.filter((e=>2!==e.kind))}H.UNKNOWN_ID=-1;class X{constructor(e,t){this.fieldPath=e,this.kind=t}}class Y{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Y(0,ee.min())}}function J(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=V.fromTimestamp(1e9===r?new B(n+1,0):new B(n,r));return new ee(i,$.empty(),t)}function Z(e){return new ee(e.readTime,e.key,-1)}class ee{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ee(V.min(),$.empty(),-1)}static max(){return new ee(V.max(),$.empty(),-1)}}function te(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=$.comparator(e.documentKey,t.documentKey),0!==n?n:F(e.largestBatchId,t.largestBatchId))}
/**
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
 */const ne="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class re{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function ie(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==ne)throw e;g("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class oe{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new oe(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof oe?t:oe.resolve(t)}catch(e){return oe.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):oe.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):oe.reject(t)}static resolve(e){return new oe(((t,n)=>{t(e)}))}static reject(e){return new oe(((t,n)=>{n(e)}))}static waitFor(e){return new oe(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=oe.resolve(!1);for(const n of e)t=t.next((e=>e?oe.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new oe(((n,r)=>{const i=e.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{o[c]=e,++s,s===i&&n(o)}),(e=>r(e)))}}))}static doWhile(e,t){return new oe(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
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
 */class se{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new T,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new ue(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{const n=pe(t.target.error);this.v.reject(new ue(e,n))}}static open(e,t,n,r){try{return new se(t,e.transaction(r,n))}catch(e){throw new ue(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(g("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new he(t)}}class ae{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===ae.S((0,a.getUA)())&&y("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return g("SimpleDb","Removing database:",e),de(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,a.isIndexedDBAvailable)())return!1;if(ae.C())return!0;const e=(0,a.getUA)(),t=ae.S(e),n=0<t&&t<10,r=ae.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return void 0!==u&&"YES"===(void 0===(e={})?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ue(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new _(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new _(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ue(e,r))},r.onupgradeneeded=e=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.O(t,r.transaction,e.oldVersion,this.version).next((()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let o=0;for(;;){++o;try{this.db=await this.$(e);const t=se.open(this.db,e,i?"readonly":"readwrite",n),o=r(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),oe.reject(e)))).toPromise();return o.catch((()=>{})),await t.R,o}catch(e){const t=e,n="FirebaseError"!==t.name&&o<3;if(g("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ce{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return de(this.L.delete())}}class ue extends _{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function le(e){return"IndexedDbTransactionError"===e.name}class he{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(g("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),de(n)}add(e){return g("SimpleDb","ADD",this.store.name,e,e),de(this.store.add(e))}get(e){return de(this.store.get(e)).next((t=>(void 0===t&&(t=null),g("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return g("SimpleDb","DELETE",this.store.name,e),de(this.store.delete(e))}count(){return g("SimpleDb","COUNT",this.store.name),de(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new oe(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new oe(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){g("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new oe(((n,r)=>{t.onerror=e=>{const t=pe(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new oe(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const o=new ce(i),s=t(i.primaryKey,i.value,o);if(s instanceof oe){const e=s.catch((e=>(o.done(),oe.reject(e))));n.push(e)}o.isDone?r():null===o.K?i.continue():i.continue(o.K)}})).next((()=>oe.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function de(e){return new oe(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=pe(e.target.error);n(t)}}))}let fe=!1;function pe(e){const t=ae.S((0,a.getUA)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new _("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fe||(fe=!0,setTimeout((()=>{throw e}),0)),e}}return e}class me{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){g("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{g("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){le(e)?g("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ie(e)}await this.et(6e4)}))}}class ge{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let r=t,i=!0;return oe.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return g("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.rt(r,n))).next((n=>(g("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Z(t);te(r,n)>0&&(n=r)})),new ee(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
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
 */class ye{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ve(e){return null==e}function we(e){return 0===e&&1/e==-1/0}function be(e){return"number"==typeof e&&Number.isInteger(e)&&!we(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */function xe(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ee(t)),t=Ie(e.get(n),t);return Ee(t)}function Ie(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Ee(e){return e+""}function ke(e){const t=e.length;if(x(t>=2),2===t)return x(""===e.charAt(0)&&""===e.charAt(1)),q.emptyPath();const n=t-2,r=[];let i="";for(let o=0;o<t;){const t=e.indexOf("",o);switch((t<0||t>n)&&b(),e.charAt(t+1)){case"":const n=e.substring(o,t);let s;0===i.length?s=n:(i+=n,s=i,i=""),r.push(s);break;case"":i+=e.substring(o,t),i+="\0";break;case"":i+=e.substring(o,t+1);break;default:b()}o=t+2}return new q(r)}
/**
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
 */ye.ct=-1;const _e=["userId","batchId"];
/**
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
 */function Te(e,t){return[e,xe(t)]}function Se(e,t,n){return[e,xe(t),n]}const Ae={},Ne=["prefixPath","collectionGroup","readTime","documentId"],Ce=["prefixPath","collectionGroup","documentId"],Re=["collectionGroup","readTime","prefixPath","documentId"],De=["canonicalId","targetId"],Oe=["targetId","path"],Pe=["path","targetId"],Le=["collectionId","parent"],Me=["indexId","uid"],Fe=["uid","sequenceNumber"],je=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ue=["indexId","uid","orderedDocumentKey"],Be=["userId","collectionPath","documentId"],Ve=["userId","collectionPath","largestBatchId"],ze=["userId","collectionGroup","largestBatchId"],qe=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],We=[...qe,"documentOverlays"],Ge=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$e=Ge,He=[...$e,"indexConfiguration","indexState","indexEntries"];
/**
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
 */class Ke extends re{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function Qe(e,t){const n=E(e);return ae.M(n.ht,t)}
/**
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
 */function Xe(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ye(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Je(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||tt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new et(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new et(this.root,e,this.comparator,!1)}getReverseIterator(){return new et(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new et(this.root,e,this.comparator,!0)}}class et{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:tt.RED,this.left=null!=r?r:tt.EMPTY,this.right=null!=i?i:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new tt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return tt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b();if(this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1,tt.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,r,i){return this}insert(e,t,n){return new tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class nt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rt(this.data.getIterator())}getIteratorFrom(e){return new rt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof nt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class rt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function it(e){return e.hasNext()?e.getNext():void 0}
/**
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
 */class ot{constructor(e){this.fields=e,e.sort(G.comparator)}static empty(){return new ot([])}unionWith(e){let t=new nt(G.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return j(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class st extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */function at(){return"undefined"!=typeof atob}
/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new st("Invalid base64 string: "+e):e}}(e);return new ct(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ut=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lt(e){if(x(!!e),"string"==typeof e){let t=0;const n=ut.exec(e);if(x(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ht(e.seconds),nanos:ht(e.nanos)}}function ht(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function dt(e){return"string"==typeof e?ct.fromBase64String(e):ct.fromUint8Array(e)}
/**
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
 */function ft(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pt(e){const t=e.mapValue.fields.__previous_value__;return ft(t)?pt(t):t}function mt(e){const t=lt(e.mapValue.fields.__local_write_time__.timestampValue);return new B(t.seconds,t.nanos)}
/**
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
 */class gt{constructor(e,t,n,r,i,o,s,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class yt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof yt&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const vt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},wt={nullValue:"NULL_VALUE"};function bt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ft(e)?4:Pt(e)?9007199254740991:10:b()}function xt(e,t){if(e===t)return!0;const n=bt(e);if(n!==bt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return mt(e).isEqual(mt(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=lt(e.timestampValue),r=lt(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return dt(e.bytesValue).isEqual(dt(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ht(e.geoPointValue.latitude)===ht(t.geoPointValue.latitude)&&ht(e.geoPointValue.longitude)===ht(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ht(e.integerValue)===ht(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ht(e.doubleValue),r=ht(t.doubleValue);return n===r?we(n)===we(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return j(e.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Xe(n)!==Xe(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!xt(n[e],r[e])))return!1;return!0}(e,t);default:return b()}}function It(e,t){return void 0!==(e.values||[]).find((e=>xt(e,t)))}function Et(e,t){if(e===t)return 0;const n=bt(e),r=bt(t);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ht(e.integerValue||e.doubleValue),r=ht(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return kt(e.timestampValue,t.timestampValue);case 4:return kt(mt(e),mt(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){const n=dt(e),r=dt(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=F(n[e],r[e]);if(0!==t)return t}return F(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=F(ht(e.latitude),ht(t.latitude));return 0!==n?n:F(ht(e.longitude),ht(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Et(n[e],r[e]);if(t)return t}return F(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===vt.mapValue&&t===vt.mapValue)return 0;if(e===vt.mapValue)return 1;if(t===vt.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let e=0;e<r.length&&e<o.length;++e){const t=F(r[e],o[e]);if(0!==t)return t;const s=Et(n[r[e]],i[o[e]]);if(0!==s)return s}return F(r.length,o.length)}(e.mapValue,t.mapValue);default:throw b()}}function kt(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);const n=lt(e),r=lt(t),i=F(n.seconds,r.seconds);return 0!==i?i:F(n.nanos,r.nanos)}function _t(e){return Tt(e)}function Tt(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=lt(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?dt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,$.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Tt(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Tt(e.fields[i])}`;return n+"}"}(e.mapValue):b()}function St(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function At(e){return!!e&&"integerValue"in e}function Nt(e){return!!e&&"arrayValue"in e}function Ct(e){return!!e&&"nullValue"in e}function Rt(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Dt(e){return!!e&&"mapValue"in e}function Ot(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ye(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ot(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ot(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Pt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Lt(e){return"nullValue"in e?wt:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?St(yt.empty(),$.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:b()}function Mt(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?St(yt.empty(),$.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?vt:b()}function Ft(e,t){const n=Et(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function jt(e,t){const n=Et(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Dt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ot(t)}setAll(e){let t=G.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ot(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Dt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Dt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ye(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Ut(Ot(this.value))}}function Bt(e){const t=[];return Ye(e.fields,((e,n)=>{const r=new G([e]);if(Dt(n)){const e=Bt(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ot(t)
/**
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
 */}class Vt{constructor(e,t,n,r,i,o,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new Vt(e,0,V.min(),V.min(),V.min(),Ut.empty(),0)}static newFoundDocument(e,t,n,r){return new Vt(e,1,t,V.min(),n,r,0)}static newNoDocument(e,t){return new Vt(e,2,t,V.min(),V.min(),Ut.empty(),0)}static newUnknownDocument(e,t){return new Vt(e,3,t,V.min(),V.min(),Ut.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(V.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class zt{constructor(e,t){this.position=e,this.inclusive=t}}function qt(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?$.comparator($.fromName(s.referenceValue),n.key):Et(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Wt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!xt(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Gt{constructor(e,t="asc"){this.field=e,this.dir=t}}function $t(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Ht{}class Kt extends Ht{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new on(e,t,n):"array-contains"===t?new un(e,n):"in"===t?new ln(e,n):"not-in"===t?new hn(e,n):"array-contains-any"===t?new dn(e,n):new Kt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new sn(e,n):new an(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Et(t,this.value)):null!==t&&bt(this.value)===bt(t)&&this.matchesComparison(Et(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Qt extends Ht{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Qt(e,t)}matches(e){return Xt(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Xt(e){return"and"===e.op}function Yt(e){return"or"===e.op}function Jt(e){return Zt(e)&&Xt(e)}function Zt(e){for(const t of e.filters)if(t instanceof Qt)return!1;return!0}function en(e){if(e instanceof Kt)return e.field.canonicalString()+e.op.toString()+_t(e.value);if(Jt(e))return e.filters.map((e=>en(e))).join(",");{const t=e.filters.map((e=>en(e))).join(",");return`${e.op}(${t})`}}function tn(e,t){return e instanceof Kt?function(e,t){return t instanceof Kt&&e.op===t.op&&e.field.isEqual(t.field)&&xt(e.value,t.value)}(e,t):e instanceof Qt?function(e,t){return t instanceof Qt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&tn(n,t.filters[r])),!0)}(e,t):void b()}function nn(e,t){const n=e.filters.concat(t);return Qt.create(n,e.op)}function rn(e){return e instanceof Kt?function(e){return`${e.field.canonicalString()} ${e.op} ${_t(e.value)}`}(e):e instanceof Qt?function(e){return e.op.toString()+" {"+e.getFilters().map(rn).join(" ,")+"}"}(e):"Filter"}class on extends Kt{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class sn extends Kt{constructor(e,t){super(e,"in",t),this.keys=cn("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class an extends Kt{constructor(e,t){super(e,"not-in",t),this.keys=cn("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function cn(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>$.fromName(e.referenceValue)))}class un extends Kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Nt(t)&&It(t.arrayValue,this.value)}}class ln extends Kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&It(this.value.arrayValue,t)}}class hn extends Kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(It(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!It(this.value.arrayValue,t)}}class dn extends Kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Nt(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>It(this.value.arrayValue,e)))}}
/**
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
 */class fn{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.dt=null}}function pn(e,t=null,n=[],r=[],i=null,o=null,s=null){return new fn(e,t,n,r,i,o,s)}function mn(e){const t=E(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>en(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ve(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>_t(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>_t(e))).join(",")),t.dt=e}return t.dt}function gn(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!$t(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!tn(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wt(e.startAt,t.startAt)&&Wt(e.endAt,t.endAt)}function yn(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function vn(e,t){return e.filters.filter((e=>e instanceof Kt&&e.field.isEqual(t)))}function wn(e,t,n){let r=wt,i=!0;for(const n of vn(e,t)){let e=wt,t=!0;switch(n.op){case"<":case"<=":e=Lt(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=wt}Ft({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let o=0;o<e.orderBy.length;++o)if(e.orderBy[o].field.isEqual(t)){const e=n.position[o];Ft({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function bn(e,t,n){let r=vt,i=!0;for(const n of vn(e,t)){let e=vt,t=!0;switch(n.op){case">=":case">":e=Mt(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=vt}jt({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let o=0;o<e.orderBy.length;++o)if(e.orderBy[o].field.isEqual(t)){const e=n.position[o];jt({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
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
 */class xn{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function In(e,t,n,r,i,o,s,a){return new xn(e,t,n,r,i,o,s,a)}function En(e){return new xn(e)}function kn(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function _n(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Tn(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Sn(e){return null!==e.collectionGroup}function An(e){const t=E(e);if(null===t.wt){t.wt=[];const e=Tn(t),n=_n(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Gt(e)),t.wt.push(new Gt(G.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Gt(G.keyField(),e))}}}return t.wt}function Nn(e){const t=E(e);if(!t._t)if("F"===t.limitType)t._t=pn(t.path,t.collectionGroup,An(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of An(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Gt(n.field,t))}const n=t.endAt?new zt(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zt(t.startAt.position,t.startAt.inclusive):null;t._t=pn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Cn(e,t){t.getFirstInequalityField(),Tn(e);const n=e.filters.concat([t]);return new xn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Rn(e,t,n){return new xn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Dn(e,t){return gn(Nn(e),Nn(t))&&e.limitType===t.limitType}function On(e){return`${mn(Nn(e))}|lt:${e.limitType}`}function Pn(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>rn(e))).join(", ")}]`),ve(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>_t(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>_t(e))).join(",")),`Target(${t})`}(Nn(e))}; limitType=${e.limitType})`}function Ln(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of An(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=qt(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,An(e),t))&&!(e.endAt&&!function(e,t,n){const r=qt(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,An(e),t))}(e,t)}function Mn(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Fn(e){return(t,n)=>{let r=!1;for(const i of An(e)){const e=jn(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function jn(e,t,n){const r=e.field.isKeyField()?$.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Et(r,i):b()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}
/**
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
 */class Un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ye(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Je(this.inner)}size(){return this.innerSize}}
/**
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
 */const Bn=new Ze($.comparator);function Vn(){return Bn}const zn=new Ze($.comparator);function qn(...e){let t=zn;for(const n of e)t=t.insert(n.key,n);return t}function Wn(e){let t=zn;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Gn(){return Hn()}function $n(){return Hn()}function Hn(){return new Un((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Kn=new Ze($.comparator),Qn=new nt($.comparator);function Xn(...e){let t=Qn;for(const n of e)t=t.add(n);return t}const Yn=new nt(F);function Jn(){return Yn}
/**
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
 */function Zn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:we(t)?"-0":t}}function er(e){return{integerValue:""+e}}function tr(e,t){return be(t)?er(t):Zn(e,t)}
/**
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
 */class nr{constructor(){this._=void 0}}function rr(e,t,n){return e instanceof sr?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ft(t)&&(t=pt(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof ar?cr(e,t):e instanceof ur?lr(e,t):function(e,t){const n=or(e,t),r=dr(n)+dr(e.gt);return At(n)&&At(e.gt)?er(r):Zn(e.serializer,r)}(e,t)}function ir(e,t,n){return e instanceof ar?cr(e,t):e instanceof ur?lr(e,t):n}function or(e,t){var n;return e instanceof hr?At(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class sr extends nr{}class ar extends nr{constructor(e){super(),this.elements=e}}function cr(e,t){const n=fr(t);for(const t of e.elements)n.some((e=>xt(e,t)))||n.push(t);return{arrayValue:{values:n}}}class ur extends nr{constructor(e){super(),this.elements=e}}function lr(e,t){let n=fr(t);for(const t of e.elements)n=n.filter((e=>!xt(e,t)));return{arrayValue:{values:n}}}class hr extends nr{constructor(e,t){super(),this.serializer=e,this.gt=t}}function dr(e){return ht(e.integerValue||e.doubleValue)}function fr(e){return Nt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class pr{constructor(e,t){this.field=e,this.transform=t}}class mr{constructor(e,t){this.version=e,this.transformResults=t}}class gr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gr}static exists(e){return new gr(void 0,e)}static updateTime(e){return new gr(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yr(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class vr{}function wr(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Nr(e.key,gr.none()):new kr(e.key,e.data,gr.none());{const n=e.data,r=Ut.empty();let i=new nt(G.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new _r(e.key,r,new ot(i.toArray()),gr.none())}}function br(e,t,n){e instanceof kr?function(e,t,n){const r=e.value.clone(),i=Sr(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof _r?function(e,t,n){if(!yr(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Sr(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Tr(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xr(e,t,n,r){return e instanceof kr?function(e,t,n,r){if(!yr(e.precondition,t))return n;const i=e.value.clone(),o=Ar(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof _r?function(e,t,n,r){if(!yr(e.precondition,t))return n;const i=Ar(e.fieldTransforms,r,t),o=t.data;return o.setAll(Tr(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return yr(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Ir(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=or(r.transform,e||null);null!=i&&(null===n&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Er(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&j(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ar&&t instanceof ar||e instanceof ur&&t instanceof ur?j(e.elements,t.elements,xt):e instanceof hr&&t instanceof hr?xt(e.gt,t.gt):e instanceof sr&&t instanceof sr}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class kr extends vr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _r extends vr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tr(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Sr(e,t,n){const r=new Map;x(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,ir(s,a,n[i]))}return r}function Ar(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,rr(e,o,t))}return r}class Nr extends vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cr extends vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Rr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&br(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=xr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=xr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=$n();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=t.has(r.key)?null:s;const a=wr(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(V.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Xn())}isEqual(e){return this.batchId===e.batchId&&j(this.mutations,e.mutations,((e,t)=>Er(e,t)))&&j(this.baseMutations,e.baseMutations,((e,t)=>Er(e,t)))}}class Dr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){x(e.mutations.length===n.length);let r=Kn;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Dr(e,t,n,r)}}
/**
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
 */class Or{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class Pr{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var Lr,Mr;function Fr(e){switch(e){default:return b();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function jr(e){if(void 0===e)return y("GRPC error has no .code"),k.UNKNOWN;switch(e){case Lr.OK:return k.OK;case Lr.CANCELLED:return k.CANCELLED;case Lr.UNKNOWN:return k.UNKNOWN;case Lr.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Lr.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Lr.INTERNAL:return k.INTERNAL;case Lr.UNAVAILABLE:return k.UNAVAILABLE;case Lr.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Lr.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Lr.NOT_FOUND:return k.NOT_FOUND;case Lr.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Lr.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Lr.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Lr.ABORTED:return k.ABORTED;case Lr.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Lr.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Lr.DATA_LOSS:return k.DATA_LOSS;default:return b()}}(Mr=Lr||(Lr={}))[Mr.OK=0]="OK",Mr[Mr.CANCELLED=1]="CANCELLED",Mr[Mr.UNKNOWN=2]="UNKNOWN",Mr[Mr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mr[Mr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mr[Mr.NOT_FOUND=5]="NOT_FOUND",Mr[Mr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mr[Mr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mr[Mr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mr[Mr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mr[Mr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mr[Mr.ABORTED=10]="ABORTED",Mr[Mr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mr[Mr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mr[Mr.INTERNAL=13]="INTERNAL",Mr[Mr.UNAVAILABLE=14]="UNAVAILABLE",Mr[Mr.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Ur{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Br}static getOrCreateInstance(){return null===Br&&(Br=new Ur),Br}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Br=null;
/**
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
 */function Vr(){return new TextEncoder}
/**
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
 */const zr=new(0,c.Integer)([4294967295,4294967295],0);function qr(e){const t=Vr().encode(e),n=new(0,c.Md5);return n.update(t),new Uint8Array(n.digest())}function Wr(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new(0,c.Integer)([n,r],0),new(0,c.Integer)([i,o],0)]}class Gr{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new $r(`Invalid padding: ${t}`);if(n<0)throw new $r(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new $r(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new $r(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=c.Integer.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(c.Integer.fromNumber(n)));return 1===r.compare(zr)&&(r=new(0,c.Integer)([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=qr(e),[n,r]=Wr(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Gr(i,r,t);return n.forEach((e=>o.insert(e))),o}insert(e){if(0===this.It)return;const t=qr(e),[n,r]=Wr(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class Hr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Kr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Hr(V.min(),r,new Ze(F),Vn(),Xn())}}class Kr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Kr(n,t,Xn(),Xn(),Xn())}}
/**
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
 */class Qr{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Xr{constructor(e,t){this.targetId=e,this.Vt=t}}class Yr{constructor(e,t,n=ct.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Jr{constructor(){this.St=0,this.Dt=ti(),this.Ct=ct.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Xn(),t=Xn(),n=Xn();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:b()}})),new Kr(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=ti()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Zr{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Vn(),this.zt=ei(),this.Wt=new Ze(F)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:b()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const o=i.target;if(yn(o))if(0===r){const e=new $(o.path);this.Yt(n,e,Vt.newNoDocument(e,V.min()))}else x(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Ur.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,o,s,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(s=null===(o=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===o?void 0:o.length)&&void 0!==s?s:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=n;let a,c;try{a=dt(i).toUint8Array()}catch(e){if(e instanceof st)return v("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Gr(a,o,s)}catch(e){return v(e instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(o)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&yn(i.target)){const t=new $(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,Vt.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=Xn();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Hr(e,t,this.Wt,this.jt,n);return this.jt=Vn(),this.zt=ei(),this.Wt=new Ze(F),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Jr,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new nt(F),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Jr),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function ei(){return new Ze($.comparator)}function ti(){return new Ze($.comparator)}const ni={asc:"ASCENDING",desc:"DESCENDING"},ri={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ii={and:"AND",or:"OR"};class oi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function si(e,t){return e.useProto3Json||ve(t)?t:{value:t}}function ai(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ci(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ui(e,t){return ai(e,t.toTimestamp())}function li(e){return x(!!e),V.fromTimestamp(function(e){const t=lt(e);return new B(t.seconds,t.nanos)}(e))}function hi(e,t){return function(e){return new q(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function di(e){const t=q.fromString(e);return x(Pi(t)),t}function fi(e,t){return hi(e.databaseId,t.path)}function pi(e,t){const n=di(t);if(n.get(1)!==e.databaseId.projectId)throw new _(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $(vi(n))}function mi(e,t){return hi(e.databaseId,t)}function gi(e){const t=di(e);return 4===t.length?q.emptyPath():vi(t)}function yi(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function vi(e){return x(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function wi(e,t,n){return{name:fi(e,t),fields:n.value.mapValue.fields}}function bi(e,t,n){const r=pi(e,t.name),i=li(t.updateTime),o=t.createTime?li(t.createTime):V.min(),s=new Ut({mapValue:{fields:t.fields}}),a=Vt.newFoundDocument(r,i,o,s);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function xi(e,t){let n;if(t instanceof kr)n={update:wi(e,t.key,t.value)};else if(t instanceof Nr)n={delete:fi(e,t.key)};else if(t instanceof _r)n={update:wi(e,t.key,t.data),updateMask:Oi(t.fieldMask)};else{if(!(t instanceof Cr))return b();n={verify:fi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof sr)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ar)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ur)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof hr)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw b()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ui(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:b()}(e,t.precondition)),n}function Ii(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?gr.updateTime(li(e.updateTime)):void 0!==e.exists?gr.exists(e.exists):gr.none()}(t.currentDocument):gr.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)x("REQUEST_TIME"===t.setToServerValue),n=new sr;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new ar(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new ur(e)}else"increment"in t?n=new hr(e,t.increment):b();const r=G.fromServerFormat(t.fieldPath);return new pr(r,n)}(e,t))):[];if(t.update){t.update.name;const i=pi(e,t.update.name),o=new Ut({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new ot(t.map((e=>G.fromServerFormat(e))))}(t.updateMask);return new _r(i,o,e,n,r)}return new kr(i,o,n,r)}if(t.delete){const r=pi(e,t.delete);return new Nr(r,n)}if(t.verify){const r=pi(e,t.verify);return new Cr(r,n)}return b()}function Ei(e,t){return{documents:[mi(e,t.path)]}}function ki(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=mi(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=mi(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Di(Qt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ci(e.field),direction:Si(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=si(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function _i(e){let t=gi(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){x(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=Ti(e);return t instanceof Qt&&Jt(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>function(e){return new Gt(Ri(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ve(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new zt(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new zt(n,t)}(n.endAt)),In(t,i,s,o,a,"F",c,u)}function Ti(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ri(e.unaryFilter.field);return Kt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ri(e.unaryFilter.field);return Kt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ri(e.unaryFilter.field);return Kt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ri(e.unaryFilter.field);return Kt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(e):void 0!==e.fieldFilter?function(e){return Kt.create(Ri(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Qt.create(e.compositeFilter.filters.map((e=>Ti(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(e):b()}function Si(e){return ni[e]}function Ai(e){return ri[e]}function Ni(e){return ii[e]}function Ci(e){return{fieldPath:e.canonicalString()}}function Ri(e){return G.fromServerFormat(e.fieldPath)}function Di(e){return e instanceof Kt?function(e){if("=="===e.op){if(Rt(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NAN"}};if(Ct(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Rt(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NOT_NAN"}};if(Ct(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ci(e.field),op:Ai(e.op),value:e.value}}}(e):e instanceof Qt?function(e){const t=e.getFilters().map((e=>Di(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ni(e.op),filters:t}}}(e):b()}function Oi(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Pi(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Li{constructor(e,t,n,r,i=V.min(),o=V.min(),s=ct.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(e){return new Li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class Mi{constructor(e){this.fe=e}}function Fi(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ji(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:fi(e,t.key),fields:t.data.value.mapValue.fields,updateTime:ai(e,t.version.toTimestamp()),createTime:ai(e,t.createTime.toTimestamp())}}(e.fe,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ui(t.version)};else{if(!t.isUnknownDocument())return b();r.unknownDocument={path:n.path.toArray(),version:Ui(t.version)}}return r}function ji(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ui(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Bi(e){const t=new B(e.seconds,e.nanoseconds);return V.fromTimestamp(t)}function Vi(e,t){const n=(t.baseMutations||[]).map((t=>Ii(e.fe,t)));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map((t=>Ii(e.fe,t))),i=B.fromMillis(t.localWriteTimeMs);return new Rr(t.batchId,i,n,r)}function zi(e){const t=Bi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Bi(e.lastLimboFreeSnapshotVersion):V.min();let r;var i;return void 0!==e.query.documents?(x(1===(i=e.query).documents.length),r=Nn(En(gi(i.documents[0])))):r=function(e){return Nn(_i(e))}(e.query),new Li(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,ct.fromBase64String(e.resumeToken))}function qi(e,t){const n=Ui(t.snapshotVersion),r=Ui(t.lastLimboFreeSnapshotVersion);let i;i=yn(t.target)?Ei(e.fe,t.target):ki(e.fe,t.target);const o=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:mn(t.target),readTime:n,resumeToken:o,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Wi(e){const t=_i({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Rn(t,t.limit,"L"):t}function Gi(e,t){return new Or(t.largestBatchId,Ii(e.fe,t.overlayMutation))}function $i(e,t){const n=t.path.lastSegment();return[e,xe(t.path.popLast()),n]}function Hi(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Ui(r.readTime),documentKey:xe(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
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
 */class Ki{getBundleMetadata(e,t){return Qi(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Bi(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){var n;return Qi(e).put({bundleId:(n=t).id,createTime:Ui(li(n.createTime)),version:n.version})}getNamedQuery(e,t){return Xi(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Wi(t.bundledQuery),readTime:Bi(t.readTime)};var t}))}saveNamedQuery(e,t){return Xi(e).put(function(e){return{name:e.name,readTime:Ui(li(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Qi(e){return Qe(e,"bundles")}function Xi(e){return Qe(e,"namedQueries")}
/**
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
 */class Yi{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const n=t.uid||"";return new Yi(e,n)}getOverlay(e,t){return Ji(e).get($i(this.userId,t)).next((e=>e?Gi(this.serializer,e):null))}getOverlays(e,t){const n=Gn();return oe.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const o=new Or(t,i);r.push(this.we(e,o))})),oe.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(xe(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Ji(e).J("collectionPathOverlayIndex",r))})),oe.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Gn(),i=xe(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ji(e).j("collectionPathOverlayIndex",o).next((e=>{for(const t of e){const e=Gi(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=Gn();let o;const s=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ji(e).X({index:"collectionGroupOverlayIndex",range:s},((e,t,n)=>{const s=Gi(this.serializer,t);i.size()<r||s.largestBatchId===o?(i.set(s.getKey(),s),o=s.largestBatchId):n.done()})).next((()=>i))}we(e,t){return Ji(e).put(function(e,t,n){const[r,i,o]=$i(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:o,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:xi(e.fe,n.mutation)}}(this.serializer,this.userId,t))}}function Ji(e){return Qe(e,"documentOverlays")}
/**
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
 */class Zi{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(ht(e.integerValue));else if("doubleValue"in e){const n=ht(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),we(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(dt(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Pt(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):b()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),$.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}function eo(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function to(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=eo(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Zi.Ve=new Zi;class no{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.De(n.value),n=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ne(n.value),n=t.next();this.ke()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{const e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{const e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){const t=this.Fe(e),n=to(t);this.Be(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Le(e){const t=this.Fe(e),n=to(t);this.Be(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}De(e){const t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class ro{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class io{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class oo{constructor(){this.je=new no,this.ze=new ro(this.je),this.We=new io(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}
/**
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
 */class so{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Je(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new so(this.indexId,this.documentKey,this.arrayValue,n)}}function ao(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=co(e.arrayValue,t.arrayValue),0!==n?n:(n=co(e.directionalValue,t.directionalValue),0!==n?n:$.comparator(e.documentKey,t.documentKey)))}function co(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
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
 */class uo{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ze=e:this.Xe.push(e)}}tn(e){x(e.collectionGroup===this.collectionId);const t=K(e);if(void 0!==t&&!this.en(t))return!1;const n=Q(e);let r=0,i=0;for(;r<n.length&&this.en(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ze){const e=n[r];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ye.length||!this.sn(this.Ye[i++],e))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
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
 */function lo(e){var t,n;if(x(e instanceof Kt||e instanceof Qt),e instanceof Kt){if(e instanceof ln){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Kt.create(e.field,"==",t))))||[];return Qt.create(r,"or")}return e}const r=e.filters.map((e=>lo(e)));return Qt.create(r,e.op)}function ho(e){if(0===e.getFilters().length)return[];const t=go(lo(e));return x(mo(t)),fo(t)||po(t)?[t]:t.getFilters()}function fo(e){return e instanceof Kt}function po(e){return e instanceof Qt&&Jt(e)}function mo(e){return fo(e)||po(e)||function(e){if(e instanceof Qt&&Yt(e)){for(const t of e.getFilters())if(!fo(t)&&!po(t))return!1;return!0}return!1}(e)}function go(e){if(x(e instanceof Kt||e instanceof Qt),e instanceof Kt)return e;if(1===e.filters.length)return go(e.filters[0]);const t=e.filters.map((e=>go(e)));let n=Qt.create(t,e.op);return n=wo(n),mo(n)?n:(x(n instanceof Qt),x(Xt(n)),x(n.filters.length>1),n.filters.reduce(((e,t)=>yo(e,t))))}function yo(e,t){let n;return x(e instanceof Kt||e instanceof Qt),x(t instanceof Kt||t instanceof Qt),n=e instanceof Kt?t instanceof Kt?function(e,t){return Qt.create([e,t],"and")}(e,t):vo(e,t):t instanceof Kt?vo(t,e):function(e,t){if(x(e.filters.length>0&&t.filters.length>0),Xt(e)&&Xt(t))return nn(e,t.getFilters());const n=Yt(e)?e:t,r=Yt(e)?t:e,i=n.filters.map((e=>yo(e,r)));return Qt.create(i,"or")}(e,t),wo(n)}function vo(e,t){if(Xt(t))return nn(t,e.getFilters());{const n=t.filters.map((t=>yo(e,t)));return Qt.create(n,"or")}}function wo(e){if(x(e instanceof Kt||e instanceof Qt),e instanceof Kt)return e;const t=e.getFilters();if(1===t.length)return wo(t[0]);if(Zt(e))return e;const n=t.map((e=>wo(e))),r=[];return n.forEach((t=>{t instanceof Kt?r.push(t):t instanceof Qt&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Qt.create(r,e.op)
/**
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
 */}class bo{constructor(){this.rn=new xo}addToCollectionParentIndex(e,t){return this.rn.add(t),oe.resolve()}getCollectionParents(e,t){return oe.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return oe.resolve()}deleteFieldIndex(e,t){return oe.resolve()}getDocumentsMatchingTarget(e,t){return oe.resolve(null)}getIndexType(e,t){return oe.resolve(0)}getFieldIndexes(e,t){return oe.resolve([])}getNextCollectionGroupToUpdate(e){return oe.resolve(null)}getMinOffset(e,t){return oe.resolve(ee.min())}getMinOffsetFromCollectionGroup(e,t){return oe.resolve(ee.min())}updateCollectionGroup(e,t,n){return oe.resolve()}updateIndexEntries(e,t){return oe.resolve()}}class xo{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new nt(q.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new nt(q.comparator)).toArray()}}
/**
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
 */const Io=new Uint8Array(0);class Eo{constructor(e,t){this.user=e,this.databaseId=t,this.on=new xo,this.un=new Un((e=>mn(e)),((e,t)=>gn(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.on.add(t)}));const i={collectionId:n,parent:xe(r)};return ko(e).put(i)}return oe.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[U(t),""],!1,!0);return ko(e).j(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(ke(r.parent))}return n}))}addFieldIndex(e,t){const n=To(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=So(e);return i.next((e=>{n.put(Hi(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=To(e),r=So(e),i=_o(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=_o(e);let r=!0;const i=new Map;return oe.forEach(this.cn(t),(t=>this.an(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Xn();const r=[];return oe.forEach(i,((i,o)=>{var s;g("IndexedDbIndexManager",`Using index ${s=i,`id=${s.indexId}|cg=${s.collectionGroup}|f=${s.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${mn(t)}`);const a=function(e,t){const n=K(t);if(void 0===n)return null;for(const t of vn(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(o,i),c=function(e,t){const n=new Map;for(const r of Q(t))for(const t of vn(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(o,i),u=function(e,t){const n=[];let r=!0;for(const i of Q(t)){const t=0===i.kind?wn(e,i.fieldPath,e.startAt):bn(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new zt(n,r)}(o,i),l=function(e,t){const n=[];let r=!0;for(const i of Q(t)){const t=0===i.kind?bn(e,i.fieldPath,e.endAt):wn(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new zt(n,r)}(o,i),h=this.hn(i,o,u),d=this.hn(i,o,l),f=this.ln(i,o,c),p=this.fn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return oe.forEach(p,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=$.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return oe.resolve(null)}))}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:ho(Qt.create(e.filters,"and")).map((t=>pn(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.un.set(e,t),t)}fn(e,t,n,r,i,o,s){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):Io,h=this.wn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],o),f=s.map((t=>this.wn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}wn(e,t,n,r){const i=new so(e,$.empty(),t,n);return r?i:i.Je()}_n(e,t,n,r){const i=new so(e,$.empty(),t,n);return r?i.Je():i}an(e,t){const n=new uo(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.cn(t);return oe.forEach(r,(t=>this.an(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new nt(G.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}mn(e,t){const n=new oo;for(const r of Q(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.He(r.kind);Zi.Ve._e(e,i)}return n.Qe()}dn(e){const t=new oo;return Zi.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const n=new oo;return Zi.Ve._e(St(this.databaseId,t),n.He(function(e){const t=Q(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Qe()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new oo);let i=0;for(const o of Q(e)){const e=n[i++];for(const n of r)if(this.yn(t,o.fieldPath)&&Nt(e))r=this.pn(r,o,e);else{const t=n.He(o.kind);Zi.Ve._e(e,t)}}return this.In(r)}hn(e,t,n){return this.ln(e,t,n.position)}In(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Qe();return t}pn(e,t,n){const r=[...e],i=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new oo;r.seed(n.Qe()),Zi.Ve._e(e,r.He(t.kind)),i.push(r)}return i}yn(e,t){return!!e.filters.find((e=>e instanceof Kt&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=To(e),r=So(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return oe.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Y(t.sequenceNumber,new ee(Bi(t.readTime),new $(ke(t.documentKey)),t.largestBatchId)):Y.empty(),r=e.fields.map((([e,t])=>new X(G.fromServerFormat(e),t)));return new H(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:F(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=To(e),i=So(e);return this.Tn(e).next((e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>oe.forEach(t,(t=>i.put(Hi(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return oe.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?oe.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),oe.forEach(i,(n=>this.En(e,t,n).next((t=>{const i=this.An(r,n);return t.isEqual(i)?oe.resolve():this.vn(e,r,n,t,i)})))))))}))}Rn(e,t,n,r){return _o(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,n,r){return _o(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}En(e,t,n){const r=_o(e);let i=new nt(ao);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},((e,r)=>{i=i.add(new so(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}An(e,t){let n=new nt(ao);const r=this.mn(t,e);if(null==r)return n;const i=K(t);if(null!=i){const o=e.data.field(i.fieldPath);if(Nt(o))for(const i of o.arrayValue.values||[])n=n.add(new so(t.indexId,e.key,this.dn(i),r))}else n=n.add(new so(t.indexId,e.key,Io,r));return n}vn(e,t,n,r,i){g("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(e,t,n,r,i){const o=e.getIterator(),s=t.getIterator();let a=it(o),c=it(s);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=it(s)):t?(i(a),a=it(o)):(a=it(o),c=it(s))}}(r,i,ao,(r=>{o.push(this.Rn(e,t,n,r))}),(r=>{o.push(this.Pn(e,t,n,r))})),oe.waitFor(o)}Tn(e){let t=1;return So(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>ao(e,t))).filter(((e,t,n)=>!t||0!==ao(e,n[t-1])));const r=[];r.push(e);for(const i of n){const n=ao(i,e),o=ao(i,t);if(0===n)r[0]=e.Je();else if(n>0&&o<0)r.push(i),r.push(i.Je());else if(o>0)break}r.push(t);const i=[];for(let e=0;e<r.length;e+=2){if(this.bn(r[e],r[e+1]))return[];const t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,Io,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,Io,[]];i.push(IDBKeyRange.bound(t,n))}return i}bn(e,t){return ao(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ao)}getMinOffset(e,t){return oe.mapArray(this.cn(t),(t=>this.an(e,t).next((e=>e||b())))).next(Ao)}}function ko(e){return Qe(e,"collectionParents")}function _o(e){return Qe(e,"indexEntries")}function To(e){return Qe(e,"indexConfiguration")}function So(e){return Qe(e,"indexState")}function Ao(e){x(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;te(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ee(t.readTime,t.documentKey,n)}
/**
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
 */const No={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Co{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Co(e,Co.DEFAULT_COLLECTION_PERCENTILE,Co.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function Ro(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),o=[],s=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:s},((e,t,n)=>(a++,n.delete())));o.push(c.next((()=>{x(1===a)})));const u=[];for(const e of n.mutations){const r=Se(t,e.key.path,n.batchId);o.push(i.delete(r)),u.push(e.key)}return oe.waitFor(o).next((()=>u))}function Do(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw b();t=e.noDocument}return JSON.stringify(t).length}
/**
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
 */Co.DEFAULT_COLLECTION_PERCENTILE=10,Co.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Co.DEFAULT=new Co(41943040,Co.DEFAULT_COLLECTION_PERCENTILE,Co.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Co.DISABLED=new Co(-1,0,0);class Oo{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Vn={}}static de(e,t,n,r){x(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Oo(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Lo(e).X({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Mo(e),o=Lo(e);return o.add({}).next((s=>{x("number"==typeof s);const a=new Rr(s,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>xi(e.fe,t))),i=n.mutations.map((t=>xi(e.fe,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new nt(((e,t)=>F(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Se(this.userId,e.key.path,s);l=l.add(e.key.path.popLast()),u.push(o.put(c)),u.push(i.put(t,Ae))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Vn[s]=a.keys()})),oe.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Lo(e).get(t).next((e=>e?(x(e.userId===this.userId),Vi(this.serializer,e)):null))}Sn(e,t){return this.Vn[t]?oe.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Vn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Lo(e).X({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(x(t.batchId>=n),i=Vi(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Lo(e).X({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Lo(e).j("userMutationsIndex",t).next((e=>e.map((e=>Vi(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Te(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Mo(e).X({range:r},((n,r,o)=>{const[s,a,c]=n,u=ke(a);if(s===this.userId&&t.path.isEqual(u))return Lo(e).get(c).next((e=>{if(!e)throw b();x(e.userId===this.userId),i.push(Vi(this.serializer,e))}));o.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new nt(F);const r=[];return t.forEach((t=>{const i=Te(this.userId,t.path),o=IDBKeyRange.lowerBound(i),s=Mo(e).X({range:o},((e,r,i)=>{const[o,s,a]=e,c=ke(s);o===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(s)})),oe.waitFor(r).next((()=>this.Dn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Te(this.userId,n),o=IDBKeyRange.lowerBound(i);let s=new nt(F);return Mo(e).X({range:o},((e,t,i)=>{const[o,a,c]=e,u=ke(a);o===this.userId&&n.isPrefixOf(u)?u.length===r&&(s=s.add(c)):i.done()})).next((()=>this.Dn(e,s)))}Dn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Lo(e).get(t).next((e=>{if(null===e)throw b();x(e.userId===this.userId),n.push(Vi(this.serializer,e))})))})),oe.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Ro(e.ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Cn(t.batchId)})),oe.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return oe.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Mo(e).X({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=ke(e[1]);r.push(t)}else n.done()})).next((()=>{x(0===r.length)}))}))}containsKey(e,t){return Po(e,this.userId,t)}xn(e){return Fo(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Po(e,t,n){const r=Te(t,n.path),i=r[1],o=IDBKeyRange.lowerBound(r);let s=!1;return Mo(e).X({range:o,Y:!0},((e,n,r)=>{const[o,a,c]=e;o===t&&a===i&&(s=!0),r.done()})).next((()=>s))}function Lo(e){return Qe(e,"mutations")}function Mo(e){return Qe(e,"documentMutations")}function Fo(e){return Qe(e,"mutationQueues")}
/**
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
 */class jo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new jo(0)}static Mn(){return new jo(-1)}}
/**
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
 */class Uo{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next((t=>{const n=new jo(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.$n(e).next((e=>V.fromTimestamp(new B(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.$n(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.$n(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r))))}addTargetData(e,t){return this.Fn(e,t).next((()=>this.$n(e).next((n=>(n.targetCount+=1,this.Bn(t,n),this.On(e,n))))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Bo(e).delete(t.targetId))).next((()=>this.$n(e))).next((t=>(x(t.targetCount>0),t.targetCount-=1,this.On(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Bo(e).X(((o,s)=>{const a=zi(s);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>oe.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Bo(e).X(((e,n)=>{const r=zi(n);t(r)}))}$n(e){return Vo(e).get("targetGlobalKey").next((e=>(x(null!==e),e)))}On(e,t){return Vo(e).put("targetGlobalKey",t)}Fn(e,t){return Bo(e).put(qi(this.serializer,t))}Bn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.$n(e).next((e=>e.targetCount))}getTargetData(e,t){const n=mn(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Bo(e).X({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const o=zi(n);gn(t,o.target)&&(i=o,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=zo(e);return t.forEach((t=>{const o=xe(t.path);r.push(i.put({targetId:n,path:o})),r.push(this.referenceDelegate.addReference(e,n,t))})),oe.waitFor(r)}removeMatchingKeys(e,t,n){const r=zo(e);return oe.forEach(t,(t=>{const i=xe(t.path);return oe.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=zo(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=zo(e);let i=Xn();return r.X({range:n,Y:!0},((e,t,n)=>{const r=ke(e[1]),o=new $(r);i=i.add(o)})).next((()=>i))}containsKey(e,t){const n=xe(t.path),r=IDBKeyRange.bound([n],[U(n)],!1,!0);let i=0;return zo(e).X({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}le(e,t){return Bo(e).get(t).next((e=>e?zi(e):null))}}function Bo(e){return Qe(e,"targets")}function Vo(e){return Qe(e,"targetGlobal")}function zo(e){return Qe(e,"targetDocuments")}
/**
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
 */function qo([e,t],[n,r]){const i=F(e,n);return 0===i?F(t,r):i}class Wo{constructor(e){this.Ln=e,this.buffer=new nt(qo),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();qo(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Go{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){g("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){le(e)?g("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ie(e)}await this.Qn(3e5)}))}}class $o{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return oe.resolve(ye.ct);const n=new Wo(t);return this.jn.forEachTarget(e,(e=>n.Kn(e.sequenceNumber))).next((()=>this.jn.Wn(e,(e=>n.Kn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector","Garbage collection skipped; disabled"),oe.resolve(No)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),No):this.Hn(e,t)))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(g("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),p()<=s.LogLevel.DEBUG&&g("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),oe.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Ho(e,t){return new $o(e,t)}
/**
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
 */class Ko{constructor(e,t){this.db=e,this.garbageCollector=Ho(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Jn(e){let t=0;return this.Wn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,((e,n)=>t(n)))}addReference(e,t,n){return Qo(e,n)}removeReference(e,t,n){return Qo(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Qo(e,t)}Xn(e,t){return function(e,t){let n=!1;return Fo(e).Z((r=>Po(e,r,t).next((e=>(e&&(n=!0),oe.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,((o,s)=>{if(s<=t){const t=this.Xn(e,o).next((t=>{if(!t)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,V.min()),zo(e).delete([0,xe(o.path)]))))}));r.push(t)}})).next((()=>oe.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Qo(e,t)}Yn(e,t){const n=zo(e);let r,i=ye.ct;return n.X({index:"documentTargetsIndex"},(([e,n],{path:o,sequenceNumber:s})=>{0===e?(i!==ye.ct&&t(new $(ke(r)),i),i=s,r=o):i=ye.ct})).next((()=>{i!==ye.ct&&t(new $(ke(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Qo(e,t){return zo(e).put(function(e,t){return{targetId:0,path:xe(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
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
 */class Xo{constructor(){this.changes=new Un((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?oe.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */class Yo{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ts(e).put(n)}removeEntry(e,t,n){return ts(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],ji(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Zn(e,n))))}getEntry(e,t){let n=Vt.newInvalidDocument(t);return ts(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ns(t))},((e,r)=>{n=this.ts(t,r)})).next((()=>n))}es(e,t){let n={size:0,document:Vt.newInvalidDocument(t)};return ts(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ns(t))},((e,r)=>{n={document:this.ts(t,r),size:Do(r)}})).next((()=>n))}getEntries(e,t){let n=Vn();return this.ns(e,t,((e,t)=>{const r=this.ts(e,t);n=n.insert(e,r)})).next((()=>n))}ss(e,t){let n=Vn(),r=new Ze($.comparator);return this.ns(e,t,((e,t)=>{const i=this.ts(e,t);n=n.insert(e,i),r=r.insert(e,Do(t))})).next((()=>({documents:n,rs:r})))}ns(e,t,n){if(t.isEmpty())return oe.resolve();let r=new nt(is);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(ns(r.first()),ns(r.last())),o=r.getIterator();let s=o.getNext();return ts(e).X({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=$.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;s&&is(s,i)<0;)n(s,null),s=o.getNext();s&&s.isEqual(i)&&(n(s,t),s=o.hasNext()?o.getNext():null),s?r.G(ns(s)):r.done()})).next((()=>{for(;s;)n(s,null),s=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),ji(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ts(e).j(IDBKeyRange.bound(o,s,!0)).next((e=>{let n=Vn();for(const i of e){const e=this.ts($.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(Ln(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Vn();const o=rs(t,n),s=rs(t,ee.max());return ts(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,s,!0)},((e,t,n)=>{const o=this.ts($.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(o.key,o),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Zo(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return es(e).get("remoteDocumentGlobalKey").next((e=>(x(!!e),e)))}Zn(e,t){return es(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const e=function(e,t){let n;if(t.document)n=bi(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=$.fromSegments(t.noDocument.path),r=Bi(t.noDocument.readTime);n=Vt.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b();{const e=$.fromSegments(t.unknownDocument.path),r=Bi(t.unknownDocument.version);n=Vt.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new B(e[0],e[1]);return V.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(V.min()))return e}return Vt.newInvalidDocument(e)}}function Jo(e){return new Yo(e)}class Zo extends Xo{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Un((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new nt(((e,t)=>F(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,o)=>{const s=this.us.get(i);if(t.push(this.os.removeEntry(e,i,s.readTime)),o.isValidDocument()){const a=Fi(this.os.serializer,o);r=r.add(i.path.popLast());const c=Do(a);n+=c-s.size,t.push(this.os.addEntry(e,i,a))}else if(n-=s.size,this.trackRemovals){const n=Fi(this.os.serializer,o.convertToNoDocument(V.min()));t.push(this.os.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.os.updateMetadata(e,n)),oe.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next((e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.os.ss(e,t).next((({documents:e,rs:t})=>(t.forEach(((t,n)=>{this.us.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function es(e){return Qe(e,"remoteDocumentGlobal")}function ts(e){return Qe(e,"remoteDocumentsV14")}function ns(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function rs(e,t){const n=t.documentKey.path.toArray();return[e,ji(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function is(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=F(n[e],r[e]),i)return i;return i=F(n.length,r.length),i||(i=F(n[n.length-2],r[r.length-2]),i||F(n[n.length-1],r[r.length-1]))
/**
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
 */
/**
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
 */}class os{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class ss{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&xr(n.mutation,e,ot.empty(),B.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Xn()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Xn()){const r=Gn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=qn();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Gn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Xn())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Vn();const o=Hn(),s=Hn();return t.forEach(((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof _r)?i=i.insert(t.key,t):void 0!==s?(o.set(t.key,s.mutation.getFieldMask()),xr(s.mutation,t,s.mutation.getFieldMask(),B.now())):o.set(t.key,ot.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new os(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=Hn();let r=new Ze(((e,t)=>e-t)),i=Xn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||ot.empty();s=i.applyToLocalView(o,s),n.set(e,s);const a=(r.get(i.batchId)||Xn()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=$n();c.forEach((e=>{if(!i.has(e)){const r=wr(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,u))}return oe.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sn(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):oe.resolve(Gn());let s=-1,a=i;return o.next((t=>oe.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?oe.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Xn()))).next((e=>({batchId:s,changes:Wn(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next((e=>{let t=qn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=qn();return this.indexManager.getCollectionParents(e,r).next((o=>oe.forEach(o,(o=>{const s=function(e,t){return new xn(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,s,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Vt.newInvalidDocument(r)))}));let n=qn();return e.forEach(((e,i)=>{const o=r.get(e);void 0!==o&&xr(o.mutation,i,ot.empty(),B.now()),Ln(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
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
 */class as{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return oe.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:li(n.createTime)}),oe.resolve()}getNamedQuery(e,t){return oe.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:Wi(e.bundledQuery),readTime:li(e.readTime)}}(t)),oe.resolve()}}
/**
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
 */class cs{constructor(){this.overlays=new Ze($.comparator),this.ls=new Map}getOverlay(e,t){return oe.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Gn();return oe.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),oe.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),oe.resolve()}getOverlaysForCollection(e,t,n){const r=Gn(),i=t.length+1,o=new $(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return oe.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ze(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Gn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=Gn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>s.set(e,t))),!(s.size()>=r)););return oe.resolve(s)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Or(t,n));let i=this.ls.get(t);void 0===i&&(i=Xn(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
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
 */class us{constructor(){this.fs=new nt(ls.ds),this.ws=new nt(ls._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new ls(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new ls(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new $(new q([])),n=new ls(t,e),r=new ls(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new $(new q([])),n=new ls(t,e),r=new ls(t,e+1);let i=Xn();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new ls(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ls{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return $.comparator(e.key,t.key)||F(e.As,t.As)}static _s(e,t){return F(e.As,t.As)||$.comparator(e.key,t.key)}}
/**
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
 */class hs{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new nt(ls.ds)}checkEmpty(e){return oe.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rr(i,t,n,r);this.mutationQueue.push(o);for(const t of r)this.Rs=this.Rs.add(new ls(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return oe.resolve(o)}lookupMutationBatch(e,t){return oe.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return oe.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return oe.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return oe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ls(t,0),r=new ls(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),oe.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new nt(F);return t.forEach((e=>{const t=new ls(e,0),r=new ls(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),oe.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;$.isDocumentKey(i)||(i=i.child(""));const o=new ls(new $(i),0);let s=new nt(F);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.As)),!0)}),o),oe.resolve(this.Vs(s))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){x(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return oe.forEach(t.mutations,(r=>{const i=new ls(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new ls(t,0),r=this.Rs.firstAfterOrEqual(n);return oe.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,oe.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class ds{constructor(e){this.Ds=e,this.docs=new Ze($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return oe.resolve(n?n.document.mutableCopy():Vt.newInvalidDocument(t))}getEntries(e,t){let n=Vn();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Vt.newInvalidDocument(e))})),oe.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Vn();const o=t.path,s=new $(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:e,value:{document:s}}=a.getNext();if(!o.isPrefixOf(e.path))break;e.path.length>o.length+1||te(Z(s),n)<=0||(r.has(s.key)||Ln(t,s))&&(i=i.insert(s.key,s.mutableCopy()))}return oe.resolve(i)}getAllFromCollectionGroup(e,t,n,r){b()}Cs(e,t){return oe.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new fs(this)}getSize(e){return oe.resolve(this.size)}}class fs extends Xo{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),oe.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
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
 */class ps{constructor(e){this.persistence=e,this.xs=new Un((e=>mn(e)),gn),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ns=0,this.ks=new us,this.targetCount=0,this.Ms=jo.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),oe.resolve()}getLastRemoteSnapshotVersion(e){return oe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return oe.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),oe.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),oe.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new jo(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,oe.resolve()}updateTargetData(e,t){return this.Fn(t),oe.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,oe.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),oe.waitFor(i).next((()=>r))}getTargetCount(e){return oe.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return oe.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),oe.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),oe.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),oe.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return oe.resolve(n)}containsKey(e,t){return oe.resolve(this.ks.containsKey(t))}}
/**
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
 */class ms{constructor(e,t){this.$s={},this.overlays={},this.Os=new ye(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new ps(this),this.indexManager=new bo,this.remoteDocumentCache=function(e){return new ds(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new Mi(t),this.qs=new as(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cs,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new hs(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);const r=new gs(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return oe.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class gs extends re{constructor(e){super(),this.currentSequenceNumber=e}}class ys{constructor(e){this.persistence=e,this.Qs=new us,this.js=null}static zs(e){return new ys(e)}get Ws(){if(this.js)return this.js;throw b()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),oe.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),oe.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),oe.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oe.forEach(this.Ws,(n=>{const r=$.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,V.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return oe.or([()=>oe.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
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
 */class vs{constructor(e){this.serializer=e}O(e,t,n,r){const i=new se("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_e,{unique:!0}),e.createObjectStore("documentMutations")}(e),ws(e),function(e){e.createObjectStore("remoteDocuments")}(e));let o=oe.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),ws(e)),o=o.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(o=o.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_e,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return oe.waitFor(i)}))}(e,i)))),o=o.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(o=o.next((()=>this.Ys(i)))),n<6&&r>=6&&(o=o.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i))))),n<7&&r>=7&&(o=o.next((()=>this.Zs(i)))),n<8&&r>=8&&(o=o.next((()=>this.ti(e,i)))),n<9&&r>=9&&(o=o.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(o=o.next((()=>this.ei(i)))),n<11&&r>=11&&(o=o.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(o=o.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Be});t.createIndex("collectionPathOverlayIndex",Ve,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ze,{unique:!1})}(e)}))),n<13&&r>=13&&(o=o.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Ne});t.createIndex("documentKeyIndex",Ce),t.createIndex("collectionGroupIndex",Re)}(e))).next((()=>this.ni(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(o=o.next((()=>this.si(e,i)))),n<15&&r>=15&&(o=o.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Me}).createIndex("sequenceNumberIndex",Fe,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:je}).createIndex("documentKeyIndex",Ue,{unique:!1})}(e)))),o}Xs(e){let t=0;return e.store("remoteDocuments").X(((e,n)=>{t+=Do(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Ys(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>oe.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next((n=>oe.forEach(n,(n=>{x(n.userId===t.userId);const r=Vi(this.serializer,n);return Ro(e,t.userId,r).next((()=>{}))}))))}))))}Zs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.X(((n,i)=>{const o=new q(n),s=function(e){return[0,xe(e)]}(o);r.push(t.get(s).next((n=>n?oe.resolve():(n=>t.put({targetId:0,path:xe(n),sequenceNumber:e.highestListenSequenceNumber}))(o))))})).next((()=>oe.waitFor(r)))}))}ti(e,t){e.createObjectStore("collectionParents",{keyPath:Le});const n=t.store("collectionParents"),r=new xo,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:xe(r)})}};return t.store("remoteDocuments").X({Y:!0},((e,t)=>{const n=new q(e);return i(n.popLast())})).next((()=>t.store("documentMutations").X({Y:!0},(([e,t,n],r)=>{const o=ke(t);return i(o.popLast())}))))}ei(e){const t=e.store("targets");return t.X(((e,n)=>{const r=zi(n),i=qi(this.serializer,r);return t.put(i)}))}ni(e,t){const n=t.store("remoteDocuments"),r=[];return n.X(((e,n)=>{const i=t.store("remoteDocumentsV14"),o=(s=n,s.document?new $(q.fromString(s.document.name).popFirst(5)):s.noDocument?$.fromSegments(s.noDocument.path):s.unknownDocument?$.fromSegments(s.unknownDocument.path):b()).path.toArray();var s;
/**
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
 */const a={prefixPath:o.slice(0,o.length-2),collectionGroup:o[o.length-2],documentId:o[o.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>oe.waitFor(r)))}si(e,t){const n=t.store("mutations"),r=Jo(this.serializer),i=new ms(ys.zs,this.serializer.fe);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Xn();Vi(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),oe.forEach(n,((e,n)=>{const o=new h(n),s=Yi.de(this.serializer,o),a=i.getIndexManager(o),c=Oo.de(o,this.serializer,a,i.referenceDelegate);return new ss(r,c,s,a).recalculateAndSaveOverlaysForDocumentKeys(new Ke(t,ye.ct),e).next()}))}))}}function ws(e){e.createObjectStore("targetDocuments",{keyPath:Oe}).createIndex("documentTargetsIndex",Pe,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",De,{unique:!0}),e.createObjectStore("targetGlobal")}const bs="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class xs{constructor(e,t,n,r,i,o,s,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=o,this.document=s,this.ri=c,this.oi=u,this.ui=l,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!xs.D())throw new _(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ko(this,r),this.di=t+"main",this.serializer=new Mi(a),this.wi=new ae(this.di,this.ui,new vs(this.serializer)),this.Bs=new Uo(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Jo(this.serializer),this.qs=new Ki,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&y("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new _(k.FAILED_PRECONDITION,bs);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Bs.getHighestSequenceNumber(e)))})).then((e=>{this.Os=new ye(e,this.ri)})).then((()=>{this.Fs=!0})).catch((e=>(this.wi&&this.wi.close(),Promise.reject(e))))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget((async()=>{this.started&&await this.mi()})))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Es(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ti(e).next((e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.fi(!1))))}))})).next((()=>this.Ei(e))).next((t=>this.isPrimary&&!t?this.Ai(e).next((()=>!1)):!!t&&this.vi(e).next((()=>!0)))))).catch((e=>{if(le(e))return g("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return g("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.ii.enqueueRetryable((()=>this.fi(e))),this.isPrimary=e}))}Ti(e){return Is(e).get("owner").next((e=>oe.resolve(this.Ri(e))))}Pi(e){return Es(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Qe(e,"clientMetadata");return t.j().next((e=>{const n=this.Si(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return oe.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.mi().then((()=>this.bi())).then((()=>this.pi()))))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?oe.resolve(!0):Is(e).get("owner").next((t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new _(k.FAILED_PRECONDITION,bs);return!1}}return!(!this.networkEnabled||!this.inForeground)||Es(e).j().next((e=>void 0===this.Si(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&g("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Ke(e,ye.ct);return this.Ai(t).next((()=>this.Pi(t)))})),this.wi.close(),this.Mi()}Si(e,t){return e.filter((e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId)))}$i(){return this.runTransaction("getActiveClients","readonly",(e=>Es(e).j().next((e=>this.Si(e,18e5).map((e=>e.clientId))))))}get started(){return this.Fs}getMutationQueue(e,t){return Oo.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Eo(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Yi.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,n){g("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(o=this.ui)?He:14===o?$e:13===o?Ge:12===o?We:11===o?qe:void b();var o;let s;return this.wi.runTransaction(e,r,i,(r=>(s=new Ke(r,this.Os?this.Os.next():ye.ct),"readwrite-primary"===t?this.Ti(s).next((e=>!!e||this.Ei(s))).next((t=>{if(!t)throw y(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.fi(!1))),new _(k.FAILED_PRECONDITION,ne);return n(s)})).next((e=>this.vi(s).next((()=>e)))):this.Oi(s).next((()=>n(s)))))).then((e=>(s.raiseOnCommittedEvent(),e)))}Oi(e){return Is(e).get("owner").next((e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new _(k.FAILED_PRECONDITION,bs)}))}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Is(e).put("owner",t)}static D(){return ae.D()}Ai(e){const t=Is(e);return t.get("owner").next((e=>this.Ri(e)?(g("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):oe.resolve()))}Vi(e,t){const n=Date.now();return!(e<n-t||e>n&&(y(`Detected an update time that is in the future: ${e} > ${n}`),1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.mi())))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;(0,a.isSafari)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return g("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return y("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){y("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Is(e){return Qe(e,"owner")}function Es(e){return Qe(e,"clientMetadata")}function ks(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
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
 */}class _s{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=Xn(),r=Xn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new _s(e,t.fromCache,n,r)}}
/**
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
 */class Ts{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(kn(t))return oe.resolve(null);let n=Nn(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Rn(t,null,"F"),n=Nn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Xn(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.ji(t,r);return this.zi(t,o,i,n.readTime)?this.Ki(e,Rn(t,null,"F")):this.Wi(e,o,t,n)}))))})))))}Gi(e,t,n,r){return kn(t)||r.isEqual(V.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const o=this.ji(t,i);return this.zi(t,o,n,r)?this.Qi(e,t):(p()<=s.LogLevel.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Pn(t)),this.Wi(e,o,t,J(r,-1)))}))}ji(e,t){let n=new nt(Fn(e));return t.forEach(((t,r)=>{Ln(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return p()<=s.LogLevel.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Pn(t)),this.Ui.getDocumentsMatchingQuery(e,t,ee.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class Ss{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Ze(F),this.Yi=new Un((e=>mn(e)),gn),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ss(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function As(e,t,n,r){return new Ss(e,t,n,r)}async function Ns(e,t){const n=E(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],o=[];let s=Xn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({er:e,removedBatchIds:i,addedBatchIds:o})))}))}))}function Cs(e){const t=E(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Rs(e,t,n){let r=Xn(),i=Xn();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Vn();return n.forEach(((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(V.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{nr:r,sr:i}}))}function Ds(e,t){const n=E(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Os(e,t){const n=E(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,oe.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new Li(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Ps(e,t,n){const r=E(e),i=r.Ji.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!le(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Ls(e,t,n){const r=E(e);let i=V.min(),o=Xn();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=E(e),i=r.Yi.get(n);return void 0!==i?oe.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,Nn(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:V.min(),n?o:Xn()))).next((e=>(js(r,Mn(t),e),{documents:e,ir:o})))))}function Ms(e,t){const n=E(e),r=E(n.Bs),i=n.Ji.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.le(e,t).next((e=>e?e.target:null))))}function Fs(e,t){const n=E(e),r=n.Xi.get(t)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Zi.getAllFromCollectionGroup(e,t,J(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(js(n,t,e),e)))}function js(e,t,n){let r=e.Xi.get(t)||V.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}async function Us(e,t,n=Xn()){const r=await Os(e,Nn(Wi(t.bundledQuery))),i=E(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const o=li(t.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(e,t);const s=r.withResumeToken(ct.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(s.targetId,s),i.Bs.updateTargetData(e,s).next((()=>i.Bs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Bs.addMatchingKeys(e,n,r.targetId))).next((()=>i.qs.saveNamedQuery(e,t)))}))}function Bs(e,t){return`firestore_clients_${e}_${t}`}function Vs(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function zs(e,t){return`firestore_targets_${e}_${t}`}class qs{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static ar(e,t,n){const r=JSON.parse(n);let i,o="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return o&&r.error&&(o="string"==typeof r.error.message&&"string"==typeof r.error.code,o&&(i=new _(r.error.code,r.error.message))),o?new qs(e,t,r.state,i):(y("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ws{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ar(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new _(n.error.code,n.error.message))),i?new Ws(e,n.state,r):(y("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Gs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Jn();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=be(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new Gs(e,i):(y("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class $s{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new $s(t.clientId,t.onlineState):(y("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Hs{constructor(){this.activeTargetIds=Jn()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ks{constructor(e,t,n,r,i){this.window=e,this.ii=t,this.persistenceKey=n,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Ze(F),this.started=!1,this.yr=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=Bs(this.persistenceKey,this.wr),this.Ir=function(e){return`firestore_sequence_number_${e}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Hs),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Rr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const t of e){if(t===this.wr)continue;const e=this.getItem(Bs(this.persistenceKey,t));if(e){const n=Gs.ar(t,e);n&&(this.gr=this.gr.insert(n.clientId,n))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const e=this.br(t);e&&this.Vr(e)}for(const e of this.yr)this.mr(e);this.yr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,n){this.Dr(e,t,n),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(zs(this.persistenceKey,e));if(n){const r=Ws.ar(e,n);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zs(this.persistenceKey,e))}updateQueryState(e,t,n){this.kr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Cr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return g("SharedClientState","READ",e,t),t}setItem(e,t){g("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){g("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(g("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void y("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Tr.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.Fr(e,null)}{const e=this.Br(t.key,t.newValue);if(e)return this.Fr(e.clientId,e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.Lr(t.key,t.newValue);if(e)return this.qr(e)}}else if(this.Ar.test(t.key)){if(null!==t.newValue){const e=this.Ur(t.key,t.newValue);if(e)return this.Kr(e)}}else if(t.key===this.vr){if(null!==t.newValue){const e=this.br(t.newValue);if(e)return this.Vr(e)}}else if(t.key===this.Ir){const e=function(e){let t=ye.ct;if(null!=e)try{const n=JSON.parse(e);x("number"==typeof n),t=n}catch(e){y("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ye.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Gr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Qr(e))))}}else this.yr.push(t)}))}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,n){const r=new qs(this.currentUser,e,t,n),i=Vs(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const t=Vs(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,n){const r=zs(this.persistenceKey,e),i=new Ws(e,t,n);this.setItem(r,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const n=this.Or(e);return Gs.ar(n,t)}Lr(e,t){const n=this.Er.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return qs.ar(new h(i),r,t)}Ur(e,t){const n=this.Ar.exec(e),r=Number(n[1]);return Ws.ar(r,t)}br(e){return $s.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);g("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const n=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(n),o=[],s=[];return i.forEach((e=>{r.has(e)||o.push(e)})),r.forEach((e=>{i.has(e)||s.push(e)})),this.syncEngine.Wr(o,s).then((()=>{this.gr=n}))}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Jn();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Qs{constructor(){this.Hr=new Hs,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Hs,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Xs{Yr(e){}shutdown(){}}
/**
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
 */class Ys{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Js=null;function Zs(){return null===Js?Js=268435456+Math.round(2147483648*Math.random()):Js++,"0x"+Js.toString(16)
/**
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
 */}const ea={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class ta{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
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
 */const na="WebChannelConnection";class ra extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const o=Zs(),s=this.To(e,t);g("RestConnection",`Sending RPC '${e}' ${o}:`,s,n);const a={};return this.Eo(a,r,i),this.Ao(e,s,a,n).then((t=>(g("RestConnection",`Received RPC '${e}' ${o}: `,t),t)),(t=>{throw v("RestConnection",`RPC '${e}' ${o} failed with error: `,t,"url: ",s,"request:",n),t}))}vo(e,t,n,r,i,o){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=ea[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=Zs();return new Promise(((o,s)=>{const a=new(0,c.XhrIo);a.setWithCredentials(!0),a.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const t=a.getResponseJson();g(na,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),o(t);break;case c.ErrorCode.TIMEOUT:g(na,`RPC '${e}' ${i} timed out`),s(new _(k.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=a.getStatus();if(g(na,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(t)>=0?t:k.UNKNOWN}(t.status);s(new _(e,t.message))}else s(new _(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new _(k.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{g(na,`RPC '${e}' ${i} completed.`)}}));const u=JSON.stringify(r);g(na,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",u,n,15)}))}Ro(e,t,n){const r=Zs(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=(0,c.createWebChannelTransport)(),s=(0,c.getStatEventTarget)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.xmlHttpFactory=new(0,c.FetchXmlHttpFactory)({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");g(na,`Creating RPC '${e}' stream ${r}: ${l}`,a);const h=o.createWebChannel(l,a);let d=!1,f=!1;const p=new ta({ro:t=>{f?g(na,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(g(na,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),g(na,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},oo:()=>h.close()}),m=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return m(h,c.WebChannel.EventType.OPEN,(()=>{f||g(na,`RPC '${e}' stream ${r} transport opened.`)})),m(h,c.WebChannel.EventType.CLOSE,(()=>{f||(f=!0,g(na,`RPC '${e}' stream ${r} transport closed`),p.wo())})),m(h,c.WebChannel.EventType.ERROR,(t=>{f||(f=!0,v(na,`RPC '${e}' stream ${r} transport errored:`,t),p.wo(new _(k.UNAVAILABLE,"The operation could not be completed")))})),m(h,c.WebChannel.EventType.MESSAGE,(t=>{var n;if(!f){const i=t.data[0];x(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){g(na,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=Lr[e];if(void 0!==t)return jr(t)}(t),i=s.message;void 0===n&&(n=k.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.wo(new _(n,i)),h.close()}else g(na,`RPC '${e}' stream ${r} received:`,i),p._o(i)}})),m(s,c.Event.STAT_EVENT,(t=>{t.stat===c.Stat.PROXY?g(na,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===c.Stat.NOPROXY&&g(na,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.fo()}),0),p}}
/**
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
 */
/**
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
 */function ia(){return"undefined"!=typeof window?window:null}function oa(){return"undefined"!=typeof document?document:null}
/**
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
 */function sa(e){return new oi(e,!0)}
/**
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
 */class aa{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&g("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
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
 */class ca{constructor(e,t,n,r,i,o,s,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new aa(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(y(t.toString()),y("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===k.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new _(k.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ua extends ca{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(x(void 0===t||"string"==typeof t),ct.fromBase64String(t||"")):(x(void 0===t||t instanceof Uint8Array),ct.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?k.UNKNOWN:jr(e.code);return new _(t,e.message||"")}(s);n=new Yr(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=pi(e,r.document.name),o=li(r.document.updateTime),s=r.document.createTime?li(r.document.createTime):V.min(),a=new Ut({mapValue:{fields:r.document.fields}}),c=Vt.newFoundDocument(i,o,s,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Qr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=pi(e,r.document),o=r.readTime?li(r.readTime):V.min(),s=Vt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Qr([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=pi(e,r.document),o=r.removedTargetIds||[];n=new Qr([],o,i,null)}else{if(!("filter"in t))return b();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,o=new Pr(r,i),s=e.targetId;n=new Xr(s,o)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return V.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?li(t.readTime):V.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=yi(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=yn(r)?{documents:Ei(e,r)}:{query:ki(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ci(e,t.resumeToken);const r=si(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(V.min())>0){n.readTime=ai(e,t.snapshotVersion.toTimestamp());const r=si(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=yi(this.serializer),t.removeTarget=e,this.Wo(t)}}class la extends ca{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(x(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(x(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?li(e.updateTime):li(t);return n.isEqual(V.min())&&(n=li(t)),new mr(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=li(e.commitTime);return this.listener.cu(n,t)}return x(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=yi(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>xi(this.serializer,e)))};this.Wo(t)}}
/**
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
 */class ha extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new _(k.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(k.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.vo(e,t,n,i,o,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _(k.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class da{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(y(t),this.mu=!1):g("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
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
 */class fa{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Ia(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=E(e);t.vu.add(4),await ma(t),t.bu.set("Unknown"),t.vu.delete(4),await pa(t)}(this))}))})),this.bu=new da(n,r)}}async function pa(e){if(Ia(e))for(const t of e.Ru)await t(!0)}async function ma(e){for(const t of e.Ru)await t(!1)}function ga(e,t){const n=E(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),xa(n)?ba(n):Ba(n).Ko()&&va(n,t))}function ya(e,t){const n=E(e),r=Ba(n);n.Au.delete(t),r.Ko()&&wa(n,t),0===n.Au.size&&(r.Ko()?r.jo():Ia(n)&&n.bu.set("Unknown"))}function va(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(V.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ba(e).su(t)}function wa(e,t){e.Vu.qt(t),Ba(e).iu(t)}function ba(e){e.Vu=new Zr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Ba(e).start(),e.bu.gu()}function xa(e){return Ia(e)&&!Ba(e).Uo()&&e.Au.size>0}function Ia(e){return 0===E(e).vu.size}function Ea(e){e.Vu=void 0}async function ka(e){e.Au.forEach(((t,n)=>{va(e,t)}))}async function _a(e,t){Ea(e),xa(e)?(e.bu.Iu(t),ba(e)):e.bu.set("Unknown")}async function Ta(e,t,n){if(e.bu.set("Online"),t instanceof Yr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Sa(e,n)}else if(t instanceof Qr?e.Vu.Ht(t):t instanceof Xr?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(V.min()))try{const t=await Cs(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(ct.EMPTY_BYTE_STRING,r.snapshotVersion)),wa(e,t);const i=new Li(r.target,t,n,r.sequenceNumber);va(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await Sa(e,t)}}async function Sa(e,t,n){if(!le(t))throw t;e.vu.add(1),await ma(e),e.bu.set("Offline"),n||(n=()=>Cs(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await pa(e)}))}function Aa(e,t){return t().catch((n=>Sa(e,n,t)))}async function Na(e){const t=E(e),n=Va(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Ca(t);)try{const e=await Ds(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Ra(t,e)}catch(e){await Sa(t,e)}Da(t)&&Oa(t)}function Ca(e){return Ia(e)&&e.Eu.length<10}function Ra(e,t){e.Eu.push(t);const n=Va(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Da(e){return Ia(e)&&!Va(e).Uo()&&e.Eu.length>0}function Oa(e){Va(e).start()}async function Pa(e){Va(e).hu()}async function La(e){const t=Va(e);for(const n of e.Eu)t.uu(n.mutations)}async function Ma(e,t,n){const r=e.Eu.shift(),i=Dr.from(r,t,n);await Aa(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Na(e)}async function Fa(e,t){t&&Va(e).ou&&await async function(e,t){if(Fr(n=t.code)&&n!==k.ABORTED){const n=e.Eu.shift();Va(e).Qo(),await Aa(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Na(e)}var n}(e,t),Da(e)&&Oa(e)}async function ja(e,t){const n=E(e);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=Ia(n);n.vu.add(3),await ma(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await pa(n)}async function Ua(e,t){const n=E(e);t?(n.vu.delete(2),await pa(n)):t||(n.vu.add(2),await ma(n),n.bu.set("Unknown"))}function Ba(e){return e.Su||(e.Su=function(e,t,n){const r=E(e);return r.fu(),new ua(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:ka.bind(null,e),ao:_a.bind(null,e),nu:Ta.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),xa(e)?ba(e):e.bu.set("Unknown")):(await e.Su.stop(),Ea(e))}))),e.Su}function Va(e){return e.Du||(e.Du=function(e,t,n){const r=E(e);return r.fu(),new la(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Pa.bind(null,e),ao:Fa.bind(null,e),au:La.bind(null,e),cu:Ma.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Na(e)):(await e.Du.stop(),e.Eu.length>0&&(g("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
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
 */}class za{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new za(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qa(e,t){if(y("AsyncQueue",`${t}: ${e}`),le(e))return new _(k.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Wa{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(e,t)=>$.comparator(e.key,t.key),this.keyedMap=qn(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new Wa(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wa))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Wa;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Ga{constructor(){this.Cu=new Ze($.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):b():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class $a{constructor(e,t,n,r,i,o,s,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new $a(e,t,Wa.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
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
 */class Ha{constructor(){this.Nu=void 0,this.listeners=[]}}class Ka{constructor(){this.queries=new Un((e=>On(e)),Dn),this.onlineState="Unknown",this.ku=new Set}}async function Qa(e,t){const n=E(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Ha),i)try{o.Nu=await n.onListen(r)}catch(e){const n=qa(e,`Initialization of query '${Pn(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.Mu(n.onlineState),o.Nu&&t.$u(o.Nu)&&Za(n)}async function Xa(e,t){const n=E(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ya(e,t){const n=E(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.$u(e)&&(r=!0);i.Nu=e}}r&&Za(n)}function Ja(e,t,n){const r=E(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Za(e){e.ku.forEach((e=>{e.next()}))}class ec{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new $a(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=$a.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
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
 */class tc{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}
/**
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
 */class nc{constructor(e){this.serializer=e}rr(e){return pi(this.serializer,e)}ur(e){return e.metadata.exists?bi(this.serializer,e.document,!1):Vt.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return li(e)}}class rc{constructor(e,t,n){this.ju=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ic(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const n=q.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,n=new nc(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.rr(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Xn()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=E(e);let o=Xn(),s=Vn();for(const e of n){const n=t.rr(e.metadata.name);e.document&&(o=o.add(n));const r=t.ur(e);r.setReadTime(t.cr(e.metadata.readTime)),s=s.insert(n,r)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Os(i,function(e){return Nn(En(q.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Rs(e,a,s).next((t=>(a.apply(e),t))).next((t=>i.Bs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Bs.addMatchingKeys(e,o,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.nr,t.sr))).next((()=>t.nr))))))}(this.localStore,new nc(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const e of this.queries)await Us(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function ic(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
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
 */class oc{constructor(e){this.key=e}}class sc{constructor(e){this.key=e}}class ac{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Xn(),this.mutatedKeys=Xn(),this.tc=Fn(e),this.ec=new Wa(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Ga,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ln(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(s=!0)),f&&(l?(o=o.add(l),i=d?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:o,ic:n,zi:s,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const o=t?this.uc():[],s=0===this.Zu.size&&this.current?1:0,a=s!==this.Xu;return this.Xu=s,0!==i.length||a?{snapshot:new $a(this.query,e.ec,r,i,e.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ga,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Xn(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new sc(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new oc(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Xn();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return $a.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class cc{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class uc{constructor(e){this.key=e,this.fc=!1}}class lc{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Un((e=>On(e)),Dn),this._c=new Map,this.mc=new Set,this.gc=new Ze($.comparator),this.yc=new Map,this.Ic=new us,this.Tc={},this.Ec=new Map,this.Ac=jo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function hc(e,t){const n=Fc(e);let r,i;const o=n.wc.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.lc();else{const e=await Os(n.localStore,Nn(t)),o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await dc(n,t,r,"current"===o,e.resumeToken),n.isPrimaryClient&&ga(n.remoteStore,e)}return i}async function dc(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Ls(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return Ec(e,t.targetId,s.cc),s.snapshot}(e,t,n,r);const o=await Ls(e.localStore,t,!0),s=new ac(t,o.ir),a=s.sc(o.documents),c=Kr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=s.applyChanges(a,e.isPrimaryClient,c);Ec(e,n,u.cc);const l=new cc(t,n,s);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function fc(e,t){const n=E(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!Dn(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ps(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ya(n.remoteStore,r.targetId),xc(n,r.targetId)})).catch(ie)):(xc(n,r.targetId),await Ps(n.localStore,r.targetId,!0))}async function pc(e,t){const n=E(e);try{const e=await function(e,t){const n=E(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const s=[];t.targetChanges.forEach(((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Bs.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,o.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(ct.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,o)&&s.push(n.Bs.updateTargetData(e,u))}));let a=Vn(),c=Xn();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(Rs(e,o,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!r.isEqual(V.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return oe.waitFor(s).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(x(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?x(r.fc):e.removedDocuments.size>0&&(x(r.fc),r.fc=!1))})),await Tc(n,e,t)}catch(e){await ie(e)}}function mc(e,t,n){const r=E(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=E(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(r=!0)})),r&&Za(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function gc(e,t,n){const r=E(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),o=i&&i.key;if(o){let e=new Ze($.comparator);e=e.insert(o,Vt.newNoDocument(o,V.min()));const n=Xn().add(o),i=new Hr(V.min(),new Map,new Ze(F),e,n);await pc(r,i),r.gc=r.gc.remove(o),r.yc.delete(t),_c(r)}else await Ps(r.localStore,t,!1).then((()=>xc(r,t,n))).catch(ie)}async function yc(e,t){const n=E(e),r=t.batch.batchId;try{const e=await function(e,t){const n=E(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=oe.resolve();return o.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);x(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Xn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);bc(n,r,null),wc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tc(n,e)}catch(e){await ie(e)}}async function vc(e,t,n){const r=E(e);try{const e=await function(e,t){const n=E(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(x(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);bc(r,t,n),wc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Tc(r,e)}catch(n){await ie(n)}}function wc(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function bc(e,t,n){const r=E(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function xc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Ic(e,t)}))}function Ic(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(ya(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),_c(e))}function Ec(e,t,n){for(const r of n)r instanceof oc?(e.Ic.addReference(r.key,t),kc(e,r)):r instanceof sc?(g("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||Ic(e,r.key)):b()}function kc(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(g("SyncEngine","New document in limbo: "+n),e.mc.add(r),_c(e))}function _c(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new $(q.fromString(t)),r=e.Ac.next();e.yc.set(r,new uc(n)),e.gc=e.gc.insert(n,r),ga(e.remoteStore,new Li(Nn(En(n.path)),r,"TargetPurposeLimboResolution",ye.ct))}}async function Tc(e,t,n){const r=E(e),i=[],o=[],s=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{s.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=_s.Li(a.targetId,e);o.push(t)}})))})),await Promise.all(s),r.dc.nu(i),await async function(e,t){const n=E(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>oe.forEach(t,(t=>oe.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>oe.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!le(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,o))}async function Sc(e,t){const n=E(e);if(!n.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const e=await Ns(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new _(k.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Tc(n,e.er)}}function Ac(e,t){const n=E(e),r=n.yc.get(t);if(r&&r.fc)return Xn().add(r.key);{let e=Xn();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}async function Nc(e,t){const n=E(e),r=await Ls(n.localStore,t.query,!0),i=t.view.hc(r);return n.isPrimaryClient&&Ec(n,t.targetId,i.cc),i}async function Cc(e,t){const n=E(e);return Fs(n.localStore,t).then((e=>Tc(n,e)))}async function Rc(e,t,n,r){const i=E(e),o=await function(e,t){const n=E(e),r=E(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Sn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):oe.resolve(null)))))}(i.localStore,t);null!==o?("pending"===n?await Na(i.remoteStore):"acknowledged"===n||"rejected"===n?(bc(i,t,r||null),wc(i,t),function(e,t){E(E(e).mutationQueue).Cn(t)}(i.localStore,t)):b(),await Tc(i,o)):g("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Dc(e,t,n){const r=E(e),i=[],o=[];for(const e of t){let t;const n=r._c.get(e);if(n&&0!==n.length){t=await Os(r.localStore,Nn(n[0]));for(const e of n){const t=r.wc.get(e),n=await Nc(r,t);n.snapshot&&o.push(n.snapshot)}}else{const n=await Ms(r.localStore,e);t=await Os(r.localStore,n),await dc(r,Oc(n),e,!1,t.resumeToken)}i.push(t)}return r.dc.nu(o),i}function Oc(e){return In(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Pc(e){const t=E(e);return E(E(t.localStore).persistence).$i()}async function Lc(e,t,n,r){const i=E(e);if(i.vc)return void g("SyncEngine","Ignoring unexpected query state notification.");const o=i._c.get(t);if(o&&o.length>0)switch(n){case"current":case"not-current":{const e=await Fs(i.localStore,Mn(o[0])),r=Hr.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,ct.EMPTY_BYTE_STRING);await Tc(i,e,r);break}case"rejected":await Ps(i.localStore,t,!0),xc(i,t,r);break;default:b()}}async function Mc(e,t,n){const r=Fc(e);if(r.vc){for(const e of t){if(r._c.has(e)){g("SyncEngine","Adding an already active target "+e);continue}const t=await Ms(r.localStore,e),n=await Os(r.localStore,t);await dc(r,Oc(t),n.targetId,!1,n.resumeToken),ga(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await Ps(r.localStore,e,!1).then((()=>{ya(r.remoteStore,e),xc(r,e)})).catch(ie)}}function Fc(e){const t=E(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=pc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ac.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=gc.bind(null,t),t.dc.nu=Ya.bind(null,t.eventManager),t.dc.Pc=Ja.bind(null,t.eventManager),t}function jc(e){const t=E(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vc.bind(null,t),t}class Uc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return As(this.persistence,new Ts,e.initialUser,this.serializer)}createPersistence(e){return new ms(ys.zs,this.serializer)}createSharedClientState(e){return new Qs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bc extends Uc{constructor(e,t,n){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await jc(this.Vc.syncEngine),await Na(this.Vc.remoteStore),await this.persistence.Ii((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return As(this.persistence,new Ts,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Go(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new ge(t,this.persistence);return new me(e.asyncQueue,n)}createPersistence(e){const t=ks(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Co.withCacheSize(this.cacheSizeBytes):Co.DEFAULT;return new xs(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,ia(),oa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Qs}}class Vc extends Bc{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof Ks&&(this.sharedClientState.syncEngine={jr:Rc.bind(null,t),zr:Lc.bind(null,t),Wr:Mc.bind(null,t),$i:Pc.bind(null,t),Qr:Cc.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii((async e=>{await async function(e,t){const n=E(e);if(Fc(n),jc(n),!0===t&&!0!==n.vc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Dc(n,e.toArray());n.vc=!0,await Ua(n.remoteStore,!0);for(const e of t)ga(n.remoteStore,e)}else if(!1===t&&!1!==n.vc){const e=[];let t=Promise.resolve();n._c.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(xc(n,i),Ps(n.localStore,i,!0)))),ya(n.remoteStore,i)})),await t,await Dc(n,e),function(e){const t=E(e);t.yc.forEach(((e,n)=>{ya(t.remoteStore,n)})),t.Ic.Ts(),t.yc=new Map,t.gc=new Ze($.comparator)}(n),n.vc=!1,await Ua(n.remoteStore,!1)}}(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=ia();if(!Ks.D(t))throw new _(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ks(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ks(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class zc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>mc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sc.bind(null,this.syncEngine),await Ua(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ka}createDatastore(e){const t=sa(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ra(r));var r;return function(e,t,n,r){return new ha(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,r,i,o;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>mc(this.syncEngine,e,0),o=Ys.D()?new Ys:new Xs,new fa(t,n,r,i,o)}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new lc(e,t,n,r,i,o);return s&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=E(e);g("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await ma(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function qc(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
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
 */
/**
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
 */class Wc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):y("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class Gc{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new T,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then((e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Gu)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(null===e)return null;const t=this.xc.decode(e),n=Number(t);isNaN(n)&&this.Mc(`length string (${t}) is not valid number`);const r=await this.$c(n);return new tc(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
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
 */class $c{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new _(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=E(e),r=yi(n.serializer)+"/documents",i={documents:t.map((e=>fi(n.serializer,e)))},o=await n.vo("BatchGetDocuments",r,i,t.length),s=new Map;o.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){x(!!t.found),t.found.name,t.found.updateTime;const n=pi(e,t.found.name),r=li(t.found.updateTime),i=t.found.createTime?li(t.found.createTime):V.min(),o=new Ut({mapValue:{fields:t.found.fields}});return Vt.newFoundDocument(n,r,i,o)}(e,t):"missing"in t?function(e,t){x(!!t.missing),x(!!t.readTime);const n=pi(e,t.missing),r=li(t.readTime);return Vt.newNoDocument(n,r)}(e,t):b()}(n.serializer,e);s.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=s.get(e.toString());x(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Nr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=$.fromPath(t);this.mutations.push(new Cr(n,this.precondition(n)))})),await async function(e,t){const n=E(e),r=yi(n.serializer)+"/documents",i={writes:t.map((e=>xi(n.serializer,e)))};await n.Io("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=V.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new _(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(V.min())?gr.exists(!1):gr.updateTime(t):gr.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(V.min()))throw new _(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gr.updateTime(t)}return gr.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
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
 */class Hc{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new aa(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No((async()=>{const e=new $c(this.datastore),t=this.qc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Uc(e)}))))})).catch((e=>{this.Uc(e)}))}))}qc(e){try{const t=this.updateFunction(e);return!ve(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Lc(),Promise.resolve())))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Fr(t)}return!1}}
/**
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
 */class Kc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=h.UNAUTHENTICATED,this.clientId=M.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=qa(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Qc(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ns(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Xc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Jc(e);g("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>ja(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ja(t.remoteStore,n))),e._onlineComponents=t}function Yc(e){return"FirebaseError"===e.name?e.code===k.FAILED_PRECONDITION||e.code===k.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Jc(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Yc(n))throw n;v("Error using user provided cache. Falling back to memory cache: "+n),await Qc(e,new Uc)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await Qc(e,new Uc);return e._offlineComponents}async function Zc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await Xc(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await Xc(e,new zc))),e._onlineComponents}function eu(e){return Jc(e).then((e=>e.persistence))}function tu(e){return Jc(e).then((e=>e.localStore))}function nu(e){return Zc(e).then((e=>e.remoteStore))}function ru(e){return Zc(e).then((e=>e.syncEngine))}function iu(e){return Zc(e).then((e=>e.datastore))}async function ou(e){const t=await Zc(e),n=t.eventManager;return n.onListen=hc.bind(null,t.syncEngine),n.onUnlisten=fc.bind(null,t.syncEngine),n}function su(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new Wc({next:o=>{t.enqueueAndForget((()=>Xa(e,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new _(k.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new _(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new ec(En(n.path),o,{includeMetadataChanges:!0,Ku:!0});return Qa(e,s)}(await ou(e),e.asyncQueue,t,n,r))),r.promise}function au(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new Wc({next:n=>{t.enqueueAndForget((()=>Xa(e,s))),n.fromCache&&"server"===r.source?i.reject(new _(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new ec(n,o,{includeMetadataChanges:!0,Ku:!0});return Qa(e,s)}(await ou(e),e.asyncQueue,t,n,r))),r.promise}function cu(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?Vr().encode(e):e,function(e,t){return new Gc(e,t)}(function(e,t){if(e instanceof Uint8Array)return qc(e,t);if(e instanceof ArrayBuffer)return qc(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,sa(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=E(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=E(e),r=li(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.qs.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(ic(r));const i=new rc(r,e.localStore,t.serializer);let o=await t.bc();for(;o;){const e=await i.zu(o);e&&n._updateProgress(e),o=await t.bc()}const s=await i.complete();return await Tc(e,s.Ju,void 0),await function(e,t){const n=E(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.qs.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(s.progress),Promise.resolve(s.Hu)}catch(e){return v("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}(await ru(e),i,r)}))}
/**
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
 */
function uu(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const lu=new Map;
/**
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
 */function hu(e,t,n){if(!n)throw new _(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function du(e,t,n,r){if(!0===t&&!0===r)throw new _(k.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function fu(e){if(!$.isDocumentKey(e))throw new _(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function pu(e){if($.isDocumentKey(e))throw new _(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function mu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":b()}function gu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mu(e);throw new _(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function yu(e,t){if(t<=0)throw new _(k.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
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
 */class vu{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new _(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}du("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uu(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new _(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new _(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new _(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wu{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new A;switch(e.type){case"firstParty":return new D(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new _(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lu.get(e);t&&(g("ComponentProvider","Removing Datastore"),lu.delete(e),t.terminate())}(this),Promise.resolve()}}function bu(e,t,n,r={}){var i;const o=(e=gu(e,wu))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&v("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=h.MOCK_USER;else{t=(0,a.createMockUserToken)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new _(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(o)}e._authCredentials=new N(new S(t,n))}}
/**
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
 */class xu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Eu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xu(this.firestore,e,this._key)}}class Iu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Iu(this.firestore,e,this._query)}}class Eu extends Iu{constructor(e,t,n){super(e,t,En(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xu(this.firestore,null,new $(e))}withConverter(e){return new Eu(this.firestore,e,this._path)}}function ku(e,t,...n){if(e=(0,a.getModularInstance)(e),hu("collection","path",t),e instanceof wu){const r=q.fromString(t,...n);return pu(r),new Eu(e,null,r)}{if(!(e instanceof xu||e instanceof Eu))throw new _(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return pu(r),new Eu(e.firestore,null,r)}}function _u(e,t){if(e=gu(e,wu),hu("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new _(k.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Iu(e,null,function(e){return new xn(q.emptyPath(),e)}(t))}function Tu(e,t,...n){if(e=(0,a.getModularInstance)(e),1===arguments.length&&(t=M.A()),hu("doc","path",t),e instanceof wu){const r=q.fromString(t,...n);return fu(r),new xu(e,null,new $(r))}{if(!(e instanceof xu||e instanceof Eu))throw new _(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return fu(r),new xu(e.firestore,e instanceof Eu?e.converter:null,new $(r))}}function Su(e,t){return e=(0,a.getModularInstance)(e),t=(0,a.getModularInstance)(t),(e instanceof xu||e instanceof Eu)&&(t instanceof xu||t instanceof Eu)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Au(e,t){return e=(0,a.getModularInstance)(e),t=(0,a.getModularInstance)(t),e instanceof Iu&&t instanceof Iu&&e.firestore===t.firestore&&Dn(e._query,t._query)&&e.converter===t.converter
/**
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
 */}class Nu{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new aa(this,"async_queue_retry"),this.Xc=()=>{const e=oa();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=oa();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=oa();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new T;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!le(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw y("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=za.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&b()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Cu(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class Ru{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
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
 */const Du=-1;class Ou extends wu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Nu,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Lu(this),this._firestoreClient.terminate()}}function Pu(e){return e._firestoreClient||Lu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Lu(e){var t,n,r;const i=e._freezeSettings(),o=function(e,t,n,r){return new gt(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,uu(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Kc(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function Mu(e,t){Gu(e=gu(e,Ou));const n=Pu(e);if(n._uninitializedComponentsProvider)throw new _(k.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new zc;return ju(n,i,new Bc(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Fu(e){Gu(e=gu(e,Ou));const t=Pu(e);if(t._uninitializedComponentsProvider)throw new _(k.FAILED_PRECONDITION,"SDK cache is already specified.");v("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new zc;return ju(t,r,new Vc(r,n.cacheSizeBytes))}function ju(e,t,n){const r=new T;return e.asyncQueue.enqueue((async()=>{try{await Qc(e,n),await Xc(e,t),r.resolve()}catch(e){const t=e;if(!Yc(t))throw t;v("Error enabling indexeddb cache. Falling back to memory cache: "+t),r.reject(t)}})).then((()=>r.promise))}function Uu(e){if(e._initialized&&!e._terminated)throw new _(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new T;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!ae.D())return Promise.resolve();const t=e+"main";await ae.delete(t)}(ks(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Bu(e){return function(e){const t=new T;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t){const n=E(e);Ia(n.remoteStore)||g("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=E(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Ec.get(e)||[];r.push(t),n.Ec.set(e,r)}catch(e){const n=qa(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await ru(e),t))),t.promise}(Pu(e=gu(e,Ou)))}function Vu(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await eu(e),n=await nu(e);return t.setNetworkEnabled(!0),function(e){const t=E(e);return t.vu.delete(0),pa(t)}(n)}))}(Pu(e=gu(e,Ou)))}function zu(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await eu(e),n=await nu(e);return t.setNetworkEnabled(!1),async function(e){const t=E(e);t.vu.add(0),await ma(t),t.bu.set("Offline")}(n)}))}(Pu(e=gu(e,Ou)))}function qu(e,t){const n=Pu(e=gu(e,Ou)),r=new Ru;return cu(n,e._databaseId,t,r),r}function Wu(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=E(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.qs.getNamedQuery(e,t)))}(await tu(e),t)))}(Pu(e=gu(e,Ou)),t).then((t=>t?new Iu(e,null,t.query):null))}function Gu(e){if(e._initialized||e._terminated)throw new _(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */
/**
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
 */
class $u{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $u(ct.fromBase64String(e))}catch(e){throw new _(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new $u(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Hu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new _(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class Ku{constructor(e){this._methodName=e}}
/**
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
 */class Qu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}
/**
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
 */const Xu=/^__.*__$/;class Yu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new _r(e,this.data,this.fieldMask,t,this.fieldTransforms):new kr(e,this.data,t,this.fieldTransforms)}}class Ju{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new _r(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class el{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new el(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return bl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Zu(this.ca)&&Xu.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class tl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sa(e)}ya(e,t,n,r=!1){return new el({ca:e,methodName:t,ga:n,path:G.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nl(e){const t=e._freezeSettings(),n=sa(e._databaseId);return new tl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rl(e,t,n,r,i,o={}){const s=e.ya(o.merge||o.mergeFields?2:0,t,n,i);gl("Data must be an object, but it was:",s,r);const a=pl(r,s);let c,u;if(o.merge)c=new ot(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=yl(t,r,n);if(!s.contains(i))throw new _(k.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);xl(e,i)||e.push(i)}c=new ot(e),u=s.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=s.fieldTransforms;return new Yu(new Ut(a),c,u)}class il extends Ku{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof il}}function ol(e,t,n){return new el({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class sl extends Ku{_toFieldTransform(e){return new pr(e.path,new sr)}isEqual(e){return e instanceof sl}}class al extends Ku{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=ol(this,e,!0),n=this.pa.map((e=>fl(e,t))),r=new ar(n);return new pr(e.path,r)}isEqual(e){return this===e}}class cl extends Ku{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=ol(this,e,!0),n=this.pa.map((e=>fl(e,t))),r=new ur(n);return new pr(e.path,r)}isEqual(e){return this===e}}class ul extends Ku{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new hr(e.serializer,tr(e.serializer,this.Ia));return new pr(e.path,t)}isEqual(e){return this===e}}function ll(e,t,n,r){const i=e.ya(1,t,n);gl("Data must be an object, but it was:",i,r);const o=[],s=Ut.empty();Ye(r,((e,r)=>{const c=wl(t,e,n);r=(0,a.getModularInstance)(r);const u=i.da(c);if(r instanceof il)o.push(c);else{const e=fl(r,u);null!=e&&(o.push(c),s.set(c,e))}}));const c=new ot(o);return new Ju(s,c,i.fieldTransforms)}function hl(e,t,n,r,i,o){const s=e.ya(1,t,n),c=[yl(t,r,n)],u=[i];if(o.length%2!=0)throw new _(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<o.length;e+=2)c.push(yl(t,o[e])),u.push(o[e+1]);const l=[],h=Ut.empty();for(let e=c.length-1;e>=0;--e)if(!xl(l,c[e])){const t=c[e];let n=u[e];n=(0,a.getModularInstance)(n);const r=s.da(t);if(n instanceof il)l.push(t);else{const e=fl(n,r);null!=e&&(l.push(t),h.set(t,e))}}const d=new ot(l);return new Ju(h,d,s.fieldTransforms)}function dl(e,t,n,r=!1){return fl(n,e.ya(r?4:3,t))}function fl(e,t){if(ml(e=(0,a.getModularInstance)(e)))return gl("Unsupported field value:",t,e),pl(e,t);if(e instanceof Ku)return function(e,t){if(!Zu(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=fl(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return tr(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=B.fromDate(e);return{timestampValue:ai(t.serializer,n)}}if(e instanceof B){const n=new B(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ai(t.serializer,n)}}if(e instanceof Qu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof $u)return{bytesValue:ci(t.serializer,e._byteString)};if(e instanceof xu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:hi(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${mu(e)}`)}(e,t)}function pl(e,t){const n={};return Je(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ye(e,((e,r)=>{const i=fl(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function ml(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof B||e instanceof Qu||e instanceof $u||e instanceof xu||e instanceof Ku)}function gl(e,t,n){if(!ml(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=mu(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function yl(e,t,n){if((t=(0,a.getModularInstance)(t))instanceof Hu)return t._internalPath;if("string"==typeof t)return wl(e,t);throw bl("Field path arguments must be of type string or ",e,!1,void 0,n)}const vl=new RegExp("[~\\*/\\[\\]]");function wl(e,t,n){if(t.search(vl)>=0)throw bl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Hu(...t.split("."))._internalPath}catch(r){throw bl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function bl(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new _(k.INVALID_ARGUMENT,a+e+c)}function xl(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class Il{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new El(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class El extends Il{data(){return super.data()}}function kl(e,t){return"string"==typeof t?wl(e,t):t instanceof Hu?t._internalPath:t._delegate._internalPath}
/**
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
 */function _l(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new _(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tl{}class Sl extends Tl{}function Al(e,t,...n){let r=[];t instanceof Tl&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Rl)).length,n=e.filter((e=>e instanceof Nl)).length;if(t>1||t>0&&n>0)throw new _(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class Nl extends Sl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Nl(e,t,n)}_apply(e){const t=this._parse(e);return $l(e._query,t),new Iu(e.firestore,e.converter,Cn(e._query,t))}_parse(e){const t=nl(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new _(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Gl(s,o);const t=[];for(const n of s)t.push(Wl(r,e,n));a={arrayValue:{values:t}}}else a=Wl(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Gl(s,o),a=dl(n,"where",s,"in"===o||"not-in"===o);return Kt.create(i,o,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Cl(e,t,n){const r=t,i=kl("where",e);return Nl._create(i,r,n)}class Rl extends Tl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rl(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Qt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)$l(n,e),n=Cn(n,e)}(e._query,t),new Iu(e.firestore,e.converter,Cn(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Dl extends Sl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Dl(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new _(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new _(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Gt(t,n);return function(e,t){if(null===_n(e)){const n=Tn(e);null!==n&&Hl(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Iu(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new xn(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Ol(e,t="asc"){const n=t,r=kl("orderBy",e);return Dl._create(r,n)}class Pl extends Sl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Pl(e,t,n)}_apply(e){return new Iu(e.firestore,e.converter,Rn(e._query,this._limit,this._limitType))}}function Ll(e){return yu("limit",e),Pl._create("limit",e,"F")}function Ml(e){return yu("limitToLast",e),Pl._create("limitToLast",e,"L")}class Fl extends Sl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Fl(e,t,n)}_apply(e){const t=ql(e,this.type,this._docOrFields,this._inclusive);return new Iu(e.firestore,e.converter,function(e,t){return new xn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function jl(...e){return Fl._create("startAt",e,!0)}function Ul(...e){return Fl._create("startAfter",e,!1)}class Bl extends Sl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Bl(e,t,n)}_apply(e){const t=ql(e,this.type,this._docOrFields,this._inclusive);return new Iu(e.firestore,e.converter,function(e,t){return new xn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Vl(...e){return Bl._create("endBefore",e,!1)}function zl(...e){return Bl._create("endAt",e,!0)}function ql(e,t,n,r){if(n[0]=(0,a.getModularInstance)(n[0]),n[0]instanceof Il)return function(e,t,n,r,i){if(!r)throw new _(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const n of An(e))if(n.field.isKeyField())o.push(St(t,r.key));else{const e=r.data.field(n.field);if(ft(e))throw new _(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new _(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}o.push(e)}return new zt(o,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=nl(e.firestore);return function(e,t,n,r,i,o){const s=e.explicitOrderBy;if(i.length>s.length)throw new _(k.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let o=0;o<i.length;o++){const c=i[o];if(s[o].field.isKeyField()){if("string"!=typeof c)throw new _(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!Sn(e)&&-1!==c.indexOf("/"))throw new _(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(q.fromString(c));if(!$.isDocumentKey(n))throw new _(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new $(n);a.push(St(t,i))}else{const e=dl(n,r,c);a.push(e)}}return new zt(a,o)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Wl(e,t,n){if("string"==typeof(n=(0,a.getModularInstance)(n))){if(""===n)throw new _(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sn(t)&&-1!==n.indexOf("/"))throw new _(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(q.fromString(n));if(!$.isDocumentKey(r))throw new _(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return St(e,new $(r))}if(n instanceof xu)return St(e,n._key);throw new _(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mu(n)}.`)}function Gl(e,t){if(!Array.isArray(e)||0===e.length)throw new _(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function $l(e,t){if(t.isInequality()){const n=Tn(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new _(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=_n(e);null!==i&&Hl(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new _(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Hl(e,t,n){if(!n.isEqual(t))throw new _(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Kl{convertValue(e,t="none"){switch(bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ye(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Qu(ht(e.latitude),ht(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=pt(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(mt(e));default:return null}}convertTimestamp(e){const t=lt(e);return new B(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=q.fromString(e);x(Pi(n));const r=new yt(n.get(1),n.get(3)),i=new $(n.popFirst(5));return r.isEqual(t)||y(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */function Ql(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Xl extends Kl{constructor(e){super(),this.firestore=e}convertBytes(e){return new $u(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xu(this.firestore,null,t)}}
/**
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
 */
/**
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
 */
class Yl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jl extends Il{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(kl("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Zl extends Jl{data(e={}){return super.data(e)}}class eh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Yl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Zl(this._firestore,this._userDataWriter,n.key,n,new Yl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Zl(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Yl(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Zl(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Yl(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:th(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function th(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function nh(e,t){return e instanceof Jl&&t instanceof Jl?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof eh&&t instanceof eh&&e._firestore===t._firestore&&Au(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
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
 */function rh(e){e=gu(e,xu);const t=gu(e.firestore,Ou);return su(Pu(t),e._key).then((n=>yh(t,e,n)))}class ih extends Kl{constructor(e){super(),this.firestore=e}convertBytes(e){return new $u(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xu(this.firestore,null,t)}}function oh(e){e=gu(e,xu);const t=gu(e.firestore,Ou),n=Pu(t),r=new ih(t);return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=E(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new _(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=qa(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await tu(e),t,n))),n.promise}(n,e._key).then((n=>new Jl(t,r,e._key,n,new Yl(null!==n&&n.hasLocalMutations,!0),e.converter)))}function sh(e){e=gu(e,xu);const t=gu(e.firestore,Ou);return su(Pu(t),e._key,{source:"server"}).then((n=>yh(t,e,n)))}function ah(e){e=gu(e,Iu);const t=gu(e.firestore,Ou),n=Pu(t),r=new ih(t);return _l(e._query),au(n,e._query).then((n=>new eh(t,r,e,n)))}function ch(e){e=gu(e,Iu);const t=gu(e.firestore,Ou),n=Pu(t),r=new ih(t);return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Ls(e,t,!0),i=new ac(t,r.ir),o=i.sc(r.documents),s=i.applyChanges(o,!1);n.resolve(s.snapshot)}catch(e){const r=qa(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await tu(e),t,n))),n.promise}(n,e._query).then((n=>new eh(t,r,e,n)))}function uh(e){e=gu(e,Iu);const t=gu(e.firestore,Ou),n=Pu(t),r=new ih(t);return au(n,e._query,{source:"server"}).then((n=>new eh(t,r,e,n)))}function lh(e,t,n){e=gu(e,xu);const r=gu(e.firestore,Ou),i=Ql(e.converter,t,n);return gh(r,[rl(nl(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,gr.none())])}function hh(e,t,n,...r){e=gu(e,xu);const i=gu(e.firestore,Ou),o=nl(i);let s;return s="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof Hu?hl(o,"updateDoc",e._key,t,n,r):ll(o,"updateDoc",e._key,t),gh(i,[s.toMutation(e._key,gr.exists(!0))])}function dh(e){return gh(gu(e.firestore,Ou),[new Nr(e._key,gr.none())])}function fh(e,t){const n=gu(e.firestore,Ou),r=Tu(e),i=Ql(e.converter,t);return gh(n,[rl(nl(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,gr.exists(!1))]).then((()=>r))}function ph(e,...t){var n,r,i;e=(0,a.getModularInstance)(e);let o={includeMetadataChanges:!1},s=0;"object"!=typeof t[s]||Cu(t[s])||(o=t[s],s++);const c={includeMetadataChanges:o.includeMetadataChanges};if(Cu(t[s])){const e=t[s];t[s]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[s+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[s+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof xu)l=gu(e.firestore,Ou),h=En(e._key.path),u={next:n=>{t[s]&&t[s](yh(l,e,n))},error:t[s+1],complete:t[s+2]};else{const n=gu(e,Iu);l=gu(n.firestore,Ou),h=n._query;const r=new ih(l);u={next:e=>{t[s]&&t[s](new eh(l,r,n,e))},error:t[s+1],complete:t[s+2]},_l(e._query)}return function(e,t,n,r){const i=new Wc(r),o=new ec(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Qa(await ou(e),o))),()=>{i.Dc(),e.asyncQueue.enqueueAndForget((async()=>Xa(await ou(e),o)))}}(Pu(l),h,c,u)}function mh(e,t){return function(e,t){const n=new Wc(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){E(e).ku.add(t),t.next()}(await ou(e),n))),()=>{n.Dc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){E(e).ku.delete(t)}(await ou(e),n)))}}(Pu(e=gu(e,Ou)),Cu(t)?t:{next:t})}function gh(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=jc(e);try{const e=await function(e,t){const n=E(e),r=B.now(),i=t.reduce(((e,t)=>e.add(t.key)),Xn());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Vn(),c=Xn();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{o=i;const s=[];for(const e of t){const t=Ir(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new _r(e.key,t,Bt(t.value.mapValue),gr.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)})).next((t=>{s=t;const r=t.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:Wn(o)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Ze(F)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Tc(r,e.changes),await Na(r.remoteStore)}catch(e){const t=qa(e,"Failed to persist write");n.reject(t)}}(await ru(e),t,n))),n.promise}(Pu(e),t)}function yh(e,t,n){const r=n.docs.get(t._key),i=new ih(e);return new Jl(e,i,t._key,r,new Yl(n.hasPendingWrites,n.fromCache),t.converter)}
/**
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
 */
/**
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
 */
const vh={maxAttempts:5};
/**
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
 */class wh{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=nl(e)}set(e,t,n){this._verifyNotCommitted();const r=bh(e,this._firestore),i=Ql(r.converter,t,n),o=rl(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(o.toMutation(r._key,gr.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=bh(e,this._firestore);let o;return o="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof Hu?hl(this._dataReader,"WriteBatch.update",i._key,t,n,r):ll(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,gr.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=bh(e,this._firestore);return this._mutations=this._mutations.concat(new Nr(t._key,gr.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new _(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function bh(e,t){if((e=(0,a.getModularInstance)(e)).firestore!==t)throw new _(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
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
 */
/**
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
 */class xh extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=nl(e)}get(e){const t=bh(e,this._firestore),n=new Xl(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return b();const r=e[0];if(r.isFoundDocument())return new Il(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Il(this._firestore,n,t._key,null,t.converter);throw b()}))}set(e,t,n){const r=bh(e,this._firestore),i=Ql(r.converter,t,n),o=rl(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,o),this}update(e,t,n,...r){const i=bh(e,this._firestore);let o;return o="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof Hu?hl(this._dataReader,"Transaction.update",i._key,t,n,r):ll(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=bh(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=bh(e,this._firestore),n=new ih(this._firestore);return super.get(e).then((e=>new Jl(this._firestore,n,t._key,e._document,new Yl(!1,!1),t.converter)))}}function Ih(e,t,n){e=gu(e,Ou);const r=Object.assign(Object.assign({},vh),n);return function(e){if(e.maxAttempts<1)throw new _(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new T;return e.asyncQueue.enqueueAndForget((async()=>{const i=await iu(e);new Hc(e.asyncQueue,i,n,t,r).run()})),r.promise}(Pu(e),(n=>t(new xh(e,n))),r)}
/**
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
 */function Eh(){return new il("deleteField")}function kh(){return new sl("serverTimestamp")}function _h(...e){return new al("arrayUnion",e)}function Th(...e){return new cl("arrayRemove",e)}function Sh(e){return new ul("increment",e)}
/**
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
 */!function(e,t=!0){!function(e){d=e}(r.SDK_VERSION),(0,r._registerComponent)(new(0,i.Component)("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new Ou(new C(e.getProvider("auth-internal")),new P(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yt(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(l,"3.12.0",e),(0,r.registerVersion)(l,"3.12.0","esm2017")}()})),o.register("ix4Jr",(function(t,n){e(t.exports,"_DEFAULT_ENTRY_NAME",(function(){return d})),e(t.exports,"_apps",(function(){return p})),e(t.exports,"_components",(function(){return m})),e(t.exports,"_addComponent",(function(){return g})),e(t.exports,"_addOrOverwriteComponent",(function(){return y})),e(t.exports,"_registerComponent",(function(){return v})),e(t.exports,"_getProvider",(function(){return w})),e(t.exports,"_removeServiceInstance",(function(){return b})),e(t.exports,"_clearComponents",(function(){return x})),e(t.exports,"SDK_VERSION",(function(){return _})),e(t.exports,"initializeApp",(function(){return T})),e(t.exports,"getApp",(function(){return S})),e(t.exports,"getApps",(function(){return A})),e(t.exports,"deleteApp",(function(){return N})),e(t.exports,"registerVersion",(function(){return C})),e(t.exports,"onLog",(function(){return R})),e(t.exports,"setLogLevel",(function(){return D})),e(t.exports,"FirebaseError",(function(){return o("ffjl9").FirebaseError}));var r=o("4a6xH"),i=o("7vF8m"),s=o("ffjl9"),a=(s=o("ffjl9"),o("cCiiD"));
/**
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
 */
class c{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const u="@firebase/app",l="0.9.10",h=new(0,i.Logger)("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e,t){e.container.addOrOverwriteComponent(t)}function v(e){const t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of p.values())g(t,e);return!0}function w(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function b(e,t,n=d){w(e,t).clearInstance(n)}function x(){m.clear()}
/**
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
 */const I={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,s.ErrorFactory)("app","Firebase",I);
/**
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
 */
class k{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}}
/**
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
 */const _="9.22.0";function T(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw E.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.getDefaultAppConfig)()),!n)throw E.create("no-options");const a=p.get(o);if(a){if((0,s.deepEqual)(n,a.options)&&(0,s.deepEqual)(i,a.config))return a;throw E.create("duplicate-app",{appName:o})}const c=new(0,r.ComponentContainer)(o);for(const e of m.values())c.addComponent(e);const u=new k(n,i,c);return p.set(o,u),u}function S(e=d){const t=p.get(e);if(!t&&e===d&&(0,s.getDefaultAppConfig)())return T();if(!t)throw E.create("no-app",{appName:e});return t}function A(){return Array.from(p.values())}async function N(e){const t=e.name;p.has(t)&&(p.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function C(e,t,n){var i;let o=null!==(i=f[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}v(new(0,r.Component)(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function R(e,t){if(null!==e&&"function"!=typeof e)throw E.create("invalid-log-argument");(0,i.setUserLogHandler)(e,t)}function D(e){(0,i.setLogLevel)(e)}
/**
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
 */const O="firebase-heartbeat-database",P=1,L="firebase-heartbeat-store";let M=null;function F(){return M||(M=(0,a.openDB)(O,P,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(L)}}).catch((e=>{throw E.create("idb-open",{originalErrorMessage:e.message})}))),M}async function j(e,t){try{const n=(await F()).transaction(L,"readwrite"),r=n.objectStore(L);await r.put(t,U(e)),await n.done}catch(e){if(e instanceof s.FirebaseError)h.warn(e.message);else{const t=E.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function U(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class B{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new z(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=V();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=V(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),q(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),q(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function V(){return(new Date).toISOString().substring(0,10)}class z{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.isIndexedDBAvailable)()&&(0,s.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await F();return await t.transaction(L).objectStore(L).get(U(e))}catch(e){if(e instanceof s.FirebaseError)h.warn(e.message);else{const t=E.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return j(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return j(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function q(e){return(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var W;W="",v(new(0,r.Component)("platform-logger",(e=>new c(e)),"PRIVATE")),v(new(0,r.Component)("heartbeat",(e=>new B(e)),"PRIVATE")),C(u,l,W),C(u,l,"esm2017"),C("fire-js","")})),o.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return i})),e(t.exports,"ComponentContainer",(function(){return c}));var r=o("ffjl9");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,r.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===s?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),o.register("ffjl9",(function(n,r){e(n.exports,"base64urlEncodeWithoutPadding",(function(){return u})),e(n.exports,"base64Decode",(function(){return l})),e(n.exports,"deepExtend",(function(){return h})),e(n.exports,"getDefaultEmulatorHost",(function(){return p})),e(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return m})),e(n.exports,"getDefaultAppConfig",(function(){return g})),e(n.exports,"getExperimentalSetting",(function(){return y})),e(n.exports,"Deferred",(function(){return v})),e(n.exports,"createMockUserToken",(function(){return w})),e(n.exports,"getUA",(function(){return b})),e(n.exports,"isMobileCordova",(function(){return x})),e(n.exports,"isNode",(function(){return I})),e(n.exports,"isBrowser",(function(){return E})),e(n.exports,"isBrowserExtension",(function(){return k})),e(n.exports,"isReactNative",(function(){return _})),e(n.exports,"isIE",(function(){return T})),e(n.exports,"isSafari",(function(){return S})),e(n.exports,"isIndexedDBAvailable",(function(){return A})),e(n.exports,"validateIndexedDBOpenable",(function(){return N})),e(n.exports,"FirebaseError",(function(){return C})),e(n.exports,"ErrorFactory",(function(){return R})),e(n.exports,"contains",(function(){return O})),e(n.exports,"isEmpty",(function(){return P})),e(n.exports,"deepEqual",(function(){return L})),e(n.exports,"querystring",(function(){return F})),e(n.exports,"querystringDecode",(function(){return j})),e(n.exports,"extractQuerystring",(function(){return U})),e(n.exports,"createSubscribe",(function(){return B})),e(n.exports,"getModularInstance",(function(){return q}));
/**
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
 */
var i=o("4TNnu");const s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw new c;const u=i<<2|o>>4;if(r.push(u),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){return function(e){const t=s(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},l=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=h(e[n],t[n]));return e}
/**
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
 */
const d=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,f=()=>{try{return d()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&l(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{var t,n;return null===(n=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=p(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(o)),""].join(".")}
/**
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
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function x(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function I(){var e;const n=null===(e=f())||void 0===e?void 0:e.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function E(){return"object"==typeof self&&self.self===self}function k(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function _(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){return!I()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"==typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(D,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new C(r,s,n)}}const D=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(M(n)&&M(o)){if(!L(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function M(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function F(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function B(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(){}
/**
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
 */
/**
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
 */
function q(e){return e&&e._delegate?e._delegate:e}})),o.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return l})),e(t.exports,"setLogLevel",(function(){return h})),e(t.exports,"setUserLogHandler",(function(){return d}));
/**
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
 */
const r=[];var i,o;(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=c[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function h(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}})),o.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return i}));var r=o("ekHjI");r=o("ekHjI");function i(e,t,{blocked:n,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),c=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(e=>{i((0,r.w)(a.result),e.oldVersion,e.newVersion,(0,r.w)(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),c.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),c}const s=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(c.get(t))return c.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!s.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return c.set(t,o),o}(0,r.r)((e=>({...e,get:(t,n,r)=>u(t,n)||e.get(t,n,r),has:(t,n)=>!!u(t,n)||e.has(t,n)})))})),o.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return m})),e(t.exports,"r",(function(){return d}));const r=(e,t)=>t.some((t=>e instanceof t));let i,o;const s=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap,l=new WeakMap;let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){h=e(h)}function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),m(s.get(this))}:function(...t){return m(e.apply(g(this),t))}:function(t,...n){const r=e.call(g(this),t,...n);return c.set(r,t.sort?t.sort():[t]),m(r)}}function p(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));a.set(e,t)}(e),r(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e)}function m(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(m(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&s.set(t,e)})).catch((()=>{})),l.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=p(e);return t!==e&&(u.set(e,t),l.set(t,e)),t}const g=e=>l.get(e)})),o.register("4bwHs",(function(n,r){e(n.exports,"createWebChannelTransport",(function(){return yr})),e(n.exports,"getStatEventTarget",(function(){return vr})),e(n.exports,"ErrorCode",(function(){return wr})),e(n.exports,"EventType",(function(){return br})),e(n.exports,"Event",(function(){return xr})),e(n.exports,"Stat",(function(){return Ir})),e(n.exports,"FetchXmlHttpFactory",(function(){return Er})),e(n.exports,"WebChannel",(function(){return kr})),e(n.exports,"XhrIo",(function(){return _r})),e(n.exports,"Md5",(function(){return Tr})),e(n.exports,"Integer",(function(){return Sr}));var i,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},s={},a=a||{},c=o||self;function u(){}function l(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m).apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function w(){this.s=this.s,this.o=this.o}w.prototype.s=!1,w.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f))},w.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function x(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function I(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(l(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function E(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{c.addEventListener("test",u,t),c.removeEventListener("test",u,t)}catch(e){}return e}();function _(e){return/^[\s\xa0]*$/.test(e)}var T=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function S(e,t){return e<t?-1:e>t?1:0}function A(){var e=c.navigator;return e&&(e=e.userAgent)?e:""}function N(e){return-1!=A().indexOf(e)}function C(e){return C[" "](e),e}function R(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}C[" "]=u;var D,O,P=N("Opera"),L=N("Trident")||N("MSIE"),M=N("Edge"),F=M||L,j=N("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),U=-1!=A().toLowerCase().indexOf("webkit")&&!N("Edge");function B(){var e=c.document;return e?e.documentMode:void 0}e:{var V="",z=(O=A(),j?/rv:([^\);]+)(\)|;)/.exec(O):M?/Edge\/([\d\.]+)/.exec(O):L?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(O):U?/WebKit\/(\S+)/.exec(O):P?/(?:Version)[ \/]?(\S+)/.exec(O):void 0);if(z&&(V=z?z[1]:""),L){var q=B();if(null!=q&&q>parseFloat(V)){D=String(q);break e}}D=V}var W,G={};if(c.document&&L){var $=B();W=$||(parseInt(D,10)||void 0)}else W=void 0;var H=W;function K(e,t){if(E.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{C(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.$.h.call(this)}}v(K,E);var Q={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function te(e){const t={};for(const n in e)t[n]=e[n];return t}const ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<ne.length;t++)n=ne[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ie(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=b(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function se(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}ie.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=se(e,t,r,i);return-1<s?(t=e[s],n||(t.ia=!1)):((t=new J(t,this.src,o,!!r,i)).ia=n,e.push(t)),t};var ae="closure_lm_"+(1e6*Math.random()|0),ce={};function ue(e,t,n,r,i){if(r&&r.once)return he(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)ue(e,t[o],n,r,i);return null}return n=ve(n),e&&e[X]?e.O(t,n,h(r)?!!r.capture:!!r,i):le(e,t,n,!1,r,i)}function le(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=h(i)?!!i.capture:!!i,a=ge(e);if(a||(e[ae]=a=new ie(e)),(n=a.add(t,n,r,s,o)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=me;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)k||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(pe(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function he(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)he(e,t[o],n,r,i);return null}return n=ve(n),e&&e[X]?e.P(t,n,h(r)?!!r.capture:!!r,i):le(e,t,n,!0,r,i)}function de(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)de(e,t[o],n,r,i);else r=h(r)?!!r.capture:!!r,n=ve(n),e&&e[X]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=se(o=e.g[t],n,r,i))&&(Z(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=ge(e))&&(t=e.g[t.toString()],e=-1,t&&(e=se(t,n,r,i)),(n=-1<e?t[e]:null)&&fe(n))}function fe(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[X])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(pe(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ge(t))?(oe(n,e),0==n.h&&(n.src=null,t[ae]=null)):Z(e)}}}function pe(e){return e in ce?ce[e]:ce[e]="on"+e}function me(e,t){if(e.fa)e=!0;else{t=new K(t,this);var n=e.listener,r=e.la||e.src;e.ia&&fe(e),e=n.call(r,t)}return e}function ge(e){return(e=e[ae])instanceof ie?e:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(e){return"function"==typeof e?e:(e[ye]||(e[ye]=function(t){return e.handleEvent(t)}),e[ye])}function we(){w.call(this),this.i=new ie(this),this.S=this,this.J=null}function be(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new E(t,e);else if(t instanceof E)t.target=t.target||e;else{var i=t;re(t=new E(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=xe(s,r,!0,t)&&i}if(i=xe(s=t.g=e,r,!0,t)&&i,i=xe(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=xe(s=t.g=n[o],r,!1,t)&&i}function xe(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,c=s.la||s.src;s.ia&&oe(e.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(we,w),we.prototype[X]=!0,we.prototype.removeEventListener=function(e,t,n,r){de(this,e,t,n,r)},we.prototype.N=function(){if(we.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Z(n[r]);delete t.g[e],t.h--}}this.J=null},we.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},we.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ie=c.JSON.stringify;function Ee(){var e=Ce;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var ke,_e=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Te),(e=>e.reset()));class Te{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Se(e){c.setTimeout((()=>{throw e}),0)}function Ae(e,t){ke||function(){var e=c.Promise.resolve(void 0);ke=function(){e.then(Re)}}(),Ne||(ke(),Ne=!0),Ce.add(e,t)}var Ne=!1,Ce=new class{constructor(){this.h=this.g=null}add(e,t){const n=_e.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Re(){for(var e;e=Ee();){try{e.h.call(e.g)}catch(e){Se(e)}var t=_e;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ne=!1}function De(e,t){we.call(this),this.h=e||1,this.g=t||c,this.j=g(this.qb,this),this.l=Date.now()}function Oe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Pe(e,t,n){if("function"==typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:c.setTimeout(e,t||0)}function Le(e){e.g=Pe((()=>{e.g=null,e.i&&(e.i=!1,Le(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(De,we),(i=De.prototype).ga=!1,i.T=null,i.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),be(this,"tick"),this.ga&&(Oe(this),this.start()))}},i.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.N=function(){De.$.N.call(this),Oe(this),delete this.g};class Me extends w{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(e){w.call(this),this.h=e,this.g={}}v(Fe,w);var je=[];function Ue(e,t,n,r){Array.isArray(n)||(n&&(je[0]=n.toString()),n=je);for(var i=0;i<n.length;i++){var o=ue(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Be(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&fe(e)}),e),e.g={}}function Ve(){this.g=!0}function ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ie(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Fe.prototype.N=function(){Fe.$.N.call(this),Be(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ve.prototype.Ea=function(){this.g=!1},Ve.prototype.info=function(){};var qe={},We=null;function Ge(){return We=We||new we}function $e(e){E.call(this,qe.Ta,e)}function He(e){const t=Ge();be(t,new $e(t))}function Ke(e,t){E.call(this,qe.STAT_EVENT,e),this.stat=t}function Qe(e){const t=Ge();be(t,new Ke(t,e))}function Xe(e,t){E.call(this,qe.Ua,e),this.size=t}function Ye(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){e()}),t)}qe.Ta="serverreachability",v($e,E),qe.STAT_EVENT="statevent",v(Ke,E),qe.Ua="timingevent",v(Xe,E);var Je={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ze={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function et(){}function tt(e){return e.h||(e.h=e.i())}function nt(){}et.prototype.h=null;var rt,it={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ot(){E.call(this,"d")}function st(){E.call(this,"c")}function at(){}function ct(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Fe(this),this.P=lt,e=F?125:void 0,this.V=new De(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ut}function ut(){this.i=null,this.g="",this.h=!1}v(ot,E),v(st,E),v(at,et),at.prototype.g=function(){return new XMLHttpRequest},at.prototype.i=function(){return{}},rt=new at;var lt=45e3,ht={},dt={};function ft(e,t,n){e.L=1,e.v=Dt(St(t)),e.s=n,e.S=!0,pt(e,null)}function pt(e,t){e.G=Date.now(),vt(e),e.A=St(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Gt(n.i,"t",r),e.C=0,n=e.l.I,e.h=new ut,e.g=Gn(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Me(g(e.Pa,e,e.g),e.O)),Ue(e.U,e.g,"readystatechange",e.nb),t=e.I?te(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),He(),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function mt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function gt(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=yt(e,n),r==dt){4==t&&(e.o=4,Qe(14),i=!1),ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==ht){e.o=4,Qe(15),ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}ze(e.j,e.m,r,null),Et(e,r)}mt(e)&&r!=dt&&r!=ht&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Qe(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(t),t.L=!0,Qe(11))):(ze(e.j,e.m,n,"[Invalid Chunked Response]"),It(e),xt(e))}function yt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?dt:(n=Number(t.substring(n,r)),isNaN(n)?ht:(r+=1)+n>t.length?dt:(t=t.substr(r,n),e.C=r+n,t))}function vt(e){e.Y=Date.now()+e.P,wt(e,e.P)}function wt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ye(g(e.lb,e),t)}function bt(e){e.B&&(c.clearTimeout(e.B),e.B=null)}function xt(e){0==e.l.H||e.J||Bn(e.l,e)}function It(e){bt(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,Oe(e.V),Be(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Et(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Yt(n.h,e)))if(!e.K&&Yt(n.h,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Un(n),Nn(n)}Mn(n),Qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=Ye(g(n.ib,n),6e3));if(1>=Xt(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else zn(n,11)}else if((e.K||n.g==e)&&Un(n),!_(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const t=u[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Jt(o,o.h),o.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Rt(r.G,r.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var s=e;if((r=n).wa=Wn(r,r.I?r.oa:null,r.Y),s.K){Zt(r.h,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(bt(a),vt(a)),r.g=s}else Ln(r);0<n.i.length&&Rn(n)}else"stop"!=u[0]&&"close"!=u[0]||zn(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?zn(n,7):An(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}He()}catch(e){}}function kt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(l(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}(i=ct.prototype).setTimeout=function(e){this.P=e},i.nb=function(e){e=e.target;const t=this.M;t&&3==In(e)?t.l():this.Pa(e)},i.Pa=function(e){try{if(e==this.g)e:{const h=In(this.g);var t=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||F||this.g&&(this.h.h||this.g.ja()||En(this.g)))){this.J||4!=h||7==t||He(),bt(this);var n=this.g.da();this.aa=n;t:if(mt(this)){var r=En(this.g);e="";var i=r.length,o=4==In(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){It(this),xt(this);var s="";break t}this.h.i=new c.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Qe(12),It(this),xt(this);break e}ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Et(this,n)}this.S?(gt(this,h,s),F&&this.i&&3==h&&(Ue(this.U,this.V,"tick",this.mb),this.V.start())):(ze(this.j,this.m,s,null),Et(this,s)),4==h&&It(this),this.i&&!this.J&&(4==h?Bn(this.l,this):(this.i=!1,vt(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),It(this),xt(this)}}}catch(e){}},i.mb=function(){if(this.g){var e=In(this.g),t=this.g.ja();this.C<t.length&&(bt(this),gt(this,e,t),this.i&&4!=e&&vt(this))}},i.cancel=function(){this.J=!0,It(this)},i.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(He(),Qe(17)),It(this),this.o=2,xt(this)):wt(this,this.Y-e)};var _t=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Tt){this.h=void 0!==t?t:e.h,At(this,e.j),this.s=e.s,this.g=e.g,Nt(this,e.m),this.l=e.l,t=e.i;var n=new Vt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ct(this,n),this.o=e.o}else e&&(n=String(e).match(_t))?(this.h=!!t,At(this,n[1]||"",!0),this.s=Ot(n[2]||""),this.g=Ot(n[3]||"",!0),Nt(this,n[4]),this.l=Ot(n[5]||"",!0),Ct(this,n[6]||"",!0),this.o=Ot(n[7]||"")):(this.h=!!t,this.i=new Vt(null,this.h))}function St(e){return new Tt(e)}function At(e,t,n){e.j=n?Ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Nt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ct(e,t,n){t instanceof Vt?(e.i=t,function(e,t){t&&!e.j&&(zt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(qt(this,t),Gt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Pt(t,Ut)),e.i=new Vt(t,e.h))}function Rt(e,t,n){e.i.set(t,n)}function Dt(e){return Rt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Lt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Lt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pt(t,Mt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Pt(t,Mt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Pt(n,"/"==n.charAt(0)?jt:Ft,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pt(n,Bt)),e.join("")};var Mt=/[#\/\?@]/g,Ft=/[#\?:]/g,jt=/[#\?]/g,Ut=/[#\?@]/g,Bt=/#/g;function Vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function qt(e,t){zt(e),t=$t(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Wt(e,t){return zt(e),t=$t(e,t),e.g.has(t)}function Gt(e,t,n){qt(e,t),0<n.length&&(e.i=null,e.g.set($t(e,t),x(n)),e.h+=n.length)}function $t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(i=Vt.prototype).add=function(e,t){zt(this),this.i=null,e=$t(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){zt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},i.sa=function(){zt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},i.Z=function(e){zt(this);let t=[];if("string"==typeof e)Wt(this,e)&&(t=t.concat(this.g.get($t(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},i.set=function(e,t){return zt(this),this.i=null,Wt(this,e=$t(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function Ht(e){this.l=e||Kt,c.PerformanceNavigationTiming?e=0<(e=c.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(c.g&&c.g.Ka&&c.g.Ka()&&c.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kt=10;function Qt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xt(e){return e.h?1:e.g?e.g.size:0}function Yt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jt(e,t){e.g?e.g.add(t):e.h=t}function Zt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function en(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return x(e.i)}function tn(){}function nn(){this.g=new tn}function rn(e,t,n){const r=n||"";try{kt(e,(function(e,n){let i=e;h(e)&&(i=Ie(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function on(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function sn(e){this.l=e.fc||null,this.j=e.ob||!1}function an(e,t){we.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ht.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},tn.prototype.stringify=function(e){return c.JSON.stringify(e,void 0)},tn.prototype.parse=function(e){return c.JSON.parse(e,void 0)},v(sn,et),sn.prototype.g=function(){return new an(this.l,this.j)},sn.prototype.i=function(e){return function(){return e}}({}),v(an,we);var cn=0;function un(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function ln(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hn(e)}function hn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(i=an.prototype).open=function(e,t){if(this.readyState!=cn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||c).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=cn},i.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==c.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;un(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},i.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ln(this):hn(this),3==this.readyState&&un(this)}},i.Za=function(e){this.g&&(this.response=this.responseText=e,ln(this))},i.Ya=function(e){this.g&&(this.response=e,ln(this))},i.ka=function(){this.g&&ln(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var dn=c.JSON.parse;function fn(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pn,this.L=this.M=!1}v(fn,we);var pn="",mn=/^https?$/i,gn=["POST","PUT"];function yn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vn(e),bn(e)}function vn(e){e.F||(e.F=!0,be(e,"complete"),be(e,"error"))}function wn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=In(e)||2!=e.da()))if(e.v&&4==In(e))Pe(e.La,0,e);else if(be(e,"readystatechange"),4==In(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(_t)[1]||null;if(!i&&c.self&&c.self.location){var o=c.self.location.protocol;i=o.substr(0,o.length-1)}r=!mn.test(i?i.toLowerCase():"")}n=r}if(n)be(e,"complete"),be(e,"success");else{e.m=6;try{var s=2<In(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",vn(e)}}finally{bn(e)}}}function bn(e,t){if(e.g){xn(e);const n=e.g,r=e.C[0]?u:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function xn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(c.clearTimeout(e.A),e.A=null)}function In(e){return e.g?e.g.readyState:0}function En(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case pn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function kn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function _n(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=kn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Rt(e,t,n))}function Tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Sn(e){this.Ga=0,this.i=[],this.j=new Ve,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Tn("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Tn("baseRetryDelayMs",5e3,e),this.hb=Tn("retryDelaySeedMs",1e4,e),this.eb=Tn("forwardChannelMaxRetries",2,e),this.xa=Tn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Ht(e&&e.concurrentRequestLimit),this.Ja=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function An(e){if(Cn(e),3==e.H){var t=e.W++,n=St(e.G);Rt(n,"SID",e.J),Rt(n,"RID",t),Rt(n,"TYPE","terminate"),On(e,n),(t=new ct(e,e.j,t,void 0)).L=2,t.v=Dt(St(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(t.v.toString(),"")),!n&&c.Image&&((new Image).src=t.v,n=!0),n||(t.g=Gn(t.l,null),t.g.ha(t.v)),t.G=Date.now(),vt(t)}qn(e)}function Nn(e){e.g&&(Fn(e),e.g.cancel(),e.g=null)}function Cn(e){Nn(e),e.u&&(c.clearTimeout(e.u),e.u=null),Un(e),e.h.cancel(),e.m&&("number"==typeof e.m&&c.clearTimeout(e.m),e.m=null)}function Rn(e){Qt(e.h)||e.m||(e.m=!0,Ae(e.Na,e),e.C=0)}function Dn(e,t){var n;n=t?t.m:e.W++;const r=St(e.G);Rt(r,"SID",e.J),Rt(r,"RID",n),Rt(r,"AID",e.V),On(e,r),e.o&&e.s&&_n(r,e.o,e.s),n=new ct(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=Pn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Jt(e.h,n),ft(n,r,t)}function On(e,t){e.ma&&ee(e.ma,(function(e,n){Rt(t,n,e)})),e.l&&kt({},(function(e,n){Rt(t,n,e)}))}function Pn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?g(e.l.Va,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const a=i[s].g;if(n-=t,0>n)t=Math.max(0,i[s].h-100),o=!1;else try{rn(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function Ln(e){e.g||e.u||(e.ba=1,Ae(e.Ma,e),e.A=0)}function Mn(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Ye(g(e.Ma,e),Vn(e,e.A)),e.A++,!0)}function Fn(e){null!=e.B&&(c.clearTimeout(e.B),e.B=null)}function jn(e){e.g=new ct(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=St(e.wa);Rt(t,"RID","rpc"),Rt(t,"SID",e.J),Rt(t,"CI",e.M?"0":"1"),Rt(t,"AID",e.V),Rt(t,"TYPE","xmlhttp"),On(e,t),e.o&&e.s&&_n(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Dt(St(t)),n.s=null,n.S=!0,pt(n,e)}function Un(e){null!=e.v&&(c.clearTimeout(e.v),e.v=null)}function Bn(e,t){var n=null;if(e.g==t){Un(e),Fn(e),e.g=null;var r=2}else{if(!Yt(e.h,t))return;n=t.F,Zt(e.h,t),r=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;be(r=Ge(),new Xe(r,n)),Rn(e)}else Ln(e);else if(3==(i=t.o)||0==i&&0<e.ta||!(1==r&&function(e,t){return!(Xt(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Ye(g(e.Na,e,t),Vn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Mn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:zn(e,5);break;case 4:zn(e,10);break;case 3:zn(e,6);break;default:zn(e,2)}}function Vn(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function zn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=g(e.pb,e);n||(n=new Tt("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||At(n,"https"),Dt(n)),function(e,t){const n=new Ve;if(c.Image){const r=new Image;r.onload=y(on,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(on,n,r,"TestLoadImage: error",!1,t),r.onabort=y(on,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(on,n,r,"TestLoadImage: timeout",!1,t),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Qe(2);e.H=0,e.l&&e.l.za(t),qn(e),Cn(e)}function qn(e){if(e.H=0,e.pa=[],e.l){const t=en(e.h);0==t.length&&0==e.i.length||(I(e.pa,t),I(e.pa,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ya()}}function Wn(e,t,n){var r=n instanceof Tt?St(n):new Tt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Nt(r,r.m);else{var i=c.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Tt(null,void 0);r&&At(o,r),t&&(o.g=t),i&&Nt(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&Rt(r,n,t),Rt(r,"VER",e.qa),On(e,r),r}function Gn(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new fn(new sn({ob:!0})):new fn(e.va)).Oa(e.I),t}function $n(){}function Hn(){if(L&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function Kn(e,t){we.call(this),this.g=new Sn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!_(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Yn(this)}function Qn(e){ot.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Xn(){st.call(this),this.status=1}function Yn(e){this.g=e}function Jn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Zn(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;s=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=n+(s<<7&4294967295|s>>>25))+((s=o+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|s>>>15))+((s=n+(t^i&(o^t))+r[3]+3250441966&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^n&(i^o))+r[4]+4118548399&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|s>>>15))+((s=n+(t^i&(o^t))+r[7]+4249261313&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^n&(i^o))+r[8]+1770035416&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|s>>>15))+((s=n+(t^i&(o^t))+r[11]+2304563134&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^n&(i^o))+r[12]+1804603682&4294967295)<<7&4294967295|s>>>25))+((s=o+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|s>>>20))+((s=i+(n^o&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|s>>>15))+((s=n+(t^i&(o^t))+r[15]+1236535329&4294967295)<<22&4294967295|s>>>10))+((s=t+(i^o&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|s>>>23))+((s=i+(t^n&(o^t))+r[11]+643717713&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^t&(i^o))+r[0]+3921069994&4294967295)<<20&4294967295|s>>>12))+((s=t+(i^o&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|s>>>23))+((s=i+(t^n&(o^t))+r[15]+3634488961&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^t&(i^o))+r[4]+3889429448&4294967295)<<20&4294967295|s>>>12))+((s=t+(i^o&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|s>>>23))+((s=i+(t^n&(o^t))+r[3]+4107603335&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^t&(i^o))+r[8]+1163531501&4294967295)<<20&4294967295|s>>>12))+((s=t+(i^o&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|s>>>27))+((s=o+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|s>>>23))+((s=i+(t^n&(o^t))+r[7]+1735328473&4294967295)<<14&4294967295|s>>>18))+((s=n+(o^t&(i^o))+r[12]+2368359562&4294967295)<<20&4294967295|s>>>12))+((s=t+(n^i^o)+r[5]+4294588738&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^t)+r[14]+4259657740&4294967295)<<23&4294967295|s>>>9))+((s=t+(n^i^o)+r[1]+2763975236&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^t)+r[10]+3200236656&4294967295)<<23&4294967295|s>>>9))+((s=t+(n^i^o)+r[13]+681279174&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^t)+r[6]+76029189&4294967295)<<23&4294967295|s>>>9))+((s=t+(n^i^o)+r[9]+3654602809&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|s>>>21))+((s=i+(o^t^n)+r[15]+530742520&4294967295)<<16&4294967295|s>>>16))+((s=n+(i^o^t)+r[2]+3299628645&4294967295)<<23&4294967295|s>>>9))+((s=t+(i^(n|~o))+r[0]+4096336452&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|s>>>22))+((s=i+(t^(o|~n))+r[14]+2878612391&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|s>>>11))+((s=t+(i^(n|~o))+r[12]+1700485571&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|s>>>22))+((s=i+(t^(o|~n))+r[10]+4293915773&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|s>>>11))+((s=t+(i^(n|~o))+r[8]+1873313359&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|s>>>22))+((s=i+(t^(o|~n))+r[6]+2734768916&4294967295)<<15&4294967295|s>>>17))+((s=n+(o^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|s>>>11))+((o=(t=n+((s=t+(i^(n|~o))+r[4]+4149444226&4294967295)<<6&4294967295|s>>>26))+((s=o+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|s>>>22))^((i=o+((s=i+(t^(o|~n))+r[2]+718787259&4294967295)<<15&4294967295|s>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function er(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=0|e[i];r&&o==t||(n[i]=o,r=!1)}this.g=n}(i=fn.prototype).Oa=function(e){this.M=e},i.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():rt.g(),this.C=this.u?tt(this.u):tt(rt),this.g.onreadystatechange=g(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void yn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=c.FormData&&e instanceof c.FormData,!(0<=b(gn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xn(this),0<this.B&&((this.L=function(e){return L&&R(G,9,(function(){let e=0;const t=T(String(D)).split("."),n=T("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=S(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||S(0==i[2].length,0==o[2].length)||S(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.ua,this)):this.A=Pe(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){yn(this,e)}},i.ua=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),bn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bn(this,!0)),fn.$.N.call(this)},i.La=function(){this.s||(this.G||this.v||this.l?wn(this):this.kb())},i.kb=function(){wn(this)},i.da=function(){try{return 2<In(this)?this.g.status:-1}catch(e){return-1}},i.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),dn(t)}},i.Ia=function(){return this.m},i.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=Sn.prototype).qa=8,i.H=1,i.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ct(this,this.j,e,void 0);let o=this.s;if(this.U&&(o?(o=te(o),re(o,this.U)):o=this.U),null!==this.o||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Pn(this,i,t),Rt(n=St(this.G),"RID",e),Rt(n,"CVER",22),this.F&&Rt(n,"X-HTTP-Session-Id",this.F),On(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(kn(o)))+"&"+t:this.o&&_n(n,this.o,o)),Jt(this.h,i),this.bb&&Rt(n,"TYPE","init"),this.P?(Rt(n,"$req",t),Rt(n,"SID","null"),i.ba=!0,ft(i,n,null)):ft(i,n,t),this.H=2}}else 3==this.H&&(e?Dn(this,e):0==this.i.length||Qt(this.h)||Dn(this))},i.Ma=function(){if(this.u=null,jn(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Ye(g(this.jb,this),e)}},i.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Qe(10),Nn(this),jn(this))},i.ib=function(){null!=this.v&&(this.v=null,Nn(this),Mn(this),Qe(19))},i.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))},(i=$n.prototype).Ba=function(){},i.Aa=function(){},i.za=function(){},i.ya=function(){},i.Va=function(){},Hn.prototype.g=function(e,t){return new Kn(e,t)},v(Kn,we),Kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Qe(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Wn(e,null,e.Y),Rn(e)},Kn.prototype.close=function(){An(this.g)},Kn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ie(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&Rn(t)},Kn.prototype.N=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,Kn.$.N.call(this)},v(Qn,ot),v(Xn,st),v(Yn,$n),Yn.prototype.Ba=function(){be(this.g,"a")},Yn.prototype.Aa=function(e){be(this.g,new Qn(e))},Yn.prototype.za=function(e){be(this.g,new Xn)},Yn.prototype.ya=function(){be(this.g,"b")},v(Jn,(function(){this.blockSize=-1})),Jn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Jn.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(0==i)for(;o<=n;)Zn(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){Zn(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){Zn(this,r),i=0;break}}this.h=i,this.i+=t},Jn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var tr={};function nr(e){return-128<=e&&128>e?R(tr,e,(function(e){return new er([0|e],0>e?-1:0)})):new er([0|e],0>e?-1:0)}function rr(e){if(isNaN(e)||!isFinite(e))return or;if(0>e)return lr(rr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ir;return new er(t,0)}var ir=4294967296,or=nr(0),sr=nr(1),ar=nr(16777216);function cr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function ur(e){return-1==e.h}function lr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new er(n,~e.h).add(sr)}function hr(e,t){return e.add(lr(t))}function dr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function fr(e,t){this.g=e,this.h=t}function pr(e,t){if(cr(t))throw Error("division by zero");if(cr(e))return new fr(or,or);if(ur(e))return t=pr(lr(e),t),new fr(lr(t.g),lr(t.h));if(ur(t))return t=pr(e,lr(t)),new fr(lr(t.g),t.h);if(30<e.g.length){if(ur(e)||ur(t))throw Error("slowDivide_ only works with positive integers.");for(var n=sr,r=t;0>=r.X(e);)n=mr(n),r=mr(r);var i=gr(n,1),o=gr(r,1);for(r=gr(r,2),n=gr(n,2);!cr(r);){var s=o.add(r);0>=s.X(e)&&(i=i.add(n),o=s),r=gr(r,1),n=gr(n,1)}return t=hr(e,i.R(t)),new fr(i,t)}for(i=or;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),s=(o=rr(n)).R(t);ur(s)||0<s.X(e);)s=(o=rr(n-=r)).R(t);cr(o)&&(o=sr),i=i.add(o),e=hr(e,s)}return new fr(i,e)}function mr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new er(n,e.h)}function gr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new er(i,e.h)}(i=er.prototype).ea=function(){if(ur(this))return-lr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ir+r)*t,t*=ir}return e},i.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(cr(this))return"0";if(ur(this))return"-"+lr(this).toString(e);for(var t=rr(Math.pow(e,6)),n=this,r="";;){var i=pr(n,t).g,o=((0<(n=hr(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(cr(n=i))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},i.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},i.X=function(e){return ur(e=hr(this,e))?-1:cr(e)?0:1},i.abs=function(){return ur(this)?lr(this):this},i.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(65535&this.D(i))+(65535&e.D(i)),s=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new er(n,-2147483648&n[n.length-1]?-1:0)},i.R=function(e){if(cr(this)||cr(e))return or;if(ur(this))return ur(e)?lr(this).R(lr(e)):lr(lr(this).R(e));if(ur(e))return lr(this.R(lr(e)));if(0>this.X(ar)&&0>e.X(ar))return rr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,s=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=s*c,dr(n,2*r+2*i),n[2*r+2*i+1]+=o*c,dr(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,dr(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,dr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new er(n,0)},i.gb=function(e){return pr(this,e).h},i.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new er(n,this.h&e.h)},i.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new er(n,this.h|e.h)},i.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new er(n,this.h^e.h)},Hn.prototype.createWebChannel=Hn.prototype.g,Kn.prototype.send=Kn.prototype.u,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,Je.NO_ERROR=0,Je.TIMEOUT=8,Je.HTTP_ERROR=6,Ze.COMPLETE="complete",nt.EventType=it,it.OPEN="a",it.CLOSE="b",it.ERROR="c",it.MESSAGE="d",we.prototype.listen=we.prototype.O,fn.prototype.listenOnce=fn.prototype.P,fn.prototype.getLastError=fn.prototype.Sa,fn.prototype.getLastErrorCode=fn.prototype.Ia,fn.prototype.getStatus=fn.prototype.da,fn.prototype.getResponseJson=fn.prototype.Wa,fn.prototype.getResponseText=fn.prototype.ja,fn.prototype.send=fn.prototype.ha,fn.prototype.setWithCredentials=fn.prototype.Oa,Jn.prototype.digest=Jn.prototype.l,Jn.prototype.reset=Jn.prototype.reset,Jn.prototype.update=Jn.prototype.j,er.prototype.add=er.prototype.add,er.prototype.multiply=er.prototype.R,er.prototype.modulo=er.prototype.gb,er.prototype.compare=er.prototype.X,er.prototype.toNumber=er.prototype.ea,er.prototype.toString=er.prototype.toString,er.prototype.getBits=er.prototype.D,er.fromNumber=rr,er.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return lr(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=rr(Math.pow(n,8)),i=or,o=0;o<t.length;o+=8){var s=Math.min(8,t.length-o),a=parseInt(t.substring(o,o+s),n);8>s?(s=rr(Math.pow(n,s)),i=i.R(s).add(rr(a))):i=(i=i.R(r)).add(rr(a))}return i};var yr=s.createWebChannelTransport=function(){return new Hn},vr=s.getStatEventTarget=function(){return Ge()},wr=s.ErrorCode=Je,br=s.EventType=Ze,xr=s.Event=qe,Ir=s.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Er=s.FetchXmlHttpFactory=sn,kr=s.WebChannel=nt,_r=s.XhrIo=fn,Tr=s.Md5=Jn,Sr=s.Integer=er})),o.register("cEmXr",(function(t,n){e(t.exports,"default",(function(){return o("hVw4Q").default}));o("hVw4Q");
/**
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
 */
o("hVw4Q").default.registerVersion("firebase","9.22.0","app-compat")})),o.register("hVw4Q",(function(t,n){e(t.exports,"default",(function(){return f}));var r=o("ffjl9"),i=o("4a6xH"),s=o("ix4Jr"),a=(s=o("ix4Jr"),o("7vF8m"));
/**
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
 */
class c{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new(0,i.Component)("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const u={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new(0,r.ErrorFactory)("app-compat","Firebase",u);const h=
/**
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
 */
function e(){const t=
/**
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
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(i,o={}){const a=s.initializeApp(i,o);if((0,r.contains)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c},app:i,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:function(t){const o=t.name,a=o.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=i())=>{if("function"!=typeof e[a])throw l.create("invalid-app-argument",{appName:o});return e[a]()};void 0!==t.serviceProps&&(0,r.deepExtend)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){return this._getService.bind(this,o).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:s}};function i(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.contains)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),i.App=e,n}(c);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,r.deepExtend)(t,e)},createSubscribe:r.createSubscribe,ErrorFactory:r.ErrorFactory,deepExtend:r.deepExtend}),t}(),d=new(0,a.Logger)("@firebase/app-compat");
/**
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
 */
/**
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
 */
if((0,r.isBrowser)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const f=h;
/**
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
 */
var p;(0,s.registerVersion)("@firebase/app-compat","0.2.10",p)})),o.register("cxzCy",(function(e,t){o("cexSw")})),o.register("cexSw",(function(e,n){var r=o("hVw4Q");o("j3TbB");var i=o("la1jY"),s=o("j3TbB"),a=o("4a6xH"),c=o("ffjl9");function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(e=(0,c.getUA)()){return!("file:"!==u()&&"ionic:"!==u()&&"capacitor:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function h(e=(0,c.getUA)()){return(0,c.isIE)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=(0,c.getUA)()){return/Edge\/\d+/.test(e)}(e)}function d(){try{const e=self.localStorage,t=i.aL();if(e)return e.setItem(t,"1"),e.removeItem(t),!h()||(0,c.isIndexedDBAvailable)()}catch(e){return f()&&(0,c.isIndexedDBAvailable)()}return!1}function f(){return void 0!==t&&"WorkerGlobalScope"in t&&"importScripts"in t}function p(){return("http:"===u()||"https:"===u()||(0,c.isBrowserExtension)()||l())&&!((0,c.isReactNative)()||(0,c.isNode)())&&d()&&!f()}function m(){return l()&&"undefined"!=typeof document}
/**
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
 */
const g={LOCAL:"local",NONE:"none",SESSION:"session"},y=i.aA,v="persistence";async function w(e){await e._initializationPromise;const t=b(),n=i.aD(v,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function b(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
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
 */const x=i.aA;class I{constructor(){this.browserResolver=i.aC(i.k),this.cordovaResolver=i.aC(s.cordovaPopupRedirectResolver),this.underlyingResolver=null,this._redirectPersistence=i.a,this._completeRedirectFn=i.aE,this._overrideRedirectResult=i.aF}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return m()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return x(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!m()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
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
 */function E(e){return e.unwrap()}function k(e){const{_tokenResponse:t}=e instanceof c.FirebaseError?e.customData:e;if(!t)return null;if(!(e instanceof c.FirebaseError)&&"temporaryProof"in t&&"phoneNumber"in t)return i.P.credentialFromResult(e);const n=t.providerId;if(!n||n===i.p.PASSWORD)return null;let r;switch(n){case i.p.GOOGLE:r=i.V;break;case i.p.FACEBOOK:r=i.U;break;case i.p.GITHUB:r=i.W;break;case i.p.TWITTER:r=i.Z;break;default:const{oauthIdToken:e,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:c}=t;return o||s||e||a?a?n.startsWith("saml.")?i.aO._create(n,a):i.L._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:o}):new i.X(n).credential({idToken:e,accessToken:o,rawNonce:c}):null}return e instanceof c.FirebaseError?r.credentialFromError(e):r.credentialFromResult(e)}function _(e,t){return t.catch((t=>{throw t instanceof c.FirebaseError&&function(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code))t.resolver=new S(e,i.aq(e,t));else if(r){const e=k(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(r=e,k(r)),additionalUserInfo:i.ao(e),user:A.getOrCreate(n)};
/**
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
 */
var r}))}async function T(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>_(e,n.confirm(t))}}class S{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return _(E(this.auth),this.resolver.resolveSignIn(e))}}
/**
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
 */class A{constructor(e){this._delegate=e,this.multiFactor=i.ar(e)}static getOrCreate(e){return A.USER_MAP.has(e)||A.USER_MAP.set(e,new A(e)),A.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return _(this.auth,i.a0(this._delegate,e))}async linkWithPhoneNumber(e,t){return T(this.auth,i.l(this._delegate,e,t))}async linkWithPopup(e){return _(this.auth,i.d(this._delegate,e,I))}async linkWithRedirect(e){return await w(i.aH(this.auth)),i.g(this._delegate,e,I)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return _(this.auth,i.a1(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return T(this.auth,i.r(this._delegate,e,t))}reauthenticateWithPopup(e){return _(this.auth,i.e(this._delegate,e,I))}async reauthenticateWithRedirect(e){return await w(i.aH(this.auth)),i.h(this._delegate,e,I)}sendEmailVerification(e){return i.ae(this._delegate,e)}async unlink(e){return await i.an(this._delegate,e),this}updateEmail(e){return i.aj(this._delegate,e)}updatePassword(e){return i.ak(this._delegate,e)}updatePhoneNumber(e){return i.u(this._delegate,e)}updateProfile(e){return i.ai(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i.af(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}A.USER_MAP=new WeakMap;
/**
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
 */
const N=i.aA;class C{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;N(n,"invalid-api-key",{appName:e.name}),N(n,"invalid-api-key",{appName:e.name});const r="undefined"!=typeof window?I:void 0;this._delegate=t.initialize({options:{persistence:D(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(i.D),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?A.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i.I(this._delegate,e,t)}applyActionCode(e){return i.a5(this._delegate,e)}checkActionCode(e){return i.a6(this._delegate,e)}confirmPasswordReset(e,t){return i.a4(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return _(this._delegate,i.a8(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i.ad(this._delegate,e)}isSignInWithEmailLink(e){return i.ab(this._delegate,e)}async getRedirectResult(){N(p(),this._delegate,"operation-not-supported-in-this-environment");const e=await i.j(this._delegate,I);return e?_(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){s.addFrameworkForLogging(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=R(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=R(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return i.aa(this._delegate,e,t)}sendPasswordResetEmail(e,t){return i.a3(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){y(Object.values(g).includes(t),e,"invalid-persistence-type"),(0,c.isReactNative)()?y(t!==g.SESSION,e,"unsupported-persistence-type"):(0,c.isNode)()?y(t===g.NONE,e,"unsupported-persistence-type"):f()?y(t===g.NONE||t===g.LOCAL&&(0,c.isIndexedDBAvailable)(),e,"unsupported-persistence-type"):y(t===g.NONE||d(),e,"unsupported-persistence-type")}(this._delegate,e),e){case g.SESSION:t=i.a;break;case g.LOCAL:t=await i.aC(i.i)._isAvailable()?i.i:i.b;break;case g.NONE:t=i.N;break;default:return i.av("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return _(this._delegate,i._(this._delegate))}signInWithCredential(e){return _(this._delegate,i.$(this._delegate,e))}signInWithCustomToken(e){return _(this._delegate,i.a2(this._delegate,e))}signInWithEmailAndPassword(e,t){return _(this._delegate,i.a9(this._delegate,e,t))}signInWithEmailLink(e,t){return _(this._delegate,i.ac(this._delegate,e,t))}signInWithPhoneNumber(e,t){return T(this._delegate,i.s(this._delegate,e,t))}async signInWithPopup(e){return N(p(),this._delegate,"operation-not-supported-in-this-environment"),_(this._delegate,i.c(this._delegate,e,I))}async signInWithRedirect(e){return N(p(),this._delegate,"operation-not-supported-in-this-environment"),await w(this._delegate),i.f(this._delegate,e,I)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i.a7(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function R(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&A.getOrCreate(e)),error:t,complete:n}}function D(e,t){const n=function(e,t){const n=b();if(!n)return[];const r=i.aD(v,e,t);switch(n.getItem(r)){case g.NONE:return[i.N];case g.LOCAL:return[i.i,i.a];case g.SESSION:return[i.a];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(i.i)||n.push(i.i),"undefined"!=typeof window)for(const e of[i.b,i.a])n.includes(e)||n.push(e);return n.includes(i.N)||n.push(i.N),n}
/**
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
 */C.Persistence=g;class O{constructor(){this.providerId="phone",this._delegate=new i.P(E(r.default.auth()))}static credential(e,t){return i.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}O.PHONE_SIGN_IN_METHOD=i.P.PHONE_SIGN_IN_METHOD,O.PROVIDER_ID=i.P.PROVIDER_ID;
/**
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
 */
const P=i.aA;class L{constructor(e,t,n=r.default.app()){var o;P(null===(o=n.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new i.R(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
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
 */var M;(M=r.default).INTERNAL.registerComponent(new(0,a.Component)("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new C(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i.A.EMAIL_SIGNIN,PASSWORD_RESET:i.A.PASSWORD_RESET,RECOVER_EMAIL:i.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i.A.VERIFY_EMAIL}},EmailAuthProvider:i.Q,FacebookAuthProvider:i.U,GithubAuthProvider:i.W,GoogleAuthProvider:i.V,OAuthProvider:i.X,SAMLAuthProvider:i.Y,PhoneAuthProvider:O,PhoneMultiFactorGenerator:i.m,RecaptchaVerifier:L,TwitterAuthProvider:i.Z,Auth:C,AuthCredential:i.J,Error:c.FirebaseError}).setInstantiationMode("LAZY").setMultipleInstances(!1)),M.registerVersion("@firebase/auth-compat","0.4.2")})),o.register("j3TbB",(function(t,n){e(t.exports,"cordovaPopupRedirectResolver",(function(){return g})),e(t.exports,"addFrameworkForLogging",(function(){return v})),e(t.exports,"ActionCodeOperation",(function(){return o("la1jY").A})),e(t.exports,"AuthCredential",(function(){return o("la1jY").J})),e(t.exports,"EmailAuthProvider",(function(){return o("la1jY").Q})),e(t.exports,"FacebookAuthProvider",(function(){return o("la1jY").U})),e(t.exports,"GithubAuthProvider",(function(){return o("la1jY").W})),e(t.exports,"GoogleAuthProvider",(function(){return o("la1jY").V})),e(t.exports,"OAuthCredential",(function(){return o("la1jY").L})),e(t.exports,"OAuthProvider",(function(){return o("la1jY").X})),e(t.exports,"PhoneAuthProvider",(function(){return o("la1jY").P})),e(t.exports,"PhoneMultiFactorGenerator",(function(){return o("la1jY").m})),e(t.exports,"ProviderId",(function(){return o("la1jY").p})),e(t.exports,"RecaptchaVerifier",(function(){return o("la1jY").R})),e(t.exports,"SAMLAuthCredential",(function(){return o("la1jY").aO})),e(t.exports,"SAMLAuthProvider",(function(){return o("la1jY").Y})),e(t.exports,"TwitterAuthProvider",(function(){return o("la1jY").Z})),e(t.exports,"_assert",(function(){return o("la1jY").aA})),e(t.exports,"_castAuth",(function(){return o("la1jY").aH})),e(t.exports,"_fail",(function(){return o("la1jY").av})),e(t.exports,"_generateEventId",(function(){return o("la1jY").aL})),e(t.exports,"_getInstance",(function(){return o("la1jY").aC})),e(t.exports,"_getRedirectResult",(function(){return o("la1jY").aE})),e(t.exports,"_overrideRedirectResult",(function(){return o("la1jY").aF})),e(t.exports,"_persistenceKeyName",(function(){return o("la1jY").aD})),e(t.exports,"applyActionCode",(function(){return o("la1jY").a5})),e(t.exports,"browserLocalPersistence",(function(){return o("la1jY").b})),e(t.exports,"browserPopupRedirectResolver",(function(){return o("la1jY").k})),e(t.exports,"browserSessionPersistence",(function(){return o("la1jY").a})),e(t.exports,"checkActionCode",(function(){return o("la1jY").a6})),e(t.exports,"confirmPasswordReset",(function(){return o("la1jY").a4})),e(t.exports,"connectAuthEmulator",(function(){return o("la1jY").I})),e(t.exports,"createUserWithEmailAndPassword",(function(){return o("la1jY").a8})),e(t.exports,"debugErrorMap",(function(){return o("la1jY").D})),e(t.exports,"fetchSignInMethodsForEmail",(function(){return o("la1jY").ad})),e(t.exports,"getAdditionalUserInfo",(function(){return o("la1jY").ao})),e(t.exports,"getMultiFactorResolver",(function(){return o("la1jY").aq})),e(t.exports,"getRedirectResult",(function(){return o("la1jY").j})),e(t.exports,"inMemoryPersistence",(function(){return o("la1jY").N})),e(t.exports,"indexedDBLocalPersistence",(function(){return o("la1jY").i})),e(t.exports,"isSignInWithEmailLink",(function(){return o("la1jY").ab})),e(t.exports,"linkWithCredential",(function(){return o("la1jY").a0})),e(t.exports,"linkWithPhoneNumber",(function(){return o("la1jY").l})),e(t.exports,"linkWithPopup",(function(){return o("la1jY").d})),e(t.exports,"linkWithRedirect",(function(){return o("la1jY").g})),e(t.exports,"multiFactor",(function(){return o("la1jY").ar})),e(t.exports,"reauthenticateWithCredential",(function(){return o("la1jY").a1})),e(t.exports,"reauthenticateWithPhoneNumber",(function(){return o("la1jY").r})),e(t.exports,"reauthenticateWithPopup",(function(){return o("la1jY").e})),e(t.exports,"reauthenticateWithRedirect",(function(){return o("la1jY").h})),e(t.exports,"sendEmailVerification",(function(){return o("la1jY").ae})),e(t.exports,"sendPasswordResetEmail",(function(){return o("la1jY").a3})),e(t.exports,"sendSignInLinkToEmail",(function(){return o("la1jY").aa})),e(t.exports,"signInAnonymously",(function(){return o("la1jY")._})),e(t.exports,"signInWithCredential",(function(){return o("la1jY").$})),e(t.exports,"signInWithCustomToken",(function(){return o("la1jY").a2})),e(t.exports,"signInWithEmailAndPassword",(function(){return o("la1jY").a9})),e(t.exports,"signInWithEmailLink",(function(){return o("la1jY").ac})),e(t.exports,"signInWithPhoneNumber",(function(){return o("la1jY").s})),e(t.exports,"signInWithPopup",(function(){return o("la1jY").c})),e(t.exports,"signInWithRedirect",(function(){return o("la1jY").f})),e(t.exports,"unlink",(function(){return o("la1jY").an})),e(t.exports,"updateEmail",(function(){return o("la1jY").aj})),e(t.exports,"updatePassword",(function(){return o("la1jY").ak})),e(t.exports,"updatePhoneNumber",(function(){return o("la1jY").u})),e(t.exports,"updateProfile",(function(){return o("la1jY").ai})),e(t.exports,"verifyBeforeUpdateEmail",(function(){return o("la1jY").af})),e(t.exports,"verifyPasswordResetCode",(function(){return o("la1jY").a7}));var r=o("la1jY"),i=(r=o("la1jY"),o("ffjl9"));
/**
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
 */
function s(){return window}
/**
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
 */o("ix4Jr"),o("7vF8m"),o("4a6xH");async function a(e,t,n){var i;const{BuildInfo:o}=s();(0,r.as)(t.sessionId,"AuthEvent did not contain a session ID");const a=await async function(e){const t=function(e){if((0,r.as)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
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
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),c={};return(0,r.at)()?c.ibi=o.packageName:(0,r.au)()?c.apn=o.packageName:(0,r.av)(e,"operation-not-supported-in-this-environment"),o.displayName&&(c.appDisplayName=o.displayName),c.sessionId=a,(0,r.aw)(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,c)}const c=20;class u extends r.aB{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function l(e){const t=await f()._get(p(e));return t&&await f()._remove(p(e)),t}function h(e,t){var n,i;const o=function(e){const t=m(e),n=t.link?decodeURIComponent(t.link):void 0,r=m(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return m(i).link||i||r||n||e}(t);if(o.includes("/__/auth/callback")){const t=m(o),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,a=null===(i=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],c=a?(0,r.az)(a):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:o,postBody:null}}return null}function d(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<c;n++){const n=Math.floor(62*Math.random());e.push(t.charAt(n))}return e.join("")}function f(){return(0,r.aC)(r.b)}function p(e){return(0,r.aD)("authEvent",e.config.apiKey,e.name)}function m(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.querystringDecode)(n.join("?"))}
/**
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
 */const g=class{constructor(){this._redirectPersistence=r.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r.aE,this._overrideRedirectResult=r.aF}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new u(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,r.av)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){!function(e){var t,n,i,o,a,c,u,l,h,d;const f=s();(0,r.aA)("function"==typeof(null===(t=null==f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,r.aA)(void 0!==(null===(n=null==f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,r.aA)("function"==typeof(null===(a=null===(o=null===(i=null==f?void 0:f.cordova)||void 0===i?void 0:i.plugins)||void 0===o?void 0:o.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.aA)("function"==typeof(null===(l=null===(u=null===(c=null==f?void 0:f.cordova)||void 0===c?void 0:c.plugins)||void 0===u?void 0:u.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.aA)("function"==typeof(null===(d=null===(h=null==f?void 0:f.cordova)||void 0===h?void 0:h.InAppBrowser)||void 0===d?void 0:d.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),(0,r.aG)(),await this._originValidation(e);const c=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:d(),postBody:null,tenantId:e.tenantId,error:(0,r.az)(e,"no-auth-event")}}(e,n,i);await function(e,t){return f()._set(p(e),t)}(e,c);const u=await a(e,c,t);return async function(e,t,n){const{cordova:i}=s();let o=()=>{};try{await new Promise(((s,a)=>{let c=null;function u(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function l(){c||(c=window.setTimeout((()=>{a((0,r.az)(e,"redirect-cancelled-by-user"))}),2e3))}function h(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(u),document.addEventListener("resume",l,!1),(0,r.au)()&&document.addEventListener("visibilitychange",h,!1),o=()=>{t.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",h,!1),c&&window.clearTimeout(c)}}))}finally{o()}}(e,o,await function(e){const{cordova:t}=s();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let o=null;i?t.plugins.browsertab.openUrl(e):o=t.InAppBrowser.open(e,(0,r.ay)()?"_blank":"_system","location=yes"),n(o)}))}))}(u))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=s(),n={};(0,r.at)()?n.iosBundleId=t.packageName:(0,r.au)()?n.androidPackageName=t.packageName:(0,r.av)(e,"operation-not-supported-in-this-environment"),await(0,r.ax)(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=s(),o=setTimeout((async()=>{await l(e),t.onEvent(y())}),500),a=async n=>{clearTimeout(o);const r=await l(e);let i=null;r&&(null==n?void 0:n.url)&&(i=h(r,n.url)),t.onEvent(i||y())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,a);const c=r,u=`${i.packageName.toLowerCase()}://`;s().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&a({url:e}),"function"==typeof c)try{c(e)}catch(e){console.error(e)}}}};function y(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,r.az)("no-auth-event")}}
/**
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
 */function v(e,t){(0,r.aH)(e)._logFramework(t)}})),o.register("la1jY",(function(t,n){e(t.exports,"p",(function(){return u})),e(t.exports,"A",(function(){return l})),e(t.exports,"D",(function(){return d})),e(t.exports,"av",(function(){return y})),e(t.exports,"az",(function(){return v})),e(t.exports,"aA",(function(){return I})),e(t.exports,"as",(function(){return k})),e(t.exports,"aC",(function(){return Y})),e(t.exports,"N",(function(){return Z})),e(t.exports,"aD",(function(){return ee})),e(t.exports,"au",(function(){return ae})),e(t.exports,"at",(function(){return le})),e(t.exports,"ay",(function(){return he})),e(t.exports,"aH",(function(){return ke})),e(t.exports,"I",(function(){return Te})),e(t.exports,"J",(function(){return Ne})),e(t.exports,"L",(function(){return je})),e(t.exports,"Q",(function(){return ze})),e(t.exports,"X",(function(){return Ge})),e(t.exports,"U",(function(){return $e})),e(t.exports,"V",(function(){return He})),e(t.exports,"W",(function(){return Ke})),e(t.exports,"aO",(function(){return Qe})),e(t.exports,"Y",(function(){return Xe})),e(t.exports,"Z",(function(){return Ye})),e(t.exports,"_",(function(){return tt})),e(t.exports,"an",(function(){return ot})),e(t.exports,"$",(function(){return lt})),e(t.exports,"a0",(function(){return ht})),e(t.exports,"a1",(function(){return dt})),e(t.exports,"a2",(function(){return ft})),e(t.exports,"a3",(function(){return vt})),e(t.exports,"a4",(function(){return wt})),e(t.exports,"a5",(function(){return bt})),e(t.exports,"a6",(function(){return xt})),e(t.exports,"a7",(function(){return It})),e(t.exports,"a8",(function(){return Et})),e(t.exports,"a9",(function(){return kt})),e(t.exports,"aa",(function(){return _t})),e(t.exports,"ab",(function(){return Tt})),e(t.exports,"ac",(function(){return St})),e(t.exports,"ad",(function(){return At})),e(t.exports,"ae",(function(){return Nt})),e(t.exports,"af",(function(){return Ct})),e(t.exports,"ai",(function(){return Rt})),e(t.exports,"aj",(function(){return Dt})),e(t.exports,"ak",(function(){return Ot})),e(t.exports,"ao",(function(){return Vt})),e(t.exports,"aq",(function(){return Wt})),e(t.exports,"ar",(function(){return Ht})),e(t.exports,"b",(function(){return Yt})),e(t.exports,"a",(function(){return Zt})),e(t.exports,"aL",(function(){return tn})),e(t.exports,"i",(function(){return mn})),e(t.exports,"R",(function(){return _n})),e(t.exports,"s",(function(){return Sn})),e(t.exports,"l",(function(){return An})),e(t.exports,"r",(function(){return Nn})),e(t.exports,"u",(function(){return Rn})),e(t.exports,"P",(function(){return Dn})),e(t.exports,"c",(function(){return Bn})),e(t.exports,"e",(function(){return Vn})),e(t.exports,"d",(function(){return zn})),e(t.exports,"aG",(function(){return Kn})),e(t.exports,"aF",(function(){return Qn})),e(t.exports,"f",(function(){return Jn})),e(t.exports,"h",(function(){return Zn})),e(t.exports,"g",(function(){return er})),e(t.exports,"j",(function(){return tr})),e(t.exports,"aE",(function(){return nr})),e(t.exports,"aB",(function(){return ir})),e(t.exports,"ax",(function(){return ar})),e(t.exports,"aw",(function(){return Sr})),e(t.exports,"k",(function(){return Nr})),e(t.exports,"m",(function(){return Dr}));var r=o("ffjl9"),i=o("ix4Jr"),s=o("l73V3"),a=o("7vF8m"),c=o("4a6xH");
/**
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
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=
/**
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
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}},f=h,p=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),m=new(0,a.Logger)("@firebase/auth");function g(e,...t){m.logLevel<=a.LogLevel.ERROR&&m.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
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
 */function y(e,...t){throw x(e,...t)}function v(e,...t){return x(e,...t)}function w(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function b(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&y(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function x(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw x(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function k(e,t){e||E(t)}
/**
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
 */function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */
/**
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
 */
class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(T()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
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
 */function N(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},D=new A(3e4,6e4);
/**
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
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,o={}){return L(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),C.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function L(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new j(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw U(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw w(e,a,s);y(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;y(e,"network-request-failed",{message:String(t)})}}async function M(e,t,n,r,i={}){const o=await P(e,t,n,r,i);return"mfaPendingCredential"in o&&y(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?N(e.config,i):`${e.config.apiScheme}://${i}`}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(v(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=v(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function V(e){return 1e3*Number(e)}function z(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.base64Decode)(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(e){return g("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
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
 */
async function q(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class W{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function $(e){var t;const n=e.auth,r=await e.getIdToken(),i=await q(e,async function(e,t){return P(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));I(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,s.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(u=e.providerData,l=a,[...u.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var u,l;const h=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==c?void 0:c.length)),f=!!h&&d,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new G(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
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
 */
class H{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(void 0!==e.idToken,"internal-error"),I(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=z(e);return I(t,"internal-error"),I(void 0!==t.exp,"internal-error"),I(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=
/**
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
 */await async function(e,t){const n=await L(e,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new H;return n&&(I("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(I("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(I("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new H,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
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
 */function K(e,t){I("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Q{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,s.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new G(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,r.getModularInstance)(e),i=await n.getIdToken(t),o=z(i);I(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"==typeof o.firebase?o.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:o,token:i,authTime:B(V(o.auth_time)),issuedAtTime:B(V(o.iat)),expirationTime:B(V(o.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,r.getModularInstance)(e);await $(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,async function(e,t){return P(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:x,stsTokenManager:E}=t;I(v&&E,e,"internal-error");const k=H.fromJSON(this.name,E);I("string"==typeof v,e,"internal-error"),K(l,e.name),K(h,e.name),I("boolean"==typeof w,e,"internal-error"),I("boolean"==typeof b,e,"internal-error"),K(d,e.name),K(f,e.name),K(p,e.name),K(m,e.name),K(g,e.name),K(y,e.name);const _=new Q({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(_.providerData=x.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new H;r.updateFromServerResponse(t);const i=new Q({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await $(i),i}}
/**
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
 */const X=new Map;function Y(e){k(e instanceof Function,"Expected a class definition");let t=X.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,X.set(e,t),t)}
/**
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
 */class J{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}J.type="NONE";const Z=J;
/**
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
 */function ee(e,t,n){return`firebase:${e}:${t}:${n}`}class te{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ee(this.userKey,r.apiKey,i),this.fullPersistenceKey=ee("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new te(Y(Z),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Y(Z);const o=ee(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=Q._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new te(i,e,n)):new te(i,e,n)}}
/**
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
 */function ne(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(se(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(re(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ce(t))return"Blackberry";if(ue(t))return"Webos";if(ie(t))return"Safari";if((t.includes("chrome/")||oe(t))&&!t.includes("edge/"))return"Chrome";if(ae(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function re(e=(0,r.getUA)()){return/firefox\//i.test(e)}function ie(e=(0,r.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function oe(e=(0,r.getUA)()){return/crios\//i.test(e)}function se(e=(0,r.getUA)()){return/iemobile/i.test(e)}function ae(e=(0,r.getUA)()){return/android/i.test(e)}function ce(e=(0,r.getUA)()){return/blackberry/i.test(e)}function ue(e=(0,r.getUA)()){return/webos/i.test(e)}function le(e=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function he(e=(0,r.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function de(e=(0,r.getUA)()){return le(e)||ae(e)||ue(e)||ce(e)||/windows phone/i.test(e)||se(e)}
/**
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
 */
function fe(e,t=[]){let n;switch(e){case"Browser":n=ne((0,r.getUA)());break;case"Worker":n=`${ne((0,r.getUA)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${o}`}
/**
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
 */async function pe(e,t){return P(e,"GET","/v2/recaptchaConfig",O(e,t))}
/**
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
 */function me(e){return void 0!==e&&void 0!==e.getResponse}function ge(e){return void 0!==e&&void 0!==e.enterprise}class ye{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
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
 */function ve(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function we(e){return`__${e}${Math.floor(1e6*Math.random())}`}class be{constructor(e){this.type="recaptcha-enterprise",this.auth=ke(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;ge(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{pe(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new ye(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&ge(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));ve("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function xe(e,t,n,r=!1){const i=new be(e);let o;try{o=await i.verify(n)}catch(e){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
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
 */class Ie{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
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
 */class Ee{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _e(this),this.idTokenSubscription=new _e(this),this.beforeStateQueue=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Y(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await te.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.getModularInstance)(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Y(e))}))}async initializeRecaptchaConfig(){const e=await pe(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ye(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new be(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Y(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await te.create(this,[Y(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){m.logLevel<=a.LogLevel.WARN&&m.warn(`Auth (${i.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ke(e){return(0,r.getModularInstance)(e)}class _e{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.createSubscribe)((e=>this.observer=e))}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function Te(e,t,n){const r=ke(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=Se(t),{host:s,port:a}=function(e){const t=Se(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ae(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ae(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function Se(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ae(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ne{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
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
 */async function Ce(e,t){return P(e,"POST","/v1/accounts:resetPassword",O(e,t))}async function Re(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function De(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}async function Oe(e,t){return P(e,"POST","/v1/accounts:sendOobCode",O(e,t))}async function Pe(e,t){return Oe(e,t)}async function Le(e,t){return Oe(e,t)}
/**
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
 */
class Me extends Ne{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Me(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Me(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await xe(e,n,"signInWithPassword");return De(e,t)}return De(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await xe(e,n,"signInWithPassword");return De(e,t)}return Promise.reject(t)}));case"emailLink":
/**
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
 */
return async function(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Re(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Fe(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
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
 */class je extends Ne{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,s.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new je(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return Fe(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fe(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.querystring)(t)}return e}}
/**
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
 */const Ue={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Be extends Ne{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Be({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Be({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ue)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Be({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */class Ve{constructor(e){var t,n,i,o,s,a;const c=(0,r.querystringDecode)((0,r.extractQuerystring)(e)),u=null!==(t=c.apiKey)&&void 0!==t?t:null,l=null!==(n=c.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).link,n=t?(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||t||e}(e);try{return new Ve(t)}catch(e){return null}}}
/**
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
 */
class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Me._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ve.parseLink(t);return I(n,"argument-error"),Me._fromEmailAndCode(e,n.code,n.tenantId)}}ze.PROVIDER_ID="password",ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class qe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class We extends qe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ge extends We{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),je._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),je._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ge.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ge.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:s}=e;if(!(n||r||t||i))return null;if(!s)return null;try{return new Ge(s)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(e){return null}}}
/**
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
 */class $e extends We{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch(e){return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com",$e.PROVIDER_ID="facebook.com";
/**
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
 */
class He extends We{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return je._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return He.credential(t,n)}catch(e){return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com",He.PROVIDER_ID="google.com";
/**
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
 */
class Ke extends We{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(e){return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com",Ke.PROVIDER_ID="github.com";class Qe extends Ne{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Fe(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Qe(n,i):null}static _create(e,t){return new Qe(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
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
 */class Xe extends qe{constructor(e){I(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return Xe.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Xe.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Qe.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Qe._create(n,t)}catch(e){return null}}}
/**
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
 */class Ye extends We{constructor(){super("twitter.com")}static credential(e,t){return je._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ye.credential(t,n)}catch(e){return null}}}
/**
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
 */
async function Je(e,t){return M(e,"POST","/v1/accounts:signUp",O(e,t))}
/**
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
 */Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Q._fromIdTokenResponse(e,n,r),o=et(n);return new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */async function tt(e){var t;const n=ke(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ze({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Je(n,{returnSecureToken:!0}),i=await Ze._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
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
 */class nt extends r.FirebaseError{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nt(e,t,n,r)}}function rt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw nt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */function it(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
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
 */async function ot(e,t){const n=(0,r.getModularInstance)(e);await at(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return P(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=it(i||[]);return n.providerData=n.providerData.filter((e=>o.has(e.providerId))),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function st(e,t,n=!1){const r=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}async function at(e,t,n){await $(t);const r=!1===e?"provider-already-linked":"no-such-provider";I(it(t.providerData).has(n)===e,t.auth,r)}
/**
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
 */async function ct(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await q(e,rt(r,i,t,e),n);I(o.idToken,r,"internal-error");const s=z(o.idToken);I(s,r,"internal-error");const{sub:a}=s;return I(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&y(r,"user-mismatch"),e}}
/**
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
 */async function ut(e,t,n=!1){const r="signIn",i=await rt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function lt(e,t){return ut(ke(e),t)}async function ht(e,t){const n=(0,r.getModularInstance)(e);return await at(!1,n,t.providerId),st(n,t)}async function dt(e,t){return ct((0,r.getModularInstance)(e),t)}
/**
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
 */
/**
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
 */
async function ft(e,t){const n=ke(e),r=await async function(e,t){return M(e,"POST","/v1/accounts:signInWithCustomToken",O(e,t))}(n,{token:t,returnSecureToken:!0}),i=await Ze._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
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
 */class pt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?mt._fromServerResponse(e,t):"totpInfo"in t?gt._fromServerResponse(e,t):y(e,"internal-error")}}class mt extends pt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new mt(t)}}class gt extends pt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new gt(t)}}
/**
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
 */function yt(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
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
 */async function vt(e,t,n){var r;const i=ke(e),o={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await xe(i,o,"getOobCode",!0);n&&yt(i,e,n),await Pe(i,e)}else n&&yt(i,o,n),await Pe(i,o).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await xe(i,o,"getOobCode",!0);n&&yt(i,e,n),await Pe(i,e)}}))}async function wt(e,t,n){await Ce((0,r.getModularInstance)(e),{oobCode:t,newPassword:n})}async function bt(e,t){await async function(e,t){return P(e,"POST","/v1/accounts:update",O(e,t))}((0,r.getModularInstance)(e),{oobCode:t})}async function xt(e,t){const n=(0,r.getModularInstance)(e),i=await Ce(n,{oobCode:t}),o=i.requestType;switch(I(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=pt._fromServerResponse(ke(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:o}}async function It(e,t){const{data:n}=await xt((0,r.getModularInstance)(e),t);return n.email}async function Et(e,t,n){var r;const i=ke(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await xe(i,o,"signUpPassword");s=Je(i,e)}else s=Je(i,o).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await xe(i,o,"signUpPassword");return Je(i,e)}return Promise.reject(e)}));const a=await s.catch((e=>Promise.reject(e))),c=await Ze._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function kt(e,t,n){return lt((0,r.getModularInstance)(e),ze.credential(t,n))}
/**
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
 */async function _t(e,t,n){var r;const i=ke(e),o={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function s(e,t){I(t.handleCodeInApp,i,"argument-error"),t&&yt(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await xe(i,o,"getOobCode",!0);s(e,n),await Le(i,e)}else s(o,n),await Le(i,o).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await xe(i,o,"getOobCode",!0);s(e,n),await Le(i,e)}}))}function Tt(e,t){const n=Ve.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function St(e,t,n){const i=(0,r.getModularInstance)(e),o=ze.credentialWithLink(t,n||_());return I(o._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),lt(i,o)}
/**
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
 */
/**
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
 */
async function At(e,t){const n={identifier:t,continueUri:T()?_():"http://localhost"},{signinMethods:i}=await async function(e,t){return P(e,"POST","/v1/accounts:createAuthUri",O(e,t))}((0,r.getModularInstance)(e),n);return i||[]}async function Nt(e,t){const n=(0,r.getModularInstance)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&yt(n.auth,i,t);const{email:o}=await async function(e,t){return Oe(e,t)}(n.auth,i);o!==e.email&&await e.reload()}async function Ct(e,t,n){const i=(0,r.getModularInstance)(e),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&yt(i.auth,o,n);const{email:s}=await async function(e,t){return Oe(e,t)}(i.auth,o);s!==e.email&&await e.reload()}
/**
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
 */
/**
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
 */
async function Rt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.getModularInstance)(e),o={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await q(i,async function(e,t){return P(e,"POST","/v1/accounts:update",t)}(i.auth,o));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function Dt(e,t){return Pt((0,r.getModularInstance)(e),t,null)}function Ot(e,t){return Pt((0,r.getModularInstance)(e),null,t)}async function Pt(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const o=await q(e,Re(r,i));await e._updateTokensIfNecessary(o,!0)}
/**
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
 */class Lt{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Mt extends Lt{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Ft extends Lt{constructor(e,t){super(e,"facebook.com",t)}}class jt extends Mt{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class Ut extends Lt{constructor(e,t){super(e,"google.com",t)}}class Bt extends Mt{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Vt(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=z(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new Lt(o,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new Ft(o,i);case"github.com":return new jt(o,i);case"google.com":return new Ut(o,i);case"twitter.com":return new Bt(o,i,e.screenName||null);case"custom":case"anonymous":return new Lt(o,null);default:return new Lt(o,r,i)}}(n)}
/**
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
 */class zt{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new zt("enroll",e,t)}static _fromMfaPendingCredential(e){return new zt("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return zt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return zt._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
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
 */class qt{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=ke(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>pt._fromServerResponse(n,e)));I(r.mfaPendingCredential,n,"internal-error");const o=zt._fromMfaPendingCredential(r.mfaPendingCredential);return new qt(o,i,(async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const s=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Ze._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),Ze._forOperation(t.user,t.operationType,s);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Wt(e,t){var n;const i=(0,r.getModularInstance)(e),o=t;return I(t.customData.operationType,i,"argument-error"),I(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),qt._fromError(i,o)}
/**
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
 */class Gt{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>pt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Gt(e)}async getSession(){return zt._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await q(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await q(this.user,(r=this.user.auth,i={idToken:n,mfaEnrollmentId:t},P(r,"POST","/v2/accounts/mfaEnrollment:withdraw",O(r,i))));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}var r,i}}const $t=new WeakMap;function Ht(e){const t=(0,r.getModularInstance)(e);return $t.has(t)||$t.set(t,Gt._fromUser(t)),$t.get(t)}const Kt="__sak";
/**
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
 */class Qt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kt,"1"),this.storage.removeItem(Kt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Xt extends Qt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,r.getUA)();return ie(e)||le(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=de(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xt.type="LOCAL";const Yt=Xt;
/**
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
 */class Jt extends Qt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jt.type="SESSION";const Zt=Jt;
/**
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
 */
/**
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
 */
class en{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new en(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function tn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */en.receivers=[];class nn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=tn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
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
 */function rn(){return window}
/**
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
 */
function on(){return void 0!==rn().WorkerGlobalScope&&"function"==typeof rn().importScripts}
/**
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
 */
const sn="firebaseLocalStorageDb",an="firebaseLocalStorage",cn="fbase_key";class un{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ln(e,t){return e.transaction([an],t?"readwrite":"readonly").objectStore(an)}function hn(){const e=indexedDB.open(sn,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(an,{keyPath:cn})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(an)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(sn);return new un(e).toPromise()}(),t(await hn()))}))}))}async function dn(e,t,n){const r=ln(e,!0).put({[cn]:t,value:n});return new un(r).toPromise()}function fn(e,t){const n=ln(e,!0).delete(t);return new un(n).toPromise()}class pn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await hn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return on()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=en._getInstance(on()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new nn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hn();return await dn(e,Kt,"1"),await fn(e,Kt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>dn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ln(e,!1).get(t),r=await new un(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>fn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ln(e,!1).getAll();return new un(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}pn.type="LOCAL";const mn=pn;
/**
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
 */
/**
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
 */
const gn=1e12;class yn{constructor(e){this.auth=e,this.counter=gn,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new vn(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||gn;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||gn;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||gn;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class vn{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
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
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const wn=we("rcb"),bn=new A(3e4,6e4);class xn{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=rn().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return I(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)&&me(rn().grecaptcha)?Promise.resolve(rn().grecaptcha):new Promise(((n,i)=>{const o=rn().setTimeout((()=>{i(v(e,"network-request-failed"))}),bn.get());rn()[wn]=()=>{rn().clearTimeout(o),delete rn()[wn];const r=rn().grecaptcha;if(!r||!me(r))return void i(v(e,"internal-error"));const s=r.render;r.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};ve(`https://www.google.com/recaptcha/api.js??${(0,r.querystring)({onload:wn,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(o),i(v(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=rn().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class In{async load(e){return new yn(e)}clearedOneInstance(){}}
/**
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
 */const En="recaptcha",kn={theme:"light",type:"image"};class _n{constructor(e,t=Object.assign({},kn),n){this.parameters=t,this.type=En,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ke(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new In:new xn,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=rn()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(T()&&!on(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
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
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await async function(e){return(await P(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class Tn{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Be._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Sn(e,t,n){const i=ke(e),o=await Cn(i,t,(0,r.getModularInstance)(n));return new Tn(o,(e=>lt(i,e)))}async function An(e,t,n){const i=(0,r.getModularInstance)(e);await at(!1,i,"phone");const o=await Cn(i.auth,t,(0,r.getModularInstance)(n));return new Tn(o,(e=>ht(i,e)))}async function Nn(e,t,n){const i=(0,r.getModularInstance)(e),o=await Cn(i.auth,t,(0,r.getModularInstance)(n));return new Tn(o,(e=>dt(i,e)))}async function Cn(e,t,n){var r;const i=await n.verify();try{let o;if(I("string"==typeof i,e,"argument-error"),I(n.type===En,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){I("enroll"===t.type,e,"internal-error");const n=await function(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;I(n,e,"missing-multi-factor-info");const s=await function(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Rn(e,t){await st((0,r.getModularInstance)(e),t)}
/**
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
 */class Dn{constructor(e){this.providerId=Dn.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return Cn(this.auth,e,(0,r.getModularInstance)(t))}static credential(e,t){return Be._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Dn.credentialFromTaggedObject(t)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Be._fromTokenResponse(t,n):null}}
/**
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
 */
function On(e,t){return t?Y(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Dn.PROVIDER_ID="phone",Dn.PHONE_SIGN_IN_METHOD="phone";class Pn extends Ne{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(e){return ut(e.auth,new Pn(e),e.bypassAuthState)}function Mn(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),ct(n,new Pn(e),e.bypassAuthState)}async function Fn(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),st(n,new Pn(e),e.bypassAuthState)}
/**
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
 */class jn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Fn;case"reauthViaPopup":case"reauthViaRedirect":return Mn;default:y(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Un=new A(2e3,1e4);async function Bn(e,t,n){const r=ke(e);b(e,t,qe);const i=On(r,n);return new qn(r,"signInViaPopup",t,i).executeNotNull()}async function Vn(e,t,n){const i=(0,r.getModularInstance)(e);b(i.auth,t,qe);const o=On(i.auth,n);return new qn(i.auth,"reauthViaPopup",t,o,i).executeNotNull()}async function zn(e,t,n){const i=(0,r.getModularInstance)(e);b(i.auth,t,qe);const o=On(i.auth,n);return new qn(i.auth,"linkViaPopup",t,o,i).executeNotNull()}class qn extends jn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=tn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Un.get())};e()}}qn.currentPopupAction=null;
/**
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
 */
const Wn="pendingRedirect",Gn=new Map;class $n extends jn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Yn(t),r=Xn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Gn.set(this.auth._key(),e)}return this.bypassAuthState||Gn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hn(e,t){return Xn(e)._set(Yn(t),"true")}function Kn(){Gn.clear()}function Qn(e,t){Gn.set(e._key(),t)}function Xn(e){return Y(e._redirectPersistence)}function Yn(e){return ee(Wn,e.config.apiKey,e.name)}
/**
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
 */function Jn(e,t,n){return async function(e,t,n){const r=ke(e);b(e,t,qe),await r._initializationPromise;const i=On(r,n);return await Hn(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function Zn(e,t,n){return async function(e,t,n){const i=(0,r.getModularInstance)(e);b(i.auth,t,qe),await i.auth._initializationPromise;const o=On(i.auth,n);await Hn(o,i.auth);const s=await rr(i);return o._openRedirect(i.auth,t,"reauthViaRedirect",s)}(e,t,n)}function er(e,t,n){return async function(e,t,n){const i=(0,r.getModularInstance)(e);b(i.auth,t,qe),await i.auth._initializationPromise;const o=On(i.auth,n);await at(!1,i,t.providerId),await Hn(o,i.auth);const s=await rr(i);return o._openRedirect(i.auth,t,"linkViaRedirect",s)}(e,t,n)}async function tr(e,t){return await ke(e)._initializationPromise,nr(e,t,!1)}async function nr(e,t,n=!1){const r=ke(e),i=On(r,t),o=new $n(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function rr(e){const t=tn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
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
 */class ir{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sr(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!sr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(or(e))}saveEventToCache(e){this.cachedEventUids.add(or(e)),this.lastProcessedEventTime=Date.now()}}function or(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function sr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function ar(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
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
 */const cr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ur=/^https?/;function lr(e){const t=_(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ur.test(n))return!1;if(cr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const hr=new A(3e4,6e4);function dr(){const e=rn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let fr=null;function pr(e){return fr=fr||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){dr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dr(),n(v(e,"network-request-failed"))},timeout:hr.get()})}if(null===(i=null===(r=rn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=rn().gapi)||void 0===o?void 0:o.load)){const t=we("iframefcb");return rn()[t]=()=>{gapi.load?s():n(v(e,"network-request-failed"))},ve(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw fr=null,e}))}(e),fr}
/**
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
 */const mr=new A(5e3,15e3),gr="__/auth/iframe",yr="emulator/auth/iframe",vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function br(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,yr):`https://${e.config.authDomain}/${gr}`,o={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},s=wr.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.querystring)(o).slice(1)}`}
/**
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
 */
const xr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ir{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Er(e,t,n,i=500,o=600){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},xr),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.getUA)().toLowerCase();n&&(c=oe(l)?"_blank":n),re(l)&&(t=t||"http://localhost",u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,r.getUA)()){var t;return le(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",c),new Ir(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Ir(d)}const kr="__/auth/handler",_r="emulator/auth/handler",Tr=encodeURIComponent("fac");async function Sr(e,t,n,o,s,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.SDK_VERSION,eventId:s};if(t instanceof qe){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.isEmpty)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof We){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];const l=await e._getAppCheckToken(),h=l?`#${Tr}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?N(e,_r):`https://${e.authDomain}/${kr}`}
/**
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
 */(e)}?${(0,r.querystring)(u).slice(1)}${h}`}const Ar="webStorageSupport";const Nr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zt,this._completeRedirectFn=nr,this._overrideRedirectResult=Qn}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Er(e,await Sr(e,t,n,_(),r),tn())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){rn().location.href=e}(await Sr(e,t,n,_(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await pr(e),n=rn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:br(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=v(e,"network-request-failed"),o=rn().setTimeout((()=>{r(i)}),mr.get());function s(){rn().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new ir(e);return t.register("authEvent",(t=>{I(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ar,{type:Ar},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Ar];void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ar(e);for(const e of t)try{if(lr(e))return}catch(e){}y(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return de()||ie()||le()}};class Cr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Rr extends Cr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Rr(e)}_finalizeEnroll(e,t,n){return function(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Dr{constructor(){}static assertion(e){return Rr._fromCredential(e)}}Dr.FACTOR_ID="phone";var Or="@firebase/auth",Pr="0.23.2";
/**
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
 */
class Lr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
(0,r.getExperimentalSetting)("authIdTokenMaxAge");var Mr;Mr="Browser",(0,i._registerComponent)(new(0,c.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=n.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:o,authDomain:s,clientPlatform:Mr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fe(Mr)},c=new Ee(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Y);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,i._registerComponent)(new(0,c.Component)("auth-internal",(e=>(e=>new Lr(e))(ke(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(Or,Pr,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Mr)),(0,i.registerVersion)(Or,Pr,"esm2017")})),o.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),o.register("cV6qV",(function(e,t){o("hhibK")})),o.register("hhibK",(function(e,t){var n=o("hVw4Q"),r=o("3PjDZ"),i=o("ffjl9"),s=o("4a6xH");
/**
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
 */
function a(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new(0,r.FirestoreError)("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
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
 */function c(){if("undefined"==typeof Uint8Array)throw new(0,r.FirestoreError)("unimplemented","Uint8Arrays are not available in this environment.")}function u(){if(!(0,r._isBase64Available)())throw new(0,r.FirestoreError)("unimplemented","Blobs are unavailable in Firestore in this environment.")}class l{constructor(e){this._delegate=e}static fromBase64String(e){return u(),new l(r.Bytes.fromBase64String(e))}static fromUint8Array(e){return c(),new l(r.Bytes.fromUint8Array(e))}toBase64(){return u(),this._delegate.toBase64()}toUint8Array(){return c(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
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
 */function h(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
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
 */(e,["next","error","complete"])}class d{enableIndexedDbPersistence(e,t){return(0,r.enableIndexedDbPersistence)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,r.enableMultiTabIndexedDbPersistence)(e._delegate)}clearIndexedDbPersistence(e){return(0,r.clearIndexedDbPersistence)(e._delegate)}}class f{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof r._DatabaseId||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||(0,r._logWarn)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){(0,r.connectFirestoreEmulator)(this._delegate,e,t,n)}enableNetwork(){return(0,r.enableNetwork)(this._delegate)}disableNetwork(){return(0,r.disableNetwork)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,(0,r._validateIsNotUsedTogether)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,r.waitForPendingWrites)(this._delegate)}onSnapshotsInSync(e){return(0,r.onSnapshotsInSync)(this._delegate,e)}get app(){if(!this._appCompat)throw new(0,r.FirestoreError)("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new S(this,(0,r.collection)(this._delegate,e))}catch(e){throw w(e,"collection()","Firestore.collection()")}}doc(e){try{return new v(this,(0,r.doc)(this._delegate,e))}catch(e){throw w(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new k(this,(0,r.collectionGroup)(this._delegate,e))}catch(e){throw w(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,r.runTransaction)(this._delegate,(t=>e(new m(this,t))))}batch(){return(0,r.ensureFirestoreConfigured)(this._delegate),new g(new(0,r.WriteBatch)(this._delegate,(e=>(0,r.executeWrite)(this._delegate,e))))}loadBundle(e){return(0,r.loadBundle)(this._delegate,e)}namedQuery(e){return(0,r.namedQuery)(this._delegate,e).then((e=>e?new k(this,e):null))}}class p extends r.AbstractUserDataWriter{constructor(e){super(),this.firestore=e}convertBytes(e){return new l(new(0,r.Bytes)(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return v.forKey(t,this.firestore,null)}}class m{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new p(e)}get(e){const t=A(e);return this._delegate.get(t).then((e=>new I(this._firestore,new(0,r.DocumentSnapshot)(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=A(e);return n?(a("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=A(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=A(e);return this._delegate.delete(t),this}}class g{constructor(e){this._delegate=e}set(e,t,n){const r=A(e);return n?(a("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=A(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=A(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class y{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new(0,r.QueryDocumentSnapshot)(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new E(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=y.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new y(e,new p(e),t),r.set(t,i)),i}}y.INSTANCES=new WeakMap;class v{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new p(e)}static forPath(e,t,n){if(e.length%2!=0)throw new(0,r.FirestoreError)("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new v(t,new(0,r.DocumentReference)(t._delegate,n,new(0,r._DocumentKey)(e)))}static forKey(e,t,n){return new v(t,new(0,r.DocumentReference)(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new S(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new S(this.firestore,(0,r.collection)(this._delegate,e))}catch(e){throw w(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=(0,i.getModularInstance)(e))instanceof r.DocumentReference&&(0,r.refEqual)(this._delegate,e)}set(e,t){t=a("DocumentReference.set",t);try{return t?(0,r.setDoc)(this._delegate,e,t):(0,r.setDoc)(this._delegate,e)}catch(e){throw w(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?(0,r.updateDoc)(this._delegate,e):(0,r.updateDoc)(this._delegate,e,t,...n)}catch(e){throw w(e,"updateDoc()","DocumentReference.update()")}}delete(){return(0,r.deleteDoc)(this._delegate)}onSnapshot(...e){const t=b(e),n=x(e,(e=>new I(this.firestore,new(0,r.DocumentSnapshot)(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return(0,r.onSnapshot)(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?(0,r.getDocFromCache)(this._delegate):"server"===(null==e?void 0:e.source)?(0,r.getDocFromServer)(this._delegate):(0,r.getDoc)(this._delegate),t.then((e=>new I(this.firestore,new(0,r.DocumentSnapshot)(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new v(this.firestore,e?this._delegate.withConverter(y.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function w(e,t,n){return e.message=e.message.replace(t,n),e}function b(e){for(const t of e)if("object"==typeof t&&!h(t))return t;return{}}function x(e,t){var n,r;let i;return i=h(e[0])?e[0]:h(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class I{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new v(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,r.snapshotEqual)(this._delegate,e._delegate)}}class E extends I{data(e){const t=this._delegate.data(e);return(0,r._debugAssert)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class k{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new p(e)}where(e,t,n){try{return new k(this.firestore,(0,r.query)(this._delegate,(0,r.where)(e,t,n)))}catch(e){throw w(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new k(this.firestore,(0,r.query)(this._delegate,(0,r.orderBy)(e,t)))}catch(e){throw w(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new k(this.firestore,(0,r.query)(this._delegate,(0,r.limit)(e)))}catch(e){throw w(e,"limit()","Query.limit()")}}limitToLast(e){try{return new k(this.firestore,(0,r.query)(this._delegate,(0,r.limitToLast)(e)))}catch(e){throw w(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new k(this.firestore,(0,r.query)(this._delegate,(0,r.startAt)(...e)))}catch(e){throw w(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new k(this.firestore,(0,r.query)(this._delegate,(0,r.startAfter)(...e)))}catch(e){throw w(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new k(this.firestore,(0,r.query)(this._delegate,(0,r.endBefore)(...e)))}catch(e){throw w(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new k(this.firestore,(0,r.query)(this._delegate,(0,r.endAt)(...e)))}catch(e){throw w(e,"endAt()","Query.endAt()")}}isEqual(e){return(0,r.queryEqual)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?(0,r.getDocsFromCache)(this._delegate):"server"===(null==e?void 0:e.source)?(0,r.getDocsFromServer)(this._delegate):(0,r.getDocs)(this._delegate),t.then((e=>new T(this.firestore,new(0,r.QuerySnapshot)(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=b(e),n=x(e,(e=>new T(this.firestore,new(0,r.QuerySnapshot)(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return(0,r.onSnapshot)(this._delegate,t,n)}withConverter(e){return new k(this.firestore,e?this._delegate.withConverter(y.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class _{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new E(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class T{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new k(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new E(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new _(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new E(this._firestore,n))}))}isEqual(e){return(0,r.snapshotEqual)(this._delegate,e._delegate)}}class S extends k{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new v(this.firestore,e):null}doc(e){try{return new v(this.firestore,void 0===e?(0,r.doc)(this._delegate):(0,r.doc)(this._delegate,e))}catch(e){throw w(e,"doc()","CollectionReference.doc()")}}add(e){return(0,r.addDoc)(this._delegate,e).then((e=>new v(this.firestore,e)))}isEqual(e){return(0,r.refEqual)(this._delegate,e._delegate)}withConverter(e){return new S(this.firestore,e?this._delegate.withConverter(y.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function A(e){return(0,r._cast)(e,r.DocumentReference)}
/**
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
 */class N{constructor(...e){this._delegate=new(0,r.FieldPath)(...e)}static documentId(){return new N(r._FieldPath.keyField().canonicalString())}isEqual(e){return(e=(0,i.getModularInstance)(e))instanceof r.FieldPath&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
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
 */class C{constructor(e){this._delegate=e}static serverTimestamp(){const e=(0,r.serverTimestamp)();return e._methodName="FieldValue.serverTimestamp",new C(e)}static delete(){const e=(0,r.deleteField)();return e._methodName="FieldValue.delete",new C(e)}static arrayUnion(...e){const t=(0,r.arrayUnion)(...e);return t._methodName="FieldValue.arrayUnion",new C(t)}static arrayRemove(...e){const t=(0,r.arrayRemove)(...e);return t._methodName="FieldValue.arrayRemove",new C(t)}static increment(e){const t=(0,r.increment)(e);return t._methodName="FieldValue.increment",new C(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
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
 */const R={Firestore:f,GeoPoint:r.GeoPoint,Timestamp:r.Timestamp,Blob:l,Transaction:m,WriteBatch:g,DocumentReference:v,DocumentSnapshot:I,Query:k,QueryDocumentSnapshot:E,QuerySnapshot:T,CollectionReference:S,FieldPath:N,FieldValue:C,setLogLevel:function(e){(0,r.setLogLevel)(e)},CACHE_SIZE_UNLIMITED:r.CACHE_SIZE_UNLIMITED};
/**
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
 */
var D,O;D=n.default,O=(e,t)=>new f(e,t,new d),D.INTERNAL.registerComponent(new(0,s.Component)("firestore-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return O(t,n)}),"PUBLIC").setServiceProps(Object.assign({},R))),D.registerVersion("@firebase/firestore-compat","0.3.9")})),o.register("7Y9D8",(function(e,n){var r,i;r=void 0===t?"undefined"==typeof window?e.exports:window:t,i=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,r,i,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",u="Failure",l="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",w="Ask",b="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},I="Standard",E="Hourglass",k="Circle",_="Arrows",T="Dots",S="Pulse",A="Custom",N="Notiflix",C={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",D="Hourglass",O="Circle",P="Arrows",L="Dots",M="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},j=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},U=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},B=function(t){return t||(t="head"),null!==e.document[t]||(j('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},V=function(t,n){if(!B("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}},z=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=t&&"[object Object]"===Object.prototype.toString.call(n[r])?z(e[r],n[r]):n[r])};n<arguments.length;n++)r(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},W=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},Q=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},X=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,J=function(n,r,i,o){if(!B("body"))return!1;t||ue.Notify.init({});var s=z(!0,t,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof i?f=i:"object"==typeof o&&(f=o),t=z(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof r&&(r="Notiflix "+n),t.plainText&&(r=q(r)),!t.plainText&&r.length>t.messageMaxLength&&(t=z(!0,t,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>t.messageMaxLength&&(r=r.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(d.wrapID)||e.document.createElement("div");if(m.id=d.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(d.overlayID)||e.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(d.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(d.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+Y,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof i?"nx-with-close-button":"")+" "+("function"==typeof i?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var v="";if(t.closeButton&&"function"!=typeof i&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?v:"");else{var w="";n===c?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===u?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===l?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=w+'<span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+r+"</span>"+(t.closeButton?v:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(d.wrapID);b.insertBefore(y,b.firstChild)}else e.document.getElementById(d.wrapID).appendChild(y);var x=e.document.getElementById(y.id);if(x){var I,E,k=function(){x.classList.add("nx-remove");var t=e.document.getElementById(d.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(I)},_=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(d.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(E)};if(t.closeButton&&"function"!=typeof i&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){k();var e=setTimeout((function(){_(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof i||t.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof i&&i(),k();var e=setTimeout((function(){_(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof i){var T=function(){I=setTimeout((function(){k()}),t.timeout),E=setTimeout((function(){_()}),t.timeout+t.cssAnimationDuration)};T(),t.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(I),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),T()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var S,A=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),N=0;N<A.length;N++)null!==(S=A[N]).parentNode&&S.parentNode.removeChild(S);t=z(!0,t,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,r,i,o,s,c){if(!B("body"))return!1;n||ue.Report.init({});var u={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof c&&!Array.isArray(c)){var l={};"object"==typeof s?l=s:"object"==typeof c&&(l=c),u=z(!0,n,{}),n=z(!0,n,l)}var h=n[t.toLocaleLowerCase("en")];"string"!=typeof r&&(r="Notiflix "+t),"string"!=typeof i&&(t===f?i='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?i='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?i='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(i='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(r=q(r),i=q(i),o=q(o)),n.plainText||(r.length>n.titleMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),i.length>n.messageMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),r.length>n.titleMaxLength&&(r=r.substring(0,n.titleMaxLength)+"..."),i.length>n.messageMaxLength&&(i=i.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",w=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(w?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b="";if(t===f?b=function(e,t){return e||(e="110px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===p?b=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===m?b=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):t===g&&(b=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+b+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+r+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+i+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var x=function(){var t=e.document.getElementById(d.id);t.classList.add("nx-remove");var r=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(r)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),x()})),v&&w&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){x()}))}n=z(!0,n,u)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,i,o,s,c,u,l,h){if(!B("body"))return!1;r||ue.Confirm.init({});var d=z(!0,r,{});"object"!=typeof h||Array.isArray(h)||(r=z(!0,r,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof i&&(i="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof u&&(u=void 0),"function"!=typeof l&&(l=void 0),r.plainText&&(n=q(n),i=q(i),s=q(s),c=q(c)),r.plainText||(n.length>r.titleMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",c="..."),i.length>r.messageMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",c="..."),(s.length||c.length)>r.buttonsMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",c="...")),n.length>r.titleMaxLength&&(n=n.substring(0,r.titleMaxLength)+"..."),i.length>r.messageMaxLength&&(i=i.substring(0,r.messageMaxLength)+"..."),s.length>r.buttonsMaxLength&&(s=s.substring(0,r.buttonsMaxLength)+"..."),c.length>r.buttonsMaxLength&&(c=c.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=x.ID,f.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),f.style.zIndex=r.zindex,f.style.padding=r.distance,r.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof r.position?r.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+r.fontFamily+'", '+a;var m="";r.backOverlay&&(m='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof u&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+c+"</a>");var y="",v=null,I=void 0;if(t===w||t===b){v=o||"";var E=t===w||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+v+'"':"")+' maxlength="'+E+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+n+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+i+y+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof u?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var k=e.document.getElementById(f.id),_=e.document.getElementById("NXConfirmButtonOk"),T=e.document.getElementById("NXConfirmValidationInput");T&&(T.focus(),T.setSelectionRange(0,(T.value||"").length),T.addEventListener("keyup",(function(e){var n=e.target.value;t===w&&n!==v?(e.preventDefault(),T.classList.add("nx-validation-failure"),T.classList.remove("nx-validation-success")):(t===w&&(T.classList.remove("nx-validation-failure"),T.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&_.dispatchEvent(new Event("click")))}))),_.addEventListener("click",(function(e){if(t===w&&v&&T){if((T.value||"").toString()!==v)return T.focus(),T.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;T.classList.remove("nx-validation-failure")}"function"==typeof u&&(t===b&&T&&(I=T.value||""),u(I)),k.classList.add("nx-remove");var n=setTimeout((function(){null!==k.parentNode&&(k.parentNode.removeChild(k),clearTimeout(n))}),r.cssAnimationDuration)})),"function"==typeof u&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof l&&(t===b&&T&&(I=T.value||""),l(I)),k.classList.add("nx-remove");var e=setTimeout((function(){null!==k.parentNode&&(k.parentNode.removeChild(k),clearTimeout(e))}),r.cssAnimationDuration)}))}r=z(!0,r,d)},re=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ie=function(t,n,r,o,s){if(!B("body"))return!1;i||ue.Loading.init({});var c=z(!0,i,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof r&&!Array.isArray(r)){var u={};"object"==typeof n?u=n:"object"==typeof r&&(u=r),i=z(!0,i,u)}var l="";if("string"==typeof n&&0<n.length&&(l=n),o){var h="";0<(l=l.length>i.messageMaxLength?q(l).toString().substring(0,i.messageMaxLength)+"...":q(l).toString()).length&&(h='<p id="'+i.messageID+'" class="nx-loading-message" style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+l+"</p>"),i.cssAnimation||(i.cssAnimationDuration=0);var d="";if(t===I)d=W(i.svgSize,i.svgColor);else if(t===E)d=G(i.svgSize,i.svgColor);else if(t===k)d=$(i.svgSize,i.svgColor);else if(t===_)d=H(i.svgSize,i.svgColor);else if(t===T)d=K(i.svgSize,i.svgColor);else if(t===S)d=Q(i.svgSize,i.svgColor);else if(t===A&&null!==i.customSvgCode&&null===i.customSvgUrl)d=i.customSvgCode||"";else if(t===A&&null!==i.customSvgUrl&&null===i.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+i.svgSize+'" height="'+i.svgSize+'" src="'+i.customSvgUrl+'" alt="Notiflix">';else{if(t===A&&(null===i.customSvgUrl||null===i.customSvgCode))return j('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(i.svgSize,"#f8f8f8","#32c682")}var f=parseInt((i.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+i.className+"-icon"+(0<l.length?" nx-with-message":"")+'">'+d+"</div>",y=e.document.createElement("div");y.id=C.ID,y.className=i.className+(i.cssAnimation?" nx-with-animation":"")+(i.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=i.zindex,y.style.background=i.backgroundColor,y.style.animationDuration=i.cssAnimationDuration+"ms",y.style.fontFamily='"'+i.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",i.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),i.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),i.cssAnimationDuration)}))}else if(e.document.getElementById(C.ID))var v=e.document.getElementById(C.ID),w=setTimeout((function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),i.cssAnimationDuration);clearTimeout(w)}),s);i=z(!0,i,c)},oe=function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(C.ID);if(n)if(0<t.length){t=t.length>i.messageMaxLength?q(t).substring(0,i.messageMaxLength)+"...":q(t);var r=n.getElementsByTagName("p")[0];if(r)r.innerHTML=t;else{var o=e.document.createElement("p");o.id=i.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=i.messageColor,o.style.fontSize=i.messageFontSize,o.innerHTML=t,n.appendChild(o)}}else j("Where is the new message?")},se=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ae=0,ce=function(t,n,r,i,s,c){var u;if(Array.isArray(r)){if(1>r.length)return j("Array of HTMLElements should contains at least one HTMLElement."),!1;u=r}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,r)){if(1>r.length)return j("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;u=Array.prototype.slice.call(r)}else{if("string"!=typeof r||1>(r||"").length||1===(r||"").length&&("#"===(r||"")[0]||"."===(r||"")[0]))return j("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var l=e.document.querySelectorAll(r);if(1>l.length)return j('You called the "Notiflix.Block..." function with "'+r+'" selector, but there is no such element(s) in the document.'),!1;u=l}o||ue.Block.init({});var h=z(!0,o,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof i?d=i:"object"==typeof s&&(d=s),o=z(!0,o,d)}var f="";"string"==typeof i&&0<i.length&&(f=i),o.cssAnimation||(o.cssAnimationDuration=0);var p=F.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(u||[]).length>=m?m:u.length,y="nx-block-temporary-position";if(t){for(var v,w=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(v=u[b]){if(-1<w.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+F.ID+"]");if(1>x.length){var I="";n&&(I=n===D?G(o.svgSize,o.svgColor):n===O?$(o.svgSize,o.svgColor):n===P?H(o.svgSize,o.svgColor):n===L?K(o.svgSize,o.svgColor):n===M?Q(o.svgSize,o.svgColor):W(o.svgSize,o.svgColor));var E='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+I+"</span>",k="";0<f.length&&(f=f.length>o.messageMaxLength?q(f).substring(0,o.messageMaxLength)+"...":q(f),k='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),ae++;var _=e.document.createElement("div");_.id=F.ID+"-"+ae,_.className=p+(o.cssAnimation?" nx-with-animation":""),_.style.position=o.position,_.style.zIndex=o.zindex,_.style.background=o.backgroundColor,_.style.animationDuration=o.cssAnimationDuration+"ms",_.style.fontFamily='"'+o.fontFamily+'", '+a,_.style.display="flex",_.style.flexWrap="wrap",_.style.flexDirection="column",_.style.alignItems="center",_.style.justifyContent="center",o.rtl&&(_.setAttribute("dir","rtl"),_.classList.add("nx-rtl-on")),_.innerHTML=E+k;var T,S=e.getComputedStyle(v).getPropertyValue("position"),A="string"==typeof S?S.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(o.svgSize))+40,C="";N>(v.offsetHeight||0)&&(C="min-height:"+N+"px;"),T=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",V=-1>=["absolute","relative","fixed","sticky"].indexOf(A);if(V||0<C.length){if(!B("head"))return!1;V&&(R="position:relative!important;");var X='<style id="Style-'+F.ID+"-"+ae+'">'+T+"."+y+"{"+R+C+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var J=Y.createContextualFragment(X);e.document.head.appendChild(J),v.classList.add(y)}v.appendChild(_)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var r=t.getAttribute("id"),i=e.document.getElementById("Style-"+r);i&&null!==i.parentNode&&i.parentNode.removeChild(i),clearTimeout(n)}),o.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else U("string"==typeof r?'"Notiflix.Block.remove();" function called with "'+r+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+r+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),o.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=u[t])&&(te(e),x=e.querySelectorAll("[id^="+F.ID+"]"),ee(x));clearTimeout(ne)}),c);o=z(!0,o,h)},ue={Notify:{init:function(e){t=z(!0,d,e),V(X,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=z(!0,t,e)):(j("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){J(c,e,t,n)},failure:function(e,t,n){J(u,e,t,n)},warning:function(e,t,n){J(l,e,t,n)},info:function(e,t,n){J(h,e,t,n)}},Report:{init:function(e){n=z(!0,y,e),V(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=z(!0,n,e)):(j("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,r,i){ee(f,e,t,n,r,i)},failure:function(e,t,n,r,i){ee(p,e,t,n,r,i)},warning:function(e,t,n,r,i){ee(m,e,t,n,r,i)},info:function(e,t,n,r,i){ee(g,e,t,n,r,i)}},Confirm:{init:function(e){r=z(!0,x,e),V(te,"NotiflixConfirmInternalCSS")},merge:function(e){return r?void(r=z(!0,r,e)):(j("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,r,i,o,s){ne(v,e,t,null,n,r,i,o,s)},ask:function(e,t,n,r,i,o,s,a){ne(w,e,t,n,r,i,o,s,a)},prompt:function(e,t,n,r,i,o,s,a){ne(b,e,t,n,r,i,o,s,a)}},Loading:{init:function(e){i=z(!0,C,e),V(re,"NotiflixLoadingInternalCSS")},merge:function(e){return i?void(i=z(!0,i,e)):(j("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){ie(I,e,t,!0,0)},hourglass:function(e,t){ie(E,e,t,!0,0)},circle:function(e,t){ie(k,e,t,!0,0)},arrows:function(e,t){ie(_,e,t,!0,0)},dots:function(e,t){ie(T,e,t,!0,0)},pulse:function(e,t){ie(S,e,t,!0,0)},custom:function(e,t){ie(A,e,t,!0,0)},notiflix:function(e,t){ie(N,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),ie(null,null,null,!1,e)},change:function(e){oe(e)}},Block:{init:function(e){o=z(!0,F,e),V(se,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=z(!0,o,e)):(j('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ce(!0,R,e,t,n)},hourglass:function(e,t,n){ce(!0,D,e,t,n)},circle:function(e,t,n){ce(!0,O,e,t,n)},arrows:function(e,t,n){ce(!0,P,e,t,n)},dots:function(e,t,n){ce(!0,L,e,t,n)},pulse:function(e,t,n){ce(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ce(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?z(!0,e.Notiflix,{Notify:ue.Notify,Report:ue.Report,Confirm:ue.Confirm,Loading:ue.Loading,Block:ue.Block}):{Notify:ue.Notify,Report:ue.Report,Confirm:ue.Confirm,Loading:ue.Loading,Block:ue.Block}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),o.register("fI1rF",(function(t,r){e(t.exports,"openModal",(function(){return l})),e(t.exports,"onAuth",(function(){return h})),e(t.exports,"setDB",(function(){return f})),e(t.exports,"getDB",(function(){return p})),o("cEmXr");var i=o("hVw4Q");o("cxzCy"),o("cV6qV"),o("ftYLF");var s=o("3PjDZ"),a=o("7sfsU"),c=o("7Y9D8"),u=o("kV9l4");function l(){if("SIGN UP"===a.openBtn.textContent.toUpperCase().trim())return a.backdrop.removeAttribute("autoriz-is-hidden"),void a.modal.classList.add("autoriz-is-active");i.default.auth().signOut().then((()=>{})).catch((e=>{console.error(e)})),localStorage.removeItem("userName"),a.openBtn.textContent="Sign up",u.shopping.classList.add("is-hidden"),u.home.classList.add("is-hidden")}function h(e){e.preventDefault();const t=a.emailInput.value,r=a.passwordInput.value,o=a.inputNameValue.value,s=a.singUpBtn.textContent.toUpperCase();"SIGN UP"===s&&i.default.auth().createUserWithEmailAndPassword(t,r).then((e=>{const t=e.user;console.log(`User with email ${t.email} registered !`),a.openBtn.textContent=o,localStorage.setItem("userName",o),(0,a.closeModal)(),i.default.auth().onAuthStateChanged((function(e){e?localStorage.setItem("currentUser",e.uid):localStorage.removeItem("currentUser")}));f([]),a.form.reset()})).catch((e=>{e.code,e.message;n(c).Notify.failure("This user already registered")})),"SIGN IN"===s&&i.default.auth().signInWithEmailAndPassword(t,r).then((e=>{const t=e.user;console.log(`User with email ${t.email} registered !`),a.openBtn.textContent=o,localStorage.setItem("userName",o),(0,a.closeModal)(),a.form.reset()})).catch((e=>{const t=e.code;e.message;console.log(t),"auth/wrong-password"===t?n(c).Notify.warning("Wrong password! Write correct password"):n(c).Notify.failure("User not found! Please sign up!")})),a.form.reset()}i.default.initializeApp({apiKey:"AIzaSyDdiX4miDnvSyE7S-piSDUDrOT024HmPxc",authDomain:"partybookshard.firebaseapp.com",databaseURL:"https://partybookshard-default-rtdb.europe-west1.firebasedatabase.app",projectId:"partybookshard",storageBucket:"partybookshard.appspot.com",messagingSenderId:"572831827905",appId:"1:572831827905:web:09a3282865bb9169df1140"}),i.default.auth().onAuthStateChanged((function(e){e?(localStorage.setItem("currentUser",e.uid),u.shopping.classList.remove("is-hidden"),u.home.classList.remove("is-hidden")):localStorage.removeItem("currentUser")}));const d=i.default.firestore();async function f(e){const t=localStorage.getItem("currentUser");await(0,s.setDoc)((0,s.doc)(d,"users",t),{booksArray:e})}async function p(){const e=localStorage.getItem("currentUser"),t=(0,s.doc)(d,"users",e),n=await(0,s.getDoc)(t);if(n.exists())return n.data().booksArray;console.log("No such document!")}})),o.register("kV9l4",(function(t,n){e(t.exports,"home",(function(){return a})),e(t.exports,"shopping",(function(){return c})),e(t.exports,"handleClickOnFilter",(function(){return u})),o("gRhVM");var r=o("6AHvh"),i=o("ju4sA"),s=o("g4lwF");const a=document.querySelector(".home-btn"),c=document.querySelector(".shop-btn");async function u(e){try{const t=`/category?category=${e}`,n=await(0,i.fetchBooks)(t);r.sectionBooksEl.innerHTML="";const o=e.split(" "),a=o.slice(0,o.length-1).join(" "),c=o[o.length-1];r.sectionBooksEl.insertAdjacentHTML("afterbegin",`<h2 class="title-hero">${a} <span>${c}</span></h2>`);const u=document.createElement("ul");u.classList.add("category-books"),r.sectionBooksEl.append(u),n.map((e=>{u.insertAdjacentHTML("beforeend",(0,s.createMarkup)(e))})).join("")}catch(e){console.log(e)}}const l=document.querySelector(".sign-btn"),h=l.textContent.trim();l.addEventListener("mouseover",(function(){"Sign up"!==h&&(l.textContent="log out")})),l.addEventListener("mouseout",(function(){"Sign up"!==h&&(l.textContent=h)}))})),o.register("gRhVM",(function(e,n){var r=o("4zyeF"),i=o("bhJ7Q");function s(){return(new Date).getTime()}var a,c=Array.prototype.slice,u={};a=void 0!==t&&t.console?t.console:"undefined"!=typeof window&&window.console?window.console:{};for(var l=[[function(){},"log"],[function(){a.log.apply(a,arguments)},"info"],[function(){a.log.apply(a,arguments)},"warn"],[function(){a.warn.apply(a,arguments)},"error"],[function(e){u[e]=s()},"time"],[function(e){var t=u[e];if(!t)throw new Error("No such label: "+e);delete u[e];var n=s()-t;a.log(e+": "+n+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=r.format.apply(null,arguments),a.error(e.stack)},"trace"],[function(e){a.log(r.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=c.call(arguments,1);i.ok(!1,r.format.apply(null,t))}},"assert"]],h=0;h<l.length;h++){var d=l[h],f=d[0],p=d[1];a[p]||(a[p]=f)}e.exports=a})),o.register("4zyeF",(function(e,t){var n=o("4TNnu"),r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},i=/%[sdj%]/g;e.exports.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,o=r.length,s=String(e).replace(i,(function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}})),a=r[n];n<o;a=r[++n])g(a)||!x(a)?s+=" "+a:s+=" "+c(a);return s},e.exports.deprecate=function(t,r){if(void 0!==n&&!0===n.noDeprecation)return t;if(void 0===n)return function(){return e.exports.deprecate(t,r).apply(this,arguments)};var i=!1;return function(){if(!i){if(n.throwDeprecation)throw new Error(r);n.traceDeprecation?console.trace(r):console.error(r),i=!0}return t.apply(this,arguments)}};var s={},a=/^$/;function c(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&e.exports._extend(r,n),w(r.showHidden)&&(r.showHidden=!1),w(r.depth)&&(r.depth=2),w(r.colors)&&(r.colors=!1),w(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),h(r,t,r.depth)}function u(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function l(e,t){return e}function h(t,n,r){if(t.customInspect&&n&&k(n.inspect)&&n.inspect!==e.exports.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return v(i)||(i=h(t,i,r)),i}var o=function(e,t){if(w(t))return e.stylize("undefined","undefined");if(v(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(y(t))return e.stylize(""+t,"number");if(m(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(t,n);if(o)return o;var s=Object.keys(n),a=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),E(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(n);if(0===s.length){if(k(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(I(n))return t.stylize(Date.prototype.toString.call(n),"date");if(E(n))return d(n)}var u,l="",x=!1,_=["{","}"];(p(n)&&(x=!0,_=["[","]"]),k(n))&&(l=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(l=" "+RegExp.prototype.toString.call(n)),I(n)&&(l=" "+Date.prototype.toUTCString.call(n)),E(n)&&(l=" "+d(n)),0!==s.length||x&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),u=x?function(e,t,n,r,i){for(var o=[],s=0,a=t.length;s<a;++s)A(t,String(s))?o.push(f(e,t,n,r,String(s),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(f(e,t,n,r,i,!0))})),o}(t,n,r,a,s):s.map((function(e){return f(t,n,r,a,e,x)})),t.seen.pop(),function(e,t,n){var r=e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return r>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(u,l,_)):_[0]+l+_[1]}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,i,o){var s,a,c;if((c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),A(r,i)||(s="["+i+"]"),a||(e.seen.indexOf(c.value)<0?(a=g(n)?h(e,c.value,null):h(e,c.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map((function(e){return"  "+e})).join("\n").slice(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),w(s)){if(o&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.slice(1,-1),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function p(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function g(e){return null===e}function y(e){return"number"==typeof e}function v(e){return"string"==typeof e}function w(e){return void 0===e}function b(e){return x(e)&&"[object RegExp]"===_(e)}function x(e){return"object"==typeof e&&null!==e}function I(e){return x(e)&&"[object Date]"===_(e)}function E(e){return x(e)&&("[object Error]"===_(e)||e instanceof Error)}function k(e){return"function"==typeof e}function _(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}e.exports.debuglog=function(t){if(t=t.toUpperCase(),!s[t])if(a.test(t)){var r=n.pid;s[t]=function(){var n=e.exports.format.apply(e.exports,arguments);console.error("%s %d: %s",t,r,n)}}else s[t]=function(){};return s[t]},e.exports.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.exports.types=o("kPQSU"),e.exports.isArray=p,e.exports.isBoolean=m,e.exports.isNull=g,e.exports.isNullOrUndefined=function(e){return null==e},e.exports.isNumber=y,e.exports.isString=v,e.exports.isSymbol=function(e){return"symbol"==typeof e},e.exports.isUndefined=w,e.exports.isRegExp=b,e.exports.types.isRegExp=b,e.exports.isObject=x,e.exports.isDate=I,e.exports.types.isDate=I,e.exports.isError=E,e.exports.types.isNativeError=E,e.exports.isFunction=k,e.exports.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},e.exports.isBuffer=o("kieVX");var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports.log=function(){var t,n;console.log("%s - %s",(t=new Date,n=[T(t.getHours()),T(t.getMinutes()),T(t.getSeconds())].join(":"),[t.getDate(),S[t.getMonth()],n].join(" ")),e.exports.format.apply(e.exports,arguments))},e.exports.inherits=o("eSHUL"),e.exports._extend=function(e,t){if(!t||!x(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var N="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function C(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}e.exports.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(N&&e[N]){var t;if("function"!=typeof(t=e[N]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,N,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,i)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),N&&Object.defineProperty(t,N,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},e.exports.promisify.custom=N,e.exports.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function t(){for(var t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);var i=t.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,s=function(){return i.apply(o,arguments)};e.apply(this,t).then((function(e){n.nextTick(s.bind(null,null,e))}),(function(e){n.nextTick(C.bind(null,e,s))}))}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,r(e)),t}})),o.register("kPQSU",(function(e,t){var n=o("6LFJs"),r=o("lhqXC"),i=o("nBFK4"),s=o("htkB6");function a(e){return e.call.bind(e)}var c="undefined"!=typeof BigInt,u="undefined"!=typeof Symbol,l=a(Object.prototype.toString),h=a(Number.prototype.valueOf),d=a(String.prototype.valueOf),f=a(Boolean.prototype.valueOf);if(c)var p=a(BigInt.prototype.valueOf);if(u)var m=a(Symbol.prototype.valueOf);function g(e,t){if("object"!=typeof e)return!1;try{return t(e),!0}catch(e){return!1}}function y(e){return"[object Map]"===l(e)}function v(e){return"[object Set]"===l(e)}function w(e){return"[object WeakMap]"===l(e)}function b(e){return"[object WeakSet]"===l(e)}function x(e){return"[object ArrayBuffer]"===l(e)}function I(e){return"undefined"!=typeof ArrayBuffer&&(x.working?x(e):e instanceof ArrayBuffer)}function E(e){return"[object DataView]"===l(e)}function k(e){return"undefined"!=typeof DataView&&(E.working?E(e):e instanceof DataView)}e.exports.isArgumentsObject=n,e.exports.isGeneratorFunction=r,e.exports.isTypedArray=s,e.exports.isPromise=function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},e.exports.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):s(e)||k(e)},e.exports.isUint8Array=function(e){return"Uint8Array"===i(e)},e.exports.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===i(e)},e.exports.isUint16Array=function(e){return"Uint16Array"===i(e)},e.exports.isUint32Array=function(e){return"Uint32Array"===i(e)},e.exports.isInt8Array=function(e){return"Int8Array"===i(e)},e.exports.isInt16Array=function(e){return"Int16Array"===i(e)},e.exports.isInt32Array=function(e){return"Int32Array"===i(e)},e.exports.isFloat32Array=function(e){return"Float32Array"===i(e)},e.exports.isFloat64Array=function(e){return"Float64Array"===i(e)},e.exports.isBigInt64Array=function(e){return"BigInt64Array"===i(e)},e.exports.isBigUint64Array=function(e){return"BigUint64Array"===i(e)},y.working="undefined"!=typeof Map&&y(new Map),e.exports.isMap=function(e){return"undefined"!=typeof Map&&(y.working?y(e):e instanceof Map)},v.working="undefined"!=typeof Set&&v(new Set),e.exports.isSet=function(e){return"undefined"!=typeof Set&&(v.working?v(e):e instanceof Set)},w.working="undefined"!=typeof WeakMap&&w(new WeakMap),e.exports.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(w.working?w(e):e instanceof WeakMap)},b.working="undefined"!=typeof WeakSet&&b(new WeakSet),e.exports.isWeakSet=function(e){return b(e)},x.working="undefined"!=typeof ArrayBuffer&&x(new ArrayBuffer),e.exports.isArrayBuffer=I,E.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&E(new DataView(new ArrayBuffer(1),0,1)),e.exports.isDataView=k;var _="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function T(e){return"[object SharedArrayBuffer]"===l(e)}function S(e){return void 0!==_&&(void 0===T.working&&(T.working=T(new _)),T.working?T(e):e instanceof _)}function A(e){return g(e,h)}function N(e){return g(e,d)}function C(e){return g(e,f)}function R(e){return c&&g(e,p)}function D(e){return u&&g(e,m)}e.exports.isSharedArrayBuffer=S,e.exports.isAsyncFunction=function(e){return"[object AsyncFunction]"===l(e)},e.exports.isMapIterator=function(e){return"[object Map Iterator]"===l(e)},e.exports.isSetIterator=function(e){return"[object Set Iterator]"===l(e)},e.exports.isGeneratorObject=function(e){return"[object Generator]"===l(e)},e.exports.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===l(e)},e.exports.isNumberObject=A,e.exports.isStringObject=N,e.exports.isBooleanObject=C,e.exports.isBigIntObject=R,e.exports.isSymbolObject=D,e.exports.isBoxedPrimitive=function(e){return A(e)||N(e)||C(e)||R(e)||D(e)},e.exports.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(I(e)||S(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(t){Object.defineProperty(e.exports,t,{enumerable:!1,value:function(){throw new Error(t+" is not supported in userland")}})}))})),o.register("6LFJs",(function(e,t){var n=o("65kqK")(),r=o("jLsQW")("Object.prototype.toString"),i=function(e){return!(n&&e&&"object"==typeof e&&Symbol.toStringTag in e)&&"[object Arguments]"===r(e)},s=function(e){return!!i(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==r(e)&&"[object Function]"===r(e.callee)},a=function(){return i(arguments)}();i.isLegacyArguments=s,e.exports=a?i:s})),o.register("65kqK",(function(e,t){var n=o("fNdnD");e.exports=function(){return n()&&!!Symbol.toStringTag}})),o.register("fNdnD",(function(e,t){e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),n=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var r=Object.getOwnPropertySymbols(e);if(1!==r.length||r[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(e,t);if(42!==i.value||!0!==i.enumerable)return!1}return!0}})),o.register("jLsQW",(function(e,t){var n=o("avqmt"),r=o("e9CQ6"),i=r(n("String.prototype.indexOf"));e.exports=function(e,t){var o=n(e,!!t);return"function"==typeof o&&i(e,".prototype.")>-1?r(o):o}})),o.register("avqmt",(function(e,t){var n,r=SyntaxError,i=Function,s=TypeError,a=function(e){try{return i('"use strict"; return ('+e+").constructor;")()}catch(e){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(e){c=null}var u=function(){throw new s},l=c?function(){try{return u}catch(e){try{return c(arguments,"callee").get}catch(e){return u}}}():u,h=o("5CmBX")(),d=o("1q0DH")(),f=Object.getPrototypeOf||(d?function(e){return e.__proto__}:null),p={},m="undefined"!=typeof Uint8Array&&f?f(Uint8Array):n,g={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":h&&f?f([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":p,"%AsyncGenerator%":p,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":p,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?n:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":p,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":h&&f?f(f([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&h&&f?f((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&h&&f?f((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":h&&f?f(""[Symbol.iterator]()):n,"%Symbol%":h?Symbol:n,"%SyntaxError%":r,"%ThrowTypeError%":l,"%TypedArray%":m,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet};if(f)try{null.error}catch(e){var y=f(f(e));g["%Error.prototype%"]=y}var v=function e(t){var n;if("%AsyncFunction%"===t)n=a("async function () {}");else if("%GeneratorFunction%"===t)n=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)n=a("async function* () {}");else if("%AsyncGenerator%"===t){var r=e("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if("%AsyncIteratorPrototype%"===t){var i=e("%AsyncGenerator%");i&&f&&(n=f(i.prototype))}return g[t]=n,n},w={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=o("a7ABz"),x=o("56d6a"),I=b.call(Function.call,Array.prototype.concat),E=b.call(Function.apply,Array.prototype.splice),k=b.call(Function.call,String.prototype.replace),_=b.call(Function.call,String.prototype.slice),T=b.call(Function.call,RegExp.prototype.exec),S=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,A=/\\(\\)?/g,N=function(e,t){var n,i=e;if(x(w,i)&&(i="%"+(n=w[i])[0]+"%"),x(g,i)){var o=g[i];if(o===p&&(o=v(i)),void 0===o&&!t)throw new s("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:n,name:i,value:o}}throw new r("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new s('"allowMissing" argument must be a boolean');if(null===T(/^%?[^%]*%?$/,e))throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=function(e){var t=_(e,0,1),n=_(e,-1);if("%"===t&&"%"!==n)throw new r("invalid intrinsic syntax, expected closing `%`");if("%"===n&&"%"!==t)throw new r("invalid intrinsic syntax, expected opening `%`");var i=[];return k(e,S,(function(e,t,n,r){i[i.length]=n?k(r,A,"$1"):t||e})),i}(e),i=n.length>0?n[0]:"",o=N("%"+i+"%",t),a=o.name,u=o.value,l=!1,h=o.alias;h&&(i=h[0],E(n,I([0,1],h)));for(var d=1,f=!0;d<n.length;d+=1){var p=n[d],m=_(p,0,1),y=_(p,-1);if(('"'===m||"'"===m||"`"===m||'"'===y||"'"===y||"`"===y)&&m!==y)throw new r("property names with quotes must have matching quotes");if("constructor"!==p&&f||(l=!0),x(g,a="%"+(i+="."+p)+"%"))u=g[a];else if(null!=u){if(!(p in u)){if(!t)throw new s("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&d+1>=n.length){var v=c(u,p);u=(f=!!v)&&"get"in v&&!("originalValue"in v.get)?v.get:u[p]}else f=x(u,p),u=u[p];f&&!l&&(g[a]=u)}}return u}})),o.register("5CmBX",(function(e,t){var n="undefined"!=typeof Symbol&&Symbol,r=o("fNdnD");e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&r())))}})),o.register("1q0DH",(function(e,t){var n={foo:{}},r=Object;e.exports=function(){return{__proto__:n}.foo===n.foo&&!({__proto__:null}instanceof r)}})),o.register("a7ABz",(function(e,t){var n=o("cytJY");e.exports=Function.prototype.bind||n})),o.register("cytJY",(function(e,t){var n=Array.prototype.slice,r=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==r.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var i,o=n.call(arguments,1),s=Math.max(0,t.length-o.length),a=[],c=0;c<s;c++)a.push("$"+c);if(i=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof i){var r=t.apply(this,o.concat(n.call(arguments)));return Object(r)===r?r:this}return t.apply(e,o.concat(n.call(arguments)))})),t.prototype){var u=function(){};u.prototype=t.prototype,i.prototype=new u,u.prototype=null}return i}})),o.register("56d6a",(function(e,t){var n=o("a7ABz");e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)})),o.register("e9CQ6",(function(e,t){var n=o("a7ABz"),r=o("avqmt"),i=r("%Function.prototype.apply%"),s=r("%Function.prototype.call%"),a=r("%Reflect.apply%",!0)||n.call(s,i),c=r("%Object.getOwnPropertyDescriptor%",!0),u=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(u)try{u({},"a",{value:1})}catch(e){u=null}e.exports=function(e){var t=a(n,s,arguments);c&&u&&(c(t,"length").configurable&&u(t,"length",{value:1+l(0,e.length-(arguments.length-1))}));return t};var h=function(){return a(n,i,arguments)};u?u(e.exports,"apply",{value:h}):e.exports.apply=h})),o.register("lhqXC",(function(e,t){var n,r=Object.prototype.toString,i=Function.prototype.toString,s=/^\s*(?:function)?\*/,a=o("65kqK")(),c=Object.getPrototypeOf;e.exports=function(e){if("function"!=typeof e)return!1;if(s.test(i.call(e)))return!0;if(!a)return"[object GeneratorFunction]"===r.call(e);if(!c)return!1;if(void 0===n){var t=function(){if(!a)return!1;try{return Function("return function*() {}")()}catch(e){}}();n=!!t&&c(t)}return c(e)===n}})),o.register("nBFK4",(function(e,n){var r=o("lF3bv"),i=o("lUXdk"),s=o("jLsQW"),a=o("crSdH"),c=s("Object.prototype.toString"),u=o("65kqK")(),l="undefined"==typeof globalThis?t:globalThis,h=i(),d=s("String.prototype.slice"),f={},p=Object.getPrototypeOf;u&&a&&p&&r(h,(function(e){if("function"==typeof l[e]){var t=new l[e];if(Symbol.toStringTag in t){var n=p(t),r=a(n,Symbol.toStringTag);if(!r){var i=p(n);r=a(i,Symbol.toStringTag)}f[e]=r.get}}}));var m=o("htkB6");e.exports=function(e){return!!m(e)&&(u&&Symbol.toStringTag in e?function(e){var t=!1;return r(f,(function(n,r){if(!t)try{var i=n.call(e);i===r&&(t=i)}catch(e){}})),t}(e):d(c(e),8,-1))}})),o.register("lF3bv",(function(e,t){var n=o("8pyWb"),r=Object.prototype.toString,i=Object.prototype.hasOwnProperty;e.exports=function(e,t,o){if(!n(t))throw new TypeError("iterator must be a function");var s;arguments.length>=3&&(s=o),"[object Array]"===r.call(e)?function(e,t,n){for(var r=0,o=e.length;r<o;r++)i.call(e,r)&&(null==n?t(e[r],r,e):t.call(n,e[r],r,e))}(e,t,s):"string"==typeof e?function(e,t,n){for(var r=0,i=e.length;r<i;r++)null==n?t(e.charAt(r),r,e):t.call(n,e.charAt(r),r,e)}(e,t,s):function(e,t,n){for(var r in e)i.call(e,r)&&(null==n?t(e[r],r,e):t.call(n,e[r],r,e))}(e,t,s)}})),o.register("8pyWb",(function(e,t){var n,r,i=Function.prototype.toString,o="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof o&&"function"==typeof Object.defineProperty)try{n=Object.defineProperty({},"length",{get:function(){throw r}}),r={},o((function(){throw 42}),null,n)}catch(e){e!==r&&(o=null)}else o=null;var s=/^\s*class\b/,a=function(e){try{var t=i.call(e);return s.test(t)}catch(e){return!1}},c=function(e){try{return!a(e)&&(i.call(e),!0)}catch(e){return!1}},u=Object.prototype.toString,l="function"==typeof Symbol&&!!Symbol.toStringTag,h=!(0 in[,]),d=function(){return!1};if("object"==typeof document){var f=document.all;u.call(f)===u.call(document.all)&&(d=function(e){if((h||!e)&&(void 0===e||"object"==typeof e))try{var t=u.call(e);return("[object HTMLAllCollection]"===t||"[object HTML document.all class]"===t||"[object HTMLCollection]"===t||"[object Object]"===t)&&null==e("")}catch(e){}return!1})}e.exports=o?function(e){if(d(e))return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;try{o(e,null,n)}catch(e){if(e!==r)return!1}return!a(e)&&c(e)}:function(e){if(d(e))return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if(l)return c(e);if(a(e))return!1;var t=u.call(e);return!("[object Function]"!==t&&"[object GeneratorFunction]"!==t&&!/^\[object HTML/.test(t))&&c(e)}})),o.register("lUXdk",(function(e,n){var r=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],i="undefined"==typeof globalThis?t:globalThis;e.exports=function(){for(var e=[],t=0;t<r.length;t++)"function"==typeof i[r[t]]&&(e[e.length]=r[t]);return e}})),o.register("crSdH",(function(e,t){var n=o("avqmt")("%Object.getOwnPropertyDescriptor%",!0);if(n)try{n([],"length")}catch(e){n=null}e.exports=n})),o.register("htkB6",(function(e,n){var r=o("lF3bv"),i=o("lUXdk"),s=o("jLsQW"),a=s("Object.prototype.toString"),c=o("65kqK")(),u=o("crSdH"),l="undefined"==typeof globalThis?t:globalThis,h=i(),d=s("Array.prototype.indexOf",!0)||function(e,t){for(var n=0;n<e.length;n+=1)if(e[n]===t)return n;return-1},f=s("String.prototype.slice"),p={},m=Object.getPrototypeOf;c&&u&&m&&r(h,(function(e){var t=new l[e];if(Symbol.toStringTag in t){var n=m(t),r=u(n,Symbol.toStringTag);if(!r){var i=m(n);r=u(i,Symbol.toStringTag)}p[e]=r.get}}));e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!c||!(Symbol.toStringTag in e)){var t=f(a(e),8,-1);return d(h,t)>-1}return!!u&&function(e){var t=!1;return r(p,(function(n,r){if(!t)try{t=n.call(e)===r}catch(e){}})),t}(e)}})),o.register("kieVX",(function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}})),o.register("eSHUL",(function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}})),o.register("bhJ7Q",(function(e,t){var n=o("4TNnu");function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var i,s,a=o("9XRIq").codes,c=a.ERR_AMBIGUOUS_ARGUMENT,u=a.ERR_INVALID_ARG_TYPE,l=a.ERR_INVALID_ARG_VALUE,h=a.ERR_INVALID_RETURN_VALUE,d=a.ERR_MISSING_ARGS,f=o("1Nj8z"),p=o("4zyeF").inspect,m=o("4zyeF").types,g=m.isPromise,y=m.isRegExp,v=Object.assign?Object.assign:o("cgET4").assign,w=Object.is?Object.is:o("fmpVL");new Map;function b(){var e=o("dFslL");i=e.isDeepEqual,s=e.isDeepStrictEqual}var x=!1,I=e.exports=T,E={};function k(e){if(e.message instanceof Error)throw e.message;throw new f(e)}function _(e,t,n,r){if(!n){var i=!1;if(0===t)i=!0,r="No value argument passed to `assert.ok()`";else if(r instanceof Error)throw r;var o=new f({actual:n,expected:!0,message:r,operator:"==",stackStartFn:e});throw o.generatedMessage=i,o}}function T(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];_.apply(void 0,[T,t.length].concat(t))}I.fail=function e(t,r,i,o,s){var a,c=arguments.length;if(0===c)a="Failed";else if(1===c)i=t,t=void 0;else{if(!1===x)x=!0,(n.emitWarning?n.emitWarning:console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094");2===c&&(o="!=")}if(i instanceof Error)throw i;var u={actual:t,expected:r,operator:void 0===o?"fail":o,stackStartFn:s||e};void 0!==i&&(u.message=i);var l=new f(u);throw a&&(l.message=a,l.generatedMessage=!0),l},I.AssertionError=f,I.ok=T,I.equal=function e(t,n,r){if(arguments.length<2)throw new d("actual","expected");t!=n&&k({actual:t,expected:n,message:r,operator:"==",stackStartFn:e})},I.notEqual=function e(t,n,r){if(arguments.length<2)throw new d("actual","expected");t==n&&k({actual:t,expected:n,message:r,operator:"!=",stackStartFn:e})},I.deepEqual=function e(t,n,r){if(arguments.length<2)throw new d("actual","expected");void 0===i&&b(),i(t,n)||k({actual:t,expected:n,message:r,operator:"deepEqual",stackStartFn:e})},I.notDeepEqual=function e(t,n,r){if(arguments.length<2)throw new d("actual","expected");void 0===i&&b(),i(t,n)&&k({actual:t,expected:n,message:r,operator:"notDeepEqual",stackStartFn:e})},I.deepStrictEqual=function e(t,n,r){if(arguments.length<2)throw new d("actual","expected");void 0===i&&b(),s(t,n)||k({actual:t,expected:n,message:r,operator:"deepStrictEqual",stackStartFn:e})},I.notDeepStrictEqual=function e(t,n,r){if(arguments.length<2)throw new d("actual","expected");void 0===i&&b();s(t,n)&&k({actual:t,expected:n,message:r,operator:"notDeepStrictEqual",stackStartFn:e})},I.strictEqual=function e(t,n,r){if(arguments.length<2)throw new d("actual","expected");w(t,n)||k({actual:t,expected:n,message:r,operator:"strictEqual",stackStartFn:e})},I.notStrictEqual=function e(t,n,r){if(arguments.length<2)throw new d("actual","expected");w(t,n)&&k({actual:t,expected:n,message:r,operator:"notStrictEqual",stackStartFn:e})};var S=function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n.forEach((function(e){e in t&&(void 0!==r&&"string"==typeof r[e]&&y(t[e])&&t[e].test(r[e])?i[e]=r[e]:i[e]=t[e])}))};function A(e,t,n,o){if("function"!=typeof t){if(y(t))return t.test(e);if(2===arguments.length)throw new u("expected",["Function","RegExp"],t);if("object"!==r(e)||null===e){var a=new f({actual:e,expected:t,message:n,operator:"deepStrictEqual",stackStartFn:o});throw a.operator=o.name,a}var c=Object.keys(t);if(t instanceof Error)c.push("name","message");else if(0===c.length)throw new l("error",t,"may not be an empty object");return void 0===i&&b(),c.forEach((function(r){"string"==typeof e[r]&&y(t[r])&&t[r].test(e[r])||function(e,t,n,r,i,o){if(!(n in e)||!s(e[n],t[n])){if(!r){var a=new S(e,i),c=new S(t,i,e),u=new f({actual:a,expected:c,operator:"deepStrictEqual",stackStartFn:o});throw u.actual=e,u.expected=t,u.operator=o.name,u}k({actual:e,expected:t,message:r,operator:o.name,stackStartFn:o})}}(e,t,r,n,c,o)})),!0}return void 0!==t.prototype&&e instanceof t||!Error.isPrototypeOf(t)&&!0===t.call({},e)}function N(e){if("function"!=typeof e)throw new u("fn","Function",e);try{e()}catch(e){return e}return E}function C(e){return g(e)||null!==e&&"object"===r(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function R(e){return Promise.resolve().then((function(){var t;if("function"==typeof e){if(!C(t=e()))throw new h("instance of Promise","promiseFn",t)}else{if(!C(e))throw new u("promiseFn",["Function","Promise"],e);t=e}return Promise.resolve().then((function(){return t})).then((function(){return E})).catch((function(e){return e}))}))}function D(e,t,n,i){if("string"==typeof n){if(4===arguments.length)throw new u("error",["Object","Error","Function","RegExp"],n);if("object"===r(t)&&null!==t){if(t.message===n)throw new c("error/message",'The error message "'.concat(t.message,'" is identical to the message.'))}else if(t===n)throw new c("error/message",'The error "'.concat(t,'" is identical to the message.'));i=n,n=void 0}else if(null!=n&&"object"!==r(n)&&"function"!=typeof n)throw new u("error",["Object","Error","Function","RegExp"],n);if(t===E){var o="";n&&n.name&&(o+=" (".concat(n.name,")")),o+=i?": ".concat(i):".";var s="rejects"===e.name?"rejection":"exception";k({actual:void 0,expected:n,operator:e.name,message:"Missing expected ".concat(s).concat(o),stackStartFn:e})}if(n&&!A(t,n,i,e))throw t}function O(e,t,n,r){if(t!==E){if("string"==typeof n&&(r=n,n=void 0),!n||A(t,n)){var i=r?": ".concat(r):".",o="doesNotReject"===e.name?"rejection":"exception";k({actual:t,expected:n,operator:e.name,message:"Got unwanted ".concat(o).concat(i,"\n")+'Actual message: "'.concat(t&&t.message,'"'),stackStartFn:e})}throw t}}function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];_.apply(void 0,[P,t.length].concat(t))}I.throws=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];D.apply(void 0,[e,N(t)].concat(r))},I.rejects=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return R(t).then((function(t){return D.apply(void 0,[e,t].concat(r))}))},I.doesNotThrow=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];O.apply(void 0,[e,N(t)].concat(r))},I.doesNotReject=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return R(t).then((function(t){return O.apply(void 0,[e,t].concat(r))}))},I.ifError=function e(t){if(null!=t){var n="ifError got unwanted exception: ";"object"===r(t)&&"string"==typeof t.message?0===t.message.length&&t.constructor?n+=t.constructor.name:n+=t.message:n+=p(t);var i=new f({actual:t,expected:null,operator:"ifError",message:n,stackStartFn:e}),o=t.stack;if("string"==typeof o){var s=o.split("\n");s.shift();for(var a=i.stack.split("\n"),c=0;c<s.length;c++){var u=a.indexOf(s[c]);if(-1!==u){a=a.slice(0,u);break}}i.stack="".concat(a.join("\n"),"\n").concat(s.join("\n"))}throw i}},I.strict=v(P,I,{equal:I.strictEqual,deepEqual:I.deepStrictEqual,notEqual:I.notStrictEqual,notDeepEqual:I.notDeepStrictEqual}),I.strict.strict=I.strict})),o.register("9XRIq",(function(t,n){var r;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}e(t.exports,"codes",(function(){return r}),(function(e){return r=e}));var u,l,h={};function d(e,t,n){n||(n=Error);var r=function(n){function r(n,i,o){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),c=s(this,a(r).call(this,function(e,n,r){return"string"==typeof t?t:t(e,n,r)}(n,i,o))),c.code=e,c}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(r,n),r}(n);h[e]=r}function f(e,t){if(Array.isArray(e)){var n=e.length;return e=e.map((function(e){return String(e)})),n>2?"one of ".concat(t," ").concat(e.slice(0,n-1).join(", "),", or ")+e[n-1]:2===n?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return"of ".concat(t," ").concat(String(e))}d("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),d("ERR_INVALID_ARG_TYPE",(function(e,t,n){var r,s,a,c;if(void 0===u&&(u=o("bhJ7Q")),u("string"==typeof e,"'name' must be a string"),"string"==typeof t&&(s="not ",t.substr(!a||a<0?0:+a,s.length)===s)?(r="must not be",t=t.replace(/^not /,"")):r="must be",function(e,t,n){return(void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}(e," argument"))c="The ".concat(e," ").concat(r," ").concat(f(t,"type"));else{var l=function(e,t,n){return"number"!=typeof n&&(n=0),!(n+t.length>e.length)&&-1!==e.indexOf(t,n)}(e,".")?"property":"argument";c='The "'.concat(e,'" ').concat(l," ").concat(r," ").concat(f(t,"type"))}return c+=". Received type ".concat(i(n))}),TypeError),d("ERR_INVALID_ARG_VALUE",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is invalid";void 0===l&&(l=o("4zyeF"));var r=l.inspect(t);return r.length>128&&(r="".concat(r.slice(0,128),"...")),"The argument '".concat(e,"' ").concat(n,". Received ").concat(r)}),TypeError,RangeError),d("ERR_INVALID_RETURN_VALUE",(function(e,t,n){var r;return r=n&&n.constructor&&n.constructor.name?"instance of ".concat(n.constructor.name):"type ".concat(i(n)),"Expected ".concat(e,' to be returned from the "').concat(t,'"')+" function but got ".concat(r,".")}),TypeError),d("ERR_MISSING_ARGS",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];void 0===u&&(u=o("bhJ7Q")),u(t.length>0,"At least one arg needs to be specified");var r="The ",i=t.length;switch(t=t.map((function(e){return'"'.concat(e,'"')})),i){case 1:r+="".concat(t[0]," argument");break;case 2:r+="".concat(t[0]," and ").concat(t[1]," arguments");break;default:r+=t.slice(0,i-1).join(", "),r+=", and ".concat(t[i-1]," arguments")}return"".concat(r," must be specified")}),TypeError),r=h})),o.register("1Nj8z",(function(e,t){var n=o("4TNnu");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){var t="function"==typeof Map?new Map:void 0;return c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,h(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)},c(e)}function u(e,t,n){return u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&l(i,n.prototype),i},u.apply(null,arguments)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var f=o("4zyeF").inspect,p=o("9XRIq").codes.ERR_INVALID_ARG_TYPE;function m(e,t,n){return(void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}var g="",y="",v="",w="",b={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"};function x(e){var t=Object.keys(e),n=Object.create(Object.getPrototypeOf(e));return t.forEach((function(t){n[t]=e[t]})),Object.defineProperty(n,"message",{value:e.message}),n}function I(e){return f(e,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,showHidden:!1,breakLength:1/0,showProxy:!1,sorted:!0,getters:!0})}function E(e,t,r){var i="",o="",s=0,a="",c=!1,u=I(e),l=u.split("\n"),h=I(t).split("\n"),f=0,p="";if("strictEqual"===r&&"object"===d(e)&&"object"===d(t)&&null!==e&&null!==t&&(r="strictEqualObject"),1===l.length&&1===h.length&&l[0]!==h[0]){var x=l[0].length+h[0].length;if(x<=10){if(!("object"===d(e)&&null!==e||"object"===d(t)&&null!==t||0===e&&0===t))return"".concat(b[r],"\n\n")+"".concat(l[0]," !== ").concat(h[0],"\n")}else if("strictEqualObject"!==r){if(x<(n.stderr&&n.stderr.isTTY?n.stderr.columns:80)){for(;l[0][f]===h[0][f];)f++;f>2&&(p="\n  ".concat(function(e,t){if(t=Math.floor(t),0==e.length||0==t)return"";var n=e.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)e+=e,t--;return e+e.substring(0,n-e.length)}(" ",f),"^"),f=0)}}}for(var E=l[l.length-1],k=h[h.length-1];E===k&&(f++<2?a="\n  ".concat(E).concat(a):i=E,l.pop(),h.pop(),0!==l.length&&0!==h.length);)E=l[l.length-1],k=h[h.length-1];var _=Math.max(l.length,h.length);if(0===_){var T=u.split("\n");if(T.length>30)for(T[26]="".concat(g,"...").concat(w);T.length>27;)T.pop();return"".concat(b.notIdentical,"\n\n").concat(T.join("\n"),"\n")}f>3&&(a="\n".concat(g,"...").concat(w).concat(a),c=!0),""!==i&&(a="\n  ".concat(i).concat(a),i="");var S=0,A=b[r]+"\n".concat(y,"+ actual").concat(w," ").concat(v,"- expected").concat(w),N=" ".concat(g,"...").concat(w," Lines skipped");for(f=0;f<_;f++){var C=f-s;if(l.length<f+1)C>1&&f>2&&(C>4?(o+="\n".concat(g,"...").concat(w),c=!0):C>3&&(o+="\n  ".concat(h[f-2]),S++),o+="\n  ".concat(h[f-1]),S++),s=f,i+="\n".concat(v,"-").concat(w," ").concat(h[f]),S++;else if(h.length<f+1)C>1&&f>2&&(C>4?(o+="\n".concat(g,"...").concat(w),c=!0):C>3&&(o+="\n  ".concat(l[f-2]),S++),o+="\n  ".concat(l[f-1]),S++),s=f,o+="\n".concat(y,"+").concat(w," ").concat(l[f]),S++;else{var R=h[f],D=l[f],O=D!==R&&(!m(D,",")||D.slice(0,-1)!==R);O&&m(R,",")&&R.slice(0,-1)===D&&(O=!1,D+=","),O?(C>1&&f>2&&(C>4?(o+="\n".concat(g,"...").concat(w),c=!0):C>3&&(o+="\n  ".concat(l[f-2]),S++),o+="\n  ".concat(l[f-1]),S++),s=f,o+="\n".concat(y,"+").concat(w," ").concat(D),i+="\n".concat(v,"-").concat(w," ").concat(R),S+=2):(o+=i,i="",1!==C&&0!==f||(o+="\n  ".concat(D),S++))}if(S>20&&f<_-2)return"".concat(A).concat(N,"\n").concat(o,"\n").concat(g,"...").concat(w).concat(i,"\n")+"".concat(g,"...").concat(w)}return"".concat(A).concat(c?N:"","\n").concat(o).concat(i).concat(a).concat(p)}var k=function(e){function t(e){var r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),"object"!==d(e)||null===e)throw new p("options","Object",e);var i=e.message,o=e.operator,c=e.stackStartFn,u=e.actual,l=e.expected,f=Error.stackTraceLimit;if(Error.stackTraceLimit=0,null!=i)r=s(this,h(t).call(this,String(i)));else if(n.stderr&&n.stderr.isTTY&&(n.stderr&&n.stderr.getColorDepth&&1!==n.stderr.getColorDepth()?(g="[34m",y="[32m",w="[39m",v="[31m"):(g="",y="",w="",v="")),"object"===d(u)&&null!==u&&"object"===d(l)&&null!==l&&"stack"in u&&u instanceof Error&&"stack"in l&&l instanceof Error&&(u=x(u),l=x(l)),"deepStrictEqual"===o||"strictEqual"===o)r=s(this,h(t).call(this,E(u,l,o)));else if("notDeepStrictEqual"===o||"notStrictEqual"===o){var m=b[o],k=I(u).split("\n");if("notStrictEqual"===o&&"object"===d(u)&&null!==u&&(m=b.notStrictEqualObject),k.length>30)for(k[26]="".concat(g,"...").concat(w);k.length>27;)k.pop();r=1===k.length?s(this,h(t).call(this,"".concat(m," ").concat(k[0]))):s(this,h(t).call(this,"".concat(m,"\n\n").concat(k.join("\n"),"\n")))}else{var _=I(u),T="",S=b[o];"notDeepEqual"===o||"notEqual"===o?(_="".concat(b[o],"\n\n").concat(_)).length>1024&&(_="".concat(_.slice(0,1021),"...")):(T="".concat(I(l)),_.length>512&&(_="".concat(_.slice(0,509),"...")),T.length>512&&(T="".concat(T.slice(0,509),"...")),"deepEqual"===o||"equal"===o?_="".concat(S,"\n\n").concat(_,"\n\nshould equal\n\n"):T=" ".concat(o," ").concat(T)),r=s(this,h(t).call(this,"".concat(_).concat(T)))}return Error.stackTraceLimit=f,r.generatedMessage=!i,Object.defineProperty(a(r),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),r.code="ERR_ASSERTION",r.actual=u,r.expected=l,r.operator=o,Error.captureStackTrace&&Error.captureStackTrace(a(r),c),r.stack,r.name="AssertionError",s(r)}var o,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),o=t,c=[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:f.custom,value:function(e,t){return f(this,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},t,{customInspect:!1,depth:0}))}}],c&&i(o.prototype,c),u&&i(o,u),t}(c(Error));e.exports=k})),o.register("cgET4",(function(e,t){function n(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var o=Object.keys(Object(i)),s=0,a=o.length;s<a;s++){var c=o[s],u=Object.getOwnPropertyDescriptor(i,c);void 0!==u&&u.enumerable&&(n[c]=i[c])}}return n}e.exports={assign:n,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:n})}}})),o.register("fmpVL",(function(e,t){var n=o("5AcsX"),r=o("e9CQ6"),i=o("5kJ8M"),s=o("7f1SY"),a=o("h1yzf"),c=r(s(),Object);n(c,{getPolyfill:s,implementation:i,shim:a}),e.exports=c})),o.register("5AcsX",(function(e,t){var n=o("lTDqP"),r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,s=Array.prototype.concat,a=Object.defineProperty,c=o("73hDB")(),u=a&&c,l=function(e,t,n,r){if(t in e)if(!0===r){if(e[t]===n)return}else if("function"!=typeof(o=r)||"[object Function]"!==i.call(o)||!r())return;var o;u?a(e,t,{configurable:!0,enumerable:!1,value:n,writable:!0}):e[t]=n},h=function(e,t){var i=arguments.length>2?arguments[2]:{},o=n(t);r&&(o=s.call(o,Object.getOwnPropertySymbols(t)));for(var a=0;a<o.length;a+=1)l(e,o[a],t[o[a]],i[o[a]])};h.supportsDescriptors=!!u,e.exports=h})),o.register("lTDqP",(function(e,t){var n=Array.prototype.slice,r=o("cqifw"),i=Object.keys,s=i?function(e){return i(e)}:o("2HCYb"),a=Object.keys;s.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2);e||(Object.keys=function(e){return r(e)?a(n.call(e)):a(e)})}else Object.keys=s;return Object.keys||s},e.exports=s})),o.register("cqifw",(function(e,t){var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}})),o.register("2HCYb",(function(e,t){var n;if(!Object.keys){var r=Object.prototype.hasOwnProperty,i=Object.prototype.toString,s=o("cqifw"),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),u=a.call((function(){}),"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],h=function(e){var t=e.constructor;return t&&t.prototype===e},d={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!d["$"+e]&&r.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{h(window[e])}catch(e){return!0}}catch(e){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,n="[object Function]"===i.call(e),o=s(e),a=t&&"[object String]"===i.call(e),d=[];if(!t&&!n&&!o)throw new TypeError("Object.keys called on a non-object");var p=u&&n;if(a&&e.length>0&&!r.call(e,0))for(var m=0;m<e.length;++m)d.push(String(m));if(o&&e.length>0)for(var g=0;g<e.length;++g)d.push(String(g));else for(var y in e)p&&"prototype"===y||!r.call(e,y)||d.push(String(y));if(c)for(var v=function(e){if("undefined"==typeof window||!f)return h(e);try{return h(e)}catch(e){return!1}}(e),w=0;w<l.length;++w)v&&"constructor"===l[w]||!r.call(e,l[w])||d.push(l[w]);return d}}e.exports=n})),o.register("73hDB",(function(e,t){var n=o("avqmt")("%Object.defineProperty%",!0),r=function(){if(n)try{return n({},"a",{value:1}),!0}catch(e){return!1}return!1};r.hasArrayLengthDefineBug=function(){if(!r())return null;try{return 1!==n([],"length",{value:1}).length}catch(e){return!0}},e.exports=r})),o.register("5kJ8M",(function(e,t){var n=function(e){return e!=e};e.exports=function(e,t){return 0===e&&0===t?1/e==1/t:e===t||!(!n(e)||!n(t))}})),o.register("7f1SY",(function(e,t){var n=o("5kJ8M");e.exports=function(){return"function"==typeof Object.is?Object.is:n}})),o.register("h1yzf",(function(e,t){var n=o("7f1SY"),r=o("5AcsX");e.exports=function(){var e=n();return r(Object,{is:e},{is:function(){return Object.is!==e}}),e}})),o.register("dFslL",(function(e,t){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var i=void 0!==/a/g.flags,s=function(e){var t=[];return e.forEach((function(e){return t.push(e)})),t},a=function(e){var t=[];return e.forEach((function(e,n){return t.push([n,e])})),t},c=Object.is?Object.is:o("fmpVL"),u=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},l=Number.isNaN?Number.isNaN:o("4GuR1");function h(e){return e.call.bind(e)}var d=h(Object.prototype.hasOwnProperty),f=h(Object.prototype.propertyIsEnumerable),p=h(Object.prototype.toString),m=o("4zyeF").types,g=m.isAnyArrayBuffer,y=m.isArrayBufferView,v=m.isDate,w=m.isMap,b=m.isRegExp,x=m.isSet,I=m.isNativeError,E=m.isBoxedPrimitive,k=m.isNumberObject,_=m.isStringObject,T=m.isBooleanObject,S=m.isBigIntObject,A=m.isSymbolObject,N=m.isFloat32Array,C=m.isFloat64Array;function R(e){if(0===e.length||e.length>10)return!0;for(var t=0;t<e.length;t++){var n=e.charCodeAt(t);if(n<48||n>57)return!0}return 10===e.length&&e>=Math.pow(2,32)}function D(e){return Object.keys(e).filter(R).concat(u(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function O(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0}var P=0,L=1,M=2,F=3;function j(e,t,n,o){if(e===t)return 0!==e||(!n||c(e,t));if(n){if("object"!==r(e))return"number"==typeof e&&l(e)&&l(t);if("object"!==r(t)||null===e||null===t)return!1;if(Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1}else{if(null===e||"object"!==r(e))return(null===t||"object"!==r(t))&&e==t;if(null===t||"object"!==r(t))return!1}var s,a,u,h,d=p(e);if(d!==p(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;var f=D(e),m=D(t);return f.length===m.length&&B(e,t,n,o,L,f)}if("[object Object]"===d&&(!w(e)&&w(t)||!x(e)&&x(t)))return!1;if(v(e)){if(!v(t)||Date.prototype.getTime.call(e)!==Date.prototype.getTime.call(t))return!1}else if(b(e)){if(!b(t)||(u=e,h=t,!(i?u.source===h.source&&u.flags===h.flags:RegExp.prototype.toString.call(u)===RegExp.prototype.toString.call(h))))return!1}else if(I(e)||e instanceof Error){if(e.message!==t.message||e.name!==t.name)return!1}else{if(y(e)){if(n||!N(e)&&!C(e)){if(!function(e,t){return e.byteLength===t.byteLength&&0===O(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}(e,t))return!1}else if(!function(e,t){if(e.byteLength!==t.byteLength)return!1;for(var n=0;n<e.byteLength;n++)if(e[n]!==t[n])return!1;return!0}(e,t))return!1;var R=D(e),j=D(t);return R.length===j.length&&B(e,t,n,o,P,R)}if(x(e))return!(!x(t)||e.size!==t.size)&&B(e,t,n,o,M);if(w(e))return!(!w(t)||e.size!==t.size)&&B(e,t,n,o,F);if(g(e)){if(a=t,(s=e).byteLength!==a.byteLength||0!==O(new Uint8Array(s),new Uint8Array(a)))return!1}else if(E(e)&&!function(e,t){return k(e)?k(t)&&c(Number.prototype.valueOf.call(e),Number.prototype.valueOf.call(t)):_(e)?_(t)&&String.prototype.valueOf.call(e)===String.prototype.valueOf.call(t):T(e)?T(t)&&Boolean.prototype.valueOf.call(e)===Boolean.prototype.valueOf.call(t):S(e)?S(t)&&BigInt.prototype.valueOf.call(e)===BigInt.prototype.valueOf.call(t):A(t)&&Symbol.prototype.valueOf.call(e)===Symbol.prototype.valueOf.call(t)}(e,t))return!1}return B(e,t,n,o,P)}function U(e,t){return t.filter((function(t){return f(e,t)}))}function B(e,t,i,o,c,l){if(5===arguments.length){l=Object.keys(e);var h=Object.keys(t);if(l.length!==h.length)return!1}for(var p=0;p<l.length;p++)if(!d(t,l[p]))return!1;if(i&&5===arguments.length){var m=u(e);if(0!==m.length){var g=0;for(p=0;p<m.length;p++){var y=m[p];if(f(e,y)){if(!f(t,y))return!1;l.push(y),g++}else if(f(t,y))return!1}var v=u(t);if(m.length!==v.length&&U(t,v).length!==g)return!1}else{var w=u(t);if(0!==w.length&&0!==U(t,w).length)return!1}}if(0===l.length&&(c===P||c===L&&0===e.length||0===e.size))return!0;if(void 0===o)o={val1:new Map,val2:new Map,position:0};else{var b=o.val1.get(e);if(void 0!==b){var x=o.val2.get(t);if(void 0!==x)return b===x}o.position++}o.val1.set(e,o.position),o.val2.set(t,o.position);var I=function(e,t,i,o,c,u){var l=0;if(u===M){if(!function(e,t,n,i){for(var o=null,a=s(e),c=0;c<a.length;c++){var u=a[c];if("object"===r(u)&&null!==u)null===o&&(o=new Set),o.add(u);else if(!t.has(u)){if(n)return!1;if(!q(e,t,u))return!1;null===o&&(o=new Set),o.add(u)}}if(null!==o){for(var l=s(t),h=0;h<l.length;h++){var d=l[h];if("object"===r(d)&&null!==d){if(!V(o,d,n,i))return!1}else if(!n&&!e.has(d)&&!V(o,d,n,i))return!1}return 0===o.size}return!0}(e,t,i,c))return!1}else if(u===F){if(!function(e,t,i,o){for(var s=null,c=a(e),u=0;u<c.length;u++){var l=n(c[u],2),h=l[0],d=l[1];if("object"===r(h)&&null!==h)null===s&&(s=new Set),s.add(h);else{var f=t.get(h);if(void 0===f&&!t.has(h)||!j(d,f,i,o)){if(i)return!1;if(!W(e,t,h,d,o))return!1;null===s&&(s=new Set),s.add(h)}}}if(null!==s){for(var p=a(t),m=0;m<p.length;m++){var g=n(p[m],2),y=(h=g[0],g[1]);if("object"===r(h)&&null!==h){if(!G(s,e,h,y,i,o))return!1}else if(!(i||e.has(h)&&j(e.get(h),y,!1,o)||G(s,e,h,y,!1,o)))return!1}return 0===s.size}return!0}(e,t,i,c))return!1}else if(u===L)for(;l<e.length;l++){if(!d(e,l)){if(d(t,l))return!1;for(var h=Object.keys(e);l<h.length;l++){var f=h[l];if(!d(t,f)||!j(e[f],t[f],i,c))return!1}return h.length===Object.keys(t).length}if(!d(t,l)||!j(e[l],t[l],i,c))return!1}for(l=0;l<o.length;l++){var p=o[l];if(!j(e[p],t[p],i,c))return!1}return!0}(e,t,i,l,o,c);return o.val1.delete(e),o.val2.delete(t),I}function V(e,t,n,r){for(var i=s(e),o=0;o<i.length;o++){var a=i[o];if(j(t,a,n,r))return e.delete(a),!0}return!1}function z(e){switch(r(e)){case"undefined":return null;case"object":return;case"symbol":return!1;case"string":e=+e;case"number":if(l(e))return!1}return!0}function q(e,t,n){var r=z(n);return null!=r?r:t.has(r)&&!e.has(r)}function W(e,t,n,r,i){var o=z(n);if(null!=o)return o;var s=t.get(o);return!(void 0===s&&!t.has(o)||!j(r,s,!1,i))&&(!e.has(o)&&j(r,s,!1,i))}function G(e,t,n,r,i,o){for(var a=s(e),c=0;c<a.length;c++){var u=a[c];if(j(n,u,i,o)&&j(r,t.get(u),i,o))return e.delete(u),!0}return!1}e.exports={isDeepEqual:function(e,t){return j(e,t,false)},isDeepStrictEqual:function(e,t){return j(e,t,true)}}})),o.register("4GuR1",(function(e,t){var n=o("e9CQ6"),r=o("5AcsX"),i=o("3o2B8"),s=o("eJ6Gj"),a=o("9j2pv"),c=n(s(),Number);r(c,{getPolyfill:s,implementation:i,shim:a}),e.exports=c})),o.register("3o2B8",(function(e,t){e.exports=function(e){return e!=e}})),o.register("eJ6Gj",(function(e,t){var n=o("3o2B8");e.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:n}})),o.register("9j2pv",(function(e,t){var n=o("5AcsX"),r=o("eJ6Gj");e.exports=function(){var e=r();return n(Number,{isNaN:e},{isNaN:function(){return Number.isNaN!==e}}),e}})),o.register("6AHvh",(function(t,n){e(t.exports,"sectionBooksEl",(function(){return c})),e(t.exports,"createMurkUpAllBooks",(function(){return u})),e(t.exports,"onHandleCategoriesForButton",(function(){return l}));var r=o("ju4sA"),i=o("kV9l4"),s=o("gjiCh"),a=o("g4lwF");const c=document.querySelector(".books");async function u(){(0,s.createLoader)();try{const e=await(0,r.fetchBooks)("top-books");c.innerHTML='<h1 class="title-hero">Best Sellers <span>Books</span></h1><ul class="categories"></ul>';document.querySelector(".categories").innerHTML=e.map((e=>{return`  <li class='category-items'>\n      <h2 class='category-title'>${e.list_name}</h2>\n      <ul class="category-books">\n      ${t=e.books,t.map((e=>(0,a.createMarkup)(e))).join("")}\n      </ul>\n    <button class="button-see-more" type="button">SEE MORE</button>\n    </li>`;var t})).join("");document.querySelectorAll(".book-card").forEach((e=>{e.classList.add("book-item")}))}catch{console.log("Error")}}function l(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.parentNode.querySelector("h2").textContent;(0,i.handleClickOnFilter)(t)}})),o.register("ju4sA",(function(t,n){e(t.exports,"fetchBooks",(function(){return i})),o("2shzp");var r=o("bRlFp");r.default.defaults.baseURL="https://books-backend.p.goit.global/books";const i=async e=>(await r.default.get(e)).data})),o.register("2shzp",(function(t,n){e(t.exports,"default",(function(){return o("bRlFp").default}));var r=o("bRlFp");const{Axios:i,AxiosError:s,CanceledError:a,isCancel:c,CancelToken:u,VERSION:l,all:h,Cancel:d,isAxiosError:f,spread:p,toFormData:m,AxiosHeaders:g,HttpStatusCode:y,formToJSON:v,mergeConfig:w}=r.default})),o.register("bRlFp",(function(t,n){e(t.exports,"default",(function(){return x}));var r=o("2bBga"),i=o("djt5d"),s=o("6zSb1"),a=o("d0EKm"),c=o("hqlPG"),u=o("4bmvb"),l=o("83xK9"),h=o("2sjhC"),d=o("ksuZT"),f=o("50GW0"),p=o("aewVa"),m=o("121rJ"),g=o("av9gA"),y=o("gNhGc"),v=o("gbTL1"),w=o("jd7iQ");const b=function e(t){const n=new(0,s.default)(t),o=(0,i.default)(s.default.prototype.request,n);return r.default.extend(o,s.default.prototype,n,{allOwnKeys:!0}),r.default.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e((0,a.default)(t,n))},o}(c.default);b.Axios=s.default,b.CanceledError=l.default,b.CancelToken=h.default,b.isCancel=d.default,b.VERSION=f.VERSION,b.toFormData=p.default,b.AxiosError=m.default,b.Cancel=b.CanceledError,b.all=function(e){return Promise.all(e)},b.spread=g.default,b.isAxiosError=y.default,b.mergeConfig=a.default,b.AxiosHeaders=v.default,b.formToJSON=e=>(0,u.default)(r.default.isHTMLForm(e)?new FormData(e):e),b.HttpStatusCode=w.default,b.default=b;var x=b})),o.register("2bBga",(function(n,r){e(n.exports,"default",(function(){return U}));var i=o("djt5d");const{toString:s}=Object.prototype,{getPrototypeOf:a}=Object,c=(u=Object.create(null),e=>{const t=s.call(e);return u[t]||(u[t]=t.slice(8,-1).toLowerCase())});var u;const l=e=>(e=e.toLowerCase(),t=>c(t)===e),h=e=>t=>typeof t===e,{isArray:d}=Array,f=h("undefined");const p=l("ArrayBuffer");const m=h("string"),g=h("function"),y=h("number"),v=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==c(e))return!1;const t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=l("Date"),x=l("File"),I=l("Blob"),E=l("FileList"),k=l("URLSearchParams");function _(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),d(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function T(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,A=e=>!f(e)&&e!==S;const N=(C="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>C&&e instanceof C);var C;const R=l("HTMLFormElement"),D=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),O=l("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},L="abcdefghijklmnopqrstuvwxyz",M="0123456789",F={DIGIT:M,ALPHA:L,ALPHA_DIGIT:L+L.toUpperCase()+M};const j=l("AsyncFunction");var U={isArray:d,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||g(e.append)&&("formdata"===(t=c(e))||"object"===t&&g(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:m,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:w,isUndefined:f,isDate:b,isFile:x,isBlob:I,isRegExp:O,isFunction:g,isStream:e=>v(e)&&g(e.pipe),isURLSearchParams:k,isTypedArray:N,isFileList:E,forEach:_,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},r=(r,i)=>{const o=t&&T(n,i)||i;w(n[o])&&w(r)?n[o]=e(n[o],r):w(r)?n[o]=e({},r):d(r)?n[o]=r.slice():n[o]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&_(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(_(t,((t,r)=>{n&&g(t)?e[r]=(0,i.default)(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,o,s;const c={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],r&&!r(s,e,t)||c[s]||(t[s]=e[s],c[s]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:c,kindOfTest:l,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(d(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:R,hasOwnProperty:D,hasOwnProp:D,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return d(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:T,global:S,isContextDefined:A,ALPHABET:F,generateString:(e=16,t=F.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&g(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=d(e)?[]:{};return _(e,((e,t)=>{const o=n(e,r+1);!f(o)&&(i[t]=o)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:j,isThenable:e=>e&&(v(e)||g(e))&&g(e.then)&&g(e.catch)}})),o.register("djt5d",(function(t,n){function r(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(function(){return r}))})),o.register("6zSb1",(function(t,n){e(t.exports,"default",(function(){return p}));var r=o("2bBga"),i=o("2RNjJ"),s=o("5Dm7L"),a=o("eQ5d8"),c=o("d0EKm"),u=o("1ZTQa"),l=o("6zj0X"),h=o("gbTL1");const d=l.default.validators;class f{constructor(e){this.defaults=e,this.interceptors={request:new(0,s.default),response:new(0,s.default)}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,c.default)(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:o}=t;let s;void 0!==n&&l.default.assertOptions(n,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=i&&(r.default.isFunction(i)?t.paramsSerializer={serialize:i}:l.default.assertOptions(i,{encode:d.function,serialize:d.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&r.default.merge(o.common,o[t.method]),s&&r.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=h.default.concat(s,o);const u=[];let f=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(f=f&&e.synchronous,u.unshift(e.fulfilled,e.rejected))}));const p=[];let m;this.interceptors.response.forEach((function(e){p.push(e.fulfilled,e.rejected)}));let g,y=0;if(!f){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,u),e.push.apply(e,p),g=e.length,m=Promise.resolve(t);y<g;)m=m.then(e[y++],e[y++]);return m}g=u.length;let v=t;for(y=0;y<g;){const e=u[y++],t=u[y++];try{v=e(v)}catch(e){t.call(this,e);break}}try{m=a.default.call(this,v)}catch(e){return Promise.reject(e)}for(y=0,g=p.length;y<g;)m=m.then(p[y++],p[y++]);return m}getUri(e){e=(0,c.default)(this.defaults,e);const t=(0,u.default)(e.baseURL,e.url);return(0,i.default)(t,e.params,e.paramsSerializer)}}r.default.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request((0,c.default)(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request((0,c.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)}));var p=f})),o.register("2RNjJ",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("2bBga"),i=o("hz3Ym");function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,n){if(!t)return e;const o=n&&n.encode||s,a=n&&n.serialize;let c;if(c=a?a(t,n):r.default.isURLSearchParams(t)?t.toString():new(0,i.default)(t,n).toString(o),c){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+c}return e}})),o.register("hz3Ym",(function(t,n){e(t.exports,"default",(function(){return c}));var r=o("aewVa");function i(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function s(e,t){this._pairs=[],e&&(0,r.default)(e,this,t)}const a=s.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){const t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var c=s})),o.register("aewVa",(function(t,n){e(t.exports,"default",(function(){return d}));var r=o("2bBga"),i=o("121rJ"),s=o("1gvAv"),a=o("ihoyg").Buffer;function c(e){return r.default.isPlainObject(e)||r.default.isArray(e)}function u(e){return r.default.endsWith(e,"[]")?e.slice(0,-2):e}function l(e,t,n){return e?e.concat(t).map((function(e,t){return e=u(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const h=r.default.toFlatObject(r.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var d=function(e,t,n){if(!r.default.isObject(e))throw new TypeError("target must be an object");t=t||new(s.default||FormData);const o=(n=r.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!r.default.isUndefined(t[e])}))).metaTokens,d=n.visitor||y,f=n.dots,p=n.indexes,m=(n.Blob||"undefined"!=typeof Blob&&Blob)&&r.default.isSpecCompliantForm(t);if(!r.default.isFunction(d))throw new TypeError("visitor must be a function");function g(e){if(null===e)return"";if(r.default.isDate(e))return e.toISOString();if(!m&&r.default.isBlob(e))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return r.default.isArrayBuffer(e)||r.default.isTypedArray(e)?m&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function y(e,n,i){let s=e;if(e&&!i&&"object"==typeof e)if(r.default.endsWith(n,"{}"))n=o?n:n.slice(0,-2),e=JSON.stringify(e);else if(r.default.isArray(e)&&function(e){return r.default.isArray(e)&&!e.some(c)}(e)||(r.default.isFileList(e)||r.default.endsWith(n,"[]"))&&(s=r.default.toArray(e)))return n=u(n),s.forEach((function(e,i){!r.default.isUndefined(e)&&null!==e&&t.append(!0===p?l([n],i,f):null===p?n:n+"[]",g(e))})),!1;return!!c(e)||(t.append(l(i,n,f),g(e)),!1)}const v=[],w=Object.assign(h,{defaultVisitor:y,convertValue:g,isVisitable:c});if(!r.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!r.default.isUndefined(n)){if(-1!==v.indexOf(n))throw Error("Circular reference detected in "+i.join("."));v.push(n),r.default.forEach(n,(function(n,o){!0===(!(r.default.isUndefined(n)||null===n)&&d.call(t,n,r.default.isString(o)?o.trim():o,i,w))&&e(n,i?i.concat(o):[o])})),v.pop()}}(e),t}})),o.register("121rJ",(function(t,n){e(t.exports,"default",(function(){return c}));var r=o("2bBga");function i(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const s=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{a[e]={value:e}})),Object.defineProperties(i,a),Object.defineProperty(s,"isAxiosError",{value:!0}),i.from=(e,t,n,o,a,c)=>{const u=Object.create(s);return r.default.toFlatObject(e,u,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),i.call(u,e.message,t,n,o,a),u.cause=e,u.name=e.name,c&&Object.assign(u,c),u};var c=i})),o.register("1gvAv",(function(t,n){e(t.exports,"default",(function(){return r}));var r=null})),o.register("ihoyg",(function(t,n){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var r,i;e(t.exports,"Buffer",(function(){return r}),(function(e){return r=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(e){return i=e}));var s=o("hqZtu"),a=o("5WQj6"),c="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;var u=2147483647;function l(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return d(e,t,n)}function d(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|v(e,t),r=l(n),i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(W(e,Uint8Array)){var t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(W(e,ArrayBuffer)||e&&W(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(W(e,SharedArrayBuffer)||e&&W(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return h.from(r,t,n);var i=function(e){if(h.isBuffer(e)){var t=0|y(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||G(e.length)?l(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),l(e<0?0:0|y(e))}function m(e){for(var t=e.length<0?0:0|y(e.length),n=l(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,h.prototype),r}function y(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return 0|e}function v(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||W(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return z(e).length;default:if(i)return r?-1:V(e).length;t=(""+t).toLowerCase(),i=!0}}function w(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,n);case"utf8":case"utf-8":return N(this,t,n);case"ascii":return R(this,t,n);case"latin1":case"binary":return D(this,t,n);case"base64":return A(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function x(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),G(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=h.from(t,r)),h.isBuffer(t))return 0===t.length?-1:I(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):I(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function I(e,t,n,r,i){var o,s=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,n/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){var l=-1;for(o=n;o<a;o++)if(u(e,o)===u(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===c)return l*s}else-1!==l&&(o-=o-l),l=-1}else for(n+c>a&&(n=a-c),o=n;o>=0;o--){for(var h=!0,d=0;d<c;d++)if(u(e,o+d)!==u(t,d)){h=!1;break}if(h)return o}return-1}function E(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=t.length;r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16);if(G(a))return s;e[n+s]=a}return s}function k(e,t,n,r){return q(V(t,e.length-n),e,n,r)}function _(e,t,n,r){return q(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function T(e,t,n,r){return q(z(t),e,n,r)}function S(e,t,n,r){return q(function(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function A(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function N(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o,s,a,c,u=e[i],l=null,h=u>239?4:u>223?3:u>191?2:1;if(i+h<=n)switch(h){case 1:u<128&&(l=u);break;case 2:128==(192&(o=e[i+1]))&&(c=(31&u)<<6|63&o)>127&&(l=c);break;case 3:o=e[i+1],s=e[i+2],128==(192&o)&&128==(192&s)&&(c=(15&u)<<12|(63&o)<<6|63&s)>2047&&(c<55296||c>57343)&&(l=c);break;case 4:o=e[i+1],s=e[i+2],a=e[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(c=(15&u)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&c<1114112&&(l=c)}null===l?(l=65533,h=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),i+=h}return function(e){var t=e.length;if(t<=C)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=C));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return d(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)}(e,t,n)},h.allocUnsafe=function(e){return p(e)},h.allocUnsafeSlow=function(e){return p(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(W(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),W(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=h.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(W(o,Uint8Array))i+o.length>r.length?h.from(o).copy(r,i):Uint8Array.prototype.set.call(r,o,i);else{if(!h.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i)}i+=o.length}return r},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?N(this,0,e):w.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){var e="",t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},c&&(h.prototype[c]=h.prototype.inspect),h.prototype.compare=function(e,t,n,r,i){if(W(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0),a=Math.min(o,s),c=this.slice(r,i),u=e.slice(t,n),l=0;l<a;++l)if(c[l]!==u[l]){o=c[l],s=u[l];break}return o<s?-1:s<o?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return x(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return x(this,e,t,n,!1)},h.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return E(this,e,t,n);case"utf8":case"utf-8":return k(this,e,t,n);case"ascii":case"latin1":case"binary":return _(this,e,t,n);case"base64":return T(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var C=4096;function R(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function D(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function O(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=$[e[o]];return i}function P(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length-1;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function L(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,n,r,i,o){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function F(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function j(e,t,n,r,i){return t=+t,n>>>=0,i||F(e,0,n,4),a.write(e,t,n,r,23,4),n+4}function U(e,t,n,r,i){return t=+t,n>>>=0,i||F(e,0,n,8),a.write(e,t,n,r,52,8),n+8}h.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||L(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||L(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||L(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||L(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||L(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},h.prototype.readInt8=function(e,t){return e>>>=0,t||L(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||L(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||L(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readFloatLE=function(e,t){return e>>>=0,t||L(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||L(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||L(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||L(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||M(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||M(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}var o=0,s=1,a=0;for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},h.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeFloatLE=function(e,t,n){return j(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return j(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return U(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return U(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,r){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},h.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var i=e.charCodeAt(0);("utf8"===r&&i<128||"latin1"===r)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var s=h.isBuffer(e)?e:h.from(e,r),a=s.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=s[o%a]}return this};var B=/[^+/0-9A-Za-z-_]/g;function V(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],s=0;s<r;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function z(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(B,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function q(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function W(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function G(e){return e!=e}var $=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}()})),o.register("hqZtu",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=l(e),i=r[0],o=r[1],c=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),u=0,h=o>0?i-4:i;for(n=0;n<h;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;2===o&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,c[u++]=255&t);1===o&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t);return c},i=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,a=0,c=n-r;a<c;a+=s)i.push(h(e,a,a+s>c?c:a+s));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0;u<64;++u)o[u]=c[u],s[c.charCodeAt(u)]=u;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e,t,n){for(var r,i,s=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,s,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-l)-1,f>>=-l,l+=a;l>0;o=256*o+e[t+h],h+=d,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[t+h],h+=d,l-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,r),o-=u}return(f?-1:1)*s*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var s,a,c,u=8*o-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(s++,c/=2),s+h>=l?(a=0,s=l):s+h>=1?(a=(t*c-1)*Math.pow(2,i),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;e[n+f]=255&s,f+=p,s/=256,u-=8);e[n+f-p]|=128*m}})),o.register("5Dm7L",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga");var i=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){r.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}})),o.register("eQ5d8",(function(t,n){e(t.exports,"default",(function(){return h}));var r=o("bhEpd"),i=o("ksuZT"),s=o("hqlPG"),a=o("83xK9"),c=o("gbTL1"),u=o("enpjQ");function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,a.default)(null,e)}function h(e){l(e),e.headers=c.default.from(e.headers),e.data=r.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return u.default.getAdapter(e.adapter||s.default.adapter)(e).then((function(t){return l(e),t.data=r.default.call(e,e.transformResponse,t),t.headers=c.default.from(t.headers),t}),(function(t){return(0,i.default)(t)||(l(e),t&&t.response&&(t.response.data=r.default.call(e,e.transformResponse,t.response),t.response.headers=c.default.from(t.response.headers))),Promise.reject(t)}))}})),o.register("bhEpd",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("2bBga"),i=o("hqlPG"),s=o("gbTL1");function a(e,t){const n=this||i.default,o=t||n,a=s.default.from(o.headers);let c=o.data;return r.default.forEach(e,(function(e){c=e.call(n,c,a.normalize(),t?t.status:void 0)})),a.normalize(),c}})),o.register("hqlPG",(function(t,n){e(t.exports,"default",(function(){return f}));var r=o("2bBga"),i=o("121rJ"),s=o("2wfLM"),a=o("aewVa"),c=o("5tcKT"),u=o("hdo0R"),l=o("4bmvb");const h={"Content-Type":void 0};const d={transitional:s.default,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=r.default.isObject(e);o&&r.default.isHTMLForm(e)&&(e=new FormData(e));if(r.default.isFormData(e))return i&&i?JSON.stringify((0,l.default)(e)):e;if(r.default.isArrayBuffer(e)||r.default.isBuffer(e)||r.default.isStream(e)||r.default.isFile(e)||r.default.isBlob(e))return e;if(r.default.isArrayBufferView(e))return e.buffer;if(r.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,c.default)(e,this.formSerializer).toString();if((s=r.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,a.default)(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),function(e,t,n){if(r.default.isString(e))try{return(t||JSON.parse)(e),r.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||d.transitional,n=t&&t.forcedJSONParsing,o="json"===this.responseType;if(e&&r.default.isString(e)&&(n&&!this.responseType||o)){const n=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw i.default.from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:u.default.classes.FormData,Blob:u.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.default.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.default.forEach(["post","put","patch"],(function(e){d.headers[e]=r.default.merge(h)}));var f=d})),o.register("2wfLM",(function(t,n){e(t.exports,"default",(function(){return r}));var r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("5tcKT",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("2bBga"),i=o("aewVa"),s=o("hdo0R");function a(e,t){return(0,i.default)(e,new s.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return s.default.isNode&&r.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}})),o.register("hdo0R",(function(t,n){e(t.exports,"default",(function(){return u}));var r=o("9matH"),i=o("eN04z"),s=o("2J1oD");const a=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var u={isBrowser:!0,classes:{URLSearchParams:r.default,FormData:i.default,Blob:s.default},isStandardBrowserEnv:a,isStandardBrowserWebWorkerEnv:c,protocols:["http","https","file","blob","url","data"]}})),o.register("9matH",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("hz3Ym"),i="undefined"!=typeof URLSearchParams?URLSearchParams:r.default})),o.register("eN04z",(function(t,n){e(t.exports,"default",(function(){return r}));var r="undefined"!=typeof FormData?FormData:null})),o.register("2J1oD",(function(t,n){e(t.exports,"default",(function(){return r}));var r="undefined"!=typeof Blob?Blob:null})),o.register("4bmvb",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga");var i=function(e){function t(e,n,i,o){let s=e[o++];const a=Number.isFinite(+s),c=o>=e.length;if(s=!s&&r.default.isArray(i)?i.length:s,c)return r.default.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!a;i[s]&&r.default.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],o)&&r.default.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}(i[s])),!a}if(r.default.isFormData(e)&&r.default.isFunction(e.entries)){const n={};return r.default.forEachEntry(e,((e,i)=>{t(function(e){return r.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null}})),o.register("gbTL1",(function(t,n){e(t.exports,"default",(function(){return h}));var r=o("2bBga"),i=o("9cPEm");const s=Symbol("internals");function a(e){return e&&String(e).trim().toLowerCase()}function c(e){return!1===e||null==e?e:r.default.isArray(e)?e.map(c):String(e)}function u(e,t,n,i,o){return r.default.isFunction(i)?i.call(this,t,n):(o&&(t=n),r.default.isString(t)?r.default.isString(i)?-1!==t.indexOf(i):r.default.isRegExp(i)?i.test(t):void 0:void 0)}class l{constructor(e){e&&this.set(e)}set(e,t,n){const o=this;function s(e,t,n){const i=a(t);if(!i)throw new Error("header name must be a non-empty string");const s=r.default.findKey(o,i);(!s||void 0===o[s]||!0===n||void 0===n&&!1!==o[s])&&(o[s||t]=c(e))}const u=(e,t)=>r.default.forEach(e,((e,n)=>s(e,n,t)));return r.default.isPlainObject(e)||e instanceof this.constructor?u(e,t):r.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?u((0,i.default)(e),t):null!=e&&s(t,e,n),this}get(e,t){if(e=a(e)){const n=r.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(r.default.isFunction(t))return t.call(this,e,n);if(r.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=a(e)){const n=r.default.findKey(this,e);return!(!n||void 0===this[n]||t&&!u(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function o(e){if(e=a(e)){const o=r.default.findKey(n,e);!o||t&&!u(0,n[o],o,t)||(delete n[o],i=!0)}}return r.default.isArray(e)?e.forEach(o):o(e),i}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!u(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return r.default.forEach(this,((i,o)=>{const s=r.default.findKey(n,o);if(s)return t[s]=c(i),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=c(i),n[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return r.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&r.default.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[s]=this[s]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=a(e);t[i]||(!function(e,t){const n=r.default.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[i]=!0)}return r.default.isArray(e)?e.forEach(i):i(e),this}}l.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),r.default.freezeMethods(l.prototype),r.default.freezeMethods(l);var h=l})),o.register("9cPEm",(function(t,n){e(t.exports,"default",(function(){return i}));const r=o("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var i=e=>{const t={};let n,i,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),i=e.substring(o+1).trim(),!n||t[n]&&r[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t}})),o.register("ksuZT",(function(t,n){function r(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(function(){return r}))})),o.register("83xK9",(function(t,n){e(t.exports,"default",(function(){return s}));var r=o("121rJ");function i(e,t,n){r.default.call(this,null==e?"canceled":e,r.default.ERR_CANCELED,t,n),this.name="CanceledError"}o("2bBga").default.inherits(i,r.default,{__CANCEL__:!0});var s=i})),o.register("enpjQ",(function(t,n){e(t.exports,"default",(function(){return u}));var r=o("2bBga"),i=o("1gvAv"),s=o("9VVcb"),a=o("121rJ");const c={http:i.default,xhr:s.default};r.default.forEach(c,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var u={getAdapter:e=>{e=r.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let o=0;o<t&&(n=e[o],!(i=r.default.isString(n)?c[n.toLowerCase()]:n));o++);if(!i){if(!1===i)throw new(0,a.default)(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(r.default.hasOwnProp(c,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!r.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:c}})),o.register("9VVcb",(function(t,n){e(t.exports,"default",(function(){return v}));var r=o("2bBga"),i=o("1TQad"),s=o("kTwUV"),a=o("2RNjJ"),c=o("1ZTQa"),u=o("g3yOT"),l=o("2wfLM"),h=o("121rJ"),d=o("83xK9"),f=o("8wMQb"),p=o("hdo0R"),m=o("gbTL1"),g=o("5OiBb");function y(e,t){let n=0;const r=(0,g.default)(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,c=r(a);n=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&o<=s?(s-o)/c:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}var v="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let o=e.data;const g=m.default.from(e.headers).normalize(),v=e.responseType;let w;function b(){e.cancelToken&&e.cancelToken.unsubscribe(w),e.signal&&e.signal.removeEventListener("abort",w)}r.default.isFormData(o)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv?g.setContentType(!1):g.setContentType("multipart/form-data;",!1));let x=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.set("Authorization","Basic "+btoa(t+":"+n))}const I=(0,c.default)(e.baseURL,e.url);function E(){if(!x)return;const r=m.default.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),o={data:v&&"text"!==v&&"json"!==v?x.response:x.responseText,status:x.status,statusText:x.statusText,headers:r,config:e,request:x};(0,i.default)((function(e){t(e),b()}),(function(e){n(e),b()}),o),x=null}if(x.open(e.method.toUpperCase(),(0,a.default)(I,e.params,e.paramsSerializer),!0),x.timeout=e.timeout,"onloadend"in x?x.onloadend=E:x.onreadystatechange=function(){x&&4===x.readyState&&(0!==x.status||x.responseURL&&0===x.responseURL.indexOf("file:"))&&setTimeout(E)},x.onabort=function(){x&&(n(new(0,h.default)("Request aborted",h.default.ECONNABORTED,e,x)),x=null)},x.onerror=function(){n(new(0,h.default)("Network Error",h.default.ERR_NETWORK,e,x)),x=null},x.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||l.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new(0,h.default)(t,r.clarifyTimeoutError?h.default.ETIMEDOUT:h.default.ECONNABORTED,e,x)),x=null},p.default.isStandardBrowserEnv){const t=(e.withCredentials||(0,u.default)(I))&&e.xsrfCookieName&&s.default.read(e.xsrfCookieName);t&&g.set(e.xsrfHeaderName,t)}void 0===o&&g.setContentType(null),"setRequestHeader"in x&&r.default.forEach(g.toJSON(),(function(e,t){x.setRequestHeader(t,e)})),r.default.isUndefined(e.withCredentials)||(x.withCredentials=!!e.withCredentials),v&&"json"!==v&&(x.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&x.addEventListener("progress",y(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&x.upload&&x.upload.addEventListener("progress",y(e.onUploadProgress)),(e.cancelToken||e.signal)&&(w=t=>{x&&(n(!t||t.type?new(0,d.default)(null,e,x):t),x.abort(),x=null)},e.cancelToken&&e.cancelToken.subscribe(w),e.signal&&(e.signal.aborted?w():e.signal.addEventListener("abort",w)));const k=(0,f.default)(I);k&&-1===p.default.protocols.indexOf(k)?n(new(0,h.default)("Unsupported protocol "+k+":",h.default.ERR_BAD_REQUEST,e)):x.send(o||null)}))}})),o.register("1TQad",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("121rJ");function i(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new(0,r.default)("Request failed with status code "+n.status,[r.default.ERR_BAD_REQUEST,r.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),o.register("kTwUV",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga"),i=o("hdo0R").default.isStandardBrowserEnv?{write:function(e,t,n,i,o,s){const a=[];a.push(e+"="+encodeURIComponent(t)),r.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.default.isString(i)&&a.push("path="+i),r.default.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("1ZTQa",(function(t,n){e(t.exports,"default",(function(){return s}));var r=o("iUwU6"),i=o("91vFE");function s(e,t){return e&&!(0,r.default)(t)?(0,i.default)(e,t):t}})),o.register("iUwU6",(function(t,n){function r(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(function(){return r}))})),o.register("91vFE",(function(t,n){function r(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(function(){return r}))})),o.register("g3yOT",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga"),i=o("hdo0R").default.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=r.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}})),o.register("8wMQb",(function(t,n){function r(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(function(){return r}))})),o.register("5OiBb",(function(t,n){e(t.exports,"default",(function(){return r}));var r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];i||(i=c),n[o]=a,r[o]=c;let l=s,h=0;for(;l!==o;)h+=n[l++],l%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}})),o.register("d0EKm",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("2bBga"),i=o("gbTL1");const s=e=>e instanceof i.default?e.toJSON():e;function a(e,t){t=t||{};const n={};function i(e,t,n){return r.default.isPlainObject(e)&&r.default.isPlainObject(t)?r.default.merge.call({caseless:n},e,t):r.default.isPlainObject(t)?r.default.merge({},t):r.default.isArray(t)?t.slice():t}function o(e,t,n){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function a(e,t){if(!r.default.isUndefined(t))return i(void 0,t)}function c(e,t){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function u(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(e,t)=>o(s(e),s(t),!0)};return r.default.forEach(Object.keys(Object.assign({},e,t)),(function(i){const s=l[i]||o,a=s(e[i],t[i],i);r.default.isUndefined(a)&&s!==u||(n[i]=a)})),n}})),o.register("6zj0X",(function(t,n){e(t.exports,"default",(function(){return c}));var r=o("50GW0"),i=o("121rJ");const s={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const a={};s.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r.VERSION+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new(0,i.default)(o(r," has been removed"+(t?" in "+t:"")),i.default.ERR_DEPRECATED);return t&&!a[r]&&(a[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var c={assertOptions:function(e,t,n){if("object"!=typeof e)throw new(0,i.default)("options must be an object",i.default.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],a=t[s];if(a){const t=e[s],n=void 0===t||a(t,s,e);if(!0!==n)throw new(0,i.default)("option "+s+" must be "+n,i.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,i.default)("Unknown option "+s,i.default.ERR_BAD_OPTION)}},validators:s}})),o.register("50GW0",(function(t,n){e(t.exports,"VERSION",(function(){return r}));const r="1.4.0"})),o.register("2sjhC",(function(t,n){e(t.exports,"default",(function(){return s}));var r=o("83xK9");class i{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,i,o){n.reason||(n.reason=new(0,r.default)(e,i,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new i((function(t){e=t})),cancel:e}}}var s=i})),o.register("av9gA",(function(t,n){function r(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(function(){return r}))})),o.register("gNhGc",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga");function i(e){return r.default.isObject(e)&&!0===e.isAxiosError}})),o.register("jd7iQ",(function(t,n){e(t.exports,"default",(function(){return i}));const r={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(r).forEach((([e,t])=>{r[t]=e}));var i=r})),o.register("gjiCh",(function(t,n){e(t.exports,"createLoader",(function(){return i}));var r=o("6AHvh");function i(){r.sectionBooksEl.innerHTML='<div id="maskLoader" class="mask">\n  <div class="loader bookLoader">\n    <figure class="page"></figure>\n    <figure class="page"></figure>\n    <figure class="page"></figure>\n  </div>\n</div>\n'}})),o.register("g4lwF",(function(t,n){function r(e){const{book_image:t,title:n,author:r,list_name:i,_id:o}=e;return`<li class="book-card" data-id="${o}">\n        <img class="book-image" src="${t}" alt="${i}" />\n        <h3 class="book-title">${n.length>16?n.slice(0,16)+"...":n}</h3>\n        <p class="book-author">${r}</p>\n        </li>`}e(t.exports,"createMarkup",(function(){return r}))}));
//# sourceMappingURL=shoppingList.ef40dfcc.js.map
