"use strict";(self.webpackChunkenergy_worbench_server_doco=self.webpackChunkenergy_worbench_server_doco||[]).push([[8316],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"graphql",title:"GraphQL API"},s=void 0,p={unversionedId:"graphql",id:"version-2.13.0/graphql",title:"GraphQL API",description:"The Energy Workbench Server also offers limited support for GraphQL queries.",source:"@site/versioned_docs/version-2.13.0/graphql.md",sourceDirName:".",slug:"/graphql",permalink:"/evolve/docs/energy-workbench-server/2.13.0/graphql",draft:!1,tags:[],version:"2.13.0",frontMatter:{id:"graphql",title:"GraphQL API"},sidebar:"version-2.13.0/sidebar",previous:{title:"Routes",permalink:"/evolve/docs/energy-workbench-server/2.13.0/routes"},next:{title:"API",permalink:"/evolve/docs/energy-workbench-server/2.13.0/api"}},d={},c=[{value:"Getting started with GraphQL",id:"getting-started-with-graphql",level:2},{value:"GraphQL Queries",id:"graphql-queries",level:3},{value:"FindIdentifiedObjectCriteriaInput fields",id:"findidentifiedobjectcriteriainput-fields",level:4},{value:"Other GraphQL features",id:"other-graphql-features",level:2},{value:"Meta fields",id:"meta-fields",level:3},{value:"Inline fragments",id:"inline-fragments",level:3},{value:"Example queries",id:"example-queries",level:2}],m={toc:c},u="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Energy Workbench Server also offers limited support for GraphQL queries.\nThis documentation only provides a basic overview - more information on GraphQL can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"https://graphql.org/learn/"),"."),(0,i.kt)("h2",{id:"getting-started-with-graphql"},"Getting started with GraphQL"),(0,i.kt)("p",null,"The Energy Workbench Server GraphQL endpoint provides its own documentation of the queries and fields available in its schema.\nSome API development tools, such as ",(0,i.kt)("a",{parentName:"p",href:"https://insomnia.rest/download"},"Insomnia"),", allow you to view this schema as you build your queries.\nUsing one of these tools is strongly advised to allow full use of the GraphQL functionality, as this page only covers the basics."),(0,i.kt)("p",null,"All GraphQL queries use the same endpoint:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,i.kt)("td",{parentName:"tr",align:"left"},"/ewb/api/graphql"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The endpoint for all GraphQL queries.")))),(0,i.kt)("p",null,"This endpoint is also composed around the ",(0,i.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve"},"Evolve CIM Profile"),". As such, the queries below will return objects from this profile."),(0,i.kt)("h3",{id:"graphql-queries"},"GraphQL Queries"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Query"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getIdentifiedObject(mRID: string)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Request an ",(0,i.kt)("a",{parentName:"td",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject"},"IdentifiedObject")," by mRID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getIdentifiedObjects(mRIDs: [string])")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Request many ",(0,i.kt)("a",{parentName:"td",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject"},"IdentifiedObjects")," by their mRID. The maximum number that can be requested per query is 100. If the list contains more than this the response will be truncated to the first 100 MRIDs that are found. If a requested MRID cannot be found it will be ignored and will not cause an error.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"findIdentifiedObjects(criteria: [FindIdentifiedObjectCriteriaInput])")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Find all ",(0,i.kt)("a",{parentName:"td",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject"},"IdentifiedObjects")," that match the provided criteria. Available criteria are listed below.")))),(0,i.kt)("h4",{id:"findidentifiedobjectcriteriainput-fields"},"FindIdentifiedObjectCriteriaInput fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"includeClasses: [string]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A list of IdentifiedObject class names that the results will be filtered by."),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"includeNameTypes: [string]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A list of NameType class names that the results will be filtered by."),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inDiagrams: [string]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The MRIDs of diagrams IdentifiedObjects must have an associated DiagramObject in."),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"limit: int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum number of results to return. This is currently limited to a maximum of 100. If set to larger than 100 results will be capped at 100."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"toMatch: string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The value to match to an IdentifiedObject MRID or name."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,i.kt)("h2",{id:"other-graphql-features"},"Other GraphQL features"),(0,i.kt)("h3",{id:"meta-fields"},"Meta fields"),(0,i.kt)("p",null,"GraphQL provides introspective fields that provide information on the GraphQL schema itself. One of these fields is ",(0,i.kt)("inlineCode",{parentName:"p"},"__typename"),", which will return the name of the object type.\nThis is useful when requesting IdentifiedObjects, as it returns the specific CIM object type (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"AcLineSegment"),")."),(0,i.kt)("h3",{id:"inline-fragments"},"Inline fragments"),(0,i.kt)("p",null,"Because all the GraphQL queries return IdentifiedObjects, only IdentifiedObject attributes (mRID, name, description) and meta fields (__typename, type, numDiagramObjects) can be requested and returned by default.\nTo request data from other object types, ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#inline-fragments"},"inline fragments")," can be used.\nInline fragments allow you to query certain fields depending on the type of object returned, using the syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"... on <typename>{fields}"),". It's easiest to understand this by looking at the examples included below."),(0,i.kt)("h2",{id:"example-queries"},"Example queries"),(0,i.kt)("p",null,"Here we are requesting the name and description for three mRIDs, as well as requesting the mRID in the body so we can easily tell which returned object is which.\nWe're also requesting the object type using ",(0,i.kt)("inlineCode",{parentName:"p"},"__typename"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Query:"',title:'"Query:"'},'{\n  getIdentifiedObjects(mRIDs: ["abc123", "def456", "ghi789"]){\n    name\n    description\n    mRID\n    __typename\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Response:"',title:'"Response:"'},'{\n  "data": {\n    "getIdentifiedObjects": [\n      {\n        "name": "TestObject123",\n        "description": "This is a test object"\n        "mRID": "abc123"\n        "__typename": "Feeder"\n      },\n      {\n        "name": "TestObject456",\n        "description": "This is a different test object"\n        "mRID": "def456"\n        "__typename": "AcLineSegment"\n      },\n      {\n        "name": "TestObject789",\n        "description": "And another test object"\n        "mRID": "ghi789"\n        "__typename": "Breaker"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Once we know the object types, we can start to retrieve specific fields depending on the object type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Query:"',title:'"Query:"'},'{\n  getIdentifiedObjects(mRIDs: ["abc123", "def456", "ghi789"]){\n    name\n    mRID\n    __typename\n    # For returned Feeder objects, also request a list of their child equipment objects \n    # that are either Junctions or Disconnectors\n    ... on Feeder {\n      currentEquipment(types: ["Junction", "Disconnector"]){\n        mRID\n        name\n        __typename\n      }\n    }\n    \n    # For returned AcLineSegments, also request the length, the parent feeder(s) mRIDs, \n    # and check if it is underground \n    ... on AcLineSegment{\n      length\n      currentFeeders{\n        mRID\n      }\n      isUnderground\n    }\n    \n    # For returned Breakers, also check whether the breaker is open \n    ... on Breaker{\n      isOpen\n    }\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Response:"',title:'"Response:"'},'{\n  "data": {\n    "getIdentifiedObjects": [\n      {\n        "name": "TestObject123",\n        "mRID": "abc123",\n        "__typename": "Feeder",\n        "currentEquipment": [\n          {\n            "mRID": "junc1",\n            "name": "TestJunction1",\n            "__typename": "Junction"\n          },\n          {\n            "mRID": "disc1",\n            "name": "TestDisconnector1",\n            "__typename": "Disconnector"\n          },\n          {\n            "mRID": "junc2",\n            "name": "TestJunction2",\n            "__typename": "Junction"\n          },\n          {\n            "mRID": "disc2",\n            "name": "TestDisconnector2",\n            "__typename": "Disconnector"\n          },\n          {\n            "mRID": "junc3",\n            "name": "TestJunction3",\n            "__typename": "Junction"\n          }\n        ]\n      },\n      {\n        "name": "TestObject456",\n        "mRID": "def456",\n        "__typename": "AcLineSegment",\n        "length": 4.97348017,\n        "currentFeeders": [\n          {\n            "mRID": "feeder2468"\n          }\n        ],\n        "isUnderground": true\n      },\n      {\n        "name": "TestObject789",\n        "mRID": "ghi789",\n        "__typename": "Breaker",\n        "isOpen": false\n      }\n    ]\n  }\n}\n')))}h.isMDXComponent=!0}}]);