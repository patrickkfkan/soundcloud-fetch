[soundcloud-fetch](../README.md) / Collection

# Class: Collection<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Accessors

- [items](Collection.md#items)
- [nextUri](Collection.md#nexturi)
- [type](Collection.md#type)

### Methods

- [getClient](Collection.md#getclient)
- [getItems](Collection.md#getitems)
- [getType](Collection.md#gettype)
- [lazyGet](Collection.md#lazyget)
- [toPlainObject](Collection.md#toplainobject)

## Constructors

### constructor

• **new Collection**<`T`\>(`json`, `client`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Defined in

[lib/collections/Collection.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L10)

## Accessors

### items

• `get` **items**(): `T`[]

#### Returns

`T`[]

#### Defined in

[lib/collections/Collection.ts:38](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L38)

___

### nextUri

• `get` **nextUri**(): `any`

#### Returns

`any`

#### Defined in

[lib/collections/Collection.ts:56](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L56)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Defined in

[lib/collections/Collection.ts:34](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L34)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Defined in

[lib/collections/Collection.ts:52](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L52)

___

### getItems

▸ `Protected` `Abstract` **getItems**(): `T`[]

#### Returns

`T`[]

#### Defined in

[lib/collections/Collection.ts:32](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L32)

___

### getType

▸ `Protected` `Abstract` **getType**(): `string`

#### Returns

`string`

#### Defined in

[lib/collections/Collection.ts:31](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L31)

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

[lib/collections/Collection.ts:60](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L60)

___

### toPlainObject

▸ **toPlainObject**(): `any`

#### Returns

`any`

#### Defined in

[lib/collections/Collection.ts:67](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/collections/Collection.ts#L67)
