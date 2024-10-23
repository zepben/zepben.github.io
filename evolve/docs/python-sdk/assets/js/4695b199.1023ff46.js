"use strict";(self.webpackChunkevolve_sdk_python_doco=self.webpackChunkevolve_sdk_python_doco||[]).push([[3525],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(a),b=r,u=c["".concat(d,".").concat(b)]||c[b]||h[b]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},85162:function(e,t,a){a(67294)},65488:function(e,t,a){a(67294),a(72389)},38646:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=(a(65488),a(85162),["components"]),s={id:"sdk-ewb-file-paths",title:"EWB Database Paths"},d=void 0,l={unversionedId:"sdk-ewb-file-paths",id:"version-0.41.1/sdk-ewb-file-paths",title:"EWB Database Paths",description:'The Energy Workbench Server(EWB) uses a defined directory structure and naming convention for locating the various databases it is requested to load data from within its "data path".',source:"@site/versioned_docs/version-0.41.1/ewb_file_paths.mdx",sourceDirName:".",slug:"/sdk-ewb-file-paths",permalink:"/evolve/docs/python-sdk/0.41.1/sdk-ewb-file-paths",draft:!1,tags:[],version:"0.41.1",frontMatter:{id:"sdk-ewb-file-paths",title:"EWB Database Paths"},sidebar:"someSidebar",previous:{title:"Protection Relays",permalink:"/evolve/docs/python-sdk/0.41.1/sdk-protection"}},p={},c=[{value:"Initializing <code>EwbDataFilePaths</code>",id:"initializing-ewbdatafilepaths",level:3},{value:"Retrieving Database File Paths",id:"retrieving-database-file-paths",level:3},{value:"Searching for Databases",id:"searching-for-databases",level:3}],h={toc:c},b="wrapper";function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(b,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The Energy Workbench Server(EWB) uses a defined directory structure and naming convention for locating the various databases it is requested to load data from within its "data path".\n',(0,i.kt)("inlineCode",{parentName:"p"},"EwbDataFilePaths")," is a class for working with the file locations used by EWB."),(0,i.kt)("p",null,"The basic structure for date based database files is ",(0,i.kt)("inlineCode",{parentName:"p"},"<base_dir>/<model_date>/<model_date>-<database_type>.sqlite"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/sample/ewb/ewb_data/4444-05-06/4444-05-06-customer.sqlite\n")),(0,i.kt)("p",null,"The basic structure for static database files is ",(0,i.kt)("inlineCode",{parentName:"p"},"<base_dir>/<database_type>.sqlite"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/sample/ewb/ewb_data/load-aggregator-mbd.sqlite\n")),(0,i.kt)("h3",{id:"initializing-ewbdatafilepaths"},"Initializing ",(0,i.kt)("inlineCode",{parentName:"h3"},"EwbDataFilePaths")),(0,i.kt)("p",null,"An instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"EwbDataFilePaths"),' represents a single EWB "data path". This data path is provided to the constructor via ',(0,i.kt)("inlineCode",{parentName:"p"},"base_dir"),". If the directory provided via ",(0,i.kt)("inlineCode",{parentName:"p"},"base_dir"),"\ndoes not exist, ",(0,i.kt)("inlineCode",{parentName:"p"},"EwbDataFilePaths")," can create it if ",(0,i.kt)("inlineCode",{parentName:"p"},"create_path")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," (Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import EwbDataFilePaths\nfrom pathlib import Path\n\ndata_path = Path("/path/to/ewb_data/")\ndatabase_location = EwbDataFilePaths(data_path, create_path=False)\n\ndata_path = Path("/path/to/second_set/")\ndatabase_location = EwbDataFilePaths(data_path, create_path=True)\n')),(0,i.kt)("h3",{id:"retrieving-database-file-paths"},"Retrieving Database File Paths"),(0,i.kt)("p",null,"EwbDataFilePaths provides methods to generate file paths for each type of database used by EWB. Date based databases require a ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," to be provided.\nNote: ",(0,i.kt)("inlineCode",{parentName:"p"},"EwbDataFilePaths")," will return the expected path for the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"database_type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," regardless of whether it exists or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import EwbDataFilePaths\nfrom pathlib import Path\nfrom datetime import date\n\ndata_path = Path("/path/to/ewb_data/")\newb_data = EwbDataFilePaths(data_path)\n\nnew_date = Date(2024, 8, 3)\nexpected_path_to_network_database = ewb_data.network_model(new_date)\nexpected_path_to_diagram_database = ewb_data.diagram(new_date)\n\nexpected_path_to_weather_reading_db = ewb_data.weather_reading()\n\nsecond_date = Date(2024, 11, 12)\nsecond_network_database_path = ewb_data.network_model(second_date)\n\n')),(0,i.kt)("h3",{id:"searching-for-databases"},"Searching for Databases"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EwbDataFilePaths")," contains search functionality to locate existing databases on disk."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from zepben.evolve import EwbDataFilePaths\nfrom pathlib import Path\nfrom datetime import date\n\ndata_path = Path("/path/to/ewb_data/")\newb_data = EwbDataFilePaths(data_path)\n\n# List all the dates for which exist network databases in the data path\nlist_of_available_dates = ewb_data.get_network_model_databases()\n\n# Find the first date for which exists a customer database before 2011-09-10\nclosest_date_before = ewb_data.find_closest(Database.CUSTOMER, target_date=Date(2011, 9, 10))\n\n')))}u.isMDXComponent=!0}}]);