import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
export declare class LoginService {
    private userService;
    constructor(userService: UserService);
    userLogin(loginData: LoginDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        emailId: string;
        mobileNumber: string;
    } | {
        message: string;
    }>;
}
