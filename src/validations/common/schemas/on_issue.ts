export const on_issue = {
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
                issue: {
                    description:
                        '*  Describes the Issue/complaint raised for a particular order, transaction or fulfillment or item for which an issue is faced by the buyer.\n* It also describes the Issue/complaint raised by the network participants to its conuter party or casacaded counterparty apps as and when applicable\n* Describes the issue when it is escalated as a Grievance or a Dispute\n*  supplementary Information  Describes and details evidence of the information about the issue . When the complainant or respondent seeks an issue update the addtional information about the update are populated as part of the supplementary information. \n  the supplementary information section , details information including but not limited to any of the following or more: \n    * comments from the complaintant/ respondent for seeking more information about the issue\n    * comments from the complaintant/ respondent providing the update on the issue with more information on the issue \n    * Picutres providing further information about the issue\n    * documents attachment/links providing further information about the issue etc\n',
                    type: 'object',
                    properties: {
                        id: {
                            description:
                                '* Network issue identifier is an unique number assigned to any complaint by the interfacing application at the source.\n\n* **During the life cycle of a complaint, this number will not change and will be communicated to counterparty application.**\n\n* Any subsequent issues created with the interfacing,counterpary or casacaded counter party apps are responsible for providing the correalted and relevant network-issue-id which helps all this inteacting systems to traverse back to the main issue.\n',
                            type: 'string',
                        },
                        complainant_info: {
                            description:
                                '- Describes an entity that raises a complaint with an interfacing app. \n- The complainant may be an end user (buyer or seller) or a network participant (buyer app/ seller app/ logistic services  provider app)\n',
                            type: 'object',
                            properties: {
                                person: {
                                    description: 'Describes a person.',
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
                                contact: {
                                    allOf: [
                                        {
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
                                        {
                                            type: 'object',
                                        },
                                    ],
                                },
                            },
                            additionalProperties: false,
                        },
                        category: {
                            description:
                                'Identifies what is the category of this issue\n### CATEGORIES:\n1. Order : Indicactes that the issue is related to  Order.\n2. Transaction : Indicactes that the issue is related to  Transaction.\n3. Fulfillment : Indicactes that the issue is related to  Fulfillment.\n4. Product : Indicactes that the issue is related to  Product.\n5. Product Service : Indicactes that the issue is related to  Product Service.\n6. Service : Indicactes that the issue is related to  Service.\n7. Payment : Indicactes that the issue is related to  Payments.\n',
                            type: 'string',
                        },
                        sub_category: {
                            description:
                                'Identifies what is the sub-category of this issue',
                            type: 'string',
                        },
                        level: {
                            description: 'Describes the level of a issue',
                            type: 'string',
                        },
                        issue_type: {
                            description:
                                'identifies the type of the issue raised\n* the complainant being raised can be a regular ```Issue```, \n* which then subsequently can be escalated to be a ```Grievance``` \n* which may be further escalated to be a ```Dispute```\n',
                            type: 'string',
                        },
                        source: {
                            description: 'source of the issue',
                            type: 'object',
                            properties: {
                                network_participant_id: {
                                    type: 'string',
                                    description:
                                        'unique identifier of the network participant of the source of this issue. It can be one of buyer-id in the buyer- interfacing app , or any of the relevant network provider id based on what causes the issue',
                                },
                                type: {
                                    description:
                                        'Indicates the source from where the issue is raised. \n### TYPES\n    1. Consumer : indicating that the Consumer(Buyer) of a product or a service has raised the issue\n    2. Seller : indicating that the Seller of a product or a service has raised the issue\n    3. Intefacing NP : indicating that the Interfacing NP has identified and raised the issue\n',
                                    type: 'string',
                                },
                            },
                            additionalProperties: false,
                        },
                        expected_response_time: {
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
                        expected_resolution_time: {
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
                        status: {
                            description:
                                '### Statues\n  1. Open : indicating that the issue is opened and further action is yet to be taken on the issue\n  2. CLOSED : indicating that the issue is closed and no further action/update/info/resolution action/status change are expected/accepted on this issue.\n',
                            type: 'string',
                        },
                        issue_actions: {
                            description:
                                'Status of the issue updated by respondent or the complainant\nThe issue may attain different status based on its lifecycle. TODO add info of enums in here and in issue-source\n',
                            type: 'object',
                            properties: {
                                complainant_actions: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            complainant_action: {
                                                description:
                                                    "Describes the action taken by the complainant who has raised the issue. \nthe value should be populated when the complainant has taken any of the below actions to anotate the action taken. the actions can be, \n### Actions\n1. Complainant can ```open``` the issue if he isn't satisfied with the products or services he has purchased or used \n2. Complainant can ```escalate``` the issue if he isn't satisfied with the issue resolution\n3. Complainant can ```close``` the issue if he doesn't expect any more additonal action on the issue and he is satisfied with the resolution/actions taken on the issue till the time of closure of the issue.\n",
                                                type: 'string',
                                            },
                                            updated_at: {
                                                description:
                                                    'timestamp for the capturing the time an issue status was last updated',
                                                type: 'string',
                                                format: 'date-time',
                                            },
                                            updated_by: {
                                                description:
                                                    'Describes an organization',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    cred: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                            short_desc: {
                                                description:
                                                    'details of the remarks when the issue status is changed, can be captured when the complainant triggers an action',
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                                respondent_actions: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            respondent_action: {
                                                type: 'string',
                                            },
                                            updated_at: {
                                                description:
                                                    'timestamp for the capturing the time an issue status was last updated',
                                                type: 'string',
                                                format: 'date-time',
                                            },
                                            updated_by: {
                                                description:
                                                    'Describes an organization',
                                                additionalProperties: false,
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    cred: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                            short_desc: {
                                                description:
                                                    'details of the remarks when the issue status is changed, can be captured when the respondent triggers an action',
                                                type: 'string',
                                            },
                                            cascaded_level: {
                                                description:
                                                    'the default value will be 1, whenever the issue will be cascaded to the next level the value of this field should be incremented by 1 it will upgrade it indicates to the next sub-level.',
                                                type: 'integer',
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                            },
                            additionalProperties: false,
                        },
                        selected_odrs_info: {
                            description:
                                'details of the ODRs selected by the resolution provider .\none of this would be subsequently finalized to be the ODR resposbile to resolve the issue . \nThis is a required object if and when the issue type is "Dispute"\n',
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    respondent_info: {
                                        description:
                                            'Describes an organization',
                                        additionalProperties: false,
                                        type: 'object',
                                        properties: {
                                            name: {
                                                type: 'string',
                                            },
                                            cred: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                    odrs: {
                                        type: 'array',
                                        items: {
                                            description:
                                                '* Describes the details of the Online Dispute Resolution Provider.\nODR Service Providers (ODR SP) via dispute resolution methods such as mediation/ conciliation and/or arbitration, will attempt to resolve disputes\nNOTE : ```ODR``` stands for Online Dispute Resolution.\n* May also describe the details of the ODR finalized or identified by the intefacing app, to whom the issue will be assigned for resolution.\n',
                                            type: 'object',
                                            properties: {
                                                name: {
                                                    description:
                                                        'Name of the ODR provider',
                                                    type: 'string',
                                                },
                                                short_desc: {
                                                    description:
                                                        'Information about the ODR provider',
                                                    type: 'string',
                                                },
                                                long_desc: {
                                                    description:
                                                        'Detailed information about the ODR provider',
                                                    type: 'string',
                                                },
                                                url: {
                                                    description:
                                                        'URL link to the ODR provider',
                                                    type: 'string',
                                                },
                                                organization: {
                                                    description:
                                                        'Describes an organization',
                                                    additionalProperties: false,
                                                    type: 'object',
                                                    properties: {
                                                        name: {
                                                            type: 'string',
                                                        },
                                                        cred: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                pricing_model: {
                                                    description:
                                                        'Details of the pricing modle of the ODR',
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
                                                                    pattern:
                                                                        '[+-]?([0-9]*[.])?[0-9]+',
                                                                },
                                                                tags: {
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
                                                        },
                                                        pricing_info: {
                                                            description:
                                                                'addtional information about the pricing model',
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        finalized_odr: {
                            description:
                                '* Describes the details of the Online Dispute Resolution Provider.\nODR Service Providers (ODR SP) via dispute resolution methods such as mediation/ conciliation and/or arbitration, will attempt to resolve disputes\nNOTE : ```ODR``` stands for Online Dispute Resolution.\n* May also describe the details of the ODR finalized or identified by the intefacing app, to whom the issue will be assigned for resolution.\n',
                            type: 'object',
                            properties: {
                                name: {
                                    description: 'Name of the ODR provider',
                                    type: 'string',
                                },
                                short_desc: {
                                    description:
                                        'Information about the ODR provider',
                                    type: 'string',
                                },
                                long_desc: {
                                    description:
                                        'Detailed information about the ODR provider',
                                    type: 'string',
                                },
                                url: {
                                    description: 'URL link to the ODR provider',
                                    type: 'string',
                                },
                                organization: {
                                    description: 'Describes an organization',
                                    additionalProperties: false,
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                        },
                                        cred: {
                                            type: 'string',
                                        },
                                    },
                                },
                                pricing_model: {
                                    description:
                                        'Details of the pricing modle of the ODR',
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
                                        pricing_info: {
                                            description:
                                                'addtional information about the pricing model',
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                            additionalProperties: false,
                        },
                        refs: {
                            description: 'will give bref about refs',
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    ref_id: {
                                        type: 'string',
                                    },
                                    ref_type: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                        actors: {
                            description:
                                'Describes the actors involved in the transaction',
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: {
                                        description:
                                            'Describes id of the actors that are their',
                                        type: 'string',
                                    },
                                    type: {
                                        description:
                                            'Describes the type of actor',
                                        type: 'string',
                                    },
                                    info: {
                                        description:
                                            'Describes the information about actor',
                                        type: 'object',
                                        properties: {
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
                                            org: {
                                                type: 'object',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        source_id: {
                            description: 'Describes the source of the issue',
                            type: 'string',
                        },
                        complainant_id: {
                            description: 'Describes the complainant id',
                            type: 'string',
                        },
                        respondent_ids: {
                            description: 'Describes the respondent id',
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                        resolver_ids: {
                            description: 'Describes the resolver id',
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                        descriptor: {
                            description:
                                'Describes the description of a real-world object.',
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
                                additional_desc: {
                                    type: 'object',
                                    properties: {
                                        url: {
                                            type: 'string',
                                        },
                                        content_type: {
                                            type: 'string',
                                        },
                                    },
                                    additionalProperties: false,
                                },
                                images: {
                                    type: 'array',
                                    items: {
                                        description:
                                            'Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```',
                                        type: 'object',
                                        properties: {
                                            url: {
                                                type: 'string',
                                                format: 'uri',
                                            },
                                            size_type: {
                                                type: 'string',
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                                audio: {
                                    type: 'string',
                                    format: 'uri',
                                },
                                '3d_render': {
                                    type: 'string',
                                    format: 'uri',
                                },
                                tags: {
                                    description:
                                        'A list of tags containing any additional information sent along with the Acknowledgement.',
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
                            additionalProperties: false,
                        },
                        last_action_id: {
                            description: 'Describes the last action id',
                            type: 'string',
                        },
                        actions: {
                            description:
                                'Describes the actions taken on the issue',
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: {
                                        description:
                                            'Describes id of the action',
                                        type: 'string',
                                    },
                                    ref_id: {
                                        description:
                                            'Describes the reference id',
                                        type: 'string',
                                    },
                                    ref_type: {
                                        description:
                                            'Describes the refence type',
                                        type: 'string',
                                    },
                                    descriptor: {
                                        allOf: [
                                            {
                                                description:
                                                    'Describes the description of a real-world object.',
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
                                                    additional_desc: {
                                                        type: 'object',
                                                        properties: {
                                                            url: {
                                                                type: 'string',
                                                            },
                                                            content_type: {
                                                                type: 'string',
                                                            },
                                                        },
                                                        additionalProperties: false,
                                                    },
                                                    images: {
                                                        type: 'array',
                                                        items: {
                                                            description:
                                                                'Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```',
                                                            type: 'object',
                                                            properties: {
                                                                url: {
                                                                    type: 'string',
                                                                    format: 'uri',
                                                                },
                                                                size_type: {
                                                                    type: 'string',
                                                                },
                                                            },
                                                            additionalProperties: false,
                                                        },
                                                    },
                                                    audio: {
                                                        type: 'string',
                                                        format: 'uri',
                                                    },
                                                    '3d_render': {
                                                        type: 'string',
                                                        format: 'uri',
                                                    },
                                                    tags: {
                                                        description:
                                                            'A list of tags containing any additional information sent along with the Acknowledgement.',
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
                                                additionalProperties: false,
                                            },
                                            {
                                                type: 'object',
                                                properties: {
                                                    code: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                    updated_at: {
                                        type: 'string',
                                        format: 'date-time',
                                        description:
                                            'Timestamp in RFC3339 format when the action was updated',
                                    },
                                    action_by: {
                                        type: 'string',
                                        description:
                                            'Describes the actor who performed the action',
                                    },
                                    actor_details: {
                                        type: 'object',
                                        properties: {
                                            name: {
                                                description:
                                                    'Describes id of the actor',
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        resolution_provider: {
                            description:
                                'Describes the details of the entity that provides the resolution for the issue',
                            type: 'object',
                            properties: {
                                respondent_info: {
                                    description:
                                        'the respondent represents the details of the entity identfied by the resolution provider or the complainant himself (when he has to select the ODRs)',
                                    type: 'object',
                                    properties: {
                                        type: {
                                            description:
                                                'Indicates the type of the resolution provider NP type.\n### TYPES\n1. Interfacing NP : indicating the NP where or through which the issue is raised\n2. Transaction Counterparty NP : indicating the first level of transaction counterparty network provider with which the interfacing NP is interacting with to get an issue resolution.\n3. Cascaded Counterparty NP : indicating the second or any further downstream levels of counterparty network provider with which the NP is interacting with to get an issue resolution.\n',
                                            type: 'string',
                                        },
                                        organization: {
                                            description:
                                                'Describes an organization',
                                            additionalProperties: false,
                                            type: 'object',
                                            properties: {
                                                name: {
                                                    type: 'string',
                                                },
                                                cred: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                        resolution_support: {
                                            description:
                                                'Any one of these resolution support deatils are mandatory to be speficed whenever an issue resolution is proposed.\nIn case of Issue, Either a respondent ChatLink, email or faq deatils should be provided or any of the additional sources of support should be provided\nIn case of Grievance : the GRO details are manadatory to be provided \nIn case of Dispute : the selected ODR details are mandatory to be provided \nPorvides details of the resolution support for the respondent / complainant to interact with the respondent\n',
                                            type: 'object',
                                            properties: {
                                                chat_link: {
                                                    description:
                                                        'chatbot link for the respondent for complainant to interact with the respondent',
                                                    type: 'string',
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
                                                faqs: {
                                                    description:
                                                        'frequently asked questions for the respondent for complainant to get information as required',
                                                    type: 'array',
                                                    items: {
                                                        type: 'object',
                                                        description: 'faqs\n',
                                                        properties: {
                                                            question: {
                                                                type: 'string',
                                                            },
                                                            answer: {
                                                                type: 'string',
                                                            },
                                                        },
                                                        additionalProperties: false,
                                                    },
                                                },
                                                additional_sources: {
                                                    type: 'array',
                                                    items: {
                                                        description:
                                                            'the resolution source provide details of any addtional resolution resources thier types and a link eg : AI enabled chatbot, support/contact webpage link , lnik to IVR detials etc\n',
                                                        type: 'object',
                                                        properties: {
                                                            type: {
                                                                type: 'string',
                                                            },
                                                            link: {
                                                                type: 'string',
                                                            },
                                                        },
                                                        additionalProperties: false,
                                                    },
                                                },
                                                gros: {
                                                    description:
                                                        'Details of the GRO appointed by the resolution provider to support in issue resolution .\nThis is a required object if and when the issue type is "Grievance"\n',
                                                    type: 'array',
                                                    items: {
                                                        description:
                                                            'Grievance Redressal Officer is appointed by each network participant (buyer app, seller app, logistic provider app) for consumer grievance redressal\nDetails of the GRO appointed by the resolution provider to support in issue resolution .\nThis is a required object if and when the issue type is "Grievance"\n',
                                                        type: 'object',
                                                        properties: {
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
                                                            gro_type: {
                                                                type: 'string',
                                                                description:
                                                                    'Indicates the system through which the GRO is assigned to this issue. \n### TYPES\n    1. Intefacing NP GRO : indicating the GRO is assigned by the NP where or through which the issue is raised\n    2. Transaction Counterparty NP GRO : indicating the GRO is assigned by the first level of counterparty network provider with which the interfacing NP is interacting with to get an issue resolution.\n    3. Cascaded Counterparty NP GRO : indicating the GRO is assigned by the second or any further downstream levels of counterparty network provider, with which the NP is interacting with, to get an issue resolution.\n',
                                                            },
                                                        },
                                                        additionalProperties: false,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        resolutions: {
                            description:
                                'Describes the actions taken on the issue',
                            type: 'array',
                            items: {
                                description:
                                    'Describes the issue resolution for the issue raised by a Complainant',
                                type: 'object',
                                properties: {
                                    short_desc: {
                                        description: 'resolution',
                                        type: 'string',
                                    },
                                    long_desc: {
                                        description:
                                            'remarks of the resolution of the issue by the respondent',
                                        type: 'string',
                                    },
                                    gro_remarks: {
                                        description:
                                            'resolution remarks provided by the gro',
                                        type: 'string',
                                    },
                                    odr_remarks: {
                                        description:
                                            'remarks of the result of the dispute, if applicable',
                                        type: 'string',
                                    },
                                    action_triggered: {
                                        type: 'string',
                                    },
                                    action: {
                                        description:
                                            'Indicactes the action taken while addressing the issue.\n ### Actions\n  1. resolve : indicating the issue being resolved. \n  2. reject : indicating that the issue is rejected by the respondent or the resolution provider.\n',
                                        type: 'string',
                                    },
                                    refund_amount: {
                                        type: 'string',
                                    },
                                    id: {
                                        description:
                                            'unique identifier of the issue resolution',
                                        type: 'string',
                                    },
                                    proposed_by: {
                                        type: 'string',
                                    },
                                    updated_at: {
                                        description:
                                            'timestamp for the capturing the time an issue resolution was last updated',
                                        type: 'string',
                                        format: 'date-time',
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
                                    tags: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                descriptor: {
                                                    type: 'object',
                                                },
                                                list: {
                                                    type: 'array',
                                                    items: {
                                                        type: 'object',
                                                        properties: {
                                                            descriptor: {
                                                                type: 'object',
                                                                properties: {
                                                                    code: {
                                                                        type: 'string',
                                                                    },
                                                                },
                                                                additionalProperties: false,
                                                            },
                                                            value: {
                                                                type: 'string',
                                                            },
                                                        },
                                                        additionalProperties: false,
                                                    },
                                                },
                                            },
                                            additionalProperties: false,
                                        },
                                    },
                                    ref_id: {
                                        description:
                                            'Describes the reference id',
                                        type: 'string',
                                    },
                                    ref_type: {
                                        description:
                                            'Describes the type of reference',
                                        type: 'string',
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        additional_info_required: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    info_required: {
                                        type: 'object',
                                        properties: {
                                            updated_at: {
                                                description:
                                                    'timestamp for the capturing the time an issue was last updated',
                                                type: 'string',
                                                format: 'date-time',
                                            },
                                            message_id: {
                                                type: 'string',
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                    info_provided: {
                                        type: 'object',
                                        properties: {
                                            updated_at: {
                                                description:
                                                    'timestamp for the capturing the time an issue was last updated',
                                                type: 'string',
                                                format: 'date-time',
                                            },
                                            message_id: {
                                                type: 'string',
                                            },
                                        },
                                        additionalProperties: false,
                                    },
                                },
                            },
                        },
                        created_at: {
                            description:
                                'timestamp for the creation of the issue',
                            type: 'string',
                            format: 'date-time',
                        },
                        updated_at: {
                            description:
                                'timestamp for the capturing the time an issue was last updated',
                            type: 'string',
                            format: 'date-time',
                        },
                    },
                    additionalProperties: false,
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
