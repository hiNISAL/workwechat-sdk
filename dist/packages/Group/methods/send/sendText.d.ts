import { AxiosInstance } from 'axios';
interface GroupSendTextMethodOptions extends GroupSendTextOptions {
    request: AxiosInstance;
}
export declare const sendText: ({ chatid, content, safe, request, }: GroupSendTextMethodOptions) => Promise<unknown>;
export {};
