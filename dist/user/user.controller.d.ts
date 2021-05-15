import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userData: UserDto): Promise<{
        status: string;
        message: string;
        data: import("./user.entity").User;
    } | {
        status: string;
        message: string;
        data?: undefined;
    }>;
}
