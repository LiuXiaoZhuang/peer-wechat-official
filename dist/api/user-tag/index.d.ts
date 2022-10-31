import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { CreateResponse, ListResponse, UserListResponse, UserTagsResponse } from './types';
export declare class UserTag {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    create(name: string): Promise<import("../../types").Response<CreateResponse, OfficialResponse>>;
    list(): Promise<import("../../types").Response<ListResponse, OfficialResponse>>;
    update(id: number, name: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    delete(id: number): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    userList(tagID: number, nextOpenID?: string): Promise<import("../../types").Response<UserListResponse, OfficialResponse>>;
    batchTagging(tagID: number, openIDs: string[]): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    cancelTagging(tagID: number, openIDs: string[]): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    userTags(openID: string): Promise<import("../../types").Response<UserTagsResponse, OfficialResponse>>;
}
