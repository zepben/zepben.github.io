(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{2197:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return n?o.a.createElement(b,i({ref:t},s,{components:n})):o.a.createElement(b,i({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2199:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(10),c=n(2197),i=n(8),l=Object(r.createContext)({collectLink:function(){}}),s=n(2200),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,p=e.to,b=e.href,j=e.activeClassName,O=e.isActive,v=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,C=void 0===m||m,w=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(s.b)().withBaseUrl,y=Object(r.useContext)(l),I=p||b,N=Object(c.a)(I),P=null==I?void 0:I.replace("pathname://",""),g=void 0!==P?(n=P,C&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,k=Object(r.useRef)(!1),M=d?a.e:a.c,E=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&N&&window.docusaurus.prefetch(g),function(){E&&f&&f.disconnect()}}),[g,E,N]);var x=null!==(t=null==g?void 0:g.startsWith("#"))&&void 0!==t&&t,T=!g||!N||x;return g&&N&&!x&&!v&&y.collectLink(g),T?o.a.createElement("a",Object.assign({href:g},I&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):o.a.createElement(M,Object.assign({},w,{onMouseEnter:function(){k.current||(window.docusaurus.preload(g),k.current=!0)},innerRef:function(e){var t,n;E&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(g)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:g||""},d&&{isActive:O,activeClassName:j}))}},2200:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(23),o=n(2197);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,c=a.forcePrependBaseUrl,i=void 0!==c&&c,l=a.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},339:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(2198)),c=(n(2199),{title:"NetworkModelProjectCollection",hide_table_of_contents:!0}),i={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectCollection",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectCollection",isDocsHomePage:!1,title:"NetworkModelProjectCollection",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfPart303\\NetworkModelProjects\\NetworkModelProjectCollection.mdx",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectCollection",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectCollection",version:"current",sidebar:"docs",previous:{title:"NetworkModelProjectComponent2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectComponent2"},next:{title:"NetworkModelProjectChangeVersion",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/NetworkModelProjects/NetworkModelProjectChangeVersion"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"attributes"},"Attributes"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"relationships"},"Relationships"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"None")),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(a.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.a)("table",null,Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}u.isMDXComponent=!0}}]);