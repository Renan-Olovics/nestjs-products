import { NestApplicationOptions, ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'

import { EntityNotFoundExceptionFilter } from './exception-filters'

enum Versions {
  v1 = 'v1',
}

const appVersion = Versions.v1
const prefix = 'api'
const fullPrefix = `${prefix}/${appVersion}`

async function server() {
  const appOptions: NestApplicationOptions = {
    cors: true,
  }

  const app = await NestFactory.create(AppModule, appOptions)
  app.useGlobalFilters(new EntityNotFoundExceptionFilter())
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }))
  app.setGlobalPrefix(fullPrefix)
  app.enableCors()

  const documentOptions = new DocumentBuilder()
    .setTitle('Products backend')
    .setDescription('This application is basic crud of products')
    .setVersion(appVersion)
    .setBasePath(prefix)
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, documentOptions)
  SwaggerModule.setup(fullPrefix, app, document)

  await app.listen(3000)
}

server()
