import * as bcrypt from 'bcryptjs';
import { IsNotEmpty, Length } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn} from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  @Length(2, 100)
  firstname?: string;

  @Column()
  @Length(2, 100)
  lastname?: string;

  @Column()
  @Length(4, 100)
  username!: string;

  @Column()
  @Length(4, 100)
  email!: string;

  @Column()
  @Length(4, 100)
  password!: string;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({default: true})
  isActive!: boolean;

  public hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}