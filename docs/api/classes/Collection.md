[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Collection

# Class: Collection\<T\>

Defined in: [collections/Collection.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L14)

## Type Parameters

### T

`T` *extends* [`EntityType`](../type-aliases/EntityType.md)

## Constructors

### Constructor

> **new Collection**\<`T`\>(`json`, `client`, `opts`): `Collection`\<`T`\>

Defined in: [collections/Collection.ts:26](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L26)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

##### opts

[`CollectionOptions`](../type-aliases/CollectionOptions.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

## Properties

### continuation

> **continuation**: [`CollectionContinuation`](CollectionContinuation.md)\<`T`\> \| `null`

Defined in: [collections/Collection.ts:20](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L20)

***

### items

> **items**: `T`[]

Defined in: [collections/Collection.ts:19](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L19)

***

### type

> `readonly` **type**: `string`

Defined in: [collections/Collection.ts:17](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L17)

***

### type

> `readonly` `static` **type**: `string` = `'Collection'`

Defined in: [collections/Collection.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L16)

## Methods

### getClient()

> `protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

Defined in: [collections/Collection.ts:81](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L81)

#### Returns

[`SoundCloud`](SoundCloud.md)

***

### getItems()

> `protected` **getItems**(): `T`[]

Defined in: [collections/Collection.ts:42](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L42)

#### Returns

`T`[]

***

### getJSON()

#### Call Signature

> **getJSON**(`prop?`): `any`

Defined in: [collections/Collection.ts:71](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L71)

##### Parameters

###### prop?

`undefined`

##### Returns

`any`

#### Call Signature

> **getJSON**\<`T`\>(`prop`): `T` \| `null` \| `undefined`

Defined in: [collections/Collection.ts:72](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L72)

##### Type Parameters

###### T

`T` *extends* `string`

##### Parameters

###### prop

`string`

##### Returns

`T` \| `null` \| `undefined`

#### Call Signature

> **getJSON**\<`T`\>(`prop`): `T` \| `undefined`

Defined in: [collections/Collection.ts:73](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/collections/Collection.ts#L73)

##### Type Parameters

###### T

`T`

##### Parameters

###### prop

`string`

##### Returns

`T` \| `undefined`
