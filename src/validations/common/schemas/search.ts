export const search = {
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
                intent: {
                    description:
                        'Intent of a user. Used for searching for services. Buyer App can set finder fee type in payment."@ondc/org/buyer_app_finder_fee_type" and amount in "@ondc/org/buyer_app_finder_fee_amount"',
                    additionalProperties: false,
                    type: 'object',
                    properties: {
                        fulfillment: {
                            description:
                                'Describes how a single product/service will be rendered/fulfilled to the end customer',
                            additionalProperties: false,
                            type: 'object',
                            properties: {
                                type: {
                                    type: 'string',
                                    description:
                                        'This describes the type of fulfillment ("Pickup" - Buyer picks up from store by themselves or through their logistics provider; "Delivery" - seller delivers to buyer)',
                                },
                                end: {
                                    description:
                                        'Details on the end of fulfillment',
                                    additionalProperties: false,
                                    type: 'object',
                                    properties: {
                                        location: {
                                            description: 'Describes an address',
                                            additionalProperties: false,
                                            type: 'object',
                                            properties: {
                                                address: {
                                                    additionalProperties: false,
                                                    type: 'object',
                                                    description:
                                                        'Address object',
                                                    properties: {
                                                        area_code: {
                                                            type: 'string',
                                                            description:
                                                                'Area code. This can be Pincode, ZIP code or any equivalent',
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
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        payment: {
                            description:
                                'Describes a payment in search intent.',
                            additionalProperties: false,
                            type: 'object',
                            properties: {
                                '@ondc/org/buyer_app_finder_fee_type': {
                                    type: 'string',
                                },
                                '@ondc/org/buyer_app_finder_fee_amount': {
                                    description: 'Describes a decimal value',
                                    type: 'string',
                                    pattern: '[+-]?([0-9]*[.])?[0-9]+',
                                },
                            },
                        },
                        category: {
                            description: 'Describes a category',
                            additionalProperties: false,
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string',
                                    description: 'Unique id of the category',
                                },
                            },
                        },
                        item: {
                            description: 'Describes a item',
                            additionalProperties: false,
                            type: 'object',
                            properties: {
                                descriptor: {
                                    additionalProperties: false,
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
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
        },
    },
};
