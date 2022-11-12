"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21017],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"libraries/java/api/SignatureLockedSingleOutput",id:"libraries/java/api/SignatureLockedSingleOutput",title:"SignatureLockedSingleOutput",description:"Describes a deposit to a single address which is unlocked via a signature.",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/SignatureLockedSingleOutput.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/SignatureLockedSingleOutput",permalink:"/iota.rs/libraries/java/api/SignatureLockedSingleOutput",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/SignatureLockedSingleOutput.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"from(address, amount): SignatureLockedSingleOutput",id:"fromaddress-amount-signaturelockedsingleoutput",level:3},{value:"amount(): long",id:"amount-long",level:3},{value:"address(): Address",id:"address-address",level:3}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Describes a deposit to a single address which is unlocked via a signature."),(0,a.kt)("h3",{id:"fromaddress-amount-signaturelockedsingleoutput"},"from(address, amount): ",(0,a.kt)("a",{parentName:"h3",href:"#signaturelockedsingleoutput"},"SignatureLockedSingleOutput")),(0,a.kt)("p",null,"Creates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#address"},"Address")),(0,a.kt)("td",{parentName:"tr",align:null},"The address to set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"amount"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount to set")))),(0,a.kt)("h3",{id:"amount-long"},"amount(): long"),(0,a.kt)("p",null,"Returns the amount of a ",(0,a.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."),(0,a.kt)("h3",{id:"address-address"},"address(): ",(0,a.kt)("a",{parentName:"h3",href:"#address"},"Address")),(0,a.kt)("p",null,"Returns the address of a ",(0,a.kt)("inlineCode",{parentName:"p"},"SignatureLockedSingleOutput"),"."))}p.isMDXComponent=!0}}]);