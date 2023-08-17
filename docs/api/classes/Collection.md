[soundcloud-fetch](../README.md) / Collection

# Class: Collection<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Properties

- [continuation](Collection.md#continuation)
- [items](Collection.md#items)
- [type](Collection.md#type)
- [type](Collection.md#type-1)

### Methods

- [getClient](Collection.md#getclient)
- [getItems](Collection.md#getitems)
- [getJSON](Collection.md#getjson)

## Constructors

### constructor

• **new Collection**<`T`\>(`json`, `client`, `opts`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |
| `opts` | [`CollectionOptions`](../README.md#collectionoptions)<`T`\> |

#### Defined in

[lib/collections/Collection.ts:26](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L26)

## Properties

### continuation

• **continuation**: ``null`` \| [`CollectionContinuation`](CollectionContinuation.md)<`T`\>

#### Defined in

[lib/collections/Collection.ts:20](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L20)

___

### items

• **items**: `T`[]

#### Defined in

[lib/collections/Collection.ts:19](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L19)

___

### type

• `Readonly` **type**: `string`

#### Defined in

[lib/collections/Collection.ts:17](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L17)

___

### type

▪ `Static` `Readonly` **type**: `string` = `'Collection'`

#### Defined in

[lib/collections/Collection.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L16)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Defined in

[lib/collections/Collection.ts:81](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L81)

___

### getItems

▸ `Protected` **getItems**(): `T`[]

#### Returns

`T`[]

#### Defined in

[lib/collections/Collection.ts:42](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L42)

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

[lib/collections/Collection.ts:71](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L71)

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

[lib/collections/Collection.ts:72](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L72)

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

[lib/collections/Collection.ts:73](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L73)
