"use strict";(self.webpackChunkmigrator_sdk_jvm_doco=self.webpackChunkmigrator_sdk_jvm_doco||[]).push([[447],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,p=d["".concat(l,".").concat(f)]||d[f]||v[f]||o;return r?n.createElement(p,u(u({ref:t},c),{},{components:r})):n.createElement(p,u({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(6010),o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(7462),a=r(7294),o=r(6010),u=r(2466),i=r(6550),l=r(1980),s=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function v(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),u=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function m(e){var t,r,n,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,d=v(e),m=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:d})})),b=m[0],h=m[1],g=p({queryString:l,groupId:s}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=w[0],L=w[1],F=function(){var e=null!=y?y:T;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){F&&h(F)}),[F]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),L(e)}),[k,L,d]),tabValues:d}}var b=r(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],d=(0,u.o5)().blockElementScrollPositionUntilNextRender,v=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(d(t),l(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":v(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;r=null!=(o=c[u])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:v},u,{className:(0,o.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},4382:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=r(4866),i=r(5162),l=["components"],s={id:"lv-feeder-creator",title:"Lv Feeder Creator"},c=void 0,d={unversionedId:"lv-feeder-creator",id:"version-0.12.0/lv-feeder-creator",title:"Lv Feeder Creator",description:"The LvFeederCreator is used to create LvFeeders on a given NetworkService. An LvFeeder is an EquipmentContainer that represents a branch of LV network",source:"@site/versioned_docs/version-0.12.0/lv-feeder-creator.mdx",sourceDirName:".",slug:"/lv-feeder-creator",permalink:"/evolve/docs/migrator-sdk-jvm/0.12.0/lv-feeder-creator",draft:!1,tags:[],version:"0.12.0",frontMatter:{id:"lv-feeder-creator",title:"Lv Feeder Creator"}},v={},f=[{value:"Usage",id:"usage",level:2}],p={toc:f},m="wrapper";function b(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The LvFeederCreator is used to create LvFeeders on a given NetworkService. An LvFeeder is an EquipmentContainer that represents a branch of LV network\nstarting at a distribution substation and continuing until the end of the LV network. LvFeeders are associated with Feeders and typically a Feeder will have\nmany LvFeeders, with one per distribution substation. AssignToLvFeeders in the EWB SDK should be run after AssignToFeeders to associate equipment with\nthe generated LvFeeders."),(0,o.kt)("p",null,"The distribution substation will belong to both the Feeder associated with the LvFeeder and the newly created LvFeeder, with the normalHeadTerminal of the\nLvFeeder pointing to the LV side Terminal of the distribution substation."),(0,o.kt)("p",null,"This processor should be run on any NetworkService that contains LV network, and will create an LvFeeder on all terminals that bridge HV and LV equipment."),(0,o.kt)("p",null,"*** Note: Terminals that are already the head of an LvFeeder, or LV terminals that originate in a Substation will be skipped."),(0,o.kt)("p",null,"Prior to running the LvFeederCreator your NetworkService must meet the following conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The base voltage of each equipment must be correctly assigned. Use the VoltageProcessor to ensure all equipment has voltages."),(0,o.kt)("li",{parentName:"ul"},"The connectivity of conducting equipment must be final."),(0,o.kt)("li",{parentName:"ul"},"All HV Feeders you wish to add from the source data have been added. The LvFeeders can be associated with upstream Feeders through AssignToLvFeeders"),(0,o.kt)("li",{parentName:"ul"},"All LvFeeders you wish to include from the source data have been added with their normalHeadTerminal set to the LV side of a HV -> LV bridge. This will ensure duplicate LvFeeders are not created unnecessarily."),(0,o.kt)("li",{parentName:"ul"},"All equipment inside a substation has been added to the Substation")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,'Create an LvFeederCreator and process a NetworkService. This will yield LvFeeders for any distribution substations in networkService with an mRID of\n"',"[distribution-sub-lv-terminal-mRID]",'-lvf"'),(0,o.kt)(u.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val lvFeederCreator = LvFeederCreator()\n\nlvFeederCreator.process(networkService)\n")))),(0,o.kt)("p",null,"Create an LvFeederCreator with an mRIDSelector that uses the normalHeadTerminals associated ConductingEquipment's mRID for the LvFeeder mRIDs."),(0,o.kt)(u.Z,{groupId:"code-example",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val lvFeederCreator = LvFeederCreator { "${it.conductingEquipment.mRID}-lvf" }\n\nlvFeederCreator.process(networkService)\n')))))}b.isMDXComponent=!0}}]);