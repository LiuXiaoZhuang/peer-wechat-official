import { OfficialResponse } from '../../types';
export declare type AddParam = {
    tid: string;
    kidList: number[];
    sceneDesc: string;
};
export declare type AddResponse = OfficialResponse & {
    priTmplId: string;
};
export declare type GetCategory = OfficialResponse & {
    data: {
        id: number;
        name: string;
    }[];
};
export declare type GetKeywords = OfficialResponse & {
    data: {
        kid: number;
        name: string;
        example: string;
        rule: string;
    }[];
};
export declare type GetPubTemplates = OfficialResponse & {
    count: number;
    data: {
        tid: number;
        title: string;
        type: number;
        categoryId: string;
    }[];
};
export declare type GetTemplates = OfficialResponse & {
    data: {
        priTmplId: string;
        title: string;
        content: string;
        example: string;
        type: number;
    }[];
};
export declare type Send = {
    touser: string;
    template_id: string;
    page?: string;
    miniprogram?: {
        appid: string;
        pagepath: string;
    };
    data: Record<string, {
        value: any;
    }>;
};
