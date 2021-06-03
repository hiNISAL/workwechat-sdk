import { AxiosInstance } from 'axios';
interface GroupSendMarkdownMethodOptions extends GroupSendMarkdownOptions {
    request: AxiosInstance;
}
export declare const sendMarkdown: ({ chatid, safe, content, request, }: GroupSendMarkdownMethodOptions) => Promise<unknown>;
export {};
