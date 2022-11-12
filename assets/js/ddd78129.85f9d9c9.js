"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={description:"Introducing the Hornet nodes configuration files and their settings.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Configuration","REST API","Dashboard","how to"]},i="Post-installation",s={unversionedId:"how_tos/post_installation",id:"how_tos/post_installation",title:"Post-installation",description:"Introducing the Hornet nodes configuration files and their settings.",source:"@site/iota/external/hornet/production/documentation/docs/how_tos/post_installation.md",sourceDirName:"how_tos",slug:"/how_tos/post_installation",permalink:"/hornet/how_tos/post_installation",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/production/documentation/iota/external/hornet/production/documentation/docs/how_tos/post_installation.md",tags:[],version:"current",frontMatter:{description:"Introducing the Hornet nodes configuration files and their settings.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","Configuration","REST API","Dashboard","how to"]},sidebar:"mySidebar",previous:{title:"Private Tangle",permalink:"/hornet/how_tos/private_tangle"},next:{title:"Managing a Node",permalink:"/hornet/how_tos/managing_a_node"}},l={},p=[{value:"Configuration Files",id:"configuration-files",level:2},{value:"Default Configuration",id:"default-configuration",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Configuring HTTP REST API",id:"configuring-http-rest-api",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-installation"},"Post-installation"),(0,a.kt)("p",null,"Once you have deployed Hornet, you can set all the parameters using configuration files."),(0,a.kt)("h2",{id:"configuration-files"},"Configuration Files"),(0,a.kt)("p",null,"The most important configuration files are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config.json"),": includes all configuration flags and their values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"peering.json"),": includes all connection details to your static peers (neighbors).")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Hornet version 0.5.x targets the legacy IOTA 1.0 network. Hornet version 1.x.x targets the IOTA 1.5 network, also known as ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/welcome"},"Chrysalis"),", which is the focus of this documentation.")),(0,a.kt)("p",null,"Depending on the installation path you selected, default configuration files may also be part of the installation process. So, you may see the following configuration files in your deployment directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"config.json\nconfig_devnet.json\npeering.json\nprofiles.json\n")),(0,a.kt)("h2",{id:"default-configuration"},"Default Configuration"),(0,a.kt)("p",null,"By default, Hornet searches for configuration files in the working directory and expects default names, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"peering.json"),"."),(0,a.kt)("p",null,"You can change this behavior by running Hornet with some altering arguments."),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"/hornet/references/configuration"},"config.json")," and ",(0,a.kt)("a",{parentName:"p",href:"/hornet/explanations/peering"},"peering.json")," articles for more information regarding their respective configuration files."),(0,a.kt)("p",null,"Once you have executed Hornet, it will output all loaded configuration parameters to ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," to show what configuration Hornet actually loaded (omitting sensitive values for things like passwords)."),(0,a.kt)("p",null,"You can see a list of all the other altering command line parameters by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hornet --help\n")),(0,a.kt)("p",null,"If you want a more detailed output you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hornet --help --full\n")),(0,a.kt)("h2",{id:"dashboard"},"Dashboard"),(0,a.kt)("p",null,"By default, an admin dashboard (web interface) plugin is available on port 8081. This provides useful information regarding the node's health, peering/neighbors, overall network health, and consumed system resources."),(0,a.kt)("p",null,"The dashboard plugin only listens on localhost:8081 by default. If you want to make it accessible from the Internet, you will need to change the default configuration. It can be changed using the following ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json{2}"},'"dashboard": {\n  "bindAddress": "localhost:8081",\n  "auth": {\n    "sessionTimeout": "72h",\n    "username": "admin",\n    "passwordHash": "0000000000000000000000000000000000000000000000000000000000000000",\n    "passwordSalt": "0000000000000000000000000000000000000000000000000000000000000000"\n  }\n}\n')),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard.bindAddress")," to either ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0:8081")," to listen on all available interfaces, or the specific interface address accordingly."),(0,a.kt)("p",null,"Even if it is accessible from the Internet, any visitor will still need a valid username and password combination to access the management section of the dashboard."),(0,a.kt)("p",null,"The password, hash, and salt can be generated using the integrated ",(0,a.kt)("inlineCode",{parentName:"p"},"pwd-hash")," CLI tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet tools pwd-hash\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Enter a password:\nRe-enter your password:\nSuccess!\nYour hash: 24c832e35dc542901b90888321dbfc4b1d9617332cbc124709204e6edf7e49f9\nYour salt: 6c71f4753f6fb52d7a4bb5471281400c8fef760533f0589026a0e646bc03acd4\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pwd-hash")," tool outputs the ",(0,a.kt)("inlineCode",{parentName:"p"},"passwordHash")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"passwordSalt")," based on your input password.")),(0,a.kt)("p",null,"Copy both values to their corresponding configuration options: ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard.auth.passwordHash")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard.auth.passwordSalt")," respectively."),(0,a.kt)("p",null,"For the new password to take effect, you must restart Hornet."),(0,a.kt)("h2",{id:"configuring-http-rest-api"},"Configuring HTTP REST API"),(0,a.kt)("p",null,"One of the tasks the the node is responsible for is exposing the ",(0,a.kt)("a",{parentName:"p",href:"/hornet/explanations/nodes_101#http-rest-api"},"HTTP REST ")," to clients that would like to interact with the IOTA network, such as crypto wallets, exchanges, IoT devices, etc."),(0,a.kt)("p",null,"By default, Hornet will publicly expose the ",(0,a.kt)("a",{parentName:"p",href:"/hornet/explanations/nodes_101#http-rest-api"},"HTTP REST ")," on port 14265, as it is ready to accept incoming connections from the Internet."),(0,a.kt)("p",null,"Since offering the HTTP REST API to the public can consume your node's resources, there are options to restrict which routes can be called and other request limitations."),(0,a.kt)("p",null,"You can find the HTTP REST API related options in the ",(0,a.kt)("inlineCode",{parentName:"p"},"restAPI")," section within the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "restAPI": {\n    "jwtAuth": {\n      "salt": "HORNET"\n    },\n    "publicRoutes": [\n      "/health",\n      "/mqtt",\n      "/api/v1/info",\n      "/api/v1/tips",\n      "/api/v1/messages*",\n      "/api/v1/transactions*",\n      "/api/v1/milestones*",\n      "/api/v1/outputs*",\n      "/api/v1/addresses*",\n      "/api/v1/treasury",\n      "/api/v1/receipts*"\n    ],\n    "protectedRoutes": [\n      "/api/v1/*",\n      "/api/plugins/*"\n    ],\n    "bindAddress": "0.0.0.0:14265",\n    "powEnabled": true,\n    "powWorkerCount": 1,\n    "limits": {\n      "bodyLength": "1M",\n      "maxResults": 1000\n    }\n  }\n')),(0,a.kt)("p",null,"If you want to make the HTTP REST API only accessible from localhost, you change the ",(0,a.kt)("inlineCode",{parentName:"p"},"restAPI.bindAddress")," config option accordingly."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"restAPI.publicRoutes")," defines which routes can be called without JWT authorization. ",(0,a.kt)("inlineCode",{parentName:"p"},"restAPI.protectedRoutes")," defines which routes require JWT authorization. All other routes will not be exposed."),(0,a.kt)("p",null,"If you are concerned with resource consumption, consider turning off ",(0,a.kt)("inlineCode",{parentName:"p"},"restAPI.powEnabled"),". This way, the clients must perform proof of work locally before submitting a message for broadcast. If you would like to offer proof of work to clients, consider increasing the ",(0,a.kt)("inlineCode",{parentName:"p"},"restAPI.powWorkerCount")," to provide a faster message submission experience."),(0,a.kt)("p",null,"We recommend that you provide your HTTP REST API behind a reverse proxy, such as ",(0,a.kt)("a",{parentName:"p",href:"http://www.haproxy.org/"},"HAProxy"),", ",(0,a.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache")," configured with TLS."),(0,a.kt)("p",null,"Please see some of our additional security recommendations in our ",(0,a.kt)("a",{parentName:"p",href:"/hornet/explanations/security_101"},"Security 101 article"),"."),(0,a.kt)("p",null,"You can explore more details regarding different API calls at the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/libraries/client"},"IOTA client library documentation"),"."))}u.isMDXComponent=!0}}]);