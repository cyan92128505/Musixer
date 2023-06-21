import { Request, Response, NextFunction } from "express";
import passport from "passport";

export class AuthMiddleware {
  static isAuth = passport.authenticate("jwt", { session: false });
  static isNotAuth = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("jwt", (err: never, user: boolean) => {
      if (user) {
        return res.status(401).send("Unauthorized");
      }
      next();
    })(req, res, next);
  };

  static detect(needAuth: boolean) {
    return needAuth ? this.isAuth : this.isNotAuth;
  };
}

export default AuthMiddleware;
