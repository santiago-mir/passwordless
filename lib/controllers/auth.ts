import { User } from "lib/user";
import { Auth } from "lib/auth";
import { addMinutes } from "date-fns/addMinutes";
import gen from "random-seed";
const seed = "asdasdasds";
const random = gen.create(seed);
export async function findOrCreateAuth(email: string): Promise<Auth> {
  const cleanEmail = email.trim().toLowerCase();
  const auth = await Auth.findByEmail(cleanEmail);
  if (auth) {
    return auth;
  } else {
    const newUser = await User.createNewUser({
      email: cleanEmail,
    });
    const newAuth = await Auth.createNewAuth({
      email: cleanEmail,
      userId: newUser.id,
      code: "",
      expires: new Date(),
    });
    return newAuth;
  }
}

export async function sendCode(email: string) {
  const auth = await findOrCreateAuth(email);
  const code = random.intBetween(10000, 99999);
  const now = new Date();
  const twentyFromNow = addMinutes(now, 20);
  auth.data.code = code;
  auth.data.expires = twentyFromNow;
  await auth.push();
  return auth;
}
