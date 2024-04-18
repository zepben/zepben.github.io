"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[91908],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=u(a),c=l,d=g["".concat(o,".").concat(c)]||g[c]||p[c]||r;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(58168),l=(a(96540),a(15680)),r=a(75489);const i={title:"ValueAliasSet",hide_table_of_contents:!0},s=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",id:"cim100/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",title:"ValueAliasSet",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Meas/ValueAliasSet.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Meas",slug:"/cim100/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",draft:!1,tags:[],version:"current",frontMatter:{title:"ValueAliasSet",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Validity",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/Validity"},next:{title:"ValueToAlias",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Meas/ValueToAlias"}},u={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:m},p="wrapper";function c(e){let{components:t,...a}=e;return(0,l.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"class-description"},"Class Description"),(0,l.yg)("p",null,"Describes the translation of a set of values into a name and is intendend to facilitate custom translations. Each ValueAliasSet has a name, description etc. A specific Measurement may represent a discrete state like Open, Closed, Intermediate etc. This requires a translation from the MeasurementValue.value number to a string, e.g. 0-",">",'"Invalid", 1-',">",'"Open", 2-',">",'"Closed", 3-',">",'"Intermediate". Each ValueToAlias member in ValueAliasSet.Value describe a mapping for one particular value to a name.'),(0,l.yg)("h2",{id:"attributes"},"Attributes"),(0,l.yg)("p",null,"None"),(0,l.yg)("h2",{id:"relationships"},"Relationships"),(0,l.yg)("h3",{id:"ancestors"},"Ancestors"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,l.yg)("h3",{id:"descendents"},"Descendents"),(0,l.yg)("p",null,"No descendent classes"),(0,l.yg)("h2",{id:"associations"},"Associations"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,l.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,l.yg)("th",{parentName:"tr",align:null},"Target"),(0,l.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,l.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,l.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",mdxType:"Link"},"ValueAliasSet")),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Meas/ValueToAlias",mdxType:"Link"},"ValueToAlias")),(0,l.yg)("td",{parentName:"tr",align:null},"1..*"),(0,l.yg)("td",{parentName:"tr",align:null},"ValueAliasSet"),(0,l.yg)("td",{parentName:"tr",align:null},"The ValueAliasSet having the ValueToAlias mappings."),(0,l.yg)("td",{parentName:"tr",align:null},"Values"),(0,l.yg)("td",{parentName:"tr",align:null},"The ValueToAlias mappings included in the set.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",mdxType:"Link"},"ValueAliasSet")),(0,l.yg)("td",{parentName:"tr",align:null},"0..1"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Meas/Discrete",mdxType:"Link"},"Discrete")),(0,l.yg)("td",{parentName:"tr",align:null},"0..*"),(0,l.yg)("td",{parentName:"tr",align:null},"ValueAliasSet"),(0,l.yg)("td",{parentName:"tr",align:null},"The ValueAliasSet used for translation of a MeasurementValue.value to a name."),(0,l.yg)("td",{parentName:"tr",align:null},"Discretes"),(0,l.yg)("td",{parentName:"tr",align:null},"The Measurements using the set for translation.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",mdxType:"Link"},"ValueAliasSet")),(0,l.yg)("td",{parentName:"tr",align:null},"0..1"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Meas/Command",mdxType:"Link"},"Command")),(0,l.yg)("td",{parentName:"tr",align:null},"0..*"),(0,l.yg)("td",{parentName:"tr",align:null},"ValueAliasSet"),(0,l.yg)("td",{parentName:"tr",align:null},"The ValueAliasSet used for translation of a Control value to a name."),(0,l.yg)("td",{parentName:"tr",align:null},"Commands"),(0,l.yg)("td",{parentName:"tr",align:null},"The Commands using the set for translation.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Meas/ValueAliasSet",mdxType:"Link"},"ValueAliasSet")),(0,l.yg)("td",{parentName:"tr",align:null},"0..1"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Meas/RaiseLowerCommand",mdxType:"Link"},"RaiseLowerCommand")),(0,l.yg)("td",{parentName:"tr",align:null},"0..*"),(0,l.yg)("td",{parentName:"tr",align:null},"ValueAliasSet"),(0,l.yg)("td",{parentName:"tr",align:null},"The ValueAliasSet used for translation of a Control value to a name."),(0,l.yg)("td",{parentName:"tr",align:null},"RaiseLowerCommands"),(0,l.yg)("td",{parentName:"tr",align:null},"The Commands using the set for translation.")))))}c.isMDXComponent=!0}}]);