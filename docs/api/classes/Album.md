[soundcloud-fetch](../README.md) / Album

# Class: Album

## Hierarchy

- [`Playlist`](Playlist.md)

  ↳ **`Album`**

## Table of contents

### Constructors

- [constructor](Album.md#constructor)

### Accessors

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
- [purchaseData](Album.md#purchasedata)
- [setType](Album.md#settype)
- [sharingData](Album.md#sharingdata)
- [socialData](Album.md#socialdata)
- [tags](Album.md#tags)
- [texts](Album.md#texts)
- [trackCount](Album.md#trackcount)
- [type](Album.md#type)
- [user](Album.md#user)

### Methods

- [getClient](Album.md#getclient)
- [getDates](Album.md#getdates)
- [getImageUrls](Album.md#getimageurls)
- [getSharingData](Album.md#getsharingdata)
- [getTracks](Album.md#gettracks)
- [getType](Album.md#gettype)
- [lazyGet](Album.md#lazyget)
- [lazyGetAsync](Album.md#lazygetasync)
- [toPlainObject](Album.md#toplainobject)

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

[lib/entities/Album.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L6)

## Accessors

### apiInfo

• `get` **apiInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `uri` | `any` |

#### Inherited from

Playlist.apiInfo

#### Defined in

[lib/entities/Playlist.ts:148](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L148)

___

### artwork

• `get` **artwork**(): ``null`` \| `string` \| `Record`<`string`, `string`\>

#### Returns

``null`` \| `string` \| `Record`<`string`, `string`\>

#### Inherited from

Playlist.artwork

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

#### Inherited from

Playlist.dates

#### Defined in

[lib/entities/Playlist.ts:164](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L164)

___

### duration

• `get` **duration**(): `any`

#### Returns

`any`

#### Inherited from

Playlist.duration

#### Defined in

[lib/entities/Playlist.ts:160](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L160)

___

### genre

• `get` **genre**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Album.ts:94](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L94)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Inherited from

Playlist.id

#### Defined in

[lib/entities/PlaylistBase.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L48)

___

### isPublic

• `get` **isPublic**(): `any`

#### Returns

`any`

#### Inherited from

Playlist.isPublic

#### Defined in

[lib/entities/Playlist.ts:144](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L144)

___

### label

• `get` **label**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Album.ts:98](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L98)

___

### license

• `get` **license**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Album.ts:102](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L102)

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

Playlist.permalink

#### Defined in

[lib/entities/PlaylistBase.ts:56](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L56)

___

### purchaseData

• `get` **purchaseData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `title` | `any` |
| `url` | `any` |

#### Defined in

[lib/entities/Album.ts:106](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L106)

___

### setType

• `get` **setType**(): `any`

#### Returns

`any`

#### Inherited from

Playlist.setType

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

#### Inherited from

Playlist.sharingData

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

#### Inherited from

Playlist.socialData

#### Defined in

[lib/entities/Playlist.ts:180](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L180)

___

### tags

• `get` **tags**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Album.ts:110](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L110)

___

### texts

• `get` **texts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `description` | `any` |
| `title` | `any` |

#### Inherited from

Playlist.texts

#### Defined in

[lib/entities/Playlist.ts:172](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L172)

___

### trackCount

• `get` **trackCount**(): `any`

#### Returns

`any`

#### Inherited from

Playlist.trackCount

#### Defined in

[lib/entities/Playlist.ts:176](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Playlist.ts#L176)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Playlist.type

#### Defined in

[lib/entities/Entity.ts:25](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L25)

___

### user

• `get` **user**(): [`User`](User.md)

#### Returns

[`User`](User.md)

#### Inherited from

Playlist.user

#### Defined in

[lib/entities/PlaylistBase.ts:52](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L52)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[Playlist](Playlist.md).[getClient](Playlist.md#getclient)

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
| `release` | `any` |

#### Overrides

[Playlist](Playlist.md).[getDates](Playlist.md#getdates)

#### Defined in

[lib/entities/Album.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L57)

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

[Playlist](Playlist.md).[getImageUrls](Playlist.md#getimageurls)

#### Defined in

[lib/entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L57)

___

### getSharingData

▸ `Protected` **getSharingData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `embeddableBy` | `any` |
| `secretToken` | `any` |
| `shareability` | `any` |

#### Overrides

[Playlist](Playlist.md).[getSharingData](Playlist.md#getsharingdata)

#### Defined in

[lib/entities/Album.ts:47](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L47)

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

[Playlist](Playlist.md).[getTracks](Playlist.md#gettracks)

#### Defined in

[lib/entities/PlaylistBase.ts:60](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/PlaylistBase.ts#L60)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[Playlist](Playlist.md).[getType](Playlist.md#gettype)

#### Defined in

[lib/entities/Album.ts:43](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Album.ts#L43)

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

[Playlist](Playlist.md).[lazyGet](Playlist.md#lazyget)

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

[Playlist](Playlist.md).[lazyGetAsync](Playlist.md#lazygetasync)

#### Defined in

[lib/entities/Entity.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L50)

___

### toPlainObject

▸ **toPlainObject**(): `any`

#### Returns

`any`

#### Inherited from

[Playlist](Playlist.md).[toPlainObject](Playlist.md#toplainobject)

#### Defined in

[lib/entities/Entity.ts:76](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L76)
