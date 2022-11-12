"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[66225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=i(n),y=r,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||o;return n?a.createElement(d,u(u({ref:t},p),{},{components:n})):a.createElement(d,u({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var i=2;i<o;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(34259),u=n(18679);const l={keywords:["containers","types","container types","single type","array","schema definition file"],description:"You can add a typedefs section to the schema definition file, where you can define a single type name for a container type. This way you can easily create containers that contain container types.",image:"/img/logo/WASP_logo_dark.png"},s="Type Definitions",i={unversionedId:"guide/wasm_vm/typedefs",id:"guide/wasm_vm/typedefs",title:"Type Definitions",description:"You can add a typedefs section to the schema definition file, where you can define a single type name for a container type. This way you can easily create containers that contain container types.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/typedefs.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/typedefs",permalink:"/next/smart-contracts/guide/wasm_vm/typedefs",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/typedefs.mdx",tags:[],version:"current",frontMatter:{keywords:["containers","types","container types","single type","array","schema definition file"],description:"You can add a typedefs section to the schema definition file, where you can define a single type name for a container type. This way you can easily create containers that contain container types.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Structured Data Types",permalink:"/next/smart-contracts/guide/wasm_vm/structs"},next:{title:"Smart Contract State",permalink:"/next/smart-contracts/guide/wasm_vm/state"}},p={},m=[],c={toc:m};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"type-definitions"},"Type Definitions"),(0,r.kt)("p",null,"We allow nesting of ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/proxies#container-proxies"},"container types"),", but it\nis not possible to specify these types directly because the type name syntax only allows\nyou to specify a single container type."),(0,r.kt)("p",null,"There is a simple solution to this problem. You can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"typedefs")," section to the schema\ndefinition file, where you can define a single type name for a container type. That way\nyou can easily create containers that contain such container types. The\n",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will automatically generate the in-between proxy types necessary\nto make this work."),(0,r.kt)("p",null,"To keep it at the ",(0,r.kt)("inlineCode",{parentName:"p"},"betting")," smart contract from ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/structs"},"the previous section"),",\nimagine you want to keep track of all betting rounds. Since a betting round contains an\narray of all bets in a round, if it weren't for typedefs you could not define it easily."),(0,r.kt)("p",null,"Instead, now you add the following to your schema definition file:"),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"typedefs:\n  BettingRound: Bet[] // one round of bets\nstate:\n  rounds: BettingRound[] // keep track of all betting rounds\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will generate the following code in ",(0,r.kt)("inlineCode",{parentName:"p"},"typedefs.xx")," for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"BettingRound")," type:"),(0,r.kt)(o.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"\n\ntype ArrayOfImmutableBet struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (a ArrayOfImmutableBet) Length() uint32 {\n    return a.proxy.Length()\n}\n\nfunc (a ArrayOfImmutableBet) GetBet(index uint32) ImmutableBet {\n    return ImmutableBet{proxy: a.proxy.Index(index)}\n}\n\ntype ImmutableBettingRound = ArrayOfImmutableBet\n\ntype ArrayOfMutableBet struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (a ArrayOfMutableBet) AppendBet() MutableBet {\n    return MutableBet{proxy: a.proxy.Append()}\n}\n\nfunc (a ArrayOfMutableBet) Clear() {\n    a.proxy.ClearArray()\n}\n\nfunc (a ArrayOfMutableBet) Length() uint32 {\n    return a.proxy.Length()\n}\n\nfunc (a ArrayOfMutableBet) GetBet(index uint32) MutableBet {\n    return MutableBet{proxy: a.proxy.Index(index)}\n}\n\ntype MutableBettingRound = ArrayOfMutableBet\n'))),(0,r.kt)(u.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmlib::*;\nuse crate::*;\n\n#[derive(Clone)]\npub struct ArrayOfImmutableBet {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ArrayOfImmutableBet {\n    pub fn length(&self) -> u32 {\n        self.proxy.length()\n    }\n\n\n    pub fn get_bet(&self, index: u32) -> ImmutableBet {\n        ImmutableBet { proxy: self.proxy.index(index) }\n    }\n}\n\npub type ImmutableBettingRound = ArrayOfImmutableBet;\n\n#[derive(Clone)]\npub struct ArrayOfMutableBet {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ArrayOfMutableBet {\n\n    pub fn append_bet(&self) -> MutableBet {\n        MutableBet { proxy: self.proxy.append() }\n    }\n    pub fn clear(&self) {\n        self.proxy.clear_array();\n    }\n\n    pub fn length(&self) -> u32 {\n        self.proxy.length()\n    }\n\n\n    pub fn get_bet(&self, index: u32) -> MutableBet {\n        MutableBet { proxy: self.proxy.index(index) }\n    }\n}\n\npub type MutableBettingRound = ArrayOfMutableBet;\n"))),(0,r.kt)(u.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmtypes from "wasmlib/wasmtypes";\nimport * as sc from "./index";\n\nexport class ArrayOfImmutableBet extends wasmtypes.ScProxy {\n\n    length(): u32 {\n        return this.proxy.length();\n    }\n\n    getBet(index: u32): sc.ImmutableBet {\n        return new sc.ImmutableBet(this.proxy.index(index));\n    }\n}\n\nexport class ImmutableBettingRound extends ArrayOfImmutableBet {\n}\n\nexport class ArrayOfMutableBet extends wasmtypes.ScProxy {\n\n    appendBet(): sc.MutableBet {\n        return new sc.MutableBet(this.proxy.append());\n    }\n\n    clear(): void {\n        this.proxy.clearArray();\n    }\n\n    length(): u32 {\n        return this.proxy.length();\n    }\n\n    getBet(index: u32): sc.MutableBet {\n        return new sc.MutableBet(this.proxy.index(index));\n    }\n}\n\nexport class MutableBettingRound extends ArrayOfMutableBet {\n}\n')))),(0,r.kt)("p",null,"Note how ",(0,r.kt)("inlineCode",{parentName:"p"},"ImmutableBettingRound")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MutableBettingRound")," type aliases are created\nfor the types ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayOfImmutableBet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayOfMutableBet"),". These are subsequently used\nin the state definition that is generated in ",(0,r.kt)("inlineCode",{parentName:"p"},"state.xx"),":"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package betting\n\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"\n\ntype ArrayOfImmutableBettingRound struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (a ArrayOfImmutableBettingRound) Length() uint32 {\n    return a.proxy.Length()\n}\n\nfunc (a ArrayOfImmutableBettingRound) GetBettingRound(index uint32) ImmutableBettingRound {\n    return ImmutableBettingRound{proxy: a.proxy.Index(index)}\n}\n\ntype ImmutableBettingState struct {\n    proxy wasmtypes.Proxy\n}\n\n// all bets that were made in this round\nfunc (s ImmutableBettingState) Bets() ArrayOfImmutableBet {\n    return ArrayOfImmutableBet{proxy: s.proxy.Root(StateBets)}\n}\n\n// current owner of this smart contract\nfunc (s ImmutableBettingState) Owner() wasmtypes.ScImmutableAgentID {\n    return wasmtypes.NewScImmutableAgentID(s.proxy.Root(StateOwner))\n}\n\nfunc (s ImmutableBettingState) Rounds() ArrayOfImmutableBettingRound {\n    return ArrayOfImmutableBettingRound{proxy: s.proxy.Root(StateRounds)}\n}\n\ntype ArrayOfMutableBettingRound struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (a ArrayOfMutableBettingRound) AppendBettingRound() MutableBettingRound {\n    return MutableBettingRound{proxy: a.proxy.Append()}\n}\n\nfunc (a ArrayOfMutableBettingRound) Clear() {\n    a.proxy.ClearArray()\n}\n\nfunc (a ArrayOfMutableBettingRound) Length() uint32 {\n    return a.proxy.Length()\n}\n\nfunc (a ArrayOfMutableBettingRound) GetBettingRound(index uint32) MutableBettingRound {\n    return MutableBettingRound{proxy: a.proxy.Index(index)}\n}\n\ntype MutableBettingState struct {\n    proxy wasmtypes.Proxy\n}\n\nfunc (s MutableBettingState) AsImmutable() ImmutableBettingState {\n    return ImmutableBettingState(s)\n}\n\n// all bets that were made in this round\nfunc (s MutableBettingState) Bets() ArrayOfMutableBet {\n    return ArrayOfMutableBet{proxy: s.proxy.Root(StateBets)}\n}\n\n// current owner of this smart contract\nfunc (s MutableBettingState) Owner() wasmtypes.ScMutableAgentID {\n    return wasmtypes.NewScMutableAgentID(s.proxy.Root(StateOwner))\n}\n\nfunc (s MutableBettingState) Rounds() ArrayOfMutableBettingRound {\n    return ArrayOfMutableBettingRound{proxy: s.proxy.Root(StateRounds)}\n}\n'))),(0,r.kt)(u.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmlib::*;\n\nuse crate::*;\n\n#[derive(Clone)]\npub struct ArrayOfImmutableBettingRound {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ArrayOfImmutableBettingRound {\n    pub fn length(&self) -> u32 {\n        self.proxy.length()\n    }\n\n\n    pub fn get_betting_round(&self, index: u32) -> ImmutableBettingRound {\n        ImmutableBettingRound { proxy: self.proxy.index(index) }\n    }\n}\n\n#[derive(Clone)]\npub struct ImmutableBettingState {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ImmutableBettingState {\n    // all bets that were made in this round\n    pub fn bets(&self) -> ArrayOfImmutableBet {\n        ArrayOfImmutableBet { proxy: self.proxy.root(STATE_BETS) }\n    }\n\n    // current owner of this smart contract\n    pub fn owner(&self) -> ScImmutableAgentID {\n        ScImmutableAgentID::new(self.proxy.root(STATE_OWNER))\n    }\n\n    pub fn rounds(&self) -> ArrayOfImmutableBettingRound {\n        ArrayOfImmutableBettingRound { proxy: self.proxy.root(STATE_ROUNDS) }\n    }\n}\n\n#[derive(Clone)]\npub struct ArrayOfMutableBettingRound {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ArrayOfMutableBettingRound {\n\n    pub fn append_betting_round(&self) -> MutableBettingRound {\n        MutableBettingRound { proxy: self.proxy.append() }\n    }\n    pub fn clear(&self) {\n        self.proxy.clear_array();\n    }\n\n    pub fn length(&self) -> u32 {\n        self.proxy.length()\n    }\n\n\n    pub fn get_betting_round(&self, index: u32) -> MutableBettingRound {\n        MutableBettingRound { proxy: self.proxy.index(index) }\n    }\n}\n\n#[derive(Clone)]\npub struct MutableBettingState {\n    pub(crate) proxy: Proxy,\n}\n\nimpl MutableBettingState {\n    pub fn as_immutable(&self) -> ImmutableBettingState {\n        ImmutableBettingState { proxy: self.proxy.root("") }\n    }\n\n    // all bets that were made in this round\n    pub fn bets(&self) -> ArrayOfMutableBet {\n        ArrayOfMutableBet { proxy: self.proxy.root(STATE_BETS) }\n    }\n\n    // current owner of this smart contract\n    pub fn owner(&self) -> ScMutableAgentID {\n        ScMutableAgentID::new(self.proxy.root(STATE_OWNER))\n    }\n\n    pub fn rounds(&self) -> ArrayOfMutableBettingRound {\n        ArrayOfMutableBettingRound { proxy: self.proxy.root(STATE_ROUNDS) }\n    }\n}\n'))),(0,r.kt)(u.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmtypes from "wasmlib/wasmtypes";\nimport * as sc from "./index";\n\nexport class ArrayOfImmutableBettingRound extends wasmtypes.ScProxy {\n\n    length(): u32 {\n        return this.proxy.length();\n    }\n\n    getBettingRound(index: u32): sc.ImmutableBettingRound {\n        return new sc.ImmutableBettingRound(this.proxy.index(index));\n    }\n}\n\nexport class ImmutableBettingState extends wasmtypes.ScProxy {\n    // all bets that were made in this round\n    bets(): sc.ArrayOfImmutableBet {\n        return new sc.ArrayOfImmutableBet(this.proxy.root(sc.StateBets));\n    }\n\n    // current owner of this smart contract\n    owner(): wasmtypes.ScImmutableAgentID {\n        return new wasmtypes.ScImmutableAgentID(this.proxy.root(sc.StateOwner));\n    }\n\n    rounds(): sc.ArrayOfImmutableBettingRound {\n        return new sc.ArrayOfImmutableBettingRound(this.proxy.root(sc.StateRounds));\n    }\n}\n\nexport class ArrayOfMutableBettingRound extends wasmtypes.ScProxy {\n\n    appendBettingRound(): sc.MutableBettingRound {\n        return new sc.MutableBettingRound(this.proxy.append());\n    }\n\n    clear(): void {\n        this.proxy.clearArray();\n    }\n\n    length(): u32 {\n        return this.proxy.length();\n    }\n\n    getBettingRound(index: u32): sc.MutableBettingRound {\n        return new sc.MutableBettingRound(this.proxy.index(index));\n    }\n}\n\nexport class MutableBettingState extends wasmtypes.ScProxy {\n    asImmutable(): sc.ImmutableBettingState {\n        return new sc.ImmutableBettingState(this.proxy);\n    }\n\n    // all bets that were made in this round\n    bets(): sc.ArrayOfMutableBet {\n        return new sc.ArrayOfMutableBet(this.proxy.root(sc.StateBets));\n    }\n\n    // current owner of this smart contract\n    owner(): wasmtypes.ScMutableAgentID {\n        return new wasmtypes.ScMutableAgentID(this.proxy.root(sc.StateOwner));\n    }\n\n    rounds(): sc.ArrayOfMutableBettingRound {\n        return new sc.ArrayOfMutableBettingRound(this.proxy.root(sc.StateRounds));\n    }\n}\n')))),(0,r.kt)("p",null,"Notice how the ",(0,r.kt)("inlineCode",{parentName:"p"},"rounds()")," member function returns a proxy to an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"BettingRound"),".\nWhich in turn is an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Bet"),". So, the desired result has been achieved. And every\naccess step along the way only allows you to take the path laid out which is checked at\ncompile-time."),(0,r.kt)("p",null,"In the next section we will explore how the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," generates a proxy\ninterface to mutable ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/state"},"State"),"."))}y.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,u),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),u=n(51048),l=n(33609),s=n(1943),i=n(72957);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:n,block:u,defaultValue:c,values:y,groupId:d,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=y??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),x=(0,l.l)(g,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:B}=(0,s.U)(),[v,I]=(0,r.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:A}=(0,i.o5)();if(null!=d){const e=w[d];null!=e&&e!==v&&g.some((t=>t.value===e))&&I(e)}const k=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==v&&(A(t),I(a),null!=d&&B(d,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},b)},g.map((e=>{let{value:t,label:n,attributes:u}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>O.push(e),onKeyDown:R,onFocus:k,onClick:k},u,{className:(0,o.Z)("tabs__item",m,null==u?void 0:u.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function y(e){const t=(0,u.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);