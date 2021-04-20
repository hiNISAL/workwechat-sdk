import SDK from '../';

class ModuleBase {
  public config: AppConfig = {
    corpId: '',
    corpSecret: '',
    appToken: '',
  };

  public ___sdk: SDK|undefined;

  public get request() {
    return this.___sdk?.__request;
  }

  injectSDK(sdk: SDK) {
    this.___sdk = sdk;

    this.config = sdk.__config;
  }
}

export default ModuleBase;
