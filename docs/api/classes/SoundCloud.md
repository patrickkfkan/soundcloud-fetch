[**soundcloud-fetch**](../README.md)

***

[soundcloud-fetch](../README.md) / SoundCloud

# Class: SoundCloud

Defined in: [SoundCloud.ts:48](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L48)

## Constructors

### Constructor

> **new SoundCloud**(`args?`): `SoundCloud`

Defined in: [SoundCloud.ts:67](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L67)

#### Parameters

##### args?

[`SoundCloudInitArgs`](../type-aliases/SoundCloudInitArgs.md)

#### Returns

`SoundCloud`

## Properties

### me

> **me**: `object`

Defined in: [SoundCloud.ts:50](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L50)

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

#### getFeed()

> **getFeed**: (`options?`) => `Promise`\<[`Collection`](Collection.md)\<[`FeedItem`](FeedItem.md)\>\>

##### Parameters

###### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

##### Returns

`Promise`\<[`Collection`](Collection.md)\<[`FeedItem`](FeedItem.md)\>\>

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

Defined in: [SoundCloud.ts:436](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L436)

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

Defined in: [SoundCloud.ts:193](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L193)

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

Defined in: [SoundCloud.ts:164](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L164)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

***

### getClientId()

> **getClientId**(): `Promise`\<`string`\>

Defined in: [SoundCloud.ts:98](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L98)

#### Returns

`Promise`\<`string`\>

***

### getContinuation()

> **getContinuation**\<`T`\>(`continuation`): `Promise`\<[`Collection`](Collection.md)\<`T`\>\>

Defined in: [SoundCloud.ts:517](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L517)

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

### getFeed()

> `protected` **getFeed**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`FeedItem`](FeedItem.md)\>\>

Defined in: [SoundCloud.ts:370](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L370)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`FeedItem`](FeedItem.md)\>\>

***

### getFollowing()

> **getFollowing**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

Defined in: [SoundCloud.ts:300](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L300)

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

Defined in: [SoundCloud.ts:405](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L405)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

***

### getLikesByUser()

> **getLikesByUser**(`userId`, `options`): `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

Defined in: [SoundCloud.ts:344](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L344)

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

Defined in: [SoundCloud.ts:109](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L109)

#### Returns

`string` \| `undefined`

***

### getMixedSelections()

> **getMixedSelections**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

Defined in: [SoundCloud.ts:158](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L158)

*********************************************************

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Selection`](Selection.md)\>\>

***

### getMyFollowing()

> `protected` **getMyFollowing**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

Defined in: [SoundCloud.ts:428](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L428)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`User`](User.md)\>\>

***

### getMyLikes()

> `protected` **getMyLikes**(`options`): `Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

Defined in: [SoundCloud.ts:419](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L419)

#### Parameters

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Like`](Like.md)\>\>

***

### getMyProfile()

> `protected` **getMyProfile**(): `Promise`\<[`User`](User.md) \| `null`\>

Defined in: [SoundCloud.ts:398](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L398)

#### Returns

`Promise`\<[`User`](User.md) \| `null`\>

***

### getMyStations()

> `protected` **getMyStations**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

Defined in: [SoundCloud.ts:412](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L412)

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md)

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`LibraryItem`](LibraryItem.md)\>\>

***

### getPlayHistory()

> `protected` **getPlayHistory**(`options`): `Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

Defined in: [SoundCloud.ts:381](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L381)

#### Parameters

##### options

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`PlayHistoryItem`](PlayHistoryItem.md)\>\>

***

### getPlaylistOrAlbum()

> **getPlaylistOrAlbum**(`id`): `Promise`\<[`Album`](Album.md) \| [`Playlist`](Playlist.md) \| `null`\>

Defined in: [SoundCloud.ts:174](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L174)

*********************************************************

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Album`](Album.md) \| [`Playlist`](Playlist.md) \| `null`\>

***

### getPlaylistsByUser()

> **getPlaylistsByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Playlist`](Playlist.md)\>\>

Defined in: [SoundCloud.ts:187](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L187)

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

Defined in: [SoundCloud.ts:265](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L265)

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

Defined in: [SoundCloud.ts:256](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L256)

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

Defined in: [SoundCloud.ts:181](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L181)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`SystemPlaylist`](SystemPlaylist.md) \| `null`\>

***

### getTopFeaturedTracks()

> **getTopFeaturedTracks**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:203](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L203)

*********************************************************

#### Parameters

##### options?

[`GetCollectionOptions`](../interfaces/GetCollectionOptions.md) & `object`

#### Returns

`Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

***

### getTrack()

> **getTrack**(`id`): `Promise`\<[`Track`](Track.md) \| `null`\>

Defined in: [SoundCloud.ts:246](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L246)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Track`](Track.md) \| `null`\>

***

### getTracks()

> **getTracks**(`ids`): `Promise`\<[`Track`](Track.md)[]\>

Defined in: [SoundCloud.ts:210](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L210)

#### Parameters

##### ids

`number` | `number`[]

#### Returns

`Promise`\<[`Track`](Track.md)[]\>

***

### getTracksByUser()

> **getTracksByUser**(`userId`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Track`](Track.md)\>\>

Defined in: [SoundCloud.ts:239](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L239)

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

Defined in: [SoundCloud.ts:294](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L294)

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

Defined in: [SoundCloud.ts:310](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L310)

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

Defined in: [SoundCloud.ts:311](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L311)

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

Defined in: [SoundCloud.ts:312](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L312)

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

Defined in: [SoundCloud.ts:313](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L313)

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

Defined in: [SoundCloud.ts:117](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L117)

#### Parameters

##### value?

`string`

#### Returns

`void`

***

### setCookie()

> **setCookie**(`value?`): `void`

Defined in: [SoundCloud.ts:126](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L126)

#### Parameters

##### value?

`string`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale?`): `void`

Defined in: [SoundCloud.ts:113](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L113)

#### Parameters

##### locale?

`string`

#### Returns

`void`

***

### generateClientId()

> `static` **generateClientId**(): `Promise`\<`string`\>

Defined in: [SoundCloud.ts:105](https://github.com/patrickkfkan/soundcloud-fetch/blob/aa0eb85d9df194218c29c70f037e8435822f3287/src/lib/SoundCloud.ts#L105)

#### Returns

`Promise`\<`string`\>
