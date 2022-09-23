"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),_=i(a),u=l,g=_["".concat(c,".").concat(u)]||_[u]||p[u]||o;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=_;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var i=2;i<o;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},33796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const o={sidebar_label:"wallet",title:"iota_wallet.wallet"},r=void 0,s={unversionedId:"references/python/iota_wallet/wallet",id:"references/python/iota_wallet/wallet",title:"iota_wallet.wallet",description:"IotaWallet Objects",source:"@site/content/build/wallet.rs/develop/documentation/docs/references/python/iota_wallet/wallet.md",sourceDirName:"references/python/iota_wallet",slug:"/references/python/iota_wallet/wallet",permalink:"/wallet.rs/develop/references/python/iota_wallet/wallet",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/references/python/iota_wallet/wallet.md",tags:[],version:"current",frontMatter:{sidebar_label:"wallet",title:"iota_wallet.wallet"},sidebar:"docs",previous:{title:"secret_manager",permalink:"/wallet.rs/develop/references/python/iota_wallet/secret_manager"},next:{title:"@iota/wallet",permalink:"/wallet.rs/develop/references/nodejs/api_ref"}},c={},i=[{value:"IotaWallet Objects",id:"iotawallet-objects",level:2},{value:"__init__",id:"__init__",level:3},{value:"create_account",id:"create_account",level:3},{value:"get_account",id:"get_account",level:3},{value:"get_account_data",id:"get_account_data",level:3},{value:"get_accounts",id:"get_accounts",level:3},{value:"backup",id:"backup",level:3},{value:"change_stronghold_password",id:"change_stronghold_password",level:3},{value:"clear_stronghold_password",id:"clear_stronghold_password",level:3},{value:"is_stronghold_password_available",id:"is_stronghold_password_available",level:3},{value:"recover_accounts",id:"recover_accounts",level:3},{value:"remove_latest_account",id:"remove_latest_account",level:3},{value:"restore_back",id:"restore_back",level:3},{value:"delete_accounts_and_database",id:"delete_accounts_and_database",level:3},{value:"generate_mnemonic",id:"generate_mnemonic",level:3},{value:"verify_mnemonic",id:"verify_mnemonic",level:3},{value:"set_client_options",id:"set_client_options",level:3},{value:"get_node_info",id:"get_node_info",level:3},{value:"set_stronghold_password",id:"set_stronghold_password",level:3},{value:"set_stronghold_password_clear_interval",id:"set_stronghold_password_clear_interval",level:3},{value:"store_mnemonic",id:"store_mnemonic",level:3},{value:"start_background_sync",id:"start_background_sync",level:3},{value:"stop_background_sync",id:"stop_background_sync",level:3}],d={toc:i};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"iotawallet-objects"},"IotaWallet Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class IotaWallet()\n")),(0,l.kt)("h3",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(storage_path='./walletdb',\n             client_options=None,\n             coin_type=None,\n             secret_manager=None)\n")),(0,l.kt)("p",null,"Initialize the IOTA Wallet."),(0,l.kt)("h3",{id:"create_account"},"create","_","account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def create_account(alias=None)\n")),(0,l.kt)("p",null,"Create a new account"),(0,l.kt)("h3",{id:"get_account"},"get","_","account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_account(alias_index)\n")),(0,l.kt)("p",null,"Get the account instance"),(0,l.kt)("h3",{id:"get_account_data"},"get","_","account","_","data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_account_data(alias_index)\n")),(0,l.kt)("p",null,"Get account data"),(0,l.kt)("h3",{id:"get_accounts"},"get","_","accounts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_accounts()\n")),(0,l.kt)("p",null,"Get accounts"),(0,l.kt)("h3",{id:"backup"},"backup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def backup(destination, password)\n")),(0,l.kt)("p",null,"Backup storage."),(0,l.kt)("h3",{id:"change_stronghold_password"},"change","_","stronghold","_","password"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def change_stronghold_password(password)\n")),(0,l.kt)("p",null,"Change stronghold password."),(0,l.kt)("h3",{id:"clear_stronghold_password"},"clear","_","stronghold","_","password"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def clear_stronghold_password()\n")),(0,l.kt)("p",null,"Clear stronghold password."),(0,l.kt)("h3",{id:"is_stronghold_password_available"},"is","_","stronghold","_","password","_","available"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def is_stronghold_password_available()\n")),(0,l.kt)("p",null,"Is stronghold password available."),(0,l.kt)("h3",{id:"recover_accounts"},"recover","_","accounts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def recover_accounts(account_start_index, account_gap_limit, address_gap_limit,\n                     sync_options)\n")),(0,l.kt)("p",null,"Recover accounts."),(0,l.kt)("h3",{id:"remove_latest_account"},"remove","_","latest","_","account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def remove_latest_account()\n")),(0,l.kt)("p",null,"Remove latest account."),(0,l.kt)("h3",{id:"restore_back"},"restore","_","back"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def restore_back(source, password)\n")),(0,l.kt)("p",null,"Restore a backup from a Stronghold file\nReplaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created\nIf Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was\nstored, it will be gone."),(0,l.kt)("h3",{id:"delete_accounts_and_database"},"delete","_","accounts","_","and","_","database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def delete_accounts_and_database()\n")),(0,l.kt)("p",null,"Deletes the accounts and database."),(0,l.kt)("h3",{id:"generate_mnemonic"},"generate","_","mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def generate_mnemonic()\n")),(0,l.kt)("p",null,"Generates a new mnemonic."),(0,l.kt)("h3",{id:"verify_mnemonic"},"verify","_","mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def verify_mnemonic(mnemonic)\n")),(0,l.kt)("p",null,"Checks if the given mnemonic is valid."),(0,l.kt)("h3",{id:"set_client_options"},"set","_","client","_","options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def set_client_options(client_options)\n")),(0,l.kt)("p",null,"Updates the client options for all accounts."),(0,l.kt)("h3",{id:"get_node_info"},"get","_","node","_","info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_node_info(url, auth)\n")),(0,l.kt)("p",null,"Get node info."),(0,l.kt)("h3",{id:"set_stronghold_password"},"set","_","stronghold","_","password"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def set_stronghold_password(password)\n")),(0,l.kt)("p",null,"Set stronghold password."),(0,l.kt)("h3",{id:"set_stronghold_password_clear_interval"},"set","_","stronghold","_","password","_","clear","_","interval"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def set_stronghold_password_clear_interval(interval_in_milliseconds)\n")),(0,l.kt)("p",null,"Set stronghold password clear interval."),(0,l.kt)("h3",{id:"store_mnemonic"},"store","_","mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def store_mnemonic(mnemonic)\n")),(0,l.kt)("p",null,"Store mnemonic."),(0,l.kt)("h3",{id:"start_background_sync"},"start","_","background","_","sync"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def start_background_sync(options, interval_in_milliseconds)\n")),(0,l.kt)("p",null,"Start background sync."),(0,l.kt)("h3",{id:"stop_background_sync"},"stop","_","background","_","sync"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def stop_background_sync()\n")),(0,l.kt)("p",null,"Stop background syncing."))}p.isMDXComponent=!0}}]);