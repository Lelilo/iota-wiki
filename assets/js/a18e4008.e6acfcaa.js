"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59167:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_label:"common",title:"iota_wallet.common"},l=void 0,c={unversionedId:"references/python/iota_wallet/common",id:"references/python/iota_wallet/common",title:"iota_wallet.common",description:"send\\message\\routine",source:"@site/content/build/wallet.rs/develop/documentation/docs/references/python/iota_wallet/common.md",sourceDirName:"references/python/iota_wallet",slug:"/references/python/iota_wallet/common",permalink:"/wallet.rs/develop/references/python/iota_wallet/common",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/references/python/iota_wallet/common.md",tags:[],version:"current",frontMatter:{sidebar_label:"common",title:"iota_wallet.common"},sidebar:"docs",previous:{title:"account",permalink:"/wallet.rs/develop/references/python/iota_wallet/account"},next:{title:"secret_manager",permalink:"/wallet.rs/develop/references/python/iota_wallet/secret_manager"}},i={},s=[{value:"send_message_routine",id:"send_message_routine",level:3},{value:"IotaWalletError Objects",id:"iotawalleterror-objects",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"send_message_routine"},"send","_","message","_","routine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def send_message_routine(func)\n")),(0,o.kt)("p",null,"The routine of dump json string and call send_message()"),(0,o.kt)("h2",{id:"iotawalleterror-objects"},"IotaWalletError Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class IotaWalletError(Exception)\n")),(0,o.kt)("p",null,"iota-wallet error"))}u.isMDXComponent=!0}}]);