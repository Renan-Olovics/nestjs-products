import { EntityNotFoundError, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Body, Injectable } from '@nestjs/common'

import { CreateProductDto, UpdateProductDto } from './dto'
import { Product } from './entities'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>
  ) {}
  async get(id: string): Promise<Product> {
    const product = await this.repository.findOne({ where: { id } })

    if (!product) {
      throw new EntityNotFoundError(Product, id)
    }

    return product
  }

  async getAll(): Promise<Product[]> {
    const products = await this.repository.find()
    return products
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.repository.create(createProductDto)
    const a = await this.repository.insert(product)
    return { ...product, id: a.identifiers[0].id }
  }

  async update(id: string, @Body() updateProductDto: UpdateProductDto) {
    const { affected } = await this.repository.update(id, updateProductDto)

    if (!affected) {
      throw new EntityNotFoundError(Product, id)
    }
  }

  async delete(id: string) {
    const { affected } = await this.repository.delete(id)

    if (!affected) {
      throw new EntityNotFoundError(Product, id)
    }
  }
}
