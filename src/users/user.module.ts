import { ContainerModule, interfaces } from "inversify";
import { UserController } from "./users.controller";
import { TYPES } from "../types";
import { UserService } from "./user.service";
import { Repository, getRepository } from "typeorm";
import { User } from "./user.entity";
import { UserRepository } from "./repo/user.repo";
const userModule = new ContainerModule((bind:interfaces.Bind)=>{
    bind<UserController>(TYPES.UserController).to(UserController)
    bind<UserService>(TYPES.UserService).to(UserService)
    bind<UserRepository>(TYPES.UserRepo).to(UserRepository)

    bind<Repository<User>>(Repository<User>).toDynamicValue(() => {
        return getRepository(User);
    });
})

export default {
    module:userModule,
    controllers:[UserController]
}