"use strict";(self.webpackChunkevolve_sdk_jvm_doco=self.webpackChunkevolve_sdk_jvm_doco||[]).push([[6963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(o,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4334);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),l=n(4334),i=n(2466),s=n(6550),o=n(1980),u=n(7392),d=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,s]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,u]=h({queryString:n,groupId:a}),[m,k]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=null!=o?o:m;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);s(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==s&&(m(t),o(a))},c=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var a;const t=d.indexOf(e.currentTarget)+1;n=null!=(a=d[t])?a:d[0];break}case"ArrowLeft":{var r;const t=d.indexOf(e.currentTarget)-1;n=null!=(r=d[t])?r:d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:p},i,{className:(0,l.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},2478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const s={id:"sdk-phases",title:"Phases and Feeder Directions"},o=void 0,u={unversionedId:"sdk-phases",id:"version-0.11.0/sdk-phases",title:"Phases and Feeder Directions",description:"This is a title",source:"@site/versioned_docs/version-0.11.0/phases.mdx",sourceDirName:".",slug:"/sdk-phases",permalink:"/evolve/docs/jvm-sdk/0.11.0/sdk-phases",draft:!1,tags:[],version:"0.11.0",frontMatter:{id:"sdk-phases",title:"Phases and Feeder Directions"},sidebar:"version-0.11.0/someSidebar",previous:{title:"CIM Services",permalink:"/evolve/docs/jvm-sdk/0.11.0/sdk-services"},next:{title:"Tracing",permalink:"/evolve/docs/jvm-sdk/0.11.0/sdk-tracing"}},d={},m=[{value:"This is a title",id:"this-is-a-title",level:2},{value:"Traced Phases",id:"traced-phases",level:2},{value:"Feeder Direction",id:"feeder-direction",level:2},{value:"Previous Versions",id:"previous-versions",level:2}],p={toc:m},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"this-is-a-title"},"This is a title"),(0,r.kt)("p",null,"There are three different types of phases stored/calculated by the SDK:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Phase Type"),(0,r.kt)("th",{parentName:"tr",align:null},"SDK Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nominal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Terminal.phases")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PhaseCode")),(0,r.kt)("td",{parentName:"tr",align:null},'The nominal phases of the network indicate how the network is connected. The nominal phases can include the "unknown" phases ',(0,r.kt)("inlineCode",{parentName:"td"},"X")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Y"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),"This is the phase field that you are most likely to be interested in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Normal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Terminal.normalPhases")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Terminal.tracedPhases.normal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Traced")),(0,r.kt)("td",{parentName:"tr",align:null},"The normal phases indicate the energised phases of the network in its normal state. There will not be any unknown phases in the normal phases, however; any de-energised areas of the network will not have normal phases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Terminal.currentPhases")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Terminal.tracedPhases.current")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Traced")),(0,r.kt)("td",{parentName:"tr",align:null},"The current phases indicate the energised phases of the network in the current state. It has the same caveats as the normal phases.")))),(0,r.kt)("p",null,"There are two different feeder directions calculated by the SDK:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feeder Direction Type"),(0,r.kt)("th",{parentName:"tr",align:null},"SDK Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Normal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Terminal.normalFeederDirection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeederDirection")),(0,r.kt)("td",{parentName:"tr",align:null},"The direction of the feeder head with the network in its normal state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Terminal.currentFeederDirection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeederDirection")),(0,r.kt)("td",{parentName:"tr",align:null},"The direction of the feeder head with the network in its current state.")))),(0,r.kt)("h2",{id:"traced-phases"},"Traced Phases"),(0,r.kt)("p",null,"Traced phases should be considered '",(0,r.kt)("em",{parentName:"p"},"read-only"),"' (even though they have setters). The traced phases will be automatically set if you load a database from disk,\notherwise you should make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SetPhases")," class. If you are implementing network modification algorithms, you can also make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RemovePhases"),"\nclass if required."),(0,r.kt)("p",null,"There are two methods for accessing the traced phases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"As a ",(0,r.kt)("inlineCode",{parentName:"li"},"PhaseCode"),". If the traced phases do not form a valid phase code this will return ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ol"},"Per nominal phase.")),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class PhaseLogger {\n    void logPhases(Terminal terminal) {\n        @Nullable PhaseCode phaseCode = terminal.getNormalPhases().asPhaseCode();\n        if (phaseCode != null)\n            System.out.printf("Found phases for %s. nominal: %s, normal: %s\\n", terminal, terminal.getPhases(), phaseCode);\n        else {\n            System.out.printf("Found partial phases %s:\\n", terminal);\n            terminal.getPhases().forEach(nominalPhase -> {\n                System.out.printf("   nominal: %s, normal: %s\\n", nominalPhase, terminal.getNormalPhases().get(nominalPhase));\n            });\n        }\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PhaseLogger {\n    fun logPhases(terminal: Terminal) {\n        val phaseCode = terminal.normalPhases.asPhaseCode()\n        if (phaseCode != null)\n            println("Found phases for $terminal. nominal: ${terminal.phases}, normal: $phaseCode")\n        else {\n            println("Found partial phases $terminal:")\n            terminal.phases.forEach {\n                println("   nominal: $it, normal: ${terminal.normalPhases[it]}")\n            }\n        }\n    }\n}\n')))),(0,r.kt)("h2",{id:"feeder-direction"},"Feeder Direction"),(0,r.kt)("p",null,"Feeder direction can be set to one of the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UPSTREAM")),(0,r.kt)("td",{parentName:"tr",align:null},"Traversing from this terminal will lead you towards the feeder head.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DOWNSTREAM")),(0,r.kt)("td",{parentName:"tr",align:null},"Traversing from this terminal will lead you away from the feeder head.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOTH")),(0,r.kt)("td",{parentName:"tr",align:null},"This terminal is part of a loop and traversing from this terminal can both lead you towards or away from the feeder head.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NONE")),(0,r.kt)("td",{parentName:"tr",align:null},"This terminal is not on a feeder. e.g. De-energised sections or EHV.")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"NOTE")),": A terminal only has a single feeder direction for each state of the network, so if there is unganged switching, not all nominal phases may\ntrace in the direction specified. A direction of ",(0,r.kt)("inlineCode",{parentName:"p"},"BOTH")," can be formed from some phases tracing ",(0,r.kt)("inlineCode",{parentName:"p"},"UPSTREAM"),", with others tracing ",(0,r.kt)("inlineCode",{parentName:"p"},"DOWNSTREAM"),"."),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class DirectionLogger {\n    void logDirection(Terminal terminal) {\n        System.out.printf("%s: normal=%s, current=%s\\n", terminal, terminal.getNormalFeederDirection(), terminal.getCurrentFeederDirection());\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class DirectionLogger {\n    fun logDirection(terminal: Terminal) {\n        println("$terminal: normal=${terminal.normalFeederDirection}, current=${terminal.currentFeederDirection}")\n    }\n}\n')))),(0,r.kt)("h2",{id:"previous-versions"},"Previous Versions"),(0,r.kt)("p",null,"Previously, traced phases and feeder directions were stored together and could only be accessed per nominal phase. Below are some examples of converting from\nthe old format to the current:"),(0,r.kt)(l.Z,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Old\nclass PhaseAndDirectionLoggerOld {\n    void log(Terminal terminal) {\n        System.out.printf("%s:\\n", terminal);\n        terminal.getPhases().singlePhases().forEach(phase -> {\n            PhaseStatus nps = terminal.normalPhases(phase);\n            PhaseStatus cps = terminal.currentPhases(phase);\n\n            System.out.printf("   %s: n:%s:%s, c:%s:%s\\n", phase, nps.getPhase(), nps.getDirection(), cps.getPhase(), cps.getDirection());\n        });\n    }\n}\n\n// Becomes\nclass PhaseAndDirectionLoggerOld {\n    void log(Terminal terminal) {\n        System.out.printf("%s: dn:%s, dc:%s:\\n", terminal, terminal.getNormalFeederDirection(), terminal.getCurrentFeederDirection());\n        terminal.getPhases().forEach(phase -> {\n            System.out.printf("   %s: n:%s, c:%s\\n", phase, terminal.getNormalPhases().get(phase), terminal.getCurrentPhases().get(phase));\n        });\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Old\nclass PhaseAndDirectionLoggerOld {\n    fun log(terminal: Terminal) {\n        println("$terminal:")\n        terminal.phases.singlePhases().forEach{\n            val nps = terminal.normalPhases(it)\n            val cps = terminal.currentPhases(it)\n\n            println("   $it: n:${nps.phase}:${nps.direction}, c:${cps.phase}:${cps.direction}")\n        }\n    }\n}\n\n// Becomes\ninternal class PhaseAndDirectionLoggerOld {\n    fun log(terminal: Terminal) {\n        println("$terminal: dn:${terminal.normalFeederDirection}, dc:${terminal.currentFeederDirection}:")\n        terminal.phases.forEach {\n            println("   $it: n:${terminal.normalPhases[it]}, c:${terminal.currentPhases[it]}")\n        }\n    }\n}\n')))))}h.isMDXComponent=!0}}]);