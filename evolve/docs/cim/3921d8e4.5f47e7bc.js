(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{2198:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2199:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,O=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?r.a.createElement(O,o({ref:t},s,{components:a})):r.a.createElement(O,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2198),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),s=a(2201),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,d,p=e.isNavLink,m=e.to,O=e.href,u=e.activeClassName,j=e.isActive,f=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,C=void 0===g||g,y=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(s.b)().withBaseUrl,v=Object(n.useContext)(l),h=m||O,I=Object(c.a)(h),T=null==h?void 0:h.replace("pathname://",""),D=void 0!==T?(a=T,C&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,k=Object(n.useRef)(!1),E=p?i.e:i.c,S=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!S&&I&&window.docusaurus.prefetch(D),function(){S&&d&&d.disconnect()}}),[D,S,I]);var w=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,x=!D||!I||w;return D&&I&&!w&&!f&&v.collectLink(D),x?r.a.createElement("a",Object.assign({href:D},h&&!I&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(E,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(D),k.current=!0)},innerRef:function(e){var t,a;S&&e&&I&&(t=e,a=function(){window.docusaurus.prefetch(D)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:D||""},p&&{isActive:j,activeClassName:u}))}},2201:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2198);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+b:b}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},551:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(2199)),c=a(2200),o={title:"DiagnosisDataSet",hide_table_of_contents:!0},l={unversionedId:"cim100/TC57CIM/IEC61968/Assets/DiagnosisDataSet",id:"cim100/TC57CIM/IEC61968/Assets/DiagnosisDataSet",isDocsHomePage:!1,title:"DiagnosisDataSet",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\DiagnosisDataSet.mdx",slug:"/cim100/TC57CIM/IEC61968/Assets/DiagnosisDataSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/DiagnosisDataSet",version:"current",sidebar:"docs",previous:{title:"CorporateStandardKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/CorporateStandardKind"},next:{title:"FailureEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/FailureEvent"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The result of a problem (typically an asset failure) diagnosis. Contains complete information like what might be received from a lab doing forensic analysis of a failed asset.   "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"effect"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Effect of problem.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"failureMode"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Failuer mode, for example: Failure to Insulate; Failure to conduct; Failure to contain oil; Failure to provide ground plane; Other.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"finalCause"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Cause of problem determined during diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"finalCode"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Code for diagnosed probem type.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"finalOrigin"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Origin of problem determined during diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"finalRemark"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Remarks pertaining to findings during problem diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phaseCode"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode",mdxType:"Link"},"PhaseCode")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Phase(s) diagnosed.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"preliminaryCode"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Code for problem type determined during preliminary assessment.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"preliminaryDateTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date and time preliminary assessment of problem was performed.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"preliminaryRemark"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Remarks pertaining to preliminary assessment of problem.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rootCause"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Root cause of problem determined during diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rootOrigin"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Root origin of problem determined during diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rootRemark"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Remarks pertaining to root cause findings during problem diagnosis.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Assets/ProcedureDataSet",mdxType:"Link"},"ProcedureDataSet"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}d.isMDXComponent=!0}}]);