[soundcloud-fetch](../README.md) / CollectionContinuation

# Class: CollectionContinuation<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |

## Table of contents

### Constructors

- [constructor](CollectionContinuation.md#constructor)

### Properties

- [opts](CollectionContinuation.md#opts)
- [uri](CollectionContinuation.md#uri)

### Methods

- [parse](CollectionContinuation.md#parse)
- [stringify](CollectionContinuation.md#stringify)

## Constructors

### constructor

• **new CollectionContinuation**<`T`\>(`uri`, `opts?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `opts` | [`CollectionOptions`](../README.md#collectionoptions)<`T`\> |

#### Defined in

[lib/collections/CollectionContinuation.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/CollectionContinuation.ts#L8)

## Properties

### opts

• `Readonly` **opts**: [`CollectionOptions`](../README.md#collectionoptions)<`T`\>

#### Defined in

[lib/collections/CollectionContinuation.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/CollectionContinuation.ts#L6)

___

### uri

• `Readonly` **uri**: `string`

#### Defined in

[lib/collections/CollectionContinuation.ts:5](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/CollectionContinuation.ts#L5)

## Methods

### parse

▸ `Static` **parse**(`data`): ``null`` \| [`CollectionContinuation`](CollectionContinuation.md)<[`EntityType`](../README.md#entitytype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

``null`` \| [`CollectionContinuation`](CollectionContinuation.md)<[`EntityType`](../README.md#entitytype)\>

#### Defined in

[lib/collections/CollectionContinuation.ts:46](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/CollectionContinuation.ts#L46)

___

### stringify

▸ `Static` **stringify**<`T`\>(`data`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CollectionContinuation`](CollectionContinuation.md)<`T`\> |

#### Returns

`string`

#### Defined in

[lib/collections/CollectionContinuation.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/CollectionContinuation.ts#L13)
