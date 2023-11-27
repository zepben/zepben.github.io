(window.webpackJsonp=window.webpackJsonp||[]).push([[25],Array(95).concat([function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),c=(a(0),a(117)),i={},l={unversionedId:"cppal-regulator-repair",id:"version-2.14.0/cppal-regulator-repair",isDocsHomePage:!1,title:"cppal-regulator-repair",description:"Regulator Repairing",source:"@site/versioned_docs/version-2.14.0/cppal-regulator-repair.md",slug:"/cppal-regulator-repair",permalink:"/evolve/docs/gis-network-extractor/2.14.0/cppal-regulator-repair",version:"2.14.0"},s=[{value:"Invalid Regulator Site Types",id:"invalid-regulator-site-types",children:[]},{value:"Single Regulator Sites",id:"single-regulator-sites",children:[]},{value:"Dual Regulator Sites",id:"dual-regulator-sites",children:[]},{value:"Triple Regulator Sites",id:"triple-regulator-sites",children:[]}],b={toc:s};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h1",{id:"regulator-repairing"},"Regulator Repairing"),Object(c.a)("p",null,'Some regulators in the CPPAL source data are not electrically correct, others split phases in ways the EWB does not handle, so we need to "repair" them for use\nin EWB. These repairs will not try to change the connectivity, but will remove connectivity that causes EWB problems, and potentially change phases.'),Object(c.a)("p",null,"In any error reports about step failures, the steps represent the minimum distance from any of the regulator sites regulators, counting all conductors,\njunctions and switchgear. The names of the types below are not intended to reference any external system, and are labelled by their layout characteristics."),Object(c.a)("h2",{id:"invalid-regulator-site-types"},"Invalid Regulator Site Types"),Object(c.a)("p",null,"There are other regulator configurations than those mentioned below, many of which are valid and have been excluded from this documentation."),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Sub-variant"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Boxed three connection single regulator sites with bypass"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"The five digit sub-variant represents the incoming connection location, then the number of switches on supply side, load side, spur and bypass")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2a"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Parallel dual regulator sites"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"There are no known sub-variants of this type")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2b"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Boxed dual regulator sites with bypass"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"The four digit sub-variant represents the number of switches on the supply, load, spur and bypass")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2c"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Parallel boxed dual regulator sites"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"There are no known sub-variants of this type")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"3a"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Parallel triple regulator sites"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"The two digit sub-variant represents the regulator block connection location, and the number of switches inline with each regulator")))),Object(c.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.a)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.a)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"For each of the above, the supply and load side switch counts may be swapped, as the direction of feed is not required for the regulator processing"))),Object(c.a)("h2",{id:"single-regulator-sites"},"Single Regulator Sites"),Object(c.a)("p",null,"We support the following standard single regulator site layouts:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Original"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Repaired"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 11111"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 11111",src:a(138).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 11111",src:a(139).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 21112"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 21112",src:a(140).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 21112",src:a(141).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 21112 swapped"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 21112 swapped",src:a(142).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 21112 swapped",src:a(143).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 21212"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 21212",src:a(144).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 21212",src:a(145).default}))))),Object(c.a)("p",null,"We also detect some errors in the connectivity in these sites with the following edge case processing:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Original"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Repaired"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 11111 node"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 11111 node",src:a(146).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 11111 node",src:a(147).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 21112 nodes"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 21112 nodes",src:a(148).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 21112 nodes",src:a(149).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 21212 extra"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 21212 extra",src:a(150).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 21212 extra",src:a(151).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 21212 junction"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 21212 junction",src:a(152).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 21212 junction",src:a(153).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"1a 21212 node"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 1a 21212 node",src:a(154).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 1a 21212 node",src:a(155).default}))))),Object(c.a)("h2",{id:"dual-regulator-sites"},"Dual Regulator Sites"),Object(c.a)("p",null,"We support the following standard dual regulator site layouts:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Original"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Repaired"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2a"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2a",src:a(156).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"unchanged")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2b 1111"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2b 1111",src:a(157).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2b 1111",src:a(158).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2b 1112"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2b 1112",src:a(159).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2b 1112",src:a(160).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2b 1211"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2b 1211",src:a(161).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2b 1211",src:a(162).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2c"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2c",src:a(163).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2c",src:a(164).default}))))),Object(c.a)("p",null,"We also detect some errors in the connectivity in these sites with the following edge case processing:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Original"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Repaired"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2a nodes"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2a nodes",src:a(165).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"unchanged")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2a spur"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2a spur",src:a(166).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2a spur",src:a(167).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2b 1110"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2b 1110",src:a(168).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2b 1110",src:a(169).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2b 1112 node"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2b 1112 node",src:a(170).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2b 1112 node",src:a(171).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2b 1112 nodes"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2b 1112 nodes",src:a(172).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2b 1112 nodes",src:a(173).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"2b 1211 node"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 2b 1211 node",src:a(174).default})),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"repaired type 2b 1211 node",src:a(175).default}))))),Object(c.a)("h2",{id:"triple-regulator-sites"},"Triple Regulator Sites"),Object(c.a)("p",null,"All regulators in a triple regulator site will have their phases updated to ABC. This prevents EWB from dropping phases, as EWB is not able to detect the way\nthe split-phase regulator is connected as a 3-phase split. If at some stage it is deemed that these regulators must be modelled as individual phased\ntransformers, these repair algorithms will need to be revisited to split the phases in a way that EWB detects."),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Original"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"3a 10"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"type 3a 10 original",src:a(176).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"3a 20"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"type 3a 20 original",src:a(177).default}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"3a 21"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"type 3a 21 original",src:a(178).default}))))),Object(c.a)("p",null,"We also detect some errors in the connectivity in these sites with the following edge case processing:"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Original"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"3a 10 node"),Object(c.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(c.a)("img",{alt:"original type 3a 10 node",src:a(179).default}))))))}d.isMDXComponent=!0},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),d=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),o=d(a),u=r,g=o["".concat(i,".").concat(u)]||o[u]||p[u]||c;return a?n.a.createElement(g,l({ref:t},b,{components:a})):n.a.createElement(g,l({ref:t},b))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=o;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-11111-5c416201a275309005ae14353bfdfdb4.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-11111-8f859e772ae1869013233561a5999b06.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-21112-52e14aeba1aca5b5b6660277fcb16b55.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-21112-021652c5fe8eb93bdf214b427a61976e.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-21112-swapped-2631b57b20d90c8206cf2aa60b06aefb.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-21112-swapped-5fa1b1fd01a99366921ea92b2126adac.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-21212-4dd4c3bbbf0a4556f8e208d395fad16a.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-21212-0ab9f7bbece338fe93a2a617fe81d4ad.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-11111-node-46c94f783404ae662bd1a860272bf542.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-11111-node-1933c7291800c603491dc59a53c8d578.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-21112-nodes-e090ac5d2100dc8f465c04f50142afa8.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-21112-nodes-25a435600a570ea5450abdc54c7bde4f.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-21212-extra-1c5d8c08e7624eec933c0089dbb6f714.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-21212-extra-47757489c6e1b44926a167cba636fc1f.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-21212-junction-80494ffdefa681fe3d3367b58e909465.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-21212-junction-e33619eee014f0d117c70201119e8953.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-1a-21212-node-d9d467d03f0ec8a28570fa6f53e0c23f.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-1a-21212-node-172d0c26f860009af3195e3f939e4a32.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2a-0234e71d15c1443daf151d02d0f07fa6.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2b-1111-4a3170140267e772d25327a8c56061a5.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2b-1111-b6f1be19fbb1855418b68329e776e3f0.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2b-1112-0c3be65cd2986d4c074e5d0b582b512f.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2b-1112-a4ebf862f719b226e834987caf028069.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2b-1211-eee0bc4c1824fc46de8571055268867f.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2b-1211-0330dbd24edfa357a4f1fecabea204ab.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2c-e1ee879e6520a0ab15dda3e3eda48f29.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2c-3bb1a59d8592bf768afda0f2bba9ec33.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2a-nodes-271d78b52f9b80cfb7558024b9d04f2c.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2a-spur-7ea5c1ee89c09a9aaa1c025881df299d.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2a-spur-42e9a3c66a6acabd3460a36492e5d788.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2b-1110-fcc2dff6dea0daa1eff099521e252c76.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2b-1110-1913b442ceba43596f64eab574bae9b0.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2b-1112-node-05f80ea9dc11653b7b950e1d499d4199.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2b-1112-node-9fc4c96643cee617736a730ed0c4a6a6.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2b-1112-nodes-fa8a95d8bee2e08a066e01ae14d73c22.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2b-1112-nodes-c3f8c89e36c2b3675b4008cbe30f5060.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-2b-1211-node-02dadd5da135cd7f96d373fbd64106b4.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/repaired-2b-1211-node-9e00201ebae95dd4569817301be9cb98.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-3a-10-b29ece28372de51f172589080befe765.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-3a-20-8c78962f96b0abe29529b66cefd0d7d4.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-3a-21-8e9c7132e3b2ebf3ad72af3e03969217.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/original-3a-10-node-4ea5bc29db21803584d2ae00db4a4316.png"}])]);