(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{122:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||l;return t?r.a.createElement(f,i({ref:n},c,{components:t})):r.a.createElement(f,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),l=(t(0),t(122)),o={id:"input-files",title:"Input Files"},i={unversionedId:"input-files",id:"version-2.14.0/input-files",isDocsHomePage:!1,title:"Input Files",description:"Required Input Files",source:"@site/versioned_docs/version-2.14.0/input-files.md",slug:"/input-files",permalink:"/evolve/docs/gis-network-extractor/2.14.0/input-files",version:"2.14.0",sidebar:"version-2.14.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/gis-network-extractor/2.14.0/"},next:{title:"Running the Application",permalink:"/evolve/docs/gis-network-extractor/2.14.0/run-app"}},s=[],c={toc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)("h5",{id:"required-input-files"},"Required Input Files"),Object(l.a)("p",null,"The following files are required for the GIS Network Extractor to run:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"File(s)"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Data type"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default location"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(a.a)({parentName:"td"},{href:"#processor-config-file"}),"Processor Config")),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./processor-config.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(a.a)({parentName:"td"},{href:"#cable-types-file"}),"Cable Types")),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./cable-types.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(a.a)({parentName:"td"},{href:"#network-hierarchy-file"}),"Network Hierarchy")),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./network-hierarchy.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(a.a)({parentName:"td"},{href:"#nodes-config-file"}),"Nodes Config")),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./nodes-config.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Poles"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./poles.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"GIS Network files"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single or multiple .json/.geojson files"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./gis")))),Object(l.a)("h5",{id:"optional-files"},"Optional Files"),Object(l.a)("p",null,"The following files may be provided as input for the GIS Network Extractor, however they are not required:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"File(s)"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Data type"),Object(l.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default location"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Meter Mapping"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single or multiple.csv files"),Object(l.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./meter_mappings")))),Object(l.a)("br",null),Object(l.a)("h5",{id:"meter-mapping-file"},"Meter Mapping File"),Object(l.a)("h6",{id:"cppal"},"CPPAL"),Object(l.a)("p",null,"The GIS Network Extractor takes meter mapping files to provide a mapping of meters and supply points to transformers. These files use CSV format and contain the\nfollowing columns: ",Object(l.a)("strong",{parentName:"p"},"company, nmi,meter_id, supply_point_id, meter_no, transformer_id, transformer_desc, feeder, service_addr, cust_class, cust_tariff"),". Each\nfile is required to have its date in the file name so the appropriate mapping file can be used."),Object(l.a)("h6",{id:"sample-content"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-csv"}),'company,nmi,meter_id,supply_point_id,meter_no,transformer_id,transformer_desc,feeder,service_addr,cust_class,cust_tariff\n"ACME","FOOH1234567",123456789,11929433,"1234",,,"LP001","140 THISSON STREET,SPRINGFIELD,SPF,12345A","C","T1"\n"ACME","FOOH1234567",123456789,11929433,"1234",,,"LP002","140 OTHERSON STREET,SPRINGFIELD,SPF,12345A","R","T1"\n"ACME","FOOH1234567",123456789,11929533,"1234",,,"LP003","LEVEL44,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T2"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP004","WEST TOWER,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T1"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP006","WEST TOWER,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","C","T1"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP007","TENANCY2,OPP 76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T3"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP008","TENANCY1,OPP 76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","R","T3"\n')),Object(l.a)("h6",{id:"ee"},"EE"),Object(l.a)("p",null,"The GIS Network Extractor takes transformer-premise-nmi mapping files to provide a mapping of meters and premises to transformers. These files use CSV format and contain the\nfollowing columns: ",Object(l.a)("strong",{parentName:"p"},"nmi,premnum,peace_substation,peace_zonesub,sad_feeder,sad_substation,sad_zonesub,dlf,dlf_class"),".\nEach file is required to have its date in the file name so the appropriate mapping file can be used."),Object(l.a)("h6",{id:"sample-content-1"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-csv"}),"nmi,premnum,peace_substation,peace_zonesub,sad_feeder,sad_substation,sad_zonesub,dlf,dlf_class\n4123456781,1234561,PTX1,PZS1,SF1,STX1,ZS1,DLF1,DLFC1\n4123456782,1234562,PTX2,ZS2,SF2,STX2,ZS2,DLF2,DLFC2\n4123456783,1234563,PTX3,ZS3,SF3,STX3,ZS3,DLF3,DLFC3\n")),Object(l.a)("h5",{id:"processor-config-file"},"Processor Config File"),Object(l.a)("p",null,"The processor configuration allows specifying whether some of the processing steps will be executed, as well as allows filtering\nof what data will be ingested and saved to the resulting database. If a config file is not specified or present, defaults will be as per below."),Object(l.a)("h6",{id:"structure"},"Structure:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n  # Whether meter data should be processed (if true a meter mappings file must be provided)\n  # Default: true\n  "processMeters": boolean,\n  \n  # Whether to create meters and consumers from the meter mappings file for premises that don\'t have a corresponding transformer.\n  # Should only be used for limited scope network processing, otherwise it will suppress warnings about meter data quality. \n  # See processor configuration help for details.\n  # Default: true\n  "includeLonelyMeters": boolean,\n  \n  # Whether the Sub-transmission network should be ingested (must be in a file name like SUB_TRANS_NETWORK.*.json\n  # Default: true\n  "includeSubtrans": boolean,\n  \n  # HV filters (see below). \n  # Default: null\n  "hv": null | {  # Exactly one of the following fields must be set\n        "include": ["<feeder_name_1>", "<feeder_name_2>", ...]\n        "exclude": ["<feeder_name_1>", "<feeder_name_2>", ...]\n  },\n  \n  # Whether LV should be saved to the database. \n  # Default: true\n  "includeLV": boolean,\n  \n  # Whether default values will be assigned for transformers and lines.\n  # Default: true\n  "assignDefaults": boolean,\n  \n  # Default WireInfo to use for lines missing one (see below)\n  # Default: null\n  "defaultWireInfo": null | <WireInfo spec>,\n  \n  # Default PerLengthSequenceImpedance to use for lines missing one (see below)\n  # Default: null\n  "defaultPerLengthSequenceImpedance": null | <PerLengthSequenceImpedance spec>,\n  \n  # Default PowerTransformerInfo to use for power transformers missing one (see below)\n  # Default: null\n  "defaultPowerTransformerInfo": null | <PowerTransformerInfo spec>,\n  \n  # Whether to run use case validation after generating output database\n  # Default: true\n  "validation": boolean\n  \n}\n')),Object(l.a)("h6",{id:"filters-and-includelv"},"Filters and includeLV"),Object(l.a)("p",null,"Filters allow specifying which feeders get processed and stored in the result, however there are file name requirements that must be met for filters to work\nas intended.\nFor the most efficient handling of data, separate files should exist for HV and LV network, and they must be named accordingly in the form below:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),"HV Files: <feeder_name>_mv.[geo]json\nLV Files: <feeder_name>_lv.[geo]json\n")),Object(l.a)("p",null,Object(l.a)("inlineCode",{parentName:"p"},"includeLV: false")," will only work efficiently if LV files are named in this form, as they will be excluded from the ingest process."),Object(l.a)("p",null,"You can filter only at the HV level, and you can specify only one of the include/exclude filters.\nFor HV filters the filter is based on the feeder name, and the feeder name must be at the start of the filename."),Object(l.a)("p",null,"An include filter will include ",Object(l.a)("em",{parentName:"p"},"only")," feeders with filenames that ",Object(l.a)("em",{parentName:"p"},"start with")," any of the given strings, and conversely an exclude filter will exclude any feeders\nwith filenames that ",Object(l.a)("em",{parentName:"p"},"start with")," any of the given strings in the same way. "),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Note the strings are not pattern matches and no regex is supported.")),Object(l.a)("h6",{id:"sample-content-2"},"Sample content:"),Object(l.a)("p",null,"Include 2 HV feeders and their LV but without meter processing or subtrans network."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "processMeters": false,\n\n    "includeSubtrans": false,\n\n    "hv": { \n        "include": ["FNA001", "FNA002"]\n    },\n\n    "includeLV": true\n}\n')),Object(l.a)("p",null,"Include 2 HV feeders, plus sub-trans with meter processing, but no LV. "),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "hv": { \n        "include": ["FNA001", "FNA002"]\n    },\n\n    "includeLV": false\n}\n')),Object(l.a)("p",null,"Two HV feeders and their LV, plus sub-trans with meter processing."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "hv": { \n        "include": ["FNA001", "FNA002"]\n    }\n}\n')),Object(l.a)("h6",{id:"default-wire-info"},"Default Wire Info"),Object(l.a)("p",null,"A default ",Object(l.a)("inlineCode",{parentName:"p"},"WireInfo")," may be specified in the processor config as follows:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "defaultWireInfo": {\n        \n        # Set to true to specify an overhead line, and false for an underground cable\n        "isOverhead": boolean,\n        \n        # The rated current of the wire.\n        # Default: null\n        "ratedCurrent": null | int,\n        \n        # The material of the wire. This should be one of WireMaterialKind, e.g. "copperCadmium".\n        # Default: "UNKNOWN"\n        "material": string\n    }\n}\n')),Object(l.a)("p",null,"Sample:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "defaultWireInfo": {\n        "isOverhead": true,\n        "ratedCurrent": 3,\n        "material": "copperCadmium"\n    }\n}\n')),Object(l.a)("h6",{id:"default-per-length-sequence-impedance"},"Default Per-Length Sequence Impedance"),Object(l.a)("p",null,"A default ",Object(l.a)("inlineCode",{parentName:"p"},"PerLengthSequenceImpedance")," may be specified in the processor config as follows (see CIM documentation for field definitions):"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "defaultPerLengthSequenceImpedance": {\n        "r": null | double,\n        "x": null | double,\n        "bch": null | double,\n        "gch": null | double,\n        "r0": null | double,\n        "x0": null | double,\n        "b0ch": null | double,\n        "g0ch": null | double\n    }\n}\n')),Object(l.a)("p",null,"All fields default to ",Object(l.a)("inlineCode",{parentName:"p"},"null"),". Sample:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "defaultPerLengthSequenceImpedance": {\n        "r": 0.0025,\n        "x": 0.003,\n        "r0": 0.0025,\n        "x0": 0.003\n    }\n}\n')),Object(l.a)("h6",{id:"default-power-transformer-info"},"Default Power Transformer Info"),Object(l.a)("p",null,"Due to the hierarchical nature of ",Object(l.a)("inlineCode",{parentName:"p"},"PowerTransformerInfo"),", the structure of its configuration will be denoted using multiple production rules.\nA full example is given at the end of this section. Refer to the CIM documentation for field definitions."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'<PowerTransformerInfo spec> = {\n    "transformerTankInfos": [<TransformerTankInfo spec>*]\n}\n')),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'<TransformerTankInfo spec> = {\n    "transformerEndInfos": [<TransformerEndInfo spec>*]\n}\n')),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'<TransformerEndInfo spec> = {\n    "connectionKind": "<WindingConnection value name>", # defaults to "UNKNOWN_WINDING"\n    "emergencyS": null | int, # defaults to null\n    "endNumber": int, # defaults to 0\n    "insulationU": null | int, # defaults to null\n    "phaseAngleClock": null | int, # defaults to null\n    "r": null | double, # defaults to null\n    "ratedS": null | int, # defaults to null\n    "ratedU": null | int, # defaults to null\n    "shortTermS": null | int, # defaults to null\n    "transformerStarImpedance": null | <TransformerStarImpedanceDto spec>, # defaults to null\n    "energisedEndNoLoadTests": null | <NoLoadTest spec>, # defaults to null\n    "energisedEndShortCircuitTests": null | <ShortCircuitTest spec>, # defaults to null\n    "groundedEndShortCircuitTests": null | <ShortCircuitTest spec>, # defaults to null\n    "openEndOpenCircuitTests": null | <OpenCircuitTest spec>, # defaults to null\n    "energisedEndOpenCircuitTests": null | <OpenCircuitTest spec> # defaults to null\n}\n')),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'<TransformerStarImpedance spec> = {\n    "r": null | double, # defaults to null\n    "r0": null | double, # defaults to null\n    "x": null | double, # defaults to null\n    "x0": null | double # defaults to null\n}\n')),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'<NoLoadTest spec> = {\n    "energisedEndVoltage": null | int, # defaults to null\n    "excitingCurrent": null | double, # defaults to null\n    "excitingCurrentZero": null | double, # defaults to null\n    "loss": null | int, # defaults to null\n    "lossZero": null | int # defaults to null\n}\n')),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'<ShortCircuitTest spec> = {\n    "current": null | double, # defaults to null\n    "energisedEndStep": null | int, # defaults to null\n    "groundedEndStep": null | int, # defaults to null\n    "leakageImpedance": null | double, # defaults to null\n    "leakageImpedanceZero": null | double, # defaults to null\n    "loss": null | int, # defaults to null\n    "lossZero": null | int, # defaults to null\n    "power": null | int, # defaults to null\n    "voltage": null | double, # defaults to null\n    "voltageOhmicPart": null | double # defaults to null\n}\n')),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'<OpenCircuitTest spec> = {\n    "energisedEndStep": null | int, # defaults to null\n    "energisedEndVoltage": null | int, # defaults to null\n    "openEndStep": null | int, # defaults to null\n    "openEndVoltage": null | int, # defaults to null\n    "phaseShift": null | double # defaults to null\n}\n')),Object(l.a)("p",null,"Full example:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "defaultPowerTransformerInfo": {\n    "transformerTankInfos": [{\n      "transformerEndInfos": [\n        {\n          "connectionKind": "D",\n          "emergencyS": 1,\n          "endNumber": 1,\n          "insulationU": 3,\n          "r": 4.4,\n          "ratedS": 5,\n          "ratedU": 6,\n          "shortTermS": 7,\n          "transformerStarImpedance": {\n            "r": 1.1,\n            "r0": 2.2,\n            "x": 3.3,\n            "x0": 4.4\n          },\n          "energisedEndNoLoadTests": {\n            "energisedEndVoltage": 1,\n            "excitingCurrent": 2.2,\n            "excitingCurrentZero": 3.3,\n            "loss": 4,\n            "lossZero": 5\n          },\n          "energisedEndShortCircuitTests": {\n            "current": 1.1,\n            "energisedEndStep": 2,\n            "groundedEndStep": 3,\n            "leakageImpedance": 4.4,\n            "leakageImpedanceZero": 5.5,\n            "loss": 6,\n            "lossZero": 7,\n            "power": 8,\n            "voltage": 9.9,\n            "voltageOhmicPart": 10.10\n          }\n        }, {\n          "connectionKind": "Y",\n          "emergencyS": 1,\n          "endNumber": 2,\n          "insulationU": 3,\n          "phaseAngleClock": 30,\n          "r": 4.4,\n          "ratedS": 5,\n          "ratedU": 6,\n          "shortTermS": 7\n        }\n      ]\n    }]\n  }\n}\n')),Object(l.a)("h5",{id:"cable-types-file"},"Cable Types File"),Object(l.a)("p",null,"The GIS Network Extractor derives cable type information from a json file structured as follows:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "cableTypes": [{\n            "id": string,\n            "resistance": double,\n            "reactance": double,\n            "zeroSeqResistance": double,\n            "zeroSeqReactance": double,\n            "nominalVoltage": double,\n            "rating": int,\n            "maxFaultCurrent": double,\n            "normalRating": double,\n            "springDay": double,\n            "springNight": double,\n            "summerDay": double,\n            "summerNight": double,\n            "autumnDay": double,\n            "autumnNight": double,\n            "winterDay": double,\n            "winterNight": double,\n            "neutralRating": double\n        }\n    ]\n}\n')),Object(l.a)("p",null,"If you have a running copy of the ",Object(l.a)("inlineCode",{parentName:"p"},"Energy Workbench Server")," you can download the ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"http://ewbserver/ewb/network/api/v1/cable-types"}),"existing cable types"),"."),Object(l.a)("h6",{id:"sample-content-3"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "cableTypes": [\n    {\n      "id": "Cu_0.1i_SWAS_SD_11_6",\n      "resistance": 0.342,\n      "reactance": 0.115,\n      "zeroSeqResistance": 0.795,\n      "zeroSeqReactance": 0.066,\n      "nominalVoltage": 11,\n      "rating": 215,\n      "maxFaultCurrent": 10.1,\n      "normalRating": 1,\n      "springDay": 1,\n      "springNight": 1,\n      "summerDay": 1,\n      "summerNight": 1,\n      "autumnDay": 1,\n      "autumnNight": 1,\n      "winterDay": 1.14,\n      "winterNight": 1.14,\n      "neutralRating": 215\n    },\n    {\n      "id": "Cu_0.25i_pswsb_SD_6.6_3",\n      "resistance": 0.133,\n      "reactance": 0.074,\n      "zeroSeqResistance": 0.95,\n      "zeroSeqReactance": 0.541,\n      "nominalVoltage": 6.6,\n      "rating": 345,\n      "maxFaultCurrent": 10.1,\n      "normalRating": 1,\n      "springDay": 1,\n      "springNight": 1,\n      "summerDay": 1,\n      "summerNight": 1,\n      "autumnDay": 1,\n      "autumnNight": 1,\n      "winterDay": 1.117,\n      "winterNight": 1.117,\n      "neutralRating": 345\n    }\n  ]\n}\n')),Object(l.a)("h5",{id:"network-hierarchy-file"},"Network Hierarchy File"),Object(l.a)("p",null,"The GIS Network Extractor derives network hierarchy information from a json file structured as follows:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "businesses": [{\n        "id": string,\n        "name": string,\n        "regions": [{\n            "id": string,\n            "name": string,\n            "zones": [{\n                "id": string,\n                "name": string,\n                "feeders": [{\n                    "id": string,\n                    "name": string\n                }]\n            }]\n        }]\n    }]\n}\n')),Object(l.a)("p",null,"If you have a running copy of the ",Object(l.a)("inlineCode",{parentName:"p"},"Energy Workbench Server")," you can download\nthe ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"http://ewbserver/ewb/network/api/v1/hierarchy?filter=businesses"}),"existing network hierarchy"),"."),Object(l.a)("h6",{id:"sample-content-4"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "businesses": [\n    {\n      "id": "business1",\n      "name": "BUSINESS1",\n      "regions": [\n        {\n          "id": "region1",\n          "name": "REGION1",\n          "zones": [\n            {\n              "id": "zone1",\n              "name": "ZONE1",\n              "feeders": [\n                {\n                  "id": "feeder1",\n                  "name": "FEEDER1"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(l.a)("h5",{id:"nodes-config-file"},"Nodes Config File"),Object(l.a)("p",null,"The GIS Network Extractor derives node configuration information from a json file structured as follows:"),Object(l.a)("h6",{id:"structure-1"},"Structure:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),'{\n  "mappings": [\n    {\n      "gisClass": "<gis-node-class>",\n      "cimClass": "<conducting-equipment-class>",\n      "style": "<diagram-object-style>"\n    }\n  ],\n  "switchStyles": [\n    {\n      "value": "<attribute-value>",\n      "style": "<diagram-object-style>"\n    }\n  ],\n  // optional\n  "reactorClasses": [\n    "<gis-node-class>"\n  ],\n  // optional\n  "defaultReactorSizeKVAR": 1.0\n}\n')),Object(l.a)("div",{className:"admonition admonition-info alert alert--info"},Object(l.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.a)("h5",{parentName:"div"},Object(l.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.a)("p",{parentName:"div"},Object(l.a)("inlineCode",{parentName:"p"},"reactorClasses")," defaults to ",Object(l.a)("inlineCode",{parentName:"p"},'["reactor_site"]'),", and ",Object(l.a)("inlineCode",{parentName:"p"},"defaultReactorSizeKVAR")," defaults to ",Object(l.a)("inlineCode",{parentName:"p"},"25.0")," when they are not provided."))),Object(l.a)("h6",{id:"sample-content-5"},"Sample content:"),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mappings": [\n    {\n      "gisClass": "acr",\n      "cimClass": "Recloser",\n      "style": "RECLOSER"\n    },\n    {\n      "gisClass": "hvSwitch",\n      "cimClass": "Disconnector",\n      "style": "SWITCH"\n    }\n  ],\n  "switchStyles": [\n    {\n      "value": "bridge",\n      "style": "BRIDGE"\n    },\n    {\n      "value": "air-break",\n      "style": "SWITCH"\n    },\n    {\n      "value": "live line clamp",\n      "style": "LIVE_LINE_CLAMP"\n    }\n  ],\n  "reactorClasses": [\n    "reactor_site"\n  ],\n  "defaultReactorSizeKVAR": 25.0\n}\n')))}u.isMDXComponent=!0}}]);