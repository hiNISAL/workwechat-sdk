import BaseModule from '..';
declare class Department extends BaseModule {
    list(): Promise<{}>;
    users(depId?: number, fetchChild?: number): {
        department_id: number;
        fetch_child: number;
    };
}
export default Department;
