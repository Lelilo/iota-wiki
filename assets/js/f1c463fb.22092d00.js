"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={},a="GoShimmer DAGs visualizer",l={unversionedId:"tooling/dags_visualizer",id:"tooling/dags_visualizer",title:"GoShimmer DAGs visualizer",description:"The DAGs visualizer is our all round tool for visualizing DAGs. Be it Tangle, UTXO-DAG or Conflict-DAG or their interactions. The DAGs visualizer is our go-to tool for visualization.",source:"@site/iota/external/goshimmer/develop/documentation/docs/tooling/dags_visualizer.md",sourceDirName:"tooling",slug:"/tooling/dags_visualizer",permalink:"/goshimmer/tooling/dags_visualizer",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/iota/external/goshimmer/develop/documentation/docs/tooling/dags_visualizer.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Integration Tests with Docker",permalink:"/goshimmer/tooling/integration_tests"},next:{title:"Evil spammer",permalink:"/goshimmer/tooling/evil_spammer"}},s={},c=[{value:"How to run",id:"how-to-run",level:2},{value:"Global Functions",id:"global-functions",level:3},{value:"Set explorer URL",id:"set-explorer-url",level:4},{value:"Search Vertex Within Time Intervals",id:"search-vertex-within-time-intervals",level:4},{value:"Select and center vertex across DAGs",id:"select-and-center-vertex-across-dags",level:4},{value:"How to run in dev mode",id:"how-to-run-in-dev-mode",level:2},{value:"Docker",id:"docker",level:3},{value:"How to pack changes to pkged.go",id:"how-to-pack-changes-to-pkgedgo",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"goshimmer-dags-visualizer"},"GoShimmer DAGs visualizer"),(0,o.kt)("p",null,"The DAGs visualizer is our all round tool for visualizing DAGs. Be it Tangle, UTXO-DAG or Conflict-DAG or their interactions. The DAGs visualizer is our go-to tool for visualization."),(0,o.kt)("h2",{id:"how-to-run"},"How to run"),(0,o.kt)("p",null,"DAGs visualizer is already packed into ",(0,o.kt)("inlineCode",{parentName:"p"},"pkged.go"),".\nTo run it just simply launch a goshimmer node, open browser and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8061"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"UTXO-DAG and Conflict-DAG will check if there's any added or removed vertex every 10 seconds and rearrange vertices positions.")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(38726).Z},(0,o.kt)("img",{alt:"DAGs visualizer Overview",src:n(26469).Z,title:"DAGs visualizer overview",width:"2131",height:"3393"}))),(0,o.kt)("h3",{id:"global-functions"},"Global Functions"),(0,o.kt)("p",null,"Global functions are used to apply settings across DAGs or interact with them."),(0,o.kt)("h4",{id:"set-explorer-url"},"Set explorer URL"),(0,o.kt)("p",null,"Each node in a graph can be selected to see its contained information, and they are navigated to the dashboard explorer for more details. You can change the url to the desired dashboard explorer, default is ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"."),(0,o.kt)("h4",{id:"search-vertex-within-time-intervals"},"Search Vertex Within Time Intervals"),(0,o.kt)("p",null,'You can check how Tangle, UTXO and conflict DAG look like in a given timeframe.\nPress "search" button, it will show you numbers of blocks, transactions and conflicts found within the given timeframe. If you want to render them in graphs, push "render" button.'),(0,o.kt)("p",null,"The conflict DAG shows not just conflicts in the given time interval (colored in orage) but also the full history (colored in blue) to the master conflict."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Drawing a large amount of transactions or conflicts may slow down the browser.")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(2334).Z},(0,o.kt)("img",{alt:"DAGs visualizer Searching",src:n(58217).Z,title:"DAGs visualizer searching",width:"2131",height:"3393"}))),(0,o.kt)("h4",{id:"select-and-center-vertex-across-dags"},"Select and center vertex across DAGs"),(0,o.kt)("p",null,"You can see a selected block/transaction/conflict and its corresponding block/transaction/conflict in other DAGs! Here's an example of sync with the selected transaction, you can see the block and conflict that contains the transaction are highlighted."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(60327).Z},(0,o.kt)("img",{alt:"DAGs visualizer Syncing with TX",src:n(23689).Z,title:"DAGs visualizer sync with TX",width:"2131",height:"3393"}))),(0,o.kt)("p",null,"Another example of sync with the selected conflict:\n",(0,o.kt)("a",{target:"_blank",href:n(92594).Z},(0,o.kt)("img",{alt:"DAGs visualizer Syncing with conflict",src:n(42323).Z,title:"DAGs visualizer sync with conflict",width:"2131",height:"3393"}))),(0,o.kt)("h2",{id:"how-to-run-in-dev-mode"},"How to run in dev mode"),(0,o.kt)("p",null,"Dev mode has only been tested on Linux."),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Run the yarn development server in a container and add it to the docker-network."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure to set ",(0,o.kt)("inlineCode",{parentName:"li"},"dagsvisualizer.dev")," to true, to enable GoShimmer to serve assets."),(0,o.kt)("li",{parentName:"ol"},"Make sure to set ",(0,o.kt)("inlineCode",{parentName:"li"},"dagsvisualizer.devBindAddress")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"dagsvisualizer-dev-docker:3000"),"."),(0,o.kt)("li",{parentName:"ol"},"Run Goshimmer docker-network."),(0,o.kt)("li",{parentName:"ol"},"Go to goshimmer root directory and run script ",(0,o.kt)("inlineCode",{parentName:"li"},"scripts/dags_visualizer_dev_docker.sh"),". It will\ninstall all needed npm modules and create a container with a running development server instance."),(0,o.kt)("li",{parentName:"ol"},"Using default port config, you should now be able to access the DAGs visualizer under ",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8061"},"http://127.0.0.1:8061"))),(0,o.kt)("p",null,"To see the changes, you need to manually reload the page."),(0,o.kt)("h2",{id:"how-to-pack-changes-to-pkgedgo"},"How to pack changes to pkged.go"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"pkger")," to wrap all built frontend files into Go files."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markbates/pkger#installation"},"Install ",(0,o.kt)("inlineCode",{parentName:"a"},"pkger"))," if not already done."),(0,o.kt)("li",{parentName:"ol"},"Build DAGs visualizezr by running ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn build")," within the ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend")," directory."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pkger"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pkged.go")," under root directory of goShimmer should have been modified."),(0,o.kt)("li",{parentName:"ol"},"Done. Now you can build goShimmer and your DAGs visualizer changes will be included within the binary.")))}u.isMDXComponent=!0},38726:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/dags-visualizer-226144997e84e08a894042414329f6bc.png"},2334:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/searching-b02f776369260a6de1872912f3ec5974.png"},92594:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/sync-with-conflict-a5fa661a54433e3fe24dc86966bdafa8.png"},60327:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/sync-with-tx-9333882a6cfb387d4727437ead8867d7.png"},26469:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dags-visualizer-226144997e84e08a894042414329f6bc.png"},58217:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/searching-b02f776369260a6de1872912f3ec5974.png"},42323:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sync-with-conflict-a5fa661a54433e3fe24dc86966bdafa8.png"},23689:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sync-with-tx-9333882a6cfb387d4727437ead8867d7.png"}}]);