import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('RABBIT_MQ') private client: ClientProxy) {}

  getUser(name: any): any {
    return `name: ${JSON.stringify(name)}`;
  }
}
