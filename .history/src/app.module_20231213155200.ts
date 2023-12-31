import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      is,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
