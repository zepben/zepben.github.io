(window.webpackJsonp=window.webpackJsonp||[]).push([[505],{2207:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2208:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,p=u["".concat(o,".").concat(d)]||u[d]||f[d]||i;return n?r.a.createElement(p,c({ref:t},l,{components:n})):r.a.createElement(p,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),o=n(2207),c=n(8);const s=Object(a.createContext)({collectLink:()=>{}});var l=n(2210),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:f,href:u,activeClassName:d,isActive:p,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,j=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(l.b)(),g=Object(a.useContext)(s),h=f||u,C=Object(o.a)(h),y=null==h?void 0:h.replace("pathname://",""),I=void 0!==y?(T=y,O&&(e=>e.startsWith("/"))(T)?v(T):T):void 0;var T;const N=Object(a.useRef)(!1),P=n?i.e:i.c,E=c.a.canUseIntersectionObserver;let w;Object(a.useEffect)((()=>(!E&&C&&window.docusaurus.prefetch(I),()=>{E&&w&&w.disconnect()})),[I,E,C]);const k=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,x=!I||!C||k;return I&&C&&!k&&!m&&g.collectLink(I),x?r.a.createElement("a",Object.assign({href:I},h&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(P,Object.assign({},j,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(I),N.current=!0)},innerRef:e=>{var t,n;E&&e&&C&&(t=e,n=()=>{window.docusaurus.prefetch(I)},w=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(w.unobserve(t),w.disconnect(),n())}))})),w.observe(t))},to:I||""},n&&{isActive:p,activeClassName:d}))}},2210:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(23),r=n(2207);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},576:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return f}));var a=n(3),r=n(7),i=(n(0),n(2208)),o=n(2209),c={title:"TransmissionProvider",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProvider",id:"cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProvider",isDocsHomePage:!1,title:"TransmissionProvider",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\InfIEC62325\\InfFinancial\\TransmissionProvider.mdx",slug:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProvider",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProvider",version:"current",sidebar:"docs",previous:{title:"TransmissionProduct",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProduct"},next:{title:"TiePoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfReservation/TiePoint"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Provider of  the transmission capacity (interconnecting wires between Generation and Consumption) required  to fulfill and Energy Transaction's energy exchange. Posts information for transmission paths and AvailableTransmissionCapacities  on a reservation node.  Buys and sells its products and services on the same reservation node."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC61968/Common/Organisation",mdxType:"Link"},"Organisation"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/LossProfile",mdxType:"Link"},"LossProfile")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProvider",mdxType:"Link"},"TransmissionProvider")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"For"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Part of the LossProfile for an EnergyTransaction may be a loss for a TransmissionProvider. If so, the TransmissionProvider must be one of the participating entities in the EnergyTransaction."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"HasLoss_"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Part of the LossProfile for an EnergyTransaction may be a loss for a TransmissionProvider. If so, the TransmissionProvider must be one of the participating entities in the EnergyTransaction.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProduct",mdxType:"Link"},"TransmissionProduct")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/TransmissionProvider",mdxType:"Link"},"TransmissionProvider")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"TransmissionProducts"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A TransmissionProvider offers a TransmissionProduct."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"TransmissionProvider"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A TransmissionProvider offers a TransmissionProduct.")))))}f.isMDXComponent=!0}}]);