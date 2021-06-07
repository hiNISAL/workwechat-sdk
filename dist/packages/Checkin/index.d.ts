import BaseModule from '..';
declare class Checkin extends BaseModule {
    getDataMonth(options: CheckinGetDataMonthOptions): Promise<CheckinGetDataMonthOptions>;
    getDataDaily(options: CheckinGetDataDailyOptions): Promise<{
        starttime?: number | undefined;
        endtime?: number | undefined;
        useridlist?: string[] | undefined;
        accessToken?: string | undefined;
        opencheckindatatype: number;
    }>;
}
export default Checkin;
