import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Card,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Heading,
  CardBody,
  Box,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import * as MusixmatchArtist from "../types/Artist";
import * as MusixmatchAlbum from "../types/Album";
import { api, errorHandler } from "../services/Utils";

import { FavoriteButton } from "./FavoriteButton";
import { AlbumPanel } from "./AlbumPanel";

type ArtistModalProps = {
  artist: MusixmatchArtist.Artist2;
  level: number;
};
export const ArtistModal: React.FC<ArtistModalProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [albumList, setAlbumList] = useState<MusixmatchAlbum.Albumlist[]>([]);
  const handleClick = () => {
    onOpen();
  };

  useEffect(() => {
    async function getArtist() {
      try {
        const response = await api.get<MusixmatchAlbum.HttpResponse>(
          `/musixmatch/getLastTenAlbumsByArtist/${props.artist.artist_id}`
        );

        setAlbumList(response.data.data.result.message.body.album_list);
      } catch (error) {
        errorHandler(error as any, {});
      }
    }

    getArtist();
  }, [props.artist.artist_id]);

  return (
    <>
      <Card onClick={() => handleClick()} m={4}>
        <CardHeader>
          <Heading size="md">
            {props.level + 1} - {props.artist.artist_name}
          </Heading>
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
      </Card>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.artist.artist_name}</ModalHeader>
          <ModalBody>
            <SimpleGrid pt={8} pb={16} columns={5} spacing={10}>
              {albumList.map((album) => (
                <AlbumPanel album={album.album} key={album.album.album_id}></AlbumPanel>
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
