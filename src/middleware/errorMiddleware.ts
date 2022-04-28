import { Provide, ScopeEnum, Scope } from '@midwayjs/decorator';
import { FaaSContext } from '@midwayjs/faas';
import { getReturnValue } from '../utils/common';

/**
 * 全局异常捕捉（日志）中间件
 * - 用于捕获全局产生的逻辑错误
 */
@Provide('errorResponse')
@Scope(ScopeEnum.Singleton)
export class ErrorResponseMiddleware {
  resolve() {
    return async (ctx: FaaSContext, next: () => Promise<any>) => {
      try {
        await next();
      } catch (error) {
        ctx.body = getReturnValue(
          false,
          null,
          error.toString() || '系统发生错误，请联系管理员'
        );
      }
    };
  }
}
