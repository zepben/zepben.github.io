"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[9797],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85162:function(e,n,t){t(67294)},65488:function(e,n,t){t(67294),t(72389)},68118:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=(t(65488),t(85162),["components"]),s={id:"sdk-consumer",title:"Requesting Models"},c=void 0,l={unversionedId:"sdk-consumer",id:"sdk-consumer",title:"Requesting Models",description:"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes",source:"@site/docs/consumer.mdx",sourceDirName:".",slug:"/sdk-consumer",permalink:"/evolve/docs/python-sdk/next/sdk-consumer",draft:!1,tags:[],version:"current",frontMatter:{id:"sdk-consumer",title:"Requesting Models"},sidebar:"someSidebar",previous:{title:"Persisting Models",permalink:"/evolve/docs/python-sdk/next/sdk-persistence"}},u={},d=[{value:"Connecting to a server",id:"connecting-to-a-server",level:2},{value:"Connecting with HTTPS",id:"connecting-with-https",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Network Hierarchy",id:"network-hierarchy",level:2},{value:"Requesting Identified Objects",id:"requesting-identified-objects",level:2}],p={toc:d},h="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(h,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",(0,i.kt)("a",{parentName:"p",href:"http://www.zepben.com"},"Zepben"),".")),(0,i.kt)("p",null,"The SDK provides a client to request models to a remote data server via ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),". The service and proto\ndefinitions for this API can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-grpc"},"here"),". An implementation of the consumer\nserver is provided with the Evolve platform data services."),(0,i.kt)("p",null,"When working with models, it is often impractical to load a whole model to a client due to the size of the data. This\nis generally not a problem however, as most use cases only operate on a small subsection of the model at a time. So, the\nconsumer API provides the ability to request smaller portions of the model quickly and easily. The other benefit to this\nis you can set up many clients in parallel operating on different chunks of the model to reduce the amount of time to\nrun any analytics you may wish to perform across the whole model."),(0,i.kt)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),(0,i.kt)("p",null,"The library provides four functions, ",(0,i.kt)("inlineCode",{parentName:"p"},"connect_insecure()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"connect_tls()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"connect_with_password()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"connect_with_secret()"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"connect_insecure")," has arguments: host: str, rpc_port: int\n",(0,i.kt)("inlineCode",{parentName:"p"},"connect_tls")," has arguments: host: str, rpc_port: int, ca_filename: str\n",(0,i.kt)("inlineCode",{parentName:"p"},"connect_with_secret")," has arguments: client_id: str, client_secret: str, conf_address: str, verify_conf: bool/str, verify_auth: bool/str,\nhost: str, rpc_port: int, ca_filename: str,\nand ",(0,i.kt)("strong",{parentName:"p"},"kwargs: could include audience: str, issuer_domain: str to specify authentication config directly.\n",(0,i.kt)("inlineCode",{parentName:"strong"},"connect_with_password")," has arguments: client_id: str, username: str, password: str, conf_address: str, verify_conf: bool/str, verify_auth: bool/str,\nhost: str, rpc_port: int, ca_filename: str,\nand "),"kwargs: could include audience: str, issuer_domain: str to specify authentication config directly."),(0,i.kt)("p",null,"The async version is to be used with Python asyncio."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect_insecure, Feeder, SyncNetworkConsumerClient, NetworkConsumerClient\n\n# Synchronous\nchannel = connect_insecure(host="localhost", rpc_port=50051)\nclient = SyncNetworkConsumerClient(channel)\nresult = client.get_equipment_container("xxx", Feeder)\n# do stuff with service\nclient.service.get(\'...\')\n\n# Asyncio\nasync with connect_insecure(host="localhost", rpc_port=50051) as channel:\n    client = NetworkConsumerClient(channel)\n    result = await client.get_equipment_container("xxx", Feeder)\n    # do stuff with service\n    client.service.get(\'...\')\n')),(0,i.kt)("h3",{id:"connecting-with-https"},"Connecting with HTTPS"),(0,i.kt)("p",null,"To connect to a HTTPS server with no auth all that's needed is the CA for the server. If the CA is in your system certificates it should be picked up\nautomatically and the following should suffice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect_tls, SyncNetworkConsumerClient, Feeder\n\nchannel = connect_tls(host="ewb.zepben.com", rpc_port=443)\nclient = SyncNetworkConsumerClient(channel)\nresult = client.get_equipment_container("xxx", Feeder)\nclient.service.get(\'...\')\n')),(0,i.kt)("p",null,"To specify a CA bundle pass the ca parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect_tls, SyncNetworkConsumerClient, Feeder\nfrom zepben.protobuf.nc.nc_requests_pb2 import INCLUDE_ENERGIZED_LV_FEEDERS\n\nchannel = connect_tls(host="ewb.zepben.com", rpc_port=443, ca_filename="path/to/ca/bundle")\nclient = SyncNetworkConsumerClient(channel)\n\nresult = client.get_equipment_container("xxx", Feeder)\n# The Feeder container only contains HV/MV equipment. To include LV, use the following line instead:\n# result = client.get_equipment_container("xxx", Feeder, include_energized_containers=INCLUDE_ENERGIZED_LV_FEEDERS)\n\nclient.service.get(\'...\')\n')),(0,i.kt)("p",null,"If client authentication is required by the server, use the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"GrpcChannelBuilder")," class instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import GrpcChannelBuilder, SyncNetworkConsumerClient, Feeder\nfrom zepben.protobuf.nc.nc_requests_pb2 import INCLUDE_ENERGIZED_LV_FEEDERS\n\nchannel = (\n    GrpcChannelBuilder()\n    .for_address("ewb.zepben.com", 443)\n    .make_secure("path/to/ca/bundle", "path/to/cert/chain", "path/to/private/key")\n    .build()\n)\nclient = SyncNetworkConsumerClient(channel)\n\nresult = client.get_equipment_container("xxx", Feeder)\n# The Feeder container only contains HV/MV equipment. To include LV, use the following line instead:\n# result = client.get_equipment_container("xxx", Feeder, include_energized_containers=INCLUDE_ENERGIZED_LV_FEEDERS)\n\nclient.service.get(\'...\')\n')),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Password Credentials and Client credentials OAuth2 flows are supported through the ",(0,i.kt)("inlineCode",{parentName:"p"},"connect_with_secret")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"connect_with_password")," functions respectively:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect_with_password, connect_with_secret, SyncNetworkConsumerClient\n\n# Client credentials configuration\nchannel = connect_with_secret(client_id="some_client_id", client_secret="some_client_secret", host="ewb.zepben.com", rpc_port=443,\n                              conf_address="https://ewb.zepben.com/ewb/auth", verify_conf="path to certificate chain for auth params", \n                              ca_filename="path to certificate for grpc queries")\nclient = SyncNetworkConsumerClient(channel)\n# ...\n\n# Password credentials configuration\nchannel = connect_with_password(client_id="some_client_id", username="user@email.com", password="password1", host="ewb.zepben.com", rpc_port=443,\n                                conf_address="https://ewb.zepben.com/ewb/auth")\nclient = SyncNetworkConsumerClient(channel)\n# ...\n')),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"audience")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"issuer_domain")," are provided as keyword arguments, they will be used to construct a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZepbenTokenFetcher")," directly without fetching them from\n",(0,i.kt)("inlineCode",{parentName:"p"},"conf_address"),"."),(0,i.kt)("p",null,"If running in Azure we also support auth via Azure managed identities using ",(0,i.kt)("inlineCode",{parentName:"p"},"connect_with_identity"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect_with_identity, SyncNetworkConsumerClient\n\n# Client credentials configuration\nchannel = connect_with_identity(host="ewb.zepben.com", rpc_port=443, identity_url="http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=<SOME_IDENTIFIER>")\nclient = SyncNetworkConsumerClient(channel)\n# ...\n')),(0,i.kt)("h2",{id:"network-hierarchy"},"Network Hierarchy"),(0,i.kt)("p",null,"The network can be built with a hierarchy as discussed earlier ",(0,i.kt)("a",{parentName:"p",href:"/evolve/docs/python-sdk/next/#network-hierarchy"},"here"),". This allows you\nto easily identify and request smaller chunks of the network so you can focus on areas of concern. Here is an example\nof how to request the network hierarchy and print it out as a tree to the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import SyncNetworkConsumerClient\n\ndef print_network_hierarchy(client: SyncNetworkConsumerClient):\n    hierarchy = client.get_network_hierarchy().result\n    if not hierarchy:\n        return\n    for region in hierarchy.geographical_regions:\n        print(f"- {region.name} [{region.mrid}]")\n        for sub_region in region.sub_geographical_regions:\n            print(f"  |- {sub_region.name} [{sub_region.mrid}]")\n            for substation in sub_region.substations:\n                print(f"    |- {sub_region.name} [{sub_region.mrid}]")\n                for feeder in substation.feeders:\n                    print(f"      |- {feeder.name} [{feeder.mrid}]")\n')),(0,i.kt)("p",null,"Each item from the hierarchy result contains an identified object mRID and it's name. This simplified data structure\nenables you to do things like easily build a suitable UI component allowing a user to select a portion of the network\nthey wish to use, without needing to pull back large amounts of full object data."),(0,i.kt)("h2",{id:"requesting-identified-objects"},"Requesting Identified Objects"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The *ConsumerClient APIs will take care of this for you, and you typically only need these functions if you're\ndeveloping the consumer client APIs themselves. Make sure what you want to achieve isn't already covered by the\nAPI before delving into this code.")),(0,i.kt)("p",null,"Identified objects can be requested to build a model client side. When identified objects are loaded, any referenced\nobjects that have not been previously requested need to be requested explicitly."),(0,i.kt)("p",null,"To find the references that need to be requested you can use the ",(0,i.kt)("a",{parentName:"p",href:"/evolve/docs/python-sdk/next/sdk-services#deferred-references"},"deferred reference"),"\nfunctions on the service provided when requesting identified objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.evolve import NetworkService, SyncNetworkConsumerClient, resolver\n\ndef get_with_base_voltage(service: NetworkService, client: SyncNetworkConsumerClient, mrid: str):\n    equipment = client.get_identified_object(mrid).result\n    if not equipment:\n        return\n\n    # Get all base voltage relationships\n    mrids = list(service.get_unresolved_reference_mrids_by_resolver(resolver.ce_base_voltage(equipment)))\n    if mrids:\n        client.get_identified_object(mrids[0])\n")),(0,i.kt)("p",null,"You can also query the services UnresolvedReferences in the following ways:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# To get unresolved references pointing from `equipment` to other objects:\nfor ref in service.get_unresolved_references_from(equipment.mrid):\n    await client.get_identified_object(service, ref.to_mrid)\n\n# To get unresolved references pointing to `equipment`:\nfor ref in service.get_unresolved_references_to(equipment.mrid):\n    await client.get_identified_object(service, ref.from_ref.mrid)\n\n# Get all unresolved references. Note this will iterate over every unresolved reference and is likely undesirable. You should prefer to use the above two methods.\nfor ref in service.unresolved_references():\n    await client.get_identified_object(service, ref.to_mrid)\n")))}m.isMDXComponent=!0}}]);