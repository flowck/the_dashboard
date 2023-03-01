import { NextApiRequest, NextApiResponse } from "next";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTION";
type Handler = { (req: NextApiRequest, res: NextApiResponse): void };

export const withApiMethod = (method: Method, handler: Handler): Handler => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (method.toLowerCase() !== String(req.method).toLowerCase()) {
      res.status(405).json({ message: "method not allowed" });
      return;
    }

    return handler(req, res);
  };
};
