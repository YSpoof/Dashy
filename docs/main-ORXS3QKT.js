import{a as oe,b as Be,c as Ve,d as g,f as $e,g as Ze,h as se,i as We}from"./chunk-P3PAHVNR.js";import{$ as j,A as X,B as Me,D as be,Da as He,E as Ce,Ea as Ue,Fa as je,G as H,Ha as Fe,I as C,J as q,N as J,O as Te,P as Q,Q as De,R as U,S as ee,T as Re,U as A,W as _e,X as O,Y as Ae,a as h,b as he,c as me,d as ge,da as Oe,e as x,ea as Ie,f as ve,g as y,ga as Pe,h as ye,ha as F,i as z,ia as Ne,ja as ke,k as G,ka as te,l as Y,m as b,ma as Le,n as D,o as w,oa as E,p as we,pa as S,q as Ee,qa as m,r as R,ra as xe,s as Se,sa as ne,t as K,ta as re,v as p,x as _,y as l}from"./chunk-42UFVXWE.js";var ae=class extends Ve{supportsDOMEvents=!0},ce=class r extends ae{static makeCurrent(){Be(new r)}onAndCancel(n,e,t,o){return n.addEventListener(e,t,o),()=>{n.removeEventListener(e,t,o)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=ct();return e==null?null:lt(e)}resetBaseElement(){I=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return $e(document.cookie,n)}},I=null;function ct(){return I=I||document.querySelector("base"),I?I.getAttribute("href"):null}function lt(r){return new URL(r,document.baseURI).pathname}var ut=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||r)};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})(),le=new _(""),qe=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o,s){return this._findPluginFor(t).addEventListener(e,t,o,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new K(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||r)(l(le),l(C))};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})(),V=class{_doc;constructor(n){this._doc=n}manager},B="ng-app-id";function ze(r){for(let n of r)n.remove()}function Ge(r,n){let e=n.createElement("style");return e.textContent=r,e}function dt(r,n,e,t){let o=r.head?.querySelectorAll(`style[${B}="${n}"],link[${B}="${n}"]`);if(o)for(let s of o)s.removeAttribute(B),s instanceof HTMLLinkElement?t.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function ue(r,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var Je=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,t,o,s={}){this.doc=e,this.appId=t,this.nonce=o,this.isServer=se(s),dt(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,Ge);t?.forEach(o=>this.addUsage(o,this.external,ue))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let s=t.get(e);s?s.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(ze(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ze(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,Ge(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,ue(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),this.isServer&&t.setAttribute(B,this.appId),e.appendChild(t)}static \u0275fac=function(t){return new(t||r)(l(g),l(Q),l(ee,8),l(U))};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})(),ie={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},fe=/%COMP%/g;var Qe="%COMP%",pt=`_nghost-${Qe}`,ft=`_ngcontent-${Qe}`,ht=!0,mt=new _("",{providedIn:"root",factory:()=>ht});function gt(r){return ft.replace(fe,r)}function vt(r){return pt.replace(fe,r)}function et(r,n){return n.map(e=>e.replace(fe,r))}var Ye=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,t,o,s,i,a,u,d=null,c=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=i,this.platformId=a,this.ngZone=u,this.nonce=d,this.tracingService=c,this.platformIsServer=se(a),this.defaultRenderer=new P(e,i,u,this.platformIsServer,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===A.ShadowDom&&(t=he(h({},t),{encapsulation:A.Emulated}));let o=this.getOrCreateRenderer(e,t);return o instanceof $?o.applyToHost(e):o instanceof N&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,s=o.get(t.id);if(!s){let i=this.doc,a=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,c=this.removeStylesOnCompDestroy,v=this.platformIsServer,f=this.tracingService;switch(t.encapsulation){case A.Emulated:s=new $(u,d,t,this.appId,c,i,a,v,f);break;case A.ShadowDom:return new de(u,d,e,t,i,a,this.nonce,v,f);default:s=new N(u,d,t,c,i,a,v,f);break}o.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||r)(l(qe),l(Je),l(Q),l(mt),l(g),l(U),l(C),l(ee),l(Re,8))};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})(),P=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,o,s){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=o,this.tracingService=s}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(ie[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Ke(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(Ke(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new K(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,o){if(o){e=o+":"+e;let s=ie[o];s?n.setAttributeNS(s,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let o=ie[t];o?n.removeAttributeNS(o,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,o){o&(O.DashCase|O.Important)?n.style.setProperty(e,t,o&O.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&O.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,o){if(typeof n=="string"&&(n=oe().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${e}`);let s=this.decoratePreventDefault(t);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(n,e,s)),this.eventManager.addEventListener(n,e,s,o)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))===!1&&e.preventDefault()}}};function Ke(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var de=class extends P{sharedStylesHost;hostEl;shadowRoot;constructor(n,e,t,o,s,i,a,u,d){super(n,s,i,u,d),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=o.styles;c=et(o.id,c);for(let f of c){let M=document.createElement("style");a&&M.setAttribute("nonce",a),M.textContent=f,this.shadowRoot.appendChild(M)}let v=o.getExternalStyles?.();if(v)for(let f of v){let M=ue(f,s);a&&M.setAttribute("nonce",a),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},N=class extends P{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,o,s,i,a,u,d){super(n,s,i,a,u),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let c=t.styles;this.styles=d?et(d,c):c,this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},$=class extends N{contentAttr;hostAttr;constructor(n,e,t,o,s,i,a,u,d){let c=o+"-"+t.id;super(n,e,t,s,i,a,u,d,c),this.contentAttr=gt(c),this.hostAttr=vt(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}},yt=(()=>{class r extends V{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o,s){return e.addEventListener(t,o,s),()=>this.removeEventListener(e,t,o,s)}removeEventListener(e,t,o,s){return e.removeEventListener(t,o,s)}static \u0275fac=function(t){return new(t||r)(l(g))};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})(),Xe=["alt","control","meta","shift"],wt={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Et={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},St=(()=>{class r extends V{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,t,o,s){let i=r.parseEventName(t),a=r.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>oe().onAndCancel(e,i.domEventName,a,s))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let s=r._normalizeKey(t.pop()),i="",a=t.indexOf("code");if(a>-1&&(t.splice(a,1),i="code."),Xe.forEach(d=>{let c=t.indexOf(d);c>-1&&(t.splice(c,1),i+=d+".")}),i+=s,t.length!=0||s.length===0)return null;let u={};return u.domEventName=o,u.fullKey=i,u}static matchEventFullKeyCode(e,t){let o=wt[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(o=e.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Xe.forEach(i=>{if(i!==o){let a=Et[i];a(e)&&(s+=i+".")}}),s+=o,s===t)}static eventCallback(e,t,o){return s=>{r.matchEventFullKeyCode(s,e)&&o.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||r)(l(g))};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})();function tt(r,n){return Fe(h({rootComponent:r},Mt(n)))}function Mt(r){return{appProviders:[...Rt,...r?.providers??[]],platformProviders:Dt}}function bt(){ce.makeCurrent()}function Ct(){return new q}function Tt(){return Te(document),document}var Dt=[{provide:U,useValue:Ze},{provide:De,useValue:bt,multi:!0},{provide:g,useFactory:Tt,deps:[]}];var Rt=[{provide:Me,useValue:"root"},{provide:q,useFactory:Ct,deps:[]},{provide:le,useClass:yt,multi:!0,deps:[g]},{provide:le,useClass:St,multi:!0,deps:[g]},Ye,Je,qe,{provide:Ae,useExisting:Ye},{provide:We,useClass:ut,deps:[]},[]];var Z=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=j({type:r,selectors:[["app-home-placeholder"]],decls:13,vars:0,consts:[[1,"h-screen","font-bold","grid","place-items-center","select-none"],[1,"rounded-md"],[1,"mx-auto","bg-stone-950/70","backdrop-blur-sm","w-full","p-6","flex","flex-col","justify-around","text-center","items-center","rounded-md","shadow-2xl"],[1,"h-10","w-56","bg-stone-400/70","rounded-md","animate-pulse"],[1,"h-6","w-40","mt-2","bg-stone-400/70","rounded-md","animate-pulse"],[1,"w-[150px]","h-[150px]","rounded-full","shadow-lg","m-4","border","bg-stone-400/70","animate-pulse"],[1,"h-6","w-32","bg-stone-400/70","rounded-md","animate-pulse"],[1,"mx-auto","text-center","mt-4"],[1,"h-10","w-full","max-w-xs","mx-auto","rounded-md","bg-stone-600/70","animate-pulse"],[1,"fixed","bottom-0","w-full"],[1,"flex","justify-center","py-2","mx-auto"],[1,"h-10","w-44","bg-stone-400/70","rounded-md","animate-pulse"]],template:function(e,t){e&1&&(E(0,"div",0)(1,"div")(2,"main",1)(3,"div",2),m(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),S()(),E(8,"div",7),m(9,"div",8),S()()(),E(10,"footer",9)(11,"div",10),m(12,"div",11),S()())},encapsulation:2})};var At=()=>[import("./chunk-RY3YBFJW.js").then(r=>r.FooterComponent),import("./chunk-ZNCWZZES.js").then(r=>r.HomeCardComponent),import("./chunk-HP4ODIHX.js").then(r=>r.SettingsMenuComponent)],Ot=r=>({"background-image":r});function It(r,n){if(r&1){let e=xe();m(0,"app-home-card",2),E(1,"app-settings-menu",3),ne("closeMenu",function(){be(e);let o=re();return Ce(o.showMenu.set(!1))}),S(),m(2,"app-footer")}if(r&2){let e=re();te("settings",e.settings()),_e(),te("settings",e.settings())("show",e.showMenu())}}function Pt(r,n){r&1&&m(0,"app-home-placeholder")}var W=class r{showMenu=J(!1);showSettingsMenu(n){n.preventDefault(),this.showMenu.set(!this.showMenu())}parseSettingsFromUrl(){let n=new URL(window.location.href),e={name:"Fulano(a)",city:"Desconhecida",picture:"https://picsum.photos/150.webp",background:"https://picsum.photos/1280/720.webp",twelveHours:!0,showDate:!0};try{if(!n.searchParams.has("s"))return e;let t=JSON.parse(atob(n.searchParams.get("s")));return h(h({},e),t)}catch(t){console.error("Error parsing settings from URL",t)}return e}settings=J(this.parseSettingsFromUrl());static \u0275fac=function(e){return new(e||r)};static \u0275cmp=j({type:r,selectors:[["app-root"]],decls:5,vars:4,consts:[[1e3],[1,"bg-cover","bg-center","bg-no-repeat","bg-fixed","overflow-hidden","h-svh","w-svw",3,"contextmenu"],[3,"settings"],[3,"closeMenu","settings","show"]],template:function(e,t){e&1&&(E(0,"div",1),ne("contextmenu",function(s){return t.showSettingsMenu(s)}),Oe(1,It,3,3)(2,Pt,1,0),Ne(3,1,At,null,2,null,null,0,Ie),ke(),S()),e&2&&Le(He(2,Ot,"url("+t.settings().background+")"))},dependencies:[Z],encapsulation:2})};var L="Service workers are disabled or not supported by this browser";function Nt(r){return z(()=>ve(new Error(r)))}var T=class{serviceWorker;worker;registration;events;constructor(n){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=Nt(L);else{let t=G(n,"controllerchange").pipe(y(()=>n.controller)),o=z(()=>x(n.controller)),s=ye(o,t);this.worker=s.pipe(D(c=>!!c)),this.registration=this.worker.pipe(R(()=>n.getRegistration()));let d=G(n,"message").pipe(y(c=>c.data)).pipe(D(c=>c&&c.type)).pipe(Ee());d.connect(),this.events=d}}postMessage(n,e){return this.worker.pipe(w(1),Se(t=>{t.postMessage(h({action:n},e))})).toPromise().then(()=>{})}postMessageWithOperation(n,e,t){let o=this.waitForOperationCompleted(t),s=this.postMessage(n,e);return Promise.all([s,o]).then(([,i])=>i)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=t=>t.type===n:e=t=>n.includes(t.type),this.events.pipe(D(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(w(1))}waitForOperationCompleted(n){return this.eventsOfType("OPERATION_COMPLETED").pipe(D(e=>e.nonce===n),w(1),y(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},kt=(()=>{class r{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new me;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=b,this.notificationClicks=b,this.subscription=b;return}this.messages=this.sw.eventsOfType("PUSH").pipe(y(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(y(o=>o.data)),this.pushManager=this.sw.registration.pipe(y(o=>o.pushManager));let t=this.pushManager.pipe(R(o=>o.getSubscription()));this.subscription=Y(t,this.subscriptionChanges)}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(L));let t={userVisibleOnly:!0},o=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(o.length));for(let i=0;i<o.length;i++)s[i]=o.charCodeAt(i);return t.applicationServerKey=s,this.pushManager.pipe(R(i=>i.subscribe(t)),w(1)).toPromise().then(i=>(this.subscriptionChanges.next(i),i))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(L));let e=t=>{if(t===null)throw new Error("Not subscribed to push notifications.");return t.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(w(1),R(e)).toPromise()}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||r)(l(T))};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})(),Lt=(()=>{class r{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=b,this.unrecoverable=b;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(L));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(L));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||r)(l(T))};static \u0275prov=p({token:r,factory:r.\u0275fac})}return r})();var nt=new _("");function xt(r,n,e){return()=>{if(!("serviceWorker"in navigator&&e.enabled!==!1))return;let t=r.get(C),o=r.get(F);t.runOutsideAngular(()=>{let i=navigator.serviceWorker,a=()=>i.controller?.postMessage({action:"INITIALIZE"});i.addEventListener("controllerchange",a),o.onDestroy(()=>{i.removeEventListener("controllerchange",a)})});let s;if(typeof e.registrationStrategy=="function")s=e.registrationStrategy();else{let[i,...a]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(i){case"registerImmediately":s=x(null);break;case"registerWithDelay":s=rt(+a[0]||0);break;case"registerWhenStable":let u=ge(r.get(F).whenStable());s=a[0]?Y(u,rt(+a[0])):u;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}t.runOutsideAngular(()=>s.pipe(w(1)).subscribe(()=>navigator.serviceWorker.register(n,{scope:e.scope}).catch(i=>console.error("Service worker registration failed with:",i))))}}function rt(r){return x(null).pipe(we(r))}function Ht(r){return new T(r.enabled!==!1?navigator.serviceWorker:void 0)}var k=class{enabled;scope;registrationStrategy};function ot(r,n={}){return X([kt,Lt,{provide:nt,useValue:r},{provide:k,useValue:n},{provide:T,useFactory:Ht,deps:[k]},{provide:Pe,useFactory:xt,deps:[H,nt,k],multi:!0}])}var st={providers:[Ue(),ot("ngsw-worker.js",{enabled:!je(),registrationStrategy:"registerWhenStable:7000"})]};tt(W,st).catch(r=>{alert("An error occurred while bootstrapping the application"),console.error(r)});
