import { number, object, string, TypeOf, z } from "zod";

export const createAlbumSchema = object({
  body: object({
    albumId: number({
      required_error: "albumId is required",
    }),
    albumName: string({
      required_error: "albumName address is required",
    }),
    artistId: number({
      required_error: "artistId is required",
    }),
    artistName: string({
      required_error: "artistName address is required",
    }),
  }),
});

export type CreateAlbumInput = Omit<
  TypeOf<typeof createAlbumSchema>["body"],
  "passwordConfirm"
>;