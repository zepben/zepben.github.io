(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(138)),i=(t(142),t(143),{id:"sdk-consumer",title:"Requesting Models"}),c={unversionedId:"sdk-consumer",id:"sdk-consumer",isDocsHomePage:!1,title:"Requesting Models",description:"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes",source:"@site/docs/consumer.mdx",slug:"/sdk-consumer",permalink:"/evolve/docs/python-sdk/next/sdk-consumer",version:"current",sidebar:"someSidebar",previous:{title:"Persisting Models",permalink:"/evolve/docs/python-sdk/next/sdk-persistence"}},s=[{value:"Connecting to a server",id:"connecting-to-a-server",children:[{value:"Connecting with HTTPS",id:"connecting-with-https",children:[]},{value:"Authentication",id:"authentication",children:[]}]},{value:"Network Hierarchy",id:"network-hierarchy",children:[]},{value:"Requesting Identified Objects",id:"requesting-identified-objects",children:[]}],l={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"http://www.zepben.com"}),"Zepben"),"."))),Object(o.a)("p",null,"The SDK provides a client to request models to a remote data server via ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),". The service and proto\ndefinitions for this API can be found ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-grpc"}),"here"),". An implementation of the consumer\nserver is provided with the Evolve platform data services."),Object(o.a)("p",null,"When working with models, it is often impractical to load a whole model to a client due to the size of the data. This\nis generally not a problem however, as most use cases only operate on a small subsection of the model at a time. So, the\nconsumer API provides the ability to request smaller portions of the model quickly and easily. The other benefit to this\nis you can set up many clients in parallel operating on different chunks of the model to reduce the amount of time to\nrun any analytics you may wish to perform across the whole model."),Object(o.a)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),Object(o.a)("p",null,"The library provides two functions, ",Object(o.a)("inlineCode",{parentName:"p"},"connect()")," and ",Object(o.a)("inlineCode",{parentName:"p"},"connect_async()"),". They have the exact same arguments, however the async version is to be used with Python\nasyncio."),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import connect, connect_async, Feeder, SyncNetworkConsumerClient, NetworkConsumerClient\n\n# Synchronous\nwith connect(host="localhost", rpc_port=50051) as channel:\n    client = SyncNetworkConsumerClient(channel)\n    result = client.get_equipment_container("xxx", Feeder)\n    # do stuff with service\n    client.service.get(\'...\')\n\n# Asyncio\nasync with connect_async(host="localhost", rpc_port=50051) as channel:\n    client = NetworkConsumerClient(channel)\n    result = await client.get_equipment_container("xxx", Feeder)\n    # do stuff with service\n    client.service.get(\'...\')\n')),Object(o.a)("h3",{id:"connecting-with-https"},"Connecting with HTTPS"),Object(o.a)("p",null,"To connect to a HTTPS server with no auth all that's needed is the CA for the server. If the CA is in your system certificates it should be picked up\nautomatically and the following should suffice:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'with connect(host="ewb.zepben.com", rpc_port=443) as channel:\n    client = SyncNetworkConsumerClient(channel)\n    result = client.get_equipment_container("xxx", Feeder)\n    client.service.get(\'...\')\n')),Object(o.a)("p",null,"To specify a CA bundle pass the ca parameter:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"with open('path/to/ca/bundle', 'rb') as f:\n    ca = f.read()\n\n    with connect(host=\"ewb.zepben.com\", rpc_port=443, ca=ca) as channel:\n        client = SyncNetworkConsumerClient(channel)\n        result = client.get_equipment_container(\"xxx\", Feeder)\n        client.service.get('...')\n")),Object(o.a)("p",null,"And if client authentication is required by the server, additionally pass a key and certificate signed by the servers trusted CA:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"with open(args.key, 'rb') as f:\n    key = f.read()\nwith open(args.ca, 'rb') as f:\n    ca = f.read()\nwith open(args.cert, 'rb') as f:\n    cert = f.read()\n\nwith connect(host=\"ewb.zepben.com\", rpc_port=443, ca=ca, key=key, cert=cert) as channel:\n    client = SyncNetworkConsumerClient(channel)\n    result = client.get_equipment_container(\"xxx\", Feeder)\n    client.service.get('...')\n")),Object(o.a)("h3",{id:"authentication"},"Authentication"),Object(o.a)("p",null,"Password Credentials and Client credentials OAuth2 flows are supported through the username/password and client_id/client_secret parameters:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import connect, NetworkService, SyncNetworkConsumerClient\n\n# Password credentials configuration - client_secret optional.\nwith connect(host="ewb.zepben.com", rpc_port=443, conf_address="https://ewb.zepben.com/ewb/auth", secure=True, client_id="some_client_id",\n             username="user@email.com", password="password1") as channel:\n    client = SyncNetworkConsumerClient(channel)\n    # ...\n\n# Client credentials configuration\nwith connect(host="ewb.zepben.com", rpc_port=443, conf_address="https://ewb.zepben.com/ewb/auth", secure=True, client_id="some_client_id",\n             client_secret="some_client_secret") as channel:\n    client = SyncNetworkConsumerClient(channel)\n    # ...\n')),Object(o.a)("p",null,"Custom OAuth2 authenticators can be created by passing an ",Object(o.a)("inlineCode",{parentName:"p"},"authenticator")," to ",Object(o.a)("inlineCode",{parentName:"p"},"connect")," or ",Object(o.a)("inlineCode",{parentName:"p"},"connect_async"),"."),Object(o.a)("h2",{id:"network-hierarchy"},"Network Hierarchy"),Object(o.a)("p",null,"The network can be built with a hierarchy as discussed earlier ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"/evolve/docs/python-sdk/next/#network-hierarchy"}),"here"),". This allows you\nto easily identify and request smaller chunks of the network so you can focus on areas of concern. Here is an example\nof how to request the network hierarchy and print it out as a tree to the console."),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import NetworkConsumerClient\n\ndef print_network_hierarchy(client: NetworkConsumerClient):\n    hierarchy = client.get_network_hierarchy().result\n    if not hierarchy:\n        return\n    for region in hierarchy.geographical_regions:\n        print(f"- {region.name} [{region.mrid}]")\n        for sub_region in region.sub_geographical_regions:\n            print(f"  |- {sub_region.name} [{sub_region.mrid}]")\n            for substation in sub_region.substations:\n                print(f"    |- {sub_region.name} [{sub_region.mrid}]")\n                for feeder in substation.feeders:\n                    print(f"      |- {feeder.name} [{feeder.mrid}]")\n')),Object(o.a)("p",null,"Each item from the hierarchy result contains an identified object mRID and it's name. This simplified data structure\nenables you to do things like easily build a suitable UI component allowing a user to select a portion of the network\nthey wish to use, without needing to pull back large amounts of full object data."),Object(o.a)("h2",{id:"requesting-identified-objects"},"Requesting Identified Objects"),Object(o.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"The *ConsumerClient APIs will take care of this for you, and you typically only need these functions if you're\ndeveloping the consumer client APIs themselves. Make sure what you want to achieve isn't already covered by the\nAPI before delving into this code."))),Object(o.a)("p",null,"Identified objects can be requested to build a model client side. When identified objects are loaded, any referenced\nobjects that have not been previously requested need to be requested explicitly."),Object(o.a)("p",null,"To find the references that need to be requested you can use the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"/evolve/docs/python-sdk/next/sdk-services#deferred-references"}),"deferred reference"),"\nfunctions on the service provided when requesting identified objects."),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import NetworkService, NetworkConsumerClient, resolver\n\nasync def get_with_base_voltage(service: NetworkService, client: NetworkConsumerClient, mrid: String):\n    equipment = await client.get_identified_object(service, mrid).result\n    if not equipment:\n        return\n\n    # Get all base voltage relationships\n    mrids = service.get_unresolved_reference_mrids_by_resolver(resolver.ce_base_voltage(equipment))\n    if mrids:\n        await client.get_identified_object(service, mrids[0])\n")),Object(o.a)("p",null,"You can also query the services UnresolvedReferences in the following ways:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# To get unresolved references pointing from `equipment` to other objects:\nfor ref in service.get_unresolved_references_from(equipment.mrid):\n    await client.get_identified_object(service, ref.to_mrid)\n\n# To get unresolved references pointing to `equipment`:\nfor ref in service.get_unresolved_references_to(equipment.mrid):\n    await client.get_identified_object(service, ref.from_ref.mrid)\n\n# Get all unresolved references. Note this will iterate over every unresolved reference and is likely undesirable. You should prefer to use the above two methods.\nfor ref in service.unresolved_references():\n    await client.get_identified_object(service, ref.to_mrid)\n")))}d.isMDXComponent=!0},138:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return t?a.a.createElement(m,c({ref:n},l,{components:t})):a.a.createElement(m,c({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},139:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},140:function(e,n,t){"use strict";var r=t(0),a=t(141);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},141:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},142:function(e,n,t){"use strict";t(0),t(140),t(139),t(56)},143:function(e,n,t){"use strict";t(3),t(0)}}]);