(window.webpackJsonp=window.webpackJsonp||[]).push([[1368],{1426:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var b=a(2),n=a(6),l=(a(0),a(2146)),c={title:"PssIEEE4B"},r={unversionedId:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B",id:"Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B",isDocsHomePage:!1,title:"PssIEEE4B",description:"Class Description",source:"@site/docs\\Model\\TC57CIM\\IEC61970\\Dynamics\\StandardModels\\PowerSystemStabilizerDynamics\\PssIEEE4B.md",slug:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE4B",version:"current",sidebar:"docs",previous:{title:"PssIEEE3B",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PssIEEE3B"},next:{title:"Pss1",permalink:"/evolve/docs/cim/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/Pss1"}},i=[{value:"Class Description",id:"class-description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Relationships",id:"relationships",children:[]},{value:"Leaf/Root class",id:"leafroot-class",children:[]},{value:"Associations",id:"associations",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"class-description"},"Class Description"),Object(l.b)("p",null,"IEEE 421.5-2005 type PSS4B power system stabilizer. The PSS4B model represents a structure based on multiple working frequency bands. Three separate bands, respectively dedicated to the low-, intermediate- and high-frequency modes of oscillations, are used in this delta omega (speed input) PSS."),Object(l.b)("p",null,"There is an error in the in IEEE 421.5-2005 PSS4B model: the ",Object(l.b)("i",null,"Pe")," input should read \ufffd",Object(l.b)("i",null,"Pe"),". This implies that the input ",Object(l.b)("i",null,"Pe")," needs to be multiplied by -1."),Object(l.b)("p",null,"Reference: IEEE 4B 421.5-2005, 8.4. "),Object(l.b)("p",null,"Parameter details:"),Object(l.b)("p",null,"This model has 2 input signals. They have the following fixed types (expressed in terms of InputSignalKind values): the first one is of rotorAngleFrequencyDeviation type and the second one is of generatorElectricalPower type."),Object(l.b)("h3",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bwh1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 1 (high-frequency band): three dB bandwidth (",Object(l.b)("i",null,"B"),Object(l.b)("i",null,Object(l.b)("sub",null,"wi")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bwh2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 2 (high-frequency band): three dB bandwidth (",Object(l.b)("i",null,"B"),Object(l.b)("i",null,Object(l.b)("sub",null,"wi")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bwl1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 1 (low-frequency band): three dB bandwidth (",Object(l.b)("i",null,"B"),Object(l.b)("i",null,Object(l.b)("sub",null,"wi")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bwl2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 2 (low-frequency band): three dB bandwidth (",Object(l.b)("i",null,"B"),Object(l.b)("i",null,Object(l.b)("sub",null,"wi")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"H")),").  Typical value = 120.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band differential filter gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"H1")),").  Typical value = 66.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh11"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band first lead-lag blocks coefficient (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"H11")),").  Typical value = 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh17"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band first lead-lag blocks coefficient (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"H17")),").  Typical value = 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kh2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band differential filter gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"H2")),").  Typical value = 66.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"I")),").  Typical value = 30.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band differential filter gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"I1")),").  Typical value = 66.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki11"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band first lead-lag blocks coefficient (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"I11")),").  Typical value = 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki17"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band first lead-lag blocks coefficient (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"I17")),").  Typical value = 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ki2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band differential filter gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"I2")),").  Typical value = 66.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"L")),").  Typical value = 7.5.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band differential filter gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"L1")),").  Typical value = 66.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl11"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band first lead-lag blocks coefficient (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"L11")),").  Typical value = 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl17"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band first lead-lag blocks coefficient (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"L17")),").  Typical value = 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"kl2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band differential filter gain (",Object(l.b)("i",null,"K"),Object(l.b)("i",null,Object(l.b)("sub",null,"L2")),").  Typical value = 66.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"omeganh1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 1 (high-frequency band): filter frequency (",Object(l.b)("i",null,"omega"),Object(l.b)("i",null,Object(l.b)("sub",null,"ni")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"omeganh2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 2 (high-frequency band): filter frequency (",Object(l.b)("i",null,"omega"),Object(l.b)("i",null,Object(l.b)("sub",null,"ni")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"omeganl1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 1 (low-frequency band): filter frequency (",Object(l.b)("i",null,"omega"),Object(l.b)("i",null,Object(l.b)("sub",null,"ni")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"omeganl2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Float"}),"Float")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Notch filter 2 (low-frequency band): filter frequency (",Object(l.b)("i",null,"omega"),Object(l.b)("i",null,Object(l.b)("sub",null,"ni")),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H1")),") (",">","= 0).  Typical value = 0,01513.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th10"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H10")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th11"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H11")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th12"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H12")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H2")),") (",">","= 0).  Typical value = 0,01816.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th3"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H3")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th4"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H4")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th5"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H5")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th6"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H6")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th7"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H7")),") (",">","= 0).  Typical value = 0,01816.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th8"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H8")),") (",">","= 0).  Typical value = 0,02179.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"th9"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"H9")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I1")),") (",">","= 0).  Typical value = 0,173.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti10"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I10")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti11"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I11")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti12"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I12")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I2")),") (",">","= 0).  Typical value = 0,2075.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti3"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I3")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti4"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I4")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti5"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I5")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti6"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I6")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti7"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I7")),") (",">","= 0).  Typical value = 0,2075.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti8"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I8")),") (",">","= 0).  Typical value = 0,2491.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ti9"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"I9")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L1")),") (",">","= 0).  Typical value = 1,73.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl10"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L10")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl11"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L11")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl12"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L12")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L2")),") (",">","= 0).  Typical value = 2,075.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl3"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L3")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl4"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L4")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl5"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L5")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl6"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L6")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl7"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L7")),") (",">","= 0).  Typical value = 2,075.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl8"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L8")),") (",">","= 0).  Typical value = 2,491.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"tl9"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/Seconds"}),"Seconds")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band time constant (",Object(l.b)("i",null,"T"),Object(l.b)("i",null,Object(l.b)("sub",null,"L9")),") (",">","= 0).  Typical value = 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vhmax"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band output maximum limit (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"Hmax")),") (",">"," PssIEEE4B.vhmin).  Typical value = 0,6.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vhmin"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"High band output minimum limit (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"Hmin")),") (","<"," PssIEEE4V.vhmax).  Typical value = -0,6.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vimax"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band output maximum limit (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"Imax")),") (",">"," PssIEEE4B.vimin).  Typical value = 0,6.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vimin"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Intermediate band output minimum limit (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"Imin")),") (","<"," PssIEEE4B.vimax).  Typical value = -0,6.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vlmax"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band output maximum limit (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"Lmax")),") (",">"," PssIEEE4B.vlmin).  Typical value = 0,075.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vlmin"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Low band output minimum limit (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"Lmin")),") (","<"," PssIEEE4B.vlmax).  Typical value = -0,075.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vstmax"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"PSS output maximum limit (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"STmax")),") (",">"," PssIEEE4B.vstmin).  Typical value = 0,15.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"vstmin"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/Model/TC57CIM/IEC61970/Base/Domain/PU"}),"PU")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"PSS output minimum limit (",Object(l.b)("i",null,"V"),Object(l.b)("i",null,Object(l.b)("sub",null,"STmin")),") (","<"," PssIEEE4B.vstmax).  Typical value = -0,15.")))),Object(l.b)("h3",{id:"relationships"},"Relationships"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Inherits from"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/Model/TC57CIM/IEC61970/Dynamics/StandardModels/PowerSystemStabilizerDynamics/PowerSystemStabilizerDynamics"}),"PowerSystemStabilizerDynamics"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Descendant classes"),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No descendant classes  ")),Object(l.b)("h3",{id:"leafroot-class"},"Leaf/Root class"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsLeaf"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"IsRoot"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"False")))),Object(l.b)("h3",{id:"associations"},"Associations"),Object(l.b)("p",null,"None"))}j.isMDXComponent=!0},2146:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var b=a(0),n=a.n(b);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},l=Object.keys(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),j=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},d=function(e){var t=j(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,l=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),d=j(a),o=b,p=d["".concat(c,".").concat(o)]||d[o]||m[o]||l;return a?n.a.createElement(p,r({ref:t},O,{components:a})):n.a.createElement(p,r({ref:t},O))}));function p(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var l=a.length,c=new Array(l);c[0]=o;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:b,c[1]=r;for(var O=2;O<l;O++)c[O]=a[O];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);