(window.webpackJsonp=window.webpackJsonp||[]).push([[682],{2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),O=n,d=p["".concat(c,".").concat(O)]||p[O]||m[O]||i;return a?r.a.createElement(d,l({ref:t},b,{components:a})):r.a.createElement(d,l({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),c=a(2179),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),b=a(2182),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,m,p=e.isNavLink,O=e.to,d=e.href,j=e.activeClassName,f=e.isActive,u=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,g=void 0===v||v,h=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(b.b)().withBaseUrl,N=Object(n.useContext)(o),C=O||d,E=Object(c.a)(C),T=null==C?void 0:C.replace("pathname://",""),I=void 0!==T?(a=T,g&&function(e){return e.startsWith("/")}(a)?y(a):a):void 0,w=Object(n.useRef)(!1),A=p?i.e:i.c,k=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&E&&window.docusaurus.prefetch(I),function(){k&&m&&m.disconnect()}}),[I,k,E]);var x=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,D=!I||!E||x;return I&&E&&!x&&!u&&N.collectLink(I),D?r.a.createElement("a",Object.assign({href:I},C&&!E&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(A,Object.assign({},h,{onMouseEnter:function(){w.current||(window.docusaurus.preload(I),w.current=!0)},innerRef:function(e){var t,a;k&&e&&E&&(t=e,a=function(){window.docusaurus.prefetch(I)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),a())}))}))).observe(t))},to:I||""},p&&{isActive:f,activeClassName:j}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(23),r=a(2179);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,l=void 0!==c&&c,o=i.absolute,b=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+s:s}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},751:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(2180)),c=a(2181),l={title:"EnvironmentalAlert"},o={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",id:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",isDocsHomePage:!1,title:"EnvironmentalAlert",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\EnvironmentalAlert.md",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",version:"current",sidebar:"docs",previous:{title:"EnvironmentalCodedValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalCodedValue"},next:{title:"EnvironmentalAnalog",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],s={toc:b};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"An environmental alert issued by a provider or system.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"alertType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The type of the issued alert which is drawn from the specified alert type list.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cancelledDateTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime",mdxType:"Link"},"DateTime")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time and date alert cancelled. Used only if alert is cancelled before it expires.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"headline"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An abbreviated textual description of the alert issued.  Note: the full text of the alert appears in the .description attribute (inherited from IdentifiedObject).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inEffect"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval",mdxType:"Link"},"DateTimeInterval")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The interval for which this weather alert is in effect.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC61968/Common/ActivityRecord",mdxType:"Link"},"ActivityRecord"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",mdxType:"Link"},"EnvironmentalAlert")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/AlertTypeList",mdxType:"Link"},"AlertTypeList")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAlert"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An alert whose type is drawn from this alert type list."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AlertTypeList"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The list of alert types from which the type of this alert is drawn.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",mdxType:"Link"},"EnvironmentalAlert")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType",mdxType:"Link"},"EnvironmentalLocationType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAlert"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Environmental alert applying to location of this type."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalLocationKind"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of location to which this environmental alert applies.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",mdxType:"Link"},"EnvironmentalAlert")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)(c.a,{to:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalDataProvider",mdxType:"Link"},"EnvironmentalDataProvider")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAlert"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Alert issued by this environmental data provider."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalDataProvider"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Environmental data provider for this alert.")))))}m.isMDXComponent=!0}}]);