(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{489:function(t,s,e){"use strict";e.r(s);var a=e(29),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"convert-utxo-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convert-utxo-address"}},[t._v("#")]),t._v(" convert_utxo_address")]),t._v(" "),e("p",[e("strong",[t._v("convert_utxo_address address to_coin")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("convert_utxo_address")]),t._v(" method takes a UTXO address as input, and returns the equivalent address for another UTXO coin (e.g. from BTC address to RVN address)")]),t._v(" "),e("h4",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Structure")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("address")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Input UTXO address")])]),t._v(" "),e("tr",[e("td",[t._v("to_coin")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Input address to convert from")])])])]),t._v(" "),e("h4",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Structure")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("result")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Converted address")])])])]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("h4",{attrs:{id:"command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n        '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${userpass}")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("convert_utxo_address"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("BTC"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("address"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1DmFp16U73RrVZtYUbo2Ectt8mAnYScpqM"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("to_coin"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RVN"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("h4",{attrs:{id:"response-success"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-success"}},[t._v("#")]),t._v(" Response (success)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RN3StWykhsERZaFjwmn9L9E5u2dPAt3YTS"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("h4",{attrs:{id:"response-error-coin-not-enabled"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-error-coin-not-enabled"}},[t._v("#")]),t._v(" Response (error - coin not enabled)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rpc:174] dispatcher_legacy:155] lp_coins:1668] Coin RVN is not activated"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("h4",{attrs:{id:"response-error-input-address-checksum-failed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-error-input-address-checksum-failed"}},[t._v("#")]),t._v(" Response (error - input address checksum failed)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rpc:174] dispatcher_legacy:155] lp_coins:1665] Invalid Checksum"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);