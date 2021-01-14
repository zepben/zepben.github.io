/*! For license information please see 2.89b0ca02.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2168:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),o=a(2162),l=a(2164),s=a(2167),i=a(2165),u=a(2161);function d({activeBasePath:e,activeBaseRegex:t,to:a,href:r,label:o,activeClassName:i="navbar__link--active",prependBaseUrlToHref:u,...d}){const m=Object(s.a)(a),f=Object(s.a)(e),h=Object(s.a)(r,{forcePrependBaseUrl:!0});return c.a.createElement(l.a,Object(n.a)({},r?{target:"_blank",rel:"noopener noreferrer",href:u?h:r}:{isNavLink:!0,activeClassName:i,to:m,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(f)}:null},d),o)}function m({items:e,position:t,className:a,...l}){const s=Object(r.useRef)(null),i=Object(r.useRef)(null),[u,m]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&m(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[s]);const f=(e,t=!1)=>Object(o.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?c.a.createElement("div",{ref:s,className:Object(o.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},c.a.createElement(d,Object(n.a)({className:f(a)},l,{onClick:l.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),m(!u))}}),l.label),c.a.createElement("ul",{ref:i,className:"dropdown__menu"},e.map((({className:t,...a},r)=>c.a.createElement("li",{key:r},c.a.createElement(d,Object(n.a)({onKeyDown:t=>{if(r===e.length-1&&"Tab"===t.key){t.preventDefault(),m(!1);const e=s.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active",className:f(t,!0)},a))))))):c.a.createElement(d,Object(n.a)({className:f(a)},l))}function f({items:e,className:t,position:a,...l}){var s,m;const f=Object(r.useRef)(null),{pathname:h}=Object(i.useLocation)(),[b,v]=Object(r.useState)((()=>{var t;return null===(t=!(null!=e&&e.some((e=>Object(u.isSamePath)(e.to,h)))))||void 0===t||t})),p=(e,t=!1)=>Object(o.a)("menu__link",{"menu__link--sublist":t},e);if(!e)return c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(d,Object(n.a)({className:p(t)},l)));const g=null!==(s=f.current)&&void 0!==s&&s.scrollHeight?`${null===(m=f.current)||void 0===m?void 0:m.scrollHeight}px`:void 0;return c.a.createElement("li",{className:Object(o.a)("menu__list-item",{"menu__list-item--collapsed":b})},c.a.createElement(d,Object(n.a)({role:"button",className:p(t,!0)},l,{onClick:()=>{v((e=>!e))}}),l.label),c.a.createElement("ul",{className:"menu__list",ref:f,style:{height:b?void 0:g}},e.map((({className:e,...t},a)=>c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(d,Object(n.a)({activeClassName:"menu__link--active",className:p(e)},t,{onClick:l.onClick})))))))}t.a=function({mobile:e=!1,...t}){const a=e?f:m;return c.a.createElement(a,t)}},2171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(2162),o=a(57),l=a.n(o);var s=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:e=>{if(13!==e.keyCode)return;document.activeElement.blur();const t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}},"Skip to main content"))},i=a(2161),u=a(2184),d=a(58),m=a.n(d);var f=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(u.a)(),{announcementBar:a}=Object(i.useThemeConfig)();if(!a)return null;const{content:n,backgroundColor:o,textColor:l,isCloseable:s}=a;return!n||s&&e?null:r.a.createElement("div",{className:m.a.announcementBar,style:{backgroundColor:o,color:l},role:"banner"},r.a.createElement("div",{className:Object(c.a)(m.a.announcementBarContent,{[m.a.announcementBarCloseable]:s}),dangerouslySetInnerHTML:{__html:n}}),s?r.a.createElement("button",{type:"button",className:m.a.announcementBarClose,onClick:t,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=a(3),b=a(2174),v=a(2211),p=a.n(v),g=a(23),E=a(59),k=a.n(E);const O=({icon:e,style:t})=>r.a.createElement("span",{className:Object(c.a)(k.a.toggle,k.a.dark),style:t},e),y=({icon:e,style:t})=>r.a.createElement("span",{className:Object(c.a)(k.a.toggle,k.a.light),style:t},e);var j=function(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:n,lightIconStyle:c}}}=Object(i.useThemeConfig)(),{isClient:o}=Object(g.default)();return r.a.createElement(p.a,Object(h.a)({disabled:!o,icons:{checked:r.a.createElement(O,{icon:t,style:a}),unchecked:r.a.createElement(y,{icon:n,style:c})}},e))},C=a(2175),_=a(2165),w=a(2189);var N=e=>{const t=Object(_.useLocation)(),[a,r]=Object(n.useState)(!e),c=Object(n.useRef)(!1),[o,l]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return Object(w.a)((({scrollY:t})=>{if(!e)return;if(t<s)return;if(c.current)return c.current=!1,r(!1),void l(t);o&&0===t&&r(!0);const a=document.documentElement.scrollHeight-s,n=window.innerHeight;o&&t>=o?r(!1):t+n<a&&r(!0),l(t)}),[o,s,c]),Object(n.useEffect)((()=>{e&&o&&r(!0)}),[t.pathname]),Object(n.useEffect)((()=>{e&&(c.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:a}},S=a(2190),T=a(2191),L=a(2168);function D({mobile:e,...t}){const{siteConfig:{baseUrl:a},i18n:{defaultLocale:n,currentLocale:c,locales:o,localeConfigs:l}}=Object(g.default)(),{pathname:s}=Object(_.useLocation)();function i(e){return l[e].label}const u=c===n?a:a.replace(`/${c}/`,"/"),d=s.replace(a,"");const m=o.map((e=>{const t=`${function(e){return e===n?`${u}`:`${u}${e}/`}(e)}${d}`;return{isNavLink:!0,label:i(e),to:`pathname://${t}`,target:"_self",autoAddBaseUrl:!1,className:e===c?"dropdown__link--active":""}})),f=e?"Languages":i(c);return r.a.createElement(L.a,Object(h.a)({},t,{mobile:e,label:f,items:m}))}const I={default:()=>L.a,localeDropdown:()=>D,docsVersion:()=>a(2216).default,docsVersionDropdown:()=>a(2217).default,doc:()=>a(2218).default};function M({type:e,...t}){const a=((e="default")=>{const t=I[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(a,t)}var P=a(2201),B=a(2192),x=a(61),A=a.n(x);const V="right";var R=function(){const{navbar:{items:e,hideOnScroll:t,style:a},colorMode:{disableSwitch:o}}=Object(i.useThemeConfig)(),[l,s]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:m,setLightTheme:f,setDarkTheme:v}=Object(C.a)(),{navbarRef:p,isNavbarVisible:g}=N(t);Object(S.a)(l);const E=Object(n.useCallback)((()=>{s(!0)}),[s]),k=Object(n.useCallback)((()=>{s(!1)}),[s]),O=Object(n.useCallback)((e=>e.target.checked?v():f()),[f,v]),y=Object(T.a)();Object(n.useEffect)((()=>{y===T.b.desktop&&s(!1)}),[y]);const{leftItems:_,rightItems:w}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:V)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:V)}))}}(e);return r.a.createElement("nav",{ref:p,className:Object(c.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===a,"navbar--primary":"primary"===a,"navbar-sidebar--show":l,[A.a.navbarHideable]:t,[A.a.navbarHidden]:!g})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:E,onKeyDown:E},r.a.createElement(B.a,null)),r.a.createElement(P.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",{[A.a.hideLogoText]:u})}),_.map(((e,t)=>r.a.createElement(M,Object(h.a)({},e,{key:t}))))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},w.map(((e,t)=>r.a.createElement(M,Object(h.a)({},e,{key:t})))),!o&&r.a.createElement(j,{className:A.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:m,onChange:O}),r.a.createElement(b.a,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:k}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(P.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:k}),!o&&l&&r.a.createElement(j,{"aria-label":"Dark mode toggle in sidebar",checked:m,onChange:O})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>r.a.createElement(M,Object(h.a)({mobile:!0},e,{onClick:k,key:t})))))))))},U=a(2164),F=a(2167),$=a(62),X=a.n($);function H({to:e,href:t,label:a,prependBaseUrlToHref:n,...c}){const o=Object(F.a)(e),l=Object(F.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(U.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?l:t}:{to:o},c),a)}const K=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var q=function(){const{footer:e}=Object(i.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{},o=Object(F.a)(n.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(H,e))))):null)))),(n||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},n&&n.src&&r.a.createElement("div",{className:"margin-bottom--sm"},n.href?r.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:X.a.footerLogoLink},r.a.createElement(K,{alt:n.alt,url:o})):r.a.createElement(K,{alt:n.alt,url:o})),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},G=a(8);const Y="light",W="dark",z=e=>e===W?W:Y,J=()=>G.a.canUseDOM?z(document.documentElement.getAttribute("data-theme")):Y,Q=e=>{try{localStorage.setItem("theme",z(e))}catch(t){console.error(t)}};var Z=()=>{const{colorMode:{disableSwitch:e,respectPrefersColorScheme:t}}=Object(i.useThemeConfig)(),[a,r]=Object(n.useState)(J),c=Object(n.useCallback)((()=>{r(Y),Q(Y)}),[]),o=Object(n.useCallback)((()=>{r(W),Q(W)}),[]);return Object(n.useEffect)((()=>{document.documentElement.setAttribute("data-theme",z(a))}),[a]),Object(n.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&r(z(e))}catch(t){console.error(t)}}),[r]),Object(n.useEffect)((()=>{e&&!t||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{r(e?W:Y)}))}),[]),{isDarkTheme:a===W,setLightTheme:c,setDarkTheme:o}},ee=a(2188);var te=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=Z();return r.a.createElement(ee.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};const ae="docusaurus.tab.";var ne=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)(((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith(ae)){e[a.substring(ae.length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t((t=>({...t,[e]:n}))),a(e,n)}}};const re="docusaurus.announcement.dismiss",ce="docusaurus.announcement.id";var oe=()=>{const{announcementBar:e}=Object(i.useThemeConfig)(),[t,a]=Object(n.useState)(!0),r=Object(n.useCallback)((()=>{localStorage.setItem(re,"true"),a(!0)}),[]);return Object(n.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=localStorage.getItem(ce);"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;localStorage.setItem(ce,t),r&&localStorage.setItem(re,"false"),(r||"false"===localStorage.getItem(re))&&a(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}},le=a(2185);var se=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=ne(),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}=oe();return r.a.createElement(le.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:c}},e.children)};function ie({children:e}){return r.a.createElement(te,null,r.a.createElement(se,null,r.a.createElement(i.DocsPreferredVersionContextProvider,null,e)))}var ue=a(24);function de({locale:e,version:t,tag:a}){const n=e;return r.a.createElement(ue.a,null,n&&r.a.createElement("meta",{name:"docsearch:language",content:n}),t&&r.a.createElement("meta",{name:"docsearch:version",content:t}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}function me(e){const{siteConfig:t,i18n:{currentLocale:a}}=Object(g.default)(),{favicon:n,themeConfig:{image:c,metadatas:o},url:l}=t,{title:s,description:u,image:d,keywords:m,permalink:f,searchMetadatas:b}=e,v=Object(i.useTitleFormatter)(s),p=d||c,E=Object(F.a)(p,{absolute:!0}),k=Object(F.a)(n),O=a.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,null,r.a.createElement("html",{lang:O}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),n&&r.a.createElement("link",{rel:"shortcut icon",href:k}),u&&r.a.createElement("meta",{name:"description",content:u}),u&&r.a.createElement("meta",{property:"og:description",content:u}),m&&m.length&&r.a.createElement("meta",{name:"keywords",content:m.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:E}),p&&r.a.createElement("meta",{name:"twitter:image",content:E}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${v}`}),f&&r.a.createElement("meta",{property:"og:url",content:l+f}),f&&r.a.createElement("link",{rel:"canonical",href:l+f}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(de,Object(h.a)({tag:i.DEFAULT_SEARCH_TAG,locale:a},b)),r.a.createElement(ue.a,null,o.map(((e,t)=>r.a.createElement("meta",Object(h.a)({key:`metadata_${t}`},e))))))}a(63);var fe=function(){Object(n.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(64);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n}=e;return fe(),r.a.createElement(ie,null,r.a.createElement(me,e),r.a.createElement(s,null),r.a.createElement(f,null),r.a.createElement(R,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(q,null))}},2175:function(e,t,a){"use strict";var n=a(0),r=a(2188);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},2179:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),o=a(26),l=a(23),s=a(2165),i=a(2164),u=a(24),d=a(2186);function m(){return c.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},c.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var f=a(2187);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var p="Ctrl";var g=c.a.forwardRef((function(e,t){var a=b(Object(r.useState)(null),2),n=a[0],o=a[1];return Object(r.useEffect)((function(){"undefined"!=typeof navigator&&o(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":p)}),[]),c.a.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),c.a.createElement("div",{className:"DocSearch-Button-Container"},c.a.createElement(f.a,null),c.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search")),null!==n?c.a.createElement("div",{className:"DocSearch-Button-Keys"},c.a.createElement("span",{className:"DocSearch-Button-Key"},n===p?c.a.createElement(m,null):n),c.a.createElement("span",{className:"DocSearch-Button-Key"},"K")):null)})),E=null;function k(e){var t=e.hit,a=e.children;return c.a.createElement(i.a,{to:t.url},a)}function O(e){var t=e.state,a=e.onClose,n=Object(d.a)().generateSearchPageLink;return c.a.createElement(i.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function y(e){var t=Object(l.default)().siteMetadata,i=Object(s.useHistory)(),d=Object(r.useRef)(null),m=Object(r.useState)(!1),f=m[0],h=m[1],b=Object(r.useState)(null),v=b[0],p=b[1],y=Object(r.useCallback)((function(){return E?Promise.resolve():Promise.all([a.e(2092).then(a.bind(null,2270)),Promise.all([a.e(0),a.e(2093)]).then(a.bind(null,2269)),a.e(0).then(a.t.bind(null,2159,7))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),j=Object(r.useCallback)((function(){y().then((function(){h(!0)}))}),[y,h]),C=Object(r.useCallback)((function(){h(!1)}),[h]),_=Object(r.useCallback)((function(e){y().then((function(){h(!0),p(e.key)}))}),[y,h,p]),w=Object(r.useRef)({navigate:function(e){var t=e.suggestionUrl;i.push(t)}}).current,N=Object(r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:t.href})}))})).current,S=Object(r.useMemo)((function(){return function(e){return c.a.createElement(O,Object(n.a)({},e,{onClose:C}))}}),[C]),T=Object(r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}),[t.docusaurusVersion]);return function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,r=e.onInput,o=e.searchButtonRef;c.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,r,o])}({isOpen:f,onOpen:j,onClose:C,onInput:_,searchButtonRef:d}),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),c.a.createElement(g,{onTouchStart:y,onFocus:y,onMouseOver:y,onClick:j,ref:d}),f&&Object(o.createPortal)(c.a.createElement(E,Object(n.a)({onClose:C,initialScrollY:window.scrollY,initialQuery:v,navigator:w,transformItems:N,hitComponent:k,resultsFooterComponent:S,transformSearchClient:T},e)),document.body))}t.a=function(){var e=Object(l.default)().siteConfig;return c.a.createElement(y,e.themeConfig.algolia)}},2184:function(e,t,a){"use strict";var n=a(0),r=a(2185);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2185:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},2186:function(e,t,a){"use strict";var n=a(2165),r=a(8),c=a(23);t.a=function(){const e=Object(n.useHistory)(),t=Object(n.useLocation)(),{siteConfig:{baseUrl:a}={}}=Object(c.default)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}}},2187:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},2188:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},2189:function(e,t,a){"use strict";var n=a(0),r=a(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)((()=>{const e={passive:!0};return window.addEventListener("scroll",o,e),()=>window.removeEventListener("scroll",o,e)}),t),a}},2190:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},2191:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,c]=Object(n.useState)(t);return Object(n.useEffect)((()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){c(t())}}),[]),a}},2192:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=({width:e=30,height:t=30,className:a,...r})=>c.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:a,width:e,height:t,viewBox:"0 0 30 30",role:"img",focusable:"false"},r),c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},2201:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),o=a(2164),l=a(2162),s=a(23),i=a(2175),u=a(60),d=a.n(u);var m=e=>{const{isClient:t}=Object(s.default)(),{isDarkTheme:a}=Object(i.a)(),{sources:r,className:o,alt:u="",...m}=e,f=t?a?["dark"]:["light"]:["light","dark"];return c.a.createElement(c.a.Fragment,null,f.map((e=>c.a.createElement("img",Object(n.a)({key:e,src:r[e],alt:u,className:Object(l.a)(d.a.themedImage,d.a[`themedImage--${e}`],o)},m)))))},f=a(2167),h=a(2161),b=a(2169);t.a=e=>{const{isClient:t}=Object(s.default)(),{navbar:{title:a,logo:r={src:""}}}=Object(h.useThemeConfig)(),{imageClassName:l,titleClassName:i,...u}=e,d=Object(f.a)(r.href||"/"),v=r.target?{target:r.target}:Object(b.a)(d)?{}:{rel:"noopener noreferrer",target:"_blank"},p={light:Object(f.a)(r.src),dark:Object(f.a)(r.srcDark||r.src)};return c.a.createElement(o.a,Object(n.a)({to:d},u,v),r.src&&c.a.createElement(m,{key:t,className:l,sources:p,alt:r.alt||a||"Logo"}),null!=a&&c.a.createElement("strong",{className:i},a))}},2211:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(2212)),s=m(a(1)),i=m(a(2213)),u=m(a(2214)),d=a(2215);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},2212:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},2213:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},2214:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},2215:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},2216:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(3),r=a(0),c=a.n(r),o=a(2168),l=a(2163),s=a(2161);function i({label:e,to:t,docsPluginId:a,...r}){var i;const u=Object(l.useActiveVersion)(a),{preferredVersion:d}=Object(s.useDocsPreferredVersion)(a),m=Object(l.useLatestVersion)(a),f=null!==(i=null!=u?u:d)&&void 0!==i?i:m,h=null!=e?e:f.label,b=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(f).path;return c.a.createElement(o.a,Object(n.a)({},r,{label:h,to:b}))}},2217:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),o=a(2168),l=a(2163),s=a(2161);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function u({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:a,dropdownItemsBefore:r,dropdownItemsAfter:u,...d}){var m,f;const h=Object(l.useActiveDocContext)(t),b=Object(l.useVersions)(t),v=Object(l.useLatestVersion)(t),{preferredVersion:p,savePreferredVersionName:g}=Object(s.useDocsPreferredVersion)(t);const E=null!==(m=null!==(f=h.activeVersion)&&void 0!==f?f:p)&&void 0!==m?m:v,k=e?"Versions":E.label,O=e?void 0:i(E).path;return c.a.createElement(o.a,Object(n.a)({},d,{mobile:e,label:k,to:O,items:function(){const e=b.map((e=>{const t=(null==h?void 0:h.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==h?void 0:h.activeVersion),onClick:()=>{g(e.name)}}})),t=[...r,...e,...u];if(!(t.length<=1))return t}(),isActive:a?()=>!1:void 0}))}},2218:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),o=a(2168),l=a(2163),s=a(2162),i=a(2161);function u({docId:e,activeSidebarClassName:t,label:a,docsPluginId:r,...u}){var d;const{activeVersion:m,activeDoc:f}=Object(l.useActiveDocContext)(r),{preferredVersion:h}=Object(i.useDocsPreferredVersion)(r),b=Object(l.useLatestVersion)(r),v=null!==(d=null!=m?m:h)&&void 0!==d?d:b,p=v.docs.find((t=>t.id===e));if(!p)throw new Error(`DocNavbarItem: couldn't find any doc with id=${e} in version ${v.name}.\nAvailable docIds=\n- ${v.docs.join("\n- ")}`);return c.a.createElement(o.a,Object(n.a)({exact:!0},u,{className:Object(s.a)(u.className,{[t]:f&&f.sidebar===p.sidebar}),label:null!=a?a:p.id,to:p.path}))}}}]);