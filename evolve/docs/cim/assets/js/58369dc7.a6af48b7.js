"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[5406],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,y=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return a?r.createElement(y,l(l({ref:t},p),{},{components:a})):r.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(58168),n=(a(96540),a(15680)),i=a(75489);const l={title:"AreaLoadBid",hide_table_of_contents:!0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid",title:"AreaLoadBid",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid",draft:!1,tags:[],version:"current",frontMatter:{title:"AreaLoadBid",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ActionRequest",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ActionRequest"},next:{title:"AttributeProperty",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AttributeProperty"}},c={},p=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:p},u="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"AreaLoadBid is not submitted by a market participant into the Markets. Instead, it is simply an aggregation of all LoadBids contained wtihin a specific SubControlArea. This entity should inherit from Bid for representation of the timeframe (startTime, stopTime) and the market type."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"demandBidMW"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,n.yg)("td",{parentName:"tr",align:null},"The Demand Bid Megawatt for the area case.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Attribute Usage: This is Scheduled demand MW in Day Ahead"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null})))),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Bid",mdxType:"Link"},"Bid"))),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("p",null,"No descendent classes"),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/AreaLoadBid",mdxType:"Link"},"AreaLoadBid")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"AreaLoadBid"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"LoadBid"),(0,n.yg)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);