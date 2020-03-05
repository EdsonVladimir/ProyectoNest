import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensaje } from './mensajes/entities/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'nest',
      password: 'app',
      database: 'sendmeapp_db',
      entities: [Mensaje],
      synchronize: true,
    }),
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService],
})
export class AppModule {}
