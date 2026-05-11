import { DealersService } from './dealers.service';
import { CreateDealerDto } from './dto/create-dealer.dto';
export declare class DealersController {
    private readonly dealersService;
    constructor(dealersService: DealersService);
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateDealerDto): Promise<any>;
    findMine(req: {
        user: {
            sub: string;
        };
    }): Promise<any>;
    findOne(id: string): Promise<any>;
}
//# sourceMappingURL=dealers.controller.d.ts.map