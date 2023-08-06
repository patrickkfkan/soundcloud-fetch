[soundcloud-fetch](../README.md) / Playlist

# Class: Playlist

## Hierarchy

- [`PlaylistBase`](PlaylistBase.md)

  ↳ **`Playlist`**

  ↳↳ [`Album`](Album.md)

## Table of contents

### Constructors

- [constructor](Playlist.md#constructor)

### Accessors

- [apiInfo](Playlist.md#apiinfo)
- [artwork](Playlist.md#artwork)
- [dates](Playlist.md#dates)
- [duration](Playlist.md#duration)
- [id](Playlist.md#id)
- [isPublic](Playlist.md#ispublic)
- [permalink](Playlist.md#permalink)
- [setType](Playlist.md#settype)
- [sharingData](Playlist.md#sharingdata)
- [socialData](Playlist.md#socialdata)
- [texts](Playlist.md#texts)
- [trackCount](Playlist.md#trackcount)
- [type](Playlist.md#type)
- [user](Playlist.md#user)

### Methods

- [getClient](Playlist.md#getclient)
- [getDates](Playlist.md#getdates)
- [getImageUrls](Playlist.md#getimageurls)
- [getSharingData](Playlist.md#getsharingdata)
- [getTracks](Playlist.md#gettracks)
- [getType](Playlist.md#gettype)
- [lazyGet](Playlist.md#lazyget)
- [lazyGetAsync](Playlist.md#lazygetasync)
- [toPlainObject](Playlist.md#toplainobject)

## Constructors

### constructor

• **new Playlist**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[PlaylistBase](PlaylistBase.md).[constructor](PlaylistBase.md#constructor)

#### Defined in

[lib/entities/Playlist.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L6)

## Accessors

### apiInfo

• `get` **apiInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `uri` | `any` |

#### Defined in

[lib/entities/Playlist.ts:148](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L148)

___

### artwork

• `get` **artwork**(): ``null`` \| `string` \| `Record`<`string`, `string`\>

#### Returns

``null`` \| `string` \| `Record`<`string`, `string`\>

#### Defined in

[lib/entities/Playlist.ts:152](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L152)

___

### dates

• `get` **dates**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `created` | `any` |
| `display` | `any` |
| `modified` | `any` |
| `published` | `any` |

#### Defined in

[lib/entities/Playlist.ts:164](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L164)

___

### duration

• `get` **duration**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Playlist.ts:160](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L160)

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

[lib/entities/Playlist.ts:144](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L144)

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

### setType

• `get` **setType**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Playlist.ts:156](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L156)

___

### sharingData

• `get` **sharingData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `secretToken` | `any` |
| `shareability` | `any` |

#### Defined in

[lib/entities/Playlist.ts:168](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L168)

___

### socialData

• `get` **socialData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `likesCount` | `any` |
| `managedByFeeds` | `any` |
| `repostsCount` | `any` |

#### Defined in

[lib/entities/Playlist.ts:180](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L180)

___

### texts

• `get` **texts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `description` | `any` |
| `title` | `any` |

#### Defined in

[lib/entities/Playlist.ts:172](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L172)

___

### trackCount

• `get` **trackCount**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Playlist.ts:176](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L176)

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

### getDates

▸ `Protected` **getDates**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `created` | `any` |
| `display` | `any` |
| `modified` | `any` |
| `published` | `any` |

#### Defined in

[lib/entities/Playlist.ts:101](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L101)

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

### getSharingData

▸ `Protected` **getSharingData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `secretToken` | `any` |
| `shareability` | `any` |

#### Defined in

[lib/entities/Playlist.ts:112](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L112)

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

[lib/entities/Playlist.ts:73](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L73)

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
