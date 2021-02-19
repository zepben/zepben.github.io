(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{181:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/EDNAR_WebAPIServer-82589524b87e890e7322c439bfb72820.png"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(98)),o={id:"ednar-api-server",title:"EDNAR API Server",slug:"/ednar-api-server"},l={unversionedId:"ednar-api-server",id:"ednar-api-server",isDocsHomePage:!1,title:"EDNAR API Server",description:"The EDNAR Web API server exposes many end points which are consumed by the EDNAR web client to provide functionality to the end user. When authentication is configured, all requests to this server must contain a valid JWT.",source:"@site/docs\\ednar-api-server.md",slug:"/ednar-api-server",permalink:"/ednar/docs/admin/ednar-api-server",editUrl:"https://github.com/zepben/docs/ednar-api-server.md",version:"current",sidebar:"sidebar",previous:{title:"DMS",permalink:"/ednar/docs/admin/dms"},next:{title:"EDNAR API Server Configuration",permalink:"/ednar/docs/admin/ednar-api-server-configuration"}},s=[{value:"Required Software",id:"required-software",children:[]},{value:"Starting and Stopping the Web Server",id:"starting-and-stopping-the-web-server",children:[{value:"Start",id:"start",children:[]},{value:"Stop",id:"stop",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Database Object Management",id:"database-object-management",children:[]},{value:"Physical Location on Server",id:"physical-location-on-server",children:[]},{value:"Deployment Steps",id:"deployment-steps",children:[]},{value:"Rollback Steps",id:"rollback-steps",children:[]}],c={toc:s};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The EDNAR Web API server exposes many end points which are consumed by the EDNAR web client to provide functionality to the end user. When authentication is configured, all requests to this server must contain a valid JWT."),Object(i.a)("p",null,"EDNAR Web API server is hosted on Vertx web server (",Object(i.a)("inlineCode",{parentName:"p"},"https://vertx.io"),")"),Object(i.a)("p",null,Object(i.a)("img",{alt:"Screenshot",src:a(181).default})),Object(i.a)("hr",null),Object(i.a)("h2",{id:"required-software"},"Required Software"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Windows operating system (Windows Server 2012)"),Object(i.a)("li",{parentName:"ul"},"Java SE 11 x64")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"starting-and-stopping-the-web-server"},"Starting and Stopping the Web Server"),Object(i.a)("h3",{id:"start"},"Start"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Open Powershell"),Object(i.a)("li",{parentName:"ul"},"Navigate to the folder that contains the EDNAR Web API binaries"),Object(i.a)("li",{parentName:"ul"},"Run the command java -jar ./ednar/ednar.jar -c ./ednar/config.json")),Object(i.a)("h3",{id:"stop"},"Stop"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Focus on the Powershell window."),Object(i.a)("li",{parentName:"ul"},"Press the key combination Ctrl + C."),Object(i.a)("li",{parentName:"ul"},"Close the Powershell window.")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"configuration"},"Configuration"),Object(i.a)("p",null,"Please see ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"./ednar-api-server-configuration"}),"EDNAR API Server Configuration")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"database-object-management"},"Database Object Management"),Object(i.a)("p",null,"EDNAR uses Ebean (",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://ebean.io/"}),"https://ebean.io/"),") as the Object Relational Mapper. It uses Liquibase (",Object(i.a)("inlineCode",{parentName:"p"},"http://www.liquibase.org/"),") for database schema creation and migration."),Object(i.a)("p",null,"When EDNAR starts, it runs a set of liquibase scripts to perform schema creation and migration. Unfortunately, Oracle doesn't provide transactions for DDL statements (other RDBMS claim to support this). This means there is a potential for the DB to end up in an incomplete state if for some reason a migration fails. In this case, restoring from a DB backup or manual intervention will be required."),Object(i.a)("hr",null),Object(i.a)("h2",{id:"physical-location-on-server"},"Physical Location on Server"),Object(i.a)("p",null,"The physical location of EDNAR Web API binaries is C:\\EDNAR\\Server. A different location can be chosen if desired. However, this document assumes the use of this location."),Object(i.a)("hr",null),Object(i.a)("h2",{id:"deployment-steps"},"Deployment Steps"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Stop server"),Object(i.a)("li",{parentName:"ul"},"Backup Oracle database"),Object(i.a)("li",{parentName:"ul"},"Backup existing files from previous version"),Object(i.a)("li",{parentName:"ul"},"Extract files from new release package into the Web API folder"),Object(i.a)("li",{parentName:"ul"},"Make any appropriate configuration changes as per release notes"),Object(i.a)("li",{parentName:"ul"},"Run any database scripts as per release notes"),Object(i.a)("li",{parentName:"ul"},"Start server")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"rollback-steps"},"Rollback Steps"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Stop server"),Object(i.a)("li",{parentName:"ul"},"Restore Oracle database from database backup."),Object(i.a)("li",{parentName:"ul"},"Restore from backup files from previous Web API version"),Object(i.a)("li",{parentName:"ul"},"Start server")),Object(i.a)("hr",null))}p.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return a?n.a.createElement(m,l({ref:t},c,{components:a})):n.a.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);