"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[37294],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?i.createElement(g,o(o({ref:t},m),{},{components:n})):i.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var i=n(58168),r=(n(96540),n(15680)),a=n(75489);const o={title:"SeriesEquipmentDependentLimit",hide_table_of_contents:!0,slug:"SeriesEquipmentDependentLimit",sidebar_position:0},l=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",title:"SeriesEquipmentDependentLimit",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SeriesEquipmentDependentLimit",hide_table_of_contents:!0,slug:"SeriesEquipmentDependentLimit",sidebar_position:0},sidebar:"docs",previous:{title:"ScheduledVoltageLimitValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledVoltageLimitValue"},next:{title:"TemperatureDependentLimitPoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperatureDependentLimitPoint"}},p={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Limit based on most restrictive series equipment limit.\nA specification of  of equipment that determines the calculated operational limit values based upon other equipment and their ratings.  The most restrictive limit connected in series within the group is used.   The physical connection based on switch status for example may also impact which elements in the group are considered. Any equipment in the group that are presently connected in series with the equipment of the directly associated operational limit are used.   This provides a means to indicate which potentially series equipment limits are considered for a computed operational limit. The operational limit of the same operational limit type is assumed to be used from the grouped equipment.   It is also possible to make assumptions or calculations regarding how flow might split if the equipment is not simply in series."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(a.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("p",null,"No descendent classes"),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(a.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",mdxType:"Link"},"SeriesEquipmentDependentLimit")),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(a.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EquipmentLimitSeriesComponent",mdxType:"Link"},"EquipmentLimitSeriesComponent")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"SeriesEquipmentDependentLimit"),(0,r.yg)("td",{parentName:"tr",align:null},"Calculation in which the refernce to equipment applies."),(0,r.yg)("td",{parentName:"tr",align:null},"EquipmentLimitSeriesComponent"),(0,r.yg)("td",{parentName:"tr",align:null},"Equipment linkages that participates in the limit calculation.")))))}d.isMDXComponent=!0}}]);