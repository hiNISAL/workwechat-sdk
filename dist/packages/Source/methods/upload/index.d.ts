import { AxiosInstance } from 'axios';
interface SourceUploadMethodOptions extends SourceUploadOptions {
    request: AxiosInstance;
}
export declare const upload: (options: SourceUploadMethodOptions) => Promise<any>;
export {};
