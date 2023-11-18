import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { InboundMessageExternalDeserializer } from './deserializer';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBIT_MQ',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqp://hzgwkcsm:feMUhIx0bxqeWN67wJEzjX4w3rUNBsSz@toad-01.rmq.cloudamqp.com/hzgwkcsm',
          ],
          noAck: true,
          queue: 'ms_user',
          queueOptions: {
            durable: true,
          },
          deserializer: new InboundMessageExternalDeserializer(),
          // serializer: {
          //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
          //   serialize(value, _options) {
          //     return value.data;
          //   },
          // },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
