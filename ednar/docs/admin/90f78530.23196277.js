(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{176:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/templates-4dd7e633ba3ad57468586332b1ee0d09.png"},177:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/new-template-e78f6a4de2673c5447ba7479baa8d7ff.png"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(98)),o={id:"templates",title:"Templates",slug:"/templates"},c={unversionedId:"templates",id:"templates",isDocsHomePage:!1,title:"Templates",description:"Notification templates can be viewed using the admin app by navigating to the Configuration -> Notification Management -> Templates page from the top menu.",source:"@site/docs\\templates.md",slug:"/templates",permalink:"/ednar/docs/admin/templates",editUrl:"https://github.com/zepben/docs/templates.md",version:"current",sidebar:"sidebar",previous:{title:"Criteria",permalink:"/ednar/docs/admin/criteria"}},l=[],p={toc:l};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Notification templates can be viewed using the admin app by navigating to the ",Object(i.a)("inlineCode",{parentName:"p"},"Configuration -> Notification Management -> Templates")," page from the top menu."),Object(i.a)("p",null,Object(i.a)("img",{alt:"Templates",src:n(176).default})),Object(i.a)("p",null,"A new template can be created by using the ",Object(i.a)("inlineCode",{parentName:"p"},"Create Template")," button on the top right next to the search control."),Object(i.a)("p",null,Object(i.a)("img",{alt:"Creating template",src:n(177).default})),Object(i.a)("p",null,"A template needs the following : "),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"NAR Action")," - An action from a predefined set of triggers on which the notification needs to be sent."),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"Target Group")," - A target group from a preconfigured set of target groups. For configuring target groups refer to ",Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"./config-schema#notification-target-groups"}),"target groups config"),"."),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"Notification Type")," - Method to notify target group. "),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"Criteria")," - Criteria under which notification needs to be sent. For configuring criteria refer to ",Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"./criteria"}),"configuring criteria"),"."),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"Subject")," - Notification subject."),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"isHtml")," - Whether the notification body is an ",Object(i.a)("inlineCode",{parentName:"li"},"html")," block."),Object(i.a)("li",{parentName:"ol"},Object(i.a)("inlineCode",{parentName:"li"},"Body")," - Notification body which can either be plain text or an ",Object(i.a)("inlineCode",{parentName:"li"},"html")," block.   ")),Object(i.a)("p",null,"After creating the template click on the ",Object(i.a)("inlineCode",{parentName:"p"},"Save")," button on the top right to save it."))}s.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,b=m["".concat(o,".").concat(f)]||m[f]||u[f]||i;return n?r.a.createElement(b,c({ref:t},p,{components:n})):r.a.createElement(b,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);