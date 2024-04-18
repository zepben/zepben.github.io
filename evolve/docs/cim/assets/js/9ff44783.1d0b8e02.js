"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[52908],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680)),o=n(75489);const l={title:"ShortCircuitTest",hide_table_of_contents:!0},i=void 0,s={unversionedId:"Evolve/IEC61968/AssetInfo/ShortCircuitTest",id:"Evolve/IEC61968/AssetInfo/ShortCircuitTest",title:"ShortCircuitTest",description:"Class Description",source:"@site/docs/Evolve/IEC61968/AssetInfo/ShortCircuitTest.mdx",sourceDirName:"Evolve/IEC61968/AssetInfo",slug:"/Evolve/IEC61968/AssetInfo/ShortCircuitTest",permalink:"/evolve/docs/cim/Evolve/IEC61968/AssetInfo/ShortCircuitTest",draft:!1,tags:[],version:"current",frontMatter:{title:"ShortCircuitTest",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"PowerTransformerInfo",permalink:"/evolve/docs/cim/Evolve/IEC61968/AssetInfo/PowerTransformerInfo"},next:{title:"ShuntCompensatorInfo",permalink:"/evolve/docs/cim/Evolve/IEC61968/AssetInfo/ShuntCompensatorInfo"}},p={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:c},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Short-circuit test results determine mesh impedance parameters. They include load losses and leakage impedances. For three-phase windings, the excitation can be a positive sequence (the default) or a zero sequence. There shall be at least one grounded winding."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"current"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),(0,a.yg)("td",{parentName:"tr",align:null},"Short circuit current..")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"energisedEndStep"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null},"Tap step number for the energised end of the test pair.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"groundedEndStep"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null},"Tap step number for the grounded end of the test pair.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"leakageImpedance"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Impedance",mdxType:"Link"},"Impedance")),(0,a.yg)("td",{parentName:"tr",align:null},"Leakage impedance measured from a positive-sequence or single-phase short-circuit test.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"leakageImpedanceZero"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/Impedance",mdxType:"Link"},"Impedance")),(0,a.yg)("td",{parentName:"tr",align:null},"Leakage impedance measured from a zero-sequence short-circuit test.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"loss"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Load losses from a positive-sequence or single-phase short-circuit test.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"lossZero"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),(0,a.yg)("td",{parentName:"tr",align:null},"Load losses from a zero-sequence short-circuit test.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"power"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/ApparentPower",mdxType:"Link"},"ApparentPower")),(0,a.yg)("td",{parentName:"tr",align:null},"Short circuit apparent power.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"voltage"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),(0,a.yg)("td",{parentName:"tr",align:null},"Short circuit voltage..")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"voltageOhmicPart"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/Evolve/IEC61970/Base/Domain/PerCent",mdxType:"Link"},"PerCent")),(0,a.yg)("td",{parentName:"tr",align:null},"Short Circuit Voltage \u2013 Ohmic Part.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/Evolve/IEC61968/AssetInfo/TransformerTest",mdxType:"Link"},"TransformerTest"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}u.isMDXComponent=!0}}]);