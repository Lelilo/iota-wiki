"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[57857],{48487:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={description:"Smart contracts can exchange assets between themselves on the same chain and also between different chains, as well as with addresses on the UTXO Ledger.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","account","address","wallet","balances","ledger"]},c="Account Balances",l={unversionedId:"guide/solo/balances",id:"guide/solo/balances",title:"Account Balances",description:"Smart contracts can exchange assets between themselves on the same chain and also between different chains, as well as with addresses on the UTXO Ledger.",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/balances.md",sourceDirName:"guide/solo",slug:"/guide/solo/balances",permalink:"/smart-contracts/guide/solo/balances",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/balances.md",tags:[],version:"current",frontMatter:{description:"Smart contracts can exchange assets between themselves on the same chain and also between different chains, as well as with addresses on the UTXO Ledger.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","account","address","wallet","balances","ledger"]},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/smart-contracts/guide/solo/error-handling"},next:{title:"Sending Tokens to a Smart Contract",permalink:"/smart-contracts/guide/solo/sending-funds"}},d={},u=[],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-balances"},"Account Balances"),(0,r.kt)("p",null,"::: note"),(0,r.kt)("p",null,"The example code can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples"},"Wasp repository"),"."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"Each chain in the ",(0,r.kt)("em",{parentName:"p"},"IOTA Smart Contracts")," is a separate ledger, different from the UTXO ledger.\nMultiple chains add another dimension on top of the UTXO Ledger. Smart contracts\ncan exchange assets between themselves on the same chain and also between different chains, as well as with\naddresses on the UTXO Ledger. We will skip explaining the whole picture for the time\nbeing and will concentrate on one specific use case."),(0,r.kt)("p",null,"Imagine you have a wallet, the private key (with the address), and some tokens on\nthat address on the UTXO Ledger, the Tangle. The use case is about sending those tokens to a smart contract on a chain\nand receiving these tokens back to the address."),(0,r.kt)("p",null,"Here we explore the concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"on-chain account"),"(a.k.a. just ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),"). On the UTXO\nLedger, the private key is represented by the address (the hash of the public\nkey). That address holds balances of colored tokens. Those tokens are\n",(0,r.kt)("em",{parentName:"p"},"controlled")," by the private key."),(0,r.kt)("p",null,"In IOTA Smart Contracts, we extend the concept of ",(0,r.kt)("em",{parentName:"p"},"address")," with the concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),". An\n",(0,r.kt)("inlineCode",{parentName:"p"},"account")," contains colored tokens just like an ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," is\nlocated on some chain, and it is controlled by the same private key as the\nassociated address. So, an address can control tokens on the UTXO Ledger\n(Level 1 or ",(0,r.kt)("inlineCode",{parentName:"p"},"L1"),") and on each chain (Level 2 or ",(0,r.kt)("inlineCode",{parentName:"p"},"L2"),")."),(0,r.kt)("p",null,"So, the chain essentially is a custodian of the tokens deposited in its ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),"."),(0,r.kt)("p",null,"The following test demonstrates how a wallet can deposit tokens in a chain\naccount and then withdraw them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial5(t *testing.T) {\n env := solo.New(t, false, false, seed)\n chain := env.NewChain(nil, "ex5")\n // create a wallet with 1000000 iotas.\n // the wallet has address and it is globally identified\n // through a universal identifier: the agent ID\n userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(5))\n userAgentID := iscp.NewAgentID(userAddress, 0)\n\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0) // empty on-chain\n\n t.Logf("Address of the userWallet is: %s", userAddress.Base58())\n numIotas := env.GetAddressBalance(userAddress, colored.IOTA)\n t.Logf("balance of the userWallet is: %d iota", numIotas)\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n\n // send 42 iotas from wallet to own account on-chain, controlled by the same wallet\n req := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name).WithIotas(42)\n _, err := chain.PostRequestSync(req, userWallet)\n require.NoError(t, err)\n\n // check address balance: must be 42 iotas less\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo-42)\n // check the on-chain account. Must contain 42 iotas\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 42)\n\n // withdraw all iotas back to the sender\n req = solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name).WithIotas(1)\n _, err = chain.PostRequestSync(req, userWallet)\n require.NoError(t, err)\n\n // we are back to initial situation: IOTA is fee-less!\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0) // empty\n}\n')),(0,r.kt)("p",null,"The example above creates a chain, then creates a wallet with ",(0,r.kt)("inlineCode",{parentName:"p"},"solo.Saldo")," iotas (1 Mi) and\nsends (deposits) 42 iotas to the corresponding on-chain account by posting\na ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," core contract on that chain. That account\nwill now contain 42 iotas. The address on the UTXO Ledger will contain 42 iotas\nless, of course."),(0,r.kt)("p",null,"In the next step, the same wallet (",(0,r.kt)("inlineCode",{parentName:"p"},"userWallet"),") will withdraw all 42 iotas back\nto the address by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract on\nthe same chain."),(0,r.kt)("p",null,"If the same request would be posted from another user wallet (another private\nkey), the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," request would fail. Try it! Only the owner of the address\ncan move those funds from the on-chain account."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);