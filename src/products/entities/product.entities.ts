import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 40 })
  name: string

  @Column({ type: 'float' })
  price: number

  @Column()
  stock_number: number

  @Column({ length: 100 })
  description: string
}
