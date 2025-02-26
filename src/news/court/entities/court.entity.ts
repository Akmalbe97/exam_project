@Entity()
export class Court {
  @PrimaryGenerateColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string
}
