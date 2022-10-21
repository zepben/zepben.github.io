(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(164)),o=a(165),c=a(166),s={id:"sdk-tracing",title:"Tracing"},l={unversionedId:"sdk-tracing",id:"version-0.11.0/sdk-tracing",isDocsHomePage:!1,title:"Tracing",description:"Once you have a connected network model you can start following the connectivity to do some interesting analyses, from",source:"@site/versioned_docs/version-0.11.0/tracing.mdx",slug:"/sdk-tracing",permalink:"/evolve/docs/jvm-sdk/0.11.0/sdk-tracing",version:"0.11.0",sidebar:"version-0.11.0/someSidebar",previous:{title:"Phases and Feeder Directions",permalink:"/evolve/docs/jvm-sdk/0.11.0/sdk-phases"},next:{title:"Persisting Models",permalink:"/evolve/docs/jvm-sdk/0.11.0/sdk-persistence"}},u=[{value:"Basic Connectivity",id:"basic-connectivity",children:[]},{value:"Tracing",id:"tracing",children:[{value:"Basic Traversal",id:"basic-traversal",children:[]},{value:"Useful traces",id:"useful-traces",children:[]}]}],p={toc:u};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Once you have a connected network model you can start following the connectivity to do some interesting analyses, from\nsimple tasks such as adding up cable lengths along a line to advanced functions like a full load flow analysis."),Object(i.a)("p",null,"The Evolve SDK provides an API to make following connectivity (what we will call tracing) less cumbersome and more\nproductive. It provides a variety of use-case specific traces out of the box, but also a generic mechanism to write\nyour own traces in an easy to use manner. The\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/cimbend/network/tracing/Tracing.java"}),"Tracing"),"\npackage is a great place to get an overview of the kind of tools we provide as part of the SDK."),Object(i.a)("h2",{id:"basic-connectivity"},"Basic Connectivity"),Object(i.a)("p",null,"So, let's start at the absolute basic use case. \"What is directly connected to this piece of equipment?\".\nObviously we provide a function to let you to find out. Let's see it in code:"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Breaker switch = network.get("aSwitch);\nList<ConnectivityResult> connectivity = Tracing.connectedEquipment(switch, PhaseCode.ABCN);\nconnectivity.forEach(cr -> {\n    println(String.format(\n        "%s is connected to %s " +\n        "via terminals %s -> ${it.toTerminal()} " +\n        "through phases %s",\n        it.from(),\n        it.to(),\n        it.fromTerminal(),\n        it.toTerminal(),\n        it.nominalPhasePaths().stream().map(path -> "${path.from()}:${path.to()}" }).collect(joining())\n    ));\n}\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val switch: Breaker = network.get("aSwitch)\nval connectivity: List<ConnectivityResult> = Tracing.connectedEquipment(switch, PhaseCode.ABCN)\nconnectivity.forEach {\n    println(\n        "${it.from()} is connected to ${it.to()} " +\n        "via terminals ${it.fromTerminal()} -> ${it.toTerminal()} " +\n        """through phases ${it.nominalPhasePaths().map { path -> "${path.from()}:${path.to()}" }}"""\n    )\n}\n')))),Object(i.a)("p",null,'Sometimes you want to be a bit more specific about your connectivity, such as "what is connected only to one side of the\nequipment?". You can do this by using specific terminals:'),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Breaker switch = network.get("aSwitch);\nList<ConnectivityResult> connectivity = Tracing.connectedTerminals(switch, PhaseCode.ABCN);\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val switch: Breaker = network.get("aSwitch)\nval connectivity: List<ConnectivityResult> = Tracing.connectedTerminals(switch, PhaseCode.ABCN)\n')))),Object(i.a)("p",null,"This will produce a subset of the result above, with just the equipment connected to the given terminal. The\nconnectivity result instances in the subset will be exactly the same as the previous example."),Object(i.a)("h2",{id:"tracing"},"Tracing"),Object(i.a)("h3",{id:"basic-traversal"},"Basic Traversal"),Object(i.a)("p",null,"To trace a network, we obviously need to repeat the above process for each piece of equipment in the connectivity result\nlist. In computer science, stepping between nodes in a data structure like this is known as a traversal. Conveniently,\nthe SDK provides a ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/traversals/Traversal.java"}),"Traversal"),"\ninterface with a number of implementations also provided for different use cases."),Object(i.a)("p",null,"The most common type you will use is the\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/traversals/BasicTraversal.java"}),"BasicTraversal"),".\nIn a nutshell, this class lets you easily specify how to step to connected objects, add custom actions to perform at\neach step to an object, and conditions on which the tracing should stop. It has some more advanced features, such as\nallowing you to specify how to queue steps (for breadth, or depth or priority traversals) as well as custom tracking\nof objects. See the code docs for more details."),Object(i.a)("p",null,"There are a number of traces which we have identified as being frequently required. So, the SDK provides a number of\npreconfigured BasicTraversal creators for these common use cases. These can be found in the\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/cimbend/network/tracing/Tracing.java"}),"tracing package"),"."),Object(i.a)("p",null,"To get started, lets take a look at the ",Object(i.a)("inlineCode",{parentName:"p"},"Tracing.connectedEquipmentTrace()"),". This returns a ",Object(i.a)("inlineCode",{parentName:"p"},"BasicTraversal")," that is\npreconfigured to continously step to equipment that is connected in any way. Under the covers it uses the\n",Object(i.a)("inlineCode",{parentName:"p"},"Tracing.connectedEquipment")," function we looked at above to continously step to connected objects. Now, say we wanted to\nidentify the nearest circuit breakers to a piece of equipment, capturing all equipment between those breakers. We can do\nthat with the following:"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'NetworkService network = new NetworkService();\n\n// Populate network service with your network\n\nAcLineSegment acLineSeg = network.get("my conductor", AcLineSegment.class);\nif (acLineSeg == null) \n    return;\n\nList<Breaker> breakers = new ArrayList<>();\nList<ConductingEquipment> equipmentBetweenBreakers = ArrayList<>();\nTracing.connectedEquipmentTrace()\n    .addStopCondition(equipment -> equipment instanceof Breaker)\n    .addStepAction((equipment, isStopping) -> {\n        if (equipment instanceof Breaker) {\n            breakers.add((Breaker) equipment);\n        } else if (!isStopping) {\n            equipmentBetweenBreakers.add(equipment);\n        }\n    })\n    .run(acLineSeg);\n\nSystem.out.println("The closest circuit breakers are: " + breakers);\nSystem.out.println("The equipment between the above breakers: " + equipmentBetweenBreakers);\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'val network = NetworkService()\n\n// Populate network service with your network\n\nval acLineSeg = network.get<AcLineSegment>("my conductor") ?: return\n\nval breakers = mutableListOf<Breaker>()\nval equipmentBetweenBreakers = mutableListOf<ConductingEquipment>()\nTracing.connectedEquipmentTrace()\n    .addStopCondition { it is Breaker }\n    .addStepAction { equipment, isStopping ->\n        if (equipment is Breaker) {\n            breakers.add(equipment)\n        } else if (!isStopping) {\n            equipmentBetweenBreakers.add(equipment)\n        }\n    }\n    .run(acLineSeg)\n\nprintln("The closest circuit breakers are: $breakers")\nprintln("The equipment between the above breakers: $equipmentBetweenBreakers")\n')))),Object(i.a)("p",null,"Let's break down what is happening with the trace:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"addStopCondition")," is returning true if the equipment at the current step is a ",Object(i.a)("inlineCode",{parentName:"li"},"Breaker"),". This will make the trace\nstop at the current step if the equipment is a breaker. Note that this will not terminate the trace, it simply stops\nany more traversing from the current step. That is, no more equipment will be queued to be stepped to from the equipment\nat this step. If there are other paths / branches in the trace in the queue, they will still be stepped to."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"addStepAction")," is capturing the equipment as a breaker if it is a breaker, otherwise it captures the equipment as\nbetween breakers equipment if it is not stopping (as stopping happens on the breaker).")),Object(i.a)("p",null,"As you can see this provides an extremely simple but powerful way to perform useful traces over your network. "),Object(i.a)("h3",{id:"useful-traces"},"Useful traces"),Object(i.a)("p",null,"There are a number of traces that will be common between all networks. We have identified numerous of these and\nprovide an easy way to instantiate them."),Object(i.a)("h4",{id:"set-phases-trace"},"Set phases trace"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"Tracing.setPhases()")," returns a ",Object(i.a)("inlineCode",{parentName:"p"},"SetPhases")," instance. This provides a way to dynamically set phases at runtime based\non a network's energy sources and the nominal phase connectivity within the network."),Object(i.a)("h4",{id:"phase-traces"},"Phase traces"),Object(i.a)("p",null,"There are numerous traces to trace based on various types of phasing data. These traces will ignore "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Tracing.phaseTrace()")," will trace based on nominal phase connectivity, ignoring open switches or in service flags."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Tracing.normalPhaseTrace()")," will trace based on nominal phase connectivity, stopping at normally open switches or\nequipment flagged as not normally in service. "),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Tracing.currentPhaseTrace()")," will trace based on nominal phase connectivity, stopping at currently open switches or\nequipment flagged as not currently in service. ")),Object(i.a)("h4",{id:"downstream--upstream-traces"},"Downstream / Upstream traces"),Object(i.a)("p",null,"There are traces configured to find all upstream or downstream equipment from any piece of equipment that is on a feeder:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Tracing.normalDownstreamTrace()")," will trace downstream of the start equipment based on the normal state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Tracing.currentDownstreamTrace()")," will trace downstream of the start equipment based on the current state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Tracing.normalUpstreamTrace()")," will trace upstream of the start equipment based on the normal state of the network."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"Tracing.currentUpstreamTrace()")," will trace upstream of the start equipment based on the current state of the network.")),Object(i.a)("h4",{id:"other-traces"},"Other traces"),Object(i.a)("p",null,"There are other useful but less common traces available. See the\n",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/cimbend/network/tracing/Tracing.java"}),"code"),"\nfor all the available traces."))}m.isMDXComponent=!0},161:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},162:function(e,t,a){"use strict";var n=a(0),r=a(163);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},163:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return a?r.a.createElement(b,c({ref:t},l,{components:a})):r.a.createElement(b,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(162),o=a(161),c=a(55),s=a.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,b=Object(i.a)(),h=b.tabGroupChoices,v=b.setTabGroupChoices,f=Object(n.useState)(c),g=f[0],j=f[1],w=n.Children.toArray(e.children);if(null!=m){var y=h[m];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&j(y)}var O=function(e){j(e),null!=m&&v(m,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return O(t)},onClick:function(){O(t)}},a)}))),t?Object(n.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},166:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);