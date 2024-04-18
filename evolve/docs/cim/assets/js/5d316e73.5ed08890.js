"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[46849],{15680:(e,t,i)=>{i.d(t,{xA:()=>s,yg:()=>y});var a=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(i),g=n,y=c["".concat(p,".").concat(g)]||c[g]||u[g]||r;return i?a.createElement(y,l(l({ref:t},s),{},{components:i})):a.createElement(y,l({ref:t},s))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<r;m++)l[m]=i[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},24751:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=i(58168),n=(i(96540),i(15680)),r=i(75489);const l={title:"OperationalLimit",hide_table_of_contents:!0},o=void 0,p={unversionedId:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",id:"cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",title:"OperationalLimit",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/OperationalLimits",slug:"/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",draft:!1,tags:[],version:"current",frontMatter:{title:"OperationalLimit",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"CurrentLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/CurrentLimit"},next:{title:"OperationalLimitDirectionKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitDirectionKind"}},m={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:s},u="wrapper";function g(e){let{components:t,...i}=e;return(0,n.yg)(u,(0,a.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"A value and normal value associated with a specific kind of limit.\nThe sub class value and normalValue attributes vary inversely to the associated OperationalLimitType.acceptableDuration (acceptableDuration for short).",(0,n.yg)("br",{parentName:"p"}),"\n","If a particular piece of equipment has multiple operational limits of the same kind (apparent power, current, etc.), the limit with the greatest acceptableDuration shall have the smallest limit value and the limit with the smallest acceptableDuration shall have the largest limit value.  Note: A large current can only be allowed to flow through a piece of equipment for a short duration without causing damage, but a lesser current can be allowed to flow for a longer duration."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("p",null,"None"),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/ActivePowerLimit",mdxType:"Link"},"ActivePowerLimit")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/ApparentPowerLimit",mdxType:"Link"},"ApparentPowerLimit")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/CurrentLimit",mdxType:"Link"},"CurrentLimit")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/VoltageLimit",mdxType:"Link"},"VoltageLimit"))),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",mdxType:"Link"},"OperationalLimit")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitType",mdxType:"Link"},"OperationalLimitType")),(0,n.yg)("td",{parentName:"tr",align:null},"0..1"),(0,n.yg)("td",{parentName:"tr",align:null},"OperationalLimit"),(0,n.yg)("td",{parentName:"tr",align:null},"The operational limits associated with this type of limit."),(0,n.yg)("td",{parentName:"tr",align:null},"OperationalLimitType"),(0,n.yg)("td",{parentName:"tr",align:null},"The limit type associated with this limit.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",mdxType:"Link"},"OperationalLimit")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimitSet",mdxType:"Link"},"OperationalLimitSet")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"OperationalLimitValue"),(0,n.yg)("td",{parentName:"tr",align:null},"Values of equipment limits."),(0,n.yg)("td",{parentName:"tr",align:null},"OperationalLimitSet"),(0,n.yg)("td",{parentName:"tr",align:null},"The limit set to which the limit values belong.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",mdxType:"Link"},"OperationalLimit")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitDependency",mdxType:"Link"},"LimitDependency")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"OperationalLimit"),(0,n.yg)("td",{parentName:"tr",align:null},"The operational limits to which this limit dependency model applies."),(0,n.yg)("td",{parentName:"tr",align:null},"LimitDependencyModel"),(0,n.yg)("td",{parentName:"tr",align:null},"The limit dependency models which are used to calculate this limit.   If no limit dependencies are specified then the native limit value is used.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/OperationalLimits/OperationalLimit",mdxType:"Link"},"OperationalLimit")),(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(r.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/LimitScalingLimit",mdxType:"Link"},"LimitScalingLimit")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"SourceOperationalLimit"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"LimitScalingLimit"),(0,n.yg)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);