"use strict";(self.webpackChunkpython_lib_ci_test=self.webpackChunkpython_lib_ci_test||[]).push([[5372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const i={id:"sdk-tracing",title:"Tracing"},o=void 0,s={unversionedId:"sdk-tracing",id:"sdk-tracing",title:"Tracing",description:"The tracing module is in an experimental state and bugs will be present.",source:"@site/docs/tracing.mdx",sourceDirName:".",slug:"/sdk-tracing",permalink:"/evolve/docs/python-lib-test/next/sdk-tracing",draft:!1,tags:[],version:"current",frontMatter:{id:"sdk-tracing",title:"Tracing"},sidebar:"someSidebar",previous:{title:"Phases and Feeder Directions",permalink:"/evolve/docs/python-lib-test/next/sdk-phases"},next:{title:"Persisting Models",permalink:"/evolve/docs/python-lib-test/next/sdk-persistence"}},c={},l=[{value:"Basic Connectivity",id:"basic-connectivity",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Basic Traversal",id:"basic-traversal",level:3},{value:"Useful traces",id:"useful-traces",level:3},{value:"Set phases trace",id:"set-phases-trace",level:4},{value:"Phase traces",id:"phase-traces",level:4},{value:"Downstream / Upstream traces",id:"downstream--upstream-traces",level:4},{value:"Other traces",id:"other-traces",level:4}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The tracing module is in an experimental state and bugs will be present.")),(0,r.kt)("p",null,"Once you have a connected network model you can start following the connectivity to do some interesting analyses, from\nsimple tasks such as adding up cable lengths along a line to advanced functions like a full load flow analysis."),(0,r.kt)("p",null,"The Evolve SDK provides an API to make following connectivity (what we will call tracing) less cumbersome and more\nproductive. It provides a variety of use-case specific traces out of the box, but also a generic mechanism to write\nyour own traces in an easy to use manner. The\n",(0,r.kt)("a",{parentName:"p",href:"#"},"Tracing"),"\npackage is a great place to get an overview of the kind of tools we provide as part of the SDK."),(0,r.kt)("h2",{id:"basic-connectivity"},"Basic Connectivity"),(0,r.kt)("p",null,"So, let's start at the absolute basic use case. \"What is directly connected to this piece of equipment?\".\nObviously we provide a function to let you to find out. Let's see it in code:"),(0,r.kt)("p",null,"TODO: Take example from datamodel page and code then explain in context of that"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import Junction\nfrom zepben.evolve.tracing import ConnectivityResult, connected_equipment\n\nswitch: Breaker = network.get("aSwitch")\nconnectivity: List<ConnectivityResult> = switch.connected_equipment(PhaseCode.ABCN)\n# or:\nconnectivity: List<ConnectivityResult> = connected_equipment(switch, PhaseCode.ABCN)\nfor cr in connectivity:\n    print(f"{cr.from_equip()} is connected to {it.to_equip()} via terminals {cr.from_terminal()} -> {it.to_terminal()} ",\n          \'through phases {map(cr.nominal_phase_paths(), lambda path: f"{path.from_phase()}:{path.to_phase()}" })\')\n\n')),(0,r.kt)("p",null,'Sometimes you want to be a bit more specific about your connectivity, such as "what is connected only to one side of the\nequipment?". You can do this by using specific terminals:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import Breaker\nfrom zepben.evolve.tracing import ConnectivityResult, connected_terminals\n\nswitch: Breaker = network.get("aSwitch")\nconnectivity: List<ConnectivityResult> = switch.connected_terminals(PhaseCode.ABCN)\n# or\nconnectivity: List<ConnectivityResult> = connected_terminals(switch, PhaseCode.ABCN)\n')),(0,r.kt)("p",null,"This will produce a subset of the result above, with just the equipment connected to the given terminal. The\nconnectivity result instances in the subset will be exactly the same as the previous example."),(0,r.kt)("h2",{id:"tracing"},"Tracing"),(0,r.kt)("h3",{id:"basic-traversal"},"Basic Traversal"),(0,r.kt)("p",null,"To trace a network, we obviously need to repeat the above process for each piece of equipment in the connectivity result\nlist. In computer science, stepping between nodes in a data structure like this is known as a traversal. Conveniently,\nthe SDK provides a ",(0,r.kt)("a",{parentName:"p",href:"#"},"Traversal")," interface with a number of implementations also provided for different use cases."),(0,r.kt)("p",null,"The most common type you will use is the ",(0,r.kt)("a",{parentName:"p",href:"#"},"BasicTraversal"),".\nIn a nutshell, this class lets you easily specify how to step to connected objects, add custom actions to perform at\neach step to an object, and conditions on which the tracing should stop. It has some more advanced features, such as\nallowing you to specify how to queue steps (for breadth, or depth or priority traversals) as well as custom tracking\nof objects. See the code docs for more details."),(0,r.kt)("p",null,"There are a number of traces which we have identified as being frequently required. So, the SDK provides a number of\npreconfigured BasicTraversal creators for these common use cases. These can be found in the tracing ",(0,r.kt)("a",{parentName:"p",href:"#"},"package"),"."),(0,r.kt)("p",null,"To get started, lets take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"tracing.connected_equipment_trace()"),". This returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicTraversal")," that is\npreconfigured to continuously step to equipment that is connected in any way. Under the covers it uses the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tracing.connected_equipment")," function we looked at above to continuously step to connected objects. Now, say we wanted to\nidentify the nearest circuit breakers to a piece of equipment, capturing all equipment between those breakers. We can do\nthat with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import NetworkService, AcLineSegment, Breaker, ConductingEquipment\nfrom zepben.evolve.tracing import connected_equipment_trace\nnetwork = NetworkService()\n\n# Populate network service with your network\n\nacls = network.get("my conductor", AcLineSegment)\nif acls:\n    breakers = []\n    equipment_between_breakers = []\n    trace = connected_equipment_trace()\n    trace.add_stop_condition(lambda equip: isinstance(equip, Breaker))\n    trace.add_step_action(lambda equipment, stopping: breakers.append(equipment) if isinstance(equipment, Breaker) elif not stopping equipment_between_breakers.append(equipment))\n    await trace.trace(acls)\n\nprint(f"The closest circuit breakers are: {breakers}")\nprint(f"The equipment between the above breakers: {equipment_between_breakers}")\n')),(0,r.kt)("p",null,"Let's break down what is happening with the trace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_stop_condition")," is returning true if the equipment at the current step is a ",(0,r.kt)("inlineCode",{parentName:"li"},"Breaker"),". This will make the trace\nstop at the current step if the equipment is a breaker. Note that this will not terminate the trace, it simply stops\nany more traversing from the current step. That is, no more equipment will be queued to be stepped to from the equipment\nat this step. If there are other paths / branches in the trace in the queue, they will still be stepped to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_step_action")," is capturing the equipment as a breaker if it is a breaker, otherwise it captures the equipment as\nbetween breakers equipment if it is not stopping (as stopping happens on the breaker).")),(0,r.kt)("p",null,"As you can see this provides an extremely simple but powerful way to perform useful traces over your network. "),(0,r.kt)("h3",{id:"useful-traces"},"Useful traces"),(0,r.kt)("p",null,"There are a number of traces that will be common between all networks. We have identified numerous of these and\nprovide an easy way to instantiate them."),(0,r.kt)("h4",{id:"set-phases-trace"},"Set phases trace"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"traces.set_phases()")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"zepben.evolve.tracing.phasing.SetPhases")," instance. This provides a way to dynamically set phases at runtime based\non a network's energy sources and the nominal phase connectivity within the network."),(0,r.kt)("h4",{id:"phase-traces"},"Phase traces"),(0,r.kt)("p",null,"There are numerous traces to trace based on various types of phasing data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"traces.phase_trace()")," will trace based on nominal phase connectivity, ignoring open switches or in service flags."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"traces.normal_phase_trace()")," will trace based on nominal phase connectivity, stopping at normally open switches or\nequipment flagged as not normally in service. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"traces.current_phase_trace()")," will trace based on nominal phase connectivity, stopping at currently open switches or\nequipment flagged as not currently in service. ")),(0,r.kt)("h4",{id:"downstream--upstream-traces"},"Downstream / Upstream traces"),(0,r.kt)("p",null,"There are traces configured to find all upstream or downstream equipment from any piece of equipment that is on a feeder:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"traces.normal_downstream_trace()")," will trace downstream of the start equipment based on the normal state of the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"traces.current_downstream_trace()")," will trace downstream of the start equipment based on the current state of the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"traces.normal_upstream_trace()")," will trace upstream of the start equipment based on the normal state of the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"traces.current_upstream_trace()")," will trace upstream of the start equipment based on the current state of the network.")),(0,r.kt)("h4",{id:"other-traces"},"Other traces"),(0,r.kt)("p",null,"There are other useful but less common traces available. See the\n",(0,r.kt)("a",{parentName:"p",href:"#"},"code"),"\nfor all the available traces."))}m.isMDXComponent=!0}}]);