"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    async createUser(userData) {
        const { firstName, lastName, emailId, mobileNumber, password } = userData;
        const userObj = await this.findUser(emailId);
        if (userObj === undefined) {
            const userEntity = user_entity_1.User.create();
            userEntity.firstName = firstName;
            userEntity.lastName = lastName;
            userEntity.emailId = emailId;
            userEntity.mobileNumber = String(mobileNumber);
            userEntity.password = password;
            await user_entity_1.User.save(userEntity);
            return { status: "sucess", message: "User registered successfully!!", data: userEntity };
        }
        return { status: "error", message: "User with emailId already registered!!" };
    }
    async findUser(emailId) {
        const userEntity = await user_entity_1.User.findOne({ where: { emailId: emailId } });
        return userEntity;
    }
};
UserService = __decorate([
    common_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map