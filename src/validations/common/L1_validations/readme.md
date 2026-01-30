

- **search** : All the following sub conditions must pass as per the api requirement

	- **SEARCH_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["search"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["search"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["search"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["search"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["search"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["search"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **SEARCH_PAYMENT** : All the following sub conditions must pass as per the api requirement
	
		- **PAYMENT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_REQUIRED_TYPE**
			
			- $.message.intent.payment['@ondc/org/buyer_app_finder_fee_type'] must be present in the payload
			
			#### **PAYMENT_REQUIRED_AMOUNT**
			
			- $.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
		
		- **PAYMENT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_ENUM_TYPE**
			
			- All elements of $.message.intent.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
			
			#### **PAYMENT_REGEX_AMOUNT**
			
			- All elements of $.message.intent.payment['@ondc/org/buyer_app_finder_fee_amount'] must follow every regex in ["^(\\d*.?\\d{1,2})$"]
	
	- **SEARCH_FULFILMENT** : All the following sub conditions must pass as per the api requirement
	
		- **FULFILMENT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILMENT_OPTIONAL_TYPE_ENUM**
			
			- All elements of $.message.intent.fulfillment.type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup", "Buyer-Delivery"]
			
			> **Skip if:**
			>
			>     - $.message.intent.fulfillment.type is not in the payload
			
			#### **FULFILMENT_REQUIRED_END_LOCATION_GPS**
			
			- $.message.intent.fulfillment.end.location.gps must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.intent.fulfillment.end.location.gps is not in the payload
			
			#### **FULFILMENT_REQUIRED_END_LOCATION_AREA_CODE**
			
			- $.message.intent.fulfillment.end.location.address.area_code must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.intent.fulfillment.end.location.address.area_code is not in the payload
		
		- **FULFILMENT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILMENT_ENUM_TYPE**
			
			- All elements of $.message.intent.fulfillment.type must be in ["Delivery", "Self-Pickup", "Buyer-Delivery"]
			
			> **Skip if:**
			>
			>     - $.message.intent.fulfillment.type is not in the payload
	
	- **SEARCH_ITEM** : All the following sub conditions must pass as per the api requirement
	
		#### **ITEM_REQUIRED_DESCRIPTOR_NAME**
		
		- $.message.intent.item.descriptor.name must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.intent.item.descriptor.name is not in the payload
	
	- **SEARCH_CATEGORY** : All the following sub conditions must pass as per the api requirement
	
		#### **CATEGORY_REQUIRED_ID**
		
		- $.message.intent.category.id must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.intent.category.id is not in the payload
	
	- **SEARCH_TAGS** : All the following sub conditions must pass as per the api requirement
	
		#### **SEARCH_TAG_INTENT_GROUP**
		
		- All elements of $.message.intent.tags[*].code must be in ["catalog_inc", "bap_terms", "catalog_full", "bnp_features", "bap_features", "bap_promos"]
		
		> **Skip if:**
		>
		>     - $.message.intent.tags[*].code is not in the payload
		
		- **TAGS_BNP_FEATURES** : All the following sub conditions must pass as per the api requirement
		
			#### **TAGS_BNP_FEATURES_PAYLOAD_TYPE**
			
			- At least one of $.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value must be in ["link", "inline"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bnp_features')].list[?(@.code=='payload_type')].value is not in the payload
		
		- **TAGS_BAP_TERMS** : All the following sub conditions must pass as per the api requirement
		
			#### **TAGS_BAP_TERMS_STATIC_TERMS**
			
			- $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value is not in the payload
			
			#### **TAGS_BAP_TERMS_STATIC_TERMS_NEW**
			
			- All elements of $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value must be in ["https://github.com/ONDC-Official/NP-Static-Terms/buyerNP_BNP/1.0/tc.pdf"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms_new')].value is not in the payload
			
			#### **TAGS_BAP_TERMS_EFFECTIVE_DATE**
			
			- All elements of $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_terms')].list[?(@.code=='effective_date')].value is not in the payload
		
		- **TAGS_CATALOG_FULL** : All the following sub conditions must pass as per the api requirement
		
			#### **TAGS_CATALOG_FULL_PAYLOAD_TYPE**
			
			- All elements of $.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value must be in ["link"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='catalog_full')].list[?(@.code=='payload_type')].value is not in the payload
		
		- **TAGS_CATALOG_INC** : All the following sub conditions must pass as per the api requirement
		
			#### **TAGS_CATALOG_INC_START_TIME**
			
			- All elements of $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='start_time')].value is not in the payload
			
			#### **TAGS_CATALOG_INC_END_TIME**
			
			- All elements of $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='end_time')].value is not in the payload
			
			#### **TAGS_CATALOG_INC_MODE**
			
			- All elements of $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value must be in ["start", "stop"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='catalog_inc')].list[?(@.code=='mode')].value is not in the payload
		
		- **TAGS_BAP_FEATURES** : All the following sub conditions must pass as per the api requirement
		
			#### **TAGS_BAP_FEATURES_ITEM_1**
			
			- All elements of $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value must be in ["yes", "no"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='1')].value is not in the payload
			
			#### **TAGS_BAP_FEATURES_ITEM_2**
			
			- All elements of $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value must be in ["yes", "no"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='2')].value is not in the payload
			
			#### **TAGS_BAP_FEATURES_ITEM_3**
			
			- All elements of $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value must be in ["yes", "no"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_features')].list[?(@.code=='3')].value is not in the payload
		
		- **TAGS_BAP_PROMOS** : All the following sub conditions must pass as per the api requirement
		
			#### **TAGS_BAP_PROMOS_CATEGORY**
			
			- All elements of $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value must be in ["Fruits and Vegetables", "Masala & Seasoning", "Oil & Ghee", "Eggs, Meat & Fish", "Bakery, Cakes & Dairy", "Pet Care", "Detergents and Dishwash", "Dairy and Cheese", "Snacks, Dry Fruits, Nuts", "Pasta, Soup and Noodles", "Cereals and Breakfast", "Sauces, Spreads and Dips", "Chocolates and Biscuits", "Cooking and Baking Needs", "Tinned and Processed Food", "Atta, Flours and Sooji", "Rice and Rice Products", "Dals and Pulses", "Salt, Sugar and Jaggery", "Energy and Soft Drinks", "Water", "Tea and Coffee", "Fruit Juices and Fruit Drinks", "Snacks and Namkeen", "Ready to Cook and Eat", "Pickles and Chutney", "Indian Sweets", "Frozen Vegetables", "Frozen Snacks", "Gift Voucher"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='category')].value is not in the payload
			
			#### **TAGS_BAP_PROMOS_FROM**
			
			- All elements of $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='from')].value is not in the payload
			
			#### **TAGS_BAP_PROMOS_TO**
			
			- All elements of $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
			
			> **Skip if:**
			>
			>     - $.message.intent.tags[?(@.code=='bap_promos')].list[?(@.code=='to')].value is not in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **ON_SEARCH_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_search"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_search"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["on_search"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["on_search"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["on_search"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["on_search"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **ON_SEARCH_INCREMENTAL_CATALOG** : All the following sub conditions must pass as per the api requirement
	
		- **CATALOG_BPP_PROVIDERS** : All the following sub conditions must pass as per the api requirement
		
			#### **PROVIDERS_ID**
			
			- $.message.catalog['bpp/providers'][*].id must be present in the payload
			
			#### **PROVIDERS_TIME_LABEL**
			
			- All elements of $.message.catalog['bpp/providers'][*].time.label must be in ["enable", "disable", "open", "close"]
			
			> **Skip if:**
			>
			>     - $.message.catalog['bpp/providers'][*].time.label is not in the payload
			
			#### **PROVIDERS_TIME_TIMESTAMP**
			
			- $.message.catalog['bpp/providers'][*].time.timestamp must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.catalog['bpp/providers'][*].time.timestamp is not in the payload
			
			- **PROVIDERS_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_ID**
				
				- $.message.catalog['bpp/providers'][*].fulfillments[*].id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].fulfillments[*].id is not in the payload
				
				#### **FULFILLMENTS_TYPE**
				
				- All elements of $.message.catalog['bpp/providers'][*].fulfillments[*].type must be in ["Delivery", "Buyer-Delivery"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].fulfillments[*].type is not in the payload
				
				#### **FULFILLMENTS_CONTACT_PHONE**
				
				- $.message.catalog['bpp/providers'][*].fulfillments[*].contact.phone must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].fulfillments[*].contact.phone is not in the payload
				
				#### **FULFILLMENTS_CONTACT_EMAIL**
				
				- $.message.catalog['bpp/providers'][*].fulfillments[*].contact.email must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].fulfillments[*].contact.email is not in the payload
			
			- **PROVIDERS_DESCRIPTOR** : All the following sub conditions must pass as per the api requirement
			
				#### **PROVIDERS_DESCRIPTOR_NAME**
				
				- $.message.catalog['bpp/providers'][*].descriptor.name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].descriptor.name is not in the payload
				
				#### **PROVIDERS_DESCRIPTOR_SYMBOL**
				
				- $.message.catalog['bpp/providers'][*].descriptor.symbol must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].descriptor.symbol is not in the payload
				
				#### **PROVIDERS_DESCRIPTOR_SHORT_DESC**
				
				- $.message.catalog['bpp/providers'][*].descriptor.short_desc must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].descriptor.short_desc is not in the payload
				
				#### **PROVIDERS_DESCRIPTOR_LONG_DESC**
				
				- $.message.catalog['bpp/providers'][*].descriptor.long_desc must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].descriptor.long_desc is not in the payload
				
				#### **PROVIDERS_DESCRIPTOR_IMAGES**
				
				- $.message.catalog['bpp/providers'][*].descriptor.images[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].descriptor.images[*] is not in the payload
			
			#### **PROVIDERS_FSSAI_LICENSE_NO**
			
			- $.message.catalog['bpp/providers'][*]['@ondc/org/fssai_license_no'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.catalog['bpp/providers'][*]['@ondc/org/fssai_license_no'] is not in the payload
			
			#### **PROVIDERS_TTL**
			
			- $.message.catalog['bpp/providers'][*].ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.catalog['bpp/providers'][*].ttl is not in the payload
			
			- **PROVIDERS_LOCATIONS** : All the following sub conditions must pass as per the api requirement
			
				#### **LOCATIONS_ID**
				
				- $.message.catalog['bpp/providers'][*].locations[*].id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].id is not in the payload
				
				#### **LOCATIONS_TIME_LABEL**
				
				- All elements of $.message.catalog['bpp/providers'][*].locations[*].time.label must be in ["enable", "disable", "close", "open"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].time.label is not in the payload
				
				#### **LOCATIONS_TIME_TIMESTAMP**
				
				- $.message.catalog['bpp/providers'][*].locations[*].time.timestamp must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].time.timestamp is not in the payload
				
				#### **LOCATIONS_TIME_DAYS**
				
				- $.message.catalog['bpp/providers'][*].locations[*].time.days must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].time.days is not in the payload
				
				#### **LOCATIONS_TIME_SCHEDULE_HOLIDAYS**
				
				- $.message.catalog['bpp/providers'][*].locations[*].time.schedule.holidays[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].time.schedule.holidays[*] is not in the payload
				
				#### **LOCATIONS_GPS**
				
				- $.message.catalog['bpp/providers'][*].locations[*].gps must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].gps is not in the payload
				
				#### **LOCATIONS_ADDRESS_LOCALITY**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.locality must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].address.locality is not in the payload
				
				#### **LOCATIONS_ADDRESS_STREET**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.street must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].address.street is not in the payload
				
				#### **LOCATIONS_ADDRESS_CITY**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.city must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].address.city is not in the payload
				
				#### **LOCATIONS_ADDRESS_AREA_CODE**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.area_code must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].address.area_code is not in the payload
				
				#### **LOCATIONS_ADDRESS_STATE**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.state must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].address.state is not in the payload
				
				#### **LOCATIONS_CIRCLE_GPS**
				
				- $.message.catalog['bpp/providers'][*].locations[*].circle.gps must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].circle.gps is not in the payload
				
				#### **LOCATIONS_CIRCLE_RADIUS_UNIT**
				
				- All elements of $.message.catalog['bpp/providers'][*].locations[*].circle.radius.unit must be in ["km"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].circle.radius.unit is not in the payload
				
				#### **LOCATIONS_CIRCLE_RADIUS_VALUE**
				
				- $.message.catalog['bpp/providers'][*].locations[*].circle.radius.value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].locations[*].circle.radius.value is not in the payload
			
			- **PROVIDERS_CATEGORIES** : All the following sub conditions must pass as per the api requirement
			
				#### **CATEGORIES_ID**
				
				- $.message.catalog['bpp/providers'][*].categories[*].id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].categories[*].id is not in the payload
				
				#### **CATEGORIES_DESCRIPTOR_NAME**
				
				- $.message.catalog['bpp/providers'][*].categories[*].descriptor.name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].categories[*].descriptor.name is not in the payload
				
				#### **CATEGORIES_DESCRIPTOR_SHORT_DESC**
				
				- $.message.catalog['bpp/providers'][*].categories[*].descriptor.short_desc must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].categories[*].descriptor.short_desc is not in the payload
				
				#### **CATEGORIES_DESCRIPTOR_LONG_DESC**
				
				- $.message.catalog['bpp/providers'][*].categories[*].descriptor.long_desc must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].categories[*].descriptor.long_desc is not in the payload
				
				#### **CATEGORIES_DESCRIPTOR_IMAGES**
				
				- $.message.catalog['bpp/providers'][*].categories[*].descriptor.images[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].categories[*].descriptor.images[*] is not in the payload
				
				- **BPP_PROVIDER_CATEGORIES_TAGS** : All the following sub conditions must pass as per the api requirement
				
					- **TAGS_PROVIDER_CATEGORY_TIMING** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDER_CATEGORY_TIMING_TYPE**
						
						- All elements of $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='type')].value must be in ["Self-Pickup", "Order", "Delivery", "All"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='type')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_TIMING_DAY_FROM**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='day_from')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='day_from')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_TIMING_DAY_TO**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='day_to')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='day_to')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_TIMING_TIME_FROM**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='time_from')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='time_from')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_TIMING_TIME_TO**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='time_to')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='time_to')].value is not in the payload
					
					- **TAGS_PROVIDER_CATEGORY_DISPLAY** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDER_CATEGORY_DISPLAY_RANK**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='display')].list[?(@.code=='rank')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='display')].list[?(@.code=='rank')].value is not in the payload
					
					- **TAGS_PROVIDER_CATEGORY_CONFIG** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDER_CATEGORY_CONFIG_MIN**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='min')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='min')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_CONFIG_MAX**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='max')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='max')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_CONFIG_INPUT**
						
						- All elements of $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='input')].value must be in ["select", "text"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='input')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_CONFIG_SEQ**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='seq')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='seq')].value is not in the payload
			
			- **PROVIDERS_ITEMS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_ID**
				
				- $.message.catalog['bpp/providers'][*].items[*].id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].id is not in the payload
				
				#### **ITEMS_TIME_LABEL**
				
				- All elements of $.message.catalog['bpp/providers'][*].items[*].time.label must be in ["enable", "disable"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].time.label is not in the payload
				
				#### **ITEMS_TIME_TIMESTAMP**
				
				- $.message.catalog['bpp/providers'][*].items[*].time.timestamp must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].time.timestamp is not in the payload
				
				#### **ITEMS_DESCRIPTOR_NAME**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].descriptor.name is not in the payload
				
				#### **ITEMS_DESCRIPTOR_SYMBOL**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.symbol must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].descriptor.symbol is not in the payload
				
				#### **ITEMS_DESCRIPTOR_SHORT_DESC**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.short_desc must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].descriptor.short_desc is not in the payload
				
				#### **ITEMS_DESCRIPTOR_LONG_DESC**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.long_desc must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].descriptor.long_desc is not in the payload
				
				#### **ITEMS_DESCRIPTOR_IMAGES**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.images[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].descriptor.images[*] is not in the payload
				
				#### **ITEMS_QUANTITY_UNITIZED_MEASURE_UNIT**
				
				- All elements of $.message.catalog['bpp/providers'][*].items[*].quantity.unitized.measure.unit must be in ["unit", "dozen", "gram", "kilogram", "tonne", "litre", "millilitre"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].quantity.unitized.measure.unit is not in the payload
				
				#### **ITEMS_QUANTITY_UNITIZED_MEASURE_VALUE**
				
				- $.message.catalog['bpp/providers'][*].items[*].quantity.unitized.measure.value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].quantity.unitized.measure.value is not in the payload
				
				#### **ITEMS_QUANTITY_AVAILABLE_COUNT**
				
				- All elements of $.message.catalog['bpp/providers'][*].items[*].quantity.available.count must be in ["99", "0"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].quantity.available.count is not in the payload
				
				#### **ITEMS_QUANTITY_MAXIMUM_COUNT**
				
				- $.message.catalog['bpp/providers'][*].items[*].quantity.maximum.count must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].quantity.maximum.count is not in the payload
				
				#### **ITEMS_PRICE_CURRENCY**
				
				- All elements of $.message.catalog['bpp/providers'][*].items[*].price.currency must be in ["INR"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].price.currency is not in the payload
				
				#### **ITEMS_PRICE_VALUE**
				
				- $.message.catalog['bpp/providers'][*].items[*].price.value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].price.value is not in the payload
				
				#### **ITEMS_PRICE_MAXIMUM_VALUE**
				
				- $.message.catalog['bpp/providers'][*].items[*].price.maximum_value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].price.maximum_value is not in the payload
				
				- **ITEMS_PRICE_TAGS** : All the following sub conditions must pass as per the api requirement
				
					- **TAGS_PROVIDERS_ITEMS_PRICE_RANGE** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDERS_ITEMS_PRICE_RANGE_LOWER**
						
						- $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='range')].list[?(@.code=='lower')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='range')].list[?(@.code=='lower')].value is not in the payload
						
						#### **TAGS_PROVIDERS_ITEMS_PRICE_RANGE_UPPER**
						
						- $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='range')].list[?(@.code=='upper')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='range')].list[?(@.code=='upper')].value is not in the payload
					
					- **TAGS_PROVIDERS_ITEMS_PRICE_DEFAULT_SELECTION** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDERS_ITEMS_PRICE_DEFAULT_SELECTION_VALUE**
						
						- $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='default_selection')].list[?(@.code=='value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='default_selection')].list[?(@.code=='value')].value is not in the payload
						
						#### **TAGS_PROVIDERS_ITEMS_PRICE_DEFAULT_SELECTION_MAXIMUM_VALUE**
						
						- $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='default_selection')].list[?(@.code=='maximum_value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='default_selection')].list[?(@.code=='maximum_value')].value is not in the payload
				
				#### **ITEMS_CATEGORY_ID**
				
				- $.message.catalog['bpp/providers'][*].items[*].category_id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].category_id is not in the payload
				
				#### **ITEMS_CATEGORY_IDS**
				
				- $.message.catalog['bpp/providers'][*].items[*].category_ids[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].category_ids[*] is not in the payload
				
				#### **ITEMS_FULFILLMENT_ID**
				
				- $.message.catalog['bpp/providers'][*].items[*].fulfillment_id must be present in the payload
				
				> **Skip if:**
				>
				>     - **Any of these must be true:**
				>       - all elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[*].value are in ["customization"]
				>       - $.message.catalog['bpp/providers'][*].items[*].fulfillment_id is not in the payload
				
				#### **ITEMS_LOCATION_ID**
				
				- ["$.location_id"] must be present in the payload
				
				> **Skip if:**
				>
				>     - **Any of these must be true:**
				>       - all elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[*].value are in ["customization"]
				>       - ["$.location_id"] is not in the payload
				
				#### **ITEMS_RELATED**
				
				- $.message.catalog['bpp/providers'][*].items[*].related must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].related is not in the payload
				
				#### **ITEMS_RECOMMENDED**
				
				- $.message.catalog['bpp/providers'][*].items[*].recommended must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].recommended is not in the payload
				
				#### **ITEMS_RETURNABLE**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/returnable'] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/returnable'] is not in the payload
				
				#### **ITEMS_CANCELLABLE**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/cancellable'] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/cancellable'] is not in the payload
				
				#### **ITEMS_SELLER_PICKUP_RETURN**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/seller_pickup_return'] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/seller_pickup_return'] is not in the payload
				
				#### **ITEMS_AVAILABLE_ON_COD**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/available_on_cod'] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/available_on_cod'] is not in the payload
				
				#### **ITEMS_CONTACT_DETAILS_CONSUMER_CARE**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/contact_details_consumer_care'] must be present in the payload
				
				- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
				
					#### **ITEMS_TAGS_TYPE**
					
					- All elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "dynamic_item", "customization"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value is not in the payload
					
					#### **ITEMS_TAGS_ORIGIN**
					
					- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='origin')].list[?(@.code=='country')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='origin')].list[?(@.code=='country')].value is not in the payload
					
					- **TAGS_ATTRIBUTE** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_ATTRIBUTE_GENDER**
						
						- All elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='gender')].value must be in ["male", "female", "boy", "girl", "infant", "unisex"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='gender')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_COLOUR**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='colour')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='colour')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_COLOUR_NAME**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='colour_name')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='colour_name')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_SIZE**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='size')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='size')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_BRAND**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='brand')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='brand')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_SIZE_CHART**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='size_chart')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='size_chart')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_FABRIC**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='fabric')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='fabric')].value is not in the payload
					
					#### **TAGS_CUSTOM_GROUP**
					
					- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='custom_group')].list[?(@.code=='id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='custom_group')].list[?(@.code=='id')].value is not in the payload
					
					- **TAGS_CONFIG** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_CONFIG_ID**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='id')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='id')].value is not in the payload
						
						#### **TAGS_CONFIG_MIN**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='min')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='min')].value is not in the payload
						
						#### **TAGS_CONFIG_MAX**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='max')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='max')].value is not in the payload
						
						#### **TAGS_CONFIG_SEQ**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='seq')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='seq')].value is not in the payload
					
					- **TAGS_TIMING** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_TIMING_DAY_FROM**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='timing')].list[?(@.code=='day_from')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='timing')].list[?(@.code=='day_from')].value is not in the payload
						
						#### **TAGS_TIMING_DAY_TO**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='timing')].list[?(@.code=='day_to')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='timing')].list[?(@.code=='day_to')].value is not in the payload
						
						#### **TAGS_TIMING_TIME_FROM**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='timing')].list[?(@.code=='time_from')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='timing')].list[?(@.code=='time_from')].value is not in the payload
						
						#### **TAGS_TIMING_TIME_TO**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='timing')].list[?(@.code=='time_to')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='timing')].list[?(@.code=='time_to')].value is not in the payload
						
						- **TAGS_VEG_NONVEG** : All the following sub conditions must pass as per the api requirement
						
							#### **TAGS_VEG_NONVEG_CODES**
							
							- All elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='veg_nonveg')].list[*].code must be in ["veg", "non_veg", "egg"]
							
							> **Skip if:**
							>
							>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='veg_nonveg')].list[*].code is not in the payload
							
							#### **TAGS_VEG_NONVEG_VALUES**
							
							- All elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='veg_nonveg')].list[*].value must be in ["yes", "no"]
							
							> **Skip if:**
							>
							>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='veg_nonveg')].list[*].value is not in the payload
			
			- **PROVIDERS_OFFERS** : All the following sub conditions must pass as per the api requirement
			
				#### **OFFERS_ID**
				
				- $.message.catalog['bpp/providers'][*].offers[*].id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].id is not in the payload
				
				#### **OFFERS_DESCRIPTOR_CODE**
				
				- All elements of $.message.catalog['bpp/providers'][*].offers[*].descriptor.code must be in ["discount", "buyXgetY", "freebie", "slab", "combo", "delivery"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].descriptor.code is not in the payload
				
				#### **OFFERS_DESCRIPTOR_IMAGES**
				
				- $.message.catalog['bpp/providers'][*].offers[*].descriptor.images[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].descriptor.images[*] is not in the payload
				
				#### **OFFERS_LOCATION_IDS**
				
				- $.message.catalog['bpp/providers'][*].offers[*].location_ids[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].location_ids[*] is not in the payload
				
				#### **OFFERS_ITEM_IDS**
				
				- $.message.catalog['bpp/providers'][*].offers[*].item_ids[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].item_ids[*] is not in the payload
				
				#### **OFFERS_TIME_LABEL**
				
				- $.message.catalog['bpp/providers'][*].offers[*].time.label must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].time.label is not in the payload
				
				#### **OFFERS_TIME_RANGE_START**
				
				- $.message.catalog['bpp/providers'][*].offers[*].time.range.start must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].time.range.start is not in the payload
				
				#### **OFFERS_TIME_RANGE_END**
				
				- $.message.catalog['bpp/providers'][*].offers[*].time.range.end must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].time.range.end is not in the payload
				
				- **BPP_PROVIDERS_OFFERS_TAGS** : All the following sub conditions must pass as per the api requirement
				
					- **TAGS_QUALIFIER** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_QUALIFIER_MIN_VALUE**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='min_value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='min_value')].value is not in the payload
						
						#### **TAGS_QUALIFIER_ITEM_COUNT**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='item_count')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='item_count')].value is not in the payload
						
						#### **TAGS_QUALIFIER_ITEM_COUNT_UPPER**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='item_count_upper')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='item_count_upper')].value is not in the payload
					
					- **TAGS_BENEFIT** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_BENEFIT_VALUE_TYPE**
						
						- All elements of $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value_type')].value must be in ["percent", "amount"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value_type')].value is not in the payload
						
						#### **TAGS_BENEFIT_VALUE**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value')].value is not in the payload
						
						#### **TAGS_BENEFIT_VALUE_CAP**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value_cap')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value_cap')].value is not in the payload
						
						#### **TAGS_BENEFIT_ITEM_COUNT**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_count')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_count')].value is not in the payload
						
						#### **TAGS_BENEFIT_ITEM_ID**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_id')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_id')].value is not in the payload
						
						#### **TAGS_BENEFIT_ITEM_VALUE**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_value')].value is not in the payload
					
					- **TAGS_META** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_META_ADDITIVE**
						
						- All elements of $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='meta')].list[?(@.code=='additive')].value must be in ["yes", "no"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='meta')].list[?(@.code=='additive')].value is not in the payload
						
						#### **TAGS_META_AUTO**
						
						- All elements of $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='meta')].list[?(@.code=='auto')].value must be in ["yes", "no"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='meta')].list[?(@.code=='auto')].value is not in the payload
			
			- **PROVIDERS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				- **TAGS_PROVIDERS_SERVICEABILITY** : All the following sub conditions must pass as per the api requirement
				
					#### **TAGS_PROVIDERS_SERVICEABILITY_LOCATION**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='location')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='location')].value is not in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_CATEGORY**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='category')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='category')].value is not in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_TYPE**
					
					- All elements of $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='type')].value must be in ["10", "11", "12", "13"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='type')].value is not in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_VAL**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='val')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='val')].value is not in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_DAY_FROM**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='day_from')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='day_from')].value is not in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_DAY_TO**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='day_to')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='day_to')].value is not in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_TIME_FROM**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='time_from')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='time_from')].value is not in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_TIME_TO**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='time_to')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='time_to')].value is not in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_UNIT**
					
					- All elements of $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='unit')].value must be in ["km", "geojson", "country", "pincode"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='unit')].value is not in the payload
				
				- **TAGS_PROVIDERS_ORDER_VALUE** : All the following sub conditions must pass as per the api requirement
				
					#### **TAGS_PROVIDERS_ORDER_VALUE_MIN_VALUE**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='order_value')].list[?(@.code=='min_value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='order_value')].list[?(@.code=='min_value')].value is not in the payload
				
				- **TAGS_PROVIDERS_CATALOG_LINK** : All the following sub conditions must pass as per the api requirement
				
					#### **TAGS_PROVIDERS_CATALOG_LINK_TYPE**
					
					- All elements of $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type')].value must be in ["link", "inline"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type')].value is not in the payload
					
					#### **TAGS_PROVIDERS_CATALOG_LINK_TYPE_VALUE**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type_value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type_value')].value is not in the payload
					
					#### **TAGS_PROVIDERS_CATALOG_LINK_TYPE_VALIDITY**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type_validity')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type_validity')].value is not in the payload
					
					#### **TAGS_PROVIDERS_CATALOG_LINK_LAST_UPDATE**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='last_update')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='last_update')].value is not in the payload
	
	- **ON_SEARCH_CATALOG** : All the following sub conditions must pass as per the api requirement
	
		- **CATALOG_BPP_DESCRIPTOR** : All the following sub conditions must pass as per the api requirement
		
			#### **BPP_DESCRIPTOR_NAME**
			
			- $.message.catalog['bpp/descriptor'].name must be present in the payload
			
			#### **BPP_DESCRIPTOR_SYMBOL**
			
			- $.message.catalog['bpp/descriptor'].symbol must be present in the payload
			
			#### **BPP_DESCRIPTOR_SHORT_DESC**
			
			- $.message.catalog['bpp/descriptor'].short_desc must be present in the payload
			
			#### **BPP_DESCRIPTOR_LONG_DESC**
			
			- $.message.catalog['bpp/descriptor'].long_desc must be present in the payload
			
			#### **BPP_DESCRIPTOR_IMAGES**
			
			- $.message.catalog['bpp/descriptor'].images[*] must be present in the payload
			
			- **BPP_DESCRIPTOR_TAGS** : All the following sub conditions must pass as per the api requirement
			
				- **BPP_DESCRIPTOR_TAGS_BPP_TERMS** : All the following sub conditions must pass as per the api requirement
				
					#### **TAGS_BPP_TERMS_MAX_LIABILITY**
					
					- $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability')].value is not in the payload
					
					#### **TAGS_BPP_TERMS_MAX_LIABILITY_CAP**
					
					- $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability_cap')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability_cap')].value is not in the payload
					
					#### **TAGS_BPP_TERMS_COURT_JURISDICTION**
					
					- $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='court_jurisdiction')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='court_jurisdiction')].value is not in the payload
					
					#### **TAGS_BPP_TERMS_DELAY_INTEREST**
					
					- $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='delay_interest')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='delay_interest')].value is not in the payload
					
					#### **TAGS_BPP_TERMS_NP_TYPE**
					
					- All elements of $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='np_type')].value must be in ["ISN", "MSN"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='np_type')].value is not in the payload
					
					#### **TAGS_BPP_TERMS_ACCEPT_BAP_TERMS**
					
					- All elements of $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='accept_bap_terms')].value must be in ["Y", "N"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='accept_bap_terms')].value is not in the payload
					
					#### **TAGS_BPP_TERMS_COLLECT_PAYMENT**
					
					- All elements of $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='collect_payment')].value must be in ["Y", "N"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='collect_payment')].value is not in the payload
					
					#### **TAGS_BPP_TERMS_MANDATORY_ARBITRATION**
					
					- All elements of $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='mandatory_arbitration')].value must be in ["true", "false"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='mandatory_arbitration')].value is not in the payload
		
		- **CATALOG_BPP_PROVIDERS** : All the following sub conditions must pass as per the api requirement
		
			#### **PROVIDERS_ID**
			
			- $.message.catalog['bpp/providers'][*].id must be present in the payload
			
			#### **PROVIDERS_TIME_LABEL**
			
			- All elements of $.message.catalog['bpp/providers'][*].time.label must be in ["enable", "disable"]
			
			#### **PROVIDERS_TIME_TIMESTAMP**
			
			- $.message.catalog['bpp/providers'][*].time.timestamp must be present in the payload
			
			- **PROVIDERS_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_ID**
				
				- $.message.catalog['bpp/providers'][*].fulfillments[*].id must be present in the payload
				
				#### **FULFILLMENTS_TYPE**
				
				- All elements of $.message.catalog['bpp/providers'][*].fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Buyer-Delivery"]
				
				#### **FULFILLMENTS_CONTACT_PHONE**
				
				- $.message.catalog['bpp/providers'][*].fulfillments[*].contact.phone must be present in the payload
				
				#### **FULFILLMENTS_CONTACT_EMAIL**
				
				- $.message.catalog['bpp/providers'][*].fulfillments[*].contact.email must be present in the payload
			
			- **PROVIDERS_DESCRIPTOR** : All the following sub conditions must pass as per the api requirement
			
				#### **PROVIDERS_DESCRIPTOR_NAME**
				
				- $.message.catalog['bpp/providers'][*].descriptor.name must be present in the payload
				
				#### **PROVIDERS_DESCRIPTOR_SYMBOL**
				
				- $.message.catalog['bpp/providers'][*].descriptor.symbol must be present in the payload
				
				#### **PROVIDERS_DESCRIPTOR_SHORT_DESC**
				
				- $.message.catalog['bpp/providers'][*].descriptor.short_desc must be present in the payload
				
				#### **PROVIDERS_DESCRIPTOR_LONG_DESC**
				
				- $.message.catalog['bpp/providers'][*].descriptor.long_desc must be present in the payload
				
				#### **PROVIDERS_DESCRIPTOR_IMAGES**
				
				- $.message.catalog['bpp/providers'][*].descriptor.images[*] must be present in the payload
			
			#### **PROVIDERS_FSSAI_LICENSE_NO**
			
			- $.message.catalog['bpp/providers'][*]['@ondc/org/fssai_license_no'] must be present in the payload
			
			#### **PROVIDERS_TTL**
			
			- $.message.catalog['bpp/providers'][*].ttl must be present in the payload
			
			- **PROVIDERS_LOCATIONS** : All the following sub conditions must pass as per the api requirement
			
				#### **LOCATIONS_ID**
				
				- $.message.catalog['bpp/providers'][*].locations[*].id must be present in the payload
				
				#### **LOCATIONS_TIME_LABEL**
				
				- All elements of $.message.catalog['bpp/providers'][*].locations[*].time.label must be in ["enable", "disable"]
				
				#### **LOCATIONS_TIME_TIMESTAMP**
				
				- $.message.catalog['bpp/providers'][*].locations[*].time.timestamp must be present in the payload
				
				#### **LOCATIONS_TIME_DAYS**
				
				- $.message.catalog['bpp/providers'][*].locations[*].time.days must be present in the payload
				
				#### **LOCATIONS_TIME_SCHEDULE_HOLIDAYS**
				
				- $.message.catalog['bpp/providers'][*].locations[*].time.schedule.holidays[*] must be present in the payload
				
				#### **LOCATIONS_GPS**
				
				- $.message.catalog['bpp/providers'][*].locations[*].gps must be present in the payload
				
				#### **LOCATIONS_ADDRESS_LOCALITY**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.locality must be present in the payload
				
				#### **LOCATIONS_ADDRESS_STREET**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.street must be present in the payload
				
				#### **LOCATIONS_ADDRESS_CITY**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.city must be present in the payload
				
				#### **LOCATIONS_ADDRESS_AREA_CODE**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.area_code must be present in the payload
				
				#### **LOCATIONS_ADDRESS_STATE**
				
				- $.message.catalog['bpp/providers'][*].locations[*].address.state must be present in the payload
				
				#### **LOCATIONS_CIRCLE_GPS**
				
				- $.message.catalog['bpp/providers'][*].locations[*].circle.gps must be present in the payload
				
				#### **LOCATIONS_CIRCLE_RADIUS_UNIT**
				
				- All elements of $.message.catalog['bpp/providers'][*].locations[*].circle.radius.unit must be in ["km"]
				
				#### **LOCATIONS_CIRCLE_RADIUS_VALUE**
				
				- $.message.catalog['bpp/providers'][*].locations[*].circle.radius.value must be present in the payload
			
			- **PROVIDERS_CATEGORIES** : All the following sub conditions must pass as per the api requirement
			
				#### **CATEGORIES_ID**
				
				- $.message.catalog['bpp/providers'][*].categories[*].id must be present in the payload
				
				#### **CATEGORIES_DESCRIPTOR_NAME**
				
				- $.message.catalog['bpp/providers'][*].categories[*].descriptor.name must be present in the payload
				
				#### **CATEGORIES_DESCRIPTOR_SHORT_DESC**
				
				- $.message.catalog['bpp/providers'][*].categories[*].descriptor.short_desc must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].categories[*].descriptor.short_desc is not in the payload
				
				#### **CATEGORIES_DESCRIPTOR_LONG_DESC**
				
				- $.message.catalog['bpp/providers'][*].categories[*].descriptor.long_desc must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].categories[*].descriptor.long_desc is not in the payload
				
				#### **CATEGORIES_DESCRIPTOR_IMAGES**
				
				- $.message.catalog['bpp/providers'][*].categories[*].descriptor.images[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].categories[*].descriptor.images[*] is not in the payload
				
				- **BPP_PROVIDER_CATEGORIES_TAGS** : All the following sub conditions must pass as per the api requirement
				
					- **TAGS_PROVIDER_CATEGORY_TYPE** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDER_CATEGORY_TYPE_TYPE**
						
						- All elements of $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["custom_menu", "custom_group", "variant_group"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='type')].list[?(@.code=='type')].value is not in the payload
					
					- **TAGS_PROVIDER_CATEGORY_TIMING** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDER_CATEGORY_TIMING_TYPE**
						
						- All elements of $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='type')].value must be in ["Self-Pickup", "Order", "Delivery", "All"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='type')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_TIMING_DAY_FROM**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='day_from')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='day_from')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_TIMING_DAY_TO**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='day_to')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='day_to')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_TIMING_TIME_FROM**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='time_from')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='time_from')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_TIMING_TIME_TO**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='time_to')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='timing')].list[?(@.code=='time_to')].value is not in the payload
					
					- **TAGS_PROVIDER_CATEGORY_DISPLAY** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDER_CATEGORY_DISPLAY_RANK**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='display')].list[?(@.code=='rank')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='display')].list[?(@.code=='rank')].value is not in the payload
					
					- **TAGS_PROVIDER_CATEGORY_CONFIG** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDER_CATEGORY_CONFIG_MIN**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='min')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='min')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_CONFIG_MAX**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='max')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='max')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_CONFIG_INPUT**
						
						- All elements of $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='input')].value must be in ["select", "text"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='input')].value is not in the payload
						
						#### **TAGS_PROVIDER_CATEGORY_CONFIG_SEQ**
						
						- $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='seq')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].categories[*].tags[?(@.code=='config')].list[?(@.code=='seq')].value is not in the payload
			
			- **PROVIDERS_ITEMS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_ID**
				
				- $.message.catalog['bpp/providers'][*].items[*].id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].items[*].id is not in the payload
				
				#### **ITEMS_TIME_LABEL**
				
				- All elements of $.message.catalog['bpp/providers'][*].items[*].time.label must be in ["enable", "disable"]
				
				#### **ITEMS_TIME_TIMESTAMP**
				
				- $.message.catalog['bpp/providers'][*].items[*].time.timestamp must be present in the payload
				
				#### **ITEMS_DESCRIPTOR_NAME**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.name must be present in the payload
				
				#### **ITEMS_DESCRIPTOR_SYMBOL**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.symbol must be present in the payload
				
				#### **ITEMS_DESCRIPTOR_SHORT_DESC**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.short_desc must be present in the payload
				
				#### **ITEMS_DESCRIPTOR_LONG_DESC**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.long_desc must be present in the payload
				
				#### **ITEMS_DESCRIPTOR_IMAGES**
				
				- $.message.catalog['bpp/providers'][*].items[*].descriptor.images[*] must be present in the payload
				
				#### **ITEMS_QUANTITY_UNITIZED_MEASURE_UNIT**
				
				- All elements of $.message.catalog['bpp/providers'][*].items[*].quantity.unitized.measure.unit must be in ["unit", "dozen", "gram", "kilogram", "tonne", "litre", "millilitre"]
				
				#### **ITEMS_QUANTITY_UNITIZED_MEASURE_VALUE**
				
				- $.message.catalog['bpp/providers'][*].items[*].quantity.unitized.measure.value must be present in the payload
				
				#### **ITEMS_QUANTITY_AVAILABLE_COUNT**
				
				- All elements of $.message.catalog['bpp/providers'][*].items[*].quantity.available.count must be in ["99", "0"]
				
				#### **ITEMS_QUANTITY_MAXIMUM_COUNT**
				
				- $.message.catalog['bpp/providers'][*].items[*].quantity.maximum.count must be present in the payload
				
				#### **ITEMS_PRICE_CURRENCY**
				
				- All elements of $.message.catalog['bpp/providers'][*].items[*].price.currency must be in ["INR"]
				
				#### **ITEMS_PRICE_VALUE**
				
				- $.message.catalog['bpp/providers'][*].items[*].price.value must be present in the payload
				
				#### **ITEMS_PRICE_MAXIMUM_VALUE**
				
				- $.message.catalog['bpp/providers'][*].items[*].price.maximum_value must be present in the payload
				
				- **ITEMS_PRICE_TAGS** : All the following sub conditions must pass as per the api requirement
				
					- **TAGS_PROVIDERS_ITEMS_PRICE_RANGE** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDERS_ITEMS_PRICE_RANGE_LOWER**
						
						- $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='range')].list[?(@.code=='lower')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='range')].list[?(@.code=='lower')].value is not in the payload
						
						#### **TAGS_PROVIDERS_ITEMS_PRICE_RANGE_UPPER**
						
						- $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='range')].list[?(@.code=='upper')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='range')].list[?(@.code=='upper')].value is not in the payload
					
					- **TAGS_PROVIDERS_ITEMS_PRICE_DEFAULT_SELECTION** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_PROVIDERS_ITEMS_PRICE_DEFAULT_SELECTION_VALUE**
						
						- $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='default_selection')].list[?(@.code=='value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='default_selection')].list[?(@.code=='value')].value is not in the payload
						
						#### **TAGS_PROVIDERS_ITEMS_PRICE_DEFAULT_SELECTION_MAXIMUM_VALUE**
						
						- $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='default_selection')].list[?(@.code=='maximum_value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].price.tags[?(@.code=='default_selection')].list[?(@.code=='maximum_value')].value is not in the payload
				
				#### **ITEMS_CATEGORY_ID**
				
				- $.message.catalog['bpp/providers'][*].items[*].category_id must be present in the payload
				
				#### **ITEMS_CATEGORY_IDS**
				
				- $.message.catalog['bpp/providers'][*].items[*].category_ids[*] must be present in the payload
				
				#### **ITEMS_FULFILLMENT_ID**
				
				- $.message.catalog['bpp/providers'][*].items[*].fulfillment_id must be present in the payload
				
				> **Skip if:**
				>
				>     - all elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[*].value are in ["customization"]
				
				#### **ITEMS_LOCATION_ID**
				
				- $.message.catalog['bpp/providers'][*].items[*].location_id must be present in the payload
				
				> **Skip if:**
				>
				>     - all elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[*].value are in ["customization"]
				
				#### **ITEMS_RELATED**
				
				- $.message.catalog['bpp/providers'][*].items[*].related must be present in the payload
				
				#### **ITEMS_RECOMMENDED**
				
				- $.message.catalog['bpp/providers'][*].items[*].recommended must be present in the payload
				
				#### **ITEMS_RETURNABLE**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/returnable'] must be present in the payload
				
				#### **ITEMS_CANCELLABLE**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/cancellable'] must be present in the payload
				
				#### **ITEMS_SELLER_PICKUP_RETURN**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/seller_pickup_return'] must be present in the payload
				
				#### **ITEMS_TIME_TO_SHIP**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/time_to_ship'] must be present in the payload
				
				#### **ITEMS_AVAILABLE_ON_COD**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/available_on_cod'] must be present in the payload
				
				#### **ITEMS_CONTACT_DETAILS_CONSUMER_CARE**
				
				- $.message.catalog['bpp/providers'][*].items[*]['@ondc/org/contact_details_consumer_care'] must be present in the payload
				
				- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
				
					#### **ITEMS_TAGS_TYPE**
					
					- All elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "dynamic_item", "customization"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value is not in the payload
					
					#### **ITEMS_TAGS_ORIGIN**
					
					- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='origin')].list[?(@.code=='country')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='origin')].list[?(@.code=='country')].value is not in the payload
					
					- **TAGS_ATTRIBUTE** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_ATTRIBUTE_GENDER**
						
						- All elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='gender')].value must be in ["male", "female", "boy", "girl", "infant", "unisex"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='gender')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_COLOUR**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='colour')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='colour')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_COLOUR_NAME**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='colour_name')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='colour_name')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_SIZE**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='size')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='size')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_BRAND**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='brand')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='brand')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_SIZE_CHART**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='size_chart')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='size_chart')].value is not in the payload
						
						#### **TAGS_ATTRIBUTE_FABRIC**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='fabric')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='attribute')].list[?(@.code=='fabric')].value is not in the payload
					
					#### **TAGS_CUSTOM_GROUP**
					
					- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='custom_group')].list[?(@.code=='id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='custom_group')].list[?(@.code=='id')].value is not in the payload
					
					- **TAGS_CONFIG** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_CONFIG_ID**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='id')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='id')].value is not in the payload
						
						#### **TAGS_CONFIG_MIN**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='min')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='min')].value is not in the payload
						
						#### **TAGS_CONFIG_MAX**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='max')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='max')].value is not in the payload
						
						#### **TAGS_CONFIG_SEQ**
						
						- $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='seq')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='config')].list[?(@.code=='seq')].value is not in the payload
						
						- **TAGS_VEG_NONVEG** : All the following sub conditions must pass as per the api requirement
						
							#### **TAGS_VEG_NONVEG_CODES**
							
							- All elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='veg_nonveg')].list[*].code must be in ["veg", "non_veg", "egg"]
							
							> **Skip if:**
							>
							>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='veg_nonveg')].list[*].code is not in the payload
							
							#### **TAGS_VEG_NONVEG_VALUES**
							
							- All elements of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='veg_nonveg')].list[*].value must be in ["yes", "no"]
							
							> **Skip if:**
							>
							>     - $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='veg_nonveg')].list[*].value is not in the payload
			
			- **PROVIDERS_OFFERS** : All the following sub conditions must pass as per the api requirement
			
				#### **OFFERS_ID**
				
				- $.message.catalog['bpp/providers'][*].offers[*].id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].id is not in the payload
				
				#### **OFFERS_DESCRIPTOR_CODE**
				
				- All elements of $.message.catalog['bpp/providers'][*].offers[*].descriptor.code must be in ["discount", "buyXgetY", "freebie", "slab", "combo", "delivery"]
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].descriptor.code is not in the payload
				
				#### **OFFERS_DESCRIPTOR_IMAGES**
				
				- $.message.catalog['bpp/providers'][*].offers[*].descriptor.images[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].descriptor.images[*] is not in the payload
				
				#### **OFFERS_LOCATION_IDS**
				
				- $.message.catalog['bpp/providers'][*].offers[*].location_ids[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].location_ids[*] is not in the payload
				
				#### **OFFERS_ITEM_IDS**
				
				- $.message.catalog['bpp/providers'][*].offers[*].item_ids[*] must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].item_ids[*] is not in the payload
				
				#### **OFFERS_TIME_LABEL**
				
				- $.message.catalog['bpp/providers'][*].offers[*].time.label must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].time.label is not in the payload
				
				#### **OFFERS_TIME_RANGE_START**
				
				- $.message.catalog['bpp/providers'][*].offers[*].time.range.start must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].time.range.start is not in the payload
				
				#### **OFFERS_TIME_RANGE_END**
				
				- $.message.catalog['bpp/providers'][*].offers[*].time.range.end must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.catalog['bpp/providers'][*].offers[*].time.range.end is not in the payload
				
				- **BPP_PROVIDERS_OFFERS_TAGS** : All the following sub conditions must pass as per the api requirement
				
					- **TAGS_QUALIFIER** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_QUALIFIER_MIN_VALUE**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='min_value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='min_value')].value is not in the payload
						
						#### **TAGS_QUALIFIER_ITEM_COUNT**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='item_count')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='item_count')].value is not in the payload
						
						#### **TAGS_QUALIFIER_ITEM_COUNT_UPPER**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='item_count_upper')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='qualifier')].list[?(@.code=='item_count_upper')].value is not in the payload
					
					- **TAGS_BENEFIT** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_BENEFIT_VALUE_TYPE**
						
						- All elements of $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value_type')].value must be in ["percent", "amount"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value_type')].value is not in the payload
						
						#### **TAGS_BENEFIT_VALUE**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value')].value is not in the payload
						
						#### **TAGS_BENEFIT_VALUE_CAP**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value_cap')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='value_cap')].value is not in the payload
						
						#### **TAGS_BENEFIT_ITEM_COUNT**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_count')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_count')].value is not in the payload
						
						#### **TAGS_BENEFIT_ITEM_ID**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_id')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_id')].value is not in the payload
						
						#### **TAGS_BENEFIT_ITEM_VALUE**
						
						- $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_value')].value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='benefit')].list[?(@.code=='item_value')].value is not in the payload
					
					- **TAGS_META** : All the following sub conditions must pass as per the api requirement
					
						#### **TAGS_META_ADDITIVE**
						
						- All elements of $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='meta')].list[?(@.code=='additive')].value must be in ["yes", "no"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='meta')].list[?(@.code=='additive')].value is not in the payload
						
						#### **TAGS_META_AUTO**
						
						- All elements of $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='meta')].list[?(@.code=='auto')].value must be in ["yes", "no"]
						
						> **Skip if:**
						>
						>     - $.message.catalog['bpp/providers'][*].offers[*].tags[?(@.code=='meta')].list[?(@.code=='auto')].value is not in the payload
			
			- **PROVIDERS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				- **TAGS_PROVIDERS_SERVICEABILITY** : All the following sub conditions must pass as per the api requirement
				
					#### **TAGS_PROVIDERS_SERVICEABILITY_LOCATION**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='location')].value must be present in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_CATEGORY**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='category')].value must be present in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_TYPE**
					
					- All elements of $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='type')].value must be in ["10", "11", "12", "13"]
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_VAL**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='val')].value must be present in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_DAY_FROM**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='day_from')].value must be present in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_DAY_TO**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='day_to')].value must be present in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_TIME_FROM**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='time_from')].value must be present in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_TIME_TO**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='time_to')].value must be present in the payload
					
					#### **TAGS_PROVIDERS_SERVICEABILITY_UNIT**
					
					- All elements of $.message.catalog['bpp/providers'][*].tags[?(@.code=='serviceability')].list[?(@.code=='unit')].value must be in ["km", "geojson", "country", "pincode"]
				
				- **TAGS_PROVIDERS_ORDER_VALUE** : All the following sub conditions must pass as per the api requirement
				
					#### **TAGS_PROVIDERS_ORDER_VALUE_MIN_VALUE**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='order_value')].list[?(@.code=='min_value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='order_value')].list[?(@.code=='min_value')].value is not in the payload
				
				- **TAGS_PROVIDERS_CATALOG_LINK** : All the following sub conditions must pass as per the api requirement
				
					#### **TAGS_PROVIDERS_CATALOG_LINK_TYPE**
					
					- All elements of $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type')].value must be in ["link", "inline"]
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type')].value is not in the payload
					
					#### **TAGS_PROVIDERS_CATALOG_LINK_TYPE_VALUE**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type_value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type_value')].value is not in the payload
					
					#### **TAGS_PROVIDERS_CATALOG_LINK_TYPE_VALIDITY**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type_validity')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='type_validity')].value is not in the payload
					
					#### **TAGS_PROVIDERS_CATALOG_LINK_LAST_UPDATE**
					
					- $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='last_update')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.catalog['bpp/providers'][*].tags[?(@.code=='catalog_link')].list[?(@.code=='last_update')].value is not in the payload
		
		- **CATALOG_BPP_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **BPP_FULFILLMENTS_ID**
			
			- $.message.catalog['bpp/fulfillments'][*].id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.catalog['bpp/fulfillments'][*].id is not in the payload
			
			#### **BPP_FULFILLMENTS_TYPE**
			
			- All elements of $.message.catalog['bpp/fulfillments'][*].type must be in ["Delivery", "Self-Pickup", "Buyer-Delivery"]
			
			> **Skip if:**
			>
			>     - $.message.catalog['bpp/fulfillments'][*].type is not in the payload

