"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[6487],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||y[h]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n(67294)},65488:function(e,t,n){n(67294),n(72389)},31193:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=(n(65488),n(85162),["components"]),l={id:"query-network-state-client",title:"Query Network State Client"},c=void 0,u={unversionedId:"query-network-state-client",id:"version-0.43.1/query-network-state-client",title:"Query Network State Client",description:"The QueryNetworkStateClient will allow you to interact with a server running the QueryNetworkStateService. It provides an object-oriented",source:"@site/versioned_docs/version-0.43.1/query-network-state-client.mdx",sourceDirName:".",slug:"/query-network-state-client",permalink:"/evolve/docs/python-sdk/0.43.1/query-network-state-client",draft:!1,tags:[],version:"0.43.1",frontMatter:{id:"query-network-state-client",title:"Query Network State Client"},sidebar:"someSidebar",previous:{title:"EWB Database Paths",permalink:"/evolve/docs/python-sdk/0.43.1/sdk-ewb-file-paths"},next:{title:"Query Network State Service",permalink:"/evolve/docs/python-sdk/0.43.1/query-network-state-service"}},s={},p=[{value:"Creating a gRPC channel",id:"creating-a-grpc-channel",level:2},{value:"Using a gRPC channel with your client",id:"using-a-grpc-channel-with-your-client",level:2},{value:"Using your client to query the network state",id:"using-your-client-to-query-the-network-state",level:2},{value:"Querying current network state",id:"querying-current-network-state",level:3}],y={toc:p},h="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(h,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryNetworkStateClient")," will allow you to interact with a server running the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryNetworkStateService"),". It provides an object-oriented\nwrapper for the gRPC library, with the ability to retrieve information about the state of the network. This is done with the following 3 steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a gRPC connection to the server."),(0,a.kt)("li",{parentName:"ol"},"Create an instance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"QueryNetworkStateClient")," using your gRPC connection."),(0,a.kt)("li",{parentName:"ol"},"Use your ",(0,a.kt)("inlineCode",{parentName:"li"},"QueryNetworkStateClient")," to retrieve the state of the network.")),(0,a.kt)("h2",{id:"creating-a-grpc-channel"},"Creating a gRPC channel"),(0,a.kt)("p",null,"The channel gRPC channel can be directly from the gRPC library, or using our ",(0,a.kt)("inlineCode",{parentName:"p"},"GrpcChannelBuilder")," helper. At its most basic, this can be achieved with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.evolve import GrpcChannelBuilder\n\nchannel = GrpcChannelBuilder().for_address(host, port).build()\n")),(0,a.kt)("p",null,"For more in depth options for using a gRPC channel, see the ",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC documentation"),", or look up a tutorial."),(0,a.kt)("h2",{id:"using-a-grpc-channel-with-your-client"},"Using a gRPC channel with your client"),(0,a.kt)("p",null,"Using your gRPC channel with the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryNetworkStateClient")," is as simple as passing it to the constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.evolve import QueryNetworkStateClient\n\nclient = QueryNetworkStateClient(channel)\n")),(0,a.kt)("h2",{id:"using-your-client-to-query-the-network-state"},"Using your client to query the network state"),(0,a.kt)("p",null,"Now that you have a client, you can use it to query the state of the network on the connected server."),(0,a.kt)("h3",{id:"querying-current-network-state"},"Querying current network state"),(0,a.kt)("p",null,"The current state of the network between two date/times can be retrieved using the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_current_states")," function on the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryNetworkStateClient"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime, timedelta\n\nasync for events in client.get_current_states(1, datetime.now() - timedelta(days=1), datetime.now()):\n    # process the list of events here.\n")))}d.isMDXComponent=!0}}]);