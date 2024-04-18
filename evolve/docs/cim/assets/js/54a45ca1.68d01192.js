"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[76309],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=g(n),y=r,d=c["".concat(p,".").concat(y)]||c[y]||s[y]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},88072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(58168),r=(n(96540),n(15680)),l=n(75489);const i={title:"GateInputPin",hide_table_of_contents:!0},o=void 0,p={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/GateInputPin",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/GateInputPin",title:"GateInputPin",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/GateInputPin.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/GateInputPin",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/GateInputPin",draft:!1,tags:[],version:"current",frontMatter:{title:"GateInputPin",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Gate",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/Gate"},next:{title:"GateLogicKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfSIPS/GateLogicKind"}},g={},u=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:u},s="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Input pin for a logical gate. The condition described in the input pin will give a logical true or false. Result from measurement and calculation are converted to a true or false."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"aDLogicKind"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfSIPS/AnalogToDigitalLogicKind",mdxType:"Link"},"AnalogToDigitalLogicKind")),(0,r.yg)("td",{parentName:"tr",align:null},"The compare operation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"absoluteValue"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"If true, use the absolute value for compare..")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"duration"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"The duration the compare condition need to be present before given a true. Default is 0 seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"negate"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Invert/negate the result of the compare.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"thresholdPercentage"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),(0,r.yg)("td",{parentName:"tr",align:null},"The threshold percentage that should be used for compare with the percentage change between input value and threshold value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"thresholdValue"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"The threshold value that should be used for compare with the input value.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinBranchGroup",mdxType:"Link"},"PinBranchGroup")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinEquipment",mdxType:"Link"},"PinEquipment")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinGate",mdxType:"Link"},"PinGate")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinMeasurement",mdxType:"Link"},"PinMeasurement")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfSIPS/PinTerminal",mdxType:"Link"},"PinTerminal"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfSIPS/GateInputPin",mdxType:"Link"},"GateInputPin")),(0,r.yg)("td",{parentName:"tr",align:null},"1..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfSIPS/Gate",mdxType:"Link"},"Gate")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"GateInputPin"),(0,r.yg)("td",{parentName:"tr",align:null},"Input to the gate."),(0,r.yg)("td",{parentName:"tr",align:null},"Gate"),(0,r.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);