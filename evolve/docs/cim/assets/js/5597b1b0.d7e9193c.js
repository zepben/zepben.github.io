"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[93856],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),p=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=p(r),s=n,u=y["".concat(g,".").concat(s)]||y[s]||m[s]||l;return r?a.createElement(u,o(o({ref:t},d),{},{components:r})):a.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[y]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},24864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>g,toc:()=>d});var a=r(58168),n=(r(96540),r(15680)),l=r(75489);const o={title:"HydroPowerPlant",hide_table_of_contents:!0,slug:"HydroPowerPlant",sidebar_position:0},i=void 0,g={unversionedId:"cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",id:"cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",title:"HydroPowerPlant",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Generation/Production",slug:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"HydroPowerPlant",hide_table_of_contents:!0,slug:"HydroPowerPlant",sidebar_position:0},sidebar:"docs",previous:{title:"HydroPlantStorageKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPlantStorageKind"},next:{title:"HydroPump",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump"}},p={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],y={toc:d},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"A hydro power station which can generate or pump. When generating, the generator turbines receive water from an upper reservoir. When pumping, the pumps receive their water from a lower reservoir."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dischargeTravelDelay"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,n.yg)("td",{parentName:"tr",align:null},"Water travel delay from tailbay to next downstream hydro power station.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"genRatedP"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,n.yg)("td",{parentName:"tr",align:null},"The hydro plant's generating rating active power for rated head conditions.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"The attribute shall be a positive value."),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"hydroPlantStorageType"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPlantStorageKind",mdxType:"Link"},"HydroPlantStorageKind")),(0,n.yg)("td",{parentName:"tr",align:null},"The type of hydro power plant water storage.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"penstockType"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,n.yg)("td",{parentName:"tr",align:null},"Type and configuration of hydro plant penstock(s).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"plantDischargeCapacity"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/VolumeFlowRate",mdxType:"Link"},"VolumeFlowRate")),(0,n.yg)("td",{parentName:"tr",align:null},"Total plant discharge capacity.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"plantRatedHead"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Length",mdxType:"Link"},"Length")),(0,n.yg)("td",{parentName:"tr",align:null},"The plant's rated gross head.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"The attribute shall be a positive value."),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pumpRatedP"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,n.yg)("td",{parentName:"tr",align:null},"The hydro plant's pumping rating active power for rated head conditions.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"The attribute shall be a positive value."),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"surgeTankCode"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,n.yg)("td",{parentName:"tr",align:null},"A code describing the type (or absence) of surge tank that is associated with the hydro power plant.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"surgeTankCrestLevel"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/WaterLevel",mdxType:"Link"},"WaterLevel")),(0,n.yg)("td",{parentName:"tr",align:null},"The level at which the surge tank spills.")))),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("p",null,"No descendent classes"),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPump",mdxType:"Link"},"HydroPump")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"HydroPowerPlant"),(0,n.yg)("td",{parentName:"tr",align:null},"The hydro pump may be a member of a pumped storage plant or a pump for distributing water."),(0,n.yg)("td",{parentName:"tr",align:null},"HydroPumps"),(0,n.yg)("td",{parentName:"tr",align:null},"The hydro pump may be a member of a pumped storage plant or a pump for distributing water.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/Reservoir",mdxType:"Link"},"Reservoir")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},"HydroPowerPlants"),(0,n.yg)("td",{parentName:"tr",align:null},"Generators discharge water to or pumps are supplied water from a downstream reservoir."),(0,n.yg)("td",{parentName:"tr",align:null},"Reservoir"),(0,n.yg)("td",{parentName:"tr",align:null},"Generators discharge water to or pumps are supplied water from a downstream reservoir.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/Reservoir",mdxType:"Link"},"Reservoir")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"UpstreamFromHydroPowerPlants"),(0,n.yg)("td",{parentName:"tr",align:null},"Generators are supplied water from or pumps discharge water to an upstream reservoir."),(0,n.yg)("td",{parentName:"tr",align:null},"GenSourcePumpDischargeReservoir"),(0,n.yg)("td",{parentName:"tr",align:null},"Generators are supplied water from or pumps discharge water to an upstream reservoir.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroPowerPlant",mdxType:"Link"},"HydroPowerPlant")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Generation/Production/HydroGeneratingUnit",mdxType:"Link"},"HydroGeneratingUnit")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"HydroPowerPlant"),(0,n.yg)("td",{parentName:"tr",align:null},"The hydro generating unit belongs to a hydro power plant."),(0,n.yg)("td",{parentName:"tr",align:null},"HydroGeneratingUnits"),(0,n.yg)("td",{parentName:"tr",align:null},"The hydro generating unit belongs to a hydro power plant.")))))}s.isMDXComponent=!0}}]);