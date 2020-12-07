(window.webpackJsonp=window.webpackJsonp||[]).push([[1615],{1673:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),c=n(6),r=(n(0),n(2147)),o={title:"ConnectDisconnectFunction"},i={unversionedId:"cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",id:"cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",isDocsHomePage:!1,title:"ConnectDisconnectFunction",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\LoadControl\\ConnectDisconnectFunction.md",slug:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",version:"current",sidebar:"docs",previous:{title:"UsagePointLocation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/UsagePointLocation"},next:{title:"RemoteConnectDisconnectInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],l={rightToc:b};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"A function that will disconnect and reconnect the customer's load under defined conditions."),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"eventCount"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Running cumulative count of connect or disconnect events, for the lifetime of this function or until the value is cleared.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isConnected"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"True if this function is in the connected state.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isDelayedDiscon"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If set true, the switch may disconnect the service at the end of a specified time delay after the disconnect signal has been given. If set false, the switch may disconnect the service immediately after the disconnect signal has been given. This is typically the case for over current circuit-breakers which are classified as either instantaneous or slow acting.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isLocalAutoDisconOp"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If set true and if disconnection can be operated locally, the operation happens automatically. Otherwise it happens manually.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isLocalAutoReconOp"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If set true and if reconnection can be operated locally, then the operation happens automatically. Otherwise, it happens manually.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isRemoteAutoDisconOp"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If set true and if disconnection can be operated remotely, then the operation happens automatically. If set false and if disconnection can be operated remotely, then the operation happens manually.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isRemoteAutoReconOp"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If set true and if reconnection can be operated remotely, then the operation happens automatically. If set false and if reconnection can be operated remotely, then the operation happens manually.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"rcdInfo"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo"}),"RemoteConnectDisconnectInfo")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Information on remote connect disconnect switch.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceFunction"}),"EndDeviceFunction"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction"}),"ConnectDisconnectFunction")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch"}),"Switch")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ConnectDisconnectFunctions"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Switches"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))))}s.isMDXComponent=!0},2147:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,j=p["".concat(o,".").concat(m)]||p[m]||O[m]||r;return n?c.a.createElement(j,i({ref:t},l,{components:n})):c.a.createElement(j,i({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);