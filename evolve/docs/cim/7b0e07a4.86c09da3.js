(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{1093:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(2180)),i=a(2181),l={title:"WindPlantFreqPcontrolIEC"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantFreqPcontrolIEC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantFreqPcontrolIEC",isDocsHomePage:!1,title:"WindPlantFreqPcontrolIEC",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\WindDynamics\\WindPlantFreqPcontrolIEC.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantFreqPcontrolIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantFreqPcontrolIEC",version:"current",sidebar:"docs",previous:{title:"WindPlantReactiveControlIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantReactiveControlIEC"},next:{title:"WindDynamicsLookupTable",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindDynamicsLookupTable"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Frequency and active power controller model."),Object(c.a)("p",null,"Reference: IEC 61400-27-1:2015, Annex D.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dprefmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum ramp rate of ",Object(c.a)("i",null,"p"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref"))," request from the plant controller to the wind turbines (",Object(c.a)("i",null,"dp"),Object(c.a)("i",null,Object(c.a)("sub",null,"refmax")),") (",">"," WindPlantFreqPcontrolIEC.dprefmin). It is a case-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dprefmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum (negative) ramp rate of ",Object(c.a)("i",null,"p"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref"))," request from the plant controller to the wind turbines (",Object(c.a)("i",null,"dp"),Object(c.a)("i",null,Object(c.a)("sub",null,"refmin")),") (","<"," WindPlantFreqPcontrolIEC.dprefmax). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dpwprefmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum positive ramp rate for wind plant power reference (",Object(c.a)("i",null,"dp"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPrefmax")),") (",">"," WindPlantFreqPcontrolIEC.dpwprefmin). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dpwprefmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum negative ramp rate for wind plant power reference (",Object(c.a)("i",null,"dp"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPrefmin")),") (","<"," WindPlantFreqPcontrolIEC.dpwprefmax). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kiwpp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Plant P controller integral gain (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"IWPp")),"). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kiwppmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum PI integrator term (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"IWPpmax")),") (",">"," WindPlantFreqPcontrolIEC.kiwppmin). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kiwppmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum PI integrator term (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"IWPpmin")),") (","<"," WindPlantFreqPcontrolIEC.kiwppmax). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kpwpp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Plant P controller proportional gain (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"PWPp")),"). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kwppref"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Power reference gain (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPpref")),"). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"prefmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum ",Object(c.a)("i",null,"p"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref"))," request from the plant controller to the wind turbines (",Object(c.a)("i",null,"p"),Object(c.a)("i",null,Object(c.a)("sub",null,"refmax")),") (",">"," WindPlantFreqPcontrolIEC.prefmin). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"prefmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum ",Object(c.a)("i",null,"p"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref"))," request from the plant controller to the wind turbines (",Object(c.a)("i",null,"p"),Object(c.a)("i",null,Object(c.a)("sub",null,"refmin")),") (","<"," WindPlantFreqPcontrolIEC.prefmax). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpft"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead time constant in reference value transfer function (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"pft")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpfv"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant in reference value transfer function (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"pfv")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"twpffiltp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Filter time constant for frequency measurement (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPffiltp")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"twppfiltp"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Filter time constant for active power measurement (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPpfiltp")),") (",">","= 0). It is a project-dependent parameter.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantFreqPcontrolIEC",mdxType:"Link"},"WindPlantFreqPcontrolIEC")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantIEC",mdxType:"Link"},"WindPlantIEC")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPlantFreqPcontrolIEC"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind plant frequency and active power control model associated with this wind plant."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPlantIEC"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind plant model with which this wind plant frequency and active power control is associated.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindDynamicsLookupTable",mdxType:"Link"},"WindDynamicsLookupTable")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantFreqPcontrolIEC",mdxType:"Link"},"WindPlantFreqPcontrolIEC")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindDynamicsLookupTable"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The wind dynamics lookup table associated with this frequency and active power wind plant model."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPlantFreqPcontrolIEC"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The frequency and active power wind plant control model with which this wind dynamics lookup table is associated.")))))}p.isMDXComponent=!0},2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),O=d(a),m=n,j=O["".concat(i,".").concat(m)]||O[m]||p[m]||c;return a?r.a.createElement(j,l({ref:t},b,{components:a})):r.a.createElement(j,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2179),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2182),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,p,O=e.isNavLink,m=e.to,j=e.href,s=e.activeClassName,u=e.isActive,f=e["data-noBrokenLinkCheck"],C=e.autoAddBaseUrl,y=void 0===C||C,g=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(b.b)().withBaseUrl,I=Object(n.useContext)(o),P=m||j,v=Object(i.a)(P),h=null==P?void 0:P.replace("pathname://",""),w=void 0!==h?(a=h,y&&function(e){return e.startsWith("/")}(a)?N(a):a):void 0,T=Object(n.useRef)(!1),E=O?c.e:c.c,W=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!W&&v&&window.docusaurus.prefetch(w),function(){W&&p&&p.disconnect()}}),[w,W,v]);var D=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,k=!w||!v||D;return w&&v&&!D&&!f&&I.collectLink(w),k?r.a.createElement("a",Object.assign({href:w},P&&!v&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(E,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(w),T.current=!0)},innerRef:function(e){var t,a;W&&e&&v&&(t=e,a=function(){window.docusaurus.prefetch(w)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:w||""},O&&{isActive:u,activeClassName:s}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2179);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,l=void 0!==i&&i,o=c.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+d:d}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);