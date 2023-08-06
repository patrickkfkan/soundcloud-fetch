[soundcloud-fetch](../README.md) / Selection

# Class: Selection

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Selection`**

## Table of contents

### Constructors

- [constructor](Selection.md#constructor)

### Accessors

- [id](Selection.md#id)
- [items](Selection.md#items)
- [nextUri](Selection.md#nexturi)
- [title](Selection.md#title)
- [type](Selection.md#type)

### Methods

- [getClient](Selection.md#getclient)
- [getImageUrls](Selection.md#getimageurls)
- [getType](Selection.md#gettype)
- [lazyGet](Selection.md#lazyget)
- [lazyGetAsync](Selection.md#lazygetasync)
- [toPlainObject](Selection.md#toplainobject)

## Constructors

### constructor

• **new Selection**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/Selection.ts:7](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Selection.ts#L7)

## Accessors

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Selection.ts:60](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Selection.ts#L60)

___

### items

• `get` **items**(): [`EntityType`](../README.md#entitytype)[]

#### Returns

[`EntityType`](../README.md#entitytype)[]

#### Defined in

[lib/entities/Selection.ts:72](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Selection.ts#L72)

___

### nextUri

• `get` **nextUri**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Selection.ts:68](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Selection.ts#L68)

___

### title

• `get` **title**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Selection.ts:64](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Selection.ts#L64)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Entity.type

#### Defined in

[lib/entities/Entity.ts:25](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Entity.ts#L25)

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

[lib/entities/Selection.ts:38](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Selection.ts#L38)

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
