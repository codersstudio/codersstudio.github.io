"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},c="coders.yml \uc124\uc815 \ud30c\uc77c",s={unversionedId:"tutorial-basics/coders-yml",id:"tutorial-basics/coders-yml",title:"coders.yml \uc124\uc815 \ud30c\uc77c",description:"coders.yml \ud30c\uc77c\uc740 \ud504\ub85c\uc81d\ud2b8\uc758 \uc804\ubc18\uc801\uc778 \uc124\uc815\uc744 \ub2f4\uace0 \uc788\uc73c\uba70, \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\uc131\ub429\ub2c8\ub2e4.",source:"@site/docs/tutorial-basics/coders-yml.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/coders-yml",permalink:"/docs/tutorial-basics/coders-yml",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JSSP \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870",permalink:"/docs/tutorial-basics/project-structure"},next:{title:"\ucf54\ub354\uc2a4 CLI",permalink:"/docs/tutorial-basics/command-cli"}},i={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"codersyml-\uc124\uc815-\ud30c\uc77c"},"coders.yml \uc124\uc815 \ud30c\uc77c"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"coders.yml")," \ud30c\uc77c\uc740 \ud504\ub85c\uc81d\ud2b8\uc758 \uc804\ubc18\uc801\uc778 \uc124\uc815\uc744 \ub2f4\uace0 \uc788\uc73c\uba70, \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'author: "coders.ceo@gmail.com"\nversion: "1.0.0"\nentry: "./main.jssp"\nprojectName: "Demo"\nprojects:\n- name: "dart project"\n  platform: "dart"\n  outPath: "./out/dart"\n  configs: {}\n- name: "javascript project"\n  platform: "javascript"\n  outPath: "./out/javascript"\n  configs: {}\n- name: "springboot project"\n  platform: "springboot"\n  outPath: "./out/springboot"\n  configs:\n    package: "com.coders.demo"\n- name: "nodejs project"\n  platform: "nodejs"\n  outPath: "./out/nodejs"\n  configs: {}\n- name: "flutter project"\n  platform: "flutter"\n  outPath: "./out/flutter"\n  configs:\n    package: "com.coders.demo"\n- name: "java project"\n  platform: "java"\n  outPath: "./out/java"\n  configs:\n    package: "com.coders.demo"\n- name: "mysql project"\n  platform: "mysql"\n  outPath: "./out/mysql"\n  configs: {}\n')))}m.isMDXComponent=!0}}]);