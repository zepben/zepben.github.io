"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[76856],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},C="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),C=c(n),u=r,m=C["".concat(s,".").concat(u)]||C[u]||p[u]||i;return n?a.createElement(m,l(l({ref:t},g),{},{components:n})):a.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[C]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const l={title:"ICCPInformationMessage",hide_table_of_contents:!0,slug:"ICCPInformationMessage",sidebar_position:0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPInformationMessage",id:"cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPInformationMessage",title:"ICCPInformationMessage",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPInformationMessage.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/ICCPConfiguration",slug:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPInformationMessage",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPInformationMessage",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ICCPInformationMessage",hide_table_of_contents:!0,slug:"ICCPInformationMessage",sidebar_position:0},sidebar:"docs",previous:{title:"ICCPAccessPrivilegeKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPAccessPrivilegeKind"},next:{title:"ICCPPointKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPPointKind"}},c={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],C={toc:g},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"This class represents the TASE.2 Information Message Object.  The IdentifiedObject.name attribute must be non-null.  The value of the attribute shall be used as the TASE.2 Information Reference, as specified by 60870-6-503."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"localReference"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"The Local Reference attribute specifies a value agreed upon between sender and receiver of the Information Message. It further identifies the Information Message.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scope"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPScopeKind",mdxType:"Link"},"ICCPScopeKind")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates if the Point is global scoped (e.g. VCC) or accessible only to the Bilateral table peer (e.g. ICC).")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/ICCPInformationMessage",mdxType:"Link"},"ICCPInformationMessage")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/cim100/TC57CIM/IEC61970/Base/ICCPConfiguration/TASE2BilateralTable",mdxType:"Link"},"TASE2BilateralTable")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"ICCPInformationMessage"),(0,r.yg)("td",{parentName:"tr",align:null},"Informational message to be included in a Bilateral Table agreement."),(0,r.yg)("td",{parentName:"tr",align:null},"TASE2BilateralTable"),(0,r.yg)("td",{parentName:"tr",align:null},"Bilateral table agreement that includes the informational message.")))))}u.isMDXComponent=!0}}]);