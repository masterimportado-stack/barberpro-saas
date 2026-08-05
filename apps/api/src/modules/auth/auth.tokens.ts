export interface TokenPayload {
  sub: string;
  email: string;
  role: string;
  companyId: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}
