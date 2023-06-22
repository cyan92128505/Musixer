export interface HttpResponse {
  status: string;
  data: Data;
}

export interface Data {
  result: Result;
}

export interface Result {
  message: Message;
}

export interface Message {
  header: Header;
  body: Body;
}

export interface Body {
  album_list: Albumlist[];
}

export interface Albumlist {
  album: Album;
}

export interface Album {
  album_id: number;
  album_mbid: string;
  album_name: string;
  album_rating: number;
  album_release_date: string;
  artist_id: number;
  artist_name: string;
  primary_genres: Primarygenres;
  album_pline: string;
  album_copyright: string;
  album_label: string;
  restricted: number;
  updated_time: string;
  external_ids: Externalids;
}

export interface Externalids {
  spotify: string[];
  itunes: string[];
  amazon_music: any[];
}

export interface Primarygenres {
  music_genre_list: Musicgenrelist[];
}

export interface Musicgenrelist {
  music_genre: Musicgenre;
}

export interface Musicgenre {
  music_genre_id: number;
  music_genre_parent_id: number;
  music_genre_name: string;
  music_genre_name_extended: string;
  music_genre_vanity: string;
}

export interface Header {
  status_code: number;
  execute_time: number;
  available: number;
}


