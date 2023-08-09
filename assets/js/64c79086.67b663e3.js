"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},l="\ub370\uc774\ud130 \ud0c0\uc785",o={unversionedId:"tutorial-jssp/datatype",id:"tutorial-jssp/datatype",title:"\ub370\uc774\ud130 \ud0c0\uc785",description:"JSSP \ub370\uc774\ud130 \ud0c0\uc785\uc740 \uc77c\ubc18 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc758 \ub370\uc774\ud130 \ud0c0\uc785\ubcf4\ub2e4 \ub9ce\uc740 \ud0c0\uc785\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \ud06c\uac8c domain \ud0c0\uc785, \uc6d0\uc2dc \ub370\uc774\ud130 \ud0c0\uc785, generic \ud0c0\uc785\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4.",source:"@site/docs/tutorial-jssp/datatype.md",sourceDirName:"tutorial-jssp",slug:"/tutorial-jssp/datatype",permalink:"/docs/tutorial-jssp/datatype",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JSSP \ubb38\ubc95 \uc0b4\ud3b4\ubcf4\uae30",permalink:"/docs/tutorial-jssp/jssp_intro"},next:{title:"Struct \ud0c0\uc785",permalink:"/docs/tutorial-jssp/datatype-struct"}},p={},c=[{value:"Domain",id:"domain",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"\uc0c1\uc218 \ud0c0\uc785",id:"\uc0c1\uc218-\ud0c0\uc785",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",level:3},{value:"\uc6d0\uc2dc \ub370\uc774\ud130 \ud0c0\uc785",id:"\uc6d0\uc2dc-\ub370\uc774\ud130-\ud0c0\uc785",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-2",level:3},{value:"generic \ud0c0\uc785",id:"generic-\ud0c0\uc785",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-3",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ub370\uc774\ud130-\ud0c0\uc785"},"\ub370\uc774\ud130 \ud0c0\uc785"),(0,a.kt)("p",null,"JSSP \ub370\uc774\ud130 \ud0c0\uc785\uc740 \uc77c\ubc18 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc758 \ub370\uc774\ud130 \ud0c0\uc785\ubcf4\ub2e4 \ub9ce\uc740 \ud0c0\uc785\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \ud06c\uac8c domain \ud0c0\uc785, \uc6d0\uc2dc \ub370\uc774\ud130 \ud0c0\uc785, generic \ud0c0\uc785\uc73c\ub85c \ub098\ub269\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"domain"},"Domain"),(0,a.kt)("p",null,"JSSP\uc5d0\uc11c\uc758 Domain \ub370\uc774\ud130 \ud0c0\uc785\uc740 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ud0c0\uc785\uc73c\ub85c, \uc77c\ubc18\uc801\uc778 \ub370\uc774\ud130 \ud0c0\uc785\uacfc\ub294 \uad6c\ubd84\ub429\ub2c8\ub2e4. Domain \ud0c0\uc785\uc740 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ud0c0\uc785\uc774\ubbc0\ub85c \ub370\uc774\ud130\ub97c \uc880 \ub354 \uc5c4\uaca9\ud558\uac8c \uad6c\ubd84\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 integer, bigint, varchar(32), char(32), double, float \ub4f1\uacfc \uac19\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"Domain \ub370\uc774\ud130 \ud0c0\uc785\uc740 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub418\ub294 \ub370\uc774\ud130\ub4e4\uc744 \uc5c4\uaca9\ud558\uac8c \uad6c\ubd84\ud574\uc57c \ud558\ubbc0\ub85c JSSP\uc5d0\uc11c\ub294 domain\uc774\ub77c\ub294 \ud0c0\uc785\uc73c\ub85c \uc815\uc758\ud558\uc600\uace0, entity \ud074\ub798\uc2a4 \ud0c0\uc785\uacfc \ucffc\ub9ac \ubb38\ubc95\uc5d0 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[comment='User ID']\ndomain UserID varchar(32);\n\n[comment='User Password']\ndomain Password varchar(512);\n\n[comment=\"Item type\"]\ndomain ItemType integer;\n\n[comment=\"Item Id\"]\ndomain ItemID bigint;\n\n[comment='User Email']\ndomain Email varchar(128);\n\n[comment='User Nickname']\ndomain AccessToken varchar(512);\n")),(0,a.kt)("p",null,"\uc704 \uc608\uc2dc\uc5d0\uc11c\ub294 \uc5ec\ub7ec \uac00\uc9c0 Domain \ub370\uc774\ud130 \ud0c0\uc785\uc744 \uc815\uc758\ud558\uace0 \uc788\uc73c\uba70, \uac01\uac01\uc758 Domain\uc740 \ud2b9\uc815 \uc0ac\uc6a9\uc790\ub098 \uc544\uc774\ud15c\uacfc \uad00\ub828\ub41c \uc815\ubcf4\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc815\uc758\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640\uc758 \uc0c1\ud638 \uc791\uc6a9\uc744 \ubcf4\ub2e4 \uba85\ud655\ud558\uac8c \ud560 \uc218 \uc788\uc73c\uba70, \ucf54\ub4dc\uc758 \uac00\ub3c5\uc131\ub3c4 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc0c1\uc218-\ud0c0\uc785"},"\uc0c1\uc218 \ud0c0\uc785"),(0,a.kt)("p",null,"\uc0c1\uc218\ub294 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \ubcc0\ud558\uc9c0 \uc54a\ub294 \uac12\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc0c1\uc218\ub294 \uc2dd\ubcc4 \uac00\ub2a5\ud55c \uc774\ub984\uc744 \uac00\uc9c0\uba70, \uac00\ub3c5\uc131\uc744 \ub192\uc774\uace0 \uc758\ubbf8\ub97c \uba85\ud655\ud788 \ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc0c1\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, \uc0c1\uc218\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[comment='Android type']\nconstant DeviceTypeAndroid = 1;\n\n[comment='iOS type']\nconstant DeviceTypeIos = 2;\n")),(0,a.kt)("p",null,"\uc704 \uc608\uc2dc\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"DeviceTypeAndroid"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"DeviceTypeIos"),"\ub77c\ub294 \ub450 \uac1c\uc758 \uc0c1\uc218\ub97c \uc815\uc758\ud558\uace0 \uc788\uc73c\uba70, \uac01\uac01\uc758 \uac12\uc73c\ub85c 1\uacfc 2\ub97c \ud560\ub2f9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc0c1\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ucf54\ub4dc \ub0b4\uc5d0\uc11c \ub9c8\ubc95 \uc22b\uc790\ub97c \ud53c\ud558\uace0 \ucf54\ub4dc\uc758 \uc758\ubbf8\ub97c \uba85\ud655\ud788 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0c1\uc218 \uc815\uc758\ub294 \ucf54\ub4dc\uc758 \uc7ac\uc0ac\uc6a9\uc131\uacfc \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc6d0\uc2dc-\ub370\uc774\ud130-\ud0c0\uc785"},"\uc6d0\uc2dc \ub370\uc774\ud130 \ud0c0\uc785"),(0,a.kt)("p",null,"JSSP\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc6d0\uc2dc \ub370\uc774\ud130 \ud0c0\uc785\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"char: \ubb38\uc790 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"int16: 16\ube44\ud2b8 \uc815\uc218 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"int32: 32\ube44\ud2b8 \uc815\uc218 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"int4: 4\ube44\ud2b8 \uc815\uc218 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"float: \uc2e4\uc218 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"double: \ubc30\uc815\ubc00\ub3c4 \uc2e4\uc218 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"string: \ubb38\uc790\uc5f4 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"file: \ud30c\uc77c\uc744 \ub2e4\ub8e8\uae30 \uc704\ud55c \ud2b9\ubcc4\ud55c \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"formfile: HTTP \uc0c1\uc5d0\uc11c \ud30c\uc77c\uc744 \uc804\uc1a1\ud558\uae30 \uc704\ud55c \ud2b9\ubcc4\ud55c \ud0c0\uc785. API \ub514\uc790\uc778 \uc2dc FormFile \ud074\ub798\uc2a4\ub85c \ubcc0\ud658\ub428")),(0,a.kt)("h3",{id:"\uc608\uc2dc-2"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"file myFile;\nformfile uploadFile;\n")),(0,a.kt)("h2",{id:"generic-\ud0c0\uc785"},"generic \ud0c0\uc785"),(0,a.kt)("p",null,"JSSP\uc5d0\uc11c\ub294 \uceec\ub809\uc158\uc744 \ub2e4\ub8e8\uae30 \uc704\ud55c generic \ud0c0\uc785\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"list: \uc21c\uc11c\uac00 \uc788\ub294 \ub9ac\uc2a4\ud2b8 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"set: \uc911\ubcf5\uc774 \uc5c6\ub294 \uc9d1\ud569 \ud0c0\uc785"),(0,a.kt)("li",{parentName:"ul"},"map: \ud0a4-\uac12 \uc30d\uc744 \uc800\uc7a5\ud558\ub294 \ub9f5 \ud0c0\uc785")),(0,a.kt)("h3",{id:"\uc608\uc2dc-3"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"list<int32> numbers;\nmap<string, int32> keyValuePairs;\n")),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \ub370\uc774\ud130 \ud0c0\uc785\uc740 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uba74\uc11c \ub2e4\uc591\ud55c \ub370\uc774\ud130 \uad6c\uc870\uc640 \uc54c\uace0\ub9ac\uc998\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uad6c\ud604\ud558\ub294 \ub370 \ud544\uc694\ud55c \ub3c4\uad6c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);