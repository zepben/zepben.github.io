"use strict";(self.webpackChunkewb_network_server_doco=self.webpackChunkewb_network_server_doco||[]).push([[1067],{5480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var a=n(8168),r=(n(6540),n(5680));const l={id:"overview",title:"Overview",slug:"/"},i=void 0,g={unversionedId:"overview",id:"version-2.5.0/overview",title:"Overview",description:"The EWB Network Server provides API access for operating on an EWB Network.",source:"@site/versioned_docs/version-2.5.0/overview.md",sourceDirName:".",slug:"/",permalink:"/evolve/docs/network-server/2.5.0/",draft:!1,tags:[],version:"2.5.0",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"version-2.5.0/sidebar",next:{title:"API",permalink:"/evolve/docs/network-server/2.5.0/api"}},d={},o=[{value:"Command Line Options",id:"command-line-options",level:2}],p={toc:o},N="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(N,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The EWB Network Server provides API access for operating on an EWB Network."),(0,r.yg)("p",null,"This document describes how to configure and run the EWB Network Server"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"command-line-options"},"Command Line Options"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Configuration options for the EWB Network Server are provided as command line arguments.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Usage"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-auth, --patch-auth-header <AUTH_HEADER>")),(0,r.yg)("td",{parentName:"tr",align:null},"the HTTP auth header to use with the patch server"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-c, --current-date <DATE>")),(0,r.yg)("td",{parentName:"tr",align:null},"the date to use as the current date"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Current Date"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-cors, --cors <CORS_DEFINITION>")),(0,r.yg)("td",{parentName:"tr",align:null},"set the cors definition"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-d, --days-to-search <NUM_DAYS>")),(0,r.yg)("td",{parentName:"tr",align:null},"the number of days to search for a network database in the EWB data root"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"0"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-debug, --debug-routing <FILE>")),(0,r.yg)("td",{parentName:"tr",align:null},"enable route debugging. Request bodies will be saved to the specified file"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-e, --ewb-data-root <DIRECTORY>")),(0,r.yg)("td",{parentName:"tr",align:null},"the directory of the EWB data root"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-ga, --grpc-auth <CLIENT_AUTH> <TRUST_PATH>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"CLIENT_AUTH")," controls the client authentication requirements (OPTIONAL/REQUIRE). ",(0,r.yg)("inlineCode",{parentName:"td"},"TRUST_PATH")," specifies the path to the trusted certificate for verifying the remote endpoint's certificate"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-gp, --grpc-port <PORT>")),(0,r.yg)("td",{parentName:"tr",align:null},"The port number for the gRPC server"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-gt, --grpc-tls <CERT_PATH> <KEY_PATH>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"CERT_PATH")," specifies the path to the certificate to use, and ",(0,r.yg)("inlineCode",{parentName:"td"},"KEY_PATH")," specifies the path to the private key for the certificate."),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-h, --help")),(0,r.yg)("td",{parentName:"tr",align:null},"shows the help message"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-o, --output <FILE>")),(0,r.yg)("td",{parentName:"tr",align:null},"the network build status file (including path)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ewb-network-server-status.json"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-p, --port <PORT>")),(0,r.yg)("td",{parentName:"tr",align:null},"the port number the REST API will listen on."),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-pa, --patch-api <API_ENDPOINT>")),(0,r.yg)("td",{parentName:"tr",align:null},"the patch server end point (including server, port and url)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-s3, --s3-bucket <BUCKET>")),(0,r.yg)("td",{parentName:"tr",align:null},"the AWS S3 bucket name to create the output in. If specified, the default S3 connection will be used"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-t, --timeout <SECONDS>")),(0,r.yg)("td",{parentName:"tr",align:null},"the timeout (in seconds) for receiving data from the patch API. Zero to disable"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"60"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-cpi, --connection-point-identifier <IDENTIFIER>")),(0,r.yg)("td",{parentName:"tr",align:null},"specifies the connection point identifier to use"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NMI"))))))}m.isMDXComponent=!0}}]);