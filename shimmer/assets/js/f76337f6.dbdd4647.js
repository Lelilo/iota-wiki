"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[66542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"About Nodes",description:"Nodes are the core of the Shimmer network. They run the node software that gives them read and write access to the Tangle.",image:"/img/participate/banner/banner_about_nodes.png"},i="About Nodes",s={unversionedId:"nodes/about-nodes",id:"nodes/about-nodes",title:"About Nodes",description:"Nodes are the core of the Shimmer network. They run the node software that gives them read and write access to the Tangle.",source:"@site/shimmer/develop/nodes/about-nodes.md",sourceDirName:"nodes",slug:"/nodes/about-nodes",permalink:"/shimmer/develop/nodes/about-nodes",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/shimmer/develop/nodes/about-nodes.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"About Nodes",description:"Nodes are the core of the Shimmer network. They run the node software that gives them read and write access to the Tangle.",image:"/img/participate/banner/banner_about_nodes.png"},sidebar:"develop",previous:{title:"Node Software",permalink:"/shimmer/develop/nodes/node-software"},next:{title:"Become a Node Operator",permalink:"/shimmer/develop/nodes/become-a-node-operator"}},l={},d=[{value:"Attaching new transactions to the Tangle",id:"attaching-new-transactions-to-the-tangle",level:2},{value:"Network synchronization",id:"network-synchronization",level:2},{value:"Transaction confirmation",id:"transaction-confirmation",level:2},{value:"Balances on addresses",id:"balances-on-addresses",level:2},{value:"Exposing APIs for Clients",id:"exposing-apis-for-clients",level:2},{value:"HTTP API",id:"http-api",level:3},{value:"Events API",id:"events-api",level:3}],c={toc:d};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-nodes"},"About Nodes"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"About Nodes",src:n(54745).Z,width:"862",height:"200"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nodes are the core of the Shimmer network. They run the node software that gives them read and write access to the Tangle. This section covers what nodes do in the Shimmer network.")),(0,a.kt)("p",null,"Nodes are responsible for the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Attaching new transactions to the Tangle"),(0,a.kt)("li",{parentName:"ul"},"Synchronizing with the rest of the network"),(0,a.kt)("li",{parentName:"ul"},"Deciding which transactions are confirmed"),(0,a.kt)("li",{parentName:"ul"},"Keeping a record of the balances on addresses"),(0,a.kt)("li",{parentName:"ul"},"Exposing APIs for clients")),(0,a.kt)("h2",{id:"attaching-new-transactions-to-the-tangle"},"Attaching new transactions to the Tangle"),(0,a.kt)("p",null,"When nodes receive a new transaction, they attach it to the Tangle by adding it to their local database. As a result, at any point in time, all nodes may have different transactions in their local databases. These transactions make up a node's view of the Tangle. To distribute the transactions across the rest of the network, nodes synchronize their local databases with their neighbors."),(0,a.kt)("h2",{id:"network-synchronization"},"Network synchronization"),(0,a.kt)("p",null,"Like any distributed system, nodes in the Shimmer network synchronize their databases with their neighboring nodes to form a single source of truth. When one node, no matter where it is in the world, receives a transaction, it will try to gossip it to all its neighbors. This way, all nodes eventually see all transactions and store them in their local databases."),(0,a.kt)("p",null,"To synchronize, nodes in the Shimmer networks use milestones. If a node has the history of transactions that a milestone references in its database, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received. When a node is synchronized, it then has enough information to decide which transactions it considers confirmed."),(0,a.kt)("h2",{id:"transaction-confirmation"},"Transaction confirmation"),(0,a.kt)("p",null,"All transactions remain in a pending state until the node is sure of its validity. However, even when a transaction is valid, nodes may not immediately be able to confirm a transaction due to conflicts, like in the case of a double spend. When nodes detect conflicting transactions, they must decide which transaction to consider confirmed. Nodes do this by using consensus rules that are built into their node software."),(0,a.kt)("h2",{id:"balances-on-addresses"},"Balances on addresses"),(0,a.kt)("p",null,"All nodes keep a record of the balances of addresses, so they can respond to client requests for their balance and verify that transactions do not transfer more Shimmer tokens than are available on the address. Nodes update their record of balances when a transaction is confirmed."),(0,a.kt)("h2",{id:"exposing-apis-for-clients"},"Exposing APIs for Clients"),(0,a.kt)("h3",{id:"http-api"},"HTTP API"),(0,a.kt)("p",null,"The HTTP API allows clients to interact with the Tangle and ask nodes to do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get tips"),(0,a.kt)("li",{parentName:"ul"},"Attach new transactions to the Tangle"),(0,a.kt)("li",{parentName:"ul"},"Do proof of work"),(0,a.kt)("li",{parentName:"ul"},"Get transactions from the Tangle")),(0,a.kt)("h3",{id:"events-api"},"Events API"),(0,a.kt)("p",null,"The Events API allows clients to poll nodes for new transactions and other events that happen on nodes. This API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses."))}h.isMDXComponent=!0},54745:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/banner_about_nodes-44a4d7e714cd6fb195b418daf03753b5.png"}}]);