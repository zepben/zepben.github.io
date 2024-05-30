"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[75017],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,y=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const l={title:"Name",hide_table_of_contents:!0,slug:"Name",sidebar_position:0},o=void 0,s={unversionedId:"ewb/IEC61970/Base/Core/Name",id:"ewb/IEC61970/Base/Core/Name",title:"Name",description:"Class Description",source:"@site/docs/ewb/IEC61970/Base/Core/Name.mdx",sourceDirName:"ewb/IEC61970/Base/Core",slug:"/ewb/IEC61970/Base/Core/Name",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Core/Name",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Name",hide_table_of_contents:!0,slug:"Name",sidebar_position:0},sidebar:"docs",previous:{title:"IdentifiedObject",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Core/IdentifiedObject"},next:{title:"NameType",permalink:"/evolve/docs/cim/ewb/IEC61970/Base/Core/NameType"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"The Name class provides the means to define any number of human readable  names for an object. A name is ","<","b",">","not","<","/b",">"," to be used for defining inter-object relationships. For inter-object relationships instead use the object identification 'mRID'."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Any free text that name the object.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Core/NameType",mdxType:"Link"},"NameType")),(0,r.yg)("td",{parentName:"tr",align:null},"Type of this name.")))),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("p",null,"No ancestor classes"),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Core/Name",mdxType:"Link"},"Name")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/ewb/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Names"),(0,r.yg)("td",{parentName:"tr",align:null},"All names of this identified object."),(0,r.yg)("td",{parentName:"tr",align:null},"IdentifiedObject"),(0,r.yg)("td",{parentName:"tr",align:null},"Identified object that this name designates.")))))}g.isMDXComponent=!0}}]);