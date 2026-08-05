import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthJwtService {
  constructor(private readonly jwt: JwtService) {}

  generate(payload: object) {
    return this.jwt.sign(payload);
  }
}
