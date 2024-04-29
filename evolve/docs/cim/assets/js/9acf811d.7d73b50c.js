"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[47828],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,g=p["".concat(l,".").concat(d)]||p[d]||c[d]||s;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(58168),r=(a(96540),a(15680)),s=a(75489);const o={title:"Measurement",hide_table_of_contents:!0,slug:"Measurement",sidebar_position:0},i=void 0,l={unversionedId:"Evolve/IEC61970/Base/Meas/Measurement",id:"Evolve/IEC61970/Base/Meas/Measurement",title:"Measurement",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Meas/Measurement.mdx",sourceDirName:"Evolve/IEC61970/Base/Meas",slug:"/Evolve/IEC61970/Base/Meas/Measurement",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Meas/Measurement",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Measurement",hide_table_of_contents:!0,slug:"Measurement",sidebar_position:0},sidebar:"docs",previous:{title:"IOPoint",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Meas/IOPoint"},next:{title:"MeasurementValue",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Meas/MeasurementValue"}},u={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"A Measurement represents any measured, calculated or non-measured non-calculated quantity. Any piece of equipment may contain Measurements, e.g. a substation may have temperature measurements and door open indications, a transformer may have oil temperature and tank pressure measurements, a bay may contain a number of power flow measurements and a Breaker may contain a switch status measurement.\nThe PSR - Measurement association is intended to capture this use of Measurement and is included in the naming hierarchy based on EquipmentContainer. The naming hierarchy typically has Measurements as leaves, e.g. Substation-VoltageLevel-Bay-Switch-Measurement.\nSome Measurements represent quantities related to a particular sensor location in the network, e.g. a voltage transformer (VT) or potential transformer (PT) at a busbar or a current transformer (CT) at the bar between a breaker and an isolator. The sensing position is not captured in the PSR - Measurement association. Instead it is captured by the Measurement - Terminal association that is used to define the sensing location in the network topology. The location is defined by the connection of the Terminal to ConductingEquipment.\nIf both a Terminal and PSR are associated, and the PSR is of type ConductingEquipment, the associated Terminal should belong to that ConductingEquipment instance.\nWhen the sensor location is needed both Measurement-PSR and Measurement-Terminal are used. The Measurement-Terminal association is never used alone."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"phases"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Core/PhaseCode",mdxType:"Link"},"PhaseCode")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates to which phases the measurement applies and avoids the need to use 'measurementType' to also encode phase information (which would explode the types). The phase information in Measurement, along with 'measurementType' and 'phases' uniquely defines a Measurement for a device, based on normal network phase. Their meaning will not change when the computed energizing phasing is changed due to jumpers or other reasons.",(0,r.yg)("br",null),"If the attribute is missing three phases (ABC) shall be assumed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"unitSymbol"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Domain/UnitSymbol",mdxType:"Link"},"UnitSymbol")),(0,r.yg)("td",{parentName:"tr",align:null},"The unit of measure of the measured quantity.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Meas/Accumulator",mdxType:"Link"},"Accumulator")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Meas/Analog",mdxType:"Link"},"Analog")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Meas/Discrete",mdxType:"Link"},"Discrete"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Core/ACDCTerminal",mdxType:"Link"},"ACDCTerminal")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"Measurements"),(0,r.yg)("td",{parentName:"tr",align:null},"Measurements associated with this terminal defining  where the measurement is placed in the network topology.  It may be used, for instance, to capture the sensor position, such as a voltage transformer (PT) at a busbar or a current transformer (CT) at the bar between a breaker and an isolator."),(0,r.yg)("td",{parentName:"tr",align:null},"Terminal"),(0,r.yg)("td",{parentName:"tr",align:null},"One or more measurements may be associated with a terminal in the network.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"Measurements"),(0,r.yg)("td",{parentName:"tr",align:null},"The measurements associated with this power system resource."),(0,r.yg)("td",{parentName:"tr",align:null},"PowerSystemResource"),(0,r.yg)("td",{parentName:"tr",align:null},"The power system resource that contains the measurement.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/Evolve/IEC61970/Base/SCADA/RemoteSource",mdxType:"Link"},"RemoteSource")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},"Measurements"),(0,r.yg)("td",{parentName:"tr",align:null},"The measurements associated with this remote source"),(0,r.yg)("td",{parentName:"tr",align:null},"RemoteSource"),(0,r.yg)("td",{parentName:"tr",align:null},"The remote point taking the measurement.")))))}d.isMDXComponent=!0}}]);