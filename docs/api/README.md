soundcloud-fetch

# soundcloud-fetch

## Table of contents

### Namespaces

- [Constants](modules/Constants.md)

### Classes

- [Album](classes/Album.md)
- [Collection](classes/Collection.md)
- [Entity](classes/Entity.md)
- [MediaTranscoding](classes/MediaTranscoding.md)
- [Playlist](classes/Playlist.md)
- [PlaylistBase](classes/PlaylistBase.md)
- [Publisher](classes/Publisher.md)
- [Selection](classes/Selection.md)
- [SoundCloud](classes/SoundCloud.md)
- [SystemPlaylist](classes/SystemPlaylist.md)
- [Track](classes/Track.md)
- [User](classes/User.md)

### Interfaces

- [SoundCloudInitArgs](interfaces/SoundCloudInitArgs.md)
- [SoundCloudPageOptions](interfaces/SoundCloudPageOptions.md)

### Type Aliases

- [EntityConstructor](README.md#entityconstructor)
- [EntityType](README.md#entitytype)

## Type Aliases

### EntityConstructor

Ƭ **EntityConstructor**<`T`\>: (...`args`: `any`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](README.md#entitytype) |

#### Type declaration

• (`...args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Defined in

[lib/utils/EntityTypes.ts:9](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/utils/EntityTypes.ts#L9)

___

### EntityType

Ƭ **EntityType**: [`Album`](classes/Album.md) \| [`Playlist`](classes/Playlist.md) \| [`Selection`](classes/Selection.md) \| [`SystemPlaylist`](classes/SystemPlaylist.md) \| [`Track`](classes/Track.md) \| [`User`](classes/User.md)

#### Defined in

[lib/utils/EntityTypes.ts:8](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/utils/EntityTypes.ts#L8)
