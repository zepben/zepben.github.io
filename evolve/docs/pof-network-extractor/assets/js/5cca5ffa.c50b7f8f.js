"use strict";(self.webpackChunkpof_network_extractor_doco=self.webpackChunkpof_network_extractor_doco||[]).push([[238],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"run-app",title:"Running the Application"},p=void 0,c={unversionedId:"run-app",id:"run-app",title:"Running the Application",description:"Command Line Arguments",source:"@site/docs/run-app.md",sourceDirName:".",slug:"/run-app",permalink:"/evolve/docs/pof-network-extractor/next/run-app",draft:!1,tags:[],version:"current",frontMatter:{id:"run-app",title:"Running the Application"},sidebar:"sidebar",previous:{title:"configuring",permalink:"/evolve/docs/pof-network-extractor/next/configuring"},next:{title:"Processing Details",permalink:"/evolve/docs/pof-network-extractor/next/processing-details"}},d={},m=[{value:"Command Line Arguments",id:"command-line-arguments",level:5},{value:"Heap Size Estimation",id:"heap-size-estimation",level:5}],s={toc:m},u="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h5",{id:"command-line-arguments"},"Command Line Arguments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-c")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path to the configuration file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"pof-network-extractor.conf")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-s")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server running the PoF Oracle database"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"localhost")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-p")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The port number of the server running the PoF Oracle database"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1521")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-i")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Oracle database instance holding the PoF database"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"nms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-d")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows to network model to be written to a specific dates file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Today")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-f")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forces an overwrite if an existing extract database exists"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-df")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Used to disable network fixes. This should be used when extracting an imported GEO world"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--detailed-stats-log")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Used to show detailed messages for each warning collected in the summary output"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("p",null,"To run the tool, execute the following command at a terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -Xmx<heap size> -Xms<heap size> -jar <path to load-aggregator-jar> -c <path to config file> -s <PoF Oracle server> -i <PoF Oracle instance>\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"heap size is the desired size of the heap. E.g. 16g")),(0,i.kt)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),(0,i.kt)("p",null,"PoF system with 2.5 million components requires around ",(0,i.kt)("inlineCode",{parentName:"p"},"10GB")),(0,i.kt)("p",null,"The LV Mapping data requires around ",(0,i.kt)("inlineCode",{parentName:"p"},"2GB")),(0,i.kt)("p",null,"Together with the process overhead, the recommended heap size is ",(0,i.kt)("inlineCode",{parentName:"p"},"16GB")))}f.isMDXComponent=!0}}]);