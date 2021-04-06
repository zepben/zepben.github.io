(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(t),O=a,m=b["".concat(l,".").concat(O)]||b[O]||u[O]||i;return t?r.a.createElement(m,c({ref:n},s,{components:t})):r.a.createElement(m,c({ref:n},s))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=b;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(100)),l={id:"input-files",title:"Input Files"},c={unversionedId:"input-files",id:"version-2.8.0/input-files",isDocsHomePage:!1,title:"Input Files",description:"Required Input Files",source:"@site/versioned_docs/version-2.8.0/input-files.md",slug:"/input-files",permalink:"/evolve/docs/gis-network-extractor/2.8.0/input-files",version:"2.8.0",sidebar:"version-2.8.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/gis-network-extractor/2.8.0/"},next:{title:"Running the Application",permalink:"/evolve/docs/gis-network-extractor/2.8.0/run-app"}},o=[],s={toc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h5",{id:"required-input-files"},"Required Input Files"),Object(i.a)("p",null,"The following files are required for the GIS Network Extractor to run:"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"File(s)"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Data type"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default location"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(a.a)({parentName:"td"},{href:"#cable-types-file"}),"Cable Types")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./cable-types.json")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(a.a)({parentName:"td"},{href:"#network-hierarchy-file"}),"Network Hierarchy")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./network-hierarchy.json")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("a",Object(a.a)({parentName:"td"},{href:"#nodes-config-file"}),"Nodes Config")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./nodes-config.json")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Poles"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single .json file"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./poles.json")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"GIS Network files"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single or multiple .json/.geojson files"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./gis")))),Object(i.a)("h5",{id:"optional-files"},"Optional Files"),Object(i.a)("p",null,"The following files may be provided as input for the GIS Network Extractor, however they are not required:"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"File(s)"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Data type"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default location"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Meter Mapping"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Single or multiple.csv files"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"./meter_mappings")))),Object(i.a)("br",null),Object(i.a)("h5",{id:"meter-mapping-file"},"Meter Mapping File"),Object(i.a)("p",null,"The GIS Network Extractor takes meter mapping files to provide a mapping of meters and supply points to transformers. These files use CSV format and contain the\nfollowing columns: ",Object(i.a)("strong",{parentName:"p"},"company, nmi,meter_id, supply_point_id, meter_no, transformer_id, transformer_desc, feeder, service_addr, cust_class, cust_tariff"),". Each\nfile is required to have its date in the file name so the appropriate mapping file can be used."),Object(i.a)("h6",{id:"sample-content"},"Sample content:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-csv"}),'company,nmi,meter_id,supply_point_id,meter_no,transformer_id,transformer_desc,feeder,service_addr,cust_class,cust_tariff\n"ACME","FOOH1234567",123456789,11929433,"1234",,,"LP001","140 THISSON STREET,SPRINGFIELD,SPF,12345A","C","T1"\n"ACME","FOOH1234567",123456789,11929433,"1234",,,"LP002","140 OTHERSON STREET,SPRINGFIELD,SPF,12345A","R","T1"\n"ACME","FOOH1234567",123456789,11929533,"1234",,,"LP003","LEVEL44,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T2"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP004","WEST TOWER,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T1"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP006","WEST TOWER,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","C","T1"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP007","TENANCY2,OPP 76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T3"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP008","TENANCY1,OPP 76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","R","T3"\n')),Object(i.a)("h5",{id:"cable-types-file"},"Cable Types File"),Object(i.a)("p",null,"The GIS Network Extractor derives cable type information from a json file structured as follows:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "cableTypes": [{\n            "id": string,\n            "resistance": double,\n            "reactance": double,\n            "zeroSeqResistance": double,\n            "zeroSeqReactance": double,\n            "nominalVoltage": double,\n            "rating": int,\n            "maxFaultCurrent": double,\n            "normalRating": double,\n            "springDay": double,\n            "springNight": double,\n            "summerDay": double,\n            "summerNight": double,\n            "autumnDay": double,\n            "autumnNight": double,\n            "winterDay": double,\n            "winterNight": double,\n            "neutralRating": double\n        }\n    ]\n}\n')),Object(i.a)("p",null,"If you have a running copy of the ",Object(i.a)("inlineCode",{parentName:"p"},"Energy Workbench Server")," you can download the ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"http://ewbserver/ewb/network/api/v1/cable-types"}),"existing cable types"),"."),Object(i.a)("h6",{id:"sample-content-1"},"Sample content:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "cableTypes": [\n    {\n      "id": "Cu_0.1i_SWAS_SD_11_6",\n      "resistance": 0.342,\n      "reactance": 0.115,\n      "zeroSeqResistance": 0.795,\n      "zeroSeqReactance": 0.066,\n      "nominalVoltage": 11,\n      "rating": 215,\n      "maxFaultCurrent": 10.1,\n      "normalRating": 1,\n      "springDay": 1,\n      "springNight": 1,\n      "summerDay": 1,\n      "summerNight": 1,\n      "autumnDay": 1,\n      "autumnNight": 1,\n      "winterDay": 1.14,\n      "winterNight": 1.14,\n      "neutralRating": 215\n    },\n    {\n      "id": "Cu_0.25i_pswsb_SD_6.6_3",\n      "resistance": 0.133,\n      "reactance": 0.074,\n      "zeroSeqResistance": 0.95,\n      "zeroSeqReactance": 0.541,\n      "nominalVoltage": 6.6,\n      "rating": 345,\n      "maxFaultCurrent": 10.1,\n      "normalRating": 1,\n      "springDay": 1,\n      "springNight": 1,\n      "summerDay": 1,\n      "summerNight": 1,\n      "autumnDay": 1,\n      "autumnNight": 1,\n      "winterDay": 1.117,\n      "winterNight": 1.117,\n      "neutralRating": 345\n    }\n  ]\n}\n')),Object(i.a)("h5",{id:"network-hierarchy-file"},"Network Hierarchy File"),Object(i.a)("p",null,"The GIS Network Extractor derives network hierarchy information from a json file structured as follows:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "businesses": [{\n        "id": string,\n        "name": string,\n        "regions": [{\n            "id": string,\n            "name": string,\n            "zones": [{\n                "id": string,\n                "name": string,\n                "feeders": [{\n                    "id": string,\n                    "name": string\n                }]\n            }]\n        }]\n    }]\n}\n')),Object(i.a)("p",null,"If you have a running copy of the ",Object(i.a)("inlineCode",{parentName:"p"},"Energy Workbench Server")," you can download\nthe ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"http://ewbserver/ewb/network/api/v1/hierarchy?filter=businesses"}),"existing network hierarchy"),"."),Object(i.a)("h6",{id:"sample-content-2"},"Sample content:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "businesses": [\n    {\n      "id": "business1",\n      "name": "BUSINESS1",\n      "regions": [\n        {\n          "id": "region1",\n          "name": "REGION1",\n          "zones": [\n            {\n              "id": "zone1",\n              "name": "ZONE1",\n              "feeders": [\n                {\n                  "id": "feeder1",\n                  "name": "FEEDER1"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(i.a)("h5",{id:"nodes-config-file"},"Nodes Config File"),Object(i.a)("p",null,"The GIS Network Extractor derives node configuration information from a json file structured as follows:"),Object(i.a)("h6",{id:"structure"},"Structure:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mappings": [\n    {\n      "gisClass": "<gis-node-class>",\n      "cimClass": "<conducting-equipment-class>",\n      "style": "<diagram-object-style>"\n    },\n    ...\n  ],\n  "switchStyles": [\n    {\n      "value": "<attribute-value>",\n      "style": "<diagram-object-style>"\n    },\n    ...\n  ]\n}\n')),Object(i.a)("h6",{id:"sample-content-3"},"Sample content:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mappings": [\n    {\n      "gisClass": "acr",\n      "cimClass": "Recloser",\n      "style": "RECLOSER"\n    },\n    {\n      "gisClass": "hvSwitch",\n      "cimClass": "Disconnector",\n      "style": "SWITCH"\n    }\n  ],\n  "switchStyles": [\n    {\n      "value": "bridge",\n      "style": "BRIDGE"\n    },\n    {\n      "value": "air-break",\n      "style": "SWITCH"\n    },\n    {\n      "value": "live line clamp",\n      "style": "LIVE_LINE_CLAMP"\n    }\n  ]\n}\n')))}p.isMDXComponent=!0}}]);