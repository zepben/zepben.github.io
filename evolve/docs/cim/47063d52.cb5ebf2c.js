(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),s=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),b=s(a),O=n,u=b["".concat(i,".").concat(O)]||b[O]||p[O]||c;return a?r.a.createElement(u,o({ref:t},m,{components:a})):r.a.createElement(u,o({ref:t},m))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<c;m++)i[m]=a[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},664:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(2160)),i={title:"Agreement"},o={unversionedId:"cim100/TC57CIM/IEC61968/Common/Agreement",id:"cim100/TC57CIM/IEC61968/Common/Agreement",isDocsHomePage:!1,title:"Agreement",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61968\\Common\\Agreement.md",slug:"/cim100/TC57CIM/IEC61968/Common/Agreement",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Agreement",version:"current",sidebar:"docs",previous:{title:"ActivityRecord",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/ActivityRecord"},next:{title:"Appointment",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61968/Common/Appointment"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],m={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h3",{id:"class-description"},"Class Description"),Object(c.a)("p",null,"Formal agreement between two parties defining the terms and conditions for a set of services. The specifics of the services are, in turn, defined via one or more service agreements."),Object(c.a)("h3",{id:"attributes"},"Attributes"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"signDate"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Date"}),"Date")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date this agreement was consummated among associated persons and/or organisations.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"validityInterval"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/DateTimeInterval"}),"DateTimeInterval")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Date and time interval this agreement is valid (from going into effect to termination).")))),Object(c.a)("h3",{id:"relationships"},"Relationships"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Common/Document"}),"Document"))),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/AuxiliaryAgreement"}),"AuxiliaryAgreement"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Customers/CustomerAgreement"}),"CustomerAgreement"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfEnergyScheduling/EnergyProduct"}),"EnergyProduct"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfCustomers/ExternalCustomerAgreement"}),"ExternalCustomerAgreement"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfCongestionRevenueRights/FTR"}),"FTR"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/IntSchedAgreement"}),"IntSchedAgreement"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfLocations/LocationGrant"}),"LocationGrant"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/PaymentMetering/MerchantAgreement"}),"MerchantAgreement"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC62325/InfIEC62325/InfFinancial/OpenAccessProduct"}),"OpenAccessProduct"),"  "),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/InfIEC61968/InfLocations/RightOfWay"}),"RightOfWay"),"  ")),Object(c.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(c.a)("h3",{id:"associations"},"Associations"),Object(c.a)("p",null,"None"))}s.isMDXComponent=!0}}]);