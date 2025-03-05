"use strict";(self.webpackChunkewb_app_server_doco=self.webpackChunkewb_app_server_doco||[]).push([[1479],{3905:(n,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var t=r(7294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var i=t.createContext({}),c=function(n){var e=t.useContext(i),r=e;return n&&(r="function"==typeof n?n(e):l(l({},e),n)),r},p=function(n){var e=c(n.components);return t.createElement(i.Provider,{value:e},n.children)},u="mdxType",A={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,i=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||A[m]||o;return r?t.createElement(f,l(l({ref:e},p),{},{components:r})):t.createElement(f,l({ref:e},p))}));function f(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s[u]="string"==typeof n?n:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3090:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={},l=void 0,s={unversionedId:"sample-config",id:"sample-config",title:"sample-config",description:"Basic Sample Configuration File",source:"@site/docs/sample-config.md",sourceDirName:".",slug:"/sample-config",permalink:"/evolve/docs/evolve-app-server/next/sample-config",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[{value:"Basic Sample Configuration File",id:"basic-sample-configuration-file",level:4},{value:"Sample Config to define defaultMapLayerColors, themes and defaultTheme for ui",id:"sample-config-to-define-defaultmaplayercolors-themes-and-defaulttheme-for-ui",level:4}],p={toc:c},u="wrapper";function A(n){let{components:e,...r}=n;return(0,a.kt)(u,(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"basic-sample-configuration-file"},"Basic Sample Configuration File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    "useTls": true,\n    "keyStorePath": "path/to/keystore.jks",\n    "privateKeyAlias": "alias",\n    "keyStorePassword": "password",\n    "privateKeyPassword": "password",\n    "webClientHost": "*",\n    "port": 7654,\n    "webRoot": "static"\n  },\n  "ewb": {\n    "host": "localhost",\n    "port": 9000,\n    "protocol": "HTTP",\n    "auth": {\n      "issuer": "https://zepben.au.auth0.com",\n      "audience": "https://test-audience/",\n      "clientId": "abcdefg",\n      "clientSecret": "hijklmnop"\n    }\n  },\n  "ui": {\n    "defaultScreen": "MAP",\n    "studiesEnabled": true,\n    "profilesTrendDisplayEnabled": true,\n    "profilesSubstationLoadAnalysisEnabled": false,\n    "powerFactoryExporterEnabled": true,\n    "powerFactoryExporterOptions": {\n      "enableInternalNodes": true,\n      "enableLVFeeders": true\n    },\n    "sincalExporterEnabled": true,\n    "sincalExporterOptions": {\n      "enableInternalNodes": false,\n      "enableLVFeeders": false\n    },\n    "networkTracingEnabled": true,\n    "networkOpportunityAnalysisEnabled": true,\n    "devFeaturesEnabled": false,\n    "networkStateControlEnabled": false\n  },\n  "database": {\n    "url": "jdbc:h2:mem:mem;DB_CLOSE_DELAY=-1;DATABASE_TO_LOWER=TRUE;",\n    "driver": "org.h2.Driver"\n  },\n  "auth": {\n    "method": "auth0",\n    "trustedIssuers": ["https://zepben.au.auth0.com"],\n    "audience": "https://evolve-gateway/"\n  },\n  "powerFactoryModel": {\n    "type": "http",\n    "host": "localhost",\n    "port": 8089,\n    "modelsDir": "modelsDir"\n  },\n  "hostingCapacity": {\n    "service": {\n      "type": "http",\n      "host": "localhost",\n      "port": 9191\n    },\n    "resultDatabase": {\n      "url": "jdbc:postgresql:results",\n      "driver": "org.postgresql.Driver"\n    }\n  },\n  "airflow": {\n    "host": "localhost",\n    "port": 8080,\n    "protocol": "HTTP",\n    "username": "ewb_airflow_user",\n    "password": "air_password123"\n  },\n  "metricsDatabase": {\n    "url": "jdbc:h2:mem:mem2;DB_CLOSE_DELAY=-1"\n  },\n  "jwks": {\n    "currentUserSigningKey": "current-test-user",\n    "currentMachineSigningKey": "current-test-machine"\n  }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"sample-config-to-define-defaultmaplayercolors-themes-and-defaulttheme-for-ui"},"Sample Config to define defaultMapLayerColors, themes and defaultTheme for ui"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ui": {\n    "defaultMapLayerColors": {\n      "voltage": [\n        {\n          "range": [\n            0,\n            0\n          ],\n          "color": "#FFFFFF"\n        },\n        {\n          "range": [\n            1,\n            240\n          ],\n          "color": "rgba(251,176,121,0.667)"\n        },\n        {\n          "range": [\n            241,\n            1000\n          ],\n          "color": "rgba(251,176,121,1)"\n        },\n        {\n          "range": [\n            6300,\n            6400\n          ],\n          "color": "#75157e"\n        },\n        {\n          "range": [\n            6600,\n            6600\n          ],\n          "color": "#FF00FF"\n        },\n        {\n          "range": [\n            11000,\n            11000\n          ],\n          "color": "#A31DAF"\n        },\n        {\n          "range": [\n            12500,\n            12800\n          ],\n          "color": "#10A0B0"\n        },\n        {\n          "range": [\n            19000,\n            19200\n          ],\n          "color": "#00CCFF"\n        },\n        {\n          "range": [\n            21000,\n            24000\n          ],\n          "color": "#2f6896"\n        },\n        {\n          "range": [\n            33000,\n            33000\n          ],\n          "color": "#367bb4"\n        },\n        {\n          "range": [\n            66000,\n            66000\n          ],\n          "color": "#FE9833"\n        },\n        {\n          "range": [\n            132000,\n            132000\n          ],\n          "color": "#9FA050"\n        },\n        {\n          "range": [\n            220000,\n            220000\n          ],\n          "color": "#1FF0EA"\n        },\n        {\n          "range": [\n            275000,\n            275000\n          ],\n          "color": "#FFD1D1"\n        },\n        {\n          "range": [\n            500000,\n            500000\n          ],\n          "color": "#99FF99"\n        }\n      ],\n      "phases": {\n        "A": "#FF0000",\n        "B": "#FFFF00",\n        "C": "#0000FF",\n        "AB": "#FF8800",\n        "AC": "#7c4cad",\n        "BC": "#00BB00",\n        "ABC": "#000000",\n        "AN": "#BB0000",\n        "BN": "#BBBB00",\n        "CN": "#0000BB",\n        "ABN": "#BB6600",\n        "ACN": "#73479b",\n        "BCN": "#008800",\n        "ABCN": "#444444",\n        "X": "#bb6666",\n        "Y": "#444488",\n        "YX": "#AAAAAA",\n        "XN": "#AAAAAA",\n        "YN": "#AAAAAA",\n        "YXN": "#AAAAAA",\n        "NONE": "#CCCCCC"\n      },\n      "pen": [\n        "#8800FF",\n        "#AAAA00",\n        "#00AA00",\n        "#FF00AA",\n        "#0000AA",\n        "#AAAAAA",\n        "#AA0000",\n        "#00AAFF",\n        "#AA00AA",\n        "#CC8800",\n        "#00AAAA",\n        "#0000FF",\n        "#666666",\n        "#e30707"\n      ],\n      "offSupply": [\n        "#FF0000",\n        "#1e10ff"\n      ],\n      "partiallyOffSupply": [\n        "#AA0000",\n        "#DDDDDD"\n      ],\n      "missingVoltage": "#EEEEEE",\n      "highlight": "#00AA00"\n    },\n    "themes": [\n      {\n        "name": "Streets",\n        "sourceUrl": "mapbox://styles/zepben/cl6f1rvw1000015qymrkxfopm",\n        "thumbnailUrl": "images/map/streets.png",\n        "layerColors": {\n          "phases": {\n            "A": "#FF00AA",\n            "B": "#FFFF00",\n            "C": "#0110FF",\n            "AB": "#FF8800",\n            "AC": "#7c4cad",\n            "BC": "#00BB00",\n            "ABC": "#033000",\n            "AN": "#BB0000",\n            "BN": "#BBBB00",\n            "CN": "#0000BB",\n            "ABN": "#BB6600",\n            "ACN": "#73479b",\n            "BCN": "#008800",\n            "ABCN": "#444444",\n            "X": "#bb6666",\n            "Y": "#444488",\n            "YX": "#AAAAAA",\n            "XN": "#EEEEEE",\n            "YN": "#EEEEEE",\n            "YXN": "#AAAAAA",\n            "NONE": "#CCCCCC"\n          },\n          "missingVoltage": "#ABABAB"\n        }\n      },\n      {\n        "name": "Light",\n        "sourceUrl": "mapbox://styles/zepben/ckbszgqxk0ega1ipbfnpu65h6",\n        "thumbnailUrl": "/images/map/light.png",\n        "layerColors": {\n          "voltage": [\n            {\n              "range": [\n                0,\n                1000\n              ],\n              "color": "#AA0000"\n            },\n            {\n              "range": [\n                1000,\n                10000\n              ],\n              "color": "#00AA00"\n            },\n            {\n              "range": [\n                10000,\n                33000\n              ],\n              "color": "#0000AA"\n            },\n            {\n              "range": [\n                33000,\n                200000\n              ],\n              "color": "#FFFFFF"\n            }\n          ]\n        }\n      },\n      {\n        "name": "Dark",\n        "sourceUrl": "mapbox://styles/zepben/ckbh6o85q00qs1iqg12v95zbr",\n        "thumbnailUrl": "/images/map/dark.png",\n        "layerColors": {\n          "voltage": [\n            {\n              "range": [\n                0,\n                1000000\n              ],\n              "color": "#AA0000"\n            }\n          ],\n          "offSupply": [\n            "#AA0000",\n            "#0000DD"\n          ]\n        }\n      },\n      {\n        "name": "Satellite",\n        "sourceUrl": "mapbox://styles/zepben/ckg7efkm60mul19p757pvgzcy",\n        "thumbnailUrl": "/images/map/satellite.png",\n        "layerColors": {\n          "pen": [\n            "#AA3300",\n            "#EEEE00",\n            "#AA55AA"\n          ]\n        }\n      }\n    ],\n    "defaultTheme": "Streets"\n  }\n}\n')))}A.isMDXComponent=!0}}]);