/// <reference types="node" />
import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { MediaType, UploadTmpMedia, DownloadTmpMedia, UploadImg, UploadMediaParam, UploadMediaResponse, DownloadMedia, MediaCount, Article, AddNewsMedia } from './types';
import { Readable } from 'stream';
export declare class Media {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    uploadTmpMedia(type: MediaType, fileContent: Readable): Promise<import("../../types").Response<UploadTmpMedia, OfficialResponse>>;
    downloadTmpMedia(mediaID: string): Promise<import("../../types").Response<DownloadTmpMedia, OfficialResponse>>;
    uploadImg(fileContent: Readable): Promise<import("../../types").Response<UploadImg, OfficialResponse>>;
    uploadMedia(data: UploadMediaParam): Promise<import("../../types").Response<UploadMediaResponse, OfficialResponse>>;
    addNewsMedia(articles: Article[]): Promise<import("../../types").Response<AddNewsMedia, OfficialResponse>>;
    updateNewsMedia(mediaID: string, index: number, article: Article): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    getMedia(mediaID: string): Promise<import("../../types").Response<DownloadMedia, OfficialResponse>>;
    delMedia(mediaID: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    mediaCount(): Promise<import("../../types").Response<MediaCount, OfficialResponse>>;
    mediaList(type: MediaType, offset?: number, count?: number): Promise<import("../../types").Response<MediaCount, OfficialResponse>>;
    uploadVideo(mediaID: string, title: string, description: string): Promise<import("../../types").Response<UploadTmpMedia, OfficialResponse>>;
}
