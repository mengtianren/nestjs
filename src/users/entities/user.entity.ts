import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({
  name: 't_user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '用户名', default: '默认用户名1' })
  name: string;

  @Column({ comment: '身份证号', nullable: true })
  cardCode: string;

  @Column({ nullable: false, unique: true, comment: '用户邮箱' })
  email: string;

  @Column({
    nullable: false,
    unique: true,
    comment: '用户手机号',
  })
  phone: string;

  @Column({
    type: 'enum',
    enum: ['1', '2', '3'],
    comment: '1:超级管理员 2:管理员 3:普通用户',
    default: '3',
  })
  roles: string;

  @Column({
    type: 'enum',
    enum: ['0', '1', '2', '3'],
    comment: '0:未启用 1:正常用户 2:禁用用户 3:封禁用户',
    default: '0',
  })
  status: string;

  @Column({ nullable: false, comment: '用户密码' })
  password: string;

  // 创建时间
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  // 更新时间
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
