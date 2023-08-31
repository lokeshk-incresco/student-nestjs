import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3003)
    .then(() => {
      console.log('Port 3003');
    })
    .catch((error) => {
      console.log(error);
    });
}
bootstrap();
