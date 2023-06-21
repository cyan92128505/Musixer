import fs from "fs-extra";
import path from "path";
import { PassportStatic } from "passport";
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
  VerifyCallback,
} from "passport-jwt";
import logger from "../utils/logger";
import { User } from "../entity/User";

class PassportService {
  option: StrategyOptions | undefined;

  async prepareOption() {
    const pathToKey = path.join(__dirname, "..", "id_rsa_pub.pem");
    const PUB_KEY = await fs.readFile(pathToKey, "utf8");

    this.option = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: PUB_KEY,
      algorithms: ["RS256"],
    };
  }

  authenticate: VerifyCallback = async (payload, done) => {
    try {
      
      const user = await User.findOne({
        where: { id: payload.sub },
      });

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      logger.error(`${err}`, { errObj: err });
      throw err;
    }
  };

   async initPassport(passport: PassportStatic)  {
    await this.prepareOption();
    if (!this.option) {
      logger.error(`Failed load JWT public key`);
      return;
    }

    passport.use(new JwtStrategy(this.option, this.authenticate));
  }
}

export default PassportService;
