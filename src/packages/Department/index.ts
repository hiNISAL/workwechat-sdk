import BaseModule from '..';
import { API } from '../../decorators';

class Department extends BaseModule {
  // 获取所有部门
  @API('/department/list')
  async list() {
    return {};
  }

  // 获取部门成员
  @API('/user/simplelist')
  public users(depId = 1, fetchChild = 1) {
    return {
      department_id: depId,
      fetch_child: fetchChild,
    };
  }
}

export default Department;
