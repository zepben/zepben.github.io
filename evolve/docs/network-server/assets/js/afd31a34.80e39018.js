"use strict";(self.webpackChunkewb_network_server_doco=self.webpackChunkewb_network_server_doco||[]).push([[6202],{7761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=n(8168),r=(n(6540),n(5680));const l={id:"overview",title:"Overview",slug:"/"},i=void 0,d={unversionedId:"overview",id:"version-2.13.0/overview",title:"Overview",description:"The EWB Network Server provides API access for operating on an EWB Network.",source:"@site/versioned_docs/version-2.13.0/overview.md",sourceDirName:".",slug:"/",permalink:"/evolve/docs/network-server/2.13.0/",draft:!1,tags:[],version:"2.13.0",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"sidebar",next:{title:"API",permalink:"/evolve/docs/network-server/2.13.0/api"}},g={},o=[{value:"Command Line Options",id:"command-line-options",level:2}],p={toc:o},N="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(N,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The EWB Network Server provides API access for operating on an EWB Network."),(0,r.yg)("p",null,"This document describes how to configure and run the EWB Network Server"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"command-line-options"},"Command Line Options"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Configuration options for the EWB Network Server are provided as command line arguments.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Usage"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-auth, --patch-auth-header <AUTH_HEADER>")),(0,r.yg)("td",{parentName:"tr",align:null},"The HTTP auth header to use with the patch server"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-c, --current-date <DATE>")),(0,r.yg)("td",{parentName:"tr",align:null},"The date to use as the current date"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Current Date"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-cors, --cors <CORS_DEFINITION>")),(0,r.yg)("td",{parentName:"tr",align:null},"Set the cors definition"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-cpi, --connection-point-identifier <IDENTIFIER>")),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the connection point identifier to use"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NMI"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-dc,--disable-customers")),(0,r.yg)("td",{parentName:"tr",align:null},"Disables the loading of customers."),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-debug, --debug-routing <FILE>")),(0,r.yg)("td",{parentName:"tr",align:null},"Enable route debugging. Request bodies will be saved to the specified file"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-dsc,--days-to-search-customer <NUM_DAYS_CUSTOMER>")),(0,r.yg)("td",{parentName:"tr",align:null},"The number of days prior to the network database being loaded to search for a customers database in the EWB data root."),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-dsd,--days-to-search-diagram <NUM_DAYS_DIAGRAM>")),(0,r.yg)("td",{parentName:"tr",align:null},"The number of days prior to the network database being loaded to search for a diagrams database in the EWB data root."),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-dsn,--days-to-search-network <NUM_DAYS_NETWORK>")),(0,r.yg)("td",{parentName:"tr",align:null},"The number of days to search for a network database in the EWB data root."),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-e, --ewb-data-root <DIRECTORY>")),(0,r.yg)("td",{parentName:"tr",align:null},"The directory of the EWB data root"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-ga, --grpc-auth <CLIENT_AUTH> <TRUST_PATH>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"CLIENT_AUTH")," controls the client authentication requirements (OPTIONAL/REQUIRE). ",(0,r.yg)("inlineCode",{parentName:"td"},"TRUST_PATH")," specifies the path to the trusted certificate for verifying the remote endpoint's certificate"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-gp, --grpc-port <PORT>")),(0,r.yg)("td",{parentName:"tr",align:null},"The port number for the gRPC server"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-gt, --grpc-tls <CERT_PATH> <KEY_PATH>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"CERT_PATH")," specifies the path to the certificate to use, and ",(0,r.yg)("inlineCode",{parentName:"td"},"KEY_PATH")," specifies the path to the private key for the certificate."),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-h, --help")),(0,r.yg)("td",{parentName:"tr",align:null},"Shows the help message"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-nd,--network-date <NETWORK_DATE>")),(0,r.yg)("td",{parentName:"tr",align:null},"Specify an exact network-model to load rather than using the newest model available."),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Latest available model")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-o, --output <FILE>")),(0,r.yg)("td",{parentName:"tr",align:null},"The network build status file (including path)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ewb-network-server-status.json"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-p, --port <PORT>")),(0,r.yg)("td",{parentName:"tr",align:null},"The port number the REST API will listen on."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-pa, --patch-api <API_ENDPOINT>")),(0,r.yg)("td",{parentName:"tr",align:null},"The patch server end point (including server, port and url)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-s3, --s3-bucket <BUCKET>")),(0,r.yg)("td",{parentName:"tr",align:null},"The AWS S3 bucket name to create the output in. If specified, the default S3 connection will be used"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-t, --timeout <SECONDS>")),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout (in seconds) for receiving data from the patch API. Zero to disable"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"60"))))))}m.isMDXComponent=!0}}]);