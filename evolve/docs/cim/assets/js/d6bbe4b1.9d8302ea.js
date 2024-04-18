"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[56173],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(58168),o=(n(96540),n(15680)),r=n(75489);const i={title:"ConnectDisconnectFunction",hide_table_of_contents:!0,slug:"ConnectDisconnectFunction",sidebar_position:0},l=void 0,c={unversionedId:"cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",id:"cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",title:"ConnectDisconnectFunction",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/LoadControl",slug:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ConnectDisconnectFunction",hide_table_of_contents:!0,slug:"ConnectDisconnectFunction",sidebar_position:0},sidebar:"docs",previous:{title:"WorkIdentifiedObject",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfWork/WorkIdentifiedObject"},next:{title:"RemoteConnectDisconnectInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo"}},s={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"class-description"},"Class Description"),(0,o.yg)("p",null,"A function that will disconnect and reconnect the customer's load under defined conditions."),(0,o.yg)("h2",{id:"attributes"},"Attributes"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"eventCount"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,o.yg)("td",{parentName:"tr",align:null},"Running cumulative count of connect or disconnect events, for the lifetime of this function or until the value is cleared.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"isConnected"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,o.yg)("td",{parentName:"tr",align:null},"True if this function is in the connected state.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"isDelayedDiscon"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,o.yg)("td",{parentName:"tr",align:null},"If set true, the switch may disconnect the service at the end of a specified time delay after the disconnect signal has been given. If set false, the switch may disconnect the service immediately after the disconnect signal has been given. This is typically the case for over current circuit-breakers which are classified as either instantaneous or slow acting.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"isLocalAutoDisconOp"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,o.yg)("td",{parentName:"tr",align:null},"If set true and if disconnection can be operated locally, the operation happens automatically. Otherwise it happens manually.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"isLocalAutoReconOp"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,o.yg)("td",{parentName:"tr",align:null},"If set true and if reconnection can be operated locally, then the operation happens automatically. Otherwise, it happens manually.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"isRemoteAutoDisconOp"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,o.yg)("td",{parentName:"tr",align:null},"If set true and if disconnection can be operated remotely, then the operation happens automatically. If set false and if disconnection can be operated remotely, then the operation happens manually.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"isRemoteAutoReconOp"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,o.yg)("td",{parentName:"tr",align:null},"If set true and if reconnection can be operated remotely, then the operation happens automatically. If set false and if reconnection can be operated remotely, then the operation happens manually.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"rcdInfo"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/LoadControl/RemoteConnectDisconnectInfo",mdxType:"Link"},"RemoteConnectDisconnectInfo")),(0,o.yg)("td",{parentName:"tr",align:null},"Information on remote connect disconnect switch.")))),(0,o.yg)("h2",{id:"relationships"},"Relationships"),(0,o.yg)("h3",{id:"ancestors"},"Ancestors"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceFunction",mdxType:"Link"},"EndDeviceFunction"))),(0,o.yg)("h3",{id:"descendents"},"Descendents"),(0,o.yg)("p",null,"No descendent classes"),(0,o.yg)("h2",{id:"associations"},"Associations"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,o.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,o.yg)("th",{parentName:"tr",align:null},"Target"),(0,o.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,o.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,o.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61968/LoadControl/ConnectDisconnectFunction",mdxType:"Link"},"ConnectDisconnectFunction")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/Switch",mdxType:"Link"},"Switch")),(0,o.yg)("td",{parentName:"tr",align:null},"0..*"),(0,o.yg)("td",{parentName:"tr",align:null},"ConnectDisconnectFunctions"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Switches"),(0,o.yg)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);