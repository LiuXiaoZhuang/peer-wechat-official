/// <reference types="node" />
import { AxiosRequestConfig } from 'axios';
import { Logger, AccessToken, JsapiTicket, Response } from './types';
import { Readable } from 'stream';
export declare class Util {
    logger: Logger;
    setLogger(logger: Logger): void;
    accessToken: AccessToken;
    setAccessToken(getAccessToken: AccessToken): void;
    jsapiTicket: JsapiTicket;
    setJsapiTicket(getJsapiTicket: JsapiTicket): void;
    request<T, E>(url: string, options?: AxiosRequestConfig): Promise<Response<T, E>>;
    downloadFile(url: string): Promise<Readable>;
    randStr(len?: number): string;
}
