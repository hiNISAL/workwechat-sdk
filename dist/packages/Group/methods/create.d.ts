import { AxiosInstance } from 'axios';
interface GroupCreateMethodOptions extends GroupCreateOptions {
    request: AxiosInstance;
}
export declare const create: ({ request, name, owner, userlist, chatid, }: GroupCreateMethodOptions) => Promise<unknown>;
export {};
