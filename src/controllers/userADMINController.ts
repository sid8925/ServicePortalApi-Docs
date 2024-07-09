/**
 * Service PortalLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { BaseController } from './baseController';

export class UserADMINController extends BaseController {
  /**
   * @return Response from the API call
   */
  async userList(requestOptions?: RequestOptions): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/customer');
    req.baseUrl('Server 2');
    req.authenticate([]);
    return req.call(requestOptions);
  }
}
