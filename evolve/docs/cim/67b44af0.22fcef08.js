(window.webpackJsonp=window.webpackJsonp||[]).push([[853],{2160:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),O=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=O(a),j=n,g=p["".concat(c,".").concat(j)]||p[j]||s[j]||i;return a?r.a.createElement(g,o({ref:t},b,{components:a})):r.a.createElement(g,o({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},924:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),i=(a(0),a(2160)),c={title:"CongestionRevenueRight"},o={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight",id:"cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight",isDocsHomePage:!1,title:"CongestionRevenueRight",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC62325\\MarketOperations\\CongestionRevenueRights\\CongestionRevenueRight.md",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight",version:"current",sidebar:"docs",previous:{title:"AceTariffType",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketManagement/AceTariffType"},next:{title:"CRROrgRole",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CRROrgRole"}},l=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],b={toc:l};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"class-description"},"Class Description"),Object(i.a)("p",null,"Congestion Revenue Rights (CRR) class that is inherited from a Document class."),Object(i.a)("p",null,"A CRR is a financial concept that is used to hedge congestion charges."),Object(i.a)("p",null,"The CRR is usually settled based on the Locational Marginal Prices (LMPs) that are calculated in the day-ahead market. These LMPs are determined by the Day-ahead resource schedules/bids. CRRs will not hedge against marginal losses. If the congestion component of LMP at the sink is greater than at the source, then the CRR owner is entitled to receive a portion of congestion revenues. If the congestion component at the sink is less than at the source, then an obligation-type CRR owner will be charged, but an option-type CRR owner will not.  "),Object(i.a)("h3",{id:"attributes"},"Attributes"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cRRcategory"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/CRRCategoryType"}),"CRRCategoryType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CRR category represents 'PTP' for a point-to-point CRR, or 'NSR' for a Network Service Right. If CRR category is 'PTP', both Source ID and Sink ID fields are required. If CRR category is 'NSR' only one field, either Source ID or Sink ID, shall be not null and the other shall be null. However, the 'NSR' category will include at least three records.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cRRtype"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/CRRSegmentType"}),"CRRSegmentType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of the CRR, from the possible type definitions in the CRR System (e.g. 'LSE', 'ETC').")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hedgeType"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/CRRHedgeType"}),"CRRHedgeType")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Hedge type Obligation or Option. An obligation type requires the holder to receive or pay the congestion rent. An option type gives the holder the option of receiving or paying the congestion rent.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"timeOfUse"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MktDomain/TimeOfUse"}),"TimeOfUse")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time of Use flag of the CRR - Peak (ON), Offpeak (OFF) or all 24 hours (24HR).")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tradeSliceID"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/String"}),"String")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Segment of the CRR described in the current record.")))),Object(i.a)("h3",{id:"relationships"},"Relationships"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61968/Common/Document"}),"Document"))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(i.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(i.a)("h3",{id:"associations"},"Associations"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Source"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Class"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Cardinality Target"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Source Assoc. Description"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Name"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Target Assoc. Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight"}),"CongestionRevenueRight")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CRRSegment"}),"CRRSegment")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CongestionRevenueRight"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CRRSegment"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight"}),"CongestionRevenueRight")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/MarketPlan/CRRMarket"}),"CRRMarket")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CongestionRevenueRight"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CRRMarket"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight"}),"CongestionRevenueRight")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/ReferenceData/Flowgate"}),"Flowgate")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0..1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CongestionRevenueRight"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flowgate"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CRROrgRole"}),"CRROrgRole")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1..*"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.a)("a",Object(n.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC62325/MarketOperations/CongestionRevenueRights/CongestionRevenueRight"}),"CongestionRevenueRight")),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CRROrgRole"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CongestionRevenueRight"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}O.isMDXComponent=!0}}]);