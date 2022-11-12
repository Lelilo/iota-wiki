"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[94489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Get started with the IOTA Wallet Library and choose your programming language.",image:"/img/logo/wallet_light.png",keywords:["rust","node.js","python","java","javascript","wallet","accounts"]},i="Getting Started",l={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",title:"Getting Started",description:"Get started with the IOTA Wallet Library and choose your programming language.",source:"@site/next/external/wallet.rs/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/next/wallet.rs/getting_started/",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/getting_started/getting_started.md",tags:[],version:"current",frontMatter:{description:"Get started with the IOTA Wallet Library and choose your programming language.",image:"/img/logo/wallet_light.png",keywords:["rust","node.js","python","java","javascript","wallet","accounts"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/next/wallet.rs/welcome"},next:{title:"Getting Started with Node.js",permalink:"/next/wallet.rs/getting_started/nodejs"}},s={},p=[{value:"Choose Your Programming Language",id:"choose-your-programming-language",level:2},{value:"Connect to the Testnet API",id:"connect-to-the-testnet-api",level:2},{value:"Explore the Network",id:"explore-the-network",level:2},{value:"Get Test Tokens",id:"get-test-tokens",level:2}],c={toc:p};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"choose-your-programming-language"},"Choose Your Programming Language"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/getting_started/rust"},"Rust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/getting_started/nodejs"},"Node.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/getting_started/python"},"Python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/getting_started/java"},"Java"))),(0,a.kt)("h2",{id:"connect-to-the-testnet-api"},"Connect to the Testnet API"),(0,a.kt)("p",null,"We recommended that you start your interactions with Shimmer on a ",(0,a.kt)("em",{parentName:"p"},"testnet")," network. The ",(0,a.kt)("em",{parentName:"p"},"testnet")," will allow you to safely\nget acquainted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, without the risk of losing any funds if you make a mistake along the way.\nYou can use this Shimmer Testnet API load balancer: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://api.testnet.shimmer.network\n")),(0,a.kt)("h2",{id:"explore-the-network"},"Explore the Network"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/testnet"},"Shimmer Tangle Explorer")," to view transactions and data stored in\nthe IOTA Tangle."),(0,a.kt)("h2",{id:"get-test-tokens"},"Get Test Tokens"),(0,a.kt)("p",null,"In order to properly test value-based transactions on testnet network, you are going to need some tokens. You can get\nsome testnet tokens through the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network"},"Shimmer Faucet"),"."))}g.isMDXComponent=!0}}]);