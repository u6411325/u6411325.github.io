/*! For license information please see 06a7619bbda2f793d93dcea5b753dc9e86d36d92-17465a8d05b05af44f03.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[756],{9712:function(e,t){},3207:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return qt}});var r=n(7294),o=n(785),a=n(841),s=n.n(a),i=(n(6058),n(7462));function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(6784);function u(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(n,o){var a,s=n,d=s[u(o)],f=s[o],p=l(s,[u(o),o].map(c)),v=t[o],m=function(e,t,n){var o=(0,r.useRef)(void 0!==e),a=(0,r.useState)(t),s=a[0],i=a[1],l=void 0!==e,u=o.current;return o.current=l,!l&&u&&s!==t&&i(t),[l?e:s,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(f,d,e[v]),h=m[0],x=m[1];return(0,i.Z)({},p,((a={})[o]=h,a[v]=x,a))}),e)}n(9712);var f=Function.prototype.bind.call(Function.prototype.call,[].slice);function p(e,t){return f(e.querySelectorAll(t))}var v=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var m=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=v(e),r=v(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};const h=r.createContext(null);h.displayName="NavContext";var x=h;const g=(e,t=null)=>null!=e?String(e):t||null;var E=r.createContext(null);var b=r.createContext(null);function y(e){return`data-rr-ui-${e}`}var C=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function w(e){var t=C(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var N=n(5893);const k=["as","disabled"];function O({tagName:e,disabled:t,href:n,target:r,rel:o,role:a,onClick:s,tabIndex:i=0,type:l}){e||(e=null!=n||null!=r||null!=o?"a":"button");const u={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},u];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==s||s(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:i,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},u]}const j=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,k);const[a,{tagName:s}]=O(Object.assign({tagName:n,disabled:r},o));return(0,N.jsx)(s,Object.assign({},o,a,{ref:t}))}));j.displayName="Button";var R=j;const S=["as","active","eventKey"];function T({key:e,onClick:t,active:n,id:o,role:a,disabled:s}){const i=(0,r.useContext)(E),l=(0,r.useContext)(x),u=(0,r.useContext)(b);let c=n;const d={role:a};if(l){a||"tablist"!==l.role||(d.role="tab");const t=l.getControllerId(null!=e?e:null),r=l.getControlledId(null!=e?e:null);d[y("event-key")]=e,d.id=t||o,c=null==n&&null!=e?l.activeKey===e:n,!c&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(d["aria-controls"]=r)}return"tab"===d.role&&(d["aria-selected"]=c,c||(d.tabIndex=-1),s&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=w((n=>{s||(null==t||t(n),null!=e&&i&&!n.isPropagationStopped()&&i(e,n))})),[d,{isActive:c}]}const P=r.forwardRef(((e,t)=>{let{as:n=R,active:r,eventKey:o}=e,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,S);const[s,i]=T(Object.assign({key:g(o,a.href),active:r},a));return s[y("active")]=i.isActive,(0,N.jsx)(n,Object.assign({},a,s,{ref:t}))}));P.displayName="NavItem";var L=P;const D=["as","onSelect","activeKey","role","onKeyDown"];const $=()=>{},M=y("event-key"),A=r.forwardRef(((e,t)=>{let{as:n="div",onSelect:o,activeKey:a,role:s,onKeyDown:i}=e,l=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,D);const u=(0,r.useReducer)((function(e){return!e}),!1)[1],c=(0,r.useRef)(!1),d=(0,r.useContext)(E),f=(0,r.useContext)(b);let v,h;f&&(s=s||"tablist",a=f.activeKey,v=f.getControlledId,h=f.getControllerId);const y=(0,r.useRef)(null),C=e=>{const t=y.current;if(!t)return null;const n=p(t,`[${M}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const o=n.indexOf(r);if(-1===o)return null;let a=o+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},w=(e,t)=>{null!=e&&(null==o||o(e,t),null==d||d(e,t))};(0,r.useEffect)((()=>{if(y.current&&c.current){const e=y.current.querySelector(`[${M}][aria-selected=true]`);null==e||e.focus()}c.current=!1}));const k=m(t,y);return(0,N.jsx)(E.Provider,{value:w,children:(0,N.jsx)(x.Provider,{value:{role:s,activeKey:g(a),getControlledId:v||$,getControllerId:h||$},children:(0,N.jsx)(n,Object.assign({},l,{onKeyDown:e=>{if(null==i||i(e),!f)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}var n;t&&(e.preventDefault(),w(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),c.current=!0,u())},ref:k,role:s}))})})}));A.displayName="Nav";var B=Object.assign(A,{Item:L}),F=n(6304);const K=r.createContext(null);K.displayName="NavbarContext";var I=K;const _=r.createContext(null);_.displayName="CardHeaderContext";var H=_,W=n(894),U=(0,W.Z)("nav-item");var V=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,Z="undefined"!=typeof document||V?r.useLayoutEffect:r.useEffect;new WeakMap;const q=["onKeyDown"];const G=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,q);const[o]=O(Object.assign({tagName:"a"},r)),a=w((e=>{o.onKeyDown(e),null==n||n(e)}));return(s=r.href)&&"#"!==s.trim()&&"button"!==r.role?(0,N.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,N.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:a}));var s}));G.displayName="Anchor";var X=G;const z=r.forwardRef((({bsPrefix:e,className:t,as:n=X,active:r,eventKey:o,...a},i)=>{e=(0,F.vE)(e,"nav-link");const[l,u]=T({key:g(o,a.href),active:r,...a});return(0,N.jsx)(n,{...a,...l,ref:i,className:s()(t,e,a.disabled&&"disabled",u.isActive&&"active")})}));z.displayName="NavLink",z.defaultProps={disabled:!1};var Y=z;const J=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:o,variant:a,fill:i,justify:l,navbar:u,navbarScroll:c,className:f,activeKey:p,...v}=d(e,{activeKey:"onSelect"}),m=(0,F.vE)(o,"nav");let h,x,g=!1;const E=(0,r.useContext)(I),b=(0,r.useContext)(H);return E?(h=E.bsPrefix,g=null==u||u):b&&({cardHeaderBsPrefix:x}=b),(0,N.jsx)(B,{as:n,ref:t,activeKey:p,className:s()(f,{[m]:!g,[`${h}-nav`]:g,[`${h}-nav-scroll`]:g&&c,[`${x}-${a}`]:!!x,[`${m}-${a}`]:!!a,[`${m}-fill`]:i,[`${m}-justified`]:l}),...v})}));J.displayName="Nav",J.defaultProps={justify:!1,fill:!1};var Q=Object.assign(J,{Item:U,Link:Y});const ee=r.forwardRef((({bsPrefix:e,className:t,as:n,...r},o)=>{e=(0,F.vE)(e,"navbar-brand");const a=n||(r.href?"a":"span");return(0,N.jsx)(a,{...r,ref:o,className:s()(t,e)})}));ee.displayName="NavbarBrand";var te=ee;function ne(e){return e&&e.ownerDocument||document}function re(e,t){return function(e){var t=ne(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var oe=/([A-Z])/g;var ae=/^ms-/;function se(e){return function(e){return e.replace(oe,"-$1").toLowerCase()}(e).replace(ae,"-ms-")}var ie=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var le=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(se(t))||re(e).getPropertyValue(se(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!ie.test(e))}(o)?n+=se(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(se(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},ue=n(4578),ce=n(3935),de=!1,fe=r.createContext(null),pe="unmounted",ve="exited",me="entering",he="entered",xe="exiting",ge=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=ve,r.appearStatus=me):o=he:o=t.unmountOnExit||t.mountOnEnter?pe:ve,r.state={status:o},r.nextCallback=null,r}(0,ue.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===pe?{status:ve}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==me&&n!==he&&(t=me):n!==me&&n!==he||(t=xe)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===me){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:ce.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ve&&this.setState({status:pe})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[ce.findDOMNode(this),r],a=o[0],s=o[1],i=this.getTimeouts(),l=r?i.appear:i.enter;!e&&!n||de?this.safeSetState({status:he},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:me},(function(){t.props.onEntering(a,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:he},(function(){t.props.onEntered(a,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:ce.findDOMNode(this);t&&!de?(this.props.onExit(r),this.safeSetState({status:xe},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:ve},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:ve},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:ce.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===pe)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,l(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(fe.Provider,{value:null},"function"==typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},t}(r.Component);function Ee(){}ge.contextType=fe,ge.propTypes={},ge.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ee,onEntering:Ee,onEntered:Ee,onExit:Ee,onExiting:Ee,onExited:Ee},ge.UNMOUNTED=pe,ge.EXITED=ve,ge.ENTERING=me,ge.ENTERED=he,ge.EXITING=xe;var be=ge,ye=!("undefined"==typeof window||!window.document||!window.document.createElement),Ce=!1,we=!1;try{var Ne={get passive(){return Ce=!0},get once(){return we=Ce=!0}};ye&&(window.addEventListener("test",Ne,Ne),window.removeEventListener("test",Ne,!0))}catch(Gt){}var ke=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!we){var o=r.once,a=r.capture,s=n;!we&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=s),e.addEventListener(t,s,Ce?r:a)}e.addEventListener(t,n,r)};var Oe=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var je=function(e,t,n,r){return ke(e,t,n,r),function(){Oe(e,t,n,r)}};function Re(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=je(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function Se(e,t,n,r){var o,a;null==n&&(o=le(e,"transitionDuration")||"",a=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*a||0);var s=Re(e,n,r),i=je(e,"transitionend",t);return function(){s(),i()}}function Te(e,t){const n=le(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function Pe(e,t){const n=Te(e,"transitionDuration"),r=Te(e,"transitionDelay"),o=Se(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var Le=function(...e){return e.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}}),null)};function De(e){e.offsetHeight}var $e=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:a,onExited:s,addEndListener:i,children:l,childRef:u,...c},d)=>{const f=(0,r.useRef)(null),p=m(f,u),v=e=>{var t;p((t=e)&&"setState"in t?ce.findDOMNode(t):null!=t?t:null)},h=e=>t=>{e&&f.current&&e(f.current,t)},x=(0,r.useCallback)(h(e),[e]),g=(0,r.useCallback)(h(t),[t]),E=(0,r.useCallback)(h(n),[n]),b=(0,r.useCallback)(h(o),[o]),y=(0,r.useCallback)(h(a),[a]),C=(0,r.useCallback)(h(s),[s]),w=(0,r.useCallback)(h(i),[i]);return(0,N.jsx)(be,{ref:d,...c,onEnter:x,onEntered:E,onEntering:g,onExit:b,onExited:C,onExiting:y,addEndListener:w,nodeRef:f,children:"function"==typeof l?(e,t)=>l(e,{...t,ref:v}):r.cloneElement(l,{ref:v})})}));const Me={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Ae(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=Me[e];return n+parseInt(le(t,r[0]),10)+parseInt(le(t,r[1]),10)}const Be={[ve]:"collapse",[xe]:"collapsing",[me]:"collapsing",[he]:"collapse show"},Fe={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Ae},Ke=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:a,className:i,children:l,dimension:u="height",getDimensionValue:c=Ae,...d},f)=>{const p="function"==typeof u?u():u,v=(0,r.useMemo)((()=>Le((e=>{e.style[p]="0"}),e)),[p,e]),m=(0,r.useMemo)((()=>Le((e=>{const t=`scroll${p[0].toUpperCase()}${p.slice(1)}`;e.style[p]=`${e[t]}px`}),t)),[p,t]),h=(0,r.useMemo)((()=>Le((e=>{e.style[p]=null}),n)),[p,n]),x=(0,r.useMemo)((()=>Le((e=>{e.style[p]=`${c(p,e)}px`,De(e)}),o)),[o,c,p]),g=(0,r.useMemo)((()=>Le((e=>{e.style[p]=null}),a)),[p,a]);return(0,N.jsx)($e,{ref:f,addEndListener:Pe,...d,"aria-expanded":d.role?d.in:null,onEnter:v,onEntering:m,onEntered:h,onExit:x,onExiting:g,childRef:l.ref,children:(e,t)=>r.cloneElement(l,{...t,className:s()(i,l.props.className,Be[e],"width"===p&&"collapse-horizontal")})})}));Ke.defaultProps=Fe;var Ie=Ke;const _e=r.forwardRef((({children:e,bsPrefix:t,...n},o)=>{t=(0,F.vE)(t,"navbar-collapse");const a=(0,r.useContext)(I);return(0,N.jsx)(Ie,{in:!(!a||!a.expanded),...n,children:(0,N.jsx)("div",{ref:o,className:t,children:e})})}));_e.displayName="NavbarCollapse";var He=_e;const We=r.forwardRef((({bsPrefix:e,className:t,children:n,label:o,as:a="button",onClick:i,...l},u)=>{e=(0,F.vE)(e,"navbar-toggler");const{onToggle:c,expanded:d}=(0,r.useContext)(I)||{},f=w((e=>{i&&i(e),c&&c()}));return"button"===a&&(l.type="button"),(0,N.jsx)(a,{...l,ref:u,onClick:f,"aria-label":o,className:s()(t,e,!d&&"collapsed"),children:n||(0,N.jsx)("span",{className:`${e}-icon`})})}));We.displayName="NavbarToggle",We.defaultProps={label:"Toggle navigation"};var Ue=We,Ve=new WeakMap,Ze=function(e,t){if(e&&t){var n=Ve.get(t)||new Map;Ve.set(t,n);var r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r}};function qe(e,t){void 0===t&&(t="undefined"==typeof window?void 0:window);var n=Ze(e,t),o=(0,r.useState)((function(){return!!n&&n.matches})),a=o[0],s=o[1];return Z((function(){var n=Ze(e,t);if(!n)return s(!1);var r=Ve.get(t),o=function(){s(n.matches)};return n.refCount++,n.addListener(o),o(),function(){n.removeListener(o),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),a}var Ge=function(e){var t=Object.keys(e);function n(e,t){return e===t?t:e?e+" and "+t:t}function o(n){var r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n),o=e[r];return"(max-width: "+(o="number"==typeof o?o-.2+"px":"calc("+o+" - 0.2px)")+")"}return function(t,a,s){var i,l;"object"==typeof t?(i=t,s=a,a=!0):((l={})[t]=a=a||!0,i=l);var u=(0,r.useMemo)((function(){return Object.entries(i).reduce((function(t,r){var a,s=r[0],i=r[1];return"up"!==i&&!0!==i||(t=n(t,("number"==typeof(a=e[s])&&(a+="px"),"(min-width: "+a+")"))),"down"!==i&&!0!==i||(t=n(t,o(s))),t}),"")}),[JSON.stringify(i)]);return qe(u,s)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Xe(e){void 0===e&&(e=ne());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(Gt){return e.body}}function ze(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function Ye(e){var t,n,o=(t=e,(n=(0,r.useRef)(t)).current=t,n);(0,r.useEffect)((function(){return function(){return o.current()}}),[])}const Je=y("modal-open");var Qe=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(le(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Je,""),le(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Je),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const et=(0,r.createContext)(ye?window:void 0);et.Provider;function tt(){return(0,r.useContext)(et)}const nt=(e,t)=>ye?null==e?(t||ne()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;var rt=function({children:e,in:t,onExited:n,mountOnEnter:o,unmountOnExit:a}){const s=(0,r.useRef)(null),i=(0,r.useRef)(t),l=w(n);(0,r.useEffect)((()=>{t?i.current=!0:l(s.current)}),[t,l]);const u=m(s,e.ref),c=(0,r.cloneElement)(e,{ref:u});return t?c:a||!i.current&&o?null:c};function ot({children:e,in:t,onExited:n,onEntered:o,transition:a}){const[s,i]=(0,r.useState)(!t);t&&s&&i(!1);const l=function({in:e,onTransition:t}){const n=(0,r.useRef)(null),o=(0,r.useRef)(!0),a=w(t);return(0,r.useEffect)((()=>{if(!n.current)return;let t=!1;return a({in:e,element:n.current,initial:o.current,isStale:()=>t}),()=>{t=!0}}),[e,a]),(0,r.useEffect)((()=>(o.current=!1,()=>{o.current=!0})),[]),n}({in:!!t,onTransition:e=>{Promise.resolve(a(e)).then((()=>{e.isStale()||(e.in?null==o||o(e.element,e.initial):(i(!0),null==n||n(e.element)))}),(t=>{throw e.in||i(!0),t}))}}),u=m(l,e.ref);return s&&!t?null:(0,r.cloneElement)(e,{ref:u})}function at(e,t,n){return e?(0,N.jsx)(e,Object.assign({},n)):t?(0,N.jsx)(ot,Object.assign({},n,{transition:t})):(0,N.jsx)(rt,Object.assign({},n))}const st=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let it;function lt(e){const t=tt(),n=e||function(e){return it||(it=new Qe({ownerDocument:null==e?void 0:e.document})),it}(t),o=(0,r.useRef)({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:(0,r.useCallback)((e=>{o.current.dialog=e}),[]),setBackdropRef:(0,r.useCallback)((e=>{o.current.backdrop=e}),[])})}const ut=(0,r.forwardRef)(((e,t)=>{let{show:n=!1,role:o="dialog",className:a,style:s,children:i,backdrop:l=!0,keyboard:u=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:v,runBackdropTransition:m,autoFocus:h=!0,enforceFocus:x=!0,restoreFocus:g=!0,restoreFocusOptions:E,renderDialog:b,renderBackdrop:y=(e=>(0,N.jsx)("div",Object.assign({},e))),manager:C,container:k,onShow:O,onHide:j=(()=>{}),onExit:R,onExited:S,onExiting:T,onEnter:P,onEntering:L,onEntered:D}=e,$=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,st);const M=function(e,t){const n=tt(),[o,a]=(0,r.useState)((()=>nt(e,null==n?void 0:n.document)));if(!o){const t=nt(e);t&&a(t)}return(0,r.useEffect)((()=>{t&&o&&t(o)}),[t,o]),(0,r.useEffect)((()=>{const t=nt(e);t!==o&&a(t)}),[e,o]),o}(k),A=lt(C),B=function(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),F=function(e){var t=(0,r.useRef)(null);return(0,r.useEffect)((function(){t.current=e})),t.current}(n),[K,I]=(0,r.useState)(!n),_=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>A),[A]),ye&&!F&&n&&(_.current=Xe()),n&&K&&I(!1);const H=w((()=>{if(A.add(),G.current=je(document,"keydown",Z),q.current=je(document,"focus",(()=>setTimeout(U)),!0),O&&O(),h){const e=Xe(document);A.dialog&&e&&!ze(A.dialog,e)&&(_.current=e,A.dialog.focus())}})),W=w((()=>{var e;(A.remove(),null==G.current||G.current(),null==q.current||q.current(),g)&&(null==(e=_.current)||null==e.focus||e.focus(E),_.current=null)}));(0,r.useEffect)((()=>{n&&M&&H()}),[n,M,H]),(0,r.useEffect)((()=>{K&&W()}),[K,W]),Ye((()=>{W()}));const U=w((()=>{if(!x||!B()||!A.isTopModal())return;const e=Xe();A.dialog&&e&&!ze(A.dialog,e)&&A.dialog.focus()})),V=w((e=>{e.target===e.currentTarget&&(null==c||c(e),!0===l&&j())})),Z=w((e=>{u&&27===e.keyCode&&A.isTopModal()&&(null==d||d(e),e.defaultPrevented||j())})),q=(0,r.useRef)(),G=(0,r.useRef)();if(!M)return null;const X=Object.assign({role:o,ref:A.setDialogRef,"aria-modal":"dialog"===o||void 0},$,{style:s,className:a,tabIndex:-1});let z=b?b(X):(0,N.jsx)("div",Object.assign({},X,{children:r.cloneElement(i,{role:"document"})}));z=at(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:R,onExiting:T,onExited:(...e)=>{I(!0),null==S||S(...e)},onEnter:P,onEntering:L,onEntered:D,children:z});let Y=null;return l&&(Y=y({ref:A.setBackdropRef,onClick:V}),Y=at(v,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Y})),(0,N.jsx)(N.Fragment,{children:ce.createPortal((0,N.jsxs)(N.Fragment,{children:[Y,z]}),M)})}));ut.displayName="Modal";var ct=Object.assign(ut,{Manager:Qe});const dt={[me]:"show",[he]:"show"},ft=r.forwardRef((({className:e,children:t,transitionClasses:n={},...o},a)=>{const i=(0,r.useCallback)(((e,t)=>{De(e),null==o.onEnter||o.onEnter(e,t)}),[o]);return(0,N.jsx)($e,{ref:a,addEndListener:Pe,...o,onEnter:i,childRef:t.ref,children:(o,a)=>r.cloneElement(t,{...a,className:s()("fade",e,t.props.className,dt[o],n[o])})})}));ft.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ft.displayName="Fade";var pt=ft,vt=(0,W.Z)("offcanvas-body");const mt={[me]:"show",[he]:"show"},ht=r.forwardRef((({bsPrefix:e,className:t,children:n,...o},a)=>(e=(0,F.vE)(e,"offcanvas"),(0,N.jsx)($e,{ref:a,addEndListener:Pe,...o,childRef:n.ref,children:(o,a)=>r.cloneElement(n,{...a,className:s()(t,n.props.className,(o===me||o===xe)&&`${e}-toggling`,mt[o])})}))));ht.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ht.displayName="OffcanvasToggling";var xt=ht;var gt=r.createContext({onHide(){}}),Et=n(216),bt=n.n(Et);const yt={"aria-label":bt().string,onClick:bt().func,variant:bt().oneOf(["white"])},Ct=r.forwardRef((({className:e,variant:t,...n},r)=>(0,N.jsx)("button",{ref:r,type:"button",className:s()("btn-close",t&&`btn-close-${t}`,e),...n})));Ct.displayName="CloseButton",Ct.propTypes=yt,Ct.defaultProps={"aria-label":"Close"};var wt=Ct;const Nt=r.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:o,children:a,...s},i)=>{const l=(0,r.useContext)(gt),u=w((()=>{null==l||l.onHide(),null==o||o()}));return(0,N.jsxs)("div",{ref:i,...s,children:[a,n&&(0,N.jsx)(wt,{"aria-label":e,variant:t,onClick:u})]})}));Nt.defaultProps={closeLabel:"Close",closeButton:!1};var kt=Nt;const Ot=r.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=(0,F.vE)(e,"offcanvas-header"),(0,N.jsx)(kt,{ref:r,...n,className:s()(t,e)}))));Ot.displayName="OffcanvasHeader",Ot.defaultProps={closeLabel:"Close",closeButton:!1};var jt=Ot;const Rt=(St="h5",r.forwardRef(((e,t)=>(0,N.jsx)("div",{...e,ref:t,className:s()(e.className,St)}))));var St,Tt=(0,W.Z)("offcanvas-title",{Component:Rt});function Pt(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const Lt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Dt=".sticky-top",$t=".navbar-toggler";class Mt extends Qe{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,le(t,{[e]:`${parseFloat(le(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],le(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";p(t,Lt).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),p(t,Dt).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),p(t,$t).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=Pt(e.className,t):e.setAttribute("class",Pt(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";p(t,Lt).forEach((e=>this.restore(n,e))),p(t,Dt).forEach((e=>this.restore(r,e))),p(t,$t).forEach((e=>this.restore(r,e)))}}let At;var Bt=Mt;function Ft(e){return(0,N.jsx)(xt,{...e})}function Kt(e){return(0,N.jsx)(pt,{...e})}const It=r.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":o,placement:a,responsive:i,show:l,backdrop:u,keyboard:c,scroll:d,onEscapeKeyDown:f,onShow:p,onHide:v,container:m,autoFocus:h,enforceFocus:x,restoreFocus:g,restoreFocusOptions:E,onEntered:b,onExit:y,onExiting:C,onEnter:k,onEntering:O,onExited:j,backdropClassName:R,manager:S,renderStaticNode:T,...P},L)=>{const D=(0,r.useRef)();e=(0,F.vE)(e,"offcanvas");const{onToggle:$}=(0,r.useContext)(I)||{},[M,A]=(0,r.useState)(!1),B=Ge(i||"xs","up");(0,r.useEffect)((()=>{A(i?l&&!B:l)}),[l,i,B]);const K=w((()=>{null==$||$(),null==v||v()})),_=(0,r.useMemo)((()=>({onHide:K})),[K]);const H=(0,r.useCallback)((t=>(0,N.jsx)("div",{...t,className:s()(`${e}-backdrop`,R)})),[R,e]),W=r=>(0,N.jsx)("div",{...r,...P,className:s()(t,i?`${e}-${i}`:e,`${e}-${a}`),"aria-labelledby":o,children:n});return(0,N.jsxs)(N.Fragment,{children:[!M&&(i||T)&&W({}),(0,N.jsx)(gt.Provider,{value:_,children:(0,N.jsx)(ct,{show:M,ref:L,backdrop:u,container:m,keyboard:c,autoFocus:h,enforceFocus:x&&!d,restoreFocus:g,restoreFocusOptions:E,onEscapeKeyDown:f,onShow:p,onHide:K,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==k||k(e,...t)},onEntering:O,onEntered:b,onExit:y,onExiting:C,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==j||j(...t)},manager:S||(d?(D.current||(D.current=new Bt({handleContainerOverflow:!1})),D.current):function(e){return At||(At=new Mt(e)),At}()),transition:Ft,backdropTransition:Kt,renderBackdrop:H,renderDialog:W})})]})}));It.displayName="Offcanvas",It.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var _t=Object.assign(It,{Body:vt,Header:jt,Title:Tt});const Ht=r.forwardRef(((e,t)=>{const n=(0,r.useContext)(I);return(0,N.jsx)(_t,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));Ht.displayName="NavbarOffcanvas";var Wt=Ht;const Ut=(0,W.Z)("navbar-text",{Component:"span"}),Vt=r.forwardRef(((e,t)=>{const{bsPrefix:n,expand:o,variant:a,bg:i,fixed:l,sticky:u,className:c,as:f="nav",expanded:p,onToggle:v,onSelect:m,collapseOnSelect:h,...x}=d(e,{expanded:"onToggle"}),g=(0,F.vE)(n,"navbar"),b=(0,r.useCallback)(((...e)=>{null==m||m(...e),h&&p&&(null==v||v(!1))}),[m,h,p,v]);void 0===x.role&&"nav"!==f&&(x.role="navigation");let y=`${g}-expand`;"string"==typeof o&&(y=`${y}-${o}`);const C=(0,r.useMemo)((()=>({onToggle:()=>null==v?void 0:v(!p),bsPrefix:g,expanded:!!p,expand:o})),[g,p,o,v]);return(0,N.jsx)(I.Provider,{value:C,children:(0,N.jsx)(E.Provider,{value:b,children:(0,N.jsx)(f,{ref:t,...x,className:s()(c,g,o&&y,a&&`${g}-${a}`,i&&`bg-${i}`,u&&`sticky-${u}`,l&&`fixed-${l}`)})})})}));Vt.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Vt.displayName="Navbar";var Zt=Object.assign(Vt,{Brand:te,Collapse:He,Offcanvas:Wt,Text:Ut,Toggle:Ue});n.p;var qt=function(){return r.createElement(Zt,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.createElement(o.Z,null,r.createElement(Zt.Brand,{href:"#home"},"GPA-Calculator"),r.createElement(Zt.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.createElement(Zt.Collapse,{id:"responsive-navbar-nav"},r.createElement(Q,{className:"me-auto"}),r.createElement(Q,null,r.createElement(Q.Link,{href:"https://githhttps://github.com/u6411325ub.com/u6411325/u6411325.github.io"},"My Github Link"),r.createElement(Q.Link,{eventKey:2,href:"#https://github.com/u6411325/u6411325.github.io"},"Repo Link")))))}},841:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6784:function(e){"use strict";e.exports=function(e,t,n,r,o,a,s,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,s,i],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},6058:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}return(0,a.default)(r)};var r,o=n(20),a=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},20:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,a,s){var i=o||"<<anonymous>>",l=s||r;if(null==n[r])return t?new Error("Required "+a+" `"+l+"` was not specified in `"+i+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),d=6;d<u;d++)c[d-6]=arguments[d];return e.apply(void 0,[n,r,i,a,l].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},785:function(e,t,n){"use strict";var r=n(841),o=n.n(r),a=n(7294),s=n(6304),i=n(5893);const l=a.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...a},l)=>{const u=(0,s.vE)(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:l,...a,className:o()(r,t?`${u}${c}`:u)})}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},6304:function(e,t,n){"use strict";n.d(t,{pi:function(){return u},vE:function(){return l},zG:function(){return c}});var r=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],a=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:s,Provider:i}=a;function l(e,t){const{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function u(){const{breakpoints:e}=(0,r.useContext)(a);return e}function c(){const{minBreakpoint:e}=(0,r.useContext)(a);return e}},894:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(841),o=n.n(r),a=/-(.)/g;var s=n(7294),i=n(6304),l=n(5893);const u=e=>{return e[0].toUpperCase()+(t=e,t.replace(a,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function c(e,{displayName:t=u(e),Component:n,defaultProps:r}={}){const a=s.forwardRef((({className:t,bsPrefix:r,as:a=n||"div",...s},u)=>{const c=(0,i.vE)(r,e);return(0,l.jsx)(a,{ref:u,className:o()(t,c),...s})}));return a.defaultProps=r,a.displayName=t,a}}}]);
//# sourceMappingURL=06a7619bbda2f793d93dcea5b753dc9e86d36d92-17465a8d05b05af44f03.js.map