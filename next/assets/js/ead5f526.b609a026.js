"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80419],{77819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var s=n(87462),o=(n(67294),n(3905)),r=n(69319);const i={description:"Learn how to add, delete, retrieve and list your node's peers with the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","peers","manage","create peer","add peer","delete peer","retrieve peer","retrieve peer list"]},l="Manage Peers",a={unversionedId:"how_tos/peers",id:"how_tos/peers",title:"Manage Peers",description:"Learn how to add, delete, retrieve and list your node's peers with the iota.js client library.",source:"@site/next/external/iota.js/documentation/docs/how_tos/peers.mdx",sourceDirName:"how_tos",slug:"/how_tos/peers",permalink:"/next/iotajs/how_tos/peers",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/how_tos/peers.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to add, delete, retrieve and list your node's peers with the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","peers","manage","create peer","add peer","delete peer","retrieve peer","retrieve peer list"]},sidebar:"docs",previous:{title:"Create an Address",permalink:"/next/iotajs/how_tos/address"},next:{title:"Send and Retrieve Data",permalink:"/next/iotajs/how_tos/data"}},d={},p=[{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Add Peers",id:"add-peers",level:2},{value:"Retrieve Peers",id:"retrieve-peers",level:2},{value:"Retrieve Peer Data",id:"retrieve-peer-data",level:3},{value:"Delete Peers",id:"delete-peers",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Expected Output",id:"expected-output",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-peers"},"Manage Peers"),(0,o.kt)("h2",{id:"pre-requirements"},"Pre-requirements"),(0,o.kt)("p",null,"Before you can create add and retrieve peers, you will need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/iotajs/how_tos/simple"},"Connect to a Node"),".")),(0,o.kt)("h2",{id:"add-peers"},"Add Peers"),(0,o.kt)("p",null,"You can add peers using the\n",(0,o.kt)("a",{parentName:"p",href:"/next/iotajs/references/client/classes/SingleNodeClient#peeradd"},"SingleNodeClient.peerAdd(multiAddress, alias?)")," function.\nYou will need to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"multiAddress")," and, optionally, and alias."),(0,o.kt)("h2",{id:"retrieve-peers"},"Retrieve Peers"),(0,o.kt)("p",null,"You can retrieve a ",(0,o.kt)("a",{parentName:"p",href:"/next/iotajs/references/client/classes/SingleNodeClient#peeradd"},"SingleNodeClient's")," peers using the\n",(0,o.kt)("a",{parentName:"p",href:"/next/iotajs/references/client/classes/SingleNodeClient#peers"},"SingleNodeClient.peers()")," function.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"peers()")," function\nwill return a list of ",(0,o.kt)("a",{parentName:"p",href:"/next/iotajs/references/client/interfaces/IPeer"},"peers"),"."),(0,o.kt)("h3",{id:"retrieve-peer-data"},"Retrieve Peer Data"),(0,o.kt)("p",null,"Once you have ",(0,o.kt)("a",{parentName:"p",href:"#retrieve-peers"},"retrieved your node's peers"),", you can use any of its\n",(0,o.kt)("a",{parentName:"p",href:"/next/iotajs/references/client/interfaces/IPeer#properties"},"properties")," to retrieve the peer's data."),(0,o.kt)("h2",{id:"delete-peers"},"Delete Peers"),(0,o.kt)("p",null,"You can delete a ",(0,o.kt)("a",{parentName:"p",href:"/next/iotajs/references/client/classes/SingleNodeClient#peeradd"},"SingleNodeClient's")," peer using the\n",(0,o.kt)("a",{parentName:"p",href:"/next/iotajs/references/client/classes/SingleNodeClient#peerdelete"},"SingleNodeClient.peerDelete(peerId)")," function. You will\nneed to provide a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"peerId"),"."),(0,o.kt)("h2",{id:"example-code"},"Example Code"),(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},'import { SingleNodeClient } from "@iota/iota.js";\n\nconst API_ENDPOINT = "http://localhost:14265/";\n\nasync function run() {\n    const client = new SingleNodeClient(API_ENDPOINT);\n\n    const peers = await client.peers();\n    console.log("Peers");\n\n    if (peers) {\n        for (const peer of peers) {\n            console.log("\\tId:", peer.id);\n            console.log("\\tMulti Address:", peer.multiAddresses);\n            console.log("\\tAlias:", peer.alias);\n            console.log("\\tRelation:", peer.relation);\n            console.log("\\tConnected:", peer.connected);\n            if (peer.gossip) {\n                if (peer.gossip.heartbeat) {\n                    console.log("\\tGossip Heartbeat");\n                    console.log("\\t\\tLatest Milestone Index:", peer.gossip.heartbeat.latestMilestoneIndex);\n                    console.log("\\t\\tPruned Milestone Index:", peer.gossip.heartbeat.prunedMilestoneIndex);\n                    console.log("\\t\\tSolid Milestone Index:", peer.gossip.heartbeat.solidMilestoneIndex);\n                    console.log("\\t\\tConnected Peers:", peer.gossip.heartbeat.connectedPeers);\n                    console.log("\\t\\tSynced Peers:", peer.gossip.heartbeat.syncedPeers);\n                }\n                console.log("\\tGossip Metrics");\n                console.log("\\t\\tNew Blocks:", peer.gossip.metrics.newBlocks);\n                console.log("\\t\\tKnown Blocks:", peer.gossip.metrics.knownBlocks);\n                console.log("\\t\\tReceived Blocks:", peer.gossip.metrics.receivedBlocks);\n                console.log("\\t\\tReceived Block Requests:", peer.gossip.metrics.receivedBlockRequests);\n                console.log("\\t\\tReceived Milestone Requests:", peer.gossip.metrics.receivedMilestoneRequests);\n                console.log("\\t\\tReceived Hearbeats:", peer.gossip.metrics.receivedHeartbeats);\n                console.log("\\t\\tSent Blocks:", peer.gossip.metrics.sentBlocks);\n                console.log("\\t\\tSent Block Requests:", peer.gossip.metrics.sentBlockRequests);\n                console.log("\\t\\tSent Milestone Requests:", peer.gossip.metrics.sentMilestoneRequests);\n                console.log("\\t\\tSent Heartbeats:", peer.gossip.metrics.sentHeartbeats);\n                console.log("\\t\\tDropped Packets:", peer.gossip.metrics.droppedPackets);\n                console.log();\n            }\n        }\n    } else {\n        console.log("\\nNo Peers");\n    }\n\n    const address = "/ip4/127.0.0.1/tcp/15601";\n    const peerId = "djhgkdjfghkdfjhdfkjghkdfgh";\n    const addedPeer = await client.peerAdd(`${address}/p2p/${peerId}`, "fred");\n    console.log("Added Peer");\n    console.log("\\tId:", addedPeer.id);\n\n    const peer2 = await client.peer(addedPeer.id);\n    console.log("Got Peer", peer2.id);\n\n    console.log("Deleted Peer");\n    await client.peerDelete(addedPeer.id);\n}\n\nrun()\n    .then(() => console.log("Done"))\n    .catch(err => console.error(err));\n'),(0,o.kt)("h3",{id:"expected-output"},"Expected Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Peers\n    Id: 12D3KooWNSCD7hha6BTPw44XeeKXcrAPBUGnPAY55gvXPen6zEAk\n    Multi Address: ['/ip4/217.251.138.169/tcp/15600']\n    Alias: undefined\n    Relation: autopeered\n    Connected: true\n    Gossip Heartbeat\n        Latest Milestone Index: 71452\n        Pruned Milestone Index: 55600\n        Solid Milestone Index: 71452\n        Connected Peers: 3\n        Synced Peers: 3\n    Gossip Metrics\n        New Blocks: 4282\n        Known Blocks: 6\n        Received Blocks: 4291\n        Received Block Requests: 0\n        Received Milestone Requests: 1\n        Received Hearbeats: 241\n        Sent Blocks: 22\n        Sent Block Requests: 6\n        Sent Milestone Requests: 1\n        Sent Heartbeats: 241\n        Dropped Packets: 0\n")))}u.isMDXComponent=!0}}]);