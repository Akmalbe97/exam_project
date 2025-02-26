import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Court {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string
}
