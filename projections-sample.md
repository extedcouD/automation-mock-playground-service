projections sample

```json
"full#ONDC:RET10#std:080#bpp_id.com#bap_id.com#provider_id": *catalog*
full#ONDC:RET10#std:080#bpp_id.com#gcr_id.com#provider_id
inc#ONDC:RET10#*#bpp_id.com#bap_id.com#unique_id

"Policy#ONDC:RET10#std:080#bap_id.com": [
    {
        "bpp_id": "bpp_id.com",
        "bpp_uri": "https://bpp_id.com/projections",
        <!-- "providers": [
            {
                "id": "provider_id",
            }
        ], -->
    }
]

registry[{
    domain: ONDC:RET10,
    city:"std:080,std:011",
    bpp_id:"bpp_id.com",
    bpp_uri:"https://bpp_id.com/",
    signing_public_key:"<public key>"
    }]

```
####

**Full Catalog**
> Receive /search request from BAP
> forward search request NP
> Start MoR the redis full projections for NPs for which ACK is received


POST /trigger/on_search
body: {
    bap_id:
    bap_uri:
    transaction_id:
    message_id:
    domain:
    core_version:
    city:
    country:
}


 =
