import { ApiProperty } from '@nestjs/swagger';
import { UserRoleEnum } from 'src/roles/roles.enum';
import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity({
  name: 'User',
})
export class UserEntity {
  @ObjectIdColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @ApiProperty({ description: 'password' })
  password: string;

  @Column('text', { array: true, default: ['USER'] })
  @ApiProperty({ description: 'roles' })
  roles: UserRoleEnum[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isConfirm: boolean;
}
