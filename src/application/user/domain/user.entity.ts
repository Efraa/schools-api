import { Entity, Column } from 'typeorm'
import { Roles } from '@app/user/utils/user.roles'
import { BaseEntity } from '@database/BaseEntity'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column()
  name: string

  @Column()
  lastname: string

  @Column({
    unique: true
  })
  email: string

  @Column({
    unique: true
  })
  username: string

  @Column()
  password: string

  @Column({
    nullable: true
  })
  picture: string

  @Column({
    type: 'enum',
    enum: Roles
  })
  role: Roles

  @Column({
    nullable: true
  })
  codeSchool: string

  @Column({
    default: false
  })
  isGoogle: boolean

  @Column({
    default: false
  })
  isVerified: boolean

  @Column({
    default: false
  })
  isPremium: boolean

  @Column({
    default: true
  })
  isActive: boolean

  @Column({
    default: true
  })
  onBoarding: boolean

  @Column({
    nullable: true
  })
  forgotPasswordToken: string

  @Column({
    nullable: true
  })
  forgotPasswordExpire: Date
}
