import React, {  } from "react";
import * as MusixmatchAlbum from "../types/Album";
import { Box, Card, CardBody, CardFooter, Flex, Spacer } from "@chakra-ui/react";
import { FavoriteButton } from "./FavoriteButton";

type AlbumPanelProps = {
  album: MusixmatchAlbum.Album;
};

export const AlbumPanel: React.FC<AlbumPanelProps> = (props) => {

    function getGenresName(){
        if (
          !!props.album.primary_genres &&
          !!props.album.primary_genres.music_genre_list &&
          props.album.primary_genres.music_genre_list.length > 0
        ) {
            return props.album.primary_genres.music_genre_list[0].music_genre.music_genre_name;
        }

        return '';
    }

  return (
    <Card borderWidth="1px" borderRadius="lg" p={8}>
      <CardBody></CardBody>
      <p>{props.album.album_name}</p>
      <p>
        <img src="{props.album.album_coverart_100x100}" alt="" />
      </p>
      <p>{getGenresName()}</p>

      <CardFooter>
        <Flex>
          <Spacer></Spacer>
          <FavoriteButton album={props.album}></FavoriteButton>
        </Flex>
      </CardFooter>
    </Card>
  );
};
