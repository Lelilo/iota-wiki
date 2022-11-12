"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[55865],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18371:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={},o="API Reference",c={unversionedId:"libraries/rust/api_reference",id:"libraries/rust/api_reference",title:"API Reference",description:"Users are broken down into two types: Author and Subscriber. An Author is the user",source:"@site/iota/external/streams/develop/documentation/docs/libraries/rust/api_reference.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/api_reference",permalink:"/streams/libraries/rust/api_reference",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/main/documentation/iota/external/streams/develop/documentation/docs/libraries/rust/api_reference.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Examples",permalink:"/streams/libraries/rust/examples"},next:{title:"Getting Started",permalink:"/streams/libraries/wasm/getting_started"}},s={},p=[],l={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,"Users are broken down into two types: ",(0,a.kt)("inlineCode",{parentName:"p"},"Author")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber"),". An ",(0,a.kt)("inlineCode",{parentName:"p"},"Author")," is the user\nthat generates the channel, accepts subscription requests and can perform access granting\nand restriction methods. A ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," is an instance that can attach to a channel to read\nfrom and write to depending on the access privileges they've been granted. "),(0,a.kt)("p",null,"You can generate the api reference with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo doc --document\n")))}u.isMDXComponent=!0}}]);