(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=O(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||j[p]||c;return a?r.a.createElement(m,b({ref:t},o,{components:a})):r.a.createElement(m,b({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),c=(a(0),a(101)),i={id:"config",title:"Configuration",slug:"/config"},b={unversionedId:"config",id:"version-1.8.0/config",isDocsHomePage:!1,title:"Configuration",description:"Configuration for the Evolve App Server is specified in a JSON file. The server requires a configuration file to start.",source:"@site/versioned_docs/version-1.8.0/config.md",slug:"/config",permalink:"/evolve/docs/evolve-app-server/config",editUrl:"https://github.com/zepben/versioned_docs/version-1.8.0/config.md",version:"1.8.0",sidebar:"version-1.8.0/sidebar",previous:{title:"Overview",permalink:"/evolve/docs/evolve-app-server/"},next:{title:"API Overview",permalink:"/evolve/docs/evolve-app-server/api"}},l=[],o={toc:l};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Configuration for the Evolve App Server is specified in a JSON file. The server requires a configuration file to start.\nThe config file can contain the following JSON object:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Key"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"server")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds http related config. ",Object(c.a)("br",null),"Refer ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#server-config"}),Object(c.a)("strong",{parentName:"a"},"server config options"))," below"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"ewb")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds the ewb server related config. ",Object(c.a)("br",null),"Refer ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#ewb-config"}),Object(c.a)("strong",{parentName:"a"},"ewb config options"))," below"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"database")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds the database config. ",Object(c.a)("br",null),"Refer ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#database-config"}),Object(c.a)("strong",{parentName:"a"},"database config options"))," below"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"auth")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object that holds the config for the client authentication method ",Object(c.a)("br",null),"Refer ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#auth-config"}),Object(c.a)("strong",{parentName:"a"},"auth_config options"))," below"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(c.a)("h6",{id:"server-config"},"Server Config"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"host")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The host for the server."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"localhost"')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"port")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The port for the server to listen on."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"433 if ",Object(c.a)("inlineCode",{parentName:"td"},"useTLS")," is true, otherwise 80")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"useTls")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable HTTPS on the server"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"keyStorePath")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path to a Java Key Store that contains credentials for TLS"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Will disable TLS if missing")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"keyStorePassword")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password to access the Java Key Store above"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'""')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"privateKeyAlias")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The alias to the private key to use for TLS, contained within the Java Key Store above"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'""')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"privateKeyPassword")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The password to the private key to use for TLS, contained within the Java Key Store above"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'""')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"webClientHost")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The host for the web client, if it is different from the server proper and deployed separately. This is to enable CORS, and is helpful in a development environment."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"The same as ",Object(c.a)("inlineCode",{parentName:"td"},"host"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"webRoot")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The relative path in the file system to the root of the app server's static assets."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"static"')))),Object(c.a)("h6",{id:"ewb-config"},"EWB Config"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"host")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The host for EWB server"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"localhost"')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"port")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The port on which to find the EWB server"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"9000")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"protocol")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The protocol to use when making requests to the EWB server - HTTP or HTTPS"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"HTTP"')))),Object(c.a)("h6",{id:"database-config"},"Database Config"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"url")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The url to use to connect to the database"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"jdbc:h2:mem:mem;DB_CLOSE_DELAY=-1"')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"driver")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The database driver to use"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"org.h2.Driver"')),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"createSchemaOnStart")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"If set to true, the app server will attempt to initialise the database schema on startup."),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"sqlDirs")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),'A list of paths to directories containing ".sql" files. On startup, every ".sql" file will be executed against the database'),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.a)("h6",{id:"auth-config"},"Auth Config"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Option"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"method")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the authentication method: ",Object(c.a)("inlineCode",{parentName:"td"},"auth0"),", ",Object(c.a)("inlineCode",{parentName:"td"},"self"),", or ",Object(c.a)("inlineCode",{parentName:"td"},"none")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Yes")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"issuer")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The issuer domain for authentication with ",Object(c.a)("inlineCode",{parentName:"td"},"auth0")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only if ",Object(c.a)("inlineCode",{parentName:"td"},"method")," is ",Object(c.a)("inlineCode",{parentName:"td"},"auth0"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"audience")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The audience for authentication with ",Object(c.a)("inlineCode",{parentName:"td"},"auth0")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only if ",Object(c.a)("inlineCode",{parentName:"td"},"method")," is ",Object(c.a)("inlineCode",{parentName:"td"},"auth0"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"clientId")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The clientId for authentication with ",Object(c.a)("inlineCode",{parentName:"td"},"self")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only if ",Object(c.a)("inlineCode",{parentName:"td"},"method")," is ",Object(c.a)("inlineCode",{parentName:"td"},"self"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"clientSecret")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The clientSecret for authentication with ",Object(c.a)("inlineCode",{parentName:"td"},"self")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only if ",Object(c.a)("inlineCode",{parentName:"td"},"method")," is ",Object(c.a)("inlineCode",{parentName:"td"},"self"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("inlineCode",{parentName:"td"},"additionalRedirectURIs")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"An optional list of redirect URIs that will be considered valid, in addition to the server host URI, used for authentication with ",Object(c.a)("inlineCode",{parentName:"td"},"self")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only if ",Object(c.a)("inlineCode",{parentName:"td"},"method")," is ",Object(c.a)("inlineCode",{parentName:"td"},"self"))))),Object(c.a)("p",null,"The following is a sample configuration file:"),Object(c.a)("h4",{id:"sample-configuration-file"},"Sample Configuration File"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "server": {\n    "useTls": true,\n    "keyStorePath": "path/to/keystore.jks",\n    "privateKeyAlias": "alias",\n    "keyStorePassword": "password",\n    "privateKeyPassword": "password",\n    "port": 7654,\n    "webRoot": "static"\n  },\n  "ewb": {\n    "host": "localhost",\n    "port": 9000,\n    "protocol": "HTTP"\n  },\n  "database": {\n    "url": "jdbc:h2:mem:mem;DB_CLOSE_DELAY=-1",\n    "driver": "org.h2.Driver"\n  },\n  "auth": {\n    "method": "self",\n    "clientId": "clientId",\n    "clientSecret": "clientSecret",\n    "additionalRedirectURIs": [\n      "https://localhost:1234"\n    ]\n  }\n}\n')))}O.isMDXComponent=!0}}]);