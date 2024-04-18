"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[8768],{15680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>c});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},g=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,c=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return r?t.createElement(c,o(o({ref:n},g),{},{components:r})):t.createElement(c,o({ref:n},g))}));function c(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42320:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var t=r(58168),a=(r(96540),r(15680)),l=r(75489);const o={title:"TransformerEnd",hide_table_of_contents:!0,slug:"TransformerEnd",sidebar_position:0},i=void 0,s={unversionedId:"Evolve/IEC61970/Base/Wires/TransformerEnd",id:"Evolve/IEC61970/Base/Wires/TransformerEnd",title:"TransformerEnd",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Wires/TransformerEnd.mdx",sourceDirName:"Evolve/IEC61970/Base/Wires",slug:"/Evolve/IEC61970/Base/Wires/TransformerEnd",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/TransformerEnd",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"TransformerEnd",hide_table_of_contents:!0,slug:"TransformerEnd",sidebar_position:0},sidebar:"docs",previous:{title:"TapChangerControl",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/TapChangerControl"},next:{title:"TransformerStarImpedance",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/TransformerStarImpedance"}},d={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:g},p="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A conducting connection point of a power transformer. It corresponds to a physical transformer winding terminal.  In earlier CIM versions, the TransformerWinding class served a similar purpose, but this class is more flexible because it associates to terminal but is not a specialization of ConductingEquipment."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"endNumber"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null},"Number for this transformer end, corresponding to the end's order in the power transformer vector group or phase angle clock number.  Highest voltage winding should be 1.  Each end within a power transformer should have a unique subsequent end number.   Note the transformer end number need not match the terminal sequence number.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"grounded"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"(for Yn and Zn connections) True if the neutral is solidly grounded.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rground"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,a.yg)("td",{parentName:"tr",align:null},"(for Yn and Zn connections) Resistance part of neutral impedance where 'grounded' is true.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"xground"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,a.yg)("td",{parentName:"tr",align:null},"(for Yn and Zn connections) Reactive part of neutral impedance where 'grounded' is true.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/PowerTransformerEnd",mdxType:"Link"},"PowerTransformerEnd"))),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Core/Terminal",mdxType:"Link"},"Terminal")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Terminal"),(0,a.yg)("td",{parentName:"tr",align:null},"Terminal of the power transformer to which this transformer end belongs.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/RatioTapChanger",mdxType:"Link"},"RatioTapChanger")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"TransformerEnd"),(0,a.yg)("td",{parentName:"tr",align:null},"Transformer end to which this ratio tap changer belongs."),(0,a.yg)("td",{parentName:"tr",align:null},"RatioTapChanger"),(0,a.yg)("td",{parentName:"tr",align:null},"Ratio tap changer associated with this transformer end.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/TransformerStarImpedance",mdxType:"Link"},"TransformerStarImpedance")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"StarImpedance"),(0,a.yg)("td",{parentName:"tr",align:null},"(accurate for 2- or 3-winding transformers only) Pi-model impedances of this transformer end. By convention, for a two winding transformer, the full values of the transformer should be entered on the high voltage end (endNumber=1).")))))}u.isMDXComponent=!0}}]);