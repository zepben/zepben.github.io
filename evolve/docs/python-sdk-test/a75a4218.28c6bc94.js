(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(165)),o=(n(169),n(170),{id:"sdk-tracing",title:"Tracing"}),c={unversionedId:"sdk-tracing",id:"version-0.27.0/sdk-tracing",isDocsHomePage:!1,title:"Tracing",description:"The tracing module is in an experimental state and bugs will be present.",source:"@site/versioned_docs/version-0.27.0/tracing.mdx",slug:"/sdk-tracing",permalink:"/evolve/docs/python-sdk/0.27.0/sdk-tracing",version:"0.27.0",sidebar:"version-0.27.0/someSidebar",previous:{title:"CIM Services",permalink:"/evolve/docs/python-sdk/0.27.0/sdk-services"},next:{title:"Persisting Models",permalink:"/evolve/docs/python-sdk/0.27.0/sdk-persistence"}},s=[{value:"Basic Connectivity",id:"basic-connectivity",children:[]},{value:"Tracing",id:"tracing",children:[{value:"Basic Traversal",id:"basic-traversal",children:[]},{value:"Useful traces",id:"useful-traces",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The tracing module is in an experimental state and bugs will be present."))),Object(i.a)("p",null,"Once you have a connected network model you can start following the connectivity to do some interesting analyses, from\nsimple tasks such as adding up cable lengths along a line to advanced functions like a full load flow analysis."),Object(i.a)("p",null,"The Evolve SDK provides an API to make following connectivity (what we will call tracing) less cumbersome and more\nproductive. It provides a variety of use-case specific traces out of the box, but also a generic mechanism to write\nyour own traces in an easy to use manner. The\n",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#"}),"Tracing"),"\npackage is a great place to get an overview of the kind of tools we provide as part of the SDK."),Object(i.a)("h2",{id:"basic-connectivity"},"Basic Connectivity"),Object(i.a)("p",null,"So, let's start at the absolute basic use case. \"What is directly connected to this piece of equipment?\".\nObviously we provide a function to let you to find out. Let's see it in code:"),Object(i.a)("p",null,"TODO: Take example from datamodel page and code then explain in context of that"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import Junction\nfrom zepben.evolve.tracing import ConnectivityResult, connected_equipment\n\nswitch: Breaker = network.get("aSwitch")\nconnectivity: List<ConnectivityResult> = switch.connected_equipment(PhaseCode.ABCN)\n# or:\nconnectivity: List<ConnectivityResult> = connected_equipment(switch, PhaseCode.ABCN)\nfor cr in connectivity:\n    print(f"{cr.from_equip()} is connected to {it.to_equip()} via terminals {cr.from_terminal()} -> {it.to_terminal()} ",\n          \'through phases {map(cr.nominal_phase_paths(), lambda path: f"{path.from_phase()}:{path.to_phase()}" })\')\n\n')),Object(i.a)("p",null,'Sometimes you want to be a bit more specific about your connectivity, such as "what is connected only to one side of the\nequipment?". You can do this by using specific terminals:'),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import Breaker\nfrom zepben.evolve.tracing import ConnectivityResult, connected_terminals\n\nswitch: Breaker = network.get("aSwitch")\nconnectivity: List<ConnectivityResult> = switch.connected_terminals(PhaseCode.ABCN)\n# or\nconnectivity: List<ConnectivityResult> = connected_terminals(switch, PhaseCode.ABCN)\n')),Object(i.a)("p",null,"This will produce a subset of the result above, with just the equipment connected to the given terminal. The\nconnectivity result instances in the subset will be exactly the same as the previous example."),Object(i.a)("h2",{id:"tracing"},"Tracing"),Object(i.a)("h3",{id:"basic-traversal"},"Basic Traversal"),Object(i.a)("p",null,"To trace a network, we obviously need to repeat the above process for each piece of equipment in the connectivity result\nlist. In computer science, stepping between nodes in a data structure like this is known as a traversal. Conveniently,\nthe SDK provides a ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#"}),"Traversal")," interface with a number of implementations also provided for different use cases."),Object(i.a)("p",null,"The most common type you will use is the ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#"}),"BasicTraversal"),".\nIn a nutshell, this class lets you easily specify how to step to connected objects, add custom actions to perform at\neach step to an object, and conditions on which the tracing should stop. It has some more advanced features, such as\nallowing you to specify how to queue steps (for breadth, or depth or priority traversals) as well as custom tracking\nof objects. See the code docs for more details."),Object(i.a)("p",null,"There are a number of traces which we have identified as being frequently required. So, the SDK provides a number of\npreconfigured BasicTraversal creators for these common use cases. These can be found in the tracing ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#"}),"package"),"."),Object(i.a)("p",null,"To get started, lets take a look at the ",Object(i.a)("inlineCode",{parentName:"p"},"tracing.connected_equipment_trace()"),". This returns a ",Object(i.a)("inlineCode",{parentName:"p"},"BasicTraversal")," that is\npreconfigured to continuously step to equipment that is connected in any way. Under the covers it uses the\n",Object(i.a)("inlineCode",{parentName:"p"},"Tracing.connected_equipment")," function we looked at above to continuously step to connected objects. Now, say we wanted to\nidentify the nearest circuit breakers to a piece of equipment, capturing all equipment between those breakers. We can do\nthat with the following:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import NetworkService, AcLineSegment, Breaker, ConductingEquipment\nfrom zepben.evolve.tracing import connected_equipment_trace\nnetwork = NetworkService()\n\n# Populate network service with your network\n\nacls = network.get("my conductor", AcLineSegment)\nif acls:\n    breakers = []\n    equipment_between_breakers = []\n    trace = connected_equipment_trace()\n    trace.add_stop_condition(lambda equip: isinstance(equip, Breaker))\n    trace.add_step_action(lambda equipment, stopping: breakers.append(equipment) if isinstance(equipment, Breaker) elif not stopping equipment_between_breakers.append(equipment))\n    await trace.trace(acls)\n\nprint(f"The closest circuit breakers are: {breakers}")\nprint(f"The equipment between the above breakers: {equipment_between_breakers}")\n')),Object(i.a)("p",null,"Let's break down what is happening with the trace:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"add_stop_condition")," is returning true if the equipment at the current step is a ",Object(i.a)("inlineCode",{parentName:"li"},"Breaker"),". This will make the trace\nstop at the current step if the equipment is a breaker. Note that this will not terminate the trace, it simply stops\nany more traversing from the current step. That is, no more equipment will be queued to be stepped to from the equipment\nat this step. If there are other paths / branches in the trace in the queue, they will still be stepped to."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"add_step_action")," is capturing the equipment as a breaker if it is a breaker, otherwise it captures the equipment as\nbetween breakers equipment if it is not stopping (as stopping happens on the breaker).")),Object(i.a)("p",null,"As you can see this provides an extremely simple but powerful way to perform useful traces over your network. "),Object(i.a)("h3",{id:"useful-traces"},"Useful traces"),Object(i.a)("p",null,"There are a number of traces that will be common between all networks. We have identified numerous of these and\nprovide an easy way to instantiate them."),Object(i.a)("h4",{id:"set-phases-trace"},"Set phases trace"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"traces.set_phases()")," returns a ",Object(i.a)("inlineCode",{parentName:"p"},"zepben.evolve.tracing.phasing.SetPhases")," instance. This provides a way to dynamically set phases at runtime based\non a network's energy sources and the nominal phase connectivity within the network."),Object(i.a)("h4",{id:"phase-traces"},"Phase traces"),Object(i.a)("p",null,"There are numerous traces to trace based on various types of phasing data:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"traces.phase_trace()")," will trace based on nominal phase connectivity, ignoring open switches or in service flags."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"traces.normal_phase_trace()")," will trace based on nominal phase connectivity, stopping at normally open switches or\nequipment flagged as not normally in service. "),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"traces.current_phase_trace()")," will trace based on nominal phase connectivity, stopping at currently open switches or\nequipment flagged as not currently in service. ")),Object(i.a)("h4",{id:"downstream--upstream-traces"},"Downstream / Upstream traces"),Object(i.a)("p",null,"There are traces configured to find all upstream or downstream equipment from any piece of equipment that is on a feeder:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"traces.normal_downstream_trace()")," will trace downstream of the start equipment based on the normal state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"traces.current_downstream_trace()")," will trace downstream of the start equipment based on the current state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"traces.normal_upstream_trace()")," will trace upstream of the start equipment based on the normal state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"traces.current_upstream_trace()")," will trace upstream of the start equipment based on the current state of the network.")),Object(i.a)("h4",{id:"other-traces"},"Other traces"),Object(i.a)("p",null,"There are other useful but less common traces available. See the\n",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#"}),"code"),"\nfor all the available traces."))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?r.a.createElement(h,c({ref:t},l,{components:n})):r.a.createElement(h,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},167:function(e,t,n){"use strict";var a=n(0),r=n(168);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},168:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},169:function(e,t,n){"use strict";n(0),n(167),n(166),n(56)},170:function(e,t,n){"use strict";n(3),n(0)}}]);