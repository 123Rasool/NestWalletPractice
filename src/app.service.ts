import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDescription() : string {
    return "use swagger in localhost:3000/api to find all available routes";
  }
}
