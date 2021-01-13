(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(80)),o={id:"configuring",title:"Configuring"},b={unversionedId:"configuring",id:"version-3.0.0/configuring",isDocsHomePage:!1,title:"Configuring",description:"Configuration for the load processor is specified in a JSON file.",source:"@site/versioned_docs\\version-3.0.0\\configuring.md",slug:"/configuring",permalink:"/evolve/docs/load-processor/configuring",version:"3.0.0",sidebar:"version-3.0.0/sidebar",previous:{title:"Input Files",permalink:"/evolve/docs/load-processor/input-files"},next:{title:"Running the Application",permalink:"/evolve/docs/load-processor/run-app"}},c=[],l={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Configuration for the load processor is specified in a JSON file."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Option"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"inputPath")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The path to the directory with meter energy readings CSV files."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"processedPath")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The path to the directory where successfully processed readings files are moved."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"failedPath")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The path to the directory where readings files that were unable to be processed are moved."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"ewbDataPath")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The path to the ewb data directory."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"inputTimeZone")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The timezone of the input load readings."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"outputTimeZone")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The desired timezone of the processed load readings."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"previousDaysToSearchForNetwork")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Number of days to search for the network back from the current date."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"syslogFacility")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The facility code to specify the type of program logging the message. ",Object(i.b)("br",null)," Valid Values : ",Object(i.b)("inlineCode",{parentName:"td"},"SYSLOG"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LOCAL0"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LOCAL1"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LOCAL2"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LOCAL3"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LOCAL4"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LOCAL5"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LOCAL6"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LOCAL7")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"syslogTag")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The tag for the log message"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"maxCacheSize")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum number of records to cache in memory. Increasing this improves performance but requires more RAM."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"preloadCacheThreshold")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The number of records for a single date in a file before caching data for that whole date into memory."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If any paths in the configuration are given as relative paths, they will be relative to the working directory of the JVM."))),Object(i.b)("h5",{id:"sample-configuration-file"},"Sample Configuration File"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "inputPath": "/Users/zepben/loads/readings",\n    "processedPath": "/Users/zepben/processed",\n    "failedPath": "/Users/zepben/failed",\n    "ewbDataPath": "/Users/zepben/ewb",\n    "inputTimeZone": "+10:00",\n    "outputTimeZone": "Australia/Melbourne",\n    "previousDaysToSearchForNetwork": 365,\n    "syslogFacility": "SYSLOG",\n    "syslogTag": "Load Processor"\n}\n\n')))}p.isMDXComponent=!0},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,m=d["".concat(o,".").concat(s)]||d[s]||O[s]||i;return a?r.a.createElement(m,b({ref:t},l,{components:a})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);