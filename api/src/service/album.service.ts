import { Equal } from "typeorm";
import { AppDataSource } from "../data-source";
import { Album } from "../entity/Album";
import { User } from "../entity/User";

const albumRepository = AppDataSource.getRepository(Album);
const userRepository = AppDataSource.getRepository(User);

export const createAlbum = async (input: Partial<Album>, user: User) => {
  const targetUser = await userRepository.findOne({
    where: { id: Equal(user.id) },
    relations: ["favoriteAlbums"],
  });

  if (!targetUser) {
    return;
  }

  targetUser.favoriteAlbums = targetUser?.favoriteAlbums || [];

  const existAlbums = targetUser.favoriteAlbums.filter(
    (a) => `${a.albumId}` === `${input.albumId}`
  );

  if (existAlbums.length > 0) {
    return existAlbums[0];
  }

  const album = await AppDataSource.manager.save(albumRepository.create(input));

  targetUser.favoriteAlbums.push(album);

  await AppDataSource.manager.save(targetUser);

  return album;
};

export const findAlbumByUserId = async (user: User) => {
  const targetUser = await userRepository.findOne({
    where: { id: Equal(user.id) },
    relations: ["favoriteAlbums"],
  });

  if (!targetUser) {
    return [];
  }

  return targetUser.favoriteAlbums;
};

export const deleteAlbumById = async (id: string) => {
  const result = await albumRepository.delete({
    id: id,
  });

  return result;
};
