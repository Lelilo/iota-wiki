"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36645],{89740:(t,e,a)=>{a.d(e,{ZP:()=>s});var n=a(87462),o=(a(67294),a(3905));const l={toc:[]};function s(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/develop/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}s.isMDXComponent=!0},81378:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>f,contentTitle:()=>b,default:()=>v,frontMatter:()=>m,metadata:()=>h,toc:()=>k});var n=a(87462),o=(a(67294),a(3905)),l=a(54411),s=a(43305),u=a(44393);const r={toc:[]};function i(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},r,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example lists the outputs of the first account\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n        \n        await account.sync();\n        const outputs = await account.listOutputs()\n        console.log('Listing Outputs:', outputs); \n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 12a-list-outputs.js"))}i.isMDXComponent=!0;const c={toc:[]};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Listing Outputs: [\n  {\n    outputId: '0x72240e6d6dc463e4dd962a2e34f2233a41b56a259c84faf895fbbb96820773050100',\n    metadata: {\n      blockId: '0x1106c1e0da5b2e10762fcf0ed3bc2a4790ffd2a81895afbc58df6b447c70ad3a',\n      transactionId: '0x72240e6d6dc463e4dd962a2e34f2233a41b56a259c84faf895fbbb9682077305',\n      outputIndex: 1,\n      isSpent: false,\n      milestoneIndexBooked: 972425,\n      milestoneTimestampBooked: 1662996908,\n      ledgerIndex: 974093\n    },\n    output: {\n      type: 5,\n      amount: '53600',\n      serialNumber: 4,\n      tokenScheme: [Object],\n      unlockConditions: [Array],\n      immutableFeatures: [Array]\n    },\n    isSpent: false,\n    address: {\n      type: 0,\n      pubKeyHash: '0xeed1e4e3e9e7555e2f1592594bf916523e7fef3a9a8c0d630a4934440b822647'\n    },\n    networkId: '8342982141227064571',\n    remainder: false,\n    chain: [ [Object], [Object], [Object], [Object], [Object] ]\n  },\n  [...]\n]\n\n")))}d.isMDXComponent=!0;var p=a(89740);const m={title:"List Outputs",description:"How to list all the outputs related to an account using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","get outputs","list outputs","listOutputs","nodejs","python","rust"]},b=void 0,h={unversionedId:"how_tos/outputs_and_transactions/list_outputs",id:"how_tos/outputs_and_transactions/list_outputs",title:"List Outputs",description:"How to list all the outputs related to an account using wallet.rs.",source:"@site/content/build/wallet.rs/develop/documentation/docs/how_tos/outputs_and_transactions/03_list_outputs.mdx",sourceDirName:"how_tos/outputs_and_transactions",slug:"/how_tos/outputs_and_transactions/list_outputs",permalink:"/wallet.rs/develop/how_tos/outputs_and_transactions/list_outputs",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/how_tos/outputs_and_transactions/03_list_outputs.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"List Outputs",description:"How to list all the outputs related to an account using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","get outputs","list outputs","listOutputs","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Send a Micro Transaction",permalink:"/wallet.rs/develop/how_tos/outputs_and_transactions/send_micro_transaction"},next:{title:"Claim Outputs",permalink:"/wallet.rs/develop/how_tos/outputs_and_transactions/claim_outputs"}},f={},k=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],g={toc:k};function v(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can list all the outputs related to an account by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.listOutputs()")," function."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/develop/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"List all the outputs related to Alice's account.")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"RustCode"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(i,{mdxType:"NodejsCode"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"RustOutput"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"NodejsOutput"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonOutput"}))))}v.isMDXComponent=!0},43305:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(67294),o=a(86010);const l="tabItem__kUE";function s(t){let{children:e,hidden:a,className:s}=t;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,s),hidden:a},e)}},54411:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(87462),o=a(67294),l=a(86010),s=a(51048),u=a(33609),r=a(1943),i=a(72957);const c="tabList_fbd4",d="tabItem_v5XY";function p(t){var e,a;const{lazy:s,block:p,defaultValue:m,values:b,groupId:h,className:f}=t,k=o.Children.map(t.children,(t=>{if((0,o.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:k.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),v=(0,u.l)(g,((t,e)=>t.value===e.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(e=null!=m?m:null==(a=k.find((t=>t.props.default)))?void 0:a.props.value)?e:k[0].props.value;if(null!==w&&!g.some((t=>t.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:_}=(0,r.U)(),[x,T]=(0,o.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,i.o5)();if(null!=h){const t=y[h];null!=t&&t!==x&&g.some((e=>e.value===t))&&T(t)}const O=t=>{const e=t.currentTarget,a=N.indexOf(e),n=g[a].value;n!==x&&(Z(e),T(n),null!=h&&_(h,String(n)))},C=t=>{var e;let a=null;switch(t.key){case"ArrowRight":{var n;const e=N.indexOf(t.currentTarget)+1;a=null!=(n=N[e])?n:N[0];break}case"ArrowLeft":{var o;const e=N.indexOf(t.currentTarget)-1;a=null!=(o=N[e])?o:N[N.length-1];break}}null==(e=a)||e.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},g.map((t=>{let{value:e,label:a,attributes:s}=t;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:t=>N.push(t),onKeyDown:C,onFocus:O,onClick:O},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===e})}),null!=a?a:e)}))),s?(0,o.cloneElement)(k.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((t,e)=>(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function m(t){const e=(0,s.Z)();return o.createElement(p,(0,n.Z)({key:String(e)},t))}}}]);