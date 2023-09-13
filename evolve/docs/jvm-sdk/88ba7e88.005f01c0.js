(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(7),i=(t(0),t(185)),o=t(186),c=t(187),s={id:"sdk-consumer",title:"Requesting Models"},l={unversionedId:"sdk-consumer",id:"version-0.14.0/sdk-consumer",isDocsHomePage:!1,title:"Requesting Models",description:"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes",source:"@site/versioned_docs/version-0.14.0/consumer.mdx",slug:"/sdk-consumer",permalink:"/evolve/docs/jvm-sdk/0.14.0/sdk-consumer",version:"0.14.0",sidebar:"version-0.14.0/someSidebar",previous:{title:"Persisting Models",permalink:"/evolve/docs/jvm-sdk/0.14.0/sdk-persistence"}},u=[{value:"Connecting to a server",id:"connecting-to-a-server",children:[]},{value:"Network Hierarchy",id:"network-hierarchy",children:[]},{value:"Requesting Identififed Objects",id:"requesting-identififed-objects",children:[]}],d={toc:u};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"www.zepben.com"}),"Zepben"),"."))),Object(i.a)("p",null,"The SDK provides a client to request models to a remote data server via ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),". The service and proto\ndefinitions for this API can be found ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-grpc"}),"here"),". An implementation of the consumer\nserver is provided with the Evolve platform data services."),Object(i.a)("p",null,"When working with models, it is often impractical to load a whole model to a client due to the size of the data. This\nis generally not a problem however, as most use cases only operate on a small subsection of the model at a time. So, the\nconsumer API provides the ability to request smaller portions of the model quickly and easily. The other benefit to this\nis you can set up many clients in parallel operating on different chunks of the model to reduce the amount of time to\nrun any analytics you may wish to perform across the whole model."),Object(i.a)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Insecure\ntry (GrpcChannel channel = Connect.connectInsecure("localhost", 50051)) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    GrpcResult result = client.getEquipmentContainer("container_mrid").throwOnError();\n    NetworkService ns = client.getService();\n}\n\n// With SSL\ntry (GrpcChannel channel = Connect.connectTls("localhost", 50051, "ca.cert")) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    GrpcResult result = client.getEquipmentContainer("container_mrid").throwOnError();\n    NetworkService ns = client.getService();\n}\n\n// With SSL and OAuth2\ntry (GrpcChannel channel = Connect.connectWithSecret(\n    "client_id",\n    "client_secret",\n    "localhost", // rpc hostname\n    50051, // rpc port\n    "config_address", // set to null to fetch configuration from "https://{rpc hostname}/ewb/auth"\n    "config_CA_filename", // set to null to use system CAs for fetching configuration\n    "auth_CA_filename", // set to null to use system CAs for fetching access tokens\n    "path/to/zepben/ca.cert")\n) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    GrpcResult result = client.getEquipmentContainer("container_mrid").throwOnError();\n    NetworkService ns = client.getService();\n}\n\n// Or specify the authentication configuration directly:\ntry (GrpcChannel channel = Connect.connectWithSecret(\n    "client_id",\n    "client_secret",\n    "https://evolve-ewb/",\n    "zepben.au.auth0.com",\n    "localhost", // rpc hostname\n    50051, // rpc port\n    AuthMethod.Auth0,\n    "auth_CA_filename", // set to null to use system CAs for fetching access tokens\n    "path/to/zepben/ca.cert")\n) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    GrpcResult result = client.getEquipmentContainer("container_mrid").throwOnError();\n    NetworkService ns = client.getService();\n}\n\n// With SSL and client authentication\ntry (GrpcChannel channel = new GrpcChannelBuilder().forAddress("localhost", 50051)\n    .makeSecure("ca.cert", "certchain.pem", "private_key").build()) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    GrpcResult result = client.getEquipmentContainer("container_mrid").throwOnError();\n    NetworkService ns = client.getService();\n}\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'// Insecure\nConnect.connectInsecure("localhost", 50051).use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val result = client.getEquipmentContainer("container_mrid").throwOnError()\n    val ns = client.service\n}\n\n// With just SSL\nConnect.connectTls("localhost", 50051, "path/to/zepben/ca.cert").use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val result = client.getEquipmentContainer("container_mrid").throwOnError()\n    val ns = client.service\n}\n\n// With SSL and OAuth2\nConnect.connectWithSecret(\n    "client_id",\n    "client_secret",\n    "localhost", // rpc hostname\n    50051, // rpc port\n    "config_address", // set to null to fetch configuration from "https://{rpc hostname}/ewb/auth"\n    "config_CA_filename", // set to null to use system CAs for fetching configuration\n    "auth_CA_filename", // set to null to use system CAs for fetching access tokens\n    "path/to/zepben/ca.cert"\n).use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val result = client.getEquipmentContainer("container_mrid").throwOnError()\n    val ns = client.service\n}\n\n// Or specify the authentication configuration directly:\nConnect.connectWithSecret(\n    "client_id",\n    "client_secret",\n    "https://evolve-ewb/",\n    "zepben.au.auth0.com",\n    "localhost", // rpc hostname\n    50051, // rpc port\n    AuthMethod.Auth0,\n    "auth_CA_filename", // set to null to use system CAs for fetching access tokens\n    "path/to/zepben/ca.cert"\n).use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val result = client.getEquipmentContainer("container_mrid").throwOnError()\n    val ns = client.service\n}\n\n// With SSL and client authentication\nGrpcChannelBuilder().forAddress("localhost", 50051).makeSecure("ca.cert", "certchain.pem", "private_key").build().use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val result = client.getEquipmentContainer("container_mrid").throwOnError()\n    val ns = client.service\n}\n')))),Object(i.a)("h2",{id:"network-hierarchy"},"Network Hierarchy"),Object(i.a)("p",null,"The network can be built with a hierarchy as discussed earlier ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"/evolve/docs/jvm-sdk/0.14.0/#network-hierarchy"}),"here"),". This allows you\nto easily identify and request smaller chunks of the network so you can focus on areas of concern. Here is an example\nof how to request the network hierarchy and print it out as a tree to the console."),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'void printNetworkHierarchy(NetworkConsumerClient client) {\n    NetworkHierarchy hierarchy = client.getNetworkHierarchy().getResult();\n    if (hierarchy == null)\n        return;\n\n    hierarchy.getGeographicalRegions().values().forEach(region -> {\n        System.out.println(String.format("- %s [%s]", region.getName(), region.getMRID()));\n        region.getSubGeographicalRegions().values().forEach(subRegion -> {\n            System.out.println(String.format("  |- %s [%s]", subRegion.getName(), subRegion.getMRID()));\n            subRegion.getSubstations().values().forEach(substation -> {\n                System.out.println(String.format("    |- %s [%s]", substation.getName(), substation.getMRID()));\n                substation.getFeeders().values().forEach(feeder -> {}\n                    System.out.println(String.format("      |- %s [%s]", feeder.getName(), feeder.getMRID()));\n                });\n            });\n        });\n    });\n}\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'fun printNetworkHierarchy(client: NetworkConsumerClient) {\n    val hierarchy: NetworkHierarchy = client.getNetworkHierarchy().result ?: return\n    hierarchy.geographicalRegions.values.forEach { region ->\n        println("- ${region.name} [${region.mRID}]")\n        region.subGeographicalRegions.values.forEach { subRegion ->\n            println("  |- ${subRegion.name} [${subRegion.mRID}]")\n            subRegion.substations.values.forEach { substation ->\n                println("    |- ${substation.name} [${substation.mRID}]")\n                substation.feeders.values.forEach { feeder ->\n                    println("      |- ${feeder.name} [${feeder.mRID}]")\n                }\n            }\n        }\n    }\n}\n')))),Object(i.a)("p",null,"Each item from the hierarchy result contains an identified object mRID and it's name. This simplified data structure\nenables you to do things like easily build a suitable UI component allowing a user to select a portion of the network\nthey wish to use, without needing to pull back large amounts of full object data."),Object(i.a)("h2",{id:"requesting-identififed-objects"},"Requesting Identififed Objects"),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The *ConsumerClient APIs will take care of this for you, and you typically only need these functions if you're\ndeveloping the consumer client APIs themselves. Make sure what you want to achieve isn't already covered by the\nAPI before delving into this code."))),Object(i.a)("p",null,"Identified objects can be requested to build a model client side. When identified objects are loaded, any referenced\nobjects that have not been previously requested need to be requested explicitly."),Object(i.a)("p",null,"To find the mRIDs of any references that need to be requested you can use the ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"/evolve/docs/jvm-sdk/0.14.0/sdk-services#deferred-references"}),"deferred reference"),"\nfunctions on the service provided when requesting identified objects."),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"void getWithBaseVoltage(NetworkService service, NetworkConsumerClient client, String mrid) {\n    IdentifiedObject equipment = client.getIdentifiedObject(service, mrid).getResult();\n    if (equipment == null || !(equipment instanceof ConductingEquipment)) {\n        return;\n    }\n    \n    Set<String> mrids = service.getUnresolvedReferenceMrids(Resolvers.baseVoltage(equipment));\n    if (!mrids.isEmpty()) {\n        client.getIdentifiedObject(service, mrids.iterator().next());\n    }\n}\n"))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"fun getWithBaseVoltage(service: NetworkService, client: NetworkConsumerClient, mrid: String) {\n    val equipment = client.getIdentifiedObject(service, mrid).result\n    if (equipment == null || equipment !is ConductingEquipment) {\n        return\n    }\n\n    service.getUnresolvedReferenceMrids(Resolvers.baseVoltage(equipment)).firstOrNull()\n        ?.let { client.getIdentifiedObject(service, it) }\n}\n")))),Object(i.a)("p",null,"You can also query the services UnresolvedReferences in the following ways:"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'String mrid = "feeder1";\n\n// To get unresolved references pointing from `equipment` to other objects\nList<UnresolvedReferences> references = service.getUnresolvedReferencesFrom(mrid);\n\nfor (UnresolvedReference ref: references) {\n    client.getIdentifiedObject(service, ref.toMrid)\n}\n\n// To get unresolved references pointing to `equipment`\nreferences = service.getUnresolvedReferencesFrom(mrid);\n\nfor (UnresolvedReference ref: references) {\n    client.getIdentifiedObject(service, ref.from.mRID)\n}\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'val mrid = "feeder1"\n\nservice.getUnresolvedReferencesFrom(mrid).forEach {\n    client.getIdentifiedObject(service, ref.toMrid)\n}\n\nservice.getUnresolvedReferencesTo(mrid).forEach {\n    client.getIdentifiedObject(service, ref.from.mRID)\n}\n')))))}m.isMDXComponent=!0},182:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},183:function(e,n,t){"use strict";var r=t(0),a=t(184);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},184:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},185:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,h=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return t?a.a.createElement(h,c({ref:n},l,{components:t})):a.a.createElement(h,c({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},186:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(183),o=t(182),c=t(55),s=t.n(c),l=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,m=e.groupId,p=e.className,h=Object(i.a)(),f=h.tabGroupChoices,v=h.setTabGroupChoices,b=Object(r.useState)(c),g=b[0],j=b[1],O=r.Children.toArray(e.children);if(null!=m){var y=f[m];null!=y&&y!==g&&d.some((function(e){return e.value===y}))&&j(y)}var w=function(e){j(e),null!=m&&v(m,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===n,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(r.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},187:function(e,n,t){"use strict";var r=t(3),a=t(0),i=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:a}),n)}}}]);