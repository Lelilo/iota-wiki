"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26102],{89740:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/develop/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}r.isMDXComponent=!0},52047:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Online Faucet",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can request test funds from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet"),".")))}r.isMDXComponent=!0},27359:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}r.isMDXComponent=!0},15509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>N,frontMatter:()=>b,metadata:()=>_,toc:()=>x});var a=n(87462),o=(n(67294),n(3905)),s=n(54411),r=n(43305),l=n(44393);const c={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example sends IOTA micro transactions to an address.\n */\n\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n\n        await account.sync();\n\n        //TODO: Replace with the address of your choice!\n        const address =\n            'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0';\n        const amount = '1000';\n\n        const response = await account.sendMicroTransaction([\n            {\n                address,\n                amount,\n            },\n        ]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 4c-send-micro-transaction.js"))}i.isMDXComponent=!0;const u={toc:[]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0xad0e11ab7795212f3ff497e06c22218a18b297280e26e1d6392d217244879348',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x20cc5acd8af1a9d27b181632ef32818a721622ab0c9d887977b2f1501dd0ae42',\n  inclusionState: 'Pending',\n  timestamp: '1662654628971',\n  transactionId: '0x91a469ff1008ed3dc21d02aa6c20d8c2c048c5f096d7c9af797d3215f824e369',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x20cc5acd8af1a9d27b181632ef32818a721622ab0c9d887977b2f1501dd0ae42\n\n")))}d.isMDXComponent=!0;var p=n(89740);var m=n(27359);const h={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example send_micro_transaction --release\n// In this example we will send an amount below the minimum storage deposit\n// Rename `.env.example` to `.env` first\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_wallet::{account_manager::AccountManager, AddressWithMicroAmount, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    let outputs = vec![AddressWithMicroAmount {\n        address: "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string(),\n        amount: 1,\n        return_address: None,\n        expiration: None,\n    }];\n\n    let transaction = account.send_micro_transaction(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example send_micro_transaction --release"))}k.isMDXComponent=!0;const g={toc:[]};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0x78abf6499023396fa9510155237542500015da882e2676bc9e5cd8280e3c15e6\nBlock sent: http://localhost:14265/api/core/v2/blocks/0xe601e25316c17c9aaa19de881aacd55ac270bc99697d34c4a9f4e57edf10cbe2\n")))}v.isMDXComponent=!0;var w=n(52047);const b={title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","micro-transaction","send micro-transaction","microtransaction","send microtransaction","nodejs","python","rust"]},f=void 0,_={unversionedId:"how_tos/outputs_and_transactions/send_micro_transaction",id:"how_tos/outputs_and_transactions/send_micro_transaction",title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",source:"@site/content/build/wallet.rs/develop/documentation/docs/how_tos/outputs_and_transactions/02_send_micro_transaction.mdx",sourceDirName:"how_tos/outputs_and_transactions",slug:"/how_tos/outputs_and_transactions/send_micro_transaction",permalink:"/wallet.rs/develop/how_tos/outputs_and_transactions/send_micro_transaction",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/how_tos/outputs_and_transactions/02_send_micro_transaction.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","micro-transaction","send micro-transaction","microtransaction","send microtransaction","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Send a Transaction",permalink:"/wallet.rs/develop/how_tos/outputs_and_transactions/send_transaction"},next:{title:"List Outputs",permalink:"/wallet.rs/develop/how_tos/outputs_and_transactions/list_outputs"}},y={},x=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],T={toc:x};function N(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to send an amount below the minimum storage deposit, you should use a microtransaction."),(0,o.kt)(w.ZP,{mdxType:"TipFaucet"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/develop/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Create the outputs for a microtransaction."),(0,o.kt)("li",{parentName:"ol"},"Send the micro-microtransaction using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.send_micro_transaction(addresses_with_micro_amount, options)")," function.")),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"RustCode"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(i,{mdxType:"NodejsCode"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"RustOutput"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"NodejsOutput"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonOutput"}))))}N.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const s="tabItem__kUE";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),s=n(86010),r=n(51048),l=n(33609),c=n(1943),i=n(72957);const u="tabList_fbd4",d="tabItem_v5XY";function p(e){var t,n;const{lazy:r,block:p,defaultValue:m,values:h,groupId:k,className:g}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(w,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==f&&!w.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+w.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:y}=(0,c.U)(),[x,T]=(0,o.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,i.o5)();if(null!=k){const e=_[k];null!=e&&e!==x&&w.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),a=w[n].value;a!==x&&(Z(t),T(a),null!=k&&y(k,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;n=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var o;const t=N.indexOf(e.currentTarget)-1;n=null!=(o=N[t])?o:N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},g)},w.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:D,onFocus:C,onClick:C},r,{className:(0,s.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);