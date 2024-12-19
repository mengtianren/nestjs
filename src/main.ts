import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  // 免受一些众所周知的 Web 漏洞
  app.use(helmet());
  // 跨域
  app.enableCors();
}
bootstrap();
