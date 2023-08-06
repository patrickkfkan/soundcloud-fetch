[soundcloud-fetch](../README.md) / Entity

# Class: Entity

## Hierarchy

- **`Entity`**

  ↳ [`MediaTranscoding`](MediaTranscoding.md)

  ↳ [`PlaylistBase`](PlaylistBase.md)

  ↳ [`Publisher`](Publisher.md)

  ↳ [`Selection`](Selection.md)

  ↳ [`Track`](Track.md)

  ↳ [`User`](User.md)

## Table of contents

### Constructors

- [constructor](Entity.md#constructor)

### Accessors

- [type](Entity.md#type)

### Methods

- [getClient](Entity.md#getclient)
- [getImageUrls](Entity.md#getimageurls)
- [getType](Entity.md#gettype)
- [lazyGet](Entity.md#lazyget)
- [lazyGetAsync](Entity.md#lazygetasync)
- [toPlainObject](Entity.md#toplainobject)

## Constructors

### constructor

• **new Entity**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Defined in

[lib/entities/Entity.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L10)

## Accessors

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Defined in

[lib/entities/Entity.ts:25](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L25)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

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

#### Defined in

[lib/entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L57)

___

### getType

▸ `Protected` `Abstract` **getType**(): `string`

#### Returns

`string`

#### Defined in

[lib/entities/Entity.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L23)

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

#### Defined in

[lib/entities/Entity.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L50)

___

### toPlainObject

▸ **toPlainObject**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Entity.ts:76](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L76)
