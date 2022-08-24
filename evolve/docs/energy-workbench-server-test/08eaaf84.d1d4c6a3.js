(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{273:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),m=n,u=O["".concat(b,".").concat(m)]||O[m]||s[m]||l;return a?r.a.createElement(u,c(c({ref:t},o),{},{components:a})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(273)),b={id:"keep-level-spec",title:"Keep Level Specification"},c={unversionedId:"keep-level-spec",id:"keep-level-spec",isDocsHomePage:!1,title:"Keep Level Specification",description:"The keep level specification is used to define at which zoom levels identified objects (that can be displayed on a geographic view) will be added to the map vector tiles.",source:"@site/docs/keep-level-spec.md",slug:"/keep-level-spec",permalink:"/evolve/docs/energy-workbench-server/next/keep-level-spec",version:"current",sidebar:"sidebar",previous:{title:"Logging",permalink:"/evolve/docs/energy-workbench-server/next/logging"},next:{title:"Routes",permalink:"/evolve/docs/energy-workbench-server/next/routes"}},i=[{value:"Keep Level Rule",id:"keep-level-rule",children:[]},{value:"Keep Level Rule Filter",id:"keep-level-rule-filter",children:[{value:"Symbol Filter",id:"symbol-filter",children:[]},{value:"Property Filter",id:"property-filter",children:[]}]},{value:"Keep Level Rule Type",id:"keep-level-rule-type",children:[]},{value:"Comparator Value",id:"comparator-value",children:[]},{value:"Example",id:"example",children:[]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The keep level specification is used to define at which zoom levels ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject"}),"identified objects")," (that can be displayed on a geographic view) will be added to the map vector tiles."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The specification is a geo-view configuration item represented in json format that specifies which identified objects to add to the vector tiles at each zoom level based on a specific set of criteria.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Properties:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"rules:")," defines a list of rules that determine whether an object will be added to the vector tiles.\nThese rules get evaluated in order for each candidate object and the first rule that matches an object will apply the operation specified by its rule type."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"defaultKeepRuleType:")," defines the keep level rule type used for objects that do not match any of the criteria specified in the keep level rules.  ")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "rules": [ <KEEP_LEVEL_RULE> ],\n    "defaultKeepRuleType": "<KEEP_LEVEL_RULE_TYPE>"\n}\n')),Object(l.b)("h2",{id:"keep-level-rule"},"Keep Level Rule"),Object(l.b)("p",null,"A keep level rule defines the operation that must be applied to an object of a particular ",Object(l.b)("em",{parentName:"p"},"class")," under specific ",Object(l.b)("em",{parentName:"p"},"zoom")," conditions."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Properties:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"type:")," defines the operation to be applied in case of a successful match."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"class:")," defines the ",Object(l.b)("strong",{parentName:"li"},"class")," of the targeted identified object. The list of possible classes can be found in the ",Object(l.b)("strong",{parentName:"li"},"Descendant Classes")," section of the cimbend documentation for the ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject#relationships"}),"Identified Object")," class."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"zoom:")," defines the zoom level at which this rule becomes relevant. If a rule doesn't have this property then it will be evaluated at all zoom levels."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"filters:")," defines a list of possible filters that allow for a more fine grained control of the specific objects being targeted e.g. transformers with a specific nominalVoltage.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "rules": [\n        {\n            "type": "<KEEP_LEVEL_RULE_TYPE>",\n            "class": "<IDENTIFIED_OBJECT_CLASS>", // Name for the object class as defined in cimbend\n            "zoom": {\n                "comparator": "<COMPARATOR_VALUE>",\n                "value": <number>\n            },\n            "filters": [ <KEEP_LEVEL_RULE_FILTER> ]\n        }\n    ],\n    "defaultKeepRuleType": "<KEEP_LEVEL_RULE_TYPE>"\n}\n')),Object(l.b)("h2",{id:"keep-level-rule-filter"},"Keep Level Rule Filter"),Object(l.b)("p",null,"A keep level rule filter specifies a set of conditions that must all match for a rule to be applied to a candidate object. There are two types of filters: ",Object(l.b)("strong",{parentName:"p"},"symbol filters")," and ",Object(l.b)("strong",{parentName:"p"},"property filters"),"."),Object(l.b)("h3",{id:"symbol-filter"},"Symbol Filter"),Object(l.b)("p",null,"A filter with the type ",Object(l.b)("strong",{parentName:"p"},'"SYMBOL"')," checks whether a candidate object has a specific diagram object style."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This is the list of diagram object styles:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"NONE"),Object(l.b)("li",{parentName:"ul"},"DIST_TRANSFORMER"),Object(l.b)("li",{parentName:"ul"},"ISO_TRANSFORMER"),Object(l.b)("li",{parentName:"ul"},"REVERSIBLE_REGULATOR"),Object(l.b)("li",{parentName:"ul"},"NON_REVERSIBLE_REGULATOR"),Object(l.b)("li",{parentName:"ul"},"ZONE_TRANSFORMER"),Object(l.b)("li",{parentName:"ul"},"FEEDER_CB"),Object(l.b)("li",{parentName:"ul"},"CB"),Object(l.b)("li",{parentName:"ul"},"JUNCTION"),Object(l.b)("li",{parentName:"ul"},"SWITCH"),Object(l.b)("li",{parentName:"ul"},"ARC_CHUTE"),Object(l.b)("li",{parentName:"ul"},"BRIDGE"),Object(l.b)("li",{parentName:"ul"},"DISCONNECTOR"),Object(l.b)("li",{parentName:"ul"},"FLICKER_BLADE"),Object(l.b)("li",{parentName:"ul"},"FUSE"),Object(l.b)("li",{parentName:"ul"},"GAS_INSULATED"),Object(l.b)("li",{parentName:"ul"},"LIVE_LINE_CLAMP"),Object(l.b)("li",{parentName:"ul"},"RECLOSER"),Object(l.b)("li",{parentName:"ul"},"FAULT_INDICATOR"),Object(l.b)("li",{parentName:"ul"},"JUMPER"),Object(l.b)("li",{parentName:"ul"},"ENERGY_SOURCE"),Object(l.b)("li",{parentName:"ul"},"SHUNT_COMPENSATOR"),Object(l.b)("li",{parentName:"ul"},"USAGE_POINT"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_UNKNOWN"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_LV"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_6600"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_11000"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_12700"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_22000"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_33000"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_66000"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_132000"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_220000"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_275000"),Object(l.b)("li",{parentName:"ul"},"CONDUCTOR_500000"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Properties:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"type:"),' should always be "SYMBOL" for a symbol filter.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"value:")," specifies the name of the diagram object style to be used for the check.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "type": "SYMBOL",\n    "value": "<DIAGRAM_OBJECT_STYLE>"\n}\n')),Object(l.b)("h3",{id:"property-filter"},"Property Filter"),Object(l.b)("p",null,"A filter with the type ",Object(l.b)("strong",{parentName:"p"},'"PROPERTY"')," tests the value of a property in the candidate object."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Properties:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"type:"),' should always be "PROPERTY" for a property filter.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"getter:")," defines the getter method for the property to be tested. The list of possible classes and their properties can be found in the ",Object(l.b)("strong",{parentName:"li"},"Descendant Classes")," section of the cimbend documentation for the ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://zepben.github.io/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject#relationships"}),"Identified Object")," class."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"comparator:")," defines the comparator operator to be used in the test."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"value:")," defines the value that the property will be compared against.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "type": "PROPERTY",\n    "getter": [ <string> ], // Array that defines the getter method for the property to be used in the comparison\n    "comparator": "<COMPARATOR_VALUE>", // Comparator operator to be used\n    "value": <number | string | boolean> // Value to be compared against\n}\n')),Object(l.b)("h2",{id:"keep-level-rule-type"},"Keep Level Rule Type"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"VALUE"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"KEEP")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The object will be added to the vector tile.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"KEEP_SIMPLIFY")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The object will be simplified before being added to the vector tile.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"SIMPLIFY")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The object will be simplified and added to the vector tile only if the simplified geometry results in more than a single point.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"REMOVE")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The object will not be added to the vector tile.")))),Object(l.b)("h2",{id:"comparator-value"},"Comparator Value"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"VALUE"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported Data Types"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"=")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"equal to"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number, string, boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"!=")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"not equal to"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number, string, boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},">=")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"greater than equal to"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"<=")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lesser than equal to"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},">")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"greater than"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"<")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lesser than"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"=~")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"matches regular expression"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"!=~")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"does not match regular expression"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "rules": [\n        // Keep any Disconnector that has a diagram object style of \'DISCONNECTOR\' if the zoom level is less than 19\n        {\n            "type": "KEEP",\n            "class": "Disconnector",\n            "zoom": { "comparator": "<", "value": 19 },\n            "filters": [{ "type": "SYMBOL", "value": "DISCONNECTOR" }]\n        },\n        // Simplify any ConductingEquipment that has a diagram object style of \'REVERSIBLE_REGULATOR\' and a \'baseVoltageValue\' of 12700 if the zoom level is less than 15\n        {\n            "type": "SIMPLIFY",\n            "class": "ConductingEquipment",\n            "zoom": { "comparator": "<", "value": 15 },\n            "filters": [\n                { "type": "SYMBOL", "value": "REVERSIBLE_REGULATOR" },\n                { "type": "PROPERTY", "getter": ["baseVoltageValue"], "comparator": "=", "value": 12700 }\n            ]\n        },\n        // Keep any Fuse that has a name that matches the regular expression "^([0-9]{4,})[ ].*$" regardless of zoom level\n        {\n            "type": "KEEP",\n            "class": "Fuse",\n            "filters": [\n                { "type": "PROPERTY", "getter": ["name"], "comparator": "=~", "value": "^([0-9]{4,})[ ].*$" }\n            ]\n        }\n    ],\n    // If the object did not match any of the rules above then don\'t add it to the vector tiles\n    "defaultKeepRuleType": "REMOVE"\n}\n')))}p.isMDXComponent=!0}}]);