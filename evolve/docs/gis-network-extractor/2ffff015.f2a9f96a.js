(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=b(a),j=n,m=d["".concat(c,".").concat(j)]||d[j]||O[j]||l;return a?r.a.createElement(m,i({ref:t},p,{components:a})):r.a.createElement(m,i({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<l;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(100)),c={id:"run-app",title:"Running the Application"},i={unversionedId:"run-app",id:"version-2.10.0/run-app",isDocsHomePage:!1,title:"Running the Application",description:"Configuration options for the GIS Network Extractor are provided as command line arguments.",source:"@site/versioned_docs/version-2.10.0/run-app.md",slug:"/run-app",permalink:"/evolve/docs/gis-network-extractor/2.10.0/run-app",version:"2.10.0",sidebar:"version-2.10.0/sidebar",previous:{title:"Input Files",permalink:"/evolve/docs/gis-network-extractor/2.10.0/input-files"}},o=[{value:"Command Line Options",id:"command-line-options",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]}],p={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Configuration options for the GIS Network Extractor are provided as command line arguments."),Object(l.a)("h3",{id:"command-line-options"},"Command Line Options"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-c <FILE>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to the cable types specification json file."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"./cable-types.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-n <FILE>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to the network hierarchy specification json file."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"./network-hierarchy.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-e <PATH>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The root path to be used for the output of the extractor (EWB network data)."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"./ewb")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-ep <true or false>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls if the phase information will be extracted from the source data. If disabled everything will be extracted as ABC."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-g <PATH>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path where the input GIS JSON files are located."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"./gis")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-m <PATH>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The path where the input meter mappings csv files are located."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"./meter_mappings")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-pl <FILE>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to the poles data json file."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"./poles.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-nc <FILE>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to the nodes config json file."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"./nodes-config.json")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-lvt <NUMBER>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the LV voltage upper limit in volts (inclusive)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-mmdp <PATTERN>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the pattern used to represent dates for the records in the meter mappings csv files."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"yyyyMMdd")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-mmfp <REGEX>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the file name pattern for meter mapping files."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NMI",Object(l.a)("em",{parentName:"td"},"TX_MAPPING"),"(\\d{8}).*","[.]","csv")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-pof <HOST> <PORT> <INSTANCE>")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"PowerOn Fusion database connection configuration (Used for CRO extraction)."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NULL")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-dl")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to enable detailed logging of processing errors."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-dsc")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to disable running of the conductor stitching processor."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-p")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag that controls the formatting of json outputs"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"-h")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to display help message with the available command line options"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(l.a)("h3",{id:"environment-variables"},"Environment Variables"),Object(l.a)("p",null,"If the option for processing PowerOn Fusion is enabled, the following environment\nvariables must be set to connect to the PowerOn Fusion database."),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Variable"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("inlineCode",{parentName:"td"},"ENMAC_USER")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The user for the PoF Oracle database."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"enmac"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)("inlineCode",{parentName:"td"},"ENMAC_PASSWORD")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The password for the PoF Oracle database."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"password"))))),Object(l.a)("p",null,"To run the tool, execute the following command at a terminal."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{}),"java -Xmx<heap size> -Xms<heap size> -jar <path to gis-network-extractor> -c <path to cable types file> -n <path to network hierarchy file> -g <path to gis input files directory> -e <path to output ewb data directory>  -pof <PoF Oracle host> <PoF Oracle port> <PoF Oracle instance>\n")),Object(l.a)("p",null,"where:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("p",{parentName:"li"},"PoF databse connection environment variables have been defined. e.g. ",Object(l.a)("strong",{parentName:"p"},"ENMAC_USER"),"=enmac; ",Object(l.a)("strong",{parentName:"p"},"ENMAC_PASSWORD"),"=password;")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("p",{parentName:"li"},"heap size is the desired size of the heap. e.g. 16g"))),Object(l.a)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),Object(l.a)("p",null,"PoF system with 2.5 million components requires around ",Object(l.a)("inlineCode",{parentName:"p"},"10GB")),Object(l.a)("p",null,"The LV Mapping data requires around ",Object(l.a)("inlineCode",{parentName:"p"},"2GB")),Object(l.a)("p",null,"Together with the process overhead, the recommended heap size is ",Object(l.a)("inlineCode",{parentName:"p"},"16GB")))}b.isMDXComponent=!0}}]);