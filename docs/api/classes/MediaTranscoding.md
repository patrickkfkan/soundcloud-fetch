[soundcloud-fetch](../README.md) / MediaTranscoding

# Class: MediaTranscoding

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`MediaTranscoding`**

## Table of contents

### Constructors

- [constructor](MediaTranscoding.md#constructor)

### Properties

- [duration](MediaTranscoding.md#duration)
- [isSnipped](MediaTranscoding.md#issnipped)
- [mimeType](MediaTranscoding.md#mimetype)
- [preset](MediaTranscoding.md#preset)
- [protocol](MediaTranscoding.md#protocol)
- [quality](MediaTranscoding.md#quality)
- [type](MediaTranscoding.md#type)
- [url](MediaTranscoding.md#url)
- [type](MediaTranscoding.md#type-1)

### Methods

- [getClient](MediaTranscoding.md#getclient)
- [getImageUrls](MediaTranscoding.md#getimageurls)
- [getJSON](MediaTranscoding.md#getjson)

## Constructors

### constructor

• **new MediaTranscoding**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/MediaTranscoding.ts:17](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L17)

## Properties

### duration

• `Optional` **duration**: `number`

#### Defined in

[lib/entities/MediaTranscoding.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L10)

___

### isSnipped

• `Optional` **isSnipped**: `boolean`

#### Defined in

[lib/entities/MediaTranscoding.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L11)

___

### mimeType

• `Optional` **mimeType**: ``null`` \| `string`

#### Defined in

[lib/entities/MediaTranscoding.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L13)

___

### preset

• `Optional` **preset**: ``null`` \| `string`

#### Defined in

[lib/entities/MediaTranscoding.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L9)

___

### protocol

• `Optional` **protocol**: ``null`` \| `string`

#### Defined in

[lib/entities/MediaTranscoding.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L12)

___

### quality

• `Optional` **quality**: ``null`` \| ``"sq"`` \| ``"hq"``

#### Defined in

[lib/entities/MediaTranscoding.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L14)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Entity](Entity.md).[type](Entity.md#type)

#### Defined in

[lib/entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L35)

___

### url

• `Optional` **url**: ``null`` \| `string`

#### Defined in

[lib/entities/MediaTranscoding.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L8)

___

### type

▪ `Static` **type**: `string` = `'MediaTranscoding'`

#### Overrides

[Entity](Entity.md).[type](Entity.md#type-1)

#### Defined in

[lib/entities/MediaTranscoding.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/MediaTranscoding.ts#L6)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[Entity](Entity.md).[getClient](Entity.md#getclient)

#### Defined in

[lib/entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L57)

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

[lib/entities/Entity.ts:61](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L61)

▸ `Protected` **getImageUrls**(`defaultImageUrl`, `type?`): `undefined` \| [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultImageUrl` | `undefined` \| ``null`` \| `string` |
| `type?` | ``"artwork"`` \| ``"artistStation"`` |

#### Returns

`undefined` \| [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Inherited from

[Entity](Entity.md).[getImageUrls](Entity.md#getimageurls)

#### Defined in

[lib/entities/Entity.ts:62](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L62)

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

[lib/entities/Entity.ts:47](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L47)

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

[lib/entities/Entity.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L48)

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

[lib/entities/Entity.ts:49](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L49)
