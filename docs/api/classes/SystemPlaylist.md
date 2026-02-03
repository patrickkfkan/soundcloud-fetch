[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / SystemPlaylist

# Class: SystemPlaylist

Defined in: [entities/SystemPlaylist.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L6)

## Extends

- [`Set`](Set.md)\<`string`\>

## Constructors

### Constructor

> **new SystemPlaylist**(`json`, `client`): `SystemPlaylist`

Defined in: [entities/SystemPlaylist.ts:34](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L34)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`SystemPlaylist`

#### Overrides

[`Set`](Set.md).[`constructor`](Set.md#constructor)

## Properties

### apiInfo

> **apiInfo**: `object`

Defined in: [entities/SystemPlaylist.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L12)

#### queryUrn?

> `optional` **queryUrn**: `string` \| `null`

#### urn?

> `optional` **urn**: `string` \| `null`

***

### artwork

> **artwork**: `object`

Defined in: [entities/SystemPlaylist.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L16)

#### calculated?

> `optional` **calculated**: [`ArtworkImageUrls`](../type-aliases/ArtworkImageUrls.md)

#### original?

> `optional` **original**: [`ArtworkImageUrls`](../type-aliases/ArtworkImageUrls.md)

***

### id?

> `optional` **id**: `string`

Defined in: [entities/Set.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L10)

#### Inherited from

[`Set`](Set.md).[`id`](Set.md#id-1)

***

### isPublic?

> `optional` **isPublic**: `boolean`

Defined in: [entities/SystemPlaylist.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L10)

***

### lastUpdated?

> `optional` **lastUpdated**: `string` \| `null`

Defined in: [entities/SystemPlaylist.ts:21](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L21)

***

### madeFor?

> `optional` **madeFor**: [`User`](User.md)

Defined in: [entities/SystemPlaylist.ts:20](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L20)

***

### permalink

> **permalink**: `object`

Defined in: [entities/Set.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L12)

#### basic?

> `optional` **basic**: `string` \| `null`

#### full?

> `optional` **full**: `string` \| `null`

#### Inherited from

[`Set`](Set.md).[`permalink`](Set.md#permalink)

***

### playlistType?

> `optional` **playlistType**: `String` \| `"artistStation"` \| `"playlist"` \| `null`

Defined in: [entities/SystemPlaylist.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L11)

***

### texts

> **texts**: `object`

Defined in: [entities/SystemPlaylist.ts:22](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L22)

#### description

> **description**: `object`

##### description.full?

> `optional` **full**: `string` \| `null`

##### description.short?

> `optional` **short**: `string` \| `null`

#### title

> **title**: `object`

##### title.full?

> `optional` **full**: `string` \| `null`

##### title.short?

> `optional` **short**: `string` \| `null`

***

### trackCount

> **trackCount**: `number`

Defined in: [entities/SystemPlaylist.ts:32](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L32)

***

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L35)

#### Inherited from

[`Set`](Set.md).[`type`](Set.md#type)

***

### user?

> `optional` **user**: [`User`](User.md)

Defined in: [entities/Set.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L11)

#### Inherited from

[`Set`](Set.md).[`user`](Set.md#user)

***

### type

> `static` **type**: `string` = `'SystemPlaylist'`

Defined in: [entities/SystemPlaylist.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L8)

#### Overrides

[`Set`](Set.md).[`type`](Set.md#type-1)

## Methods

### getClient()

> `protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

Defined in: [entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L57)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[`Set`](Set.md).[`getClient`](Set.md#getclient)

***

### getFullPlaylist()

> `protected` **getFullPlaylist**(): `Promise`\<`SystemPlaylist` \| `null`\>

Defined in: [entities/SystemPlaylist.ts:90](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/SystemPlaylist.ts#L90)

#### Returns

`Promise`\<`SystemPlaylist` \| `null`\>

#### Overrides

[`Set`](Set.md).[`getFullPlaylist`](Set.md#getfullplaylist)

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

[`Set`](Set.md).[`getImageUrls`](Set.md#getimageurls)

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

[`Set`](Set.md).[`getImageUrls`](Set.md#getimageurls)

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

[`Set`](Set.md).[`getJSON`](Set.md#getjson)

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

[`Set`](Set.md).[`getJSON`](Set.md#getjson)

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

[`Set`](Set.md).[`getJSON`](Set.md#getjson)

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

[`Set`](Set.md).[`getTracks`](Set.md#gettracks)
