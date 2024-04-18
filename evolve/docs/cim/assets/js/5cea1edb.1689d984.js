"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[42321],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,u=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?i.createElement(u,o(o({ref:t},y),{},{components:n})):i.createElement(u,o({ref:t},y))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>y});var i=n(58168),a=(n(96540),n(15680)),r=n(75489);const o={title:"ExcNI",hide_table_of_contents:!0},c=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcNI",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcNI",title:"ExcNI",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcNI.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcNI",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcNI",draft:!1,tags:[],version:"current",frontMatter:{title:"ExcNI",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ExcIEEEST7B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST7B"},next:{title:"ExcOEX3T",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcOEX3T"}},l={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:y},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,i.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Bus or solid fed SCR (silicon-controlled rectifier) bridge excitation system model type NI (NVE)."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"busFedSelector"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Fed by selector (","<","i",">","BusFedSelector","<","/i",">",").")))),(0,a.yg)("p",null,"true = bus fed (switch is closed)\nfalse = solid fed (switch is open).\nTypical value = true. |\n| ka | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Voltage regulator gain (","<","i",">","Ka","<","/i",">",") (",">"," 0).  Typical value = 210. |\n| kf | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Excitation control system stabilizer gain (","<","i",">","Kf","<","/i",">",") (",">"," 0).  Typical value 0,01. |\n| r | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | ","<","i",">","rc","<","/i",">"," / ","<","i",">","rfd","<","/i",">"," (","<","i",">","R","<","/i",">",") (",">","= 0).\n0 means exciter has negative current capability\n",">"," 0 means exciter does not have negative current capability.",(0,a.yg)("br",{parentName:"p"}),"\n","Typical value = 5. |\n| ta | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Voltage regulator time constant (","<","i",">","Ta","<","/i",">",") (",">"," 0).  Typical value = 0,02. |\n| tf1 | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Excitation control system stabilizer time constant (","<","i",">","Tf1","<","/i",">",") (",">"," 0). Typical value = 1,0. |\n| tf2 | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Excitation control system stabilizer time constant (","<","i",">","Tf2","<","/i",">",") (",">"," 0). Typical value = 0,1. |\n| tr | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")," | Time constant (","<","i",">","Tr","<","/i",">",") (",">","= 0). Typical value = 0,02. |\n| vrmax | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Maximum voltage regulator ouput (","<","i",">","Vrmax","<","/i",">",") (",">"," ExcNI.vrmin). Typical value = 5,0. |\n| vrmin | ",(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")," | Minimum voltage regulator ouput (","<","i",">","Vrmin","<","/i",">",") (","<"," ExcNI.vrmax). Typical value = -2,0. |"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}p.isMDXComponent=!0}}]);