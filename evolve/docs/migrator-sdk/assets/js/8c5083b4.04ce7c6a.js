"use strict";(self.webpackChunkmigrator_sdk_jvm_doco=self.webpackChunkmigrator_sdk_jvm_doco||[]).push([[3625],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,c=m["".concat(i,".").concat(d)]||m[d]||h[d]||o;return a?n.createElement(c,s(s({ref:t},u),{},{components:a})):n.createElement(c,s({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),o={tabItem:"tabItem_Ymn6"};function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7462),r=a(7294),o=a(6010),s=a(2466),l=a(6550),i=a(1980),p=a(7392),u=a(12);function m(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:m(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function c(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,l.k6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function k(e){var t,a,n,o,s=e.defaultValue,l=e.queryString,i=void 0!==l&&l,p=e.groupId,m=h(e),k=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),f=k[0],g=k[1],N=c({queryString:i,groupId:p}),b=N[0],v=N[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,u.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),y=w[0],T=w[1],C=function(){var e=null!=b?b:y;return d({value:e,tabValues:m})?e:null}();return(0,r.useLayoutEffect)((function(){C&&g(C)}),[C]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),v(e),T(e)}),[v,T,m]),tabValues:m}}var f=a(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){var t=e.className,a=e.block,l=e.selectedValue,i=e.selectValue,p=e.tabValues,u=[],m=(0,s.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(m(t),i(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,s=u.indexOf(e.currentTarget)-1;a=null!=(o=u[s])?o:u[u.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:h},s,{className:(0,o.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function b(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var o=a.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function v(e){var t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},5547:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=a(4866),l=a(5162),i=["components"],p={id:"phase-consistency",title:"Phase Consistency Processor"},u=void 0,m={unversionedId:"phase-consistency",id:"phase-consistency",title:"Phase Consistency Processor",description:"The phase consistency module is used to repair phase inconsistencies in a NetworkService.",source:"@site/docs/phase-consistency.mdx",sourceDirName:".",slug:"/phase-consistency",permalink:"/evolve/docs/migrator-sdk-jvm/next/phase-consistency",draft:!1,tags:[],version:"current",frontMatter:{id:"phase-consistency",title:"Phase Consistency Processor"},sidebar:"someSidebar",previous:{title:"Migrator SDK Overview",permalink:"/evolve/docs/migrator-sdk-jvm/next/"}},h={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Repair the phases of any split 3-phase",id:"repair-the-phases-of-any-split-3-phase",level:2},{value:"Sub-processors",id:"sub-processors",level:2},{value:"DroppedPhaseLoopFixer",id:"droppedphaseloopfixer",level:3},{value:"<code>fix</code>",id:"fix",level:4},{value:"IncompatiblePhaseFixer",id:"incompatiblephasefixer",level:3},{value:"<code>fixDownstream</code>",id:"fixdownstream",level:4},{value:"<code>fixTransformerUpstreams</code>",id:"fixtransformerupstreams",level:4},{value:"PhaseExtender",id:"phaseextender",level:3},{value:"<code>extendDownstream</code>",id:"extenddownstream",level:4},{value:"<code>extendUpstream</code>",id:"extendupstream",level:4},{value:"PhaseIssues",id:"phaseissues",level:3},{value:"PhasePrecedence",id:"phaseprecedence",level:3},{value:"TransformerPhaseProcessor",id:"transformerphaseprocessor",level:3},{value:"<code>process</code>",id:"process",level:4},{value:"<code>inferUnknown</code>",id:"inferunknown",level:4},{value:"<code>processSwer</code>",id:"processswer",level:4},{value:"TransformerPhaseType",id:"transformerphasetype",level:3},{value:"XyPhaseProcessor",id:"xyphaseprocessor",level:3},{value:"<code>assignPrimaryPhases</code>",id:"assignprimaryphases",level:4}],c={toc:d},k="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(k,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The phase consistency module is used to repair phase inconsistencies in a ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkService"),"."),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"The simplest, and most common use of this module is via the ",(0,o.kt)("inlineCode",{parentName:"p"},"PhaseConsistencyProcessor")," class and the ",(0,o.kt)("inlineCode",{parentName:"p"},"makeConsistent")," function, which takes the following\nparameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"networkService"),(0,o.kt)("td",{parentName:"tr",align:null},"The network service to process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"getTransformerPhaseType"),(0,o.kt)("td",{parentName:"tr",align:null},"Callback to get the ",(0,o.kt)("inlineCode",{parentName:"td"},"TransformerPhaseType")," for a transformer ID from the source data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"getFileId"),(0,o.kt)("td",{parentName:"tr",align:null},"Callback to get the source file associated with an ID.")))),(0,o.kt)(s.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val logger = LoggerFactory.getLogger(javaClass);\nval issues = PhaseIssues(logger)\nval lvThreshold = 1000\n\nval phaseConsistencyProcessor = PhaseConsistencyProcessor(issues, lvThreshold)\n\nphaseConsistencyProcessor.makeConsistent(\n    networkService,\n    getTransformerPhaseType = { sourceId ->\n        mapToTransformerPhaseType(sourceData[sourceId]?.attributes?.getString("Phases"))\n    },\n    getFileId = { sourceId ->\n        sourceData[sourceId]?.fileId\n    }\n)\n\n')))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"makeConsistent")," function will update the phases for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"networkService")," to ensure they are consistent, keeping as much of the source phase\ninformation as possible. To do this, the following processes will be run:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set all service equipment with no known phases to single-phase."),(0,o.kt)("li",{parentName:"ol"},"Set transformer phases from known 3-phase transformers."),(0,o.kt)("li",{parentName:"ol"},"Extend phases onto missing downstream."),(0,o.kt)("li",{parentName:"ol"},"Extend phases onto missing upstream."),(0,o.kt)("li",{parentName:"ol"},"Remove known non-3-phase from the network, keeping those phases as hints for later."),(0,o.kt)("li",{parentName:"ol"},"Set transformer phases from known single-phase and SWER transformers."),(0,o.kt)("li",{parentName:"ol"},"Repair the phases of any split 3-phase."),(0,o.kt)("li",{parentName:"ol"},"Extend phases onto missing downstream."),(0,o.kt)("li",{parentName:"ol"},"Infer transformer phases from unknown transformer phase types."),(0,o.kt)("li",{parentName:"ol"},"Extend phases onto missing downstream again to allow for transformer phases from step 8."),(0,o.kt)("li",{parentName:"ol"},"Extend phases onto missing upstream."),(0,o.kt)("li",{parentName:"ol"},"Replace invalid phases downstream."),(0,o.kt)("li",{parentName:"ol"},"Replace invalid phases upstream from transformers."),(0,o.kt)("li",{parentName:"ol"},"Replace invalid phases in loops."),(0,o.kt)("li",{parentName:"ol"},"Restore energy consumer phases."),(0,o.kt)("li",{parentName:"ol"},"Update XY phase codes to known phases using the hints where possible."),(0,o.kt)("li",{parentName:"ol"},"Replace invalid phases upstream from transformer again to allow for replaced XY from step 14."),(0,o.kt)("li",{parentName:"ol"},"Make all remaining network with missing phases 3-phase.")),(0,o.kt)("p",null,"In each instance where phases are spread, priority will be given to the phases emanating from transformers, then 3-phase over 2-phase over single-phase."),(0,o.kt)("admonition",{title:"Known Edge Case",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"There is a known edge case that is not supported by the above processing. If you have a section of 3-phase backbone with an incorrect SWER segment above a split\n3-phase regulator (each phase going through a separate transformer), the results of the consistency processing will be inaccurate/broken. In this case you will\nneed to either fix the SWER segment in the source system and generate a new extract, or update it manually in the extracted source data.")),(0,o.kt)("h2",{id:"repair-the-phases-of-any-split-3-phase"},"Repair the phases of any split 3-phase"),(0,o.kt)("p",null,"When a section of 3-phase backbone is split into three separate cables for an underground span in a source system that does not provide the actual phases of the\ncables (just the number of cores), you end up with all the cables being marked as phase ",(0,o.kt)("inlineCode",{parentName:"p"},"X"),". If you do not repair this, you will end up with each of the cables\nbeing given the same phase, which can break the feeder downstream in strange ways (far from the site of the error) due to conflicting information from the\ntransformers."),(0,o.kt)("p",null,"In order to fix this, we detect termination points where a 3-phase cable is split into three individual phase cables that later join back together, and replace\nthese ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," phase cables with one each of ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),'. Since some source systems do not need to be electrically correct (e.g. some GIS systems) we also\ndetect where a single span of single core cable is attached between the 3-phase and the split, which has been observed to make diagrams "prettier".'),(0,o.kt)("h2",{id:"sub-processors"},"Sub-processors"),(0,o.kt)("p",null,"The following sub-processors are used to make a ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkService")," consistent. Each of these can be used separately to perform their actions if desired."),(0,o.kt)("h3",{id:"droppedphaseloopfixer"},"DroppedPhaseLoopFixer"),(0,o.kt)("p",null,"A class that can be used to fix the phasing of loops that contain segments surrounded by segments with fewer phases, resulting in dropped phases."),(0,o.kt)("h4",{id:"fix"},(0,o.kt)("inlineCode",{parentName:"h4"},"fix")),(0,o.kt)("p",null,"Fix 3-phase loop segments that are surrounded by single-phase segments. If there is a 3-phase transformer in the loop, or there\nis another 3-phase segment in the loop (including the incoming connection to the loop), create a 3-phase path between them, otherwise, remove the island\n3-phase segment and any downstream 3-phase."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"networkService"),(0,o.kt)("td",{parentName:"tr",align:null},"The network service to process.")))),(0,o.kt)("h3",{id:"incompatiblephasefixer"},"IncompatiblePhaseFixer"),(0,o.kt)("p",null,"A class for fixing incompatible phase combinations."),(0,o.kt)("h4",{id:"fixdownstream"},(0,o.kt)("inlineCode",{parentName:"h4"},"fixDownstream")),(0,o.kt)("p",null,"Fix any phase incompatibilities in a downstream direction. This will replace the incompatible downstream phases with the valid upstream phases.\nIncompatible phases are any phases that are not a subset of the upstream phases, or an unknown representation of those phases. To do this,\nphases will be spread in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From any transformer not in a loop."),(0,o.kt)("li",{parentName:"ol"},"From the low voltage side of any transformer in a loop."),(0,o.kt)("li",{parentName:"ol"},"From any non-transformer not in a loop."),(0,o.kt)("li",{parentName:"ol"},"From any non-transformer in a loop.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"networkService"),(0,o.kt)("td",{parentName:"tr",align:null},"The network service to process.")))),(0,o.kt)("h4",{id:"fixtransformerupstreams"},(0,o.kt)("inlineCode",{parentName:"h4"},"fixTransformerUpstreams")),(0,o.kt)("p",null,"Fix any paths to transformers that have phase incompatibilities in an upstream direction. This will replace the incompatible upstream phases with the\nvalid transformer phases. Incompatible phases are any phases that are not a superset of the transformer phases, or an unknown representation of those\nphases."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"networkService"),(0,o.kt)("td",{parentName:"tr",align:null},"The network service to process.")))),(0,o.kt)("h3",{id:"phaseextender"},"PhaseExtender"),(0,o.kt)("p",null,"A class for extending known phases onto terminals with missing phases. This is done in a downstream direction first, giving priority to known transformer\nphases, then 3-phase over single-phase."),(0,o.kt)("h4",{id:"extenddownstream"},(0,o.kt)("inlineCode",{parentName:"h4"},"extendDownstream")),(0,o.kt)("p",null,"Extend phases downstream onto terminals with missing phases for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"networkService"),". Priority will be given to transformer phases, then following\nthe order defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"PhasePrecedence.PRECEDENCE"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"networkService"),(0,o.kt)("td",{parentName:"tr",align:null},"The network service to process.")))),(0,o.kt)("h4",{id:"extendupstream"},(0,o.kt)("inlineCode",{parentName:"h4"},"extendUpstream")),(0,o.kt)("p",null,"Extend known phases upstream onto terminals with unknown phases for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"networkService"),". Priority will be given to transformer phases, then\nfollowing the order defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"PhasePrecedence.PRECEDENCE"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"networkService"),(0,o.kt)("td",{parentName:"tr",align:null},"The network service to process.")))),(0,o.kt)("h3",{id:"phaseissues"},"PhaseIssues"),(0,o.kt)("p",null,"A collection of issue trackers for tracking problems corrected by the phase consistency processing."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tracker"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"inconsistentPhases"),(0,o.kt)("td",{parentName:"tr",align:null},"Tracks items where the phases in the EWB database do not match the phases in the source data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"txMultipleUpstreamFeeds"),(0,o.kt)("td",{parentName:"tr",align:null},"Tracks transformers where phase consistency could not be processed due to having multiple paths to a feeder head, so direction could not be determines.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"txWithConflictingSwer"),(0,o.kt)("td",{parentName:"tr",align:null},"Tracks transformers with conflicts between SWER phases and voltages.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"txWithMissingSourcePhases"),(0,o.kt)("td",{parentName:"tr",align:null},"Tracks transformers where there was no phase information available in the source data, and the phases had to be inferred.")))),(0,o.kt)("h3",{id:"phaseprecedence"},"PhasePrecedence"),(0,o.kt)("p",null,"Defines the order of precedence that phases will be processed, and which phases belong to each category."),(0,o.kt)("h3",{id:"transformerphaseprocessor"},"TransformerPhaseProcessor"),(0,o.kt)("p",null,"A class for processing ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerTransformer")," phases."),(0,o.kt)("h4",{id:"process"},(0,o.kt)("inlineCode",{parentName:"h4"},"process")),(0,o.kt)("p",null,"Validate that ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerTransformer")," phases make sense, and update them if they don't. Transformers with unknown source phases (or SWER without SWER voltage)\nwill be stored for later processing via ",(0,o.kt)("inlineCode",{parentName:"p"},"inferUnknown"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"networkService"),(0,o.kt)("td",{parentName:"tr",align:null},"The network service to process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"getTransformerType"),(0,o.kt)("td",{parentName:"tr",align:null},"A callback to get the ",(0,o.kt)("inlineCode",{parentName:"td"},"TransformerPhaseType")," for the specified ID. Returning ",(0,o.kt)("inlineCode",{parentName:"td"},"null")," will be treated the same as ",(0,o.kt)("inlineCode",{parentName:"td"},"TransformerPhaseType.UNKNOWN"),".")))),(0,o.kt)("h4",{id:"inferunknown"},(0,o.kt)("inlineCode",{parentName:"h4"},"inferUnknown")),(0,o.kt)("p",null,"Validate that the phases of ",(0,o.kt)("inlineCode",{parentName:"p"},"powerTransformer")," with unknown type make sense, and update them if they don't."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"powerTransformer"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"PowerTransformer")," to process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"up"),(0,o.kt)("td",{parentName:"tr",align:null},"The upstream terminal of ",(0,o.kt)("inlineCode",{parentName:"td"},"powerTransformer"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"down"),(0,o.kt)("td",{parentName:"tr",align:null},"The downstream terminals of ",(0,o.kt)("inlineCode",{parentName:"td"},"powerTransformer"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onTypeDetermined"),(0,o.kt)("td",{parentName:"tr",align:null},"Consumer that is used to perform processing (e.g. logging) when the type of the ",(0,o.kt)("inlineCode",{parentName:"td"},"powerTransformer")," is determined.")))),(0,o.kt)("p",null,"Returns a list of terminals that have been updated."),(0,o.kt)("h4",{id:"processswer"},(0,o.kt)("inlineCode",{parentName:"h4"},"processSwer")),(0,o.kt)("p",null,"Validate that the phases of SWER ",(0,o.kt)("inlineCode",{parentName:"p"},"powerTransformer")," make sense, and update them if they don't."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"powerTransformer"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"PowerTransformer")," to process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"up"),(0,o.kt)("td",{parentName:"tr",align:null},"The upstream terminal of ",(0,o.kt)("inlineCode",{parentName:"td"},"powerTransformer"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"down"),(0,o.kt)("td",{parentName:"tr",align:null},"The downstream terminals of ",(0,o.kt)("inlineCode",{parentName:"td"},"powerTransformer"),".")))),(0,o.kt)("p",null,"Return a list of terminals that have been updated."),(0,o.kt)("h3",{id:"transformerphasetype"},"TransformerPhaseType"),(0,o.kt)("p",null,"An enumeration of the phase type for a ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerTransformer"),"."),(0,o.kt)("h3",{id:"xyphaseprocessor"},"XyPhaseProcessor"),(0,o.kt)("p",null,"A class that can be used to replace XY phases with primary phases. Takes an optional phase allocation algorithm used to determine which candidate phase to use\nwhen an exact match could not be found. Takes two parameters, the terminal being processed and the candidate phases."),(0,o.kt)("admonition",{title:"Ignoring Candidates",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"There is no validation of the returned phase code. If you return a phase that is not in the candidates, you will introduce a phase inconsistency.")),(0,o.kt)("p",null,"The default phase allocation algorithm chooses a random candidate based on the hash of the terminals conducting equipments mRID. This does a reasonable job of\nspreading the phases while also being repeatable, giving stability to re-runs of an extract."),(0,o.kt)("admonition",{title:"Precondition",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All terminals in the network service that are connected to XY spans must have phases assigned prior to calling this function for it to work correctly.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"PhaseExtender")," class can be used to ensure this precondition is met.")),(0,o.kt)("h4",{id:"assignprimaryphases"},(0,o.kt)("inlineCode",{parentName:"h4"},"assignPrimaryPhases")),(0,o.kt)("p",null,"Assign primary phases to all XY terminals. This is done with the following priority:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Continue any matching known phasing:"),(0,o.kt)("p",{parentName:"li"},"This will continue AB, BC or AC over XY, or A, B or C over X, maintaining neutrals.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Back-fill from any subsets of known phases."),(0,o.kt)("p",{parentName:"li"},"This will back-fill AB or AC over XY is there is a downstream A, BC or AB from B and AC or BC from C, maintaining neutrals. Which phase is used\nis determined by the phase allocation algorithm.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Allocate a valid subset phase using the phase allocation algorithm."),(0,o.kt)("p",{parentName:"li"},"This will allocate one of the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AB, BC or AC for an XY below ABC"),(0,o.kt)("li",{parentName:"ul"},"A, B or C for an X below ABC"),(0,o.kt)("li",{parentName:"ul"},"A or B for an X below AB"),(0,o.kt)("li",{parentName:"ul"},"B or C for an X below BC"),(0,o.kt)("li",{parentName:"ul"},"C or A for an X below AC")))),(0,o.kt)("admonition",{title:"Transformer Phases",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"While applying these rules, any transformers will be processed with the following translations where necessary:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"HV to LV:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ABC <-> ABCN"),(0,o.kt)("li",{parentName:"ul"},"AB <-> AN"),(0,o.kt)("li",{parentName:"ul"},"BC <-> BN"),(0,o.kt)("li",{parentName:"ul"},"AC <-> CN"))),(0,o.kt)("li",{parentName:"ul"},"HV to SWER:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AB <-> A"),(0,o.kt)("li",{parentName:"ul"},"BC <-> B"),(0,o.kt)("li",{parentName:"ul"},"AC <-> C"))),(0,o.kt)("li",{parentName:"ul"},"SWER to LV",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A <-> AN"),(0,o.kt)("li",{parentName:"ul"},"B <-> BN"),(0,o.kt)("li",{parentName:"ul"},"C <-> CN"))))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"networkService"),(0,o.kt)("td",{parentName:"tr",align:null},"The network service to process.")))))}f.isMDXComponent=!0}}]);