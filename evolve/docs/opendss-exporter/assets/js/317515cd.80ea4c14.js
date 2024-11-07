"use strict";(self.webpackChunkopendss_exporter_doco=self.webpackChunkopendss_exporter_doco||[]).push([[748],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const i={id:"overview",title:"Overview",slug:"/"},a="OpenDSS Exporter",p={unversionedId:"overview",id:"version-0.4.0/overview",title:"Overview",description:"The OpenDSS exporter is a library that allows transforming Zepben CIM models to OpenDSS models.",source:"@site/versioned_docs/version-0.4.0/overview.md",sourceDirName:".",slug:"/",permalink:"/evolve/docs/opendss-exporter/0.4.0/",draft:!1,tags:[],version:"0.4.0",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"sidebar"},l={},s=[{value:"Converting CIM to OpenDSS",id:"converting-cim-to-opendss",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"opendss-exporter"},"OpenDSS Exporter"),(0,o.yg)("p",null,"The OpenDSS exporter is a library that allows transforming Zepben CIM models to OpenDSS models."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"com.zepben.opendss.model")," package holds the definition of the OpenDSS model."),(0,o.yg)("h1",{id:"usage"},"Usage"),(0,o.yg)("h2",{id:"converting-cim-to-opendss"},"Converting CIM to OpenDSS"),(0,o.yg)("p",null,"The main function in this library is to convert a CIM NetworkService into an OpenDSS model. This is performed through the\n",(0,o.yg)("inlineCode",{parentName:"p"},"CimToOpenDss")," class."),(0,o.yg)("p",null,"To translate a model, call:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"CimToOpenDss.translate(networkService, ..., generatorConfig)\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"GeneratorConfig")," can be used to configure specific things about the OpenDss model during translation."),(0,o.yg)("p",null,"Consult the documentation in hosting-capacity-utils for the potential configuration options and their impacts."))}d.isMDXComponent=!0}}]);