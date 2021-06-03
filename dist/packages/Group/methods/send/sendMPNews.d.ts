import { AxiosInstance } from 'axios';
interface GroupSendMPNewsMethodOptions extends GroupSendMPNewsOptions {
    request: AxiosInstance;
}
export declare const sendMPNews: ({ chatid, articles, request, safe, }: GroupSendMPNewsMethodOptions) => Promise<unknown>;
export {};
