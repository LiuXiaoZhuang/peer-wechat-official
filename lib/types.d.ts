export declare type LoggerLevel = 'info' | 'warn' | 'error';
export interface Logger {
    log(level: LoggerLevel, message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}
export declare type AccessToken = (appID: string) => string | Promise<string>;
export declare type JsapiTicket = (appID: string) => string | Promise<string>;
export declare type Response<T, E> = {
    status: 'success' | 'fail' | 'network' | 'system';
    result: T;
    error: E;
    header?: Record<string, any>;
};
export declare type OfficialResponse = {
    errcode: number;
    errmsg: string;
};
