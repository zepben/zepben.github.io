"use strict";(self.webpackChunkmigrator_sdk_jvm_doco=self.webpackChunkmigrator_sdk_jvm_doco||[]).push([[3061],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(6010),i={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7462),a=r(7294),i=r(6010),l=r(2466),o=r(6550),u=r(1980),s=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function k(e){var t,r,n,i,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,p=m(e),k=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),v=k[0],b=k[1],h=f({queryString:u,groupId:s}),w=h[0],g=h[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],i=r[1],[n,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),S=y[0],N=y[1],T=function(){var e=null!=w?w:S;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),N(e)}),[g,N,p]),tabValues:p}}var v=r(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,r=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==o&&(p(t),u(n))},d=function(e){var t,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var i,l=c.indexOf(e.currentTarget)-1;r=null!=(i=c[l])?i:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=r?r:t)})))}function w(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var i=r.find((function(e){return e.props.value===n}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function g(e){var t=k(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function y(e){var t=(0,v.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}},9544:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(4866),o=r(5162),u=["components"],s={id:"network-simplifier",title:"Network Simplifier"},c=void 0,p={unversionedId:"network-simplifier",id:"version-0.17.0/network-simplifier",title:"Network Simplifier",description:"The NetworkSimplifier simplifies a CIM network model to prepare it for direct translation to a bus-branch model (e.g. OpenDSS).",source:"@site/versioned_docs/version-0.17.0/network-simplifier.mdx",sourceDirName:".",slug:"/network-simplifier",permalink:"/evolve/docs/migrator-sdk-jvm/0.17.0/network-simplifier",draft:!1,tags:[],version:"0.17.0",frontMatter:{id:"network-simplifier",title:"Network Simplifier"}},m={},d=[{value:"Usage",id:"usage",level:2}],f={toc:d},k="wrapper";function v(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)(k,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The NetworkSimplifier simplifies a CIM network model to prepare it for direct translation to a bus-branch model (e.g. OpenDSS)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only certain types of equipment are kept: lines, transformers, energy sources, energy consumers, and power electronics connections."),(0,i.kt)("li",{parentName:"ul"},"Switches may be included in the simplified network by setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"keepSwitches")," parameter to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". Otherwise, closed switches are collapsed and open\nswitches are removed."),(0,i.kt)("li",{parentName:"ul"},"All other equipment, such as junctions, are treated as having zero impedance and are collapsed."),(0,i.kt)("li",{parentName:"ul"},"Strings of connected lines sharing a common impedance, phasing, and wire info are collapsed into a longer line. The length of this line is equal to the sum\nof the lengths of the original lines."),(0,i.kt)("li",{parentName:"ul"},"Networks below SWER isolation transformers and distribution transformers may also be optionally collapsed."),(0,i.kt)("li",{parentName:"ul"},"Feeder head terminals are relocated to an appropriate nearby terminal if the original terminal is collapsed as part of a group of excluded equipment."),(0,i.kt)("li",{parentName:"ul"},"To make translation to certain models easier (e.g. OpenDSS), each terminal is guaranteed to be connected to a connectivity node.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkSimplifier")," and process a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkService"),"."),(0,i.kt)(l.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val networkSimplifier = NetworkSimplifier()\n\nnetworkSimplifier.process(networkService)\n")))),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkSimplifier")," that keeps switches in the simplified model."),(0,i.kt)(l.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val networkSimplifier = NetworkSimplifier(keepSwitches = true)\n\nnetworkSimplifier.process(networkService)\n")))),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkSimplifier")," that uses the current state of the switches, rather than their normal state."),(0,i.kt)(l.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val networkSimplifier = NetworkSimplifier(networkState = NetworkState.Current)\n\nnetworkSimplifier.process(networkService)\n")))),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkSimplifier")," with a different threshold for line resistance and reactance. Lines that fail to exceed either threshold are treated as if they\nhad zero impedance, and are collapsed along with adjacent zero-impedance equipment."),(0,i.kt)(l.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val networkSimplifier = NetworkSimplifier(minLineResistanceOhms = 0.002, minLineReactanceOhms = 0.003)\n\nnetworkSimplifier.process(networkService)\n")))),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkSimplifier")," that collapses both SWER and distribution networks."),(0,i.kt)(l.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val networkSimplifier = NetworkSimplifier(collapsedSwerVoltage = 250, collapseLvNetwork = true)\n\nnetworkSimplifier.process(networkService)\n")))))}v.isMDXComponent=!0}}]);