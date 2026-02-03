[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / MediaTranscoding

# Class: MediaTranscoding

Defined in: [entities/MediaTranscoding.ts:4](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L4)

## Extends

- [`Entity`](Entity.md)

## Constructors

### Constructor

> **new MediaTranscoding**(`json`, `client`): `MediaTranscoding`

Defined in: [entities/MediaTranscoding.ts:17](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L17)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`MediaTranscoding`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### duration?

> `optional` **duration**: `number`

Defined in: [entities/MediaTranscoding.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L10)

***

### isSnipped?

> `optional` **isSnipped**: `boolean`

Defined in: [entities/MediaTranscoding.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L11)

***

### mimeType?

> `optional` **mimeType**: `string` \| `null`

Defined in: [entities/MediaTranscoding.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L13)

***

### preset?

> `optional` **preset**: `string` \| `null`

Defined in: [entities/MediaTranscoding.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L9)

***

### protocol?

> `optional` **protocol**: `string` \| `null`

Defined in: [entities/MediaTranscoding.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L12)

***

### quality?

> `optional` **quality**: `"sq"` \| `"hq"` \| `null`

Defined in: [entities/MediaTranscoding.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L14)

***

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L35)

#### Inherited from

[`Entity`](Entity.md).[`type`](Entity.md#type)

***

### url?

> `optional` **url**: `string` \| `null`

Defined in: [entities/MediaTranscoding.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L8)

***

### type

> `static` **type**: `string` = `'MediaTranscoding'`

Defined in: [entities/MediaTranscoding.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/MediaTranscoding.ts#L6)

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
