import { AxiosInstance } from 'axios';
interface UserInfoMethodOptions extends UserInfoOptions {
    request: AxiosInstance;
}
export declare const info: (options: UserInfoMethodOptions) => Promise<unknown>;
export {};
