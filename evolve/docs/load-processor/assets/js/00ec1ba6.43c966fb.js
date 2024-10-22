"use strict";(self.webpackChunkload_processor_doco=self.webpackChunkload_processor_doco||[]).push([[835],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=g(n),s=a,u=c["".concat(p,".").concat(s)]||c[s]||m[s]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var g=2;g<i;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=n(8168),a=(n(6540),n(5680));const i={id:"run-app",title:"Running the Application"},o=void 0,l={unversionedId:"run-app",id:"version-3.1.0/run-app",title:"Running the Application",description:"Command Line Arguments",source:"@site/versioned_docs/version-3.1.0/run-app.md",sourceDirName:".",slug:"/run-app",permalink:"/evolve/docs/load-processor/3.1.0/run-app",draft:!1,tags:[],version:"3.1.0",frontMatter:{id:"run-app",title:"Running the Application"},sidebar:"version-3.1.0/sidebar",previous:{title:"Configuring",permalink:"/evolve/docs/load-processor/3.1.0/configuring"}},p={},g=[{value:"Command Line Arguments",id:"command-line-arguments",level:5},{value:"Heap Size Estimation",id:"heap-size-estimation",level:5}],d={toc:g},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h5",{id:"command-line-arguments"},"Command Line Arguments"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Flag"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Value"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"-c")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Path to the configuration file"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Specifies the path to the config file."),(0,a.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.yg)("td",{parentName:"tr",align:"center"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"--parse-format")),(0,a.yg)("td",{parentName:"tr",align:"left"},"CPPAL or EE"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Specifies the format file to parse and ingest"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CPPAL")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"--rebuild-index")),(0,a.yg)("td",{parentName:"tr",align:"left"}),(0,a.yg)("td",{parentName:"tr",align:"left"},"Rebuilds the load readings index file in case of data loss or corruption."),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:"center"})))),(0,a.yg)("p",null,"To run the tool, execute the following command at a terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"java -Xmx<heap size> -Xms<heap size> -jar <path to load-processor-jar> -c <path to config file> [--parse-format CPPAL|EE]\n")),(0,a.yg)("p",null,"where:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"heap size is the desired size of the heap. E.g. 16g")),(0,a.yg)("h5",{id:"heap-size-estimation"},"Heap Size Estimation"),(0,a.yg)("p",null,"The LV Mapping data requires around ",(0,a.yg)("inlineCode",{parentName:"p"},"1.5GB/day")," "),(0,a.yg)("p",null,"The meter data requires around ",(0,a.yg)("inlineCode",{parentName:"p"},"1GB/day")),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"3 day")," interval input data would require around ",(0,a.yg)("inlineCode",{parentName:"p"},"7.5GB")," "),(0,a.yg)("p",null,"Together with the process overhead, the recommended heap size is ",(0,a.yg)("inlineCode",{parentName:"p"},"12GB")))}m.isMDXComponent=!0}}]);