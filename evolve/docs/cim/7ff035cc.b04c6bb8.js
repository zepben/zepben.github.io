(window.webpackJsonp=window.webpackJsonp||[]).push([[1063],{1132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return O})),a.d(t,"default",(function(){return o}));var n=a(3),c=a(7),l=(a(0),a(2180)),i=a(2181),r={title:"UnderexcLimIEEE2"},b={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimIEEE2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimIEEE2",isDocsHomePage:!1,title:"UnderexcLimIEEE2",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\UnderexcitationLimiterDynamics\\UnderexcLimIEEE2.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimIEEE2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimIEEE2",version:"current",sidebar:"docs",previous:{title:"UnderexcLimIEEE1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLimIEEE1"},next:{title:"UnderexcLim2Simplified",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcLim2Simplified"}},O=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],j={toc:O};function o(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h3",{id:"class-description"},"Class Description"),Object(l.a)("p",null,"Type UEL2 underexcitation limiter which has either a straight-line or multi-segment characteristic when plotted in terms of machine reactive power output vs. real power output."),Object(l.a)("p",null,"Reference: IEEE UEL2 421.5-2005, 10.2  (limit characteristic lookup table shown in Figure 10.4 (p 32)).  "),Object(l.a)("h3",{id:"attributes"},"Attributes"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k1"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL terminal voltage exponent applied to real power input to UEL limit look-up table (",Object(l.a)("i",null,"k1"),").  Typical value = 2.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"k2"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL terminal voltage exponent applied to reactive power output from UEL limit look-up table (",Object(l.a)("i",null,"k2"),").  Typical value = 2.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kfb"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gain associated with optional integrator feedback input signal to UEL (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"FB")),").  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kuf"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL excitation system stabilizer gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"UF")),").  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kui"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL integral gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"UI")),").  Typical value = 0,5.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kul"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL proportional gain (",Object(l.a)("i",null,"K"),Object(l.a)("i",null,Object(l.a)("sub",null,"UL")),").  Typical value = 0,8.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p0"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"0")),").  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p1"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"1")),").  Typical value = 0,3.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p10"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"10")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p2"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"2")),").  Typical value = 0,6.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p3"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"3")),").  Typical value = 0,9.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p4"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"4")),").  Typical value = 1,02.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p5"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"5")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p6"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"6")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p7"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"7")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p8"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"8")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"p9"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power values for endpoints (",Object(l.a)("i",null,"P"),Object(l.a)("i",null,Object(l.a)("sub",null,"9")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q0"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"0")),").  Typical value = -0,31.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q1"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"1")),").  Typical value = -0,31.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q10"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"10")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q2"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"2")),").  Typical value = -0,28.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q3"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"3")),").  Typical value = -0,21.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q4"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"4")),").  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q5"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"5")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q6"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"6")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q7"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"7")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q8"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"8")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"q9"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power values for endpoints (",Object(l.a)("i",null,"Q"),Object(l.a)("i",null,Object(l.a)("sub",null,"9")),").")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tu1"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL lead time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"U1")),") (",">","= 0).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tu2"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL lag time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"U2")),") (",">","= 0).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tu3"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL lead time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"U3")),") (",">","= 0).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tu4"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL lag time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"U4")),") (",">","= 0).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tul"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Time constant associated with optional integrator feedback input signal to UEL (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"UL")),") (",">","= 0).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tup"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Real power filter time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"UP")),") (",">","= 0).  Typical value = 5.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tuq"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Reactive power filter time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"UQ")),") (",">","= 0).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tuv"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Voltage filter time constant (",Object(l.a)("i",null,"T"),Object(l.a)("i",null,Object(l.a)("sub",null,"UV")),") (",">","= 0).  Typical value = 5.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vuimax"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL integrator output maximum limit (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"UIMAX")),") (",">"," UnderexcLimIEEE2.vuimin).  Typical value = 0,25.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vuimin"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL integrator output minimum limit (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"UIMIN")),") (","<"," UnderexcLimIEEE2.vuimax).  Typical value = 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vulmax"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL output maximum limit (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"ULMAX")),") (",">"," UnderexcLimIEEE2.vulmin).  Typical value = 0,25.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vulmin"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"UEL output minimum limit (",Object(l.a)("i",null,"V"),Object(l.a)("i",null,Object(l.a)("sub",null,"ULMIN")),") (","<"," UnderexcLimIEEE2.vulmax).  Typical value = 0.")))),Object(l.a)("h3",{id:"relationships"},"Relationships"),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/UnderexcitationLimiterDynamics/UnderexcitationLimiterDynamics",mdxType:"Link"},"UnderexcitationLimiterDynamics"))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(l.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.a)("h3",{id:"associations"},"Associations"),Object(l.a)("p",null,"None"))}o.isMDXComponent=!0},2179:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}))},2180:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),c=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var O=c.a.createContext({}),j=function(e){var t=c.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},o={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,O=b(e,["components","mdxType","originalType","parentName"]),m=j(a),p=n,u=m["".concat(i,".").concat(p)]||m[p]||o[p]||l;return a?c.a.createElement(u,r({ref:t},O,{components:a})):c.a.createElement(u,r({ref:t},O))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var O=2;O<l;O++)i[O]=a[O];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2181:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(10),i=a(2179),r=a(8),b=Object(n.createContext)({collectLink:function(){}}),O=a(2182),j=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){var t,a,o,m=e.isNavLink,p=e.to,u=e.href,d=e.activeClassName,s=e.isActive,f=e["data-noBrokenLinkCheck"],N=e.autoAddBaseUrl,y=void 0===N||N,g=j(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(O.b)().withBaseUrl,v=Object(n.useContext)(b),T=p||u,U=Object(i.a)(T),E=null==T?void 0:T.replace("pathname://",""),I=void 0!==E?(a=E,y&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0,L=Object(n.useRef)(!1),x=m?l.e:l.c,P=r.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!P&&U&&window.docusaurus.prefetch(I),function(){P&&o&&o.disconnect()}}),[I,P,U]);var k=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,D=!I||!U||k;return I&&U&&!k&&!f&&v.collectLink(I),D?c.a.createElement("a",Object.assign({href:I},T&&!U&&{target:"_blank",rel:"noopener noreferrer"},g)):c.a.createElement(x,Object.assign({},g,{onMouseEnter:function(){L.current||(window.docusaurus.preload(I),L.current=!0)},innerRef:function(e){var t,a;P&&e&&U&&(t=e,a=function(){window.docusaurus.prefetch(I)},(o=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t),o.disconnect(),a())}))}))).observe(t))},to:I||""},m&&{isActive:s,activeClassName:d}))}},2182:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(23),c=a(2179);function l(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,i=l.forcePrependBaseUrl,r=void 0!==i&&i,b=l.absolute,O=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(r)return t+a;var j=a.startsWith(t)?a:t+a.replace(/^\//,"");return O?e+j:j}(l,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}}}]);