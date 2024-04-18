"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[40810],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>p});var n=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(i),y=a,p=m["".concat(c,".").concat(y)]||m[y]||u[y]||r;return i?n.createElement(p,o(o({ref:t},d),{},{components:i})):n.createElement(p,o({ref:t},d))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},92757:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=i(58168),a=(i(96540),i(15680)),r=i(75489);const o={title:"ExcDC3A",hide_table_of_contents:!0},l=void 0,c={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcDC3A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcDC3A",title:"ExcDC3A",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcDC3A.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcDC3A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcDC3A",draft:!1,tags:[],version:"current",frontMatter:{title:"ExcDC3A",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ExcDC2A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcDC2A"},next:{title:"ExcDC3A1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcDC3A1"}},s={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:d},u="wrapper";function y(e){let{components:t,...i}=e;return(0,a.yg)(u,(0,n.A)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Modified IEEE DC3A direct current commutator exciter with speed input, and deadband.  DC old type 4."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"efd1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Exciter voltage at which exciter saturation is defined (","<","i",">","Efd","<","/i",">","<","i",">","<","sub",">","1","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 2,6.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"efd2"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"Exciter voltage at which exciter saturation is defined (","<","i",">","Efd","<","/i",">","<","i",">","<","sub",">","2","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 3,45.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"efdlim"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"(","<","i",">","Efdlim","<","/i",">",").")))),(0,a.yg)("p",null,"true = exciter output limiter is active\nfalse = exciter output limiter not active.\nTypical value = true. |\n| efdmax | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum voltage exciter output limiter (","<","i",">","Efdmax","<","/i",">",") (",">"," ExcDC3A.efdmin).  Typical value = 99. |\n| efdmin | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum voltage exciter output limiter (","<","i",">","Efdmin","<","/i",">",") (","<"," ExcDC3A.efdmax).  Typical value = -99. |\n| exclim | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")," | (","<","i",">","exclim","<","/i",">",").  IEEE standard is ambiguous about lower limit on exciter output.\ntrue = a lower limit of zero is applied to integrator output\nfalse = a lower limit of zero not applied to integrator output.\nTypical value = true. |\n| ke | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Exciter constant related to self-excited field (","<","i",">","Ke","<","/i",">",").  Typical value = 1. |\n| kr | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Deadband (","<","i",">","Kr","<","/i",">",").  Typical value = 0. |\n| ks | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Coefficient to allow different usage of the model-speed coefficient (","<","i",">","Ks","<","/i",">",").  Typical value = 0. |\n| kv | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Fast raise/lower contact setting (","<","i",">","Kv","<","/i",">",") (",">"," 0).  Typical value = 0,05. |\n| seefd1 | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Exciter saturation function value at the corresponding exciter voltage, ","<","i",">","Efd","<","/i",">","<","i",">","<","sub",">","1","<","/sub",">","<","/i",">"," (","<","i",">","Se","[Efd","<","/i",">","<","i",">","<","sub",">","1","<","/sub",">","<","/i",">","<","i",">]","<","/i",">",") (",">","= 0).  Typical value = 0,1. |\n| seefd2 | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Exciter saturation function value at the corresponding exciter voltage, ","<","i",">","Efd","<","/i",">","<","i",">","<","sub",">","2","<","/sub",">","<","/i",">"," (","<","i",">","Se","[Efd","<","/i",">","<","i",">","<","sub",">","2","<","/sub",">","<","/i",">","<","i",">]","<","/i",">",") (",">","= 0).  Typical value = 0,35. |\n| te | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Exciter time constant, integration rate associated with exciter control (","<","i",">","Te","<","/i",">",") (",">"," 0).  Typical value = 1,83. |\n| trh | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Rheostat travel time (","<","i",">","Trh","<","/i",">",") (",">"," 0).  Typical value = 20. |\n| vrmax | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum voltage regulator output (","<","i",">","Vrmax","<","/i",">",") (",">"," 0).  Typical value = 5. |\n| vrmin | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum voltage regulator output (","<","i",">","Vrmin","<","/i",">",") (","<","= 0).  Typical value = 0. |"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}y.isMDXComponent=!0}}]);