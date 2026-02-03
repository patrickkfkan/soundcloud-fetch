[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / CollectionContinuation

# Class: CollectionContinuation\<T\>

Defined in: [collections/CollectionContinuation.ts:4](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/CollectionContinuation.ts#L4)

## Type Parameters

### T

`T` *extends* [`EntityType`](../type-aliases/EntityType.md)

## Constructors

### Constructor

> **new CollectionContinuation**\<`T`\>(`uri`, `opts`): `CollectionContinuation`\<`T`\>

Defined in: [collections/CollectionContinuation.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/CollectionContinuation.ts#L8)

#### Parameters

##### uri

`string`

##### opts

[`CollectionOptions`](../type-aliases/CollectionOptions.md)\<`T`\> = `{}`

#### Returns

`CollectionContinuation`\<`T`\>

## Properties

### opts

> `readonly` **opts**: [`CollectionOptions`](../type-aliases/CollectionOptions.md)\<`T`\>

Defined in: [collections/CollectionContinuation.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/CollectionContinuation.ts#L6)

***

### uri

> `readonly` **uri**: `string`

Defined in: [collections/CollectionContinuation.ts:5](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/CollectionContinuation.ts#L5)

## Methods

### parse()

> `static` **parse**(`data`): `CollectionContinuation`\<[`EntityType`](../type-aliases/EntityType.md)\> \| `null`

Defined in: [collections/CollectionContinuation.ts:46](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/CollectionContinuation.ts#L46)

#### Parameters

##### data

`string`

#### Returns

`CollectionContinuation`\<[`EntityType`](../type-aliases/EntityType.md)\> \| `null`

***

### stringify()

> `static` **stringify**\<`T`\>(`data`): `string`

Defined in: [collections/CollectionContinuation.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/CollectionContinuation.ts#L13)

#### Type Parameters

##### T

`T` *extends* [`EntityType`](../type-aliases/EntityType.md)

#### Parameters

##### data

`CollectionContinuation`\<`T`\>

#### Returns

`string`
