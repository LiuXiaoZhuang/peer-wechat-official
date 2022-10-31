import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { Submit, GetStatus, GetArticle, ArticleList } from './types';
export declare class Publish {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    submit(mediaID: string): Promise<import("../../types").Response<Submit, OfficialResponse>>;
    getStatus(publishID: string): Promise<import("../../types").Response<GetStatus, OfficialResponse>>;
    delete(articleID: string, index?: number): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    getArticle(articleID: string): Promise<import("../../types").Response<GetArticle, OfficialResponse>>;
    articleList(offset?: number, count?: number, noContent?: boolean): Promise<import("../../types").Response<ArticleList, OfficialResponse>>;
}
