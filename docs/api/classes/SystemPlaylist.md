[soundcloud-fetch](../README.md) / SystemPlaylist

# Class: SystemPlaylist

## Hierarchy

- [`Set`](Set.md)<`string`\>

  ↳ **`SystemPlaylist`**

## Table of contents

### Constructors

- [constructor](SystemPlaylist.md#constructor)

### Properties

- [apiInfo](SystemPlaylist.md#apiinfo)
- [artwork](SystemPlaylist.md#artwork)
- [id](SystemPlaylist.md#id)
- [isPublic](SystemPlaylist.md#ispublic)
- [lastUpdated](SystemPlaylist.md#lastupdated)
- [madeFor](SystemPlaylist.md#madefor)
- [permalink](SystemPlaylist.md#permalink)
- [playlistType](SystemPlaylist.md#playlisttype)
- [texts](SystemPlaylist.md#texts)
- [trackCount](SystemPlaylist.md#trackcount)
- [type](SystemPlaylist.md#type)
- [user](SystemPlaylist.md#user)
- [type](SystemPlaylist.md#type-1)

### Methods

- [getClient](SystemPlaylist.md#getclient)
- [getFullPlaylist](SystemPlaylist.md#getfullplaylist)
- [getImageUrls](SystemPlaylist.md#getimageurls)
- [getJSON](SystemPlaylist.md#getjson)
- [getTracks](SystemPlaylist.md#gettracks)

## Constructors

### constructor

• **new SystemPlaylist**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Set](Set.md).[constructor](Set.md#constructor)

#### Defined in

[lib/entities/SystemPlaylist.ts:34](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L34)

## Properties

### apiInfo

• **apiInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `queryUrn?` | ``null`` \| `string` |
| `urn?` | ``null`` \| `string` |

#### Defined in

[lib/entities/SystemPlaylist.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L12)

___

### artwork

• **artwork**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `calculated?` | [`ArtworkImageUrls`](../README.md#artworkimageurls) |
| `original?` | [`ArtworkImageUrls`](../README.md#artworkimageurls) |

#### Defined in

[lib/entities/SystemPlaylist.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L16)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[Set](Set.md).[id](Set.md#id)

#### Defined in

[lib/entities/Set.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Set.ts#L10)

___

### isPublic

• `Optional` **isPublic**: `boolean`

#### Defined in

[lib/entities/SystemPlaylist.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L10)

___

### lastUpdated

• `Optional` **lastUpdated**: ``null`` \| `string`

#### Defined in

[lib/entities/SystemPlaylist.ts:21](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L21)

___

### madeFor

• `Optional` **madeFor**: [`User`](User.md)

#### Defined in

[lib/entities/SystemPlaylist.ts:20](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L20)

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

### playlistType

• `Optional` **playlistType**: ``null`` \| `String` \| ``"artistStation"`` \| ``"playlist"``

#### Defined in

[lib/entities/SystemPlaylist.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L11)

___

### texts

• **texts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | { `full?`: ``null`` \| `string` ; `short?`: ``null`` \| `string`  } |
| `description.full?` | ``null`` \| `string` |
| `description.short?` | ``null`` \| `string` |
| `title` | { `full?`: ``null`` \| `string` ; `short?`: ``null`` \| `string`  } |
| `title.full?` | ``null`` \| `string` |
| `title.short?` | ``null`` \| `string` |

#### Defined in

[lib/entities/SystemPlaylist.ts:22](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L22)

___

### trackCount

• **trackCount**: `number`

#### Defined in

[lib/entities/SystemPlaylist.ts:32](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L32)

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

▪ `Static` **type**: `string` = `'SystemPlaylist'`

#### Overrides

[Set](Set.md).[type](Set.md#type-1)

#### Defined in

[lib/entities/SystemPlaylist.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L8)

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

▸ `Protected` **getFullPlaylist**(): `Promise`<``null`` \| [`SystemPlaylist`](SystemPlaylist.md)\>

#### Returns

`Promise`<``null`` \| [`SystemPlaylist`](SystemPlaylist.md)\>

#### Overrides

[Set](Set.md).[getFullPlaylist](Set.md#getfullplaylist)

#### Defined in

[lib/entities/SystemPlaylist.ts:90](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/SystemPlaylist.ts#L90)

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
