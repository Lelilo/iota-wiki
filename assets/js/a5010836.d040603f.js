"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[85682],{66346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),c=n(36232),i=n(84661),s=["components"],u={description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","deposit","transfer","chain","Rust","Solo","how to"]},l="How to Deposit to a Chain",p={unversionedId:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",id:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",title:"How to Deposit to a Chain",description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-deposit-to-a-chain",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-deposit-to-a-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",tags:[],version:"current",frontMatter:{description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","deposit","transfer","chain","Rust","Solo","how to"]},sidebar:"tutorialSidebar",previous:{title:"How Accounts Work",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-accounts-work"},next:{title:"How to Withdraw From a Chain",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"}},d={},m=[],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-deposit-to-a-chain"},"How to Deposit to a Chain"),(0,r.kt)("p",null,"Any assets attached to an on-ledger request are automatically deposited to the sender's L2 account before actually executing the request.\nSo, in order to deposit tokens, just send ",(0,r.kt)("em",{parentName:"p"},"any")," on-ledger request with the tokens attached."),(0,r.kt)("p",null,"A commonly needed operation is to just deposit some funds and do nothing else.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit")," entry point of the ",(0,r.kt)("a",{parentName:"p",href:"../core_contracts/accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"accounts")," core contract")," is a no-op function that serves this purpose."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"All requests are charged a gas fee, so the L2 account may end up having fewer tokens than the amount sent."),(0,r.kt)("li",{parentName:"ul"},"The IOTA L1 transaction needs to have a minimum amount of tokens attached for\nstorage deposit. If the amount transferred is less than this minimum amount\nit will fail.")))),(0,r.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"solo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"err := chain.DepositBaseTokensToL2(N, wallet)\nrequire.NoError(t, err)\n"))),(0,r.kt)(i.Z,{value:"soloctx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N base tokens from wallet into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx.Sign(wallet))\nd.Func.TransferBaseTokes(N).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,r.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// deposits N iotas from current SC into chain *chainID*\nlet d = coreaccounts::ScFuncs::deposit(ctx);\nd.func.transfer_base_tokens(N).post_to_chain(chainID);\n"))),(0,r.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from current SC into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx)\nd.Func.TransferBaseTokens(N).PostToChain(chainID)\n")))))}f.isMDXComponent=!0},84661:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(67294),a=n(86010),r="tabItem_Ymn6";function c(e){var t=e.children,n=e.hidden,c=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,c),hidden:n},t)}},36232:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(87462),a=n(67294),r=n(86010),c=n(35074),i=n(74879),s=n(85425),u=n(51085),l="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,c=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,x=(0,a.useState)(y),O=x[0],_=x[1],E=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=N[f];null!=S&&S!==O&&b.some((function(e){return e.value===S}))&&_(S)}var C=function(e){var t=e.currentTarget,n=E.indexOf(t),o=b[n].value;o!==O&&(D(t),_(o),null!=f&&T(f,String(o)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,a=E.indexOf(e.currentTarget)+1;n=null!=(o=E[a])?o:E[0];break;case"ArrowLeft":var r,c=E.indexOf(e.currentTarget)-1;n=null!=(r=E[c])?r:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",l)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var t=e.value,n=e.label,c=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:C,onClick:C},c,{className:(0,r.Z)("tabs__item",p,null==c?void 0:c.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,c.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,c(c({ref:t},l),{},{components:n})):o.createElement(h,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);