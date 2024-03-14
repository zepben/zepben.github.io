(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(203)),i={id:"app-options",title:"App Options",slug:"/app-options",hide_table_of_contents:!0},c={unversionedId:"app-options",id:"version-5.1.0/app-options",isDocsHomePage:!1,title:"App Options",description:"This page provides further details on configuring the options available in the APP_OPTIONS database table.",source:"@site/versioned_docs\\version-5.1.0\\app-options.mdx",slug:"/app-options",permalink:"/ednar/docs/admin/app-options",editUrl:"https://github.com/zepben/versioned_docs/version-5.1.0/app-options.mdx",version:"5.1.0",sidebar:"version-5.1.0/sidebar",previous:{title:"Target Groups",permalink:"/ednar/docs/admin/target-groups"},next:{title:"Exporting SQL Server config",permalink:"/ednar/docs/admin/export-sql-server-config"}},o=[{value:"Setting and Adjusting App Options",id:"setting-and-adjusting-app-options",children:[]}],b={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"This page provides further details on configuring the options available in the ",Object(l.a)("inlineCode",{parentName:"p"},"APP_OPTIONS")," database table."),Object(l.a)("h2",{id:"setting-and-adjusting-app-options"},"Setting and Adjusting App Options"),Object(l.a)("p",null,"As the App Options are located in a database table, editing them is more complicated than other admin configuration. If you have a database GUI tool, you may be able to edit the table directly, otherwise you will need to use SQL statements."),Object(l.a)("p",null,"To set the initial value for an app option, you will need to insert both the option and the value into the table. The following SQL can be used:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"Oracle:\nINSERT INTO app_options (name, value)\nSELECT '<option name>', '<value>' FROM dual;\n\nMS SQL Server:\nINSERT INTO app_options (name, value)\nSELECT '<option name>', '<value>';\n")),Object(l.a)("p",null,"To update an existing option value, you can use this SQL:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"Oracle and MS SQL Server:\nUPDATE app_options SET value = '<value>' WHERE name = '<option name>';\n")),Object(l.a)("h4",{id:"available-app-option-names"},"Available App Option Names"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CLIENT_INACTIVITY_TIMEOUT")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time in seconds before the user is forcecully exited from a NAR. Any unsaved changed will be lost when this occurs."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"3600 secs")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"EDNAR_URL")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The base URL where the EDNAR application is hosted. This will be used in email templates."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NAR_LOCATION_MAX_LENGTH")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of characters for the 'Location' field in the NAR's Job-Title"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"30")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NAR_LOCK_DURATION")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time in seconds before a NAR lock expires automatically."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"600 secs")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NAR_PRIMARY_EQUIPMENT_CONTAINER_MAX_LENGTH")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of characters for the 'Primary Equipment Container' field in the NAR's Job-Title."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NAR_WORK_TYPE_MAX_LENGTH")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of characters for the 'Work Type' field in the NAR's Job-Title."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"30")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NOTIFICATION_FROM_ADDRESS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value that will be used as the 'Sender (From)' field in the email header for EDNAR system notifications."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"noreply@ednar.invalid"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NOTIFICATION_SMS_DOMAIN")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"SMS domain to be used for sending SMS notifications."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"INVALIDATED_SNAPSHOT_CHECK")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value that determines whether the client should check for invalidated snapshots."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"EXTERNAL_MAP_ASSET_VIEW_URL")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Url template for viewing assets on an external map application. ",Object(l.a)("br",null)," ",Object(l.a)("br",null)," The following supported template tags will be substituted with appropriate values on the client when viewing an asset on an external map application: ",Object(l.a)("inlineCode",{parentName:"td"},"<X>, <Y>, <Z>")," : Longitude, Latitude and Elevation. ",Object(l.a)("br",null)," ",Object(l.a)("br",null)," For eg: For an arbitrary asset, the following template url ",Object(l.a)("inlineCode",{parentName:"td"},"https://address/?x=<X>&y=<Y>&z=<Z>"),"  will be formatted as ",Object(l.a)("inlineCode",{parentName:"td"},"http://address/?x=10&y=20&z=2")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"EXTERNAL_MAP_OUTAGE_VIEW_URL")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Url template for viewing outage on an external application. ",Object(l.a)("br",null)," ",Object(l.a)("br",null)," The following supported template tag will be substituted with an appropriate value on the client when viewing an outage on an external application: ",Object(l.a)("inlineCode",{parentName:"td"},"<PON_ID>"),": PoN Project ID. ",Object(l.a)("br",null)," ",Object(l.a)("br",null)," For eg: For an arbitrary interruption, the following template url ",Object(l.a)("inlineCode",{parentName:"td"},"https://address?outage=<PON_ID>")," will be formatted as ",Object(l.a)("inlineCode",{parentName:"td"},"http://address?outage=10")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"PON_PRINT_DATE_OFFSET")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of business days that must be used as an offset (# days before the outage date) for the default print date of a PoN Project"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"8")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"LONG_OUTAGE_THRESHOLD_HOURS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of hours for a customer notification task duration after which the user is prompted for confirmation"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"8")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"HANDCARD_THRESHOLD_DAYS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of business days before a customer notification task outage after which the delivery method must be Handcard."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"8")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"EIC_THRESHOLD_DAYS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of business days before a customer notification task outage after which the delivery method must be EIC"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NAR_REPORT_PERMITS_IS_AVAILABLE")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value that determines whether the Permits option is available for NAR Reports in the UI"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NETWORK_MAPS_DEFAULT_LAT")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Double value that specifies the default network map location latitude in the UI"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.0")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NETWORK_MAPS_DEFAULT_LNG")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Double value that specifies the default network map location longitude in the UI"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.0")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NETWORK_MAPS_DEFAULT_ZOOM")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer value that specifies the default network map zoom level in the UI"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"NETWORK_MAP_SOURCES")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Comma-separated array of string values that specifies the available network maps in EDNAR. Available options are ",Object(l.a)("inlineCode",{parentName:"td"},"EWB")," for the EDNAR native map and ",Object(l.a)("inlineCode",{parentName:"td"},"PEEK")," for the Peek DMS Diagram viewer. The first item in the array will be the default map that opens when selecting assets from the NAR."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"ASSET_STRING_FORMAT")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"String value that specifies the format of assets representation when typing or select the assets in the UI e.g want to change the order of representation or change the separator or add some extra string"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"({{#equipmentContainers}}{{name}}{{#seperator}}, {{/seperator}}{{/equipmentContainers}}) {{#voltage}} - {{.}} {{/voltage}} {{#assetName}} - {{.}} {{/assetName}} {{#poiText}}{{name}}{{#seperator}}, {{/seperator}}{{/poiText}} {{#description}} - {{.}} {{/description}}")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"POLE_NAME_STRING_FORMAT")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"String value that specifies the format of pole assets in the UI"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"{{description}} ","[{{name}}]")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"TOTAL_NMI_COUNT")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer value of the total customers on the network. If this app option is set to anything other than 0, a SAIDI Minutes estimate will be displayed for customer notification tasks"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"MAPBOX_API_KEY")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"String value of the Mapbox API token that EDNAR will use for its geo maps. To generate a free token, you can visit ",Object(l.a)("a",Object(n.a)({parentName:"td"},{href:"https://account.mapbox.com/access-tokens/"}),"https://account.mapbox.com/access-tokens/"),', create an account and assign all the public scopes to the token. The token string should start with "pk".'),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"SWITCHING_SCHEDULE_QUICK_VIEW_INCLUDE_PERMITS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),'Boolean value that determines if the switching schedule "quickview" will include permits'),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"ENABLE_SYNTHETIC_ASSET")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value that enables the client to add synthetic assets to NARs via freetext entry"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"ASSET_SEARCH_AVAILABLE")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value that enables users to search EWB for assets within Access Authorities."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CUSTOMER_OUTAGE_NMI_PROPERTIES")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Comma-separated list of property names that contain NMIs in the Customer Outage Overlay payloads"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"nmi"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CLASH_DETECTION_THRESHOLD")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),'Number of seconds since running clash detection on a NAR before it is considered "stale" and must be run again.'),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"172800")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"STRICT_CLASH_DETECTION")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value to enable/disable strict clash detection. Enabling this will enforce that clash detection must be run at least once within the ",Object(l.a)("inlineCode",{parentName:"td"},"CLASH_DETECTION_THRESHOLD")," before each NAR transition, and must be run again after any changes to the NAR."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"true"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CUSTOM_MAP_SYMBOLS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Comma-separated list of symbol names that can be used within the Custom Map layer styling. Each name should match a .svg file located in the ",Object(l.a)("inlineCode",{parentName:"td"},"/images/map/custom-symbols")," directory in the EDNAR Web Client, excluding the file extension."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"INCLUDE_SAME_DAY_CLASHES")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value that determines whether NARs that have start or end times on the same day(s), but do not directly overlap (clash), should be considered as clashed NARs in the NAR Clash Detection"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CLASH_DETECTION_DEFAULT_RANGE")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default number of days in the future and the past that will be used on the NAR clash detection."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"5")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"ISOLATION_TRACE_MAX_SWITCHES")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max number of switches that will be included when performing an isolation trace"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"7")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"DMS_AOR_DOC_REF_SUFFIX")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Suffix to be added to the EDNAR-created document reference for AOR document creation via the CreateOperation call"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CSV_EXPORT_MAX_ROWS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of rows (results) that will be included in the CSV Search Export"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CSV_EXPORT_MAX_COLUMNS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of search columns that can be included in the CSV Search Export"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CSV_EXPORT_MAX_COLUMN_ROW_PRODUCT")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of total cells (rows x columns) that will be included in the CSV Search Export"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CSV_EXPORT_FAIL_IF_MAX_EXCEEDED")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value that determines whether a CSV export request will fail when any of the above CSV MAX app option limits are exceeded. If set to false, the CSV export will be truncated to fit within the set limits."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"UPDATE_JOB_QUESTIONS_AFTER_DRAFT")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value to enable whether NARs in progress (e.g. post-Draft state) have all mandatory job type NAR Summary questions added to them and enforced."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"DISABLE_CUSTOMER_SELECTION_FROM_MAP")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value enabling/disabling the use of Polygon and individual customer selection from the EDNAR map from custom and customer outage overlay layers"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"DMS_PROHIBITED_CHARACTERS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of text characters that the will cause any DMS job creation to be rejected. Including these characters on a NAR will cause it to become invalid."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"AUTOFILL_FROM_ACCESS_REASON")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value that determines whether the Work Title and Work To Be Done fields are automatically populated when an access reason is selected from the New Request modal"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"COMBINE_CUSTOM_MAP_TILE_REQUESTS")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean value that enables the combining of multiple individual custom map tile requests from the map into one single request to the external system."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CLASH_DETECTION_USING_GENERATOR_OPTION")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables clash detection based on the selected generator option and the NAR dates."),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"CLASH_DETECTION_USING_NETWORK_OPERATOR")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables clash detection based on the selected Network Operator and the NAR dates"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))))}d.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,s=p["".concat(i,".").concat(m)]||p[m]||O[m]||l;return a?r.a.createElement(s,c({ref:t},b,{components:a})):r.a.createElement(s,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);