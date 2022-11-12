"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[85994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=l.createContext({}),d=function(e){var t=l.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return l.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=d(a),p=n,m=k["".concat(r,".").concat(p)]||k[p]||c[p]||s;return a?l.createElement(m,i(i({ref:t},u),{},{components:a})):l.createElement(m,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=k;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},18098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var l=a(87462),n=(a(67294),a(3905));const s={description:"This section describes the message layout, its syntactical validation and additional metadata that may be stored by a node for a message.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"2.2MessageLayout",keywords:["message","node","parent","strong","parent type"]},i="2.2 Message Layout",o={unversionedId:"2.2 Message Layout",id:"2.2 Message Layout",title:"2.2 Message Layout",description:"This section describes the message layout, its syntactical validation and additional metadata that may be stored by a node for a message.",source:"@site/iota/external/iota-2.0-research-specifications/2.2 Message Layout.md",sourceDirName:".",slug:"/2.2MessageLayout",permalink:"/IOTA-2.0-Research-Specifications/2.2MessageLayout",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/iota/external/iota-2.0-research-specifications/2.2 Message Layout.md",tags:[],version:"current",frontMatter:{description:"This section describes the message layout, its syntactical validation and additional metadata that may be stored by a node for a message.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"2.2MessageLayout",keywords:["message","node","parent","strong","parent type"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/IOTA-2.0-Research-Specifications/1.1Introduction"},next:{title:"2.3 Standard Payloads Layout",permalink:"/IOTA-2.0-Research-Specifications/2.3StandardPayloadsLayout"}},r={},d=[{value:"2.2.1 Parameters",id:"221-parameters",level:2},{value:"2.2.1.1 Parameter Default Values",id:"2211-parameter-default-values",level:3},{value:"2.2.2 Message Structure",id:"222-message-structure",level:2},{value:"2.2.3 Message ID",id:"223-message-id",level:2},{value:"2.2.4 Syntactical Validation",id:"224-syntactical-validation",level:2},{value:"2.2.5 Semantic Validation",id:"225-semantic-validation",level:2},{value:"2.2.6 Metadata",id:"226-metadata",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"22-message-layout"},"2.2 Message Layout"),(0,n.kt)("p",null,"This section describes the ",(0,n.kt)("em",{parentName:"p"},"Message Layout"),", its syntactical validation and additional metadata that may be stored by a node for a message."),(0,n.kt)("h2",{id:"221-parameters"},"2.2.1 Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MAX_MESSAGE_SIZE")," The maximum allowed message size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MIN_STRONG_PARENTS")," The minimum amount of strong parents a message must reference.")),(0,n.kt)("h3",{id:"2211-parameter-default-values"},"2.2.1.1 Parameter Default Values"),(0,n.kt)("p",null,"The following values shall be set as the default for the above parameters on initiation of the node application: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MAX_MESSAGE_SIZE")," = 64KB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MIN_STRONG_PARENTS"),"  = 1")),(0,n.kt)("h2",{id:"222-message-structure"},"2.2.2 Message Structure"),(0,n.kt)("p",null,"The structure of a Tangle message is defined in Table 2.2-1 below. "),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Version"),(0,n.kt)("td",null,"uint8"),(0,n.kt)("td",null,"The message version. The schema specified in this specification is for version ",(0,n.kt)("strong",null,"1")," only. ")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Parents count"),(0,n.kt)("td",null,"uint8"),(0,n.kt)("td",null,"The amount of parents preceding the current message.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Parents type"),(0,n.kt)("td",null,"uint8"),(0,n.kt)("td",null,"Bitwise encoding of parent type matching the order of preceding parents starting at ",(0,n.kt)("code",null,"least significant bit"),". ",(0,n.kt)("code",null,"1")," indicates a strong parent, while ",(0,n.kt)("code",null,"0")," signals a weak parent. At least ",(0,n.kt)("code",null,"MIN_STRONG_PARENTS")," parent type must be strong.")),(0,n.kt)("tr",null,(0,n.kt)("td",{colSpan:"1"},"Parents ",(0,n.kt)("code",null,"between(1,8)")),(0,n.kt)("td",{colSpan:"2"},(0,n.kt)("details",{open:"true"},(0,n.kt)("summary",null,"Parents, ordered by hash ASC"),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Parent"),(0,n.kt)("td",null,"ByteArray[32]"),(0,n.kt)("td",null,"The Message ID of the ",(0,n.kt)("i",null,"parent Message"),"."))))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Issuer public key (Ed25519)"),(0,n.kt)("td",null,"ByteArray[32]"),(0,n.kt)("td",null,"The public key of the node issuing the message.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Issuing timestamp"),(0,n.kt)("td",null,"time"),(0,n.kt)("td",null,"A value that shall represent the issuance time of the message.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Payload length"),(0,n.kt)("td",null,"uint32"),(0,n.kt)("td",null,"The length of the Payload in bytes. Since its type may be unknown to the node, it must be declared in advance. 0 length means no payload will be attached.")),(0,n.kt)("tr",null,(0,n.kt)("td",{colSpan:"1"},"Payload"),(0,n.kt)("td",{colSpan:"2"},(0,n.kt)("details",{open:"true"},(0,n.kt)("summary",null,"Generic Payload"),(0,n.kt)("blockquote",null,"An outline of a general payload"),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Payload Type"),(0,n.kt)("td",null,"uint32"),(0,n.kt)("td",null,'The type of the payload. It will instruct the node how to parse the fields that follow. Types in the range of 0-127 are "core types", that all nodes are expected to know.')),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Data Fields"),(0,n.kt)("td",null,"ANY"),(0,n.kt)("td",null,"A sequence of fields, where the structure depends on ",(0,n.kt)("code",null,"Payload Type"),"."))))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Nonce"),(0,n.kt)("td",null,"uint64"),(0,n.kt)("td",null,"The nonce which lets this message fulfill the Rate Control requirement.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Signature (Ed25519)"),(0,n.kt)("td",null,"ByteArray[64]"),(0,n.kt)("td",null,"Signature of the issuing node's private key signing the BLAKE2b-256 hash of the entire message bytes.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Table 2.2.1:")," Message Structure."),(0,n.kt)("h2",{id:"223-message-id"},"2.2.3 Message ID"),(0,n.kt)("p",null,"BLAKE2b-256 hash of the byte contents of the message. It shall be used by the nodes to index the messages and by external APIs."),(0,n.kt)("h2",{id:"224-syntactical-validation"},"2.2.4 Syntactical Validation"),(0,n.kt)("p",null,"Messages that do not pass the Syntactical Validation ",(0,n.kt)("em",{parentName:"p"},"shall be")," discarded. Only syntactically valid messages continue in the data flow, i.e., shall be allowed to pass to the Semantic Validation step."),(0,n.kt)("p",null,"A message is syntactically valid if:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The message length does not exceed ",(0,n.kt)("inlineCode",{parentName:"li"},"MAX_MESSAGE_SIZE")," bytes."),(0,n.kt)("li",{parentName:"ol"},"When the message parsing is complete, there are not any trailing bytes left that were not parsed."),(0,n.kt)("li",{parentName:"ol"},"At least 1 and at most 8 distinct parents are given, ordered ASC and at least ",(0,n.kt)("inlineCode",{parentName:"li"},"MIN_STRONG_PARENTS")," are strong parents. ")),(0,n.kt)("h2",{id:"225-semantic-validation"},"2.2.5 Semantic Validation"),(0,n.kt)("p",null,"Messages that do not pass the Semantic Validation ",(0,n.kt)("em",{parentName:"p"},"shall be")," discarded. Only semantically valid messages shall be allowed to continue in the data flow."),(0,n.kt)("p",null,"A message is semantically valid if:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Message PoW Hash contains at least the number of leading 0 defined as required by the Rate Control module (see ",(0,n.kt)("a",{parentName:"li",href:"./4.5RateControl"},"Section 4.5 - Rate Control"),"."),(0,n.kt)("li",{parentName:"ol"},"The signature of the issuing node is valid."),(0,n.kt)("li",{parentName:"ol"},"It passes the parents age checks (see ",(0,n.kt)("a",{parentName:"li",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),").")),(0,n.kt)("h2",{id:"226-metadata"},"2.2.6 Metadata"),(0,n.kt)("p",null,"In addition to a message itself, a node may store additional data that describes its local perception of a message which is not part of the Tangle ('Message metadata'). Where such metadata is defined, the metadata element names and types defined in Table 2.2-2 below shall be used. "),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"receivedTime"),(0,n.kt)("td",null,"time"),(0,n.kt)("td",null,"The local time the message was received by the node.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"solid"),(0,n.kt)("td",null,"bool"),(0,n.kt)("td",null,"Denotes whether a message is solid, i.e., its past cone is known.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"solidificationTime"),(0,n.kt)("td",null,"time"),(0,n.kt)("td",null,"The local time the message got solid.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"branchID"),(0,n.kt)("td",null,"ByteArray[32]"),(0,n.kt)("td",null,"The branch ID of the message, i.e., the part of the Tangle where the message is located.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"scheduled"),(0,n.kt)("td",null,"bool"),(0,n.kt)("td",null,"Denotes whether a message was scheduled by the scheduler.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"booked"),(0,n.kt)("td",null,"bool"),(0,n.kt)("td",null,"Denotes whether a message was booked and therefore is part of the local Tangle.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"eligible"),(0,n.kt)("td",null,"bool"),(0,n.kt)("td",null,"Denotes whether a message is eligible, i.e., it's timestamp is good.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"invalid"),(0,n.kt)("td",null,"bool"),(0,n.kt)("td",null,"Denotes whether a message has been deemed invalid, i.e., it or its parents do not pass all checks from filters to message booker.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"opinion"),(0,n.kt)("td",null,"Opinion"),(0,n.kt)("td",null,"Contains the node's opinion on the issuing timestamp of a message. ")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Table 2.2.2:")," Message Metadata."))}c.isMDXComponent=!0}}]);