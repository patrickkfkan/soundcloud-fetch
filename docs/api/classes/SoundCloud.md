[soundcloud-fetch](../README.md) / SoundCloud

# Class: SoundCloud

## Table of contents

### Constructors

- [constructor](SoundCloud.md#constructor)

### Methods

- [getAlbumsByUser](SoundCloud.md#getalbumsbyuser)
- [getClientId](SoundCloud.md#getclientid)
- [getContinuation](SoundCloud.md#getcontinuation)
- [getFollowing](SoundCloud.md#getfollowing)
- [getLibraryItems](SoundCloud.md#getlibraryitems)
- [getLocale](SoundCloud.md#getlocale)
- [getMixedSelections](SoundCloud.md#getmixedselections)
- [getMyProfile](SoundCloud.md#getmyprofile)
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

[lib/SoundCloud.ts:37](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L37)

## Methods

### getAlbumsByUser

▸ **getAlbumsByUser**(`id`, `options?`): `Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Album`](Album.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Album`](Album.md)\>\>

#### Defined in

[lib/SoundCloud.ts:115](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L115)

___

### getClientId

▸ **getClientId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/SoundCloud.ts:43](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L43)

___

### getContinuation

▸ **getContinuation**<`T`, `K`\>(`continuation`): `Promise`<[`Collection`](Collection.md)<`T`, `K`\>\>

*********************************************************

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EntityType`](../README.md#entitytype) |
| `K` | extends [`EntityClasses`](../README.md#entityclasses)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`CollectionContinuation`](../interfaces/CollectionContinuation.md)<`T`, `K`\> |

#### Returns

`Promise`<[`Collection`](Collection.md)<`T`, `K`\>\>

#### Defined in

[lib/SoundCloud.ts:281](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L281)

___

### getFollowing

▸ **getFollowing**(`userId`, `options?`): `Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`User`](User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `number` |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`User`](User.md)\>\>

#### Defined in

[lib/SoundCloud.ts:195](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L195)

___

### getLibraryItems

▸ **getLibraryItems**(`options?`): `Promise`<[`Collection`](Collection.md)<[`LibraryItem`](LibraryItem.md), [`EntityClasses`](../README.md#entityclasses)<[`LibraryItem`](LibraryItem.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`LibraryItem`](LibraryItem.md), [`EntityClasses`](../README.md#entityclasses)<[`LibraryItem`](LibraryItem.md)\>\>\>

#### Defined in

[lib/SoundCloud.ts:270](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L270)

___

### getLocale

▸ **getLocale**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[lib/SoundCloud.ts:54](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L54)

___

### getMixedSelections

▸ **getMixedSelections**(`options?`): `Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Selection`](Selection.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Selection`](Selection.md)\>\>

#### Defined in

[lib/SoundCloud.ts:86](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L86)

___

### getMyProfile

▸ **getMyProfile**(): `Promise`<``null`` \| [`User`](User.md)\>

#### Returns

`Promise`<``null`` \| [`User`](User.md)\>

#### Defined in

[lib/SoundCloud.ts:263](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L263)

___

### getPlayHistory

▸ **getPlayHistory**(`type`, `options?`): `Promise`<[`Collection`](Collection.md)<[`PlayHistoryItem`](PlayHistoryItem.md), [`EntityClasses`](../README.md#entityclasses)<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"set"`` \| ``"track"`` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`PlayHistoryItem`](PlayHistoryItem.md), [`EntityClasses`](../README.md#entityclasses)<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>\>

#### Defined in

[lib/SoundCloud.ts:245](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L245)

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

[lib/SoundCloud.ts:96](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L96)

___

### getPlaylistsByUser

▸ **getPlaylistsByUser**(`id`, `options?`): `Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Playlist`](Playlist.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Playlist`](Playlist.md)\>\>

#### Defined in

[lib/SoundCloud.ts:109](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L109)

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

[lib/SoundCloud.ts:170](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L170)

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

[lib/SoundCloud.ts:103](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L103)

___

### getTopFeaturedTracks

▸ **getTopFeaturedTracks**(`options?`): `Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Track`](Track.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `genre?`: `string`  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Track`](Track.md)\>\>

#### Defined in

[lib/SoundCloud.ts:125](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L125)

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

[lib/SoundCloud.ts:165](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L165)

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

[lib/SoundCloud.ts:132](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L132)

___

### getTracksByUser

▸ **getTracksByUser**(`id`, `options?`): `Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Track`](Track.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`EntityType`](../README.md#entitytype), typeof [`Track`](Track.md)\>\>

#### Defined in

[lib/SoundCloud.ts:158](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L158)

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

[lib/SoundCloud.ts:189](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L189)

___

### search

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md), [`EntityClasses`](../README.md#entityclasses)<[`Playlist`](Playlist.md)\>\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `type`: ``"playlist"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md), [`EntityClasses`](../README.md#entityclasses)<[`Playlist`](Playlist.md)\>\>\>

#### Defined in

[lib/SoundCloud.ts:205](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L205)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Album`](Album.md), [`EntityClasses`](../README.md#entityclasses)<[`Album`](Album.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `type`: ``"album"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Album`](Album.md), [`EntityClasses`](../README.md#entityclasses)<[`Album`](Album.md)\>\>\>

#### Defined in

[lib/SoundCloud.ts:206](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L206)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Track`](Track.md), [`EntityClasses`](../README.md#entityclasses)<[`Track`](Track.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `type`: ``"track"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Track`](Track.md), [`EntityClasses`](../README.md#entityclasses)<[`Track`](Track.md)\>\>\>

#### Defined in

[lib/SoundCloud.ts:207](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L207)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`User`](User.md), [`EntityClasses`](../README.md#entityclasses)<[`User`](User.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `type`: ``"user"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`User`](User.md), [`EntityClasses`](../README.md#entityclasses)<[`User`](User.md)\>\>\>

#### Defined in

[lib/SoundCloud.ts:208](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L208)

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

[lib/SoundCloud.ts:62](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L62)

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

[lib/SoundCloud.ts:58](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L58)

___

### generateClientId

▸ `Static` **generateClientId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/SoundCloud.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/365f7b2/src/lib/SoundCloud.ts#L50)
