import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { KycSubmitDto } from './dto/kyc-submit.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: {
        user: {
            sub: string;
        };
    }): Promise<any>;
    updateProfile(req: {
        user: {
            sub: string;
        };
    }, dto: UpdateUserDto): Promise<any>;
    submitKyc(req: {
        user: {
            sub: string;
        };
    }, dto: KycSubmitDto): Promise<any>;
    findOne(id: string): Promise<any>;
}
//# sourceMappingURL=users.controller.d.ts.map