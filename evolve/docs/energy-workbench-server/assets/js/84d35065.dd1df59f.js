"use strict";(self.webpackChunkenergy_worbench_server_doco=self.webpackChunkenergy_worbench_server_doco||[]).push([[690],{3905:function(e,n,r){r.d(n,{Zo:function(){return g},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},g=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return r?t.createElement(f,i(i({ref:n},g),{},{components:r})):t.createElement(f,i({ref:n},g))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20994:function(e,n,r){r.r(n),r.d(n,{assets:function(){return g},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"logging",title:"Logging"},c=void 0,s={unversionedId:"logging",id:"version-2.17.1/logging",title:"Logging",description:"Logging in the server and each tool is handled by Logback - an open source Java logging library.",source:"@site/versioned_docs/version-2.17.1/logging.md",sourceDirName:".",slug:"/logging",permalink:"/evolve/docs/energy-workbench-server/2.17.1/logging",draft:!1,tags:[],version:"2.17.1",frontMatter:{id:"logging",title:"Logging"},sidebar:"sidebar",previous:{title:"Results Cache",permalink:"/evolve/docs/energy-workbench-server/2.17.1/results-cache"},next:{title:"Keep Level Specification",permalink:"/evolve/docs/energy-workbench-server/2.17.1/keep-level-spec"}},g={},p=[{value:"Logs Directory",id:"logs-directory",level:3},{value:"Custom Logback Config",id:"custom-logback-config",level:3}],u={toc:p},d="wrapper";function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Logging in the server and each tool is handled by ",(0,a.kt)("a",{parentName:"p",href:"http://logback.qos.ch/"},"Logback")," - an open source Java logging library.\nYou are able to change the logging behaviour by specifying your own Logback XML configuration file.\nThe default configuration that the EWB server and tools use is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<configuration>\n\n    <property name="LOG_NAME" value="weather-station-mapper"/>\n\n    <appender name="RollingFile" class="ch.qos.logback.core.rolling.RollingFileAppender">\n        <file>${logsPath:-logs}/${LOG_NAME}.log</file>\n        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">\n            \x3c!-- daily rollover --\x3e\n            <fileNamePattern>${logsPath:-logs}/${LOG_NAME}.%d{yyyy-MM-dd}.log</fileNamePattern>\n\n            \x3c!-- keep 180 days worth of history --\x3e\n            <maxHistory>180</maxHistory>\n            <cleanHistoryOnStart>true</cleanHistoryOnStart>\n        </rollingPolicy>\n\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %5level %-31.31logger{31} - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n        \x3c!-- encoders are assigned the type ch.qos.logback.classic.encoder.PatternLayoutEncoder by default --\x3e\n        <encoder>\n            <pattern>%white(%d{yyyy-MM-dd HH:mm:ss.SSS}) %highlight(%5level) - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <root level="INFO">\n        <appender-ref ref="STDOUT"/>\n        <appender-ref ref="RollingFile"/>\n    </root>\n\n</configuration>\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_NAME")," value is unique to each process so they all get their own unique log file.")),(0,a.kt)("h3",{id:"logs-directory"},"Logs Directory"),(0,a.kt)("p",null,"By default, logs will go into a directory called logs in the current working directory (that will generally be\nthe directory that the jar was launched from). To specify a specific logs directory, you can add a Java system property\nargument when launching the jar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -DlogsPath=/path/to/logs/dir/ -jar ...\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ewb_server.sh")," script, and running the data tools via the ",(0,a.kt)("inlineCode",{parentName:"p"},"ewb_daily.sh")," script make use of this argument passing\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"EWB_LOGS_DIR")," variable from ",(0,a.kt)("inlineCode",{parentName:"p"},"ewb.conf"),"."),(0,a.kt)("h3",{id:"custom-logback-config"},"Custom Logback Config"),(0,a.kt)("p",null,"To make use of your own custom Logback configuration, a Java system property needs to be set when invoking any of the jars.\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -Dlogback.configurationFile=<path to logback XML file> -jar ...\n")),(0,a.kt)("p",null,"Logback provides extensive configuration options all documented on their ",(0,a.kt)("a",{parentName:"p",href:"http://logback.qos.ch/manual/index.html"},"website"),"."))}f.isMDXComponent=!0}}]);