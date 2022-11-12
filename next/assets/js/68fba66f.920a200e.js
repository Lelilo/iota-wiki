"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),r=n(34259),s=n(18679);const i={keywords:["testing","solo testing environment","call context","smart contract functionalities","data types","type conversions","Go"],description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle.",image:"/img/logo/WASP_logo_dark.png"},l="Testing Smart Contracts",c={unversionedId:"guide/wasm_vm/test",id:"guide/wasm_vm/test",title:"Testing Smart Contracts",description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/test.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/test",permalink:"/next/smart-contracts/guide/wasm_vm/test",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/test.mdx",tags:[],version:"current",frontMatter:{keywords:["testing","solo testing environment","call context","smart contract functionalities","data types","type conversions","Go"],description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Posting Asynchronous Requests",permalink:"/next/smart-contracts/guide/wasm_vm/post"},next:{title:"Example Tests",permalink:"/next/smart-contracts/guide/wasm_vm/examples"}},u={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-smart-contracts"},"Testing Smart Contracts"),(0,o.kt)("p",null,"Testing of smart contracts happens in the ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/solo/what-is-solo"},"Solo")," testing\nenvironment. This enables synchronous, deterministic testing of smart contract\nfunctionalities without the overhead of having to start nodes, set up a committee, and\nsend transactions over the Tangle. Instead, you can use Go's built-in test environment in\ncombination with Solo to deploy chains and smart contracts and simulate transactions."),(0,o.kt)("p",null,"Solo directly interacts with the ISC code, and therfore uses all the ISC-specific data\ntypes directly. Our Wasm smart contracts cannot access these types directly, because they\nrun in a separate, sandboxed environment. Therefore, WasmLib implements its\n",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/types"},"own versions")," of these data types, and the VM layer acts as a data type\ntranslator between both systems."),(0,o.kt)("p",null,"The impact of this type transformation used to be that to be able to write tests in the\nsolo environment the user also needed to know about the ISC-specific data types and type\nconversion functions, and exactly how to properly pass such data in and out of smart\ncontract function calls. This burdened the user with an unnecessary increased learning\ncurve and countless unnecessary type conversions."),(0,o.kt)("p",null,"With the introduction of the ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool"),", we were able to remove this\nimpedance mismatch and allow the users to test smart contract functionality in terms of\nthe WasmLib data types and functions that they are already familiar with. To that end, we\nintroduced ",(0,o.kt)("inlineCode",{parentName:"p"},"SoloContext"),", a new ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/context"},"Call Context")," that specifically works with\nthe Solo testing environment. We aimed to simplify the testing of smart contracts as much\nas possible, keeping the full Solo interface hidden as much as possible, but still\navailable when necessary."),(0,o.kt)("p",null,"The only concession we still have to make is to the language used. Because Solo only works\nin the Go language environment, we have to use the Go language version of the interface\ncode that the ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," generates when testing our smart contracts. Because\nWasmLib programming for Go, Rust, and TypeScript are practically identical, we feel that\nthis is not unsurmountable. The WasmLib interfaces only differ slightly if language\nidiosyncrasies force differences in syntax or naming conventions. This hurdle used to be a\nlot bigger, when direct programming of Solo had to be used, and most type conversions had\nto be done manually. Now we get to use the generated compile-time type-checked interface\nto our smart contract functions that we are already familiar with."),(0,o.kt)("p",null,"Let's look at the simplest way of initializing a smart contract by using the new\n",(0,o.kt)("inlineCode",{parentName:"p"},"SoloContext")," in a test function:"),(0,o.kt)(r.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestDeploy(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnDispatch)\n    require.NoError(t, ctx.ContractExists(dividend.ScName))\n}\n")))),(0,o.kt)("p",null,"The first line will automatically create a new chain, and upload and deploy the provided\nexample ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract to this chain. It returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"SoloContext")," for further use. The\nsecond line verifies the existence of the deployed contract on the chain associated with\nthat ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/context"},"Call Context"),"."),(0,o.kt)("p",null,"Here is another part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," test code, where you can see how we wrap repetitive\ncalls to smart contract functions that are used in multiple tests:"),(0,o.kt)(r.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func dividendMember(ctx *wasmsolo.SoloContext, agent *wasmsolo.SoloAgent, factor uint64) {\n    member := dividend.ScFuncs.Member(ctx)\n    member.Params.Address().SetValue(agent.ScAgentID().Address())\n    member.Params.Factor().SetValue(factor)\n    member.Func.Post()\n}\n\nfunc dividendDivide(ctx *wasmsolo.SoloContext, amount uint64) {\n    divide := dividend.ScFuncs.Divide(ctx)\n    divide.Func.TransferBaseTokens(amount).Post()\n}\n\nfunc dividendGetFactor(ctx *wasmsolo.SoloContext, member *wasmsolo.SoloAgent) uint64 {\n    getFactor := dividend.ScFuncs.GetFactor(ctx)\n    getFactor.Params.Address().SetValue(member.ScAgentID().Address())\n    getFactor.Func.Call()\n    value := getFactor.Results.Factor().Value()\n    return value\n}\n")))),(0,o.kt)("p",null,"As you can see, we pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"SoloContext")," and the parameters to the wrapper functions,\nthen use the ",(0,o.kt)("inlineCode",{parentName:"p"},"SoloContext")," to create a ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/funcdesc"},"Function Descriptor")," for the wrapped\nfunction, pass any parameters through the its ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/params"},"Params")," proxy, and then either\n",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/post"},(0,o.kt)("inlineCode",{parentName:"a"},"post()"))," the function request or ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/call"},(0,o.kt)("inlineCode",{parentName:"a"},"call()"))," the function. Any\nresults returned are extracted through the descriptor's ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/results"},"Results")," proxy, and\nreturned by the wrapper function."),(0,o.kt)("p",null,"There is hardly any difference in the way the function interface is used within Wasm code\nor within Solo test code. The ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/context"},"Call Context")," knows how to properly\n",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/call"},(0,o.kt)("inlineCode",{parentName:"a"},"call()"))," or ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/post"},(0,o.kt)("inlineCode",{parentName:"a"},"post()"))," the function call through the function\ndescriptor. This makes for seamless testing of smart contracts."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/examples"},"next section")," we will go deeper into how the helper member functions\nof the SoloContext are used to simplify tests."))}p.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),o=n(67294),r=n(86010),s=n(51048),i=n(33609),l=n(1943),c=n(72957);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:p,groupId:h,className:f}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,l.U)(),[x,T]=(0,o.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==x&&(N(t),T(a),null!=h&&k(h,String(a)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},f)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>S.push(e),onKeyDown:_,onFocus:C,onClick:C},s,{className:(0,r.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);