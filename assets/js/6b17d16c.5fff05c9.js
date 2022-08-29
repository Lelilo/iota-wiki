"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15168],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,k=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={description:"Manual peering enables node operators to manually manage nodes' neighbors.  It can be additional protection against eclipse attacks as the manual peering is completely in the hands of the node operator based on real-world trust.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"3.5ManualPeering",keywords:["peering request","eclipse attack","neighbors","node operator","public key","handshake request"]},s="3.5 Manual Peering",d={unversionedId:"3.5 Manual Peering",id:"3.5 Manual Peering",title:"3.5 Manual Peering",description:"Manual peering enables node operators to manually manage nodes' neighbors.  It can be additional protection against eclipse attacks as the manual peering is completely in the hands of the node operator based on real-world trust.",source:"@site/content/build/iota-2.0-research-specifications/3.5 Manual Peering.md",sourceDirName:".",slug:"/3.5ManualPeering",permalink:"/IOTA-2.0-Research-Specifications/3.5ManualPeering",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/content/build/iota-2.0-research-specifications/3.5 Manual Peering.md",tags:[],version:"current",frontMatter:{description:"Manual peering enables node operators to manually manage nodes' neighbors.  It can be additional protection against eclipse attacks as the manual peering is completely in the hands of the node operator based on real-world trust.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"3.5ManualPeering",keywords:["peering request","eclipse attack","neighbors","node operator","public key","handshake request"]},sidebar:"tutorialSidebar",previous:{title:"3.4 Neighbor Selection",permalink:"/IOTA-2.0-Research-Specifications/3.4NeighborSelection"},next:{title:"4.1 The Tangle",permalink:"/IOTA-2.0-Research-Specifications/4.1TheTangle"}},u={},p=[{value:"3.5.1 Motivation",id:"351-motivation",level:2},{value:"3.5.2 Detailed design",id:"352-detailed-design",level:2},{value:"3.5.3 Request and response",id:"353-request-and-response",level:2},{value:"Request and Response Layout",id:"request-and-response-layout",level:3},{value:"Handshake request",id:"handshake-request",level:3},{value:"Handshake response",id:"handshake-response",level:3}],c={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"35-manual-peering"},"3.5 Manual Peering"),(0,o.kt)("p",null,"Manual peering enables node operators to manually manage nodes' neighbors, orthogonal to the peering protocols described in ",(0,o.kt)("a",{parentName:"p",href:"./3.3PeerDiscovery"},"Section 3.3 - Peer Discovery")," and ",(0,o.kt)("a",{parentName:"p",href:"./3.4NeighborSelection"},"Section 3.4 - Peer Selection"),". This section defines manual peering protocol."),(0,o.kt)("h2",{id:"351-motivation"},"3.5.1 Motivation"),(0,o.kt)("p",null,"Manual peering can be additional protection against eclipse attacks as the manual peering is completely in the hands of the node operator based on real-world trust. Furthermore, it allows operating nodes without exposing their IP addresses to the network."),(0,o.kt)("h2",{id:"352-detailed-design"},"3.5.2 Detailed design"),(0,o.kt)("p",null,"The known peers are given by the node operator, containing peers' ",(0,o.kt)("strong",{parentName:"p"},"public key")," and ",(0,o.kt)("strong",{parentName:"p"},"IP address"),". They are divided into two groups by comparing their public keys to the node's public key lexicographically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chosen neighbors (outbound): If ",(0,o.kt)("inlineCode",{parentName:"li"},"node < peer"),", the node proactively sends a peering request to the peer."),(0,o.kt)("li",{parentName:"ul"},"Accepted neighbors (inbound): If ",(0,o.kt)("inlineCode",{parentName:"li"},"node > peer"),", the node awaits the peer to send a peering request and accept it.")),(0,o.kt)("p",null,"After the group of peers is decided, the node shall either send peering requests to the chosen neighbors or wait for peering requests from accepted neighbors. The connections are checked every ",(0,o.kt)("inlineCode",{parentName:"p"},"reconnectInterval"),", if a connection is dropped, the node shall try to re-establish it until the peer is removed or the node shutdowns."),(0,o.kt)("p",null,"A node removes a peer by closing the connection directly without sending a drop message described in ",(0,o.kt)("a",{parentName:"p",href:"./3.4NeighborSelection"},"Section 3.4 - Peer Selection")," to the peer. Thus, the removed peer shall still try to reconnect to the node every ",(0,o.kt)("inlineCode",{parentName:"p"},"reconnectInterval"),", until its operator  removes the node from the manual peering list. That is, it is the node operators' responsibility to monitor and manage the known peer list in manual peering."),(0,o.kt)("h2",{id:"353-request-and-response"},"3.5.3 Request and response"),(0,o.kt)("p",null,"Connections among manual peers are TCP connections. After the connection is established, nodes shall perform handshakes to validate the connected peer. Each handshake request and response shall be encapsulated into a ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," and signed with the ed25519 private key of the sender's ",(0,o.kt)("a",{parentName:"p",href:"#Node_identities"},"identity")," that contains the related public key to allow the receiver to verify the signature. All the received requests and responses shall be verified and those with invalid version numbers and signatures be discarded."),(0,o.kt)("h3",{id:"request-and-response-layout"},"Request and Response Layout"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"data"),(0,o.kt)("td",null,"ByteArray"),(0,o.kt)("td",null,"Contains the handshake request/response.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"public_key"),(0,o.kt)("td",null,"ByteArray[32]"),(0,o.kt)("td",null,"The ed25519 public key of the peer's identity used to verify its signature.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"signature"),(0,o.kt)("td",null,"ByteArray[32]"),(0,o.kt)("td",null,"The ed25519 signature of the `data` field, signed by using the private key of the peer's identity."))),(0,o.kt)("h3",{id:"handshake-request"},"Handshake request"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"version"),(0,o.kt)("td",null,"uint32"),(0,o.kt)("td",null,"The version of the handshake protocol.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"to_addr"),(0,o.kt)("td",null,"ByteArray"),(0,o.kt)("td",null,"The address of the peer.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"timestamp"),(0,o.kt)("td",null,"time"),(0,o.kt)("td",null,"The unix timestamp of the handshake request."))),(0,o.kt)("h3",{id:"handshake-response"},"Handshake response"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Name"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"req_hash"),(0,o.kt)("td",null,"ByteArray[32]"),(0,o.kt)("td",null,"The sha256 digest of the corresponding received handshake request."))))}h.isMDXComponent=!0}}]);