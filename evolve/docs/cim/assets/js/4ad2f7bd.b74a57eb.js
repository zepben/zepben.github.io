"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[54919],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=r,g=m["".concat(d,".").concat(p)]||m[p]||y[p]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=t(58168),r=(t(96540),t(15680)),i=t(75489);const o={title:"LoadGenericNonLinear",hide_table_of_contents:!0,slug:"LoadGenericNonLinear",sidebar_position:0},l=void 0,d={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadGenericNonLinear",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadGenericNonLinear",title:"LoadGenericNonLinear",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadGenericNonLinear.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadGenericNonLinear",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadGenericNonLinear",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"LoadGenericNonLinear",hide_table_of_contents:!0,slug:"LoadGenericNonLinear",sidebar_position:0},sidebar:"docs",previous:{title:"LoadDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadDynamics"},next:{title:"LoadMotor",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadMotor"}},s={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],m={toc:c},y="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Generic non-linear dynamic (GNLD) load. This model can be used in mid-term and long-term voltage stability simulations (i.e., to study voltage collapse), as it can replace a more detailed representation of aggregate load, including induction motors, thermostatically controlled and static loads."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bs"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Steady state voltage index for reactive power (","<","i",">","BS","<","/i",">",").")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bt"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Transient voltage index for reactive power (","<","i",">","BT","<","/i",">",").")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"genericNonLinearLoadModelType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/GenericNonLinearLoadModelKind",mdxType:"Link"},"GenericNonLinearLoadModelKind")),(0,r.yg)("td",{parentName:"tr",align:null},"Type of generic non-linear load model.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ls"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Steady state voltage index for active power (","<","i",">","LS","<","/i",">",").")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lt"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},"Transient voltage index for active power (","<","i",">","LT","<","/i",">",").")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tp"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Time constant of lag function of active power (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","P","<","/sub",">","<","/i",">",") (",">"," 0).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tq"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,r.yg)("td",{parentName:"tr",align:null},"Time constant of lag function of reactive power (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","Q","<","/sub",">","<","/i",">",") (",">"," 0).")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadDynamics",mdxType:"Link"},"LoadDynamics"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("p",null,"None"))}p.isMDXComponent=!0}}]);