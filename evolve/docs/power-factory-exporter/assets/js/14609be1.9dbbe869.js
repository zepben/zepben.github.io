"use strict";(self.webpackChunkpower_factory_exporter_doco=self.webpackChunkpower_factory_exporter_doco||[]).push([[307],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,f=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9053:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},s=void 0,d={type:"mdx",permalink:"/evolve/docs/power-factory-exporter/release-notes",source:"@site/src/pages/release-notes.md",description:"Release History",frontMatter:{}},m=[{value:"Release History",id:"release-history",level:4},{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Removed",id:"removed",level:3},{value:"Notes",id:"notes",level:3},{value:"Breaking Changes",id:"breaking-changes-1",level:3},{value:"New Features",id:"new-features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Notes",id:"notes-1",level:3}],p={toc:m},u="wrapper";function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"release-history"},"Release History"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Released"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v080"},"0.8.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"28 January 2025"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v070"},"0.7.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"12 August 2024"))))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"NOTE: This library is not yet stable, and breaking changes should be expected until a 1.0.0 release."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated evolve-super-pom version to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.34.1"),"."),(0,o.kt)("li",{parentName:"ul"},"Update evolve-sdk version")),(0,o.kt)("h3",{id:"added"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Processor controller to aggregate all processors"),(0,o.kt)("li",{parentName:"ul"},"Feeder Colour processor"),(0,o.kt)("li",{parentName:"ul"},"ciorient variable to ElmFeeder"),(0,o.kt)("li",{parentName:"ul"},"LoadSiteProcessor added to create ElmTrfstat for each ElmLod and assign them to the ElmTrfstat"),(0,o.kt)("li",{parentName:"ul"},"DefaultLoadProcessor added to give all ElmLod a default load"),(0,o.kt)("li",{parentName:"ul"},"RecloserProcessor added to untangle square network with jumbled connectivity node"),(0,o.kt)("li",{parentName:"ul"},"StarPointProcessor added to allow application of r0 and x0 values to distribution transformers"),(0,o.kt)("li",{parentName:"ul"},"Phases are now properly mapped to all elements"),(0,o.kt)("li",{parentName:"ul"},"ElementGapperProcessor added to provide gapping between elements and flanking lines in PF"),(0,o.kt)("li",{parentName:"ul"},"PhaseCode.N will be properly mapped to PhaseTechnology.N"),(0,o.kt)("li",{parentName:"ul"},"ElmShnt is created for LinearShuntCompensator"),(0,o.kt)("li",{parentName:"ul"},"Added missing test for Elmsubstat in MappingsTest"),(0,o.kt)("li",{parentName:"ul"},"A geographic IntGrfnet will be created as the final step of dgs.convert as default diagram"),(0,o.kt)("li",{parentName:"ul"},"Implement voltage regulator mapping"),(0,o.kt)("li",{parentName:"ul"},"Feeder colour added to demo_config"),(0,o.kt)("li",{parentName:"ul"},"Implement neutral assignment to fuse"),(0,o.kt)("li",{parentName:"ul"},"Jumpers are now mapped"),(0,o.kt)("li",{parentName:"ul"},"Added a final processor to clean up unused elements in dgs"),(0,o.kt)("li",{parentName:"ul"},"Added a processor to process distribution transformers site"),(0,o.kt)("li",{parentName:"ul"},"Terminals are now sorted by feeder direction before running it through stacubic creation"),(0,o.kt)("li",{parentName:"ul"},"Added Current Transformer mapping"),(0,o.kt)("li",{parentName:"ul"},"Added PhaseRotation enum for power factory"),(0,o.kt)("li",{parentName:"ul"},"Map PowerElectronicsConnection to ElmPVsys"),(0,o.kt)("li",{parentName:"ul"},"Added Time series database support for Elmload loadflow values"),(0,o.kt)("li",{parentName:"ul"},"HV Customer data are now read in for max load distribution"),(0,o.kt)("li",{parentName:"ul"},"Distribution Transformer will now inherit Tap changer value from Transformer end one"),(0,o.kt)("li",{parentName:"ul"},"Added a processor to change Elmcoup aUsage base on its chrname for endeavour's custom symbol"),(0,o.kt)("li",{parentName:"ul"},"Added sType for ElmTrfstat to further investigate custom symbol options"),(0,o.kt)("li",{parentName:"ul"},"Energy Source Impedance mapping"),(0,o.kt)("li",{parentName:"ul"},"ElmxNet Processor to remove external grids without source impedance"),(0,o.kt)("li",{parentName:"ul"},"Added Switch typing for LVLINK switches"),(0,o.kt)("li",{parentName:"ul"},"Added TypLod for general load type mapping"),(0,o.kt)("li",{parentName:"ul"},"Added Processor to remove hanging ElmCoup and RelFuse"),(0,o.kt)("li",{parentName:"ul"},"Auxiliary Equipments are now removed as part of the final clean up process"),(0,o.kt)("li",{parentName:"ul"},"snss and snssmin value removed from ElmXnet to prevent default value being written out or inconsistency with official document"),(0,o.kt)("li",{parentName:"ul"},"Enabled SWER transformer mapping as per Endevor's way, this should be changed when SWER works properly in PF."),(0,o.kt)("li",{parentName:"ul"},"Model name is generated during model creation if one wasn't given"),(0,o.kt)("li",{parentName:"ul"},"Added ElmVac object type"),(0,o.kt)("li",{parentName:"ul"},"CharactersticApproximation and DatabaseUsage Enum added for time characteristic variable"),(0,o.kt)("li",{parentName:"ul"},"Circuits are now supported as part of the model process to create Sub-trans models"),(0,o.kt)("li",{parentName:"ul"},"Sites are now mapped to Elmsite instead of ElmTrfstat"),(0,o.kt)("li",{parentName:"ul"},"TransformerSiteType added for custom symbol purposes"),(0,o.kt)("li",{parentName:"ul"},"Final clean up will inlcude StaCt as part of its clean up"),(0,o.kt)("li",{parentName:"ul"},"Added a processor that change all LV Elmterm UkNom value to 400"),(0,o.kt)("li",{parentName:"ul"},"SubtransConsolidationProcessor added for consistency like LvConsolidation"),(0,o.kt)("li",{parentName:"ul"},"Add in TriSwitchProcessor to clean up tri switch set up on maps"),(0,o.kt)("li",{parentName:"ul"},"Added mapping for a few shunt capacitor variables"),(0,o.kt)("li",{parentName:"ul"},"Added excited current and zero impedance loss for typtr2 mapping"),(0,o.kt)("li",{parentName:"ul"},"Added mapping for 3 winding transformers"),(0,o.kt)("li",{parentName:"ul"},"Energy consumer in zone sub now mapped as Complex loads"),(0,o.kt)("li",{parentName:"ul"},"Neutral switches are mapped as ElmGndswt"),(0,o.kt)("li",{parentName:"ul"},"Add Docusaurus docs"),(0,o.kt)("li",{parentName:"ul"},"Add dbSchema as part of SetDatabase"),(0,o.kt)("li",{parentName:"ul"},"Added Overlapping Nodes And Equipment Processor to help with overlapping element that isn't directly connected"),(0,o.kt)("li",{parentName:"ul"},"NER are now mapped to ElmSind"),(0,o.kt)("li",{parentName:"ul"},"Added AdditionalVariablesProcessor to add any additional property of power factory classes that are declared in the template"),(0,o.kt)("li",{parentName:"ul"},"Added nullable fields to ElmCoup and ElmTrfstat to support Endeavour's extra fields"),(0,o.kt)("li",{parentName:"ul"},"Added IntVersion and its creation on model creation"),(0,o.kt)("li",{parentName:"ul"},"Added NERProcessor to create an ElmGndswt downstream of ElmSind")),(0,o.kt)("h3",{id:"changed"},"Changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ElmSubstrat now gets a foldId assignment"),(0,o.kt)("li",{parentName:"ul"},"assignment of new gps location in recloser processor has been moved so entries are only modified if recloser structural change has passed"),(0,o.kt)("li",{parentName:"ul"},"Busbar now work off its description to find the correct connectivity node."),(0,o.kt)("li",{parentName:"ul"},"Lower element gapper added distance"),(0,o.kt)("li",{parentName:"ul"},"Switch phase technology now depends on switch's own terminal (maximum phase num)"),(0,o.kt)("li",{parentName:"ul"},"Elmcoup and Relfuse nNeutral assignment changed (technically same result but goes off N in phases)"),(0,o.kt)("li",{parentName:"ul"},"Voltage regulator mapping enabled"),(0,o.kt)("li",{parentName:"ul"},"LV side rated current is hard set to 0.5 for single phase transformers"),(0,o.kt)("li",{parentName:"ul"},"Default value for defalut load is changed to be more reasonable"),(0,o.kt)("li",{parentName:"ul"},"Typlne FID will now take base voltage into consideration."),(0,o.kt)("li",{parentName:"ul"},"Updated exporter to support the creation of simplified networks at the edge of requested networks"),(0,o.kt)("li",{parentName:"ul"},"Locname and Chrname for Elmcoup and Elmterm (Busbars) will now map off object nametypes"),(0,o.kt)("li",{parentName:"ul"},"Defaulloadprocessor accomodates for equivalent branch energy consumers"),(0,o.kt)("li",{parentName:"ul"},"Calculation for load is done in volt instead of KV"),(0,o.kt)("li",{parentName:"ul"},"File intake for maxload is now limited to csv instead of accepting Excel files"),(0,o.kt)("li",{parentName:"ul"},"Elmlne now inherit line type to its description for Custom Labels"),(0,o.kt)("li",{parentName:"ul"},"Added more attributes to ElmTr2 and ElmXnet"),(0,o.kt)("li",{parentName:"ul"},"We now pass in two clients (one for mapping one for info) for network processing before DGS mapping"),(0,o.kt)("li",{parentName:"ul"},"Power Transformer in substation now tap changes at LV side with Positive Sequence (from HV side and A phase only)"),(0,o.kt)("li",{parentName:"ul"},"Changed Test coverage to 0.69 because it will be too much wasted effort in creating a functional DgsGenerator Test."),(0,o.kt)("li",{parentName:"ul"},"Default load will be assigned to Elmlod when entries are not found in Maxfeederload file"),(0,o.kt)("li",{parentName:"ul"},"DTX busbar processor now account for padmount set up"),(0,o.kt)("li",{parentName:"ul"},"database processor will now check against a nmi list file to determine which energy consumer to create database link for"),(0,o.kt)("li",{parentName:"ul"},"Made changes to typtr2 mapping to reflect power transformer end sRating changes in the importer and SDK."),(0,o.kt)("li",{parentName:"ul"},"Energysource now map to ElmVac until power factory fix ElmXnet value discrepancy"),(0,o.kt)("li",{parentName:"ul"},"Substation of requested feeders will always be included in the model"),(0,o.kt)("li",{parentName:"ul"},"Database Table name changed from readings to samples."),(0,o.kt)("li",{parentName:"ul"},"ElmLod inputmode has been expanded to support all mode in power factory"),(0,o.kt)("li",{parentName:"ul"},"A Reference file is written for all nmi even when they are not in the list"),(0,o.kt)("li",{parentName:"ul"},"Nmi not in the list will be linked to AVG Time characteristic as default"),(0,o.kt)("li",{parentName:"ul"},"Approximation of Time Characteristic now changed from absolute to Linear"),(0,o.kt)("li",{parentName:"ul"},"LVnetworks are now consolidated into HV, so they don't create their own grid"),(0,o.kt)("li",{parentName:"ul"},'Introduce a processor to sort "SP" connectivity_nodes into corresponding substation'),(0,o.kt)("li",{parentName:"ul"},"desc as a variable is moved to Element so everything can have description"),(0,o.kt)("li",{parentName:"ul"},"getPowerTransformerNumberOfPhases method moved to DgsNetworkUtilis"),(0,o.kt)("li",{parentName:"ul"},"ElmLod will accumulate associated NMI as their description"),(0,o.kt)("li",{parentName:"ul"},"Enhanced Element Gapper"),(0,o.kt)("li",{parentName:"ul"},"Recloser processor now works with volt Reg since they are normally in a site with similar set up. We also no longer\nprocess recloser that's not connected on both side"),(0,o.kt)("li",{parentName:"ul"},"GPSLon and GPSLat moved from individual ServiceElement to the parent class"),(0,o.kt)("li",{parentName:"ul"},"Switch that is directly connected to load in a site is moved into the load site to clean things up."),(0,o.kt)("li",{parentName:"ul"},"LvElmTermProcessor will now also work when there is no LvFeeder requested."),(0,o.kt)("li",{parentName:"ul"},"Subtrans model will now derive their name from loops instead of circuits."),(0,o.kt)("li",{parentName:"ul"},"Changed database objects naming convention to prevent fID being too long"),(0,o.kt)("li",{parentName:"ul"},"Symbol for substation sites are now determined by transformer construction kind instead of name types"),(0,o.kt)("li",{parentName:"ul"},"Changed how energy source is added to the network, only keep new source if source impedance value transferred over"),(0,o.kt)("li",{parentName:"ul"},"Energy Source with no source impedance will not be removed during final clean up"),(0,o.kt)("li",{parentName:"ul"},"Site foldID mapping now goes off a priority system of PT feeder, then equipment feeder, then finally circuit."),(0,o.kt)("li",{parentName:"ul"},"Energy Source (ElmVac) will be disabled in Zone subs when BSP exists in the model."),(0,o.kt)("li",{parentName:"ul"},"Auxiliary equipment removal in final clean up has been changed to ignore power transformers"),(0,o.kt)("li",{parentName:"ul"},"Time Characteristic write out now base off a list of database tag supplied"),(0,o.kt)("li",{parentName:"ul"},"Time Characteristic now set to User defined units"),(0,o.kt)("li",{parentName:"ul"},"Database object creation is currently disabled as endeavor asked to keep it as part of the template"),(0,o.kt)("li",{parentName:"ul"},"Open switches connecting unrequested network will no longer get removed in RemoveHangingElmCoupProcessor"),(0,o.kt)("li",{parentName:"ul"},"Update RemoveGpsSiteCoordsProcessor to process all ServiceElement as GPSCoord property has since been moved from individual class to ServiceElement Parent class"),(0,o.kt)("li",{parentName:"ul"},"Changed ElmGndSwt mapping to GroundDisconnector class"),(0,o.kt)("li",{parentName:"ul"},"Change ElmSind mapping to SeriesCompensator class"),(0,o.kt)("li",{parentName:"ul"},"ElmLod plini and qlini now left as 0.0f when databaseConfig is present ")),(0,o.kt)("h3",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"findGPSForCNN method now ignores connectivity nodes with a single terminal"),(0,o.kt)("li",{parentName:"ul"},"TypLne correctly use cOhl and not aOhl(not a PF variable)"),(0,o.kt)("li",{parentName:"ul"},"Load site are now assigned to the network and have its loc_name changed"),(0,o.kt)("li",{parentName:"ul"},"Recloser switch type is changed to circuit breaker"),(0,o.kt)("li",{parentName:"ul"},"Recloser processor changed up to accommodate skipped recloser from importer"),(0,o.kt)("li",{parentName:"ul"},"Relfuse and Elmcoup now accommodates for N phase only switches"),(0,o.kt)("li",{parentName:"ul"},"Change from First to FirstorNull in elementaGapper, so it can be by pass if elements are missing."),(0,o.kt)("li",{parentName:"ul"},"Renamed test file to properly reflect its function"),(0,o.kt)("li",{parentName:"ul"},"We now handle any mRID above 40 character by generating new UUID for it"),(0,o.kt)("li",{parentName:"ul"},"duTap setting of Typtr2 now put behind a null check to prevent errors"),(0,o.kt)("li",{parentName:"ul"},"Substation transformers are now grounded"),(0,o.kt)("li",{parentName:"ul"},"Stacubic now maps phase changes properly when it occurs"),(0,o.kt)("li",{parentName:"ul"},"Exclude StaCt from final clean up as current transformers are attached to a terminal of another conducting equipment, thus it does not have a StaCubic\nreferencing it."),(0,o.kt)("li",{parentName:"ul"},"chrname truncate for elmcoup now properly set to 20"),(0,o.kt)("li",{parentName:"ul"},"Added missing Relfuse mapping test from custom label changes"),(0,o.kt)("li",{parentName:"ul"},"Patched Remove External Grid function to prevent concurrent errors"),(0,o.kt)("li",{parentName:"ul"},"Busbar assignment for Distribution transformer site has been corrected for HV side"),(0,o.kt)("li",{parentName:"ul"},"Conducting Equipment belonging to two container will now be checked against requested container mRID before removing from the network"),(0,o.kt)("li",{parentName:"ul"},"Power Transformer impedance calculation corrected"),(0,o.kt)("li",{parentName:"ul"},"Remove external grid will only occur when new energy sources are added"),(0,o.kt)("li",{parentName:"ul"},"Element Gapper will now ignore elements with no co-ord points properly"),(0,o.kt)("li",{parentName:"ul"},"chrname and locname of elmcoup will now have invalid characters removed"),(0,o.kt)("li",{parentName:"ul"},"Remove Hanging Element will now crosscheck switch with feeder head to ensure feeder head equipment is not removed"),(0,o.kt)("li",{parentName:"ul"},"nntap will be checked in typtr2 to be between ntmpn and ntpmx"),(0,o.kt)("li",{parentName:"ul"},"chrname and foldid had added checks if they are assigned through networkservice objects"),(0,o.kt)("li",{parentName:"ul"},"Isolation transformer value and flanking Elmterm or Stacubic is corrected"),(0,o.kt)("li",{parentName:"ul"},"Introduce Double.Nan check for transformer source impedance value"),(0,o.kt)("li",{parentName:"ul"},"Stacubic and Elmterm association is now updated in the dgsservice list in recloser processor."),(0,o.kt)("li",{parentName:"ul"},"Correct the math on the calculation of the ikss value of ElmXnet"),(0,o.kt)("li",{parentName:"ul"},"iintgnd value fix for DTX (ElmTr2)"),(0,o.kt)("li",{parentName:"ul"},"ikssmin calculation fix for ElmXNet"),(0,o.kt)("li",{parentName:"ul"},"RemoveHangingElmCoup will now ignore elements with auxiliary equipment attached"),(0,o.kt)("li",{parentName:"ul"},"ElmSubstat type sorting fixed to prevent spelling issue"),(0,o.kt)("li",{parentName:"ul"},"Remove the chance for final file name to be blank"),(0,o.kt)("li",{parentName:"ul"},"HVC equipments and connectivity nodes are properly sorted"),(0,o.kt)("li",{parentName:"ul"},"Power Transformer end will now properly filter out NaN instead of writing it out to cause a mistake"),(0,o.kt)("li",{parentName:"ul"},"Fixed power transformer Impedance math"),(0,o.kt)("li",{parentName:"ul"},"Added check for element gapper to prevent movement if part of the switch group is not on the map"),(0,o.kt)("li",{parentName:"ul"},"Fixed power transformer source impedance values"),(0,o.kt)("li",{parentName:"ul"},"3 winding transformer impedance math to take in consideration of ratedS ratio and mapping refined"),(0,o.kt)("li",{parentName:"ul"},"Fix cneutcon for Power transformer containing neutral grounding connection in substation"),(0,o.kt)("li",{parentName:"ul"},"Fix elmTerm detail between neutral terminal and grounding switch"),(0,o.kt)("li",{parentName:"ul"},"Auxiliary equipment removal doesn't remove equipment with 0 voltage"),(0,o.kt)("li",{parentName:"ul"},"Elemental gapper ignores Line-Switch-Switch-Line formation that doesn't end up with 2 new position points."),(0,o.kt)("li",{parentName:"ul"},"Fix iintgnd and hv/lv ground connection so neutral connect is correctly assigned on import"),(0,o.kt)("li",{parentName:"ul"},"MV end from 3 winding power transformer will also have its ratedS ratioed."),(0,o.kt)("li",{parentName:"ul"},"ElmGndswt StaCubic objBus is hard set to 0 as it's the only valid option in power factory"),(0,o.kt)("li",{parentName:"ul"},"Fixed some Tri-switch set up that results in overlapping elements"),(0,o.kt)("li",{parentName:"ul"},"Added a fix for phase consistency between transformer vector and flanking elmTerms"),(0,o.kt)("li",{parentName:"ul"},"If a power transformer end is grounded it will have N added to its vector group"),(0,o.kt)("li",{parentName:"ul"},"Add in a Fix for Time Characteristic creation in database processor to handle Fid exceeding 40 characters"),(0,o.kt)("li",{parentName:"ul"},"OverlappingNodesAndEquipmentProcessor will now skip shifting if AcLine is missing GPS Coordinates "),(0,o.kt)("li",{parentName:"ul"},"isol transformer phasing and grounding is no longer hard set but extrapolated from network data"),(0,o.kt)("li",{parentName:"ul"},"ElmTerm connecting between Transformers are now exempted from phase normalization process "),(0,o.kt)("li",{parentName:"ul"},"LvElmTermProcessor changed to accommodate parallel transformers"),(0,o.kt)("li",{parentName:"ul"},"aSub additional variable for switches fall back on to site name if site doesn't contain a distribution transformer")),(0,o.kt)("h3",{id:"removed"},"Removed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None.")),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None.\\n\\n---\\n")),(0,o.kt)("h3",{id:"breaking-changes-1"},"Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None.")),(0,o.kt)("h3",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BatteryUnit now maps to ElmGenStat"),(0,o.kt)("li",{parentName:"ul"},"EvChargeUnit now maps to ElmLod"),(0,o.kt)("li",{parentName:"ul"},"VariantProcessor added to sort PVU added from hosting capacity scenarios into correct variant stages."),(0,o.kt)("li",{parentName:"ul"},"Added mapping of protection relays.")),(0,o.kt)("h3",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"aFeederName2 added to additional variable of Elmcoup so multiple feeder can be listed for open switch even if no feeder is missing from the created model."),(0,o.kt)("li",{parentName:"ul"},"Open switches now gains a description listing all associated feeders even if they are connected on both side."),(0,o.kt)("li",{parentName:"ul"},"PV now creates two QDSL control (volt and watt) per PV and default mode to 0 so they can be activated in scenarios but doesn't interfare with base model."),(0,o.kt)("li",{parentName:"ul"},"PvSystem phTech now maps from the number of phase on the terminal of associated energy consumer.")),(0,o.kt)("h3",{id:"fixes"},"Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Move loadconfig option from democonfig to dgsgenerationconfig so it can be pass through by model service."),(0,o.kt)("li",{parentName:"ul"},"Fix label for open switches in substation when associated feeder isn't part of the model."),(0,o.kt)("li",{parentName:"ul"},"Fix Remove hanging ElmCoup processor"),(0,o.kt)("li",{parentName:"ul"},"ElmPvSys now map from PhotoVoltaicUnits"),(0,o.kt)("li",{parentName:"ul"},"The categories (",(0,o.kt)("inlineCode",{parentName:"li"},"ccat_*"),") of each ",(0,o.kt)("inlineCode",{parentName:"li"},"ElmRelay")," is now based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"protectionKind")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},"ProtectionRelayFunction"),"s in the mapped ",(0,o.kt)("inlineCode",{parentName:"li"},"ProtectionRelaySystem"),"."),(0,o.kt)("li",{parentName:"ul"},"Fix Concurrent error during unused ground switch terminal clean up in final clean up processor.")),(0,o.kt)("h3",{id:"notes-1"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Disabled Average time series load profile creation."),(0,o.kt)("li",{parentName:"ul"},"Support up to evolve-sdk 0.23.0\\n\\n---\\n")))}c.isMDXComponent=!0}}]);