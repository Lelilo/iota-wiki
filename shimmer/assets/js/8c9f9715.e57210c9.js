"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[19933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={id:"maintenance",description:"What it actually takes to run the Shimmer network.",image:"/img/iota-wiki.png",keywords:["explanation","shimmer","proof of work","node incentives","storage deposit"]},i="Maintaining Shimmer",s={unversionedId:"maintenance",id:"maintenance",title:"Maintaining Shimmer",description:"What it actually takes to run the Shimmer network.",source:"@site/shimmer/learn/maintenance.md",sourceDirName:".",slug:"/maintenance",permalink:"/shimmer/learn/maintenance",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/shimmer/learn/maintenance.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{id:"maintenance",description:"What it actually takes to run the Shimmer network.",image:"/img/iota-wiki.png",keywords:["explanation","shimmer","proof of work","node incentives","storage deposit"]},sidebar:"about",previous:{title:"Output Types and Features",permalink:"/shimmer/learn/outputs"},next:{title:"Role of the Shimmer Token",permalink:"/shimmer/learn/role-of-token"}},l={},u=[{value:"Incentives",id:"incentives",level:2},{value:"Deterrents",id:"deterrents",level:2},{value:"Storage Deposit",id:"storage-deposit",level:3},{value:"Proof of Work",id:"proof-of-work",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maintaining-shimmer"},"Maintaining Shimmer"),(0,r.kt)("p",null,"At its core, Shimmer needs few resources to run. To make a transaction, you need to cryptographically sign a short data sequence and send it to a node to turn it into a block and propagate the block through the network. When another node receives that block, it runs it through a series of simple checks, like verifying the signatures and checking what blocks it refers to and adds a new entry to its database of blocks. An ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/getting_started#recommended-requirements"},"average personal computer")," is enough to run a Shimmer node."),(0,r.kt)("h2",{id:"incentives"},"Incentives"),(0,r.kt)("p",null,"Fundamentally, Shimmer regulates only the communication between its nodes, not the nodes and the end users, and a random node has no incentives to take your transaction into work. Public nodes process strangers' transactions out of good spirit, but they can always go offline or put your transaction to the very end of the queue. If you need a reliable connection to the Tangle, the only way to get it is to run your own Shimmer node."),(0,r.kt)("p",null,"If you are a casual user and make one or two daily transactions, this would not be enough to convince you: if your transaction does not come through, you can wait for another few seconds or try a different node. But suppose you run a local business that accepts payments in $SMR tokens, a cryptocurrency exchange, or a smart contract chain. In that case, you need your Shimmer connection as reliable as possible, and you will run your own node."),(0,r.kt)("p",null,"You can read more about incentives in this ",(0,r.kt)("a",{parentName:"p",href:"https://blog.iota.org/incentives-to-run-an-iota-node/"},"blog post"),"."),(0,r.kt)("h2",{id:"deterrents"},"Deterrents"),(0,r.kt)("p",null,"Even though Shimmer is lightweight, malicious actors could still possibly misuse its resources to cause the network slowdown or denial of the service. For that, Shimmer has to introduce additional limitations on its usage to keep it fair for everyone."),(0,r.kt)("h3",{id:"storage-deposit"},"Storage Deposit"),(0,r.kt)("p",null,"Each unspent output has to be stored on every node's hardware. For example, a basic output would store the number of tokens and their owner's address. Without limitations, someone could split his tokens into millions of outputs or create an NFT output with extremely long metadata. To solve this issue, the available data storage is allocated in proportion to the $SMR tokens tied to the output. This is called ",(0,r.kt)("em",{parentName:"p"},"storage deposit"),", and if a newly created output has too few $SMR tokens to cover the output's size, its containing block will be rejected by the network's nodes. These measures keep the ledger's database size under XXX GB."),(0,r.kt)("h3",{id:"proof-of-work"},"Proof of Work"),(0,r.kt)("p",null,"A node could start issuing so many blocks that it would clog the network. To prevent this, the Shimmer network requires the issuing node to perform some empty work. It affects only a single node and not the rest of the network, and it distributes the throughput of the network fairly between all its nodes."))}d.isMDXComponent=!0}}]);