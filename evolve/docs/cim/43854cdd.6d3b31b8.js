(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),O=m(a),d=n,j=O["".concat(o,".").concat(d)]||O[d]||s[d]||c;return a?r.a.createElement(j,i({ref:t},b,{components:a})):r.a.createElement(j,i({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},635:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=(a(0),a(2160)),o={title:"RemoteConnectDisconnectInfo"},i={unversionedId:"cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo",id:"cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo",isDocsHomePage:!1,title:"RemoteConnectDisconnectInfo",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\LoadControl\\RemoteConnectDisconnectInfo.md",slug:"/cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo",version:"current",sidebar:"docs",previous:{title:"ConnectDisconnectFunction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction"},next:{title:"AccountMovement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/PaymentMetering/AccountMovement"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Details of remote connect and disconnect function."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"armedTimeout"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Setting of the timeout elapsed time.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"customerVoltageLimit"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Voltage"}),"Voltage")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage limit on customer side of RCD switch above which the connect should not be made.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"energyLimit"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/RealEnergy"}),"RealEnergy")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Limit of energy before disconnect.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"energyUsageStartDateTime"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Start date and time to accumulate energy for energy usage limiting.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"energyUsageWarning"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/RealEnergy"}),"RealEnergy")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Warning energy limit, used to trigger event code that energy usage is nearing limit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isArmConnect"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if the RCD switch has to be armed before a connect action can be initiated.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isArmDisconnect"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if the RCD switch has to be armed before a disconnect action can be initiated.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isEnergyLimiting"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if the energy usage is limited and the customer will be disconnected if they go over the limit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"needsPowerLimitCheck"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if load limit has to be checked to issue an immediate disconnect (after a connect) if load is over the limit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"needsVoltageLimitCheck"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if voltage limit has to be checked to prevent connect if voltage is over the limit.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"powerLimit"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Load limit above which the connect should either not take place or should cause an immediate disconnect.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"usePushbutton"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"True if pushbutton has to be used for connect.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"None")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}m.isMDXComponent=!0}}]);