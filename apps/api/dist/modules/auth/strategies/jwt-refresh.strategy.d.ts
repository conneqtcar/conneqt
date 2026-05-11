import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    constructor(configService: ConfigService);
    validate(req: Request, payload: {
        sub: string;
        email: string;
        type: string;
    }): {
        sub: string;
        email: string;
        type: string;
    };
}
export {};
//# sourceMappingURL=jwt-refresh.strategy.d.ts.map