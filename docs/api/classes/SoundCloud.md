[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / SoundCloud

# Class: SoundCloud

Defined in: [SoundCloud.ts:29](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L29)

## Constructors

### Constructor

> **new SoundCloud**(`args?`): `SoundCloud`

Defined in: [SoundCloud.ts:45](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L45)

#### Parameters

##### args?

[`SoundCloudInitArgs`](../interfaces/SoundCloudInitArgs.md)

#### Returns

`SoundCloud`

## Properties

### me

> **me**: `object`

Defined in: [SoundCloud.ts:31](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L31)

#### addToPlayHistory()

> **addToPlayHistory**: (`trackOrUrn`, `setOrUrn?`) => `Promise`\<`any`\>

##### Parameters

###### trackOrUrn

`string` | [`Track`](Track.md)

###### setOrUrn?

`string` | [`Album`](Album.md) | [`Playlist`](Playlist.md) | [`SystemPlaylist`](SystemPlaylist.md)

##### Returns

`Promise`\<`any`\>

#### getFollowing()

> **getFollowing**: (`options?`) => `Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

##### Parameters

###### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

#### getLibraryItems()

> **getLibraryItems**: (`options?`) => `Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

##### Parameters

###### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

#### getLikes()

> **getLikes**: (`options`) => `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

##### Parameters

###### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

#### getPlayHistory()

> **getPlayHistory**: (`options`) => `Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

##### Parameters

###### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

#### getProfile()

> **getProfile**: () => `Promise`\<[`User`](User.md) \| `null`\>

##### Returns

`Promise`\<[`User`](User.md) \| `null`\>

#### getStations()

> **getStations**: (`options?`) => `Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

##### Parameters

###### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

## Methods

### addToPlayHistory()

> `protected` **addToPlayHistory**(`trackOrUrn`, `setOrUrn?`): `Promise`\<`any`\>

Defined in: [SoundCloud.ts:352](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L352)

#### Parameters

##### trackOrUrn

`string` | [`Track`](Track.md)

##### setOrUrn?

`string` | [`Album`](Album.md) | [`Playlist`](Playlist.md) | [`SystemPlaylist`](SystemPlaylist.md)

#### Returns

`Promise`\<`any`\>

***

### getAlbumsByUser()

> **getAlbumsByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Album`](Album.md)\>\>

Defined in: [SoundCloud.ts:143](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L143)

#### Parameters

##### userId

`number`

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Album`](Album.md)\>\>

***

### getCharts()

> **getCharts**(): `Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

Defined in: [SoundCloud.ts:114](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L114)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

***

### getClientId()

> **getClientId**(): `Promise`\<`string`\>

Defined in: [SoundCloud.ts:61](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L61)

#### Returns

`Promise`\<`string`\>

***

### getContinuation()

> **getContinuation**\<`T`\>(`continuation`): `Promise`\<[`Collection`](Collection.md)\<`T`\>\>

Defined in: [SoundCloud.ts:384](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L384)

*********************************************************

#### Type Parameters

##### T

`T` *extends* [`EntityType`](../type-aliases/EntityType.md)

#### Parameters

##### continuation

[`CollectionContinuation`](CollectionContinuation.md)\<`T`\>

#### Returns

`Promise`\<[`Collection`](Collection.md)\<`T`\>\>

***

### getFollowing()

> **getFollowing**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

Defined in: [SoundCloud.ts:220](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L220)

#### Parameters

##### userId

`number`

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

***

### getLibraryItems()

> `protected` **getLibraryItems**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

Defined in: [SoundCloud.ts:318](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L318)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

***

### getLikesByUser()

> **getLikesByUser**(`userId`, `options`): `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

Defined in: [SoundCloud.ts:264](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L264)

*********************************************************

#### Parameters

##### userId

`number`

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

***

### getLocale()

> **getLocale**(): `string` \| `undefined`

Defined in: [SoundCloud.ts:72](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L72)

#### Returns

`string` \| `undefined`

***

### getMixedSelections()

> **getMixedSelections**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

Defined in: [SoundCloud.ts:108](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L108)

*********************************************************

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

***

### getMyFollowing()

> `protected` **getMyFollowing**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

Defined in: [SoundCloud.ts:344](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L344)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

***

### getMyLikes()

> `protected` **getMyLikes**(`options`): `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

Defined in: [SoundCloud.ts:332](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L332)

