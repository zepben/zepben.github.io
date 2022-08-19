(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(174)),l={id:"sdk-phases",title:"Phases and Feeder Directions"},o={unversionedId:"sdk-phases",id:"version-0.29.0/sdk-phases",isDocsHomePage:!1,title:"Phases and Feeder Directions",description:"There are three different types of phases stored/calculated by the SDK:",source:"@site/versioned_docs/version-0.29.0/phases.mdx",slug:"/sdk-phases",permalink:"/evolve/docs/python-sdk/0.29.0/sdk-phases",version:"0.29.0",sidebar:"version-0.29.0/someSidebar",previous:{title:"CIM Services",permalink:"/evolve/docs/python-sdk/0.29.0/sdk-services"},next:{title:"Tracing",permalink:"/evolve/docs/python-sdk/0.29.0/sdk-tracing"}},c=[{value:"Traced Phases",id:"traced-phases",children:[]},{value:"Feeder Direction",id:"feeder-direction",children:[]},{value:"Previous Versions",id:"previous-versions",children:[]}],s={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"There are three different types of phases stored/calculated by the SDK:"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Phase Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"SDK Field"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nominal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"Terminal.phases")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"PhaseCode")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),'The nominal phases of the network indicate how the network is connected. The nominal phases can include the "unknown" phases ',Object(i.a)("inlineCode",{parentName:"td"},"X")," and ",Object(i.a)("inlineCode",{parentName:"td"},"Y"),". ",Object(i.a)("br",null),Object(i.a)("br",null),"This is the phase field that you are most likely to be interested in.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Normal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"Terminal.normal_phases")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"Traced")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The normal phases indicate the energised phases of the network in its normal state. There will not be any unknown phases in the normal phases, however; any de-energised areas of the network will not have normal phases.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"Terminal.current_phases")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"Traced")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The current phases indicate the energised phases of the network in the current state. It has the same caveats as the normal phases.")))),Object(i.a)("p",null,"There are two different feeder directions calculated by the SDK:"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Feeder Direction Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"SDK Field"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Normal"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"Terminal.normal_feeder_direction")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"FeederDirection")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction of the feeder head with the network in its normal state.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"Terminal.current_feeder_direction")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"FeederDirection")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction of the feeder head with the network in its current state.")))),Object(i.a)("h2",{id:"traced-phases"},"Traced Phases"),Object(i.a)("p",null,"Traced phases should be considered '",Object(i.a)("em",{parentName:"p"},"read-only"),"' (even though they have setters). The traced phases will be automatically set if you load a database from disk,\notherwise you should make use of the ",Object(i.a)("inlineCode",{parentName:"p"},"SetPhases")," class. If you are implementing network modification algorithms, you can also make use of the ",Object(i.a)("inlineCode",{parentName:"p"},"RemovePhases"),"\nclass if required."),Object(i.a)("p",null,"There are two methods for accessing the traced phases:"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"As a ",Object(i.a)("inlineCode",{parentName:"li"},"PhaseCode"),". If the traced phases do not form a valid phase code this will return ",Object(i.a)("inlineCode",{parentName:"li"},"null"),"."),Object(i.a)("li",{parentName:"ol"},"Per nominal phase.")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'class PhaseLogger:\n    @staticmethod\n    def log_phases(terminal: Terminal):\n        phase_code = terminal.normal_phases.as_phase_code()\n        if phase_code:\n            print(f"Found phases for {terminal}. nominal: {terminal.phases}, normal: {phase_code}")\n        else:\n            print(f"Found partial phases {terminal}:")\n            for nominalPhase in terminal.phases:\n                print(f"   nominal: {nominalPhase}, normal: {terminal.normal_phases[nominalPhase]}")\n')),Object(i.a)("h2",{id:"feeder-direction"},"Feeder Direction"),Object(i.a)("p",null,"Feeder direction can be set to one of the following values:"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"UPSTREAM")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Traversing from this terminal will lead you towards the feeder head.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"DOWNSTREAM")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Traversing from this terminal will lead you away from the feeder head.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"BOTH")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"This terminal is part of a loop and traversing from this terminal can both lead you towards or away from the feeder head.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.a)("inlineCode",{parentName:"td"},"NONE")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"This terminal is not on a feeder. e.g. De-energised sections or EHV.")))),Object(i.a)("p",null,Object(i.a)("em",{parentName:"p"},Object(i.a)("strong",{parentName:"em"},"NOTE")),": A terminal only has a single feeder direction for each state of the network, so if there is unganged switching, not all nominal phases may\ntrace in the direction specified. A direction of ",Object(i.a)("inlineCode",{parentName:"p"},"BOTH")," can be formed from some phases tracing ",Object(i.a)("inlineCode",{parentName:"p"},"UPSTREAM"),", with others tracing ",Object(i.a)("inlineCode",{parentName:"p"},"DOWNSTREAM"),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'class DirectionLogger:\n    @staticmethod\n    def log_direction(terminal: Terminal):\n        print(f"{terminal}: normal={terminal.normal_feeder_direction}, current={terminal.current_feeder_direction}")\n')),Object(i.a)("h2",{id:"previous-versions"},"Previous Versions"),Object(i.a)("p",null,"Previously, traced phases and feeder directions were stored together and could only be accessed per nominal phase. Below are some examples of converting from\nthe old format to the current:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-Python"}),'# Old\nclass PhaseAndDirectionLoggerOld:\n    @staticmethod\n    def log(terminal: Terminal):\n        print(f"{terminal}:")\n        for phase in terminal.phases.single_phases:\n            nps = normal_phases(terminal, phase)\n            cps = current_phases(terminal, phase)\n\n            print(f"   {phase}: n:{nps.phase()}:{nps.direction()}, c:{cps.phase()}:{cps.direction()}")\n\n# Becomes\nclass PhaseAndDirectionLoggerOld:\n    @staticmethod\n    def log(terminal: Terminal):\n        print(f"{terminal}: dn:{terminal.normal_feeder_direction}, dc:{terminal.current_feeder_direction}")\n        for phase in terminal.phases:\n            print(f"   {phase}: n:{terminal.normal_phases[phase]}, c:{terminal.current_phases[phase]}")\n')))}d.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(a),b=n,h=m["".concat(l,".").concat(b)]||m[b]||p[b]||i;return a?r.a.createElement(h,o({ref:t},s,{components:a})):r.a.createElement(h,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);