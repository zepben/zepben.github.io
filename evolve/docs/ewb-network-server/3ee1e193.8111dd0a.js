(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),b=a(7),r=(a(0),a(156)),l={id:"overview",title:"Overview",slug:"/"},c={unversionedId:"overview",id:"version-2.5.0/overview",isDocsHomePage:!1,title:"Overview",description:"The EWB Network Server provides API access for operating on an EWB Network.",source:"@site/versioned_docs/version-2.5.0/overview.md",slug:"/",permalink:"/evolve/docs/network-server/2.5.0/",version:"2.5.0",sidebar:"version-2.5.0/sidebar",next:{title:"API",permalink:"/evolve/docs/network-server/2.5.0/api"}},i=[{value:"Command Line Options",id:"command-line-options",children:[]}],d={toc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The EWB Network Server provides API access for operating on an EWB Network."),Object(r.b)("p",null,"This document describes how to configure and run the EWB Network Server"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"command-line-options"},"Command Line Options"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Configuration options for the EWB Network Server are provided as command line arguments.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-auth, --patch-auth-header <AUTH_HEADER>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the HTTP auth header to use with the patch server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"None"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-c, --current-date <DATE>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the date to use as the current date"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Current Date"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-cors, --cors <CORS_DEFINITION>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set the cors definition"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-d, --days-to-search <NUM_DAYS>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the number of days to search for a network database in the EWB data root"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-debug, --debug-routing <FILE>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enable route debugging. Request bodies will be saved to the specified file"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"None"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-e, --ewb-data-root <DIRECTORY>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the directory of the EWB data root"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-ga, --grpc-auth <CLIENT_AUTH> <TRUST_PATH>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"CLIENT_AUTH")," controls the client authentication requirements (OPTIONAL/REQUIRE). ",Object(r.b)("inlineCode",{parentName:"td"},"TRUST_PATH")," specifies the path to the trusted certificate for verifying the remote endpoint's certificate"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"None"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-gp, --grpc-port <PORT>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The port number for the gRPC server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-gt, --grpc-tls <CERT_PATH> <KEY_PATH>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"CERT_PATH")," specifies the path to the certificate to use, and ",Object(r.b)("inlineCode",{parentName:"td"},"KEY_PATH")," specifies the path to the private key for the certificate."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"None"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-h, --help")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shows the help message"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-o, --output <FILE>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the network build status file (including path)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ewb-network-server-status.json"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-p, --port <PORT>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the port number the REST API will listen on."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-pa, --patch-api <API_ENDPOINT>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the patch server end point (including server, port and url)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"None"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-s3, --s3-bucket <BUCKET>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the AWS S3 bucket name to create the output in. If specified, the default S3 connection will be used"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"None"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-t, --timeout <SECONDS>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the timeout (in seconds) for receiving data from the patch API. Zero to disable"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"60"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-cpi, --connection-point-identifier <IDENTIFIER>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"specifies the connection point identifier to use"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"NMI"))))))}o.isMDXComponent=!0}}]);