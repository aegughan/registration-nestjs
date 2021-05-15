import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    // Service to create a user
    async createUser(userData: UserDto) {
        const { firstName, lastName, emailId, mobileNumber, password } = userData;
        // It will check the user exist for the emailId. If user exist then error message will be thrown.
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

    // Service to find the user for the given emailId
    async findUser(emailId: string): Promise<User> {
        const userEntity = await User.findOne({ where: { emailId: emailId } });
        return userEntity
    }
}
