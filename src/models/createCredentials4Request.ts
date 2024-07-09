/**
 * Service PortalLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface CreateCredentials4Request {
  id: string;
  fname: string;
  lname: string;
  username: string;
  password: string;
}

export const createCredentials4RequestSchema: Schema<CreateCredentials4Request> = object(
  {
    id: ['id', string()],
    fname: ['fname', string()],
    lname: ['lname', string()],
    username: ['username', string()],
    password: ['password', string()],
  }
);
