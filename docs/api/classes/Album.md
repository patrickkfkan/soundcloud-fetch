[soundcloud-fetch](../README.md) / Album

# Class: Album

## Hierarchy

- [`Playlist`](Playlist.md)

  ↳ **`Album`**

## Table of contents

### Constructors

- [constructor](Album.md#constructor)

### Properties

- [apiInfo](Album.md#apiinfo)
- [artwork](Album.md#artwork)
- [dates](Album.md#dates)
- [duration](Album.md#duration)
- [genre](Album.md#genre)
- [id](Album.md#id)
- [isPublic](Album.md#ispublic)
- [label](Album.md#label)
- [license](Album.md#license)
- [permalink](Album.md#permalink)
- [purchaseInfo](Album.md#purchaseinfo)
- [setType](Album.md#settype)
- [sharingInfo](Album.md#sharinginfo)
- [socialInfo](Album.md#socialinfo)
- [tags](Album.md#tags)
- [texts](Album.md#texts)
- [trackCount](Album.md#trackcount)
- [type](Album.md#type)
- [user](Album.md#user)
- [type](Album.md#type-1)

### Methods

- [getClient](Album.md#getclient)
- [getFullPlaylist](Album.md#getfullplaylist)
- [getImageUrls](Album.md#getimageurls)
- [getJSON](Album.md#getjson)
- [getTracks](Album.md#gettracks)

## Constructors

### constructor

• **new Album**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Playlist](Playlist.md).[constructor](Playlist.md#constructor)

#### Defined in

[lib/entities/Album.ts:29](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L29)

## Properties

### apiInfo

• **apiInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `uri?` | ``null`` \| `string` |

#### Inherited from

[Playlist](Playlist.md).[apiInfo](Playlist.md#apiinfo)

#### Defined in

[lib/entities/Playlist.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L10)

___

### artwork

• `Optional` **artwork**: [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Inherited from

[Playlist](Playlist.md).[artwork](Playlist.md#artwork)

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
| `release?` | ``null`` \| `string` |

#### Overrides

[Playlist](Playlist.md).[dates](Playlist.md#dates)

#### Defined in

[lib/entities/Album.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L13)

___

### duration

• `Optional` **duration**: `number`

#### Inherited from

[Playlist](Playlist.md).[duration](Playlist.md#duration)

#### Defined in

[lib/entities/Playlist.ts:15](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L15)

___

### genre

• `Optional` **genre**: ``null`` \| `string`

#### Defined in

[lib/entities/Album.ts:20](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L20)

___

### id

• `Optional` **id**: `number`

#### Inherited from

[Playlist](Playlist.md).[id](Playlist.md#id)

#### Defined in

[lib/entities/Set.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L10)

___

### isPublic

• `Optional` **isPublic**: `boolean`

#### Inherited from

[Playlist](Playlist.md).[isPublic](Playlist.md#ispublic)

#### Defined in

[lib/entities/Playlist.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L9)

___

### label

• `Optional` **label**: ``null`` \| `string`

#### Defined in

[lib/entities/Album.ts:21](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L21)

___

### license

• `Optional` **license**: ``null`` \| `string`

#### Defined in

[lib/entities/Album.ts:22](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L22)

___

### permalink

• **permalink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basic?` | ``null`` \| `string` |
| `full?` | ``null`` \| `string` |

#### Inherited from

[Playlist](Playlist.md).[permalink](Playlist.md#permalink)

#### Defined in

[lib/entities/Set.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L12)

___

### purchaseInfo

• **purchaseInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `title?` | ``null`` \| `string` |
| `url?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Album.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L23)

___

### setType

• `Optional` **setType**: ``null`` \| `string`

#### Inherited from

[Playlist](Playlist.md).[setType](Playlist.md#settype)

#### Defined in

[lib/entities/Playlist.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L14)

___

### sharingInfo

• **sharingInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `embeddableBy?` | ``null`` \| `string` |
| `secretToken?` | ``null`` \| `string` |
| `shareability?` | ``null`` \| `string` |

#### Overrides

[Playlist](Playlist.md).[sharingInfo](Playlist.md#sharinginfo)

#### Defined in

[lib/entities/Album.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L8)

___

### socialInfo

• **socialInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `likesCount?` | `number` |
| `managedByFeeds?` | `boolean` |
| `repostsCount?` | `number` |

#### Inherited from

[Playlist](Playlist.md).[socialInfo](Playlist.md#socialinfo)

#### Defined in

[lib/entities/Playlist.ts:31](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L31)

___

### tags

• `Optional` **tags**: ``null`` \| `string`

#### Defined in

[lib/entities/Album.ts:27](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L27)

___

### texts

• **texts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | ``null`` \| `string` |
| `title?` | ``null`` \| `string` |

#### Inherited from

[Playlist](Playlist.md).[texts](Playlist.md#texts)

#### Defined in

[lib/entities/Playlist.ts:26](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L26)

___

### trackCount

• `Optional` **trackCount**: `number`

#### Inherited from

[Playlist](Playlist.md).[trackCount](Playlist.md#trackcount)

#### Defined in

[lib/entities/Playlist.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Playlist.ts#L30)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Playlist](Playlist.md).[type](Playlist.md#type)

#### Defined in

[lib/entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L35)

___

### user

• `Optional` **user**: [`User`](User.md)

#### Inherited from

[Playlist](Playlist.md).[user](Playlist.md#user)

#### Defined in

[lib/entities/Set.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L11)

___

### type

▪ `Static` **type**: `string` = `'Album'`

#### Overrides

[Playlist](Playlist.md).[type](Playlist.md#type-1)

#### Defined in

[lib/entities/Album.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Album.ts#L6)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[Playlist](Playlist.md).[getClient](Playlist.md#getclient)

#### Defined in

[lib/entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L57)

___

### getFullPlaylist

▸ `Protected` **getFullPlaylist**(): `Promise`<``null`` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md)\>

#### Returns

`Promise`<``null`` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md)\>

#### Inherited from

[Playlist](Playlist.md).[getFullPlaylist](Playlist.md#getfullplaylist)

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

[Playlist](Playlist.md).[getImageUrls](Playlist.md#getimageurls)

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

[Playlist](Playlist.md).[getImageUrls](Playlist.md#getimageurls)

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

[Playlist](Playlist.md).[getJSON](Playlist.md#getjson)

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

[Playlist](Playlist.md).[getJSON](Playlist.md#getjson)

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

[Playlist](Playlist.md).[getJSON](Playlist.md#getjson)

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

[Playlist](Playlist.md).[getTracks](Playlist.md#gettracks)

#### Defined in

[lib/entities/Set.ts:41](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L41)
