"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[1222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(4334);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(4334),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:r}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=null!=s?s:d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(d(t),s(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{var r;const t=u.indexOf(e.currentTarget)+1;n=null!=(r=u[t])?r:u[0];break}case"ArrowLeft":{var a;const t=u.indexOf(e.currentTarget)-1;n=null!=(a=u[t])?a:u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:h},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},1485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={id:"sdk-consumer",title:"Requesting Models"},s=void 0,c={unversionedId:"sdk-consumer",id:"version-0.12.1/sdk-consumer",title:"Requesting Models",description:"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes",source:"@site/versioned_docs/version-0.12.1/consumer.mdx",sourceDirName:".",slug:"/sdk-consumer",permalink:"/evolve/docs/jvm-sdk/0.12.1/sdk-consumer",draft:!1,tags:[],version:"0.12.1",frontMatter:{id:"sdk-consumer",title:"Requesting Models"},sidebar:"version-0.12.1/someSidebar",previous:{title:"Persisting Models",permalink:"/evolve/docs/jvm-sdk/0.12.1/sdk-persistence"}},u={},d=[{value:"Connecting to a server",id:"connecting-to-a-server",level:2},{value:"Network Hierarchy",id:"network-hierarchy",level:2},{value:"Requesting Identififed Objects",id:"requesting-identififed-objects",level:2}],h={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",(0,a.kt)("a",{parentName:"p",href:"https://www.zepben.com"},"Zepben"),".")),(0,a.kt)("p",null,"The SDK provides a client to request models to a remote data server via ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),". The service and proto\ndefinitions for this API can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-grpc"},"here"),". An implementation of the consumer\nserver is provided with the Evolve platform data services."),(0,a.kt)("p",null,"When working with models, it is often impractical to load a whole model to a client due to the size of the data. This\nis generally not a problem however, as most use cases only operate on a small subsection of the model at a time. So, the\nconsumer API provides the ability to request smaller portions of the model quickly and easily. The other benefit to this\nis you can set up many clients in parallel operating on different chunks of the model to reduce the amount of time to\nrun any analytics you may wish to perform across the whole model."),(0,a.kt)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),(0,a.kt)(o.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Insecure\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig("localhost", 50051))) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    NetworkService ns = new NetworkService();\n    GrpcResult result = client.getFeeder(ns).throwOnError();\n}\n\n// With SSL\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig("localhost", 50051, true, "ca.cert"))) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    NetworkService ns = new NetworkService();\n    GrpcResult result = client.getFeeder(ns).throwOnError();\n}\n\n// With SSL and OAuth2. Note that you should never connect to a non-SSL server while using OAuth2, as you will be vulnerable to MITM attacks.\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig("localhost", 50051, true, "ca.cert"))) {}\n    // Create CallCredentials using a configuration URL. This configuration endpoint will often be provided by the service you are connecting to.\n    JwtCredentials creds = EvolveCallCredentials.create(\n        "<client_id>",\n        "<client_secret>",\n        "<ewb_auth_config_URL>"\n    );\n\n    // Or create them with an AuthConfig if a configuration endpoint doesn\'t exist.\n    JwtCredentials creds = EvolveCallCredentials.create(\n        "<client_id>",\n        "<client_secret>",\n        new AuthConfig(tokenUrl="https://zepben.au.auth0.com/oauth/token", audience="https://evolve/", authType=AuthType.AUTH0)\n    );\n\n    NetworkConsumerClient client = new NetworkConsumerClient(channel, creds);\n    NetworkService ns = new NetworkService();\n    GrpcResult result = client.getFeeder(ns).throwOnError();\n}\n\n// With SSL and client authentication\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig("localhost", 50051, true, "ca.cert", "path/to/signed.cert", "path/to/private.key"))) {\n    NetworkConsumerClient client = new NetworkConsumerClient(channel);\n    NetworkService ns = new NetworkService();\n    GrpcResult result = client.getFeeder(ns).throwOnError();\n}\n'))),(0,a.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Insecure\nGrpcChannelFactory.create(ConnectionConfig("localhost", 50051)).use { client ->\n    val client = NetworkConsumerClient(channel)\n    val ns = NetworkService()\n    val result = client.getFeeder(ns).throwOnError()\n}\n\n// With just SSL\nGrpcChannelFactory.create(ConnectionConfig("localhost", 50051, true, trustCertPath = "path/to/zepben/ca.cert")).use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val ns = NetworkService()\n    val result = client.getFeeder(ns).throwOnError()\n}\n\n// With SSL and OAuth2. Note that you should never connect to a non-SSL server while using OAuth2, as you will be vulnerable to MITM attacks.\nGrpcChannelFactory.create(ConnectionConfig("localhost", 50051, true, trustCertPath = "path/to/zepben/ca.cert")).use { channel ->\n    // Create CallCredentials using a configuration URL. This configuration endpoint will often be provided by the service you are connecting to.\n    val creds = EvolveCallCredentials.create(\n        "<client_id>",\n        "<client_secret>",\n        "<ewb_auth_config_URL>"\n    )\n\n    // Or create them with an AuthConfig if a configuration endpoint doesn\'t exist.\n    val creds = EvolveCallCredentials.create(\n        "<client_id>",\n        "<client_secret>",\n        AuthConfig(tokenUrl="https://zepben.au.auth0.com/oauth/token", audience="https://evolve/", authType=AuthType.AUTH0)\n    )\n\n    val client = NetworkConsumerClient(channel, creds)\n    val ns = NetworkService()\n    val result = client.getFeeder(ns).throwOnError()\n}\n\n// With SSL and client authentication\nGrpcChannelFactory.create(ConnectionConfig("localhost", 50051, true, trustCertPath = "path/to/zepben/ca.cert", authCertPath = "path/to/signed.cert", authKeyPath = "path/to/private.key")).use { channel ->\n    val client = NetworkConsumerClient(channel)\n    val ns = NetworkService()\n    val result = client.getFeeder(ns).throwOnError()\n}\n')))),(0,a.kt)("h2",{id:"network-hierarchy"},"Network Hierarchy"),(0,a.kt)("p",null,"The network can be built with a hierarchy as discussed earlier ",(0,a.kt)("a",{parentName:"p",href:"/evolve/docs/jvm-sdk/0.12.1/#network-hierarchy"},"here"),". This allows you\nto easily identify and request smaller chunks of the network so you can focus on areas of concern. Here is an example\nof how to request the network hierarchy and print it out as a tree to the console."),(0,a.kt)(o.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'void printNetworkHierarchy(NetworkConsumerClient client) {\n    NetworkHierarchy hierarchy = client.getNetworkHierarchy().getResult();\n    if (hierarchy == null)\n        return;\n\n    hierarchy.getGeographicalRegions().values().forEach(region -> {\n        System.out.println(String.format("- %s [%s]", region.getName(), region.getMRID()));\n        region.getSubGeographicalRegions().values().forEach(subRegion -> {\n            System.out.println(String.format("  |- %s [%s]", subRegion.getName(), subRegion.getMRID()));\n            subRegion.getSubstations().values().forEach(substation -> {\n                System.out.println(String.format("    |- %s [%s]", substation.getName(), substation.getMRID()));\n                substation.getFeeders().values().forEach(feeder -> {}\n                    System.out.println(String.format("      |- %s [%s]", feeder.getName(), feeder.getMRID()));\n                });\n            });\n        });\n    });\n}\n'))),(0,a.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun printNetworkHierarchy(client: NetworkConsumerClient) {\n    val hierarchy: NetworkHierarchy = client.getNetworkHierarchy().result ?: return\n    hierarchy.geographicalRegions.values.forEach { region ->\n        println("- ${region.name} [${region.mRID}]")\n        region.subGeographicalRegions.values.forEach { subRegion ->\n            println("  |- ${subRegion.name} [${subRegion.mRID}]")\n            subRegion.substations.values.forEach { substation ->\n                println("    |- ${substation.name} [${substation.mRID}]")\n                substation.feeders.values.forEach { feeder ->\n                    println("      |- ${feeder.name} [${feeder.mRID}]")\n                }\n            }\n        }\n    }\n}\n')))),(0,a.kt)("p",null,"Each item from the hierarchy result contains an identified object mRID and it's name. This simplified data structure\nenables you to do things like easily build a suitable UI component allowing a user to select a portion of the network\nthey wish to use, without needing to pull back large amounts of full object data."),(0,a.kt)("h2",{id:"requesting-identififed-objects"},"Requesting Identififed Objects"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The *ConsumerClient APIs will take care of this for you, and you typically only need these functions if you're\ndeveloping the consumer client APIs themselves. Make sure what you want to achieve isn't already covered by the\nAPI before delving into this code.")),(0,a.kt)("p",null,"Identified objects can be requested to build a model client side. When identified objects are loaded, any referenced\nobjects that have not been previously requested need to be requested explicitly."),(0,a.kt)("p",null,"To find the mRIDs of any references that need to be requested you can use the ",(0,a.kt)("a",{parentName:"p",href:"/evolve/docs/jvm-sdk/0.12.1/sdk-services#deferred-references"},"deferred reference"),"\nfunctions on the service provided when requesting identified objects."),(0,a.kt)(o.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void getWithBaseVoltage(NetworkService service, NetworkConsumerClient client, String mrid) {\n    IdentifiedObject equipment = client.getIdentifiedObject(service, mrid).getResult();\n    if (equipment == null || !(equipment instanceof ConductingEquipment)) {\n        return;\n    }\n    \n    Set<String> mrids = service.getUnresolvedReferenceMrids(Resolvers.baseVoltage(equipment));\n    if (!mrids.isEmpty()) {\n        client.getIdentifiedObject(service, mrids.iterator().next());\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun getWithBaseVoltage(service: NetworkService, client: NetworkConsumerClient, mrid: String) {\n    val equipment = client.getIdentifiedObject(service, mrid).result\n    if (equipment == null || equipment !is ConductingEquipment) {\n        return\n    }\n\n    service.getUnresolvedReferenceMrids(Resolvers.baseVoltage(equipment)).firstOrNull()\n        ?.let { client.getIdentifiedObject(service, it) }\n}\n")))),(0,a.kt)("p",null,"You can also query the services UnresolvedReferences in the following ways:"),(0,a.kt)(o.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String mrid = "feeder1";\n\n// To get unresolved references pointing from `equipment` to other objects\nList<UnresolvedReferences> references = service.getUnresolvedReferencesFrom(mrid);\n\nfor (UnresolvedReference ref: references) {\n    client.getIdentifiedObject(service, ref.toMrid)\n}\n\n// To get unresolved references pointing to `equipment`\nreferences = service.getUnresolvedReferencesFrom(mrid);\n\nfor (UnresolvedReference ref: references) {\n    client.getIdentifiedObject(service, ref.from.mRID)\n}\n'))),(0,a.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val mrid = "feeder1"\n\nservice.getUnresolvedReferencesFrom(mrid).forEach {\n    client.getIdentifiedObject(service, ref.toMrid)\n}\n\nservice.getUnresolvedReferencesTo(mrid).forEach {\n    client.getIdentifiedObject(service, ref.from.mRID)\n}\n')))))}m.isMDXComponent=!0}}]);