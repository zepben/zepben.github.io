"use strict";(self.webpackChunkewb_sdk_examples_python_doco=self.webpackChunkewb_sdk_examples_python_doco||[]).push([[47],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),A=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=A(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=A(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var A=2;A<a;A++)i[A]=n[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},6630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>A});var r=n(7462),o=(n(7294),n(3905));n(5488),n(5162);const a={id:"examples-fetching-network-model",title:"Fetching Network Model"},i=void 0,l={unversionedId:"examples-fetching-network-model",id:"examples-fetching-network-model",title:"Fetching Network Model",description:"In this tutorial, we will explore a Python script that utilizes the APIs to fetch information about an electrical network from the Energy Workbench.",source:"@site/docs/fetching_network_model.mdx",sourceDirName:".",slug:"/examples-fetching-network-model",permalink:"/evolve/docs/ewb-sdk-examples-python/examples-fetching-network-model",draft:!1,tags:[],version:"current",frontMatter:{id:"examples-fetching-network-model",title:"Fetching Network Model"},sidebar:"someSidebar",previous:{title:"Fetching Network Hierarchy",permalink:"/evolve/docs/ewb-sdk-examples-python/examples-fetching-network-hierarchy"},next:{title:"Creating and Uploading Studies",permalink:"/evolve/docs/ewb-sdk-examples-python/examples-creating-and-uploading-studies"}},s={},A=[{value:"Getting Started",id:"getting-started",level:2},{value:"Fetch Feeder Information",id:"fetch-feeder-information",level:2},{value:"Analysing Network Objects",id:"analysing-network-objects",level:2},{value:"Calculating Conductor Length",id:"calculating-conductor-length",level:2},{value:"Retrieving Objects from the Feeder",id:"retrieving-objects-from-the-feeder",level:2},{value:"Example 1: Retrieving Power Transformers",id:"example-1-retrieving-power-transformers",level:3},{value:"Example 2: Retrieving Energy Consumers",id:"example-2-retrieving-energy-consumers",level:3},{value:"Example 3: Retrieving Switches",id:"example-3-retrieving-switches",level:3}],c={toc:A},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will explore a Python script that utilizes the APIs to fetch information about an electrical network from the Energy Workbench.\nThe script connects to the EWB Server, retrieves data about a specific feeder, and prints details about the network equipment such as conductors, transformers, energy consumers, and switches."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Ensure that you have imported necessary modules from the Zepben library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\nimport json\nfrom zepben.evolve import Conductor, PowerTransformer, NetworkConsumerClient, ConductingEquipment, EnergyConsumer, Switch, \\\n    connect_with_token\nfrom zepben.protobuf.nc.nc_requests_pb2 import INCLUDE_ENERGIZED_LV_FEEDERS, INCLUDE_ENERGIZED_FEEDERS, INCLUDE_ENERGIZING_SUBSTATIONS, \\\n    INCLUDE_ENERGIZING_FEEDERS\n")),(0,o.kt)("p",null,"Also, ensure that you have connected to the EWB Server using a token for authentication. In this example, the connect_with_token function is used to connect to the EWB Server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("config.json") as f:\n    c = json.loads(f.read())\n\nchannel = connect_with_token(host=c["host"], access_token=c["access_token"], rpc_port=c["rpc_port"])\n\n')),(0,o.kt)("p",null,"You will need to replace the values in the config.json file with the appropriate configuration for your environment. The config file should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "EWB Hostname",\n  "access_token": "your_access_token",\n  "rpc_port": 1234\n}\n')),(0,o.kt)("p",null,"More information about connecting to the EWB Server using different methods can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/evolve/docs/ewb-sdk-examples-python/examples-connecting-to-ewb"},"Connecting to the EWB Server")," tutorial."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," All other examples relating to using the EWB server can use any of the connection methods depending on the configuration of the EWB server."),(0,o.kt)("h2",{id:"fetch-feeder-information"},"Fetch Feeder Information"),(0,o.kt)("p",null,"You will need to specify the mRID of the feeder that you want to fetch, ensuring that the feeder with the specified mRID exists."),(0,o.kt)("p",null,"Then, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkConsumerClient")," and retrieve the network service.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"get_equipment_container")," method is used to fetch information about the specified feeder (feeder_mrid).\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"INCLUDE_ENERGIZED_LV_FEEDERS")," flag indicates that the client should include information about energized LV (Low Voltage) feeders in the response."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," You should create a new client for each Feeder you retrieve."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'feeder_mrid = "LV007"\nclient = NetworkConsumerClient(channel=channel)\nnetwork = client.service\nawait client.get_equipment_container(feeder_mrid, include_energized_containers=INCLUDE_ENERGIZED_LV_FEEDERS).throw_on_error()\n')),(0,o.kt)("p",null,"There are other methods available to fetch a container. Some of them are explained below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fetching substation equipment and including equipment from HV/MV feeders powered by it:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.get_equipment_container("substation ID", include_energized_containers=INCLUDE_ENERGIZED_FEEDERS)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Same as above, but also fetching equipment from LV feeders powered by the HV/MV feeders")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.get_equipment_container("substation ID", include_energized_containers=INCLUDE_ENERGIZED_LV_FEEDERS)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fetching feeder equipment without fetching any additional equipment from powering/powered containers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.get_equipment_container("feeder ID")\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fetching HV/MV feeder equipment, the equipment from the substation powering it, and the equipment from the LV feeders it powers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.get_equipment_container("feeder ID",\n                               include_energizing_containers=INCLUDE_ENERGIZING_SUBSTATIONS,\n                               include_energized_containers=INCLUDE_ENERGIZED_LV_FEEDERS)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fetching LV feeder equipment and including equipment from HV/MV feeders powering it")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.get_equipment_container("LV feeder ID", include_energizing_containers=INCLUDE_ENERGIZING_FEEDERS)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Same as above, but also fetching equipment from the substations powering the HV/MV feeders")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.get_equipment_container("LV feeder ID", include_energizing_containers=INCLUDE_ENERGIZING_SUBSTATIONS)\n')),(0,o.kt)("h2",{id:"analysing-network-objects"},"Analysing Network Objects"),(0,o.kt)("p",null,"This example prints the total number of objects in the network and provides a breakdown of the number of objects for each type of ",(0,o.kt)("inlineCode",{parentName:"p"},"ConductingEquipment"),".\nIt utilizes the ",(0,o.kt)("inlineCode",{parentName:"p"},"len_of")," method to get the total count and iterates through the unique types present in the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print(f"Total Number of objects: {client.service.len_of()}")\ntypes = set(type(x) for x in network.objects(ConductingEquipment))\nfor t in types:\n    print(f"Number of {t.__name__}\'s = {len(list(network.objects(t)))}")\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("p",null,"A sample output for a feeder is shown below (for demonstration purpose only). Note that the results will vary for different feeders depending on the network."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8268).Z,width:"1173",height:"246"})),(0,o.kt)("h2",{id:"calculating-conductor-length"},"Calculating Conductor Length"),(0,o.kt)("p",null,"You can also calculate the total length of conductors in the feeder.\nIn this example, the provided python code iterates through all objects of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Conductor"),", checks if each conductor has a valid length attribute, and accumulates the lengths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"total_length = 0\nfor conductor in network.objects(Conductor):\n    try:\n        if conductor.length is not None:\n            total_length += conductor.length\n    except AttributeError:\n        print(f\"Warning: Conductor {conductor} does not have a 'length' attribute.\")\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8609).Z,width:"1142",height:"67"})),(0,o.kt)("h2",{id:"retrieving-objects-from-the-feeder"},"Retrieving Objects from the Feeder"),(0,o.kt)("p",null,"This example demonstrates how the script can be used to retrieve and print the feeder object from the network. For the sake of demonstration, we will retrieve and display only a few objects from the network, including power transformers, energy consumers, and switches."),(0,o.kt)("h3",{id:"example-1-retrieving-power-transformers"},"Example 1: Retrieving Power Transformers"),(0,o.kt)("p",null,"In this example, we retrieve and print the transformers from the network.\nFirst, the provided code retrieves a feeder object from the network using the ",(0,o.kt)("inlineCode",{parentName:"p"},"feeder_mrid")," as a parameter.\nThen, the code iterates over the equipment in the feeder. For each equipment item, it checks if it is an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerTransformer")," class. If it is, it prints information about the transformer, including its representation (",(0,o.kt)("inlineCode",{parentName:"p"},"eq"),"), vector group, and function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'feeder = network.get(feeder_mrid)\nprint("Transformers:")\nfor eq in feeder.equipment:\n    if isinstance(eq, PowerTransformer):\n        print(f"    {eq} - Vector Group: {eq.vector_group.short_name}, Function: {eq.function.short_name}")\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("p",null,"For demonstration purpose, only the first few transformers are shown as the output."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9488).Z,width:"1462",height:"170"})),(0,o.kt)("h3",{id:"example-2-retrieving-energy-consumers"},"Example 2: Retrieving Energy Consumers"),(0,o.kt)("p",null,"In this example, the code iterates over objects in the network that are instances of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EnergyConsumer")," class. For each energy consumer (",(0,o.kt)("inlineCode",{parentName:"p"},"ec"),"), it prints information, including its representation (",(0,o.kt)("inlineCode",{parentName:"p"},"ec"),"), real power draw (",(0,o.kt)("inlineCode",{parentName:"p"},"ec.q"),"), and reactive power draw (",(0,o.kt)("inlineCode",{parentName:"p"},"ec.p"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print("Energy Consumers:")\n    for ec in network.objects(EnergyConsumer):\n        print(f"    {ec} - Real power draw: {ec.q}W, Reactive power draw: {ec.p}VAr")\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("p",null,"For demonstration purpose, only a few energy consumers are shown as the output."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(702).Z,width:"1331",height:"170"})),(0,o.kt)("h3",{id:"example-3-retrieving-switches"},"Example 3: Retrieving Switches"),(0,o.kt)("p",null,"In this example, the code iterates over objects in the network that are instances of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Switch")," class. For each switch (",(0,o.kt)("inlineCode",{parentName:"p"},"switch"),"), it prints information about the switch, including its representation (",(0,o.kt)("inlineCode",{parentName:"p"},"switch"),") and the open status obtained using ",(0,o.kt)("inlineCode",{parentName:"p"},"switch.get_state()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print("Switches:")\n    for switch in network.objects(Switch):\n        print(f"    {switch} - Open status: {switch.get_state():04b}")\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("p",null,"For demonstration purpose, only a few switches are shown as the output."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4729).Z,width:"1262",height:"167"})))}u.isMDXComponent=!0},8268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fetching_network_ex1-c589adde4b124e190b2e56eb0588e0d7.png"},8609:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},9488:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fetching_network_ex3-17d1176fd451d0f4069188a01c533765.png"},702:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fetching_network_ex4-7242916b2c05c0e4bf07696ef765f141.png"},4729:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fetching_network_ex5-866ecd01e9b14da46a784e727c9055b6.png"}}]);