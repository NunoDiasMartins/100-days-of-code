import { Controller, Get, Param } from '@nestjs/common';

import { Invite } from '@kekkonshiki/api-interfaces';

import { AppService } from './app.service';

@Controller('v1/invite')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getInvite(@Param('id') id: string): Invite {
    return this.appService.getData(id);
  }
}
