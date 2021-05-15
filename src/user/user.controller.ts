import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createUser(@Body() userData: UserDto) {
    console.log("userData", userData)
    const userObj = await this.userService.createUser(userData);
    return userObj;
  }
}
