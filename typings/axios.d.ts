import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    withAccessToken?: boolean;
    withAgentId?: boolean;
    debug?: boolean;
  }
}
