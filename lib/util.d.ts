import { AxiosRequestConfig } from 'axios';
import { Logger, AccessToken, Response } from './types';
export declare class Util {
    logger: Logger;
    setLogger(logger: Logger): void;
    accessToken: AccessToken;
    setAccessToken(getAccessToken: AccessToken): void;
    request<T, E>(url: string, options?: AxiosRequestConfig): Promise<Response<T, E>>;
}
