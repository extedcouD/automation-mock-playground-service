export const on_status = {
    additionalProperties: false,
    type: 'object',
    properties: {
        context: {
            description: 'Describes a ONDC message context',
            additionalProperties: false,
            type: 'object',
            properties: {
                domain: {
                    description: 'Codification of domain for ONDC',
                    type: 'string',
                },
                country: {
                    type: 'string',
                    description:
                        'Country code as per ISO 3166 Alpha-3 code format',
                },
                city: {
                    type: 'string',
                    description:
                        "Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'",
                },
                action: {
                    type: 'string',
                    description:
                        'Defines the ONDC API call. Any actions other than the enumerated actions are not supported by ONDC Protocol',
                },
                core_version: {
                    type: 'string',
                    description:
                        'Version of ONDC core API specification being used',
                },
                bap_id: {
                    type: 'string',
                    description:
                        'Unique id of the Buyer App. By default it is the fully qualified domain name of the Buyer App',
                },
                bap_uri: {
                    type: 'string',
                    format: 'uri',
                    description:
                        'URI of the Buyer App for accepting callbacks. Must have the same domain name as the bap_id',
                },
                bpp_id: {
                    type: 'string',
                    description:
                        'Unique id of the Seller App. By default it is the fully qualified domain name of the Seller App, mandatory for all peer-to-peer API requests, i.e. except search and on_search',
                },
                bpp_uri: {
                    type: 'string',
                    format: 'uri',
                    description:
                        'URI of the Seller App. Must have the same domain name as the bap_id, mandatory for all peer-to-peer API requests, i.e. except search and on_search',
                },
                transaction_id: {
                    type: 'string',
                    description:
                        'This is a unique value which persists across all API calls from search through confirm',
                },
                message_id: {
                    type: 'string',
                    description:
                        'This is a unique value which persists during a request / callback cycle',
                },
                timestamp: {
                    type: 'string',
                    format: 'date-time',
                    description: 'Time of request generation in RFC3339 format',
                },
                key: {
                    type: 'string',
                    description: 'The encryption public key of the sender',
                },
                ttl: {
                    type: 'string',
                    description:
                        "Timestamp for which this message holds valid in ISO8601 durations format - Outer limit for ttl for search, select, init, confirm, status, track, cancel, update, rating, support is 'PT30S' which is 30 seconds, different buyer apps can change this to meet their UX requirements, but it shouldn't exceed this outer limit",
                },
            },
        },
        message: {
            type: 'object',
            properties: {
                order: {
                    description: 'Describes the details of an order',
                    additionalProperties: false,
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description:
                                'Unique identifier for Order across the network',
                        },
                        state: {
                            type: 'string',
                        },
                        provider: {
                            additionalProperties: false,
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string',
                                    description: 'Id of the provider',
                                },
                                locations: {
                                    type: 'array',
                                    maxItems: 1,
                                    items: {
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            id: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                                creds: {
                                    type: 'array',
                                    items: {
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            descriptor: {
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    code: {
                                                        type: 'string',
                                                    },
                                                    short_desc: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        items: {
                            type: 'array',
                            items: {
                                description:
                                    'Describes a product or a service offered to the end consumer by the provider',
                                additionalProperties: false,
                                type: 'object',
                                properties: {
                                    id: {
                                        description:
                                            'This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.',
                                        type: 'string',
                                    },
                                    descriptor: {
                                        description:
                                            'Describes the description of a real-world object.',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            tags: {
                                                type: 'array',
                                                items: {
                                                    description:
                                                        'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                    additionalProperties: false,
                                                    type: 'object',
                                                    properties: {
                                                        code: {
                                                            description:
                                                                'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                            type: 'string',
                                                        },
                                                        list: {
                                                            description:
                                                                'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                            type: 'array',
                                                            items: {
                                                                description:
                                                                    'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    code: {
                                                                        description:
                                                                            'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                        type: 'string',
                                                                    },
                                                                    name: {
                                                                        description:
                                                                            'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                        type: 'string',
                                                                    },
                                                                    value: {
                                                                        description:
                                                                            'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                        type: 'string',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    parent_item_id: {
                                        description:
                                            'This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.',
                                        type: 'string',
                                    },
                                    location_id: {
                                        description:
                                            'This is the most unique identifier of a location item.',
                                        type: 'string',
                                    },
                                    fulfillment_id: {
                                        type: 'string',
                                        description:
                                            'Unique reference ID to the fulfillment of an order',
                                    },
                                    fulfillment_ids: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            description:
                                                'Unique reference ID to the fulfillment of an order',
                                        },
                                    },
                                    quantity: {
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            count: {
                                                type: 'integer',
                                                minimum: 0,
                                            },
                                        },
                                    },
                                    tags: {
                                        type: 'array',
                                        items: {
                                            description:
                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                            additionalProperties: false,
                                            type: 'object',
                                            properties: {
                                                code: {
                                                    description:
                                                        'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                    type: 'string',
                                                },
                                                list: {
                                                    description:
                                                        'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                    type: 'array',
                                                    items: {
                                                        description:
                                                            'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            code: {
                                                                description:
                                                                    'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                type: 'string',
                                                            },
                                                            name: {
                                                                description:
                                                                    'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                type: 'string',
                                                            },
                                                            value: {
                                                                description:
                                                                    'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        offers: {
                            type: 'array',
                            items: {
                                description: 'Describes an offer',
                                additionalProperties: false,
                                type: 'object',
                                properties: {
                                    id: {
                                        type: 'string',
                                    },
                                    descriptor: {
                                        description:
                                            'Describes the description of a real-world object.',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            name: {
                                                type: 'string',
                                            },
                                            code: {
                                                type: 'string',
                                            },
                                            symbol: {
                                                type: 'string',
                                            },
                                            short_desc: {
                                                type: 'string',
                                            },
                                            long_desc: {
                                                type: 'string',
                                            },
                                            images: {
                                                type: 'array',
                                                items: {
                                                    description:
                                                        'Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```',
                                                    type: 'string',
                                                },
                                            },
                                            tags: {
                                                type: 'array',
                                                items: {
                                                    description:
                                                        'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                    additionalProperties: false,
                                                    type: 'object',
                                                    properties: {
                                                        code: {
                                                            description:
                                                                'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                            type: 'string',
                                                        },
                                                        list: {
                                                            description:
                                                                'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                            type: 'array',
                                                            items: {
                                                                description:
                                                                    'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    code: {
                                                                        description:
                                                                            'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                        type: 'string',
                                                                    },
                                                                    name: {
                                                                        description:
                                                                            'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                        type: 'string',
                                                                    },
                                                                    value: {
                                                                        description:
                                                                            'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                        type: 'string',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            additional_desc: {
                                                additionalProperties: false,
                                                type: 'object',
                                                description:
                                                    'Additional description of the object. This can be used to send additional information about the object which is not covered in the other fields',
                                                properties: {
                                                    content_type: {
                                                        type: 'string',
                                                        description:
                                                            'Content type of the Instruction.',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    location_ids: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                        },
                                    },
                                    category_ids: {
                                        description:
                                            'Categories this item can be listed under',
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            description:
                                                'Unique id of the category',
                                        },
                                    },
                                    item_ids: {
                                        type: 'array',
                                        items: {
                                            description:
                                                'This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.',
                                            type: 'string',
                                        },
                                    },
                                    time: {
                                        description:
                                            'Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations',
                                        type: 'object',
                                        properties: {
                                            label: {
                                                type: 'string',
                                            },
                                            timestamp: {
                                                type: 'string',
                                                format: 'date-time',
                                            },
                                            range: {
                                                type: 'object',
                                                properties: {
                                                    start: {
                                                        type: 'string',
                                                    },
                                                    end: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                            days: {
                                                type: 'string',
                                                description:
                                                    'comma separated values representing days of the week',
                                            },
                                            schedule: {
                                                description:
                                                    'Describes a schedule',
                                                type: 'object',
                                                properties: {
                                                    frequency: {
                                                        description:
                                                            'Describes duration as per ISO8601 format',
                                                        type: 'string',
                                                    },
                                                    holidays: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string',
                                                            format: 'date',
                                                        },
                                                    },
                                                    times: {
                                                        type: 'array',
                                                        items: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    tags: {
                                        type: 'array',
                                        items: {
                                            description:
                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                            additionalProperties: false,
                                            type: 'object',
                                            properties: {
                                                code: {
                                                    description:
                                                        'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                    type: 'string',
                                                },
                                                list: {
                                                    description:
                                                        'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                    type: 'array',
                                                    items: {
                                                        description:
                                                            'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            code: {
                                                                description:
                                                                    'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                type: 'string',
                                                            },
                                                            name: {
                                                                description:
                                                                    'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                type: 'string',
                                                            },
                                                            value: {
                                                                description:
                                                                    'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        documents: {
                            type: 'array',
                            items: {
                                description:
                                    'Describes a document which can be sent as a url',
                                additionalProperties: false,
                                type: 'object',
                                properties: {
                                    url: {
                                        type: 'string',
                                        format: 'uri',
                                    },
                                    label: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                        billing: {
                            description: 'Describes a billing event',
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                                tax_number: {
                                    description:
                                        'Tax identification number for billing',
                                    type: 'string',
                                },
                                name: {
                                    description:
                                        'Personal details of the customer needed for billing.',
                                    type: 'string',
                                },
                                address: {
                                    description: 'Describes an address',
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: {
                                        name: {
                                            type: 'string',
                                            description:
                                                'Name of address if applicable. Example, shop name',
                                        },
                                        building: {
                                            type: 'string',
                                            description:
                                                'Name of the building or block',
                                        },
                                        street: {
                                            type: 'string',
                                            description:
                                                'Street name or number',
                                        },
                                        locality: {
                                            type: 'string',
                                            description:
                                                'Name of the locality, apartments',
                                        },
                                        city: {
                                            type: 'string',
                                            description: 'City name',
                                        },
                                        state: {
                                            type: 'string',
                                            description: 'State name',
                                        },
                                        country: {
                                            type: 'string',
                                            description: 'Country name',
                                        },
                                        area_code: {
                                            type: 'string',
                                            description:
                                                'Area code. This can be Pincode, ZIP code or any equivalent',
                                        },
                                    },
                                },
                                email: {
                                    type: 'string',
                                    format: 'email',
                                },
                                phone: {
                                    type: 'string',
                                },
                                created_at: {
                                    type: 'string',
                                    format: 'date-time',
                                },
                                updated_at: {
                                    type: 'string',
                                    format: 'date-time',
                                },
                            },
                        },
                        fulfillments: {
                            type: 'array',
                            items: {
                                description:
                                    'Describes how a single product/service will be rendered/fulfilled to the end customer',
                                additionalProperties: false,
                                type: 'object',
                                properties: {
                                    id: {
                                        type: 'string',
                                        description:
                                            'Unique reference ID to the fulfillment of an order',
                                    },
                                    type: {
                                        type: 'string',
                                        description:
                                            'This describes the type of fulfillment ("Pickup" - Buyer picks up from store by themselves or through their logistics provider; "Delivery" - seller delivers to buyer)',
                                    },
                                    '@ondc/org/TAT': {
                                        description:
                                            "fulfillment turnaround time in ISO8601 durations format e.g. 'PT24H' indicates 24 hour TAT",
                                        type: 'string',
                                    },
                                    '@ondc/org/provider_name': {
                                        type: 'string',
                                    },
                                    provider_id: {
                                        type: 'string',
                                    },
                                    vehicle: {
                                        description:
                                            'Describes the properties of a vehicle used in a mobility service',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            registration: {
                                                type: 'string',
                                            },
                                            category: {
                                                type: 'string',
                                            },
                                            size: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                    agent: {
                                        description:
                                            'Describes an order executor',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            name: {
                                                type: 'string',
                                            },
                                            phone: {
                                                type: 'string',
                                            },
                                            email: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                    state: {
                                        description: 'Describes a state',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            descriptor: {
                                                description:
                                                    'Describes the description of a real-world object.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    code: {
                                                        type: 'string',
                                                    },
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    short_desc: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                            updated_at: {
                                                type: 'string',
                                                format: 'date-time',
                                            },
                                        },
                                    },
                                    tracking: {
                                        type: 'boolean',
                                        description:
                                            'Indicates whether the fulfillment allows tracking',
                                        default: false,
                                    },
                                    start: {
                                        description:
                                            'Details on the start of fulfillment',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            location: {
                                                description:
                                                    'Describes the location of a runtime object.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    id: {
                                                        type: 'string',
                                                    },
                                                    descriptor: {
                                                        description:
                                                            'Describes the description of a real-world object.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            code: {
                                                                type: 'string',
                                                            },
                                                            name: {
                                                                type: 'string',
                                                            },
                                                            short_desc: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                    gps: {
                                                        description:
                                                            'Describes a gps coordinate',
                                                        type: 'string',
                                                        pattern:
                                                            '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$',
                                                    },
                                                    address: {
                                                        description:
                                                            'Describes an address',
                                                        type: 'object',
                                                        additionalProperties: false,
                                                        properties: {
                                                            name: {
                                                                type: 'string',
                                                                description:
                                                                    'Name of address if applicable. Example, shop name',
                                                            },
                                                            building: {
                                                                type: 'string',
                                                                description:
                                                                    'Name of the building or block',
                                                            },
                                                            street: {
                                                                type: 'string',
                                                                description:
                                                                    'Street name or number',
                                                            },
                                                            locality: {
                                                                type: 'string',
                                                                description:
                                                                    'Name of the locality, apartments',
                                                            },
                                                            city: {
                                                                type: 'string',
                                                                description:
                                                                    'City name',
                                                            },
                                                            state: {
                                                                type: 'string',
                                                                description:
                                                                    'State name',
                                                            },
                                                            country: {
                                                                type: 'string',
                                                                description:
                                                                    'Country name',
                                                            },
                                                            area_code: {
                                                                type: 'string',
                                                                description:
                                                                    'Area code. This can be Pincode, ZIP code or any equivalent',
                                                            },
                                                        },
                                                    },
                                                    location: {
                                                        description:
                                                            'Describes the location of a runtime object.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            id: {
                                                                type: 'string',
                                                            },
                                                            descriptor: {
                                                                description:
                                                                    'Describes the description of a real-world object.',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    name: {
                                                                        type: 'string',
                                                                    },
                                                                    code: {
                                                                        type: 'string',
                                                                    },
                                                                    symbol: {
                                                                        type: 'string',
                                                                    },
                                                                    short_desc:
                                                                        {
                                                                            type: 'string',
                                                                        },
                                                                    long_desc: {
                                                                        type: 'string',
                                                                    },
                                                                    images: {
                                                                        type: 'array',
                                                                        items: {
                                                                            description:
                                                                                'Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```',
                                                                            type: 'string',
                                                                        },
                                                                    },
                                                                    tags: {
                                                                        type: 'array',
                                                                        items: {
                                                                            description:
                                                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                                            additionalProperties: false,
                                                                            type: 'object',
                                                                            properties:
                                                                                {
                                                                                    code: {
                                                                                        description:
                                                                                            'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                                                        type: 'string',
                                                                                    },
                                                                                    list: {
                                                                                        description:
                                                                                            'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                                                        type: 'array',
                                                                                        items: {
                                                                                            description:
                                                                                                'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                                            additionalProperties: false,
                                                                                            type: 'object',
                                                                                            properties:
                                                                                                {
                                                                                                    code: {
                                                                                                        description:
                                                                                                            'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                                                        type: 'string',
                                                                                                    },
                                                                                                    name: {
                                                                                                        description:
                                                                                                            'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                                                        type: 'string',
                                                                                                    },
                                                                                                    value: {
                                                                                                        description:
                                                                                                            'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                                                        type: 'string',
                                                                                                    },
                                                                                                },
                                                                                        },
                                                                                    },
                                                                                },
                                                                        },
                                                                    },
                                                                    additional_desc:
                                                                        {
                                                                            additionalProperties: false,
                                                                            type: 'object',
                                                                            description:
                                                                                'Additional description of the object. This can be used to send additional information about the object which is not covered in the other fields',
                                                                            properties:
                                                                                {
                                                                                    content_type:
                                                                                        {
                                                                                            type: 'string',
                                                                                            description:
                                                                                                'Content type of the Instruction.',
                                                                                        },
                                                                                },
                                                                        },
                                                                },
                                                            },
                                                            gps: {
                                                                description:
                                                                    'Describes a gps coordinate',
                                                                type: 'string',
                                                                pattern:
                                                                    '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$',
                                                            },
                                                            address: {
                                                                description:
                                                                    'Describes an address',
                                                                type: 'object',
                                                                additionalProperties: false,
                                                                properties: {
                                                                    name: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of address if applicable. Example, shop name',
                                                                    },
                                                                    building: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of the building or block',
                                                                    },
                                                                    street: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Street name or number',
                                                                    },
                                                                    locality: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of the locality, apartments',
                                                                    },
                                                                    city: {
                                                                        type: 'string',
                                                                        description:
                                                                            'City name',
                                                                    },
                                                                    state: {
                                                                        type: 'string',
                                                                        description:
                                                                            'State name',
                                                                    },
                                                                    country: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Country name',
                                                                    },
                                                                    area_code: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Area code. This can be Pincode, ZIP code or any equivalent',
                                                                    },
                                                                },
                                                            },
                                                            city: {
                                                                description:
                                                                    'Describes a city',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    name: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of the city',
                                                                    },
                                                                    code: {
                                                                        type: 'string',
                                                                        description:
                                                                            "Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'",
                                                                    },
                                                                },
                                                            },
                                                            state: {
                                                                description:
                                                                    'Describes a state.',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    name: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of the state',
                                                                    },
                                                                    code: {
                                                                        type: 'string',
                                                                        description:
                                                                            'State code as per ISO 3166 Alpha-2 code format',
                                                                    },
                                                                },
                                                            },
                                                            time: {
                                                                description:
                                                                    'Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations',
                                                                type: 'object',
                                                                properties: {
                                                                    label: {
                                                                        type: 'string',
                                                                    },
                                                                    timestamp: {
                                                                        type: 'string',
                                                                        format: 'date-time',
                                                                    },
                                                                    range: {
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                start: {
                                                                                    type: 'string',
                                                                                },
                                                                                end: {
                                                                                    type: 'string',
                                                                                },
                                                                            },
                                                                    },
                                                                    days: {
                                                                        type: 'string',
                                                                        description:
                                                                            'comma separated values representing days of the week',
                                                                    },
                                                                    schedule: {
                                                                        description:
                                                                            'Describes a schedule',
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                frequency:
                                                                                    {
                                                                                        description:
                                                                                            'Describes duration as per ISO8601 format',
                                                                                        type: 'string',
                                                                                    },
                                                                                holidays:
                                                                                    {
                                                                                        type: 'array',
                                                                                        items: {
                                                                                            type: 'string',
                                                                                            format: 'date',
                                                                                        },
                                                                                    },
                                                                                times: {
                                                                                    type: 'array',
                                                                                    items: {
                                                                                        type: 'string',
                                                                                    },
                                                                                },
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                            circle: {
                                                                description:
                                                                    'Describes a circular area on the map',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    gps: {
                                                                        description:
                                                                            'Describes a gps coordinate',
                                                                        type: 'string',
                                                                        pattern:
                                                                            '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$',
                                                                    },
                                                                    radius: {
                                                                        description:
                                                                            'An object representing a scalar quantity.',
                                                                        additionalProperties: false,
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                type: {
                                                                                    type: 'string',
                                                                                },
                                                                                value: {
                                                                                    type: 'string',
                                                                                },
                                                                                estimated_value:
                                                                                    {
                                                                                        type: 'number',
                                                                                    },
                                                                                computed_value:
                                                                                    {
                                                                                        type: 'number',
                                                                                    },
                                                                                range: {
                                                                                    additionalProperties: false,
                                                                                    type: 'object',
                                                                                    properties:
                                                                                        {
                                                                                            min: {
                                                                                                type: 'number',
                                                                                            },
                                                                                            max: {
                                                                                                type: 'number',
                                                                                            },
                                                                                        },
                                                                                },
                                                                                unit: {
                                                                                    type: 'string',
                                                                                },
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            time: {
                                                description:
                                                    'Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations',
                                                type: 'object',
                                                properties: {
                                                    label: {
                                                        type: 'string',
                                                    },
                                                    timestamp: {
                                                        type: 'string',
                                                        format: 'date-time',
                                                    },
                                                    range: {
                                                        type: 'object',
                                                        properties: {
                                                            start: {
                                                                type: 'string',
                                                            },
                                                            end: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                    days: {
                                                        type: 'string',
                                                        description:
                                                            'comma separated values representing days of the week',
                                                    },
                                                    schedule: {
                                                        description:
                                                            'Describes a schedule',
                                                        type: 'object',
                                                        properties: {
                                                            frequency: {
                                                                description:
                                                                    'Describes duration as per ISO8601 format',
                                                                type: 'string',
                                                            },
                                                            holidays: {
                                                                type: 'array',
                                                                items: {
                                                                    type: 'string',
                                                                    format: 'date',
                                                                },
                                                            },
                                                            times: {
                                                                type: 'array',
                                                                items: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            instructions: {
                                                description:
                                                    'Describes the description of a real-world object.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    code: {
                                                        type: 'string',
                                                    },
                                                    symbol: {
                                                        type: 'string',
                                                    },
                                                    short_desc: {
                                                        type: 'string',
                                                    },
                                                    long_desc: {
                                                        type: 'string',
                                                    },
                                                    images: {
                                                        type: 'array',
                                                        items: {
                                                            description:
                                                                'Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```',
                                                            type: 'string',
                                                        },
                                                    },
                                                    tags: {
                                                        type: 'array',
                                                        items: {
                                                            description:
                                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                            additionalProperties: false,
                                                            type: 'object',
                                                            properties: {
                                                                code: {
                                                                    description:
                                                                        'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                                    type: 'string',
                                                                },
                                                                list: {
                                                                    description:
                                                                        'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                                    type: 'array',
                                                                    items: {
                                                                        description:
                                                                            'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                        additionalProperties: false,
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                code: {
                                                                                    description:
                                                                                        'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                                    type: 'string',
                                                                                },
                                                                                name: {
                                                                                    description:
                                                                                        'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                                    type: 'string',
                                                                                },
                                                                                value: {
                                                                                    description:
                                                                                        'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                                    type: 'string',
                                                                                },
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    additional_desc: {
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        description:
                                                            'Additional description of the object. This can be used to send additional information about the object which is not covered in the other fields',
                                                        properties: {
                                                            content_type: {
                                                                type: 'string',
                                                                description:
                                                                    'Content type of the Instruction.',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            contact: {
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    phone: {
                                                        type: 'string',
                                                    },
                                                    email: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                            person: {
                                                description:
                                                    'Describes a person.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                        description:
                                                            'Describes the name of a person.',
                                                    },
                                                },
                                            },
                                            authorization: {
                                                description:
                                                    'Describes an authorization mechanism',
                                                type: 'object',
                                                additionalProperties: false,
                                                properties: {
                                                    type: {
                                                        type: 'string',
                                                        description:
                                                            'Type of authorization mechanism used',
                                                    },
                                                    token: {
                                                        type: 'string',
                                                        description:
                                                            'Token used for authorization',
                                                    },
                                                    valid_from: {
                                                        type: 'string',
                                                        format: 'date-time',
                                                        description:
                                                            'Timestamp in RFC3339 format from which token is valid',
                                                    },
                                                    valid_to: {
                                                        type: 'string',
                                                        format: 'date-time',
                                                        description:
                                                            'Timestamp in RFC3339 format until which token is valid',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    end: {
                                        description:
                                            'Details on the end of fulfillment',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            location: {
                                                description:
                                                    'Describes the location of a runtime object.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    id: {
                                                        type: 'string',
                                                    },
                                                    descriptor: {
                                                        description:
                                                            'Describes the description of a real-world object.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            code: {
                                                                type: 'string',
                                                            },
                                                            name: {
                                                                type: 'string',
                                                            },
                                                            short_desc: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                    gps: {
                                                        description:
                                                            'Describes a gps coordinate',
                                                        type: 'string',
                                                        pattern:
                                                            '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$',
                                                    },
                                                    address: {
                                                        description:
                                                            'Describes an address',
                                                        type: 'object',
                                                        additionalProperties: false,
                                                        properties: {
                                                            name: {
                                                                type: 'string',
                                                                description:
                                                                    'Name of address if applicable. Example, shop name',
                                                            },
                                                            building: {
                                                                type: 'string',
                                                                description:
                                                                    'Name of the building or block',
                                                            },
                                                            street: {
                                                                type: 'string',
                                                                description:
                                                                    'Street name or number',
                                                            },
                                                            locality: {
                                                                type: 'string',
                                                                description:
                                                                    'Name of the locality, apartments',
                                                            },
                                                            city: {
                                                                type: 'string',
                                                                description:
                                                                    'City name',
                                                            },
                                                            state: {
                                                                type: 'string',
                                                                description:
                                                                    'State name',
                                                            },
                                                            country: {
                                                                type: 'string',
                                                                description:
                                                                    'Country name',
                                                            },
                                                            area_code: {
                                                                type: 'string',
                                                                description:
                                                                    'Area code. This can be Pincode, ZIP code or any equivalent',
                                                            },
                                                        },
                                                    },
                                                    location: {
                                                        description:
                                                            'Describes the location of a runtime object.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            id: {
                                                                type: 'string',
                                                            },
                                                            descriptor: {
                                                                description:
                                                                    'Describes the description of a real-world object.',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    name: {
                                                                        type: 'string',
                                                                    },
                                                                    code: {
                                                                        type: 'string',
                                                                    },
                                                                    symbol: {
                                                                        type: 'string',
                                                                    },
                                                                    short_desc:
                                                                        {
                                                                            type: 'string',
                                                                        },
                                                                    long_desc: {
                                                                        type: 'string',
                                                                    },
                                                                    images: {
                                                                        type: 'array',
                                                                        items: {
                                                                            description:
                                                                                'Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```',
                                                                            type: 'string',
                                                                        },
                                                                    },
                                                                    tags: {
                                                                        type: 'array',
                                                                        items: {
                                                                            description:
                                                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                                            additionalProperties: false,
                                                                            type: 'object',
                                                                            properties:
                                                                                {
                                                                                    code: {
                                                                                        description:
                                                                                            'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                                                        type: 'string',
                                                                                    },
                                                                                    list: {
                                                                                        description:
                                                                                            'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                                                        type: 'array',
                                                                                        items: {
                                                                                            description:
                                                                                                'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                                            additionalProperties: false,
                                                                                            type: 'object',
                                                                                            properties:
                                                                                                {
                                                                                                    code: {
                                                                                                        description:
                                                                                                            'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                                                        type: 'string',
                                                                                                    },
                                                                                                    name: {
                                                                                                        description:
                                                                                                            'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                                                        type: 'string',
                                                                                                    },
                                                                                                    value: {
                                                                                                        description:
                                                                                                            'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                                                        type: 'string',
                                                                                                    },
                                                                                                },
                                                                                        },
                                                                                    },
                                                                                },
                                                                        },
                                                                    },
                                                                    additional_desc:
                                                                        {
                                                                            additionalProperties: false,
                                                                            type: 'object',
                                                                            description:
                                                                                'Additional description of the object. This can be used to send additional information about the object which is not covered in the other fields',
                                                                            properties:
                                                                                {
                                                                                    content_type:
                                                                                        {
                                                                                            type: 'string',
                                                                                            description:
                                                                                                'Content type of the Instruction.',
                                                                                        },
                                                                                },
                                                                        },
                                                                },
                                                            },
                                                            gps: {
                                                                description:
                                                                    'Describes a gps coordinate',
                                                                type: 'string',
                                                                pattern:
                                                                    '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$',
                                                            },
                                                            address: {
                                                                description:
                                                                    'Describes an address',
                                                                type: 'object',
                                                                additionalProperties: false,
                                                                properties: {
                                                                    name: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of address if applicable. Example, shop name',
                                                                    },
                                                                    building: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of the building or block',
                                                                    },
                                                                    street: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Street name or number',
                                                                    },
                                                                    locality: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of the locality, apartments',
                                                                    },
                                                                    city: {
                                                                        type: 'string',
                                                                        description:
                                                                            'City name',
                                                                    },
                                                                    state: {
                                                                        type: 'string',
                                                                        description:
                                                                            'State name',
                                                                    },
                                                                    country: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Country name',
                                                                    },
                                                                    area_code: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Area code. This can be Pincode, ZIP code or any equivalent',
                                                                    },
                                                                },
                                                            },
                                                            city: {
                                                                description:
                                                                    'Describes a city',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    name: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of the city',
                                                                    },
                                                                    code: {
                                                                        type: 'string',
                                                                        description:
                                                                            "Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'",
                                                                    },
                                                                },
                                                            },
                                                            state: {
                                                                description:
                                                                    'Describes a state.',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    name: {
                                                                        type: 'string',
                                                                        description:
                                                                            'Name of the state',
                                                                    },
                                                                    code: {
                                                                        type: 'string',
                                                                        description:
                                                                            'State code as per ISO 3166 Alpha-2 code format',
                                                                    },
                                                                },
                                                            },
                                                            time: {
                                                                description:
                                                                    'Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations',
                                                                type: 'object',
                                                                properties: {
                                                                    label: {
                                                                        type: 'string',
                                                                    },
                                                                    timestamp: {
                                                                        type: 'string',
                                                                        format: 'date-time',
                                                                    },
                                                                    range: {
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                start: {
                                                                                    type: 'string',
                                                                                },
                                                                                end: {
                                                                                    type: 'string',
                                                                                },
                                                                            },
                                                                    },
                                                                    days: {
                                                                        type: 'string',
                                                                        description:
                                                                            'comma separated values representing days of the week',
                                                                    },
                                                                    schedule: {
                                                                        description:
                                                                            'Describes a schedule',
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                frequency:
                                                                                    {
                                                                                        description:
                                                                                            'Describes duration as per ISO8601 format',
                                                                                        type: 'string',
                                                                                    },
                                                                                holidays:
                                                                                    {
                                                                                        type: 'array',
                                                                                        items: {
                                                                                            type: 'string',
                                                                                            format: 'date',
                                                                                        },
                                                                                    },
                                                                                times: {
                                                                                    type: 'array',
                                                                                    items: {
                                                                                        type: 'string',
                                                                                    },
                                                                                },
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                            circle: {
                                                                description:
                                                                    'Describes a circular area on the map',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    gps: {
                                                                        description:
                                                                            'Describes a gps coordinate',
                                                                        type: 'string',
                                                                        pattern:
                                                                            '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$',
                                                                    },
                                                                    radius: {
                                                                        description:
                                                                            'An object representing a scalar quantity.',
                                                                        additionalProperties: false,
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                type: {
                                                                                    type: 'string',
                                                                                },
                                                                                value: {
                                                                                    type: 'string',
                                                                                },
                                                                                estimated_value:
                                                                                    {
                                                                                        type: 'number',
                                                                                    },
                                                                                computed_value:
                                                                                    {
                                                                                        type: 'number',
                                                                                    },
                                                                                range: {
                                                                                    additionalProperties: false,
                                                                                    type: 'object',
                                                                                    properties:
                                                                                        {
                                                                                            min: {
                                                                                                type: 'number',
                                                                                            },
                                                                                            max: {
                                                                                                type: 'number',
                                                                                            },
                                                                                        },
                                                                                },
                                                                                unit: {
                                                                                    type: 'string',
                                                                                },
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            time: {
                                                description:
                                                    'Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations',
                                                type: 'object',
                                                properties: {
                                                    label: {
                                                        type: 'string',
                                                    },
                                                    timestamp: {
                                                        type: 'string',
                                                        format: 'date-time',
                                                    },
                                                    range: {
                                                        type: 'object',
                                                        properties: {
                                                            start: {
                                                                type: 'string',
                                                            },
                                                            end: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                    days: {
                                                        type: 'string',
                                                        description:
                                                            'comma separated values representing days of the week',
                                                    },
                                                    schedule: {
                                                        description:
                                                            'Describes a schedule',
                                                        type: 'object',
                                                        properties: {
                                                            frequency: {
                                                                description:
                                                                    'Describes duration as per ISO8601 format',
                                                                type: 'string',
                                                            },
                                                            holidays: {
                                                                type: 'array',
                                                                items: {
                                                                    type: 'string',
                                                                    format: 'date',
                                                                },
                                                            },
                                                            times: {
                                                                type: 'array',
                                                                items: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            instructions: {
                                                description:
                                                    'Describes the description of a real-world object.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    code: {
                                                        type: 'string',
                                                    },
                                                    symbol: {
                                                        type: 'string',
                                                    },
                                                    short_desc: {
                                                        type: 'string',
                                                    },
                                                    long_desc: {
                                                        type: 'string',
                                                    },
                                                    images: {
                                                        type: 'array',
                                                        items: {
                                                            description:
                                                                'Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```',
                                                            type: 'string',
                                                        },
                                                    },
                                                    tags: {
                                                        type: 'array',
                                                        items: {
                                                            description:
                                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                            additionalProperties: false,
                                                            type: 'object',
                                                            properties: {
                                                                code: {
                                                                    description:
                                                                        'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                                    type: 'string',
                                                                },
                                                                list: {
                                                                    description:
                                                                        'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                                    type: 'array',
                                                                    items: {
                                                                        description:
                                                                            'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                        additionalProperties: false,
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                code: {
                                                                                    description:
                                                                                        'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                                    type: 'string',
                                                                                },
                                                                                name: {
                                                                                    description:
                                                                                        'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                                    type: 'string',
                                                                                },
                                                                                value: {
                                                                                    description:
                                                                                        'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                                    type: 'string',
                                                                                },
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    additional_desc: {
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        description:
                                                            'Additional description of the object. This can be used to send additional information about the object which is not covered in the other fields',
                                                        properties: {
                                                            content_type: {
                                                                type: 'string',
                                                                description:
                                                                    'Content type of the Instruction.',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            contact: {
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    phone: {
                                                        type: 'string',
                                                    },
                                                    email: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                            person: {
                                                description:
                                                    'Describes a person.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                        description:
                                                            'Describes the name of a person.',
                                                    },
                                                },
                                            },
                                            authorization: {
                                                description:
                                                    'Describes an authorization mechanism',
                                                type: 'object',
                                                additionalProperties: false,
                                                properties: {
                                                    type: {
                                                        type: 'string',
                                                        description:
                                                            'Type of authorization mechanism used',
                                                    },
                                                    token: {
                                                        type: 'string',
                                                        description:
                                                            'Token used for authorization',
                                                    },
                                                    valid_from: {
                                                        type: 'string',
                                                        format: 'date-time',
                                                        description:
                                                            'Timestamp in RFC3339 format from which token is valid',
                                                    },
                                                    valid_to: {
                                                        type: 'string',
                                                        format: 'date-time',
                                                        description:
                                                            'Timestamp in RFC3339 format until which token is valid',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    tags: {
                                        type: 'array',
                                        items: {
                                            description:
                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                            additionalProperties: false,
                                            type: 'object',
                                            properties: {
                                                code: {
                                                    description:
                                                        'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                    type: 'string',
                                                },
                                                list: {
                                                    description:
                                                        'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                    type: 'array',
                                                    items: {
                                                        description:
                                                            'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            code: {
                                                                description:
                                                                    'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                type: 'string',
                                                            },
                                                            name: {
                                                                description:
                                                                    'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                type: 'string',
                                                            },
                                                            value: {
                                                                description:
                                                                    'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        cancellation_terms: {
                            description:
                                'The cancellation terms of this order. This can be overriden at the item level cancellation terms.',
                            type: 'array',
                            items: {
                                description:
                                    'Describes the cancellation terms of an item or an order. This can be referenced at an item or order level. Item-level cancellation terms can override the terms at the order level.',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                    fulfillment_state: {
                                        description: 'Describes a state',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            descriptor: {
                                                description:
                                                    'Describes the description of a real-world object.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    code: {
                                                        type: 'string',
                                                    },
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    short_desc: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                            updated_at: {
                                                type: 'string',
                                                format: 'date-time',
                                            },
                                        },
                                    },
                                    cancellation_fee: {
                                        description:
                                            'A fee applied on a particular entity',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            percentage: {
                                                description:
                                                    'Describes a decimal value',
                                                type: 'string',
                                                pattern:
                                                    '[+-]?([0-9]*[.])?[0-9]+',
                                            },
                                            amount: {
                                                description: 'A fixed value',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    currency: {
                                                        type: 'string',
                                                        description:
                                                            "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                    },
                                                    value: {
                                                        description:
                                                            'Describes a decimal value',
                                                        type: 'string',
                                                        pattern:
                                                            '[+-]?([0-9]*[.])?[0-9]+',
                                                    },
                                                    tags: {
                                                        description:
                                                            'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            code: {
                                                                description:
                                                                    'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                                type: 'string',
                                                            },
                                                            list: {
                                                                description:
                                                                    'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                                type: 'array',
                                                                items: {
                                                                    description:
                                                                        'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                    additionalProperties: false,
                                                                    type: 'object',
                                                                    properties:
                                                                        {
                                                                            code: {
                                                                                description:
                                                                                    'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                                type: 'string',
                                                                            },
                                                                            name: {
                                                                                description:
                                                                                    'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                                type: 'string',
                                                                            },
                                                                            value: {
                                                                                description:
                                                                                    'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                                type: 'string',
                                                                            },
                                                                        },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    external_ref: {
                                        description:
                                            'This object contains a url to a media file.',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            mimetype: {
                                                description:
                                                    "indicates the nature and format of the document, file, or assortment of bytes. MIME types are defined and standardized in IETF's RFC 6838",
                                                type: 'string',
                                            },
                                            url: {
                                                description:
                                                    'The URL of the file',
                                                type: 'string',
                                                format: 'uri',
                                            },
                                            signature: {
                                                description:
                                                    'The digital signature of the file signed by the sender',
                                                type: 'string',
                                            },
                                            dsa: {
                                                description:
                                                    'The signing algorithm used by the sender',
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        cancellation: {
                            additionalProperties: false,
                            type: 'object',
                            properties: {
                                cancelled_by: {
                                    type: 'string',
                                    minLength: 1,
                                },
                                reason: {
                                    additionalProperties: false,
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'string',
                                            minLength: 1,
                                        },
                                        state: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                        quote: {
                            description: 'Describes a quote',
                            additionalProperties: false,
                            type: 'object',
                            properties: {
                                price: {
                                    description:
                                        'Describes the price of an item. Allows for domain extension.',
                                    additionalProperties: false,
                                    type: 'object',
                                    properties: {
                                        currency: {
                                            type: 'string',
                                            description:
                                                "ISO 4217 alphabetic currency code e.g. 'INR'",
                                        },
                                        value: {
                                            description:
                                                'Describes a decimal value',
                                            type: 'string',
                                            pattern: '[+-]?([0-9]*[.])?[0-9]+',
                                        },
                                        tags: {
                                            description:
                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                            additionalProperties: false,
                                            type: 'object',
                                            properties: {
                                                code: {
                                                    description:
                                                        'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                    type: 'string',
                                                },
                                                list: {
                                                    description:
                                                        'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                    type: 'array',
                                                    items: {
                                                        description:
                                                            'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            code: {
                                                                description:
                                                                    'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                type: 'string',
                                                            },
                                                            name: {
                                                                description:
                                                                    'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                type: 'string',
                                                            },
                                                            value: {
                                                                description:
                                                                    'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                breakup: {
                                    type: 'array',
                                    items: {
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            '@ondc/org/item_id': {
                                                description:
                                                    'This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.',
                                                type: 'string',
                                            },
                                            '@ondc/org/item_quantity': {
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    count: {
                                                        type: 'integer',
                                                        minimum: 0,
                                                    },
                                                },
                                            },
                                            '@ondc/org/title_type': {
                                                type: 'string',
                                            },
                                            item: {
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    quantity: {
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            available: {
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    count: {
                                                                        type: 'string',
                                                                    },
                                                                },
                                                            },
                                                            maximum: {
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    count: {
                                                                        type: 'string',
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    parent_item_id: {
                                                        description:
                                                            'This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.',
                                                        type: 'string',
                                                    },
                                                    price: {
                                                        description:
                                                            'Describes the price of an item. Allows for domain extension.',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            currency: {
                                                                type: 'string',
                                                                description:
                                                                    "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                            },
                                                            value: {
                                                                description:
                                                                    'Describes a decimal value',
                                                                type: 'string',
                                                                pattern:
                                                                    '[+-]?([0-9]*[.])?[0-9]+',
                                                            },
                                                            tags: {
                                                                description:
                                                                    'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                                additionalProperties: false,
                                                                type: 'object',
                                                                properties: {
                                                                    code: {
                                                                        description:
                                                                            'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                                        type: 'string',
                                                                    },
                                                                    list: {
                                                                        description:
                                                                            'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                                        type: 'array',
                                                                        items: {
                                                                            description:
                                                                                'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                            additionalProperties: false,
                                                                            type: 'object',
                                                                            properties:
                                                                                {
                                                                                    code: {
                                                                                        description:
                                                                                            'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                                        type: 'string',
                                                                                    },
                                                                                    name: {
                                                                                        description:
                                                                                            'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                                        type: 'string',
                                                                                    },
                                                                                    value: {
                                                                                        description:
                                                                                            'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                                        type: 'string',
                                                                                    },
                                                                                },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    tags: {
                                                        type: 'array',
                                                        items: {
                                                            description:
                                                                'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                            additionalProperties: false,
                                                            type: 'object',
                                                            properties: {
                                                                code: {
                                                                    description:
                                                                        'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                                    type: 'string',
                                                                },
                                                                list: {
                                                                    description:
                                                                        'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                                    type: 'array',
                                                                    items: {
                                                                        description:
                                                                            'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                        additionalProperties: false,
                                                                        type: 'object',
                                                                        properties:
                                                                            {
                                                                                code: {
                                                                                    description:
                                                                                        'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                                    type: 'string',
                                                                                },
                                                                                name: {
                                                                                    description:
                                                                                        'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                                    type: 'string',
                                                                                },
                                                                                value: {
                                                                                    description:
                                                                                        'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                                    type: 'string',
                                                                                },
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            title: {
                                                type: 'string',
                                            },
                                            price: {
                                                description:
                                                    'Describes the price of an item. Allows for domain extension.',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    currency: {
                                                        type: 'string',
                                                        description:
                                                            "ISO 4217 alphabetic currency code e.g. 'INR'",
                                                    },
                                                    value: {
                                                        description:
                                                            'Describes a decimal value',
                                                        type: 'string',
                                                        pattern:
                                                            '[+-]?([0-9]*[.])?[0-9]+',
                                                    },
                                                    tags: {
                                                        description:
                                                            'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                                        additionalProperties: false,
                                                        type: 'object',
                                                        properties: {
                                                            code: {
                                                                description:
                                                                    'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                                type: 'string',
                                                            },
                                                            list: {
                                                                description:
                                                                    'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                                type: 'array',
                                                                items: {
                                                                    description:
                                                                        'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                                    additionalProperties: false,
                                                                    type: 'object',
                                                                    properties:
                                                                        {
                                                                            code: {
                                                                                description:
                                                                                    'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                                                type: 'string',
                                                                            },
                                                                            name: {
                                                                                description:
                                                                                    'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                                                type: 'string',
                                                                            },
                                                                            value: {
                                                                                description:
                                                                                    'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                                                type: 'string',
                                                                            },
                                                                        },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            ttl: {
                                                description:
                                                    'Describes duration as per ISO8601 format',
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                                ttl: {
                                    type: 'string',
                                    description:
                                        "Validity of quote in ISO8601 durations format after which it has to be refreshed e.g. 'P7D' indicates validity of 7 days; value of 0 indicates quote is not cacheable",
                                },
                            },
                        },
                        payment: {
                            description: 'Describes a payment',
                            additionalProperties: false,
                            type: 'object',
                            properties: {
                                uri: {
                                    type: 'string',
                                    description:
                                        'A payment uri to be called by the Buyer App. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234',
                                    format: 'uri',
                                },
                                tl_method: {
                                    type: 'string',
                                },
                                params: {
                                    additionalProperties: false,
                                    type: 'object',
                                    properties: {
                                        transaction_id: {
                                            type: 'string',
                                            description:
                                                'This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests',
                                        },
                                        transaction_status: {
                                            type: 'string',
                                        },
                                        amount: {
                                            description:
                                                'Describes a decimal value',
                                            type: 'string',
                                            pattern: '[+-]?([0-9]*[.])?[0-9]+',
                                        },
                                        currency: {
                                            type: 'string',
                                            description:
                                                "ISO 4217 alphabetic currency code e.g. 'INR'",
                                        },
                                    },
                                },
                                type: {
                                    type: 'string',
                                },
                                status: {
                                    type: 'string',
                                },
                                time: {
                                    description:
                                        'Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations',
                                    type: 'object',
                                    properties: {
                                        label: {
                                            type: 'string',
                                        },
                                        timestamp: {
                                            type: 'string',
                                            format: 'date-time',
                                        },
                                        range: {
                                            type: 'object',
                                            properties: {
                                                start: {
                                                    type: 'string',
                                                },
                                                end: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        days: {
                                            type: 'string',
                                            description:
                                                'comma separated values representing days of the week',
                                        },
                                        schedule: {
                                            description: 'Describes a schedule',
                                            type: 'object',
                                            properties: {
                                                frequency: {
                                                    description:
                                                        'Describes duration as per ISO8601 format',
                                                    type: 'string',
                                                },
                                                holidays: {
                                                    type: 'array',
                                                    items: {
                                                        type: 'string',
                                                        format: 'date',
                                                    },
                                                },
                                                times: {
                                                    type: 'array',
                                                    items: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                collected_by: {
                                    type: 'string',
                                },
                                '@ondc/org/buyer_app_finder_fee_type': {
                                    type: 'string',
                                },
                                '@ondc/org/buyer_app_finder_fee_amount': {
                                    description: 'Describes a decimal value',
                                    type: 'string',
                                    pattern: '[+-]?([0-9]*[.])?[0-9]+',
                                },
                                '@ondc/org/withholding_amount': {
                                    description: 'Describes a decimal value',
                                    type: 'string',
                                    pattern: '[+-]?([0-9]*[.])?[0-9]+',
                                },
                                '@ondc/org/return_window': {
                                    description:
                                        "return window for withholding amount in ISO8601 durations format e.g. 'PT24H' indicates 24 hour return window",
                                    type: 'string',
                                },
                                '@ondc/org/settlement_basis': {
                                    description:
                                        'In case of prepaid payment, whether settlement between counterparties should be on the basis of collection, shipment or delivery',
                                    type: 'string',
                                },
                                '@ondc/org/settlement_window': {
                                    description:
                                        "settlement window for the counterparty in ISO8601 durations format e.g. 'PT48H' indicates 48 hour return window",
                                    type: 'string',
                                },
                                tags: {
                                    type: 'array',
                                    items: {
                                        description:
                                            'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            code: {
                                                description:
                                                    'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                                type: 'string',
                                            },
                                            list: {
                                                description:
                                                    'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                                type: 'array',
                                                items: {
                                                    description:
                                                        'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                                    additionalProperties: false,
                                                    type: 'object',
                                                    properties: {
                                                        code: {
                                                            description:
                                                                'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                            type: 'string',
                                                        },
                                                        name: {
                                                            description:
                                                                'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                            type: 'string',
                                                        },
                                                        value: {
                                                            description:
                                                                'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                '@ondc/org/settlement_details': {
                                    type: 'array',
                                    items: {
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            settlement_counterparty: {
                                                type: 'string',
                                            },
                                            settlement_phase: {
                                                type: 'string',
                                            },
                                            settlement_amount: {
                                                type: 'string',
                                            },
                                            settlement_type: {
                                                type: 'string',
                                            },
                                            settlement_bank_account_no: {
                                                type: 'string',
                                            },
                                            settlement_ifsc_code: {
                                                type: 'string',
                                            },
                                            settlement_reference: {
                                                type: 'string',
                                            },
                                            upi_address: {
                                                description:
                                                    'UPI payment address e.g. VPA',
                                                type: 'string',
                                            },
                                            bank_name: {
                                                description: 'Bank name',
                                                type: 'string',
                                            },
                                            branch_name: {
                                                description: 'Branch name',
                                                type: 'string',
                                            },
                                            beneficiary_name: {
                                                description: 'Beneficiary Name',
                                                type: 'string',
                                            },
                                            settlement_status: {
                                                type: 'string',
                                            },
                                            settlement_timestamp: {
                                                description:
                                                    'Settlement transaction timestamp',
                                                type: 'string',
                                                format: 'date-time',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        created_at: {
                            type: 'string',
                            format: 'date-time',
                        },
                        updated_at: {
                            type: 'string',
                            format: 'date-time',
                        },
                        tags: {
                            type: 'array',
                            items: {
                                description:
                                    'A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316',
                                additionalProperties: false,
                                type: 'object',
                                properties: {
                                    code: {
                                        description:
                                            'The machine-readable name of the tag group. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value. Values outside the allowed values may or may not be ignored by the rendering platform. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.',
                                        type: 'string',
                                    },
                                    list: {
                                        description:
                                            'An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.',
                                        type: 'array',
                                        items: {
                                            description:
                                                'Describes a tag. This is a simple key-value store which is used to contain extended metadata. This object can be added as a property to any schema to describe extended attributes. For BAPs, tags can be sent during search to optimize and filter search results. BPPs can use tags to index their catalog to allow better search functionality. Tags are sent by the BPP as part of the catalog response in the `on_search` callback. Tags are also meant for display purposes. Upon receiving a tag, BAPs are meant to render them as name-value pairs. This is particularly useful when rendering tabular information about a product or service.',
                                            additionalProperties: false,
                                            type: 'object',
                                            properties: {
                                                code: {
                                                    description:
                                                        'The machine-readable name of the tag. The allowed values of this property can be published at three levels namely, a) Core specification, b) industry sector-specific adaptations, and c) Network-specific adaptations. Except core, each adaptation (sector or network) should prefix a unique namespace with the allowed value.',
                                                    type: 'string',
                                                },
                                                name: {
                                                    description:
                                                        'The human-readable name of the tag. This set by the BPP and rendered as-is by the BAP. Sometimes, the network policy may reserve some names for this property. Values outside the reserved values can be set by the BPP. However,the BAP may choose to rename or even ignore this value and render the output purely using the `code` property, but it is recommended for BAPs to keep the name same to avoid confusion and provide consistency.',
                                                    type: 'string',
                                                },
                                                value: {
                                                    description:
                                                        'The value of the tag. This set by the BPP and rendered as-is by the BAP.',
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        error: {
            description: 'Describes an error object',
            additionalProperties: false,
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                },
                code: {
                    type: 'string',
                    description:
                        'ONDC specific error code. For full list of error codes, refer to docs/drafts/Error Codes.md of this repo',
                },
                path: {
                    type: 'string',
                    description:
                        'Path to json schema generating the error. Used only during json schema validation errors',
                },
                message: {
                    type: 'string',
                    description: 'Human readable message describing the error',
                },
            },
        },
    },
};
