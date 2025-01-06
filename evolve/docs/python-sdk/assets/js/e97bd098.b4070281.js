"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[7730],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(s,".").concat(d)]||u[d]||v[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t(67294)},65488:function(e,n,t){t(67294),t(72389)},24642:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=(t(65488),t(85162),["components"]),c={id:"sdk-persistence",title:"Persisting Models"},s=void 0,l={unversionedId:"sdk-persistence",id:"version-0.43.1/sdk-persistence",title:"Persisting Models",description:"Evolve data service",source:"@site/versioned_docs/version-0.43.1/persistence.mdx",sourceDirName:".",slug:"/sdk-persistence",permalink:"/evolve/docs/python-sdk/0.43.1/sdk-persistence",draft:!1,tags:[],version:"0.43.1",frontMatter:{id:"sdk-persistence",title:"Persisting Models"},sidebar:"someSidebar",previous:{title:"Tracing",permalink:"/evolve/docs/python-sdk/0.43.1/sdk-tracing"},next:{title:"Requesting Models",permalink:"/evolve/docs/python-sdk/0.43.1/sdk-consumer"}},p={},u=[{value:"Evolve data service",id:"evolve-data-service",level:2}],v={toc:u},d="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"evolve-data-service"},"Evolve data service"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The API for persisting data to a remote server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",(0,a.kt)("a",{parentName:"p",href:"http://www.zepben.com"},"Zepben"),".")),(0,a.kt)("p",null,"The SDK provides a client to send models to a remote data server via ",(0,a.kt)("a",{parentName:"p",href:"http://grpc.io/"},"gRPC"),". The service and proto\ndefinitions for this API can be found ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/zepben/evolve-grpc"},"here"),". An implementation of the server for\nthe services is provided with the Evolve platform data services."),(0,a.kt)("p",null,"Here is an example of how to connect to and send a model to the evolve data server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect_async, connect, ProducerClient, NetworkService, CustomerService, DiagramService\n\nasync with connect_async(host="localhost", rpc_port=50051) as channel:\n    client = ProducerClient(channel)\n\n    network_service = NetworkService()\n    customer_service = CustomerService()\n    diagram_service = DiagramService()\n    populate_network_objects(network_service)\n\n    await client.send([network_service, customer_service, diagram_service])\n\n# Or using the synchronous API:\nwith connect(host="localhost", rpc_port=50051) as channel:\n    client = ProducerClient(channel)\n\n    network_service = NetworkService()\n    customer_service = CustomerService()\n    diagram_service = DiagramService()\n    populate_network_objects(network_service)\n\n    client.send([network_service, customer_service, diagram_service])\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducerClient")," is an abstraction layer that allows sending all services at once (useful for a server that exposes\nmore than one service), however typically you'll want to use a dedicated service for the data you are working with.\nFor these cases there are the following classes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NetworkProducerClient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CustomerProducerClient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DiagramProducerClient"))),(0,a.kt)("p",null,"These classes expose a similar API to ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducerClient"),", however accepting a single service of the named type rather than a list.\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import connect_async, NetworkService, CustomerService, DiagramService, NetworkProducerClient, CustomerProducerClient, DiagramProducerClient\n\nasync with connect_async(host="localhost", rpc_port=50051) as channel:\n    network_client = NetworkProducerClient(channel)\n\n    network_service = NetworkService()\n    populate_network_objects(network_service)\n\n    await client.send([network_service, customer_service, diagram_service])\n\nasync with connect_async(host="localhost", rpc_port=50052) as channel:\n    customer_client = CustomerProducerClient(channel)\n\n    customer_service = CustomerService()\n    populate_customer_objects(customer_service)\n\n    await client.send(customer_service)\n\nasync with connect_async(host="localhost", rpc_port=50052) as channel:\n    diagram_client = DiagramProducerClient(channel)\n\n    diagram_service = DiagramService()\n    populate_diagram_objects(diagram_service)\n\n    await client.send(diagram_service)\n')))}m.isMDXComponent=!0}}]);