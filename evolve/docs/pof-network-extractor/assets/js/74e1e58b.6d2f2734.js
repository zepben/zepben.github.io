"use strict";(self.webpackChunkpof_network_extractor_doco=self.webpackChunkpof_network_extractor_doco||[]).push([[178],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,N=m["".concat(s,".").concat(k)]||m[k]||f[k]||l;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4926:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"configuring"},s=void 0,p={unversionedId:"configuring",id:"version-2.5.0/configuring",title:"configuring",description:"Configuration for the PoF Network Extractor is specified in a JSON file.",source:"@site/versioned_docs/version-2.5.0/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/evolve/docs/pof-network-extractor/2.5.0/configuring",draft:!1,tags:[],version:"2.5.0",frontMatter:{id:"configuring"},sidebar:"version-2.5.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/pof-network-extractor/2.5.0/"},next:{title:"Running the Application",permalink:"/evolve/docs/pof-network-extractor/2.5.0/run-app"}},d={},m=[{value:"Meter Mapping Config",id:"meter-mapping-config",level:6},{value:"Sample Configuration File",id:"sample-configuration-file",level:5},{value:"PoF Configuration",id:"pof-configuration",level:3},{value:"Transformer Types Config",id:"transformer-types-config",level:6},{value:"Businesses Config",id:"businesses-config",level:6},{value:"Sample Configuration File",id:"sample-configuration-file-1",level:5},{value:"Environment Variables",id:"environment-variables",level:3}],f={toc:m},k="wrapper";function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)(k,(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Configuration for the PoF Network Extractor is specified in a JSON file."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ewbDataPath")),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the ewb data directory."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pofConfigFile")),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the PoF configuration used by this tool."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"meterSourceType")),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the source of meters. One of ",(0,l.kt)("inlineCode",{parentName:"td"},"TCS")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"MAPPING_FILE"),". Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"MAPPING_FILE")),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"meterMappings")),(0,l.kt)("td",{parentName:"tr",align:null},"Object that holds meter mapping related config if meter source is ",(0,l.kt)("inlineCode",{parentName:"td"},"MAPPING_FILE"),". ",(0,l.kt)("br",null),"Refer to [**Meter Mapping"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Config**](#meter-mapping-config) below."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"connectionPointIdentifier")),(0,l.kt)("td",{parentName:"tr",align:null},"Name to use for the connection point identifier. E.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"NMI")," in Australia or ",(0,l.kt)("inlineCode",{parentName:"td"},"ICP")," in New Zealand. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"NMI"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h6",{id:"meter-mapping-config"},"Meter Mapping Config"),(0,l.kt)("p",null,"The PoF extractor can take meter mapping files to provide a mapping of meters and supply points to transformers. Each file is required to have its date in the\nfile name so the appropriate mapping file can be used. All the options in this config object are required if it is included."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The path to the directory containing meter mapping files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"filePattern")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A regex to match meter mapping files. ",(0,l.kt)("br",null),"This needs to have a single group capture that captures the date in the file name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"datePattern")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The pattern of the date captured from the file name.")))),(0,l.kt)("admonition",{title:"If any paths in the configuration are given as relative paths, they will be relative to the working directory of the JVM.",type:"caution"}),(0,l.kt)("p",null,"The following is a sample configuration file"),(0,l.kt)("h5",{id:"sample-configuration-file"},"Sample Configuration File"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ewbDataPath": "/users/release/ewb/data",\n  "pofConfigFile": "/users/release/ewb/conf/pof_config.json",\n  "meterMappings": {\n    "path": "/path/to/directory/with/mapping/files",\n    "filePattern": "NMI_TX_MAPPING_(\\\\d{8}).csv",\n    "datePattern": "yyyyMMdd"\n  }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pof-configuration"},"PoF Configuration"),(0,l.kt)("p",null,"The following describes PowerOn Fusion specific data configuration that allows the PoF Network Extractor to convert components from PoF to EWB network model\nassets."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"regulatorClassesReversible")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for reversible regulators."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"regulatorClassesNonReversible")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for non reversible regulators."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"zoneTransformerClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for zone transformers."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"transformerClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for all other transformers."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feederCbClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for feeder circuit breakers."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cbClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for all other circuit breakers."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fuseClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for fuses."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"isolatorClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for isolaters."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recloserClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for reclosers."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"faultIndicatorClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for fault indicators."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"brokenBridgeClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for broken bridges."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"generatorClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for generators."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"capacitorClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for capacitors."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"hvSupplyPointClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for HV supply points."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"poleClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for poles."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ignoreSources")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs which cannot be converted to sources."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"switchClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for all other switch types."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"siteClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for site components."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feederClasses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of component class IDs for feeder start points."),(0,l.kt)("td",{parentName:"tr",align:null},"[int]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"transformerTypes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object that holds transformer types config. ",(0,l.kt)("br",null),"Refer to ",(0,l.kt)("a",{parentName:"td",href:"#transformer-types-config"},(0,l.kt)("strong",{parentName:"a"},"Transformer Types Config"))," below."),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"businesses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object that holds businesses config. ",(0,l.kt)("br",null),"Refer to ",(0,l.kt)("a",{parentName:"td",href:"#businesses-config"},(0,l.kt)("strong",{parentName:"a"},"Business Config"))," below."),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"worlds")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of world IDs to be included in the extract."),(0,l.kt)("td",{parentName:"tr",align:null},"int[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"equalLatLonCheck")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag to indicate if the latitudes and longitude for a component should be checked to see if they have the exact same value."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undergroundPattern")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Regular expression used to determine if a cable is underground from the component class name. Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"hvugc"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"conductorNaming")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Choose which ",(0,l.kt)("inlineCode",{parentName:"td"},"COMPONENT_HEADER")," field to use as the conductor name (",(0,l.kt)("inlineCode",{parentName:"td"},"COMPONENT_PATHNAME"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"COMPONENT_ALIAS")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"COMPONENT_ID"),"). Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"COMPONENT_PATHNAME"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h6",{id:"transformer-types-config"},"Transformer Types Config"),(0,l.kt)("p",null,"This object is a JSON version of the TRANSFORMER_TYPES table in the PowerOn Fusion database."),(0,l.kt)("p",null,"TODO: document object"),(0,l.kt)("h6",{id:"businesses-config"},"Businesses Config"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name to give the business in the EWB model."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"roots")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of the highest level component IDs in the hierarchy that have network assets for the specified business."),(0,l.kt)("td",{parentName:"tr",align:null},"[string]")))),(0,l.kt)("h5",{id:"sample-configuration-file-1"},"Sample Configuration File"),(0,l.kt)("admonition",{title:"Remember that this sample configuration is a sample. The lists for these options will likely be substantially larger than shown here for a real PoF",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"system.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "regulatorClassesReversible": [\n    732,\n    733\n  ],\n  "regulatorClassesNonReversible": [\n    831,\n    849\n  ],\n  "zoneTransformerClasses": [\n    327\n  ],\n  "transformerClasses": [\n    825,\n    828\n  ],\n  "feederCbClasses": [\n    50,\n    51,\n    52\n  ],\n  "cbClasses": [\n    70,\n    72,\n    321\n  ],\n  "fuseClasses": [\n    316,\n    338\n  ],\n  "isolatorClasses": [\n    305,\n    657\n  ],\n  "recloserClasses": [\n    339,\n    710\n  ],\n  "faultIndicatorClasses": [\n    502,\n    839\n  ],\n  "brokenBridgeClasses": [\n    893,\n    905\n  ],\n  "generatorClasses": [\n    895\n  ],\n  "capacitorClasses": [\n    829\n  ],\n  "hvSupplyPointClasses": [\n    894\n  ],\n  "switchClasses": [\n    36,\n    300\n  ],\n  "siteClasses": [\n    845,\n    898\n  ],\n  "feederClasses": [\n    788\n  ],\n  "transformerTypes": [\n    {\n      "type": "P",\n      "rating_min": 100000,\n      "rating_max": 999999999,\n      "cyclic_rating_factor": 1.5,\n      "power_factor": 0.9\n    },\n    {\n      "type": "K",\n      "rating_min": 100000,\n      "rating_max": 100000,\n      "cyclic_rating_factor": 1.25,\n      "power_factor": 0.9\n    }\n  ],\n  "businesses": [\n    {\n      "name": "Business 1",\n      "roots": [\n        "B000001dbCOMP"\n      ]\n    },\n    {\n      "name": "Business 2",\n      "roots": [\n        "G00003e63COMP",\n        "G00003e64COMP"\n      ]\n    }\n  ],\n  "worlds": [\n    510,\n    700\n  ],\n  "equalLatLonCheck": "true"\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("p",null,"The following system environment variables are used by the tool. The default is applied if the environment variable does not exist."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ENMAC_USER")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The user for the PoF Oracle database."),(0,l.kt)("td",{parentName:"tr",align:null},"enmac")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ENMAC_PASSWORD")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The password for the PoF Oracle database."),(0,l.kt)("td",{parentName:"tr",align:null},"password")))))}N.isMDXComponent=!0}}]);