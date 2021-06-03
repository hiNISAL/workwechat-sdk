import { AxiosInstance } from 'axios';
interface GroupSendNewsMethodOptions extends GroupSendNewsOptions {
    request: AxiosInstance;
}
export declare const sendNews: ({ chatid, articles, request, safe, }: GroupSendNewsMethodOptions) => Promise<unknown>;
export {};
