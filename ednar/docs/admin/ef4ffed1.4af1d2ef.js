(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(141)),o={id:"dms",title:"DMS",slug:"/dms"},c={unversionedId:"dms",id:"version-4.15.2/dms",isDocsHomePage:!1,title:"DMS",description:"EDNAR uses the DMS WPM SOAP interface to commumicate with the DMS.",source:"@site/versioned_docs\\version-4.15.2\\dms.md",slug:"/dms",permalink:"/ednar/docs/admin/dms",editUrl:"https://github.com/zepben/versioned_docs/version-4.15.2/dms.md",version:"4.15.2",sidebar:"version-4.15.2/sidebar",previous:{title:"Hardware Specification",permalink:"/ednar/docs/admin/hardware-specification"},next:{title:"EDNAR API Server",permalink:"/ednar/docs/admin/ednar-api-server"}},u=[{value:"Context Diagram",id:"context-diagram",children:[]},{value:"Functionality",id:"functionality",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={toc:u};function s(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"EDNAR uses the DMS WPM SOAP interface to commumicate with the DMS. "),Object(i.a)("hr",null),Object(i.a)("h2",{id:"context-diagram"},"Context Diagram"),Object(i.a)("p",null,Object(i.a)("img",{alt:"Screenshot",src:n(205).default})),Object(i.a)("hr",null),Object(i.a)("h2",{id:"functionality"},"Functionality"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},'When a NAR is moved to "Accepted" state, EDNAR automatically triggers a request to the DMS to create a switching schedule. The NAR fields defined in the EDNAR DMS Mapping file are sent to the DMS with the request to create a switching schedule.')),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},'On receiving a request to create a schedule from EDNAR, the DMS creates a planned Switching Schedule at "Created" status with all the appropriate Header information populated, as per the above EDNAR DMS mapping file.')),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},'On auto creation of the DMS Schedule the DMS job reference id ("J" number) is sent back to EDNAR.'))),Object(i.a)("hr",null),Object(i.a)("h2",{id:"configuration"},"Configuration"),Object(i.a)("p",null,"The DMS endpoint is configured in the EDNAR API configuration file. More information on configuration can be found on ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"./ednar-api-server-configuration"}),"API Server Configuration"),"."),Object(i.a)("p",null,"Each customer will need to supply a mapping of EDNAR fields to the corresponding DMS job header fields. Contact Zepben for more information on this."))}s.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},205:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/DMSIntegrationContextDiagram-93b3e2c2cd3759165e94d8c3d880b841.png"}}]);