[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Publisher

# Class: Publisher

Defined in: [entities/Publisher.ts:4](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L4)

## Extends

- [`Entity`](Entity.md)

## Constructors

### Constructor

> **new Publisher**(`json`, `client`): `Publisher`

Defined in: [entities/Publisher.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L30)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`Publisher`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### albumTitle?

> `optional` **albumTitle**: `string` \| `null`

Defined in: [entities/Publisher.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L10)

***

### apiInfo

> **apiInfo**: `object`

Defined in: [entities/Publisher.ts:26](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L26)

#### urn?

> `optional` **urn**: `string` \| `null`

***

### artist?

> `optional` **artist**: `string` \| `null`

Defined in: [entities/Publisher.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L9)

***

### containsMusic?

> `optional` **containsMusic**: `boolean`

Defined in: [entities/Publisher.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L11)

***

### copyrightText

> **copyrightText**: `object`

Defined in: [entities/Publisher.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L16)

#### display

> **display**: `object`

##### display.c?

> `optional` **c**: `string` \| `null`

##### display.p?

> `optional` **p**: `string` \| `null`

#### general

> **general**: `object`

##### general.c?

> `optional` **c**: `string` \| `null`

##### general.p?

> `optional` **p**: `string` \| `null`

***

### id?

> `optional` **id**: `number`

Defined in: [entities/Publisher.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L8)

***

### isExplicit?

> `optional` **isExplicit**: `boolean`

Defined in: [entities/Publisher.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L14)

***

### ISRC?

> `optional` **ISRC**: `string` \| `null`

Defined in: [entities/Publisher.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L13)

***

### releaseTitle?

> `optional` **releaseTitle**: `string` \| `null`

Defined in: [entities/Publisher.ts:15](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L15)

***

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L35)

#### Inherited from

[`Entity`](Entity.md).[`type`](Entity.md#type)

***

### UPCOrEAN?

> `optional` **UPCOrEAN**: `string` \| `null`

Defined in: [entities/Publisher.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L12)

***

### type

> `static` **type**: `string` = `'Publisher'`

Defined in: [entities/Publisher.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Publisher.ts#L6)

#### Overrides

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