- **select** : All the following sub conditions must pass as per the api requirement

	- **SELECT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["select"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["select"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["select"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["select"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["select"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["select"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **SELECT_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
		
			#### **ORDER_PROVIDER_ID**
			
			- $.message.order.provider.id must be present in the payload
			
			#### **ORDER_PROVIDER_LOCATIONS_ID**
			
			- $.message.order.provider.locations[*].id must be present in the payload
		
		- **ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **ITEMS_DESCRIPTOR_TAGS**
			
			- $.message.order.items[*].descriptor.tags[?(@.code=='customization')].list[?(@.code=='input_text')].value must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.items[*].descriptor.tags[?(@.code=='customization')].list[?(@.code=='input_text')].value is not in the payload
			
			#### **ITEMS_PARENT_ITEM_ID**
			
			- $.message.order.items[*].parent_item_id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.items[*].parent_item_id is not in the payload
			
			#### **ITEMS_LOCATION_ID**
			
			- $.message.order.items[*].location_id must be present in the payload
			
			#### **ITEMS_QUANTITY_COUNT**
			
			- $.message.order.items[*].quantity.count must be present in the payload
			
			- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_TAGS_TYPE**
				
				- All elements of $.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
				
				#### **ITEMS_TAGS_PARENT_ID**
				
				- $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
		
		- **ORDER_OFFERS** : All the following sub conditions must pass as per the api requirement
		
			#### **OFFERS_ID**
			
			- $.message.order.offers[*].id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].id is not in the payload
			
			#### **OFFERS_TAGS_SELECTION_APPLY**
			
			- All elements of $.message.order.offers[*].tags[?(@.code=='selection')].list[?(@.code=='apply')].value must be in ["yes", "no"]
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].tags[?(@.code=='selection')].list[?(@.code=='apply')].value is not in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENT_END_LOCATION_GPS**
			
			- $.message.order.fulfillments[*].end.location.gps must be present in the payload
			
			#### **FULFILLMENT_END_LOCATION_ADDRESS_AREA_CODE**
			
			- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **ON_SELECT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_select"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_select"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["on_select"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["on_select"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["on_select"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["on_select"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **ON_SELECT_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_PROVIDER**
		
		- $.message.order.provider.id must be present in the payload
		
		- **ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **ITEMS_FULFILLMENT_ID**
			
			- $.message.order.items[*].fulfillment_id must be present in the payload
			
			#### **ITEMS_PARENT_ITEM_ID**
			
			- $.message.order.items[*].parent_item_id must be present in the payload
			
			#### **ITEMS_QUANTITY_COUNT**
			
			- $.message.order.items[*].quantity.count must be present in the payload
			
			- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_TAGS_TYPE**
				
				- All elements of $.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
				
				#### **ITEMS_TAGS_PARENT_ID**
				
				- $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_PROVIDER_NAME**
			
			- $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload
			
			#### **FULFILLMENTS_TRACKING**
			
			- $.message.order.fulfillments[*].tracking must be present in the payload
			
			#### **FULFILLMENTS_CATEGORY**
			
			- $.message.order.fulfillments[*]['@ondc/org/category'] must be present in the payload
			
			#### **FULFILLMENTS_TAT**
			
			- $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload
			
			#### **FULFILLMENTS_STATE_CODE**
			
			- All elements of $.message.order.fulfillments[*].state.descriptor.code must be in ["Serviceable", "Non-serviceable"]
		
		- **ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_PRICE_CURRENCY**
			
			- $.message.order.quote.price.currency must be present in the payload
			
			#### **QUOTE_PRICE_VALUE**
			
			- $.message.order.quote.price.value must be present in the payload
			
			- **QUOTE_BREAKUP** : All the following sub conditions must pass as per the api requirement
			
				- **BREAKUP_ITEM** : All the following sub conditions must pass as per the api requirement
				
					#### **BREAKUP_ITEM_ID**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
					
					#### **BREAKUP_ITEM_QUANTITY_COUNT**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count is not in the payload
					
					#### **BREAKUP_ITEM_TITLE**
					
					- $.message.order.quote.breakup[*].title must be present in the payload
					
					#### **BREAKUP_ITEM_TITLE_TYPE**
					
					- All elements of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "tax", "misc", "discount", "offer"]
					
					#### **BREAKUP_ITEM_PRICE_CURRENCY**
					
					- $.message.order.quote.breakup[*].price.currency must be present in the payload
					
					#### **BREAKUP_ITEM_PRICE_VALUE**
					
					- $.message.order.quote.breakup[*].price.value must be present in the payload
					
					#### **BREAKUP_ITEM_TTL**
					
					- $.message.order.quote.breakup[*].ttl must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*].ttl is not in the payload
					
					- **BREAKUP_ITEM_ITEM** : All the following sub conditions must pass as per the api requirement
					
						#### **BREAKUP_ITEM_ITEM_PARENT_ITEM_ID**
						
						- $.message.order.quote.breakup[*].item.parent_item_id must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.parent_item_id is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT**
						
						- All elements of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["99", "0"]
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.available.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT**
						
						- $.message.order.quote.breakup[*].item.quantity.maximum.count must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.maximum.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_CURRENCY**
						
						- $.message.order.quote.breakup[*].item.price.currency must be present in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_VALUE**
						
						- $.message.order.quote.breakup[*].item.price.value must be present in the payload
						
						- **BREAKUP_ITEM_ITEM_TAGS** : All the following sub conditions must pass as per the api requirement
						
							#### **BREAKUP_ITEM_ITEM_TAGS_TYPE**
							
							- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
							
							#### **BREAKUP_ITEM_ITEM_TAGS_PARENT_ID**
							
							- $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
							
							> **Skip if:**
							>
							>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
							
							- **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE** : All the following sub conditions must pass as per the api requirement
							
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value must be in ["fulfillment", "order", "item"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value is not in the payload
								
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value must be in ["delivery", "packaging", "misc"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value is not in the payload
		
		- **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER** : All the following sub conditions must pass as per the api requirement
		
			#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ID**
			
			- $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='id')].value is not in the payload
			
			#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_TYPE**
			
			- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value must be in ["delivery", "discount"]
			
			> **Skip if:**
			>
			>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='type')].value is not in the payload
			
			#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_AUTO**
			
			- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value must be in ["yes", "no"]
			
			> **Skip if:**
			>
			>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='auto')].value is not in the payload
			
			#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ADDITIVE**
			
			- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value must be in ["yes", "no"]
			
			> **Skip if:**
			>
			>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='additive')].value is not in the payload
			
			#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_ID**
			
			- $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_id')].value is not in the payload
			
			#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_VALUE**
			
			- $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_value')].value is not in the payload
			
			#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_OFFER_ITEM_COUNT**
			
			- $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='offer')].list[?(@.code=='item_count')].value is not in the payload
		
		- **ERROR** : All the following sub conditions must pass as per the api requirement
		
			#### **ERROR_TYPE**
			
			- $.error.type must be present in the payload
			
			> **Skip if:**
			>
			>     - $.error.type is not in the payload
			
			#### **ERROR_CODE**
			
			- $.error.code must be present in the payload
			
			> **Skip if:**
			>
			>     - $.error.code is not in the payload
			
			#### **ERROR_MESSAGE**
			
			- $.error.message must be present in the payload
			
			> **Skip if:**
			>
			>     - $.error.message is not in the payload

