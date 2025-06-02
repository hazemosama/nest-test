import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAllUsers(): string[] {
    return ['Hazem', 'Ahmed', 'Mohamed'];
  }

  @Get(':username')
  findOne(@Param('username') username: string): { name: string } {
    console.log(`username param is ${username}`);
    return { name: username };
  }

  @Post()
  createUser(@Req() request: Request): string {
    console.log('reqBody', request.body);
    return 'Create new User';
  }

  @Patch(':username')
  update(): string {
    return 'Update User';
  }

  @Delete('username')
  remove(): string {
    return 'Remove User';
  }
}
