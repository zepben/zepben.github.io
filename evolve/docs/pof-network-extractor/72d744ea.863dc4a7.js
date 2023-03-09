(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),j=n,d=p["".concat(l,".").concat(j)]||p[j]||O[j]||c;return a?r.a.createElement(d,i({ref:t},b,{components:a})):r.a.createElement(d,i({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<c;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(113)),l={id:"configuring"},i={unversionedId:"configuring",id:"version-2.7.0/configuring",isDocsHomePage:!1,title:"configuring",description:"Configuration for the PoF Network Extractor is specified in a JSON file.",source:"@site/versioned_docs/version-2.7.0/configuring.md",slug:"/configuring",permalink:"/evolve/docs/pof-network-extractor/2.7.0/configuring",version:"2.7.0",sidebar:"version-2.7.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/pof-network-extractor/2.7.0/"},next:{title:"Running the Application",permalink:"/evolve/docs/pof-network-extractor/2.7.0/run-app"}},o=[{value:"PoF Configuration",id:"pof-configuration",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]}],b={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Configuration for the PoF Network Extractor is specified in a JSON file."),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"ewbDataPath")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path to the ewb data directory."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"pofConfigFile")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path to the PoF configuration used by this tool."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"meterSourceType")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicates the source of meters. One of ",Object(c.a)("inlineCode",{parentName:"td"},"TCS")," or ",Object(c.a)("inlineCode",{parentName:"td"},"MAPPING_FILE"),". Default: ",Object(c.a)("inlineCode",{parentName:"td"},"MAPPING_FILE")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"meterMappings")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds meter mapping related config if meter source is ",Object(c.a)("inlineCode",{parentName:"td"},"MAPPING_FILE"),". ",Object(c.a)("br",null),"Refer to [**Meter Mapping"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Config**](#meter-mapping-config) below."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"connectionPointIdentifier")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name to use for the connection point identifier. E.g. ",Object(c.a)("inlineCode",{parentName:"td"},"NMI")," in Australia or ",Object(c.a)("inlineCode",{parentName:"td"},"ICP")," in New Zealand. Default: ",Object(c.a)("inlineCode",{parentName:"td"},"NMI"),"."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.a)("h6",{id:"meter-mapping-config"},"Meter Mapping Config"),Object(c.a)("p",null,"The PoF extractor can take meter mapping files to provide a mapping of meters and supply points to transformers. Each file is required to have its date in the\nfile name so the appropriate mapping file can be used. All the options in this config object are required if it is included."),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"path")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The path to the directory containing meter mapping files.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"filePattern")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A regex to match meter mapping files. ",Object(c.a)("br",null),"This needs to have a single group capture that captures the date in the file name.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"datePattern")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The pattern of the date captured from the file name.")))),Object(c.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"If any paths in the configuration are given as relative paths, they will be relative to the working directory of the JVM.")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}))),Object(c.a)("p",null,"The following is a sample configuration file"),Object(c.a)("h5",{id:"sample-configuration-file"},"Sample Configuration File"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ewbDataPath": "/users/release/ewb/data",\n  "pofConfigFile": "/users/release/ewb/conf/pof_config.json",\n  "meterMappings": {\n    "path": "/path/to/directory/with/mapping/files",\n    "filePattern": "NMI_TX_MAPPING_(\\\\d{8}).csv",\n    "datePattern": "yyyyMMdd"\n  }\n}\n')),Object(c.a)("hr",null),Object(c.a)("h3",{id:"pof-configuration"},"PoF Configuration"),Object(c.a)("p",null,"The following describes PowerOn Fusion specific data configuration that allows the PoF Network Extractor to convert components from PoF to EWB network model\nassets."),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"regulatorClassesReversible")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for reversible regulators."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"regulatorClassesNonReversible")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for non reversible regulators."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"zoneTransformerClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for zone transformers."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"transformerClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for all other transformers."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"feederCbClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for feeder circuit breakers."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"cbClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for all other circuit breakers."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"fuseClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for fuses."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"isolatorClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for isolaters."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"recloserClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for reclosers."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"faultIndicatorClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for fault indicators."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"brokenBridgeClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for broken bridges."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"generatorClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for generators."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"capacitorClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for capacitors."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"hvSupplyPointClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for HV supply points."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"poleClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for poles."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"ignoreSources")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs which cannot be converted to sources."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"switchClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for all other switch types."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"siteClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for site components."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"feederClasses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of component class IDs for feeder start points."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[int]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"transformerTypes")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object that holds transformer types config. ",Object(c.a)("br",null),"Refer to ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#transformer-types-config"}),Object(c.a)("strong",{parentName:"a"},"Transformer Types Config"))," below."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"businesses")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object that holds businesses config. ",Object(c.a)("br",null),"Refer to ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#businesses-config"}),Object(c.a)("strong",{parentName:"a"},"Business Config"))," below."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"worlds")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of world IDs to be included in the extract."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"int[]")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"equalLatLonCheck")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flag to indicate if the latitudes and longitude for a component should be checked to see if they have the exact same value."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"undergroundPattern")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Regular expression used to determine if a cable is underground from the component class name. Defaults to ",Object(c.a)("inlineCode",{parentName:"td"},"hvugc"),"."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"conductorNaming")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Choose which ",Object(c.a)("inlineCode",{parentName:"td"},"COMPONENT_HEADER")," field to use as the conductor name (",Object(c.a)("inlineCode",{parentName:"td"},"COMPONENT_PATHNAME"),", ",Object(c.a)("inlineCode",{parentName:"td"},"COMPONENT_ALIAS")," or ",Object(c.a)("inlineCode",{parentName:"td"},"COMPONENT_ID"),"). Defaults to ",Object(c.a)("inlineCode",{parentName:"td"},"COMPONENT_PATHNAME"),"."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.a)("h6",{id:"transformer-types-config"},"Transformer Types Config"),Object(c.a)("p",null,"This object is a JSON version of the TRANSFORMER_TYPES table in the PowerOn Fusion database."),Object(c.a)("p",null,"TODO: document object"),Object(c.a)("h6",{id:"businesses-config"},"Businesses Config"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"name")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name to give the business in the EWB model."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"roots")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of the highest level component IDs in the hierarchy that have network assets for the specified business."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"[string]")))),Object(c.a)("h5",{id:"sample-configuration-file-1"},"Sample Configuration File"),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Remember that this sample configuration is a sample. The lists for these options will likely be substantially larger than shown here for a real PoF")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"system."))),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "regulatorClassesReversible": [\n    732,\n    733\n  ],\n  "regulatorClassesNonReversible": [\n    831,\n    849\n  ],\n  "zoneTransformerClasses": [\n    327\n  ],\n  "transformerClasses": [\n    825,\n    828\n  ],\n  "feederCbClasses": [\n    50,\n    51,\n    52\n  ],\n  "cbClasses": [\n    70,\n    72,\n    321\n  ],\n  "fuseClasses": [\n    316,\n    338\n  ],\n  "isolatorClasses": [\n    305,\n    657\n  ],\n  "recloserClasses": [\n    339,\n    710\n  ],\n  "faultIndicatorClasses": [\n    502,\n    839\n  ],\n  "brokenBridgeClasses": [\n    893,\n    905\n  ],\n  "generatorClasses": [\n    895\n  ],\n  "capacitorClasses": [\n    829\n  ],\n  "hvSupplyPointClasses": [\n    894\n  ],\n  "switchClasses": [\n    36,\n    300\n  ],\n  "siteClasses": [\n    845,\n    898\n  ],\n  "feederClasses": [\n    788\n  ],\n  "transformerTypes": [\n    {\n      "type": "P",\n      "rating_min": 100000,\n      "rating_max": 999999999,\n      "cyclic_rating_factor": 1.5,\n      "power_factor": 0.9\n    },\n    {\n      "type": "K",\n      "rating_min": 100000,\n      "rating_max": 100000,\n      "cyclic_rating_factor": 1.25,\n      "power_factor": 0.9\n    }\n  ],\n  "businesses": [\n    {\n      "name": "Business 1",\n      "roots": [\n        "B000001dbCOMP"\n      ]\n    },\n    {\n      "name": "Business 2",\n      "roots": [\n        "G00003e63COMP",\n        "G00003e64COMP"\n      ]\n    }\n  ],\n  "worlds": [\n    510,\n    700\n  ],\n  "equalLatLonCheck": "true"\n}\n')),Object(c.a)("hr",null),Object(c.a)("h3",{id:"environment-variables"},"Environment Variables"),Object(c.a)("p",null,"The following system environment variables are used by the tool. The default is applied if the environment variable does not exist."),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Variable"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"ENMAC_USER")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The user for the PoF Oracle database."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"enmac")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("inlineCode",{parentName:"td"},"ENMAC_PASSWORD")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The password for the PoF Oracle database."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"password")))))}s.isMDXComponent=!0}}]);