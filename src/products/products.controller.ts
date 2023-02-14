import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common'

import { CreateProductDto, UpdateProductDto } from './dto'
import { ProductService } from './product.service'
import { Product } from './entities'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll()
  }

  @Get(':id')
  get(
    @Param('id')
    id: string
  ): Promise<Product> {
    return this.productService.get(id)
  }

  @Post()
  create(
    @Body()
    createProductDto: CreateProductDto
  ) {
    return this.productService.create(createProductDto)
  }

  @HttpCode(204)
  @Put(':id')
  update(
    @Param('id')
    id: string,
    @Body()
    updateProductDto: UpdateProductDto
  ) {
    return this.productService.update(id, updateProductDto)
  }

  @HttpCode(204)
  @Delete(':id')
  delete(
    @Param('id')
    id: string
  ) {
    return this.productService.delete(id)
  }
}
