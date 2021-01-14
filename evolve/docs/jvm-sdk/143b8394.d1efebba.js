(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,a){"use strict";var r=a(3),n=a(0),i=a.n(n);t.a=function({children:e,hidden:t,className:a}){return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(98)),c=a(99),o=a(100),l={id:"sdk-persistence",title:"Persisting Models"},s={unversionedId:"sdk-persistence",id:"sdk-persistence",isDocsHomePage:!1,title:"Persisting Models",description:"Local database",source:"@site/docs\\persistence.mdx",slug:"/sdk-persistence",permalink:"/evolve/docs/jvm-sdk/next/sdk-persistence",version:"current",sidebar:"someSidebar",previous:{title:"Tracing",permalink:"/evolve/docs/jvm-sdk/next/sdk-tracing"},next:{title:"Requesting Models",permalink:"/evolve/docs/jvm-sdk/next/sdk-consumer"}},d=[{value:"Local database",id:"local-database",children:[]},{value:"Evolve data service",id:"evolve-data-service",children:[]}],v={toc:d};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"local-database"},"Local database"),Object(i.a)("p",null,"The SDK provides the ability to save your model to a local SQLite database. This may be handy for situations such as saving a\nmodel in a specific state / configuration or it may be quicker to persist the model to a local database and reload than\nit is rebuilding your model from a source data system every time you want to build it."),Object(i.a)(c.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(o.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"void saveToDb(String dbFile, NetworkService networkService, DiagramService diagramService, CustomerService customerService) {\n    // All service are saved to the given dbFile file\n    new DatabaseWriter(dbFile).save(listOf(networkService, diagramService, customerService));\n}\n\nvoid readFromDb(String dbFile, NetworkService networkService, DiagramService diagramService, CustomerService customerService) {\n    // All the services will be loaded with their respective objects from dbFile\n    new DatabaseReader(dbFile).load(networkService, diagramService, customerService)\n}\n"))),Object(i.a)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"fun saveToDb(dbFile: String, networkService: NetworkService, diagramService: DiagramService, customerService: CustomerService) {\n    // All service are saved to the given dbFile file\n    DatabaseWriter(dbFile).save(listOf(networkService, diagramService, customerService))\n}\n\nfun readFromDb(dbFile: String, networkService: NetworkService, diagramService: DiagramService, customerService: CustomerService) {\n    // All the services will be loaded with their respective objects from dbFile\n    DatabaseReader(dbFile).load(networkService, diagramService, customerService)\n}\n")))),Object(i.a)("h2",{id:"evolve-data-service"},"Evolve data service"),Object(i.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The API for persisting data to a remote server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"www.zepben.com"}),"Zepben"),"."))),Object(i.a)("p",null,"The SDK provides a client to send models to a remote data server via ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC"),". The service and proto\ndefinitions for this API can be found ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zepben/evolve-grpc"}),"here"),". An implementation of the server for\nthe services is provided with the Evolve platform data services."),Object(i.a)("p",null,"Here is an example of how to connect to and send a model to the evolve data server:"),Object(i.a)(c.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.a)(o.a,{value:"java",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"Channel channel = GrpcChannelFactory.create(new ConnectionConfig(host, port));\n\nNetworkService networkService = new NetworkService();\nCustomerService customerService = new CustomerService();\nDiagramService diagramService = new DiagramService();\npopulateNetworkObjects(networkService)\n\nnew NetworkProducerClient(channel).send(networkService);\nnew CustomerProducerClient(channel).send(customerService);\nnew DiagramProducerClient(channel).send(diagramService);\n"))),Object(i.a)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"val channel = GrpcChannelFactory.create(ConnectionConfig(host, port))\n\nval networkService = NetworkService()\nval customerService = CustomerService()\nval diagramService = DiagramService()\npopulateNetworkObjects(networkService)\n\nNetworkProducerClient(channel).send(networkService)\nCustomerProducerClient(channel).send(customerService)\nDiagramProducerClient(channel).send(diagramService)\n")))))}u.isMDXComponent=!0},94:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},96:function(e,t,a){"use strict";var r=a(0),n=a(97);t.a=function(){const e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},97:function(e,t,a){"use strict";var r=a(0);const n=Object(r.createContext)(void 0);t.a=n},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,b=u["".concat(c,".").concat(m)]||u[m]||v[m]||i;return a?n.a.createElement(b,o({ref:t},s,{components:a})):n.a.createElement(b,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(96),c=a(94),o=a(54),l=a.n(o);const s=37,d=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:v,groupId:u,className:m}=e,{tabGroupChoices:b,setTabGroupChoices:p}=Object(i.a)(),[f,g]=Object(r.useState)(o),O=r.Children.toArray(e.children);if(null!=u){const e=b[u];null!=e&&e!==f&&v.some((t=>t.value===e))&&g(e)}const j=e=>{g(e),null!=u&&p(u,e)},h=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},m)},v.map((({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}}}]);