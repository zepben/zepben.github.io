"use strict";(self.webpackChunkcim_doco=self.webpackChunkcim_doco||[]).push([[26308],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),u=r,y=g["".concat(l,".").concat(u)]||g[u]||d[u]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),i=n(75489);const o={title:"ResourceBid",hide_table_of_contents:!0},s=void 0,l={unversionedId:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ResourceBid",id:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ResourceBid",title:"ResourceBid",description:"Class Description",source:"@site/docs/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ResourceBid.mdx",sourceDirName:"cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces",slug:"/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ResourceBid",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ResourceBid",draft:!1,tags:[],version:"current",frontMatter:{title:"ResourceBid",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"RampRateCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/RampRateCurve"},next:{title:"StartUpCostCurve",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/StartUpCostCurve"}},p={},c=[{value:"Class Description",id:"class-description",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Relationships",id:"relationships",level:2},{value:"Ancestors",id:"ancestors",level:3},{value:"Descendents",id:"descendents",level:3},{value:"Associations",id:"associations",level:2}],g={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"class-description"},"Class Description"),(0,r.yg)("p",null,"Energy bid for generation, load, or virtual type for the whole of the market-trading period (i.e., one day in day ahead market or one hour in the real time market)."),(0,r.yg)("h2",{id:"attributes"},"Attributes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"aggregationFlag"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},"Aggregation flag")))),(0,r.yg)("p",null,"0: individual resource level\n1: Aggregated node location\n2: Aggregated price location) |\n| bidStatus | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")," |  |\n| commodityType | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")," | Energy product (commodity) type:\n'En' - Energy\n'Ru' - Regulation Up\n'Rd' - Regulation Dn\n'Sr' - Spinning Reserve\n'Nr' - Non-Spinning Reserve\n'Or' - Operating Reserve |\n| contingencyAvailFlag | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo",mdxType:"Link"},"YesNo")," | contingent operating reserve availiability (Yes/No). Resource is availiable to participate with capacity only in contingency dispatch. |\n| createdISO | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/MktDomain/YesNo",mdxType:"Link"},"YesNo")," | A Yes indicates that this bid was created by the ISO. |\n| energyMaxDay | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Maximum amount of energy per day which can be produced during the trading period in MWh |\n| energyMinDay | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")," | Minimum amount of energy per day which has to be produced during the trading period in MWh |\n| marketSepFlag | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/String",mdxType:"Link"},"String")," | Market Separation Flag"),(0,r.yg)("p",null,"'Y' - Enforce market separation constraints for this bid\n'N' - Don't enforce market separation constraints for this bid. |\n| minDispatchTime | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")," | minimum number of consecutive hours a resource shall be dispatched if bid is accepted |\n| resourceLoadingType | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")," | Resource loading curve type\n1 - step-wise continuous loading\n2 - piece-wise linear continuous loading\n3 - block loading |\n| shutDownsMaxDay | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")," | Maximum number of shutdowns per day. |\n| shutDownsMaxWeek | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")," | Maximum number of shutdowns per week. |\n| startUpsMaxDay | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")," | Maximum number of startups per day. |\n| startUpsMaxWeek | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Integer",mdxType:"Link"},"Integer")," | Maximum number of startups per week. |\n| virtual | ",(0,r.yg)(i.A,{to:"/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")," | True if bid is virtual.  Bid is assumed to be non-virtual if attribute is absent |"),(0,r.yg)("h2",{id:"relationships"},"Relationships"),(0,r.yg)("h3",{id:"ancestors"},"Ancestors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/Bid",mdxType:"Link"},"Bid"))),(0,r.yg)("h3",{id:"descendents"},"Descendents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/GeneratingBid",mdxType:"Link"},"GeneratingBid")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/InterTieBid",mdxType:"Link"},"InterTieBid")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/LoadBid",mdxType:"Link"},"LoadBid"))),(0,r.yg)("h2",{id:"associations"},"Associations"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Target"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Cardinality"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Source Assoc. Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Target Assoc. Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/ResourceBid",mdxType:"Link"},"ResourceBid")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)(i.A,{to:"/TC57CIM/IEC62325/MarketOperations/ParticipantInterfaces/BidError",mdxType:"Link"},"BidError")),(0,r.yg)("td",{parentName:"tr",align:null},"0..*"),(0,r.yg)("td",{parentName:"tr",align:null},"ResourceBid"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"BidError"),(0,r.yg)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);