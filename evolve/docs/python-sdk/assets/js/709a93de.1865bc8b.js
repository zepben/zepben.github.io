"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[2976],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return v}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),h=i,v=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return r?n.createElement(v,o(o({ref:t},d),{},{components:r})):n.createElement(v,o({ref:t},d))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85162:function(e,t,r){r(67294)},65488:function(e,t,r){r(67294),r(72389)},74046:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=(r(65488),r(85162),["components"]),s={id:"sdk-services",title:"CIM Services"},c=void 0,l={unversionedId:"sdk-services",id:"sdk-services",title:"CIM Services",description:"Now that you are able to create a data model, you need something to manage the objects.",source:"@site/docs/services.mdx",sourceDirName:".",slug:"/sdk-services",permalink:"/evolve/docs/python-sdk/next/sdk-services",draft:!1,tags:[],version:"current",frontMatter:{id:"sdk-services",title:"CIM Services"},sidebar:"someSidebar",previous:{title:"Data Model",permalink:"/evolve/docs/python-sdk/next/"},next:{title:"Phases and Feeder Directions",permalink:"/evolve/docs/python-sdk/next/sdk-phases"}},d={},m=[{value:"Common Service functionality",id:"common-service-functionality",level:2},{value:"Adding and Removing Objects",id:"adding-and-removing-objects",level:3},{value:"Object Retrieval",id:"object-retrieval",level:3},{value:"Network Service",id:"network-service",level:2},{value:"Customer Service",id:"customer-service",level:2},{value:"Diagram Service",id:"diagram-service",level:2},{value:"Deferred References",id:"deferred-references",level:2},{value:"Why multiple services?",id:"why-multiple-services",level:4}],u={toc:m},h="wrapper";function v(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that you are able to create a data model, you need something to manage the objects.\nThis is where we provide a set of classes, which we call services, to do this."),(0,a.kt)("p",null,"The services basically act as a container for your model. However, they provide some features which make it much nicer\nto use than a typical map / dictionary type data container to store your identified objects. The SDK provides the\nfollowing services"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NetworkService"),(0,a.kt)("li",{parentName:"ul"},"CustomerService"),(0,a.kt)("li",{parentName:"ul"},"DiagramService")),(0,a.kt)("p",null,"Each of these services manage a specific subset of identified objects. This subset will hopefully be somewhat obvious\nbased on the name of each service. If you would like to know why there a multiple services for different object types\nyou can read more about it ",(0,a.kt)("a",{parentName:"p",href:"#why-multiple-services"},"here"),"."),(0,a.kt)("h2",{id:"common-service-functionality"},"Common Service functionality"),(0,a.kt)("p",null,"Because services work with ",(0,a.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"},"identified objects"),"\nthey can provide some common level of functionality. This functionality can be found in the base class ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseService"),"."),(0,a.kt)("h3",{id:"adding-and-removing-objects"},"Adding and Removing Objects"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseService.add")," method can be used to add objects to the service. For each service type there is a set of supported classes,\nand thus ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," will only work for these types. Note that in some cases where objects are indexed differently other ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," style methods\nwill be present, which should be utilised to allow efficient querying of the types they support. (e.g add_diagram_object in DiagramService)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.evolve import NetworkService, Breaker, Junction, IdentifiedObject\nservice = NetworkService()\n\nbreaker = Breaker()\nservice.add(breaker)\n\n# Note you can only add types that are intended for the corresponding service, for example, the following will fail on add:\ndiagram = Diagram()\nservice.add(diagram)  # throws exception.\n")),(0,a.kt)("h3",{id:"object-retrieval"},"Object Retrieval"),(0,a.kt)("p",null,"There are a few ways we provide to get objects back out of a service. The most obvious one is by mRID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import NetworkService, Breaker\n\nservice = NetworkService()\nservice.add(Breaker("breaker1"))\nbreaker = service.get("breaker1")\n\n# Qualifying the type yields a minor performance optimisation.\nbreaker = service.get("breaker1", Breaker)\n')),(0,a.kt)("p",null,"Implementations of ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseService")," may have more dedicated methods which support more forms of retrieval."),(0,a.kt)("p",null,"You can also get collections of objects back out of the service. The power here is you can get objects from anywhere\nin the CIM class hierarchy. Due to the internal data structures used by the services, using these functions is more\nefficient than looping over all objects in the service and checking if they are of the required type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.evolve import NetworkService, Breaker, Junction, ConductingEquipment\n\nservice = NetworkService()\n\nservice.add(Breaker())\nservice.add(Junction())\n\n# service.objects() can be used to get a generator over the objects in the service, and supports selecting by type.\nfor obj in service.objects():  # generator over all objects in service\n    # do stuff with obj\n\nfor obj in service.objects(ConductingEquipment):  # generator over all objects in service subclassing ConductingEquipment\n    # do stuff with obj\n\nfor obj in service.objects(Breaker):  # generator over all objects in service of type Breaker (in this case the one Breaker we added)\n    obj.set_open(True)\n\n")),(0,a.kt)("h2",{id:"network-service"},"Network Service"),(0,a.kt)("p",null,"The network service works with objects related to the physical asset model. That means all\n",(0,a.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/PowerSystemResource"},"PowerSystemResource")," types, but also\ndata related types such as ",(0,a.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Assets/AssetInfo"},"AssetInfo")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Common/Location"},"Location"),"."),(0,a.kt)("p",null,"The network service also generates an index between power system resources and terminals and their corresponding\nmeasurements. When you add a ",(0,a.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Meas/Measurement"},"Measurement"),"\nto the service, it indexes it against the ",(0,a.kt)("inlineCode",{parentName:"p"},"power_system_resource_mrid")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"terminal_mrid")," associated with the measurement.\nYou can then get all measurements associated with a power system resource or a terminal via its mRID via the lookup on\nthe service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import NetworkService, Analog, Accumulator, Measurement\n\nservice = NetworkService()\n\namps = Analog(power_system_resource_mrid="ASWITCH")\ncount = Accumulator(power_system_resource_mrid="ASWITCH")\n\nservice.add(amps)\nservice.add(count)\n\n# Gets both the analog and the accumulator\nservice.get_measurements("ASWITCH", Measurement)\n\n# Will get just the analog\nservice.get_measurements("ASWITCH", Analog)\n')),(0,a.kt)("p",null,"Note if you change the ",(0,a.kt)("inlineCode",{parentName:"p"},"power_system_resource_mrid")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"terminal_mrid")," set on the measurement after it has been added to the\nservice, it is not re-indexed automatically. Currently you need to to remove the measurement and re-add it to the service.\nHowever this should rarely be an issue as a measurement is unlikely to ever change the device it is measuring, so as long\nas the association is set before adding to the service it is unlikely to be a problem."),(0,a.kt)("h2",{id:"customer-service"},"Customer Service"),(0,a.kt)("p",null,"The customer service works with objects related to customers and their agreements they may have with actors in the\nnetwork. At this point in time it provides no further specialised functionality."),(0,a.kt)("h2",{id:"diagram-service"},"Diagram Service"),(0,a.kt)("p",null,"The diagram service works with objects related to diagrams associated with identified objects.\nIt also provides a lookup to be able to get the ",(0,a.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"},"DiagramObjects")," associated with any\nidentified object. Specifically:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the mRID is a diagram object, a list with just the diagram object is returned."),(0,a.kt)("li",{parentName:"ul"},"If the mRID is a ",(0,a.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram"},"Diagram")," all diagram\nobjects belonging to that diagram are returned."),(0,a.kt)("li",{parentName:"ul"},"If the mRID is any other identified object, the diagram objects for that identified object are returned.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import DiagramService, Diagram, DiagramObject\n\nservice = DiagramService()\n\na_diagram = Diagram()\n\ndo1 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\ndo2 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\ndo3 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n# Contains [do1]\nobjs = service.get_diagram_objects(do1.mrid)\n\n# Contains [do1, do2, do3]\nobjs = service.get_diagram_objects(a_diagram.mrid)\n\n# Contains [do1, do2]\nobjs = service.get_diagram_objects("aSwitch")\n')),(0,a.kt)("p",null,"This works by indexing the ",(0,a.kt)("inlineCode",{parentName:"p"},"identified_object_mrid")," when the diagram object is added to the service. Note however,\nthat setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"identified_object_mrid")," after the diagram object is added will not cause it to be re-indexed automatically.\nCurrently you need to to remove the diagram object and re-add it to the service.\nThis should rarely be an issue however, as a diagram object is unlikely to ever change the identified object it is\nrepresenting, so as long as it is set before adding it to the service it is unlikely to be a problem."),(0,a.kt)("h2",{id:"deferred-references"},"Deferred References"),(0,a.kt)("p",null,"When creating an object to include in the model, you will often not have all referenced objects constructed, not have\nall the information to construct a reference immediately, or not have a reference handy to use. However, you will\ngenerally have the mRID of any referenced objects. To deal with this, the services provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve_or_defer_reference"),"\nfunction. This function will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolve a reference immediately (in both direcitons if applicable) if the reference mRID object is already added to the service. "),(0,a.kt)("li",{parentName:"ul"},"If the reference mRID is not added to the service, the request to resolve the reference is cached. When an object\nwith the referenced mRID is eventually added to the service, the reference is resolved at this time. ")),(0,a.kt)("p",null,"Unresolved references can also be queried back out of the service. Let's see it all with a simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import NetworkService, Feeder, Breaker, resolver\n\nservice = NetworkService()\n\nfeeder = Feeder("f")\nservice.add(feeder)\n\nswitch = Breaker("b1")\nservice.add(switch)\n\n# As the switch is already added to the service, this will be resolved immediately.\nservice.resolve_or_defer_reference(resolver.ec_equipment(feeder), switch.mrid)\nprint(feeder.equipment.contains(switch)) # true\n\n# Now if we try and resolve something not added it will be deferred\njunction = Junction("j1")\nservice.resolve_or_defer_reference(resolver.ec_equipment(feeder), junction.mrid)\nprint(feeder.equipment.contains(junction)) # false\n\n# We can query the unresolved reference MRIDs back out of the service using a specific resolver\nprint(service.get_unresolved_reference_mrids_by_resolver(resolver.ec_equipment(feeder))) # ["j1"]\n# Or using the mrid of the destination object\nprint(service.get_unresolved_references_to(feeder.mrid)) # [junction]\n# Or using the mrid of the source object\nprint(service.get_unresolved_references_from(junction.mrid)) # [feeder]\n\n# When the object with the deferred mRID is added, the reference gets resolved\nservice.add(junction)\nprint(feeder.equipment.contains(junction)) # true\n')),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"why-multiple-services"},"Why multiple services?"),(0,a.kt)("p",null,'You might be asking "Why not just one service for all identified objects?". Admittedly, just having one would be easier\nto work with. However, as models can become large, having every object in a single service (and thus process) will mean\nyou need an ever increasing amount of RAM in your system. What we have done is separated out parts of the\ndata model into separate concerns, at what we feel are sensible boundary points. That is:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The network service deals with models of the physical electricity network."),(0,a.kt)("li",{parentName:"ul"},"The customer service deals with customers and their agreements with electricity providers\n(e.g their ",(0,a.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Customers/Tariff"},"Tariff"),")."),(0,a.kt)("li",{parentName:"ul"},"The diagram service deals with things related to representing networks as diagrams\n(see ",(0,a.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram"},"Diagram")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"},"DiagramObject"),")."),(0,a.kt)("li",{parentName:"ul"},"Once the platform supports measurement values, these values will be retrieved via a separate service rather than\ndirectly from measurement objects.")),(0,a.kt)("p",null,"Ultimately there is a tradeoff between developer usability and model size feasibility. Hopefully you will find this\nis a reasonable trade off when working with large systems."))}v.isMDXComponent=!0}}]);