(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),i=(r(0),r(201)),o=(r(205),r(206),{id:"sdk-services",title:"CIM Services"}),s={unversionedId:"sdk-services",id:"version-0.23.0/sdk-services",isDocsHomePage:!1,title:"CIM Services",description:"Now that you are able to create a data model, you need something to manage the objects.",source:"@site/versioned_docs/version-0.23.0/services.mdx",slug:"/sdk-services",permalink:"/evolve/docs/python-sdk/0.23.0/sdk-services",version:"0.23.0",sidebar:"version-0.23.0/someSidebar",previous:{title:"Data Model",permalink:"/evolve/docs/python-sdk/0.23.0/"},next:{title:"Tracing",permalink:"/evolve/docs/python-sdk/0.23.0/sdk-tracing"}},c=[{value:"Common Service functionality",id:"common-service-functionality",children:[{value:"Adding and Removing Objects",id:"adding-and-removing-objects",children:[]},{value:"Object Retrieval",id:"object-retrieval",children:[]}]},{value:"Network Service",id:"network-service",children:[]},{value:"Customer Service",id:"customer-service",children:[]},{value:"Diagram Service",id:"diagram-service",children:[]},{value:"Deferred References",id:"deferred-references",children:[]}],d={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Now that you are able to create a data model, you need something to manage the objects.\nThis is where we provide a set of classes, which we call services, to do this."),Object(i.a)("p",null,"The services basically act as a container for your model. However, they provide some features which make it much nicer\nto use than a typical map / dictionary type data container to store your identified objects. The SDK provides the\nfollowing services"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"NetworkService"),Object(i.a)("li",{parentName:"ul"},"CustomerService"),Object(i.a)("li",{parentName:"ul"},"DiagramService")),Object(i.a)("p",null,"Each of these services manage a specific subset of identified objects. This subset will hopefully be somewhat obvious\nbased on the name of each service. If you would like to know why there a multiple services for different object types\nyou can read more about it ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#why-multiple-services"}),"here"),"."),Object(i.a)("h2",{id:"common-service-functionality"},"Common Service functionality"),Object(i.a)("p",null,"Because services work with ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"identified objects"),"\nthey can provide some common level of functionality. This functionality can be found in the base class ",Object(i.a)("inlineCode",{parentName:"p"},"BaseService"),"."),Object(i.a)("h3",{id:"adding-and-removing-objects"},"Adding and Removing Objects"),Object(i.a)("p",null,"The ",Object(i.a)("inlineCode",{parentName:"p"},"BaseService.add")," method can be used to add objects to the service. For each service type there is a set of supported classes,\nand thus ",Object(i.a)("inlineCode",{parentName:"p"},"add")," will only work for these types. Note that in some cases where objects are indexed differently other ",Object(i.a)("inlineCode",{parentName:"p"},"add")," style methods\nwill be present, which should be utilised to allow efficient querying of the types they support. (e.g add_diagram_object in DiagramService)"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import NetworkService, Breaker, Junction, IdentifiedObject\nservice = NetworkService()\n\nbreaker = Breaker()\nservice.add(breaker)\n\n# Note you can only add types that are intended for the corresponding service, for example, the following will fail on add:\ndiagram = Diagram()\nservice.add(diagram)  # throws exception.\n")),Object(i.a)("h3",{id:"object-retrieval"},"Object Retrieval"),Object(i.a)("p",null,"There are a few ways we provide to get objects back out of a service. The most obvious one is by mRID:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import NetworkService, Breaker\n\nservice = NetworkService()\nservice.add(Breaker("breaker1"))\nbreaker = service.get("breaker1")\n\n# Qualifying the type yields a minor performance optimisation.\nbreaker = service.get("breaker1", Breaker)\n')),Object(i.a)("p",null,"Implementations of ",Object(i.a)("inlineCode",{parentName:"p"},"BaseService")," may have more dedicated methods which support more forms of retrieval."),Object(i.a)("p",null,"You can also get collections of objects back out of the service. The power here is you can get objects from anywhere\nin the CIM class hierarchy. Due to the internal data structures used by the services, using these functions is more\nefficient than looping over all objects in the service and checking if they are of the required type."),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import NetworkService, Breaker, Junction, ConductingEquipment\n\nservice = NetworkService()\n\nservice.add(Breaker())\nservice.add(Junction())\n\n# service.objects() can be used to get a generator over the objects in the service, and supports selecting by type.\nfor obj in service.objects():  # generator over all objects in service\n    # do stuff with obj\n\nfor obj in service.objects(ConductingEquipment):  # generator over all objects in service subclassing ConductingEquipment\n    # do stuff with obj\n\nfor obj in service.objects(Breaker):  # generator over all objects in service of type Breaker (in this case the one Breaker we added)\n    obj.set_open(True)\n\n")),Object(i.a)("h2",{id:"network-service"},"Network Service"),Object(i.a)("p",null,"The network service works with objects related to the physical asset model. That means all\n",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/PowerSystemResource"}),"PowerSystemResource")," types, but also\ndata related types such as ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Assets/AssetInfo"}),"AssetInfo")," and\n",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Common/Location"}),"Location"),"."),Object(i.a)("p",null,"The network service also generates an index between power system resources and terminals and their corresponding\nmeasurements. When you add a ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Meas/Measurement"}),"Measurement"),"\nto the service, it indexes it against the ",Object(i.a)("inlineCode",{parentName:"p"},"power_system_resource_mrid")," or the ",Object(i.a)("inlineCode",{parentName:"p"},"terminal_mrid")," associated with the measurement.\nYou can then get all measurements associated with a power system resource or a terminal via its mRID via the lookup on\nthe service:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import NetworkService, Analog, Accumulator, Measurement\n\nservice = NetworkService()\n\namps = Analog(power_system_resource_mrid="ASWITCH")\ncount = Accumulator(power_system_resource_mrid="ASWITCH")\n\nservice.add(amps)\nservice.add(count)\n\n# Gets both the analog and the accumulator\nservice.get_measurements("ASWITCH", Measurement)\n\n# Will get just the analog\nservice.get_measurements("ASWITCH", Analog)\n')),Object(i.a)("p",null,"Note if you change the ",Object(i.a)("inlineCode",{parentName:"p"},"power_system_resource_mrid")," or ",Object(i.a)("inlineCode",{parentName:"p"},"terminal_mrid")," set on the measurement after it has been added to the\nservice, it is not re-indexed automatically. Currently you need to to remove the measurement and re-add it to the service.\nHowever this should rarely be an issue as a measurement is unlikely to ever change the device it is measuring, so as long\nas the association is set before adding to the service it is unlikely to be a problem."),Object(i.a)("h2",{id:"customer-service"},"Customer Service"),Object(i.a)("p",null,"The customer service works with objects related to customers and their agreements they may have with actors in the\nnetwork. At this point in time it provides no further specialised functionality."),Object(i.a)("h2",{id:"diagram-service"},"Diagram Service"),Object(i.a)("p",null,"The diagram service works with objects related to diagrams associated with identified objects.\nIt also provides a lookup to be able to get the ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"}),"DiagramObjects")," associated with any\nidentified object. Specifically:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"If the mRID is a diagram object, a list with just the diagram object is returned."),Object(i.a)("li",{parentName:"ul"},"If the mRID is a ",Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram"}),"Diagram")," all diagram\nobjects belonging to that diagram are returned."),Object(i.a)("li",{parentName:"ul"},"If the mRID is any other identified object, the diagram objects for that identified object are returned.")),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import DiagramService, Diagram, DiagramObject\n\nservice = DiagramService()\n\na_diagram = Diagram()\n\ndo1 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\ndo2 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\ndo3 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n# Contains [do1]\nobjs = service.get_diagram_objects(do1.mrid)\n\n# Contains [do1, do2, do3]\nobjs = service.get_diagram_objects(a_diagram.mrid)\n\n# Contains [do1, do2]\nobjs = service.get_diagram_objects("aSwitch")\n')),Object(i.a)("p",null,"This works by indexing the ",Object(i.a)("inlineCode",{parentName:"p"},"identified_object_mrid")," when the diagram object is added to the service. Note however,\nthat setting the ",Object(i.a)("inlineCode",{parentName:"p"},"identified_object_mrid")," after the diagram object is added will not cause it to be re-indexed automatically.\nCurrently you need to to remove the diagram object and re-add it to the service.\nThis should rarely be an issue however, as a diagram object is unlikely to ever change the identified object it is\nrepresenting, so as long as it is set before adding it to the service it is unlikely to be a problem."),Object(i.a)("h2",{id:"deferred-references"},"Deferred References"),Object(i.a)("p",null,"When creating an object to include in the model, you will often not have all referenced objects constructed, not have\nall the information to construct a reference immediately, or not have a reference handy to use. However, you will\ngenerally have the mRID of any referenced objects. To deal with this, the services provide a ",Object(i.a)("inlineCode",{parentName:"p"},"resolve_or_defer_reference"),"\nfunction. This function will:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Resolve a reference immediately (in both direcitons if applicable) if the reference mRID object is already added to the service. "),Object(i.a)("li",{parentName:"ul"},"If the reference mRID is not added to the service, the request to resolve the reference is cached. When an object\nwith the referenced mRID is eventually added to the service, the reference is resolved at this time. ")),Object(i.a)("p",null,"Unresolved references can also be queried back out of the service. Let's see it all with a simple example:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import NetworkService, Feeder, Breaker, resolver\n\nservice = NetworkService()\n\nfeeder = Feeder("f")\nservice.add(feeder)\n\nswitch = Breaker("b1")\nservice.add(switch)\n\n# As the switch is already added to the service, this will be resolved immediately.\nservice.resolve_or_defer_reference(resolver.ec_equipment(feeder), switch.mrid)\nprint(feeder.equipment.contains(switch)) # true\n\n# Now if we try and resolve something not added it will be deferred\njunction = Junction("j1")\nservice.resolve_or_defer_reference(resolver.ec_equipment(feeder), junction.mrid)\nprint(feeder.equipment.contains(junction)) # false\n\n# We can query the unresolved reference MRIDs back out of the service using a specific resolver\nprint(service.get_unresolved_reference_mrids_by_resolver(resolver.ec_equipment(feeder))) # ["j1"]\n# Or using the mrid of the destination object\nprint(service.get_unresolved_references_to(feeder.mrid)) # [junction]\n# Or using the mrid of the source object\nprint(service.get_unresolved_references_from(junction.mrid)) # [feeder]\n\n# When the object with the deferred mRID is added, the reference gets resolved\nservice.add(junction)\nprint(feeder.equipment.contains(junction)) # true\n')),Object(i.a)("hr",null),Object(i.a)("h4",{id:"why-multiple-services"},"Why multiple services?"),Object(i.a)("p",null,'You might be asking "Why not just one service for all identified objects?". Admittedly, just having one would be easier\nto work with. However, as models can become large, having every object in a single service (and thus process) will mean\nyou need an ever increasing amount of RAM in your system. What we have done is separated out parts of the\ndata model into separate concerns, at what we feel are sensible boundary points. That is:'),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"The network service deals with models of the physical electricity network."),Object(i.a)("li",{parentName:"ul"},"The customer service deals with customers and their agreements with electricity providers\n(e.g their ",Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61968/Customers/Tariff"}),"Tariff"),")."),Object(i.a)("li",{parentName:"ul"},"The diagram service deals with things related to representing networks as diagrams\n(see ",Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/Diagram"}),"Diagram")," and\n",Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/DiagramLayout/DiagramObject"}),"DiagramObject"),")."),Object(i.a)("li",{parentName:"ul"},"Once the platform supports measurement values, these values will be retrieved via a separate service rather than\ndirectly from measurement objects.")),Object(i.a)("p",null,"Ultimately there is a tradeoff between developer usability and model size feasibility. Hopefully you will find this\nis a reasonable trade off when working with large systems."))}l.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,b=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return r?n.a.createElement(b,s({ref:t},d,{components:r})):n.a.createElement(b,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},202:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},203:function(e,t,r){"use strict";var a=r(0),n=r(204);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},204:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},205:function(e,t,r){"use strict";r(0),r(203),r(202),r(56)},206:function(e,t,r){"use strict";r(3),r(0)}}]);