- **init** : All the following sub conditions must pass as per the api requirement

	- **INIT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["init"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["init"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["init"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["init"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["init"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["init"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **INIT_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
		
			#### **ORDER_PROVIDER_ID**
			
			- $.message.order.provider.id must be present in the payload
			
			#### **ORDER_PROVIDER_LOCATIONS_ID**
			
			- $.message.order.provider.locations[*].id must be present in the payload
		
		- **ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **ITEMS_PARENT_ITEM_ID**
			
			- $.message.order.items[*].parent_item_id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.items[*].parent_item_id is not in the payload
			
			#### **ITEMS_FULFILLMENT_ID**
			
			- $.message.order.items[*].fulfillment_id must be present in the payload
			
			#### **ITEMS_QUANTITY_COUNT**
			
			- $.message.order.items[*].quantity.count must be present in the payload
			
			- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_TAGS_TYPE**
				
				- All elements of $.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
				
				#### **ITEMS_TAGS_PARENT_ID**
				
				- $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
		
		- **ORDER_OFFERS** : All the following sub conditions must pass as per the api requirement
		
			#### **OFFERS_ID**
			
			- $.message.order.offers[*].id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].id is not in the payload
			
			- **OFFERS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				#### **OFFERS_TAGS_SELECTION**
				
				- All elements of $.message.order.offers[*].tags[?(@.code=='selection')].list[?(@.code=='apply')].value must be in ["yes", "no"]
				
				> **Skip if:**
				>
				>     - $.message.order.offers[*].tags[?(@.code=='selection')].list[?(@.code=='apply')].value is not in the payload
		
		- **ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
		
			#### **BILLING_NAME**
			
			- $.message.order.billing.name must be present in the payload
			
			- **BILLING_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **BILLING_ADDRESS_NAME**
				
				- $.message.order.billing.address.name must be present in the payload
				
				#### **BILLING_ADDRESS_BUILDING**
				
				- $.message.order.billing.address.building must be present in the payload
				
				#### **BILLING_ADDRESS_LOCALITY**
				
				- $.message.order.billing.address.locality must be present in the payload
				
				#### **BILLING_ADDRESS_CITY**
				
				- $.message.order.billing.address.city must be present in the payload
				
				#### **BILLING_ADDRESS_STATE**
				
				- $.message.order.billing.address.state must be present in the payload
				
				#### **BILLING_ADDRESS_COUNTRY**
				
				- $.message.order.billing.address.country must be present in the payload
				
				#### **BILLING_ADDRESS_AREA_CODE**
				
				- $.message.order.billing.address.area_code must be present in the payload
			
			#### **BILLING_PHONE**
			
			- $.message.order.billing.phone must be present in the payload
			
			#### **BILLING_EMAIL**
			
			- $.message.order.billing.email must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.billing.email is not in the payload
			
			#### **BILLING_CREATED_AT**
			
			- $.message.order.billing.created_at must be present in the payload
			
			#### **BILLING_UPDATED_AT**
			
			- $.message.order.billing.updated_at must be present in the payload
		
		#### **BILLING_TAX_NUMBER**
		
		- $.message.order.billing.tax_number must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.order.billing.tax_number is not in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_TYPE**
			
			- $.message.order.fulfillments[*].type must be present in the payload
			
			#### **FULFILLMENTS_END_LOCATION_GPS**
			
			- $.message.order.fulfillments[*].end.location.gps must be present in the payload
			
			- **FULFILLMENTS_END_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_NAME**
				
				- $.message.order.fulfillments[*].end.location.address.name must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING**
				
				- $.message.order.fulfillments[*].end.location.address.building must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY**
				
				- $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_CITY**
				
				- $.message.order.fulfillments[*].end.location.address.city must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_STATE**
				
				- $.message.order.fulfillments[*].end.location.address.state must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY**
				
				- $.message.order.fulfillments[*].end.location.address.country must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE**
				
				- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
			
			#### **FULFILLMENTS_END_CONTACT_PHONE**
			
			- $.message.order.fulfillments[*].end.contact.phone must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*].end.contact.phone is not in the payload
		
		- **ORDER_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **ORDER_TAGS_BAP_TERMS** : All the following sub conditions must pass as per the api requirement
			
				#### **ORDER_TAGS_BAP_TERMS_FINANCE_COST_TYPE**
				
				- All elements of $.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='finance_const_type')].value must be in ["percent", "amount"]
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='finance_const_type')].value is not in the payload
				
				#### **ORDER_TAGS_BAP_TERMS_FINANCE_COST_VALUE**
				
				- $.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='finance_const_value')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='finance_const_value')].value is not in the payload

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **ON_INIT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_init"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_init"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["on_init"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["on_init"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["on_init"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["on_init"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **ON_INIT_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
		
			#### **ORDER_PROVIDER_ID**
			
			- $.message.order.provider.id must be present in the payload
			
			#### **ORDER_PROVIDER_LOCATIONS_ID**
			
			- $.message.order.provider.locations[*].id must be present in the payload
		
		- **ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **ITEMS_PARENT_ITEM_ID**
			
			- $.message.order.items[*].parent_item_id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.items[*].parent_item_id is not in the payload
			
			#### **ITEMS_FULFILLMENT_ID**
			
			- $.message.order.items[*].fulfillment_id must be present in the payload
			
			#### **ITEMS_QUANTITY_COUNT**
			
			- $.message.order.items[*].quantity.count must be present in the payload
			
			- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_TAGS_TYPE**
				
				- All elements of $.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
				
				#### **ITEMS_TAGS_PARENT_ID**
				
				- $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
		
		- **ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
		
			#### **BILLING_NAME**
			
			- $.message.order.billing.name must be present in the payload
			
			- **BILLING_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **BILLING_ADDRESS_NAME**
				
				- $.message.order.billing.address.name must be present in the payload
				
				#### **BILLING_ADDRESS_BUILDING**
				
				- $.message.order.billing.address.building must be present in the payload
				
				#### **BILLING_ADDRESS_LOCALITY**
				
				- $.message.order.billing.address.locality must be present in the payload
				
				#### **BILLING_ADDRESS_CITY**
				
				- $.message.order.billing.address.city must be present in the payload
				
				#### **BILLING_ADDRESS_STATE**
				
				- $.message.order.billing.address.state must be present in the payload
				
				#### **BILLING_ADDRESS_COUNTRY**
				
				- $.message.order.billing.address.country must be present in the payload
				
				#### **BILLING_ADDRESS_AREA_CODE**
				
				- $.message.order.billing.address.area_code must be present in the payload
			
			#### **BILLING_PHONE**
			
			- $.message.order.billing.phone must be present in the payload
			
			#### **BILLING_EMAIL**
			
			- $.message.order.billing.email must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.billing.email is not in the payload
			
			#### **BILLING_CREATED_AT**
			
			- $.message.order.billing.created_at must be present in the payload
			
			#### **BILLING_UPDATED_AT**
			
			- $.message.order.billing.updated_at must be present in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_TYPE**
			
			- $.message.order.fulfillments[*].type must be present in the payload
			
			#### **FULFILLMENTS_END_LOCATION_GPS**
			
			- $.message.order.fulfillments[*].end.location.gps must be present in the payload
			
			- **FULFILLMENTS_END_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_NAME**
				
				- $.message.order.fulfillments[*].end.location.address.name must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING**
				
				- $.message.order.fulfillments[*].end.location.address.building must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY**
				
				- $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_CITY**
				
				- $.message.order.fulfillments[*].end.location.address.city must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_STATE**
				
				- $.message.order.fulfillments[*].end.location.address.state must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY**
				
				- $.message.order.fulfillments[*].end.location.address.country must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE**
				
				- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
			
			#### **FULFILLMENTS_END_CONTACT_PHONE**
			
			- $.message.order.fulfillments[*].end.contact.phone must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*].end.contact.phone is not in the payload
		
		- **ORDER_FULFILLMENTS_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_TRACKING**
			
			- $.message.order.fulfillments[*].tracking must be present in the payload
		
		- **ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_PRICE_CURRENCY**
			
			- $.message.order.quote.price.currency must be present in the payload
			
			#### **QUOTE_PRICE_VALUE**
			
			- $.message.order.quote.price.value must be present in the payload
			
			- **QUOTE_BREAKUP** : All the following sub conditions must pass as per the api requirement
			
				- **BREAKUP_ITEM** : All the following sub conditions must pass as per the api requirement
				
					#### **BREAKUP_ITEM_ID**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
					
					#### **BREAKUP_ITEM_QUANTITY_COUNT**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count is not in the payload
					
					#### **BREAKUP_ITEM_TITLE**
					
					- $.message.order.quote.breakup[*].title must be present in the payload
					
					#### **BREAKUP_ITEM_TITLE_TYPE**
					
					- All elements of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "tax", "misc", "discount", "offer"]
					
					#### **BREAKUP_ITEM_PRICE_CURRENCY**
					
					- $.message.order.quote.breakup[*].price.currency must be present in the payload
					
					#### **BREAKUP_ITEM_PRICE_VALUE**
					
					- $.message.order.quote.breakup[*].price.value must be present in the payload
					
					#### **BREAKUP_ITEM_TTL**
					
					- $.message.order.quote.breakup[*].ttl must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*].ttl is not in the payload
					
					- **BREAKUP_ITEM_ITEM** : All the following sub conditions must pass as per the api requirement
					
						#### **BREAKUP_ITEM_ITEM_PARENT_ITEM_ID**
						
						- $.message.order.quote.breakup[*].item.parent_item_id must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.parent_item_id is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT**
						
						- All elements of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["99", "0"]
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.available.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT**
						
						- $.message.order.quote.breakup[*].item.quantity.maximum.count must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.maximum.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_CURRENCY**
						
						- $.message.order.quote.breakup[*].item.price.currency must be present in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_VALUE**
						
						- $.message.order.quote.breakup[*].item.price.value must be present in the payload
						
						- **BREAKUP_ITEM_ITEM_TAGS** : All the following sub conditions must pass as per the api requirement
						
							#### **BREAKUP_ITEM_ITEM_TAGS_TYPE**
							
							- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
							
							#### **BREAKUP_ITEM_ITEM_TAGS_PARENT_ID**
							
							- $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
							
							> **Skip if:**
							>
							>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
							
							- **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE** : All the following sub conditions must pass as per the api requirement
							
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value must be in ["fulfillment", "order", "item"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value is not in the payload
								
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value must be in ["delivery", "packaging", "misc"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value is not in the payload
		
		- **ORDER_QUOTE_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_TTL**
			
			- $.message.order.quote.ttl must be present in the payload
		
		- **ORDER_PAYMENT** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE**
			
			- All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
			
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT**
			
			**All of the following must be true:**
			  - $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
			  - All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must follow every regex in ["^(\\d*.?\\d{1,2})$"]
			
			- **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE**
				
				- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs"]
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].upi_address is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].bank_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].branch_name is not in the payload
		
		- **ORDER_PAYMENT_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **TAGS_BPP_TERMS** : All the following sub conditions must pass as per the api requirement
			
				#### **TAGS_BPP_TERMS_MAX_LIABILITY_CAP**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability_cap')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability_cap')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_MAX_LIABILITY**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_MANDATORY_ARBITRATION**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='mandatory_arbitration')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='mandatory_arbitration')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_COURT_JURISDICTION**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='court_jurisdiction')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='court_jurisdiction')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_DELAY_INTEREST**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='delay_interest')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='delay_interest')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_NP_TYPE**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='np_type')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='np_type')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_TAX_NUMBER**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='tax_number')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='tax_number')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_PROVIDER_TAX_NUMBER**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='provider_tax_number')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='provider_tax_number')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_ACCEPT_BAP_TERMS**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='accept_bap_terms')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='accept_bap_terms')].value is not in the payload
			
			- **TAGS_BPP_COLLECT** : All the following sub conditions must pass as per the api requirement
			
				#### **TAGS_BPP_COLLECT_SUCCESS**
				
				- All elements of $.message.order.payment.tags[?(@.code=='bpp_collect')].list[?(@.code=='success')].value must be in ["Y", "N"]
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_collect')].list[?(@.code=='success')].value is not in the payload
				
				#### **TAGS_BPP_COLLECT_ERROR**
				
				- All elements of $.message.order.payment.tags[?(@.code=='bpp_collect')].list[?(@.code=='error')].value must be in ["Y", "N"]
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_collect')].list[?(@.code=='error')].value is not in the payload
		
		- **ORDER_OFFERS** : All the following sub conditions must pass as per the api requirement
		
			#### **OFFERS_ID**
			
			- $.message.order.offers[*].id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].id is not in the payload
			
			#### **OFFERS_DESCRIPTOR_CODE**
			
			- All elements of $.message.order.offers[*].descriptor.code must be in ["discount", "buyXgetY", "freebie", "slab", "combo"]
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].descriptor.code is not in the payload
			
			#### **OFFERS_DESCRIPTOR_IMAGES**
			
			- $.message.order.offers[*].descriptor.images[*] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].descriptor.images[*] is not in the payload
			
			#### **OFFERS_LOCATION_IDS**
			
			- $.message.order.offers[*].location_ids[*] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].location_ids[*] is not in the payload
			
			#### **OFFERS_ITEM_IDS**
			
			- $.message.order.offers[*].item_ids[*] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].item_ids[*] is not in the payload
			
			#### **OFFERS_TIME_LABEL**
			
			- $.message.order.offers[*].time.label must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].time.label is not in the payload
			
			#### **OFFERS_TIME_RANGE_START**
			
			- $.message.order.offers[*].time.range.start must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].time.range.start is not in the payload
			
			#### **OFFERS_TIME_RANGE_END**
			
			- $.message.order.offers[*].time.range.end must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.offers[*].time.range.end is not in the payload
		
		- **ORDER_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **TAGS_BAP_TERMS** : All the following sub conditions must pass as per the api requirement
			
				#### **ORDER_TAGS_BAP_TERMS_FINANCE_COST_TYPE**
				
				- All elements of $.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='finance_const_type')].value must be in ["percent", "amount"]
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='finance_const_type')].value is not in the payload
				
				#### **ORDER_TAGS_BAP_TERMS_FINANCE_COST_VALUE**
				
				- $.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='finance_const_value')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='finance_const_value')].value is not in the payload

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **CONFIRM_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["confirm"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["confirm"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["confirm"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["confirm"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["confirm"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["confirm"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_ID**
		
		**All of the following must be true:**
		  - $.message.order.id must be present in the payload
		  - All elements of $.message.order.id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]
		
		#### **ORDER_STATE**
		
		- All elements of $.message.order.state must be in ["Created", "Accepted", "Cancelled"]
		
		- **ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
		
			#### **ORDER_PROVIDER_ID**
			
			- $.message.order.provider.id must be present in the payload
			
			#### **ORDER_PROVIDER_LOCATIONS_ID**
			
			- $.message.order.provider.locations[*].id must be present in the payload
		
		- **ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **ITEMS_PARENT_ITEM_ID**
			
			- $.message.order.items[*].parent_item_id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.items[*].parent_item_id is not in the payload
			
			#### **ITEMS_FULFILLMENT_ID**
			
			- $.message.order.items[*].fulfillment_id must be present in the payload
			
			#### **ITEMS_QUANTITY_COUNT**
			
			- $.message.order.items[*].quantity.count must be present in the payload
			
			- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_TAGS_TYPE**
				
				- All elements of $.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
				
				#### **ITEMS_TAGS_PARENT_ID**
				
				- $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
		
		- **ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
		
			#### **BILLING_NAME**
			
			- $.message.order.billing.name must be present in the payload
			
			- **BILLING_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **BILLING_ADDRESS_NAME**
				
				- $.message.order.billing.address.name must be present in the payload
				
				#### **BILLING_ADDRESS_BUILDING**
				
				- $.message.order.billing.address.building must be present in the payload
				
				#### **BILLING_ADDRESS_LOCALITY**
				
				- $.message.order.billing.address.locality must be present in the payload
				
				#### **BILLING_ADDRESS_CITY**
				
				- $.message.order.billing.address.city must be present in the payload
				
				#### **BILLING_ADDRESS_STATE**
				
				- $.message.order.billing.address.state must be present in the payload
				
				#### **BILLING_ADDRESS_COUNTRY**
				
				- $.message.order.billing.address.country must be present in the payload
				
				#### **BILLING_ADDRESS_AREA_CODE**
				
				- $.message.order.billing.address.area_code must be present in the payload
			
			#### **BILLING_PHONE**
			
			- $.message.order.billing.phone must be present in the payload
			
			#### **BILLING_EMAIL**
			
			- $.message.order.billing.email must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.billing.email is not in the payload
			
			#### **BILLING_CREATED_AT**
			
			- $.message.order.billing.created_at must be present in the payload
			
			#### **BILLING_UPDATED_AT**
			
			- $.message.order.billing.updated_at must be present in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_TYPE**
			
			- $.message.order.fulfillments[*].type must be present in the payload
			
			#### **FULFILLMENTS_END_LOCATION_GPS**
			
			- $.message.order.fulfillments[*].end.location.gps must be present in the payload
			
			- **FULFILLMENTS_END_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_NAME**
				
				- $.message.order.fulfillments[*].end.location.address.name must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING**
				
				- $.message.order.fulfillments[*].end.location.address.building must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY**
				
				- $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_CITY**
				
				- $.message.order.fulfillments[*].end.location.address.city must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_STATE**
				
				- $.message.order.fulfillments[*].end.location.address.state must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY**
				
				- $.message.order.fulfillments[*].end.location.address.country must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE**
				
				- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
			
			#### **FULFILLMENTS_END_CONTACT_PHONE**
			
			- $.message.order.fulfillments[*].end.contact.phone must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*].end.contact.phone is not in the payload
		
		- **ORDER_FULFILLMENTS_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_TRACKING**
			
			- $.message.order.fulfillments[*].tracking must be present in the payload
			
			#### **FULFILLMENTS_END_PERSON_NAME**
			
			- $.message.order.fulfillments[*].end.person.name must be present in the payload
			
			#### **FULFILLMENTS_END_CONTACT_EMAIL**
			
			- $.message.order.fulfillments[*].end.contact.email must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*].end.contact.email is not in the payload
		
		- **ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_PRICE_CURRENCY**
			
			- $.message.order.quote.price.currency must be present in the payload
			
			#### **QUOTE_PRICE_VALUE**
			
			- $.message.order.quote.price.value must be present in the payload
			
			- **QUOTE_BREAKUP** : All the following sub conditions must pass as per the api requirement
			
				- **BREAKUP_ITEM** : All the following sub conditions must pass as per the api requirement
				
					#### **BREAKUP_ITEM_ID**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
					
					#### **BREAKUP_ITEM_QUANTITY_COUNT**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count is not in the payload
					
					#### **BREAKUP_ITEM_TITLE**
					
					- $.message.order.quote.breakup[*].title must be present in the payload
					
					#### **BREAKUP_ITEM_TITLE_TYPE**
					
					- All elements of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "tax", "misc", "discount", "offer"]
					
					#### **BREAKUP_ITEM_PRICE_CURRENCY**
					
					- $.message.order.quote.breakup[*].price.currency must be present in the payload
					
					#### **BREAKUP_ITEM_PRICE_VALUE**
					
					- $.message.order.quote.breakup[*].price.value must be present in the payload
					
					#### **BREAKUP_ITEM_TTL**
					
					- $.message.order.quote.breakup[*].ttl must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*].ttl is not in the payload
					
					- **BREAKUP_ITEM_ITEM** : All the following sub conditions must pass as per the api requirement
					
						#### **BREAKUP_ITEM_ITEM_PARENT_ITEM_ID**
						
						- $.message.order.quote.breakup[*].item.parent_item_id must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.parent_item_id is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT**
						
						- All elements of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["99", "0"]
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.available.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT**
						
						- $.message.order.quote.breakup[*].item.quantity.maximum.count must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.maximum.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_CURRENCY**
						
						- $.message.order.quote.breakup[*].item.price.currency must be present in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_VALUE**
						
						- $.message.order.quote.breakup[*].item.price.value must be present in the payload
						
						- **BREAKUP_ITEM_ITEM_TAGS** : All the following sub conditions must pass as per the api requirement
						
							#### **BREAKUP_ITEM_ITEM_TAGS_TYPE**
							
							- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
							
							#### **BREAKUP_ITEM_ITEM_TAGS_PARENT_ID**
							
							- $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
							
							> **Skip if:**
							>
							>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
							
							- **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE** : All the following sub conditions must pass as per the api requirement
							
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value must be in ["fulfillment", "order", "item"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value is not in the payload
								
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value must be in ["delivery", "packaging", "misc"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value is not in the payload
		
		- **ORDER_QUOTE_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_TTL**
			
			- $.message.order.quote.ttl must be present in the payload
		
		- **ORDER_PAYMENT** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE**
			
			- All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
			
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT**
			
			**All of the following must be true:**
			  - $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
			  - All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must follow every regex in ["^(\\d*.?\\d{1,2})$"]
			
			- **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE**
				
				- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs"]
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].upi_address is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].bank_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].branch_name is not in the payload
		
		- **ORDER_PAYMENT_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_URI**
			
			- $.message.order.payment.uri must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment.uri is not in the payload
			
			#### **PAYMENT_TL_METHOD**
			
			- $.message.order.payment.tl_method must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment.tl_method is not in the payload
			
			- **PAYMENT_PARAMS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_CURRENCY**
				
				- $.message.order.payment.params.currency must be present in the payload
				
				#### **PAYMENT_TRANSACTION_ID**
				
				- $.message.order.payment.params.transaction_id must be present in the payload
				
				#### **PAYMENT_AMOUNT**
				
				- $.message.order.payment.params.amount must be present in the payload
			
			#### **PAYMENT_STATUS**
			
			- $.message.order.payment.status must be present in the payload
			
			#### **PAYMENT_TYPE**
			
			- $.message.order.payment.type must be present in the payload
			
			#### **PAYMENT_COLLECTED_BY**
			
			- $.message.order.payment.collected_by must be present in the payload
			
			#### **PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW**
			
			- $.message.order.payment['@ondc/org/settlement_window'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/settlement_window'] is not in the payload
			
			#### **PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT**
			
			- $.message.order.payment['@ondc/org/withholding_amount'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/withholding_amount'] is not in the payload
			
			#### **PAYMENT_ONDC_ORG_SETTLEMENT_BASIS**
			
			- $.message.order.payment['@ondc/org/settlement_basis'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/settlement_basis'] is not in the payload
		
		- **ORDER_PAYMENT_ADDITIONAL_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **TAGS_BPP_TERMS** : All the following sub conditions must pass as per the api requirement
			
				#### **TAGS_BPP_TERMS_MAX_LIABILITY_CAP**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability_cap')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability_cap')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_MAX_LIABILITY**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_MANDATORY_ARBITRATION**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='mandatory_arbitration')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='mandatory_arbitration')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_COURT_JURISDICTION**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='court_jurisdiction')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='court_jurisdiction')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_DELAY_INTEREST**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='delay_interest')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='delay_interest')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_NP_TYPE**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='np_type')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='np_type')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_TAX_NUMBER**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='tax_number')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='tax_number')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_PROVIDER_TAX_NUMBER**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='provider_tax_number')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='provider_tax_number')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_ACCEPT_BAP_TERMS**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='accept_bap_terms')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='accept_bap_terms')].value is not in the payload
			
			- **TAGS_BAP_TERMS** : All the following sub conditions must pass as per the api requirement
			
				#### **TAGS_BAP_TERMS_STATIC_TERMS**
				
				- $.message.order.payment.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value is not in the payload
				
				#### **TAGS_BAP_TERMS_TAX_NUMBER**
				
				- $.message.order.payment.tags[?(@.code=='bap_terms')].list[?(@.code=='tax_number')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bap_terms')].list[?(@.code=='tax_number')].value is not in the payload
		
		#### **ORDER_CREATED_AT**
		
		**All of the following must be true:**
		  - $.message.order.created_at must be present in the payload
		  - All elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
		
		#### **ORDER_UPDATED_AT**
		
		**All of the following must be true:**
		  - $.message.order.updated_at must be present in the payload
		  - All elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
		
		- **ORDER_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **TAGS_BNP_RECEIVABLES_CLAIM** : All the following sub conditions must pass as per the api requirement
			
				#### **TAGS_BNP_RECEIVABLES_CLAIM_TYPE**
				
				- $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value is not in the payload
				
				#### **TAGS_BNP_RECEIVABLES_CLAIM_CURRENCY**
				
				- $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value is not in the payload
				
				#### **TAGS_BNP_RECEIVABLES_CLAIM_VALUE**
				
				- $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value is not in the payload

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **ON_CONFIRM_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_confirm"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_confirm"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["on_confirm"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["on_confirm"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["on_confirm"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["on_confirm"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_ID**
		
		**All of the following must be true:**
		  - $.message.order.id must be present in the payload
		  - All elements of $.message.order.id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]
		
		#### **ORDER_STATE**
		
		- All elements of $.message.order.state must be in ["Created", "Accepted", "Cancelled"]
		
		- **ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
		
			#### **ORDER_PROVIDER_ID**
			
			- $.message.order.provider.id must be present in the payload
			
			#### **ORDER_PROVIDER_LOCATIONS_ID**
			
			- $.message.order.provider.locations[*].id must be present in the payload
		
		- **ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **ITEMS_PARENT_ITEM_ID**
			
			- $.message.order.items[*].parent_item_id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.items[*].parent_item_id is not in the payload
			
			#### **ITEMS_FULFILLMENT_ID**
			
			- $.message.order.items[*].fulfillment_id must be present in the payload
			
			#### **ITEMS_QUANTITY_COUNT**
			
			- $.message.order.items[*].quantity.count must be present in the payload
			
			- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_TAGS_TYPE**
				
				- All elements of $.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
				
				#### **ITEMS_TAGS_PARENT_ID**
				
				- $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
		
		- **ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
		
			#### **BILLING_NAME**
			
			- $.message.order.billing.name must be present in the payload
			
			- **BILLING_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **BILLING_ADDRESS_NAME**
				
				- $.message.order.billing.address.name must be present in the payload
				
				#### **BILLING_ADDRESS_BUILDING**
				
				- $.message.order.billing.address.building must be present in the payload
				
				#### **BILLING_ADDRESS_LOCALITY**
				
				- $.message.order.billing.address.locality must be present in the payload
				
				#### **BILLING_ADDRESS_CITY**
				
				- $.message.order.billing.address.city must be present in the payload
				
				#### **BILLING_ADDRESS_STATE**
				
				- $.message.order.billing.address.state must be present in the payload
				
				#### **BILLING_ADDRESS_COUNTRY**
				
				- $.message.order.billing.address.country must be present in the payload
				
				#### **BILLING_ADDRESS_AREA_CODE**
				
				- $.message.order.billing.address.area_code must be present in the payload
			
			#### **BILLING_PHONE**
			
			- $.message.order.billing.phone must be present in the payload
			
			#### **BILLING_EMAIL**
			
			- $.message.order.billing.email must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.billing.email is not in the payload
			
			#### **BILLING_CREATED_AT**
			
			- $.message.order.billing.created_at must be present in the payload
			
			#### **BILLING_UPDATED_AT**
			
			- $.message.order.billing.updated_at must be present in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_TYPE**
			
			- $.message.order.fulfillments[*].type must be present in the payload
			
			#### **FULFILLMENTS_END_LOCATION_GPS**
			
			- $.message.order.fulfillments[*].end.location.gps must be present in the payload
			
			- **FULFILLMENTS_END_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_NAME**
				
				- $.message.order.fulfillments[*].end.location.address.name must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING**
				
				- $.message.order.fulfillments[*].end.location.address.building must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY**
				
				- $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_CITY**
				
				- $.message.order.fulfillments[*].end.location.address.city must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_STATE**
				
				- $.message.order.fulfillments[*].end.location.address.state must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY**
				
				- $.message.order.fulfillments[*].end.location.address.country must be present in the payload
				
				#### **FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE**
				
				- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
			
			#### **FULFILLMENTS_END_CONTACT_PHONE**
			
			- $.message.order.fulfillments[*].end.contact.phone must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*].end.contact.phone is not in the payload
		
		- **ORDER_FULFILLMENTS_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_TRACKING**
			
			- $.message.order.fulfillments[*].tracking must be present in the payload
			
			#### **FULFILLMENTS_END_PERSON_NAME**
			
			- $.message.order.fulfillments[*].end.person.name must be present in the payload
			
			#### **FULFILLMENTS_END_CONTACT_EMAIL**
			
			- $.message.order.fulfillments[*].end.contact.email must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*].end.contact.email is not in the payload
		
		- **ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_PRICE_CURRENCY**
			
			- $.message.order.quote.price.currency must be present in the payload
			
			#### **QUOTE_PRICE_VALUE**
			
			- $.message.order.quote.price.value must be present in the payload
			
			- **QUOTE_BREAKUP** : All the following sub conditions must pass as per the api requirement
			
				- **BREAKUP_ITEM** : All the following sub conditions must pass as per the api requirement
				
					#### **BREAKUP_ITEM_ID**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
					
					#### **BREAKUP_ITEM_QUANTITY_COUNT**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count is not in the payload
					
					#### **BREAKUP_ITEM_TITLE**
					
					- $.message.order.quote.breakup[*].title must be present in the payload
					
					#### **BREAKUP_ITEM_TITLE_TYPE**
					
					- All elements of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "tax", "misc", "discount", "offer"]
					
					#### **BREAKUP_ITEM_PRICE_CURRENCY**
					
					- $.message.order.quote.breakup[*].price.currency must be present in the payload
					
					#### **BREAKUP_ITEM_PRICE_VALUE**
					
					- $.message.order.quote.breakup[*].price.value must be present in the payload
					
					#### **BREAKUP_ITEM_TTL**
					
					- $.message.order.quote.breakup[*].ttl must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*].ttl is not in the payload
					
					- **BREAKUP_ITEM_ITEM** : All the following sub conditions must pass as per the api requirement
					
						#### **BREAKUP_ITEM_ITEM_PARENT_ITEM_ID**
						
						- $.message.order.quote.breakup[*].item.parent_item_id must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.parent_item_id is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT**
						
						- All elements of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["99", "0"]
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.available.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT**
						
						- $.message.order.quote.breakup[*].item.quantity.maximum.count must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.maximum.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_CURRENCY**
						
						- $.message.order.quote.breakup[*].item.price.currency must be present in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_VALUE**
						
						- $.message.order.quote.breakup[*].item.price.value must be present in the payload
						
						- **BREAKUP_ITEM_ITEM_TAGS** : All the following sub conditions must pass as per the api requirement
						
							#### **BREAKUP_ITEM_ITEM_TAGS_TYPE**
							
							- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
							
							#### **BREAKUP_ITEM_ITEM_TAGS_PARENT_ID**
							
							- $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
							
							> **Skip if:**
							>
							>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
							
							- **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE** : All the following sub conditions must pass as per the api requirement
							
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value must be in ["fulfillment", "order", "item"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value is not in the payload
								
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value must be in ["delivery", "packaging", "misc"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value is not in the payload
		
		- **ORDER_QUOTE_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_TTL**
			
			- $.message.order.quote.ttl must be present in the payload
		
		- **ORDER_PAYMENT** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE**
			
			- All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
			
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT**
			
			**All of the following must be true:**
			  - $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
			  - All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must follow every regex in ["^(\\d*.?\\d{1,2})$"]
			
			- **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE**
				
				- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs"]
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].upi_address is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].bank_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].branch_name is not in the payload
		
		- **ORDER_PAYMENT_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_URI**
			
			- $.message.order.payment.uri must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment.uri is not in the payload
			
			#### **PAYMENT_TL_METHOD**
			
			- $.message.order.payment.tl_method must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment.tl_method is not in the payload
			
			- **PAYMENT_PARAMS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_CURRENCY**
				
				- $.message.order.payment.params.currency must be present in the payload
				
				#### **PAYMENT_TRANSACTION_ID**
				
				- $.message.order.payment.params.transaction_id must be present in the payload
				
				#### **PAYMENT_AMOUNT**
				
				- $.message.order.payment.params.amount must be present in the payload
			
			#### **PAYMENT_STATUS**
			
			- $.message.order.payment.status must be present in the payload
			
			#### **PAYMENT_TYPE**
			
			- $.message.order.payment.type must be present in the payload
			
			#### **PAYMENT_COLLECTED_BY**
			
			- $.message.order.payment.collected_by must be present in the payload
			
			#### **PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW**
			
			- $.message.order.payment['@ondc/org/settlement_window'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/settlement_window'] is not in the payload
			
			#### **PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT**
			
			- $.message.order.payment['@ondc/org/withholding_amount'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/withholding_amount'] is not in the payload
			
			#### **PAYMENT_ONDC_ORG_SETTLEMENT_BASIS**
			
			- $.message.order.payment['@ondc/org/settlement_basis'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/settlement_basis'] is not in the payload
		
		- **ORDER_PAYMENT_ADDITIONAL_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **TAGS_BPP_TERMS** : All the following sub conditions must pass as per the api requirement
			
				#### **TAGS_BPP_TERMS_MAX_LIABILITY_CAP**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability_cap')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability_cap')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_MAX_LIABILITY**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='max_liability')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_MANDATORY_ARBITRATION**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='mandatory_arbitration')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='mandatory_arbitration')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_COURT_JURISDICTION**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='court_jurisdiction')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='court_jurisdiction')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_DELAY_INTEREST**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='delay_interest')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='delay_interest')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_NP_TYPE**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='np_type')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='np_type')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_TAX_NUMBER**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='tax_number')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='tax_number')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_PROVIDER_TAX_NUMBER**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='provider_tax_number')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='provider_tax_number')].value is not in the payload
				
				#### **TAGS_BPP_TERMS_ACCEPT_BAP_TERMS**
				
				- $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='accept_bap_terms')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bpp_terms')].list[?(@.code=='accept_bap_terms')].value is not in the payload
			
			- **TAGS_BAP_TERMS** : All the following sub conditions must pass as per the api requirement
			
				#### **TAGS_BAP_TERMS_STATIC_TERMS**
				
				- $.message.order.payment.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bap_terms')].list[?(@.code=='static_terms')].value is not in the payload
				
				#### **TAGS_BAP_TERMS_TAX_NUMBER**
				
				- $.message.order.payment.tags[?(@.code=='bap_terms')].list[?(@.code=='tax_number')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.tags[?(@.code=='bap_terms')].list[?(@.code=='tax_number')].value is not in the payload
		
		#### **ORDER_CREATED_AT**
		
		**All of the following must be true:**
		  - $.message.order.created_at must be present in the payload
		  - All elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
		
		#### **ORDER_UPDATED_AT**
		
		**All of the following must be true:**
		  - $.message.order.updated_at must be present in the payload
		  - All elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
		
		- **ORDER_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **TAGS_BNP_RECEIVABLES_CLAIM** : All the following sub conditions must pass as per the api requirement
			
				#### **TAGS_BNP_RECEIVABLES_CLAIM_TYPE**
				
				- $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value is not in the payload
				
				#### **TAGS_BNP_RECEIVABLES_CLAIM_CURRENCY**
				
				- $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value is not in the payload
				
				#### **TAGS_BNP_RECEIVABLES_CLAIM_VALUE**
				
				- $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value is not in the payload
	
	- **ON_CONFIRM_ORDER_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
	
		- **ORDER_FULFILLMENTS_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ONDC_ORG_PROVIDER_NAME**
			
			- $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload
			
			#### **FULFILLMENTS_STATE_DESCRIPTOR_CODE**
			
			- $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
			
			- **FULFILLMENTS_END_TIME** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_END_TIME_RANGE_START**
				
				- $.message.order.fulfillments[*].end.time.range.start must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].end.time.range.start is not in the payload
				
				#### **FULFILLMENTS_END_TIME_RANGE_END**
				
				- $.message.order.fulfillments[*].end.time.range.end must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].end.time.range.end is not in the payload
			
			- **FULFILLMENTS_START** : All the following sub conditions must pass as per the api requirement
			
				- **FULFILLMENTS_START_LOCATION** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_LOCATION_ID**
					
					- $.message.order.fulfillments[*].start.location.id must be present in the payload
					
					#### **FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME**
					
					- $.message.order.fulfillments[*].start.location.descriptor.name must be present in the payload
					
					#### **FULFILLMENTS_START_LOCATION_GPS**
					
					- $.message.order.fulfillments[*].start.location.gps must be present in the payload
					
					- **FULFILLMENTS_START_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
					
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY**
						
						- $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_CITY**
						
						- $.message.order.fulfillments[*].start.location.address.city must be present in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE**
						
						- $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_STATE**
						
						- $.message.order.fulfillments[*].start.location.address.state must be present in the payload
				
				- **FULFILLMENTS_START_TIME** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_TIME_RANGE_START**
					
					- $.message.order.fulfillments[*].start.time.range.start must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.time.range.start is not in the payload
					
					#### **FULFILLMENTS_START_TIME_RANGE_END**
					
					- $.message.order.fulfillments[*].start.time.range.end must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.time.range.end is not in the payload
				
				- **FULFILLMENTS_START_INSTRUCTIONS** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_INSTRUCTIONS_CODE**
					
					- $.message.order.fulfillments[*].start.instructions.code must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.instructions.code is not in the payload
					
					#### **FULFILLMENTS_START_INSTRUCTIONS_NAME**
					
					- $.message.order.fulfillments[*].start.instructions.name must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.instructions.name is not in the payload
					
					#### **FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC**
					
					- $.message.order.fulfillments[*].start.instructions.short_desc must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.instructions.short_desc is not in the payload
				
				- **FULFILLMENTS_START_CONTACT** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_CONTACT_PHONE**
					
					- $.message.order.fulfillments[*].start.contact.phone must be present in the payload
					
					#### **FULFILLMENTS_START_CONTACT_EMAIL**
					
					- $.message.order.fulfillments[*].start.contact.email must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.contact.email is not in the payload

- **status** : All the following sub conditions must pass as per the api requirement

	- **STATUS_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["status"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["status"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["status"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["status"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["status"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["status"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **STATUS_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_ID**
		
		**All of the following must be true:**
		  - $.message.order_id must be present in the payload
		  - All elements of $.message.order_id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **ON_STATUS_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_status"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_status"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["on_status"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["on_status"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["on_status"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["on_status"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **ON_STATUS_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_ID**
		
		**All of the following must be true:**
		  - $.message.order.id must be present in the payload
		  - All elements of $.message.order.id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]
		
		#### **ORDER_STATE**
		
		- All elements of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Cancelled"]
		
		- **ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
		
			#### **ORDER_PROVIDER_ID**
			
			- $.message.order.provider.id must be present in the payload
			
			#### **ORDER_PROVIDER_LOCATIONS_ID**
			
			- $.message.order.provider.locations[*].id must be present in the payload
		
		- **ORDER_CANCELLATION** : All the following sub conditions must pass as per the api requirement
		
			#### **CANCELLATION_CANCELLED_BY**
			
			- $.message.order.cancellation.cancelled_by must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.cancellation.cancelled_by is not in the payload
			
			- **CANCELLATION_REASON** : All the following sub conditions must pass as per the api requirement
			
				#### **CANCELLATION_REASON_ID**
				
				- $.message.order.cancellation.reason.id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.cancellation.reason.id is not in the payload
				
				#### **CANCELLATION_REASON_STATE**
				
				- $.message.order.cancellation.reason.state must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.cancellation.reason.state is not in the payload
		
		- **ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **ITEMS_PARENT_ITEM_ID**
			
			- $.message.order.items[*].parent_item_id must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.items[*].parent_item_id is not in the payload
			
			#### **ITEMS_FULFILLMENT_ID**
			
			- $.message.order.items[*].fulfillment_id must be present in the payload
			
			#### **ITEMS_QUANTITY_COUNT**
			
			- $.message.order.items[*].quantity.count must be present in the payload
			
			- **ITEMS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				#### **ITEMS_TAGS_TYPE**
				
				- All elements of $.message.order.items[*].tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
				
				#### **ITEMS_TAGS_PARENT_ID**
				
				- $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.items[*].tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
		
		- **ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
		
			#### **BILLING_NAME**
			
			- $.message.order.billing.name must be present in the payload
			
			- **BILLING_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **BILLING_ADDRESS_NAME**
				
				- $.message.order.billing.address.name must be present in the payload
				
				#### **BILLING_ADDRESS_BUILDING**
				
				- $.message.order.billing.address.building must be present in the payload
				
				#### **BILLING_ADDRESS_LOCALITY**
				
				- $.message.order.billing.address.locality must be present in the payload
				
				#### **BILLING_ADDRESS_CITY**
				
				- $.message.order.billing.address.city must be present in the payload
				
				#### **BILLING_ADDRESS_STATE**
				
				- $.message.order.billing.address.state must be present in the payload
				
				#### **BILLING_ADDRESS_COUNTRY**
				
				- $.message.order.billing.address.country must be present in the payload
				
				#### **BILLING_ADDRESS_AREA_CODE**
				
				- $.message.order.billing.address.area_code must be present in the payload
			
			#### **BILLING_PHONE**
			
			- $.message.order.billing.phone must be present in the payload
			
			#### **BILLING_EMAIL**
			
			- $.message.order.billing.email must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.billing.email is not in the payload
			
			#### **BILLING_CREATED_AT**
			
			- $.message.order.billing.created_at must be present in the payload
			
			#### **BILLING_UPDATED_AT**
			
			- $.message.order.billing.updated_at must be present in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_STATE_DESCRIPTOR_CODE**
			
			**All of the following must be true:**
			  - $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
			  - All elements of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Packed", "Agent-assigned", "At-pickup", "At-delivery", "Order-picked-up", "Out-for-delivery", "Order-delivered", "Cancelled", "RTO-Initiated", "RTO-Disposed", "RTO-Delivered"]
			
			#### **FULFILLMENTS_TYPE**
			
			- $.message.order.fulfillments[*].type must be present in the payload
			
			#### **FULFILLMENTS_ONDC_ORG_PROVIDER_NAME**
			
			- $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*]['@ondc/org/provider_name'] is not in the payload
			
			#### **FULFILLMENTS_TRACKING**
			
			- $.message.order.fulfillments[*].tracking must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*].tracking is not in the payload
			
			#### **FULFILLMENTS_ONDC_ORG_TAT**
			
			- $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*]['@ondc/org/TAT'] is not in the payload
			
			- **FULFILLMENTS_START** : All the following sub conditions must pass as per the api requirement
			
				- **FULFILLMENTS_START_LOCATION** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME**
					
					- $.message.order.fulfillments[*].start.location.descriptor.name must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.location.descriptor.name is not in the payload
					
					#### **FULFILLMENTS_START_LOCATION_GPS**
					
					- $.message.order.fulfillments[*].start.location.gps must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.location.gps is not in the payload
					
					- **FULFILLMENTS_START_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
					
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY**
						
						- $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].start.location.address.locality is not in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_CITY**
						
						- $.message.order.fulfillments[*].start.location.address.city must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].start.location.address.city is not in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE**
						
						- $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].start.location.address.area_code is not in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_STATE**
						
						- $.message.order.fulfillments[*].start.location.address.state must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].start.location.address.state is not in the payload
				
				- **FULFILLMENTS_START_TIME** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_TIME_RANGE_START**
					
					- $.message.order.fulfillments[*].start.time.range.start must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.time.range.start is not in the payload
					
					#### **FULFILLMENTS_START_TIME_RANGE_END**
					
					- $.message.order.fulfillments[*].start.time.range.end must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.time.range.end is not in the payload
					
					#### **FULFILLMENTS_START_TIME_TIMESTAMP**
					
					- $.message.order.fulfillments[*].start.time.timestamp must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.time.timestamp is not in the payload
				
				- **FULFILLMENTS_START_INSTRUCTIONS** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_INSTRUCTIONS_CODE**
					
					**All of the following must be true:**
					  - $.message.order.fulfillments[*].start.instructions.code must be present in the payload
					  - All elements of $.message.order.fulfillments[*].start.instructions.code must be in ["1", "2", "3", "4"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.instructions.code is not in the payload
					
					#### **FULFILLMENTS_START_INSTRUCTIONS_NAME**
					
					- $.message.order.fulfillments[*].start.instructions.name must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.instructions.name is not in the payload
					
					#### **FULFILLMENTS_START_INSTRUCTIONS_SHORT_DESC**
					
					- $.message.order.fulfillments[*].start.instructions.short_desc must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.instructions.short_desc is not in the payload
					
					#### **FULFILLMENTS_START_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE**
					
					- All elements of $.message.order.fulfillments[*].start.instructions.additional_desc.content_type must be in ["text/plain", "text/html"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.instructions.additional_desc.content_type is not in the payload
				
				- **FULFILLMENTS_START_CONTACT** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_CONTACT_PHONE**
					
					- $.message.order.fulfillments[*].start.contact.phone must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.contact.phone is not in the payload
					
					#### **FULFILLMENTS_START_CONTACT_EMAIL**
					
					- $.message.order.fulfillments[*].start.contact.email must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.contact.email is not in the payload
			
			- **FULFILLMENTS_END** : All the following sub conditions must pass as per the api requirement
			
				- **FULFILLMENTS_END_LOCATION** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_END_LOCATION_GPS**
					
					- $.message.order.fulfillments[*].end.location.gps must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.location.gps is not in the payload
					
					- **FULFILLMENTS_END_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
					
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_NAME**
						
						- $.message.order.fulfillments[*].end.location.address.name must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].end.location.address.name is not in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING**
						
						- $.message.order.fulfillments[*].end.location.address.building must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].end.location.address.building is not in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY**
						
						- $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].end.location.address.locality is not in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY**
						
						- $.message.order.fulfillments[*].end.location.address.country must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].end.location.address.country is not in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_CITY**
						
						- $.message.order.fulfillments[*].end.location.address.city must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].end.location.address.city is not in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE**
						
						- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].end.location.address.area_code is not in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_STATE**
						
						- $.message.order.fulfillments[*].end.location.address.state must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.fulfillments[*].end.location.address.state is not in the payload
				
				- **FULFILLMENTS_END_TIME** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_END_TIME_RANGE_START**
					
					- $.message.order.fulfillments[*].end.time.range.start must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.time.range.start is not in the payload
					
					#### **FULFILLMENTS_END_TIME_RANGE_END**
					
					- $.message.order.fulfillments[*].end.time.range.end must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.time.range.end is not in the payload
					
					#### **FULFILLMENTS_END_TIME_TIMESTAMP**
					
					- $.message.order.fulfillments[*].end.time.timestamp must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.time.timestamp is not in the payload
				
				- **FULFILLMENTS_END_INSTRUCTIONS** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_END_INSTRUCTIONS_CODE**
					
					- $.message.order.fulfillments[*].end.instructions.code must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.instructions.code is not in the payload
					
					#### **FULFILLMENTS_END_INSTRUCTIONS_NAME**
					
					- $.message.order.fulfillments[*].end.instructions.name must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.instructions.name is not in the payload
					
					#### **FULFILLMENTS_END_INSTRUCTIONS_SHORT_DESC**
					
					- $.message.order.fulfillments[*].end.instructions.short_desc must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.instructions.short_desc is not in the payload
					
					#### **FULFILLMENTS_END_INSTRUCTIONS_LONG_DESC**
					
					- $.message.order.fulfillments[*].end.instructions.long_desc must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.instructions.long_desc is not in the payload
				
				- **FULFILLMENTS_END_CONTACT** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_END_CONTACT_PHONE**
					
					- $.message.order.fulfillments[*].end.contact.phone must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.contact.phone is not in the payload
					
					#### **FULFILLMENTS_END_CONTACT_EMAIL**
					
					- $.message.order.fulfillments[*].end.contact.email must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.contact.email is not in the payload
			
			- **FULFILLMENTS_AGENT** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_AGENT_NAME**
				
				- $.message.order.fulfillments[*].agent.name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].agent.name is not in the payload
				
				#### **FULFILLMENTS_AGENT_PHONE**
				
				- $.message.order.fulfillments[*].agent.phone must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].agent.phone is not in the payload
			
			- **FULFILLMENTS_VEHICLE** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_VEHICLE_CATEGORY**
				
				- $.message.order.fulfillments[*].vehicle.category must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].vehicle.category is not in the payload
				
				#### **FULFILLMENTS_VEHICLE_SIZE**
				
				- $.message.order.fulfillments[*].vehicle.size must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].vehicle.size is not in the payload
			
			- **FULFILLMENTS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				- **TAGS_ROUTING** : All the following sub conditions must pass as per the api requirement
				
					#### **ROUTING_TYPE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='routing')].list[?(@.code=='type')].value is not in the payload
				
				- **TAGS_TRACKING** : All the following sub conditions must pass as per the api requirement
				
					#### **TRACKING_GPS_ENABLED**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='gps_enabled')].value is not in the payload
					
					#### **TRACKING_URL_ENABLED**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url_enabled')].value is not in the payload
					
					#### **TRACKING_URL**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value must follow every regex in ["^https?://.*$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='tracking')].list[?(@.code=='url')].value is not in the payload
				
				- **TAGS_FULFILLMENT_DELAY** : All the following sub conditions must pass as per the api requirement
				
					#### **DELAY_STATE**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value must be in ["Order-picked-up", "Order-delivered"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='state')].value is not in the payload
					
					#### **DELAY_REASON_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='reason_id')].value is not in the payload
					
					#### **DELAY_TIMESTAMP**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='fulfillment_delay')].list[?(@.code=='timestamp')].value is not in the payload
		
		- **ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_PRICE_CURRENCY**
			
			- $.message.order.quote.price.currency must be present in the payload
			
			#### **QUOTE_PRICE_VALUE**
			
			- $.message.order.quote.price.value must be present in the payload
			
			- **QUOTE_BREAKUP** : All the following sub conditions must pass as per the api requirement
			
				- **BREAKUP_ITEM** : All the following sub conditions must pass as per the api requirement
				
					#### **BREAKUP_ITEM_ID**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
					
					#### **BREAKUP_ITEM_QUANTITY_COUNT**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count is not in the payload
					
					#### **BREAKUP_ITEM_TITLE**
					
					- $.message.order.quote.breakup[*].title must be present in the payload
					
					#### **BREAKUP_ITEM_TITLE_TYPE**
					
					- All elements of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "tax", "misc", "discount", "offer"]
					
					#### **BREAKUP_ITEM_PRICE_CURRENCY**
					
					- $.message.order.quote.breakup[*].price.currency must be present in the payload
					
					#### **BREAKUP_ITEM_PRICE_VALUE**
					
					- $.message.order.quote.breakup[*].price.value must be present in the payload
					
					#### **BREAKUP_ITEM_TTL**
					
					- $.message.order.quote.breakup[*].ttl must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*].ttl is not in the payload
					
					- **BREAKUP_ITEM_ITEM** : All the following sub conditions must pass as per the api requirement
					
						#### **BREAKUP_ITEM_ITEM_PARENT_ITEM_ID**
						
						- $.message.order.quote.breakup[*].item.parent_item_id must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.parent_item_id is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_AVAILABLE_COUNT**
						
						- All elements of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["99", "0"]
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.available.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_QUANTITY_MAXIMUM_COUNT**
						
						- $.message.order.quote.breakup[*].item.quantity.maximum.count must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.quantity.maximum.count is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_CURRENCY**
						
						- $.message.order.quote.breakup[*].item.price.currency must be present in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_VALUE**
						
						- $.message.order.quote.breakup[*].item.price.value must be present in the payload
						
						- **BREAKUP_ITEM_ITEM_TAGS** : All the following sub conditions must pass as per the api requirement
						
							#### **BREAKUP_ITEM_ITEM_TAGS_TYPE**
							
							- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='type')].list[?(@.code=='type')].value must be in ["item", "customization"]
							
							#### **BREAKUP_ITEM_ITEM_TAGS_PARENT_ID**
							
							- $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value must be present in the payload
							
							> **Skip if:**
							>
							>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='parent')].list[?(@.code=='id')].value is not in the payload
							
							- **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE** : All the following sub conditions must pass as per the api requirement
							
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value must be in ["fulfillment", "order", "item"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value is not in the payload
								
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_SUBTYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value must be in ["delivery", "packaging", "misc"]
								
								> **Skip if:**
								>
								>     - $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='subtype')].value is not in the payload
		
		- **ORDER_QUOTE_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_TTL**
			
			- $.message.order.quote.ttl must be present in the payload
		
		- **ORDER_PAYMENT** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE**
			
			- All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
			
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT**
			
			**All of the following must be true:**
			  - $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
			  - All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must follow every regex in ["^(\\d*.?\\d{1,2})$"]
			
			- **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE**
				
				- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs"]
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].upi_address is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].bank_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].branch_name is not in the payload
		
		- **ORDER_PAYMENT_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_URI**
			
			- $.message.order.payment.uri must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment.uri is not in the payload
			
			#### **PAYMENT_TL_METHOD**
			
			- $.message.order.payment.tl_method must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment.tl_method is not in the payload
			
			- **PAYMENT_PARAMS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_CURRENCY**
				
				- $.message.order.payment.params.currency must be present in the payload
				
				#### **PAYMENT_TRANSACTION_ID**
				
				- $.message.order.payment.params.transaction_id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.params.transaction_id is not in the payload
				
				#### **PAYMENT_AMOUNT**
				
				- $.message.order.payment.params.amount must be present in the payload
			
			#### **PAYMENT_STATUS**
			
			**All of the following must be true:**
			  - $.message.order.payment.status must be present in the payload
			  - All elements of $.message.order.payment.status must be in ["NOT-PAID", "PAID"]
			
			#### **PAYMENT_TYPE**
			
			**All of the following must be true:**
			  - $.message.order.payment.type must be present in the payload
			  - All elements of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT"]
			
			#### **PAYMENT_COLLECTED_BY**
			
			**All of the following must be true:**
			  - $.message.order.payment.collected_by must be present in the payload
			  - All elements of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
			
			#### **PAYMENT_ONDC_ORG_SETTLEMENT_WINDOW**
			
			- $.message.order.payment['@ondc/org/settlement_window'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/settlement_window'] is not in the payload
			
			#### **PAYMENT_ONDC_ORG_WITHHOLDING_AMOUNT**
			
			- $.message.order.payment['@ondc/org/withholding_amount'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/withholding_amount'] is not in the payload
			
			#### **PAYMENT_ONDC_ORG_SETTLEMENT_BASIS**
			
			**All of the following must be true:**
			  - $.message.order.payment['@ondc/org/settlement_basis'] must be present in the payload
			  - All elements of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_Window_expiry"]
			
			> **Skip if:**
			>
			>     - $.message.order.payment['@ondc/org/settlement_basis'] is not in the payload
			
			- **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_REFERENCE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_reference is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_STATUS**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_status must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_status is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp is not in the payload
		
		- **ORDER_DOCUMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **DOCUMENTS_URL**
			
			- $.message.order.documents[*].url must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.documents[*].url is not in the payload
			
			#### **DOCUMENTS_LABEL**
			
			- $.message.order.documents[*].label must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.documents[*].label is not in the payload
		
		#### **ORDER_CREATED_AT**
		
		**All of the following must be true:**
		  - $.message.order.created_at must be present in the payload
		  - All elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
		
		#### **ORDER_UPDATED_AT**
		
		**All of the following must be true:**
		  - $.message.order.updated_at must be present in the payload
		  - All elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

- **issue** : All the following sub conditions must pass as per the api requirement

	#### **REQUIRED_MESSAGE_ID**
	
	- $.message.issue.id must be present in the payload
	
	#### **REQUIRED_MESSAGE_STATUS**
	
	**All of the following must be true:**
	  - **All of the following must be true:**
	    - $.message.issue.status must be present in the payload
	    - All elements of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "NEED_MORE_INFO", "INFO_PROVIDED"]
	  - All values of $.message.issue.status are unique
	
	#### **REQUIRED_MESSAGE_LEVEL**
	
	**All of the following must be true:**
	  - $.message.issue.level must be present in the payload
	  - All elements of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]
	
	#### **REQUIRED_MESSAGE_CREATED_AT**
	
	- $.message.issue.created_at must be present in the payload
	
	#### **REQUIRED_MESSAGE_UPDATED_AT**
	
	- $.message.issue.updated_at must be present in the payload
	
	#### **REQUIRED_MESSAGE_REF_ID**
	
	- $.message.issue.refs[*].ref_id must be present in the payload
	
	#### **REQUIRED_MESSAGE_REF_TYPE**
	
	**All of the following must be true:**
	  - $.message.issue.refs[*].ref_type must be present in the payload
	  - All elements of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]
	
	#### **REQUIRED_MESSAGE_ID_10**
	
	- $.message.issue.actors[*].id must be present in the payload
	
	#### **REQUIRED_MESSAGE_TYPE**
	
	**All of the following must be true:**
	  - $.message.issue.actors[*].type must be present in the payload
	  - All elements of $.message.issue.actors[*].type must be in ["INTERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO", "CONSUMER"]
	
	#### **REQUIRED_MESSAGE_NAME**
	
	- $.message.issue.actors[*].info.person.name must be present in the payload
	
	#### **REQUIRED_MESSAGE_NAME_13**
	
	- $.message.issue.actors[*].info.person.name must be present in the payload
	
	#### **REQUIRED_MESSAGE_PHONE**
	
	- $.message.issue.actors[*].info.contact.phone must be present in the payload
	
	#### **REQUIRED_MESSAGE_EMAIL**
	
	- $.message.issue.actors[*].info.contact.email must be present in the payload
	
	#### **REQUIRED_MESSAGE_SOURCE_ID**
	
	- $.message.issue.source_id must be present in the payload
	
	#### **REQUIRED_MESSAGE_CODE**
	
	- $.message.issue.descriptor.code must be present in the payload
	
	#### **REQUIRED_MESSAGE_SHORT_DESC**
	
	- $.message.issue.descriptor.short_desc must be present in the payload
	
	#### **REQUIRED_MESSAGE_LONG_DESC**
	
	- $.message.issue.descriptor.long_desc must be present in the payload
	
	#### **REQUIRED_MESSAGE_URL**
	
	- $.message.issue.descriptor.additional_desc.url must be present in the payload
	
	#### **REQUIRED_MESSAGE_CONTENT_TYPE**
	
	- $.message.issue.descriptor.additional_desc.content_type must be present in the payload
	
	#### **REQUIRED_MESSAGE_LAST_ACTION_ID**
	
	- $.message.issue.last_action_id must be present in the payload
	
	#### **REQUIRED_MESSAGE_ID_25**
	
	- $.message.issue.actions[*].id must be present in the payload
	
	#### **REQUIRED_MESSAGE_CODE_26**
	
	- $.message.issue.actions[*].descriptor.code must be present in the payload
	
	#### **REQUIRED_MESSAGE_SHORT_DESC_27**
	
	- $.message.issue.actions[*].descriptor.short_desc must be present in the payload
	
	#### **REQUIRED_MESSAGE_UPDATED_AT_28**
	
	- $.message.issue.actions[*].updated_at must be present in the payload
	
	#### **REQUIRED_MESSAGE_ACTION_BY**
	
	- $.message.issue.actions[*].action_by must be present in the payload
	
	#### **VALID_ENUM_MESSAGE_STATUS**
	
	- All elements of $.message.issue.status must be in ["OPEN", "CLOSED", "PROCESSING", "RESOLVED", "INFO_PROVIDED"]
	
	> **Skip if:**
	>
	>     - $.message.issue.status is not in the payload
	
	#### **VALID_ENUM_MESSAGE_LEVEL**
	
	- All elements of $.message.issue.level must be in ["ISSUE", "GREVIENCE", "DISPUTE"]
	
	> **Skip if:**
	>
	>     - $.message.issue.level is not in the payload
	
	#### **VALID_ENUM_MESSAGE_REF_TYPE**
	
	- All elements of $.message.issue.refs[*].ref_type must be in ["ORDER", "ITEM", "FULFILLMENT", "TRANSACTION_ID", "MESSAGE_ID", "PROVIDER", "COMPLAINT", "ACTION", "PAYMENT", "CUSTOMER", "AGENT"]
	
	> **Skip if:**
	>
	>     - $.message.issue.refs[*].ref_type is not in the payload
	
	#### **VALID_ENUM_MESSAGE_TYPE**
	
	- All elements of $.message.issue.actors[*].type must be in ["INTERFACING_NP", "COUNTERPARTY_NP", "CASCADED_NP", "PROVIDER", "AGENT", "CUSTOMER", "INTERFACING_NP_GRO", "COUNTERPARTY_NP_GRO", "CASCADED_NP_GRO", "CONSUMER"]
	
	> **Skip if:**
	>
	>     - $.message.issue.actors[*].type is not in the payload

