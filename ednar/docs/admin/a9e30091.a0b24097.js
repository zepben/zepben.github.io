(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(243)),c={id:"api-clients",title:"API Clients",slug:"/api-clients"},o={unversionedId:"api-clients",id:"version-5.20.0/api-clients",isDocsHomePage:!1,title:"API Clients",description:"This page will walk through how to create and use API clients in EDNAR for machine-to-machine authentication.",source:"@site/versioned_docs\\version-5.20.0\\api-clients.md",slug:"/api-clients",permalink:"/ednar/docs/admin/api-clients",editUrl:"https://github.com/zepben/versioned_docs/version-5.20.0/api-clients.md",version:"5.20.0",sidebar:"version-5.20.0-sidebar",previous:{title:"App Options",permalink:"/ednar/docs/admin/app-options"},next:{title:"Calendar Events",permalink:"/ednar/docs/admin/calendar-events"}},s=[{value:"Creating API Clients",id:"creating-api-clients",children:[]},{value:"Using API Clients for authentication",id:"using-api-clients-for-authentication",children:[]}],l={toc:s};function p(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"This page will walk through how to create and use API clients in EDNAR for machine-to-machine authentication.\nTo create and manage API clients, you will need the ",Object(r.a)("inlineCode",{parentName:"p"},"ADMIN_API_CLIENTS")," privilege."),Object(r.a)("h2",{id:"creating-api-clients"},"Creating API Clients"),Object(r.a)("p",null,"In the EDNAR Admin app, go to Configuration -> API Client Management\n",Object(r.a)("img",{alt:"APIClients1.png",src:n(305).default})),Object(r.a)("p",null,'Click "Create API Client"\n',Object(r.a)("img",{alt:"APIClients2.png",src:n(306).default})),Object(r.a)("p",null,"Give the API Client a description and assign it a role (the role will dictate what privileges the client has)\n",Object(r.a)("img",{alt:"APIClients3.png",src:n(307).default})),Object(r.a)("p",null,'Click "Save". You will be presented a Client Secret similar to this:\n',Object(r.a)("img",{alt:"APIClients4.png",src:n(308).default})),Object(r.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Important")),Object(r.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"You must copy the Client Secret and save it somewhere secure now - you won't be able to access it again!"))),Object(r.a)("p",null,"Back on the API Client form, you will now see a Client ID, which you can also copy by clicking the dotted box."),Object(r.a)("p",null,Object(r.a)("img",{alt:"APIClients5.png",src:n(309).default})),Object(r.a)("h2",{id:"using-api-clients-for-authentication"},"Using API Clients for authentication"),Object(r.a)("p",null,"To use your Client ID and Client Secret to authenticate with EDNAR, we use an OAuth2 flow. The easiest one is the OAuth2 Client Credentials flow."),Object(r.a)("p",null,"In your preferred HTTP Client, configure Auth, and select OAuth2 from the list of available options.\n",Object(r.a)("img",{alt:"APIClients6.png",src:n(310).default})),Object(r.a)("p",null,'Fill in "Grant Type" as "Client Credentials" for this example.\n',Object(r.a)("img",{alt:"APIClients7.png",src:n(311).default})),Object(r.a)("p",null,"For access token URL, use the host where the EDNAR App Server is running, with the endpoint /api/token. Use your Client ID as the Client ID, and your Client Secret as the Client Secret:\n",Object(r.a)("img",{alt:"APIClients8.png",src:n(312).default})),Object(r.a)("p",null,'Click "Fetch Token" and it should issue you an Access Token:\n',Object(r.a)("img",{alt:"APIClients9.png",src:n(313).default})),Object(r.a)("p",null,"Manually perform the OAuth2 Client Credentials flow rather than use a HTTP Client, you can follow the spec for a request here: ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.4"}),"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.4")),Object(r.a)("p",null,"To do so, you need to make a POST request to /api/token with the following body encoded in x-www-form-urlencoded format with the following parameters:"),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{}),"grant_type=client_credentials&\nclient_id=<YOUR_CLIENT_ID>&\nclient_secret=<YOUR_CLIENT_SECRET>\n")),Object(r.a)("p",null,"or,"),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"grant_type=client_credentials")),Object(r.a)("p",null,"and then include an Authorization header with the Client ID and Client Secret encoded as Basic auth credentials: ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Basic_access_authentication"}),"https://en.wikipedia.org/wiki/Basic_access_authentication")),Object(r.a)("p",null,"The response will contain an Access Token."),Object(r.a)("p",null,"Either way, you can then use that Access Token as a Bearer token for subsequent EDNAR requests, without needing to include a token in the cookie or an X-XSRF-Token header. You are now logged in as an API Client!"),Object(r.a)("p",null,"The token will expire at some point, so you'll need to repeat the request to /api/token every time it expires. If you'd rather refresh the token using a refresh token, you can use the more complex OAuth2 Authorization Code flow described here: ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"}),"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1")," with /api/authorize as the Authorization Code endpoint and /api/token as the Access Token endpoint."))}p.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?i.a.createElement(h,o({ref:t},l,{components:n})):i.a.createElement(h,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},305:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients1-c95396c85ba06f907a38a061b0c0d310.png"},306:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients2-565f99117032fad5d26b79efb342be75.png"},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients3-60b2f61e4ca8f2bf8a3e29878bb8b56d.png"},308:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients4-f4dc7e840fd6c2392e69b5a66517706d.png"},309:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients5-9fd327dc20dc73c70e5cea21e0da9c3a.png"},310:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients6-bf8e8e1aa5a99fb92b8e26d01d72075b.png"},311:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients7-c14537559ed471ef943e92a5b9d62f45.png"},312:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients8-afc0dcae858e8094e13b062848dc6b3f.png"},313:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/APIClients9-b7695c2032dbad23d1b31f5adbede591.png"}}]);