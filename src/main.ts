import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqp://hzgwkcsm:feMUhIx0bxqeWN67wJEzjX4w3rUNBsSz@toad-01.rmq.cloudamqp.com/hzgwkcsm',
        ],
        noAck: false,
        queue: 'ms_user',
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
