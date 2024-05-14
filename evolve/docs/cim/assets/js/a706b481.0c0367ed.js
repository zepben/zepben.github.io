"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[93218],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),v=a,d=p["".concat(s,".").concat(v)]||p[v]||u[v]||i;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},17575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=t(58168),a=(t(96540),t(15680)),i=t(75489);const o={title:"EnvironmentalEvent",hide_table_of_contents:!0,slug:"EnvironmentalEvent",sidebar_position:0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",id:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",title:"EnvironmentalEvent",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/Environmental",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"EnvironmentalEvent",hide_table_of_contents:!0,slug:"EnvironmentalEvent",sidebar_position:0},sidebar:"docs",previous:{title:"EnvironmentalDiscrete",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalDiscrete"},next:{title:"EnvironmentalInformation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalInformation"}},c={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],p={toc:m},u="wrapper";function v(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"An environmental event to which one or more forecasts or observations may be tied and which may relate to or affect one or more assets.\nThis class is intended to be used as a means of grouping forecasts and/or observations and could be used for a variety of purposes, including:\n","<","ul",">","\n","<","li",">","to define a 'named' event like Hurricane Katrina and allow the historic (or forecast) values for phenomena and measurements (precipitation, temperature) across time to be  associated with it","<","/li",">","\n","<","li",">","to identify assets that were (or are forecast to be) affected by a phenomenon or set of measurements","<","/li",">","\n","<","/ul",">"),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC61968/Common/ActivityRecord",mdxType:"Link"},"ActivityRecord"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalEvent",mdxType:"Link"},"EnvironmentalEvent")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(i.A,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalInformation",mdxType:"Link"},"EnvironmentalInformation")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"EnvironmentalEvent"),(0,a.yg)("td",{parentName:"tr",align:null},"Environmental event to which this forecast or observation relates."),(0,a.yg)("td",{parentName:"tr",align:null},"EnvironmentalInformation"),(0,a.yg)("td",{parentName:"tr",align:null},"Forecast or observation related to this environmental event.")))))}v.isMDXComponent=!0}}]);