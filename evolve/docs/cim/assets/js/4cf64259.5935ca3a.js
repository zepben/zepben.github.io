"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[46280],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=c(n),p=a,u=y["".concat(l,".").concat(p)]||y[p]||m[p]||i;return n?r.createElement(u,s(s({ref:t},d),{},{components:n})):r.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[y]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const s={title:"ExcitationSystemUserDefined",hide_table_of_contents:!0},o=void 0,l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ExcitationSystemUserDefined",id:"cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ExcitationSystemUserDefined",title:"ExcitationSystemUserDefined",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ExcitationSystemUserDefined.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels",slug:"/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ExcitationSystemUserDefined",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ExcitationSystemUserDefined",draft:!1,tags:[],version:"current",frontMatter:{title:"ExcitationSystemUserDefined",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"DiscontinuousExcitationControlUserDefined",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/DiscontinuousExcitationControlUserDefined"},next:{title:"LoadUserDefined",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/UserDefinedModels/LoadUserDefined"}},c={},d=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],y={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Excitation system function block whose dynamic behaviour is described by ","<",'font color="#0f0f0f"',">","a user-defined model.","<","/font",">"),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"proprietary"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Behaviour is based on a proprietary model as opposed to a detailed model.")))),(0,a.yg)("p",null,"true = user-defined model is proprietary with behaviour mutually understood by sending and receiving applications and parameters passed as general attributes\nfalse = user-defined model is explicitly defined in terms of control blocks and their input and output signals. |"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ExcitationSystemUserDefined",mdxType:"Link"},"ExcitationSystemUserDefined")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/UserDefinedModels/ProprietaryParameterDynamics",mdxType:"Link"},"ProprietaryParameterDynamics")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"ExcitationSystemUserDefined"),(0,a.yg)("td",{parentName:"tr",align:null},"Proprietary user-defined model with which this parameter is associated."),(0,a.yg)("td",{parentName:"tr",align:null},"ProprietaryParameterDynamics"),(0,a.yg)("td",{parentName:"tr",align:null},"Parameter of this proprietary user-defined model.")))))}p.isMDXComponent=!0}}]);