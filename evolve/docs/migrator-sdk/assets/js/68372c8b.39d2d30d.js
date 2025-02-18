"use strict";(self.webpackChunkmigrator_sdk_jvm_doco=self.webpackChunkmigrator_sdk_jvm_doco||[]).push([[8701],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(6010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(7462),a=r(7294),i=r(6010),o=r(2466),u=r(6550),l=r(1980),s=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,i=(0,u.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function h(e){var t,r,n,i,o=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,p=d(e),h=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),v=h[0],b=h[1],y=m({queryString:l,groupId:s}),g=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],i=r[1],[n,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),C=w[0],E=w[1],N=function(){var e=null!=g?g:C;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){N&&b(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var v=r(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,r=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(p(t),l(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;r=null!=(i=c[o])?i:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},o,{className:(0,i.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function g(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var i=r.find((function(e){return e.props.value===n}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=h(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},7467:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(4866),u=r(5162),l=["components"],s={id:"ehv-hierarchy-assigner",title:"EHV hierarchy assigner"},c=void 0,p={unversionedId:"ehv-hierarchy-assigner",id:"version-0.21.2/ehv-hierarchy-assigner",title:"EHV hierarchy assigner",description:"The EhvHierarchyAssigner is used to populate hierarchy for the meshed network from the zone substations up to transmission substations.",source:"@site/versioned_docs/version-0.21.2/ehv-hierarchy-assigner.mdx",sourceDirName:".",slug:"/ehv-hierarchy-assigner",permalink:"/evolve/docs/migrator-sdk/0.21.2/ehv-hierarchy-assigner",draft:!1,tags:[],version:"0.21.2",frontMatter:{id:"ehv-hierarchy-assigner",title:"EHV hierarchy assigner"}},d={},f=[{value:"Usage",id:"usage",level:2}],m={toc:f},h="wrapper";function v(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The EhvHierarchyAssigner is used to populate hierarchy for the meshed network from the zone substations up to transmission substations.\nIt creates ",(0,i.kt)("inlineCode",{parentName:"p"},"Loops")," to represent groups of ",(0,i.kt)("inlineCode",{parentName:"p"},"Substations")," that are linked together by ",(0,i.kt)("inlineCode",{parentName:"p"},"Circuits"),". In our case a ",(0,i.kt)("inlineCode",{parentName:"p"},"Circuit")," is any section of network leaving a substation\nthat is not a ",(0,i.kt)("inlineCode",{parentName:"p"},"Feeder"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Circuits")," that connect at least two ",(0,i.kt)("inlineCode",{parentName:"p"},"Substations")," will form a ",(0,i.kt)("inlineCode",{parentName:"p"},"Loop"),"."),(0,i.kt)("p",null,"As there can be many ",(0,i.kt)("inlineCode",{parentName:"p"},"Circuits")," and source data does not usually provide sensible names for them, you can utilise the ",(0,i.kt)("inlineCode",{parentName:"p"},"circuitNameProvider")," to provide a user-friendly\nname to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Circuit")," if possible. A common example of this is that the equipment within the circuit may have properties that can be used for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Circuit")," name,\nand these will be present in the circuit, so you can use them to set the name."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Create an EhvHierarchyAssigner and process a NetworkService. This will populate the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkService")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Circuits")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Loops"),' with UUIDs for mRIDs,\nand will name the circuits based on the first equipment in the circuit it finds with a name starting with "Circuit".'),(0,i.kt)(o.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val ehvHierarchyAssigner = EhvHierarchyAssigner { circuit ->\n    circuit.equipment.firstOrNull { eq -> eq.name.startsWith("Circuit") } ?: ""\n}\n\nehvHierarchyAssigner.process(networkService)\n')))))}v.isMDXComponent=!0}}]);