"use strict";(self.webpackChunkload_aggregator_doco=self.webpackChunkload_aggregator_doco||[]).push([[264],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>s});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=g(n),u=a,s=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(s,i(i({ref:t},c),{},{components:n})):r.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var r=n(8168),a=(n(6540),n(5680));const o={id:"run-app",title:"Running the Application"},i=void 0,l={unversionedId:"run-app",id:"version-3.0.0/run-app",title:"Running the Application",description:"Command Line Arguments",source:"@site/versioned_docs/version-3.0.0/run-app.md",sourceDirName:".",slug:"/run-app",permalink:"/evolve/docs/load-aggregator/3.0.0/run-app",draft:!1,tags:[],version:"3.0.0",frontMatter:{id:"run-app",title:"Running the Application"},sidebar:"version-3.0.0/sidebar",previous:{title:"Configuring",permalink:"/evolve/docs/load-aggregator/3.0.0/configuring"}},p={},g=[{value:"Command Line Arguments",id:"command-line-arguments",level:5},{value:"Heap Size Estimation",id:"heap-size-estimation",level:5}],c={toc:g},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h5",{id:"command-line-arguments"},"Command Line Arguments"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"Flag"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Valid Values"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("inlineCode",{parentName:"td"},"-c")),(0,a.yg)("td",{parentName:"tr",align:"center"},"Path to the configuration file"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.yg)("td",{parentName:"tr",align:"center"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("inlineCode",{parentName:"td"},"--detailed-stats-log")),(0,a.yg)("td",{parentName:"tr",align:"center"},"Used to show detailed messages for each warning collected in the stats output"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"center"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("inlineCode",{parentName:"td"},"--force-aggregation")),(0,a.yg)("td",{parentName:"tr",align:"center"},"Allows all meters to be aggregated to their transformers for a specified date range."),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"center"})))),(0,a.yg)("p",null,"To run the tool, execute the following command at a terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"java -Xmx<heap size> -Xms<heap size> -jar <path to load-aggregator-jar> -conf <path to config file>\n")),(0,a.yg)("p",null,"where:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"heap size is the desired size of the heap. E.g. 16g")),(0,a.yg)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),(0,a.yg)("p",null,"The LV Mapping data requires around ",(0,a.yg)("inlineCode",{parentName:"p"},"2GB")," "),(0,a.yg)("p",null,"The meter data requires around ",(0,a.yg)("inlineCode",{parentName:"p"},"1.5GB")),(0,a.yg)("p",null,"Together with the process overhead, the recommended heap size is ",(0,a.yg)("inlineCode",{parentName:"p"},"8GB")))}m.isMDXComponent=!0}}]);