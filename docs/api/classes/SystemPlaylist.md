[soundcloud-fetch](../README.md) / SystemPlaylist

# Class: SystemPlaylist

## Hierarchy

- [`PlaylistBase`](PlaylistBase.md)

  ↳ **`SystemPlaylist`**

## Table of contents

### Constructors

- [constructor](SystemPlaylist.md#constructor)

### Accessors

- [apiInfo](SystemPlaylist.md#apiinfo)
- [artwork](SystemPlaylist.md#artwork)
- [id](SystemPlaylist.md#id)
- [isPublic](SystemPlaylist.md#ispublic)
- [lastUpdated](SystemPlaylist.md#lastupdated)
- [madeFor](SystemPlaylist.md#madefor)
- [permalink](SystemPlaylist.md#permalink)
- [texts](SystemPlaylist.md#texts)
- [trackCount](SystemPlaylist.md#trackcount)
- [type](SystemPlaylist.md#type)
- [user](SystemPlaylist.md#user)

### Methods

- [getClient](SystemPlaylist.md#getclient)
- [getImageUrls](SystemPlaylist.md#getimageurls)
- [getTracks](SystemPlaylist.md#gettracks)
- [getType](SystemPlaylist.md#gettype)
- [lazyGet](SystemPlaylist.md#lazyget)
- [lazyGetAsync](SystemPlaylist.md#lazygetasync)
- [toPlainObject](SystemPlaylist.md#toplainobject)

## Constructors

### constructor

• **new SystemPlaylist**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[PlaylistBase](PlaylistBase.md).[constructor](PlaylistBase.md#constructor)

#### Defined in

[lib/entities/SystemPlaylist.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L6)

## Accessors

### apiInfo

• `get` **apiInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `queryUrn` | `any` |
| `urn` | `any` |

#### Defined in

[lib/entities/SystemPlaylist.ts:114](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L114)

___

### artwork

• `get` **artwork**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `calculated` | ``null`` \| `string` \| `Record`<`string`, `string`\> |
| `original` | ``null`` \| `string` \| `Record`<`string`, `string`\> |

#### Defined in

[lib/entities/SystemPlaylist.ts:118](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L118)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Inherited from

PlaylistBase.id

#### Defined in

[lib/entities/PlaylistBase.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L48)

___

### isPublic

• `get` **isPublic**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/SystemPlaylist.ts:110](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L110)

___

### lastUpdated

• `get` **lastUpdated**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/SystemPlaylist.ts:126](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L126)

___

### madeFor

• `get` **madeFor**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/SystemPlaylist.ts:122](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L122)

___

### permalink

• `get` **permalink**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `basic` | `any` |
| `full` | `any` |

#### Inherited from

PlaylistBase.permalink

#### Defined in

[lib/entities/PlaylistBase.ts:56](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L56)

___

### texts

• `get` **texts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `description` | { `full`: `any` ; `short`: `any`  } |
| `description.full` | `any` |
| `description.short` | `any` |
| `title` | { `full`: `any` ; `short`: `any`  } |
| `title.full` | `any` |
| `title.short` | `any` |

#### Defined in

[lib/entities/SystemPlaylist.ts:130](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L130)

___

### trackCount

• `get` **trackCount**(): `number`

#### Returns

`number`

#### Defined in

[lib/entities/SystemPlaylist.ts:134](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L134)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

PlaylistBase.type

#### Defined in

[lib/entities/Entity.ts:25](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L25)

___

### user

• `get` **user**(): [`User`](User.md)

#### Returns

[`User`](User.md)

#### Inherited from

PlaylistBase.user

#### Defined in

[lib/entities/PlaylistBase.ts:52](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L52)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[PlaylistBase](PlaylistBase.md).[getClient](PlaylistBase.md#getclient)

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

[PlaylistBase](PlaylistBase.md).[getImageUrls](PlaylistBase.md#getimageurls)

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

#### Inherited from

[PlaylistBase](PlaylistBase.md).[getTracks](PlaylistBase.md#gettracks)

#### Defined in

[lib/entities/PlaylistBase.ts:60](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L60)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[PlaylistBase](PlaylistBase.md).[getType](PlaylistBase.md#gettype)

#### Defined in

[lib/entities/SystemPlaylist.ts:55](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/SystemPlaylist.ts#L55)

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

[PlaylistBase](PlaylistBase.md).[lazyGet](PlaylistBase.md#lazyget)

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

[PlaylistBase](PlaylistBase.md).[lazyGetAsync](PlaylistBase.md#lazygetasync)

#### Defined in

[lib/entities/Entity.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L50)

___

### toPlainObject

▸ **toPlainObject**(): `any`

#### Returns

`any`

#### Inherited from

[PlaylistBase](PlaylistBase.md).[toPlainObject](PlaylistBase.md#toplainobject)

#### Defined in

[lib/entities/Entity.ts:76](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L76)
