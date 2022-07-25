(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{400:function(t,s,a){"use strict";a.r(s);var e=a(29),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"custom-cc-wip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-cc-wip"}},[t._v("#")]),t._v(" Custom CC (WIP)")]),t._v(" "),a("p",[t._v("This document is a work in progress (WIP)")]),t._v(" "),a("p",[t._v("We are fortunate to have been gifted the ability to launch provable ecosystems to build upon.  This tutorial begins with a quick foundation of core concepts then moving into how to make software with layer-1, on-chain consensus. The smart-UTXO system of Komodo's Crypto-Conditions.  Consensus & Smart Contract customizations.")]),t._v(" "),a("h2",{attrs:{id:"blockchain-core-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-core-concepts"}},[t._v("#")]),t._v(" Blockchain Core Concepts")]),t._v(" "),a("ul",[a("li",[t._v("Public key cryptography is used when a private and public key pair are used for proving something.")]),t._v(" "),a("li",[t._v("Private Keys are stored in a wallet, not on the blockchain.")]),t._v(" "),a("li",[t._v("Private keys sign transactions.")]),t._v(" "),a("li",[t._v("Signatures on transaction are proven by the network using the corresponding public key to spend the claimed ownership of funds.")]),t._v(" "),a("li",[t._v("Transactions fill blocks, like an item on a shopping list fills a piece of paper.")]),t._v(" "),a("li",[t._v("Blocks are arranged in sequential order, forming a chain.")]),t._v(" "),a("li",[t._v("Each block contains agreed transactional information. The proof of the transactional detail and it's arrangement in the block is called consensus. Consensus is achieved by each participant relying on their own computation.")]),t._v(" "),a("li",[t._v("Coins & Tokens are used in transaction details to transfer value.")]),t._v(" "),a("li",[t._v("Nodes is the jargon term for computers that do the computations to maintain the network.")]),t._v(" "),a("li",[t._v("Maintaining the network is done by validating.  OP_CODES are the instructions of the network that need validating.")]),t._v(" "),a("li",[t._v("Some nodes are heavily computational (miners), some are quiet and store a valuable private key within the wallet.")]),t._v(" "),a("li",[t._v("There's additional software to make this blockchain useful (for transfering value) & easier to use. Like the internet became useful for transfering information, blockchain technology enables software to create new ways of collaborating.  Blockchain: Mobile Wallets, DEX, Explorers vs WWW: webserver, database, email & streaming protocols)")])]),t._v(" "),a("h2",{attrs:{id:"goal-of-our-antara-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#goal-of-our-antara-module"}},[t._v("#")]),t._v(" Goal of our Antara Module")]),t._v(" "),a("p",[t._v("This "),a("code",[t._v("customcc")]),t._v(" loadable library example is simply something that requires to send 1 coin.  It can't get much simpler.")]),t._v(" "),a("h2",{attrs:{id:"use-jl777-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-jl777-branch"}},[t._v("#")]),t._v(" Use jl777 branch")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/jl777/komodo.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout jl777\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" komodo/src/cc\ncode "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("Open the 3 files")]),t._v(" "),a("ul",[a("li",[t._v("customcc.h "),a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/cc/customcc.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("src"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("customcc.cpp "),a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/cc/customcc.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("src"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("makecustom "),a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/cc/makecustom",target:"_blank",rel:"noopener noreferrer"}},[t._v("src"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("These are the three files we'll work on for learning how to apply custom consensus to a blockchain.  For most 1st & 2nd generation blockchain projects, changing consensus is a bold undertaking.  Komodo has turned it into a loadable module removing the risk of severe bugs - no other project offers this to a custom blockchain.")]),t._v(" "),a("p",[t._v("These 3 files are not boilercode.  It may look like boilercode but it's the gateway to much more powerful stuff.   This is the pandoras box of dApps.  Get ready to understand how to develop on a secure multi-chain distrbuted transactional system.")]),t._v(" "),a("h2",{attrs:{id:"customcc-h-header-file-definitions-of-functions-and-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customcc-h-header-file-definitions-of-functions-and-variables"}},[t._v("#")]),t._v(" customcc.h header file - definitions of functions and variables")]),t._v(" "),a("p",[t._v("From the top, the comments provide a nice summary of what our custom cclib will do.")]),t._v(" "),a("h3",{attrs:{id:"name-of-our-custom-cclib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-of-our-custom-cclib"}},[t._v("#")]),t._v(" Name of our custom cclib")]),t._v(" "),a("p",[t._v("One is referenced externally ("),a("code",[t._v("MYCCLIBNAME")]),t._v(") at komodo start.  The other internally ("),a("code",[t._v("MYCCNAME")]),t._v(") when programming for function name prefixes.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("string MYCCLIBNAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"customcc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("MYCCNAME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom"')])]),t._v("\n")])])]),a("p",[a("code",[t._v("MYCCLIBNAME")]),t._v(' This is the name of the loadable library module being created.  Here it is "customcc".  This is what is used on the command line to load your custom consensus when '),a("RouterLink",{attrs:{to:"/basic-docs/installations/creating-asset-chains.html"}},[t._v("starting your custom blockchain")]),t._v(" on a komodo server.")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("komodod -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("CUSTOM -ac_cc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -ac_cclib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("customcc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("The "),a("code",[t._v("MYCCNAME")]),t._v(" is the prefix for RPC calls and standard consensus functions (e.g. "),a("code",[t._v("validate")]),t._v(").\nThe naming convention used for building a custom consensus library follows:")]),t._v(" "),a("ul",[a("li",[t._v("MYCCNAME_FUNCTIONNAME")])]),t._v(" "),a("p",[t._v("For example "),a("code",[t._v("custom_validate")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"declaration-of-constants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaration-of-constants"}},[t._v("#")]),t._v(" Declaration of constants")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("EVAL_CUSTOM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EVAL_FAUCET2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("CUSTOM_TXFEE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")])])]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("EVAL_FAUCET2")]),t._v(" is a constant (footnote: 1a & 1b) ("),a("code",[t._v("0x10")]),t._v(" or decimal 16).   These "),a("code",[t._v("EVAL_...")]),t._v(" constants are identifiers.  They are used to route the validation code.  The low-level bitcoin script in Komodo has a new op_code called "),a("code",[t._v("OP_CHECKCRYPTOCONDITION")]),t._v(".   When any node on the network needs to validate this "),a("code",[t._v("OP_CHECKCRYPTOCONDITION")]),t._v(" op_code, it looks up which "),a("code",[t._v("EVAL_...")]),t._v(" code it is.")]),t._v(" "),a("p",[t._v("Custom consensus starts at "),a("code",[t._v("EVAL_FAUCET2")]),t._v(" and add "),a("code",[t._v("+1")]),t._v(" to it for your customcc library.  Therefore, "),a("code",[t._v("EVAL_CUSTOM")]),t._v(" is "),a("code",[t._v("0x11")]),t._v(" = decimal 17.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CUSTOM_TXFEE")]),t._v(" is the default transaction fee for this type of transaction.  The default txfee for this "),a("code",[t._v("EVAL_...")]),t._v(" code consensus is "),a("code",[t._v("10000")]),t._v(" assetoshis (0.0001).")]),t._v(" "),a("h3",{attrs:{id:"declarations-of-the-rpc-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declarations-of-the-rpc-calls"}},[t._v("#")]),t._v(" Declarations of the RPC calls")]),t._v(" "),a("p",[t._v("This is the way 3rd party developers (e.g. front-end developers) and command-line users will interact with your custom crypto condition.  For example commands like "),a("code",[t._v("komodo-cli -ac_name=CUSTOM custom_func0")]),t._v(" and "),a("code",[t._v("komodo-cli -ac_name=CUSTOM custom_func1")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("MYCCNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"func0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<parameter help>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EVAL_CUSTOM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("MYCCNAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"func1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<no args>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EVAL_CUSTOM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("The declarations for the functions in customcc.cpp - func0 and func1")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("MYCCNAME")]),t._v(' is declared previously as "custom"')]),t._v(" "),a("li",[a("code",[t._v("func0")]),t._v(" is the name of the first RPC call")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("<parameter help>")]),t._v(" can be replaced with your functions help text.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("1,1,'0', EVAL_CUSTOM")]),t._v(" means: 1 mandatory parameter, maximum of 1 parameter, 0 is the function id for custom consensus "),a("code",[t._v("EVAL_CUSTOM")]),t._v(", in this case "),a("code",[t._v("0x11")]),t._v(" (decimal 17)")]),t._v(" "),a("li",[a("code",[t._v("func1")]),t._v(" is the name of the next RPC call")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("<no args>")]),t._v(" is the real help text this time.  This RPC call "),a("code",[t._v("func1")]),t._v(" requires no arguments, like "),a("code",[t._v("komodo-cli getinfo")])]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("0,0,'1', EVAL_CUSTOM")]),t._v(" mean: 0 mandatory parameters, maximum of 0 parameters, 1 is the function id for custom consensus "),a("code",[t._v("EVAL_CUSTOM")]),t._v(", in this case "),a("code",[t._v("0x11")]),t._v(" (decimal 17)")])]),t._v(" "),a("h3",{attrs:{id:"declaration-of-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaration-of-functions"}},[t._v("#")]),t._v(" Declaration of functions")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CCcontract_info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int32_t")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Eval "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("eval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CTransaction tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nUniValue "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_func0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint64_t")]),t._v(" txfee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CCcontract_info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cJSON "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nUniValue "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint64_t")]),t._v(" txfee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CCcontract_info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cJSON "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("These functions follow the naming convention of "),a("code",[t._v("MYCCNAME")]),t._v(" with a "),a("code",[t._v("_")]),t._v(".  Validation is always required and named "),a("code",[t._v("MYCCNAME")]),t._v(" + "),a("code",[t._v("_validate")]),t._v(".  MYCCNAME is "),a("code",[t._v("custom")]),t._v(", therefore the validate function is called "),a("code",[t._v("custom_validate")]),t._v(".   If MYCCNAME was defined as "),a("code",[t._v("mylo")]),t._v(", then my validate function would be called "),a("code",[t._v("mylo_validate")]),t._v(".  Odds are you will name your first cclib after yourself or someone else just as loveable.")]),t._v(" "),a("p",[t._v("The validation code is the most important code - it is what makes blockchains sources of truth.  Their truthiness relies on validation based on cryptographic principles.")]),t._v(" "),a("p",[t._v("Functions "),a("code",[t._v("custom_func0")]),t._v(" and "),a("code",[t._v("custom_func1")]),t._v(" follow the internal automatic module wiring of cclib.  Again "),a("code",[t._v("MYCCNAME")]),t._v(" + "),a("code",[t._v("_")]),t._v(" + "),a("code",[t._v("RPCFUNCS")]),t._v(" declared earlier.")]),t._v(" "),a("h3",{attrs:{id:"automatic-wiring-custom-rpc-function-dispatcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-wiring-custom-rpc-function-dispatcher"}},[t._v("#")]),t._v(" Automatic wiring, custom RPC function dispatcher")]),t._v(" "),a("p",[t._v("The following code is part of the automatic wiring that allows a developer to use 3 files, the "),a("code",[t._v(".h")]),t._v(" the "),a("code",[t._v(".cpp")]),t._v(" and the "),a("code",[t._v("makecustom")]),t._v(" makefile.   Automatic wiring saves a developer from potentially  introducing bugs in the consensus and by virtue of this saving, testers, users and organizations many hours of resources.")]),t._v(" "),a("p",[t._v("The custom dispatch is used for dispatching the RPC function declared earlier.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("CUSTOM_DISPATCH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" cp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("evalcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" EVAL_CUSTOM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcmp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"func0"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_func0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txfee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcmp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"func1"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txfee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid customcc method"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),t._v("\n")])])]),a("p",[t._v("The developer must then map the RPC names to the function/method.  This mapping follows the same naming convention that has already been defined.  Namely, "),a("code",[t._v("MYCCNAME")]),t._v(" + "),a("code",[t._v("_")]),t._v(" + "),a("code",[t._v("FUNCTIONNAME")]),t._v(".  If no match, then an error message returned and no harm done.")]),t._v(" "),a("p",[t._v("e.g.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcmp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"func0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \\\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_func0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txfee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \\\n")])])]),a("p",[t._v("Finally, in the course of looking where to route the RPC request")]),t._v(" "),a("h2",{attrs:{id:"customcc-cpp-file-implementation-of-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customcc-cpp-file-implementation-of-functions"}},[t._v("#")]),t._v(" customcc.cpp file - implementation of functions")]),t._v(" "),a("p",[t._v("Ref: "),a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/cc/eval.h#L63",target:"_blank",rel:"noopener noreferrer"}},[t._v("^1a"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Ref: "),a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/cc/cclib.cpp#L31",target:"_blank",rel:"noopener noreferrer"}},[t._v("^1b"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);