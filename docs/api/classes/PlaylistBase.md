[soundcloud-fetch](../README.md) / PlaylistBase

# Class: PlaylistBase

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`PlaylistBase`**

  ↳↳ [`Playlist`](Playlist.md)

  ↳↳ [`SystemPlaylist`](SystemPlaylist.md)

## Table of contents

### Constructors

- [constructor](PlaylistBase.md#constructor)

### Accessors

- [id](PlaylistBase.md#id)
- [permalink](PlaylistBase.md#permalink)
- [type](PlaylistBase.md#type)
- [user](PlaylistBase.md#user)

### Methods

- [getClient](PlaylistBase.md#getclient)
- [getImageUrls](PlaylistBase.md#getimageurls)
- [getTracks](PlaylistBase.md#gettracks)
- [getType](PlaylistBase.md#gettype)
- [lazyGet](PlaylistBase.md#lazyget)
- [lazyGetAsync](PlaylistBase.md#lazygetasync)
- [toPlainObject](PlaylistBase.md#toplainobject)

## Constructors

### constructor

• **new PlaylistBase**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/PlaylistBase.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L8)

## Accessors

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/PlaylistBase.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L48)

___

### permalink

• `get` **permalink**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `basic` | `any` |
| `full` | `any` |

#### Defined in

[lib/entities/PlaylistBase.ts:56](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L56)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Entity.type

#### Defined in

[lib/entities/Entity.ts:25](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L25)

___

### user

• `get` **user**(): [`User`](User.md)

#### Returns

[`User`](User.md)

#### Defined in

[lib/entities/PlaylistBase.ts:52](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L52)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[Entity](Entity.md).[getClient](Entity.md#getclient)

#### Defined in

[lib/entities/Entity.ts:39](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L39)

___

### getImageUrls

▸ `Protected` **getImageUrls**(`defaultImageUrl`, `type?`): ``null`` \| `string` \| `Record`<`string`, `string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultImageUrl` | `string` | `undefined` |
| `type` | ``"artwork"`` \| ``"avatar"`` | `'artwork'` |

#### Returns

``null`` \| `string` \| `Record`<`string`, `string`\>

#### Inherited from

[Entity](Entity.md).[getImageUrls](Entity.md#getimageurls)

#### Defined in

[lib/entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L57)

___

### getTracks

▸ **getTracks**(`options?`): `Promise`<[`Track`](Track.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.limit` | `number` |
| `options.offset` | `number` |

#### Returns

`Promise`<[`Track`](Track.md)[]\>

#### Defined in

[lib/entities/PlaylistBase.ts:60](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L60)

___

### getType

▸ `Protected` `Abstract` **getType**(): `string`

#### Returns

`string`

#### Inherited from

[Entity](Entity.md).[getType](Entity.md#gettype)

#### Defined in

[lib/entities/Entity.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L23)

___

### lazyGet

▸ `Protected` **lazyGet**<`T`\>(`key`, `getValue`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `getValue` | () => `T` |

#### Returns

`T`

#### Inherited from

[Entity](Entity.md).[lazyGet](Entity.md#lazyget)

#### Defined in

[lib/entities/Entity.ts:43](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L43)

___

### lazyGetAsync

▸ `Protected` **lazyGetAsync**<`T`\>(`key`, `getValueAsync`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `getValueAsync` | () => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

[Entity](Entity.md).[lazyGetAsync](Entity.md#lazygetasync)

#### Defined in

[lib/entities/Entity.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L50)

___

### toPlainObject

▸ **toPlainObject**(): `any`

#### Returns

`any`

#### Inherited from

[Entity](Entity.md).[toPlainObject](Entity.md#toplainobject)

#### Defined in

[lib/entities/Entity.ts:76](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L76)
