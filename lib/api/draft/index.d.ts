import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { AddDraft, Article, GetDraft, CountDraft, DraftList } from './types';
export declare class Draft {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    addDraft(articles: Article[]): Promise<import("../../types").Response<AddDraft, OfficialResponse>>;
    getDraft(mediaID: string): Promise<import("../../types").Response<GetDraft, OfficialResponse>>;
    deleteDraft(mediaID: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    updateDraft(mediaID: string, index: number, article: Article): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    countDraft(): Promise<import("../../types").Response<CountDraft, OfficialResponse>>;
    draftList(offset?: number, count?: number, noContent?: boolean): Promise<import("../../types").Response<DraftList, OfficialResponse>>;
}
