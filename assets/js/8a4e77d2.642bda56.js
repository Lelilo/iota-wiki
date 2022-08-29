"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48070],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2010:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={description:"Getting started with the official IOTA Wallet Library Software Rust library.",image:"/img/logo/wallet_light.png",keywords:["Rust","install","cargo","system environment variables","getting started"]},l="Getting Started with Rust",p={unversionedId:"getting_started/rust",id:"getting_started/rust",title:"Getting Started with Rust",description:"Getting started with the official IOTA Wallet Library Software Rust library.",source:"@site/content/build/wallet.rs/production/documentation/docs/getting_started/rust.md",sourceDirName:"getting_started",slug:"/getting_started/rust",permalink:"/wallet.rs/getting_started/rust",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/getting_started/rust.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Wallet Library Software Rust library.",image:"/img/logo/wallet_light.png",keywords:["Rust","install","cargo","system environment variables","getting started"]},sidebar:"docs",previous:{title:"Overview",permalink:"/wallet.rs/overview"},next:{title:"Getting Started with Node.js",permalink:"/wallet.rs/getting_started/nodejs"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Usage",id:"usage",level:2},{value:"Initialisation",id:"initialisation",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-rust"},"Getting Started with Rust"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null," ",(0,i.kt)("em",{parentName:"p"},"Rust")," and ",(0,i.kt)("em",{parentName:"p"},"Cargo")," are required to use wallet.rs. You can find installation instructions in the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust documentation"),"."),(0,i.kt)("p",null,"We recommend you update ",(0,i.kt)("em",{parentName:"p"},"Rust")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},"latest stable version"),". The nightly version should be fine, but there is a chance some changes are not compatible."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.rust-embedded.org/book/intro/no-std.html"},(0,i.kt)("em",{parentName:"a"},"no_std"))," is not currently supported, but we are working on it, and we will provide it as a feature once the new implementation is ready."),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/documentation/"},(0,i.kt)("em",{parentName:"a"},"cmake"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/"},(0,i.kt)("em",{parentName:"a"},"openssl"))," are required to run Rust. To run the build process successfully using Cargo, you may need install additional build tools onto your system. "),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"You can download ",(0,i.kt)("em",{parentName:"p"},"cmake")," from the ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/download/"},"official cmake website"),".\nYou can install ",(0,i.kt)("em",{parentName:"p"},"openssl")," with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vcpkg"},"vcpkg")," or ",(0,i.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"chocolatey"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing ",(0,i.kt)("em",{parentName:"p"},"openssl")," with ",(0,i.kt)("em",{parentName:"p"},"vcpkg")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./vcpkg.exe install openssl:x64-windows\n./vcpkg.exe integrate install\n# you may want to add this to the system environment variables since you'll need it to compile the crate\nset VCPKGRS_DYNAMIC=1\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing ",(0,i.kt)("em",{parentName:"p"},"openssl")," with ",(0,i.kt)("em",{parentName:"p"},"chocolatey")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'choco install openssl\n# you may need to set the OPENSSL_ROOT_DIR environment variable\nset OPENSSL_ROOT_DIR="C:\\Program Files\\OpenSSL-Win64"\n')))),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null,"You can install ",(0,i.kt)("em",{parentName:"p"},"cmake")," and ",(0,i.kt)("em",{parentName:"p"},"openssl")," with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.brew.sh/"},(0,i.kt)("em",{parentName:"a"},"Homebrew"))," by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew install cmake\nbrew install openssl@1.1\n# you may want to add this to your .zshrc or .bashrc since you'll need it to compile the crate\nOPENSSL_ROOT_DIR=$(brew --prefix openssl@1.1)\n")),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"You can install ",(0,i.kt)("em",{parentName:"p"},"cmake")," and ",(0,i.kt)("em",{parentName:"p"},"openssl")," with your distro's package manager or download them from their websites. On Debian and Ubuntu, you will also need the ",(0,i.kt)("a",{parentName:"p",href:"https://packages.debian.org/sid/build-essential"},(0,i.kt)("em",{parentName:"a"},"build-essential"))," package."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use the library, add this to your ",(0,i.kt)("em",{parentName:"p"},"Cargo.toml")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[dependencies]\niota-wallet = { git = "https://github.com/iotaledger/wallet.rs", branch = "dev" }\n')),(0,i.kt)("h3",{id:"initialisation"},"Initialisation"),(0,i.kt)("p",null,"To use the library, you first need to create an ",(0,i.kt)("em",{parentName:"p"},"AccountManager")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use iota_wallet::{account_manager::AccountManager, client::ClientOptionsBuilder, signing::SignerType};\nuse std::path::PathBuf;\n\n#[tokio::main]\nasync fn main() -> iota_wallet::Result<()> {\n    let storage_folder: PathBuf = "./my-db".into();\n    let manager = AccountManager::builder()\n        .with_storage(&storage_folder, None)?\n        .finish()\n        .await?;\n    manager.set_stronghold_password("password").await?;\n    // If no mnemonic is provided, then the Stronghold file is the only way for a backup\n    manager.store_mnemonic(SignerType::Stronghold, None).await?;\n    let client_options = ClientOptionsBuilder::new()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        .build()?;\n    let account = manager\n        .create_account(client_options)?\n        .signer_type(SignerType::Stronghold)\n        .initialise()\n        .await?;\n    let address = account.generate_address().await?;\n    println!("Address: {}", address.address().to_bech32());\n    Ok(())\n}\n')))}m.isMDXComponent=!0}}]);