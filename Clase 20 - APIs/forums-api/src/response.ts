import type { Response as ExpressResponse } from "express";

enum HttpStatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
  NotImplemented = 501,
}

export const send = (res: ExpressResponse) => {
  return {
    OK: (data: any) => res.status(HttpStatusCode.OK).json(data),
    Created: (data: any) => res.status(HttpStatusCode.Created).send(data),
    BadRequest: (msg: string) => res.status(HttpStatusCode.BadRequest).json(msg),
    NotFound: () => res.status(HttpStatusCode.NotFound).json("Not found"),
    InternalError: (msg: string) => res.status(HttpStatusCode.InternalServerError).json(msg),
    NotImplemented: (msg: string) => res.status(HttpStatusCode.NotImplemented).json(msg),
  };
};
