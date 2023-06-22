import React, { useCallback, useEffect, useState } from "react";
import * as MusixmatchAlbum from "../types/Album";
import { StarIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import useLocalStorage from "use-local-storage";

type FavoriteButtonProps = {
  album: MusixmatchAlbum.Album;
};

type FavoriteAlbumListType = {
  [key: number]: boolean;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = (pros) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favoriteAlbumList, setFavoriteAlbumList] =
    useLocalStorage<FavoriteAlbumListType>("FavoriteAlbumList", {});


  useEffect(() => {
    setIsFavorite(favoriteAlbumList[pros.album.album_id] || false);
  }, [favoriteAlbumList, pros.album.album_id]);

  const toggleFavorite = useCallback(() => {
    let _map: FavoriteAlbumListType = {};

    Object.keys(favoriteAlbumList).map((k)=>{
      _map[+k] = favoriteAlbumList[+k];
      return k;
    });

    _map[pros.album.album_id] = !isFavorite;
    setFavoriteAlbumList(_map);
  }, [
    favoriteAlbumList,
    isFavorite,
    pros.album.album_id,
    setFavoriteAlbumList,
  ]);

  return (
    <IconButton
      size="sm"
      onClick={toggleFavorite}
      colorScheme={isFavorite ? "yellow" : "gray"}
      aria-label="Search database"
      icon={<StarIcon />}
    />
  );
};
