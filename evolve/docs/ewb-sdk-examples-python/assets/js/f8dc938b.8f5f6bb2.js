"use strict";(self.webpackChunkewb_sdk_examples_python_doco=self.webpackChunkewb_sdk_examples_python_doco||[]).push([[665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},2676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));n(5488),n(5162);const r={id:"examples-creating-and-uploading-studies",title:"Creating and Uploading Studies"},l=void 0,i={unversionedId:"examples-creating-and-uploading-studies",id:"examples-creating-and-uploading-studies",title:"Creating and Uploading Studies",description:"A feature of the Evolve App Server (EAS) allows the users to create and visualize studies. A study is a geographical visualisation of data that is drawn on top of the network.",source:"@site/docs/creating_and_uploading_studies.mdx",sourceDirName:".",slug:"/examples-creating-and-uploading-studies",permalink:"/evolve/docs/ewb-sdk-examples-python/next/examples-creating-and-uploading-studies",draft:!1,tags:[],version:"current",frontMatter:{id:"examples-creating-and-uploading-studies",title:"Creating and Uploading Studies"},sidebar:"someSidebar",previous:{title:"Fetching Network Model",permalink:"/evolve/docs/ewb-sdk-examples-python/next/examples-fetching-network-model"},next:{title:"Downstream and Upstream Tracing Use Cases",permalink:"/evolve/docs/ewb-sdk-examples-python/next/examples-downstream-and-upstream-trace"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Connecting to the EWB gRPC Service",id:"connecting-to-the-ewb-grpc-service",level:2},{value:"Connecting to the Evolve App Server",id:"connecting-to-the-evolve-app-server",level:2},{value:"Create Results for Energy Consumers Density Example",id:"create-results-for-energy-consumers-density-example",level:2},{value:"Create Results for LV Lines Example",id:"create-results-for-lv-lines-example",level:2},{value:"Create and Upload Studies",id:"create-and-upload-studies",level:2},{value:"Output (Studies)",id:"output-studies",level:2},{value:"Energy Consumer Density Study on EAS",id:"energy-consumer-density-study-on-eas",level:3},{value:"LV Lines Study on EAS",id:"lv-lines-study-on-eas",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A feature of the Evolve App Server (EAS) allows the users to create and visualize studies. A study is a geographical visualisation of data that is drawn on top of the network.\nThis data can typically be the result of a load flow simulation, external input file containing data related to the network or even the information about the network (such as length of lines, counts of objects, etc.).\nEach study can contain multiple results: different visualisations that the user may switch between.\nFor example, the first result may display per-unit voltage data from a load flow result, while the second study can provide a heatmap of the energy consumer density of a specified feeder.\nIn this tutorial, we will create two studies: one makes a heatmap of energy consumers and the other highlights LV lines and displays their length."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Both Evolve App Server and Energy Workbench are required for creating and uploading studies.\nHence, you should ensure that both the servers are running for this example. Guidelines for connecting to an Evolve App Server will be provided in this tutorial."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Ensure that you have installed the required dependencies and imported the libraries. For this example, we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"geojson"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"zepben.eas")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"zepben.evolve")," libraries.\nInformation about connecting to the Energy Workbench Server can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/evolve/docs/ewb-sdk-examples-python/next/"},"Connecting to the EWB Server")," tutorial."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import json\nfrom geojson import Feature, LineString, FeatureCollection, Point\nfrom zepben.eas import Study, Result, GeoJsonOverlay, EasClient\nfrom zepben.evolve import connect_with_token, NetworkConsumerClient, AcLineSegment, EnergyConsumer\nfrom zepben.protobuf.nc.nc_requests_pb2 import INCLUDE_ENERGIZED_LV_FEEDERS\n")),(0,o.kt)("h2",{id:"connecting-to-the-ewb-grpc-service"},"Connecting to the EWB gRPC Service"),(0,o.kt)("p",null,"Here, we connect to the EWB Server, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"connect_with_token")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("../config.json") as f:\n    c = json.loads(f.read())\n\nchannel = connect_with_token(host=c["host"], access_token=c["access_token"], rpc_port=c["rpc_port"])\n\n')),(0,o.kt)("p",null,"You will need to replace the values in the config.json file with the appropriate configuration for your environment. The config file should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "EWB Hostname",\n  "access_token": "your_access_token",\n  "rpc_port": 1234\n}\n')),(0,o.kt)("p",null,"More information about connecting to the EWB Server using different methods can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/evolve/docs/ewb-sdk-examples-python/next/"},"Connecting to the EWB Server")," tutorial."),(0,o.kt)("p",null,"You will need to specify the mRID of the feeder that you want to fetch, ensuring that the feeder with the specified mRID exists.\nThen, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkConsumerClient")," and retrieve the network service.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"get_equipment_container")," method is used to fetch information about the specified feeder (feeder_mrid).\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"INCLUDE_ENERGIZED_LV_FEEDERS")," flag indicates that the client should include information about energized LV (Low Voltage) feeders in the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'feeder_mrid = "LV007"\ngrpc_client = NetworkConsumerClient(grpc_channel)\nawait grpc_client.get_equipment_container(feeder_mrid, include_energized_containers=INCLUDE_ENERGIZED_LV_FEEDERS)\nnetwork = grpc_client.service\n')),(0,o.kt)("h2",{id:"connecting-to-the-evolve-app-server"},"Connecting to the Evolve App Server"),(0,o.kt)("p",null,"We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"EasClient")," to connect to the Evolve App Server. ",(0,o.kt)("inlineCode",{parentName:"p"},"EasClient")," is a class used to represent a client to the Evolve App Server, with methods that represent requests to its API.\nFor the examples in this tutorial, we will use the following code to connect to the EAS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'eas_client = EasClient(host=c["host"], port=c["rpc_port"], protocol="https", access_token=c["access_token"])\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"host"),' - The domain of the Evolve App Server, e.g. "evolve.local"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"port")," - The port on which to make requests to the Evolve App Server, e.g. 7624"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"access_token")," - The personal access token you generated from the UI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"protocol")," - The protocol to use for connecting to EAS. Either http or https.")),(0,o.kt)("p",null,"Note: Ensure that the values for host, port, and token are correctly provided in the config.json file."),(0,o.kt)("h2",{id:"create-results-for-energy-consumers-density-example"},"Create Results for Energy Consumers Density Example"),(0,o.kt)("p",null,"Here, we will create a heatmap of the EnergyConsumer density for a specified feeder.\nFirst, we will iterate through each ",(0,o.kt)("inlineCode",{parentName:"p"},"EnergyConsumer")," object in the network and check if the ",(0,o.kt)("inlineCode",{parentName:"p"},"EnergyConsumer")," has locations associated with it.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"EnergyConsumer"),"s have locations, we will create GeoJSON features for those ",(0,o.kt)("inlineCode",{parentName:"p"},"EnergyConsumer"),"s with their mRID and ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," geometry based on the extracted coordinates.\nThe created GeoJSON feature will be added to the list ",(0,o.kt)("inlineCode",{parentName:"p"},"ec_geojson"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ec_geojson = []\n    for ec in network.objects(EnergyConsumer):\n        if ec.location is not None:\n            coord = list(ec.location.points)[0]\n            ec_feature = Feature(\n                id=ec.mrid,\n                geometry=Point((coord.x_position, coord.y_position))\n            )\n            ec_geojson.append(ec_feature)\n")),(0,o.kt)("p",null,"Now, we will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Result"),' object named "Energy Consumers" with a GeoJSON overlay. The GeoJSON overlay includes the collected GeoJSON features in a ',(0,o.kt)("inlineCode",{parentName:"p"},"FeatureCollection"),' and a style named "ec-heatmap".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ec_result = Result(\n        name="Energy Consumers",\n        geo_json_overlay=GeoJsonOverlay(\n            data=FeatureCollection(ec_geojson),\n            styles=["ec-heatmap"]  # Select which Mapbox layers to show for this result\n        )\n    )\n')),(0,o.kt)("p",null,'The style "ec_heatmap" is the Mapbox layer to be shown for this result, indicating how the Energy Consumer Density should be styled in the visualization.\nThe following style is used for "ec_heatmap". Note that you will need to copy and paste the below code into a json file and then specify the path of this json file later in the code when uploading the study.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "ec-heatmap",\n    "type": "heatmap",\n    "paint": {\n      "heatmap-opacity": 0.5\n    },\n    "metadata": {\n      "zb:legend": {\n        "label": "Energy Consumer Density"\n      }\n    }\n  }\n')),(0,o.kt)("h2",{id:"create-results-for-lv-lines-example"},"Create Results for LV Lines Example"),(0,o.kt)("p",null,"This example will highlight the low voltage (LV) lines of a specified feeder and will display the length of each line.\nFirst, we will iterate through each ",(0,o.kt)("inlineCode",{parentName:"p"},"AcLineSegment")," object in the network and find the LV lines that have locations. For this example, we identify the LV lines based on the base voltage of the line (i.e., lines with voltages less than 1000 volts).\nWe then create GeoJSON features for those LV lines with their mRID.\nThe geometry is a ",(0,o.kt)("inlineCode",{parentName:"p"},"LineString")," constructed from the line's location points, and additional line length property is included to display the length of each LV line.\nThe created GeoJSON feature is added to the list ",(0,o.kt)("inlineCode",{parentName:"p"},"lv_lines_geojson"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'lv_lines_geojson = []\n    for line in network.objects(AcLineSegment):\n        if line.base_voltage_value <= 1000 and line.location is not None:\n            line_feature = Feature(\n                id=line.mrid,\n                geometry=LineString([(p.x_position, p.y_position) for p in line.location.points]),\n                properties={\n                    "length": line.length  # Numeric and textual data may be added here. It will be displayed and formatted according to the style(s) used.\n                }\n            )\n            lv_lines_geojson.append(line_feature)\n')),(0,o.kt)("p",null,"Now, we will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Result"),' object named "LV Lines" with a GeoJSON overlay. The GeoJSON overlay includes the collected GeoJSON features in a FeatureCollection.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'lv_lines_result = Result(\n        name="LV Lines",\n        geo_json_overlay=GeoJsonOverlay(\n            data=FeatureCollection(lv_lines_geojson),\n            styles=["lv-lines", "lv-lengths"]  # Select which Mapbox layers to show for this result\n        )\n    )\n')),(0,o.kt)("p",null,'The styles specified by "lv-lines" and "lv-lengths" are Mapbox layers to be shown for this result, indicating how the LV lines should be styled in the visualization.\nThe following styles are used for "lv_lines" and "lv_lengths". Note that you will need to copy and paste the below code into a json file and then specify the path of this json file later in the code when uploading the study.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "lv-lines",\n    "type": "line",\n    "paint": {\n      "line-color": "orange",\n      "line-width": ["log2", ["max", ["get", "length"], 1]],\n      "line-opacity": 0.5\n    },\n    "metadata": {\n      "zb:legend": {\n        "label": "LV Line",\n        "states": [\n          {\n            "label": "1 m",\n            "properties": {\n              "length": 1\n            }\n          },\n          {\n            "label": "10 m",\n            "properties": {\n              "length": 10\n            }\n          },\n          {\n            "label": "100 m",\n            "properties": {\n              "length": 100\n            }\n          },\n          {\n            "label": "1000 m",\n            "properties": {\n              "length": 1000\n            }\n          }\n        ]\n      }\n    }\n  },\n  {\n    "id": "lv-lengths",\n    "type": "symbol",\n    "layout": {\n      "symbol-placement": "line",\n      "text-field": ["concat", ["round", ["get", "length"]], " m"],\n      "text-font": ["Arial Unicode MS Regular"],\n      "text-size": 15\n    },\n    "paint": {\n      "text-color": "black",\n      "text-halo-blur": 5,\n      "text-halo-width": 5,\n      "text-halo-color": "white"\n    }\n  }\n')),(0,o.kt)("h2",{id:"create-and-upload-studies"},"Create and Upload Studies"),(0,o.kt)("p",null,"Once you have created the Results for the studies, the next step is to create and upload the study on EAS.\nA data class (",(0,o.kt)("inlineCode",{parentName:"p"},"Study"),") represents an Evolve App Server study. The user need to provide information such as name, descriptions, tags, results, and styles to successfully create a study."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'study = Study(\n        name="Example Study",\n        description="Example study with two results.",\n        tags=["example"],\n        results=[ec_result, lv_lines_result],\n        styles=json.load(open("style.json", "r"))\n    )\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"INPUT:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," - name of the study being created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"description")," - short description of the study."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tags")," - unique identification of the study to make it easier to search for studies from a large list."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"results")," - data classes representing an Evolve App Server study results."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"styles"),' - This is the "layers" property of a Mapbox GL JS style. Layers specify how features are rendered. For more information about layers, read ',(0,o.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/"},"https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/"),".")),(0,o.kt)("p",null,"Note: Each layer may have an entry in the legend via the metadata",'["zb:legend"]'," field."),(0,o.kt)("p",null,"The final step after creating the study is to upload it on the EAS and close the EAS client, as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"await eas_client.async_upload_study(study)\nawait eas_client.aclose()\n")),(0,o.kt)("h2",{id:"output-studies"},"Output (Studies)"),(0,o.kt)("h3",{id:"energy-consumer-density-study-on-eas"},"Energy Consumer Density Study on EAS"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5944).Z,width:"1831",height:"902"})),(0,o.kt)("h3",{id:"lv-lines-study-on-eas"},"LV Lines Study on EAS"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1209).Z,width:"1817",height:"891"})))}u.isMDXComponent=!0},5944:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/studies_ex1-9564bc6acfbd0aafec56de0ae88965a4.png"},1209:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/studies_ex2-5a78f0127d85b21a9d20b72120ec3268.png"}}]);