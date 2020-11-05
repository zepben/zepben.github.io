(window.webpackJsonp=window.webpackJsonp||[]).push([[672],{2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=m(a),j=n,d=p["".concat(i,".").concat(j)]||p[j]||O[j]||l;return a?r.a.createElement(d,b({ref:t},o,{components:a})):r.a.createElement(d,b({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=j;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},730:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),l=(a(0),a(2147)),i={title:"EnvironmentalAlert"},b={unversionedId:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",id:"cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",isDocsHomePage:!1,title:"EnvironmentalAlert",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\Environmental\\EnvironmentalAlert.md",slug:"/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAlert",version:"current",sidebar:"docs",previous:{title:"EnvironmentalAnalog",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalAnalog"},next:{title:"EnvironmentalCodedValue",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/Environmental/EnvironmentalCodedValue"}},c=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],o={rightToc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"class-description"},"Class Description"),Object(l.b)("p",null,"An environmental alert issued by a provider or system.  "),Object(l.b)("h3",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"alertType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The type of the issued alert which is drawn from the specified alert type list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cancelledDateTime"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DateTime"}),"DateTime")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time and date alert cancelled. Used only if alert is cancelled before it expires.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"headline"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An abbreviated textual description of the alert issued.  Note: the full text of the alert appears in the .description attribute (inherited from IdentifiedObject).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inEffect"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/DateTimeInterval"}),"DateTimeInterval")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The interval for which this weather alert is in effect.")))),Object(l.b)("h3",{id:"relationships"},"Relationships"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61968/Common/ActivityRecord"}),"ActivityRecord"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(l.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.b)("h3",{id:"associations"},"Associations"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/Environmental/EnvironmentalAlert"}),"EnvironmentalAlert")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/Environmental/AlertTypeList"}),"AlertTypeList")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAlert"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An alert whose type is drawn from this alert type list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AlertTypeList"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The list of alert types from which the type of this alert is drawn.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/Environmental/EnvironmentalAlert"}),"EnvironmentalAlert")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/Environmental/EnvironmentalDataProvider"}),"EnvironmentalDataProvider")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAlert"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Alert issued by this environmental data provider."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalDataProvider"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Environmental data provider for this alert.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/Environmental/EnvironmentalAlert"}),"EnvironmentalAlert")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..*"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC62325/Environmental/EnvironmentalLocationType"}),"EnvironmentalLocationType")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalAlert"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Environmental alert applying to location of this type."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"EnvironmentalLocationKind"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of location to which this environmental alert applies.")))))}m.isMDXComponent=!0}}]);