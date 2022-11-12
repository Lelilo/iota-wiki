"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[63647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=i,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={description:"Links to the Participation reference.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","INX","Participation","REST API","API","Reference"]},a="API Reference",c={unversionedId:"api_reference",id:"api_reference",title:"API Reference",description:"Links to the Participation reference.",source:"@site/next/external/inx-participation/documentation/docs/api_reference.md",sourceDirName:".",slug:"/api_reference",permalink:"/next/inx-participation/api_reference",draft:!1,editUrl:"https://github.com/iotaledger/inx-participation/edit/develop/documentation/next/external/inx-participation/documentation/docs/api_reference.md",tags:[],version:"current",frontMatter:{description:"Links to the Participation reference.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","INX","Participation","REST API","API","Reference"]},sidebar:"mySidebar",previous:{title:"Core Configuration",permalink:"/next/inx-participation/configuration"}},p={},l=[],u={toc:l};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"You can find specifications of the API exposed by INX-Participation in the links below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iota-community/treasury/blob/main/specifications/hornet-participation-plugin.md#public-node-endpoints"},"HORNET Participation Plugin"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"   The linked specification defines the Chrysalis version of the participation plugin and has not been updated yet to match the implementation in INX-Participation.")))}f.isMDXComponent=!0}}]);