(window.webpackJsonp=window.webpackJsonp||[]).push([[1424],{1493:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return j}));var r=a(3),n=a(7),c=(a(0),a(2175)),i=a(2176),o={title:"WorkCostDetail"},l={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",isDocsHomePage:!1,title:"WorkCostDetail",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfWork\\WorkCostDetail.md",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",version:"current",sidebar:"docs",previous:{title:"WorkActionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkActionKind"},next:{title:"WorkCostSummary",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostSummary"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:b};function j(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"A collection of all of the individual cost items collected from multiple sources.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"amount"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Money",mdxType:"Link"},"Money")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'Amount in designated currency for work, either a total or an individual element. As defined in the attribute "type," multiple instances are applicable to each work for: planned cost, actual cost, authorized cost, budgeted cost, forecasted cost, other.')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"isDebit"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"True if 'amount' is a debit, false if it is a credit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"transactionDateTime"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Date and time that 'amount' is posted to the work.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkDocument",mdxType:"Link"},"WorkDocument"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/CostType",mdxType:"Link"},"CostType")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"CostType"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetails"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/Design",mdxType:"Link"},"Design")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Design"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetails"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/LaborItem",mdxType:"Link"},"LaborItem")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"LaborItems"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetail"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/MiscCostItem",mdxType:"Link"},"MiscCostItem")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MiscCostItems"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetail"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/OverheadCost",mdxType:"Link"},"OverheadCost")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"OverheadCost"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetails"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Work/Work",mdxType:"Link"},"Work")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetails"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Works"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/ContractorItem",mdxType:"Link"},"ContractorItem")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetail"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ContractorItems"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/OldWorkTask",mdxType:"Link"},"OldWorkTask")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetails"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkTask"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/PropertyUnit",mdxType:"Link"},"PropertyUnit")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetails"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PropertyUnits"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostSummary",mdxType:"Link"},"WorkCostSummary")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetail"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostSummary"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkCostDetail",mdxType:"Link"},"WorkCostDetail")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfERPSupport/ErpProjectAccounting",mdxType:"Link"},"ErpProjectAccounting")),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"WorkCostDetails"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ErpProjectAccounting"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}j.isMDXComponent=!0},2174:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))},2175:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a(0),n=a.n(r);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var b=n.a.createContext({}),O=function(t){var e=n.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):o({},e,{},t)),a},j={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),m=O(a),s=r,p=m["".concat(i,".").concat(s)]||m[s]||j[s]||c;return a?n.a.createElement(p,o({ref:e},b,{components:a})):n.a.createElement(p,o({ref:e},b))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2176:function(t,e,a){"use strict";var r=a(0),n=a.n(r),c=a(10),i=a(2174),o=a(8),l=Object(r.createContext)({collectLink:function(){}}),b=a(2177),O=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(a[r[n]]=t[r[n]])}return a};e.a=function(t){var e,a,j,m=t.isNavLink,s=t.to,p=t.href,f=t.activeClassName,d=t.isActive,C=t["data-noBrokenLinkCheck"],u=t.autoAddBaseUrl,I=void 0===u||u,g=O(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,k=Object(r.useContext)(l),y=s||p,W=Object(i.a)(y),T=null==y?void 0:y.replace("pathname://",""),E=void 0!==T?(a=T,I&&function(t){return t.startsWith("/")}(a)?N(a):a):void 0,v=Object(r.useRef)(!1),h=m?c.e:c.c,D=o.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!D&&W&&window.docusaurus.prefetch(E),function(){D&&j&&j.disconnect()}}),[E,D,W]);var M=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,x=!E||!W||M;return E&&W&&!M&&!C&&k.collectLink(E),x?n.a.createElement("a",Object.assign({href:E},y&&!W&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(h,Object.assign({},g,{onMouseEnter:function(){v.current||(window.docusaurus.preload(E),v.current=!0)},innerRef:function(t){var e,a;D&&t&&W&&(e=t,a=function(){window.docusaurus.prefetch(E)},(j=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(j.unobserve(e),j.disconnect(),a())}))}))).observe(e))},to:E||""},m&&{isActive:d,activeClassName:f}))}},2177:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return i}));var r=a(23),n=a(2174);function c(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,c=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return e+a;var O=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+O:O}(c,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,c().withBaseUrl)(t,e)}}}]);