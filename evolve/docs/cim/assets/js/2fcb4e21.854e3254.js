"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[82790],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>p});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},y=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=i,p=c["".concat(s,".").concat(u)]||c[u]||g[u]||r;return a?n.createElement(p,l(l({ref:t},y),{},{components:a})):n.createElement(p,l({ref:t},y))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6283:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>y});var n=a(58168),i=(a(96540),a(15680)),r=a(75489);const l={title:"ExcIEEEST3A",hide_table_of_contents:!0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST3A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST3A",title:"ExcIEEEST3A",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST3A.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST3A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST3A",draft:!1,tags:[],version:"current",frontMatter:{title:"ExcIEEEST3A",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ExcIEEEST2A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST2A"},next:{title:"ExcIEEEST4B",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEST4B"}},m={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],c={toc:y},g="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"IEEE 421.5-2005 type ST3A model.  Some static systems utilize a field voltage control loop to linearize the exciter control characteristic. This also makes the output independent of supply source variations until supply limitations are reached.  These systems utilize a variety of controlled-rectifier designs: full thyristor complements or hybrid bridges in either series or shunt configurations. The power source can consist of only a potential source, either fed from the machine terminals or from internal windings. Some designs can have compound power sources utilizing both machine potential and current. These power sources are represented as phasor combinations of machine terminal current and voltage and are accommodated by suitable parameters in model type ST3A which is represented by ExcIEEEST3A.\nReference: IEEE 421.5-2005, 7.3."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ka"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","A","<","/sub",">","<","/i",">",") (",">"," 0). This is parameter ","<","i",">","K","<","/i",">"," in the IEEE standard. Typical value = 200.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Rectifier loading factor proportional to commutating reactance (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","C","<","/sub",">","<","/i",">",") (",">","= 0). Typical value = 0,2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kg"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Feedback gain constant of the inner loop field regulator (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","G","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ki"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Potential circuit gain coefficient (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","I","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"km"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Forward gain constant of the inner loop field regulator (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","M","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 7,93.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kp"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Potential circuit gain coefficient (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","P","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 6,15.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ta"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","A","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tb"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","B","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 10.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","C","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"thetap"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/AngleDegrees",mdxType:"Link"},"AngleDegrees")),(0,i.yg)("td",{parentName:"tr",align:null},"Potential circuit phase angle (","<","i",">","thetap","<","/i",">",").  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tm"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Forward time constant of inner loop field regulator (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","M","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 0,4.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vbmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum excitation voltage (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","BMax","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 6,9.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vgmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum inner loop feedback voltage (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","GMax","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 5,8.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vimax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum voltage regulator input limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","IMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 0,2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vimin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum voltage regulator input limit (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","IMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -0,2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vmmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum inner loop output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","MMax","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vmmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum inner loop output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","MMin","<","/sub",">","<","/i",">",") (","<","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 10.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -10.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"xl"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Reactance associated with potential source (","<","i",">","X","<","/i",">","<","i",">","<","sub",">","L","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0,081.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}u.isMDXComponent=!0}}]);