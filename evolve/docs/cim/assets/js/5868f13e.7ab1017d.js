"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[59389],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(t),p=a,y=g["".concat(o,".").concat(p)]||g[p]||d[p]||l;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[g]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(96540),t(15680)),l=t(75489);const i={title:"CurrentScheduledInterchange",hide_table_of_contents:!0,slug:"CurrentScheduledInterchange",sidebar_position:0},c=void 0,o={unversionedId:"cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/CurrentScheduledInterchange",id:"cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/CurrentScheduledInterchange",title:"CurrentScheduledInterchange",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/CurrentScheduledInterchange.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling",slug:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/CurrentScheduledInterchange",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/CurrentScheduledInterchange",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"CurrentScheduledInterchange",hide_table_of_contents:!0,slug:"CurrentScheduledInterchange",sidebar_position:0},sidebar:"docs",previous:{title:"CurrentEmergencyScheduledInterchange",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/CurrentEmergencyScheduledInterchange"},next:{title:"CurtailmentProfile",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/CurtailmentProfile"}},u={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"Control area current net tie (scheduled interchange) sent to real time dispatch."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"currentNetTieMW"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,a.yg)("td",{parentName:"tr",align:null},"Current control area net tie MW (the sum of the tie line flows, i.e the sum of flows into and out of the control area), the current instantaneous scheduled interchange.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"useEmergencySchedule"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),(0,a.yg)("td",{parentName:"tr",align:null},"Use Emergency Schedule ",(0,a.yg)("br",null),"Attribute Usage: Emergency use indicator, false = Emergency Schedular OFF, true = Emergency Schedular ON.")))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("p",null,"No ancestor classes"),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/CurrentScheduledInterchange",mdxType:"Link"},"CurrentScheduledInterchange")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(l.A,{to:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/InternalControlArea",mdxType:"Link"},"InternalControlArea")),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"CurrentScheduledInterchange"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"InternalControlArea"),(0,a.yg)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);