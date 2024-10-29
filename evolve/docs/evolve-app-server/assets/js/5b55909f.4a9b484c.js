"use strict";(self.webpackChunkewb_app_server_doco=self.webpackChunkewb_app_server_doco||[]).push([[5245],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},v="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=u(t),f=o,d=v["".concat(s,".").concat(f)]||v[f]||c[f]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[v]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1935:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const a={id:"overview",title:"Overview",slug:"/"},i=void 0,l={unversionedId:"overview",id:"version-2.1.0/overview",title:"Overview",description:"The Evolve App allows users to visualise, search, and perform analysis on an energy distribution network in a",source:"@site/versioned_docs/version-2.1.0/overview.md",sourceDirName:".",slug:"/",permalink:"/evolve/docs/evolve-app-server/2.1.0/",draft:!1,tags:[],version:"2.1.0",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"sidebar",next:{title:"Configuration",permalink:"/evolve/docs/evolve-app-server/2.1.0/config"}},s={},u=[{value:"Build",id:"build",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run",id:"run",level:2},{value:"Test",id:"test",level:2},{value:"API",id:"api",level:2}],p={toc:u},v="wrapper";function c(e){let{components:r,...t}=e;return(0,o.kt)(v,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Evolve App allows users to visualise, search, and perform analysis on an energy distribution network in a\nbrowser. The Evolve App Server handles all requests from the Evolve Web Client - providing the client with\nauthentication and configuration information, as well as persisting user preferences and session state. The Evolve App\nServer also acts as a gateway between the Evolve Web Client and the Energy Workbench Server, making sure the user is\nauthenticated before passing through requests for map tiles or network data to EWB."),(0,o.kt)("p",null,"This document describes how to configure and run the Evolve App Server."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"To build and package, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn clean package\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configuration for the Evolve App Server is specified in a JSON file. The server requires a configuration file to start."),(0,o.kt)("p",null,"For details on how to write a configuration file, refer to ",(0,o.kt)("a",{parentName:"p",href:"/evolve/docs/evolve-app-server/2.1.0/config"},"Configuration"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"To start the server using the resulting jar, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar evolve-app-server.jar -c path/to/config.json\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"To run tests, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn clean test\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"When the server is running, it exposes an API than can be used by a client to find information about the app,\nor pass through requests to EWB."),(0,o.kt)("p",null,"For thorough API documentation, refer to ",(0,o.kt)("a",{parentName:"p",href:"/evolve/docs/evolve-app-server/2.1.0/api"},"API"),"."),(0,o.kt)("hr",null))}c.isMDXComponent=!0}}]);