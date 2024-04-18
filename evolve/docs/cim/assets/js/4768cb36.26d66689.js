"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[8886],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>f});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),y=i,f=s["".concat(p,".").concat(y)]||s[y]||u[y]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},94810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(58168),i=(n(96540),n(15680)),r=n(75489);const o={title:"TemperaturePolynomialLimit",hide_table_of_contents:!0},l=void 0,p={unversionedId:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperaturePolynomialLimit",id:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperaturePolynomialLimit",title:"TemperaturePolynomialLimit",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperaturePolynomialLimit.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits",slug:"/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperaturePolynomialLimit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperaturePolynomialLimit",draft:!1,tags:[],version:"current",frontMatter:{title:"TemperaturePolynomialLimit",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"TemperatureDependentLimitTable",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/TemperatureDependentLimitTable"},next:{title:"WeatherStation",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/WeatherStation"}},c={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],s={toc:m},u="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"This describes the coefficients of a polynomial function that has temperature as input and calculates limit values as output."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"coefficient0"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"The polinomial coefficent of power 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"coefficient1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"The polinomial coefficent of power 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"coefficient2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"The polinomial coefficent of power 2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"coefficient3"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"The polinomial coefficent of power 3.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"coefficient4"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"The polinomial coefficent of power 4.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/InfIEC61970/InfOperationalLimits/EnvironmentalDependentLimit",mdxType:"Link"},"EnvironmentalDependentLimit"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}y.isMDXComponent=!0}}]);