(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,d=p["".concat(c,".").concat(y)]||p[y]||f[y]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},170:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(23),o=n(176);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,c=a.forcePrependBaseUrl,l=void 0!==c&&c,i=a.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},171:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return c}));var r=n(23);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function c(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},176:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},259:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o),c=n(177),l=n(174),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(25).a,theme:i};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=p({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=p({},g(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?p({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],i=[l];c>-1;){for(;(a=r[c]++)<o[c];){var s=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=d(u,p.type),p.alias&&(u=d(u,p.alias)),s=p.content),"string"==typeof s){var h=s.split(f),g=h.length;l.push({types:u,content:h[0]});for(var m=1;m<g;m++)y(l),i.push(l=[]),l.push({types:u,content:h[m]})}else c++,t.push(u),n.push(s),r.push(0),o.push(s.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return y(l),i}(void 0!==c?t.tokenize(r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),v=n(269),b=n.n(v),j=n(270),O=n.n(j),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(213),w=n(175),x=function(){var e=Object(w.useThemeConfig)().prism,t=Object(E.a)().isDarkTheme,n=e.theme||k,r=e.darkTheme||n;return t?r:n},P=n(86),T=n.n(P),N=/{([\d,-]+)}/,D=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},C=/(?:title=")(.*)(?:")/,S=function(e){var t=e.children,n=e.className,c=e.metastring,i=Object(w.useThemeConfig)().prism,u=Object(o.useState)(!1),p=u[0],f=u[1],y=Object(o.useState)(!1),d=y[0],h=y[1];Object(o.useEffect)((function(){h(!0)}),[]);var g=Object(o.useRef)(null),v=[],j="",k=x(),E=Array.isArray(t)?t.join(""):t;if(c&&N.test(c)){var P=c.match(N)[1];v=O()(P).filter((function(e){return e>0}))}c&&C.test(c)&&(j=c.match(C)[1]);var S=n&&n.replace(/language-/,"");!S&&i.defaultLanguage&&(S=i.defaultLanguage);var B=E.replace(/\n$/,"");if(0===v.length&&void 0!==S){for(var L,A="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return D(["js","jsBlock"]);case"jsx":case"tsx":return D(["js","jsBlock","jsx"]);case"html":return D(["js","jsBlock","html"]);case"python":case"py":return D(["python"]);default:return D()}}(S),R=E.replace(/\n$/,"").split("\n"),F=0;F<R.length;){var $=F+1,U=R[F].match(I);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=$+",";break;case"highlight-start":L=$;break;case"highlight-end":A+=L+"-"+($-1)+","}R.splice(F,1)}else F+=1}v=O()(A),B=R.join("\n")}var W=function(){b()(B),f(!0),setTimeout((function(){return f(!1)}),2e3)};return a.a.createElement(m,Object(r.a)({},s,{key:String(d),theme:k,code:B,language:S}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,i=e.getLineProps,s=e.getTokenProps;return a.a.createElement(a.a.Fragment,null,j&&a.a.createElement("div",{style:o,className:T.a.codeBlockTitle},j),a.a.createElement("div",{className:T.a.codeBlockContent},a.a.createElement("div",{tabIndex:0,className:Object(l.a)(n,T.a.codeBlock,"thin-scrollbar",(t={},t[T.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:T.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},s({token:e,key:t})))})))})))),a.a.createElement("button",{ref:g,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(T.a.copyButton),onClick:W},p?"Copied":"Copy")))}))},B=n(7),L=(n(87),n(88)),A=n.n(L),I=function(e){return function(t){var n,r=t.id,o=Object(B.a)(t,["id"]),c=Object(w.useThemeConfig)().navbar.hideOnScroll;return r?a.a.createElement(e,o,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(n={},n[A.a.enhancedAnchor]=!c,n)),id:r}),o.children,a.a.createElement("a",{className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):a.a.createElement(e,o)}},R=n(89),F=n.n(R),$={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?a.a.createElement(S,e):a.a.createElement("code",e):t},a:function(e){return a.a.createElement(c.a,e)},pre:function(e){return a.a.createElement("div",Object(r.a)({className:F.a.mdxCodeBlock},e))},h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")};t.a=$},269:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus(),c};e.exports=r,e.exports.default=r},270:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);