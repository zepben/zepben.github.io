(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{2199:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2200:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=b(a),O=n,f=p["".concat(c,".").concat(O)]||p[O]||u[O]||s;return a?r.a.createElement(f,i({ref:t},l,{components:a})):r.a.createElement(f,i({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<s;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(10),c=a(2199),i=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var l=a(2202),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:u,href:p,activeClassName:O,isActive:f,"data-noBrokenLinkCheck":m,autoAddBaseUrl:d=!0}=e,j=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(l.b)(),C=Object(n.useContext)(o),h=u||p,v=Object(c.a)(h),y=null==h?void 0:h.replace("pathname://",""),A=void 0!==y?(N=y,d&&(e=>e.startsWith("/"))(N)?g(N):N):void 0;var N;const w=Object(n.useRef)(!1),T=a?s.e:s.c,I=i.a.canUseIntersectionObserver;let E;Object(n.useEffect)((()=>(!I&&v&&window.docusaurus.prefetch(A),()=>{I&&E&&E.disconnect()})),[A,I,v]);const k=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,x=!A||!v||k;return A&&v&&!k&&!m&&C.collectLink(A),x?r.a.createElement("a",Object.assign({href:A},h&&!v&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(T,Object.assign({},j,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(A),w.current=!0)},innerRef:e=>{var t,a;I&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(A)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),a())}))})),E.observe(t))},to:A||""},a&&{isActive:f,activeClassName:O}))}},2202:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2199);function s(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:s=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=s();return a(e,t)}},701:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),s=(a(0),a(2200)),c=a(2201),i={title:"AssetOrganisationRole",hide_table_of_contents:!0},o={unversionedId:"cim100/TC57CIM/IEC61968/Assets/AssetOrganisationRole",id:"cim100/TC57CIM/IEC61968/Assets/AssetOrganisationRole",isDocsHomePage:!1,title:"AssetOrganisationRole",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\AssetOrganisationRole.mdx",slug:"/cim100/TC57CIM/IEC61968/Assets/AssetOrganisationRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/AssetOrganisationRole",version:"current",sidebar:"docs",previous:{title:"HealthScore",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/HealthScore"},next:{title:"AssetOwner",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/AssetOwner"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.a)("h3",{id:"class-description"},"Class Description"),Object(s.a)("p",null,"Role an organisation plays with respect to asset.  "),Object(s.a)("h3",{id:"attributes"},"Attributes"),Object(s.a)("p",null,"None  "),Object(s.a)("h3",{id:"relationships"},"Relationships"),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/OrganisationRole",mdxType:"Link"},"OrganisationRole"))),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetOwner",mdxType:"Link"},"AssetOwner")),Object(s.a)("li",{parentName:"ul"},Object(s.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetTestLab",mdxType:"Link"},"AssetTestLab")),Object(s.a)("li",{parentName:"ul"},Object(s.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetTestSampleTaker",mdxType:"Link"},"AssetTestSampleTaker")),Object(s.a)("li",{parentName:"ul"},Object(s.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetUser",mdxType:"Link"},"AssetUser")),Object(s.a)("li",{parentName:"ul"},Object(s.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Maintainer",mdxType:"Link"},"Maintainer"))),Object(s.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(s.a)("table",null,Object(s.a)("thead",{parentName:"table"},Object(s.a)("tr",{parentName:"thead"},Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(s.a)("tbody",{parentName:"table"},Object(s.a)("tr",{parentName:"tbody"},Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(s.a)("h3",{id:"associations"},"Associations"),Object(s.a)("table",null,Object(s.a)("thead",{parentName:"table"},Object(s.a)("tr",{parentName:"thead"},Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(s.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(s.a)("tbody",{parentName:"table"},Object(s.a)("tr",{parentName:"tbody"},Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(s.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Asset",mdxType:"Link"},"Asset")),Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(s.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetOrganisationRole",mdxType:"Link"},"AssetOrganisationRole")),Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Assets"),Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All assets for this organisation role."),Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OrganisationRoles"),Object(s.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All roles an organisation plays for this asset.")))))}u.isMDXComponent=!0}}]);