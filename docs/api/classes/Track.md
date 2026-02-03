[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / Track

# Class: Track

Defined in: [entities/Track.ts:7](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L7)

## Extends

- [`Entity`](Entity.md)

## Constructors

### Constructor

> **new Track**(`json`, `client`): `Track`

Defined in: [entities/Track.ts:77](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L77)

#### Parameters

##### json

`any`

##### client

[`SoundCloud`](SoundCloud.md)

#### Returns

`Track`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### apiInfo

> **apiInfo**: `object`

Defined in: [entities/Track.ts:54](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L54)

#### streamable?

> `optional` **streamable**: `boolean`

#### uri?

> `optional` **uri**: `string` \| `null`

#### urn?

> `optional` **urn**: `string` \| `null`

***

### artwork?

> `optional` **artwork**: [`ArtworkImageUrls`](../type-aliases/ArtworkImageUrls.md)

Defined in: [entities/Track.ts:73](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L73)

***

### dates

> **dates**: `object`

Defined in: [entities/Track.ts:17](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L17)

#### created?

> `optional` **created**: `string` \| `null`

#### display?

> `optional` **display**: `string` \| `null`

#### modified?

> `optional` **modified**: `string` \| `null`

#### released?

> `optional` **released**: `string` \| `null`

***

### downloadInfo

> **downloadInfo**: `object`

Defined in: [entities/Track.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L23)

#### downloadable?

> `optional` **downloadable**: `boolean`

#### downloadCount?

> `optional` **downloadCount**: `number`

#### hasDownloadsLeft?

> `optional` **hasDownloadsLeft**: `boolean`

***

### durations

> **durations**: `object`

Defined in: [entities/Track.ts:64](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L64)

#### full?

> `optional` **full**: `number`

#### playback?

> `optional` **playback**: `number`

***

### genre?

> `optional` **genre**: `string` \| `null`

Defined in: [entities/Track.ts:68](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L68)

***

### id?

> `optional` **id**: `number`

Defined in: [entities/Track.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L11)

***

### isBlocked?

> `optional` **isBlocked**: `boolean`

Defined in: [entities/Track.ts:43](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L43)

***

### isPublic?

> `optional` **isPublic**: `boolean`

Defined in: [entities/Track.ts:70](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L70)

***

### isSnipped?

> `optional` **isSnipped**: `boolean`

Defined in: [entities/Track.ts:44](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L44)

***

### label?

> `optional` **label**: `string` \| `null`

Defined in: [entities/Track.ts:72](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L72)

***

### license?

> `optional` **license**: `string` \| `null`

Defined in: [entities/Track.ts:69](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L69)

***

### mediaInfo

> **mediaInfo**: `object`

Defined in: [entities/Track.ts:45](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L45)

#### encodingState?

> `optional` **encodingState**: `string` \| `null`

#### trackFormat?

> `optional` **trackFormat**: `string` \| `null`

#### transcodings

> **transcodings**: [`MediaTranscoding`](MediaTranscoding.md)[]

***

### permalink

> **permalink**: `object`

Defined in: [entities/Track.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L50)

#### basic?

> `optional` **basic**: `string` \| `null`

#### full?

> `optional` **full**: `string` \| `null`

***

### playbackInfo

> **playbackInfo**: `object`

Defined in: [entities/Track.ts:39](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L39)

#### playbackCount?

> `optional` **playbackCount**: `number`

#### policy?

> `optional` **policy**: `string` \| `null`

***

### publisher?

> `optional` **publisher**: [`Publisher`](Publisher.md)

Defined in: [entities/Track.ts:63](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L63)

***

### purchaseInfo

> **purchaseInfo**: `object`

Defined in: [entities/Track.ts:59](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L59)

#### title?

> `optional` **title**: `string` \| `null`

#### url?

> `optional` **url**: `string` \| `null`

***

### sharingInfo

> **sharingInfo**: `object`

Defined in: [entities/Track.ts:34](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L34)

#### embeddableBy?

> `optional` **embeddableBy**: `string` \| `null`

#### secretToken?

> `optional` **secretToken**: `string` \| `null`

#### shareability?

> `optional` **shareability**: `string` \| `null`

***

### socialInfo

> **socialInfo**: `object`

Defined in: [entities/Track.ts:28](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L28)

#### commentable?

> `optional` **commentable**: `boolean`

#### commentCount?

> `optional` **commentCount**: `number`

#### likesCount?

> `optional` **likesCount**: `number`

#### repostsCount?

> `optional` **repostsCount**: `number`

***

### tags?

> `optional` **tags**: `string` \| `null`

Defined in: [entities/Track.ts:71](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L71)

***

### texts

> **texts**: `object`

Defined in: [entities/Track.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L12)

#### caption?

> `optional` **caption**: `string` \| `null`

#### description?

> `optional` **description**: `string` \| `null`

#### title?

> `optional` **title**: `string` \| `null`

***

### type

> `readonly` **type**: `string`

Defined in: [entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Entity.ts#L35)

#### Inherited from

[`Entity`](Entity.md).[`type`](Entity.md#type)

***

### user?

> `optional` **user**: [`User`](User.md)

Defined in: [entities/Track.ts:75](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L75)

***

### waveform?

> `optional` **waveform**: `string` \| `null`

Defined in: [entities/Track.ts:74](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L74)

***

### type

> `static` **type**: `string` = `'Track'`

Defined in: [entities/Track.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/entities/Track.ts#L9)

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
