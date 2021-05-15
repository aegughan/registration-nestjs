import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    userLogin(loginData: LoginDto): Promise<{
        status: string;
        data: {
            id: number;
            firstName: string;
            lastName: string;
            emailId: string;
            mobileNumber: string;
        } | {
            message: string;
        };
    }>;
}
