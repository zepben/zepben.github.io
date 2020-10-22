(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(2),i=a(6),r=(a(0),a(77)),c=a(79),o=a(80),s={id:"sdk-services",title:"CIM Services"},l={unversionedId:"sdk-services",id:"sdk-services",isDocsHomePage:!1,title:"CIM Services",description:"Now that you are able to create a data model, you need something to manage the objects.",source:"@site/docs\\services.mdx",slug:"/sdk-services",permalink:"/evolve/docs/evolve-sdk-jvm/sdk-services",editUrl:"https://github.com/zepben/docs/services.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Data Model",permalink:"/evolve/docs/evolve-sdk-jvm/"},next:{title:"Tracing",permalink:"/evolve/docs/evolve-sdk-jvm/sdk-tracing"}},d=[{value:"Common Service functionality",id:"common-service-functionality",children:[{value:"Adding and Removing Objects",id:"adding-and-removing-objects",children:[]},{value:"Object Retrieval",id:"object-retrieval",children:[]}]},{value:"Network Service",id:"network-service",children:[]},{value:"Customer Service",id:"customer-service",children:[]},{value:"Diagram Service",id:"diagram-service",children:[]},{value:"Deferred References",id:"deferred-references",children:[]}],b={rightToc:d};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that you are able to create a data model, you need something to manage the objects.\nThis is where we provide a set of classes, which we call services, to do this."),Object(r.b)("p",null,"The services basically act as a container for your model. However, they provide some features which make it much nicer\nto use than a typical map / dictionary type data container to store your identified objects. The SDK provides the\nfollowing services"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"NetworkService"),Object(r.b)("li",{parentName:"ul"},"CustomerService"),Object(r.b)("li",{parentName:"ul"},"DiagramService")),Object(r.b)("p",null,"Each of these services manage a specific subset of identified objects. This subset will hopefully be somewhat obvious\nbased on the name of each service. If you would like to know why there a multiple services for different objects types\nyou can read more about it ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#why-multiple-services"}),"here"),"."),Object(r.b)("h2",{id:"common-service-functionality"},"Common Service functionality"),Object(r.b)("p",null,"Because services work with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.bitbucket.io/cim/cim100/iec61970/base/core/identifiedobject/"}),"identified objects"),"\nthey can provide some common level of functionality. This functionality can be found in the base class ",Object(r.b)("inlineCode",{parentName:"p"},"BaseService"),"."),Object(r.b)("h3",{id:"adding-and-removing-objects"},"Adding and Removing Objects"),Object(r.b)("p",null,"As the different services support different subsets of identified objects, you can only add objects directly to a concrete\nservice reference. However, sometimes you wish to write some code that works with a set of different objects that are all supported\nby the one service. For example you might have some code that works only on ",Object(r.b)("inlineCode",{parentName:"p"},"ConductingEquipment")," and you want add or remove\nthese objects. Instead of having to cast to their derived type just to add/remove, ",Object(r.b)("inlineCode",{parentName:"p"},"tryAdd")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tryRemove")," functions\nare provided that accept any identified object. These functions will do the grunt work and call the appropriate concrete\nadd/remove functions on the service. If the service does not support the provided identified object an exception is thrown."),Object(r.b)(c.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"NetworkService service = new NetworkService();\n\nBreaker breaker = new Breaker();\nservice.add(breaker);\n\n// If you don't have a reference to a leaf type, you can use the tryAdd function.\n// However this will throw if the service doesn't support the object type.\nIdentifiedObject idObjRef = new Junction();\nservice.tryAdd(idObjRef);\n"))),Object(r.b)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"val service = NetworkService()\n\nval breaker = Breaker()\nservice.add(breaker)\n\n// If you don't have a reference to a leaf type, you can use the tryAdd function.\n// However this will throw if the service doesn't support the object type.\nval idObjRef: IdentifiedObject = Junction()\nservice.tryAdd(idObjRef)\n")))),Object(r.b)("h3",{id:"object-retrieval"},"Object Retrieval"),Object(r.b)("p",null,"There are a few ways we provide to get objects back out of a service. The most obvious one is by MRID:"),Object(r.b)(c.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'NetworkService service = NetworkService();\nservice.add(new Breaker("breaker1"));\nBreaker breaker = service.get("breaker1", Breaker.class)\n'))),Object(r.b)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val service = NetworkService()\nservice.add(Breaker("breaker1"))\nval breaker = service.get<Breaker>("breaker1")\n')))),Object(r.b)("p",null,"You can also get collections of objects back out of the service. The power here is you can get objects from anywhere\nin the CIM class hierarchy. Due to the internal data structures used by the services, using these functions is more\nefficient than looping over all objects in the service and checking if they are of the required type."),Object(r.b)(c.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"NetworkService service = new NetworkService()\n\nservice.add(new Breaker())\nservice.add(new Junction())\n\n// All the following will contain both the breaker and the junction added to the service.\nservice.sequenceOf(ConductingEquipment.class)\nservice.listOf(ConductingEquipment.class)\nservice.setOf(ConductingEquipment.class)\n\n// This creates a map of MRID to the Identified Object\nservice.mapOf(ConductingEquipment.class)\n"))),Object(r.b)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"val service = NetworkService()\n\nservice.add(Breaker())\nservice.add(Junction())\n\n// All the following will contain both the breaker and the junction added to the service.\nservice.sequenceOf<ConductingEquipment>()\nservice.listOf<ConductingEquipment>()\nservice.setOf<ConductingEquipment>()\n\n// This creates a map of MRID to the Identified Object\nservice.mapOf<ConductingEquipment>()\n")))),Object(r.b)("h2",{id:"network-service"},"Network Service"),Object(r.b)("p",null,"The network service works with objects related to the physical asset model. That means all\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61970/base/core/powersystemresource/"}),"PowerSystemResource")," types, but also\ndata related types such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61968/assets/assetinfo/"}),"AssetInfo")," and\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61968/common/location/"}),"Location"),"."),Object(r.b)("p",null,"The network service also generates an index between power system resources and terminals and their corresponding\nmeasurements. When you add a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61970/base/meas/measurement/"}),"Measurement"),"\nto the service, it indexes it against the ",Object(r.b)("inlineCode",{parentName:"p"},"powerSystemResourceMRID")," or the ",Object(r.b)("inlineCode",{parentName:"p"},"terminalMRID")," associated with the measurement.\nYou can then get all measurements associated with a power system resource or a terminal via its MRID via the lookup on\nthe service:"),Object(r.b)(c.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'NetworkService service = NetworkService();\n\nAnalog amps = new Analog();\namps.setPowerSystemResourceMRID("ASWITCH");\n\nAccumulator count = Accumulator();\ncount.setPowerSystemResourceMRID("ASWITCH");\n\nservice.add(amps);\nservice.add(count);\n\n// Gets both the analog and the accumulator\nservice.getMeasurements("ASWITCH", Measurement.class);\n\n// Will get just the analog\nservice.getMeasurements("ASWITCH", Analog.class);\n'))),Object(r.b)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val service = NetworkService()\n\nval amps = Analog().apply { powerSystemResourceMRID = "ASWITCH" }\nval count = Accumulator().apply { powerSystemResourceMRID = "ASWITCH" }\n\nservice.add(amps)\nservice.add(count)\n\n// Gets both the analog and the accumulator\nservice.getMeasurements<Measurement>("ASWITCH")\n\n// Will get just the analog\nservice.getMeasurements<Analog>("ASWITCH")\n')))),Object(r.b)("p",null,"Note if you change the ",Object(r.b)("inlineCode",{parentName:"p"},"powerSystemResourceMRID")," or ",Object(r.b)("inlineCode",{parentName:"p"},"terminalMRID")," set on the measurement after it has been added to the\nservice, it is not re-indexed automatically. Currently you need to to remove the measurement and re-add it to the service.\nHowever this should rarely be an issue as a measurement is unlikely to ever change the device it is measuring, so as long\nas the association is set before adding to the service it is unlikely to be a problem."),Object(r.b)("h2",{id:"customer-service"},"Customer Service"),Object(r.b)("p",null,"The customer service work with objects related to customers and their agreements they may have with actors in the\nnetwork. At this point in time it provides no further specialised functionality."),Object(r.b)("h2",{id:"diagram-service"},"Diagram Service"),Object(r.b)("p",null,"The diagram service work with objects related to diagrams associated with identified objects.\nIt also provides a lookup to be able to get the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61970/base/diagramlayout/diagramobject/"}),"DiagramObjects")," associated with any\nidentified object. Specifically:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the MRID is a diagram object, a list with just the diagram object is returned."),Object(r.b)("li",{parentName:"ul"},"If the MRID is a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61970/base/diagramlayout/diagram/"}),"Digram")," all diagram\nobjects belonging to that diagram are returned."),Object(r.b)("li",{parentName:"ul"},"If the MRID is any other identified object, the diagram objects for that identified objects are returned.")),Object(r.b)(c.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'DiagramService service = new DiagramService();\n\nDiagram aDiagram = new Diagram();\n\nDiagramObject do1 = DiagramObject();\ndo1.setDiagram(aDiagram);\ndo1.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nDiagramObject do2 = DiagramObject();\ndo2.setDiagram(aDiagram);\ndo2.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nDiagramObject do3 = DiagramObject();\ndo3.setDiagram(aDiagram);\ndo3.identifiedObjectMRID = "aSwitch";\naDiagram.addDiagramObject(this);\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n// Contains [do1]\nservice.getDiagramObjects(do1.mRID)\n\n// Contains [do1, do2, do3]\nservice.getDiagramObjects(aDiagram.mRID)\n\n// Contains [do1, do2]\nservice.getDiagramObjects("aSwitch")\n'))),Object(r.b)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val service = DiagramService()\n\nval aDiagram = Diagram()\n\nval do1 = DiagramObject().apply {\n    diagram = aDiagram\n    identifiedObjectMRID = "aSwitch"\n    aDiagram.addDiagramObject(this)\n}\n\nval do2 = DiagramObject().apply {\n    diagram = aDiagram\n    identifiedObjectMRID = "aSwitch"\n    aDiagram.addDiagramObject(this)\n}\n\nval do3 = DiagramObject().apply {\n    diagram = aDiagram\n    aDiagram.addDiagramObject(this)\n}\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n// Contains [do1]\nservice.getDiagramObjects(do1.mRID)\n\n// Contains [do1, do2, do3]\nservice.getDiagramObjects(aDiagram.mRID)\n\n// Contains [do1, do2]\nservice.getDiagramObjects("aSwitch")\n')))),Object(r.b)("p",null,"This works by indexing the ",Object(r.b)("inlineCode",{parentName:"p"},"identifiedObjectMRID")," when the diagram object is added to the service. Note however,\nthat setting the ",Object(r.b)("inlineCode",{parentName:"p"},"identifiedObjectMRID")," after the diagram object is added will not cause it to be re-indexed automatically.\nCurrently you need to to remove the diagram object and re-add it to the service.\nThis should rarely be an issue however, as a diagram object is unlikely to ever change the identified object it is\nrepresenting, so as long as it is set before adding it to the service it is unlikely to be a problem."),Object(r.b)("h2",{id:"deferred-references"},"Deferred References"),Object(r.b)("p",null,"When creating an object to include in the model, you will often not have all referenced objects constructed, not have\nall the information to construct a reference immediately, or not have a reference handy to use. However, you will\ngenerally have the MRID of any referenced objects. To deal with this, the services provide a ",Object(r.b)("inlineCode",{parentName:"p"},"resolveOrDeferReference"),"\nfunction. This function will:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Resolve a reference immediately (in both direcitons is applicable) if the reference MRID object is already added to the service. "),Object(r.b)("li",{parentName:"ul"},"If the reference MRID is not added to the service, the request to resolve the reference is chached. When an object\nwith the referenced MRID is eventually added to the service, the reference is resolved at this time. ")),Object(r.b)("p",null,"Unresolved references can also be queried back out of the service. Let's see all with a simple example:"),Object(r.b)(c.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"NetworkService service = new NetworkService();\n\nFeeder feeder = new Feeder();\nservice.add(feeder)\n\nBreaker switch = new Breaker();\nservice.add(switch);\n\n// As the switch is already added to the service, this will be resolved immediately.\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), switch.getMRID());\nSystem.out.println(feeder.getEquipment().contains(switch)); // true\n\n// Now if we try and resolve something not added it will be deferred\nJunction junction = new Junction();\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), junction.getMRID());\nSystem.out.println(feeder.getEquipment().contains(junction)); // false\n\n// We can query the unresolved reference MRIDs back out of the service\nSystem.out.println(service.getUnresolvedReferenceMrids(Resolvers.equipment(feeder))); // [junction]\n\n// When the object with the deferred MRID is added, the reference gets resolved\nservice.add(junction)\nSystem.out.println(feeder.getEquipment().contains(junction)) // true\n"))),Object(r.b)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"val service = NetworkService()\n\nval feeder = Feeder()\nservice.add(feeder)\n\nval switch = Breaker()\nservice.add(switch)\n\n// As the switch is already added to the service, this will be resolved immediately.\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), switch.mRID)\nprintln(feeder.equipment.contains(switch)) // true\n\n// Now if we try and resolve something not added it will be deferred\nval junction = Junction()\nservice.resolveOrDeferReference(Resolvers.equipment(feeder), junction.mRID)\nprintln(feeder.equipment.contains(junction)) // false\n\n// We can query the unresolved reference MRIDs back out of the service\nprintln(service.getUnresolvedReferenceMrids(Resolvers.equipment(feeder))) // [junction]\n\n// When the object with the deferred MRID is added, the reference gets resolved\nservice.add(junction)\nprintln(feeder.equipment.contains(junction)) // true\n")))),Object(r.b)("hr",null),Object(r.b)("h4",{id:"why-multiple-services"},"Why multiple services?"),Object(r.b)("p",null,'You might be asking "Why not just one service for all identified objects?". Admittedly, just having one would be easier\nto work with. However, as models can become large, having every object in a single service (and thus process) will mean\nyou need an ever increasing amount of RAM in your system. What we have done is separated out parts of the\ndata model into separate concerns, at what we feel are sensible boundary points. That is:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The network service deals with models of the physical electricity network."),Object(r.b)("li",{parentName:"ul"},"The customer service deals with customers and their agreements with electricity providers\n(e.g their ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61968/customers/tariff/"}),"Tariff"),")."),Object(r.b)("li",{parentName:"ul"},"The diagram service deals with things related to representing networks as diagrams\n(see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61970/base/diagramlayout/diagram/"}),"Diagram")," and\n",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.bitbucket.io/cim/evolve/iec61970/base/diagramlayout/diagramobject/"}),"DiagramObject"),")."),Object(r.b)("li",{parentName:"ul"},"Once the platform supports measurement values, these values will be retreived via a separate service rather than\ndirectly from measurement objects.")),Object(r.b)("p",null,"Ultimately there is a tradeoff between developer usability and model size feasibility. Hopefully you will find this\nis a reasonable trade off when working with large systems."))}u.isMDXComponent=!0}}]);