import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  ///Config Swagger 
  const config = new DocumentBuilder()
    .setTitle('Wallet example')
    .setDescription('The wallet API description')
    .setVersion('1.0')
    .addTag('wallet')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /// end of Config Swagger
  await app.listen(3000);
}
bootstrap();
