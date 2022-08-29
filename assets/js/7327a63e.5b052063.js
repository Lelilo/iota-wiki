"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23585],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return d}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(a),d=l,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(b,r(r({ref:t},i),{},{components:a})):n.createElement(b,r({ref:t},i))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54967:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),r=a(34259),c=a(18679),u=["components"],s={description:"The Accounts contract provides the balance, totalAssets and accounts views.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","view","account","balances","Rust","Solo","how to"]},i="View Account Balances",p={unversionedId:"guide/core_concepts/accounts/view-account-balances",id:"guide/core_concepts/accounts/view-account-balances",title:"View Account Balances",description:"The Accounts contract provides the balance, totalAssets and accounts views.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/view-account-balances.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/view-account-balances",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/view-account-balances",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/view-account-balances.mdx",tags:[],version:"current",frontMatter:{description:"The Accounts contract provides the balance, totalAssets and accounts views.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","view","account","balances","Rust","Solo","how to"]},sidebar:"tutorialSidebar",previous:{title:"How to Withdraw From a Chain",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},next:{title:"The Common Account",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/the-common-account"}},m={},d=[{value:"<code>balance</code>",id:"balance",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"<code>totalAssets</code>",id:"totalassets",level:2},{value:"Returns",id:"returns-1",level:3},{value:"<code>accounts</code>",id:"accounts",level:2},{value:"Returns",id:"returns-2",level:3}],b={toc:d};function v(e){var t=e.components,a=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"view-account-balances"},"View Account Balances"),(0,o.kt)("p",null,"The Accounts contract provides the following views:"),(0,o.kt)("h2",{id:"balance"},(0,o.kt)("inlineCode",{parentName:"h2"},"balance")),(0,o.kt)("p",null,"Get the account balance of a specific account."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ParamAgentID"),": account's AgentID.")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A map of ",(0,o.kt)("inlineCode",{parentName:"li"},"token ID -> amount")," (the base token is identified by an empty token ID).")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"balances := chain.L2Assets(agentID)\n"))),(0,o.kt)(c.Z,{value:"soloctx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"b := coreaccounts.ScFuncs.Balance(ctx)\nb.Params.AgentID().SetValue(agentID)\nb.Func.Call()\nrequire.NoError(t, ctx.Err)\nbalances := b.Results.Balances()\n"))),(0,o.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let b = coreaccounts::ScFuncs::balance(ctx);\nb.params.agent_id().set_value(&agentID);\nb.func.call();\nlet balances = b.results.balances();\n"))),(0,o.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"b := coreaccounts.ScFuncs.Balance(ctx)\nb.Params.AgentID().SetValue(agentID)\nb.Func.Call()\nbalances := b.Results.Balances()\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"totalassets"},(0,o.kt)("inlineCode",{parentName:"h2"},"totalAssets")),(0,o.kt)("p",null,"Get the total funds controlled by the chain."),(0,o.kt)("h3",{id:"returns-1"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A map of ","[token_color]"," -> ","[amount]"," .")),(0,o.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"balances := chain.L2TotalAssets()\n"))),(0,o.kt)(c.Z,{value:"soloctx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"b := coreaccounts.ScFuncs.TotalAssets(ctx)\nb.Func.Call()\nrequire.NoError(t, ctx.Err)\nbalances := b.Results.Balances()\n"))),(0,o.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let b = coreaccounts::ScFuncs::total_assets(ctx);\nb.func.call();\nlet balances = b.results.balances();\n"))),(0,o.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"b := coreaccounts.ScFuncs.TotalAssets(ctx)\nb.Func.Call()\nbalances := b.Results.Balances()\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"accounts"},(0,o.kt)("inlineCode",{parentName:"h2"},"accounts")),(0,o.kt)("p",null,"Get a list of all accounts existing on the chain."),(0,o.kt)("h3",{id:"returns-2"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A list of accounts (Agent IDs).")),(0,o.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"accounts := chain.L2Accounts()\n"))),(0,o.kt)(c.Z,{value:"soloctx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"a := coreaccounts.ScFuncs.Accounts(ctx)\na.Func.Call()\nrequire.NoError(t, ctx.Err)\naccounts := a.Results.Agents()\n"))),(0,o.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let a = coreaccounts::ScFuncs::accounts(ctx);\na.func.call();\nlet accounts = a.results.agents();\n"))),(0,o.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"a := coreaccounts.ScFuncs.Accounts(ctx)\na.Func.Call()\naccounts := a.Results.Agents()\n")))))}v.isMDXComponent=!0},18679:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294),l=a(86010),o="tabItem_Ymn6";function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:a},t)}},34259:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),l=a(67294),o=a(86010),r=a(51048),c=a(33609),u=a(1943),s=a(72957),i="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a,r=e.lazy,m=e.block,d=e.defaultValue,b=e.values,v=e.groupId,f=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,c.l)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),T=w.tabGroupChoices,x=w.setTabGroupChoices,N=(0,l.useState)(y),S=N[0],A=N[1],E=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=T[v];null!=O&&O!==S&&k.some((function(e){return e.value===O}))&&A(O)}var Z=function(e){var t=e.currentTarget,a=E.indexOf(t),n=k[a].value;n!==S&&(I(t),A(n),null!=v&&x(v,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=E.indexOf(e.currentTarget)+1;a=null!=(n=E[l])?n:E[0];break;case"ArrowLeft":var o,r=E.indexOf(e.currentTarget)-1;a=null!=(o=E[r])?o:E[E.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",i)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},k.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return E.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),r?(0,l.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,r.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}}}]);