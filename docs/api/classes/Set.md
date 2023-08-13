[soundcloud-fetch](../README.md) / Set

# Class: Set<ID\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `string` \| `number` |

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Set`**

  ↳↳ [`Playlist`](Playlist.md)

  ↳↳ [`SystemPlaylist`](SystemPlaylist.md)

## Table of contents

### Constructors

- [constructor](Set.md#constructor)

### Properties

- [id](Set.md#id)
- [permalink](Set.md#permalink)
- [type](Set.md#type)
- [user](Set.md#user)
- [type](Set.md#type-1)

### Methods

- [getClient](Set.md#getclient)
- [getFullPlaylist](Set.md#getfullplaylist)
- [getImageUrls](Set.md#getimageurls)
- [getJSON](Set.md#getjson)
- [getTracks](Set.md#gettracks)

## Constructors

### constructor

• **new Set**<`ID`\>(`json`, `client`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ID` | extends `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/Set.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Set.ts#L23)

## Properties

### id

• `Optional` **id**: `ID`

#### Defined in

[lib/entities/Set.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Set.ts#L10)

___

### permalink

• **permalink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basic?` | ``null`` \| `string` |
| `full?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Set.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Set.ts#L12)

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

[lib/entities/Set.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Set.ts#L11)

___

### type

▪ `Static` `Readonly` **type**: `string` = `'Entity'`

#### Inherited from

[Entity](Entity.md).[type](Entity.md#type-1)

#### Defined in

[lib/entities/Entity.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L10)

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

### getFullPlaylist

▸ `Protected` `Abstract` **getFullPlaylist**(): `Promise`<``null`` \| [`Set`](Set.md)<`string` \| `number`\>\>

#### Returns

`Promise`<``null`` \| [`Set`](Set.md)<`string` \| `number`\>\>

#### Defined in

[lib/entities/Set.ts:108](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Set.ts#L108)

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

___

### getTracks

▸ **getTracks**(`options?`): `Promise`<[`Track`](Track.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Track`](Track.md)[]\>

#### Defined in

[lib/entities/Set.ts:41](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Set.ts#L41)
