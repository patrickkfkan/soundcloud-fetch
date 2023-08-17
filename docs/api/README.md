soundcloud-fetch

# soundcloud-fetch

## Table of contents

### Namespaces

- [Constants](modules/Constants.md)

### Classes

- [Album](classes/Album.md)
- [Collection](classes/Collection.md)
- [CollectionContinuation](classes/CollectionContinuation.md)
- [Entity](classes/Entity.md)
- [LibraryItem](classes/LibraryItem.md)
- [Like](classes/Like.md)
- [MediaTranscoding](classes/MediaTranscoding.md)
- [PlayHistoryItem](classes/PlayHistoryItem.md)
- [Playlist](classes/Playlist.md)
- [Publisher](classes/Publisher.md)
- [Selection](classes/Selection.md)
- [Set](classes/Set.md)
- [SoundCloud](classes/SoundCloud.md)
- [SystemPlaylist](classes/SystemPlaylist.md)
- [Track](classes/Track.md)
- [User](classes/User.md)

### Interfaces

- [EntityConstructor](interfaces/EntityConstructor.md)
- [GetCollectionOptions](interfaces/GetCollectionOptions.md)
- [SoundCloudInitArgs](interfaces/SoundCloudInitArgs.md)

### Type Aliases

- [ArtworkImageUrls](README.md#artworkimageurls)
- [AvatarImageUrls](README.md#avatarimageurls)
- [CollectionOptions](README.md#collectionoptions)
- [EntityClasses](README.md#entityclasses)
- [EntityClassesToTypes](README.md#entityclassestotypes)
- [EntityType](README.md#entitytype)

### Functions

- [getEntityClassByName](README.md#getentityclassbyname)
- [getEntityClassName](README.md#getentityclassname)

## Type Aliases

### ArtworkImageUrls

Ƭ **ArtworkImageUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `badge?` | `string` |
| `crop?` | `string` |
| `default` | `string` |
| `large?` | `string` |
| `mini?` | `string` |
| `small?` | `string` |
| `t300x300?` | `string` |
| `t500x500?` | `string` |
| `t67x67?` | `string` |
| `tiny?` | `string` |

#### Defined in

[lib/entities/Entity.ts:19](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L19)

___

### AvatarImageUrls

Ƭ **AvatarImageUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `badge?` | `string` |
| `crop?` | `string` |
| `default` | `string` |
| `large?` | `string` |
| `mini?` | `string` |
| `small?` | `string` |
| `t300x300?` | `string` |
| `t500x500?` | `string` |
| `tiny?` | `string` |

#### Defined in

[lib/entities/Entity.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/entities/Entity.ts#L8)

___

### CollectionOptions

Ƭ **CollectionOptions**<`T`\>: { `asType?`: `undefined` ; `requireTypes?`: [`EntityClasses`](README.md#entityclasses)<`T`\>  } \| { `asType`: [`EntityConstructor`](interfaces/EntityConstructor.md)<`T`\> ; `requireTypes?`: `undefined`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](README.md#entitytype) |

#### Defined in

[lib/collections/Collection.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/collections/Collection.ts#L6)

___

### EntityClasses

Ƭ **EntityClasses**<`T`\>: [`EntityConstructor`](interfaces/EntityConstructor.md)<`T`\> \| [`EntityConstructor`](interfaces/EntityConstructor.md)<`T`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](README.md#entitytype) |

#### Defined in

[lib/utils/EntityTypes.ts:27](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/utils/EntityTypes.ts#L27)

___

### EntityClassesToTypes

Ƭ **EntityClassesToTypes**<`K`\>: `K` extends [`EntityConstructor`](interfaces/EntityConstructor.md)<infer U\> ? `U` : `K` extends [`EntityConstructor`](interfaces/EntityConstructor.md)<infer U\>[] ? `U` : `never`

#### Type parameters

| Name |
| :------ |
| `K` |

#### Defined in

[lib/utils/EntityTypes.ts:30](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/utils/EntityTypes.ts#L30)

___

### EntityType

Ƭ **EntityType**: [`Album`](classes/Album.md) \| [`Playlist`](classes/Playlist.md) \| [`Selection`](classes/Selection.md) \| [`SystemPlaylist`](classes/SystemPlaylist.md) \| [`Track`](classes/Track.md) \| [`User`](classes/User.md) \| [`Like`](classes/Like.md) \| [`PlayHistoryItem`](classes/PlayHistoryItem.md) \| [`LibraryItem`](classes/LibraryItem.md)

#### Defined in

[lib/utils/EntityTypes.ts:11](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/utils/EntityTypes.ts#L11)

## Functions

### getEntityClassByName

▸ **getEntityClassByName**(`name`): ``null`` \| typeof [`Playlist`](classes/Playlist.md) \| typeof [`User`](classes/User.md) \| typeof [`Track`](classes/Track.md) \| typeof [`Like`](classes/Like.md) \| typeof [`SystemPlaylist`](classes/SystemPlaylist.md) \| typeof [`Selection`](classes/Selection.md) \| typeof [`PlayHistoryItem`](classes/PlayHistoryItem.md) \| typeof [`LibraryItem`](classes/LibraryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| typeof [`Playlist`](classes/Playlist.md) \| typeof [`User`](classes/User.md) \| typeof [`Track`](classes/Track.md) \| typeof [`Like`](classes/Like.md) \| typeof [`SystemPlaylist`](classes/SystemPlaylist.md) \| typeof [`Selection`](classes/Selection.md) \| typeof [`PlayHistoryItem`](classes/PlayHistoryItem.md) \| typeof [`LibraryItem`](classes/LibraryItem.md)

#### Defined in

[lib/utils/EntityTypes.ts:59](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/utils/EntityTypes.ts#L59)

___

### getEntityClassName

▸ **getEntityClassName**<`T`\>(`value`): ``null`` \| `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](README.md#entitytype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EntityConstructor`](interfaces/EntityConstructor.md)<`T`\> |

#### Returns

``null`` \| `string`

#### Defined in

[lib/utils/EntityTypes.ts:49](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/utils/EntityTypes.ts#L49)
