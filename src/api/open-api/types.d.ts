import { OfficialResponse } from '../../types'

export type SearchQuota = OfficialResponse & {
    quota: {
        daily_limit: number,
        used: number,
        remain: number,
    }
}

export type SearchRid = OfficialResponse & {
    request:{
        invoke_time: number,
        cost_in_ms: number,
        request_url: string,
        request_body: string,
        response_body: string,
        client_ip: string,
    }
}