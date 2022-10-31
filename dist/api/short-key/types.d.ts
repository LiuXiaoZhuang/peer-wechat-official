import { OfficialResponse } from '../../types';
export declare type CreateResponse = OfficialResponse & {
    short_key: string;
};
export declare type AnalysisResponse = OfficialResponse & {
    long_data: string;
    create_time: number;
    expire_seconds: number;
};
