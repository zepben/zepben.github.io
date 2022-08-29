(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(165)),c=(n(169),n(170),{id:"sdk-persistence",title:"Persisting Models"}),i={unversionedId:"sdk-persistence",id:"version-0.25.0/sdk-persistence",isDocsHomePage:!1,title:"Persisting Models",description:"Evolve data service",source:"@site/versioned_docs/version-0.25.0/persistence.mdx",slug:"/sdk-persistence",permalink:"/evolve/docs/python-sdk/0.25.0/sdk-persistence",version:"0.25.0",sidebar:"version-0.25.0/someSidebar",previous:{title:"Tracing",permalink:"/evolve/docs/python-sdk/0.25.0/sdk-tracing"},next:{title:"Requesting Models",permalink:"/evolve/docs/python-sdk/0.25.0/sdk-consumer"}},s=[{value:"Evolve data service",id:"evolve-data-service",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"evolve-data-service"},"Evolve data service"),Object(o.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"The API for persisting data to a remote server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"http://www.zepben.com"}),"Zepben"),"."))),Object(o.a)("p",null,"The SDK provides a client to send models to a remote data server via ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"http://grpc.io/"}),"gRPC"),". The service and proto\ndefinitions for this API can be found ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"http://github.com/zepben/evolve-grpc"}),"here"),". An implementation of the server for\nthe services is provided with the Evolve platform data services."),Object(o.a)("p",null,"Here is an example of how to connect to and send a model to the evolve data server:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import connect_async, connect, ProducerClient, NetworkService, CustomerService, DiagramService\n\nasync with connect_async(host="localhost", rpc_port=50051) as channel:\n    client = ProducerClient(channel)\n\n    network_service = NetworkService()\n    customer_service = CustomerService()\n    diagram_service = DiagramService()\n    populate_network_objects(network_service)\n\n    await client.send([network_service, customer_service, diagram_service])\n\n# Or using the synchronous API:\nwith connect(host="localhost", rpc_port=50051) as channel:\n    client = ProducerClient(channel)\n\n    network_service = NetworkService()\n    customer_service = CustomerService()\n    diagram_service = DiagramService()\n    populate_network_objects(network_service)\n\n    client.send([network_service, customer_service, diagram_service])\n')),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"ProducerClient")," is an abstraction layer that allows sending all services at once (useful for a server that exposes\nmore than one service), however typically you'll want to use a dedicated service for the data you are working with.\nFor these cases there are the following classes:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"NetworkProducerClient")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"CustomerProducerClient")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"DiagramProducerClient"))),Object(o.a)("p",null,"These classes expose a similar API to ",Object(o.a)("inlineCode",{parentName:"p"},"ProducerClient"),", however accepting a single service of the named type rather than a list.\nFor example:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from zepben.evolve import connect_async, NetworkService, CustomerService, DiagramService, NetworkProducerClient, CustomerProducerClient, DiagramProducerClient\n\nasync with connect_async(host="localhost", rpc_port=50051) as channel:\n    network_client = NetworkProducerClient(channel)\n\n    network_service = NetworkService()\n    populate_network_objects(network_service)\n\n    await client.send([network_service, customer_service, diagram_service])\n\nasync with connect_async(host="localhost", rpc_port=50052) as channel:\n    customer_client = CustomerProducerClient(channel)\n\n    customer_service = CustomerService()\n    populate_customer_objects(customer_service)\n\n    await client.send(customer_service)\n\nasync with connect_async(host="localhost", rpc_port=50052) as channel:\n    diagram_client = DiagramProducerClient(channel)\n\n    diagram_service = DiagramService()\n    populate_diagram_objects(diagram_service)\n\n    await client.send(diagram_service)\n')))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),v=r,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},167:function(e,t,n){"use strict";var r=n(0),a=n(168);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},168:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},169:function(e,t,n){"use strict";n(0),n(167),n(166),n(56)},170:function(e,t,n){"use strict";n(3),n(0)}}]);