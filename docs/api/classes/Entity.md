[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Entity

# Abstract Class: Entity

Defined in: [entities/Entity.ts:33](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L33)

## Extended by

- [`PlayHistoryItem`](PlayHistoryItem.md)
- [`LibraryItem`](LibraryItem.md)
- [`FeedItem`](FeedItem.md)
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

Defined in: [entities/Entity.ts:41](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L41)

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

Defined in: [entities/Entity.ts:36](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L36)

***

### type

> `readonly` `static` **type**: `string` = `'Entity'`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L35)

## Methods

### getClient()

> `protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

Defined in: [entities/Entity.ts:60](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/entities/Entity.ts#L60)

#### Returns

[`SoundCloud`](SoundCloud.md)

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
