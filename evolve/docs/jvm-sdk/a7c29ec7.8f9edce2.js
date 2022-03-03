(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(121)),o=a(122),c=a(123),s={id:"sdk-services",title:"CIM Services"},l={unversionedId:"sdk-services",id:"version-0.8.0/sdk-services",isDocsHomePage:!1,title:"CIM Services",description:"Now that you are able to create a data model, you need something to manage the objects.",source:"@site/versioned_docs/version-0.8.0/services.mdx",slug:"/sdk-services",permalink:"/evolve/docs/jvm-sdk/0.8.0/sdk-services",version:"0.8.0",sidebar:"version-0.8.0/someSidebar",previous:{title:"Data Model",permalink:"/evolve/docs/jvm-sdk/0.8.0/"},next:{title:"Tracing",permalink:"/evolve/docs/jvm-sdk/0.8.0/sdk-tracing"}},d=[{value:"Common Service functionality",id:"common-service-functionality",children:[{value:"Adding and Removing Objects",id:"adding-and-removing-objects",children:[]},{value:"Object Retrieval",id:"object-retrieval",children:[]}]},{value:"Network Service",id:"network-service",children:[]},{value:"Customer Service",id:"customer-service",children:[]},{value:"Diagram Service",id:"diagram-service",children:[]},{value:"Deferred References",id:"deferred-references",children:[]}],u={toc:d};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Now that you are able to create a data model, you need something to manage the objects.\nThis is where we provide a set of classes, which we call services, to do this."),Object(i.a)("p",null,"The services basically act as a container for your model. However, they provide some features which make it much nicer\nto use than a typical map / dictionary type data container to store your identified objects. The SDK provides the\nfollowing services"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"NetworkService"),Object(i.a)("li",{parentName:"ul"},"CustomerService"),Object(i.a)("li",{parentName:"ul"},"DiagramService")),Object(i.a)("p",null,"Each of these services manage a specific subset of identified objects. This subset will hopefully be somewhat obvious\nbased on the name of each service. If you would like to know why there a multiple services for different object types\nyou can read more about it ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#why-multiple-services"}),"here"),"."),Object(i.a)("h2",{id:"common-service-functionality"},"Common Service functionality"),Object(i.a)("p",null,"Because services work with ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"identified objects"),"\nthey can provide some common level of functionality. This functionality can be found in the base class ",Object(i.a)("inlineCode",{parentName:"p"},"BaseService"),"."),Object(i.a)("h3",{id:"adding-and-removing-objects"},"Adding and Removing Objects"),Object(i.a)("p",null,"As the different services support different subsets of identified objects, you can only add objects directly to a concrete\nservice reference. However, sometimes you wish to write some code that works with a set of different objects that are all supported\nby the one service. For example you might have some code that works only on ",Object(i.a)("inlineCode",{parentName:"p"},"ConductingEquipment")," and you want add or remove\nthese objects. Instead of having to cast to their derived type just to add/remove, ",Object(i.a)("inlineCode",{parentName:"p"},"tryAdd")," and ",Object(i.a)("inlineCode",{parentName:"p"},"tryRemove")," functions\nare provided that accept any identified object. These functions will do the grunt work and call the appropriate concrete\nadd/remove functions on the service. If the service does not support the provided identified object an exception is thrown."),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"NetworkService service = new NetworkService();\n\nBreaker breaker = new Breaker();\nservice.add(breaker);\n\n// If you don't have a reference to a leaf type, you can use the tryAdd function.\n// However this will throw if the service doesn't support the object type.\nIdentifiedObject idObjRef = new Junction();\nservice.tryAdd(idObjRef);\n"))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"val service = NetworkService()\n\nval breaker = Breaker()\nservice.add(breaker)\n\n// If you don't have a reference to a leaf type, you can use the tryAdd function.\n// However this will throw if the service doesn't support the object type.\nval idObjRef: IdentifiedObject = Junction()\nservice.tryAdd(idObjRef)\n")))),Object(i.a)("h3",{id:"object-retrieval"},"Object Retrieval"),Object(i.a)("p",null,"There are a few ways we provide to get objects back out of a service. The most obvious one is by mRID:"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'NetworkService service = NetworkService();\nservice.add(new Breaker("breaker1"));\nBreaker breaker = service.get("breaker1", Breaker.class)\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val service = NetworkService()\nservice.add(Breaker("breaker1"))\nval breaker = service.get<Breaker>("breaker1")\n')))),Object(i.a)("p",null,"You can also get collections of objects back out of the service. The power here is you can get objects from anywhere\nin the CIM class hierarchy. Due to the internal data structures used by the services, using these functions is more\nefficient than looping over all objects in the service and checking if they are of the required type."),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"NetworkService service = new NetworkService()\n\nservice.add(new Breaker())\nservice.add(new Junction())\n\n// All the following will contain both the breaker and the junction added to the service.\nservice.sequenceOf(ConductingEquipment.class)\nservice.listOf(ConductingEquipment.class)\nservice.setOf(ConductingEquipment.class)\n\n// This creates a map of mRID to the Identified Object\nservice.mapOf(ConductingEquipment.class)\n"))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"val service = NetworkService()\n\nservice.add(Breaker())\nservice.add(Junction())\n\n// All the following will contain both the breaker and the junction added to the service.\nservice.sequenceOf<ConductingEquipment>()\nservice.listOf<ConductingEquipment>()\nservice.setOf<ConductingEquipment>()\n\n// This creates a map of mRID to the Identified Object\nservice.mapOf<ConductingEquipment>()\n")))),Object(i.a)("h2",{id:"network-service"},"Network Service"),Object(i.a)("p",null,"The network service works with objects related to the physical asset model. That means all\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/PowerSystemResource"}),"PowerSystemResource")," types, but also\ndata related types such as ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Assets/AssetInfo"}),"AssetInfo")," and\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Common/Location"}),"Location"),"."),Object(i.a)("p",null,"The network service also generates an index between power system resources and terminals and their corresponding\nmeasurements. When you add a ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Meas/Measurement"}),"Measurement"),"\nto the service, it indexes it against the ",Object(i.a)("inlineCode",{parentName:"p"},"powerSystemResourceMRID")," or the ",Object(i.a)("inlineCode",{parentName:"p"},"terminalMRID")," associated with the measurement.\nYou can then get all measurements associated with a power system resource or a terminal via its mRID via the lookup on\nthe service:"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'NetworkService service = NetworkService();\n\nAnalog amps = new Analog();\namps.setPowerSystemResourceMRID("ASWITCH");\n\nAccumulator count = Accumulator();\ncount.setPowerSystemResourceMRID("ASWITCH");\n\nservice.add(amps);\nservice.add(count);\n\n// Gets both the analog and the accumulator\nservice.getMeasurements("ASWITCH", Measurement.class);\n\n// Will get just the analog\nservice.getMeasurements("ASWITCH", Analog.class);\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val service = NetworkService()\n\nval amps = Analog().apply { powerSystemResourceMRID = "ASWITCH" }\nval count = Accumulator().apply { powerSystemResourceMRID = "ASWITCH" }\n\nservice.add(amps)\nservice.add(count)\n\n// Gets both the analog and the accumulator\nservice.getMeasurements<Measurement>("ASWITCH")\n\n// Will get just the analog\nservice.getMeasurements<Analog>("ASWITCH")\n')))),Object(i.a)("p",null,"Note if you change the ",Object(i.a)("inlineCode",{parentName:"p"},"powerSystemResourceMRID")," or ",Object(i.a)("inlineCode",{parentName:"p"},"terminalMRID")," set on the measurement after it has been added to the\nservice, it is not re-indexed automatically. Currently you need to to remove the measurement and re-add it to the service.\nHowever this should rarely be an issue as a measurement is unlikely to ever change the device it is measuring, so as long\nas the association is set before adding to the service it is unlikely to be a problem."),Object(i.a)("h2",{id:"customer-service"},"Customer Service"),Object(i.a)("p",null,"The customer service works with objects related to customers and their agreements they may have with actors in the\nnetwork. At this point in time it provides no further specialised functionality."),Object(i.a)("h2",{id:"diagram-service"},"Diagram Service"),Object(i.a)("p",null,"The diagram service works with objects related to diagrams associated with identified objects.\nIt also provides a lookup to be able to get the\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"}),"DiagramObjects")," associated with any\nidentified object. Specifically:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"If the mRID is a diagram object, a list with just the diagram object is returned."),Object(i.a)("li",{parentName:"ul"},"If the mRID is a ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram"}),"Diagram")," all diagram\nobjects belonging to that diagram are returned."),Object(i.a)("li",{parentName:"ul"},"If the mRID is any other identified object, the diagram objects for that identified object are returned.")),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'DiagramService service = new DiagramService();\n\nDiagram aDiagram = new Diagram();\n\nDiagramObject do1 = DiagramObject();\ndo1.setDiagram(aDiagram);\ndo1.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nDiagramObject do2 = DiagramObject();\ndo2.setDiagram(aDiagram);\ndo2.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nDiagramObject do3 = DiagramObject();\ndo3.setDiagram(aDiagram);\ndo3.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n// Contains [do1]\nservice.getDiagramObjects(do1.mRID)\n\n// Contains [do1, do2, do3]\nservice.getDiagramObjects(aDiagram.mRID)\n\n// Contains [do1, do2]\nservice.getDiagramObjects("aSwitch")\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val service = DiagramService()\n\nval aDiagram = Diagram()\n\nval do1 = DiagramObject().apply {\n    diagram = aDiagram\n    identifiedObjectMRID = "aSwitch"\n    aDiagram.addDiagramObject(this)\n}\n\nval do2 = DiagramObject().apply {\n    diagram = aDiagram\n    identifiedObjectMRID = "aSwitch"\n    aDiagram.addDiagramObject(this)\n}\n\nval do3 = DiagramObject().apply {\n    diagram = aDiagram\n    aDiagram.addDiagramObject(this)\n}\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n// Contains [do1]\nservice.getDiagramObjects(do1.mRID)\n\n// Contains [do1, do2, do3]\nservice.getDiagramObjects(aDiagram.mRID)\n\n// Contains [do1, do2]\nservice.getDiagramObjects("aSwitch")\n')))),Object(i.a)("p",null,"This works by indexing the ",Object(i.a)("inlineCode",{parentName:"p"},"identifiedObjectMRID")," when the diagram object is added to the service. Note however,\nthat setting the ",Object(i.a)("inlineCode",{parentName:"p"},"identifiedObjectMRID")," after the diagram object is added will not cause it to be re-indexed automatically.\nCurrently you need to to remove the diagram object and re-add it to the service.\nThis should rarely be an issue however, as a diagram object is unlikely to ever change the identified object it is\nrepresenting, so as long as it is set before adding it to the service it is unlikely to be a problem."),Object(i.a)("h2",{id:"deferred-references"},"Deferred References"),Object(i.a)("p",null,"When creating an object to include in the model, you will often not have all referenced objects constructed, not have\nall the information to construct a reference immediately, or not have a reference handy to use. However, you will\ngenerally have the mRID of any referenced objects. To deal with this, the services provide a ",Object(i.a)("inlineCode",{parentName:"p"},"resolveOrDeferReference"),"\nfunction. This function will:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Resolve a reference immediately (in both directions if applicable) if the reference mRID object is already added to the service. "),Object(i.a)("li",{parentName:"ul"},"If the reference mRID is not added to the service, the request to resolve the reference is cached. When an object\nwith the referenced mRID is eventually added to the service, the reference is resolved at this time. ")),Object(i.a)("p",null,"Unresolved references can also be queried back out of the service. Let's see it all with a simple example:"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'NetworkService service = new NetworkService();\n\nFeeder feeder = new Feeder("f");\nservice.add(feeder)\n\nBreaker switch = new Breaker("b1");\nservice.add(switch);\n\n// As the switch is already added to the service, this will be resolved immediately.\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), switch.getMRID());\nSystem.out.println(feeder.getEquipment().contains(switch)); // true\n\n// Now if we try and resolve something not added it will be deferred\nJunction junction = new Junction("j1");\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), junction.getMRID());\nSystem.out.println(feeder.getEquipment().contains(junction)); // false\n\n// We can query the unresolved reference mRIDs back out of the service\nSystem.out.println(service.getUnresolvedReferenceMrids(Resolvers.equipment(feeder))); // ["j1"]\n// Or using the mrid of the destination object\nSystem.out.println(service.getUnresolvedReferencesTo(feeder.mrid)) // [UnresolvedReference(junction, toMrid="f")]\n// Or using the mrid of the source object\nSystem.out.println(service.getUnresolvedReferencesFrom(junction.mrid)) // [UnresolvedReference(feeder, toMrid="j1")]\n\n// When the object with the deferred mRID is added, the reference gets resolved\nservice.add(junction)\nSystem.out.println(feeder.getEquipment().contains(junction)) // true\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val service = NetworkService()\n\nval feeder = Feeder("f")\nservice.add(feeder)\n\nval switch = Breaker("b1")\nservice.add(switch)\n\n// As the switch is already added to the service, this will be resolved immediately.\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), switch.mRID)\nprintln(feeder.equipment.contains(switch)) // true\n\n// Now if we try and resolve something not added it will be deferred\nval junction = Junction("j1")\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), junction.mRID)\nprintln(feeder.equipment.contains(junction)) // false\n\n// We can query the unresolved reference mRIDs back out of the service\nprintln(service.getUnresolvedReferenceMrids(Resolvers.equipment(feeder))) // ["j1"]\n// Or using the mrid of the destination object\nprintln(service.getUnresolvedReferencesTo(feeder.mrid)) // [UnresolvedReference(junction, toMrid="f")]\n// Or using the mrid of the source object\nprintln(service.getUnresolvedReferencesFrom(junction.mrid)) // [UnresolvedReference(feeder, toMrid="j1")]\n\n// When the object with the deferred mRID is added, the reference gets resolved\nservice.add(junction)\nprintln(feeder.equipment.contains(junction)) // true\n')))),Object(i.a)("hr",null),Object(i.a)("h4",{id:"why-multiple-services"},"Why multiple services?"),Object(i.a)("p",null,'You might be asking "Why not just one service for all identified objects?". Admittedly, just having one would be easier\nto work with. However, as models can become large, having every object in a single service (and thus process) will mean\nyou need an ever increasing amount of RAM in your system. What we have done is separated out parts of the\ndata model into separate concerns, at what we feel are sensible boundary points. That is:'),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"The network service deals with models of the physical electricity network."),Object(i.a)("li",{parentName:"ul"},"The customer service deals with customers and their agreements with electricity providers\n(e.g their ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Customers/Tariff"}),"Tariff"),")."),Object(i.a)("li",{parentName:"ul"},"The diagram service deals with things related to representing networks as diagrams\n(see ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram"}),"Diagram")," and\n",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"}),"DiagramObject"),")."),Object(i.a)("li",{parentName:"ul"},"Once the platform supports measurement values, these values will be retrieved via a separate service rather than\ndirectly from measurement objects.")),Object(i.a)("p",null,"Ultimately there is a tradeoff between developer usability and model size feasibility. Hopefully you will find this\nis a reasonable trade off when working with large systems."))}m.isMDXComponent=!0},118:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},119:function(e,t,a){"use strict";var n=a(0),r=a(120);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},120:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(a),v=n,b=m["".concat(o,".").concat(v)]||m[v]||u[v]||i;return a?r.a.createElement(b,c({ref:t},l,{components:a})):r.a.createElement(b,c({ref:t},l))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},122:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(119),o=a(118),c=a(54),s=a.n(c),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,m=e.groupId,v=e.className,b=Object(i.a)(),p=b.tabGroupChoices,h=b.setTabGroupChoices,f=Object(n.useState)(c),j=f[0],g=f[1],O=n.Children.toArray(e.children);if(null!=m){var y=p[m];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&g(y)}var w=function(e){g(e),null!=m&&h(m,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},v)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},123:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);