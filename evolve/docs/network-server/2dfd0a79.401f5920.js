(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{76:function(e,t,a){"use strict";a.r(t);var r=a(82),n=a(0),c=a.n(n),i=(a(63),a(121)),l=a(83),s=a(64),o=a.n(s),m=a(335),p=a.n(m);var d=({title:e,description:t,items:a})=>{const r=p()(a,(e=>e.type));return c.a.createElement(i.a,{title:e,description:t},c.a.createElement("main",{className:"container margin-vert--lg"},Object.entries(r).map((([e,t])=>c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"text--center margin-bottom--md margin-top--md"},c.a.createElement("h1",null,e)),c.a.createElement("div",{className:"row"},t.map((e=>c.a.createElement("div",{key:e.title,className:"col col--4 margin-bottom--lg"},c.a.createElement("div",{className:Object(l.a)("card",o.a.showcaseItem)},c.a.createElement("div",{className:"card__body"},c.a.createElement("div",{className:"avatar"},c.a.createElement("div",{className:"avatar__intro margin-left--none"},c.a.createElement("h4",{className:"avatar__name"},e.title),c.a.createElement("small",{className:"avatar__subtitle"},e.description)))),c.a.createElement("div",{className:"card__footer"},c.a.createElement("div",{className:"button-group button-group--block"},e.siteRelUrl&&c.a.createElement("a",{className:"button button--small button--secondary button--block",href:e.siteRelUrl,target:"_blank",rel:"noreferrer noopener"},"Documentation")))))))))))))};t.default=()=>c.a.createElement(d,{title:"API Documentation",description:"",items:[{title:"Network",description:"API spec for network related REST endpoints",siteRelUrl:Object(r.a)("api/network"),type:"Network"},{title:"Geo View",description:"API spec for geoview related REST endpoints",siteRelUrl:Object(r.a)("api/geo-view"),type:"Network"},{title:"Graphics",description:"API spec for graphics related REST endpoints",siteRelUrl:Object(r.a)("api/graphics"),type:"Network"},{title:"Trace",description:"API spec for trace related REST endpoints",siteRelUrl:Object(r.a)("api/trace"),type:"Network"},{title:"Patch",description:"API spec for patch related REST endpoints",siteRelUrl:Object(r.a)("api/patch"),type:"Other"}]})}}]);