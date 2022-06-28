"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9132],{30842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),c=["components"],s={description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","accounts","deposit","withdraw","assets","balance","reference"]},i="The `accounts` Contract",l={unversionedId:"guide/core_concepts/core_contracts/accounts",id:"guide/core_concepts/core_contracts/accounts",title:"The `accounts` Contract",description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/accounts.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/accounts",permalink:"/smart-contracts/guide/core_concepts/core_contracts/accounts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/accounts.md",tags:[],version:"current",frontMatter:{description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","accounts","deposit","withdraw","assets","balance","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `root` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/root"},next:{title:"The `blob` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/blob"}},u={},d=[{value:"Entry Points",id:"entry-points",level:2},{value:"sendTo",id:"sendto",level:3},{value:"deposit",id:"deposit",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"harvest",id:"harvest",level:3},{value:"Views",id:"views",level:2},{value:"accounts",id:"accounts",level:3},{value:"balance",id:"balance",level:3},{value:"totalAssets",id:"totalassets",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-accounts-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"accounts")," Contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts")," contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it: L1 addresses and smart contracts."),(0,a.kt)("h2",{id:"entry-points"},"Entry Points"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides functions to deposit and withdraw tokens, and also provides information about the assets deposited on the chain.  "),(0,a.kt)("p",null,"Note that the ledger of accounts on the chain is consistently maintained behind scenes by the VM."),(0,a.kt)("h3",{id:"sendto"},"sendTo"),(0,a.kt)("p",null,"Moves tokens from the sender account to a target account on the chain, specified with the agent ID parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,a.kt)("h3",{id:"deposit"},"deposit"),(0,a.kt)("p",null,"Credits any transfered tokens to the sender's account."),(0,a.kt)("h3",{id:"withdraw"},"withdraw"),(0,a.kt)("p",null,"Moves all tokens from the caller's on-chain account to another chain, or to an address on L1. It cannot be used to move tokens within the current chain."),(0,a.kt)("h3",{id:"harvest"},"harvest"),(0,a.kt)("p",null,'Moves tokens from the common "default" account controlled by the chain owner, to the proper owner\'s account on the same chain. This entry point is only authorised to whoever owns the chain.'),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides a front-end of authorized access to those accounts for users outside the chain."),(0,a.kt)("h3",{id:"accounts"},"accounts"),(0,a.kt)("p",null,"Returns a list of all non-empty accounts in the chain as a list of serialized ",(0,a.kt)("inlineCode",{parentName:"p"},"agent IDs"),"."),(0,a.kt)("h3",{id:"balance"},"balance"),(0,a.kt)("p",null,"Returns the colored token balances that are controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"agent ID")," that was specified in the call parameters. It returns the balances as a dictionary of ",(0,a.kt)("inlineCode",{parentName:"p"},"color: amount")," pairs."),(0,a.kt)("h3",{id:"totalassets"},"totalAssets"),(0,a.kt)("p",null,"Returns the colored balances controlled by the chain. They are always equal to the sum of all on-chain accounts, color-by-color."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);