import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    async createUser(userData: UserDto) {
        const { firstName, lastName, emailId, mobileNumber, password } = userData;
        const userObj = await this.findUser(emailId);
        if (userObj === undefined) {
            const userEntity: User = User.create();
            userEntity.firstName = firstName;
            userEntity.lastName = lastName;
            userEntity.emailId = emailId;
            userEntity.mobileNumber = String(mobileNumber);
            userEntity.password = password;
            await User.save(userEntity);
            return { status: "sucess", message: "User registered successfully!!", data: userEntity };
        }
        return { status: "error", message: "User with emailId already registered!!" }
    }

    async findUser(emailId: string): Promise<User> {
        const userEntity = await User.findOne({ where: { emailId: emailId } });
        return userEntity
    }
}
