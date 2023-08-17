[soundcloud-fetch](../README.md) / User

# Class: User

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Properties

- [apiInfo](User.md#apiinfo)
- [avatar](User.md#avatar)
- [badges](User.md#badges)
- [id](User.md#id)
- [isVerified](User.md#isverified)
- [lastModified](User.md#lastmodified)
- [location](User.md#location)
- [names](User.md#names)
- [permalink](User.md#permalink)
- [type](User.md#type)
- [type](User.md#type-1)

### Methods

- [getClient](User.md#getclient)
- [getImageUrls](User.md#getimageurls)
- [getJSON](User.md#getjson)

## Constructors

### constructor

• **new User**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/User.ts:36](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L36)

## Properties

### apiInfo

• **apiInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `uri?` | ``null`` \| `string` |
| `urn?` | ``null`` \| `string` |

#### Defined in

[lib/entities/User.ts:20](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L20)

___

### avatar

• `Optional` **avatar**: [`AvatarImageUrls`](../README.md#avatarimageurls)

#### Defined in

[lib/entities/User.ts:29](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L29)

___

### badges

• **badges**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pro?` | `boolean` |
| `proUnlimited?` | `boolean` |
| `verified?` | `boolean` |

#### Defined in

[lib/entities/User.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L30)

___

### id

• `Optional` **id**: `number`

#### Defined in

[lib/entities/User.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L8)

___

### isVerified

• `Optional` **isVerified**: `boolean`

#### Defined in

[lib/entities/User.ts:28](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L28)

___

### lastModified

• `Optional` **lastModified**: ``null`` \| `string`

#### Defined in

[lib/entities/User.ts:15](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L15)

___

### location

• **location**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `city?` | ``null`` \| `string` |
| `country?` | ``null`` \| `string` |

#### Defined in

[lib/entities/User.ts:24](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L24)

___

### names

• **names**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `first?` | ``null`` \| `string` |
| `full?` | ``null`` \| `string` |
| `last?` | ``null`` \| `string` |
| `username?` | ``null`` \| `string` |

#### Defined in

[lib/entities/User.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L9)

___

### permalink

• **permalink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basic?` | ``null`` \| `string` |
| `full?` | ``null`` \| `string` |

#### Defined in

[lib/entities/User.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L16)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Entity](Entity.md).[type](Entity.md#type)

#### Defined in

[lib/entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L35)

___

### type

▪ `Static` **type**: `string` = `'User'`

#### Overrides

[Entity](Entity.md).[type](Entity.md#type-1)

#### Defined in

[lib/entities/User.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/User.ts#L6)

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
