[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Like

# Class: Like

Defined in: [entities/Like.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Like.ts#L8)

## Extends

- [`Entity`](Entity.md)

## Constructors

### Constructor

> **new Like**(`json`, `client`): `Like`

Defined in: [entities/Like.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Like.ts#L16)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`Like`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### createdAt?

> `optional` **createdAt**: `string` \| `null`

Defined in: [entities/Like.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Like.ts#L13)

***

### item

> **item**: [`Album`](Album.md) \| [`Playlist`](Playlist.md) \| [`Track`](Track.md) \| `null`

Defined in: [entities/Like.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Like.ts#L14)

***

### itemType

> **itemType**: `"Playlist"` \| `"Album"` \| `"Track"` \| `null`

Defined in: [entities/Like.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Like.ts#L12)

***

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L35)

#### Inherited from

[`Entity`](Entity.md).[`type`](Entity.md#type)

***

### type

> `static` **type**: `string` = `'Like'`

Defined in: [entities/Like.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Like.ts#L10)

#### Overrides

[`Entity`](Entity.md).[`type`](Entity.md#type-1)

## Methods

### getClient()

> `protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

Defined in: [entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L57)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[`Entity`](Entity.md).[`getClient`](Entity.md#getclient)

***

### getImageUrls()

#### Call Signature

> `protected` **getImageUrls**(`defaultImageUrl`, `type`): [`AvatarImageUrls`](../type-aliases/AvatarImageUrls.md) \| `undefined`

Defined in: [entities/Entity.ts:61](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L61)

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

Defined in: [entities/Entity.ts:62](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L62)

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

Defined in: [entities/Entity.ts:47](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L47)

##### Parameters

###### prop?

`undefined`

##### Returns

`any`

##### Inherited from

[`Entity`](Entity.md).[`getJSON`](Entity.md#getjson)

#### Call Signature

> **getJSON**\<`T`\>(`prop`): `T` \| `null` \| `undefined`

Defined in: [entities/Entity.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L48)

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

Defined in: [entities/Entity.ts:49](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L49)

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
