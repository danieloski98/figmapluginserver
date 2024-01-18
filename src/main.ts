import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT');

  const config = new DocumentBuilder()
    .setTitle('Get People')
    .setDescription('Figma plugin API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
