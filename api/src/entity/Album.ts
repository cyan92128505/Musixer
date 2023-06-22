import { Column, Entity, Index, ManyToOne } from "typeorm"
import { User } from "./User";
import Model from "./Model";

@Entity()
@Index(["id", "albumId"], { unique: true })
export class Album extends Model {
  @Column({
    name: "album_id",
  })
  albumId!: number;

  @Column({
    name: "album_name",
  })
  albumName!: string;

  @Column({
    name: "artist_id",
  })
  artistId!: number;

  @Column({
    name: "artist_name",
  })
  artistName!: string;

  @ManyToOne(() => User, (user) => user.favoriteAlbums)
  user: User;
}
