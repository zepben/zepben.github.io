"use strict";(self.webpackChunkpof_network_extractor_doco=self.webpackChunkpof_network_extractor_doco||[]).push([[347],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6072:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={id:"processing-details",title:"Processing Details"},s=void 0,c={unversionedId:"processing-details",id:"version-2.5.0/processing-details",title:"Processing Details",description:"The PoF Network Extractor runs the following processes:",source:"@site/versioned_docs/version-2.5.0/processing-details.md",sourceDirName:".",slug:"/processing-details",permalink:"/evolve/docs/pof-network-extractor/2.5.0/processing-details",draft:!1,tags:[],version:"2.5.0",frontMatter:{id:"processing-details",title:"Processing Details"},sidebar:"version-2.5.0/sidebar",previous:{title:"Running the Application",permalink:"/evolve/docs/pof-network-extractor/2.5.0/run-app"}},p={},m=[{value:"Pre-Load Caching",id:"pre-load-caching",level:2},{value:"Convert Node Components",id:"convert-node-components",level:2},{value:"Convert Conductor Components",id:"convert-conductor-components",level:2},{value:"Spread Voltages",id:"spread-voltages",level:2},{value:"Process the Network Hierarchy",id:"process-the-network-hierarchy",level:2},{value:"Process LV Meters",id:"process-lv-meters",level:2},{value:"Process HV Meters",id:"process-hv-meters",level:2},{value:"Extract Operational Restrictions",id:"extract-operational-restrictions",level:2},{value:"Extract Geographical Information",id:"extract-geographical-information",level:2},{value:"Clean Unwanted Network",id:"clean-unwanted-network",level:2},{value:"Fix Known Data Issues",id:"fix-known-data-issues",level:2},{value:"Collapse Network",id:"collapse-network",level:2},{value:"Interpolate Geographical Information",id:"interpolate-geographical-information",level:2},{value:"Save System Names",id:"save-system-names",level:2}],d={toc:m},u="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The PoF Network Extractor runs the following processes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#pre-load-caching"},"Pre-load caching")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#convert-node-components"},"Convert node components")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#convert-conductor-components"},"Convert conductor components")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#spread-voltages"},"Spread voltages")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#process-the-network-hierarchy"},"Process the network hierarchy")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#process-lv-meters"},"Process LV meters")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#process-hv-meters"},"Process HV meters")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#extract-operational-restrictions"},"Extract operational restrictions")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#extract-geographical-information"},"Extract geographical information")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#clean-unwanted-network"},"Clean unwanted network")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fix-known-data-issues"},"Fix known data issues")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#collapse-network"},"Collapse network")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#interpolate-geographical-information"},"Interpolate geographical information")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#save-system-names"},"Save system names"))),(0,r.kt)("h2",{id:"pre-load-caching"},"Pre-Load Caching"),(0,r.kt)("p",null,"Before any other processes run, we read the component header and required component attributes from the PoF database, and the\nlatest meter mapping CSV is cached. You configure the database connection, and the location of the meter mapping file, in the app config."),(0,r.kt)("p",null,"The cached attributes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cable Length"),(0,r.kt)("li",{parentName:"ul"},"DPA Cable Code"),(0,r.kt)("li",{parentName:"ul"},"DPA Length"),(0,r.kt)("li",{parentName:"ul"},"Feeder"),(0,r.kt)("li",{parentName:"ul"},"Feeder Name"),(0,r.kt)("li",{parentName:"ul"},"GIS ID"),(0,r.kt)("li",{parentName:"ul"},"Latitude"),(0,r.kt)("li",{parentName:"ul"},"Longitude"),(0,r.kt)("li",{parentName:"ul"},"Operating Voltage"),(0,r.kt)("li",{parentName:"ul"},"Phase Conductor Material"),(0,r.kt)("li",{parentName:"ul"},"Primary Voltage"),(0,r.kt)("li",{parentName:"ul"},"Rating (kVA)"),(0,r.kt)("li",{parentName:"ul"},"Secondary Voltage"),(0,r.kt)("li",{parentName:"ul"},"Type")),(0,r.kt)("h2",{id:"convert-node-components"},"Convert Node Components"),(0,r.kt)("p",null,"Component header records without a source and destination will be processed in this step. The type of object created is based on\nthe component class mappings defined in the data config."),(0,r.kt)("p",null,"Graphics will be created based on entries in the hot spot positions table."),(0,r.kt)("h2",{id:"convert-conductor-components"},"Convert Conductor Components"),(0,r.kt)("p",null,"Component header records with a source and destination will be processed in this step. All entries will be created as AcLineSegments,\nand will be connected to the source and destination components."),(0,r.kt)("p",null,"Graphics will be created based on entries in the connections table."),(0,r.kt)("p",null,"The voltage of the AcLineSegment will be set based on the name of the component class."),(0,r.kt)("h2",{id:"spread-voltages"},"Spread Voltages"),(0,r.kt)("p",null,"Voltages will be spread from the AcLineSegments to the connected equipment and validated."),(0,r.kt)("h2",{id:"process-the-network-hierarchy"},"Process the Network Hierarchy"),(0,r.kt)("p",null,"Processes all components defined as a feeder in the data config and performs the following actions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Extract the feeder name from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Feeder Name")," attribute."),(0,r.kt)("li",{parentName:"ol"},"Extract the substation name from the feeder name using the first match group from the regex ",(0,r.kt)("inlineCode",{parentName:"li"},"^([A-Za-z]+)(((\\d+).*)|( [Ff]dr \\d+)|(OOS.)|(-.*))$"),"."),(0,r.kt)("li",{parentName:"ol"},"Find the substation component based on the zone clone ID (defined in the data config), the name (if it ends with 'T' it will also search for 'TS' and 'TS22') and being in a visible world."),(0,r.kt)("li",{parentName:"ol"},"Find the sub geographical region as the parent of the substation."),(0,r.kt)("li",{parentName:"ol"},"Find the geographical region as the first item up the component hierarchy that is defined as a business root in the data config.")),(0,r.kt)("p",null,"All classes configured as sites in the data config will have the following processing performed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove the site component and create a Site object."),(0,r.kt)("li",{parentName:"ol"},"Assign all child components to the Site object.")),(0,r.kt)("h2",{id:"process-lv-meters"},"Process LV Meters"),(0,r.kt)("p",null,"Creates meters and usage points for all meter records with transformers. Also validates the feeder attribute vs tracing from the DMS."),(0,r.kt)("p",null,"We use the most common locality from the addresses of meters associated with a transformer as the transformer locality."),(0,r.kt)("h2",{id:"process-hv-meters"},"Process HV Meters"),(0,r.kt)("p",null,"Create meters for all records without transformers and associates them with the EnergyConsumer defined as the supply point using the\nGIS ID from the correlations created earlier."),(0,r.kt)("h2",{id:"extract-operational-restrictions"},"Extract Operational Restrictions"),(0,r.kt)("p",null,"Creates an operational restriction for all permits that match the following query (provided):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select\n    pac.PERMIT_REF AS CRO_REF,\n    pac.COMPONENT_ID,\n    pac.COMPONENT_DESCRIPTION as Description,\n    pmts.PERMIT_NAME as CRO_TYPE,\n    pmts.DISPLAYED_PERMIT_REF as CRO_PERMIT_REF,\n    pmts.CURRENT_STATE as CRO_STATE,\n    pmts.ISSUED_BY as CRO_Issued_By,\n    pmts.ISSUED_DATE as CRO_Issued_Date,\n    pmtxt3.TEXT as CRO_Details3,\n    pmtxt4.TEXT as CRO_Details4,\n    pmtxt5.TEXT as CRO_Details5\nfrom PERMIT_ATTACHED_COMPS pac\n    inner join PERMITS pmts ON pac.PERMIT_REF = pmts.PERMIT_REF\n    inner join operations ops ON pac.PERMIT_REF = ops.PERMIT_ID AND pac.COMPONENT_ID = ops.COMPONENT_ID\n    left join PERMIT_TEXT pmtxt3 ON pmts.PERMIT_REF = pmtxt3.PERMIT_REF AND pmtxt3.TEXT_INDEX = 3\n    left join PERMIT_TEXT pmtxt4 ON pmts.PERMIT_REF = pmtxt4.PERMIT_REF AND pmtxt4.TEXT_INDEX = 4\n    left join PERMIT_TEXT pmtxt5 ON pmts.PERMIT_REF = pmtxt5.PERMIT_REF AND pmtxt5.TEXT_INDEX = 5\nwhere pmts.PERMIT_NAME in('CRO', 'CRO_Inoperable', 'CRO_Operable') AND ops.CURRENT_STATE = 'Issued';\n")),(0,r.kt)("h2",{id:"extract-geographical-information"},"Extract Geographical Information"),(0,r.kt)("p",null,"Every component with Easting/Northing header values that are not integers, or with ",(0,r.kt)("inlineCode",{parentName:"p"},"Latitude"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Longitude")," attributes, will\nhave these values extracted as the geographic location of the component."),(0,r.kt)("h2",{id:"clean-unwanted-network"},"Clean Unwanted Network"),(0,r.kt)("p",null,"The network cleaner removes anything that does not belong to a valid world as specified in the data config. To be considered valid,\na component must satisfy one of the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Is displayed in a valid world."),(0,r.kt)("li",{parentName:"ol"},"Is connected to something that is displayed in a valid world. This is traced, not just immediately connected."),(0,r.kt)("li",{parentName:"ol"},"Belongs to the same site as something that is displayed or connected in a valid world.")),(0,r.kt)("h2",{id:"fix-known-data-issues"},"Fix Known Data Issues"),(0,r.kt)("p",null,"The following fixes will be made to the network."),(0,r.kt)("p",null,"Removes DPA busbar nodes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Processes all components with class 885."),(0,r.kt)("li",{parentName:"ol"},"Remove each connected internal AcLineSegment."),(0,r.kt)("li",{parentName:"ol"},"Remove the component.")),(0,r.kt)("p",null,"Collapses regulators:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Processes all components with a class defined in the regulator data config."),(0,r.kt)("li",{parentName:"ol"},"For each terminal, trace along all internal connections removing the internal connection and reconnecting any\nexternal connections to the terminal.\n")),(0,r.kt)("p",null,"Fixes cross-wiring:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Processes all components with multiple terminals."),(0,r.kt)("li",{parentName:"ol"},"Find all surrounding internal connections."),(0,r.kt)("li",{parentName:"ol"},"Find all surrounding components on the other end of the internal connections. "),(0,r.kt)("li",{parentName:"ol"},"Remove any internal connections connected directly between two surrounding components.\n")),(0,r.kt)("p",null,"Rewires incorrect wiring:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Processes all components with three or more terminals."),(0,r.kt)("li",{parentName:"ol"},"Find all connected internal connections, and the component connected to the other end."),(0,r.kt)("li",{parentName:"ol"},"If there is at least two internal and at least one external connections, attempt to remove the internals,\nand reconnect the attached components."),(0,r.kt)("li",{parentName:"ol"},"Rewiring will not occur if any of the connected components:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Is a feeder start point."),(0,r.kt)("li",{parentName:"ul"},"Has a latitude/longitude."),(0,r.kt)("li",{parentName:"ul"},"Is a PowerTransformer."),(0,r.kt)("li",{parentName:"ul"},"Is an EnergySource.")))),(0,r.kt)("h2",{id:"collapse-network"},"Collapse Network"),(0,r.kt)("p",null,"This process will replace fault indicators, removing any that are disconnected. The fault indicator will be\nplaced at the symbol centre associated with a terminal connected to the original disconnector."),(0,r.kt)("p",null,"Perform the following for all visible components that are surrounded by internal connections:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Trace along the internal connections looking for external connections and visible disconnect points."),(0,r.kt)("li",{parentName:"ol"},"Ensure all disconnect points are not EnergySources and are closed."),(0,r.kt)("li",{parentName:"ol"},"Ensure there were no loops in the internal connections."),(0,r.kt)("li",{parentName:"ol"},"Ensure no disconnect point:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Is a feeder start point."),(0,r.kt)("li",{parentName:"ul"},"Has a latitude/longitude."),(0,r.kt)("li",{parentName:"ul"},"Is a PowerTransformer."),(0,r.kt)("li",{parentName:"ul"},"Is an EnergySource."))),(0,r.kt)("li",{parentName:"ol"},"Remove all disconnect points and internal connections, and reconnect any external connections. ")),(0,r.kt)("h2",{id:"interpolate-geographical-information"},"Interpolate Geographical Information"),(0,r.kt)("p",null,"Tries to fill in any missing latitude/longitudes using tracing to nearby components, or spreading junctions\nequally along straight line segments between known points."),(0,r.kt)("h2",{id:"save-system-names"},"Save System Names"),(0,r.kt)("p",null,"Mapped GIS IDs are saved as names against added objects."))}h.isMDXComponent=!0}}]);