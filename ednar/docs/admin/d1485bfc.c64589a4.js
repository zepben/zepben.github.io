(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{198:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return p}));var t=n(3),a=n(7),i=(n(0),n(243)),o={id:"ednar-user-management-service",title:"EDNAR User Management Service",slug:"/ednar-user-management-service"},s={unversionedId:"ednar-user-management-service",id:"version-4.21.0/ednar-user-management-service",isDocsHomePage:!1,title:"EDNAR User Management Service",description:"EdnarUserManagementService is a background process to synchronize the users and qualifications from SAP to EDNAR users. This task will be done every day at the pre-defined time.",source:"@site/versioned_docs\\version-4.21.0\\ednar-user-management-service.md",slug:"/ednar-user-management-service",permalink:"/ednar/docs/admin/4.21.0/ednar-user-management-service",editUrl:"https://github.com/zepben/versioned_docs/version-4.21.0/ednar-user-management-service.md",version:"4.21.0",sidebar:"version-4.21.0/sidebar",previous:{title:"EDNAR Reporting Service",permalink:"/ednar/docs/admin/4.21.0/ednar-reporting-service"},next:{title:"EWB",permalink:"/ednar/docs/admin/4.21.0/ewb"}},c=[],u={toc:c};function p(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(i.a)("p",null,"EdnarUserManagementService is a background process to synchronize the users and qualifications from SAP to EDNAR users. This task will be done every day at the pre-defined time. "),Object(i.a)("p",null,"The task will process two sections: one is synchronizing users, the other is synchronizing qualification which could be switched off by the configuration."),Object(i.a)("hr",null),Object(i.a)("p",null,"The implementation of the EDNAR Reporting Service is bespoke, as its operation requires integration with other corporate systems."))}p.isMDXComponent=!0},243:function(e,r,n){"use strict";n.d(r,"a",(function(){return m}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s({},r,{},e)),n},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=t,f=d["".concat(o,".").concat(m)]||d[m]||l[m]||i;return n?a.a.createElement(f,s({ref:r},u,{components:n})):a.a.createElement(f,s({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);