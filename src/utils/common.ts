// 通用接口相应返回值封装
export const getReturnValue = <T>(success = true, data: T, msg = '') => success ? { success, data } : { success, data, msg };
