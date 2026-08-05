import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() data: LoginDto) {
    return data;
  }

  @Post('register')
  register(@Body() data: RegisterDto) {
    return data;
  }
}
