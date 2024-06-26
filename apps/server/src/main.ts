import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('Passwords API')
    .setDescription('Velozient Code Challenge')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(port);
  Logger.log(
    `Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
