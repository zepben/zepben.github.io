"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[39458],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>g});var i=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=i.createContext({}),d=function(e){var n=i.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(a),m=t,g=u["".concat(l,".").concat(m)]||u[m]||y[m]||r;return a?i.createElement(g,o(o({ref:n},s),{},{components:a})):i.createElement(g,o({ref:n},s))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:t,o[1]=c;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80818:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=a(58168),t=(a(96540),a(15680)),r=a(75489);const o={title:"SynchronousMachineEquivalentCircuit",hide_table_of_contents:!0,slug:"SynchronousMachineEquivalentCircuit",sidebar_position:0},c=void 0,l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",title:"SynchronousMachineEquivalentCircuit",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineEquivalentCircuit",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SynchronousMachineEquivalentCircuit",hide_table_of_contents:!0,slug:"SynchronousMachineEquivalentCircuit",sidebar_position:0},sidebar:"docs",previous:{title:"SynchronousMachineDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDynamics"},next:{title:"SynchronousMachineModelKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineModelKind"}},d={},s=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],u={toc:s},y="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(y,(0,i.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"class-description"},"Class Description"),(0,t.yg)("p",null,"The electrical equations for all variations of the synchronous models are based on the SynchronousEquivalentCircuit diagram for the direct- and quadrature- axes.\nEquations for conversion between equivalent circuit and time constant reactance forms:\n","<","i",">","Xd","<","/i",">"," = ","<","i",">","Xad ","<","/i",">","+","<","i",">"," Xl","<","/i",">","\n","<","i",">","X\u2019d","<","/i",">"," = ","<","i",">","Xl","<","/i",">"," + ","<","i",">","Xad","<","/i",">"," x ","<","i",">","Xfd","<","/i",">"," / (","<","i",">","Xad","<","/i",">"," + ","<","i",">","Xfd","<","/i",">",")\n","<","i",">","X\u201dd","<","/i",">"," = ","<","i",">","Xl","<","/i",">"," + ","<","i",">","Xad","<","/i",">"," x ","<","i",">","Xfd","<","/i",">"," x ","<","i",">","X1d","<","/i",">"," / (","<","i",">","Xad","<","/i",">"," x ","<","i",">","Xfd","<","/i",">"," + ","<","i",">","Xad","<","/i",">"," x ","<","i",">","X1d","<","/i",">"," + ","<","i",">","Xfd","<","/i",">"," x ","<","i",">","X1d","<","/i",">",")\n","<","i",">","Xq","<","/i",">"," = ","<","i",">","Xaq","<","/i",">"," + ","<","i",">","Xl","<","/i",">","\n","<","i",">","X\u2019q","<","/i",">"," = ","<","i",">","Xl","<","/i",">"," + ","<","i",">","Xaq","<","/i",">"," x ","<","i",">","X1q","<","/i",">"," / (","<","i",">","Xaq","<","/i",">"," + ","<","i",">","X1q","<","/i",">",")\n","<","i",">","X\u201dq","<","/i",">"," = ","<","i",">","Xl","<","/i",">"," + ","<","i",">","Xaq","<","/i",">"," x ","<","i",">","X1q","<","/i",">"," x ","<","i",">","X2q","<","/i",">"," / (","<","i",">","Xaq","<","/i",">"," x ","<","i",">","X1q","<","/i",">"," + ","<","i",">","Xaq","<","/i",">"," x ","<","i",">","X2q","<","/i",">"," + ","<","i",">","X1q","<","/i",">"," x ","<","i",">","X2q","<","/i",">",")\n","<","i",">","T\u2019do","<","/i",">"," = (","<","i",">","Xad","<","/i",">"," + ","<","i",">","Xfd","<","/i",">",") / (","<","i",">","omega","<","/i",">","<","i",">","<","sub",">","0","<","/sub",">","<","/i",">"," x ","<","i",">","Rfd","<","/i",">",")\n","<","i",">","T\u201ddo","<","/i",">"," = (","<","i",">","Xad","<","/i",">"," x ","<","i",">","Xfd","<","/i",">"," + ","<","i",">","Xad","<","/i",">"," x ","<","i",">","X1d","<","/i",">"," + ","<","i",">","Xfd","<","/i",">"," x ","<","i",">","X1d","<","/i",">",") / (","<","i",">","omega","<","/i",">","<","i",">","<","sub",">","0","<","/sub",">","<","/i",">"," x ","<","i",">","R1d","<","/i",">"," x (","<","i",">","Xad","<","/i",">"," + ","<","i",">","Xfd","<","/i",">",")\n","<","i",">","T\u2019qo","<","/i",">"," = (","<","i",">","Xaq","<","/i",">"," + ","<","i",">","X1q","<","/i",">",") / (","<","i",">","omega","<","/i",">","<","i",">","<","sub",">","0","<","/sub",">","<","/i",">"," x ","<","i",">","R1q","<","/i",">",")\n","<","i",">","T\u201dqo","<","/i",">"," = (","<","i",">","Xaq","<","/i",">"," x ","<","i",">","X1q","<","/i",">"," + ","<","i",">","Xaq","<","/i",">"," x ","<","i",">","X2q","<","/i",">"," + ","<","i",">","X1q","<","/i",">"," x ","<","i",">","X2q","<","/i",">",") / (","<","i",">","omega","<","/i",">","<","i",">","<","sub",">","0","<","/sub",">","<","/i",">"," x ","<","i",">","R2q","<","/i",">"," x (","<","i",">","Xaq","<","/i",">"," + ","<","i",">","X1q","<","/i",">",')\nSame equations using CIM attributes from SynchronousMachineTimeConstantReactance class on left of "=" and SynchronousMachineEquivalentCircuit class on right (except as noted):\nxDirectSync = xad + RotatingMachineDynamics.statorLeakageReactance\nxDirectTrans = RotatingMachineDynamics.statorLeakageReactance + xad x xfd / (xad + xfd)\nxDirectSubtrans = RotatingMachineDynamics.statorLeakageReactance + xad x xfd x x1d / (xad x xfd + xad x x1d + xfd x x1d)\nxQuadSync = xaq + RotatingMachineDynamics.statorLeakageReactance\nxQuadTrans = RotatingMachineDynamics.statorLeakageReactance + xaq x x1q / (xaq+ x1q)\nxQuadSubtrans = RotatingMachineDynamics.statorLeakageReactance + xaq x x1q x x2q / (xaq x x1q + xaq x x2q + x1q x x2q)\ntpdo = (xad + xfd) / (2 x pi x nominal frequency x rfd)\ntppdo = (xad x xfd + xad x x1d + xfd x x1d) / (2 x pi x nominal frequency x r1d x (xad + xfd)\ntpqo = (xaq + x1q) / (2 x pi x nominal frequency x r1q)\ntppqo = (xaq x x1q + xaq x x2q + x1q x x2q) / (2 x pi x nominal frequency x r2q x (xaq + x1q)\nThese are only valid for a simplified model where "Canay" reactance is zero.'),(0,t.yg)("h2",{id:"attributes"},"Attributes"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Name"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"r1d"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Direct-axis damper 1 winding resistance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"r1q"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Quadrature-axis damper 1 winding resistance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"r2q"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Quadrature-axis damper 2 winding resistance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"rfd"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Field winding resistance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"x1d"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Direct-axis damper 1 winding leakage reactance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"x1q"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Quadrature-axis damper 1 winding leakage reactance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"x2q"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Quadrature-axis damper 2 winding leakage reactance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"xad"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Direct-axis mutual reactance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"xaq"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Quadrature-axis mutual reactance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"xf1d"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Differential mutual (\u201cCanay\u201d) reactance.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"xfd"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),(0,t.yg)("td",{parentName:"tr",align:null},"Field winding leakage reactance.")))),(0,t.yg)("h2",{id:"relationships"},"Relationships"),(0,t.yg)("h3",{id:"ancestors"},"Ancestors"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)(r.A,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed",mdxType:"Link"},"SynchronousMachineDetailed"))),(0,t.yg)("h3",{id:"descendents"},"Descendents"),(0,t.yg)("p",null,"No descendent classes"),(0,t.yg)("h2",{id:"associations"},"Associations"),(0,t.yg)("p",null,"None"))}m.isMDXComponent=!0}}]);