"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[79437],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,y=p["".concat(o,".").concat(d)]||p[d]||m[d]||s;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),s=a(75489);const i={title:"MeasurementValue",hide_table_of_contents:!0,slug:"MeasurementValue",sidebar_position:0},l=void 0,o={unversionedId:"ewb/IEC61970/Base/Meas/MeasurementValue",id:"ewb/IEC61970/Base/Meas/MeasurementValue",title:"MeasurementValue",description:"Class Description",source:"@site/docs/ewb/IEC61970/Base/Meas/MeasurementValue.mdx",sourceDirName:"ewb/IEC61970/Base/Meas",slug:"/ewb/IEC61970/Base/Meas/MeasurementValue",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Meas/MeasurementValue",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"MeasurementValue",hide_table_of_contents:!0,slug:"MeasurementValue",sidebar_position:0},sidebar:"docs",previous:{title:"Measurement",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Meas/Measurement"},next:{title:"ControlDiag \ud83d\udd39",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Meas/ControlDiag"}},u={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"The current state for a measurement. A state value is an instance of a measurement from a specific source. Measurements can be associated with many state values, each representing a different source for the measurement."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timeStamp"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(s.A,{to:"/ewb/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,r.yg)("td",{parentName:"tr",align:null},"The time when the value was last updated.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(s.A,{to:"/ewb/IEC61970/Base/Meas/AccumulatorValue",mdxType:"Link"},"AccumulatorValue")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(s.A,{to:"/ewb/IEC61970/Base/Meas/AnalogValue",mdxType:"Link"},"AnalogValue")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(s.A,{to:"/ewb/IEC61970/Base/Meas/DiscreteValue",mdxType:"Link"},"DiscreteValue"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);