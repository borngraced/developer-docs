(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{460:function(t,e,s){"use strict";s.r(e);var a=s(29),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"start-simple-market-maker-bot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-simple-market-maker-bot"}},[t._v("#")]),t._v(" start_simple_market_maker_bot")]),t._v(" "),s("p",[t._v("The AtomicDEX API allows for simple bot trading via the "),s("code",[t._v("start_simple_market_maker_bot")]),t._v(" method. This method takes as input a url to a price service, and configuration parameters of the pair to trade at a defined spread percentage value. It will update orders every 30 seconds (or higher values if defined with the "),s("code",[t._v("bot_refresh_rate")]),t._v(" parameter).")]),t._v(" "),s("p",[t._v("Note: If using a custom prices API endpoint, please ensure it conforms to the same schema as the url in the example.")]),t._v(" "),s("p",[t._v("For convenience, an online "),s("a",{attrs:{href:"https://stats.kmd.io/atomicdex/makerbot_config_form/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tool for generating configs"),s("OutboundLink")],1),t._v(" is available.")]),t._v(" "),s("h3",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("price_url")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Link to a price service API")])]),t._v(" "),s("tr",[s("td",[t._v("bot_refresh_rate")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("Bot loop interval in seconds (optional, 30 sec default)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("The name assigned to this configuration (e.g. the pair being configured)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.base")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Ticker of the coin you wish to sell")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.rel")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Ticker of the coin you wish to buy")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.max")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("Set to "),s("code",[t._v("true")]),t._v(" if you would like to trade your whole balance (optional)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.max_volume.percentage")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Percentage of balance to trade (optional; can not use at same time as "),s("code",[t._v("max_volume.usd")]),t._v("; if greater than 1.0 "),s("code",[t._v("max=true")]),t._v(" is implied)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.max_volume.usd")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Maximum USD trade volume value to trade (optional; can not use at same time as "),s("code",[t._v("max_volume.percentage")]),t._v("; if greater than full balance "),s("code",[t._v("max=true")]),t._v(" is implied)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.min_volume.percentage")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Minimum percentage of balance to accept in trade (optional, can not use at same time as "),s("code",[t._v("min_volume.usd")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.min_volume.usd")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("Minimum USD trade volume of trades accepted for order (optional, can not use at same time as "),s("code",[t._v("min_volume.percentage")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.min_base_price")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("Minimum USD price of base coin to accept in trade (optional)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.min_rel_price")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("Minimum USD price of rel coin to accept in trade (optional)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.min_pair_price")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("Minimum USD price of pair (base/rel) to accept in trade (optional)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.spread**")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Target price in relation to prices API value")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.base_confs")]),t._v(" "),s("td",[t._v("integer")]),t._v(" "),s("td",[t._v("number of required blockchain confirmations for base coin atomic swap transaction; default to base coin configuration if not set")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.base_nota")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("whether dPoW notarization is required for base coin atomic swap transaction; default to base coin configuration if not set")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.rel_confs")]),t._v(" "),s("td",[t._v("integer")]),t._v(" "),s("td",[t._v("number of required blockchain confirmations for rel coin atomic swap transaction; default to rel coin configuration if not set")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.rel_nota")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("whether dPoW notarization is required for rel coin atomic swap transaction; default to base coin configuration if not set")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.enable")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("Bot will ignore this config entry if set to false")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.price_elapsed_validity")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("Will cancel current orders for this pair and not submit a new order if last price update time has been longer than this value in seconds (optional; defaults to 5 minutes)")])]),t._v(" "),s("tr",[s("td",[t._v("cfg.name.check_last_bidirectional_trade_thresh_hold")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("Will readjust the calculated cex price if a precedent trade exists for the pair (or reversed pair), applied via a "),s("a",{attrs:{href:"https://www.investopedia.com/terms/v/vwap.asp#:~:text=VWAP%20is%20calculating%20the%20sum,periods%20there%20are%20(10)",target:"_blank",rel:"noopener noreferrer"}},[t._v("VWAP logic"),s("OutboundLink")],1),t._v(") (optional; defaults to false)")])])])]),t._v(" "),s("ul",[s("li",[t._v("Percentage values are within the range of 0-1, such that 0.25 = 25%")]),t._v(" "),s("li",[t._v("For spread, a value of 1.05 equates to 5% over the value returned from the prices API url.")]),t._v(" "),s("li",[t._v("At least one of the optional fields "),s("code",[t._v("max")]),t._v(", "),s("code",[t._v("max_volume.usd")]),t._v(" or "),s("code",[t._v("max_volume.percentage")]),t._v(" must be present, or orders will not be placed.")])]),t._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),s("p",[t._v("As demonstrated below, multiple configs can be included within the same command. It is recommended to not exceed 500-1000 simultaneous orders placed to avoid decreased performance.")]),t._v(" "),s("p",[t._v("In the example below, the first config lets the bot know we want to:")]),t._v(" "),s("ul",[s("li",[t._v("Sell DASH in exchange for KMD")]),t._v(" "),s("li",[t._v("Use whole of available DASH balance, with minimum trade volume accepted as 25% of your balance")]),t._v(" "),s("li",[t._v("Sets the sell price at 2.5% over the value returned from the prices API (spread).")]),t._v(" "),s("li",[t._v("Only accepts values from the prices API that have been updated within the last 30 seconds")]),t._v(" "),s("li",[t._v("Waits for 3 confirmations and does not wait for a notarisation to progress to the next steps in the atomic swap process")]),t._v(" "),s("li",[t._v("Checks trade history within the local AtomicDEX API database to never create trades with a sell price that is less than the average trading price.")])]),t._v(" "),s("p",[t._v("The second config tells the bot to:")]),t._v(" "),s("ul",[s("li",[t._v("Sell DASH in exchange for DGB")]),t._v(" "),s("li",[t._v("Trade at most 50% of your DASH balance, with minimum trade volume accepted at least $20 USD.")]),t._v(" "),s("li",[t._v("Only place an order when the DASH price is $250 USD or more.")]),t._v(" "),s("li",[t._v("Sets the sell price at 4% over the value returned from the prices API (spread).")]),t._v(" "),s("li",[t._v("Only accepts values from the prices API that have been updated within the last 60 seconds")]),t._v(" "),s("li",[t._v("Waits for 1 confirmation and does not wait for a notarisation to progress to the next steps in the atomic swap process")]),t._v(" "),s("li",[t._v("Ignores your trade history and average trading price, creating/updating orders regardless.")])]),t._v(" "),s("p",[t._v("The third config tells the bot to:")]),t._v(" "),s("ul",[s("li",[t._v("Sell DASH in exchange for LTC")]),t._v(" "),s("li",[t._v("Trade at most $500 USD worth of DASH, with minimum trade volume accepted at least $50 USD.")]),t._v(" "),s("li",[t._v("Only place an order when the DASH price is $250 USD or more.")]),t._v(" "),s("li",[t._v("Sets the sell price at 5% over the value returned from the prices API (spread).")]),t._v(" "),s("li",[t._v("Only accepts values from the prices API that have been updated within the last 60 seconds")]),t._v(" "),s("li",[t._v("Waits for 1 confirmation and does not wait for a notarisation to progress to the next steps in the atomic swap process")]),t._v(" "),s("li",[t._v("Ignores your trade history and average trading price, creating/updating orders regardless.")])]),t._v(" "),s("h4",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:7783'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n    '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${userpass}")]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("mmrpc"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2.0"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("start_simple_market_maker_bot"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("price_url"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("https://prices.komodo.live:1313/api/v2/tickers?expire_at=600"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("bot_refresh_rate"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 60,\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cfg"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n            "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("DASH/KMD"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("DASH"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("KMD"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("max"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("min_volume"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("percentage"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("0.25"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("},\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("spread"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.025"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base_confs"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 3,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base_nota"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": false,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel_confs"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 3,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel_nota"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": false,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("enable"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("price_elapsed_validity"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 30.0,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("check_last_bidirectional_trade_thresh_hold"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true\n            },\n             "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("DASH/DGB"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("DASH"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("DGB"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("min_volume"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("usd"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("20"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("},\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("min_base_price"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("250"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("spread"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.04"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base_confs"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 1,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base_nota"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": false,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel_confs"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 1,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel_nota"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": false,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("enable"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("price_elapsed_validity"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 60.0,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("check_last_bidirectional_trade_thresh_hold"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": false\n            }\n        },\n             "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("DASH/LTC"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("DASH"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("LTC"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("max_volume"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("usd"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("500"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("},\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("min_volume"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("usd"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("50"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("},\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("min_base_price"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("250"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("spread"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1.04"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base_confs"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 1,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base_nota"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": false,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel_confs"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 1,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel_nota"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": false,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("enable"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("price_elapsed_validity"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 60.0,\n                "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("check_last_bidirectional_trade_thresh_hold"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": false\n            }\n        }\n    },\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': 0\n}"')]),t._v("\n\n")])])]),s("p",[t._v("As we have "),s("code",[t._v('\\"bot_refresh_rate\\": 60,')]),t._v(" in the above command, our bot loop will update order prices every 60 seconds, as long as the price service returns data that is no more than 30 seconds old (for DASH/KMD) or no more than 60 seconds old (for DASH/DGB).")]),t._v(" "),s("div",{staticStyle:{"margin-top":"0.5rem"}},[s("collapse-text",{attrs:{hidden:"",title:"Response"}},[s("h4",{attrs:{id:"response-success"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-success"}},[t._v("#")]),t._v(" Response (success)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Success"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"response-error-bot-already-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-error-bot-already-started"}},[t._v("#")]),t._v(" Response (error - bot already started)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The bot is already started"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"simple_market_maker"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_trace"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"simple_market_maker:770]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AlreadyStarted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);