(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{172:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?r.a.createElement(m,o({ref:t},l,{components:n})):r.a.createElement(m,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/users-dd07c450fa908be3c02f03254878944f.png"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/edit-user-28ad50ae5785dc420089b86f4827457c.png"},180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/roles-01cc14b47aac6315827a2cadda2b3db6.png"},181:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/edit-role-4193694fac081c7e29c3acdff6663703.png"},182:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deleting-role-32f7000ea959772acbefc6f5644f3f26.png"},183:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/privileges-ce7b89cd8903ff03736f0ff42d6a0cac.png"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(172)),s={id:"user-management",title:"User Management",slug:"/user-management"},o={unversionedId:"user-management",id:"version-4.21.0/user-management",isDocsHomePage:!1,title:"User Management",description:"Privileges",source:"@site/versioned_docs\\version-4.21.0\\user-management.md",slug:"/user-management",permalink:"/ednar/docs/admin/user-management",editUrl:"https://github.com/zepben/versioned_docs/version-4.21.0/user-management.md",version:"4.21.0",sidebar:"version-4.21.0/sidebar",previous:{title:"Database Config Schema",permalink:"/ednar/docs/admin/config-schema"},next:{title:"Criteria",permalink:"/ednar/docs/admin/criteria"}},c=[{value:"Privileges",id:"privileges",children:[]},{value:"Roles",id:"roles",children:[]},{value:"Users",id:"users",children:[]}],l={toc:c};function u(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h3",{id:"privileges"},"Privileges"),Object(i.a)("p",null,"Privileges can be viewed using the admin app by navigating to the ",Object(i.a)("inlineCode",{parentName:"p"},"User Management")," page from the top menu."),Object(i.a)("p",null,Object(i.a)("img",{alt:"Privileges",src:n(183).default})),Object(i.a)("hr",null),Object(i.a)("h3",{id:"roles"},"Roles"),Object(i.a)("p",null,"Roles can be viewed using the admin app by navigating to the ",Object(i.a)("inlineCode",{parentName:"p"},"User Management")," page from the top menu."),Object(i.a)("p",null,Object(i.a)("img",{alt:"Roles",src:n(180).default})),Object(i.a)("p",null,"To create a role use the ",Object(i.a)("inlineCode",{parentName:"p"},"Create Role")," button next to the search bar on the right. Role can be edited by using the ",Object(i.a)("inlineCode",{parentName:"p"},"View")," action against a role. "),Object(i.a)("p",null,Object(i.a)("img",{alt:"Editing Role",src:n(181).default})),Object(i.a)("p",null,"A role needs to be assigned a name and an optional description. "),Object(i.a)("p",null,"The transfer component can be used to assign privileges by transferring available privileges on the left to the right column using the arrow. "),Object(i.a)("p",null,"The UI will indicate if there are any unsaved changes. Once the changes have been made, it can be saved using the ",Object(i.a)("inlineCode",{parentName:"p"},"Save")," button on the top right."),Object(i.a)("p",null,"To delete a role use the ",Object(i.a)("inlineCode",{parentName:"p"},"Delete")," action against a role item and select ",Object(i.a)("inlineCode",{parentName:"p"},"Ok")," on the confirm dialog."),Object(i.a)("p",null,Object(i.a)("img",{alt:"Deleting Role",src:n(182).default})),Object(i.a)("hr",null),Object(i.a)("h3",{id:"users"},"Users"),Object(i.a)("p",null,"User info can be viewed using the admin app by navigating to the ",Object(i.a)("inlineCode",{parentName:"p"},"User Management")," page from the top menu. "),Object(i.a)("p",null,"To select a user search using the user's name and select the relevant option from the list. "),Object(i.a)("p",null,Object(i.a)("img",{alt:"User",src:n(178).default})),Object(i.a)("p",null,Object(i.a)("img",{alt:"Editing Users",src:n(179).default})),Object(i.a)("p",null,"The transfer component can be used to assign roles to a user by transferring available roles on the left to the right column using the arrow.\nUser can also be marked as a planner and an operator.  "),Object(i.a)("p",null,"The UI will indicate if there are any unsaved changes. Once the changes have been made, it can be saved using the ",Object(i.a)("inlineCode",{parentName:"p"},"Save")," button on the top right.\n"))}u.isMDXComponent=!0}}]);