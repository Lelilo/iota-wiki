"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","magic","Ethereum","Solidity","metamask","JSON","RPC"]},o="The ISC Magic Contract",c={unversionedId:"guide/evm/magic",id:"guide/evm/magic",title:"The ISC Magic Contract",description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",source:"@site/shimmer/external/wasp/documentation/docs/guide/evm/magic.md",sourceDirName:"guide/evm",slug:"/guide/evm/magic",permalink:"/shimmer/smart-contracts/guide/evm/magic",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/evm/magic.md",tags:[],version:"current",frontMatter:{description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","magic","Ethereum","Solidity","metamask","JSON","RPC"]},sidebar:"tutorialSidebar",previous:{title:"How to use EVM in IOTA Smart Contracts",permalink:"/shimmer/smart-contracts/guide/evm/using"},next:{title:"EVM Tooling",permalink:"/shimmer/smart-contracts/guide/evm/tooling"}},s={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-isc-magic-contract"},"The ISC Magic Contract"),(0,a.kt)("p",null,"As previously ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/evm/compatibility"},"noted"),", EVM and ISC are inherently very different platforms.\nAs such, some EVM-specific actions (e.g. manipulating Ethereum tokens) is disabled, and ISC-specific functionality can be accessed by EVM contracts through the ",(0,a.kt)("em",{parentName:"p"},"ISC Magic Contract"),"."),(0,a.kt)("p",null,"The Magic contract is an EVM contract that is deployed by default on every ISC chain, in the EVM genesis block, at address ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1074"),".\nThe implementation of the Magic contract is baked-in in the ",(0,a.kt)("inlineCode",{parentName:"p"},"evm")," core contract; i.e. it is not a pure-Solidity contract."),(0,a.kt)("p",null,"The Magic contract can be accessed from any Solidity contract by importing its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol"},"interface"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity >=0.8.5;\n\nimport "@iscmagic/ISC.sol";\n\ncontract MyEVMContract {\n    event EntropyEvent(bytes32 entropy);\n\n    // this will emit a "random" value, taken from the ISC entropy value\n    function emitEntropy() public {\n        bytes32 e = isc.getEntropy();\n        emit EntropyEvent(e);\n    }\n}\n')),(0,a.kt)("p",null,"After ",(0,a.kt)("inlineCode",{parentName:"p"},'import "@iscmagic/ISC.sol"'),", the global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"isc")," points to the\nMagic contract at ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1074"),", which can be called like a regular EVM contract.\nFor example, with ",(0,a.kt)("inlineCode",{parentName:"p"},"isc.getEntropy()")," we are calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"getEntropy")," function which, in turn, calls ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/core_concepts/sandbox"},"ISC Sandbox's")," ",(0,a.kt)("inlineCode",{parentName:"p"},"GetEntropy"),"."),(0,a.kt)("p",null,"The Magic Contract's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol"},"interface")," is well documented, so it doubles as an API reference."),(0,a.kt)("p",null,"There are some usage examples in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/evm/evmtest/ISCTest.sol"},"ISCTest.sol")," contract (used internally in unit tests)."))}m.isMDXComponent=!0}}]);