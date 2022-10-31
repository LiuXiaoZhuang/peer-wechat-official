import { OfficialResponse } from '../../types';
declare type Industry = {
    first_class: string;
    second_class: string;
};
export declare type GetIndustry = {
    primary_industry: Industry;
    secondary_industry: Industry;
};
export declare type Add = OfficialResponse & {
    template_id: string;
};
export declare type GetTemplates = {
    template_list: {
        template_id: string;
        title: string;
        primary_industry: string;
        deputy_industry: string;
        content: string;
        example: string;
    }[];
};
export declare type SendParam = {
    touser: string;
    template_id: string;
    url?: string;
    miniprogram?: {
        appid: string;
        pagepath: string;
    };
    client_msg_id?: string;
    data: Record<string, {
        value: any;
        color?: string;
    }>;
};
export declare type SendResponse = OfficialResponse & {
    msgid: number;
};
export {};
