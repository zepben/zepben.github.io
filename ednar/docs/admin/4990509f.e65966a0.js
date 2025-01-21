(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),c=(a(0),a(243)),l={id:"ednar-dms-agent",title:"EDNAR DMS Agent",slug:"/ednar-dms-agent"},i={unversionedId:"ednar-dms-agent",id:"ednar-dms-agent",isDocsHomePage:!1,title:"EDNAR DMS Agent",description:"The EDNAR DMS Agent is a standalone Java application that acts as the middleware between the EDNAR App Server and the DMS. Details on the functionality and workflows can be found on the DMS Integration page.",source:"@site/docs\\ednar-dms-agent.md",slug:"/ednar-dms-agent",permalink:"/ednar/docs/admin/next/ednar-dms-agent",editUrl:"https://github.com/zepben/docs/ednar-dms-agent.md",version:"current",sidebar:"sidebar",previous:{title:"EDNAR Reporting Service",permalink:"/ednar/docs/admin/next/ednar-reporting-service"},next:{title:"EWB",permalink:"/ednar/docs/admin/next/ewb"}},b=[{value:"Configuration",id:"configuration",children:[{value:"Sample Configuration Files",id:"sample-configuration-files",children:[]}]},{value:"Running the DMS Agent",id:"running-the-dms-agent",children:[]}],o={toc:b};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"The EDNAR DMS Agent is a standalone Java application that acts as the middleware between the EDNAR App Server and the DMS. Details on the functionality and workflows can be found on the ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"./dms"}),"DMS Integration")," page."),Object(c.a)("hr",null),Object(c.a)("h2",{id:"configuration"},"Configuration"),Object(c.a)("p",null,"The DMS Agent requires configuration on the EDNAR App Server and on the EDNAR DMS Agent itself. The App Server configuration required can be found in the ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"./ednar-api-server-configuration#dms-config"}),"API Server Configuration")," page."),Object(c.a)("p",null,"The DMS Agent can either be configured in Direct Mode or Client-Server Mode. In Direct Mode, only one instance of the DMS Agent is required. In Client-Server mode, there are 2 instances of the DMS Agent - one acting as the Server, and one acting as the Client. All three modes have different configurations."),Object(c.a)("p",null,"To use the DMS Agent, an API Client must be created that the Agent can use for authentication. This API Client requires the ",Object(c.a)("inlineCode",{parentName:"p"},"UPDATE_FROM_DMS")," privilege for all applicable access types. More information on creating API Clients can be found on the ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"./api-clients"}),"API Clients")," page."),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},"Configuration is specified in a JSON file.")),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"mode")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Operation mode of the agent. Supported values are: DIRECT, SERVER, CLIENT"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"ednar")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object holding EDNAR app server config ",Object(c.a)("br",null),"Refer to ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#ednar-config"}),Object(c.a)("strong",{parentName:"a"},"ednar options"))," below."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"dms")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object holding DMS config ",Object(c.a)("br",null),"Refer to ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#dms-config"}),Object(c.a)("strong",{parentName:"a"},"dms options"))," below."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"If mode is DIRECT or CLIENT")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"http")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object holding HTTP config ",Object(c.a)("br",null),"Refer to ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#http-config"}),Object(c.a)("strong",{parentName:"a"},"http options"))," below."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"If mode is DIRECT or SERVER")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"webSocket")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object holding Web Socket config ",Object(c.a)("br",null),"Refer to ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#web-socket-config"}),Object(c.a)("strong",{parentName:"a"},"web socket options"))," below."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"If mode is CLIENT or SERVER")))),Object(c.a)("h6",{id:"ednar-config"},"EDNAR Config"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"host")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The host name of the EDNAR App Server."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"port")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The port the EDNAR App Server is listening on."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"9002")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"useTls")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to enable TLS over HTTP."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"clientId")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"API client ID to authenticate to the EDNAR App Server."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"If mode is DIRECT or CLIENT"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"clientSecret")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"API client secret to authenticate to the EDNAR App Server."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"If mode is DIRECT or CLIENT"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"verifyCertificate")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to trust all https certificates for EDNAR App Server URLs."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"True")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"readTimeout")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The timeout in ms before it is determined the EDNAR App Server failed to respond."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"connectionTimeout")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The timeout in ms before it is deemed that it failed to connect to the EDNAR App Server."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")))),Object(c.a)("h6",{id:"dms-config"},"DMS Config"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"url")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"The SOAP endpoint of PowerOn Fusion listening for WPM SOAP messages."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"connectTimeout")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"The timeout in ms before the SOAP client deems it failed to connect to the server."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"10000")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"readTimeout")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"The timeout in ms before the SOAP client deems the server failed to respond."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"10000")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"listenerPort")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"The port the EDNAR will listen on for outbound WPM SOAP messages."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"listenerPath")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"The path EDNAR will accept outbound WPM SOAP messages."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"listenerLogRequests")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Boolean flag that will enable SOAP request access log."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"cancelScheduleSendsCancel")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If set to true, cancelling a NAR will send a CancelSchedule request to DMS."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"true")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"cancelScheduleSendsUpdate")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If set to true, cancelling a NAR will send an UpdateSchedule to DMS as part of the cancel request."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"cancelJobSendsCancel")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If set to true, cancelling an AOR will send a CancelJob and UpdateDocument request to DMS."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"true")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"cancelJobSendsUpdate")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If set to true, cancelling an AOR will send an UpdateJob and UpdateDocument to DMS."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"mapper")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Points to a valid .kts EDNAR <-> DMS Mapper script file."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"aorDocRefSuffix")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"String value to append to the end of the Agent-generated DocRef ID."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'""')))),Object(c.a)("h6",{id:"http-config"},"HTTP Config"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"host")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The network interface this host binds to as an IP address or a hostname. If 0.0.0.0, then bind to all interfaces."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"localhost")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"port")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The port for the server to listen on."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"9901")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"useTls")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to enable TLS over HTTP."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"keyStorePath")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to a Java Key Store that contains credentials for TLS. Guides are available online for converting SSL certificates into a .JKS Java Keystore file."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If useTls is True"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"keyStorePassword")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password to access the Java Key Store above."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If useTls is True"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"privateKeyAlias")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The alias to the private key to use for TLS, contained within the Java Key Store above."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If useTls is True"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"privateKeyPassword")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The password to the private key to use for TLS, contained within the Java Key Store above."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"If useTls is True"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h6",{id:"web-socket-config"},"Web Socket Config"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},"Configuration for CLIENT mode.")),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"host")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The host name of the DMS Agent server."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"port")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The port the DMS Agent server is listening on."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"9901")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"useTls")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to enable TLS over HTTP."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"verifyCertificate")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag to trust all https certificates for DMS Agent server URLs."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"True")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"readTimeout")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The timeout in ms before it is determined the DMS Agent server failed to respond."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"connectionTimeout")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The timeout in ms before it is deemed that it failed to connect to the DMS Agent server."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")))),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},"Configuration for SERVER mode.")),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"readTimeout")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The timeout in ms before it is determined the DMS Agent client failed to respond."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"connectionTimeout")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The timeout in ms before it is deemed that it failed to connect to the Dms Agent client."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")))),Object(c.a)("h3",{id:"sample-configuration-files"},"Sample Configuration Files"),Object(c.a)("h5",{id:"direct"},"Direct"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mode": "DIRECT",\n  "ednar": {\n    "host": "localhost",\n    "port": 5501,\n    "useTls": false,\n    "clientId": "<generated API client ID>",\n    "clientSecret": "<generated API client secret>",\n    "verifyCertificate": false,\n    "connectionTimeout": 10000,\n    "readTimeout": 10000\n  },\n  "http": {\n    "useTls": false,\n    "keyStorePath": "path to key store",\n    "keyStorePassword": "key store password",\n    "privateKeyAlias": "key alias",\n    "privateKeyPassword": "key password",\n    "port": 8082,\n    "host": "localhost"\n  },\n  "dms": {\n    "url": "http://<dms host>:<dms port>/enmac/SOAP",\n    "mapper": "C:\\\\path\\\\to\\\\CustomerDmsMapper.kts",\n    "listenerPort": 12321,\n    "listenerPath": "/WPMSoap",\n    "listenerLogRequests": true,\n    "cancelScheduleSendsCancel": true,\n    "cancelScheduleSendsUpdate": true,\n    "cancelJobSendsCancel": true,\n    "cancelJobSendsUpdate": false,\n    "connectTimeout": 10000,\n    "readTimeout": 10000,\n    "aorDocRefSuffix": "-aor"\n  }\n}\n')),Object(c.a)("h5",{id:"client"},"Client"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mode": "CLIENT",\n  "ednar": {\n    "host": "localhost",\n    "port": 5501,\n    "useTls": false,\n    "clientId": "<generated API client ID>",\n    "clientSecret": "<generated API client secret>",\n    "verifyCertificate": false,\n    "connectionTimeout": 1000,\n    "readTimeout": 1000\n  },\n  "dms": {\n    "url": "http://<dms host>:<dms port>/enmac/SOAP",\n    "mapper": "C:\\\\path\\\\to\\\\CustomerDmsMapper.kts",\n    "listenerPort": 12321,\n    "listenerPath": "/WPMSoap",\n    "listenerLogRequests": true,\n    "cancelScheduleSendsCancel": true,\n    "cancelScheduleSendsUpdate": true,\n    "cancelJobSendsCancel": true,\n    "cancelJobSendsUpdate": false,\n    "connectTimeout": 10000,\n    "readTimeout": 10000,\n    "aorDocRefSuffix": "-aor"\n  },\n  "webSocket": {\n    "host": "<DMS Agent Server host>",\n    "port": 8082,\n    "useTls": true,\n    "verifyCertificate": false,\n    "connectTimeout": 10000,\n    "readTimeout": 10000\n  }\n}\n')),Object(c.a)("h5",{id:"server"},"Server"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mode": "SERVER",\n  "ednar": {\n    "host": "localhost",\n    "port": 5501,\n    "useTls": false,\n    "clientId": "<generated API client ID>",\n    "clientSecret": "<generated API client secret>",\n    "verifyCertificate": false,\n    "connectionTimeout": 1000,\n    "readTimeout": 1000\n  },\n  "http": {\n    "useTls": false,\n    "keyStorePath": "path to key store",\n    "keyStorePassword": "key store password",\n    "privateKeyAlias": "key alias",\n    "privateKeyPassword": "key password",\n    "port": 8082,\n    "host": "localhost"\n  },\n  "webSocket": {\n    "connectTimeout": 10000,\n    "readTimeout": 10000\n  }\n}\n')),Object(c.a)("h2",{id:"running-the-dms-agent"},"Running the DMS Agent"),Object(c.a)("p",null,"The EDNAR DMS Agent can be run in much the same way as the other EDNAR Java applications. To run the agent in any of the modes, the following command can be used:"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"java -jar ednar-dms-agent-VERSION.jar -c <path to config.json>")))}O.isMDXComponent=!0},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),j=O(a),p=n,m=j["".concat(l,".").concat(p)]||j[p]||d[p]||c;return a?r.a.createElement(m,i({ref:t},o,{components:a})):r.a.createElement(m,i({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=j;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);