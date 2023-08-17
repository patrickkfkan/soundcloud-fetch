[soundcloud-fetch](../README.md) / Selection

# Class: Selection

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Selection`**

## Table of contents

### Constructors

- [constructor](Selection.md#constructor)

### Properties

- [id](Selection.md#id)
- [items](Selection.md#items)
- [nextUri](Selection.md#nexturi)
- [title](Selection.md#title)
- [type](Selection.md#type)
- [type](Selection.md#type-1)

### Methods

- [getClient](Selection.md#getclient)
- [getImageUrls](Selection.md#getimageurls)
- [getJSON](Selection.md#getjson)

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

[lib/entities/Selection.ts:15](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Selection.ts#L15)

## Properties

### id

• `Optional` **id**: ``null`` \| `string`

#### Defined in

[lib/entities/Selection.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Selection.ts#L10)

___

### items

• **items**: [`EntityType`](../README.md#entitytype)[]

#### Defined in

[lib/entities/Selection.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Selection.ts#L13)

___

### nextUri

• `Optional` **nextUri**: ``null`` \| `string`

#### Defined in

[lib/entities/Selection.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Selection.ts#L12)

___

### title

• `Optional` **title**: ``null`` \| `string`

#### Defined in

[lib/entities/Selection.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Selection.ts#L11)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Entity](Entity.md).[type](Entity.md#type)

#### Defined in

[lib/entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L35)

___

### type

▪ `Static` **type**: `string` = `'Selection'`

#### Overrides

[Entity](Entity.md).[type](Entity.md#type-1)

#### Defined in

[lib/entities/Selection.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Selection.ts#L8)

## Methods

### getClient

▸ `Protected` **getClient**(): [`SoundCloud`](SoundCloud.md)

#### Returns

[`SoundCloud`](SoundCloud.md)

#### Inherited from

[Entity](Entity.md).[getClient](Entity.md#getclient)

#### Defined in

[lib/entities/Entity.ts:57](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L57)

___

### getImageUrls

▸ `Protected` **getImageUrls**(`defaultImageUrl`, `type`): `undefined` \| [`AvatarImageUrls`](../README.md#avatarimageurls)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultImageUrl` | `undefined` \| ``null`` \| `string` |
| `type` | ``"avatar"`` |

#### Returns

`undefined` \| [`AvatarImageUrls`](../README.md#avatarimageurls)

#### Inherited from

[Entity](Entity.md).[getImageUrls](Entity.md#getimageurls)

#### Defined in

[lib/entities/Entity.ts:61](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L61)

▸ `Protected` **getImageUrls**(`defaultImageUrl`, `type?`): `undefined` \| [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultImageUrl` | `undefined` \| ``null`` \| `string` |
| `type?` | ``"artwork"`` \| ``"artistStation"`` |

#### Returns

`undefined` \| [`ArtworkImageUrls`](../README.md#artworkimageurls)

#### Inherited from

[Entity](Entity.md).[getImageUrls](Entity.md#getimageurls)

#### Defined in

[lib/entities/Entity.ts:62](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L62)

___

### getJSON

▸ **getJSON**(`prop?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop?` | `undefined` |

#### Returns

`any`

#### Inherited from

[Entity](Entity.md).[getJSON](Entity.md#getjson)

#### Defined in

[lib/entities/Entity.ts:47](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L47)

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

#### Inherited from

[Entity](Entity.md).[getJSON](Entity.md#getjson)

#### Defined in

[lib/entities/Entity.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L48)

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

#### Inherited from

[Entity](Entity.md).[getJSON](Entity.md#getjson)

#### Defined in

[lib/entities/Entity.ts:49](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L49)
