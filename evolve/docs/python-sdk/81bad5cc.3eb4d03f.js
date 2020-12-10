(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(79)),o=(n(83),n(84),{id:"sdk-tracing",title:"Tracing"}),s={unversionedId:"sdk-tracing",id:"sdk-tracing",isDocsHomePage:!1,title:"Tracing",description:"The tracing module is in an experimental state and bugs will be present.",source:"@site/docs\\tracing.mdx",slug:"/sdk-tracing",permalink:"/evolve/docs/python-sdk/sdk-tracing",editUrl:"https://github.com/zepben/docs/tracing.mdx",version:"current",sidebar:"someSidebar",previous:{title:"CIM Services",permalink:"/evolve/docs/python-sdk/sdk-services"},next:{title:"Persisting Models",permalink:"/evolve/docs/python-sdk/sdk-persistence"}},c=[{value:"Basic Connectivity",id:"basic-connectivity",children:[]},{value:"Tracing",id:"tracing",children:[{value:"Basic Traversal",id:"basic-traversal",children:[]},{value:"Useful traces",id:"useful-traces",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The tracing module is in an experimental state and bugs will be present."))),Object(r.b)("p",null,"Once you have a connected network model you can start following the connectivity to do some interesting analysis, from\nsimple tasks such as adding up cable lengths along a line to advanced functions like a full load flow analysis."),Object(r.b)("p",null,"The Evolve SDK provides an API to make following connectivity (what we will call tracing) less cumbersome and more\nproductive. It provides a variety of use-case specific traces out of the box, but also a generic mechanism to write\nyour own traces in an easy to use manner. The\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"Tracing"),"\npackage is a great place to get an overview of the kind of tools we provide as part of the SDK."),Object(r.b)("h2",{id:"basic-connectivity"},"Basic Connectivity"),Object(r.b)("p",null,"So, let's start at the absolute basic use case. \"What is directly connected to this piece of equipment\".\nObviously we provide a function to let you to find out. Let's see it in code:"),Object(r.b)("p",null,"TODO: Take example from datamodel page and code then explain in context of that"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.cimbend import Junction\nfrom zepben.cimbend.tracing import ConnectivityResult, connected_equipment\n\nswitch: Breaker = network.get("aSwitch")\nconnectivity: List<ConnectivityResult> = switch.connected_equipment(PhaseCode.ABCN)\n# or:\nconnectivity: List<ConnectivityResult> = connected_equipment(switch, PhaseCode.ABCN)\nfor cr in connectivity:\n    print(f"{cr.from_equip()} is connected to {it.to_equip()} via terminals {cr.from_terminal()} -> {it.to_terminal()} ",\n          \'through phases {map(cr.nominal_phase_paths(), lambda path: f"{path.from_phase()}:{path.to_phase()}" })\')\n\n')),Object(r.b)("p",null,"Sometimes you want to be a bit more specific about your connectivity, such as what is connected only to one side of the\nequipment. You can do this by using specific terminals:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.cimbend import Breaker\nfrom zepben.cimbend.tracing import ConnectivityResult, connected_terminals\n\nswitch: Breaker = network.get("aSwitch")\nconnectivity: List<ConnectivityResult> = switch.connected_terminals(PhaseCode.ABCN)\n# or\nconnectivity: List<ConnectivityResult> = connected_terminals(switch, PhaseCode.ABCN)\n')),Object(r.b)("p",null,"This will produce a subset of the result above, with just the equipment connected to the given terminal. The\nconnectivity result instances in the subset will be exactly the same as the previous example."),Object(r.b)("h2",{id:"tracing"},"Tracing"),Object(r.b)("h3",{id:"basic-traversal"},"Basic Traversal"),Object(r.b)("p",null,"To trace a network, we obviously need to repeat the above process for each piece of equipment in the connectivity result\nlist. In computer science, stepping between nodes in a data structure like this is known as a traversal. Conveniently,\nthe SDK provides a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"Traversal")," interface with a number of implementations also provided for different use cases."),Object(r.b)("p",null,"The most common type you will use is the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"BasicTraversal"),".\nIn a nutshell, this class lets you easily specify how to step to connected objects, add custom actions to perform at\neach step to an object, and conditions on which the tracing should stop. It has some more advanced features, such as\nallowing you to specify how to queue steps (for breadth, or depth or priority traversals) as well as custom tracking\nof objects. See the code docs for more details."),Object(r.b)("p",null,"There are a number of traces which we have identified as being frequently required. So, the SDK provides a number of\npreconfigured BasicTraversal creators for these common use cases. These can be found in the tracing ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"package"),"."),Object(r.b)("p",null,"To get started, lets take a looks at the ",Object(r.b)("inlineCode",{parentName:"p"},"tracing.connected_equipment_trace()"),". This returns a ",Object(r.b)("inlineCode",{parentName:"p"},"BasicTraversal")," that is\npreconfigured to continuously step to equipment that is connected in any way. Under the covers it uses the\n",Object(r.b)("inlineCode",{parentName:"p"},"Tracing.connected_equipment")," function we looked at above to continuously step to connected objects. Now, say we wanted to\nidentify the nearest circuit breakers to a piece of equipment, capturing all equipment between those breakers. We can do\nthat with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from zepben.cimbend import NetworkService, AcLineSegment, Breaker, ConductingEquipment\nfrom zepben.cimbend.tracing import connected_equipment_trace\nnetwork = NetworkService()\n\n# Populate network service with your network\n\nacls = network.get("my conductor", AcLineSegment)\nif acls:\n    breakers = []\n    equipment_between_breakers = []\n    trace = connected_equipment_trace()\n    trace.add_stop_condition(lambda equip: isinstance(equip, Breaker))\n    trace.add_step_action(lambda equipment, stopping: breakers.append(equipment) if isinstance(equipment, Breaker) elif not stopping equipment_between_breakers.append(equipment))\n    await trace.trace(acls)\n\nprint(f"The closest circuit breakers are: {breakers}")\nprint(f"The equipment between the above breakers: {equipment_between_breakers}")\n')),Object(r.b)("p",null,"Let's break down what is happening with the trace:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"add_stop_condition")," is returning true if the equipment at the current step is a ",Object(r.b)("inlineCode",{parentName:"li"},"Breaker"),". This will make the trace\nstop at the current step if the equipment is a breaker. Note that this will not terminate the trace, it simply stops\nany more traversing from the current step. That is, no more equipment will be queued to be stepped to from the equipment\nat this step. If there are other paths / branches in the trace in the queue, they will still be stepped to."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"add_step_action")," is capturing the equipment as a breaker if it is a breaker, otherwise it captures the equipment as\nbetween breakers equipment if it is not stopping (as stopping happens on the breaker).")),Object(r.b)("p",null,"As you can see this provides an extremely simple but powerful way to perform useful traces over your network. "),Object(r.b)("h3",{id:"useful-traces"},"Useful traces"),Object(r.b)("p",null,"There are a number of traces that will be common between all networks. We have identified numerous of these and\nprovide an easy way to instantiate them."),Object(r.b)("h4",{id:"set-phases-trace"},"Set phases trace"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"traces.set_phases()")," returns a ",Object(r.b)("inlineCode",{parentName:"p"},"zepben.cimbend.tracing.phasing.SetPhases")," instance. This provides a way to dynamically set phases at runtime based\non a network's energy sources and the nominal phase connectivity within the network."),Object(r.b)("h4",{id:"phase-traces"},"Phase traces"),Object(r.b)("p",null,"There are numerous traces to trace based on various types of phasing data:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traces.phase_trace()")," will trace based on nominal phase connectivity, ignoring open switches or in service flags."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traces.normal_phase_trace()")," will trace based on nominal phase connectivity, stopping at normally open switches or\nequipment flagged as not normally in service. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traces.current_phase_trace()")," will trace based on nominal phase connectivity, stopping at currently open switches or\nequipment flagged as not currently in service. ")),Object(r.b)("h4",{id:"downstream--upstream-traces"},"Downstream / Upstream traces"),Object(r.b)("p",null,"There are traces configured to find all upstream or downstream equipment from any piece of equipment that is on a feeder:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traces.normal_downstream_trace()")," will trace downstream of the start equipment based on the normal state of the network."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traces.current_downstream_trace()")," will trace downstream of the start equipment based on the current state of the network."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traces.normal_upstream_trace()")," will trace upstream of the start equipment based on the normal state of the network."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"traces.current_upstream_trace()")," will trace upstream of the start equipment based on the current state of the network.")),Object(r.b)("h4",{id:"other-traces"},"Other traces"),Object(r.b)("p",null,"There are other useful but less common traces available. See the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#"}),"code"),"\nfor all the available traces."))}p.isMDXComponent=!0}}]);