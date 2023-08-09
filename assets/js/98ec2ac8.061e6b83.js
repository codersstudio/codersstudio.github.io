"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5},l="\ucf54\ub354\uc2a4 CLI",i={unversionedId:"tutorial-basics/command-cli",id:"tutorial-basics/command-cli",title:"\ucf54\ub354\uc2a4 CLI",description:"\uc8fc\uc694 \uba85\ub839\uc5b4",source:"@site/docs/tutorial-basics/command-cli.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/command-cli",permalink:"/docs/tutorial-basics/command-cli",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"coders.yml \uc124\uc815 \ud30c\uc77c",permalink:"/docs/tutorial-basics/coders-yml"},next:{title:"\ud29c\ud1a0\ub9ac\uc5bc - JSSP",permalink:"/docs/category/\ud29c\ud1a0\ub9ac\uc5bc---jssp"}},c={},s=[{value:"\uc8fc\uc694 \uba85\ub839\uc5b4",id:"\uc8fc\uc694-\uba85\ub839\uc5b4",level:2},{value:"coders init",id:"coders-init",level:3},{value:"coders create",id:"coders-create",level:3},{value:"coders build",id:"coders-build",level:3},{value:"coders platform",id:"coders-platform",level:3},{value:"\ud50c\ub7ab\ud3fc \ub9ac\uc2a4\ud2b8",id:"\ud50c\ub7ab\ud3fc-\ub9ac\uc2a4\ud2b8",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\ucf54\ub354\uc2a4-cli"},"\ucf54\ub354\uc2a4 CLI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"coders 2.0.0.1\nCopyright (C) 2023 coders\n\n  Command       Show usage.\n  init          Create config file.\n  create        Creates the platform basic structure.\n  build         Builds the program source code.\n  platform      Add new platform.\n  export        Export the document.\n  help          Prints the usage.\n")),(0,n.kt)("h2",{id:"\uc8fc\uc694-\uba85\ub839\uc5b4"},"\uc8fc\uc694 \uba85\ub839\uc5b4"),(0,n.kt)("h3",{id:"coders-init"},"coders init"),(0,n.kt)("p",null,"\ucd08\uae30 \uc124\uc815 \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \uba85\ub839\uc5b4\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"coders.yml"),", JSSP \ud30c\uc77c\ub4e4\uacfc \ud544\uc694\ud55c \ud3f4\ub354 \uad6c\uc870\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"coders init\n")),(0,n.kt)("h3",{id:"coders-create"},"coders create"),(0,n.kt)("p",null,"\uac01 \ud50c\ub7ab\ud3fc\uc5d0 \ucef4\ud30c\uc77c\uacfc \ube4c\ub4dc\uc5d0 \ud544\uc694\ud55c \ud30c\uc77c\ub4e4\uc744 \ubcf5\uc0ac\ud574 \uc90d\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"coders create\n")),(0,n.kt)("h3",{id:"coders-build"},"coders build"),(0,n.kt)("p",null,"out \ud3f4\ub354\uc5d0 \uac01 \ud50c\ub7ab\ud3fc \uc18c\uc2a4\ub4e4\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"coders build\n")),(0,n.kt)("h3",{id:"coders-platform"},"coders platform"),(0,n.kt)("p",null,"platform \uba85\ub839\uc5b4\ub85c \uc9c0\uc6d0\ud558\ub294 \ud50c\ub7ab\ud3fc \ubaa9\ub85d\uc744 \ub098\uc5f4\ud558\uac70\ub098, \uc9c0\uc6d0\ud558\ub294 \ud50c\ub7ab\ud3fc\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"coders platform list\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"coders platform add springboot\n")),(0,n.kt)("h2",{id:"\ud50c\ub7ab\ud3fc-\ub9ac\uc2a4\ud2b8"},"\ud50c\ub7ab\ud3fc \ub9ac\uc2a4\ud2b8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"springboot: Spring Boot server platform"),(0,n.kt)("li",{parentName:"ul"},"java: Java language client platform"),(0,n.kt)("li",{parentName:"ul"},"dart: Dart language client platform"),(0,n.kt)("li",{parentName:"ul"},"flutter: Flutter client platform"),(0,n.kt)("li",{parentName:"ul"},"mysql: MySql database platform"),(0,n.kt)("li",{parentName:"ul"},"jmeter: JMeter test platform"),(0,n.kt)("li",{parentName:"ul"},"javascript: Javascript client platform"),(0,n.kt)("li",{parentName:"ul"},"nodejs: NodeJs server platform")))}d.isMDXComponent=!0}}]);