export type LoggerLevel = 'info' | 'warn' | 'error'
export interface Logger {

    log(level: LoggerLevel, message: string): void

    info(message: string): void

    warn(message: string): void

    error(message: string): void
}

export type AccessToken = (appID: string)=>string | Promise<string>
export type JsapiTicket = (appID: string)=>string | Promise<string>
export type Response<T, E> = {
    status: 'success' | 'fail' | 'network' | 'system';
    result: T;
    error: E;
    header?: Record<string, any>
}

export type OfficialResponse = {
    errcode: number;
    errmsg: string;
}