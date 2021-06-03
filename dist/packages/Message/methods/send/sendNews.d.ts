import { AxiosInstance } from 'axios';
interface MessageSendNewsMethodOptions extends MessageSendNewsOptions {
    request: AxiosInstance;
}
export declare const sendNews: (options: MessageSendNewsMethodOptions) => any;
export {};
