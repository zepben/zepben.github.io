(window.webpackJsonp=window.webpackJsonp||[]).push([[2027],{2097:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(2160)),c={title:"TimePoint"},l={unversionedId:"cim100/TC57CIM/IEC61968/Common/TimePoint",id:"cim100/TC57CIM/IEC61968/Common/TimePoint",isDocsHomePage:!1,title:"TimePoint",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Common\\TimePoint.md",slug:"/cim100/TC57CIM/IEC61968/Common/TimePoint",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/TimePoint",version:"current",sidebar:"docs",previous:{title:"TelephoneNumber",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/TelephoneNumber"},next:{title:"TimeSchedule",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/TimeSchedule"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"A point in time within a sequence of points in time relative to a time schedule.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dateTime"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Absolute date and time for this time point. For calendar-based time point, it is typically manually entered, while for interval-based or sequence-based time point it is derived.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"relativeTimeInterval"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(if interval-based) A point in time relative to scheduled start time in 'TimeSchedule.scheduleInterval.start'.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"sequenceNumber"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Integer"}),"Integer")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(if sequence-based) Relative sequence number for this time point.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"status"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Common/Status"}),"Status")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Status of this time point.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"window"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval"}),"DateTimeInterval")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Interval defining the window of time that this time point is valid (for example, seasonal, only on weekends, not on weekends, only 8:00 am to 5:00 pm, etc.).")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Base/Core/IdentifiedObject"}),"IdentifiedObject"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Common/TimeSchedule"}),"TimeSchedule")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61968/Common/TimePoint"}),"TimePoint")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TimeSchedule"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time schedule owning this time point."),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TimePoints"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sequence of time points belonging to this time schedule.")))))}b.isMDXComponent=!0},2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),b=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=b(a),O=n,j=p["".concat(c,".").concat(O)]||p[O]||s[O]||i;return a?r.a.createElement(j,l({ref:t},m,{components:a})):r.a.createElement(j,l({ref:t},m))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var m=2;m<i;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);