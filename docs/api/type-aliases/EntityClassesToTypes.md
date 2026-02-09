[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / EntityClassesToTypes

# Type Alias: EntityClassesToTypes\<K\>

> **EntityClassesToTypes**\<`K`\> = `K` *extends* [`EntityConstructor`](../interfaces/EntityConstructor.md)\<infer U\> ? `U` : `K` *extends* [`EntityConstructor`](../interfaces/EntityConstructor.md)\<infer U\>[] ? `U` : `never`

Defined in: [utils/EntityTypes.ts:32](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/utils/EntityTypes.ts#L32)

## Type Parameters

### K

`K`
