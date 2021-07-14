import connectRedis from "connect-redis";
import session from "express-session";
import { redis, COOKIE_NAME, isProduction } from ".";

const RedisStore = connectRedis(session);

export const sessionMiddleware = session({
  name: COOKIE_NAME,
  store: new RedisStore({
    client: redis,
    disableTouch: true,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 366 * 10, //10 years
    httpOnly: true,
    sameSite: "lax", //csrf
    secure: isProduction, // cookie only works in https
  },
  secret: "hello world",
  resave: false,
  saveUninitialized: false,
});
