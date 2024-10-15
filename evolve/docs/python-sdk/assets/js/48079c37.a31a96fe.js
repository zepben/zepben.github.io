"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[9025],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n(67294)},65488:function(e,t,n){n(67294),n(72389)},74720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=(n(65488),n(85162),["components"]),s={id:"sdk-tracing",title:"Tracing"},c=void 0,l={unversionedId:"sdk-tracing",id:"version-0.37.4/sdk-tracing",title:"Tracing",description:"Once you have a connected network model you can start following the connectivity to do some interesting analyses, from",source:"@site/versioned_docs/version-0.37.4/tracing.mdx",sourceDirName:".",slug:"/sdk-tracing",permalink:"/evolve/docs/python-sdk/0.37.4/sdk-tracing",draft:!1,tags:[],version:"0.37.4",frontMatter:{id:"sdk-tracing",title:"Tracing"},sidebar:"someSidebar",previous:{title:"Phases and Feeder Directions",permalink:"/evolve/docs/python-sdk/0.37.4/sdk-phases"},next:{title:"Persisting Models",permalink:"/evolve/docs/python-sdk/0.37.4/sdk-persistence"}},p={},u=[{value:"Basic Connectivity",id:"basic-connectivity",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Feeder Direction",id:"feeder-direction",level:3},{value:"Basic Traversal",id:"basic-traversal",level:3},{value:"Useful Traces",id:"useful-traces",level:3},{value:"Set Phases Trace",id:"set-phases-trace",level:4},{value:"Phase Traces",id:"phase-traces",level:4},{value:"Equipment Connectivity Traces",id:"equipment-connectivity-traces",level:4},{value:"Other Traces",id:"other-traces",level:4}],d={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you have a connected network model you can start following the connectivity to do some interesting analyses, from\nsimple tasks such as adding up cable lengths along a line to advanced functions like a full load flow analysis."),(0,i.kt)("p",null,"The Evolve SDK provides an API to make following connectivity (what we will call tracing) less cumbersome and more\nproductive. It provides a variety of use-case specific traces out of the box, but also a generic mechanism to write\nyour own traces in an easy to use manner. The\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-sdk-python/blob/main/src/zepben/evolve/services/network/tracing/tracing.py"},"Tracing"),"\npackage is a great place to get an overview of the kind of tools we provide as part of the SDK."),(0,i.kt)("h2",{id:"basic-connectivity"},"Basic Connectivity"),(0,i.kt)("p",null,"So, let's start at the absolute basic use case. \"What is directly connected to this piece of equipment?\".\nObviously we provide a function to let you to find out. Let's see it in code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import Junction\nfrom zepben.evolve.tracing import ConnectivityResult, connected_equipment\n\nswitch: Breaker = network.get("aSwitch")\nconnectivity: List<ConnectivityResult> = switch.connected_equipment(PhaseCode.ABCN)\n# or:\nconnectivity: List<ConnectivityResult> = connected_equipment(switch, PhaseCode.ABCN)\nfor cr in connectivity:\n    print(f"{cr.from_equip()} is connected to {it.to_equip()} via terminals {cr.from_terminal()} -> {it.to_terminal()} ",\n          \'through phases {map(cr.nominal_phase_paths(), lambda path: f"{path.from_phase()}:{path.to_phase()}" })\')\n\n')),(0,i.kt)("p",null,'Sometimes you want to be a bit more specific about your connectivity, such as "what is connected only to one side of the\nequipment?". You can do this by using specific terminals:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import Breaker\nfrom zepben.evolve.tracing import ConnectivityResult, connected_terminals\n\nswitch: Breaker = network.get("aSwitch")\nconnectivity: List<ConnectivityResult> = switch.connected_terminals(PhaseCode.ABCN)\n# or\nconnectivity: List<ConnectivityResult> = connected_terminals(switch, PhaseCode.ABCN)\n')),(0,i.kt)("p",null,"This will produce a subset of the result above, with just the equipment connected to the given terminal. The\nconnectivity result instances in the subset will be exactly the same as the previous example."),(0,i.kt)("p",null,"Sometimes you do not care about the phase connectivity at all, and are just interested in terminals that share a connectivity node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'switch: Breaker = network.get("aSwitch")\nfor it in switch.get_terminal_by_sn(1).connected_terminals():\n    print(it)\n')),(0,i.kt)("p",null,"This will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Generator")," of all the terminals that share the same ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectivityNode"),", regardless of any phase connectivity."),(0,i.kt)("h2",{id:"tracing"},"Tracing"),(0,i.kt)("h3",{id:"feeder-direction"},"Feeder Direction"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UPSTREAM")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DOWNSTREAM")," are concepts that only apply to equipment on feeders (HV or LV). These directions are purely for finding the feeder head, and have\nnot been calculated with any power flow analysis. There is also a concept of ",(0,i.kt)("inlineCode",{parentName:"p"},"BOTH")," if the feeder head can be found in either direction. e.g. in a loop or dual\nfeed situation"),(0,i.kt)("h3",{id:"basic-traversal"},"Basic Traversal"),(0,i.kt)("p",null,"To trace a network, we obviously need to repeat the above process for each piece of equipment in the connectivity result\nlist. In computer science, stepping between nodes in a data structure like this is known as a traversal. Conveniently,\nthe SDK provides a ",(0,i.kt)("a",{parentName:"p",href:"#"},"Traversal")," interface with a number of implementations also provided for different use cases."),(0,i.kt)("p",null,"The most common type you will use is the ",(0,i.kt)("a",{parentName:"p",href:"#"},"BasicTraversal"),".\nIn a nutshell, this class lets you easily specify how to step to connected objects, add custom actions to perform at\neach step to an object, and conditions on which the tracing should stop. It has some more advanced features, such as\nallowing you to specify how to queue steps (for breadth, or depth or priority traversals) as well as custom tracking\nof objects. See the code docs for more details."),(0,i.kt)("p",null,"There are a number of traces which we have identified as being frequently required. So, the SDK provides a number of\npreconfigured BasicTraversal creators for these common use cases. These can be found in the tracing ",(0,i.kt)("a",{parentName:"p",href:"#"},"package"),"."),(0,i.kt)("p",null,"To get started, lets take a look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"tracing.connected_equipment_trace()"),". This returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicTraversal")," that is\npreconfigured to continuously step to equipment that is connected in any way. Under the covers it uses the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Tracing.connected_equipment")," function we looked at above to continuously step to connected objects. Now, say we wanted to\nidentify the nearest circuit breakers to a piece of equipment, capturing all equipment between those breakers. We can do\nthat with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import NetworkService, AcLineSegment, Breaker, ConductingEquipment\nfrom zepben.evolve.tracing import connected_equipment_trace\nnetwork = NetworkService()\n\n# Populate network service with your network\n\nacls = network.get("my conductor", AcLineSegment)\nif acls:\n    breakers = []\n    equipment_between_breakers = []\n    trace = connected_equipment_trace()\n    trace.add_stop_condition(lambda equip: isinstance(equip, Breaker))\n    trace.add_step_action(lambda equipment, stopping: breakers.append(equipment) if isinstance(equipment, Breaker) elif not stopping equipment_between_breakers.append(equipment))\n    await trace.run(acls)\n\nprint(f"The closest circuit breakers are: {breakers}")\nprint(f"The equipment between the above breakers: {equipment_between_breakers}")\n')),(0,i.kt)("p",null,"Let's break down what is happening with the trace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_stop_condition")," is returning true if the equipment at the current step is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Breaker"),". This will make the trace\nstop at the current step if the equipment is a breaker. Note that this will not terminate the trace, it simply stops\nany more traversing from the current step. That is, no more equipment will be queued to be stepped to from the equipment\nat this step. If there are other paths / branches in the trace in the queue, they will still be stepped to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_step_action")," is capturing the equipment as a breaker if it is a breaker, otherwise it captures the equipment as\nbetween breakers equipment if it is not stopping (as stopping happens on the breaker).")),(0,i.kt)("p",null,"As you can see this provides an extremely simple but powerful way to perform useful traces over your network. "),(0,i.kt)("h3",{id:"useful-traces"},"Useful Traces"),(0,i.kt)("p",null,"There are a number of traces that will be common between all networks. We have identified numerous of these and\nprovide an easy way to instantiate them."),(0,i.kt)("h4",{id:"set-phases-trace"},"Set Phases Trace"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"traces.set_phases()")," returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"zepben.evolve.tracing.phasing.SetPhases")," instance. This provides a way to dynamically set phases at runtime based\non a network's energy sources and the nominal phase connectivity within the network."),(0,i.kt)("h4",{id:"phase-traces"},"Phase Traces"),(0,i.kt)("p",null,"The following traces all use phase based connectivity. This means that equipment that share connectivity nodes, but not phases, will not be considered\nconnected, and when a phase is dropped, it will no longer be considered for future connectivity. Each of these traces will use different aspects of the network\nto limit the scope of the trace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.phase_trace()")," will trace based on nominal phase connectivity, ignoring open switches or in service flags."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.normal_phase_trace()")," will trace based on nominal phase connectivity, stopping at normally open switches or\nequipment flagged as not normally in service. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.current_phase_trace()")," will trace based on nominal phase connectivity, stopping at currently open switches or\nequipment flagged as not currently in service. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.normal_downstream_trace()")," will trace downstream of the start equipment based on the normal state of the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.current_downstream_trace()")," will trace downstream of the start equipment based on the current state of the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.normal_upstream_trace()")," will trace upstream of the start equipment based on the normal state of the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.current_upstream_trace()")," will trace upstream of the start equipment based on the current state of the network.")),(0,i.kt)("h4",{id:"equipment-connectivity-traces"},"Equipment Connectivity Traces"),(0,i.kt)("p",null,"The following work on ",(0,i.kt)("inlineCode",{parentName:"p"},"ConductingEquipment"),", and ignores phase connectivity, instead considering things to be connected if they share a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectivityNode"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.normal_downstream_equipment_trace()")," will trace in the downstream direction, stopping at normally open switches, or equipment flagged as not normally\nin service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.current_downstream_equipment_trace()")," will trace in the downstream direction, stopping at currently open switches, or equipment flagged as not\nnormally in service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.normal_upstream_equipment_trace()")," will trace in the upstream direction, stopping at normally open switches, or equipment flagged as not normally in\nservice."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traces.current_upstream_equipment_trace()")," will trace in the upstream direction, stopping at currently open switches, or equipment flagged as not normally in\nservice.")),(0,i.kt)("h4",{id:"other-traces"},"Other Traces"),(0,i.kt)("p",null,"There are other useful but less common traces available. See the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-sdk-python/blob/main/src/zepben/evolve/services/network/tracing/tracing.py"},"code"),"\nfor all the available traces."))}h.isMDXComponent=!0}}]);