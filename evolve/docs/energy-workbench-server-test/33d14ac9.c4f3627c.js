(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(315)),c={id:"graphql",title:"GraphQL API"},b={unversionedId:"graphql",id:"version-2.9.0/graphql",isDocsHomePage:!1,title:"GraphQL API",description:"The Energy Workbench Server also offers limited support for GraphQL queries.",source:"@site/versioned_docs/version-2.9.0/graphql.md",slug:"/graphql",permalink:"/evolve/docs/energy-workbench-server/2.9.0/graphql",version:"2.9.0",sidebar:"version-2.9.0/sidebar",previous:{title:"Routes",permalink:"/evolve/docs/energy-workbench-server/2.9.0/routes"},next:{title:"API",permalink:"/evolve/docs/energy-workbench-server/2.9.0/api"}},l=[{value:"Getting started with GraphQL",id:"getting-started-with-graphql",children:[{value:"GraphQL Queries",id:"graphql-queries",children:[]}]},{value:"Other GraphQL features",id:"other-graphql-features",children:[{value:"Meta fields",id:"meta-fields",children:[]},{value:"Inline fragments",id:"inline-fragments",children:[]}]},{value:"Example queries",id:"example-queries",children:[]}],o={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Energy Workbench Server also offers limited support for GraphQL queries.\nThis documentation only provides a basic overview - more information on GraphQL can be found at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/"}),"https://graphql.org/learn/"),"."),Object(i.b)("h2",{id:"getting-started-with-graphql"},"Getting started with GraphQL"),Object(i.b)("p",null,"The Energy Workbench Server GraphQL endpoint provides its own documentation of the queries and fields available in its schema.\nSome API development tools, such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://insomnia.rest/download"}),"Insomnia"),", allow you to view this schema as you build your queries.\nUsing one of these tools is strongly advised to allow full use of the GraphQL functionality, as this page only covers the basics."),Object(i.b)("p",null,"All GraphQL queries use the same endpoint:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Path"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"POST"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"/ewb/api/graphql"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The endpoint for all GraphQL queries.")))),Object(i.b)("p",null,"This endpoint is also composed around the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve"}),"Evolve CIM Profile"),". As such, the queries below will return objects from this profile."),Object(i.b)("h3",{id:"graphql-queries"},"GraphQL Queries"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Query"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"getIdentifiedObject(mRID: string)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Request an ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject")," by mRID.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"getIdentifiedObjects(mRIDs: [string])")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Request many ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObjects")," by their mRID. The maximum number that can be requested per query is 100. If the list contains more than this the response will be truncated to the first 100 MRIDs that are found. If a requested MRID cannot be found it will be ignored and will not cause an error.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"findIdentifiedObjects(criteria: [FindIdentifiedObjectCriteriaInput])")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Find all ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObjects")," that match the provided criteria. Available criteria are listed below.")))),Object(i.b)("h4",{id:"findidentifiedobjectcriteriainput-fields"},"FindIdentifiedObjectCriteriaInput fields"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Required?"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"includeClasses: [string]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A list of IdentifiedObject class names that the results will be filtered by."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"includeNameTypes: [string]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A list of NameType class names that the results will be filtered by."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"inDiagrams: [string]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The MRIDs of diagrams IdentifiedObjects must have an associated DiagramObject in."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"limit: int")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The maximum number of results to return. This is currently limited to a maximum of 100. If set to larger than 100 results will be capped at 100."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"toMatch: string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The value to match to an IdentifiedObject MRID or name."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Yes")))),Object(i.b)("h2",{id:"other-graphql-features"},"Other GraphQL features"),Object(i.b)("h3",{id:"meta-fields"},"Meta fields"),Object(i.b)("p",null,"GraphQL provides introspective fields that provide information on the GraphQL schema itself. One of these fields is ",Object(i.b)("inlineCode",{parentName:"p"},"__typename"),", which will return the name of the object type.\nThis is useful when requesting IdentifiedObjects, as it returns the specific CIM object type (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"AcLineSegment"),")."),Object(i.b)("h3",{id:"inline-fragments"},"Inline fragments"),Object(i.b)("p",null,"Because all the GraphQL queries return IdentifiedObjects, only IdentifiedObject attributes (mRID, name, description) and meta fields (__typename, type, numDiagramObjects) can be requested and returned by default.\nTo request data from other object types, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/#inline-fragments"}),"inline fragments")," can be used.\nInline fragments allow you to query certain fields depending on the type of object returned, using the syntax ",Object(i.b)("inlineCode",{parentName:"p"},"... on <typename>{fields}"),". It's easiest to understand this by looking at the examples included below."),Object(i.b)("h2",{id:"example-queries"},"Example queries"),Object(i.b)("p",null,"Here we are requesting the name and description for three mRIDs, as well as requesting the mRID in the body so we can easily tell which returned object is which.\nWe're also requesting the object type using ",Object(i.b)("inlineCode",{parentName:"p"},"__typename"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:'title="Query:"',title:'"Query:"'}),'{\n  getIdentifiedObjects(mRIDs: ["abc123", "def456", "ghi789"]){\n    name\n    description\n    mRID\n    __typename\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:'title="Response:"',title:'"Response:"'}),'{\n  "data": {\n    "getIdentifiedObjects": [\n      {\n        "name": "TestObject123",\n        "description": "This is a test object"\n        "mRID": "abc123"\n        "__typename": "Feeder"\n      },\n      {\n        "name": "TestObject456",\n        "description": "This is a different test object"\n        "mRID": "def456"\n        "__typename": "AcLineSegment"\n      },\n      {\n        "name": "TestObject789",\n        "description": "And another test object"\n        "mRID": "ghi789"\n        "__typename": "Breaker"\n      }\n    ]\n  }\n}\n')),Object(i.b)("p",null,"Once we know the object types, we can start to retrieve specific fields depending on the object type."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:'title="Query:"',title:'"Query:"'}),'{\n  getIdentifiedObjects(mRIDs: ["abc123", "def456", "ghi789"]){\n    name\n    mRID\n    __typename\n    # For returned Feeder objects, also request a list of their child equipment objects \n    # that are either Junctions or Disconnectors\n    ... on Feeder {\n      currentEquipment(types: ["Junction", "Disconnector"]){\n        mRID\n        name\n        __typename\n      }\n    }\n    \n    # For returned AcLineSegments, also request the length, the parent feeder(s) mRIDs, \n    # and check if it is underground \n    ... on AcLineSegment{\n      length\n      currentFeeders{\n        mRID\n      }\n      isUnderground\n    }\n    \n    # For returned Breakers, also check whether the breaker is open \n    ... on Breaker{\n      isOpen\n    }\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:'title="Response:"',title:'"Response:"'}),'{\n  "data": {\n    "getIdentifiedObjects": [\n      {\n        "name": "TestObject123",\n        "mRID": "abc123",\n        "__typename": "Feeder",\n        "currentEquipment": [\n          {\n            "mRID": "junc1",\n            "name": "TestJunction1",\n            "__typename": "Junction"\n          },\n          {\n            "mRID": "disc1",\n            "name": "TestDisconnector1",\n            "__typename": "Disconnector"\n          },\n          {\n            "mRID": "junc2",\n            "name": "TestJunction2",\n            "__typename": "Junction"\n          },\n          {\n            "mRID": "disc2",\n            "name": "TestDisconnector2",\n            "__typename": "Disconnector"\n          },\n          {\n            "mRID": "junc3",\n            "name": "TestJunction3",\n            "__typename": "Junction"\n          }\n        ]\n      },\n      {\n        "name": "TestObject456",\n        "mRID": "def456",\n        "__typename": "AcLineSegment",\n        "length": 4.97348017,\n        "currentFeeders": [\n          {\n            "mRID": "feeder2468"\n          }\n        ],\n        "isUnderground": true\n      },\n      {\n        "name": "TestObject789",\n        "mRID": "ghi789",\n        "__typename": "Breaker",\n        "isOpen": false\n      }\n    ]\n  }\n}\n')))}s.isMDXComponent=!0},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(u,b(b({ref:t},o),{},{components:n})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var o=2;o<i;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);