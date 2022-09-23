"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},c="API Reference",i={unversionedId:"references/rust_api_reference",id:"references/rust_api_reference",title:"API Reference",description:"Official IOTA Wallet Library Software Rust API reference.",source:"@site/content/build/wallet.rs/develop/documentation/docs/references/rust_api_reference.md",sourceDirName:"references",slug:"/references/rust_api_reference",permalink:"/wallet.rs/develop/references/rust_api_reference",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/references/rust_api_reference.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},sidebar:"docs",previous:{title:"Integrate wallet.rs With Your Exchange",permalink:"/wallet.rs/develop/how_tos/exchange_guide"},next:{title:"account",permalink:"/wallet.rs/develop/references/python/iota_wallet/account"}},l={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,"You can visit the ",(0,o.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org/docs/specification"},"Rust documentation")," to learn more about the API Reference."),(0,o.kt)("p",null,"If you would like to explore the implementation in more depth, you can generate docs for the whole crate by running the  following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo doc --document-private-items --no-deps --open\n")))}u.isMDXComponent=!0}}]);