"use strict";(self.webpackChunkpython_lib_ci_test=self.webpackChunkpython_lib_ci_test||[]).push([[5622],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5162:(e,n,t)=>{t(7294)},5488:(e,n,t)=>{t(7294),t(2389)},3941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));t(5488),t(5162);const i={id:"sdk-consumer",title:"Requesting Models"},a=void 0,s={unversionedId:"sdk-consumer",id:"version-0.26.0/sdk-consumer",title:"Requesting Models",description:"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes",source:"@site/versioned_docs/version-0.26.0/consumer.mdx",sourceDirName:".",slug:"/sdk-consumer",permalink:"/evolve/docs/python-lib-test/0.26.0/sdk-consumer",draft:!1,tags:[],version:"0.26.0",frontMatter:{id:"sdk-consumer",title:"Requesting Models"},sidebar:"version-0.26.0/someSidebar",previous:{title:"Persisting Models",permalink:"/evolve/docs/python-lib-test/0.26.0/sdk-persistence"}},c={},l=[{value:"Connecting to a server",id:"connecting-to-a-server",level:2},{value:"Connecting with HTTPS",id:"connecting-with-https",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Network Hierarchy",id:"network-hierarchy",level:2},{value:"Requesting Identified Objects",id:"requesting-identified-objects",level:2}],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",(0,o.kt)("a",{parentName:"p",href:"http://www.zepben.com"},"Zepben"),".")),(0,o.kt)("p",null,"The SDK provides a client to request models to a remote data server via ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),". The service and proto\ndefinitions for this API can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-grpc"},"here"),". An implementation of the consumer\nserver is provided with the Evolve platform data services."),(0,o.kt)("p",null,"When working with models, it is often impractical to load a whole model to a client due to the size of the data. This\nis generally not a problem however, as most use cases only operate on a small subsection of the model at a time. So, the\nconsumer API provides the ability to request smaller portions of the model quickly and easily. The other benefit to this\nis you can set up many clients in parallel operating on different chunks of the model to reduce the amount of time to\nrun any analytics you may wish to perform across the whole model."),(0,o.kt)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),(0,o.kt)("p",null,"The library provides two functions, ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"connect_async()"),". They have the exact same arguments, however the async version is to be used with Python\nasyncio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect, connect_async, Feeder, SyncNetworkConsumerClient, NetworkConsumerClient\n\n# Synchronous\nwith connect(host="localhost", rpc_port=50051) as channel:\n    client = SyncNetworkConsumerClient(channel)\n    result = client.get_equipment_container("xxx", Feeder)\n    # do stuff with service\n    client.service.get(\'...\')\n\n# Asyncio\nasync with connect_async(host="localhost", rpc_port=50051) as channel:\n    client = NetworkConsumerClient(channel)\n    result = await client.get_equipment_container("xxx", Feeder)\n    # do stuff with service\n    client.service.get(\'...\')\n')),(0,o.kt)("h3",{id:"connecting-with-https"},"Connecting with HTTPS"),(0,o.kt)("p",null,"To connect to a HTTPS server with no auth all that's needed is the CA for the server. If the CA is in your system certificates it should be picked up\nautomatically and the following should suffice:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with connect(host="ewb.zepben.com", rpc_port=443) as channel:\n    client = SyncNetworkConsumerClient(channel)\n    result = client.get_equipment_container("xxx", Feeder)\n    client.service.get(\'...\')\n')),(0,o.kt)("p",null,"To specify a CA bundle pass the ca parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"with open('path/to/ca/bundle', 'rb') as f:\n    ca = f.read()\n\n    with connect(host=\"ewb.zepben.com\", rpc_port=443, ca=ca) as channel:\n        client = SyncNetworkConsumerClient(channel)\n        result = client.get_equipment_container(\"xxx\", Feeder)\n        client.service.get('...')\n")),(0,o.kt)("p",null,"And if client authentication is required by the server, additionally pass a key and certificate signed by the servers trusted CA:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"with open(args.key, 'rb') as f:\n    key = f.read()\nwith open(args.ca, 'rb') as f:\n    ca = f.read()\nwith open(args.cert, 'rb') as f:\n    cert = f.read()\n\nwith connect(host=\"ewb.zepben.com\", rpc_port=443, ca=ca, key=key, cert=cert) as channel:\n    client = SyncNetworkConsumerClient(channel)\n    result = client.get_equipment_container(\"xxx\", Feeder)\n    client.service.get('...')\n")),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Password Credentials and Client credentials OAuth2 flows are supported through the username/password and client_id/client_secret parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect, NetworkService, SyncNetworkConsumerClient\n\n# Password credentials configuration - client_secret optional.\nwith connect(host="ewb.zepben.com", rpc_port=443, conf_address="https://ewb.zepben.com/ewb/auth", secure=True, client_id="some_client_id",\n             username="user@email.com", password="password1") as channel:\n    client = SyncNetworkConsumerClient(channel)\n    # ...\n\n# Client credentials configuration\nwith connect(host="ewb.zepben.com", rpc_port=443, conf_address="https://ewb.zepben.com/ewb/auth", secure=True, client_id="some_client_id",\n             client_secret="some_client_secret") as channel:\n    client = SyncNetworkConsumerClient(channel)\n    # ...\n')),(0,o.kt)("p",null,"Custom OAuth2 authenticators can be created by passing an ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticator")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"connect_async"),"."),(0,o.kt)("h2",{id:"network-hierarchy"},"Network Hierarchy"),(0,o.kt)("p",null,"The network can be built with a hierarchy as discussed earlier ",(0,o.kt)("a",{parentName:"p",href:"/evolve/docs/python-lib-test/0.26.0/#network-hierarchy"},"here"),". This allows you\nto easily identify and request smaller chunks of the network so you can focus on areas of concern. Here is an example\nof how to request the network hierarchy and print it out as a tree to the console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import NetworkConsumerClient\n\ndef print_network_hierarchy(client: NetworkConsumerClient):\n    hierarchy = client.get_network_hierarchy().result\n    if not hierarchy:\n        return\n    for region in hierarchy.geographical_regions:\n        print(f"- {region.name} [{region.mrid}]")\n        for sub_region in region.sub_geographical_regions:\n            print(f"  |- {sub_region.name} [{sub_region.mrid}]")\n            for substation in sub_region.substations:\n                print(f"    |- {sub_region.name} [{sub_region.mrid}]")\n                for feeder in substation.feeders:\n                    print(f"      |- {feeder.name} [{feeder.mrid}]")\n')),(0,o.kt)("p",null,"Each item from the hierarchy result contains an identified object mRID and it's name. This simplified data structure\nenables you to do things like easily build a suitable UI component allowing a user to select a portion of the network\nthey wish to use, without needing to pull back large amounts of full object data."),(0,o.kt)("h2",{id:"requesting-identified-objects"},"Requesting Identified Objects"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The *ConsumerClient APIs will take care of this for you, and you typically only need these functions if you're\ndeveloping the consumer client APIs themselves. Make sure what you want to achieve isn't already covered by the\nAPI before delving into this code.")),(0,o.kt)("p",null,"Identified objects can be requested to build a model client side. When identified objects are loaded, any referenced\nobjects that have not been previously requested need to be requested explicitly."),(0,o.kt)("p",null,"To find the references that need to be requested you can use the ",(0,o.kt)("a",{parentName:"p",href:"/evolve/docs/python-lib-test/0.26.0/sdk-services#deferred-references"},"deferred reference"),"\nfunctions on the service provided when requesting identified objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.evolve import NetworkService, NetworkConsumerClient, resolver\n\nasync def get_with_base_voltage(service: NetworkService, client: NetworkConsumerClient, mrid: String):\n    equipment = await client.get_identified_object(service, mrid).result\n    if not equipment:\n        return\n\n    # Get all base voltage relationships\n    mrids = service.get_unresolved_reference_mrids_by_resolver(resolver.ce_base_voltage(equipment))\n    if mrids:\n        await client.get_identified_object(service, mrids[0])\n")),(0,o.kt)("p",null,"You can also query the services UnresolvedReferences in the following ways:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# To get unresolved references pointing from `equipment` to other objects:\nfor ref in service.get_unresolved_references_from(equipment.mrid):\n    await client.get_identified_object(service, ref.to_mrid)\n\n# To get unresolved references pointing to `equipment`:\nfor ref in service.get_unresolved_references_to(equipment.mrid):\n    await client.get_identified_object(service, ref.from_ref.mrid)\n\n# Get all unresolved references. Note this will iterate over every unresolved reference and is likely undesirable. You should prefer to use the above two methods.\nfor ref in service.unresolved_references():\n    await client.get_identified_object(service, ref.to_mrid)\n")))}p.isMDXComponent=!0}}]);