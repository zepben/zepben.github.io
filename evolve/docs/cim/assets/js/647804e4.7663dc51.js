"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[37647],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=g(a),d=r,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),i=a(75489);const l={title:"RatioTapChanger",hide_table_of_contents:!0,slug:"RatioTapChanger",sidebar_position:0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger",id:"cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger",title:"RatioTapChanger",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Wires",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"RatioTapChanger",hide_table_of_contents:!0,slug:"RatioTapChanger",sidebar_position:0},sidebar:"docs",previous:{title:"ProtectedSwitch",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ProtectedSwitch"},next:{title:"RatioTapChangerTable",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChangerTable"}},g={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A tap changer that changes the voltage ratio impacting the voltage magnitude but not the phase angle across the transformer."),(0,r.yg)("p",null,"Angle sign convention (general): Positive value indicates a positive phase shift from the winding where the tap is located to the other winding (for a two-winding transformer)."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stepVoltageIncrement"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),(0,r.yg)("td",{parentName:"tr",align:null},"Tap step increment, in per cent of rated voltage of the power transformer end, per step position.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"When the increment is negative, the voltage decreases when the tap step increases."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tculControlMode"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerControlMode",mdxType:"Link"},"TransformerControlMode")),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the regulation control mode (voltage or reactive) of the RatioTapChanger.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TapChanger",mdxType:"Link"},"TapChanger"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger",mdxType:"Link"},"RatioTapChanger")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChangerTable",mdxType:"Link"},"RatioTapChangerTable")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"RatioTapChanger"),(0,r.yg)("td",{parentName:"tr",align:null},"The ratio tap changer of this tap ratio table."),(0,r.yg)("td",{parentName:"tr",align:null},"RatioTapChangerTable"),(0,r.yg)("td",{parentName:"tr",align:null},"The tap ratio table for this ratio  tap changer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/RatioTapChanger",mdxType:"Link"},"RatioTapChanger")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"RatioTapChanger"),(0,r.yg)("td",{parentName:"tr",align:null},"Ratio tap changer associated with this transformer end."),(0,r.yg)("td",{parentName:"tr",align:null},"TransformerEnd"),(0,r.yg)("td",{parentName:"tr",align:null},"Transformer end to which this ratio tap changer belongs.")))))}d.isMDXComponent=!0}}]);