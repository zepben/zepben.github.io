"use strict";(self.webpackChunkewb_sdk_examples_python_doco=self.webpackChunkewb_sdk_examples_python_doco||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},9625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const i={id:"examples-examine-connectivity",title:"Examine Connectivity of a Power Network"},o=void 0,s={unversionedId:"examples-examine-connectivity",id:"version-0.2.0/examples-examine-connectivity",title:"Examine Connectivity of a Power Network",description:"This example demonstrates how to examine the connectivity of a power system network.",source:"@site/versioned_docs/version-0.2.0/examine-connectivity.mdx",sourceDirName:".",slug:"/examples-examine-connectivity",permalink:"/evolve/docs/ewb-sdk-examples-python/0.2.0/examples-examine-connectivity",draft:!1,tags:[],version:"0.2.0",frontMatter:{id:"examples-examine-connectivity",title:"Examine Connectivity of a Power Network"},sidebar:"someSidebar",previous:{title:"Interacting With a Network Model",permalink:"/evolve/docs/ewb-sdk-examples-python/0.2.0/examples-network-service-interactions"},next:{title:"Building an IEEE Test Feeder",permalink:"/evolve/docs/ewb-sdk-examples-python/0.2.0/examples-ieee-13-node-feeder"}},l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Part A: Create a Network (Simple Example)",id:"part-a-create-a-network-simple-example",level:2},{value:"Step 1: Create an Energy Source",id:"step-1-create-an-energy-source",level:3},{value:"Step 2: Create the HV Line",id:"step-2-create-the-hv-line",level:3},{value:"Step 3: Create the HV Fuse",id:"step-3-create-the-hv-fuse",level:3},{value:"Step 4: Create a Power Transformer",id:"step-4-create-a-power-transformer",level:3},{value:"Step 5: Create the LV Fuse",id:"step-5-create-the-lv-fuse",level:3},{value:"Step 6: Create a Circuit Breaker",id:"step-6-create-a-circuit-breaker",level:3},{value:"Step 7: Create the LV Line",id:"step-7-create-the-lv-line",level:3},{value:"Step 8: Create an Energy Consumer",id:"step-8-create-an-energy-consumer",level:3},{value:"Step 9: Create a Network Service",id:"step-9-create-a-network-service",level:3},{value:"Step 10: Connect Objects",id:"step-10-connect-objects",level:3},{value:"Part B: Examine Connectivity of the Network",id:"part-b-examine-connectivity-of-the-network",level:2},{value:"Functions",id:"functions",level:3},{value:"Example Usages",id:"example-usages",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to examine the connectivity of a power system network.\nIn this example, we will build a simple network shown below and test the connectivity between different equipment."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9579).Z,width:"1755",height:"1240"})),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Ensure that you have installed and imported the required dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.evolve import EnergySource, AcLineSegment, Fuse, PowerTransformer, Breaker, EnergyConsumer, NetworkService, Terminal, connected_equipment, \\\n    ConductingEquipment, PhaseCode, connected_terminals, ConnectivityResult\n")),(0,r.kt)("h2",{id:"part-a-create-a-network-simple-example"},"Part A: Create a Network (Simple Example)"),(0,r.kt)("h3",{id:"step-1-create-an-energy-source"},"Step 1: Create an Energy Source"),(0,r.kt)("p",null,"An Energy Source is a generic equivalent for an energy supplier on a transmission or distribution voltage level.\nEnergy sources are the foundation of power networks as they provide the electricity needed for various applications.\nTo create an energy source, you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"EnergySource")," class. To connect this Energy Source to any other equipment, you need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," (an AC electrical connection point to a piece of conducting equipment) for the energy source. Use the Terminal class to create a terminal for the energy source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'es_t = Terminal(mrid="es-t")\nes = EnergySource(mrid="es", terminals=[es_t])\n')),(0,r.kt)("h3",{id:"step-2-create-the-hv-line"},"Step 2: Create the HV Line"),(0,r.kt)("p",null,"The HV Line in this example will be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"AcLineSegment")," class. AC Line Segment can be a wire or a combination of wires with consistent electrical characteristics, building a single electrical system, used to carry alternating current between points in the power system.\nAn AC Line Segment has two ends. Hence, you will need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," for each end to be able to connect the Line to any other equipment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'hv_line_t1, hv_line_t2 = Terminal(mrid="hv_line_t1"), Terminal(mrid="hv_line_t2")\nhv_line = AcLineSegment(mrid="hv_line", terminals=[hv_line_t1, hv_line_t2])\n')),(0,r.kt)("h3",{id:"step-3-create-the-hv-fuse"},"Step 3: Create the HV Fuse"),(0,r.kt)("p",null,"A fuse is an overcurrent protective device with a circuit opening fusible part that is heated and severed by the passage of overcurrent through it. A fuse is considered a switching device because it breaks current.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Fuse")," class will be used to create a fuse in this example. Note that a fuse has two ends, so you will need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," for each end to be able to connect to other equipment in the network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'hv_fuse_t1, hv_fuse_t2 = Terminal(mrid="hv_fuse_t1"), Terminal(mrid="hv_fuse_t2")\nhv_fuse = Fuse(mrid="hv_fuse", terminals=[hv_fuse_t1, hv_fuse_t2])\n')),(0,r.kt)("h3",{id:"step-4-create-a-power-transformer"},"Step 4: Create a Power Transformer"),(0,r.kt)("p",null,"A Power Transformer is an electrical device consisting of  two or more coupled windings, with or without a magnetic core, for introducing mutual coupling between electric circuits.\nA Power Transformer typically has two terminals, but may have one (grounding), three or more terminals.\nIn this example, we are creating a two-winding transformer, so the transformer will consist of two ends that will connect to other devices in the network as shown in the simple example diagram.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"PowerTransformer")," class will be used to create the Power Transformer, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," class for creating the terminal for the Power Transformer, as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'tx_t1, tx_t2 = Terminal(mrid="tx_t1"), Terminal(mrid="tx_t2", phases=PhaseCode.ABCN)\ntx = PowerTransformer(mrid="tx", terminals=[tx_t1, tx_t2])\n')),(0,r.kt)("h3",{id:"step-5-create-the-lv-fuse"},"Step 5: Create the LV Fuse"),(0,r.kt)("p",null,"Description: Same as Step 3.."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'lv_fuse_t1, lv_fuse_t2 = Terminal(mrid="lv_fuse_t1", phases=PhaseCode.ABCN), Terminal(mrid="lv_fuse_t2", phases=PhaseCode.ABCN)\nlv_fuse = Fuse(mrid="lv_fuse", terminals=[lv_fuse_t1, lv_fuse_t2])\n')),(0,r.kt)("h3",{id:"step-6-create-a-circuit-breaker"},"Step 6: Create a Circuit Breaker"),(0,r.kt)("p",null,"A Breaker is a mechanical switching device capable of making, carrying, and breaking currents under normal circuit conditions and also making, carrying for a specified time, and breaking currents under specified abnormal circuit conditions e.g. those of short circuit.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Breaker")," class will be used to create the Circuit Breaker in this example. Since a breaker has two ends, we will create a terminal at both ends so that the breaker can be connected to other devices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'breaker_t1, breaker_t2 = Terminal(mrid="breaker_t1", phases=PhaseCode.ABCN), Terminal(mrid="breaker_t2", phases=PhaseCode.BN)\nbreaker = Breaker(mrid="breaker", terminals=[breaker_t1, breaker_t2])\n')),(0,r.kt)("h3",{id:"step-7-create-the-lv-line"},"Step 7: Create the LV Line"),(0,r.kt)("p",null,"Description: Same as Step 2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'lv_line_t1, lv_line_t2 = Terminal(mrid="lv_line_t1", phases=PhaseCode.BN), Terminal(mrid="lv_line_t2", phases=PhaseCode.BN)\nlv_line = AcLineSegment(mrid="lv_line", terminals=[lv_line_t1, lv_line_t2])\n')),(0,r.kt)("h3",{id:"step-8-create-an-energy-consumer"},"Step 8: Create an Energy Consumer"),(0,r.kt)("p",null,"An Energy Consumer is a generic user of energy - a point of consumption on the power system phases. May also represent a pro-sumer with negative p/q values.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"EnergyConsumer")," class will be used to create an energy consumer in this example, and a terminal will be created for the energy consumer so that it can be connected to other devices in the network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'ec_t = Terminal(mrid="ec_t", phases=PhaseCode.BN)\nec = EnergyConsumer(mrid="ec", terminals=[ec_t])\n')),(0,r.kt)("h3",{id:"step-9-create-a-network-service"},"Step 9: Create a Network Service"),(0,r.kt)("p",null,"Once you have created the devices, they need to be added to a Network Service.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkService")," is a mutable node breaker network model that implements a subset of IEC61968 and IEC61970 CIM classes.\nIt is essentially a collection of ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifiedObject"),"s, and they may be added and removed as desired.\nThe following code is used to add all the above created devices to the Network Service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"network = NetworkService()\nfor io in [es_t, es, hv_line_t1, hv_line_t2, hv_line, hv_fuse_t1, hv_fuse_t2, hv_fuse, tx_t1, tx_t2, tx, lv_fuse_t1, lv_fuse_t2, lv_fuse, breaker_t1,\n           breaker_t2, breaker, lv_line_t1, lv_line_t2, lv_line, ec_t, ec]:\n    network.add(io)\n")),(0,r.kt)("h3",{id:"step-10-connect-objects"},"Step 10: Connect Objects"),(0,r.kt)("p",null,"The final step is to connect the objects (created in Steps 1 to 8) and add it to the network (created in Step 9).\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"connect_terminals")," function will be used to connect the two terminals, as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect Energy Source to the HV Line")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"network.connect_terminals(es_t, hv_line_t1)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect HV Line to the HV Fuse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"network.connect_terminals(hv_line_t2, hv_fuse_t1)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect HV Fuse to the Power Transformer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"network.connect_terminals(hv_fuse_t2, tx_t1)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect Power Transformer to the LV Fuse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"network.connect_terminals(tx_t2, lv_fuse_t1)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect LV Fuse to the Breaker")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"network.connect_terminals(lv_fuse_t2, breaker_t1)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect Breaker to the LV Line")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"network.connect_terminals(breaker_t2, lv_line_t1)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect LV Line to the Energy Consumer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"network.connect_terminals(lv_line_t2, ec_t)\n")),(0,r.kt)("h2",{id:"part-b-examine-connectivity-of-the-network"},"Part B: Examine Connectivity of the Network"),(0,r.kt)("p",null,"This section explores examples of connectivity analysis of power systems (particularly the simple example that was built using the above guide).\nThis example provides functions to print connectivity results between different equipment and terminals, including information about nominal phase paths."),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"In this example, we will use two main functions to display the connectivity results."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, we will use the ",(0,r.kt)("inlineCode",{parentName:"li"},"fancy_print_connectivity_result")," function to display a formatted representation of the connectivity result.\nThis function takes ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectivityResult")," as an input and displays the source and destination terminals. It then iterates over the nominal phase paths and prints the phase information about the terminals.\nNote: ConnectivityResult is a class defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"zepben.evolve")," module. It is used to store the connectivity between two terminals, including the mapping between the nominal phases.\nThis class is intended to be used in an immutable way. You should avoid modifying it after it has been created.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def fancy_print_connectivity_result(connectivity_result: ConnectivityResult):\n    print(f"\\t{connectivity_result.from_terminal} to {connectivity_result.to_terminal}")\n\n    terminal_str_len = len(str(connectivity_result.from_terminal))\n    for core_path in connectivity_result.nominal_phase_paths:\n        print(f"\\t{core_path.from_phase.name:>{terminal_str_len}}----{core_path.to_phase.name}")\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"We will also use the ",(0,r.kt)("inlineCode",{parentName:"li"},"fancy_print_connected_equipment")," function to display the connectivity results for the specified equipment, considering the specified phases.\nThis function takes ",(0,r.kt)("inlineCode",{parentName:"li"},"ConductingEquipment")," and an optional ",(0,r.kt)("inlineCode",{parentName:"li"},"phases")," arguments as input.\nNote: ConductingEquipment is an abstract class defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"zepben.evolve")," module. ConductingEquipment are parts of the AC power system that are designed to carry current or that are conductively connected through terminals.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def fancy_print_connected_equipment(equipment: ConductingEquipment, phases=None):\n    if phases:\n        print(f"Connectivity results for {equipment} on phases {phases}:")\n    else:\n        print(f"Connectivity results for {equipment}:")\n    for connectivity_result in connected_equipment(equipment, phases):\n        fancy_print_connectivity_result(connectivity_result)\n    print()\n')),(0,r.kt)("h3",{id:"example-usages"},"Example Usages"),(0,r.kt)("p",null,"This section demonstrates how to use the above functions with different equipment and phase configurations."),(0,r.kt)("p",null,"Example 1: The code snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy_print_connected_equipment(tx)")," prints the connectivity results for the Power Transformer (tx). Since no phase information is provided, the ",(0,r.kt)("inlineCode",{parentName:"p"},"default=None")," is used."),(0,r.kt)("p",null,"Output:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3026).Z,width:"1512",height:"282"})),(0,r.kt)("p",null,"Example 2: The code snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy_print_connected_equipment(tx, phases=PhaseCode.N)")," prints the connectivity results for the Power Transformer (tx), considering only the ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," phase."),(0,r.kt)("p",null,"Output:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9529).Z,width:"1217",height:"86"})),(0,r.kt)("p",null,"Example 3: The code snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy_print_connected_equipment(breaker, phases=PhaseCode.BC)")," prints the connectivity results for the Breaker (breaker), considering only the ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," phases."),(0,r.kt)("p",null,"Output:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5828).Z,width:"1190",height:"167"})),(0,r.kt)("p",null,"Example 4: The following code prints the connectivity results for the terminal ",(0,r.kt)("inlineCode",{parentName:"p"},"lv_fuse_t2")," with phases ",(0,r.kt)("inlineCode",{parentName:"p"},"ACN")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"connected_terminals")," function. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"connected_terminals")," is essentially ",(0,r.kt)("inlineCode",{parentName:"p"},"connected_equipment")," where only one terminal is considered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(f"Connectivity results for terminal {lv_fuse_t2} on phases {PhaseCode.ACN}:")\nfor connectivity_result in connected_terminals(lv_fuse_t2, PhaseCode.ACN):\n    fancy_print_connectivity_result(connectivity_result)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9900).Z,width:"1206",height:"147"})))}m.isMDXComponent=!0},3026:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connectivity_ex1-4457609384fac1b104e4b555b5631966.png"},9529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connectivity_ex2-1d30a0699de4491158f5c3f3d37b8605.png"},5828:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connectivity_ex3-3196ea8a89125bbed5293e06e6a9412f.png"},9900:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connectivity_ex4-891aaf020ceab692863aea5956b8e3e6.png"},9579:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/simple_eg-69262e6ec65e4f53c5ea789c845dc90b.jpg"}}]);