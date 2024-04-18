"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[38311],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>p});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},y=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,p=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(p,l(l({ref:t},y),{},{components:a})):n.createElement(p,l({ref:t},y))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>y});var n=a(58168),i=(a(96540),a(15680)),r=a(75489);const l={title:"ExcIEEEAC5A",hide_table_of_contents:!0},s=void 0,o={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC5A",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC5A",title:"ExcIEEEAC5A",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC5A.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC5A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC5A",draft:!1,tags:[],version:"current",frontMatter:{title:"ExcIEEEAC5A",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"ExcIEEEAC4A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC4A"},next:{title:"ExcIEEEAC6A",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcIEEEAC6A"}},c={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],d={toc:y},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"IEEE 421.5-2005 type AC5A model. The model represents a simplified model for brushless excitation systems. The regulator is supplied from a source, such as a permanent magnet generator, which is not affected by system disturbances.  Unlike other AC models, this model uses loaded rather than open circuit exciter saturation data in the same way as it is used for the DC models.  Because the model has been widely implemented by the industry, it is sometimes used to represent other types of systems when either detailed data for them are not available or simplified models are required.\nReference: IEEE 421.5-2005, 6.5."),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"efd1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter voltage at which exciter saturation is defined (","<","i",">","E","<","/i",">","<","i",">","<","sub",">","FD1","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 5,6.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"efd2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter voltage at which exciter saturation is defined (","<","i",">","E","<","/i",">","<","i",">","<","sub",">","FD2","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 4,2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ka"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator gain (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","A","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 400.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ke"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter constant related to self-excited field (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">",").  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kf"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer gains (","<","i",">","K","<","/i",">","<","i",">","<","sub",">","F","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 0,03.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"seefd1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter saturation function value at the corresponding exciter voltage, ","<","i",">","E","<","/i",">","<","i",">","<","sub",">","FD1","<","/sub",">","<","/i",">"," (","<","i",">","S","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">","<","i",">","[E","<","/i",">","<","i",">","<","sub",">","FD1","<","/sub",">","<","/i",">","<","i",">]","<","/i",">",") (",">","= 0).  Typical value = 0,86.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"seefd2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter saturation function value at the corresponding exciter voltage, ","<","i",">","E","<","/i",">","<","i",">","<","sub",">","FD2","<","/sub",">","<","/i",">"," (","<","i",">","S","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">","<","i",">","[E","<","/i",">","<","i",">","<","sub",">","FD2","<","/sub",">","<","/i",">","<","i",">]","<","/i",">",") (",">","= 0).  Typical value = 0,5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ta"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Voltage regulator time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","A","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 0,02.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"te"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Exciter time constant, integration rate associated with exciter control (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","E","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 0,8.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tf1"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","F1","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tf2"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","F2","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tf3"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Excitation control system stabilizer time constant (","<","i",">","T","<","/i",">","<","i",">","<","sub",">","F3","<","/sub",">","<","/i",">",") (",">","= 0).  Typical value = 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmax"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Maximum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMAX","<","/sub",">","<","/i",">",") (",">"," 0).  Typical value = 7,3.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"vrmin"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Minimum voltage regulator output (","<","i",">","V","<","/i",">","<","i",">","<","sub",">","RMIN","<","/sub",">","<","/i",">",") (","<"," 0).  Typical value = -7,3.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/TC57CIM/IEC61970/Dynamics/StandardModels/ExcitationSystemDynamics/ExcitationSystemDynamics",mdxType:"Link"},"ExcitationSystemDynamics"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}u.isMDXComponent=!0}}]);