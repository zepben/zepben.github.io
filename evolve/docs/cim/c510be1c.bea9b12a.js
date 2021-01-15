(window.webpackJsonp=window.webpackJsonp||[]).push([[1625],{1696:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(2160)),i={title:"PanDemandResponse"},o={unversionedId:"cim100/TC57CIM/IEC61968/Metering/PanDemandResponse",id:"cim100/TC57CIM/IEC61968/Metering/PanDemandResponse",isDocsHomePage:!1,title:"PanDemandResponse",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Metering\\PanDemandResponse.md",slug:"/cim100/TC57CIM/IEC61968/Metering/PanDemandResponse",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/PanDemandResponse",version:"current",sidebar:"docs",previous:{title:"MetrologyRequirement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/MetrologyRequirement"},next:{title:"PanDisplay",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Metering/PanDisplay"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"PAN control used to issue action/command to PAN devices during a demand response/load control event."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"appliance"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Metering/ControlledAppliance"}),"ControlledAppliance")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Appliance being controlled.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"avgLoadAdjustment"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PerCent"}),"PerCent")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Used to define a maximum energy usage limit as a percentage of the client implementations specific average energy usage. The load adjustment percentage is added to 100% creating a percentage limit applied to the client implementations specific average energy usage. A -10% load adjustment percentage will establish an energy usage limit equal to 90% of the client implementations specific average energy usage. Each load adjustment percentage is referenced to the client implementations specific average energy usage. There are no cumulative effects. The range of this field is -100% to +100% with a resolution of 1. A -100% value equals a total load shed. A +100% value will limit the energy usage to the client implementations specific average energy usage.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cancelControlMode"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Encoding of cancel control.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cancelDateTime"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Timestamp when a canceling of the event is scheduled to start.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cancelNow"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If true, a canceling of the event should start immediately.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"coolingOffset"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Temperature"}),"Temperature")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Requested offset to apply to the normal cooling setpoint at the time of the start of the event. It represents a temperature change that will be applied to the associated cooling set point. The temperature offsets will be calculated per the local temperature in the thermostat. The calculated temperature will be interpreted as the number of degrees to be added to the cooling set point. Sequential demand response events are not cumulative. The offset shall be applied to the normal setpoint.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"coolingSetpoint"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Temperature"}),"Temperature")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Requested cooling set point. Temperature set point is typically defined and calculated based on local temperature.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"criticalityLevel"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Level of criticality for the action of this control. The action taken by load control devices for an event can be solely based on this value, or in combination with other load control event fields supported by the device.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dutyCycle"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PerCent"}),"PerCent")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Maximum "on" state duty cycle as a percentage of time. For example, if the value is 80, the device would be in an "on" state for 80% of the time for the duration of the action.')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"enrollmentGroup"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Provides a mechanism to direct load control actions to groups of PAN devices. It can be used in conjunction with the PAN device types.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"heatingOffset"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Temperature"}),"Temperature")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Requested offset to apply to the normal heating setpoint at the time of the start of the event. It represents a temperature change that will be applied to the associated heating set point. The temperature offsets will be calculated per the local temperature in the thermostat. The calculated temperature will be interpreted as the number of degrees to be subtracted from the heating set point. Sequential demand response events are not cumulative. The offset shall be applied to the normal setpoint.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"heatingSetpoint"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Temperature"}),"Temperature")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Requested heating set point. Temperature set point is typically defined and calculated based on local temperature.")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Metering/EndDeviceAction"}),"EndDeviceAction"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}p.isMDXComponent=!0},2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,O=b["".concat(i,".").concat(d)]||b[d]||m[d]||c;return a?r.a.createElement(O,o({ref:t},s,{components:a})):r.a.createElement(O,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);