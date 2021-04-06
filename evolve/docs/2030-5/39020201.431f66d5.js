(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(483)),o=n(481),c={title:"AccumulationBehaviourType"},s={unversionedId:"2030-5/SmartGrid/IEEE2030-5/Common/Types/AccumulationBehaviourType",id:"2030-5/SmartGrid/IEEE2030-5/Common/Types/AccumulationBehaviourType",isDocsHomePage:!1,title:"AccumulationBehaviourType",description:"Class Description",source:"@site/docs\\2030-5\\SmartGrid\\IEEE2030-5\\Common\\Types\\AccumulationBehaviourType.md",slug:"/2030-5/SmartGrid/IEEE2030-5/Common/Types/AccumulationBehaviourType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/AccumulationBehaviourType",version:"current",sidebar:"docs",previous:{title:"RandomizableEvent",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Objects/RandomizableEvent"},next:{title:"ApplianceLoadReductionType",permalink:"/evolve/docs/2030-5/2030-5/SmartGrid/IEEE2030-5/Common/Types/ApplianceLoadReductionType"}},u=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Associations",id:"associations",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"0 = Not Applicable (default, if not specified)"),Object(i.a)("p",null,"3 = Cumulative"),Object(i.a)("p",null,"The sum of the previous billing period values. Note: \u201cCumulative\u201d is commonly used in conjunction with \u201cdemand.\u201d Each demand reset causes the maximum demand value for the present billing period (since the last demand reset) to accumulate as an accumulative total of all maximum demands. So instead of \u201czeroing\u201d the demand register, a demand reset has the affect of adding the present maximum demand to this accumulating total."),Object(i.a)("p",null,"4 = DeltaData"),Object(i.a)("p",null,"The difference between the value at the end of the prescribed interval and the beginning of the interval. This is used for incremental interval data. "),Object(i.a)("p",null,"Note: One common application would be for load profile data, another use might be to report the number of events within an interval (such as the number of equipment energizations within the specified period of time.)"),Object(i.a)("p",null,"6 = Indicating"),Object(i.a)("p",null,"As if a needle is swung out on the meter face to a value to indicate the current value. (Note: An \u201cindicating\u201d value is typically measured over hundreds of milliseconds or greater, or may imply a \u201cpusher\u201d mechanism to capture a value. Compare this to \u201cinstantaneous\u201d which is measured over a shorter period of time.) "),Object(i.a)("p",null,"9 = Summation"),Object(i.a)("p",null,"A form of accumulation which is selective with respect to time. "),Object(i.a)("p",null,"Note : \u201cSummation\u201d could be considered a specialization of \u201cBulk Quantity\u201d according to the rules of inheritance where \u201cSummation\u201d selectively accumulates pulses over a timing pattern, and \u201cBulkQuantity\u201d accumulates pulses all of the time."),Object(i.a)("p",null,"12 = Instantaneous"),Object(i.a)("p",null,"Typically measured over the fastest period of time allowed by the definition of the metric (usually milliseconds or tens of milliseconds.) (Note: \u201cInstantaneous\u201d was moved to attribute #3 in 61968-9Ed2 from attribute #1 in 61968-9Ed1.)"),Object(i.a)("p",null,"All other values reserved.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(o.a,{to:"/2030-5/SmartGrid/IEEE2030-5/Common/PrimitiveTypes/UInt8",mdxType:"Link"},"UInt8"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}p.isMDXComponent=!0},480:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},481:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(480),c=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var u=n(482),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:d,activeClassName:m,isActive:f,"data-noBrokenLinkCheck":b,autoAddBaseUrl:h=!0}=e,v=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:O}=Object(u.b)(),y=Object(r.useContext)(s),j=p||d,g=Object(o.a)(j),w=null==j?void 0:j.replace("pathname://",""),E=void 0!==w?(T=w,h&&(e=>e.startsWith("/"))(T)?O(T):T):void 0;var T;const C=Object(r.useRef)(!1),A=n?i.e:i.c,k=c.a.canUseIntersectionObserver;let N;Object(r.useEffect)((()=>(!k&&g&&window.docusaurus.prefetch(E),()=>{k&&N&&N.disconnect()})),[E,k,g]);const I=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,x=!E||!g||I;return E&&g&&!I&&!b&&y.collectLink(E),x?a.a.createElement("a",Object.assign({href:E},j&&!g&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(A,Object.assign({},v,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(E),C.current=!0)},innerRef:e=>{var t,n;k&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(E)},N=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())}))})),N.observe(t))},to:E||""},n&&{isActive:f,activeClassName:m}))}},482:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(480);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},483:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);