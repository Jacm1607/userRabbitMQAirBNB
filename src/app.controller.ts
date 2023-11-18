import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
// import { CreateUserDto } from './rabbit.dto';
// import { CreateUserDto } from './rabbit.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'ms_user' })
  async handleMessage(@Payload() message: any) {
    // Deserializar el mensaje JSON
    console.log(message);

    // Devuelve una respuesta opcional
    return 'Mensaje recibido correctamente';
  }
}
