(window.webpackJsonp=window.webpackJsonp||[]).push([[795],{2189:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2190:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2191:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),o=n(2189),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),s=n(2192),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,u,p=e.isNavLink,d=e.to,m=e.href,O=e.activeClassName,f=e.isActive,j=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,h=void 0===g||g,v=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,C=Object(a.useContext)(l),N=d||m,E=Object(o.a)(N),k=null==N?void 0:N.replace("pathname://",""),w=void 0!==k?(n=k,h&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,I=Object(a.useRef)(!1),T=p?i.e:i.c,L=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!L&&E&&window.docusaurus.prefetch(w),function(){L&&u&&u.disconnect()}}),[w,L,E]);var x=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,M=!w||!E||x;return w&&E&&!x&&!j&&C.collectLink(w),M?r.a.createElement("a",Object.assign({href:w},N&&!E&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(T,Object.assign({},v,{onMouseEnter:function(){I.current||(window.docusaurus.preload(w),I.current=!0)},innerRef:function(e){var t,n;L&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(w)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:w||""},p&&{isActive:f,activeClassName:O}))}},2192:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(23),r=n(2189);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},864:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(2190)),o=n(2191),c={title:"LightningStrike"},l={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/LightningStrike",id:"cim100/TC57CIM/IEC62325/Environmental/LightningStrike",isDocsHomePage:!1,title:"LightningStrike",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\LightningStrike.md",slug:"/cim100/TC57CIM/IEC62325/Environmental/LightningStrike",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/LightningStrike",version:"current",sidebar:"docs",previous:{title:"MagneticStorm",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/MagneticStorm"},next:{title:"Landslide",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/Landslide"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A cloud-to-ground lightning strike at a particular location.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"errorEllipseConfidence"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Likelihood that strike fell within errorEllipse.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"errorEllipseMajorSemiAxis"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Length",mdxType:"Link"},"Length")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Length of major semi-axis (longest radius) of the error ellipse.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"errorEllipseMinorSemiAxis"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Length",mdxType:"Link"},"Length")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Length of minor semi-axis (shortest radius) of the error ellipse.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"errorEllipseOrientation"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvDomain/Bearing",mdxType:"Link"},"Bearing")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The orientation of the major semi- axis in degrees from True North.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"negativePolarity"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The polarity of the strike, with T meaning negative. About 90% of all lightning strokes are negative strokes, meaning that they were initiated by a large concentration of negative charge in the cloud-base; this tends to induce an area of positive charge on the ground.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"peakAmplitude"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Peak current of strike.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/GeosphericPhenomenon",mdxType:"Link"},"GeosphericPhenomenon"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}u.isMDXComponent=!0}}]);