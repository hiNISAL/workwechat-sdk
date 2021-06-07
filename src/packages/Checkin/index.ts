import BaseModule from '..';
import { API, APIPost } from '../../decorators';

class Checkin extends BaseModule {
  // 获取30天打卡数据
  @APIPost('/checkin/getcheckin_monthdata')
  public async getDataMonth(options: CheckinGetDataMonthOptions) {
    return options;
  }

  @APIPost('/checkin/getcheckindata')
  public async getDataDaily(options: CheckinGetDataDailyOptions) {
    return {
      opencheckindatatype: 3,
      ...options,
    };
  }
}

export default Checkin;
