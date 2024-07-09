# Company Type ADMIN

```ts
const companyTypeADMINController = new CompanyTypeADMINController(client);
```

## Class Name

`CompanyTypeADMINController`

## Methods

* [Company Type List](../../doc/controllers/company-type-admin.md#company-type-list)
* [Add Company Type](../../doc/controllers/company-type-admin.md#add-company-type)
* [Update Company Type](../../doc/controllers/company-type-admin.md#update-company-type)
* [Add Document List Company Type](../../doc/controllers/company-type-admin.md#add-document-list-company-type)


# Company Type List

:information_source: **Note** This endpoint does not require authentication.

```ts
async companyTypeList(requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await companyTypeADMINController.companyTypeList();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Add Company Type

```ts
async addCompanyType(  body: AddCompanyTypeRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AddCompanyTypeRequest`](../../doc/models/add-company-type-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: AddCompanyTypeRequest = {
  name: 'Trust/Society',
};

try {
  const { result, ...httpResponse } = await companyTypeADMINController.addCompanyType(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Company Type

```ts
async updateCompanyType(  body: UpdateCompanyTypeRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateCompanyTypeRequest`](../../doc/models/update-company-type-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: UpdateCompanyTypeRequest = {
  name: 'Partnership',
  active: 'true',
};

try {
  const { result, ...httpResponse } = await companyTypeADMINController.updateCompanyType(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Add Document List Company Type

:information_source: **Note** This endpoint does not require authentication.

```ts
async addDocumentListCompanyType(requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await companyTypeADMINController.addDocumentListCompanyType();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

