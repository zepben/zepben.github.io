"use strict";(self.webpackChunkenergy_worbench_server_doco=self.webpackChunkenergy_worbench_server_doco||[]).push([[5264],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67972:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"keep-level-spec",title:"Keep Level Specification"},p=void 0,s={unversionedId:"keep-level-spec",id:"version-2.16.0/keep-level-spec",title:"Keep Level Specification",description:"The keep level specification is used to define at which zoom levels identified objects (that can be displayed on a geographic view) will be added to the map vector tiles.",source:"@site/versioned_docs/version-2.16.0/keep-level-spec.md",sourceDirName:".",slug:"/keep-level-spec",permalink:"/evolve/docs/energy-workbench-server/2.16.0/keep-level-spec",draft:!1,tags:[],version:"2.16.0",frontMatter:{id:"keep-level-spec",title:"Keep Level Specification"},sidebar:"sidebar",previous:{title:"Logging",permalink:"/evolve/docs/energy-workbench-server/2.16.0/logging"},next:{title:"Routes",permalink:"/evolve/docs/energy-workbench-server/2.16.0/routes"}},m={},u=[{value:"Keep Level Rule",id:"keep-level-rule",level:2},{value:"Keep Level Rule Filter",id:"keep-level-rule-filter",level:2},{value:"Symbol Filter",id:"symbol-filter",level:3},{value:"Property Filter",id:"property-filter",level:3},{value:"Keep Level Rule Type",id:"keep-level-rule-type",level:2},{value:"Comparator Value",id:"comparator-value",level:2},{value:"Example",id:"example",level:2}],c={toc:u},d="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The keep level specification is used to define at which zoom levels ",(0,l.kt)("a",{parentName:"p",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject"},"identified objects")," (that can be displayed on a geographic view) will be added to the map vector tiles."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The specification is a geo-view configuration item represented in json format that specifies which identified objects to add to the vector tiles at each zoom level based on a specific set of criteria.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Properties:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rules:")," defines a list of rules that determine whether an object will be added to the vector tiles.\nThese rules get evaluated in order for each candidate object and the first rule that matches an object will apply the operation specified by its rule type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultKeepRuleType:")," defines the keep level rule type used for objects that do not match any of the criteria specified in the keep level rules.  ")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "rules": [ <KEEP_LEVEL_RULE> ],\n    "defaultKeepRuleType": "<KEEP_LEVEL_RULE_TYPE>"\n}\n')),(0,l.kt)("h2",{id:"keep-level-rule"},"Keep Level Rule"),(0,l.kt)("p",null,"A keep level rule defines the operation that must be applied to an object of a particular ",(0,l.kt)("em",{parentName:"p"},"class")," under specific ",(0,l.kt)("em",{parentName:"p"},"zoom")," conditions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Properties:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type:")," defines the operation to be applied in case of a successful match."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"class:")," defines the ",(0,l.kt)("strong",{parentName:"li"},"class")," of the targeted identified object. The list of possible classes can be found in the ",(0,l.kt)("strong",{parentName:"li"},"Descendant Classes")," section of the cimbend documentation for the ",(0,l.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject#relationships"},"Identified Object")," class."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"zoom:")," defines the zoom level at which this rule becomes relevant. If a rule doesn't have this property then it will be evaluated at all zoom levels."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"filters:")," defines a list of possible filters that allow for a more fine grained control of the specific objects being targeted e.g. transformers with a specific nominalVoltage.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "rules": [\n        {\n            "type": "<KEEP_LEVEL_RULE_TYPE>",\n            "class": "<IDENTIFIED_OBJECT_CLASS>", // Name for the object class as defined in cimbend\n            "zoom": {\n                "comparator": "<COMPARATOR_VALUE>",\n                "value": <number>\n            },\n            "filters": [ <KEEP_LEVEL_RULE_FILTER> ]\n        }\n    ],\n    "defaultKeepRuleType": "<KEEP_LEVEL_RULE_TYPE>"\n}\n')),(0,l.kt)("h2",{id:"keep-level-rule-filter"},"Keep Level Rule Filter"),(0,l.kt)("p",null,"A keep level rule filter specifies a set of conditions that must all match for a rule to be applied to a candidate object. There are two types of filters: ",(0,l.kt)("strong",{parentName:"p"},"symbol filters")," and ",(0,l.kt)("strong",{parentName:"p"},"property filters"),"."),(0,l.kt)("h3",{id:"symbol-filter"},"Symbol Filter"),(0,l.kt)("p",null,"A filter with the type ",(0,l.kt)("strong",{parentName:"p"},'"SYMBOL"')," checks whether a candidate object has a specific diagram object style."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This is the list of diagram object styles:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NONE"),(0,l.kt)("li",{parentName:"ul"},"DIST_TRANSFORMER"),(0,l.kt)("li",{parentName:"ul"},"ISO_TRANSFORMER"),(0,l.kt)("li",{parentName:"ul"},"REVERSIBLE_REGULATOR"),(0,l.kt)("li",{parentName:"ul"},"NON_REVERSIBLE_REGULATOR"),(0,l.kt)("li",{parentName:"ul"},"ZONE_TRANSFORMER"),(0,l.kt)("li",{parentName:"ul"},"FEEDER_CB"),(0,l.kt)("li",{parentName:"ul"},"CB"),(0,l.kt)("li",{parentName:"ul"},"JUNCTION"),(0,l.kt)("li",{parentName:"ul"},"SWITCH"),(0,l.kt)("li",{parentName:"ul"},"ARC_CHUTE"),(0,l.kt)("li",{parentName:"ul"},"BRIDGE"),(0,l.kt)("li",{parentName:"ul"},"DISCONNECTOR"),(0,l.kt)("li",{parentName:"ul"},"FLICKER_BLADE"),(0,l.kt)("li",{parentName:"ul"},"FUSE"),(0,l.kt)("li",{parentName:"ul"},"GAS_INSULATED"),(0,l.kt)("li",{parentName:"ul"},"LIVE_LINE_CLAMP"),(0,l.kt)("li",{parentName:"ul"},"RECLOSER"),(0,l.kt)("li",{parentName:"ul"},"FAULT_INDICATOR"),(0,l.kt)("li",{parentName:"ul"},"JUMPER"),(0,l.kt)("li",{parentName:"ul"},"ENERGY_SOURCE"),(0,l.kt)("li",{parentName:"ul"},"SHUNT_COMPENSATOR"),(0,l.kt)("li",{parentName:"ul"},"USAGE_POINT"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_UNKNOWN"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_LV"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_6600"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_11000"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_12700"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_22000"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_33000"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_66000"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_132000"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_220000"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_275000"),(0,l.kt)("li",{parentName:"ul"},"CONDUCTOR_500000"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Properties:")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type:"),' should always be "SYMBOL" for a symbol filter.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value:")," specifies the name of the diagram object style to be used for the check.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "SYMBOL",\n    "value": "<DIAGRAM_OBJECT_STYLE>"\n}\n')),(0,l.kt)("h3",{id:"property-filter"},"Property Filter"),(0,l.kt)("p",null,"A filter with the type ",(0,l.kt)("strong",{parentName:"p"},'"PROPERTY"')," tests the value of a property in the candidate object."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Properties:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type:"),' should always be "PROPERTY" for a property filter.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"getter:")," defines the getter method for the property to be tested. The list of possible classes and their properties can be found in the ",(0,l.kt)("strong",{parentName:"li"},"Descendant Classes")," section of the cimbend documentation for the ",(0,l.kt)("a",{parentName:"li",href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject#relationships"},"Identified Object")," class."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"comparator:")," defines the comparator operator to be used in the test."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value:")," defines the value that the property will be compared against.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "PROPERTY",\n    "getter": [ <string> ], // Array that defines the getter method for the property to be used in the comparison\n    "comparator": "<COMPARATOR_VALUE>", // Comparator operator to be used\n    "value": <number | string | boolean> // Value to be compared against\n}\n')),(0,l.kt)("h2",{id:"keep-level-rule-type"},"Keep Level Rule Type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"KEEP")),(0,l.kt)("td",{parentName:"tr",align:null},"The object will be added to the vector tile.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"KEEP_SIMPLIFY")),(0,l.kt)("td",{parentName:"tr",align:null},"The object will be simplified before being added to the vector tile.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"SIMPLIFY")),(0,l.kt)("td",{parentName:"tr",align:null},"The object will be simplified and added to the vector tile only if the simplified geometry results in more than a single point.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"REMOVE")),(0,l.kt)("td",{parentName:"tr",align:null},"The object will not be added to the vector tile.")))),(0,l.kt)("h2",{id:"comparator-value"},"Comparator Value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported Data Types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"=")),(0,l.kt)("td",{parentName:"tr",align:null},"equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"number, string, boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"!=")),(0,l.kt)("td",{parentName:"tr",align:null},"not equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"number, string, boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:null},"greater than equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"<=")),(0,l.kt)("td",{parentName:"tr",align:null},"lesser than equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},">")),(0,l.kt)("td",{parentName:"tr",align:null},"greater than"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"<")),(0,l.kt)("td",{parentName:"tr",align:null},"lesser than"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"=~")),(0,l.kt)("td",{parentName:"tr",align:null},"matches regular expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"!=~")),(0,l.kt)("td",{parentName:"tr",align:null},"does not match regular expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "rules": [\n        // Keep any Disconnector that has a diagram object style of \'DISCONNECTOR\' if the zoom level is less than 19\n        {\n            "type": "KEEP",\n            "class": "Disconnector",\n            "zoom": { "comparator": "<", "value": 19 },\n            "filters": [{ "type": "SYMBOL", "value": "DISCONNECTOR" }]\n        },\n        // Simplify any ConductingEquipment that has a diagram object style of \'REVERSIBLE_REGULATOR\' and a \'baseVoltageValue\' of 12700 if the zoom level is less than 15\n        {\n            "type": "SIMPLIFY",\n            "class": "ConductingEquipment",\n            "zoom": { "comparator": "<", "value": 15 },\n            "filters": [\n                { "type": "SYMBOL", "value": "REVERSIBLE_REGULATOR" },\n                { "type": "PROPERTY", "getter": ["baseVoltageValue"], "comparator": "=", "value": 12700 }\n            ]\n        },\n        // Keep any Fuse that has a name that matches the regular expression "^([0-9]{4,})[ ].*$" regardless of zoom level\n        {\n            "type": "KEEP",\n            "class": "Fuse",\n            "filters": [\n                { "type": "PROPERTY", "getter": ["name"], "comparator": "=~", "value": "^([0-9]{4,})[ ].*$" }\n            ]\n        }\n    ],\n    // If the object did not match any of the rules above then don\'t add it to the vector tiles\n    "defaultKeepRuleType": "REMOVE"\n}\n')))}k.isMDXComponent=!0}}]);