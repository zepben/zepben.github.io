(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),i=r(6),a=(r(0),r(89)),o=(r(92),r(93),{id:"sdk-services",title:"CIM Services"}),c={unversionedId:"sdk-services",id:"sdk-services",isDocsHomePage:!1,title:"CIM Services",description:"Now that you are able to create a data model, you need something to manage the objects.",source:"@site/docs/services.mdx",slug:"/sdk-services",permalink:"/evolve/docs/python-sdk/next/sdk-services",editUrl:"https://github.com/zepben/docs/services.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Data Model",permalink:"/evolve/docs/python-sdk/next/"},next:{title:"Tracing",permalink:"/evolve/docs/python-sdk/next/sdk-tracing"}},s=[{value:"Common Service functionality",id:"common-service-functionality",children:[{value:"Adding and Removing Objects",id:"adding-and-removing-objects",children:[]},{value:"Object Retrieval",id:"object-retrieval",children:[]}]},{value:"Network Service",id:"network-service",children:[]},{value:"Customer Service",id:"customer-service",children:[]},{value:"Diagram Service",id:"diagram-service",children:[]},{value:"Deferred References",id:"deferred-references",children:[]}],d={rightToc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that you are able to create a data model, you need something to manage the objects.\nThis is where we provide a set of classes, which we call services, to do this."),Object(a.b)("p",null,"The services basically act as a container for your model. However, they provide some features which make it much nicer\nto use than a typical map / dictionary type data container to store your identified objects. The SDK provides the\nfollowing services"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"NetworkService"),Object(a.b)("li",{parentName:"ul"},"CustomerService"),Object(a.b)("li",{parentName:"ul"},"DiagramService")),Object(a.b)("p",null,"Each of these services manage a specific subset of identified objects. This subset will hopefully be somewhat obvious\nbased on the name of each service. If you would like to know why there a multiple services for different objects types\nyou can read more about it ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#why-multiple-services"}),"here"),"."),Object(a.b)("h2",{id:"common-service-functionality"},"Common Service functionality"),Object(a.b)("p",null,"Because services work with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://zepben.bitbucket.io/cim/cim100/iec61970/base/core/identifiedobject/"}),"identified objects"),"\nthey can provide some common level of functionality. This functionality can be found in the base class ",Object(a.b)("inlineCode",{parentName:"p"},"BaseService"),"."),Object(a.b)("h3",{id:"adding-and-removing-objects"},"Adding and Removing Objects"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"BaseService.add")," method can be used to add objects to the service. For each service type there is a set of supported classes,\nand thus ",Object(a.b)("inlineCode",{parentName:"p"},"add")," will only work for these types. Note that in some cases where objects are indexed differently other ",Object(a.b)("inlineCode",{parentName:"p"},"add")," style methods\nwill be present, which should be utilised to allow efficient querying of the types they support. (e.g add_diagram_object in DiagramService)"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import NetworkService, Breaker, Junction, IdentifiedObject\nservice = NetworkService()\n\nbreaker = Breaker()\nservice.add(breaker)\n\n# Note you can only add types that are intended for the corresponding service, for example, the following will fail on add:\ndiagram = Diagram()\nservice.add(diagram)  # throws exception.\n")),Object(a.b)("h3",{id:"object-retrieval"},"Object Retrieval"),Object(a.b)("p",null,"There are a few ways we provide to get objects back out of a service. The most obvious one is by MRID:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import NetworkService, Breaker\n\nservice = NetworkService()\nservice.add(Breaker("breaker1"))\nbreaker = service.get("breaker1")\n\n# Qualifying the type yields a minor performance optimisation.\nbreaker = service.get("breaker1", Breaker)\n')),Object(a.b)("p",null,"Implementations of ",Object(a.b)("inlineCode",{parentName:"p"},"BaseService")," may have more dedicated methods which support more forms of retrieval."),Object(a.b)("p",null,"You can also get collections of objects back out of the service. The power here is you can get objects from anywhere\nin the CIM class hierarchy. Due to the internal data structures used by the services, using these functions is more\nefficient than looping over all objects in the service and checking if they are of the required type."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import NetworkService, Breaker, Junction, ConductingEquipment\n\nservice = NetworkService()\n\nservice.add(Breaker())\nservice.add(Junction())\n\n# service.objects() can be used to get a generator over the objects in the service, and supports selecting by type.\nfor obj in service.objects():  # generator over all objects in service\n    # do stuff with obj\n\nfor obj in service.objects(ConductingEquipment):  # generator over all objects in service subclassing ConductingEquipment\n    # do stuff with obj\n\nfor obj in service.objects(Breaker):  # generator over all objects in service of type Breaker (in this case the one Breaker we added)\n    obj.set_open(True)\n\n")),Object(a.b)("h2",{id:"network-service"},"Network Service"),Object(a.b)("p",null,"The network service works with objects related to the physical asset model. That means all\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61970/base/core/powersystemresource/"}),"PowerSystemResource")," types, but also\ndata related types such as ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61968/assets/assetinfo/"}),"AssetInfo")," and\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61968/common/location/"}),"Location"),"."),Object(a.b)("p",null,"The network service also generates an index between power system resources and terminals and their corresponding\nmeasurements. When you add a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61970/base/meas/measurement/"}),"Measurement"),"\nto the service, it indexes it against the ",Object(a.b)("inlineCode",{parentName:"p"},"power_system_resource_mrid")," or the ",Object(a.b)("inlineCode",{parentName:"p"},"terminal_mrid")," associated with the measurement.\nYou can then get all measurements associated with a power system resource or a terminal via its MRID via the lookup on\nthe service:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import NetworkService, Analog, Accumulator, Measurement\n\nservice = NetworkService()\n\namps = Analog(power_system_resource_mrid="ASWITCH")\ncount = Accumulator(power_system_resource_mrid="ASWITCH")\n\nservice.add(amps)\nservice.add(count)\n\n# Gets both the analog and the accumulator\nservice.get_measurements("ASWITCH", Measurement)\n\n# Will get just the analog\nservice.get_measurements("ASWITCH", Analog)\n')),Object(a.b)("p",null,"Note if you change the ",Object(a.b)("inlineCode",{parentName:"p"},"power_system_resource_mrid")," or ",Object(a.b)("inlineCode",{parentName:"p"},"terminal_mrid")," set on the measurement after it has been added to the\nservice, it is not re-indexed automatically. Currently you need to to remove the measurement and re-add it to the service.\nHowever this should rarely be an issue as a measurement is unlikely to ever change the device it is measuring, so as long\nas the association is set before adding to the service it is unlikely to be a problem."),Object(a.b)("h2",{id:"customer-service"},"Customer Service"),Object(a.b)("p",null,"The customer service work with objects related to customers and their agreements they may have with actors in the\nnetwork. At this point in time it provides no further specialised functionality."),Object(a.b)("h2",{id:"diagram-service"},"Diagram Service"),Object(a.b)("p",null,"The diagram service work with objects related to diagrams associated with identified objects.\nIt also provides a lookup to be able to get the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61970/base/diagramlayout/diagramobject/"}),"DiagramObjects")," associated with any\nidentified object. Specifically:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the MRID is a diagram object, a list with just the diagram object is returned."),Object(a.b)("li",{parentName:"ul"},"If the MRID is a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61970/base/diagramlayout/diagram/"}),"Diagram")," all diagram\nobjects belonging to that diagram are returned."),Object(a.b)("li",{parentName:"ul"},"If the MRID is any other identified object, the diagram objects for that identified objects are returned.")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import DiagramService, Diagram, DiagramObject\n\nservice = DiagramService()\n\na_diagram = Diagram()\n\ndo1 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\ndo2 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\ndo3 = DiagramObject(diagram=a_diagram, identified_object_mrid="aSwitch", a_diagram.add_diagram_object(this))\n\nservice.add(do1)\nservice.add(do2)\nservice.add(do3)\n\n# Contains [do1]\nobjs = service.get_diagram_objects(do1.mrid)\n\n# Contains [do1, do2, do3]\nobjs = service.get_diagram_objects(a_diagram.mrid)\n\n# Contains [do1, do2]\nobjs = service.get_diagram_objects("aSwitch")\n')),Object(a.b)("p",null,"This works by indexing the ",Object(a.b)("inlineCode",{parentName:"p"},"identified_object_mrid")," when the diagram object is added to the service. Note however,\nthat setting the ",Object(a.b)("inlineCode",{parentName:"p"},"identified_object_mrid")," after the diagram object is added will not cause it to be re-indexed automatically.\nCurrently you need to to remove the diagram object and re-add it to the service.\nThis should rarely be an issue however, as a diagram object is unlikely to ever change the identified object it is\nrepresenting, so as long as it is set before adding it to the service it is unlikely to be a problem."),Object(a.b)("h2",{id:"deferred-references"},"Deferred References"),Object(a.b)("p",null,"When creating an object to include in the model, you will often not have all referenced objects constructed, not have\nall the information to construct a reference immediately, or not have a reference handy to use. However, you will\ngenerally have the MRID of any referenced objects. To deal with this, the services provide a ",Object(a.b)("inlineCode",{parentName:"p"},"resolve_or_defer_reference"),"\nfunction. This function will:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Resolve a reference immediately (in both direcitons is applicable) if the reference MRID object is already added to the service. "),Object(a.b)("li",{parentName:"ul"},"If the reference MRID is not added to the service, the request to resolve the reference is chached. When an object\nwith the referenced MRID is eventually added to the service, the reference is resolved at this time. ")),Object(a.b)("p",null,"Unresolved references can also be queried back out of the service. Let's see all with a simple example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import NetworkService, Feeder, Breaker, resolver\n\nservice = NetworkService()\n\nfeeder = Feeder()\nservice.add(feeder)\n\nswitch = Breaker()\nservice.add(switch)\n\n# As the switch is already added to the service, this will be resolved immediately.\nservice.resolve_or_defer_reference(resolver.ec_equipment(feeder), switch.mrid)\nprint(feeder.equipment.contains(switch)) # true\n\n# Now if we try and resolve something not added it will be deferred\njunction = Junction()\nservice.resolve_or_defer_reference(resolver.ec_equipment(feeder), junction.mrid)\nprint(feeder.equipment.contains(junction)) # false\n\n# We can query the unresolved reference MRIDs back out of the service\nprint(service.get_unresolved_reference_mrids(resolver.ec_equipment(feeder))) # [junction]\n\n# When the object with the deferred MRID is added, the reference gets resolved\nservice.add(junction)\nprint(feeder.equipment.contains(junction)) # true\n")),Object(a.b)("hr",null),Object(a.b)("h4",{id:"why-multiple-services"},"Why multiple services?"),Object(a.b)("p",null,'You might be asking "Why not just one service for all identified objects?". Admittedly, just having one would be easier\nto work with. However, as models can become large, having every object in a single service (and thus process) will mean\nyou need an ever increasing amount of RAM in your system. What we have done is separated out parts of the\ndata model into separate concerns, at what we feel are sensible boundary points. That is:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The network service deals with models of the physical electricity network."),Object(a.b)("li",{parentName:"ul"},"The customer service deals with customers and their agreements with electricity providers\n(e.g their ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61968/customers/tariff/"}),"Tariff"),")."),Object(a.b)("li",{parentName:"ul"},"The diagram service deals with things related to representing networks as diagrams\n(see ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61970/base/diagramlayout/diagram/"}),"Diagram")," and\n",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://zepben.bitbucket.io/cim/evolve/iec61970/base/diagramlayout/diagramobject/"}),"DiagramObject"),")."),Object(a.b)("li",{parentName:"ul"},"Once the platform supports measurement values, these values will be retrieved via a separate service rather than\ndirectly from measurement objects.")),Object(a.b)("p",null,"Ultimately there is a tradeoff between developer usability and model size feasibility. Hopefully you will find this\nis a reasonable trade off when working with large systems."))}l.isMDXComponent=!0},88:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return r?i.a.createElement(h,c({ref:t},d,{components:r})):i.a.createElement(h,c({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";var n=r(0),i=Object(n.createContext)(void 0);t.a=i},91:function(e,t,r){"use strict";var n=r(0),i=r(90);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},92:function(e,t,r){"use strict";r(0),r(91),r(88),r(48)},93:function(e,t,r){"use strict";r(0)}}]);