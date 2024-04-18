"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[56529],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>p});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=s(a),g=i,p=y["".concat(c,".").concat(g)]||y[g]||d[g]||r;return a?n.createElement(p,l(l({ref:t},m),{},{components:a})):n.createElement(p,l({ref:t},m))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[y]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},39688:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(58168),i=(a(96540),a(15680)),r=a(75489);const l={title:"ExcST2A",hide_table_of_contents:!0,slug:"ExcST2A",sidebar_position:0},o=void 0,c={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A",title:"ExcST2A",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST2A",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ExcST2A",hide_table_of_contents:!0,slug:"ExcST2A",sidebar_position:0},sidebar:"docs",previous:{title:"ExcST1A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST1A"},next:{title:"ExcST3A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcST3A"}},s={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],y={toc:m},d="wrapper";function g(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"Modified IEEE ST2A static excitation system with another lead-lag block added to match the model defined by WECC."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"efdmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum field voltage (","<","i",">","Efdmax","<","/i",">",") (",">","= 0).  Typical value = 99.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ka"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator gain (","<","i",">","Ka","<","/i",">",") (",">"," 0).  Typical value = 120.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Rectifier loading factor proportional to commutating reactance (","<","i",">","Kc","<","/i",">",") (",">","= 0).  Typical value = 1,82.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ke"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter constant related to self-excited field (","<","i",">","Ke","<","/i",">",").  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kf"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer gains (","<","i",">","kf","<","/i",">",") (",">","= 0).  Typical value = 0,05.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ki"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Potential circuit gain coefficient (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","i","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 8.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kp"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Potential circuit gain coefficient (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","p","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 4,88.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ta"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","Ta","<","/i",">",") (",">"," 0).  Typical value = 0,15.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tb"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","Tb","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","Tc","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"te"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter time constant, integration rate associated with exciter control (","<","i",">","Te","<","/i",">",") (",">"," 0).  Typical value = 0,5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tf"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer time constant (","<","i",">","Tf","<","/i",">",") (",">","= 0).  Typical value = 0,7.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"uelin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,i.yg)("td",{parentName:"tr",align:null},"UEL input (","<","i",">","UELin","<","/i",">",").")))),(0,i.yg)("p",null,"true = HV gate\nfalse = add to error signal.\nTypical value = false. |\n| vrmax | ",(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum voltage regulator outputs (","<","i",">","Vrmax","<","/i",">",") (",">"," 0).  Typical value = 1. |\n| vrmin | ",(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum voltage regulator outputs (","<","i",">","Vrmin","<","/i",">",") (","<"," 0).  Typical value = -1. |"),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}g.isMDXComponent=!0}}]);