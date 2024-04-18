"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[64659],{15680:(t,e,n)=>{n.d(e,{xA:()=>m,yg:()=>y});var r=n(96540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),g=c(n),p=a,y=g["".concat(s,".").concat(p)]||g[p]||u[p]||i;return n?r.createElement(y,l(l({ref:e},m),{},{components:n})):r.createElement(y,l({ref:e},m))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[g]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93389:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(58168),a=(n(96540),n(15680)),i=n(75489);const l={title:"CustomerNotification",hide_table_of_contents:!0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61968/Customers/CustomerNotification",id:"cim100/TC57CIM/IEC61968/Customers/CustomerNotification",title:"CustomerNotification",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61968/Customers/CustomerNotification.mdx",sourceDirName:"cim100/TC57CIM/IEC61968/Customers",slug:"/cim100/TC57CIM/IEC61968/Customers/CustomerNotification",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerNotification",draft:!1,tags:[],version:"current",frontMatter:{title:"CustomerNotification",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"CustomerKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/CustomerKind"},next:{title:"IncidentHazard",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Customers/IncidentHazard"}},c={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:m},u="wrapper";function p(t){let{components:e,...n}=t;return(0,a.yg)(u,(0,r.A)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Conditions for notifying the customer about the changes in the status of their service (e.g., outage restore, estimated restoration time, tariff or service level change, etc.)"),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"contactType"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"Type of contact (e.g., phone, email, etc.).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"contactValue"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"Value of contact type (e.g., phone number, email address, etc.).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"earliestDateTimeToCall"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,a.yg)("td",{parentName:"tr",align:null},"Earliest date time to call the customer.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"latestDateTimeToCall"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),(0,a.yg)("td",{parentName:"tr",align:null},"Latest date time to call the customer.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"trigger"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Customers/NotificationTriggerKind",mdxType:"Link"},"NotificationTriggerKind")),(0,a.yg)("td",{parentName:"tr",align:null},"Trigger for this notification.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("p",null,"No ancestor classes"),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Customers/CustomerNotification",mdxType:"Link"},"CustomerNotification")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Customers/TroubleTicket",mdxType:"Link"},"TroubleTicket")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"Notification"),(0,a.yg)("td",{parentName:"tr",align:null},"Notification for this trouble ticket."),(0,a.yg)("td",{parentName:"tr",align:null},"TroubleTickets"),(0,a.yg)("td",{parentName:"tr",align:null},"All trouble tickets with this notification.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Customers/CustomerNotification",mdxType:"Link"},"CustomerNotification")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Customers/Customer",mdxType:"Link"},"Customer")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerNotifications"),(0,a.yg)("td",{parentName:"tr",align:null},"All notifications required by this customer."),(0,a.yg)("td",{parentName:"tr",align:null},"Customer"),(0,a.yg)("td",{parentName:"tr",align:null},"Customer requiring this notification.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Customers/CustomerNotification",mdxType:"Link"},"CustomerNotification")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/TC57CIM/IEC61968/Operations/Incident",mdxType:"Link"},"Incident")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"CustomerNotifications"),(0,a.yg)("td",{parentName:"tr",align:null},"All notifications for a customer related to the status change of this incident."),(0,a.yg)("td",{parentName:"tr",align:null},"Incident"),(0,a.yg)("td",{parentName:"tr",align:null},"Incident as a subject of this customer notification.")))))}p.isMDXComponent=!0}}]);