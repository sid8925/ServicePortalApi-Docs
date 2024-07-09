# Organisation Login

```ts
const organisationLoginController = new OrganisationLoginController(client);
```

## Class Name

`OrganisationLoginController`

## Methods

* [Login](../../doc/controllers/organisation-login.md#login)
* [Verify Supplier OTP](../../doc/controllers/organisation-login.md#verify-supplier-otp)


# Login

:information_source: **Note** This endpoint does not require authentication.

```ts
async login(  body: LoginRequest1,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LoginRequest1`](../../doc/models/login-request-1.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: LoginRequest1 = {
  email: 'sid@gmail.com',
};

try {
  const { result, ...httpResponse } = await organisationLoginController.login(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Verify Supplier OTP

:information_source: **Note** This endpoint does not require authentication.

```ts
async verifySupplierOTP(  body: VerifySupplierOTPRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifySupplierOTPRequest`](../../doc/models/verify-supplier-otp-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: VerifySupplierOTPRequest = {
  id: '{{id}}',
  otp: '111111',
};

try {
  const { result, ...httpResponse } = await organisationLoginController.verifySupplierOTP(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

