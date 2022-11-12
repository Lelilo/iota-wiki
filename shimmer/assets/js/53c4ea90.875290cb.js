"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21394],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,g=p["".concat(m,".").concat(d)]||p[d]||c[d]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},15328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={description:"You can pass configuration parameters in two ways when running GoShimmer, through a JSON configuration file or through command line arguments. Parameters are grouped into embedded objects containing parameters for a single plugin or functionality. There is no limit on how deep the configuration object may be embedded.",image:"/img/logo/goshimmer_light.png",keywords:["json","command line","embedded object","parameters"]},o="Configuration Parameters",s={unversionedId:"implementation_design/configuration_parameters",id:"implementation_design/configuration_parameters",title:"Configuration Parameters",description:"You can pass configuration parameters in two ways when running GoShimmer, through a JSON configuration file or through command line arguments. Parameters are grouped into embedded objects containing parameters for a single plugin or functionality. There is no limit on how deep the configuration object may be embedded.",source:"@site/shimmer/external/goshimmer/documentation/docs/implementation_design/configuration_parameters.md",sourceDirName:"implementation_design",slug:"/implementation_design/configuration_parameters",permalink:"/shimmer/goshimmer/implementation_design/configuration_parameters",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/shimmer/external/goshimmer/documentation/docs/implementation_design/configuration_parameters.md",tags:[],version:"current",frontMatter:{description:"You can pass configuration parameters in two ways when running GoShimmer, through a JSON configuration file or through command line arguments. Parameters are grouped into embedded objects containing parameters for a single plugin or functionality. There is no limit on how deep the configuration object may be embedded.",image:"/img/logo/goshimmer_light.png",keywords:["json","command line","embedded object","parameters"]},sidebar:"docs",previous:{title:"Plugin System",permalink:"/shimmer/goshimmer/implementation_design/plugin"},next:{title:"Object Storage",permalink:"/shimmer/goshimmer/implementation_design/object_storage"}},m={},l=[{value:"Customizing Configuration",id:"customizing-configuration",level:2},{value:"Custom Parameter Fields",id:"custom-parameter-fields",level:2},{value:"New Way",id:"new-way",level:3},{value:"Old, Deprecated Way",id:"old-deprecated-way",level:3}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-parameters"},"Configuration Parameters"),(0,r.kt)("h2",{id:"customizing-configuration"},"Customizing Configuration"),(0,r.kt)("p",null,"Users can pass configuration parameters in two ways when running GoShimmer. One way is through a JSON configuration file and another way is through command line arguments.\nSettings passed through command line arguments take precedence. The JSON configuration file is structured as a JSON object containing parameters and their values.\nParameters are grouped into embedded objects containing parameters for a single plugin or functionality. There is no limit on how deep the configuration object may be embedded.\nFor example, the config below contains example parameters for the PoW plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pow": {\n    "difficulty": 2,\n    "numThreads": 1,\n    "timeout": "10s"\n  }\n}\n')),(0,r.kt)("p",null,"The same arguments can be passed through command line arguments in the following way. Embedded objects' values are described using JSON dot-notation.\nAdditionally,the user can pass the path of the JSON config file through a command-line argument as well, as shown in an example below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"goshimmer \\\n--config=/tmp/config.json \\\n--pow.difficulty=2 \\\n--pow.numThreads=1 \\\n--pow.timeout=10s \n")),(0,r.kt)("h2",{id:"custom-parameter-fields"},"Custom Parameter Fields"),(0,r.kt)("p",null,"Currently, in the code there are two ways in which parameters are registered with GoShimmer. However, one is deprecated way, while the second should be used any longer when adding new parameters."),(0,r.kt)("h3",{id:"new-way"},"New Way"),(0,r.kt)("p",null,"Defining configuration parameters using the new way is really similar, however the parameters are not registered directly with the package reading the configuration,\nbut rather with our custom package that contains all the logic required to make it work seamlessly. "),(0,r.kt)("p",null,"In this approach, instead of defining a parameter name, a new type is defined with all necessary parameters, their default values and usage descriptions using Go's struct field tags.\nA variable is then initialized with the defined type."),(0,r.kt)("p",null,"One difference is that parameter names do not contain the namespace they belong to, the namespace is set when registering the parameters structure with the ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," package. One ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters.go")," file can contain definitions and register multiple parameter structures."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package customPlugin\n\nimport "github.com/iotaledger/hive.go/core/configuration"\n\n// Parameters contains the configuration parameters used by the custom plugin.\ntype ParametersDefinition struct {\n    // ParamName contains some value used within the plugin\n    ParamName float64 `default:"0.31" usage:"ParamName used in some calculation"`\n\n    // ParamGroup contains an example of embedded configuration definitions.\n    ParamGroup struct {\n        // DetailedParam1 is the example value\n        DetailedParam1        string `default:"defaultValue" usage:"DetailedParam1 used in the plugin"`\n        // DetailedParam2 is the example value\n        DetailedParam2        string `default:"defaultValue" usage:"DetailedParam2 used in the plugin"`\n    }\n}\n\nvar Parameters = &ParametersDefinition{}\n\nfunc init() {\n    configuration.BindParameters(Parameters, "customPlugin")\n}\n')),(0,r.kt)("p",null,"In order to access the parameter value, a user can simply access the structure's field: ",(0,r.kt)("inlineCode",{parentName:"p"},"Parameters.ParamName")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Parameters.ParamGroup.DetailedParam1"),"\nand it will be populated either with the default value or values passed through a JSON config or command-line argument. "),(0,r.kt)("p",null,"This approach makes it more simple to define new parameters as well as makes accessing configuration values more clear. "),(0,r.kt)("h3",{id:"old-deprecated-way"},"Old, Deprecated Way"),(0,r.kt)("p",null,"The old way is described shortly to give a basic understanding of how it works, but it should not be used any longer when adding new parameters."),(0,r.kt)("p",null,"In a package where the parameters will be used, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters.go")," file, that contains the definition of constants, which define parameter names in JSON dot-notation.\nThe constants will be later used in the code to access the parameter value.\nThe file should also contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," function, which registers the parameters with the ",(0,r.kt)("inlineCode",{parentName:"p"},"flag")," library responsible for parsing configuration along with its default value and short description.\nIt should include comments describing what the parameter is for. Here is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters.go")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package customPackage\n\nimport (\n    flag "github.com/spf13/pflag"\n)\nconst (\n    // ParamName contains some value used within the plugin\n    ParamName = "customPlugin.paramName"\n)\n\nfunc init() {\n    flag.Float64(paramName, 0.31, "ParamName used in some calculation")\n}\n')),(0,r.kt)("p",null,"The parameter values can be accessed in the code in the following way through the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/goshimmer/plugins/config"\n\nconfig.Node().Int(CfgGossipPort)\n')))}c.isMDXComponent=!0}}]);