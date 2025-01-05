"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[263],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||v[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r(67294)},65488:function(e,t,r){r(67294),r(72389)},33787:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(65488),r(85162),["components"]),s={id:"query-network-state-service",title:"Query Network State Service"},c=void 0,l={unversionedId:"query-network-state-service",id:"version-0.43.0/query-network-state-service",title:"Query Network State Service",description:"An implementation of the QueryNetworkStateService will provide an object-oriented wrapper for the gRPC library, with the ability to retrieve information about",source:"@site/versioned_docs/version-0.43.0/query-network-state-service.mdx",sourceDirName:".",slug:"/query-network-state-service",permalink:"/evolve/docs/python-sdk/0.43.0/query-network-state-service",draft:!1,tags:[],version:"0.43.0",frontMatter:{id:"query-network-state-service",title:"Query Network State Service"},sidebar:"someSidebar",previous:{title:"Query Network State Client",permalink:"/evolve/docs/python-sdk/0.43.0/query-network-state-client"},next:{title:"Update Network State Client",permalink:"/evolve/docs/python-sdk/0.43.0/update-network-state-client"}},u={},p=[{value:"Creating callbacks",id:"creating-callbacks",level:2},{value:"on_get_current_states",id:"on_get_current_states",level:3},{value:"Registering callbacks",id:"registering-callbacks",level:2},{value:"Registering the service",id:"registering-the-service",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}],v={toc:p},d="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryNetworkStateService")," will provide an object-oriented wrapper for the gRPC library, with the ability to retrieve information about\nthe state of the network. This is done with the following 3 steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create callbacks which will be called when gRPC messages are received from a client."),(0,o.kt)("li",{parentName:"ol"},"Register the callbacks with an instance of the ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryNetworkStateService"),"."),(0,o.kt)("li",{parentName:"ol"},"Add your ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryNetworkStateService")," instance as a gRPC service.")),(0,o.kt)("h2",{id:"creating-callbacks"},"Creating callbacks"),(0,o.kt)("p",null,"Each supported message in ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryNetworkStateService")," requires a callback, which will be triggered when any client messages are received."),(0,o.kt)("h3",{id:"on_get_current_states"},"on_get_current_states"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"on_get_current_states")," callback is triggered for each request for the current states between two date/times, and should return an async iterator of the\ncurrent state events that occurred between those date/times (inclusive)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\nfrom typing import AsyncGenerator, Iterable\n\nfrom zepben.evolve import CurrentStateEvent\n\n\nasync def on_get_current_states(from_datetime: datetime, to_datetime: datetime) -> AsyncGenerator[Iterable[CurrentStateEvent], None]:\n    events = []\n    # build the batch of events\n    yield events\n")),(0,o.kt)("h2",{id:"registering-callbacks"},"Registering callbacks"),(0,o.kt)("p",null,"Registering the callbacks with the service is as simple as passing them into the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryNetworkStateService")," constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"service = QueryNetworkStateService(on_get_current_states)\n")),(0,o.kt)("h2",{id:"registering-the-service"},"Registering the service"),(0,o.kt)("p",null,"For the above code to have any effect, you need to register the service with a gRPC server. Once this has been done, you should start to receive callbacks for\neach request sent from a gRPC client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import grpc\nfrom zepben.protobuf.ns.network_state_pb2_grpc import add_QueryNetworkStateServiceServicer_to_server\n\n\nserver = grpc.aio.server()\nhost = 'localhost:50051'\nserver.add_insecure_port(host)\n\nadd_QueryNetworkStateServiceServicer_to_server(service, server)\n\nawait server.start()\n")),(0,o.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,o.kt)("p",null,"Putting each of the steps above together, you can build the scaffold of a working application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\nfrom typing import AsyncGenerator, Iterable\n\nimport grpc\nfrom zepben.protobuf.ns.network_state_pb2_grpc import add_QueryNetworkStateServiceServicer_to_server\n\nfrom zepben.evolve import CurrentStateEvent, QueryNetworkStateService\n\nclass QueryNetworkStateServiceImpl:\n\n    def __init__(self):\n        self.service = QueryNetworkStateService(self.on_get_current_states)\n\n    async def on_get_current_states(self, from_datetime: datetime, to_datetime: datetime) -> AsyncGenerator[Iterable[CurrentStateEvent], None]:\n        events = []\n        # build the batch of events\n        yield events\n\nasync def main():\n    server = grpc.aio.server()\n    host = 'localhost:50051'\n    server.add_insecure_port(host)\n\n    service = QueryNetworkStateServiceImpl().service\n    add_QueryNetworkStateServiceServicer_to_server(service, server)\n\n    await server.start()\n")))}m.isMDXComponent=!0}}]);