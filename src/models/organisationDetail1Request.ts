/**
 * Service PortalLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface OrganisationDetail1Request {
  businessName: string;
  companyType: string;
  documents: string;
  personalVerificationVia: string;
  panNo: string;
  panName: string;
  panDob: string;
  aadhaarNo: string;
  aadhaarMobile: string;
  firstName: string;
  lastName: string;
  emailId: string;
}

export const organisationDetail1RequestSchema: Schema<OrganisationDetail1Request> = object(
  {
    businessName: ['businessName', string()],
    companyType: ['companyType', string()],
    documents: ['documents', string()],
    personalVerificationVia: ['personalVerificationVia', string()],
    panNo: ['panNo', string()],
    panName: ['panName', string()],
    panDob: ['panDob', string()],
    aadhaarNo: ['aadhaarNo', string()],
    aadhaarMobile: ['aadhaarMobile', string()],
    firstName: ['firstName', string()],
    lastName: ['lastName', string()],
    emailId: ['emailId', string()],
  }
);
