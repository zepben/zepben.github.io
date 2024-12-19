"use strict";(self.webpackChunkpowerfactory_model_service_doco=self.webpackChunkpowerfactory_model_service_doco||[]).push([[81],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=r,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4826:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},d="ms-powerfactory-model-service",p={unversionedId:"overview",id:"overview",title:"ms-powerfactory-model-service",description:"Power Factory Model Service",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/evolve/docs/powerfactory-model-service/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"someSidebar"},m={},s=[{value:"Starting \ud83d\ude80",id:"starting-",level:2},{value:"Information \ud83d\udccb",id:"information-",level:3},{value:"Installation \ud83d\udd27",id:"installation-",level:3},{value:"Main Config",id:"main-config",level:4},{value:"EWB Config",id:"ewb-config",level:4},{value:"Auth Config",id:"auth-config",level:4},{value:"PFD Config",id:"pfd-config",level:4},{value:"Database Config",id:"database-config",level:4},{value:"Scenario Database Config",id:"scenario-database-config",level:4},{value:"Feeder Colours Specification File",id:"feeder-colours-specification-file",level:4},{value:"Feeder Max Load Specification File",id:"feeder-max-load-specification-file",level:4},{value:"HV Customer Max Demand Specification File",id:"hv-customer-max-demand-specification-file",level:4},{value:"NMI List Specification File",id:"nmi-list-specification-file",level:4}],u={toc:s},c="wrapper";function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ms-powerfactory-model-service"},"ms-powerfactory-model-service"),(0,l.kt)("p",null,"Power Factory Model Service"),(0,l.kt)("h2",{id:"starting-"},"Starting \ud83d\ude80"),(0,l.kt)("p",null,"These instructions will allow you to get a copy of the project running\non your local machine for development and testing purposes and/or running a docker container as well."),(0,l.kt)("h3",{id:"information-"},"Information \ud83d\udccb"),(0,l.kt)("p",null,"To use this microservice, you must set the path of the config.json file as an argument at runtime.\nKeep in mind that within that config.json file you will need to configure a couple of variables that are mentioned later"),(0,l.kt)("h3",{id:"installation-"},"Installation \ud83d\udd27"),(0,l.kt)("p",null,"Initially you should download the repository"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git clone zepben/powerfactory-model-service")),(0,l.kt)("p",null,"Building the project should be done, using"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mvn clean install")),(0,l.kt)("p",null,"To run the project, you must set the config.json file as an argument at run time by passing its path to the --config option."),(0,l.kt)("p",null,"Inside config.json file you must initialize the next variables"),(0,l.kt)("h4",{id:"main-config"},"Main Config"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Var"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port the service will listen on"),(0,l.kt)("td",{parentName:"tr",align:null},"8089")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"feederColoursFile"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the feeder colours specification file"),(0,l.kt)("td",{parentName:"tr",align:null},"'./feeder_colors.json'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ewb"),(0,l.kt)("td",{parentName:"tr",align:null},"Config for connection to the energy-workbench-server"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#ewb-config"},"EWBConfig"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pfd"),(0,l.kt)("td",{parentName:"tr",align:null},"Config for connection to the power-factory-template-service"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pfd-config"},"PFDConfig"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"feederMaxLoadFilePath"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to feeder max load specification file"),(0,l.kt)("td",{parentName:"tr",align:null},"./max_load.csv")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hvcMaxDemandFilePath"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to hv customer max demand specification file"),(0,l.kt)("td",{parentName:"tr",align:null},"./HVC_Max_Demands.csv")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nmiList"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to nmi list specification file"),(0,l.kt)("td",{parentName:"tr",align:null},"./nmis.csv")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"databaseConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"Config for connection to the ptime-scale load database (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#database-config"},"DatabaseConfig"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scenarioDatabaseConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"Config for connection to the forcast scenario database (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#scenario-database-config"},"ScenarioDatabase"))))),(0,l.kt)("h4",{id:"ewb-config"},"EWB Config"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Var"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"Host for the energy-workbench-server"),(0,l.kt)("td",{parentName:"tr",align:null},"'127.0.0.1'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grpc_port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port for the energy-workbench-server is listening on for grpc requests"),(0,l.kt)("td",{parentName:"tr",align:null},"9014")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secure"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates if TLS should be enabled for the connection with the energy-workbench-server"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"caFilename"),(0,l.kt)("td",{parentName:"tr",align:null},"Filename of CA to use when verifying certificate of the energy-workbench-server. Leave unspecified to use system CAs."),(0,l.kt)("td",{parentName:"tr",align:null},"'./ewb_ca.cert'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth"),(0,l.kt)("td",{parentName:"tr",align:null},"Config for the authentication used for the connection with energy-workbench-server"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#auth-config"},"Auth Config"))))),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"caFilename")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"auth")," have no effect if ",(0,l.kt)("inlineCode",{parentName:"li"},"secure")," is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h4",{id:"auth-config"},"Auth Config"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Var"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientId"),(0,l.kt)("td",{parentName:"tr",align:null},"The client ID of the OAuth application to authenticate with"),(0,l.kt)("td",{parentName:"tr",align:null},"'notARealClientID'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,l.kt)("td",{parentName:"tr",align:null},"The client secret of the OAuth application to authenticate with"),(0,l.kt)("td",{parentName:"tr",align:null},"'notARealClientSecret'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username for a user of the OAuth application to authenticate with"),(0,l.kt)("td",{parentName:"tr",align:null},"'notARealUsername'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password for a user of the OAuth application to authenticate with"),(0,l.kt)("td",{parentName:"tr",align:null},"'Swordfish'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"URL to fetch certain token request fields from"),(0,l.kt)("td",{parentName:"tr",align:null},"'127.0.0.1:9000/ewb/auth'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audience"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier for set of APIs to request access for"),(0,l.kt)("td",{parentName:"tr",align:null},"'https://evolve-ewb/'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issuerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"Domain name of OAuth token provider"),(0,l.kt)("td",{parentName:"tr",align:null},"'zepben-dev.au.auth0.com'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authMethod"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of authentication API to use. Currently, this should be left unspecified."),(0,l.kt)("td",{parentName:"tr",align:null},"AuthMethod.OAuth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confCA"),(0,l.kt)("td",{parentName:"tr",align:null},"Filename of CA to use when verifying certificate of confAddress. Leave unspecified to use system CAs."),(0,l.kt)("td",{parentName:"tr",align:null},"'./conf_ca.cert'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authCA"),(0,l.kt)("td",{parentName:"tr",align:null},"Filename of CA to use when verifying certificate of issuerDomain. Leave unspecified to use system CAs."),(0,l.kt)("td",{parentName:"tr",align:null},"'./auth_ca.cert'")))),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are two OAuth grant types supported: password and client credentials.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"To use a password grant, specify ",(0,l.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"password"),". Ensure ",(0,l.kt)("inlineCode",{parentName:"li"},"clientId")," refers to an application that supports password grants."),(0,l.kt)("li",{parentName:"ul"},"To use a client credentials grant, specify ",(0,l.kt)("inlineCode",{parentName:"li"},"clientSecret"),". Ensure ",(0,l.kt)("inlineCode",{parentName:"li"},"clientId")," refers to an application that supports client credential grants.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"To use a client credentials grant with managed identity (EntraID only), ",(0,l.kt)("em",{parentName:"li"},"don't")," specify ",(0,l.kt)("inlineCode",{parentName:"li"},"clientSecret"),". Ensure ",(0,l.kt)("inlineCode",{parentName:"li"},"clientId")," refers to an\napplication that supports client credential grants."))))),(0,l.kt)("li",{parentName:"ul"},"There are two ways of specifying the token audience and the domain of the token issuer:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Specify ",(0,l.kt)("inlineCode",{parentName:"li"},"confAddress")," to point to a json file served over HTTPS. If specified, ",(0,l.kt)("inlineCode",{parentName:"li"},"confCA")," is used to verify the certificate."),(0,l.kt)("li",{parentName:"ul"},"Specify ",(0,l.kt)("inlineCode",{parentName:"li"},"audience")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"issuerDomain")," directly.")))),(0,l.kt)("h4",{id:"pfd-config"},"PFD Config"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Var"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"Host for the power-factory-template-service"),(0,l.kt)("td",{parentName:"tr",align:null},"'127.0.0.1'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port for the power-factory-template-service"),(0,l.kt)("td",{parentName:"tr",align:null},"9014")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secure"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates if TLS should be enabled for the connection with the energy-workbench-server"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"template"),(0,l.kt)("td",{parentName:"tr",align:null},"Filename of the Power Factory template to be used as the base of the model."),(0,l.kt)("td",{parentName:"tr",align:null},"'./template.pfd'")))),(0,l.kt)("h4",{id:"database-config"},"Database Config"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Var"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema of the timescale database holding load data"),(0,l.kt)("td",{parentName:"tr",align:null},"'schema'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"system"),(0,l.kt)("td",{parentName:"tr",align:null},"System of the timescale database holding load data"),(0,l.kt)("td",{parentName:"tr",align:null},"'generic'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of the timescale database holding load data"),(0,l.kt)("td",{parentName:"tr",align:null},"'PostgreSQL Unicode(x62)'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server"),(0,l.kt)("td",{parentName:"tr",align:null},"Host URL of the timescale database holding load data"),(0,l.kt)("td",{parentName:"tr",align:null},"'127.0.0.1'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"Username of the timescale database holding load data"),(0,l.kt)("td",{parentName:"tr",align:null},"'username'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password of the timescale database holding load data"),(0,l.kt)("td",{parentName:"tr",align:null},"'password'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"Database Name of the timescale database holding load data"),(0,l.kt)("td",{parentName:"tr",align:null},"'postgres'")))),(0,l.kt)("h4",{id:"scenario-database-config"},"Scenario Database Config"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Var"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"Host for the scenario database"),(0,l.kt)("td",{parentName:"tr",align:null},"'127.0.0.1'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port for the scenario database"),(0,l.kt)("td",{parentName:"tr",align:null},"'1234'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dbName"),(0,l.kt)("td",{parentName:"tr",align:null},"Database name for the scenario database"),(0,l.kt)("td",{parentName:"tr",align:null},"'dbName'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"Schema for the scenario database"),(0,l.kt)("td",{parentName:"tr",align:null},"'schema'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username for the scenario database"),(0,l.kt)("td",{parentName:"tr",align:null},"'username'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password for the scenario database"),(0,l.kt)("td",{parentName:"tr",align:null},"'password'")))),(0,l.kt)("h4",{id:"feeder-colours-specification-file"},"Feeder Colours Specification File"),(0,l.kt)("p",null,"This file is used to control the colours assigned to each feeder in the resulting DGS file. It is a json file that contains a mapping\nfrom feeder mrids to the colour number to assign for said feeder."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "feeder1" : 1,\n  "feeder2" : 2,\n  "feeder3" : 3\n}\n')),(0,l.kt)("h4",{id:"feeder-max-load-specification-file"},"Feeder Max Load Specification File"),(0,l.kt)("p",null,"This file is used when spread feeder max is set to true on model generation. Instead of linking load data to a database, a static value\nis assigned to them base off maximum load data provided."),(0,l.kt)("h4",{id:"hv-customer-max-demand-specification-file"},"HV Customer Max Demand Specification File"),(0,l.kt)("p",null,"This file is used to populate load data for HV customers."),(0,l.kt)("h4",{id:"nmi-list-specification-file"},"NMI List Specification File"),(0,l.kt)("p",null,"This file provides the full list of customers with time series data in the database."))}k.isMDXComponent=!0}}]);