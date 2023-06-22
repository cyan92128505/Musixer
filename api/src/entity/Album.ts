import { Column, Entity, Index, JoinColumn, ManyToOne, RelationId } from "typeorm"
import { User } from "./User";
import Model from "./Model";

@Entity()
@Index(["user", "albumId"], { unique: true })
export class Album extends Model {
  @Column()
  albumId!: number;

  @Column()
  albumName!: string;

  @Column()
  artistId!: number;

  @Column()
  artistName!: string;

  @ManyToOne(() => User, (user) => user.favoriteAlbums)
  @JoinColumn({ name: "userId" })
  user: User;
}
