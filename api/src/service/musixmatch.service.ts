import config from "config";
import { readJSON } from "fs-extra";
import musicmatch from "musicmatch";
import countryCode from "./country_code.json" ;

const apikey = config.get<string>("musixmatchApiKey");
const mxm = new musicmatch({ apikey });

const defaultCountryCode = "tw";

export type getLastTenAlbumsByArtistRequestType = {
    artist_id: number,
}

export type getLastTenArtistsByCountryCodeRequestType = {
  countryCode?: string;
};

export async function getCountryCodeList() {
  return countryCode;
}

export async function getLastTenArtistsByCountryCode(countryCode?: string) {
  return await mxm.chartArtists({
    country: countryCode || defaultCountryCode,
    page: 1,
    page_size: 10,
  });
}

export async function getLastTenAlbumsByArtist(artistId: number) {
  return await mxm.artistAlbums({
    artist_id: artistId,
    page: 1,
    page_size: 10,
  });
}

export async function getTracksByAlbumId(albumId: number) {
  return await mxm.albumTracks({
    album_id: albumId,
  });
}




