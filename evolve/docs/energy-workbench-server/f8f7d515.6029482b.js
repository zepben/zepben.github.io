(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return O}));var r=a(3),b=a(7),n=(a(0),a(167)),c={id:"routes",title:"Routes"},i={unversionedId:"routes",id:"version-2.8.0/routes",isDocsHomePage:!1,title:"Routes",description:"API Routes",source:"@site/versioned_docs\\version-2.8.0\\routes.md",slug:"/routes",permalink:"/evolve/docs/energy-workbench-server/2.8.0/routes",version:"2.8.0",sidebar:"version-2.8.0/sidebar",previous:{title:"Keep Level Specification",permalink:"/evolve/docs/energy-workbench-server/2.8.0/keep-level-spec"},next:{title:"API",permalink:"/evolve/docs/energy-workbench-server/2.8.0/api"}},l=[{value:"API Routes",id:"api-routes",children:[]},{value:"Static Asset Routes",id:"static-asset-routes",children:[]}],p={toc:l};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"api-routes"},"API Routes"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Path"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/api/v1/max-demand/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the daily profiles on the maximum demand days for a single id.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/api/v1/max-demand"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the daily profiles on the maximum demand days for multiple ids sent as a JSON payload.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/api/v1/max-demand/combine"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the daily profiles on the maximum demand days when combining multiple ids sent as a JSON payload.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/api/v1/min-demand/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the daily profiles on the minimum demand days for a single id.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/api/v1/range/:id/from-date/:fromDate! !/to-date/:toDate"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the daily profiles in the date range for a single id.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/api/v1/weather/:id/season/:season/day! !/:day/temperature/:temperature/variance/:variance"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the daily profiles matching certain weather criteria for a single id.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/api/v1/find-names/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED: use /ewb/network/api/v1/find/:id instead.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/api/v1/cached/:cacheKey"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Retrieve a cached result from a previous API call. This is used by the GIS integration.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/store/api/v1/:id/key/:key/value/:value"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the value from the key store for a key. This is used by the DMS integration.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PUT"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/store/api/v1/:id/key/:key/value/:value"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Store a value in the key store against a key. This is used by the DMS integration.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"PUT"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/store/api/v1/:id/key/:key"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Store a value from the body in the key store against a key. This is used by the DMS integration.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/store/api/v1/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get all values from the key store for the user. This is used by the DMS integration.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DELETE"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/store/api/v1/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Remove the user from the key store. This is used by the DMS integration.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DELETE"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/store/api/v1/:id/key/:key"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Remove a key from the key store. This is used by the DMS integration.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/attached-load-points/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the details of the attached load points for a single supply point.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/attached-load-points/"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the details of the attached load points for multiple supply points sent as a JSON payload.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/feeder-assets/feeder/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get all of the assets that belong to the specified feeder.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/feeder-assets/zone/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get all of the assets that belong all feeders under the specified zone.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/feeder-assets/region/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get all of the assets that belong all feeders under the specified region.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/feeder-assets/business/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get all of the assets that belong all feeders under the specified business.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/hierarchy"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the network hierarchy of businesses, regions, zones and feeders.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/system-tags"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the list of available system tags.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/assets/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the details of the specified asset.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/cable-types"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the details of all cable types.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/find/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Perform an asset search for the specified identifier. This can be a name, id or load id.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/zone-polygon/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the polygon that encapsulates all of the assets on feeders under the specified zone.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/graphics/api/v1/asset/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the schematic graphics for the specified asset.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/graphics/api/v1/geo/asset/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the geographic location as a schematic graphic for the specified asset.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/graphics/api/v1/asset"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the schematic graphics for multiple assets sent as a JSON payload.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/graphics/api/v1/geo/asset"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the geographic location as a schematic graphic for multiple assets sent as a JSON payload.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/graphics/api/v1/geo-json/asset/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the GEO-JSON representing the specified asset.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/graphics/api/v1/geo-json/asset"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the GEO-JSON representing multiple assets sent as a JSON payload.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/graphics/api/v1/view/:view"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the schematic graphics for all assets in the specified view.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/graphics/api/v1/mvt/geo-view/:z/:x/:y"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the Mapbox Vector Tile for the specified tile.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/weather/api/v1/readings/:weatherStationId/from-date/:fromDate! !/to-date/:toDate"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the weather readings for the specified weather station in the requested date range.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/weather/api/v1/stats/:weatherStationId/from-date/:fromDate! !/to-date/:toDate"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the weather stats (min, max etc) for the specified weather station in the requested date range.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/weather/api/v1/stations"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the list of all weather stations.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/weather/api/v1/stations/:weatherStationId"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the details of the specified wetather station.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/weather/api/v1/find-nearest-station/lon/:lon/lat/:lat"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Find the weather station that is closest to a point.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/weather/api/v1/find-nearest-station"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Find the weather stations that are closest to multiple points sent as a JSON payload.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/geo-view/api/v1/config"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the geo view configuration parameters.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/geo-view/api/v1/lat-lon/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get the lat/lon of a specified asset.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/cable-types"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED: use /ewb/network/api/v1/cable-types instead.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/graphics/geo-json/view/:view"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"POST"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/graphics/geo-json/view/:view"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/graphics/geo-json/view/:view/asset/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED: use /ewb/network/graphics/api/v1/geo-json/asset/:id instead.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/graphics/geo-json/view/:view/:z/:x/:y"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/graphics/view/:view"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED: use /ewb/network/graphics/api/v1/view/:view instead.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/find/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED: use /ewb/network/api/v1/find/:id instead.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/graphics/mvt/view/:view/:z/:x/:y"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED: use /ewb/network/graphics/api/v1/mvt/geo-view/:z/:x/:y instead.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/prototype/zone-polygon/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"DEPRECATED: use /ewb/network/api/v1/zone-polygon/:id instead.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/analysis/api/v1/summary"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Generate an overview of the loading of transformers.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/analysis/api/v1/ev/:chargingBlockKw"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Generate an overview of the capacity of transformers to host ev charging stations.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/trace/api/v1/downstream/tree/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get a tree representation of the assets downstream from the specified asset.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/trace/api/v1/upstream/asset/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get a list of assets of a certain type immediately upstream from the specified asset.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GET"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/network/api/v1/assets/by-location/:id"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Get a list of assets that are associated with a specific location")))),Object(n.b)("h2",{id:"static-asset-routes"},"Static Asset Routes"),Object(n.b)("p",null,"The static asset routes all serve files from the webroot."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Path"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/js/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/css/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/fonts/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/date/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/images/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/max-demand/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/min-demand/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/three-d/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/weather/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/unadorned$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/unadorned/")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/unadorned/js/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/unadorned/css/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/unadorned/fonts/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/unadorned/images/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/combined$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/combined/")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/combined/js/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/combined/css/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/combined/fonts/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/compare$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/compare/")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/compare/js/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/compare/css/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/profiles/compare/fonts/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/schematic$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/schematic/")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/schematic/js/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/schematic/css/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/schematic/static-views/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/geo-view$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/geo-view/")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/geo-view/js/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/prototype/diagram/geo-view/css/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/analysis$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/analysis/")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/analysis/js/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/analysis/css/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/analysis/fonts/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/dashboard$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/dashboard/")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/dashboard/js/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/energy/dashboard/css/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/images/*")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/ewb/js/*")))))}O.isMDXComponent=!0},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),O=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=O(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),o=O(a),d=r,s=o["".concat(c,".").concat(d)]||o[d]||j[d]||n;return a?b.a.createElement(s,i(i({ref:t},p),{},{components:a})):b.a.createElement(s,i({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<n;p++)c[p]=a[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);