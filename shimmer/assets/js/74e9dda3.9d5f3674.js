"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[70114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Post",sidebar_label:"Post"},i=void 0,s={unversionedId:"specs/didcomm/protocols/post",id:"specs/didcomm/protocols/post",title:"Post",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/shimmer/external/identity.rs/0.7-alpha/documentation/docs/specs/didcomm/protocols/post.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/post",permalink:"/shimmer/identity.rs/specs/didcomm/protocols/post",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/shimmer/external/identity.rs/0.7-alpha/documentation/docs/specs/didcomm/protocols/post.md",tags:[],version:"current",frontMatter:{title:"Post",sidebar_label:"Post"},sidebar:"docs",previous:{title:"Revocation Options",permalink:"/shimmer/identity.rs/specs/didcomm/protocols/revocation-options"},next:{title:"Termination",permalink:"/shimmer/identity.rs/specs/didcomm/protocols/termination"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Relationships",id:"relationships",level:3},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Roles",id:"roles",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Messages",id:"messages",level:2},{value:"1. post",id:"post-message",level:3},{value:"Structure",id:"structure",level:4},{value:"Examples",id:"examples",level:4},{value:"Problem Reports",id:"problem-reports",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Related Work",id:"related-work",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,n.kt)("li",{parentName:"ul"},"Status: ",(0,n.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,n.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Allows the sending of a single message with arbitrary data. Multiple ",(0,n.kt)("a",{parentName:"p",href:"#post-message"},"post")," messages MAY be chained together in the same ",(0,n.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#threads"},"DIDComm thread")," to achieve bi-directional communication."),(0,n.kt)("h3",{id:"relationships"},"Relationships"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./authentication"},"Authentication"),": can be used to authenticate both parties and establish ",(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),".")),(0,n.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Instant messaging between two parties, where the text payload is displayed in a chat."),(0,n.kt)("li",{parentName:"ul"},"IoT devices transmit sensor data to be aggregated in a central hub for processing.")),(0,n.kt)("h3",{id:"roles"},"Roles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sender: sends the message."),(0,n.kt)("li",{parentName:"ul"},"Receiver: receives the message.")),(0,n.kt)("h3",{id:"interaction"},"Interaction"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PostDiagram",src:a(76573).Z,width:"842",height:"512"})),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("sub",null,"For guidance on diagrams see the ",(0,n.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,n.kt)("h2",{id:"messages"},"Messages"),(0,n.kt)("h3",{id:"post-message"},"1. post"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"iota/post/0.1/post")),(0,n.kt)("li",{parentName:"ul"},"Role: ",(0,n.kt)("a",{parentName:"li",href:"#roles"},"sender"))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"#roles"},"sender")," transmits a JSON ",(0,n.kt)("inlineCode",{parentName:"p"},"payload")," to the ",(0,n.kt)("a",{parentName:"p",href:"#roles"},"receiver"),". This MAY take advantage of ",(0,n.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," or be a ",(0,n.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message")," or both."),(0,n.kt)("h4",{id:"structure"},"Structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": JSON // REQUIRED\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"payload")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any valid ",(0,n.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7159"},"JSON")," text."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Send a single string:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": "Hello, world"\n}\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Send a single number:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": 42\n}\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Send a JSON object:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": {\n    "status_code": 100,\n    "status": "Okay",\n  }\n}\n')),(0,n.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,n.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports."),(0,n.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,n.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.post.reject-post")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#post-message"},"post")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#roles"},"Receiver")," rejects a ",(0,n.kt)("a",{parentName:"td",href:"#post-message"},"post")," message for any reason.")))),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("p",null,"Since the ",(0,n.kt)("inlineCode",{parentName:"p"},"payload")," JSON structure is unrestricted, a ",(0,n.kt)("a",{parentName:"p",href:"#roles"},"sender")," cannot make assumptions about ",(0,n.kt)("a",{parentName:"p",href:"#roles"},"receivers")," being able to understand the ",(0,n.kt)("inlineCode",{parentName:"p"},"payload")," in any meaningful way unless both parties have a shared implementation or pre-negotiate the ",(0,n.kt)("inlineCode",{parentName:"p"},"payload")," structure."),(0,n.kt)("p",null,"If complex and repeatable behaviour between parties is needed, implementors SHOULD define their own protocols with well-defined messages and interactions rather than using generic ",(0,n.kt)("a",{parentName:"p",href:"#post-message"},"post")," messages."),(0,n.kt)("h2",{id:"related-work"},"Related Work"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Aries Hyperledger: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0095-basic-message/README.md"},"https://github.com/hyperledger/aries-rfcs/blob/main/features/0095-basic-message/README.md"))))}m.isMDXComponent=!0},76573:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/post.drawio-75447f81a7eb494d41dd228ecf91baf5.svg"}}]);