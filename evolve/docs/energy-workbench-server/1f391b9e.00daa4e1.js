(window.webpackJsonp=window.webpackJsonp||[]).push([[32,187],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(312),l=n(294),o=n(385),i=n(350);t.default=function(e){var t=e.content,n=t.frontMatter,a=t.metadata,s=n.title,m=n.description,u=n.wrapperClassName,d=n.hide_table_of_contents,f=a.permalink;return r.a.createElement(c.a,{title:s,description:m,permalink:f,wrapperClassName:u},r.a.createElement("main",null,r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{components:o.a},r.a.createElement(t,null)))),!d&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(i.a,{toc:t.toc})))))))}},316:function(e,t,n){"use strict";var a=n(320);t.a=a.a},350:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(300);var l=function(e,t,n){var r=Object(a.useState)(void 0),c=r[0],l=r[1];Object(a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,i=document.getElementsByClassName(e);r<i.length&&!o;){var s=i[r],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===u&&(c&&c.classList.remove(t),s.classList.add(t),l(s),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},o=n(58),i=n.n(o),s="table-of-contents__link";function m(e){var t=e.toc,n=e.isChild;return t.length?r.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(c.a)(i.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:t}))}}}]);