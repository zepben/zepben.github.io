(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{2199:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2200:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),O=b(a),j=n,d=O["".concat(o,".").concat(j)]||O[j]||m[j]||i;return a?r.a.createElement(d,c({ref:t},s,{components:a})):r.a.createElement(d,c({ref:t},s))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),o=a(2199),c=a(8);const l=Object(n.createContext)({collectLink:()=>{}});var s=a(2202),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:m,href:O,activeClassName:j,isActive:d,"data-noBrokenLinkCheck":p,autoAddBaseUrl:u=!0}=e,f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(s.b)(),g=Object(n.useContext)(l),y=m||O,N=Object(o.a)(y),h=null==y?void 0:y.replace("pathname://",""),C=void 0!==h?(I=h,u&&(e=>e.startsWith("/"))(I)?v(I):I):void 0;var I;const T=Object(n.useRef)(!1),E=a?i.e:i.c,L=c.a.canUseIntersectionObserver;let x;Object(n.useEffect)((()=>(!L&&N&&window.docusaurus.prefetch(C),()=>{L&&x&&x.disconnect()})),[C,L,N]);const k=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,D=!C||!N||k;return C&&N&&!k&&!p&&g.collectLink(C),D?r.a.createElement("a",Object.assign({href:C},y&&!N&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(E,Object.assign({},f,{onMouseEnter:()=>{T.current||(window.docusaurus.preload(C),T.current=!0)},innerRef:e=>{var t,a;L&&e&&N&&(t=e,a=()=>{window.docusaurus.prefetch(C)},x=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),a())}))})),x.observe(t))},to:C||""},a&&{isActive:d,activeClassName:j}))}},2202:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(23),r=a(2199);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+o:o}(t,e,a,n)}}function o(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},520:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(2200)),o=a(2201),c={title:"IdentifiedObject",hide_table_of_contents:!0},l={unversionedId:"evolve/IEC61970/Base/Core/IdentifiedObject",id:"evolve/IEC61970/Base/Core/IdentifiedObject",isDocsHomePage:!1,title:"IdentifiedObject",description:"Class Description",source:"@site/docs\\evolve\\IEC61970\\Base\\Core\\IdentifiedObject.mdx",slug:"/evolve/IEC61970/Base/Core/IdentifiedObject",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/IdentifiedObject",version:"current",sidebar:"docs",previous:{title:"Evolve CIM Profile",permalink:"/evolve/docs/cim/evolve"},next:{title:"PowerSystemResource",permalink:"/evolve/docs/cim/evolve/IEC61970/Base/Core/PowerSystemResource"}},s=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:s};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"This is a root class to provide common identification for all classes needing identification and naming attributes.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mRID"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Master resource identifier issued by a model authority. The mRID is unique within an exchange context. Global uniqueness is easily achieved by using a UUID, as specified in RFC 4122, for the mRID. The use of UUID is strongly recommended. For CIMXML data files in RDF syntax conforming to IEC 61970-552, the mRID is mapped to rdf:ID or rdf:about attributes that identify CIM object elements.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name is any free human readable and possibly non unique text naming the object.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The description is a free human readable text describing or naming the object. It may be non unique and may not correlate to a naming hierarchy.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"None")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/ACDCTerminal",mdxType:"Link"},"ACDCTerminal")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61968/Assets/Asset",mdxType:"Link"},"Asset")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61968/Assets/AssetInfo",mdxType:"Link"},"AssetInfo")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/BaseVoltage",mdxType:"Link"},"BaseVoltage")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/ConnectivityNode",mdxType:"Link"},"ConnectivityNode")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/Diagram",mdxType:"Link"},"Diagram")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/DiagramObject",mdxType:"Link"},"DiagramObject")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/DiagramObjectStyle",mdxType:"Link"},"DiagramObjectStyle")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/DiagramStyle",mdxType:"Link"},"DiagramStyle")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61968/Common/Document",mdxType:"Link"},"Document")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/GeographicalRegion",mdxType:"Link"},"GeographicalRegion")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Meas/IOPoint",mdxType:"Link"},"IOPoint")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61968/Common/Location",mdxType:"Link"},"Location")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Meas/Measurement",mdxType:"Link"},"Measurement")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61968/Common/Organisation",mdxType:"Link"},"Organisation")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61968/Common/OrganisationRole",mdxType:"Link"},"OrganisationRole")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Wires/PerLengthLineParameter",mdxType:"Link"},"PerLengthLineParameter")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/PowerSystemResource",mdxType:"Link"},"PowerSystemResource")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/SCADA/RemotePoint",mdxType:"Link"},"RemotePoint")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/SubGeographicalRegion",mdxType:"Link"},"SubGeographicalRegion")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Wires/TransformerEnd",mdxType:"Link"},"TransformerEnd")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Wires/TransformerStarImpedance",mdxType:"Link"},"TransformerStarImpedance")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61968/AssetInfo/TransformerTest",mdxType:"Link"},"TransformerTest")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/evolve/IEC61968/Metering/UsagePoint",mdxType:"Link"},"UsagePoint"))),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"True")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/DiagramLayout/DiagramObject",mdxType:"Link"},"DiagramObject")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IdentifiedObject"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The domain object to which this diagram object is associated."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DiagramObjects"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The diagram objects that are associated with the domain object.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/Name",mdxType:"Link"},"Name")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(o.a,{to:"/evolve/IEC61970/Base/Core/IdentifiedObject",mdxType:"Link"},"IdentifiedObject")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Names"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All names of this identified object."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"IdentifiedObject"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Identified object that this name designates.")))))}m.isMDXComponent=!0}}]);