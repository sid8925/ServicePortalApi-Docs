/**
 * Service PortalLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface UserCreateTestCopyRequest {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const userCreateTestCopyRequestSchema: Schema<UserCreateTestCopyRequest> = object(
  {
    name: ['name', string()],
    email: ['email', string()],
    password: ['password', string()],
    role: ['role', string()],
  }
);
