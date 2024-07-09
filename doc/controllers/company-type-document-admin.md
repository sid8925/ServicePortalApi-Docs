# Company Type Document ADMIN

```ts
const companyTypeDocumentADMINController = new CompanyTypeDocumentADMINController(client);
```

## Class Name

`CompanyTypeDocumentADMINController`

## Methods

* [Document List](../../doc/controllers/company-type-document-admin.md#document-list)
* [Add New Document](../../doc/controllers/company-type-document-admin.md#add-new-document)
* [Update Document](../../doc/controllers/company-type-document-admin.md#update-document)


# Document List

```ts
async documentList(requestOptions?: RequestOptions): Promise<ApiResponse<void>>
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
  const { result, ...httpResponse } = await companyTypeDocumentADMINController.documentList();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Add New Document

```ts
async addNewDocument(  body: AddNewDocumentRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AddNewDocumentRequest`](../../doc/models/add-new-document-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: AddNewDocumentRequest = {
  documentName: 'GST CERTIFICATE',
  companyId: 1,
};

try {
  const { result, ...httpResponse } = await companyTypeDocumentADMINController.addNewDocument(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Document

```ts
async updateDocument(  body: UpdateDocumentRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateDocumentRequest`](../../doc/models/update-document-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: UpdateDocumentRequest = {
  documentName: 'Pan Card Sid',
};

try {
  const { result, ...httpResponse } = await companyTypeDocumentADMINController.updateDocument(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

