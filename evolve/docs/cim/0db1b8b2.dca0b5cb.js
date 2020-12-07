(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var b=a(2),n=a(6),r=(a(0),a(2147)),c={title:"GovCT2"},l={unversionedId:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2",id:"cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2",isDocsHomePage:!1,title:"GovCT2",description:"Class Description",source:"@site/docs\\cim100\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\TurbineGovernorDynamics\\GovCT2.md",slug:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT2",version:"current",sidebar:"docs",previous:{title:"GovCT1",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovCT1"},next:{title:"GovGAST",permalink:"/evolve/docs/cim/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/GovGAST"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"class-description"},"Class Description"),Object(r.b)("p",null,"General governor with frequency-dependent fuel flow limit.  This model is a modification of the GovCT1",Object(r.b)("b",null," "),"model in order to represent the frequency-dependent fuel flow limit of a specific gas turbine manufacturer.  "),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tpelec"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Electrical power transducer time constant (",Object(r.b)("i",null,"Tpelec"),") (",">","= 0).  Typical value = 2,5.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tsa"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Temperature detection lead time constant (",Object(r.b)("i",null,"Tsa"),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tsb"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Temperature detection lag time constant (",Object(r.b)("i",null,"Tsb"),") (",">","= 0).  Typical value = 50.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vmax"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Maximum valve position limit (",Object(r.b)("i",null,"Vmax"),") (",">"," GovCT2.vmin).  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vmin"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Minimum valve position limit (",Object(r.b)("i",null,"Vmin"),") (","<"," GovCT2.vmax).  Typical value = 0,175.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wfnl"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"No load fuel flow (",Object(r.b)("i",null,"Wfnl"),").  Typical value = 0,187.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wfspd"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Boolean"}),"Boolean")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Switch for fuel source characteristic to recognize that fuel flow, for a given fuel valve stroke, can be proportional to engine speed (",Object(r.b)("i",null,"Wfspd"),"). true = fuel flow proportional to speed (for some gas turbines and diesel engines with positive displacement fuel injectors) false = fuel control system keeps fuel flow independent of engine speed. Typical value = false.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"aset"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Acceleration limiter setpoint (",Object(r.b)("i",null,"Aset"),").  Unit = PU / s.  Typical value = 10.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"db"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Speed governor deadband in PU speed (",Object(r.b)("i",null,"db"),").  In the majority of applications, it is recommended that this value be set to zero.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"dm"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Speed sensitivity coefficient (",Object(r.b)("i",null,"Dm"),").  ",Object(r.b)("i",null,"Dm")," can represent either the variation of the engine power with the shaft speed or the variation of maximum power capability with shaft speed.  If it is positive it describes the falling slope of the engine speed verses power characteristic as speed increases. A slightly falling characteristic is typical for reciprocating engines and some aero-derivative turbines.  If it is negative the engine power is assumed to be unaffected by the shaft speed, but the maximum permissible fuel flow is taken to fall with falling shaft speed. This is characteristic of single-shaft industrial turbines due to exhaust temperature limits.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 1 (",Object(r.b)("i",null,"Flim1"),").  Unit = Hz.  Typical value = 59.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim10"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 10 (",Object(r.b)("i",null,"Flim10"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim2"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 2 (",Object(r.b)("i",null,"Flim2"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim3"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 3 (",Object(r.b)("i",null,"Flim3"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim4"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 4 (",Object(r.b)("i",null,"Flim4"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim5"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 5 (",Object(r.b)("i",null,"Flim5"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim6"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 6 (",Object(r.b)("i",null,"Flim6"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim7"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 7 (",Object(r.b)("i",null,"Flim7"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim8"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 8 (",Object(r.b)("i",null,"Flim8"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"flim9"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Frequency"}),"Frequency")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Frequency threshold 9 (",Object(r.b)("i",null,"Flim9"),").  Unit = Hz.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ka"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Acceleration limiter gain (",Object(r.b)("i",null,"Ka"),").  Typical value = 10.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kdgov"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Governor derivative gain (",Object(r.b)("i",null,"Kdgov"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kigov"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Governor integral gain (",Object(r.b)("i",null,"Kigov"),").  Typical value = 0,45.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kiload"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Load limiter integral gain for PI controller (",Object(r.b)("i",null,"Kiload"),").  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kimw"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power controller (reset) gain (",Object(r.b)("i",null,"Kimw"),").  The default value of 0,01 corresponds to a reset time of 100 seconds.  A value of 0,001 corresponds to a relatively slow-acting load controller.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kpgov"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Governor proportional gain (",Object(r.b)("i",null,"Kpgov"),").  Typical value = 4.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kpload"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Load limiter proportional gain for PI controller (",Object(r.b)("i",null,"Kpload"),").  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kturb"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Turbine gain (",Object(r.b)("i",null,"Kturb"),").  Typical value = 1,9168.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ldref"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Load limiter reference value (",Object(r.b)("i",null,"Ldref"),").  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"maxerr"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Maximum value for speed error signal (",Object(r.b)("i",null,"Maxerr"),") (",">"," GovCT2.minerr).  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"minerr"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Minimum value for speed error signal (",Object(r.b)("i",null,"Minerr"),") (","<"," GovCT2.maxerr).  Typical value = -1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"mwbase"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/ActivePower"}),"ActivePower")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Base for power values (",Object(r.b)("i",null,"MWbase"),") (",">"," 0).  Unit = MW.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 1 (",Object(r.b)("i",null,"Plim1"),").  Typical value = 0,8325.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim10"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 10 (",Object(r.b)("i",null,"Plim10"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim2"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 2 (Plim2).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim3"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 3 (",Object(r.b)("i",null,"Plim3"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim4"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 4 (",Object(r.b)("i",null,"Plim4"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim5"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 5 (",Object(r.b)("i",null,"Plim5"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim6"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 6 (",Object(r.b)("i",null,"Plim6"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim7"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 7 (",Object(r.b)("i",null,"Plim7"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim8"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power limit 8 (",Object(r.b)("i",null,"Plim8"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"plim9"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Power Limit 9 (",Object(r.b)("i",null,"Plim9"),").  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"prate"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Ramp rate for frequency-dependent power limit (",Object(r.b)("i",null,"Prate"),").  Typical value = 0,017.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"r"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Permanent droop (",Object(r.b)("i",null,"R"),").  Typical value = 0,05.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"rclose"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Minimum valve closing rate (",Object(r.b)("i",null,"Rclose"),").  Unit = PU / s.  Typical value = -99.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"rdown"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Maximum rate of load limit decrease (",Object(r.b)("i",null,"Rdown"),").  Typical value = -99.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ropen"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Maximum valve opening rate (",Object(r.b)("i",null,"Ropen"),").  Unit = PU / s.  Typical value = 99.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"rselect"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/DroopSignalFeedbackKind"}),"DroopSignalFeedbackKind")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Feedback signal for droop (",Object(r.b)("i",null,"Rselect"),").  Typical value = electricalPower.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"rup"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Maximum rate of load limit increase (",Object(r.b)("i",null,"Rup"),").  Typical value = 99.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ta"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Acceleration limiter time constant (",Object(r.b)("i",null,"Ta"),") (",">","= 0).  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tact"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Actuator time constant (",Object(r.b)("i",null,"Tact"),") (",">","= 0).  Typical value = 0,4.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tb"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Turbine lag time constant (",Object(r.b)("i",null,"Tb"),") (",">","= 0).  Typical value = 0,1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tc"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Turbine lead time constant (",Object(r.b)("i",null,"Tc"),") (",">","= 0).  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tdgov"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Governor derivative controller time constant (",Object(r.b)("i",null,"Tdgov"),") (",">","= 0).  Typical value = 1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"teng"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Transport time delay for diesel engine used in representing diesel engines where there is a small but measurable transport delay between a change in fuel flow setting and the development of torque (",Object(r.b)("i",null,"Teng"),") (",">","= 0).  ",Object(r.b)("i",null,"Teng")," should be zero in all but special cases where this transport delay is of particular concern.  Typical value = 0.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tfload"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/cim100/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Load limiter time constant (",Object(r.b)("i",null,"Tfload"),") (",">","= 0).  Typical value = 3.")))),Object(r.b)("h3",{id:"relationships"},"Relationships"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"/cim100/TC57CIM/IEC61970/Dynamics/StandardModels/TurbineGovernorDynamics/TurbineGovernorDynamics"}),"TurbineGovernorDynamics"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(r.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False")))),Object(r.b)("h3",{id:"associations"},"Associations"),Object(r.b)("p",null,"None"))}j.isMDXComponent=!0},2147:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),j=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=j(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),m=j(a),p=b,d=m["".concat(c,".").concat(p)]||m[p]||o[p]||r;return a?n.a.createElement(d,l({ref:t},O,{components:a})):n.a.createElement(d,l({ref:t},O))}));function d(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var O=2;O<r;O++)c[O]=a[O];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);