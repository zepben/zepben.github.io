"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[11025],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),m=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(t),g=a,y=c["".concat(i,".").concat(g)]||c[g]||p[g]||l;return t?r.createElement(y,s(s({ref:n},d),{},{components:t})):r.createElement(y,s({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=g;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var m=2;m<l;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},18418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(58168),a=(t(96540),t(15680)),l=t(75489);const s={title:"TransformerMeshImpedance",hide_table_of_contents:!0},o=void 0,i={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance",id:"cim100/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance",title:"TransformerMeshImpedance",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Wires",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance",draft:!1,tags:[],version:"current",frontMatter:{title:"TransformerMeshImpedance",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"TransformerEnd",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TransformerEnd"},next:{title:"TransformerStarImpedance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/TransformerStarImpedance"}},m={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:d},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Transformer mesh impedance (Delta-model) between transformer ends.\nThe typical case is that this class describes the impedance between two transformer ends pair-wise, i.e. the cardinalities at both transformer end associations are 1. However, in cases where two or more transformer ends are modelled the cardinalities are larger than 1."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"r"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,a.yg)("td",{parentName:"tr",align:null},"Resistance between the 'from' and the 'to' end, seen from the 'from' end.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"r0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero-sequence resistance between the 'from' and the 'to' end, seen from the 'from' end.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"x"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,a.yg)("td",{parentName:"tr",align:null},"Reactance between the 'from' and the 'to' end, seen from the 'from' end.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"x0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero-sequence reactance between the 'from' and the 'to' end, seen from the 'from' end.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance",mdxType:"Link"},"TransformerMeshImpedance")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),(0,a.yg)("td",{parentName:"tr",align:null},"1..*"),(0,a.yg)("td",{parentName:"tr",align:null},"ToMeshImpedance"),(0,a.yg)("td",{parentName:"tr",align:null},"All mesh impedances between this 'from' and other 'to' transformer ends."),(0,a.yg)("td",{parentName:"tr",align:null},"ToTransformerEnd"),(0,a.yg)("td",{parentName:"tr",align:null},"All transformer ends this mesh impedance is connected to.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance",mdxType:"Link"},"TransformerMeshImpedance")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"FromMeshImpedance"),(0,a.yg)("td",{parentName:"tr",align:null},"All mesh impedances between this 'to' and other 'from' transformer ends."),(0,a.yg)("td",{parentName:"tr",align:null},"FromTransformerEnd"),(0,a.yg)("td",{parentName:"tr",align:null},"From end this mesh impedance is connected to. It determines the voltage reference.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance",mdxType:"Link"},"TransformerMeshImpedance")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61968/AssetInfo/TransformerEndInfo",mdxType:"Link"},"TransformerEndInfo")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"FromMeshImpedances"),(0,a.yg)("td",{parentName:"tr",align:null},"All mesh impedances between this 'to' and other 'from' transformer ends."),(0,a.yg)("td",{parentName:"tr",align:null},"FromTransformerEndInfo"),(0,a.yg)("td",{parentName:"tr",align:null},"'from' transformer end datasheet this mesh impedance is calculated from. It determines the voltage reference.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61970/Base/Wires/TransformerMeshImpedance",mdxType:"Link"},"TransformerMeshImpedance")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/TC57CIM/IEC61968/AssetInfo/TransformerEndInfo",mdxType:"Link"},"TransformerEndInfo")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"ToMeshImpedances"),(0,a.yg)("td",{parentName:"tr",align:null},"All mesh impedances between this 'from' and other 'to' transformer ends."),(0,a.yg)("td",{parentName:"tr",align:null},"ToTransformerEndInfos"),(0,a.yg)("td",{parentName:"tr",align:null},"All 'to' transformer end datasheets this mesh impedance for 'from' transformer end is calculated from.")))))}g.isMDXComponent=!0}}]);