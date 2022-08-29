"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8178],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99150:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={description:"The IOTA foundation provides load-balanced public Shimmer endpoints where MQTT and the HTTP REST API are enabled.",image:"/img/logo/preview.png",keywords:["shimmer","MQTT","REST API","HTTP","Explorer","reference"]},l="Shimmer",p={unversionedId:"reference/networks/shimmer",id:"reference/networks/shimmer",title:"Shimmer",description:"The IOTA foundation provides load-balanced public Shimmer endpoints where MQTT and the HTTP REST API are enabled.",source:"@site/content/build/introduction-docs/develop/docs/reference/networks/shimmer.md",sourceDirName:"reference/networks",slug:"/reference/networks/shimmer",permalink:"/introduction/develop/reference/networks/shimmer",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/content/build/introduction-docs/develop/docs/reference/networks/shimmer.md",tags:[],version:"current",frontMatter:{description:"The IOTA foundation provides load-balanced public Shimmer endpoints where MQTT and the HTTP REST API are enabled.",image:"/img/logo/preview.png",keywords:["shimmer","MQTT","REST API","HTTP","Explorer","reference"]},sidebar:"mySidebar",previous:{title:"Shimmer Beta",permalink:"/introduction/develop/reference/networks/betanet"},next:{title:"Resources",permalink:"/introduction/develop/resources"}},u={},s=[{value:"Public Infrastructure",id:"public-infrastructure",level:2},{value:"Developer Tools",id:"developer-tools",level:2}],d={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shimmer"},"Shimmer"),(0,i.kt)("h2",{id:"public-infrastructure"},"Public Infrastructure"),(0,i.kt)("p",null,"IOTA currently provides two load-balanced public Shimmer endpoints:"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"TODO: Add a list of public Shimmer endpoints.")),(0,i.kt)("p",null,"These endpoints have MQTT (via WebSockets) exposed and offer the HTTP REST API (according to this ",(0,i.kt)("a",{parentName:"p",href:"https://studio.asyncapi.com/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-event-api/tips/TIP-0028/event-api.yml"},"specification"),")\nover TLS."),(0,i.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://explorer.iota.org/shimmer"},"Explorer"),".")))}m.isMDXComponent=!0}}]);