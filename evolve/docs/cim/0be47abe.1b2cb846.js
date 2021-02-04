(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),c=(a(0),a(2172)),i=a(2173),l={title:"WindPlantReactiveControlIEC"},o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantReactiveControlIEC",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantReactiveControlIEC",isDocsHomePage:!1,title:"WindPlantReactiveControlIEC",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\WindDynamics\\WindPlantReactiveControlIEC.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantReactiveControlIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantReactiveControlIEC",version:"current",sidebar:"docs",previous:{title:"WindProtectionIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindProtectionIEC"},next:{title:"WindPlantFreqPcontrolIEC",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantFreqPcontrolIEC"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],d={toc:b};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Simplified plant voltage and reactive power control model for use with type 3 and type 4 wind turbine models."),Object(c.a)("p",null,"Reference: IEC 61400-27-1:2015, Annex D.  "),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dxrefmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum positive ramp rate for wind turbine reactive power/voltage reference (",Object(c.a)("i",null,"dx"),Object(c.a)("i",null,Object(c.a)("sub",null,"refmax")),") (",">"," WindPlantReactiveControlIEC.dxrefmin). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dxrefmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum negative ramp rate for wind turbine reactive power/voltage reference (",Object(c.a)("i",null,"dx"),Object(c.a)("i",null,Object(c.a)("sub",null,"refmin")),") (","<"," WindPlantReactiveControlIEC.dxrefmax). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kiwpx"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Plant Q controller integral gain (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"IWPx")),"). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kiwpxmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum reactive power/voltage reference from integration (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"IWPxmax")),") (",">"," WindPlantReactiveControlIEC.kiwpxmin). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kiwpxmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum reactive power/voltage reference from integration (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"IWPxmin")),") (","<"," WindPlantReactiveControlIEC.kiwpxmax). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kpwpx"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Plant Q controller proportional gain (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"PWPx")),"). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kwpqref"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power reference gain (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPqref")),"). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kwpqu"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Plant voltage control droop (",Object(c.a)("i",null,"K"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPqu")),"). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tuqfilt"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Filter time constant for voltage-dependent reactive power (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"uqfilt")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"twppfiltq"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Filter time constant for active power measurement (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPpfiltq")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"twpqfiltq"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Filter time constant for reactive power measurement (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPqfiltq")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"twpufiltq"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Filter time constant for voltage measurement (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPufiltq")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"txft"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead time constant in reference value transfer function (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"xft")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"txfv"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant in reference value transfer function (",Object(c.a)("i",null,"T"),Object(c.a)("i",null,Object(c.a)("sub",null,"xfv")),") (",">","= 0). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uwpqdip"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage threshold for UVRT detection in Q control (",Object(c.a)("i",null,"u"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPqdip")),"). It is a project-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"windPlantQcontrolModesType"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantQcontrolModeKind",mdxType:"Link"},"WindPlantQcontrolModeKind")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power/voltage controller mode (",Object(c.a)("i",null,"M"),Object(c.a)("i",null,Object(c.a)("sub",null,"WPqmode")),"). It is a case-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xrefmax"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum ",Object(c.a)("i",null,"x"),Object(c.a)("sub",null,"WTref")," (",Object(c.a)("i",null,"q"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref"))," or delta",Object(c.a)("i",null," u"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref")),") request from the plant controller (",Object(c.a)("i",null,"x"),Object(c.a)("i",null,Object(c.a)("sub",null,"refmax")),") (",">"," WindPlantReactiveControlIEC.xrefmin). It is a case-dependent parameter.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"xrefmin"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum ",Object(c.a)("i",null,"x"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref"))," (",Object(c.a)("i",null,"q"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref"))," or delta ",Object(c.a)("i",null,"u"),Object(c.a)("i",null,Object(c.a)("sub",null,"WTref")),") request from the plant controller (",Object(c.a)("i",null,"x"),Object(c.a)("i",null,Object(c.a)("sub",null,"refmin")),") (","<"," WindPlantReactiveControlIEC.xrefmax). It is a project-dependent parameter.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantIEC",mdxType:"Link"},"WindPlantIEC")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantReactiveControlIEC",mdxType:"Link"},"WindPlantReactiveControlIEC")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPlantIEC"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind plant reactive control model associated with this wind plant."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPlantReactiveControlIEC"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Wind plant model with which this wind reactive control is associated.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindDynamicsLookupTable",mdxType:"Link"},"WindDynamicsLookupTable")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/WindDynamics/WindPlantReactiveControlIEC",mdxType:"Link"},"WindPlantReactiveControlIEC")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindDynamicsLookupTable"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The wind dynamics lookup table associated with this voltage and reactive power wind plant model."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"WindPlantReactiveControlIEC"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The voltage and reactive power wind plant control model with which this wind dynamics lookup table is associated.")))))}O.isMDXComponent=!0},2171:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2172:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),j=d(a),p=n,m=j["".concat(i,".").concat(p)]||j[p]||O[p]||c;return a?r.a.createElement(m,l({ref:t},b,{components:a})):r.a.createElement(m,l({ref:t},b))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},2173:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a(2171),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2174),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,O,j=e.isNavLink,p=e.to,m=e.href,s=e.activeClassName,u=e.isActive,f=e["data-noBrokenLinkCheck"],C=e.autoAddBaseUrl,g=void 0===C||C,N=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(b.b)().withBaseUrl,v=Object(n.useContext)(o),I=p||m,T=Object(i.a)(I),h=null==I?void 0:I.replace("pathname://",""),P=void 0!==h?(a=h,g&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,x=Object(n.useRef)(!1),w=j?c.e:c.c,E=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!E&&T&&window.docusaurus.prefetch(P),function(){E&&O&&O.disconnect()}}),[P,E,T]);var W=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,D=!P||!T||W;return P&&T&&!W&&!f&&v.collectLink(P),D?r.a.createElement("a",Object.assign({href:P},I&&!T&&{target:"_blank",rel:"noopener noreferrer"},N)):r.a.createElement(w,Object.assign({},N,{onMouseEnter:function(){x.current||(window.docusaurus.preload(P),x.current=!0)},innerRef:function(e){var t,a;E&&e&&T&&(t=e,a=function(){window.docusaurus.prefetch(P)},(O=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),a())}))}))).observe(t))},to:P||""},j&&{isActive:u,activeClassName:s}))}},2174:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(23),r=a(2171);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,l=void 0!==i&&i,o=c.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+d:d}(c,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);