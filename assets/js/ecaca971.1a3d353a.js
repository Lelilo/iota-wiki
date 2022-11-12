"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43729],{49173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));var o=n(99663),r=n(34259),l=n(18679);n(69319);const d={title:"Update DID Documents",sidebar_label:"Update",description:"How DID Documents can be manipulated and how updates should be published",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Update","Publish"]},s=void 0,c={unversionedId:"concepts/decentralized_identifiers/update",id:"concepts/decentralized_identifiers/update",title:"Update DID Documents",description:"How DID Documents can be manipulated and how updates should be published",source:"@site/iota/external/identity.rs/v0.5.0/documentation/docs/concepts/decentralized_identifiers/update.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/update",permalink:"/identity.rs/0.5/concepts/decentralized_identifiers/update",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/iota/external/identity.rs/v0.5.0/documentation/docs/concepts/decentralized_identifiers/update.mdx",tags:[],version:"current",frontMatter:{title:"Update DID Documents",sidebar_label:"Update",description:"How DID Documents can be manipulated and how updates should be published",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Update","Publish"]},sidebar:"docs",previous:{title:"Create and Publish",permalink:"/identity.rs/0.5/concepts/decentralized_identifiers/create"},next:{title:"Resolve",permalink:"/identity.rs/0.5/concepts/decentralized_identifiers/resolve"}},p={},u=[{value:"Verification Methods",id:"verification-methods",level:3},{value:"Verification Relationships",id:"verification-relationships",level:3},{value:"Services",id:"services",level:3},{value:"Example",id:"example",level:2},{value:"Creating Identity",id:"creating-identity",level:3},{value:"Adding Verification Methods",id:"adding-verification-methods",level:3},{value:"Adding Verification Relationships",id:"adding-verification-relationships",level:3},{value:"Adding a Service",id:"adding-a-service",level:3},{value:"Removing a Verification Method",id:"removing-a-verification-method",level:3}],m={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DID Documents can be extended by adding ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#verification-methods"},"Verification Methods"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#services"},"Services")," and custom properties.\nA verification method adds public keys, which can be used to digitally sign things like a DID message or a verifiable credential, while a service can provide metadata around the identity via URIs."),(0,i.kt)("h3",{id:"verification-methods"},"Verification Methods"),(0,i.kt)("p",null,"As demonstrated by the ",(0,i.kt)("a",{parentName:"p",href:"#example"},"example")," below, the Iota identity framework offers easy-to-use methods for adding verification methods."),(0,i.kt)("p",null,"The following properties can be specified for a verification method:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": a ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DID URL")," for the verification method. It can be specified by setting the ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#fragment"},"fragment"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type"),": specifies the type of the Verification Method. The framework supports ",(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"X25519")," key types. This property is automatically filled by the framework when specifying the verification material."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"publicKeyMultibase"),": multibase encoded public key which concludes the ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#verification-material"},"verification material"),". This can be automatically generated by the framework or manually provided by users.")),(0,i.kt)("h3",{id:"verification-relationships"},"Verification Relationships"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#verification-relationships"},"Verification relationships")," express the relationship between the DID subject and the verification method. It can be used to specify the\nthe purpose of the verification method."),(0,i.kt)("p",null,"The following relationships are supported by the Identity Framework:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#authentication"},"Authentication")),": used to specify authentication methods for the DID subject."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#assertion"},"Assertion")),": can be used for verifiable credential verification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#assertion"},"Key Agreement")),": used for establishing secure communication channels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#capability-invocation"},"Capability Invocation")),": can be used to authorize updates to the DID Document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#capability-delegation"},"Capability Delegation")),": a mechanism to delegate cryptographic capability to another party.")),(0,i.kt)("p",null,"Verification methods can be either ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#example-14-embedding-and-referencing-verification-methods"},"embedded or referenced"),". Referencing verification\nmethods allow them to be used by more than one verification relationship.\nUpon creating a verification method using the identity framework, specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"MethodScope")," option will result in an embedded verification method. Leaving that option unset will create the verification method as\na map entry of the ",(0,i.kt)("inlineCode",{parentName:"p"},"verificationMethod")," property. Verification relationships can be added afterwards using references."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Any update to the DID document must be signed using a verification method with ",(0,i.kt)("inlineCode",{parentName:"p"},"capability invocation")," relationship to be valid. Removing all capability invocation verification methods\ndisallows any further updates to the document.")),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#services"},"Services")," allow adding other ways of communicating with the DID subject. An endpoint included in the DID Document can offer a way of reaching services for different purposes\nlike authentication, communicating, and discovery."),(0,i.kt)("p",null,"The following properties can be specified for a service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),":  a ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DID URL")," for referecing the service in the DID document.\nIt can be specified by setting the ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#fragment"},"fragment"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type"),": a string used to maximize interoperability between services. The framework does not perform any checks on the content of this string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"serviceEndpoint"),": a URL that points to the service endpoint.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following example demonstrates adding verification methods and services to a DID Document."),(0,i.kt)(o.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/manipulate-did?lite=true",rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_manipulate\n\nuse std::path::PathBuf;\n\nuse identity::account::Account;\nuse identity::account::IdentitySetup;\nuse identity::account::MethodContent;\nuse identity::account::Result;\nuse identity::account_storage::Stronghold;\nuse identity::core::Url;\nuse identity::did::MethodRelationship;\nuse identity::iota::ExplorerUrl;\nuse identity::iota_core::IotaDID;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // ===========================================================================\n  // Create Identity - Similar to create_did example\n  // ===========================================================================\n\n  // Stronghold settings\n  let stronghold_path: PathBuf = "./example-strong.hodl".into();\n  let password: String = "my-password".to_owned();\n  let stronghold: Stronghold = Stronghold::new(&stronghold_path, password, None).await?;\n\n  // Create a new Account with the default configuration\n  let mut account: Account = Account::builder()\n    .storage(stronghold)\n    .create_identity(IdentitySetup::default())\n    .await?;\n\n  // ===========================================================================\n  // Identity Manipulation\n  // ===========================================================================\n\n  // Add another Ed25519 verification method to the identity\n  account\n    .update_identity()\n    .create_method()\n    .content(MethodContent::GenerateEd25519)\n    .fragment("my-next-key")\n    .apply()\n    .await?;\n\n  // Associate the newly created method with additional verification relationships\n  account\n    .update_identity()\n    .attach_method_relationship()\n    .fragment("my-next-key")\n    .relationships(vec![\n      MethodRelationship::CapabilityDelegation,\n      MethodRelationship::CapabilityInvocation,\n    ])\n    .apply()\n    .await?;\n\n  // Add a new service to the identity.\n  account\n    .update_identity()\n    .create_service()\n    .fragment("my-service-1")\n    .type_("MyCustomService")\n    .endpoint(Url::parse("https://example.com")?)\n    .apply()\n    .await?;\n\n  // Remove the Ed25519 verification method\n  account\n    .update_identity()\n    .delete_method()\n    .fragment("my-next-key")\n    .apply()\n    .await?;\n\n  // Retrieve the DID from the newly created identity.\n  let iota_did: &IotaDID = account.did();\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/bindings/wasm/examples-account/src/manipulate_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/examples/account/manipulate_did.rs",mdxType:"CodeSnippet"}),(0,i.kt)("h3",{id:"creating-identity"},"Creating Identity"),(0,i.kt)("p",null,"The Example above starts by ",(0,i.kt)("a",{parentName:"p",href:"/identity.rs/0.5/concepts/decentralized_identifiers/create"},"creating an identity using the account"),"."),(0,i.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let mut account: Account = Account::builder()\n    .storage(stronghold)\n    .create_identity(IdentitySetup::default())\n    .await?;\n"))),(0,i.kt)(l.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let builder = new AccountBuilder({\n    storage,\n});\nlet account = await builder.createIdentity();\n")))),(0,i.kt)("p",null,"This will create a DID document and publish it to the tangle."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         }\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:27:48Z"\n   }\n}\n')),(0,i.kt)("p",null,"The created document only contains one verification method with ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#capability-invocation"},"capabilityInvocation")," relationship.\nThis method is used to sign the DID Document for publication to the Tangle.\nThe signature proves that the publisher of the document is in control over the capability invocation keys and is allowed to create, update or delete the DID Document."),(0,i.kt)("p",null,"Any future updates to the DID Document in this example will be signed using this verification method. The Account will automatically sign each update with this method so individual\nupdates don't have to be explicitly signed."),(0,i.kt)("p",null,"Furthermore, it's possible to rotate a capability Invocation key. In this case, the Account will sign next update with a key which was valid in the previous state of the DID Document. Afterwards it will\nuse the first (oldest) of the remaining capability invocation keys as a default signing method.\nOther capability invocation keys can still be explicitly specified to sign an update. These can be set in ",(0,i.kt)("inlineCode",{parentName:"p"},"PublishOptions"),"."),(0,i.kt)("p",null,"Note that the Account does not allow removing all capability invocation keys."),(0,i.kt)("h3",{id:"adding-verification-methods"},"Adding Verification Methods"),(0,i.kt)("p",null,"Another verification method can be added to the DID document using the Account:"),(0,i.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'account\n    .update_identity()\n    .create_method()\n    .content(methodcontent::generateed25519)\n    .fragment("my-next-key")\n    .apply()\n    .await?;\n'))),(0,i.kt)(l.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await account.createMethod({\n    content: MethodContent.GenerateEd25519(),\n    fragment: "my-next-key"\n})\n')))),(0,i.kt)("p",null,"The code above creates a new verification method that includes a newly generated Ed25519 public key,\nsigns the updated document using the private key of the default ",(0,i.kt)("inlineCode",{parentName:"p"},"capabilityInvocation")," verification method\nand publishes the document to the tangle."),(0,i.kt)("p",null,"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"MethodScope")," is not specified, the verification method will be created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"verificationMethod")," map. The updated DID Document will look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "verificationMethod":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z2Zthec5siTfxCjPwZUHGDGybKNy9oc3ZYeftvEE2nEL3"\n         }\n      ],\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         }\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:28:06Z"\n   }\n}\n')),(0,i.kt)("h3",{id:"adding-verification-relationships"},"Adding Verification Relationships"),(0,i.kt)("p",null,"Verification relationship can be attached to a verification method by referencing its fragment."),(0,i.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'account\n    .update_identity()\n    .attach_method_relationship()\n    .fragment("my-next-key")\n    .relationships(vec![\n      MethodRelationship::CapabilityDelegation,\n      MethodRelationship::CapabilityInvocation,\n    ])\n    .apply()\n    .await?;\n'))),(0,i.kt)(l.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await account.attachMethodRelationships({\n    fragment: "my-next-key",\n    relationships: [\n        MethodRelationship.CapabilityDelegation,\n        MethodRelationship.CapabilityInvocation\n    ]\n})\n')))),(0,i.kt)("p",null,"This will add ",(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityDelegation")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityInvocation")," relationships to the created verification method with the fragment ",(0,i.kt)("inlineCode",{parentName:"p"},"my-next-key"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"capabilityInvocation"),"\nproperty now has both an embedded and a referenced verification method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "verificationMethod":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z2Zthec5siTfxCjPwZUHGDGybKNy9oc3ZYeftvEE2nEL3"\n         }\n      ],\n      "capabilityDelegation":[\n         "did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key"\n      ],\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         },\n         "did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key"\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:28:23Z"\n   }\n}\n')),(0,i.kt)("h3",{id:"adding-a-service"},"Adding a Service"),(0,i.kt)("p",null,"Similar to verification methods, services can be added to a DID Document."),(0,i.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'account\n    .update_identity()\n    .create_service()\n    .fragment("my-service-1")\n    .type_("MyCustomService")\n    .endpoint(Url::parse("https://example.com")?)\n    .apply()\n    .await?;\n'))),(0,i.kt)(l.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await account.createService({\n   fragment: "my-service-1",\n   type: "MyCustomService",\n   endpoint: "https://example.com"\n})\n')))),(0,i.kt)("p",null,"In JavaScript, the endpoint property type is a string, this must be a valid URL, otherwise an error will be thrown.\nAdditionally, custom properties can be added to a service by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," in both Rust and JavaScript."),(0,i.kt)("p",null,"The updated Document with the newly created service looks as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "verificationMethod":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z2Zthec5siTfxCjPwZUHGDGybKNy9oc3ZYeftvEE2nEL3"\n         }\n      ],\n      "capabilityDelegation":[\n         "did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key"\n      ],\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         },\n         "did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key"\n      ],\n      "service":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-service-1",\n            "type":"MyCustomService",\n            "serviceEndpoint":"https://example.com/"\n         }\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:28:34Z"\n   }\n}\n')),(0,i.kt)("h3",{id:"removing-a-verification-method"},"Removing a Verification Method"),(0,i.kt)("p",null,"Verification methods and/or their relationships can be removed from the DID Document. The following code removes the verification method that we created previously."),(0,i.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'account\n    .update_identity()\n    .delete_method()\n    .fragment("my-next-key")\n    .apply()\n    .await?;\n'))),(0,i.kt)(l.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await account.deleteMethod({fragment: "my-next-key"})\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         }\n      ],\n      "service":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-service-1",\n            "type":"MyCustomService",\n            "serviceEndpoint":"https://example.com/"\n         }\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:29:03Z"\n   }\n}\n')),(0,i.kt)("p",null,"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"capabilityDelegation")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"verificationMethod")," properties are also removed from the DID Document since they became empty after the only verification method they contained and referenced was removed."),(0,i.kt)("p",null,"Furthermore and similar to deleting verification methods, services can be deleted using ",(0,i.kt)("inlineCode",{parentName:"p"},"account.update_identity().delete_service()...")," in Rust and ",(0,i.kt)("inlineCode",{parentName:"p"},"account.deleteService(..)")," in JavaScript."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In this example, a message is published to the tangle every time the document is updated. These messages can be unnecessary. Instead, one message can be published that contains all the updates to the DID Document.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/examples/account/lazy.rs"},"lazy example for Rust")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/bindings/wasm/examples-account/src/lazy.ts"},"lazy example for JS")," to learn more about lazy publishing.")))}h.isMDXComponent=!0},99663:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(86010),i=n(67294),o=n(69319);function r(e){let{nodeReplitLink:t,rustContent:n,nodeGithubLink:r,rustGithubLink:l}=e;const[d,s]=i.useState("node"),c=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),i.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,i.useEffect)((()=>{let e=localStorage.getItem("lang"),a=e||"node";"node"!==a||t||(a="rust"),"rust"!==a||n||(a="node"),s(a)})),i.createElement("div",null,i.createElement("div",{className:(0,a.Z)("langSelector")},t&&i.createElement("button",{className:(0,a.Z)("button","languageButton","mr-sm",{activeButton:"node"===d,inactiveButton:"node"!==d}),onClick:()=>{localStorage.setItem("lang","node"),s("node")}},"Node.js"),n&&i.createElement("button",{className:(0,a.Z)("button","languageButton",{activeButton:"rust"==d,inactiveButton:"rust"!==d}),onClick:()=>{localStorage.setItem("lang","rust"),s("rust")}},"Rust")),i.createElement("div",{className:(0,a.Z)("codeSnippetContainer")},"node"===d?i.createElement(i.Fragment,null,i.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):i.createElement("div",{className:(0,a.Z)("rustContainer")},i.createElement(o.Z,{className:(0,a.Z)("noMarginBottom"),language:"rust"},n))),i.createElement("div",{className:(0,a.Z)("githubLink")},r&&"node"===d&&i.createElement("a",{href:r,target:"_blank"},"GitHub\xa0",c),l&&"rust"===d&&i.createElement("a",{href:l,target:"_blank"},"GitHub\xa0",c)))}},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),i=n(67294),o=n(86010),r=n(51048),l=n(33609),d=n(1943),s=n(72957);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:m,groupId:h,className:f}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,d.U)(),[N,x]=(0,i.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&x(e)}const B=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==N&&(D(t),x(a),null!=h&&w(h,String(a)))},K=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:K,onFocus:B,onClick:B},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,i.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);