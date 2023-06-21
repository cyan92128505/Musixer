export class AppConstant {
  public get expiresIn(): number {
    return Date.now() / 1000 + 3600 * 24; // 1 day;
  }
}