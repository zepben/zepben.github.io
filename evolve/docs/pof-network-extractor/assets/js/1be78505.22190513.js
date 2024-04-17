"use strict";(self.webpackChunkpof_network_extractor_doco=self.webpackChunkpof_network_extractor_doco||[]).push([[514,972],{9963:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ce}});var a=n(7294),r=n(6010),o=n(833),l=n(5281),i=n(3320),c=n(8425),d=n(4477),s=n(1116),u=n(1226),m=n(5999),b=n(2466),p=n(5936);var v={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function h(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],o=n[1],l=(0,a.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(l.current?l.current=!1:a>=r?(d(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((function(e){e.location.hash&&(l.current=!0,o(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,v.backToTopButton,t&&v.backToTopButtonShow),type:"button",onClick:n})}var f=n(6550),E=n(7524),g=n(6668),k=n(1327),_=n(7462);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var I={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function S(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(C,{className:I.collapseSidebarButtonIcon}))}var N=n(9689),x=n(3366),Z=n(9688),T=Symbol("EmptyContext"),B=a.createContext(T);function w(e){var t=e.children,n=(0,a.useState)(null),r=n[0],o=n[1],l=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:o}}),[r]);return a.createElement(B.Provider,{value:l},t)}var y=n(6043),L=n(8596),A=n(9960),M=n(2389),P=["item","onItemClick","activePath","level","index"];function F(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){var t=e.item,n=e.onItemClick,o=e.activePath,i=e.level,d=e.index,s=(0,x.Z)(e,P),u=t.items,m=t.label,b=t.collapsible,p=t.className,v=t.href,h=(0,g.L)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,M.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,o),k=(0,L.Mg)(v,o),C=(0,y.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=C.collapsed,S=C.setCollapsed,N=function(){var e=(0,a.useContext)(B);if(e===T)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),w=N.expandedItem,H=N.setExpandedItem,W=function(e){void 0===e&&(e=!I),H(e?null:d),S(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,o=(0,Z.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:E,collapsed:I,updateCollapsed:W}),(0,a.useEffect)((function(){b&&null!=w&&w!==d&&h&&S(!0)}),[b,w,d,S,h]),a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(A.Z,(0,_.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":E}),onClick:b?function(e){null==n||n(t),v?W(!1):(e.preventDefault(),W())}:function(){null==n||n(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=f?f:"#":f},s),m),v&&b&&a.createElement(F,{categoryLabel:m,onClick:function(e){e.preventDefault(),W()}})),a.createElement(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(O,{items:u,tabIndex:I?-1:0,onItemClick:n,activePath:o,level:i+1})))}var W=n(3919),D=n(9471),R={menuExternalLink:"menuExternalLink_NmtK"},V=["item","onItemClick","activePath","level","index"];function z(e){var t=e.item,n=e.onItemClick,o=e.activePath,i=e.level,d=(e.index,(0,x.Z)(e,V)),s=t.href,u=t.label,m=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,o),v=(0,W.Z)(s);return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),key:u},a.createElement(A.Z,(0,_.Z)({className:(0,r.Z)("menu__link",!v&&R.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},v&&{onClick:n?function(){return n(t)}:void 0},d),u,!v&&a.createElement(D.Z,null)))}var U={menuHtmlItem:"menuHtmlItem_M9Kj"};function K(e){var t=e.item,n=e.level,o=e.index,i=t.value,c=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),c&&[U.menuHtmlItem,"menu__list-item"],d),key:o,dangerouslySetInnerHTML:{__html:i}})}var j=["item"];function q(e){var t=e.item,n=(0,x.Z)(e,j);switch(t.type){case"category":return a.createElement(H,(0,_.Z)({item:t},n));case"html":return a.createElement(K,(0,_.Z)({item:t},n));default:return a.createElement(z,(0,_.Z)({item:t},n))}}var G=["items"];function Y(e){var t=e.items,n=(0,x.Z)(e,G);return a.createElement(w,null,t.map((function(e,t){return a.createElement(q,(0,_.Z)({key:t,item:e,index:t},n))})))}var O=(0,a.memo)(Y),X={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function J(e){var t=e.path,n=e.sidebar,o=e.className,i=function(){var e=(0,N.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",X.menu,i&&X.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(O,{items:n,activePath:t,level:1})))}var Q="sidebar_njMd",$="sidebarWithHideableNavbar_wUlq",ee="sidebarHidden_VK0M",te="sidebarLogo_isFc";function ne(e){var t=e.path,n=e.sidebar,o=e.onCollapse,l=e.isHidden,i=(0,g.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(Q,c&&$,l&&ee)},c&&a.createElement(k.Z,{tabIndex:-1,className:te}),a.createElement(J,{path:t,sidebar:n}),d&&a.createElement(S,{onClick:o}))}var ae=a.memo(ne),re=n(3102),oe=n(2961),le=function(e){var t=e.sidebar,n=e.path,o=(0,oe.e)();return a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(O,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ie(e){return a.createElement(re.Zo,{component:le,props:e})}var ce=a.memo(ie);function de(e){var t=(0,E.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ae,e),r&&a.createElement(ce,e))}var se={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ue(e){var t=e.toggleSidebar;return a.createElement("div",{className:se.expandButton,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:se.expandButtonIcon}))}var me={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function be(e){var t,n=e.children,r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function pe(e){var t=e.sidebar,n=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,i=(0,f.TH)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],u=(0,a.useCallback)((function(){d&&s(!1),o((function(e){return!e}))}),[o,d]);return a.createElement("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,me.docSidebarContainer,n&&me.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(me.docSidebarContainer)&&n&&s(!0)}},a.createElement(be,null,a.createElement("div",{className:(0,r.Z)(me.sidebarViewport,d&&me.sidebarViewportHidden)},a.createElement(de,{sidebar:t,path:i,onCollapse:u,isHidden:d}),d&&a.createElement(ue,{toggleSidebar:u}))))}var ve={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function he(e){var t=e.hiddenSidebarContainer,n=e.children,o=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(ve.docMainContainer,(t||!o)&&ve.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,t&&ve.docItemWrapperEnhanced)},n))}var fe={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function Ee(e){var t=e.children,n=(0,s.V)(),r=(0,a.useState)(!1),o=r[0],l=r[1];return a.createElement(u.Z,{wrapperClassName:fe.docsWrapper},a.createElement(h,null),a.createElement("div",{className:fe.docPage},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(he,{hiddenSidebarContainer:o},t)))}var ge=n(4972),ke=n(197);function _e(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ce(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(ge.default,null);var i=n.docElement,u=n.sidebarName,m=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(_e,e),a.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.q,{version:t},a.createElement(s.b,{name:u,items:m},a.createElement(Ee,null,i)))))}},4972:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),r=n(5999),o=n(833),l=n(1226);function i(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return l}});var a=n(7294),r=n(9688),o=a.createContext(null);function l(e){var t=e.children,n=e.version;return a.createElement(o.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);