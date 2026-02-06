[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / SoundCloud

# Class: SoundCloud

Defined in: [SoundCloud.ts:36](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L36)

## Constructors

### Constructor

> **new SoundCloud**(`args?`): `SoundCloud`

Defined in: [SoundCloud.ts:52](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L52)

#### Parameters

##### args?

[`SoundCloudInitArgs`](../interfaces/SoundCloudInitArgs.md)

#### Returns

`SoundCloud`

## Properties

### me

> **me**: `object`

Defined in: [SoundCloud.ts:38](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L38)

#### addToPlayHistory()

> **addToPlayHistory**: (`trackOrUrn`, `setOrUrn?`) => `Promise`\<`unknown`\>

##### Parameters

###### trackOrUrn

`string` | [`Track`](Track.md)

###### setOrUrn?

`string` | [`Album`](Album.md) | [`Playlist`](Playlist.md) | [`SystemPlaylist`](SystemPlaylist.md)

##### Returns

`Promise`\<`unknown`\>

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

> `protected` **addToPlayHistory**(`trackOrUrn`, `setOrUrn?`): `Promise`\<`unknown`\>

Defined in: [SoundCloud.ts:382](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L382)

#### Parameters

##### trackOrUrn

`string` | [`Track`](Track.md)

##### setOrUrn?

`string` | [`Album`](Album.md) | [`Playlist`](Playlist.md) | [`SystemPlaylist`](SystemPlaylist.md)

#### Returns

`Promise`\<`unknown`\>

***

### getAlbumsByUser()

> **getAlbumsByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Album`](Album.md)\>\>

Defined in: [SoundCloud.ts:150](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L150)

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

Defined in: [SoundCloud.ts:121](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L121)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

***

### getClientId()

> **getClientId**(): `Promise`\<`string`\>

Defined in: [SoundCloud.ts:68](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L68)

#### Returns

`Promise`\<`string`\>

***

### getContinuation()

> **getContinuation**\<`T`\>(`continuation`): `Promise`\<[`Collection`](Collection.md)\<`T`\>\>

Defined in: [SoundCloud.ts:414](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L414)

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

Defined in: [SoundCloud.ts:257](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L257)

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

Defined in: [SoundCloud.ts:351](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L351)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

***

### getLikesByUser()

> **getLikesByUser**(`userId`, `options`): `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

Defined in: [SoundCloud.ts:301](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L301)

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

Defined in: [SoundCloud.ts:79](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L79)

#### Returns

`string` \| `undefined`

***

### getMixedSelections()

> **getMixedSelections**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

Defined in: [SoundCloud.ts:115](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L115)

*********************************************************

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

***

### getMyFollowing()

> `protected` **getMyFollowing**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

Defined in: [SoundCloud.ts:374](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L374)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

***

### getMyLikes()

> `protected` **getMyLikes**(`options`): `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

Defined in: [SoundCloud.ts:365](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L365)

#### Parameters

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

***

### getMyProfile()

> `protected` **getMyProfile**(): `Promise`\<[`User`](User.md) \| `null`\>

Defined in: [SoundCloud.ts:344](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L344)

#### Returns

`Promise`\<[`User`](User.md) \| `null`\>

***

### getMyStations()

> `protected` **getMyStations**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

Defined in: [SoundCloud.ts:358](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L358)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

***

### getPlayHistory()

> `protected` **getPlayHistory**(`options`): `Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

Defined in: [SoundCloud.ts:327](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L327)

#### Parameters

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

***

### getPlaylistOrAlbum()

> **getPlaylistOrAlbum**(`id`): `Promise`\<[`Album`](Album.md) \| [`Playlist`](Playlist.md) \| `null`\>

Defined in: [SoundCloud.ts:131](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L131)

*********************************************************

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Album`](Album.md) \| [`Playlist`](Playlist.md) \| `null`\>

***

### getPlaylistsByUser()

> **getPlaylistsByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Playlist`](Playlist.md)\>\>

Defined in: [SoundCloud.ts:144](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L144)

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

Defined in: [SoundCloud.ts:222](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L222)

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

Defined in: [SoundCloud.ts:213](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L213)

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

Defined in: [SoundCloud.ts:138](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L138)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`SystemPlaylist`](SystemPlaylist.md) \| `null`\>

***

### getTopFeaturedTracks()

> **getTopFeaturedTracks**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:160](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L160)

*********************************************************

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

***

### getTrack()

> **getTrack**(`id`): `Promise`\<[`Track`](Track.md) \| `null`\>

Defined in: [SoundCloud.ts:203](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L203)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Track`](Track.md) \| `null`\>

***

### getTracks()

> **getTracks**(`ids`): `Promise`\<[`Track`](Track.md)[]\>

Defined in: [SoundCloud.ts:167](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L167)

#### Parameters

##### ids

`number` | `number`[]

#### Returns

`Promise`\<[`Track`](Track.md)[]\>

***

### getTracksByUser()

> **getTracksByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:196](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L196)

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

Defined in: [SoundCloud.ts:251](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L251)

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

Defined in: [SoundCloud.ts:267](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L267)

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

Defined in: [SoundCloud.ts:268](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L268)

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

Defined in: [SoundCloud.ts:269](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L269)

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

Defined in: [SoundCloud.ts:270](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L270)

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

Defined in: [SoundCloud.ts:87](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L87)

#### Parameters

##### value?

`string`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale?`): `void`

Defined in: [SoundCloud.ts:83](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L83)

#### Parameters

##### locale?

`string`

#### Returns

`void`

***

### generateClientId()

> `static` **generateClientId**(): `Promise`\<`string`\>

Defined in: [SoundCloud.ts:75](https://github.com/patrickkfkan/soundcloud-fetch/blob/475c06a4b70952cb608bf953a88229d960321e22/src/lib/SoundCloud.ts#L75)

#### Returns

`Promise`\<`string`\>
