[soundcloud-fetch](../README.md) / Like

# Class: Like

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Like`**

## Table of contents

### Constructors

- [constructor](Like.md#constructor)

### Properties

- [createdAt](Like.md#createdat)
- [item](Like.md#item)
- [itemType](Like.md#itemtype)
- [type](Like.md#type)
- [type](Like.md#type-1)

### Methods

- [getClient](Like.md#getclient)
- [getImageUrls](Like.md#getimageurls)
- [getJSON](Like.md#getjson)

## Constructors

### constructor

• **new Like**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/Like.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Like.ts#L16)

## Properties

### createdAt

• `Optional` **createdAt**: ``null`` \| `string`

#### Defined in

[lib/entities/Like.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Like.ts#L13)

___

### item

• **item**: ``null`` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md) \| [`Track`](Track.md)

#### Defined in

[lib/entities/Like.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Like.ts#L14)

___

### itemType

• **itemType**: ``null`` \| ``"Playlist"`` \| ``"Album"`` \| ``"Track"``

#### Defined in

[lib/entities/Like.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Like.ts#L12)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Entity](Entity.md).[type](Entity.md#type)

#### Defined in

[lib/entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L35)

___

### type

▪ `Static` **type**: `string` = `'Like'`

#### Overrides

[Entity](Entity.md).[type](Entity.md#type-1)

#### Defined in

[lib/entities/Like.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Like.ts#L10)

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
