"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[96588],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},y=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=c(a),m=n,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||i;return a?r.createElement(d,l(l({ref:t},y),{},{components:a})):r.createElement(d,l({ref:t},y))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>y});var r=a(58168),n=(a(96540),a(15680)),i=a(75489);const l={title:"VisibilityLayer",hide_table_of_contents:!0},o=void 0,s={unversionedId:"cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",id:"cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",title:"VisibilityLayer",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer.mdx",sourceDirName:"cim100/TC57CIM/IEC61970/Base/DiagramLayout",slug:"/cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",draft:!1,tags:[],version:"current",frontMatter:{title:"VisibilityLayer",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"TextDiagramObject",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/DiagramLayout/TextDiagramObject"},next:{title:"ActivePower",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower"}},c={},y=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:y},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"class-description"},"Class Description"),(0,n.yg)("p",null,"Layers are typically used for grouping diagram objects according to themes and scales. Themes are used to display or hide certain information (e.g., lakes, borders), while scales are used for hiding or displaying information depending on the current zoom level (hide text when it is too small to be read, or when it exceeds the screen size). This is also called de-cluttering.\nCIM based graphics exchange supports an m:n relationship between diagram objects and layers. The importing system shall convert an m:n case into an appropriate 1:n representation if the importing system does not support m:n."),(0,n.yg)("h2",{id:"attributes"},"Attributes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"drawingOrder"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,n.yg)("td",{parentName:"tr",align:null},"The drawing order for this layer.  The higher the number, the later the layer and the objects within it are rendered.")))),(0,n.yg)("h2",{id:"relationships"},"Relationships"),(0,n.yg)("h3",{id:"ancestors"},"Ancestors"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject"))),(0,n.yg)("h3",{id:"descendents"},"Descendents"),(0,n.yg)("p",null,"No descendent classes"),(0,n.yg)("h2",{id:"associations"},"Associations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Target"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/DiagramLayout/VisibilityLayer",mdxType:"Link"},"VisibilityLayer")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/DiagramLayout/DiagramObject",mdxType:"Link"},"DiagramObject")),(0,n.yg)("td",{parentName:"tr",align:null},"0..*"),(0,n.yg)("td",{parentName:"tr",align:null},"VisibilityLayers"),(0,n.yg)("td",{parentName:"tr",align:null},"A diagram object can be part of multiple visibility layers."),(0,n.yg)("td",{parentName:"tr",align:null},"VisibleObjects"),(0,n.yg)("td",{parentName:"tr",align:null},"A visibility layer can contain one or more diagram objects.")))))}m.isMDXComponent=!0}}]);