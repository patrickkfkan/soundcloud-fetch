[soundcloud-fetch](../README.md) / Publisher

# Class: Publisher

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Publisher`**

## Table of contents

### Constructors

- [constructor](Publisher.md#constructor)

### Properties

- [ISRC](Publisher.md#isrc)
- [UPCOrEAN](Publisher.md#upcorean)
- [albumTitle](Publisher.md#albumtitle)
- [apiInfo](Publisher.md#apiinfo)
- [artist](Publisher.md#artist)
- [containsMusic](Publisher.md#containsmusic)
- [copyrightText](Publisher.md#copyrighttext)
- [id](Publisher.md#id)
- [isExplicit](Publisher.md#isexplicit)
- [releaseTitle](Publisher.md#releasetitle)
- [type](Publisher.md#type)
- [type](Publisher.md#type-1)

### Methods

- [getClient](Publisher.md#getclient)
- [getImageUrls](Publisher.md#getimageurls)
- [getJSON](Publisher.md#getjson)

## Constructors

### constructor

• **new Publisher**(`json`, `client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `client` | [`SoundCloud`](SoundCloud.md) |

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

[lib/entities/Publisher.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L30)

## Properties

### ISRC

• `Optional` **ISRC**: ``null`` \| `string`

#### Defined in

[lib/entities/Publisher.ts:13](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L13)

___

### UPCOrEAN

• `Optional` **UPCOrEAN**: ``null`` \| `string`

#### Defined in

[lib/entities/Publisher.ts:12](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L12)

___

### albumTitle

• `Optional` **albumTitle**: ``null`` \| `string`

#### Defined in

[lib/entities/Publisher.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L10)

___

### apiInfo

• **apiInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `urn?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Publisher.ts:26](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L26)

___

### artist

• `Optional` **artist**: ``null`` \| `string`

#### Defined in

[lib/entities/Publisher.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L9)

___

### containsMusic

• `Optional` **containsMusic**: `boolean`

#### Defined in

[lib/entities/Publisher.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L11)

___

### copyrightText

• **copyrightText**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `display` | { `c?`: ``null`` \| `string` ; `p?`: ``null`` \| `string`  } |
| `display.c?` | ``null`` \| `string` |
| `display.p?` | ``null`` \| `string` |
| `general` | { `c?`: ``null`` \| `string` ; `p?`: ``null`` \| `string`  } |
| `general.c?` | ``null`` \| `string` |
| `general.p?` | ``null`` \| `string` |

#### Defined in

[lib/entities/Publisher.ts:16](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L16)

___

### id

• `Optional` **id**: `number`

#### Defined in

[lib/entities/Publisher.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L8)

___

### isExplicit

• `Optional` **isExplicit**: `boolean`

#### Defined in

[lib/entities/Publisher.ts:14](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L14)

___

### releaseTitle

• `Optional` **releaseTitle**: ``null`` \| `string`

#### Defined in

[lib/entities/Publisher.ts:15](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L15)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Entity](Entity.md).[type](Entity.md#type)

#### Defined in

[lib/entities/Entity.ts:35](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L35)

___

### type

▪ `Static` **type**: `string` = `'Publisher'`

#### Overrides

[Entity](Entity.md).[type](Entity.md#type-1)

#### Defined in

[lib/entities/Publisher.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Publisher.ts#L6)

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
