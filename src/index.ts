import Cryptor from './packages/Cryptor';
import Group from './packages/Group';
import Token from './packages/Token';
import Message from './packages/Message';
import Utils from './packages/Utils';
import Source from './packages/Source';
import User from './packages/User';
import Checkin from './packages/Checkin';
import Department from './packages/Department';
import axios, { AxiosInstance } from 'axios';
import initRequest from './helpers/initRequest';

class WorkWechat {
  public __config: AppConfig = {
    corpId: '',
    corpSecret: '',
    appToken: '',
  };

  public __request: AxiosInstance = axios.create();

  public readonly cryptor = new Cryptor();

  public readonly token = new Token();

  public readonly group = new Group();

  public readonly message = new Message();

  public readonly utils = new Utils();

  public readonly source = new Source();

  public readonly user = new User();

  public readonly department = new Department();
  // department 的别名
  public readonly dep: Department;

  public readonly checkin = new Checkin();

  public constructor(
    config: AppConfig,
  ) {
    this.__config = config;
    this.dep = this.department;
    this.__init();
  }

  private __init(): void {
    this.cryptor.injectSDK(this);
    this.message.injectSDK(this);
    this.token.injectSDK(this);
    this.group.injectSDK(this);
    this.utils.injectSDK(this);
    this.source.injectSDK(this);
    this.user.injectSDK(this);
    this.department.injectSDK(this);
    this.checkin.injectSDK(this);

    this.__initRequest();
  }

  private __initRequest(): void {
    initRequest(this);
  }
}

export default WorkWechat;
