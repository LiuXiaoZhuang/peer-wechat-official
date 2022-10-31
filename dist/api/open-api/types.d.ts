import { OfficialResponse } from '../../types';
export declare type SearchQuota = OfficialResponse & {
    quota: {
        daily_limit: number;
        used: number;
        remain: number;
    };
};
export declare type SearchRid = OfficialResponse & {
    request: {
        invoke_time: number;
        cost_in_ms: number;
        request_url: string;
        request_body: string;
        response_body: string;
        client_ip: string;
    };
};
