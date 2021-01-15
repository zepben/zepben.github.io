(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),O=r,d=p["".concat(c,".").concat(O)]||p[O]||m[O]||i;return a?n.a.createElement(d,o({ref:t},b,{components:a})):n.a.createElement(d,o({ref:t},b))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},619:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),i=(a(0),a(2160)),c={title:"DiagnosisDataSet"},o={unversionedId:"cim100/TC57CIM/IEC61968/Assets/DiagnosisDataSet",id:"cim100/TC57CIM/IEC61968/Assets/DiagnosisDataSet",isDocsHomePage:!1,title:"DiagnosisDataSet",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Assets\\DiagnosisDataSet.md",slug:"/cim100/TC57CIM/IEC61968/Assets/DiagnosisDataSet",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/DiagnosisDataSet",version:"current",sidebar:"docs",previous:{title:"CorporateStandardKind",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/CorporateStandardKind"},next:{title:"FailureEvent",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Assets/FailureEvent"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"The result of a problem (typically an asset failure) diagnosis. Contains complete information like what might be received from a lab doing forensic analysis of a failed asset.   "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"effect"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Effect of problem.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"failureMode"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Failuer mode, for example: Failure to Insulate; Failure to conduct; Failure to contain oil; Failure to provide ground plane; Other.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"finalCause"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Cause of problem determined during diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"finalCode"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Code for diagnosed probem type.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"finalOrigin"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Origin of problem determined during diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"finalRemark"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Remarks pertaining to findings during problem diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"phaseCode"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/PhaseCode"}),"PhaseCode")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Phase(s) diagnosed.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"preliminaryCode"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Code for problem type determined during preliminary assessment.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"preliminaryDateTime"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Date and time preliminary assessment of problem was performed.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"preliminaryRemark"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Remarks pertaining to preliminary assessment of problem.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"rootCause"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Root cause of problem determined during diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"rootOrigin"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Root origin of problem determined during diagnosis.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"rootRemark"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(r.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Remarks pertaining to root cause findings during problem diagnosis.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Assets/ProcedureDataSet"}),"ProcedureDataSet"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("p",null,"None"))}s.isMDXComponent=!0}}]);