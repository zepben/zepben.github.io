(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{2199:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2200:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(a),O=n,f=u["".concat(i,".").concat(O)]||u[O]||p[O]||c;return a?r.a.createElement(f,o({ref:t},l,{components:a})):r.a.createElement(f,o({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2199),o=a(8);const s=Object(n.createContext)({collectLink:()=>{}});var l=a(2202),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:u,activeClassName:O,isActive:f,"data-noBrokenLinkCheck":d,autoAddBaseUrl:j=!0}=e,m=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(l.b)(),I=Object(n.useContext)(s),C=p||u,h=Object(i.a)(C),v=null==C?void 0:C.replace("pathname://",""),y=void 0!==v?(N=v,j&&(e=>e.startsWith("/"))(N)?g(N):N):void 0;var N;const E=Object(n.useRef)(!1),w=a?c.e:c.c,S=o.a.canUseIntersectionObserver;let D;Object(n.useEffect)((()=>(!S&&h&&window.docusaurus.prefetch(y),()=>{S&&D&&D.disconnect()})),[y,S,h]);const T=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,P=!y||!h||T;return y&&h&&!T&&!d&&I.collectLink(y),P?r.a.createElement("a",Object.assign({href:y},C&&!h&&{target:"_blank",rel:"noopener noreferrer"},m)):r.a.createElement(w,Object.assign({},m,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(y),E.current=!0)},innerRef:e=>{var t,a;S&&e&&h&&(t=e,a=()=>{window.docusaurus.prefetch(y)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),a())}))})),D.observe(t))},to:y||""},a&&{isActive:f,activeClassName:O}))}},2202:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2199);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},815:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(2200)),i=a(2201),o={title:"InstanceSet",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/Part303/GenericDataSet/InstanceSet",id:"cim100/TC57CIM/IEC61970/InfIEC61970/Part303/GenericDataSet/InstanceSet",isDocsHomePage:!1,title:"InstanceSet",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\InfIEC61970\\Part303\\GenericDataSet\\InstanceSet.mdx",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/Part303/GenericDataSet/InstanceSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/Part303/GenericDataSet/InstanceSet",version:"current",sidebar:"docs",previous:{title:"ChangeSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/Part303/GenericDataSet/ChangeSet"},next:{title:"AvailablityPlan",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfAvailabilityPlans/AvailablityPlan"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Instance of a version of a model part.   This corresponds to a payload of instance data.     "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/Part303/GenericDataSet/DataSet",mdxType:"Link"},"DataSet"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/Part303/GenericDataSet/InstanceSet",mdxType:"Link"},"InstanceSet")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"InstanceSetMember"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Data objects contained in the dataset."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"InstanceSet"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Dataset containing the data objects.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfPart303/ModelOperations/DatasetArg",mdxType:"Link"},"DatasetArg")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/Part303/GenericDataSet/InstanceSet",mdxType:"Link"},"InstanceSet")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DatasetArg"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The role of a dataset in the context of an operation."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Dataset"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Dataset referenced by this argument of a model operation..")))))}p.isMDXComponent=!0}}]);