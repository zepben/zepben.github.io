(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(243)),o={id:"ednar-web-client",title:"EDNAR Web Client",slug:"/ednar-web-client"},l={unversionedId:"ednar-web-client",id:"version-5.20.0/ednar-web-client",isDocsHomePage:!1,title:"EDNAR Web Client",description:"The EDNAR Web Client is the single-page application (SPA) that provides the user interface that users interact with in their web browsers. The Web Client consists of static assets, meaning these can be served by the EDNAR App Server itself, or by something such as IIS.",source:"@site/versioned_docs\\version-5.20.0\\ednar-web-client.md",slug:"/ednar-web-client",permalink:"/ednar/docs/admin/ednar-web-client",editUrl:"https://github.com/zepben/versioned_docs/version-5.20.0/ednar-web-client.md",version:"5.20.0",sidebar:"version-5.20.0-sidebar",previous:{title:"EDNAR API Server Configuration",permalink:"/ednar/docs/admin/ednar-api-server-configuration"},next:{title:"EDNAR Reporting Service",permalink:"/ednar/docs/admin/ednar-reporting-service"}},c=[{value:"Configuration",id:"configuration",children:[{value:"Sample Config",id:"sample-config",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The EDNAR Web Client is the single-page application (SPA) that provides the user interface that users interact with in their web browsers. The Web Client consists of static assets, meaning these can be served by the EDNAR App Server itself, or by something such as IIS."),Object(i.a)("p",null,"This page contains information on the configuration used by the EDNAR Web Client, which includes configuration for things such as single sign-on (SSO). Configuration for setting up IIS hosting if not provided by Zepben."),Object(i.a)("h2",{id:"configuration"},"Configuration"),Object(i.a)("p",null,"The configuration for the EDNAR Web Client can be found in the ",Object(i.a)("inlineCode",{parentName:"p"},"/configs")," directory of both the main EDNAR Web App and the EDNAR Admin App files. In this folder, there will be a config.json file that must be used to populate the required config. "),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"msalConfig")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object holding MSAL config for SSO. More information at the ",Object(i.a)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md#configuration-options-1"}),"MSAL Documentation"),"."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Only if SSO is enabled"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"msalLoginRequest")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object holding MSAL Authorization URL Request config for SSO login. More information at the ",Object(i.a)("a",Object(a.a)({parentName:"td"},{href:"https://azuread.github.io/microsoft-authentication-library-for-js/ref/types/_azure_msal_common.CommonAuthorizationUrlRequest.html"}),"MSAL Documentation")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Only if SSO is enabled"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"msalSilentRequest")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object holding MSAL Authorization URL Request config for SSO silent login. More information at the ",Object(i.a)("a",Object(a.a)({parentName:"td"},{href:"https://azuread.github.io/microsoft-authentication-library-for-js/ref/types/_azure_msal_common.CommonAuthorizationUrlRequest.html"}),"MSAL Documentation")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Only if SSO is enabled"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"msalLogoutRequest")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object holding MSAL ",Object(i.a)("inlineCode",{parentName:"td"},"EndSessionPopupRequest")," config for SSO logout. More information at the ",Object(i.a)("a",Object(a.a)({parentName:"td"},{href:"https://learn.microsoft.com/en-us/javascript/api/%40azure/msal-browser/endsessionpopuprequest"}),"MSAL Documentation")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"useIdToken")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Flag for whether the auth provider ID token should be used instead of the Access Token. If false, the access token will be used as user's auth token for EDNAR requests."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"false"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"useEmailAsLoginHint")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Flag for whether the user's email address should be used as their SSO \"login hint\". If false, the user's username will be used."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"false"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"displayDetailedAuthErrors")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Flag for whether detailed authentication errors should display to users on the login page. Typically used for debugging, and disabled for production instances."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"false"))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"adminBasePath")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Base path of the EDNAR Admin app. Used when the web client is served by the App Server."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"mapLayerColours")),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object containing map layer colours that is used for styling the EDNAR network maps. Note that the full object must be included if this option is configured. Not including this option will fall back to the EDNAR defaults."),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.a)("h3",{id:"sample-config"},"Sample Config"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "msalConfig": {\n    "auth": {\n      "clientId": "<ID of the application in Azure/Okta>",\n      "authority": "https://login.microsoftonline.com/<Azure/Okta tenant ID>",\n      "redirectUri": "<EDNAR URL>",\n      "postLogoutRedirectUri": "<EDNAR URL>",\n      "navigateToLoginRequestUrl": false\n    },\n    "cache": {\n      "cacheLocation": "localStorage",\n      "storeAuthStateInCookie": false\n    }\n  },\n  "msalLoginRequest": {\n    "scopes": ["openid", "profile", "email"]\n  },\n  "msalSilentRequest": {\n    "scopes": ["openid", "profile", "email"]\n  },\n  "useEmailAsLoginHint": true,\n  "useIdToken": true,\n  "displayDetailedAuthErrors": false,\n  "adminBasePath": "/admin",\n  "mapLayerColours": {\n    "enableColorOverrides": true,\n    "voltage": [\n      {\n        "range": [0, 0],\n        "color": "#CCCCCC"\n      },\n      {\n        "range": [1, 240],\n        "color": "rgba(251,176,121,0.667)"\n      },\n      {\n        "range": [241, 1000],\n        "color": "rgba(251,176,121,1)"\n      },\n      {\n        "range": [6300, 6400],\n        "color": "#ff0c0c"\n      },\n      {\n        "range": [6600, 6600],\n        "color": "#A020F0"\n      },\n      {\n        "range": [11000, 11000],\n        "color": "#b45ffe"\n      },\n      {\n        "range": [12500, 12800],\n        "color": "#f8c36a"\n      },\n      {\n        "range": [19000, 19200],\n        "color": "#ffa500"\n      },\n      {\n        "range": [21000, 24000],\n        "color": "#289FA0"\n      },\n      {\n        "range": [33000, 33000],\n        "color": "#D1D1D1"\n      },\n      {\n        "range": [66000, 66000],\n        "color": "#ff5151"\n      },\n      {\n        "range": [132000, 132000],\n        "color": "#9FA050"\n      },\n      {\n        "range": [220000, 220000],\n        "color": "#1FF0EA"\n      },\n      {\n        "range": [275000, 275000],\n        "color": "#FFD1D1"\n      },\n      {\n        "range": [500000, 500000],\n        "color": "#99FF99"\n      }\n    ],\n    "missingVoltage": "#000",\n    "phases": {\n      "A": "#FF0000",\n      "B": "#FFFF00",\n      "C": "#0000FF",\n      "AB": "#FF0000",\n      "AC": "#FF00FF",\n      "BC": "#0000FF",\n      "ABC": "#4B4B4B",\n      "AN": "#FF0000",\n      "BN": "#FFFF00",\n      "CN": "#0000FF",\n      "ABN": "#FF0000",\n      "ACN": "#FF00FF",\n      "BCN": "#0000FF",\n      "ABCN": "#4B4B4B",\n      "X": "#FF6D6D",\n      "Y": "#5555FB",\n      "YX": "#A52CB3",\n      "XN": "#FF6D6D",\n      "YN": "#5555FB",\n      "YXN": "#A52CB3",\n      "NONE": "#FFF000"\n    },\n    "pen": [\n      "#8800FF",\n      "#AAAA00",\n      "#00AA00",\n      "#FF00AA",\n      "#0000AA",\n      "#AAAAAA",\n      "#AA0000",\n      "#00AAFF",\n      "#AA00AA",\n      "#CC8800",\n      "#00AAAA",\n      "#0000FF",\n      "#666666",\n      "#e30707"\n    ],\n    "offSupply": ["#BB0000"],\n    "partiallyOffSupply": ["#AA0000", "#DDDDDD"],\n    "highlight": "#00AA00"\n  }\n}\n')))}b.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,l({ref:t},s,{components:n})):r.a.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);