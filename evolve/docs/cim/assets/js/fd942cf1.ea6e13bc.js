"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[24916],{15680:(e,r,n)=>{n.d(r,{xA:()=>m,yg:()=>u});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),d=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},m=function(e){var r=d(e.components);return t.createElement(i.Provider,{value:r},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=d(n),p=a,u=g["".concat(i,".").concat(p)]||g[p]||c[p]||o;return n?t.createElement(u,l(l({ref:r},m),{},{components:n})):t.createElement(u,l({ref:r},m))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[g]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99789:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var t=n(58168),a=(n(96540),n(15680)),o=n(75489);const l={title:"PowerTransformerEnd",hide_table_of_contents:!0},s=void 0,i={unversionedId:"cim100/TC57CIM/IEC61970/Base/Wires/PowerTransformerEnd",id:"cim100/TC57CIM/IEC61970/Base/Wires/PowerTransformerEnd",title:"PowerTransformerEnd",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/Wires/PowerTransformerEnd.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/Wires",slug:"/cim100/TC57CIM/IEC61970/Base/Wires/PowerTransformerEnd",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PowerTransformerEnd",draft:!1,tags:[],version:"current",frontMatter:{title:"PowerTransformerEnd",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"PowerTransformer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/PowerTransformer"},next:{title:"ProtectedSwitch",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Wires/ProtectedSwitch"}},d={},m=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:m},c="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(c,(0,t.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"class-description"},"Class Description"),(0,a.yg)("p",null,"A PowerTransformerEnd is associated with each Terminal of a PowerTransformer.\nThe impedance values r, r0, x, and x0 of a PowerTransformerEnd represents a star equivalent as follows.\n1) for a two Terminal PowerTransformer the high voltage (TransformerEnd.endNumber=1) PowerTransformerEnd has non zero values on r, r0, x, and x0 while the low voltage (TransformerEnd.endNumber=2) PowerTransformerEnd has zero values for r, r0, x, and x0.  Parameters are always provided, even if the PowerTransformerEnds have the same rated voltage.  In this case, the parameters are provided at the PowerTransformerEnd which has TransformerEnd.endNumber equal to 1.\n2) for a three Terminal PowerTransformer the three PowerTransformerEnds represent a star equivalent with each leg in the star represented by r, r0, x, and x0 values.\n3) For a three Terminal transformer each PowerTransformerEnd shall have g, g0, b and b0 values corresponding to the no load losses distributed on the three PowerTransformerEnds. The total no load loss shunt impedances may also be placed at one of the PowerTransformerEnds, preferably the end numbered 1, having the shunt values on end 1.  This is the preferred way.\n4) for a PowerTransformer with more than three Terminals the PowerTransformerEnd impedance values cannot be used. Instead use the TransformerMeshImpedance or split the transformer into multiple PowerTransformers.\nEach PowerTransformerEnd must be contained by a PowerTransformer. Because a PowerTransformerEnd (or any other object) can not be contained by more than one parent, a PowerTransformerEnd can not have an association to an EquipmentContainer (Substation, VoltageLevel, etc)."),(0,a.yg)("h2",{id:"attributes"},"Attributes"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"b"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Susceptance",mdxType:"Link"},"Susceptance")),(0,a.yg)("td",{parentName:"tr",align:null},"Magnetizing branch susceptance (B mag).  The value can be positive or negative.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"b0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Susceptance",mdxType:"Link"},"Susceptance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence magnetizing branch susceptance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"connectionKind"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Wires/WindingConnection",mdxType:"Link"},"WindingConnection")),(0,a.yg)("td",{parentName:"tr",align:null},"Kind of connection.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"g"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Conductance",mdxType:"Link"},"Conductance")),(0,a.yg)("td",{parentName:"tr",align:null},"Magnetizing branch conductance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"g0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Conductance",mdxType:"Link"},"Conductance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence magnetizing branch conductance (star-model).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"phaseAngleClock"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,a.yg)("td",{parentName:"tr",align:null},"Terminal voltage phase angle displacement where 360 degrees are represented with clock hours. The valid values are 0 to 11. For example, for the secondary side end of a transformer with vector group code of 'Dyn11', specify the connection kind as wye with neutral and specify the phase angle of the clock as 11.  The clock value of the transformer end number specified as 1, is assumed to be zero.  Note the transformer end number is not assumed to be the same as the terminal sequence number.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"r"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,a.yg)("td",{parentName:"tr",align:null},"Resistance (star-model) of the transformer end.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The attribute shall be equal to or greater than zero for non-equivalent transformers."),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"r0"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Resistance",mdxType:"Link"},"Resistance")),(0,a.yg)("td",{parentName:"tr",align:null},"Zero sequence series resistance (star-model) of the transformer end.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ratedS"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/ApparentPower",mdxType:"Link"},"ApparentPower")),(0,a.yg)("td",{parentName:"tr",align:null},"Normal apparent power rating.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The attribute shall be a positive value. For a two-winding transformer the values for the high and low voltage sides shall be identical."),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ratedU"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Voltage",mdxType:"Link"},"Voltage")),(0,a.yg)("td",{parentName:"tr",align:null},"Rated voltage: phase-phase for three-phase windings, and either phase-phase or phase-neutral for single-phase windings.")))),(0,a.yg)("p",null,"A high voltage side, as given by TransformerEnd.endNumber, shall have a ratedU that is greater than or equal to ratedU for the lower voltage sides.\nThe attribute shall be a positive value. |\n| x | ",(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")," | Positive sequence series reactance (star-model) of the transformer end. |\n| x0 | ",(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Domain/Reactance",mdxType:"Link"},"Reactance")," | Zero sequence series reactance of the transformer end. |"),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"ancestors"},"Ancestors"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd"))),(0,a.yg)("h3",{id:"descendents"},"Descendents"),(0,a.yg)("p",null,"No descendent classes"),(0,a.yg)("h2",{id:"associations"},"Associations"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Target"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Wires/PowerTransformerEnd",mdxType:"Link"},"PowerTransformerEnd")),(0,a.yg)("td",{parentName:"tr",align:null},"0..*"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)(o.A,{to:"/TC57CIM/IEC61970/Base/Wires/PowerTransformer",mdxType:"Link"},"PowerTransformer")),(0,a.yg)("td",{parentName:"tr",align:null},"0..1"),(0,a.yg)("td",{parentName:"tr",align:null},"PowerTransformerEnd"),(0,a.yg)("td",{parentName:"tr",align:null},"The ends of this power transformer."),(0,a.yg)("td",{parentName:"tr",align:null},"PowerTransformer"),(0,a.yg)("td",{parentName:"tr",align:null},"The power transformer of this power transformer end.")))))}p.isMDXComponent=!0}}]);