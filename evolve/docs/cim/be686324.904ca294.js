(window.webpackJsonp=window.webpackJsonp||[]).push([[1595],{1664:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(2175)),c=t(2176),o={title:"SynchronousMachineSimplified"},s={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified",isDocsHomePage:!1,title:"SynchronousMachineSimplified",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\SynchronousMachineDynamics\\SynchronousMachineSimplified.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineSimplified",version:"current",sidebar:"docs",previous:{title:"SynchronousMachineDynamics",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDynamics"},next:{title:"SynchronousMachineDetailed",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDetailed"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],u={toc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The simplified model represents a synchronous generator as a constant internal voltage behind an impedance",Object(i.a)("i",null," "),"(",Object(i.a)("i",null,"Rs + jXp"),") as shown in the Simplified diagram."),Object(i.a)("p",null,"Since internal voltage is held constant, there is no ",Object(i.a)("i",null,"Efd")," input and any excitation system model will be ignored.  There is also no ",Object(i.a)("i",null,"Ifd")," output."),Object(i.a)("p",null,"This model should not be used for representing a real generator except, perhaps, small generators whose response is insignificant.  "),Object(i.a)("p",null,"The parameters used for the simplified model include:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"RotatingMachineDynamics.damping (",Object(i.a)("i",null,"D"),");")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"RotatingMachineDynamics.inertia (",Object(i.a)("i",null,"H"),");")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"RotatingMachineDynamics.statorLeakageReactance (used to exchange ",Object(i.a)("i",null,"jXp "),"for SynchronousMachineSimplified);")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},"RotatingMachineDynamics.statorResistance (",Object(i.a)("i",null,"Rs"),").  "))),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("p",null,"None  "),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/SynchronousMachineDynamics/SynchronousMachineDynamics",mdxType:"Link"},"SynchronousMachineDynamics"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}d.isMDXComponent=!0},2174:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},2175:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return t?r.a.createElement(m,o({ref:n},l,{components:t})):r.a.createElement(m,o({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2176:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(10),c=t(2174),o=t(8),s=Object(a.createContext)({collectLink:function(){}}),l=t(2177),u=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};n.a=function(e){var n,t,d,p=e.isNavLink,b=e.to,m=e.href,f=e.activeClassName,h=e.isActive,O=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,j=void 0===y||y,v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(l.b)().withBaseUrl,M=Object(a.useContext)(s),S=b||m,C=Object(c.a)(S),w=null==S?void 0:S.replace("pathname://",""),D=void 0!==w?(t=w,j&&function(e){return e.startsWith("/")}(t)?g(t):t):void 0,N=Object(a.useRef)(!1),I=p?i.e:i.c,E=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!E&&C&&window.docusaurus.prefetch(D),function(){E&&d&&d.disconnect()}}),[D,E,C]);var T=null!==(n=null==D?void 0:D.startsWith("#"))&&void 0!==n&&n,k=!D||!C||T;return D&&C&&!T&&!O&&M.collectLink(D),k?r.a.createElement("a",Object.assign({href:D},S&&!C&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(I,Object.assign({},v,{onMouseEnter:function(){N.current||(window.docusaurus.preload(D),N.current=!0)},innerRef:function(e){var n,t;E&&e&&C&&(n=e,t=function(){window.docusaurus.prefetch(D)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(n),d.disconnect(),t())}))}))).observe(n))},to:D||""},p&&{isActive:h,activeClassName:f}))}},2177:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c}));var a=t(23),r=t(2174);function i(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(o)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+u:u}(i,t,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}}}]);