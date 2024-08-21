"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,p=d["".concat(s,".").concat(m)]||d[m]||v[m]||o;return r?a.createElement(p,i(i({ref:t},u),{},{components:r})):a.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(4334);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),o=r(4334),i=r(2466),l=r(6550),s=r(1980),c=r(7392),u=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function v(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=v(e),[i,l]=(0,n.useState)((()=>function(e){var t;let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=p({queryString:r,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=null!=s?s:d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),v=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(d(t),s(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":v(e);break;case"ArrowRight":{var a;const t=u.indexOf(e.currentTarget)+1;r=null!=(a=u[t])?a:u[0];break}case"ArrowLeft":{var n;const t=u.indexOf(e.currentTarget)-1;r=null!=(n=u[t])?n:u[u.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:v},i,{className:(0,o.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=r?r:t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},7019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),i=r(5162);const l={id:"sdk-persistence",title:"Persisting Models"},s=void 0,c={unversionedId:"sdk-persistence",id:"version-0.18.0/sdk-persistence",title:"Persisting Models",description:"Local database",source:"@site/versioned_docs/version-0.18.0/persistence.mdx",sourceDirName:".",slug:"/sdk-persistence",permalink:"/evolve/docs/jvm-sdk/0.18.0/sdk-persistence",draft:!1,tags:[],version:"0.18.0",frontMatter:{id:"sdk-persistence",title:"Persisting Models"},sidebar:"someSidebar",previous:{title:"Tracing",permalink:"/evolve/docs/jvm-sdk/0.18.0/sdk-tracing"},next:{title:"Requesting Models",permalink:"/evolve/docs/jvm-sdk/0.18.0/sdk-consumer"}},u={},d=[{value:"Local database",id:"local-database",level:2},{value:"Evolve data service",id:"evolve-data-service",level:2},{value:"Caveats",id:"caveats",level:2}],v={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"local-database"},"Local database"),(0,n.kt)("p",null,"The SDK provides the ability to save your model to a local SQLite database. This may be handy for situations such as saving a\nmodel in a specific state / configuration, or it may be quicker to persist the model to a local database and reload than\nit is rebuilding your model from a source data system every time you want to build it."),(0,n.kt)(o.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'void saveToDb(String dbFile,\n              NetworkService networkService,\n              DiagramService diagramService,\n              CustomerService customerService) {\n    // All service are saved to the given dbFile file\n    MetadataCollection metadata = new MetadataCollection();\n    metadata.add(new DataSource("Name of source (e.g. GisExtractor)", "0.1", Instant.now()));\n    new DatabaseWriter(dbFile).save(metadata, Arrays.asList(networkService, diagramService, customerService));\n}\n\nvoid readFromDb(String dbFile,\n                MetadataCollection metadata,\n                NetworkService networkService,\n                DiagramService diagramService,\n                CustomerService customerService) {\n    // All the services will be loaded with their respective objects from dbFile\n    new DatabaseReader(dbFile).load(metadata, networkService, diagramService, customerService)\n}\n'))),(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun saveToDb(\n    dbFile: String,\n    networkService: NetworkService,\n    diagramService: DiagramService,\n    customerService: CustomerService\n) {\n    // The metadata and all service are saved to the given dbFile file\n    val metadata = MetadataCollection().apply { add(DataSource("Name of source (e.g. GisExtractor)", version = "0.1")) }\n    DatabaseWriter(dbFile).save(metadata, listOf(networkService, diagramService, customerService))\n}\n\nfun readFromDb(\n    dbFile: String,\n    metadata: MetadataCollection,\n    networkService: NetworkService,\n    diagramService: DiagramService,\n    customerService: CustomerService\n) {\n    // The metadata and all the services will be loaded with their respective objects from dbFile\n    DatabaseReader(dbFile).load(metadata, networkService, diagramService, customerService)\n}\n')))),(0,n.kt)("h2",{id:"evolve-data-service"},"Evolve data service"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The API for persisting data to a remote server is currently in alpha and very likely to experience breaking changes\nin the future. Please provide any feedback about this API to ",(0,n.kt)("a",{parentName:"p",href:"https://www.zepben.com"},"Zepben"),".")),(0,n.kt)("p",null,"The SDK provides a client to send models to a remote data server via ",(0,n.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),". The service and proto\ndefinitions for this API can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zepben/evolve-grpc"},"here"),". An implementation of the server for\nthe services is provided with the Evolve platform data services."),(0,n.kt)("p",null,"Here is an example of how to connect to and send a model to the evolve data server:"),(0,n.kt)(o.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"NetworkService networkService = new NetworkService();\nCustomerService customerService = new CustomerService();\nDiagramService diagramService = new DiagramService();\npopulateNetworkObjects(networkService)\n\ntry (GrpcChannel channel = GrpcChannelFactory.create(new ConnectionConfig(host, port))) {\n    new NetworkProducerClient(channel).send(networkService);\n    new CustomerProducerClient(channel).send(customerService);\n    new DiagramProducerClient(channel).send(diagramService);\n}\n"))),(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val networkService = NetworkService()\nval customerService = CustomerService()\nval diagramService = DiagramService()\npopulateNetworkObjects(networkService)\n\nGrpcChannelFactory.create(ConnectionConfig(host, port)).use {\n    NetworkProducerClient(it).send(networkService)\n    CustomerProducerClient(it).send(customerService)\n    DiagramProducerClient(it).send(diagramService)\n}\n")))),(0,n.kt)("h2",{id:"caveats"},"Caveats"),(0,n.kt)("p",null,"This section covers things to keep in mind when attempting to save the model:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TODO")))}p.isMDXComponent=!0}}]);