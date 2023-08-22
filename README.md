# soundcloud-fetch

Fetches SoundCloud resources through API v2.

This project was created primarily for use with the [SoundCloud plugin for Volumio](https://github.com/patrickkfkan/volumio-soundcloud). Its scope of application might therefore be limited. If you need a more general-purpose API, you might want to take a look at [soundcloud.ts](https://github.com/Tenpi/soundcloud.ts).

```
npm i --save soundcloud-fetch
```

```
import SoundCloud from 'soundcloud-fetch';

const api = new SoundCloud({
  accessToken: ...
});

const album = await api.getPlaylistOrAlbum(...);
const myLikes = await api.me.getLikes({ type: 'track'});
...

```

## API

### Constructor

<code>new SoundCloud([args])</code>

Constructs an instance of the SoundCloud API.

`args`: (*optional*)
- `clientId`: (string) (*optional*) Client ID for making API requests. If not specified, value will be obtained from SoundCloud website.
- `accessToken`: (string) (*optional*) Token for accessing your private resources. See [How to obtain an access token](https://github.com/patrickkfkan/soundcloud-fetch/wiki/How-to-obtain-an-access-token).
- `locale`: (string) (*optional*) Locale code as defined in [Constants](./docs/api/modules/Constants.md).

### Config

<details>
<summary><code>getClientId()</code></summary>
<br />

**Returns**

The Client ID used by the API.

---
</details>

<details>
<summary><code><i>static</i> generateClientId()</code></summary>
<br />

Fetches the Client ID from SoundCloud website. Normally, you don't have to call this method as it is automatically called during initialization of the API (unless you provided one yourself in constructor args).

> Actual fetching of the Client ID is performed by [soundcloud-key-fetch](https://www.npmjs.com/package/soundcloud-key-fetch).

**Returns**

Client ID from SoundCloud website.

---
</details>

<details>
<summary><code>setLocale([locale])</code></summary>
<br />

Sets the locale.

**Params**

- `locale`: (string) (*optional*) The locale to set. If `undefined`, the locale will be determined by SoundCloud.

---
</details>

<details>
<summary><code>setAccessToken([value])</code></summary>
<br />

Sets the access token.

**Params**

- `value`: (string) (*optional*) The access token to be used by the API. If `undefined`, access to your private resources will trigger an error.

---
</details>

### Selections

<details>
<summary><code>getMixedSelections([options])</code></summary>
<br />

Fetches mixed selections.

**Params**

`options`: (*optional*)
- `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [Selection](./docs/api/classes/Selection.md) objects.

---
</details>

### Playlists / Albums / Tracks

<details>
<summary><code>getPlaylistOrAlbum(id)</code></summary>
<br />

Fetches a playlist or album with the given `id`.

In SoundCloud, an album is a type of playlist with overlapping and distinct properties. To check whether an item returned by this method is a playlist or album, inspect its `type` property or use `instanceof`:

```
const item = await api.getPlaylistOrAlbum(id);

if (item && item.type === Album.type) { // <-- item is an Album
  const album = item as Album; // Type assertion
  const genre = album.genre;   // Access Album-specific properties
}

// or

if (item instanceof Album) {
  const genre = item.genre;  // No need to do type assertion here
}
```

**Params**

- `id`: (number) The ID of the playlist or album to fetch.

**Returns**

Promise that resolves to an instance of [Album](./docs/api/classes/Album.md) or [Playlist](./docs/api/classes/Playlist.md), or `null` if fetched result is neither an album nor a playlist.

---
</details>

<details>
<summary><code>getSystemPlaylist(id)</code></summary>
<br />

Fetches a system playlist with the given `id`.

**Params**

- `id`: (string) The ID of the system playlist to fetch.

**Returns**

Promise that resolves to an instance of [SystemPlaylist](./docs/api/classes/SystemPlaylist.md), or `null` if fetched result is not a system playlist.

---
</details>


<details>
<summary><code>getPlaylistsByUser(userId, [options])</code></summary>
<br />

Fetches the playlists created by the user with the given `userId`. The fetched items do **not** include albums.

**Params**

- `userId`: (number) The ID of the user.
- `options`: (*optional*)
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [Playlist](./docs/api/classes/Playlist.md) objects.

---
</details>

<details>
<summary><code>getAlbumsByUser(userId, [options])</code></summary>
<br />

Fetches the albums created by the user with the given `userId`. The fetched items do **not** include playlists.

**Params**

- `userId`: (number) The ID of the user.
- `options`: (*optional*)
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [Album](./docs/api/classes/Album.md) objects.

---
</details>

<details>
<summary><code>getTopFeaturedTracks([options])</code></summary>
<br />

Fetches the top-featured tracks.

**Params**

`options` (*optional*)
- `genre`: (string) (*optional*) The genre of tracks to fetch.
- `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [Track](./docs/api/classes/Track.md) objects.

---
</details>

<details>
<summary><code>getTracks(ids)</code></summary>
<br />

Fetches the track(s) with the given `ids`.

**Params**

- `ids`: (number | number[]) The IDs of the tracks to fetch. If `ids` is a number, as oppose to an array of numbers, then result will contain a single track matching it.

**Returns**

Promise that resolves to a [Collection](#collections) of [Track](./docs/api/classes/Track.md) objects.

---
</details>

<details>
<summary><code>getTracksByUser(userId, [options])</code></summary>
<br />

Fetches the tracks uploaded by the user with the given `userId`.

**Params**

- `userId`: (number) The ID of the user.
- `options`: (*optional*)
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [Track](./docs/api/classes/Track.md) objects.

---
</details>

<details>
<summary><code>getTrack(id)</code></summary>
<br />

Fetches the track with the given `id`.

**Params**

- `ids`: (number) The ID of the track to fetch.

**Returns**

Promise that resolves to a [Track](./docs/api/classes/Track.md) object, or `null` if no result.

---
</details>

<details>
<summary><code>getLikesByUser(userId, options)</code></summary>
<br />

Fetches the items liked by the user with the given `userId`.

**Params**

- `userId`: (number) The ID of the user.
- `options`:
  - `type`: (string) The type of resource to fetch. Can be one of the following values: `track` | `playlistAndAlbum`.
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [Like](./docs/api/classes/Like.md) objects. For each `Like`:
- if `type` is `track`, `Like.item` points to a [Track](./docs/api/classes/Track.md) object;
- if `type` is `playlistAndAlbum`, `Like.item` points to an [Album](./docs/api/classes/Album.md) or [Playlist](./docs/api/classes/Playlist.md) object.

Note that `Like.item` can also be `null` if the item could not be parsed.

---
</details>

<details>
<summary><code>getStreamingUrl(transcodingUrl)</code></summary>
<br />

Fetches the streaming URL from `transcodingUrl`.

Transcoding URLs are embedded in the `mediaInfo.transcodings` property of a `Track` object. See [example](./examples/getTrackAndStreamingUrl.ts).

**Params**

- `transcodingUrl`: (string) The transcoding URL for a `Track`.

**Returns**

Promise that resolves to the streaming URL, or `null` if no result.

---
</details>

### Users

<details>
<summary><code>getUser(id)</code></summary>
<br />

Fetches the user given by `id`.

**Params**

- `id`: (number) The ID of the user to fetch.

**Returns**

Promise that resolves to a [User](./docs/api/classes/User.md) object, or `null` if no result.

---
</details>

<details>
<summary><code>getFollowing(userId, [options])</code></summary>
<br />

Fetches the list of users followed by the user with the given `userId`.

**Params**

- `userId`: (number) The ID of the user.
- `options`: (*optional*)
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [User](./docs/api/classes/User.md) objects.

---
</details>

### Search

<details>
<summary><code>search(q, options)</code></summary>
<br />

Performs a search.

**Params**

- `q`: (string) Search query.
- `options`:
  - `type`: (string) The type of resource to search for. Can be one of the following values: `playlist` | `album` | `track` | `user`.
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [Playlist](./docs/api/classes/Playlist.md), [Album](./docs/api/classes/Album.md), [Track](./docs/api/classes/Track.md) or [User](./docs/api/classes/User.md) objects (depending on `type` you passed in `options`) matching the given search query.

---
</details>

### Private resources

These methods require a valid access token, which you can provide in the constructor or through `setAccessToken()`. Private resources methods are grouped under `me`:

```
import SoundCloud from 'soundcloud-fetch';

const api = new SoundCloud({
  accessToken: ...
});

const profile = await api.me.getProfile();
...
```

<details>
<summary><code>me.getProfile()</code></summary>
<br />

Fetches your user profile.

**Returns**

Promise that resolves to a [User](./docs/api/classes/User.md) object representing your user profile, or `null` if no result.

---
</details>

<details>
<summary><code>me.getPlayHistory(options)</code></summary>
<br />

Fetches items from your play history.

**Params**

- `options`:
  - `type`: (string) The type of resource to fetch. Can be one of the following values: `track` | `set`.
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [PlayHistoryItem](./docs/api/classes/PlayHistoryItem.md) objects. For each `PlayHistoryItem`:
- if `type` is `track`, `PlayHistoryItem.item` points to a [Track](./docs/api/classes/Track.md) object;
- if `type` is `set`, `PlayHistoryItem.item` points to an [Album](./docs/api/classes/Album.md), [Playlist](./docs/api/classes/Playlist.md) or [SystemPlaylist](./docs/api/classes/SystemPlaylist.md) object.

Note that `PlayHistoryItem.item` can also be `null` if the item could not be parsed.

---
</details>

<details>
<summary><code>me.getLibraryItems([options])</code></summary>
<br />

Fetches items from your library.

**Params**

- `options`: (*optional*)
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [LibraryItem](./docs/api/classes/LibraryItem.md) objects. Each `LibraryItem` wraps around an [Album](./docs/api/classes/Album.md), [Playlist](./docs/api/classes/Playlist.md) or [SystemPlaylist](./docs/api/classes/SystemPlaylist.md) object, as well as `null` if an item could not be parsed. You can obtain the wrapped item through `LibraryItem.item`, as well as inspect the `itemType` property to get its exact type (such as whether it is liked).

---
</details>

<details>
<summary><code>me.getLikes(options)</code></summary>
<br />

Fetches items you have liked.

This is a convenience method that passes your User ID to `getLikesByUser(userId, options)`, and thus have the same return type and `options` param as that method.

---
</details>

<details>
<summary><code>me.getStations([options])</code></summary>
<br />

Fetches the artist stations added to your library. An artist station is represented by a `SystemPlaylist`.

> Note that `me.getLibraryItems()` also returns artist stations. If you are presenting results from both method calls, you might want to check the type of `SystemPlaylist` through its `playlistType` property to filter out overlaps.

**Params**

- `options`: (*optional*)
  - `limit`: (number) (*optional*) The number of items to return.

**Returns**

Promise that resolves to a [Collection](#collections) of [LibraryItem](./docs/api/classes/LibraryItem.md) objects. Use `LibraryItem.item` to obtain the `SystemPlaylist` object representing an artist station.

---
</details>

<details>
<summary><code>me.getFollowing([options])</code></summary>
<br />

Fetches the users you are following.

This is a convenience method that passes your User ID to `getFollowing(userId, [options])`, and thus have the same return type and `options` param as that method.

---
</details>

<details>
<summary><code>me.addToPlayHistory(trackOrUrn, [setOrUrn])</code></summary>
<br />

Adds the track given by `trackOrUrn`, and optionally the album, playlist or system playlist given by `setOrUrn`, to your play history.

**Params**

- `trackOrUrn`: (`Track` | string) The track or URN of the track to add to play history. You can obtain the URN of a `Track` through its `apiInfo.urn` property.
- `setOrUrn`: (`Album` | `Playlist` | `SystemPlaylist` | string) (*optional*) The album, playlist, system playlist or URN of system playlist to add to play history. You can obtain the URN of a `SystemPlaylist` through its `apiInfo.urn` property.

Note that albums and playlists do not have URNs, at least not from data returned by SoundCloud. If you must pass an URN for an album or playlist, you can provide a string in the following format (this is what the API generates internally):

```
// Substitute <id> with playlist or album ID
soundcloud:playlists:<id>
```

---
</details>

### Fetching tracks of playlists, albums and system playlists

You will note that the `Playlist`, `Album` and `SystemPlaylist` classes do not define a `tracks` property. To obtain the tracks of these items, call the `getTracks()` method:

```
const api = new SoundCloud();
const playlist = api.getPlaylistOrAlbum(...);
if (playlist) {
  const tracks = await playlist.getTracks();
  ...
}
```

In the above example, `getTracks()` returns an array of `Track` objects.

### Accessing underlying data

Call `getJSON()` to access the underlying data of a fetched item:

```
const api = new SoundCloud();
const track = await api.getTrack(...);
if (track) {
  // Gets the 'track_authorization' field of underlying data
  const trackAuthorization = track.getJSON<string>('track_authorization');

  // Gets the full underlying data
  const fullData = track.getJSON();
}
```

## Collections

When a method returns a collection of items, it does so through an instance of the [Collection](./docs/api/classes/Collection.md) class. A `Collection` has the following key properties:

- `items`: (Array) The items fetched.
- `continuation`: ([CollectionContinuation](./docs/api/classes/CollectionContinuation.md) | `null`) An object encapsulating the data required by the API for fetching the next set of items; `null` if there are no more items available.

The `continuation` property can be used to obtain further items as follows:

```
const api = new SoundCloud();
const tracks = await api.getTopFeaturedTracks();
if (tracks.continuation) { // More items available
  const moreTracks = await api.getContinuation(tracks.continuation);
  ...
}
```

In the above example, `getContinuation()` returns another instance of `Collection` containing the next set of `Track` objects.

# Changelog

1.0.1:
- Apply access token in `getStreamingUrl()`

1.0.0:
- Initial release

# License

MIT
