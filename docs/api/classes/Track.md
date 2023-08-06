[soundcloud-fetch](../README.md) / Track

# Class: Track

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Track`**

## Table of contents

### Constructors

- [constructor](Track.md#constructor)

### Accessors

- [apiInfo](Track.md#apiinfo)
- [artwork](Track.md#artwork)
- [dates](Track.md#dates)
- [downloadData](Track.md#downloaddata)
- [durations](Track.md#durations)
- [genre](Track.md#genre)
- [id](Track.md#id)
- [isBlocked](Track.md#isblocked)
- [isPublic](Track.md#ispublic)
- [isSnipped](Track.md#issnipped)
- [label](Track.md#label)
- [license](Track.md#license)
- [mediaInfo](Track.md#mediainfo)
- [permalink](Track.md#permalink)
- [playbackData](Track.md#playbackdata)
- [publisher](Track.md#publisher)
- [purchaseInfo](Track.md#purchaseinfo)
- [sharingData](Track.md#sharingdata)
- [socialData](Track.md#socialdata)
- [tags](Track.md#tags)
- [texts](Track.md#texts)
- [type](Track.md#type)
- [user](Track.md#user)
- [waveform](Track.md#waveform)

### Methods

- [getClient](Track.md#getclient)
- [getImageUrls](Track.md#getimageurls)
- [getType](Track.md#gettype)
- [lazyGet](Track.md#lazyget)
- [lazyGetAsync](Track.md#lazygetasync)
- [toPlainObject](Track.md#toplainobject)

## Constructors

### constructor

• **new Track**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/Track.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L9)

## Accessors

### apiInfo

• `get` **apiInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `streamable` | `any` |
| `uri` | `any` |
| `urn` | `any` |

#### Defined in

[lib/entities/Track.ts:367](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L367)

___

### artwork

• `get` **artwork**(): ``null`` \| `string` \| `Record`<`string`, `string`\>

#### Returns

``null`` \| `string` \| `Record`<`string`, `string`\>

#### Defined in

[lib/entities/Track.ts:403](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L403)

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
| `released` | `any` |

#### Defined in

[lib/entities/Track.ts:331](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L331)

___

### downloadData

• `get` **downloadData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `downloadCount` | `any` |
| `downloadable` | `any` |
| `hasDownloadsLeft` | `any` |

#### Defined in

[lib/entities/Track.ts:335](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L335)

___

### durations

• `get` **durations**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `full` | `any` |
| `playback` | `any` |

#### Defined in

[lib/entities/Track.ts:379](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L379)

___

### genre

• `get` **genre**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Track.ts:383](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L383)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Track.ts:323](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L323)

___

### isBlocked

• `get` **isBlocked**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/entities/Track.ts:351](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L351)

___

### isPublic

• `get` **isPublic**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Track.ts:391](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L391)

___

### isSnipped

• `get` **isSnipped**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/entities/Track.ts:355](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L355)

___

### label

• `get` **label**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Track.ts:399](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L399)

___

### license

• `get` **license**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Track.ts:387](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L387)

___

### mediaInfo

• `get` **mediaInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `encodingState` | `any` |
| `trackFormat` | `any` |
| `transcodings` | [`MediaTranscoding`](MediaTranscoding.md)[] |

#### Defined in

[lib/entities/Track.ts:359](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L359)

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

[lib/entities/Track.ts:363](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L363)

___

### playbackData

• `get` **playbackData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `playbackCount` | `any` |
| `policy` | `any` |

#### Defined in

[lib/entities/Track.ts:347](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L347)

___

### publisher

• `get` **publisher**(): ``null`` \| [`Publisher`](Publisher.md)

#### Returns

``null`` \| [`Publisher`](Publisher.md)

#### Defined in

[lib/entities/Track.ts:375](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L375)

___

### purchaseInfo

• `get` **purchaseInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `title` | `any` |
| `url` | `any` |

#### Defined in

[lib/entities/Track.ts:371](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L371)

___

### sharingData

• `get` **sharingData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `embeddableBy` | `any` |
| `secretToken` | `any` |
| `shareability` | `any` |

#### Defined in

[lib/entities/Track.ts:343](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L343)

___

### socialData

• `get` **socialData**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `commentCount` | `any` |
| `commentable` | `any` |
| `likesCount` | `any` |
| `repostsCount` | `any` |

#### Defined in

[lib/entities/Track.ts:339](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L339)

___

### tags

• `get` **tags**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Track.ts:395](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L395)

___

### texts

• `get` **texts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `caption` | `any` |
| `description` | `any` |
| `title` | `any` |

#### Defined in

[lib/entities/Track.ts:327](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L327)

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

[lib/entities/Track.ts:411](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L411)

___

### waveform

• `get` **waveform**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Track.ts:407](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L407)

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

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[Entity](Entity.md).[getType](Entity.md#gettype)

#### Defined in

[lib/entities/Track.ts:154](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Track.ts#L154)

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
