import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
    @Post ('Register')
    RegisterUser (@Body()userObj: RegisterAuthDto){
        userObj.Email
        userObj.Password

    }
}
