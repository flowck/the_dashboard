import { config } from "config";
import { withApiMethod } from "libs/api-route";
import { CookieHandler } from "libs/cookies";
import { http, HttpRequestError } from "libs/http";
import { NextApiRequest, NextApiResponse } from "next";
const maxAge = 432000000; // 5 days

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return http
    .post(`${config.api}/signin`, req.body)
    .then(({ data }) => {
      const cookies = new CookieHandler(req, res);
      cookies.set("authorization_token", data.token, { maxAge });
      return res.status(200).json({ message: "success" });
    })
    .catch((error: HttpRequestError) => {
      return res
        .status(Number(error.response?.status))
        .json(error.response?.data);
    });
}

export default withApiMethod("POST", handler);
