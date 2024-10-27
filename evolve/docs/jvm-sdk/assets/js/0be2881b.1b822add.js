"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[3169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4334);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(4334),i=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=b({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=null!=l?l:m;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(m(t),l(a))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=u.indexOf(e.currentTarget)+1;n=null!=(a=u[t])?a:u[0];break}case"ArrowLeft":{var r;const t=u.indexOf(e.currentTarget)-1;n=null!=(r=u[t])?r:u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={id:"sdk-metrics",title:"Ingestion Jobs and Metrics"},l=void 0,c={unversionedId:"sdk-metrics",id:"sdk-metrics",title:"Ingestion Jobs and Metrics",description:"Record-Keeping",source:"@site/docs/metrics.mdx",sourceDirName:".",slug:"/sdk-metrics",permalink:"/evolve/docs/jvm-sdk/next/sdk-metrics",draft:!1,tags:[],version:"current",frontMatter:{id:"sdk-metrics",title:"Ingestion Jobs and Metrics"},sidebar:"someSidebar",previous:{title:"Protection Relays",permalink:"/evolve/docs/jvm-sdk/next/sdk-protection"},next:{title:"Query Network State Service",permalink:"/evolve/docs/jvm-sdk/next/query-network-state-service"}},u={},m=[{value:"Record-Keeping",id:"record-keeping",level:2},{value:"Ingestion Job Model",id:"ingestion-job-model",level:2}],d={toc:m},p="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"record-keeping"},"Record-Keeping"),(0,r.kt)("p",null,"It's often useful to have a record of previous runs of a data ingestor. For this reason, the Evolve SDK supports the ability to save the following information\nabout each run:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metadata:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timestamp of when the run started"),(0,r.kt)("li",{parentName:"ul"},'A short description of the source data (e.g. "ExampleEnergy full HV/LV 2024-01-02 cut")'),(0,r.kt)("li",{parentName:"ul"},'The name of the application used to process the source data (e.g. "example-energy-ingestor")'),(0,r.kt)("li",{parentName:"ul"},'The version of the application used to process the source data (e.g. "0.12.0")'))),(0,r.kt)("li",{parentName:"ul"},"For each data source used (e.g. files) for the run:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'The name of the data source (e.g. "ABC_feeder.xml")'),(0,r.kt)("li",{parentName:"ul"},"Timestamp of when the data source was exported"),(0,r.kt)("li",{parentName:"ul"},"The SHA-256 of the data source's contents, if applicable"))),(0,r.kt)("li",{parentName:"ul"},"Network container metrics:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A network container may either be the entire network processed in a run, or a section of the network (geographical region, subgeographical region,\nsubstation, feeder, or LV feeder)."),(0,r.kt)("li",{parentName:"ul"},"For each network container, any number of metrics may be recorded. Each metric may have an arbitrary string name and a numeric value.")))),(0,r.kt)("p",null,"The above information is captured in an in-memory model named ",(0,r.kt)("inlineCode",{parentName:"p"},"IngestionJob"),". an ",(0,r.kt)("inlineCode",{parentName:"p"},"IngestionJob"),' with metadata may be saved to a "metrics" database using the\n',(0,r.kt)("inlineCode",{parentName:"p"},"MetricsDatabaseWriter"),"."),(0,r.kt)("h2",{id:"ingestion-job-model"},"Ingestion Job Model"),(0,r.kt)("p",null,"The following is an example of creating, populating, and saving an ",(0,r.kt)("inlineCode",{parentName:"p"},"IngestionJob")," object to a metrics database file, ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics.sqlite"),"."),(0,r.kt)(o.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.zepben.evolve.cim.iec61970.base.core.Feeder;\nimport com.zepben.evolve.database.sqlite.metrics.MetricsDatabaseWriter;\nimport com.zepben.evolve.metrics.IngestionJob;\nimport com.zepben.evolve.metrics.IngestionMetadata;\nimport com.zepben.evolve.metrics.TotalNetworkContainer;\n\nimport java.security.MessageDigest;\nimport java.security.NoSuchAlgorithmException;\nimport java.time.Instant;\nimport java.util.UUID;\n\nimport static com.zepben.evolve.metrics.NetworkContainerKt.networkContainer;\n\npublic class IngestionJobExample {\n    public static void main(String[] args) throws NoSuchAlgorithmException {\n        MessageDigest digest = MessageDigest.getInstance("SHA-256");\n\n        // This would normally be inside a NetworkService, but it is created here for this example.\n        Feeder feeder = new Feeder("abc-feeder");\n        feeder.setName("ABC feeder");\n\n        IngestionJob ingestionJob = new IngestionJob(\n            UUID.randomUUID(),\n            new IngestionMetadata(\n                Instant.now(),\n                "ExampleEnergy full HV/LV 2024-01-02 cut",\n                "example-energy-ingestor",\n                "0.12.0"\n            )\n        );\n\n        // Sources and network metrics are "automaps", which populate default values for new keys as they are accessed.\n        ingestionJob.getSources().get("ABC_feeder.xml").setTimestamp(Instant.parse("2020-01-02T10:30:00.00Z"));\n        ingestionJob.getSources().get("ABC_feeder.xml").setFileHash(digest.digest("file contents".getBytes()));\n        ingestionJob.getNetworkMetrics().get(TotalNetworkContainer.INSTANCE).put("total cable length", 123.45);\n        ingestionJob.getNetworkMetrics().get(networkContainer(feeder)).put("total cable length", 12.345);\n        ingestionJob.getNetworkMetrics().get(networkContainer(feeder, true)).put("total cable length", 123.45);\n\n        MetricsDatabaseWriter metricsDatabaseWriter = new MetricsDatabaseWriter(\n            "metrics.sqlite", // Database file to create/update\n            ingestionJob, // Ingestion job to write\n            Path.of("path/to/model") // Optional: Folder containing files for the model exported by the ingestion job. The network, customer, and diagram databases should be located here.\n        );\n        if (metricsDatabaseWriter.save()) {\n            System.out.println("Ingestion job saved successfully");\n        } else {\n            System.out.println("Ingestion job could not be saved successfully");\n        }\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.zepben.evolve.cim.iec61970.base.core.Feeder\nimport com.zepben.evolve.database.sqlite.metrics.MetricsDatabaseWriter\nimport com.zepben.evolve.metrics.IngestionJob\nimport com.zepben.evolve.metrics.IngestionMetadata\nimport com.zepben.evolve.metrics.TotalNetworkContainer\nimport com.zepben.evolve.metrics.toNetworkContainer\nimport java.security.MessageDigest\nimport java.time.Instant\nimport java.util.*\n\n// This would normally be inside a NetworkService, but it is created here for this example.\nval feeder = Feeder("abc-feeder").apply { name = "ABC Feeder" }\n\nval ingestionJob = IngestionJob(UUID.randomUUID()).apply {\n    metadata = IngestionMetadata(\n        startTime = Instant.now(),\n        source = "ExampleEnergy full HV/LV 2024-01-02 cut",\n        application = "example-energy-ingestor",\n        applicationVersion = "0.12.0"\n    )\n\n    // Sources and network metrics are "automaps", which populate default values for new keys as they are accessed.\n    sources["ABC_feeder.xml"].timestamp = Instant.parse("2020-01-02T10:30:00.00Z")\n    sources["ABC_feeder.xml"].fileHash = MessageDigest.getInstance("SHA-256").digest("file contents".toByteArray())\n    networkMetrics[TotalNetworkContainer]["total cable length"] = 123.45\n    networkMetrics[feeder.toNetworkContainer()]["total cable length"] = 12.345\n    networkMetrics[feeder.toNetworkContainer(includeDownstream = true)]["total cable length"] = 123.45\n}\n\nfun main() {\n    val metricsDatabaseWriter = MetricsDatabaseWriter(\n        "metrics.sqlite", // Database file to create/update\n        ingestionJob, // Ingestion job to write\n        Path.of("path/to/model") // Optional: Folder containing files for the model exported by the ingestion job. The network, customer, and diagram databases should be located here.\n    )\n    if (metricsDatabaseWriter.save()) {\n        println("Ingestion job saved successfully")\n    } else {\n        println("Ingestion job could not be saved successfully")\n    }\n}\n')))),(0,r.kt)("p",null,"Each job in a metrics database should have a unique UUID. If you attempt to save a job to an existing database, it will be added to it rather than replacing the\nentire database. Additionally, calling ",(0,r.kt)("inlineCode",{parentName:"p"},"save()")," will create a file named using the UUID of the job at the path of the model, if one is provided upon\nconstructing the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetricsDatabaseWriter"),"."))}b.isMDXComponent=!0}}]);