import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  // Route path "/login" and it send the user data if the given emailId and Password matched
  // otherwise it throw the relevant error message
  @Post()
  @UsePipes(new ValidationPipe())
  async userLogin(@Body() loginData: LoginDto) {
    console.log("loginData", loginData);
    const userData = await this.loginService.userLogin(loginData);
    return { status: "success", data: { ...userData } }
  }
}
