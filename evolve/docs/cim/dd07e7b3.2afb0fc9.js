(window.webpackJsonp=window.webpackJsonp||[]).push([[1827],{1898:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return j}));var n=a(3),c=a(7),r=(a(0),a(2208)),i=a(2209),l={title:"GovHydroR",hide_table_of_contents:!0},b={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroR",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroR",isDocsHomePage:!1,title:"GovHydroR",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\TurbineGovernorDynamics\\GovHydroR.mdx",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroR",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroR",version:"current",sidebar:"docs",previous:{title:"AsynchronousMachineEquivalentCircuit",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/AsynchronousMachineDynamics/AsynchronousMachineEquivalentCircuit"},next:{title:"GovHydroWEH",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovHydroWEH"}},o=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={toc:o};function j(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"class-description"},"Class Description"),Object(r.a)("p",null,"Fourth order lead-lag governor and hydro turbine.   "),Object(r.a)("h3",{id:"attributes"},"Attributes"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"at"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine gain (",Object(r.a)("i",null,"At"),").  Typical value = 1,2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"db1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Intentional dead-band width (",Object(r.a)("i",null,"db1"),").  Unit = Hz.  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"db2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Unintentional dead-band (",Object(r.a)("i",null,"db2"),").  Unit = MW.  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dturb"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine damping factor (",Object(r.a)("i",null,"Dturb"),").  Typical value = 0,2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"eps"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency",mdxType:"Link"},"Frequency")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Intentional db hysteresis (",Object(r.a)("i",null,"eps"),").  Unit = Hz.  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gmax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum governor output (",Object(r.a)("i",null,"Gmax"),") (",">"," GovHydroR.gmin).  Typical value = 1,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gmin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum governor output (",Object(r.a)("i",null,"Gmin"),") (","<"," GovHydroR.gmax).  Typical value = -0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 1, PU gv (",Object(r.a)("i",null,"Gv1"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 2, PU gv (",Object(r.a)("i",null,"Gv2"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 3, PU gv (",Object(r.a)("i",null,"Gv3"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv4"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 4, PU gv (",Object(r.a)("i",null,"Gv4"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv5"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 5, PU gv (",Object(r.a)("i",null,"Gv5"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gv6"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 6, PU gv (",Object(r.a)("i",null,"Gv6"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"h0"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Turbine nominal head (",Object(r.a)("i",null,"H0"),").  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inputSignal"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean",mdxType:"Link"},"Boolean")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Input signal switch (",Object(r.a)("i",null,"Flag"),"). true = ",Object(r.a)("i",null,"Pe")," input is used false = feedback is received from ",Object(r.a)("i",null,"CV"),". ",Object(r.a)("i",null,"Flag")," is normally dependent on ",Object(r.a)("i",null,"Tt"),".  If ",Object(r.a)("i",null,"Tt "),"is zero, ",Object(r.a)("i",null,"Flag")," is set to false. If ",Object(r.a)("i",null,"Tt")," is not zero, ",Object(r.a)("i",null,"Flag")," is set to true.   Typical value = true.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"kg"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate servo gain (",Object(r.a)("i",null,"Kg"),").  Typical value = 2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ki"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Integral gain (",Object(r.a)("i",null,"Ki"),").  Typical value = 0,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mwbase"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower",mdxType:"Link"},"ActivePower")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Base for power values (",Object(r.a)("i",null,"MWbase"),") (",">"," 0).  Unit = MW.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 1, PU power (",Object(r.a)("i",null,"Pgv1"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 2, PU power (",Object(r.a)("i",null,"Pgv2"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 3, PU power (",Object(r.a)("i",null,"Pgv3"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv4"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 4, PU power (",Object(r.a)("i",null,"Pgv4"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv5"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 5, PU power (",Object(r.a)("i",null,"Pgv5"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pgv6"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Nonlinear gain point 6, PU power (",Object(r.a)("i",null,"Pgv6"),").  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmax"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate opening, PU of ",Object(r.a)("i",null,"MWbase")," (",Object(r.a)("i",null,"Pmax"),") (",">"," GovHydroR.pmin).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pmin"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Minimum gate opening, PU of ",Object(r.a)("i",null,"MWbase")," (",Object(r.a)("i",null,"Pmin"),") (","<"," GovHydroR.pmax).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"qnl"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No-load turbine flow at nominal head (",Object(r.a)("i",null,"Qnl"),").  Typical value = 0,08.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"r"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/PU",mdxType:"Link"},"PU")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Steady-state droop (",Object(r.a)("i",null,"R"),").  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t1"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead time constant 1 (",Object(r.a)("i",null,"T1"),") (",">","= 0).  Typical value = 1,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t2"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant 1 (",Object(r.a)("i",null,"T2"),") (",">","= 0).  Typical value = 0,1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t3"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead time constant 2 (",Object(r.a)("i",null,"T3"),") (",">","= 0).  Typical value = 1,5.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t4"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant 2 (",Object(r.a)("i",null,"T4"),") (",">","= 0).  Typical value = 0,1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t5"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead time constant 3 (",Object(r.a)("i",null,"T5"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t6"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant 3 (",Object(r.a)("i",null,"T6"),") (",">","= 0).  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t7"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lead time constant 4 (",Object(r.a)("i",null,"T7"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"t8"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Lag time constant 4 (",Object(r.a)("i",null,"T8"),") (",">","= 0).  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"td"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Input filter time constant (",Object(r.a)("i",null,"Td"),") (",">","= 0).  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tp"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Gate servo time constant (",Object(r.a)("i",null,"Tp"),") (",">","= 0).  Typical value = 0,05.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tt"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Power feedback time constant (",Object(r.a)("i",null,"Tt"),") (",">","= 0).  Typical value = 0.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tw"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds",mdxType:"Link"},"Seconds")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Water inertia time constant (",Object(r.a)("i",null,"Tw"),") (",">"," 0).  Typical value = 1.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"velcl"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate closing velocity (",Object(r.a)("i",null,"Velcl"),").  Unit = PU / s.  Typical value = -0,2.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"velop"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Base/Domain/Float",mdxType:"Link"},"Float")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Maximum gate opening velocity (",Object(r.a)("i",null,"Velop"),").  Unit = PU / s.  Typical value = 0,2.")))),Object(r.a)("h3",{id:"relationships"},"Relationships"),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)(i.a,{to:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics",mdxType:"Link"},"TurbineGovernorDynamics"))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.a)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.a)("h3",{id:"associations"},"Associations"),Object(r.a)("p",null,"None"))}j.isMDXComponent=!0},2207:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}))},2208:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),O=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=O(a),p=n,d=m["".concat(i,".").concat(p)]||m[p]||j[p]||r;return a?c.a.createElement(d,l({ref:t},o,{components:a})):c.a.createElement(d,l({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<r;o++)i[o]=a[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2209:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(10),i=a(2207),l=a(8);const b=Object(n.createContext)({collectLink:()=>{}});var o=a(2210),O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){var t,{isNavLink:a,to:j,href:m,activeClassName:p,isActive:d,"data-noBrokenLinkCheck":s,autoAddBaseUrl:u=!0}=e,f=O(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(o.b)(),y=Object(n.useContext)(b),N=j||m,v=Object(i.a)(N),T=null==N?void 0:N.replace("pathname://",""),C=void 0!==T?(I=T,u&&(e=>e.startsWith("/"))(I)?g(I):I):void 0;var I;const P=Object(n.useRef)(!1),M=a?r.e:r.c,U=l.a.canUseIntersectionObserver;let D;Object(n.useEffect)((()=>(!U&&v&&window.docusaurus.prefetch(C),()=>{U&&D&&D.disconnect()})),[C,U,v]);const E=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,x=!C||!v||E;return C&&v&&!E&&!s&&y.collectLink(C),x?c.a.createElement("a",Object.assign({href:C},N&&!v&&{target:"_blank",rel:"noopener noreferrer"},f)):c.a.createElement(M,Object.assign({},f,{onMouseEnter:()=>{P.current||(window.docusaurus.preload(C),P.current=!0)},innerRef:e=>{var t,a;U&&e&&v&&(t=e,a=()=>{window.docusaurus.prefetch(C)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),a())}))})),D.observe(t))},to:C||""},a&&{isActive:d,activeClassName:p}))}},2210:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(23),c=a(2207);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(n)return t+a;const i=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}}}]);