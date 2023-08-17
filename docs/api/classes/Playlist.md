[soundcloud-fetch](../README.md) / Playlist

# Class: Playlist

## Hierarchy

- [`Set`](Set.md)<`number`\>

  ↳ **`Playlist`**

  ↳↳ [`Album`](Album.md)

## Table of contents

### Constructors

- [constructor](Playlist.md#constructor)

### Properties

- [apiInfo](Playlist.md#apiinfo)
- [artwork](Playlist.md#artwork)
- [dates](Playlist.md#dates)
- [duration](Playlist.md#duration)
- [id](Playlist.md#id)
- [isPublic](Playlist.md#ispublic)
- [permalink](Playlist.md#permalink)
- [setType](Playlist.md#settype)
- [sharingInfo](Playlist.md#sharinginfo)
- [socialInfo](Playlist.md#socialinfo)
- [texts](Playlist.md#texts)
- [trackCount](Playlist.md#trackcount)
- [type](Playlist.md#type)
- [user](Playlist.md#user)
- [type](Playlist.md#type-1)

### Methods

- [getClient](Playlist.md#getclient)
- [getFullPlaylist](Playlist.md#getfullplaylist)
- [getImageUrls](Playlist.md#getimageurls)
- [getJSON](Playlist.md#getjson)
- [getTracks](Playlist.md#gettracks)

## Constructors

### constructor

• **new Playlist**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Set](Set.md).[constructor](Set.md#constructor)

#### Defined in

[lib/entities/Playlist.ts:37](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L37)

## Properties

### apiInfo

• **apiInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `uri?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Playlist.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L10)

___

### artwork

• `Optional` **artwork**: [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Defined in

[lib/entities/Playlist.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L13)

___

### dates

• **dates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `created?` | ``null`` \| `string` |
| `display?` | ``null`` \| `string` |
| `modified?` | ``null`` \| `string` |
| `published?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Playlist.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L16)

___

### duration

• `Optional` **duration**: `number`

#### Defined in

[lib/entities/Playlist.ts:15](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L15)

___

### id

• `Optional` **id**: `number`

#### Inherited from

[Set](Set.md).[id](Set.md#id)

#### Defined in

[lib/entities/Set.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L10)

___

### isPublic

• `Optional` **isPublic**: `boolean`

#### Defined in

[lib/entities/Playlist.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L9)

___

### permalink

• **permalink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basic?` | ``null`` \| `string` |
| `full?` | ``null`` \| `string` |

#### Inherited from

[Set](Set.md).[permalink](Set.md#permalink)

#### Defined in

[lib/entities/Set.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L12)

___

### setType

• `Optional` **setType**: ``null`` \| `string`

#### Defined in

[lib/entities/Playlist.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L14)

___

### sharingInfo

• **sharingInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `secretToken?` | ``null`` \| `string` |
| `shareability?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Playlist.ts:22](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L22)

___

### socialInfo

• **socialInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `likesCount?` | `number` |
| `managedByFeeds?` | `boolean` |
| `repostsCount?` | `number` |

#### Defined in

[lib/entities/Playlist.ts:31](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L31)

___

### texts

• **texts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | ``null`` \| `string` |
| `title?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Playlist.ts:26](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L26)

___

### trackCount

• `Optional` **trackCount**: `number`

#### Defined in

[lib/entities/Playlist.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L30)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Set](Set.md).[type](Set.md#type)

#### Defined in

[lib/entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L35)

___

### user

• `Optional` **user**: [`User`](User.md)

#### Inherited from

[Set](Set.md).[user](Set.md#user)

#### Defined in

[lib/entities/Set.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L11)

___

### type

▪ `Static` **type**: `string` = `'Playlist'`

#### Overrides

[Set](Set.md).[type](Set.md#type-1)

#### Defined in

[lib/entities/Playlist.ts:7](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L7)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[Set](Set.md).[getClient](Set.md#getclient)

#### Defined in

[lib/entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L57)

___

### getFullPlaylist

▸ `Protected` **getFullPlaylist**(): `Promise`<``null`` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md)\>

#### Returns

`Promise`<``null`` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md)\>

#### Overrides

[Set](Set.md).[getFullPlaylist](Set.md#getfullplaylist)

#### Defined in

[lib/entities/Playlist.ts:76](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L76)

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

[Set](Set.md).[getImageUrls](Set.md#getimageurls)

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

[Set](Set.md).[getImageUrls](Set.md#getimageurls)

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

[Set](Set.md).[getJSON](Set.md#getjson)

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

[Set](Set.md).[getJSON](Set.md#getjson)

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

[Set](Set.md).[getJSON](Set.md#getjson)

#### Defined in

[lib/entities/Entity.ts:49](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L49)

___

### getTracks

▸ **getTracks**(`options?`): `Promise`<[`Track`](Track.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.limit?` | `number` |
| `options.offset?` | `number` |

#### Returns

`Promise`<[`Track`](Track.md)[]\>

#### Inherited from

[Set](Set.md).[getTracks](Set.md#gettracks)

#### Defined in

[lib/entities/Set.ts:41](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L41)
