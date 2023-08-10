"use strict";(self.webpackChunkcoders=self.webpackChunkcoders||[]).push([[4146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},s="Explore JSSP syntax",o={unversionedId:"tutorial-jssp/jssp_intro",id:"tutorial-jssp/jssp_intro",title:"Explore JSSP syntax",description:"JSSP syntax is translated into source code for various platforms, so there are more types than common programming languages. However, despite this complexity, the structure is designed to be intuitive and easy to learn.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial-jssp/jssp_intro.md",sourceDirName:"tutorial-jssp",slug:"/tutorial-jssp/jssp_intro",permalink:"/en/docs/tutorial-jssp/jssp_intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud29c\ud1a0\ub9ac\uc5bc - JSSP",permalink:"/en/docs/category/\ud29c\ud1a0\ub9ac\uc5bc---jssp"},next:{title:"@ grammar",permalink:"/en/docs/tutorial-jssp/jssp_at_syntax"}},l={},d=[{value:"Domain Definition",id:"domain-definition",level:2},{value:"Table design",id:"table-design",level:3},{value:"UserDetail entity definition",id:"userdetail-entity-definition",level:3},{value:"Define the selectUser query",id:"define-the-selectuser-query",level:3},{value:"HTTP request and response codes",id:"http-request-and-response-codes",level:2},{value:"Error definition",id:"error-definition",level:3},{value:"Struct definition",id:"struct-definition",level:3},{value:"Opcode definition",id:"opcode-definition",level:3},{value:"Definition of Request and Response",id:"definition-of-request-and-response",level:3},{value:"Write Handler",id:"write-handler",level:3},{value:"Flutter development",id:"flutter-development",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"explore-jssp-syntax"},"Explore JSSP syntax"),(0,a.kt)("p",null,"JSSP syntax is translated into source code for various platforms, so there are more types than common programming languages. However, despite this complexity, the structure is designed to be intuitive and easy to learn."),(0,a.kt)("h2",{id:"domain-definition"},"Domain Definition"),(0,a.kt)("p",null,"Domain is a type for databases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"domain Email varchar(32);\ndomain Nickname varchar(128);\ndomain UserID bigint;\ndomain Url varchar(1024);\n")),(0,a.kt)("p",null,"The domain type can be used to design databases and write queries."),(0,a.kt)("h3",{id:"table-design"},"Table design"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"table User {\n user_id UserID auto;\n email   Email;\n nickname Nickname;\n profile_url Url;\n create_at Datetime;\n key(user_id);\n unique index(email);\n index(nickname);\n}\n")),(0,a.kt)("p",null,'The snippet above defines the "User" table using JSSP syntax. It contains the following columns:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),": It is a UserID type and is set to auto increment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email"),": Stores email addresses of type Email."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nickname"),": Stores the user's nickname of type Nickname."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profile_url"),": Stores the profile URL of the Url type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create_at"),": Stores the creation date and time of the Datetime type.")),(0,a.kt)("p",null,"And we have the following constraints and indexes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id")," as the primary key."),(0,a.kt)("li",{parentName:"ul"},"Create a unique index for ",(0,a.kt)("inlineCode",{parentName:"li"},"email")," to avoid duplicates of the same email address."),(0,a.kt)("li",{parentName:"ul"},"Creates a generic index for ",(0,a.kt)("inlineCode",{parentName:"li"},"nickname"),", allowing quick searches based on nicknames.")),(0,a.kt)("p",null,"This definition can be used to create database tables or write queries, and can be ",(0,a.kt)("strong",{parentName:"p"},"translated according to the specific database system"),"."),(0,a.kt)("h3",{id:"userdetail-entity-definition"},"UserDetail entity definition"),(0,a.kt)("p",null,"In JSSP, entities define the data structures used to perform CRUD operations on a database. Below is an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"UserDetail")," entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"entity UserDetail {\n  userId UserID;\n  email Email;\n  nickname Nickname;\n  profileUrl Url;\n  createAt Datetime;\n}\n")),(0,a.kt)("p",null,"This entity contains the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userId"),": UserID Indicates the user ID of the domain type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email"),": Email Indicates the user's email address of the domain type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nickname"),": Nickname Indicates the user's nickname of the domain type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profileUrl"),": Url Indicates the user's profile URL of domain type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createAt"),": Datetime Indicates the creation date and time of the user account of the domain type.")),(0,a.kt)("p",null,"This entity can be used in certain queries to get user details."),(0,a.kt)("h3",{id:"define-the-selectuser-query"},"Define the selectUser query"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"selectUser")," query is used to select a user's details based on a specific user ID. This query is translated into executable code for each platform. For example, in Spring Boot it translates to XML, in other languages \u200b\u200bit translates to code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"query selectUser(userId UserID) UserDetail {\n  select user_id as userId,\n    email,\n    nickname,\n    profile_url as profileUrl;\n    create_at as createAt\n  from user\n  where user_id = :userId;\n}\n")),(0,a.kt)("p",null,"This query takes the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userId"),": Indicates the user ID of the UserID type.")),(0,a.kt)("p",null,"The return value will be as defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"UserDetail")," entity."),(0,a.kt)("h2",{id:"http-request-and-response-codes"},"HTTP request and response codes"),(0,a.kt)("h3",{id:"error-definition"},"Error definition"),(0,a.kt)("p",null,"The method of defining error codes used in coders is as follows. These error code definitions are very strong in terms of maintenance because you can know which error code is returned through the API specification document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"define error {\n   Success 0 'success'\n   Failed   1 'failure'\n}\n")),(0,a.kt)("h3",{id:"struct-definition"},"Struct definition"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," is a data type used in requests and responses. When converting to each platform, it automatically writes JSON serialization code for each platform, reducing the hassle of writing serialization code. The ",(0,a.kt)("inlineCode",{parentName:"p"},"UserInfo")," structure contains information such as the user's ID, email, and nickname."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"struct UserInfo {\n  userId UserID;\n  email Email;\n  nickname Nickname;\n}\n")),(0,a.kt)("h3",{id:"opcode-definition"},"Opcode definition"),(0,a.kt)("p",null,"This code defines an HTTP GET request to receive user information. A 'User' specified as a 'controller' is converted to a controller in the MVC pattern on the server backend. Also, the request URL is constructed based on the path set as ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"define opcode[controller=User, baseUrl=\"/api/v1\"] {\n  [method=get, action='/user', noauth]\n  getUser 100 'Receive user information'\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"getUser")," operation defined in this way is responsible for receiving user information by receiving a GET request through the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/user")," path. The ",(0,a.kt)("inlineCode",{parentName:"p"},"noauth")," option indicates that this request does not require authentication."),(0,a.kt)("h3",{id:"definition-of-request-and-response"},"Definition of Request and Response"),(0,a.kt)("p",null,"This code defines a request (",(0,a.kt)("inlineCode",{parentName:"p"},"req"),") and response (",(0,a.kt)("inlineCode",{parentName:"p"},"res"),") to fetch user information. It handles requests and responses with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"getUser"),", receives an email (",(0,a.kt)("inlineCode",{parentName:"p"},"email"),") as an argument in the request, and returns user information (",(0,a.kt)("inlineCode",{parentName:"p"},"userInfo"),") in the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"req getUser {\n  email Email;\n}\n\nres getUser {\n userInfo UserInfo;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," keyword defines request data, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," keyword defines response data. Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"userInfo")," uses the previously defined ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," type, and can contain information such as the user's ID, email, and nickname."),(0,a.kt)("h3",{id:"write-handler"},"Write Handler"),(0,a.kt)("p",null,"The code below defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"getUser")," handler to get user information. This code is converted into source code for each platform, and after verifying the request object, the user's detailed information is fetched through a query and set in the response object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"handler getUser {\n  func execute(req @req) (res @res) {\n     if(req.invalid()) {\n        res.code = @error.Failed;\n        return;\n     }\n\n     var userDetail = @query.selectUser(req.email);\n     res.userInfo = UserInfo();\n     res.userInfo.set(userDetail);\n     res.code = @error.Success;\n     return;\n  }\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Request Validation:")," If the request object is invalid, set and return Failed(",(0,a.kt)("inlineCode",{parentName:"li"},"@error.Failed"),") as the response code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Query user information:")," Retrieve detailed user information through ",(0,a.kt)("inlineCode",{parentName:"li"},"@query.selectUser(req.email)"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Response Settings:")," Set the response object's 'userInfo' field to a new 'UserInfo' object, and set the fetched user details."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Success response:")," Finally set success (",(0,a.kt)("inlineCode",{parentName:"li"},"@error.Success"),") as the response code and return.")),(0,a.kt)("p",null,"The code written in this way is converted into source code for each platform, providing compatibility between platforms and increasing the convenience of development."),(0,a.kt)("h3",{id:"flutter-development"},"Flutter development"),(0,a.kt)("p",null,"You can develop Flutter apps with JSSP syntax, which has the following characteristics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Interface provided"),": The widget code provided by Flutter is defined as an interface in JSSP in advance and provided as ",(0,a.kt)("inlineCode",{parentName:"li"},"flutter.jssp")," file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexible Syntax"),": JSSP improves the readability of the code by allowing named parameters separated by ',' in the Dart language to be separated by ';'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backend and frontend integration"),": JSSP is a language that can be used on both the backend and frontend, allowing you to directly use the API defined by the API design. Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"@api.login"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@req.login")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bloc pattern support"),": Integrates with the Bloc pattern used by Flutter, simplifying the code to communicate with the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Improve Productivity"),": By integrating the above features, you can focus only on screens and logic when writing Flutter code and increase your productivity.")),(0,a.kt)("p",null,"These features make Flutter app development more effective for developers, reducing the complexity of the code and making it easier to maintain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[statefull]\nwidget SplashPage {\n\n  func initState() {\n    var accessToken = @store.app.accessToken;\n    if(accessToken != null && accessToken != \"\") {\n      @api.accessToken = accessToken;\n      var req = @req.loginAuto();\n      @api.send(req);\n    } else {\n      // goto login page\n      @console.log('goto login page');\n      Future.delayed(Duration(seconds: 1), () {\n        @router.pushReplacement(LoginPage());\n      });\n    }\n  }\n\n  func build(context BuildContext) widget {\n    return BlocConsumer<@api.bloc, @api.state> {\n      listener: (context, state) {\n        if(state is @api.login.state) {\n          var res = state.response;\n          if(res.code == @error.Success) {\n            @api.accessToken = res.accessToken;\n            var userInfo = res.userInfo;\n          }\n        } else if(state is @api.loginAuto.state) {\n          var res = state.response;\n          if(res.code == @error.Success) {\n            var userInfo = res.userInfo;\n          }\n        }\n      } // listener\n      builder: (context, state) {\n        return buildBody(context);\n      } // builder\n    } // BlocConsumer\n  }\n\n  func buildBody(context BuildContext) widget {\n    return Scaffold {\n      body: Center {\n        child: Text('SplashPage');\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,"The code above shows an example of using stateful widgets in Flutter. The ",(0,a.kt)("inlineCode",{parentName:"p"},"SplashPage")," widget contains the logic to move to the appropriate page by checking the login status on the app's start screen."))}c.isMDXComponent=!0}}]);