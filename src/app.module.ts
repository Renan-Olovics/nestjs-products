import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { ProductModule } from './products/products.module'
import { typeOrmConfigService } from './config'

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot(typeOrmConfigService.getTypeOrmConfig())],
})
export class AppModule {}
