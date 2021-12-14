import BaseModule from '..';
import { API, APIPost } from '../../decorators';

class App extends BaseModule {
  // 获取30天打卡数据
  @APIPost('/menu/create', {
    withAgentId: true,
  })
  public async createMenu(options: AppCreateMenuOptions) {
    return options;
  }
}

export default App;
