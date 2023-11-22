"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[4763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(4334);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),i=n(4334),o=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=null!=s?s:p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);l(e),c(e),v(e)}),[c,v,i]),tabValues:i}}var k=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var a;const t=u.indexOf(e.currentTarget)+1;n=null!=(a=u[t])?a:u[0];break}case"ArrowLeft":{var r;const t=u.indexOf(e.currentTarget)-1;n=null!=(r=u[t])?r:u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},9458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const l={id:"sdk-tracing",title:"Tracing"},s=void 0,c={unversionedId:"sdk-tracing",id:"version-0.17.0/sdk-tracing",title:"Tracing",description:"Once you have a connected network model you can start following the connectivity to do some interesting analyses, from",source:"@site/versioned_docs/version-0.17.0/tracing.mdx",sourceDirName:".",slug:"/sdk-tracing",permalink:"/evolve/docs/jvm-sdk/0.17.0/sdk-tracing",draft:!1,tags:[],version:"0.17.0",frontMatter:{id:"sdk-tracing",title:"Tracing"},sidebar:"someSidebar",previous:{title:"Phases and Feeder Directions",permalink:"/evolve/docs/jvm-sdk/0.17.0/sdk-phases"},next:{title:"Persisting Models",permalink:"/evolve/docs/jvm-sdk/0.17.0/sdk-persistence"}},u={},p=[{value:"Basic Connectivity",id:"basic-connectivity",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Feeder Direction",id:"feeder-direction",level:3},{value:"Basic Traversal",id:"basic-traversal",level:3},{value:"Useful Traces",id:"useful-traces",level:3},{value:"Set Phases Trace",id:"set-phases-trace",level:4},{value:"Phase Traces",id:"phase-traces",level:4},{value:"Equipment Connectivity Traces",id:"equipment-connectivity-traces",level:4},{value:"Other Traces",id:"other-traces",level:4}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once you have a connected network model you can start following the connectivity to do some interesting analyses, from\nsimple tasks such as adding up cable lengths along a line to advanced functions like a full load flow analysis."),(0,r.kt)("p",null,"The Evolve SDK provides an API to make following connectivity (what we will call tracing) less cumbersome and more\nproductive. It provides a variety of use-case specific traces out of the box, but also a generic mechanism to write\nyour own traces in an easy to use manner. The\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/cimbend/network/tracing/Tracing.java"},"Tracing"),"\npackage is a great place to get an overview of the kind of tools we provide as part of the SDK."),(0,r.kt)("h2",{id:"basic-connectivity"},"Basic Connectivity"),(0,r.kt)("p",null,"So, let's start at the absolute basic use case. \"What is directly connected to this piece of equipment?\".\nObviously we provide a function to let you to find out. Let's see it in code:"),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Breaker aSwitch = network.get(Breaker.class, "aSwitch");\nList<ConnectivityResult> connectivity = NetworkService.connectedEquipment(aSwitch, PhaseCode.ABCN);\nconnectivity.forEach(cr -> {\n    System.out.printf(\n        "%s is connected to %s via terminals %s -> %s through phases %s%n",\n        cr.getFrom(),\n        cr.getTo(),\n        cr.getFromTerminal(),\n        cr.getToTerminal(),\n        cr.getNominalPhasePaths().stream().map(path -> String.format("%s:%s", path.getFrom(), path.getTo())).collect(joining())\n    );\n});\n'))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val aSwitch = network.get<Breaker>("aSwitch")\nval connectivity = NetworkService.connectedEquipment(aSwitch, PhaseCode.ABCN)\nconnectivity.forEach {\n    println(\n        "${it.from} is connected to ${it.to} " +\n            "via terminals ${it.fromTerminal} -> ${it.toTerminal} " +\n            """through phases ${it.nominalPhasePaths.map { path -> "${path.from}:${path.to}" }}"""\n    )\n}\n')))),(0,r.kt)("p",null,'Sometimes you want to be a bit more specific about your connectivity, such as "what is connected only to one side of the\nequipment?". You can do this by using specific terminals:'),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Breaker aSwitch = network.get(Breaker.class, "aSwitch");\nList<ConnectivityResult> connectivity = NetworkService.connectedTerminals(aSwitch.getTerminal(1), PhaseCode.ABCN);\n'))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val aSwitch = network.get<Breaker>("aSwitch")\nval connectivity = NetworkService.connectedTerminals(aSwitch.getTerminal(1), PhaseCode.ABCN)\n')))),(0,r.kt)("p",null,"This will produce a subset of the result above, with just the equipment connected to the given terminal. The\nconnectivity result instances in the subset will be exactly the same as the previous example."),(0,r.kt)("p",null,"Sometimes you do not care about the phase connectivity at all, and are just interested in terminals that share a connectivity node:"),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Breaker aSwitch = network.get(Breaker.class, "aSwitch");\nIterator<Terminal> iter = aSwitch.getTerminal(1).connectedTerminals().iterator();\nwhile (iter.hasNext()) {\n    System.out.println(iter.next());\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val aSwitch = network.get<Breaker>("aSwitch")\naSwitch.getTerminal(1)!!.connectedTerminals().forEach { println(it) }\n')))),(0,r.kt)("p",null,"This will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Sequence")," of all the terminals that share the same ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectivityNode"),", regardless of any phase connectivity."),(0,r.kt)("h2",{id:"tracing"},"Tracing"),(0,r.kt)("h3",{id:"feeder-direction"},"Feeder Direction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UPSTREAM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DOWNSTREAM")," are concepts that only apply to equipment on feeders (HV or LV). These directions are purely for finding the feeder head, and have\nnot been calculated with any power flow analysis. There is also a concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"BOTH")," if the feeder head can be found in either direction. e.g. in a loop or dual\nfeed situation"),(0,r.kt)("h3",{id:"basic-traversal"},"Basic Traversal"),(0,r.kt)("p",null,"To trace a network, we obviously need to repeat the above process for each piece of equipment in the connectivity result\nlist. In computer science, stepping between nodes in a data structure like this is known as a traversal. Conveniently,\nthe SDK provides a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/traversals/Traversal.java"},"Traversal"),"\ninterface with a number of implementations also provided for different use cases."),(0,r.kt)("p",null,"The most common type you will use is the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/traversals/BasicTraversal.java"},"BasicTraversal"),".\nIn a nutshell, this class lets you easily specify how to step to connected objects, add custom actions to perform at\neach step to an object, and conditions on which the tracing should stop. It has some more advanced features, such as\nallowing you to specify how to queue steps (for breadth, or depth or priority traversals) as well as custom tracking\nof objects. See the code docs for more details."),(0,r.kt)("p",null,"There are a number of traces which we have identified as being frequently required. So, the SDK provides a number of\npreconfigured BasicTraversal creators for these common use cases. These can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/cimbend/network/tracing/Tracing.java"},"tracing package"),"."),(0,r.kt)("p",null,"To get started, lets take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracing.connectedEquipmentTrace()"),". This returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicTraversal")," that is\npreconfigured to continously step to equipment that is connected in any way. Under the covers it uses the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tracing.connectedEquipment")," function we looked at above to continously step to connected objects. Now, say we wanted to\nidentify the nearest circuit breakers to a piece of equipment, capturing all equipment between those breakers. We can do\nthat with the following:"),(0,r.kt)(i.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'NetworkService network = new NetworkService();\n\n// Populate network service with your network\n\nAcLineSegment acLineSeg = network.get(AcLineSegment.class, "my conductor");\nif (acLineSeg == null)\n    return;\n\nConnectedEquipmentTraversal trace = Tracing.connectedEquipmentTrace();\n\nList<Breaker> breakers = new ArrayList<>();\nList<ConductingEquipment> equipmentBetweenBreakers = new ArrayList<>();\ntrace.addStopCondition(step -> step.getConductingEquipment() instanceof Breaker)\n    .addStepAction((step, isStopping) -> {\n        if (step.getConductingEquipment() instanceof Breaker) {\n            breakers.add((Breaker) step.getConductingEquipment());\n        } else if (!isStopping) {\n            equipmentBetweenBreakers.add(step.getConductingEquipment());\n        }\n    });\n\ntrace.run(acLineSeg);\n\nSystem.out.println("The closest circuit breakers are: " + breakers);\nSystem.out.println("The equipment between the above breakers: " + equipmentBetweenBreakers);\n'))),(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val network = NetworkService()\n\n// Populate network service with your network\n\nval acLineSeg = network.get<AcLineSegment>("my conductor") ?: return\n\nval breakers = mutableListOf<Breaker>()\nval equipmentBetweenBreakers = mutableListOf<ConductingEquipment>()\nTracing.connectedEquipmentTrace().apply {\n    addStopCondition { (ce) -> ce is Breaker }\n    addStepAction { (ce), isStopping ->\n        if (ce is Breaker) {\n            breakers.add(ce)\n        } else if (!isStopping) {\n            equipmentBetweenBreakers.add(ce)\n        }\n    }\n}.run(acLineSeg)\n\nprintln("The closest circuit breakers are: $breakers")\nprintln("The equipment between the above breakers: $equipmentBetweenBreakers")\n')))),(0,r.kt)("p",null,"Let's break down what is happening with the trace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addStopCondition")," is returning true if the equipment at the current step is a ",(0,r.kt)("inlineCode",{parentName:"li"},"Breaker"),". This will make the trace\nstop at the current step if the equipment is a breaker. Note that this will not terminate the trace, it simply stops\nany more traversing from the current step. That is, no more equipment will be queued to be stepped to from the equipment\nat this step. If there are other paths / branches in the trace in the queue, they will still be stepped to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addStepAction")," is capturing the equipment as a breaker if it is a breaker, otherwise it captures the equipment as\nbetween breakers equipment if it is not stopping (as stopping happens on the breaker).")),(0,r.kt)("p",null,"As you can see this provides an extremely simple but powerful way to perform useful traces over your network. "),(0,r.kt)("h3",{id:"useful-traces"},"Useful Traces"),(0,r.kt)("p",null,"There are a number of traces that will be common between all networks. We have identified numerous of these and\nprovide an easy way to instantiate them."),(0,r.kt)("h4",{id:"set-phases-trace"},"Set Phases Trace"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Tracing.setPhases()")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"SetPhases")," instance. This provides a way to dynamically set phases at runtime based\non a network's energy sources and the nominal phase connectivity within the network."),(0,r.kt)("h4",{id:"phase-traces"},"Phase Traces"),(0,r.kt)("p",null,"The following traces all use phase based connectivity. This means that equipment that share connectivity nodes, but not phases, will not be considered\nconnected, and when a phase is dropped, it will no longer be considered for future connectivity. Each of these traces will use different aspects of the network\nto limit the scope of the trace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.phaseTrace()")," will trace based on nominal phase connectivity, ignoring open switches or in service flags."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.normalPhaseTrace()")," will trace based on nominal phase connectivity, stopping at normally open switches or\nequipment flagged as not normally in service. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.currentPhaseTrace()")," will trace based on nominal phase connectivity, stopping at currently open switches or\nequipment flagged as not currently in service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.normalDownstreamTrace()")," will trace downstream of the start equipment based on the normal state of the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.currentDownstreamTrace()")," will trace downstream of the start equipment based on the current state of the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.normalUpstreamTrace()")," will trace upstream of the start equipment based on the normal state of the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.currentUpstreamTrace()")," will trace upstream of the start equipment based on the current state of the network.")),(0,r.kt)("h4",{id:"equipment-connectivity-traces"},"Equipment Connectivity Traces"),(0,r.kt)("p",null,"The following work on ",(0,r.kt)("inlineCode",{parentName:"p"},"ConductingEquipment"),", and ignores phase connectivity, instead considering things to be connected if they share a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectivityNode"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.normalDownstreamEquipmentTrace()")," will trace in the downstream direction, stopping at normally open switches, or equipment flagged as not normally in\nservice."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.currentDownstreamEquipmentTrace()")," will trace in the downstream direction, stopping at currently open switches, or equipment flagged as not normally\nin service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.normalUpstreamEquipmentTrace()")," will trace in the upstream direction, stopping at normally open switches, or equipment flagged as not normally in\nservice."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.currentUpstreamEquipmentTrace()")," will trace in the upstream direction, stopping at currently open switches, or equipment flagged as not normally in\nservice.")),(0,r.kt)("h4",{id:"other-traces"},"Other Traces"),(0,r.kt)("p",null,"There are other useful but less common traces available. See the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-sdk-jvm/blob/main/src/main/java/com/zepben/cimbend/network/tracing/Tracing.java"},"code"),"\nfor all the available traces."))}h.isMDXComponent=!0}}]);