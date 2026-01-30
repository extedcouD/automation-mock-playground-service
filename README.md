
## GCR Reader poc

1. ingest /search from buyer app
    1. validate (l0,l1,authorization header)
    2. audit log
    3. ack 
2. respond with on_search from redis
    1. generic redis
    2. buyer specific redis

3. error handling 


## data model saved in cache

```json
{
    
}
```