(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{328:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(336)),i={id:"logging",title:"Logging"},c={unversionedId:"logging",id:"version-2.10.0/logging",isDocsHomePage:!1,title:"Logging",description:"Logging in the server and each tool is handled by Logback - an open source Java logging library.",source:"@site/versioned_docs/version-2.10.0/logging.md",slug:"/logging",permalink:"/evolve/docs/energy-workbench-server/2.10.0/logging",version:"2.10.0",sidebar:"version-2.10.0/sidebar",previous:{title:"Results Cache",permalink:"/evolve/docs/energy-workbench-server/2.10.0/results-cache"},next:{title:"Keep Level Specification",permalink:"/evolve/docs/energy-workbench-server/2.10.0/keep-level-spec"}},l=[{value:"Logs Directory",id:"logs-directory",children:[]},{value:"Custom Logback Config",id:"custom-logback-config",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Logging in the server and each tool is handled by ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://logback.qos.ch/"}),"Logback")," - an open source Java logging library.\nYou are able to change the logging behaviour by specifying your own Logback XML configuration file.\nThe default configuration that the EWB server and tools use is as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<configuration>\n\n    <property name="LOG_NAME" value="weather-station-mapper"/>\n\n    <appender name="RollingFile" class="ch.qos.logback.core.rolling.RollingFileAppender">\n        <file>${logsPath:-logs}/${LOG_NAME}.log</file>\n        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">\n            \x3c!-- daily rollover --\x3e\n            <fileNamePattern>${logsPath:-logs}/${LOG_NAME}.%d{yyyy-MM-dd}.log</fileNamePattern>\n\n            \x3c!-- keep 180 days worth of history --\x3e\n            <maxHistory>180</maxHistory>\n            <cleanHistoryOnStart>true</cleanHistoryOnStart>\n        </rollingPolicy>\n\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %5level %-31.31logger{31} - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n        \x3c!-- encoders are assigned the type ch.qos.logback.classic.encoder.PatternLayoutEncoder by default --\x3e\n        <encoder>\n            <pattern>%white(%d{yyyy-MM-dd HH:mm:ss.SSS}) %highlight(%5level) - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <root level="INFO">\n        <appender-ref ref="STDOUT"/>\n        <appender-ref ref="RollingFile"/>\n    </root>\n\n</configuration>\n')),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"LOG_NAME")," value is unique to each process so they all get their own unique log file."))),Object(a.b)("h3",{id:"logs-directory"},"Logs Directory"),Object(a.b)("p",null,"By default, logs will go into a directory called logs in the current working directory (that will generally be\nthe directory that the jar was launched from). To specify a specific logs directory, you can add a Java system property\nargument when launching the jar."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"java -DlogsPath=/path/to/logs/dir/ -jar ...\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ewb_server.sh")," script, and running the data tools via the ",Object(a.b)("inlineCode",{parentName:"p"},"ewb_daily.sh")," script make use of this argument passing\nin the ",Object(a.b)("inlineCode",{parentName:"p"},"EWB_LOGS_DIR")," variable from ",Object(a.b)("inlineCode",{parentName:"p"},"ewb.conf"),"."),Object(a.b)("h3",{id:"custom-logback-config"},"Custom Logback Config"),Object(a.b)("p",null,"To make use of your own custom Logback configuration, a Java system property needs to be set when invoking any of the jars.\nFor example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"java -Dlogback.configurationFile=<path to logback XML file> -jar ...\n")),Object(a.b)("p",null,"Logback provides extensive configuration options all documented on their ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://logback.qos.ch/manual/index.html"}),"website"),"."))}p.isMDXComponent=!0},336:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},g=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,u=g["".concat(i,".").concat(d)]||g[d]||b[d]||a;return t?o.a.createElement(u,c(c({ref:n},s),{},{components:t})):o.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);