"use strict";(self.webpackChunkewb_sdk_examples_python_doco=self.webpackChunkewb_sdk_examples_python_doco||[]).push([[633],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>y});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,y=u["".concat(l,".").concat(p)]||u[p]||h[p]||a;return n?t.createElement(y,o(o({ref:r},d),{},{components:n})):t.createElement(y,o({ref:r},d))}));function y(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1366:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const a={id:"examples-build-network-hierarchy",title:"Building a Network Hierarchy"},o=void 0,s={unversionedId:"examples-build-network-hierarchy",id:"examples-build-network-hierarchy",title:"Building a Network Hierarchy",description:"A network hierarchy describes the high-level hierarchy of the network. This tutorial will demonstrate how to build a network hierarchy on your own.",source:"@site/docs/build_network_hierarchy.mdx",sourceDirName:".",slug:"/examples-build-network-hierarchy",permalink:"/evolve/docs/ewb-sdk-examples-python/examples-build-network-hierarchy",draft:!1,tags:[],version:"current",frontMatter:{id:"examples-build-network-hierarchy",title:"Building a Network Hierarchy"},sidebar:"someSidebar",previous:{title:"Building an IEEE Test Feeder",permalink:"/evolve/docs/ewb-sdk-examples-python/examples-ieee-13-node-feeder"},next:{title:"Fetching Network Hierarchy",permalink:"/evolve/docs/ewb-sdk-examples-python/examples-fetching-network-hierarchy"}},l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Define Network Hierarchy Components",id:"define-network-hierarchy-components",level:2},{value:"Build Network Hierarchy",id:"build-network-hierarchy",level:2},{value:"Print the Network Hierarchy",id:"print-the-network-hierarchy",level:2}],d={toc:c},u="wrapper";function h(e){let{components:r,...a}=e;return(0,i.kt)(u,(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A network hierarchy describes the high-level hierarchy of the network. This tutorial will demonstrate how to build a network hierarchy on your own.\nFor demonstration purpose only, we will build a simple network hierarchy shown in the following diagram where we have Geographical Region (New South Wales), Sub-geographical Regions (Sydney and Newcastle), Corresponding Substations (Sydney Substations 1 and 2, and Newcastle Substation), Corresponding Feeders (Sydney Feeders 1, 2, and 3, and Newcastle Feeders 1, 2 and 3)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4951).Z,width:"1755",height:"1240"})),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Ensure that you have installed and imported the required dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from zepben.evolve import NetworkHierarchy, GeographicalRegion, SubGeographicalRegion, Feeder, Substation, Loop, Circuit\n")),(0,i.kt)("h2",{id:"define-network-hierarchy-components"},"Define Network Hierarchy Components"),(0,i.kt)("p",null,"First, you will need to create instances of Feeders, Substations, Circuits, Loops, and Geographical and Sub-Geographical Regions to represent the components of the network hierarchy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'fdr1 = Feeder(name="Sydney feeder 1")\nfdr2 = Feeder(name="Sydney feeder 2")\nfdr3 = Feeder(name="Sydney feeder 3")\nfdr4 = Feeder(name="Newcastle feeder 1")\nfdr5 = Feeder(name="Newcastle feeder 2")\nfdr6 = Feeder(name="Newcastle feeder 3")\n\nsub1 = Substation(name="Sydney substation 1")\nsub2 = Substation(name="Sydney substation 2", normal_energized_feeders=[fdr1, fdr2, fdr3])\nsub3 = Substation(name="Newcastle substation", normal_energized_feeders=[fdr4, fdr5, fdr6])\n\ncircuit_sydney = Circuit(end_substations=[sub1, sub2])\nloop_sydney = Loop(circuits=[circuit_sydney], substations=[sub1], energizing_substations=[sub2])\nsgr_sydney = SubGeographicalRegion(name="Sydney", substations=[sub1, sub2])\nsgr_newcastle = SubGeographicalRegion(name="Newcastle", substations=[sub3])\n\ngr_nsw = GeographicalRegion(name="New South Wales", sub_geographical_regions=[sgr_sydney, sgr_newcastle])\n')),(0,i.kt)("h2",{id:"build-network-hierarchy"},"Build Network Hierarchy"),(0,i.kt)("p",null,"In this step, we build the network hierarchy by organizing the previously defined components into the hierarchy structure.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkHierarchy")," class is used to represent the overall structure, as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"network_hierarchy = NetworkHierarchy(\n    geographical_regions={gr_nsw.mrid: gr_nsw},\n    sub_geographical_regions={sgr.mrid: sgr for sgr in (sgr_sydney, sgr_newcastle)},\n    substations={sub.mrid for sub in (sub1, sub2, sub3)},\n    feeders={fdr.mrid: fdr for fdr in (fdr1, fdr2, fdr3, fdr4, fdr5, fdr6)},\n    circuits={circuit_sydney.mrid: circuit_sydney},\n    loops={loop_sydney.mrid: loop_sydney}\n)\n")),(0,i.kt)("h2",{id:"print-the-network-hierarchy"},"Print the Network Hierarchy"),(0,i.kt)("p",null,"You can print the constructed network hierarchy to visualize its structure.\nThe script iterates through geographical regions, sub-geographical regions, substations, and feeders to display the hierarchy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("Network hierarchy:")\nfor gr in network_hierarchy.geographical_regions.values():\n    print(f"- {gr.name}")\n    for sgr in gr.sub_geographical_regions:\n        print(f"  - {sgr.name}")\n        for sub in sgr.substations:\n            print(f"    - {sub.name}")\n            for fdr in sub.feeders:\n                print(f"      - {fdr.name}")\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9103).Z,width:"985",height:"291"})))}h.isMDXComponent=!0},9103:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/network_hierarchy_ex1-a9fd48db0863f40bdf81558ad2b08014.png"},4951:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/network_hierarchy_example-947b3d3c06cdf58a40d4b984a8e5cb7c.jpg"}}]);