import { OfficialResponse } from '../../types'

export type CreateResponse = OfficialResponse & {
    short_key: string,
}

export type AnalysisResponse = OfficialResponse & {
    long_data: string,
    create_time: number,
    expire_seconds: number,
}