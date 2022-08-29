"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43217],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3456:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={description:"In Solo, you can post an on-ledger request with a single call to PostRequestSync.  Alternatively, you can post an off-ledger request by using chain.PostRequestOffLedger instead of PostRequestSync.",image:"/img/tutorial/send_request.png",keywords:["testing","PostRequestSync","PostRequestOffLedger","send","requests","post","solo","on-ledger","off-ledger"]},l="Invoking Smart Contracts",c={unversionedId:"guide/solo/invoking-sc",id:"guide/solo/invoking-sc",title:"Invoking Smart Contracts",description:"In Solo, you can post an on-ledger request with a single call to PostRequestSync.  Alternatively, you can post an off-ledger request by using chain.PostRequestOffLedger instead of PostRequestSync.",source:"@site/content/build/wasp/production/documentation/docs/guide/solo/invoking-sc.md",sourceDirName:"guide/solo",slug:"/guide/solo/invoking-sc",permalink:"/smart-contracts/guide/solo/invoking-sc",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/solo/invoking-sc.md",tags:[],version:"current",frontMatter:{description:"In Solo, you can post an on-ledger request with a single call to PostRequestSync.  Alternatively, you can post an off-ledger request by using chain.PostRequestOffLedger instead of PostRequestSync.",image:"/img/tutorial/send_request.png",keywords:["testing","PostRequestSync","PostRequestOffLedger","send","requests","post","solo","on-ledger","off-ledger"]},sidebar:"tutorialSidebar",previous:{title:"Tokens and the UTXO Ledger",permalink:"/smart-contracts/guide/solo/tokens-and-utxos"},next:{title:"Calling a View",permalink:"/smart-contracts/guide/solo/view-sc"}},u={},d=[{value:"Off-ledger Requests",id:"off-ledger-requests",level:2}],p={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"invoking-smart-contracts"},"Invoking Smart Contracts"),(0,o.kt)("p",null,"Invoking a Smart Contract's entry point in Solo looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'  req := solo.NewCallParams("example1", "storeString", "paramString", "Hello, world!").WithIotas(1)\n  _, err = chain.PostRequestSync(req, nil)\n')),(0,o.kt)("p",null,"In the example ",(0,o.kt)("inlineCode",{parentName:"p"},"TestTutorial3")," we invoke the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeString")," entry point of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"example1")," smart contract by posting it as a request. The parameter\nnamed ",(0,o.kt)("inlineCode",{parentName:"p"},"paramString"),' is passed with the string value "Hello, world!". The ',(0,o.kt)("em",{parentName:"p"},"Solo"),'\ntest code itself is separate from the chain where the smart contract is invoked and is not executed "on-chain".'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NewCallParams")," creates a call object named ",(0,o.kt)("inlineCode",{parentName:"p"},"req")," which wraps all call\nparameters into a single object. This is syntactic sugar just for convenience.\nIn this case, the call object only wraps the target smart contract name, target\nentry point name, and one named parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"paramString"),". In other cases it could\ncontain many parameters."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WithIotas")," attaches a single iota with the request. All ",(0,o.kt)("inlineCode",{parentName:"p"},"on-ledger")," requests\nare implemented as value transactions with additional data, and therefore we\nneed to transfer at least a single token for the request to be valid."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PostRequestSync")," sends the request to the chain. Let\u2019s describe in detail what\nis going on here."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(91868).Z},(0,o.kt)("img",{alt:"Generic process of posting an on-ledger request to the smart contract",src:n(37479).Z,width:"862",height:"452"}))),(0,o.kt)("p",null,"The diagram above depicts the generic process of posting an ",(0,o.kt)("inlineCode",{parentName:"p"},"on-ledger")," request to the smart\ncontract. The same picture is valid for the ",(0,o.kt)("em",{parentName:"p"},"Solo")," environment and for any other\nrequester which sends an ",(0,o.kt)("inlineCode",{parentName:"p"},"on-ledger")," request to the smart contract, for example, the IOTA Smart Contracts\nwallet or another chain."),(0,o.kt)("p",null,"Posting the request always consists of the steps below. Note that in Solo all 7\nsteps are carried out by the single call to ",(0,o.kt)("inlineCode",{parentName:"p"},"PostRequestSync"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creating the smart contract transaction which wraps the request with metadata\nand moves tokens. Each request transaction is a value transaction, it always\nmoves at least one token. Therefore, each request transaction must be signed\nby the private key of the owner of the tokens: the requester. That securely\nidentifies each requester in IOTA Smart Contracts. In Solo, the transaction is signed by the\nprivate key provided in the second parameter of the ",(0,o.kt)("inlineCode",{parentName:"li"},"PostRequestSync"),"\ncall (see below)."),(0,o.kt)("li",{parentName:"ol"},"Posting the request transaction to the Tangle and confirming it. In ",(0,o.kt)("em",{parentName:"li"},"Solo")," it\nis just adding the transaction to the ",(0,o.kt)("inlineCode",{parentName:"li"},"UTXODB ledger"),", the emulated UTXO\nLedger, so it is confirmed immediately and synchronously. The confirmed\ntransaction on the ledger becomes part of the backlog of requests to the\nchain. In the real UTXO Ledger the sender would have to wait until the ledger\nconfirms the transaction."),(0,o.kt)("li",{parentName:"ol"},"The chain picks the request from the backlog and runs the request on the VM."),(0,o.kt)("li",{parentName:"ol"},"The VM calls the target entry point of the smart contract program. The\nprogram updates the state."),(0,o.kt)("li",{parentName:"ol"},"The VM produces a state update transaction (the ",(0,o.kt)("inlineCode",{parentName:"li"},"anchor"),")."),(0,o.kt)("li",{parentName:"ol"},"The chain signs the transaction with its private key. In the ",(0,o.kt)("em",{parentName:"li"},"Solo"),"\nenvironment is the ",(0,o.kt)("inlineCode",{parentName:"li"},"ChainSigScheme")," property of the chain. In the real\nWasp environment it is the threshold signature of the committee of validator nodes."),(0,o.kt)("li",{parentName:"ol"},"The chain posts the resulting transaction to the Tangle and, after confirmation, solidifies the corresponding state. In the ",(0,o.kt)("em",{parentName:"li"},"Solo")," environment it adds\nthe transaction to the UTXODB ledger.")),(0,o.kt)("p",null,"The following lines in the log correspond to step 7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"54:43.809 INFO TestTutorial3.ex3 vmcontext/runreq.go:311 eventlog -> '[req] [0]CHvU6BUDgt9MZJTxsYMZ1p1veg591mvwKGQBJd2KYdaB: Ok'\n54:43.809 INFO TestTutorial3 solo/clock.go:35 AdvanceClockBy: logical clock advanced by 2ns\n54:43.809 INFO TestTutorial3.ex3.m mempool/mempool.go:119 OUT MEMPOOL [0]CHvU6BUDgt9MZJTxsYMZ1p1veg591mvwKGQBJd2KYdaB\n54:43.809 INFO TestTutorial3.ex3 solo/run.go:86 state transition #2 --\x3e #3. Requests in the block: 1. Outputs: 1\n")),(0,o.kt)("p",null,"The chain adds a record about any successfully processed request\n",(0,o.kt)("inlineCode",{parentName:"p"},"[0]CHvU6BUDgt9MZJTxsYMZ1p1veg591mvwKGQBJd2KYdaB")," to the immutable on-chain log."),(0,o.kt)("p",null,"The statement ",(0,o.kt)("inlineCode",{parentName:"p"},"_, err = chain.PostRequestSync(req, nil)")," in the Solo test uses ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),"\nfor the default signature scheme of the requester. The ",(0,o.kt)("inlineCode",{parentName:"p"},"OriginatorSigScheme"),",\nthe one which deployed the chain, is used as the default requester. In the\n",(0,o.kt)("em",{parentName:"p"},"Solo")," environment you can create other identities for requesters (\u201cwallets\u201d)\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"NewKeyPairWithFunds"),"."),(0,o.kt)("h2",{id:"off-ledger-requests"},"Off-ledger Requests"),(0,o.kt)("p",null,"Alternatively, in the example above, we could send an off-ledger request by using ",(0,o.kt)("inlineCode",{parentName:"p"},"chain.PostRequestOffLedger")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"PostRequestSync"),".\nHowever, to be able to submit off-ledger request, the account sending the request must deposit funds to the chain beforehand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'  wallet, address := env.NewKeyPairWithFunds()\n  AgentID := iscp.NewAgentID(ownerAddr, 0)\n\n  // deposit into the account\n  req := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name).WithIotas(100)\n  _, err := chain.PostRequestSync(req, owner)\n  require.NoError(t, err)\n\n  //no .WithIotas() needed, fees will be deducted from the sender on-chain account\n  req := solo.NewCallParams("example1", "storeString", "paramString", "Hello, world!")\n  _, err = chain.PostRequestOffLedger(req, wallet)\n\n')))}h.isMDXComponent=!0},91868:function(e,t,n){t.Z=n.p+"assets/files/send_request-78a4959e80ea79872674de5ba5faaa86.png"},37479:function(e,t,n){t.Z=n.p+"assets/images/send_request-78a4959e80ea79872674de5ba5faaa86.png"}}]);