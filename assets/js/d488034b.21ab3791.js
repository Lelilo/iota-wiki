"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78357],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>p});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(i),p=n,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return i?r.createElement(h,a(a({ref:t},d),{},{components:i})):r.createElement(h,a({ref:t},d))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},61727:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=i(87462),n=(i(67294),i(3905));const o={image:"/img/integration-services/logo/integration_services.png",description:"In the context of e-commerce and the ENSURESEC project, you can use the SSI-Bridge to verify identities for products, customer, sellers, and clients.",keywords:["explanation","ecommerce","scanner device","customer","credentials","decentralized identity","shopping app","products authenticity credentials"]},a="Use Cases",s={unversionedId:"explanations/services/SSI-bridge/use-cases",id:"explanations/services/SSI-bridge/use-cases",title:"Use Cases",description:"In the context of e-commerce and the ENSURESEC project, you can use the SSI-Bridge to verify identities for products, customer, sellers, and clients.",source:"@site/iota/external/integration-services/production/documentation/docs/explanations/services/SSI-bridge/use-cases.md",sourceDirName:"explanations/services/SSI-bridge",slug:"/explanations/services/SSI-bridge/use-cases",permalink:"/integration-services/explanations/services/SSI-bridge/use-cases",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/iota/external/integration-services/production/documentation/docs/explanations/services/SSI-bridge/use-cases.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"In the context of e-commerce and the ENSURESEC project, you can use the SSI-Bridge to verify identities for products, customer, sellers, and clients.",keywords:["explanation","ecommerce","scanner device","customer","credentials","decentralized identity","shopping app","products authenticity credentials"]},sidebar:"docs",previous:{title:"Software Architecture and APIs Definition",permalink:"/integration-services/explanations/services/SSI-bridge/API-definition"},next:{title:"Dashboard",permalink:"/integration-services/explanations/services/dashboard/"}},c={},l=[{value:"Secure Goods Distribution",id:"secure-goods-distribution",level:2},{value:"Delivery Company Identity and Scanners Verification",id:"delivery-company-identity-and-scanners-verification",level:3},{value:"Customer Identity and Delivery Verification",id:"customer-identity-and-delivery-verification",level:3},{value:"Secure E-commerce Sales",id:"secure-e-commerce-sales",level:2},{value:"Customer Identity and Credential Age Verification",id:"customer-identity-and-credential-age-verification",level:3},{value:"Seller Identity Verification",id:"seller-identity-verification",level:3},{value:"Product Identity and Authenticity",id:"product-identity-and-authenticity",level:3},{value:"Try out our demo, implemented using the SSI bridge APIs",id:"try-out-our-demo-implemented-using-the-ssi-bridge-apis",level:3}],d={toc:l};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"In the context of the ",(0,n.kt)("a",{parentName:"p",href:"https://www.ensuresec.eu/"},"ENSURESEC")," e-commerce ecosystem, the proposed use cases will use the\nEcommerce-SSI Bridge to implement the following workflows."),(0,n.kt)("h2",{id:"secure-goods-distribution"},"Secure Goods Distribution"),(0,n.kt)("h3",{id:"delivery-company-identity-and-scanners-verification"},"Delivery Company Identity and Scanners Verification"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem"),": Protection of a Delivery. Company X wants to protect its goods from being handled by unauthorized carriers,\nand threats or frauds in the distribution chain."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An authorized employee of delivery company X uses the Ecommerce-SSI Bridge to register\nan ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/identity.rs/decentralized_identifiers/overview"},"identity (DID)")," for their organization."),(0,n.kt)("li",{parentName:"ol"},"An e-commerce operator verifies the delivery company\u2019s organization identity and uses the Bridge to issue a\ncredential for the company to deliver on their behalf. The credential contains the company organization DID and is\nsigned by the e-commerce operator\u2019s private key which had been previously associated with the operator\u2019s identity."),(0,n.kt)("li",{parentName:"ol"},"The authorized employee of the verified delivery company registers a DID for each scanner (i.e. android scanners)\nused by the company couriers."),(0,n.kt)("li",{parentName:"ol"},"The authorized employee uses the Ecommerce-SSI Bridge to issue authorization credentials to the scanner devices used\nto handle deliveries. These credentials are stored locally in the scanner devices."),(0,n.kt)("li",{parentName:"ol"},"When a courier hands over the delivery, the scanner device uses the Ecommerce-SSI Bridge to present its credential to\nthe e-commerce operator."),(0,n.kt)("li",{parentName:"ol"},"The e-commerce operator uses the Ecommerce-SSI Bridge to verify that the parcel was only handled by an authorized\ncourier, and it was not stolen or diverted in transit. This is possible because of the verification of the device\nhandling the scanning of the delivery."),(0,n.kt)("li",{parentName:"ol"},"(optional) The customer can acquire the courier\u2019s scanner device credential in the form of a QR code. The QR code\ncan be read using a mobile phone and the Ecommerce-SSI Bridge to verify that the scanner device belongs to a delivery\ncompany authorized by the e-commerce operator. This allows for verifying authentic deliveries.")),(0,n.kt)("h3",{id:"customer-identity-and-delivery-verification"},"Customer Identity and Delivery Verification"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem"),": Proof of Collection. Customers and e-commerce providers want to guarantee goods are collected by the right\ncustomer and avoid threats and frauds in the distribution chain."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A customer creates a decentralized identity (DID) using a mobile application. This application can be a standalone\ncredential wallet or an e-commerce shopping app."),(0,n.kt)("li",{parentName:"ol"},"The customer performs a purchase on an e-commerce site."),(0,n.kt)("li",{parentName:"ol"},"The e-commerce site uses the Ecommerce-SSI Bridge to issue a proof of purchase credential to the customer, which is\nsaved to the customer\u2019s phone."),(0,n.kt)("li",{parentName:"ol"},"The customer receives the product delivery and presents the credential in a QR code to the courier scanner."),(0,n.kt)("li",{parentName:"ol"},"The courier acquires the credential and uses the Ecommerce-SSI Bridge to verify its authenticity. The delivery is safely\nhanded over to the right customer."),(0,n.kt)("li",{parentName:"ol"},"(optional) The customer acquires the courier\u2019s scanner credential (see ",(0,n.kt)("a",{parentName:"li",href:"#delivery-company-identity-and-scanners-verification"}," Delivery Company Identity and Scanners Verification"),")\nand uses the Ecommerce-SSI Bridge to verify that it belongs to an authorized delivery company assuring the customer\nknows the delivery is legitimate.")),(0,n.kt)("p",null,"The two scenarios above become even more interesting in the case of automated (i.e., drones) delivery and could even\ninclude product identification."),(0,n.kt)("h2",{id:"secure-e-commerce-sales"},"Secure E-commerce Sales"),(0,n.kt)("h3",{id:"customer-identity-and-credential-age-verification"},"Customer Identity and Credential Age Verification"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem"),": Verify a customer\u2019s identity and avoid collecting and storing personal information. This would increase\ncompliance and reduce liability for e-commerce and small sellers."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An authorized bank employee registers an organization decentralized identity (DID) for its bank."),(0,n.kt)("li",{parentName:"ol"},"A customer creates a decentralized identity (DID) using a mobile application which could be a standalone credential\nwallet or an e-commerce shopping app."),(0,n.kt)("li",{parentName:"ol"},"The customer requests an Issuer (e.g. a bank) to issue a credential stating their age."),(0,n.kt)("li",{parentName:"ol"},"The Issuer uses previously verified information about the user held on local record and the Ecommerce-SSI Bridge to\ncreate and issue a verifiable credential to the customer."),(0,n.kt)("li",{parentName:"ol"},"The customer (namely Owner) downloads the credential in their app using a credential wallet."),(0,n.kt)("li",{parentName:"ol"},"The customer purchases an item that requires age verification on an e-commerce site."),(0,n.kt)("li",{parentName:"ol"},"The customer provides their credential to the e-commerce website using the Ecommerce-SSI Bridge."),(0,n.kt)("li",{parentName:"ol"},"The e-commerce site uses the Ecommerce-SSI Bridge to verify the credential and authorize the purchase.")),(0,n.kt)("p",null,"A similar scenario can be applied in the online purchase of dedicated drugs for specific health conditions. A general practitioner could\nissue a credential to the customer stating their condition."),(0,n.kt)("h3",{id:"seller-identity-verification"},"Seller Identity Verification"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem"),": Verify a seller's identity. This verification would reduce small sellers' compliance burden and reputation\nrisks."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An e-commerce site allows an employee, which the seller previously authorized, to create a decentralized identity (DID\nfor organization) using the Ecommerce-SSI Bridge."),(0,n.kt)("li",{parentName:"ol"},"The seller requests an Issuer (e.g. its bank) to issue a credential stating its Know Your Customer (KYC) status."),(0,n.kt)("li",{parentName:"ol"},"The seller presents the credentials to the e-commerce site operator using the Ecommerce-SSI Bridge."),(0,n.kt)("li",{parentName:"ol"},"The e-commerce site operator verifies the seller\u2019s credentials using the Ecommerce-SSI Bridge and allows the seller\nto trade on its marketplace")),(0,n.kt)("h3",{id:"product-identity-and-authenticity"},"Product Identity and Authenticity"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem"),": Verify product authenticity. This verification would reduce counterfeit."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An e-commerce site allows the seller to create a decentralized identity for each of its products (DID for objects)\nusing the Ecommerce-SSI Bridge."),(0,n.kt)("li",{parentName:"ol"},"The e-commerce site allows the seller to create and sign an authenticity credential associated with a given product\nidentity using the Ecommerce-SSI Bridge."),(0,n.kt)("li",{parentName:"ol"},"A user app allows a customer to obtain the product authenticity credential. The customer could achieve this by\nscanning a QR code from an e-commerce site, or it can even be directly attached to a purchased product."),(0,n.kt)("li",{parentName:"ol"},"A user app allows the customer to verify the signature of the product authenticity credential using the Ecommerce-SSI\nBridge, allowing verification of the seller's identity.")),(0,n.kt)("h3",{id:"try-out-our-demo-implemented-using-the-ssi-bridge-apis"},(0,n.kt)("a",{parentName:"h3",href:"https://eshop-poc.solutions.iota.org/"},"Try out our demo, implemented using the SSI bridge APIs")))}u.isMDXComponent=!0}}]);