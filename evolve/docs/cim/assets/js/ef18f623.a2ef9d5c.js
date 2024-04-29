"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[3784],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>h});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(a),y=r,h=u["".concat(s,".").concat(y)]||u[y]||c[y]||l;return a?n.createElement(h,o(o({ref:t},g),{},{components:a})):n.createElement(h,o({ref:t},g))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},80159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),l=a(75489);const o={title:"TapChanger",hide_table_of_contents:!0,slug:"TapChanger",sidebar_position:0},i=void 0,s={unversionedId:"Evolve/IEC61970/Base/Wires/TapChanger",id:"Evolve/IEC61970/Base/Wires/TapChanger",title:"TapChanger",description:"Class Description",source:"@site/docs/Evolve/IEC61970/Base/Wires/TapChanger.mdx",sourceDirName:"Evolve/IEC61970/Base/Wires",slug:"/Evolve/IEC61970/Base/Wires/TapChanger",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/TapChanger",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"TapChanger",hide_table_of_contents:!0,slug:"TapChanger",sidebar_position:0},sidebar:"docs",previous:{title:"Switch",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/Switch"},next:{title:"TapChangerControl",permalink:"/evolve/docs/cim/Evolve/IEC61970/Base/Wires/TapChangerControl"}},p={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:g},c="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Mechanism for changing transformer winding tap positions."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"controlEnabled"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the regulation status of the equipment.  True is regulating, false is not regulating.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"highStep"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Highest possible tap step position, advance from neutral.",(0,r.yg)("br",null),"The attribute shall be greater than lowStep.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lowStep"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Lowest possible tap step position, retard from neutral.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"neutralStep"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"The neutral tap step position for this winding.",(0,r.yg)("br",null),"The attribute shall be equal to or greater than lowStep and equal or less than highStep.",(0,r.yg)("br",null),"It is the step position where the voltage is neutralU when the other terminals of the transformer are at the ratedU.  If there are other tap changers on the transformer those taps are kept constant at their neutralStep.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"neutralU"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),(0,r.yg)("td",{parentName:"tr",align:null},"Voltage at which the winding operates at the neutral tap setting. It is the voltage at the terminal of the PowerTransformerEnd associated with the tap changer when all tap changers on the transformer are at their neutralStep position.  Normally neutralU of the tap changer is the same as ratedU of the PowerTransformerEnd, but it can differ in special cases such as when the tapping mechanism is separate from the winding more common on lower voltage transformers.",(0,r.yg)("br",null),"This attribute is not relevant for PhaseTapChangerAsymmetrical, PhaseTapChangerSymmetrical and PhaseTapChangerLinear.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"normalStep"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},'The tap step position used in "normal" network operation for this winding. For a "Fixed" tap changer indicates the current physical tap setting.',(0,r.yg)("br",null),"The attribute shall be equal to or greater than lowStep and equal to or less than highStep.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"step"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Tap changer position.",(0,r.yg)("br",null),"Starting step for a steady state solution. Non integer values are allowed to support continuous tap variables. The reasons for continuous value are to support study cases where no discrete tap changer has yet been designed, a solution where a narrow voltage band forces the tap step to oscillate or to accommodate for a continuous solution as input.",(0,r.yg)("br",null),"The attribute shall be equal to or greater than lowStep and equal to or less than highStep.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/RatioTapChanger",mdxType:"Link"},"RatioTapChanger"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/TapChanger",mdxType:"Link"},"TapChanger")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(l.A,{to:"/Evolve/IEC61970/Base/Wires/TapChangerControl",mdxType:"Link"},"TapChangerControl")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"TapChangerControl"),(0,r.yg)("td",{parentName:"tr",align:null},"The regulating control scheme in which this tap changer participates.")))))}y.isMDXComponent=!0}}]);