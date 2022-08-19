(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(165)),c={id:"venv-setup",title:"Virtual Environment Setup"},o={unversionedId:"venv-setup",id:"version-0.23.0/venv-setup",isDocsHomePage:!1,title:"Virtual Environment Setup",description:"Prerequisites",source:"@site/versioned_docs/version-0.23.0/venv_setup.mdx",slug:"/venv-setup",permalink:"/evolve/docs/python-sdk/0.23.0/venv-setup",version:"0.23.0",sidebar:"version-0.23.0/someSidebar",next:{title:"Intellij Setup",permalink:"/evolve/docs/python-sdk/0.23.0/intellij-setup"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Clone Git Repos",id:"clone-git-repos",children:[]},{value:"Setup Virtual Environment",id:"setup-virtual-environment",children:[{value:"evolve-grpc",id:"evolve-grpc",children:[]},{value:"evolve-sdk-python",id:"evolve-sdk-python",children:[]}]}],s={toc:i};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"Python 3.7 or later")),Object(l.a)("h2",{id:"clone-git-repos"},"Clone Git Repos"),Object(l.a)("p",null,"You will need to clone the following repos:"),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"zepben/evolve-sdk-python"),Object(l.a)("li",{parentName:"ol"},"zepben/evolve-grpc")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"  git clone https://github.com/zepben/evolve-sdk-python.git\n  git clone https://github.com/zepben/evolve-grpc.git\n")),Object(l.a)("p",null,Object(l.a)("img",{src:n(457).default})),Object(l.a)("h2",{id:"setup-virtual-environment"},"Setup Virtual Environment"),Object(l.a)("p",null,"Once you have both repos create a virtual environment that will be shared between them. This will allow\nyou use the your local version of the evolve-grpc as a dependency for the evolve-sdk-python instead of having\nto rely on the changes for the evolve-grpc to be finalised and deployed."),Object(l.a)("h3",{id:"evolve-grpc"},"evolve-grpc"),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"Move to the evolve-grpc python directory and run the 'venv' python command to generate a virtual environment. This command will create a directory called .venv where all the files related to the virtual environment will be stored. Remember this directory as we will need it in the future whenever we want to reference this virtual environment.")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"  cd evolve-grpc/python/\n  python -m venv ../../.venv\n")),Object(l.a)("ol",{start:2},Object(l.a)("li",{parentName:"ol"},"Activate the virtual environment you just created.")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source ../../.venv/bin/activate\n")),Object(l.a)("p",null,Object(l.a)("img",{src:n(458).default})),Object(l.a)("ol",{start:3},Object(l.a)("li",{parentName:"ol"},"Install all packages required to build the evolve-grpc repo.")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python -m pip install -r requirements.txt\n")),Object(l.a)("p",null,Object(l.a)("img",{src:n(459).default})),Object(l.a)("ol",{start:4},Object(l.a)("li",{parentName:"ol"},"Run the build.py script in evolve-grpc.")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python build.py\n")),Object(l.a)("p",null,Object(l.a)("img",{src:n(460).default})),Object(l.a)("ol",{start:5},Object(l.a)("li",{parentName:"ol"},"Install the project in editable mode (this will allow you to use the evolve-grpc package locally)")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python -m pip install -e .\n")),Object(l.a)("p",null,Object(l.a)("img",{src:n(461).default})),Object(l.a)("h3",{id:"evolve-sdk-python"},"evolve-sdk-python"),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"Move to the evolve-sdk-python root directory. (Make sure you are still using the same virtual environment)")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ../../evolve-sdk-python/\n")),Object(l.a)("p",null,Object(l.a)("img",{src:n(462).default})),Object(l.a)("ol",{start:2},Object(l.a)("li",{parentName:"ol"},"Install the project in editable mode. This will be useful if we need to use the sdk in the future as a depencency. Note that for this command we also specify we require the test related packages.")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python -m pip install -e .[test]\n")),Object(l.a)("p",null,Object(l.a)("img",{src:n(463).default})),Object(l.a)("ol",{start:3},Object(l.a)("li",{parentName:"ol"},"At this point you should have the virtual environment ready for both repos with all the required packages installed and the zepben.protobuf and zepben.evolve packages installed locally in editable mode. You can confirm this by running the following command:")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python -m pip list\n")),Object(l.a)("p",null,Object(l.a)("img",{src:n(464).default})))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),v=a,b=d["".concat(c,".").concat(v)]||d[v]||u[v]||l;return n?r.a.createElement(b,o({ref:t},s,{components:n})):r.a.createElement(b,o({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},457:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/clone_repos_result-47731ea161442944f6a9b70d798962e8.png"},458:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},459:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install_grpc_requirements-e3f123ff3e4367b471059a7a5c2e34c9.png"},460:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/python_build_grpc-32220696cb8b556b908b21b9e7377e5c.png"},461:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install_grpc_editable_mode-abfa121d8a9bf7b86946b3474daa7bdc.png"},462:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfgAAAAtCAIAAADNzu4AAAAAA3NCSVQICAjb4U/gAAAQJElEQVR4Ae2dd7BVtRaHH5emFAELNhSwjcKIIA/Fxggq6iA6NkCQ4jhiQRnQ56BgVxxAwVEZkaYUwV4YilQRlaYPsIAgKMUCA4J0rOD7rrmGvL2TnH3O2eeefa/r/HFvTnaysvLLysrKSs5eZY499th/yUcQEAQEAUGg9CJQUHq7Jj0TBAQBQUAQKERAFL3IgSAgCAgCpRwBUfSlfICle4KAICAIFCn6Aw44YPjw4bVq1covIrVr1x42bFjFihWjs1FQUPDk359OnTpFrxil5BtvvHHppZdGKZlBmbJly/73r8/XX399zTXXZEDBX8VDP8Z+lSlTpnLlyn5OsnlqpR8X/zfeeKOSnSeeeCLMJEN/6623hvMzy2nduvWrr76aWd0otc4888xYZDUuOppnjxzqMsWQMPHv27dvjx49ctpoTuXW5DzieBUp+meeeebjjz/+/vvvTRLFn163bt2nn346cODA6E0D6FlnnfWfvz5jxoyJXrGYSx5yyCHdu3d/7rnn7rzzzkqVKtH63r17//3XZ+7cublgJtf0Fc9HHnnk22+/nQv+i4H+yJEjleScffbZuetC8VDu1q3bjh07sm8rLjqak+KRQ91cQhK5nhe6mxHHq1DRX3bZZQceeCAWva6cxwSqEJ148cUX55GH2Js+7rjjxo4du2zZsl69ei1fvpw+xt5EvghWq1Ytp03nmr6VeYxQ1uOHH34Yi37o0KFMWmux5GTCITI2b968LFmKi06WbJSC6sUjt9HHq1DRd+7c+emnn04JLn6Vzz77rEKFCqpkuXLlFi1apLw9+E9uvvnm995776OPPsL3cvjhh6sybLGxWbHQFy9ezNOGDRuS76GjasFMlk6Yu+66S3lF+Lty5cr58+cryh4+r7766vHjxy9ZsuT111+vU6eOKs9frp+OGzeO/Ndeew3OU9IJ95cq6PdHHnlk1qxZO3fufPfdd/F1HH300bqJcAKTHy0D23zuv/9+HGu6zAUXXDBhwgSQnz59eocOHVR+3bp1BwwYAMLgzILNSqnLuxIMH14Lc1wo6Wr34IMPZlhh5sMPP8QKPvXUUylco0aN2bNnA87xxx+v0UZFulokH3kI44yGgg0tV2zRUFgMgZ9+Wvxb5dDD5+WXX44bpGXLlqeffvq0adO0PHuqWMeFgcYpRO+mTp16xhlneKpn+QhU33rrrT///DNeOtb54pm/LvmxcuWhY23XSkRlWuWTR1Hw79KlyzvvvON3PyZWbqOPe0GVKlVOOOEEFIcHR/UIvwrW6IUXXqi+nn/++StWrFDeHgwftgW0eu65537yySeDBg3S1Pr374/qpDC6oE+fPuR76KhaOJFQJaZ209QiJlhalFekbdu2e/bs0f44D58dO3aEvSZNmmB3P/XUU7ohJvx9991H/pdffqnzPXTC/UXtotYXLFgATbQYaG/duvWYY47RTYQTaPmaNWu2aNECtJkP6HpVBhhR6I8//ji9Q0DLly+v8tGV+H9atWqFw44c1rkwzUBOz549EV9zXCjgavf2228HxvPOO69Zs2YjRoz47bffKEwvmjdvfscdd3zzzTcKbf6yTw80FPgaxnn16tVffPGF9i/ThQ0bNqxdu9ZPPy3+4SE8LgHGzK8oGvpIX/744w8UKO5E82k47RoXVneWK0Br06ZNlNU3TDliDlOP0YxY2FMsQMcq557565Ifa4seOtZ2rURUplU+eZQSf8alXbt2WLq7d+/20OdRMuU2MF6eLhSgg9avXx/RFnj55ZchrciRwMhVaQ61sFyYmXxFETRo0ECvkHj/0XF4DymMjlPlXXTU03379jHVjzrqKPU1479Vq1aFGZT+woULFREPn+zQ16xZw8TGrseOq169uqpi5jdu3Fjle+iE+8uegAUSapwlsOYhMRggHsuXFY6z2Yceeujnn39G/hBWZFHp9FtuuYXFhu4wXozaqFGjFJPsFTDzwQ3jGr0J/yrf85dtU2BcPO1u3LiR3VjTpk2xu7Hrv/rqKw9l/yMTT40zHdG7k4iymxb/sBQeFw+fgIldwvblgQceiKKgreMCnldddRWL9K5du5B/dnKeFrN5xPq6adOmb7/9Nhsi1A3Tccm5df565MfFmJUOhV3tIifAqD9sLhVlq3ymxB/bFAcd83H79u2Kjos+TxMot+HxUr2w/i2H8ZLSCtM12YE++OCDiD4KESNXWcoHHXQQOY899pheLX766SdcVGqRVNYfFH788Ud9ncZKR7dCAp3lUYVmSVeafqkTZpzjqoyfT02HOzAAgiG2bds2nUlC58NbWv094ogjEEQo9OvX78orrwQcDv1NyoE0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"},463:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install_sdk_editable_mode-fe20425fff92b6651b4bc4ff37a895ad.png"},464:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/list_packages-5e96047e491a54a3ba29eba42518cb78.png"}}]);