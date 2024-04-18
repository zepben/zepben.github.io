"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[69806],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(a),h=n,m=g["".concat(o,".").concat(h)]||g[h]||u[h]||i;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},51476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(58168),n=(a(96540),a(15680)),i=a(75489);const s={title:"PhaseTapChanger",hide_table_of_contents:!0},l=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",id:"cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",title:"PhaseTapChanger",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Wires",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",draft:!1,tags:[],version:"current",frontMatter:{title:"PhaseTapChanger",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"PhaseShuntConnectionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseShuntConnectionKind"},next:{title:"PhaseTapChangerAsymmetrical",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerAsymmetrical"}},p={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"A transformer phase shifting tap model that controls the phase angle difference across the power transformer and potentially the active power flow through the power transformer.  This phase tap model may also impact the voltage magnitude."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("p",null,"None"),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/TapChanger",mdxType:"Link"},"TapChanger"))),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerLinear",mdxType:"Link"},"PhaseTapChangerLinear")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerNonLinear",mdxType:"Link"},"PhaseTapChangerNonLinear")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/PhaseTapChangerTabular",mdxType:"Link"},"PhaseTapChangerTabular"))),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/PhaseTapChanger",mdxType:"Link"},"PhaseTapChanger")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"PhaseTapChanger"),(0,n.yg)("td",{parentName:"tr",align:null},"Phase tap changer associated with this transformer end."),(0,n.yg)("td",{parentName:"tr",align:null},"TransformerEnd"),(0,n.yg)("td",{parentName:"tr",align:null},"Transformer end to which this phase tap changer belongs.")))))}h.isMDXComponent=!0}}]);