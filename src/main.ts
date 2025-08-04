import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, 
    })
  )

  const config = new DocumentBuilder()
  .setTitle('Nexus API')
  .setDescription('Base API URL - http://localhost:3000')
  .setTermsOfService('https://localhost:3000/terms-of-service')
  .setLicense('MIT Licence', 'https://github.com/Nimira43/Nexus-API/blob/main/notes/license.txt')
  .setVersion('1.0')
  .build()
    
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
