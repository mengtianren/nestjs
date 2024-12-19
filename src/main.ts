import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { ResponseInterceptor } from '@/utils/response/response.interceptor';
import { ResponseFilter } from '@/utils/response/response.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 免受一些众所周知的 Web 漏洞
  app.use(helmet());
  // 跨域
  app.enableCors();
  //  信息返回统一封装
  app.useGlobalInterceptors(new ResponseInterceptor());
  // 错误消息统一处理
  app.useGlobalFilters(new ResponseFilter());

  const config = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('接口文档详情')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
