(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return h}));var a=t(3),r=t(7),o=(t(0),t(185)),i=t(186),c=t(187),l={id:"sdk-consumer",title:"Requesting Models"},s={unversionedId:"sdk-consumer",id:"version-0.8.0/sdk-consumer",isDocsHomePage:!1,title:"Requesting Models",description:"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes",source:"@site/versioned_docs/version-0.8.0/consumer.mdx",slug:"/sdk-consumer",permalink:"/evolve/docs/jvm-sdk/0.8.0/sdk-consumer",version:"0.8.0",sidebar:"version-0.8.0/someSidebar",previous:{title:"Persisting Models",permalink:"/evolve/docs/jvm-sdk/0.8.0/sdk-persistence"}},u=[{value:"Connecting to a server",id:"connecting-to-a-server",children:[]},{value:"Network Hierarchy",id:"network-hierarchy",children:[]},{value:"Requesting Identififed Objects",id:"requesting-identififed-objects",children:[]}],d={toc:u};function h(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"www.zepben.com"}),"Zepben"),"."))),Object(o.a)("p",null,"The SDK provides a client to request models to a remote data server via ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),". The service and proto\ndefinitions for this API can be found ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-grpc"}),"here"),". An implementation of the consumer\nserver is provided with the Evolve platform data services."),Object(o.a)("p",null,"When working with models, it is often impractical to load a whole model to a client due to the size of the data. This\nis generally not a problem however, as most use cases only operate on a small subsection of the model at a time. So, the\nconsumer API provides the ability to request smaller portions of the model quickly and easily. The other benefit to this\nis you can set up many clients in parallel operating on different chunks of the model to reduce the amount of time to\nrun any analytics you may wish to perform across the whole model."),Object(o.a)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),Object(o.a)(i.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(o.a)(c.a,{value:"java",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Insecure\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig("localhost", 50051))) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    NetworkService ns = new NetworkService();\n    GrpcResult result = client.getFeeder(ns).throwOnError();\n}\n\n// With SSL\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig("localhost", 50051, true, "ca.cert"))) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    NetworkService ns = new NetworkService();\n    GrpcResult result = client.getFeeder(ns).throwOnError();\n}\n\n// With SSL and OAuth2. Note that you should never connect to a non-SSL server while using OAuth2, as you will be vulnerable to MITM attacks.\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig("localhost", 50051, true, "ca.cert"))) {}\n    // Create CallCredentials using a configuration URL. This configuration endpoint will often be provided by the service you are connecting to.\n    JwtCredentials creds = EvolveCallCredentials.create(\n        "<client_id>",\n        "<client_secret>",\n        "<ewb_auth_config_URL>"\n    );\n\n    // Or create them with an AuthConfig if a configuration endpoint doesn\'t exist.\n    JwtCredentials creds = EvolveCallCredentials.create(\n        "<client_id>",\n        "<client_secret>",\n        new AuthConfig(tokenUrl="https://zepben.au.auth0.com/oauth/token", audience="https://evolve/", authType=AuthType.AUTH0)\n    );\n\n    NetworkConsumerClient client = new NetworkConsumerClient(channel, creds);\n    NetworkService ns = new NetworkService();\n    GrpcResult result = client.getFeeder(ns).throwOnError();\n}\n\n// With SSL and client authentication\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig("localhost", 50051, true, "ca.cert", "path/to/signed.cert", "path/to/private.key"))) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    NetworkService ns = new NetworkService();\n    GrpcResult result = client.getFeeder(ns).throwOnError();\n}\n'))),Object(o.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'// Insecure\nGrpcChannelFactory.create(ConnectionConfig("localhost", 50051)).use { client ->\n    val client = NetworkConsumerClient(channel)\n    val ns = NetworkService()\n    val result = client.getFeeder(ns).throwOnError()\n}\n\n// With just SSL\nGrpcChannelFactory.create(ConnectionConfig("localhost", 50051, true, trustCertPath = "path/to/zepben/ca.cert")).use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val ns = NetworkService()\n    val result = client.getFeeder(ns).throwOnError()\n}\n\n// With SSL and OAuth2. Note that you should never connect to a non-SSL server while using OAuth2, as you will be vulnerable to MITM attacks.\nGrpcChannelFactory.create(ConnectionConfig("localhost", 50051, true, trustCertPath = "path/to/zepben/ca.cert")).use { channel ->\n    // Create CallCredentials using a configuration URL. This configuration endpoint will often be provided by the service you are connecting to.\n    val creds = EvolveCallCredentials.create(\n        "<client_id>",\n        "<client_secret>",\n        "<ewb_auth_config_URL>"\n    )\n\n    // Or create them with an AuthConfig if a configuration endpoint doesn\'t exist.\n    val creds = EvolveCallCredentials.create(\n        "<client_id>",\n        "<client_secret>",\n        AuthConfig(tokenUrl="https://zepben.au.auth0.com/oauth/token", audience="https://evolve/", authType=AuthType.AUTH0)\n    )\n\n    val client = NetworkConsumerClient(channel, creds)\n    val ns = NetworkService()\n    val result = client.getFeeder(ns).throwOnError()\n}\n\n// With SSL and client authentication\nGrpcChannelFactory.create(ConnectionConfig("localhost", 50051, true, trustCertPath = "path/to/zepben/ca.cert", authCertPath = "path/to/signed.cert", authKeyPath = "path/to/private.key")).use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val ns = NetworkService()\n    val result = client.getFeeder(ns).throwOnError()\n}\n')))),Object(o.a)("h2",{id:"network-hierarchy"},"Network Hierarchy"),Object(o.a)("p",null,"The network can be built with a hierarchy as discussed earlier ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"/evolve/docs/jvm-sdk/0.8.0/#network-hierarchy"}),"here"),". This allows you\nto easily identify and request smaller chunks of the network so you can focus on areas of concern. Here is an example\nof how to request the network hierarchy and print it out as a tree to the console."),Object(o.a)(i.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(o.a)(c.a,{value:"java",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'void printNetworkHierarchy(NetworkConsumerClient client) {\n    NetworkHierarchy hierarchy = client.getNetworkHierarchy().getResult();\n    if (hierarchy == null)\n        return;\n\n    hierarchy.getGeographicalRegions().values().forEach(region -> {\n        System.out.println(String.format("- %s [%s]", region.getName(), region.getMRID()));\n        region.getSubGeographicalRegions().values().forEach(subRegion -> {\n            System.out.println(String.format("  |- %s [%s]", subRegion.getName(), subRegion.getMRID()));\n            subRegion.getSubstations().values().forEach(substation -> {\n                System.out.println(String.format("    |- %s [%s]", substation.getName(), substation.getMRID()));\n                substation.getFeeders().values().forEach(feeder -> {}\n                    System.out.println(String.format("      |- %s [%s]", feeder.getName(), feeder.getMRID()));\n                });\n            });\n        });\n    });\n}\n'))),Object(o.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun printNetworkHierarchy(client: NetworkConsumerClient) {\n    val hierarchy: NetworkHierarchy = client.getNetworkHierarchy().result ?: return\n    hierarchy.geographicalRegions.values.forEach { region ->\n        println("- ${region.name} [${region.mRID}]")\n        region.subGeographicalRegions.values.forEach { subRegion ->\n            println("  |- ${subRegion.name} [${subRegion.mRID}]")\n            subRegion.substations.values.forEach { substation ->\n                println("    |- ${substation.name} [${substation.mRID}]")\n                substation.feeders.values.forEach { feeder ->\n                    println("      |- ${feeder.name} [${feeder.mRID}]")\n                }\n            }\n        }\n    }\n}\n')))),Object(o.a)("p",null,"Each item from the hierarchy result contains an identified object mRID and it's name. This simplified data structure\nenables you to do things like easily build a suitable UI component allowing a user to select a portion of the network\nthey wish to use, without needing to pull back large amounts of full object data."),Object(o.a)("h2",{id:"requesting-identififed-objects"},"Requesting Identififed Objects"),Object(o.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"The *ConsumerClient APIs will take care of this for you, and you typically only need these functions if you're\ndeveloping the consumer client APIs themselves. Make sure what you want to achieve isn't already covered by the\nAPI before delving into this code."))),Object(o.a)("p",null,"Identified objects can be requested to build a model client side. When identified objects are loaded, any referenced\nobjects that have not been previously requested need to be requested explicitly."),Object(o.a)("p",null,"To find the mRIDs of any references that need to be requested you can use the ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"/evolve/docs/jvm-sdk/0.8.0/sdk-services#deferred-references"}),"deferred reference"),"\nfunctions on the service provided when requesting identified objects."),Object(o.a)(i.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(o.a)(c.a,{value:"java",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"void getWithBaseVoltage(NetworkService service, NetworkConsumerClient client, String mrid) {\n    IdentifiedObject equipment = client.getIdentifiedObject(service, mrid).getResult();\n    if (equipment == null || !(equipment instanceof ConductingEquipment)) {\n        return;\n    }\n    \n    Set<String> mrids = service.getUnresolvedReferenceMrids(Resolvers.baseVoltage(equipment));\n    if (!mrids.isEmpty()) {\n        client.getIdentifiedObject(service, mrids.iterator().next());\n    }\n}\n"))),Object(o.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"fun getWithBaseVoltage(service: NetworkService, client: NetworkConsumerClient, mrid: String) {\n    val equipment = client.getIdentifiedObject(service, mrid).result\n    if (equipment == null || equipment !is ConductingEquipment) {\n        return\n    }\n\n    service.getUnresolvedReferenceMrids(Resolvers.baseVoltage(equipment)).firstOrNull()\n        ?.let { client.getIdentifiedObject(service, it) }\n}\n")))),Object(o.a)("p",null,"You can also query the services UnresolvedReferences in the following ways:"),Object(o.a)(i.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(o.a)(c.a,{value:"java",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'String mrid = "feeder1";\n\n// To get unresolved references pointing from `equipment` to other objects\nList<UnresolvedReferences> references = service.getUnresolvedReferencesFrom(mrid);\n\nfor (UnresolvedReference ref: references) {\n    client.getIdentifiedObject(service, ref.toMrid)\n}\n\n// To get unresolved references pointing to `equipment`\nreferences = service.getUnresolvedReferencesFrom(mrid);\n\nfor (UnresolvedReference ref: references) {\n    client.getIdentifiedObject(service, ref.from.mRID)\n}\n'))),Object(o.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val mrid = "feeder1"\n\nservice.getUnresolvedReferencesFrom(mrid).forEach {\n    client.getIdentifiedObject(service, ref.toMrid)\n}\n\nservice.getUnresolvedReferencesTo(mrid).forEach {\n    client.getIdentifiedObject(service, ref.from.mRID)\n}\n')))))}h.isMDXComponent=!0},182:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},183:function(e,n,t){"use strict";var a=t(0),r=t(184);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},184:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},185:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(t),p=a,m=h["".concat(i,".").concat(p)]||h[p]||d[p]||o;return t?r.a.createElement(m,c({ref:n},s,{components:t})):r.a.createElement(m,c({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},186:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(183),i=t(182),c=t(55),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,h=e.groupId,p=e.className,m=Object(o.a)(),v=m.tabGroupChoices,f=m.setTabGroupChoices,b=Object(a.useState)(c),g=b[0],j=b[1],y=a.Children.toArray(e.children);if(null!=h){var O=v[h];null!=O&&O!==g&&d.some((function(e){return e.value===O}))&&j(O)}var w=function(e){j(e),null!=h&&f(h,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===n,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},187:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);