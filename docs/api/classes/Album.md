[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Album

# Class: Album

Defined in: [entities/Album.ts:4](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L4)

## Extends

- [`Playlist`](Playlist.md)

## Constructors

### Constructor

> **new Album**(`json`, `client`): `Album`

Defined in: [entities/Album.ts:29](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L29)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`Album`

#### Overrides

[`Playlist`](Playlist.md).[`constructor`](Playlist.md#constructor)

## Properties

### apiInfo

> **apiInfo**: `object`

Defined in: [entities/Playlist.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L10)

#### uri?

> `optional` **uri**: `string` \| `null`

#### Inherited from

[`Playlist`](Playlist.md).[`apiInfo`](Playlist.md#apiinfo)

***

### artwork?

> `optional` **artwork**: [`ArtworkImageUrls`](../type-aliases/ArtworkImageUrls.md)

Defined in: [entities/Playlist.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L13)

#### Inherited from

[`Playlist`](Playlist.md).[`artwork`](Playlist.md#artwork)

***

### dates

> **dates**: `object`

Defined in: [entities/Album.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L13)

#### created?

> `optional` **created**: `string` \| `null`

#### display?

> `optional` **display**: `string` \| `null`

#### modified?

> `optional` **modified**: `string` \| `null`

#### published?

> `optional` **published**: `string` \| `null`

#### release?

> `optional` **release**: `string` \| `null`

#### Overrides

[`Playlist`](Playlist.md).[`dates`](Playlist.md#dates)

***

### duration?

> `optional` **duration**: `number`

Defined in: [entities/Playlist.ts:15](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L15)

#### Inherited from

[`Playlist`](Playlist.md).[`duration`](Playlist.md#duration)

***

### genre?

> `optional` **genre**: `string` \| `null`

Defined in: [entities/Album.ts:20](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L20)

***

### id?

> `optional` **id**: `number`

Defined in: [entities/Set.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L10)

#### Inherited from

[`Playlist`](Playlist.md).[`id`](Playlist.md#id)

***

### isPublic?

> `optional` **isPublic**: `boolean`

Defined in: [entities/Playlist.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L9)

#### Inherited from

[`Playlist`](Playlist.md).[`isPublic`](Playlist.md#ispublic)

***

### label?

> `optional` **label**: `string` \| `null`

Defined in: [entities/Album.ts:21](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L21)

***

### license?

> `optional` **license**: `string` \| `null`

Defined in: [entities/Album.ts:22](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L22)

***

### permalink

> **permalink**: `object`

Defined in: [entities/Set.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L12)

#### basic?

> `optional` **basic**: `string` \| `null`

#### full?

> `optional` **full**: `string` \| `null`

#### Inherited from

[`Playlist`](Playlist.md).[`permalink`](Playlist.md#permalink)

***

### purchaseInfo

> **purchaseInfo**: `object`

Defined in: [entities/Album.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L23)

#### title?

> `optional` **title**: `string` \| `null`

#### url?

> `optional` **url**: `string` \| `null`

***

### setType?

> `optional` **setType**: `string` \| `null`

Defined in: [entities/Playlist.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L14)

#### Inherited from

[`Playlist`](Playlist.md).[`setType`](Playlist.md#settype)

***

### sharingInfo

> **sharingInfo**: `object`

Defined in: [entities/Album.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L8)

#### embeddableBy?

> `optional` **embeddableBy**: `string` \| `null`

#### secretToken?

> `optional` **secretToken**: `string` \| `null`

#### shareability?

> `optional` **shareability**: `string` \| `null`

#### Overrides

[`Playlist`](Playlist.md).[`sharingInfo`](Playlist.md#sharinginfo)

***

### socialInfo

> **socialInfo**: `object`

Defined in: [entities/Playlist.ts:31](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L31)

#### likesCount?

> `optional` **likesCount**: `number`

#### managedByFeeds?

> `optional` **managedByFeeds**: `boolean`

#### repostsCount?

> `optional` **repostsCount**: `number`

#### Inherited from

[`Playlist`](Playlist.md).[`socialInfo`](Playlist.md#socialinfo)

***

### tags?

> `optional` **tags**: `string` \| `null`

Defined in: [entities/Album.ts:27](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L27)

***

### texts

> **texts**: `object`

Defined in: [entities/Playlist.ts:26](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L26)

#### description?

> `optional` **description**: `string` \| `null`

#### title?

> `optional` **title**: `string` \| `null`

#### Inherited from

[`Playlist`](Playlist.md).[`texts`](Playlist.md#texts)

***

### trackCount?

> `optional` **trackCount**: `number`

Defined in: [entities/Playlist.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L30)

#### Inherited from

[`Playlist`](Playlist.md).[`trackCount`](Playlist.md#trackcount)

***

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L35)

#### Inherited from

[`Playlist`](Playlist.md).[`type`](Playlist.md#type)

***

### user?

> `optional` **user**: [`User`](User.md)

Defined in: [entities/Set.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L11)

#### Inherited from

[`Set`](Set.md).[`user`](Set.md#user)

***

### type

> `static` **type**: `string` = `'Album'`

Defined in: [entities/Album.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Album.ts#L6)

#### Overrides

[`Playlist`](Playlist.md).[`type`](Playlist.md#type-1)

## Methods

### getClient()

> `protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

Defined in: [entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L57)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[`Playlist`](Playlist.md).[`getClient`](Playlist.md#getclient)

***

### getFullPlaylist()

> `protected` **getFullPlaylist**(): `Promise`\<`Album` \| [`Playlist`](Playlist.md) \| `null`\>

Defined in: [entities/Playlist.ts:76](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Playlist.ts#L76)

#### Returns

`Promise`\<`Album` \| [`Playlist`](Playlist.md) \| `null`\>

#### Inherited from

[`Playlist`](Playlist.md).[`getFullPlaylist`](Playlist.md#getfullplaylist)

***

### getImageUrls()

#### Call Signature

> `protected` **getImageUrls**(`defaultImageUrl`, `type`): [`AvatarImageUrls`](../type-aliases/AvatarImageUrls.md) \| `undefined`

Defined in: [entities/Entity.ts:61](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L61)

##### Parameters

###### defaultImageUrl

`string` | `null` | `undefined`

###### type

`"avatar"`

##### Returns

[`AvatarImageUrls`](../type-aliases/AvatarImageUrls.md) \| `undefined`

##### Inherited from

[`Playlist`](Playlist.md).[`getImageUrls`](Playlist.md#getimageurls)

#### Call Signature

> `protected` **getImageUrls**(`defaultImageUrl`, `type?`): [`ArtworkImageUrls`](../type-aliases/ArtworkImageUrls.md) \| `undefined`

Defined in: [entities/Entity.ts:62](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L62)

##### Parameters

###### defaultImageUrl

`string` | `null` | `undefined`

###### type?

`"artwork"` | `"artistStation"`

##### Returns

[`ArtworkImageUrls`](../type-aliases/ArtworkImageUrls.md) \| `undefined`

##### Inherited from

[`Playlist`](Playlist.md).[`getImageUrls`](Playlist.md#getimageurls)

***

### getJSON()

#### Call Signature

> **getJSON**(`prop?`): `any`

Defined in: [entities/Entity.ts:47](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L47)

##### Parameters

###### prop?

`undefined`

##### Returns

`any`

##### Inherited from

[`Playlist`](Playlist.md).[`getJSON`](Playlist.md#getjson)

#### Call Signature

> **getJSON**\<`T`\>(`prop`): `T` \| `null` \| `undefined`

Defined in: [entities/Entity.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L48)

##### Type Parameters

###### T

`T` *extends* `string`

##### Parameters

###### prop

`string`

##### Returns

`T` \| `null` \| `undefined`

##### Inherited from

[`Playlist`](Playlist.md).[`getJSON`](Playlist.md#getjson)

#### Call Signature

> **getJSON**\<`T`\>(`prop`): `T` \| `undefined`

Defined in: [entities/Entity.ts:49](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L49)

##### Type Parameters

###### T

`T`

##### Parameters

###### prop

`string`

##### Returns

`T` \| `undefined`

##### Inherited from

[`Playlist`](Playlist.md).[`getJSON`](Playlist.md#getjson)

***

### getTracks()

> **getTracks**(`options?`): `Promise`\<[`Track`](Track.md)[]\>

Defined in: [entities/Set.ts:41](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L41)

#### Parameters

##### options?

###### limit?

`number`

###### offset?

`number`

#### Returns

`Promise`\<[`Track`](Track.md)[]\>

#### Inherited from

[`Playlist`](Playlist.md).[`getTracks`](Playlist.md#gettracks)
