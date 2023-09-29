(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(201)),i=(n(205),n(206),{id:"sdk-data-model",title:"Data Model",slug:"/"}),c={unversionedId:"sdk-data-model",id:"version-0.35.0/sdk-data-model",isDocsHomePage:!1,title:"Data Model",description:"The Evolve SDK provides the building blocks you need to interface with the rest of the platform. It can also be used to",source:"@site/versioned_docs/version-0.35.0/datamodel.mdx",slug:"/",permalink:"/evolve/docs/python-sdk/0.35.0/",version:"0.35.0",sidebar:"version-0.35.0/someSidebar",previous:{title:"Intellij Setup",permalink:"/evolve/docs/python-sdk/0.35.0/intellij-setup"},next:{title:"CIM Services",permalink:"/evolve/docs/python-sdk/0.35.0/sdk-services"}},l=[{value:"CIM Model",id:"cim-model",children:[]},{value:"Getting Started With The Model",id:"getting-started-with-the-model",children:[]},{value:"Creating Connectivity",id:"creating-connectivity",children:[]},{value:"Normal and Current states",id:"normal-and-current-states",children:[]},{value:"Phases",id:"phases",children:[]},{value:"Grouping equipment",id:"grouping-equipment",children:[{value:"Network Hierarchy",id:"network-hierarchy",children:[]},{value:"Feeders",id:"feeders",children:[]},{value:"Example",id:"example",children:[]}]}],s={toc:l};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"The Evolve SDK provides the building blocks you need to interface with the rest of the platform. It can also be used to\nbuild your own solutions from scratch that will be compatible with other things built with the SDK."),Object(r.a)("h2",{id:"cim-model"},"CIM Model"),Object(r.a)("p",null,"The Evolve platform is composed around a domain model based on the 'Common Information Model' (CIM). The CIM is a very\nlarge standard that covers a huge amount of use cases. To make things more digestible, Evolve publishes its own CIM\nprofile. CIM profiles are subsets of the whole CIM standard that dictates which parts of the model are in use. Evolve\npublishes its model at ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/"}),"https://zepben.github.io/evolve/docs/cim/evolve/"),"."),Object(r.a)("p",null,"If the Evolve profile doesn't contain a part of CIM that you require for your use case, you can request or propose a change to the model\nby starting a discussion at the ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zepben/evolve/discussions"}),"Evolve GitHub discussions")," or by contacting Zepben directly at ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://www.zepben.com/contact"}),"https://www.zepben.com/contact"),"."),Object(r.a)("h2",{id:"getting-started-with-the-model"},"Getting Started With The Model"),Object(r.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"All things that have an ID in the CIM model inherit from\n",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"),". This provides common\nattributes such as mRID (master resource identifier), name, description, etc."))),Object(r.a)("p",null,"Let's get started with the data model by building the following contrived electrical circuit."),Object(r.a)("p",null,Object(r.a)("img",{src:n(562).default})),Object(r.a)("p",null,"Here we simply have an AC energy source (",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Wires/EnergySource/"}),"EnergySource"),")\nconnected to a conductor (",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Wires/ACLineSegment/"}),"ACLineSegment"),")\nconnected to a circuit breaker (",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Wires/Breaker/"}),"Breaker"),").\nIn CIM all these things are a subtype of\n",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/ConductingEquipment/"}),"ConductingEquipment"),"."),Object(r.a)("p",null,"Let's see how we create them:"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import EnergySource, AcLineSegment, Breaker\n\n# Create the energy source. Providing no ID will generate a UUID.\nsource = EnergySource()\n\n# Create the conductor providing a specific ID.\nacls = AcLineSegment("aclineseg1")\n\n# Create a circuit breaker.\n# A UUID will be generated but we can give it a descriptive name.\nbreaker = Breaker(name="my circuit breaker")\n')),Object(r.a)("h2",{id:"creating-connectivity"},"Creating Connectivity"),Object(r.a)("p",null,"In CIM, all conducting equipment can have any number of ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/Terminal/"}),"Terminals"),",\nand terminals connect to other terminals using a ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/ConnectivityNode/"}),"ConnectivityNode"),".\nIf we redraw the above diagram with all the required items from CIM it would look like:"),Object(r.a)("p",null,Object(r.a)("img",{src:n(563).default})),Object(r.a)("p",null,"Where the back dots represent the terminals and the black diamonds represent connectivity nodes."),Object(r.a)("p",null,"Now, lets redo the above code sample this time also creating connectivity between the objects."),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import EnergySource, AcLineSegment, Terminal, Breaker, ConnectivityNode\n\n# Create the energy source\nsource = EnergySource()\n\n# Create the terminal for the energy source and associate it with the source\nsource_t1 = Terminal(conducting_equipment=source)\nsource.add_terminal(source_t1)\n\n# Create the conductor\nacls = AcLineSegment()\n\n# Create a terminal for each end of the conductor\n# and associate them with the conductor\nacls_t1 = Terminal(conducting_equipment=acls)\nacls_t2 = Terminal(conducting_equipment=acls)\nacls.add_terminal(acls_t1)\nacls.add_terminal(acls_t2)\n\n# Create a circuit breaker\nbreaker = Breaker()\n\n# Create a terminal for the breaker\nbreaker_t1 = Terminal(conducting_equipment=breaker)\n\n# Now create a connectivity node to connect the source terminal\n# to the conductor's first terminal\ncn1 = ConnectivityNode()\n\n# Now associate the connectivity nodes to the terminals\ncn1.add_terminal(source_t1)\nsource_t1.connectivity_node = cn1\ncn1.add_terminal(acls_t1)\nacls_t1.connectivity_node = cn1\n\n# Now create a connectivity node to connect the source terminal\n# to the conductor's first terminal\ncn2 = ConnectivityNode()\n\n# Now associate the connectivity nodes to the terminals\ncn2.add_terminal(acls_t2)\nacls_t2.connectivity_node = cn2\ncn2.add_terminal(breaker_t1)\nbreaker_t1.connectivity_node = cn2\n")),Object(r.a)("h2",{id:"normal-and-current-states"},"Normal and Current states"),Object(r.a)("p",null,"As the network is a dynamic model (that is things like switches can be open and closed), many things in the model support\nthe notion of 'normal' and 'current'. For example, a switch has a normally open state and a currently open state.\nThis allows you to perform analysis on the model considering the normal or current state of the network, and allows you\nto tell if the network is currently in the normal state or not. This can be important when making decisions based on\nanalytics you may be running when using the model."),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import Breaker\n\n# Example of setting normal and current switch states\nswitch = Breaker()\nswitch.set_normally_open(True)\nswitch.set_open(False)\n")),Object(r.a)("h2",{id:"phases"},"Phases"),Object(r.a)("p",null,"Phases in CIM are set on a ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/Terminal"}),"Terminal"),". The ",Object(r.a)("inlineCode",{parentName:"p"},"phases"),"\nproperty on the terminal should be considered as the terminal's 'nominal' phases. The vast majority of the time, this will\nbe the actual active phases at that terminal. However, due to the dynamic nature of the network, it's possible that when\ntracing connecitvity that the active phase at the terminal is different. The phase can be tracked using the ",Object(r.a)("inlineCode",{parentName:"p"},"traced_phases"),"\nproperty on the terminal. "),Object(r.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"There are a number of helpful functions for tracing phases based on connectivity. See ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"/evolve/docs/python-sdk/0.35.0/sdk-tracing"}),"tracing")," for more details."))),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import Terminal, PhaseCode\n# Example of setting nominal phases on a terminal\nTerminal terminal = Terminal(phases=PhaseCode.ABC)\n")),Object(r.a)("h2",{id:"grouping-equipment"},"Grouping equipment"),Object(r.a)("p",null,"In electricity distribution networks, a model is typically made up of groups of equipment that represent different\nsections of the network. For example things like: feeder, zone (substation), transmission line etc. The terminology\ndiffers within the industry, however CIM provides types of\n",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/EquipmentContainer"}),"EquipmentContainer")," to allow you to\ngroup equipment into the above types of categories. You can refer to the Evolve profile CIM profile for all supported equipment\ncontainer types in the model, however the most common ones are:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(a.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Wires/Line/"}),"Line")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(a.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/Substation/"}),"Substation")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(a.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/Feeder/"}),"Feeder"))),Object(r.a)("h3",{id:"network-hierarchy"},"Network Hierarchy"),Object(r.a)("p",null,"When creating a ",Object(r.a)("inlineCode",{parentName:"p"},"Substation")," you will see that it can belong to a\n",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/SubGeographicalRegion"}),"SubGeographicalRegion")," and a\n",Object(r.a)("inlineCode",{parentName:"p"},"SubGeogrpahicalRegion")," can belong to a\n",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/GeographicalRegion"}),"GeographicalRegion"),"."),Object(r.a)("p",null,"When using various parts of the Evolve platform, it will refer to the concept of a network hierarchy. This is the\nmechanism used to chunk up the network and provides an overview of what makes up the model. The network hierarchy looks\nas follows:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"GeographicalRegion",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"SubGeographicalRegion",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Substation",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Feeder")))))))),Object(r.a)("p",null,"When working with the Evolve Platform, it is important to make sure equipment and equipment containers are correctly\npopulated as there are assumptions built around the network being structured in this pattern."),Object(r.a)("h3",{id:"feeders"},"Feeders"),Object(r.a)("p",null,"A feeder is generally a chain of equipment from a nominated starting point in a ",Object(r.a)("inlineCode",{parentName:"p"},"Substation")," to all open points when\ntracing along the equipment. The starting point can be defined by setting a\n",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/Feeder/"}),"Feeder's")," ",Object(r.a)("inlineCode",{parentName:"p"},"normal_head_terminal"),". This means if you\nhave a correctly connected model, setting the feeder equipment container on any equipment can be calculated dynamically.\nThis has the benefit of making sure that an equipment's feeder is always correct (because it has been set by checking\nconnectivity). A function to do this is provided as part of the ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"/evolve/docs/python-sdk/0.35.0/sdk-tracing#useful-traces"}),"tracing")," package."),Object(r.a)("h3",{id:"example"},"Example"),Object(r.a)("p",null,"The following example shows how you can build a network hierarchy and assign equipment to their appropriate equipment\ncontainers."),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import GeographicalRegion, SubGeographicalRegion, PowerTransformer, Feeder, Breaker\n\nregion = GeographicalRegion()\nsub_region = SubGeographicalRegion(geographical_region=region)\nregion.add_sub_geographical_region(sub_region)\n\nsubstation = Substation(sub_geographical_region=sub_region)\n\nsub_tx = PowerTransformer()\nsub_tx.add_container(substation)\nsubstation.add_equipment(sub_tx)\n\nfeeder = Feeder(normal_energizing_substation=substation)\n\nfeeder_cb = Breaker()\nfeeder_cb.add_container(feeder)\nfeeder.add_equipment(this)\n")),Object(r.a)("hr",null))}p.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,b=h["".concat(i,".").concat(m)]||h[m]||d[m]||r;return n?o.a.createElement(b,c({ref:t},s,{components:n})):o.a.createElement(b,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},203:function(e,t,n){"use strict";var a=n(0),o=n(204);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},204:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},205:function(e,t,n){"use strict";n(0),n(203),n(202),n(56)},206:function(e,t,n){"use strict";n(3),n(0)},562:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAA9CAYAAADlGVZzAAAEYnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjAtMTAtMTNUMDIlM0EzMyUzQTUyLjA0OVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2gpJTIyJTIwZXRhZyUzRCUyMldwMUpLX25XN292VDVkS1JQcTUxJTIyJTIwdmVyc2lvbiUzRCUyMjEzLjcuOSUyMiUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMjZrNm9wckVsSXQyM1FjMXlVeWlrJTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRTFWWExidHN3RVB3YUhXUG9ZYm55TVhXY3VrQWJHQWpRcEtlQWxyWVNZWW9VcUxVdDVldExpdFE3YnB1aWwlMkZwZ2NJZkxJWGRuU0RuQkpxOCUyQlNWSmtYMFVDelBIZHBIS0NPOGYzdzZXbiUyRmpWUUd5QUkxd1pJSlUwTTVQWEFJMzBGQzdvV1BkRUV5bEVpQ3NHUUZtTXdGcHhEakNPTVNDa3U0N1FmZ28xM0xVZ0tNJTJCQXhKbXlPUHRFRU00TkdvZHZqTzZCcDF1N3N1WFltSjIyeUJjcU1KT0l5Z0lLdEUyeWtFR2hHZWJVQnBudlg5c1dzdTc4eTJ4MU1Bc2MlMkZXZkM2NHpSN3VpJTJCQ2g4MjM4JTJCZUg3UzQlMkZraHZMY2lic1pBdTJoOFc2N1VBaEtFZVEyN1BhUnpmVGM0S1BaNUJJVlpPJTJCa0FPd3ZTZ3BVc0hWM0VFZ2lsd2xkTVc2S2toSW1VRmlBOEpvcWxOajBLd0t5REJuRTlwYm00T2lNRnlGUGt0ZXBkcGlDMkJLYUtuekZxWEtJJTJCeWxGQ2NaUTdrZ3NSMnFWYll3eFFqVjFZNTVuUTdLdnlCeVFGbXJsSFpCcTNJOWlTJTJCOUUxWVd5Z1ltYURGaXZaZDJ6TDA4YW1BVmVvZGF3ZSUyRlZBcDdjYXR1cmlBc080JTJGNldLTVd4ODdGR29LTDRQQmglMkYxeW90UWh2ZFZWYTBKcWdId1I0a1ZUVnBBUTNHVlgzUHpXSjNIYlhBZ0UySFBWMFQxY05v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"},563:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAA+CAYAAAARQkZrAAAFAnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjAtMTAtMTNUMDMlM0EwMCUzQTE0LjU4M1olMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2gpJTIyJTIwZXRhZyUzRCUyMnVDa3hwLU02RldPaVZxUXoyLXZZJTIyJTIwdmVyc2lvbiUzRCUyMjEzLjcuOSUyMiUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMjZrNm9wckVsSXQyM1FjMXlVeWlrJTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRTFWZlJidG93RlAwYUhvdVNtSVR3MkFJZGs3WUtDV25kbmlxVFhCSUxKNDRjQTBtJTJGZmpaMkNFa29kRlBaQ2clMkZJOSUyQlQ2Mmo3biUyQkFaNmFKd1VYempPNHU4c0JOcHpyTERvb1VuUGNUelhrZDhLS0RVd1FFZ0RFU2VoaHV3YVdKQlhNS0JsMEEwSklXOGtDc2FvSUZrVERGaWFRaUFhR09hYzdacHBLMGFicTJZNGdnNndDRER0b3M4a0ZMRkdmZGVxOFJtUUtLNVd0aTN6Sk1GVnNnSHlHSWRzZHdTaGFRJTJCTk9XTkNqNUppREZSeFYlMkZHaTV6MiUyQjhmU3dNUTZwZU0lMkJFMTFsSzR1ZkhERDJOZjJ5JTJGUGsxbnlScmZtU3BiVERmbXdHYXpvcXdZeUJoSkJmRHBWcTZqeUxSNzZHRUxYQkJKMGplOEJEcG5PUkdFcGZMWmtnbkJFcGx3T0t3bGd4RG5NWVFtd0pSRUtqVUFWVlVDc1Vob3ElMkJ5OXlSRXMwN1V5dFpla2lKVEYlMkJrQ2wwRnpsOVhPWmglMkJsTHpqWThnTHlQQXpPVXM4ekJaRVVvM21UTVB1Z2clMkZRc3NBY0ZMbVZKTnFGUXVXJTJGR3Vkb0pub1BqSUJCV0dqZmVpUSUyQlZhSGprd0N2MkJXdWl5V3BDRzk4cjJNa3BaQ2sxJTJCYzhIWiUyQnVCamhVZ21lUGxUU2RPM1JuNEYlMkZOb0RiaFZPQ3FPZGpzcmphQTZjeU1NcEpmZWczaENF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"}}]);