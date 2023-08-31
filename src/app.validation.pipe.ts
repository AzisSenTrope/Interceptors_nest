import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';

const DOLLAR = 80;

@Injectable()
export class ValidationPipe implements PipeTransform {
  public transform(value: any, metadata: ArgumentMetadata) {
    let rubs = 0;

    if (typeof value === 'string') {
      rubs = Number(value) * DOLLAR
    }

    return String(rubs) + ' RUB';
  }
}
