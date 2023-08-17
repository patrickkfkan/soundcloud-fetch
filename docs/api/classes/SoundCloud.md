[soundcloud-fetch](../README.md) / SoundCloud

# Class: SoundCloud

## Table of contents

### Constructors

- [constructor](SoundCloud.md#constructor)

### Properties

- [me](SoundCloud.md#me)

### Methods

- [addToPlayHistory](SoundCloud.md#addtoplayhistory)
- [getAlbumsByUser](SoundCloud.md#getalbumsbyuser)
- [getClientId](SoundCloud.md#getclientid)
- [getContinuation](SoundCloud.md#getcontinuation)
- [getFollowing](SoundCloud.md#getfollowing)
- [getLibraryItems](SoundCloud.md#getlibraryitems)
- [getLikesByUser](SoundCloud.md#getlikesbyuser)
- [getLocale](SoundCloud.md#getlocale)
- [getMixedSelections](SoundCloud.md#getmixedselections)
- [getMyFollowing](SoundCloud.md#getmyfollowing)
- [getMyLikes](SoundCloud.md#getmylikes)
- [getMyProfile](SoundCloud.md#getmyprofile)
- [getMyStations](SoundCloud.md#getmystations)
- [getPlayHistory](SoundCloud.md#getplayhistory)
- [getPlaylistOrAlbum](SoundCloud.md#getplaylistoralbum)
- [getPlaylistsByUser](SoundCloud.md#getplaylistsbyuser)
- [getStreamingUrl](SoundCloud.md#getstreamingurl)
- [getSystemPlaylist](SoundCloud.md#getsystemplaylist)
- [getTopFeaturedTracks](SoundCloud.md#gettopfeaturedtracks)
- [getTrack](SoundCloud.md#gettrack)
- [getTracks](SoundCloud.md#gettracks)
- [getTracksByUser](SoundCloud.md#gettracksbyuser)
- [getUser](SoundCloud.md#getuser)
- [search](SoundCloud.md#search)
- [setAccessToken](SoundCloud.md#setaccesstoken)
- [setLocale](SoundCloud.md#setlocale)
- [generateClientId](SoundCloud.md#generateclientid)

## Constructors

### constructor

• **new SoundCloud**(`args?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`SoundCloudInitArgs`](../interfaces/SoundCloudInitArgs.md) |

#### Defined in

[lib/SoundCloud.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L48)

## Properties

### me

• **me**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addToPlayHistory` | (`trackOrUrn`: `string` \| [`Track`](Track.md), `setOrUrn?`: `string` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md) \| [`SystemPlaylist`](SystemPlaylist.md)) => `Promise`<`any`\> |
| `getFollowing` | (`options?`: [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)) => `Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\> |
| `getLibraryItems` | (`options?`: [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)) => `Promise`<[`Collection`](Collection.md)<[`LibraryItem`](LibraryItem.md)\>\> |
| `getLikes` | (`options`: [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"track"`` \| ``"playlistAndAlbum"``  }) => `Promise`<[`Collection`](Collection.md)<[`Like`](Like.md)\>\> |
| `getPlayHistory` | (`options`: [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"set"`` \| ``"track"``  }) => `Promise`<[`Collection`](Collection.md)<[`PlayHistoryItem`](PlayHistoryItem.md)\>\> |
| `getProfile` | () => `Promise`<``null`` \| [`User`](User.md)\> |
| `getStations` | (`options?`: [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)) => `Promise`<[`Collection`](Collection.md)<[`LibraryItem`](LibraryItem.md)\>\> |

#### Defined in

[lib/SoundCloud.ts:34](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L34)

## Methods

### addToPlayHistory

▸ `Protected` **addToPlayHistory**(`trackOrUrn`, `setOrUrn?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackOrUrn` | `string` \| [`Track`](Track.md) |
| `setOrUrn?` | `string` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md) \| [`SystemPlaylist`](SystemPlaylist.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[lib/SoundCloud.ts:355](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L355)

___

### getAlbumsByUser

▸ **getAlbumsByUser**(`userId`, `options?`): `Promise`<[`Collection`](Collection.md)<[`Album`](Album.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `number` |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Album`](Album.md)\>\>

#### Defined in

[lib/SoundCloud.ts:140](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L140)

___

### getClientId

▸ **getClientId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/SoundCloud.ts:64](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L64)

___

### getContinuation

▸ **getContinuation**<`T`\>(`continuation`): `Promise`<[`Collection`](Collection.md)<`T`\>\>

*********************************************************

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`CollectionContinuation`](CollectionContinuation.md)<`T`\> |

#### Returns

`Promise`<[`Collection`](Collection.md)<`T`\>\>

#### Defined in

[lib/SoundCloud.ts:387](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L387)

___

### getFollowing

▸ **getFollowing**(`userId`, `options?`): `Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `number` |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\>

#### Defined in

[lib/SoundCloud.ts:223](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L223)

___

### getLibraryItems

▸ `Protected` **getLibraryItems**(`options?`): `Promise`<[`Collection`](Collection.md)<[`LibraryItem`](LibraryItem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`LibraryItem`](LibraryItem.md)\>\>

#### Defined in

[lib/SoundCloud.ts:321](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L321)

___

### getLikesByUser

▸ **getLikesByUser**(`userId`, `options`): `Promise`<[`Collection`](Collection.md)<[`Like`](Like.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `number` |
| `options` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"track"`` \| ``"playlistAndAlbum"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Like`](Like.md)\>\>

#### Defined in

[lib/SoundCloud.ts:267](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L267)

___

### getLocale

▸ **getLocale**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[lib/SoundCloud.ts:75](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L75)

___

### getMixedSelections

▸ **getMixedSelections**(`options?`): `Promise`<[`Collection`](Collection.md)<[`Selection`](Selection.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Selection`](Selection.md)\>\>

#### Defined in

[lib/SoundCloud.ts:111](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L111)

___

### getMyFollowing

▸ `Protected` **getMyFollowing**(`options?`): `Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\>

#### Defined in

[lib/SoundCloud.ts:347](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L347)

___

### getMyLikes

▸ `Protected` **getMyLikes**(`options`): `Promise`<[`Collection`](Collection.md)<[`Like`](Like.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"track"`` \| ``"playlistAndAlbum"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Like`](Like.md)\>\>

#### Defined in

[lib/SoundCloud.ts:335](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L335)

___

### getMyProfile

▸ `Protected` **getMyProfile**(): `Promise`<``null`` \| [`User`](User.md)\>

#### Returns

`Promise`<``null`` \| [`User`](User.md)\>

#### Defined in

[lib/SoundCloud.ts:314](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L314)

___

### getMyStations

▸ `Protected` **getMyStations**(`options?`): `Promise`<[`Collection`](Collection.md)<[`LibraryItem`](LibraryItem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`LibraryItem`](LibraryItem.md)\>\>

#### Defined in

[lib/SoundCloud.ts:328](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L328)

___

### getPlayHistory

▸ `Protected` **getPlayHistory**(`options`): `Promise`<[`Collection`](Collection.md)<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"set"`` \| ``"track"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

#### Defined in

[lib/SoundCloud.ts:295](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L295)

___

### getPlaylistOrAlbum

▸ **getPlaylistOrAlbum**(`id`): `Promise`<``null`` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md)\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| [`Album`](Album.md) \| [`Playlist`](Playlist.md)\>

#### Defined in

[lib/SoundCloud.ts:121](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L121)

___

### getPlaylistsByUser

▸ **getPlaylistsByUser**(`userId`, `options?`): `Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `number` |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md)\>\>

#### Defined in

[lib/SoundCloud.ts:134](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L134)

___

### getStreamingUrl

▸ **getStreamingUrl**(`transcodingUrl`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transcodingUrl` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[lib/SoundCloud.ts:198](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L198)

___

### getSystemPlaylist

▸ **getSystemPlaylist**(`id`): `Promise`<``null`` \| [`SystemPlaylist`](SystemPlaylist.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<``null`` \| [`SystemPlaylist`](SystemPlaylist.md)\>

#### Defined in

[lib/SoundCloud.ts:128](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L128)

___

### getTopFeaturedTracks

▸ **getTopFeaturedTracks**(`options?`): `Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `genre?`: `string`  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Defined in

[lib/SoundCloud.ts:150](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L150)

___

### getTrack

▸ **getTrack**(`id`): `Promise`<``null`` \| [`Track`](Track.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| [`Track`](Track.md)\>

#### Defined in

[lib/SoundCloud.ts:193](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L193)

___

### getTracks

▸ **getTracks**(`ids`): `Promise`<[`Track`](Track.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `number` \| `number`[] |

#### Returns

`Promise`<[`Track`](Track.md)[]\>

#### Defined in

[lib/SoundCloud.ts:157](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L157)

___

### getTracksByUser

▸ **getTracksByUser**(`userId`, `options?`): `Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `number` |
| `options?` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Defined in

[lib/SoundCloud.ts:186](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L186)

___

### getUser

▸ **getUser**(`id`): `Promise`<``null`` \| [`User`](User.md)\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| [`User`](User.md)\>

#### Defined in

[lib/SoundCloud.ts:217](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L217)

___

### search

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"playlist"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md)\>\>

#### Defined in

[lib/SoundCloud.ts:233](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L233)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Album`](Album.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"album"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Album`](Album.md)\>\>

#### Defined in

[lib/SoundCloud.ts:234](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L234)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"track"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Defined in

[lib/SoundCloud.ts:235](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L235)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & { `type`: ``"user"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\>

#### Defined in

[lib/SoundCloud.ts:236](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L236)

___

### setAccessToken

▸ **setAccessToken**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `string` |

#### Returns

`void`

#### Defined in

[lib/SoundCloud.ts:83](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L83)

___

### setLocale

▸ **setLocale**(`locale?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale?` | `string` |

#### Returns

`void`

#### Defined in

[lib/SoundCloud.ts:79](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L79)

___

### generateClientId

▸ `Static` **generateClientId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/SoundCloud.ts:71](https://github.com/patrickkfkan/soundcloud-fetch/blob/b88c7ef/src/lib/SoundCloud.ts#L71)
