(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,b=m["".concat(i,".").concat(h)]||m[h]||d[h]||r;return a?o.a.createElement(b,l({ref:t},s,{components:a})):o.a.createElement(b,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(103)),i={id:"processing-details",title:"Processing Details"},l={unversionedId:"processing-details",id:"version-2.5.0/processing-details",isDocsHomePage:!1,title:"Processing Details",description:"The PoF Network Extractor runs the following processes:",source:"@site/versioned_docs/version-2.5.0/processing-details.md",slug:"/processing-details",permalink:"/evolve/docs/pof-network-extractor/2.5.0/processing-details",version:"2.5.0",sidebar:"version-2.5.0/sidebar",previous:{title:"Running the Application",permalink:"/evolve/docs/pof-network-extractor/2.5.0/run-app"}},c=[{value:"Pre-Load Caching",id:"pre-load-caching",children:[]},{value:"Convert Node Components",id:"convert-node-components",children:[]},{value:"Convert Conductor Components",id:"convert-conductor-components",children:[]},{value:"Spread Voltages",id:"spread-voltages",children:[]},{value:"Process the Network Hierarchy",id:"process-the-network-hierarchy",children:[]},{value:"Process LV Meters",id:"process-lv-meters",children:[]},{value:"Process HV Meters",id:"process-hv-meters",children:[]},{value:"Extract Operational Restrictions",id:"extract-operational-restrictions",children:[]},{value:"Extract Geographical Information",id:"extract-geographical-information",children:[]},{value:"Clean Unwanted Network",id:"clean-unwanted-network",children:[]},{value:"Fix Known Data Issues",id:"fix-known-data-issues",children:[]},{value:"Collapse Network",id:"collapse-network",children:[]},{value:"Interpolate Geographical Information",id:"interpolate-geographical-information",children:[]},{value:"Save System Names",id:"save-system-names",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"The PoF Network Extractor runs the following processes:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#pre-load-caching"}),"Pre-load caching")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#convert-node-components"}),"Convert node components")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#convert-conductor-components"}),"Convert conductor components")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#spread-voltages"}),"Spread voltages")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#process-the-network-hierarchy"}),"Process the network hierarchy")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#process-lv-meters"}),"Process LV meters")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#process-hv-meters"}),"Process HV meters")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#extract-operational-restrictions"}),"Extract operational restrictions")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#extract-geographical-information"}),"Extract geographical information")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#clean-unwanted-network"}),"Clean unwanted network")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#fix-known-data-issues"}),"Fix known data issues")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#collapse-network"}),"Collapse network")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#interpolate-geographical-information"}),"Interpolate geographical information")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#save-system-names"}),"Save system names"))),Object(r.a)("h2",{id:"pre-load-caching"},"Pre-Load Caching"),Object(r.a)("p",null,"Before any other processes run, we read the component header and required component attributes from the PoF database, and the\nlatest meter mapping CSV is cached. You configure the database connection, and the location of the meter mapping file, in the app config."),Object(r.a)("p",null,"The cached attributes are:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Cable Length"),Object(r.a)("li",{parentName:"ul"},"DPA Cable Code"),Object(r.a)("li",{parentName:"ul"},"DPA Length"),Object(r.a)("li",{parentName:"ul"},"Feeder"),Object(r.a)("li",{parentName:"ul"},"Feeder Name"),Object(r.a)("li",{parentName:"ul"},"GIS ID"),Object(r.a)("li",{parentName:"ul"},"Latitude"),Object(r.a)("li",{parentName:"ul"},"Longitude"),Object(r.a)("li",{parentName:"ul"},"Operating Voltage"),Object(r.a)("li",{parentName:"ul"},"Phase Conductor Material"),Object(r.a)("li",{parentName:"ul"},"Primary Voltage"),Object(r.a)("li",{parentName:"ul"},"Rating (kVA)"),Object(r.a)("li",{parentName:"ul"},"Secondary Voltage"),Object(r.a)("li",{parentName:"ul"},"Type")),Object(r.a)("h2",{id:"convert-node-components"},"Convert Node Components"),Object(r.a)("p",null,"Component header records without a source and destination will be processed in this step. The type of object created is based on\nthe component class mappings defined in the data config."),Object(r.a)("p",null,"Graphics will be created based on entries in the hot spot positions table."),Object(r.a)("h2",{id:"convert-conductor-components"},"Convert Conductor Components"),Object(r.a)("p",null,"Component header records with a source and destination will be processed in this step. All entries will be created as AcLineSegments,\nand will be connected to the source and destination components."),Object(r.a)("p",null,"Graphics will be created based on entries in the connections table."),Object(r.a)("p",null,"The voltage of the AcLineSegment will be set based on the name of the component class."),Object(r.a)("h2",{id:"spread-voltages"},"Spread Voltages"),Object(r.a)("p",null,"Voltages will be spread from the AcLineSegments to the connected equipment and validated."),Object(r.a)("h2",{id:"process-the-network-hierarchy"},"Process the Network Hierarchy"),Object(r.a)("p",null,"Processes all components defined as a feeder in the data config and performs the following actions:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Extract the feeder name from the ",Object(r.a)("inlineCode",{parentName:"li"},"Feeder Name")," attribute."),Object(r.a)("li",{parentName:"ol"},"Extract the substation name from the feeder name using the first match group from the regex ",Object(r.a)("inlineCode",{parentName:"li"},"^([A-Za-z]+)(((\\d+).*)|( [Ff]dr \\d+)|(OOS.)|(-.*))$"),"."),Object(r.a)("li",{parentName:"ol"},"Find the substation component based on the zone clone ID (defined in the data config), the name (if it ends with 'T' it will also search for 'TS' and 'TS22') and being in a visible world."),Object(r.a)("li",{parentName:"ol"},"Find the sub geographical region as the parent of the substation."),Object(r.a)("li",{parentName:"ol"},"Find the geographical region as the first item up the component hierarchy that is defined as a business root in the data config.")),Object(r.a)("p",null,"All classes configured as sites in the data config will have the following processing performed:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Remove the site component and create a Site object."),Object(r.a)("li",{parentName:"ol"},"Assign all child components to the Site object.")),Object(r.a)("h2",{id:"process-lv-meters"},"Process LV Meters"),Object(r.a)("p",null,"Creates meters and usage points for all meter records with transformers. Also validates the feeder attribute vs tracing from the DMS."),Object(r.a)("p",null,"We use the most common locality from the addresses of meters associated with a transformer as the transformer locality."),Object(r.a)("h2",{id:"process-hv-meters"},"Process HV Meters"),Object(r.a)("p",null,"Create meters for all records without transformers and associates them with the EnergyConsumer defined as the supply point using the\nGIS ID from the correlations created earlier."),Object(r.a)("h2",{id:"extract-operational-restrictions"},"Extract Operational Restrictions"),Object(r.a)("p",null,"Creates an operational restriction for all permits that match the following query (provided):"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"select\n    pac.PERMIT_REF AS CRO_REF,\n    pac.COMPONENT_ID,\n    pac.COMPONENT_DESCRIPTION as Description,\n    pmts.PERMIT_NAME as CRO_TYPE,\n    pmts.DISPLAYED_PERMIT_REF as CRO_PERMIT_REF,\n    pmts.CURRENT_STATE as CRO_STATE,\n    pmts.ISSUED_BY as CRO_Issued_By,\n    pmts.ISSUED_DATE as CRO_Issued_Date,\n    pmtxt3.TEXT as CRO_Details3,\n    pmtxt4.TEXT as CRO_Details4,\n    pmtxt5.TEXT as CRO_Details5\nfrom PERMIT_ATTACHED_COMPS pac\n    inner join PERMITS pmts ON pac.PERMIT_REF = pmts.PERMIT_REF\n    inner join operations ops ON pac.PERMIT_REF = ops.PERMIT_ID AND pac.COMPONENT_ID = ops.COMPONENT_ID\n    left join PERMIT_TEXT pmtxt3 ON pmts.PERMIT_REF = pmtxt3.PERMIT_REF AND pmtxt3.TEXT_INDEX = 3\n    left join PERMIT_TEXT pmtxt4 ON pmts.PERMIT_REF = pmtxt4.PERMIT_REF AND pmtxt4.TEXT_INDEX = 4\n    left join PERMIT_TEXT pmtxt5 ON pmts.PERMIT_REF = pmtxt5.PERMIT_REF AND pmtxt5.TEXT_INDEX = 5\nwhere pmts.PERMIT_NAME in('CRO', 'CRO_Inoperable', 'CRO_Operable') AND ops.CURRENT_STATE = 'Issued';\n")),Object(r.a)("h2",{id:"extract-geographical-information"},"Extract Geographical Information"),Object(r.a)("p",null,"Every component with Easting/Northing header values that are not integers, or with ",Object(r.a)("inlineCode",{parentName:"p"},"Latitude"),"/",Object(r.a)("inlineCode",{parentName:"p"},"Longitude")," attributes, will\nhave these values extracted as the geographic location of the component."),Object(r.a)("h2",{id:"clean-unwanted-network"},"Clean Unwanted Network"),Object(r.a)("p",null,"The network cleaner removes anything that does not belong to a valid world as specified in the data config. To be considered valid,\na component must satisfy one of the following:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Is displayed in a valid world."),Object(r.a)("li",{parentName:"ol"},"Is connected to something that is displayed in a valid world. This is traced, not just immediately connected."),Object(r.a)("li",{parentName:"ol"},"Belongs to the same site as something that is displayed or connected in a valid world.")),Object(r.a)("h2",{id:"fix-known-data-issues"},"Fix Known Data Issues"),Object(r.a)("p",null,"The following fixes will be made to the network."),Object(r.a)("p",null,"Removes DPA busbar nodes:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Processes all components with class 885."),Object(r.a)("li",{parentName:"ol"},"Remove each connected internal AcLineSegment."),Object(r.a)("li",{parentName:"ol"},"Remove the component.")),Object(r.a)("p",null,"Collapses regulators:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Processes all components with a class defined in the regulator data config."),Object(r.a)("li",{parentName:"ol"},"For each terminal, trace along all internal connections removing the internal connection and reconnecting any\nexternal connections to the terminal.\n")),Object(r.a)("p",null,"Fixes cross-wiring:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Processes all components with multiple terminals."),Object(r.a)("li",{parentName:"ol"},"Find all surrounding internal connections."),Object(r.a)("li",{parentName:"ol"},"Find all surrounding components on the other end of the internal connections. "),Object(r.a)("li",{parentName:"ol"},"Remove any internal connections connected directly between two surrounding components.\n")),Object(r.a)("p",null,"Rewires incorrect wiring:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Processes all components with three or more terminals."),Object(r.a)("li",{parentName:"ol"},"Find all connected internal connections, and the component connected to the other end."),Object(r.a)("li",{parentName:"ol"},"If there is at least two internal and at least one external connections, attempt to remove the internals,\nand reconnect the attached components."),Object(r.a)("li",{parentName:"ol"},"Rewiring will not occur if any of the connected components:",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Is a feeder start point."),Object(r.a)("li",{parentName:"ul"},"Has a latitude/longitude."),Object(r.a)("li",{parentName:"ul"},"Is a PowerTransformer."),Object(r.a)("li",{parentName:"ul"},"Is an EnergySource.")))),Object(r.a)("h2",{id:"collapse-network"},"Collapse Network"),Object(r.a)("p",null,"This process will replace fault indicators, removing any that are disconnected. The fault indicator will be\nplaced at the symbol centre associated with a terminal connected to the original disconnector."),Object(r.a)("p",null,"Perform the following for all visible components that are surrounded by internal connections:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Trace along the internal connections looking for external connections and visible disconnect points."),Object(r.a)("li",{parentName:"ol"},"Ensure all disconnect points are not EnergySources and are closed."),Object(r.a)("li",{parentName:"ol"},"Ensure there were no loops in the internal connections."),Object(r.a)("li",{parentName:"ol"},"Ensure no disconnect point:",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Is a feeder start point."),Object(r.a)("li",{parentName:"ul"},"Has a latitude/longitude."),Object(r.a)("li",{parentName:"ul"},"Is a PowerTransformer."),Object(r.a)("li",{parentName:"ul"},"Is an EnergySource."))),Object(r.a)("li",{parentName:"ol"},"Remove all disconnect points and internal connections, and reconnect any external connections. ")),Object(r.a)("h2",{id:"interpolate-geographical-information"},"Interpolate Geographical Information"),Object(r.a)("p",null,"Tries to fill in any missing latitude/longitudes using tracing to nearby components, or spreading junctions\nequally along straight line segments between known points."),Object(r.a)("h2",{id:"save-system-names"},"Save System Names"),Object(r.a)("p",null,"Mapped GIS IDs are saved as names against added objects."))}p.isMDXComponent=!0}}]);