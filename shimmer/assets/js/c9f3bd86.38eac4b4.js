"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[83553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Interface: MintTokenTransaction",s={unversionedId:"references/nodejs/interfaces/MintTokenTransaction",id:"references/nodejs/interfaces/MintTokenTransaction",title:"Interface: MintTokenTransaction",description:"The result of a minting operation",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/nodejs/interfaces/MintTokenTransaction.md",sourceDirName:"references/nodejs/interfaces",slug:"/references/nodejs/interfaces/MintTokenTransaction",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/MintTokenTransaction",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/nodejs/interfaces/MintTokenTransaction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: LoggerConfig",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/LoggerConfig"},next:{title:"Interface: MnemonicSecretManager",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/MnemonicSecretManager"}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"tokenId",id:"tokenid",level:3},{value:"transaction",id:"transaction",level:3}],p={toc:l};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-minttokentransaction"},"Interface: MintTokenTransaction"),(0,a.kt)("p",null,"The result of a minting operation"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/MintTokenTransaction#tokenid"},"tokenId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/MintTokenTransaction#transaction"},"transaction"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"tokenid"},"tokenId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"tokenId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The token id of the minted token"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transaction"},"transaction"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transaction"),": ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/interfaces/Transaction"},(0,a.kt)("inlineCode",{parentName:"a"},"Transaction"))),(0,a.kt)("p",null,"The transaction which minted the token"))}f.isMDXComponent=!0}}]);