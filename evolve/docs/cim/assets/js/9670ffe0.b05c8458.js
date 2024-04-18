"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[16748],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>u});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=d(a),p=r,u=y["".concat(l,".").concat(p)]||y[p]||m[p]||i;return a?t.createElement(u,o(o({ref:n},c),{},{components:a})):t.createElement(u,o({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[y]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58169:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(58168),r=(a(96540),a(15680)),i=a(75489);const o={title:"LoadDynamics",hide_table_of_contents:!0},s=void 0,l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadDynamics",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadDynamics",title:"LoadDynamics",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadDynamics.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/",draft:!1,tags:[],version:"current",frontMatter:{title:"LoadDynamics",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"LoadComposite",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadComposite"},next:{title:"LoadGenericNonLinear",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadGenericNonLinear"}},d={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],y={toc:c},m="wrapper";function p(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Load whose behaviour is described by reference to a standard model ","<",'font color="#0f0f0f"',">","or by definition of a user-defined model.","<","/font",">","\nA standard feature of dynamic load behaviour modelling is the ability to associate the same behaviour to multiple energy consumers by means of a single load definition.  The load model is always applied to individual bus loads (energy consumers)."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadAggregate",mdxType:"Link"},"LoadAggregate")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadComposite",mdxType:"Link"},"LoadComposite")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadGenericNonLinear",mdxType:"Link"},"LoadGenericNonLinear")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/UserDefinedModels/LoadUserDefined",mdxType:"Link"},"LoadUserDefined"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/LoadDynamics/LoadDynamics",mdxType:"Link"},"LoadDynamics")),(0,r.yg)("td",{parentName:"tr",align:null},"0..1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Wires/EnergyConsumer",mdxType:"Link"},"EnergyConsumer")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"LoadDynamics"),(0,r.yg)("td",{parentName:"tr",align:null},"Load dynamics model used to describe dynamic behaviour of this energy consumer."),(0,r.yg)("td",{parentName:"tr",align:null},"EnergyConsumer"),(0,r.yg)("td",{parentName:"tr",align:null},"Energy consumer to which this dynamics load model applies.")))))}p.isMDXComponent=!0}}]);