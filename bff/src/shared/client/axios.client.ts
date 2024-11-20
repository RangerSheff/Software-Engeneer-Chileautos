import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse, Method } from 'axios';

export class AxiosClientException extends Error {
  constructor(
    public readonly code: number,
    public readonly message: string,
    public readonly data: any,
  ) {
    super(message);
  }
}

export interface IAxiosClientParams {
  method: Method;
  url: string;
  params?: any;
  headers?: any;
  body?: any;
}

@Injectable()
export class AxiosClient {
  async call<T>(params: IAxiosClientParams): Promise<AxiosResponse<T, any>> {
    try {
      const response: AxiosResponse<T, any> = await axios({
        method: params.method,
        url: params.url,
        params: params.params,
        data: params.body,
        headers: params.headers,
      });
      return response;
    } catch (error) {
      throw new AxiosClientException(
        error?.response?.status,
        error?.response?.data?.message || error?.response?.statusText,
        error?.response?.data,
      );
    }
  }
}
