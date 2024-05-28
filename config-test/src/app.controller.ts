import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private ConfigService: ConfigService) {}

  @Get()
  getHello(): string {
    const message = this.ConfigService.get('MESSAGE');
    return message;
  }
}
