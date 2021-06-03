import BaseModule from '../';
declare class User extends BaseModule {
    info(options: UserInfoOptions): Promise<unknown>;
}
export default User;
