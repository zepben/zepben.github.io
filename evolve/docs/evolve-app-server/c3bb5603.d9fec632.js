(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{103:function(e,t,n){"use strict";var i=n(0),o=n.n(i),c=(n(55),n(23)),a=n(106),r=n(102),d=n(111);n(56);t.a=function(e){var t,u=e.specUrl,s=e.documentUrl,p=e.oauth2RedirectUrl,l=Object(c.default)().siteConfig,f=Object(a.default)();if("undefined"!=typeof window){var v=RegExp(l.baseUrl+"(.*)"+s,"g").exec(window.location.href);if(null!=v)t=Object(r.a)(["spec",v[1],u].join("/"));else{var g=Object(d.find)(f["docusaurus-plugin-content-docs"].default.versions,(function(e){return!0===e.isLast}));t=Object(r.a)(["spec","current"===g.name?"next":g.name,u].join("/"))}}return Object(i.useEffect)((function(){setTimeout((function(){var e="swagger-ui";if(!document.getElementById(e)){var i=document.createElement("div");i.id=e,document.getElementById("api-doc").appendChild(i),void 0!==typeof window&&n.e(28).then(n.t.bind(null,112,7)).then((function(e){e.default({url:t,dom_id:"#swagger-ui",defaultModelsExpandDepth:1,docExpansion:"list",oauth2RedirectUrl:""+window.location.origin+l.baseUrl+p})}))}}),500)}),[]),o.a.createElement("div",{id:"api-doc"})}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),c=(n(0),n(101)),a=n(103),r={id:"config-api",slug:"/api/config",title:"Config",hide_title:!0},d={unversionedId:"api/config-api",id:"api/config-api",isDocsHomePage:!1,title:"Config",source:"@site/docs/api/config.mdx",slug:"/api/config",permalink:"/evolve/docs/evolve-app-server/next/api/config",editUrl:"https://github.com/zepben/docs/api/config.mdx",version:"current",sidebar:"sidebar",previous:{title:"API Overview",permalink:"/evolve/docs/evolve-app-server/next/api"},next:{title:"User",permalink:"/evolve/docs/evolve-app-server/next/api/user"}},u=[],s={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(a.a,{specUrl:"config/spec.yaml",documentUrl:"/api/config",oauth2RedirectUrl:"swagger-oauth2-redirect.html",mdxType:"ApiDoc"}))}p.isMDXComponent=!0}}]);