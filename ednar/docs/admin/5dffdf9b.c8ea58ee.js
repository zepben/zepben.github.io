(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(98)),l={id:"ednar-reporting-service",title:"EDNAR Reporting Service",slug:"/ednar-reporting-service"},c={unversionedId:"ednar-reporting-service",id:"ednar-reporting-service",isDocsHomePage:!1,title:"EDNAR Reporting Service",description:"The EDNAR Reporting Service exposes an API which allows EDNAR server to:",source:"@site/docs\\ednar-reporting-service.md",slug:"/ednar-reporting-service",permalink:"/ednar/docs/admin/ednar-reporting-service",editUrl:"https://github.com/zepben/docs/ednar-reporting-service.md",version:"current",sidebar:"sidebar",previous:{title:"EDNAR Content Server",permalink:"/ednar/docs/admin/ednar-content-server"},next:{title:"EDNAR User Management Service",permalink:"/ednar/docs/admin/ednar-user-management-service"}},o=[{value:"Required Software",id:"required-software",children:[]},{value:"Installing EdnarReportingService",id:"installing-ednarreportingservice",children:[]},{value:"Uninstalling EdnarReportingService",id:"uninstalling-ednarreportingservice",children:[]},{value:"Configuring EdnarReportingService",id:"configuring-ednarreportingservice",children:[]}],d={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The EDNAR Reporting Service exposes an API which allows EDNAR server to:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Generate NAR PDF."),Object(i.a)("li",{parentName:"ul"},"Generate NAR attachment PDF."),Object(i.a)("li",{parentName:"ul"},"Generate customer list PDF."),Object(i.a)("li",{parentName:"ul"},"Generate the switching instruction PDF.")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"required-software"},"Required Software"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"At least Windows 7 operating system with SP1 or above is required"),Object(i.a)("li",{parentName:"ul"},".NET Framework 4.6.1 or higher"),Object(i.a)("li",{parentName:"ul"},"Aspose.Total"),Object(i.a)("li",{parentName:"ul"},"DevExpress.Reporting and DevExpress.WPF")),Object(i.a)("h2",{id:"installing-ednarreportingservice"},"Installing EdnarReportingService"),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"You need administrator privileges to install the service."))),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Login to the windows machine in which EdnarService needs to be installed."),Object(i.a)("li",{parentName:"ul"},"Create a folder ",Object(i.a)("inlineCode",{parentName:"li"},"EdnarReportingService"),"."),Object(i.a)("li",{parentName:"ul"},"Copy all the EdnarReportingService binaries from the ",Object(i.a)("inlineCode",{parentName:"li"},".zip")," file of the release to this folder."),Object(i.a)("li",{parentName:"ul"},"Copy the Aspose license file to folder ",Object(i.a)("inlineCode",{parentName:"li"},"EdnarReportingService"),"."),Object(i.a)("li",{parentName:"ul"},"Change the config file to make sure it is correct in the running environment."),Object(i.a)("li",{parentName:"ul"},"Run Powershell as an administrator and use it to navigate to the ",Object(i.a)("inlineCode",{parentName:"li"},"EdnarReportingService")," directory."),Object(i.a)("li",{parentName:"ul"},"Run  ",Object(i.a)("inlineCode",{parentName:"li"},".\\ednar-reporting-service.exe install")," and wait for a message to say that it was successfully installed."),Object(i.a)("li",{parentName:"ul"},"The EdnarReportingService windows service is now installed."),Object(i.a)("li",{parentName:"ul"},"Go to the Services console in windows."),Object(i.a)("li",{parentName:"ul"},"Make sure the ",Object(i.a)("inlineCode",{parentName:"li"},"EDNAR Reporting Service")," service is running. If not, start it."),Object(i.a)("li",{parentName:"ul"},"Check the properties of the ",Object(i.a)("inlineCode",{parentName:"li"},"EDNAR Reporting Service")," service to ensure that it is configured to start automatically.")),Object(i.a)("h2",{id:"uninstalling-ednarreportingservice"},"Uninstalling EdnarReportingService"),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"You need administrator privileges to uninstall the service."))),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Login to the windows machine in which EdnarReportingService is installed."),Object(i.a)("li",{parentName:"ul"},"Run Powershell as an administrator."),Object(i.a)("li",{parentName:"ul"},"Navigate to ",Object(i.a)("inlineCode",{parentName:"li"},"\\EdnarReportingService"),"."),Object(i.a)("li",{parentName:"ul"},"Run the command ",Object(i.a)("inlineCode",{parentName:"li"},".\\ednar-reporting-service.exe uninstall")),Object(i.a)("li",{parentName:"ul"},"You should get an uninstall successful message.")),Object(i.a)("h2",{id:"configuring-ednarreportingservice"},"Configuring EdnarReportingService"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Navigate to ",Object(i.a)("inlineCode",{parentName:"li"},"C:\\EdnarReportingService"),"."),Object(i.a)("li",{parentName:"ul"},"Open the file ",Object(i.a)("inlineCode",{parentName:"li"},"ednar-reporting-service.exe.config")," in the text editor of choice."),Object(i.a)("li",{parentName:"ul"},"Update the configuration items as specified below. Save and close the file. Restart EdnarReportingService for the new configuration to take effect.")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<add key="EdnarReportingServicePort" value="8010" />\n<add key="LogFileRelativePath" value="Logs\\" />\n<add key="ServerBaseUrl" value="http://+:" />\n<add key="LocalRequestOnly" value="true" />\n<add key="ReportTemplateFile" value="report-template\\\\schedule_job_report" />\n<add key="DocumentDefinitionFile" value="report-template\\\\PCA_SCHEDULED_JOB_HEADER.xml" />\n<add key="CustomersExcelTemplateFile" value="report-template\\\\CustomersReportTemplate.xlsx" />\n<add key="CustomersExcelTemplateFilePON" value="report-template\\\\CustomersReportTemplatePON.xlsx" />\n<add key="CITIHandCardWordTemplateFile" value="report-template\\\\CitiPower Hand Card.doc" />\n<add key="PCORHandCardWordTemplateFile" value="report-template\\\\Powercor Hand Card.doc" />\n<add key="MaxConcurrentRequestsLimit" value="2" />\n<add key="MaxQueueRequestsLimit" value="8" />\n<add key="AsposeLicense" value="Aspose.Total.lic" />\n<add key="EwbBaseUrl" value="http://localhost:9000/ewb" />\n<add key="CdmBaseUrl" value="http://localhost:9988/customers" />\n<add key="CdmUsername" value="xxx" />\n<add key="CdmPassword" value="yyy" />\n\x3c!-- Use ONE of these two connection string formats depending on database format (Oracle or MS SQL Server) --\x3e\n\x3c!-- SQL Server: --\x3e\n<add name="EdnarDB" connectionString="Server=my-sql-server;Database=ednar;User Id=ednar;Password=password;" />\n\x3c!-- Oracle: --\x3e\n<add name="EdnarDB" connectionString="Data Source=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.30.129)(PORT=1521))(CONNECT_DATA=(FAILOVER_MODE=(TYPE=select)(METHOD=basic))(SERVER=dedicated)(SERVICE_NAME=nms)));User Id=EDNAR;Password=password;" />\n<add name="DMSOracleDB" connectionString="Data Source=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.30.129)(PORT=1521))(CONNECT_DATA=(FAILOVER_MODE=(TYPE=select)(METHOD=basic))(SERVER=dedicated)(SERVICE_NAME=nms)));User Id=enmac;Password=password;" />\n<add name="PonOracleDB" connectionString="Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.30.129)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=nms)));User Id=po_connect;Password=DEV!43po_connect;" />\n')),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Config Item"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"EdnarReportingServicePort"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"EdnarReportingService port number")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"LogFileRelativePath"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path of the log files relative to the deployment directory. A path of Logs\\ will create the log file in ",Object(i.a)("inlineCode",{parentName:"td"},"C:\\EdnarService\\Logs")," if the deployment directory is ",Object(i.a)("inlineCode",{parentName:"td"},"C:\\EdnarService"),". Log file is created in text format and the rolling interval is set to a day.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"ServerBaseUrl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Base server URL that will be used by the client to send http requests e.g. https://+:.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"LocalRequestOnly"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The flag to set if only the local request is valid.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"ReportTemplateFile"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The switching instruction report template file path including the filename.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"DocumentDefinitionFile"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The switching instruction document definition XML file path including the filename.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CustomersExcelTemplateFile"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The customers report template file, including the path name.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CustomersExcelTemplateFilePON"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The customers report template file that will be used for PON, including the path name")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CITIHandCardWordTemplateFile"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The hand card template of CitiPower, including the path name")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"PCORHandCardWordTemplateFile"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The hand card template of Powercor, including the path name")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"MaxConcurrentRequestsLimit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum count of reports that will be created at the same time. This limits the memory consumption of the service.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"MaxQueueRequestsLimit"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum count of requests that will be put into queue once MaxConcurrentRequestsLimit has been reached. This affects users having to wait for a long time for the report to be generated. Instead, once the limit has been reached, the service will immediately return 503 Service Unavailable.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"AsposeLicense (optional)"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Aspose license file, including the path name. When not specified, the license should be on the same directory with the executable files.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"EwbBaseUrl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"HTTP base url of the Energy Workbench Server. Note: /ewb is not defined in the service. Hence; must be included in the base url.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CdmBaseUrl"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"HTTP base url of the customer data management service.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CdmUsername"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username for authentication with customer data management service.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CdmPassword"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password for authentication with customer data management service.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connection String - ",Object(i.a)("inlineCode",{parentName:"td"},"EdnarDB")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify the connection string for the EDNAR database, can be Oracle or MS SQL.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connection String - ",Object(i.a)("inlineCode",{parentName:"td"},"DMSOracleDB")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify the connection string for the DMS database in oracle.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connection String - ",Object(i.a)("inlineCode",{parentName:"td"},"PonOracleDB")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify the connection string for the PON database in oracle.")))),Object(i.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"The port number needs to be consistent with the EDNAR app server configuration."))))}s.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),b=n,u=m["".concat(l,".").concat(b)]||m[b]||p[b]||i;return a?r.a.createElement(u,c({ref:t},d,{components:a})):r.a.createElement(u,c({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var d=2;d<i;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);