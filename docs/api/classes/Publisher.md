[soundcloud-fetch](../README.md) / Publisher

# Class: Publisher

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Publisher`**

## Table of contents

### Constructors

- [constructor](Publisher.md#constructor)

### Accessors

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

### Methods

- [getClient](Publisher.md#getclient)
- [getImageUrls](Publisher.md#getimageurls)
- [getType](Publisher.md#gettype)
- [lazyGet](Publisher.md#lazyget)
- [lazyGetAsync](Publisher.md#lazygetasync)
- [toPlainObject](Publisher.md#toplainobject)

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

[lib/entities/Publisher.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L6)

## Accessors

### ISRC

• `get` **ISRC**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Publisher.ts:153](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L153)

___

### UPCOrEAN

• `get` **UPCOrEAN**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Publisher.ts:149](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L149)

___

### albumTitle

• `get` **albumTitle**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Publisher.ts:141](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L141)

___

### apiInfo

• `get` **apiInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `urn` | `any` |

#### Defined in

[lib/entities/Publisher.ts:169](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L169)

___

### artist

• `get` **artist**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Publisher.ts:137](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L137)

___

### containsMusic

• `get` **containsMusic**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Publisher.ts:145](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L145)

___

### copyrightText

• `get` **copyrightText**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `display` | { `c`: `any` ; `p`: `any`  } |
| `display.c` | `any` |
| `display.p` | `any` |
| `general` | { `c`: `any` ; `p`: `any`  } |
| `general.c` | `any` |
| `general.p` | `any` |

#### Defined in

[lib/entities/Publisher.ts:165](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L165)

___

### id

• `get` **id**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Publisher.ts:133](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L133)

___

### isExplicit

• `get` **isExplicit**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Publisher.ts:157](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L157)

___

### releaseTitle

• `get` **releaseTitle**(): `any`

#### Returns

`any`

#### Defined in

[lib/entities/Publisher.ts:161](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L161)

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

[lib/entities/Publisher.ts:74](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/entities/Publisher.ts#L74)

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
