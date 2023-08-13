[soundcloud-fetch](../README.md) / LibraryItem

# Class: LibraryItem

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`LibraryItem`**

## Table of contents

### Constructors

- [constructor](LibraryItem.md#constructor)

### Properties

- [createdAt](LibraryItem.md#createdat)
- [item](LibraryItem.md#item)
- [itemType](LibraryItem.md#itemtype)
- [type](LibraryItem.md#type)
- [type](LibraryItem.md#type-1)

### Methods

- [getClient](LibraryItem.md#getclient)
- [getImageUrls](LibraryItem.md#getimageurls)
- [getJSON](LibraryItem.md#getjson)

## Constructors

### constructor

• **new LibraryItem**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/LibraryItem.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/LibraryItem.ts#L16)

## Properties

### createdAt

• `Optional` **createdAt**: `number`

#### Defined in

[lib/entities/LibraryItem.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/LibraryItem.ts#L13)

___

### item

• **item**: ``null`` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md) \| [`SystemPlaylist`](SystemPlaylist.md)

#### Defined in

[lib/entities/LibraryItem.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/LibraryItem.ts#L14)

___

### itemType

• **itemType**: ``null`` \| ``"Playlist"`` \| ``"Album"`` \| ``"PlaylistLike"`` \| ``"AlbumLike"`` \| ``"SystemPlaylistLike"``

#### Defined in

[lib/entities/LibraryItem.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/LibraryItem.ts#L12)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Entity](Entity.md).[type](Entity.md#type)

#### Defined in

[lib/entities/Entity.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L11)

___

### type

▪ `Static` **type**: `string` = `'LibraryItem'`

#### Overrides

[Entity](Entity.md).[type](Entity.md#type-1)

#### Defined in

[lib/entities/LibraryItem.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/LibraryItem.ts#L10)

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
