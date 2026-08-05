import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(data: any) {
    return {
      message: 'Registration flow ready',
      company: data.companyName,
      user: data.email,
    };
  }

  async login(data: any) {
    return {
      message: 'Login flow ready',
      email: data.email,
    };
  }

  async refreshToken(token: string) {
    return {
      message: 'Refresh token flow ready',
      token,
    };
  }
}
