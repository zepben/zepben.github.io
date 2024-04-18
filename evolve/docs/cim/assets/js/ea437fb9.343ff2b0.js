"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[17586],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),p=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,y=s["".concat(m,".").concat(u)]||s[u]||d[u]||r;return n?i.createElement(y,l(l({ref:t},c),{},{components:n})):i.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var i=n(58168),a=(n(96540),n(15680)),r=n(75489);const l={title:"LimitDependency",hide_table_of_contents:!0,slug:"LimitDependency",sidebar_position:0},o=void 0,m={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",title:"LimitDependency",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"LimitDependency",hide_table_of_contents:!0,slug:"LimitDependency",sidebar_position:0},sidebar:"docs",previous:{title:"EquipmentLimitSeriesComponent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EquipmentLimitSeriesComponent"},next:{title:"LimitScalingLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitScalingLimit"}},p={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,i.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A limit calculation model used to compute an operational limit based on external input such as temperature. These are intended to be shared among operational limits with the same calculation form that apply to a piece of equipment.."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EnvironmentalDependentLimit",mdxType:"Link"},"EnvironmentalDependentLimit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitScalingLimit",mdxType:"Link"},"LimitScalingLimit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/ScheduledLimitDependency",mdxType:"Link"},"ScheduledLimitDependency")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/SeriesEquipmentDependentLimit",mdxType:"Link"},"SeriesEquipmentDependentLimit"))),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Core/Equipment",mdxType:"Link"},"Equipment")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"LimitDependencyModel"),(0,a.yg)("td",{parentName:"tr",align:null},"Limit dependencymodels organized under this equipment as a means for organizing the model in a tree view."),(0,a.yg)("td",{parentName:"tr",align:null},"Equipment"),(0,a.yg)("td",{parentName:"tr",align:null},"The equipment for which this limit dependency model is organized under.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",mdxType:"Link"},"OperationalLimit")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},"LimitDependencyModel"),(0,a.yg)("td",{parentName:"tr",align:null},"The limit dependency models which are used to calculate this limit.   If no limit dependencies are specified then the native limit value is used."),(0,a.yg)("td",{parentName:"tr",align:null},"OperationalLimit"),(0,a.yg)("td",{parentName:"tr",align:null},"The operational limits to which this limit dependency model applies.")))))}u.isMDXComponent=!0}}]);