import { OfficialResponse } from '../../types'

export type ListResponse = {
    total: number,
    count: number,
    data: {
        openid: string[],
    },
    next_openid: string,
}