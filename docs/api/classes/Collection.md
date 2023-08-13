[soundcloud-fetch](../README.md) / Collection

# Class: Collection<T, K\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |
| `K` | extends [`EntityClasses`](../README.md#entityclasses)<`T`\> |

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Properties

- [continuation](Collection.md#continuation)
- [items](Collection.md#items)
- [nextUri](Collection.md#nexturi)
- [type](Collection.md#type)
- [type](Collection.md#type-1)

### Methods

- [getClient](Collection.md#getclient)
- [getItems](Collection.md#getitems)
- [getJSON](Collection.md#getjson)

## Constructors

### constructor

• **new Collection**<`T`, `K`\>(`json`, `client`, `opts`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |
| `K` | extends [`EntityClasses`](../README.md#entityclasses)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |
| `opts` | [`CollectionOptions`](../README.md#collectionoptions)<`T`, `K`\> |

#### Defined in

[lib/collections/Collection.ts:29](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L29)

## Properties

### continuation

• **continuation**: ``null`` \| [`CollectionContinuation`](../interfaces/CollectionContinuation.md)<`T`, `K`\>

#### Defined in

[lib/collections/Collection.ts:23](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L23)

___

### items

• **items**: [`EntityClassesToTypes`](../README.md#entityclassestotypes)<`T`, `K`\>[]

#### Defined in

[lib/collections/Collection.ts:21](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L21)

___

### nextUri

• `Optional` **nextUri**: ``null`` \| `string`

#### Defined in

[lib/collections/Collection.ts:22](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L22)

___

### type

• `Readonly` **type**: `string`

#### Defined in

[lib/collections/Collection.ts:19](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L19)

___

### type

▪ `Static` `Readonly` **type**: `string` = `'Collection'`

#### Defined in

[lib/collections/Collection.ts:18](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L18)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Defined in

[lib/collections/Collection.ts:93](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L93)

___

### getItems

▸ `Protected` **getItems**(): [`EntityClassesToTypes`](../README.md#entityclassestotypes)<`T`, `K`\>[]

#### Returns

[`EntityClassesToTypes`](../README.md#entityclassestotypes)<`T`, `K`\>[]

#### Defined in

[lib/collections/Collection.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L48)

___

### getJSON

▸ **getJSON**(`prop?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop?` | `undefined` |

#### Returns

`any`

#### Defined in

[lib/collections/Collection.ts:83](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L83)

▸ **getJSON**<`T`\>(`prop`): `undefined` \| ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `string` |

#### Returns

`undefined` \| ``null`` \| `T`

#### Defined in

[lib/collections/Collection.ts:84](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L84)

▸ **getJSON**<`T`\>(`prop`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[lib/collections/Collection.ts:85](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L85)
