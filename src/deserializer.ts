import { Logger } from '@nestjs/common';
// import * as uuid from 'uuid/v4';
import { ConsumerDeserializer } from '@nestjs/microservices';

export class InboundMessageExternalDeserializer
  implements ConsumerDeserializer
{
  // private value: string;
  // private option: any;
  // constructor(value?, option?) {
  //   this.value = value;
  //   this.option = option;
  // }
  private readonly logger = new Logger('InboundMessageExternalDeserializer');
  deserialize(value: any, options?: Record<string, any>) {
    this.logger.verbose(
      `<<-- deserializing inbound external message:\n${JSON.stringify(
        value,
      )}\n\twith options: ${JSON.stringify(options)}`,
    );

    /**
     * Here, we merely wrap our inbound message payload in the standard Nest
     * message structure.
     */
    return {
      pattern: 'ms_user',
      data: value,
      id: '46283a9c-1e73-458b-9186-488a452a6d4e',
    };
  }
}
