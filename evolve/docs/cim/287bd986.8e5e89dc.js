(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{2174:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2175:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),f=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=f(a),m=n,O=p["".concat(i,".").concat(m)]||p[m]||b[m]||c;return a?r.a.createElement(O,o({ref:t},l,{components:a})):r.a.createElement(O,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2174),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2177),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,b,p=e.isNavLink,m=e.to,O=e.href,u=e.activeClassName,j=e.isActive,d=e["data-noBrokenLinkCheck"],I=e.autoAddBaseUrl,C=void 0===I||I,y=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(l.b)().withBaseUrl,T=Object(n.useContext)(s),N=m||O,h=Object(i.a)(N),A=null==N?void 0:N.replace("pathname://",""),v=void 0!==A?(a=A,C&&function(e){return e.startsWith("/")}(a)?g(a):a):void 0,E=Object(n.useRef)(!1),k=p?c.e:c.c,w=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!w&&h&&window.docusaurus.prefetch(v),function(){w&&b&&b.disconnect()}}),[v,w,h]);var M=null!==(t=null==v?void 0:v.startsWith("#"))&&void 0!==t&&t,x=!v||!h||M;return v&&h&&!M&&!d&&T.collectLink(v),x?r.a.createElement("a",Object.assign({href:v},N&&!h&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(k,Object.assign({},y,{onMouseEnter:function(){E.current||(window.docusaurus.preload(v),E.current=!0)},innerRef:function(e){var t,a;w&&e&&h&&(t=e,a=function(){window.docusaurus.prefetch(v)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:v||""},p&&{isActive:j,activeClassName:u}))}},2177:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2174);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,s=c.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var f=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+f:f}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},371:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(2175)),i=a(2176),o={title:"AssetInfo"},s={unversionedId:"cim100/TC57CIM/IEC61968/Assets/AssetInfo",id:"cim100/TC57CIM/IEC61968/Assets/AssetInfo",isDocsHomePage:!1,title:"AssetInfo",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\AssetInfo.md",slug:"/cim100/TC57CIM/IEC61968/Assets/AssetInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/AssetInfo",version:"current",sidebar:"docs",previous:{title:"AssetDeployment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/AssetDeployment"},next:{title:"TestDataSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/TestDataSet"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],f={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Set of attributes of an asset, representing typical datasheet information of a physical device that can be instantiated and shared in different data exchange contexts:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("p",{parentName:"li"},"as attributes of an asset instance (installed or in stock)")),Object(c.a)("li",{parentName:"ul"},Object(c.a)("p",{parentName:"li"},"as attributes of an asset model (product by a manufacturer)")),Object(c.a)("li",{parentName:"ul"},Object(c.a)("p",{parentName:"li"},"as attributes of a type asset (generic type of an asset as used in designs/extension planning).  "))),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("p",null,"None  "),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/BusbarSectionInfo",mdxType:"Link"},"BusbarSectionInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/BushingInfo",mdxType:"Link"},"BushingInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/CompositeSwitchInfo",mdxType:"Link"},"CompositeSwitchInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/CurrentTransformerInfo",mdxType:"Link"},"CurrentTransformerInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceInfo",mdxType:"Link"},"EndDeviceInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/FaultIndicatorInfo",mdxType:"Link"},"FaultIndicatorInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/InterrupterUnitInfo",mdxType:"Link"},"InterrupterUnitInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/OperatingMechanismInfo",mdxType:"Link"},"OperatingMechanismInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/PotentialTransformerInfo",mdxType:"Link"},"PotentialTransformerInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/PowerTransformerInfo",mdxType:"Link"},"PowerTransformerInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/ProtectionEquipmentInfo",mdxType:"Link"},"ProtectionEquipmentInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/ShuntCompensatorInfo",mdxType:"Link"},"ShuntCompensatorInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/SurgeArresterInfo",mdxType:"Link"},"SurgeArresterInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/SwitchInfo",mdxType:"Link"},"SwitchInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TapChangerInfo",mdxType:"Link"},"TapChangerInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerEndInfo",mdxType:"Link"},"TransformerEndInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/TransformerTankInfo",mdxType:"Link"},"TransformerTankInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WireAssemblyInfo",mdxType:"Link"},"WireAssemblyInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WireInfo",mdxType:"Link"},"WireInfo")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/WireSpacingInfo",mdxType:"Link"},"WireSpacingInfo"))),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/Asset",mdxType:"Link"},"Asset")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Assets"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All assets described by this data."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AssetInfo"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Data applicable to this asset.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AssetDatasheet"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Datasheet information for this power system resource."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PowerSystemResources"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All power system resources with this datasheet information.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/CatalogAssetType",mdxType:"Link"},"CatalogAssetType")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AssetInfo"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Generic nameplate information associated with this catalog asset type."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CatalogAssetType"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asset information (nameplate) for this catalog asset type.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/ProductAssetModel",mdxType:"Link"},"ProductAssetModel")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ProductAssetModel"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Product asset model which conforms to this catalog asset type."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AssetInfo"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Asset information (nameplate) for this product asset model.")))))}b.isMDXComponent=!0}}]);