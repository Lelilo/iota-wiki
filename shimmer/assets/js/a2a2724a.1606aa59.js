"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,f=c["".concat(l,".").concat(p)]||c[p]||h[p]||i;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},25331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Firefly user guide",description:"User guide for standard Firefly software wallet users. We explain every function here for you."},s=void 0,o={unversionedId:"wallets/firefly/user-guide",id:"wallets/firefly/user-guide",title:"Firefly user guide",description:"User guide for standard Firefly software wallet users. We explain every function here for you.",source:"@site/shimmer/use/wallets/firefly/user-guide.md",sourceDirName:"wallets/firefly",slug:"/wallets/firefly/user-guide",permalink:"/shimmer/use/wallets/firefly/user-guide",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/shimmer/use/wallets/firefly/user-guide.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"Firefly user guide",description:"User guide for standard Firefly software wallet users. We explain every function here for you."},sidebar:"use",previous:{title:"Firefly Wallet",permalink:"/shimmer/use/wallets/firefly/general"},next:{title:"Firefly Ledger user guide",permalink:"/shimmer/use/wallets/firefly/user-guide-ledger"}},l={},d=[{value:"User guide for standard users",id:"user-guide-for-standard-users",level:2},{value:"Account Structure",id:"account-structure",level:3},{value:"Profile Setup",id:"profile-setup",level:3},{value:"Firefly Dashboard",id:"firefly-dashboard",level:3},{value:"Wallets",id:"wallets",level:2},{value:"Wallet Detail View",id:"wallet-detail-view",level:3},{value:"Transaction detail view.",id:"transaction-detail-view",level:4},{value:"Send and Receive Transactions",id:"send-and-receive-transactions",level:3},{value:"Firefly wallet staking instructions",id:"firefly-wallet-staking-instructions",level:2},{value:"Further important information for stakers",id:"further-important-information-for-stakers",level:3}],u={toc:d};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-guide-for-standard-users"},"User guide for standard users"),(0,r.kt)("h3",{id:"account-structure"},"Account Structure"),(0,r.kt)("p",null,"Firefly's basic account-handling logic works as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One Firefly ",(0,r.kt)("strong",{parentName:"li"},"profile")," is always the representation of one ",(0,r.kt)("strong",{parentName:"li"},"IOTA seed")),(0,r.kt)("li",{parentName:"ul"},"Every Firefly ",(0,r.kt)("strong",{parentName:"li"},"profile")," can host an unlimited amount of ",(0,r.kt)("strong",{parentName:"li"},"wallets,")," which can be seen as sub-accounts under the one ",(0,r.kt)("strong",{parentName:"li"},"profile seed"),".")),(0,r.kt)("h3",{id:"profile-setup"},"Profile Setup"),(0,r.kt)("p",null,"Every ",(0,r.kt)("strong",{parentName:"p"},"profile")," receives a unique IOTA Seed consisting of a ",(0,r.kt)("strong",{parentName:"p"},"24-word mnemonic phrase")," created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BIP39 Standard"),". During the profile creation, these 24 words will be shown to the user ",(0,r.kt)("strong",{parentName:"p"},"only once")," and the user must make sure to back up these 24 words. We highly recommend creating a paper wallet as a physical backup for these words. Losing the words will potentially result in losing access to the profile and the funds connected with the seed. To make sure that the user has created a backup of the 24 words, a check is done during setup, which requires adding all the 24 words in the correct order by the user."),(0,r.kt)("p",null,"After the user has received the 24 seed words the user can also create a ",(0,r.kt)("strong",{parentName:"p"},"Stronghold file")," as a digital backup of the profile. This file also contains the securely encrypted seed and setup information for the profile. We strongly recommend storing this file in several independent locations (such as a USB stick or Cloud storage). Should the 24 words somehow be lost, it will be possible to restore a profile with this file. To use the file, the user has to create a secure password that encrypts the Stronghold file. Only in combination with this password will the Stronghold file restore the profile. It is therefore essential that the user also securely store the password to this Stronghold file."),(0,r.kt)("p",null,"Next, the user creates a PIN code as an easy access method to the Firefly wallet interface. This PIN code is required to enter the profile dashboard but does not grant access to functions that handle or move the user's funds or give access to the security settings of the wallet. For these actions that require a higher level of security, the user needs to enter the Stronghold password. Only this password gives access to the full functionality of the wallet."),(0,r.kt)("p",null,"If different users aim to use the same Firefly wallet app, or if you have IOTA tokens on multiple seeds, you need to create a new profile for every seed/every user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key takeaways:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Securely back up the 24-word mnemonic phrase \u2013 it is your IOTA seed!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Securely store your Stronghold backup file and the Stronghold password!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Store it in multiple independent locations, both digitally and physically!"))),(0,r.kt)("h3",{id:"firefly-dashboard"},"Firefly Dashboard"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard",src:a(68462).Z,width:"1920",height:"1030"})),(0,r.kt)("p",null,'The Firefly dashboard is the main overview of a user profile. Easily accessible information on the spot and the most common functions \u2013 "send" and "receive" \u2013 ordered in a clear layout. Here, users are shown the total profile balance, the different wallets that belong to the profile, and a list of the latest transactions. IOTA price or profile value is shown in a handy chart, and the basic security info of the profile is displayed.'),(0,r.kt)("h2",{id:"wallets"},"Wallets"),(0,r.kt)("p",null,'Wallets are sub-accounts to a seed (profile). It may be a convenient way to have several of them for different occasions. Users could have a "long-term hold" and a "spending" wallet, or a wallet where they receive payments, another one in which only donations are received, etc. Users are free to set them up as they wish. To create a new wallet, simply use the "+" sign in the ',(0,r.kt)("inlineCode",{parentName:"p"},"My Wallets")," section of the dashboard. Assign a name for the wallet, confirm the creation with your Stronghold password, and the wallet is all set to receive funds."),(0,r.kt)("p",null,"Wallets contain a collection of addresses and those addresses are grouped under this wallet to help users keep their addresses organized."),(0,r.kt)("p",null,"It is important to mention here that users can only set up further wallets if the first wallet already contains funds. If users want to set up five different wallets, they need a small amount of IOTA in every newly created wallet before another one can be created."),(0,r.kt)("h3",{id:"wallet-detail-view"},"Wallet Detail View"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wallet detail view",src:a(9170).Z,width:"1920",height:"1030"})),(0,r.kt)("p",null,"A click of the mouse on one of the wallets in the dashboard overview opens the Wallet Detail Screen. Here users see the balance contained in this specific wallet and have the option to send and receive transactions."),(0,r.kt)("p",null,"Next to the send and receive section, an overview of all the transactions related to this specific wallet is shown. Small icons indicate if a send or receive transaction has been completed internally (to another wallet of the same profile) or externally."),(0,r.kt)("p",null,"Also, you have will find ",(0,r.kt)("strong",{parentName:"p"},"three small dots")," next to the wallet balance."),(0,r.kt)("p",null,"Clicking on those dots opens a pop-up menu."),(0,r.kt)("p",null,"In this pop-up menu you can enter the following functions:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Customize Wallet")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gives the possibility to change the name of wallet.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"View Address History")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A list of all addresses that have been used by this wallet and the balance that sits currently on this address. You can copy this list and paste it into your documents.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hide Wallet")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Empty wallets can be hidden to keep your main wallet overview organized. If a wallet still contains funds, you will not be able to hide it by clicking this option but will be offered to transfer the funds to another wallet and hide the wallet afterward. A hidden wallet can be shown again by enabling the function "show hidden wallets" in the advanced account settings.')),(0,r.kt)("h4",{id:"transaction-detail-view"},"Transaction detail view."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transaction details view",src:a(47069).Z,width:"1920",height:"1030"})),(0,r.kt)("p",null,"The following information about the transaction is displayed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A transaction flow that indicates: ",(0,r.kt)("strong",{parentName:"li"},"from where > token amount > to where,")," followed by:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Status")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confirmed or pending status of the message")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Date")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Date and time when the transaction was issued or received (in local System time)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Message ID")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The unique identifier of this specific message (every transaction in IOTA is a message) in the IOTA Ledger.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Send Address")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The address from where the transaction was initiated")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Receive Address")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The address on which the tokens of this transaction have arrived. Several different receive addresses may be shown in this view. The addresses belonging to you are highlighted with the name of your wallet in brackets, other addresses that are shown without brackets do not belong to you. These are normally the addresses of the sender. To these addresses, the remaining funds that have not been used from the sender's address are transferred. This is related to the UTXO (unspent transaction output) Account model in IOTA."),(0,r.kt)("li",{parentName:"ul"},"If a transaction is issued from a UTXO output (an address holding funds) that does not consume all funds that are part of this output, one transaction moves the funds that are planned to send away from the address, and a second transaction moves the rest of the unused funds from this UTXO to a new UTXO output. Both these transactions are part of the message and therefore shown in the Transaction detail. Read more about the UTXO Account model ",(0,r.kt)("a",{parentName:"li",href:"/IOTA-2.0-Research-Specifications/5.1UTXO/"},"here"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Amount")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amount of IOTA sent and current value in the chosen profile currency")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Two different charts")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wallet value")," and ",(0,r.kt)("strong",{parentName:"li"},"wallet activity")," also provide a graphic overview of the activities in this wallet.")),(0,r.kt)("h3",{id:"send-and-receive-transactions"},"Send and Receive Transactions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The send and receive functions are available in the main wallet's dashboard, and also in every wallet detail view.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Receive")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click on the "Receive" button to open the Receive Funds dialogue. Using a dropdown menu, the user can choose in which of the wallets the incoming funds should be received. The receive address of the selected wallet is displayed as a QR code and as a written address. The button ',(0,r.kt)("inlineCode",{parentName:"li"},"Copy Address")," copies the displayed receive address into the user's clipboard for convenient pasting into other applications or documents. ",(0,r.kt)("strong",{parentName:"li"},"The receive address of a user will change every time funds have been received and spent again from that address. The wallet creates automatically a fresh address for the next receive attempt.")),(0,r.kt)("li",{parentName:"ul"},"If a user has received but not yet spent funds from that receiving address, the user can manually decide to generate a fresh receive address using the refresh button above the QR code. This function is an essential privacy feature that is a standard approach in crypto to reduce the traceability of your balances")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Send")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The send function has two essential features. The first is ",(0,r.kt)("strong",{parentName:"li"},"send payment"),", which is a standard IOTA transaction where you type or copy in a full IOTA receive address in the form of ",(0,r.kt)("inlineCode",{parentName:"li"},"iotaxjdjfkfkldldd......."),". The user now defines the wallet from where the tokens should be sent in a dropdown menu and the number of tokens to be sent. While defining the amount, a user may choose ",(0,r.kt)("strong",{parentName:"li"},"max"),", the second essential feature, which will send all the tokens contained in the chosen wallet or specify the exact amount with manual input. A dropdown button provides the option to switch the amount between different unit sizes (Mi, Gi, and so on). ",(0,r.kt)("strong",{parentName:"li"},"Make sure that you are entering the token amount in the correct unit size.")),(0,r.kt)("li",{parentName:"ul"},"To initiate the transaction, the user has to enter the stronghold password which confirms and signs the transaction. After this, the following steps are performed by the wallet to deliver the transaction to the recipient:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syncing wallet"),": establishing the connection to the IOTA Ledger,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performing PoW:")," a tiny amount of proof of work is performed by the device of the user,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Broadcasting transaction:")," sending the signed transaction to the connected node,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transfer complete:")," confirmation that the transaction is accepted and included in the Ledger.")),(0,r.kt)("p",null,"This whole process happens in just a few seconds."),(0,r.kt)("p",null,"If you send and receive funds, they will always be organized under the wallet that you used to send or receive, so it is easier to keep track if you have a lot of transactions going on."),(0,r.kt)("h2",{id:"firefly-wallet-staking-instructions"},"Firefly wallet staking instructions"),(0,r.kt)("p",null,"Staking IOTA will only be possible in IOTA\u2019s Firefly wallet and is not supported by any third party. To begin staking (after Tuesday, the 21st of December at 3PM CET), make sure that you have downloaded the latest version of the Firefly wallet on the ",(0,r.kt)("a",{parentName:"p",href:"https://firefly.iota.org"},"firefly.iota.org")," website, then complete the following steps:"),(0,r.kt)("p",null,"First, log in to your profile by entering your PIN and continue to navigate to the brand new staking tab."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/77154511/147533205-50bf67a6-e24c-4e7a-a4b8-67e824b8e9c1.png",alt:"image"})),(0,r.kt)("p",null,"Here you will either be able to \u201cpre-stake\u201d or \u201cstake your tokens\u201d (depending on which staking phase you are accessing your wallet). The pre-staking phase is a seven-day period before staking rewards begin on the 28th of December at 3PM CET, giving users ample time to decide on which staking event they want to take part in before staking starts. It also guarantees that users who want to stake IOTA tokens do not miss the start. Once the seven days are over, you will begin to receive staking rewards in your wallet."),(0,r.kt)("p",null,"Each wallet of a user profile must be staked separately. When you mark IOTA tokens for staking, a transaction is sent to you with attached metadata to indicate that you wish to stake with the marked funds. Any funds staked in a given wallet will be sent to an address on the same wallet, requiring tokens in every wallet to be individually marked for staking."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/77154511/147533273-53c1b27c-8925-46d0-921d-7cc275a051e8.png",alt:"image"})),(0,r.kt)("p",null,"To stake a wallet, simply hit the stake button and select which airdrops you wish to participate in. Please note that the wallet does not have to be open to receive the airdrops once you initiated staking."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/77154511/147533318-ccc2f9b8-43d9-4023-8cf9-af46ea08d3fe.png",alt:"image"})),(0,r.kt)("p",null,"Once you hit confirm, Firefly will issue the special staking transaction. Once this transaction has been confirmed, the user interface will update to show that you are now ready for staking!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/77154511/147533354-7d3525ac-8ccd-44a5-bd7a-7067311fe6c3.png",alt:"image"})),(0,r.kt)("p",null,"You can begin staking at any point after the official start of the reward distribution. Your rewards will simply be less, as you won\u2019t be participating during the full token distribution period."),(0,r.kt)("h3",{id:"further-important-information-for-stakers"},"Further important information for stakers"),(0,r.kt)("p",null,"You can send your staked tokens from a staked wallet at any time. But if you do, you will need to manually restake any remaining tokens. Firefly will warn you if you try to send staked tokens. Due to dust protection, there is a minimum number of token rewards you must earn in order to receive the tokens when the networks launch. The minimum reward for Shimmer is 10,000,000 SMR. The minimum reward for Assembly is 1 ASMB. Firefly will inform you if you haven\u2019t yet reached the minimum reward value."),(0,r.kt)("p",null,"If you receive additional funds on a staked wallet you will need to manually stake those tokens. Firefly will warn you if you receive tokens on a wallet that is already being staked from."))}h.isMDXComponent=!0},68462:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-dd07b470afd9a92fc1edb515487e7f08.png"},47069:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction_details_view-60d8b7ceb5ee3df0c74b01909a882c0a.png"},9170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_detail_view-52957b70a06b2587081dfecb278601d7.png"}}]);