(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{2199:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},2200:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(o,".").concat(f)]||m[f]||p[f]||a;return n?i.a.createElement(d,c({ref:t},l,{components:n})):i.a.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2201:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(10),o=n(2199),c=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(2202),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:m,activeClassName:f,isActive:d,"data-noBrokenLinkCheck":b,autoAddBaseUrl:O=!0}=e,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:j}=Object(l.b)(),C=Object(r.useContext)(s),I=p||m,y=Object(o.a)(I),h=null==I?void 0:I.replace("pathname://",""),E=void 0!==h?(g=h,O&&(e=>e.startsWith("/"))(g)?j(g):g):void 0;var g;const L=Object(r.useRef)(!1),w=n?a.e:a.c,T=c.a.canUseIntersectionObserver;let D;Object(r.useEffect)((()=>(!T&&y&&window.docusaurus.prefetch(E),()=>{T&&D&&D.disconnect()})),[E,T,y]);const N=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,k=!E||!y||N;return E&&y&&!N&&!b&&C.collectLink(E),k?i.a.createElement("a",Object.assign({href:E},I&&!y&&{target:"_blank",rel:"noopener noreferrer"},v)):i.a.createElement(w,Object.assign({},v,{onMouseEnter:()=>{L.current||(window.docusaurus.preload(E),L.current=!0)},innerRef:e=>{var t,n;T&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(E)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:E||""},n&&{isActive:d,activeClassName:f}))}},2202:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(23),i=n(2199);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},454:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(2200)),o=n(2201),c={title:"EnvironmentalDependentLimit",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EnvironmentalDependentLimit",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EnvironmentalDependentLimit",isDocsHomePage:!1,title:"EnvironmentalDependentLimit",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\InfOperationalLimits\\EnvironmentalDependentLimit.mdx",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EnvironmentalDependentLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EnvironmentalDependentLimit",version:"current",sidebar:"docs",previous:{title:"TriggerCondition",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/TriggerCondition"},next:{title:"EquipmentLimitSeriesComponent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EquipmentLimitSeriesComponent"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h3",{id:"class-description"},"Class Description"),Object(a.a)("p",null,"This is a environmental based limit dependency model for calculating operational limits.  "),Object(a.a)("h3",{id:"attributes"},"Attributes"),Object(a.a)("p",null,"None  "),Object(a.a)("h3",{id:"relationships"},"Relationships"),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency"))),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperatureDependentLimitTable",mdxType:"Link"},"TemperatureDependentLimitTable")),Object(a.a)("li",{parentName:"ul"},Object(a.a)(o.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperaturePolynomialLimit",mdxType:"Link"},"TemperaturePolynomialLimit"))),Object(a.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(a.a)("table",null,Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(a.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(a.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(a.a)("h3",{id:"associations"},"Associations"),Object(a.a)("p",null,"None"))}p.isMDXComponent=!0}}]);