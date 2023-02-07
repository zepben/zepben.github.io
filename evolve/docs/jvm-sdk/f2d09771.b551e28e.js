(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{163:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return d})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),l=(t(0),t(171)),i=t(172),o=t(173),s={id:"sdk-phases",title:"Phases and Feeder Directions"},c={unversionedId:"sdk-phases",id:"version-0.14.0/sdk-phases",isDocsHomePage:!1,title:"Phases and Feeder Directions",description:"This is a title",source:"@site/versioned_docs/version-0.14.0/phases.mdx",slug:"/sdk-phases",permalink:"/evolve/docs/jvm-sdk/0.14.0/sdk-phases",version:"0.14.0",sidebar:"version-0.14.0/someSidebar",previous:{title:"CIM Services",permalink:"/evolve/docs/jvm-sdk/0.14.0/sdk-services"},next:{title:"Tracing",permalink:"/evolve/docs/jvm-sdk/0.14.0/sdk-tracing"}},d=[{value:"This is a title",id:"this-is-a-title",children:[]},{value:"Traced Phases",id:"traced-phases",children:[]},{value:"Feeder Direction",id:"feeder-direction",children:[]},{value:"Previous Versions",id:"previous-versions",children:[]}],m={toc:d};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("h2",{id:"this-is-a-title"},"This is a title"),Object(l.a)("p",null,"There are three different types of phases stored/calculated by the SDK:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Phase Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"SDK Field"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nominal"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"Terminal.phases")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"PhaseCode")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),'The nominal phases of the network indicate how the network is connected. The nominal phases can include the "unknown" phases ',Object(l.a)("inlineCode",{parentName:"td"},"X")," and ",Object(l.a)("inlineCode",{parentName:"td"},"Y"),". ",Object(l.a)("br",null),Object(l.a)("br",null),"This is the phase field that you are most likely to be interested in.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Normal"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"Terminal.normalPhases")," or ",Object(l.a)("inlineCode",{parentName:"td"},"Terminal.tracedPhases.normal")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"Traced")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The normal phases indicate the energised phases of the network in its normal state. There will not be any unknown phases in the normal phases, however; any de-energised areas of the network will not have normal phases.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"Terminal.currentPhases")," or ",Object(l.a)("inlineCode",{parentName:"td"},"Terminal.tracedPhases.current")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"Traced")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The current phases indicate the energised phases of the network in the current state. It has the same caveats as the normal phases.")))),Object(l.a)("p",null,"There are two different feeder directions calculated by the SDK:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Feeder Direction Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"SDK Field"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Normal"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"Terminal.normalFeederDirection")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"FeederDirection")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction of the feeder head with the network in its normal state.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"Terminal.currentFeederDirection")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"FeederDirection")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction of the feeder head with the network in its current state.")))),Object(l.a)("h2",{id:"traced-phases"},"Traced Phases"),Object(l.a)("p",null,"Traced phases should be considered '",Object(l.a)("em",{parentName:"p"},"read-only"),"' (even though they have setters). The traced phases will be automatically set if you load a database from disk,\notherwise you should make use of the ",Object(l.a)("inlineCode",{parentName:"p"},"SetPhases")," class. If you are implementing network modification algorithms, you can also make use of the ",Object(l.a)("inlineCode",{parentName:"p"},"RemovePhases"),"\nclass if required."),Object(l.a)("p",null,"There are two methods for accessing the traced phases:"),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"As a ",Object(l.a)("inlineCode",{parentName:"li"},"PhaseCode"),". If the traced phases do not form a valid phase code this will return ",Object(l.a)("inlineCode",{parentName:"li"},"null"),"."),Object(l.a)("li",{parentName:"ol"},"Per nominal phase.")),Object(l.a)(i.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(l.a)(o.a,{value:"java",mdxType:"TabItem"},Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'class PhaseLogger {\n    void logPhases(Terminal terminal) {\n        @Nullable PhaseCode phaseCode = terminal.getNormalPhases().asPhaseCode();\n        if (phaseCode != null)\n            System.out.printf("Found phases for %s. nominal: %s, normal: %s\\n", terminal, terminal.getPhases(), phaseCode);\n        else {\n            System.out.printf("Found partial phases %s:\\n", terminal);\n            terminal.getPhases().forEach(nominalPhase -> {\n                System.out.printf("   nominal: %s, normal: %s\\n", nominalPhase, terminal.getNormalPhases().get(nominalPhase));\n            });\n        }\n    }\n}\n'))),Object(l.a)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'class PhaseLogger {\n    fun logPhases(terminal: Terminal) {\n        val phaseCode = terminal.normalPhases.asPhaseCode()\n        if (phaseCode != null)\n            println("Found phases for $terminal. nominal: ${terminal.phases}, normal: $phaseCode")\n        else {\n            println("Found partial phases $terminal:")\n            terminal.phases.forEach {\n                println("   nominal: $it, normal: ${terminal.normalPhases[it]}")\n            }\n        }\n    }\n}\n')))),Object(l.a)("h2",{id:"feeder-direction"},"Feeder Direction"),Object(l.a)("p",null,"Feeder direction can be set to one of the following values:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"UPSTREAM")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Traversing from this terminal will lead you towards the feeder head.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"DOWNSTREAM")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Traversing from this terminal will lead you away from the feeder head.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"BOTH")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"This terminal is part of a loop and traversing from this terminal can both lead you towards or away from the feeder head.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NONE")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"This terminal is not on a feeder. e.g. De-energised sections or EHV.")))),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},Object(l.a)("strong",{parentName:"em"},"NOTE")),": A terminal only has a single feeder direction for each state of the network, so if there is unganged switching, not all nominal phases may\ntrace in the direction specified. A direction of ",Object(l.a)("inlineCode",{parentName:"p"},"BOTH")," can be formed from some phases tracing ",Object(l.a)("inlineCode",{parentName:"p"},"UPSTREAM"),", with others tracing ",Object(l.a)("inlineCode",{parentName:"p"},"DOWNSTREAM"),"."),Object(l.a)(i.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(l.a)(o.a,{value:"java",mdxType:"TabItem"},Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'class DirectionLogger {\n    void logDirection(Terminal terminal) {\n        System.out.printf("%s: normal=%s, current=%s\\n", terminal, terminal.getNormalFeederDirection(), terminal.getCurrentFeederDirection());\n    }\n}\n'))),Object(l.a)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'class DirectionLogger {\n    fun logDirection(terminal: Terminal) {\n        println("$terminal: normal=${terminal.normalFeederDirection}, current=${terminal.currentFeederDirection}")\n    }\n}\n')))),Object(l.a)("h2",{id:"previous-versions"},"Previous Versions"),Object(l.a)("p",null,"Previously, traced phases and feeder directions were stored together and could only be accessed per nominal phase. Below are some examples of converting from\nthe old format to the current:"),Object(l.a)(i.a,{groupId:"code-example",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(l.a)(o.a,{value:"java",mdxType:"TabItem"},Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Old\nclass PhaseAndDirectionLoggerOld {\n    void log(Terminal terminal) {\n        System.out.printf("%s:\\n", terminal);\n        terminal.getPhases().singlePhases().forEach(phase -> {\n            PhaseStatus nps = terminal.normalPhases(phase);\n            PhaseStatus cps = terminal.currentPhases(phase);\n\n            System.out.printf("   %s: n:%s:%s, c:%s:%s\\n", phase, nps.getPhase(), nps.getDirection(), cps.getPhase(), cps.getDirection());\n        });\n    }\n}\n\n// Becomes\nclass PhaseAndDirectionLoggerOld {\n    void log(Terminal terminal) {\n        System.out.printf("%s: dn:%s, dc:%s:\\n", terminal, terminal.getNormalFeederDirection(), terminal.getCurrentFeederDirection());\n        terminal.getPhases().forEach(phase -> {\n            System.out.printf("   %s: n:%s, c:%s\\n", phase, terminal.getNormalPhases().get(phase), terminal.getCurrentPhases().get(phase));\n        });\n    }\n}\n'))),Object(l.a)(o.a,{value:"kotlin",mdxType:"TabItem"},Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'// Old\nclass PhaseAndDirectionLoggerOld {\n    fun log(terminal: Terminal) {\n        println("$terminal:")\n        terminal.phases.singlePhases().forEach{\n            val nps = terminal.normalPhases(it)\n            val cps = terminal.currentPhases(it)\n\n            println("   $it: n:${nps.phase}:${nps.direction}, c:${cps.phase}:${cps.direction}")\n        }\n    }\n}\n\n// Becomes\ninternal class PhaseAndDirectionLoggerOld {\n    fun log(terminal: Terminal) {\n        println("$terminal: dn:${terminal.normalFeederDirection}, dc:${terminal.currentFeederDirection}:")\n        terminal.phases.forEach {\n            println("   $it: n:${terminal.normalPhases[it]}, c:${terminal.currentPhases[it]}")\n        }\n    }\n}\n')))))}p.isMDXComponent=!0},168:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},169:function(e,a,t){"use strict";var n=t(0),r=t(170);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},170:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},171:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o({},a,{},e)),t},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return t?r.a.createElement(b,o({ref:a},c,{components:t})):r.a.createElement(b,o({ref:a},c))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},172:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(169),i=t(168),o=t(55),s=t.n(o),c=37,d=39;a.a=function(e){var a=e.lazy,t=e.block,o=e.defaultValue,m=e.values,p=e.groupId,u=e.className,b=Object(l.a)(),h=b.tabGroupChoices,O=b.setTabGroupChoices,j=Object(n.useState)(o),f=j[0],g=j[1],v=n.Children.toArray(e.children);if(null!=p){var N=h[p];null!=N&&N!==f&&m.some((function(e){return e.value===N}))&&g(N)}var y=function(e){g(e),null!=p&&O(p,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},u)},m.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===a,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===a}),key:a,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case d:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case c:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(T,e.target,e)},onFocus:function(){return y(a)},onClick:function(){y(a)}},t)}))),a?Object(n.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==f})}))))}},173:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}}}]);