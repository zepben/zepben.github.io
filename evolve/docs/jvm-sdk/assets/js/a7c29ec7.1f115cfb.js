"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[9812],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),v=r,p=u["".concat(l,".").concat(v)]||u[v]||m[v]||i;return a?n.createElement(p,o(o({ref:t},d),{},{components:a})):n.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(4334);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),i=a(4334),o=a(2466),s=a(6550),l=a(1980),c=a(7392),d=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function v(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,s]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!v({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,c]=p({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=null!=l?l:u;return v({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!v({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);s(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var f=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==s&&(u(t),l(n))},v=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var n;const t=d.indexOf(e.currentTarget)+1;a=null!=(n=d[t])?n:d[0];break}case"ArrowLeft":{var r;const t=d.indexOf(e.currentTarget)-1;a=null!=(r=d[t])?r:d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:v,onClick:m},o,{className:(0,i.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},9744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(4866),o=a(5162);const s={id:"sdk-services",title:"CIM Services"},l=void 0,c={unversionedId:"sdk-services",id:"version-0.8.0/sdk-services",title:"CIM Services",description:"Now that you are able to create a data model, you need something to manage the objects.",source:"@site/versioned_docs/version-0.8.0/services.mdx",sourceDirName:".",slug:"/sdk-services",permalink:"/evolve/docs/jvm-sdk/0.8.0/sdk-services",draft:!1,tags:[],version:"0.8.0",frontMatter:{id:"sdk-services",title:"CIM Services"},sidebar:"version-0.8.0/someSidebar",previous:{title:"Data Model",permalink:"/evolve/docs/jvm-sdk/0.8.0/"},next:{title:"Tracing",permalink:"/evolve/docs/jvm-sdk/0.8.0/sdk-tracing"}},d={},u=[{value:"Common Service functionality",id:"common-service-functionality",level:2},{value:"Adding and Removing Objects",id:"adding-and-removing-objects",level:3},{value:"Object Retrieval",id:"object-retrieval",level:3},{value:"Network Service",id:"network-service",level:2},{value:"Customer Service",id:"customer-service",level:2},{value:"Diagram Service",id:"diagram-service",level:2},{value:"Deferred References",id:"deferred-references",level:2},{value:"Why multiple services?",id:"why-multiple-services",level:4}],m={toc:u},v="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(v,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that you are able to create a data model, you need something to manage the objects.\nThis is where we provide a set of classes, which we call services, to do this."),(0,r.kt)("p",null,"The services basically act as a container for your model. However, they provide some features which make it much nicer\nto use than a typical map / dictionary type data container to store your identified objects. The SDK provides the\nfollowing services"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NetworkService"),(0,r.kt)("li",{parentName:"ul"},"CustomerService"),(0,r.kt)("li",{parentName:"ul"},"DiagramService")),(0,r.kt)("p",null,"Each of these services manage a specific subset of identified objects. This subset will hopefully be somewhat obvious\nbased on the name of each service. If you would like to know why there a multiple services for different object types\nyou can read more about it ",(0,r.kt)("a",{parentName:"p",href:"#why-multiple-services"},"here"),"."),(0,r.kt)("h2",{id:"common-service-functionality"},"Common Service functionality"),(0,r.kt)("p",null,"Because services work with ",(0,r.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"},"identified objects"),"\nthey can provide some common level of functionality. This functionality can be found in the base class ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseService"),"."),(0,r.kt)("h3",{id:"adding-and-removing-objects"},"Adding and Removing Objects"),(0,r.kt)("p",null,"As the different services support different subsets of identified objects, you can only add objects directly to a concrete\nservice reference. However, sometimes you wish to write some code that works with a set of different objects that are all supported\nby the one service. For example you might have some code that works only on ",(0,r.kt)("inlineCode",{parentName:"p"},"ConductingEquipment")," and you want add or remove\nthese objects. Instead of having to cast to their derived type just to add/remove, ",(0,r.kt)("inlineCode",{parentName:"p"},"tryAdd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tryRemove")," functions\nare provided that accept any identified object. These functions will do the grunt work and call the appropriate concrete\nadd/remove functions on the service. If the service does not support the provided identified object an exception is thrown."),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"NetworkService service = new NetworkService();\n\nBreaker breaker = new Breaker();\nservice.add(breaker);\n\n// If you don't have a reference to a leaf type, you can use the tryAdd function.\n// However this will throw if the service doesn't support the object type.\nIdentifiedObject idObjRef = new Junction();\nservice.tryAdd(idObjRef);\n"))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val service = NetworkService()\n\nval breaker = Breaker()\nservice.add(breaker)\n\n// If you don't have a reference to a leaf type, you can use the tryAdd function.\n// However this will throw if the service doesn't support the object type.\nval idObjRef: IdentifiedObject = Junction()\nservice.tryAdd(idObjRef)\n")))),(0,r.kt)("h3",{id:"object-retrieval"},"Object Retrieval"),(0,r.kt)("p",null,"There are a few ways we provide to get objects back out of a service. The most obvious one is by mRID:"),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'NetworkService service = NetworkService();\nservice.add(new Breaker("breaker1"));\nBreaker breaker = service.get("breaker1", Breaker.class)\n'))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val service = NetworkService()\nservice.add(Breaker("breaker1"))\nval breaker = service.get<Breaker>("breaker1")\n')))),(0,r.kt)("p",null,"You can also get collections of objects back out of the service. The power here is you can get objects from anywhere\nin the CIM class hierarchy. Due to the internal data structures used by the services, using these functions is more\nefficient than looping over all objects in the service and checking if they are of the required type."),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"NetworkService service = new NetworkService()\n\nservice.add(new Breaker())\nservice.add(new Junction())\n\n// All the following will contain both the breaker and the junction added to the service.\nservice.sequenceOf(ConductingEquipment.class)\nservice.listOf(ConductingEquipment.class)\nservice.setOf(ConductingEquipment.class)\n\n// This creates a map of mRID to the Identified Object\nservice.mapOf(ConductingEquipment.class)\n"))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val service = NetworkService()\n\nservice.add(Breaker())\nservice.add(Junction())\n\n// All the following will contain both the breaker and the junction added to the service.\nservice.sequenceOf<ConductingEquipment>()\nservice.listOf<ConductingEquipment>()\nservice.setOf<ConductingEquipment>()\n\n// This creates a map of mRID to the Identified Object\nservice.mapOf<ConductingEquipment>()\n")))),(0,r.kt)("h2",{id:"network-service"},"Network Service"),(0,r.kt)("p",null,"The network service works with objects related to the physical asset model. That means all\n",(0,r.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/PowerSystemResource"},"PowerSystemResource")," types, but also\ndata related types such as ",(0,r.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Assets/AssetInfo"},"AssetInfo")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Common/Location"},"Location"),"."),(0,r.kt)("p",null,"The network service also generates an index between power system resources and terminals and their corresponding\nmeasurements. When you add a ",(0,r.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Meas/Measurement"},"Measurement"),"\nto the service, it indexes it against the ",(0,r.kt)("inlineCode",{parentName:"p"},"powerSystemResourceMRID")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"terminalMRID")," associated with the measurement.\nYou can then get all measurements associated with a power system resource or a terminal via its mRID via the lookup on\nthe service:"),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'NetworkService service = NetworkService();\n\nAnalog amps = new Analog();\namps.setPowerSystemResourceMRID("ASWITCH");\n\nAccumulator count = Accumulator();\ncount.setPowerSystemResourceMRID("ASWITCH");\n\nservice.add(amps);\nservice.add(count);\n\n// Gets both the analog and the accumulator\nservice.getMeasurements("ASWITCH", Measurement.class);\n\n// Will get just the analog\nservice.getMeasurements("ASWITCH", Analog.class);\n'))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val service = NetworkService()\n\nval amps = Analog().apply { powerSystemResourceMRID = "ASWITCH" }\nval count = Accumulator().apply { powerSystemResourceMRID = "ASWITCH" }\n\nservice.add(amps)\nservice.add(count)\n\n// Gets both the analog and the accumulator\nservice.getMeasurements<Measurement>("ASWITCH")\n\n// Will get just the analog\nservice.getMeasurements<Analog>("ASWITCH")\n')))),(0,r.kt)("p",null,"Note if you change the ",(0,r.kt)("inlineCode",{parentName:"p"},"powerSystemResourceMRID")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"terminalMRID")," set on the measurement after it has been added to the\nservice, it is not re-indexed automatically. Currently you need to to remove the measurement and re-add it to the service.\nHowever this should rarely be an issue as a measurement is unlikely to ever change the device it is measuring, so as long\nas the association is set before adding to the service it is unlikely to be a problem."),(0,r.kt)("h2",{id:"customer-service"},"Customer Service"),(0,r.kt)("p",null,"The customer service works with objects related to customers and their agreements they may have with actors in the\nnetwork. At this point in time it provides no further specialised functionality."),(0,r.kt)("h2",{id:"diagram-service"},"Diagram Service"),(0,r.kt)("p",null,"The diagram service works with objects related to diagrams associated with identified objects.\nIt also provides a lookup to be able to get the\n",(0,r.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"},"DiagramObjects")," associated with any\nidentified object. Specifically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the mRID is a diagram object, a list with just the diagram object is returned."),(0,r.kt)("li",{parentName:"ul"},"If the mRID is a ",(0,r.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram"},"Diagram")," all diagram\nobjects belonging to that diagram are returned."),(0,r.kt)("li",{parentName:"ul"},"If the mRID is any other identified object, the diagram objects for that identified object are returned.")),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'DiagramService service = new DiagramService();\n\nDiagram aDiagram = new Diagram();\n\nDiagramObject do1 = DiagramObject();\ndo1.setDiagram(aDiagram);\ndo1.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nDiagramObject do2 = DiagramObject();\ndo2.setDiagram(aDiagram);\ndo2.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nDiagramObject do3 = DiagramObject();\ndo3.setDiagram(aDiagram);\ndo3.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n// Contains [do1]\nservice.getDiagramObjects(do1.mRID)\n\n// Contains [do1, do2, do3]\nservice.getDiagramObjects(aDiagram.mRID)\n\n// Contains [do1, do2]\nservice.getDiagramObjects("aSwitch")\n'))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val service = DiagramService()\n\nval aDiagram = Diagram()\n\nval do1 = DiagramObject().apply {\n    diagram = aDiagram\n    identifiedObjectMRID = "aSwitch"\n    aDiagram.addDiagramObject(this)\n}\n\nval do2 = DiagramObject().apply {\n    diagram = aDiagram\n    identifiedObjectMRID = "aSwitch"\n    aDiagram.addDiagramObject(this)\n}\n\nval do3 = DiagramObject().apply {\n    diagram = aDiagram\n    aDiagram.addDiagramObject(this)\n}\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n// Contains [do1]\nservice.getDiagramObjects(do1.mRID)\n\n// Contains [do1, do2, do3]\nservice.getDiagramObjects(aDiagram.mRID)\n\n// Contains [do1, do2]\nservice.getDiagramObjects("aSwitch")\n')))),(0,r.kt)("p",null,"This works by indexing the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifiedObjectMRID")," when the diagram object is added to the service. Note however,\nthat setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifiedObjectMRID")," after the diagram object is added will not cause it to be re-indexed automatically.\nCurrently you need to to remove the diagram object and re-add it to the service.\nThis should rarely be an issue however, as a diagram object is unlikely to ever change the identified object it is\nrepresenting, so as long as it is set before adding it to the service it is unlikely to be a problem."),(0,r.kt)("h2",{id:"deferred-references"},"Deferred References"),(0,r.kt)("p",null,"When creating an object to include in the model, you will often not have all referenced objects constructed, not have\nall the information to construct a reference immediately, or not have a reference handy to use. However, you will\ngenerally have the mRID of any referenced objects. To deal with this, the services provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"resolveOrDeferReference"),"\nfunction. This function will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resolve a reference immediately (in both directions if applicable) if the reference mRID object is already added to the service. "),(0,r.kt)("li",{parentName:"ul"},"If the reference mRID is not added to the service, the request to resolve the reference is cached. When an object\nwith the referenced mRID is eventually added to the service, the reference is resolved at this time. ")),(0,r.kt)("p",null,"Unresolved references can also be queried back out of the service. Let's see it all with a simple example:"),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'NetworkService service = new NetworkService();\n\nFeeder feeder = new Feeder("f");\nservice.add(feeder)\n\nBreaker switch = new Breaker("b1");\nservice.add(switch);\n\n// As the switch is already added to the service, this will be resolved immediately.\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), switch.getMRID());\nSystem.out.println(feeder.getEquipment().contains(switch)); // true\n\n// Now if we try and resolve something not added it will be deferred\nJunction junction = new Junction("j1");\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), junction.getMRID());\nSystem.out.println(feeder.getEquipment().contains(junction)); // false\n\n// We can query the unresolved reference mRIDs back out of the service\nSystem.out.println(service.getUnresolvedReferenceMrids(Resolvers.equipment(feeder))); // ["j1"]\n// Or using the mrid of the destination object\nSystem.out.println(service.getUnresolvedReferencesTo(feeder.mrid)) // [UnresolvedReference(junction, toMrid="f")]\n// Or using the mrid of the source object\nSystem.out.println(service.getUnresolvedReferencesFrom(junction.mrid)) // [UnresolvedReference(feeder, toMrid="j1")]\n\n// When the object with the deferred mRID is added, the reference gets resolved\nservice.add(junction)\nSystem.out.println(feeder.getEquipment().contains(junction)) // true\n'))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val service = NetworkService()\n\nval feeder = Feeder("f")\nservice.add(feeder)\n\nval switch = Breaker("b1")\nservice.add(switch)\n\n// As the switch is already added to the service, this will be resolved immediately.\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), switch.mRID)\nprintln(feeder.equipment.contains(switch)) // true\n\n// Now if we try and resolve something not added it will be deferred\nval junction = Junction("j1")\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), junction.mRID)\nprintln(feeder.equipment.contains(junction)) // false\n\n// We can query the unresolved reference mRIDs back out of the service\nprintln(service.getUnresolvedReferenceMrids(Resolvers.equipment(feeder))) // ["j1"]\n// Or using the mrid of the destination object\nprintln(service.getUnresolvedReferencesTo(feeder.mrid)) // [UnresolvedReference(junction, toMrid="f")]\n// Or using the mrid of the source object\nprintln(service.getUnresolvedReferencesFrom(junction.mrid)) // [UnresolvedReference(feeder, toMrid="j1")]\n\n// When the object with the deferred mRID is added, the reference gets resolved\nservice.add(junction)\nprintln(feeder.equipment.contains(junction)) // true\n')))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"why-multiple-services"},"Why multiple services?"),(0,r.kt)("p",null,'You might be asking "Why not just one service for all identified objects?". Admittedly, just having one would be easier\nto work with. However, as models can become large, having every object in a single service (and thus process) will mean\nyou need an ever increasing amount of RAM in your system. What we have done is separated out parts of the\ndata model into separate concerns, at what we feel are sensible boundary points. That is:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The network service deals with models of the physical electricity network."),(0,r.kt)("li",{parentName:"ul"},"The customer service deals with customers and their agreements with electricity providers\n(e.g their ",(0,r.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Customers/Tariff"},"Tariff"),")."),(0,r.kt)("li",{parentName:"ul"},"The diagram service deals with things related to representing networks as diagrams\n(see ",(0,r.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram"},"Diagram")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"},"DiagramObject"),")."),(0,r.kt)("li",{parentName:"ul"},"Once the platform supports measurement values, these values will be retrieved via a separate service rather than\ndirectly from measurement objects.")),(0,r.kt)("p",null,"Ultimately there is a tradeoff between developer usability and model size feasibility. Hopefully you will find this\nis a reasonable trade off when working with large systems."))}p.isMDXComponent=!0}}]);