/*! For license information please see 2.fb273c83.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(e,t,a){"use strict";var n,r=a(2),c=a(0),o=a.n(c),l=a(82),s=a(89),i=a(90);var u=function(){if(void 0!==n)return n;var e=!1,t={get passive(){e=!0}},a=function(){};return window.addEventListener("t",a,t),window.removeEventListener("t",a,t),n=e,e},d=c.useLayoutEffect,m=function(e){var t=Object(c.useRef)(e);return d((function(){t.current=e})),t},f="touchstart",h=["mousedown",f],b=function(e){if(e===f)return u()?{passive:!0}:void 0};var v=function(e,t){var a=m(t);Object(c.useEffect)((function(){if(t){var n=function(t){e.current&&a.current&&!e.current.contains(t.target)&&a.current(t)};return h.forEach((function(e){document.addEventListener(e,n,b(e))})),function(){h.forEach((function(e){document.removeEventListener(e,n,b(e))}))}}}),[!t])};function p({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:c,activeClassName:l="navbar__link--active",prependBaseUrlToHref:u,...d}){const m=Object(i.a)(a),f=Object(i.a)(e),h=Object(i.a)(n,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:u?h:n}:{isNavLink:!0,activeClassName:l,to:m,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(f)}:null},d),c)}function g({items:e,position:t,className:a,...n}){const s=o.a.useRef(null),i=o.a.useRef(null),[u,d]=Object(c.useState)(!1);function m(e){if(e){var t,a;const e=null==i||null===(t=i.current)||void 0===t||null===(a=t.firstChild)||void 0===a?void 0:a.firstChild;e&&e.focus()}d(e)}v(s,(()=>m(!1)));const f=(e,t=!1)=>Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?o.a.createElement("div",{ref:s,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},o.a.createElement(p,Object(r.a)({className:f(a)},n,{onClick:n.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{("Enter"===e.key&&!n.to||"Tab"===e.key)&&(e.preventDefault(),m(!0))}}),n.label),o.a.createElement("ul",{ref:i,className:"dropdown__menu"},e.map((({className:t,...a},n)=>o.a.createElement("li",{key:n},o.a.createElement(p,Object(r.a)({onKeyDown:t=>{n===e.length-1&&"Tab"===t.key&&(t.preventDefault(),m(!1))},activeClassName:"dropdown__link--active",className:f(t,!0)},a))))))):o.a.createElement(p,Object(r.a)({className:f(a)},n))}function k({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>Object(l.a)("menu__link",{"menu__link--sublist":t},e);return e?o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(r.a)({className:c(a,!0)},n),n.label),o.a.createElement("ul",{className:"menu__list"},e.map((({className:e,...t},a)=>o.a.createElement("li",{className:"menu__list-item",key:a},o.a.createElement(p,Object(r.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:n.onClick}))))))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(r.a)({className:c(a)},n)))}t.a=function({mobile:e=!1,...t}){const a=e?k:g;return o.a.createElement(a,t)}},109:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},110:function(e,t,a){"use strict";var n=a(91),r=a(7),c=a(84);t.a=function(){const e=Object(n.useHistory)(),t=Object(n.useLocation)(),{siteConfig:{baseUrl:a}={}}=Object(c.a)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},112:function(e,t,a){"use strict";var n=a(0),r=a(7);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)((()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0}))),t),a}},113:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},114:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,c]=Object(n.useState)(t);return Object(n.useEffect)((()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){c(t())}}),[]),a}},115:function(e,t,a){"use strict";var n=a(84),r=a(96),c=a(90),o=a(94);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}={}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(r.a)(),a=Object(c.a)(e.href||"/");let l={};e.target?l={target:e.target}:Object(o.a)(a)||(l={rel:"noopener noreferrer",target:"_blank"});const s=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:l,logoImageUrl:Object(c.a)(s),logoAlt:e.alt}}},127:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(128)),s=m(a(8)),i=m(a(129)),u=m(a(130)),d=a(131);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},128:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},129:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},130:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},131:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},132:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(2),r=a(0),c=a.n(r),o=a(107),l=a(97);function s({label:e,to:t,docsPluginId:a,...r}){const s=Object(l.useActiveVersion)(a),i=Object(l.useLatestVersion)(a),u=null!=s?s:i,d=null!=e?e:u.label,m=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(u).path;return c.a.createElement(o.a,Object(n.a)({},r,{label:d,to:m}))}},136:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(2),r=a(0),c=a.n(r),o=a(107),l=a(97);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i({mobile:e,docsPluginId:t,...a}){var r;const i=Object(l.useActiveDocContext)(t),u=Object(l.useVersions)(t),d=Object(l.useLatestVersion)(t);const m=null!==(r=i.activeVersion)&&void 0!==r?r:d,f=e?"Versions":m.label,h=e?void 0:s(m).path;return c.a.createElement(o.a,Object(n.a)({},a,{mobile:e,label:f,to:h,items:function(){if(!(u.length<=2))return u.map((e=>{const t=(null==i?void 0:i.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==i?void 0:i.activeVersion)}}))}()}))}},85:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},86:function(e,t,a){"use strict";var n=a(0),r=a(85);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),o=a(92),l=a(84),s=a(90),i=a(7);const u="light",d="dark",m=e=>e===d?d:u,f=()=>i.a.canUseDOM?m(document.documentElement.getAttribute("data-theme")):u,h=e=>{try{localStorage.setItem("theme",m(e))}catch(t){console.error(t)}};var b=()=>{const{siteConfig:{themeConfig:{colorMode:{disableSwitch:e=!1}={}}={}}={}}=Object(l.a)(),[t,a]=Object(r.useState)(f),n=Object(r.useCallback)((()=>{a(u),h(u)}),[]),c=Object(r.useCallback)((()=>{a(d),h(d)}),[]);return Object(r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",m(t))}),[t]),Object(r.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(m(e))}catch(t){console.error(t)}}),[a]),Object(r.useEffect)((()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{a(e?d:u)}))}),[]),{isDarkTheme:t===d,setLightTheme:n,setDarkTheme:c}},v=a(109);var p=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=b();return c.a.createElement(v.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};const g="docusaurus.tab.";var k=()=>{const[e,t]=Object(r.useState)({}),a=Object(r.useCallback)(((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(a){console.error(a)}}),[]);return Object(r.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith(g)){e[a.substring(g.length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t((t=>({...t,[e]:n}))),a(e,n)}}};const E="docusaurus.announcement.dismiss",O="docusaurus.announcement.id";var y=()=>{const{announcementBar:e}=Object(l.a)().siteConfig.themeConfig,[t,a]=Object(r.useState)(!0),n=Object(r.useCallback)((()=>{localStorage.setItem(E,"true"),a(!0)}),[]);return Object(r.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=localStorage.getItem(O);"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;localStorage.setItem(O,t),r&&localStorage.setItem(E,"false"),(r||"false"===localStorage.getItem(E))&&a(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:n}},j=a(85);var C=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=k(),{isAnnouncementBarClosed:n,closeAnnouncementBar:r}=y();return c.a.createElement(j.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:r}},e.children)},w=a(82),_=a(86),S=a(54),N=a.n(S);var T=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}={}}={}}=Object(l.a)(),{content:t,backgroundColor:a,textColor:n,isCloseable:r}=e,{isAnnouncementBarClosed:o,closeAnnouncementBar:s}=Object(_.a)();return!t||r&&o?null:c.a.createElement("div",{className:N.a.announcementBar,style:{backgroundColor:a,color:n},role:"banner"},c.a.createElement("div",{className:Object(w.a)(N.a.announcementBarContent,{[N.a.announcementBarCloseable]:r}),dangerouslySetInnerHTML:{__html:t}}),r?c.a.createElement("button",{type:"button",className:N.a.announcementBarClose,onClick:s,"aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=a(89),M=a(95),I=a(127),D=a.n(I),B=a(55),P=a.n(B);const x=({icon:e,style:t})=>c.a.createElement("span",{className:Object(w.a)(P.a.toggle,P.a.dark),style:t},e),A=({icon:e,style:t})=>c.a.createElement("span",{className:Object(w.a)(P.a.toggle,P.a.light),style:t},e);var R=function(e){const{siteConfig:{themeConfig:{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:r,lightIconStyle:o}}}},isClient:s}=Object(l.a)();return c.a.createElement(D.a,Object(n.a)({disabled:!s,icons:{checked:c.a.createElement(x,{icon:t,style:a}),unchecked:c.a.createElement(A,{icon:r,style:o})}},e))},U=a(96),V=a(91);var X=function(e){const[t,a]=Object(r.useState)(e);return Object(r.useEffect)((()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}),[]),[t,a]},F=a(112);var H=e=>{const[t,a]=Object(r.useState)(!0),[n,c]=Object(r.useState)(!1),[o,l]=Object(r.useState)(0),[s,i]=Object(r.useState)(0),u=Object(r.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]),d=Object(V.useLocation)(),[m,f]=X(d.hash);return Object(F.a)((({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(n)return c(!1),a(!1),void l(t);const r=document.documentElement.scrollHeight-s,i=window.innerHeight;o&&t>=o?a(!1):t+i<r&&a(!0),l(t)}),[o,s]),Object(r.useEffect)((()=>{e&&(a(!0),f(d.hash))}),[d]),Object(r.useEffect)((()=>{e&&m&&c(!0)}),[m]),{navbarRef:u,isNavbarVisible:t}},$=a(113),K=a(114),Y=a(115),q=a(56),G=a.n(q),W=a(107);const z={default:()=>W.a,docsVersion:()=>a(132).default,docsVersionDropdown:()=>a(136).default};function J({type:e,...t}){const a=((e="default")=>{const t=z[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return c.a.createElement(a,t)}const Q="right";var Z=function(){const{siteConfig:{themeConfig:{navbar:{title:e="",items:t=[],hideOnScroll:a=!1,style:o}={},colorMode:{disableSwitch:s=!1}={}}},isClient:i}=Object(l.a)(),[u,d]=Object(r.useState)(!1),[m,f]=Object(r.useState)(!1),{isDarkTheme:h,setLightTheme:b,setDarkTheme:v}=Object(U.a)(),{navbarRef:p,isNavbarVisible:g}=H(a),{logoLink:k,logoLinkProps:E,logoImageUrl:O,logoAlt:y}=Object(Y.a)();Object($.a)(u);const j=Object(r.useCallback)((()=>{d(!0)}),[d]),C=Object(r.useCallback)((()=>{d(!1)}),[d]),_=Object(r.useCallback)((e=>e.target.checked?v():b()),[b,v]),S=Object(K.a)();Object(r.useEffect)((()=>{S===K.b.desktop&&d(!1)}),[S]);const{leftItems:N,rightItems:T}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:Q)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:Q)}))}}(t);return c.a.createElement("nav",{ref:p,className:Object(w.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":u,[G.a.navbarHideable]:a,[G.a.navbarHidden]:!g})},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:j,onKeyDown:j},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(L.a,Object(n.a)({className:"navbar__brand",to:k},E),null!=O&&c.a.createElement("img",{key:i,className:"navbar__logo",src:O,alt:y}),null!=e&&c.a.createElement("strong",{className:Object(w.a)("navbar__title",{[G.a.hideLogoText]:m})},e)),N.map(((e,t)=>c.a.createElement(J,Object(n.a)({},e,{key:t}))))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},T.map(((e,t)=>c.a.createElement(J,Object(n.a)({},e,{key:t})))),!s&&c.a.createElement(R,{className:G.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:_}),c.a.createElement(M.a,{handleSearchBarToggle:f,isSearchBarExpanded:m}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(L.a,Object(n.a)({className:"navbar__brand",onClick:C,to:k},E),null!=O&&c.a.createElement("img",{key:i,className:"navbar__logo",src:O,alt:y}),null!=e&&c.a.createElement("strong",{className:"navbar__title"},e)),!s&&u&&c.a.createElement(R,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:_})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},t.map(((e,t)=>c.a.createElement(J,Object(n.a)({mobile:!0},e,{onClick:C,key:t})))))))))},ee=a(57),te=a.n(ee);function ae({to:e,href:t,label:a,prependBaseUrlToHref:r,...o}){const l=Object(s.a)(e),i=Object(s.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(L.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:r?i:t}:{to:l},o),a)}const ne=({url:e,alt:t})=>c.a.createElement("img",{className:"footer__logo",alt:t,src:e});var re=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:r,links:o=[],logo:i={}}=n||{},u=Object(s.a)(i.src);return n?c.a.createElement("footer",{className:Object(w.a)("footer",{"footer--dark":"dark"===n.style})},c.a.createElement("div",{className:"container"},o&&o.length>0&&c.a.createElement("div",{className:"row footer__links"},o.map(((e,t)=>c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(ae,e))))):null)))),(i||r)&&c.a.createElement("div",{className:"text--center"},i&&i.src&&c.a.createElement("div",{className:"margin-bottom--sm"},i.href?c.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:te.a.footerLogoLink},c.a.createElement(ne,{alt:i.alt,url:u})):c.a.createElement(ne,{alt:i.alt,url:u})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null};a(58);function ce({children:e}){return c.a.createElement(p,null,c.a.createElement(C,null,e))}t.a=function(e){const{siteConfig:t}=Object(l.a)(),{favicon:a,title:r,themeConfig:{image:i,metadatas:u},url:d}=t,{children:m,title:f,noFooter:h,description:b,image:v,keywords:p,permalink:g}=e,k=f?`${f} | ${r}`:r,E=v||i,O=Object(s.a)(E,{absolute:!0}),y=Object(s.a)(a);return c.a.createElement(ce,null,c.a.createElement(o.a,null,c.a.createElement("html",{lang:"en"}),k&&c.a.createElement("title",null,k),k&&c.a.createElement("meta",{property:"og:title",content:k}),a&&c.a.createElement("link",{rel:"shortcut icon",href:y}),b&&c.a.createElement("meta",{name:"description",content:b}),b&&c.a.createElement("meta",{property:"og:description",content:b}),p&&p.length&&c.a.createElement("meta",{name:"keywords",content:p.join(",")}),E&&c.a.createElement("meta",{property:"og:image",content:O}),E&&c.a.createElement("meta",{property:"twitter:image",content:O}),E&&c.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${k}`}),g&&c.a.createElement("meta",{property:"og:url",content:d+g}),g&&c.a.createElement("link",{rel:"canonical",href:d+g}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c.a.createElement(o.a,null,u.map(((e,t)=>c.a.createElement("meta",Object(n.a)({key:`metadata_${t}`},e))))),c.a.createElement(T,null),c.a.createElement(Z,null),c.a.createElement("div",{className:"main-wrapper"},m),!h&&c.a.createElement(re,null))}},96:function(e,t,a){"use strict";var n=a(0),r=a(109);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},99:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),o=a(23),l=a(84),s=a(91),i=a(89),u=a(92),d=a(110);function m(){return c.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},c.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var f=a(111);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var p="Ctrl";function g(){return"undefined"==typeof navigator?p:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var k=c.a.forwardRef((function(e,t){var a=b(Object(r.useState)((function(){return g()?"\u2318":p})),2),n=a[0],o=a[1];return Object(r.useEffect)((function(){g()&&o("\u2318")}),[]),c.a.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),c.a.createElement(f.a,null),c.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),c.a.createElement("span",{className:"DocSearch-Button-Key"},n===p?c.a.createElement(m,null):n),c.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))}));let E=null;function O({hit:e,children:t}){return c.a.createElement(i.a,{to:e.url},t)}function y({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(d.a)();return c.a.createElement(i.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function j(e){const{siteMetadata:t}=Object(l.a)(),i=Object(s.useHistory)(),d=Object(r.useRef)(null),[m,f]=Object(r.useState)(!1),[h,b]=Object(r.useState)(null),v=Object(r.useCallback)((()=>E?Promise.resolve():Promise.all([a.e(25).then(a.bind(null,160)),Promise.all([a.e(0),a.e(26)]).then(a.bind(null,159)),a.e(0).then(a.t.bind(null,81,7))]).then((([{DocSearchModal:e}])=>{E=e}))),[]),p=Object(r.useCallback)((()=>{v().then((()=>{f(!0)}))}),[v,f]),g=Object(r.useCallback)((()=>{f(!1)}),[f]),j=Object(r.useCallback)((e=>{v().then((()=>{f(!0),b(e.key)}))}),[v,f,b]),C=Object(r.useRef)({navigate({suggestionUrl:e}){i.push(e)}}).current,w=Object(r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:t.href}})))).current,_=Object(r.useMemo)((()=>e=>c.a.createElement(y,Object(n.a)({},e,{onClose:g}))),[g]),S=Object(r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e)),[t.docusaurusVersion]);return function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,r=e.onInput,o=e.searchButtonRef;c.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,r,o])}({isOpen:m,onOpen:p,onClose:g,onInput:j,searchButtonRef:d}),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement("link",{rel:"preconnect",href:`https://${e.appId}-dsn.algolia.net`,crossOrigin:!0})),c.a.createElement(k,{onTouchStart:v,onFocus:v,onMouseOver:v,onClick:p,ref:d}),m&&Object(o.createPortal)(c.a.createElement(E,Object(n.a)({onClose:g,initialScrollY:window.scrollY,initialQuery:h,navigator:C,transformItems:w,hitComponent:O,resultsFooterComponent:_,transformSearchClient:S},e)),document.body))}t.a=function(){const{siteConfig:e}=Object(l.a)();return c.a.createElement(j,e.themeConfig.algolia)}}}]);