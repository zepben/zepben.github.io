"use strict";(self.webpackChunkopendss_model_processor_doco=self.webpackChunkopendss_model_processor_doco||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"overview",title:"Overview",slug:"/"},s="OpenDSS Model Processor",p={unversionedId:"overview",id:"overview",title:"Overview",description:"This is a processor for converting EWB CIM models into OpenDSS models.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/ewb/docs/opendss-model-processor/",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"sidebar",next:{title:"Configuration",permalink:"/ewb/docs/opendss-model-processor/configuration"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"EntraID M2M Auth",id:"entraid-m2m-auth",level:3},{value:"Fixed time models",id:"fixed-time-models",level:3},{value:"Calibration",id:"calibration",level:4},{value:"Point-in-time model",id:"point-in-time-model",level:4}],u={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"opendss-model-processor"},"OpenDSS Model Processor"),(0,i.kt)("p",null,"This is a processor for converting EWB CIM models into OpenDSS models."),(0,i.kt)("h1",{id:"docker-image"},"Docker image"),(0,i.kt)("p",null,"The docker image relies on the ",(0,i.kt)("inlineCode",{parentName:"p"},"start-processor.sh")," script as an entrypoint for the container. This script enables us to pass settings (",(0,i.kt)("inlineCode",{parentName:"p"},"-D*"),") to the JVM through\nenvironment variables. It is currently only used for our logback settings for pushing log messages to the results database, based on the provided logback configuration."),(0,i.kt)("p",null,"The valid environment variable settings are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"JVM_LOGBACK_ARGS=-Dlogdb.host=<host of log database> -Dlogdb.port=<db port> -Dlogdb.name=<name of database with logs table> -Dlogdb.user=<user> -Dlogdb.password=<password>\n")),(0,i.kt)("p",null,"You can also set heap settings via ",(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_TOOL_OPTIONS"),". These will be automatically picked up by the JVM."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"JAVA_TOOL_OPTIONS=-Xmx8g -Xms1g\n")),(0,i.kt)("p",null,"To pass them to the container use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export JVM_LOGBACK_ARGS=...\nexport JAVA_TOOL_OPTIONS=...\ndocker run -e JVM_LOGBACK_ARGS=$JVM_LOGBACK_ARGS -e JAVA_TOOL_OPTIONS=$JAVA_TOOL_OPTIONS opendss-generator ...\n")),(0,i.kt)("h1",{id:"developing"},"Developing"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The model processor retrieves configuration from either the CLI, environment variables, or the Job message.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Job")," message has a field ",(0,i.kt)("inlineCode",{parentName:"p"},"generatorConfig")," that consists of a base64, compressed JSON object built from the ",(0,i.kt)("inlineCode",{parentName:"p"},"GeneratorConfig"),"\nin hosting-capacity-utils. This config should be preferred for passing config to the model processor, and can be utilised from the\ncommandline via the ",(0,i.kt)("inlineCode",{parentName:"p"},"-gc")," argument."),(0,i.kt)("h3",{id:"entraid-m2m-auth"},"EntraID M2M Auth"),(0,i.kt)("p",null,"In order to use EntraID Managed Identity tokens, select ",(0,i.kt)("inlineCode",{parentName:"p"},"ewb-mode")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"M2M")," and provide ",(0,i.kt)("inlineCode",{parentName:"p"},"ewb-client-id"),". Skip the ",(0,i.kt)("inlineCode",{parentName:"p"},"ewb-client-secret")," (do not provide it at all!)."),(0,i.kt)("h3",{id:"fixed-time-models"},"Fixed time models"),(0,i.kt)("p",null,"To generate a fixed time model you can produce either a calibration model or a normal interval data model. A calibration model\nsources its data from a specific table with 5 minute AMI meter data ",(0,i.kt)("inlineCode",{parentName:"p"},"pqv"),", which can be used for calibration of the model.\nWhile an interval data model uses the available load data typically used within the models to produce a point-in-time model."),(0,i.kt)("h4",{id:"calibration"},"Calibration"),(0,i.kt)("p",null,"Calibration models are used with real AMI meter data to help determine tap settings for transformers within the network.\nIf the user has enough AMI data within their feeders it is possible to use the results from these calibration models to estimate\ntransformer tap settings, which can then be re-applied to the network for future load flows.\nThe PQV table must have entries for enough NMI's/meters in the feeder, and an EnergyMeter should be created for each desired EnergyConsumer you want to calibrate\nwith for accurate calibration. You can configure which EnergyMeters are created by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"energyConsumerMeters")," option or ",(0,i.kt)("inlineCode",{parentName:"p"},"energy_consumer_meters")," table."),(0,i.kt)("p",null,"To create a calibration model you must specify a single time to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--time")," property and the ",(0,i.kt)("inlineCode",{parentName:"p"},"--calibration")," flag."),(0,i.kt)("h4",{id:"point-in-time-model"},"Point-in-time model"),(0,i.kt)("p",null,"The point-in-time model can be used to debug a single time step of a yearly model. This setting will query the ",(0,i.kt)("inlineCode",{parentName:"p"},"interval_data")," table at\nthe requested time, offset by the configured timezone (",(0,i.kt)("inlineCode",{parentName:"p"},"--timezone"),"). To create a point-in-time model you must specify a single time to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"--time")," property (NOTE: not ",(0,i.kt)("inlineCode",{parentName:"p"},"--times"),")."))}f.isMDXComponent=!0}}]);