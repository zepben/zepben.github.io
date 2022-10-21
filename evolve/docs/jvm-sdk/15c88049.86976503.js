(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{161:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},162:function(e,t,n){"use strict";var a=n(0),r=n(163);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},163:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,b=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return n?r.a.createElement(b,s({ref:t},l,{components:n})):r.a.createElement(b,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(162),o=n(161),s=n(55),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,m=e.groupId,p=e.className,b=Object(i.a)(),f=b.tabGroupChoices,v=b.setTabGroupChoices,h=Object(a.useState)(s),g=h[0],j=h[1],y=a.Children.toArray(e.children);if(null!=m){var O=f[m];null!=O&&O!==g&&d.some((function(e){return e.value===O}))&&j(O)}var w=function(e){j(e),null!=m&&v(m,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},166:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(164)),o=n(165),s=n(166),c={id:"sdk-consumer",title:"Requesting Models"},l={unversionedId:"sdk-consumer",id:"version-0.4.0/sdk-consumer",isDocsHomePage:!1,title:"Requesting Models",description:"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes",source:"@site/versioned_docs/version-0.4.0/consumer.mdx",slug:"/sdk-consumer",permalink:"/evolve/docs/jvm-sdk/0.4.0/sdk-consumer",version:"0.4.0",sidebar:"version-0.4.0/someSidebar",previous:{title:"Persisting Models",permalink:"/evolve/docs/jvm-sdk/0.4.0/sdk-persistence"}},u=[{value:"Connecting to a server",id:"connecting-to-a-server",children:[]},{value:"Network Hierarchy",id:"network-hierarchy",children:[]},{value:"Requesting Identififed Objects",id:"requesting-identififed-objects",children:[]}],d={toc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The API for consuming data from the Evolve data server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"www.zepben.com"}),"Zepben"),"."))),Object(i.a)("p",null,"The SDK provides a client to request models to a remote data server via ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),". The service and proto\ndefinitions for this API can be found ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-grpc"}),"here"),". An implementation of the consumer\nserver is provided with the Evolve platform data services."),Object(i.a)("p",null,"When working with models, it is often impractical to load a whole model to a client due to the size of the data. This\nis generally not a problem however, as most use cases only operate on a small subsection of the model at a time. So, the\nconsumer API provides the ability to request smaller portions of the model quickly and easily. The other benefit to this\nis you can set up many clients in parallel operating on different chunks of the model to reduce the amount of time to\nrun any analytics you may wish to perform across the whole model."),Object(i.a)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(s.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"TODO\n"))),Object(i.a)(s.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"TODO\n")))),Object(i.a)("h2",{id:"network-hierarchy"},"Network Hierarchy"),Object(i.a)("p",null,"The network can be built with a hierarchy as discussed earlier ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"/evolve/docs/jvm-sdk/0.4.0/#network-hierarchy"}),"here"),". This allows you\nto easily identify and request smaller chunks of the network so you can focus on areas of concern. Here is an example\nof how to request the network hierarchy and print it out as a tree to the console."),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(s.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'void printNetworkHierarchy(NetworkConsumerClient client) {\n    NetworkHierarchy hierarchy = client.getNetworkHierarchy().getResult();\n    if (hierarchy == null)\n        return;\n\n    hierarchy.getGeographicalRegions().values().forEach(region -> {\n        System.out.println(String.format("- %s [%s]", region.getName(), region.getMRID()));\n        region.getSubGeographicalRegions().values().forEach(subRegion -> {\n            System.out.println(String.format("  |- %s [%s]", subRegion.getName(), subRegion.getMRID()));\n            subRegion.getSubstations().values().forEach(substation -> {\n                System.out.println(String.format("    |- %s [%s]", substation.getName(), substation.getMRID()));\n                substation.getFeeders().values().forEach(feeder -> {}\n                    System.out.println(String.format("      |- %s [%s]", feeder.getName(), feeder.getMRID()));\n                });\n            });\n        });\n    });\n}\n'))),Object(i.a)(s.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun printNetworkHierarchy(client: NetworkConsumerClient) {\n    val hierarchy: NetworkHierarchy = client.getNetworkHierarchy().result ?: return\n    hierarchy.geographicalRegions.values.forEach { region ->\n        println("- ${region.name} [${region.mRID}]")\n        region.subGeographicalRegions.values.forEach { subRegion ->\n            println("  |- ${subRegion.name} [${subRegion.mRID}]")\n            subRegion.substations.values.forEach { substation ->\n                println("    |- ${substation.name} [${substation.mRID}]")\n                substation.feeders.values.forEach { feeder ->\n                    println("      |- ${feeder.name} [${feeder.mRID}]")\n                }\n            }\n        }\n    }\n}\n')))),Object(i.a)("p",null,"Each item from the hierarchy result contains an identified object mRID and it's name. This simplified data structure\nenables you to do things like easily build a suitable UI component allowing a user to select a portion of the network\nthey wish to use, without needing to pull back large amounts of full object data."),Object(i.a)("h2",{id:"requesting-identififed-objects"},"Requesting Identififed Objects"),Object(i.a)("p",null,"Identified objects can be requested to build a model client side. When identified objects are loaded, any referenced\nobjects that have not been previously requested need to be requested explicitly. The exception to this is terminals\nare always sent with their conducting equipment and transformer ends are always sent with transformers."),Object(i.a)("p",null,"To find the mRIDs of any references that need to be requested you can use the ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"/evolve/docs/jvm-sdk/0.4.0/sdk-services#deferred-references"}),"deferred reference"),"\nfunctions on the service provided when requesting identified objects."),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(s.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"void getWithBaseVoltage(NetworkService service, NetworkConsumerClient client, String mrid) {\n    IdentifiedObject equipment = client.getIdentifiedObject(service, mrid).getResult();\n    if (equipment == null || !(equipment instanceof ConductingEquipment)) {\n        return;\n    }\n    \n    Set<String> mrids = service.getUnresolvedReferenceMrids(Resolvers.baseVoltage(equipment));\n    if (!mrids.isEmpty()) {\n        client.getIdentifiedObject(service, mrids.iterator().next());\n    }\n}\n"))),Object(i.a)(s.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"fun getWithBaseVoltage(service: NetworkService, client: NetworkConsumerClient, mrid: String) {\n    val equipment = client.getIdentifiedObject(service, mrid).result\n    if (equipment == null || equipment !is ConductingEquipment) {\n        return\n    }\n\n    service.getUnresolvedReferenceMrids(Resolvers.baseVoltage(equipment)).firstOrNull()\n        ?.let { client.getIdentifiedObject(service, it) }\n}\n")))))}m.isMDXComponent=!0}}]);