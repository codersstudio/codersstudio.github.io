"use strict";(self.webpackChunkcoders=self.webpackChunkcoders||[]).push([[163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>j});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,j=u["".concat(l,".").concat(d)]||u[d]||f[d]||s;return n?r.createElement(j,o(o({ref:t},p),{},{components:n})):r.createElement(j,o({ref:t},p))}));function j(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:3},o="JSSP project structure",a={unversionedId:"tutorial-basics/project-structure",id:"tutorial-basics/project-structure",title:"JSSP project structure",description:"Folder structure",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial-basics/project-structure.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/project-structure",permalink:"/en/docs/tutorial-basics/project-structure",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create project",permalink:"/en/docs/tutorial-basics/create-a-project"},next:{title:"coders.yml configuration file",permalink:"/en/docs/tutorial-basics/coders-yml"}},l={},c=[{value:"Folder structure",id:"folder-structure",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jssp-project-structure"},"JSSP project structure"),(0,i.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,i.kt)("p",null,"When you first run the ",(0,i.kt)("inlineCode",{parentName:"p"},"coders init")," command, JSSP files are created and the file structure is as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 coders.yml            # coders platform configuration file\n\u251c\u2500\u2500 constants.jssp        # constant definition\n\u251c\u2500\u2500 errors.jssp           # error code definition\n\u251c\u2500\u2500 externals.jssp        # external library definition\n\u251c\u2500\u2500 flutter.jssp          # Flutter Widget class definition\n\u251c\u2500\u2500 main.jssp             # Refer to the first entry jssp coders.yml file\n\u251c\u2500\u2500 properties.jssp       # settings definition file\n\u251c\u2500\u2500 strings.jssp          # i18n definition file\n\u251c\u2500\u2500 type.jssp             # domain data type definition file\n\u2502   \n\u251c\u2500\u2500 classes\n\u2502   \u251c\u2500\u2500 hello.jssp        # class sample file\n\u2502   \u2514\u2500\u2500 testapi.jssp      # class sample file\n\u2502       \n\u251c\u2500\u2500 controllers\n\u2502   \u251c\u2500\u2500 auth\n\u2502   \u2502   \u251c\u2500\u2500 auth.jssp     # User Auth related API definition\n\u2502   \u2502   \u251c\u2500\u2500 login.jssp    # define login api\n\u2502   \u2502   \u251c\u2500\u2500 loginAuto.jssp # Auto login api definition\n\u2502   \u2502   \u251c\u2500\u2500 logout.jssp   # logout api definition\n\u2502   \u2502   \u2514\u2500\u2500 register.jssp # Member registration api definition\n\u2502   \u2502       \n\u2502   \u2514\u2500\u2500 user\n\u2502       \u251c\u2500\u2500 profile.jssp  # user profile api definition file\n\u2502       \u2514\u2500\u2500 uploadProfileImage.jssp # profile file upload api definition file\n\u2502           \n\u251c\u2500\u2500 entities\n\u2502   \u2514\u2500\u2500 entities.jssp     # Database entity class definition\n\u2502       \n\u251c\u2500\u2500 queries\n\u2502   \u2514\u2500\u2500 queries.jssp      # query definition\n\u2502       \n\u251c\u2500\u2500 schema\n\u2502   \u2514\u2500\u2500 table.jssp        # database table definition\n\u2502       \n\u251c\u2500\u2500 stores\n\u2502   \u2514\u2500\u2500 stores.jssp       # Frontend Local Storage definition file\n\u2502       \n\u251c\u2500\u2500 structs\n\u2502   \u2514\u2500\u2500 structs.jssp      # struct class definition file\n\u2502       \n\u2514\u2500\u2500 widgets\n    \u251c\u2500\u2500 LoginPage.jssp    # Login screen definition file\n    \u251c\u2500\u2500 RegisterPage.jssp # Member registration screen definition file\n    \u251c\u2500\u2500 SplashPage.jssp   # Splash screen definition file\n    \u251c\u2500\u2500 widgets.jssp      # jssp file list definition file\n    \u2502   \n    \u2514\u2500\u2500 main\n        \u2514\u2500\u2500 MainPage.jssp # Main screen definition file after login\n")),(0,i.kt)("p",null,"These structured files and folders help keep JSSP projects organized and efficient development."))}f.isMDXComponent=!0}}]);