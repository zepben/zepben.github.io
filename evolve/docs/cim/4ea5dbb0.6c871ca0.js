(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{2194:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2195:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),f=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=f(a),p=n,d=b["".concat(c,".").concat(p)]||b[p]||u[p]||i;return a?r.a.createElement(d,o({ref:t},l,{components:a})):r.a.createElement(d,o({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2194),o=a(8),s=Object(n.createContext)({collectLink:function(){}}),l=a(2197),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,b=e.isNavLink,p=e.to,d=e.href,O=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,I=void 0===h||h,g=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(l.b)().withBaseUrl,v=Object(n.useContext)(s),y=p||d,w=Object(c.a)(y),N=null==y?void 0:y.replace("pathname://",""),T=void 0!==N?(a=N,I&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,E=Object(n.useRef)(!1),k=b?i.e:i.c,x=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&w&&window.docusaurus.prefetch(T),function(){x&&u&&u.disconnect()}}),[T,x,w]);var A=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,B=!T||!w||A;return T&&w&&!A&&!j&&v.collectLink(T),B?r.a.createElement("a",Object.assign({href:T},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(k,Object.assign({},g,{onMouseEnter:function(){E.current||(window.docusaurus.preload(T),E.current=!0)},innerRef:function(e){var t,a;x&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(T)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:T||""},b&&{isActive:m,activeClassName:O}))}},2197:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2194);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var f=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+f:f}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},728:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(2195)),c=a(2196),o={title:"OldSwitchInfo",hide_table_of_contents:!0},s={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/OldSwitchInfo",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/OldSwitchInfo",isDocsHomePage:!1,title:"OldSwitchInfo",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\InfIEC61968\\InfAssetInfo\\OldSwitchInfo.mdx",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/OldSwitchInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/OldSwitchInfo",version:"current",sidebar:"docs",previous:{title:"SurgeArresterInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/SurgeArresterInfo"},next:{title:"GeneratorTypeAsset",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfTypeAsset/GeneratorTypeAsset"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],f={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Properties of switch assets."),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dielectricStrength"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum rms voltage that may be applied across an open contact without breaking down the dielectric properties of the switch in the open position.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"loadBreak"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if switch has load breaking capabiity. Unless specified false, this is always assumed to be true for breakers and reclosers.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"makingCapacity"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The highest value of current the switch can make at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"minimumCurrent"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The lowest value of current that the switch can make, carry and break in uninterrupted duty at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"poleCount"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Number of poles (i.e. of current carrying conductors that are switched).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"remote"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if device is capable of being operated by remote control.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"withstandCurrent"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The highest value of current the switch can carry in the closed position at the rated voltage under specified operating conditions without suffering significant deterioration of its performance.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/AssetInfo/SwitchInfo",mdxType:"Link"},"SwitchInfo"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/BreakerInfo",mdxType:"Link"},"BreakerInfo")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/RecloserInfo",mdxType:"Link"},"RecloserInfo"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}u.isMDXComponent=!0}}]);