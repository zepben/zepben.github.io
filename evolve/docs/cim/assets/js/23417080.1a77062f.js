"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[16178],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,u=m["".concat(l,".").concat(y)]||m[y]||d[y]||r;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},60932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(58168),a=(n(96540),n(15680)),r=n(75489);const i={title:"VCompIEEEType1",hide_table_of_contents:!0,slug:"VCompIEEEType1",sidebar_position:0},s=void 0,l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1",title:"VCompIEEEType1",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType1",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"VCompIEEEType1",hide_table_of_contents:!0,slug:"VCompIEEEType1",sidebar_position:0},sidebar:"docs",previous:{title:"GenICompensationForGenJ",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/GenICompensationForGenJ"},next:{title:"VCompIEEEType2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VCompIEEEType2"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"<",'font color="#0f0f0f"',">","Terminal voltage transducer and load compensator as defined in IEEE 421.5-2005, 4. This model is common to all excitation system models described in the IEEE Standard. ","<","/font",">","\n","<",'font color="#0f0f0f"',">","Parameter details:","<","/font",">","\n","<","ol",">","\n","<","li",">","<",'font color="#0f0f0f"',">","If ","<","i",">","Rc","<","/i",">"," and ","<","i",">","Xc","<","/i",">"," are set to zero, the l","<","/font",">","oad compensation is not employed and the behaviour is as a simple sensing circuit.","<","/li",">","\n","<","/ol",">","\n","<","ol",">","\n","<","li",">","If all parameters (","<","i",">","Rc","<","/i",">",", ","<","i",">","Xc","<","/i",">"," and ","<","i",">","Tr","<","/i",">",") are set to zero, the standard model VCompIEEEType1 is bypassed.","<","/li",">","\n","<","/ol",">","\nReference: IEEE 421.5-2005 4."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rc"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"<",'font color="#0f0f0f"',">","Resistive component of compensation of a generator (","<","i",">","Rc","<","/i",">",") (",">","= 0).","<","/font",">")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"tr"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,a.yg)("td",{parentName:"tr",align:null},"<",'font color="#0f0f0f"',">","Time constant which is used for the combined voltage sensing and compensation signal (","<","i",">","Tr","<","/i",">",") (",">","= 0).","<","/font",">")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"xc"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,a.yg)("td",{parentName:"tr",align:null},"<",'font color="#0f0f0f"',">","Reactive component of compensation of a generator (","<","i",">","Xc","<","/i",">",") (",">","= 0).","<","/font",">")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/VoltageCompensatorDynamics/VoltageCompensatorDynamics",mdxType:"Link"},"VoltageCompensatorDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}y.isMDXComponent=!0}}]);