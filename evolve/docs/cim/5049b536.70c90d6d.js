(window.webpackJsonp=window.webpackJsonp||[]).push([[678],{2207:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},2208:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,O=b["".concat(c,".").concat(f)]||b[f]||p[f]||o;return n?a.a.createElement(O,i({ref:t},l,{components:n})):a.a.createElement(O,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2209:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),c=n(2207),i=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var l=n(2210),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:b,activeClassName:f,isActive:O,"data-noBrokenLinkCheck":d,autoAddBaseUrl:m=!0}=e,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(l.b)(),h=Object(r.useContext)(s),v=p||b,y=Object(c.a)(v),C=null==v?void 0:v.replace("pathname://",""),I=void 0!==C?(w=C,m&&(e=>e.startsWith("/"))(w)?g(w):w):void 0;var w;const N=Object(r.useRef)(!1),E=n?o.e:o.c,P=i.a.canUseIntersectionObserver;let R;Object(r.useEffect)((()=>(!P&&y&&window.docusaurus.prefetch(I),()=>{P&&R&&R.disconnect()})),[I,P,y]);const T=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,k=!I||!y||T;return I&&y&&!T&&!d&&h.collectLink(I),k?a.a.createElement("a",Object.assign({href:I},v&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(E,Object.assign({},j,{onMouseEnter:()=>{N.current||(window.docusaurus.preload(I),N.current=!0)},innerRef:e=>{var t,n;P&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(I)},R=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(R.unobserve(t),R.disconnect(),n())}))})),R.observe(t))},to:I||""},n&&{isActive:O,activeClassName:f}))}},2210:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(23),a=n(2207);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},749:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(2208)),c=n(2209),i={title:"OrgOrgRole",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OrgOrgRole",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OrgOrgRole",isDocsHomePage:!1,title:"OrgOrgRole",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfCommon\\OrgOrgRole.mdx",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OrgOrgRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OrgOrgRole",version:"current",sidebar:"docs",previous:{title:"OldPerson",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/OldPerson"},next:{title:"PersonOrganisationRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfCommon/PersonOrganisationRole"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Roles played between Organisations and other Organisations. This includes role ups for ogranisations, cost centers, profit centers, regulatory reporting, etc."),Object(o.a)("p",null,"Note that the parent and child relationship is indicated by the name on each end of the association.  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"clientID"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Identifiers of the organisation held by another organisation, such as a government agency (federal, state, province, city, county), financial institution (Dun and Bradstreet), etc.")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/OrganisationRole",mdxType:"Link"},"OrganisationRole"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}p.isMDXComponent=!0}}]);