import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { userReqInterface } from "src/interfaces/userReqInterface";

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: userReqInterface = ctx.switchToHttp().getRequest();
    if (data) {
      return request.user[data];
    }
    return request.user;
  }
);
