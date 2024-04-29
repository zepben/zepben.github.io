"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[8152],{15680:(e,n,i)=>{i.d(n,{xA:()=>d,yg:()=>m});var t=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(i),p=a,m=u["".concat(c,".").concat(p)]||u[p]||y[p]||r;return i?t.createElement(m,o(o({ref:n},d),{},{components:i})):t.createElement(m,o({ref:n},d))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},13945:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=i(58168),a=(i(96540),i(15680)),r=i(75489);const o={title:"SynchronousMachineSimplified",hide_table_of_contents:!0,slug:"SynchronousMachineSimplified",sidebar_position:0},s=void 0,c={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified",title:"SynchronousMachineSimplified",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SynchronousMachineSimplified",hide_table_of_contents:!0,slug:"SynchronousMachineSimplified",sidebar_position:0},sidebar:"docs",previous:{title:"SynchronousMachineModelKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineModelKind"},next:{title:"SynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance"}},l={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:d},y="wrapper";function p(e){let{components:n,...i}=e;return(0,a.yg)(y,(0,t.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"The simplified model represents a synchronous generator as a constant internal voltage behind an impedance","<","i",">"," ","<","/i",">","(","<","i",">","Rs + jXp","<","/i",">",") as shown in the Simplified diagram.\nSince internal voltage is held constant, there is no ","<","i",">","Efd","<","/i",">"," input and any excitation system model will be ignored.  There is also no ","<","i",">","Ifd","<","/i",">"," output.\nThis model should not be used for representing a real generator except, perhaps, small generators whose response is insignificant.",(0,a.yg)("br",{parentName:"p"}),"\n","The parameters used for the simplified model include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.damping (","<","i",">","D","<","/i",">",");"),(0,a.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.inertia (","<","i",">","H","<","/i",">",");"),(0,a.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.statorLeakageReactance (used to exchange ","<","i",">","jXp ","<","/i",">","for SynchronousMachineSimplified);"),(0,a.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.statorResistance (","<","i",">","Rs","<","/i",">",").")),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDynamics",mdxType:"Link"},"SynchronousMachineDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("p",null,"None"))}p.isMDXComponent=!0}}]);