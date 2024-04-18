"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[10498],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(96540),n(15680)),i=n(75489);const a={title:"ProtectionEquipmentInfo",hide_table_of_contents:!0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/ProtectionEquipmentInfo",id:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/ProtectionEquipmentInfo",title:"ProtectionEquipmentInfo",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/ProtectionEquipmentInfo.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo",slug:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/ProtectionEquipmentInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/ProtectionEquipmentInfo",draft:!1,tags:[],version:"current",frontMatter:{title:"ProtectionEquipmentInfo",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"PotentialTransformerInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/PotentialTransformerInfo"},next:{title:"RecloserInfo",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/InfIEC61968/InfAssetInfo/RecloserInfo"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(f,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"class-description"},"Class Description"),(0,o.yg)("p",null,"Properties of protection equipment asset."),(0,o.yg)("h2",{id:"attributes"},"Attributes"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"groundTrip"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),(0,o.yg)("td",{parentName:"tr",align:null},"Actual ground trip for this type of relay, if applicable.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"phaseTrip"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/CurrentFlow",mdxType:"Link"},"CurrentFlow")),(0,o.yg)("td",{parentName:"tr",align:null},"Actual phase trip for this type of relay, if applicable.")))),(0,o.yg)("h2",{id:"relationships"},"Relationships"),(0,o.yg)("h3",{id:"ancestors"},"Ancestors"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)(i.A,{to:"/TC57CIM/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo"))),(0,o.yg)("h3",{id:"descendents"},"Descendents"),(0,o.yg)("p",null,"No descendent classes"),(0,o.yg)("h2",{id:"associations"},"Associations"),(0,o.yg)("p",null,"None"))}m.isMDXComponent=!0}}]);