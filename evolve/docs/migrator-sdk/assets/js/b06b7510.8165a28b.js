"use strict";(self.webpackChunkmigrator_sdk_jvm_doco=self.webpackChunkmigrator_sdk_jvm_doco||[]).push([[3379],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(6010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(7462),a=r(7294),o=r(6010),i=r(2466),u=r(6550),c=r(1980),s=r(7392),l=r(12);function m(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,c._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function v(e){var t,r,n,o,i=e.defaultValue,u=e.queryString,c=void 0!==u&&u,s=e.groupId,m=p(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),b=v[0],g=v[1],h=d({queryString:c,groupId:s}),y=h[0],w=h[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,l.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),C=k[0],E=k[1],I=function(){var e=null!=y?y:C;return f({value:e,tabValues:m})?e:null}();return(0,a.useLayoutEffect)((function(){I&&g(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),E(e)}),[w,E,m]),tabValues:m}}var b=r(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,r=e.block,u=e.selectedValue,c=e.selectValue,s=e.tabValues,l=[],m=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=l.indexOf(t),n=s[r].value;n!==u&&(m(t),c(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=l.indexOf(e.currentTarget)+1;r=null!=(n=l[a])?n:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;r=null!=(o=l[i])?o:l[l.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return l.push(e)},onKeyDown:f,onClick:p},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},1783:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4866),u=r(5162),c=["components"],s={id:"metrics-creators",title:"Metrics Creators"},l=void 0,m={unversionedId:"metrics-creators",id:"version-0.21.1/metrics-creators",title:"Metrics Creators",description:"Metrics Creation",source:"@site/versioned_docs/version-0.21.1/metrics-creators.mdx",sourceDirName:".",slug:"/metrics-creators",permalink:"/evolve/docs/migrator-sdk/0.21.1/metrics-creators",draft:!1,tags:[],version:"0.21.1",frontMatter:{id:"metrics-creators",title:"Metrics Creators"}},p={},f=[{value:"Metrics Creation",id:"metrics-creation",level:2}],d={toc:f},v="wrapper";function b(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)(v,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"metrics-creation"},"Metrics Creation"),(0,o.kt)("p",null,"The metrics creators module contains processors that create metrics that are common to all ingestors. Each processor takes in a ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkService")," and adds\nmetrics based on calculated attributes of the network. There two ready-to-use metrics creators in this module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CommonEquipmentMetricsCreator"),": Creates counts for each equipment type, counts for each transformer type (e.g. distribution), counts for erroneous\ntransformers (e.g. no ends), and conductor length totals."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FeederCountMetricsCreator"),": Creates feeder counts at the substation, sub-geographical region, geographical region, and network levels.")),(0,o.kt)("p",null,"There is also a customizable ",(0,o.kt)("inlineCode",{parentName:"p"},"EquipmentMetricsCreator")," which can be implemented to process metrics for each equipment at each network level. The following\nexample shows how to use these metrics creators in an ingestor."),(0,o.kt)(i.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.zepben.evolve.cim.iec61970.base.core.Equipment\nimport com.zepben.evolve.cim.iec61970.base.wires.PowerElectronicsConnection\nimport com.zepben.evolve.metrics.*\nimport com.zepben.evolve.services.network.NetworkService\nimport com.zepben.migrator.processors.metrics.*\nimport java.time.Instant\nimport java.util.*\n\nfun main() {\n    val networkService = NetworkService()\n    val ingestionJob = IngestionJob(\n        UUID.randomUUID(),\n        IngestionMetadata(Instant.now(), "ExampleEnergy", "example-ingestor", "1.2.3")\n    )\n\n    // Ingest from source data to networkService before running metrics creators\n\n    CommonEquipmentMetricsCreator(ingestionJob.networkMetrics).process(networkService)\n    FeederCountMetricsCreator(ingestionJob.networkMetrics).process(networkService)\n    InverterCapacityMetricsCreator(ingestionJob.networkMetrics).process(networkService)\n\n    // ingestionJob.metrics will now be populated\n}\n\nclass InverterCapacityMetricsCreator(metrics: NetworkMetrics) : EquipmentMetricsCreator(metrics) {\n\n    override fun processEquipment(equipment: Equipment, networkContainer: NetworkContainer) {\n        if (equipment is PowerElectronicsConnection) {\n            metrics[networkContainer].increase("inverter VA capacity", equipment.ratedS ?: 0)\n            metrics[networkContainer].increase("inverter W capacity", equipment.p ?: 0.0)\n        }\n    }\n\n}\n')))))}b.isMDXComponent=!0}}]);