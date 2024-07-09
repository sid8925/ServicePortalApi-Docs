/**
 * Service PortalLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AddNewDocumentRequest,
  addNewDocumentRequestSchema,
} from '../models/addNewDocumentRequest';
import {
  UpdateDocumentRequest,
  updateDocumentRequestSchema,
} from '../models/updateDocumentRequest';
import { BaseController } from './baseController';

export class CompanyTypeDocumentADMINController extends BaseController {
  /**
   * @return Response from the API call
   */
  async documentList(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/companyType/documentList/14');
    req.baseUrl('Server 2');
    req.authenticate([{ bearer: true }]);
    return req.call(requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async addNewDocument(
    body: AddNewDocumentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/companyType/documentAdd');
    req.baseUrl('Server 2');
    const mapped = req.prepareArgs({
      body: [body, addNewDocumentRequestSchema],
    });
    req.json(mapped.body);
    req.authenticate([{ bearer: true }]);
    return req.call(requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async updateDocument(
    body: UpdateDocumentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest(
      'PATCH',
      '/companyType/documentUpdate/66794ea3f44f9fdc14fa715d'
    );
    req.baseUrl('Server 2');
    const mapped = req.prepareArgs({
      body: [body, updateDocumentRequestSchema],
    });
    req.json(mapped.body);
    req.authenticate([{ bearer: true }]);
    return req.call(requestOptions);
  }
}
