"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2694],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),f=d(i),m=a,u=f["".concat(l,".").concat(m)]||f[m]||p[m]||s;return i?n.createElement(u,o(o({ref:t},c),{},{components:i})):n.createElement(u,o({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,o=new Array(s);o[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<s;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},49087:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const s={description:"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle. The solidification specification depends on timestamps and UTXO.",image:"/img/research-specifications/solidification-process.png",slug:"4.4Solidification",keywords:["parents","age check","request","message id","buffer","weak solidification","strong solidification"]},o="4.4 Solidification",r={unversionedId:"4.4 Solidification",id:"4.4 Solidification",title:"4.4 Solidification",description:"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle. The solidification specification depends on timestamps and UTXO.",source:"@site/next/external/iota-2.0-research-specifications/4.4 Solidification.md",sourceDirName:".",slug:"/4.4Solidification",permalink:"/next/IOTA-2.0-Research-Specifications/4.4Solidification",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/next/external/iota-2.0-research-specifications/4.4 Solidification.md",tags:[],version:"current",frontMatter:{description:"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle. The solidification specification depends on timestamps and UTXO.",image:"/img/research-specifications/solidification-process.png",slug:"4.4Solidification",keywords:["parents","age check","request","message id","buffer","weak solidification","strong solidification"]},sidebar:"tutorialSidebar",previous:{title:"4.3 Tip Selection Algorithm",permalink:"/next/IOTA-2.0-Research-Specifications/4.3TipSelectionAlgorithm"},next:{title:"4.5 Rate Control Through Adaptive Proof of Work",permalink:"/next/IOTA-2.0-Research-Specifications/4.5RateControl"}},l={},d=[{value:"4.4.1 Motivation",id:"441-motivation",level:2},{value:"4.4.2 Definitions",id:"442-definitions",level:2},{value:"4.4.3 Parameters",id:"443-parameters",level:2},{value:"4.4.4 Solidification and Solidfication Check",id:"444-solidification-and-solidfication-check",level:2},{value:"Strong Solidification",id:"strong-solidification",level:3},{value:"Weak Solidification",id:"weak-solidification",level:3},{value:"4.4.5 Communication Details",id:"445-communication-details",level:2},{value:"4.4.5.1 Request and Response",id:"4451-request-and-response",level:3},{value:"SolidificationRequest",id:"solidificationrequest",level:3},{value:"SolidificationResponse",id:"solidificationresponse",level:3},{value:"4.4.6 Denial of Service",id:"446-denial-of-service",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"44-solidification"},"4.4 Solidification"),(0,a.kt)("p",null,"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle."),(0,a.kt)("p",null,"The Solidification specification depends on the following specifications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./4.2Timestamps"},"4.2 - Timestamps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./5.1UTXO"},"5.1 - UTXO"))),(0,a.kt)("h2",{id:"441-motivation"},"4.4.1 Motivation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solidification")," is a process of requesting missing referenced messages. It may be recursively repeated until all of a message's past cone up to the genesis (or snapshot) becomes solid."),(0,a.kt)("p",null,"In that way, the Tangle enables all nodes to retrieve all of a message's history, even the ones joining the network at a point later in time."),(0,a.kt)("h2",{id:"442-definitions"},"4.4.2 Definitions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"valid"),":\nA message validity status is initialized as ",(0,a.kt)("em",{parentName:"p"},"valid"),", and it's set as ",(0,a.kt)("em",{parentName:"p"},"invalid")," whenever the message does not pass any of the filters from the solidifier and from the message booker:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Solidifier: checks if parents are valid,"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Booker: checks if the contained transaction is valid. Note that only messages containing a transaction are required to perform this check, which are defined in ",(0,a.kt)("a",{parentName:"li",href:"./5.1UTXO#validation"},"Section 5.1 - UTXO")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"parents age check"),": A check that ensures the timestamps of parents and child are valid, following the details defined in ",(0,a.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"solid"),": A message is solid if it passes the solidification check and all its parents are stored in the storage, solid and their validity status is set as valid."))),(0,a.kt)("h2",{id:"443-parameters"},"4.4.3 Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"retryInterval"),": The time interval of resending the same solidification request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxRequestThreshold"),": The maximum retry times to send a solidification request.")),(0,a.kt)("h2",{id:"444-solidification-and-solidfication-check"},"4.4.4 Solidification and Solidfication Check"),(0,a.kt)("p",null,"During solidification, if a node is missing a referenced message, the corresponding message ID is stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". A node asks its neighbors for the missing message by sending a ",(0,a.kt)("inlineCode",{parentName:"p"},"solidification request")," containing the message ID.\nIt also sets a boolean flag ",(0,a.kt)("inlineCode",{parentName:"p"},"isStrongRequest")," for whether the missing message was requested as a strong (",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE"),") or weak (",(0,a.kt)("inlineCode",{parentName:"p"},"FALSE"),") parent. This information can be used to decide which checks a message shall pass, when the message is received."),(0,a.kt)("p",null,"Note that through the following process the parents of a message that is requested through a weak solidification are not requested, and also the message does not have to pass the parent age check."),(0,a.kt)("p",null,"If a message gets solid, it shall walk through the rest of the data flow, then propagate the solid status to its future cone by performing the solidification checks on each of the message in its future cone again."),(0,a.kt)("h3",{id:"strong-solidification"},"Strong Solidification"),(0,a.kt)("p",null,"Once the requested message is received from its neighbors, its message ID shall be removed from the ",(0,a.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"isStrongRequest==TRUE")," the requested message is marked as solid after it passes the strong solidification checks. If any of the checks fails, the message remains unsolid, or is set to invalid, see. Image 4.4.1."),(0,a.kt)("p",null,"In the strong solidification check we check if"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the parents exist;"),(0,a.kt)("li",{parentName:"ol"},"the parents are solid, and if not wait until these get solid;"),(0,a.kt)("li",{parentName:"ol"},"the parents age check passes,"),(0,a.kt)("li",{parentName:"ol"},"the parents are valid.")),(0,a.kt)("h3",{id:"weak-solidification"},"Weak Solidification"),(0,a.kt)("p",null,"Once the requested message is received from its neighbors, its message ID shall be removed from the ",(0,a.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"isStrongRequest==FALSE")," the requested message is marked as solid."),(0,a.kt)("p",null,"No weak solidification check has to be performed."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/11289354/117009286-28333200-ad1e-11eb-8d0d-186c8d8ce373.png"},(0,a.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/11289354/117009286-28333200-ad1e-11eb-8d0d-186c8d8ce373.png",alt:"Strong solidification process"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Image 4.4.1:")," Strong solidification process."),(0,a.kt)("h2",{id:"445-communication-details"},"4.4.5 Communication Details"),(0,a.kt)("p",null,"Nodes send and receive ",(0,a.kt)("inlineCode",{parentName:"p"},"solidification request/response")," via gossip layer. The ",(0,a.kt)("inlineCode",{parentName:"p"},"solidification request")," is created and scheduled by the gossip manager, if a node does not get the requested message, the gossip manager re-sends it every ",(0,a.kt)("inlineCode",{parentName:"p"},"retryInterval"),". If the requested message is not received within ",(0,a.kt)("inlineCode",{parentName:"p"},"maxRequestThreshold")," rounds, the ",(0,a.kt)("inlineCode",{parentName:"p"},"solidification request")," must be removed from the ",(0,a.kt)("inlineCode",{parentName:"p"},"solidification buffer"),"."),(0,a.kt)("h3",{id:"4451-request-and-response"},"4.4.5.1 Request and Response"),(0,a.kt)("p",null,"Below we define the form of SolidificationRequest and SolidificationResponse:"),(0,a.kt)("h3",{id:"solidificationrequest"},"SolidificationRequest"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Indicates that the packet is SolidificationRequest.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"messageID"),(0,a.kt)("td",null,"ByteArray[32]"),(0,a.kt)("td",null,"Contains the message ID of the requested message.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 4.4.2:")," SolidificationRequest data fields description."),(0,a.kt)("h3",{id:"solidificationresponse"},"SolidificationResponse"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,"uint8"),(0,a.kt)("td",null,"Indicates that the packet is SolidificationResponse.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"message"),(0,a.kt)("td",null,"ByteArray"),(0,a.kt)("td",null,"Contains the entire requested message.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table 4.4.3:")," SolidificationResponses data fields description."),(0,a.kt)("h2",{id:"446-denial-of-service"},"4.4.6 Denial of Service"),(0,a.kt)("p",null,"All requests/responses exchanged during the solidification are sent via UDP. As such, any UDP based Denial of Service attack may harm the normal functionality of the solidification. To limit this, hardware based protection such as firewall or alternatively may be used."))}p.isMDXComponent=!0}}]);