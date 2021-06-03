import Cryptor from './packages/Cryptor';
import Group from './packages/Group';
import Token from './packages/Token';
import Message from './packages/Message';
import Utils from './packages/Utils';
import Source from './packages/Source';
import User from './packages/User';
import Checkin from './packages/Checkin';
import Department from './packages/Department';
import { AxiosInstance } from 'axios';
declare class WorkWechat {
    __config: AppConfig;
    __request: AxiosInstance;
    readonly cryptor: Cryptor;
    readonly token: Token;
    readonly group: Group;
    readonly message: Message;
    readonly utils: Utils;
    readonly source: Source;
    readonly user: User;
    readonly department: Department;
    readonly dep: Department;
    readonly checkin: Checkin;
    constructor(config: AppConfig);
    private __init;
    private __initRequest;
}
export default WorkWechat;
