(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return d})),t.d(a,"default",(function(){return v}));var r=t(3),n=t(7),i=(t(0),t(171)),o=t(172),c=t(173),l={id:"sdk-persistence",title:"Persisting Models"},s={unversionedId:"sdk-persistence",id:"version-0.13.0/sdk-persistence",isDocsHomePage:!1,title:"Persisting Models",description:"Local database",source:"@site/versioned_docs/version-0.13.0/persistence.mdx",slug:"/sdk-persistence",permalink:"/evolve/docs/jvm-sdk/0.13.0/sdk-persistence",version:"0.13.0",sidebar:"version-0.13.0/someSidebar",previous:{title:"Tracing",permalink:"/evolve/docs/jvm-sdk/0.13.0/sdk-tracing"},next:{title:"Requesting Models",permalink:"/evolve/docs/jvm-sdk/0.13.0/sdk-consumer"}},d=[{value:"Local database",id:"local-database",children:[]},{value:"Evolve data service",id:"evolve-data-service",children:[]},{value:"Caveats",id:"caveats",children:[]}],u={toc:d};function v(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"local-database"},"Local database"),Object(i.a)("p",null,"The SDK provides the ability to save your model to a local SQLite database. This may be handy for situations such as saving a\nmodel in a specific state / configuration or it may be quicker to persist the model to a local database and reload than\nit is rebuilding your model from a source data system every time you want to build it."),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'void saveToDb(String dbFile,\n              NetworkService networkService,\n              DiagramService diagramService,\n              CustomerService customerService) {\n    // All service are saved to the given dbFile file\n    MetadataCollection metaData = new MetadataCollection();\n    metaData.add(new DataSource("Name of source (e.g. GisExtractor)", "0.1", Instant.now()));\n    new DatabaseWriter(dbFile).save(metaData, Arrays.asList(networkService, diagramService, customerService));\n}\n\nvoid readFromDb(String dbFile,\n                MetadataCollection metaData,\n                NetworkService networkService,\n                DiagramService diagramService,\n                CustomerService customerService) {\n    // All the services will be loaded with their respective objects from dbFile\n    new DatabaseReader(dbFile).load(metaData, networkService, diagramService, customerService)\n}\n'))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'fun saveToDb(\n    dbFile: String,\n    networkService: NetworkService,\n    diagramService: DiagramService,\n    customerService: CustomerService\n) {\n    // The metadata and all service are saved to the given dbFile file\n    val metaData = MetadataCollection().apply { add(DataSource("Name of source (e.g. GisExtractor)", version = "0.1")) }\n    DatabaseWriter(dbFile).save(metaData, listOf(networkService, diagramService, customerService))\n}\n\nfun readFromDb(\n    dbFile: String,\n    metaData: MetadataCollection,\n    networkService: NetworkService,\n    diagramService: DiagramService,\n    customerService: CustomerService\n) {\n    // The metadata and all the services will be loaded with their respective objects from dbFile\n    DatabaseReader(dbFile).load(metaData, networkService, diagramService, customerService)\n}\n')))),Object(i.a)("h2",{id:"evolve-data-service"},"Evolve data service"),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The API for persisting data to a remote server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"www.zepben.com"}),"Zepben"),"."))),Object(i.a)("p",null,"The SDK provides a client to send models to a remote data server via ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),". The service and proto\ndefinitions for this API can be found ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-grpc"}),"here"),". An implementation of the server for\nthe services is provided with the Evolve platform data services."),Object(i.a)("p",null,"Here is an example of how to connect to and send a model to the evolve data server:"),Object(i.a)(o.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(c.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"NetworkService networkService = new NetworkService();\nCustomerService customerService = new CustomerService();\nDiagramService diagramService = new DiagramService();\npopulateNetworkObjects(networkService)\n\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig(host, port))) {\n    new NetworkProducerClient(channel).send(networkService);\n    new CustomerProducerClient(channel).send(customerService);\n    new DiagramProducerClient(channel).send(diagramService);\n}\n"))),Object(i.a)(c.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"val networkService = NetworkService()\nval customerService = CustomerService()\nval diagramService = DiagramService()\npopulateNetworkObjects(networkService)\n\nGrpcChannelFactory.create(ConnectionConfig(host, port)).use {\n    NetworkProducerClient(it).send(networkService)\n    CustomerProducerClient(it).send(customerService)\n    DiagramProducerClient(it).send(diagramService)\n}\n")))),Object(i.a)("h2",{id:"caveats"},"Caveats"),Object(i.a)("p",null,"This section covers things to keep in mind when attempting to save the model:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"TODO")))}v.isMDXComponent=!0},168:function(e,a,t){"use strict";function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}},169:function(e,a,t){"use strict";var r=t(0),n=t(170);a.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},170:function(e,a,t){"use strict";var r=t(0),n=Object(r.createContext)(void 0);a.a=n},171:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),d=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c({},a,{},e)),t},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},v=Object(r.forwardRef)((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),v=d(t),m=r,p=v["".concat(o,".").concat(m)]||v[m]||u[m]||i;return t?n.a.createElement(p,c({ref:a},s,{components:t})):n.a.createElement(p,c({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=v;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},172:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(169),o=t(168),c=t(55),l=t.n(c),s=37,d=39;a.a=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,u=e.values,v=e.groupId,m=e.className,p=Object(i.a)(),b=p.tabGroupChoices,f=p.setTabGroupChoices,g=Object(r.useState)(c),O=g[0],j=g[1],h=r.Children.toArray(e.children);if(null!=v){var w=b[v];null!=w&&w!==O&&u.some((function(e){return e.value===w}))&&j(w)}var S=function(e){j(e),null!=v&&f(v,e)},y=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var a=e.value,t=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case d:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(y,e.target,e)},onFocus:function(){return S(a)},onClick:function(){S(a)}},t)}))),a?Object(r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return Object(r.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}},173:function(e,a,t){"use strict";var r=t(3),n=t(0),i=t.n(n);a.a=function(e){var a=e.children,t=e.hidden,n=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),a)}}}]);