(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(a,".").concat(f)]||p[f]||u[f]||i;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},155:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},156:function(e,t,n){"use strict";var r=n(0),o=n(157);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},157:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},158:function(e,t,n){"use strict";n(0),n(156),n(155),n(56)},159:function(e,t,n){"use strict";n(3),n(0)},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(154)),a=(n(158),n(159),{id:"sdk-consumer",title:"Requesting Models"}),c={unversionedId:"sdk-consumer",id:"version-0.24.0/sdk-consumer",isDocsHomePage:!1,title:"Requesting Models",description:"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes",source:"@site/versioned_docs/version-0.24.0/consumer.mdx",slug:"/sdk-consumer",permalink:"/evolve/docs/python-sdk/0.24.0/sdk-consumer",version:"0.24.0",sidebar:"version-0.24.0/someSidebar",previous:{title:"Persisting Models",permalink:"/evolve/docs/python-sdk/0.24.0/sdk-persistence"}},s=[{value:"Connecting to a server",id:"connecting-to-a-server",children:[]},{value:"Network Hierarchy",id:"network-hierarchy",children:[]},{value:"Requesting Identified Objects",id:"requesting-identified-objects",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"http://www.zepben.com"}),"Zepben"),"."))),Object(i.a)("p",null,"The SDK provides a client to request models to a remote data server via ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),". The service and proto\ndefinitions for this API can be found ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-grpc"}),"here"),". An implementation of the consumer\nserver is provided with the Evolve platform data services."),Object(i.a)("p",null,"When working with models, it is often impractical to load a whole model to a client due to the size of the data. This\nis generally not a problem however, as most use cases only operate on a small subsection of the model at a time. So, the\nconsumer API provides the ability to request smaller portions of the model quickly and easily. The other benefit to this\nis you can set up many clients in parallel operating on different chunks of the model to reduce the amount of time to\nrun any analytics you may wish to perform across the whole model."),Object(i.a)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import connect, connect_async, NetworkService, SyncNetworkConsumerClient, NetworkConsumerClient\n\n# Synchronous\nwith connect(host="localhost", rpc_port=50051) as channel:\n    service = NetworkService()\n    client = SyncNetworkConsumerClient(channel)\n    result = client.get_feeder(service, "xxx")\n    # do stuff with service\n\n# Asyncio\nasync with connect_async(host="localhost", rpc_port=50051) as channel:\n    service = NetworkService()\n    client = NetworkConsumerClient(channel)\n    result = await client.get_feeder(service, "xxx")\n    # do stuff with service\n')),Object(i.a)("h2",{id:"network-hierarchy"},"Network Hierarchy"),Object(i.a)("p",null,"The network can be built with a hierarchy as discussed earlier ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"/evolve/docs/python-sdk/0.24.0/#network-hierarchy"}),"here"),". This allows you\nto easily identify and request smaller chunks of the network so you can focus on areas of concern. Here is an example\nof how to request the network hierarchy and print it out as a tree to the console."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import NetworkConsumerClient\n\ndef print_network_hierarchy(client: NetworkConsumerClient):\n    hierarchy = client.get_network_hierarchy().result\n    if not hierarchy:\n        return\n    for region in hierarchy.geographical_regions:\n        print(f"- {region.name} [{region.mrid}]")\n        for sub_region in region.sub_geographical_regions:\n            print(f"  |- {sub_region.name} [{sub_region.mrid}]")\n            for substation in sub_region.substations:\n                print(f"    |- {sub_region.name} [{sub_region.mrid}]")\n                for feeder in substation.feeders:\n                    print(f"      |- {feeder.name} [{feeder.mrid}]")\n')),Object(i.a)("p",null,"Each item from the hierarchy result contains an identified object mRID and it's name. This simplified data structure\nenables you to do things like easily build a suitable UI component allowing a user to select a portion of the network\nthey wish to use, without needing to pull back large amounts of full object data."),Object(i.a)("h2",{id:"requesting-identified-objects"},"Requesting Identified Objects"),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The *ConsumerClient APIs will take care of this for you, and you typically only need these functions if you're\ndeveloping the consumer client APIs themselves. Make sure what you want to achieve isn't already covered by the\nAPI before delving into this code."))),Object(i.a)("p",null,"Identified objects can be requested to build a model client side. When identified objects are loaded, any referenced\nobjects that have not been previously requested need to be requested explicitly."),Object(i.a)("p",null,"To find the references that need to be requested you can use the ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"/evolve/docs/python-sdk/0.24.0/sdk-services#deferred-references"}),"deferred reference"),"\nfunctions on the service provided when requesting identified objects."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from zepben.evolve import NetworkService, NetworkConsumerClient, resolver\n\nasync def get_with_base_voltage(service: NetworkService, client: NetworkConsumerClient, mrid: String):\n    equipment = await client.get_identified_object(service, mrid).result\n    if not equipment:\n        return\n\n    # Get all base voltage relationships\n    mrids = service.get_unresolved_reference_mrids_by_resolver(resolver.ce_base_voltage(equipment))\n    if mrids:\n        await client.get_identified_object(service, mrids[0])\n")),Object(i.a)("p",null,"You can also query the services UnresolvedReferences in the following ways:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# To get unresolved references pointing from `equipment` to other objects:\nfor ref in service.get_unresolved_references_from(equipment.mrid):\n    await client.get_identified_object(service, ref.to_mrid)\n\n# To get unresolved references pointing to `equipment`:\nfor ref in service.get_unresolved_references_to(equipment.mrid):\n    await client.get_identified_object(service, ref.from_ref.mrid)\n\n# Get all unresolved references. Note this will iterate over every unresolved reference and is likely undesirable. You should prefer to use the above two methods.\nfor ref in service.unresolved_references():\n    await client.get_identified_object(service, ref.to_mrid)\n")))}d.isMDXComponent=!0}}]);