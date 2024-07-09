# Organisation Register

```ts
const organisationRegisterController = new OrganisationRegisterController(client);
```

## Class Name

`OrganisationRegisterController`

## Methods

* [Organisation Detail 1](../../doc/controllers/organisation-register.md#organisation-detail-1)
* [Generate Email OTP 2](../../doc/controllers/organisation-register.md#generate-email-otp-2)
* [Verify Otp 3](../../doc/controllers/organisation-register.md#verify-otp-3)
* [Create Credentials 4](../../doc/controllers/organisation-register.md#create-credentials-4)
* [TEST](../../doc/controllers/organisation-register.md#test)


# Organisation Detail 1

:information_source: **Note** This endpoint does not require authentication.

```ts
async organisationDetail1(  body: OrganisationDetail1Request,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`OrganisationDetail1Request`](../../doc/models/organisation-detail-1-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: OrganisationDetail1Request = {
  businessName: 'AmazingWeb',
  companyType: 'Partnership',
  documents: 'gst,pan',
  personalVerificationVia: 'PAN',
  panNo: 'HAKPS',
  panName: '',
  panDob: '',
  aadhaarNo: '',
  aadhaarMobile: '',
  firstName: '',
  lastName: '',
  emailId: '',
};

try {
  const { result, ...httpResponse } = await organisationRegisterController.organisationDetail1(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Email OTP 2

:information_source: **Note** This endpoint does not require authentication.

```ts
async generateEmailOTP2(  body: GenerateEmailOTP2Request,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GenerateEmailOTP2Request`](../../doc/models/generate-email-otp2-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: GenerateEmailOTP2Request = {
  id: '{{id}}',
  email: 'akcent2245@gmail.com',
};

try {
  const { result, ...httpResponse } = await organisationRegisterController.generateEmailOTP2(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Verify Otp 3

:information_source: **Note** This endpoint does not require authentication.

```ts
async verifyOtp3(  body: VerifyOtp3Request,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyOtp3Request`](../../doc/models/verify-otp-3-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: VerifyOtp3Request = {
  id: '{{id}}',
  otp: '577312',
};

try {
  const { result, ...httpResponse } = await organisationRegisterController.verifyOtp3(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Credentials 4

:information_source: **Note** This endpoint does not require authentication.

```ts
async createCredentials4(  body: CreateCredentials4Request,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateCredentials4Request`](../../doc/models/create-credentials-4-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: CreateCredentials4Request = {
  id: '{{id}}',
  fname: 'shubham',
  lname: 'siddharth',
  username: 'sid8925',
  password: '123456',
};

try {
  const { result, ...httpResponse } = await organisationRegisterController.createCredentials4(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# TEST

:information_source: **Note** This endpoint does not require authentication.

```ts
async tEST(  body: TESTREQUEST,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TESTREQUEST`](../../doc/models/testrequest.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: TESTREQUEST = {
  businessName: 'AmazingWeb',
  companyType: 'Partnership',
  documents: 'gst,pan',
  personalVerificationVia: 'PAN',
  panNo: 'HAKPS',
  panName: '',
  panDob: '',
  aadhaarNo: '',
  aadhaarMobile: '',
  firstName: '',
  lastName: '',
  emailId: '',
};

try {
  const { result, ...httpResponse } = await organisationRegisterController.tEST(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

