import { AxiosInstance } from 'axios';
interface GroupSendTextCardMethodOptions extends GroupSendTextCardOptions {
    request: AxiosInstance;
}
export declare const sendTextCard: ({ chatid, request, title, desc, url, btntxt, safe, }: GroupSendTextCardMethodOptions) => Promise<unknown>;
export {};
