[soundcloud-fetch](../README.md) / MediaTranscoding

# Class: MediaTranscoding

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`MediaTranscoding`**

## Table of contents

### Constructors

- [constructor](MediaTranscoding.md#constructor)

### Accessors

- [duration](MediaTranscoding.md#duration)
- [isSnipped](MediaTranscoding.md#issnipped)
- [mimeType](MediaTranscoding.md#mimetype)
- [preset](MediaTranscoding.md#preset)
- [protocol](MediaTranscoding.md#protocol)
- [quality](MediaTranscoding.md#quality)
- [type](MediaTranscoding.md#type)
- [url](MediaTranscoding.md#url)

### Methods

- [getClient](MediaTranscoding.md#getclient)
- [getImageUrls](MediaTranscoding.md#getimageurls)
- [getType](MediaTranscoding.md#gettype)
- [lazyGet](MediaTranscoding.md#lazyget)
- [lazyGetAsync](MediaTranscoding.md#lazygetasync)
- [toPlainObject](MediaTranscoding.md#toplainobject)

## Constructors

### constructor

• **new MediaTranscoding**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/MediaTranscoding.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L6)

## Accessors

### duration

• `get` **duration**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/MediaTranscoding.ts:103](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L103)

___

### isSnipped

• `get` **isSnipped**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/MediaTranscoding.ts:107](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L107)

___

### mimeType

• `get` **mimeType**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/MediaTranscoding.ts:115](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L115)

___

### preset

• `get` **preset**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/MediaTranscoding.ts:99](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L99)

___

### protocol

• `get` **protocol**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/MediaTranscoding.ts:111](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L111)

___

### quality

• `get` **quality**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/MediaTranscoding.ts:119](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L119)

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

### url

• `get` **url**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/MediaTranscoding.ts:95](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L95)

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

[lib/entities/MediaTranscoding.ts:55](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/MediaTranscoding.ts#L55)

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
