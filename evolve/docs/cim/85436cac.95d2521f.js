(window.webpackJsonp=window.webpackJsonp||[]).push([[1110],{1181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(2208)),c=a(2209),l={title:"TimeTariffInterval",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",id:"cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",isDocsHomePage:!1,title:"TimeTariffInterval",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\PaymentMetering\\TimeTariffInterval.mdx",slug:"/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",version:"current",sidebar:"docs",previous:{title:"Tender",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Tender"},next:{title:"Transaction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/Transaction"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],f={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"One of a sequence of time intervals defined in terms of real time. It is typically used in association with TariffProfile to define the intervals in a time of use tariff structure, where startDateTime simultaneously determines the starting point of this interval and the ending point of the previous interval."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"sequenceNumber"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A sequential reference that defines the identity of this interval and its relative position with respect to other intervals in a sequence of intervals.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"startTime"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Time",mdxType:"Link"},"Time")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"A real time marker that defines the starting time (typically it is the time of day) for this interval. The interval extends to the start of the next interval or until it is reset to the start of the first interval by TariffProfile.tariffCycle.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/ConsumptionTariffInterval",mdxType:"Link"},"ConsumptionTariffInterval")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",mdxType:"Link"},"TimeTariffInterval")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"ConsumptionTariffIntervals"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All consumption tariff intervals that introduce variation in this time of use tariff interval; allows to express e.g., peak hour prices that are different with different consumption blocks."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TouTariffIntervals"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All time of use tariff intervals influenced by this consumption tariff interval.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TariffProfile",mdxType:"Link"},"TariffProfile")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",mdxType:"Link"},"TimeTariffInterval")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TariffProfiles"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All tariff profiles defined by this time tariff interval."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TimeTariffIntervals"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All time tariff intervals used to define this tariff profile.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/TimeTariffInterval",mdxType:"Link"},"TimeTariffInterval")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/PaymentMetering/Charge",mdxType:"Link"},"Charge")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TimeTariffIntervals"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Tariff intervals to which this time-based charge has to be levied."),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Charges"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"All charges used to define this time tariff interval.")))))}b.isMDXComponent=!0},2207:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),f=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=f(a),p=r,O=m["".concat(c,".").concat(p)]||m[p]||b[p]||i;return a?n.a.createElement(O,l({ref:t},s,{components:a})):n.a.createElement(O,l({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(10),c=a(2207),l=a(8);const o=Object(r.createContext)({collectLink:()=>{}});var s=a(2210),f=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:m,activeClassName:p,isActive:O,"data-noBrokenLinkCheck":u,autoAddBaseUrl:d=!0}=e,j=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),v=Object(r.useContext)(o),h=b||m,y=Object(c.a)(h),T=null==h?void 0:h.replace("pathname://",""),N=void 0!==T?(C=T,d&&(e=>e.startsWith("/"))(C)?g(C):C):void 0;var C;const I=Object(r.useRef)(!1),w=a?i.e:i.c,P=l.a.canUseIntersectionObserver;let M;Object(r.useEffect)((()=>(!P&&y&&window.docusaurus.prefetch(N),()=>{P&&M&&M.disconnect()})),[N,P,y]);const E=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,k=!N||!y||E;return N&&y&&!E&&!u&&v.collectLink(N),k?n.a.createElement("a",Object.assign({href:N},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):n.a.createElement(w,Object.assign({},j,{onMouseEnter:()=>{I.current||(window.docusaurus.preload(N),I.current=!0)},innerRef:e=>{var t,a;P&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(N)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),a())}))})),M.observe(t))},to:N||""},a&&{isActive:O,activeClassName:p}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(23),n=a(2207);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}}}]);