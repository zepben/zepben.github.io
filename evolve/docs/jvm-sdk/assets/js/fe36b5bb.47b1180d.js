"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[3468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),v=a,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(4334);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(4334),l=r(2466),i=r(6550),s=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function v(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){var t;let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=null!=s?s:p;return v({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var h=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==i&&(p(t),s(n))},v=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var n;const t=u.indexOf(e.currentTarget)+1;r=null!=(n=u[t])?n:u[0];break}case"ArrowLeft":{var a;const t=u.indexOf(e.currentTarget)-1;r=null!=(a=u[t])?a:u[u.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:v,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(S,(0,n.Z)({key:String(t)},e))}},7981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={id:"update-network-state-service",title:"Update Network State Service"},s=void 0,c={unversionedId:"update-network-state-service",id:"version-0.24.0/update-network-state-service",title:"Update Network State Service",description:"An implementation of the UpdateNetworkStateService will provide an object-oriented wrapper for the gRPC library, with the ability to update information about",source:"@site/versioned_docs/version-0.24.0/update-network-state-service.mdx",sourceDirName:".",slug:"/update-network-state-service",permalink:"/evolve/docs/jvm-sdk/0.24.0/update-network-state-service",draft:!1,tags:[],version:"0.24.0",frontMatter:{id:"update-network-state-service",title:"Update Network State Service"},sidebar:"someSidebar",previous:{title:"Update Network State Client",permalink:"/evolve/docs/jvm-sdk/0.24.0/update-network-state-client"}},u={},p=[{value:"Creating callbacks",id:"creating-callbacks",level:2},{value:"onSetCurrentStates",id:"onsetcurrentstates",level:3},{value:"Registering callbacks",id:"registering-callbacks",level:2},{value:"Registering the service",id:"registering-the-service",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}],d={toc:p},v="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateNetworkStateService")," will provide an object-oriented wrapper for the gRPC library, with the ability to update information about\nthe state of the network. This is done with the following 3 steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create callbacks which will be called when gRPC messages are received from a client."),(0,a.kt)("li",{parentName:"ol"},"Register the callbacks with an instance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"UpdateNetworkStateService"),"."),(0,a.kt)("li",{parentName:"ol"},"Add your ",(0,a.kt)("inlineCode",{parentName:"li"},"UpdateNetworkStateService")," instance as a gRPC service.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The below examples make use of a helper library provided by Zepben, which is included as a transitive dependency of the SDK, or can be ",(0,a.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/com.zepben.evolve/evolve-conn"},"added directly from Maven Central"),"."),(0,a.kt)("p",{parentName:"admonition"},"You do ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"NOT"))," have to do this, you can register the services directly with a Netty gRPC (or other) server instead.")),(0,a.kt)("p",null,"The classes you need for performing these actions can be imported from the SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"import com.zepben.evolve.conn.grpc.GrpcServer\nimport com.zepben.evolve.streaming.data.CurrentStateEvent\nimport com.zepben.evolve.streaming.data.SetCurrentStatesStatus\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateService\n")),(0,a.kt)("h2",{id:"creating-callbacks"},"Creating callbacks"),(0,a.kt)("p",null,"Each supported message in ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateNetworkStateService")," requires a callback, which will be triggered when any client messages are received. Implementation of these\ncallbacks can be done as either lambdas, or full method/function implementations that can be passed as method references."),(0,a.kt)("h3",{id:"onsetcurrentstates"},"onSetCurrentStates"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onSetCurrentStates")," callback is triggered for each request passing in a batch of current state events, and should return a\n",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," of ",(0,a.kt)("a",{parentName:"p",href:"/evolve/docs/jvm-sdk/0.24.0/update-network-state-client#batch-result-responses"},"batch result response")," to reflect the success or failure of the update process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Using a lambda expression\nvar updateCurrentStatesLambda = { batchId: Long, events: List<CurrentStateEvent> ->\n    // process updating of events here and return a CompletableFuture of batch result response\n}\n\n// Using a method\nclass UpdateNetworkStateServiceImpl {\n\n    fun updateCurrentStates(batchId: Long, events: List<CurrentStateEvent>): CompletableFuture<SetCurrentStatesStatus> {\n        // process updating of events here and return a CompletableFuture of batch result response\n    }\n\n}\n")),(0,a.kt)("h2",{id:"registering-callbacks"},"Registering callbacks"),(0,a.kt)("p",null,"Registering the callbacks with the service is as simple as passing them into the ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateNetworkStateService")," constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Using lambda expressions\nval service = UpdateNetworkStateService(updateCurrentStatesLambda)\n\n// Using method references\nclass UpdateNetworkStateServiceImpl {\n\n    val service = UpdateNetworkStateService(::updateCurrentStates);\n\n}\n")),(0,a.kt)("h2",{id:"registering-the-service"},"Registering the service"),(0,a.kt)("p",null,"For the above code to have any effect, you need to register the service with a gRPC server. Once this has been done, you should start to receive callbacks for\neach request sent from a gRPC client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun main() {\n    val grpcServer = object : GrpcServer(9001) {\n        init {\n            serverBuilder.addService(service)\n        }\n    }\n    grpcServer.start()\n}\n")),(0,a.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,a.kt)("p",null,"Putting each of the steps above together, you can build the scaffold of a working application"),(0,a.kt)(o.Z,{groupId:"code-example",defaultValue:"kotlin-lambda",values:[{label:"Kotlin Lambdas",value:"kotlin-lambda"},{label:"Kotlin Methods",value:"kotlin-method"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"kotlin-lambda",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"import com.zepben.evolve.conn.grpc.GrpcServer\nimport com.zepben.evolve.streaming.data.CurrentStateEvent\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateService\n\nfun main() {\n    val service = UpdateNetworkStateService(onSetCurrentStates = { batchId: Long, events: List<CurrentStateEvent> ->\n       // process updating of events here and return a CompletableFuture of batch result response\n    })\n\n    val grpcServer = object : GrpcServer(9001) {\n        init {\n            serverBuilder.addService(service)\n        }\n    }\n    grpcServer.start()\n}\n"))),(0,a.kt)(l.Z,{value:"kotlin-method",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"import com.zepben.evolve.conn.grpc.GrpcServer\nimport com.zepben.evolve.streaming.data.CurrentStateEvent\nimport com.zepben.evolve.streaming.data.SetCurrentStatesStatus\nimport com.zepben.evolve.streaming.mutations.UpdateNetworkStateService\n\nclass UpdateNetworkStateServiceImpl {\n\n    val service = UpdateNetworkStateService(::updateCurrentStates)\n\n    fun updateCurrentStates(batchId: Long, events: List<CurrentStateEvent>): CompletableFuture<SetCurrentStatesStatus> {\n        // process updating of events here and return a CompletableFuture of batch result response\n    }\n\n}\n\nfun main() {\n    val service = UpdateNetworkStateServiceImpl().service\n    val grpcServer = object : GrpcServer(9001) {\n        init {\n            serverBuilder.addService(service)\n        }\n    }\n    grpcServer.start()\n}\n")))))}m.isMDXComponent=!0}}]);