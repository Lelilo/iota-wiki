"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[55979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"The wallet library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions.",image:"/img/Banner/banner_client_lib_overview.png",keywords:["layered overview","high level","low level","stronghold","value transactions","explanation"]},i="Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"The wallet library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions.",source:"@site/iota/external/iota.rs/production/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/iota.rs/overview",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/overview.md",tags:[],version:"current",frontMatter:{description:"The wallet library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions.",image:"/img/Banner/banner_client_lib_overview.png",keywords:["layered overview","high level","low level","stronghold","value transactions","explanation"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/iota.rs/welcome"},next:{title:"Getting Started",permalink:"/iota.rs/getting_started/required_prior_knowledge"}},l={},p=[{value:"Supported Languages",id:"supported-languages",level:2},{value:"Your Application In the IOTA Network",id:"your-application-in-the-iota-network",level:2},{value:"API Design",id:"api-design",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IOTA Client Library Overview",src:n(97031).Z,width:"862",height:"200"})),(0,r.kt)("p",null,"The iota.rs library is designed to simplify how you connect and interact\nwith ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/node_software"},"nodes")," in the IOTA network. You can use it to generate\naddresses, send messages, sign and send transactions, and more."),(0,r.kt)("p",null,"Beyond establishing the initial connection to a node, iota.rs has no state. Operations use only the data you pass during\na call and have no effect on your software beyond returning a value. You are in complete control of the data flow in\nyour application."),(0,r.kt)("p",null,"This stateless approach makes iota.rs easy to use and understand. But since you are in full control of data management,\nyou are also fully responsible for it, which could feel overwhelming if you handle complex or sensitive data. If you\nplan on managing funds in your application, take a look at\nour ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs library")," instead. It allows you to manage your user's funds\nsafely, and it already includes our best security practices. It\nuses ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},"stronghold.rs")," to store sensitive data and iota.rs to communicate\nwith the IOTA network and, unlike iota.rs, it has a state."),(0,r.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,r.kt)("p",null,"We implemented the iota.rs library in ",(0,r.kt)("a",{parentName:"p",href:"getting_started/rust"},"Rust")," and prepared bindings\nfor ",(0,r.kt)("a",{parentName:"p",href:"getting_started/nodejs"},"JavaScript"),", ",(0,r.kt)("a",{parentName:"p",href:"getting_started/python"},"Python"),"\n, ",(0,r.kt)("a",{parentName:"p",href:"getting_started/java/getting_started"},"Java"),", and ",(0,r.kt)("a",{parentName:"p",href:"getting_started/wasm"},"Wasm"),". Every binding is adjusted for the\nlanguage's conventions and best practices. For example, Python developers avoid the Builder programming pattern, so our\nPython binding uses named constructor arguments. However, we never change the meaning behind our API, which is equally\npowerful no matter which language you choose."),(0,r.kt)("h2",{id:"your-application-in-the-iota-network"},"Your Application In the IOTA Network"),(0,r.kt)("p",null,"Your application communicates with iota.rs either directly in Rust or through one of the language bindings. The iota.rs\nlibrary turns your requests into REST API calls and sends them to a node through the Internet. The node, in turn,\ninteracts with the rest of an IOTA network, which could be\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/mainnet"},"main operational network (mainnet)")," or\na ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/devnet"},"network for testing purposes (devnet)"),"."),(0,r.kt)("p",null,"Different nodes can run on different software, but they always expose the same interface to clients. For example, one\nnode could be a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/welcome"},"Hornet")," node, and the other could be\na ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/bee/welcome"},"Bee")," node, and they both would appear the same for any client."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A diagram that illustrates the text above. It has three layers: the application layer that includes iota.rs and its bindings, communication layer (the Internet network), and IOTA network layer with nodes that operate on one of the IOTA networks.",src:n(91737).Z,title:"An overview of IOTA layers.",width:"862",height:"452"})),(0,r.kt)("h2",{id:"api-design"},"API Design"),(0,r.kt)("p",null,"The iota.rs library exposes operations of two types. Clients interact with nodes by calling their REST API, and the\nfirst group of operations mirrors the available calls. When your program invokes such an operation, it directly\ntranslates it into a REST call to a node. See\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/0026-rest-api.yaml"},"node's REST API reference"),"\nfor a complete list of available endpoints."),(0,r.kt)("p",null,"Operations from the first group tend to be too atomic and basic to use conveniently. The second group provides you with\nhigher-level helper functions. These functions represent an actual task and combine multiple basic operations\ninternally. For example, you can get your token balance by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getBalance"),". It will first call ",(0,r.kt)("inlineCode",{parentName:"p"},"getAddresses"),", then\ncall ",(0,r.kt)("inlineCode",{parentName:"p"},"getAddressBalances")," for each address, and add the results together to return the total balance. See\nthe ",(0,r.kt)("a",{parentName:"p",href:"./specs"},"full specification")," for details."))}d.isMDXComponent=!0},97031:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner_client_lib_overview-9072388b495cad60b6265c5ce10625d0.png"},91737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/layered_overview-301744b3b835f4f09ae40dfa09ac564f.svg"}}]);