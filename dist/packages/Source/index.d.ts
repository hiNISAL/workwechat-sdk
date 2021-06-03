import BaseModule from '..';
declare class Source extends BaseModule {
    upload(options: SourceUploadOptions): Promise<any>;
    uploadImage(options: SourceUploadMediaCommonOptions): Promise<any>;
    uploadVoice(options: SourceUploadMediaCommonOptions): Promise<any>;
    uploadFile(options: SourceUploadMediaCommonOptions): Promise<any>;
    uploadVideo(options: SourceUploadMediaCommonOptions): Promise<any>;
}
export default Source;
