[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / SoundCloud

# Class: SoundCloud

Defined in: [SoundCloud.ts:47](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L47)

## Constructors

### Constructor

> **new SoundCloud**(`args?`): `SoundCloud`

Defined in: [SoundCloud.ts:65](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L65)

#### Parameters

##### args?

[`SoundCloudInitArgs`](../type-aliases/SoundCloudInitArgs.md)

#### Returns

`SoundCloud`

## Properties

### me

> **me**: `object`

Defined in: [SoundCloud.ts:49](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L49)

#### addToPlayHistory()

> **addToPlayHistory**: (`trackOrUrn`, `setOrUrn?`, `callbacks?`) => `Promise`\<`boolean`\>

##### Parameters

###### trackOrUrn

`string` | [`Track`](Track.md)

###### setOrUrn?

`string` | [`Album`](Album.md) | [`Playlist`](Playlist.md) | [`SystemPlaylist`](SystemPlaylist.md)

###### callbacks?

###### onSendPlayTrackEventError

(`err`) => `boolean`

##### Returns

`Promise`\<`boolean`\>

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

> `protected` **addToPlayHistory**(`trackOrUrn`, `setOrUrn?`, `callbacks?`): `Promise`\<`boolean`\>

Defined in: [SoundCloud.ts:422](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L422)

#### Parameters

##### trackOrUrn

`string` | [`Track`](Track.md)

##### setOrUrn?

`string` | [`Album`](Album.md) | [`Playlist`](Playlist.md) | [`SystemPlaylist`](SystemPlaylist.md)

##### callbacks?

###### onSendPlayTrackEventError

(`err`) => `boolean`

#### Returns

`Promise`\<`boolean`\>

***

### getAlbumsByUser()

> **getAlbumsByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Album`](Album.md)\>\>

Defined in: [SoundCloud.ts:190](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L190)

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

Defined in: [SoundCloud.ts:161](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L161)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

***

### getClientId()

> **getClientId**(): `Promise`\<`string`\>

Defined in: [SoundCloud.ts:95](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L95)

#### Returns

`Promise`\<`string`\>

***

### getContinuation()

> **getContinuation**\<`T`\>(`continuation`): `Promise`\<[`Collection`](Collection.md)\<`T`\>\>

Defined in: [SoundCloud.ts:503](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L503)

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

Defined in: [SoundCloud.ts:297](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L297)

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

Defined in: [SoundCloud.ts:391](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L391)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

***

### getLikesByUser()

> **getLikesByUser**(`userId`, `options`): `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

Defined in: [SoundCloud.ts:341](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L341)

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

Defined in: [SoundCloud.ts:106](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L106)

#### Returns

`string` \| `undefined`

***

### getMixedSelections()

> **getMixedSelections**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

Defined in: [SoundCloud.ts:155](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L155)

*********************************************************

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

***

### getMyFollowing()

> `protected` **getMyFollowing**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

Defined in: [SoundCloud.ts:414](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L414)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

***

### getMyLikes()

> `protected` **getMyLikes**(`options`): `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

Defined in: [SoundCloud.ts:405](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L405)

#### Parameters

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

***

### getMyProfile()

> `protected` **getMyProfile**(): `Promise`\<[`User`](User.md) \| `null`\>

Defined in: [SoundCloud.ts:384](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L384)

#### Returns

`Promise`\<[`User`](User.md) \| `null`\>

***

### getMyStations()

> `protected` **getMyStations**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

Defined in: [SoundCloud.ts:398](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L398)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

***

### getPlayHistory()

> `protected` **getPlayHistory**(`options`): `Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

Defined in: [SoundCloud.ts:367](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L367)

#### Parameters

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

***

### getPlaylistOrAlbum()

> **getPlaylistOrAlbum**(`id`): `Promise`\<[`Album`](Album.md) \| [`Playlist`](Playlist.md) \| `null`\>

Defined in: [SoundCloud.ts:171](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L171)

*********************************************************

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Album`](Album.md) \| [`Playlist`](Playlist.md) \| `null`\>

***

### getPlaylistsByUser()

> **getPlaylistsByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Playlist`](Playlist.md)\>\>

Defined in: [SoundCloud.ts:184](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L184)

#### Parameters

##### userId

`number`

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Playlist`](Playlist.md)\>\>

***

### getStreamingData()

> **getStreamingData**(`options`): `Promise`\<[`StreamingData`](../interfaces/StreamingData.md) \| `null`\>

Defined in: [SoundCloud.ts:262](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L262)

#### Parameters

##### options

###### trackAuthorization?

`string`

###### transcodingUrl

`string`

#### Returns

`Promise`\<[`StreamingData`](../interfaces/StreamingData.md) \| `null`\>

***

### ~~getStreamingUrl()~~

> **getStreamingUrl**(`transcodingUrl`): `Promise`\<`string` \| `null`\>

Defined in: [SoundCloud.ts:253](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L253)

#### Parameters

##### transcodingUrl

`string`

#### Returns

`Promise`\<`string` \| `null`\>

#### Deprecated

Use getStreamingData() instead.

***

### getSystemPlaylist()

> **getSystemPlaylist**(`id`): `Promise`\<[`SystemPlaylist`](SystemPlaylist.md) \| `null`\>

Defined in: [SoundCloud.ts:178](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L178)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`SystemPlaylist`](SystemPlaylist.md) \| `null`\>

***

### getTopFeaturedTracks()

> **getTopFeaturedTracks**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:200](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L200)

*********************************************************

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

***

### getTrack()

> **getTrack**(`id`): `Promise`\<[`Track`](Track.md) \| `null`\>

Defined in: [SoundCloud.ts:243](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L243)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Track`](Track.md) \| `null`\>

***

### getTracks()

> **getTracks**(`ids`): `Promise`\<[`Track`](Track.md)[]\>

Defined in: [SoundCloud.ts:207](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L207)

#### Parameters

##### ids

`number` | `number`[]

#### Returns

`Promise`\<[`Track`](Track.md)[]\>

***

### getTracksByUser()

> **getTracksByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:236](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L236)

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

Defined in: [SoundCloud.ts:291](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L291)

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

Defined in: [SoundCloud.ts:307](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L307)

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

Defined in: [SoundCloud.ts:308](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L308)

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

Defined in: [SoundCloud.ts:309](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L309)

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

Defined in: [SoundCloud.ts:310](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L310)

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

Defined in: [SoundCloud.ts:114](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L114)

#### Parameters

##### value?

`string`

#### Returns

`void`

***

### setCookie()

> **setCookie**(`value?`): `void`

Defined in: [SoundCloud.ts:123](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L123)

#### Parameters

##### value?

`string`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale?`): `void`

Defined in: [SoundCloud.ts:110](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L110)

#### Parameters

##### locale?

`string`

#### Returns

`void`

***

### generateClientId()

> `static` **generateClientId**(): `Promise`\<`string`\>

Defined in: [SoundCloud.ts:102](https://github.com/patrickkfkan/soundcloud-fetch/blob/4e0fd651895297cb1301f95b43b08cda5fccb4aa/src/lib/SoundCloud.ts#L102)

#### Returns

`Promise`\<`string`\>
