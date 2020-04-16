## **TuneFind** 

**issue**: Req 1 per sec 

**PLAN**: get movie obj by searching -> show songs in list and having available arr titles of songs  + movie name to use in other apis call + spotify id (NOICE)!



We ask that clients support gzip encoding and make requests with an "**Accept-Encoding: gzip**" header. If possible we will gzip the response, indicated by a "Content-Encoding: gzip" response header.

Requests may be made in either HTTP/1.0 or HTTP/1.1. We support persistent connections via HTTP/1.1 keepalives.



We encourage API developers to cache the results of API calls locally via memcached or similar mechanisms. We recommend caching data for 24 hours for episodes and movies over one week old and for 1 hour for newer shows.

All API requests must be authenticated via [HTTP Basic Authentication](http://en.wikipedia.org/wiki/Basic_authentication_scheme)

> An example request, using curl:

```
curl "https://[ENDPOINT].api.tunefind.com/api/v2/show/alias"
  -u username:password
```



Instruction for shows and series.. online on doc



**Movie**

### HTTP Request

 GET https://[ENDPOINT].api.tunefind.com/api/v2/movie/{id}

> Example Request

```
curl "https://[ENDPOINT].api.tunefind.com/api/v2/movie/matrix"
  -u username:password
```

### Returns

Returns a [movie object](https://www.tunefind.com/product/api-docs-v2#the-movie-object) if a valid id was provided.



## List Movies

Retrieve the list of all Tunefind movies. Movies are returned sorted by their names.

### HTTP Request

 GET https://[ENDPOINT].api.tunefind.com/api/v2/movie

> 

### Request Parameters

| Query Parameter | Default | Description                                                  |
| :-------------- | :------ | :----------------------------------------------------------- |
| date_updated    | null    | *(optional)* The minimum update date, in ISO 8601 format (e.g. 2018-06-05T10:31:26+00:00). If set, only returns the movies that were updated at or after this date. |
| limit           | 1000    | *(optional)* The number of movie objects to return.          |
| offset          | 0       | *(optional)* The index of first movie to return. Indexes start from 0. |

> Example Request

```
curl "https://[ENDPOINT].api.tunefind.com/api/v2/movie?limit=5&offset=500"
  -u username:password
```



## Search Movies By A Term

Retrieve the list of Tunefind movies that match a keyword string.

### HTTP Request

 GET https://[ENDPOINT].api.tunefind.com/api/v2/search/movie

### Request Parameters

| Query Parameter | Default | Description                                                  |
| :-------------- | :------ | :----------------------------------------------------------- |
| q               | null    | The search query keywords.                                   |
| limit           | 1000    | *(optional)* The number of movie objects to return.          |
| offset          | 0       | *(optional)* The index of first movie to return. Indexes start from 0. |

### Returns

Returns an associative array with `results` property that contains an array of [simplified movie objects](https://www.tunefind.com/product/api-docs-v2#the-movie-object-simplified) found.

> Example Request

```
curl "https://[ENDPOINT].api.tunefind.com/api/v2/search/movie?q=matrix"
  -u username:password
```





# YOUTUBE

**issue** QUOTA SYSTEM 



**PLAN** : Create playlist with insert playlists -> save Id playlist -> get songs id with search list -> save song ids in array -> insert on playlist with mulitple call of playlitsItems: insert 



**Playlists: insert**

https://developers.google.com/youtube/v3/docs/playlists/insert

create playlist - id playlist in response 



**PlaylistItems: insert**

add single video on playlist; using id of video 



[https://developers.google.com/youtube/v3/docs/playlistItems/insert?apix_params=%7B%22part%22%3A%22snippet%22%2C%22resource%22%3A%7B%22snippet%22%3A%7B%22playlistId%22%3A%22PLXfpdKQNriPMcDRzCgyvq5J1yk1s14yKX%22%2C%22position%22%3A0%2C%22resourceId%22%3A%7B%22kind%22%3A%22youtube%23video%22%2C%22videoId%22%3A%22M7FIvfx5J10%22%7D%7D%7D%7D](https://developers.google.com/youtube/v3/docs/playlistItems/insert?apix_params={"part"%3A"snippet"%2C"resource"%3A{"snippet"%3A{"playlistId"%3A"PLXfpdKQNriPMcDRzCgyvq5J1yk1s14yKX"%2C"position"%3A0%2C"resourceId"%3A{"kind"%3A"youtube%23video"%2C"videoId"%3A"M7FIvfx5J10"}}}})



# Search: list

get video id by searching (first result can be good ;) )

[https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%22snippet%22%2C%22maxResults%22%3A25%2C%22q%22%3A%22My%20Own%20Summer%20(Shove%20It)%22%7D](https://developers.google.com/youtube/v3/docs/search/list?apix_params={"part"%3A"snippet"%2C"maxResults"%3A25%2C"q"%3A"My Own Summer (Shove It)"})

| Use cases                                                    |                                                              |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| [list (by keyword)](https://developers-dot-devsite-v2-prod.appspot.com/youtube/v3/docs/search/list_c00c7e38fb0abb9823bcf14aacd08fc8e28dc2f835eb407ddff169f95d3f4b7f.frame#) ![Code symbol that, when clicked, opens the fullscreen APIs Explorer widget and populates it with values for the 'list (by keyword)' example for the search.list method.](https://developers.google.com/site-assets/platform-html-color.svg) | This example retrieves the first 25 search results associated with the keyword **surfing**. By default, the `type` parameter does not specify a value, which means the response could include videos, playlists, and channels. |



# **SPOTIFY**

create playlist with create-playlist -> 

https://developer.spotify.com/documentation/general/guides/working-with-playlists/

https://developer.spotify.com/documentation/web-api/reference/playlists/create-playlist/

https://developer.spotify.com/documentation/web-api/reference/playlists/add-tracks-to-playlist/