import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {bodyParser: true});
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.use(cors());
  await app.listen(process.env.PORT || 5000);
}

bootstrap();
