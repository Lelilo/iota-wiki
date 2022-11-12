"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(a),u=i,h=k["".concat(s,".").concat(u)]||k[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},19725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={description:"Markers is a tool to efficiently estimate the approval weight of a block and that reduces the portion of the Tangle that needs to be traversed, and which finally results in the confirmation state.",image:"/img/protocol_specification/example_1.png",keywords:["approval weight","marker","block","sequence","future marker","new marker","part marker","past cone"]},o="Markers",l={unversionedId:"protocol_specification/components/markers",id:"protocol_specification/components/markers",title:"Markers",description:"Markers is a tool to efficiently estimate the approval weight of a block and that reduces the portion of the Tangle that needs to be traversed, and which finally results in the confirmation state.",source:"@site/iota/external/goshimmer/develop/documentation/docs/protocol_specification/components/markers.md",sourceDirName:"protocol_specification/components",slug:"/protocol_specification/components/markers",permalink:"/goshimmer/protocol_specification/components/markers",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/iota/external/goshimmer/develop/documentation/docs/protocol_specification/components/markers.md",tags:[],version:"current",frontMatter:{description:"Markers is a tool to efficiently estimate the approval weight of a block and that reduces the portion of the Tangle that needs to be traversed, and which finally results in the confirmation state.",image:"/img/protocol_specification/example_1.png",keywords:["approval weight","marker","block","sequence","future marker","new marker","part marker","past cone"]},sidebar:"docs",previous:{title:"UTXO Output Types",permalink:"/goshimmer/protocol_specification/components/advanced_outputs"},next:{title:"Glossary",permalink:"/goshimmer/protocol_specification/glossary"}},s={},c=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Design",id:"design",level:2},{value:"Sequences",id:"sequences",level:3},{value:"Sequence Graph",id:"sequence-graph",level:3},{value:"Usage",id:"usage",level:2},{value:"Markers Application: Approval Weight Estimation",id:"markers-application-approval-weight-estimation",level:3},{value:"Conflict Mapping",id:"conflict-mapping",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"markers"},"Markers"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Operations that involve traversing the Tangle are very performance intensive and, thus, we need to minimize the amount of traversing to keep algorithms fast. Markers are a tool to infer structural knowledge about the Tangle without actually traversing it."),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Markers")," are not a core module of the Coordicide project.")),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Markers")," are a tool to infer knowledge about the structure of the Tangle, therefore, we use them to keep algorithms fast. Specifically, markers are used for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"past/future cone membership;"),(0,i.kt)("li",{parentName:"ul"},"approximate approval weight of any block;"),(0,i.kt)("li",{parentName:"ul"},"tagging sections of the Tangle (e.g., conflicts) without having to traverse each block individually.")),(0,i.kt)("h2",{id:"definitions"},"Definitions"),(0,i.kt)("p",null,"Let's define the terms related to markers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sequence:")," A sequence is a chain of markers where each progressing marker contains all preceding markers of the sequence in its past cone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sequence Identifier (",(0,i.kt)("inlineCode",{parentName:"strong"},"SID"),"):")," A Sequence Identifier is the unique identifier of a Sequence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker Index (",(0,i.kt)("inlineCode",{parentName:"strong"},"MI"),"):")," A Marker Index is the marker rank in the marker DAG. Throughout the code the marker rank will be called index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"marker:")," A marker is a pair of numbers: ",(0,i.kt)("inlineCode",{parentName:"li"},"SID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"MI")," associated to a given block. Markers carrying the same ",(0,i.kt)("inlineCode",{parentName:"li"},"SID")," belong to the same Sequence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"future marker (",(0,i.kt)("inlineCode",{parentName:"strong"},"FM"),"):")," A future marker of a block is the first marker in its future cone from different sequences."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"past marker (",(0,i.kt)("inlineCode",{parentName:"strong"},"PM"),"):")," A past marker of a block is a marker in its past cone (can be multiple markers of distinct sequences). For a given sequence it is set to the newest past marker of its parents, that is the one that has the largest ",(0,i.kt)("inlineCode",{parentName:"li"},"MI"),". The past marker of a marker is set to itself.")),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"On a high level, markers provide structural knowledge of the Tangle and each individual block without the need to traverse (aka walking the Tangle). Markers are a form of meta-information (for each block) that each node locally creates when processing blocks. They can be seen as specific, uniquely tainted blocks that, taken together, again build a DAG within the Tangle. We can then utilize this marker DAG to determine structural details."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/3x7H68t.png",alt:null})),(0,i.kt)("p",null,"The above example shows a Tangle with the red blocks being markers in the same sequence (more details on sequences later). A marker is uniquely identified by ",(0,i.kt)("inlineCode",{parentName:"p"},"sequenceID,index"),', where the index is ever-increasing. Any block can be "selected" as a marker if it fulfills a certain set of rules:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"every n-th block (in the example, each block is tried to be set as a marker)"),(0,i.kt)("li",{parentName:"ul"},"latest marker of sequence is in its past cone.")),(0,i.kt)("p",null,"The markers build a chain/DAG and because of the rules it becomes clear that ",(0,i.kt)("inlineCode",{parentName:"p"},"marker 0,1")," is in the past cone of ",(0,i.kt)("inlineCode",{parentName:"p"},"marker 0,5"),". Since markers represent meta-information for the underlying blocks and each block keeps the latest marker in its past cone as ",(0,i.kt)("em",{parentName:"p"},"structural information"),", we can infer that ",(0,i.kt)("inlineCode",{parentName:"p"},"block B")," (",(0,i.kt)("inlineCode",{parentName:"p"},"FM 0,2"),") is in the past cone of ",(0,i.kt)("inlineCode",{parentName:"p"},"block I")," (",(0,i.kt)("inlineCode",{parentName:"p"},"PM 0,3"),")  Similarly, it is evident that ",(0,i.kt)("inlineCode",{parentName:"p"},"block D")," is in the past cone of ",(0,i.kt)("inlineCode",{parentName:"p"},"block J"),"."),(0,i.kt)("h3",{id:"sequences"},"Sequences"),(0,i.kt)("p",null,"A sequence is a chain of markers where each progressing marker contains all preceding markers of the sequence in its past cone. However, this very definition entails a problem: what if there are certain parts of the Tangle that are disparate to each other. Assuming only a single sequence, this would mean that a certain part of the Tangle can't get any markers. In turn, certain operations within this part of the Tangle would involve walking."),(0,i.kt)("p",null,"For this reason, we keep track of the ",(0,i.kt)("em",{parentName:"p"},"marker distance"),", which signals the distance of blocks in the Tangle in a certain past cone where no marker could be assigned. If this distance gets too big, a new sequence is created as is shown in the example below (marker distance to spawn a new sequence = 3)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Q44XZgk.png",alt:null})),(0,i.kt)("p",null,"The example above shows a side chain starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"block L")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"block P"),' where it merges back with the "main Tangle". There can be no new marker assigned as none of the ',(0,i.kt)("inlineCode",{parentName:"p"},"blocks L-O")," have the latest marker of ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence 0")," in their past cone. The marker distance grows and eventually a marker is created at ",(0,i.kt)("inlineCode",{parentName:"p"},"block N"),". Following, a marker can be assigned to ",(0,i.kt)("inlineCode",{parentName:"p"},"block O")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"block P"),". The latter is special because it combines two sequences. This is to be expected as disparate parts of the Tangle should be merged eventually. In case a block has markers from multiple sequences in its past cones the following rules apply:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assign a marker in the highest sequence if possible. If not possible, try to assign a marker in the next lower sequence."),(0,i.kt)("li",{parentName:"ul"},"The index is ",(0,i.kt)("inlineCode",{parentName:"li"},"max(marker1.Index,marker2.Index,...)"))),(0,i.kt)("p",null,"With these rules in mind, it becomes clear why ",(0,i.kt)("inlineCode",{parentName:"p"},"block P")," has the ",(0,i.kt)("inlineCode",{parentName:"p"},"marker 1,6")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"block R")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"marker 1,7"),". In case of ",(0,i.kt)("inlineCode",{parentName:"p"},"block Q"),", no marker can be assigned to ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence 1"),", and, thus, a new marker in ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence 0")," is created."),(0,i.kt)("p",null,"Always continuing the highest seqeuence should result in smaller sequences being discontinued once disparate parts of the Tangle merge and overall a relatively small number of sequences (optimally just one) is expected to be active at any given moment in time."),(0,i.kt)("h3",{id:"sequence-graph"},"Sequence Graph"),(0,i.kt)("p",null,"The information that markers yield about past and future cone is only valid for any given sequence individually. However, to relate markers of separate sequences, we need to track dependencies between sequences.\nTherefore, sequences build a graph between each other, where relationships between the sequences can be seen."),(0,i.kt)("p",null,"Each sequence keeps track of ",(0,i.kt)("strong",{parentName:"p"},"referenced sequences")," and ",(0,i.kt)("strong",{parentName:"p"},"referencing sequences")," at a specific marker index so that bidirectional traversing into the future and past are possible from a sequence is possible."),(0,i.kt)("p",null,"Specifically, in our example there are 3 bidirectional references between ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence 0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence 1"),".\nSequence 0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0,1"),"<->",(0,i.kt)("inlineCode",{parentName:"li"},"1,2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0,5"),"<->",(0,i.kt)("inlineCode",{parentName:"li"},"1,6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0,6"),"<->",(0,i.kt)("inlineCode",{parentName:"li"},"1,7"))),(0,i.kt)("p",null,"Sequence 1:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1,2"),"<->",(0,i.kt)("inlineCode",{parentName:"li"},"0,1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1,6"),"<->",(0,i.kt)("inlineCode",{parentName:"li"},"0,5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1,7"),"<->",(0,i.kt)("inlineCode",{parentName:"li"},"0,6"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/EhbJohc.png",alt:null})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"markers-application-approval-weight-estimation"},"Markers Application: Approval Weight Estimation"),(0,i.kt)("p",null,"To approximate the approval weight of a block, we simply retrieve the approval weight of its ",(0,i.kt)("inlineCode",{parentName:"p"},"FM")," list. Since the block is in the past cone of its ",(0,i.kt)("inlineCode",{parentName:"p"},"FM"),"s, the approval weight and the finality will be at least the same as its ",(0,i.kt)("inlineCode",{parentName:"p"},"FM"),"s. This will of course be a lower bound (which is the \u201csafe\u201d bound), but if the markers are set frequently enough, it should be a good approximation.\nIn practice, we propagate the GoF finality to blocks in a marker's past cone until we reach another marker."),(0,i.kt)("p",null,"For details of managing approval weight of each marker and approval weight calculation thereof please refer to ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/consensus_mechanism#approval-weight-aw"},"Approval Weight"),"."),(0,i.kt)("h3",{id:"conflict-mapping"},"Conflict Mapping"),(0,i.kt)("p",null,"Conflicts are introduced to the Tangle when double spends occur and are carried forward (inherited) by blocks until a conflict is resolved (merge to master). As such, each block needs to carry conflict information and if a conflict arises deep within the Tangle, each block would need to be traversed individually, which makes this operation very expensive and thus attackable."),(0,i.kt)("p",null,"Therefore, we utilize markers to store conflict information for blocks and store only a ",(0,i.kt)("strong",{parentName:"p"},"difference")," of conflicts (subtracted/added) on each block individually. In that way, propagation of conflicts can happen via structural marker information and not every block needs to be updated. When querying conflict information of a block, first all conflicts of the block's past markers are retrieved and then combined with the diff of the block itself to result in the block's overall conflict."))}m.isMDXComponent=!0}}]);