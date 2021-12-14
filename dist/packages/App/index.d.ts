import BaseModule from '..';
declare class App extends BaseModule {
    createMenu(options: AppCreateMenuOptions): Promise<AppCreateMenuOptions>;
}
export default App;
