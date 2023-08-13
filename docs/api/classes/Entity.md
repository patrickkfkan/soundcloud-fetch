[soundcloud-fetch](../README.md) / Entity

# Class: Entity

## Hierarchy

- **`Entity`**

  ↳ [`PlayHistoryItem`](PlayHistoryItem.md)

  ↳ [`LibraryItem`](LibraryItem.md)

  ↳ [`MediaTranscoding`](MediaTranscoding.md)

  ↳ [`Publisher`](Publisher.md)

  ↳ [`Selection`](Selection.md)

  ↳ [`Set`](Set.md)

  ↳ [`Track`](Track.md)

  ↳ [`User`](User.md)

## Table of contents

### Constructors

- [constructor](Entity.md#constructor)

### Properties

- [type](Entity.md#type)
- [type](Entity.md#type-1)

### Methods

- [getClient](Entity.md#getclient)
- [getImageUrls](Entity.md#getimageurls)
- [getJSON](Entity.md#getjson)

## Constructors

### constructor

• **new Entity**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Defined in

[lib/entities/Entity.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L16)

## Properties

### type

• `Readonly` **type**: `string`

#### Defined in

[lib/entities/Entity.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L11)

___

### type

▪ `Static` `Readonly` **type**: `string` = `'Entity'`

#### Defined in

[lib/entities/Entity.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L10)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

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

#### Defined in

[lib/entities/Entity.ts:25](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L25)
