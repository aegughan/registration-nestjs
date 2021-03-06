import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
    constructor(private userService: UserService) { }

    // Service to check the user exist or not while validation
    async userLogin(loginData: LoginDto) {
        // It will return user object if user exist for the given emailId 
        const userObj = await this.userService.findUser(loginData.emailId);
        if (userObj && userObj.password === loginData.password) {
            const { password, ...result } = userObj;
            return result;
        }
        if (userObj !== undefined) {
            return { message: "Password is incorrect!!" }
        }
        return { message: "Email Id is not registered with us!!" }
    }
}
