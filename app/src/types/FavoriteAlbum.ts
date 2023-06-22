export interface HttpResponse {
  status: string;
  data: Data;
}

export interface Data {
  result: FavoriteAlbum[];
}

export interface FavoriteAlbum {
  id: string;
  created_at: string;
  updated_at: string;
  albumId: number;
  albumName: string;
  artistId: number;
  artistName: string;
}
