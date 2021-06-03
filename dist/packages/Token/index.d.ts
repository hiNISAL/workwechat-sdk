import BaseModule from '../';
declare class Token extends BaseModule {
    EXPIRSE_TIME: number;
    lastGetAccessTokenTime: number;
    get accessToken(): string;
    isAccessTokenOverTime(): boolean;
    getAccessToken(): Promise<any>;
}
export default Token;
