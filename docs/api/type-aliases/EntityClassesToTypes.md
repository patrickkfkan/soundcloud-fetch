[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / EntityClassesToTypes

# Type Alias: EntityClassesToTypes\<K\>

> **EntityClassesToTypes**\<`K`\> = `K` *extends* [`EntityConstructor`](../interfaces/EntityConstructor.md)\<infer U\> ? `U` : `K` *extends* [`EntityConstructor`](../interfaces/EntityConstructor.md)\<infer U\>[] ? `U` : `never`

Defined in: [utils/EntityTypes.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/utils/EntityTypes.ts#L30)

## Type Parameters

### K

`K`
