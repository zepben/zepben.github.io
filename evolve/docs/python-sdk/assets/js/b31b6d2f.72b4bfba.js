"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[4157],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),h=r,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"sdk-phases",title:"Phases and Feeder Directions"},s=void 0,d={unversionedId:"sdk-phases",id:"version-0.41.2/sdk-phases",title:"Phases and Feeder Directions",description:"There are three different types of phases stored/calculated by the SDK:",source:"@site/versioned_docs/version-0.41.2/phases.mdx",sourceDirName:".",slug:"/sdk-phases",permalink:"/evolve/docs/python-sdk/0.41.2/sdk-phases",draft:!1,tags:[],version:"0.41.2",frontMatter:{id:"sdk-phases",title:"Phases and Feeder Directions"},sidebar:"someSidebar",previous:{title:"CIM Services",permalink:"/evolve/docs/python-sdk/0.41.2/sdk-services"},next:{title:"Tracing",permalink:"/evolve/docs/python-sdk/0.41.2/sdk-tracing"}},p={},m=[{value:"Traced Phases",id:"traced-phases",level:2},{value:"Feeder Direction",id:"feeder-direction",level:2},{value:"Previous Versions",id:"previous-versions",level:2}],c={toc:m},h="wrapper";function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are three different types of phases stored/calculated by the SDK:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Phase Type"),(0,i.kt)("th",{parentName:"tr",align:null},"SDK Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Nominal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Terminal.phases")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PhaseCode")),(0,i.kt)("td",{parentName:"tr",align:null},'The nominal phases of the network indicate how the network is connected. The nominal phases can include the "unknown" phases ',(0,i.kt)("inlineCode",{parentName:"td"},"X")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"Y"),". ",(0,i.kt)("br",null),(0,i.kt)("br",null),"This is the phase field that you are most likely to be interested in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Normal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Terminal.normal_phases")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Traced")),(0,i.kt)("td",{parentName:"tr",align:null},"The normal phases indicate the energised phases of the network in its normal state. There will not be any unknown phases in the normal phases, however; any de-energised areas of the network will not have normal phases.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Current"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Terminal.current_phases")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Traced")),(0,i.kt)("td",{parentName:"tr",align:null},"The current phases indicate the energised phases of the network in the current state. It has the same caveats as the normal phases.")))),(0,i.kt)("p",null,"There are two different feeder directions calculated by the SDK:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feeder Direction Type"),(0,i.kt)("th",{parentName:"tr",align:null},"SDK Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Normal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Terminal.normal_feeder_direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FeederDirection")),(0,i.kt)("td",{parentName:"tr",align:null},"The direction of the feeder head with the network in its normal state.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Current"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Terminal.current_feeder_direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FeederDirection")),(0,i.kt)("td",{parentName:"tr",align:null},"The direction of the feeder head with the network in its current state.")))),(0,i.kt)("h2",{id:"traced-phases"},"Traced Phases"),(0,i.kt)("p",null,"Traced phases should be considered '",(0,i.kt)("em",{parentName:"p"},"read-only"),"' (even though they have setters). The traced phases will be automatically set if you load a database from disk,\notherwise you should make use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SetPhases")," class. If you are implementing network modification algorithms, you can also make use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"RemovePhases"),"\nclass if required."),(0,i.kt)("p",null,"There are two methods for accessing the traced phases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"As a ",(0,i.kt)("inlineCode",{parentName:"li"},"PhaseCode"),". If the traced phases do not form a valid phase code this will return ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ol"},"Per nominal phase.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class PhaseLogger:\n    @staticmethod\n    def log_phases(terminal: Terminal):\n        phase_code = terminal.normal_phases.as_phase_code()\n        if phase_code:\n            print(f"Found phases for {terminal}. nominal: {terminal.phases}, normal: {phase_code}")\n        else:\n            print(f"Found partial phases {terminal}:")\n            for nominalPhase in terminal.phases:\n                print(f"   nominal: {nominalPhase}, normal: {terminal.normal_phases[nominalPhase]}")\n')),(0,i.kt)("h2",{id:"feeder-direction"},"Feeder Direction"),(0,i.kt)("p",null,"Feeder direction can be set to one of the following values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UPSTREAM")),(0,i.kt)("td",{parentName:"tr",align:null},"Traversing from this terminal will lead you towards the feeder head.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DOWNSTREAM")),(0,i.kt)("td",{parentName:"tr",align:null},"Traversing from this terminal will lead you away from the feeder head.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BOTH")),(0,i.kt)("td",{parentName:"tr",align:null},"This terminal is part of a loop and traversing from this terminal can both lead you towards or away from the feeder head.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NONE")),(0,i.kt)("td",{parentName:"tr",align:null},"This terminal is not on a feeder. e.g. De-energised sections or EHV.")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"NOTE")),": A terminal only has a single feeder direction for each state of the network, so if there is unganged switching, not all nominal phases may\ntrace in the direction specified. A direction of ",(0,i.kt)("inlineCode",{parentName:"p"},"BOTH")," can be formed from some phases tracing ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSTREAM"),", with others tracing ",(0,i.kt)("inlineCode",{parentName:"p"},"DOWNSTREAM"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class DirectionLogger:\n    @staticmethod\n    def log_direction(terminal: Terminal):\n        print(f"{terminal}: normal={terminal.normal_feeder_direction}, current={terminal.current_feeder_direction}")\n')),(0,i.kt)("h2",{id:"previous-versions"},"Previous Versions"),(0,i.kt)("p",null,"Previously, traced phases and feeder directions were stored together and could only be accessed per nominal phase. Below are some examples of converting from\nthe old format to the current:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'# Old\nclass PhaseAndDirectionLoggerOld:\n    @staticmethod\n    def log(terminal: Terminal):\n        print(f"{terminal}:")\n        for phase in terminal.phases.single_phases:\n            nps = normal_phases(terminal, phase)\n            cps = current_phases(terminal, phase)\n\n            print(f"   {phase}: n:{nps.phase()}:{nps.direction()}, c:{cps.phase()}:{cps.direction()}")\n\n# Becomes\nclass PhaseAndDirectionLoggerOld:\n    @staticmethod\n    def log(terminal: Terminal):\n        print(f"{terminal}: dn:{terminal.normal_feeder_direction}, dc:{terminal.current_feeder_direction}")\n        for phase in terminal.phases:\n            print(f"   {phase}: n:{terminal.normal_phases[phase]}, c:{terminal.current_phases[phase]}")\n')))}u.isMDXComponent=!0}}]);