"use strict";(self.webpackChunkewb_app_server_doco=self.webpackChunkewb_app_server_doco||[]).push([[894],{1423:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(7294),a=i(2263),n=i(8084),p=i(4996),r=i(6486);const s=e=>{let{specUrl:t,documentUrl:s,oauth2RedirectUrl:d}=e;const{siteConfig:l}=(0,a.Z)(),c=(0,n.ZP)();let u;if("undefined"!=typeof window){const e=RegExp(l.baseUrl+"(.*)"+s,"g").exec(window.location.href);if(null!=e)u=(0,p.Z)(["spec",e[1],t].join("/"));else{const e=(0,r.find)(c["docusaurus-plugin-content-docs"].default.versions,(e=>!0===e.isLast));u=(0,p.Z)(["spec","current"===e.name?"next":e.name,t].join("/"))}}return(0,o.useEffect)((()=>{setTimeout((()=>{const e="swagger-ui";if(!document.getElementById(e)){const t=document.createElement("div");t.id=e,document.getElementById("api-doc").appendChild(t),void 0!==typeof window&&i.e(416).then(i.t.bind(i,1416,23)).then((t=>{t.default({url:u,dom_id:"#"+e,defaultModelsExpandDepth:1,docExpansion:"list",oauth2RedirectUrl:""+window.location.origin+l.baseUrl+d})}))}}),500)}),[]),o.createElement("div",{id:"api-doc"})}},1271:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var o=i(7462),a=(i(7294),i(3905)),n=i(1423);const p={id:"map-api",slug:"/api/map",title:"Map",hide_title:!0},r=void 0,s={unversionedId:"api/map-api",id:"version-2.0.0/api/map-api",title:"Map",description:"",source:"@site/versioned_docs/version-2.0.0/api/map.mdx",sourceDirName:"api",slug:"/api/map",permalink:"/evolve/docs/evolve-app-server/2.0.0/api/map",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"map-api",slug:"/api/map",title:"Map",hide_title:!0},sidebar:"version-2.0.0/sidebar",previous:{title:"User",permalink:"/evolve/docs/evolve-app-server/2.0.0/api/user"},next:{title:"Network",permalink:"/evolve/docs/evolve-app-server/2.0.0/api/network"}},d={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{specUrl:"map/spec.yaml",documentUrl:"/api/map",oauth2RedirectUrl:"swagger-oauth2-redirect.html",mdxType:"ApiDoc"}))}m.isMDXComponent=!0}}]);