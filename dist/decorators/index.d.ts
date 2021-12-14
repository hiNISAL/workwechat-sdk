interface APIPostOptions {
    withAccessToken?: boolean;
    withAgentId?: boolean;
    prefix?: string;
}
interface APIOptions extends APIPostOptions {
    method?: string;
}
export declare const API: (path: string, { withAccessToken, withAgentId, prefix, method, }?: APIOptions) => (clazz: any, name: string, desc: any) => void;
export declare const APIPost: (path: string, { withAccessToken, prefix, withAgentId, }?: APIPostOptions) => (clazz: any, name: string, desc: any) => void;
export {};
