import SDK from '../';
declare class ModuleBase {
    config: AppConfig;
    ___sdk: SDK | undefined;
    get request(): import("axios").AxiosInstance | undefined;
    injectSDK(sdk: SDK): void;
}
export default ModuleBase;