#### Parameters

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

***

### getMyProfile()

> `protected` **getMyProfile**(): `Promise`\<[`User`](User.md) \| `null`\>

Defined in: [SoundCloud.ts:311](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L311)

#### Returns

`Promise`\<[`User`](User.md) \| `null`\>

***

### getMyStations()

> `protected` **getMyStations**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

Defined in: [SoundCloud.ts:325](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L325)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

***

### getPlayHistory()

> `protected` **getPlayHistory**(`options`): `Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

Defined in: [SoundCloud.ts:292](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L292)

#### Parameters

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

***

### getPlaylistOrAlbum()

> **getPlaylistOrAlbum**(`id`): `Promise`\<[`Album`](Album.md) \| [`Playlist`](Playlist.md) \| `null`\>

Defined in: [SoundCloud.ts:124](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L124)

*********************************************************

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Album`](Album.md) \| [`Playlist`](Playlist.md) \| `null`\>

***

### getPlaylistsByUser()

> **getPlaylistsByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Playlist`](Playlist.md)\>\>

Defined in: [SoundCloud.ts:137](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L137)

#### Parameters

##### userId

`number`

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Playlist`](Playlist.md)\>\>

***

### getStreamingUrl()

> **getStreamingUrl**(`transcodingUrl`): `Promise`\<`string` \| `null`\>

Defined in: [SoundCloud.ts:201](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L201)

#### Parameters

##### transcodingUrl

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### getSystemPlaylist()

> **getSystemPlaylist**(`id`): `Promise`\<[`SystemPlaylist`](SystemPlaylist.md) \| `null`\>

Defined in: [SoundCloud.ts:131](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L131)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`SystemPlaylist`](SystemPlaylist.md) \| `null`\>

***

### getTopFeaturedTracks()

> **getTopFeaturedTracks**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:153](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L153)

*********************************************************

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

***

### getTrack()

> **getTrack**(`id`): `Promise`\<[`Track`](Track.md) \| `null`\>

Defined in: [SoundCloud.ts:196](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L196)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Track`](Track.md) \| `null`\>

***

### getTracks()

> **getTracks**(`ids`): `Promise`\<[`Track`](Track.md)[]\>

Defined in: [SoundCloud.ts:160](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L160)

#### Parameters

##### ids

`number` | `number`[]

#### Returns

`Promise`\<[`Track`](Track.md)[]\>

***

### getTracksByUser()

> **getTracksByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:189](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L189)

#### Parameters

##### userId

`number`

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

***

### getUser()

> **getUser**(`id`): `Promise`\<[`User`](User.md) \| `null`\>

Defined in: [SoundCloud.ts:214](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L214)

*********************************************************

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`User`](User.md) \| `null`\>

***

### search()

#### Call Signature

> **search**(`q`, `options`): `Promise`\<[`Collection`](Collection.md)\<[`Playlist`](Playlist.md)\>\>

Defined in: [SoundCloud.ts:230](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L230)

*********************************************************

##### Parameters

###### q

`string`

###### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Playlist`](Playlist.md)\>\>

#### Call Signature

> **search**(`q`, `options`): `Promise`\<[`Collection`](Collection.md)\<[`Album`](Album.md)\>\>

Defined in: [SoundCloud.ts:231](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L231)

*********************************************************

##### Parameters

###### q

`string`

###### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Album`](Album.md)\>\>

#### Call Signature

> **search**(`q`, `options`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:232](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L232)

*********************************************************

##### Parameters

###### q

`string`

###### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

#### Call Signature

> **search**(`q`, `options`): `Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

Defined in: [SoundCloud.ts:233](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L233)

*********************************************************

##### Parameters

###### q

`string`

###### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

***

### setAccessToken()

> **setAccessToken**(`value?`): `void`

Defined in: [SoundCloud.ts:80](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L80)

#### Parameters

##### value?

`string`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale?`): `void`

Defined in: [SoundCloud.ts:76](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L76)

#### Parameters

##### locale?

`string`

#### Returns

`void`

***

### generateClientId()

> `static` **generateClientId**(): `Promise`\<`string`\>

Defined in: [SoundCloud.ts:68](https://github.com/patrickkfkan/soundcloud-fetch/blob/1f00242d69817ec3dc56a919cf481307c1078bbf/src/lib/SoundCloud.ts#L68)

#### Returns

`Promise`\<`string`\>
