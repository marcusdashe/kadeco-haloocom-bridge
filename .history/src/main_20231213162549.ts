import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const configService = app.get(ConfigService);
  const { host, port } = configService.get('http', {
    host: 'localhost',
    port: 8000,
  });

  await app.listen(port);
  console.log(`Application is running on: http://${host}:${port}`);
}
bootstrap();
