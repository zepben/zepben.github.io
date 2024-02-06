"use strict";(self.webpackChunkgis_network_extractor_doco=self.webpackChunkgis_network_extractor_doco||[]).push([[5867],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const l={id:"input-files",title:"Input Files"},i=void 0,o={unversionedId:"input-files",id:"version-2.10.0/input-files",title:"Input Files",description:"Required Input Files",source:"@site/versioned_docs/version-2.10.0/input-files.md",sourceDirName:".",slug:"/input-files",permalink:"/evolve/docs/gis-network-extractor/2.10.0/input-files",draft:!1,tags:[],version:"2.10.0",frontMatter:{id:"input-files",title:"Input Files"},sidebar:"version-2.10.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/gis-network-extractor/2.10.0/"},next:{title:"Running the Application",permalink:"/evolve/docs/gis-network-extractor/2.10.0/run-app"}},s={},p=[{value:"Required Input Files",id:"required-input-files",level:5},{value:"Optional Files",id:"optional-files",level:5},{value:"Meter Mapping File",id:"meter-mapping-file",level:5},{value:"Sample content:",id:"sample-content",level:6},{value:"Cable Types File",id:"cable-types-file",level:5},{value:"Sample content:",id:"sample-content-1",level:6},{value:"Network Hierarchy File",id:"network-hierarchy-file",level:5},{value:"Sample content:",id:"sample-content-2",level:6},{value:"Nodes Config File",id:"nodes-config-file",level:5},{value:"Structure:",id:"structure",level:6},{value:"Sample content:",id:"sample-content-3",level:6}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h5",{id:"required-input-files"},"Required Input Files"),(0,a.kt)("p",null,"The following files are required for the GIS Network Extractor to run:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File(s)"),(0,a.kt)("th",{parentName:"tr",align:null},"Data type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default location"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#cable-types-file"},"Cable Types")),(0,a.kt)("td",{parentName:"tr",align:null},"Single .json file"),(0,a.kt)("td",{parentName:"tr",align:null},"./cable-types.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#network-hierarchy-file"},"Network Hierarchy")),(0,a.kt)("td",{parentName:"tr",align:null},"Single .json file"),(0,a.kt)("td",{parentName:"tr",align:null},"./network-hierarchy.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#nodes-config-file"},"Nodes Config")),(0,a.kt)("td",{parentName:"tr",align:null},"Single .json file"),(0,a.kt)("td",{parentName:"tr",align:null},"./nodes-config.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Poles"),(0,a.kt)("td",{parentName:"tr",align:null},"Single .json file"),(0,a.kt)("td",{parentName:"tr",align:null},"./poles.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GIS Network files"),(0,a.kt)("td",{parentName:"tr",align:null},"Single or multiple .json/.geojson files"),(0,a.kt)("td",{parentName:"tr",align:null},"./gis")))),(0,a.kt)("h5",{id:"optional-files"},"Optional Files"),(0,a.kt)("p",null,"The following files may be provided as input for the GIS Network Extractor, however they are not required:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File(s)"),(0,a.kt)("th",{parentName:"tr",align:null},"Data type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default location"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Meter Mapping"),(0,a.kt)("td",{parentName:"tr",align:null},"Single or multiple.csv files"),(0,a.kt)("td",{parentName:"tr",align:null},"./meter_mappings")))),(0,a.kt)("br",null),(0,a.kt)("h5",{id:"meter-mapping-file"},"Meter Mapping File"),(0,a.kt)("p",null,"The GIS Network Extractor takes meter mapping files to provide a mapping of meters and supply points to transformers. These files use CSV format and contain the\nfollowing columns: ",(0,a.kt)("strong",{parentName:"p"},"company, nmi,meter_id, supply_point_id, meter_no, transformer_id, transformer_desc, feeder, service_addr, cust_class, cust_tariff"),". Each\nfile is required to have its date in the file name so the appropriate mapping file can be used."),(0,a.kt)("h6",{id:"sample-content"},"Sample content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'company,nmi,meter_id,supply_point_id,meter_no,transformer_id,transformer_desc,feeder,service_addr,cust_class,cust_tariff\n"ACME","FOOH1234567",123456789,11929433,"1234",,,"LP001","140 THISSON STREET,SPRINGFIELD,SPF,12345A","C","T1"\n"ACME","FOOH1234567",123456789,11929433,"1234",,,"LP002","140 OTHERSON STREET,SPRINGFIELD,SPF,12345A","R","T1"\n"ACME","FOOH1234567",123456789,11929533,"1234",,,"LP003","LEVEL44,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T2"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP004","WEST TOWER,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T1"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP006","WEST TOWER,76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","C","T1"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP007","TENANCY2,OPP 76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","I","T3"\n"ACME","FOOH1234567",123456789,11929538,"1234",,,"LP008","TENANCY1,OPP 76 WOOP WOOP STREET,SPRINGFIELD,SPF,12345A","R","T3"\n')),(0,a.kt)("h5",{id:"cable-types-file"},"Cable Types File"),(0,a.kt)("p",null,"The GIS Network Extractor derives cable type information from a json file structured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "cableTypes": [{\n            "id": string,\n            "resistance": double,\n            "reactance": double,\n            "zeroSeqResistance": double,\n            "zeroSeqReactance": double,\n            "nominalVoltage": double,\n            "rating": int,\n            "maxFaultCurrent": double,\n            "normalRating": double,\n            "springDay": double,\n            "springNight": double,\n            "summerDay": double,\n            "summerNight": double,\n            "autumnDay": double,\n            "autumnNight": double,\n            "winterDay": double,\n            "winterNight": double,\n            "neutralRating": double\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"If you have a running copy of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Energy Workbench Server")," you can download the ",(0,a.kt)("a",{parentName:"p",href:"http://ewbserver/ewb/network/api/v1/cable-types"},"existing cable types"),"."),(0,a.kt)("h6",{id:"sample-content-1"},"Sample content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cableTypes": [\n    {\n      "id": "Cu_0.1i_SWAS_SD_11_6",\n      "resistance": 0.342,\n      "reactance": 0.115,\n      "zeroSeqResistance": 0.795,\n      "zeroSeqReactance": 0.066,\n      "nominalVoltage": 11,\n      "rating": 215,\n      "maxFaultCurrent": 10.1,\n      "normalRating": 1,\n      "springDay": 1,\n      "springNight": 1,\n      "summerDay": 1,\n      "summerNight": 1,\n      "autumnDay": 1,\n      "autumnNight": 1,\n      "winterDay": 1.14,\n      "winterNight": 1.14,\n      "neutralRating": 215\n    },\n    {\n      "id": "Cu_0.25i_pswsb_SD_6.6_3",\n      "resistance": 0.133,\n      "reactance": 0.074,\n      "zeroSeqResistance": 0.95,\n      "zeroSeqReactance": 0.541,\n      "nominalVoltage": 6.6,\n      "rating": 345,\n      "maxFaultCurrent": 10.1,\n      "normalRating": 1,\n      "springDay": 1,\n      "springNight": 1,\n      "summerDay": 1,\n      "summerNight": 1,\n      "autumnDay": 1,\n      "autumnNight": 1,\n      "winterDay": 1.117,\n      "winterNight": 1.117,\n      "neutralRating": 345\n    }\n  ]\n}\n')),(0,a.kt)("h5",{id:"network-hierarchy-file"},"Network Hierarchy File"),(0,a.kt)("p",null,"The GIS Network Extractor derives network hierarchy information from a json file structured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "businesses": [{\n        "id": string,\n        "name": string,\n        "regions": [{\n            "id": string,\n            "name": string,\n            "zones": [{\n                "id": string,\n                "name": string,\n                "feeders": [{\n                    "id": string,\n                    "name": string\n                }]\n            }]\n        }]\n    }]\n}\n')),(0,a.kt)("p",null,"If you have a running copy of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Energy Workbench Server")," you can download\nthe ",(0,a.kt)("a",{parentName:"p",href:"http://ewbserver/ewb/network/api/v1/hierarchy?filter=businesses"},"existing network hierarchy"),"."),(0,a.kt)("h6",{id:"sample-content-2"},"Sample content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "businesses": [\n    {\n      "id": "business1",\n      "name": "BUSINESS1",\n      "regions": [\n        {\n          "id": "region1",\n          "name": "REGION1",\n          "zones": [\n            {\n              "id": "zone1",\n              "name": "ZONE1",\n              "feeders": [\n                {\n                  "id": "feeder1",\n                  "name": "FEEDER1"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h5",{id:"nodes-config-file"},"Nodes Config File"),(0,a.kt)("p",null,"The GIS Network Extractor derives node configuration information from a json file structured as follows:"),(0,a.kt)("h6",{id:"structure"},"Structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mappings": [\n    {\n      "gisClass": "<gis-node-class>",\n      "cimClass": "<conducting-equipment-class>",\n      "style": "<diagram-object-style>"\n    },\n    ...\n  ],\n  "switchStyles": [\n    {\n      "value": "<attribute-value>",\n      "style": "<diagram-object-style>"\n    },\n    ...\n  ]\n}\n')),(0,a.kt)("h6",{id:"sample-content-3"},"Sample content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mappings": [\n    {\n      "gisClass": "acr",\n      "cimClass": "Recloser",\n      "style": "RECLOSER"\n    },\n    {\n      "gisClass": "hvSwitch",\n      "cimClass": "Disconnector",\n      "style": "SWITCH"\n    }\n  ],\n  "switchStyles": [\n    {\n      "value": "bridge",\n      "style": "BRIDGE"\n    },\n    {\n      "value": "air-break",\n      "style": "SWITCH"\n    },\n    {\n      "value": "live line clamp",\n      "style": "LIVE_LINE_CLAMP"\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);