"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38305],{27997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var i=n(87462),o=(n(67294),n(3905));var a=n(34191),s=n(34259),r=n(18679),l=n(69319);const d={title:"Resolve an IOTA Identity",sidebar_label:"Resolve",description:"Explain how resolving works including arguments",image:"/img/Identity_icon.png",keywords:["Resolve"]},c=void 0,u={unversionedId:"concepts/decentralized_identifiers/resolve",id:"concepts/decentralized_identifiers/resolve",title:"Resolve an IOTA Identity",description:"Explain how resolving works including arguments",source:"@site/iota/external/identity.rs/v0.6.0/documentation/docs/concepts/decentralized_identifiers/resolve.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/resolve",permalink:"/identity.rs/concepts/decentralized_identifiers/resolve",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/iota/external/identity.rs/v0.6.0/documentation/docs/concepts/decentralized_identifiers/resolve.mdx",tags:[],version:"current",frontMatter:{title:"Resolve an IOTA Identity",sidebar_label:"Resolve",description:"Explain how resolving works including arguments",image:"/img/Identity_icon.png",keywords:["Resolve"]},sidebar:"docs",previous:{title:"Update",permalink:"/identity.rs/concepts/decentralized_identifiers/update"},next:{title:"Create a DID on a Private Tangle",permalink:"/identity.rs/concepts/decentralized_identifiers/private_tangle"}},m={},h=[{value:"Resolving a DID from the main network",id:"resolving-a-did-from-the-main-network",level:2},{value:"Resolving from a private tangle",id:"resolving-from-a-private-tangle",level:2},{value:"Resolution in the context of Verifiable Presentations",id:"resolution-in-the-context-of-verifiable-presentations",level:2},{value:"Resolving the history of a DID Document.",id:"resolving-the-history-of-a-did-document",level:2},{value:"Complete examples",id:"complete-examples",level:2}],p={toc:h};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DID resolution is the process of fetching a ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-documents"},"DID Document")," corresponding to a given ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID"),".\nThe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"IOTA Identity Framework")," supports resolving DID Documents that are stored on an IOTA Tangle (public or private). The main tool supplied\nby the IOTA Identity Framework to handle DID Document resolution in a type safe manner is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver"),". A DID Resolver as defined in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-resolvers"},"W3C Decentralized Identifiers specification"),"\nenforces the signature of the resolution function in a manner that is more centered around Web/API resolution rather than a strongly typed framework. This is the reason why the ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver")," provided by the IOTA Identity Framework deviates somewhat from\nthe W3C specification."),(0,o.kt)("h2",{id:"resolving-a-did-from-the-main-network"},"Resolving a DID from the main network"),(0,o.kt)("p",null,'The following example demonstrates how to resolve the DID: "did:iota:H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV" from the ',(0,o.kt)("inlineCode",{parentName:"p"},"main")," network."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use identity_iota::client::Resolver;\nuse identity_iota::iota_core::IotaDID;\nuse identity_iota::client::ResolvedIotaDocument;\n\nlet resolver: Resolver = Resolver::new().await?;\nlet did: IotaDID = IotaDID::parse("did:iota:H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV")?;\n\nlet doc: ResolvedIotaDocument = resolver.resolve(&did).await?;\n\n'))),(0,o.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {\n    DID,\n    Resolver,\n    ResolvedDocument,\n} = require('@iota/identity-wasm/node');\n\n const resolver = new Resolver();\n const did = DID.parse(\"did:iota:H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV\");\n const doc = await resolver.resolve(did);\n\n")))),"What happens in this example can be explained on a high level as follows: The Resolver queries the Tangle for the history of the DID Document and utilizes it to recreate and validate the latest state of the DID Document.",(0,o.kt)("h2",{id:"resolving-from-a-private-tangle"},"Resolving from a private tangle"),(0,o.kt)("p",null,"Resolving a DID from a private tangle is similar to resolving a DID from the main net. The only difference is that\nthe resolver needs to be configured to have a client capable of operating on said private tangle. Building a ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," configured for a specified Tangle is explained in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/examples/low-level-api/private_tangle.rs"},"this example in Rust")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/bindings/wasm/examples/src/private_tangle.js"},"this example in Javascript"),"."),(0,o.kt)("p",null,"The following example demonstrates how one can setup a ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver")," with a given ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," and then attempt resolving a specified ",(0,o.kt)("inlineCode",{parentName:"p"},"did")," which may be on any Tangle (public or private)."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use identity_iota::client::Resolver;\nuse identity_iota::client::ResolverBuilder;\nuse identity_iota::iota_core::IotaDID;\nuse identity_iota::client::Client;\nuse identity_iota::client::Result;\n\n\nasync fn build_and_resolve(client: Client, did: IotaDID) -> Result<ResolvedIotaDocument> {\n    let resolver_builder: ResolverBuilder = ResolverBuilder::new().await?;\n    let resolver: Resolver = resolver_builder.client(client).build().await?;\n    resolver.resolve(did).await\n}\n"))),(0,o.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {\n    DID,\n    Resolver,\n    ResolvedDocument,\n    Client,\n} = require('@iota/identity-wasm/node');\n\n\nasync function buildAndResolve(client, did) {\n        const resolver = await Resolver.builder().client(client).build();\n        const resolvedDocument = await resolver.resolve(did);\n        return resolvedDocument;\n}\n\n")))),(0,o.kt)("p",null,"In the example above the resolver will automatically try to resolve the DID from the network specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"did")," (See ",(0,o.kt)("a",{parentName:"p",href:"../../specs/did/iota_did_method_spec#did-format"},"DID Format"),").\nIf the resolver was not built with a client configured for the given network name then an error will be thrown. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ResolverBuilder")," can configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver")," to use\nmultiple networks as long as they have distinct valid names (max six characters)."),(0,o.kt)("p",null,"Note that in the context of an identity managed by an ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," the DID document can also be resolved by simply calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," directly."),(0,o.kt)("h2",{id:"resolution-in-the-context-of-verifiable-presentations"},"Resolution in the context of Verifiable Presentations"),(0,o.kt)("p",null,"As explained in ",(0,o.kt)("a",{parentName:"p",href:"./../verifiable_credentials/verifiable_presentations"},"Verifiable Presentations")," one resolves the DID Documents of the credential issuers and presentation holder\nduring verification of a verifiable presentation. Resolving the necessary DID Documents is done automatically when verifying presentations via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver"),", but there are certain\nadvanced use cases where more control is desired. To accommodate for such situations the ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver")," also comes equipped with additional stand alone methods that enable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"resolving a presentation holder's DID Document"),(0,o.kt)("li",{parentName:"ul"},"resolving all DID Documents of the distinct issuers of the credentials contained in the presentation"),(0,o.kt)("li",{parentName:"ul"},"resolving the issuer's DID Document for a given verifiable credential")),(0,o.kt)("h2",{id:"resolving-the-history-of-a-did-document"},"Resolving the history of a DID Document."),(0,o.kt)("p",null,"The fact that a DID Document ",(0,o.kt)("a",{parentName:"p",href:"/identity.rs/concepts/decentralized_identifiers/update"},"can be updated")," implies that the state of the DID Document can change over time, or in other words the result of resolving a DID\nalso depends on when this operation was carried out. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver")," provides a way to view the entire history of a DID Document (up to the time when the method is called)."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use identity_iota::client::Resolver;\nuse identity_iota::iota_core::IotaDID;\nuse identity_iota::client::DocumentHistory;\nuse identity_iota::client::Result;\n\n\nasync fn call_resolve_history(did: IotaDID) -> Result<DocumentHistory> {\n    let resolver: Resolver = Resolver::new().await?;\n    resolver.resolve_history(did).await?\n}\n"))),(0,o.kt)(r.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {\n    DID,\n    Resolver,\n    DocumentHistory,\n} = require('@iota/identity-wasm/node');\n\n\nasync function callResolveHistory(did) {\n        const resolver = new Resolver();\n        const documentHistory = await resolver.resolveHistory(did);\n        return documentHistory;\n}\n\n")))),(0,o.kt)("h2",{id:"complete-examples"},"Complete examples"),(0,o.kt)("p",null,"This section shows complete examples from the Iota Identity Framework code base. The first example creates a DID Document, publishes it to the Tangle and then resolves it."),(0,o.kt)(a.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/resolve-did?lite=true",rustContent:'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A basic example that generates a DID Document, publishes it to the Tangle,\n//! and retrieves information through DID Document resolution/dereferencing.\n//!\n//! See also https://www.w3.org/TR/did-core/#did-resolution and https://www.w3.org/TR/did-core/#did-url-dereferencing\n//!\n//! cargo run --example resolve_did\n\nuse identity_iota::client::Receipt;\nuse identity_iota::client::ResolvedIotaDocument;\nuse identity_iota::client::Resolver;\nuse identity_iota::iota_core::IotaDID;\nuse identity_iota::prelude::*;\n\nmod create_did;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Create a signed DID Document and KeyPair (see create_did.rs).\n  let (document, _, _): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // ===========================================================================\n  // Resolve DID Document\n  // ===========================================================================\n\n  let doc_did: &IotaDID = document.id();\n\n  // Retrieve the published DID Document from the Tangle.\n  let resolver: Resolver = Resolver::new().await?;\n  let resolved_did_document: ResolvedIotaDocument = resolver.resolve(doc_did).await?;\n\n  println!("Resolved DID Document > {:#?}", resolved_did_document);\n\n  // The resolved document should be the same as what we published.\n  assert_eq!(resolved_did_document.document, document);\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/bindings/wasm/examples/src/resolve_did.js",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/examples/low-level-api/resolve_did.rs",mdxType:"CodeSnippet"}),(0,o.kt)("p",null,"This second example demonstrates creating, publishing changes and then resolving the history of a DID Document."),(0,o.kt)(s.Z,{groupId:"programming-languages",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {\n    Client,\n    Document,\n    KeyPair,\n    KeyType,\n    MethodScope,\n    Service,\n    Timestamp,\n    VerificationMethod\n} from \'@iota/identity-wasm\';\nimport {createIdentity} from "./create_did";\n\n/**\n Advanced example that performs multiple updates and demonstrates how to resolve the DID Document history to view them.\n\n @param {{network: Network, explorer: ExplorerUrl}} clientConfig\n **/\nasync function resolveHistory(clientConfig) {\n    // Create a client instance to publish messages to the configured Tangle network.\n    const client = await Client.fromConfig({\n        network: clientConfig.network\n    });\n\n    // ===========================================================================\n    // DID Creation\n    // ===========================================================================\n\n    // Create a new identity (see "create_did.js" example).\n    const {doc, key, receipt: originalReceipt} = await createIdentity(clientConfig);\n\n    // ===========================================================================\n    // Integration Chain Spam\n    // ===========================================================================\n\n    // Publish several spam messages to the same index as the integration chain on the Tangle.\n    // These are not valid DID documents and are simply to demonstrate that invalid messages can be\n    // included in the history, potentially for debugging invalid DID documents.\n    const intIndex = doc.integrationIndex();\n    await client.publishJSON(intIndex, {"intSpam:1": true});\n    await client.publishJSON(intIndex, {"intSpam:2": true});\n    await client.publishJSON(intIndex, {"intSpam:3": true});\n    await client.publishJSON(intIndex, {"intSpam:4": true});\n    await client.publishJSON(intIndex, {"intSpam:5": true});\n\n    // ===========================================================================\n    // Integration Chain Update 1\n    // ===========================================================================\n\n    // Prepare an integration chain update, which writes the full updated DID document to the Tangle.\n    const intDoc1 = doc.clone();\n\n    // Add a new Service with the tag "linked-domain-1"\n    const service1 = new Service({\n        id: intDoc1.id().toUrl().join("#linked-domain-1"),\n        type: "LinkedDomains",\n        serviceEndpoint: "https://iota.org",\n    });\n    intDoc1.insertService(service1);\n\n    // Add a second Service with the tag "linked-domain-2"\n    const service2 = new Service({\n        id: intDoc1.id().toUrl().join("#linked-domain-2"),\n        type: "LinkedDomains",\n        serviceEndpoint: {\n            "origins": ["https://iota.org/", "https://example.com/"]\n        },\n    });\n    intDoc1.insertService(service2);\n\n    // Add a new VerificationMethod with a new KeyPair, with the tag "keys-1"\n    const keys1 = new KeyPair(KeyType.Ed25519);\n    const method1 = new VerificationMethod(intDoc1.id(), keys1.type(), keys1.public(), "keys-1");\n    intDoc1.insertMethod(method1, MethodScope.VerificationMethod());\n\n    // Add the `messageId` of the previous message in the chain.\n    // This is REQUIRED in order for the messages to form a chain.\n    // Skipping / forgetting this will render the publication useless.\n    intDoc1.setMetadataPreviousMessageId(originalReceipt.messageId());\n    intDoc1.setMetadataUpdated(Timestamp.nowUTC());\n\n    // Sign the DID Document with the original private key.\n    intDoc1.signSelf(key, intDoc1.defaultSigningMethod().id());\n\n    // Publish the updated DID Document to the Tangle, updating the integration chain.\n    // This may take a few seconds to complete proof-of-work.\n    const intReceipt1 = await client.publishDocument(intDoc1);\n\n    // Log the results.\n    console.log(`Int. Chain Update (1): ${clientConfig.explorer.messageUrl(intReceipt1.messageId())}`);\n\n    // ===========================================================================\n    // DID History 1\n    // ===========================================================================\n\n    // Retrieve the message history of the DID.\n    const history1 = await client.resolveHistory(doc.id());\n\n    // The history shows two documents in the integration chain.\n    console.log(`History (1): ${JSON.stringify(history1, null, 2)}`);\n\n    // ===========================================================================\n    // Integration Chain Update 2\n    // ===========================================================================\n\n    // Publish a second integration chain update\n    let intDoc2 = Document.fromJSON(intDoc1.toJSON());\n\n    // Remove the #keys-1 VerificationMethod\n    intDoc2.removeMethod(intDoc2.id().toUrl().join("#keys-1"));\n\n    // Remove the #linked-domain-1 Service\n    intDoc2.removeService(intDoc2.id().toUrl().join("#linked-domain-1"));\n\n    // Add a VerificationMethod with a new KeyPair, called "keys-2"\n    const keys2 = new KeyPair(KeyType.Ed25519);\n    const method2 = new VerificationMethod(intDoc2.id(), keys2.type(), keys2.public(), "keys-2");\n    intDoc2.insertMethod(method2, MethodScope.VerificationMethod());\n\n    // Note: the `previous_message_id` points to the `message_id` of the last integration chain\n    //       update.\n    intDoc2.setMetadataPreviousMessageId(intReceipt1.messageId());\n    intDoc2.setMetadataUpdated(Timestamp.nowUTC());\n    intDoc2.signSelf(key, intDoc2.defaultSigningMethod().id());\n    const intReceipt2 = await client.publishDocument(intDoc2);\n\n    // Log the results.\n    console.log(`Int. Chain Update (2): ${clientConfig.explorer.messageUrl(intReceipt2.messageId())}`);\n\n    // ===========================================================================\n    // DID History 2\n    // ===========================================================================\n\n    // Retrieve the updated message history of the DID.\n    const history2 = await client.resolveHistory(doc.id());\n\n    // The history now shows three documents in the integration chain.\n    console.log(`History (2): ${JSON.stringify(history2, null, 2)}`);\n}\n\nexport {resolveHistory};\n')),(0,o.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Advanced example that performs multiple updates and demonstrates how to resolve the\n//! DID Document history to view them.\n//!\n//! cargo run --example did_history\n\nuse identity_iota::client::Client;\nuse identity_iota::client::DocumentHistory;\nuse identity_iota::client::Receipt;\nuse identity_iota::client::Result;\nuse identity_iota::core::json;\nuse identity_iota::core::FromJson;\nuse identity_iota::core::Timestamp;\nuse identity_iota::crypto::KeyPair;\nuse identity_iota::did::MethodScope;\nuse identity_iota::did::Service;\nuse identity_iota::did::DID;\nuse identity_iota::iota_core::IotaDocument;\nuse identity_iota::iota_core::IotaService;\nuse identity_iota::iota_core::IotaVerificationMethod;\nuse identity_iota::prelude::*;\n\nmod create_did;\n\n#[rustfmt::skip]\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Create a client instance to send messages to the Tangle.\n  let client: Client = Client::new().await?;\n\n  // ===========================================================================\n  // DID Creation\n  // ===========================================================================\n\n  // Create a signed DID Document and KeyPair (see "create_did.rs" example).\n  let (document, keypair, original_receipt): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // ===========================================================================\n  // Integration Chain Spam\n  // ===========================================================================\n\n  // Publish several spam messages to the same index as the integration chain on the Tangle.\n  // These are not valid DID messages and are simply to demonstrate that invalid messages\n  // can be included in the history for debugging invalid DID documents.\n  let int_index: &str = document.integration_index();\n  client.publish_json(int_index, &json!({ "intSpam:1": true })).await?;\n  client.publish_json(int_index, &json!({ "intSpam:2": true })).await?;\n  client.publish_json(int_index, &json!({ "intSpam:3": true })).await?;\n  client.publish_json(int_index, &json!({ "intSpam:4": true })).await?;\n  client.publish_json(int_index, &json!({ "intSpam:5": true })).await?;\n\n  // ===========================================================================\n  // Integration Chain Update 1\n  // ===========================================================================\n\n  // Prepare an integration chain update, which writes the full updated DID document to the Tangle.\n  let int_doc_1 = {\n    let mut int_doc_1 = document.clone();\n\n    // Add a new Service with the tag "linked-domain-1".\n    let service: IotaService = Service::from_json_value(json!({\n      "id": int_doc_1.id().to_url().join("#linked-domain-1")?,\n      "type": "LinkedDomains",\n      "serviceEndpoint": "https://iota.org/"\n    }))?;\n    assert!(int_doc_1.insert_service(service));\n\n    // Add a second Service with the tag "linked-domain-2".\n    let service: IotaService = Service::from_json_value(json!({\n      "id": int_doc_1.id().to_url().join("#linked-domain-2")?,\n      "type": "LinkedDomains",\n      "serviceEndpoint": {\n        "origins": ["https://iota.org/", "https://example.com/"]\n      }\n    }))?;\n    assert!(int_doc_1.insert_service(service));\n\n    // Add a new VerificationMethod with a new KeyPair, with the tag "keys-1"\n    let keys_1: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n    let method_1: IotaVerificationMethod = IotaVerificationMethod::new(int_doc_1.id().clone(), keys_1.type_(), keys_1.public(), "keys-1")?;\n    assert!(int_doc_1.insert_method(method_1, MethodScope::VerificationMethod).is_ok());\n\n    // Add the `message_id` of the previous message in the chain.\n    // This is REQUIRED in order for the messages to form a chain.\n    // Skipping / forgetting this will render the publication useless.\n    int_doc_1.metadata.previous_message_id = *original_receipt.message_id();\n    int_doc_1.metadata.updated = Some(Timestamp::now_utc());\n\n    // Sign the DID Document with the original private key.\n    int_doc_1.sign_self(keypair.private(), int_doc_1.default_signing_method()?.id().clone())?;\n\n    int_doc_1\n  };\n\n  // Publish the updated DID Document to the Tangle, updating the integration chain.\n  // This may take a few seconds to complete proof-of-work.\n  let int_receipt_1: Receipt = client.publish_document(&int_doc_1).await?;\n\n  // ===========================================================================\n  // DID History 1\n  // ===========================================================================\n\n  // Retrieve the message history of the DID.\n  let history_1: DocumentHistory = client.resolve_history(document.id()).await?;\n\n  // The history shows two documents in the integration chain.\n  println!("History (1) = {:#?}", history_1);\n\n  // ===========================================================================\n  // Integration Chain Update 2\n  // ===========================================================================\n\n  // Publish a second integration chain update\n  let int_doc_2 = {\n    let mut int_doc_2 = int_doc_1.clone();\n\n    // Remove the #keys-1 VerificationMethod\n    int_doc_2.remove_method(&int_doc_2.id().to_url().join("#keys-1")?)?;\n\n    // Remove the #linked-domain-1 Service\n    int_doc_2.remove_service(&int_doc_2.id().to_url().join("#linked-domain-1")?);\n\n    // Add a VerificationMethod with a new KeyPair, called "keys-2"\n    let keys_2: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n    let method_2: IotaVerificationMethod = IotaVerificationMethod::new(int_doc_2.id().clone(), keys_2.type_(), keys_2.public(), "keys-2")?;\n    assert!(int_doc_2.insert_method(method_2, MethodScope::VerificationMethod).is_ok());\n\n    // Note: the `previous_message_id` points to the `message_id` of the last integration chain\n    //       update.\n    int_doc_2.metadata.previous_message_id = *int_receipt_1.message_id();\n    int_doc_2.metadata.updated = Some(Timestamp::now_utc());\n\n    int_doc_2.sign_self(keypair.private(), int_doc_2.default_signing_method()?.id().clone())?;\n    int_doc_2\n  };\n  let _int_receipt_2: Receipt = client.publish_document(&int_doc_2).await?;\n\n  // ===========================================================================\n  // DID History 2\n  // ===========================================================================\n\n  // Retrieve the updated message history of the DID.\n  let history_2: DocumentHistory = client.resolve_history(document.id()).await?;\n\n  // The history now shows three documents in the integration chain.\n  println!("History (2) = {:#?}", history_2);\n\n  Ok(())\n}\n'))),(0,o.kt)("p",null,"Note that this example used the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," to resolve the history of the DID Document, but one could also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver")," for this task."))}v.isMDXComponent=!0},34191:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(86010),o=n(67294),a=n(69319);function s(e){let{nodeReplitLink:t,rustContent:n,nodeGithubLink:s,rustGithubLink:r}=e;const[l,d]=o.useState("node"),c=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),o.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,o.useEffect)((()=>{let e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||(i="rust"),"rust"!==i||n||(i="node"),d(i)})),o.createElement("div",null,o.createElement("div",{className:(0,i.Z)("langSelector")},t&&o.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===l,inactiveButton:"node"!==l}),onClick:()=>{localStorage.setItem("lang","node"),d("node")}},"Node.js"),n&&o.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==l,inactiveButton:"rust"!==l}),onClick:()=>{localStorage.setItem("lang","rust"),d("rust")}},"Rust")),o.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===l?o.createElement(o.Fragment,null,o.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):o.createElement("div",{className:(0,i.Z)("rustContainer")},o.createElement(a.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},n))),o.createElement("div",{className:(0,i.Z)("githubLink")},s&&"node"===l&&o.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",c),r&&"rust"===l&&o.createElement("a",{href:r,target:"_blank"},"GitHub\xa0",c)))}},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),o=n(86010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(87462),o=n(67294),a=n(86010),s=n(51048),r=n(33609),l=n(1943),d=n(72957);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:h,groupId:p,className:v}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=h??g.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),D=(0,r.l)(y,((e,t)=>e.value===t.value));if(D.length>0)throw new Error(`Docusaurus error: Duplicate values "${D.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const _=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==_&&!y.some((e=>e.value===_)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${_}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,l.U)(),[k,I]=(0,o.useState)(_),b=[],{blockElementScrollPositionUntilNextRender:R}=(0,d.o5)();if(null!=p){const e=f[p];null!=e&&e!==k&&y.some((t=>t.value===e))&&I(e)}const T=e=>{const t=e.currentTarget,n=b.indexOf(t),i=y[n].value;i!==k&&(R(t),I(i),null!=p&&w(p,String(i)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=b.indexOf(e.currentTarget)+1;n=b[t]??b[0];break}case"ArrowLeft":{const t=b.indexOf(e.currentTarget)-1;n=b[t]??b[b.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},v)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,i.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>b.push(e),onKeyDown:x,onFocus:T,onClick:T},s,{className:(0,a.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":k===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function h(e){const t=(0,s.Z)();return o.createElement(m,(0,i.Z)({key:String(t)},e))}}}]);