- **on_issue** : All the following sub conditions must pass as per the api requirement

	#### **REQUIRED_MESSAGE_ID**
	
	- $.message.issue.id must be present in the payload

- **update** : All the following sub conditions must pass as per the api requirement

	- **UPDATE_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["update"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["update"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["update"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["update"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["update"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["update"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	#### **UPDATE_TARGET**
	
	**All of the following must be true:**
	  - $.message.update_target must be present in the payload
	  - All elements of $.message.update_target must be in ["payment", "item", "billing", "fulfillment"]
	
	- **UPDATE_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_ID**
		
		- $.message.order.id must be present in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_TYPE**
			
			- $.message.order.fulfillments[*].type must be present in the payload
			
			- **FULFILLMENTS_END** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE**
				
				- $.message.order.fulfillments[*].end.instructions.additional_desc.content_type must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].end.instructions.additional_desc.content_type is not in the payload
			
			- **FULFILLMENTS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				- **TAGS_RETURN_REQUEST** : All the following sub conditions must pass as per the api requirement
				
					#### **RETURN_REQUEST_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value is not in the payload
					
					#### **RETURN_REQUEST_ITEM_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value is not in the payload
					
					#### **RETURN_REQUEST_PARENT_ITEM_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value is not in the payload
					
					#### **RETURN_REQUEST_ITEM_QUANTITY**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value is not in the payload
					
					#### **RETURN_REQUEST_REASON_ID**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value must follow every regex in ["^\d{3}$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value is not in the payload
					
					#### **RETURN_REQUEST_REASON_DESC**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value is not in the payload
					
					#### **RETURN_REQUEST_IMAGES**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value is not in the payload
					
					#### **RETURN_REQUEST_TTL_APPROVAL**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value must follow every regex in ["^PT[0-9]+H$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value is not in the payload
					
					#### **RETURN_REQUEST_TTL_REVERSEQC**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value must follow every regex in ["^P[0-9]+D$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value is not in the payload
				
				- **TAGS_UPDATE_STATE** : All the following sub conditions must pass as per the api requirement
				
					#### **UPDATE_STATE_STATE**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value must be in ["Order-picked-up", "Order-delivered"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value is not in the payload
					
					#### **UPDATE_STATE_REASON_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value is not in the payload
				
				- **TAGS_CANCEL_REQUEST** : All the following sub conditions must pass as per the api requirement
				
					#### **CANCEL_REQUEST_RETRY_COUNT**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value is not in the payload
					
					#### **CANCEL_REQUEST_REASON_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value is not in the payload
					
					#### **CANCEL_REQUEST_INITIATED_BY**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value is not in the payload
				
				- **TAGS_UPDATE_FULFILLMENT_TIME** : All the following sub conditions must pass as per the api requirement
				
					#### **UPDATE_FULFILLMENT_TIME_STATE**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value must be in ["Order-picked-up"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value is not in the payload
					
					#### **UPDATE_FULFILLMENT_TIME_TIMESTAMP**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value is not in the payload
					
					#### **UPDATE_FULFILLMENT_TIME_START**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value is not in the payload
					
					#### **UPDATE_FULFILLMENT_TIME_END**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value is not in the payload
				
				- **TAGS_UPDATE_AGENT_DETAILS** : All the following sub conditions must pass as per the api requirement
				
					#### **AGENT_NAME**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value is not in the payload
					
					#### **AGENT_PHONE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value is not in the payload
				
				- **TAGS_UPDATE_LABEL** : All the following sub conditions must pass as per the api requirement
				
					#### **LABEL_TYPE**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value must be in ["webp", "png", "jpeg", "pdf"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value is not in the payload
					
					#### **LABEL_URL**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value is not in the payload
					
					#### **LABEL_SHIPPING**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value is not in the payload
				
				- **TAGS_REVERSEQC_OUTPUT** : All the following sub conditions must pass as per the api requirement
				
					#### **RQC_P001**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value is not in the payload
					
					#### **RQC_P003**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value is not in the payload
					
					#### **RQC_Q001**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value must be in ["yes", "no"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value is not in the payload
				
				- **TAGS_BNP_RECEIVABLES_CLAIM** : All the following sub conditions must pass as per the api requirement
				
					#### **CLAIM_TYPE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value is not in the payload
					
					#### **CLAIM_CURRENCY**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value is not in the payload
					
					#### **CLAIM_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_BNP_DIFF_WEIGHT** : All the following sub conditions must pass as per the api requirement
				
					#### **DIFF_WEIGHT_UNIT**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value must be in ["unit", "dozen", "gram", "kilogram", "tonne", "litre", "millilitre"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value is not in the payload
					
					#### **DIFF_WEIGHT_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_BNP_DIFF_LENGTH** : All the following sub conditions must pass as per the api requirement
				
					#### **DIFF_LENGTH_UNIT**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value must be in ["centimeter", "meter"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value is not in the payload
					
					#### **DIFF_LENGTH_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_BNP_DIFF_BREADTH** : All the following sub conditions must pass as per the api requirement
				
					#### **DIFF_BREADTH_UNIT**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value is not in the payload
					
					#### **DIFF_BREADTH_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_BNP_DIFF_HEIGHT** : All the following sub conditions must pass as per the api requirement
				
					#### **DIFF_HEIGHT_UNIT**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value is not in the payload
					
					#### **DIFF_HEIGHT_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_UPDATE_STATE_TIMESTAMPS** : All the following sub conditions must pass as per the api requirement
				
					#### **STATE_TIMESTAMP**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value is not in the payload
					
					#### **STATE_START_TIME**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value is not in the payload
					
					#### **STATE_END_TIME**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value is not in the payload
		
		- **ORDER_PAYMENT** : All the following sub conditions must pass as per the api requirement
		
			- **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE**
				
				- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater", "card"]
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp is not in the payload

- **track** : All the following sub conditions must pass as per the api requirement

	- **TRACK_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["track"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["track"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["track"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["track"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["track"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["track"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **TRACK_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_ID**
		
		**All of the following must be true:**
		  - $.message.order_id must be present in the payload
		  - All elements of $.message.order_id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]

- **on_track** : All the following sub conditions must pass as per the api requirement

	- **ON_TRACK_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_track"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_track"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["on_track"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["on_track"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["on_track"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["on_track"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **ON_TRACK_TRACKING** : All the following sub conditions must pass as per the api requirement
	
		#### **TRACKING_ID**
		
		- $.message.tracking.id must be present in the payload
		
		#### **TRACKING_STATUS**
		
		**All of the following must be true:**
		  - $.message.tracking.status must be present in the payload
		  - All elements of $.message.tracking.status must be in ["active", "inactive"]
		
		- **TRACKING_LOCATION** : All the following sub conditions must pass as per the api requirement
		
			#### **TRACKING_LOCATION_GPS**
			
			- $.message.tracking.location.gps must be present in the payload
			
			#### **TRACKING_LOCATION_TIME_TIMESTAMP**
			
			- All elements of $.message.tracking.location.time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
			
			#### **TRACKING_LOCATION_UPDATED_AT**
			
			- All elements of $.message.tracking.location.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
		
		- **TRACKING_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **TRACKING_ORDER_TAG** : All the following sub conditions must pass as per the api requirement
			
				#### **ORDER_ID**
				
				- $.message.tracking.tags[?(@.code=='order')].list[?(@.code=='id')].value must be present in the payload
			
			- **TRACKING_CONFIG_TAG** : All the following sub conditions must pass as per the api requirement
			
				#### **CONFIG_ATTR**
				
				- $.message.tracking.tags[?(@.code=='config')].list[?(@.code=='attr')].value must be present in the payload
				
				#### **CONFIG_TYPE**
				
				- All elements of $.message.tracking.tags[?(@.code=='config')].list[?(@.code=='type')].value must be in ["live_poll", "deferred"]
			
			- **TRACKING_PATH_TAG** : All the following sub conditions must pass as per the api requirement
			
				#### **PATH_LAT_LNG**
				
				- $.message.tracking.tags[?(@.code=='path')].list[?(@.code=='lat_lng')].value must be present in the payload
				
				#### **PATH_SEQUENCE**
				
				**All of the following must be true:**
				  - $.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value must be present in the payload
				  - All elements of $.message.tracking.tags[?(@.code=='path')].list[?(@.code=='sequence')].value must be in ["1", "2", "3"]

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **CANCEL_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["cancel"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["cancel"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["cancel"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["cancel"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["cancel"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["cancel"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	#### **CANCEL_ORDER_ID**
	
	- $.message.order_id must be present in the payload
	
	#### **CANCELLATION_REASON_ID**
	
	**All of the following must be true:**
	  - $.message.cancellation_reason_id must be present in the payload
	  - All elements of $.message.cancellation_reason_id must be in ["002", "021", "022", "023", "024", "051", "011", "013", "014", "016", "018", "052", "053"]
	
	- **CANCEL_DESCRIPTOR** : All the following sub conditions must pass as per the api requirement
	
		#### **CANCEL_DESCRIPTOR_NAME**
		
		- $.message.descriptor.name must be present in the payload
		
		#### **CANCEL_DESCRIPTOR_SHORT_DESC**
		
		- $.message.descriptor.short_desc must be present in the payload
		
		- **CANCEL_DESCRIPTOR_TAGS** : All the following sub conditions must pass as per the api requirement
		
			- **PARAMS_TAG** : All the following sub conditions must pass as per the api requirement
			
				#### **PARAMS_FORCE**
				
				- All elements of $.message.descriptor.tags[?(@.code=='params')].list[?(@.code=='force')].value must be in ["yes", "no"]
				
				#### **PARAMS_TTL_RESPONSE**
				
				- $.message.descriptor.tags[?(@.code=='params')].list[?(@.code=='ttl_response')].value must be present in the payload
			
			- **CANCEL_REQUEST_TAG** : All the following sub conditions must pass as per the api requirement
			
				#### **CANCEL_REQUEST_INITIATED_BY**
				
				- $.message.descriptor.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value must be present in the payload

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **ON_CANCEL_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_cancel"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_cancel"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["on_cancel"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["on_cancel"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["on_cancel"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["on_cancel"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **ON_CANCEL_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_ID**
		
		**All of the following must be true:**
		  - $.message.order.id must be present in the payload
		  - All elements of $.message.order.id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]
		
		#### **ORDER_STATE**
		
		- All elements of $.message.order.state must be in ["Cancelled"]
		
		- **ORDER_CANCELLATION** : All the following sub conditions must pass as per the api requirement
		
			#### **CANCELLED_BY**
			
			- $.message.order.cancellation.cancelled_by must be present in the payload
			
			#### **CANCELLATION_REASON_ID**
			
			- $.message.order.cancellation.reason.id must be present in the payload
		
		- **ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
		
			#### **ORDER_PROVIDER_ID**
			
			- $.message.order.provider.id must be present in the payload
			
			#### **ORDER_PROVIDER_LOCATIONS_ID**
			
			- $.message.order.provider.locations[*].id must be present in the payload
		
		- **ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **ORDER_ITEM_ID**
			
			**All of the following must be true:**
			  - $.message.order.items[*].id must be present in the payload
			  - All elements of $.message.order.items[*].id must follow every regex in ["^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"]
			
			#### **ORDER_ITEM_FULFILLMENT_ID**
			
			- $.message.order.items[*].fulfillment_id must be present in the payload
			
			#### **ORDER_ITEM_QUANTITY_COUNT**
			
			- $.message.order.items[*].quantity.count must be present in the payload
		
		- **ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
		
			#### **BILLING_NAME**
			
			- $.message.order.billing.name must be present in the payload
			
			- **BILLING_ADDRESS** : All the following sub conditions must pass as per the api requirement
			
				#### **BILLING_ADDRESS_NAME**
				
				- $.message.order.billing.address.name must be present in the payload
				
				#### **BILLING_ADDRESS_BUILDING**
				
				- $.message.order.billing.address.building must be present in the payload
				
				#### **BILLING_ADDRESS_LOCALITY**
				
				- $.message.order.billing.address.locality must be present in the payload
				
				#### **BILLING_ADDRESS_CITY**
				
				- $.message.order.billing.address.city must be present in the payload
				
				#### **BILLING_ADDRESS_STATE**
				
				- $.message.order.billing.address.state must be present in the payload
				
				#### **BILLING_ADDRESS_COUNTRY**
				
				- $.message.order.billing.address.country must be present in the payload
				
				#### **BILLING_ADDRESS_AREA_CODE**
				
				- $.message.order.billing.address.area_code must be present in the payload
			
			#### **BILLING_PHONE**
			
			- $.message.order.billing.phone must be present in the payload
			
			#### **BILLING_EMAIL**
			
			- $.message.order.billing.email must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.billing.email is not in the payload
			
			#### **BILLING_CREATED_AT**
			
			- $.message.order.billing.created_at must be present in the payload
			
			#### **BILLING_UPDATED_AT**
			
			- $.message.order.billing.updated_at must be present in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_STATE_DESCRIPTOR_CODE**
			
			**All of the following must be true:**
			  - $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
			  - All elements of $.message.order.fulfillments[*].state.descriptor.code must be in ["Cancelled", "RTO-Initiated", "RTO-Disposed", "RTO-Delivered"]
			
			#### **FULFILLMENTS_TYPE**
			
			- $.message.order.fulfillments[*].type must be present in the payload
			
			#### **FULFILLMENTS_ONDC_ORG_PROVIDER_NAME**
			
			- $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*]['@ondc/org/provider_name'] is not in the payload
			
			#### **FULFILLMENTS_TRACKING**
			
			- $.message.order.fulfillments[*].tracking must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.fulfillments[*].tracking is not in the payload
			
			- **FULFILLMENTS_START** : All the following sub conditions must pass as per the api requirement
			
				- **FULFILLMENTS_START_LOCATION** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_LOCATION_ID**
					
					- $.message.order.fulfillments[*].start.location.id must be present in the payload
					
					#### **FULFILLMENTS_START_LOCATION_DESCRIPTOR_NAME**
					
					- $.message.order.fulfillments[*].start.location.descriptor.name must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.location.descriptor.name is not in the payload
					
					#### **FULFILLMENTS_START_LOCATION_GPS**
					
					- $.message.order.fulfillments[*].start.location.gps must be present in the payload
					
					- **FULFILLMENTS_START_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
					
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_LOCALITY**
						
						- $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_CITY**
						
						- $.message.order.fulfillments[*].start.location.address.city must be present in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_AREA_CODE**
						
						- $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
						
						#### **FULFILLMENTS_START_LOCATION_ADDRESS_STATE**
						
						- $.message.order.fulfillments[*].start.location.address.state must be present in the payload
				
				- **FULFILLMENTS_START_TIME** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_TIME_RANGE_START**
					
					- $.message.order.fulfillments[*].start.time.range.start must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.time.range.start is not in the payload
					
					#### **FULFILLMENTS_START_TIME_RANGE_END**
					
					- $.message.order.fulfillments[*].start.time.range.end must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.time.range.end is not in the payload
				
				- **FULFILLMENTS_START_CONTACT** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_START_CONTACT_PHONE**
					
					- $.message.order.fulfillments[*].start.contact.phone must be present in the payload
					
					#### **FULFILLMENTS_START_CONTACT_EMAIL**
					
					- $.message.order.fulfillments[*].start.contact.email must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].start.contact.email is not in the payload
			
			- **FULFILLMENTS_END** : All the following sub conditions must pass as per the api requirement
			
				- **FULFILLMENTS_END_LOCATION** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_END_LOCATION_GPS**
					
					- $.message.order.fulfillments[*].end.location.gps must be present in the payload
					
					- **FULFILLMENTS_END_LOCATION_ADDRESS** : All the following sub conditions must pass as per the api requirement
					
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_NAME**
						
						- $.message.order.fulfillments[*].end.location.address.name must be present in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_BUILDING**
						
						- $.message.order.fulfillments[*].end.location.address.building must be present in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_LOCALITY**
						
						- $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_COUNTRY**
						
						- $.message.order.fulfillments[*].end.location.address.country must be present in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_CITY**
						
						- $.message.order.fulfillments[*].end.location.address.city must be present in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_AREA_CODE**
						
						- $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
						
						#### **FULFILLMENTS_END_LOCATION_ADDRESS_STATE**
						
						- $.message.order.fulfillments[*].end.location.address.state must be present in the payload
				
				- **FULFILLMENTS_END_TIME** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_END_TIME_RANGE_START**
					
					- $.message.order.fulfillments[*].end.time.range.start must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.time.range.start is not in the payload
					
					#### **FULFILLMENTS_END_TIME_RANGE_END**
					
					- $.message.order.fulfillments[*].end.time.range.end must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.time.range.end is not in the payload
				
				#### **FULFILLMENTS_END_PERSON_NAME**
				
				- $.message.order.fulfillments[*].end.person.name must be present in the payload
				
				- **FULFILLMENTS_END_CONTACT** : All the following sub conditions must pass as per the api requirement
				
					#### **FULFILLMENTS_END_CONTACT_PHONE**
					
					- $.message.order.fulfillments[*].end.contact.phone must be present in the payload
					
					#### **FULFILLMENTS_END_CONTACT_EMAIL**
					
					- $.message.order.fulfillments[*].end.contact.email must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].end.contact.email is not in the payload
			
			- **FULFILLMENTS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				- **TAGS_CANCEL_REQUEST** : All the following sub conditions must pass as per the api requirement
				
					#### **CANCEL_REQUEST_ID**
					
					- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='id')].value is not in the payload
					
					#### **CANCEL_REQUEST_REASON_ID**
					
					- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value is not in the payload
					
					#### **CANCEL_REQUEST_INITIATED_BY**
					
					- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value is not in the payload
					
					#### **CANCEL_REQUEST_RETRY_COUNT**
					
					- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value is not in the payload
					
					#### **CANCEL_REQUEST_RTO_ID**
					
					- $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='cancel_request')].list[?(@.code=='rto_id')].value is not in the payload
				
				- **TAGS_IGM_REQUEST** : All the following sub conditions must pass as per the api requirement
				
					#### **IGM_REQUEST_ID**
					
					- $.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='igm_request')].list[?(@.code=='id')].value is not in the payload
				
				- **TAGS_PRE_CANCEL_STATE** : All the following sub conditions must pass as per the api requirement
				
					#### **PRE_CANCEL_FULFILLMENT_STATE**
					
					**All of the following must be true:**
					  - $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value must be present in the payload
					  - All elements of $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value must be in ["cancelled", "pending"]
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='fulfillment_state')].value is not in the payload
					
					#### **PRE_CANCEL_UPDATED_AT**
					
					**All of the following must be true:**
					  - $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value must be present in the payload
					  - All elements of $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='pre_cancel_state')].list[?(@.code=='updated_at')].value is not in the payload
				
				- **TAGS_QUOTE_TRAIL** : All the following sub conditions must pass as per the api requirement
				
					#### **QUOTE_TRAIL_TYPE**
					
					- $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='type')].value is not in the payload
					
					#### **QUOTE_TRAIL_ID**
					
					- $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='id')].value is not in the payload
					
					#### **QUOTE_TRAIL_CURRENCY**
					
					- $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='currency')].value is not in the payload
					
					#### **QUOTE_TRAIL_VALUE**
					
					- $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.tags[?(@.code=='quote_trail')].list[?(@.code=='value')].value is not in the payload
		
		- **ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			#### **QUOTE_PRICE_CURRENCY**
			
			- $.message.order.quote.price.currency must be present in the payload
			
			#### **QUOTE_PRICE_VALUE**
			
			- $.message.order.quote.price.value must be present in the payload
			
			- **QUOTE_BREAKUP** : All the following sub conditions must pass as per the api requirement
			
				- **BREAKUP_ITEM** : All the following sub conditions must pass as per the api requirement
				
					#### **BREAKUP_ITEM_ID**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
					
					#### **BREAKUP_ITEM_QUANTITY_COUNT**
					
					- $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count is not in the payload
					
					#### **BREAKUP_ITEM_TITLE_TYPE**
					
					- All elements of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "offer"]
					
					#### **BREAKUP_ITEM_PRICE_CURRENCY**
					
					- $.message.order.quote.breakup[*].price.currency must be present in the payload
					
					#### **BREAKUP_ITEM_PRICE_VALUE**
					
					- $.message.order.quote.breakup[*].price.value must be present in the payload
					
					- **BREAKUP_ITEM_ITEM** : All the following sub conditions must pass as per the api requirement
					
						#### **BREAKUP_ITEM_ITEM_PRICE_CURRENCY**
						
						- $.message.order.quote.breakup[*].item.price.currency must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.price.currency is not in the payload
						
						#### **BREAKUP_ITEM_ITEM_PRICE_VALUE**
						
						- $.message.order.quote.breakup[*].item.price.value must be present in the payload
						
						> **Skip if:**
						>
						>     - $.message.order.quote.breakup[*].item.price.value is not in the payload
						
						- **BREAKUP_ITEM_ITEM_TAGS** : All the following sub conditions must pass as per the api requirement
						
							- **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE** : All the following sub conditions must pass as per the api requirement
							
								#### **BREAKUP_ITEM_ITEM_TAGS_TAGS_QUOTE_TYPE**
								
								- All elements of $.message.order.quote.breakup[*].item.tags[?(@.code=='quote')].list[?(@.code=='type')].value must be in ["fulfillment", "order", "item", "customization"]
			
			#### **QUOTE_TTL**
			
			- $.message.order.quote.ttl must be present in the payload
		
		- **ORDER_PAYMENT** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_TYPE**
			
			- All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
			
			#### **PAYMENT_ONDC_ORG_BUYER_APP_FINDER_FEE_AMOUNT**
			
			**All of the following must be true:**
			  - $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
			  - All elements of $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must follow every regex in ["^(\\d*.?\\d{1,2})$"]
			
			- **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE**
				
				- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs"]
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_UPI_ADDRESS**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].upi_address is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_BANK_ACCOUNT_NO**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_IFSC_CODE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BANK_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].bank_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BENEFICIARY_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name is not in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_BRANCH_NAME**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment['@ondc/org/settlement_details'][*].branch_name is not in the payload
		
		- **ORDER_PAYMENT_ADDITIONAL_PROPERTIES** : All the following sub conditions must pass as per the api requirement
		
			#### **PAYMENT_URI**
			
			- $.message.order.payment.uri must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment.uri is not in the payload
			
			#### **PAYMENT_TL_METHOD**
			
			- $.message.order.payment.tl_method must be present in the payload
			
			> **Skip if:**
			>
			>     - $.message.order.payment.tl_method is not in the payload
			
			- **PAYMENT_PARAMS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_CURRENCY**
				
				- $.message.order.payment.params.currency must be present in the payload
				
				#### **PAYMENT_TRANSACTION_ID**
				
				- $.message.order.payment.params.transaction_id must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.payment.params.transaction_id is not in the payload
				
				#### **PAYMENT_AMOUNT**
				
				- $.message.order.payment.params.amount must be present in the payload
			
			#### **PAYMENT_STATUS**
			
			**All of the following must be true:**
			  - $.message.order.payment.status must be present in the payload
			  - All elements of $.message.order.payment.status must be in ["NOT-PAID", "PAID"]
			
			#### **PAYMENT_TYPE**
			
			**All of the following must be true:**
			  - $.message.order.payment.type must be present in the payload
			  - All elements of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT"]
			
			#### **PAYMENT_COLLECTED_BY**
			
			**All of the following must be true:**
			  - $.message.order.payment.collected_by must be present in the payload
			  - All elements of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
		
		#### **ORDER_CREATED_AT**
		
		**All of the following must be true:**
		  - $.message.order.created_at must be present in the payload
		  - All elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
		
		#### **ORDER_UPDATED_AT**
		
		**All of the following must be true:**
		  - $.message.order.updated_at must be present in the payload
		  - All elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **ON_UPDATE_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_REQUIRED_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **CONTEXT_REQUIRED_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **CONTEXT_REQUIRED_COUNTRY**
			
			- $.context.country must be present in the payload
			
			#### **CONTEXT_REQUIRED_CITY**
			
			- $.context.city must be present in the payload
			
			#### **CONTEXT_REQUIRED_VERSION**
			
			- $.context.core_version must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **CONTEXT_REQUIRED_BPP_ID**
			
			- $.context.bap_id must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_update"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_BPP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			> **Skip if:**
			>
			>     - ["on_update"] equals ["search"]
			
			#### **CONTEXT_REQUIRED_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **CONTEXT_REQUIRED_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **CONTEXT_REQUIRED_TTL**
			
			- $.context.ttl must be present in the payload
			
			> **Skip if:**
			>
			>     - all elements of ["on_update"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update", "on_status"]
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **CONTEXT_ENUM_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET18"]
			
			#### **CONTEXT_ENUM_ACTION**
			
			- All elements of $.context.action must be in ["on_update"]
			
			#### **CONTEXT_ENUM_VERSION**
			
			- All elements of $.context.core_version must be in ["1.2.0"]
			
			#### **CONTEXT_REG_BAP_URI**
			
			- All elements of $.context.bap_uri must follow every regex in ["^https?\:\/\/"]
			
			#### **CONTEXT_REG_BPP_URI**
			
			- All elements of $.context.bpp_uri must follow every regex in ["^https?\:\/\/"]
			
			> **Skip if:**
			>
			>     - ["on_update"] equals ["search"]
			
			#### **CONTEXT_REG_TTL**
			
			- All elements of $.context.ttl must follow every regex in ["^P(?=\\d|T)(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
			
			> **Skip if:**
			>
			>     - all elements of ["on_update"] are in ["on_search", "on_select", "on_confirm", "on_init", "on_cancel", "on_track", "on_update"]
	
	- **ON_UPDATE_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **ORDER_ID**
		
		- $.message.order.id must be present in the payload
		
		- **ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **FULFILLMENTS_ID**
			
			- $.message.order.fulfillments[*].id must be present in the payload
			
			#### **FULFILLMENTS_TYPE**
			
			- $.message.order.fulfillments[*].type must be present in the payload
			
			- **FULFILLMENTS_END** : All the following sub conditions must pass as per the api requirement
			
				#### **FULFILLMENTS_END_INSTRUCTIONS_ADDITIONAL_DESC_CONTENT_TYPE**
				
				- $.message.order.fulfillments[*].end.instructions.additional_desc.content_type must be present in the payload
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].end.instructions.additional_desc.content_type is not in the payload
			
			- **FULFILLMENTS_TAGS** : All the following sub conditions must pass as per the api requirement
			
				- **TAGS_RETURN_REQUEST** : All the following sub conditions must pass as per the api requirement
				
					#### **RETURN_REQUEST_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='id')].value is not in the payload
					
					#### **RETURN_REQUEST_ITEM_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_id')].value is not in the payload
					
					#### **RETURN_REQUEST_PARENT_ITEM_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='parent_item_id')].value is not in the payload
					
					#### **RETURN_REQUEST_ITEM_QUANTITY**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='item_quantity')].value is not in the payload
					
					#### **RETURN_REQUEST_REASON_ID**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value must follow every regex in ["^\d{3}$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_id')].value is not in the payload
					
					#### **RETURN_REQUEST_REASON_DESC**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='reason_desc')].value is not in the payload
					
					#### **RETURN_REQUEST_IMAGES**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='images')].value is not in the payload
					
					#### **RETURN_REQUEST_TTL_APPROVAL**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value must follow every regex in ["^PT[0-9]+H$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_approval')].value is not in the payload
					
					#### **RETURN_REQUEST_TTL_REVERSEQC**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value must follow every regex in ["^P[0-9]+D$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='return_request')].list[?(@.code=='ttl_reverseqc')].value is not in the payload
				
				- **TAGS_UPDATE_STATE** : All the following sub conditions must pass as per the api requirement
				
					#### **UPDATE_STATE_STATE**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value must be in ["Order-picked-up", "Order-delivered"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='state')].value is not in the payload
					
					#### **UPDATE_STATE_REASON_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='reason_id')].value is not in the payload
				
				- **TAGS_CANCEL_REQUEST** : All the following sub conditions must pass as per the api requirement
				
					#### **CANCEL_REQUEST_RETRY_COUNT**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='retry_count')].value is not in the payload
					
					#### **CANCEL_REQUEST_REASON_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='reason_id')].value is not in the payload
					
					#### **CANCEL_REQUEST_INITIATED_BY**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='cancel_request')].list[?(@.code=='initiated_by')].value is not in the payload
				
				- **TAGS_UPDATE_FULFILLMENT_TIME** : All the following sub conditions must pass as per the api requirement
				
					#### **UPDATE_FULFILLMENT_TIME_STATE**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value must be in ["Order-picked-up"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='state')].value is not in the payload
					
					#### **UPDATE_FULFILLMENT_TIME_TIMESTAMP**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='timestamp')].value is not in the payload
					
					#### **UPDATE_FULFILLMENT_TIME_START**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='start_time')].value is not in the payload
					
					#### **UPDATE_FULFILLMENT_TIME_END**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_time')].list[?(@.code=='end_time')].value is not in the payload
				
				- **TAGS_UPDATE_AGENT_DETAILS** : All the following sub conditions must pass as per the api requirement
				
					#### **AGENT_NAME**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='name')].value is not in the payload
					
					#### **AGENT_PHONE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_agent_details')].list[?(@.code=='phone')].value is not in the payload
				
				- **TAGS_UPDATE_LABEL** : All the following sub conditions must pass as per the api requirement
				
					#### **LABEL_TYPE**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value must be in ["webp", "png", "jpeg", "pdf"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='type')].value is not in the payload
					
					#### **LABEL_URL**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='url')].value is not in the payload
					
					#### **LABEL_SHIPPING**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_label')].list[?(@.code=='shipping')].value is not in the payload
				
				- **TAGS_REVERSEQC_OUTPUT** : All the following sub conditions must pass as per the api requirement
				
					#### **RQC_P001**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P001')].value is not in the payload
					
					#### **RQC_P003**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='P003')].value is not in the payload
					
					#### **RQC_Q001**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value must be in ["yes", "no", "Y", "N"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_output')].list[?(@.code=='Q001')].value is not in the payload
				
				- **TAGS_BNP_RECEIVABLES_CLAIM** : All the following sub conditions must pass as per the api requirement
				
					#### **CLAIM_TYPE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='type')].value is not in the payload
					
					#### **CLAIM_CURRENCY**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='currency')].value is not in the payload
					
					#### **CLAIM_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_receivables_claim')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_BNP_DIFF_WEIGHT** : All the following sub conditions must pass as per the api requirement
				
					#### **DIFF_WEIGHT_UNIT**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value must be in ["unit", "dozen", "gram", "kilogram", "tonne", "litre", "millilitre"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='unit')].value is not in the payload
					
					#### **DIFF_WEIGHT_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_weight')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_BNP_DIFF_LENGTH** : All the following sub conditions must pass as per the api requirement
				
					#### **DIFF_LENGTH_UNIT**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value must be in ["centimeter", "meter"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='unit')].value is not in the payload
					
					#### **DIFF_LENGTH_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_length')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_BNP_DIFF_BREADTH** : All the following sub conditions must pass as per the api requirement
				
					#### **DIFF_BREADTH_UNIT**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='unit')].value is not in the payload
					
					#### **DIFF_BREADTH_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_breadth')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_BNP_DIFF_HEIGHT** : All the following sub conditions must pass as per the api requirement
				
					#### **DIFF_HEIGHT_UNIT**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='unit')].value is not in the payload
					
					#### **DIFF_HEIGHT_VALUE**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='bnp_diff_height')].list[?(@.code=='value')].value is not in the payload
				
				- **TAGS_UPDATE_STATE_TIMESTAMPS** : All the following sub conditions must pass as per the api requirement
				
					#### **STATE_TIMESTAMP**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='timestamp')].value is not in the payload
					
					#### **STATE_START_TIME**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='start_time')].value is not in the payload
					
					#### **STATE_END_TIME**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_state')].list[?(@.code=='end_time')].value is not in the payload
				
				- **TAGS_UPDATE_FULFILLMENT_DELAY** : All the following sub conditions must pass as per the api requirement
				
					#### **DELAY_STATE**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value must be in ["Order-picked-up", "Order-delivered"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='state')].value is not in the payload
					
					#### **DELAY_REASON_ID**
					
					- $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value must be present in the payload
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='reason_id')].value is not in the payload
					
					#### **DELAY_START_TIME**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='start_time')].value is not in the payload
					
					#### **DELAY_END_TIME**
					
					- All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"]
					
					> **Skip if:**
					>
					>     - $.message.order.fulfillments[*].tags[?(@.code=='update_fulfillment_delay')].list[?(@.code=='end_time')].value is not in the payload
				
				#### **TAGS_UPDATE_SALE_INVOICE_URL**
				
				**All of the following must be true:**
				  - $.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value must be present in the payload
				  - All elements of $.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value must follow every regex in ["^https?://.*$"]
				
				> **Skip if:**
				>
				>     - $.message.order.fulfillments[*].tags[?(@.code=='update_sale_invoice')].list[?(@.code=='url')].value is not in the payload
		
		- **ORDER_PAYMENT** : All the following sub conditions must pass as per the api requirement
		
			- **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS** : All the following sub conditions must pass as per the api requirement
			
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_COUNTERPARTY**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_PHASE**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TYPE**
				
				- All elements of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater", "card"]
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_AMOUNT**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_amount must be present in the payload
				
				#### **PAYMENT_ONDC_ORG_SETTLEMENT_DETAILS_SETTLEMENT_TIMESTAMP**
				
				- $.message.order.payment['@ondc/org/settlement_details'][*].settlement_timestamp must be present in the payload