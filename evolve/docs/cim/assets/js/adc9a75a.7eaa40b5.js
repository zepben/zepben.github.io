"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[22194],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>p});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},y=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=i,p=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?t.createElement(p,o(o({ref:n},y),{},{components:a})):t.createElement(p,o({ref:n},y))}));function p(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98562:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>y});var t=a(58168),i=(a(96540),a(15680)),r=a(75489);const o={title:"SynchronousMachineTimeConstantReactance",hide_table_of_contents:!0,slug:"SynchronousMachineTimeConstantReactance",sidebar_position:0},c=void 0,l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance",title:"SynchronousMachineTimeConstantReactance",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineTimeConstantReactance",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SynchronousMachineTimeConstantReactance",hide_table_of_contents:!0,slug:"SynchronousMachineTimeConstantReactance",sidebar_position:0},sidebar:"docs",previous:{title:"SynchronousMachineSimplified",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified"},next:{title:"CrossCompoundTurbineGovernorDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/CrossCompoundTurbineGovernorDynamics"}},s={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:y},m="wrapper";function d(e){let{components:n,...a}=e;return(0,i.yg)(m,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"class-description"},"Class Description"),(0,i.yg)("p",null,"Synchronous machine detailed modelling types are defined by the combination of the attributes SynchronousMachineTimeConstantReactance.modelType and SynchronousMachineTimeConstantReactance.rotorType.",(0,i.yg)("br",{parentName:"p"}),"\n","Parameter details:\n","<","ol",">","\n","<","li",">","The \u201cp\u201d in the time-related attribute names is a substitution for a \u201cprime\u201d in the usual parameter notation, e.g. tpdo refers to ","<","i",">","T'do","<","/i",">",".","<","/li",">","\n","<","li",">","The parameters used for models expressed in time constant reactance form include:","<","/li",">","\n","<","/ol",">"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"RotatingMachine.ratedS (","<","i",">","MVAbase","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.damping (","<","i",">","D","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.inertia (","<","i",">","H","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.saturationFactor (","<","i",">","S1","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.saturationFactor120 (","<","i",">","S12","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.statorLeakageReactance (","<","i",">","Xl","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"RotatingMachineDynamics.statorResistance (","<","i",">","Rs","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"SynchronousMachineTimeConstantReactance.ks (","<","i",">","Ks","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"SynchronousMachineDetailed.saturationFactorQAxis (","<","i",">","S1q","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"SynchronousMachineDetailed.saturationFactor120QAxis (","<","i",">","S12q","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},"SynchronousMachineDetailed.efdBaseRatio;"),(0,i.yg)("li",{parentName:"ul"},"SynchronousMachineDetailed.ifdBaseType;"),(0,i.yg)("li",{parentName:"ul"},".xDirectSync (","<","i",">","Xd","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".xDirectTrans (","<","i",">","X'd","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".xDirectSubtrans (","<","i",">","X''d","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".xQuadSync (","<","i",">","Xq","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".xQuadTrans (","<","i",">","X'q","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".xQuadSubtrans (","<","i",">","X''q","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".tpdo (","<","i",">","T'do","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".tppdo (","<","i",">","T''do","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".tpqo (","<","i",">","T'qo","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".tppqo (","<","i",">","T''qo","<","/i",">",");"),(0,i.yg)("li",{parentName:"ul"},".tc.")),(0,i.yg)("h2",{id:"attributes"},"Attributes"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ks"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),(0,i.yg)("td",{parentName:"tr",align:null},"Saturation loading correction factor (","<","i",">","Ks","<","/i",">",") (",">","= 0).  Used only by type J model.  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"modelType"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineModelKind",mdxType:"Link"},"SynchronousMachineModelKind")),(0,i.yg)("td",{parentName:"tr",align:null},"Type of synchronous machine model used in dynamic simulation applications.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"rotorType"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/RotorKind",mdxType:"Link"},"RotorKind")),(0,i.yg)("td",{parentName:"tr",align:null},"Type of rotor on physical machine.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tc"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Damping time constant for \u201cCanay\u201d reactance (",">","= 0).  Typical value = 0.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tpdo"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Direct-axis transient rotor time constant (","<","i",">","T'do","<","/i",">",") (",">"," SynchronousMachineTimeConstantReactance.tppdo).  Typical value = 5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tppdo"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Direct-axis subtransient rotor time constant (","<","i",">","T''do","<","/i",">",") (",">"," 0).  Typical value = 0,03.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tppqo"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Quadrature-axis subtransient rotor time constant (","<","i",">","T''qo","<","/i",">",") (",">"," 0). Typical value = 0,03.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"tpqo"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),(0,i.yg)("td",{parentName:"tr",align:null},"Quadrature-axis transient rotor time constant (","<","i",">","T'qo","<","/i",">",") (",">"," SynchronousMachineTimeConstantReactance.tppqo). Typical value = 0,5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"xDirectSubtrans"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Direct-axis subtransient reactance (unsaturated) (","<","i",">","X''d","<","/i",">",") (",">"," RotatingMachineDynamics.statorLeakageReactance).  Typical value = 0,2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"xDirectSync"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Direct-axis synchronous reactance (","<","i",">","Xd","<","/i",">",") (",">","= SynchronousMachineTimeConstantReactance.xDirectTrans). The quotient of a sustained value of that AC component of armature voltage that is produced by the total direct-axis flux due to direct-axis armature current and the value of the AC component of this current, the machine running at rated speed.  Typical value = 1,8.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"xDirectTrans"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Direct-axis transient reactance (unsaturated) (","<","i",">","X'd","<","/i",">",") (",">","= SynchronousMachineTimeConstantReactance.xDirectSubtrans).  Typical value = 0,5.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"xQuadSubtrans"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Quadrature-axis subtransient reactance (","<","i",">","X''q","<","/i",">",") (",">"," RotatingMachineDynamics.statorLeakageReactance).  Typical value = 0,2.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"xQuadSync"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Quadrature-axis synchronous reactance (","<","i",">","Xq","<","/i",">",") (",">","= SynchronousMachineTimeConstantReactance.xQuadTrans).",(0,i.yg)("br",null),"The ratio of the component of reactive armature voltage, due to the quadrature-axis component of armature current, to this component of current, under steady state conditions and at rated frequency.  Typical value = 1,6.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"xQuadTrans"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,i.yg)("td",{parentName:"tr",align:null},"Quadrature-axis transient reactance (","<","i",">","X'q","<","/i",">",") (",">","= SynchronousMachineTimeConstantReactance.xQuadSubtrans).  Typical value = 0,3.")))),(0,i.yg)("h2",{id:"relationships"},"Relationships"),(0,i.yg)("h3",{id:"ancestors"},"Ancestors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed",mdxType:"Link"},"SynchronousMachineDetailed"))),(0,i.yg)("h3",{id:"descendents"},"Descendents"),(0,i.yg)("p",null,"No descendent classes"),(0,i.yg)("h2",{id:"associations"},"Associations"),(0,i.yg)("p",null,"None"))}d.isMDXComponent=!0}}]);