export declare type CreateResponse = {
    tag: {
        id: number;
        name: string;
    };
};
export declare type ListResponse = {
    tags: {
        id: number;
        name: string;
        count: number;
    };
};
export declare type UserListResponse = {
    count: number;
    data: {
        openid: string[];
    };
    next_openid: string;
};
export declare type UserTagsResponse = {
    tagid_list: number[];
};
