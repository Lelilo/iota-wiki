"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[24083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,f=u["".concat(o,".").concat(d)]||u[d]||k[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:s,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const i={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},l="Interface: IGossipMetrics",a={unversionedId:"references/client/interfaces/IGossipMetrics",id:"references/client/interfaces/IGossipMetrics",title:"Interface: IGossipMetrics",description:"iota.js API reference",source:"@site/next/external/iota.js/documentation/docs/references/client/interfaces/IGossipMetrics.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IGossipMetrics",permalink:"/next/iotajs/references/client/interfaces/IGossipMetrics",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/references/client/interfaces/IGossipMetrics.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IGossipHeartbeat",permalink:"/next/iotajs/references/client/interfaces/IGossipHeartbeat"},next:{title:"Interface: IGovernorAddressUnlockCondition",permalink:"/next/iotajs/references/client/interfaces/IGovernorAddressUnlockCondition"}},o={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"newBlocks",id:"newblocks",level:3},{value:"knownBlocks",id:"knownblocks",level:3},{value:"receivedBlocks",id:"receivedblocks",level:3},{value:"receivedBlockRequests",id:"receivedblockrequests",level:3},{value:"receivedMilestoneRequests",id:"receivedmilestonerequests",level:3},{value:"receivedHeartbeats",id:"receivedheartbeats",level:3},{value:"sentBlocks",id:"sentblocks",level:3},{value:"sentBlockRequests",id:"sentblockrequests",level:3},{value:"sentMilestoneRequests",id:"sentmilestonerequests",level:3},{value:"sentHeartbeats",id:"sentheartbeats",level:3},{value:"droppedPackets",id:"droppedpackets",level:3}],p={toc:c};function k(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"interface-igossipmetrics"},"Interface: IGossipMetrics"),(0,s.kt)("p",null,"Gossip metrics."),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#newblocks"},"newBlocks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#knownblocks"},"knownBlocks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#receivedblocks"},"receivedBlocks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#receivedblockrequests"},"receivedBlockRequests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#receivedmilestonerequests"},"receivedMilestoneRequests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#receivedheartbeats"},"receivedHeartbeats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#sentblocks"},"sentBlocks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#sentblockrequests"},"sentBlockRequests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#sentmilestonerequests"},"sentMilestoneRequests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#sentheartbeats"},"sentHeartbeats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/iotajs/references/client/interfaces/IGossipMetrics#droppedpackets"},"droppedPackets"))),(0,s.kt)("h2",{id:"properties-1"},"Properties"),(0,s.kt)("h3",{id:"newblocks"},"newBlocks"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"newBlocks"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of new blocks."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"knownblocks"},"knownBlocks"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"knownBlocks"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of known blocks."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivedblocks"},"receivedBlocks"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"receivedBlocks"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of received blocks."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivedblockrequests"},"receivedBlockRequests"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"receivedBlockRequests"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of received block requests."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivedmilestonerequests"},"receivedMilestoneRequests"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"receivedMilestoneRequests"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of received milestone requests."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receivedheartbeats"},"receivedHeartbeats"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"receivedHeartbeats"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of received heartbeats."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sentblocks"},"sentBlocks"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sentBlocks"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of sent blocks."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sentblockrequests"},"sentBlockRequests"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sentBlockRequests"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of sent block requests."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sentmilestonerequests"},"sentMilestoneRequests"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sentMilestoneRequests"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of sent miletsone requests."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sentheartbeats"},"sentHeartbeats"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"sentHeartbeats"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of sent heartbeats."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"droppedpackets"},"droppedPackets"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"droppedPackets"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"The number of dropped sent packets."))}k.isMDXComponent=!0}}]);