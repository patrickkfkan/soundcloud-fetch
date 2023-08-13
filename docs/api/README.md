soundcloud-fetch

# soundcloud-fetch

## Table of contents

### Namespaces

- [Constants](modules/Constants.md)

### Classes

- [Album](classes/Album.md)
- [Collection](classes/Collection.md)
- [Entity](classes/Entity.md)
- [LibraryItem](classes/LibraryItem.md)
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

- [CollectionContinuation](interfaces/CollectionContinuation.md)
- [EntityConstructor](interfaces/EntityConstructor.md)
- [SoundCloudInitArgs](interfaces/SoundCloudInitArgs.md)
- [SoundCloudPageOptions](interfaces/SoundCloudPageOptions.md)

### Type Aliases

- [ArtworkImageUrls](README.md#artworkimageurls)
- [AvatarImageUrls](README.md#avatarimageurls)
- [CollectionOptions](README.md#collectionoptions)
- [EntityClasses](README.md#entityclasses)
- [EntityClassesToTypes](README.md#entityclassestotypes)
- [EntityType](README.md#entitytype)

## Type Aliases

### ArtworkImageUrls

Ƭ **ArtworkImageUrls**: `Record`<``"default"`` \| typeof [`ARTWORK_FORMATS`](modules/Constants.md#artwork_formats)[`number`], `string`\>

#### Defined in

[lib/entities/Entity.ts:6](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L6)

___

### AvatarImageUrls

Ƭ **AvatarImageUrls**: `Record`<``"default"`` \| typeof [`AVATAR_FORMATS`](modules/Constants.md#avatar_formats)[`number`], `string`\>

#### Defined in

[lib/entities/Entity.ts:5](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/entities/Entity.ts#L5)

___

### CollectionOptions

Ƭ **CollectionOptions**<`T`, `K`\>: { `requireTypes?`: `K`  } \| { `asType`: [`EntityConstructor`](interfaces/EntityConstructor.md)<`T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](README.md#entitytype) |
| `K` | extends [`EntityClasses`](README.md#entityclasses)<`T`\> |

#### Defined in

[lib/collections/Collection.ts:5](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/collections/Collection.ts#L5)

___

### EntityClasses

Ƭ **EntityClasses**<`T`\>: [`EntityConstructor`](interfaces/EntityConstructor.md)<`T`\> \| [`EntityConstructor`](interfaces/EntityConstructor.md)<`T`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](README.md#entitytype) |

#### Defined in

[lib/utils/EntityTypes.ts:25](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/utils/EntityTypes.ts#L25)

___

### EntityClassesToTypes

Ƭ **EntityClassesToTypes**<`T`, `K`\>: `K` extends [`EntityConstructor`](interfaces/EntityConstructor.md)<infer U\> ? `U` : `K` extends [`EntityConstructor`](interfaces/EntityConstructor.md)<infer U\>[] ? `U` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](README.md#entitytype) |
| `K` | extends [`EntityClasses`](README.md#entityclasses)<`T`\> |

#### Defined in

[lib/utils/EntityTypes.ts:28](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/utils/EntityTypes.ts#L28)

___

### EntityType

Ƭ **EntityType**: [`Album`](classes/Album.md) \| [`Playlist`](classes/Playlist.md) \| [`Selection`](classes/Selection.md) \| [`SystemPlaylist`](classes/SystemPlaylist.md) \| [`Track`](classes/Track.md) \| [`User`](classes/User.md) \| [`PlayHistoryItem`](classes/PlayHistoryItem.md) \| [`LibraryItem`](classes/LibraryItem.md)

#### Defined in

[lib/utils/EntityTypes.ts:10](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/utils/EntityTypes.ts#L10)
