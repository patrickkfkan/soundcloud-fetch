[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Selection

# Class: Selection

Defined in: [entities/Selection.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Selection.ts#L6)

## Extends

- [`Entity`](Entity.md)

## Constructors

### Constructor

> **new Selection**(`json`, `client`): `Selection`

Defined in: [entities/Selection.ts:15](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Selection.ts#L15)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`Selection`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### id?

> `optional` **id**: `string` \| `null`

Defined in: [entities/Selection.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Selection.ts#L10)

***

### items

> **items**: [`EntityType`](../type-aliases/EntityType.md)[]

Defined in: [entities/Selection.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Selection.ts#L13)

***

### nextUri?

> `optional` **nextUri**: `string` \| `null`

Defined in: [entities/Selection.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Selection.ts#L12)

***

### title?

> `optional` **title**: `string` \| `null`

Defined in: [entities/Selection.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Selection.ts#L11)

***

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:36](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L36)

#### Inherited from

[`Entity`](Entity.md).[`type`](Entity.md#type)

***

### type

> `static` **type**: `string` = `'Selection'`

Defined in: [entities/Selection.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Selection.ts#L8)

#### Overrides

[`Entity`](Entity.md).[`type`](Entity.md#type-1)

## Methods

### getClient()

> `protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

Defined in: [entities/Entity.ts:60](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L60)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[`Entity`](Entity.md).[`getClient`](Entity.md#getclient)

***

### getImageUrls()

#### Call Signature

> `protected` **getImageUrls**(`defaultImageUrl`, `type`): [`AvatarImageUrls`](../type-aliases/AvatarImageUrls.md) \| `undefined`

Defined in: [entities/Entity.ts:64](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L64)

##### Parameters

###### defaultImageUrl

`string` | `null` | `undefined`

###### type

`"avatar"`

##### Returns

[`AvatarImageUrls`](../type-aliases/AvatarImageUrls.md) \| `undefined`

##### Inherited from

[`Entity`](Entity.md).[`getImageUrls`](Entity.md#getimageurls)

#### Call Signature

> `protected` **getImageUrls**(`defaultImageUrl`, `type?`): [`ArtworkImageUrls`](../type-aliases/ArtworkImageUrls.md) \| `undefined`

Defined in: [entities/Entity.ts:65](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L65)

##### Parameters

###### defaultImageUrl

`string` | `null` | `undefined`

###### type?

`"artwork"` | `"artistStation"`

##### Returns

[`ArtworkImageUrls`](../type-aliases/ArtworkImageUrls.md) \| `undefined`

##### Inherited from

[`Entity`](Entity.md).[`getImageUrls`](Entity.md#getimageurls)

***

### getJSON()

#### Call Signature

> **getJSON**(`prop?`): `any`

Defined in: [entities/Entity.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L48)

##### Parameters

###### prop?

`undefined`

##### Returns

`any`

##### Inherited from

[`Entity`](Entity.md).[`getJSON`](Entity.md#getjson)

#### Call Signature

> **getJSON**\<`T`\>(`prop`): `T` \| `null` \| `undefined`

Defined in: [entities/Entity.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L50)

##### Type Parameters

###### T

`T` *extends* `string`

##### Parameters

###### prop

`string`

##### Returns

`T` \| `null` \| `undefined`

##### Inherited from

[`Entity`](Entity.md).[`getJSON`](Entity.md#getjson)

#### Call Signature

> **getJSON**\<`T`\>(`prop`): `T` \| `undefined`

Defined in: [entities/Entity.ts:52](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L52)

##### Type Parameters

###### T

`T`

##### Parameters

###### prop

`string`

##### Returns

`T` \| `undefined`

##### Inherited from

[`Entity`](Entity.md).[`getJSON`](Entity.md#getjson)
