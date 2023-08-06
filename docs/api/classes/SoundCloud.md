[soundcloud-fetch](../README.md) / SoundCloud

# Class: SoundCloud

## Table of contents

### Constructors

- [constructor](SoundCloud.md#constructor)

### Methods

- [getAlbum](SoundCloud.md#getalbum)
- [getAlbumsByUser](SoundCloud.md#getalbumsbyuser)
- [getClientId](SoundCloud.md#getclientid)
- [getLocale](SoundCloud.md#getlocale)
- [getMixedSelections](SoundCloud.md#getmixedselections)
- [getPlaylist](SoundCloud.md#getplaylist)
- [getPlaylistsByUser](SoundCloud.md#getplaylistsbyuser)
- [getStreamingUrl](SoundCloud.md#getstreamingurl)
- [getSystemPlaylist](SoundCloud.md#getsystemplaylist)
- [getTopFeaturedTracks](SoundCloud.md#gettopfeaturedtracks)
- [getTrack](SoundCloud.md#gettrack)
- [getTracks](SoundCloud.md#gettracks)
- [getTracksByUser](SoundCloud.md#gettracksbyuser)
- [getUser](SoundCloud.md#getuser)
- [search](SoundCloud.md#search)
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

[lib/SoundCloud.ts:32](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L32)

## Methods

### getAlbum

▸ **getAlbum**(`id`): `Promise`<``null`` \| [`Album`](Album.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| [`Album`](Album.md)\>

#### Defined in

[lib/SoundCloud.ts:98](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L98)

___

### getAlbumsByUser

▸ **getAlbumsByUser**(`id`, `options?`): `Promise`<[`Collection`](Collection.md)<[`Album`](Album.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Album`](Album.md)\>\>

#### Defined in

[lib/SoundCloud.ts:102](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L102)

___

### getClientId

▸ **getClientId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/SoundCloud.ts:37](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L37)

___

### getLocale

▸ **getLocale**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[lib/SoundCloud.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L48)

___

### getMixedSelections

▸ **getMixedSelections**(`options?`): `Promise`<[`Collection`](Collection.md)<[`Selection`](Selection.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Selection`](Selection.md)\>\>

#### Defined in

[lib/SoundCloud.ts:60](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L60)

___

### getPlaylist

▸ **getPlaylist**(`id`): `Promise`<``null`` \| [`Playlist`](Playlist.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| [`Playlist`](Playlist.md)\>

#### Defined in

[lib/SoundCloud.ts:82](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L82)

___

### getPlaylistsByUser

▸ **getPlaylistsByUser**(`id`, `options?`): `Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md)\>\>

#### Defined in

[lib/SoundCloud.ts:92](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L92)

___

### getStreamingUrl

▸ **getStreamingUrl**(`transcodingUrl`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transcodingUrl` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/SoundCloud.ts:157](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L157)

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

[lib/SoundCloud.ts:86](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L86)

___

### getTopFeaturedTracks

▸ **getTopFeaturedTracks**(`options?`): `Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `genre?`: `string`  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Defined in

[lib/SoundCloud.ts:112](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L112)

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

[lib/SoundCloud.ts:152](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L152)

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

[lib/SoundCloud.ts:119](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L119)

___

### getTracksByUser

▸ **getTracksByUser**(`id`, `options?`): `Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `options?` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Defined in

[lib/SoundCloud.ts:145](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L145)

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

[lib/SoundCloud.ts:171](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L171)

___

### search

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md)\>\>

*********************************************************

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `type`: ``"playlist"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Playlist`](Playlist.md)\>\>

#### Defined in

[lib/SoundCloud.ts:181](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L181)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Album`](Album.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `type`: ``"album"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Album`](Album.md)\>\>

#### Defined in

[lib/SoundCloud.ts:182](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L182)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `type`: ``"track"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`Track`](Track.md)\>\>

#### Defined in

[lib/SoundCloud.ts:183](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L183)

▸ **search**(`q`, `options`): `Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `string` |
| `options` | [`SoundCloudPageOptions`](../interfaces/SoundCloudPageOptions.md) & { `type`: ``"user"``  } |

#### Returns

`Promise`<[`Collection`](Collection.md)<[`User`](User.md)\>\>

#### Defined in

[lib/SoundCloud.ts:184](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L184)

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

[lib/SoundCloud.ts:52](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L52)

___

### generateClientId

▸ `Static` **generateClientId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/SoundCloud.ts:44](https://github.com/patrickkfkan/soundcloud-fetch/blob/cbc4996/src/lib/SoundCloud.ts#L44)
