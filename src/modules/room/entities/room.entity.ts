import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Chat } from 'src/modules/chat/entities/chat.entity';

@Table
export class Room extends Model<Room> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column({
    type: DataType.STRING,
    // unique: true,
    allowNull: false,
  })
  user: string;

  @Column({
    type: DataType.STRING,
  })
  room: string;

  @Column({
    type: DataType.STRING,
  })
  time: string;

  @HasMany(() => Chat)
  chat: Chat[];
}
