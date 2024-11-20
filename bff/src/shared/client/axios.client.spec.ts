import axios from 'axios';
import { AxiosClient } from './axios.client';

jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(({ url }) => {
    if (url === 'SUCCESSFUL_URL') {
      return Promise.resolve({
        status: 200,
        data: 1,
        headers: {},
      });
    } else if (url === 'UNSUCCESSFUL_URL') {
      return Promise.reject({ status: 401, data: 1 });
    } else {
      throw Error('exception handling');
    }
  }),
}));

describe('AxiosClient', () => {
  const axiosClient: AxiosClient = new AxiosClient();
  describe('call', () => {
    it('AxiosClient.call: should call', async () => {
      await axiosClient.call<number>({
        method: 'POST',
        url: 'SUCCESSFUL_URL',
      });
      expect(axios).toBeCalledTimes(1);
      expect(axios).toHaveBeenCalled();
    });
    it(']AxiosClient.call: should return value', async () => {
      const response = await axiosClient.call<number>({
        method: 'POST',
        url: 'SUCCESSFUL_URL',
      });
      expect(response).toStrictEqual({
        data: 1,
        status: 200,
        headers: {},
      });
    });
    it('AxiosClient.call: should throw exception for status code different from 2XX', async () => {
      expect(
        axiosClient.call<number>({
          method: 'POST',
          url: 'EXCEPTION_URL',
        }),
      ).rejects.toThrowError();
    });
  });
});
