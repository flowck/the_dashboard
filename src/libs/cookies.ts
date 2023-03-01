import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

export class CookieHandler {
  private cookies!: Cookies;

  constructor(private req: NextApiRequest, res: NextApiResponse) {
    this.cookies = new Cookies(req, res);
  }

  get(name: string, opts?: Cookies.GetOption) {
    return this.cookies.get(name, opts);
  }

  set(name: string, value?: string | null, opts?: Cookies.SetOption) {
    this.cookies.set(name, value, { ...opts, sameSite: "strict" });
  }

  clear(name: string) {
    this.cookies.set("name", "", { expires: new Date() });
  }
}
