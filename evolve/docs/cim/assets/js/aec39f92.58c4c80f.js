"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[6867],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),g=r,d=m["".concat(l,".").concat(g)]||m[g]||h[g]||i;return t?n.createElement(d,s(s({ref:a},p),{},{components:t})):n.createElement(d,s({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},40679:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),i=t(75489);const s={title:"PhaseTapChangerLinear",hide_table_of_contents:!0,slug:"PhaseTapChangerLinear",sidebar_position:0},o=void 0,l={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",id:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",title:"PhaseTapChangerLinear",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Wires",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"PhaseTapChangerLinear",hide_table_of_contents:!0,slug:"PhaseTapChangerLinear",sidebar_position:0},sidebar:"docs",previous:{title:"PhaseTapChangerAsymmetrical",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerAsymmetrical"},next:{title:"PhaseTapChangerNonLinear",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerNonLinear"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:p},h="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(h,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Describes a tap changer with a linear relation between the tap step and the phase angle difference across the transformer. This is a mathematical model that is an approximation of a real phase tap changer.\nThe phase angle is computed as stepPhaseShiftIncrement times the tap position.\nThe voltage magnitude of both sides is the same."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stepPhaseShiftIncrement"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),(0,r.yg)("td",{parentName:"tr",align:null},"Phase shift per step position. A positive value indicates a positive angle variation from the Terminal at the  PowerTransformerEnd,  where the TapChanger is located, into the transformer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"The actual phase shift increment might be more accurately computed from the symmetrical or asymmetrical models or a tap step table lookup if those are available."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xMax"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},'The reactance depends on the tap position according to a "u" shaped curve. The maximum reactance (xMax) appears at the low and high tap positions. Depending on the \u201cu\u201d curve the attribute can be either higher or lower than PowerTransformerEnd.x.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xMin"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")),(0,r.yg)("td",{parentName:"tr",align:null},'The reactance depends on the tap position according to a "u" shaped curve. The minimum reactance (xMin) appears at the mid tap position.  PowerTransformerEnd.x shall be consistent with PhaseTapChangerLinear.xMin and PhaseTapChangerNonLinear.xMin. In case of inconsistency, PowerTransformerEnd.x shall be used.')))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",mdxType:"Link"},"PhaseTapChanger"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("p",null,"None"))}g.isMDXComponent=!0}}]);