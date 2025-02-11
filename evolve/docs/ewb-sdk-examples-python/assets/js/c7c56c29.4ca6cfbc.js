"use strict";(self.webpackChunkewb_sdk_examples_python_doco=self.webpackChunkewb_sdk_examples_python_doco||[]).push([[520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,k=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},8912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));n(5488),n(5162);const a={id:"examples-connecting-to-ewb",title:"Connecting to the EWB Server"},i=void 0,c={unversionedId:"examples-connecting-to-ewb",id:"examples-connecting-to-ewb",title:"Connecting to the EWB Server",description:"The examples/applications related to using the Energy Workbench (EWB) server requires connection to the EWB server. You can use various connection scenarios,",source:"@site/docs/connecting-to-ewb.mdx",sourceDirName:".",slug:"/examples-connecting-to-ewb",permalink:"/evolve/docs/ewb-sdk-examples-python/examples-connecting-to-ewb",draft:!1,tags:[],version:"current",frontMatter:{id:"examples-connecting-to-ewb",title:"Connecting to the EWB Server"},sidebar:"someSidebar",next:{title:"Interacting With a Network Model",permalink:"/evolve/docs/ewb-sdk-examples-python/"}},l={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Connecting Without TLS or Authentication",id:"connecting-without-tls-or-authentication",level:2},{value:"Connecting Over TLS Without User Credentials",id:"connecting-over-tls-without-user-credentials",level:2},{value:"Connecting Over TLS With User Credentials",id:"connecting-over-tls-with-user-credentials",level:3},{value:"Connecting Over TLS With Client Credentials",id:"connecting-over-tls-with-client-credentials",level:3},{value:"Connecting Using Access Token",id:"connecting-using-access-token",level:3}],u={toc:s},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The examples/applications related to using the Energy Workbench (EWB) server requires connection to the EWB server. You can use various connection scenarios,\nincluding insecure connections (for development and demos), secure connections over TLS, secure connections with user or client credentials, and secure connections with access token.\nThis tutorial provides a guide to establish a secure connection to the EWB server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Ensure that the required dependencies are installed, and replace the placeholder values such as ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"client ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"client secret")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," with your actual configuration."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Make sure you have the required dependencies installed by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install zepben.evolve==<VERSION>\npip install zepben.auth==<VERSION>\n")),(0,o.kt)("p",null,"The latest version can be found on the Python package index:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/zepben.evolve/"},"zepben.evolve")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/zepben.auth/"},"zepben.auth"))),(0,o.kt)("p",null,"Also ensure that you have included the necessary imports at the beginning of your script, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.auth import AuthMethod\nfrom zepben.evolve import connect_insecure, NetworkConsumerClient, connect_tls, connect_with_password, connect_with_secret, connect_with_token, SyncNetworkConsumerClient\n")),(0,o.kt)("h2",{id:"connecting-without-tls-or-authentication"},"Connecting Without TLS or Authentication"),(0,o.kt)("p",null,"The plaintext_connection uses ",(0,o.kt)("strong",{parentName:"p"},"connect_insecure")," function that communicates with the gRPC service over plaintext to connect to an RPC server without TLS or authentication.\n",(0,o.kt)("strong",{parentName:"p"},"Note"),": This type of connection is only suitable/recommended for development and demonstration purposes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'async def plaintext_connection():\n    insecure_channel = connect_insecure(host="hostname", rpc_port=1234)\n    client = NetworkConsumerClient(insecure_channel)\n    grpc_result = await client.get_network_hierarchy()\n    print(grpc_result.result)\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"INPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"host")," (String, default localhost) - The hostname where the gRPC service is hosted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rpc_port")," (int, default 50051) - The port of the gRPC service")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OUTPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A plaintext connection to the gRPC service")),(0,o.kt)("h2",{id:"connecting-over-tls-without-user-credentials"},"Connecting Over TLS Without User Credentials"),(0,o.kt)("p",null,"The secure_connection uses ",(0,o.kt)("strong",{parentName:"p"},"connect_tls")," function that communicates with the gRPC service using SSL/TLS transport security to connect to the EWB server over TLS, but does not use/require user or client credentials."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'async def secure_connection():\n    secure_channel = connect_tls(host="hostname", rpc_port=1234, ca_filename=None)\n    client = NetworkConsumerClient(secure_channel)\n    grpc_result = await client.get_network_hierarchy()\n    print(grpc_result.result)\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"INPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"host")," (String, default localhost) - The hostname where the gRPC service is hosted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rpc_port")," (int, default 50051) - The port of the gRPC service")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OPTIONAL")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ca_filename")," (String, default None) - The filename of a truststore containing additional trusted root certificates. This parameter is optional and defaults to null, in which case only the system CAs are used to verify certificates.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OUTPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An encrypted connection to the gRPC service")),(0,o.kt)("h3",{id:"connecting-over-tls-with-user-credentials"},"Connecting Over TLS With User Credentials"),(0,o.kt)("p",null,"The secure_connection_with_user_credentials connects to the EWB server over TLS with user credentials. It uses ",(0,o.kt)("strong",{parentName:"p"},"connect_with_password")," function that communicates with the gRPC service using SSL/TLS transport security and the OAuth password grant flow.\nThe authentication config is fetched from https://hostname/auth or https://hostname/ewb/auth by default, which includes the domain of the OAuth token provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'async def secure_connection_with_user_credentials():\n    secure_channel = connect_with_password("client ID", "username", "password", "hostname", 1234)\n    client = NetworkConsumerClient(secure_channel)\n    grpc_result = await client.get_network_hierarchy()\n    print(grpc_result.result)\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"INPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"host")," (String, default localhost) - The hostname where the gRPC service is hosted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rpc_port")," (int, default 50051) - The port of the gRPC service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"client_id")," (String) - The client ID of the OAuth application to authenticate for"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"username")," (String) - The username of the user to authenticate with"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"password")," (String) - The password of the user to authenticate with"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"verify_conf")," (Union ","[Boolean, String]",", default True) - Passed through to ",(0,o.kt)("inlineCode",{parentName:"li"},"requests.get()")," when fetching the authentication configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"verify_auth")," (Union ","[Boolean, String]",", default True) - Passed through to ",(0,o.kt)("inlineCode",{parentName:"li"},"requests.post()")," when fetching access tokens")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OPTIONAL")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"conf_address")," (String, default None) - The address of the authentication configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ca_filename")," (String, default None) - The filename of a truststore containing additional trusted root certificates. This parameter is optional and defaults to null, in which case only the system CAs are used to verify certificates.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OUTPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An Auth0-authenticated, encrypted connection to the gRPC service. If the authentication configuration specifies that no authentication is required, a non-authenticated, encrypted connection is returned instead.")),(0,o.kt)("h3",{id:"connecting-over-tls-with-client-credentials"},"Connecting Over TLS With Client Credentials"),(0,o.kt)("p",null,"The secure_connection_with_client_credentials connects to the EWB server over TLS with client credentials. It uses ",(0,o.kt)("strong",{parentName:"p"},"connect_with_secret")," function that communicates with the gRPC service using SSL/TLS transport security and the OAuth client credentials flow.\nThe authentication config is fetched from https://hostname/auth or https://hostname/ewb/auth by default, which includes the domain of the OAuth token provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'async def secure_connection_with_client_credentials():\n    secure_channel = connect_with_secret("client ID", "client secret", "hostname", 1234)\n    client = NetworkConsumerClient(secure_channel)\n    grpc_result = await client.get_network_hierarchy()\n    print(grpc_result.result)\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"INPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"host")," (String, default localhost) - The hostname where the gRPC service is hosted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rpc_port")," (int, default 50051) - The port of the gRPC service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"client_id")," (String) - The client ID of the OAuth application to authenticate for"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"client_secret")," (String) - The client secret of the 0Auth application to authenticate for")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OPTIONAL")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"conf_address")," (String, default None) - The address of the authentication configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"verify_conf")," (Union ","[Boolean, String]",", default True) - Passed through to ",(0,o.kt)("inlineCode",{parentName:"li"},"requests.get()")," when fetching the authentication configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"verify_auth")," (Union ","[Boolean, String]",", default True) - Passed through to ",(0,o.kt)("inlineCode",{parentName:"li"},"requests.post()")," when fetching access tokens"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ca_filename")," (String, default None) - The filename of a truststore containing additional trusted root certificates. This parameter is optional and defaults to null, in which case only the system CAs are used to verify certificates.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OUTPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An Auth0-authenticated, encrypted connection to the gRPC service. If the authentication configuration specifies that no authentication is required, a non-authenticated, encrypted connection is returned instead.")),(0,o.kt)("h3",{id:"connecting-using-access-token"},"Connecting Using Access Token"),(0,o.kt)("p",null,"The connect_using_token function establishes a connection to the EWB server using an access token for authentication."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'async def connect_using_token():\n    channel = connect_with_token(host=c["host"], access_token=c["access_token"], rpc_port=c["rpc_port"])\n    client = NetworkConsumerClient(channel)\n    grpc_result = await client.get_network_hierarchy()\n    print(grpc_result.result)\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"INPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"host")," (String, default localhost) - The hostname where the gRPC service is hosted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rpc_port")," (int, default 50051) - The port of the gRPC service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"access_token")," (String) - The token string of the client generated using Evolve App"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ca_filename")," (Optional, default None) - he filename of a truststore containing additional trusted root certificates. This parameter is optional\nand defaults to null, in which case only the system CAs are used to verify certificates.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OUTPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An authenticated, encrypted connection to the gRPC service based on OAuth2 flows. If the authentication configuration specifies that no\nauthentication is required, a non-authenticated, encrypted connection is returned instead.")))}h.isMDXComponent=!0}}]);