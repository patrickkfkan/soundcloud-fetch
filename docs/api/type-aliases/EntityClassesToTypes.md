[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / EntityClassesToTypes

# Type Alias: EntityClassesToTypes\<K\>

> **EntityClassesToTypes**\<`K`\> = `K` *extends* [`EntityConstructor`](../interfaces/EntityConstructor.md)\<infer U\> ? `U` : `K` *extends* [`EntityConstructor`](../interfaces/EntityConstructor.md)\<infer U\>[] ? `U` : `never`

Defined in: [utils/EntityTypes.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/utils/EntityTypes.ts#L30)

## Type Parameters

### K

`K`
