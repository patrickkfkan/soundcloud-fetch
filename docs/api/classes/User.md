[soundcloud-fetch](../README.md) / User

# Class: User

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Accessors

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

### Methods

- [getClient](User.md#getclient)
- [getImageUrls](User.md#getimageurls)
- [getType](User.md#gettype)
- [lazyGet](User.md#lazyget)
- [lazyGetAsync](User.md#lazygetasync)
- [toPlainObject](User.md#toplainobject)

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

[lib/entities/User.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L6)

## Accessors

### apiInfo

• `get` **apiInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `uri` | `any` |
| `urn` | `any` |

#### Defined in

[lib/entities/User.ts:142](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L142)

___

### avatar

• `get` **avatar**(): ``null`` \| `string` \| `Record`<`string`, `string`\>

#### Returns

``null`` \| `string` \| `Record`<`string`, `string`\>

#### Defined in

[lib/entities/User.ts:154](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L154)

___

### badges

• `get` **badges**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `pro` | `any` |
| `proUnlimited` | `any` |
| `verified` | `any` |

#### Defined in

[lib/entities/User.ts:158](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L158)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/User.ts:126](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L126)

___

### isVerified

• `get` **isVerified**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/User.ts:150](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L150)

___

### lastModified

• `get` **lastModified**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/User.ts:134](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L134)

___

### location

• `get` **location**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `city` | `any` |
| `country` | `any` |

#### Defined in

[lib/entities/User.ts:146](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L146)

___

### names

• `get` **names**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `first` | `any` |
| `full` | `any` |
| `last` | `any` |
| `username` | `any` |

#### Defined in

[lib/entities/User.ts:130](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L130)

___

### permalink

• `get` **permalink**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `basic` | `any` |
| `full` | `any` |

#### Defined in

[lib/entities/User.ts:138](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L138)

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

[lib/entities/User.ts:67](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/User.ts#L67)

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
