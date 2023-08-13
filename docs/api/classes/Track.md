[soundcloud-fetch](../README.md) / Track

# Class: Track

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Track`**

## Table of contents

### Constructors

- [constructor](Track.md#constructor)

### Properties

- [apiInfo](Track.md#apiinfo)
- [artwork](Track.md#artwork)
- [dates](Track.md#dates)
- [downloadData](Track.md#downloaddata)
- [durations](Track.md#durations)
- [genre](Track.md#genre)
- [id](Track.md#id)
- [isBlocked](Track.md#isblocked)
- [isPublic](Track.md#ispublic)
- [isSnipped](Track.md#issnipped)
- [label](Track.md#label)
- [license](Track.md#license)
- [mediaInfo](Track.md#mediainfo)
- [permalink](Track.md#permalink)
- [playbackData](Track.md#playbackdata)
- [publisher](Track.md#publisher)
- [purchaseInfo](Track.md#purchaseinfo)
- [sharingData](Track.md#sharingdata)
- [socialData](Track.md#socialdata)
- [tags](Track.md#tags)
- [texts](Track.md#texts)
- [type](Track.md#type)
- [user](Track.md#user)
- [waveform](Track.md#waveform)
- [type](Track.md#type-1)

### Methods

- [getClient](Track.md#getclient)
- [getImageUrls](Track.md#getimageurls)
- [getJSON](Track.md#getjson)

## Constructors

### constructor

• **new Track**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/Track.ts:77](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L77)

## Properties

### apiInfo

• **apiInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `streamable?` | `boolean` |
| `uri?` | ``null`` \| `string` |
| `urn?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Track.ts:54](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L54)

___

### artwork

• `Optional` **artwork**: [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Defined in

[lib/entities/Track.ts:73](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L73)

___

### dates

• **dates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created?` | ``null`` \| `string` |
| `display?` | ``null`` \| `string` |
| `modified?` | ``null`` \| `string` |
| `released?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Track.ts:17](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L17)

___

### downloadData

• **downloadData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `downloadCount?` | `number` |
| `downloadable?` | `boolean` |
| `hasDownloadsLeft?` | `boolean` |

#### Defined in

[lib/entities/Track.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L23)

___

### durations

• **durations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `full?` | `number` |
| `playback?` | `number` |

#### Defined in

[lib/entities/Track.ts:64](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L64)

___

### genre

• `Optional` **genre**: ``null`` \| `string`

#### Defined in

[lib/entities/Track.ts:68](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L68)

___

### id

• `Optional` **id**: `number`

#### Defined in

[lib/entities/Track.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L11)

___

### isBlocked

• `Optional` **isBlocked**: `boolean`

#### Defined in

[lib/entities/Track.ts:43](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L43)

___

### isPublic

• `Optional` **isPublic**: `boolean`

#### Defined in

[lib/entities/Track.ts:70](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L70)

___

### isSnipped

• `Optional` **isSnipped**: `boolean`

#### Defined in

[lib/entities/Track.ts:44](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L44)

___

### label

• `Optional` **label**: ``null`` \| `string`

#### Defined in

[lib/entities/Track.ts:72](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L72)

___

### license

• `Optional` **license**: ``null`` \| `string`

#### Defined in

[lib/entities/Track.ts:69](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L69)

___

### mediaInfo

• **mediaInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encodingState?` | ``null`` \| `string` |
| `trackFormat?` | ``null`` \| `string` |
| `transcodings` | [`MediaTranscoding`](MediaTranscoding.md)[] |

#### Defined in

[lib/entities/Track.ts:45](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L45)

___

### permalink

• **permalink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basic?` | ``null`` \| `string` |
| `full?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Track.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L50)

___

### playbackData

• **playbackData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `playbackCount?` | `number` |
| `policy?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Track.ts:39](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L39)

___

### publisher

• `Optional` **publisher**: [`Publisher`](Publisher.md)

#### Defined in

[lib/entities/Track.ts:63](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L63)

___

### purchaseInfo

• **purchaseInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `title?` | ``null`` \| `string` |
| `url?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Track.ts:59](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L59)

___

### sharingData

• **sharingData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `embeddableBy?` | ``null`` \| `string` |
| `secretToken?` | ``null`` \| `string` |
| `shareability?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Track.ts:34](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L34)

___

### socialData

• **socialData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commentCount?` | `number` |
| `commentable?` | `boolean` |
| `likesCount?` | `number` |
| `repostsCount?` | `number` |

#### Defined in

[lib/entities/Track.ts:28](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L28)

___

### tags

• `Optional` **tags**: ``null`` \| `string`

#### Defined in

[lib/entities/Track.ts:71](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L71)

___

### texts

• **texts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `caption?` | ``null`` \| `string` |
| `description?` | ``null`` \| `string` |
| `title?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Track.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L12)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Entity](Entity.md).[type](Entity.md#type)

#### Defined in

[lib/entities/Entity.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L11)

___

### user

• `Optional` **user**: [`User`](User.md)

#### Defined in

[lib/entities/Track.ts:75](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L75)

___

### waveform

• `Optional` **waveform**: ``null`` \| `string`

#### Defined in

[lib/entities/Track.ts:74](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L74)

___

### type

▪ `Static` **type**: `string` = `'Track'`

#### Overrides

[Entity](Entity.md).[type](Entity.md#type-1)

#### Defined in

[lib/entities/Track.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Track.ts#L9)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[Entity](Entity.md).[getClient](Entity.md#getclient)

#### Defined in

[lib/entities/Entity.ts:33](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L33)

___

### getImageUrls

▸ `Protected` **getImageUrls**(`defaultImageUrl`, `type`): `undefined` \| [`AvatarImageUrls`](../README.md#avatarimageurls)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultImageUrl` | `undefined` \| ``null`` \| `string` |
| `type` | ``"avatar"`` |

#### Returns

`undefined` \| [`AvatarImageUrls`](../README.md#avatarimageurls)

#### Inherited from

[Entity](Entity.md).[getImageUrls](Entity.md#getimageurls)

#### Defined in

[lib/entities/Entity.ts:37](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L37)

▸ `Protected` **getImageUrls**(`defaultImageUrl`, `type?`): `undefined` \| [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultImageUrl` | `undefined` \| ``null`` \| `string` |
| `type?` | ``"artwork"`` |

#### Returns

`undefined` \| [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Inherited from

[Entity](Entity.md).[getImageUrls](Entity.md#getimageurls)

#### Defined in

[lib/entities/Entity.ts:38](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L38)

___

### getJSON

▸ **getJSON**(`prop?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop?` | `undefined` |

#### Returns

`any`

#### Inherited from

[Entity](Entity.md).[getJSON](Entity.md#getjson)

#### Defined in

[lib/entities/Entity.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L23)

▸ **getJSON**<`T`\>(`prop`): `undefined` \| ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `string` |

#### Returns

`undefined` \| ``null`` \| `T`

#### Inherited from

[Entity](Entity.md).[getJSON](Entity.md#getjson)

#### Defined in

[lib/entities/Entity.ts:24](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L24)

▸ **getJSON**<`T`\>(`prop`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `string` |

#### Returns

`undefined` \| `T`

#### Inherited from

[Entity](Entity.md).[getJSON](Entity.md#getjson)

#### Defined in

[lib/entities/Entity.ts:25](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L25)
