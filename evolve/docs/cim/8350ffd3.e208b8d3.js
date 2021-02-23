(window.webpackJsonp=window.webpackJsonp||[]).push([[1088],{1157:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return m}));var n=a(3),r=a(7),o=(a(0),a(2175)),i=a(2176),c={title:"GovHydroWEH"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroWEH",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroWEH",isDocsHomePage:!1,title:"GovHydroWEH",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\TurbineGovernorDynamics\\GovHydroWEH.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroWEH",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroWEH",version:"current",sidebar:"docs",previous:{title:"GovHydroR",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroR"},next:{title:"GovHydroWPID",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroWPID"}},b=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],p={toc:b};function m(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"class-description"},"Class Description"),Object(o.a)("p",null,"Woodward",Object(o.a)("sup",null,"TM "),"electric hydro governor. "),Object(o.a)("p",null,"[Footnote: Woodward electric hydro governors are an example of suitable products available commercially. This information is given for the convenience of users of this document and does not constitute an endorsement by IEC of these products.]","  "),Object(o.a)("h3",{id:"attributes"},"Attributes"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"db"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Speed deadband (",Object(o.a)("i",null,"db"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dicn"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Value to allow the integral controller to advance beyond the gate limits (",Object(o.a)("i",null,"Dicn"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dpv"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Value to allow the pilot valve controller to advance beyond the gate limits (",Object(o.a)("i",null,"Dpv"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dturb"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine damping factor (",Object(o.a)("i",null,"Dturb"),").  Unit = delta P (PU of ",Object(o.a)("i",null,"MWbase"),") / delta speed (PU).")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"feedbackSignal"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Feedback signal selection (",Object(o.a)("i",null,"Sw"),"). true = PID output (if ",Object(o.a)("i",null,"R-Perm-Gate "),"= droop and ",Object(o.a)("i",null,"R-Perm-Pe "),"= 0) false = electrical power (if ",Object(o.a)("i",null,"R-Perm-Gate "),"= 0 and ",Object(o.a)("i",null,"R-Perm-Pe "),"= droop) or false = gate position (if R",Object(o.a)("i",null,"-Perm-Gate "),"= droop and ",Object(o.a)("i",null,"R-Perm-Pe "),"= 0). Typical value = false.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fl1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flowgate 1 (",Object(o.a)("i",null,"Fl1"),").  Flow value for gate position point 1 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fl2"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flowgate 2 (",Object(o.a)("i",null,"Fl2"),").  Flow value for gate position point 2 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fl3"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flowgate 3 (",Object(o.a)("i",null,"Fl3"),").  Flow value for gate position point 3 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fl4"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flowgate 4 (",Object(o.a)("i",null,"Fl4"),").  Flow value for gate position point 4 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fl5"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flowgate 5 (",Object(o.a)("i",null,"Fl5"),").  Flow value for gate position point 5 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P1 (",Object(o.a)("i",null,"Fp1"),").  Turbine flow value for point 1 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp10"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P10 (",Object(o.a)("i",null,"Fp10"),").  Turbine flow value for point 10 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp2"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P2 (",Object(o.a)("i",null,"Fp2"),").  Turbine flow value for point 2 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp3"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P3 (",Object(o.a)("i",null,"Fp3"),").  Turbine flow value for point 3 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp4"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P4 (",Object(o.a)("i",null,"Fp4"),").  Turbine flow value for point 4 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp5"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P5 (",Object(o.a)("i",null,"Fp5"),").  Turbine flow value for point 5 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp6"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P6 (",Object(o.a)("i",null,"Fp6"),").  Turbine flow value for point 6 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp7"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P7 (",Object(o.a)("i",null,"Fp7"),").  Turbine flow value for point 7 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp8"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P8 (",Object(o.a)("i",null,"Fp8"),").  Turbine flow value for point 8 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fp9"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Flow P9 (",Object(o.a)("i",null,"Fp9"),").  Turbine flow value for point 9 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gmax"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate position (",Object(o.a)("i",null,"Gmax"),") (",">"," GovHydroWEH.gmin).")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gmin"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum gate position (",Object(o.a)("i",null,"Gmin"),") (","<"," GovHydroWEH.gmax).")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gtmxcl"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate closing rate (",Object(o.a)("i",null,"Gtmxcl"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gtmxop"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate opening rate (",Object(o.a)("i",null,"Gtmxop"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate 1 (",Object(o.a)("i",null,"Gv1"),").  Gate Position value for point 1 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv2"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate 2 (",Object(o.a)("i",null,"Gv2"),").  Gate Position value for point 2 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv3"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate 3 (",Object(o.a)("i",null,"Gv3"),").  Gate Position value for point 3 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv4"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate 4 (",Object(o.a)("i",null,"Gv4"),").  Gate Position value for point 4 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv5"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate 5 (",Object(o.a)("i",null,"Gv5"),").  Gate Position value for point 5 for lookup table representing water flow through the turbine as a function of gate position to produce steady state flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kd"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Derivative controller derivative gain (",Object(o.a)("i",null,"Kd"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ki"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Derivative controller Integral gain (",Object(o.a)("i",null,"Ki"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kp"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Derivative control gain (",Object(o.a)("i",null,"Kp"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mwbase"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Base for power values (",Object(o.a)("i",null,"MWbase"),") (",">"," 0).  Unit = MW.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss1"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P1 (",Object(o.a)("i",null,"Pmss1"),").  Mechanical power output for turbine flow point 1 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss10"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P10 (",Object(o.a)("i",null,"Pmss10"),").  Mechanical power output for turbine flow point 10 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss2"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P2 (",Object(o.a)("i",null,"Pmss2"),").  Mechanical power output for turbine flow point 2 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss3"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P3 (",Object(o.a)("i",null,"Pmss3"),").  Mechanical power output for turbine flow point 3 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss4"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P4 (",Object(o.a)("i",null,"Pmss4"),").  Mechanical power output for turbine flow point 4 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss5"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P5 (",Object(o.a)("i",null,"Pmss5"),").  Mechanical power output for turbine flow point 5 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss6"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P6 (",Object(o.a)("i",null,"Pmss6"),").  Mechanical power output for turbine flow point 6 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss7"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P7 (",Object(o.a)("i",null,"Pmss7"),").  Mechanical power output for turbine flow point 7 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss8"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P8 (",Object(o.a)("i",null,"Pmss8"),").  Mechanical power output for turbine flow point 8 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmss9"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pmss flow P9 (",Object(o.a)("i",null,"Pmss9"),").  Mechanical power output for turbine flow point 9 for lookup table representing PU mechanical power on machine MVA rating as a function of turbine flow.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rpg"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Permanent droop for governor output feedback (",Object(o.a)("i",null,"R-Perm-Gate"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rpp"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Permanent droop for electrical power feedback (",Object(o.a)("i",null,"R-Perm-Pe"),").")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"td"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Derivative controller time constant (",Object(o.a)("i",null,"Td"),") (",">","= 0).  Limits the derivative characteristic beyond a breakdown frequency to avoid amplification of high-frequency noise.")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tdv"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Distributive valve time lag time constant (",Object(o.a)("i",null,"Tdv"),") (",">","= 0).")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tg"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Value to allow the distribution valve controller to advance beyond the gate movement rate limit (",Object(o.a)("i",null,"Tg"),") (",">","= 0).")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tp"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pilot valve time lag time constant (",Object(o.a)("i",null,"Tp"),") (",">","= 0).")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tpe"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Electrical power droop time constant (",Object(o.a)("i",null,"Tpe"),") (",">","= 0).")),Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Water inertia time constant (",Object(o.a)("i",null,"Tw"),") (",">"," 0).")))),Object(o.a)("h3",{id:"relationships"},"Relationships"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(o.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(o.a)("table",null,Object(o.a)("thead",{parentName:"table"},Object(o.a)("tr",{parentName:"thead"},Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(o.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(o.a)("tbody",{parentName:"table"},Object(o.a)("tr",{parentName:"tbody"},Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(o.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(o.a)("h3",{id:"associations"},"Associations"),Object(o.a)("p",null,"None"))}m.isMDXComponent=!0},2174:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}))},2175:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(0),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var b=r.a.createContext({}),p=function(t){var e=r.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):c({},e,{},t)),a},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),O=p(a),j=n,f=O["".concat(i,".").concat(j)]||O[j]||m[j]||o;return a?r.a.createElement(f,c({ref:e},b,{components:a})):r.a.createElement(f,c({ref:e},b))}));function j(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=O;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},2176:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(10),i=a(2174),c=a(8),l=Object(n.createContext)({collectLink:function(){}}),b=a(2177),p=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e,a,m,O=t.isNavLink,j=t.to,f=t.href,d=t.activeClassName,s=t.isActive,u=t["data-noBrokenLinkCheck"],g=t.autoAddBaseUrl,N=void 0===g||g,y=p(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=Object(b.b)().withBaseUrl,P=Object(n.useContext)(l),w=j||f,v=Object(i.a)(w),T=null==w?void 0:w.replace("pathname://",""),h=void 0!==T?(a=T,N&&function(t){return t.startsWith("/")}(a)?C(a):a):void 0,I=Object(n.useRef)(!1),U=O?o.e:o.c,M=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!M&&v&&window.docusaurus.prefetch(h),function(){M&&m&&m.disconnect()}}),[h,M,v]);var k=null!==(e=null==h?void 0:h.startsWith("#"))&&void 0!==e&&e,D=!h||!v||k;return h&&v&&!k&&!u&&P.collectLink(h),D?r.a.createElement("a",Object.assign({href:h},w&&!v&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(U,Object.assign({},y,{onMouseEnter:function(){I.current||(window.docusaurus.preload(h),I.current=!0)},innerRef:function(t){var e,a;M&&t&&v&&(e=t,a=function(){window.docusaurus.prefetch(h)},(m=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),a())}))}))).observe(e))},to:h||""},O&&{isActive:s,activeClassName:d}))}},2177:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return i}));var n=a(23),r=a(2174);function o(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,b=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return e+a;var p=a.startsWith(e)?a:e+a.replace(/^\//,"");return b?t+p:p}(o,a,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}}}]);