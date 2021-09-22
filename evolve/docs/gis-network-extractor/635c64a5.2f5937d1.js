(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||l;return t?r.a.createElement(m,s({ref:n},c,{components:t})):r.a.createElement(m,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=b;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),l=(t(0),t(107)),i={id:"input-files",title:"Input Files"},s={unversionedId:"input-files",id:"version-2.12.0/input-files",isDocsHomePage:!1,title:"Input Files",description:"Required Input Files",source:"@site/versioned_docs/version-2.12.0/input-files.md",slug:"/input-files",permalink:"/evolve/docs/gis-network-extractor/2.12.0/input-files",version:"2.12.0",sidebar:"version-2.12.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/gis-network-extractor/2.12.0/"},next:{title:"Running the Application",permalink:"/evolve/docs/gis-network-extractor/2.12.0/run-app"}},o=[],c={toc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)("h5",{id:"required-input-files"},"Required Input Files"),Object(l.a)("p",null,"The following files are required for the GIS Network Extractor to run:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"File(s)"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Data type"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default location"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(a.a)({parentName:"td"},{href:"#processor-config-file"}),"Processor Config")),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./processor-config.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(a.a)({parentName:"td"},{href:"#cable-types-file"}),"Cable Types")),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./cable-types.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(a.a)({parentName:"td"},{href:"#network-hierarchy-file"}),"Network Hierarchy")),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./network-hierarchy.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(a.a)({parentName:"td"},{href:"#nodes-config-file"}),"Nodes Config")),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./nodes-config.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Poles"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./poles.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"GIS Network files"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single or multiple .json/.geojson files"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./gis")))),Object(l.a)("h5",{id:"optional-files"},"Optional Files"),Object(l.a)("p",null,"The following files may be provided as input for the GIS Network Extractor, however they are not required:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"File(s)"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Data type"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default location"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Meter Mapping"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single or multiple.csv files"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./meter_mappings")))),Object(l.a)("br",null),Object(l.a)("h5",{id:"meter-mapping-file"},"Meter Mapping File"),Object(l.a)("h6",{id:"cppal"},"CPPAL"),Object(l.a)("p",null,"The GIS Network Extractor takes meter mapping files to provide a mapping of meters and supply points to transformers. These files use CSV format and contain the\nfollowing columns: ",Object(l.a)("strong",{parentName:"p"},"company, nmi,meter_id, supply_point_id, meter_no, transformer_id, transformer_desc, feeder, service_addr, cust_class, cust_tariff"),". Each\nfile is required to have its date in the file name so the appropriate mapping file can be used."),Object(l.a)("h6",{id:"sample-content"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-csv"}),'company,nmi,meter_id,supply_point_id,meter_no,transformer_id,transformer_desc,feeder,service_addr,cust_class,cust_tariff\n"ACME","FOOH1234567",123456789,11929433,"1234",,,"LP001","140 THISSON STREET,SPRINGFIELD,SPF,12345A","C","T1"\n"ACME","FOOH1234567",123456789,11929433,"1234",,,"LP002","140 OTHERSON STREET,SPRINGFIELD,SPF,12345A","R","T1"\n"ACME","FOOH1234567",123456789,11929533,"1234",,,"LP003","LEVEL44,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T2"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP004","WEST TOWER,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T1"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP006","WEST TOWER,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","C","T1"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP007","TENANCY2,OPP 76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T3"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP008","TENANCY1,OPP 76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","R","T3"\n')),Object(l.a)("h6",{id:"ee"},"EE"),Object(l.a)("p",null,"The GIS Network Extractor takes transformer-premise-nmi mapping files to provide a mapping of meters and premises to transformers. These files use CSV format and contain the\nfollowing columns: ",Object(l.a)("strong",{parentName:"p"},"nmi,premnum,peace_substation,peace_zonesub,sad_feeder,sad_substation,sad_zonesub,dlf,dlf_class"),".\nEach file is required to have its date in the file name so the appropriate mapping file can be used."),Object(l.a)("h6",{id:"sample-content-1"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-csv"}),"nmi,premnum,peace_substation,peace_zonesub,sad_feeder,sad_substation,sad_zonesub,dlf,dlf_class\n4123456781,1234561,PTX1,PZS1,SF1,STX1,ZS1,DLF1,DLFC1\n4123456782,1234562,PTX2,ZS2,SF2,STX2,ZS2,DLF2,DLFC2\n4123456783,1234563,PTX3,ZS3,SF3,STX3,ZS3,DLF3,DLFC3\n")),Object(l.a)("h5",{id:"processor-config-file"},"Processor Config File"),Object(l.a)("p",null,"The processor configuration allows specifying whether some of the processing steps will be executed, as well as allows filtering\nof what data will be ingested and saved to the resulting database. If a config file is not specified or present, defaults will be as per below."),Object(l.a)("h6",{id:"structure"},"Structure:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n  # Whether meter data should be processed (if true a meter mappings file must be provided)\n  # Default: true\n  "processMeters": boolean,\n  \n  # Whether the Sub-transmission network should be ingested (must be in a file name like SUB_TRANS_NETWORK.*.json\n  # Default: true\n  "includeSubtrans": boolean,\n  \n  # HV filters (see below). \n  # Default: null\n  "hv": null | {  # Exactly one of the following fields must be set\n        "include": ["<feeder_name_1>", "<feeder_name_2>", ...]\n        "exclude": ["<feeder_name_1>", "<feeder_name_2>", ...]\n  },\n  \n  # Whether LV should be saved to the database. \n  # Default: true\n  "includeLV": boolean\n  \n}\n')),Object(l.a)("p",null,"####### Filters and includeLV"),Object(l.a)("p",null,"Filters allow specifying which feeders get processed and stored in the result, however there are file name requirements that must be met for filters to work\nas intended.\nFor the most efficient handling of data, separate files should exist for HV and LV network, and they must be named accordingly in the form below:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),"HV Files: <feeder_name>_mv.[geo]json\nLV Files: <feeder_name>_lv.[geo]json\n")),Object(l.a)("p",null,Object(l.a)("inlineCode",{parentName:"p"},"includeLV: false")," will only work efficiently if LV files are named in this form, as they will be excluded from the ingest process."),Object(l.a)("p",null,"You can filter only at the HV level, and you can specify only one of the include/exclude filters.\nFor HV filters the filter is based on the feeder name, and the feeder name must be at the start of the filename."),Object(l.a)("p",null,"An include filter will include ",Object(l.a)("em",{parentName:"p"},"only")," feeders with filenames that ",Object(l.a)("em",{parentName:"p"},"start with")," any of the given strings, and conversely an exclude filter will exclude any feeders\nwith filenames that ",Object(l.a)("em",{parentName:"p"},"start with")," any of the given strings in the same way. "),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Note the strings are not pattern matches and no regex is supported.")),Object(l.a)("h6",{id:"sample-content-2"},"Sample content:"),Object(l.a)("p",null,"Include 2 HV feeders and their LV but without meter processing or subtrans network."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "processMeters": false,\n\n    "includeSubtrans": false,\n\n    "hv": { \n        "include": ["FNA001", "FNA002"]\n    },\n\n    "includeLV": true\n}\n')),Object(l.a)("p",null,"Include 2 HV feeders, plus sub-trans with meter processing, but no LV. "),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "hv": { \n        "include": ["FNA001", "FNA002"]\n    },\n\n    "includeLV": false\n}\n')),Object(l.a)("p",null,"Two HV feeders and their LV, plus sub-trans with meter processing."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "hv": { \n        "include": ["FNA001", "FNA002"]\n    }\n}\n')),Object(l.a)("h5",{id:"cable-types-file"},"Cable Types File"),Object(l.a)("p",null,"The GIS Network Extractor derives cable type information from a json file structured as follows:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "cableTypes": [{\n            "id": string,\n            "resistance": double,\n            "reactance": double,\n            "zeroSeqResistance": double,\n            "zeroSeqReactance": double,\n            "nominalVoltage": double,\n            "rating": int,\n            "maxFaultCurrent": double,\n            "normalRating": double,\n            "springDay": double,\n            "springNight": double,\n            "summerDay": double,\n            "summerNight": double,\n            "autumnDay": double,\n            "autumnNight": double,\n            "winterDay": double,\n            "winterNight": double,\n            "neutralRating": double\n        }\n    ]\n}\n')),Object(l.a)("p",null,"If you have a running copy of the ",Object(l.a)("inlineCode",{parentName:"p"},"Energy Workbench Server")," you can download the ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"http://ewbserver/ewb/network/api/v1/cable-types"}),"existing cable types"),"."),Object(l.a)("h6",{id:"sample-content-3"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "cableTypes": [\n    {\n      "id": "Cu_0.1i_SWAS_SD_11_6",\n      "resistance": 0.342,\n      "reactance": 0.115,\n      "zeroSeqResistance": 0.795,\n      "zeroSeqReactance": 0.066,\n      "nominalVoltage": 11,\n      "rating": 215,\n      "maxFaultCurrent": 10.1,\n      "normalRating": 1,\n      "springDay": 1,\n      "springNight": 1,\n      "summerDay": 1,\n      "summerNight": 1,\n      "autumnDay": 1,\n      "autumnNight": 1,\n      "winterDay": 1.14,\n      "winterNight": 1.14,\n      "neutralRating": 215\n    },\n    {\n      "id": "Cu_0.25i_pswsb_SD_6.6_3",\n      "resistance": 0.133,\n      "reactance": 0.074,\n      "zeroSeqResistance": 0.95,\n      "zeroSeqReactance": 0.541,\n      "nominalVoltage": 6.6,\n      "rating": 345,\n      "maxFaultCurrent": 10.1,\n      "normalRating": 1,\n      "springDay": 1,\n      "springNight": 1,\n      "summerDay": 1,\n      "summerNight": 1,\n      "autumnDay": 1,\n      "autumnNight": 1,\n      "winterDay": 1.117,\n      "winterNight": 1.117,\n      "neutralRating": 345\n    }\n  ]\n}\n')),Object(l.a)("h5",{id:"network-hierarchy-file"},"Network Hierarchy File"),Object(l.a)("p",null,"The GIS Network Extractor derives network hierarchy information from a json file structured as follows:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "businesses": [{\n        "id": string,\n        "name": string,\n        "regions": [{\n            "id": string,\n            "name": string,\n            "zones": [{\n                "id": string,\n                "name": string,\n                "feeders": [{\n                    "id": string,\n                    "name": string\n                }]\n            }]\n        }]\n    }]\n}\n')),Object(l.a)("p",null,"If you have a running copy of the ",Object(l.a)("inlineCode",{parentName:"p"},"Energy Workbench Server")," you can download\nthe ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"http://ewbserver/ewb/network/api/v1/hierarchy?filter=businesses"}),"existing network hierarchy"),"."),Object(l.a)("h6",{id:"sample-content-4"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "businesses": [\n    {\n      "id": "business1",\n      "name": "BUSINESS1",\n      "regions": [\n        {\n          "id": "region1",\n          "name": "REGION1",\n          "zones": [\n            {\n              "id": "zone1",\n              "name": "ZONE1",\n              "feeders": [\n                {\n                  "id": "feeder1",\n                  "name": "FEEDER1"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(l.a)("h5",{id:"nodes-config-file"},"Nodes Config File"),Object(l.a)("p",null,"The GIS Network Extractor derives node configuration information from a json file structured as follows:"),Object(l.a)("h6",{id:"structure-1"},"Structure:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mappings": [\n    {\n      "gisClass": "<gis-node-class>",\n      "cimClass": "<conducting-equipment-class>",\n      "style": "<diagram-object-style>"\n    },\n    ...\n  ],\n  "switchStyles": [\n    {\n      "value": "<attribute-value>",\n      "style": "<diagram-object-style>"\n    },\n    ...\n  ]\n}\n')),Object(l.a)("h6",{id:"sample-content-5"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mappings": [\n    {\n      "gisClass": "acr",\n      "cimClass": "Recloser",\n      "style": "RECLOSER"\n    },\n    {\n      "gisClass": "hvSwitch",\n      "cimClass": "Disconnector",\n      "style": "SWITCH"\n    }\n  ],\n  "switchStyles": [\n    {\n      "value": "bridge",\n      "style": "BRIDGE"\n    },\n    {\n      "value": "air-break",\n      "style": "SWITCH"\n    },\n    {\n      "value": "live line clamp",\n      "style": "LIVE_LINE_CLAMP"\n    }\n  ]\n}\n')))}p.isMDXComponent=!0}}]);