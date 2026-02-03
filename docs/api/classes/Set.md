[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Set

# Abstract Class: Set\<ID\>

Defined in: [entities/Set.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L8)

## Extends

- [`Entity`](Entity.md)

## Extended by

- [`Playlist`](Playlist.md)
- [`SystemPlaylist`](SystemPlaylist.md)

## Type Parameters

### ID

`ID` *extends* `string` \| `number`

## Constructors

### Constructor

> **new Set**\<`ID`\>(`json`, `client`): `Set`\<`ID`\>

Defined in: [entities/Set.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L23)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`Set`\<`ID`\>

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### id?

> `optional` **id**: `ID`

Defined in: [entities/Set.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L10)

***

### permalink

> **permalink**: `object`

Defined in: [entities/Set.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L12)

#### basic?

> `optional` **basic**: `string` \| `null`

#### full?

> `optional` **full**: `string` \| `null`

***

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L35)

#### Inherited from

[`Entity`](Entity.md).[`type`](Entity.md#type)

***

### user?

> `optional` **user**: [`User`](User.md)

Defined in: [entities/Set.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L11)

***

### type

> `readonly` `static` **type**: `string` = `'Entity'`

Defined in: [entities/Entity.ts:34](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L34)

#### Inherited from

[`Entity`](Entity.md).[`type`](Entity.md#type-1)

## Methods

### getClient()

> `protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

Defined in: [entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L57)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[`Entity`](Entity.md).[`getClient`](Entity.md#getclient)

***

### getFullPlaylist()

> `abstract` `protected` **getFullPlaylist**(): `Promise`\<`Set`\<`string` \| `number`\> \| `null`\>

Defined in: [entities/Set.ts:108](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Set.ts#L108)

#### Returns

`Promise`\<`Set`\<`string` \| `number`\> \| `null`\>

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

[`Entity`](Entity.md).[`getImageUrls`](Entity.md#getimageurls)

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

[`Entity`](Entity.md).[`getImageUrls`](Entity.md#getimageurls)

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

[`Entity`](Entity.md).[`getJSON`](Entity.md#getjson)

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

[`Entity`](Entity.md).[`getJSON`](Entity.md#getjson)

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

[`Entity`](Entity.md).[`getJSON`](Entity.md#getjson)

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
