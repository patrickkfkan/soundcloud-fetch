[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / EntityClassesToTypes

# Type Alias: EntityClassesToTypes\<K\>

> **EntityClassesToTypes**\<`K`\> = `K` *extends* [`EntityConstructor`](../interfaces/EntityConstructor.md)\<infer U\> ? `U` : `K` *extends* [`EntityConstructor`](../interfaces/EntityConstructor.md)\<infer U\>[] ? `U` : `never`

Defined in: [utils/EntityTypes.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/utils/EntityTypes.ts#L30)

## Type Parameters

### K

`K`
