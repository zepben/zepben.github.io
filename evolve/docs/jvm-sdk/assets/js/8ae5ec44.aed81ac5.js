"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[6757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4334);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),r=n(7294),l=n(4334),i=n(2466),o=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=v({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=null!=s?s:c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var a;const t=p.indexOf(e.currentTarget)+1;n=null!=(a=p[t])?a:p[0];break}case"ArrowLeft":{var r;const t=p.indexOf(e.currentTarget)-1;n=null!=(r=p[t])?r:p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function f(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return r.createElement(f,(0,a.Z)({key:String(t)},e))}},5404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={id:"update-network-state-client",title:"Update Network State Client"},s=void 0,u={unversionedId:"update-network-state-client",id:"version-0.24.0/update-network-state-client",title:"Update Network State Client",description:"The UpdateNetworkStateClient will allow you to interact with a server running the UpdateNetworkStateService (e.g. EWB). It provides an object-oriented",source:"@site/versioned_docs/version-0.24.0/update-network-state-client.mdx",sourceDirName:".",slug:"/update-network-state-client",permalink:"/evolve/docs/jvm-sdk/0.24.0/update-network-state-client",draft:!1,tags:[],version:"0.24.0",frontMatter:{id:"update-network-state-client",title:"Update Network State Client"},sidebar:"someSidebar",previous:{title:"Query Network State Service",permalink:"/evolve/docs/jvm-sdk/0.24.0/query-network-state-service"},next:{title:"Update Network State Service",permalink:"/evolve/docs/jvm-sdk/0.24.0/update-network-state-service"}},p={},c=[{value:"Creating a gRPC channel",id:"creating-a-grpc-channel",level:2},{value:"Using a gRPC channel with your client",id:"using-a-grpc-channel-with-your-client",level:2},{value:"Using your client to update the network state",id:"using-your-client-to-update-the-network-state",level:2},{value:"Updating current network state",id:"updating-current-network-state",level:3},{value:"Updating current switch state",id:"updating-current-switch-state",level:4},{value:"Adding cuts",id:"adding-cuts",level:4},{value:"Removing cuts",id:"removing-cuts",level:4},{value:"Adding jumpers",id:"adding-jumpers",level:4},{value:"Removing jumpers",id:"removing-jumpers",level:4},{value:"Batch result responses",id:"batch-result-responses",level:3}],m={toc:c},d="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateNetworkStateClient")," will allow you to interact with a server running the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateNetworkStateService")," (e.g. EWB). It provides an object-oriented\nwrapper for the gRPC library, with the ability to update information about the state of the network. This is done with the following 3 steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a gRPC connection to the server."),(0,r.kt)("li",{parentName:"ol"},"Create an instance of the ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateNetworkStateClient")," using your gRPC connection."),(0,r.kt)("li",{parentName:"ol"},"Use your ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateNetworkStateClient")," to update the state of the network.")),(0,r.kt)("h2",{id:"creating-a-grpc-channel"},"Creating a gRPC channel"),(0,r.kt)("p",null,"The channel gRPC channel can be directly from the gPRC library, or the channel wrapped in our ",(0,r.kt)("inlineCode",{parentName:"p"},"GrpcChannel")," helper, which implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoClosable")," interface\nand performs shutdown operations for you. At its most basic, this can be achieved with:"),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.zepben.evolve.streaming.grpc.GrpcChannel;\nimport io.grpc.ManagedChannelBuilder;\n\nvar channel = new GrpcChannel(ManagedChannelBuilder.forAddress(host, port).usePlaintext().build());\n"))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import com.zepben.evolve.streaming.grpc.GrpcChannel\nimport io.grpc.ManagedChannelBuilder\n\nval channel = GrpcChannel(ManagedChannelBuilder.forAddress(host, port).usePlaintext().build())\n")))),(0,r.kt)("p",null,"For more in depth options for using a gRPC channel, see the ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC documentation"),", or look up a tutorial."),(0,r.kt)("h2",{id:"using-a-grpc-channel-with-your-client"},"Using a gRPC channel with your client"),(0,r.kt)("p",null,"Using your gRPC channel with the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateNetworkStateClient")," is as simple as passing it to the constructor."),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient;\n\nvar client = new UpdateNetworkStateClient(channel);\n"))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient\n\nval client = UpdateNetworkStateClient(channel)\n")))),(0,r.kt)("h2",{id:"using-your-client-to-update-the-network-state"},"Using your client to update the network state"),(0,r.kt)("p",null,"Now that you have a client, you can use it to update the state of the network on the connected server."),(0,r.kt)("h3",{id:"updating-current-network-state"},"Updating current network state"),(0,r.kt)("p",null,"The current state of the network can be updated using the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentStates")," function on the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateNetworkStateClient"),". All events passed in the same list will\nbe executed as a batch."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The current implementation only supports updating the current state of switches. In the future we will add more functionality such as cuts and jumpers.")),(0,r.kt)("h4",{id:"updating-current-switch-state"},"Updating current switch state"),(0,r.kt)("p",null,"The current state of switches can be updating by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"SwitchStateEvent")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentStates")," function."),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.zepben.evolve.streaming.data.SwitchStateEvent;\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\n\nvar event1 = new SwitchStateEvent("event1", LocalDateTime.now(), "switch_id_1", SwitchAction.OPEN);\nvar response = client.setCurrentStates(1, List.of(event1));\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.zepben.evolve.streaming.data.SwitchStateEvent\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient\n\nval event1 = SwitchStateEvent("event1", LocalDateTime.now(), "switch_id_1", SwitchAction.OPEN)\nval response = client.setCurrentStates(1, listOf(event1))\n')))),(0,r.kt)("p",null,"If you have multiple batches to send, you can pass a stream/sequence of them rather than calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentStates")," multiple times"),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.zepben.evolve.streaming.data.SwitchStateEvent;\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\nimport java.util.stream.Stream;\n\nvar event1 = new SwitchStateEvent("event1", LocalDateTime.now(), "switch_id_1", SwitchAction.OPEN);\nvar event2 = new SwitchStateEvent("event2", LocalDateTime.now(), "switch_id_2", SwitchAction.CLOSE);\nvar batches = Stream.of(\n    new UpdateNetworkStateClient.SetCurrentStatesRequest(1, List.of(event1)),\n    new UpdateNetworkStateClient.SetCurrentStatesRequest(2, List.of(event2))\n);\n\nclient.setCurrentStates(batches).forEach(response ->\n    // Process your responses here. You will get a response per batch.\n);\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.zepben.evolve.streaming.data.SwitchStateEvent\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient\n\nimport java.time.LocalDateTime\n\nval event1 = SwitchStateEvent("event1", LocalDateTime.now(), "switch_id_1", SwitchAction.OPEN)\nval event2 = SwitchStateEvent("event2", LocalDateTime.now(), "switch_id_2", SwitchAction.CLOSE)\nval batches = sequenceOf(\n    UpdateNetworkStateClient.SetCurrentStatesRequest(1, listOf(event1)),\n    UpdateNetworkStateClient.SetCurrentStatesRequest(2, listOf(event2))\n)\n\nclient.setCurrentStates(batches).forEach { response ->\n    // Process your responses here. You will get a response per batch.\n}\n')))),(0,r.kt)("h4",{id:"adding-cuts"},"Adding cuts"),(0,r.kt)("p",null,"You can add a cut to an AC line segment by passing an ",(0,r.kt)("inlineCode",{parentName:"p"},"AddCutEvent")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentStates")," function. This can be done with both individual events, and\nbatches of events as shown above."),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.zepben.evolve.streaming.data.AddCutEvent;\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\n\nvar event1 = new AddCutEvent("event1", LocalDateTime.now(), "cut_id_1", "acls_id_1");\nvar response = client.setCurrentStates(1, List.of(event1));\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.zepben.evolve.streaming.data.AddCutEvent\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient\n\nval event1 = AddCutEvent("event1", LocalDateTime.now(), "cut_id_1", "acls_id_1")\nval response = client.setCurrentStates(1, listOf(event1))\n')))),(0,r.kt)("h4",{id:"removing-cuts"},"Removing cuts"),(0,r.kt)("p",null,"You can remove previously added cuts by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoveCutEvent")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentStates")," function. This can be done with both individual events, and batches\nof events as shown above."),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.zepben.evolve.streaming.data.RemoveCutEvent;\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\n\nvar event1 = new RemoveCutEvent("event1", LocalDateTime.now(), "cut_id_1");\nvar response = client.setCurrentStates(1, List.of(event1));\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.zepben.evolve.streaming.data.RemoveCutEvent\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient\n\nval event1 = RemoveCutEvent("event1", LocalDateTime.now(), "cut_id_1")\nval response = client.setCurrentStates(1, listOf(event1))\n')))),(0,r.kt)("h4",{id:"adding-jumpers"},"Adding jumpers"),(0,r.kt)("p",null,"You can add a jumper between two pieces of equipment by passing an ",(0,r.kt)("inlineCode",{parentName:"p"},"AddJumperEvent")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentStates")," function. This can be done with both individual\nevents, and batches of events as shown above."),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.zepben.evolve.streaming.data.AddJumperEvent;\nimport com.zepben.evolve.streaming.data.JumperConnection;\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\n\nvar event1 = new AddJumperEvent("event1", LocalDateTime.now(), "jumper_id_1", new JumperConnection("acls_id_1"), new JumperConnection("acls_id_2"));\nvar response = client.setCurrentStates(1, List.of(event1));\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.zepben.evolve.streaming.data.AddJumperEvent\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient\n\nval event1 = AddJumperEvent("event1", LocalDateTime.now(), "jumper_id_1", JumperConnection("acls_id_1"), JumperConnection("acls_id_2"))\nval response = client.setCurrentStates(1, listOf(event1))\n')))),(0,r.kt)("h4",{id:"removing-jumpers"},"Removing jumpers"),(0,r.kt)("p",null,"You can remove previously added jumpers by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoveJumperEvent")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"setCurrentStates")," function. This can be done with both individual events, and\nbatches of events as shown above."),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.zepben.evolve.streaming.data.RemoveJumperEvent;\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient;\n\nimport java.time.LocalDateTime;\nimport java.util.List;\n\nvar event1 = new RemoveJumperEvent("event1", LocalDateTime.now(), "jumper_id_1");\nvar response = client.setCurrentStates(1, List.of(event1));\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.zepben.evolve.streaming.data.RemoveJumperEvent\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateClient\n\nval event1 = RemoveJumperEvent("event1", LocalDateTime.now(), "jumper_id_1")\nval response = client.setCurrentStates(1, listOf(event1))\n')))),(0,r.kt)("h3",{id:"batch-result-responses"},"Batch result responses"),(0,r.kt)("p",null,"Each batch will receive its own response, which will be one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BatchSuccessful")," - Indicates that all events in the batch were processed successfully. Events that are ignored because they set the state to one that is\nalready present, or are skipped due to a later event applying the opposite action, will be marked as successful.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BatchFailure")," - Indicates at least one event in the batch could not be applied. Each event that failed will indicate why it failed, some of which will have\nmore impact than others."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StateEventUnknownMrid")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"mRID")," of the event could not be found in the network hosted by this server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StateEventDuplicateMrid")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"mRID")," of an item being added to the network is already in use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StateEventInvalidMrid")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"mRID")," of the item being addressed in the event is of a different type than expected. e.g. You can't remove a ",(0,r.kt)("inlineCode",{parentName:"li"},"Jumper")," with an\n",(0,r.kt)("inlineCode",{parentName:"li"},"mRID")," that belongs to a ",(0,r.kt)("inlineCode",{parentName:"li"},"Cut"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StateEventUnsupportedPhasing")," - You tried to specify phases that do not make sense to the item being updated. When using the default phasing of ",(0,r.kt)("inlineCode",{parentName:"li"},"NONE")," you\nwill never receive this error. Until un-ganged switching is supported, this error will be returned for all events that specify phases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StateEventUnsupportedMrid")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"mRID")," provided can't be used to perform the given action even though it is of the correct type. e.g. Trying to open/close\na switch in a voltage level that hasn't been implemented in the server."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BatchNotProcessed")," - Indicates the entire batch was ignored because the message ID of the batch was prior to the last processed batch."))),(0,r.kt)("p",null,"You can check the type of response or failure by check against the types from ",(0,r.kt)("inlineCode",{parentName:"p"},"com.zepben.evolve.streaming.data.*")),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.zepben.evolve.streaming.data.BatchFailure;\nimport com.zepben.evolve.streaming.data.StateEventUnknownMrid;\n\nif (response instanceof BatchFailure) {\n    var batchFailure = (BatchFailure) response;\n    batchFailure.getPartialFailure(); // Will be true if all event failed, otherwise false.\n    batchFailure.getFailures().forEach((failure) -> {\n        if (failure instanceof StateEventUnknownMrid) {\n            // Process failure\n        }\n    });\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"when (response) {\n    is BatchFailure -> {\n        response.partialFailure // Will be true if all event failed, otherwise false.\n        response.failures.forEach { failure ->\n            when (failure) {\n                is StateEventUnknownMrid -> // Process failure\n                // process other failure types\n            }\n        }\n    }\n    // process other response types\n}\n")))))}v.isMDXComponent=!0}}]);