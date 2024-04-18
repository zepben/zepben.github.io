"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[1334],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,c=s["".concat(m,".").concat(d)]||s[d]||y[d]||l;return n?r.createElement(c,i(i({ref:t},g),{},{components:n})):r.createElement(c,i({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>g});var r=n(58168),a=(n(96540),n(15680)),l=n(75489);const i={title:"EnvironmentalAlert",hide_table_of_contents:!0,slug:"EnvironmentalAlert",sidebar_position:0},o=void 0,m={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",id:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",title:"EnvironmentalAlert",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/Environmental",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"EnvironmentalAlert",hide_table_of_contents:!0,slug:"EnvironmentalAlert",sidebar_position:0},sidebar:"docs",previous:{title:"Earthquake",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/Earthquake"},next:{title:"EnvironmentalAnalog",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog"}},p={},g=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],s={toc:g},y="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"An environmental alert issued by a provider or system."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"alertType"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"The type of the issued alert which is drawn from the specified alert type list.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cancelledDateTime"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,a.yg)("td",{parentName:"tr",align:null},"Time and date alert cancelled. Used only if alert is cancelled before it expires.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"headline"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"An abbreviated textual description of the alert issued.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Note: the full text of the alert appears in the .description attribute (inherited from IdentifiedObject)."),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"inEffect"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),(0,a.yg)("td",{parentName:"tr",align:null},"The interval for which this weather alert is in effect.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61968/Common/ActivityRecord",mdxType:"Link"},"ActivityRecord"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",mdxType:"Link"},"EnvironmentalAlert")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalDataProvider",mdxType:"Link"},"EnvironmentalDataProvider")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"EnvironmentalAlert"),(0,a.yg)("td",{parentName:"tr",align:null},"Alert issued by this environmental data provider."),(0,a.yg)("td",{parentName:"tr",align:null},"EnvironmentalDataProvider"),(0,a.yg)("td",{parentName:"tr",align:null},"Environmental data provider for this alert.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",mdxType:"Link"},"EnvironmentalAlert")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",mdxType:"Link"},"EnvironmentalLocationType")),(0,a.yg)("td",{parentName:"tr",align:null},"1..*"),(0,a.yg)("td",{parentName:"tr",align:null},"EnvironmentalAlert"),(0,a.yg)("td",{parentName:"tr",align:null},"Environmental alert applying to location of this type."),(0,a.yg)("td",{parentName:"tr",align:null},"EnvironmentalLocationKind"),(0,a.yg)("td",{parentName:"tr",align:null},"Type of location to which this environmental alert applies.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",mdxType:"Link"},"EnvironmentalAlert")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/Environmental/AlertTypeList",mdxType:"Link"},"AlertTypeList")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"EnvironmentalAlert"),(0,a.yg)("td",{parentName:"tr",align:null},"An alert whose type is drawn from this alert type list."),(0,a.yg)("td",{parentName:"tr",align:null},"AlertTypeList"),(0,a.yg)("td",{parentName:"tr",align:null},"The list of alert types from which the type of this alert is drawn.")))))}d.isMDXComponent=!0}}]);