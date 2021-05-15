import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
export declare class UserService {
    createUser(userData: UserDto): Promise<{
        status: string;
        message: string;
        data: User;
    } | {
        status: string;
        message: string;
        data?: undefined;
    }>;
    findUser(emailId: string): Promise<User>;
}
