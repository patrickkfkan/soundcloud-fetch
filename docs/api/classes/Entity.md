[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Entity

# Abstract Class: Entity

Defined in: [entities/Entity.ts:32](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L32)

## Extended by

- [`PlayHistoryItem`](PlayHistoryItem.md)
- [`LibraryItem`](LibraryItem.md)
- [`MediaTranscoding`](MediaTranscoding.md)
- [`Publisher`](Publisher.md)
- [`Selection`](Selection.md)
- [`Set`](Set.md)
- [`Track`](Track.md)
- [`User`](User.md)
- [`Like`](Like.md)

## Constructors

### Constructor

> **new Entity**(`json`, `client`): `Entity`

Defined in: [entities/Entity.ts:40](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L40)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`Entity`

## Properties

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L35)

***

### type

> `readonly` `static` **type**: `string` = `'Entity'`

Defined in: [entities/Entity.ts:34](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L34)

## Methods

### getClient()

> `protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

Defined in: [entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L57)

#### Returns

[`SoundCloud`](SoundCloud.md)

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
